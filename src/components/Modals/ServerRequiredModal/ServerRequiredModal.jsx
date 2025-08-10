import React from 'react';

const ServerRequiredModal = ({ isOpen, onClose, onOpenConfig }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 p-2 xs:p-3 sm:p-4">
      <div className="bg-gradient-to-br from-slate-900/95 to-slate-800/95 backdrop-blur-md border border-white/10 rounded-xl xs:rounded-2xl shadow-2xl w-full max-w-[280px] xs:max-w-[320px] sm:max-w-md mx-auto">
        {/* Header */}
        <div className="p-3 xs:p-4 sm:p-6 border-b border-white/10">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2 xs:space-x-3 min-w-0 flex-1">
              <div className="w-8 h-8 xs:w-10 xs:h-10 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                <i className="fas fa-server text-white text-sm xs:text-lg"></i>
              </div>
              <h2 className="text-sm xs:text-lg sm:text-xl font-bold text-white truncate">Servidor Requerido</h2>
            </div>
            <button 
              onClick={onClose}
              className="text-gray-400 hover:text-white transition-colors duration-200 w-7 h-7 xs:w-8 xs:h-8 flex items-center justify-center rounded-full hover:bg-white/10 flex-shrink-0 ml-2"
            >
              <i className="fas fa-times text-sm xs:text-base"></i>
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="p-3 xs:p-4 sm:p-6">
          <div className="text-center space-y-3 xs:space-y-4">
            {/* Server Icon */}
            <div className="w-12 h-12 xs:w-14 xs:h-14 sm:w-16 sm:h-16 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-3 xs:mb-4">
              <i className="fas fa-server text-xl xs:text-2xl sm:text-3xl text-blue-400"></i>
            </div>

            {/* Message */}
            <div className="space-y-2">
              <h3 className="text-base xs:text-lg font-semibold text-white">
                Seleione um Servidor
              </h3>
              <p className="text-gray-300 text-xs xs:text-sm leading-relaxed px-1">
                Antes de se conectar, você deve escolher um servidor VPN na configuração.
              </p>
              <p className="text-gray-400 text-xs leading-relaxed px-1">
                Veja uma Configuração para selecionar o servidor que você deseja usar.
              </p>
            </div>

            {/* Visual indicator */}
            <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 rounded-lg p-3 xs:p-4 mt-3 xs:mt-4">
              <div className="flex items-center justify-center space-x-1 xs:space-x-2 text-blue-300">
                <i className="fas fa-cog text-xs xs:text-sm"></i>
                <span className="text-xs xs:text-sm">Configurações → Servidores</span>
                <i className="fas fa-server text-blue-400 text-xs xs:text-sm"></i>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="p-3 xs:p-4 sm:p-6 border-t border-white/10 flex flex-col space-y-2 xs:space-y-3">
          <button
            onClick={onOpenConfig}
            className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-medium py-2.5 xs:py-3 px-3 xs:px-4 rounded-lg transition-all duration-200 transform hover:scale-[1.02] active:scale-95 shadow-lg shadow-blue-500/25 text-sm xs:text-base"
          >
            <i className="fas fa-cog mr-1 xs:mr-2 text-sm xs:text-base"></i>
            <span className="text-xs xs:text-sm sm:text-base">Ir para Configurações</span>
          </button>
          
          <button
            onClick={onClose}
            className="w-full bg-gradient-to-r from-gray-600 to-gray-700 hover:from-gray-700 hover:to-gray-800 text-white font-medium py-2 xs:py-2.5 px-3 xs:px-4 rounded-lg transition-all duration-200 transform hover:scale-[1.02] active:scale-95 text-sm xs:text-base"
          >
            <span className="text-xs xs:text-sm sm:text-base">Fechar</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ServerRequiredModal;
