import React, { useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import gsap from 'gsap';
import { Menu, MessageCircle, X } from 'lucide-react';
import { TEXTS } from '../lib/assets';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [siteTitle, setSiteTitle] = useState(TEXTS.siteTitle);
    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 50);
        const handleAssetUpdate = () => { setSiteTitle(TEXTS.siteTitle); };
        window.addEventListener('scroll', handleScroll);
        window.addEventListener('assets-updated', handleAssetUpdate);
        return () => { 
            window.removeEventListener('scroll', handleScroll); 
            window.removeEventListener('assets-updated', handleAssetUpdate); 
        };
    }, []);

    useEffect(() => {
        if (mobileMenuOpen) gsap.to('.mobile-menu', { x: 0, duration: 0.5, ease: 'power3.out' });
        else gsap.to('.mobile-menu', { x: '100%', duration: 0.5, ease: 'power3.in' });
    }, [mobileMenuOpen]);

    const isActive = (path: string) => (path === '/' && location.pathname === '/') || (path !== '/' && location.pathname.startsWith(path));
    
    const handleLogoClick = (e: React.MouseEvent) => {
        if (location.pathname === '/') { 
            e.preventDefault(); 
            window.scrollTo({ top: 0, behavior: 'smooth' }); 
        } else {
            navigate('/');
        }
    };

    const navLinks = [
        { name: '소개', href: '/about' }, 
        { name: '멤버십 안내', href: '/pricing' }, 
        { name: '진행방식', href: '/service' }, 
        { name: '가입기준', href: '/criteria' }, 
        { name: '자주 묻는 질문', href: '/faq' }
    ];

    return (
        <>
            <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled || mobileMenuOpen ? 'bg-white/90 backdrop-blur-md border-b border-gray-100 text-black shadow-sm' : 'text-white mix-blend-difference'}`}>
                <div className="max-w-[850px] w-[82%] md:w-full mx-auto py-4 md:py-6 flex justify-between items-center">
                    <div className="z-50 relative group">
                        <Link to="/" onClick={handleLogoClick} className="block">
                            <span className="font-sans font-black text-lg md:text-2xl tracking-tighter cursor-pointer uppercase">E.UM LOG</span>
                        </Link>
                    </div>
                    <div className={`hidden lg:flex gap-8 text-sm font-bold tracking-widest ${isScrolled ? 'text-gray-800' : 'text-gray-200'}`}>
                        {navLinks.map((link) => (
                            <Link key={link.name} to={link.href} className={`relative py-2 transition-colors duration-300 hover:text-eum-accent ${isActive(link.href) ? 'text-eum-accent' : ''}`}>
                                {link.name}
                                <span className={`absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1 h-1 rounded-full bg-eum-accent transition-all duration-300 ${isActive(link.href) ? 'opacity-100' : 'opacity-0'}`} />
                            </Link>
                        ))}
                    </div>
                    <div className={`hidden md:flex items-center gap-6 ${isScrolled ? 'text-black' : 'text-white'}`}>
                        <Link to="/contact" className="text-sm font-bold hover:text-eum-accent transition-colors flex items-center gap-1 group">
                            <MessageCircle className="w-4 h-4 group-hover:scale-110 transition-transform" /> 상담문의
                        </Link>
                        <Link to="/apply" className={`px-5 py-2 border rounded-full text-sm font-bold transition-all duration-300 ${isScrolled ? 'border-black hover:bg-black hover:text-white' : 'border-white/30 hover:bg-white hover:text-black'}`}>
                            신청하기
                        </Link>
                    </div>
                    <div className="lg:hidden z-50 cursor-pointer hover:text-eum-accent transition-colors" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
                        {mobileMenuOpen ? <X className="w-5 h-5 text-black" /> : <Menu className="w-5 h-5" />}
                    </div>
                </div>
            </nav>
            <div className="mobile-menu fixed inset-0 bg-white z-40 transform translate-x-full flex flex-col justify-center items-center gap-8 text-lg font-bold text-eum-dark lg:hidden">
                {navLinks.map((link) => (
                    <Link key={link.name} to={link.href} onClick={() => setMobileMenuOpen(false)} className={`hover:text-eum-accent transition-colors ${isActive(link.href) ? 'text-eum-accent' : ''}`}>
                        {link.name}
                    </Link>
                ))}
                <div className="flex flex-col gap-4 mt-8 items-center">
                    <Link to="/contact" onClick={() => setMobileMenuOpen(false)} className="text-sm font-bold flex items-center gap-2">
                        <MessageCircle className="w-4 h-4" /> 상담문의
                    </Link>
                    <Link to="/apply" onClick={() => setMobileMenuOpen(false)} className="px-8 py-3 bg-eum-dark text-white rounded-full text-sm font-bold">
                        매칭 신청하기
                    </Link>
                </div>
            </div>
        </>
    );
};

export default Navbar;