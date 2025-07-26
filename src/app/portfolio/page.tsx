'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { ExternalLink, Github, Calendar, Tag } from 'lucide-react';

export default function Portfolio() {
  const projects = [
    {
      id: 1,
      title: 'エンタープライズSaaSプラットフォーム',
      description: 'スケーラブルなマルチテナントSaaSアプリケーション。認証・課金・分析機能を統合したエンタープライズ向けソリューション。',
      image: '/api/placeholder/600/400',
      technologies: ['Next.js', 'TypeScript', 'PostgreSQL', 'AWS', 'Stripe'],
      category: 'SaaS Platform',
      year: '2024',
      features: [
        'マルチテナント認証システム',
        'サブスクリプション課金統合',
        'リアルタイム分析ダッシュボード',
        'API レート制限・監視',
      ],
      results: [
        '月間アクティブユーザー10,000+',
        'システム稼働率99.9%',
        'API レスポンス時間200ms以下',
      ],
      githubUrl: 'https://github.com/daideguchi',
      liveUrl: '/projects/saas-platform',
    },
    {
      id: 2,
      title: 'ECサイトプラットフォーム',
      description: 'モダンなECサイトの構築。高速な表示速度とSEO最適化により、コンバージョン率の大幅な改善を実現。',
      image: '/api/placeholder/600/400',
      technologies: ['Next.js', 'Stripe', 'Sanity CMS', 'Vercel'],
      category: 'E-commerce',
      year: '2024',
      features: [
        'サーバーサイドレンダリング',
        '決済システム統合',
        '在庫管理システム',
        'レスポンシブデザイン',
      ],
      results: [
        'ページ読み込み速度90%向上',
        'コンバージョン率35%向上',
        'SEOランキング大幅改善',
      ],
      githubUrl: 'https://github.com/daideguchi',
      liveUrl: '/projects/ecommerce',
    },
    {
      id: 3,
      title: 'タスク管理アプリ',
      description: 'チーム向けのタスク管理アプリケーション。リアルタイム同期とインタラクティブなUIで生産性を向上。',
      image: '/api/placeholder/600/400',
      technologies: ['React', 'Node.js', 'Socket.io', 'MongoDB'],
      category: 'Web Application',
      year: '2023',
      features: [
        'リアルタイム同期',
        'ドラッグ&ドロップ操作',
        'チーム協業機能',
        'プロジェクト分析ダッシュボード',
      ],
      results: [
        'チーム生産性40%向上',
        'タスク完了率向上',
        'コミュニケーション効率化',
      ],
      githubUrl: 'https://github.com/daideguchi',
      liveUrl: '/projects/task-manager',
    },
    {
      id: 4,
      title: 'データ可視化ダッシュボード',
      description: 'ビジネスデータを直感的に理解できるダッシュボード。複雑なデータを美しいチャートで可視化。',
      image: '/api/placeholder/600/400',
      technologies: ['React', 'D3.js', 'Python', 'FastAPI'],
      category: 'Data Visualization',
      year: '2023',
      features: [
        'インタラクティブチャート',
        'リアルタイムデータ更新',
        'カスタマイズ可能なレイアウト',
        'データエクスポート機能',
      ],
      results: [
        '意思決定速度60%向上',
        'データ理解度向上',
        'レポート作成時間削減',
      ],
      githubUrl: 'https://github.com/daideguchi',
      liveUrl: '/projects/dashboard',
    },
  ];

  const categories = ['All', 'Web Application', 'E-commerce', 'Data Visualization'];

  return (
    <div className="min-h-screen py-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              Portfolio
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              これまでに手がけたプロジェクトの一部をご紹介します。
              それぞれのプロジェクトで得られた成果と学びを大切にしています。
            </p>
          </motion.div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              厳選プロジェクト
            </h2>
            <p className="text-xl text-gray-600">
              クライアントの課題解決に焦点を当てた実績
            </p>
          </motion.div>

          <div className="space-y-20">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
                }`}
              >
                <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                  <div className="relative group">
                    <div className="aspect-video bg-gray-200 rounded-lg overflow-hidden">
                      {/* プロジェクト画像のプレースホルダー */}
                      <div className="w-full h-full flex items-center justify-center text-gray-500">
                        <span className="text-4xl">🖥️</span>
                      </div>
                    </div>
                    <div className="absolute inset-0 bg-blue-600 bg-opacity-0 group-hover:bg-opacity-90 transition-all duration-300 rounded-lg flex items-center justify-center opacity-0 group-hover:opacity-100">
                      <div className="flex space-x-4">
                        <a
                          href={project.liveUrl}
                          className="bg-white text-blue-600 p-3 rounded-full hover:bg-gray-100 transition-colors"
                        >
                          <ExternalLink size={24} />
                        </a>
                        <a
                          href={project.githubUrl}
                          className="bg-white text-blue-600 p-3 rounded-full hover:bg-gray-100 transition-colors"
                        >
                          <Github size={24} />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                <div className={index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}>
                  <div className="flex items-center gap-4 mb-4">
                    <span className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm font-semibold">
                      {project.category}
                    </span>
                    <div className="flex items-center text-gray-500 text-sm">
                      <Calendar size={16} className="mr-1" />
                      {project.year}
                    </div>
                  </div>

                  <h3 className="text-3xl font-bold text-gray-900 mb-4">
                    {project.title}
                  </h3>
                  
                  <p className="text-lg text-gray-600 mb-6">
                    {project.description}
                  </p>

                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-gray-900 mb-3">
                      主な機能
                    </h4>
                    <ul className="space-y-2">
                      {project.features.map((feature) => (
                        <li key={feature} className="flex items-center text-gray-700">
                          <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-gray-900 mb-3">
                      成果
                    </h4>
                    <ul className="space-y-2">
                      {project.results.map((result) => (
                        <li key={result} className="flex items-center text-green-700">
                          <div className="w-2 h-2 bg-green-600 rounded-full mr-3"></div>
                          {result}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-gray-900 mb-3">
                      使用技術
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex space-x-4">
                    <a
                      href={project.liveUrl}
                      className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200 flex items-center gap-2"
                    >
                      <ExternalLink size={20} />
                      ライブデモ
                    </a>
                    <a
                      href={project.githubUrl}
                      className="border-2 border-gray-300 text-gray-700 px-6 py-3 rounded-lg font-semibold hover:border-gray-400 transition-colors duration-200 flex items-center gap-2"
                    >
                      <Github size={20} />
                      コード
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold mb-4">
              あなたのプロジェクトも成功させませんか？
            </h2>
            <p className="text-xl mb-8 opacity-90">
              これらの実績を活かし、あなたのビジネス課題を解決します
            </p>
            <Link
              href="/contact"
              className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200 inline-block"
            >
              プロジェクトを相談する
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}