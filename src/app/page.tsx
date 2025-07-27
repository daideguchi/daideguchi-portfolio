'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, Code, Zap, Users } from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-20 w-72 h-72 bg-blue-600 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
          <div className="absolute top-40 right-20 w-72 h-72 bg-purple-600 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-1000"></div>
          <div className="absolute bottom-20 left-40 w-72 h-72 bg-pink-600 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-2000"></div>
        </div>
        
        <div className="container mx-auto px-6 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-full text-sm font-semibold mb-8 shadow-lg">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              🤖 AI開発・コンサルティング専門
            </div>
            
            <h1 className="text-6xl md:text-8xl font-black text-gray-900 mb-6 leading-tight">
              AI is{' '}
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                Future
              </span>
            </h1>
            
            <p className="text-2xl md:text-3xl text-gray-700 mb-4 font-light max-w-4xl mx-auto leading-relaxed">
              🚀 AIでビジネスを革新する
            </p>
            <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-3xl mx-auto">
              AI開発・機械学習・LLM活用専門エンジニア
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Link
                href="/portfolio"
                className="group bg-gradient-to-r from-blue-600 to-purple-600 text-white px-10 py-5 rounded-2xl font-bold text-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 flex items-center gap-3"
              >
                実績を見る 
                <ArrowRight size={24} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/services"
                className="group border-3 border-gray-300 text-gray-700 px-10 py-5 rounded-2xl font-bold text-lg hover:border-blue-600 hover:text-blue-600 hover:shadow-xl transition-all duration-300"
              >
                🤖 AI開発サービス詳細
              </Link>
            </div>
            
            <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="text-4xl font-bold text-blue-600 mb-2">🤖 30+</div>
                <div className="text-gray-600">AI プロジェクト</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-purple-600 mb-2">🚀 10+</div>
                <div className="text-gray-600">LLM アプリ開発</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-pink-600 mb-2">⚡ 5+</div>
                <div className="text-gray-600">年のAI経験</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-32 bg-white relative">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              🤖 AI<span className="text-blue-600">専門領域</span>
            </h2>
            <p className="text-2xl text-gray-600 max-w-3xl mx-auto">
              最新のAI技術でビジネス課題を解決
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="group text-center p-10 rounded-3xl bg-gradient-to-br from-blue-50 to-indigo-50 hover:shadow-2xl hover:scale-105 transition-all duration-300 border border-blue-100"
            >
              <div className="w-20 h-20 bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:rotate-6 transition-transform duration-300">
                <Code className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                🧠 機械学習・AI開発
              </h3>
              <p className="text-gray-600 leading-relaxed">
                TensorFlow、PyTorch、OpenAI APIを活用した機械学習モデルの開発から、
                LLMを使った革新的なAIアプリケーションまで幅広く対応します。
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="group text-center p-10 rounded-3xl bg-gradient-to-br from-purple-50 to-pink-50 hover:shadow-2xl hover:scale-105 transition-all duration-300 border border-purple-100"
            >
              <div className="w-20 h-20 bg-gradient-to-br from-purple-600 to-pink-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:rotate-6 transition-transform duration-300">
                <Zap className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                🚀 LLM・生成AI活用
              </h3>
              <p className="text-gray-600 leading-relaxed">
                ChatGPT、Claude、Geminiなどの最新LLMを活用した
                チャットボット、文書生成、データ分析システムを構築します。
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="group text-center p-10 rounded-3xl bg-gradient-to-br from-green-50 to-teal-50 hover:shadow-2xl hover:scale-105 transition-all duration-300 border border-green-100"
            >
              <div className="w-20 h-20 bg-gradient-to-br from-green-600 to-teal-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:rotate-6 transition-transform duration-300">
                <Users className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                ⚡ AI業務自動化
              </h3>
              <p className="text-gray-600 leading-relaxed">
                RPA、OCR、自然言語処理を組み合わせた業務自動化システムで、
                人的コストを大幅削減し、生産性を向上させます。
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse delay-1000"></div>
        </div>
        
        <div className="container mx-auto px-6 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-5xl md:text-6xl font-bold mb-6">
              プロジェクトを<br />
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                始めませんか？
              </span>
            </h2>
            <p className="text-2xl mb-12 opacity-90 max-w-3xl mx-auto leading-relaxed">
              あなたのビジネス課題を技術で解決し、<br />
              共に成功への道筋を描きましょう
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Link
                href="/contact"
                className="group bg-gradient-to-r from-blue-500 to-purple-500 text-white px-12 py-6 rounded-2xl font-bold text-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 flex items-center gap-3"
              >
                無料相談を始める
                <ArrowRight size={24} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/portfolio"
                className="group border-2 border-white text-white px-12 py-6 rounded-2xl font-bold text-xl hover:bg-white hover:text-gray-900 transition-all duration-300"
              >
                実績を確認する
              </Link>
            </div>
            
            <div className="mt-16 text-center">
              <p className="text-lg opacity-75 mb-4">信頼いただいている企業様</p>
              <div className="flex justify-center items-center gap-8 opacity-60">
                <div className="text-2xl font-bold">Enterprise A</div>
                <div className="text-2xl font-bold">Startup B</div>
                <div className="text-2xl font-bold">Company C</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
