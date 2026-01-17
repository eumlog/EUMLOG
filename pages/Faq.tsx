import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Minus, Plus, MessageCircle } from 'lucide-react';
import { PageHeader } from '../components/Shared';
import Footer from '../components/Footer';
import { FAQItem } from '../types';

const FaqPage = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(0);
    const faqData: FAQItem[] = [{ q: "소개는 얼마나 자주 오나요?", a: "보통 5~7일 간격으로 1명을 기본으로 제안합니다." }, { q: "3개월 동안 정말 계속 소개해주나요?", a: "네. 구독 기간 동안 매칭은 계속 진행됩니다." }, { q: "상대도 저를 선택한 건가요?", a: "아닙니다. 이음로그는 상호 수락 구조입니다." }, { q: "매칭이 아예 안 될 수도 있나요?", a: "가능성은 있습니다. 조건이 매우 제한적이거나, 사진·프로필 경쟁력이 낮은 경우 매칭까지 시간이 오래 걸릴 수 있습니다." }, { q: "지인이 나올 가능성은 정말 없나요?", a: "프로필 제공 전, 상대방의 ‘초성/나이/지역’을 통해 지인 여부를 미리 확인하여 지인을 사전에 차단합니다." }];
    return (
        <div className="bg-eum-bg min-h-screen">
            <PageHeader title="무엇이든 물어보세요" subtitle="F.A.Q" />
            <div className="py-20">
                <section id="faq" className="py-32 px-6 bg-eum-bg">
                    <div className="max-w-[700px] mx-auto">
                        <div className="text-center mb-16"><h2 className="font-sans text-2xl md:text-3xl font-bold tracking-tight text-eum-dark">자주 묻는 질문</h2></div>
                        <div className="space-y-4">
                            {faqData.map((item, index) => (
                                <div key={index} className="border-b border-gray-300 pb-4">
                                    <button onClick={() => setOpenIndex(openIndex === index ? null : index)} className="w-full flex justify-between items-center py-4 text-left group">
                                        <span className={`text-base md:text-lg font-bold transition-colors ${openIndex === index ? 'text-eum-dark' : 'text-gray-500 group-hover:text-eum-dark'}`}>Q. {item.q}</span>
                                        <div className="text-gray-400">{openIndex === index ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}</div>
                                    </button>
                                    <div className={`overflow-hidden transition-all duration-300 ease-in-out ${openIndex === index ? 'max-h-80 opacity-100' : 'max-h-0 opacity-0'}`}><p className="pb-6 text-gray-600 font-medium leading-relaxed keep-all text-sm md:text-base whitespace-pre-line">{item.a}</p></div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
                <div className="max-w-[600px] mx-auto px-6 mt-16 text-center"><div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100"><h3 className="text-lg font-bold text-eum-dark mb-2">찾으시는 질문이 없나요?</h3><p className="text-gray-500 text-sm mb-6">담당 매니저에게 직접 문의하시면 빠르게 답변해 드립니다.</p><Link to="/contact" className="inline-flex items-center justify-center gap-2 px-8 py-3 bg-eum-dark text-white font-bold rounded-full hover:bg-black transition-colors text-sm"><MessageCircle className="w-4 h-4" /> 1:1 상담 문의하기</Link></div></div>
            </div>
            <div className="bg-[#0f0f0f] text-white"><Footer /></div>
        </div>
    );
};

export default FaqPage;