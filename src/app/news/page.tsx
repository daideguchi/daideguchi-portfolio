'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Calendar, Clock, Tag, ArrowRight } from 'lucide-react';

export default function News() {
  const newsItems = [
    {
      id: 1,
      title: '新しいプロジェクトを開始しました',
      excerpt: 'エンタープライズ向けSaaSプラットフォーム開発プロジェクトを開始。最新のNext.js 15を活用し、ユーザー体験を重視した設計で進めています。',
      date: '2025-01-20',
      category: 'プロジェクト',
      readTime: '3分',
      featured: true,
    },
    {
      id: 2,
      title: 'TypeScript 5.0の新機能について',
      excerpt: 'TypeScript 5.0で追加された新機能について詳しく解説。特にDecoratorsの正式サポートとパフォーマンス改善について実例を交えて説明します。',
      date: '2025-01-15',
      category: '技術記事',
      readTime: '5分',
      featured: false,
    },
    {
      id: 3,
      title: '2024年の振り返りと2025年の目標',
      excerpt: '2024年に取り組んだプロジェクトの振り返りと、2025年に挑戦したい新しい技術領域について。特にAI/ML分野への展開を計画しています。',
      date: '2025-01-01',
      category: '雑記',
      readTime: '4分',
      featured: true,
    },
    {
      id: 4,
      title: 'React Server Componentsの実践的な使い方',
      excerpt: 'Next.js 13以降で利用可能なReact Server Componentsの実践的な活用方法について。パフォーマンス向上とSEO最適化の観点から解説します。',
      date: '2024-12-20',
      category: '技術記事',
      readTime: '7分',
      featured: false,
    },
    {
      id: 5,
      title: 'フリーランスエンジニアとしての5年間',
      excerpt: 'フリーランスエンジニアとして5年間活動してきた経験談。独立から現在まで、技術的成長と事業拡大の軌跡。',
      date: '2024-12-10',
      category: 'キャリア',
      readTime: '6分',
      featured: false,
    },
    {
      id: 6,
      title: 'Webアクセシビリティの重要性',
      excerpt: 'ユーザー中心設計の観点から、Webアクセシビリティの重要性について解説。すべてのユーザーが使いやすいWebサイトの作り方。',
      date: '2024-11-25',
      category: '技術記事',
      readTime: '5分',
      featured: false,
    },
  ];

  const categories = ['すべて', 'プロジェクト', '技術記事', 'キャリア', '雑記'];

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('ja-JP', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  const getCategoryColor = (category: string) => {
    const colors: { [key: string]: string } = {
      'プロジェクト': 'bg-blue-100 text-blue-600',
      '技術記事': 'bg-green-100 text-green-600',
      'キャリア': 'bg-purple-100 text-purple-600',
      '雑記': 'bg-orange-100 text-orange-600',
    };
    return colors[category] || 'bg-gray-100 text-gray-600';
  };

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
              News & Blog
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              最新のプロジェクト情報、技術記事、そして日々の学びを共有しています。
              フリーランスエンジニアとしての経験や知見をお届けします。
            </p>
          </motion.div>
        </div>
      </section>

      {/* Featured Posts */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              注目記事
            </h2>
            <p className="text-xl text-gray-600">
              特に読んでいただきたい記事をピックアップ
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            {newsItems
              .filter(item => item.featured)
              .map((item, index) => (
                <motion.article
                  key={item.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-200"
                >
                  <div className="aspect-video bg-gradient-to-br from-blue-100 to-indigo-200 flex items-center justify-center">
                    <span className="text-6xl">📝</span>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-4 mb-4">
                      <span className={`px-3 py-1 rounded-full text-sm font-semibold ${getCategoryColor(item.category)}`}>
                        {item.category}
                      </span>
                      <div className="flex items-center text-gray-500 text-sm">
                        <Calendar size={16} className="mr-1" />
                        {formatDate(item.date)}
                      </div>
                      <div className="flex items-center text-gray-500 text-sm">
                        <Clock size={16} className="mr-1" />
                        {item.readTime}
                      </div>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-3 hover:text-blue-600 transition-colors">
                      <Link href={`/news/${item.id}`}>
                        {item.title}
                      </Link>
                    </h3>
                    <p className="text-gray-600 mb-4 line-clamp-3">
                      {item.excerpt}
                    </p>
                    <Link
                      href={`/news/${item.id}`}
                      className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-700 transition-colors"
                    >
                      続きを読む <ArrowRight size={16} className="ml-1" />
                    </Link>
                  </div>
                </motion.article>
              ))}
          </div>
        </div>
      </section>

      {/* All Posts */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              すべての記事
            </h2>
            <p className="text-xl text-gray-600">
              技術情報からキャリアの話まで幅広く発信
            </p>
          </motion.div>

          {/* Category Filter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-wrap gap-4 mb-12"
          >
            {categories.map((category) => (
              <button
                key={category}
                className="px-4 py-2 rounded-full border border-gray-300 text-gray-700 hover:border-blue-600 hover:text-blue-600 transition-colors duration-200"
              >
                {category}
              </button>
            ))}
          </motion.div>

          <div className="space-y-8">
            {newsItems.map((item, index) => (
              <motion.article
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.05 }}
                className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200"
              >
                <div className="flex flex-col md:flex-row md:items-center gap-4 mb-4">
                  <span className={`px-3 py-1 rounded-full text-sm font-semibold w-fit ${getCategoryColor(item.category)}`}>
                    {item.category}
                  </span>
                  <div className="flex items-center gap-4 text-gray-500 text-sm">
                    <div className="flex items-center">
                      <Calendar size={16} className="mr-1" />
                      {formatDate(item.date)}
                    </div>
                    <div className="flex items-center">
                      <Clock size={16} className="mr-1" />
                      {item.readTime}
                    </div>
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3 hover:text-blue-600 transition-colors">
                  <Link href={`/news/${item.id}`}>
                    {item.title}
                  </Link>
                </h3>
                <p className="text-gray-600 mb-4">
                  {item.excerpt}
                </p>
                <Link
                  href={`/news/${item.id}`}
                  className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-700 transition-colors"
                >
                  続きを読む <ArrowRight size={16} className="ml-1" />
                </Link>
              </motion.article>
            ))}
          </div>

          {/* Load More Button */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mt-12"
          >
            <button className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200">
              さらに読み込む
            </button>
          </motion.div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold mb-4">
              最新情報をお届け
            </h2>
            <p className="text-xl mb-8 opacity-90">
              新しい記事やプロジェクト情報をいち早くお知らせします
            </p>
            <div className="max-w-md mx-auto flex gap-4">
              <input
                type="email"
                placeholder="メールアドレス"
                className="flex-1 px-4 py-3 rounded-lg text-gray-900"
              />
              <button className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200">
                購読
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}