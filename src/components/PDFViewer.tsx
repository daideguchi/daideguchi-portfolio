'use client';

import { useState } from 'react';
import { X, Download, ZoomIn, ZoomOut } from 'lucide-react';

interface PDFViewerProps {
  fileUrl: string;
  title: string;
  onClose: () => void;
}

export default function PDFViewer({ fileUrl, title, onClose }: PDFViewerProps) {
  const [zoom, setZoom] = useState(100);

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = fileUrl;
    link.download = title;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg w-full max-w-6xl h-full max-h-[90vh] flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b">
          <h3 className="text-lg font-semibold text-gray-900 truncate">{title}</h3>
          <div className="flex items-center gap-2">
            <button
              onClick={() => setZoom(Math.max(50, zoom - 25))}
              className="p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-colors"
              disabled={zoom <= 50}
            >
              <ZoomOut size={20} />
            </button>
            <span className="text-sm text-gray-600 min-w-[60px] text-center">
              {zoom}%
            </span>
            <button
              onClick={() => setZoom(Math.min(200, zoom + 25))}
              className="p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-colors"
              disabled={zoom >= 200}
            >
              <ZoomIn size={20} />
            </button>
            <button
              onClick={handleDownload}
              className="p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-colors"
            >
              <Download size={20} />
            </button>
            <button
              onClick={onClose}
              className="p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-colors"
            >
              <X size={20} />
            </button>
          </div>
        </div>

        {/* PDF Content */}
        <div className="flex-1 overflow-auto bg-gray-100">
          <div className="flex justify-center p-4">
            <iframe
              src={`${fileUrl}#zoom=${zoom}`}
              className="w-full h-full min-h-[600px] border-0 rounded-lg shadow-lg bg-white"
              title={title}
            />
          </div>
        </div>
      </div>
    </div>
  );
}