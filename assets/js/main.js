(function () {
  "use strict";

  const cfg = window.SITE_CONFIG || { contact: {}, social: {}, gallery: [] };

  /* ---------------- Translations ---------------- */
  const AR = {
    "nav.home": "الرئيسية",
    "nav.about": "من نحن",
    "nav.gallery": "معرض الصور",
    "nav.contact": "تواصل معنا",
    "hero.eyebrow": "أثاث منزلي ومكتبي",
    "hero.title1": "أثاث يحوّل المساحات",
    "hero.title2": "إلى أماكن تنبض بالحياة",
    "hero.text": "درة الخليج للأثاث تصمم وتوفر أثاثاً عالي الجودة للمنازل والمكاتب — من غرف المعيشة الدافئة وغرف النوم الأنيقة إلى بيئات العمل العصرية والعملية.",
    "hero.cta1": "شاهد أعمالنا",
    "hero.cta2": "تواصل معنا",
    "svc.home.t": "أثاث منزلي",
    "svc.home.d": "غرف معيشة، غرف نوم، طاولات طعام وغرف أطفال.",
    "svc.office.t": "أثاث مكتبي",
    "svc.office.d": "مكاتب، كراسي مريحة، طاولات اجتماعات ووحدات تخزين.",
    "svc.decor.t": "ديكور وإضاءة",
    "svc.decor.d": "أباجورات، أرفف، مرايا ولمسات نهائية مميزة.",
    "svc.custom.t": "تصميم حسب الطلب",
    "svc.custom.d": "قطع مفصّلة بمقاسات تناسب مساحتك.",
    "about.eyebrow": "من نحن",
    "about.title": "صُنع للراحة، وبُني ليدوم",
    "about.p1": "في درة الخليج نؤمن أن الأثاث أكثر من مجرد وظيفة — فهو يشكّل طريقة عيشك وعملك. نقدم تشكيلة مختارة بعناية من الأثاث المنزلي والمكتبي تجمع بين التصميم العصري والراحة العملية والخامات المتينة.",
    "about.p2": "سواء كنت تؤثث منزلاً جديداً، أو تجدد غرفة واحدة، أو تجهز مكتباً بالكامل، يساعدك فريقنا في اختيار القطع المناسبة، ويوصلها إلى باب منزلك، ويركّبها بعناية.",
    "about.c1": "خامات وتشطيبات عالية الجودة",
    "about.c2": "أسعار تنافسية وواضحة",
    "about.c3": "توصيل وتركيب احترافي",
    "about.c4": "مقاسات وألوان حسب الطلب",
    "about.s1": "سنوات من الخبرة",
    "about.s2": "عميل سعيد",
    "about.s3": "منتج",
    "about.s4": "التزام بالجودة",
    "gallery.eyebrow": "معرض الصور",
    "gallery.title": "لمحة عن تشكيلاتنا",
    "gallery.all": "الكل",
    "gallery.home": "منزلي",
    "gallery.office": "مكتبي",
    "gallery.decor": "ديكور",
    "gallery.empty": "لا توجد صور بعد.",
    "contact.eyebrow": "تواصل معنا",
    "contact.title": "دعنا نؤثث مساحتك",
    "contact.phone": "الهاتف",
    "contact.whatsapp": "واتساب",
    "contact.email": "البريد الإلكتروني",
    "contact.address": "العنوان",
    "contact.hours": "ساعات العمل",
    "contact.openMap": "افتح في خرائط جوجل",
    "form.name": "الاسم",
    "form.phone": "رقم الهاتف",
    "form.message": "رسالتك",
    "form.whatsapp": "إرسال عبر واتساب",
    "form.email": "إرسال عبر البريد",
    "form.subject": "استفسار من الموقع",
    "footer.name": "درة الخليج للأثاث",
    "footer.rights": "جميع الحقوق محفوظة.",
  };
  const EN_EXTRA = { "gallery.empty": "No images yet.", "form.subject": "Website inquiry" };

  // Capture the English text already in the HTML as the EN dictionary
  const EN = { ...EN_EXTRA };
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    EN[el.dataset.i18n] = el.innerHTML.trim();
  });

  let lang = "ar";
  try { lang = localStorage.getItem("lang") || "ar"; } catch (e) {}

  const t = (key) => (lang === "ar" ? AR[key] : EN[key]) || EN[key] || key;

  function applyLang() {
    const html = document.documentElement;
    html.lang = lang;
    html.dir = lang === "ar" ? "rtl" : "ltr";
    document.querySelectorAll("[data-i18n]").forEach((el) => {
      el.innerHTML = t(el.dataset.i18n);
    });
    document.getElementById("langToggle").textContent = lang === "ar" ? "English" : "العربية";
    renderContact();
    renderGallery();
  }

  document.getElementById("langToggle").addEventListener("click", () => {
    lang = lang === "ar" ? "en" : "ar";
    try { localStorage.setItem("lang", lang); } catch (e) {}
    applyLang();
  });

  /* ---------------- Contact ---------------- */
  function renderContact() {
    const c = cfg.contact || {};
    const set = (id, v) => { const el = document.getElementById(id); if (el) el.textContent = v || "—"; };

    set("cPhone", c.phone);
    set("cWhats", c.whatsapp ? "+" + c.whatsapp.replace(/\D/g, "") : "");
    set("cEmail", c.email);
    set("cAddress", lang === "ar" ? c.address_ar : c.address_en);
    set("cHours", lang === "ar" ? c.hours_ar : c.hours_en);

    document.getElementById("cPhoneLink").href = "tel:" + (c.phone || "").replace(/[^\d+]/g, "");
    document.getElementById("cWhatsLink").href = "https://wa.me/" + (c.whatsapp || "").replace(/\D/g, "");
    document.getElementById("cEmailLink").href = "mailto:" + (c.email || "");

    const socials = document.getElementById("socials");
    const names = { instagram: "Instagram", facebook: "Facebook", tiktok: "TikTok", x: "X" };
    socials.innerHTML = "";
    Object.entries(cfg.social || {}).forEach(([k, url]) => {
      if (!url) return;
      const a = document.createElement("a");
      a.href = url; a.target = "_blank"; a.rel = "noopener";
      a.textContent = names[k] || k;
      socials.appendChild(a);
    });

    const map = document.getElementById("mapWrap");
    const addrLink = document.getElementById("cAddressLink");
    if (c.mapLink) addrLink.href = c.mapLink; else addrLink.removeAttribute("href");

    // Use the Google Maps "Embed a map" URL if given; otherwise build one from coordinates.
    // (Share links like maps.app.goo.gl can't be iframed.)
    const embedSrc = c.mapEmbedUrl ||
      (c.mapCoords ? `https://www.google.com/maps/embed?origin=mfe&pb=!1m3!2m1!1s${encodeURIComponent(c.mapCoords.replace(/\s/g, ""))}!6i17` : "");
    if (embedSrc && !map.dataset.loaded) {
      const f = document.createElement("iframe");
      f.src = embedSrc;
      f.loading = "lazy"; f.title = "Map"; f.allowFullscreen = true;
      f.referrerPolicy = "strict-origin-when-cross-origin";
      map.prepend(f); map.hidden = false; map.dataset.loaded = "1";
    }
    const openBtn = document.getElementById("mapOpen");
    if (openBtn) {
      openBtn.hidden = !c.mapLink;
      if (c.mapLink) openBtn.href = c.mapLink;
    }
  }

  /* Contact form → WhatsApp / mailto (no backend) */
  const form = document.getElementById("contactForm");
  let sendVia = "whatsapp";
  form.querySelectorAll("[data-send]").forEach((b) =>
    b.addEventListener("click", () => (sendVia = b.dataset.send))
  );
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const d = new FormData(form);
    const body = `${d.get("message")}\n\n— ${d.get("name")}${d.get("phone") ? " | " + d.get("phone") : ""}`;
    const c = cfg.contact || {};
    if (sendVia === "whatsapp") {
      window.open(`https://wa.me/${(c.whatsapp || "").replace(/\D/g, "")}?text=${encodeURIComponent(body)}`, "_blank", "noopener");
    } else {
      window.location.href = `mailto:${c.email || ""}?subject=${encodeURIComponent(t("form.subject"))}&body=${encodeURIComponent(body)}`;
    }
  });

  /* ---------------- Gallery ---------------- */
  const grid = document.getElementById("galleryGrid");
  let currentFilter = "all";
  let visible = [];

  function renderGallery() {
    const items = cfg.gallery || [];
    grid.innerHTML = "";
    if (!items.length) {
      grid.innerHTML = `<p class="empty">${t("gallery.empty")}</p>`;
      return;
    }
    items.forEach((item, i) => {
      const title = (lang === "ar" ? item.title_ar : item.title_en) || "";
      const btn = document.createElement("button");
      btn.type = "button";
      btn.className = "g-item";
      btn.dataset.category = item.category || "";
      btn.dataset.index = i;
      btn.innerHTML = `<img src="${item.src}" alt="" loading="lazy" /><span class="cap"></span>`;
      btn.querySelector("img").alt = title;
      btn.querySelector(".cap").textContent = title;
      btn.addEventListener("click", () => openLightbox(i));
      grid.appendChild(btn);
    });
    applyFilter();
  }

  function applyFilter() {
    visible = [];
    grid.querySelectorAll(".g-item").forEach((el) => {
      const show = currentFilter === "all" || el.dataset.category === currentFilter;
      el.classList.toggle("hide", !show);
      if (show) visible.push(Number(el.dataset.index));
    });
  }

  document.getElementById("filters").addEventListener("click", (e) => {
    const b = e.target.closest("button[data-filter]");
    if (!b) return;
    document.querySelectorAll("#filters button").forEach((x) => x.classList.remove("active"));
    b.classList.add("active");
    currentFilter = b.dataset.filter;
    applyFilter();
  });

  /* Lightbox */
  const lb = document.getElementById("lightbox");
  const lbImg = document.getElementById("lbImg");
  const lbCap = document.getElementById("lbCap");
  let lbPos = 0;

  function showLb() {
    const item = cfg.gallery[visible[lbPos]];
    const title = (lang === "ar" ? item.title_ar : item.title_en) || "";
    lbImg.src = item.src; lbImg.alt = title; lbCap.textContent = title;
  }
  function openLightbox(index) {
    lbPos = Math.max(0, visible.indexOf(index));
    showLb(); lb.hidden = false; document.body.style.overflow = "hidden";
  }
  function closeLightbox() { lb.hidden = true; document.body.style.overflow = ""; }
  function step(d) { lbPos = (lbPos + d + visible.length) % visible.length; showLb(); }

  document.getElementById("lbClose").addEventListener("click", closeLightbox);
  document.getElementById("lbPrev").addEventListener("click", () => step(-1));
  document.getElementById("lbNext").addEventListener("click", () => step(1));
  lb.addEventListener("click", (e) => { if (e.target === lb) closeLightbox(); });
  document.addEventListener("keydown", (e) => {
    if (lb.hidden) return;
    if (e.key === "Escape") closeLightbox();
    if (e.key === "ArrowRight") step(1);
    if (e.key === "ArrowLeft") step(-1);
  });

  /* ---------------- Nav: mobile menu, scroll state, active link ---------------- */
  const menuBtn = document.getElementById("menuToggle");
  const navLinks = document.getElementById("navLinks");
  menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("open");
    menuBtn.classList.toggle("open");
  });
  navLinks.querySelectorAll("a").forEach((a) =>
    a.addEventListener("click", () => { navLinks.classList.remove("open"); menuBtn.classList.remove("open"); })
  );

  const header = document.getElementById("header");
  window.addEventListener("scroll", () => header.classList.toggle("scrolled", window.scrollY > 10), { passive: true });

  const sections = document.querySelectorAll("main section[id]");
  const linkFor = (id) => navLinks.querySelector(`a[href="#${id}"]`);
  const navObs = new IntersectionObserver((entries) => {
    entries.forEach((en) => {
      if (en.isIntersecting) {
        navLinks.querySelectorAll("a").forEach((a) => a.classList.remove("active"));
        const l = linkFor(en.target.id); if (l) l.classList.add("active");
      }
    });
  }, { rootMargin: "-45% 0px -50% 0px" });
  sections.forEach((s) => navObs.observe(s));

  /* Reveal on scroll */
  const revealEls = document.querySelectorAll(".service, .about-grid > *, .section-head, .contact-grid > *");
  revealEls.forEach((el) => el.classList.add("reveal"));
  const revObs = new IntersectionObserver((entries) => {
    entries.forEach((en) => { if (en.isIntersecting) { en.target.classList.add("visible"); revObs.unobserve(en.target); } });
  }, { threshold: 0.12 });
  revealEls.forEach((el) => revObs.observe(el));

  document.getElementById("year").textContent = new Date().getFullYear();

  applyLang();
})();
