/* ============================================================
   Santuario Expediciones — main.js
   Header/footer partagés, nav, i18n (es/en), panier, filtres,
   formulaires.
   Les textes viennent de js/i18n.js (clé → { es, en }).
   ============================================================ */
(function () {
  "use strict";

  var SITE = {
    name: "Santuario Expediciones",
    email: "info@santuarioexpediciones.com",
    phone: "+56994365496",
    wa: "56994365496",
    address: "Camino a Cahuil 4851 A, 28021 Punta de Lobos, Pichilemu, Chile"
  };

  var WA_ICON = '<svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" style="vertical-align:-2px;margin-right:8px"><path d="M12 2a10 10 0 0 0-8.6 15L2 22l5.2-1.4A10 10 0 1 0 12 2zm5.3 14.2c-.2.6-1.2 1.2-1.7 1.2-.5.1-1 .2-3.4-.7-2.9-1.2-4.8-4.1-4.9-4.3-.1-.2-1.2-1.6-1.2-3s.7-2.1 1-2.4c.2-.3.5-.4.7-.4h.5c.2 0 .4 0 .6.4l.9 2.1c.1.2.1.4 0 .6l-.4.6-.5.5c-.1.1-.3.3-.1.6.2.3.8 1.3 1.7 2.1 1.2 1 2.1 1.4 2.4 1.5.3.1.5.1.6-.1l.9-1c.2-.3.4-.2.6-.1l2 1c.3.1.5.2.6.4 0 .1 0 .6-.2 1.2z"/></svg>';

  /* ---------- i18n ---------- */
  var DEFAULT_LANG = "es";
  var LANG_KEY = "santuario_lang";
  var PAGE_KEYS = {
    "index.html": "home",
    "kayak.html": "kayak",
    "trips-fotograficos.html": "foto",
    "trekking.html": "trek",
    "rutas-etnoculturales.html": "etno",
    "tienda.html": "shop",
    "reserva.html": "reserva",
    "equipo.html": "team",
    "voluntariado.html": "vol",
    "contact.html": "contact"
  };

  function getLang() {
    var m = (window.location.search.match(/[?&]lang=(es|en)/) || [])[1];
    if (m) { saveLang(m); return m; }
    var s = localStorage.getItem(LANG_KEY);
    return s === "en" ? "en" : DEFAULT_LANG;
  }
  function saveLang(l) { try { localStorage.setItem(LANG_KEY, l); } catch (e) {} }
  function setLang(l) {
    saveLang(l);
    // Retire ?lang= de l'URL pour que le choix manuel ne soit pas écrasé
    if (window.location.search.indexOf("lang=") !== -1) {
      var u = new URL(window.location.href);
      u.searchParams.delete("lang");
      history.replaceState(null, "", u.toString());
    }
    applyTranslations();
    refreshDynamic();
  }

  // pick("chaîne" | {es,en}) → valeur pour la langue active
  function pick(o) {
    if (o == null) return "";
    if (typeof o === "string") return o;
    return o[getLang()] || o[DEFAULT_LANG] || "";
  }
  function t(key) { return pick(I18N[key]); }

  function currentPage() {
    var p = window.location.pathname.split("/").pop() || "index.html";
    return p.toLowerCase();
  }

  function waUrl(kind) {
    var msg = kind === "products" ? t("ui.waShopDefault") : t("ui.waDefault");
    return "https://wa.me/" + SITE.wa + "?text=" + encodeURIComponent(msg);
  }

  function applyTranslations() {
    var lang = getLang();
    document.documentElement.lang = lang;
    document.querySelectorAll("[data-i18n],[data-i18n-html]").forEach(function (el) {
      var k = el.getAttribute("data-i18n") || el.getAttribute("data-i18n-html");
      if (!k) return;
      if (el.hasAttribute("data-i18n-html")) el.innerHTML = t(k);
      else el.textContent = t(k);
    });
    document.querySelectorAll("[data-i18n-aria]").forEach(function (el) {
      el.setAttribute("aria-label", t(el.getAttribute("data-i18n-aria")));
    });
    document.querySelectorAll("[data-i18n-alt]").forEach(function (el) {
      el.setAttribute("alt", t(el.getAttribute("data-i18n-alt")));
    });

    var page = PAGE_KEYS[currentPage()];
    if (page && META[page]) {
      document.title = pick(META[page].title);
      var d = document.querySelector('meta[name="description"]');
      if (d) d.setAttribute("content", pick(META[page].desc));
    }

    var lt = document.getElementById("langToggle");
    if (lt) {
      lt.textContent = (lang === "es" ? "en" : "es").toUpperCase();
      lt.setAttribute("aria-label", t("ui.langAria"));
      lt.setAttribute("title", t("ui.langAria"));
    }
  }

  /* ---------- Pages & nav ---------- */
  var NAV = [
    { key: "ui.navHome", href: "index.html" },
    { key: "ui.navExpeditions", children: [
      { key: "ui.navKayak", href: "kayak.html" },
      { key: "ui.navPhoto", href: "trips-fotograficos.html" },
      { key: "ui.navTrekking", href: "trekking.html" },
      { key: "ui.navEthno", href: "rutas-etnoculturales.html" }
    ]},
    { key: "ui.navShop", href: "tienda.html" },
    { key: "ui.navTeam", href: "equipo.html" },
    { key: "ui.navVolunteer", href: "voluntariado.html" },
    { key: "ui.navContact", href: "contact.html" }
  ];

  function navHTML() {
    var cur = currentPage();
    var html = '<nav class="main-nav" id="mainNav" aria-label="' + t("ui.navAria") + '">';
    NAV.forEach(function (item) {
      if (item.children) {
        html += '<div class="has-dropdown">' +
          '<button class="nav-link" type="button" aria-haspopup="true" aria-expanded="false">' +
          '<span data-i18n="' + item.key + '">' + t(item.key) + '</span> <span class="caret">▼</span></button>' +
          '<div class="dropdown">';
        item.children.forEach(function (c) {
          var active = cur === c.href ? ' class="is-active"' : "";
          html += '<a' + active + ' href="' + c.href + '" data-i18n="' + c.key + '">' + t(c.key) + "</a>";
        });
        html += "</div></div>";
      } else {
        var active = cur === item.href ? ' class="is-active"' : "";
        html += '<a' + active + ' href="' + item.href + '" data-i18n="' + item.key + '">' + t(item.key) + "</a>";
      }
    });
    html += "</nav>";
    return html;
  }

  function headerHTML() {
    return (
      '<a class="skip-link" href="#main" data-i18n="ui.skip">' + t("ui.skip") + "</a>" +
      '<header class="site-header" id="siteHeader">' +
        '<div class="container site-header__inner">' +
          '<a class="brand" href="index.html" aria-label="' + t("ui.brandAria") + '">' +
            '<img src="assets/img/logo-black.png" alt="Logo ' + SITE.name + '">' +
          "</a>" +
          navHTML() +
          '<div class="header-cta">' +
            '<a class="btn btn--outline btn--sm" href="reserva.html" data-i18n="ui.reserve">' + t("ui.reserve") + "</a>" +
            '<button class="lang-toggle" id="langToggle" type="button" aria-label="' + t("ui.langAria") + '" title="' + t("ui.langAria") + '">EN</button>' +
            '<button class="cart-btn" id="cartBtn" type="button" aria-label="' + t("ui.cartAria") + '" data-i18n-aria="ui.cartAria" style="display:none">' +
              '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><circle cx="9" cy="21" r="1.6"/><circle cx="19" cy="21" r="1.6"/><path d="M2 3h2.5l2.2 12.4a2 2 0 0 0 2 1.6h9.7a2 2 0 0 0 2-1.6L22 7H5.2"/></svg>' +
              '<span class="cart-count" id="cartCount" hidden>0</span>' +
            "</button>" +
            '<button class="menu-toggle" id="menuToggle" type="button" aria-label="' + t("ui.menuAria") + '" data-i18n-aria="ui.menuAria" aria-expanded="false">' +
              "<span></span><span></span><span></span>" +
            "</button>" +
          "</div>" +
        "</div>" +
      "</header>"
    );
  }

  function footerHTML() {
    var y = new Date().getFullYear();
    return (
      '<footer class="site-footer">' +
        '<div class="container site-footer__top">' +
          '<div class="site-footer__brand">' +
            '<img src="assets/img/logo.png" alt="' + SITE.name + '">' +
            '<p data-i18n="ui.footTagline">' + t("ui.footTagline") + "</p>" +
            '<div class="site-footer__social">' +
              '<a href="https://www.instagram.com/santuario_expediciones/" target="_blank" rel="noopener" aria-label="Instagram">' +
                '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.2" cy="6.8" r="1.1" fill="currentColor" stroke="none"/></svg>' +
              "</a>" +
              '<a class="wa-social" href="' + waUrl("expeditions") + '" target="_blank" rel="noopener" aria-label="WhatsApp">' +
                '<svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2a10 10 0 0 0-8.6 15L2 22l5.2-1.4A10 10 0 1 0 12 2zm5.3 14.2c-.2.6-1.2 1.2-1.7 1.2-.5.1-1 .2-3.4-.7-2.9-1.2-4.8-4.1-4.9-4.3-.1-.2-1.2-1.6-1.2-3s.7-2.1 1-2.4c.2-.3.5-.4.7-.4h.5c.2 0 .4 0 .6.4l.9 2.1c.1.2.1.4 0 .6l-.4.6-.5.5c-.1.1-.3.3-.1.6.2.3.8 1.3 1.7 2.1 1.2 1 2.1 1.4 2.4 1.5.3.1.5.1.6-.1l.9-1c.2-.3.4-.2.6-.1l2 1c.3.1.5.2.6.4 0 .1 0 .6-.2 1.2z"/></svg>' +
              "</a>" +
            "</div>" +
          "</div>" +
          '<div class="site-footer__cols"><h4 data-i18n="ui.footExp">' + t("ui.footExp") + "</h4><ul>" +
            '<li><a href="kayak.html" data-i18n="ui.navKayak">' + t("ui.navKayak") + "</a></li>" +
            '<li><a href="trips-fotograficos.html" data-i18n="ui.navPhoto">' + t("ui.navPhoto") + "</a></li>" +
            '<li><a href="trekking.html" data-i18n="ui.navTrekking">' + t("ui.navTrekking") + "</a></li>" +
            '<li><a href="rutas-etnoculturales.html" data-i18n="ui.navEthno">' + t("ui.navEthno") + "</a></li>" +
            '<li><a href="reserva.html" data-i18n="ui.reserve">' + t("ui.reserve") + "</a></li>" +
          "</ul></div>" +
          '<div class="site-footer__cols"><h4 data-i18n="ui.footAgency">' + t("ui.footAgency") + "</h4><ul>" +
            '<li><a href="tienda.html" data-i18n="ui.footShop">' + t("ui.footShop") + "</a></li>" +
            '<li><a href="equipo.html" data-i18n="ui.navTeam">' + t("ui.navTeam") + "</a></li>" +
            '<li><a href="voluntariado.html" data-i18n="ui.navVolunteer">' + t("ui.navVolunteer") + "</a></li>" +
            '<li><a href="index.html#novedades" data-i18n="ui.footNews">' + t("ui.footNews") + "</a></li>" +
          "</ul></div>" +
          '<div class="site-footer__cols"><h4 data-i18n="ui.footContact">' + t("ui.footContact") + "</h4><ul>" +
            '<li><a href="mailto:' + SITE.email + '">' + SITE.email + "</a></li>" +
            '<li><a href="tel:' + SITE.phone.replace("+", "") + '">' + SITE.phone + "</a></li>" +
            "<li>" + SITE.address + "</li>" +
          "</ul></div>" +
        "</div>" +
        '<div class="container site-footer__bottom">' +
          "<span>© " + y + " " + SITE.name + ".</span>" +
          '<span data-i18n="ui.footBottom">' + t("ui.footBottom") + "</span>" +
        "</div>" +
      "</footer>"
    );
  }

  function chromeHTML() {
    return (
      '<button class="to-top" id="toTop" type="button" aria-label="' + t("ui.toTopAria") + '" data-i18n-aria="ui.toTopAria">' +
        '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 19V5"/><path d="m5 12 7-7 7 7"/></svg>' +
      "</button>" +
      '<a class="wa-float" href="' + waUrl("expeditions") + '" target="_blank" rel="noopener" aria-label="' + t("ui.waAria") + '" data-i18n-aria="ui.waAria">' +
        '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2a10 10 0 0 0-8.6 15L2 22l5.2-1.4A10 10 0 1 0 12 2zm5.3 14.2c-.2.6-1.2 1.2-1.7 1.2-.5.1-1 .2-3.4-.7-2.9-1.2-4.8-4.1-4.9-4.3-.1-.2-1.2-1.6-1.2-3s.7-2.1 1-2.4c.2-.3.5-.4.7-.4h.5c.2 0 .4 0 .6.4l.9 2.1c.1.2.1.4 0 .6l-.4.6-.5.5c-.1.1-.3.3-.1.6.2.3.8 1.3 1.7 2.1 1.2 1 2.1 1.4 2.4 1.5.3.1.5.1.6-.1l.9-1c.2-.3.4-.2.6-.1l2 1c.3.1.5.2.6.4 0 .1 0 .6-.2 1.2z"/></svg>' +
      "</a>" +
      '<div class="cart-scrim" id="cartScrim"></div>' +
      '<aside class="cart-drawer" id="cartDrawer" aria-label="' + t("ui.cartTitle") + '">' +
        '<div class="cart-drawer__head"><h3 data-i18n="ui.cartTitle">' + t("ui.cartTitle") + '</h3><button class="cart-close" id="cartClose" type="button" aria-label="' + t("ui.cartCloseAria") + '" data-i18n-aria="ui.cartCloseAria">✕</button></div>' +
        '<div class="cart-drawer__body" id="cartItems"></div>' +
        '<div class="cart-drawer__foot">' +
          '<div class="cart-total"><span data-i18n="ui.cartTotal">' + t("ui.cartTotal") + '</span><span id="cartTotal">$0</span></div>' +
          '<a class="btn btn--primary" id="cartCheckout" href="#" data-i18n="ui.cartCheckout">' + t("ui.cartCheckout") + "</a>" +
        "</div>" +
      "</aside>" +
      '<div class="lightbox" id="lightbox" role="dialog" aria-modal="true" aria-label="' + t("ui.lightboxAria") + '">' +
        '<div class="lightbox__scrim" id="lightboxScrim"></div>' +
        '<div class="lightbox__panel">' +
          '<button class="lightbox__close" id="lightboxClose" type="button" aria-label="' + t("ui.lightboxClose") + '" data-i18n-aria="ui.lightboxClose">✕</button>' +
          '<button class="lightbox__nav lightbox__nav--prev" id="lightboxPrev" type="button" aria-label="' + t("ui.lightboxPrev") + '" data-i18n-aria="ui.lightboxPrev">‹</button>' +
          '<div class="lightbox__media"><img id="lightboxImg" src="" alt=""></div>' +
          '<div class="lightbox__info">' +
            '<span class="product-card__cat" id="lightboxCat"></span>' +
            '<h3 id="lightboxName"></h3>' +
            '<p class="product-card__price" id="lightboxPrice"></p>' +
            '<button class="btn btn--primary" id="lightboxAdd" type="button" data-i18n="ui.addToCart">' + t("ui.addToCart") + "</button>" +
          "</div>" +
          '<button class="lightbox__nav lightbox__nav--next" id="lightboxNext" type="button" aria-label="' + t("ui.lightboxNext") + '" data-i18n-aria="ui.lightboxNext">›</button>' +
          '<span class="lightbox__counter" id="lightboxCounter"></span>' +
        "</div>" +
      "</div>"
    );
  }

  /* ---------- Cartes cliquables ---------- */
  function initClickableCards() {
    document.addEventListener("click", function (ev) {
      if (ev.target.closest("a, button")) return;
      var card = ev.target.closest(".svc-card");
      if (!card) return;
      var link = card.querySelector(".svc-card__link");
      if (link) link.click();
    });
  }

  /* ---------- Injection header/footer/cadre ---------- */
  document.addEventListener("DOMContentLoaded", function () {
    var headerSlot = document.getElementById("headerSlot");
    var footerSlot = document.getElementById("footerSlot");
    if (headerSlot) headerSlot.outerHTML = headerHTML();
    if (footerSlot) footerSlot.outerHTML = footerHTML();
    if (!document.querySelector(".wa-float")) {
      document.body.insertAdjacentHTML("beforeend", chromeHTML());
    }

    initLang();
    initHeader();
    initReveals();
    initForms();
    initShop();
    renderHomeProducts();
    initReserva();
    initCart();
    initLightbox();
    initClickableCards();
    initStaticServices();
  });

  /* ---------- Langue ---------- */
  function initLang() {
    var toggle = document.getElementById("langToggle");
    if (toggle) {
      toggle.addEventListener("click", function () {
        setLang(getLang() === "es" ? "en" : "es");
      });
    }
    applyTranslations();
    refreshDynamic();
  }

  function refreshDynamic() {
    if (typeof renderHomeProducts === "function") renderHomeProducts();
    if (_shopRender) _shopRender();
    if (_reservaRender) _reservaRender();
    document.querySelectorAll("[data-wa]").forEach(function (a) {
      a.setAttribute("href", waUrl(a.getAttribute("data-wa")));
    });
    var waFloat = document.querySelector(".wa-float");
    if (waFloat) waFloat.setAttribute("href", waUrl("expeditions"));
    var waSocial = document.querySelector(".wa-social");
    if (waSocial) waSocial.setAttribute("href", waUrl("expeditions"));
    if (_cartRefresh) _cartRefresh();
    initStaticServices();
  }

  /* ---------- Cartes « Expediciones » : prix + WhatsApp depuis data.js ---------- */
  // Chaque carte statique porte data-svc=<id> (défini dans js/data.js).
  // Une seule source de vérité pour le prix et le message de réservation.
  function initStaticServices() {
    document.querySelectorAll("[data-svc]").forEach(function (card) {
      var svc = SERVICES.find(function (s) { return s.id === card.getAttribute("data-svc"); });
      if (!svc) return;

      var price = fmtCLPshort(svc.price);
      var priceEl = card.querySelector(".svc-card__price");
      if (priceEl) {
        var small = priceEl.querySelector("small");
        priceEl.innerHTML = "";
        priceEl.appendChild(document.createTextNode(price + " "));
        if (small) priceEl.appendChild(small);
      }

      var name = getLang() === "en" ? (svc.name_en || svc.name) : svc.name;
      var msg = encodeURIComponent(t("ui.waReserve") + ": " + name + " (" + svc.dur + ") — " + price);
      var href = "https://wa.me/" + SITE.wa + "?text=" + msg;
      var link = card.querySelector(".svc-card__link");
      if (link) link.href = href;
      var btn = card.querySelector(".btn--primary");
      if (btn) btn.href = href;
    });
  }

  /* ---------- Accueil : produits vedettes ---------- */
  // Les produits marqués « Más vendido » passent en premier ;
  // les autres complètent la sélection jusqu'à 4 cartes.
  function renderHomeProducts() {
    var grid = document.getElementById("homeProducts");
    if (!grid) return;
    var best = PRODUCTS.filter(function (p) { return p.badge === "Más vendido"; });
    var rest = PRODUCTS.filter(function (p) { return p.badge !== "Más vendido"; });
    grid.innerHTML = best.concat(rest).slice(0, 4).map(productCardHTML).join("");
  }

  /* ---------- Lightbox produits ---------- */
  function initLightbox() {
    var lb = document.getElementById("lightbox");
    if (!lb) return;
    var imgEl = document.getElementById("lightboxImg");
    var nameEl = document.getElementById("lightboxName");
    var catEl = document.getElementById("lightboxCat");
    var priceEl = document.getElementById("lightboxPrice");
    var addBtn = document.getElementById("lightboxAdd");
    var counter = document.getElementById("lightboxCounter");
    var list = [];
    var idx = 0;

    function cardData(card) {
      var im = card.querySelector(".product-card__img img");
      return {
        img: im ? im.src : "",
        name: (card.querySelector("h3") || { innerText: "" }).innerText,
        cat: (card.querySelector(".product-card__cat") || { innerText: "" }).innerText,
        price: (card.querySelector(".product-card__price") || { innerText: "" }).innerText,
        add: card.querySelector("[data-add]")
      };
    }

    function show(i) {
      idx = (i + list.length) % list.length;
      var d = cardData(list[idx]);
      imgEl.src = d.img;
      imgEl.alt = d.name;
      nameEl.textContent = d.name;
      catEl.textContent = d.cat;
      priceEl.textContent = d.price;
      addBtn.onclick = function () {
        if (d.add) d.add.click();
        close();
      };
      counter.textContent = (idx + 1) + " / " + list.length;
    }

    function open(card) {
      var container = card.parentElement;
      list = container ? [...container.querySelectorAll(".product-card")] : [card];
      idx = list.indexOf(card);
      if (idx < 0) return;
      show(idx);
      lb.classList.add("open");
      document.body.classList.add("lb-open");
    }

    function close() {
      lb.classList.remove("open");
      document.body.classList.remove("lb-open");
    }

    // Ouvrir au clic sur l'image produit
    document.addEventListener("click", function (ev) {
      var imgWrap = ev.target.closest(".product-card__img");
      if (imgWrap) {
        var card = imgWrap.closest(".product-card");
        if (card) open(card);
      }
    });

    document.getElementById("lightboxClose").addEventListener("click", close);
    document.getElementById("lightboxScrim").addEventListener("click", close);
    document.getElementById("lightboxPrev").addEventListener("click", function () { show(idx - 1); });
    document.getElementById("lightboxNext").addEventListener("click", function () { show(idx + 1); });

    document.addEventListener("keydown", function (e) {
      if (!lb.classList.contains("open")) return;
      if (e.key === "Escape") close();
      if (e.key === "ArrowLeft") show(idx - 1);
      if (e.key === "ArrowRight") show(idx + 1);
    });
  }

  /* ---------- Header behaviors ---------- */
  function initHeader() {
    var header = document.getElementById("siteHeader");
    var toggle = document.getElementById("menuToggle");
    var nav = document.getElementById("mainNav");

    var toTop = document.getElementById("toTop");
    function onScroll() {
      if (header) header.classList.toggle("scrolled", window.scrollY > 10);
      if (toTop) toTop.classList.toggle("show", window.scrollY > 600);
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    if (toTop) {
      toTop.addEventListener("click", function () {
        window.scrollTo({ top: 0, behavior: "smooth" });
      });
    }

    if (toggle && nav) {
      toggle.addEventListener("click", function () {
        var open = document.body.classList.toggle("menu-open");
        toggle.setAttribute("aria-expanded", open ? "true" : "false");
      });
    }

    // Dropdown mobile : bouton « Expediciones »
    var ddBtn = document.querySelector(".has-dropdown > .nav-link");
    if (ddBtn) {
      ddBtn.addEventListener("click", function () {
        var parent = this.parentElement;
        var open = parent.classList.toggle("open");
        this.setAttribute("aria-expanded", open ? "true" : "false");
      });
    }

    // Fermer le menu au clic sur un lien
    document.querySelectorAll("#mainNav a").forEach(function (a) {
      a.addEventListener("click", function () {
        document.body.classList.remove("menu-open");
        if (toggle) toggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  /* ---------- Reveals ---------- */
  function initReveals() {
    var items = document.querySelectorAll(".reveal");
    if (!("IntersectionObserver" in window)) {
      items.forEach(function (el) { el.classList.add("in-view"); });
      return;
    }
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) {
          e.target.classList.add("in-view");
          io.unobserve(e.target);
        }
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -40px 0px" });
    items.forEach(function (el) { io.observe(el); });
  }

  /* ---------- Formulaires (mailto + WhatsApp) ---------- */
  function initForms() {
    document.querySelectorAll("form[data-form]").forEach(function (form) {
      form.addEventListener("submit", function (ev) {
        ev.preventDefault();
        var data = new FormData(form);
        var lines = [];
        data.forEach(function (v, k) { if (v) lines.push(k + ": " + v); });
        var body = lines.join("\n");
        var subject = t("ui.formSubject") + " — " + SITE.name;
        var success = form.querySelector(".form__success");

        // WhatsApp : version courte
        var waText = encodeURIComponent(t("ui.waHi") + " " + SITE.name + ", " + lines.join(", ") + ".");
        var waLink = "https://wa.me/" + SITE.wa + "?text=" + waText;

        var action = form.getAttribute("data-form");
        if (action === "wa") {
          window.open(waLink, "_blank");
          if (success) showSuccess(form, success);
        } else {
          var mail = "mailto:" + SITE.email + "?subject=" + encodeURIComponent(subject) + "&body=" + encodeURIComponent(body);
          window.location.href = mail;
          if (success) showSuccess(form, success);
        }
      });
    });
  }

  function showSuccess(form, el) {
    el.classList.add("show");
    form.querySelectorAll("input, textarea").forEach(function (i) { i.value = ""; });
    setTimeout(function () { el.classList.remove("show"); }, 7000);
  }

  /* ---------- Tienda ---------- */
  function badgeLabel(b) {
    return pick(BADGE_LABELS[b]) || b;
  }
  function productName(p) {
    return getLang() === "en" ? (p.name_en || p.name) : p.name;
  }
  function productCat(p) {
    return getLang() === "en" ? (p.cat_en || p.cat) : p.cat;
  }

  function productCardHTML(p) {
    var name = productName(p);
    var badge = p.badge ? '<span class="product-card__badge">' + badgeLabel(p.badge) + "</span>" : "";
    return (
      '<article class="product-card reveal in-view">' +
        '<div class="product-card__img">' + badge +
          '<img src="' + p.img + '" alt="' + name + '" loading="lazy">' +
        "</div>" +
        '<span class="product-card__cat">' + productCat(p) + "</span>" +
        "<h3>" + name + "</h3>" +
        '<p class="product-card__price">' + fmtCLPshort(p.price) + "</p>" +
        '<button class="btn btn--primary btn--sm product-card__btn" type="button" data-add="' + p.name.replace(/"/g, "&quot;") + '" data-price="' + p.price + '">' + t("ui.addToCart") + "</button>" +
      "</article>"
    );
  }

  var _shopRender = null;
  function initShop() {
    var grid = document.getElementById("productList");
    if (!grid) return;

    var filtersEl = document.getElementById("productFilters");
    var listEl = document.getElementById("productList");
    var countEl = document.getElementById("productCount");
    var activeCat = "Todos";

    function renderChips() {
      filtersEl.innerHTML = PRODUCT_CATEGORIES.map(function (c) {
        var active = c === activeCat ? " is-active" : "";
        return '<button class="chip' + active + '" type="button" data-filter="' + c + '">' + pick(CAT_LABELS[c]) + "</button>";
      }).join("");
    }

    function render(cat) {
      var items = cat && cat !== "Todos"
        ? PRODUCTS.filter(function (p) { return p.cat === cat; })
        : PRODUCTS;
      listEl.innerHTML = items.map(productCardHTML).join("");
      if (countEl) countEl.textContent = items.length + " " + t("ui.countProducts");
    }

    renderChips();
    filtersEl.addEventListener("click", function (ev) {
      var chip = ev.target.closest(".chip");
      if (!chip) return;
      activeCat = chip.getAttribute("data-filter");
      filtersEl.querySelectorAll(".chip").forEach(function (c) { c.classList.remove("is-active"); });
      chip.classList.add("is-active");
      render(activeCat);
    });

    render("Todos");
    _shopRender = function () { renderChips(); render(activeCat); };
  }

  /* ---------- Reserva ---------- */
  var _reservaRender = null;
  function initReserva() {
    var grid = document.getElementById("serviceList");
    if (!grid) return;

    var filtersEl = document.getElementById("serviceFilters");
    var listEl = document.getElementById("serviceList");
    var activeCat = "Todos los servicios";

    function renderChips() {
      filtersEl.innerHTML = SERVICE_CATEGORIES.map(function (c) {
        var active = c === activeCat ? " is-active" : "";
        return '<button class="chip' + active + '" type="button" data-filter="' + c + '">' + pick(SVC_CAT_LABELS[c]) + "</button>";
      }).join("");
    }

    function render(cat) {
      var items = cat && cat !== "Todos los servicios"
        ? SERVICES.filter(function (s) { return s.cat === cat; })
        : SERVICES;
      listEl.innerHTML = items.map(function (s) {
        var name = getLang() === "en" ? (s.name_en || s.name) : s.name;
        var catLabel = getLang() === "en" ? (s.cat_en || s.cat) : s.cat;
        var msg = encodeURIComponent(t("ui.waReserve") + ": " + name + " (" + s.dur + ") — " + fmtCLPshort(s.price));
        var wa = "https://wa.me/" + SITE.wa + "?text=" + msg;
        return (
          '<article class="svc-card">' +
            '<a class="svc-card__link" target="_blank" rel="noopener" href="' + wa + '" aria-label="' + name + ' — ' + t("ui.waAria") + '">' +
              '<div class="svc-card__img"><img src="' + s.img + '" alt="' + name + '" loading="lazy"></div>' +
            "</a>" +
            '<div class="svc-card__body">' +
              '<span class="svc-card__cat">' + catLabel + "</span>" +
              "<h3>" + name + "</h3>" +
              '<div class="svc-card__meta"><span class="svc-card__tag">⏱ ' + s.dur + "</span></div>" +
              '<p class="svc-card__price">' + fmtCLP(s.price) + ' <small data-i18n="ui.perPerson">por persona</small></p>' +
              '<a class="btn btn--primary" target="_blank" rel="noopener" href="' + wa + '">' + WA_ICON + t("ui.bookNow") + "</a>" +
            "</div>" +
          "</article>"
        );
      }).join("");
    }

    renderChips();
    filtersEl.addEventListener("click", function (ev) {
      var chip = ev.target.closest(".chip");
      if (!chip) return;
      activeCat = chip.getAttribute("data-filter");
      filtersEl.querySelectorAll(".chip").forEach(function (c) { c.classList.remove("is-active"); });
      chip.classList.add("is-active");
      render(activeCat);
    });

    render("Todos los servicios");
    _reservaRender = function () { renderChips(); render(activeCat); };
  }

  /* ---------- Panier ---------- */
  var CART_KEY = "santuario_cart";
  function getCart() {
    try { return JSON.parse(localStorage.getItem(CART_KEY)) || []; } catch (e) { return []; }
  }
  function saveCart(cart) { localStorage.setItem(CART_KEY, JSON.stringify(cart)); }

  var _cartRefresh = null;
  function initCart() {
    var btn = document.getElementById("cartBtn");
    var count = document.getElementById("cartCount");
    var drawer = document.getElementById("cartDrawer");
    var scrim = document.getElementById("cartScrim");
    var close = document.getElementById("cartClose");
    if (!btn || !drawer) return;
    btn.style.display = "";

    // Délégation globale : tous les boutons [data-add] (tienda + accueil)
    document.addEventListener("click", function (ev) {
      var b = ev.target.closest("[data-add]");
      if (!b) return;
      cartAdd(b.getAttribute("data-add"), parseInt(b.getAttribute("data-price"), 10));
    });

    function openCart() { document.body.classList.add("cart-open"); }
    function closeCart() { document.body.classList.remove("cart-open"); }
    btn.addEventListener("click", openCart);
    if (scrim) scrim.addEventListener("click", closeCart);
    if (close) close.addEventListener("click", closeCart);
    document.addEventListener("keydown", function (e) { if (e.key === "Escape") closeCart(); });

    function cartItemName(i) { return i.nameL || i.name; }

    function refreshUI() {
      var cart = getCart();
      var total = cart.reduce(function (s, i) { return s + i.price * i.qty; }, 0);
      var n = cart.reduce(function (s, i) { return s + i.qty; }, 0);
      if (count) { count.hidden = n === 0; count.textContent = n; }
      var bodyEl = document.getElementById("cartItems");
      var totalEl = document.getElementById("cartTotal");
      if (bodyEl) {
        if (!cart.length) {
          bodyEl.innerHTML = '<div class="cart-empty"><span class="icon">🛍️</span><p data-i18n="ui.cartEmpty">' + t("ui.cartEmpty") + "</p></div>";
        } else {
          bodyEl.innerHTML = cart.map(function (i, idx) {
            return (
              '<div class="cart-item">' +
                '<div class="cart-item__img"><img src="' + i.img + '" alt="' + cartItemName(i) + '" loading="lazy"></div>' +
                "<div><h4>" + cartItemName(i) + '</h4><p class="cart-item__price">' + fmtCLPshort(i.price) + "</p></div>" +
                '<div class="qty">' +
                  '<button type="button" data-dec="' + idx + '" aria-label="' + t("ui.cartDecAria") + '">−</button>' +
                  "<span>" + i.qty + "</span>" +
                  '<button type="button" data-inc="' + idx + '" aria-label="' + t("ui.cartIncAria") + '">+</button>' +
                "</div>" +
              "</div>"
            );
          }).join("");
          bodyEl.querySelectorAll("[data-inc]").forEach(function (b) {
            b.addEventListener("click", function () {
              var cart = getCart(); cart[+b.getAttribute("data-inc")].qty++; saveCart(cart); refreshUI();
            });
          });
          bodyEl.querySelectorAll("[data-dec]").forEach(function (b) {
            b.addEventListener("click", function () {
              var cart = getCart(); var i = +b.getAttribute("data-dec");
              cart[i].qty--; if (cart[i].qty <= 0) cart.splice(i, 1); saveCart(cart); refreshUI();
            });
          });
        }
      }
      if (totalEl) totalEl.textContent = fmtCLPshort(total);
      var checkout = document.getElementById("cartCheckout");
      if (checkout) {
        if (!cart.length) {
          checkout.classList.add("disabled");
          checkout.setAttribute("aria-disabled", "true");
          checkout.removeAttribute("href");
        } else {
          checkout.classList.remove("disabled");
          var msg = encodeURIComponent(t("ui.waBuy") + "\n" +
            cart.map(function (i) { return "• " + cartItemName(i) + " x" + i.qty + " (" + fmtCLPshort(i.price) + ")"; }).join("\n") +
            "\n" + t("ui.waTotal") + ": " + fmtCLPshort(total));
          checkout.setAttribute("href", "https://wa.me/" + SITE.wa + "?text=" + msg);
          checkout.setAttribute("target", "_blank");
        }
      }
    }
    _cartRefresh = refreshUI;

    window.cartAdd = function (name, price) {
      var cart = getCart();
      var found = cart.find(function (i) { return i.name === name; });
      var img = "";
      var nameL = name;
      var p = PRODUCTS.find(function (p) { return p.name === name; });
      if (p) { img = p.img; nameL = getLang() === "en" ? (p.name_en || p.name) : p.name; }
      if (found) found.qty++;
      else cart.push({ name: name, price: price, qty: 1, img: img, nameL: nameL });
      saveCart(cart);
      refreshUI();
      openCart();
      var c = document.getElementById("cartCount");
      if (c) { c.style.animation = "none"; void c.offsetWidth; c.style.animation = ""; }
    };

    refreshUI();
  }

  /* ---------- Galerie accueil ---------- */
  function initGallery() {
    var track = document.getElementById("galleryTrack");
    if (!track) return;
    var prev = document.getElementById("galleryPrev");
    var next = document.getElementById("galleryNext");
    var i = 0;
    var slides = track.children.length;

    function go(n) {
      i = (n + slides) % slides;
      track.style.transform = "translateX(-" + i * 100 + "%)";
    }
    if (prev) prev.addEventListener("click", function () { go(i - 1); });
    if (next) next.addEventListener("click", function () { go(i + 1); });
    setInterval(function () { go(i + 1); }, 6000);
  }
})();
