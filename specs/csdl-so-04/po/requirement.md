# PO — Requirement — csdl-so-04 (Sổ 04 — Tổng hợp đếm xe)

| Field | Value |
|-------|-------|
| feature | `csdl-so-04` |
| this role | `po` · `/agent-po` |
| changeScope | `new_page` |
| packKind | **`list`** (Kind **B** catalog A–D + Kind **D** Slideout · typed T-SO-04 · **1 row / trạm / quý** · matrix 16 class) — PO confirm |
| Feature Kind | **B** list A–D · **D** Slideout Z1–Z3 · count matrix (không journal add-row) |
| gap | `new_page` · typed book + split TNGT · GAP-SO04-* + GAP-CSDL-* |
| mode | `feature_context` · **no Excel in-repo** · CTX + analy + hub demo zone ref · sourceKind=`synthetic` |
| status | `done` |
| requestSource | run packet `task_8789a3fb` · `/agent-qldb-workflow` · roleOnly=`po` · `/agent-po` |
| autoApprove | **ON** — Design/SA/Review khi tới lượt → agent tự confirm · enqueue role kế. Role PO **không** gate confirm. |
| e2eQa | **ON** — queued tới `/agent-qa*` · **cấm** e2e / `yarn start:std` / `yarn build` ở role PO |
| prior · data_analy | status=`done`/`confirmed` · `specs/_data-analy/features/csdl-so-04-control-hint.md` · `csdl-so-04-real-data.md` · contentHash `sha256:f4b9c168d339477350ba42a03f7ec00e774b38da0ecc6037de8950d9f25e944d` · headerFingerprint `sha256:202e875ac43d1dd97b8ac8f32d3528ac827776078cde980e7bb6ca9634aff7e2` · analy `task_85934368` · **cấm** re-scan demo (**GAP-PO-DEMO-RESCAN-01**) |
| productRoot | `D:/AI-QLBD/Linm.RMMS.Data` |
| mfe | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Asset` · alias **`/csdl-so-04`** · hub **`/so-ts/csdl-so-sach?resource=traffic-counts`** |
| mfeStdUrl | `http://localhost:9301/csdl-so-04` |
| hubDeepLink | `http://localhost:9301/so-ts/csdl-so-sach?resource=traffic-counts` |
| backend | `D:/AI-QLBD/Linm.RMMS.WebService` · domain **Asset** · **`api/v1/asset/csdl-records?resource=traffic-counts`** · **cấm ERP.*** · **cấm** invent `api/v1/infra/*` · **cấm** runtime `/api/v1/traffic-counts` · **cấm** `api/v1/so-ts/*` |
| domain | **Asset** |
| resource | `traffic-counts` (**giữ** key · drop TNGT khỏi title/form) |
| formNo | `04` · title VN **Tổng hợp đếm xe** · **cấm** «(+ TNGT)» |
| IdCode | `SO-yyyyMMdd-nnnn` · **cấm** Guid |
| peerLookup | `COUNT_STATION` / `so-ts-count-station` · `road-route` · report leaf `rpt-dem-xe` (read-only) |
| be_repo_confirm | `approve` (`Linm.RMMS.WebService`) |
| ui_repo_confirm | `approve` (`Linm.Web.RMMS.Asset`) |
| updatedAt | `2026-09-06T05:12:00.000Z` |
| taskId | `task_8789a3fb` · analy `task_85934368` |
| skillVersion | `2026.08.25.01` |
| workflowVersion | `2026.09.01.02` |
| rulesVersion | `2026.08.31.2` |

## 1. Goal

Chốt **new_page** typed **Sổ 04 — Tổng hợp đếm xe**: giữ resource `traffic-counts` · Kind B list + Kind D Slideout CRUD · header T-SO-04 (nhà thầu · trạm · đường · Km · năm/quý · thủ công/tự động) + **matrix 16 hạng xe** + `totalCars` · **1 row / trạm / quý** · **cấm** DoD chỉ 3 ô `detail*` / `col1–3` · **cấm** nhét TNGT / điểm đen / AccidentSummary vào resource này.

Persona: Khu QLĐB · Hạt trưởng · NV đếm xe / IoT · Nhà thầu BDTX · Báo cáo `rpt-dem-xe` (read-only peer).

**packKind confirm:** `list` (data-analy đề xuất · PO chốt). **Không** report pack · **không** Kind F map canvas · Import/Export Excel **OUT pack**.

**≠** Sổ TS `so-ts-count-station` (LOOKUP / deep-link only · **cấm** merge ROW) · ≠ hub Kind G shell `csdl-so-sach` (giữ entry; alias mfeStd riêng) · ≠ `csdl-so-05` (TNGT / điểm đen).

**Cấm ERP.*** · **cấm** `api/v1/rmms/*` · **cấm** invent `api/v1/infra/*` · **cấm** demo-json / localStorage SSOT · **cấm** re-scan demo HTML (**GAP-PO-DEMO-RESCAN-01**) · **cấm** CRUD trên `rpt-dem-xe`.

## 2. Current → New (`new_page` · REQUIRED)

Nguồn SSOT: control-hint + real-data §A+§B · `analyzedAt=2026-09-05T22:06:16.761Z` · contentHash khớp STATUS · **không** crawl demo/CTX lại.

| Layer | Current (live) | New (PO chốt) |
|-------|----------------|---------------|
| Resource / title | `traffic-counts` «đếm xe (+ TNGT)» · gộp TNGT | **Giữ** key · title **«Sổ 04 — Tổng hợp đếm xe»** · TNGT → `csdl-so-05` (**GAP-SO04-SPLIT-01** / **GAP-CSDL-CUC-07**) |
| Entry | Hub deep-link only `?resource=traffic-counts` | Alias **`/csdl-so-04`** + hub entry (**GAP-SO04-ROUTE-01**) |
| formNo | Live `4` · title lẫn TNGT | Cục **`04`** · title không TNGT · **giữ** resource key (**GAP-SO04-FORMNO-01**) |
| List Kind B | Generic cols · detail* | Typed: bookNo · contractor · station · road · Km · year/quarter · method · totalCars |
| Form Kind D | 3 ô `detail*` + entries Col1–3 journal | Typed header T-SO-04 + **16 Number class** + totalCars · **không** journal ngày (**GAP-SO04-TYPED-01** / **GAP-SO04-ROW-01**) |
| Trạm | Free text / detail* | **SearchInput** `count-station` P1 bind stationName (**GAP-SO04-STATION-01**) |
| Đường | Text free | **SearchInput** `road-route` P1 bind roadName (**GAP-CSDL-ROAD-01**) |
| `countMethod` | — | Dropdown **`manual\|auto`** · label VN Thủ công / Tự động (**GAP-SO04-METHOD-01**) |
| `province` | LOOKUP_STATIC 5 tỉnh | **Giữ** LOOKUP_STATIC P1 (**Q-PROV**) · master = P2 |
| `contractor` | Text | **Text P1** · SearchInput org-unit **DEFER P2** (**Q-ORG**) |
| `status` | Catalog generic | LOOKUP_STATIC **`draft\|active\|closed`** (**Q-STATUS**) |
| Unique | — | **Hard 422** stationCode + year + quarter (+ tenant) (**Q-UNIQUE**) |
| API | `…/csdl-records?resource=traffic-counts` | **Giữ prefix** · widen typed — SA / Schema_CsdlSo04 |
| Doc legacy | `/api/v1/traffic-counts` · AccidentSummary | **Cấm** runtime path cũ · AccidentSummary **không** bind so-04 |
| Report | `rpt-dem-xe` | Drill source = typed so-04 · **cấm** write từ report (**GAP-RPT-SRC-CSDL-01**) |
| Import/Export | Stub | **OUT pack** (**GAP-CSDL-XLS-01**) |
| Map | — | **none** · deep-link GIS only · **cấm** canvas |

**Không đổi:** API prefix `api/v1/asset/csdl-records` · Kind B A–D · Kind D Slideout · `LinPageLayout kind="catalog"` · IdCode `SO-yyyyMMdd-nnnn` · pagination 50/100/200/500 · **cấm** ERP.* · **cấm** Guid IdCode · **cấm** merge Sổ TS.

### GAP IDs (PO · P1 trừ DEFER/OUT)

| ID | New | P1 |
|----|-----|-----|
| GAP-SO04-TYPED-01 | Typed header + 16 class + totalCars thay detail*/col1–3 | **YES** |
| GAP-SO04-SPLIT-01 | Drop TNGT khỏi title/form · TNGT → so-05 | **YES** (so-04) · so-05 feature riêng |
| GAP-SO04-ROUTE-01 | Alias `/csdl-so-04` + hub entry | **YES** |
| GAP-SO04-FORMNO-01 | formNo=`04` · title không TNGT · giữ key | **YES** |
| GAP-SO04-STATION-01 | SearchInput count-station | **YES** |
| GAP-SO04-METHOD-01 | countMethod Dropdown | **YES** |
| GAP-SO04-ROW-01 | 1 row / trạm / quý · matrix (không journal) | **YES** |
| GAP-CSDL-ROAD-01 | SearchInput road-route | **YES** |
| GAP-CSDL-PROV-01 | Province LOOKUP_STATIC P1 | **YES** · master P2 |
| GAP-CSDL-ORG-01 | contractor SearchInput org-unit | **DEFER P2** |
| GAP-CSDL-CUC-03 | Đóng gap cột typed Sổ 04 | **YES** (khi typed PASS) |
| GAP-CSDL-CUC-07 | Đóng khi so-04 không còn TNGT (+ so-05) | **YES** so-04 side |
| GAP-CSDL-CUC-11 | LOOKUP trạm/đường chung · ROW riêng ≠ Sổ TS | **YES** |
| GAP-RPT-SRC-CSDL-01 | Typed 16 class = report source READY | **YES** form READY · report pack riêng |
| GAP-CSDL-XLS-01 | Import/export sheet | **OUT pack** |

## 3. Open Q — PO resolve (autoApprove)

| Q | Decision |
|---|----------|
| **Q-CLASS-LABEL** | P1: **16** keys ổn định `class01`…`class16` · controlHint `Number` integer ≥0 · **required** · interim UI label **«Hạng xe {nn}»** (slot TCVN 14182 PL B · cite analy T-SO-04) · **Design** overlay tên VN chính thức 1:1 từ Excel/Word Cục khi file có trong productRoot (cite path trong `ui/design.md`) · **cấm** đổi/gộp/bớt key · **cấm** invent tên không cite · lệch số cột Excel → AskQuestion `version_mismatch_action` |
| **Q-TOTAL** | P1: `totalCars` **Number readonly derived** = `sum(class01…class16)` (FE + BE mirror) · label «Tổng ôtô» · Design có thể gắn meta `isCar` sau khi có label chính thức — nếu exclude non-ôtô thì SA cập nhật rule **không** đổi key field · **cấm** bỏ field |
| **Q-SPLIT** | P1 **cùng release** so-04: drop «(+ TNGT)» hub/title/form · **cấm** field TNGT/điểm đen/AccidentSummary trên `traffic-counts` · feature `csdl-so-05` ship độc lập (không block typed so-04) · **GAP-CSDL-CUC-07** đóng phía so-04 khi split label/fields PASS |
| **Q-STATION** | P1: **SearchInput** `count-station` / peer `COUNT_STATION` **bắt buộc** · bind `stationName` · **cấm** Text tạm khi catalog READY |
| **Q-UNIQUE** | P1: **hard 422** trùng `(stationCode, year, quarter)` trong tenant · toast VN · **không** soft-warn only |
| **Q-PROV** | **keep_static** 5 tỉnh P1 · master province = P2 |
| **Q-ORG** | **Text P1** · org-unit SearchInput = P2 (**GAP-CSDL-ORG-01**) |
| **Q-STATUS** | P1: Dropdown LOOKUP_STATIC **`draft\|active\|closed`** · label VN Nháp · Hiệu lực · Đóng |

## 4. DoD (đo được)

1. Entry: mfeStd `/csdl-so-04` **và** hub `?resource=traffic-counts` mở cùng list typed · title VN «Sổ 04 — Tổng hợp đếm xe» · **không** «+ TNGT» · back hub · **cấm** slug trên card.
2. List load BFF `GET …/csdl-records?resource=traffic-counts` — empty grid VN «Chưa có dữ liệu tổng hợp đếm xe» · **cấm** fake row · **cấm** demo-json/LS SSOT.
3. Zone A: title VN · back hub · meta resource=`traffic-counts` — **cấm** Thêm mới trên A.
4. Zone B: filter 1 hàng — SearchTextInput · province · status · road SearchInput · station SearchInput · year · quarter · countMethod · Tạo mới · Refresh · Delete · History · SchemaConfig · Import/Export stub — **search must work** · **cấm** nút Tìm riêng · filter đổi → page=1 · **cấm** wrap 2 hàng default desktop.
5. Zone C: `LinCatalogDataGrid` kéo cột ON · STT · Mã · Số quyển · Nhà thầu · Trạm · Đường · Km · Năm · Quý · Phương pháp · Tổng ôtô · row menu Xem/Sửa/Copy/Xóa/Lịch sử.
6. Zone D: `LinCatalogListPagination` **50 / 100 / 200 / 500**.
7. Slideout Kind D Z1–Z3: Create/Edit/View/Copy — required: bookNo · contractor · stationCode · roadCode · kmFrom · year · quarter · countMethod · province · class01…class16 · totalCars derived · code IdCode `SO-` readonly.
8. View = `readOnly` — **cấm** Input disabled xám toàn form.
9. Count matrix Z2: 16 Number ≥0 · **không** journal add-row · **cấm** chỉ Col1–3 · **cấm** TNGT fields.
10. `stationCode` = SearchInput count-station · `roadCode` = SearchInput road-route — **cấm** free-text khi master READY.
11. Unique station+year+quarter → 422 toast · Leave-confirm dirty · 404 detail → đóng slideout — **cấm** native alert/confirm.
12. Typography: label **13** · input D14/M16 (**GAP-TYP-01**).
13. Map: **none** trên pack — **cấm** invent canvas.
14. Peer report `rpt-dem-xe` read-only — **cấm** CRUD từ pack này.
15. `yarn build` / e2e / `start:std` **chỉ** Dev/QA — PO **cấm**.

## 5. Grid AC (packKind=list · HARD)

| AC | Assert |
|----|--------|
| G-01 | List render `LinCatalogDataGrid` · không crash khi empty |
| G-02 | SearchTextInput lọc mã/sổ/trạm/đường — **không** nút Tìm riêng |
| G-03 | Filter province/status/road/station/year/quarter/countMethod → refetch · page=1 |
| G-04 | Sort/kéo cột default ON · STT ổn định |
| G-05 | Row menu: Xem / Sửa / Copy / Xóa / Lịch sử |
| G-06 | Pagination 50/100/200/500 · đổi size → page=1 |
| G-07 | Tạo mới → Slideout Create · Lưu → row mới trên grid |
| G-08 | Sửa → PUT · grid refresh · toast success |
| G-09 | Copy → Slideout prefill · code mới sau Lưu · **cấm** reuse IdCode · **cấm** reuse unique station+year+quarter |
| G-10 | Xóa soft-delete · row biến khỏi list mặc định |
| G-11 | Empty copy VN «Chưa có dữ liệu tổng hợp đếm xe» |
| G-12 | 422 thiếu resource / duplicate unique → toast · không crash |
| G-13 | Hub card title không còn «(+ TNGT)» · resource key vẫn `traffic-counts` |

## 6. Form AC (Kind D Slideout)

| AC | Assert |
|----|--------|
| F-01 | Z1 title theo mode C/E/V/Copy · Z3 Lưu/Hủy |
| F-02 | Header required: bookNo · contractor · stationCode · roadCode · kmFrom · year · quarter · countMethod · province |
| F-03 | code readonly auto `SO-yyyyMMdd-nnnn` · **cấm** Guid · **cấm** user edit |
| F-04 | station SearchInput → bind stationName · road SearchInput → bind roadName |
| F-05 | kmFrom Number * · kmTo Number optional |
| F-06 | year Integer * · quarter Dropdown 1–4 * |
| F-07 | countMethod Dropdown `manual\|auto` * |
| F-08 | status Dropdown `draft\|active\|closed` |
| F-09 | notes Textarea optional |
| F-10 | class01…class16 Number integer ≥0 * · interim label «Hạng xe {nn}» |
| F-11 | totalCars readonly derived = sum(class01…class16) · sync khi đổi class |
| F-12 | **1 row / trạm / quý** · **cấm** journal Col1–3 · **cấm** TNGT fields |
| F-13 | View = readOnly · **cấm** disabled xám |
| F-14 | Validation / unique fail → inline/toast · **không** đóng slideout |
| F-15 | contractor Text P1 · **không** bắt buộc org-unit P1 |

## 7. Screens

| Screen | Route / surface | Notes |
|--------|-----------------|-------|
| List | `/csdl-so-04` | Kind B A–D · alias mfeStd |
| Hub entry | `/so-ts/csdl-so-sach?resource=traffic-counts` | Card Sổ 04 · title không TNGT |
| Form | Slideout trên list | Kind D Z1–Z3 · C/E/V/Copy · count matrix |
| Peer | deep-link Sổ TS trạm đếm · `rpt-dem-xe` | LOOKUP / read-only · **cấm** merge form |

**Cấm:** map canvas · report CRUD screen · Excel wizard P1 · TNGT/điểm đen trên so-04.

## 8. Leave / dirty

| Case | UX |
|------|-----|
| Dirty Create/Edit/Copy | `LeaveConfirmModal` trước đóng / navigate / Hủy |
| View (readOnly) | đóng thẳng · không confirm |
| Confirm discard | discard + đóng · **cấm** native `beforeunload` only |
| Save success | clear dirty · đóng hoặc giữ theo chrome hub |

## 9. Data bind (cite real-data · PO chốt)

| uiField | controlHint | P1 |
|---------|-------------|-----|
| search | SearchTextInput | YES |
| province | Dropdown LOOKUP_STATIC | YES keep_static |
| status | Dropdown `draft\|active\|closed` | YES |
| roadCode | SearchInput road-route | YES |
| stationCode | SearchInput count-station | YES |
| year | Integer / Dropdown | YES |
| quarter | Dropdown 1–4 | YES |
| countMethod | Dropdown `manual\|auto` | YES |
| code | Text ro | YES |
| bookNo | Text * | YES |
| contractor | Text * | YES · org-unit P2 |
| stationName / roadName | Text ro | YES |
| kmFrom / kmTo | Number | YES (* from) |
| notes | Textarea | YES |
| class01…class16 | Number * | YES · interim label |
| totalCars | Number ro derived | YES |

API: `GET/POST/PUT/DELETE /web-bff/api/v1/asset/csdl-records` (+ mirror `api/v1/asset/…`) · `resource=traffic-counts`.

## 10. Out of scope (P1)

- Import/Export Excel sheet (**GAP-CSDL-XLS-01** OUT)
- Report pack / PDF CRUD · write từ `rpt-dem-xe`
- Map canvas / GIS draw
- org-unit SearchInput contractor (P2)
- province master (P2)
- Official 16 VN class names (Design overlay khi có Excel cite)
- Feature `csdl-so-05` implement (chỉ split boundary trên so-04)
- Merge form với Sổ TS `so-ts-*`
- ERP.* / Domains/Master / invent `api/v1/infra/*` / runtime `/api/v1/traffic-counts`

## 11. Handoff Design

| Need | Value |
|------|-------|
| control-map | Zone A–D + Slideout Z1–Z3 + count matrix từ control-hint |
| prototype | Typed list + form · hub card title không TNGT · **cấm** Col1–3 |
| reviewUrl | Prototype review URL |
| typography | label 13 · input D14/M16 |
| filter-bar | 1 row HARD · **cấm** nút Tìm · **cấm** wrap 2 hàng desktop default |
| class labels | Overlay «Hạng xe {nn}» → tên TCVN khi Excel cite có |
| split UX | Hub/card copy không «(+ TNGT)» |

## 12. Handoff SA

| Need | Value |
|------|-------|
| DTO / UiSchema | Typed `traffic-counts` · Schema_CsdlSo04 · fields class01…16 + totalCars |
| Unique | Hard constraint stationCode+year+quarter (+ tenant) → 422 |
| Derived | totalCars = sum(class*) BE mirror |
| API | Widen shell `csdl-records` · **giữ** prefix Asset · **cấm** invent infra / legacy `/api/v1/traffic-counts` |
| IdCode | `SO-yyyyMMdd-nnnn` BE generate |
| TNGT | **Cấm** bind AccidentSummary trên resource này |

## 13. DoR PO

- [x] packKind=`list` confirm
- [x] Grid AC + Form AC + Screens + Leave
- [x] Open Q resolved (autoApprove)
- [x] GAP P1/DEFER/OUT tagged
- [x] changeScope=`new_page` · resource=`traffic-counts`
- [x] contentHash khớp analy · **không** re-scan demo
- [x] handoff compact `handoff/po-compact.md`
- [x] **cấm** implement / e2e / start:std / yarn build ở role này
