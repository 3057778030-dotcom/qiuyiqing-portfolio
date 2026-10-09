(() => {
  const data = window.PORTFOLIO_DATA;
  if (!data) return;

  const page = document.body.dataset.page;
  if (page === "home") initHome();
  if (page === "detail") initDetail();

  function initHome() {
    renderProjectList();
    renderAwards();
    renderCarousel();
    renderModal();
    wireTimeline();
  }

  function renderProjectList() {
    const wrap = document.getElementById("project-list");
    if (!wrap) return;
    wrap.innerHTML = data.projects
      .map(
        (project, index) => `
          <button type="button" class="project-item fade-in delay-${Math.min(index + 1, 5)}" data-open-project="${project.slug}">
            <span>
              <strong>${project.title}</strong>
              <span>${project.category}</span>
            </span>
            <span>Open</span>
          </button>`
      )
      .join("");

    wrap.querySelectorAll("[data-open-project]").forEach((button) => {
      button.addEventListener("click", () => openModal(button.dataset.openProject));
    });
  }

  function renderAwards() {
    const wrap = document.getElementById("awards-grid");
    if (!wrap) return;
    wrap.innerHTML = data.awards
      .map((item, index) => {
        const media = item.type === "pdf"
          ? `<div class="snippet" style="min-height: 280px; display: grid; align-content: center; justify-items: center; text-align: center;">
               <strong style="letter-spacing: .18em; text-transform: uppercase; color: var(--muted-2); font-size: 11px;">PDF</strong>
               <p style="margin-top: 10px;">${item.detail}</p>
               <a class="award-link" href="${item.image}" target="_blank" rel="noreferrer">打开 PDF</a>
             </div>`
          : `<img src="${item.image}" alt="${item.title}" style="height: 260px;" />`;

        return `
          <article class="award-card fade-in delay-${Math.min(index + 1, 5)}">
            ${media}
            <h4>${item.title}</h4>
            <p>${item.detail}</p>
            ${item.type !== "pdf" ? `<a class="award-link" href="${item.image}" target="_blank" rel="noreferrer">打开原图</a>` : ""}
          </article>`;
      })
      .join("");
  }

  function renderCarousel() {
    const orbit = document.getElementById("carousel-orbit");
    const stage = document.getElementById("carousel-stage");
    if (!orbit || !stage) return;

    const radius = Math.min(250, Math.max(180, stage.clientWidth * 0.26));
    let angle = -25;

    orbit.innerHTML = data.projects
      .map((project, index) => {
        const turn = index * 120;
        return `
          <article class="carousel-card ${index === 0 ? "is-active" : ""}" data-project="${project.slug}" style="--angle:${turn}deg; --radius:${radius}px;">
            <figure>
              <img src="${project.coverImage}" alt="${project.title}" />
              <figcaption>
                <h4>${project.title}</h4>
                <p>${project.summary}</p>
              </figcaption>
            </figure>
          </article>`;
      })
      .join("");

    const cards = [...orbit.querySelectorAll(".carousel-card")];
    const list = [...document.querySelectorAll(".project-item")];

    const sync = () => {
      cards.forEach((card, index) => {
        const current = angle + index * 120;
        card.style.setProperty("--angle", `${current}deg`);
        card.style.setProperty("--radius", `${radius}px`);
        const normalized = ((current % 360) + 360) % 360;
        const distance = Math.min(normalized, 360 - normalized);
        const active = distance < 35;
        card.classList.toggle("is-active", active);
        if (active) {
          list.forEach((item) => item.classList.toggle("is-active", item.dataset.openProject === card.dataset.project));
        }
      });
    };

    sync();

    stage.addEventListener(
      "wheel",
      (event) => {
        angle += event.deltaY * 0.06;
        sync();
      },
      { passive: true }
    );

    cards.forEach((card) => {
      card.addEventListener("click", () => openModal(card.dataset.project));
    });

    let ticking = false;
    window.addEventListener("resize", () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        const nextRadius = Math.min(250, Math.max(180, stage.clientWidth * 0.26));
        cards.forEach((card) => card.style.setProperty("--radius", `${nextRadius}px`));
        ticking = false;
      });
    });
  }

  function renderModal() {
    const modal = document.getElementById("project-modal");
    if (!modal) return;
    modal.addEventListener("click", (event) => {
      if (event.target === modal || event.target.hasAttribute("data-close-modal")) {
        closeModal();
      }
    });
    window.addEventListener("keydown", (event) => {
      if (event.key === "Escape") closeModal();
    });
  }

  function openModal(slug) {
    const modal = document.getElementById("project-modal");
    const project = data.projects.find((item) => item.slug === slug) || data.projects[0];
    if (!modal || !project) return;

    document.getElementById("modal-title").textContent = project.title;
    document.getElementById("modal-summary").textContent = project.summary;
    document.getElementById("modal-fit").textContent = project.fit;
    document.getElementById("modal-live").href = project.livePath;

    const tags = document.getElementById("modal-tags");
    tags.innerHTML = project.tags.map((tag) => `<span class="tag">${tag}</span>`).join("");

    const notes = document.getElementById("modal-notes");
    notes.innerHTML = project.modalNotes
      .map(
        (note) => `
        <div class="project-item" style="cursor: default;">
          <span>
            <strong>${note}</strong>
            <span>${project.alias}</span>
          </span>
        </div>`
      )
      .join("");

    const snippets = document.getElementById("modal-snippets");
    snippets.innerHTML = project.snippets
      .map(
        (item) => `
        <div class="snippet">
          <strong>${item.label}</strong>
          <p>${escapeHtml(item.text)}</p>
        </div>`
      )
      .join("");

    const mosaic = document.getElementById("modal-mosaic");
    mosaic.innerHTML = [project.heroImage, project.coverImage]
      .map((src) => `<img src="${src}" alt="${project.title}" />`)
      .join("");

    modal.classList.add("is-open");
    modal.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
  }

  function closeModal() {
    const modal = document.getElementById("project-modal");
    if (!modal) return;
    modal.classList.remove("is-open");
    modal.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
  }

  function wireTimeline() {
    const cards = [...document.querySelectorAll(".timeline-card")];
    if (!cards.length) return;

    const update = () => {
      const center = window.innerHeight * 0.5;
      cards.forEach((card) => {
        const rect = card.getBoundingClientRect();
        const cardCenter = rect.top + rect.height / 2;
        const distance = Math.abs(cardCenter - center);
        const progress = Math.max(0, 1 - distance / (window.innerHeight * 0.78));
        card.style.setProperty("--tilt", `${(progress - 0.5) * -10}deg`);
        card.style.setProperty("--lift", `${Math.round(progress * -10)}px`);
        card.classList.toggle("is-active", progress > 0.55);
      });
    };

    let pending = false;
    const onScroll = () => {
      if (pending) return;
      pending = true;
      requestAnimationFrame(() => {
        update();
        pending = false;
      });
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    cards.forEach((card) => {
      card.addEventListener("mouseenter", update);
    });
    update();
  }

  function initDetail() {
    const project = readProjectFromQuery();
    if (!project) return;

    document.title = `${project.title} · 作品详情页`;
    const title = document.getElementById("detail-title");
    const desc = document.getElementById("detail-desc");
    const fit = document.getElementById("detail-fit");
    const live = document.getElementById("detail-live");
    const galleryHeading = document.getElementById("gallery-heading");
    const galleryCopy = document.getElementById("gallery-copy");
    const facts = document.getElementById("detail-facts");
    const grid = document.getElementById("gallery-grid");

    title.textContent = project.title;
    desc.textContent = project.summary;
    fit.textContent = project.fit;
    live.href = "index.html#works";
    live.textContent = "View Works";
    galleryHeading.textContent = project.alias;
    galleryCopy.textContent =
      "右侧的六张卡片用高低错落的画廊排版承载截图、代码片段、说明与证明材料，悬停时会从黑白平滑恢复彩色。";

    facts.innerHTML = `
      <div class="fact"><span>Category</span><strong>${project.category}</strong></div>
      <div class="fact"><span>Tag Count</span><strong>${project.tags.length} Tags</strong></div>
      <div class="fact"><span>Focus</span><strong>海外用户增长</strong></div>
      <div class="fact"><span>Mode</span><strong>Horizontal Scroll</strong></div>
    `;

    grid.innerHTML = project.detailCards
      .map((card) => {
        if (card.kind === "image" || card.kind === "proof") {
          return `
            <article class="gallery-card ${card.span}">
              <img src="${card.src}" alt="${card.caption}" style="height:${galleryMediaHeight(card.span)}px;" />
              <div class="copy">
                <h5>${card.kind === "proof" ? "Proof" : "Visual"}</h5>
                <p>${card.caption}</p>
              </div>
            </article>`;
        }
        if (card.kind === "code") {
          return `
            <article class="gallery-card ${card.span}">
              <div class="copy">
                <h5>${card.title}</h5>
                <pre>${escapeHtml(card.copy)}</pre>
              </div>
            </article>`;
        }
        return `
          <article class="gallery-card ${card.span}">
            <div class="copy">
              <h5>${card.title}</h5>
              <p>${card.copy}</p>
            </div>
          </article>`;
      })
      .join("");

    attachHorizontalInertia(document.getElementById("detail-shell"));
  }

  function readProjectFromQuery() {
    const params = new URLSearchParams(location.search);
    const slug = params.get("project") || "jobhunt";
    return data.projects.find((project) => project.slug === slug) || data.projects[0];
  }

  function attachHorizontalInertia(container) {
    if (!container) return;
    let velocity = 0;
    let raf = 0;

    const step = () => {
      if (Math.abs(velocity) < 0.25) {
        raf = 0;
        velocity = 0;
        return;
      }
      container.scrollLeft += velocity;
      velocity *= 0.92;
      raf = requestAnimationFrame(step);
    };

    container.addEventListener(
      "wheel",
      (event) => {
        if (window.innerWidth < 1180) return;
        event.preventDefault();
        velocity += event.deltaY * 0.85 + event.deltaX * 0.35;
        if (!raf) raf = requestAnimationFrame(step);
      },
      { passive: false }
    );
  }

  function galleryMediaHeight(span) {
    if (span === "wide") return 330;
    if (span === "tall") return 520;
    if (span === "medium") return 400;
    return 280;
  }

  function escapeHtml(value) {
    return value
      .replaceAll("&", "&amp;")
      .replaceAll("<", "&lt;")
      .replaceAll(">", "&gt;")
      .replaceAll('"', "&quot;")
      .replaceAll("'", "&#39;");
  }
})();
