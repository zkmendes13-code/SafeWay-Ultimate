import React from 'react';

const CredentialsRequiredModal = ({ isOpen, onClose, onOpenCredentials }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 p-2 xs:p-3 sm:p-4">
      <div className="bg-gradient-to-br from-slate-900/95 to-slate-800/95 backdrop-blur-md border border-white/10 rounded-xl xs:rounded-2xl shadow-2xl w-full max-w-[280px] xs:max-w-[320px] sm:max-w-md mx-auto">
        {/* Header */}
        <div className="p-3 xs:p-4 sm:p-6 border-b border-white/10">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2 xs:space-x-3 min-w-0 flex-1">
              <div className="w-8 h-8 xs:w-10 xs:h-10 bg-gradient-to-br from-red-500 to-red-600 rounded-full flex items-center justify-center flex-shrink-0">
                <i className="fas fa-exclamation-triangle text-white text-sm xs:text-lg"></i>
              </div>
              <h2 className="text-sm xs:text-lg sm:text-xl font-bold text-white truncate">Credenciales Requeridas</h2>
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
            {/* Warning Icon */}
            <div className="w-12 h-12 xs:w-14 xs:h-14 sm:w-16 sm:h-16 bg-gradient-to-br from-amber-500/20 to-red-500/20 rounded-full flex items-center justify-center mx-auto mb-3 xs:mb-4">
              <i className="fas fa-key text-xl xs:text-2xl sm:text-3xl text-amber-400"></i>
            </div>

            {/* Message */}
            <div className="space-y-2">
              <h3 className="text-base xs:text-lg font-semibold text-white">
                Faltan Credenciales
              </h3>
              <p className="text-gray-300 text-xs xs:text-sm leading-relaxed px-1">
                Para conectarte a la VPN, primero debes configurar tus credenciales de acceso.
              </p>
              <p className="text-gray-400 text-xs leading-relaxed px-1">
                Haz clic en el botón de llave 🔑 en la parte superior derecha para ingresar tus datos.
              </p>
            </div>

            {/* Visual indicator */}
            <div className="bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/20 rounded-lg p-3 xs:p-4 mt-3 xs:mt-4">
              <div className="flex items-center justify-center space-x-1 xs:space-x-2 text-purple-300">
                <i className="fas fa-arrow-up text-xs xs:text-sm"></i>
                <span className="text-xs xs:text-sm">Busca el botón de credenciales</span>
                <i className="fas fa-key text-purple-400 text-xs xs:text-sm"></i>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="p-3 xs:p-4 sm:p-6 border-t border-white/10 flex flex-col space-y-2 xs:space-y-3">
          <button
            onClick={onOpenCredentials}
            className="w-full bg-gradient-to-r from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700 text-white font-medium py-2.5 xs:py-3 px-3 xs:px-4 rounded-lg transition-all duration-200 transform hover:scale-[1.02] active:scale-95 shadow-lg shadow-purple-500/25 text-sm xs:text-base"
          >
            <i className="fas fa-key mr-1 xs:mr-2 text-sm xs:text-base"></i>
            <span className="text-xs xs:text-sm sm:text-base">Configurar Credenciales</span>
          </button>
          
          <button
            onClick={onClose}
            className="w-full bg-gradient-to-r from-gray-600 to-gray-700 hover:from-gray-700 hover:to-gray-800 text-white font-medium py-2 xs:py-2.5 px-3 xs:px-4 rounded-lg transition-all duration-200 transform hover:scale-[1.02] active:scale-95 text-sm xs:text-base"
          >
            <span className="text-xs xs:text-sm sm:text-base">Cerrar</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default CredentialsRequiredModal;
