import React, { useState } from 'react';

const PlayTVPage = ({ isOpen, onClose }) => {
  const [activeTab, setActiveTab] = useState('usuarios');

  const plans = [
    {
      devices: 1,
      price: 4000,
      popular: false
    },
    {
      devices: 2,
      price: 6000,
      popular: true
    },
    {
      devices: 3,
      price: 8000,
      popular: false
    }
  ];

  const features = [
    "📺 +300 canales premium",
    "⚽ Pack Fútbol completo",
    "🎬 HBO, Universal y más",
    "🎭 Películas de estreno",
    "🚀 Streaming sin interrupciones",
    "📱 Compatible con todos los dispositivos"
  ];

  const compatibleDevices = [
    { icon: "📺", name: "Android TV Box" },
    { icon: "📱", name: "Tablets" },
    { icon: "📲", name: "Celulares" },
    { icon: "💻", name: "PC Emulador" }
  ];

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex flex-col android-safe"
      style={{
        background: 'radial-gradient(ellipse at top, #1e1b4b 0%, #0f0f23 100%), linear-gradient(135deg, #0f0f23 0%, #1a1a2e 50%, #16213e 100%)',
        paddingTop: 'max(env(safe-area-inset-top), 20px)',
        paddingBottom: 'max(env(safe-area-inset-bottom), 10px)',
        paddingLeft: 'env(safe-area-inset-left)',
        paddingRight: 'env(safe-area-inset-right)'
      }}
    >
      {/* Header */}
      <div className="flex-shrink-0 bg-gradient-to-r from-purple-900/30 to-indigo-900/30 backdrop-blur-sm border-b border-purple-500/20">
        <div className="flex items-center justify-between p-4">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-xl flex items-center justify-center">
              <span className="text-white text-xl">📺</span>
            </div>
            <div>
              <h1 className="text-xl font-bold text-white">PlayTV</h1>
              <p className="text-sm text-purple-300">TV sin límites y sin cortes</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="w-10 h-10 bg-white/10 hover:bg-purple-500/20 rounded-lg flex items-center justify-center text-white transition-all duration-200"
          >
            <i className="fas fa-times"></i>
          </button>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex-shrink-0 bg-gradient-to-r from-purple-900/20 to-indigo-900/20 backdrop-blur-sm border-b border-purple-500/10">
        <div className="flex px-4">
          <button
            onClick={() => setActiveTab('usuarios')}
            className={`flex-1 py-3 px-4 text-sm font-medium transition-all duration-200 border-b-2 ${
              activeTab === 'usuarios'
                ? 'text-purple-400 border-purple-400 bg-purple-500/10'
                : 'text-gray-400 border-transparent hover:text-purple-300'
            }`}
          >
            👥 Para Usuarios
          </button>
          <button
            onClick={() => setActiveTab('reventa')}
            className={`flex-1 py-3 px-4 text-sm font-medium transition-all duration-200 border-b-2 ${
              activeTab === 'reventa'
                ? 'text-purple-400 border-purple-400 bg-purple-500/10'
                : 'text-gray-400 border-transparent hover:text-purple-300'
            }`}
          >
            💼 Para Reventa
          </button>
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 overflow-y-auto overflow-x-hidden custom-scrollbar">
        <div className="p-3 sm:p-4 space-y-4 sm:space-y-6 pb-6 sm:pb-8 max-w-full">
        {activeTab === 'usuarios' && (
          <>
            {/* Hero Section */}
            <div className="bg-gradient-to-br from-purple-900/30 to-indigo-900/30 backdrop-blur-sm rounded-2xl p-4 sm:p-6 border border-purple-500/20">
              <div className="text-center mb-6">
                <h2 className="text-xl sm:text-2xl font-bold text-white mb-2 break-words">
                  🎥 ¡TV sin límites y sin cortes! 🚀
                </h2>
                <div className="flex flex-col xs:flex-row items-center justify-center xs:space-x-4 space-y-2 xs:space-y-0 text-xs sm:text-sm">
                  <div className="flex items-center space-x-2 text-green-400">
                    <span>💡</span>
                    <span className="font-medium">Rápido</span>
                  </div>
                  <div className="flex items-center space-x-2 text-green-400">
                    <span>✅</span>
                    <span className="font-medium">Instalación GRATIS</span>
                  </div>
                  <div className="flex items-center space-x-2 text-green-400">
                    <span>✅</span>
                    <span className="font-medium">Carga INSTANTÁNEA</span>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-purple-500/20 to-indigo-500/20 backdrop-blur-sm rounded-xl p-3 sm:p-4 border border-purple-400/30">
                <p className="text-center text-purple-200 font-medium text-sm sm:text-base break-words">
                  ✅ Solo necesitas 3Mb/s de velocidad
                </p>
              </div>
            </div>

            {/* Free Trial */}
            <div className="bg-gradient-to-r from-green-900/30 to-emerald-900/30 backdrop-blur-sm rounded-2xl p-4 sm:p-6 border border-green-500/20">
              <div className="text-center">
                <h3 className="text-lg sm:text-xl font-bold text-green-400 mb-2 break-words">
                  🌟 Prueba GRATIS 3hs
                </h3>
                <p className="text-green-200 mb-4 text-sm sm:text-base">(sin compromiso)</p>
                <button className="w-full sm:w-auto bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white font-bold py-3 px-4 sm:px-6 rounded-xl transition-all duration-200 shadow-lg hover:shadow-green-500/25 text-sm sm:text-base"
                        onClick={() => window.open('https://wa.me/5493812531123', '_blank')}>
                  🎬 Probar Ahora GRATIS
                </button>
              </div>
            </div>

            {/* Compatible Devices */}
            <div className="bg-gradient-to-br from-purple-900/20 to-indigo-900/20 backdrop-blur-sm rounded-2xl p-4 sm:p-6 border border-purple-500/20">
              <h3 className="text-base sm:text-lg font-bold text-white mb-4 text-center break-words">
                🛠 Compatible con:
              </h3>
              <div className="grid grid-cols-2 gap-2 sm:gap-4">
                {compatibleDevices.map((device, index) => (
                  <div
                    key={index}
                    className="bg-gradient-to-r from-purple-500/10 to-indigo-500/10 backdrop-blur-sm rounded-xl p-3 sm:p-4 border border-purple-400/20 text-center min-w-0"
                  >
                    <div className="text-xl sm:text-2xl mb-2">{device.icon}</div>
                    <div className="text-xs sm:text-sm text-purple-200 font-medium break-words">
                      {device.name}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Plans */}
            <div className="bg-gradient-to-br from-purple-900/20 to-indigo-900/20 backdrop-blur-sm rounded-2xl p-4 sm:p-6 border border-purple-500/20">
              <h3 className="text-lg sm:text-xl font-bold text-white mb-6 text-center break-words">
                💰 Planes Mensuales
              </h3>
              <div className="space-y-4">
                {plans.map((plan, index) => (
                  <div
                    key={index}
                    className={`relative bg-gradient-to-r backdrop-blur-sm rounded-xl p-4 sm:p-5 border transition-all duration-200 hover:scale-[1.01] min-w-0 ${
                      plan.popular
                        ? 'from-purple-500/20 to-indigo-500/20 border-purple-400/40 shadow-lg shadow-purple-500/10'
                        : 'from-purple-500/10 to-indigo-500/10 border-purple-400/20'
                    }`}
                  >
                    {plan.popular && (
                      <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                        <div className="bg-gradient-to-r from-purple-500 to-indigo-500 text-white text-xs font-bold px-3 py-1 rounded-full whitespace-nowrap">
                          ⭐ POPULAR
                        </div>
                      </div>
                    )}
                    <div className="flex flex-col xs:flex-row xs:items-center xs:justify-between space-y-3 xs:space-y-0 min-w-0">
                      <div className="flex items-center space-x-3 sm:space-x-4 min-w-0 flex-1">
                        <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-xl flex items-center justify-center flex-shrink-0">
                          <span className="text-white font-bold text-sm sm:text-base">{plan.devices}</span>
                        </div>
                        <div className="min-w-0 flex-1">
                          <div className="text-white font-bold text-sm sm:text-base break-words">
                            {plan.devices} Dispositivo{plan.devices > 1 ? 's' : ''}
                          </div>
                          <div className="text-purple-300 text-xs sm:text-sm">
                            Acceso simultáneo
                          </div>
                        </div>
                      </div>
                      <div className="text-center xs:text-right flex-shrink-0">
                        <div className="text-xl sm:text-2xl font-bold text-white">
                          ${plan.price.toLocaleString()}
                        </div>
                        <div className="text-purple-300 text-xs sm:text-sm">
                          /mes
                        </div>
                      </div>
                    </div>
                    <button className="w-full mt-4 bg-gradient-to-r from-purple-500 to-indigo-500 hover:from-purple-600 hover:to-indigo-600 text-white font-bold py-3 rounded-xl transition-all duration-200 shadow-lg hover:shadow-purple-500/25 text-sm sm:text-base"
                            onClick={() => window.open('https://wa.me/5493812531123', '_blank')}>
                      🛒 Contratar Plan
                    </button>
                  </div>
                ))}
              </div>
            </div>

            {/* Features */}
            <div className="bg-gradient-to-br from-purple-900/20 to-indigo-900/20 backdrop-blur-sm rounded-2xl p-4 sm:p-6 border border-purple-500/20">
              <h3 className="text-base sm:text-lg font-bold text-white mb-4 text-center break-words">
                🎥 ¿Qué incluye?
              </h3>
              <div className="grid grid-cols-1 gap-3">
                {features.map((feature, index) => (
                  <div
                    key={index}
                    className="flex items-center space-x-3 bg-gradient-to-r from-purple-500/10 to-indigo-500/10 backdrop-blur-sm rounded-lg p-3 border border-purple-400/20 min-w-0"
                  >
                    <div className="w-6 h-6 sm:w-8 sm:h-8 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-lg flex items-center justify-center flex-shrink-0">
                      <span className="text-white text-xs sm:text-sm">✓</span>
                    </div>
                    <span className="text-purple-200 font-medium text-xs sm:text-sm break-words flex-1">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Final CTA */}
            <div className="bg-gradient-to-r from-purple-500/20 to-indigo-500/20 backdrop-blur-sm rounded-2xl p-4 sm:p-6 border border-purple-400/30 text-center">
              <h3 className="text-base sm:text-lg font-bold text-white mb-2 break-words">
                💥 Streaming rápido y sin interrupciones
              </h3>
              <p className="text-purple-200 mb-4 text-sm sm:text-base break-words">
                Únete a miles de usuarios satisfechos
              </p>
              <button className="w-full sm:w-auto bg-gradient-to-r from-purple-500 to-indigo-500 hover:from-purple-600 hover:to-indigo-600 text-white font-bold py-4 px-6 sm:px-8 rounded-xl transition-all duration-200 shadow-lg hover:shadow-purple-500/25 transform hover:scale-105 text-sm sm:text-base"
                      onClick={() => window.open('https://wa.me/5493812531123', '_blank')}>
                🚀 ¡Empezar Ahora!
              </button>
            </div>
          </>
        )}

        {activeTab === 'reventa' && (
          <>
            {/* Header de Reventa */}
            <div className="bg-gradient-to-br from-purple-900/30 to-indigo-900/30 backdrop-blur-sm rounded-2xl p-4 sm:p-6 border border-purple-500/20">
              <div className="text-center mb-6">
                <h2 className="text-xl sm:text-2xl font-bold text-white mb-2 break-words">
                  💼 ¡Convierte en Revendedor! 🚀
                </h2>
                <p className="text-purple-300 text-sm sm:text-base break-words">
                  Compra créditos y revende servicios con grandes márgenes de ganancia
                </p>
              </div>
            </div>

            {/* Panel de Créditos */}
            <div className="bg-gradient-to-br from-purple-900/20 to-indigo-900/20 backdrop-blur-sm rounded-2xl p-4 sm:p-6 border border-purple-500/20">
              <h3 className="text-lg sm:text-xl font-bold text-white mb-6 text-center break-words">
                💰 Panel de Créditos
              </h3>
              
              <div className="space-y-4">
                {/* 15 Créditos */}
                <div className="bg-gradient-to-r from-purple-500/10 to-indigo-500/10 backdrop-blur-sm rounded-xl p-4 sm:p-5 border border-purple-400/20 hover:scale-[1.01] transition-all duration-200 min-w-0">
                  <div className="flex flex-col xs:flex-row xs:items-center xs:justify-between space-y-3 xs:space-y-0 min-w-0">
                    <div className="flex items-center space-x-3 sm:space-x-4 min-w-0 flex-1">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-xl flex items-center justify-center flex-shrink-0">
                        <span className="text-white font-bold text-sm sm:text-base">15</span>
                      </div>
                      <div className="min-w-0 flex-1">
                        <div className="text-white font-bold text-base sm:text-lg break-words">
                          15 Créditos
                        </div>
                        <div className="text-purple-300 text-xs sm:text-sm">
                          Pack inicial
                        </div>
                      </div>
                    </div>
                    <div className="text-center xs:text-right flex-shrink-0">
                      <div className="text-xl sm:text-2xl font-bold text-white">
                        $20.000
                      </div>
                      <div className="text-purple-300 text-xs sm:text-sm">
                        $1.333 c/u
                      </div>
                    </div>
                  </div>
                  <button className="w-full mt-4 bg-gradient-to-r from-purple-500 to-indigo-500 hover:from-purple-600 hover:to-indigo-600 text-white font-bold py-3 rounded-xl transition-all duration-200 shadow-lg hover:shadow-purple-500/25 text-sm sm:text-base"
                          onClick={() => window.open('https://t.me/SoporteJHS_bot', '_blank')}>
                    💳 Comprar 15 Créditos
                  </button>
                </div>

                {/* 30 Créditos - Popular */}
                <div className="relative bg-gradient-to-r from-purple-500/20 to-indigo-500/20 backdrop-blur-sm rounded-xl p-4 sm:p-5 border border-purple-400/40 shadow-lg shadow-purple-500/10 hover:scale-[1.01] transition-all duration-200 min-w-0">
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <div className="bg-gradient-to-r from-purple-500 to-indigo-500 text-white text-xs font-bold px-3 py-1 rounded-full whitespace-nowrap">
                      ⭐ POPULAR
                    </div>
                  </div>
                  <div className="flex flex-col xs:flex-row xs:items-center xs:justify-between space-y-3 xs:space-y-0 min-w-0">
                    <div className="flex items-center space-x-3 sm:space-x-4 min-w-0 flex-1">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-xl flex items-center justify-center flex-shrink-0">
                        <span className="text-white font-bold text-sm sm:text-base">30</span>
                      </div>
                      <div className="min-w-0 flex-1">
                        <div className="text-white font-bold text-base sm:text-lg break-words">
                          30 Créditos
                        </div>
                        <div className="text-purple-300 text-xs sm:text-sm">
                          Mejor valor
                        </div>
                      </div>
                    </div>
                    <div className="text-center xs:text-right flex-shrink-0">
                      <div className="text-xl sm:text-2xl font-bold text-white">
                        $30.500
                      </div>
                      <div className="text-purple-300 text-xs sm:text-sm">
                        $1.017 c/u
                      </div>
                      <div className="text-green-400 text-xs font-bold">
                        ¡AHORRA $9.500!
                      </div>
                    </div>
                  </div>
                  <button className="w-full mt-4 bg-gradient-to-r from-purple-500 to-indigo-500 hover:from-purple-600 hover:to-indigo-600 text-white font-bold py-3 rounded-xl transition-all duration-200 shadow-lg hover:shadow-purple-500/25 text-sm sm:text-base"
                          onClick={() => window.open('https://t.me/SoporteJHS_bot', '_blank')}>
                    💳 Comprar 30 Créditos
                  </button>
                </div>

                {/* 60 Créditos - Mejor oferta */}
                <div className="relative bg-gradient-to-r from-purple-500/15 to-indigo-500/15 backdrop-blur-sm rounded-xl p-4 sm:p-5 border border-purple-400/30 hover:scale-[1.01] transition-all duration-200 min-w-0">
                  <div className="absolute -top-3 right-2 sm:right-4">
                    <div className="bg-gradient-to-r from-green-500 to-emerald-500 text-white text-xs font-bold px-2 sm:px-3 py-1 rounded-full whitespace-nowrap">
                      🏆 MEJOR OFERTA
                    </div>
                  </div>
                  <div className="flex flex-col xs:flex-row xs:items-center xs:justify-between space-y-3 xs:space-y-0 min-w-0">
                    <div className="flex items-center space-x-3 sm:space-x-4 min-w-0 flex-1">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-xl flex items-center justify-center flex-shrink-0">
                        <span className="text-white font-bold text-sm sm:text-base">60</span>
                      </div>
                      <div className="min-w-0 flex-1">
                        <div className="text-white font-bold text-base sm:text-lg break-words">
                          60 Créditos
                        </div>
                        <div className="text-purple-300 text-xs sm:text-sm">
                          Máximo ahorro
                        </div>
                      </div>
                    </div>
                    <div className="text-center xs:text-right flex-shrink-0">
                      <div className="text-xl sm:text-2xl font-bold text-white">
                        $55.000
                      </div>
                      <div className="text-purple-300 text-xs sm:text-sm">
                        $917 c/u
                      </div>
                      <div className="text-green-400 text-xs font-bold">
                        ¡AHORRA $25.000!
                      </div>
                    </div>
                  </div>
                  <button className="w-full mt-4 bg-gradient-to-r from-purple-500 to-indigo-500 hover:from-purple-600 hover:to-indigo-600 text-white font-bold py-3 rounded-xl transition-all duration-200 shadow-lg hover:shadow-purple-500/25 text-sm sm:text-base"
                          onClick={() => window.open('https://t.me/SoporteJHS_bot', '_blank')}>
                    💳 Comprar 60 Créditos
                  </button>
                </div>
              </div>
            </div>

            {/* Información de Reventa */}
            <div className="bg-gradient-to-br from-purple-900/20 to-indigo-900/20 backdrop-blur-sm rounded-2xl p-4 sm:p-6 border border-purple-500/20">
              <h3 className="text-base sm:text-lg font-bold text-white mb-4 text-center break-words">
                📊 ¿Cómo funciona la reventa?
              </h3>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-gradient-to-r from-purple-500/10 to-indigo-500/10 backdrop-blur-sm rounded-lg p-3 sm:p-4 border border-purple-400/20 min-w-0">
                  <div className="flex items-center space-x-3 mb-2">
                    <div className="w-6 h-6 sm:w-8 sm:h-8 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-lg flex items-center justify-center flex-shrink-0">
                      <span className="text-white text-xs sm:text-sm">💰</span>
                    </div>
                    <span className="text-white font-bold text-sm sm:text-base break-words">Compra Créditos</span>
                  </div>
                  <p className="text-purple-200 text-xs sm:text-sm break-words">
                    Adquiere créditos a precios mayoristas
                  </p>
                </div>

                <div className="bg-gradient-to-r from-purple-500/10 to-indigo-500/10 backdrop-blur-sm rounded-lg p-3 sm:p-4 border border-purple-400/20 min-w-0">
                  <div className="flex items-center space-x-3 mb-2">
                    <div className="w-6 h-6 sm:w-8 sm:h-8 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-lg flex items-center justify-center flex-shrink-0">
                      <span className="text-white text-xs sm:text-sm">🎯</span>
                    </div>
                    <span className="text-white font-bold text-sm sm:text-base break-words">Revende</span>
                  </div>
                  <p className="text-purple-200 text-xs sm:text-sm break-words">
                    Vende a tus clientes con tu margen
                  </p>
                </div>

                <div className="bg-gradient-to-r from-purple-500/10 to-indigo-500/10 backdrop-blur-sm rounded-lg p-3 sm:p-4 border border-purple-400/20 min-w-0">
                  <div className="flex items-center space-x-3 mb-2">
                    <div className="w-6 h-6 sm:w-8 sm:h-8 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-lg flex items-center justify-center flex-shrink-0">
                      <span className="text-white text-xs sm:text-sm">📈</span>
                    </div>
                    <span className="text-white font-bold text-sm sm:text-base break-words">Ganancias</span>
                  </div>
                  <p className="text-purple-200 text-xs sm:text-sm break-words">
                    Hasta 200% de margen de ganancia
                  </p>
                </div>

                <div className="bg-gradient-to-r from-purple-500/10 to-indigo-500/10 backdrop-blur-sm rounded-lg p-3 sm:p-4 border border-purple-400/20 min-w-0">
                  <div className="flex items-center space-x-3 mb-2">
                    <div className="w-6 h-6 sm:w-8 sm:h-8 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-lg flex items-center justify-center flex-shrink-0">
                      <span className="text-white text-xs sm:text-sm">🎧</span>
                    </div>
                    <span className="text-white font-bold text-sm sm:text-base break-words">Soporte</span>
                  </div>
                  <p className="text-purple-200 text-xs sm:text-sm break-words">
                    Soporte técnico para ti y tus clientes
                  </p>
                </div>
              </div>
            </div>

            {/* CTA Final */}
            <div className="bg-gradient-to-r from-purple-500/20 to-indigo-500/20 backdrop-blur-sm rounded-2xl p-4 sm:p-6 border border-purple-400/30 text-center">
              <h3 className="text-base sm:text-lg font-bold text-white mb-2 break-words">
                🚀 ¡Inicia tu negocio hoy!
              </h3>
              <p className="text-purple-200 mb-4 text-sm sm:text-base break-words">
                Únete a nuestros revendedores exitosos
              </p>
              <button className="w-full sm:w-auto bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white font-bold py-4 px-6 sm:px-8 rounded-xl transition-all duration-200 shadow-lg hover:shadow-green-500/25 transform hover:scale-105 text-sm sm:text-base"
                      onClick={() => window.open('https://t.me/SoporteJHS_bot', '_blank')}>
                💼 Contactar Ventas
              </button>
            </div>
          </>
        )}
        </div>
      </div>
    </div>
  );
};

export default PlayTVPage;
