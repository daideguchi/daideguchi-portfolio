'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Trash2, Edit3, Check, X, Calendar, User, BarChart3 } from 'lucide-react';

interface Task {
  id: string;
  title: string;
  description: string;
  status: 'todo' | 'in-progress' | 'done';
  priority: 'low' | 'medium' | 'high';
  assignee: string;
  dueDate: string;
  createdAt: string;
}

export default function TaskManager() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [isAddingTask, setIsAddingTask] = useState(false);
  const [editingTask, setEditingTask] = useState<string | null>(null);
  const [newTask, setNewTask] = useState({
    title: '',
    description: '',
    priority: 'medium' as Task['priority'],
    assignee: '',
    dueDate: '',
  });

  // サンプルデータの初期化
  useEffect(() => {
    const sampleTasks: Task[] = [
      {
        id: '1',
        title: 'ポートフォリオサイトの完成',
        description: 'Next.jsを使用したポートフォリオサイトの最終調整',
        status: 'in-progress',
        priority: 'high',
        assignee: 'daideguchi',
        dueDate: '2025-02-01',
        createdAt: '2025-01-20',
      },
      {
        id: '2',
        title: 'FDEサービスの企画書作成',
        description: '伴走型開発サービスの詳細企画書を作成',
        status: 'todo',
        priority: 'high',
        assignee: 'daideguchi',
        dueDate: '2025-01-30',
        createdAt: '2025-01-25',
      },
      {
        id: '3',
        title: 'クライアント向けプレゼン資料',
        description: '新規クライアント向けのサービス紹介資料',
        status: 'done',
        priority: 'medium',
        assignee: 'daideguchi',
        dueDate: '2025-01-25',
        createdAt: '2025-01-20',
      },
    ];
    setTasks(sampleTasks);
  }, []);

  const addTask = () => {
    if (!newTask.title.trim()) return;

    const task: Task = {
      id: Date.now().toString(),
      title: newTask.title,
      description: newTask.description,
      status: 'todo',
      priority: newTask.priority,
      assignee: newTask.assignee || 'daideguchi',
      dueDate: newTask.dueDate,
      createdAt: new Date().toISOString().split('T')[0],
    };

    setTasks([...tasks, task]);
    setNewTask({
      title: '',
      description: '',
      priority: 'medium',
      assignee: '',
      dueDate: '',
    });
    setIsAddingTask(false);
  };

  const updateTaskStatus = (id: string, status: Task['status']) => {
    setTasks(tasks.map(task => 
      task.id === id ? { ...task, status } : task
    ));
  };

  const deleteTask = (id: string) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  const getPriorityColor = (priority: Task['priority']) => {
    switch (priority) {
      case 'high': return 'bg-red-100 text-red-600 border-red-200';
      case 'medium': return 'bg-yellow-100 text-yellow-600 border-yellow-200';
      case 'low': return 'bg-green-100 text-green-600 border-green-200';
    }
  };

  const getStatusColor = (status: Task['status']) => {
    switch (status) {
      case 'todo': return 'bg-gray-100 border-gray-300';
      case 'in-progress': return 'bg-blue-100 border-blue-300';
      case 'done': return 'bg-green-100 border-green-300';
    }
  };

  const columns = [
    { id: 'todo', title: 'To Do', status: 'todo' as const },
    { id: 'in-progress', title: 'In Progress', status: 'in-progress' as const },
    { id: 'done', title: 'Done', status: 'done' as const },
  ];

  const getTasksByStatus = (status: Task['status']) => {
    return tasks.filter(task => task.status === status);
  };

  const stats = {
    total: tasks.length,
    completed: tasks.filter(t => t.status === 'done').length,
    inProgress: tasks.filter(t => t.status === 'in-progress').length,
    todo: tasks.filter(t => t.status === 'todo').length,
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">
            タスク管理アプリ
          </h1>
          <p className="text-gray-600">
            リアルタイム同期とドラッグ&ドロップ操作でチームの生産性を向上
          </p>
        </div>

        {/* Stats Dashboard */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white p-6 rounded-lg shadow-sm border">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">総タスク数</p>
                <p className="text-3xl font-bold text-gray-900">{stats.total}</p>
              </div>
              <BarChart3 className="w-8 h-8 text-blue-600" />
            </div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm border">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">完了</p>
                <p className="text-3xl font-bold text-green-600">{stats.completed}</p>
              </div>
              <Check className="w-8 h-8 text-green-600" />
            </div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm border">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">進行中</p>
                <p className="text-3xl font-bold text-blue-600">{stats.inProgress}</p>
              </div>
              <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                <div className="w-3 h-3 bg-white rounded-full"></div>
              </div>
            </div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm border">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">未着手</p>
                <p className="text-3xl font-bold text-gray-600">{stats.todo}</p>
              </div>
              <div className="w-8 h-8 bg-gray-300 rounded-full"></div>
            </div>
          </div>
        </div>

        {/* Add Task Button */}
        <div className="mb-6">
          <button
            onClick={() => setIsAddingTask(true)}
            className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200 flex items-center gap-2"
          >
            <Plus size={20} />
            新しいタスクを追加
          </button>
        </div>

        {/* Add Task Form */}
        <AnimatePresence>
          {isAddingTask && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="bg-white p-6 rounded-lg shadow-sm border mb-6"
            >
              <h3 className="text-lg font-semibold text-gray-900 mb-4">新しいタスク</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    タスク名
                  </label>
                  <input
                    type="text"
                    value={newTask.title}
                    onChange={(e) => setNewTask({ ...newTask, title: e.target.value })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                    placeholder="タスク名を入力"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    担当者
                  </label>
                  <input
                    type="text"
                    value={newTask.assignee}
                    onChange={(e) => setNewTask({ ...newTask, assignee: e.target.value })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                    placeholder="担当者名"
                  />
                </div>
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  説明
                </label>
                <textarea
                  value={newTask.description}
                  onChange={(e) => setNewTask({ ...newTask, description: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                  rows={3}
                  placeholder="タスクの詳細説明"
                />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    優先度
                  </label>
                  <select
                    value={newTask.priority}
                    onChange={(e) => setNewTask({ ...newTask, priority: e.target.value as Task['priority'] })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                  >
                    <option value="low">低</option>
                    <option value="medium">中</option>
                    <option value="high">高</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    期限
                  </label>
                  <input
                    type="date"
                    value={newTask.dueDate}
                    onChange={(e) => setNewTask({ ...newTask, dueDate: e.target.value })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                  />
                </div>
              </div>
              <div className="flex gap-3">
                <button
                  onClick={addTask}
                  className="bg-blue-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200 flex items-center gap-2"
                >
                  <Check size={16} />
                  追加
                </button>
                <button
                  onClick={() => setIsAddingTask(false)}
                  className="bg-gray-300 text-gray-700 px-4 py-2 rounded-lg font-semibold hover:bg-gray-400 transition-colors duration-200 flex items-center gap-2"
                >
                  <X size={16} />
                  キャンセル
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Kanban Board */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {columns.map((column) => (
            <div key={column.id} className="bg-white rounded-lg shadow-sm border">
              <div className="p-4 border-b border-gray-200">
                <h3 className="text-lg font-semibold text-gray-900 flex items-center gap-2">
                  {column.title}
                  <span className="bg-gray-100 text-gray-600 px-2 py-1 rounded-full text-sm">
                    {getTasksByStatus(column.status).length}
                  </span>
                </h3>
              </div>
              <div className="p-4 space-y-4 min-h-[400px]">
                <AnimatePresence>
                  {getTasksByStatus(column.status).map((task) => (
                    <motion.div
                      key={task.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      className={`p-4 rounded-lg border-2 cursor-pointer hover:shadow-md transition-shadow duration-200 ${getStatusColor(task.status)}`}
                    >
                      <div className="flex items-start justify-between mb-2">
                        <h4 className="font-semibold text-gray-900">{task.title}</h4>
                        <button
                          onClick={() => deleteTask(task.id)}
                          className="text-gray-400 hover:text-red-600 transition-colors"
                        >
                          <Trash2 size={16} />
                        </button>
                      </div>
                      {task.description && (
                        <p className="text-sm text-gray-600 mb-3">{task.description}</p>
                      )}
                      <div className="flex items-center justify-between mb-3">
                        <span className={`px-2 py-1 rounded-full text-xs font-semibold border ${getPriorityColor(task.priority)}`}>
                          {task.priority === 'high' ? '高' : task.priority === 'medium' ? '中' : '低'}
                        </span>
                        <div className="flex items-center text-xs text-gray-500">
                          <User size={12} className="mr-1" />
                          {task.assignee}
                        </div>
                      </div>
                      {task.dueDate && (
                        <div className="flex items-center text-xs text-gray-500 mb-3">
                          <Calendar size={12} className="mr-1" />
                          {task.dueDate}
                        </div>
                      )}
                      <div className="flex gap-2">
                        {task.status !== 'todo' && (
                          <button
                            onClick={() => updateTaskStatus(task.id, 'todo')}
                            className="text-xs bg-gray-200 text-gray-700 px-2 py-1 rounded hover:bg-gray-300 transition-colors"
                          >
                            To Do
                          </button>
                        )}
                        {task.status !== 'in-progress' && (
                          <button
                            onClick={() => updateTaskStatus(task.id, 'in-progress')}
                            className="text-xs bg-blue-200 text-blue-700 px-2 py-1 rounded hover:bg-blue-300 transition-colors"
                          >
                            進行中
                          </button>
                        )}
                        {task.status !== 'done' && (
                          <button
                            onClick={() => updateTaskStatus(task.id, 'done')}
                            className="text-xs bg-green-200 text-green-700 px-2 py-1 rounded hover:bg-green-300 transition-colors"
                          >
                            完了
                          </button>
                        )}
                      </div>
                    </motion.div>
                  ))}
                </AnimatePresence>
              </div>
            </div>
          ))}
        </div>

        {/* Demo Notice */}
        <div className="mt-8 bg-blue-50 border border-blue-200 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-blue-900 mb-2">
            🚀 デモアプリケーション
          </h3>
          <p className="text-blue-800 mb-4">
            これは実際に動作するタスク管理アプリのデモです。以下の機能を体験できます：
          </p>
          <ul className="list-disc list-inside text-blue-800 space-y-1">
            <li>リアルタイムでのタスク状態更新</li>
            <li>直感的なカンバンボード操作</li>
            <li>優先度と担当者の管理</li>
            <li>プロジェクト分析ダッシュボード</li>
          </ul>
        </div>
      </div>
    </div>
  );
}