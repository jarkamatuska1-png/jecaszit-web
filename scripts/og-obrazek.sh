#!/bin/bash
# Vyrobí z obrázku náhled pro sociální sítě: 1200×630 JPG (poměr 1.91:1),
# což je rozměr, který chce Facebook. Ořezává se na střed, takže hlavy postav
# mají být ve svislém středu obrázku, ne až u kraje.
#
# Použití:
#   ./scripts/og-obrazek.sh public/images/dil-02-banner-16x9.png public/images/og-dil-02.jpg
#
# Výsledek se pak zapíše do hlavičky dílu jako:  og: /images/og-dil-02.jpg

set -euo pipefail

if [ $# -ne 2 ]; then
  echo "Použití: $0 <zdrojový obrázek> <výstupní .jpg>" >&2
  exit 1
fi

zdroj="$1"
vystup="$2"

if [ ! -f "$zdroj" ]; then
  echo "Zdrojový obrázek neexistuje: $zdroj" >&2
  exit 1
fi

sirka=$(sips -g pixelWidth "$zdroj" | awk '/pixelWidth/{print $2}')
vyskaOrezu=$(python3 -c "print(round($sirka / 1.9047619))")

docasny=$(mktemp -t og-obrazek).png
trap 'rm -f "$docasny"' EXIT

cp "$zdroj" "$docasny"
sips -c "$vyskaOrezu" "$sirka" "$docasny" --out "$docasny" >/dev/null
sips -z 630 1200 "$docasny" --out "$docasny" >/dev/null
sips -s format jpeg -s formatOptions 85 "$docasny" --out "$vystup" >/dev/null

echo "Hotovo: $vystup ($(du -h "$vystup" | cut -f1))"
echo "Do hlavičky dílu přidej řádek:  og: /${vystup#public/}"
