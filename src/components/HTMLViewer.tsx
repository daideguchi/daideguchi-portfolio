'use client';

import { useState, useEffect } from 'react';
import { X, ChevronLeft, ChevronRight, Home } from 'lucide-react';

interface HTMLViewerProps {
  resource: {
    id: string;
    title: string;
    description: string;
    totalPages?: number;
    basePath?: string;
  };
  onClose: () => void;
}

export default function HTMLViewer({ resource, onClose }: HTMLViewerProps) {
  const [currentPage, setCurrentPage] = useState(1);
  const [htmlContent, setHtmlContent] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  const totalPages = resource.totalPages || 20;
  const basePath = resource.basePath || '/AI入門：事務職のためのAI基礎知識';

  useEffect(() => {
    loadPage(currentPage);
  }, [currentPage]);

  const loadPage = async (pageNumber: number) => {
    setLoading(true);
    setError('');
    
    try {
      const response = await fetch(`${basePath}/page_${pageNumber}.html`);
      if (!response.ok) {
        throw new Error(`ページ ${pageNumber} を読み込めませんでした`);
      }
      const content = await response.text();
      setHtmlContent(content);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'エラーが発生しました');
    } finally {
      setLoading(false);
    }
  };

  const nextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const goToPage = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-2xl w-full h-full max-w-7xl max-h-[95vh] flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b bg-gray-50 rounded-t-lg">
          <div className="flex items-center space-x-4">
            <h2 className="text-xl font-semibold text-gray-800">{resource.title}</h2>
            <span className="text-sm text-gray-500">
              {currentPage} / {totalPages}
            </span>
          </div>
          
          {/* Navigation Controls */}
          <div className="flex items-center space-x-2">
            <button
              onClick={prevPage}
              disabled={currentPage === 1}
              className="p-2 rounded-md bg-blue-500 text-white disabled:bg-gray-300 disabled:cursor-not-allowed hover:bg-blue-600 transition-colors"
            >
              <ChevronLeft size={20} />
            </button>
            
            <select
              value={currentPage}
              onChange={(e) => goToPage(parseInt(e.target.value))}
              className="px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                <option key={page} value={page}>
                  ページ {page}
                </option>
              ))}
            </select>
            
            <button
              onClick={nextPage}
              disabled={currentPage === totalPages}
              className="p-2 rounded-md bg-blue-500 text-white disabled:bg-gray-300 disabled:cursor-not-allowed hover:bg-blue-600 transition-colors"
            >
              <ChevronRight size={20} />
            </button>
            
            <button
              onClick={onClose}
              className="p-2 rounded-md bg-gray-500 text-white hover:bg-gray-600 transition-colors ml-4"
            >
              <X size={20} />
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-hidden">
          {loading ? (
            <div className="flex items-center justify-center h-full">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500"></div>
            </div>
          ) : error ? (
            <div className="flex items-center justify-center h-full">
              <div className="text-center">
                <p className="text-red-500 mb-4">{error}</p>
                <button
                  onClick={() => loadPage(currentPage)}
                  className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors"
                >
                  再試行
                </button>
              </div>
            </div>
          ) : (
            <div className="h-full overflow-auto">
              <iframe
                srcDoc={htmlContent}
                className="w-full h-full border-0"
                title={`${resource.title} - ページ ${currentPage}`}
                sandbox="allow-scripts allow-same-origin"
              />
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="p-4 border-t bg-gray-50 rounded-b-lg">
          <div className="flex items-center justify-between">
            <p className="text-sm text-gray-600">{resource.description}</p>
            <div className="flex items-center space-x-2">
              <button
                onClick={() => goToPage(1)}
                className="px-3 py-1 text-sm bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300 transition-colors flex items-center space-x-1"
              >
                <Home size={16} />
                <span>最初のページ</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}