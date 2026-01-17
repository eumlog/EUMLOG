import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { Link } from 'react-router-dom';
import { CreditCard, ClipboardList, PenLine, UserCheck } from 'lucide-react';

export const Preloader = ({ onComplete }: { onComplete: () => void }) => {
    const containerRef = useRef<HTMLDivElement>(null);
    const barRef = useRef<HTMLDivElement>(null);
    const textRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const safetyTimeout = setTimeout(() => {
            onComplete();
        }, 3500);

        const ctx = gsap.context(() => {
            const tl = gsap.timeline({
                onComplete: () => {
                    clearTimeout(safetyTimeout);
                    onComplete();
                }
            });
            
            if (containerRef.current) {
                gsap.set(containerRef.current, { opacity: 1 });
                tl.to(barRef.current, { width: '100%', duration: 1.2, ease: 'power2.inOut' })
                  .to(textRef.current, { y: -20, opacity: 0, duration: 0.4 })
                  .to(containerRef.current, { yPercent: -100, duration: 0.6, ease: 'power4.inOut' }, "-=0.1");
            }
        });

        return () => {
            clearTimeout(safetyTimeout);
            ctx.revert();
        };
    }, [onComplete]);

    return (
        <div ref={containerRef} className="fixed inset-0 z-[9999] bg-[#1a1a1a] flex flex-col items-center justify-center text-white">
            <div ref={textRef} className="font-sans font-bold text-2xl tracking-[0.2em] mb-8">E.UM LOG</div>
            <div className="w-64 h-[2px] bg-white/20 relative overflow-hidden">
                <div ref={barRef} className="absolute left-0 top-0 h-full w-0 bg-white"></div>
            </div>
        </div>
    );
};

export const PageHeader = ({ title, subtitle }: { title: string; subtitle: string }) => {
    const containerRef = useRef<HTMLDivElement>(null);
    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from('.header-reveal', { 
                y: 30, 
                opacity: 0, 
                duration: 0.8, 
                stagger: 0.15, 
                ease: 'power3.out' 
            });
        }, containerRef);
        return () => ctx.revert();
    }, []);
    return (
        <div ref={containerRef} className="pt-32 md:pt-40 pb-16 md:pb-20 px-0 bg-eum-dark text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-[50vh] h-[50vh] bg-white/5 rounded-full blur-[80px] pointer-events-none translate-x-1/2 -translate-y-1/2"></div>
            <div className="max-w-[900px] w-[82%] md:w-full mx-auto relative z-10">
                <div className="header-reveal font-eng text-[9px] md:text-[10px] font-bold tracking-[0.2em] text-eum-accent uppercase mb-4 md:mb-6">{subtitle}</div>
                <h1 className="header-reveal font-sans text-2xl md:text-5xl font-bold tracking-tight leading-tight">{title}</h1>
            </div>
        </div>
    );
};

export const FloatingMenu = () => (
    <div className="fixed right-0 top-1/2 transform -translate-y-1/2 z-40 flex flex-col bg-[#1C1C1C]/85 backdrop-blur-2xl rounded-l-xl md:rounded-l-2xl shadow-[0_10px_50px_rgba(0,0,0,0.4)] border-l border-y border-white/10 overflow-hidden transition-all duration-300 hover:bg-[#1C1C1C]/95">
        <Link to="/pricing" className="group flex flex-col items-center justify-center w-[52px] h-[50px] md:w-[84px] md:h-[80px] border-b border-white/5 hover:bg-eum-accent transition-all duration-300">
            <CreditCard className="w-4 h-4 md:w-5 md:h-5 text-gray-300 group-hover:text-white mb-0.5 md:mb-1 transition-colors duration-300" /><span className="text-[9px] md:text-[11px] font-bold text-gray-300 group-hover:text-white transition-colors duration-300 tracking-tight text-center leading-[1.1]">멤버십<br className="md:hidden" /> 안내</span>
        </Link>
        <Link to="/service" className="group flex flex-col items-center justify-center w-[52px] h-[50px] md:w-[84px] md:h-[80px] border-b border-white/5 hover:bg-eum-accent transition-all duration-300">
            <ClipboardList className="w-4 h-4 md:w-5 md:h-5 text-gray-300 group-hover:text-white mb-0.5 md:mb-1 transition-colors duration-300" /><span className="text-[9px] md:text-[11px] font-bold text-gray-300 group-hover:text-white transition-colors duration-300 tracking-tight text-center leading-[1.1]">진행방식</span>
        </Link>
        <Link to="/criteria" className="group flex flex-col items-center justify-center w-[52px] h-[50px] md:w-[84px] md:h-[80px] border-b border-white/5 hover:bg-eum-accent transition-all duration-300">
            <UserCheck className="w-4 h-4 md:w-5 md:h-5 text-gray-300 group-hover:text-white mb-0.5 md:mb-1 transition-colors duration-300" /><span className="text-[9px] md:text-[11px] font-bold text-gray-300 group-hover:text-white transition-colors duration-300 tracking-tight text-center leading-[1.1]">가입기준</span>
        </Link>
        <Link to="/apply" className="group flex flex-col items-center justify-center w-[52px] h-[50px] md:w-[84px] md:h-[80px] hover:bg-eum-accent transition-all duration-300">
            <PenLine className="w-4 h-4 md:w-5 md:h-5 text-gray-300 group-hover:text-white mb-0.5 md:mb-1 transition-colors duration-300" /><span className="text-[9px] md:text-[11px] font-bold text-gray-300 group-hover:text-white transition-colors duration-300 tracking-tight text-center leading-[1.1]">신청하기</span>
        </Link>
    </div>
);