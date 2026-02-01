import { useEffect } from "react";
import { useLocation } from "react-router";

export default function ScrollTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
  }, [pathname]);

  return null;
}
