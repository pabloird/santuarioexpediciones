# Santuario Expediciones — Site statique

Refonte du site santuarioexpediciones.com en **HTML / CSS / JavaScript statique**, prête pour **Netlify**.

- Système de design : voir [`design.md`](./design.md) (inspiré du style éditorial quiet-luxury : fond crème, texte encre, accent orange brûlé, titres serif, boutons pilule, champs pointillés).
- Contenu (textes, prix, produits, vidéos, photos) repris du site original.
- Tout le contenu média est **en local** dans `assets/` (aucune dépendance externe sauf la police Google Fonts).
- **Images optimisées en WebP** (~8 Mo au total, qualité 80). Pour re-optimiser après un ajout d'images : `bash scripts/optimize-images.sh`.

## Pages

| Fichier | Page |
|---|---|
| `index.html` | Accueil (hero vidéo, galerie, expéditions, produits, novedades) |
| `tienda.html` | Tienda — 58 produits, filtres par catégorie, panier |
| `reserva.html` | Reserva online — 12 services avec prix |
| `kayak.html` | Observación de aves en kayak de travesía |
| `trips-fotograficos.html` | Trips fotográficos |
| `trekking.html` | Trekking guiado |
| `rutas-etnoculturales.html` | Rutas etnoculturales |
| `equipo.html` | Nuestro equipo |
| `voluntariado.html` | Voluntariado + formulaire |
| `contact.html` | Contacto |

## Lancer en local

```bash
python3 -m http.server 8123
# puis ouvrir http://localhost:8123
```

Ou utiliser le script : `bash scripts/serve.sh`

## Déployer sur Netlify

1. Glisser-déposer le dossier du projet sur https://app.netlify.com/drop, ou
2. Connecter le dépôt Git (build command vide, publish directory : `/`).

## Fonctionnalités

- **Site bilingue (es / en)** : sélecteur de langue dans le header, langue mémorisée (`localStorage`), paramètre `?lang=en` pour partager un lien.
- **Lightbox produits** : clique sur l'image d'un produit pour l'ouvrir en grand, navigation ‹ › , ajout au panier direct.
- Panier avec `localStorage`, récapitulatif et **commande envoyée par WhatsApp**.
- Réservation des services directement **par WhatsApp** (wa.me/56994365496).
- Formulaires de contact : ouvre l'email (`mailto:`) avec le message pré-rempli.
- Navigation mobile (menu hamburger + dropdown), animations au scroll, galerie circulaire.
- 100% responsive, `prefers-reduced-motion` respecté.

## Bilinguisme (es / en) — comment mettre à jour

**Une seule source de vérité : `js/i18n.js`.** Chaque clé est un objet `{ es, en }`
(ou une simple chaîne si le texte est identique dans les deux langues).

Pour modifier un texte, il suffit d'éditer l'entrée correspondante dans `js/i18n.js` :
le système affiche automatiquement la bonne langue sur toutes les pages. Il n'y a
**pas** de page HTML en anglais à dupliquer.

Conventions :

| Fichier | Préfixe des clés |
|---|---|
| `index.html` | `home.*` |
| `kayak.html` | `kayak.*` |
| `trips-fotograficos.html` | `foto.*` |
| `trekking.html` | `trek.*` |
| `rutas-etnoculturales.html` | `etno.*` |
| `tienda.html` | `shop.*` |
| `reserva.html` | `reserva.*` |
| `equipo.html` | `team.*` |
| `voluntariado.html` | `vol.*` |
| header / footer / panier / formulaires | `ui.*` |

- Les textes longs d'une page vivent dans `I18N["<prefix>.*"]`.
- Les titres de page et meta descriptions sont dans `META[<prefix>]`.
- Produits, services, catégories et badges : dans `js/data.js`, chaque entrée a un
  champ espagnol canonique (`name`, `cat`, `badge`) et son équivalent anglais
  (`name_en`, `cat_en`, `badge_en`). Les libellés de catégories sont dans
  `CAT_LABELS` / `SVC_CAT_LABELS` de `js/i18n.js`.
- Dans le HTML, un élément traduisible porte `data-i18n="clé"` (texte simple),
  `data-i18n-html="clé"` (contient du HTML comme `<em>`/`<strong>`),
  `data-i18n-aria="clé"` ou `data-i18n-alt="clé"`.

## Personnalisation rapide

- Couleurs / typographie : `:root` dans `css/style.css`.
- Textes bilingues : `js/i18n.js` (voir ci-dessus).
- Produits et services : `js/data.js`.
- Coordonnées (email, téléphone, WhatsApp) : `js/main.js` (constante `SITE`).
