'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { ExternalLink, Github, Globe } from 'lucide-react';

export default function Portfolio() {
  const [language, setLanguage] = useState<'ja' | 'en'>('ja');

  const content = {
    ja: {
      title: 'ポートフォリオ',
      subtitle: 'AIプロジェクト実績',
      viewProject: 'プロジェクトを見る',
      viewCode: 'コードを見る',
      categories: {
        'learning': '学習支援',
        'knowledge': 'ナレッジ管理',
        'safety': '安全性監視',
        'development': '開発支援',
        'ethics': '倫理・ガバナンス',
        'infrastructure': 'インフラ',
        'news': 'ニュース分析',
        'analytics': 'データ分析',
        'content': 'コンテンツ生成'
      }
    },
    en: {
      title: 'Portfolio',
      subtitle: 'AI Project Showcase',
      viewProject: 'View Project',
      viewCode: 'View Code',
      categories: {
        'learning': 'Learning',
        'knowledge': 'Knowledge',
        'safety': 'Safety',
        'development': 'Development',
        'ethics': 'Ethics',
        'infrastructure': 'Infrastructure',
        'news': 'News',
        'analytics': 'Analytics',
        'content': 'Content'
      }
    }
  };

  const projects = [
    {
      id: 1,
      title: 'Asagami AI',
      description: {
        ja: 'AI駆動の学習支援システム。個別最適化された問題生成でゲーム感覚の学習体験を提供。',
        en: 'AI-powered learning support system with personalized question generation and gamified learning experience.'
      },
      technologies: ['Python', 'Django', 'PostgreSQL', 'OpenAI', 'React'],
      category: 'learning',
      icon: '/icons/asagami-ai.jpeg',
      githubUrl: null,
      liveUrl: 'https://asagamiai.com',
      status: 'live'
    },
    {
      id: 2,
      title: 'WISDOM Blog',
      description: {
        ja: 'AI駆動のナレッジ管理システム。開発ログを自動記事化し、チーム知識共有を効率化。',
        en: 'AI-driven knowledge management system that automatically converts development logs into articles.'
      },
      technologies: ['Python', 'Astro', 'JavaScript', 'AI/ML'],
      category: 'knowledge',
      icon: '/icons/wisdom-blog.png',
      githubUrl: 'https://github.com/daideguchi/wisdom-blog',
      liveUrl: '#',
      status: 'development'
    },
    {
      id: 3,
      title: 'YouTube分析システム',
      description: {
        ja: 'YouTube事業における収益分析と最適化を行うデータ分析システム。複数チャンネルの統合管理が可能。',
        en: 'Data analysis system for YouTube business revenue analysis and optimization with multi-channel management.'
      },
      technologies: ['Python', 'YouTube API', 'データ分析', 'Streamlit'],
      category: 'analytics',
      icon: '/icons/youtube-analyzer.png',
      githubUrl: null,
      liveUrl: '#',
      status: 'live'
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'live': return 'bg-green-100 text-green-800';
      case 'development': return 'bg-blue-100 text-blue-800';
      case 'research': return 'bg-purple-100 text-purple-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getStatusText = (status: string) => {
    const statusMap = {
      ja: { live: 'ライブ', development: '開発中', research: '研究中' },
      en: { live: 'Live', development: 'Development', research: 'Research' }
    };
    return statusMap[language][status as keyof typeof statusMap[typeof language]] || status;
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex justify-between items-center mb-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-4xl font-bold text-gray-900 mb-2">
                {content[language].title}
              </h1>
              <p className="text-xl text-gray-600">
                {content[language].subtitle}
              </p>
            </motion.div>
            
            {/* Language Toggle */}
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
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-lg hover:border-gray-300 transition-all duration-300"
              >
                {/* Project Icon & Status */}
                <div className="flex items-start justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl overflow-hidden bg-gray-100 flex-shrink-0">
                    <Image
                      src={project.icon}
                      alt={project.title}
                      width={48}
                      height={48}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(project.status)}`}>
                    {getStatusText(project.status)}
                  </span>
                </div>

                {/* Project Info */}
                <div className="mb-4">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-3">
                    {project.description[language]}
                  </p>
                  <div className="flex items-center text-xs text-gray-500 mb-3">
                    <span className={`px-2 py-1 bg-gray-100 rounded-md`}>
                      {content[language].categories[project.category as keyof typeof content[typeof language]['categories']]}
                    </span>
                  </div>
                </div>

                {/* Technologies */}
                <div className="mb-6">
                  <div className="flex flex-wrap gap-1">
                    {project.technologies.slice(0, 3).map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 bg-gray-50 text-gray-700 rounded text-xs"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="px-2 py-1 bg-gray-50 text-gray-500 rounded text-xs">
                        +{project.technologies.length - 3}
                      </span>
                    )}
                  </div>
                </div>

                {/* Actions */}
                <div className="flex gap-2">
                  {project.liveUrl !== '#' && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`${project.githubUrl ? 'flex-1' : 'w-full'} bg-gray-900 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-gray-800 transition-colors flex items-center justify-center gap-2`}
                    >
                      <ExternalLink size={14} />
                      {content[language].viewProject}
                    </a>
                  )}
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`${project.liveUrl !== '#' ? 'flex-1' : 'w-full'} border border-gray-300 text-gray-700 px-4 py-2 rounded-lg text-sm font-medium hover:border-gray-400 hover:bg-gray-50 transition-colors flex items-center justify-center gap-2`}
                    >
                      <Github size={14} />
                      {content[language].viewCode}
                    </a>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}