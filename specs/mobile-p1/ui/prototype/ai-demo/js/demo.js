(function () {
  const $ = (id) => document.getElementById(id);
  const SIGNS = [
    { id: "signOk", t: 0.22, km: "1554+800", kind: "ok", label: "Biển đủ · P.123" },
    { id: "signMiss", t: 0.48, km: "1556+040", kind: "missing", label: "Mất biển · P.123" },
    { id: "signBroke", t: 0.74, km: "1558+200", kind: "broken", label: "Biển gãy · P.127" },
  ];
  const HINT = {
    idle: "Đường thẳng — biển đủ đứng lề phải, cạnh vạch trắng. Xe máy đang chạy tới P.123.",
    missing: "Cột mất biển P.123 đứng lề, cạnh vạch trắng. Xe máy chạy tới · camera chốt tọa độ.",
    broken: "Biển gãy P.127 đứng lề phải, cạnh vạch trắng. Xe máy chạy tới · khung vàng = vị trí detect.",
    both: "Mất P.123 rồi gãy P.127 — cả hai đứng lề, cạnh vạch trắng. Biển đủ ẩn.",
  };
  const KM0 = 1551200;
  const KM1 = 1561134;

  const state = {
    view: "field",
    sc: "idle",
    playing: false,
    approaching: false,
    t: 0,
    step: 0,
    clock: 0,
    hits: {},
    inc: 0,
    pending: null,
    raf: 0,
  };

  function pathPoint(frac) {
    const path = $("laneCenter");
    const len = path.getTotalLength();
    const s = Math.max(0.02, Math.min(0.98, frac)) * len;
    const p = path.getPointAtLength(s);
    const p2 = path.getPointAtLength(Math.min(len, s + 10));
    let dx = p2.x - p.x;
    let dy = p2.y - p.y;
    const mag = Math.hypot(dx, dy) || 1;
    return { x: p.x, y: p.y, dx: dx / mag, dy: dy / mag };
  }

  function placeSigns() {
    const roadHalf = 36;
    const edgeOut = 4;
    SIGNS.forEach((s) => {
      const p = pathPoint(s.t);
      const rx = -p.dy;
      const ry = p.dx;
      const g = $(s.id);
      g.setAttribute(
        "transform",
        "translate(" + (p.x + rx * (roadHalf + edgeOut)) + "," + (p.y + ry * (roadHalf + edgeOut)) + ")"
      );
    });
  }

  function applySignVisibility(sc) {
    $("signOk").classList.toggle("hidden", sc !== "idle");
    $("signMiss").classList.toggle("hidden", sc !== "missing" && sc !== "both");
    $("signBroke").classList.toggle("hidden", sc !== "broken" && sc !== "both");
    $("sceneHint").textContent = HINT[sc] || HINT.idle;
  }

  function kmAt(t) {
    const v = Math.round(KM0 + (KM1 - KM0) * t);
    const km = Math.floor(v / 1000);
    const m = String(v % 1000).padStart(3, "0");
    return "Km " + km + "+" + m;
  }

  function assetCoord(km) {
    return "QL.1 · Km " + km;
  }

  function drawBike(t) {
    const p = pathPoint(t);
    const deg = (Math.atan2(p.dy, p.dx) * 180) / Math.PI;
    $("bike").setAttribute(
      "transform",
      "translate(" + p.x + "," + p.y + ") rotate(" + deg + ") scale(1.15)"
    );
    const look = 0.11;
    const far = pathPoint(Math.min(0.98, t + look));
    const w = 26;
    const a = { x: p.x + p.dy * 6, y: p.y - p.dx * 6 };
    const b = { x: far.x + far.dy * w, y: far.y - far.dx * w };
    const c = { x: far.x - far.dy * w, y: far.y + far.dx * w };
    $("fov").setAttribute("points", [a, b, c].map((q) => q.x.toFixed(1) + "," + q.y.toFixed(1)).join(" "));
    $("fovL").setAttribute("d", "M" + a.x + " " + a.y + " L" + b.x + " " + b.y);
    $("fovR").setAttribute("d", "M" + a.x + " " + a.y + " L" + c.x + " " + c.y);
  }

  function nearestVisible(t) {
    const list = SIGNS.filter((s) => {
      if (state.sc === "idle") return s.kind === "ok";
      return allowKind(s.kind);
    });
    let best = null;
    list.forEach((s) => {
      const d = s.t - t;
      if (d > -0.05 && d < 0.18) {
        if (!best || Math.abs(d) < Math.abs(best.d)) best = { s: s, d: d };
      }
    });
    return best;
  }

  function renderFinderAsset(kind) {
    const el = $("finderAsset");
    if (kind === "missing") {
      el.innerHTML = '<div class="f-pole"></div><div class="f-empty"></div>';
      return;
    }
    if (kind === "broken") {
      el.innerHTML = '<div class="f-sign tilt">!</div>';
      return;
    }
    el.innerHTML = '<div class="f-sign">!</div>';
  }

  function updateFinder(t) {
    const near = nearestVisible(t);
    const finder = $("finder");
    if (!near) {
      finder.setAttribute("data-kind", "idle");
      finder.setAttribute("data-near", "0");
      renderFinderAsset("ok");
      $("finderBox").hidden = true;
      $("finderAi").hidden = true;
      $("phSrc").hidden = true;
      $("phCoordRow").hidden = true;
      $("phStamp").textContent = "QL.1 · " + kmAt(t);
      return;
    }
    const hit = near.s;
    const abs = Math.abs(near.d);
    let nearLv = "1";
    if (abs < 0.1) nearLv = "2";
    if (abs < 0.045) nearLv = "3";
    finder.setAttribute("data-kind", hit.kind);
    finder.setAttribute("data-near", nearLv);
    renderFinderAsset(hit.kind);
    const inDetect = abs < 0.055 && hit.kind !== "ok";
    $("finderBox").hidden = hit.kind === "ok" || abs > 0.12;
    $("phStamp").textContent = assetCoord(hit.km);
    $("finderAi").hidden = !inDetect;
    $("phSrc").hidden = !inDetect;
    if (inDetect) {
      $("phCoordRow").hidden = false;
      $("phCoord").textContent = assetCoord(hit.km);
    } else if (hit.kind === "ok") {
      $("phCoordRow").hidden = true;
    }
  }

  function setStep(n) {
    state.step = n;
    document.querySelectorAll("#wfSteps li").forEach((li) => {
      const s = Number(li.getAttribute("data-s"));
      li.classList.toggle("on", s === n);
      li.classList.toggle("done", s < n);
    });
  }

  function toast(msg) {
    const el = $("toast");
    el.textContent = msg;
    el.classList.add("show");
    clearTimeout(toast.tid);
    toast.tid = setTimeout(() => el.classList.remove("show"), 2000);
  }

  function logRow(hit, status, code) {
    const body = $("logBody");
    const empty = body.querySelector(".empty");
    if (empty) empty.remove();
    const tr = document.createElement("tr");
    tr.className = "hit";
    tr.setAttribute("data-code", code || "");
    tr.innerHTML =
      "<td>" + new Date().toLocaleTimeString("vi-VN") + "</td>" +
      "<td>" + hit.km + "</td>" +
      "<td>" + hit.label + "</td>" +
      "<td>Nhận diện AI</td>" +
      "<td>Ảnh · tọa độ · video</td>" +
      "<td class=\"st\">" + status + "</td>" +
      "<td class=\"cd\">" + (code || "—") + "</td>";
    body.prepend(tr);
    return tr;
  }

  function patchLog(code, status) {
    const tr = document.querySelector('#logBody tr[data-code="' + code + '"]');
    if (tr) tr.querySelector(".st").textContent = status;
  }

  function autoCreate(hit) {
    state.inc += 1;
    const code = "SC-24" + String(10 + state.inc);
    const tr = logRow(hit, "Chờ xác nhận lại", code);
    state.pending = { hit: hit, code: code, tr: tr };
    $("kpiInc").textContent = state.inc + " ghi";
    $("kpiHit").textContent = hit.kind === "missing" ? "Mất biển" : "Biển gãy";
    $("phKind").textContent = hit.kind === "missing" ? "Mất" : "Hỏng";
    $("phKind").className = "chip warn";
    $("phType").textContent = "Biển báo";
    $("phSrc").hidden = false;
    $("phAsset").textContent = "TRAFFIC_SIGN · " + hit.km;
    $("phDet").textContent = "Đã tạo tự động · " + code;
    $("phKm").textContent = "Km " + hit.km;
    $("phStamp").textContent = assetCoord(hit.km);
    $("phCoordRow").hidden = false;
    $("phCoord").textContent = assetCoord(hit.km);
    $("phAttachRow").hidden = false;
    $("phCodeRow").hidden = false;
    $("phCode").textContent = code + " · chờ xác nhận lại";
    $("finderBox").hidden = false;
    $("finderAi").hidden = false;
    $("finderRec").hidden = false;
    $("phoneActions").hidden = false;
    $(hit.id).classList.add("on-hit");
    setStep(4);
    toast("Hệ thống đã tạo " + code + " · ảnh + tọa độ + video");
  }

  function clearDetectUi() {
    state.pending = null;
    $("phoneActions").hidden = true;
    $("phSrc").hidden = true;
    $("phCoordRow").hidden = true;
    $("phAttachRow").hidden = true;
    $("phCodeRow").hidden = true;
    $("finderAi").hidden = true;
    $("finderRec").hidden = true;
    $("finderBox").hidden = true;
    $("phKind").textContent = "Đang tuần";
    $("phKind").className = "chip";
    $("phAsset").textContent = "Chưa chọn";
    $("phDet").textContent = "Xe đang chạy tới";
    $("kpiHit").textContent = "Chưa có";
  }

  function allowKind(kind) {
    if (kind === "ok") return false;
    if (state.sc === "idle") return false;
    if (state.sc === "missing") return kind === "missing";
    if (state.sc === "broken") return kind === "broken";
    return kind === "missing" || kind === "broken";
  }

  function scanHits(t) {
    SIGNS.forEach((s) => {
      if (state.hits[s.id]) return;
      if (t >= s.t - 0.02 && t <= s.t + 0.06 && allowKind(s.kind)) {
        state.hits[s.id] = true;
        autoCreate(s);
      }
    });
  }

  function tick(ts) {
    if (!state.playing) return;
    if (!state.last) state.last = ts;
    const dt = Math.min(40, ts - state.last) / 1000;
    state.last = ts;
    state.t = Math.min(1, state.t + dt * 0.12);
    state.clock += dt;
    $("wfClock").textContent = "t = " + state.clock.toFixed(1) + " s";
    $("kpiKm").textContent = kmAt(state.t);
    $("phKm").textContent = kmAt(state.t);
    if (state.t > 0.04) setStep(Math.max(state.step, 1));
    if (state.t > 0.1) setStep(Math.max(state.step, 2));
    drawBike(state.t);
    updateFinder(state.t);
    scanHits(state.t);
    if (state.t >= 0.99) {
      state.playing = false;
      if (state.inc > 0) setStep(6);
      toast("Hết đoạn tuần · " + state.inc + " sự cố");
      return;
    }
    state.raf = requestAnimationFrame(tick);
  }

  function resetRun(keepLog) {
    cancelAnimationFrame(state.raf);
    state.playing = false;
    state.approaching = false;
    state.t = 0.04;
    state.clock = 0;
    state.last = 0;
    state.hits = {};
    state.step = 0;
    document.querySelectorAll(".sign").forEach((g) => g.classList.remove("on-hit"));
    clearDetectUi();
    $("wfClock").textContent = "t = 0 s";
    setStep(0);
    applySignVisibility(state.sc);
    drawBike(state.t);
    updateFinder(state.t);
    $("kpiKm").textContent = kmAt(state.t);
    if (!keepLog) {
      $("logBody").innerHTML = '<tr class="empty"><td colspan="7">Chưa có — chọn kịch bản hoặc chạy workflow.</td></tr>';
      state.inc = 0;
      $("kpiInc").textContent = "0 ghi";
    }
  }

  function play(sc) {
    state.sc = sc || "both";
    applySignVisibility(state.sc);
    resetRun(true);
    state.playing = true;
    setStep(1);
    $("kpiCam").textContent = "Đang quay";
    state.raf = requestAnimationFrame(tick);
  }

  function approachTo(targetT, thenHit) {
    cancelAnimationFrame(state.raf);
    state.playing = false;
    state.approaching = true;
    const start = Math.max(0.04, targetT - 0.14);
    state.t = start;
    const t0 = performance.now();
    const dur = 1200;
    function step(now) {
      if (!state.approaching) return;
      const u = Math.min(1, (now - t0) / dur);
      state.t = start + (targetT - start) * u;
      drawBike(state.t);
      updateFinder(state.t);
      $("kpiKm").textContent = kmAt(state.t);
      $("phKm").textContent = kmAt(state.t);
      $("phDet").textContent = "Xe đang chạy tới";
      if (u >= 1) {
        state.approaching = false;
        if (thenHit && allowKind(thenHit.kind)) {
          state.hits[thenHit.id] = true;
          autoCreate(thenHit);
        }
        return;
      }
      state.raf = requestAnimationFrame(step);
    }
    state.raf = requestAnimationFrame(step);
  }

  function applyField(sc) {
    state.sc = sc;
    document.querySelectorAll("#tbField button").forEach((b) => b.classList.toggle("on", b.getAttribute("data-sc") === sc));
    resetRun(true);
    applySignVisibility(sc);
    if (sc === "idle") {
      const ok = SIGNS.find((s) => s.kind === "ok");
      approachTo(ok.t, null);
      $("phKind").className = "chip ok";
      $("phKind").textContent = "Đủ";
      $("phDet").textContent = "Xe đang chạy tới · biển đủ";
      return;
    }
    const hit = SIGNS.find((s) => (sc === "missing" || sc === "both") && s.kind === "missing")
      || SIGNS.find((s) => s.kind === "broken");
    approachTo(hit.t, hit);
  }

  function setView(v) {
    state.view = v;
    document.querySelectorAll(".view-nav button").forEach((b) => b.classList.toggle("on", b.getAttribute("data-view") === v));
    $("wfPanel").hidden = v !== "workflow";
    $("tbField").hidden = v !== "field";
    $("tbWorkflow").hidden = v !== "workflow";
    if (v === "workflow") {
      state.sc = "both";
      resetRun(true);
    }
  }

  document.querySelectorAll(".view-nav button").forEach((b) => {
    b.addEventListener("click", () => setView(b.getAttribute("data-view")));
  });
  document.querySelectorAll("#tbField button").forEach((b) => {
    b.addEventListener("click", () => applyField(b.getAttribute("data-sc")));
  });
  $("wfPlay").addEventListener("click", () => play("both"));
  $("wfMiss").addEventListener("click", () => play("missing"));
  $("wfBroke").addEventListener("click", () => play("broken"));
  $("wfStop").addEventListener("click", () => {
    if (state.playing || state.approaching) {
      $("modal-leave").classList.add("open");
      return;
    }
    resetRun(false);
  });
  $("leaveYes").addEventListener("click", () => {
    $("modal-leave").classList.remove("open");
    resetRun(false);
    toast("Đã dừng — không lưu chạy");
  });
  $("leaveNo").addEventListener("click", () => $("modal-leave").classList.remove("open"));
  $("btnConfirm").addEventListener("click", () => {
    if (!state.pending) {
      toast("Chưa có sự cố để xác nhận lại");
      return;
    }
    const code = state.pending.code;
    patchLog(code, "Đã xác nhận lại");
    setStep(5);
    toast("Đã xác nhận lại " + code);
    $("phDet").textContent = "Đã xác nhận lại · " + code;
    $("phCode").textContent = code + " · đã xác nhận lại";
    state.pending = null;
    $("phoneActions").hidden = true;
    if (state.playing) setTimeout(() => setStep(6), 400);
  });
  $("btnSkip").addEventListener("click", () => {
    if (!state.pending) {
      toast("Không có mục để đánh dấu");
      return;
    }
    const code = state.pending.code;
    patchLog(code, "Không đúng");
    toast(code + " · giữ bản ghi · đánh dấu không đúng");
    $("phDet").textContent = "Không đúng · " + code;
    $("phCode").textContent = code + " · không đúng";
    state.pending = null;
    $("phoneActions").hidden = true;
  });

  if (location.hash === "#workflow") setView("workflow");
  placeSigns();
  applyField("idle");
})();
