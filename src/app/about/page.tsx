'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Calendar, MapPin, Award, Heart } from 'lucide-react';

export default function About() {
  const skills = [
    'JavaScript/TypeScript',
    'React/Next.js',
    'Node.js',
    'Python',
    'AWS',
    'Docker',
    'PostgreSQL',
    'MongoDB',
    'Git/GitHub',
    'Figma',
  ];

  const timeline = [
    {
      year: '2014-2018',
      title: '政令市職員 障がい者部門',
      description: '事業者認可・監査・不正取締を担当。1億円超の返還命令を実行。大規模説明会の企画・登壇も経験。',
    },
    {
      year: '2018-2022',
      title: '政令市職員 課税部門',
      description: '固定資産税業務を担当。Excel/VBA活用で1,000時間の業務効率化を達成。組織的整理整頓カルチャーを醸成。',
    },
    {
      year: '2020-2021',
      title: 'クラウドファンディング事業',
      description: 'Makuakeで580万円調達成功。商品企画から海外交渉、認証取得、マーケティング、物流まで一気通貫で実行。',
    },
    {
      year: '2022-2024',
      title: '政令市職員 企画部門',
      description: '宿泊税広報、固定資産税業務改善、DX推進を担当。前任者比20時間/月の残業削減を実現。',
    },
    {
      year: '2024-現在',
      title: 'AI YouTube事業',
      description: 'AI技術を活用したYouTube事業で年間1000万円超の収益を実現。4チャンネル運営、3チャンネル売却実績。',
    },
    {
      year: '2024-現在',
      title: 'Eletus株式会社 共同創業',
      description: 'AI・教育スタートアップを共同創業。取締役としてプロダクト開発と事業戦略を担当。',
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
              About Me
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              AI技術とデジタルコンテンツで年間1000万円超の収益を実現
              AIエンジニア・YouTuber
            </p>
          </motion.div>
        </div>
      </section>

      {/* Profile Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="relative w-80 h-80 mx-auto lg:mx-0 rounded-full overflow-hidden bg-gray-200">
                {/* プロフィール画像のプレースホルダー */}
                <div className="w-full h-full flex items-center justify-center text-gray-500">
                  <span className="text-6xl">👨‍💻</span>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                出口 大
              </h2>
              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-3 text-gray-600">
                  <MapPin size={20} />
                  <span>日本</span>
                </div>
                <div className="flex items-center gap-3 text-gray-600">
                  <Calendar size={20} />
                  <span>AIエンジニア・YouTuber</span>
                </div>
                <div className="flex items-center gap-3 text-gray-600">
                  <Award size={20} />
                  <span>機械学習・AI開発専門</span>
                </div>
              </div>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                政令市職員として10年間の行政経験を活かし、組織運営と業務効率化のノウハウを蓄積。
                クラウドファンディングで580万円調達、AI YouTube事業で年間1000万円超の収益を実現。
                行政・起業・AI技術の幅広い経験を活かし、お客様のビジネス課題を多角的に解決します。
              </p>
              <div className="flex items-center gap-3 text-blue-600">
                <Heart size={20} />
                <span className="font-semibold">
                  「Code is Design」- 技術とビジネスの架け橋
                </span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              技術スキル
            </h2>
            <p className="text-xl text-gray-600">
              常に最新技術をキャッチアップし、最適な技術選択を行います
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4"
          >
            {skills.map((skill, index) => (
              <div
                key={skill}
                className="bg-white p-4 rounded-lg text-center shadow-sm hover:shadow-md transition-shadow duration-200"
              >
                <span className="font-semibold text-gray-800">{skill}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              キャリアタイムライン
            </h2>
            <p className="text-xl text-gray-600">
              フリーランスエンジニアとしての成長の軌跡
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            {timeline.map((item, index) => (
              <motion.div
                key={item.year}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className={`flex items-center mb-12 ${
                  index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
                }`}
              >
                <div className="flex-1">
                  <div
                    className={`bg-white p-6 rounded-lg shadow-lg ${
                      index % 2 === 0 ? 'mr-8' : 'ml-8'
                    }`}
                  >
                    <div className="text-blue-600 font-bold text-lg mb-2">
                      {item.year}
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      {item.title}
                    </h3>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                </div>
                <div className="w-4 h-4 bg-blue-600 rounded-full border-4 border-white shadow-lg"></div>
                <div className="flex-1"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* YouTube AI Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              AIを活用したYouTube戦略
            </h2>
            <p className="text-xl text-gray-600">
              年間1000万円超の収益を実現したAI駆動型コンテンツ制作
            </p>
          </motion.div>

          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="space-y-8"
              >
                <div className="bg-white p-8 rounded-2xl shadow-lg">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">🎬 AI動画制作プロセス</h3>
                  <ul className="space-y-3 text-gray-700">
                    <li>• <strong>コンテンツ企画:</strong> GPT-4を使用したトレンド分析と台本自動生成</li>
                    <li>• <strong>音声生成:</strong> 高品質なAI音声合成によるナレーション制作</li>
                    <li>• <strong>映像編集:</strong> 自動カット編集とAIによるエフェクト最適化</li>
                    <li>• <strong>サムネイル:</strong> AI画像生成ツールによる魅力的なサムネイル制作</li>
                  </ul>
                </div>

                <div className="bg-white p-8 rounded-2xl shadow-lg">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">📊 データ分析と最適化</h3>
                  <ul className="space-y-3 text-gray-700">
                    <li>• <strong>視聴データ分析:</strong> YouTube Analytics APIを活用した自動レポート生成</li>
                    <li>• <strong>トレンド予測:</strong> 機械学習による人気コンテンツの予測モデル</li>
                    <li>• <strong>A/Bテスト:</strong> タイトルとサムネイルの自動最適化システム</li>
                    <li>• <strong>収益最大化:</strong> AI予測による最適な投稿タイミング算出</li>
                  </ul>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="space-y-8"
              >
                <div className="bg-white p-8 rounded-2xl shadow-lg">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">🎯 コンテンツ戦略</h3>
                  <ul className="space-y-3 text-gray-700">
                    <li>• <strong>ターゲット分析:</strong> 高齢者層の視聴傾向をAIで詳細分析</li>
                    <li>• <strong>仏教・自己啓発:</strong> 心に響くメッセージ性の高いコンテンツ制作</li>
                    <li>• <strong>シリーズ展開:</strong> AIによる継続視聴を促進するストーリー設計</li>
                    <li>• <strong>感情分析:</strong> コメント分析による視聴者感情の可視化</li>
                  </ul>
                </div>

                <div className="bg-white p-8 rounded-2xl shadow-lg">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">🚀 スケーラブルな運営</h3>
                  <ul className="space-y-3 text-gray-700">
                    <li>• <strong>複数チャンネル管理:</strong> 4つのチャンネルを同時運営する自動化システム</li>
                    <li>• <strong>投稿スケジューリング:</strong> 最適な投稿時間をAIが自動判定・予約投稿</li>
                    <li>• <strong>コメント管理:</strong> AIチャットボットによる自動返信システム</li>
                    <li>• <strong>収益分析:</strong> リアルタイムな収益トラッキングとレポート自動生成</li>
                  </ul>
                </div>
              </motion.div>
            </div>

            {/* 実績サマリー */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-8 rounded-2xl shadow-xl"
            >
              <h3 className="text-2xl font-bold mb-6 text-center">🏆 AI活用YouTube事業実績</h3>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center">
                <div>
                  <div className="text-3xl font-bold mb-2">4+</div>
                  <div className="text-blue-100">運営チャンネル数</div>
                </div>
                <div>
                  <div className="text-3xl font-bold mb-2">1000万円+</div>
                  <div className="text-blue-100">年間収益</div>
                </div>
                <div>
                  <div className="text-3xl font-bold mb-2">3</div>
                  <div className="text-blue-100">チャンネル売却実績</div>
                </div>
                <div>
                  <div className="text-3xl font-bold mb-2">90%</div>
                  <div className="text-blue-100">作業自動化率</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}