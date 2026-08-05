#!/bin/bash
# Démarre le serveur local du site statique (pratique pour la préview Netlify)
cd "$(dirname "$0")/.." || exit 1
exec /usr/bin/python3 -m http.server "${PORT:-8123}" --bind 127.0.0.1
