/**
 * Review document — left: RMMS.Permission.Job catalog · right: ngành đường bộ VN
 * SSOT codes: Linm.RMMS.Permission.Job/catalog/permissions.csv
 */
(function (global) {
  const DOCS = {
    login: {
      title: 'Đăng nhập hiện trường',
      kicker: 'Auth · HĐ lifecycle',
      perms: [
        { code: 'web-bff/api/v1/auth', name: 'Login / refresh / logout', on: true },
        { code: 'contract.contracts.accounts', name: 'TK theo HĐ (job Active)', on: false },
      ],
      intro: [
        'Cán bộ Hạt / nhà thầu đăng nhập cùng BFF Web — không fork token.',
        'Tài khoản gắn hợp đồng bảo trì: hết hạn → Inactive (job), không vào hiện trường.',
        'Logo RMMS trên login. Face ID / Touch ID = bỏ qua xác thực khi phiên đã lưu trên máy (fallback mật khẩu).',
      ],
      std: 'Cục Đường bộ VN · phân quyền theo đơn vị (Hạt QLĐB / Khu) và phạm vi tuyến–km trên HĐ.',
      bullets: ['Logo RMMS (`logo/rmms.png`)', 'Mã đơn vị = org-unit', 'Bỏ qua xác thực · Face ID / Touch ID (phiên đã lưu)'],
    },
    'patrol-home': {
      title: 'Tuần đường / tuần kiểm',
      kicker: 'Hiện trường · ca',
      perms: [
        { code: 'patrol.sessions.read', name: 'Xem tuần đường', on: true },
        { code: 'patrol.sessions.create', name: 'Bắt đầu ca', on: true },
        { code: 'patrol.sessions.update', name: 'Kết thúc ca / ghi chú', on: true },
        { code: 'patrol.sessions.delete', name: 'Xóa ca', on: false },
      ],
      intro: [
        'Tuần đường: đi tuyến theo lịch, ghi nhận hiện trạng KCHT. Tuần kiểm: kiểm tra chuyên sâu (cầu, cống, taluy).',
        'Một ca = một phiên trên một tuyến–đoạn km. KPI: số điểm check-in và coverage % hành lang.',
      ],
      std: 'Nghiệp vụ Hạt QLĐB: nhật ký tuần đường / tuần kiểm · lý trình Km · ≥3 điểm/ngày/tuyến.',
      bullets: ['Mã PAT-YYYYMMDD-NNNN', 'QL.1 / ĐT.* + Km từ–đến', 'Bỏ sót = thiếu điểm KH'],
    },
    'patrol-map': {
      title: 'Bản đồ ca + check-in',
      kicker: 'GPS · chống nhầm điểm',
      perms: [
        { code: 'patrol.sessions.read', name: 'Xem ca / điểm KH', on: true },
        { code: 'patrol.sessions.update', name: 'Ghi check-in (Create immutable)', on: true },
        { code: 'gis.map.read', name: 'Lớp nền OMS', on: true },
      ],
      intro: [
        'Mở map → auto-pin GPS (xanh). Pin cam = điểm kế hoạch (lý trình).',
        'Chỉ Lưu khi đúng điểm: cách điểm KH ≤ 50 m và sai số GPS ≤ 30 m. Gần điểm khác → chặn (tránh check-in nhầm Km).',
      ],
      std: 'Lý trình đường bộ VN (Km+m). Check-in gắn đúng mốc trên tuyến được giao — không gõ tay tọa độ.',
      bullets: ['Phải chọn điểm kế hoạch', 'Chỉ lưu khi đúng điểm', 'Check-in đã lưu không đổi vị trí'],
    },
    'patrol-history': {
      title: 'Lịch sử ca',
      kicker: 'List · View',
      perms: [
        { code: 'patrol.sessions.read', name: 'Xem danh sách ca', on: true },
        { code: 'patrol.sessions.create', name: 'Tạo ca mới', on: false },
      ],
      intro: ['Danh sách phiên theo ngày / tuyến / trạng thái. Chọn dòng → chi tiết + timeline check-in.'],
      std: 'Lưu trữ nhật ký tuần đường — đối chiếu báo cáo tuần đường / tuần kiểm trên Web.',
      bullets: ['Đang tuần · Hoàn thành · Bỏ sót · Offline'],
    },
    'patrol-detail': {
      title: 'Chi tiết ca',
      kicker: 'View + timeline CI',
      perms: [
        { code: 'patrol.sessions.read', name: 'Xem chi tiết', on: true },
        { code: 'patrol.sessions.update', name: 'Kết thúc ca', on: true },
      ],
      intro: ['Xem mã phiên, tuyến–km, coverage, timeline từng điểm. Check-in đã lưu là bất biến.'],
      std: 'Hồ sơ ca = căn cứ nghiệm thu tuần tra và phát hiện bỏ sót điểm.',
      bullets: ['Xem ca · kết thúc ca · timeline check-in'],
    },
    'patrol-offline': {
      title: 'Hàng đợi offline',
      kicker: 'Sync DTO',
      perms: [
        { code: 'patrol.sessions.update', name: 'Sync check-in / track', on: true },
        { code: 'incident.incidents.create', name: 'Sync nháp sự cố', on: true },
      ],
      intro: ['Mạng yếu: ghi cục bộ cùng DTO Web, sync khi online. Conflict → last-write + review (GAP-F-PAT-01).'],
      std: 'Hiện trường QLĐB thường mất sóng — không được mất nhật ký / sự cố.',
      bullets: ['Cùng API khi online', 'Banner + CTA Sync'],
    },
    attendance: {
      title: 'Chấm công GPS',
      kicker: 'Đúng tuyến',
      perms: [
        { code: 'patrol.attendance-logs.read', name: 'Xem chấm công', on: true },
        { code: 'patrol.attendance-logs.create', name: 'Chấm vào / ra', on: true },
        { code: 'patrol.attendance-logs.update', name: 'Sửa log', on: false },
        { code: 'patrol.attendance-logs.delete', name: 'Xóa log', on: false },
      ],
      intro: [
        'Chấm vào/ra theo GPS trên tuyến được giao. Vị trí lấy tự động từ máy.',
        'Ngoài hành lang 80 m → inZone=false, chặn chấm (tránh chấm hộ / chấm sai hạt).',
      ],
      std: 'Chấm công hiện trường Hạt QLĐB gắn ca tuần đường — không Face/NFC P1.',
      bullets: ['Lat/Lng/KmPoint bắt buộc', '7 ngày gần đây = List+View'],
    },
    'incident-list': {
      title: 'Sự cố (Vấn đề)',
      kicker: 'CRUD hiện trường',
      perms: [
        { code: 'incident.incidents.read', name: 'Xem sự cố', on: true },
        { code: 'incident.incidents.create', name: 'Tạo sự cố', on: true },
        { code: 'incident.incidents.update', name: 'Sửa nháp offline', on: true },
        { code: 'incident.incidents.delete', name: 'Xóa', on: false },
      ],
      intro: [
        'Ghi hư hỏng KCHT (mặt đường, cống, biển, lan can…) kèm ảnh + GPS auto-pin + đoạn–Km.',
        'Nguồn: tuần tra, AI, camera. Giao việc bảo trì trên Web; mobile P1 tạo / xem / đóng stub.',
      ],
      std: 'Sổ sự cố / hư hỏng đường bộ — gắn lý trình để lập lệnh sửa chữa.',
      bullets: ['FAB/+/sheet = Create', 'Dòng = View chi tiết', 'Close ≠ hard-delete'],
    },
    'incident-detail': {
      title: 'Chi tiết sự cố',
      kicker: 'View',
      perms: [
        { code: 'incident.incidents.read', name: 'Xem', on: true },
        { code: 'incident.incidents.update', name: 'Đóng / ghi chú', on: true },
      ],
      intro: ['Xem loại, mức, vị trí pin, ảnh, nguồn AI. GPS đã lưu không sửa trên mobile.'],
      std: 'Hồ sơ sự cố là đầu vào lệnh bảo trì và báo cáo hư hỏng.',
      bullets: ['View + Close', 'Nháp offline mới được sửa mô tả'],
    },
    'gis-map': {
      title: 'Bản đồ GIS (đọc)',
      kicker: 'Overlay TS / SC',
      perms: [
        { code: 'gis.map.read', name: 'Xem bản đồ GIS', on: true },
        { code: 'asset.road-assets.read', name: 'Pin tài sản', on: true },
        { code: 'incident.incidents.read', name: 'Pin sự cố', on: true },
      ],
      intro: ['Lớp nền OSM/Esri/Sat. Overlay tài sản, sự cố, hành lang tuyến. Tap pin → View — không vẽ/sửa trên mobile P1.'],
      std: 'Giám sát không gian KCHT theo tuyến–km — Digital Twin 3D ngoài P1.',
      bullets: ['Chỉ xem lớp nền và pin', 'Fit overview ≤ 13'],
    },
    'asset-list': {
      title: 'Tài sản đường bộ',
      kicker: 'Tra cứu + pin',
      perms: [
        { code: 'asset.road-assets.read', name: 'Xem tài sản', on: true },
        { code: 'asset.road-assets.create', name: 'Tạo TS (Web)', on: false },
        { code: 'asset.road-assets.update', name: 'Sửa TS (Web)', on: false },
      ],
      intro: ['Tra cứu cầu, cống, biển, hộ lan, cột Km… theo tuyến. Mobile P1: List + View + pin map. CRUD ghi nhận trên Web / AI Confirm.'],
      std: 'Danh mục KCHT đường bộ (CSDL tài sản) — mã TS gắn lý trình.',
      bullets: ['Search mã/tên/loại', 'Dòng → chi tiết + map'],
    },
    'asset-detail': {
      title: 'Chi tiết tài sản',
      kicker: 'View',
      perms: [{ code: 'asset.road-assets.read', name: 'Xem chi tiết', on: true }],
      intro: ['Mã, loại, tuyến–Km, tọa độ. Không sửa trên mobile P1.'],
      std: 'Hồ sơ tài sản KCHT — đối chiếu sổ sách / biểu mặt đường trên Web.',
      bullets: ['View only'],
    },
    'ai-hub': {
      title: 'AI hiện trường',
      kicker: 'Online + HITL',
      perms: [
        { code: 'ai-vision.asset-candidates.read', name: 'Xem ứng viên', on: true },
        { code: 'ai-vision.asset-candidates.confirm', name: 'Xác nhận', on: true },
        { code: 'ai-vision.asset-candidates.dismiss', name: 'Bỏ qua', on: true },
      ],
      intro: ['Ba lối: Vision mặt đường → class/severity; phát hiện TS mới (HITL); ước lượng khối lượng. Cloud online — không YOLO máy.'],
      std: 'Hỗ trợ kiểm định mặt đường / phát hiện KCHT — người xác nhận trước khi vào sổ.',
      bullets: ['Chạy AI trên cloud', 'Người xác nhận trước khi vào sổ'],
    },
    'vis-capture': {
      title: 'AI Vision — chụp',
      kicker: 'Ảnh + GPS',
      perms: [
        { code: 'ai-vision.asset-candidates.create', name: 'Gửi ảnh detect', on: true },
        { code: 'incident.incidents.create', name: 'Gắn sự cố', on: true },
      ],
      intro: [
        'Chụp bằng camera máy (AV / CameraX) cùng lúc lấy GPS. Máy lọc Kalman rồi gắn lý trình — user thấy «Vị trí đã chốt».',
        'Thiếu GPS hoặc sai số > 30 m thì không gửi detect.',
      ],
      std: '16-ITS §5.1 Kalman + snap tuyến · ai-vision chụp mặt đường. Camera ITS (TCM403) là màn xem JPEG — không thay camera điện thoại.',
      bullets: ['Ảnh + vị trí bắt buộc', 'Pin trên map = điểm đã chốt'],
    },
    'photo-capture': {
      title: 'Chụp hình kèm GPS',
      kicker: 'Shutter · gim vị trí',
      perms: [
        { code: 'patrol.sessions.update', name: 'Ảnh check-in', on: true },
        { code: 'incident.incidents.create', name: 'Ảnh sự cố', on: true },
        { code: 'ai-vision.asset-candidates.create', name: 'Ảnh detect', on: true },
      ],
      intro: [
        'Bấm chụp: ghi ảnh + GPS raw + hướng. Thuật toán trên máy: Kalman làm mịn → snap điểm gần nhất trên tuyến ca → nội suy Km.',
        'Giao diện app chỉ hiện tuyến, lý trình, sai số và pin — không hiện tên thuật toán.',
      ],
      std: 'Ref: 16-ITS-TRAFFIC-OBJECT-DETECTION-DESIGN §3 (CameraX/AV + Fused/CoreLocation) · §5.1 Kalman. Triangulation tia = P2.',
      bullets: ['Cùng pipeline cho CI · SC · Vision', 'P1 không lấy ảnh thư viện nếu không có GPS'],
    },
    'det-hitl': {
      title: 'HITL phát hiện TS',
      kicker: 'Confirm / Dismiss',
      perms: [
        { code: 'ai-vision.asset-candidates.read', name: 'Xem candidate', on: true },
        { code: 'ai-vision.asset-candidates.confirm', name: 'Tạo Asset', on: true },
        { code: 'ai-vision.asset-candidates.dismiss', name: 'False positive', on: true },
      ],
      intro: ['Ứng viên AI (biển, cống, hộ lan…) — người tuần đường Confirm hoặc Dismiss. Dedupe nearby 25 m.'],
      std: 'Không tự vào sổ tài sản khi chưa người duyệt (HITL).',
      bullets: ['Confirm → Asset', 'Dismiss → không tạo'],
    },
    estimate: {
      title: 'Ước lượng sửa chữa',
      kicker: 'Qty · đơn giá',
      perms: [
        { code: 'maintenance.work-orders.read', name: 'Xem CV liên quan', on: true },
        { code: 'incident.incidents.read', name: 'Nguồn sự cố', on: true },
      ],
      intro: ['Nhập khối lượng + đơn giá, xác nhận thủ công P1. BE estimate có thể chưa có — UI + queue.'],
      std: 'Khối lượng sửa chữa mặt đường / KCHT — bước trước lệnh bảo trì.',
      bullets: ['Xác nhận tạo bản ghi ước lượng'],
    },
    'cam-view': {
      title: 'Camera xem JPEG',
      kicker: 'Chỉ xem',
      perms: [
        { code: 'camera.devices.read', name: 'Xem camera / JPEG', on: true },
        { code: 'camera.devices.create', name: 'Cấu hình HW', on: false },
        { code: 'camera.devices.update', name: 'Sửa IP / SDK', on: false },
      ],
      intro: ['Xem ảnh CaptureJPEG và event (tốc độ, detect). Cấu hình camera chỉ trên Web.'],
      std: 'Giám sát ITS / camera tuyến — vận hành xem, không chỉnh thiết bị trên điện thoại.',
      bullets: ['Xem ảnh JPEG và sự kiện'],
    },
    'mnt-list': {
      title: 'Công việc bảo trì',
      kicker: 'List mỏng',
      perms: [
        { code: 'maintenance.work-orders.read', name: 'Xem lệnh', on: true },
        { code: 'maintenance.work-orders.create', name: 'Tạo lệnh (Web)', on: false },
      ],
      intro: ['Xem lệnh nhận từ sự cố (tiến độ). Tạo/SLA/nghiệm thu đủ trên Web P2.'],
      std: 'Lệnh sửa chữa KCHT — mobile chỉ theo dõi hiện trường.',
      bullets: ['Xem danh sách và chi tiết lệnh'],
    },
    ops: {
      title: 'Chỉ đạo / thông báo',
      kicker: 'Inbox',
      perms: [
        { code: 'notification.inbox.read', name: 'Xem hộp thư', on: true },
        { code: 'notification.inbox.update', name: 'Đánh dấu đã đọc', on: true },
        { code: 'notification.inbox.create', name: 'Gửi chỉ đạo (Web)', on: false },
      ],
      intro: ['Nhận chỉ đạo hạt / hệ thống (ưu tiên SC, coverage ca). Mobile không soạn chỉ đạo P1.'],
      std: 'Kênh điều hành Hạt → tổ tuần đường.',
      bullets: ['List + View + mark-read'],
    },
    me: {
      title: 'Tôi · hồ sơ',
      kicker: 'Shell',
      perms: [
        { code: 'integration.users.read', name: 'Xem hồ sơ', on: true },
        { code: 'web-bff/api/v1/auth/logout', name: 'Đăng xuất', on: true },
      ],
      intro: ['Hồ sơ cán bộ, hàng đợi offline, lối vào bảo trì / camera / thông báo.'],
      std: 'Định danh theo đơn vị Hạt và tuyến được giao trên HĐ.',
      bullets: ['Drawer: CV · camera xem · ops · settings'],
    },
  };

  /** Chỉ hiện trên panel tài liệu — không vẽ lên máy demo */
  const FORBID = {
    login: ['Đăng nhập khi tài khoản không Active', 'Dùng token / đăng nhập ngoài BFF'],
    'patrol-home': ['Xóa ca tuần đường'],
    'patrol-map': ['Gõ tay tọa độ', 'Lưu check-in khi sai điểm hoặc quá 50 m', 'Lưu khi GPS kém hoặc không có GPS', 'Gắn pin giả'],
    'patrol-history': ['Tạo ca mới từ màn lịch sử'],
    'patrol-detail': ['Xóa ca', 'Sửa GPS của check-in đã lưu'],
    'patrol-offline': ['Xóa bản ghi đang chờ đồng bộ'],
    attendance: ['Gõ tay tọa độ', 'Sửa hoặc xóa nhật ký chấm công', 'Chấm công ngoài hành lang tuyến', 'Chấm bằng Face / NFC'],
    'incident-list': ['Xóa hẳn sự cố'],
    'incident-detail': ['Sửa GPS đã lưu', 'Xóa hẳn sự cố (chỉ được đóng)'],
    'gis-map': ['Vẽ hoặc sửa lớp bản đồ', 'Mở bản đồ 3D'],
    'asset-list': ['Tạo tài sản trên điện thoại', 'Sửa tài sản trên điện thoại'],
    'asset-detail': ['Sửa hồ sơ tài sản trên điện thoại'],
    'ai-hub': ['Huấn luyện / chạy AI trên máy'],
    'vis-capture': ['Gửi ảnh khi chưa có GPS', 'Gõ tay tọa độ'],
    'photo-capture': ['Gõ tay tọa độ', 'Lưu ảnh khi GPS kém hoặc không có GPS', 'Chọn ảnh thư viện không có vị trí'],
    'det-hitl': ['Đưa tài sản vào sổ khi chưa xác nhận'],
    estimate: ['Sửa khối lượng / đơn giá sau khi đã xác nhận'],
    'cam-view': ['Cấu hình camera, IP hoặc SDK'],
    'mnt-list': ['Tạo lệnh bảo trì trên điện thoại'],
    ops: ['Soạn hoặc gửi chỉ đạo trên điện thoại'],
    me: [],
    checkin: ['Gõ tay tọa độ', 'Lưu khi sai điểm hoặc quá 50 m', 'Lưu khi GPS kém / không có GPS', 'Sửa GPS sau khi đã lưu'],
    incident: ['Tạo sự cố khi chưa có vị trí GPS', 'Gõ tay tọa độ'],
  };

  const ALIAS = {
    login: 'login',
    'patrol-home': 'patrol-home',
    'patrol-map': 'patrol-map',
    'patrol-history': 'patrol-history',
    'patrol-detail': 'patrol-detail',
    'patrol-offline': 'patrol-offline',
    attendance: 'attendance',
    'incident-list': 'incident-list',
    'incident-detail': 'incident-detail',
    'gis-map': 'gis-map',
    'asset-list': 'asset-list',
    'asset-detail': 'asset-detail',
    'ai-hub': 'ai-hub',
    'vis-capture': 'vis-capture',
    'photo-capture': 'photo-capture',
    capture: 'photo-capture',
    'det-hitl': 'det-hitl',
    estimate: 'estimate',
    'cam-view': 'cam-view',
    'mnt-list': 'mnt-list',
    ops: 'ops',
    me: 'me',
    checkin: 'patrol-map',
    incident: 'incident-list',
  };

  function el(html) {
    const t = document.createElement('template');
    t.innerHTML = html.trim();
    return t.content.firstElementChild;
  }

  function collectForbid(key) {
    const mapped = ALIAS[key] || key;
    const d = DOCS[mapped] || DOCS['patrol-home'];
    const denied = (d.perms || []).filter((p) => !p.on).map((p) => p.name);
    const extra = FORBID[key] || FORBID[mapped] || [];
    const seen = new Set();
    const out = [];
    denied.concat(extra).forEach((t) => {
      if (t && !seen.has(t)) { seen.add(t); out.push(t); }
    });
    return out;
  }

  function render(key) {
    const d = DOCS[ALIAS[key] || 'patrol-home'] || DOCS['patrol-home'];
    const permHtml = d.perms.map((p) => (
      `<div class="perm-row">
        <div><div class="code">${p.code}</div><div class="name">${p.name}</div></div>
        <span class="tag ${p.on ? 'on' : 'off'}">${p.on ? 'Được phép' : 'Không được phép'}</span>
      </div>`
    )).join('');
    const forbid = collectForbid(key);
    const forbidHtml = forbid.length
      ? forbid.map((t) => `<div class="forbid-item">User không được phép ${t.charAt(0).toLowerCase()}${t.slice(1)}</div>`).join('')
      : '<div class="forbid-item">Trên màn này user thực hiện đủ thao tác được phép.</div>';
    const introHtml = d.intro.map((p) => `<p>${p}</p>`).join('')
      + `<ul>${d.bullets.map((b) => `<li>${b}</li>`).join('')}</ul>`;
    const root = document.getElementById('featureDoc');
    if (!root) return;
    root.querySelector('[data-doc-kicker]').textContent = d.kicker;
    root.querySelector('[data-doc-title]').textContent = d.title;
    root.querySelector('[data-doc-perm]').innerHTML = permHtml;
    const forbidHost = root.querySelector('[data-doc-forbid]');
    if (forbidHost) forbidHost.innerHTML = forbidHtml;
    root.querySelector('[data-doc-intro]').innerHTML = `<div class="std">${d.std}</div>${introHtml}`;
  }

  function mount(frame) {
    const host = document.getElementById('featureDoc');
    if (!host) return;
    host.setAttribute('data-frame', frame || 'ios');
    host.innerHTML = `
      <div class="doc-head">
        <div class="kicker" data-doc-kicker></div>
        <h2 data-doc-title></h2>
        <p>Trái: quyền + việc user không được phép · Phải: nghiệp vụ. Máy bên cạnh = app, không hiện note.</p>
      </div>
      <div class="doc-split">
        <div class="doc-col perm">
          <h3>Quyền</h3><div data-doc-perm></div>
          <h3 class="forbid-h">User không được phép thực hiện</h3><div class="forbid-list" data-doc-forbid></div>
        </div>
        <div class="doc-col intro"><h3>Giới thiệu tính năng</h3><div data-doc-intro></div></div>
      </div>`;
    render('login');
  }

  global.FeatureGuide = { mount, set: render };
})(window);
