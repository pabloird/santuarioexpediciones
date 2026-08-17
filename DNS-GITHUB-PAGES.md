# Connexion domaine → GitHub Pages

> Note interne : où se connecter pour gérer la DNS et les fichiers du site.
> **Aucun identifiant ni mot de passe n'est stocké ici.**

## Où se connecter

| Besoin | Où | URL |
|---|---|---|
| DNS (domaine, redirections, email) | Squarespace Domains | `https://account.squarespace.com/domains/managed/santuarioexpediciones.com/dns/dns-settings` |
| Fichiers du site (code source) | GitHub | `https://github.com/pabloird/santuarioexpediciones` (branche `main`) |

- Le fichier `CNAME` à la racine du repo contient `santuarioexpediciones.com`.
- L'interface Squarespace est en espagnol ("Registros personalizados" = enregistrements personnalisés).

## Objectif

Faire servir le site par **GitHub Pages** (au lieu de Wix) sur `santuarioexpediciones.com`,
sans casser les emails servis par **Google Workspace**.

## Enregistrements DNS à préserver (email) — NE PAS TOUCHER

- 5 × MX `@` → `aspmx.l.google.com`, `alt1..4.aspmx.l.google.com`
- TXT `google._domainkey` (DKIM)
- TXT `@` → `v=spf1 include:_spf.google.com ~all` (SPF)

## Enregistrements à modifier (web uniquement)

| Action | Type | Nom | Donnée |
|---|---|---|---|
| Remplacer | A ×4 | `@` | `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153` (IP GitHub Pages) |
| Supprimer | A ×4 | `www` | (actuellement `216.239.x.x` — Google) |
| Supprimer | AAAA ×8 | `@` + `www` | (actuellement `2001:4860:...` — Google) |
| Supprimer | CNAME | `cdn1.wixdns.net` | (résidu Wix → `www.santuarioexpediciones.com`) |
| Ajouter | CNAME | `www` | `pabloird.github.io` |

## Étapes

1. Ouvrir la page DNS Squarespace ci-dessus.
2. Un dialogue de vérification par email peut apparaître ("Verify to continue as info@santuarioexpediciones.com").
   → Le code est envoyé par email ; le demander au propriétaire du domaine.
3. Appliquer les changements du tableau ci-dessus avec "editar registro" / "borrar registro".
4. Ne jamais modifier les enregistrements email.
5. Après propagation DNS, activer HTTPS :
   - GitHub → repo → Settings → Pages → **Enforce HTTPS**.
   - GitHub émet le certificat TLS automatiquement (Let's Encrypt) quand la DNS pointe vers GitHub.
   - GitHub redirige `www` → racine automatiquement.

## Vérification

- `https://santuarioexpediciones.com/` → site GitHub Pages (plus de Wix)
- `https://www.santuarioexpediciones.com/` → redirige vers la racine en HTTPS
- Email toujours fonctionnel (MX / SPF / DKIM intacts)

> ⚠️ Sécurité : ne jamais écrire de mots de passe, jetons ou codes d'authentification dans ce document ou le repo.