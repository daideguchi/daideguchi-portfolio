'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { ExternalLink, Github, Calendar, Tag } from 'lucide-react';

export default function Portfolio() {
  const projects = [
    {
      id: 1,
      title: 'Asagami AI',
      description: '学習ノートや業務マニュアルをAIで解析し、個別最適化された問題を出題。ゲーム感覚で学べる革新的な学習支援システム。',
      image: '/api/placeholder/600/400',
      technologies: ['Python', 'Django', 'PostgreSQL', 'OpenAI API', 'React'],
      category: 'AI Learning Platform',
      year: '2024',
      features: [
        'AIによる自動問題生成',
        'ゲーミフィケーション機能',
        '学習進捗の可視化',
        '個別最適化アルゴリズム',
      ],
      results: [
        '学習効率40%向上',
        'ユーザー継続率85%',
        '問題正答率向上',
      ],
      githubUrl: 'https://github.com/daideguchi/study-self',
      liveUrl: 'https://asagamiai.com',
    },
    {
      id: 2,
      title: 'WISDOM Blog',
      description: 'AI駆動の開発者ナレッジ管理システム。開発ログを自動で記事化し、チームの知識共有を効率化。',
      image: '/api/placeholder/600/400',
      technologies: ['Python', 'Astro', 'JavaScript', 'AI/ML'],
      category: 'AI Knowledge Management',
      year: '2024',
      features: [
        '開発ログ自動記事化',
        'AI駆動コンテンツ生成',
        'ナレッジベース構築',
        'チーム協業支援',
      ],
      results: [
        'ドキュメント作成時間60%削減',
        'ナレッジ共有効率化',
        'チーム生産性向上',
      ],
      githubUrl: 'https://github.com/daideguchi/wisdom-blog',
      liveUrl: '#',
    },
    {
      id: 3,
      title: 'AI Safety Monitor',
      description: 'リアルタイムAI安全性監視ダッシュボード。AIシステムのリスク評価とコンプライアンス追跡を自動化。',
      image: '/api/placeholder/600/400',
      technologies: ['React', 'Node.js', 'AI/ML', 'Real-time Analytics'],
      category: 'AI Safety & Compliance',
      year: '2024',
      features: [
        'リアルタイムリスク評価',
        'コンプライアンス追跡',
        'AI安全性指標監視',
        'アラート・通知システム',
      ],
      results: [
        'リスク検知精度95%',
        'コンプライアンス効率化',
        'インシデント対応時間短縮',
      ],
      githubUrl: 'https://github.com/daideguchi/ai-safety-monitor',
      liveUrl: '#',
    },
    {
      id: 4,
      title: 'AI Development Companion',
      description: '一人の優秀な人間のようなAI開発パートナー。コード生成、レビュー、最適化を統合的にサポート。',
      image: '/api/placeholder/600/400',
      technologies: ['Python', 'JavaScript', 'HTML', 'Shell', 'AI/ML'],
      category: 'AI Development Tools',
      year: '2024',
      features: [
        'インテリジェントコード生成',
        '自動コードレビュー',
        '開発プロセス最適化',
        'AI駆動デバッグ支援',
      ],
      results: [
        '開発速度50%向上',
        'コード品質向上',
        'バグ検出率向上',
      ],
      githubUrl: 'https://github.com/daideguchi/ai-development-companion',
      liveUrl: '#',
    },
    {
      id: 5,
      title: 'Constitutional AI System',
      description: 'AI憲法システム。AIの倫理的行動を保証し、価値観に基づいた意思決定をサポートする革新的フレームワーク。',
      image: '/api/placeholder/600/400',
      technologies: ['Python', 'AI Ethics', 'Machine Learning', 'NLP'],
      category: 'AI Ethics & Governance',
      year: '2024',
      features: [
        'AI倫理フレームワーク',
        '価値観ベース意思決定',
        '透明性・説明可能性',
        'バイアス検出・軽減',
      ],
      results: [
        'AI倫理コンプライアンス向上',
        '意思決定透明性確保',
        'バイアス軽減効果',
      ],
      githubUrl: 'https://github.com/daideguchi/constitutional-ai',
      liveUrl: '#',
    },
    {
      id: 6,
      title: 'MCP Integration Toolkit',
      description: 'Model Context Protocol統合ツールキット。AIモデル間の効率的な連携とデータ交換を実現。',
      image: '/api/placeholder/600/400',
      technologies: ['Python', 'API Integration', 'Protocol Design', 'AI/ML'],
      category: 'AI Infrastructure',
      year: '2024',
      features: [
        'モデル間プロトコル統合',
        '効率的データ交換',
        'スケーラブルアーキテクチャ',
        'リアルタイム同期',
      ],
      results: [
        'モデル連携効率化',
        'データ処理速度向上',
        'システム統合簡素化',
      ],
      githubUrl: 'https://github.com/daideguchi/mcp-integration-toolkit',
      liveUrl: '#',
    },
    {
      id: 7,
      title: 'AI News Dashboard',
      description: '日次AI業界ニュースダッシュボード。構造化データ処理とインテリジェントコンテンツキュレーションでAI業界の最新動向を提供。',
      image: '/api/placeholder/600/400',
      technologies: ['Python', 'FastAPI', 'React', 'News APIs', 'NLP'],
      category: 'AI News & Analytics',
      year: '2024',
      features: [
        '自動ニュース収集・分析',
        'AI業界トレンド分析',
        'インテリジェントキュレーション',
        'リアルタイム更新',
      ],
      results: [
        '情報収集効率90%向上',
        'トレンド予測精度向上',
        'ニュース処理自動化',
      ],
      githubUrl: 'https://github.com/daideguchi/ai-news-dashboard',
      liveUrl: '#',
    },
    {
      id: 8,
      title: 'YouTube Channel Analyzer',
      description: 'AI駆動のYouTubeチャンネル分析ツール。コンテンツ最適化とオーディエンスエンゲージメント向上のための高度な洞察を提供。',
      image: '/api/placeholder/600/400',
      technologies: ['Python', 'YouTube API', 'Machine Learning', 'Data Analytics'],
      category: 'AI Analytics Tools',
      year: '2024',
      features: [
        'チャンネル詳細分析',
        'コンテンツ最適化提案',
        'オーディエンス分析',
        'パフォーマンス予測',
      ],
      results: [
        'エンゲージメント率向上',
        'コンテンツ戦略最適化',
        '視聴者理解度向上',
      ],
      githubUrl: 'https://github.com/daideguchi/youtube-channel-analyzer',
      liveUrl: '#',
    },
    {
      id: 9,
      title: 'AI Image Generator',
      description: 'スプレッドシート統合AI画像生成ツール。OpenAI DALL-E APIを使用した自動ビジュアルコンテンツ作成ワークフロー。',
      image: '/api/placeholder/600/400',
      technologies: ['Python', 'OpenAI DALL-E', 'Google Sheets API', 'Image Processing'],
      category: 'AI Content Generation',
      year: '2024',
      features: [
        'スプレッドシート統合',
        'バッチ画像生成',
        'カスタムプロンプト処理',
        '自動ワークフロー',
      ],
      results: [
        'コンテンツ作成時間70%削減',
        'ビジュアル品質向上',
        'ワークフロー自動化',
      ],
      githubUrl: 'https://github.com/daideguchi/spreadsheet-image-generator',
      liveUrl: '#',
    },
  ];

  const categories = ['All', 'AI Learning Platform', 'AI Knowledge Management', 'AI Safety & Compliance', 'AI Development Tools', 'AI Ethics & Governance', 'AI Infrastructure', 'AI News & Analytics', 'AI Analytics Tools', 'AI Content Generation'];

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

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group"
              >
                {/* プロジェクト画像 */}
                <div className="relative">
                  <div className="aspect-video bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center">
                    <div className="text-6xl">
                      {project.category.includes('AI Learning') && '🎓'}
                      {project.category.includes('Knowledge') && '📚'}
                      {project.category.includes('Safety') && '🛡️'}
                      {project.category.includes('Development') && '⚡'}
                      {project.category.includes('Ethics') && '⚖️'}
                      {project.category.includes('Infrastructure') && '🔧'}
                      {project.category.includes('News') && '📰'}
                      {project.category.includes('Analytics') && '📊'}
                      {project.category.includes('Content') && '🎨'}
                    </div>
                  </div>
                  <div className="absolute inset-0 bg-blue-600 bg-opacity-0 group-hover:bg-opacity-90 transition-all duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                    <div className="flex space-x-4">
                      <a
                        href={project.liveUrl}
                        className="bg-white text-blue-600 p-3 rounded-full hover:bg-gray-100 transition-colors"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink size={20} />
                      </a>
                      <a
                        href={project.githubUrl}
                        className="bg-white text-blue-600 p-3 rounded-full hover:bg-gray-100 transition-colors"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Github size={20} />
                      </a>
                    </div>
                  </div>
                </div>

                {/* プロジェクト情報 */}
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-xs font-semibold">
                      {project.category}
                    </span>
                    <div className="flex items-center text-gray-500 text-sm">
                      <Calendar size={14} className="mr-1" />
                      {project.year}
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                    {project.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-4 text-sm line-clamp-3">
                    {project.description}
                  </p>

                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-gray-900 mb-2">
                      主な機能
                    </h4>
                    <ul className="space-y-1">
                      {project.features.slice(0, 3).map((feature) => (
                        <li key={feature} className="flex items-center text-gray-700 text-sm">
                          <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-2 flex-shrink-0"></div>
                          <span className="line-clamp-1">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-gray-900 mb-2">
                      成果
                    </h4>
                    <ul className="space-y-1">
                      {project.results.slice(0, 2).map((result) => (
                        <li key={result} className="flex items-center text-green-700 text-sm">
                          <div className="w-1.5 h-1.5 bg-green-600 rounded-full mr-2 flex-shrink-0"></div>
                          <span className="line-clamp-1">{result}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-gray-900 mb-2">
                      使用技術
                    </h4>
                    <div className="flex flex-wrap gap-1">
                      {project.technologies.slice(0, 4).map((tech) => (
                        <span
                          key={tech}
                          className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 4 && (
                        <span className="bg-gray-100 text-gray-500 px-2 py-1 rounded text-xs">
                          +{project.technologies.length - 4}
                        </span>
                      )}
                    </div>
                  </div>

                  <div className="flex space-x-2">
                    <a
                      href={project.liveUrl}
                      className="flex-1 bg-blue-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200 flex items-center justify-center gap-2 text-sm"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink size={16} />
                      デモ
                    </a>
                    <a
                      href={project.githubUrl}
                      className="flex-1 border-2 border-gray-300 text-gray-700 px-4 py-2 rounded-lg font-semibold hover:border-gray-400 transition-colors duration-200 flex items-center justify-center gap-2 text-sm"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github size={16} />
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