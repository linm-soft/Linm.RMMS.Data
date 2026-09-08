# Design — csdl-so-07 (Sổ 07 — HL + GPTC + Dự án · new_page)

| Field | Value |
|-------|-------|
| feature | `csdl-so-07` |
| this role | `design` · `/agent-design` |
| Feature Kind | **B** catalog A–D+F+H + **D** Slideout Z1–Z3 · **2 tab** nested `violations[]` / `permits[]`(+QLDA) |
| status | `confirmed` |
| design_confirm | **approve** (`autoApprove=ON` · `task_66a57fe0`) |
| changeScope | `new_page` |
| packKind | `list` |
| gap | `new_page` · GAP-SO07-TYPED-01 · PROJECT-01 · ROUTE-01 · TABS-01 · FORMNO-01 · APILEGACY-01 · DMAP-01 · GAP-CSDL-ROAD-01 · PROV-01 · CUC-03 · RPT-SRC |
| mfe | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Asset` · `ui_repo_confirm` **locked** (PO) |
| mfeStdRoute | `/csdl-so-07` |
| mfeStdUrl | `http://localhost:9301/csdl-so-07` |
| peerStdUrl | `http://localhost:9301/so-ts/csdl-so-sach?resource=row-violations` |
| reviewUrl | `file:///D:/AI-QLBD/Linm.RMMS.Data/specs/csdl-so-07/ui/prototype/csdl-so-07-list-prototype.html` |
| prototype | `specs/csdl-so-07/ui/prototype/csdl-so-07-list-prototype.html` |
| real_view_parity | `v1` |
| shared_grid_example | `v1` |
| backend | `D:/AI-QLBD/Linm.RMMS.WebService` · domain **Asset** · **`api/v1/asset/csdl-records?resource=row-violations`** · **cấm ERP.*** |
| resource | `row-violations` (**giữ** key) |
| formNo | `07` · title VN **Sổ 07 — HL + GPTC + Dự án** |
| IdCode | `SO-yyyyMMdd-nnnn` · **cấm** Guid |
| prior · data_analy | `confirmed`/`done` · hash skip · contentHash `sha256:b928feb3e0d7900398812630e25afa43bfcbf4971633a9c1184c55ea2912ef69` · headerFingerprint `sha256:a923102afa38664e58effeb2b0dccfae12b942d4a3a6fb3c1cb8355df00aa531` · **cấm** re-scan demo (**GAP-DES-DEMO-RESCAN-01**) |
| prior · po | `confirmed` · `po/requirement.md` · `task_672392f6` · Q-* resolved |
| autoApprove | **ON** |
| e2eQa | **ON** — queued `/agent-qa*` · **cấm** e2e/start:std ở Design |
| updatedAt | `2026-09-06T04:20:00.000Z` |
| taskId | `task_66a57fe0` · analy `task_20842c29` · po `task_672392f6` |
| skillVersion | `2026.08.25.01` |
| workflowVersion | `2026.09.01.02` |
| rulesVersion | `2026.08.31.2` |

**Cấm:** Dev/BE · re-scan DEM · invent `api/v1/so-ts/*` / `api/v1/infra/*` · ERP.* · Guid IdCode · form chỉ `detail*`/`col1–3` · flatten Tab A+B · invent map canvas · runtime `/api/v1/row-violations` · `/api/v1/construction-permits` · yarn build/e2e/start:std · start role khác (**GAP-PKT-ROLE-01**).

## 0. Context & inventory (hash skip — **cấm** re-scan demo)

| ID | Path | Notes |
|----|------|-------|
| CTX-01 | `docs/context/features/csdl-so-07.md` | feature CTX |
| DA-01 | `specs/_data-analy/features/csdl-so-07-control-hint.md` | controlHint SSOT |
| DA-02 | `specs/_data-analy/features/csdl-so-07-real-data.md` | real-data §A–§F |
| PO-01 | `specs/csdl-so-07/po/requirement.md` | Grid AC · Screens · Leave · Q chốt |
| CLUSTER | `specs/_data-analy/csdl-cuc-2026/ANALYSIS-AND-TASKS.md` § T-SO-07 | typed 2-tab + QLDA |
| DEM-01 | `…/csdl-so-sach-demo.html` → `asset/csdl-so-sach.html` | zone chrome only · **cấm** SSOT data |
| DOMAIN | `Linm.RMMS.WebService/docs/DOMAIN-MAP.md` | Asset · **GAP-SO07-DMAP-01** thiếu row |
| MFE hub | `CsdlSoSachPage` · form `CsdlFormSlideout` | generic col1–3 → typed replace |
| MFE svc | `services/csdlSoSach/endpoint.ts` | `BASE=/asset/csdl-records` · **reuse** |

Persona: Khu QLĐB · Hạt trưởng · Thanh tra HL · ĐV cấp GP.

**≠** Sổ TS `so-ts-*` · ≠ hub Kind G shell `csdl-so-sach` (giữ entry; alias mfeStd riêng) · peer report `rpt-vi-pham-hlatdb` drill only · **cấm** merge form.

### § Delta Current vs New (`new_page`)

| Area | Current (live) | New (this Design) | GAP |
|------|----------------|-------------------|-----|
| Entry | Hub `?resource=row-violations` only | Alias **`/csdl-so-07`** + hub entry | GAP-SO07-ROUTE-01 |
| Hub label | Live formNo **6** «Hành lang ATĐB + GP thi công» | mfeStd title **«Sổ 07 — HL + GPTC + Dự án»** · hub card giữ đến T-REN-01 | GAP-SO07-FORMNO-01 |
| Form | 3 ô `detail*` + Col1–3 | Typed header + **Tab A** `violations[]` + **Tab B** `permits[]`(+QLDA) | GAP-SO07-TYPED-01 · TABS-01 · PROJECT-01 · CUC-03 |
| Tabs | 1 flat grid | 1 slideout · 2 nested tabs · **cấm** flatten | GAP-SO07-TABS-01 |
| `roadCode` | Text free | **SearchInput** `road-route` filter+form | GAP-CSDL-ROAD-01 |
| `province` | Select 5 tỉnh | LOOKUP_STATIC P1 keep | GAP-CSDL-PROV-01 |
| contractor / manageUnit | Text | **Text P1** · org SearchInput **DEFER P2** | GAP-CSDL-ORG-01 |
| `status` sổ | tot/tb/kem/hong | `draft\|active\|closed` | Q-STATUS |
| VP status | — | `open\|processing\|resolved\|dismissed` | Q-STATUS |
| `projectMgmtUnit` | không | Text optional P1 · khuyến nghị khi có GP | GAP-SO07-PROJECT-01 |
| `permitDays` | — | Integer riêng · UI derive OK | Q-PERMITDAYS |
| Import/Export | stub | **OUT pack** stub only | GAP-CSDL-XLS-01 |
| Report source | flat Col1–3 | Typed lines READY sau form · drill `rpt-vi-pham-hlatdb` | GAP-RPT-SRC-CSDL-01 |
| Map | — | **none** | — |

**Không đổi:** API prefix · resource key `row-violations` · Kind B A–D · Kind D Slideout · IdCode `SO-` · pagination 50/100/200/500 · **cấm** ERP.*.

## 1. Kind + UI pattern (HARD)

| | |
|--|--|
| Feature Kind | **B+D** |
| List pattern | **1×** `LinPageLayout` kind=`catalog` — **cấm** nested `CatalogListShell` |
| Grid | `LinCatalogDataGrid` · kéo cột **default ON** |
| Filter | **`LinErpListFilterBar`** **1 hàng** · SearchText + 🔍 cụm phải — **cấm** nút Tìm riêng · **cấm** wrap 2 hàng default desktop (**filter-bar-layout-hard**) |
| Footer | `LinCatalogListPagination` **50 / 100 / 200 / 500** |
| Form pattern | **Slideout** · `formSurface: slideout` · **`data-form-cols="2"`** · `slideout_layout: footer_actions_only` |
| Nested tabs | **DES-TAB-A** `violations[]` · **DES-TAB-B** `permits[]`+QLDA · `pattern_inline_grid` add/remove · **cấm** flatten 1 bảng Col1–3 |
| Zone F | `LinCatalogUiSchemaEditorModal` catalogKind `row-violations` |
| Zone H | `LinCatalogHistoryModal` — **cấm** invent History API |
| Leave | Dirty → **`LeaveConfirmModal`** — **cấm** native alert/confirm |
| Typography | label **13** · input D14/M16 (**GAP-TYP-01**) |
| View mode | `readOnly` — **cấm** Input disabled xám toàn form |
| Map | `map: none` — deep-link GIS only |
| Skip chrome | GOVOne · demo sidebar/note |
| DES-RPT | **N/A** (list pack · report `rpt-vi-pham-hlatdb` riêng · GAP-RPT-SRC-CSDL-01 form READY) |

### Routes (Design chốt)

| Surface | Path |
|---------|------|
| List (alias) | `/csdl-so-07` |
| Hub entry | `/so-ts/csdl-so-sach?resource=row-violations` |
| Form | overlay Slideout · QS `?form=` optional |
| Peer report | drill `rpt-vi-pham-hlatdb?resource=row-violations&id=` sau typed READY · **cấm** merge form |
| Map | deep-link GIS only · **cấm** canvas |

## 2. Screens / zones

| Screen | FormMode | Zones | Controls / notes |
|--------|----------|-------|------------------|
| S-LIST | list | **DES-GRID-A…D · F · H** | Typed cols · filter HARD |
| S-HUB-ENTRY | hub card | Kind G card | live «HL ATĐB + GP TC» formNo 6 đến T-REN-01 · open-resource · **cấm** slug |
| S-FORM-CREATE | create | **DES-GRID-Z** · Z1–Z3 · DES-TAB-A/B | footer Hủy/Lưu · leave |
| S-FORM-EDIT | edit | DES-GRID-Z · DES-TAB-A/B | footer Hủy/Lưu |
| S-FORM-VIEW | view | DES-GRID-Z · DES-TAB-A/B | readOnly · footer Đóng/Sửa/Copy |
| S-FORM-COPY | create | DES-GRID-Z · DES-TAB-A/B | clear id · new code · giữ nested arrays |
| S-ACT-DELETE | — | Confirm modal | soft delete |
| S-HIST | — | DES-GRID-H | `LinCatalogHistoryModal` |
| S-TAB-VP | — | DES-TAB-A inline_grid | violations[] add/remove |
| S-TAB-GPTC | — | DES-TAB-B inline_grid | permits[] + QLDA add/remove |
| S-SKIP-MAP | — | — | **Cấm** map canvas |

### Zone A — Header (DES-GRID-A)

- Back hub · title **«Sổ 07 — HL + GPTC + Dự án»** · meta `resource=row-violations`
- **Cấm** Thêm mới trên A

### Zone B — Toolbar + filter (DES-GRID-B · DES-GRID-B-FILTER)

**Toolbar (trái/phải):** Refresh · History · SchemaConfig · Import stub · Export stub · Delete · **Tạo mới** (primary phải).

**Filter 1 hàng (HARD):**

| key | Label | Control | catalogKind |
|-----|-------|---------|-------------|
| search | Tìm kiếm | `SearchTextInput` (+ 🔍 cụm phải) | text · mã · đường · tổ chức VP · số GP · QLDA |
| province | Tỉnh/TP | `Dropdown` | LOOKUP_STATIC (5 tỉnh) |
| status | Tình trạng sổ | `Dropdown` | LOOKUP_STATIC `draft\|active\|closed` |
| roadCode | Tên đường | `SearchInput` | **road-route** |
| fromDate | Từ ngày | `Date` | QS `fromDate` |
| toDate | Đến ngày | `Date` | QS `toDate` |

Rules: search must work · **cấm** nút Tìm riêng · filter đổi → `page=1`.

### Zone C — Grid (DES-GRID-C)

| Col | Field | Notes |
|-----|-------|-------|
| STT | — | ổn định khi sort/kéo |
| Mã | `code` | link → View |
| Đường | `roadName` / `roadCode` | |
| Km | `kmFrom`–`kmTo` | đoạn QL |
| Nhà thầu / ĐV | `contractor` | |
| TT sổ | `status` | Nháp / Đang hiệu lực / Đóng |
| Cập nhật | `updatedAt` | |
| ⋮ | row menu | Xem / Sửa / Copy / Xóa / Lịch sử |

Empty copy VN: **«Chưa có bản ghi hành lang / GPTC»**.

### Zone D — Footer (DES-GRID-D)

`LinCatalogListPagination` **50 / 100 / 200 / 500** · đổi size → page=1.

### Form Slideout Z1–Z3 (DES-GRID-Z · DES-FORM-Z1–Z3)

| Zone | Content |
|------|---------|
| Z1 | Title mode Create/Edit/View/Copy · X đóng |
| Z2 | Header fields 2-col + **tabs** DES-TAB-A / DES-TAB-B |
| Z3 | Footer Lưu/Hủy (View: Đóng/Sửa/Copy) · leave-confirm dirty |

#### Control-map — form header (Design chốt = controlHint · PO Q)

| key | Label | Control | req |
|-----|-------|---------|-----|
| code | Mã | Text **readonly** | auto `SO-` |
| contractor | Nhà thầu / ĐV | Text (P1) | * · org DEFER P2 |
| roadCode | Mã đường | SearchInput `road-route` | * |
| roadName | Tên đường | Text display (bind) | * |
| kmFrom | Km từ | Number | * |
| kmTo | Km đến | Number | * |
| manageUnit | ĐV QL | Text (P1) | * · org DEFER P2 |
| province | Tỉnh | Dropdown LOOKUP_STATIC | * |
| status | Tình trạng sổ | Dropdown `draft\|active\|closed` | |
| notes | Ghi chú | Textarea | |

#### Control-map — Tab A · violations[] (DES-TAB-A · DES-ENTRIES-VP)

| key | Label | Control | req |
|-----|-------|---------|-----|
| at | Ngày | Date | * |
| stationKm | Lý trình (Km) | Number / Text | * |
| adminArea | Địa phận | Text | |
| violationStatus | TT vi phạm | Dropdown `open\|processing\|resolved\|dismissed` | * |
| orgName | Tổ chức VP | Text | * |
| minutesDepot | BB hạt | Text | |
| minutesCommune | BB xã | Text | |
| minutesAdmin | BB VP / CQ | Text | |
| currentState | Hiện trạng | Textarea | |
| unitConfirm | Xác nhận ĐV | Text | |

Add/remove dòng OK · 0 dòng cho phép · **cấm** flatten với Tab B.

#### Control-map — Tab B · permits[] + QLDA (DES-TAB-B · DES-ENTRIES-GP)

| key | Label | Control | req |
|-----|-------|---------|-----|
| permitNo | Mã / số GP | Text | * |
| permitDays | Số ngày GP | Integer | lưu riêng · UI derive OK |
| issuer | ĐV cấp | Text | * |
| investor | Chủ đầu tư | Text | * |
| projectMgmtUnit | Ban QLDA | Text | optional P1 · khuyến nghị khi có GP |
| contractor | Nhà thầu TC | Text | |
| workName | Tên công trình | Text | * |
| stationKm | Lý trình (Km) | Number / Text | * |
| expiresAt | Hạn GP | Date | * |
| extendedAt | Gia hạn | Date | |
| progress | Tình hình TC / DA | Textarea | |

Khối **Dự án / QLDA** = `projectMgmtUnit` + `progress` trên cùng dòng GP · **cấm** tách resource.

Required form DoD (header): contractor · roadCode · kmFrom · kmTo · manageUnit · province. Nested: theo req từng tab khi có dòng.

## 3. Grid AC / Form AC (Design mirror PO)

| ID | Rule |
|----|------|
| G-01…G-10 | Kind B A–D · filter HARD · typed cols · pagination · empty VN · row menu · kéo cột ON |
| F-01…F-10 | Kind D Z1–Z3 · typed header · 2 tab nested · LeaveConfirm · View readOnly · SearchInput road · **cấm** flatten |

## 4. reviewUrl / prototype

| | |
|--|--|
| prototype | `specs/csdl-so-07/ui/prototype/csdl-so-07-list-prototype.html` |
| reviewUrl | `file:///D:/AI-QLBD/Linm.RMMS.Data/specs/csdl-so-07/ui/prototype/csdl-so-07-list-prototype.html` |
| zones | DES-GRID-A · B · B-FILTER · C · D · Z · DES-FORM-Z1–Z3 · DES-TAB-A · DES-TAB-B · DES-LEAVE |
| synthetic | UI chrome only · **cấm** demo-json SSOT |

## 5. design_confirm

| | |
|--|--|
| design_confirm | **approve** |
| reason | autoApprove ON · control-map = controlHint · prototype + reviewUrl · filter HARD · 2-tab typed · open Q none |
| open Q | **none** (PO resolved) |

## 6. Handoff next

| Role | Need |
|------|------|
| **SA** | Schema_CsdlSo07 · typed DTO/UiSchema · nested arrays · DOMAIN-MAP row · road-route READY |
| TL/Dev | alias page + typed form 2-tab · reuse BASE `/asset/csdl-records` |
| QA | Grid+form AC · e2e queued `/agent-qa*` only |

## DoR design

- [x] control-map chốt (= controlHint + PO Q)
- [x] prototype HTML + reviewUrl browser-openable
- [x] zones A–D · Z1–Z3 · DES-TAB-A/B · filter HARD
- [x] design_confirm approve (autoApprove)
- [x] handoff compact ≤5KB
- [x] STATUS updated · **cấm** yarn build/e2e/start:std · **cấm** re-scan demo
