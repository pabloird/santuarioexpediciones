/* ============================================================
   Santuario Expediciones — données tienda & reserva
   (collectées depuis le site original, août 2026)

   Bilingue : chaque produit/service garde un nom canonique en
   espagnol (`name`, `cat`, `badge`) et un équivalent anglais
   (`name_en`, `cat_en`, `badge_en`). Le JS affiche la langue
   active et se sert du champ espagnol comme identifiant stable
   (panier, filtres).
   ============================================================ */

const PRODUCTS = [
  { name: "COLLAR PUNTA DE LOBOS", name_en: "Punta de Lobos necklace", price: 20000, cat: "Joyas", cat_en: "Jewelry", img: "assets/img/products/collar-punta-de-lobos.webp" },
  { name: "COLLAR PUNTA DE LOBOS GRANDE", name_en: "Punta de Lobos necklace (large)", price: 25000, cat: "Joyas", cat_en: "Jewelry", img: "assets/img/products/collar-punta-de-lobos-grande.webp" },
  { name: "COLLAR COLA DE BALLENA", name_en: "Whale tail necklace", price: 20000, cat: "Joyas", cat_en: "Jewelry", img: "assets/img/products/collar-cola-de-ballena.webp" },
  { name: "CARTAS MINDIKIDY", name_en: "Mindikidy cards", price: 18000, cat: "Libros", cat_en: "Books", img: "assets/img/products/cartas-mindikidy.webp" },
  { name: "GUÍA DE BOLSILLO INTERMAREAL", name_en: "Pocket field guide: intertidal zone", price: 5000, cat: "Libros", cat_en: "Books", img: "assets/img/products/guia-intermareal.webp" },
  { name: "GUÍA DE BOLSILLO ROCAS Y MINERALES", name_en: "Pocket field guide: rocks & minerals", price: 5000, cat: "Libros", cat_en: "Books", img: "assets/img/products/guia-rocas-minerales.webp" },
  { name: "GUÍA DE BOLSILLO MARIPOSAS & FLORES SILVESTRES", name_en: "Pocket field guide: butterflies & wildflowers", price: 5000, cat: "Libros", cat_en: "Books", img: "assets/img/products/guia-mariposas.webp" },
  { name: "GUÍA DE BOLSILLO HUMEDALES", name_en: "Pocket field guide: wetlands", price: 5000, cat: "Libros", cat_en: "Books", img: "assets/img/products/guia-humedales.webp" },
  { name: "GUÍA DE BOLSILLO CIELO NOCTURNO", name_en: "Pocket field guide: night sky", price: 5000, cat: "Libros", cat_en: "Books", img: "assets/img/products/guia-cielo-nocturno.webp" },
  { name: "GUÍA DE BOLSILLO NUBES", name_en: "Pocket field guide: clouds", price: 5000, cat: "Libros", cat_en: "Books", img: "assets/img/products/guia-nubes.webp" },
  { name: "GUÍA DE BOLSILLO BOSQUE ESCLERÓFILO", name_en: "Pocket field guide: sclerophyll forest", price: 5000, cat: "Libros", cat_en: "Books", img: "assets/img/products/guia-bosque-esclerofilo.webp" },
  { name: "PORTACUCHILLO", name_en: "Knife holder", price: 9900, cat: "Campante", cat_en: "Campante", img: "assets/img/products/portacuchillo.webp" },
  { name: "LLAVERO", name_en: "Keyring", price: 3500, cat: "Campante", cat_en: "Campante", img: "assets/img/products/llavero.webp" },
  { name: "NECESER HABANO", name_en: "Havana pouch", price: 45000, cat: "Campante", cat_en: "Campante", img: "assets/img/products/neceser-habano.webp" },
  { name: "TARJETERO", name_en: "Card holder", price: 20000, cat: "Campante", cat_en: "Campante", img: "assets/img/products/tarjetero.webp" },
  { name: "CORREA STRAPS PARA LENTES EN CUERO", name_en: "Leather glasses strap", price: 6500, cat: "Campante", cat_en: "Campante", img: "assets/img/products/correa-lentes.webp" },
  { name: "PIEDRA PARA AFILAR OPINEL 10 CM", name_en: "Opinel sharpening stone 10 cm", price: 9990, cat: "Opinel", cat_en: "Opinel", img: "assets/img/products/piedra-afilar.webp" },
  { name: "OPINEL N°08 TREKKING HANDLE + SHEATH SET", name_en: "Opinel N°08 trekking handle + sheath set", price: 29990, cat: "Opinel", cat_en: "Opinel", img: "assets/img/products/opinel-trekking.webp" },
  { name: "OPINEL N°4 CUCHILLO LLAVERO", name_en: "Opinel N°4 keychain knife", price: 11990, cat: "Opinel", cat_en: "Opinel", img: "assets/img/products/opinel-llavero.webp" },
  { name: "PICNIC SET", name_en: "Picnic set", price: 14990, cat: "Opinel", cat_en: "Opinel", img: "assets/img/products/picnic-set.webp" },
  { name: "TIJERA PARA PODAR", name_en: "Pruning shears", price: 59990, cat: "Opinel", cat_en: "Opinel", img: "assets/img/products/tijera-podar.webp" },
  { name: "OPINEL N°10 ABREBOTELLAS CON SACACORCHOS", name_en: "Opinel N°10 bottle opener with corkscrew", price: 29990, cat: "Opinel", cat_en: "Opinel", img: "assets/img/products/opinel-abrebotellas.webp" },
  { name: "OPINEL PARA SETAS N8", name_en: "Opinel N8 mushroom knife", price: 26990, cat: "Opinel", cat_en: "Opinel", img: "assets/img/products/opinel-setas.webp" },
  { name: "KIT PROTECCIÓN SOLAR", name_en: "Sun protection kit", price: 15990, cat: "Cosméticos", cat_en: "Cosmetics", img: "assets/img/products/kit-proteccion-solar.webp" },
  { name: "PROTECTOR SOLAR FACIAL", name_en: "Facial sunscreen", price: 10990, cat: "Cosméticos", cat_en: "Cosmetics", img: "assets/img/products/protector-facial.webp" },
  { name: "PROTECTOR SOLAR LABIAL", name_en: "Lip balm SPF", price: 5990, cat: "Cosméticos", cat_en: "Cosmetics", img: "assets/img/products/protector-labial.webp" },
  { name: "LOCIÓN CAPILAR NUTRITIVA Y REPARADORA", name_en: "Nourishing & repairing hair lotion", price: 14990, cat: "Cosméticos", cat_en: "Cosmetics", img: "assets/img/products/lacion-capilar.webp" },
  { name: 'LIBRO "FOCHEM"', name_en: 'Book "FOCHEM"', price: 15000, cat: "Libros", cat_en: "Books", img: "assets/img/products/libro-fochem.webp" },
  { name: 'LIBRO "LAS ESTRELLAS SON EL REGISTRO DE LA NOCHE"', name_en: 'Book "The stars are the record of the night"', price: 12000, cat: "Libros", cat_en: "Books", img: "assets/img/products/libro-estrellas.webp" },
  { name: 'LIBRO "EL PUEBLO SELK\'NAM ESTÁ VIVO"', name_en: 'Book "The Selk\'nam people are alive"', price: 15000, cat: "Libros", cat_en: "Books", img: "assets/img/products/libro-selknam.webp" },
  { name: 'LIBRO "MARIPOSAS"', name_en: 'Book "Butterflies"', price: 15000, cat: "Libros", cat_en: "Books", img: "assets/img/products/libro-mariposas.webp" },
  { name: 'LIBRO "EL VIENTO BLANCO"', name_en: 'Book "The white wind"', price: 16000, cat: "Libros", cat_en: "Books", img: "assets/img/products/libro-viento-blanco.webp" },
  { name: 'LIBRO "CKAARI"', name_en: 'Book "CKAARI"', price: 12000, cat: "Libros", cat_en: "Books", img: "assets/img/products/libro-ckaari.webp" },
  { name: 'LIBRO "MORADA DE ESPÍRITUS"', name_en: 'Book "Dwelling of spirits"', price: 22000, cat: "Libros", cat_en: "Books", img: "assets/img/products/libro-morada.webp" },
  { name: 'LIBRO "YAGANES DEL NUEVO MUNDO"', name_en: 'Book "Yaganes of the New World"', price: 14000, cat: "Libros", cat_en: "Books", img: "assets/img/products/libro-yaganes.webp" },
  { name: 'LIBRO "NAVEGANTES EN KAYAK"', name_en: 'Book "Kayak navigators"', price: 30000, cat: "Libros", cat_en: "Books", img: "assets/img/products/libro-navegantes.webp" },
  { name: 'LIBRO "LOS CHANGOS"', name_en: 'Book "The Changos"', price: 18000, cat: "Libros", cat_en: "Books", img: "assets/img/products/libro-changos.webp" },
  { name: 'LIBRO "FLORES NATIVAS Y ENDEMICAS DE CHILE"', name_en: 'Book "Native and endemic flowers of Chile"', price: 80000, cat: "Libros", cat_en: "Books", img: "assets/img/products/libro-flores-nativas.webp" },
  { name: 'CARTAS "AMA"', name_en: '"AMA" cards', price: 36000, cat: "Libros", cat_en: "Books", img: "assets/img/products/cartas-ama.webp" },
  { name: 'LIBRO "ANIMALES DE ATACAMA"', name_en: 'Book "Animals of Atacama"', price: 12000, cat: "Libros", cat_en: "Books", img: "assets/img/products/libro-atacama.webp" },
  { name: "DRIPP COFFEE SEÑOR K", name_en: "Señor K drip coffee", price: 10000, cat: "Gastronomía", cat_en: "Food & drink", img: "assets/img/products/dripp-coffee.webp" },
  { name: "BOTAS DE AGUA", name_en: "Water boots", price: 27990, cat: "Accesorios de viaje", cat_en: "Travel accessories", img: "assets/img/products/botas-agua.webp", badge: "Temporada invierno", badge_en: "Winter season" },
  { name: "OPINEL 08 COLORES", name_en: "Opinel 08 colors", price: 16990, cat: "Opinel", cat_en: "Opinel", img: "assets/img/products/opinel-08-colores.webp", badge: "Más vendido", badge_en: "Best seller" },
  { name: "GO TUMBLR", name_en: "Go Tumblr", price: 22990, cat: "Accesorios de viaje", cat_en: "Travel accessories", img: "assets/img/products/go-tumblr.webp" },
  { name: "ILUSTRACION HUAIRAVO EN ACUARELA", name_en: "Huairavo watercolor illustration", price: 45000, cat: "Decoración", cat_en: "Decor", img: "assets/img/products/ilustracion-huairavo.webp", badge: "Producto Local", badge_en: "Local product" },
  { name: "CAPSULAS SEÑOR K", name_en: "Señor K capsules", price: 6000, cat: "Gastronomía", cat_en: "Food & drink", img: "assets/img/products/capsulas-senor-k.webp" },
  { name: "LIBRO NAVEGANTES EN KAYAK", name_en: 'Book "Kayak navigators"', price: 30000, cat: "Libros", cat_en: "Books", img: "assets/img/products/libro-navegantes-2.webp" },
  { name: "CAFE MOLIDO SEÑOR K", name_en: "Señor K ground coffee", price: 10000, cat: "Gastronomía", cat_en: "Food & drink", img: "assets/img/products/cafe-molido.webp" },
  { name: "ILUSTRACION SIETE COLORES EN ACUARELA", name_en: "Sietecolores watercolor illustration", price: 45000, cat: "Decoración", cat_en: "Decor", img: "assets/img/products/ilustracion-sietecolores.webp", badge: "Producto Local", badge_en: "Local product" },
  { name: "ILUSTRACION PERRITO EN ACUARELA", name_en: "Puppy watercolor illustration", price: 45000, cat: "Decoración", cat_en: "Decor", img: "assets/img/products/ilustracion-perrito.webp", badge: "Producto Local", badge_en: "Local product" },
  { name: "ILUSTRACION GAVIOTA DE CAHUIL EN ACUARELA", name_en: "Cáhuil gull watercolor illustration", price: 45000, cat: "Decoración", cat_en: "Decor", img: "assets/img/products/ilustracion-gaviota.webp", badge: "Producto Local", badge_en: "Local product" },
  { name: "FLAMENCO CHILENO", name_en: "Chilean flamingo", price: 10000, cat: "Decoración", cat_en: "Decor", img: "assets/img/products/flamenco-chileno.webp", badge: "Producto Local", badge_en: "Local product" },
  { name: "ILUSTRACION ENMARCADA", name_en: "Framed illustration", price: 10500, cat: "Decoración", cat_en: "Decor", img: "assets/img/products/ilustracion-enmarcada.webp" },
  { name: "GARZA GRANDE", name_en: "Great egret", price: 10000, cat: "Decoración", cat_en: "Decor", img: "assets/img/products/garza-grande.webp", badge: "Producto Local", badge_en: "Local product" },
  { name: "LIBRETA DE NOTAS/DIBUJO", name_en: "Notebook / sketchbook", price: 8800, cat: "Libros", cat_en: "Books", img: "assets/img/products/libreta-notas.webp" },
  { name: "BEER PINT", name_en: "Beer pint", price: 11990, cat: "Gastronomía", cat_en: "Food & drink", img: "assets/img/products/beer-pint.webp" },
  { name: "OPINEL 06 COLORES", name_en: "Opinel 06 colors", price: 14990, cat: "Opinel", cat_en: "Opinel", img: "assets/img/products/opinel-06-colores.webp" },
  { name: "OPINEL MADERA N12", name_en: "Opinel wood N12", price: 21990, cat: "Opinel", cat_en: "Opinel", img: "assets/img/products/opinel-madera-n12.webp" }
];

const PRODUCT_CATEGORIES = ["Todos", "Joyas", "Libros", "Campante", "Opinel", "Cosméticos", "Gastronomía", "Accesorios de viaje", "Decoración"];

const SERVICES = [
  { id: "trek-lobos", name: "Ruta Lobos / La Pancora", name_en: "Lobos Route / La Pancora", cat: "Trekking", cat_en: "Trekking", dur: "2 h", price: 20000, img: "assets/img/serv-lobos.webp" },
  { id: "trek-sietecolores", name: "Descubriendo al Sietecolores", name_en: "Discovering the Sietecolores", cat: "Trekking", cat_en: "Trekking", dur: "3 h", price: 25000, img: "assets/img/serv-sietecolores.webp" },
  { id: "kayak-3h", name: "Observación de aves — Kayak de travesía", name_en: "Bird watching — Sea kayak", cat: "Kayak", cat_en: "Kayak", dur: "3 h", price: 35000, img: "assets/img/serv-kayak-3h.webp" },
  { id: "kayak-4h30", name: "Observación de aves — Kayak de travesía", name_en: "Bird watching — Sea kayak", cat: "Kayak", cat_en: "Kayak", dur: "4 h 30 min", price: 45000, img: "assets/img/serv-kayak-4h30.webp" },
  { id: "kayak-8h", name: "Observación de aves — Kayak de travesía", name_en: "Bird watching — Sea kayak", cat: "Kayak", cat_en: "Kayak", dur: "8 h", price: 75000, img: "assets/img/serv-kayak-8h.webp" },
  { id: "foto-4h30", name: "Expedición fotográfica", name_en: "Photography expedition", cat: "Kayak", cat_en: "Kayak", dur: "4 h 30 min", price: 75000, img: "assets/img/serv-foto-4h30.webp" },
  { id: "foto-7h30", name: "Expedición fotográfica", name_en: "Photography expedition", cat: "Kayak", cat_en: "Kayak", dur: "7 h 30 min", price: 110000, img: "assets/img/serv-foto-7h30.webp" },
  { id: "etno-corto", name: "Tour corto — Ruta etnocultural", name_en: "Short tour — Ethnocultural route", cat: "Ruta etnocultural", cat_en: "Ethnocultural route", dur: "3 h", price: 25000, img: "assets/img/serv-etno-corto.webp" },
  { id: "etno-medio", name: "Tour mediodía — Ruta etnocultural", name_en: "Half-day tour — Ethnocultural route", cat: "Ruta etnocultural", cat_en: "Ethnocultural route", dur: "4 h 30 min", price: 40000, img: "assets/img/serv-etno-medio.webp" },
  { name: "Tour salineros y etnocultural corto", name_en: "Salt flats & ethnocultural short tour", cat: "Ruta etnocultural", cat_en: "Ethnocultural route", dur: "1 h", price: 10000, img: "assets/img/serv-lobos.webp" },
  { name: "Tour salineros y etnocultural medio", name_en: "Salt flats & ethnocultural half-day tour", cat: "Ruta etnocultural", cat_en: "Ethnocultural route", dur: "4 h", price: 35000, img: "assets/img/serv-etno-corto.webp" },
  { name: "Tour día completo, cultura y natura", name_en: "Full-day tour, culture & nature", cat: "Ruta etnocultural", cat_en: "Ethnocultural route", dur: "8 h", price: 60000, img: "assets/img/serv-etno-medio.webp" }
];

const SERVICE_CATEGORIES = ["Todos los servicios", "Trekking", "Kayak", "Ruta etnocultural"];

const fmtCLP = (n) => "$" + n.toLocaleString("es-CL").replace(/\./g, ".") + " CLP";
const fmtCLPshort = (n) => "$" + n.toLocaleString("es-CL").replace(/\./g, ".");
