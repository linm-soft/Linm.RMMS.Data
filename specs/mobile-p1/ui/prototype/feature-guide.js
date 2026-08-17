/**
 * Review document — left: RMMS.Permission.Job catalog · right: ngành đường bộ VN
 * SSOT codes: Linm.RMMS.Permission.Job/catalog/permissions.csv
 */
(function (global) {
  const DOCS = {
    login: {
      title: 'Đăng nhập hiện trường',
      kicker: 'Xác thực · vòng đời hợp đồng',
      perms: [
        { code: 'web-bff/api/v1/auth', name: 'Đăng nhập / làm mới phiên / đăng xuất', on: true },
        { code: 'contract.contracts.accounts', name: 'Tài khoản theo hợp đồng (đang hiệu lực)', on: false },
      ],
      intro: [
        'Cán bộ Hạt / nhà thầu đăng nhập cùng hệ thống Web — không tách phiên riêng.',
        'Tài khoản gắn hợp đồng bảo trì: hết hạn → Inactive (job), không vào hiện trường.',
        'Logo RMMS trên đăng nhập. Đăng nhập bằng tài khoản và mật khẩu.',
      ],
      std: 'Cục Đường bộ VN · phân quyền theo đơn vị (Chi cục / Khu) và phạm vi tuyến–km trên HĐ.',
      bullets: ['Logo RMMS', 'Tài khoản + mật khẩu', 'Đơn vị theo tài khoản — không nhập mã đơn vị'],
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
        'Một ca = một phiên trên một tuyến–đoạn km. Chỉ tiêu: số điểm tuần và độ phủ % hành lang.',
      ],
      std: 'Nghiệp vụ Chi cục QLĐB: nhật ký tuần đường / tuần kiểm · lý trình Km · ≥3 điểm/ngày/tuyến.',
      bullets: ['Mã PAT-YYYYMMDD-NNNN', 'QL.1 / QL.46 + Km từ–đến (II.2 · Nghệ An)', 'Bỏ sót = thiếu điểm KH'],
    },
    'patrol-map': {
      title: 'Bản đồ ca + chấm điểm',
      kicker: 'Định vị · chống nhầm điểm',
      perms: [
        { code: 'patrol.sessions.read', name: 'Xem ca / điểm kế hoạch', on: true },
        { code: 'patrol.sessions.update', name: 'Ghi điểm tuần (không sửa vị trí sau lưu)', on: true },
        { code: 'gis.map.read', name: 'Lớp nền bản đồ', on: true },
      ],
      intro: [
        'Mở bản đồ → ghim định vị (xanh). Ghim cam = điểm kế hoạch (lý trình).',
        'Chỉ Lưu khi đúng điểm: cách điểm kế hoạch ≤ 50 m và sai số định vị ≤ 30 m. Gần điểm khác → chặn (tránh chấm nhầm Km).',
      ],
      std: 'Lý trình đường bộ VN (Km+m). Chấm điểm gắn đúng mốc trên tuyến được giao — không gõ tay tọa độ.',
      bullets: ['Phải chọn điểm kế hoạch', 'Chỉ lưu khi đúng điểm', 'Điểm tuần đã lưu không đổi vị trí'],
    },
    'patrol-history': {
      title: 'Lịch sử ca',
      kicker: 'Danh sách · xem',
      perms: [
        { code: 'patrol.sessions.read', name: 'Xem danh sách ca', on: true },
        { code: 'patrol.sessions.create', name: 'Tạo ca mới', on: false },
      ],
      intro: ['Danh sách phiên theo ngày / tuyến / trạng thái. Chọn dòng → chi tiết + nhật ký điểm tuần.'],
      std: 'Lưu trữ nhật ký tuần đường — đối chiếu báo cáo tuần đường / tuần kiểm trên Web.',
      bullets: ['Đang tuần · Hoàn thành · Bỏ sót · Mất sóng'],
    },
    'patrol-detail': {
      title: 'Chi tiết ca',
      kicker: 'Xem + nhật ký điểm tuần',
      perms: [
        { code: 'patrol.sessions.read', name: 'Xem chi tiết', on: true },
        { code: 'patrol.sessions.update', name: 'Kết thúc ca', on: true },
      ],
      intro: ['Xem mã phiên, tuyến–km, độ phủ, nhật ký từng điểm. Điểm tuần đã lưu không đổi vị trí.'],
      std: 'Hồ sơ ca = căn cứ nghiệm thu tuần tra và phát hiện bỏ sót điểm.',
      bullets: ['Xem ca · kết thúc ca · nhật ký điểm tuần'],
    },
    'patrol-offline': {
      title: 'Hàng đợi offline',
      kicker: 'Đồng bộ khi có mạng',
      perms: [
        { code: 'patrol.sessions.update', name: 'Đồng bộ điểm tuần / hành trình', on: true },
        { code: 'incident.incidents.create', name: 'Đồng bộ nháp sự cố', on: true },
      ],
      intro: ['Mạng yếu: ghi cục bộ cùng dữ liệu Web, đồng bộ khi có mạng. Trùng bản ghi → giữ bản mới + xem lại.'],
      std: 'Hiện trường QLĐB thường mất sóng — không được mất nhật ký / sự cố.',
      bullets: ['Cùng đường gửi khi có mạng', 'Dải cảnh báo + nút Đồng bộ'],
    },
    attendance: {
      title: 'Chấm công theo định vị',
      kicker: 'Đúng tuyến',
      perms: [
        { code: 'patrol.attendance-logs.read', name: 'Xem chấm công', on: true },
        { code: 'patrol.attendance-logs.create', name: 'Chấm vào / ra', on: true },
        { code: 'patrol.attendance-logs.update', name: 'Sửa log', on: false },
        { code: 'patrol.attendance-logs.delete', name: 'Xóa log', on: false },
      ],
      intro: [
        'Chấm vào/ra theo định vị trên tuyến được giao. Vị trí lấy tự động từ máy.',
        'Ngoài hành lang 80 m → ngoài hành lang, chặn chấm (tránh chấm hộ / chấm sai hạt).',
      ],
      std: 'Chấm công hiện trường Chi cục QLĐB gắn ca tuần đường — không khuôn mặt / thẻ từ Gói 1.',
      bullets: ['Tọa độ / lý trình bắt buộc', '7 ngày gần đây = danh sách + xem'],
    },
    'incident-list': {
      title: 'Sự cố (Vấn đề)',
      kicker: 'Ghi nhận hiện trường',
      perms: [
        { code: 'incident.incidents.read', name: 'Xem sự cố', on: true },
        { code: 'incident.incidents.create', name: 'Tạo sự cố', on: true },
        { code: 'incident.incidents.update', name: 'Sửa nháp offline', on: true },
        { code: 'incident.incidents.delete', name: 'Xóa', on: false },
      ],
      intro: [
        'Ghi hư hỏng KCHT (mặt đường, cống, biển, lan can…) kèm ảnh + ghim định vị + đoạn–Km.',
        'Nguồn: tuần tra, nhận diện, camera tuyến. Giao việc bảo trì trên Web; máy Gói 1 tạo / xem / đóng.',
      ],
      std: 'Sổ sự cố / hư hỏng đường bộ — gắn lý trình để lập lệnh sửa chữa.',
      bullets: ['Nút tạo / phiếu = ghi mới', 'Dòng = xem chi tiết', 'Đóng ≠ xóa hẳn'],
    },
    'incident-detail': {
      title: 'Chi tiết sự cố',
      kicker: 'Xem',
      perms: [
        { code: 'incident.incidents.read', name: 'Xem', on: true },
        { code: 'incident.incidents.update', name: 'Đóng / ghi chú', on: true },
      ],
      intro: ['Xem loại, mức, vị trí ghim, ảnh, nguồn nhận diện. Định vị đã lưu không sửa trên máy.'],
      std: 'Hồ sơ sự cố là đầu vào lệnh bảo trì và báo cáo hư hỏng.',
      bullets: ['Xem + đóng', 'Nháp mất sóng mới được sửa mô tả'],
    },
    'gis-map': {
      title: 'Bản đồ tuyến (chỉ xem)',
      kicker: 'Lớp tài sản / sự cố',
      perms: [
        { code: 'gis.map.read', name: 'Xem bản đồ tuyến', on: true },
        { code: 'asset.road-assets.read', name: 'Ghim tài sản', on: true },
        { code: 'incident.incidents.read', name: 'Ghim sự cố', on: true },
      ],
      intro: ['Nền đường phố / phố / vệ tinh. Lớp tài sản, sự cố, hành lang tuyến. Chạm ghim → xem — không vẽ/sửa trên máy Gói 1.'],
      std: 'Giám sát không gian KCHT theo tuyến–km — mô hình 3D ngoài Gói 1.',
      bullets: ['Chỉ xem lớp nền và ghim', 'Phóng vừa toàn tuyến'],
    },
    'asset-list': {
      title: 'Tài sản đường bộ',
      kicker: 'Tra cứu + pin',
      perms: [
        { code: 'asset.road-assets.read', name: 'Xem tài sản', on: true },
        { code: 'asset.road-assets.create', name: 'Tạo TS (Web)', on: false },
        { code: 'asset.road-assets.update', name: 'Sửa TS (Web)', on: false },
      ],
      intro: ['Tra cứu cầu, cống, biển, hộ lan, cột Km… theo tuyến. Máy Gói 1: danh sách + xem + ghim bản đồ. Ghi nhận trên Web / người xác nhận.'],
      std: 'Danh mục KCHT đường bộ (sổ tài sản) — mã tài sản gắn lý trình.',
      bullets: ['Tìm mã/tên/loại', 'Dòng → chi tiết + bản đồ'],
    },
    'asset-detail': {
      title: 'Chi tiết tài sản',
      kicker: 'Xem',
      perms: [{ code: 'asset.road-assets.read', name: 'Xem chi tiết', on: true }],
      intro: ['Mã, loại, tuyến–Km, tọa độ. Không sửa trên máy Gói 1.'],
      std: 'Hồ sơ tài sản KCHT — đối chiếu sổ sách / biểu mặt đường trên Web.',
      bullets: ['Chỉ xem'],
    },
    'ai-hub': {
      title: 'Nhận diện hiện trường',
      kicker: 'Có mạng + người xác nhận',
      perms: [
        { code: 'ai-vision.asset-candidates.read', name: 'Xem ứng viên', on: true },
        { code: 'ai-vision.asset-candidates.confirm', name: 'Xác nhận', on: true },
        { code: 'ai-vision.asset-candidates.dismiss', name: 'Bỏ qua', on: true },
      ],
      intro: ['Ba lối: nhận diện mặt đường → phân loại hư hỏng; phát hiện tài sản mới (người xác nhận); ước lượng khối lượng. Chạy trên máy chủ — không nhận diện cục bộ.'],
      std: 'Hỗ trợ kiểm định mặt đường / phát hiện KCHT — người xác nhận trước khi vào sổ.',
      bullets: ['Chạy nhận diện trên máy chủ', 'Người xác nhận trước khi vào sổ'],
    },
    'vis-capture': {
      title: 'Nhận diện mặt đường — chụp',
      kicker: 'Ảnh + định vị',
      perms: [
        { code: 'ai-vision.asset-candidates.create', name: 'Gửi ảnh nhận diện', on: true },
        { code: 'incident.incidents.create', name: 'Gắn sự cố', on: true },
      ],
      intro: [
        'Chụp bằng camera máy cùng lúc lấy định vị. Máy làm mịn rồi gắn lý trình — người dùng thấy «Vị trí đã chốt».',
        'Thiếu định vị hoặc sai số > 30 m thì không gửi nhận diện.',
      ],
      std: 'Chụp mặt đường gắn lý trình. Camera tuyến (TCM403) là màn xem ảnh — không thay camera điện thoại.',
      bullets: ['Ảnh + vị trí bắt buộc', 'Ghim trên bản đồ = điểm đã chốt'],
    },
    'photo-capture': {
      title: 'Chụp hình kèm định vị',
      kicker: 'Chụp · chốt vị trí',
      perms: [
        { code: 'patrol.sessions.update', name: 'Ảnh điểm tuần', on: true },
        { code: 'incident.incidents.create', name: 'Ảnh sự cố', on: true },
        { code: 'ai-vision.asset-candidates.create', name: 'Ảnh nhận diện', on: true },
      ],
      intro: [
        'Bấm chụp: ghi ảnh + định vị thô + hướng. Máy làm mịn → gắn điểm gần nhất trên tuyến ca → nội suy lý trình.',
        'Giao diện chỉ hiện tuyến, lý trình, sai số và ghim — không hiện tên thuật toán.',
      ],
      std: 'Chụp hiện trường gắn lý trình. Giao điểm tia (vật trong khung) = Gói 2.',
      bullets: ['Cùng quy trình cho điểm tuần · sự cố · nhận diện', 'Gói 1 không lấy ảnh thư viện nếu không có định vị'],
    },
    'det-hitl': {
      title: 'Người xác nhận tài sản',
      kicker: 'Xác nhận / Bỏ qua',
      perms: [
        { code: 'ai-vision.asset-candidates.read', name: 'Xem ứng viên', on: true },
        { code: 'ai-vision.asset-candidates.confirm', name: 'Vào sổ tài sản', on: true },
        { code: 'ai-vision.asset-candidates.dismiss', name: 'Nhận nhầm', on: true },
      ],
      intro: ['Ứng viên nhận diện (biển, cống, hộ lan…) — người tuần đường xác nhận hoặc bỏ qua. Gộp gần trong 25 m.'],
      std: 'Không tự vào sổ tài sản khi chưa người duyệt.',
      bullets: ['Xác nhận → vào sổ', 'Bỏ qua → không tạo'],
    },
    estimate: {
      title: 'Ước lượng sửa chữa',
      kicker: 'Khối lượng · đơn giá',
      perms: [
        { code: 'maintenance.work-orders.read', name: 'Xem lệnh liên quan', on: true },
        { code: 'incident.incidents.read', name: 'Nguồn sự cố', on: true },
      ],
      intro: ['Nhập khối lượng + đơn giá, xác nhận thủ công Gói 1. Máy chủ ước lượng có thể chưa có — giao diện + hàng đợi.'],
      std: 'Khối lượng sửa chữa mặt đường / KCHT — bước trước lệnh bảo trì.',
      bullets: ['Xác nhận tạo bản ghi ước lượng'],
    },
    'cam-view': {
      title: 'Camera tuyến — xem ảnh',
      kicker: 'Chỉ xem',
      perms: [
        { code: 'camera.devices.read', name: 'Xem camera / ảnh', on: true },
        { code: 'camera.devices.create', name: 'Cấu hình thiết bị', on: false },
        { code: 'camera.devices.update', name: 'Sửa địa chỉ / kết nối', on: false },
      ],
      intro: ['Xem ảnh JPEG và sự kiện (tốc độ, phát hiện). Cấu hình camera chỉ trên Web.'],
      std: 'Giám sát camera tuyến — vận hành xem, không chỉnh thiết bị trên điện thoại.',
      bullets: ['Xem ảnh JPEG và sự kiện'],
    },
    'mnt-list': {
      title: 'Công việc bảo trì',
      kicker: 'Danh sách mỏng',
      perms: [
        { code: 'maintenance.work-orders.read', name: 'Xem lệnh', on: true },
        { code: 'maintenance.work-orders.create', name: 'Tạo lệnh (Web)', on: false },
      ],
      intro: ['Xem lệnh nhận từ sự cố (tiến độ). Tạo / thời hạn / nghiệm thu đủ trên Web Gói 2.'],
      std: 'Lệnh sửa chữa KCHT — mobile chỉ theo dõi hiện trường.',
      bullets: ['Xem danh sách và chi tiết lệnh'],
    },
    ops: {
      title: 'Chỉ đạo / thông báo',
      kicker: 'Hộp thư',
      perms: [
        { code: 'notification.inbox.read', name: 'Xem hộp thư', on: true },
        { code: 'notification.inbox.update', name: 'Đánh dấu đã đọc', on: true },
        { code: 'notification.inbox.create', name: 'Gửi chỉ đạo (Web)', on: false },
      ],
      intro: ['Nhận chỉ đạo hạt / hệ thống (ưu tiên sự cố, độ phủ ca). Máy không soạn chỉ đạo Gói 1.'],
      std: 'Kênh điều hành Hạt → tổ tuần đường.',
      bullets: ['Danh sách + xem + đánh dấu đã đọc'],
    },
    me: {
      title: 'Tôi · hồ sơ',
      kicker: 'Hồ sơ',
      perms: [
        { code: 'integration.users.read', name: 'Xem hồ sơ', on: true },
        { code: 'web-bff/api/v1/auth/logout', name: 'Đăng xuất', on: true },
      ],
      intro: ['Hồ sơ cán bộ, hàng đợi mất sóng, lối vào bảo trì / camera tuyến / thông báo.'],
      std: 'Định danh theo đơn vị Hạt và tuyến được giao trên hợp đồng.',
      bullets: ['Thêm: lệnh · camera tuyến · chỉ đạo · cài đặt'],
    },
  };

  /** Chỉ hiện trên panel tài liệu — không vẽ lên máy demo */
  const FORBID = {
    login: ['Đăng nhập khi tài khoản hết hiệu lực', 'Dùng phiên / đăng nhập ngoài hệ thống'],
    'patrol-home': ['Xóa ca tuần đường'],
    'patrol-map': ['Gõ tay tọa độ', 'Lưu điểm tuần khi sai điểm hoặc quá 50 m', 'Lưu khi định vị kém hoặc không có định vị', 'Gắn ghim giả'],
    'patrol-history': ['Tạo ca mới từ màn lịch sử'],
    'patrol-detail': ['Xóa ca', 'Sửa định vị của điểm tuần đã lưu'],
    'patrol-offline': ['Xóa bản ghi đang chờ đồng bộ'],
    attendance: ['Gõ tay tọa độ', 'Sửa hoặc xóa nhật ký chấm công', 'Chấm công ngoài hành lang tuyến', 'Chấm bằng khuôn mặt / thẻ từ'],
    'incident-list': ['Xóa hẳn sự cố'],
    'incident-detail': ['Sửa định vị đã lưu', 'Xóa hẳn sự cố (chỉ được đóng)'],
    'gis-map': ['Vẽ hoặc sửa lớp bản đồ', 'Mở bản đồ 3D'],
    'asset-list': ['Tạo tài sản trên điện thoại', 'Sửa tài sản trên điện thoại'],
    'asset-detail': ['Sửa hồ sơ tài sản trên điện thoại'],
    'ai-hub': ['Huấn luyện / chạy nhận diện trên máy'],
    'vis-capture': ['Gửi ảnh khi chưa có định vị', 'Gõ tay tọa độ'],
    'photo-capture': ['Gõ tay tọa độ', 'Lưu ảnh khi định vị kém hoặc không có định vị', 'Chọn ảnh thư viện không có vị trí'],
    'det-hitl': ['Đưa tài sản vào sổ khi chưa xác nhận'],
    estimate: ['Sửa khối lượng / đơn giá sau khi đã xác nhận'],
    'cam-view': ['Cấu hình camera, địa chỉ hoặc kết nối'],
    'mnt-list': ['Tạo lệnh bảo trì trên điện thoại'],
    ops: ['Soạn hoặc gửi chỉ đạo trên điện thoại'],
    me: [],
    checkin: ['Gõ tay tọa độ', 'Lưu khi sai điểm hoặc quá 50 m', 'Lưu khi định vị kém / không có định vị', 'Sửa định vị sau khi đã lưu'],
    incident: ['Tạo sự cố khi chưa có vị trí định vị', 'Gõ tay tọa độ'],
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
