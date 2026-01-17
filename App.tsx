import React, { useEffect, useState, useRef } from 'react';
import { HashRouter as Router, Routes, Route, useLocation, Navigate, useNavigate } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Navbar from './components/Navbar';
import { FloatingMenu, Preloader } from './components/Shared';
import { IMAGES, TEXTS } from './lib/assets';

// Pages
import Home from './pages/Home';
import About from './pages/About';
import Service from './pages/Service';
import CriteriaPage from './pages/Criteria';
import PricingPage from './pages/Pricing';
import FaqPage from './pages/Faq';
import ContactPage from './pages/Contact';
import ApplyPage from './pages/Apply';
import AdminPage from './pages/Admin';
import InstagramRegionsPage from './pages/Instagram';
import PolicyPage from './pages/Policy';

gsap.registerPlugin(ScrollTrigger);

const AppContent = () => {
    const [loading, setLoading] = useState(true);
    const [, setUpdateTick] = useState(0);
    const wrapperRef = useRef<HTMLDivElement>(null);
    const location = useLocation();
    const navigate = useNavigate();

    // 새로고침이나 첫 로드 시 홈화면이 강제로 나오도록 처리
    useEffect(() => {
        const isFreshLoad = !window.name || window.name === "";
        if (isFreshLoad) {
            window.name = "eum_session"; 
            if (location.pathname !== '/') {
                navigate('/', { replace: true });
            }
        }
    }, [navigate, location.pathname]);

    useEffect(() => {
        if (!loading && wrapperRef.current) {
            gsap.to(wrapperRef.current, { opacity: 1, duration: 0.8, ease: 'power2.out', onComplete: () => ScrollTrigger.refresh() });
        }
    }, [loading]);

    useEffect(() => {
        const handleAssetUpdate = () => {
            setUpdateTick(prev => prev + 1);
            ScrollTrigger.refresh();

            // Update Meta Data
            document.title = TEXTS.siteTitle || "E.UM LOG";
            
            // Update Favicon
            const faviconUrl = IMAGES.favicon;
            if (faviconUrl) {
                let link = document.getElementById("dynamic-favicon") as HTMLLinkElement;
                if (!link) {
                    link = document.createElement('link');
                    link.id = 'dynamic-favicon';
                    link.rel = 'icon';
                    document.head.appendChild(link);
                }
                link.href = faviconUrl;
            }

            // Update OG Image (for social sharing)
            const ogImageUrl = IMAGES.ogImage;
            if (ogImageUrl) {
                let ogMeta = document.getElementById("dynamic-og-image") as HTMLMetaElement;
                if (!ogMeta) {
                    ogMeta = document.createElement('meta');
                    ogMeta.id = 'dynamic-og-image';
                    ogMeta.setAttribute('property', 'og:image');
                    document.head.appendChild(ogMeta);
                }
                ogMeta.content = ogImageUrl;
            }
        };
        handleAssetUpdate(); // Initial call
        window.addEventListener('assets-updated', handleAssetUpdate);
        return () => window.removeEventListener('assets-updated', handleAssetUpdate);
    }, []);

    // Scroll to top on route change
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location.pathname]);

    const showFloatingBanner = location.pathname !== '/contact' && location.pathname !== '/admin';

    return (
        <>
            {loading && <Preloader onComplete={() => setLoading(false)} />}
            <div ref={wrapperRef} className="min-h-screen flex flex-col justify-between transition-opacity duration-500" style={{ opacity: loading ? 0 : 1 }}>
                <Navbar />
                {showFloatingBanner && <FloatingMenu />}
                <div className="flex-1">
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/service" element={<Service />} />
                        <Route path="/criteria" element={<CriteriaPage />} />
                        <Route path="/pricing" element={<PricingPage />} />
                        <Route path="/faq" element={<FaqPage />} />
                        <Route path="/contact" element={<ContactPage />} />
                        <Route path="/apply" element={<ApplyPage />} />
                        <Route path="/admin" element={<AdminPage />} />
                        <Route path="/instagram" element={<InstagramRegionsPage />} />
                        <Route path="/policy" element={<PolicyPage />} />
                        <Route path="*" element={<Navigate to="/" replace />} />
                    </Routes>
                </div>
            </div>
        </>
    );
};

const App = () => (
    <Router>
        <AppContent />
    </Router>
);

export default App;