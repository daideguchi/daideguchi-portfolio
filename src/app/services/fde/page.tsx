'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, CheckCircle, Users, Zap, Shield, Target, Clock, TrendingUp } from 'lucide-react';

export default function FDEService() {
  const phases = [
    {
      phase: 'フェーズ1',
      title: '課題発見・プロトタイピング',
      duration: '1-3ヶ月',
      contract: '準委任契約',
      price: '月額80-120万円',
      description: '現場に入り込み、真の課題を発見してプロトタイプで検証',
      activities: [
        '現場ヒアリング・業務分析',
        '課題の可視化・優先順位付け',
        'プロトタイプ開発',
        'ユーザーテスト・検証',
        '要件定義・技術仕様策定',
      ],
      deliverables: [
        'プロトタイプ',
        '課題分析レポート',
        '要件定義書',
        '技術仕様書',
      ],
    },
    {
      phase: 'フェーズ2',
      title: '構築・実装',
      duration: '2-6ヶ月',
      contract: '請負契約',
      price: 'プロジェクト固定価格',
      description: '検証済みの要件に基づいて本格的なシステムを構築',
      activities: [
        'システム設計・アーキテクチャ構築',
        '本格開発・実装',
        'テスト・品質保証',
        '導入・移行支援',
        'ユーザートレーニング',
      ],
      deliverables: [
        '完成システム',
        '運用マニュアル',
        'テスト結果報告書',
        '移行完了報告書',
      ],
    },
    {
      phase: 'フェーズ3',
      title: '継続改善・保守',
      duration: '継続',
      contract: 'リテイナー契約',
      price: '月額20-40万円',
      description: '長期的なパートナーとして継続的な改善をサポート',
      activities: [
        '日常的な保守・運用',
        'ユーザーサポート',
        'パフォーマンス監視・最適化',
        '機能改善・追加開発',
        '定期的な技術アップデート',
      ],
      deliverables: [
        '月次運用レポート',
        '改善提案書',
        '機能追加・改修',
        'パフォーマンス分析',
      ],
    },
  ];

  const benefits = [
    {
      icon: Target,
      title: '現場に根ざした解決策',
      description: '机上の空論ではなく、実際の業務フローに合わせた実用的なシステムを構築します。',
    },
    {
      icon: Zap,
      title: '段階的リスク軽減',
      description: '小さく始めて大きく育てるアプローチで、投資リスクを最小化します。',
    },
    {
      icon: Users,
      title: '長期パートナーシップ',
      description: '単発プロジェクトではなく、ビジネス成長に合わせた継続的な関係を築きます。',
    },
    {
      icon: TrendingUp,
      title: 'コスト効率の最適化',
      description: 'フェーズ3では大幅なコスト削減を実現し、長期的な投資効果を最大化します。',
    },
  ];

  const targetCustomers = [
    {
      type: '中小企業',
      description: '従業員50-500名規模で、デジタル化に課題を抱える企業',
      examples: ['製造業', '小売業', 'サービス業'],
    },
    {
      type: 'スタートアップ',
      description: '技術的パートナーが必要な成長段階の企業',
      examples: ['SaaS企業', 'EC事業', 'フィンテック'],
    },
    {
      type: '技術系企業',
      description: '技術的な専門知識を活かした高度なソリューション提供',
      examples: ['SaaS企業', 'テック系スタートアップ', 'IT企業'],
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
            <div className="inline-block bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-semibold mb-4">
              NEW SERVICE
            </div>
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              伴走型開発サービス
            </h1>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto mb-8">
              顧客の現場に深く入り込み、一緒に課題を発見・解決する新しい開発スタイル。<br />
              単なるシステム開発ではなく、ビジネス課題の根本解決を目指します。
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200 flex items-center justify-center gap-2"
              >
                無料相談を申し込む <ArrowRight size={20} />
              </Link>
              <Link
                href="#phases"
                className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-colors duration-200"
              >
                サービス詳細を見る
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              なぜ伴走型なのか？
            </h2>
            <p className="text-xl text-gray-600">
              従来の受託開発とは異なる、新しい価値提供のアプローチ
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="text-center p-6"
              >
                <benefit.icon className="w-16 h-16 text-blue-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {benefit.title}
                </h3>
                <p className="text-gray-600">
                  {benefit.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Phases Section */}
      <section id="phases" className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              3つのフェーズで確実な成果を
            </h2>
            <p className="text-xl text-gray-600">
              段階的なアプローチで、リスクを最小化しながら最大の価値を提供
            </p>
          </motion.div>

          <div className="space-y-12">
            {phases.map((phase, index) => (
              <motion.div
                key={phase.phase}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
                }`}
              >
                <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                  <div className="bg-white p-8 rounded-lg shadow-lg">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">
                        {index + 1}
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900">
                          {phase.title}
                        </h3>
                        <p className="text-blue-600 font-semibold">
                          {phase.phase}
                        </p>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                      <div className="text-center p-3 bg-gray-50 rounded-lg">
                        <Clock className="w-6 h-6 text-gray-600 mx-auto mb-1" />
                        <div className="text-sm font-semibold text-gray-900">
                          {phase.duration}
                        </div>
                      </div>
                      <div className="text-center p-3 bg-gray-50 rounded-lg">
                        <Shield className="w-6 h-6 text-gray-600 mx-auto mb-1" />
                        <div className="text-sm font-semibold text-gray-900">
                          {phase.contract}
                        </div>
                      </div>
                      <div className="text-center p-3 bg-blue-50 rounded-lg">
                        <TrendingUp className="w-6 h-6 text-blue-600 mx-auto mb-1" />
                        <div className="text-sm font-semibold text-blue-600">
                          {phase.price}
                        </div>
                      </div>
                    </div>

                    <p className="text-gray-600 mb-6">
                      {phase.description}
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-3">
                          主な活動
                        </h4>
                        <ul className="space-y-2">
                          {phase.activities.map((activity) => (
                            <li key={activity} className="flex items-start gap-2 text-sm text-gray-600">
                              <CheckCircle size={16} className="text-green-600 mt-0.5 flex-shrink-0" />
                              {activity}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-3">
                          成果物
                        </h4>
                        <ul className="space-y-2">
                          {phase.deliverables.map((deliverable) => (
                            <li key={deliverable} className="flex items-start gap-2 text-sm text-gray-600">
                              <CheckCircle size={16} className="text-blue-600 mt-0.5 flex-shrink-0" />
                              {deliverable}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                <div className={index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}>
                  <div className="aspect-square bg-gradient-to-br from-blue-100 to-indigo-200 rounded-lg flex items-center justify-center">
                    <span className="text-8xl">
                      {index === 0 ? '🔍' : index === 1 ? '🛠️' : '🚀'}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Target Customers */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              こんな企業におすすめ
            </h2>
            <p className="text-xl text-gray-600">
              伴走型開発サービスが最も効果を発揮する企業タイプ
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {targetCustomers.map((customer, index) => (
              <motion.div
                key={customer.type}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-gray-50 p-8 rounded-lg text-center"
              >
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {customer.type}
                </h3>
                <p className="text-gray-600 mb-6">
                  {customer.description}
                </p>
                <div className="flex flex-wrap gap-2 justify-center">
                  {customer.examples.map((example) => (
                    <span
                      key={example}
                      className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm"
                    >
                      {example}
                    </span>
                  ))}
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
              まずは無料相談から始めませんか？
            </h2>
            <p className="text-xl mb-8 opacity-90">
              あなたの課題をお聞かせください。最適なアプローチをご提案します。
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200 inline-flex items-center justify-center gap-2"
              >
                無料相談を申し込む <ArrowRight size={20} />
              </Link>
              <Link
                href="/portfolio"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors duration-200"
              >
                実績を見る
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}