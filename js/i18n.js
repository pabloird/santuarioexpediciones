/* ============================================================
   Santuario Expediciones — i18n.js
   Dictionnaire quadrilingue du site (es / en / fr / pt).

   RÈGLE D'OR : une seule source de vérité.
   Chaque clé est un objet { es, en, fr, pt }. Pour modifier une page,
   il suffit d'éditer ici les entrées correspondantes : le JS
   applique automatiquement la langue active. Une chaîne simple
   (au lieu d'un objet) signifie « identique dans toutes les langues ».

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
  "ui.skip": { es: "Saltar al contenido", en: "Skip to content", fr: "Aller au contenu", pt: "Pular para o conteúdo" },
  "ui.navAria": { es: "Principal", en: "Main", fr: "Navigation principale", pt: "Navegação principal" },
  "ui.brandAria": { es: "Santuario Expediciones — inicio", en: "Santuario Expediciones — home", fr: "Santuario Expediciones — accueil", pt: "Santuario Expediciones — início" },
  "ui.navHome": { es: "Inicio", en: "Home", fr: "Accueil", pt: "Início" },
  "ui.navShop": { es: "Tienda", en: "Shop", fr: "Boutique", pt: "Loja" },
  "ui.navExpeditions": { es: "Expediciones", en: "Expeditions", fr: "Expéditions", pt: "Expedições" },
  "ui.navKayak": { es: "Kayak", en: "Kayak", fr: "Kayak", pt: "Caiaque" },
  "ui.navPhoto": { es: "Trips fotográficos", en: "Photo trips", fr: "Trips photo", pt: "Trips fotográficos" },
  "ui.navTrekking": { es: "Trekking", en: "Trekking", fr: "Randonnée", pt: "Trekking" },
  "ui.navEthno": { es: "Rutas etnoculturales", en: "Ethnocultural routes", fr: "Itinéraires ethnoculturels", pt: "Rotas etnoculturais" },
  "ui.navTeam": { es: "Nuestro equipo", en: "Our team", fr: "Notre équipe", pt: "Nossa equipe" },
  "ui.navVolunteer": { es: "Voluntariado", en: "Volunteering", fr: "Bénévolat", pt: "Voluntariado" },
  "ui.navContact": { es: "Contacto", en: "Contact", fr: "Contact", pt: "Contato" },
  "ui.perPerson": { es: "por persona", en: "per person", fr: "par personne", pt: "por pessoa" },
  "ui.reserve": { es: "Reserva online", en: "Book online", fr: "Réserver en ligne", pt: "Reserve online" },
  "ui.discover": { es: "Descubrir", en: "Discover", fr: "Découvrir", pt: "Descobrir" },
  "ui.cartAria": { es: "Abrir carrito", en: "Open cart", fr: "Ouvrir le panier", pt: "Abrir carrinho" },
  "ui.menuAria": { es: "Abrir menú", en: "Open menu", fr: "Ouvrir le menu", pt: "Abrir menu" },
  "ui.langAria": { es: "Cambiar idioma", en: "Switch language", fr: "Changer de langue", pt: "Trocar idioma" },
  "ui.footTagline": { es: "Explorando en silencio el humedal de las aves. Expediciones de naturaleza, fotografía y cultura en Pichilemu, Chile.", en: "Silently exploring the birds' wetland. Nature, photography and culture expeditions in Pichilemu, Chile.", fr: "Explorer en silence le marais des oiseaux. Expéditions nature, photographie et culture à Pichilemu, au Chili.", pt: "Explorando em silêncio o pântano das aves. Expedições de natureza, fotografia e cultura em Pichilemu, Chile." },
  "ui.footExp": { es: "Expediciones", en: "Expeditions", fr: "Expéditions", pt: "Expedições" },
  "ui.footAgency": { es: "Agencia", en: "Agency", fr: "Agence", pt: "Agência" },
  "ui.footContact": { es: "Contacto", en: "Contact", fr: "Contact", pt: "Contato" },
  "ui.footShop": { es: "Tienda online", en: "Online shop", fr: "Boutique en ligne", pt: "Loja online" },
  "ui.footNews": { es: "Novedades", en: "News", fr: "Actualités", pt: "Novidades" },
  "ui.footBottom": { es: "Explorando en silencio el humedal de las aves.", en: "Silently exploring the birds' wetland.", fr: "Explorer en silence le marais des oiseaux.", pt: "Explorando em silêncio o pântano das aves." },
  "ui.waAria": { es: "Escríbenos por WhatsApp", en: "Contact us on WhatsApp", fr: "Écrivez-nous sur WhatsApp", pt: "Escreva-nos no WhatsApp" },
  "ui.toTopAria": { es: "Volver arriba", en: "Back to top", fr: "Revenir en haut", pt: "Voltar ao topo" },
  "ui.waDefault": { es: "Hola qué tal, quisieras saber más de nuestras expediciones?", en: "Hi! Would you like to know more about our expeditions?", fr: "Bonjour, souhaitez-vous en savoir plus sur nos expéditions ?", pt: "Olá! Gostaria de saber mais sobre nossas expedições?" },
  "ui.waShopDefault": { es: "Hola qué tal, quisieras saber más de nuestros productos?", en: "Hi! Would you like to know more about our products?", fr: "Bonjour, souhaitez-vous en savoir plus sur nos produits ?", pt: "Olá! Gostaria de saber mais sobre nossos produtos?" },
  "ui.waReserve": { es: "Hola, quiero reservar", en: "Hi, I'd like to book", fr: "Bonjour, je souhaite réserver", pt: "Olá, quero reservar" },
  "ui.waBuy": { es: "Hola! Quiero comprar:", en: "Hi! I'd like to buy:", fr: "Bonjour ! Je souhaite acheter :", pt: "Olá! Quero comprar:" },
  "ui.waTotal": { es: "Total", en: "Total", fr: "Total", pt: "Total" },
  "ui.waHi": { es: "Hola", en: "Hi", fr: "Bonjour", pt: "Olá" },
  "ui.formSubject": { es: "Consulta web", en: "Web enquiry", fr: "Demande via le site", pt: "Consulta pelo site" },
  "ui.cartTitle": { es: "Tu carrito", en: "Your cart", fr: "Votre panier", pt: "Seu carrinho" },
  "ui.cartCloseAria": { es: "Cerrar carrito", en: "Close cart", fr: "Fermer le panier", pt: "Fechar carrinho" },
  "ui.cartTotal": { es: "Total", en: "Total", fr: "Total", pt: "Total" },
  "ui.cartCheckout": { es: "Finalizar por WhatsApp", en: "Checkout on WhatsApp", fr: "Commander sur WhatsApp", pt: "Finalizar pelo WhatsApp" },
  "ui.cartEmpty": { es: "Tu carrito está vacío.", en: "Your cart is empty.", fr: "Votre panier est vide.", pt: "Seu carrinho está vazio." },
  "ui.cartDecAria": { es: "Reducir cantidad", en: "Reduce quantity", fr: "Réduire la quantité", pt: "Diminuir quantidade" },
  "ui.cartIncAria": { es: "Aumentar cantidad", en: "Increase quantity", fr: "Augmenter la quantité", pt: "Aumentar quantidade" },
  "ui.lightboxAria": { es: "Vista rápida de producto", en: "Quick product view", fr: "Aperçu rapide du produit", pt: "Visualização rápida do produto" },
  "ui.lightboxClose": { es: "Cerrar", en: "Close", fr: "Fermer", pt: "Fechar" },
  "ui.lightboxPrev": { es: "Producto anterior", en: "Previous product", fr: "Produit précédent", pt: "Produto anterior" },
  "ui.lightboxNext": { es: "Producto siguiente", en: "Next product", fr: "Produit suivant", pt: "Próximo produto" },
  "ui.addToCart": { es: "Agregar al carrito", en: "Add to cart", fr: "Ajouter au panier", pt: "Adicionar ao carrinho" },
  "ui.book": { es: "Reservar", en: "Book", fr: "Réserver", pt: "Reservar" },
  "ui.bookNow": { es: "Reservar ahora", en: "Book now", fr: "Réserver maintenant", pt: "Reservar agora" },
  "ui.fieldName": { es: "Nombre", en: "First name", fr: "Prénom", pt: "Nome" },
  "ui.fieldLast": { es: "Apellido", en: "Last name", fr: "Nom", pt: "Sobrenome" },
  "ui.fieldEmail": { es: "Email", en: "Email", fr: "E-mail", pt: "E-mail" },
  "ui.fieldMsg": { es: "Mensaje", en: "Message", fr: "Message", pt: "Mensagem" },
  "ui.submit": { es: "Enviar", en: "Send", fr: "Envoyer", pt: "Enviar" },
  "ui.succTitle": { es: "¡Mensaje listo! ✉️", en: "Message ready! ✉️", fr: "Message prêt ! ✉️", pt: "Mensagem pronta! ✉️" },
  "ui.countProducts": { es: "productos", en: "products", fr: "produits", pt: "produtos" },
  "shop.filtersAria": { es: "Filtrar productos", en: "Filter products", fr: "Filtrer les produits", pt: "Filtrar produtos" },
  "reserva.filtersAria": { es: "Filtrar servicios", en: "Filter services", fr: "Filtrer les services", pt: "Filtrar serviços" },

  /* ---------- Cartes de services (niveaux, min. personas, info) ---------- */
  "ui.moreInfo": { es: "Más info", en: "More info", fr: "Plus d'infos", pt: "Mais info" },
  "ui.moreInfoAria": { es: "Ver más información de esta expedición", en: "See more information about this expedition", fr: "Voir plus d'informations sur cette expédition", pt: "Ver mais informações sobre esta expedição" },
  "ui.minPax": { es: "mín. {n} personas", en: "min. {n} people", fr: "min. {n} personnes", pt: "mín. {n} pessoas" },
  "ui.minPaxOne": { es: "mín. 1 persona", en: "min. 1 person", fr: "min. 1 personne", pt: "mín. 1 pessoa" },
  "ui.privateNote": { es: "Elige cómo vivir tu aventura: en grupo o 100% privada, con toda la atención solo para ti. La opción privada incluye un suplemento del 20%.", en: "Choose how to live your adventure: in a group or fully private, with all the attention just for you. The private option includes a 20% supplement.", fr: "Choisissez comment vivre votre aventure : en groupe ou 100 % privée, avec toute l'attention rien que pour vous. L'option privée inclut un supplément de 20 %.", pt: "Escolha como viver a sua aventura: em grupo ou 100% privada, com toda a atenção só para você. A opção privada inclui um suplemento de 20%." },

  /* ---------- Niveaux de difficulté ---------- */
  "ui.levelPrincipiante": { es: "Principiante", en: "Beginner", fr: "Débutant", pt: "Iniciante" },
  "ui.levelIntermedio": { es: "Intermedio", en: "Intermediate", fr: "Intermédiaire", pt: "Intermediário" },
  "ui.levelAvanzado": { es: "Avanzado", en: "Advanced", fr: "Avancé", pt: "Avançado" },

  /* ---------- Accueil (index.html) ---------- */
  "home.heroEyebrow": { es: "Expediciones de naturaleza · Pichilemu", en: "Nature expeditions · Pichilemu", fr: "Expéditions nature · Pichilemu", pt: "Expedições de natureza · Pichilemu" },
  "home.heroTitle": { es: "Bienvenido a <em>Santuario</em> Expediciones", en: "Welcome to <em>Santuario</em> Expediciones", fr: "Bienvenue à <em>Santuario</em> Expediciones", pt: "Bem-vindo a <em>Santuario</em> Expediciones" },
  "home.heroSub": { es: "Explorando en silencio el humedal de las aves", en: "Silently exploring the birds' wetland", fr: "Explorer en silence le marais des oiseaux", pt: "Explorando em silêncio o pântano das aves" },
  "home.heroCta1": { es: "Explora las expediciones", en: "Explore the expeditions", fr: "Découvrir les expéditions", pt: "Explore as expedições" },
  "home.heroCta2": { es: "Reserva online", en: "Book online", fr: "Réserver en ligne", pt: "Reserve online" },
  "home.scroll": { es: "Scroll", en: "Scroll", fr: "Défiler", pt: "Role" },

  "home.expEyebrow": { es: "Expediciones", en: "Expeditions", fr: "Expéditions", pt: "Expedições" },
  "home.expTitle": { es: "Nuestras expediciones", en: "Our expeditions", fr: "Nos expéditions", pt: "Nossas expedições" },
  "home.expIntro": {
    es: "<strong>Mejor equipo para una travesía inolvidable.</strong> Trabajamos con las mejores marcas para entregarte una experiencia única en medio de la naturaleza: remos de competición, tradicionales de carbono de la marca Werner y variedad de opciones en remos esquimales de madera. Kayaks single y dobles de las marcas Venture, Riot y de fibra de la marca M&G, salvavidas Kakotat, equipos de rescate NRS — marcas que aseguran el mejor rendimiento en cualquier condición de navegación.",
    en: "<strong>The best gear for an unforgettable journey.</strong> We work with the best brands to give you a unique experience in nature: competition paddles, traditional Werner carbon paddles and a wide range of wooden eskimo paddles. Single and double kayaks from Venture, Riot and fiberglass kayaks from M&G, Kokatat life vests, NRS rescue gear — brands that guarantee the best performance in any navigation conditions.",
    fr: "<strong>Le meilleur équipement pour une traversée inoubliable.</strong> Nous travaillons avec les meilleures marques pour vous offrir une expérience unique en pleine nature : pagaies de compétition, pagaies traditionnelles en carbone Werner et une large gamme de pagaies esquimaudes en bois. Kayaks simple et double des marques Venture, Riot et fibre de verre M&G, gilets de sauvetage Kokatat, équipements de sauvetage NRS — des marques qui garantissent la meilleure performance dans toutes les conditions de navigation.",
    pt: "<strong>O melhor equipamento para uma travessia inesquecível.</strong> Trabalhamos com as melhores marcas para oferecer uma experiência única em meio à natureza: remos de competição, tradicionais de carbono da marca Werner e variedade de opções em remos esquimós de madeira. Caiaques single e duplo das marcas Venture, Riot e de fibra da marca M&G, coletes salva-vidas Kokatat, equipamentos de resgate NRS — marcas que garantem o melhor desempenho em qualquer condição de navegação."
  },

  "home.c1.aria": { es: "Observación de aves en kayak de travesía", en: "Bird watching on a sea kayak", fr: "Observation des oiseaux en kayak de mer", pt: "Observação de aves em caiaque de travessia" },
  "home.c1.imgAlt": { es: "Kayak de travesía en el humedal", en: "Sea kayak in the wetland", fr: "Kayak de mer dans le marais", pt: "Caiaque de travessia no pântano" },
  "home.c1.tag": "⏱ 3 h · 8 h",
  "home.c1.eyebrow": { es: "Kayak de travesía", en: "Sea kayak", fr: "Kayak de mer", pt: "Caiaque de travessia" },
  "home.c1.title": { es: "Observación de aves en kayak", en: "Bird watching by kayak", fr: "Observation des oiseaux en kayak", pt: "Observação de aves em caiaque" },
  "home.c1.desc": { es: "Explora en silencio el humedal de las aves sobre aguas tranquilas. Sin experiencia previa, apto para toda la familia.", en: "Silently explore the birds' wetland on calm waters. No previous experience needed, suitable for the whole family.", fr: "Explorez en silence le marais des oiseaux sur des eaux calmes. Sans expérience préalable, adapté à toute la famille.", pt: "Explore em silêncio o pântano das aves em águas calmas. Sem experiência prévia, adequado para toda a família." },
  "home.c1.cta": { es: "Saber más", en: "Learn more", fr: "En savoir plus", pt: "Saber mais" },

  "home.c2.aria": { es: "Trips fotográficos", en: "Photo trips", fr: "Trips photo", pt: "Trips fotográficos" },
  "home.c2.imgAlt": { es: "Trip fotográfico en el humedal", en: "Photo trip in the wetland", fr: "Trip photo dans le marais", pt: "Trip fotográfico no pântano" },
  "home.c2.tag": "⏱ 4.5 h · 7.5 h",
  "home.c2.eyebrow": { es: "Fotografía", en: "Photography", fr: "Photographie", pt: "Fotografia" },
  "home.c2.title": { es: "Trips fotográficos", en: "Photo trips", fr: "Trips photo", pt: "Trips fotográficos" },
  "home.c2.desc": { es: "El guía rema y te posiciona en los mejores rincones para que logres fotografías increíbles. Para profesionales y aficionados.", en: "The guide paddles and positions you in the best spots so you can take incredible photographs. For professionals and amateurs.", fr: "Le guide pagaie et vous positionne aux meilleurs endroits pour réussir des photos incroyables. Pour les professionnels comme pour les amateurs.", pt: "O guia rema e posiciona você nos melhores pontos para conseguir fotos incríveis. Para profissionais e amadores." },
  "home.c2.cta": { es: "Saber más", en: "Learn more", fr: "En savoir plus", pt: "Saber mais" },

  "home.c3.aria": { es: "Trekking guiado", en: "Guided trekking", fr: "Randonnée guidée", pt: "Trekking guiado" },
  "home.c3.imgAlt": { es: "Trekking guiado en la zona", en: "Guided trekking in the area", fr: "Randonnée guidée dans la région", pt: "Trekking guiado na região" },
  "home.c3.tag": "⏱ 2 h · 3 h",
  "home.c3.eyebrow": { es: "Trekking", en: "Trekking", fr: "Randonnée", pt: "Trekking" },
  "home.c3.title": { es: "Trekking guiado", en: "Guided trekking", fr: "Randonnée guidée", pt: "Trekking guiado" },
  "home.c3.desc": { es: "Descubre a pie los paisajes y la maravillosa biodiversidad de la zona, por rutas seguras ideales para toda la familia.", en: "Discover on foot the landscapes and wonderful biodiversity of the area, along safe routes ideal for the whole family.", fr: "Découvrez à pied les paysages et la merveilleuse biodiversité de la région, sur des sentiers sûrs idéaux pour toute la famille.", pt: "Descubra a pé as paisagens e a maravilhosa biodiversidade da região, por trilhas seguras ideais para toda a família." },
  "home.c3.cta": { es: "Saber más", en: "Learn more", fr: "En savoir plus", pt: "Saber mais" },

  "home.c4.aria": { es: "Rutas etnoculturales", en: "Ethnocultural routes", fr: "Itinéraires ethnoculturels", pt: "Rotas etnoculturais" },
  "home.c4.imgAlt": { es: "Ruta etnocultural con la comunidad", en: "Ethnocultural route with the community", fr: "Itinéraire ethnoculturel avec la communauté", pt: "Rota etnocultural com a comunidade" },
  "home.c4.tag": "⏱ 3 h · 8 h",
  "home.c4.eyebrow": { es: "Cultura", en: "Culture", fr: "Culture", pt: "Cultura" },
  "home.c4.title": { es: "Rutas etnoculturales", en: "Ethnocultural routes", fr: "Itinéraires ethnoculturels", pt: "Rotas etnoculturais" },
  "home.c4.desc": { es: "Conoce los oficios de las comunidades locales: salinas, molino de agua y trabajo en arcilla del territorio.", en: "Discover the crafts of the local communities: salt flats, water mill and the territory's clay work.", fr: "Découvrez les savoir-faire des communautés locales : salines, moulin à eau et travail de l'argile du territoire.", pt: "Conheça os ofícios das comunidades locais: salinas, moinho de água e trabalho em argila do território." },
  "home.c4.cta": { es: "Saber más", en: "Learn more", fr: "En savoir plus", pt: "Saber mais" },

  "home.c5.eyebrow": { es: "Expedición · 2 días", en: "Expedition · 2 days", fr: "Expédition · 2 jours", pt: "Expedição · 2 dias" },
  "home.c5.title": { es: "Expedición 2 días — Kayak + Glamping en el humedal", en: "2-day expedition — Kayak + Glamping by the wetland", fr: "Expédition 2 jours — Kayak + Glamping au bord du marais", pt: "Expedição 2 dias — Caiaque + Glamping no pântano" },
  "home.c5.desc": { es: "Una noche bajo las estrellas en glamping junto al humedal. Dos días de naturaleza, aves y silencio, con alojamiento incluido.", en: "A night under the stars in a glamping tent by the wetland. Two days of nature, birds and silence, with accommodation included.", fr: "Une nuit à la belle étoile en glamping au bord du marais. Deux jours de nature, d'oiseaux et de silence, hébergement inclus.", pt: "Uma noite sob as estrelas em glamping ao lado do pântano. Dois dias de natureza, aves e silêncio, com hospedagem incluída." },
  "home.c5.cta": { es: "Reservar", en: "Book", fr: "Réserver", pt: "Reservar" },

  "home.expMore": { es: "Ver todas las expediciones y reservar", en: "See all expeditions and book", fr: "Voir toutes les expéditions et réserver", pt: "Ver todas as expedições e reservar" },

  "home.shopEyebrow": { es: "Tienda", en: "Shop", fr: "Boutique", pt: "Loja" },
  "home.shopTitle": { es: "Conoce nuestros productos", en: "Discover our products", fr: "Découvrez nos produits", pt: "Conheça nossos produtos" },
  "home.shopIntro": { es: "En nuestra agencia/tienda y tienda online encontrarás productos artesanales, equipo outdoor de las marcas Opinel, Stanley, Campante, entre otras, además de libros, guías de identificación de especies y mucho más.", en: "At our agency/store and online shop you'll find artisan products, outdoor gear from brands like Opinel, Stanley, Campante and more, plus books, species identification field guides and much more.", fr: "Dans notre agence/boutique et notre boutique en ligne, vous trouverez des produits artisanaux, de l'équipement outdoor des marques Opinel, Stanley, Campante et bien d'autres, ainsi que des livres, des guides d'identification des espèces et bien plus.", pt: "Em nossa agência/loja e na loja online você encontra produtos artesanais, equipamento outdoor das marcas Opinel, Stanley, Campante, entre outras, além de livros, guias de identificação de espécies e muito mais." },
  "home.shopCta": { es: "Ver todos los productos", en: "View all products", fr: "Voir tous les produits", pt: "Ver todos os produtos" },

  "home.galEyebrow": { es: "El humedal", en: "The wetland", fr: "Le marais", pt: "O pântano" },
  "home.galTitle": { es: "Explorando en silencio el humedal de las aves", en: "Silently exploring the birds' wetland", fr: "Explorer en silence le marais des oiseaux", pt: "Explorando em silêncio o pântano das aves" },
  "home.galSub": { es: "Un tercio de las especies de aves de humedal presentes en Chile encuentra aquí su hogar.", en: "A third of the wetland bird species found in Chile call this place home.", fr: "Un tiers des espèces d'oiseaux de marais présentes au Chili trouve ici son foyer.", pt: "Um terço das espécies de aves de pântano presentes no Chile encontra aqui seu lar." },
  "home.gal1Alt": { es: "Aves en el humedal de Cáhuil", en: "Birds in the Cáhuil wetland", fr: "Oiseaux dans le marais de Cáhuil", pt: "Aves no pântano de Cáhuil" },
  "home.gal2Alt": { es: "Kayak de travesía en aguas tranquilas", en: "Sea kayak on calm waters", fr: "Kayak de mer sur eaux calmes", pt: "Caiaque de travessia em águas calmas" },
  "home.gal3Alt": { es: "Paisaje del humedal", en: "Wetland landscape", fr: "Paysage du marais", pt: "Paisagem do pântano" },

  "home.newsEyebrow": { es: "Novedades", en: "News", fr: "Actualités", pt: "Novidades" },
  "home.newsTitle": { es: "Entérate de todo", en: "Stay informed", fr: "Restez informés", pt: "Fique por dentro" },

  "home.aboutEyebrow": { es: "Nosotros", en: "About us", fr: "À propos", pt: "Sobre nós" },
  "home.aboutTitle": { es: "Sobre nosotros y nuestro objetivo", en: "About us and our mission", fr: "Qui nous sommes et notre objectif", pt: "Sobre nós e nosso objetivo" },
  "home.aboutText": { es: "Somos un equipo de personas apasionadas por la vida en la naturaleza, la fotografía y los deportes outdoor. Buscamos acercar a las personas a rincones naturales de gran valor, lugares que deben ser puestos en valor por todos con urgencia, ya que poseen una importancia vital para el equilibrio de los ecosistemas y la diversidad de especies, y que a su vez, en su estado puro, presentan condiciones ideales para el desarrollo económico de las comunidades.", en: "We are a team of people passionate about life in nature, photography and outdoor sports. We seek to bring people closer to natural corners of great value — places that urgently need to be appreciated by everyone, as they hold vital importance for the balance of ecosystems and species diversity, while in their pure state offering ideal conditions for the economic development of local communities.", fr: "Nous sommes une équipe passionnée par la vie en pleine nature, la photographie et les sports outdoor. Nous cherchons à rapprocher les personnes des recoins naturels de grande valeur — des lieux qui doivent être valorisés par tous, car ils sont essentiels à l'équilibre des écosystèmes et à la diversité des espèces, tout en offrant, dans leur état pur, des conditions idéales au développement économique des communautés.", pt: "Somos uma equipe apaixonada pela vida em contato com a natureza, pela fotografia e pelos esportes outdoor. Buscamos aproximar as pessoas de recantos naturais de grande valor — lugares que precisam ser valorizados por todos com urgência, pois têm importância vital para o equilíbrio dos ecossistemas e a diversidade de espécies, e que, em seu estado puro, oferecem condições ideais para o desenvolvimento econômico das comunidades." },
  "home.aboutTeam": { es: "Conoce al equipo", en: "Meet the team", fr: "Rencontrer l'équipe", pt: "Conheça a equipe" },
  "home.aboutVol": { es: "Voluntariado", en: "Volunteering", fr: "Bénévolat", pt: "Voluntariado" },

  /* ---------- Reseñas (index.html) ---------- */
  "home.revEyebrow": { es: "Reseñas", en: "Reviews", fr: "Avis", pt: "Avaliações" },
  "home.revTitle": { es: "Lo que dicen nuestros viajeros", en: "What our travellers say", fr: "Ce que disent nos voyageurs", pt: "O que dizem nossos viajantes" },
  "home.revSub": { es: "Calificado con 4,9 sobre 5 en Tripadvisor y en Google, por más de 30 viajeros que han vivido nuestras expediciones.", en: "Rated 4.9 out of 5 on Tripadvisor and on Google by more than 30 travellers who have lived our expeditions.", fr: "Noté 4,9 sur 5 sur Tripadvisor et Google par plus de 30 voyageurs qui ont vécu nos expéditions.", pt: "Avaliado com 4,9 de 5 no Tripadvisor e no Google, por mais de 30 viajantes que viveram nossas expedições." },
  "home.revTaName": { es: "Tripadvisor", en: "Tripadvisor", fr: "Tripadvisor", pt: "Tripadvisor" },
  "home.revTaCount": { es: "2 reseñas", en: "2 reviews", fr: "2 avis", pt: "2 avaliações" },
  "home.revGName": { es: "Google", en: "Google", fr: "Google", pt: "Google" },
  "home.revGCount": { es: "15 reseñas", en: "15 reviews", fr: "15 avis", pt: "15 avaliações" },
  "home.revSee": { es: "Ver en la plataforma", en: "See on the platform", fr: "Voir sur la plateforme", pt: "Ver na plataforma" },
  "home.rev1": {
    es: "Mi pareja y yo tuvimos la mejor experiencia con Pablo. Su atención al detalle en el viaje en kayak fue increíble. Es tan informativo sobre la biodiversidad y un tipo tan divertido. Nos hizo sentir tan bienvenidos y nos explicó todo lo que necesitábamos saber. Sin duda volvería de nuevo y recomendaría esto a todo el mundo. ¡Gracias Pablo!",
    en: "My partner and I had the best experience with Pablo. His attention to detail on the kayak trip was incredible. He is so knowledgeable about biodiversity and such a fun guy. He made us feel so welcome and explained everything we needed to know so well. I would definitely go again and recommend this to everyone. Thank you Pablo!",
    fr: "Mon compagnon et moi avons vécu la meilleure expérience avec Pablo. Son souci du détail lors du kayak était incroyable. Il connaît parfaitement la biodiversité et est très amusant. Il nous a fait sentir les bienvenus et nous a tout expliqué. Nous y retournerions sans hésiter et le recommandons à tous. Merci Pablo !",
    pt: "Meu parceiro e eu tivemos a melhor experiência com o Pablo. Sua atenção aos detalhes na viagem de caiaque foi incrível. Ele é muito informativo sobre a biodiversidade e muito divertido. Nos fez sentir muito bem-vindos e explicou tudo que precisávamos saber. Com certeza voltaria e recomendaria a todos. Obrigado, Pablo!"
  },
  "home.rev1Name": { es: "Silver Moon T", en: "Silver Moon T", fr: "Silver Moon T", pt: "Silver Moon T" },
  "home.rev1Date": { es: "Octubre 2024", en: "October 2024", fr: "Octobre 2024", pt: "Outubro 2024" },
  "home.rev2": {
    es: "Este paseo es un imperdible si quieres conocer el humedal de Cahuil desde otra perspectiva. El paisaje es precioso, muchísimas aves, buen guiado y el kayak de travesía es muy agradable para moverse con fluidez dentro del agua. Apto para todo tipo de público.",
    en: "This trip is a must if you want to see the Cahuil wetland from another perspective. The landscape is beautiful, so many birds, great guiding, and the sea kayak is very pleasant for moving fluidly through the water. Suitable for all audiences.",
    fr: "Cette sortie est incontournable pour découvrir le marais de Cahuil sous un autre angle. Paysage superbe, oiseaux en abondance, excellente conduite et le kayak de mer est très agréable pour évoluer sur l'eau. Adapté à tous les publics.",
    pt: "Este passeio é imperdível se você quiser conhecer o pântano de Cahuil por outra perspectiva. A paisagem é linda, muitas aves, boa condução e o caiaque de travessia é muito agradável para se mover com fluidez na água. Adequado para todos os públicos."
  },
  "home.rev2Name": { es: "Lisbeth T", en: "Lisbeth T", fr: "Lisbeth T", pt: "Lisbeth T" },
  "home.rev2Date": { es: "Enero 2024", en: "January 2024", fr: "Janvier 2024", pt: "Janeiro 2024" },
  "home.rev3": {
    es: "Pablo fue fantástico y muy conocedor de la flora y la fauna. Nos explicó qué plantas eran comestibles y nos enseñó sobre las aves. Disfrutamos mucho la salida con nuestros hijos y recomendamos mucho sus tours.",
    en: "Pablo was fantastic and very knowledgeable about the flora and fauna. He explained which plants were edible and educated us about the birds. We enjoyed the outing with our children a lot and highly recommend his tours.",
    fr: "Pablo était fantastique et très connaisseur de la flore et de la faune. Il nous a expliqué quelles plantes étaient comestibles et nous a éduqués sur les oiseaux. Nous avons adoré la sortie avec nos enfants et recommandons vivement ses tours.",
    pt: "O Pablo foi fantástico e muito conhecedor da flora e da fauna. Explicou quais plantas eram comestíveis e nos ensinou sobre as aves. Aproveitamos muito o passeio com nossos filhos e recomendamos muito seus tours."
  },
  "home.rev3Name": { es: "Kathrin Yoneoka", en: "Kathrin Yoneoka", fr: "Kathrin Yoneoka", pt: "Kathrin Yoneoka" },
  "home.rev3Date": { es: "Hace 5 meses", en: "5 months ago", fr: "Il y a 5 mois", pt: "Há 5 meses" },
  "home.rev4": {
    es: "Hicimos un tour de kayak al atardecer en Cahuíl con Pablo y ¡fue increíble! Fue muy amable, realmente informativo sobre la naturaleza y la fauna del lugar, y nos llevó por una ruta increíble río abajo por el estuario. Si buscas un guía, no busques más.",
    en: "We went on a sunset kayaking trip in Cahuíl with Pablo and it was incredible! He was so friendly, really informative about the nature and wildlife in the area, and took us on an amazing route down the estuary! If you're looking for a guide, look no further.",
    fr: "Nous avons fait un tour de kayak au coucher du soleil à Cahuil avec Pablo, incroyable ! Très sympathique, vraiment informatif sur la nature et la faune locale, et il nous a emmenés sur un superbe parcours en aval de l'estuaire. Si vous cherchez un guide, ne cherchez plus.",
    pt: "Fizemos um tour de caiaque ao pôr do sol em Cahuil com o Pablo e foi incrível! Muito gentil, realmente informativo sobre a natureza e a fauna do lugar, e nos levou por um roteiro incrível rio abaixo pelo estuário. Se você procura um guia, não procure mais."
  },
  "home.rev4Name": { es: "Jack Breeze", en: "Jack Breeze", fr: "Jack Breeze", pt: "Jack Breeze" },
  "home.rev4Date": { es: "Hace 1 año", en: "1 year ago", fr: "Il y a 1 an", pt: "Há 1 ano" },
  "home.rev5": {
    es: "¡Una experiencia buenísima con un guía muy amable que te cuenta mucho sobre la naturaleza chilena!",
    en: "Such a cool experience with a really friendly guide who will tell you a lot about Chilean nature!",
    fr: "Une expérience géniale avec un guide très sympathique qui vous en apprend beaucoup sur la nature chilienne !",
    pt: "Uma experiência ótima com um guia muito simpático que conta muito sobre a natureza chilena!"
  },
  "home.rev5Name": { es: "Julien", en: "Julien", fr: "Julien", pt: "Julien" },
  "home.rev5Date": { es: "Hace 1 año", en: "1 year ago", fr: "Il y a 1 an", pt: "Há 1 ano" },
  "home.revMore": { es: "Ver todas las reseñas en Tripadvisor y Google", en: "See all reviews on Tripadvisor and Google", fr: "Voir tous les avis sur Tripadvisor et Google", pt: "Ver todas as avaliações no Tripadvisor e no Google" },

  "home.stayEyebrow": { es: "Alojamiento", en: "Accommodation", fr: "Hébergement", pt: "Hospedagem" },
  "home.stayTitle": { es: "¿Buscas dónde alojarte en Pichilemu?", en: "Looking for a place to stay in Pichilemu?", fr: "Vous cherchez où loger à Pichilemu ?", pt: "Procurando onde se hospedar em Pichilemu?" },
  "home.stayText": { es: "Te invitamos a conocer nuestro <strong>camping ecológico Olas de Chile Ecocamp</strong>: sitio autosustentable en Alto Punta de Lobos, con energía solar, bosque nativo y pet friendly, a minutos de la playa. Ideal para completar tu estadía junto a la naturaleza.", en: "We invite you to discover our <strong>ecological camping Olas de Chile Ecocamp</strong>: a self-sustaining site in Alto Punta de Lobos, with solar energy, native forest and pet friendly, minutes from the beach. Perfect to complete your stay close to nature.", fr: "Nous vous invitons à découvrir notre <strong>camping écologique Olas de Chile Ecocamp</strong> : un site autosuffisant à Alto Punta de Lobos, avec énergie solaire, forêt native et pet friendly, à quelques minutes de la plage. Idéal pour compléter votre séjour au plus près de la nature.", pt: "Convidamos você a conhecer nosso <strong>camping ecológico Olas de Chile Ecocamp</strong>: um local autossustentável em Alto Punta de Lobos, com energia solar, mata nativa e pet friendly, a minutos da praia. Ideal para completar sua estadia em contato com a natureza." },
  "home.stayCta": { es: "Descubrir el camping", en: "Discover the camping", fr: "Découvrir le camping", pt: "Descubra o camping" },
  "home.stayImgAlt": { es: "Olas de Chile Ecocamp — camping ecológico en Punta de Lobos", en: "Olas de Chile Ecocamp — ecological campsite at Punta de Lobos", fr: "Olas de Chile Ecocamp — camping écologique à Punta de Lobos", pt: "Olas de Chile Ecocamp — camping ecológico em Punta de Lobos" },

  "home.ctaTitle": { es: "¿Listo para explorar?", en: "Ready to explore?", fr: "Prêt à explorer ?", pt: "Pronto para explorar?" },
  "home.ctaText": { es: "Reserva tu expedición online o escríbenos por WhatsApp. Diseñamos cada travesía según tu ritmo y tus intereses.", en: "Book your expedition online or message us on WhatsApp. We design each trip around your pace and interests.", fr: "Réservez votre expédition en ligne ou écrivez-nous sur WhatsApp. Nous concevons chaque traversée selon votre rythme et vos envies.", pt: "Reserve sua expedição online ou escreva-nos no WhatsApp. Desenhamos cada travessia de acordo com seu ritmo e seus interesses." },
  "home.ctaBook": { es: "Reserva online", en: "Book online", fr: "Réserver en ligne", pt: "Reserve online" },
  "home.ctaWa": { es: "WhatsApp", en: "WhatsApp", fr: "WhatsApp", pt: "WhatsApp" },

  /* ---------- Kayak (kayak.html) ---------- */
  "kayak.heroEyebrow": { es: "Expediciones · Kayak", en: "Expeditions · Kayak", fr: "Expéditions · Kayak", pt: "Expedições · Caiaque" },
  "kayak.heroTitle": { es: "Observación de aves en <em>kayak de travesía</em>", en: "Bird watching by <em>sea kayak</em>", fr: "Observation des oiseaux en <em>kayak de mer</em>", pt: "Observação de aves em <em>caiaque de travessia</em>" },
  "kayak.heroContact": { es: "Contacto", en: "Contact", fr: "Contact", pt: "Contato" },
  "kayak.intro1": { es: "Travesías por tranquilas aguas de la <strong>Laguna de Cáhuil</strong>, <strong>Laguna El Perro</strong> y/o <strong>Estero Nilahue</strong>, hogar y parada indispensable para un tercio de las especies de aves de humedal presentes en Chile.", en: "Trips across the calm waters of <strong>Cáhuil Lagoon</strong>, <strong>El Perro Lagoon</strong> and/or <strong>Nilahue Estuary</strong>, home and essential stopover for a third of the wetland bird species found in Chile.", fr: "Des traversées sur les eaux calmes de la <strong>Laguna de Cáhuil</strong>, de la <strong>Laguna El Perro</strong> et/ou de l'<strong>Estero Nilahue</strong>, foyer et escale indispensable pour un tiers des espèces d'oiseaux de marais présentes au Chili.", pt: "Travessias pelas águas calmas da <strong>Laguna de Cáhuil</strong>, <strong>Laguna El Perro</strong> e/ou <strong>Estero Nilahue</strong>, lar e parada indispensável para um terço das espécies de aves de pântano presentes no Chile." },
  "kayak.intro2": { es: "Las expediciones en kayak de travesía son la forma ideal para conocer la gran biodiversidad de aves que habitan las lagunas y humedales de la zona. Se recorren aguas tranquilas, sin corriente ni oleaje, por lo que es bastante seguro y no requiere experiencia previa — se hace una pequeña inducción antes de comenzar el paseo.", en: "Sea kayaking expeditions are the ideal way to discover the great bird biodiversity of the local lagoons and wetlands. We paddle on calm waters with no current or waves, so it is very safe and requires no previous experience — a short briefing is given before the trip starts.", fr: "Les expéditions en kayak de mer sont le moyen idéal de découvrir la grande biodiversité d'oiseaux des lagunes et marais de la région. On navigue sur des eaux calmes, sans courant ni vagues : c'est très sûr et ne requiert aucune expérience préalable — une courte initiation est faite avant de partir.", pt: "As expedições em caiaque de travessia são a forma ideal de conhecer a grande biodiversidade de aves que habitam as lagoas e pântanos da região. Navegamos em águas calmas, sem corrente nem ondas, por isso é bastante seguro e não exige experiência prévia — é feita uma pequena introdução antes de começar o passeio." },
  "kayak.intro3": { es: "Se opera con grupos pequeños, la idea es causar el menor impacto posible y poder compartir con las especies en su hábitat natural, siempre a una distancia que permita presenciarlas con empatía y respeto. <strong>Actividad apta para toda la familia.</strong>", en: "We operate with small groups, aiming to cause the least possible impact and share time with the species in their natural habitat, always at a distance that lets us watch them with empathy and respect. <strong>Activity suitable for the whole family.</strong>", fr: "Nous opérons en petits groupes, avec l'idée de causer le moins d'impact possible et de partager le temps des espèces dans leur habitat naturel, toujours à une distance qui permet de les observer avec empathie et respect. <strong>Activité adaptée à toute la famille.</strong>", pt: "Operamos com grupos pequenos, com a ideia de causar o menor impacto possível e compartilhar o tempo das espécies em seu habitat natural, sempre a uma distância que permita observá-las com empatia e respeito. <strong>Atividade adequada para toda a família.</strong>" },
  "kayak.opEyebrow": { es: "Elige tu expedición", en: "Choose your expedition", fr: "Choisissez votre expédition", pt: "Escolha sua expedição" },
  "kayak.opTitle": { es: "Cuatro formatos, un mismo humedal", en: "Four formats, one wetland", fr: "Quatre formats, un même marais", pt: "Quatro formatos, um mesmo pântano" },
  "kayak.contactEyebrow": { es: "Contacto", en: "Contact", fr: "Contact", pt: "Contato" },
  "kayak.contactTitle": { es: "¿Te gusta lo que ves? Contáctanos para saber más.", en: "Like what you see? Contact us to learn more.", fr: "Ça vous plaît ? Contactez-nous pour en savoir plus.", pt: "Gostou do que viu? Fale conosco para saber mais." },
  "kayak.succBody": { es: "Se abrió tu aplicación de correo con el mensaje preparado. También puedes escribirnos directo a <a href=\"mailto:info@santuarioexpediciones.com\" style=\"color:var(--green);text-decoration:underline\">info@santuarioexpediciones.com</a>.", en: "Your email app opened with the message ready. You can also write to us directly at <a href=\"mailto:info@santuarioexpediciones.com\" style=\"color:var(--green);text-decoration:underline\">info@santuarioexpediciones.com</a>.", fr: "Votre application de messagerie s'est ouverte avec le message prêt. Vous pouvez aussi nous écrire directement à <a href=\"mailto:info@santuarioexpediciones.com\" style=\"color:var(--green);text-decoration:underline\">info@santuarioexpediciones.com</a>.", pt: "Seu aplicativo de e-mail abriu com a mensagem pronta. Você também pode escrever direto para <a href=\"mailto:info@santuarioexpediciones.com\" style=\"color:var(--green);text-decoration:underline\">info@santuarioexpediciones.com</a>." },

  /* ---------- Trips fotográficos (trips-fotograficos.html) ---------- */
  "foto.heroEyebrow": { es: "Expediciones · Fotografía", en: "Expeditions · Photography", fr: "Expéditions · Photographie", pt: "Expedições · Fotografia" },
  "foto.heroTitle": { es: "Expedición <em>fotográfica</em>", en: "<em>Photography</em> expedition", fr: "Expédition <em>photographique</em>", pt: "Expedição <em>fotográfica</em>" },
  "foto.heroSub": { es: "Para profesionales y amantes de la fotografía", en: "For professionals and photography lovers", fr: "Pour les professionnels et les amoureux de la photographie", pt: "Para profissionais e amantes da fotografia" },
  "foto.intro": { es: "En este formato de expedición, el guía te acompaña en el <strong>kayak doble</strong> y se encarga del remado y de posicionarte de la mejor manera para que logres fotografías increíbles. Tú solo te ocupas de observar y disparar.", en: "In this expedition format, the guide accompanies you on a <strong>double kayak</strong>, doing all the paddling and positioning you perfectly so you can take incredible photographs. You only need to observe and shoot.", fr: "Dans ce format d'expédition, le guide vous accompagne en <strong>kayak double</strong> et se charge de pagayer et de vous positionner au mieux pour réussir des photos incroyables. Vous n'avez qu'à observer et à déclencher.", pt: "Neste formato de expedição, o guia acompanha você em <strong>caiaque duplo</strong> e se encarrega de remar e posicionar você da melhor forma para conseguir fotos incríveis. Você só precisa observar e fotografar." },

  /* ---------- Trekking (trekking.html) ---------- */
  "trek.heroEyebrow": { es: "Expediciones · Trekking", en: "Expeditions · Trekking", fr: "Expéditions · Randonnée", pt: "Expedições · Trekking" },
  "trek.heroTitle": { es: "Trekking <em>guiados</em>", en: "<em>Guided</em> trekking", fr: "Randonnées <em>guidées</em>", pt: "Trekking <em>guiados</em>" },
  "trek.heroSub": { es: "Descubre a pie los paisajes de la zona y la maravillosa biodiversidad que aquí habita.", en: "Discover on foot the local landscapes and the wonderful biodiversity that lives here.", fr: "Découvrez à pied les paysages de la région et la merveilleuse biodiversité qui y vit.", pt: "Descubra a pé as paisagens da região e a maravilhosa biodiversidade que aqui habita." },

  /* ---------- Rutas etnoculturales (rutas-etnoculturales.html) ---------- */
  "etno.heroEyebrow": { es: "Expediciones · Cultura", en: "Expeditions · Culture", fr: "Expéditions · Culture", pt: "Expedições · Cultura" },
  "etno.heroTitle": { es: "Rutas <em>etnoculturales</em>", en: "<em>Ethnocultural</em> routes", fr: "Itinéraires <em>ethnoculturels</em>", pt: "Rotas <em>etnoculturais</em>" },
  "etno.heroSub": { es: "Conoce los oficios de las comunidades locales y habitantes del territorio.", en: "Discover the crafts of the local communities and the people of the territory.", fr: "Découvrez les savoir-faire des communautés locales et des habitants du territoire.", pt: "Conheça os ofícios das comunidades locais e dos habitantes do território." },

  /* ---------- Tienda (tienda.html) ---------- */
  "shop.bannerText": { es: "Envíos a todo Chile", en: "Shipping throughout Chile", fr: "Expédition dans tout le Chili", pt: "Envios para todo o Chile" },
  "shop.bannerTitle": { es: "Equípate con nosotros", en: "Gear up with us", fr: "Équipez-vous avec nous", pt: "Equipe-se conosco" },
  "shop.ctaTitle": { es: "¿No encuentras lo que buscas?", en: "Can't find what you're looking for?", fr: "Vous ne trouvez pas ce que vous cherchez ?", pt: "Não encontra o que procura?" },
  "shop.ctaText": { es: "¿Dudas? Pregunta al WhatsApp — te ayudamos a elegir el equipo ideal para tu próxima expedición.", en: "Questions? Ask on WhatsApp — we'll help you choose the ideal gear for your next expedition.", fr: "Des questions ? Posez-les sur WhatsApp — nous vous aidons à choisir l'équipement idéal pour votre prochaine expédition.", pt: "Dúvidas? Pergunte no WhatsApp — ajudamos você a escolher o equipamento ideal para sua próxima expedição." },
  "shop.ctaBtn": { es: "Preguntar por WhatsApp", en: "Ask on WhatsApp", fr: "Demander sur WhatsApp", pt: "Perguntar no WhatsApp" },

  /* ---------- Reserva (reserva.html) ---------- */
  "reserva.eyebrow": { es: "Reserva online", en: "Online booking", fr: "Réservation en ligne", pt: "Reserva online" },
  "reserva.title": { es: "Nuestros servicios", en: "Our services", fr: "Nos services", pt: "Nossos serviços" },
  "reserva.intro": { es: "Elige tu expedición, duración y horario. Reserva directamente por WhatsApp y confirma tu travesía.", en: "Choose your expedition, duration and schedule. Book directly on WhatsApp and confirm your trip.", fr: "Choisissez votre expédition, sa durée et son horaire. Réservez directement sur WhatsApp et confirmez votre traversée.", pt: "Escolha sua expedição, duração e horário. Reserve diretamente pelo WhatsApp e confirme sua travessia." },
  "reserva.ctaTitle": { es: "¿Dudas sobre horarios o disponibilidad?", en: "Questions about schedules or availability?", fr: "Des questions sur les horaires ou la disponibilité ?", pt: "Dúvidas sobre horários ou disponibilidade?" },
  "reserva.ctaText": { es: "Escríbenos por WhatsApp y coordinamos tu expedición a medida.", en: "Message us on WhatsApp and we'll tailor your expedition for you.", fr: "Écrivez-nous sur WhatsApp et nous adaptons votre expédition à vos envies.", pt: "Escreva-nos no WhatsApp e combinamos sua expedição sob medida." },
  "reserva.ctaBtn": { es: "Escribir por WhatsApp", en: "Write on WhatsApp", fr: "Écrire sur WhatsApp", pt: "Escrever no WhatsApp" },

  /* ---------- Equipo (equipo.html) ---------- */
  "team.eyebrow": { es: "Nosotros", en: "About us", fr: "À propos", pt: "Sobre nós" },
  "team.title": { es: "Nuestro equipo", en: "Our team", fr: "Notre équipe", pt: "Nossa equipe" },
  "team.sub": { es: "Personas apasionadas por la vida en la naturaleza, la fotografía y los deportes outdoor.", en: "People passionate about life in nature, photography and outdoor sports.", fr: "Des personnes passionnées par la vie en pleine nature, la photographie et les sports outdoor.", pt: "Pessoas apaixonadas pela vida em contato com a natureza, pela fotografia e pelos esportes outdoor." },
  "team.p1.role": { es: "Fundador & guía", en: "Founder & guide", fr: "Fondateur & guide", pt: "Fundador & guia" },
  "team.p2.role": { es: "Guía & tienda", en: "Guide & shop", fr: "Guide & boutique", pt: "Guia & loja" },
  "team.p3.role": { es: "Camping & expediciones", en: "Campground & expeditions", fr: "Camping & expéditions", pt: "Camping & expedições" },
  "team.ctaTitle": { es: "¿Quieres sumarte?", en: "Want to join us?", fr: "Envie de nous rejoindre ?", pt: "Quer se juntar a nós?" },
  "team.ctaText": { es: "Conoce nuestro programa de volunturismo y trabaja con nosotros.", en: "Discover our voluntourism program and work with us.", fr: "Découvrez notre programme de volontourisme et travaillez avec nous.", pt: "Conheça nosso programa de volunturismo e trabalhe conosco." },
  "team.ctaBtn": { es: "Descubre el voluntariado", en: "Discover volunteering", fr: "Découvrir le bénévolat", pt: "Descubra o voluntariado" },

  /* ---------- Voluntariado (voluntariado.html) ---------- */
  "vol.eyebrow": { es: "Voluntariado", en: "Volunteering", fr: "Bénévolat", pt: "Voluntariado" },
  "vol.title": { es: "Volunturismo con nosotros", en: "Voluntourism with us", fr: "Le volontourisme avec nous", pt: "Volunturismo conosco" },
  "vol.sub": { es: "Trabaja con nosotros, conoce lo que nos mueve.", en: "Work with us, get to know what drives us.", fr: "Travaillez avec nous, découvrez ce qui nous anime.", pt: "Trabalhe conosco, conheça o que nos move." },
  "vol.p1": { es: "¿Quieres descubrir cómo funciona nuestra agencia y ayudarnos a realizar diversas tareas?", en: "Want to find out how our agency works and help us with various tasks?", fr: "Envie de découvrir le fonctionnement de notre agence et de nous aider sur diverses tâches ?", pt: "Quer descobrir como funciona nossa agência e nos ajudar em diversas tarefas?" },
  "vol.p2": { es: "Todos los <strong>jueves</strong> ofrecemos nuestro programa de volunturismo, que consiste en <strong>medio día de voluntariado</strong> seguido de una <strong>travesía en kayak</strong>.", en: "Every <strong>Thursday</strong> we offer our voluntourism program: <strong>half a day of volunteering</strong> followed by a <strong>kayak trip</strong>.", fr: "Chaque <strong>jeudi</strong>, nous proposons notre programme de volontourisme : <strong>une demi-journée de bénévolat</strong> suivie d'une <strong>traversée en kayak</strong>.", pt: "Todas as <strong>quintas-feiras</strong> oferecemos nosso programa de volunturismo, que consiste em <strong>meio dia de voluntariado</strong> seguido de uma <strong>travessia de caiaque</strong>." },
  "vol.p3": { es: "Puedes ayudarnos con reparaciones, pintura o jardinería, por ejemplo. También puedes participar en jornadas de limpieza de humedales.", en: "You can help us with repairs, painting or gardening, for example. You can also join our wetland clean-up days.", fr: "Vous pouvez nous aider pour des réparations, de la peinture ou du jardinage, par exemple. Vous pouvez aussi participer aux journées de nettoyage des marais.", pt: "Você pode nos ajudar com reparos, pintura ou jardinagem, por exemplo. Também pode participar das jornadas de limpeza de pântanos." },
  "vol.quote": { es: "¡Estaremos encantados de conocerte y compartir contigo!", en: "We'd love to meet you and share time with you!", fr: "Nous serons ravis de vous rencontrer et de partager avec vous !", pt: "Ficaremos encantados em conhecê-lo e compartilhar com você!" },
  "vol.contactBtn": { es: "Contáctanos", en: "Contact us", fr: "Contactez-nous", pt: "Fale conosco" },
  "vol.whereTitle": { es: "Dónde estamos", en: "Where we are", fr: "Où nous trouver", pt: "Onde estamos" },
  "vol.formEyebrow": { es: "Escríbenos", en: "Write to us", fr: "Écrivez-nous", pt: "Escreva-nos" },
  "vol.formTitle": { es: "¿Te gustaría participar?", en: "Would you like to take part?", fr: "Aimeriez-vous participer ?", pt: "Gostaria de participar?" },
  "vol.succBody": { es: "Se abrió tu aplicación de correo con el mensaje preparado. Te responderemos a la brevedad.", en: "Your email app opened with the message ready. We'll get back to you shortly.", fr: "Votre application de messagerie s'est ouverte avec le message prêt. Nous vous répondrons rapidement.", pt: "Seu aplicativo de e-mail abriu com a mensagem pronta. Responderemos em breve." },

  /* ---------- Contacto (contact.html) ---------- */
  "contact.eyebrow": { es: "Contacto", en: "Contact", fr: "Contact", pt: "Contato" },
  "contact.title": { es: "Hablemos de tu próxima expedición", en: "Let's talk about your next expedition", fr: "Parlons de votre prochaine expédition", pt: "Vamos falar sobre sua próxima expedição" },
  "contact.sub": { es: "Escríbenos por WhatsApp, email o ven a visitarnos a nuestra agencia/tienda en Pichilemu. Te ayudamos a elegir la travesía ideal.", en: "Write to us on WhatsApp, email or visit us at our agency/store in Pichilemu. We'll help you choose the ideal trip.", fr: "Écrivez-nous sur WhatsApp, par e-mail ou venez nous rendre visite à notre agence/boutique de Pichilemu. Nous vous aidons à choisir la traversée idéale.", pt: "Escreva-nos no WhatsApp, por e-mail ou venha nos visitar em nossa agência/loja em Pichilemu. Ajudamos você a escolher a travessia ideal." },
  "contact.waTitle": { es: "WhatsApp", en: "WhatsApp", fr: "WhatsApp", pt: "WhatsApp" },
  "contact.waSub": { es: "Respuesta rápida y directa", en: "Quick and direct replies", fr: "Réponse rapide et directe", pt: "Resposta rápida e direta" },
  "contact.emailTitle": { es: "Email", en: "Email", fr: "E-mail", pt: "E-mail" },
  "contact.emailSub": { es: "Para consultas y propuestas", en: "For questions and proposals", fr: "Pour les questions et propositions", pt: "Para consultas e propostas" },
  "contact.shopTitle": { es: "Agencia / Tienda", en: "Agency / Store", fr: "Agence / Boutique", pt: "Agência / Loja" },
  "contact.shopSub1": { es: "Camino a Cahuil 4851 A", en: "Camino a Cahuil 4851 A", fr: "Camino a Cahuil 4851 A", pt: "Camino a Cahuil 4851 A" },
  "contact.shopSub2": { es: "Punta de Lobos, Pichilemu, Chile", en: "Punta de Lobos, Pichilemu, Chile", fr: "Punta de Lobos, Pichilemu, Chili", pt: "Punta de Lobos, Pichilemu, Chile" },
  "contact.hoursTitle": { es: "Horario de atención", en: "Opening hours", fr: "Horaires d'ouverture", pt: "Horário de atendimento" },
  "contact.hoursDir": { es: "Cómo llegar", en: "Get directions", fr: "Itinéraire", pt: "Como chegar" },
  "contact.dayMon": { es: "Lunes", en: "Monday", fr: "Lundi", pt: "Segunda" },
  "contact.dayTue": { es: "Martes", en: "Tuesday", fr: "Mardi", pt: "Terça" },
  "contact.dayWed": { es: "Miércoles", en: "Wednesday", fr: "Mercredi", pt: "Quarta" },
  "contact.dayThu": { es: "Jueves", en: "Thursday", fr: "Jeudi", pt: "Quinta" },
  "contact.dayFri": { es: "Viernes", en: "Friday", fr: "Vendredi", pt: "Sexta" },
  "contact.daySat": { es: "Sábado", en: "Saturday", fr: "Samedi", pt: "Sábado" },
  "contact.daySun": { es: "Domingo", en: "Sunday", fr: "Dimanche", pt: "Domingo" },
  "contact.submit": { es: "Enviar mensaje", en: "Send message", fr: "Envoyer le message", pt: "Enviar mensagem" },
  "contact.succBody": { es: "Se abrió tu aplicación de correo con el mensaje preparado. También puedes escribirnos directo a <a href=\"mailto:info@santuarioexpediciones.com\" style=\"color:var(--green);text-decoration:underline\">info@santuarioexpediciones.com</a>.", en: "Your email app opened with the message ready. You can also write to us directly at <a href=\"mailto:info@santuarioexpediciones.com\" style=\"color:var(--green);text-decoration:underline\">info@santuarioexpediciones.com</a>.", fr: "Votre application de messagerie s'est ouverte avec le message prêt. Vous pouvez aussi nous écrire directement à <a href=\"mailto:info@santuarioexpediciones.com\" style=\"color:var(--green);text-decoration:underline\">info@santuarioexpediciones.com</a>.", pt: "Seu aplicativo de e-mail abriu com a mensagem pronta. Você também pode escrever direto para <a href=\"mailto:info@santuarioexpediciones.com\" style=\"color:var(--green);text-decoration:underline\">info@santuarioexpediciones.com</a>." }
};

/* ---------- Titres & meta descriptions par page ---------- */
const META = {
  home: {
    title: { es: "Santuario Expediciones — Expediciones de naturaleza en Pichilemu", en: "Santuario Expediciones — Nature expeditions in Pichilemu", fr: "Santuario Expediciones — Expéditions nature à Pichilemu", pt: "Santuario Expediciones — Expedições de natureza em Pichilemu" },
    desc: { es: "Explorando en silencio el humedal de las aves. Expediciones en kayak, trips fotográficos, trekking y rutas etnoculturales en Pichilemu, Chile.", en: "Silently exploring the birds' wetland. Kayak expeditions, photo trips, trekking and ethnocultural routes in Pichilemu, Chile.", fr: "Explorer en silence le marais des oiseaux. Expéditions kayak, trips photo, randonnées et itinéraires ethnoculturels à Pichilemu, au Chili.", pt: "Explorando em silêncio o pântano das aves. Expedições de caiaque, trips fotográficos, trekking e rotas etnoculturais em Pichilemu, Chile." }
  },
  kayak: {
    title: { es: "Observación de aves en kayak — Santuario Expediciones", en: "Bird watching by kayak — Santuario Expediciones", fr: "Observation des oiseaux en kayak — Santuario Expediciones", pt: "Observação de aves em caiaque — Santuario Expediciones" },
    desc: { es: "Travesías en kayak por las tranquilas aguas de la Laguna de Cáhuil, Laguna El Perro y el Estero Nilahue. Apto para toda la familia.", en: "Sea kayak trips along the calm waters of Cáhuil Lagoon, El Perro Lagoon and the Nilahue Estuary. Suitable for the whole family.", fr: "Traversées en kayak sur les eaux calmes de la Laguna de Cáhuil, de la Laguna El Perro et de l'Estero Nilahue. Adapté à toute la famille.", pt: "Travessias de caiaque pelas águas calmas da Laguna de Cáhuil, Laguna El Perro e Estero Nilahue. Adequado para toda a família." }
  },
  foto: {
    title: { es: "Trips fotográficos — Santuario Expediciones", en: "Photo trips — Santuario Expediciones", fr: "Trips photo — Santuario Expediciones", pt: "Trips fotográficos — Santuario Expediciones" },
    desc: { es: "Expediciones fotográficas guiadas en kayak: el guía rema y posiciona tu cámara en los mejores rincones del humedal de Cáhuil.", en: "Guided kayak photography expeditions: the guide paddles and positions your camera in the best spots of the Cáhuil wetland.", fr: "Expéditions photo guidées en kayak : le guide pagaie et positionne votre appareil aux meilleurs endroits du marais de Cáhuil.", pt: "Expedições fotográficas guiadas em caiaque: o guia rema e posiciona sua câmera nos melhores pontos do pântano de Cáhuil." }
  },
  trek: {
    title: { es: "Trekking guiado — Santuario Expediciones", en: "Guided trekking — Santuario Expediciones", fr: "Randonnée guidée — Santuario Expediciones", pt: "Trekking guiado — Santuario Expediciones" },
    desc: { es: "Trekking guiados en Pichilemu: ribera norte del humedal de Bucalemu y ruta costera Punta Lobos / La Pancora.", en: "Guided treks in Pichilemu: northern shore of the Bucalemu wetland and the Punta Lobos / La Pancora coastal route.", fr: "Randonnées guidées à Pichilemu : rive nord du marais de Bucalemu et sentier côtier Punta Lobos / La Pancora.", pt: "Trekking guiados em Pichilemu: margem norte do pântano de Bucalemu e trilha costeira Punta Lobos / La Pancora." }
  },
  etno: {
    title: { es: "Rutas etnoculturales — Santuario Expediciones", en: "Ethnocultural routes — Santuario Expediciones", fr: "Itinéraires ethnoculturels — Santuario Expediciones", pt: "Rotas etnoculturais — Santuario Expediciones" },
    desc: { es: "Conoce los oficios de las comunidades de la zona: salinas de Barrancas, molino de agua de Pañul, trabajo en arcilla y más.", en: "Discover the crafts of the local communities: Barrancas salt flats, Pañul water mill, clay work and more.", fr: "Découvrez les savoir-faire des communautés locales : salines de Barrancas, moulin à eau de Pañul, travail de l'argile et plus.", pt: "Conheça os ofícios das comunidades da região: salinas de Barrancas, moinho de água de Pañul, trabalho em argila e mais." }
  },
  shop: {
    title: { es: "Tienda — Santuario Expediciones", en: "Shop — Santuario Expediciones", fr: "Boutique — Santuario Expediciones", pt: "Loja — Santuario Expediciones" },
    desc: { es: "Productos artesanales, equipo outdoor Opinel, Stanley, Campante, libros y guías de identificación de especies. Envíos a todo Chile.", en: "Artisan products, Opinel, Stanley and Campante outdoor gear, books and species field guides. Shipping throughout Chile.", fr: "Produits artisanaux, équipement outdoor Opinel, Stanley et Campante, livres et guides d'identification des espèces. Expédition dans tout le Chili.", pt: "Produtos artesanais, equipamento outdoor Opinel, Stanley e Campante, livros e guias de identificação de espécies. Envios para todo o Chile." }
  },
  reserva: {
    title: { es: "Reserva online — Santuario Expediciones", en: "Book online — Santuario Expediciones", fr: "Réserver en ligne — Santuario Expediciones", pt: "Reserva online — Santuario Expediciones" },
    desc: { es: "Reserva tu expedición online: kayak, trekking, rutas etnoculturales y tours fotográficos en Pichilemu, Chile.", en: "Book your expedition online: kayak, trekking, ethnocultural routes and photography tours in Pichilemu, Chile.", fr: "Réservez votre expédition en ligne : kayak, randonnée, itinéraires ethnoculturels et tours photo à Pichilemu, au Chili.", pt: "Reserve sua expedição online: caiaque, trekking, rotas etnoculturais e tours fotográficos em Pichilemu, Chile." }
  },
  team: {
    title: { es: "Nuestro equipo — Santuario Expediciones", en: "Our team — Santuario Expediciones", fr: "Notre équipe — Santuario Expediciones", pt: "Nossa equipe — Santuario Expediciones" },
    desc: { es: "El equipo de Santuario Expediciones: guías apasionados por la vida en la naturaleza, la fotografía y los deportes outdoor.", en: "The Santuario Expediciones team: guides passionate about nature, photography and outdoor sports.", fr: "L'équipe de Santuario Expediciones : des guides passionnés par la nature, la photographie et les sports outdoor.", pt: "A equipe de Santuario Expediciones: guias apaixonados pela natureza, pela fotografia e pelos esportes outdoor." }
  },
  vol: {
    title: { es: "Voluntariado — Santuario Expediciones", en: "Volunteering — Santuario Expediciones", fr: "Bénévolat — Santuario Expediciones", pt: "Voluntariado — Santuario Expediciones" },
    desc: { es: "Volunturismo con Santuario Expediciones: medio día de voluntariado seguido de una travesía en kayak, todos los jueves.", en: "Voluntourism with Santuario Expediciones: half a day of volunteering followed by a kayak trip, every Thursday.", fr: "Volontourisme avec Santuario Expediciones : une demi-journée de bénévolat suivie d'une traversée en kayak, chaque jeudi.", pt: "Volunturismo com Santuario Expediciones: meio dia de voluntariado seguido de uma travessia de caiaque, todas as quintas-feiras." }
  },
  contact: {
    title: { es: "Contacto — Santuario Expediciones", en: "Contact — Santuario Expediciones", fr: "Contact — Santuario Expediciones", pt: "Contato — Santuario Expediciones" },
    desc: { es: "Contáctanos en Santuario Expediciones: expediciones de naturaleza, fotografía y cultura en Pichilemu, Chile. Escríbenos por WhatsApp, email o visítanos en la agencia.", en: "Contact Santuario Expediciones: nature, photography and culture expeditions in Pichilemu, Chile. Reach us by WhatsApp, email or visit us at the agency.", fr: "Contactez Santuario Expediciones : expéditions nature, photographie et culture à Pichilemu, au Chili. Écrivez-nous sur WhatsApp, par e-mail ou rendez visite à notre agence.", pt: "Fale com a Santuario Expediciones: expedições de natureza, fotografia e cultura em Pichilemu, Chile. Escreva-nos no WhatsApp, por e-mail ou visite nossa agência." }
  }
};

/* ---------- Libellés des catégories produits / services / badges / niveaux ---------- */
const CAT_LABELS = {
  "Todos": { es: "Todos", en: "All", fr: "Tout", pt: "Todos" },
  "Joyas": { es: "Joyas", en: "Jewelry", fr: "Bijoux", pt: "Joias" },
  "Libros": { es: "Libros", en: "Books", fr: "Livres", pt: "Livros" },
  "Campante": { es: "Campante", en: "Campante", fr: "Campante", pt: "Campante" },
  "Opinel": { es: "Opinel", en: "Opinel", fr: "Opinel", pt: "Opinel" },
  "Cosméticos": { es: "Cosméticos", en: "Cosmetics", fr: "Cosmétiques", pt: "Cosméticos" },
  "Gastronomía": { es: "Gastronomía", en: "Food & drink", fr: "Gastronomie", pt: "Gastronomia" },
  "Accesorios de viaje": { es: "Accesorios de viaje", en: "Travel accessories", fr: "Accessoires de voyage", pt: "Acessórios de viagem" },
  "Decoración": { es: "Decoración", en: "Decor", fr: "Décoration", pt: "Decoração" }
};

const SVC_CAT_LABELS = {
  "Todos los servicios": { es: "Todos", en: "All", fr: "Tous", pt: "Todos" },
  "Trekking": { es: "Trekking", en: "Trekking", fr: "Randonnée", pt: "Trekking" },
  "Kayak": { es: "Kayak", en: "Kayak", fr: "Kayak", pt: "Caiaque" },
  "Ruta etnocultural": { es: "Ruta etnocultural", en: "Ethnocultural route", fr: "Itinéraire ethnoculturel", pt: "Rota etnocultural" }
};

const BADGE_LABELS = {
  "Más vendido": { es: "Más vendido", en: "Best seller", fr: "Meilleure vente", pt: "Mais vendido" },
  "Producto Local": { es: "Producto Local", en: "Local product", fr: "Produit local", pt: "Produto local" },
  "Temporada invierno": { es: "Temporada invierno", en: "Winter season", fr: "Saison hiver", pt: "Temporada de inverno" }
};

const LEVEL_LABELS = {
  "principiante": { es: "Principiante", en: "Beginner", fr: "Débutant", pt: "Iniciante" },
  "intermedio": { es: "Intermedio", en: "Intermediate", fr: "Intermédiaire", pt: "Intermediário" },
  "avanzado": { es: "Avanzado", en: "Advanced", fr: "Avancé", pt: "Avançado" }
};
