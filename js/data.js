/* ============================================================
   Santuario Expediciones — données tienda, reserva & novedades
   (collectées depuis le site original et la réunion d'août 2026)

   Quadrilingue : chaque produit/service garde un nom canonique en
   espagnol (`name`, `cat`, `badge`) et ses équivalents anglais,
   français et portugais (`name_en`/`name_fr`/`name_pt`, etc.). Le
   JS affiche la langue active et se sert du champ espagnol comme
   identifiant stable (panier, filtres).

   Champs additionnels des services :
     - tag / tag_en / tag_fr / tag_pt : libellé « catégorie » affiché sur la carte
     - level              : principiante | intermedio | avanzado
     - min                : nombre minimal de personnes
     - bestseller         : true si badge « Más vendido » (étoile)
     - desc / desc_en / desc_fr / desc_pt : texte du bouton « Más info »
   ============================================================ */

const PRODUCTS = [
  { name: "COLLAR PUNTA DE LOBOS", name_en: "Punta de Lobos necklace", name_fr: "Collier Punta de Lobos", name_pt: "Colar Punta de Lobos", price: 20000, cat: "Joyas", cat_en: "Jewelry", img: "assets/img/products/collar-punta-de-lobos.webp" },
  { name: "COLLAR PUNTA DE LOBOS GRANDE", name_en: "Punta de Lobos necklace (large)", name_fr: "Collier Punta de Lobos (grand)", name_pt: "Colar Punta de Lobos (grande)", price: 25000, cat: "Joyas", cat_en: "Jewelry", img: "assets/img/products/collar-punta-de-lobos-grande.webp" },
  { name: "COLLAR COLA DE BALLENA", name_en: "Whale tail necklace", name_fr: "Collier queue de baleine", name_pt: "Colar cauda de baleia", price: 20000, cat: "Joyas", cat_en: "Jewelry", img: "assets/img/products/collar-cola-de-ballena.webp" },
  { name: "CARTAS MINDIKIDY", name_en: "Mindikidy cards", name_fr: "Cartes Mindikidy", name_pt: "Cartas Mindikidy", price: 18000, cat: "Libros", cat_en: "Books", img: "assets/img/products/cartas-mindikidy.webp" },
  { name: "GUÍA DE BOLSILLO INTERMAREAL", name_en: "Pocket field guide: intertidal zone", name_fr: "Guide de poche : zone intertidale", name_pt: "Guia de bolso: zona entremarés", price: 5000, cat: "Libros", cat_en: "Books", img: "assets/img/products/guia-intermareal.webp" },
  { name: "GUÍA DE BOLSILLO ROCAS Y MINERALES", name_en: "Pocket field guide: rocks & minerals", name_fr: "Guide de poche : roches et minéraux", name_pt: "Guia de bolso: rochas e minerais", price: 5000, cat: "Libros", cat_en: "Books", img: "assets/img/products/guia-rocas-minerales.webp" },
  { name: "GUÍA DE BOLSILLO MARIPOSAS & FLORES SILVESTRES", name_en: "Pocket field guide: butterflies & wildflowers", name_fr: "Guide de poche : papillons et fleurs sauvages", name_pt: "Guia de bolso: borboletas e flores silvestres", price: 5000, cat: "Libros", cat_en: "Books", img: "assets/img/products/guia-mariposas.webp" },
  { name: "GUÍA DE BOLSILLO HUMEDALES", name_en: "Pocket field guide: wetlands", name_fr: "Guide de poche : marais", name_pt: "Guia de bolso: áreas úmidas", price: 5000, cat: "Libros", cat_en: "Books", img: "assets/img/products/guia-humedales.webp" },
  { name: "GUÍA DE BOLSILLO CIELO NOCTURNO", name_en: "Pocket field guide: night sky", name_fr: "Guide de poche : ciel nocturne", name_pt: "Guia de bolso: céu noturno", price: 5000, cat: "Libros", cat_en: "Books", img: "assets/img/products/guia-cielo-nocturno.webp" },
  { name: "GUÍA DE BOLSILLO NUBES", name_en: "Pocket field guide: clouds", name_fr: "Guide de poche : nuages", name_pt: "Guia de bolso: nuvens", price: 5000, cat: "Libros", cat_en: "Books", img: "assets/img/products/guia-nubes.webp" },
  { name: "GUÍA DE BOLSILLO BOSQUE ESCLERÓFILO", name_en: "Pocket field guide: sclerophyll forest", name_fr: "Guide de poche : forêt sclérophylle", name_pt: "Guia de bolso: mata esclerófila", price: 5000, cat: "Libros", cat_en: "Books", img: "assets/img/products/guia-bosque-esclerofilo.webp" },
  { name: "PORTACUCHILLO", name_en: "Knife holder", name_fr: "Étui à couteau", name_pt: "Porta-faca", price: 9900, cat: "Campante", cat_en: "Campante", img: "assets/img/products/portacuchillo.webp" },
  { name: "LLAVERO", name_en: "Keyring", name_fr: "Porte-clés", name_pt: "Chaveiro", price: 3500, cat: "Campante", cat_en: "Campante", img: "assets/img/products/llavero.webp" },
  { name: "NECESER HABANO", name_en: "Havana pouch", name_fr: "Trousse Havana", name_pt: "Necessaire Havana", price: 45000, cat: "Campante", cat_en: "Campante", img: "assets/img/products/neceser-habano.webp" },
  { name: "TARJETERO", name_en: "Card holder", name_fr: "Porte-cartes", name_pt: "Porta-cartões", price: 20000, cat: "Campante", cat_en: "Campante", img: "assets/img/products/tarjetero.webp" },
  { name: "CORREA STRAPS PARA LENTES EN CUERO", name_en: "Leather glasses strap", name_fr: "Lanière de lunettes en cuir", name_pt: "Cordão de couro para óculos", price: 6500, cat: "Campante", cat_en: "Campante", img: "assets/img/products/correa-lentes.webp" },
  { name: "PIEDRA PARA AFILAR OPINEL 10 CM", name_en: "Opinel sharpening stone 10 cm", name_fr: "Pierre à aiguiser Opinel 10 cm", name_pt: "Pedra de amolar Opinel 10 cm", price: 9990, cat: "Opinel", cat_en: "Opinel", img: "assets/img/products/piedra-afilar.webp" },
  { name: "OPINEL N°08 TREKKING HANDLE + SHEATH SET", name_en: "Opinel N°08 trekking handle + sheath set", name_fr: "Opinel N°08 manche trekking + étui", name_pt: "Opinel N°08 cabo trekking + bainha", price: 29990, cat: "Opinel", cat_en: "Opinel", img: "assets/img/products/opinel-trekking.webp" },
  { name: "OPINEL N°4 CUCHILLO LLAVERO", name_en: "Opinel N°4 keychain knife", name_fr: "Opinel N°4 couteau porte-clés", name_pt: "Opinel N°4 canivete chaveiro", price: 11990, cat: "Opinel", cat_en: "Opinel", img: "assets/img/products/opinel-llavero.webp" },
  { name: "PICNIC SET", name_en: "Picnic set", name_fr: "Set pique-nique", name_pt: "Kit piquenique", price: 14990, cat: "Opinel", cat_en: "Opinel", img: "assets/img/products/picnic-set.webp" },
  { name: "TIJERA PARA PODAR", name_en: "Pruning shears", name_fr: "Sécateur", name_pt: "Tesoura de poda", price: 59990, cat: "Opinel", cat_en: "Opinel", img: "assets/img/products/tijera-podar.webp" },
  { name: "OPINEL N°10 ABREBOTELLAS CON SACACORCHOS", name_en: "Opinel N°10 bottle opener with corkscrew", name_fr: "Opinel N°10 décapsuleur avec tire-bouchon", name_pt: "Opinel N°10 abridor de garrafas com saca-rolhas", price: 29990, cat: "Opinel", cat_en: "Opinel", img: "assets/img/products/opinel-abrebotellas.webp" },
  { name: "OPINEL PARA SETAS N8", name_en: "Opinel N8 mushroom knife", name_fr: "Opinel N8 couteau à champignons", name_pt: "Opinel N8 faca para cogumelos", price: 26990, cat: "Opinel", cat_en: "Opinel", img: "assets/img/products/opinel-setas.webp" },
  { name: "KIT PROTECCIÓN SOLAR", name_en: "Sun protection kit", name_fr: "Kit protection solaire", name_pt: "Kit proteção solar", price: 15990, cat: "Cosméticos", cat_en: "Cosmetics", img: "assets/img/products/kit-proteccion-solar.webp" },
  { name: "PROTECTOR SOLAR FACIAL", name_en: "Facial sunscreen", name_fr: "Écran solaire visage", name_pt: "Protetor solar facial", price: 10990, cat: "Cosméticos", cat_en: "Cosmetics", img: "assets/img/products/protector-facial.webp" },
  { name: "PROTECTOR SOLAR LABIAL", name_en: "Lip balm SPF", name_fr: "Baume à lèvres SPF", name_pt: "Protetor labial SPF", price: 5990, cat: "Cosméticos", cat_en: "Cosmetics", img: "assets/img/products/protector-labial.webp" },
  { name: "LOCIÓN CAPILAR NUTRITIVA Y REPARADORA", name_en: "Nourishing & repairing hair lotion", name_fr: "Lotion capillaire nourrissante et réparatrice", name_pt: "Loção capilar nutritiva e reparadora", price: 14990, cat: "Cosméticos", cat_en: "Cosmetics", img: "assets/img/products/lacion-capilar.webp" },
  { name: 'LIBRO "FOCHEM"', name_en: 'Book "FOCHEM"', name_fr: 'Livre « FOCHEM »', name_pt: 'Livro "FOCHEM"', price: 15000, cat: "Libros", cat_en: "Books", img: "assets/img/products/libro-fochem.webp" },
  { name: 'LIBRO "LAS ESTRELLAS SON EL REGISTRO DE LA NOCHE"', name_en: 'Book "The stars are the record of the night"', name_fr: 'Livre « Les étoiles sont le registre de la nuit »', name_pt: 'Livro "As estrelas são o registro da noite"', price: 12000, cat: "Libros", cat_en: "Books", img: "assets/img/products/libro-estrellas.webp" },
  { name: 'LIBRO "EL PUEBLO SELK\'NAM ESTÁ VIVO"', name_en: 'Book "The Selk\'nam people are alive"', name_fr: 'Livre « Le peuple selk\'nam est vivant »', name_pt: 'Livro "O povo selk\'nam está vivo"', price: 15000, cat: "Libros", cat_en: "Books", img: "assets/img/products/libro-selknam.webp" },
  { name: 'LIBRO "MARIPOSAS"', name_en: 'Book "Butterflies"', name_fr: 'Livre « Papillons »', name_pt: 'Livro "Borboletas"', price: 15000, cat: "Libros", cat_en: "Books", img: "assets/img/products/libro-mariposas.webp" },
  { name: 'LIBRO "EL VIENTO BLANCO"', name_en: 'Book "The white wind"', name_fr: 'Livre « Le vent blanc »', name_pt: 'Livro "O vento branco"', price: 16000, cat: "Libros", cat_en: "Books", img: "assets/img/products/libro-viento-blanco.webp" },
  { name: 'LIBRO "CKAARI"', name_en: 'Book "CKAARI"', name_fr: 'Livre « CKAARI »', name_pt: 'Livro "CKAARI"', price: 12000, cat: "Libros", cat_en: "Books", img: "assets/img/products/libro-ckaari.webp" },
  { name: 'LIBRO "MORADA DE ESPÍRITUS"', name_en: 'Book "Dwelling of spirits"', name_fr: 'Livre « Demeure des esprits »', name_pt: 'Livro "Morada dos espíritos"', price: 22000, cat: "Libros", cat_en: "Books", img: "assets/img/products/libro-morada.webp" },
  { name: 'LIBRO "YAGANES DEL NUEVO MUNDO"', name_en: 'Book "Yaganes of the New World"', name_fr: 'Livre « Yagans du Nouveau Monde »', name_pt: 'Livro "Yagan do Novo Mundo"', price: 14000, cat: "Libros", cat_en: "Books", img: "assets/img/products/libro-yaganes.webp" },
  { name: 'LIBRO "NAVEGANTES EN KAYAK"', name_en: 'Book "Kayak navigators"', name_fr: 'Livre « Navigateurs en kayak »', name_pt: 'Livro "Navegantes de caiaque"', price: 30000, cat: "Libros", cat_en: "Books", img: "assets/img/products/libro-navegantes.webp" },
  { name: 'LIBRO "LOS CHANGOS"', name_en: 'Book "The Changos"', name_fr: 'Livre « Les Changos »', name_pt: 'Livro "Os Changos"', price: 18000, cat: "Libros", cat_en: "Books", img: "assets/img/products/libro-changos.webp" },
  { name: 'LIBRO "FLORES NATIVAS Y ENDEMICAS DE CHILE"', name_en: 'Book "Native and endemic flowers of Chile"', name_fr: 'Livre « Fleurs natives et endémiques du Chili »', name_pt: 'Livro "Flores nativas e endêmicas do Chile"', price: 80000, cat: "Libros", cat_en: "Books", img: "assets/img/products/libro-flores-nativas.webp" },
  { name: 'CARTAS "AMA"', name_en: '"AMA" cards', name_fr: 'Cartes « AMA »', name_pt: 'Cartas "AMA"', price: 36000, cat: "Libros", cat_en: "Books", img: "assets/img/products/cartas-ama.webp" },
  { name: 'LIBRO "ANIMALES DE ATACAMA"', name_en: 'Book "Animals of Atacama"', name_fr: 'Livre « Animaux de l\'Atacama »', name_pt: 'Livro "Animais do Atacama"', price: 12000, cat: "Libros", cat_en: "Books", img: "assets/img/products/libro-atacama.webp" },
  { name: "DRIPP COFFEE SEÑOR K", name_en: "Señor K drip coffee", name_fr: "Café filtre Señor K", name_pt: "Café drip Señor K", price: 10000, cat: "Gastronomía", cat_en: "Food & drink", img: "assets/img/products/dripp-coffee.webp" },
  { name: "BOTAS DE AGUA", name_en: "Water boots", name_fr: "Bottes en caoutchouc", name_pt: "Botas de água", price: 27990, cat: "Accesorios de viaje", cat_en: "Travel accessories", img: "assets/img/products/botas-agua.webp", badge: "Temporada invierno", badge_en: "Winter season" },
  { name: "OPINEL 08 COLORES", name_en: "Opinel 08 colors", name_fr: "Opinel 08 couleurs", name_pt: "Opinel 08 cores", price: 16990, cat: "Opinel", cat_en: "Opinel", img: "assets/img/products/opinel-08-colores.webp", badge: "Más vendido", badge_en: "Best seller" },
  { name: "GO TUMBLR", name_en: "Go Tumblr", name_fr: "Go Tumblr", name_pt: "Go Tumblr", price: 22990, cat: "Accesorios de viaje", cat_en: "Travel accessories", img: "assets/img/products/go-tumblr.webp" },
  { name: "ILUSTRACION HUAIRAVO EN ACUARELA", name_en: "Huairavo watercolor illustration", name_fr: "Illustration Huairavo à l'aquarelle", name_pt: "Ilustração Huairavo em aquarela", price: 45000, cat: "Decoración", cat_en: "Decor", img: "assets/img/products/ilustracion-huairavo.webp", badge: "Producto Local", badge_en: "Local product" },
  { name: "CAPSULAS SEÑOR K", name_en: "Señor K capsules", name_fr: "Capsules Señor K", name_pt: "Cápsulas Señor K", price: 6000, cat: "Gastronomía", cat_en: "Food & drink", img: "assets/img/products/capsulas-senor-k.webp" },
  { name: "LIBRO NAVEGANTES EN KAYAK", name_en: 'Book "Kayak navigators"', name_fr: 'Livre « Navigateurs en kayak »', name_pt: 'Livro "Navegantes de caiaque"', price: 30000, cat: "Libros", cat_en: "Books", img: "assets/img/products/libro-navegantes-2.webp" },
  { name: "CAFE MOLIDO SEÑOR K", name_en: "Señor K ground coffee", name_fr: "Café moulu Señor K", name_pt: "Café moído Señor K", price: 10000, cat: "Gastronomía", cat_en: "Food & drink", img: "assets/img/products/cafe-molido.webp" },
  { name: "ILUSTRACION SIETE COLORES EN ACUARELA", name_en: "Sietecolores watercolor illustration", name_fr: "Illustration Sietecolores à l'aquarelle", name_pt: "Ilustração Sietecolores em aquarela", price: 45000, cat: "Decoración", cat_en: "Decor", img: "assets/img/products/ilustracion-sietecolores.webp", badge: "Producto Local", badge_en: "Local product" },
  { name: "ILUSTRACION PERRITO EN ACUARELA", name_en: "Puppy watercolor illustration", name_fr: "Illustration de chiot à l'aquarelle", name_pt: "Ilustração de cachorrinho em aquarela", price: 45000, cat: "Decoración", cat_en: "Decor", img: "assets/img/products/ilustracion-perrito.webp", badge: "Producto Local", badge_en: "Local product" },
  { name: "ILUSTRACION GAVIOTA DE CAHUIL EN ACUARELA", name_en: "Cáhuil gull watercolor illustration", name_fr: "Illustration de mouette de Cáhuil à l'aquarelle", name_pt: "Ilustração de gaivota de Cáhuil em aquarela", price: 45000, cat: "Decoración", cat_en: "Decor", img: "assets/img/products/ilustracion-gaviota.webp", badge: "Producto Local", badge_en: "Local product" },
  { name: "FLAMENCO CHILENO", name_en: "Chilean flamingo", name_fr: "Flamant du Chili", name_pt: "Flamingo chileno", price: 10000, cat: "Decoración", cat_en: "Decor", img: "assets/img/products/flamenco-chileno.webp", badge: "Producto Local", badge_en: "Local product" },
  { name: "ILUSTRACION ENMARCADA", name_en: "Framed illustration", name_fr: "Illustration encadrée", name_pt: "Ilustração emoldurada", price: 10500, cat: "Decoración", cat_en: "Decor", img: "assets/img/products/ilustracion-enmarcada.webp" },
  { name: "GARZA GRANDE", name_en: "Great egret", name_fr: "Grande aigrette", name_pt: "Garça grande", price: 10000, cat: "Decoración", cat_en: "Decor", img: "assets/img/products/garza-grande.webp", badge: "Producto Local", badge_en: "Local product" },
  { name: "LIBRETA DE NOTAS/DIBUJO", name_en: "Notebook / sketchbook", name_fr: "Carnet de notes / dessin", name_pt: "Caderno de notas / desenho", price: 8800, cat: "Libros", cat_en: "Books", img: "assets/img/products/libreta-notas.webp" },
  { name: "BEER PINT", name_en: "Beer pint", name_fr: "Chope à bière", name_pt: "Caneca de cerveja", price: 11990, cat: "Gastronomía", cat_en: "Food & drink", img: "assets/img/products/beer-pint.webp" },
  { name: "OPINEL 06 COLORES", name_en: "Opinel 06 colors", name_fr: "Opinel 06 couleurs", name_pt: "Opinel 06 cores", price: 14990, cat: "Opinel", cat_en: "Opinel", img: "assets/img/products/opinel-06-colores.webp" },
  { name: "OPINEL MADERA N12", name_en: "Opinel wood N12", name_fr: "Opinel bois N12", name_pt: "Opinel madeira N12", price: 21990, cat: "Opinel", cat_en: "Opinel", img: "assets/img/products/opinel-madera-n12.webp" }
];

const PRODUCT_CATEGORIES = ["Todos", "Joyas", "Libros", "Campante", "Opinel", "Cosméticos", "Gastronomía", "Accesorios de viaje", "Decoración"];

/* ------------------------------------------------------------
   SERVICES — réservation. `cat` sert aux filtres ; `tag` est le
   libellé affiché en haut de chaque carte.
   Prix provisoires à confirmer par Pablo : kayak-mar (45.000) et
   trek-dia-completo (80.000).
   ------------------------------------------------------------ */
const SERVICES = [
  {
    id: "kayak-3h",
    name: "Expedición corta — Humedal Laguna de Cahuil",
    name_en: "Short expedition — Cahuil Lagoon wetland",
    name_fr: "Expédition courte — Marais de la Laguna de Cáhuil",
    name_pt: "Expedição curta — Pântano da Laguna de Cáhuil",
    tag: "Expedición corta", tag_en: "Short expedition", tag_fr: "Expédition courte", tag_pt: "Expedição curta",
    cat: "Kayak", cat_en: "Kayak", cat_fr: "Kayak", cat_pt: "Caiaque",
    dur: "3 h", price: 35000, img: "assets/img/kayak-corta.webp",
    level: "principiante", min: 2, bestseller: true,
    desc: "Expedición corta por las tranquilas aguas de la Laguna de Cáhuil. Incluye inducción previa y avistamiento de aves de humedal; ideal para comenzar y apta para toda la familia.",
    desc_en: "Short expedition across the calm waters of Cáhuil Lagoon. Includes a previous briefing and wetland bird watching — ideal to get started and suitable for the whole family.",
    desc_fr: "Expédition courte sur les eaux calmes de la Laguna de Cáhuil. Initiation incluse et observation des oiseaux du marais — idéale pour débuter et accessible à toute la famille.",
    desc_pt: "Expedição curta pelas águas calmas da Laguna de Cáhuil. Inclui introdução prévia e observação de aves do pântano — ideal para começar e adequada para toda a família."
  },
  {
    id: "kayak-4h30",
    name: "Expedición media — Humedal Laguna de Cahuil",
    name_en: "Half-day expedition — Cahuil Lagoon wetland",
    name_fr: "Expédition demi-journée — Marais de la Laguna de Cáhuil",
    name_pt: "Expedição meia jornada — Pântano da Laguna de Cáhuil",
    tag: "Expedición media", tag_en: "Half-day expedition", tag_fr: "Expédition demi-journée", tag_pt: "Expedição meia jornada",
    cat: "Kayak", cat_en: "Kayak", cat_fr: "Kayak", cat_pt: "Caiaque",
    dur: "4 h 30 min", price: 45000, img: "assets/img/kayak-media.webp",
    level: "intermedio", min: 2, bestseller: false,
    desc: "Media jornada remando por la Laguna de Cáhuil: más tiempo para explorar rincones, aves y naturaleza en compañía de nuestro guía.",
    desc_en: "Half a day paddling through Cáhuil Lagoon: more time to explore hidden corners, birds and nature in the company of our guide.",
    desc_fr: "Une demi-journée à pagayer sur la Laguna de Cáhuil : plus de temps pour explorer recoins, oiseaux et nature en compagnie de notre guide.",
    desc_pt: "Meia jornada remando pela Laguna de Cáhuil: mais tempo para explorar recantos, aves e natureza na companhia de nosso guia."
  },
  {
    id: "kayak-8h",
    name: "Expedición larga — Humedal Laguna de Cahuil + Descenso Estero Nilahue",
    name_en: "Full-day expedition — Cahuil Lagoon wetland + Nilahue estuary descent",
    name_fr: "Expédition journée complète — Marais de la Laguna de Cáhuil + descente de l'Estero Nilahue",
    name_pt: "Expedição dia completo — Pântano da Laguna de Cáhuil + descida do Estero Nilahue",
    tag: "Expedición larga", tag_en: "Full-day expedition", tag_fr: "Expédition journée complète", tag_pt: "Expedição dia completo",
    cat: "Kayak", cat_en: "Kayak", cat_fr: "Kayak", cat_pt: "Caiaque",
    dur: "8 h", price: 75000, img: "assets/img/kayak-larga.webp",
    level: "intermedio", min: 2, bestseller: false,
    desc: "Jornada completa: remamos la Laguna de Cáhuil y descendemos el Estero Nilahue. Incluye tiempo para aves, paisajes y un descanso. Se recomienda experiencia media.",
    desc_en: "Full day: we paddle across Cáhuil Lagoon and descend the Nilahue estuary. Includes time for birds, landscapes and a break. Intermediate experience recommended.",
    desc_fr: "Journée complète : nous pagayons sur la Laguna de Cáhuil et descendons l'Estero Nilahue. Temps d'observation, paysages et pause. Expérience intermédiaire recommandée.",
    desc_pt: "Dia completo: remamos a Laguna de Cáhuil e descemos o Estero Nilahue. Inclui tempo para aves, paisagens e uma pausa. Recomenda-se experiência intermediária."
  },
  {
    id: "kayak-mar",
    name: "Expedición corta en mar — Punta de Lobos",
    name_en: "Short sea expedition — Punta de Lobos",
    name_fr: "Expédition courte en mer — Punta de Lobos",
    name_pt: "Expedição curta no mar — Punta de Lobos",
    tag: "Expedición corta · Mar", tag_en: "Short expedition · Sea", tag_fr: "Expédition courte · Mer", tag_pt: "Expedição curta · Mar",
    cat: "Kayak", cat_en: "Kayak", cat_fr: "Kayak", cat_pt: "Caiaque",
    dur: "2 h 30 min", price: 45000, img: "assets/img/kayak-mar.svg",
    level: "avanzado", min: 2, bestseller: false,
    desc: "Aprovechando la calma del mar, recorremos el entorno de los morros de Punta de Lobos para conocer parte de lo que habita el intermareal: aves oceánicas y playeras y fauna típica de las costas chilenas, como pingüinos, lobos de mar, delfines, gaviotas, pelícanos y albatros. Se realiza con el mar tranquilo, pero requiere conocimiento previo de kayak de travesía con faldón.",
    desc_en: "Taking advantage of calm seas, we explore the surroundings of the Punta de Lobos headlands to discover the intertidal world: oceanic and shorebirds and typical Chilean coastal wildlife such as penguins, sea lions, dolphins, gulls, pelicans and albatrosses. It runs on calm seas but requires previous sea kayaking experience with a spray skirt.",
    desc_fr: "Profitant de la mer calme, nous parcourons les abords des morros de Punta de Lobos pour découvrir l'étage intertidal : oiseaux océaniques et de rivage ainsi que la faune typique des côtes chiliennes — manchots, lions de mer, dauphins, goélands, pélicans et albatros. Sortie en mer calme, mais qui exige une expérience préalable du kayak de mer avec jupe.",
    desc_pt: "Aproveitando a calmaria do mar, percorremos o entorno dos morros de Punta de Lobos para conhecer parte do que habita o entremarés: aves oceânicas e de praia e fauna típica das costas chilenas, como pinguins, leões-marinhos, golfinhos, gaivotas, pelicanos e albatrozes. É realizada com o mar calmo, mas exige conhecimento prévio de caiaque de travessia com saia."
  },
  {
    id: "kayak-2dias",
    name: "Expedición 2 días — Kayak + Glamping en el humedal",
    name_en: "2-day expedition — Kayak + Glamping by the wetland",
    name_fr: "Expédition 2 jours — Kayak + Glamping au bord du marais",
    name_pt: "Expedição 2 dias — Caiaque + Glamping no pântano",
    tag: "Expedición 2 días", tag_en: "2-day expedition", tag_fr: "Expédition 2 jours", tag_pt: "Expedição 2 dias",
    cat: "Kayak", cat_en: "Kayak", cat_fr: "Kayak", cat_pt: "Caiaque",
    dur: "2 días · 1 noche", price: 220000, img: "assets/img/glamping.svg",
    level: "intermedio", min: 2, bestseller: false,
    desc: "Una noche bajo las estrellas en glamping junto al humedal. Dos días combinando lo mejor de la expedición larga con hospedaje, comidas y la calma de la naturaleza. Incluye alojamiento (1 noche).",
    desc_en: "A night under the stars in a glamping tent by the wetland. Two days combining the best of the long expedition with lodging, meals and the peace of nature. Includes 1 night accommodation.",
    desc_fr: "Une nuit à la belle étoile en glamping au bord du marais. Deux jours mêlant le meilleur de l'expédition longue avec hébergement, repas et la sérénité de la nature. Hébergement 1 nuit inclus.",
    desc_pt: "Uma noite sob as estrelas em glamping ao lado do pântano. Dois dias combinando o melhor da expedição longa com hospedagem, refeições e a serenidade da natureza. Inclui hospedagem (1 noite)."
  },
  {
    id: "foto-4h30",
    name: "Expedición fotográfica media (4,5 hrs)",
    name_en: "Half-day photography expedition (4.5 hrs)",
    name_fr: "Expédition photo demi-journée (4 h 30)",
    name_pt: "Expedição fotográfica meia jornada (4,5 hrs)",
    tag: "Expedición media", tag_en: "Half-day expedition", tag_fr: "Expédition demi-journée", tag_pt: "Expedição meia jornada",
    cat: "Kayak", cat_en: "Kayak", cat_fr: "Kayak", cat_pt: "Caiaque",
    dur: "4 h 30 min", price: 75000, img: "assets/img/serv-foto-4h30.webp",
    level: "intermedio", min: 1, bestseller: false,
    desc: "El guía rema en el kayak doble y te posiciona en los mejores rincones del humedal para lograr fotografías increíbles. Ideal para aficionados y profesionales.",
    desc_en: "The guide paddles the double kayak and positions you in the best spots of the wetland to capture incredible photos. Ideal for amateurs and professionals.",
    desc_fr: "Le guide pagaie le kayak double et vous positionne aux meilleurs endroits du marais pour réussir des photos incroyables. Idéal pour amateurs et professionnels.",
    desc_pt: "O guia rema o caiaque duplo e posiciona você nos melhores pontos do pântano para conseguir fotos incríveis. Ideal para amadores e profissionais."
  },
  {
    id: "foto-7h30",
    name: "Expedición fotográfica larga (7,5 hrs)",
    name_en: "Full-day photography expedition (7.5 hrs)",
    name_fr: "Expédition photo journée complète (7 h 30)",
    name_pt: "Expedição fotográfica dia completo (7,5 hrs)",
    tag: "Expedición larga", tag_en: "Full-day expedition", tag_fr: "Expédition journée complète", tag_pt: "Expedição dia completo",
    cat: "Kayak", cat_en: "Kayak", cat_fr: "Kayak", cat_pt: "Caiaque",
    dur: "7 h 30 min", price: 110000, img: "assets/img/serv-foto-7h30.webp",
    level: "intermedio", min: 1, bestseller: true,
    desc: "Jornada completa de fotografía en el humedal: más rincones, más luz, más aves. Incluye recorrido por la Laguna de Cáhuil y descenso del Estero Nilahue.",
    desc_en: "A full day of photography in the wetland: more spots, more light, more birds. Includes a tour of Cáhuil Lagoon and the Nilahue estuary descent.",
    desc_fr: "Une journée complète de photographie dans le marais : plus de recoins, plus de lumière, plus d'oiseaux. Inclut la Laguna de Cáhuil et la descente de l'Estero Nilahue.",
    desc_pt: "Um dia completo de fotografia no pântano: mais recantos, mais luz, mais aves. Inclui percurso pela Laguna de Cáhuil e descida do Estero Nilahue."
  },
  {
    id: "trek-lobos",
    name: "Ruta costera — Punta Lobos / La Pancora",
    name_en: "Coastal route — Punta Lobos / La Pancora",
    name_fr: "Sentier côtier — Punta Lobos / La Pancora",
    name_pt: "Trilha costeira — Punta Lobos / La Pancora",
    tag: "Trekking de 2 horas", tag_en: "2-hour trekking", tag_fr: "Randonnée de 2 heures", tag_pt: "Trekking de 2 horas",
    cat: "Trekking", cat_en: "Trekking", cat_fr: "Trekking", cat_pt: "Trekking",
    dur: "2 h", price: 20000, img: "assets/img/trekking-costera.webp",
    level: "principiante", min: 2, bestseller: false,
    desc: "Recorre el borde costero a pie junto a nuestro guía especializado por rutas seguras y de gran belleza y biodiversidad. Aprende más acerca de las especies de flora y fauna, así como de la gran importancia geológica del territorio. Rutas ideales para toda la familia.",
    desc_en: "Walk the coastline with our specialist guide along safe, beautiful and highly biodiverse routes. Learn about the local flora and fauna species, as well as the great geological importance of the territory. Routes ideal for the whole family.",
    desc_fr: "Parcourez le littoral à pied avec notre guide spécialisé sur des sentiers sûrs, magnifiques et d'une grande biodiversité. Apprenez-en plus sur la flore et la faune locales ainsi que sur l'importance géologique du territoire. Des itinéraires idéaux pour toute la famille.",
    desc_pt: "Percorra o litoral a pé com nosso guia especializado por trilhas seguras, belas e de grande biodiversidade. Aprenda mais sobre as espécies de flora e fauna e sobre a grande importância geológica do território. Trilhas ideais para toda a família."
  },
  {
    id: "trek-sietecolores",
    name: "Descubriendo al Sietecolores — vida entre juncos",
    name_en: "Discovering the Sietecolores — life among the rushes",
    name_fr: "À la découverte du Sietecolores — la vie parmi les joncs",
    name_pt: "Descobrindo o Sietecolores — vida entre juncos",
    tag: "Trekking de 3 horas", tag_en: "3-hour trekking", tag_fr: "Randonnée de 3 heures", tag_pt: "Trekking de 3 horas",
    cat: "Trekking", cat_en: "Trekking", cat_fr: "Trekking", cat_pt: "Trekking",
    dur: "3 h", price: 25000, img: "assets/img/trekking-sietecolores.webp",
    level: "principiante", min: 2, bestseller: true,
    desc: "Trekking a la ribera norte del humedal de Bucalemu, explorando el hábitat del Sietecolores y conociendo más de la maravillosa biodiversidad que habita en los juncales y de la rica flora nativa en torno al humedal.",
    desc_en: "A trek along the northern shore of the Bucalemu wetland, exploring the Sietecolores' habitat and learning about the wonderful biodiversity living among the rushes and the rich native flora around the wetland.",
    desc_fr: "Randonnée sur la rive nord du marais de Bucalemu, à la découverte de l'habitat du Sietecolores et de la merveilleuse biodiversité qui vit parmi les joncs et la riche flore native autour du marais.",
    desc_pt: "Trekking na margem norte do pântano de Bucalemu, explorando o habitat do Sietecolores e conhecendo a maravilhosa biodiversidade que vive entre os juncos e a rica flora nativa ao redor do pântano."
  },
  {
    id: "trek-dia-completo",
    name: "Explorando el humedal — Trekking fotográfico de día completo",
    name_en: "Exploring the wetland — Full-day photography trekking",
    name_fr: "Explorer le marais — Randonnée photo journée complète",
    name_pt: "Explorando o pântano — Trekking fotográfico dia completo",
    tag: "Trekking día completo", tag_en: "Full-day trekking", tag_fr: "Randonnée journée complète", tag_pt: "Trekking dia completo",
    cat: "Trekking", cat_en: "Trekking", cat_fr: "Trekking", cat_pt: "Trekking",
    dur: "8 h", price: 80000, img: "assets/img/trek-dia-completo.svg",
    level: "intermedio", min: 2, bestseller: false,
    desc: "Explorando el humedal: trekking fotográfico de día completo, con almuerzo. Recorremos distintos sectores, almorzamos y seguimos explorando; el fotógrafo se mueve por el hotspot de biodiversidad del humedal.",
    desc_en: "Exploring the wetland: a full-day photography trekking with lunch. We cover different sectors, have lunch and keep exploring; the photographer moves through the wetland's biodiversity hotspot.",
    desc_fr: "À la découverte du marais : randonnée photographique d'une journée complète avec déjeuner. Nous parcourons plusieurs secteurs, déjeunons puis repartons ; le photographe évolue au cœur du hotspot de biodiversité du marais.",
    desc_pt: "Explorando o pântano: trekking fotográfico de dia completo, com almoço. Percorremos diversos setores, almoçamos e seguimos explorando; o fotógrafo se move pelo hotspot de biodiversidade do pântano."
  },
  {
    id: "etno-corto",
    name: "Tour corto — Cáhuil, Salinas de Barrancas y Pañul",
    name_en: "Short tour — Cáhuil, Barrancas Salt Flats and Pañul",
    name_fr: "Tour court — Cáhuil, salines de Barrancas et Pañul",
    name_pt: "Tour curto — Cáhuil, salinas de Barrancas e Pañul",
    tag: "Tour corto", tag_en: "Short tour", tag_fr: "Tour court", tag_pt: "Tour curto",
    cat: "Ruta etnocultural", cat_en: "Ethnocultural route", cat_fr: "Itinéraire ethnoculturel", cat_pt: "Rota etnocultural",
    dur: "3 h", price: 25000, img: "assets/img/rutas-salinas.webp",
    level: "principiante", min: 4, bestseller: false,
    desc: "En este recorrido conocemos el oficio de las Salinas de Barrancas, visitamos el Molino de Agua de Pañul para luego aprender más acerca del trabajo en arcilla de las comunidades de la zona.",
    desc_en: "On this tour we discover the craft of the Barrancas salt flats, visit the Pañul water mill and then learn about the clay work of the local communities.",
    desc_fr: "Lors de ce parcours, nous découvrons le savoir-faire des salines de Barrancas, visitons le moulin à eau de Pañul puis apprenons le travail de l'argile des communautés locales.",
    desc_pt: "Neste percurso conhecemos o ofício das salinas de Barrancas, visitamos o moinho de água de Pañul e aprendemos sobre o trabalho em argila das comunidades da região."
  },
  {
    id: "etno-medio",
    name: "Tour medio día — Punta de Lobos, Pangal, Cáhuil, Salinas y Pañul",
    name_en: "Half-day tour — Punta de Lobos, Pangal, Cáhuil, Salt Flats and Pañul",
    name_fr: "Tour demi-journée — Punta de Lobos, Pangal, Cáhuil, salines et Pañul",
    name_pt: "Tour meia jornada — Punta de Lobos, Pangal, Cáhuil, salinas e Pañul",
    tag: "Tour medio día", tag_en: "Half-day tour", tag_fr: "Tour demi-journée", tag_pt: "Tour meia jornada",
    cat: "Ruta etnocultural", cat_en: "Ethnocultural route", cat_fr: "Itinéraire ethnoculturel", cat_pt: "Rota etnocultural",
    dur: "4 h 30 min", price: 40000, img: "assets/img/rutas-tour.webp",
    level: "intermedio", min: 4, bestseller: true,
    desc: "Conocemos el oficio de las Salinas de Barrancas, visitamos el Molino de Agua de Pañul y aprendemos del trabajo en arcilla de las comunidades. Además, visitamos los huertos orgánicos del Hotel Alaia, el proyecto de reforestación de Parque Punta Lobos y el Vivero de Öngo Chile.",
    desc_en: "We discover the craft of the Barrancas salt flats, visit the Pañul water mill and learn about the clay work of the communities. We also visit the organic gardens of Hotel Alaia, the reforestation project of Punta Lobos Park and the Öngo Chile nursery.",
    desc_fr: "Nous découvrons le savoir-faire des salines de Barrancas, visitons le moulin à eau de Pañul et découvrons le travail de l'argile des communautés. Nous visitons aussi les jardins bio de l'Hôtel Alaia, le projet de reforestation du Parc Punta Lobos et la pépinière Öngo Chile.",
    desc_pt: "Conhecemos o ofício das salinas de Barrancas, visitamos o moinho de água de Pañul e descobrimos o trabalho em argila das comunidades. Além disso, visitamos as hortas orgânicas do Hotel Alaia, o projeto de reflorestamento do Parque Punta Lobos e o viveiro Öngo Chile."
  },
  {
    id: "etno-dia-completo",
    name: "Tour día completo — Cultura y naturaleza",
    name_en: "Full-day tour — Culture & nature",
    name_fr: "Tour journée complète — Culture et nature",
    name_pt: "Tour dia completo — Cultura e natureza",
    tag: "Tour día completo", tag_en: "Full-day tour", tag_fr: "Tour journée complète", tag_pt: "Tour dia completo",
    cat: "Ruta etnocultural", cat_en: "Ethnocultural route", cat_fr: "Itinéraire ethnoculturel", cat_pt: "Rota etnocultural",
    dur: "8 h", price: 80000, img: "assets/img/etno-greda.svg",
    level: "intermedio", min: 4, bestseller: false,
    desc: "Todo lo que ofrece el tour de medio día, más almuerzo y visita a viveros: un vivero de hongos, uno de flores y un vivero de proteas. Una jornada completa de cultura, oficios y territorio.",
    desc_en: "Everything the half-day tour offers, plus lunch and visits to nurseries: a mushroom nursery, a flower nursery and a protea nursery. A full day of culture, crafts and territory.",
    desc_fr: "Tout ce que propose le tour demi-journée, plus déjeuner et visites de pépinières : une de champignons, une de fleurs et une de proteas. Une journée complète de culture, de savoir-faire et de territoire.",
    desc_pt: "Tudo o que o tour de meio dia oferece, mais almoço e visitas a viveiros: um de cogumelos, um de flores e um de proteas. Um dia completo de cultura, ofícios e território."
  },
  {
    id: "etno-sal-corto",
    name: "Tour salineros y etnocultural corto",
    name_en: "Salt flats & ethnocultural short tour",
    name_fr: "Tour court salines et ethnoculturel",
    name_pt: "Tour curto de salinas e etnocultural",
    tag: "Tour salineros corto", tag_en: "Short salt flats tour", tag_fr: "Tour court des salines", tag_pt: "Tour curto das salinas",
    cat: "Ruta etnocultural", cat_en: "Ethnocultural route", cat_fr: "Itinéraire ethnoculturel", cat_pt: "Rota etnocultural",
    dur: "1 h", price: 10000, img: "assets/img/serv-lobos.webp",
    level: "principiante", min: 4, bestseller: false,
    desc: "Recorrido breve por las salinas y el oficio tradicional de los salineros de la zona.",
    desc_en: "A short tour of the salt flats and the traditional craft of the local salt workers.",
    desc_fr: "Parcours court des salines et du savoir-faire traditionnel des sauniers locaux.",
    desc_pt: "Percurso breve pelas salinas e pelo ofício tradicional dos salineiros da região."
  },
  {
    id: "etno-sal-medio",
    name: "Tour salineros y etnocultural medio",
    name_en: "Salt flats & ethnocultural half-day tour",
    name_fr: "Tour demi-journée salines et ethnoculturel",
    name_pt: "Tour meia jornada de salinas e etnocultural",
    tag: "Tour salineros medio", tag_en: "Half-day salt flats tour", tag_fr: "Tour demi-journée des salines", tag_pt: "Tour meia jornada das salinas",
    cat: "Ruta etnocultural", cat_en: "Ethnocultural route", cat_fr: "Itinéraire ethnoculturel", cat_pt: "Rota etnocultural",
    dur: "4 h", price: 35000, img: "assets/img/serv-etno-corto.webp",
    level: "intermedio", min: 4, bestseller: false,
    desc: "Media jornada dedicada a las salinas, el molino de agua de Pañul y el trabajo en arcilla de las comunidades.",
    desc_en: "Half a day dedicated to the salt flats, the Pañul water mill and the clay work of the communities.",
    desc_fr: "Une demi-journée dédiée aux salines, au moulin à eau de Pañul et au travail de l'argile des communautés.",
    desc_pt: "Meia jornada dedicada às salinas, ao moinho de água de Pañul e ao trabalho em argila das comunidades."
  }
];

const SERVICE_CATEGORIES = ["Todos los servicios", "Trekking", "Kayak", "Ruta etnocultural"];

/* ------------------------------------------------------------
   POSTS — « Novedades » de l'accueil.
   `dateSort` (AAAA-MM) sert au tri (les plus récents d'abord) ;
   `date` est l'affichage traduit. Les images sont des placeholders
   SVG à remplacer par les photos de Pablo.
   ------------------------------------------------------------ */
const POSTS = [
  {
    id: "patagon-journal",
    img: "assets/img/news-patagon.svg",
    dateSort: "2026-08",
    date: { es: "Agosto 2026", en: "August 2026", fr: "Août 2026", pt: "Agosto 2026" },
    title: { es: "¡Estamos en Patagon Journal!", en: "We're in Patagon Journal!", fr: "Nous sommes dans Patagon Journal !", pt: "Estamos no Patagon Journal!" },
    body: { es: "Aparecimos en la famosa revista de la Patagonia. La revista está a la venta en nuestra agencia/tienda como edición de colección. ¡Ven a conocer nuestra historia!", en: "We appeared in the famous magazine of Patagonia. The magazine is on sale at our agency/store as a collectible edition. Come and discover our story!", fr: "Nous sommes parus dans le célèbre magazine de la Patagonie. Le magazine est en vente dans notre agence/boutique en édition collector. Venez découvrir notre histoire !", pt: "Aparecemos na famosa revista da Patagônia. A revista está à venda em nossa agência/loja como edição de colecionador. Venha conhecer nossa história!" }
  },
  {
    id: "hongos",
    img: "assets/img/news-hongos.svg",
    dateSort: "2026-07",
    date: { es: "Julio 2026", en: "July 2026", fr: "Juillet 2026", pt: "Julho 2026" },
    title: { es: "Llegaron los hongos", en: "The mushrooms are here", fr: "Les champignons sont arrivés", pt: "Os cogumelos chegaram" },
    body: { es: "La temporada de hongos llegó al bosque esclerófilo. Es una época perfecta para una expedición fotográfica. Aprovecha de conocerlos antes de que se vayan.", en: "Mushroom season has arrived in the sclerophyll forest. It's a perfect time for a photography expedition. Enjoy them before they're gone.", fr: "La saison des champignons est arrivée dans la forêt sclérophylle. Une période idéale pour une expédition photographique. Profitez-en avant qu'ils ne disparaissent.", pt: "A temporada de cogumelos chegou à mata esclerófila. É uma época perfeita para uma expedição fotográfica. Aproveite para conhecê-los antes que partam." }
  },
  {
    id: "trip-foto",
    img: "assets/img/news-trip-foto.svg",
    dateSort: "2024-03",
    date: { es: "03 de marzo de 2024", en: "March 3, 2024", fr: "3 mars 2024", pt: "3 de março de 2024" },
    title: { es: "El trip fotográfico es uno de los preferidos", en: "The photo trip is one of the favorites", fr: "Le trip photo est l'un des préférés", pt: "O trip fotográfico é um dos preferidos" },
    body: { es: "Para quienes buscan tomar las mejores fotografías, no preocuparse del remado, y simplemente explorar en manos del guía experto los rincones de mayor belleza natural del humedal, en nuestro trip fotográfico personalizado el guía te rema y tú sólo te ocupas de disfrutar junto a tu cámara.", en: "For those looking to take the best photographs without worrying about paddling, simply exploring the wetland's most beautiful corners in the hands of an expert guide: in our personalised photo trip the guide paddles for you and you just enjoy your camera.", fr: "Pour celles et ceux qui veulent réussir les plus belles photos sans se soucier de pagayer : dans notre trip photo personnalisé, le guide pagaie pour vous et vous n'avez qu'à profiter, appareil en main, des plus beaux recoins du marais.", pt: "Para quem busca fazer as melhores fotos sem se preocupar em remar: em nosso trip fotográfico personalizado, o guia rema por você e você só precisa aproveitar, câmera na mão, os recantos mais belos do pântano." }
  },
  {
    id: "flamencos",
    img: "assets/img/news-flamencos.svg",
    dateSort: "2023-05",
    date: { es: "16 de mayo de 2023", en: "May 16, 2023", fr: "16 mai 2023", pt: "16 de maio de 2023" },
    title: { es: "Llega el otoño y los flamencos nos visitan", en: "Autumn arrives and flamingos visit us", fr: "L'automne arrive et les flamants nous visitent", pt: "O outono chega e os flamingos nos visitam" },
    body: { es: "Cada año, al llegar el otoño, diferentes aves migratorias visitan el humedal, como descanso de un largo viaje, refugio, o simplemente buscando alimento y un lugar seguro y tranquilo para pasar los meses de invierno.", en: "Every year, when autumn arrives, different migratory birds visit the wetland — as a rest stop on a long journey, as shelter, or simply looking for food and a safe, quiet place to spend the winter months.", fr: "Chaque année, à l'arrivée de l'automne, différents oiseaux migrateurs visitent le marais — escale d'un long voyage, refuge, ou simple recherche de nourriture et d'un lieu sûr et paisible pour passer les mois d'hiver.", pt: "Todos os anos, na chegada do outono, diferentes aves migratórias visitam o pântano — como parada de uma longa viagem, abrigo, ou simplesmente em busca de alimento e de um lugar seguro e tranquilo para passar os meses de inverno." }
  }
];

const fmtCLP = (n) => "$" + n.toLocaleString("es-CL").replace(/\./g, ".") + " CLP";
const fmtCLPshort = (n) => "$" + n.toLocaleString("es-CL").replace(/\./g, ".");
