/* global L */
import {
  ROUTE_NODES,
  ASSET_TYPES,
  loadRows,
  saveRows,
  loadAi,
  saveAi,
  loadChecklist,
  saveChecklist,
  filterRows,
  genCode,
  formatMoney,
  formatLocal,
} from './asset-data.js';

let rows = loadRows();
let aiList = loadAi();
let routeNodes = ROUTE_NODES.map((r) => ({ ...r }));
let selectedRoute = '';
let page = 1;
const PAGE_SIZE = 5;
let basemap = 'osm';
let selectedId = null;
let formMode = null; // create | view | edit | copy | null
let map = null;
let tileLayer = null;
let markerLayer = null;
let thematic = { assets: true, chainage: true, its: false, pci: false, ai: true };

const TILES = {
  osm: () =>
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
      attribution: '© OpenStreetMap',
    }),
  topo: () =>
    L.tileLayer('https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png', {
      maxZoom: 17,
      attribution: '© OpenTopoMap',
    }),
  sat: () =>
    L.tileLayer(
      'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}',
      { maxZoom: 19, attribution: '© Esri' },
    ),
};

function $(id) {
  return document.getElementById(id);
}

function toast(msg) {
  const el = $('toast');
  el.textContent = msg;
  el.classList.add('on');
  clearTimeout(toast._t);
  toast._t = setTimeout(() => el.classList.remove('on'), 2400);
}

function closeMenus() {
  $('userMenu')?.classList.remove('on');
  $('utilMenu')?.classList.remove('on');
  $('notifPanel')?.classList.remove('on');
}

function filtered() {
  return filterRows(rows, {
    treeQ: $('fTree').value,
    kmFrom: $('fKmFrom').value,
    kmTo: $('fKmTo').value,
    type: $('fType').value,
    route: selectedRoute,
    q: $('fSearch')?.value || '',
    visibleRoutes: new Set(routeNodes.filter((r) => r.visible).map((r) => r.id)),
  });
}

function pendingAi() {
  return aiList.filter((c) => c.status === 'pending' && thematic.ai);
}

function renderTree() {
  const q = ($('fTree').value || '').trim().toLowerCase();
  const nodes = routeNodes.filter(
    (r) => !q || r.name.toLowerCase().includes(q) || 'công ty cổ phần 495'.includes(q),
  );
  $('tree').innerHTML = `
    <div class="tree-org">Công ty Cổ phần 495</div>
    ${
      nodes
        .map(
          (r) => `
      <div class="tree-item ${selectedRoute === r.id ? 'on' : ''}" data-route="${r.id}">
        <button type="button" class="tree-name" data-sel="${r.id}">🛣 ${r.name}</button>
        <button type="button" class="tree-eye" data-eye="${r.id}" title="Hiện/ẩn trên map">${r.visible ? '👁' : '👁‍🗨'}</button>
      </div>`,
        )
        .join('') || '<div class="muted pad">Không khớp lọc tree</div>'
    }`;
}

function setBasemap(key) {
  basemap = key in TILES ? key : 'osm';
  if (!map) return;
  if (tileLayer) map.removeLayer(tileLayer);
  tileLayer = TILES[basemap]().addTo(map);
}

function initMap() {
  if (typeof L === 'undefined') {
    console.error('Leaflet missing — asset demo requires live map');
    toast('Leaflet thiếu — map live không chạy');
    return;
  }
  map = L.map('map', { center: [19.22, 105.64], zoom: 10, zoomControl: false });
  setBasemap('osm');
  markerLayer = L.layerGroup().addTo(map);
  setTimeout(() => map.invalidateSize(), 80);
}

function renderMap(data) {
  if (!map || !markerLayer) return;
  markerLayer.clearLayers();

  if (thematic.assets) {
    data.forEach((r) => {
      const isSel = selectedId === r.id;
      const color = r.source === 'ai' ? '#7c3aed' : isSel ? '#0f766e' : '#0369a1';
      const m = L.circleMarker([r.lat, r.lng], {
        radius: isSel ? 10 : 7,
        color,
        fillColor: color,
        fillOpacity: 0.85,
        weight: 2,
      });
      m.bindTooltip(`${r.code} · ${r.name}`);
      m.on('click', () => openForm('view', r.id));
      markerLayer.addLayer(m);
    });
  }

  if (thematic.ai) {
    pendingAi().forEach((c) => {
      const m = L.circleMarker([c.lat, c.lng], {
        radius: 9,
        color: '#6d28d9',
        fillColor: '#a78bfa',
        fillOpacity: 0.95,
        weight: 2,
        dashArray: '4 2',
      });
      m.bindTooltip(`AI new · ${c.type} · ${Math.round(c.conf * 100)}%`);
      m.on('click', () => {
        toast(`Candidate ${c.id} — Confirm trong panel AI`);
        $('aiPanel')?.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      });
      markerLayer.addLayer(m);
    });
  }

  const nPin = (thematic.assets ? data.length : 0) + pendingAi().length;
  $('mapMeta').textContent = `Leaflet · ${nPin} pin · ${basemap} · AI ${pendingAi().length} pending`;
}

function renderAiPanel() {
  const pending = aiList.filter((c) => c.status === 'pending');
  const box = $('aiList');
  $('aiCount').textContent = String(pending.length);
  if (!pending.length) {
    box.innerHTML = '<div class="muted pad">Không còn candidate pending</div>';
    return;
  }
  box.innerHTML = pending
    .map(
      (c) => `
    <div class="ai-card" data-ai="${c.id}">
      <div class="ai-title"><span class="badge-ai">AI new</span> ${c.type} · ${c.route} ${c.km}</div>
      <div class="muted">conf ${(c.conf * 100).toFixed(0)}% · ${c.lat.toFixed(4)}, ${c.lng.toFixed(4)}</div>
      <div class="muted">${c.note}</div>
      <div class="ai-acts">
        <button type="button" class="btn-primary" data-ai-act="confirm" data-id="${c.id}">Confirm → Asset</button>
        <button type="button" data-ai-act="dismiss" data-id="${c.id}">Dismiss</button>
        <button type="button" class="linkish" data-ai-act="fly" data-id="${c.id}">Zoom map</button>
      </div>
    </div>`,
    )
    .join('');
}

function confirmAi(id) {
  const c = aiList.find((x) => x.id === id);
  if (!c || c.status !== 'pending') return;
  const payload = {
    id: 'a' + Date.now(),
    code: genCode(rows.length),
    name: `${c.type} (AI) · ${c.route} ${c.km}`,
    type: c.type,
    route: c.route,
    kmFrom: c.km,
    kmTo: c.km,
    status: 'Theo dõi',
    lat: c.lat,
    lng: c.lng,
    qr: 'QR-AI-' + Date.now().toString(36).toUpperCase(),
    photos: ['frame camera tuần đường'],
    valueVnd: 0,
    note: 'Created from AI candidate ' + c.id,
    updatedAt: new Date().toISOString().replace(/\.\d{3}Z$/, '+07:00'),
    source: 'ai',
  };
  rows = [payload, ...rows];
  saveRows(rows);
  aiList = aiList.map((x) => (x.id === id ? { ...x, status: 'confirmed' } : x));
  saveAi(aiList);
  selectedId = payload.id;
  toast('Confirm AI → đã tạo Asset (mock)');
  openForm('view', payload.id);
  refresh();
}

function dismissAi(id) {
  aiList = aiList.map((x) => (x.id === id ? { ...x, status: 'dismissed' } : x));
  saveAi(aiList);
  toast('Dismiss candidate ' + id);
  renderAiPanel();
  renderMap(filtered());
}

function renderGrid() {
  const data = filtered();
  const totalPages = Math.max(1, Math.ceil(data.length / PAGE_SIZE));
  if (page > totalPages) page = totalPages;
  const start = (page - 1) * PAGE_SIZE;
  const slice = data.slice(start, start + PAGE_SIZE);

  $('tbody').innerHTML =
    slice
      .map(
        (r, i) => `
    <tr class="${selectedId === r.id ? 'sel' : ''}" data-row="${r.id}">
      <td>${start + i + 1}</td>
      <td>${r.code}${r.source === 'ai' ? ' <span class="badge-ai">AI</span>' : ''}</td>
      <td>${r.name}</td>
      <td>${r.type}</td>
      <td>${r.route}</td>
      <td>${r.kmFrom}</td>
      <td>${r.kmTo}</td>
      <td><span class="st st-${statusClass(r.status)}">${r.status}</span></td>
      <td>${r.lat.toFixed(4)}, ${r.lng.toFixed(4)}</td>
      <td class="acts">
        <button type="button" class="linkish" data-act="view" data-id="${r.id}">Xem</button>
        <button type="button" class="linkish" data-act="edit" data-id="${r.id}">Sửa</button>
        <button type="button" class="linkish" data-act="copy" data-id="${r.id}">Sao chép</button>
        <button type="button" class="linkish" data-act="qr" data-id="${r.id}">QR</button>
      </td>
    </tr>`,
      )
      .join('') ||
    `<tr><td colspan="10" class="empty">Không có dữ liệu — chỉnh search/filter hoặc «Lấy dữ liệu»</td></tr>`;

  $('pageInput').value = String(page);
  $('pageTotal').textContent = `/ ${totalPages}`;
  $('pagerInfo').textContent = `${data.length} bản ghi (demo · localStorage)`;
  renderMap(data);
}

function statusClass(s) {
  if (s === 'Tốt') return 'ok';
  if (s === 'Theo dõi') return 'warn';
  return 'bad';
}

function fillFormFromRow(r, mode) {
  const form = $('assetForm');
  Object.keys(r).forEach((k) => {
    const el = form.elements.namedItem(k);
    if (!el) return;
    if (k === 'photos') el.value = (r.photos || []).join(', ');
    else if (k === 'valueVnd') el.value = String(r.valueVnd);
    else el.value = r[k] ?? '';
  });
  form.updatedAtDisplay.value = formatLocal(r.updatedAt);
  form.valueDisplay.value = formatMoney(r.valueVnd);
  if (mode === 'copy') {
    form.code.value = genCode(rows.length);
    form.qr.value = 'QR-' + form.code.value;
    form.updatedAt.value = '';
    form.updatedAtDisplay.value = '';
    form.name.value = (r.name || '') + ' (bản sao)';
  }
}

function openForm(mode, id) {
  formMode = mode;
  selectedId = mode === 'create' || mode === 'copy' ? null : id || null;
  const panel = $('detailPanel');
  panel.classList.add('on');
  $('banner').classList.remove('on');
  const form = $('assetForm');
  form.reset();
  form.querySelectorAll('.field').forEach((f) => f.classList.remove('invalid'));

  const titles = {
    create: 'Tạo mới tài sản',
    edit: 'Sửa tài sản',
    view: 'Chi tiết tài sản',
    copy: 'Sao chép tài sản',
  };
  $('formTitle').textContent = titles[mode] || 'Chi tiết';
  $('btnSave').hidden = mode === 'view';
  $('btnEdit').hidden = mode !== 'view';
  $('btnCopy').hidden = mode !== 'view';
  panel.classList.toggle('view', mode === 'view');

  if (mode === 'create') {
    form.code.value = genCode(rows.length);
    form.route.value = selectedRoute || 'QL.48C';
    form.kmFrom.value = $('fKmFrom').value || '';
    form.kmTo.value = $('fKmTo').value || '';
    form.status.value = 'Tốt';
    form.lat.value = '19.2000';
    form.lng.value = '105.6500';
    form.qr.value = 'QR-' + form.code.value;
    form.updatedAt.value = '';
    form.source.value = 'manual';
  } else {
    const r = rows.find((x) => x.id === id);
    if (!r) return;
    fillFormFromRow(r, mode);
    if (mode === 'copy') {
      selectedId = null;
      form.source.value = 'manual';
    }
    if (map && r.lat && r.lng) {
      map.setView([r.lat, r.lng], Math.max(map.getZoom(), 13));
    }
  }
  renderGrid();
}

function closeForm() {
  formMode = null;
  $('detailPanel').classList.remove('on');
}

function validateForm() {
  const form = $('assetForm');
  let ok = true;
  ['name', 'type', 'route', 'kmFrom', 'status'].forEach((name) => {
    const field = form.querySelector(`[data-req="${name}"]`);
    const el = form.elements.namedItem(name);
    const bad = !el || !String(el.value || '').trim();
    if (field) field.classList.toggle('invalid', bad);
    if (bad) ok = false;
  });
  $('banner').classList.toggle('on', !ok);
  return ok;
}

function saveForm() {
  if (!validateForm()) {
    toast('Thiếu trường bắt buộc');
    return;
  }
  const form = $('assetForm');
  const isNew = formMode === 'create' || formMode === 'copy' || !selectedId;
  const payload = {
    id: isNew ? 'a' + Date.now() : selectedId,
    code: form.code.value,
    name: form.name.value.trim(),
    type: form.type.value,
    route: form.route.value,
    kmFrom: form.kmFrom.value.trim(),
    kmTo: (form.kmTo.value || form.kmFrom.value).trim(),
    status: form.status.value,
    lat: Number(form.lat.value) || 0,
    lng: Number(form.lng.value) || 0,
    qr: form.qr.value || 'QR-' + form.code.value,
    photos: String(form.photos.value || '')
      .split(',')
      .map((s) => s.trim())
      .filter(Boolean),
    valueVnd: Number(form.valueVnd.value) || 0,
    note: form.note.value.trim(),
    updatedAt: new Date().toISOString().replace(/\.\d{3}Z$/, '+07:00'),
    source: form.source?.value === 'ai' ? 'ai' : 'manual',
  };
  if (isNew) rows = [payload, ...rows];
  else rows = rows.map((r) => (r.id === payload.id ? payload : r));
  saveRows(rows);
  selectedId = payload.id;
  toast(isNew ? 'Đã tạo (mock · localStorage)' : 'Đã lưu (mock · localStorage)');
  openForm('view', payload.id);
  refresh();
}

function refresh() {
  renderTree();
  renderGrid();
  renderAiPanel();
}

function initTypeOptions() {
  const opts = ASSET_TYPES.map((t) => `<option value="${t}">${t}</option>`).join('');
  $('fType').innerHTML = `<option value="">Tất cả loại</option>` + opts;
  $('assetForm').elements.namedItem('type').innerHTML =
    `<option value="">— Chọn —</option>` + opts;
  $('assetForm').elements.namedItem('route').innerHTML = routeNodes
    .map((r) => `<option value="${r.id}">${r.name}</option>`)
    .join('');
}

function initChecklist() {
  const box = $('chk');
  const s = loadChecklist();
  box.querySelectorAll('input').forEach((i) => {
    i.checked = !!s[i.dataset.k];
  });
  box.addEventListener('change', () => {
    const o = {};
    box.querySelectorAll('input').forEach((i) => {
      o[i.dataset.k] = i.checked;
    });
    saveChecklist(o);
  });
}

function syncSideLayersFromThematic() {
  if ($('sideLayerAssets')) $('sideLayerAssets').checked = thematic.assets;
  if ($('sideLayerChain')) $('sideLayerChain').checked = thematic.chainage;
  if ($('sideLayerIts')) $('sideLayerIts').checked = thematic.its;
  if ($('sideLayerPci')) $('sideLayerPci').checked = thematic.pci;
  if ($('sideLayerAi')) $('sideLayerAi').checked = thematic.ai;
}

function applyThematicFromSide() {
  thematic = {
    assets: !!$('sideLayerAssets')?.checked,
    chainage: !!$('sideLayerChain')?.checked,
    its: !!$('sideLayerIts')?.checked,
    pci: !!$('sideLayerPci')?.checked,
    ai: !!$('sideLayerAi')?.checked,
  };
  renderMap(filtered());
  renderAiPanel();
  toast('Lớp dữ liệu đã cập nhật map');
}

function setSideTab(tab) {
  const isRoutes = tab === 'routes';
  document.querySelectorAll('[data-side-tab]').forEach((btn) => {
    const on = btn.getAttribute('data-side-tab') === tab;
    btn.classList.toggle('on', on);
    btn.setAttribute('aria-selected', on ? 'true' : 'false');
  });
  $('paneRoutes')?.classList.toggle('on', isRoutes);
  $('paneLayers')?.classList.toggle('on', !isRoutes);
  if ($('paneRoutes')) $('paneRoutes').hidden = !isRoutes;
  if ($('paneLayers')) $('paneLayers').hidden = isRoutes;
  if (!isRoutes) syncSideLayersFromThematic();
}

function bind() {
  document.addEventListener('click', (e) => {
    const t = e.target.closest('[data-action]');
    if (!t) return;
    handleAction(t.getAttribute('data-action'), t);
  });

  $('fTree').addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      page = 1;
      refresh();
      toast('Đã lọc tree tuyến');
    }
  });
  $('fTree').addEventListener('input', () => renderTree());

  $('fSearch').addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      page = 1;
      renderGrid();
      toast(`Search: ${filtered().length} bản ghi`);
    }
  });
  $('fSearch').addEventListener('input', () => {
    page = 1;
    renderGrid();
  });

  $('tree').addEventListener('click', (e) => {
    const eye = e.target.closest('[data-eye]');
    if (eye) {
      const id = eye.getAttribute('data-eye');
      routeNodes = routeNodes.map((r) => (r.id === id ? { ...r, visible: !r.visible } : r));
      refresh();
      toast(`Lớp tuyến ${id}: ${routeNodes.find((r) => r.id === id).visible ? 'hiện' : 'ẩn'}`);
      return;
    }
    const sel = e.target.closest('[data-sel]');
    if (sel) {
      const id = sel.getAttribute('data-sel');
      selectedRoute = selectedRoute === id ? '' : id;
      page = 1;
      refresh();
      toast(selectedRoute ? `Chọn tuyến ${selectedRoute}` : 'Bỏ chọn tuyến');
    }
  });

  $('tbody').addEventListener('click', (e) => {
    const btn = e.target.closest('[data-act]');
    if (btn) {
      const id = btn.getAttribute('data-id');
      const act = btn.getAttribute('data-act');
      if (act === 'qr') {
        const r = rows.find((x) => x.id === id);
        toast(`QR mock: ${r?.qr || id}`);
        openForm('view', id);
        return;
      }
      if (act === 'edit') {
        openForm('edit', id);
        return;
      }
      if (act === 'copy') {
        openForm('copy', id);
        toast('Sao chép — chỉnh rồi Lưu');
        return;
      }
      openForm('view', id);
      return;
    }
    const row = e.target.closest('[data-row]');
    if (row) {
      selectedId = row.getAttribute('data-row');
      openForm('view', selectedId);
    }
  });

  $('aiList').addEventListener('click', (e) => {
    const btn = e.target.closest('[data-ai-act]');
    if (!btn) return;
    const id = btn.getAttribute('data-id');
    const act = btn.getAttribute('data-ai-act');
    if (act === 'confirm') confirmAi(id);
    else if (act === 'dismiss') dismissAi(id);
    else if (act === 'fly') {
      const c = aiList.find((x) => x.id === id);
      if (c && map) {
        map.setView([c.lat, c.lng], 14);
        toast('Zoom candidate ' + id);
      }
    }
  });

  $('pageInput').addEventListener('change', () => {
    page = Math.max(1, parseInt($('pageInput').value, 10) || 1);
    renderGrid();
    toast(`Trang ${page}`);
  });

  $('sideTabs')?.addEventListener('click', (e) => {
    const btn = e.target.closest('[data-side-tab]');
    if (!btn) return;
    setSideTab(btn.getAttribute('data-side-tab'));
  });

  ['sideLayerAssets', 'sideLayerChain', 'sideLayerIts', 'sideLayerPci', 'sideLayerAi'].forEach((id) => {
    $(id)?.addEventListener('change', applyThematicFromSide);
  });

  $('btnSave').addEventListener('click', saveForm);
  $('btnEdit').addEventListener('click', () => openForm('edit', selectedId));
  $('btnCopy').addEventListener('click', () => {
    if (selectedId) {
      openForm('copy', selectedId);
      toast('Sao chép — chỉnh rồi Lưu');
    }
  });
  $('btnCloseDetail').addEventListener('click', closeForm);

  document.addEventListener('click', (e) => {
    if (!e.target.closest('.menu-wrap')) closeMenus();
  });

  window.addEventListener('resize', () => map?.invalidateSize());
}

function handleAction(act) {
  switch (act) {
    case 'notif':
      closeMenus();
      $('notifPanel')?.classList.toggle('on');
      toast('Thông báo (badge 24) — mock');
      break;
    case 'user':
      closeMenus();
      $('userMenu')?.classList.toggle('on');
      break;
    case 'util':
      closeMenus();
      $('utilMenu')?.classList.toggle('on');
      break;
    case 'clear-filter':
      $('fTree').value = '';
      $('fSearch').value = '';
      $('fKmFrom').value = '';
      $('fKmTo').value = '';
      $('fType').value = '';
      selectedRoute = '';
      page = 1;
      refresh();
      toast('Đã xóa điều kiện lọc');
      break;
    case 'fetch-data':
      page = 1;
      refresh();
      toast(`Lấy dữ liệu — ${filtered().length} bản ghi · AI ${pendingAi().length} (mock)`);
      break;
    case 'create':
      openForm('create');
      toast('Tạo mới / Thêm');
      break;
    case 'copy':
      if (selectedId) {
        openForm('copy', selectedId);
        toast('Sao chép — chỉnh rồi Lưu');
      } else toast('Chọn 1 dòng rồi Sao chép');
      break;
    case 'zoom-out':
      if (map) map.zoomOut();
      toast('Zoom −');
      break;
    case 'zoom-in':
      if (map) map.zoomIn();
      toast('Zoom + (map)');
      break;
    case 'bring-front':
      if (markerLayer && map) {
        markerLayer.eachLayer((ly) => ly.bringToFront && ly.bringToFront());
      }
      toast('⇧ Đưa lớp pin lên trước');
      break;
    case 'geolocate':
      if (map) map.setView([19.23, 105.67], 13);
      toast('Vị trí của tôi — mock GPS 19.23, 105.67');
      break;
    case 'basemap':
      document.querySelectorAll('input[name="basemap"]').forEach((r) => {
        r.checked = r.value === basemap;
      });
      $('basemapModal').classList.add('on');
      break;
    case 'thematic':
      $('chkLayerAssets').checked = thematic.assets;
      $('chkLayerChain').checked = thematic.chainage;
      $('chkLayerIts').checked = thematic.its;
      $('chkLayerPci').checked = thematic.pci;
      $('chkLayerAi').checked = thematic.ai;
      $('thematicModal').classList.add('on');
      break;
    case 'close-basemap':
      $('basemapModal').classList.remove('on');
      break;
    case 'close-thematic':
      $('thematicModal').classList.remove('on');
      break;
    case 'pick-basemap':
      setBasemap(document.querySelector('input[name="basemap"]:checked')?.value || 'osm');
      $('basemapModal').classList.remove('on');
      renderMap(filtered());
      toast('Lớp nền: ' + basemap);
      break;
    case 'pick-thematic':
      thematic = {
        assets: $('chkLayerAssets').checked,
        chainage: $('chkLayerChain').checked,
        its: $('chkLayerIts').checked,
        pci: $('chkLayerPci').checked,
        ai: $('chkLayerAi').checked,
      };
      $('thematicModal').classList.remove('on');
      syncSideLayersFromThematic();
      renderMap(filtered());
      renderAiPanel();
      toast('Lớp chuyên đề đã áp dụng');
      break;
    case 'page-first':
      page = 1;
      renderGrid();
      break;
    case 'page-prev':
      page = Math.max(1, page - 1);
      renderGrid();
      break;
    case 'page-next': {
      const tp = Math.max(1, Math.ceil(filtered().length / PAGE_SIZE));
      page = Math.min(tp, page + 1);
      renderGrid();
      break;
    }
    case 'page-last': {
      page = Math.max(1, Math.ceil(filtered().length / PAGE_SIZE));
      renderGrid();
      break;
    }
    case 'profile':
      toast('Hồ sơ người dùng (mock)');
      closeMenus();
      break;
    case 'logout':
      toast('Đăng xuất (mock)');
      closeMenus();
      break;
    case 'util-import':
      toast('Import tài sản — mock wizard');
      closeMenus();
      break;
    case 'util-export':
      toast('Export danh sách — mock file');
      closeMenus();
      break;
    case 'util-help':
      toast('Tiện ích · hướng dẫn demo · Leaflet · AI candidate');
      closeMenus();
      break;
    case 'fit-all':
      if (map && markerLayer) {
        const layers = [];
        markerLayer.eachLayer((l) => layers.push(l));
        if (layers.length) {
          const g = L.featureGroup(layers);
          map.fitBounds(g.getBounds().pad(0.2));
        }
      }
      toast('Fit tất cả pin');
      break;
    default:
      break;
  }
}

initTypeOptions();
initChecklist();
initMap();
bind();
refresh();
toast('DEMO — no backend · Leaflet live · AI candidate · MFE-modern');
