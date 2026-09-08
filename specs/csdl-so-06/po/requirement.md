# PO — Requirement — csdl-so-06 (Sổ 06 — QL cầu / phiếu KT)

| Field | Value |
|-------|-------|
| feature | `csdl-so-06` |
| this role | `po` · `/agent-po` |
| changeScope | `new_page` |
| packKind | **`list`** (Kind **B** catalog A–D + Kind **D** Slideout · typed T-SO-06 · **20 fixed** entries) — PO confirm |
| Feature Kind | **B** list A–D · **D** Slideout Z1–Z3 · entries `pattern_inline_grid` **fixed-20** |
| gap | `new_page` · typed book thay generic · GAP-SO06-* + GAP-CSDL-* |
| mode | `feature_context` · **no Excel** · CTX + analy + hub demo zone ref · sourceKind=`synthetic` |
| status | `done` |
| requestSource | run packet `task_bc56fa9c` · `/agent-qldb-workflow` · roleOnly=`po` · `/agent-po` |
| autoApprove | **ON** — Design/SA/Review khi tới lượt → agent tự confirm · enqueue role kế. Role PO **không** gate confirm. |
| e2eQa | **ON** — queued tới `/agent-qa*` · **cấm** e2e / `yarn start:std` / `yarn build` ở role PO |
| prior · data_analy | status=`done`/`confirmed` · `specs/_data-analy/features/csdl-so-06-control-hint.md` · `csdl-so-06-real-data.md` · contentHash `sha256:efbccc4800d45e5dfe2b30b8b35773d127554eb6912be14729c0da066e214d8a` · headerFingerprint `sha256:f87218b875c86a0a438994d8dd3abf30f59757fe4f85ddc4e9af0893efb9422f` · analy `task_ff0beb8e` · **cấm** re-scan demo (**GAP-PO-DEMO-RESCAN-01**) |
| productRoot | `D:/AI-QLBD/Linm.RMMS.Data` |
| mfe | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Asset` · alias **`/csdl-so-06`** · hub **`/so-ts/csdl-so-sach?resource=bridge-inspections`** |
| mfeStdUrl | `http://localhost:9301/csdl-so-06` |
| hubDeepLink | `http://localhost:9301/so-ts/csdl-so-sach?resource=bridge-inspections` |
| backend | `D:/AI-QLBD/Linm.RMMS.WebService` · domain **Asset** · **`api/v1/asset/csdl-records?resource=bridge-inspections`** · **cấm ERP.*** · **cấm** invent `api/v1/infra/*` · **cấm** runtime `/api/v1/bridge-inspections` · **cấm** `api/v1/so-ts/*` |
| domain | **Asset** |
| resource | `bridge-inspections` (**giữ** key) |
| formNo | `06` · title VN **QL cầu / phiếu KT** · live hub card «Phiếu KT cầu» đến T-REN-01 |
| IdCode | `SO-yyyyMMdd-nnnn` · **cấm** Guid |
| be_repo_confirm | `approve` (`Linm.RMMS.WebService`) |
| ui_repo_confirm | `approve` (`Linm.Web.RMMS.Asset`) |
| updatedAt | `2026-09-06T03:20:00.000Z` |
| taskId | `task_bc56fa9c` · analy `task_ff0beb8e` |
| skillVersion | `2026.08.25.01` |
| workflowVersion | `2026.09.01.02` |
| rulesVersion | `2026.08.31.2` |

## 1. Goal

Chốt **new_page** typed **Sổ 06 — QL cầu / phiếu KT** (TT 41 · TCVN · Mẫu **6** Cục · T-SO-06) trên resource `bridge-inspections`: Kind B list + Kind D Slideout CRUD · header typed (cầu · đường · Km · ĐV QL · passport · ngày/người KT · tỉnh · TT phiếu) + **20 dòng cố định** bộ phận (hư hỏng · KL kiến nghị · ưu tiên · ảnh · ghi chú) · **cấm** DoD chỉ 3 ô `detail*` / `col1–3`.

Persona: Khu QLĐB · Hạt trưởng · Kiểm tra viên cầu.

**packKind confirm:** `list` (data-analy đề xuất · PO chốt). **Không** report pack · **không** Kind F map canvas · Import/Export Excel **OUT pack** · media = FileService `photoIds` / dòng (optional P1 · T-FILE-01).

**≠** Sổ TS `so-ts-*` · ≠ Biểu 2 `bridges` form (deep-link / SearchInput only · **cấm** merge) · ≠ hub Kind G shell `csdl-so-sach` (giữ entry; alias mfeStd riêng).

**Cấm ERP.*** · **cấm** `api/v1/rmms/*` · **cấm** invent `api/v1/infra/*` · **cấm** demo-json / localStorage SSOT · **cấm** re-scan demo HTML (**GAP-PO-DEMO-RESCAN-01**) · **cấm** add/remove vượt 20 bộ phận · **cấm** đổi `partCode` seed.

## 2. Current → New (`new_page` · REQUIRED)

Nguồn SSOT: control-hint + real-data §A+§B · `analyzedAt=2026-09-06T03:11:57.434Z` · contentHash khớp STATUS · **không** crawl demo/CTX lại.

| Layer | Current (live) | New (PO chốt) |
|-------|----------------|---------------|
| Entry | Hub deep-link `?resource=bridge-inspections` only | Alias **`/csdl-so-06`** + hub entry (**GAP-SO06-ROUTE-01**) |
| Hub label | Live «Phiếu KT cầu» | mfeStd title **«Sổ 06 — QL cầu / phiếu KT»** · hub card giữ «Phiếu KT cầu» đến T-REN-01 · key `bridge-inspections` giữ (**GAP-SO06-FORMNO-01** / **Q-FORMNO**) |
| List Kind B | Generic cols · filter chrome | Typed cols: code · bridgeName · road · kmStation · inspectedAt · inspector · status |
| Form Kind D | 3 ô `detail*` + entries Col1–3 | Typed header T-SO-06 + **20 fixed** lines + photoIds (**GAP-SO06-TYPED-01** / **GAP-SO06-FIXED20-01** / **GAP-CSDL-CUC-03**) |
| `roadCode`/`roadName` | Text free | **SearchInput** `road-route` filter + form (**GAP-CSDL-ROAD-01**) |
| `bridgeId`/`bridgeName` | Text / generic | **SearchInput** `bridges` + bind name · deep-link Biểu 2 passport (**GAP-SO06-PEER-01** / **Q-BRIDGE**) |
| `province` | LOOKUP_STATIC 5 tỉnh | **Giữ** LOOKUP_STATIC P1 (**Q-PROV**) · master = P2 |
| `manageUnit` | Text | **Text P1** · SearchInput org-unit **DEFER P2** (**Q-ORG** / **GAP-CSDL-ORG-01**) |
| `status` | Catalog tot/tb/kem/hong (generic) | Phiếu LOOKUP_STATIC **`draft\|done\|cancelled`** (**Q-STATUS**) |
| Entries | Col1–3 free | Seed 20 `partCode` EN · **cấm** add/remove · edit line fields only |
| `priority` | — | Dropdown `quarter\|before-storm\|immediate` · **bắt buộc khi `damageDesc` ≠ empty** (**Q-PRIORITY**) |
| Media | không | FileService `photoIds[]` / dòng · **optional** P1 · max **5**/dòng (**GAP-SO06-MEDIA-01** / **Q-MEDIA**) |
| API | `…/csdl-records?resource=bridge-inspections` shell | **Giữ prefix** · widen typed payload — SA / Schema_CsdlSo06 · **cấm** runtime `/api/v1/bridge-inspections` (**GAP-SO06-APILEGACY-01**) |
| DOMAIN-MAP | thiếu row `csdl-so-06` | SA thêm row Asset wave này (**GAP-SO06-DMAP-01** / **Q-DMAP**) |
| Import/Export | Stub | **OUT pack** (**GAP-CSDL-XLS-01**) |
| Map | — | **none** · deep-link GIS only · **cấm** canvas |

**Không đổi:** API prefix `api/v1/asset/csdl-records` · resource key `bridge-inspections` · Kind B A–D · Kind D Slideout · `LinPageLayout kind="catalog"` · IdCode `SO-yyyyMMdd-nnnn` · pagination 50/100/200/500 · **cấm** ERP.* · **cấm** Guid IdCode · **cấm** merge Sổ TS / Biểu 2 form.

### GAP IDs (PO · P1 trừ DEFER/OUT)

| ID | New | P1 |
|----|-----|-----|
| GAP-SO06-TYPED-01 | Typed header + 20 fixed lines thay detail*/col1–3 | **YES** |
| GAP-SO06-ROUTE-01 | Alias `/csdl-so-06` + hub entry | **YES** |
| GAP-SO06-FORMNO-01 | Label Sổ 06 · key bridge-inspections giữ · hub card rename = T-REN-01 | **YES** (title) · hub rename **DEFER** T-REN-01 |
| GAP-SO06-FIXED20-01 | Seed 20 partCode · cấm add/remove | **YES** |
| GAP-SO06-MEDIA-01 | photoIds FileService / dòng | **YES** (optional upload) |
| GAP-SO06-PEER-01 | SearchInput/deep-link Biểu 2 | **YES** |
| GAP-SO06-APILEGACY-01 | Doc path cũ ≠ runtime | **YES** (docs/SA) |
| GAP-SO06-DMAP-01 | DOMAIN-MAP row `csdl-so-06` | **YES** SA wave này |
| GAP-CSDL-ROAD-01 | SearchInput road-route | **YES** |
| GAP-CSDL-PROV-01 | Province LOOKUP_STATIC P1 | **YES** · master P2 |
| GAP-CSDL-ORG-01 | manageUnit SearchInput | **DEFER P2** |
| GAP-CSDL-CUC-03 | Đóng gap cột typed Sổ 06 | **YES** (khi typed PASS) |
| GAP-RPT-SRC-CSDL-01 | Typed lines = report source | **YES** form READY · report pack riêng |
| GAP-CSDL-XLS-01 | Import/export sheet QL cầu | **OUT pack** |

## 3. Open Q — PO resolve (autoApprove)

| Q | Decision |
|---|----------|
| **Q-FORMNO** | mfeStd/page title **«Sổ 06 — QL cầu / phiếu KT»** · hub card live **«Phiếu KT cầu»** giữ đến **T-REN-01** · resource key `bridge-inspections` **không** đổi |
| **Q-STATUS** | P1: Dropdown LOOKUP_STATIC phiếu **`draft\|done\|cancelled`** (Nháp · Đã KT · Hủy) · **cấm** reuse `tot\|tb\|kem\|hong` (đó là tình trạng công trình, không phải phiếu) |
| **Q-PRIORITY** | **Bắt buộc** khi `damageDesc` trim ≠ empty · ngược lại optional · enum `quarter\|before-storm\|immediate` (Quý · Trước bão · Ngay) |
| **Q-MEDIA** | **Optional** / dòng · FileService · max **5** file/dòng · **không** bắt buộc theo phiếu · upload fail → toast · giữ draft |
| **Q-BRIDGE** | P1 target **SearchInput** catalog `bridges` bind `bridgeName` · Text+bridgeId manual **chỉ** nếu catalog UNREADY (SA confirm) · passportRef = deep-link · **cấm** embed Biểu 2 form |
| **Q-PROV** | **keep_static** 5 tỉnh P1 · master province = P2 |
| **Q-ORG** | **Text P1** `manageUnit` · org-unit SearchInput = **P2** (**GAP-CSDL-ORG-01**) |
| **Q-DMAP** | **YES** — SA thêm DOMAIN-MAP row `csdl-so-06` → Asset · `asset` **wave này** |

## 4. DoD (đo được)

1. Entry: mfeStd `/csdl-so-06` **và** hub `?resource=bridge-inspections` mở cùng list typed · title VN «Sổ 06 — QL cầu / phiếu KT» · back hub · **cấm** slug trên card.
2. List load BFF `GET …/csdl-records?resource=bridge-inspections` — empty grid VN «Chưa có phiếu kiểm tra cầu» · **cấm** fake row · **cấm** demo-json/LS SSOT.
3. Zone A: title VN · back hub · meta resource=`bridge-inspections` — **cấm** Thêm mới trên A.
4. Zone B: filter **1 hàng** — SearchTextInput · province · status · road SearchInput · bridge SearchInput · fromDate · toDate · Tạo mới · Refresh · Delete · History · SchemaConfig · Import/Export stub — **search must work** · **cấm** nút Tìm riêng · filter đổi → page=1 · **cấm** wrap 2 hàng default desktop.
5. Zone C: `LinCatalogDataGrid` kéo cột ON · STT · Mã · Tên cầu · Đường · Km · Ngày KT · Người KT · TT · row menu Xem/Sửa/Copy/Xóa/Lịch sử.
6. Zone D: `LinCatalogListPagination` **50 / 100 / 200 / 500**.
7. Slideout Kind D Z1–Z3: Create/Edit/View/Copy — required header: bridgeId · roadCode · kmStation · manageUnit · inspectedAt · inspector · province · Create seed **đúng 20** entries · code IdCode `SO-` readonly.
8. View = `readOnly` — **cấm** Input disabled xám toàn form.
9. Entries `pattern_inline_grid` **fixed 20** — seed partCode/partName ro · edit damageDesc · proposedActionQty · priority · photoIds · notes · **cấm** add/remove row · **cấm** chỉ Col1–3 · **cấm** đổi partCode.
10. `roadCode` = SearchInput road-route bind `roadName` · `bridgeId` = SearchInput bridges bind `bridgeName` — **cấm** free-text khi master READY.
11. Leave-confirm dirty · toast 4xx/5xx · 404 detail → đóng slideout — **cấm** native alert/confirm.
12. Typography: label **13** · input D14/M16 (**GAP-TYP-01**).
13. Map: **none** trên pack — **cấm** invent canvas.
14. Media: FileMulti / dòng optional · max 5 · FileService integrate-file-upload-web — **cấm** invent file API.
15. Priority required khi có `damageDesc` (client + BE validation).
16. `yarn build` / e2e / `start:std` **chỉ** Dev/QA — PO **cấm**.

## 5. Grid AC (packKind=list · HARD)

| AC | Assert |
|----|--------|
| G-01 | List render `LinCatalogDataGrid` · không crash khi empty · copy VN «Chưa có phiếu kiểm tra cầu» |
| G-02 | SearchTextInput lọc mã · cầu · đường · người KT — **không** nút Tìm riêng |
| G-03 | Filter province/status/road/bridge/from/to → refetch · page=1 |
| G-04 | Sort/kéo cột default ON · STT ổn định |
| G-05 | Row menu: Xem / Sửa / Copy / Xóa / Lịch sử |
| G-06 | Pagination 50/100/200/500 · đổi size → page=1 |
| G-07 | Tạo mới → Slideout Create · seed 20 dòng · Lưu → row mới trên grid |
| G-08 | Sửa → PUT typed payload · grid refresh |
| G-09 | Copy → Slideout Create prefill · code mới · 20 dòng copy fields (trừ photoIds tùy SA) |
| G-10 | Xóa soft-delete → row biến khỏi list active · History mở được |

## 6. Form AC (Kind D · HARD)

| AC | Assert |
|----|--------|
| F-01 | Z1 title mode C/E/V/Copy · Z3 footer Lưu/Hủy (View: Đóng) |
| F-02 | Required header fields validate trước Lưu · toast VN |
| F-03 | Create luôn có **đúng 20** entries seed partCode EN (Signage…AttachedDevices) |
| F-04 | **Cấm** UI add/remove dòng · **cấm** edit partCode/partName |
| F-05 | `damageDesc` có nội dung → `priority` required |
| F-06 | photoIds FileMulti / dòng · max 5 · upload qua FileService |
| F-07 | View readOnly · không disabled-grey toàn form |
| F-08 | LeaveConfirmModal khi dirty · Hủy/back/ESC |
| F-09 | bridge SearchInput → bind bridgeName · passportRef deep-link Biểu 2 · **cấm** merge form |
| F-10 | road SearchInput → bind roadName |

## 7. Screens / zones

| Screen | Zones | Notes |
|--------|-------|-------|
| List | A header · B filter+toolbar · C grid · D pagination | Kind B · filter-bar HARD 1 row |
| Form Slideout | Z1 chrome · Z2 fields+entries · Z3 footer | Kind D · fixed-20 grid |
| Peer | deep-link Biểu 2 / passport | **cấm** canvas · **cấm** embed |

## 8. Leave / dirty

- Dirty = bất kỳ header hoặc line field đổi so với last loaded/saved.
- LeaveConfirmModal trước đóng Slideout / route leave / Refresh khi form mở dirty.
- **Cấm** `window.confirm` / native alert.

## 9. Seed 20 bộ phận (cite analy §3.5 · cố định)

Signage · Approach10m · Lighting · ExpansionJoint · DeckMarking · DeckDrainage · Railing · Abutment · AbutmentCone · RiverTraining · Pier · Bearing · DeckSlab · MainGirder · CrossGirder · LongitudinalBrace · Arch · RiverSignage · ClearanceEncroachment · AttachedDevices — label VN theo control-hint.

## 10. Out of scope (P1)

- Import/Export Excel sheet (**GAP-CSDL-XLS-01** OUT)
- Hub card rename «Sổ 06» (**T-REN-01**)
- org-unit / province master SearchInput (P2)
- Map canvas / OMS
- Report pack `rpt-kiem-tra-cau` (drill READY sau form typed)
- Runtime path `/api/v1/bridge-inspections`

## 11. Handoff Design

- control-map từ control-hint zones A–D + Slideout Z1–Z3 + fixed-20 entries + FileMulti
- Prototype typed · **cấm** Col1–3 only · filter-bar 1 hàng HARD
- reviewUrl · typography GAP-TYP-01
- Title VN · empty copy · status/priority labels VN

## 12. Handoff SA

- Typed DTO + UiSchema `bridge-inspections` · Schema_CsdlSo06 · migration pair
- DOMAIN-MAP row `csdl-so-06` (**Q-DMAP**)
- Create seed 20 lines BE · priority/damageDesc validation
- FileService photoIds bind · bridges SearchInput catalog cite
- **Cấm** ERP.* · **cấm** invent infra · **cấm** standalone bridge-inspections controller path

## 13. DoR PO

- [x] packKind=`list` confirm
- [x] Current→New + GAP P1/DEFER/OUT
- [x] Open Q resolved (autoApprove)
- [x] Grid AC + Form AC + Screens + Leave
- [x] requirement.md + handoff/po-compact.md
- [x] STATUS po → confirmed · lock release
- [x] **cấm** implement / e2e / start:std / re-scan demo
