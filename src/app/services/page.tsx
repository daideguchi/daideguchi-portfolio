'use client';

import { motion } from 'framer-motion';
import { Brain, Bot, Zap, Shield, Database, Cpu } from 'lucide-react';
import Link from 'next/link';

export default function Services() {
  const services = [
    {
      icon: Brain,
      title: 'AI & Machine Learning Development',
      description: 'Custom AI solutions using TensorFlow, PyTorch, and advanced ML algorithms',
      features: [
        'Custom machine learning model development',
        'Computer vision and NLP solutions',
        'Predictive analytics and recommendation systems',
        'MLOps and model deployment',
      ],
      price: '¥800,000〜',
      featured: true,
    },
    {
      icon: Bot,
      title: 'Large Language Model Integration',
      description: 'Advanced LLM applications using GPT, Claude, and custom language models',
      features: [
        'Intelligent chatbot development',
        'Document generation and summarization',
        'RAG (Retrieval-Augmented Generation) systems',
        'Advanced prompt engineering',
      ],
      price: '¥600,000〜',
    },
    {
      icon: Zap,
      title: 'AI Process Automation',
      description: 'Intelligent automation solutions for complex business workflows',
      features: [
        'RPA enhanced with AI capabilities',
        'OCR and document processing automation',
        'Automated data analysis and insights',
        'Workflow optimization and intelligence',
      ],
      price: '¥500,000〜',
    },
    {
      icon: Database,
      title: 'AI Data Analytics',
      description: 'Advanced data analysis and visualization powered by machine learning',
      features: [
        'Big data processing and analysis',
        'AI-powered predictive modeling',
        'Real-time analytics dashboards',
        'Automated business insight extraction',
      ],
      price: '¥700,000〜',
    },
    {
      icon: Cpu,
      title: 'AI Strategy Consulting',
      description: 'Comprehensive AI adoption strategy and proof-of-concept development',
      features: [
        'AI adoption strategy development',
        'Proof-of-concept implementation',
        'AI team training and development',
        'ROI analysis and impact measurement',
      ],
      price: '¥150,000〜/月',
    },
    {
      icon: Shield,
      title: 'AI Ethics & Security',
      description: 'Responsible AI development with comprehensive security measures',
      features: [
        'AI ethics framework development',
        'Bias detection and mitigation',
        'Privacy protection implementation',
        'AI audit and risk assessment',
      ],
      price: '¥400,000〜',
    },
  ];

  const process = [
    {
      step: '01',
      title: 'AI Requirements Analysis',
      description: 'Deep dive into your business challenges and AI opportunity assessment',
    },
    {
      step: '02',
      title: 'Solution Architecture',
      description: 'Design optimal AI architecture with detailed technical specifications',
    },
    {
      step: '03',
      title: 'Model Development',
      description: 'Agile development of custom AI models with continuous validation',
    },
    {
      step: '04',
      title: 'Testing & Deployment',
      description: 'Comprehensive testing, performance optimization, and production deployment',
    },
    {
      step: '05',
      title: 'AI Operations',
      description: 'Ongoing model monitoring, maintenance, and performance optimization',
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
              AI Development Services
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Transform your business with cutting-edge artificial intelligence and machine learning solutions
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
              Specialized AI Services
            </h2>
            <p className="text-xl text-gray-600">
              From machine learning to large language models, accelerate your business with AI
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
              AI Development Process
            </h2>
            <p className="text-xl text-gray-600">
              Structured methodology ensuring successful AI implementation and deployment
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
              Ready to Start Your AI Project?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Schedule a consultation to discuss your AI requirements and get a detailed proposal.
            </p>
            <Link
              href="/contact"
              className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200 inline-block"
            >
              Schedule AI Consultation
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}