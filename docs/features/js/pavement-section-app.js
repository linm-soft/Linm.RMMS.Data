import {
  loadRows,
  saveRows,
  genCode,
  filterRows,
  buildApiPayload,
} from './pavement-section.js';

let rows = loadRows();
let mode = 'list';
let currentId = null;
let dirty = false;
let leaveAction = null;
let page = 1;
let pageSize = 20;
let filter = { search: '', province: '', road: '', status: '', kmFrom: '', kmTo: '' };
const colVisible = { structure: true, roadClass: true, status: true, manage: true };

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

function setDirty(v) {
  dirty = v;
  $('dirtyBadge').classList.toggle('on', !!v && mode !== 'view' && mode !== 'list');
}

function applyCols() {
  document.querySelectorAll('[data-col]').forEach((cell) => {
    const key = cell.getAttribute('data-col');
    if (key in colVisible) {
      cell.classList.toggle('col-hide', !colVisible[key]);
    }
  });
}

function renderList() {
  const data = filterRows(rows, filter);
  const total = data.length;
  const pages = Math.max(1, Math.ceil(total / pageSize));
  if (page > pages) page = pages;
  const start = (page - 1) * pageSize;
  const slice = data.slice(start, start + pageSize);

  $('tbody').innerHTML =
    slice
      .map(
        (r, i) => `
    <tr>
      <td data-col="stt">${start + i + 1}</td>
      <td data-col="code">${r.code}</td>
      <td data-col="road">${r.roadName}</td>
      <td data-col="province">${r.provinceName || ''}</td>
      <td data-col="kmFrom">${r.kmFrom}</td>
      <td data-col="kmTo">${r.kmTo}</td>
      <td data-col="structure">${r.structureType || ''}</td>
      <td data-col="roadClass">${r.roadClass || ''}</td>
      <td data-col="status">${r.status || ''}</td>
      <td data-col="manage">${r.manageUnit || ''}</td>
      <td data-col="acts">
        <button type="button" class="linkish" data-act="view" data-id="${r.id}">Xem</button>
        <button type="button" class="linkish" data-act="edit" data-id="${r.id}">Sửa</button>
        <button type="button" class="linkish" data-act="delete" data-id="${r.id}">Xóa</button>
      </td>
    </tr>`,
      )
      .join('') ||
    `<tr><td colspan="11" style="text-align:center;color:#94a3b8;padding:24px">Không có dữ liệu</td></tr>`;

  $('pagerInfo').textContent = `${total} bản ghi (demo · localStorage)`;
  $('pageLabel').textContent = `Trang ${page}/${pages}`;
  applyCols();
}

function showList() {
  mode = 'list';
  currentId = null;
  setDirty(false);
  $('listPage').classList.remove('hide');
  $('formPage').classList.remove('on');
  renderList();
}

function syncFormButtons(m) {
  $('btnSave').hidden = m === 'view';
  $('btnCancel').hidden = m === 'view';
  $('btnDelete').hidden = m !== 'edit';
  $('btnEditFromView').hidden = m !== 'view';
  $('btnCloseView').hidden = m !== 'view';
  $('formShell').classList.toggle('view', m === 'view');
}

function showForm(m, id) {
  mode = m;
  currentId = id;
  $('listPage').classList.add('hide');
  $('formPage').classList.add('on');
  $('banner').classList.remove('on');
  $('payload').classList.remove('on');
  syncFormButtons(m);
  setDirty(false);

  $('formTitle').textContent =
    m === 'create'
      ? 'Tạo mới — Phân loại mặt đường'
      : m === 'edit'
        ? 'Sửa — ' + (rows.find((x) => x.id === id) || {}).code
        : 'Xem — ' + (rows.find((x) => x.id === id) || {}).code;

  const form = $('form');
  form.reset();
  form.querySelectorAll('.field').forEach((f) => f.classList.remove('invalid'));
  if (m === 'create') {
    form.code.value = genCode(rows.length);
    form.updatedAt.value = '';
    form.updatedBy.value = '';
  } else {
    const r = rows.find((x) => x.id === id);
    if (!r) return showList();
    Object.keys(r).forEach((k) => {
      const el = form.elements.namedItem(k);
      if (!el) return;
      if (el.type === 'checkbox') el.checked = !!r[k];
      else el.value = r[k] ?? '';
    });
  }
}

function requestLeave(fn) {
  if (dirty && (mode === 'create' || mode === 'edit')) {
    leaveAction = fn;
    $('modalLeave').classList.add('on');
    return;
  }
  fn();
}

function readForm() {
  const form = $('form');
  const fd = new FormData(form);
  const o = Object.fromEntries(fd.entries());
  o.handoverMaintenance = form.handoverMaintenance.checked;
  o.handoverConstruction = form.handoverConstruction.checked;
  [
    'kmFrom',
    'kmTo',
    'lengthKm',
    'baseWidthM',
    'surfaceWidthM',
    'surfaceThicknessCm',
    'lastMajorRehabYear',
    'lastSurfaceRepairYear',
  ].forEach((k) => {
    if (o[k] !== '' && o[k] != null) o[k] = Number(o[k]);
  });
  return o;
}

function validate() {
  let ok = true;
  document.querySelectorAll('.field[data-req]').forEach((f) => {
    const name = f.dataset.req;
    const el = $('form').elements.namedItem(name);
    const val = el && (el.type === 'checkbox' ? true : String(el.value || '').trim());
    const bad = !val;
    f.classList.toggle('invalid', bad);
    if (bad) ok = false;
  });
  $('banner').classList.toggle('on', !ok);
  return ok;
}

function readFilterFromUi() {
  filter.search = $('fSearch').value.trim();
  filter.province = $('fProvince').value;
  filter.road = $('fRoad').value.trim();
  filter.status = $('fStatus').value;
  filter.kmFrom = $('fKmFrom').value;
  filter.kmTo = $('fKmTo').value;
}

function closeMenus() {
  $('notifMenu').classList.remove('on');
  $('userMenu').classList.remove('on');
}

/* —— wire —— */
$('btnCreate').onclick = () => showForm('create');
$('btnBack').onclick = () => requestLeave(showList);
$('btnCancel').onclick = () => requestLeave(showList);
$('btnCloseView').onclick = showList;
$('btnEditFromView').onclick = () => showForm('edit', currentId);

$('btnRefresh').onclick = () => {
  rows = loadRows();
  page = 1;
  renderList();
  toast('Đã làm mới danh sách (local)');
};

$('btnSearch').onclick = () => {
  readFilterFromUi();
  page = 1;
  renderList();
  toast('Đã áp dụng bộ lọc');
};

$('btnClearFilter').onclick = () => {
  $('fSearch').value = '';
  $('fProvince').value = '';
  $('fRoad').value = '';
  $('fStatus').value = '';
  $('fKmFrom').value = '';
  $('fKmTo').value = '';
  filter = { search: '', province: '', road: '', status: '', kmFrom: '', kmTo: '' };
  page = 1;
  renderList();
  toast('Đã xóa điều kiện lọc');
};

$('btnExport').onclick = () => {
  const blob = new Blob([JSON.stringify(rows, null, 2)], { type: 'application/json' });
  const a = document.createElement('a');
  a.href = URL.createObjectURL(blob);
  a.download = 'pavement-sections.json';
  a.click();
  toast('Export JSON thành công (demo)');
};

$('btnImport').onclick = () =>
  toast('Demo: Import Excel biểu 1 → POST /api/v1/infra/pavement-sections/import (không gọi BE)');

$('btnCols').onclick = () => $('modalCols').classList.add('on');
$('btnColsCancel').onclick = () => $('modalCols').classList.remove('on');
$('btnColsApply').onclick = () => {
  document.querySelectorAll('[data-col-toggle]').forEach((cb) => {
    colVisible[cb.getAttribute('data-col-toggle')] = cb.checked;
  });
  applyCols();
  $('modalCols').classList.remove('on');
  toast('Đã áp dụng cấu hình cột');
};

$('btnHelp').onclick = () => $('modalHelp').classList.add('on');
$('btnHelpClose').onclick = () => $('modalHelp').classList.remove('on');

$('btnNotif').onclick = (e) => {
  e.stopPropagation();
  $('userMenu').classList.remove('on');
  $('notifMenu').classList.toggle('on');
};
$('btnUser').onclick = (e) => {
  e.stopPropagation();
  $('notifMenu').classList.remove('on');
  $('userMenu').classList.toggle('on');
};
$('btnProfile').onclick = () => {
  closeMenus();
  toast('Hồ sơ (mock)');
};
$('btnLogout').onclick = () => {
  closeMenus();
  toast('Đăng xuất (mock)');
};
document.addEventListener('click', closeMenus);

$('fPageSize').onchange = () => {
  pageSize = Number($('fPageSize').value) || 20;
  page = 1;
  renderList();
};
$('btnPrev').onclick = () => {
  if (page > 1) {
    page -= 1;
    renderList();
  }
};
$('btnNext').onclick = () => {
  const total = filterRows(rows, filter).length;
  const pages = Math.max(1, Math.ceil(total / pageSize));
  if (page < pages) {
    page += 1;
    renderList();
  }
};

$('tbody').addEventListener('click', (e) => {
  const b = e.target.closest('[data-act]');
  if (!b) return;
  const act = b.dataset.act;
  const id = b.dataset.id;
  if (act === 'delete') {
    if (!confirm('Xóa bản ghi?')) return;
    rows = rows.filter((r) => r.id !== id);
    saveRows(rows);
    renderList();
    toast('Đã xóa (local)');
    return;
  }
  showForm(act, id);
});

$('form').addEventListener('input', () => {
  if (mode === 'create' || mode === 'edit') setDirty(true);
});
$('form').addEventListener('change', () => {
  if (mode === 'create' || mode === 'edit') setDirty(true);
});

$('btnSave').onclick = () => {
  if (!validate()) return;
  const o = readForm();
  o.updatedAt = new Date().toISOString();
  o.updatedBy = 'demo-user';
  if (mode === 'create') {
    o.id = crypto.randomUUID ? crypto.randomUUID() : String(Date.now());
    rows.unshift(o);
  } else {
    o.id = currentId;
    rows = rows.map((r) => (r.id === currentId ? { ...r, ...o } : r));
  }
  saveRows(rows);
  setDirty(false);
  const payload = buildApiPayload(mode, o);
  const pre = $('payload');
  pre.textContent = JSON.stringify(payload, null, 2);
  pre.classList.add('on');
  toast(mode === 'create' ? 'Tạo mới thành công (demo)' : 'Cập nhật thành công (demo)');
  setTimeout(showList, 700);
};

$('btnDelete').onclick = () => {
  if (!confirm('Xóa bản ghi?')) return;
  rows = rows.filter((r) => r.id !== currentId);
  saveRows(rows);
  setDirty(false);
  toast('Đã xóa (local)');
  showList();
};

$('btnLeaveNo').onclick = () => {
  $('modalLeave').classList.remove('on');
  leaveAction = null;
};
$('btnLeaveYes').onclick = () => {
  $('modalLeave').classList.remove('on');
  setDirty(false);
  const fn = leaveAction;
  leaveAction = null;
  if (fn) fn();
};

renderList();
