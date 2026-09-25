(function () {
  const $ = (id) => document.getElementById(id);
  const lane = $("lanePath");
  const postPath = $("postPath");
  const livePath = $("livePath");
  const laneLen = lane.getTotalLength();
  const postLen = postPath.getTotalLength();
  const liveLen = livePath.getTotalLength();
  const CROSS = 0.625;

  const state = {
    playing: false,
    raf: 0,
    t: 0.02,
    clock: 0,
    last: 0,
    step: 0,
    count: 0,
    counted: false,
    sc: "idle",
    liveClock: 0,
    pumpLast: 0
  };

  function toast(msg) {
    const el = $("toast");
    el.textContent = msg;
    el.classList.add("show");
    clearTimeout(toast._t);
    toast._t = setTimeout(() => el.classList.remove("show"), 2200);
  }

  function setStep(n) {
    state.step = n;
    document.querySelectorAll(".wf-steps li").forEach((li) => {
      li.classList.toggle("on", Number(li.getAttribute("data-s")) === n);
    });
  }

  function placeOn(path, el, dist) {
    const p = path.getPointAtLength(dist);
    el.setAttribute("cx", p.x);
    el.setAttribute("cy", p.y);
  }

  function drawCar(t) {
    const s = Math.max(0, Math.min(1, t)) * laneLen;
    const p = lane.getPointAtLength(s);
    const p2 = lane.getPointAtLength(Math.min(laneLen, s + 12));
    const ang = Math.atan2(p2.y - p.y, p2.x - p.x) * 180 / Math.PI;
    $("car").setAttribute("transform", "translate(" + p.x + " " + p.y + ") rotate(" + ang + ")");
    const inFov = t > 0.5 && t < 0.75;
    $("fov").setAttribute("opacity", inFov ? "0.34" : "0.16");
  }

  function paintCounts() {
    $("kpiCount").textContent = String(state.count);
    $("opsCount").textContent = state.count + " xe";
  }

  function setType(label) {
    $("kpiType").textContent = label;
  }

  function setPost(label) {
    $("kpiPost").textContent = label;
  }

  function showLiveAlways() {
    $("kpiLive").textContent = "Luôn kết nối(HLS)";
    $("liveWin").classList.add("on");
    $("liveWin").classList.remove("off");
    $("liveBadge").textContent = "Camera Live";
    $("liveLabel").textContent = "Luôn kết nối(HLS) · hình không chờ xe";
    $("livePkt").setAttribute("opacity", "1");
  }

  function clearLog() {
    $("logBody").innerHTML = '<tr class="empty"><td colspan="3">Chưa có — chạy workflow hoặc chọn kịch bản.</td></tr>';
  }

  function addLog(channel, result) {
    const body = $("logBody");
    const empty = body.querySelector(".empty");
    if (empty) empty.remove();
    const tr = document.createElement("tr");
    const sec = state.clock.toFixed(1);
    tr.innerHTML = "<td>" + sec + "</td><td>" + channel + "</td><td>" + result + "</td>";
    body.prepend(tr);
  }

  function markCounted() {
    if (state.counted) return;
    state.counted = true;
    state.count += 1;
    paintCounts();
    setType("Xe con");
    setPost("Event lúc vào vạch");
    $("opsMeta").textContent = "Xe con · biển 51A-128.36 · Camera Live luôn giữ kết nối realtime";
    $("postPkt").setAttribute("opacity", "1");
    addLog("Event", "POST lúc vào vạch · Xe con · +1");
  }

  function applyFrame(t, animatePkts) {
    drawCar(t);
    if (t >= CROSS && (state.playing || state.sc === "count" || state.sc === "both")) markCounted();
    if (animatePkts && state.counted) {
      const u = Math.min(1, (t - CROSS) / 0.22);
      placeOn(postPath, $("postPkt"), u * postLen);
    }
  }

  function resetRun() {
    cancelAnimationFrame(state.raf);
    state.playing = false;
    state.t = 0.02;
    state.clock = 0;
    state.last = 0;
    state.count = 0;
    state.counted = false;
    setStep(1);
    setType("—");
    setPost("Chưa gửi event");
    showLiveAlways();
    $("opsMeta").textContent = "Camera Live luôn kết nối(HLS) · chưa có xe vào vạch";
    $("postPkt").setAttribute("opacity", "0");
    $("wfClock").textContent = "t = 0 s";
    paintCounts();
    clearLog();
    applyFrame(state.t, false);
  }

  function highlightStep(t) {
    let n = 1;
    if (t > 0.12) n = 2;
    if (t > CROSS - 0.04) n = 3;
    if (t >= CROSS) n = 4;
    if (state.counted && t > CROSS + 0.08) n = 5;
    if (state.counted && t > CROSS + 0.2) n = 6;
    setStep(n);
    if (!state.counted) setPost("Chưa gửi event");
  }

  function tick(ts) {
    if (!state.playing) return;
    if (!state.last) state.last = ts;
    const dt = Math.min(40, ts - state.last) / 1000;
    state.last = ts;
    state.clock += dt;
    state.t = Math.min(1, state.t + dt * 0.11);
    $("wfClock").textContent = "t = " + state.clock.toFixed(1) + " s";
    highlightStep(state.t);
    applyFrame(state.t, true);
    if (state.t >= 0.995) {
      state.playing = false;
      setStep(6);
      showLiveAlways();
      toast("Đã đếm xe · Camera Live luôn giữ kết nối realtime");
      return;
    }
    state.raf = requestAnimationFrame(tick);
  }

  function play() {
    resetRun();
    state.playing = true;
    state.sc = "both";
    setStep(1);
    setPost("Chưa gửi event");
    state.raf = requestAnimationFrame(tick);
  }

  function jump(sc) {
    cancelAnimationFrame(state.raf);
    state.playing = false;
    state.sc = sc;
    document.querySelectorAll("#tbField button").forEach((b) => {
      b.classList.toggle("on", b.getAttribute("data-sc") === sc);
    });
    resetRun();
    state.sc = sc;
    if (sc === "idle") {
      state.t = 0.08;
      applyFrame(state.t, false);
      return;
    }
    if (sc === "count" || sc === "both") {
      state.t = 0.7;
      state.clock = 4.2;
      markCounted();
      placeOn(postPath, $("postPkt"), postLen);
      setStep(6);
    }
    applyFrame(state.t, false);
    showLiveAlways();
  }

  function setView(v) {
    document.querySelectorAll(".view-nav button").forEach((b) => {
      b.classList.toggle("on", b.getAttribute("data-view") === v);
    });
    $("wfPanel").hidden = v !== "workflow";
    $("tbField").hidden = v !== "field";
    $("tbWorkflow").hidden = v !== "workflow";
    if (v === "workflow") resetRun();
  }

  document.querySelectorAll(".view-nav button").forEach((b) => {
    b.addEventListener("click", () => setView(b.getAttribute("data-view")));
  });
  document.querySelectorAll("#tbField button").forEach((b) => {
    b.addEventListener("click", () => jump(b.getAttribute("data-sc")));
  });
  $("wfPlay").addEventListener("click", play);
  $("wfStop").addEventListener("click", () => {
    resetRun();
    toast("Đã đặt lại");
  });

  function pumpLive(ts) {
    if (!state.pumpLast) state.pumpLast = ts;
    const dt = Math.min(40, ts - state.pumpLast) / 1000;
    state.pumpLast = ts;
    state.liveClock += dt;
    const u = (state.liveClock % 1.4) / 1.4;
    placeOn(livePath, $("livePkt"), u * liveLen);
    $("livePkt").setAttribute("opacity", "1");
    $("scan").style.top = (12 + (state.liveClock % 2) * 38) + "%";
    requestAnimationFrame(pumpLive);
  }

  showLiveAlways();
  paintCounts();
  setStep(1);
  applyFrame(state.t, false);
  requestAnimationFrame(pumpLive);
})();
