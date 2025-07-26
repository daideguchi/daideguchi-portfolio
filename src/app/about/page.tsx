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
      year: '2020',
      title: 'フリーランス開始',
      description: 'ソフトウェアエンジニアとして独立、Web開発を中心に活動開始',
    },
    {
      year: '2021',
      title: 'モダン技術への特化',
      description: 'React/Next.js/TypeScriptを中心とした開発に特化',
    },
    {
      year: '2022',
      title: 'フルスタック対応',
      description: 'バックエンド開発とクラウドインフラ構築も対応開始',
    },
    {
      year: '2023',
      title: 'コンサルティング開始',
      description: '技術選定やアーキテクチャ設計のコンサルティングも提供',
    },
    {
      year: '2024',
      title: '伴走型開発サービス',
      description: 'FDEモデルを参考にした伴走型開発サービスを開始',
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
              モダンな技術で価値あるソリューションを提供する
              フリーランスソフトウェアエンジニア
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
                daideguchi
              </h2>
              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-3 text-gray-600">
                  <MapPin size={20} />
                  <span>日本</span>
                </div>
                <div className="flex items-center gap-3 text-gray-600">
                  <Calendar size={20} />
                  <span>フリーランスエンジニア</span>
                </div>
                <div className="flex items-center gap-3 text-gray-600">
                  <Award size={20} />
                  <span>フルスタック開発者</span>
                </div>
              </div>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                モダンな技術スタックを活用し、ビジネス課題を解決する価値あるソリューションを提供しています。
                特に顧客の現場に深く入り込む「伴走型開発サービス」により、
                単なるシステム開発を超えた真のパートナーシップを築きます。
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
    </div>
  );
}