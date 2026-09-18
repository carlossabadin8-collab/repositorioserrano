# 🔐 Serrano Cerrajeros - Página Web

Bienvenido a la página web profesional de **Serrano Cerrajeros**. Esta es una aplicación web moderna y responsiva para promover servicios de cerrajería y reparaciones del hogar.

## 📁 Estructura del Proyecto

```
serrano-cerrajeros/
├── index.html          # Archivo principal HTML
├── styles.css          # Estilos CSS
├── script.js           # Funcionalidad JavaScript
└── README.md           # Este archivo
```

## 🚀 Cómo Abrir y Ejecutar en VS Code

### Opción 1: Usando Live Server (Recomendado)

1. **Descarga la carpeta** `serrano-cerrajeros` en tu ordenador
2. **Abre la carpeta en VS Code**:
   - Abre VS Code
   - File → Open Folder
   - Selecciona la carpeta `serrano-cerrajeros`

3. **Instala la extensión Live Server**:
   - Ve a la pestaña de Extensiones (Ctrl+Shift+X o Cmd+Shift+X)
   - Busca "Live Server" (de Ritwick Dey)
   - Instala la extensión

4. **Ejecuta el servidor**:
   - Haz clic derecho en `index.html`
   - Selecciona "Open with Live Server"
   - ¡Tu página se abrirá automáticamente en el navegador!

### Opción 2: Abriendo directamente en el navegador

1. Descarga la carpeta `serrano-cerrajeros`
2. Abre la carpeta en VS Code
3. Haz clic derecho en `index.html` → "Open in Default Browser"
4. ¡Listo! La página se abrirá en tu navegador

### Opción 3: Usando Python (si lo tienes instalado)

1. Abre la terminal en VS Code (Ctrl+`)
2. Navega a la carpeta del proyecto:
   ```bash
   cd ruta/a/serrano-cerrajeros
   ```
3. Ejecuta uno de estos comandos:
   
   **Para Python 3:**
   ```bash
   python -m http.server 8000
   ```
   
   **Para Python 2:**
   ```bash
   python -m SimpleHTTPServer 8000
   ```

4. Abre tu navegador y ve a: `http://localhost:8000`

## 📝 Personalización

### Cambiar Datos de Contacto

En `index.html`, busca la sección de contacto y actualiza:

```html
<p><a href="tel:+34XXXXXXXXX">+34 XXX XXX XXX</a></p>
<p><a href="mailto:info@serranocerrajeros.com">info@serranocerrajeros.com</a></p>
```

### Cambiar Colores

En `styles.css`, modifica las variables de color (arriba del archivo):

```css
:root {
    --primary-yellow: #FFD700;  /* Amarillo principal */
    --dark-black: #1a1a1a;       /* Negro oscuro */
    /* ... más colores ... */
}
```

### Agregar Más Servicios

En `index.html`, copia un bloque `<div class="service-item">` y actualiza el contenido con tus nuevos servicios.

### Agregar Valoraciones

En `index.html`, copia un bloque `<div class="review-card">` en la sección de Valoraciones.

## 🎨 Características

- ✅ Navegación fluida entre secciones
- ✅ Diseño responsive (funciona en móvil, tablet y PC)
- ✅ Menú hamburguesa para dispositivos móviles
- ✅ Colores profesionales siguiendo tu logo
- ✅ Formulario de contacto funcional
- ✅ Animaciones suaves
- ✅ Secciones: Inicio, Servicios, Valoraciones, Contacto

## 💡 Consejos de Mejora

### 1. Integrar un formulario de email
Para que los mensajes se envíen realmente, puedes usar servicios como:
- **Formspree** (formspree.io)
- **Netlify Forms**
- **EmailJS**

### 2. Agregar tu logo personalizado
Reemplaza el emoji 🔐 en la navegación con tu imagen del logo en formato PNG o SVG.

### 3. Subir la página a internet
Una vez finalizada, puedes hospedar la página gratis en:
- **GitHub Pages** (gratuito)
- **Netlify** (gratuito)
- **Vercel** (gratuito)
- **Hosting tradicional** (con dominio propio)

## 📱 Responsive Design

La página está optimizada para:
- 📱 Móviles (320px+)
- 📱 Tablets (768px+)
- 💻 Computadoras (1200px+)

## 📞 Soporte

Si necesitas ayuda:
1. Revisa los comentarios en los archivos
2. Consulta la estructura HTML/CSS
3. Prueba en diferentes navegadores

## 📄 Licencia

Este proyecto es tuyo. Úsalo libremente para tu negocio.

---

**¡Éxito con tu página de Serrano Cerrajeros!** 🔐✨
