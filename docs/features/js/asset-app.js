import {
  ROUTE_NODES,
  ASSET_TYPES,
  loadRows,
  saveRows,
  loadChecklist,
  saveChecklist,
  filterRows,
  genCode,
  formatMoney,
  formatLocal,
} from './asset-data.js';

let rows = loadRows();
let routeNodes = ROUTE_NODES.map((r) => ({ ...r }));
let selectedRoute = '';
let page = 1;
const PAGE_SIZE = 5;
let basemap = 'osm';
let zoom = 1;
let pinOffset = { x: 0, y: 0 };
let selectedId = null;
let formMode = null; // create | view | edit | null

const filter = {
  treeQ: '',
  kmFrom: '',
  kmTo: '',
  type: '',
  route: '',
  get visibleRoutes() {
    return new Set(routeNodes.filter((r) => r.visible).map((r) => r.id));
  },
};

function $(id) {
  return document.getElementById(id);
}

function toast(msg) {
  const el = $('toast');
  el.textContent = msg;
  el.classList.add('on');
  clearTimeout(toast._t);
  toast._t = setTimeout(() => el.classList.remove('on'), 2200);
}

function closeMenus() {
  $('userMenu').classList.remove('on');
  $('utilMenu').classList.remove('on');
  $('notifPanel').classList.remove('on');
}

function filtered() {
  filter.treeQ = $('fTree').value;
  filter.kmFrom = $('fKmFrom').value;
  filter.kmTo = $('fKmTo').value;
  filter.type = $('fType').value;
  filter.route = selectedRoute;
  return filterRows(rows, filter);
}

function renderTree() {
  const q = ($('fTree').value || '').trim().toLowerCase();
  const nodes = routeNodes.filter((r) => !q || r.name.toLowerCase().includes(q) || 'công ty cổ phần 495'.includes(q));
  $('tree').innerHTML = `
    <div class="tree-org">Công ty Cổ phần 495</div>
    ${nodes
      .map(
        (r) => `
      <div class="tree-item ${selectedRoute === r.id ? 'on' : ''}" data-route="${r.id}">
        <button type="button" class="tree-name" data-sel="${r.id}">🛣 ${r.name}</button>
        <button type="button" class="tree-eye" data-eye="${r.id}" title="Hiện/ẩn trên map">${r.visible ? '👁' : '👁‍🗨'}</button>
      </div>`,
      )
      .join('') || '<div class="muted pad">Không khớp lọc tree</div>'}`;
}

function renderPins(data) {
  const layer = $('pins');
  layer.innerHTML = data
    .map((r, i) => {
      const x = 18 + ((i * 17 + (r.lng % 1) * 40) % 70) + pinOffset.x;
      const y = 22 + ((i * 13 + (r.lat % 1) * 35) % 55) + pinOffset.y;
      return `<button type="button" class="pin ${selectedId === r.id ? 'on' : ''}" style="left:${x}%;top:${y}%" data-pin="${r.id}" title="${r.code}">📍</button>`;
    })
    .join('');
  $('mapMeta').textContent = `${data.length} pin · lớp ${basemap} · zoom ${zoom.toFixed(1)}`;
  $('mapCanvas').style.transform = `scale(${zoom})`;
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
      <td>${r.code}</td>
      <td>${r.name}</td>
      <td>${r.type}</td>
      <td>${r.route}</td>
      <td>${r.kmFrom}</td>
      <td>${r.kmTo}</td>
      <td><span class="st st-${statusClass(r.status)}">${r.status}</span></td>
      <td>${r.lat.toFixed(4)}, ${r.lng.toFixed(4)}</td>
      <td>
        <button type="button" class="linkish" data-act="view" data-id="${r.id}">Xem</button>
        <button type="button" class="linkish" data-act="qr" data-id="${r.id}">QR</button>
      </td>
    </tr>`,
      )
      .join('') ||
    `<tr><td colspan="10" class="empty">Không có dữ liệu — chỉnh lọc hoặc bấm «Lấy dữ liệu»</td></tr>`;

  $('pageInput').value = String(page);
  $('pageTotal').textContent = `/ ${totalPages}`;
  $('pagerInfo').textContent = `${data.length} bản ghi (demo · localStorage)`;
  renderPins(data);
}

function statusClass(s) {
  if (s === 'Tốt') return 'ok';
  if (s === 'Theo dõi') return 'warn';
  return 'bad';
}

function openForm(mode, id) {
  formMode = mode;
  selectedId = id || null;
  const panel = $('detailPanel');
  panel.classList.add('on');
  $('banner').classList.remove('on');
  const form = $('assetForm');
  form.reset();
  form.querySelectorAll('.field').forEach((f) => f.classList.remove('invalid'));
  $('formTitle').textContent =
    mode === 'create' ? 'Tạo mới tài sản' : mode === 'edit' ? 'Sửa tài sản' : 'Chi tiết tài sản';
  $('btnSave').hidden = mode === 'view';
  $('btnEdit').hidden = mode !== 'view';
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
  } else {
    const r = rows.find((x) => x.id === id);
    if (!r) return;
    Object.keys(r).forEach((k) => {
      const el = form.elements.namedItem(k);
      if (!el) return;
      if (k === 'photos') el.value = (r.photos || []).join(', ');
      else if (k === 'valueVnd') el.value = String(r.valueVnd);
      else el.value = r[k] ?? '';
    });
    form.updatedAtDisplay.value = formatLocal(r.updatedAt);
    form.valueDisplay.value = formatMoney(r.valueVnd);
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
  const payload = {
    id: selectedId || 'a' + Date.now(),
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
  };
  if (formMode === 'create') rows = [payload, ...rows];
  else rows = rows.map((r) => (r.id === payload.id ? payload : r));
  saveRows(rows);
  selectedId = payload.id;
  toast('Đã lưu (mock · localStorage)');
  openForm('view', payload.id);
  renderGrid();
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

function bind() {
  document.addEventListener('click', (e) => {
    const t = e.target.closest('[data-action]');
    if (!t) return;
    const act = t.getAttribute('data-action');
    handleAction(act, t);
  });

  $('fTree').addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      renderTree();
      toast('Đã lọc tree tuyến');
    }
  });
  $('fTree').addEventListener('input', () => renderTree());

  $('tree').addEventListener('click', (e) => {
    const eye = e.target.closest('[data-eye]');
    if (eye) {
      const id = eye.getAttribute('data-eye');
      routeNodes = routeNodes.map((r) => (r.id === id ? { ...r, visible: !r.visible } : r));
      renderTree();
      renderGrid();
      toast(`Lớp tuyến ${id}: ${routeNodes.find((r) => r.id === id).visible ? 'hiện' : 'ẩn'}`);
      return;
    }
    const sel = e.target.closest('[data-sel]');
    if (sel) {
      const id = sel.getAttribute('data-sel');
      selectedRoute = selectedRoute === id ? '' : id;
      page = 1;
      renderTree();
      renderGrid();
      toast(selectedRoute ? `Chọn tuyến ${selectedRoute}` : 'Bỏ chọn tuyến');
    }
  });

  $('tbody').addEventListener('click', (e) => {
    const btn = e.target.closest('[data-act]');
    if (btn) {
      const id = btn.getAttribute('data-id');
      if (btn.getAttribute('data-act') === 'qr') {
        const r = rows.find((x) => x.id === id);
        toast(`QR mock: ${r?.qr || id}`);
        openForm('view', id);
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

  $('pins').addEventListener('click', (e) => {
    const pin = e.target.closest('[data-pin]');
    if (!pin) return;
    openForm('view', pin.getAttribute('data-pin'));
  });

  $('pageInput').addEventListener('change', () => {
    const n = Math.max(1, parseInt($('pageInput').value, 10) || 1);
    page = n;
    renderGrid();
    toast(`Trang ${page}`);
  });

  $('btnSave').addEventListener('click', saveForm);
  $('btnEdit').addEventListener('click', () => openForm('edit', selectedId));
  $('btnCloseDetail').addEventListener('click', closeForm);

  document.addEventListener('click', (e) => {
    if (!e.target.closest('.menu-wrap')) closeMenus();
  });
}

function handleAction(act) {
  switch (act) {
    case 'notif':
      closeMenus();
      $('notifPanel').classList.toggle('on');
      toast('Thông báo (badge 24) — mock');
      break;
    case 'user':
      closeMenus();
      $('userMenu').classList.toggle('on');
      break;
    case 'util':
      closeMenus();
      $('utilMenu').classList.toggle('on');
      break;
    case 'clear-filter':
      $('fTree').value = '';
      $('fKmFrom').value = '';
      $('fKmTo').value = '';
      $('fType').value = '';
      selectedRoute = '';
      page = 1;
      renderTree();
      renderGrid();
      toast('Đã xóa điều kiện lọc');
      break;
    case 'fetch-data':
      page = 1;
      renderGrid();
      toast(`Lấy dữ liệu — ${filtered().length} bản ghi (mock)`);
      break;
    case 'create':
      openForm('create');
      toast('Tạo mới / Thêm');
      break;
    case 'zoom-out':
      zoom = Math.max(0.7, zoom - 0.15);
      renderPins(filtered());
      toast('Zoom −');
      break;
    case 'zoom-in':
      zoom = Math.min(1.8, zoom + 0.15);
      renderPins(filtered());
      toast('Zoom + (map)');
      break;
    case 'bring-front':
      pinOffset = { x: (pinOffset.x + 3) % 8, y: (pinOffset.y + 2) % 6 };
      renderPins(filtered());
      toast('⇧ Đưa lớp pin lên trước (mock)');
      break;
    case 'geolocate':
      pinOffset = { x: 0, y: 0 };
      zoom = 1.2;
      renderPins(filtered());
      toast('Vị trí của tôi — mock GPS 19.23, 105.67');
      break;
    case 'basemap':
      $('basemapModal').classList.add('on');
      break;
    case 'thematic':
      $('thematicModal').classList.add('on');
      break;
    case 'close-basemap':
      $('basemapModal').classList.remove('on');
      break;
    case 'close-thematic':
      $('thematicModal').classList.remove('on');
      break;
    case 'pick-basemap':
      basemap = document.querySelector('input[name="basemap"]:checked')?.value || 'osm';
      $('mapCanvas').dataset.basemap = basemap;
      $('basemapModal').classList.remove('on');
      renderPins(filtered());
      toast('Lớp nền: ' + basemap);
      break;
    case 'pick-thematic':
      $('thematicModal').classList.remove('on');
      toast('Lớp chuyên đề đã áp dụng (mock)');
      renderPins(filtered());
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
      toast('Tiện ích · hướng dẫn demo');
      closeMenus();
      break;
    default:
      break;
  }
}

initTypeOptions();
initChecklist();
bind();
renderTree();
renderGrid();
toast('DEMO — no backend · MFE-modern shell');
