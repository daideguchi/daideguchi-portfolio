'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer,
  LineChart, Line, PieChart, Pie, Cell, AreaChart, Area
} from 'recharts';
import { 
  TrendingUp, TrendingDown, Users, ShoppingCart, DollarSign, 
  Eye, Download, RefreshCw, Calendar, Filter
} from 'lucide-react';

interface MetricCard {
  title: string;
  value: string;
  change: number;
  icon: React.ElementType;
  color: string;
}

export default function DataVisualizationDashboard() {
  const [selectedPeriod, setSelectedPeriod] = useState('7days');
  const [isLoading, setIsLoading] = useState(false);

  // サンプルデータ
  const salesData = [
    { name: '1月', sales: 4000, profit: 2400, orders: 240 },
    { name: '2月', sales: 3000, profit: 1398, orders: 221 },
    { name: '3月', sales: 2000, profit: 9800, orders: 229 },
    { name: '4月', sales: 2780, profit: 3908, orders: 200 },
    { name: '5月', sales: 1890, profit: 4800, orders: 218 },
    { name: '6月', sales: 2390, profit: 3800, orders: 250 },
    { name: '7月', sales: 3490, profit: 4300, orders: 210 },
  ];

  const trafficData = [
    { name: '月', visitors: 4000, pageViews: 2400, bounceRate: 45 },
    { name: '火', visitors: 3000, pageViews: 1398, bounceRate: 52 },
    { name: '水', visitors: 2000, pageViews: 9800, bounceRate: 38 },
    { name: '木', visitors: 2780, pageViews: 3908, bounceRate: 41 },
    { name: '金', visitors: 1890, pageViews: 4800, bounceRate: 35 },
    { name: '土', visitors: 2390, pageViews: 3800, bounceRate: 48 },
    { name: '日', visitors: 3490, pageViews: 4300, bounceRate: 42 },
  ];

  const categoryData = [
    { name: '電子機器', value: 400, color: '#0088FE' },
    { name: '衣類', value: 300, color: '#00C49F' },
    { name: '食品', value: 300, color: '#FFBB28' },
    { name: '書籍', value: 200, color: '#FF8042' },
    { name: 'その他', value: 100, color: '#8884D8' },
  ];

  const conversionData = [
    { name: '1週目', visitors: 1000, conversions: 45, rate: 4.5 },
    { name: '2週目', visitors: 1200, conversions: 58, rate: 4.8 },
    { name: '3週目', visitors: 900, conversions: 41, rate: 4.6 },
    { name: '4週目', visitors: 1100, conversions: 52, rate: 4.7 },
  ];

  const metrics: MetricCard[] = [
    {
      title: '総売上',
      value: '¥2,450,000',
      change: 12.5,
      icon: DollarSign,
      color: 'text-green-600',
    },
    {
      title: '新規顧客',
      value: '1,234',
      change: 8.2,
      icon: Users,
      color: 'text-blue-600',
    },
    {
      title: '注文数',
      value: '856',
      change: -2.4,
      icon: ShoppingCart,
      color: 'text-purple-600',
    },
    {
      title: 'ページビュー',
      value: '45,678',
      change: 15.3,
      icon: Eye,
      color: 'text-orange-600',
    },
  ];

  const refreshData = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  };

  const exportData = () => {
    // 実際の実装では、データをCSVやPDFで出力
    alert('データをエクスポートしました（デモ）');
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-4xl font-bold text-gray-900 mb-2">
              データ可視化ダッシュボード
            </h1>
            <p className="text-gray-600">
              ビジネスデータを直感的に理解できるインタラクティブダッシュボード
            </p>
          </div>
          <div className="flex items-center gap-4">
            <select
              value={selectedPeriod}
              onChange={(e) => setSelectedPeriod(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
            >
              <option value="7days">過去7日間</option>
              <option value="30days">過去30日間</option>
              <option value="90days">過去90日間</option>
              <option value="1year">過去1年間</option>
            </select>
            <button
              onClick={refreshData}
              disabled={isLoading}
              className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-200 disabled:opacity-50"
            >
              <RefreshCw size={16} className={isLoading ? 'animate-spin' : ''} />
              更新
            </button>
            <button
              onClick={exportData}
              className="flex items-center gap-2 bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors duration-200"
            >
              <Download size={16} />
              エクスポート
            </button>
          </div>
        </div>

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

        {/* Charts Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          {/* Sales Chart */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white p-6 rounded-lg shadow-sm border"
          >
            <h3 className="text-xl font-semibold text-gray-900 mb-4">売上推移</h3>
            <ResponsiveContainer width="100%" height={300}>
              <AreaChart data={salesData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip 
                  formatter={(value, name) => [
                    `¥${Number(value).toLocaleString()}`, 
                    name === 'sales' ? '売上' : name === 'profit' ? '利益' : '注文数'
                  ]}
                />
                <Legend />
                <Area 
                  type="monotone" 
                  dataKey="sales" 
                  stackId="1" 
                  stroke="#8884d8" 
                  fill="#8884d8" 
                  fillOpacity={0.6}
                  name="売上"
                />
                <Area 
                  type="monotone" 
                  dataKey="profit" 
                  stackId="1" 
                  stroke="#82ca9d" 
                  fill="#82ca9d" 
                  fillOpacity={0.6}
                  name="利益"
                />
              </AreaChart>
            </ResponsiveContainer>
          </motion.div>

          {/* Traffic Chart */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="bg-white p-6 rounded-lg shadow-sm border"
          >
            <h3 className="text-xl font-semibold text-gray-900 mb-4">ウェブサイトトラフィック</h3>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={trafficData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip 
                  formatter={(value, name) => [
                    Number(value).toLocaleString(), 
                    name === 'visitors' ? '訪問者数' : name === 'pageViews' ? 'ページビュー' : '直帰率(%)'
                  ]}
                />
                <Legend />
                <Line 
                  type="monotone" 
                  dataKey="visitors" 
                  stroke="#8884d8" 
                  strokeWidth={3}
                  name="訪問者数"
                />
                <Line 
                  type="monotone" 
                  dataKey="pageViews" 
                  stroke="#82ca9d" 
                  strokeWidth={3}
                  name="ページビュー"
                />
              </LineChart>
            </ResponsiveContainer>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
          {/* Category Distribution */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-white p-6 rounded-lg shadow-sm border"
          >
            <h3 className="text-xl font-semibold text-gray-900 mb-4">カテゴリー別売上</h3>
            <ResponsiveContainer width="100%" height={250}>
              <PieChart>
                <Pie
                  data={categoryData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({ name, percent }) => `${name} ${((percent || 0) * 100).toFixed(0)}%`}
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {categoryData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip formatter={(value) => [Number(value).toLocaleString(), '売上']} />
              </PieChart>
            </ResponsiveContainer>
          </motion.div>

          {/* Conversion Rate */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="lg:col-span-2 bg-white p-6 rounded-lg shadow-sm border"
          >
            <h3 className="text-xl font-semibold text-gray-900 mb-4">コンバージョン率</h3>
            <ResponsiveContainer width="100%" height={250}>
              <BarChart data={conversionData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis yAxisId="left" />
                <YAxis yAxisId="right" orientation="right" />
                <Tooltip 
                  formatter={(value, name) => [
                    name === 'rate' ? `${value}%` : Number(value).toLocaleString(),
                    name === 'visitors' ? '訪問者数' : name === 'conversions' ? 'コンバージョン数' : 'コンバージョン率'
                  ]}
                />
                <Legend />
                <Bar yAxisId="left" dataKey="visitors" fill="#8884d8" name="訪問者数" />
                <Bar yAxisId="left" dataKey="conversions" fill="#82ca9d" name="コンバージョン数" />
                <Line yAxisId="right" dataKey="rate" stroke="#ff7300" strokeWidth={3} name="コンバージョン率" />
              </BarChart>
            </ResponsiveContainer>
          </motion.div>
        </div>

        {/* Real-time Updates */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="bg-white p-6 rounded-lg shadow-sm border mb-8"
        >
          <h3 className="text-xl font-semibold text-gray-900 mb-4">リアルタイム活動</h3>
          <div className="space-y-4">
            {[
              { time: '2分前', event: '新規注文が完了しました', amount: '¥15,800', type: 'order' },
              { time: '5分前', event: '新規ユーザーが登録しました', amount: '', type: 'user' },
              { time: '8分前', event: '商品レビューが投稿されました', amount: '★★★★★', type: 'review' },
              { time: '12分前', event: '返金処理が完了しました', amount: '¥8,500', type: 'refund' },
            ].map((activity, index) => (
              <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <div className="flex items-center gap-3">
                  <div className={`w-3 h-3 rounded-full ${
                    activity.type === 'order' ? 'bg-green-500' :
                    activity.type === 'user' ? 'bg-blue-500' :
                    activity.type === 'review' ? 'bg-yellow-500' : 'bg-red-500'
                  }`}></div>
                  <div>
                    <p className="text-sm font-medium text-gray-900">{activity.event}</p>
                    <p className="text-xs text-gray-500">{activity.time}</p>
                  </div>
                </div>
                {activity.amount && (
                  <span className={`text-sm font-semibold ${
                    activity.type === 'order' ? 'text-green-600' :
                    activity.type === 'review' ? 'text-yellow-600' : 'text-red-600'
                  }`}>
                    {activity.amount}
                  </span>
                )}
              </div>
            ))}
          </div>
        </motion.div>

        {/* Demo Notice */}
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-blue-900 mb-2">
            📊 データ可視化ダッシュボード デモ
          </h3>
          <p className="text-blue-800 mb-4">
            これは実際に動作するデータ可視化ダッシュボードのデモです。以下の機能を体験できます：
          </p>
          <ul className="list-disc list-inside text-blue-800 space-y-1">
            <li>インタラクティブなチャートとグラフ</li>
            <li>リアルタイムデータ更新</li>
            <li>カスタマイズ可能なレイアウト</li>
            <li>データエクスポート機能</li>
            <li>レスポンシブデザイン</li>
          </ul>
        </div>
      </div>
    </div>
  );
}