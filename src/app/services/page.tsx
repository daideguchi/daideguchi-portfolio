'use client';

import { motion } from 'framer-motion';
import { Globe, Smartphone, Cloud, Users, Zap, Shield } from 'lucide-react';
import Link from 'next/link';

export default function Services() {
  const services = [
    {
      icon: Users,
      title: '伴走型開発サービス',
      description: '顧客の現場に深く入り込み、一緒に課題を発見・解決する新しい開発スタイル',
      features: [
        '現場密着型の課題発見',
        '段階的なリスク軽減',
        '継続的な改善サポート',
        '長期パートナーシップ',
      ],
      price: 'フェーズ別価格設定',
      featured: true,
    },
    {
      icon: Globe,
      title: 'Webアプリケーション開発',
      description: 'React/Next.jsを使用したモダンなWebアプリケーションの設計・開発',
      features: [
        'レスポンシブデザイン',
        'SEO最適化',
        'パフォーマンス最適化',
        'アクセシビリティ対応',
      ],
      price: '¥500,000〜',
    },
    {
      icon: Smartphone,
      title: 'モバイルアプリ開発',
      description: 'React NativeやPWAを活用したクロスプラットフォーム対応',
      features: [
        'iOS/Android対応',
        'ネイティブ機能連携',
        'オフライン対応',
        'プッシュ通知',
      ],
      price: '¥800,000〜',
    },
    {
      icon: Cloud,
      title: 'クラウドインフラ構築',
      description: 'AWS/GCPを活用したスケーラブルなインフラ設計・構築',
      features: [
        'サーバーレス構成',
        'CI/CD構築',
        'モニタリング設定',
        'セキュリティ対策',
      ],
      price: '¥300,000〜',
    },
    {
      icon: Users,
      title: '技術コンサルティング',
      description: '技術選定からアーキテクチャ設計まで包括的なコンサルティング',
      features: [
        '技術選定支援',
        'アーキテクチャ設計',
        'コードレビュー',
        'チーム教育',
      ],
      price: '¥100,000〜/月',
    },
    {
      icon: Zap,
      title: 'プロトタイプ開発',
      description: 'アイデア検証のための迅速なプロトタイプ開発',
      features: [
        '迅速な開発',
        'MVP構築',
        'ユーザーテスト支援',
        '改善提案',
      ],
      price: '¥200,000〜',
    },
    {
      icon: Shield,
      title: 'システム保守・運用',
      description: '既存システムの保守・運用・改善',
      features: [
        '定期メンテナンス',
        'セキュリティ更新',
        'パフォーマンス改善',
        '機能追加',
      ],
      price: '¥50,000〜/月',
    },
  ];

  const process = [
    {
      step: '01',
      title: 'ヒアリング',
      description: 'お客様の課題やご要望を詳しくお聞きします',
    },
    {
      step: '02',
      title: '提案・見積もり',
      description: '最適なソリューションと詳細な見積もりを提示',
    },
    {
      step: '03',
      title: '設計・開発',
      description: 'アジャイル手法で迅速かつ柔軟に開発を進行',
    },
    {
      step: '04',
      title: 'テスト・納品',
      description: '徹底的なテストを行い、品質を保証して納品',
    },
    {
      step: '05',
      title: 'サポート',
      description: '納品後も継続的なサポートを提供',
    },
  ];

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
              Services
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              お客様のビジネス課題を解決する包括的なソリューションを提供します
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              提供サービス
            </h2>
            <p className="text-xl text-gray-600">
              技術力とビジネス理解を組み合わせた価値提供
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className={`bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-200 border ${
                  service.featured ? 'border-blue-500 ring-2 ring-blue-200' : 'border-gray-100'
                } ${service.featured ? 'relative' : ''}`}
              >
                {service.featured && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-blue-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                      NEW
                    </span>
                  </div>
                )}
                <service.icon className="w-12 h-12 text-blue-600 mb-4" />
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center text-gray-700">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className="text-2xl font-bold text-blue-600 mb-4">
                  {service.price}
                </div>
                <Link
                  href={service.title === '伴走型開発サービス' ? '/services/fde' : '/contact'}
                  className="block w-full text-center bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200"
                >
                  {service.title === '伴走型開発サービス' ? '詳細を見る' : '相談する'}
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              開発プロセス
            </h2>
            <p className="text-xl text-gray-600">
              透明性の高いプロセスで安心してプロジェクトを進められます
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            {process.map((item, index) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="flex items-center mb-12"
              >
                <div className="flex-shrink-0 w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-lg mr-8">
                  {item.step}
                </div>
                <div>
                  <h3 className="text-2xl font-semibold text-gray-900 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-600">{item.description}</p>
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
              プロジェクトを始めませんか？
            </h2>
            <p className="text-xl mb-8 opacity-90">
              まずはお気軽にご相談ください。無料でお見積もりいたします。
            </p>
            <Link
              href="/contact"
              className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200 inline-block"
            >
              無料相談を申し込む
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}