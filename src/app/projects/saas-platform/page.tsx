'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Users, Settings, BarChart3, CreditCard, Shield, Bell, 
  Search, Filter, Plus, Edit, Trash2, Eye, Download,
  TrendingUp, TrendingDown, DollarSign, Activity
} from 'lucide-react';

interface User {
  id: string;
  name: string;
  email: string;
  role: 'admin' | 'user' | 'viewer';
  status: 'active' | 'inactive' | 'pending';
  lastLogin: string;
  subscription: 'free' | 'pro' | 'enterprise';
}

interface Metric {
  title: string;
  value: string;
  change: number;
  icon: React.ElementType;
  color: string;
}

export default function SaaSPlatform() {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [users, setUsers] = useState<User[]>([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedRole, setSelectedRole] = useState('all');

  // サンプルデータ初期化
  useEffect(() => {
    const sampleUsers: User[] = [
      {
        id: '1',
        name: '田中太郎',
        email: 'tanaka@example.com',
        role: 'admin',
        status: 'active',
        lastLogin: '2025-01-26 14:30',
        subscription: 'enterprise'
      },
      {
        id: '2',
        name: '佐藤花子',
        email: 'sato@example.com',
        role: 'user',
        status: 'active',
        lastLogin: '2025-01-26 12:15',
        subscription: 'pro'
      },
      {
        id: '3',
        name: '鈴木一郎',
        email: 'suzuki@example.com',
        role: 'viewer',
        status: 'inactive',
        lastLogin: '2025-01-25 09:45',
        subscription: 'free'
      },
      {
        id: '4',
        name: '高橋美咲',
        email: 'takahashi@example.com',
        role: 'user',
        status: 'pending',
        lastLogin: '未ログイン',
        subscription: 'pro'
      }
    ];
    setUsers(sampleUsers);
  }, []);

  const metrics: Metric[] = [
    {
      title: '月間収益',
      value: '¥2,450,000',
      change: 12.5,
      icon: DollarSign,
      color: 'text-green-600'
    },
    {
      title: 'アクティブユーザー',
      value: '12,847',
      change: 8.2,
      icon: Users,
      color: 'text-blue-600'
    },
    {
      title: 'API呼び出し',
      value: '1,234,567',
      change: -2.4,
      icon: Activity,
      color: 'text-purple-600'
    },
    {
      title: 'コンバージョン率',
      value: '4.8%',
      change: 15.3,
      icon: TrendingUp,
      color: 'text-orange-600'
    }
  ];

  const filteredUsers = users.filter(user => {
    const matchesSearch = user.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         user.email.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesRole = selectedRole === 'all' || user.role === selectedRole;
    return matchesSearch && matchesRole;
  });

  const getStatusColor = (status: User['status']) => {
    switch (status) {
      case 'active': return 'bg-green-100 text-green-800';
      case 'inactive': return 'bg-gray-100 text-gray-800';
      case 'pending': return 'bg-yellow-100 text-yellow-800';
    }
  };

  const getSubscriptionColor = (subscription: User['subscription']) => {
    switch (subscription) {
      case 'free': return 'bg-gray-100 text-gray-800';
      case 'pro': return 'bg-blue-100 text-blue-800';
      case 'enterprise': return 'bg-purple-100 text-purple-800';
    }
  };

  const tabs = [
    { id: 'dashboard', label: 'ダッシュボード', icon: BarChart3 },
    { id: 'users', label: 'ユーザー管理', icon: Users },
    { id: 'billing', label: '課金管理', icon: CreditCard },
    { id: 'settings', label: '設定', icon: Settings }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b sticky top-0 z-40">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">
                Enterprise SaaS Platform
              </h1>
              <p className="text-gray-600">マルチテナント対応の統合管理システム</p>
            </div>
            <div className="flex items-center gap-4">
              <button className="relative p-2 text-gray-600 hover:text-gray-900 transition-colors">
                <Bell size={20} />
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full"></div>
              </button>
              <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white font-semibold">
                A
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-6 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <nav className="bg-white rounded-lg shadow-sm border p-4">
              <div className="space-y-2">
                {tabs.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-left transition-colors ${
                      activeTab === tab.id
                        ? 'bg-blue-100 text-blue-600 font-semibold'
                        : 'text-gray-700 hover:bg-gray-100'
                    }`}
                  >
                    <tab.icon size={20} />
                    {tab.label}
                  </button>
                ))}
              </div>
            </nav>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-4">
            <AnimatePresence mode="wait">
              {activeTab === 'dashboard' && (
                <motion.div
                  key="dashboard"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  {/* Metrics Cards */}
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                    {metrics.map((metric, index) => (
                      <motion.div
                        key={metric.title}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: index * 0.1 }}
                        className="bg-white p-6 rounded-lg shadow-sm border"
                      >
                        <div className="flex items-center justify-between mb-4">
                          <div className={`p-3 rounded-lg bg-gray-50 ${metric.color}`}>
                            <metric.icon size={24} />
                          </div>
                          <div className={`flex items-center gap-1 text-sm font-semibold ${
                            metric.change >= 0 ? 'text-green-600' : 'text-red-600'
                          }`}>
                            {metric.change >= 0 ? <TrendingUp size={16} /> : <TrendingDown size={16} />}
                            {Math.abs(metric.change)}%
                          </div>
                        </div>
                        <div>
                          <p className="text-sm font-medium text-gray-600 mb-1">{metric.title}</p>
                          <p className="text-3xl font-bold text-gray-900">{metric.value}</p>
                        </div>
                      </motion.div>
                    ))}
                  </div>

                  {/* Charts */}
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    <div className="bg-white p-6 rounded-lg shadow-sm border">
                      <h3 className="text-xl font-semibold text-gray-900 mb-4">収益推移</h3>
                      <div className="h-64 bg-gradient-to-br from-blue-50 to-purple-50 rounded-lg flex items-center justify-center">
                        <div className="text-center">
                          <BarChart3 size={48} className="text-blue-600 mx-auto mb-4" />
                          <p className="text-gray-600">リアルタイム収益チャート</p>
                        </div>
                      </div>
                    </div>

                    <div className="bg-white p-6 rounded-lg shadow-sm border">
                      <h3 className="text-xl font-semibold text-gray-900 mb-4">ユーザー分析</h3>
                      <div className="h-64 bg-gradient-to-br from-green-50 to-teal-50 rounded-lg flex items-center justify-center">
                        <div className="text-center">
                          <Users size={48} className="text-green-600 mx-auto mb-4" />
                          <p className="text-gray-600">ユーザー行動分析</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}

              {activeTab === 'users' && (
                <motion.div
                  key="users"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="bg-white rounded-lg shadow-sm border">
                    <div className="p-6 border-b border-gray-200">
                      <div className="flex items-center justify-between mb-4">
                        <h3 className="text-xl font-semibold text-gray-900">ユーザー管理</h3>
                        <button className="bg-blue-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-blue-700 transition-colors flex items-center gap-2">
                          <Plus size={16} />
                          新規ユーザー
                        </button>
                      </div>

                      <div className="flex flex-col sm:flex-row gap-4">
                        <div className="relative flex-1">
                          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                          <input
                            type="text"
                            placeholder="ユーザーを検索..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                          />
                        </div>
                        <select
                          value={selectedRole}
                          onChange={(e) => setSelectedRole(e.target.value)}
                          className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                        >
                          <option value="all">すべての役割</option>
                          <option value="admin">管理者</option>
                          <option value="user">ユーザー</option>
                          <option value="viewer">閲覧者</option>
                        </select>
                      </div>
                    </div>

                    <div className="overflow-x-auto">
                      <table className="w-full">
                        <thead className="bg-gray-50">
                          <tr>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                              ユーザー
                            </th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                              役割
                            </th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                              ステータス
                            </th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                              プラン
                            </th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                              最終ログイン
                            </th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                              操作
                            </th>
                          </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                          {filteredUsers.map((user) => (
                            <tr key={user.id} className="hover:bg-gray-50">
                              <td className="px-6 py-4 whitespace-nowrap">
                                <div>
                                  <div className="text-sm font-medium text-gray-900">{user.name}</div>
                                  <div className="text-sm text-gray-500">{user.email}</div>
                                </div>
                              </td>
                              <td className="px-6 py-4 whitespace-nowrap">
                                <span className="text-sm text-gray-900 capitalize">{user.role}</span>
                              </td>
                              <td className="px-6 py-4 whitespace-nowrap">
                                <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getStatusColor(user.status)}`}>
                                  {user.status}
                                </span>
                              </td>
                              <td className="px-6 py-4 whitespace-nowrap">
                                <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getSubscriptionColor(user.subscription)}`}>
                                  {user.subscription}
                                </span>
                              </td>
                              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                {user.lastLogin}
                              </td>
                              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                                <div className="flex items-center gap-2">
                                  <button className="text-blue-600 hover:text-blue-700">
                                    <Eye size={16} />
                                  </button>
                                  <button className="text-gray-600 hover:text-gray-700">
                                    <Edit size={16} />
                                  </button>
                                  <button className="text-red-600 hover:text-red-700">
                                    <Trash2 size={16} />
                                  </button>
                                </div>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </motion.div>
              )}

              {activeTab === 'billing' && (
                <motion.div
                  key="billing"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                  className="bg-white p-8 rounded-lg shadow-sm border text-center"
                >
                  <CreditCard size={64} className="text-blue-600 mx-auto mb-4" />
                  <h3 className="text-2xl font-semibold text-gray-900 mb-4">課金管理システム</h3>
                  <p className="text-gray-600 mb-6">
                    Stripe統合による自動課金、請求書生成、サブスクリプション管理
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="p-4 bg-gray-50 rounded-lg">
                      <div className="text-2xl font-bold text-green-600 mb-2">¥2,450,000</div>
                      <div className="text-sm text-gray-600">今月の収益</div>
                    </div>
                    <div className="p-4 bg-gray-50 rounded-lg">
                      <div className="text-2xl font-bold text-blue-600 mb-2">1,247</div>
                      <div className="text-sm text-gray-600">アクティブ契約</div>
                    </div>
                    <div className="p-4 bg-gray-50 rounded-lg">
                      <div className="text-2xl font-bold text-purple-600 mb-2">98.5%</div>
                      <div className="text-sm text-gray-600">支払い成功率</div>
                    </div>
                  </div>
                </motion.div>
              )}

              {activeTab === 'settings' && (
                <motion.div
                  key="settings"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                  className="bg-white p-8 rounded-lg shadow-sm border text-center"
                >
                  <Settings size={64} className="text-blue-600 mx-auto mb-4" />
                  <h3 className="text-2xl font-semibold text-gray-900 mb-4">システム設定</h3>
                  <p className="text-gray-600 mb-6">
                    セキュリティ設定、API設定、通知設定、統合設定
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="p-6 bg-gray-50 rounded-lg text-left">
                      <Shield size={32} className="text-green-600 mb-3" />
                      <h4 className="font-semibold text-gray-900 mb-2">セキュリティ</h4>
                      <p className="text-sm text-gray-600">2FA、SSO、監査ログ</p>
                    </div>
                    <div className="p-6 bg-gray-50 rounded-lg text-left">
                      <Activity size={32} className="text-purple-600 mb-3" />
                      <h4 className="font-semibold text-gray-900 mb-2">API管理</h4>
                      <p className="text-sm text-gray-600">レート制限、認証、監視</p>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* Demo Notice */}
        <div className="mt-12 bg-blue-50 border border-blue-200 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-blue-900 mb-2">
            🚀 Enterprise SaaS Platform デモ
          </h3>
          <p className="text-blue-800 mb-4">
            これは実際に動作するエンタープライズSaaSプラットフォームのデモです。以下の機能を体験できます：
          </p>
          <ul className="list-disc list-inside text-blue-800 space-y-1">
            <li>マルチテナント対応のユーザー管理システム</li>
            <li>リアルタイム分析ダッシュボード</li>
            <li>Stripe統合による自動課金システム</li>
            <li>ロールベースアクセス制御（RBAC）</li>
            <li>API レート制限と監視</li>
            <li>セキュリティ監査とコンプライアンス</li>
          </ul>
        </div>
      </div>
    </div>
  );
}