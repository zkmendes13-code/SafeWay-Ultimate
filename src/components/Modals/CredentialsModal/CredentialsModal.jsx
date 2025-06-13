import React, { useState } from 'react';

const CredentialsModal = ({ 
  isOpen, 
  onClose, 
  username, 
  password, 
  uuid,
  onUsernameChange,
  onPasswordChange,
  onUuidChange,
  showUsername,
  showPassword,
  showUuid,
  isConnected 
}) => {
  const [showPasswordText, setShowPasswordText] = useState(false);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-3 xs:p-4 animate-fade-in">
      <div className="w-full max-w-xs xs:max-w-sm sm:max-w-md bg-vpn-bg-modal/90 backdrop-blur-xl rounded-xl xs:rounded-2xl border border-primary-500/20 shadow-glass animate-scale-in overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between p-4 xs:p-5 sm:p-6 border-b border-primary-500/10 bg-primary-500/5 backdrop-blur-xl">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-gradient-to-br from-primary-500/30 to-accent-500/30 rounded-lg flex items-center justify-center border border-primary-500/20">
              <i className="fas fa-key text-accent-500 text-sm"></i>
            </div>
            <h2 className="text-base xs:text-lg sm:text-xl font-bold text-white tracking-wide">CREDENCIALES</h2>
          </div>
          <button 
            className="flex items-center justify-center w-7 h-7 xs:w-8 xs:h-8 rounded-lg bg-white/10 hover:bg-primary-500/20 transition-all duration-300 active:scale-95 text-white border border-white/10"
            onClick={onClose}
          >
            <i className="fas fa-times text-xs xs:text-sm"></i>
          </button>
        </div>
        
        {/* Contenido */}
        <div className="p-4 xs:p-5 sm:p-6 space-y-4">
          {/* Campo de Usuario */}
          {showUsername && (
            <div className="space-y-2">
              <label className="block text-sm font-medium text-accent-500">
                Usuario
              </label>
              <div className="relative">
                <div className="absolute left-3 top-1/2 transform -translate-y-1/2 z-10">
                  <div className="w-8 h-8 bg-primary-500/20 rounded-lg flex items-center justify-center border border-primary-500/20">
                    <i className="fas fa-user text-accent-500 text-sm"></i>
                  </div>
                </div>
                <input
                  type="text"
                  value={username}
                  onChange={(e) => onUsernameChange(e.target.value)}
                  placeholder="Ingrese su usuario"
                  disabled={isConnected}
                  className="w-full bg-primary-500/10 backdrop-blur-lg border border-primary-500/20 rounded-xl pl-14 pr-4 py-3 text-white placeholder-vpn-gray-text focus:outline-none focus:border-accent-500/50 focus:bg-primary-500/15 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed text-sm"
                />
              </div>
            </div>
          )}

          {/* Campo de Contraseña */}
          {showPassword && (
            <div className="space-y-2">
              <label className="block text-sm font-medium text-accent-500">
                Contraseña
              </label>
              <div className="relative">
                <div className="absolute left-3 top-1/2 transform -translate-y-1/2 z-10">
                  <div className="w-8 h-8 bg-primary-500/20 rounded-lg flex items-center justify-center border border-primary-500/20">
                    <i className="fas fa-lock text-accent-500 text-sm"></i>
                  </div>
                </div>
                <input
                  type={showPasswordText ? "text" : "password"}
                  value={password}
                  onChange={(e) => onPasswordChange(e.target.value)}
                  placeholder="Ingrese su contraseña"
                  disabled={isConnected}
                  className="w-full bg-primary-500/10 backdrop-blur-lg border border-primary-500/20 rounded-xl pl-14 pr-14 py-3 text-white placeholder-vpn-gray-text focus:outline-none focus:border-accent-500/50 focus:bg-primary-500/15 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed text-sm"
                />
                <button
                  type="button"
                  onClick={() => setShowPasswordText(!showPasswordText)}
                  disabled={isConnected}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 w-8 h-8 bg-primary-500/20 rounded-lg flex items-center justify-center border border-primary-500/20 hover:bg-primary-500/30 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <i className={`fas ${showPasswordText ? 'fa-eye-slash' : 'fa-eye'} text-accent-500 text-sm`}></i>
                </button>
              </div>
            </div>
          )}

          {/* Campo de UUID */}
          {showUuid && (
            <div className="space-y-2">
              <label className="block text-sm font-medium text-accent-500">
                UUID (V2Ray)
              </label>
              <div className="relative">
                <div className="absolute left-3 top-1/2 transform -translate-y-1/2 z-10">
                  <div className="w-8 h-8 bg-vpn-green-success/20 rounded-lg flex items-center justify-center border border-vpn-green-success/20">
                    <i className="fas fa-fingerprint text-vpn-green-success text-sm"></i>
                  </div>
                </div>
                <input
                  type="text"
                  value={uuid}
                  onChange={(e) => onUuidChange(e.target.value)}
                  placeholder="UUID para conexión V2Ray"
                  disabled={isConnected}
                  className="w-full bg-primary-500/10 backdrop-blur-lg border border-primary-500/20 rounded-xl pl-14 pr-4 py-3 text-white placeholder-vpn-gray-text focus:outline-none focus:border-vpn-green-success/50 focus:bg-primary-500/15 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed text-sm"
                />
              </div>
            </div>
          )}

          {/* Información adicional */}
          <div className="bg-primary-500/5 backdrop-blur-sm rounded-xl p-4 border border-primary-500/10">
            <div className="flex items-start space-x-3">
              <div className="w-6 h-6 bg-accent-500/20 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                <i className="fas fa-info-circle text-accent-500 text-xs"></i>
              </div>
              <div className="flex-1">
                <p className="text-xs text-vpn-gray-text leading-relaxed">
                  Las credenciales se almacenan de forma segura y solo se utilizan para establecer la conexión VPN. 
                  {showUuid && " El UUID es requerido para conexiones V2Ray."}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="p-4 xs:p-5 sm:p-6 border-t border-primary-500/10 bg-primary-500/5">
          <button
            onClick={onClose}
            className="w-full bg-gradient-to-r from-primary-500 to-accent-500 backdrop-blur-xl border border-primary-500/30 rounded-xl py-3 px-4 text-white font-semibold transition-all duration-300 hover:from-vpn-purple-dark hover:to-primary-500 hover:border-accent-500/50 active:scale-[0.98]"
          >
            Guardar Credenciales
          </button>
        </div>
      </div>
    </div>
  );
};

export default CredentialsModal;
