/* Catalog 32 loại TS — proto. Context: docs/context/features/asset-kcht-32.md */
(function (g) {
  const CHK = {
    PAVEMENT: [['hư', 'Ổ gà'], ['hư', 'Nứt dọc / ngang'], ['hư', 'Lún · sóng'], ['hỏng', 'Bong tróc mặt'], ['hỏng', 'Mờ vạch sơn']],
    BRIDGE: [['hư', 'Khe co giãn'], ['hư', 'Lan can'], ['hỏng', 'Gối / dầm'], ['hỏng', 'Thoát nước mặt cầu']],
    TUNNEL: [['hỏng', 'Đèn hỏng'], ['hỏng', 'Thông gió'], ['hư', 'Thấm'], ['hỏng', 'PCCC']],
    CULVERT_X: [['hỏng', 'Tắc miệng'], ['hư', 'Sập miệng'], ['hư', 'Xói'], ['hỏng', 'Ngập']],
    DITCH: [['hư', 'Sạt mái rãnh'], ['hỏng', 'Tắc'], ['hư', 'Xói đáy']],
    UNDERPASS: [['hỏng', 'Đèn'], ['hỏng', 'Thoát nước'], ['hư', 'Nứt thân']],
    TRAFFIC_SIGN: [['mất', 'Mất biển'], ['hỏng', 'Biển mờ'], ['hư', 'Nghiêng / gãy cột']],
    DELINEATOR: [['mất', 'Mất cọc'], ['hư', 'Gãy'], ['hỏng', 'Mờ phản quang']],
    KM_POST: [['mất', 'Mất cột Km'], ['hư', 'Gãy / nghiêng'], ['hỏng', 'Chữ mờ']],
    MEDIAN: [['hư', 'Móp / đứt'], ['mất', 'Thiếu đoạn']],
    ANTI_GLARE: [['mất', 'Mất tấm'], ['hư', 'Gãy']],
    TRAFFIC_ISLAND: [['hư', 'Nứt đảo'], ['hỏng', 'Thiếu ATGT']],
    ROAD_STUD: [['mất', 'Mất đinh'], ['hỏng', 'Mờ phản quang']],
    GUARDRAIL: [['hư', 'Móp hộ lan'], ['hư', 'Đứt tôn'], ['mất', 'Thiếu tôn']],
    ROAD_MARKING: [['hỏng', 'Mờ vạch'], ['hỏng', 'Bong sơn']],
    CRASH_CUSHION: [['hỏng', 'Hỏng thùng'], ['mất', 'Mất thùng']],
    CONVEX_MIRROR: [['hỏng', 'Gương mờ / vỡ'], ['mất', 'Mất gương']],
    TRAFFIC_SIGNAL: [['hỏng', 'Đèn chết'], ['hư', 'Cột nghiêng']],
    BOUNDARY: [['mất', 'Mất mốc'], ['hư', 'Lấn chiếm']],
    RETAINING: [['hư', 'Nứt thân kè'], ['hư', 'Sạt'], ['hỏng', 'Thấm']],
    SHOULDER: [['hư', 'Sụt lề'], ['hỏng', 'Hàng rào đứt']],
    LIGHTING: [['hỏng', 'Đèn tắt'], ['hỏng', 'Tủ hỏng'], ['hư', 'Cột nghiêng']],
    GREEN: [['hỏng', 'Chết cây'], ['hư', 'Lấn hành lang']],
    INTERCHANGE: [['hư', 'Hư mặt nhánh'], ['hỏng', 'Thiếu ATGT']],
    SLOPE_PROTECT: [['hư', 'Sạt taluy'], ['hư', 'Nứt tường']],
    GANTRY_SIGN: [['hỏng', 'Biển mờ'], ['hư', 'Nghiêng giá']],
    ROW_UTIL: [['hư', 'Lấn hành lang'], ['hỏng', 'Hư công trình']],
    STATION_HOUSE: [['hư', 'Hư nhà'], ['hỏng', 'Thiếu ATGT cổng']],
    BUS_STATION: [['hư', 'Hư nhà chờ'], ['hỏng', 'Thiếu ATGT']],
    BUS_STOP: [['mất', 'Mất cột dừng'], ['hỏng', 'Nhà chờ hỏng']],
    RAIL_CROSS: [['hỏng', 'Barrier'], ['hỏng', 'Tín hiệu']],
    LAND_ROW: [['hư', 'Lấn chiếm'], ['mất', 'Mất mốc']],
    EMS_POST: [['hỏng', 'Thiếu ATGT'], ['hỏng', 'Thiết bị']],
    TOLL: [['hỏng', 'Làn / đèn'], ['hư', 'Mặt đường trạm']],
    FERRY: [['hỏng', 'Ngập bến'], ['hỏng', 'ATGT bến']],
    REST_AREA: [['hỏng', 'ATGT / đèn'], ['hư', 'Mặt bãi đỗ']]
  };

  const PAVEMENT_FORM = [
    ['roadName', 'Tên đường', 'QL.1'],
    ['kmFrom', 'Km đầu *', '1551+200'],
    ['kmTo', 'Km cuối *', '1561+134'],
    ['actualLen', 'Chiều dài thực (m)', '9934'],
    ['motoW', 'B làn cơ giới (m)', '7,0'],
    ['nonMotoW', 'B làn thô sơ (m)', '2,0'],
    ['emergW', 'B làn khẩn (m)', '0'],
    ['shL', 'Lề trái gia cố (m)', '1,5'],
    ['shR', 'Lề phải gia cố (m)', '1,5'],
    ['swL', 'Vỉa hè trái (m)', '0'],
    ['swR', 'Vỉa hè phải (m)', '0'],
    ['vTk', 'Vận tốc thiết kế', '80'],
    ['fwd', 'FWD', '—'],
    ['cbr', 'CBR', '—'],
    ['paint', 'Diện tích vạch sơn (m²)', '120'],
    ['nail', 'Đinh phản quang (cái)', '48'],
    ['guide', 'Dẫn hướng PQ (cái)', '12'],
    ['hist', 'Lịch sử sự cố', 'Ổ gà Km 1556+040'],
    ['cause', 'Nguyên nhân', 'Mưa · tải nặng']
  ];

  const TYPES = [
    { code: 'PAVEMENT', name: 'Mặt đường', group: 'Kết cấu', specs: [['Loại kết cấu', 'BTN'], ['B mặt cơ giới', '7,0 m'], ['Lề T/P', '1,5 / 1,5 m'], ['Vận tốc TK', '80'], ['Km', '1551+200–1561+134']], incidents: [['Ổ gà', 'Km 1556+040', 'Cao'], ['Nứt dọc', 'Km 1558+200', 'Theo dõi']] },
    { code: 'BRIDGE', name: 'Cầu', group: 'Kết cấu', specs: [['Tên', 'Cầu Phước Dinh'], ['Vượt', 'Suối'], ['Dài / rộng', '48 / 12 m'], ['Tĩnh không', '5,2 m'], ['Tải', 'HL93']], incidents: [['Khe co giãn', 'Nhịp 2', 'Trước mưa']] },
    { code: 'TUNNEL', name: 'Hầm', group: 'Kết cấu', specs: [['Dài', '320 m'], ['Ống', '1'], ['Thông gió', 'Có'], ['PCCC', 'Có'], ['CCTV', 'Có']], incidents: [['Đèn hỏng', 'Km giữa', 'TB']] },
    { code: 'CULVERT_X', name: 'Cống ngang', group: 'Thoát nước', specs: [['Khẩu độ', '1,5×1,5'], ['Hình', 'Hộp'], ['Dài', '18 m'], ['Năm XD', '2014']], incidents: [['Tắc miệng', 'Bên phải', 'Cao']] },
    { code: 'DITCH', name: 'Rãnh / cống dọc', group: 'Thoát nước', specs: [['Loại', 'Hở'], ['Hình', 'Chữ U'], ['Dài', '240 m']], incidents: [['Sạt mái rãnh', 'Km 1557', 'TB']] },
    { code: 'UNDERPASS', name: 'Hầm chui DS', group: 'Thoát nước', specs: [['Khẩu độ', '4,0 m'], ['Dài', '22 m'], ['Đèn', 'Có']], incidents: [] },
    { code: 'TRAFFIC_SIGN', name: 'Biển báo', group: 'ATGT', specs: [['Mã biển', 'P.123'], ['Kích thước', '80 cm'], ['Cột', '1']], incidents: [['Biển mờ', 'Km 1554+800', 'TB']] },
    { code: 'DELINEATOR', name: 'Cọc tiêu', group: 'ATGT', specs: [['Chủng', 'Cọc H'], ['SL', '24'], ['Kết cấu', 'Nhựa']], incidents: [['Mất cọc', 'Bên trái', 'TB']] },
    { code: 'KM_POST', name: 'Cột Km', group: 'ATGT', specs: [['Lý trình', 'Km 1556+000'], ['Loại', 'Cột Km'], ['Kết cấu', 'BT']], incidents: [] },
    { code: 'MEDIAN', name: 'Dải phân cách', group: 'ATGT', specs: [['Loại', 'Cứng'], ['Dài', '1,2 km'], ['Cao', '0,8 m']], incidents: [] },
    { code: 'ANTI_GLARE', name: 'Tấm chống chói', group: 'ATGT', specs: [['SL', '—'], ['Dài', '—']], incidents: [], gap: 'GAP-AK32-03' },
    { code: 'TRAFFIC_ISLAND', name: 'Đảo giao thông', group: 'ATGT', specs: [['Loại', '—'], ['Diện tích', '—']], incidents: [], gap: 'GAP-AK32-03' },
    { code: 'ROAD_STUD', name: 'Đinh phản quang', group: 'ATGT', specs: [['SL', '—']], incidents: [], gap: 'GAP-AK32-03' },
    { code: 'GUARDRAIL', name: 'Hộ lan', group: 'ATGT', specs: [['Loại', 'Tôn sóng'], ['Dài', '180 m'], ['Phản quang', 'Có']], incidents: [['Móp hộ lan', 'Km 1559', 'Cao']] },
    { code: 'ROAD_MARKING', name: 'Vạch sơn', group: 'ATGT', specs: [['Mã', 'Vạch tim'], ['Dài', '—']], incidents: [], gap: 'GAP-AK32-03' },
    { code: 'CRASH_CUSHION', name: 'Thùng giảm chấn', group: 'ATGT', specs: [['SL', '—']], incidents: [], gap: 'GAP-AK32-03' },
    { code: 'CONVEX_MIRROR', name: 'Gương cầu', group: 'ATGT', specs: [['SL', '—']], incidents: [], gap: 'GAP-AK32-03' },
    { code: 'TRAFFIC_SIGNAL', name: 'Đèn tín hiệu', group: 'ATGT', specs: [['Cột', '—'], ['Đèn', '—']], incidents: [], gap: 'GAP-AK32-03' },
    { code: 'BOUNDARY', name: 'Mốc lộ giới', group: 'Hành lang', specs: [['Loại', 'GPMB'], ['Năm', '2018']], incidents: [['Mất mốc', 'Km 1560', 'TB']] },
    { code: 'RETAINING', name: 'Kè / tường chắn', group: 'Kết cấu', specs: [['Bên', 'Phải'], ['Dài', '85 m'], ['Cao', '3,2 m']], incidents: [['Nứt thân kè', 'Thân giữa', 'Cao']] },
    { code: 'SHOULDER', name: 'Lề / hàng rào', group: 'Hành lang', specs: [['Lề', 'Đất'], ['Hàng rào', 'Lưới'], ['Dài', '400 m']], incidents: [] },
    { code: 'LIGHTING', name: 'Chiếu sáng', group: 'Điện', specs: [['Nguồn', 'Lưới'], ['Cột', '36'], ['Tủ', '2']], incidents: [['Đèn tắt', 'Trụ 12–18', 'TB']] },
    { code: 'GREEN', name: 'Cây xanh', group: 'Cảnh quan', specs: [['Thảm cỏ', '1.200 m²'], ['Bụi', 'Trúc đào']], incidents: [] },
    { code: 'INTERCHANGE', name: 'Nút giao', group: 'Giao thông', specs: [['Tên', 'Nút QL.1'], ['Nhánh', '4']], incidents: [] },
    { code: 'SLOPE_PROTECT', name: 'Mái dốc', group: 'Kết cấu', specs: [['Bên', 'Trái'], ['Kết cấu', 'Tường'], ['Dài', '60 m']], incidents: [['Sạt taluy', 'Sau mưa', 'Cao']] },
    { code: 'GANTRY_SIGN', name: 'Giá long môn', group: 'ATGT', specs: [['Loại', 'Gantry'], ['Biển', '3']], incidents: [] },
    { code: 'ROW_UTIL', name: 'HTKT hành lang', group: 'Hành lang', specs: [['Loại', 'Cáp'], ['Chủ', 'VNPT']], incidents: [['Lấn HL', 'Km 1553', 'TB']] },
    { code: 'STATION_HOUSE', name: 'Nhà hạt', group: 'Công trình', specs: [['Tên', 'Hạt IV.1'], ['Năm', '2008']], incidents: [] },
    { code: 'BUS_STATION', name: 'Bến xe', group: 'Công trình', specs: [['Tên', 'Bến Phước Dinh'], ['Vị trí', '4']], incidents: [] },
    { code: 'BUS_STOP', name: 'Điểm đỗ xe', group: 'ATGT', specs: [['Nhà chờ', 'Có'], ['Cột', '1']], incidents: [] },
    { code: 'RAIL_CROSS', name: 'Giao đường sắt', group: 'Giao thông', specs: [['Barrier', 'Có'], ['Tín hiệu', 'Có']], incidents: [] },
    { code: 'LAND_ROW', name: 'Đất HTĐB', group: 'Hành lang', specs: [['Diện tích', '—'], ['Mục đích', 'Hành lang']], incidents: [] }
  ];

  function byCode(code) {
    return TYPES.find((t) => t.code === code) || TYPES[0];
  }

  function checklist(code) {
    return CHK[code] || [['hư', 'Hư kết cấu'], ['mất', 'Mất bộ phận'], ['hỏng', 'Hỏng chức năng']];
  }

  function slaHours(sev) {
    if (sev === 'Cao' || sev === 'Nghiêm trọng') return 24;
    if (sev === 'TB') return 72;
    return 168;
  }

  function renderGrid(el) {
    if (!el) return;
    el.innerHTML = TYPES.map((t) => (
      '<button type="button" class="ak32-tile" data-ak32="' + t.code + '">' +
        '<span class="ak32-dot"></span>' +
        '<span class="ak32-n">' + t.name + '</span>' +
        (t.gap ? '<span class="ak32-gap">Thiếu mẫu</span>' : '') +
      '</button>'
    )).join('');
  }

  function fillChecklist(el, code) {
    if (!el) return;
    el.innerHTML = checklist(code).map((r) => (
      '<label class="chk-row"><input type="checkbox" />' +
        '<span class="chk-k">' + r[0] + '</span>' +
        '<span class="chk-t">' + r[1] + '</span></label>'
    )).join('');
  }

  function fillForm(root, code) {
    const t = byCode(code);
    if (!root || !t) return;
    const title = root.querySelector('[data-ak32-form-title]');
    const fields = root.querySelector('[data-ak32-form-fields]');
    const chk = root.querySelector('[data-ak32-form-chk]');
    if (title) title.textContent = t.name;
    if (fields) {
      const rows = t.code === 'PAVEMENT'
        ? PAVEMENT_FORM
        : t.specs.map((s, i) => ['f' + i, s[0], s[1]]);
      fields.innerHTML = rows.map((r) => (
        '<div class="field"><label>' + r[1] + '</label><input value="' + r[2] + '" /></div>'
      )).join('');
    }
    fillChecklist(chk, t.code);
    root.dataset.ak32 = t.code;
  }

  function fillDetail(root, code) {
    const t = byCode(code);
    if (!root || !t) return;
    const title = root.querySelector('[data-ak32-title]');
    const sub = root.querySelector('[data-ak32-sub]');
    const specs = root.querySelector('[data-ak32-specs]');
    const inc = root.querySelector('[data-ak32-inc]');
    const chk = root.querySelector('[data-ak32-chk]');
    if (title) title.textContent = t.name;
    if (sub) sub.textContent = t.code + ' · ' + t.group + (t.gap ? ' · ' + t.gap : '');
    if (specs) {
      specs.innerHTML = t.specs.map((r) => (
        '<div class="row no-icon"><div class="row-body"><div class="row-sub">' + r[0] +
        '</div><div class="row-title">' + r[1] + '</div></div></div>'
      )).join('');
    }
    if (inc) {
      inc.innerHTML = t.incidents.length
        ? t.incidents.map((r) => (
          '<div class="row no-icon"><div class="row-body"><div class="row-title">' + r[0] +
          '</div><div class="row-sub">' + r[1] + '</div></div><span class="badge orange">' + r[2] + '</span></div>'
        )).join('')
        : '<div class="row no-icon"><div class="row-body"><div class="row-sub">Chưa có sự cố trên loại này</div></div></div>';
    }
    fillChecklist(chk, t.code);
    root.dataset.ak32 = t.code;
  }

  function fillIncidentForm(root, code) {
    const t = byCode(code);
    if (!root || !t) return;
    const title = root.querySelector('[data-inc-asset-title]');
    const sub = root.querySelector('[data-inc-asset-sub]');
    const loc = root.querySelector('[data-inc-loc]');
    const ai = root.querySelector('[data-inc-ai]');
    const chk = root.querySelector('[data-inc-chk]');
    if (title) title.textContent = t.name;
    if (sub) sub.textContent = t.code + ' · ' + t.group;
    if (loc) loc.value = 'QL.1 · Km 1556+080 · định vị ±5 m · ' + t.name;
    if (ai) ai.textContent = 'Chưa có ảnh — chụp để phân loại theo loại ' + t.name;
    fillChecklist(chk, t.code);
    root.dataset.ak32 = t.code;
  }

  g.AssetKcht32 = {
    TYPES, byCode, checklist, slaHours, renderGrid, fillDetail, fillForm, fillChecklist, fillIncidentForm
  };
})(window);
