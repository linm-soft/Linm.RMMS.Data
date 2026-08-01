/**
 * Leaflet point icons — parity GOVOne legend (`|icon|Km3.png`).
 *
 * Local files: ../assets/icons/Km3.png
 * Override: properties.iconUrl = 'data:image/png;base64,...' | '/assets/icons/Km3.png'
 *
 * Không dùng GIF 1×1 trong suốt (OpenLayers placeholder).
 */

const TRANSPARENT_1X1 =
  'data:image/gif;base64,R0lGODlhAQABAID/AMDAwAAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==';

/** Registry theo layer — tên file giống GOVOne export */
export const LAYER_ICON_FILES = {
  'cot-km': '../assets/icons/Km3.png',
  'bien-bao': '../assets/icons/BienBao.png',
};

export function isTransparentPlaceholder(url) {
  return (
    !url ||
    url === TRANSPARENT_1X1 ||
    /R0lGODlhAQABAID\/AMDAwAAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==/.test(url)
  );
}

function svgDataUri(svg) {
  return 'data:image/svg+xml;charset=UTF-8,' + encodeURIComponent(svg);
}

function defaultPinSvg(color) {
  const c = color || '#2563eb';
  return svgDataUri(`<svg xmlns="http://www.w3.org/2000/svg" width="28" height="40" viewBox="0 0 28 40">
  <path d="M14 0 C6.3 0 0 6.3 0 14 c0 10.5 14 26 14 26 s14-15.5 14-26 C28 6.3 21.7 0 14 0z" fill="${c}"/>
  <circle cx="14" cy="14" r="5" fill="#fff"/>
</svg>`);
}

/**
 * @param {string} layerCode
 * @param {object} [props]
 * @returns {L.Icon}
 */
export function createPointIcon(layerCode, props = {}) {
  const custom = props.iconUrl;
  if (custom && !isTransparentPlaceholder(custom)) {
    return L.icon({
      iconUrl: custom,
      iconSize: props.iconSize || [30, 36],
      iconAnchor: props.iconAnchor || [15, 36],
      popupAnchor: props.popupAnchor || [0, -30],
      className: 'rmms-asset-icon',
    });
  }

  const file = LAYER_ICON_FILES[layerCode];
  if (file) {
    // GOVOne legend: image ~15×18 trong viewBox 30×20 → scale map hơi lớn hơn để dễ click
    const size = layerCode === 'cot-km' ? [30, 36] : [28, 32];
    return L.icon({
      iconUrl: file,
      iconSize: size,
      iconAnchor: [size[0] / 2, size[1]],
      popupAnchor: [0, -size[1] + 4],
      className: `rmms-icon-${layerCode}`,
    });
  }

  return L.icon({
    iconUrl: defaultPinSvg('#2563eb'),
    iconSize: [28, 40],
    iconAnchor: [14, 40],
    popupAnchor: [0, -36],
  });
}

/** HTML legend row (parity GOVOne: icon + nhãn đỏ) */
export function legendRowHtml(layerCode, label, color = 'red') {
  const src = LAYER_ICON_FILES[layerCode] || '';
  const img = src
    ? `<img src="${src}" alt="${label}" width="30" height="20" style="object-fit:contain;display:block">`
    : '';
  return `<div class="legend-row" data-layer="${layerCode}">
    <div class="legend-sym">${img}</div>
    <span class="legend-label" style="color:${color}">${label}</span>
  </div>`;
}
