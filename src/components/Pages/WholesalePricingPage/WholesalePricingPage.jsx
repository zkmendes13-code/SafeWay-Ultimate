import React, { useState } from 'react';

const WholesalePricingPage = ({ isOpen, onClose }) => {
  const [selectedPlan, setSelectedPlan] = useState(null);

  const creditPlans = [
    {
      id: 1,
      credits: 10,
      price: 20000,
      pricePerUser: 2000,
      description: 'Perfecto para empezar',
      popular: false,
    },
    {
      id: 2,
      credits: 20,
      price: 35000,
      pricePerUser: 1750,
      description: 'Más popular',
      popular: true,
    },
    {
      id: 3,
      credits: 30,
      price: 48000,
      pricePerUser: 1600,
      description: 'Mejor ahorro',
      popular: false,
    },
    {
      id: 4,
      credits: 40,
      price: 60000,
      pricePerUser: 1500,
      description: 'Máximo beneficio',
      popular: false,
    },
  ];

  const formatPrice = (price) => {
    return new Intl.NumberFormat('es-AR', {
      style: 'currency',
      currency: 'ARS',
      minimumFractionDigits: 0,
    }).format(price);
  };

  const handlePlanSelect = (plan) => {
    setSelectedPlan(plan);
    // Aquí puedes agregar la lógica para procesar la compra
    console.log('Plan seleccionado:', plan);
  };

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-50 overflow-y-auto overflow-x-hidden sidebar-scrollbar" 
      style={{ 
        backgroundColor: '#0f0f23',
        paddingTop: 'max(env(safe-area-inset-top), 20px)',
        paddingBottom: 'max(env(safe-area-inset-bottom), 10px)',
        paddingLeft: 'env(safe-area-inset-left)',
        paddingRight: 'env(safe-area-inset-right)'
      }}
    >
      
      {/* Header optimizado para ultra-móvil (280px+) */}
      <div className="border-b border-primary-500/20" style={{ backgroundColor: '#0f0f23' }}>
        <div className="flex items-center justify-between h-12 xs:h-14 px-2 xs:px-4">
          <button
            onClick={onClose}
            className="w-8 h-8 xs:w-10 xs:h-10 bg-primary-500/20 hover:bg-primary-500/30 rounded-lg flex items-center justify-center text-white transition-colors flex-shrink-0"
          >
            <i className="fas fa-arrow-left text-xs xs:text-sm"></i>
          </button>
          <h1 className="text-sm xs:text-base sm:text-lg font-bold text-white truncate px-2">
            💼 Precios Mayorista
          </h1>
          <div className="w-8 xs:w-10 flex-shrink-0"></div>
        </div>
      </div>

      {/* Contenido principal ultra-responsivo */}
      <div className="px-2 xs:px-4 py-4 xs:py-6 space-y-4 xs:space-y-6 min-h-screen max-w-full" style={{ backgroundColor: '#0f0f23' }}>
        
        {/* Introducción ultra-compacta */}
        <div className="bg-gradient-to-r from-primary-500/20 to-accent-500/20 rounded-lg xs:rounded-xl p-3 xs:p-4 sm:p-6 border border-primary-500/20">
          <div className="text-center mb-3 xs:mb-4 sm:mb-6">
            <h2 className="text-base xs:text-lg sm:text-xl font-bold text-white mb-1 xs:mb-2 break-words">
              ¿Querés generar ingresos revendiendo cuentas?
            </h2>
            <p className="text-accent-400 font-semibold text-xs xs:text-sm break-words">
              ¡Unite a nuestro sistema por créditos y empezá ya!
            </p>
          </div>
          
          <div className="space-y-2 xs:space-y-3">
            <div className="flex items-center space-x-2 xs:space-x-3 bg-white/5 rounded-lg p-2 xs:p-3 min-w-0">
              <span className="text-lg xs:text-xl sm:text-2xl flex-shrink-0">📦</span>
              <div className="min-w-0 flex-1">
                <p className="text-white font-semibold text-xs xs:text-sm break-words">Sistema por Créditos</p>
                <p className="text-vpn-gray-text text-xs break-words">Cada crédito = 30 días de usuario</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-2 xs:space-x-3 bg-white/5 rounded-lg p-2 xs:p-3 min-w-0">
              <span className="text-lg xs:text-xl sm:text-2xl flex-shrink-0">🚀</span>
              <div className="min-w-0 flex-1">
                <p className="text-white font-semibold text-xs xs:text-sm break-words">Solo necesitás 10 créditos</p>
                <p className="text-vpn-gray-text text-xs break-words">Sin complicaciones técnicas</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-2 xs:space-x-3 bg-white/5 rounded-lg p-2 xs:p-3 min-w-0">
              <span className="text-lg xs:text-xl sm:text-2xl flex-shrink-0">👑</span>
              <div className="min-w-0 flex-1">
                <p className="text-white font-semibold text-xs xs:text-sm break-words">Cuentas 100% gestionadas por vos</p>
                <p className="text-vpn-gray-text text-xs break-words">Control total de tus clientes</p>
              </div>
            </div>
            
            {/* Destacar que no vencen */}
            <div className="flex items-center space-x-2 xs:space-x-3 bg-gradient-to-r from-vpn-green-success/20 to-accent-500/20 rounded-lg p-2 xs:p-3 border border-vpn-green-success/30 min-w-0">
              <span className="text-lg xs:text-xl sm:text-2xl flex-shrink-0">⏰</span>
              <div className="min-w-0 flex-1">
                <p className="text-vpn-green-success font-bold text-xs xs:text-sm break-words">¡Créditos SIN vencimiento!</p>
                <p className="text-vpn-green-success/80 text-xs break-words">Los usás cuando quieras, hasta agotarlos</p>
              </div>
            </div>
          </div>
        </div>

        {/* Planes ultra-optimizados */}
        <div>
          <h3 className="text-sm xs:text-base sm:text-lg font-bold text-white mb-3 xs:mb-4 text-center break-words">
            📊 Planes Disponibles
          </h3>
          
          <div className="space-y-3 xs:space-y-4">
            {creditPlans.map((plan) => (
              <div
                key={plan.id}
                className={`relative bg-gradient-to-r from-white/5 to-white/10 backdrop-blur-sm rounded-lg xs:rounded-xl p-3 xs:p-4 border transition-all duration-300 cursor-pointer active:scale-95 min-w-0 ${
                  plan.popular
                    ? 'border-accent-500 shadow-lg shadow-accent-500/20'
                    : 'border-primary-500/20'
                }`}
                onClick={() => handlePlanSelect(plan)}
              >
                {plan.popular && (
                  <div className="absolute -top-1 xs:-top-2 left-2 xs:left-4">
                    <span className="bg-gradient-to-r from-accent-500 to-primary-500 text-white text-xs font-bold px-2 xs:px-3 py-0.5 xs:py-1 rounded-full whitespace-nowrap">
                      MÁS POPULAR
                    </span>
                  </div>
                )}
                
                <div className="flex flex-col xs:flex-row xs:items-center xs:justify-between space-y-2 xs:space-y-0 min-w-0">
                  <div className="flex items-center space-x-2 xs:space-x-3 sm:space-x-4 min-w-0 flex-1">
                    <div className="w-10 h-10 xs:w-12 xs:h-12 bg-primary-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <span className="text-lg xs:text-xl sm:text-2xl">🪙</span>
                    </div>
                    <div className="min-w-0 flex-1">
                      <h4 className="text-white font-bold text-sm xs:text-base sm:text-lg break-words">
                        {plan.credits} Créditos
                      </h4>
                      <p className="text-vpn-gray-text text-xs xs:text-sm truncate">
                        {plan.description}
                      </p>
                      <p className="text-accent-400 font-bold text-sm xs:text-base sm:text-lg break-words">
                        {formatPrice(plan.price)}
                      </p>
                    </div>
                  </div>
                  <div className="text-center xs:text-right flex-shrink-0 xs:ml-2">
                    <p className="text-vpn-gray-text text-xs">por usuario</p>
                    <p className="text-white font-semibold text-xs xs:text-sm break-words">
                      {formatPrice(plan.pricePerUser)}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Destacado especial - Sin vencimiento */}
        <div className="bg-gradient-to-r from-vpn-green-success/20 to-accent-500/20 rounded-lg xs:rounded-xl p-3 xs:p-4 border border-vpn-green-success/40 shadow-lg">
          <div className="text-center">
            <div className="text-2xl xs:text-3xl sm:text-4xl mb-2 xs:mb-3">⏰</div>
            <h3 className="text-vpn-green-success font-bold text-sm xs:text-base sm:text-lg mb-1 xs:mb-2 break-words">
              ¡Créditos SIN Vencimiento!
            </h3>
            <p className="text-white text-xs xs:text-sm mb-1 break-words">
              Comprás una vez y los usás cuando quieras
            </p>
            <p className="text-vpn-green-success/80 text-xs break-words">
              No hay presión de tiempo - Los créditos son tuyos hasta agotarlos
            </p>
          </div>
        </div>

        {/* Cómo funciona - ultra-compacto */}
        <div className="bg-gradient-to-r from-vpn-green-success/10 to-accent-500/10 rounded-lg xs:rounded-xl p-3 xs:p-4 sm:p-6 border border-vpn-green-success/20">
          <h3 className="text-sm xs:text-base sm:text-lg font-bold text-white mb-3 xs:mb-4 text-center break-words">
            💡 ¿Cómo funciona?
          </h3>
          
          <div className="space-y-2 xs:space-y-3 sm:space-y-4">
            <div className="flex items-start space-x-2 xs:space-x-3 min-w-0">
              <div className="w-6 h-6 xs:w-8 xs:h-8 bg-primary-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                <span className="text-xs xs:text-sm font-bold text-white">1</span>
              </div>
              <div className="min-w-0 flex-1">
                <h4 className="text-white font-semibold text-xs xs:text-sm break-words">Comprás Créditos</h4>
                <p className="text-vpn-gray-text text-xs break-words">Elegís el plan que más te convenga</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-2 xs:space-x-3 min-w-0">
              <div className="w-6 h-6 xs:w-8 xs:h-8 bg-primary-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                <span className="text-xs xs:text-sm font-bold text-white">2</span>
              </div>
              <div className="min-w-0 flex-1">
                <h4 className="text-white font-semibold text-xs xs:text-sm break-words">Gestionás Clientes</h4>
                <p className="text-vpn-gray-text text-xs break-words">Cada crédito activa una cuenta por 30 días</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-2 xs:space-x-3 min-w-0">
              <div className="w-6 h-6 xs:w-8 xs:h-8 bg-vpn-green-success/20 rounded-lg flex items-center justify-center flex-shrink-0">
                <span className="text-xs xs:text-sm font-bold text-vpn-green-success">3</span>
              </div>
              <div className="min-w-0 flex-1">
                <h4 className="text-white font-semibold text-xs xs:text-sm break-words">Generás Ingresos</h4>
                <p className="text-vpn-gray-text text-xs break-words">Cobrás lo que consideres justo</p>
              </div>
            </div>
          </div>
        </div>

        {/* Beneficios compactos */}
        <div className="bg-gradient-to-r from-primary-500/10 to-accent-500/10 rounded-lg xs:rounded-xl p-3 xs:p-4 sm:p-6 border border-primary-500/20">
          <h3 className="text-sm xs:text-base sm:text-lg font-bold text-white mb-3 xs:mb-4 text-center break-words">
            🧠 Beneficios Incluidos
          </h3>
          
          <div className="space-y-2 xs:space-y-3">
            <div className="flex items-center space-x-2 xs:space-x-3 min-w-0">
              <span className="text-vpn-green-success text-sm xs:text-base flex-shrink-0">✓</span>
              <p className="text-white text-xs xs:text-sm break-words">Soporte técnico incluido</p>
            </div>
            <div className="flex items-center space-x-2 xs:space-x-3 min-w-0">
              <span className="text-vpn-green-success text-sm xs:text-base flex-shrink-0">✓</span>
              <p className="text-white text-xs xs:text-sm break-words">Sin límites de ganancia</p>
            </div>
            <div className="flex items-center space-x-2 xs:space-x-3 min-w-0">
              <span className="text-vpn-green-success text-sm xs:text-base flex-shrink-0">✓</span>
              <p className="text-white text-xs xs:text-sm break-words">Capacitación incluida</p>
            </div>
            {/* Beneficio destacado sin vencimiento */}
            <div className="flex items-center space-x-2 xs:space-x-3 bg-vpn-green-success/10 rounded-lg p-2 border border-vpn-green-success/30 min-w-0">
              <span className="text-vpn-green-success text-sm xs:text-base flex-shrink-0">⏰</span>
              <p className="text-vpn-green-success font-bold text-xs xs:text-sm break-words">Créditos SIN vencimiento - Los usás cuando quieras</p>
            </div>
          </div>
        </div>

        {/* Call to Action ultra-compacto */}
        <div className="bg-gradient-to-r from-primary-500 to-accent-500 rounded-lg xs:rounded-xl p-3 xs:p-4 sm:p-6 text-center">
          <h3 className="text-sm xs:text-base sm:text-lg font-bold text-white mb-1 xs:mb-2 break-words">
            ¿Listo para empezar?
          </h3>
          <p className="text-white/90 text-xs xs:text-sm mb-3 xs:mb-4 sm:mb-6 break-words">
            Contactanos y te ayudamos a elegir el mejor plan
          </p>
          
          <div className="space-y-2 xs:space-y-3">
            <button className="w-full py-2 xs:py-3 px-4 xs:px-6 bg-white text-primary-500 rounded-lg font-semibold hover:bg-white/90 transition-colors shadow-lg text-xs xs:text-sm break-words">
              💬 Contactar por WhatsApp
            </button>
            <button className="w-full py-2 xs:py-3 px-4 xs:px-6 bg-white/10 text-white rounded-lg font-semibold hover:bg-white/20 transition-colors border border-white/20 text-xs xs:text-sm break-words">
              📧 Enviar Email
            </button>
          </div>
        </div>

        {/* Espacio extra para scroll seguro */}
        <div className="h-2 xs:h-4"></div>
      </div>
    </div>
  );
};

export default WholesalePricingPage;
