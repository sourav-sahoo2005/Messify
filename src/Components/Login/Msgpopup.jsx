import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { Bell, X } from 'lucide-react';

const Msgpopup = ({ message, onClose, duration = 5000 }) => {
    const container = useRef();
    const popupRef = useRef();
    const progressRef = useRef();

    // Handle the animation logic
    useGSAP(() => {
        if (message) {
            const tl = gsap.timeline();

            // 1. Entrance Animation
            tl.fromTo(popupRef.current,
                { y: 100, opacity: 0, scale: 0.8 },
                { y: 0, opacity: 1, scale: 1, duration: 0.5, ease: "back.out(1.7)" }
            );

            // 2. Progress Bar Animation (visual countdown)
            tl.fromTo(progressRef.current,
                { width: "100%" },
                { width: "0%", duration: duration / 1000, ease: "none" },
                "<" // Starts at the same time as the entrance
            );

            // 3. Auto-Exit Animation
            tl.to(popupRef.current, {
                opacity: 0,
                x: 50,
                duration: 0.4,
                ease: "power2.in",
                onComplete: onClose // Triggers the parent state cleanup
            });
        }
    }, { scope: container, dependencies: [message] });

    if (!message) return null;

    return (
        <div ref={container} className="fixed bottom-8 right-8 z-50">
            <div
                ref={popupRef}
                className="relative overflow-hidden flex items-center gap-4 w-85 p-5 bg-slate-900 text-white rounded-2xl shadow-2xl border border-slate-700"
            >
                {/* Icon */}
                <div className="shrink-0 w-10 h-10 bg-linear-to-br from-cyan-400 to-blue-600 rounded-full flex items-center justify-center shadow-lg shadow-blue-500/20">
                    <Bell size={20} className="text-white" />
                </div>

                {/* Text */}
                <div className="flex-1">
                    <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest">Message</h4>
                    <p className="text-sm font-medium text-slate-100">{message}</p>
                </div>

                {/* Manual Close */}
                <button
                    onClick={() => {
                        gsap.to(popupRef.current, { opacity: 0, scale: 0.9, duration: 0.2, onComplete: onClose });
                    }}
                    className="p-1 hover:bg-slate-800 rounded-md transition-colors"
                >
                    <X size={18} className="text-slate-500 hover:text-white" />
                </button>

                {/* GSAP Controlled Progress Bar */}
                <div
                    ref={progressRef}
                    className="absolute bottom-0 left-0 h-1 bg-linear-to-r from-cyan-400 to-blue-500"
                />
            </div>
        </div>
    );
};

export default Msgpopup;