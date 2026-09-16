/* Catalog 36 pict — copy web map SSOT + mã mới. Màu QCVN. Cấm DivIcon+filter. */
(function (g) {
  const C = {
    qlRed: '#DC2626', bodyWhite: '#F8FAFC', ink: '#0F172A',
    warnYellow: '#FACC15', warnBorder: '#DC2626', guideBlue: '#2563EB',
    galvanize: '#94A3B8', galvanizeDark: '#64748B', concrete: '#A8A29E',
    studAmber: '#FBBF24', delineatorRed: '#DC2626', speedBumpYellow: '#EAB308',
    routeTeal: '#0F766E', culvertConcrete: '#78716C', earth: '#A16207',
    signalRed: '#DC2626', signalYellow: '#EAB308', signalGreen: '#16A34A'
  };
  const W = C.bodyWhite;
  const INK = C.ink;
  const ST = '#0F172A';

  const META = {
    PAVEMENT: { label: 'Mặt đường', pict: 'pavement', src: 'web KC', needPhoto: false },
    BRIDGE: { label: 'Cầu', pict: 'bridge', src: 'web CAU', needPhoto: false },
    TUNNEL: { label: 'Hầm', pict: 'tunnel', src: 'web CC', needPhoto: false },
    CULVERT_X: { label: 'Cống ngang', pict: 'culvert', src: 'web CN', needPhoto: false },
    DITCH: { label: 'Rãnh / cống dọc', pict: 'ditch', src: 'web RDOC', needPhoto: false },
    UNDERPASS: { label: 'Hầm chui DS', pict: 'underpass', src: 'web CC biến thể', needPhoto: false },
    TRAFFIC_SIGN: { label: 'Biển báo', pict: 'sign', src: 'web BB', needPhoto: false },
    DELINEATOR: { label: 'Cọc tiêu', pict: 'delineator', src: 'web CT', needPhoto: false },
    KM_POST: { label: 'Cột Km', pict: 'km', src: 'web KM', needPhoto: false },
    MEDIAN: { label: 'Dải phân cách', pict: 'median', src: 'web GPC', needPhoto: false },
    ANTI_GLARE: { label: 'Tấm chống chói', pict: 'glare', src: 'new · QCVN Ch.15', needPhoto: false },
    TRAFFIC_ISLAND: { label: 'Đảo giao thông', pict: 'island', src: 'new · vạch 8.1', needPhoto: false },
    ROAD_STUD: { label: 'Đinh phản quang', pict: 'stud', src: 'web DQ', needPhoto: false },
    GUARDRAIL: { label: 'Hộ lan', pict: 'guardrail', src: 'web HL', needPhoto: false },
    ROAD_MARKING: { label: 'Vạch sơn', pict: 'marking', src: 'web VK', needPhoto: false },
    CRASH_CUSHION: { label: 'Thùng giảm chấn', pict: 'cushion', src: 'new · HDPE VN', needPhoto: false },
    CONVEX_MIRROR: { label: 'Gương cầu', pict: 'mirror', src: 'new · QCVN Ch.15', needPhoto: false },
    TRAFFIC_SIGNAL: { label: 'Đèn tín hiệu', pict: 'signal', src: 'new · 3 đèn', needPhoto: false },
    BOUNDARY: { label: 'Mốc lộ giới', pict: 'boundary', src: 'web MLG', needPhoto: false },
    RETAINING: { label: 'Kè / tường chắn', pict: 'revetment', src: 'web KE', needPhoto: false },
    SHOULDER: { label: 'Lề / hàng rào', pict: 'shoulder', src: 'web NL', needPhoto: false },
    LIGHTING: { label: 'Chiếu sáng', pict: 'lamp', src: 'web CS', needPhoto: false },
    GREEN: { label: 'Cây xanh', pict: 'green', src: 'new', needPhoto: false },
    INTERCHANGE: { label: 'Nút giao', pict: 'cross', src: 'web NG', needPhoto: false },
    SLOPE_PROTECT: { label: 'Mái dốc', pict: 'slope', src: 'web MD', needPhoto: false },
    GANTRY_SIGN: { label: 'Giá long môn', pict: 'gantry', src: 'new', needPhoto: false },
    ROW_UTIL: { label: 'HTKT hành lang', pict: 'utility', src: 'web HT', needPhoto: false },
    STATION_HOUSE: { label: 'Nhà hạt', pict: 'station', src: 'web NH', needPhoto: false },
    BUS_STATION: { label: 'Bến xe', pict: 'depot', src: 'web BX', needPhoto: false },
    BUS_STOP: { label: 'Điểm đỗ xe', pict: 'busstop', src: 'web BUS', needPhoto: false },
    RAIL_CROSS: { label: 'Giao đường sắt', pict: 'rail', src: 'new', needPhoto: false },
    LAND_ROW: { label: 'Đất HTĐB', pict: 'land', src: 'new', needPhoto: false },
    EMS_POST: { label: 'Trạm cấp cứu', pict: 'ems', src: 'new', needPhoto: false },
    TOLL: { label: 'Trạm thu phí', pict: 'toll', src: 'new', needPhoto: false },
    FERRY: { label: 'Bến phà', pict: 'ferry', src: 'new', needPhoto: false },
    REST_AREA: { label: 'Trạm dừng nghỉ', pict: 'rest', src: 'new', needPhoto: false }
  };

  const ORDER = Object.keys(META);

  function wrap(body) {
    return '<svg xmlns="http://www.w3.org/2000/svg" width="28" height="34" viewBox="0 0 28 34" fill="none" aria-hidden="true">' + body + '</svg>';
  }

  function pict(key) {
    switch (key) {
      case 'km':
        return wrap('<rect x="7" y="11" width="14" height="16" rx="1" fill="' + W + '" stroke="' + ST + '" stroke-width="1.4"/><path d="M7 11 A7 7 0 0 1 21 11 Z" fill="' + C.qlRed + '" stroke="' + ST + '" stroke-width="1"/><text x="14" y="23" text-anchor="middle" fill="' + INK + '" font-size="7" font-weight="800" font-family="system-ui,sans-serif">Km</text><rect x="12.5" y="27" width="3" height="5" fill="' + C.galvanizeDark + '"/>');
      case 'sign':
        return wrap('<polygon points="14,2 25.5,23.5 2.5,23.5" fill="' + C.warnYellow + '" stroke="' + C.warnBorder + '" stroke-width="2"/><text x="14" y="18" text-anchor="middle" fill="' + INK + '" font-size="11" font-weight="900" font-family="system-ui,sans-serif">!</text><rect x="12.5" y="24" width="3" height="8" fill="' + C.galvanizeDark + '"/>');
      case 'delineator':
        return wrap('<ellipse cx="14" cy="31" rx="5.5" ry="2" fill="#334155"/><rect x="10" y="3" width="8" height="26" rx="1.5" fill="#F1F5F9" stroke="' + ST + '" stroke-width="1.6"/><rect x="10" y="3" width="8" height="6" fill="' + C.delineatorRed + '" stroke="' + ST + '" stroke-width="1.2"/>');
      case 'guardrail':
        return wrap('<path d="M2 11 Q8 4 14 11 Q20 18 26 11" fill="none" stroke="' + C.galvanize + '" stroke-width="3.2" stroke-linecap="round"/><path d="M2 17 Q8 10 14 17 Q20 24 26 17" fill="none" stroke="' + C.galvanizeDark + '" stroke-width="2.4" stroke-linecap="round"/><rect x="6" y="17" width="2.2" height="12" fill="' + C.galvanizeDark + '"/><rect x="19.8" y="17" width="2.2" height="12" fill="' + C.galvanizeDark + '"/>');
      case 'stud':
        return wrap('<ellipse cx="14" cy="18" rx="9" ry="6.5" fill="#1E293B" stroke="' + ST + '" stroke-width="1.2"/><ellipse cx="14" cy="16.5" rx="6.5" ry="4.5" fill="' + C.studAmber + '" stroke="#F59E0B" stroke-width="1"/><ellipse cx="12" cy="14.5" rx="2.2" ry="1.3" fill="#FEF9C3"/>');
      case 'lamp':
        return wrap('<rect x="12.5" y="13" width="3" height="17" fill="' + C.galvanizeDark + '"/><path d="M14 13 C14 13 6.5 11 5.5 7 C8 5 14 6 14 6" fill="none" stroke="' + C.galvanizeDark + '" stroke-width="2" stroke-linecap="round"/><ellipse cx="6" cy="6.5" rx="4" ry="3" fill="#FDE68A" stroke="#CA8A04" stroke-width="1"/>');
      case 'bridge':
        return wrap('<path d="M2 24 L6 16 L22 16 L26 24" fill="' + C.concrete + '" stroke="' + ST + '" stroke-width="1"/><rect x="4" y="14" width="20" height="3" rx="0.5" fill="' + C.galvanizeDark + '"/><path d="M8 14 Q14 7 20 14" fill="none" stroke="' + C.galvanize + '" stroke-width="1.6"/><rect x="7" y="24" width="3" height="7" fill="' + C.galvanizeDark + '"/><rect x="18" y="24" width="3" height="7" fill="' + C.galvanizeDark + '"/>');
      case 'culvert':
        return wrap('<rect x="3" y="19" width="22" height="9" fill="' + C.culvertConcrete + '" stroke="' + ST + '" stroke-width="0.8"/><ellipse cx="14" cy="19" rx="9" ry="7.5" fill="#57534E" stroke="' + C.galvanizeDark + '" stroke-width="1.4"/><ellipse cx="14" cy="19" rx="5" ry="4.2" fill="#292524"/>');
      case 'boundary':
        return wrap('<path d="M8 6 L20 6 L22 28 L6 28 Z" fill="' + C.concrete + '" stroke="' + ST + '" stroke-width="1.3"/><rect x="9" y="8" width="10" height="8" fill="' + W + '" stroke="' + INK + '" stroke-width="0.8"/><text x="14" y="14" text-anchor="middle" fill="' + INK + '" font-size="6" font-weight="800" font-family="system-ui,sans-serif">LG</text>');
      case 'marking':
        return wrap('<rect x="3" y="10" width="22" height="14" rx="1.5" fill="#334155" stroke="' + ST + '" stroke-width="1"/><rect x="5" y="15" width="4.5" height="2.5" fill="' + W + '"/><rect x="12" y="15" width="4.5" height="2.5" fill="' + C.warnYellow + '"/><rect x="19" y="15" width="4" height="2.5" fill="' + W + '"/>');
      case 'slope':
        return wrap('<path d="M2 28 L2 17 L26 8 L26 28 Z" fill="' + C.earth + '" stroke="' + ST + '" stroke-width="1.2"/><path d="M2 17 L26 8 L26 11 L2 20 Z" fill="#D6D3D1" opacity="0.45"/>');
      case 'ditch':
        return wrap('<path d="M2 12 L8 22 L20 22 L26 12" fill="none" stroke="#0E7490" stroke-width="2.4" stroke-linejoin="round"/><path d="M8 22 L20 22 L18 28 L10 28 Z" fill="#155E75"/><path d="M10 24 L18 24" stroke="#67E8F9" stroke-width="1.4"/>');
      case 'shoulder':
        return wrap('<rect x="2" y="14" width="14" height="12" fill="#57534E" stroke="' + ST + '" stroke-width="0.8"/><rect x="16" y="14" width="10" height="12" fill="#A8A29E" stroke="' + ST + '" stroke-width="0.8"/><path d="M16 14 V26" stroke="' + W + '" stroke-width="1.4" stroke-dasharray="2 2"/>');
      case 'pavement':
        return wrap('<rect x="4" y="8" width="20" height="5" fill="#1E293B"/><rect x="4" y="13" width="20" height="5" fill="#57534E"/><rect x="4" y="18" width="20" height="5" fill="#A8A29E"/><rect x="4" y="23" width="20" height="4" fill="#D6D3D1" stroke="' + ST + '" stroke-width="0.6"/>');
      case 'cross':
        return wrap('<polygon points="14,2 25.5,23.5 2.5,23.5" fill="' + C.warnYellow + '" stroke="' + C.warnBorder + '" stroke-width="1.8"/><path d="M14 9 V19 M9 14 H19" fill="none" stroke="' + INK + '" stroke-width="2.2" stroke-linecap="round"/><rect x="12.5" y="24" width="3" height="8" fill="' + C.galvanizeDark + '"/>');
      case 'tunnel':
        return wrap('<path d="M4 28 V14 A10 10 0 0 1 24 14 V28 Z" fill="' + C.galvanizeDark + '" stroke="' + ST + '" stroke-width="1.2"/><path d="M8 28 V16 A6 6 0 0 1 20 16 V28 Z" fill="#0F172A"/><rect x="2" y="27" width="24" height="4" fill="' + C.concrete + '"/>');
      case 'underpass':
        return wrap('<path d="M3 28 V18 A11 8 0 0 1 25 18 V28 Z" fill="' + C.galvanizeDark + '" stroke="' + ST + '" stroke-width="1.2"/><path d="M7 28 V20 A7 5 0 0 1 21 20 V28 Z" fill="#0F172A"/><rect x="11" y="22" width="6" height="6" fill="' + W + '" opacity=".35"/>');
      case 'busstop':
        return wrap('<rect x="6" y="2" width="16" height="19" rx="2" fill="' + C.guideBlue + '" stroke="' + ST + '" stroke-width="1.3"/><rect x="8" y="5.5" width="12" height="8" rx="1" fill="' + W + '"/><circle cx="10.5" cy="12" r="1.4" fill="' + INK + '"/><circle cx="17.5" cy="12" r="1.4" fill="' + INK + '"/><rect x="12.5" y="21" width="3" height="10" fill="' + C.galvanizeDark + '"/>');
      case 'depot':
        return wrap('<path d="M2 15 L14 5 L26 15 Z" fill="' + C.guideBlue + '" stroke="' + ST + '" stroke-width="1"/><rect x="3" y="15" width="22" height="14" fill="#1E40AF" stroke="' + ST + '" stroke-width="1"/><rect x="10" y="19" width="8" height="10" fill="' + W + '"/>');
      case 'revetment':
        return wrap('<path d="M2 28 L8 10 L26 10 L26 28 Z" fill="#B45309" stroke="' + ST + '" stroke-width="1.2"/><circle cx="11" cy="20" r="2.2" fill="#78350F"/><circle cx="17" cy="22" r="2.6" fill="#92400E"/><circle cx="22" cy="18" r="1.9" fill="#78350F"/>');
      case 'utility':
        return wrap('<rect x="5" y="8" width="18" height="18" rx="2" fill="#475569" stroke="' + ST + '" stroke-width="1.3"/><circle cx="14" cy="17" r="5.5" fill="none" stroke="#94A3B8" stroke-width="1.4"/><path d="M14 11.5 V22.5 M8.5 17 H19.5" stroke="#94A3B8" stroke-width="1.1"/>');
      case 'median':
        return wrap('<path d="M7 28 L9 10 L19 10 L21 28 Z" fill="' + C.galvanize + '" stroke="' + C.galvanizeDark + '" stroke-width="1.1"/><path d="M9 8 L19 8 L17 4 L11 4 Z" fill="' + C.warnYellow + '" stroke="' + INK + '" stroke-width="0.8"/><path d="M11 7 L15 5 M13 8 L17 6" stroke="' + INK + '" stroke-width="1"/>');
      case 'station':
        return wrap('<path d="M3 15 L14 5 L25 15 Z" fill="#0F172A" stroke="' + ST + '" stroke-width="1"/><rect x="4" y="15" width="20" height="14" fill="#334155" stroke="' + ST + '" stroke-width="1"/><rect x="11" y="19" width="6" height="10" fill="' + W + '"/><rect x="20" y="6" width="1.5" height="8" fill="' + C.galvanizeDark + '"/><path d="M21.5 6 L26 8 L21.5 10 Z" fill="' + C.qlRed + '"/>');
      case 'glare':
        return wrap('<rect x="4" y="26" width="20" height="4" fill="' + C.galvanizeDark + '"/><rect x="6" y="6" width="2.2" height="20" fill="#16A34A" stroke="' + ST + '" stroke-width=".5"/><rect x="10.2" y="4" width="2.2" height="22" fill="#15803D"/><rect x="14.4" y="6" width="2.2" height="20" fill="#16A34A"/><rect x="18.6" y="4" width="2.2" height="22" fill="#15803D"/>');
      case 'island':
        return wrap('<path d="M14 4 L24 28 L4 28 Z" fill="' + C.concrete + '" stroke="' + ST + '" stroke-width="1.2"/><path d="M14 10 L20 26 L8 26 Z" fill="' + C.warnYellow + '"/><path d="M12 16 L16 14 M11 20 L17 17 M10 24 L18 20" stroke="' + INK + '" stroke-width="1.1"/>');
      case 'cushion':
        return wrap('<ellipse cx="14" cy="30" rx="8" ry="2" fill="#334155" opacity=".4"/><rect x="6" y="6" width="16" height="22" rx="7" fill="#F59E0B" stroke="' + ST + '" stroke-width="1.3"/><rect x="6" y="12" width="16" height="3.2" fill="' + C.qlRed + '"/><rect x="6" y="19" width="16" height="3.2" fill="' + W + '" opacity=".85"/>');
      case 'mirror':
        return wrap('<circle cx="14" cy="12" r="9" fill="#E2E8F0" stroke="' + C.warnYellow + '" stroke-width="2.2"/><circle cx="14" cy="12" r="9" fill="none" stroke="' + ST + '" stroke-width="0.8"/><ellipse cx="11" cy="9" rx="3" ry="2" fill="#FFF" opacity=".7"/><rect x="12.5" y="21" width="3" height="10" fill="' + C.galvanizeDark + '"/>');
      case 'signal':
        return wrap('<rect x="10" y="2" width="8" height="22" rx="2" fill="#1E293B" stroke="' + ST + '" stroke-width="1"/><circle cx="14" cy="7" r="2.2" fill="' + C.signalRed + '"/><circle cx="14" cy="13" r="2.2" fill="' + C.signalYellow + '"/><circle cx="14" cy="19" r="2.2" fill="' + C.signalGreen + '"/><rect x="12.5" y="24" width="3" height="8" fill="' + C.galvanizeDark + '"/>');
      case 'gantry':
        return wrap('<rect x="3" y="26" width="3" height="6" fill="' + C.galvanizeDark + '"/><rect x="22" y="26" width="3" height="6" fill="' + C.galvanizeDark + '"/><rect x="3" y="8" width="3" height="18" fill="' + C.galvanize + '"/><rect x="22" y="8" width="3" height="18" fill="' + C.galvanize + '"/><rect x="2" y="6" width="24" height="3" fill="' + C.galvanizeDark + '"/><rect x="6" y="2" width="7" height="5" rx="0.6" fill="' + C.guideBlue + '"/><rect x="15" y="2" width="7" height="5" rx="0.6" fill="#16A34A"/>');
      case 'green':
        return wrap('<ellipse cx="14" cy="13" rx="10" ry="8" fill="#16A34A" stroke="' + ST + '" stroke-width="1"/><ellipse cx="9" cy="12" rx="4" ry="3" fill="#4ADE80" opacity=".7"/><rect x="12.5" y="18" width="3" height="12" fill="#92400E"/>');
      case 'rail':
        return wrap('<rect x="2" y="22" width="24" height="2.2" fill="#334155"/><rect x="2" y="27" width="24" height="2.2" fill="#334155"/><rect x="6" y="20" width="2" height="11" fill="#78716C"/><rect x="20" y="20" width="2" height="11" fill="#78716C"/><path d="M8 6 L20 16 M20 6 L8 16" stroke="' + C.qlRed + '" stroke-width="2.4" stroke-linecap="round"/><rect x="12.5" y="14" width="3" height="8" fill="' + C.galvanizeDark + '"/>');
      case 'land':
        return wrap('<rect x="3" y="6" width="22" height="22" rx="1" fill="#ECFDF5" stroke="' + C.routeTeal + '" stroke-width="1.4"/><path d="M3 14 H25 M14 6 V28" stroke="' + C.routeTeal + '" stroke-width="0.8" stroke-dasharray="2 2"/><rect x="5" y="16" width="7" height="9" fill="#86EFAC" opacity=".8"/>');
      case 'ems':
        return wrap('<rect x="4" y="8" width="20" height="18" rx="2" fill="' + W + '" stroke="' + C.qlRed + '" stroke-width="1.6"/><path d="M14 11 V23 M8 17 H20" stroke="' + C.qlRed + '" stroke-width="3.2" stroke-linecap="round"/>');
      case 'toll':
        return wrap('<rect x="5" y="10" width="12" height="16" fill="#334155" stroke="' + ST + '" stroke-width="1"/><rect x="7" y="13" width="5" height="5" fill="#93C5FD"/><rect x="16" y="12" width="9" height="2.2" fill="' + C.warnYellow + '" stroke="' + INK + '" stroke-width=".6"/><rect x="16" y="12" width="2" height="14" fill="' + C.galvanizeDark + '"/>');
      case 'ferry':
        return wrap('<path d="M3 20 L7 14 H21 L25 20 Z" fill="' + C.guideBlue + '" stroke="' + ST + '" stroke-width="1"/><rect x="9" y="8" width="10" height="6" fill="#1E40AF"/><path d="M2 24 Q14 30 26 24" fill="none" stroke="#0284C7" stroke-width="2"/>');
      case 'rest':
        return wrap('<rect x="5" y="12" width="18" height="14" fill="#334155" stroke="' + ST + '" stroke-width="1"/><path d="M5 12 L14 5 L23 12 Z" fill="#0F172A"/><rect x="11" y="18" width="6" height="8" fill="' + W + '"/><text x="14" y="11" text-anchor="middle" fill="' + W + '" font-size="6" font-weight="800" font-family="system-ui,sans-serif">P</text>');
      default:
        return wrap('<circle cx="14" cy="16" r="10" fill="#475569" stroke="' + ST + '" stroke-width="1.3"/>');
    }
  }

  function meta(code) {
    return META[code] || { label: code, pict: 'pin', src: 'fallback', needPhoto: false };
  }

  function svg(code) {
    return pict(meta(code).pict);
  }

  function html(code) {
    const m = meta(code);
    return '<span class="ak32-ico" title="' + m.label + '">' + svg(code) + '</span>';
  }

  g.Ak32Icons = { META: META, ORDER: ORDER, svg: svg, html: html, meta: meta, colors: C };
})(typeof window !== 'undefined' ? window : globalThis);
