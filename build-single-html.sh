#!/bin/bash

# Script optimizado para crear HTML único funcional
echo "🔧 Creando HTML único con React completo..."

# Verificar build
if [ ! -d "dist" ]; then
    echo "❌ No se encontró dist/. Ejecuta 'npm run build' primero."
    exit 1
fi

# Crear directorio
mkdir -p single-html

# Variables
OUTPUT_FILE="single-html/jjsecure-vpn-complete.html"
CSS_FILE=$(find dist/assets -name "*.css" 2>/dev/null | head -1)
JS_FILE=$(find dist/assets -name "index-*.js" 2>/dev/null | head -1)

echo "📄 Archivos encontrados:"
echo "CSS: $CSS_FILE"
echo "JS: $JS_FILE"

# Crear HTML completo
cat > "$OUTPUT_FILE" << 'HTML_START'
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover, user-scalable=no">
    <meta name="mobile-web-app-capable" content="yes">
    <meta name="apple-mobile-web-app-capable" content="yes">
    <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent">
    <meta name="theme-color" content="#482d80">
    <meta name="description" content="Aplicación VPN moderna para dispositivos móviles">
    <title>JJSecure VPN</title>
    
    <!-- Font Awesome -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    
    <style>
HTML_START

# Insertar CSS si existe
if [ -f "$CSS_FILE" ]; then
    echo "📄 Insertando CSS..."
    cat "$CSS_FILE" >> "$OUTPUT_FILE"
fi

cat >> "$OUTPUT_FILE" << 'STYLE_AND_SCRIPT'
        
        /* Loading Animation */
        @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
        }
        
        #initial-loading {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            display: flex;
            justify-content: center;
            align-items: center;
            z-index: 9999;
            color: white;
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
            transition: opacity 0.5s ease;
        }
        
        .loading-spinner {
            width: 48px;
            height: 48px;
            border: 3px solid rgba(255,255,255,0.3);
            border-top: 3px solid #4ecdc4;
            border-radius: 50%;
            animation: spin 1s linear infinite;
            margin: 0 auto 20px;
        }
    </style>
</head>
<body>
    <div id="initial-loading">
        <div style="text-align: center;">
            <div class="loading-spinner"></div>
            <p>Carregando JJSecure VPN...</p>
        </div>
    </div>
    
    <div id="root"></div>

    <script>
        // Configurar funciones nativas mockeadas ANTES de cargar React
        (function() {
            console.log('🔧 Configurando funciones nativas mockeadas...');
            
            // Solo configurar si no existen (para desarrollo web)
            if (typeof window.DtGetLocalIP === 'undefined') {
                window.DtGetLocalIP = { execute: () => '192.168.1.100' };
                window.DtExecuteVpnStart = { execute: () => console.log('🚀 VPN Start (Mock)') };
                window.DtExecuteVpnStop = { execute: () => console.log('🛑 VPN Stop (Mock)') };
                window.DtGetVpnState = { execute: () => 'DISCONNECTED' };
                window.DtGetConfigs = { execute: () => null };
                window.DtSetConfig = { execute: (id) => console.log('⚙️ Set Config:', id) };
                window.DtUsername = { get: () => '', set: (v) => console.log('👤 Username:', v) };
                window.DtPassword = { get: () => '', set: (v) => console.log('🔐 Password:', '***') };
                window.DtUuid = { get: () => '', set: (v) => console.log('🔑 UUID:', v) };
                window.DtStartAppUpdate = { execute: () => console.log('🔄 Update check (Mock)') };
                window.DtStartApnActivity = { execute: () => console.log('📱 APN Config (Mock)') };
                window.DtShowLoggerDialog = { execute: () => console.log('📋 Show Logs (Mock)') };
                
                console.log('✅ Funciones nativas mockeadas configuradas para desarrollo web');
                console.log('📱 Esta versión funciona tanto en navegador como en WebView móvil');
            }
            
            // Función para remover loading cuando React esté listo
            window.removeInitialLoading = function() {
                setTimeout(() => {
                    const loading = document.getElementById('initial-loading');
                    if (loading) {
                        loading.style.opacity = '0';
                        setTimeout(() => {
                            loading.style.display = 'none';
                            console.log('✅ Loading inicial removido - Aplicación lista!');
                        }, 500);
                    }
                }, 100);
            };
        })();

        // === APLICACIÓN REACT ===
STYLE_AND_SCRIPT

# Insertar JavaScript principal
if [ -f "$JS_FILE" ]; then
    echo "📄 Insertando JavaScript React..."
    cat "$JS_FILE" >> "$OUTPUT_FILE"
fi

# Cerrar HTML
cat >> "$OUTPUT_FILE" << 'HTML_END'

        // Activar remoción de loading después de que React se monte
        if (typeof window.removeInitialLoading === 'function') {
            window.removeInitialLoading();
        }
    </script>
</body>
</html>
HTML_END

# Mostrar resultado
FILE_SIZE=$(du -h "$OUTPUT_FILE" | cut -f1)
echo ""
echo "✅ HTML único generado exitosamente!"
echo "📁 Archivo: $OUTPUT_FILE"
echo "📊 Tamaño: $FILE_SIZE"
echo ""
echo "🌐 Para probar en navegador:"
echo "   1. Abre: $OUTPUT_FILE"
echo "   2. O inicia servidor: cd single-html && python3 -m http.server 8080"
echo ""
echo "📱 Para WebView móvil:"
echo "   1. Copia el archivo a: app/src/main/assets/"
echo "   2. Carga con: webView.loadUrl('file:///android_asset/jjsecure-vpn-complete.html')"
echo ""
echo "🎯 Características incluidas:"
echo "   ✅ React 19 completo inline"
echo "   ✅ CSS completo inline"
echo "   ✅ Funciones nativas mockeadas"
echo "   ✅ Compatible navegador + WebView"
echo "   ✅ Loading screen animado"
echo "   ✅ Sin dependencias externas (excepto Font Awesome)"
echo ""
echo "🔧 Funciones nativas disponibles:"
echo "   • DtGetLocalIP, DtExecuteVpnStart, DtExecuteVpnStop"
echo "   • DtGetVpnState, DtGetConfigs, DtSetConfig"
echo "   • DtUsername, DtPassword, DtUuid"
echo "   • DtStartAppUpdate, DtStartApnActivity, DtShowLoggerDialog"
