import React from 'react';

const UserCheckModal = ({ isOpen, onClose, userData, isLoading }) => {
  if (!isOpen) return null;

  // Función para formatear la fecha de expiración
  const formatExpirationDate = (dateString) => {
    if (!dateString) return 'N/A';
    const date = new Date(dateString);
    if (isNaN(date.getTime())) return dateString;
    
    try {
      return date.toLocaleDateString('en-US', { 
        day: '2-digit', 
        month: 'short', 
        year: 'numeric' 
      });
    } catch (e) {
      return `${date.getFullYear()}-${(date.getMonth() + 1).toString().padStart(2, '0')}-${date.getDate().toString().padStart(2, '0')}`;
    }
  };

  // Función SIMPLE para calcular días restantes
  const getDaysRemainingInfo = (expirationDate, expiration_days) => {
    console.log('📅 MODAL: Fecha recibida:', expirationDate, 'Tipo:', typeof expirationDate);
    
    if (!expirationDate) return { text: 'N/A', color: 'text-gray-400' };
    
    // Intentar múltiples formatos de fecha
    let expiry;
    
    // Si es string, intentar parsearlo directamente
    if (typeof expirationDate === 'string') {
      // Primero intentar formato ISO (YYYY-MM-DD)
      expiry = new Date(expirationDate);
      
      // Si no funciona, intentar formato DD/MM/YYYY
      if (isNaN(expiry.getTime()) && expirationDate.includes('/')) {
        const parts = expirationDate.split('/');
        if (parts.length === 3) {
          // Asumir DD/MM/YYYY
          const day = parseInt(parts[0]);
          const month = parseInt(parts[1]) - 1; // Mes es 0-indexado
          const year = parseInt(parts[2]);
          expiry = new Date(year, month, day);
        }
      }
    } else {
      expiry = new Date(expirationDate);
    }
    
    console.log('📅 MODAL: Fecha parseada:', expiry);
    console.log('📅 MODAL: Es válida?', !isNaN(expiry.getTime()));
    
    // Validar que la fecha sea válida
    if (isNaN(expiry.getTime())) {
      console.log('❌ MODAL: Fecha inválida detectada');
      return { text: 'Fecha inválida', color: 'text-red-400' };
    }
    
    // Crear fecha de hoy limpia (solo fecha, sin horas)
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    
    // Limpiar fecha de expiración también
    expiry.setHours(0, 0, 0, 0);
    
    // Calcular diferencia en días
    const diffTime = expiry.getTime() - today.getTime();
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    
    console.log('🧮 MODAL: Días calculados:', diffDays);
    
    // Mostrar resultado según los días
    if (diffDays < 0) {
      return { 
        text: `Expirado hace ${Math.abs(diffDays)} día(s)`, 
        color: 'text-red-400' 
      };
    } else if (diffDays === 0) {
      return { 
        text: 'Expira hoy', 
        color: 'text-yellow-400' 
      };
    } else {
      const color = diffDays <= 7 ? 'text-yellow-400' : 'text-green-400';
      return { 
        text: `${diffDays} día(s) restante(s)`, 
        color 
      };
    }
  };

  const daysInfo = userData ? getDaysRemainingInfo(userData.expiration_date, userData.expiration_days) : null;

  return (
    <div className="fixed inset-0 bg-gradient-to-br from-[#0f0f23]/80 via-[#1a1a2e]/70 to-[#16213e]/80 backdrop-blur-md z-50 flex items-center justify-center p-4 animate-fade-in">
      <div className="w-full max-w-sm bg-gradient-to-br from-[#1e1b4b]/30 to-[#16213e]/20 backdrop-blur-xl rounded-3xl border border-[#8b5cf6]/30 shadow-2xl shadow-[#8b5cf6]/10 animate-scale-in overflow-hidden">
        {/* Header con gradiente púrpura */}
        <div className="relative p-5 bg-gradient-to-r from-[#8b5cf6]/20 to-[#a855f7]/15 border-b border-[#8b5cf6]/20">
          <div className="absolute inset-0 bg-gradient-to-r from-[#8b5cf6]/5 to-[#7c3aed]/5 backdrop-blur-sm"></div>
          <div className="relative flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#8b5cf6] to-[#a855f7] p-0.5">
                <div className="w-full h-full rounded-xl bg-gradient-to-br from-[#1e1b4b] to-[#16213e] flex items-center justify-center">
                  <i className="fas fa-user text-[#8b5cf6] text-sm"></i>
                </div>
              </div>
              <div>
                <h2 className="text-base font-bold text-white tracking-wide">
                  {isLoading ? 'Verificando...' : 'Info Usuario'}
                </h2>
                <p className="text-xs text-[#8b5cf6]/80 font-medium">
                  {userData?.username?.toUpperCase() || 'N/A'}
                </p>
              </div>
            </div>
            <button 
              className="flex items-center justify-center w-9 h-9 rounded-xl bg-gradient-to-r from-[#8b5cf6]/20 to-[#a855f7]/10 hover:from-[#8b5cf6]/30 hover:to-[#a855f7]/20 border border-[#8b5cf6]/30 transition-all duration-300 active:scale-95 text-white shadow-lg"
              onClick={onClose}
            >
              <i className="fas fa-times text-sm"></i>
            </button>
          </div>
        </div>
        
        {/* Content */}
        <div className="p-5 space-y-4">
          {isLoading ? (
            <div className="flex flex-col items-center justify-center py-8">
              <div className="relative w-16 h-16 rounded-2xl bg-gradient-to-br from-[#8b5cf6]/20 to-[#a855f7]/10 border border-[#8b5cf6]/20 flex items-center justify-center mb-4">
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#8b5cf6]/10 to-transparent animate-pulse"></div>
                <i className="fas fa-sync-alt text-[#8b5cf6] text-xl animate-spin relative z-10"></i>
              </div>
              <p className="text-white/80 text-center text-sm">Verificando usuario...</p>
            </div>
          ) : userData ? (
            <div className="space-y-3">
              {/* Nombre de usuario */}
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-[#8b5cf6]/10 to-[#a855f7]/5 rounded-2xl blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative bg-gradient-to-br from-[#1e1b4b]/40 to-[#16213e]/30 backdrop-blur-sm rounded-2xl p-4 border border-[#8b5cf6]/20">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#8b5cf6] to-[#a855f7] flex items-center justify-center">
                        <i className="fas fa-user text-white text-xs"></i>
                      </div>
                      <span className="text-[#8b5cf6]/90 text-sm font-medium">Usuario</span>
                    </div>
                    <span className="text-white font-semibold text-sm">{userData.username || 'N/A'}</span>
                  </div>
                </div>
              </div>
              
              {/* Fecha de expiración */}
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-[#8b5cf6]/10 to-[#a855f7]/5 rounded-2xl blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative bg-gradient-to-br from-[#1e1b4b]/40 to-[#16213e]/30 backdrop-blur-sm rounded-2xl p-4 border border-[#8b5cf6]/20">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#a855f7] to-[#7c3aed] flex items-center justify-center">
                        <i className="fas fa-calendar text-white text-xs"></i>
                      </div>
                      <span className="text-[#8b5cf6]/90 text-sm font-medium">Expira</span>
                    </div>
                    <span className="text-white font-semibold text-sm">
                      {formatExpirationDate(userData.expiration_date)}
                    </span>
                  </div>
                </div>
              </div>
              
              {/* Días restantes */}
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-[#8b5cf6]/10 to-[#a855f7]/5 rounded-2xl blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative bg-gradient-to-br from-[#1e1b4b]/40 to-[#16213e]/30 backdrop-blur-sm rounded-2xl p-4 border border-[#8b5cf6]/20">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#7c3aed] to-[#6d28d9] flex items-center justify-center">
                        <i className="fas fa-clock text-white text-xs"></i>
                      </div>
                      <span className="text-[#8b5cf6]/90 text-sm font-medium">Días</span>
                    </div>
                    <span className={`font-bold text-sm ${daysInfo?.color || 'text-white'}`}>
                      {daysInfo?.text || 'N/A'}
                    </span>
                  </div>
                </div>
              </div>
              
              {/* Conexiones */}
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-[#8b5cf6]/10 to-[#a855f7]/5 rounded-2xl blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative bg-gradient-to-br from-[#1e1b4b]/40 to-[#16213e]/30 backdrop-blur-sm rounded-2xl p-4 border border-[#8b5cf6]/20">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#6d28d9] to-[#8b5cf6] flex items-center justify-center">
                        <i className="fas fa-wifi text-white text-xs"></i>
                      </div>
                      <span className="text-[#8b5cf6]/90 text-sm font-medium">Conexiones</span>
                    </div>
                    <span className="text-white font-semibold text-sm">
                      {userData.count_connections || 0} / {userData.limit_connections || '∞'}
                    </span>
                  </div>
                  <div className="w-full bg-[#0f0f23]/60 rounded-full h-2 overflow-hidden border border-[#8b5cf6]/20">
                    <div 
                      className="h-full bg-gradient-to-r from-[#8b5cf6] via-[#a855f7] to-[#7c3aed] rounded-full transition-all duration-700 shadow-lg shadow-[#8b5cf6]/30"
                      style={{ 
                        width: `${Math.min(((userData.count_connections || 0) / (userData.limit_connections || 1)) * 100, 100)}%` 
                      }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center py-8">
              <div className="relative w-16 h-16 rounded-2xl bg-gradient-to-br from-red-500/20 to-red-600/10 border border-red-500/30 flex items-center justify-center mb-4">
                <i className="fas fa-exclamation-triangle text-red-400 text-xl"></i>
              </div>
              <p className="text-red-400 text-center text-sm">No se pudo obtener la información</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default UserCheckModal;
