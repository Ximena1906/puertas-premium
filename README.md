# Puertas Premium by Ilitia — sitio web

Sitio estático: HTML, CSS y JavaScript sin dependencias ni instalación.

## Cómo abrirlo en Visual Studio Code
1. Descomprime la carpeta `puertas-premium` y ábrela en VS Code (Archivo → Abrir carpeta).
2. Instala la extensión **Live Server** (de Ritwick Dey).
3. Clic derecho sobre `index.html` → **Open with Live Server**. Se abre en tu navegador y se recarga al guardar.

También puedes abrir `index.html` con doble clic, pero con Live Server se ve igual que publicado.

## Estructura
```
index.html        Estructura y textos de todas las secciones
css/styles.css    Animaciones y reglas responsivas (celular ≤ 820 px, tablet ≤ 1100 px)
js/main.js        Menú móvil, galería de proyectos y configurador de puertas
img/              Fotos (ya sin logos) y logo claro de Ilitia
```

## Lo que falta completar (búscalo con Ctrl+F)
- `[LINK DE FACEBOOK]`
- `[LINK DE INSTAGRAM]`
- `[LINK DE TIKTOK]`
- `[CORREO ELECTRÓNICO]` (aparece como `mailto:[CORREO ELECTRÓNICO]` y como texto)

## Cambios frecuentes
- **Número de WhatsApp:** constante `WHATSAPP` al inicio de `js/main.js` y los enlaces `wa.me/527717474258` en `index.html`.
- **Agregar un proyecto a la galería:** copia la foto a `img/` y agrega una línea en la lista `PROJECTS` de `js/main.js`:
  `['Título', 'Detalle', ['foto-1.jpg', 'foto-2.jpg']]` (con 2 o 3 fotos se alternan solas).
- **Colores del configurador:** lista `GROUPS` en `js/main.js` (nombre y color hexadecimal).
- **Modelos de puerta:** lista `MODELS` en `js/main.js`; cada línea es `V(x)` vertical, `H(y)` horizontal o `D(x1,y1,x2,y2)` diagonal, en % de la hoja.

## Publicarlo
Sube la carpeta completa a tu hosting (cPanel, Netlify, Vercel, GitHub Pages…) con `index.html` en la raíz.
