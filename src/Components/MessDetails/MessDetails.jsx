import { useEffect, useState, useRef } from "react";
import { useParams } from "react-router";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Loding from "../Loding/Loding";
import MessProfile from "../AdminLayout/MessProfile";
import axios from "axios";
import { useNavigate } from 'react-router';


const MessDetails = () => {

  const navigate = useNavigate();
  const { id } = useParams();     // get id from URL
  const [mess, setMess] = useState(null);
  const sectionRef = useRef();

  useEffect(() => {

    const fetchMess = async () => {
      try {

        const res = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/customer/mess/${id}`, { withCredentials: true });
        setMess(res.data.mess);

      } catch (error) {
        console.log(error);
        navigate('/error');
      }
    };

    fetchMess();

  }, [id]);


  if (!mess) {
    return (
      <div className="h-screen flex justify-center items-center bg-black">
        <Loding />
      </div>
    );
  }

  return (
    <div className="min-h-screen w-full lg:pt-22 md:pt-22 px-10 py-5 bg-gray-50">
      <MessProfile data={mess} />
    </div>
  );
};

export default MessDetails;