'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { FileText, Download, Eye, Search, Filter, Calendar, Tag } from 'lucide-react';
import Link from 'next/link';
import PDFViewer from '@/components/PDFViewer';

interface Resource {
  id: string;
  title: string;
  description: string;
  category: string;
  type: 'presentation' | 'document' | 'article';
  date: string;
  tags: string[];
  fileUrl?: string;
  previewUrl?: string;
  size?: string;
}

export default function Resources() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedType, setSelectedType] = useState('all');
  const [viewingPDF, setViewingPDF] = useState<Resource | null>(null);

  // 実際の資料データ
  const resources: Resource[] = [
    {
      id: '1',
      title: 'NotebookLM完全活用ガイド',
      description: 'GoogleのNotebookLMを使った効率的な情報整理と知識管理の実践的手法',
      category: 'AI・ツール活用',
      type: 'presentation',
      date: '2025-01-27',
      tags: ['NotebookLM', 'AI', 'Google', '情報整理', '知識管理'],
      fileUrl: '/resources/presentations/notebooklm-guide.pdf',
      size: '1.8 MB'
    },
    {
      id: '2',
      title: 'AIエージェント「Gemini CLI」の仕組み大解剖',
      description: 'Google Gemini APIを活用したCLIツールの内部構造と実装方法を詳細に解説',
      category: '技術解説',
      type: 'presentation',
      date: '2025-01-26',
      tags: ['AI', 'Gemini', 'CLI', 'Google API', 'TypeScript'],
      fileUrl: '/resources/presentations/gemini-cli-analysis.pdf',
      size: '2.1 MB'
    },
    {
      id: '2',
      title: 'フリーランスエンジニアのフライホイール戦略',
      description: 'クライアント獲得を加速させる高インパクトなポートフォリオの構築と活用に関する戦略的ガイド',
      category: 'ビジネス戦略',
      type: 'presentation',
      date: '2025-01-25',
      tags: ['フリーランス', 'ポートフォリオ', '戦略', 'マーケティング'],
      fileUrl: '/resources/presentations/freelance-flywheel.pdf',
      previewUrl: '/resources/presentations/freelance-flywheel-preview.jpg',
      size: '2.4 MB'
    },
    {
      id: '3',
      title: 'FDEモデル：日本市場における伴走型開発',
      description: '顧客の懸念を克服し、長期的成功を収めるための戦略的フレームワーク',
      category: 'サービス設計',
      type: 'document',
      date: '2025-01-24',
      tags: ['FDE', '伴走型開発', '日本市場', 'フレームワーク'],
      fileUrl: '/resources/documents/fde-model-japan.pdf',
      size: '1.8 MB'
    },
    {
      id: '4',
      title: 'Next.js 15 パフォーマンス最適化ガイド',
      description: 'エンタープライズアプリケーションにおけるNext.js 15の最適化手法',
      category: '技術解説',
      type: 'article',
      date: '2025-01-20',
      tags: ['Next.js', 'パフォーマンス', '最適化', 'React'],
      previewUrl: '/resources/articles/nextjs-optimization-preview.jpg'
    }
  ];

  const categories = ['all', 'ビジネス戦略', 'サービス設計', '技術解説', 'ケーススタディ'];
  const types = ['all', 'presentation', 'document', 'article'];

  const filteredResources = resources.filter(resource => {
    const matchesSearch = resource.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         resource.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         resource.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    const matchesCategory = selectedCategory === 'all' || resource.category === selectedCategory;
    const matchesType = selectedType === 'all' || resource.type === selectedType;
    return matchesSearch && matchesCategory && matchesType;
  });

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'presentation': return '📊';
      case 'document': return '📄';
      case 'article': return '📝';
      default: return '📁';
    }
  };

  const getTypeLabel = (type: string) => {
    switch (type) {
      case 'presentation': return 'プレゼンテーション';
      case 'document': return '文書';
      case 'article': return '記事';
      default: return 'その他';
    }
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('ja-JP', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
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
              資料集
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              技術解説、ビジネス戦略、ケーススタディなど、
              これまでに作成した資料を公開しています。
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filters */}
      <section className="py-12 bg-white border-b">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-6 items-center">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="text"
                placeholder="資料を検索..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
              />
            </div>

            {/* Category Filter */}
            <div className="flex items-center gap-2">
              <Filter size={20} className="text-gray-600" />
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
              >
                {categories.map(category => (
                  <option key={category} value={category}>
                    {category === 'all' ? 'すべてのカテゴリ' : category}
                  </option>
                ))}
              </select>
            </div>

            {/* Type Filter */}
            <div>
              <select
                value={selectedType}
                onChange={(e) => setSelectedType(e.target.value)}
                className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
              >
                {types.map(type => (
                  <option key={type} value={type}>
                    {type === 'all' ? 'すべての形式' : getTypeLabel(type)}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* Resources Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredResources.map((resource, index) => (
              <motion.div
                key={resource.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-white rounded-lg shadow-lg border hover:shadow-xl transition-shadow duration-200"
              >
                {/* Preview Image */}
                <div className="aspect-video bg-gradient-to-br from-gray-100 to-gray-200 rounded-t-lg overflow-hidden">
                  {resource.previewUrl ? (
                    <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                      <span className="text-6xl">{getTypeIcon(resource.type)}</span>
                    </div>
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-gray-500">
                      <FileText size={48} />
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="bg-blue-100 text-blue-600 px-2 py-1 rounded-full text-xs font-semibold">
                      {resource.category}
                    </span>
                    <span className="bg-gray-100 text-gray-600 px-2 py-1 rounded-full text-xs">
                      {getTypeLabel(resource.type)}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                    {resource.title}
                  </h3>

                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {resource.description}
                  </p>

                  <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                    <div className="flex items-center gap-1">
                      <Calendar size={14} />
                      {formatDate(resource.date)}
                    </div>
                    {resource.size && (
                      <div className="flex items-center gap-1">
                        <FileText size={14} />
                        {resource.size}
                      </div>
                    )}
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1 mb-4">
                    {resource.tags.map(tag => (
                      <span
                        key={tag}
                        className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-xs"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>

                  {/* Actions */}
                  <div className="flex gap-2">
                    {resource.fileUrl && (
                      <button 
                        onClick={() => setViewingPDF(resource)}
                        className="flex-1 bg-gray-100 text-gray-700 py-2 px-4 rounded-lg font-semibold hover:bg-gray-200 transition-colors duration-200 flex items-center justify-center gap-2"
                      >
                        <Eye size={16} />
                        プレビュー
                      </button>
                    )}
                    {resource.fileUrl && (
                      <a
                        href={resource.fileUrl}
                        download
                        className="flex-1 bg-blue-600 text-white py-2 px-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200 flex items-center justify-center gap-2"
                      >
                        <Download size={16} />
                        ダウンロード
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {filteredResources.length === 0 && (
            <div className="text-center py-12">
              <FileText size={64} className="text-gray-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-600 mb-2">
                該当する資料が見つかりません
              </h3>
              <p className="text-gray-500">
                検索条件を変更してお試しください
              </p>
            </div>
          )}
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
              カスタム資料の作成も承ります
            </h2>
            <p className="text-xl mb-8 opacity-90">
              あなたのビジネスに特化した資料作成をお手伝いします
            </p>
            <Link
              href="/contact"
              className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200 inline-block"
            >
              資料作成を相談する
            </Link>
          </motion.div>
        </div>
      </section>

      {/* PDF Viewer Modal */}
      {viewingPDF && viewingPDF.fileUrl && (
        <PDFViewer
          fileUrl={viewingPDF.fileUrl}
          title={viewingPDF.title}
          onClose={() => setViewingPDF(null)}
        />
      )}
    </div>
  );
}