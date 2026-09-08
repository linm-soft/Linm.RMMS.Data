# Design — csdl-bieu-08 (Biểu 08 — Hệ thống ATGT)

| Field | Value |
|-------|-------|
| feature | `csdl-bieu-08` |
| title | CSDL Biểu 08 — Hệ thống ATGT |
| this role | `design` · `/agent-design` |
| Feature Kind | **B** catalog A–D+F · **D** Slideout Z1–Z3 · **`data-form-cols="2"`** |
| formSurface | **slideout** · `slideout_layout: footer_actions_only` · **cấm** Full-page / Modal form |
| status | `confirmed` (`design_confirm=approve` · autoApprove ON · `task_daa7f8e9`) |
| changeScope | `new_page` |
| packKind | `list` |
| resource | `traffic-safety` |
| formNo | `08` · title VN **Hệ thống ATGT** · renumber 7→8 (**T-REN-01**) |
| columns | **45** · **11 nhóm** child/`type=` |
| IdCode | prefix **`AT`** · `AT-yyyyMMdd-nnnn` · **cấm** Guid |
| peerSoTs | ATGT types (sign/km/guardrail/median/…) — deep-link **optional** · **cấm** merge form (**GAP-BIEU08-PEER-01**) |
| prior · po | `confirmed` · `po/requirement.md` · `handoff/po-compact.md` · `task_49b1fe15` |
| prior · data_analy | `confirmed`/`done` · hash skip · `_data-analy/features/csdl-bieu-08-control-hint.md` · `csdl-bieu-08-real-data.md` · contentHash `sha256:f972c82727726d256754d076435f9ef97c993b4f9844dc79e50b6415fcaf54be` · headerFingerprint `sha256:ba8b8db4f7637ee32cfd4a882b6abdc774c538f6c9812c3ecd1d13f6151cdd6f` · **cấm** re-scan demo (**GAP-DES-DEMO-RESCAN-01**) |
| mfe | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Asset` |
| mfeStdRoute | **`/csdl-bieu-08`** (alias Navigate **now**) · hub `/so-ts/csdl-so-sach?resource=traffic-safety` |
| mfeStdUrl | `http://localhost:9301/csdl-bieu-08` |
| peerStdUrl / hub | `http://localhost:9301/so-ts/csdl-so-sach?resource=traffic-safety` |
| backend | `D:/AI-QLBD/Linm.RMMS.WebService` · domain **Asset** · `api/v1/asset/csdl-records` · BFF `web-bff/api/v1/asset/csdl-records` — **cấm ERP.*** · **cấm** invent `api/v1/infra/*` |
| catalogKind UI schema | **`traffic-safety`** (typed · + per-type schema) |
| ui_repo_confirm | `approve` (`Linm.Web.RMMS.Asset`) |
| be_repo_confirm | `approve` (`Linm.RMMS.WebService`) — Design không chạy BE |
| design_confirm | **approve** (autoApprove ON · reviewUrl mở được) |
| shared_grid_example | `v1` |
| real_view_parity | `v1` |
| autoApprove | **ON** |
| e2eQa | **ON** — queued `/agent-qa*` · **cấm** e2e/start:std ở Design |
| taskId | `task_daa7f8e9` · po `task_49b1fe15` · analy `task_a21c4937` |
| updatedAt | `2026-09-05T10:20:00.000Z` |

**Cấm:** re-scan demo · form chỉ 3 ô `detail*` · wide 45 entity · Full-page form · invent map canvas · merge Sổ TS form · ERP.* · invent API · native alert/confirm · yarn build/e2e/start:std · start role SA/Dev trong task này (**GAP-PKT-ROLE-01**).

## 0. Context & inventory (hash skip — **cấm** re-scan demo)

| ID | Path | Notes |
|----|------|-------|
| CTX-01 | `docs/context/features/csdl-bieu-08.md` | feature |
| DEM-01 | `…/csdl-so-sach-demo.html` → `…/asset/csdl-so-sach.html` | zone ref only · **cấm** SSOT data |
| DA-HINT | `specs/_data-analy/features/csdl-bieu-08-control-hint.md` | controlHint SSOT |
| DA-REAL | `specs/_data-analy/features/csdl-bieu-08-real-data.md` | §A+§B bind |
| PO-01 | `specs/csdl-bieu-08/po/requirement.md` | Q chốt · DoD |
| MFE | hub `CsdlSoSachPage` · form `CsdlFormSlideout` | generic → typed replace |
| SVC | `services/csdlSoSach/endpoint.ts` | `BASE=/asset/csdl-records` |
| DOMAIN | `Linm.RMMS.WebService/docs/DOMAIN-MAP.md` | Asset · `csdl-so-sach` · peer ATGT |

Persona: Khu QLĐB · Văn phòng Cục · Ban QLDA (web).

**≠** Sổ TS ATGT · ≠ hub generic 3 ô `detail*` · ≠ `road-assets`.

### § Delta Current vs New (`new_page`)

| Area | Current (live) | New (this Design) | GAP |
|------|----------------|-------------------|-----|
| Entry | Hub-only `?resource=traffic-safety` · label Biểu **7** | Alias **`/csdl-bieu-08`** + hub · label **Biểu 08** | GAP-BIEU08-ROUTE-01 · GAP-BIEU08-REN-01 |
| List cols | generic road/km/detail* | Shared + **subset theo type** · filter `assetType` / `?type=` · **cấm** 45 cols cùng lúc | GAP-BIEU08-TYPED-01 · Q-LIST-COLS |
| Form | 3 ô `detail*` | Typed **45/11** Slideout 2col · **shared + 1 child** theo `assetType` | GAP-BIEU08-TYPED-01 / CHILD-01 · GAP-CSDL-CUC-08 |
| assetType | free detail* | LOOKUP 11 enum · filter + form discriminator | GAP-BIEU08-TYPE-01 |
| 11 child | — | SIGN…SIGNAL field keys · **1 section visible** | GAP-BIEU08-SIGN-01…SIGNAL-01 |
| road | Text free | **SearchInput** `road-route` filter+form | GAP-CSDL-ROAD-01 |
| province | LOOKUP_STATIC | **keep_static** P1 | GAP-CSDL-PROV-01 |
| manageUnit | Text | Text P1 · SearchInput **DEFER P2** | GAP-CSDL-ORG-01 |
| Import/Export | stub | stub OUT Biểu 8 · skip-bridge locked | GAP-CSDL-XLS-01 |
| Peer | deep-link | deep-link **optional** · **cấm** merge | GAP-BIEU08-PEER-01 |

**Không đổi:** Kind B A–D · Kind D Slideout · `LinPageLayout kind="catalog"` · pagination 50/100/200/500 · API prefix · resource key · IdCode **cấm** Guid · map=`none` · **cấm ERP.***.

**PO chốt (Design khóa):** Q-ROUTE=`alias_now` · Q-PROV=`keep_static` · Q-CHILD=`child_tables` · Q-TYPE-UX=`confirm` · Q-MARKER-KIND=`lookup_static` · Q-LIST-COLS=`subset_by_type` · Q-REN-LABEL=`with_typed` · Q-PEER=`optional` · open Q = **none**.

## 1. Kind + UI pattern (HARD)

| | |
|--|--|
| Feature Kind | **B+D** |
| List pattern | **1×** `LinPageLayout` kind=`catalog` — **cấm** nested `CatalogListShell` |
| Grid | `LinCatalogDataGrid` · kéo cột **default ON** · cols = shared + type-subset |
| Filter | **`LinErpListFilterBar`** **1 hàng wrap** · **input + 🔍 cụm phải** — **cấm** nút Tìm riêng · **cấm** stack (**filter-bar-layout-hard**) |
| Footer | `LinCatalogListPagination` **50 / 100 / 200 / 500** |
| Form pattern | **Slideout** · `formSurface: slideout` · **`data-form-cols="2"`** · `footer_actions_only` · **shared + 1 child** |
| Zone F | `LinCatalogUiSchemaEditorModal` catalogKind **`traffic-safety`** — **cấm** `LinListTableConfigModal` |
| Zone H | `LinCatalogHistoryModal` — stub OK P2 · **cấm** invent History API |
| Leave | Dirty → **`LeaveConfirmModal`** — **cấm** native alert/confirm (**GAP-DES-LEAVE-01**) |
| Type change | Đổi `assetType` khi edit → **confirm clear child** (**Q-TYPE-UX**) |
| Typography | label **13** · input D14/M16 (**GAP-TYP-01**) |
| Toolbar icons | `erp-control-icon-map` §0 · config=`fa-cog` |
| Map | `map: none` — gis deep-link only · **cấm** invent canvas |
| Skip chrome | GOVOne · demo sidebar/note |
| Report | **N/A** — packKind `list` · DES-RPT skip |

### Routes (Design chốt)

| Surface | Path |
|---------|------|
| Alias list | `/csdl-bieu-08` → same page as hub resource list |
| Hub entry | `/so-ts/csdl-so-sach?resource=traffic-safety` · card label **Biểu 08** |
| Form | overlay Slideout · **cấm** Full-page |
| Peer Sổ TS | optional navigate `/so-ts?type={assetType map}` · **cấm** merge |
| Map | deep-link gis only |

## 2. Screens / zones

| Screen | FormMode | Zones | Controls / notes |
|--------|----------|-------|------------------|
| S-LIST | list | **DES-GRID-A · B · C0–C3 · D · F · H** | Filter + toolbar FULL · typed grid subset |
| S-FORM-CREATE | create | **DES-GRID-Z** Slideout 2col Z1–Z3 · shared+1 child | footer Hủy/Lưu · leave |
| S-FORM-EDIT | edit | DES-GRID-Z | footer Hủy/Lưu · leave dirty · type-change confirm |
| S-FORM-VIEW | view | DES-GRID-Z | readOnly · **cấm** disabled xám · footer Đóng/Sửa/Copy |
| S-FORM-COPY | create | DES-GRID-Z | clear id · new `AT-` code |
| S-ACT-DELETE | — | Confirm modal | soft delete |
| S-ACT-TYPE-CHANGE | — | Confirm modal | clear child fields |
| S-HIST | — | DES-GRID-H | `LinCatalogHistoryModal` |
| S-HUB-ENTRY | — | — | hub card title VN Biểu 08 · open resource |
| S-PEER-SOTS | — | — | optional deep-link ATGT type |
| S-SKIP-MAP | — | — | **Cấm** map canvas |

**devSlash:** `/agent-dev` (list + Slideout typed · **không** map / e2e ở Design).

### Zone A — Header

- Back hub `/so-ts/csdl-so-sach` · title «Biểu 08 — Hệ thống ATGT» · **cấm** Thêm mới trên A · **cấm** slug trên title

### Zone B — Toolbar + filter (`LinErpListFilterBar`)

| key | Label | Control | catalogKind |
|-----|-------|---------|-------------|
| search | Tìm kiếm | `SearchTextInput` | text · mã · đường · signCode · ghi chú · **🔍 cụm phải** |
| province | Tỉnh/TP | `Dropdown` | LOOKUP_STATIC P1 |
| status | Tình trạng | `Dropdown` | LOOKUP_STATIC tot/tb/kem/hong |
| roadCode | Đường | `SearchInput` | **road-route** |
| kmFrom / kmTo | Lý trình từ–đến | `Number` | Point/Line |
| side | Vị trí | `Dropdown` | LOOKUP L/R/C/Both |
| assetType | Chủng loại | `Dropdown` | LOOKUP 11 · map `?type=` |
| — | Làm mới / Lịch sử / Cấu hình / Xóa / Import·Export stub | `fa-sync-alt` · `fa-history` · `fa-cog` · `fa-trash` · stub toast OUT | |
| — | Peer Sổ TS (opt) | `fa-link` | deep-link theo type filter |
| — | **Tạo mới** | primary Zone B phải | |

Filter đổi → page=1 · **search must work** · **cấm** nút Tìm riêng.

### Zone C — Grid columns (typed · **subset_by_type** · **cấm** 45 cùng lúc)

**Shared luôn:** STT · □ · **Mã** · **Đường** · **Tỉnh** · **Km từ** · **Km đến** · **Vị trí** · **Chủng loại** · **Năm** · **TT** · **ĐV QL** · ⋯

**Type-specific (khi filter `assetType` hoặc schema per-row):** ví dụ TRAFFIC_SIGN → Mã biển · Kích thước · SL cột · Cao cột; GUARDRAIL → Loại HL · KC · Dài · Mắt PQ; … (đủ 11 nhóm theo controlHint).

Row menu: Xem / Sửa / Copy / Xóa / Lịch sử · kéo cột ON.

Empty: «Chưa có hệ thống ATGT» · CTA Tạo mới.

### Zone D — Pagination

`LinCatalogListPagination` 50/100/200/500.

## 3. Field inventory (Control = controlHint · **cấm** đoán)

### 3.1 Form Slideout — shared (mọi type)

| # | uiField | Label VN | Control | Required | FormMode | Notes |
|---|---------|----------|---------|----------|----------|-------|
| — | code | Mã | Text readonly | auto | all ro | IdCode `AT-` · **cấm** Guid |
| 1–2 | roadCode / roadName | Mã/Tên đường | **SearchInput** | * | view=ro | catalogKind `road-route` · **GAP-CSDL-ROAD-01** |
| 3 | province | Địa danh | Dropdown | * | view=ro | LOOKUP_STATIC P1 · **Q-PROV** keep_static |
| 4–5 | kmFrom / kmTo | Lý trình từ–đến (Km) | Number | * | view=ro | decimal |
| 6 | side | Vị trí | Dropdown | * | view=ro | L/R/C/Both |
| 7 | assetType | Chủng loại | Dropdown | * | view=ro | 11 enum · đổi → confirm clear child · **Q-TYPE-UX** |
| 8 | builtYear | Năm XD/SD | Number | | view=ro | year |
| 9 | status | Tình trạng | Dropdown | * | view=ro | LOOKUP_STATIC |
| — | manageUnit | ĐV QL | Text | | view=ro | **GAP-CSDL-ORG-01** DEFER SearchInput P2 |
| — | notes | Ghi chú | Textarea | | view=ro | trail · full row |
| — | updatedAt | Cập nhật | DateTime ro | | readonly | audit |

### 3.2 Child sections (1 visible · theo `assetType`)

| assetType | Fields | Control notes |
|-----------|--------|---------------|
| `TRAFFIC_SIGN` | signCode · signSize · signPoleCount · signPoleHeightM | Text / Number |
| `MARKER_POST` | markerKind · markerQty · markerStructure · markerAreaM2 | Dropdown lookup_static · Number |
| `MEDIAN` | medianKind · medianStructure · medianLengthM · medianHeightM | Dropdown / Number |
| `ANTI_GLARE` | antiGlareKind · antiGlareStructure · antiGlareQty · antiGlareLengthM | Dropdown / Number |
| `TRAFFIC_ISLAND` | islandType · islandStructure · islandAreaM2 | Dropdown / Number |
| `ROAD_STUD` | studSize · studQty | Text / Number |
| `GUARDRAIL` | guardrailKind · guardrailStructure · guardrailLengthM · guardrailReflector | Dropdown / Number / Text |
| `ROAD_MARKING` | markCode · markLengthM · markWidthM · markAreaM2 | Text / Number |
| `CRASH_CUSHION` | cushionQty | Number |
| `CONVEX_MIRROR` | mirrorQty | Number |
| `TRAFFIC_SIGNAL` | signalPoleKind · signalHeightM · lampKind · lampQty | Dropdown / Number |

**Sections (form):** Z1 Định danh & tuyến (code…assetType) · Z2 Chi tiết theo chủng loại (**1 child**) · Z3 Quản lý (builtYear/status/manageUnit/notes).

**Cấm** mount `detailPrimary` / `detailSpec` / `detailExtra` làm form chính.  
**Cấm** hiện cả 11 child cùng lúc · **cấm** 1 entity wide 45 cột.

### 3.3 controlHint map (Design chốt)

| Surface | Field | Control | catalogKind |
|---------|-------|---------|-------------|
| List B | search | SearchTextInput | — |
| List B | province / status / side / assetType | Dropdown | LOOKUP_STATIC |
| List B | roadCode | SearchInput | road-route |
| List B | kmFrom / kmTo | Number | — |
| Form | roadCode/roadName | SearchInput | road-route |
| Form | province / status / side / assetType / markerKind / *Kind | Dropdown | LOOKUP_STATIC |
| Form | km* / *Qty / *Length* / *Height* / *Area* / builtYear / poles | Number | — |
| Form | signCode / markCode / studSize / … | Text | — |
| Form | manageUnit | Text | — (org P2) |
| Form | notes | Textarea | — |

## 4. Real-data bind (cite DA-REAL · **cấm** invent)

| Operation | Path |
|-----------|------|
| List | `GET /web-bff/api/v1/asset/csdl-records?resource=traffic-safety` (+ optional `type=`) |
| Detail | `GET /web-bff/api/v1/asset/csdl-records/{id}` |
| Create | `POST /web-bff/api/v1/asset/csdl-records` body `resource=traffic-safety` + typed/child |
| Update | `PUT /web-bff/api/v1/asset/csdl-records/{id}` |
| Delete | `DELETE /web-bff/api/v1/asset/csdl-records/{id}` (soft) |
| road-route | `GET /integration/road-routes/search` |

API mirror: `api/v1/asset/csdl-records`. FE reuse `services/csdlSoSach/endpoint.ts` `BASE=/asset/csdl-records`.  
Entity shell: `CsdlCatalogRecordEntity` · typed `Schema_CsdlBieu8` + children — **SA**.  
DB map (SA · số biểu cũ 7): TrafficSign↔TRAFFIC_SIGN · RoadMarkerPost↔MARKER_POST · MedianBarrier↔MEDIAN · AntiGlarePanel↔ANTI_GLARE · TrafficIsland↔TRAFFIC_ISLAND · RoadStud↔ROAD_STUD · Guardrail↔GUARDRAIL · RoadMarking↔ROAD_MARKING · CrashCushion↔CRASH_CUSHION · ConvexMirror↔CONVEX_MIRROR · TrafficSignal↔TRAFFIC_SIGNAL.  
**Cấm** ERP.* · invent `api/v1/so-ts/*` · invent `api/v1/infra/*` · demo-json / LS SSOT · bind `road-assets`.

## Prototype (REQUIRED)

| | |
|--|--|
| Base | `shared_grid_example v1` + Slideout Z `data-form-cols="2"` |
| Artifact | `ui/prototype/csdl-bieu-08-list-prototype.html` |
| Zones | **DES-GRID-A · B · C0–C3 · D · F · H · Z** · content-only · **skip** GOVOne |
| Filter mock | `LinErpListFilterBar` 1 hàng wrap · input cụm phải · road SearchInput · kmFrom/kmTo · side · assetType |
| Form | Slideout shared + **1 child** · Q-TYPE-UX confirm · Q-LIST-COLS subset · Q-MARKER lookup_static · footer Hủy/Lưu · LeaveConfirmModal |
| SSOT | `shared_grid_example: v1` · `real_view_parity: v1` · `erp-control-icon-map` |
| **reviewUrl** | `file:///D:/AI-QLBD/Linm.RMMS.Data/specs/csdl-bieu-08/ui/prototype/csdl-bieu-08-list-prototype.html` |
| **peerStdUrl** | `http://localhost:9301/so-ts/csdl-so-sach?resource=traffic-safety` |
| **mfeStdUrl** | `http://localhost:9301/csdl-bieu-08` |

### Wire

```
[S-LIST] DES-GRID-A…D · F · H — filter + toolbar FULL + typed grid subset_by_type
[S-FORM] DES-GRID-Z Slideout data-form-cols=2 · shared + 1 child · footer only
[Type] Confirm clear child khi đổi assetType
[Leave] LeaveConfirmModal · toast mock — cấm native dialog
[Peer] optional deep-link Sổ TS ATGT · map none
```

## 5. Leave / alert

| Case | Control | Cấm |
|------|---------|-----|
| Dirty đóng slideout / back-hub | `LeaveConfirmModal` | `window.confirm` |
| Đổi assetType (edit) | Confirm clear child | native `confirm` |
| API 4xx/5xx | `useAppToast` | `window.alert` |
| detail 404 | toast · đóng slideout | silent fail |
| Delete | Confirm modal | native `confirm` |
| History | `LinCatalogHistoryModal` | invent API path |
| Lookup road no match | SearchInput empty | free-text substitute |
| Empty list | VN «Chưa có hệ thống ATGT» + CTA Tạo mới | fake demo rows SSOT |

## 6. Grid AC (Design confirm · PO)

AC-G list Kind B **PASS**. Report AC **N/A** — packKind `list` · DES-RPT skip.

## 7. Open questions (PO closed — Design không re-open)

| ID | Decision |
|----|----------|
| Q-ROUTE | **alias_now** `/csdl-bieu-08` + hub |
| Q-PROV | **keep_static** P1 · master P2 |
| Q-CHILD | **child_tables** (+ `?type=` filter) · Schema_CsdlBieu8+children |
| Q-TYPE-UX | **confirm** clear child khi đổi assetType |
| Q-MARKER-KIND | **lookup_static** (Excel seed) |
| Q-LIST-COLS | **subset_by_type** · cấm 45 cols cùng lúc |
| Q-REN-LABEL | **with_typed** Biểu 7→08 cùng typed |
| Q-PEER | **optional** deep-link · **cấm** merge |
| GAP-CSDL-ORG-01 | **DEFER P2** Text |
| GAP-CSDL-XLS-01 | **OUT** pack · toolbar stub OK |
| GAP-DES-DEMO-RESCAN-01 | **Cấm** re-scan · hash skip |

## Confirm

`design_confirm` = **approve** — autoApprove **ON** · agent tự confirm (`task_daa7f8e9`). Chain **SA** enqueue (roles sau = pending đến lượt). **Cấm** Dev/BE/e2e trong task này.

## Handoff → SA

| Field | Value |
|-------|-------|
| Kind / pattern | B A–D+F + D Slideout `data-form-cols="2"` footer_only · shared + 1 child |
| Field inventory | §3 · Control khớp controlHint · typed 45/11 |
| Filters | LinErpListFilterBar · road SearchInput · kmFrom/kmTo · side · assetType · page=1 |
| Prototype · reviewUrl | § Prototype |
| API | **giữ** `api/v1/asset/csdl-records` · widen typed DTO/UiSchema · child tables · road-routes search |
| Entity | shell + **Schema_CsdlBieu8** + children · renumber formNo |
| Lookups | road-route P1 · province/status/side/assetType/markerKind static · org DEFER P2 |
| Next | SA **pending** đến lượt · chain ON |

## DES-GRID map → Lin\*

| Zone | DES-GRID | Component |
|------|----------|-----------|
| A | DES-GRID-A | `LinPageLayout` header + back hub |
| B | DES-GRID-B | `catalogToolbar` + `LinErpListFilterBar` |
| C | DES-GRID-C0–C3 | `LinCatalogDataGrid` + row menu · subset_by_type |
| D | DES-GRID-D | `LinCatalogListPagination` |
| F | DES-GRID-F | `LinCatalogUiSchemaEditorModal` · `traffic-safety` |
| H | DES-GRID-H | `LinCatalogHistoryModal` |
| Z | DES-GRID-Z | Slideout 2 cột · shared + 1 child · footer Hủy/Lưu |
| Leave | — | `LeaveConfirmModal` |
| Type UX | — | Confirm clear child |

## DoR checklist (PASS)

| Check | Pass |
|-------|------|
| Kind B+D + Form Slideout + `data-form-cols="2"` · shared + 1 child | ✅ |
| Screens list/C/E/V/Copy/delete/hist · hub entry · peer optional | ✅ |
| DES-GRID-A…D (+ C2a/C3/F/H/Z) | ✅ |
| Toolbar FULL · icons §0 | ✅ |
| Filter LinErpListFilterBar · input cụm phải · road SearchInput · assetType | ✅ |
| Control-map = controlHint · typed 45/11 · **cấm** detail* only · **cấm** wide 45 | ✅ |
| Q-ROUTE alias_now · Q-CHILD child_tables · Q-TYPE-UX confirm · Q-LIST-COLS subset · Q-MARKER lookup_static · Q-REN with_typed · Q-PEER optional | ✅ |
| Prototype + reviewUrl | ✅ |
| LeaveConfirmModal + type-change confirm | ✅ |
| real_view_parity v1 + peerStdUrl + mfeStdUrl | ✅ |
| Hash skip analy · **cấm** re-scan | ✅ |
| Report DES-RPT N/A | ✅ |
| PO Grid AC | ✅ |

## Version meta (REQUIRED)

| Field | Value |
|-------|-------|
| skillId | agent-design |
| skillVersion | 2026.08.29.03 |
| schemaVersion | 1 |
| workflowVersion | 2026.09.01.02 |
| rulesVersion | 2026.08.31.2 |
| generatedAt | 2026-09-05T10:20:00.000Z |
| versionGate | ok |
| contentHashPriorDataAnaly | sha256:f972c82727726d256754d076435f9ef97c993b4f9844dc79e50b6415fcaf54be |
| headerFingerprintPrior | sha256:ba8b8db4f7637ee32cfd4a882b6abdc774c538f6c9812c3ecd1d13f6151cdd6f |
| orchestratorSkillVersion | 2026.09.01.02 |
| orchestratorWorkflowVersion | 2026.09.01.02 |
| orchestratorSchemaVersion | qldb-workflow-skill-v1 |
| dataAnalySkillVersion | 2026.08.25.01 |
| poSkillVersion | 2026.08.25.02 |
| taskId | `task_daa7f8e9` |
| packKind | list |
| changeScope | new_page |

---
<!-- Version meta: skillId=agent-design skillVersion=2026.08.29.03 schemaVersion=1 workflowVersion=2026.09.01.02 rulesVersion=2026.08.31.2 versionGate=ok contentHashPrior=sha256:f972c82727726d256754d076435f9ef97c993b4f9844dc79e50b6415fcaf54be -->
