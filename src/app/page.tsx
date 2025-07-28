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
      intro: '福岡市役所10年の行政経験、580万円クラウドファンディング成功、AI YouTube事業で年間1000万円超の収益を実現。行政・起業・AI技術の幅広い経験で、あなたのビジネス課題を多角的に解決します。',
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
      intro: '10 years of government experience at Fukuoka City Hall, ¥5.8M crowdfunding success, and over ¥10M annual revenue from AI YouTube business. My diverse experience in government, entrepreneurship, and AI technology enables comprehensive business solutions.',
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
      <section className="min-h-screen flex items-center justify-center bg-gradient-to-b from-gray-50 to-white relative">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Language Toggle */}
            <div className="flex justify-center mb-8">
              <div className="flex bg-gray-100 rounded-lg p-1">
                <button
                  onClick={() => setLanguage('ja')}
                  className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                    language === 'ja' 
                      ? 'bg-white text-gray-900 shadow-sm' 
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  日本語
                </button>
                <button
                  onClick={() => setLanguage('en')}
                  className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                    language === 'en' 
                      ? 'bg-white text-gray-900 shadow-sm' 
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  English
                </button>
              </div>
            </div>

            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-gray-900 text-white px-6 py-3 rounded-full text-sm font-medium mb-8">
              <div className="w-2 h-2 bg-green-400 rounded-full"></div>
              {content[language].badge}
            </div>
            
            {/* Self Introduction */}
            <div className="mb-10">
              <p className="text-lg text-gray-600 mb-2">{content[language].greeting}</p>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">{content[language].name}</h2>
              <p className="text-xl text-gray-700 mb-6">{content[language].role}</p>
            </div>
            
            {/* Main Title */}
            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight">
              {content[language].title}
            </h1>
            
            {/* Subtitle */}
            <p className="text-xl md:text-2xl text-gray-600 mb-4 font-light max-w-3xl mx-auto leading-relaxed">
              {content[language].subtitle}
            </p>
            <p className="text-lg text-gray-500 mb-6 max-w-2xl mx-auto">
              {content[language].description}
            </p>
            
            {/* Introduction */}
            <p className="text-base text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed">
              {content[language].intro}
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
              <Link
                href="/portfolio"
                className="group bg-gray-900 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-gray-800 transition-all duration-300 flex items-center gap-3"
              >
                {content[language].viewPortfolio}
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/services"
                className="group border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-xl font-semibold text-lg hover:border-gray-900 hover:text-gray-900 transition-all duration-300"
              >
                {content[language].viewServices}
              </Link>
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto">
              <div className="text-center">
                <div className="text-3xl font-bold text-gray-900 mb-1">4+</div>
                <div className="text-sm text-gray-600">{content[language].stats.projects}</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-gray-900 mb-1">1000+</div>
                <div className="text-sm text-gray-600">{content[language].stats.revenue}</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-gray-900 mb-1">3</div>
                <div className="text-sm text-gray-600">{content[language].stats.channels}</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Project Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              {content[language].featuredTitle}
            </h2>
            <p className="text-lg text-gray-600">
              {content[language].featuredSubtitle}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-white rounded-2xl p-8 shadow-sm border border-gray-200 max-w-4xl mx-auto"
          >
            <div className="space-y-8">
              {/* YouTube事業実績 */}
              <div className="bg-gradient-to-r from-red-50 to-orange-50 p-6 rounded-xl border border-red-100">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-orange-500 rounded-lg flex items-center justify-center">
                    <span className="text-xl">📺</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">
                      {language === 'ja' ? 'YouTube事業' : 'YouTube Business'}
                    </h3>
                    <span className="text-red-600 font-medium">
                      {language === 'ja' ? '年間1000万円超の収益' : '¥10M+ Annual Revenue'}
                    </span>
                  </div>
                </div>
                <p className="text-gray-700 mb-4">
                  {language === 'ja' 
                    ? 'AIが生成する仏教・自己啓発コンテンツで高齢者層に人気。複数チャンネル運営で完全自動化された動画制作プロセスを実現。3チャンネルの売却実績あり。'
                    : 'Popular Buddhist and self-improvement content targeting seniors, generated by AI. Achieved fully automated video production process across multiple channels. Successfully sold 3 channels.'
                  }
                </p>
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div>
                    <div className="text-2xl font-bold text-red-600">4+</div>
                    <div className="text-sm text-gray-600">{language === 'ja' ? 'チャンネル運営' : 'Channels'}</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-red-600">75%</div>
                    <div className="text-sm text-gray-600">{language === 'ja' ? '収益シェア' : 'Revenue Share'}</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-red-600">90%</div>
                    <div className="text-sm text-gray-600">{language === 'ja' ? '自動化率' : 'Automation'}</div>
                  </div>
                </div>
              </div>

              {/* クラウドファンディング実績 */}
              <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-xl border border-blue-100">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-lg flex items-center justify-center">
                    <span className="text-xl">🚀</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">
                      {language === 'ja' ? 'クラウドファンディング' : 'Crowdfunding'}
                    </h3>
                    <span className="text-blue-600 font-medium">
                      {language === 'ja' ? '580万円調達成功' : '¥5.8M Raised'}
                    </span>
                  </div>
                </div>
                <p className="text-gray-700">
                  {language === 'ja' 
                    ? 'Makuakeにて物販事業を展開。商品企画から海外メーカー交渉、各種認証取得、マーケティング、物流まで一気通貫で実行。'
                    : 'Successfully launched product business on Makuake. End-to-end execution from product planning, overseas manufacturer negotiations, certifications, marketing to logistics.'
                  }
                </p>
              </div>

              {/* 行政経験 */}
              <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-6 rounded-xl border border-green-100">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-500 rounded-lg flex items-center justify-center">
                    <span className="text-xl">🏛️</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">
                      {language === 'ja' ? '福岡市役所' : 'Fukuoka City Hall'}
                    </h3>
                    <span className="text-green-600 font-medium">
                      {language === 'ja' ? '10年間の行政経験' : '10 Years Government Experience'}
                    </span>
                  </div>
                </div>
                <p className="text-gray-700">
                  {language === 'ja' 
                    ? '障がい者福祉、課税、企画部門を歴任。業務効率化で1,000時間削減、残業20時間/月削減を達成。1億円超の不正返還命令を実行。'
                    : 'Worked across welfare, taxation, and planning departments. Achieved 1,000-hour efficiency improvement, 20-hour monthly overtime reduction, and executed ¥100M+ fraud recovery.'
                  }
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}