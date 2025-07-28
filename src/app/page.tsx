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
                <div className="text-4xl font-bold text-blue-600 mb-2">3</div>
                <div className="text-gray-600">Live AI Demos</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-purple-600 mb-2">100%</div>
                <div className="text-gray-600">Functional Code</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-pink-600 mb-2">Real-time</div>
                <div className="text-gray-600">Experience</div>
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

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <Link href="/projects/saas-platform">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
                className="group text-center p-10 rounded-3xl bg-gradient-to-br from-blue-50 to-indigo-50 hover:shadow-2xl hover:scale-105 transition-all duration-300 border border-blue-100 cursor-pointer"
              >
                <div className="w-20 h-20 bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:rotate-6 transition-transform duration-300">
                  <Code className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Enterprise SaaS Platform
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Multi-tenant enterprise platform with AI-driven analytics, 
                  automated user management, and intelligent billing systems. 
                  Features machine learning-powered insights and predictive analytics.
                </p>
                <div className="mt-4 text-blue-600 font-semibold">
                  → Experience Live Demo
                </div>
              </motion.div>
            </Link>

            <Link href="/projects/task-manager">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="group text-center p-10 rounded-3xl bg-gradient-to-br from-purple-50 to-pink-50 hover:shadow-2xl hover:scale-105 transition-all duration-300 border border-purple-100 cursor-pointer"
              >
                <div className="w-20 h-20 bg-gradient-to-br from-purple-600 to-pink-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:rotate-6 transition-transform duration-300">
                  <Zap className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  AI Task Management System
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Intelligent task management with AI-powered priority optimization, 
                  automated workflow suggestions, and predictive project completion analysis. 
                  Real-time collaboration with smart resource allocation.
                </p>
                <div className="mt-4 text-purple-600 font-semibold">
                  → Experience Live Demo
                </div>
              </motion.div>
            </Link>

            <Link href="/projects/ecommerce">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="group text-center p-10 rounded-3xl bg-gradient-to-br from-green-50 to-teal-50 hover:shadow-2xl hover:scale-105 transition-all duration-300 border border-green-100 cursor-pointer"
              >
                <div className="w-20 h-20 bg-gradient-to-br from-green-600 to-teal-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:rotate-6 transition-transform duration-300">
                  <Users className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  AI-Enhanced E-commerce Platform
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Intelligent e-commerce solution with AI-powered product recommendations, 
                  dynamic pricing optimization, and automated inventory management. 
                  Features natural language search and personalized shopping experiences.
                </p>
                <div className="mt-4 text-green-600 font-semibold">
                  → Experience Live Demo
                </div>
              </motion.div>
            </Link>
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
                View AI Projects
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
