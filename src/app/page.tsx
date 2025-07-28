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
              AI Development & Machine Learning Specialist
            </div>
            
            <h1 className="text-6xl md:text-8xl font-black text-gray-900 mb-6 leading-tight">
              AI{' '}
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                Innovation
              </span>
            </h1>
            
            <p className="text-2xl md:text-3xl text-gray-700 mb-4 font-light max-w-4xl mx-auto leading-relaxed">
              Advanced AI solutions that transform business operations
            </p>
            <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-3xl mx-auto">
              Machine Learning • Large Language Models • AI Automation
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
                AI Development Services
              </Link>
            </div>
            
            <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="text-4xl font-bold text-blue-600 mb-2">9</div>
                <div className="text-gray-600">AIプロジェクト</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-purple-600 mb-2">100%</div>
                <div className="text-gray-600">オープンソース</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-pink-600 mb-2">1</div>
                <div className="text-gray-600">ライブプロダクト</div>
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
              AI-Powered <span className="text-blue-600">Solutions</span>
            </h2>
            <p className="text-2xl text-gray-600 max-w-3xl mx-auto">
              Live demonstrations of machine learning and AI capabilities
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            <a href="https://asagamiai.com/" target="_blank" rel="noopener noreferrer">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
                className="group p-6 rounded-2xl bg-gradient-to-br from-blue-50 to-indigo-50 hover:shadow-xl hover:scale-105 transition-all duration-300 border border-blue-100 cursor-pointer h-full"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl flex items-center justify-center mb-4 group-hover:rotate-6 transition-transform duration-300">
                  <Code className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Asagami AI
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  AI-powered learning system that analyzes study notes and generates personalized questions. 
                  Features gamified learning experience with progress tracking.
                </p>
                <div className="text-blue-600 font-semibold text-sm">
                  → Live Product
                </div>
              </motion.div>
            </a>

            <a href="https://github.com/daideguchi/wisdom-blog" target="_blank" rel="noopener noreferrer">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="group p-6 rounded-2xl bg-gradient-to-br from-purple-50 to-pink-50 hover:shadow-xl hover:scale-105 transition-all duration-300 border border-purple-100 cursor-pointer h-full"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-purple-600 to-pink-600 rounded-xl flex items-center justify-center mb-4 group-hover:rotate-6 transition-transform duration-300">
                  <Zap className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  WISDOM Blog
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  AI-powered developer knowledge management system that automatically converts 
                  development logs into structured articles.
                </p>
                <div className="text-purple-600 font-semibold text-sm">
                  → GitHub Repository
                </div>
              </motion.div>
            </a>

            <a href="https://github.com/daideguchi/ai-safety-monitor" target="_blank" rel="noopener noreferrer">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="group p-6 rounded-2xl bg-gradient-to-br from-green-50 to-teal-50 hover:shadow-xl hover:scale-105 transition-all duration-300 border border-green-100 cursor-pointer h-full"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-green-600 to-teal-600 rounded-xl flex items-center justify-center mb-4 group-hover:rotate-6 transition-transform duration-300">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  AI Safety Monitor
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  Real-time AI safety monitoring dashboard with risk assessment 
                  and compliance tracking for AI systems.
                </p>
                <div className="text-green-600 font-semibold text-sm">
                  → GitHub Repository
                </div>
              </motion.div>
            </a>

            <a href="https://github.com/daideguchi/ai-development-companion" target="_blank" rel="noopener noreferrer">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="group p-6 rounded-2xl bg-gradient-to-br from-orange-50 to-red-50 hover:shadow-xl hover:scale-105 transition-all duration-300 border border-orange-100 cursor-pointer h-full"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-orange-600 to-red-600 rounded-xl flex items-center justify-center mb-4 group-hover:rotate-6 transition-transform duration-300">
                  <Code className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  AI Development Companion
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  Intelligent AI development partner that acts like a skilled human developer, 
                  providing comprehensive coding assistance.
                </p>
                <div className="text-orange-600 font-semibold text-sm">
                  → GitHub Repository
                </div>
              </motion.div>
            </a>

            <a href="https://github.com/daideguchi/constitutional-ai" target="_blank" rel="noopener noreferrer">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="group p-6 rounded-2xl bg-gradient-to-br from-cyan-50 to-blue-50 hover:shadow-xl hover:scale-105 transition-all duration-300 border border-cyan-100 cursor-pointer h-full"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-600 to-blue-600 rounded-xl flex items-center justify-center mb-4 group-hover:rotate-6 transition-transform duration-300">
                  <Zap className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Constitutional AI
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  Ready-to-use Constitutional AI framework for building ethical 
                  and aligned AI systems with built-in safety measures.
                </p>
                <div className="text-cyan-600 font-semibold text-sm">
                  → GitHub Repository
                </div>
              </motion.div>
            </a>

            <a href="https://github.com/daideguchi/mcp-integration-toolkit" target="_blank" rel="noopener noreferrer">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="group p-6 rounded-2xl bg-gradient-to-br from-violet-50 to-purple-50 hover:shadow-xl hover:scale-105 transition-all duration-300 border border-violet-100 cursor-pointer h-full"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-violet-600 to-purple-600 rounded-xl flex items-center justify-center mb-4 group-hover:rotate-6 transition-transform duration-300">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  MCP Integration Toolkit
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  Complete Model Context Protocol (MCP) integration toolkit for 
                  seamless AI model communication and context management.
                </p>
                <div className="text-violet-600 font-semibold text-sm">
                  → GitHub Repository
                </div>
              </motion.div>
            </a>

            <a href="https://github.com/daideguchi/ai-news-dashboard" target="_blank" rel="noopener noreferrer">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.7 }}
                className="group p-6 rounded-2xl bg-gradient-to-br from-emerald-50 to-green-50 hover:shadow-xl hover:scale-105 transition-all duration-300 border border-emerald-100 cursor-pointer h-full"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-emerald-600 to-green-600 rounded-xl flex items-center justify-center mb-4 group-hover:rotate-6 transition-transform duration-300">
                  <Code className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  AI News Dashboard
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  Daily AI news dashboard with structured data processing and 
                  intelligent content curation for AI industry updates.
                </p>
                <div className="text-emerald-600 font-semibold text-sm">
                  → GitHub Repository
                </div>
              </motion.div>
            </a>

            <a href="https://github.com/daideguchi/youtube-channel-analyzer" target="_blank" rel="noopener noreferrer">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="group p-6 rounded-2xl bg-gradient-to-br from-rose-50 to-pink-50 hover:shadow-xl hover:scale-105 transition-all duration-300 border border-rose-100 cursor-pointer h-full"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-rose-600 to-pink-600 rounded-xl flex items-center justify-center mb-4 group-hover:rotate-6 transition-transform duration-300">
                  <Zap className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  YouTube Analytics Tool
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  Advanced YouTube channel analysis tool with AI-powered insights 
                  for content optimization and audience engagement.
                </p>
                <div className="text-rose-600 font-semibold text-sm">
                  → GitHub Repository
                </div>
              </motion.div>
            </a>

            <a href="https://github.com/daideguchi/spreadsheet-image-generator" target="_blank" rel="noopener noreferrer">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.9 }}
                className="group p-6 rounded-2xl bg-gradient-to-br from-amber-50 to-yellow-50 hover:shadow-xl hover:scale-105 transition-all duration-300 border border-amber-100 cursor-pointer h-full"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-amber-600 to-yellow-600 rounded-xl flex items-center justify-center mb-4 group-hover:rotate-6 transition-transform duration-300">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  AI Image Generator
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  Spreadsheet-integrated AI image generator using OpenAI DALL-E API 
                  for automated visual content creation workflows.
                </p>
                <div className="text-amber-600 font-semibold text-sm">
                  → GitHub Repository
                </div>
              </motion.div>
            </a>
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
              Ready to Transform<br />
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Your Business?
              </span>
            </h2>
            <p className="text-2xl mb-12 opacity-90 max-w-3xl mx-auto leading-relaxed">
              Leverage cutting-edge AI technology to solve complex challenges<br />
              and accelerate your digital transformation
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Link
                href="/contact"
                className="group bg-gradient-to-r from-blue-500 to-purple-500 text-white px-12 py-6 rounded-2xl font-bold text-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 flex items-center gap-3"
              >
                Start AI Consultation
                <ArrowRight size={24} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/portfolio"
                className="group border-2 border-white text-white px-12 py-6 rounded-2xl font-bold text-xl hover:bg-white hover:text-gray-900 transition-all duration-300"
              >
                AIプロジェクトを見る
              </Link>
            </div>
            
            <div className="mt-16 text-center">
              <p className="text-lg opacity-75 mb-4">Core Technologies</p>
              <div className="flex justify-center items-center gap-8 opacity-60">
                <div className="text-2xl font-bold">TensorFlow</div>
                <div className="text-2xl font-bold">PyTorch</div>
                <div className="text-2xl font-bold">OpenAI API</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
