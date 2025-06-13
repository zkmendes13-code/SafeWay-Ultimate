/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'xs': '320px',    // iPhone SE, Galaxy S5
      'sm': '375px',    // iPhone 6/7/8, iPhone X
      'md': '414px',    // iPhone 6/7/8 Plus, iPhone XR/11
      'lg': '428px',    // iPhone 12/13/14 Pro Max
      'xl': '480px',    // Pantallas móviles grandes
      '2xl': '640px',   // Tablets pequeñas en vertical
    },
    extend: {
      // 🎨 Colores personalizados - Nueva Paleta Púrpura/Violeta
      colors: {
        // Colores principales púrpura/violeta
        primary: {
          50: '#f5f3ff',
          100: '#ede9fe',
          200: '#ddd6fe',
          300: '#c4b5fd',
          400: '#a78bfa',
          500: '#8b5cf6',   // Púrpura vibrante (color principal)
          600: '#7c3aed',   // Púrpura profundo (degradados)
          700: '#6d28d9',   // Púrpura oscuro (botones activos)
          800: '#5b21b6',
          900: '#4c1d95',
        },
        accent: {
          50: '#faf5ff',
          100: '#f3e8ff',
          200: '#e9d5ff',
          300: '#d8b4fe',
          400: '#c084fc',
          500: '#a855f7',   // Púrpura brillante (acentos)
          600: '#9333ea',
          700: '#7e22ce',
          800: '#6b21a8',
          900: '#581c87',
        },
        // Fondos oscuros - Nueva paleta
        dark: {
          50: '#f8fafc',
          100: '#f1f5f9',
          200: '#e2e8f0',
          300: '#cbd5e1',
          400: '#94a3b8',   // Color de texto secundario
          500: '#64748b',
          600: '#475569',
          700: '#334155',
          800: '#1a1a2e',   // Azul oscuro medio
          850: '#16213e',   // Azul profundo
          900: '#0f0f23',   // Azul muy oscuro (fondo principal)
          950: '#1e1b4b',   // Índigo oscuro
          500: '#64748b',
          600: '#475569',
          700: '#334155',
          800: '#1e293b',   // Fondo secundario
          900: '#0f0f23',   // Fondo principal
        },
        // Colores de estado
        success: {
          50: '#f0fdf4',
          100: '#dcfce7',
          200: '#bbf7d0',
          300: '#86efac',
          400: '#4ade80',
          500: '#10b981',   // Verde de estado conectado
          600: '#16a34a',
          700: '#15803d',
          800: '#166534',
          900: '#14532d',
        },
        warning: {
          50: '#fffbeb',
          100: '#fef3c7',
          200: '#fde68a',
          300: '#fcd34d',
          400: '#fbbf24',
          500: '#f59e0b',
          600: '#d97706',
          700: '#b45309',
          800: '#92400e',
          900: '#78350f',
        },
        danger: {
          50: '#fef2f2',
          100: '#fee2e2',
          200: '#fecaca',
          300: '#fca5a5',
          400: '#f87171',
          500: '#ef4444',   // Rojo de estado desconectado
          600: '#dc2626',
          700: '#b91c1c',
          800: '#991b1b',
          900: '#7f1d1d',
        },
        // Colores específicos de la app
        vpn: {
          'bg-primary': '#0f0f23',    // Fondo principal oscuro
          'bg-secondary': '#1a1a2e',  // Fondo secundario
          'bg-card': '#16213e',       // Fondo de tarjetas
          'bg-modal': '#1e1b4b',      // Fondo de modales
          'purple-main': '#8b5cf6',   // Púrpura principal
          'purple-accent': '#a855f7', // Púrpura accent
          'purple-dark': '#7c3aed',   // Púrpura oscuro
          'purple-deeper': '#6d28d9', // Púrpura más oscuro
          'green-success': '#10b981', // Verde de éxito
          'red-error': '#ef4444',     // Rojo de error
          'gray-text': '#94a3b8',     // Gris para texto secundario
        },
      },
      // 🌈 Gradientes personalizados
      backgroundImage: {
        'gradient-main': 'radial-gradient(ellipse at top, #1e1b4b 0%, #0f0f23 100%), linear-gradient(135deg, #0f0f23 0%, #1a1a2e 50%, #16213e 100%)',
        'gradient-purple': 'linear-gradient(135deg, #8b5cf6, #a855f7)',
        'gradient-purple-dark': 'linear-gradient(135deg, #7c3aed, #6d28d9)',
        'gradient-glass': 'linear-gradient(135deg, rgba(139, 92, 246, 0.1), rgba(168, 85, 247, 0.1))',
        'grid-pattern': "url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32' width='32' height='32' fill='none' stroke='rgb(148 163 184 / 0.05)'%3e%3cpath d='m0 .5h32m-32 32v-32'/%3e%3c/svg%3e\")",
      },
      // 🎭 Sombras personalizadas
      boxShadow: {
        'glass': '0 8px 32px rgba(0, 0, 0, 0.25), inset 0 1px 0 rgba(255, 255, 255, 0.1)',
        'glass-lg': '0 25px 50px -12px rgba(0, 0, 0, 0.25), inset 0 1px 0 rgba(255, 255, 255, 0.1)',
        'glow-purple': '0 0 20px rgba(139, 92, 246, 0.3)',
        'glow-green': '0 0 20px rgba(34, 197, 94, 0.3)',
        'glow-red': '0 0 20px rgba(239, 68, 68, 0.3)',
      },
      // 🎬 Animaciones personalizadas
      animation: {
        'pulse-slow': 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'shimmer': 'shimmer 2s ease-in-out infinite',
        'connecting': 'connecting 1.5s ease-in-out infinite',
        'fade-in': 'fadeIn 0.3s ease-out',
        'scale-in': 'scaleIn 0.3s ease-out',
        'slide-in': 'slideIn 0.5s cubic-bezier(0.23, 1, 0.32, 1)',
        'slide-up': 'slideUp 0.3s ease-out',
        'glow-pulse': 'glowPulse 2s ease-in-out infinite',
        'bounce-soft': 'bounceSoft 0.6s cubic-bezier(0.68, -0.55, 0.265, 1.55)',
      },
      keyframes: {
        shimmer: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100%)' },
        },
        connecting: {
          '0%, 100%': { transform: 'scale(1)', opacity: '0.8' },
          '50%': { transform: 'scale(1.05)', opacity: '1' },
        },
        fadeIn: {
          'from': { opacity: '0' },
          'to': { opacity: '1' },
        },
        scaleIn: {
          'from': { opacity: '0', transform: 'scale(0.9)' },
          'to': { opacity: '1', transform: 'scale(1)' },
        },
        slideIn: {
          'from': { opacity: '0', transform: 'translateX(-100%)' },
          'to': { opacity: '1', transform: 'translateX(0)' },
        },
        slideUp: {
          'from': { opacity: '0', transform: 'translateY(100%)' },
          'to': { opacity: '1', transform: 'translateY(0)' },
        },
        glowPulse: {
          '0%, 100%': { boxShadow: '0 0 5px rgba(139, 92, 246, 0.3)' },
          '50%': { boxShadow: '0 0 20px rgba(139, 92, 246, 0.6)' },
        },
        bounceSoft: {
          '0%': { transform: 'scale(0.8)', opacity: '0.5' },
          '50%': { transform: 'scale(1.05)', opacity: '1' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
      },
      // 🎯 Transiciones personalizadas
      transitionTimingFunction: {
        'bounce-custom': 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',
        'smooth': 'cubic-bezier(0.4, 0, 0.2, 1)',
      },
      // 📐 Espaciado personalizado
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
      },
      // 🖼️ Backdrop blur personalizado
      backdropBlur: {
        'glass': '20px',
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    function({ addUtilities }) {
      const newUtilities = {
        '.safe-area-top': {
          paddingTop: 'env(safe-area-inset-top)',
        },
        '.safe-area-bottom': {
          paddingBottom: 'env(safe-area-inset-bottom)',
        },
        '.safe-area-left': {
          paddingLeft: 'env(safe-area-inset-left)',
        },
        '.safe-area-right': {
          paddingRight: 'env(safe-area-inset-right)',
        },
        '.scrollbar-thin': {
          '&::-webkit-scrollbar': {
            width: '6px',
          },
          '&::-webkit-scrollbar-track': {
            background: 'transparent',
          },
          '&::-webkit-scrollbar-thumb': {
            backgroundColor: 'rgba(255, 255, 255, 0.2)',
            borderRadius: '3px',
          },
        },
        '.scrollbar-thumb-white\\/20': {
          '&::-webkit-scrollbar-thumb': {
            backgroundColor: 'rgba(255, 255, 255, 0.2)',
          },
        },
        '.scrollbar-track-transparent': {
          '&::-webkit-scrollbar-track': {
            background: 'transparent',
          },
        },
      };
      addUtilities(newUtilities);
    },
  ],
}
