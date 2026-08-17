/* ============================================================
   Santuario Expediciones — s1lex micro-interactions
   Word-by-word headline reveal · soft image parallax ·
   scrolling marquee · editorial micro-details.
   Respects prefers-reduced-motion and touch devices.
   ============================================================ */
(function () {
  "use strict";

  var REDUCED = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var TOUCH = window.matchMedia("(pointer: coarse)").matches;

  /* ---------- Word-by-word reveal of big headlines ---------- */
  var splitEls = [];

  function wrapWords(el) {
    var walker = document.createTreeWalker(el, NodeFilter.SHOW_TEXT, null);
    var nodes = [];
    while (walker.nextNode()) {
      if (walker.currentNode.textContent.trim()) nodes.push(walker.currentNode);
    }
    var idx = 0;
    nodes.forEach(function (node) {
      var frag = document.createDocumentFragment();
      var parts = node.textContent.split(/\s+/);
      parts.forEach(function (w) {
        if (!w) return;
        var wspan = document.createElement("span");
        wspan.className = "w";
        wspan.style.setProperty("--i", idx++);
        var win = document.createElement("span");
        win.className = "w-in";
        win.textContent = w;
        wspan.appendChild(win);
        frag.appendChild(wspan);
        frag.appendChild(document.createTextNode(" "));
      });
      node.parentNode.replaceChild(frag, node);
    });
    el.classList.add("is-split");
  }

  function splitHeadline(el) {
    if (el.dataset.splitDone === "1") return;
    // Avoid double-animation conflict: word-split becomes the ONLY entrance
    // for this heading, so drop main.js's .reveal handling on it.
    el.classList.remove("reveal");
    wrapWords(el);
    el.classList.add("is-split");
    el.dataset.splitDone = "1";
    // The hero is already visible on first paint. Revealing it immediately
    // avoids a WebKit IntersectionObserver race after page reloads.
    if (el.closest(".s1-hero")) { el.classList.add("is-in"); return; }
    if (REDUCED) { el.classList.add("is-in"); return; }
    var io = new IntersectionObserver(function (entries, obs) {
      entries.forEach(function (e) {
        if (e.isIntersecting) {
          el.classList.add("is-in");
          obs.unobserve(el);
        }
      });
    }, { threshold: 0.25 });
    io.observe(el);
    el._io = io;
  }

  function clearSplit(el) {
    delete el.dataset.splitDone;
    el.classList.remove("is-split", "is-in");
    if (el._io) { el._io.disconnect(); delete el._io; }
  }

  function initSplits() {
    splitEls = Array.prototype.slice.call(
      document.querySelectorAll("#main h1, #main h2.display")
    );
    splitEls.forEach(splitHeadline);
  }

  // Language switch: main.js overwrites textContent/innerHTML, killing spans.
  var lastLang = document.documentElement.lang || "es";
  var langTimer = null;
  new MutationObserver(function () {
    var lang = document.documentElement.lang || "es";
    if (lang === lastLang) return;
    lastLang = lang;
    clearTimeout(langTimer);
    langTimer = setTimeout(function () {
      splitEls.forEach(clearSplit);
      initSplits();
    }, 80);
  }).observe(document.documentElement, { attributes: true, attributeFilter: ["lang"] });

  /* ---------- Soft parallax on images ---------- */
  function initParallax() {
    if (REDUCED || TOUCH) return;
    var els = Array.prototype.slice.call(document.querySelectorAll(
      ".exp-card__media img, .svc-card__img img, .post-card__img img, .gallery figure img, .exp-featured__media img"
    ));
    if (!els.length) return;
    els.forEach(function (img) { img.classList.add("s1-parallax"); });

    var raf = null;
    function update() {
      raf = null;
      var vh = window.innerHeight;
      els.forEach(function (img) {
        var r = img.getBoundingClientRect();
        if (r.bottom < -100 || r.top > vh + 100) return;
        var center = r.top + r.height / 2 - vh / 2;
        img.style.setProperty("--py", (center * -0.06).toFixed(1) + "px");
      });
    }
    function loop() { if (!raf) raf = requestAnimationFrame(update); }
    window.addEventListener("scroll", loop, { passive: true });
    window.addEventListener("resize", loop, { passive: true });
    update();
  }

  /* ---------- Hero video bootstrap (Safari-safe) ----------
     La source desktop est définie dans le HTML pour que Safari puisse
     démarrer la vidéo dès le premier rendu. On ne change ensuite la source
     qu'en mobile, Safari n'honorant pas l'attribut `media` sur <source>. */
  var HERO_MOBILE_MQ = "(max-width: 991px)";
  var HERO_VIDEOS = [
    { src: "assets/video/hero-3-lite.mp4" }, // mobile (portrait)
    { src: "assets/video/hero-3.web.mp4" }   // desktop (paysage)
  ];

  function initHeroVideos() {
    document.querySelectorAll(".hero video, .s1-hero video").forEach(function (video) {
      video.muted = true;
      video.defaultMuted = true;
      video.autoplay = true;
      video.loop = true;
      video.setAttribute("muted", "");
      video.setAttribute("playsinline", "");
      video.setAttribute("webkit-playsinline", "");
      video.removeAttribute("controls");
      video.removeAttribute("poster");

      var tryPlay = function () {
        var promise = video.play();
        if (promise && promise.catch) promise.catch(function () {});
      };

      function currentCfg() {
        return window.matchMedia(HERO_MOBILE_MQ).matches ? HERO_VIDEOS[0] : HERO_VIDEOS[1];
      }

      function applySource() {
        var cfg = currentCfg();
        var want = new URL(cfg.src, window.location.href).href;
        if (video.src !== want) {
          video.src = cfg.src;
          video.load();
          if (video.readyState >= 1) tryPlay();
        }
      }

      video.addEventListener("loadedmetadata", tryPlay);
      video.addEventListener("canplay", tryPlay);
      applySource();
      // Safari peut avoir déjà émis canplay avant DOMContentLoaded lorsque la
      // source est définie directement dans le HTML. Rejouer ici garantit que
      // la demande de lecture n'est pas perdue.
      tryPlay();
      window.addEventListener("load", tryPlay, { once: true });

      // Safari peut bloquer l'autoplay selon le réglage du site. Un clic sur
      // le héros constitue alors une interaction utilisateur autorisée.
      var hero = video.closest(".s1-hero, .hero");
      if (hero) {
        hero.addEventListener("click", function (event) {
          if (event.target.closest("a, button")) return;
          if (video.paused) tryPlay();
        });
      }

      // Échange mobile ↔ desktop au resize (rotation, redimensionnement).
      var mql = window.matchMedia(HERO_MOBILE_MQ);
      var onViewportChange = function () { applySource(); };
      if (mql.addEventListener) mql.addEventListener("change", onViewportChange);
      else if (mql.addListener) mql.addListener(onViewportChange);

      // Si l'autoplay a été bloqué (réglages Safari, économie d'énergie…),
      // la première interaction relance la lecture.
      var resume = function () { if (video.paused) tryPlay(); };
      video.addEventListener("click", resume);
      video.addEventListener("touchstart", resume, { passive: true });
    });
  }

  /* ---------- Scrolling marquee ---------- */
  var MARQUEE_PAGES = ["/index.html", "/tienda.html", "/reserva.html"];
  function initMarquee() {
    if (document.querySelector(".s1-marquee")) return; // anti double injection
    var path = window.location.pathname.split("/").pop() || "index.html";
    if (MARQUEE_PAGES.indexOf("/" + path) === -1 && MARQUEE_PAGES.indexOf(path) === -1) {
      return;
    }
    var container = document.createElement("div");
    container.className = "s1-marquee";
    container.setAttribute("aria-hidden", "true");
    var words = ["Expediciones", "Naturaleza", "Silencio", "Kayak", "Fotografía", "Trekking", "Cultura"];
    var phrase = words.map(function (w) {
      return '<span class="s1-marquee__word">' + w + '<span class="s1-marquee__star" aria-hidden="true">✦</span></span>';
    }).join("");
    container.innerHTML =
      '<div class="s1-marquee__track">' + phrase + phrase + "</div>";
    if (REDUCED) container.classList.add("s1-marquee--static");

    var main = document.getElementById("main");
    if (!main) return;
    var hero = main.querySelector(".hero, .s1-hero, .shop-banner");
    if (hero && hero.parentNode === main) {
      hero.insertAdjacentElement("afterend", container);
    } else {
      main.insertBefore(container, main.firstChild);
    }
  }

  /* ---------- Micro-detail: eyebrow dash only for section heads ---------- */
  function initEyebrows() {
    document.querySelectorAll(".section__head .eyebrow").forEach(function (el) {
      el.classList.add("eyebrow--line");
    });
  }

  document.addEventListener("DOMContentLoaded", function () {
    initMarquee();
    initHeroVideos();
    initParallax();
    initEyebrows();
    // Wait for the self-hosted display font before measuring word widths.
    // Safari can otherwise split the same heading differently on refresh.
    var fontsReady = document.fonts && document.fonts.ready ? document.fonts.ready : Promise.resolve();
    fontsReady.then(initSplits);
  });
  // Re-split in case DOMContentLoaded already fired (scripts order).
  if (document.readyState !== "loading") {
    initMarquee();
    initHeroVideos();
    initParallax();
    initEyebrows();
    var fontsReadyNow = document.fonts && document.fonts.ready ? document.fonts.ready : Promise.resolve();
    fontsReadyNow.then(initSplits);
  }
})();
