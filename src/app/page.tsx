'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, Github, ExternalLink } from 'lucide-react';

export default function Home() {
  const [language, setLanguage] = useState<'ja' | 'en'>('ja');

  const content = {
    ja: {
      badge: 'AI開発・機械学習スペシャリスト',
      greeting: 'こんにちは、私は',
      name: '出口 大',
      role: 'AIエンジニア・YouTuber',
      title: 'AI Innovation',
      subtitle: 'あなたのビジネス課題をAIで解決します',
      description: '機械学習 • 大規模言語モデル • AI自動化',
      intro: '政令市役所10年の行政経験、580万円クラウドファンディング成功、AI YouTube事業で年間1000万円超の収益を実現。行政・起業・AI技術の幅広い経験で、あなたのビジネス課題を多角的に解決します。',
      viewPortfolio: '実績を見る',
      viewServices: 'サービス詳細',
      stats: {
        projects: 'YouTubeチャンネル',
        revenue: '年間収益（万円）',
        channels: 'チャンネル売却'
      },
      featuredTitle: 'AI事業実績',
      featuredSubtitle: 'YouTubeとAIソリューションで年間1000万円超の収益を実現'
    },
    en: {
      badge: 'AI Development & Machine Learning Specialist',
      greeting: 'Hello, I am',
      name: 'Dai Deguchi',
      role: 'AI Engineer & YouTuber',
      title: 'AI Innovation',
      subtitle: 'Transform your business challenges with AI solutions',
      description: 'Machine Learning • Large Language Models • AI Automation',
      intro: '10 years of government experience at designated city hall, ¥5.8M crowdfunding success, and over ¥10M annual revenue from AI YouTube business. My diverse experience in government, entrepreneurship, and AI technology enables comprehensive business solutions.',
      viewPortfolio: 'View Portfolio',
      viewServices: 'View Services',
      stats: {
        projects: 'YouTube Channels',
        revenue: 'Annual Revenue (¥10K)',
        channels: 'Channel Sales'
      },
      featuredTitle: 'AI Business Results',
      featuredSubtitle: 'Over ¥10M annual revenue through YouTube and AI solutions'
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center bg-white relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 25px 25px, rgb(0,0,0) 1px, transparent 0)`,
            backgroundSize: '50px 50px'
          }}></div>
        </div>
        
        <div className="max-w-5xl mx-auto px-6 text-center relative z-10">
          <div className="space-y-12">
            {/* Language Toggle */}
            <div className="flex justify-center">
              <div className="flex bg-gray-50 rounded-xl p-1 border border-gray-200">
                <button
                  onClick={() => setLanguage('ja')}
                  className={`px-6 py-3 rounded-lg text-sm font-semibold transition-all duration-200 ${
                    language === 'ja' 
                      ? 'bg-white text-gray-900 shadow-sm border border-gray-200' 
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  日本語
                </button>
                <button
                  onClick={() => setLanguage('en')}
                  className={`px-6 py-3 rounded-lg text-sm font-semibold transition-all duration-200 ${
                    language === 'en' 
                      ? 'bg-white text-gray-900 shadow-sm border border-gray-200' 
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  English
                </button>
              </div>
            </div>

            {/* Main Content */}
            <div className="space-y-8">
              {/* Badge */}
              <div className="inline-flex items-center gap-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-8 py-4 rounded-2xl text-sm font-semibold shadow-lg">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                {content[language].badge}
              </div>
              
              {/* Self Introduction */}
              <div className="space-y-4">
                <p className="text-xl text-gray-600 font-light">{content[language].greeting}</p>
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 tracking-tight">{content[language].name}</h2>
                <p className="text-2xl text-blue-600 font-medium">{content[language].role}</p>
              </div>
              
              {/* Main Title */}
              <h1 className="text-6xl md:text-8xl font-black text-transparent bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text leading-tight">
                {content[language].title}
              </h1>
              
              {/* Subtitle */}
              <p className="text-2xl md:text-3xl text-gray-700 font-light max-w-4xl mx-auto leading-relaxed">
                {content[language].subtitle}
              </p>
              
              {/* Description */}
              <div className="flex justify-center">
                <div className="flex flex-wrap justify-center gap-3 max-w-2xl">
                  {content[language].description.split(' • ').map((item, index) => (
                    <span key={index} className="bg-gray-100 text-gray-700 px-4 py-2 rounded-full text-sm font-medium">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
              
              {/* Introduction */}
              <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed font-light">
                {content[language].intro}
              </p>
            </div>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Link
                href="/portfolio"
                className="group bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-10 py-5 rounded-2xl font-semibold text-lg hover:shadow-xl hover:scale-105 transition-all duration-300 flex items-center gap-3"
              >
                {content[language].viewPortfolio}
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/services"
                className="group bg-white border-2 border-gray-200 text-gray-700 px-10 py-5 rounded-2xl font-semibold text-lg hover:border-blue-600 hover:text-blue-600 hover:shadow-lg transition-all duration-300"
              >
                {content[language].viewServices}
              </Link>
            </div>
            
            {/* Stats */}
            <div className="bg-gray-50 rounded-3xl p-8 max-w-4xl mx-auto">
              <div className="grid grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="text-4xl font-black text-blue-600 mb-2">4+</div>
                  <div className="text-sm font-medium text-gray-600 uppercase tracking-wide">{content[language].stats.projects}</div>
                </div>
                <div className="text-center border-x border-gray-200">
                  <div className="text-4xl font-black text-blue-600 mb-2">1000+</div>
                  <div className="text-sm font-medium text-gray-600 uppercase tracking-wide">{content[language].stats.revenue}</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-black text-blue-600 mb-2">3</div>
                  <div className="text-sm font-medium text-gray-600 uppercase tracking-wide">{content[language].stats.channels}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Project Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              {content[language].featuredTitle}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {content[language].featuredSubtitle}
            </p>
          </div>

          <div className="bg-white rounded-3xl p-12 shadow-xl border border-gray-100 max-w-5xl mx-auto"
          >
            <div className="space-y-8">
              {/* YouTube事業実績 */}
              <div className="group relative bg-white p-8 rounded-2xl border-2 border-red-100 hover:border-red-200 transition-all duration-300">
                <div className="absolute inset-0 bg-gradient-to-br from-red-50/50 to-orange-50/50 rounded-2xl"></div>
                <div className="relative z-10">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-orange-500 rounded-2xl flex items-center justify-center shadow-lg">
                      <span className="text-2xl">📺</span>
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-1">
                        {language === 'ja' ? 'YouTube事業' : 'YouTube Business'}
                      </h3>
                      <span className="text-red-600 font-semibold text-lg">
                        {language === 'ja' ? '年間1000万円超の収益' : '¥10M+ Annual Revenue'}
                      </span>
                    </div>
                  </div>
                  <p className="text-gray-700 mb-8 text-lg leading-relaxed">
                    {language === 'ja' 
                      ? 'AIが生成する仏教・自己啓発コンテンツで高齢者層に人気。複数チャンネル運営で完全自動化された動画制作プロセスを実現。3チャンネルの売却実績あり。'
                      : 'Popular Buddhist and self-improvement content targeting seniors, generated by AI. Achieved fully automated video production process across multiple channels. Successfully sold 3 channels.'
                    }
                  </p>
                  <div className="grid grid-cols-3 gap-6 text-center">
                    <div className="bg-white/80 p-4 rounded-xl border border-red-100">
                      <div className="text-3xl font-black text-red-600 mb-1">4+</div>
                      <div className="text-sm font-medium text-gray-600 uppercase tracking-wide">{language === 'ja' ? 'チャンネル運営' : 'Channels'}</div>
                    </div>
                    <div className="bg-white/80 p-4 rounded-xl border border-red-100">
                      <div className="text-3xl font-black text-red-600 mb-1">75%</div>
                      <div className="text-sm font-medium text-gray-600 uppercase tracking-wide">{language === 'ja' ? '収益シェア' : 'Revenue Share'}</div>
                    </div>
                    <div className="bg-white/80 p-4 rounded-xl border border-red-100">
                      <div className="text-3xl font-black text-red-600 mb-1">90%</div>
                      <div className="text-sm font-medium text-gray-600 uppercase tracking-wide">{language === 'ja' ? '自動化率' : 'Automation'}</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* クラウドファンディング実績 */}
              <div className="group relative bg-white p-8 rounded-2xl border-2 border-blue-100 hover:border-blue-200 transition-all duration-300">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-indigo-50/50 rounded-2xl"></div>
                <div className="relative z-10">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-2xl flex items-center justify-center shadow-lg">
                      <span className="text-2xl">🚀</span>
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-1">
                        {language === 'ja' ? 'クラウドファンディング' : 'Crowdfunding'}
                      </h3>
                      <span className="text-blue-600 font-semibold text-lg">
                        {language === 'ja' ? '580万円調達成功' : '¥5.8M Raised'}
                      </span>
                    </div>
                  </div>
                  <p className="text-gray-700 text-lg leading-relaxed">
                    {language === 'ja' 
                      ? 'Makuakeにて物販事業を展開。商品企画から海外メーカー交渉、各種認証取得、マーケティング、物流まで一気通貫で実行。'
                      : 'Successfully launched product business on Makuake. End-to-end execution from product planning, overseas manufacturer negotiations, certifications, marketing to logistics.'
                    }
                  </p>
                </div>
              </div>

              {/* 行政経験 */}
              <div className="group relative bg-white p-8 rounded-2xl border-2 border-green-100 hover:border-green-200 transition-all duration-300">
                <div className="absolute inset-0 bg-gradient-to-br from-green-50/50 to-emerald-50/50 rounded-2xl"></div>
                <div className="relative z-10">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center shadow-lg">
                      <span className="text-2xl">🏛️</span>
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-1">
                        {language === 'ja' ? '政令市役所' : 'Designated City Hall'}
                      </h3>
                      <span className="text-green-600 font-semibold text-lg">
                        {language === 'ja' ? '10年間の行政経験' : '10 Years Government Experience'}
                      </span>
                    </div>
                  </div>
                  <p className="text-gray-700 text-lg leading-relaxed">
                    {language === 'ja' 
                      ? '障がい者福祉、課税、企画部門を歴任。業務効率化で1,000時間削減、残業20時間/月削減を達成。1億円超の不正返還命令を実行。'
                      : 'Worked across welfare, taxation, and planning departments. Achieved 1,000-hour efficiency improvement, 20-hour monthly overtime reduction, and executed ¥100M+ fraud recovery.'
                    }
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}