import React from 'react';

const LogsPage = ({ isOpen, onClose, logs, onClearLogs }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex flex-col bg-dark-900">
      {/* Header */}
      <div className="flex items-center justify-between p-4 safe-area-top bg-dark-900 border-b border-primary-500/20">
        <button
          onClick={onClose}
          className="flex items-center justify-center w-8 h-8 rounded-lg bg-primary-500/20 hover:bg-primary-500/30 transition-colors"
        >
          <i className="fas fa-arrow-left text-white text-sm"></i>
        </button>
        <h2 className="text-white text-lg font-bold">Logs do Sistema</h2>
        <button
          onClick={onClearLogs}
          className="px-3 py-1 bg-vpn-red-error/20 text-vpn-red-error text-xs rounded-lg hover:bg-vpn-red-error/30 transition-colors"
        >
          Limpar
        </button>
      </div>

      {/* Content */}
      <div className="flex-1 overflow-y-auto custom-scrollbar safe-area-bottom">
        <div className="p-3 min-h-full">
          {logs.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center py-16">
              <div className="w-12 h-12 bg-primary-500/20 rounded-full flex items-center justify-center mb-3">
                <i className="fas fa-file-alt text-primary-500 text-lg"></i>
              </div>
              <p className="text-vpn-gray-text text-sm">Sem logs disponível</p>
            </div>
          ) : (
            <div className="space-y-2 pb-4">
              {logs.map((log, index) => {
                const [timestamp, message] = Object.entries(log)[0];
                return (
                  <div
                    key={index}
                    className="bg-vpn-bg-secondary/30 rounded-lg p-2.5 border border-primary-500/10 transform transition-transform active:scale-[0.98]"
                  >
                    <div className="flex flex-col gap-1">
                      <div className="text-accent-500 text-xs font-mono opacity-80">
                        {timestamp}
                      </div>
                      <div 
                        className="text-white text-sm leading-relaxed break-words"
                        dangerouslySetInnerHTML={{ __html: message }}
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default LogsPage;
