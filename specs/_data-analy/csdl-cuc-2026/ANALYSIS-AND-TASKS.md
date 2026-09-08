# Data-analy — CSDL Cục 2026 vs hub live 12+8

| Field | Value |
|-------|-------|
| slug | `csdl-so-sach` (hub live) · delta pack **`csdl-cuc-2026`** |
| mode | `cluster_import` + `feature_context` (chat `/hey-linm` · DI Cục) |
| dataRoot | `Linm.RMMS.Data/data-import/Sổ sách, biểu mẫu trình LĐ Cục` |
| sourceKind | **real** — QĐ/BC 20–21/08/2026 + Excel 16 sheet + Word 10 mẫu |
| live hub | `/so-ts/csdl-so-sach` · STATUS **done** · generic 3-field form |
| ≠ | `asset-kcht-dashboard` `/so-ts/hang-muc` (40 ô KCHT) · Sổ TS `so-ts-*` |
| analyzedAt | `2026-09-05` |
| skillId | `agent-data-analy` |
| skillVersion | `2026.08.25.01` |
| workflowVersion | `2026.09.01.02` |

**Kết luận:** Hub live **12 biểu + 8 sổ** là catalog polymorphic (3 ô `detail*` + `entries.col1–3`). Hồ sơ trình LĐ Cục **08/2026** chốt **16 biểu CSDL + 10 mẫu sổ**. Số thứ tự biểu/sổ **không khớp** live. Form generic **không** in/export đúng cột Excel/Word.

**Không** đánh `csdl-so-sach` done = xong nghiệp vụ Cục. Đó là xong **shell hub**.

---

## 0. Nguồn đã đọc

| File | Dùng |
|------|------|
| `1. Biểu mẫu CSDL.xls` | 16 sheet · cột (1)–(n) |
| `1.`–`10.` Mẫu Word | Layout 10 sổ |
| `2026.08.20_P. BT- BC…docx` 437/BC-QLBT | Danh mục 16+10 chính thức |
| `2026.08.20_P BT. Tổng hợp góp ý.docx` | Biểu 16 nút giao · Mẫu 5 điểm đen · Mẫu 9 ITS · Mẫu 10 bình đồ |
| Live | `csdl-so-sach.md` · `11-CSDL-SO-SACH-DATABASE-API.md` · `CsdlSoSachPage` · `csdlSoSachStore.ts` |

---

## 1. Delta catalog (HARD)

### 1.1 Live hub vs Cục

| | Live (done) | Cục 08/2026 |
|--|-------------|-------------|
| Biểu CSDL | **12** | **16** |
| Sổ BDTX | **8** | **10** |
| Form | 3 text + grid Col1–3 | Đúng cột Excel/Word |
| Import Excel | OUT `GAP-CSDL-XLS-01` | P0 (đúng layout in) |
| Số thứ tự | ATGT = Biểu 7 · Lề = Biểu 10 · tuần đường = Sổ 1 | ATGT = Biểu **8** · Lề = Biểu **7** · tuần kiểm = Mẫu **1** · tuần đường = Mẫu **2** |

### 1.2 Map 16 biểu

| Cục | Tên (Excel) | Cột | Live hub `resource` | Sổ TS peer | Action |
|-----|-------------|-----|---------------------|------------|--------|
| 1 | Phân loại mặt đường | **38** | `pavement-sections` (Biểu 1) | `pavement-section` | **Typed form** + import |
| 2 | Thống kê cầu | **48** (+ legacy 64–69) | `bridges` | — | Typed · GPS 3 điểm |
| 3 | Hầm đường bộ | **42** | `road-tunnels` | — | Typed · GPS 3 điểm / ống |
| 4 | Cống các loại | **17** | `culverts` | `so-ts-culvert-x` | Typed; **không** gộp Sổ TS |
| 5 | Rãnh các loại | **18** | `ditches` | `so-ts-ditch` | Typed |
| 6 | Hầm chui DS + hộp KT | **19** | `underpasses` | `so-ts-underpass` | Typed · thêm hộp KT |
| **7** | Lề / taluy dương / hàng rào | **20** | live **Biểu 10** `shoulders-fences` | — | **Renumber** + typed |
| **8** | Hệ thống ATGT | **45** (11 nhóm) | live **Biểu 7** `traffic-safety` | biển/hộ lan/gương… | **Renumber** · child tables |
| **9** | Mốc lộ giới / GPMB | **17** | live Biểu 8 `boundary-markers` | — | Renumber + typed |
| **10** | Kè, tường chắn | **21** | live Biểu 9 `retaining-walls` | `so-ts-retaining` | Renumber + typed |
| 11 | Chiếu sáng (lưới + NLMT) | **24** | `lighting-systems` | `so-ts-lighting` | Typed qty LED/solar |
| 12 | Cây xanh, thảm cỏ | **15** | `green-assets` | — | Typed khóm + m² |
| **13** | Tường chống ồn | **13** | **MISSING hub** | `so-ts-noise-barrier` | **New card** |
| **14** | Hệ thống GTTM (ITS) | **21** | **MISSING hub** | `so-ts-its-camera` | **New card** |
| **15** | TMC / thu phí / dừng chân / nhà hạt / kho | **20** | **MISSING hub** | station/toll/rest… | **New card** (5 loại CT) |
| **16** | Nút giao | **39** | **MISSING hub** | `so-ts-interchange` | **New card** · nhánh lặp |

### 1.3 Map 10 sổ

| Cục | Tên Word | Live hub | Action |
|-----|----------|----------|--------|
| **1** | Nhật ký tuần kiểm (TT 41 PL VIII) | live **Sổ 8** `inspection-logs` | **Renumber** · media sau SC |
| **2** | Nhật ký tuần đường (TT 41 PL VIII) | live **Sổ 1** `patrol-logs` | Renumber · sketch |
| **3** | Trực BĐGT + trực chốt + xử lý SC | live Sổ **2+3** tách | **Gộp 1 sổ** 6 cột |
| **4** | Tổng hợp đếm xe (TCVN 14182 PL B) | live Sổ 4 (gộp TNGT) | Tách TNGT · **16 hạng xe** + thủ công/tự động |
| **5** | TNGT + điểm đen / tiềm ẩn | (nằm trong live Sổ 4) | **Sổ mới** · 3 bảng C.1 / C.2 / điểm đen |
| 6 | QL cầu/hầm + phiếu KT 20 bộ phận | `bridge-inspections` | Typed 20 dòng cố định · ảnh |
| 7 | Hành lang + GPTC **+ Dự án** | `row-violations` | Thêm khối Dự án / QLDA |
| 8 | Ghi chép kết quả BDTX (TT 41 PL IV Mẫu 2) | `maintenance-work-logs` | Typed 5 cột |
| **9** | QL vận hành ITS/ETC/KSTTX | **MISSING** | **New** · ca trực thiết bị |
| **10** | Bình đồ duỗi thẳng tuyến | **MISSING** | **New** · Kind F map strip · **không** grid Col1–3 |

### 1.4 Hai lớp chứng từ vs hang-muc (chốt 2026-09-05)

Hang-muc **không** có form — trùng loại = **Sổ TS** (`rmms_road_assets`) vs **biểu Cục**. **LOOKUP chung · ROW riêng** (`GAP-CSDL-CUC-11`). Context: [`csdl-cuc-2026.md`](../../../docs/context/features/csdl-cuc-2026.md) §1b.

| Trùng | Biểu Cục | Hang-muc / Sổ TS | Data P1 |
|-------|----------|------------------|---------|
| 1:1 | 01 mặt đường | t02 `pavement-section` | 2 form · 3 tầng vs 38 cột bucket |
| 1:1 | 04 cống | t07 `CULVERT_X` | deep-link |
| 1:1 | 05 rãnh | t10 `DITCH` | seed còn `CULVERT_L` |
| 1:1 | 06 hầm chui | t06 `UNDERPASS` | Cục thêm hộp KT |
| 1:1 | 10 kè | t20 `RETAINING` | |
| 1:1 | 11 chiếu sáng | t18 `LIGHTING` | bucket LED ≠ dump điểm |
| 1:1 | 13 tường ồn | t25 `NOISE_BARRIER` | NEW hub |
| 1:1 | 14 ITS | t19 `ITS_CAMERA` | ≠ Camera MFE |
| 1:1 | 16 nút giao | t23 `INTERCHANGE` | nhánh 1–n trên biểu |
| Một phần | 07 lề/taluy/rào | t12 `SLOPE` · t17 `GUARDRAIL` | 3 khối vs nhiều ô |
| Một phần | 08 ATGT | t09/t14/t17/t31/t32 | 11 nhóm vs từng cái |
| Một phần | 15 TMC/hạt/thu phí | t22/t26/t28 · t21 kho GAP | 1 mẫu vs nhiều type |
| Chỉ Cục | 02 cầu · 03 hầm ĐB · 09 mốc · 12 cây | t05=PONTOON · t16=SPILLWAY ≠ | Không gộp ô sai loại |
| Sổ BDTX | 01–03, 06, 08, 10 | Không | Nhật ký |
| Peer sổ | 04 đếm xe · 05 TNGT · 07 HL · 09 ITS ops | t30 · t38–39 report · t08/t33 · t19 | Vẫn ROW riêng |

**Input trùng semantic:** tuyến · Km · side · tỉnh · GPS · TT · ĐV QL. **Không trùng:** `type` vs `resource` · S-ATTR dump vs cột Excel bucket · file `gov-vn` vs `.xls` Cục.

---

## 2. GAP (Cục 2026)

| ID | Sev | Note |
|----|-----|------|
| GAP-CSDL-CUC-01 | P0 | Catalog **16+10** vs live **12+8** — KPI/card/tab sai |
| GAP-CSDL-CUC-02 | P0 | Số thứ tự biểu 7–10 và sổ 1–2 **đảo** vs Cục |
| GAP-CSDL-CUC-03 | P0 | Form generic 3 field **không** đủ cột Excel (Biểu 1 = 38, Biểu 2 = 48, Biểu 8 = 45) |
| GAP-CSDL-CUC-04 | P0 | Import/export Excel đúng sheet — đóng `GAP-CSDL-XLS-01` |
| GAP-CSDL-CUC-05 | P1 | Biểu 13–16 + Sổ 9–10 chưa có `resource` |
| GAP-CSDL-CUC-06 | P1 | Sổ 3 live tách 2 resource — Cục **1 mẫu** |
| GAP-CSDL-CUC-07 | P1 | Sổ 4/5: đếm xe ≠ TNGT/điểm đen |
| GAP-CSDL-CUC-08 | P1 | Biểu 8 ATGT 11 nhóm — cấm 1 hàng kéo ngang (`GAP-CSDL-01`) |
| GAP-CSDL-CUC-09 | P1 | Biểu 16 nút giao: nhánh tách/nhập **1–n** |
| GAP-CSDL-CUC-10 | P2 | Sổ 10 bình đồ = map strip · packKind **map** slice |
| GAP-CSDL-CUC-11 | P1 | **Không** merge row Sổ TS `so-ts-*` / hang-muc vào biểu — LOOKUP chung (`road-route`…) · ROW riêng · §1.4 |
| GAP-CSDL-CUC-12 | Info | Docs `11-…` và context vẫn 12+8 — stale vs QĐ 08/2026 |

---

## 3. Nguyên tắc implement

1. Hub Kind **G** giữ tab CSDL / Sổ — đổi KPI **16 / 10**.
2. Mỗi biểu/sổ = **1 `resource`** + list Kind **B** + form Kind **D** (Sổ 10 = map).
3. API giữ `api/v1/asset/csdl-records?resource=` **hoặc** tách typed table khi cột > ~20 / child 1–n — SA chốt; **cấm** `api/v1/infra/*` · **cấm** ERP.*.
4. Cột chung mọi biểu: mã · đường (`road-route`) · tỉnh · lý trình từ–đến · vị trí L/R · tình trạng · ĐV QL · người cập nhật · ghi chú · GPS khi Excel có.
5. IdCode prefix theo resource — **cấm** Guid.
6. Import: 1 sheet = 1 resource · merge header 2–3 dòng · skip hàng cầu âm (Biểu 1 ghi chú).
7. Export: đúng số cột + merge như Excel/Word.
8. **Hai lớp:** Sổ TS = hồ sơ cái (gov-vn). Biểu Cục = thống kê in. Hang-muc = count. Deep-link được; **cấm** một form hai chuẩn. Form biểu dùng SearchInput `road-route` (3 tầng khi Sổ TS đã có) — không copy PK `RoadAsset`.

---

## 4. Task pack (chi tiết)

`devSlash` mặc định `/agent-dev`. Map Sổ 10 → `/agent-dev-oms-map`. BE mọi Schema → `/database-migration` pair.

### Wave 0 — Hub + SSOT (P0)

| ID | Layer | Việc | DoD | deps |
|----|-------|------|-----|------|
| T-CTX-CUC-01 | docs | Sửa `csdl-so-sach.md` + `11-…` + FEATURE-TRACKING: 16+10 · map số thứ tự | Cite QĐ/BC 08/2026 · **cấm** 12+8 | — |
| T-HUB-01 | ui | Catalog 16 card + 10 sổ · KPI từ API · title VN | Tab đếm đúng · **cấm** slug | T-CTX · T-BE-CAT |
| T-BE-CAT-01 | api | `GET …/catalog` trả 16+10 · `formNo` Cục | Count 0 OK | — |
| T-REN-01 | api+ui | Map `formNo`: lề=7 ATGT=8 mốc=9 kè=10 · tuần kiểm=1 tuần đường=2 | Deep-link `?resource=` giữ key · đổi label | T-HUB |
| T-QA-HUB-01 | qa | e2e hub 16+10 · không regress hang-muc | S0 hub PNG | T-HUB |

### Wave 1 — Typed CSDL (mỗi biểu 1 epic)

Pattern mỗi biểu: **T-BE-S{n}** entity+DTO+UiSchema · **T-MIG-S{n}** `Schema_CsdlBieu{n}` pair · **T-UI-S{n}** list cột + Slideout 2col · **T-XLS-S{n}** import/export sheet · **T-QA-S{n}** CRUD + empty + 422.

#### Biểu 1 — `pavement-sections` (38 cột)

| Cột Excel | Field | Hint |
|-----------|-------|------|
| (2)(3) Mã/Tên đường | `roadCode` SearchInput `road-route` | GAP-CSDL-ROAD-01 |
| (4) Địa danh | `province` | LOOKUP_STATIC P1 |
| (5)(6) Từ/Đến Km | `kmFrom` `kmTo` | Number |
| (7)(8) Cdài / B nền | `lengthKm` `baseWidthM` | |
| (9)–(12) B mặt 4 bucket | `surfWGe14` … `surfWLe5` **hoặc** 1 `surfaceWidthM` + class | SA: 1 width vs 4 flag |
| (13)–(16) Kết cấu BTXM/BTN/Đá nhựa/Cấp phối | flags **hoặc** `structureType` | 1 loại / đoạn |
| (17) Dày mặt (cm) | `surfaceThicknessCm` | |
| (18)–(22) Cấp ĐB/đồi I–V | `plainClass` | Dropdown I–V |
| (23)–(27) Cấp MN I–V | `mountainClass` | |
| (28)–(31) Phân loại năm 1–3 / 4–6 / 7–9 / >9 | `yearsInServiceBand` | |
| (32)(33) BG T.BỘ / MĐ | `handoverMinistry` `handoverLocal` | bool |
| (34)(35) Năm ĐT / năm SC ≥1km | `lastMajorRehabYear` `lastSurfaceRepairYear` | |
| (36)(37)(38) Người · ĐV QL · Ghi chú | common | |

Hàng «Cầu …. Km» = **không** phải đoạn mặt đường (length âm) — import skip / loại `skip-bridge`.

Peer: `pavement-section` deep form — **reuse field** nếu cùng table; hub card vẫn mở CSDL list.

#### Biểu 2 — `bridges` (48 cột)

GPS điểm đầu/giữa/cuối (đuôi mố / tim). Dầm: số nhịp · sơ đồ · dài · loại (DUL/BTCT/dàn thép/I LH/vòm/khác). Phần dưới: mố TT · móng/thân mố · trụ TT · móng/thân trụ. Tải TK/TT. Gối SL+loại. Lan can dài + DT gờ + tay vịn. Ống thoát SL+dài. DT phát quang 10m · dầm thép LH · đỉnh trụ/mố.

#### Biểu 3 — `road-tunnels` (42 cột)

Loại xuyên · cấp hầm ĐB/MN · số ống · vỏ · tĩnh không · khổ CxR + B xe chạy · mặt đường trong hầm · thoát nước dài+KC · lề trong hầm · PCCC bơm/hốc · quạt · đèn SL · CCTV/VMS. GPS 3 điểm; **2 ống = 2 bản ghi GPS**.

#### Biểu 4 — `culverts` (17 cột)

Km điểm · GPS tim cống×tim đường · khẩu độ · hình (hộp/tròn) · thân · đầu T.Lưu / H.Lưu · dài · tải · năm · TT.

#### Biểu 5 — `ditches` (18 cột)

Từ–đến · vị trí · hở/kín · KC · hình · khẩu độ · năm · khả năng thoát · TT.

#### Biểu 6 — `underpasses` (19 cột)

Khẩu độ · số ống · thân/cửa · dài · tải (HL93) · mặt trong (BTXM/BTN) · chiếu sáng · thoát nước · năm. Gồm **hộp kỹ thuật**.

#### Biểu 7 — `shoulders-fences` (renumber)

3 khối: lề (vị trí KC dài rộng DT) · taluy dương (vị trí dài DT) · hàng rào (quy cách vị trí số cột dài km).

#### Biểu 8 — `traffic-safety` (45 cột · 11 nhóm)

**Cấm** 1 entity wide. Child hoặc `type=` + bảng con: biển (số hiệu QCVN · kích thước · cột · cao) · cọc tiêu/H/Km/trụ dẻo/thủy chí · GPC · chống chói · đảo · đinh PQ · hộ lan + mắt PQ · vạch sơn · thùng giảm chấn · gương cầu · đèn (cột + loại đèn).

Peer Sổ TS: deep-link loại; **cấm** ghi đè form Sổ TS.

#### Biểu 9 — `boundary-markers`

2 khối mốc lộ giới / mốc GPMB: chủng loại · KC · DT · TT · năm HT.

#### Biểu 10 — `retaining-walls`

Từ–đến · vị trí · chủng (trọng lực/rọ/BTCT/tường chắn) · KC · dài · cao · DT · rãnh đỉnh (loại KC hình dài) · năm SD.

#### Biểu 11 — `lighting-systems`

Lưới: LED 600/240/150/125 · TT · số cột · tủ · TBA. NLMT: cột THGT · bộ ĐK · pin 240Wp · đèn pha 100W · acquy 145Ah · tủ.

#### Biểu 12 — `green-assets`

Khóm trúc đào / ngâu / cọ / khác · thảm cỏ m² · vị trí.

#### Biểu 13 — NEW `noise-barriers`

Từ–đến · vị trí · dài · cao · DT. Card mới. Peer `so-ts-noise-barrier`.

#### Biểu 14 — NEW `its-systems`

Từ–đến · GPS · vị trí · hướng tuyến · loại TB (cáp/CCTV/ANPR/VMS/tủ) · hãng · TS · SL/dài · TT hoạt động · hạ tầng (cần vươn/long môn/đế BT) · KC · SL · TT HT · năm. Peer `so-ts-its-camera`.

#### Biểu 15 — NEW `ops-facilities`

`facilityKind`: TMC · trạm thu phí · dừng chân · nhà hạt · kho. DT khuôn viên · nhà (SL+DT) · KT khác (SL+DT) · TT · năm · thiết bị (chủng SL TT).

#### Biểu 16 — NEW `interchanges`

Header nút: mã · tên · Km chính · Km phụ · tỉnh · loại nút · tổ chức GT · B nền/mặt/KC/số làn tuyến chính. **Child** `branches[]`: tên · từ–đến · vị trí · hướng · dài · B nền/mặt · KC · R. ATGT: biển · vạch · đảo · đèn.

### Wave 2 — 10 sổ (header + lines)

Pattern: book header (quyển · nhà thầu · Km · ngày bắt đầu/hết) + `entries[]` **typed** (đóng `GAP-RPT-SRC-CSDL-01` cho pack này).

| ID | Sổ | Header | Entry fields | Extra |
|----|----|--------|--------------|-------|
| T-SO-01 | Tuần kiểm | quyển · ĐV QL · người TK · Km · ngày | ngày · hạng mục/đề xuất · Km từ–đến · vị trí · mô tả · KL ước · ý kiến TK · nhận xét+ký · yêu cầu SC/VP · hạn · KL/CL/ngày TT · **file sau SC** | FileService |
| T-SO-02 | Tuần đường | quyển · nhà thầu · Km · NV tuần | giờ ngày · vị trí/Km SC-VP · thời tiết+diễn biến · XL tại chỗ · nhận xét+ký · ghi chú · sketch | media |
| T-SO-03 | Trực BĐGT+chốt+SC | nhà thầu · Km · kỳ | STT · ngày · ca · tên · nội dung · XL · ký | **xoá** 2 resource cũ |
| T-SO-04 | Đếm xe | nhà thầu · trạm · Km · quý/năm · **thủ công/tự động** | 16 hạng xe TCVN + tổng ôtô | 1 row / trạm / quý |
| T-SO-05 | TNGT | nhà thầu · Km · kỳ | **C.1** tháng: đường · vị trí · số vụ · nguyên nhân (đường/người/PT) · chết/thương · thiệt hại cầu-đường/PT · nhận xét. **C.2** 6 tháng/năm. **Điểm đen:** 12 tháng vụ/chết/thương · ĐG · hiện trạng (nền/hình học/ATGT) · XL sơ bộ · BP · theo dõi | 3 grid |
| T-SO-06 | QL cầu | tên cầu · Km · QL · passport | **20 dòng cố định** bộ phận · hư hỏng · KL kiến nghị · ưu tiên (quý / trước bão / ngay) · ảnh · ghi chú | link Biểu 2 |
| T-SO-07 | HL + GPTC + DA | nhà thầu · Km | **A** VP: ngày · Km · địa phận · TT VP · tổ chức · BB hạt/xã/VP · hiện trạng · xác nhận. **B** GPTC/DA: mã · số ngày GP · ĐV cấp · CĐT · QLDA · TC · tên CT · Km · hạn · gia hạn · tình hình | 2 tab |
| T-SO-08 | Kết quả BDTX | tuyến Km · thầu · VP · Khu | STT · việc · Km · giải pháp · kết quả chính · ghi chú | |
| T-SO-09 | ITS/ETC/KSTTX **NEW** | thầu · Km · kỳ | ngày giờ · ca · người · TT hệ thống · TB bất thường · XL · kết quả · kiến nghị · ký | link Biểu 14 |
| T-SO-10 | Bình đồ **NEW** | thầu · Km · kỳ | Strip theo Km: Bnền/Bmặt/KCMĐ/dày · dốc dọc · thẳng/cong · CT cầu/hầm/cống · ATGT T/P · nút giao · rãnh T/P · tường T/P · SCĐK/DA · TT mặt | Kind F · `/agent-dev-oms-map` |

### Wave 3 — Import / export / GIS

| ID | Việc | DoD |
|----|------|-----|
| T-XLS-00 | Parser merge-header Excel 16 sheet | Golden: sheet 01–16 · row count + checksum cột (7) |
| T-XLS-OUT | Export đúng merge + ghi chú chân biểu | In thử Biểu 1 + 8 |
| T-GIS-01 | Deep-link map bbox theo resource | **cấm** canvas trên list pack (trừ Sổ 10) |
| T-FILE-01 | Ảnh/video Sổ 1/2/6 | `/integrate-file-upload-web` · **cấm** invent file API |

### Wave 4 — QA / report

| ID | Việc |
|----|------|
| T-QA-REN | Regression: URL `?resource=traffic-safety` vẫn ATGT sau đổi formNo |
| T-QA-ISO | Biểu 4–6 vs Sổ TS cùng loại: 2 màn · 2 bảng · deep-link |
| T-RPT-01 | Report pack **sau** form typed READY (`data-analy-report-source-form`) |

---

## 5. Run order đề xuất

```
T-CTX-CUC-01 → T-BE-CAT-01 → T-HUB-01 → T-REN-01
→ Biểu 1,4,5,6 (ít cột / đã có peer)
→ Biểu 2,3 (GPS + kết cấu)
→ Biểu 7–12 (renumber + typed)
→ Biểu 13–16 (new)
→ Sổ 2,1,8,3 (tuần / BDTX / trực)
→ Sổ 6,7,4,5
→ Sổ 9,10
→ T-XLS-00 → T-QA-*
```

Queue: `/agent-qldb-workflow` `roleOnly=data_analy` **edit_page** trên `csdl-so-sach` **hoặc** slug con `csdl-bieu-{n}` / `csdl-so-{n}` (1 nút = 1 feature nếu scan form-type).

**Cấm** `yarn run-implement` mobile. Hub web = queue `qlbd`.

---

## 6. Open questions (PO AskQuestion)

| Q | Default tạm |
|---|-------------|
| Q-SPLIT | 1 hub `csdl-so-sach` edit_page vs 26 feature con | **1 hub + 26 resource** (giữ Kind G) |
| Q-TABLE | Polymorphic `detail jsonb` vs typed table / biểu | Typed table khi ≥20 cột hoặc child 1–n (2,8,16, sổ 5–7) |
| Q-PEER | Sync Sổ TS → biểu Cục | **Deep-link only P1** · LOOKUP `road-route` chung · **cấm** gộp bảng (`GAP-CSDL-CUC-11` · chốt 2026-09-05) |
| Q-FORMNO | Đổi số trên UI ngay | **Yes** theo Cục; giữ `resource` key |
| Q-SO3 | Xóa `duty-logs` + `checkpoint-duties` | Merge → `duty-incident-logs` |
| Q-SO10 | Pack map vs list+image | Map strip P1 nếu GIS READY; không thì upload ảnh bình đồ |

---

## Version meta (REQUIRED)

| Field | Value |
|-------|-------|
| skillId | agent-data-analy |
| skillVersion | 2026.08.25.01 |
| schemaVersion | 1 |
| workflowVersion | 2026.09.01.02 |
| generatedAt | 2026-09-05T02:30:00.000Z |
| contentHash | sha256:csdl-cuc-2026-xls16-docx10 |
| sourceCite | `data-import/Sổ sách, biểu mẫu trình LĐ Cục` · 437/BC-QLBT |
