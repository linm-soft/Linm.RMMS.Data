import {
  LAYERS,
  QL22_CENTER,
  COT_KM_META,
  cotKmBoundsLatLng,
  layerLabel,
  loadSaved,
  persistSaved,
  loadFeatureCollection,
  clearSaved,
  resetToCotKmSeed,
} from './gis-draw-live.js';
import { createPointIcon, legendRowHtml } from './map-icons.js';

const layersEl = document.getElementById('layers');
// Default: Cột km (seed Excel)
let target = 'cot-km';
let draft = null;
let saved = loadSaved();

layersEl.innerHTML = LAYERS.map(
  (l) =>
    `<label class="check"><input type="radio" name="tg" value="${l.code}" ${l.code === target ? 'checked' : ''}> ${l.name} <small style="color:#94a3b8">(${l.geom})</small></label>`,
).join('');
layersEl.addEventListener('change', (e) => {
  if (e.target.name === 'tg') {
    target = e.target.value;
    document.getElementById('fLayer').value = layerLabel(target);
  }
});
document.getElementById('fLayer').value = layerLabel(target);

const map = L.map('map', { center: QL22_CENTER, zoom: 12 });
const tiles = {
  osm: L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '© OpenStreetMap',
  }),
  topo: L.tileLayer('https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png', {
    maxZoom: 17,
    attribution: '© OpenTopoMap',
  }),
  sat: L.tileLayer(
    'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}',
    { maxZoom: 19, attribution: '© Esri' },
  ),
};
let currentTile = tiles.osm.addTo(map);
document.querySelectorAll('input[name=bm]').forEach((r) => {
  r.addEventListener('change', () => {
    map.removeLayer(currentTile);
    currentTile = tiles[r.value].addTo(map);
  });
});

const drawn = new L.FeatureGroup().addTo(map);
const draftLayer = new L.FeatureGroup().addTo(map);
map.addControl(
  new L.Control.Draw({
    position: 'topleft',
    draw: {
      marker: {
        icon: createPointIcon(target),
      },
      polyline: { shapeOptions: { color: '#f59e0b', weight: 4 } },
      polygon: {
        allowIntersection: false,
        shapeOptions: { color: '#f59e0b', fillOpacity: 0.25 },
      },
      rectangle: false,
      circle: false,
      circlemarker: false,
    },
    edit: { featureGroup: drawn, remove: true },
  }),
);

map.on(L.Draw.Event.CREATED, (e) => {
  draftLayer.clearLayers();
  const layer = e.layer;
  if (layer.setIcon) {
    layer.setIcon(createPointIcon(target));
  }
  draftLayer.addLayer(layer);
  const gj = layer.toGeoJSON();
  draft = { layerCode: target, geometry: gj.geometry, leafletLayer: layer };
  document.getElementById('fLayer').value = layerLabel(target);
  document.getElementById('fGeom').value = JSON.stringify(gj.geometry, null, 2);
  document.getElementById('fCode').value = '';
  document.getElementById('fName').value = '';
  document.getElementById('msg').textContent = 'Draft sẵn — nhập Mã/Tên rồi Lưu local';
});

const LAYER_COLOR = {
  'cot-km': '#7c3aed',
  'bien-bao': '#ea580c',
  'tuyen-duong': '#2563eb',
  default: '#2563eb',
};

function popupHtml(p) {
  const bits = [
    `<b>${p.code || ''}</b>`,
    p.name || '',
    p.lyTrinh ? `Lý trình: ${p.lyTrinh}` : '',
    p.tenCotKm ? `Tên cột: ${p.tenCotKm}` : '',
    p.khoangCachToiCotTiepTheoM != null ? `→ cột tiếp: ${p.khoangCachToiCotTiepTheoM} m` : '',
    p.loaiVatLieu || '',
    p.roadCode || '',
    p.layerCode ? `<small>${p.layerCode}</small>` : '',
  ].filter(Boolean);
  return bits.join('<br>');
}

function renderSaved() {
  const ul = document.getElementById('saved');
  const cot = saved.filter((s) => s.layerCode === 'cot-km').length;
  ul.innerHTML = saved.length
    ? `<li style="color:#0f766e;margin-bottom:6px"><strong>${cot}</strong> cột km · tổng ${saved.length} đối tượng</li>` +
      saved
        .slice()
        .reverse()
        .slice(0, 14)
        .map((s) => `<li><strong>${s.code}</strong> — ${s.name} · ${s.layerCode}</li>`)
        .join('')
    : '<li>Chưa có</li>';
}

function loadSavedOntoMap() {
  drawn.clearLayers();
  const data = loadFeatureCollection();
  if (!data || !data.features?.length) return;
  L.geoJSON(data, {
    style: (f) => {
      const code = f.properties?.layerCode;
      const color = LAYER_COLOR[code] || LAYER_COLOR.default;
      return { color, weight: code === 'tuyen-duong' ? 4 : 3, fillOpacity: 0.2 };
    },
    pointToLayer: (f, latlng) => {
      const p = f.properties || {};
      return L.marker(latlng, {
        icon: createPointIcon(p.layerCode, p),
        title: p.tenCotKm || p.name || p.code || '',
      });
    },
    onEachFeature: (f, layer) => {
      layer.bindPopup(popupHtml(f.properties || {}));
      drawn.addLayer(layer);
    },
  });
  try {
    map.fitBounds(cotKmBoundsLatLng(), { padding: [40, 40], maxZoom: 13 });
  } catch (_) {
    map.setView(QL22_CENTER, 12);
  }
}

function fitSeed() {
  map.fitBounds(cotKmBoundsLatLng(), { padding: [40, 40], maxZoom: 13 });
}

document.getElementById('btnLocate').onclick = fitSeed;
document.getElementById('btnClear').onclick = () => {
  draftLayer.clearLayers();
  draft = null;
  document.getElementById('fGeom').value = '';
  document.getElementById('msg').textContent = '';
};
document.getElementById('btnSave').onclick = () => {
  const code = document.getElementById('fCode').value.trim();
  const name = document.getElementById('fName').value.trim();
  if (!draft) {
    document.getElementById('msg').textContent = 'Chưa có geometry — vẽ trước.';
    return;
  }
  if (!code || !name) {
    document.getElementById('msg').textContent = 'Nhập Mã và Tên.';
    return;
  }
  const item = {
    id: crypto.randomUUID ? crypto.randomUUID() : String(Date.now()),
    code,
    name,
    layerCode: draft.layerCode,
    geometry: draft.geometry,
    at: new Date().toISOString(),
  };
  if (draft.leafletLayer.setStyle) {
    draft.leafletLayer.setStyle({
      color: LAYER_COLOR[draft.layerCode] || '#2563eb',
      fillColor: LAYER_COLOR[draft.layerCode] || '#2563eb',
      fillOpacity: 0.25,
      weight: 3,
    });
  }
  drawn.addLayer(draft.leafletLayer);
  draft.leafletLayer.bindPopup(`<b>${code}</b><br>${name}<br><small>${draft.layerCode}</small>`);
  draftLayer.clearLayers();
  draft = null;
  saved.push(item);
  persistSaved(saved);
  document.getElementById('fGeom').value = '';
  document.getElementById('msg').textContent = 'Đã lưu → mock POST /api/v1/gis/drawings';
  renderSaved();
};
document.getElementById('btnExport').onclick = () => {
  const blob = new Blob(
    [localStorage.getItem('rmms-gis-live-fc') || '{"type":"FeatureCollection","features":[]}'],
    { type: 'application/json' },
  );
  const a = document.createElement('a');
  a.href = URL.createObjectURL(blob);
  a.download = 'rmms-cot-km-ql22.geojson';
  a.click();
};
document.getElementById('btnWipe').onclick = () => {
  if (!confirm('Xoá toàn bộ layer trên trình duyệt?')) return;
  saved = [];
  clearSaved();
  drawn.clearLayers();
  draftLayer.clearLayers();
  renderSaved();
};
document.getElementById('btnReloadSeed').onclick = () => {
  if (!confirm('Nạp lại seed từ Excel Cot_km (QL.22 Km31–46)? Local hiện tại sẽ bị ghi đè.')) return;
  saved = resetToCotKmSeed();
  loadSavedOntoMap();
  renderSaved();
  document.getElementById('msg').textContent = `Đã nạp ${saved.length} đối tượng · ${COT_KM_META.sourceFile}`;
};

const srcEl = document.getElementById('seedSource');
if (srcEl) {
  srcEl.textContent = `${COT_KM_META.sourceFile} · ${COT_KM_META.agency} · ${COT_KM_META.roadCode} · ${COT_KM_META.roadSegment}`;
}

const legendEl = document.getElementById('layerLegend');
if (legendEl) {
  legendEl.innerHTML =
    legendRowHtml('cot-km', 'Cột km', 'red') +
    legendRowHtml('bien-bao', 'Biển báo', '#ea580c') +
    `<div class="legend-row"><div class="legend-sym" style="width:30px;height:4px;background:#2563eb;margin-top:10px;border-radius:2px"></div><span class="legend-label" style="color:#2563eb">Tuyến đường</span></div>`;
}

renderSaved();
loadSavedOntoMap();
