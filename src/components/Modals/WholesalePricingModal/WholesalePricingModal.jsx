import React, { useState } from 'react';

const WholesalePricingModal = ({ isOpen, onClose }) => {
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
    <>
      {/* Overlay */}
      <div 
        className="fixed inset-0 bg-black/70 z-50 transition-opacity duration-300"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
        <div className="bg-vpn-bg-modal rounded-2xl shadow-2xl border border-primary-500/20 w-full max-w-4xl max-h-[90vh] overflow-hidden">
          
          {/* Header */}
          <div className="bg-gradient-to-r from-primary-500 to-accent-500 p-6">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-2xl font-bold text-white mb-2">
                  💼 Precios Mayorista
                </h2>
                <p className="text-white/90 text-sm">
                  Sistema por créditos para revendedores
                </p>
              </div>
              <button
                onClick={onClose}
                className="w-10 h-10 bg-white/20 hover:bg-white/30 rounded-lg flex items-center justify-center text-white transition-colors"
              >
                <i className="fas fa-times"></i>
              </button>
            </div>
          </div>

          {/* Content */}
          <div className="p-6 overflow-y-auto max-h-[calc(90vh-120px)]">
            
            {/* Introducción */}
            <div className="bg-gradient-to-r from-primary-500/10 to-accent-500/10 rounded-xl p-6 mb-8 border border-primary-500/20">
              <h3 className="text-xl font-bold text-white mb-4">
                ¿Querés generar ingresos revendiendo cuentas y gestionarlas con total libertad?
              </h3>
              <p className="text-accent-400 font-semibold mb-4">
                ¡Unite a nuestro sistema por créditos y empezá ya!
              </p>
              
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <span className="text-primary-400 text-lg">📦</span>
                    <div>
                      <h4 className="text-white font-semibold">Sistema por Créditos</h4>
                      <p className="text-vpn-gray-text text-sm">Gestión simple y eficiente</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <span className="text-accent-400 text-lg">🔹</span>
                    <p className="text-vpn-gray-text text-sm">
                      Cada crédito equivale a una activación de usuario por 30 días
                    </p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <span className="text-accent-400 text-lg">🔹</span>
                    <p className="text-vpn-gray-text text-sm">
                      Solo necesitás 10 créditos para comenzar
                    </p>
                  </div>
                </div>
                
                <div className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <span className="text-accent-400 text-lg">🔹</span>
                    <p className="text-vpn-gray-text text-sm">
                      Sin complicaciones, sin requisitos técnicos
                    </p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <span className="text-accent-400 text-lg">🔹</span>
                    <p className="text-vpn-gray-text text-sm">
                      Cuentas 100% gestionadas por vos
                    </p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <span className="text-vpn-green-success text-lg">🧠</span>
                    <p className="text-vpn-green-success text-sm font-semibold">
                      Todo pensado para que ganes desde el primer día
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Planes */}
            <div className="mb-6">
              <h3 className="text-xl font-bold text-white mb-6 flex items-center">
                <span className="mr-3">📊</span>
                Planes Disponibles
              </h3>
              
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {creditPlans.map((plan) => (
                  <div
                    key={plan.id}
                    className={`relative bg-gradient-to-b from-white/5 to-white/10 backdrop-blur-sm rounded-xl p-6 border transition-all duration-300 cursor-pointer hover:scale-105 ${
                      plan.popular
                        ? 'border-accent-500 shadow-lg shadow-accent-500/20'
                        : 'border-primary-500/20 hover:border-primary-500/40'
                    }`}
                    onClick={() => handlePlanSelect(plan)}
                  >
                    {plan.popular && (
                      <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                        <span className="bg-gradient-to-r from-accent-500 to-primary-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                          MÁS POPULAR
                        </span>
                      </div>
                    )}
                    
                    <div className="text-center">
                      <div className="text-3xl mb-2">🪙</div>
                      <h4 className="text-xl font-bold text-white mb-2">
                        {plan.credits} Créditos
                      </h4>
                      <p className="text-vpn-gray-text text-sm mb-4">
                        {plan.description}
                      </p>
                      
                      <div className="space-y-2 mb-4">
                        <div className="text-2xl font-bold text-accent-400">
                          {formatPrice(plan.price)}
                        </div>
                        <div className="text-sm text-vpn-gray-text">
                          {formatPrice(plan.pricePerUser)} por usuario
                        </div>
                      </div>
                      
                      <button className={`w-full py-3 rounded-lg font-semibold transition-all duration-200 ${
                        plan.popular
                          ? 'bg-gradient-to-r from-accent-500 to-primary-500 text-white hover:from-accent-600 hover:to-primary-600 shadow-lg'
                          : 'bg-primary-500/20 text-primary-400 hover:bg-primary-500/30 border border-primary-500/40'
                      }`}>
                        Seleccionar Plan
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Información adicional */}
            <div className="bg-vpn-green-success/10 border border-vpn-green-success/20 rounded-xl p-6">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-vpn-green-success/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-xl">💡</span>
                </div>
                <div>
                  <h4 className="text-white font-bold mb-2">¿Cómo funciona?</h4>
                  <ul className="text-vpn-gray-text text-sm space-y-1">
                    <li>• Comprás los créditos que necesités</li>
                    <li>• Cada crédito activa una cuenta por 30 días</li>
                    <li>• Gestionás tus clientes desde tu panel</li>
                    <li>• Cobrás lo que consideres justo</li>
                    <li>• Renovás créditos cuando necesites más</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="bg-primary-500/5 border-t border-primary-500/20 p-6">
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={onClose}
                className="flex-1 py-3 px-6 bg-white/10 hover:bg-white/20 text-white rounded-lg font-semibold transition-colors"
              >
                Volver
              </button>
              <button
                className="flex-1 py-3 px-6 bg-gradient-to-r from-vpn-green-success to-accent-500 hover:from-vpn-green-success/90 hover:to-accent-500/90 text-white rounded-lg font-semibold transition-all duration-200 shadow-lg"
              >
                💬 Contactar para Comprar
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WholesalePricingModal;
