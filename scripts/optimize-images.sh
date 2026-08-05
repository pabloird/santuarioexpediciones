#!/bin/bash
# Convertit toutes les images du site en WebP (qualité 80) et redimensionne le logo.
set -u
cd "$(dirname "$0")/.." || exit 1
Q=80

convert() {
  local src="$1"
  local out="${src%.*}.webp"
  if cwebp -q "$Q" -quiet "$src" -o "$out" 2>/dev/null && [ -s "$out" ]; then
    rm -f "$src"
  else
    echo "FAIL: $src"
  fi
}

# Images de page (sauf logo.png conservé pour le favicon)
for f in assets/img/*.jpg assets/img/*.jpeg assets/img/*.png; do
  [ -f "$f" ] || continue
  [ "$f" = "assets/img/logo.png" ] && continue
  convert "$f"
done

# Images produits
for f in assets/img/products/*; do
  [ -f "$f" ] || continue
  convert "$f"
done

# Logo : redimensionné à 600px max (conservé en PNG pour compat favicon)
sips -Z 600 assets/img/logo.png --out /tmp/logo-resized.png > /dev/null 2>&1 && mv /tmp/logo-resized.png assets/img/logo.png

echo "=== WebP conversion done ==="
