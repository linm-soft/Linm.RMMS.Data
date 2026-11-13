const pptxgen = require("pptxgenjs");

const pres = new pptxgen();
pres.defineLayout({ name: "WIDE", width: 13.333, height: 7.5 });
pres.layout = "WIDE";
pres.author = "RMMS.VN";
pres.title = "Báo cáo đánh giá tổng thể phần mềm RMMS và khả năng ứng dụng";
pres.subject = "Kỳ 01/10/2026 – 05/11/2026";

function picHolder(name, x, y, w, h) {
  return {
    placeholder: {
      options: { name, type: "pic", x, y, w, h },
      text: "Bấm để chèn ảnh",
    },
  };
}
pres.defineSlideMaster({
  title: "THANG",
  background: { color: "F4F6F8" },
  objects: [
    picHolder("tuyen", 8.15, 1.22, 4.7, 2.45),
    picHolder("canbo", 8.15, 4.18, 4.7, 2.45),
  ],
});
pres.defineSlideMaster({
  title: "ANH",
  background: { color: "F4F6F8" },
  objects: [
    picHolder("td", 0.42, 1.35, 6.15, 2.4),
    picHolder("tk", 6.75, 1.35, 6.15, 2.4),
    picHolder("oga", 0.42, 4.2, 6.15, 2.4),
    picHolder("dv", 6.75, 4.2, 6.15, 2.4),
  ],
});

const NAVY = "0E3A5B";
const GOLD = "8D6A2F";
const TEAL = "0F6E56";
const INK = "1C2430";
const MUTED = "5C6B7A";
const PAPER = "F4F6F8";
const WHITE = "FFFFFF";
const LINE = "D5DDE6";
const CREAM = "FBF6EE";
const TOTAL = 16;
const FONT = "Times New Roman";
const BODY = "Calibri";

function bar(slide, color) {
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0, y: 0, w: 0.1, h: 7.5,
    fill: { color: color || GOLD },
  });
}

function footer(slide, n, dark) {
  slide.addText("RMMS.VN", {
    x: 0.42, y: 7.12, w: 2.4, h: 0.26,
    fontFace: BODY, fontSize: 12, bold: true, margin: 0,
    color: dark ? "E7D7B1" : NAVY,
  });
  slide.addText(n + "/" + TOTAL, {
    x: 11.2, y: 7.12, w: 1.7, h: 0.26,
    fontFace: BODY, fontSize: 12, align: "right", margin: 0,
    color: dark ? "E7D7B1" : MUTED,
  });
}

function phone(slide, path, x, y, w, h) {
  slide.addShape(pres.shapes.ROUNDED_RECTANGLE, {
    x: x - 0.05, y: y - 0.05, w: w + 0.1, h: h + 0.1,
    fill: { color: WHITE },
    line: { color: NAVY, width: 1.25 },
    rectRadius: 0.06,
  });
  slide.addImage({ path, x, y, w, h });
}

function title(slide, text) {
  slide.addText(text, {
    x: 0.42, y: 0.28, w: 12.4, h: 0.48,
    fontFace: FONT, fontSize: 28, bold: true, color: NAVY, margin: 0,
  });
}

function th(text, align) {
  return {
    text,
    options: {
      fill: { color: NAVY }, color: WHITE, bold: true,
      align: align || "center", valign: "middle", margin: 5,
    },
  };
}
function td(text, align, fill, bold) {
  return {
    text: String(text),
    options: {
      fill: { color: fill || WHITE }, color: INK, bold: !!bold,
      align: align || "center", valign: "middle", margin: 4,
    },
  };
}

const tableBase = {
  fontFace: BODY,
  fontSize: 13,
  color: INK,
  border: { pt: 0.5, color: LINE },
  valign: "middle",
};

function card(slide, x, y, w, h, accent) {
  slide.addShape(pres.shapes.RECTANGLE, {
    x, y, w, h,
    fill: { color: WHITE },
    shadow: { type: "outer", color: "0E3A5B", blur: 8, offset: 2, angle: 135, opacity: 0.08 },
  });
  slide.addShape(pres.shapes.RECTANGLE, {
    x, y, w: 0.08, h,
    fill: { color: accent || NAVY },
  });
}

// 1. Bìa
{
  const s = pres.addSlide();
  s.background = { color: NAVY };
  bar(s, GOLD);
  s.addText("RMMS.VN", {
    x: 0.5, y: 0.42, w: 4, h: 0.32,
    fontFace: BODY, fontSize: 14, bold: true, color: "E7D7B1", margin: 0, charSpacing: 1.2,
  });
  s.addText("Kính báo cáo lãnh đạo Tổng cục Đường bộ Việt Nam", {
    x: 0.5, y: 1.55, w: 12, h: 0.36,
    fontFace: BODY, fontSize: 16, color: "E7D7B1", margin: 0,
  });
  s.addText("Báo cáo đánh giá tổng thể phần mềm hệ thống bảo trì kết cấu hạ tầng đường bộ (RMMS) và khả năng ứng dụng", {
    x: 0.5, y: 2.05, w: 12.2, h: 1.7,
    fontFace: FONT, fontSize: 32, bold: true, color: WHITE, margin: 0,
  });
  s.addText("Kỳ đánh giá từ ngày 01 tháng 10 năm 2026 đến ngày 05 tháng 11 năm 2026", {
    x: 0.5, y: 4.0, w: 12, h: 0.36,
    fontFace: BODY, fontSize: 18, color: WHITE, margin: 0,
  });
  const metas = [
    ["Phạm vi", "Tuần đường, tuần kiểm, giao việc, nhận diện hư hỏng và biển báo"],
    ["Địa bàn số liệu", "Khu Quản lý đường bộ I"],
    ["Ngày báo cáo", "05/11/2026"],
  ];
  metas.forEach((m, i) => {
    const x = 0.5 + i * 4.15;
    s.addText(m[0], {
      x, y: 5.15, w: 3.9, h: 0.26,
      fontFace: BODY, fontSize: 12, color: "E7D7B1", margin: 0,
    });
    s.addText(m[1], {
      x, y: 5.42, w: 3.9, h: 0.7,
      fontFace: BODY, fontSize: 15, color: WHITE, margin: 0,
    });
  });
  footer(s, 1, true);
}

// 2. Phạm vi
{
  const s = pres.addSlide();
  s.background = { color: PAPER };
  bar(s);
  title(s, "Phạm vi đánh giá");
  s.addText("Mức độ ứng dụng xét theo số liệu vận hành kỳ này và mức độ sẵn sàng để đưa vào sử dụng.", {
    x: 0.42, y: 0.86, w: 12.4, h: 0.36,
    fontFace: BODY, fontSize: 16, color: INK, margin: 0,
  });
  const items = [
    [NAVY, "676", "Ca tuần đường", "70 cán bộ trong cả kỳ. 675 ca đã hoàn thành."],
    [TEAL, "31", "Ca tuần kiểm", "Đủ các bước trên phần mềm. 24 ca đang thực hiện."],
    [GOLD, "Phiếu", "Giao việc", "Đã có phiếu giao. Việc phát sinh sẽ thực hiện trong thời gian tới."],
    ["8A4B08", "Ổ gà", "Nhận diện hiện trường", "Đang sử dụng. Biển báo chờ ảnh của đơn vị."],
  ];
  items.forEach((it, i) => {
    const x = 0.42 + i * 3.2;
    card(s, x, 1.55, 3.02, 3.55, it[0]);
    s.addText(it[1], {
      x: x + 0.24, y: 1.78, w: 2.6, h: 0.95,
      fontFace: FONT, fontSize: 40, bold: true, color: it[0], margin: 0,
    });
    s.addText(it[2], {
      x: x + 0.24, y: 2.8, w: 2.6, h: 0.7,
      fontFace: FONT, fontSize: 18, bold: true, color: NAVY, margin: 0,
    });
    s.addText(it[3], {
      x: x + 0.24, y: 3.55, w: 2.6, h: 1.2,
      fontFace: BODY, fontSize: 15, color: INK, margin: 0,
    });
  });
  footer(s, 2);
}

// 3. Tuần đường
{
  const s = pres.addSlide();
  s.background = { color: PAPER };
  bar(s);
  title(s, "1. Công tác tuần đường");
  card(s, 0.42, 1.0, 3.7, 1.7, NAVY);
  s.addText("TỔNG SỐ CA", {
    x: 0.66, y: 1.12, w: 3.3, h: 0.26,
    fontFace: BODY, fontSize: 12, color: MUTED, margin: 0,
  });
  s.addText("676", {
    x: 0.66, y: 1.38, w: 3.3, h: 0.72,
    fontFace: FONT, fontSize: 42, bold: true, color: NAVY, margin: 0,
  });
  s.addText("Tháng 10: 547 ca    ·    01–05/11: 129 ca", {
    x: 0.66, y: 2.18, w: 3.3, h: 0.34,
    fontFace: BODY, fontSize: 13, color: INK, margin: 0,
  });
  card(s, 0.42, 2.88, 3.7, 1.7, GOLD);
  s.addText("NGƯỜI CAO NHẤT MỘT NGÀY", {
    x: 0.66, y: 3.0, w: 3.3, h: 0.26,
    fontFace: BODY, fontSize: 12, color: MUTED, margin: 0,
  });
  s.addText("36", {
    x: 0.66, y: 3.26, w: 3.3, h: 0.72,
    fontFace: FONT, fontSize: 42, bold: true, color: GOLD, margin: 0,
  });
  s.addText("Ngày 30/10/2026", {
    x: 0.66, y: 4.06, w: 3.3, h: 0.32,
    fontFace: BODY, fontSize: 15, color: INK, margin: 0,
  });
  const rows = [
    [th("Mốc", "left"), th("Ngày"), th("Số ca"), th("Số người")],
    [td("Ngày đầu kỳ", "left"), td("01/10/2026"), td("0"), td("0")],
    [td("Ca đầu tiên", "left", PAPER), td("05/10/2026", "center", PAPER), td("4", "center", PAPER), td("3", "center", PAPER)],
    [td("Cao nhất", "left", CREAM, true), td("30/10/2026", "center", CREAM, true), td("44", "center", CREAM, true), td("36", "center", CREAM, true)],
    [td("Trước ngày báo cáo", "left"), td("04/11/2026"), td("36"), td("31")],
    [td("Ngày cuối kỳ", "left", PAPER), td("05/11/2026", "center", PAPER), td("1", "center", PAPER), td("1", "center", PAPER)],
  ];
  s.addTable(rows, {
    ...tableBase,
    x: 4.35, y: 1.0, w: 8.5, h: 3.58,
    colW: [2.5, 2.2, 1.9, 1.9],
  });
  s.addText("Trong 676 ca có 675 ca đã hoàn thành và 1 ca đang thực hiện ngày 05/11 trên cao tốc Bắc - Nam phía Đông.", {
    x: 0.42, y: 4.9, w: 12.4, h: 0.7,
    fontFace: BODY, fontSize: 16, color: INK, margin: 0,
  });
  footer(s, 3);
}

// 4. Tuần kiểm
{
  const s = pres.addSlide();
  s.background = { color: PAPER };
  bar(s, TEAL);
  title(s, "2. Công tác tuần kiểm");
  card(s, 0.42, 0.95, 2.9, 1.45, TEAL);
  s.addText("31", {
    x: 0.64, y: 1.05, w: 2.5, h: 0.62,
    fontFace: FONT, fontSize: 36, bold: true, color: TEAL, margin: 0,
  });
  s.addText("Ca trong kỳ\nTháng 10: 28  ·  01–05/11: 3", {
    x: 0.64, y: 1.68, w: 2.5, h: 0.55,
    fontFace: BODY, fontSize: 13, color: INK, margin: 0,
  });
  card(s, 3.5, 0.95, 2.9, 1.45, GOLD);
  s.addText("5", {
    x: 3.72, y: 1.05, w: 2.5, h: 0.62,
    fontFace: FONT, fontSize: 36, bold: true, color: GOLD, margin: 0,
  });
  s.addText("Người cao nhất một ngày\nNgày 05/10. Ngày 05/11 chưa có ca.", {
    x: 3.72, y: 1.68, w: 2.5, h: 0.55,
    fontFace: BODY, fontSize: 13, color: INK, margin: 0,
  });
  card(s, 6.58, 0.95, 6.3, 1.45, NAVY);
  s.addText("24 ca đang thực hiện  ·  7 ca đã hoàn thành", {
    x: 6.82, y: 1.1, w: 5.85, h: 0.4,
    fontFace: FONT, fontSize: 18, bold: true, color: NAVY, margin: 0,
  });
  s.addText("Cao nhất 5 ca ngày 05/10. Ngày 04/11 còn 1 ca.", {
    x: 6.82, y: 1.58, w: 5.85, h: 0.5,
    fontFace: BODY, fontSize: 15, color: INK, margin: 0,
  });
  card(s, 0.42, 2.62, 6.2, 3.85, GOLD);
  s.addText("Đang hoàn thiện", {
    x: 0.66, y: 2.78, w: 5.7, h: 0.32,
    fontFace: BODY, fontSize: 14, bold: true, color: GOLD, margin: 0,
  });
  s.addText("Đã có đủ các bước: ghi sự cố theo đợt, lập phiếu, đối chiếu, xác nhận đạt hoặc chưa đạt, sổ tuần kiểm hai trang, ký cuối tuần, báo cáo đọc phiếu và đọc sổ.\n\nViệc ghi sổ trên cơ sở dữ liệu đang hoàn thiện để đưa vào áp dụng.", {
    x: 0.66, y: 3.2, w: 5.7, h: 3.2,
    fontFace: BODY, fontSize: 16, color: INK, margin: 0,
  });
  card(s, 6.82, 2.62, 6.05, 3.85, TEAL);
  s.addText("Đủ điều kiện đánh giá trong tháng 11", {
    x: 7.06, y: 2.78, w: 5.6, h: 0.55,
    fontFace: BODY, fontSize: 14, bold: true, color: TEAL, margin: 0,
  });
  s.addText("Đưa vào sử dụng để đánh giá, hiệu chỉnh, cùng với việc áp dụng ghi sổ và rà soát 24 ca còn đang thực hiện.\n\nChấm 100 điểm và tạm tính chi phí cho sửa chữa sẽ thực hiện trong thời gian tới.", {
    x: 7.06, y: 3.45, w: 5.6, h: 2.9,
    fontFace: BODY, fontSize: 16, color: INK, margin: 0,
  });
  footer(s, 4);
}

// 5. Thống kê tháng qua
{
  const s = pres.addSlide();
  s.background = { color: PAPER };
  bar(s);
  title(s, "Thống kê một tháng qua");
  s.addText("Nội dung đã thực hiện", {
    x: 0.42, y: 0.9, w: 6.85, h: 0.3,
    fontFace: FONT, fontSize: 16, bold: true, color: NAVY, margin: 0,
  });
  s.addText("Từ 01/10 đến 05/11: 676 ca tuần đường (tháng 10 là 547 ca) và 31 ca tuần kiểm. Ngày cao nhất 30/10 có 44 ca tuần đường.", {
    x: 0.42, y: 1.22, w: 6.85, h: 0.7,
    fontFace: BODY, fontSize: 15, color: INK, margin: 0,
  });
  s.addText("Tuyến thực hiện nhiều nhất", {
    x: 0.42, y: 2.05, w: 6.85, h: 0.3,
    fontFace: FONT, fontSize: 16, bold: true, color: NAVY, margin: 0,
  });
  s.addText("Cao tốc Bắc - Nam phía Đông: 256 ca tuần đường, cao hơn Đường Hồ Chí Minh (140 ca) và Quốc lộ 1 (107 ca). Tuần kiểm nhiều nhất trên Quốc lộ 1, 9 ca.", {
    x: 0.42, y: 2.38, w: 6.85, h: 0.75,
    fontFace: BODY, fontSize: 15, color: INK, margin: 0,
  });
  s.addText("Mức độ cán bộ tham gia", {
    x: 0.42, y: 3.25, w: 6.85, h: 0.3,
    fontFace: FONT, fontSize: 16, bold: true, color: NAVY, margin: 0,
  });
  s.addText("70 người đã tuần đường trong kỳ, tập trung ở Văn phòng I.4 với 46 người. Trong ngày: 3 người ngày 05/10, 36 người ngày 30/10, 31 người ngày 04/11.", {
    x: 0.42, y: 3.58, w: 6.85, h: 0.8,
    fontFace: BODY, fontSize: 15, color: INK, margin: 0,
  });
  s.addText("Ca trên tuyến trong kỳ", {
    x: 7.5, y: 0.9, w: 2.7, h: 0.28,
    fontFace: BODY, fontSize: 12, color: NAVY, margin: 0,
  });
  s.addText("Cán bộ đang tuần đường", {
    x: 10.3, y: 0.9, w: 2.7, h: 0.28,
    fontFace: BODY, fontSize: 12, color: NAVY, margin: 0,
  });
  phone(s, "capture/tuan-duong.png", 7.5, 1.28, 2.55, 4.02);
  phone(s, "capture/can-bo.png", 10.3, 1.28, 2.55, 4.02);
  footer(s, 5);
}

// 5. Khu và văn phòng
{
  const s = pres.addSlide();
  s.background = { color: PAPER };
  bar(s);
  title(s, "3. Theo khu và văn phòng");
  s.addText("Ca tuần đường là lần cán bộ có mặt trên tuyến. Số người là số cán bộ trong cả kỳ, mỗi người tính một lần.", {
    x: 0.42, y: 0.82, w: 12.4, h: 0.32,
    fontFace: BODY, fontSize: 14, color: MUTED, margin: 0,
  });
  const khu = [
    [th("Khu", "left"), th("Ca tuần đường"), th("Số người")],
    [td("Khu Quản lý đường bộ I", "left"), td("625"), td("63")],
    [td("Dữ liệu thử nghiệm", "left", CREAM), td("51", "center", CREAM), td("7", "center", CREAM)],
    [td("Cộng", "left", "E7EEF5", true), td("676", "center", "E7EEF5", true), td("70", "center", "E7EEF5", true)],
  ];
  s.addTable(khu, { ...tableBase, x: 0.42, y: 1.25, w: 6.15, colW: [3.15, 1.6, 1.4] });
  const vp = [
    [th("Văn phòng", "left"), th("Ca"), th("Người"), th("Tuần kiểm")],
    [td("Văn phòng I.4", "left"), td("571"), td("46"), td("12")],
    [td("Văn phòng I.1", "left", PAPER), td("42", "center", PAPER), td("13", "center", PAPER), td("9", "center", PAPER)],
    [td("Văn phòng I.2", "left"), td("11"), td("3"), td("2")],
    [td("Văn phòng I.3", "left", PAPER), td("1", "center", PAPER), td("1", "center", PAPER), td("0", "center", PAPER)],
    [td("Dữ liệu thử nghiệm", "left", CREAM), td("51", "center", CREAM), td("7", "center", CREAM), td("8", "center", CREAM)],
    [td("Cộng", "left", "E7EEF5", true), td("676", "center", "E7EEF5", true), td("70", "center", "E7EEF5", true), td("31", "center", "E7EEF5", true)],
  ];
  s.addTable(vp, { ...tableBase, x: 6.8, y: 1.25, w: 6.1, colW: [2.5, 1.15, 1.2, 1.25] });
  s.addText("51 ca tuần đường chưa gắn khu là dữ liệu thử nghiệm, giữ để đối chiếu tổng 676 ca. Văn phòng Quản lý đường bộ I.4 có 571 ca và 46 người.", {
    x: 0.42, y: 6.35, w: 12.4, h: 0.6,
    fontFace: BODY, fontSize: 15, color: INK, margin: 0,
  });
  footer(s, 6);
}

// 6. Đơn vị
{
  const s = pres.addSlide();
  s.background = { color: PAPER };
  bar(s);
  title(s, "Đơn vị thực hiện tại Khu Quản lý đường bộ I");
  const rows = [
    [th("Văn phòng", "left"), th("Đơn vị", "left"), th("Ca tuần đường"), th("Số người"), th("Ca tuần kiểm")],
    [td("I.4", "left"), td("Công ty đầu tư hạ tầng giao thông Đèo Cả", "left"), td("146"), td("14"), td("0")],
    [td("I.4", "left", PAPER), td("Công ty cổ phần Quản lý và xây dựng đường bộ 470", "left", PAPER), td("140", "center", PAPER), td("8", "center", PAPER), td("0", "center", PAPER)],
    [td("I.4", "left"), td("Công ty cổ phần Vận hành và bảo trì đường cao tốc Việt Nam", "left"), td("128"), td("7"), td("1")],
    [td("I.4", "left", PAPER), td("Công ty cổ phần Quản lý và xây dựng đường bộ 472", "left", PAPER), td("98", "center", PAPER), td("7", "center", PAPER), td("0", "center", PAPER)],
    [td("I.4", "left"), td("Tổng công ty Phát triển hạ tầng và Đầu tư tài chính Việt Nam", "left"), td("50"), td("6"), td("1")],
    [td("I.4", "left", PAPER), td("Văn phòng Quản lý đường bộ I.4", "left", PAPER), td("9", "center", PAPER), td("4", "center", PAPER), td("10", "center", PAPER)],
    [td("I.1", "left"), td("Đoạn Tuần Giáo – Mường Lay", "left"), td("14"), td("2"), td("0")],
    [td("I.1", "left", PAPER), td("Công ty cổ phần số 909 tại Văn phòng I.1", "left", PAPER), td("12", "center", PAPER), td("3", "center", PAPER), td("0", "center", PAPER)],
    [td("I.2", "left"), td("Công ty cổ phần số 909 tại Văn phòng I.2", "left"), td("10"), td("2"), td("0")],
  ];
  s.addTable(rows, {
    ...tableBase, fontSize: 12,
    x: 0.42, y: 0.95, w: 12.5, colW: [1.3, 7.2, 1.5, 1.25, 1.25],
  });
  s.addText("Công ty cổ phần số 909 được ghi ở hai văn phòng, nên giữ hai dòng. Các đội và đoạn còn lại mỗi đơn vị từ 1 đến 6 ca tuần đường.", {
    x: 0.42, y: 6.45, w: 12.4, h: 0.5,
    fontFace: BODY, fontSize: 14, color: INK, margin: 0,
  });
  footer(s, 7);
}

// 8. Giao việc
{
  const s = pres.addSlide();
  s.background = { color: PAPER };
  bar(s);
  title(s, "4. Giao việc và chấm điểm theo thời hạn");
  s.addText("Trong kỳ chưa phát sinh việc giao. Phiếu giao đã mở cho Hạt trưởng và Hạt phó. Thời hạn lấy theo Thông tư số 41/2024/TT-BGTVT, Phụ lục IV.", {
    x: 0.42, y: 0.88, w: 12.4, h: 0.55,
    fontFace: BODY, fontSize: 16, color: INK, margin: 0,
  });
  const score = [
    [th("Kết quả", "left"), th("So với hạn", "left"), th("Ghi trên phiếu", "left")],
    [td("Xác nhận đạt", "left"), td("Trước hoặc đúng hạn", "left"), td("Đạt, trong hạn", "left")],
    [td("Xác nhận đạt", "left", PAPER), td("Sau hạn", "left", PAPER), td("Đạt, quá hạn", "left", PAPER)],
    [td("Ghi chưa đạt", "left"), td("Còn hạn", "left"), td("Chưa đạt, giữ hạn cũ", "left")],
    [td("Ghi chưa đạt", "left", PAPER), td("Đã quá hạn", "left", PAPER), td("Chưa đạt, quá hạn", "left", PAPER)],
  ];
  s.addTable(score, { ...tableBase, x: 0.42, y: 1.6, w: 8.1, colW: [2.4, 2.9, 2.8] });
  card(s, 8.75, 1.6, 4.15, 3.35, GOLD);
  s.addText("Sẽ thực hiện trong thời gian tới", {
    x: 8.98, y: 1.78, w: 3.75, h: 0.7,
    fontFace: FONT, fontSize: 16, bold: true, color: NAVY, margin: 0,
  });
  s.addText("Chấm 100 điểm trên màn hình và tạm tính chi phí cho sửa chữa, khi đủ căn cứ trong hồ sơ.", {
    x: 8.98, y: 2.55, w: 3.75, h: 2.0,
    fontFace: BODY, fontSize: 15, color: INK, margin: 0,
  });
  footer(s, 8);
}

// 9. Đối chiếu Thông tư 41
{
  const s = pres.addSlide();
  s.background = { color: PAPER };
  bar(s);
  title(s, "Phần mềm đã làm được so với Thông tư 41");
  card(s, 0.42, 0.95, 6.2, 4.15, NAVY);
  s.addText("Tuần đường", {
    x: 0.66, y: 1.1, w: 5.7, h: 0.34,
    fontFace: FONT, fontSize: 20, bold: true, color: NAVY, margin: 0,
  });
  s.addText("Đã ghi nhận ca có mặt trên tuyến, theo ngày, theo tuyến, theo đơn vị và theo cán bộ.\n\nKỳ này có 676 ca, 70 người, tập trung tại Khu Quản lý đường bộ I.\n\nTuyến thực hiện nhiều nhất là cao tốc Bắc - Nam phía Đông, 256 ca.", {
    x: 0.66, y: 1.55, w: 5.7, h: 3.2,
    fontFace: BODY, fontSize: 16, color: INK, margin: 0,
  });
  card(s, 6.82, 0.95, 6.05, 4.15, TEAL);
  s.addText("Tuần kiểm", {
    x: 7.06, y: 1.1, w: 5.6, h: 0.34,
    fontFace: FONT, fontSize: 20, bold: true, color: TEAL, margin: 0,
  });
  s.addText("Đã có sự cố theo đợt, phiếu, đối chiếu, xác nhận đạt hoặc chưa đạt, sổ hai trang, ký cuối tuần và báo cáo đọc phiếu, đọc sổ.\n\nĐã ghi được kết quả so với hạn giao theo Phụ lục IV.\n\nKỳ này có 31 ca, trong đó 24 ca đang thực hiện.", {
    x: 7.06, y: 1.55, w: 5.6, h: 3.2,
    fontFace: BODY, fontSize: 16, color: INK, margin: 0,
  });
  s.addText("Sẽ thực hiện trong thời gian tới: áp dụng ghi sổ trên cơ sở dữ liệu, chấm điểm trên màn hình, tạm tính chi phí cho sửa chữa, và mở giao việc sau khi chốt chức danh lãnh đạo đơn vị.", {
    x: 0.42, y: 5.3, w: 12.4, h: 0.85,
    fontFace: BODY, fontSize: 16, color: INK, margin: 0,
  });
  footer(s, 9);
}

// 8. Nhận diện
{
  const s = pres.addSlide();
  s.background = { color: PAPER };
  bar(s);
  title(s, "5. Nhận diện hư hỏng và biển báo");
  const blocks = [
    [TEAL, "Áp dụng được", "Ổ gà", "Đã huấn luyện và đang sử dụng tại hiện trường. Tiếp tục nhận diện riêng, tách khỏi biển báo."],
    [GOLD, "Huấn luyện lại", "Biển báo", "Đang nhận tên biển theo bộ 82 loại. Ảnh huấn luyện chưa phải ảnh của Bộ. Huấn luyện lại bằng ảnh đơn vị chụp tại hiện trường."],
    [NAVY, "Chờ ảnh hiện trường", "Hư hỏng khác", "Chưa huấn luyện: nứt, chảy nhựa, bong bật, lún, vá, hư mép, sạt lở. Thực hiện khi đã có ảnh của đơn vị."],
  ];
  blocks.forEach((b, i) => {
    const y = 0.98 + i * 1.9;
    card(s, 0.42, y, 12.5, 1.75, b[0]);
    s.addText(b[1], {
      x: 0.7, y: y + 0.16, w: 3.2, h: 0.3,
      fontFace: BODY, fontSize: 13, bold: true, color: b[0], margin: 0,
    });
    s.addText(b[2], {
      x: 0.7, y: y + 0.5, w: 3.2, h: 0.95,
      fontFace: FONT, fontSize: 26, bold: true, color: NAVY, margin: 0, valign: "top",
    });
    s.addText(b[3], {
      x: 4.2, y: y + 0.28, w: 8.4, h: 1.25,
      fontFace: BODY, fontSize: 16, color: INK, margin: 0, valign: "middle",
    });
  });
  footer(s, 10);
}

// 9. Tiêu chí
{
  const s = pres.addSlide();
  s.background = { color: PAPER };
  bar(s);
  title(s, "7. Đánh giá theo tiêu chí");
  const rows = [
    [th("Tiêu chí", "left"), th("Kết quả kỳ này", "left"), th("Khả năng ứng dụng", "left")],
    [td("Tuần đường", "left"), td("676 ca, 70 người; 675 ca hoàn thành", "left"), td("Áp dụng được tại Khu I", "left")],
    [td("Tuần kiểm", "left", PAPER), td("31 ca; 24 ca đang thực hiện", "left", PAPER), td("Đánh giá, hiệu chỉnh trong tháng 11", "left", PAPER)],
    [td("Giao việc", "left"), td("Đã có phiếu; chưa phát sinh việc", "left"), td("Sau khi chốt chức danh lãnh đạo", "left")],
    [td("Chấm theo thời hạn", "left", PAPER), td("Đã ghi đạt, quá hạn trên phiếu", "left", PAPER), td("Sẽ thực hiện trong thời gian tới", "left", PAPER)],
    [td("Nhận diện ổ gà", "left"), td("Đang sử dụng tại hiện trường", "left"), td("Áp dụng được", "left")],
    [td("Nhận diện biển báo", "left", PAPER), td("Bộ 82 loại, chưa phải ảnh của Bộ", "left", PAPER), td("Huấn luyện lại trước khi áp dụng", "left", PAPER)],
    [td("Hư hỏng khác", "left"), td("Chưa huấn luyện", "left"), td("Khi đã có ảnh hiện trường", "left")],
    [td("Khu II, III, IV", "left", PAPER), td("Kỳ này có số liệu tại Khu I", "left", PAPER), td("Triển khai tuần đường trong tháng 11", "left", PAPER)],
  ];
  s.addTable(rows, {
    ...tableBase, fontSize: 14,
    x: 0.42, y: 0.95, w: 12.5, colW: [2.5, 5.3, 4.7],
  });
  footer(s, 11);
}

// 10. Kết luận
{
  const s = pres.addSlide();
  s.background = { color: NAVY };
  bar(s, GOLD);
  s.addText("8. Kết luận khả năng ứng dụng", {
    x: 0.48, y: 0.32, w: 12, h: 0.48,
    fontFace: FONT, fontSize: 28, bold: true, color: WHITE, margin: 0,
  });
  const lines = [
    ["Áp dụng được", "Tuần đường tại Khu Quản lý đường bộ I, và nhận diện ổ gà tại hiện trường."],
    ["Đưa vào đánh giá tháng 11", "Tuần kiểm và giao việc, cùng việc áp dụng ghi sổ và chốt chức danh."],
    ["Chờ ảnh của đơn vị", "Nhận diện biển báo và các hư hỏng khác."],
    ["Sẽ thực hiện trong thời gian tới", "Tạm tính chi phí cho sửa chữa, khi đủ căn cứ trong hồ sơ và màn hình chấm điểm."],
  ];
  lines.forEach((ln, i) => {
    const y = 1.15 + i * 1.35;
    s.addShape(pres.shapes.RECTANGLE, {
      x: 0.48, y, w: 12.3, h: 1.18,
      fill: { color: "164E78" },
    });
    s.addShape(pres.shapes.RECTANGLE, {
      x: 0.48, y, w: 0.08, h: 1.18,
      fill: { color: GOLD },
    });
    s.addText(ln[0], {
      x: 0.78, y: y + 0.12, w: 11.7, h: 0.34,
      fontFace: FONT, fontSize: 18, bold: true, color: "E7D7B1", margin: 0,
    });
    s.addText(ln[1], {
      x: 0.78, y: y + 0.5, w: 11.7, h: 0.5,
      fontFace: BODY, fontSize: 16, color: WHITE, margin: 0,
    });
  });
  footer(s, 12, true);
}

// 11. Kiến nghị
{
  const s = pres.addSlide();
  s.background = { color: PAPER };
  bar(s);
  title(s, "9. Kiến nghị");
  const items = [
    ["01", "Tiếp tục tuần đường tại Khu I", "Cho tiếp tục sử dụng tuần đường tại Khu Quản lý đường bộ I. Rà soát 24 ca tuần kiểm còn đang thực hiện."],
    ["02", "Đánh giá tuần kiểm và giao việc", "Đưa vào đánh giá, hiệu chỉnh trong tháng 11. Tuần kiểm gắn với ghi sổ. Giao việc gắn với việc chốt chức danh; hiện mở cho Hạt trưởng và Hạt phó."],
    ["03", "Nhân rộng Khu II, III và IV", "Triển khai tuần đường song song. Mốc Khu I của kỳ này: 676 ca tuần đường và 31 ca tuần kiểm. Việc giao chưa phát sinh trong kỳ."],
    ["04", "Bộ ảnh hiện trường", "Cán bộ tuần đường, tuần kiểm phối hợp sinh viên Trường Đại học Công nghiệp. Ảnh thuộc Bộ. Bổ sung hướng dẫn chụp ảnh trước khi mở hư hỏng chưa huấn luyện."],
  ];
  items.forEach((it, i) => {
    const col = i % 2;
    const row = Math.floor(i / 2);
    const x = 0.42 + col * 6.4;
    const y = 1.0 + row * 2.85;
    card(s, x, y, 6.15, 2.65, GOLD);
    s.addText(it[0], {
      x: x + 0.24, y: y + 0.16, w: 1.2, h: 0.42,
      fontFace: FONT, fontSize: 22, bold: true, color: GOLD, margin: 0,
    });
    s.addText(it[1], {
      x: x + 1.4, y: y + 0.2, w: 4.5, h: 0.42,
      fontFace: FONT, fontSize: 16, bold: true, color: NAVY, margin: 0,
    });
    s.addText(it[2], {
      x: x + 0.24, y: y + 0.78, w: 5.7, h: 1.65,
      fontFace: BODY, fontSize: 15, color: INK, margin: 0,
    });
  });
  footer(s, 13);
}

// 12. Tuyến
{
  const s = pres.addSlide();
  s.background = { color: PAPER };
  bar(s);
  title(s, "Ca tuần đường theo tuyến chính");
  s.addText("Thống kê theo tên tuyến. Việc chia khu và văn phòng lấy theo đơn vị của cán bộ thực hiện.", {
    x: 0.42, y: 0.82, w: 12.4, h: 0.3,
    fontFace: BODY, fontSize: 14, color: MUTED, margin: 0,
  });
  const routes = [
    ["Cao tốc Bắc - Nam phía Đông", "256"],
    ["Đường Hồ Chí Minh", "140"],
    ["Quốc lộ 1", "107"],
    ["Cao tốc Mai Sơn – Quốc lộ 45", "57"],
    ["Quốc lộ 6", "38"],
    ["Đường Hồ Chí Minh (Thanh Hóa)", "32"],
    ["Cao tốc Nghi Sơn – Diễn Châu", "14"],
    ["Quốc lộ 1B", "10"],
  ];
  const max = 256;
  routes.forEach((r, i) => {
    const y = 1.28 + i * 0.62;
    s.addText(r[0], {
      x: 0.42, y, w: 4.3, h: 0.4,
      fontFace: BODY, fontSize: 15, color: INK, margin: 0, valign: "middle",
    });
    const w = Math.max(0.15, (Number(r[1]) / max) * 6.4);
    s.addShape(pres.shapes.RECTANGLE, {
      x: 4.85, y: y + 0.08, w, h: 0.28,
      fill: { color: i === 0 ? NAVY : "164E78" },
    });
    s.addText(r[1] + " ca", {
      x: 4.85 + w + 0.12, y, w: 1.3, h: 0.4,
      fontFace: BODY, fontSize: 14, bold: true, color: NAVY, margin: 0, valign: "middle",
    });
  });
  s.addText("Cộng 676 ca. Các tuyến còn lại mỗi tuyến từ 1 đến 9 ca. Tuần kiểm 31 ca, nhiều nhất trên Quốc lộ 1 với 9 ca.", {
    x: 0.42, y: 6.4, w: 12.4, h: 0.5,
    fontFace: BODY, fontSize: 14, color: INK, margin: 0,
  });
  footer(s, 14);
}

// 15. Ảnh web di động, lọc đúng kỳ
{
  const s = pres.addSlide();
  s.background = { color: PAPER };
  bar(s);
  title(s, "Hình ảnh trên web di động");
  s.addText("Chụp tại rmms.vn. Nhật ký, vấn đề và công việc đang lọc 01/10/2026 – 05/11/2026.", {
    x: 0.42, y: 0.8, w: 12.4, h: 0.28,
    fontFace: BODY, fontSize: 14, color: MUTED, margin: 0,
  });
  const shots = [
    ["capture/nhat-ky.png", "Nhật ký tuần đường"],
    ["capture/tuan-kiem.png", "Tuần kiểm"],
    ["capture/van-de.png", "Vấn đề, hư hỏng"],
    ["capture/cong-viec.png", "Công việc đã giao"],
  ];
  shots.forEach((shot, i) => {
    const x = 0.38 + i * 3.24;
    s.addText(shot[1], {
      x, y: 1.16, w: 3.05, h: 0.26,
      fontFace: BODY, fontSize: 14, bold: true, color: NAVY, margin: 0, align: "center",
    });
    phone(s, shot[0], x + 0.18, 1.5, 2.7, 4.25);
  });
  footer(s, 15);
}

// 16. Nhật ký tuần đường, ba mốc trong kỳ
{
  const s = pres.addSlide();
  s.background = { color: PAPER };
  bar(s);
  title(s, "Nhật ký tuần đường");
  s.addText("Cùng bộ lọc 01/10/2026 – 05/11/2026. Đầu sổ, ngày có nhiều ca nhất, và ngày bắt đầu có ca.", {
    x: 0.42, y: 0.82, w: 12.4, h: 0.28,
    fontFace: BODY, fontSize: 14, color: MUTED, margin: 0,
  });
  const journal = [
    ["capture/nhat-ky.png", "Đầu sổ, đúng kỳ lọc"],
    ["capture/nhat-ky-3010.png", "Ngày 30/10"],
    ["capture/nhat-ky-0510.png", "Ngày 05/10"],
  ];
  journal.forEach((shot, i) => {
    const x = 0.55 + i * 4.2;
    s.addText(shot[1], {
      x, y: 1.18, w: 3.9, h: 0.28,
      fontFace: BODY, fontSize: 15, bold: true, color: NAVY, margin: 0, align: "center",
    });
    phone(s, shot[0], x + 0.55, 1.56, 2.8, 4.41);
  });
  footer(s, 16);
}

pres.writeFile({ fileName: "bao-cao-danh-gia-rmms-20261001-20261105.pptx" })
  .then(() => {
    require("child_process").execSync("python _patch_pic.py", { stdio: "inherit" });
    console.log("wrote pptx");
  })
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });
