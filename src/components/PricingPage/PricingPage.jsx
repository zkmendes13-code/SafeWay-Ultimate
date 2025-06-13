import React, { useState, useMemo, useCallback } from 'react';

const PricingPage = ({ isOpen, onClose }) => {
  const [activeTab, setActiveTab] = useState('daily');
  const [expandedFaq, setExpandedFaq] = useState(null);
  const [isFaqSectionExpanded, setIsFaqSectionExpanded] = useState(false);

  const dailyPlans = [
    {
      name: 'BÁSICO',
      price: '$3.000',
      duration: 'por 7 días',
      features: [
        '📱 2 celulares',
        '🛠️ Soporte básico',
        '⚡ Conexión estable'
      ],
      gradient: 'from-[#8b5cf6] to-[#a855f7]',
      bgGradient: 'from-[#8b5cf6]/10 to-[#a855f7]/5',
      icon: '🔵'
    },
    {
      name: 'ESTÁNDAR',
      price: '$6.000',
      duration: 'por 15 días',
      features: [
        '📱 3 celulares',
        '⚡ Soporte prioritario',
        '🔒 Seguridad avanzada'
      ],
      gradient: 'from-[#a855f7] to-[#7c3aed]',
      bgGradient: 'from-[#a855f7]/10 to-[#7c3aed]/5',
      icon: '🟠',
      popular: true
    },
    {
      name: 'PREMIUM',
      price: '$10.000',
      duration: 'por 30 días',
      features: [
        '📱 4 celulares',
        '👨‍💻 Soporte 24/7',
        '🚀 Máxima velocidad'
      ],
      gradient: 'from-[#7c3aed] to-[#6d28d9]',
      bgGradient: 'from-[#7c3aed]/10 to-[#6d28d9]/5',
      icon: '🟣'
    }
  ];

  const monthlyPlans = [
    {
      name: 'INDIVIDUAL',
      price: '$6.000',
      duration: '30 días',
      features: [
        '📱 1 dispositivo',
        '🛠️ Soporte básico',
        '💡 Uso personal'
      ],
      gradient: 'from-[#8b5cf6] to-[#a855f7]',
      bgGradient: 'from-[#8b5cf6]/10 to-[#a855f7]/5',
      icon: '👤'
    },
    {
      name: 'DÚO',
      price: '$8.000',
      duration: '30 días',
      features: [
        '📱 2 dispositivos',
        '⚡ Soporte rápido',
        '👥 Para parejas'
      ],
      gradient: 'from-[#a855f7] to-[#7c3aed]',
      bgGradient: 'from-[#a855f7]/10 to-[#7c3aed]/5',
      icon: '👫'
    },
    {
      name: 'FAMILIAR',
      price: '$10.000',
      duration: '30 días',
      features: [
        '📱 4 dispositivos',
        '⚡ Soporte rápido',
        '👨‍👩‍👧‍👦 Para familias'
      ],
      gradient: 'from-[#7c3aed] to-[#6d28d9]',
      bgGradient: 'from-[#7c3aed]/10 to-[#6d28d9]/5',
      icon: '👨‍👩‍👧‍👦',
      popular: true
    },
    {
      name: 'FULL',
      price: '$12.000',
      duration: '30 días',
      features: [
        '📱 5 dispositivos',
        '👨‍💻 Soporte 24/7',
        '🔐 Máxima seguridad'
      ],
      gradient: 'from-[#6d28d9] to-[#8b5cf6]',
      bgGradient: 'from-[#6d28d9]/10 to-[#8b5cf6]/5',
      icon: '⭐'
    }
  ];
  
  // Optimización: Lazy loading de planes
  const currentPlans = useMemo(() => {
    return activeTab === 'daily' ? dailyPlans : monthlyPlans;
  }, [activeTab, dailyPlans, monthlyPlans]);

  // Optimización: Callbacks memoizados
  const handleTabChange = useCallback((tab) => {
    setActiveTab(tab);
  }, []);

  const toggleFaq = useCallback((index) => {
    setExpandedFaq(expandedFaq === index ? null : index);
  }, [expandedFaq]);

  const toggleFaqSection = useCallback(() => {
    setIsFaqSectionExpanded(!isFaqSectionExpanded);
    // Contraer todas las preguntas individuales cuando se contrae la sección
    if (isFaqSectionExpanded) {
      setExpandedFaq(null);
    }
  }, [isFaqSectionExpanded]);

  // FAQ Data
  const faqData = [
    {
      question: "¿Cuántos dispositivos puedo conectar?",
      answer: "Depende del plan que elijas:\n• Plan BÁSICO/INDIVIDUAL: 1-2 dispositivos\n• Plan ESTÁNDAR/DÚO: 2-3 dispositivos\n• Plan PREMIUM/FAMILIAR: 4 dispositivos\n• Plan FULL: 5 dispositivos\n\nCada dispositivo puede ser un celular, tablet, PC o Smart TV.",
      icon: "📱"
    },
    {
      question: "¿Puedo cambiar de plan durante mi suscripción?",
      answer: "¡Por supuesto! Puedes actualizar tu plan en cualquier momento. Si cambias a un plan superior, solo pagarás la diferencia proporcional. Los cambios a un plan inferior se aplicarán en tu próximo período de facturación.",
      icon: "🔄"
    },
    {
      question: "¿Qué incluye el soporte técnico?",
      answer: "Ofrecemos diferentes niveles de soporte:\n• Soporte Básico: Respuesta en 24-48 horas\n• Soporte Prioritario: Respuesta en 4-8 horas\n• Soporte 24/7: Respuesta inmediata\n\nIncluye configuración, resolución de problemas y orientación técnica.",
      icon: "🛠️"
    },
    {
      question: "¿Hay límite de datos o velocidad?",
      answer: "No hay límites de datos en ningún plan. La velocidad depende de tu conexión a internet y la ubicación del servidor. Los planes Premium ofrecen acceso a servidores más rápidos y con menor latencia.",
      icon: "⚡"
    },
    {
      question: "¿Puedo usar Netflix, Disney+ y otras plataformas?",
      answer: "¡Absolutamente! Nuestra VPN está optimizada para streaming. Funciona perfectamente con Netflix, Disney+, HBO Max, Amazon Prime, YouTube Premium y más de 50 plataformas de streaming internacionales.",
      icon: "🎬"
    },
    {
      question: "¿Es seguro para hacer compras online?",
      answer: "Totalmente seguro. Utilizamos encriptación AES-256 de grado militar, la misma que usan los bancos. Tu información personal, contraseñas y datos bancarios están completamente protegidos.",
      icon: "🔒"
    },
    {
      question: "¿Qué métodos de pago aceptan?",
      answer: "Aceptamos múltiples formas de pago:\n• Tarjetas de crédito/débito (Visa, Mastercard)\n• PayPal\n• Criptomonedas (Bitcoin, Ethereum)\n• Transferencias bancarias\n• Pago móvil\n\nTodos los pagos son 100% seguros y encriptados.",
      icon: "💳"
    }
  ];

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-gradient-to-br from-[#0f0f23] via-[#1a1a2e] to-[#16213e] flex flex-col">
      {/* Drag handle */}
      <div className="flex h-6 w-full items-center justify-center">
        <div className="h-1.5 w-12 rounded-full bg-gradient-to-r from-[#8b5cf6] to-[#a855f7] shadow-lg shadow-[#8b5cf6]/30"></div>
      </div>
      
      {/* Header */}
      <div className="relative bg-gradient-to-r from-[#1e1b4b]/30 to-[#16213e]/20 backdrop-blur-xl border-b border-[#8b5cf6]/20">
        <div className="absolute inset-0 bg-gradient-to-r from-[#8b5cf6]/5 to-[#a855f7]/5"></div>
        <div className="relative flex items-center px-4 py-4 justify-between">
          <button 
            onClick={onClose}
            className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-r from-[#8b5cf6]/20 to-[#a855f7]/10 hover:from-[#8b5cf6]/30 hover:to-[#a855f7]/20 border border-[#8b5cf6]/30 transition-all duration-300 active:scale-95 text-white shadow-lg"
          >
            <i className="fas fa-times text-sm"></i>
          </button>
          <div className="flex-1 text-center">
            <h2 className="text-white text-lg font-bold tracking-wide">Planes y Precios</h2>
            <p className="text-[#8b5cf6]/80 text-xs font-medium mt-1">Elige el plan perfecto para ti</p>
          </div>
          <div className="w-10"></div>
        </div>
      </div>

      {/* Tabs */}
      <div className="relative bg-gradient-to-r from-[#1e1b4b]/20 to-[#16213e]/10 backdrop-blur-sm px-4 py-4">
        <div className="flex gap-2">
          <button 
            onClick={() => handleTabChange('daily')}
            className={`flex-1 relative overflow-hidden rounded-xl border transition-all duration-200 ${
              activeTab === 'daily' 
                ? 'bg-gradient-to-r from-[#8b5cf6] to-[#a855f7] border-[#8b5cf6]/50 shadow-md shadow-[#8b5cf6]/20 text-white scale-105' 
                : 'bg-gradient-to-r from-[#1e1b4b]/30 to-[#16213e]/20 border-[#8b5cf6]/20 text-[#8b5cf6]/80 hover:border-[#8b5cf6]/40 hover:scale-102'
            }`}
          >
            <div className="relative z-10 flex flex-col items-center justify-center py-3 px-2">
              <div className="flex items-center gap-1.5 mb-0.5">
                <i className={`fas fa-calendar-day text-xs transition-colors ${activeTab === 'daily' ? 'text-white' : 'text-[#8b5cf6]'}`}></i>
                <p className="text-xs font-bold">Por Días</p>
              </div>
              <p className={`text-xs font-medium transition-colors ${activeTab === 'daily' ? 'text-white/80' : 'text-[#8b5cf6]/60'}`}>
                Flexible
              </p>
            </div>
          </button>
          
          <button 
            onClick={() => handleTabChange('monthly')}
            className={`flex-1 relative overflow-hidden rounded-xl border transition-all duration-200 ${
              activeTab === 'monthly' 
                ? 'bg-gradient-to-r from-[#8b5cf6] to-[#a855f7] border-[#8b5cf6]/50 shadow-md shadow-[#8b5cf6]/20 text-white scale-105' 
                : 'bg-gradient-to-r from-[#1e1b4b]/30 to-[#16213e]/20 border-[#8b5cf6]/20 text-[#8b5cf6]/80 hover:border-[#8b5cf6]/40 hover:scale-102'
            }`}
          >
            <div className="relative z-10 flex flex-col items-center justify-center py-3 px-2">
              <div className="flex items-center gap-1.5 mb-0.5">
                <i className={`fas fa-calendar-alt text-xs transition-colors ${activeTab === 'monthly' ? 'text-white' : 'text-[#8b5cf6]'}`}></i>
                <p className="text-xs font-bold">30 Días</p>
              </div>
              <p className={`text-xs font-medium transition-colors ${activeTab === 'monthly' ? 'text-white/80' : 'text-[#8b5cf6]/60'}`}>
                Mejor precio
              </p>
            </div>
          </button>
        </div>
      </div>

      {/* Scrollable content */}
      <div className="flex-1 overflow-y-auto custom-scrollbar">
        {/* Plans title */}
        <div className="px-4 py-4">
          <h3 className="text-white text-lg font-bold mb-1">
            {activeTab === 'daily' ? 'Planes por Días' : 'Planes de 30 Días'}
          </h3>
          <p className="text-[#8b5cf6]/70 text-sm">
            {activeTab === 'daily' ? 'Flexibilidad a corto plazo' : 'Mayor duración, mejor precio'}
          </p>
        </div>

        {/* Plans grid - Optimized for mobile */}
        <div className="px-3 space-y-3 pt-3 flex flex-col items-center">
          {currentPlans.map((plan, index) => (
            <div key={`${activeTab}-${index}`} className={`relative w-80 max-w-full ${plan.popular ? 'mt-6' : ''}`}>
              {/* Etiqueta "MÁS ELEGIDO" fuera del contenedor de la tarjeta */}
              {plan.popular && (
                <div className="absolute -top-5 left-1/2 transform -translate-x-1/2 z-20">
                  <div className="bg-gradient-to-r from-[#8b5cf6] to-[#a855f7] text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-lg shadow-[#8b5cf6]/30 border border-white/20 whitespace-nowrap">
                    <div className="flex items-center gap-1">
                      <i className="fas fa-crown text-yellow-300 text-xs"></i>
                      <span>MÁS ELEGIDO</span>
                    </div>
                  </div>
                </div>
              )}
              
              {/* Tarjeta del plan - Simplificada para mejor rendimiento */}
              <div className={`overflow-hidden rounded-2xl border border-[#8b5cf6]/20 bg-gradient-to-br ${plan.bgGradient} backdrop-blur-sm shadow-md hover:shadow-lg transition-shadow duration-200`}>
                <div className="p-4 space-y-3">
                  {/* Header del plan - Compacto */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className={`w-8 h-8 rounded-xl bg-gradient-to-br ${plan.gradient} flex items-center justify-center text-sm shadow-sm`}>
                        {plan.icon}
                      </div>
                      <div>
                        <h4 className="text-white text-sm font-bold">{plan.name}</h4>
                        <p className="text-[#8b5cf6]/70 text-xs">{plan.duration}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <span className="text-white text-xl font-black">{plan.price}</span>
                      <p className="text-[#8b5cf6]/60 text-xs">COP</p>
                    </div>
                  </div>

                  {/* Features - Compactas */}
                  <div className="space-y-2">
                    {plan.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center gap-2">
                        <div className="w-4 h-4 rounded-md bg-[#8b5cf6]/20 border border-[#8b5cf6]/30 flex items-center justify-center flex-shrink-0">
                          <i className="fas fa-check text-[#8b5cf6] text-xs"></i>
                        </div>
                        <p className="text-white/90 text-xs font-medium flex-1">{feature}</p>
                      </div>
                    ))}
                  </div>


                </div>
              </div>
            </div>
          ))}
        </div>

        {/* FAQ Section */}
        <div className="px-3 pt-6 pb-4">
          <div className="bg-gradient-to-br from-[#1e1b4b]/20 to-[#16213e]/10 backdrop-blur-sm rounded-xl border border-[#8b5cf6]/20 overflow-hidden">
            {/* FAQ Header - Clickable */}
            <button 
              onClick={toggleFaqSection}
              className="w-full p-4 hover:bg-[#8b5cf6]/5 transition-colors duration-200"
            >
              <div className="flex items-center justify-between">
                <div className="text-center flex-1">
                  <h4 className="text-white text-lg font-bold mb-2 tracking-wide">PREGUNTAS FRECUENTES</h4>
                  <p className="text-[#8b5cf6]/70 text-sm">Todo lo que necesitas saber sobre nuestros planes</p>
                </div>
                <div className={`transform transition-transform duration-300 ml-4 ${isFaqSectionExpanded ? 'rotate-180' : ''}`}>
                  <i className="fas fa-chevron-down text-[#8b5cf6] text-lg"></i>
                </div>
              </div>
            </button>
            
            {/* FAQ Content - Collapsible */}
            {isFaqSectionExpanded && (
              <div className="px-4 pb-4 border-t border-[#8b5cf6]/10">
                <div className="space-y-3 pt-4">
                  {faqData.map((faq, index) => (
                    <div key={index} className="bg-gradient-to-br from-[#1e1b4b]/30 to-[#16213e]/20 rounded-xl border border-[#8b5cf6]/10 overflow-hidden">
                      <button 
                        onClick={() => toggleFaq(index)}
                        className="w-full p-4 text-left flex items-center justify-between hover:bg-[#8b5cf6]/5 transition-colors duration-200"
                      >
                        <div className="flex items-center gap-3 flex-1">
                          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#8b5cf6]/20 to-[#a855f7]/10 flex items-center justify-center border border-[#8b5cf6]/20 flex-shrink-0">
                            <span className="text-sm">{faq.icon}</span>
                          </div>
                          <h5 className="text-white text-sm font-semibold leading-tight pr-2">{faq.question}</h5>
                        </div>
                        <div className={`transform transition-transform duration-200 flex-shrink-0 ${expandedFaq === index ? 'rotate-180' : ''}`}>
                          <i className="fas fa-chevron-down text-[#8b5cf6] text-xs"></i>
                        </div>
                      </button>
                      
                      {expandedFaq === index && (
                        <div className="px-4 pb-4 border-t border-[#8b5cf6]/10">
                          <div className="pt-3">
                            <p className="text-[#8b5cf6]/90 text-sm leading-relaxed whitespace-pre-line">
                              {faq.answer}
                            </p>
                          </div>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
                
                {/* Contact support for more questions */}
                <div className="mt-6 p-4 bg-gradient-to-r from-[#8b5cf6]/10 to-[#a855f7]/5 rounded-lg border border-[#8b5cf6]/20">
                  <div className="text-center">
                    <div className="w-12 h-12 mx-auto mb-3 bg-gradient-to-br from-[#8b5cf6] to-[#a855f7] rounded-full flex items-center justify-center">
                      <i className="fas fa-question-circle text-white text-lg"></i>
                    </div>
                    <h6 className="text-white text-sm font-bold mb-2">¿Tienes más preguntas?</h6>
                    <p className="text-[#8b5cf6]/70 text-xs mb-3 leading-relaxed">
                      Nuestro equipo de soporte está listo para ayudarte 24/7
                    </p>
                    <div className="flex gap-2 justify-center">
                      <a 
                        href="https://wa.me/5493812531123" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center gap-1 bg-[#25D366] hover:bg-[#128C7E] text-white text-xs font-bold py-2 px-3 rounded-lg transition-colors duration-200"
                      >
                        <i className="fab fa-whatsapp"></i>
                        <span>WhatsApp</span>
                      </a>
                      <a 
                        href="https://t.me/SoporteJHS_bot" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center gap-1 bg-[#0088cc] hover:bg-[#229ED9] text-white text-xs font-bold py-2 px-3 rounded-lg transition-colors duration-200"
                      >
                        <i className="fab fa-telegram-plane"></i>
                        <span>Telegram</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Payment methods section - Decorative */}
        <div className="px-3 pt-4 pb-2">
          <div className="bg-gradient-to-br from-[#1e1b4b]/20 to-[#16213e]/10 backdrop-blur-sm rounded-xl p-4 border border-[#8b5cf6]/20">
            <h4 className="text-white/90 text-sm font-bold mb-3 text-center tracking-wide">MÉTODOS DE PAGO</h4>
            
            {/* Payment icons */}
            <div className="flex items-center justify-center gap-4 mb-3">
              {/* Visa */}
              <div className="w-12 h-8 bg-gradient-to-r from-[#1a1f71] to-[#0f4c81] rounded-lg flex items-center justify-center border border-white/10">
                <i className="fab fa-cc-visa text-white text-lg"></i>
              </div>
              
              {/* Mastercard */}
              <div className="w-12 h-8 bg-gradient-to-r from-[#eb001b] to-[#ff5f00] rounded-lg flex items-center justify-center">
                <i className="fab fa-cc-mastercard text-white text-lg"></i>
              </div>
              
              {/* PayPal */}
              <div className="w-12 h-8 bg-gradient-to-r from-[#003087] to-[#009cde] rounded-lg flex items-center justify-center">
                <i className="fab fa-cc-paypal text-white text-lg"></i>
              </div>
              
              {/* Bitcoin */}
              <div className="w-12 h-8 bg-gradient-to-r from-[#f7931a] to-[#ffb500] rounded-lg flex items-center justify-center">
                <i className="fab fa-bitcoin text-white text-lg"></i>
              </div>
              
              {/* Bank transfer */}
              <div className="w-12 h-8 bg-gradient-to-r from-[#4b5563] to-[#6b7280] rounded-lg flex items-center justify-center">
                <i className="fas fa-university text-white text-lg"></i>
              </div>
            </div>
            
            <p className="text-[#8b5cf6]/70 text-xs text-center leading-relaxed">
              Para pagos con criptomonedas o transferencias bancarias, contacte con soporte.
            </p>
          </div>
        </div>

        {/* Contact buttons section */}
        <div className="px-3 pt-4 pb-2">
          <div className="bg-gradient-to-br from-[#1e1b4b]/30 to-[#16213e]/20 backdrop-blur-sm rounded-xl p-4 border border-[#8b5cf6]/20">
            <h4 className="text-white text-sm font-bold mb-3 text-center">Contacta con nosotros</h4>
            <div className="space-y-3">
              {/* WhatsApp Button */}
              <a 
                href="https://wa.me/5493812531123" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-3 bg-gradient-to-r from-[#25D366] to-[#128C7E] hover:from-[#128C7E] hover:to-[#25D366] text-white text-sm font-bold py-3 px-4 rounded-xl transition-all duration-300 active:scale-95 shadow-lg"
              >
                <i className="fab fa-whatsapp text-lg"></i>
                <span>Contactar por WhatsApp</span>
              </a>
              
              {/* Telegram Button */}
              <a 
                href="https://t.me/SoporteJHS_bot" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-3 bg-gradient-to-r from-[#0088cc] to-[#229ED9] hover:from-[#229ED9] hover:to-[#0088cc] text-white text-sm font-bold py-3 px-4 rounded-xl transition-all duration-300 active:scale-95 shadow-lg"
              >
                <i className="fab fa-telegram-plane text-lg"></i>
                <span>Contactar por Telegram</span>
              </a>
            </div>
          </div>
        </div>


      </div>

      {/* Bottom CTA - Optimized for mobile */}
      <div className="relative bg-gradient-to-r from-[#1e1b4b]/30 to-[#16213e]/20 backdrop-blur-xl border-t border-[#8b5cf6]/20 p-3 safe-area-bottom">
        <div className="absolute inset-0 bg-gradient-to-r from-[#8b5cf6]/5 to-[#a855f7]/5"></div>
        <div className="relative">
          <button className="w-full bg-gradient-to-r from-[#8b5cf6] to-[#a855f7] hover:from-[#7c3aed] hover:to-[#8b5cf6] text-white text-sm font-bold py-3 px-4 rounded-xl transition-all duration-300 active:scale-95 shadow-lg shadow-[#8b5cf6]/30">
            <div className="flex items-center justify-center gap-2">
              <i className="fas fa-play text-xs"></i>
              <span>Comenzar Prueba Gratuita</span>
            </div>
          </button>
          <p className="text-center text-[#8b5cf6]/70 text-xs mt-2">
            Sin compromisos • Cancela cuando quieras
          </p>
        </div>
      </div>
    </div>
  );
};

export default PricingPage;
