# Puertas Premium by Ilitia

Sitio web de **Puertas Premium**, la línea de puertas pivotantes de panel de aluminio de **Ilitia — Puertas, ventanas y más**.

Es una página animada y responsiva. Muestra proyectos reales y tiene un configurador interactivo para que el cliente diseñe su puerta y la cotice por WhatsApp en un clic.

---

## Características

- **Portada animada** con fotos que se alternan con un acercamiento lento.
- **Galería de proyectos reales** (14 puertas). Las que tienen varias fotos las alternan con un fundido suave.
- **Configurador de puertas**
  - 23 modelos de diseño
  - 30 colores en 4 familias: semibrillo, metalizados, maderas y texturizados
  - 4 configuraciones: sola, con fijo superior, con fijo lateral, o lateral y superior
  - Herrajes: jaladera, jaladera con chapa digital, o manija
  - La puerta gira sobre su eje, como un sistema pivotante real
  - El botón **Cotizar esta puerta** abre WhatsApp con la combinación ya escrita
- **Secciones informativas** sobre cerraduras y el sistema pivotante.
- **Contacto** por WhatsApp, botón flotante y redes sociales (Facebook, Instagram, TikTok y correo).
- **Diseño responsivo**: computadora, tablet (≤ 1100 px) y celular (≤ 820 px), con menú de hamburguesa, carrusel deslizable y vista previa fija de la puerta en el configurador.

## Tecnologías

- HTML5
- CSS3 (animaciones con `@keyframes` y media queries)
- JavaScript puro, sin frameworks ni dependencias
- Google Fonts: Cormorant Garamond, Roboto Slab e Inter

## Estructura del proyecto

```
puertas-premium/
├── index.html        # Estructura y textos de todas las secciones
├── css/
│   └── styles.css    # Animaciones y reglas responsivas
├── js/
│   └── main.js       # Menú móvil, galería y configurador
└── img/              # Fotografías y logo
```

## Correr en local

Clona el repositorio:

```bash
git clone https://github.com/Ximena1906/puertas-premium.git
cd puertas-premium
```

Luego usa cualquiera de estas opciones:

| Opción | Comando | Dirección |
|---|---|---|
| Node | `npx serve .` | http://localhost:3000 |
| Python | `python -m http.server 8000` | http://localhost:8000 |
| VS Code | Extensión **Live Server** → clic derecho en `index.html` → *Open with Live Server* | http://127.0.0.1:5500 |

## Despliegue

Es un sitio estático, así que no necesita build.

**Netlify**: *Add new site → Import from GitHub*
- Build command: *(vacío)*
- Publish directory: `.`

**Render**: *New → Static Site*
- Build command: `echo "sin build"`
- Publish directory: `.`

Cada `git push` a la rama `main` vuelve a publicar el sitio automáticamente.

## Personalización

Todo lo editable del configurador y la galería está en `js/main.js`:

| Qué cambiar | Dónde |
|---|---|
| Número de WhatsApp | Constante `WHATSAPP` y enlaces `wa.me/...` en `index.html` |
| Proyectos de la galería | Lista `PROJECTS`: `['Título', 'Detalle', ['foto-1.jpg', 'foto-2.jpg']]` |
| Colores | Lista `GROUPS`: `['Nombre', '#HEX']` |
| Modelos de puerta | Lista `MODELS`: `V(x)` vertical, `H(y)` horizontal, `D(x1,y1,x2,y2)` diagonal, en % de la hoja |

Para agregar un proyecto, copia la foto en `img/` y añade una línea a `PROJECTS`. Si le pones 2 o 3 fotos, se alternan solas.

## Pendientes

- [ ] Link de Facebook
- [ ] Link de Instagram
- [ ] Link de TikTok
- [ ] Correo electrónico
- [ ] Dominio personalizado

## Contacto

**Ilitia — Puertas, ventanas y más**
- WhatsApp: [771 747 4258](https://wa.me/527717474258)
- Web: [www.ilitia.com.mx](https://www.ilitia.com.mx)

---

Las imágenes de la portada son ilustrativas. Las de la galería corresponden a instalaciones de Ilitia.
