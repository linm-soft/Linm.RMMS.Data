import fs from "fs";
import { createRequire } from "module";
const require = createRequire(import.meta.url);
const seed = require("../../../_data-analy/shared-catalogs/org-unit-seed.json");
const itemsJson = JSON.stringify(seed.items);

const html = `<!DOCTYPE html>
<html lang="vi">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>Prototype — Cơ cấu tổ chức DRVN (org-unit)</title>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css" crossorigin="anonymous" referrerpolicy="no-referrer" />
  <style>
    :root {
      --bg: #f5f7fa; --card: #ffffff; --border: #BABCBE; --border-soft: #e9ecef;
      --txt: #1A1A1A; --txt-secondary: #6c757d; --muted: #6D6D6D; --primary: #0d6efd;
      --primary-hover: #0b5ed7; --ds-focus-shadow: 0px 0px 4px #BABCBE; --ds-radius-md: 4px;
      --ds-font-button: 12px; --ds-font-body: 13px; --ds-font-input: 13px; --ds-font-title: 22px;
      --ds-height-btn: 32px; --col-no: 48px; --col-check: 48px; --check-size: 24px;
      --tree-w: 280px; --legacy: #b45309;
    }
    * { box-sizing: border-box; }
    body { margin: 0; font-family: "Segoe UI", system-ui, sans-serif; background: var(--bg); color: var(--txt); font-size: var(--ds-font-body); }
    select, input[type="text"], input[type="search"], input:not([type]), textarea {
      padding: 6px 10px; border: 1px solid var(--border); border-radius: var(--ds-radius-md);
      font-size: var(--ds-font-input); color: var(--txt); background: #fff; min-height: 32px; width: 100%;
    }
    select:focus, input:focus, textarea:focus { outline: none; border-color: var(--primary); box-shadow: var(--ds-focus-shadow); }
    input[type="checkbox"] { width: var(--check-size); height: var(--check-size); accent-color: var(--primary); cursor: pointer; }
    .page { max-width: 1400px; margin: 0 auto; padding: 8px; display: flex; flex-direction: column; gap: 8px; min-height: 100vh; }
    .zone-a { display: flex; align-items: center; gap: 10px; }
    .zone-a h1 { margin: 0; font-size: var(--ds-font-title); font-weight: 700; color: #212529; display: flex; align-items: center; gap: 10px; }
    .zone-a h1 i { color: var(--primary); font-size: 20px; }
    .zone-b { display: flex; align-items: center; justify-content: space-between; gap: 8px; padding: 8px 0; margin-bottom: 4px; flex-wrap: wrap; position: sticky; top: 0; z-index: 20; background: var(--bg); border-bottom: 1px solid var(--border-soft); box-shadow: 0 2px 8px rgba(0,0,0,.04); }
    .zone-b-left { display: flex; align-items: center; gap: 8px; flex-wrap: wrap; }
    .tb-btn { display: inline-flex; align-items: center; justify-content: center; gap: 4px; border: none; background: #EEEEEE; color: #1A1A1A; padding: 6px 8px; border-radius: var(--ds-radius-md); cursor: pointer; font-size: var(--ds-font-button); font-weight: 600; height: var(--ds-height-btn); }
    .tb-btn:hover:not(:disabled):not(.is-muted) { background: #BABCBE; }
    .tb-btn:disabled, .tb-btn.is-muted { opacity: .6; cursor: not-allowed; }
    .tb-btn i { font-size: 12px; width: 1em; text-align: center; }
    .tb-btn-primary { background: var(--primary); color: #fff; }
    .tb-btn-primary:hover:not(:disabled) { background: var(--primary-hover); }
    .zone-c { background: var(--card); border: 1px solid var(--border-soft); border-radius: var(--ds-radius-md); box-shadow: 0 1px 2px rgba(15,23,42,.04); display: flex; flex-direction: column; min-height: 0; flex: 1; overflow: hidden; }
    .grid-head { display: flex; align-items: flex-start; justify-content: space-between; gap: 16px; padding: 12px 16px 8px; flex-wrap: wrap; }
    .grid-title { margin: 0; font-size: 15px; font-weight: 700; }
    .grid-help { margin: 4px 0 0; font-size: 12px; color: var(--txt-secondary); }
    .search-wrap { display: flex; align-items: stretch; border: 1px solid var(--border); border-radius: var(--ds-radius-md); overflow: hidden; background: #fff; min-width: 240px; min-height: 32px; }
    .search-wrap:focus-within { border-color: var(--primary); box-shadow: var(--ds-focus-shadow); }
    .search-wrap input { border: 0 !important; outline: none !important; box-shadow: none !important; padding: 6px 10px; flex: 1; min-width: 0; min-height: 30px; width: auto; }
    .search-wrap button { border: 0; border-left: 1px solid var(--border); background: #f8fafc; padding: 0 10px; cursor: pointer; color: var(--muted); }
    .split { display: flex; min-height: 420px; border-top: 1px solid var(--border-soft); }
    .tree { width: var(--tree-w); flex-shrink: 0; border-right: 1px solid var(--border-soft); overflow: auto; background: #fafbfc; padding: 8px; }
    .tree-item { display: flex; align-items: center; gap: 6px; padding: 4px 6px; border-radius: 4px; cursor: pointer; font-size: 12px; user-select: none; }
    .tree-item:hover { background: #eef2f7; }
    .tree-item.is-active { background: #eff6ff; color: var(--primary); font-weight: 600; }
    .tree-item .tw { width: 14px; color: var(--muted); font-size: 10px; }
    .tree-children { margin-left: 14px; }
    .badge-leg { font-size: 10px; font-weight: 700; color: #fff; background: var(--legacy); border-radius: 3px; padding: 0 4px; }
    .table-wrap { overflow: auto; flex: 1; min-height: 240px; }
    table { width: 100%; border-collapse: collapse; font-size: 13px; table-layout: fixed; }
    col.col-stt { width: var(--col-no); } col.col-check { width: var(--col-check); } col.col-code { width: 110px; } col.col-kind { width: 72px; } col.col-act { width: 48px; }
    th, td { padding: 8px 12px; border-bottom: 1px solid var(--border-soft); text-align: left; vertical-align: middle; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
    th { background: #f8fafc; font-size: 12px; color: var(--muted); font-weight: 600; position: sticky; top: 0; z-index: 1; }
    th.col-stt, td.col-stt, th.col-check, td.col-check { text-align: center; overflow: visible; }
    tbody tr:nth-child(even) { background: #fafbfc; } tbody tr:hover { background: #f1f5f9; }
    .code { color: var(--primary); font-family: ui-monospace, Consolas, monospace; cursor: pointer; text-decoration: underline; background: none; border: 0; padding: 0; font-size: inherit; }
    .menu { position: relative; }
    .menu summary { list-style: none; cursor: pointer; padding: 4px 8px; border: 1px solid var(--border); border-radius: 4px; background: #fff; }
    .menu summary::-webkit-details-marker { display: none; }
    .panel { display: none; position: absolute; right: 0; z-index: 3; background: #fff; border: 1px solid var(--border); border-radius: 6px; min-width: 128px; box-shadow: 0 8px 24px rgba(15,23,42,.12); }
    .menu[open] .panel { display: block; }
    .panel button { display: block; width: 100%; text-align: left; border: 0; background: transparent; padding: 8px 12px; cursor: pointer; font-size: 13px; }
    .panel button:hover { background: #f1f5f9; }
    .zone-d { display: flex; flex-direction: column; align-items: center; gap: 10px; padding: 12px 16px; border-top: 1px solid var(--border-soft); background: #fff; }
    .zone-d-total { width: 100%; text-align: center; font-size: 13px; color: var(--txt-secondary); }
    .zone-d-controls { display: flex; align-items: center; justify-content: center; flex-wrap: wrap; gap: 12px; width: 100%; }
    .zone-d-pagesize { display: flex; align-items: center; gap: 8px; }
    .zone-d-pagesize select { min-width: 72px; width: auto; }
    .pager-nav { display: inline-flex; align-items: center; }
    .pager-btn { display: inline-flex; align-items: center; justify-content: center; margin: 0 8px; width: 32px; height: 32px; border: 1px solid var(--border-soft); border-radius: var(--ds-radius-md); background: #fff; color: var(--txt-secondary); cursor: pointer; }
    .pager-btn:disabled { opacity: .4; cursor: not-allowed; }
    .pager-indicator { font-size: 12px; color: var(--txt-secondary); padding: 0 6px; min-width: 52px; text-align: center; border: 0; background: transparent; }
    .modal-backdrop { display: none; position: fixed; inset: 0; background: rgba(15,23,42,.35); z-index: 40; align-items: center; justify-content: center; }
    .modal-backdrop.on { display: flex; }
    .modal { width: min(560px, 94vw); background: #fff; border-radius: 8px; border: 1px solid var(--border-soft); max-height: 90vh; overflow: auto; }
    .modal-h { display: flex; align-items: center; gap: 8px; padding: 12px 16px; border-bottom: 1px solid var(--border-soft); }
    .modal-h strong { flex: 1; }
    .modal-b { padding: 16px; display: grid; grid-template-columns: 1fr 1fr; gap: 12px; }
    .modal-b .span2 { grid-column: span 2; }
    .field { display: flex; flex-direction: column; gap: 4px; }
    .field label { font-size: 12px; color: var(--muted); font-weight: 500; }
    .req::after { content: " *"; color: #dc2626; font-weight: 700; }
    .ro { background: #f8fafc; }
    .viewDisabled .section { pointer-events: none; }
    .modal-f { padding: 12px 16px; border-top: 1px solid var(--border-soft); display: flex; gap: 8px; justify-content: flex-end; }
    .kind-pill { display: inline-block; font-size: 11px; font-weight: 700; padding: 1px 6px; border-radius: 999px; background: #eef2ff; color: #3730a3; }
    /* SearchInput — Đơn vị cha (form-catalog-lookup) */
    .lkp { position: relative; }
    .lkp-input-wrap {
      display: flex; align-items: stretch; border: 1px solid var(--border); border-radius: var(--ds-radius-md);
      overflow: hidden; background: #fff; min-height: 32px;
    }
    .lkp-input-wrap:focus-within { border-color: var(--primary); box-shadow: var(--ds-focus-shadow); }
    .lkp-input-wrap.is-ro { background: #f8fafc; }
    .lkp-input-wrap input {
      border: 0 !important; outline: none !important; box-shadow: none !important;
      padding: 6px 10px; flex: 1; min-width: 0; min-height: 30px; width: auto;
    }
    .lkp-input-wrap .lkp-clear {
      border: 0; border-left: 1px solid var(--border); background: #f8fafc; padding: 0 10px;
      cursor: pointer; color: var(--muted);
    }
    .lkp-drop {
      display: none; position: absolute; left: 0; right: 0; top: calc(100% + 4px); z-index: 50;
      max-height: 220px; overflow: auto; background: #fff; border: 1px solid var(--border);
      border-radius: var(--ds-radius-md); box-shadow: 0 8px 24px rgba(15,23,42,.12);
    }
    .lkp-drop.on { display: block; }
    .lkp-opt {
      display: flex; flex-direction: column; gap: 2px; width: 100%; text-align: left;
      border: 0; background: #fff; padding: 8px 10px; cursor: pointer; font-size: 13px;
    }
    .lkp-opt:hover, .lkp-opt.is-active { background: #eff6ff; }
    .lkp-opt .c { color: var(--primary); font-family: ui-monospace, Consolas, monospace; font-weight: 600; }
    .lkp-opt .n { color: var(--txt); }
    .lkp-opt .a { color: var(--muted); font-size: 12px; }
    .lkp-empty { padding: 10px; color: var(--muted); font-size: 12px; }
    .lkp-hint { margin: 4px 0 0; font-size: 11px; color: var(--muted); }
  </style>
</head>
<body>
  <div class="page">
    <div class="zone-a" data-zone="A">
      <h1><i class="fas fa-sitemap" aria-hidden="true"></i> Cơ cấu tổ chức</h1>
    </div>
    <div class="zone-b" data-zone="B">
      <div class="zone-b-left">
        <button class="tb-btn" type="button" id="btnRefresh"><i class="fas fa-sync-alt" aria-hidden="true"></i> Làm mới</button>
        <button class="tb-btn" type="button"><i class="fas fa-history" aria-hidden="true"></i> Lịch sử</button>
        <button class="tb-btn" type="button"><i class="fas fa-cog" aria-hidden="true"></i> Sửa config</button>
        <button class="tb-btn" type="button"><i class="fas fa-file-excel" aria-hidden="true"></i> Xuất Excel</button>
        <button class="tb-btn is-muted" type="button" disabled><i class="fas fa-share-alt" aria-hidden="true"></i> Đề xuất</button>
        <button class="tb-btn is-muted" type="button" disabled><i class="fas fa-inbox" aria-hidden="true"></i> Chờ duyệt</button>
      </div>
      <button class="tb-btn tb-btn-primary" type="button" id="btnAdd"><i class="fas fa-plus" aria-hidden="true"></i> Thêm mới</button>
    </div>
    <div class="zone-c" data-zone="C">
      <div class="grid-head">
        <div>
          <h2 class="grid-title">Danh sách đơn vị tổ chức</h2>
          <p class="grid-help">Nhấn đúp hoặc Ctrl + chuột phải để mở menu theo dòng · tên chính theo Cục Đường bộ · tên gọi cũ (Chi cục) hiển thị phụ · nhãn «hệ cũ» = đơn vị ngoài sơ đồ chính thức</p>
        </div>
        <div class="search-wrap">
          <input id="search" type="search" placeholder="Tìm theo mã, tên hoặc tên gọi cũ…" autocomplete="off" />
          <button type="button" id="btnSearchIcon" aria-label="Tìm"><i class="fas fa-search"></i></button>
        </div>
      </div>
      <div class="split">
        <nav class="tree" id="tree" aria-label="Cây đơn vị"></nav>
        <div class="table-wrap">
          <table>
            <colgroup>
              <col class="col-stt" /><col class="col-check" /><col class="col-code" /><col /><col class="col-kind" /><col /><col class="col-act" />
            </colgroup>
            <thead>
              <tr>
                <th class="col-stt">STT</th>
                <th class="col-check"><input type="checkbox" aria-label="Chọn tất cả" /></th>
                <th>Mã đơn vị</th>
                <th>Tên đơn vị</th>
                <th>Loại</th>
                <th>Tên gọi cũ</th>
                <th></th>
              </tr>
            </thead>
            <tbody id="tbody"></tbody>
          </table>
        </div>
      </div>
      <div class="zone-d" data-zone="D">
        <div class="zone-d-total" id="pagerTotal">Tổng: 0 · Trang 1/1</div>
        <div class="zone-d-controls">
          <div class="zone-d-pagesize">
            <label for="pageSize">Hiển thị</label>
            <select id="pageSize">
              <option value="50" selected>50</option>
              <option value="100">100</option>
              <option value="200">200</option>
              <option value="500">500</option>
            </select>
          </div>
          <div class="pager-nav">
            <button class="pager-btn" type="button" id="pgFirst" aria-label="Đầu"><i class="fas fa-angle-double-left"></i></button>
            <button class="pager-btn" type="button" id="pgPrev" aria-label="Trước"><i class="fas fa-angle-left"></i></button>
            <span class="pager-indicator" id="pgInd">1/1</span>
            <button class="pager-btn" type="button" id="pgNext" aria-label="Sau"><i class="fas fa-angle-right"></i></button>
            <button class="pager-btn" type="button" id="pgLast" aria-label="Cuối"><i class="fas fa-angle-double-right"></i></button>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="modal-backdrop" id="modal">
    <div class="modal" role="dialog" aria-modal="true">
      <div class="modal-h">
        <strong id="modalTitle">Thêm đơn vị</strong>
        <span class="kind-pill" id="modeBadge">Tạo mới</span>
        <button class="tb-btn" type="button" id="btnClose" aria-label="Đóng"><i class="fas fa-times"></i></button>
      </div>
      <div class="modal-b section" id="formBody">
        <div class="field"><label class="req" for="fCode">Mã đơn vị</label><input id="fCode" placeholder="VD: VP-II.2" autocomplete="off" /></div>
        <div class="field"><label class="req" for="fKind">Loại đơn vị</label>
          <select id="fKind">
            <option value="ORG">Tổ chức gốc</option>
            <option value="HQ">Lãnh đạo Cục</option>
            <option value="ADV">Cơ quan tham mưu</option>
            <option value="REG">Khu quản lý đường bộ</option>
            <option value="VP">Văn phòng QLĐB</option>
            <option value="SU">Đơn vị sự nghiệp</option>
            <option value="ROOM">Phòng chức năng</option>
          </select>
        </div>
        <div class="field span2"><label class="req" for="fName">Tên đơn vị</label><input id="fName" placeholder="Nhập tên đơn vị" autocomplete="off" /></div>
        <div class="field span2">
          <label for="fParentQ">Đơn vị cha</label>
          <div class="lkp" id="parentLkp">
            <input type="hidden" id="fParent" value="" />
            <div class="lkp-input-wrap" id="fParentWrap">
              <input id="fParentQ" type="search" placeholder="Gõ mã hoặc tên để chọn đơn vị cha…" autocomplete="off" />
              <button type="button" class="lkp-clear" id="fParentClear" title="Xóa chọn" aria-label="Xóa"><i class="fas fa-times"></i></button>
            </div>
            <div class="lkp-drop" id="fParentDrop" role="listbox"></div>
            <p class="lkp-hint">Gõ để tìm và chọn · không phân biệt hoa thường · hiển thị mã + tên</p>
          </div>
        </div>
        <div class="field span2"><label for="fAlias">Tên gọi cũ</label><input id="fAlias" placeholder="VD: Chi cục QLĐB II.2" autocomplete="off" /></div>
        <div class="field"><label for="fActive">Đang dùng</label><input id="fActive" type="checkbox" checked /></div>
      </div>
      <div class="modal-f" id="modalFooter">
        <button class="tb-btn" type="button" id="btnCancel"><i class="fas fa-times" aria-hidden="true"></i> Hủy</button>
        <button class="tb-btn tb-btn-primary" type="button" id="btnSave"><i class="fas fa-save" aria-hidden="true"></i> Lưu</button>
      </div>
    </div>
  </div>

<script>
const ITEMS = ${itemsJson};
const KIND_VN = {
  ORG: 'Tổ chức gốc', HQ: 'Lãnh đạo Cục', ADV: 'Tham mưu', REG: 'Khu QLĐB',
  VP: 'Văn phòng QLĐB', SU: 'Sự nghiệp', ROOM: 'Phòng'
};
const MODE_VN = { create: 'Tạo mới', edit: 'Sửa', view: 'Xem', copy: 'Sao chép' };
let selectedCode = 'DRVN';
let q = '';
let page = 1;
let pageSize = 50;
let mode = 'create';
let parentPick = null;
const byParent = {};
ITEMS.forEach(r => {
  const p = r.parentCode || '__ROOT__';
  (byParent[p] ||= []).push(r);
});
function childrenOf(code) { return byParent[code] || []; }
function norm(s) {
  return String(s || '').toLowerCase().normalize('NFD').replace(/[\\u0300-\\u036f]/g,'').replace(/đ/g,'d').replace(/Đ/g,'d');
}
function filteredRows() {
  const needle = norm(q).trim();
  if (needle) {
    return ITEMS.filter(r => [r.code,r.name,r.legacyAlias,r.kind,KIND_VN[r.kind]].some(x => norm(x).includes(needle)));
  }
  const kids = childrenOf(selectedCode);
  return kids.length ? kids : ITEMS.filter(r => r.code === selectedCode);
}
function renderTree(parent, depth) {
  const nodes = childrenOf(parent);
  if (!nodes.length) return '';
  return '<div class="tree-children">' + nodes.map(n => {
    const hasKids = childrenOf(n.code).length > 0;
    const act = n.code === selectedCode ? ' is-active' : '';
    const leg = n.isLegacyExtra ? ' <span class="badge-leg">hệ cũ</span>' : '';
    return '<div><div class="tree-item'+act+'" data-code="'+n.code+'" style="padding-left:'+(depth*2)+'px">'
      + '<span class="tw">'+(hasKids?'▸':'·')+'</span><span>'+n.code+'</span>'+leg+'</div>'
      + renderTree(n.code, depth+1) + '</div>';
  }).join('') + '</div>';
}
function render() {
  document.getElementById('tree').innerHTML =
    '<div class="tree-item'+(selectedCode==='DRVN'?' is-active':'')+'" data-code="DRVN"><span class="tw">▾</span><span>DRVN</span></div>'
    + renderTree('DRVN', 1);
  const rows = filteredRows();
  const pages = Math.max(1, Math.ceil(rows.length / pageSize));
  if (page > pages) page = pages;
  const slice = rows.slice((page-1)*pageSize, page*pageSize);
  document.getElementById('tbody').innerHTML = slice.map((r,i) => {
    const stt = (page-1)*pageSize + i + 1;
    const leg = r.isLegacyExtra ? ' <span class="badge-leg">hệ cũ</span>' : '';
    return '<tr><td class="col-stt">'+stt+'</td><td class="col-check"><input type="checkbox"/></td>'
      + '<td><button class="code" data-view="'+r.code+'">'+r.code+'</button>'+leg+'</td>'
      + '<td title="'+(r.name||'')+'">'+r.name+'</td>'
      + '<td><span class="kind-pill" title="'+r.kind+'">'+(KIND_VN[r.kind]||r.kind)+'</span></td>'
      + '<td title="'+(r.legacyAlias||'')+'">'+(r.legacyAlias||'—')+'</td>'
      + '<td><details class="menu"><summary>⋯</summary><div class="panel">'
      + '<button type="button" data-view="'+r.code+'">Xem</button>'
      + '<button type="button" data-edit="'+r.code+'">Sửa</button>'
      + '<button type="button" data-copy="'+r.code+'">Sao chép</button>'
      + '</div></details></td></tr>';
  }).join('') || '<tr><td colspan="7" style="text-align:center;color:#6c757d;padding:24px">Không có dữ liệu</td></tr>';
  document.getElementById('pagerTotal').textContent = 'Tổng: '+rows.length+' · Trang '+page+'/'+pages;
  document.getElementById('pgInd').textContent = page+'/'+pages;
  document.getElementById('pgFirst').disabled = page<=1;
  document.getElementById('pgPrev').disabled = page<=1;
  document.getElementById('pgNext').disabled = page>=pages;
  document.getElementById('pgLast').disabled = page>=pages;
}
function setParent(row) {
  parentPick = row || null;
  document.getElementById('fParent').value = row?.code || '';
  document.getElementById('fParentQ').value = row ? (row.code + ' — ' + row.name) : '';
  document.getElementById('fParentDrop').classList.remove('on');
}
function searchParents(query, excludeCode) {
  const needle = norm(query).trim();
  return ITEMS.filter(r => {
    if (excludeCode && r.code === excludeCode) return false;
    if (!needle) return true;
    return [r.code, r.name, r.legacyAlias].some(x => norm(x).includes(needle));
  }).slice(0, 12);
}
function renderParentDrop(list) {
  const drop = document.getElementById('fParentDrop');
  if (!list.length) {
    drop.innerHTML = '<div class="lkp-empty">Không tìm thấy đơn vị</div>';
  } else {
    drop.innerHTML = list.map(r =>
      '<button type="button" class="lkp-opt" role="option" data-pick="'+r.code+'">'
      + '<span class="c">'+r.code+'</span>'
      + '<span class="n">'+r.name+'</span>'
      + (r.legacyAlias ? '<span class="a">'+r.legacyAlias+'</span>' : '')
      + '</button>'
    ).join('');
  }
  drop.classList.add('on');
}
function openModal(m, row) {
  mode = m;
  const ro = m === 'view';
  document.getElementById('modal').classList.add('on');
  document.getElementById('formBody').classList.toggle('viewDisabled', ro);
  document.getElementById('modeBadge').textContent = MODE_VN[m] || m;
  document.getElementById('modalTitle').textContent = m==='create'?'Thêm đơn vị':m==='edit'?'Sửa đơn vị':m==='copy'?'Sao chép đơn vị':'Xem đơn vị';
  document.getElementById('fCode').value = row?.code || '';
  document.getElementById('fName').value = row?.name || '';
  document.getElementById('fKind').value = row?.kind || 'VP';
  document.getElementById('fAlias').value = row?.legacyAlias || '';
  document.getElementById('fActive').checked = row?.isActive !== false;
  const parent = row?.parentCode ? ITEMS.find(x => x.code === row.parentCode) : null;
  setParent(parent || null);
  ['fCode','fName','fKind','fAlias','fParentQ'].forEach(id => {
    const el = document.getElementById(id);
    el.readOnly = ro;
    el.classList.toggle('ro', ro);
    if (el.tagName==='SELECT') el.disabled = ro;
  });
  document.getElementById('fParentWrap').classList.toggle('is-ro', ro);
  document.getElementById('fParentClear').disabled = ro;
  document.getElementById('fActive').disabled = ro;
  document.getElementById('modalFooter').style.display = ro ? 'none' : 'flex';
  if (m==='copy') { document.getElementById('fCode').value = ''; document.getElementById('fCode').readOnly = false; }
}
function closeModal(){
  document.getElementById('modal').classList.remove('on');
  document.getElementById('fParentDrop').classList.remove('on');
}
document.getElementById('tree').addEventListener('click', e => {
  const it = e.target.closest('[data-code]'); if (!it) return;
  selectedCode = it.getAttribute('data-code'); q=''; document.getElementById('search').value=''; page=1; render();
});
document.getElementById('tbody').addEventListener('click', e => {
  const btn = e.target.closest('[data-view],[data-edit],[data-copy]');
  if (!btn) return;
  const code = btn.getAttribute('data-view') || btn.getAttribute('data-edit') || btn.getAttribute('data-copy');
  const row = ITEMS.find(r => r.code===code);
  if (btn.hasAttribute('data-view')) openModal('view', row);
  if (btn.hasAttribute('data-edit')) openModal('edit', row);
  if (btn.hasAttribute('data-copy')) openModal('copy', Object.assign({}, row));
});
document.getElementById('btnAdd').onclick = () => openModal('create', { parentCode: selectedCode==='DRVN'?null:selectedCode, kind:'VP', isActive:true });
document.getElementById('btnRefresh').onclick = () => { q=''; document.getElementById('search').value=''; page=1; render(); };
document.getElementById('btnClose').onclick = closeModal;
document.getElementById('btnCancel').onclick = closeModal;
document.getElementById('btnSave').onclick = closeModal;
document.getElementById('search').addEventListener('input', e => { q = e.target.value; page=1; render(); });
document.getElementById('pageSize').onchange = e => { pageSize = +e.target.value; page=1; render(); };
document.getElementById('pgFirst').onclick = () => { page=1; render(); };
document.getElementById('pgPrev').onclick = () => { page=Math.max(1,page-1); render(); };
document.getElementById('pgNext').onclick = () => { page++; render(); };
document.getElementById('pgLast').onclick = () => { page=9999; render(); };

const fParentQ = document.getElementById('fParentQ');
fParentQ.addEventListener('focus', () => {
  if (fParentQ.readOnly) return;
  renderParentDrop(searchParents(fParentQ.value.replace(/\\s*—.*$/,''), document.getElementById('fCode').value));
});
fParentQ.addEventListener('input', () => {
  document.getElementById('fParent').value = '';
  parentPick = null;
  renderParentDrop(searchParents(fParentQ.value, document.getElementById('fCode').value));
});
document.getElementById('fParentDrop').addEventListener('click', e => {
  const opt = e.target.closest('[data-pick]'); if (!opt) return;
  const row = ITEMS.find(r => r.code === opt.getAttribute('data-pick'));
  setParent(row);
});
document.getElementById('fParentClear').onclick = () => { if (!document.getElementById('fParentClear').disabled) setParent(null); };
document.addEventListener('click', e => {
  if (!e.target.closest('#parentLkp')) document.getElementById('fParentDrop').classList.remove('on');
});
render();
</script>
</body>
</html>
`;

const out = new URL("./org-unit-list-prototype.html", import.meta.url);
fs.writeFileSync(out, html, "utf8");
console.log("wrote", out.pathname, "bytes", html.length, "items", seed.items.length);
