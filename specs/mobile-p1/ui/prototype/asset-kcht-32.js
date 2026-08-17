/* Catalog 32 loại TS — SSOT proto. Context: docs/context/features/asset-kcht-32.md */
(function (g) {
  const TYPES = [
    { code: 'PAVEMENT', name: 'Mặt đường', group: 'Kết cấu', specs: [['Loại kết cấu', 'BTN'], ['B mặt', '11 m'], ['Dày mặt', '12 cm'], ['Cấp đường', 'III'], ['Km', '12,4']], incidents: [['Ổ gà', 'Km 1556+040', 'Cao'], ['Nứt dọc', 'Km 1558+200', 'Theo dõi']] },
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
    { code: 'LAND_ROW', name: 'Đất HTĐB', group: 'Hành lang', specs: [['Diện tích', '—'], ['Mục đích', 'Hành lang']], incidents: [] },
    { code: 'EMS_POST', name: 'Trạm cấp cứu', group: 'Công trình', specs: [['Tên', 'Trạm TT'], ['Trực 24h', 'Có'], ['ĐT', '115']], incidents: [['Thiếu ATGT', 'Cổng vào', 'TB']] },
    { code: 'TOLL', name: 'Trạm thu phí', group: 'Công trình', specs: [['Vận hành', 'BOT'], ['Làn', '6'], ['Năm', '2016']], incidents: [] },
    { code: 'FERRY', name: 'Bến phà', group: 'Giao thông', specs: [['Tên', '—'], ['Sức chứa', '—'], ['Giờ', '—']], incidents: [] },
    { code: 'REST_AREA', name: 'Trạm dừng nghỉ', group: 'Công trình', specs: [['Chỗ đỗ', '40'], ['Dịch vụ', 'WC · cây xăng']], incidents: [] }
  ];

  function byCode(code) {
    return TYPES.find((t) => t.code === code) || TYPES[0];
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

  function fillDetail(root, code) {
    const t = byCode(code);
    if (!root || !t) return;
    const title = root.querySelector('[data-ak32-title]');
    const sub = root.querySelector('[data-ak32-sub]');
    const specs = root.querySelector('[data-ak32-specs]');
    const inc = root.querySelector('[data-ak32-inc]');
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
        : '<div class="row no-icon"><div class="row-body"><div class="row-sub">Chưa có sự cố mẫu — GAP-AK32-04</div></div></div>';
    }
  }

  g.AssetKcht32 = { TYPES, byCode, renderGrid, fillDetail };
})(window);
