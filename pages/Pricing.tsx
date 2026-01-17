import React from 'react';
import { Check, Star, BadgeCheck, Users } from 'lucide-react';
import { PageHeader } from '../components/Shared';
import Footer from '../components/Footer';

const PricingPage = () => (
  <div className="bg-white min-h-screen">
    <PageHeader title="멤버십 안내" subtitle="Pricing Plan" />
    
    <section id="pricing" className="bg-white">
      <div className="py-24 md:py-32 px-0 max-w-[800px] w-[90%] md:w-full mx-auto">
        {/* 1. Header & Description */}
        <div className="text-center mb-16 md:mb-20">
          <h2 className="font-eng text-3xl md:text-4xl font-bold text-eum-accent mb-4 uppercase tracking-widest">
            Membership
          </h2>
          <h3 className="font-sans text-2xl md:text-3xl font-bold text-gray-900 leading-tight">
            3개월 구독제 솔루션<br />
            <span className="text-base font-bold text-eum-accent mt-4 inline-block px-4 py-1 bg-eum-accent/10 rounded-full">
              최소 12명 이상의 프로필 제공 보장
            </span>
          </h3>
          <p className="mt-8 text-gray-500 max-w-xl mx-auto text-sm md:text-base leading-relaxed keep-all font-medium">
            단순히 횟수만 채우는 만남이 아닙니다. 3개월 동안 매니저가 <br className="hidden md:block" />
            당신의 이상형에 가장 가까운 인연을 찾을 때까지 함께합니다.
          </p>
        </div>

        {/* 2. Pricing Cards */}
        <div className="grid md:grid-cols-2 gap-8 mb-24 md:mb-32">
          {/* Basic Plan */}
          <div className="bg-white rounded-[2.5rem] p-8 md:p-10 shadow-[0_8px_40px_rgb(0,0,0,0.06)] border border-gray-100 hover:-translate-y-2 transition-all duration-500 flex flex-col">
            <div className="mb-8">
              <span className="inline-block bg-gray-100 text-gray-500 text-[10px] font-black px-4 py-1.5 rounded-full tracking-widest mb-6 uppercase">
                Basic Plan
              </span>
              <h4 className="text-2xl font-bold text-gray-900">베이직</h4>
              <p className="text-gray-500 text-xs mt-4 font-medium leading-relaxed">합리적인 비용으로 시작하는<br />실속형 1:1 매칭 플랜</p>
            </div>

            <ul className="space-y-4 mb-10 flex-1">
              <li className="flex items-center gap-3 text-gray-700 text-sm font-medium">
                <Check className="w-4 h-4 text-eum-accent" />
                <span>3개월 무제한 프로필 제공</span>
              </li>
              <li className="flex items-center gap-3 text-gray-900 font-bold text-sm bg-gray-50 p-4 rounded-2xl">
                <BadgeCheck className="w-5 h-5 text-eum-accent" />
                <span>[조건 2개] 우선 매칭 보장</span>
              </li>
            </ul>

            <div className="mt-auto space-y-4 pt-6 border-t border-gray-50">
              <div className="flex justify-between items-center px-2">
                <span className="text-gray-400 text-[10px] font-bold uppercase tracking-wider">Male</span>
                <span className="text-xl font-black text-gray-900">180,000원</span>
              </div>
              <div className="w-full h-px bg-gray-100"></div>
              <div className="flex justify-between items-center px-2">
                <span className="text-gray-400 text-[10px] font-bold uppercase tracking-wider">Female</span>
                <span className="text-xl font-black text-gray-900">120,000원</span>
              </div>
            </div>
          </div>

          {/* Premium Plan */}
          <div className="bg-white rounded-[2.5rem] p-8 md:p-10 shadow-[0_20px_50px_rgb(142,127,112,0.15)] border-2 border-eum-accent/20 hover:-translate-y-2 transition-all duration-500 relative overflow-hidden flex flex-col">
            <div className="absolute top-0 right-0 bg-eum-accent text-white text-[10px] font-black px-5 py-1.5 rounded-bl-2xl uppercase tracking-tighter shadow-sm">Recommended</div>
            <div className="mb-8">
              <span className="inline-block bg-eum-accent/10 text-eum-accent text-[10px] font-black px-4 py-1.5 rounded-full tracking-widest mb-6 uppercase">
                Premium Plan
              </span>
              <h4 className="text-2xl font-bold text-eum-accent">프리미엄</h4>
              <p className="text-gray-500 text-xs mt-4 font-medium leading-relaxed">디테일한 조건까지 반영하여<br />엄선된 인연을 소개합니다</p>
            </div>

            <ul className="space-y-4 mb-10 flex-1">
              <li className="flex items-center gap-3 text-gray-700 text-sm font-medium">
                <Check className="w-4 h-4 text-eum-accent" />
                <span>3개월 무제한 프로필 제공</span>
              </li>
              <li className="flex items-center gap-3 text-eum-accent font-bold text-sm bg-eum-accent/5 p-4 rounded-2xl">
                <BadgeCheck className="w-5 h-5 text-eum-accent" />
                <span>[조건 5개] 정밀 매칭 보장</span>
              </li>
              <li className="flex items-center gap-3 text-amber-600 text-[11px] font-bold px-1">
                <Star className="w-3.5 h-3.5 fill-amber-500 text-amber-500" />
                <span>매칭 실패 시, '우반(6:6)' 참가권 증정</span>
              </li>
            </ul>

            <div className="mt-auto space-y-4 pt-6 border-t border-eum-accent/10">
              <div className="flex justify-between items-center px-2">
                <span className="text-eum-accent/60 text-[10px] font-bold uppercase tracking-wider">Male</span>
                <span className="text-xl font-black text-eum-accent">360,000원</span>
              </div>
              <div className="w-full h-px bg-eum-accent/10"></div>
              <div className="flex justify-between items-center px-2">
                <span className="text-eum-accent/60 text-[10px] font-bold uppercase tracking-wider">Female</span>
                <span className="text-xl font-black text-eum-accent">240,000원</span>
              </div>
            </div>
          </div>
        </div>

        {/* 3. Matching Success Fee Table */}
        <div className="max-w-[800px] mx-auto mt-20 md:mt-24">
          <div className="bg-[#1C1C1C] rounded-[3rem] p-10 md:p-14 text-white shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-eum-accent/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
            
            <div className="relative z-10">
              <div className="flex flex-col items-center justify-center gap-2 mb-4">
                <Users className="w-6 h-6 text-eum-accent" />
                <h3 className="text-xl md:text-2xl font-bold text-center">매칭 성사비</h3>
              </div>
              <p className="text-center text-gray-400 text-xs mb-10 md:mb-14">서로의 프로필을 보고 만남을 수락했을 때만 발생합니다.</p>
              
              <div className="grid md:grid-cols-2 gap-10 md:divide-x md:divide-white/10">
                {/* Men's Fee */}
                <div className="space-y-6 md:pr-10">
                  <h4 className="text-center text-sm font-bold text-eum-accent pb-4 border-b border-white/10 uppercase tracking-widest">Men's Fee</h4>
                  <div className="space-y-4 text-sm px-2">
                    <div className="flex justify-between items-center text-gray-400"><span className="font-medium">25세 이하</span><span className="text-white font-bold">20,000원</span></div>
                    <div className="flex justify-between items-center text-gray-400"><span className="font-medium">26 - 30세</span><span className="text-white font-bold">30,000원</span></div>
                    <div className="flex justify-between items-center text-gray-400"><span className="font-medium">31 - 34세</span><span className="text-white font-bold">40,000원</span></div>
                    <div className="flex justify-between items-center text-gray-400"><span className="font-medium">35 - 38세</span><span className="text-white font-bold">50,000원</span></div>
                    <div className="flex justify-between items-center text-gray-400"><span className="font-medium">38세 이상</span><span className="text-white font-bold">60,000원</span></div>
                  </div>
                </div>
                
                {/* Women's Fee */}
                <div className="md:pl-10 space-y-6">
                  <h4 className="text-center text-sm font-bold text-[#FF8A8A] pb-4 border-b border-white/10 uppercase tracking-widest">Women's Fee</h4>
                  <div className="space-y-4 text-sm px-2">
                    <div className="flex justify-between items-center text-gray-400"><span className="font-medium">25세 이하</span><span className="text-white font-bold">20,000원</span></div>
                    <div className="flex justify-between items-center text-gray-400"><span className="font-medium">26 - 28세</span><span className="text-white font-bold">30,000원</span></div>
                    <div className="flex justify-between items-center text-gray-400"><span className="font-medium">29 - 31세</span><span className="text-white font-bold">40,000원</span></div>
                    <div className="flex justify-between items-center text-gray-400"><span className="font-medium">32 - 34세</span><span className="text-white font-bold">50,000원</span></div>
                    <div className="flex justify-between items-center text-gray-400"><span className="font-medium">35세 이상</span><span className="text-white font-bold">60,000원</span></div>
                  </div>
                </div>
              </div>

              <div className="mt-12 pt-6 border-t border-white/10 text-center">
                <p className="text-gray-500 text-[10px] font-medium uppercase tracking-tighter">※ 위 금액은 1회 매칭 성사 시 발생하는 비용입니다.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <div className="bg-[#0f0f0f] text-white">
      <Footer />
    </div>
  </div>
);

export default PricingPage;