/* =========================================================
   SITE CONFIG — edit this file to fill in your details.
   No backend needed: everything here is rendered in the page.
   ========================================================= */

window.SITE_CONFIG = {
  /* ---------- Contact details (replace the placeholders) ---------- */
  contact: {
    phone: "0531238113",            // shown & used for tel: link
    whatsapp: "+966594098486",            // digits only, with country code, e.g. 9665XXXXXXXX
    email: "durat.alkhalij97@gmail.com",
    address_en: "33 Al Hawra, Yanbu 46424, Saudi Arabia",
    address_ar: "الحوراء, ينبع, السعودية",
    hours_en: "Saturday -- Friday: 9:00 AM -- 11:00 PM",
    hours_ar: "السبت -- الخميس: ٩ صباحاً -- 11 مساءً",
    // Google Maps → Share → "Embed a map" → copy ONLY the src="..." URL from the iframe code.
    mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m16!1m11!1m3!1d3!2d38.0507306!3d24.0947887!2m2!1f0!2f90!3m2!1i1024!2i768!4f87.61153275249885!3m3!1m2!1s0x15b907bedcf650db%3A0x7fdedc6a46251cd8!2z2YXYpNiz2LPYqSDYr9ix2Kkg2KfZhNiu2YTZitisINmE2YTYo9ir2KfYqw!4v1794656283293",
    // Fallback if mapEmbedUrl is "": pin location as "latitude,longitude" (both "" hides the map).
    mapCoords: "24.0949322,38.0506568",
    // Normal Google Maps share link — used for the "Open in Google Maps" button.
    mapLink: "https://maps.app.goo.gl/69Wu35zekvvdSzXN6",
  },

  /* ---------- Social links (leave "" to hide) ---------- */
  social: {
    instagram: "",
    facebook: "",
    tiktok: "",
    x: "",
  },

  /* ---------- Gallery ----------
     1. Put your photos in  assets/images/gallery/
     2. Add one entry per photo below.
     category: "home" | "office" | "decor"  (used by the filter buttons)
  */
  gallery: [
    { src: "assets/images/gallery/home1.jpg", category: "home", title_en: "Living Room Set", title_ar: "طقم غرفة معيشة" },
    { src: "assets/images/gallery/office2.jpg", category: "office", title_en: "Executive Desk", title_ar: "مكتب تنفيذي" },
    { src: "assets/images/gallery/home3.jpg", category: "home", title_en: "Bedroom Suite", title_ar: "غرفة نوم" },
    { src: "assets/images/gallery/office3.jpg", category: "office", title_en: "Ergonomic Chair", title_ar: "كرسي مريح" },
    { src: "assets/images/gallery/home5.jpg", category: "decor", title_en: "Lighting & Decor", title_ar: "إضاءة وديكور" },
    { src: "assets/images/gallery/home6.jpg", category: "home", title_en: "Dining Table", title_ar: "طاولة طعام" },
  ],
};
