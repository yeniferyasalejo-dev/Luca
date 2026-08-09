document.addEventListener('DOMContentLoaded', () => {
  const container = document.getElementById('categories-container');
  const navContainer = document.getElementById('category-nav-inner');

  // Group items by categoria, then subcategoria, preserving first-seen order
  const categories = [];
  const catMap = {};

  GIFTS.forEach(g => {
    if (!catMap[g.categoria]) {
      catMap[g.categoria] = { name: g.categoria, subcats: [], subMap: {} };
      categories.push(catMap[g.categoria]);
    }
    const cat = catMap[g.categoria];
    const subKey = g.subcategoria || '';
    if (!cat.subMap[subKey]) {
      cat.subMap[subKey] = { name: subKey, items: [] };
      cat.subcats.push(cat.subMap[subKey]);
    }
    cat.subMap[subKey].items.push(g);
  });

  const slug = (s) => s.toLowerCase()
    .normalize('NFD').replace(/[̀-ͯ]/g, '')
    .replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');

  categories.forEach(cat => {
    const catId = slug(cat.name);
    const icon = CATEGORY_ICONS[cat.name] || '🎁';
    const total = cat.subcats.reduce((n, s) => n + s.items.length, 0);

    // nav pill
    const pill = document.createElement('a');
    pill.href = `#cat-${catId}`;
    pill.className = 'pill';
    pill.textContent = cat.name;
    navContainer.appendChild(pill);

    // category section
    const section = document.createElement('section');
    section.className = 'category-block';
    section.id = `cat-${catId}`;

    const head = document.createElement('div');
    head.className = 'category-head';
    head.innerHTML = `
      <div class="category-icon">${icon}</div>
      <h3>${cat.name}</h3>
      <div class="category-count">${total} artículo${total === 1 ? '' : 's'}</div>
    `;
    section.appendChild(head);

    cat.subcats.forEach(sub => {
      if (sub.name) {
        const label = document.createElement('div');
        label.className = 'subcategory-label';
        label.textContent = sub.name;
        section.appendChild(label);
      }
      const grid = document.createElement('div');
      grid.className = 'items-grid';

      sub.items.forEach((item) => {
        const card = document.createElement('div');
        card.className = 'item-card';
        if (item.confirmar) card.classList.add('item-card-confirm');
        if (item.comprado) card.classList.add('item-card-comprado');

        card.innerHTML = `
          ${item.comprado ? `<div class="comprado-banner">Ya comprado</div>` : ''}
          <div class="item-name">${item.item}${item.confirmar ? ' <span class="confirm-star" title="Consultar con los papás antes de comprar">*</span>' : ''}${item.talla ? `<span class="item-talla">${item.talla}</span>` : ''}</div>
          ${item.descripcion ? `<div class="item-desc">${item.descripcion}</div>` : ''}
          ${item.confirmar ? `<div class="confirm-note">* Antes de comprar, por favor pregúntanos — esta referencia es especial según las necesidades de Luca.</div>` : ''}
        `;

        grid.appendChild(card);
      });

      section.appendChild(grid);
    });

    container.appendChild(section);
  });

  // Highlight active category pill on scroll
  const pills = document.querySelectorAll('.pill');
  const sections = document.querySelectorAll('.category-block');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        pills.forEach(p => p.classList.remove('active'));
        const match = document.querySelector(`.pill[href="#${entry.target.id}"]`);
        if (match) match.classList.add('active');
      }
    });
  }, { rootMargin: '-140px 0px -70% 0px' });
  sections.forEach(s => observer.observe(s));
});
