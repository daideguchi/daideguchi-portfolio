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
      title: 'AI Innovation',
      subtitle: 'ビジネスを変革する先進的なAIソリューション',
      description: '機械学習 • 大規模言語モデル • AI自動化',
      viewPortfolio: '実績を見る',
      viewServices: 'サービス詳細',
      stats: {
        projects: 'AIプロジェクト',
        opensource: 'オープンソース',
        live: 'ライブプロダクト'
      },
      featuredTitle: '注目プロジェクト',
      featuredSubtitle: '実際に稼働中のAIソリューション'
    },
    en: {
      badge: 'AI Development & Machine Learning Specialist',
      title: 'AI Innovation',
      subtitle: 'Advanced AI solutions that transform business operations',
      description: 'Machine Learning • Large Language Models • AI Automation',
      viewPortfolio: 'View Portfolio',
      viewServices: 'View Services',
      stats: {
        projects: 'AI Projects',
        opensource: 'Open Source',
        live: 'Live Product'
      },
      featuredTitle: 'Featured Project',
      featuredSubtitle: 'Live AI solution in production'
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
            
            {/* Main Title */}
            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight">
              {content[language].title}
            </h1>
            
            {/* Subtitle */}
            <p className="text-xl md:text-2xl text-gray-600 mb-4 font-light max-w-3xl mx-auto leading-relaxed">
              {content[language].subtitle}
            </p>
            <p className="text-lg text-gray-500 mb-12 max-w-2xl mx-auto">
              {content[language].description}
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
                <div className="text-3xl font-bold text-gray-900 mb-1">9</div>
                <div className="text-sm text-gray-600">{content[language].stats.projects}</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-gray-900 mb-1">100%</div>
                <div className="text-sm text-gray-600">{content[language].stats.opensource}</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-gray-900 mb-1">1</div>
                <div className="text-sm text-gray-600">{content[language].stats.live}</div>
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
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="w-20 h-20 rounded-2xl overflow-hidden bg-gray-100 flex-shrink-0">
                <img
                  src="/icons/asagami-ai.jpeg"
                  alt="Asagami AI"
                  className="w-full h-full object-cover"
                />
              </div>
              
              <div className="flex-1 text-center md:text-left">
                <div className="flex items-center justify-center md:justify-start gap-3 mb-3">
                  <h3 className="text-2xl font-bold text-gray-900">Asagami AI</h3>
                  <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                    {language === 'ja' ? 'ライブ' : 'Live'}
                  </span>
                </div>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {language === 'ja' 
                    ? 'AI駆動の学習支援システム。個別最適化された問題生成でゲーム感覚の学習体験を提供。'
                    : 'AI-powered learning support system with personalized question generation and gamified learning experience.'
                  }
                </p>
                <div className="flex flex-wrap gap-2 justify-center md:justify-start mb-6">
                  {['Python', 'Django', 'PostgreSQL', 'OpenAI', 'React'].map((tech) => (
                    <span key={tech} className="px-3 py-1 bg-gray-100 text-gray-700 rounded-lg text-sm">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-3 justify-center md:justify-start">
                  <a
                    href="https://asagamiai.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gray-900 text-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-800 transition-colors flex items-center gap-2"
                  >
                    <ExternalLink size={16} />
                    {language === 'ja' ? 'サイトを見る' : 'View Site'}
                  </a>
                  <a
                    href="https://github.com/daideguchi/study-self"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="border-2 border-gray-300 text-gray-700 px-6 py-3 rounded-lg font-semibold hover:border-gray-900 hover:text-gray-900 transition-colors flex items-center gap-2"
                  >
                    <Github size={16} />
                    {language === 'ja' ? 'コード' : 'Code'}
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}