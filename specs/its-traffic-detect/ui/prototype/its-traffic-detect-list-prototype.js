/** Design prototype — its-traffic-detect · Kind B+D+F · dedupe 10 m · no AI header chrome */
const DEDUPE_RADIUS_M = 10;
const CLASS_LABEL = { bien_bao: "Biển báo", coc_tieu: "Cọc tiêu" };
const CLASS_TO_TYPE = { bien_bao: "GANTRY_SIGN", coc_tieu: "DELINEATOR" };
const EXISTING = [
  { id: "TS-QL1-BB-001", objectClass: "bien_bao", x: 52, y: 58 },
  { id: "TS-QL1-CT-001", objectClass: "coc_tieu", x: 18, y: 22 },
  { id: "TS-QL1-CT-002", objectClass: "coc_tieu", x: 42, y: 48 },
];

function ymd() {
  const d = new Date();
  return `${d.getFullYear()}${String(d.getMonth() + 1).padStart(2, "0")}${String(d.getDate()).padStart(2, "0")}`;
}

function genAssetCode() {
  return `TS-AI-${ymd()}-${String(Math.floor(Math.random() * 9000) + 1).padStart(4, "0")}`;
}

const SEED = () => {
  const now = Date.now();
  const day = ymd();
  return [
    {
      id: `ITS-${day}-0001`,
      objectClass: "bien_bao",
      score: 0.93,
      status: "Draft",
      lat: 19.870750783,
      lng: 105.8037739,
      routeId: "QL1",
      routeLabel: "QL.1 · Km316 · Chi cục QLĐB II.1",
      source: "mobile",
      deviceId: "and-8a2f",
      headingDeg: 42.5,
      alphaDeg: -8.2,
      bbox: "[120,80,220,180]",
      modelVersion: "its-yolov8n-edge-sim",
      engine: "P1",
      nearbyRisk: false,
      nearbyOf: null,
      note: "Seed QL.1 biển báo",
      assetCode: null,
      observedAt: new Date(now - 3600000 * 3).toISOString(),
      x: 54,
      y: 60,
    },
    {
      id: `ITS-${day}-0002`,
      objectClass: "coc_tieu",
      score: 0.88,
      status: "Draft",
      lat: 20.12011,
      lng: 105.8492,
      routeId: "QL1",
      routeLabel: "QL.1 · Km287 · Chi cục QLĐB II.1",
      source: "dashcam",
      deviceId: "cam-dash-12",
      headingDeg: 40.1,
      alphaDeg: 5.5,
      bbox: "[100,90,160,210]",
      modelVersion: "its-yolov8n-edge-sim",
      engine: "P1",
      nearbyRisk: false,
      nearbyOf: null,
      note: "Seed QL.1 cọc tiêu",
      assetCode: null,
      observedAt: new Date(now - 3600000 * 2).toISOString(),
      x: 24,
      y: 28,
    },
    {
      id: `ITS-${day}-0003`,
      objectClass: "bien_bao",
      score: 0.79,
      status: "Draft",
      lat: 19.870790783,
      lng: 105.8038139,
      routeId: "QL1",
      routeLabel: "QL.1 · Km316 · Chi cục QLĐB II.1",
      source: "mobile",
      deviceId: "and-8a2f",
      headingDeg: 43.0,
      alphaDeg: -7.0,
      bbox: "[118,82,218,178]",
      modelVersion: "its-yolov8n-edge-sim",
      engine: "P1",
      nearbyRisk: true,
      nearbyOf: `ITS-${day}-0001`,
      note: `Cùng class · <${DEDUPE_RADIUS_M}m so với …-0001`,
      assetCode: null,
      observedAt: new Date(now - 900000).toISOString(),
      x: 56,
      y: 62,
    },
    {
      id: `ITS-${day}-0004`,
      objectClass: "coc_tieu",
      score: 0.61,
      status: "Draft",
      lat: 19.889678,
      lng: 105.808507,
      routeId: "QL1",
      routeLabel: "QL.1 · Km314 · Chi cục QLĐB II.1",
      source: "cctv",
      deviceId: "cctv-ql1-ii1-01",
      headingDeg: 0,
      alphaDeg: 0,
      bbox: "[200,120,260,240]",
      modelVersion: "its-yolov8n-2026.08",
      engine: "P2",
      nearbyRisk: false,
      nearbyOf: null,
      note: "Score thấp — cần review thủ công",
      assetCode: null,
      observedAt: new Date(now - 300000).toISOString(),
      x: 48,
      y: 54,
    },
  ];
};

let rows = SEED();
let selected = null;
let formMode = "view";
let formDirty = false;
let pendingConfirmId = null;
let pendingDismissId = null;
let leaveResolve = null;
let basemap = "OSM";

const tbody = document.getElementById("tbody");
const filterVals = () => rows.map((r) => r.id);
let filterChecked = new Set(filterVals());

function toast(msg) {
  const el = document.getElementById("toast");
  el.textContent = msg;
  el.classList.add("on");
  setTimeout(() => el.classList.remove("on"), 2200);
}

function statusHtml(s) {
  const m = { Draft: "st-d", Confirmed: "st-ok", Dismissed: "st-x" };
  return `<span class="st ${m[s] || "st-x"}">${s}</span>`;
}

function searchBag() {
  return (document.getElementById("q").value || document.getElementById("fSearchFilter").value || "")
    .trim()
    .toLowerCase();
}

function filtered() {
  const q = searchBag();
  const route = (document.getElementById("fRoute").value || "").trim().toLowerCase();
  const cls = document.getElementById("fClass").value;
  const src = document.getElementById("fSource").value;
  const st = document.getElementById("fStatus").value;
  const eng = document.getElementById("fEngine").value;
  const from = document.getElementById("fFrom").value;
  const to = document.getElementById("fTo").value;
  return rows.filter((r) => {
    if (filterChecked.size && !filterChecked.has(r.id)) return false;
    if (cls && r.objectClass !== cls) return false;
    if (src && r.source !== src) return false;
    if (st && r.status !== st) return false;
    if (eng && r.engine !== eng) return false;
    if (
      route &&
      route !== "all" &&
      !(r.routeLabel.toLowerCase().includes(route) || r.routeId.toLowerCase().includes(route.replace(".", "")))
    )
      return false;
    if (from && r.observedAt.slice(0, 10) < from) return false;
    if (to && r.observedAt.slice(0, 10) > to) return false;
    if (!q) return true;
    const bag = [
      r.id,
      CLASS_LABEL[r.objectClass],
      r.objectClass,
      r.routeLabel,
      r.source,
      r.deviceId,
      r.assetCode,
      r.note,
      r.modelVersion,
      r.engine,
    ]
      .join(" ")
      .toLowerCase();
    return bag.includes(q);
  });
}

function renderMap(list) {
  const canvas = document.getElementById("mapCanvas");
  canvas.innerHTML =
    EXISTING.map(
      (e) =>
        `<button type="button" class="pin exist" style="left:${e.x}%;top:${e.y}%" title="${e.id}">${e.id.replace("TS-QL1-", "")}</button>`
    ).join("") +
    list
      .map((r) => {
        const cls = r.status === "Confirmed" ? "ok" : r.nearbyRisk ? "near" : "draft";
        return `<button type="button" class="pin ${cls}" data-pin="${r.id}" style="left:${r.x}%;top:${r.y}%">${r.id.slice(-4)}</button>`;
      })
      .join("");
}

function updateKpis(list) {
  document.getElementById("kpiDraft").textContent = String(list.filter((r) => r.status === "Draft").length);
  document.getElementById("kpiOk").textContent = String(list.filter((r) => r.status === "Confirmed").length);
  document.getElementById("kpiNear").textContent = String(list.filter((r) => r.nearbyRisk).length);
  document.getElementById("kpiTotal").textContent = String(list.length);
}

function render() {
  const list = filtered();
  tbody.innerHTML =
    list
      .map(
        (r, i) => `<tr data-code="${r.id}" class="${selected === r.id ? "sel" : ""}">
    <td class="num">${i + 1}</td><td class="num"><input type="checkbox" class="row-chk" ${selected === r.id ? "checked" : ""} /></td>
    <td><button type="button" class="code-link" style="border:0;background:0;color:#0d6efd;text-decoration:underline;cursor:pointer;font:inherit">${r.id}</button></td>
    <td>${CLASS_LABEL[r.objectClass] || r.objectClass}</td>
    <td>${Math.round(r.score * 100)}${r.score < 0.7 ? ' <span class="low">low</span>' : ""}</td>
    <td>${r.lat.toFixed(5)}, ${r.lng.toFixed(5)}</td>
    <td>${r.routeLabel}</td><td>${r.source}</td><td>${statusHtml(r.status)}</td>
    <td>${r.engine} / ${r.modelVersion}</td>
    <td>${r.nearbyRisk ? `<span class="near">risk · ${r.nearbyOf || ""}</span>` : "—"}</td>
    <td>${r.observedAt.replace("T", " ").slice(0, 16)}</td><td>${r.assetCode || "—"}</td>
    <td class="num" data-des-id="DES-GRID-C3"><details class="menu"><summary>⋮</summary><div class="menu-panel">
      <button type="button" data-menu="view">Xem</button><button type="button" data-menu="edit">Sửa</button>
      <button type="button" data-menu="copy">Sao chép</button><button type="button" data-menu="confirm">Confirm</button>
      <button type="button" data-menu="dismiss" class="danger">Dismiss</button>
      <button type="button" data-menu="history">Lịch sử</button>
      <button type="button" data-menu="delete" class="danger">Xóa</button>
    </div></details></td></tr>`
      )
      .join("") ||
    '<tr><td colspan="14" style="text-align:center;color:#94a3b8;padding:24px">Không có dữ liệu</td></tr>';
  document.getElementById("total").textContent = String(list.length);
  updateKpis(list);
  renderMap(list);
  syncSelBtns();
}

function syncSelBtns() {
  const on = Boolean(selected);
  ["btn-view", "btn-edit"].forEach((id) => {
    document.getElementById(id).disabled = !on;
  });
}

function openModal(id) {
  document.getElementById(id).classList.add("on");
}
function closeModal(id) {
  document.getElementById(id).classList.remove("on");
}

function setFormRo(ro) {
  [
    "fObjectClass",
    "fScore",
    "fEngineForm",
    "fLat",
    "fLng",
    "fRouteId",
    "fRouteLabel",
    "fSourceForm",
    "fDevice",
    "fHeading",
    "fAlpha",
    "fBbox",
    "fNote",
    "fObserved",
  ].forEach((id) => {
    const el = document.getElementById(id);
    if (!el) return;
    el.readOnly = !!ro && el.tagName !== "SELECT";
    if (el.tagName === "SELECT") el.style.pointerEvents = ro ? "none" : "";
    el.style.background = ro ? "#f8fafc" : "#fff";
  });
  document.getElementById("fCandStatus").style.pointerEvents = "none";
  document.getElementById("fCandStatus").style.background = "#f8fafc";
}

function fillForm(row) {
  document.getElementById("fId").value = row.id;
  document.getElementById("fObjectClass").value = row.objectClass;
  document.getElementById("fScore").value = row.score;
  document.getElementById("fCandStatus").value = row.status;
  document.getElementById("fEngineForm").value = row.engine;
  document.getElementById("fLat").value = row.lat;
  document.getElementById("fLng").value = row.lng;
  document.getElementById("fRouteId").value = row.routeId;
  document.getElementById("fRouteLabel").value = row.routeLabel;
  document.getElementById("fSourceForm").value = row.source;
  document.getElementById("fDevice").value = row.deviceId || "";
  document.getElementById("fHeading").value = row.headingDeg ?? "";
  document.getElementById("fAlpha").value = row.alphaDeg ?? "";
  document.getElementById("fBbox").value = row.bbox || "";
  document.getElementById("fModel").value = row.modelVersion || "";
  document.getElementById("fNearbyOf").value = row.nearbyOf || "";
  document.getElementById("fAssetCode").value = row.assetCode || "";
  document.getElementById("fNote").value = row.note || "";
  document.getElementById("fObserved").value = (row.observedAt || "").slice(0, 16);
  document.getElementById("nearWarn").hidden = !row.nearbyRisk;
  document.getElementById("lowWarn").hidden = !(row.score < 0.7 || row.engine === "P2");
}

function renderFooter() {
  const foot = document.getElementById("formFooter");
  if (formMode === "view") {
    foot.innerHTML =
      '<button type="button" class="tb" data-slide="close">Đóng</button><button type="button" class="tb" data-slide="edit"><i class="fas fa-pen"></i> Sửa</button><button type="button" class="tb" data-slide="copy"><i class="fas fa-copy"></i> Sao chép</button><button type="button" class="tb primary" data-slide="confirm">Confirm</button><button type="button" class="tb" data-slide="dismiss">Dismiss</button>';
  } else {
    foot.innerHTML =
      '<button type="button" class="tb" data-slide="cancel">Hủy</button><button type="button" class="tb primary" data-slide="save"><i class="fas fa-save"></i> Lưu</button>';
  }
}

function openForm(mode, row) {
  formMode = mode;
  formDirty = false;
  document.getElementById("dirtyBadge").hidden = true;
  document.getElementById("modeBadge").textContent = mode;
  document.getElementById("formTitle").textContent =
    (mode === "create" ? "Tạo" : mode === "copy" ? "Sao chép" : mode === "edit" ? "Sửa" : "Xem") + " · " + row.id;
  document.getElementById("formHint").textContent =
    mode === "view"
      ? "View = readOnly (không disabled xám) · footer actions only"
      : "Edit/Create/Copy · LeaveConfirmModal khi dirty · footer Hủy/Lưu only";
  fillForm(row);
  setFormRo(mode === "view");
  if (mode === "create" || mode === "copy") {
    document.getElementById("fId").value = `ITS-${ymd()}-NEW`;
    document.getElementById("fCandStatus").value = "Draft";
    document.getElementById("fAssetCode").value = "";
  }
  renderFooter();
  document.getElementById("slide-backdrop").classList.add("on");
  document.getElementById("slideout").classList.add("on");
}

function askLeave() {
  return new Promise((resolve) => {
    leaveResolve = resolve;
    openModal("modal-leave");
  });
}

async function closeForm(force) {
  if (!force && formDirty && formMode !== "view") {
    const ok = await askLeave();
    if (!ok) return;
  }
  document.getElementById("slide-backdrop").classList.remove("on");
  document.getElementById("slideout").classList.remove("on");
  formDirty = false;
}

function rowById(id) {
  return rows.find((r) => r.id === id);
}

function openConfirm(id) {
  const row = rowById(id);
  if (!row) return;
  pendingConfirmId = id;
  document.getElementById("confirmAssetType").value = CLASS_TO_TYPE[row.objectClass] || "GANTRY_SIGN";
  document.getElementById("confirmText").textContent = `Confirm ${row.id} (${CLASS_LABEL[row.objectClass]}) → Asset · source=its-traffic-detect`;
  openModal("modal-confirm");
}

function openDismiss(id) {
  pendingDismissId = id;
  document.getElementById("dismissText").textContent = `Dismiss ${id} (false positive).`;
  openModal("modal-dismiss");
}

function markDirty() {
  if (formMode === "view") return;
  formDirty = true;
  document.getElementById("dirtyBadge").hidden = false;
}

function simDetect(source) {
  const n = rows.length + 1;
  const cls = n % 2 === 0 ? "coc_tieu" : "bien_bao";
  const row = {
    id: `ITS-${ymd()}-${String(n).padStart(4, "0")}`,
    objectClass: cls,
    score: source === "cctv" ? 0.65 : 0.85,
    status: "Draft",
    lat: 19.87 + Math.random() * 0.02,
    lng: 105.8 + Math.random() * 0.02,
    routeId: "QL1",
    routeLabel: "QL.1 · Km316 · Chi cục QLĐB II.1",
    source,
    deviceId: source === "mobile" ? "and-sim" : source === "dashcam" ? "cam-dash-sim" : "cctv-sim",
    headingDeg: 40,
    alphaDeg: 0,
    bbox: "[100,80,180,160]",
    modelVersion: source === "cctv" ? "its-yolov8n-2026.08" : "its-yolov8n-edge-sim",
    engine: source === "cctv" ? "P2" : "P1",
    nearbyRisk: false,
    nearbyOf: null,
    note: `Sim ${source}`,
    assetCode: null,
    observedAt: new Date().toISOString(),
    x: 30 + Math.random() * 40,
    y: 30 + Math.random() * 40,
  };
  rows = [row, ...rows];
  filterChecked = new Set(filterVals());
  toast(`Đã giả lập ${source}`);
  render();
}

document.body.addEventListener("click", async (e) => {
  const t = e.target.closest(
    "[data-action],[data-close],[data-menu],[data-slide],[data-basemap],[data-pin],.code-link,#btn-view,#btn-edit,#btnConfirmOk,#btnDismissOk,#leaveStay,#leaveGo,#btn-filter-code,#filter-ok,#filter-cancel"
  );
  if (!t) return;

  if (t.matches("[data-close]")) {
    closeModal(t.getAttribute("data-close"));
    return;
  }
  if (t.id === "leaveStay") {
    closeModal("modal-leave");
    if (leaveResolve) leaveResolve(false);
    leaveResolve = null;
    return;
  }
  if (t.id === "leaveGo") {
    closeModal("modal-leave");
    if (leaveResolve) leaveResolve(true);
    leaveResolve = null;
    return;
  }
  if (t.matches("[data-basemap]")) {
    basemap = t.getAttribute("data-basemap");
    document.getElementById("mapMeta").textContent = `Basemap: ${basemap} · pin → View · dedupe 10 m`;
    toast(`Basemap: ${basemap}`);
    return;
  }
  if (t.matches("[data-pin]")) {
    const id = t.getAttribute("data-pin");
    selected = id;
    const row = rowById(id);
    if (row) openForm("view", row);
    render();
    return;
  }
  if (t.classList.contains("code-link")) {
    const tr = t.closest("tr");
    selected = tr.getAttribute("data-code");
    openForm("view", rowById(selected));
    render();
    return;
  }
  if (t.id === "btn-view" && selected) {
    openForm("view", rowById(selected));
    return;
  }
  if (t.id === "btn-edit" && selected) {
    openForm("edit", rowById(selected));
    return;
  }
  if (t.id === "btnConfirmOk" && pendingConfirmId) {
    const row = rowById(pendingConfirmId);
    if (row) {
      row.status = "Confirmed";
      row.assetCode = genAssetCode();
      row.nearbyRisk = false;
      toast(`Confirmed → ${row.assetCode}`);
    }
    pendingConfirmId = null;
    closeModal("modal-confirm");
    closeForm(true);
    render();
    return;
  }
  if (t.id === "btnDismissOk" && pendingDismissId) {
    const row = rowById(pendingDismissId);
    if (row) {
      row.status = "Dismissed";
      row.nearbyRisk = false;
      toast(`Dismissed ${row.id}`);
    }
    pendingDismissId = null;
    closeModal("modal-dismiss");
    closeForm(true);
    render();
    return;
  }
  if (t.id === "btn-filter-code") {
    document.getElementById("filter-pop").classList.toggle("on");
    const list = document.getElementById("filter-list");
    list.innerHTML = filterVals()
      .map(
        (id) =>
          `<label class="${filterChecked.has(id) ? "on" : ""}"><input type="checkbox" data-fid="${id}" ${
            filterChecked.has(id) ? "checked" : ""
          } /> ${id}</label>`
      )
      .join("");
    document.getElementById("filter-count").textContent = `Đã chọn ${filterChecked.size} mục`;
    return;
  }
  if (t.id === "filter-ok") {
    filterChecked = new Set(
      [...document.querySelectorAll("#filter-list input[data-fid]:checked")].map((el) => el.getAttribute("data-fid"))
    );
    document.getElementById("filter-pop").classList.remove("on");
    render();
    return;
  }
  if (t.id === "filter-cancel") {
    document.getElementById("filter-pop").classList.remove("on");
    return;
  }

  const menu = t.getAttribute("data-menu");
  if (menu) {
    const id = t.closest("tr").getAttribute("data-code");
    selected = id;
    if (menu === "view") openForm("view", rowById(id));
    if (menu === "edit") openForm("edit", rowById(id));
    if (menu === "copy") openForm("copy", { ...rowById(id) });
    if (menu === "confirm") openConfirm(id);
    if (menu === "dismiss") openDismiss(id);
    if (menu === "history") {
      document.getElementById("historyBody").textContent = `Timeline ${id}`;
      openModal("modal-history");
    }
    if (menu === "delete") {
      rows = rows.filter((r) => r.id !== id);
      filterChecked = new Set(filterVals());
      selected = null;
      toast(`Đã xóa ${id}`);
      render();
    }
    return;
  }

  const slide = t.getAttribute("data-slide");
  if (slide) {
    if (slide === "close" || slide === "cancel") {
      await closeForm(false);
      return;
    }
    if (slide === "edit" && selected) {
      openForm("edit", rowById(selected));
      return;
    }
    if (slide === "copy" && selected) {
      openForm("copy", { ...rowById(selected) });
      return;
    }
    if (slide === "confirm" && selected) {
      openConfirm(selected);
      return;
    }
    if (slide === "dismiss" && selected) {
      openDismiss(selected);
      return;
    }
    if (slide === "save") {
      const id = document.getElementById("fId").value;
      let row = rowById(id);
      if (!row) {
        row = {
          id,
          x: 40,
          y: 40,
          nearbyRisk: false,
          nearbyOf: null,
          assetCode: null,
          modelVersion: "its-yolov8n-edge-sim",
        };
        rows = [row, ...rows];
      }
      row.objectClass = document.getElementById("fObjectClass").value;
      row.score = Number(document.getElementById("fScore").value);
      row.status = "Draft";
      row.engine = document.getElementById("fEngineForm").value;
      row.lat = Number(document.getElementById("fLat").value);
      row.lng = Number(document.getElementById("fLng").value);
      row.routeId = document.getElementById("fRouteId").value;
      row.routeLabel = document.getElementById("fRouteLabel").value;
      row.source = document.getElementById("fSourceForm").value;
      row.deviceId = document.getElementById("fDevice").value;
      row.headingDeg = Number(document.getElementById("fHeading").value) || 0;
      row.alphaDeg = Number(document.getElementById("fAlpha").value) || 0;
      row.bbox = document.getElementById("fBbox").value;
      row.note = document.getElementById("fNote").value;
      row.observedAt = new Date(document.getElementById("fObserved").value || Date.now()).toISOString();
      filterChecked = new Set(filterVals());
      formDirty = false;
      toast("Đã lưu Draft");
      await closeForm(true);
      render();
      return;
    }
  }

  const action = t.getAttribute("data-action");
  if (!action) return;
  if (action === "refresh") {
    toast("Đã làm mới");
    render();
  }
  if (action === "history") openModal("modal-history");
  if (action === "config") openModal("modal-config");
  if (action === "export") toast("Export stub");
  if (action === "reset-seed") {
    rows = SEED();
    filterChecked = new Set(filterVals());
    selected = null;
    toast("Reset seed");
    render();
  }
  if (action === "clear-filter") {
    document.getElementById("fRoute").value = "QL.1";
    document.getElementById("fClass").value = "";
    document.getElementById("fSource").value = "";
    document.getElementById("fStatus").value = "";
    document.getElementById("fEngine").value = "";
    document.getElementById("fFrom").value = "";
    document.getElementById("fTo").value = "";
    document.getElementById("q").value = "";
    document.getElementById("fSearchFilter").value = "";
    filterChecked = new Set(filterVals());
    render();
  }
  if (action === "create") {
    openForm("create", {
      id: `ITS-${ymd()}-NEW`,
      objectClass: "bien_bao",
      score: 0.9,
      status: "Draft",
      lat: 19.87,
      lng: 105.8,
      routeId: "QL1",
      routeLabel: "QL.1 · Km316",
      source: "mobile",
      deviceId: "",
      headingDeg: 0,
      alphaDeg: 0,
      bbox: "",
      modelVersion: "its-yolov8n-edge-sim",
      engine: "P1",
      nearbyRisk: false,
      nearbyOf: null,
      note: "",
      assetCode: null,
      observedAt: new Date().toISOString(),
      x: 50,
      y: 50,
    });
  }
  if (action === "sim-mobile") simDetect("mobile");
  if (action === "sim-dashcam") simDetect("dashcam");
  if (action === "sim-cctv") simDetect("cctv");
  if (action === "nearby") {
    const n = rows.filter((r) => r.nearbyRisk).length;
    toast(`Nearby <${DEDUPE_RADIUS_M}m: ${n} candidate`);
  }
  if (action === "fit") toast("Fit bounds");
});

document.getElementById("slideout").addEventListener("input", markDirty);
document.getElementById("slideout").addEventListener("change", markDirty);
document.getElementById("q").addEventListener("input", render);
document.getElementById("fSearchFilter").addEventListener("input", () => {
  document.getElementById("q").value = document.getElementById("fSearchFilter").value;
  render();
});
["fRoute", "fClass", "fSource", "fStatus", "fEngine", "fFrom", "fTo"].forEach((id) => {
  document.getElementById(id).addEventListener("change", render);
});
document.getElementById("slide-backdrop").addEventListener("click", () => closeForm(false));
tbody.addEventListener("dblclick", (e) => {
  const tr = e.target.closest("tr[data-code]");
  if (!tr) return;
  selected = tr.getAttribute("data-code");
  openForm("view", rowById(selected));
  render();
});

render();
