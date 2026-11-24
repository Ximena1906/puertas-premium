/* Puertas Premium by Ilitia — interacción del sitio */
(function () {
  'use strict';

  const WHATSAPP = '527717474258';

  /* ---------- Menú móvil ---------- */
  const menuBtn = document.getElementById('menu-btn');
  const mobileMenu = document.getElementById('mobile-menu');
  function setMenu(open) {
    mobileMenu.hidden = !open;
    menuBtn.setAttribute('aria-expanded', String(open));
    menuBtn.setAttribute('aria-label', open ? 'Cerrar menú' : 'Abrir menú');
    menuBtn.querySelector('.ic-open').toggleAttribute('hidden', open);
    menuBtn.querySelector('.ic-close').toggleAttribute('hidden', !open);
  }
  menuBtn.addEventListener('click', () => setMenu(mobileMenu.hidden));
  mobileMenu.querySelectorAll('[data-close-menu]').forEach((a) => a.addEventListener('click', () => setMenu(false)));

  /* ---------- Proyectos reales (fotos con transición) ---------- */
  const PROJECTS = [
    ['Pivotante caoba', 'Laterales ranurados y chapa digital', ['caoba-cerrada.jpg', 'caoba-abierta.jpg']],
    ['Negro con franjas de acero', 'Jaladera, chapa digital y fijo de vidrio', ['negro-acero-1.jpg', 'negro-acero-2.jpg']],
    ['Rojo vino ranurado', 'Ranuras horizontales y manija', ['vino-cerrada.jpg', 'vino-abierta.jpg']],
    ['Doble altura', 'Madera oscura hasta el plafón con manija', ['doble-altura-1.jpg', 'doble-altura-2.jpg']],
    ['Nogal con tablero', 'Diseño de paneles y manija', ['nogal-tablero-1.jpg', 'nogal-tablero-2.jpg']],
    ['Nogal en muro completo', 'Panel continuo con manija', ['nogal-muro.jpg']],
    ['Negro geométrico', 'Trazos en diagonal y jaladera', ['negro-geometrico.jpg']],
    ['Gris en muro panelado', 'Ranura vertical y chapa digital', ['gris-oscuro.jpg']],
    ['Nogal con ranuras', 'Jaladera y cerradura multipunto', ['nogal-multipunto.jpg']],
    ['Cobre con laterales ranurados', 'Jaladera negra y chapa digital', ['cobre-ranurada.jpg']],
    ['Nogal con franja negra', 'Chapa digital', ['nogal-franja-negra.jpg']],
    ['Madera oscura con fijo de vidrio', 'Jaladera y manija', ['oscura-fijo-vidrio.jpg']],
    ['Ranurada con mirilla de vidrio', 'Jaladera negra', ['ranurada-vidrio.jpg']],
    ['Lamas horizontales', 'Pivotante de gran formato', ['lamas-horizontales.jpg']]
  ];
  const esc = (t) => String(t).replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
  document.getElementById('projects').innerHTML = PROJECTS.map(([title, detail, photos]) => {
    const n = photos.length;
    const cls = n === 3 ? 'f3' : n === 2 ? 'f2' : '';
    const delays = n === 3 ? ['0s', '-8s', '-4s'] : n === 2 ? ['0s', '-4s'] : ['0s'];
    const imgs = photos.map((p, k) => `<img src="img/${p}" alt="${esc(title)}" loading="lazy" class="${cls}" style="position: absolute; inset: 0; width: 100%; height: 100%; object-fit: cover; display: block; animation-delay: ${delays[k]}">`).join('');
    const badge = n > 1 ? `<span style="position: absolute; top: 14px; right: 14px; display: inline-flex; align-items: center; gap: 6px; padding: 6px 10px; border-radius: 999px; background: rgba(10,10,10,0.6); font-size: 12px; color: #F2EFEA"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="3" y="5" width="14" height="14" rx="2"></rect><path d="M7 3h12a2 2 0 0 1 2 2v12"></path></svg>${n} fotos</span>` : '';
    return `<figure class="ph" style="margin: 0; position: relative; height: 480px; background: #1B1B1B">${imgs}${badge}
<figcaption style="position: absolute; left: 0; right: 0; bottom: 0; padding: 60px 22px 20px; background: linear-gradient(0deg, rgba(10,10,10,0.9), rgba(10,10,10,0))">
<p style="margin: 0 0 4px; font-family: 'Cormorant Garamond', serif; font-size: 26px; font-weight: 600">${esc(title)}</p>
<p style="margin: 0; font-size: 13px; color: #D6D1C9">${esc(detail)}</p></figcaption></figure>`;
  }).join('');

  /* ---------- Configurador ---------- */
  const V = (x, a = 0, b = 100) => ['v', x, a, b];
  const H = (y, a = 0, b = 100) => ['h', y, a, b];
  const D = (x1, y1, x2, y2) => ['d', x1, y1, x2, y2];
  const R = (x1, y1, x2, y2) => [H(y1, x1, x2), H(y2, x1, x2), V(x1, y1, y2), V(x2, y1, y2)];
  // 23 modelos: líneas en % del ancho/alto de la hoja
  const MODELS = [
    [], [H(7), V(86)], [V(83)], [H(8), H(92), V(84, 8, 92)], [H(8), H(92), V(84)],
    [V(70), V(76), V(82)], [V(82), H(91)], [V(28), V(72)], [H(10), H(86), V(28, 10, 86), V(72, 10, 86)], [H(14), H(86), V(28), V(72)],
    [...R(10, 5, 90, 95), H(36, 10, 90), H(66, 10, 90)],
    [...R(10, 5, 90, 95), D(10, 13, 90, 24), D(10, 46, 90, 34), D(10, 58, 90, 70), D(10, 90, 90, 80)],
    Array.from({ length: 20 }, (_, i) => V(22 + i * 4)),
    [H(13, 0, 72), V(28, 13, 100), V(72, 0, 86), H(86, 28, 100)], [V(28), H(33, 28, 100), H(66, 28, 100)],
    [V(18), V(24)], [V(18), V(24), V(82)], [V(18), V(24), H(26, 24, 100), H(42, 24, 100), H(60, 24, 100), H(26, 0, 18), H(52, 0, 18)],
    [V(18), V(24), V(76), V(82)], [H(10), H(90), V(18, 10, 90), V(24, 10, 90)], [H(10), H(90), V(18, 10, 90), V(24, 10, 90), V(82, 10, 90)],
    [H(10), H(90), V(18, 10, 90), V(24, 10, 90), V(82)], [H(10), H(90), V(18, 10, 90), V(24, 10, 90), V(76, 10, 90), V(82, 10, 90)]
  ];
  const segCss = (s, t) => {
    if (s[0] === 'v') return `left:${s[1]}%;top:${s[2]}%;width:${t};height:${s[3] - s[2]}%`;
    if (s[0] === 'h') return `left:${s[2]}%;top:${s[1]}%;width:${s[3] - s[2]}%;height:${t}`;
    const dx = s[3] - s[1], dy = (s[4] - s[2]) * 1.8;
    return `left:${s[1]}%;top:${s[2]}%;width:${Math.hypot(dx, dy)}%;height:${t};transform:rotate(${Math.atan2(dy, dx) * 180 / Math.PI}deg)`;
  };
  const segsHtml = (m, t, color) => m.map((s) => `<div style="position:absolute;transform-origin:0 0;background:${color};${segCss(s, t)}"></div>`).join('');

  const GROUPS = [
    { name: 'Semibrillo', k: 's', items: [['Negro', '#0B0B0C'], ['Blanco porcelana', '#EEEEEC'], ['Bronce', '#4E3D2B'], ['Azul cobalto', '#15213B'], ['Azul marino', '#0E3570'], ['Rojo', '#E22B26'], ['Rojo oscuro', '#9E0C16'], ['Naranja mate', '#E15613'], ['Amarillo', '#F7B10A']] },
    { name: 'Metalizados', k: 'm', items: [['Gris oscuro', '#5E605D'], ['Bronce 1001', '#857C5B'], ['Bronce 1002', '#7C6A5B'], ['Gris peltre', '#737476'], ['Café metálico', '#9A6048'], ['Jade plata', '#96A9A0'], ['Champaña', '#D4C7B6'], ['Plata dorado', '#A09684'], ['Arena dorado', '#C0A880']] },
    { name: 'Maderas', k: 'w', items: [['Sucupira', '#5F5545'], ['Castaña', '#7A3F22'], ['Caoba', '#B0662F'], ['Imbuia', '#2F2219'], ['Nogal', '#5D4736'], ['Roble miel', '#BBA88B']] },
    { name: 'Texturizados', k: 'i', items: [['Roja texturizada', '#3C1D12', 'roja'], ['Maple texturizada', '#A46922', 'maple'], ['Chocolate texturizada', '#3C3023', 'chocolate'], ['Nogal texturizada', '#38211A', 'nogal'], ['Madera clara texturizada', '#967A51', 'clara'], ['Madera oscura texturizada', '#44372E', 'oscura']] }
  ];
  const TEXTURE = {
    s: 'linear-gradient(115deg,rgba(255,255,255,0) 30%,rgba(255,255,255,.16) 45%,rgba(255,255,255,0) 60%),',
    m: 'linear-gradient(160deg,rgba(255,255,255,.22),rgba(255,255,255,0) 45%,rgba(0,0,0,.18)),repeating-linear-gradient(90deg,rgba(255,255,255,.05) 0 1px,transparent 1px 3px),',
    w: 'repeating-linear-gradient(178deg,rgba(0,0,0,.13) 0 2px,transparent 2px 7px),repeating-linear-gradient(181deg,rgba(255,255,255,.07) 0 1px,transparent 1px 13px),linear-gradient(90deg,rgba(0,0,0,.12),rgba(255,255,255,.06) 50%,rgba(0,0,0,.12)),',
    t: 'radial-gradient(rgba(0,0,0,.22) 1px,transparent 1.6px) 0 0/6px 6px,radial-gradient(rgba(255,255,255,.14) 1px,transparent 1.6px) 3px 2px/9px 9px,'
  };
  // 'i' = textura fotográfica de la muestra real (img/tx-*.jpg)
  const bgFor = (k, c, tx) => k === 'i' ? `url(img/tx-${tx}.jpg) center / cover no-repeat, ${c}` : TEXTURE[k] + c;
  const lum = (h) => { const n = parseInt(h.slice(1), 16); return (0.299 * (n >> 16) + 0.587 * ((n >> 8) & 255) + 0.114 * (n & 255)) / 255; };
  const CONFIGS = ['Sola', 'Con fijo superior', 'Con fijo lateral', 'Fijo lateral y superior'];
  const HARDWARE = ['Jaladera', 'Jaladera + chapa digital', 'Manija'];

  const state = { model: 11, group: 2, color: 4, cfg: 1, hw: 1, open: false };
  const pill = (on) => on ? 'background:#F4B350;color:#121212' : 'background:transparent;color:#F2EFEA';
  const pillBase = 'min-height:44px;padding:0 16px;border-radius:999px;cursor:pointer;font-size:14px;border:1px solid rgba(242,239,234,0.3);font-family:inherit;';
  const $ = (id) => document.getElementById(id);

  function render() {
    const g = GROUPS[state.group];
    const col = g.items[Math.min(state.color, g.items.length - 1)];
    const num = String(state.model + 1).padStart(2, '0');
    const finishBg = bgFor(g.k, col[1], col[2]);
    const lineColor = lum(col[1]) < 0.16 ? 'rgba(255,255,255,.2)' : 'rgba(0,0,0,.5)';

    $('models').innerHTML = MODELS.map((m, i) => {
      const on = i === state.model;
      return `<button type="button" class="thumb" data-model="${i}" aria-label="Modelo ${String(i + 1).padStart(2, '0')}" aria-pressed="${on}" style="display:flex;flex-direction:column;align-items:center;gap:4px;padding:6px;border-radius:10px;border:none;cursor:pointer;background:${on ? '#F4B350' : 'transparent'};box-shadow:${on ? '0 6px 18px rgba(244,179,80,.25)' : 'none'}">
<div style="position:relative;width:40px;height:72px;background:#FFFFFF;box-shadow:inset 0 0 0 1.5px #3A3A3A;overflow:hidden">${segsHtml(m.length > 10 ? m.filter((_, k) => k % 2 === 0) : m, '1px', '#3A3A3A')}<div style="position:absolute;left:4px;top:30%;width:2px;height:40%;background:#3A3A3A"></div></div>
<span style="font-size:11px;font-weight:600;color:${on ? '#121212' : '#B5B0A8'}">${String(i + 1).padStart(2, '0')}</span></button>`;
    }).join('');

    $('groups').innerHTML = GROUPS.map((x, i) => `<button type="button" data-group="${i}" aria-pressed="${i === state.group}" style="${pillBase}min-height:40px;font-size:13px;${pill(i === state.group)}">${x.name}</button>`).join('');
    $('finishes').innerHTML = g.items.map((x, i) => `<button type="button" class="chip" data-color="${i}" aria-label="${x[0]}" title="${x[0]}" aria-pressed="${x === col}" style="width:48px;height:48px;border-radius:50%;border:1px solid rgba(255,255,255,0.18);cursor:pointer;background:${bgFor(g.k, x[1], x[2])};box-shadow:${x === col ? '0 0 0 3px #161616, 0 0 0 5px #F4B350' : 'none'}"></button>`).join('');
    $('configs').innerHTML = CONFIGS.map((x, i) => `<button type="button" data-cfg="${i}" aria-pressed="${i === state.cfg}" style="${pillBase}${pill(i === state.cfg)}">${x}</button>`).join('');
    $('hardware').innerHTML = HARDWARE.map((x, i) => `<button type="button" data-hw="${i}" aria-pressed="${i === state.hw}" style="${pillBase}${pill(i === state.hw)}">${x}</button>`).join('');

    document.querySelectorAll('[data-bind="modelNum"]').forEach((el) => { el.textContent = num; });
    document.querySelectorAll('[data-bind="finishName"]').forEach((el) => { el.textContent = col[0].toUpperCase(); });
    document.querySelectorAll('.finish-bg').forEach((el) => { el.style.background = finishBg; });
    $('door-segs').innerHTML = segsHtml(MODELS[state.model], '3px', lineColor);
    $('door-leaf').style.transform = state.open ? 'rotateY(-80deg)' : 'rotateY(0deg)';
    $('toggle-door').textContent = state.open ? 'Cerrar puerta' : 'Abrir puerta';

    const flags = { hasTop: state.cfg === 1 || state.cfg === 3, hasSide: state.cfg === 2 || state.cfg === 3, hasBar: state.hw !== 2, isChapa: state.hw === 1, isManija: state.hw === 2 };
    document.querySelectorAll('[data-if]').forEach((el) => { el.hidden = !flags[el.dataset.if]; });

    const msg = `Hola Ilitia, me interesa una puerta pivotante modelo ${num}, color ${col[0]} (${g.name.toLowerCase()}), configuración: ${CONFIGS[state.cfg].toLowerCase()}, con ${HARDWARE[state.hw].toLowerCase()}. ¿Me pueden cotizar?`;
    $('wa-link').href = `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(msg)}`;
  }

  document.getElementById('disena').addEventListener('click', (e) => {
    const b = e.target.closest('button');
    if (!b) return;
    if (b.dataset.model !== undefined) state.model = +b.dataset.model;
    else if (b.dataset.group !== undefined) { state.group = +b.dataset.group; state.color = 0; }
    else if (b.dataset.color !== undefined) state.color = +b.dataset.color;
    else if (b.dataset.cfg !== undefined) state.cfg = +b.dataset.cfg;
    else if (b.dataset.hw !== undefined) state.hw = +b.dataset.hw;
    else if (b.id === 'toggle-door') state.open = !state.open;
    else return;
    render();
  });

  render();
})();
