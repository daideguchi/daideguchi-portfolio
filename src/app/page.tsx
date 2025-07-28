'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, Github, ExternalLink } from 'lucide-react';

export default function Home() {
  const [language, setLanguage] = useState<'ja' | 'en'>('ja');

  const content = {
    ja: {
      title: 'AIで業務効率化',
      subtitle: 'あなたの会社の課題をAI技術で解決します',
      description: 'ChatGPT・Claude等の最新AI技術を活用した業務改善コンサルティング',
      services: {
        title: '提供サービス',
        items: [
          {
            title: 'AI導入コンサルティング',
            description: '現在の業務フローを分析し、最適なAIツールの導入をサポート'
          },
          {
            title: '業務自動化システム構築',
            description: 'Python・AIを活用した反復作業の自動化システム開発'
          },
          {
            title: 'AI活用研修・講習',
            description: '従業員向けChatGPT・AI活用スキル向上研修'
          }
        ]
      },
      cta: {
        contact: 'お問い合わせ',
        portfolio: '実績を見る'
      },
      experience: {
        title: '実績',
        government: '政令市職員として10年間の業務効率化経験',
        youtube: 'AI活用YouTubeビジネスで年間1000万円超の収益',
        crowdfunding: 'クラウドファンディング580万円調達成功'
      }
    },
    en: {
      title: 'AI Business Automation',
      subtitle: 'Solve your company challenges with AI technology',
      description: 'Business improvement consulting using latest AI technology like ChatGPT and Claude',
      services: {
        title: 'Services',
        items: [
          {
            title: 'AI Implementation Consulting',
            description: 'Analyze current workflows and support optimal AI tool implementation'
          },
          {
            title: 'Business Automation Systems',
            description: 'Develop automation systems for repetitive tasks using Python and AI'
          },
          {
            title: 'AI Training & Workshops',
            description: 'Employee training for ChatGPT and AI utilization skills'
          }
        ]
      },
      cta: {
        contact: 'Contact Us',
        portfolio: 'View Portfolio'
      },
      experience: {
        title: 'Experience',
        government: '10 years of operational efficiency experience as designated city employee',
        youtube: 'Over 10M yen annual revenue from AI-powered YouTube business',
        crowdfunding: 'Successfully raised 5.8M yen through crowdfunding'
      }
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          {/* Language Toggle */}
          <div className="flex justify-end mb-8">
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

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Main Content */}
            <div className="space-y-8">
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                {content[language].title}
              </h1>
              
              <p className="text-xl text-gray-600 leading-relaxed">
                {content[language].subtitle}
              </p>
              
              <p className="text-lg text-gray-700">
                {content[language].description}
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/contact"
                  className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                >
                  {content[language].cta.contact}
                </Link>
                <Link
                  href="/portfolio"
                  className="border border-gray-300 text-gray-700 px-8 py-4 rounded-lg font-semibold hover:border-gray-400 hover:bg-gray-50 transition-colors"
                >
                  {content[language].cta.portfolio}
                </Link>
              </div>
            </div>

            {/* Right Column - Services */}
            <div className="bg-gray-50 p-8 rounded-xl">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                {content[language].services.title}
              </h2>
              <div className="space-y-6">
                {content[language].services.items.map((service, index) => (
                  <div key={index} className="bg-white p-6 rounded-lg">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      {service.title}
                    </h3>
                    <p className="text-gray-600">
                      {service.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-gray-900 mb-12">
            {content[language].experience.title}
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                政令市職員10年
              </h3>
              <p className="text-gray-600">
                {content[language].experience.government}
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                AIビジネス実績
              </h3>
              <p className="text-gray-600">
                {content[language].experience.youtube}
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                起業経験
              </h3>
              <p className="text-gray-600">
                {content[language].experience.crowdfunding}
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}