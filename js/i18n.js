/* ============================================================
   Santuario Expediciones — i18n.js
   Dictionnaire bilingue du site (es / en).

   RÈGLE D'OR : une seule source de vérité.
   Chaque clé est un objet { es, en }. Pour modifier une page,
   il suffit d'éditer ici les entrées correspondantes : le JS
   applique automatiquement la langue active. Une chaîne simple
   (au lieu d'un objet) signifie « identique dans les deux langues ».

   Structure des clés :
     "ui.*"    → éléments partagés (header, footer, panier, formulaires)
     "home.*"  → index.html          "kayak.*"  → kayak.html
     "foto.*"  → trips-fotograficos.html   "trek.*"  → trekking.html
     "etno.*"  → rutas-etnoculturales.html "shop.*"  → tienda.html
     "reserva.*" → reserva.html      "team.*"   → equipo.html
     "vol.*"   → voluntariado.html
   ============================================================ */

const I18N = {

  /* ---------- UI partagée (header / footer / panier / formulaires) ---------- */
  "ui.skip": { es: "Saltar al contenido", en: "Skip to content" },
  "ui.navAria": { es: "Principal", en: "Main" },
  "ui.brandAria": { es: "Santuario Expediciones — inicio", en: "Santuario Expediciones — home" },
  "ui.navHome": { es: "Inicio", en: "Home" },
  "ui.navShop": { es: "Tienda", en: "Shop" },
  "ui.navExpeditions": { es: "Expediciones", en: "Expeditions" },
  "ui.navKayak": { es: "Kayak", en: "Kayak" },
  "ui.navPhoto": { es: "Trips fotográficos", en: "Photo trips" },
  "ui.navTrekking": { es: "Trekking", en: "Trekking" },
  "ui.navEthno": { es: "Rutas etnoculturales", en: "Ethnocultural routes" },
  "ui.navTeam": { es: "Nuestro equipo", en: "Our team" },
  "ui.navVolunteer": { es: "Voluntariado", en: "Volunteering" },
  "ui.navContact": { es: "Contacto", en: "Contact" },
  "ui.perPerson": { es: "por persona", en: "per person" },
  "ui.reserve": { es: "Reserva online", en: "Book online" },
  "ui.discover": { es: "Descubrir", en: "Discover" },
  "ui.cartAria": { es: "Abrir carrito", en: "Open cart" },
  "ui.menuAria": { es: "Abrir menú", en: "Open menu" },
  "ui.langAria": { es: "Cambiar idioma", en: "Switch language" },
  "ui.footTagline": { es: "Explorando en silencio el humedal de las aves. Expediciones de naturaleza, fotografía y cultura en Pichilemu, Chile.", en: "Silently exploring the birds' wetland. Nature, photography and culture expeditions in Pichilemu, Chile." },
  "ui.footExp": { es: "Expediciones", en: "Expeditions" },
  "ui.footAgency": { es: "Agencia", en: "Agency" },
  "ui.footContact": { es: "Contacto", en: "Contact" },
  "ui.footShop": { es: "Tienda online", en: "Online shop" },
  "ui.footNews": { es: "Novedades", en: "News" },
  "ui.footBottom": { es: "Explorando en silencio el humedal de las aves.", en: "Silently exploring the birds' wetland." },
  "ui.waAria": { es: "Escríbenos por WhatsApp", en: "Contact us on WhatsApp" },
  "ui.toTopAria": { es: "Volver arriba", en: "Back to top" },
  "ui.waDefault": { es: "Hola qué tal, quisieras saber más de nuestras expediciones?", en: "Hi! Would you like to know more about our expeditions?" },
  "ui.waShopDefault": { es: "Hola qué tal, quisieras saber más de nuestros productos?", en: "Hi! Would you like to know more about our products?" },
  "ui.waReserve": { es: "Hola, quiero reservar", en: "Hi, I'd like to book" },
  "ui.waBuy": { es: "Hola! Quiero comprar:", en: "Hi! I'd like to buy:" },
  "ui.waTotal": { es: "Total", en: "Total" },
  "ui.waHi": { es: "Hola", en: "Hi" },
  "ui.formSubject": { es: "Consulta web", en: "Web enquiry" },
  "ui.cartTitle": { es: "Tu carrito", en: "Your cart" },
  "ui.cartCloseAria": { es: "Cerrar carrito", en: "Close cart" },
  "ui.cartTotal": { es: "Total", en: "Total" },
  "ui.cartCheckout": { es: "Finalizar por WhatsApp", en: "Checkout on WhatsApp" },
  "ui.cartEmpty": { es: "Tu carrito está vacío.", en: "Your cart is empty." },
  "ui.cartDecAria": { es: "Reducir cantidad", en: "Reduce quantity" },
  "ui.cartIncAria": { es: "Aumentar cantidad", en: "Increase quantity" },
  "ui.lightboxAria": { es: "Vista rápida de producto", en: "Quick product view" },
  "ui.lightboxClose": { es: "Cerrar", en: "Close" },
  "ui.lightboxPrev": { es: "Producto anterior", en: "Previous product" },
  "ui.lightboxNext": { es: "Producto siguiente", en: "Next product" },
  "ui.addToCart": { es: "Agregar al carrito", en: "Add to cart" },
  "ui.book": { es: "Reservar", en: "Book" },
  "ui.bookNow": { es: "Reservar ahora", en: "Book now" },
  "ui.fieldName": { es: "Nombre", en: "First name" },
  "ui.fieldLast": { es: "Apellido", en: "Last name" },
  "ui.fieldEmail": { es: "Email", en: "Email" },
  "ui.fieldMsg": { es: "Mensaje", en: "Message" },
  "ui.submit": { es: "Enviar", en: "Send" },
  "ui.succTitle": { es: "¡Mensaje listo! ✉️", en: "Message ready! ✉️" },
  "ui.countProducts": { es: "productos", en: "products" },
  "shop.filtersAria": { es: "Filtrar productos", en: "Filter products" },
  "reserva.filtersAria": { es: "Filtrar servicios", en: "Filter services" },

  /* ---------- Accueil (index.html) ---------- */
  "home.heroEyebrow": { es: "Expediciones de naturaleza · Pichilemu", en: "Nature expeditions · Pichilemu" },
  "home.heroTitle": { es: "Bienvenido a <em>Santuario</em> Expediciones", en: "Welcome to <em>Santuario</em> Expediciones" },
  "home.heroSub": { es: "Explorando en silencio el humedal de las aves", en: "Silently exploring the birds' wetland" },
  "home.heroCta1": { es: "Explora las expediciones", en: "Explore the expeditions" },
  "home.heroCta2": { es: "Reserva online", en: "Book online" },
  "home.scroll": { es: "Scroll", en: "Scroll" },

  "home.expEyebrow": { es: "Expediciones", en: "Expeditions" },
  "home.expTitle": { es: "Nuestras expediciones", en: "Our expeditions" },
  "home.expIntro": {
    es: "<strong>Mejor equipo para una travesía inolvidable.</strong> Trabajamos con las mejores marcas para entregarte una experiencia única en medio de la naturaleza: remos de competición, tradicionales de carbono de la marca Werner y variedad de opciones en remos esquimales de madera. Kayaks single y dobles de las marcas Venture, Riot y de fibra de la marca M&G, salvavidas Kakotat, equipos de rescate NRS — marcas que aseguran el mejor rendimiento en cualquier condición de navegación.",
    en: "<strong>The best gear for an unforgettable journey.</strong> We work with the best brands to give you a unique experience in nature: competition paddles, traditional Werner carbon paddles and a wide range of wooden eskimo paddles. Single and double kayaks from Venture, Riot and fiberglass kayaks from M&G, Kokatat life vests, NRS rescue gear — brands that guarantee the best performance in any navigation conditions."
  },

  "home.c1.aria": { es: "Observación de aves en kayak de travesía", en: "Bird watching on a sea kayak" },
  "home.c1.imgAlt": { es: "Kayak de travesía en el humedal", en: "Sea kayak in the wetland" },
  "home.c1.tag": "⏱ 3 h · 8 h",
  "home.c1.eyebrow": { es: "Kayak de travesía", en: "Sea kayak" },
  "home.c1.title": { es: "Observación de aves en kayak", en: "Bird watching by kayak" },
  "home.c1.desc": { es: "Explora en silencio el humedal de las aves sobre aguas tranquilas. Sin experiencia previa, apto para toda la familia.", en: "Silently explore the birds' wetland on calm waters. No previous experience needed, suitable for the whole family." },
  "home.c1.cta": { es: "Saber más", en: "Learn more" },

  "home.c2.aria": { es: "Trips fotográficos", en: "Photo trips" },
  "home.c2.imgAlt": { es: "Trip fotográfico en el humedal", en: "Photo trip in the wetland" },
  "home.c2.tag": "⏱ 4.5 h · 7.5 h",
  "home.c2.eyebrow": { es: "Fotografía", en: "Photography" },
  "home.c2.title": { es: "Trips fotográficos", en: "Photo trips" },
  "home.c2.desc": { es: "El guía rema y te posiciona en los mejores rincones para que logres fotografías increíbles. Para profesionales y aficionados.", en: "The guide paddles and positions you in the best spots so you can take incredible photographs. For professionals and amateurs." },
  "home.c2.cta": { es: "Saber más", en: "Learn more" },

  "home.c3.aria": { es: "Trekking guiado", en: "Guided trekking" },
  "home.c3.imgAlt": { es: "Trekking guiado en la zona", en: "Guided trekking in the area" },
  "home.c3.tag": "⏱ 2 h · 3 h",
  "home.c3.eyebrow": { es: "Trekking", en: "Trekking" },
  "home.c3.title": { es: "Trekking guiado", en: "Guided trekking" },
  "home.c3.desc": { es: "Descubre a pie los paisajes y la maravillosa biodiversidad de la zona, por rutas seguras ideales para toda la familia.", en: "Discover on foot the landscapes and wonderful biodiversity of the area, along safe routes ideal for the whole family." },
  "home.c3.cta": { es: "Saber más", en: "Learn more" },

  "home.c4.aria": { es: "Rutas etnoculturales", en: "Ethnocultural routes" },
  "home.c4.imgAlt": { es: "Ruta etnocultural con la comunidad", en: "Ethnocultural route with the community" },
  "home.c4.tag": "⏱ 3 h · 4.5 h",
  "home.c4.eyebrow": { es: "Cultura", en: "Culture" },
  "home.c4.title": { es: "Rutas etnoculturales", en: "Ethnocultural routes" },
  "home.c4.desc": { es: "Conoce los oficios de las comunidades locales: salinas, molino de agua y trabajo en arcilla del territorio.", en: "Discover the crafts of the local communities: salt flats, water mill and the territory's clay work." },
  "home.c4.cta": { es: "Saber más", en: "Learn more" },

  "home.expMore": { es: "Ver todas las expediciones y reservar", en: "See all expeditions and book" },

  "home.shopEyebrow": { es: "Tienda", en: "Shop" },
  "home.shopTitle": { es: "Conoce nuestros productos", en: "Discover our products" },
  "home.shopIntro": { es: "En nuestra agencia/tienda y tienda online encontrarás productos artesanales, equipo outdoor de las marcas Opinel, Stanley, Campante, entre otras, además de libros, guías de identificación de especies y mucho más.", en: "At our agency/store and online shop you'll find artisan products, outdoor gear from brands like Opinel, Stanley, Campante and more, plus books, species identification field guides and much more." },
  "home.shopCta": { es: "Ver todos los productos", en: "View all products" },

  "home.galEyebrow": { es: "El humedal", en: "The wetland" },
  "home.galTitle": { es: "Explorando en silencio el humedal de las aves", en: "Silently exploring the birds' wetland" },
  "home.galSub": { es: "Un tercio de las especies de aves de humedal presentes en Chile encuentra aquí su hogar.", en: "A third of the wetland bird species found in Chile call this place home." },
  "home.gal1Alt": { es: "Aves en el humedal de Cáhuil", en: "Birds in the Cáhuil wetland" },
  "home.gal2Alt": { es: "Kayak de travesía en aguas tranquilas", en: "Sea kayak on calm waters" },
  "home.gal3Alt": { es: "Paisaje del humedal", en: "Wetland landscape" },

  "home.newsEyebrow": { es: "Novedades", en: "News" },
  "home.newsTitle": { es: "Entérate de todo", en: "Stay informed" },
  "home.news1Date": { es: "03 de marzo de 2024", en: "March 3, 2024" },
  "home.news1Title": { es: "El trip fotográfico es uno de los preferidos", en: "The photo trip is one of the favorites" },
  "home.news1Body": { es: "Para quienes buscan tomar las mejores fotografías, no preocuparse del remado, y simplemente explorar en manos del guía experto los rincones de mayor belleza natural del humedal, en nuestro trip fotográfico personalizado el guía te rema y tú sólo te ocupas de disfrutar junto a tu cámara.", en: "For those looking to take the best photographs without worrying about paddling, simply exploring the wetland's most beautiful corners in the hands of an expert guide: in our personalised photo trip the guide paddles for you and you just enjoy your camera." },
  "home.news2Date": { es: "16 de mayo de 2023", en: "May 16, 2023" },
  "home.news2Title": { es: "Llega el otoño y los flamencos nos visitan", en: "Autumn arrives and flamingos visit us" },
  "home.news2Body": { es: "Cada año, al llegar el otoño, diferentes aves migratorias visitan el humedal, como descanso de un largo viaje, refugio, o simplemente buscando alimento y un lugar seguro y tranquilo para pasar los meses de invierno.", en: "Every year, when autumn arrives, different migratory birds visit the wetland — as a rest stop on a long journey, as shelter, or simply looking for food and a safe, quiet place to spend the winter months." },

  "home.aboutEyebrow": { es: "Nosotros", en: "About us" },
  "home.aboutTitle": { es: "Sobre nosotros y nuestro objetivo", en: "About us and our mission" },
  "home.aboutText": { es: "Somos un equipo de personas apasionadas por la vida en la naturaleza, la fotografía y los deportes outdoor. Buscamos acercar a las personas a rincones naturales de gran valor, lugares que deben ser puestos en valor por todos con urgencia, ya que poseen una importancia vital para el equilibrio de los ecosistemas y la diversidad de especies, y que a su vez, en su estado puro, presentan condiciones ideales para el desarrollo económico de las comunidades.", en: "We are a team of people passionate about life in nature, photography and outdoor sports. We seek to bring people closer to natural corners of great value — places that urgently need to be appreciated by everyone, as they hold vital importance for the balance of ecosystems and species diversity, while in their pure state offering ideal conditions for the economic development of local communities." },
  "home.aboutTeam": { es: "Conoce al equipo", en: "Meet the team" },
  "home.aboutVol": { es: "Voluntariado", en: "Volunteering" },

  /* ---------- Reseñas (index.html) ---------- */
  "home.revEyebrow": { es: "Reseñas", en: "Reviews" },
  "home.revTitle": { es: "Lo que dicen nuestros viajeros", en: "What our travellers say" },
  "home.revSub": { es: "Calificado con 4,9 sobre 5 en Tripadvisor y en Google, por más de 30 viajeros que han vivido nuestras expediciones.", en: "Rated 4.9 out of 5 on Tripadvisor and on Google by more than 30 travellers who have lived our expeditions." },
  "home.revTaName": { es: "Tripadvisor", en: "Tripadvisor" },
  "home.revTaCount": { es: "15 reseñas", en: "15 reviews" },
  "home.revGName": { es: "Google", en: "Google" },
  "home.revGCount": { es: "15 reseñas", en: "15 reviews" },
  "home.revSee": { es: "Ver en la plataforma", en: "See on the platform" },
  "home.rev1": {
    es: "Mi pareja y yo tuvimos la mejor experiencia con Pablo. Su atención al detalle en el viaje en kayak fue increíble. Es tan informativo sobre la biodiversidad y un tipo tan divertido. Nos hizo sentir tan bienvenidos y nos explicó todo lo que necesitábamos saber. Sin duda volvería de nuevo y recomendaría esto a todo el mundo. ¡Gracias Pablo!",
    en: "My partner and I had the best experience with Pablo. His attention to detail on the kayak trip was incredible. He is so knowledgeable about biodiversity and such a fun guy. He made us feel so welcome and explained everything we needed to know so well. I would definitely go again and recommend this to everyone. Thank you Pablo!"
  },
  "home.rev1Name": { es: "Silver Moon T", en: "Silver Moon T" },
  "home.rev1Date": { es: "Octubre 2024", en: "October 2024" },
  "home.rev2": {
    es: "Este paseo es un imperdible si quieres conocer el humedal de Cahuil desde otra perspectiva. El paisaje es precioso, muchísimas aves, buen guiado y el kayak de travesía es muy agradable para moverse con fluidez dentro del agua. Apto para todo tipo de público.",
    en: "This trip is a must if you want to see the Cahuil wetland from another perspective. The landscape is beautiful, so many birds, great guiding, and the sea kayak is very pleasant for moving fluidly through the water. Suitable for all audiences."
  },
  "home.rev2Name": { es: "Lisbeth T", en: "Lisbeth T" },
  "home.rev2Date": { es: "Enero 2024", en: "January 2024" },
  "home.rev3": {
    es: "Pablo fue fantástico y muy conocedor de la flora y la fauna. Nos explicó qué plantas eran comestibles y nos enseñó sobre las aves. Disfrutamos mucho la salida con nuestros hijos y recomendamos mucho sus tours.",
    en: "Pablo was fantastic and very knowledgeable about the flora and fauna. He explained which plants were edible and educated us about the birds. We enjoyed the outing with our children a lot and highly recommend his tours."
  },
  "home.rev3Name": { es: "Kathrin Yoneoka", en: "Kathrin Yoneoka" },
  "home.rev3Date": { es: "Hace 5 meses", en: "5 months ago" },
  "home.rev4": {
    es: "Hicimos un tour de kayak al atardecer en Cahuíl con Pablo y ¡fue increíble! Fue muy amable, realmente informativo sobre la naturaleza y la fauna del lugar, y nos llevó por una ruta increíble río abajo por el estuario. Si buscas un guía, no busques más.",
    en: "We went on a sunset kayaking trip in Cahuíl with Pablo and it was incredible! He was so friendly, really informative about the nature and wildlife in the area, and took us on an amazing route down the estuary! If you're looking for a guide, look no further."
  },
  "home.rev4Name": { es: "Jack Breeze", en: "Jack Breeze" },
  "home.rev4Date": { es: "Hace 1 año", en: "1 year ago" },
  "home.rev5": {
    es: "¡Una experiencia buenísima con un guía muy amable que te cuenta mucho sobre la naturaleza chilena!",
    en: "Such a cool experience with a really friendly guide who will tell you a lot about Chilean nature!"
  },
  "home.rev5Name": { es: "Julien", en: "Julien" },
  "home.rev5Date": { es: "Hace 1 año", en: "1 year ago" },
  "home.revMore": { es: "Ver todas las reseñas en Tripadvisor y Google", en: "See all reviews on Tripadvisor and Google" },

  "home.ctaTitle": { es: "¿Listo para explorar?", en: "Ready to explore?" },
  "home.ctaText": { es: "Reserva tu expedición online o escríbenos por WhatsApp. Diseñamos cada travesía según tu ritmo y tus intereses.", en: "Book your expedition online or message us on WhatsApp. We design each trip around your pace and interests." },
  "home.ctaBook": { es: "Reserva online", en: "Book online" },
  "home.ctaWa": { es: "WhatsApp", en: "WhatsApp" },

  /* ---------- Kayak (kayak.html) ---------- */
  "kayak.heroEyebrow": { es: "Expediciones · Kayak", en: "Expeditions · Kayak" },
  "kayak.heroTitle": { es: "Observación de aves en <em>kayak de travesía</em>", en: "Bird watching by <em>sea kayak</em>" },
  "kayak.heroContact": { es: "Contacto", en: "Contact" },
  "kayak.intro1": { es: "Travesías por tranquilas aguas de la <strong>Laguna de Cáhuil</strong>, <strong>Laguna El Perro</strong> y/o <strong>Estero Nilahue</strong>, hogar y parada indispensable para un tercio de las especies de aves de humedal presentes en Chile.", en: "Trips across the calm waters of <strong>Cáhuil Lagoon</strong>, <strong>El Perro Lagoon</strong> and/or <strong>Nilahue Estuary</strong>, home and essential stopover for a third of the wetland bird species found in Chile." },
  "kayak.intro2": { es: "Las expediciones en kayak de travesía son la forma ideal para conocer la gran biodiversidad de aves que habitan las lagunas y humedales de la zona. Se recorren aguas tranquilas, sin corriente ni oleaje, por lo que es bastante seguro y no requiere experiencia previa — se hace una pequeña inducción antes de comenzar el paseo.", en: "Sea kayaking expeditions are the ideal way to discover the great bird biodiversity of the local lagoons and wetlands. We paddle on calm waters with no current or waves, so it is very safe and requires no previous experience — a short briefing is given before the trip starts." },
  "kayak.intro3": { es: "Se opera con grupos pequeños, la idea es causar el menor impacto posible y poder compartir con las especies en su hábitat natural, siempre a una distancia que permita presenciarlas con empatía y respeto. <strong>Actividad apta para toda la familia.</strong>", en: "We operate with small groups, aiming to cause the least possible impact and share time with the species in their natural habitat, always at a distance that lets us watch them with empathy and respect. <strong>Activity suitable for the whole family.</strong>" },
  "kayak.opEyebrow": { es: "Elige tu expedición", en: "Choose your expedition" },
  "kayak.opTitle": { es: "Tres formatos, un mismo humedal", en: "Three formats, one wetland" },
  "kayak.c1.cat": { es: "Expedición corta", en: "Short expedition" },
  "kayak.c1.title": { es: "3 horas — Humedal Laguna de Cahuil", en: "3 hours — Cahuil Lagoon wetland" },
  "kayak.c1.tag2": { es: "🦆 Aves de humedal", en: "🦆 Wetland birds" },
  "kayak.c2.cat": { es: "Expedición media", en: "Half-day expedition" },
  "kayak.c2.title": { es: "4.5 horas — Humedal Laguna de Cahuil", en: "4.5 hours — Cahuil Lagoon wetland" },
  "kayak.c2.tag2": { es: "🦆 Aves de humedal", en: "🦆 Wetland birds" },
  "kayak.c3.cat": { es: "Expedición larga", en: "Full-day expedition" },
  "kayak.c3.title": { es: "8 horas — Humedal Laguna de Cahuil + Descenso Estero Nilahue", en: "8 hours — Cahuil Lagoon wetland + Nilahue estuary descent" },
  "kayak.c3.tag2": { es: "🛶 Descenso Nilahue", en: "🛶 Nilahue descent" },
  "kayak.contactEyebrow": { es: "Contacto", en: "Contact" },
  "kayak.contactTitle": { es: "¿Te gusta lo que ves? Contáctanos para saber más.", en: "Like what you see? Contact us to learn more." },
  "kayak.succBody": { es: "Se abrió tu aplicación de correo con el mensaje preparado. También puedes escribirnos directo a <a href=\"mailto:info@santuarioexpediciones.com\" style=\"color:var(--green);text-decoration:underline\">info@santuarioexpediciones.com</a>.", en: "Your email app opened with the message ready. You can also write to us directly at <a href=\"mailto:info@santuarioexpediciones.com\" style=\"color:var(--green);text-decoration:underline\">info@santuarioexpediciones.com</a>." },

  /* ---------- Trips fotográficos (trips-fotograficos.html) ---------- */
  "foto.heroEyebrow": { es: "Expediciones · Fotografía", en: "Expeditions · Photography" },
  "foto.heroTitle": { es: "Expedición <em>fotográfica</em>", en: "<em>Photography</em> expedition" },
  "foto.heroSub": { es: "Para profesionales y amantes de la fotografía", en: "For professionals and photography lovers" },
  "foto.intro": { es: "En este formato de expedición, el guía te acompaña en el <strong>kayak doble</strong> y se encarga del remado y de posicionarte de la mejor manera para que logres fotografías increíbles. Tú solo te ocupas de observar y disparar.", en: "In this expedition format, the guide accompanies you on a <strong>double kayak</strong>, doing all the paddling and positioning you perfectly so you can take incredible photographs. You only need to observe and shoot." },
  "foto.c1.cat": { es: "Expedición media", en: "Half-day expedition" },
  "foto.c1.title": { es: "Expedición media (4,5 hrs)", en: "Half-day expedition (4.5 hrs)" },
  "foto.c2.cat": { es: "Expedición larga", en: "Full-day expedition" },
  "foto.c2.title": { es: "Expedición larga (7,5 hrs)", en: "Full-day expedition (7.5 hrs)" },

  /* ---------- Trekking (trekking.html) ---------- */
  "trek.heroEyebrow": { es: "Expediciones · Trekking", en: "Expeditions · Trekking" },
  "trek.heroTitle": { es: "Trekking <em>guiados</em>", en: "<em>Guided</em> trekking" },
  "trek.heroSub": { es: "Descubre a pie los paisajes de la zona y la maravillosa biodiversidad que aquí habita.", en: "Discover on foot the local landscapes and the wonderful biodiversity that lives here." },
  "trek.c1.cat": { es: "Trekking de 3 horas", en: "3-hour trekking" },
  "trek.c1.title": { es: "Descubriendo al Sietecolores — vida entre juncos", en: "Discovering the Sietecolores — life among the rushes" },
  "trek.c1.desc": { es: "Trekking a la ribera norte del humedal de Bucalemu, explorando el hábitat del Sietecolores y conociendo más de la maravillosa biodiversidad que habita en los juncales y de la rica flora nativa en torno al humedal.", en: "A trek along the northern shore of the Bucalemu wetland, exploring the Sietecolores' habitat and learning about the wonderful biodiversity living among the rushes and the rich native flora around the wetland." },
  "trek.c2.cat": { es: "Trekking de 2 horas", en: "2-hour trekking" },
  "trek.c2.title": { es: "Ruta costera — Punta Lobos / La Pancora", en: "Coastal route — Punta Lobos / La Pancora" },
  "trek.c2.desc": { es: "Recorre el borde costero a pie junto a nuestro guía especializado por rutas seguras y de gran belleza y biodiversidad. Aprende más acerca de las especies de flora y fauna, así como de la gran importancia geológica del territorio. Rutas ideales para toda la familia.", en: "Walk the coastline with our specialist guide along safe, beautiful and highly biodiverse routes. Learn about the local flora and fauna species, as well as the great geological importance of the territory. Routes ideal for the whole family." },

  /* ---------- Rutas etnoculturales (rutas-etnoculturales.html) ---------- */
  "etno.heroEyebrow": { es: "Expediciones · Cultura", en: "Expeditions · Culture" },
  "etno.heroTitle": { es: "Rutas <em>etnoculturales</em>", en: "<em>Ethnocultural</em> routes" },
  "etno.heroSub": { es: "Conoce los oficios de las comunidades locales y habitantes del territorio.", en: "Discover the crafts of the local communities and the people of the territory." },
  "etno.c1.cat": { es: "Tour corto", en: "Short tour" },
  "etno.c1.title": { es: "Cáhuil, Salinas de Barrancas y Pañul", en: "Cáhuil, Barrancas Salt Flats and Pañul" },
  "etno.c1.desc": { es: "En este recorrido conocemos el oficio de las Salinas de Barrancas, visitamos el Molino de Agua de Pañul para luego aprender más acerca del trabajo en arcilla de las comunidades de la zona.", en: "On this tour we discover the craft of the Barrancas salt flats, visit the Pañul water mill and then learn about the clay work of the local communities." },
  "etno.c2.cat": { es: "Tour medio día", en: "Half-day tour" },
  "etno.c2.title": { es: "Punta de Lobos, Pangal, Cáhuil, Salinas de Barrancas y Pañul", en: "Punta de Lobos, Pangal, Cáhuil, Barrancas Salt Flats and Pañul" },
  "etno.c2.desc": { es: "Conocemos el oficio de las Salinas de Barrancas, visitamos el Molino de Agua de Pañul y aprendemos del trabajo en arcilla de las comunidades. Además, visitamos los huertos orgánicos del Hotel Alaia, el proyecto de reforestación de Parque Punta Lobos y el Vivero de Öngo Chile.", en: "We discover the craft of the Barrancas salt flats, visit the Pañul water mill and learn about the clay work of the communities. We also visit the organic gardens of Hotel Alaia, the reforestation project of Punta Lobos Park and the Öngo Chile nursery." },

  /* ---------- Tienda (tienda.html) ---------- */
  "shop.bannerText": { es: "Envíos a todo Chile", en: "Shipping throughout Chile" },
  "shop.bannerTitle": { es: "Equípate con nosotros", en: "Gear up with us" },
  "shop.ctaTitle": { es: "¿No encuentras lo que buscas?", en: "Can't find what you're looking for?" },
  "shop.ctaText": { es: "¿Dudas? Pregunta al WhatsApp — te ayudamos a elegir el equipo ideal para tu próxima expedición.", en: "Questions? Ask on WhatsApp — we'll help you choose the ideal gear for your next expedition." },
  "shop.ctaBtn": { es: "Preguntar por WhatsApp", en: "Ask on WhatsApp" },

  /* ---------- Reserva (reserva.html) ---------- */
  "reserva.eyebrow": { es: "Reserva online", en: "Online booking" },
  "reserva.title": { es: "Nuestros servicios", en: "Our services" },
  "reserva.intro": { es: "Elige tu expedición, duración y horario. Reserva directamente por WhatsApp y confirma tu travesía.", en: "Choose your expedition, duration and schedule. Book directly on WhatsApp and confirm your trip." },
  "reserva.ctaTitle": { es: "¿Dudas sobre horarios o disponibilidad?", en: "Questions about schedules or availability?" },
  "reserva.ctaText": { es: "Escríbenos por WhatsApp y coordinamos tu expedición a medida.", en: "Message us on WhatsApp and we'll tailor your expedition for you." },
  "reserva.ctaBtn": { es: "Escribir por WhatsApp", en: "Write on WhatsApp" },

  /* ---------- Equipo (equipo.html) ---------- */
  "team.eyebrow": { es: "Nosotros", en: "About us" },
  "team.title": { es: "Nuestro equipo", en: "Our team" },
  "team.sub": { es: "Personas apasionadas por la vida en la naturaleza, la fotografía y los deportes outdoor.", en: "People passionate about life in nature, photography and outdoor sports." },
  "team.p1.role": { es: "Fundador & guía", en: "Founder & guide" },
  "team.p2.role": { es: "Equipo", en: "Team" },
  "team.p3.role": { es: "Equipo", en: "Team" },
  "team.ctaTitle": { es: "¿Quieres sumarte?", en: "Want to join us?" },
  "team.ctaText": { es: "Conoce nuestro programa de volunturismo y trabaja con nosotros.", en: "Discover our voluntourism program and work with us." },
  "team.ctaBtn": { es: "Descubre el voluntariado", en: "Discover volunteering" },

  /* ---------- Voluntariado (voluntariado.html) ---------- */
  "vol.eyebrow": { es: "Voluntariado", en: "Volunteering" },
  "vol.title": { es: "Volunturismo con nosotros", en: "Voluntourism with us" },
  "vol.sub": { es: "Trabaja con nosotros, conoce lo que nos mueve.", en: "Work with us, get to know what drives us." },
  "vol.p1": { es: "¿Quieres descubrir cómo funciona nuestra agencia y ayudarnos a realizar diversas tareas?", en: "Want to find out how our agency works and help us with various tasks?" },
  "vol.p2": { es: "Todos los <strong>jueves</strong> ofrecemos nuestro programa de volunturismo, que consiste en <strong>medio día de voluntariado</strong> seguido de una <strong>travesía en kayak</strong>.", en: "Every <strong>Thursday</strong> we offer our voluntourism program: <strong>half a day of volunteering</strong> followed by a <strong>kayak trip</strong>." },
  "vol.p3": { es: "Puedes ayudarnos con reparaciones, pintura o jardinería, por ejemplo. También puedes participar en jornadas de limpieza de humedales.", en: "You can help us with repairs, painting or gardening, for example. You can also join our wetland clean-up days." },
  "vol.quote": { es: "¡Estaremos encantados de conocerte y compartir contigo!", en: "We'd love to meet you and share time with you!" },
  "vol.contactBtn": { es: "Contáctanos", en: "Contact us" },
  "vol.whereTitle": { es: "Dónde estamos", en: "Where we are" },
  "vol.formEyebrow": { es: "Escríbenos", en: "Write to us" },
  "vol.formTitle": { es: "¿Te gustaría participar?", en: "Would you like to take part?" },
  "vol.succBody": { es: "Se abrió tu aplicación de correo con el mensaje preparado. Te responderemos a la brevedad.", en: "Your email app opened with the message ready. We'll get back to you shortly." },

  /* ---------- Contacto (contact.html) ---------- */
  "contact.eyebrow": { es: "Contacto", en: "Contact" },
  "contact.title": { es: "Hablemos de tu próxima expedición", en: "Let's talk about your next expedition" },
  "contact.sub": { es: "Escríbenos por WhatsApp, email o ven a visitarnos a nuestra agencia/tienda en Pichilemu. Te ayudamos a elegir la travesía ideal.", en: "Write to us on WhatsApp, email or visit us at our agency/store in Pichilemu. We'll help you choose the ideal trip." },
  "contact.waTitle": { es: "WhatsApp", en: "WhatsApp" },
  "contact.waSub": { es: "Respuesta rápida y directa", en: "Quick and direct replies" },
  "contact.emailTitle": { es: "Email", en: "Email" },
  "contact.emailSub": { es: "Para consultas y propuestas", en: "For questions and proposals" },
  "contact.shopTitle": { es: "Agencia / Tienda", en: "Agency / Store" },
  "contact.shopSub1": { es: "Camino a Cahuil 4851 A", en: "Camino a Cahuil 4851 A" },
  "contact.shopSub2": { es: "Punta de Lobos, Pichilemu, Chile", en: "Punta de Lobos, Pichilemu, Chile" },
  "contact.submit": { es: "Enviar mensaje", en: "Send message" },
  "contact.succBody": { es: "Se abrió tu aplicación de correo con el mensaje preparado. También puedes escribirnos directo a <a href=\"mailto:info@santuarioexpediciones.com\" style=\"color:var(--green);text-decoration:underline\">info@santuarioexpediciones.com</a>.", en: "Your email app opened with the message ready. You can also write to us directly at <a href=\"mailto:info@santuarioexpediciones.com\" style=\"color:var(--green);text-decoration:underline\">info@santuarioexpediciones.com</a>." }
};

/* ---------- Titres & meta descriptions par page ---------- */
const META = {
  home: {
    title: { es: "Santuario Expediciones — Expediciones de naturaleza en Pichilemu", en: "Santuario Expediciones — Nature expeditions in Pichilemu" },
    desc: { es: "Explorando en silencio el humedal de las aves. Expediciones en kayak, trips fotográficos, trekking y rutas etnoculturales en Pichilemu, Chile.", en: "Silently exploring the birds' wetland. Kayak expeditions, photo trips, trekking and ethnocultural routes in Pichilemu, Chile." }
  },
  kayak: {
    title: { es: "Observación de aves en kayak — Santuario Expediciones", en: "Bird watching by kayak — Santuario Expediciones" },
    desc: { es: "Travesías en kayak por las tranquilas aguas de la Laguna de Cáhuil, Laguna El Perro y el Estero Nilahue. Apto para toda la familia.", en: "Sea kayak trips along the calm waters of Cáhuil Lagoon, El Perro Lagoon and the Nilahue Estuary. Suitable for the whole family." }
  },
  foto: {
    title: { es: "Trips fotográficos — Santuario Expediciones", en: "Photo trips — Santuario Expediciones" },
    desc: { es: "Expediciones fotográficas guiadas en kayak: el guía rema y posiciona tu cámara en los mejores rincones del humedal de Cáhuil.", en: "Guided kayak photography expeditions: the guide paddles and positions your camera in the best spots of the Cáhuil wetland." }
  },
  trek: {
    title: { es: "Trekking guiado — Santuario Expediciones", en: "Guided trekking — Santuario Expediciones" },
    desc: { es: "Trekking guiados en Pichilemu: ribera norte del humedal de Bucalemu y ruta costera Punta Lobos / La Pancora.", en: "Guided treks in Pichilemu: northern shore of the Bucalemu wetland and the Punta Lobos / La Pancora coastal route." }
  },
  etno: {
    title: { es: "Rutas etnoculturales — Santuario Expediciones", en: "Ethnocultural routes — Santuario Expediciones" },
    desc: { es: "Conoce los oficios de las comunidades de la zona: salinas de Barrancas, molino de agua de Pañul, trabajo en arcilla y más.", en: "Discover the crafts of the local communities: Barrancas salt flats, Pañul water mill, clay work and more." }
  },
  shop: {
    title: { es: "Tienda — Santuario Expediciones", en: "Shop — Santuario Expediciones" },
    desc: { es: "Productos artesanales, equipo outdoor Opinel, Stanley, Campante, libros y guías de identificación de especies. Envíos a todo Chile.", en: "Artisan products, Opinel, Stanley and Campante outdoor gear, books and species field guides. Shipping throughout Chile." }
  },
  reserva: {
    title: { es: "Reserva online — Santuario Expediciones", en: "Book online — Santuario Expediciones" },
    desc: { es: "Reserva tu expedición online: kayak, trekking, rutas etnoculturales y tours fotográficos en Pichilemu, Chile.", en: "Book your expedition online: kayak, trekking, ethnocultural routes and photography tours in Pichilemu, Chile." }
  },
  team: {
    title: { es: "Nuestro equipo — Santuario Expediciones", en: "Our team — Santuario Expediciones" },
    desc: { es: "El equipo de Santuario Expediciones: guías apasionados por la vida en la naturaleza, la fotografía y los deportes outdoor.", en: "The Santuario Expediciones team: guides passionate about nature, photography and outdoor sports." }
  },
  vol: {
    title: { es: "Voluntariado — Santuario Expediciones", en: "Volunteering — Santuario Expediciones" },
    desc: { es: "Volunturismo con Santuario Expediciones: medio día de voluntariado seguido de una travesía en kayak, todos los jueves.", en: "Voluntourism with Santuario Expediciones: half a day of volunteering followed by a kayak trip, every Thursday." }
  },
  contact: {
    title: { es: "Contacto — Santuario Expediciones", en: "Contact — Santuario Expediciones" },
    desc: { es: "Contáctanos en Santuario Expediciones: expediciones de naturaleza, fotografía y cultura en Pichilemu, Chile. Escríbenos por WhatsApp, email o visítanos en la agencia.", en: "Contact Santuario Expediciones: nature, photography and culture expeditions in Pichilemu, Chile. Reach us by WhatsApp, email or visit us at the agency." }
  }
};

/* ---------- Libellés des catégories produits / services / badges ---------- */
const CAT_LABELS = {
  "Todos": { es: "Todos", en: "All" },
  "Joyas": { es: "Joyas", en: "Jewelry" },
  "Libros": { es: "Libros", en: "Books" },
  "Campante": "Campante",
  "Opinel": "Opinel",
  "Cosméticos": { es: "Cosméticos", en: "Cosmetics" },
  "Gastronomía": { es: "Gastronomía", en: "Food & drink" },
  "Accesorios de viaje": { es: "Accesorios de viaje", en: "Travel accessories" },
  "Decoración": { es: "Decoración", en: "Decor" }
};

const SVC_CAT_LABELS = {
  "Todos los servicios": { es: "Todos", en: "All" },
  "Trekking": "Trekking",
  "Kayak": "Kayak",
  "Ruta etnocultural": { es: "Ruta etnocultural", en: "Ethnocultural route" }
};

const BADGE_LABELS = {
  "Más vendido": { es: "Más vendido", en: "Best seller" },
  "Producto Local": { es: "Producto Local", en: "Local product" },
  "Temporada invierno": { es: "Temporada invierno", en: "Winter season" }
};
