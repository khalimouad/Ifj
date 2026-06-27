/* ============================================================
   IFJ SUP – App JavaScript
   ============================================================ */

// ── Splash ──────────────────────────────────────────────────
window.addEventListener('DOMContentLoaded', () => {
  const splash = document.getElementById('splash');
  const app = document.getElementById('app');
  setTimeout(() => {
    splash.style.display = 'none';
    app.classList.remove('hidden');
    app.classList.add('app-ready');
    animateStats();
  }, 2600);
});

// ── Navigation ───────────────────────────────────────────────
const pages = document.querySelectorAll('.page');
const navItems = document.querySelectorAll('.nav-item[data-page]');

function navigateTo(pageId) {
  pages.forEach(p => p.classList.remove('active-page'));
  navItems.forEach(n => n.classList.remove('active-nav'));

  const target = document.getElementById('page-' + pageId);
  if (target) {
    target.classList.add('active-page');
    target.scrollTop = 0;
    window.scrollTo({ top: 0, behavior: 'instant' });
  }
  navItems.forEach(n => {
    if (n.dataset.page === pageId) n.classList.add('active-nav');
  });

  // Update drawer active link
  document.querySelectorAll('.drawer-link').forEach(l => {
    l.classList.toggle('active-link', l.dataset.page === pageId);
  });

  closeDrawer();
}

navItems.forEach(item => {
  item.addEventListener('click', () => navigateTo(item.dataset.page));
});

// CTA buttons & quick cards
document.addEventListener('click', e => {
  const btn = e.target.closest('[data-page]');
  if (btn && !btn.classList.contains('nav-item') && !btn.classList.contains('drawer-link')) {
    navigateTo(btn.dataset.page);
  }
  if (btn && btn.classList.contains('drawer-link')) {
    navigateTo(btn.dataset.page);
  }
});

// ── Hero Slider ──────────────────────────────────────────────
const slides = document.querySelectorAll('.hero-slide');
const dots = document.querySelectorAll('.dot');
let currentSlide = 0;
let sliderTimer;

function goToSlide(n) {
  slides[currentSlide].classList.remove('active-slide');
  dots[currentSlide].classList.remove('active-dot');
  currentSlide = (n + slides.length) % slides.length;
  slides[currentSlide].classList.add('active-slide');
  dots[currentSlide].classList.add('active-dot');
}

function startSlider() {
  sliderTimer = setInterval(() => goToSlide(currentSlide + 1), 4500);
}

dots.forEach(dot => {
  dot.addEventListener('click', () => {
    clearInterval(sliderTimer);
    goToSlide(parseInt(dot.dataset.slide));
    startSlider();
  });
});

// Touch swipe on hero
const heroSlider = document.querySelector('.hero-slider');
let touchStartX = 0;
heroSlider?.addEventListener('touchstart', e => { touchStartX = e.touches[0].clientX; }, { passive: true });
heroSlider?.addEventListener('touchend', e => {
  const dx = e.changedTouches[0].clientX - touchStartX;
  if (Math.abs(dx) > 50) {
    clearInterval(sliderTimer);
    goToSlide(currentSlide + (dx < 0 ? 1 : -1));
    startSlider();
  }
});

startSlider();

// ── Stats Counter ─────────────────────────────────────────────
function animateStats() {
  const nums = document.querySelectorAll('.stat-num[data-target]');
  nums.forEach(el => {
    const target = parseInt(el.dataset.target);
    const duration = 1400;
    const start = performance.now();
    function tick(now) {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      el.textContent = Math.round(eased * target).toLocaleString('fr-FR');
      if (progress < 1) requestAnimationFrame(tick);
    }
    requestAnimationFrame(tick);
  });
}

// ── Search ───────────────────────────────────────────────────
const searchBtn = document.getElementById('searchBtn');
const searchClose = document.getElementById('searchClose');
const searchOverlay = document.getElementById('searchOverlay');
const searchInput = document.getElementById('searchInput');
const searchResults = document.getElementById('searchResults');

const searchData = [
  { title: 'Formation Journalisme', desc: 'Licence BAC+3 en journalisme print, radio et TV', page: 'programs' },
  { title: 'Ingénierie Audiovisuelle', desc: 'Réalisation, production et postproduction TV', page: 'programs' },
  { title: 'Médias Numériques', desc: 'Journalisme web, réseaux sociaux et podcasting', page: 'programs' },
  { title: 'Diplomatie Sportive', desc: 'Journalisme sportif et relations internationales', page: 'programs' },
  { title: 'Technicien Journalisme', desc: 'Formation niveau BAC au journalisme', page: 'programs' },
  { title: 'Technicien Audiovisuel', desc: 'Production audiovisuelle niveau BAC', page: 'programs' },
  { title: 'Campus Casablanca', desc: '97c Boulevard Hassan Seghir, Derb Omar', page: 'contact' },
  { title: 'Campus Marrakech', desc: '23 Angle Yacoub Mansour, Espace Guéliz', page: 'contact' },
  { title: 'Al Jazeera – Formation présentateurs', desc: 'Formation intensive de 5 jours', page: 'news' },
  { title: 'Partenariat Aïn Chock', desc: 'Accord de coopération communal', page: 'news' },
  { title: 'Médiathèque', desc: 'Vidéos, photos et émissions radio étudiantes', page: 'media' },
  { title: 'À Propos – IFJ Sup', desc: 'Depuis 1994, pionnier de la formation journalistique', page: 'about' },
];

searchBtn?.addEventListener('click', () => {
  searchOverlay.classList.remove('hidden');
  setTimeout(() => searchInput.focus(), 100);
});
searchClose?.addEventListener('click', () => searchOverlay.classList.add('hidden'));

searchInput?.addEventListener('input', () => {
  const q = searchInput.value.trim().toLowerCase();
  if (!q) { searchResults.innerHTML = ''; return; }
  const hits = searchData.filter(d =>
    d.title.toLowerCase().includes(q) || d.desc.toLowerCase().includes(q)
  );
  if (!hits.length) {
    searchResults.innerHTML = '<p class="search-no-result">Aucun résultat trouvé.</p>';
    return;
  }
  searchResults.innerHTML = hits.map(h => `
    <div class="search-result-item" data-page="${h.page}">
      <h4>${h.title}</h4>
      <p>${h.desc}</p>
    </div>
  `).join('');
  searchResults.querySelectorAll('.search-result-item').forEach(item => {
    item.addEventListener('click', () => {
      searchOverlay.classList.add('hidden');
      searchInput.value = '';
      searchResults.innerHTML = '';
      navigateTo(item.dataset.page);
    });
  });
});

// ── Drawer Menu ──────────────────────────────────────────────
const menuBtn = document.getElementById('menuBtn');
const drawer = document.getElementById('drawer');
const drawerOverlay = document.getElementById('drawerOverlay');
const drawerClose = document.getElementById('drawerClose');

menuBtn?.addEventListener('click', () => drawer.classList.remove('hidden'));
function closeDrawer() { drawer.classList.add('hidden'); }
drawerOverlay?.addEventListener('click', closeDrawer);
drawerClose?.addEventListener('click', closeDrawer);

// ── FAQ Accordion ────────────────────────────────────────────
document.querySelectorAll('.faq-question').forEach(btn => {
  btn.addEventListener('click', () => {
    const item = btn.closest('.faq-item');
    const isOpen = item.classList.contains('open');
    document.querySelectorAll('.faq-item').forEach(i => i.classList.remove('open'));
    if (!isOpen) item.classList.add('open');
  });
});

// ── Program Filter ───────────────────────────────────────────
document.querySelectorAll('.filter-tab').forEach(tab => {
  tab.addEventListener('click', () => {
    document.querySelectorAll('.filter-tab').forEach(t => t.classList.remove('active-tab'));
    tab.classList.add('active-tab');
    const filter = tab.dataset.filter;
    document.querySelectorAll('.prog-card').forEach(card => {
      if (filter === 'all' || card.dataset.category === filter) {
        card.classList.remove('hidden');
      } else {
        card.classList.add('hidden');
      }
    });
  });
});

// ── News Filter ──────────────────────────────────────────────
document.querySelectorAll('.news-chip').forEach(chip => {
  chip.addEventListener('click', () => {
    document.querySelectorAll('.news-chip').forEach(c => c.classList.remove('active-chip'));
    chip.classList.add('active-chip');
    const cat = chip.dataset.cat;
    document.querySelectorAll('.news-full-card').forEach(card => {
      if (cat === 'all' || card.dataset.cat === cat) {
        card.classList.remove('hidden');
      } else {
        card.classList.add('hidden');
      }
    });
  });
});

// ── Media Tabs ───────────────────────────────────────────────
document.querySelectorAll('.media-tab').forEach(tab => {
  tab.addEventListener('click', () => {
    document.querySelectorAll('.media-tab').forEach(t => t.classList.remove('active-media-tab'));
    tab.classList.add('active-media-tab');
    const type = tab.dataset.media;
    document.querySelectorAll('.media-card').forEach(card => {
      if (type === 'all' || card.dataset.type === type) {
        card.classList.remove('hidden');
      } else {
        card.classList.add('hidden');
      }
    });
  });
});

// ── Campus Tabs ──────────────────────────────────────────────
document.querySelectorAll('.campus-tab').forEach(tab => {
  tab.addEventListener('click', () => {
    document.querySelectorAll('.campus-tab').forEach(t => t.classList.remove('active-campus'));
    tab.classList.add('active-campus');
    const campus = tab.dataset.campus;
    document.querySelectorAll('.campus-panel').forEach(panel => {
      panel.classList.toggle('hidden', panel.id !== 'campus-' + campus);
    });
  });
});

// ── Contact Form ─────────────────────────────────────────────
document.getElementById('contactForm')?.addEventListener('submit', e => {
  e.preventDefault();
  showToast('Message envoyé avec succès ! ✓');
  e.target.reset();
});

// ── Toast ─────────────────────────────────────────────────────
function showToast(msg) {
  const toast = document.getElementById('toast');
  toast.textContent = msg;
  toast.classList.remove('hidden');
  setTimeout(() => toast.classList.add('hidden'), 3000);
}

// ── Media card click ─────────────────────────────────────────
document.querySelectorAll('.media-card').forEach(card => {
  card.addEventListener('click', () => showToast('Contenu bientôt disponible'));
});

// ── Scroll to top on page change ─────────────────────────────
document.querySelectorAll('.nav-item').forEach(item => {
  item.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'instant' }));
});
