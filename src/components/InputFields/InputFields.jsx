import React, { useState } from 'react';

const InputFields = ({ 
  config, 
  username, 
  password, 
  uuid, 
  onConfigClick,
  onCredentialsClick,
  onUsernameChange,
  onPasswordChange,
  onUuidChange,
  isConnected,
  showUsername,
  showPassword,
  showUuid
}) => {
  const [showPasswordText, setShowPasswordText] = useState(false);

  return (
    <>
      {/* Selecionar  Servidor - Flotante */}
      <div className="fixed bottom-4 left-4 right-4 safe-area-bottom z-30">
        <button
          onClick={onConfigClick}
          disabled={isConnected}
          className="w-full bg-gradient-to-r from-[#1a1a2e] to-[#16213e] border border-[#8b5cf6]/30 rounded-xl p-4 text-left transition-all duration-300 hover:border-[#8b5cf6]/50 hover:bg-gradient-to-r hover:from-[#1e1b4b]/90 hover:to-[#16213e]/90 active:scale-[0.99] disabled:opacity-50 disabled:cursor-not-allowed shadow-lg shadow-black/30"
        >
          <div className="flex items-center justify-between">
            {/* Información del servidor */}
            <div className="flex-1 min-w-0">
              <div className="text-[#8b5cf6] text-sm font-medium mb-1">
                Servidor Selecionado
              </div>
              <div className="text-white font-semibold text-base truncate">
                {config}
              </div>
              <div className="text-[#a855f7]/70 text-xs mt-1">
                Toque para escolher o servidor
              </div>
            </div>
            
            {/* Indicador de estado y flecha */}
            <div className="flex items-center space-x-3 flex-shrink-0">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-[#7c3aed] rounded-full"></div>
                <span className="text-[#a855f7] text-xs font-medium">Activo</span>
              </div>
              <div className="w-6 h-6 bg-[#8b5cf6]/20 rounded-md flex items-center justify-center">
                <span className="text-[#8b5cf6] text-xs">›</span>
              </div>
            </div>
          </div>
        </button>
      </div>
    </>
  );
};

export default InputFields;
