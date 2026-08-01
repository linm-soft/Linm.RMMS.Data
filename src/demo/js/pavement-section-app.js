import {
  SEED,
  loadRows,
  saveRows,
  genCode,
  filterRows,
  buildApiPayload,
} from './pavement-section.js';

let rows = loadRows();
let mode = 'list';
let currentId = null;
let filter = { search: '', province: '', status: '', kmFrom: '', kmTo: '' };

function renderList() {
  const data = filterRows(rows, filter);
  document.getElementById('tbody').innerHTML =
    data
      .map(
        (r, i) => `
    <tr>
      <td>${i + 1}</td>
      <td>${r.code}</td>
      <td>${r.roadName}</td>
      <td>${r.provinceName || ''}</td>
      <td>${r.kmFrom}</td>
      <td>${r.kmTo}</td>
      <td>${r.structureType || ''}</td>
      <td>${r.roadClass || ''}</td>
      <td>${r.status || ''}</td>
      <td>${r.manageUnit || ''}</td>
      <td>
        <button type="button" class="btn-ghost" data-act="view" data-id="${r.id}">Xem</button>
        <button type="button" class="btn-ghost" data-act="edit" data-id="${r.id}">Sửa</button>
      </td>
    </tr>`,
      )
      .join('') ||
    `<tr><td colspan="11" style="text-align:center;color:#94a3b8;padding:24px">Không có dữ liệu</td></tr>`;
  document.getElementById('pagerInfo').textContent = data.length + ' bản ghi (demo)';
}

function showList() {
  mode = 'list';
  document.getElementById('listPage').classList.remove('hide');
  document.getElementById('formPage').classList.remove('on');
  renderList();
}

function showForm(m, id) {
  mode = m;
  currentId = id;
  document.getElementById('listPage').classList.add('hide');
  document.getElementById('formPage').classList.add('on');
  document.getElementById('banner').classList.remove('on');
  document.getElementById('payload').classList.remove('on');
  document.getElementById('formShell').classList.toggle('view', m === 'view');
  document.getElementById('btnDelete').hidden = m !== 'edit';
  document.getElementById('btnSave').hidden = m === 'view';
  document.getElementById('formTitle').textContent =
    m === 'create'
      ? 'Tạo mới — Phân loại mặt đường'
      : m === 'edit'
        ? 'Sửa — ' + (rows.find((x) => x.id === id) || {}).code
        : 'Xem — ' + (rows.find((x) => x.id === id) || {}).code;

  const form = document.getElementById('form');
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

function readForm() {
  const form = document.getElementById('form');
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
    const el = document.getElementById('form').elements.namedItem(name);
    const val = el && (el.type === 'checkbox' ? true : String(el.value || '').trim());
    const bad = !val;
    f.classList.toggle('invalid', bad);
    if (bad) ok = false;
  });
  document.getElementById('banner').classList.toggle('on', !ok);
  return ok;
}

document.getElementById('btnCreate').onclick = () => showForm('create');
document.getElementById('btnBack').onclick = showList;
document.getElementById('btnCancel').onclick = showList;
document.getElementById('btnRefresh').onclick = () => {
  rows = loadRows();
  renderList();
};
document.getElementById('btnSearch').onclick = () => {
  filter.search = document.getElementById('fSearch').value.trim();
  filter.province = document.getElementById('fProvince').value;
  filter.status = document.getElementById('fStatus').value;
  filter.kmFrom = document.getElementById('fKmFrom').value;
  filter.kmTo = document.getElementById('fKmTo').value;
  renderList();
};
document.getElementById('btnExport').onclick = () => {
  const blob = new Blob([JSON.stringify(rows, null, 2)], { type: 'application/json' });
  const a = document.createElement('a');
  a.href = URL.createObjectURL(blob);
  a.download = 'pavement-sections.json';
  a.click();
};
document.getElementById('btnImport').onclick = () =>
  alert('Demo: Import Excel biểu 1 → POST /api/v1/infra/pavement-sections/import');

document.getElementById('tbody').addEventListener('click', (e) => {
  const b = e.target.closest('[data-act]');
  if (!b) return;
  showForm(b.dataset.act, b.dataset.id);
});

document.getElementById('btnSave').onclick = () => {
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
  const payload = buildApiPayload(mode, o);
  const pre = document.getElementById('payload');
  pre.textContent = JSON.stringify(payload, null, 2);
  pre.classList.add('on');
  setTimeout(showList, 600);
};

document.getElementById('btnDelete').onclick = () => {
  if (!confirm('Xóa bản ghi?')) return;
  rows = rows.filter((r) => r.id !== currentId);
  saveRows(rows);
  showList();
};

renderList();
