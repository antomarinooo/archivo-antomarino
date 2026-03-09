pdfjsLib.GlobalWorkerOptions.workerSrc = 'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js';

/* ════════════════════════════════════════════════════
   DATOS — Editá aquí para agregar o cambiar proyectos
   ════════════════════════════════════════════════════ */
const PROJECTS = [
  {
    id: 'p1',
    number: '01',
    title: 'Investigación Identidad de Marca — Perro Caliente',
    subject: 'Taller Gráfico I',
    year: '2026',
    parte: 'Etapa de investigación',
    tags: ['investigación', 'identidad de marca', 'branding', 'comida'],
    description: 'Investigación histórica, cultural y visual sobre el perro caliente como objeto de diseño. Incluye antecedentes históricos de la salchicha, análisis de variedades latinoamericanas, estudio de referentes gráficos y estado del arte de marcas existentes.',
    cover: 'assets/img/img-pizzino.png',

    text: `
## Sobre el proyecto

Esta investigación aborda el **perro caliente como objeto de diseño de identidad de marca**, explorando su historia, sus variaciones culturales en Latinoamérica y el panorama visual de marcas existentes.

El trabajo está dividido en tres secciones principales que conforman la lámina.
    `,

    timeline: [
      { title: 'Investigación histórica', desc: 'Rastreo del origen de la salchicha desde la Antigua Grecia hasta su llegada a América. Fuentes documentales y académicas.' },
      { title: 'Análisis de variantes latinoamericanas', desc: 'Estudio comparativo del perro caliente en Venezuela, Chile, Argentina/Uruguay y Colombia.' },
      { title: 'Selección de base cultural', desc: 'Decisión de centrar la identidad en el perro caliente latinoamericano por su riqueza narrativa y filosfía "con todo".' },
      { title: 'Estado del arte — Norteamérica', desc: 'Análisis visual de marcas: Nathan\'s Famous, Oscar Mayer, Ball Park, Pink\'s Hot Dogs.' },
      { title: 'Estado del arte — Latinoamérica', desc: 'Análisis de Chori (AR), Perritos Chao (CL), Rulo (VE) y referentes gráficos de food branding contemporáneo.' },
      { title: 'Diagramación de lámina en Illustrator', desc: 'Síntesis visual de toda la investigación en 3 láminas A3.' },
    ],

    callout: {
      icon: '',
      text: 'Docentes: Andrea Torres, Ignacia Santillán\nTaller Gráfico I\n9 de Marzo de 2026.'
    },

    gallery: [
      { src: 'assets/img/img-nathans.png', caption: "Nathan's Famous — campaña de marca EE.UU. (Smithfield Foods, 2024)" },
      { src: 'assets/img/img-perritos-chao.png', caption: 'Perritos Chao — identidad visual Chile' },
      { src: 'assets/img/img-chompo-illus.png', caption: 'Chompo brand identity — versión ilustrada, rojo dominante (Taqwah, 2025)' },
      { src: 'assets/img/img-chompo-pack.png', caption: 'Chompo brand identity — sistema de packaging y aplicaciones (Taqwah, 2025)' },
      { src: 'assets/img/img-grub.png', caption: 'Grub brand identity — estética de fanzine, revista alternativa (Yassine, 2025)' },
      { src: 'assets/img/img-smash.png', caption: 'Smash, Eat & Repeat — tipografía que interactúa con el producto' },
      { src: 'assets/img/img-sabro.png', caption: 'Sabro brand identity — sistema gráfico con color oscuro de fondo (Pixel Picasso Studio, 2025)' },
      { src: 'assets/img/img-pizzino.png', caption: 'Pizzino — letras como personajes, stickers como sistema' },
      { src: 'assets/img/img-bigchill.png', caption: 'Big Chill — referencia visual' },
      { src: 'assets/img/barrio-italia.jpg', caption: 'Barrio Italia — Autoría propia, 2026' },
      { src: 'assets/img/barrio-italia-1.jpg', caption: 'Barrio Italia — Autoría propia, 2026' },
      { src: 'assets/img/barrio-italia-2.jpg', caption: 'Barrio Italia — Autoría propia, 2026' },
      { src: 'assets/img/barrio-italia-4.jpg', caption: 'Barrio Italia — Autoría propia, 2026' },
      { src: 'assets/img/barrio-italia-3.jpg', caption: 'Barrio Italia — Autoría propia, 2026' },
      { src: 'assets/img/barrio-italia-5.jpg', caption: 'Barrio Italia — Autoría propia, 2026' },
      { src: 'assets/img/mut-1.jpg', caption: 'Mercado Urbano Tobalaba - Autoría propia, 2026' },
      { src: 'assets/img/mut-4.jpg', caption: 'Mercado Urbano Tobalaba - Autoría propia, 2026' },
      { src: 'assets/img/mut-5.jpg', caption: 'Mercado Urbano Tobalaba - Autoría propia, 2026' },
      { src: 'assets/img/mut-6.jpg', caption: 'Mercado Urbano Tobalaba - Autoría propia, 2026' },
      { src: 'assets/img/mut-8.jpg', caption: 'Mercado Urbano Tobalaba - Autoría propia, 2026' },
      { src: 'assets/img/mut-13.jpg', caption: 'Mercado Urbano Tobalaba - Autoría propia, 2026' },
      { src: 'assets/img/mut-14.jpg', caption: 'Mercado Urbano Tobalaba - Autoría propia, 2026' },
      { src: 'assets/img/mut-19.jpeg', caption: 'Mercado Urbano Tobalaba - Autoría propia, 2026' },
      { src: 'assets/img/mut-20.jpeg', caption: 'Mercado Urbano Tobalaba - Autoría propia, 2026' },
      { src: 'assets/img/mut-21.jpeg', caption: 'Mercado Urbano Tobalaba - Autoría propia, 2026' },
      { src: 'assets/img/mut-22.jpeg', caption: 'Mercado Urbano Tobalaba - Autoría propia, 2026' },
      { src: 'assets/img/mut-23.jpeg', caption: 'Mercado Urbano Tobalaba - Autoría propia, 2026' },
      { src: 'assets/img/mut-24.jpeg', caption: 'Mercado Urbano Tobalaba - Autoría propia, 2026' },
    ],

    videos: [],

    pdfs: [
      {
        src: 'assets/pdf/c1-lamina-investigacion-taller-grafico-i-antonia-cajigal-copy.pdf',
        label: 'Lámina Investigación Identidad de Marca · Perro Caliente',
        description: '3 láminas A3 · Illustrator · Taller Gráfico I'
      },
    ],

    downloads: [
      { name: 'Lámina investigación', desc: 'PDF · 3 láminas A3', url: 'assets/pdf/c1-lamina-investigacion-taller-grafico-i-antonia-cajigal-copy.pdf', ext: 'PDF', size: '' },
    ],

    notes: `
**Herramientas:** Adobe Illustrator CC 2025

**Formato de entrega:** PDF · 3 láminas A3 (420 × 297 mm)

**Metodología:** La investigación combina fuentes historiográficas, gastronómicas, periodísticas y referencias de diseño contemporáneo. El análisis del estado del arte se realizó sobre marcas activas durante 2024–2025 en Behance, Instagram y sitios oficiales.

    `,

    references: [
      { text: 'Apitz, C. (2024). Filippo Costa, un ícono de la Cultura Urbana de Caracas.', url: 'https://carlosapitz.com/filippo-costa/' },
      { text: 'BBC Mundo. (2019). El sorprendente origen del hot dog.', url: 'https://www.bbc.com/mundo/vert-tra-49067202' },
      { text: 'Behance / Pixel Picasso Studio. (2025). Sabro brand identity.', url: 'https://www.behance.net/gallery/238949703/Sabro-Brand-Identity-Food-Branding' },
      { text: 'Behance / Taqwah. (2025). Chompo visual identity.', url: 'https://www.behance.net/gallery/239242725/Chompo-Visual-Identity-Business-Solution' },
      { text: 'Behance / Yassine. (2025). GRUB retro inspired restaurant branding.', url: 'https://www.behance.net/gallery/229056079/GRUB-Retro-Inspired-Restaurant-Branding' },
      { text: 'Castro, J. (2007). Puesto callejero de asquerositos [Fotografía].', url: 'https://www.flickr.com/photos/cibergaita/2058298398/in/photostream/' },
      { text: 'Chile Travel. (2023). Completo o "hotdog" chileno: uno de los platos más queridos en el país.', url: 'https://www.chile.travel/diario-de-viajes/completo-hotdog-chileno-uno-de-los-platos-mas-queridos-de-chile/' },
      { text: 'Chori. (2020). Chori brand identity [Facebook].', url: 'https://web.facebook.com/chorithames/' },
      { text: 'ComaBeba. (s.f.). Chori Buenos Aires.', url: 'https://comabeba.com/argentina/es/chori-buenos-aires/' },
      { text: 'El Colombiano. (s.f.). Perros calientes en Medellín: sin salchicha, con chorizo, mariscos y solomo.', url: 'https://www.elcolombiano.com/tendencias/perros-calientes-en-medellin-sin-salchica-con-chorizo-mariscos-y-solomo-KC24370138' },
      { text: 'El Tiempo. (2022). El maravilloso encanto del perro caliente colombiano.', url: 'https://www.eltiempo.com/cultura/gastronomia/hot-dogs-el-maravilloso-encanto-de-los-perros-calientes-colombianos-706278' },
      { text: 'Food Republic. (2023). 40 ways the world makes awesome hot dogs (ilustraciones de M. Houston).', url: 'https://www.foodrepublic.com/2015/05/19/40-ways-the-world-makes-awesome-hot-dogs/' },
      { text: 'FSIS / USDA. (2020). Sausage operations [PDF].', url: 'https://www.fsis.usda.gov/sites/default/files/media_file/2021-03/FPLIC_4a_Sausage_Operations.pdf' },
      { text: 'Gastronoming. (s.f.). Asquerositos: la versión venezolana de unos perritos calientes al completo.', url: 'https://www.gastronoming.com/asquerositos-la-version-venezolana-de-unos-perritos-calientes-al-completo/' },
      { text: 'Gibbs, A. (s.f.). El perro caliente y su historia en un viaje de siete sabores.', url: 'https://adrianagibbs.com/300-2/' },
      { text: 'Goldbelly. (s.f.). Pink\'s hot dogs chili cheese hot dog kit.', url: 'https://www.goldbelly.com/restaurants/pinks-hot-dogs/chili-cheese-hot-dog-kit-12-pack' },
      { text: 'History Cooperative. (2022). Why are hot dogs called hot dogs?', url: 'https://historycooperative.org/origin-of-hot-dogs/' },
      { text: 'Hola. (2021). Recetas de perrito caliente: día mundial del hot dog.', url: 'https://www.hola.com/cocina/noticias/20210423188256/recetas-perrito-caliente-hot-dog-dia-mundial/' },
      { text: 'HuffPost UK. (s.f.). Running a hot dog stand in New York.', url: 'https://www.huffingtonpost.co.uk/entry/running-a-hot-dog-stand-in-new-york-can-cost-you-as-much-as-r4-million-per-year_uk_5c7ea092e4b06e0d4c251463' },
      { text: 'Kurz-Gut. (s.f.). Historia de las salchichas alemanas: un símbolo de la gastronomía germana.', url: 'https://www.kurz-gut.com/historia-de-las-salchichas-alemanas-un-simbolo-de-la-gastronomia-germana' },
      { text: 'La Guía de Caracas. (2020). Filippo Saglimbeni: el primer perrocalentero de Caracas.', url: 'http://laguiadecaracas.net/18521/filippo-saglimbeni-el-primer-perrocalentero-de-caracas/' },
      { text: 'Lemoine, E. (2023). Venezuelan street-style hot dogs: perros calientes recipe.', url: 'https://enrilemoine.com/en/2023/07/04/venezuelan-street-style-hot-dogs-recipe-perros-calientes/' },
      { text: 'Museum of the City of New York. (s.f.). The hot dog [Historia].', url: 'https://www.mcny.org/story/hot-dog' },
      { text: 'MyPanna. (s.f.). Hot dogs en Venezuela: adaptación criolla de un clásico americano.', url: 'https://mypanna.com/gastronomia-internacional/hot-dogs-en-venezuela-adaptacion-criolla-de-un-clasico-americano/' },
      { text: 'Municipality of Providencia. (2024). Barrio Italia [Fotografías].', url: 'https://providencia.cl/provi/explora/noticias/hub-providencia/la-novena-semana-de-la-cocina-italiana-lleno-de-sabor-y-tradicion-a' },
      { text: 'Oscar Mayer. (s.f.). Oscar Mayer sausages [Imagen].', url: 'https://www.oscarmayer.com' },
      { text: 'Panes Venezolanos. (2025). Pan de perro caliente venezolano.', url: 'https://panesvenezolanos.com/panes-venezolanos/pan-de-perro-caliente/' },
      { text: 'SA Expeditions. (s.f.). Panchos, completos and cachorros-quentes: Latin America\'s giant hot dogs.', url: 'https://www.saexpeditions.com/blog/post/panchos-completos-cachorros-quentes-latams-giant-hotdogs' },
      { text: 'Smithfield Foods. (2024). Nathan\'s Famous introduces talking hot dog.', url: 'https://www.smithfieldfoods.com/press-room/nathan-s-famous-introduces-talking-hot-dog-to-promote-new-brand-platform/' },
      { text: 'The Conversation. (2016). How sausages conquered the globe.', url: 'https://theconversation.com/how-sausages-conquered-the-globe-67405' },
      { text: 'Wikimedia Commons. (s.f.). Puesto callejero de completos [Fotografía].', url: 'https://commons.wikimedia.org/wiki/File:Puesto_callejero_de_Completos_%28%22hot_dogs%29.JPG' },
    ],
  },
  /* ─── Acá podés agregar más proyectos ─── */
];
/* ════════════════════════════════════════════════════
   FIN DE DATOS
   ════════════════════════════════════════════════════ */

let currentView = 'home', lbImages = [], lbIdx = 0;
const isFileProtocol = window.location.protocol === 'file:';
const sidebar   = document.getElementById('sidebar');
const overlay   = document.getElementById('overlay');
const hamburger = document.getElementById('hamburger');
const sidebarClose = document.getElementById('sidebar-close');
const viewRoot  = document.getElementById('view-root');
const sidebarNav = document.getElementById('sidebar-nav');
const topbarName = document.getElementById('topbar-name');
const lightbox  = document.getElementById('lightbox');
const lbImg     = document.getElementById('lb-img');
const lbCaption = document.getElementById('lb-caption');
const lbCounter = document.getElementById('lb-counter');
const scrollFab = document.getElementById('scroll-fab');
const scrollFabIcon = document.getElementById('scroll-fab-icon');

const openSidebar  = () => { sidebar.classList.add('open'); overlay.classList.add('open'); document.body.style.overflow='hidden'; };
const closeSidebar = () => { sidebar.classList.remove('open'); overlay.classList.remove('open'); document.body.style.overflow=''; };
hamburger.addEventListener('click', openSidebar);
sidebarClose.addEventListener('click', closeSidebar);
overlay.addEventListener('click', closeSidebar);

function buildNav() {
  sidebarNav.innerHTML = `
    <div class="sb-group">
      <span class="sb-group-label">General</span>
      <button class="sb-item ${currentView==='home'?'active':''}" data-view="home">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>
        Inicio
      </button>
    </div>
    <div class="sb-sep"></div>
    <div class="sb-group">
      <span class="sb-group-label">Proyectos</span>
      ${PROJECTS.map(p=>`
        <button class="sb-item ${currentView===p.id?'active':''}" data-view="${p.id}">
          <span class="sb-project-icon" aria-hidden="true">🌭</span>
          ${p.number} — ${p.title}
        </button>`).join('')}
    </div>`;
  sidebarNav.querySelectorAll('.sb-item').forEach(btn => {
    btn.addEventListener('click', () => { navigate(btn.dataset.view); if(window.innerWidth<=768) closeSidebar(); });
  });
}

function navigate(id) { currentView=id; buildNav(); renderView(); window.scrollTo({top:0}); }

function updateScrollFab() {
  if (!scrollFab || !scrollFabIcon) return;
  const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
  const scrollTop = window.scrollY || document.documentElement.scrollTop || 0;

  if (maxScroll < 260) {
    scrollFab.classList.add('hidden');
    return;
  }

  scrollFab.classList.remove('hidden');
  const goTop = scrollTop > maxScroll * 0.45;
  scrollFab.dataset.direction = goTop ? 'up' : 'down';
  scrollFabIcon.textContent = goTop ? '↑' : '↓';
  const label = goTop ? 'Ir arriba' : 'Ir abajo';
  scrollFab.setAttribute('aria-label', label);
  scrollFab.title = label;
}

function renderView() {
  if (currentView==='home') { renderHome(); topbarName.textContent='Inicio'; }
  else { const p=PROJECTS.find(x=>x.id===currentView); if(p){ renderProject(p); topbarName.textContent=p.title; } }
}

function renderHome() {
  const cards = PROJECTS.map(p=>`
    <div class="project-card" data-view="${p.id}" tabindex="0" role="button">
      <img class="project-card-img" src="${p.cover}" alt="${p.title}" loading="lazy"/>
      <div class="project-card-body">
        <div class="project-card-num">${p.number} · ${p.subject} · ${p.parte||p.year}</div>
        <div class="project-card-title">${p.title}</div>
        <div class="project-card-sub">${p.year}</div>
        <div class="project-card-tags">${p.tags.map(t=>`<span class="badge">${t}</span>`).join('')}</div>
      </div>
    </div>`).join('');

  viewRoot.innerHTML = `
    <div class="page">
      <div class="page-header">
        <h1 class="page-title">Archivo Anto Marino</h1>
        <p class="page-desc">Repositorio de proyectos académicos de diseño · 2025–2026</p>
      </div>
      <div class="section">
        <div class="projects-grid">${cards}</div>
      </div>
    </div>
    ${footerHTML()}`;

  viewRoot.querySelectorAll('.project-card').forEach(card=>{
    const go=()=>navigate(card.dataset.view);
    card.addEventListener('click',go);
    card.addEventListener('keydown',e=>{ if(e.key==='Enter'||e.key===' ')go(); });
  });
}

function renderProject(p) {
  let html = `<div class="project-page">
    <button class="back-btn" id="back-btn">
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m12 19-7-7 7-7"/><path d="M19 12H5"/></svg>
      Volver a proyectos
    </button>
    <div class="project-header-card">
      <img class="project-cover" src="${p.cover}" alt="${p.title}"/>
      <div class="project-header-body">
        <div class="project-kicker">${p.subject} · ${p.year}${p.parte?' · '+p.parte:''}</div>
        <h2 class="project-title">${p.title}</h2>
        <p class="project-desc">${p.description}</p>
        <div class="project-meta-row">${p.tags.map(t=>`<span class="badge badge-secondary">${t}</span>`).join('')}</div>
      </div>
    </div>`;

  if (p.callout) {
    html += `<div class="callout">${p.callout.icon ? `<span class="callout-icon">${p.callout.icon}</span>` : ''}<div class="callout-body">${p.callout.text}</div></div>`;
  }

  // PDF PRIMERO — lámina destacada al tope
  if (p.pdfs?.length) {
    p.pdfs.forEach((pdf,i)=>{
      const cid=`pdfcanvas-${p.id}-${i}`;
      html+=`<div class="section">
        <div class="section-label">Lámina — ${esc(pdf.label)}</div>
        <div style="font-size:12px;color:var(--muted-foreground);margin-bottom:10px;">${esc(pdf.description)}</div>
        <div class="pdf-container">
          <div class="pdf-pages" id="${cid}"><div class="pdf-loading">Cargando lámina…</div></div>
          <div class="pdf-bar">
            <div class="pdf-info">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"/><polyline points="14 2 14 8 20 8"/></svg>
              ${esc(pdf.label)}
            </div>
            <a href="${esc(pdf.src)}" target="_blank" rel="noopener" class="btn btn-outline btn-sm">↗ Abrir en nueva pestaña</a>
          </div>
        </div>
      </div>`;
    });
  }

  if (p.text?.trim()) html+=`<div class="section"><div class="section-label">Contenido de la investigación</div><div class="prose">${marked.parse(p.text)}</div></div>`;

  if (p.timeline?.length) {
    html+=`<div class="section"><div class="section-label">Proceso de trabajo</div><div class="timeline">${
      p.timeline.map(t=>`<div class="tl-item"><div class="tl-line"><div class="tl-dot"></div><div class="tl-connector"></div></div><div class="tl-content"><div class="tl-title">${t.title}</div><div class="tl-subtitle">${t.desc}</div></div></div>`).join('')
    }</div></div>`;
  }

  if (p.gallery?.length) {
    html+=`<div class="section"><div class="section-label">Galería de imágenes — ${p.gallery.length} imágenes</div><div class="gallery-grid" id="gal-${p.id}">${
      p.gallery.map((img,i)=>`<div class="gallery-thumb" data-gi="${i}" tabindex="0" role="button"><img src="${img.src}" alt="${img.caption||''}" loading="lazy"/><div class="gallery-thumb-overlay"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7"/></svg></div></div>`).join('')
    }</div></div>`;
  }

  if (p.downloads?.length) {
    html+=`<div class="section"><div class="section-label">Descargables</div><div class="downloads-list">${
      p.downloads.map(d=>`<a class="dl-row" href="${esc(d.url)}" download target="_blank" rel="noopener">
        <div class="dl-ext ${d.ext.toLowerCase()}">${esc(d.ext)}</div>
        <div class="dl-info"><span class="dl-name">${esc(d.name)}</span><span class="dl-desc">${esc(d.desc)}</span></div>
        <span class="dl-size">${esc(d.size)}</span>
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" style="color:var(--muted-foreground);flex-shrink:0"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
      </a>`).join('')
    }</div></div>`;
  }

  if (p.notes?.trim()) html+=`<div class="section"><div class="section-label">Notas técnicas</div><div class="note-card"><div class="prose">${marked.parse(p.notes)}</div></div></div>`;

  if (p.references?.length) {
    const refToggleId = `ref-toggle-${p.id}`;
    html+=`<div class="section">
      <div class="ref-head">
        <div class="ref-title">Referencias bibliográficas (APA 7)</div>
        <span class="ref-count">${p.references.length} fuentes</span>
      </div>
      <div class="ref-list" id="${refToggleId}">${
        p.references.map((r, idx)=>`<div class="ref-item${idx >= 5 ? ' is-hidden' : ''}"><span class="ref-index">[${idx + 1}]</span><span class="ref-text">${esc(r.text)}</span>${r.url?` <a href="${esc(r.url)}" target="_blank" rel="noopener">Ver fuente</a>`:''}</div>`).join('')
      }</div>
      ${p.references.length > 5 ? `<button class="ref-more-btn" type="button" data-ref-target="${refToggleId}" aria-expanded="false"><span class="ref-more-icon" aria-hidden="true">▾</span><span class="ref-more-label">Ver más</span></button>` : ''}
    </div>`;
  }

  html+=`</div>${footerHTML()}`;
  viewRoot.innerHTML=html;
  document.getElementById('back-btn').addEventListener('click',()=>navigate('home'));

  if (p.gallery?.length) {
    lbImages=p.gallery;
    document.getElementById(`gal-${p.id}`).querySelectorAll('.gallery-thumb').forEach(el=>{
      const open=()=>openLightbox(+el.dataset.gi);
      el.addEventListener('click',open);
      el.addEventListener('keydown',e=>{ if(e.key==='Enter'||e.key===' ')open(); });
    });
  }

  setupReferencesToggle();

  if (p.pdfs?.length) p.pdfs.forEach((pdf,i)=>{ if(pdf.src) renderPDF(pdf.src,`pdfcanvas-${p.id}-${i}`); });
}

function setupReferencesToggle() {
  const buttons = viewRoot.querySelectorAll('.ref-more-btn');
  if (!buttons.length) return;

  buttons.forEach((btn) => {
    btn.addEventListener('click', () => {
      const targetId = btn.getAttribute('data-ref-target');
      if (!targetId) return;

      const list = document.getElementById(targetId);
      if (!list) return;

      const hiddenItems = list.querySelectorAll('.ref-item.is-hidden');
      const isExpanded = btn.getAttribute('aria-expanded') === 'true';
      const nextExpanded = !isExpanded;

      hiddenItems.forEach((item) => {
        item.style.display = nextExpanded ? 'block' : 'none';
      });

      btn.setAttribute('aria-expanded', String(nextExpanded));
      const label = btn.querySelector('.ref-more-label');
      if (label) label.textContent = nextExpanded ? 'Ver menos' : 'Ver más';
      btn.classList.toggle('expanded', nextExpanded);
    });
  });
}

async function renderPDF(src, cid) {
  const el=document.getElementById(cid); if(!el) return;

  // PDF.js suele fallar cuando el HTML se abre con file://. En ese caso mostramos fallback claro.
  if (isFileProtocol) {
    el.innerHTML = `<div class="pdf-loading">La previsualización de PDF puede fallar en modo local (<code>file://</code>). Abrí el proyecto con un servidor local para verlo aquí. Mientras tanto podés usar <a href="${esc(src)}" target="_blank" rel="noopener">este enlace directo al PDF</a>.</div>`;
    return;
  }

  try {
    const pdf=await pdfjsLib.getDocument(src).promise;
    el.innerHTML='';
    for(let n=1;n<=pdf.numPages;n++){
      const page=await pdf.getPage(n);
      const vp=page.getViewport({scale:1.6});
      const canvas=document.createElement('canvas');
      canvas.width=vp.width; canvas.height=vp.height;
      await page.render({canvasContext:canvas.getContext('2d'),viewport:vp}).promise;
      el.appendChild(canvas);
    }
  } catch(e){
    el.innerHTML=`<div class="pdf-loading">No se pudo cargar la lámina. Probá abrir el archivo en una pestaña nueva: <a href="${esc(src)}" target="_blank" rel="noopener">abrir PDF</a>.</div>`;
  }
}

function openLightbox(i){ lbIdx=i; updateLB(); lightbox.classList.add('open'); document.body.style.overflow='hidden'; }
function closeLightbox(){ lightbox.classList.remove('open'); document.body.style.overflow=''; }
function updateLB(){
  const img=lbImages[lbIdx];
  lbImg.src=img.src; lbImg.alt=img.caption||'';
  lbCaption.textContent=img.caption||'';
  lbCounter.textContent=`${lbIdx+1} / ${lbImages.length}`;
}
document.getElementById('lb-close').addEventListener('click',closeLightbox);
document.getElementById('lb-prev').addEventListener('click',()=>{ lbIdx=(lbIdx-1+lbImages.length)%lbImages.length; updateLB(); });
document.getElementById('lb-next').addEventListener('click',()=>{ lbIdx=(lbIdx+1)%lbImages.length; updateLB(); });
lightbox.addEventListener('click',e=>{ if(e.target===lightbox) closeLightbox(); });
document.addEventListener('keydown',e=>{
  if(!lightbox.classList.contains('open')) return;
  if(e.key==='Escape') closeLightbox();
  if(e.key==='ArrowLeft'){ lbIdx=(lbIdx-1+lbImages.length)%lbImages.length; updateLB(); }
  if(e.key==='ArrowRight'){ lbIdx=(lbIdx+1)%lbImages.length; updateLB(); }
});

if (scrollFab) {
  scrollFab.addEventListener('click', () => {
    const direction = scrollFab.dataset.direction === 'up' ? 'up' : 'down';
    const targetTop = direction === 'up' ? 0 : document.documentElement.scrollHeight;
    window.scrollTo({ top: targetTop, behavior: 'smooth' });
  });
  window.addEventListener('scroll', updateScrollFab, { passive: true });
  window.addEventListener('resize', updateScrollFab);
}

function footerHTML(){
  return `<footer>
    <div class="footer-grid">
      <div class="footer-about">
        <h3 class="footer-h">Sobre este archivo</h3>
        <p class="footer-p">Repositorio personal de proyectos académicos de diseño.</p>
        <div class="footer-bullets">
          <div class="footer-bullet"><div class="footer-dot"></div><span>Uso personal</span></div>
          <div class="footer-bullet"><div class="footer-dot"></div><span>Sin recolección de datos</span></div>
          <div class="footer-bullet"><div class="footer-dot"></div><span>Procesamiento local</span></div>
        </div>
      </div>
      <div class="footer-contact">
        <h3 class="footer-h">Contacto</h3>
        <div class="footer-btns">
          <a href="https://github.com/antomarinooo/" target="_blank" rel="noopener" class="footer-social">
            <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>
            GitHub
          </a>
          <a href="https://www.instagram.com/fusefolio/" target="_blank" rel="noopener" class="footer-social">
            <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
            Instagram
          </a>
        </div>
      </div>
    </div>
    <div class="footer-bottom">
      <p class="footer-copy">© ${new Date().getFullYear()} Anto Marino — Todos los derechos reservados</p>
      <div class="footer-tech">
        <span class="footer-tech-label">Hecho con</span>
        <span class="footer-tech-item">HTML</span>
        <span class="footer-tech-item">JS</span>
        <span class="footer-tech-item">CSS</span>
      </div>
    </div>
  </footer>`;
}

function esc(s){ if(!s) return ''; return String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;'); }

buildNav();
renderView();
updateScrollFab();
