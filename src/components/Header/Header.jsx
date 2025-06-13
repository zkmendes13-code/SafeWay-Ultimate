import React from 'react';

const Header = ({ onMenuToggle, connectionState, onCredentialsOpen }) => {
  const getStateText = () => {
    switch (connectionState) {
      case 'CONNECTED':
        return 'CONECTADO';
      case 'CONNECTING':
        return 'CONECTANDO...';
      case 'DISCONNECTED':
      default:
        return 'DESCONECTADO';
    }
  };

  const getStateColor = () => {
    switch (connectionState) {
      case 'CONNECTED':
        return 'text-vpn-green-success';
      case 'CONNECTING':
        return 'text-accent-500';
      case 'DISCONNECTED':
      default:
        return 'text-vpn-red-error';
    }
  };

  const getStateIcon = () => {
    switch (connectionState) {
      case 'CONNECTED':
        return 'fa-shield-alt';
      case 'CONNECTING':
        return 'fa-sync-alt animate-spin';
      case 'DISCONNECTED':
      default:
        return 'fa-times-circle';
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 safe-area-top bg-[#0f0f23] border-b border-[#8b5cf6]/10">
      <div className="flex items-center justify-between px-4 py-3 max-w-screen-xl mx-auto">
        {/* Botón de menú a la izquierda */}
        <button 
          className="flex items-center justify-center w-8 h-8 rounded-lg bg-gradient-to-r from-[#1a1a2e] to-[#16213e] border border-[#8b5cf6]/20 hover:border-[#8b5cf6]/40 transition-all duration-300 active:scale-95 text-white"
          onClick={onMenuToggle}
        >
          <span className="text-[#8b5cf6] text-sm">☰</span>
        </button>
        
        {/* Estado de conexión en el centro */}
        <div className={`flex items-center space-x-2 px-3 py-1.5 rounded-lg bg-gradient-to-r from-[#1a1a2e] to-[#16213e] border border-[#8b5cf6]/20 ${getStateColor()}`}>
          <i className={`fas ${getStateIcon()} text-xs`}></i>
          <span className="text-xs font-medium">
            {getStateText()}
          </span>
        </div>
        
        {/* Botón de credenciales a la derecha */}
        <button 
          className="flex items-center justify-center w-8 h-8 rounded-lg bg-gradient-to-r from-[#1a1a2e] to-[#16213e] border border-[#8b5cf6]/20 hover:border-[#8b5cf6]/40 transition-all duration-300 active:scale-95 text-white"
          onClick={onCredentialsOpen}
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
            <g fill="none">
              <path fill="url(#fluentColorPerson160)" d="M11.5 8A1.5 1.5 0 0 1 13 9.5v.5c0 1.971-1.86 4-5 4s-5-2.029-5-4v-.5A1.5 1.5 0 0 1 4.5 8z"/>
              <path fill="url(#fluentColorPerson161)" d="M11.5 8A1.5 1.5 0 0 1 13 9.5v.5c0 1.971-1.86 4-5 4s-5-2.029-5-4v-.5A1.5 1.5 0 0 1 4.5 8z"/>
              <path fill="url(#fluentColorPerson162)" d="M8 1.5A2.75 2.75 0 1 1 8 7a2.75 2.75 0 0 1 0-5.5"/>
              <defs>
                <linearGradient id="fluentColorPerson160" x1="5.378" x2="7.616" y1="8.798" y2="14.754" gradientUnits="userSpaceOnUse">
                  <stop offset=".125" stopColor="#9c6cfe"/>
                  <stop offset="1" stopColor="#7a41dc"/>
                </linearGradient>
                <linearGradient id="fluentColorPerson161" x1="8" x2="11.164" y1="7.286" y2="17.139" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#885edb" stopOpacity="0"/>
                  <stop offset="1" stopColor="#e362f8"/>
                </linearGradient>
                <linearGradient id="fluentColorPerson162" x1="6.558" x2="9.361" y1="2.231" y2="6.707" gradientUnits="userSpaceOnUse">
                  <stop offset=".125" stopColor="#9c6cfe"/>
                  <stop offset="1" stopColor="#7a41dc"/>
                </linearGradient>
              </defs>
            </g>
          </svg>
        </button>
      </div>
    </header>
  );
};
export default Header;
