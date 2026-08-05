# DESIGN.md — Spots Travel (spotstravel.co/en)

Système de design de référence pour notre futur site HTML statique d'agence de tourisme.
> ⚠️ Contenu éditorial illustratif uniquement (pas de copie du contenu de Spots). On reprend le **langage visuel** : couleurs, typographie, composants, rythme de page.

## Source

- URL : https://www.spotstravel.co/en
- Date de capture : 5 août 2026
- Preuves : navigation réelle (ego-browser / Chromium) + extraction des styles calculés (getComputedStyle) + captures d'écran. Firecrawl indisponible (crédits épuisés).
- Stack du site source : Next.js (App Router) sur Vercel, images via Sanity CDN.

## Captures de référence

![Haut de page (hero) — capture réelle](./.firecrawl/spotstravel-top.png)

![Page complète — capture réelle](./.firecrawl/spotstravel-full.png)

Les captures ci-dessus sont la **source de vérité visuelle** : hiérarchie, densité, ambiance. Les tokens ci-dessous décrivent la même page en valeurs machine.

## Résumé du design

Un positionnement **"quiet luxury" / éditorial** : fond crème chaud (#fef9eb), texte brun encre (#403232), une seule couleur d'accent forte (orange brûlé #a33600), photos portrait 3:4 scannées façon journal de voyage, typographie de titres **serif à l'ancienne** (Kalice) contre un corps sans-serif (Helvetica Neue). Les boutons sont des pilules, les champs de formulaire des rectangles à **bordure pointillée**, les vignettes de voyages des **cercles**. Beaucoup d'espace blanc, petits labels majuscules espacés, micro-animations au scroll. Ambiance : boutique de luxe discrète, pas une agence de voyage grand public.

## Design Tokens

### Couleurs

Le site utilise un système de variables `--cr-*` (cr = color) avec variantes `-d` (dark) et `-l` (light). Valeurs mesurées :

| Rôle | Token (inféré) | Hex | Usage observé |
|---|---|---|---|
| **Texte principal (encre)** | `--cr-ink` | `#403232` | 90% du texte, header, FAQ, footer |
| **Fond principal (papier)** | `--cr-paper` | `#fef9eb` | Fond de page, header, sections intro/case |
| **Accent (orange brûlé)** | `--cr-orange-d` | `#a33600` | H1 du hero, éléments d'accent |
| **Vert profond** | `--cr-green-d` | `#023a29` | Bouton principal "Send via Email", CTA sombres |
| **Bleu profond** | `--cr-blue-d` | `#134767` | Accent d'une carte voyage |
| **Violet profond** | `--cr-purple-d` | `#55405c` | Accent carte "Paris" (titre au hover) |
| **Ocre / or** | `--cr-ochre-d` | `#915a01` | Accent secondaire |
| **Gris secondaire** | — | `#757575` / `#7d7d7d` | Texte secondaire, jours du calendrier (à 60% d'opacité) |
| **Ambre pastel** | `--cr-orange-l` | `#f9d89f` | Tiles décoratives (spots) |
| **Terracotta pastel** | `--cr-red-l` | `#efbfa7` | Tiles décoratives |
| **Sauge pastel** | `--cr-green-l` | `#cadbc2` | Tiles décoratives |
| **Bleu ciel pastel** | `--cr-blue-l` | `#bddcee` | Tiles décoratives |
| **Blanc** | — | `#ffffff` | Section contact (formulaire) |
| **Gris clair** | — | `#f0f0f0` | Fond navigation du calendrier |

Règles d'usage :
- 1 page = 1 fond principal (crème ou blanc par section) + texte encre + **un seul** accent vif à la fois.
- Les cartes voyages portent chacune une couleur d'accent (`--cr-primary` par carte) révélée au survol.
- Les pastels ne servent qu'aux éléments décoratifs (tiles, pastilles de carte).

### Typographie

| Style | Police | Taille | Graisse | Casse / Interlettrage |
|---|---|---|---|---|
| **Titre display** (h1 hero, h2 section) | Kalice (serif) | h1 hero : 42px ; h2 contact : 68px | 400 | normales, interlettrage normal |
| **Logo** | Kalice | 32px | 400 | interlettrage −0.64px |
| **Titre de carte voyage** (h3) | Kalice | 18px | 500 | normales |
| **Phrase d'accroche hero** | Kalice | 24px | 400 | line-height 29px |
| **Corps de texte** | Helvetica Neue, Helvetica, sans-serif | 17px | 400 | line-height ~1.5 |
| **Liens de nav / boutons** | Helvetica Neue | 14px | 550 | normales |
| **Micro-labels de section** (ex. "WHY WE CURATE") | Helvetica Neue | 12px | 500 | **MAJUSCULES**, interlettrage 0.48px |

Notes :
- **Kalice** est une police serif display de marque (chargée via next/font, graisses 400/500, italique dispo). Pour un site statique, alternatives gratuites proches sur Google Fonts : **Cormorant Garamond** (proche de l'esprit), **Instrument Serif**, ou **Fraunces**. Fallback système : `Georgia, 'Times New Roman', serif`.
- Corps : `-apple-system, "Helvetica Neue", Helvetica, Arial, sans-serif` — pas besoin de police webfont pour le texte.
- Le site source charge aussi Noto Sans/Serif TC/SC (versions chinoises) → prévoir les mêmes font-families pour l'i18n si besoin.

### Espacements & Layout

| Propriété | Valeur mesurée |
|---|---|
| **Largeur de contenu** | **~900px** centré (mesuré sur intro et FAQ) |
| **Header** | 50px de haut, fond crème, **bordure basse pointillée 1px `#403232`** |
| **Hero** | ~925px de haut, h1 + sous-titre + liens + photos portrait éparpillées |
| **Sections** | espacées ~125px (gap entre hero fin et intro : 125px) |
| **Inputs** | hauteur 45px, padding 12.5px 16px, rayon 4px, bordure 1px dashed `#403232` |
| **Boutons** | hauteur 45px, padding 0 20px, **rayon 22.5px (pilule complète)** |
| **FAQ** | largeur 900px, toggles padding 20px 0 |
| **Cartes voyage** | vignette **circulaire** (`border-radius: 100%`, overflow hidden), image portrait 3:4 |
| **Radius global** | pilules (boutons, jours calendrier) / 4px (inputs) / 100% (vignettes) |
| **Bordures** | pointillées 1px (header, inputs) — signature du style |

## Composants

### Header
- Barre 50px, fond `#fef9eb`, bordure basse **dashed 1px** `#403232`.
- Logo gauche : "Spots" en Kalice 32px, padding 8.5px 20px.
- Droite : liens 14px/550 (EN, Instagram, Newsletter, Plan Your Trip) — pas de bouton, liens simples.
- Comportement : collant (sticky) au scroll (classe `is-active`).

### Hero
- h1 Kalice 42px en **`#a33600`** (l'accent orange).
- Sous-titre Kalice 24px, couleur encre.
- Liens texte "Start a journey shaped around you" / "Plan Your Trip" (soulignement au survol, inféré).
- Photos portrait 3:4 (≈162–198px affichées) disposées en collage éparpillé — à reproduire avec des `img` en `position: absolute` + rotations légères.

### Boutons (.btn)
- Pilule : `border-radius: 22.5px`, hauteur 45px, padding 0 20px.
- Style : Helvetica 14px/550.
- **Primaire** : fond `--cr-green-d` `#023a29`, texte `#fef9eb`.
- Variantes couleurs disponibles via tokens `--cr-*` (vert, orange, bleu, violet).
- Hover (inféré) : assombrissement léger / léger lift.

### Cartes voyage ("Bespoke Journeys")
- 4 cartes en ligne (liste horizontale), chacune un `<button>`.
- Structure : vignette circulaire (photo portrait 3:4, `object-fit: cover`, overflow hidden) + titre Kalice 18px/500.
- Chaque carte a une couleur d'accent via `--cr-primary` (violet, rouge, bleu, or…).
- **Hover (mesuré)** : le titre change de couleur vers la couleur d'accent de la carte (ex. Paris → `#55405c`), curseur pointer, zoom de l'image dans le cercle (inféré).
- Lien discret sous la liste : "Explore Journey".

### Accordéon FAQ
- Titre h2 Kalice 42px.
- Toggle : 17px Helvetica, numérotation "01 / 02 / 03…", padding 20px 0, bordure basse fine (inférée), largeur 900px.
- Panneau ouvert : 17px, line-height normal, mêmes largeur.

### Formulaire de planification (section contact)
- Section sur fond **blanc**, h2 Kalice **68px** ("Plan Your Trip").
- Accroche : "Email … or use the form. We'll handle the rest." + lien email.
- Champs : label au-dessus (petit), input 45px, **bordure 1px dashed `#403232`**, rayon 4px, fond transparent, placeholder gris.
- Sélecteur de dates : calendrier double vue (react-calendar) — jours en cercles 14px/500 gris à 60%, mois en 12px majuscules interlettrés 0.48px.
- Compteurs "Who" : Adult / Children / Pet avec steppers +/−.
- CTA : bouton pilule vert "Send via Email".

### Footer
- Minimal : "© 2026 SPOTS TRAVEL" 17px encre, lien Instagram en Kalice 30px.
- Fond transparent (crème visible).

## Patterns de pages (ordre des sections)

1. **Header** collant 50px.
2. **Hero** plein écran (~925px) : h1 accent + sous-titre + CTAs texte + collage photos.
3. **Intro éditoriale** : micro-label MAJUSCULES (12px/0.48px) + paragraphes 17px, ~900px centrés.
4. **Catalogue voyages** : label + rangée de cartes circulaires.
5. **Section décorative** (spots) : pastilles de lieux sur fond pastel, **animées au scroll** (opacité 0→1, scale 0.5→1, positions rotatives — mesuré).
6. **FAQ** accordéon.
7. **Contact** : fond blanc, gros titre, formulaire complet.
8. **Footer** minimal.

Responsive : non mesuré en mobile (la source est une SPA) — prévoir : hero h1 réduit (~32px), cartes voyages qui passent en 2×2 puis 1 colonne, formulaire en colonne unique.

## Style de contenu

- Voix : **éditoriale, discrète, haut de gamme** — phrases courtes et évocatrices ("Travel is easier than ever. But meaning is rarer.").
- Titres de sections en MAJUSCULES espacées, titres de voyages en serif.
- CTA : "Plan Your Trip", "Explore Journey", "Start a journey shaped around you".
- Rythme : peu de texte, beaucoup d'air ; un paragraphe intro + liste d'étapes numérotées pour le processus.

## Instructions de construction (pour l'agent qui implémentera)

Pour créer notre site statique (HTML/CSS/JS pur, contenu propre à notre agence) dans ce style :

1. **Variables CSS** : recopier les tokens couleurs (`--cr-*`) et typographie du fichier. Fond `#fef9eb`, texte `#403232`, accent `#a33600`, vert bouton `#023a29`, pastels pour les décorations.
2. **Polices** : charger **Cormorant Garamond** (ou Instrument Serif) en 400/500 + italique pour les titres (remplacement libre de Kalice) ; corps en pile système Helvetica Neue. Micro-labels : 12px, 500, uppercase, `letter-spacing: 0.48px`.
3. **Header** : 50px sticky, fond crème, `border-bottom: 1px dashed #403232`, logo serif 32px, liens 14px/550.
4. **Hero** : h1 serif 42px accent orange, sous-titre serif 24px, 2 liens texte, collage de 3–6 photos portrait 3:4 éparpillées en position absolue avec légères rotations.
5. **Cartes voyages** : vignettes **circulaires** (photo 3:4, `border-radius: 50%`, overflow hidden), titre serif 18px/500, couleur d'accent par carte appliquée au **titre au survol** + zoom photo.
6. **Formulaire** : champs 45px, `border: 1px dashed #403232`, `border-radius: 4px`, labels au-dessus ; bouton d'envoi pilule (`border-radius: 22.5px`) vert `#023a29` texte crème ; calendrier simple à défaut de react-calendar (cellules rondes).
7. **FAQ** : accordéon natif (`<details>`) numéroté, largeur max 900px.
8. **Animations** : révélations au scroll (opacity 0→1, translateY/scale), transitions 300–400ms ease sur les hovers (titre de carte, zoom image, bouton).
9. **Confinements** : largeur de contenu max ~900px, marges de section ~125px, beaucoup d'air. Ne pas copier les textes ni photos de Spots — écrire un contenu original pour notre agence.
10. **Responsive** : breakpoints ~768px (empiler cartes/formulaire, h1 → 32px, cacher certains liens du header derrière un menu).

## Rerun Inputs

- workflow : firecrawl-website-design-clone (remplacé par capture navigateur manuelle — crédits Firecrawl épuisés)
- source_url : https://www.spotstravel.co/en
- target_stack : HTML/CSS/JS statique
- output : design.md
