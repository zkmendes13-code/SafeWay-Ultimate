import React from 'react';

const PowerButton = ({ isConnected, connectionState, onToggle }) => {
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

  const getStateIcon = () => {
    switch (connectionState) {
      case 'CONNECTED':
        return <i className="fas fa-check-circle mr-2"></i>;
      case 'CONNECTING':
        return <i className="fas fa-sync-alt mr-2 animate-spin"></i>;
      case 'DISCONNECTED':
      default:
        return <i className="fas fa-times-circle mr-2"></i>;
    }
  };

  const getButtonStyles = () => {
    switch (connectionState) {
      case 'CONNECTED':
        return 'bg-gradient-to-br from-success-500 to-success-600 border-success-500 shadow-success-500/50';
      case 'CONNECTING':
        return 'bg-gradient-to-br from-primary-500 to-accent-500 border-primary-500 shadow-primary-500/50 animate-pulse';
      case 'DISCONNECTED':
      default:
        return 'bg-gradient-to-br from-danger-500 to-danger-600 border-danger-500 shadow-danger-500/50';
    }
  };

  const getTextColor = () => {
    switch (connectionState) {
      case 'CONNECTED':
        return 'text-success-400';
      case 'CONNECTING':
        return 'text-primary-300';
      case 'DISCONNECTED':
      default:
        return 'text-danger-400';
    }
  };

  const getButtonIcon = () => {
    switch (connectionState) {
      case 'CONNECTED':
        return 'fa-shield-alt';
      case 'CONNECTING':
        return 'fa-sync-alt animate-spin';
      case 'DISCONNECTED':
      default:
        return 'fa-power-off';
    }
  };

  return (
    <div className="flex flex-col items-center justify-center py-4 xs:py-6 sm:py-8">
      {/* Botón de encendido principal */}
      <div className="relative">
        {/* Glow exterior optimizado */}
        <div className={`absolute inset-0 w-28 h-28 xs:w-32 xs:h-32 sm:w-36 sm:h-36 md:w-40 md:h-40 rounded-full blur-lg opacity-40 transition-all duration-500 ${
          isConnected ? 'bg-vpn-green-success/20' : connectionState === 'CONNECTING' ? 'bg-primary-500/20 animate-pulse' : 'bg-vpn-red-error/20'
        }`}></div>
        
        <button 
          className={`relative w-24 h-24 xs:w-28 xs:h-28 sm:w-32 sm:h-32 md:w-36 md:h-36 rounded-full border-2 transition-all duration-300 shadow-lg hover:scale-[1.02] active:scale-95 ${getButtonStyles()}`}
          onClick={onToggle}
        >
          {/* Glassmorphism overlay simplificado */}
          <div className="absolute inset-1 rounded-full bg-white/10 backdrop-blur-sm"></div>
          
          {/* Inner glow simplificado */}
          <div className={`absolute inset-4 rounded-full blur-sm opacity-30 transition-all duration-300 ${
            isConnected ? 'bg-vpn-green-success/60' : connectionState === 'CONNECTING' ? 'bg-accent-500/60' : 'bg-vpn-red-error/60'
          }`}></div>
          
          {/* Content */}
          <div className="relative z-10 flex flex-col items-center justify-center h-full text-white">
            <i className={`fas ${getButtonIcon()} text-lg xs:text-xl sm:text-2xl md:text-3xl drop-shadow-lg`}></i>
          </div>
          
          {/* Rotating border optimizado */}
          {connectionState === 'CONNECTING' && (
            <div className="absolute inset-0 rounded-full border border-transparent border-t-white/40 animate-spin"></div>
          )}
        </button>
      </div>
    </div>
  );
};

export default PowerButton;
