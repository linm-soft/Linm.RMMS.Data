# Design — csdl-bieu-03 (Biểu 03 — Hầm đường bộ)

| Field | Value |
|-------|-------|
| feature | `csdl-bieu-03` |
| title | CSDL Biểu 03 — Hầm đường bộ |
| this role | `design` · `/agent-design` |
| Feature Kind | **B** catalog A–D+F · **D** Slideout Z1–Z3 · **`data-form-cols="2"`** |
| formSurface | **slideout** · `slideout_layout: footer_actions_only` · **cấm** Full-page / Modal form |
| status | `confirmed` (`design_confirm=approve` · autoApprove ON · `task_db02ce1d`) |
| changeScope | `new_page` |
| packKind | `list` |
| resource | `road-tunnels` |
| formNo | `03` · title VN **Hầm đường bộ** |
| columns | **42** (Excel Biểu 3 typed) |
| IdCode | prefix **`TN`** · `TN-yyyyMMdd-nnnn` · **cấm** Guid |
| peerSoTs | none (—) · Sổ 6 QL cầu/hầm deep-link only · **cấm** merge form (**GAP-BIEU03-PEER-01**) |
| prior · po | `confirmed` · `po/requirement.md` · `handoff/po-compact.md` · `task_69bca3c6` |
| prior · data_analy | `confirmed`/`done` · hash skip · `_data-analy/features/csdl-bieu-03-control-hint.md` · `csdl-bieu-03-real-data.md` · contentHash `sha256:2c03537918bbda56c29e1e1ef98cc081cc4e72c94447a1ac2f87f06bd6f9310e` · headerFingerprint `sha256:60f7ea4153b5853222bdeaf2679929a6e4c5b66b6973bcfe12e5bd9dd3fcfbcc` · **cấm** re-scan demo (**GAP-DES-DEMO-RESCAN-01**) |
| mfe | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Asset` |
| mfeStdRoute | **`/csdl-bieu-03`** (alias Navigate **now**) · hub `/so-ts/csdl-so-sach?resource=road-tunnels` |
| mfeStdUrl | `http://localhost:9301/csdl-bieu-03` |
| peerStdUrl / hub | `http://localhost:9301/so-ts/csdl-so-sach?resource=road-tunnels` |
| backend | `D:/AI-QLBD/Linm.RMMS.WebService` · domain **Asset** · `api/v1/asset/csdl-records` · BFF `web-bff/api/v1/asset/csdl-records` — **cấm ERP.*** · **cấm** invent `api/v1/infra/*` |
| catalogKind UI schema | **`road-tunnels`** (typed) |
| ui_repo_confirm | `approve` (`Linm.Web.RMMS.Asset`) |
| be_repo_confirm | `approve` (`Linm.RMMS.WebService`) — Design không chạy BE |
| design_confirm | **approve** (autoApprove ON · reviewUrl mở được) |
| shared_grid_example | `v1` |
| real_view_parity | `v1` |
| autoApprove | **ON** |
| e2eQa | **ON** — queued `/agent-qa*` · **cấm** e2e/start:std ở Design |
| taskId | `task_db02ce1d` · po `task_69bca3c6` · analy `task_df175ffd` |
| updatedAt | `2026-09-05T08:50:00.000Z` |

**Cấm:** re-scan demo · form chỉ 3 ô `detail*` · Full-page form · invent map canvas · merge Sổ 6 · 1 row 2 bộ GPS · ERP.* · invent API · native alert/confirm · yarn build/e2e/start:std · start role SA/Dev trong task này (**GAP-PKT-ROLE-01**).

## 0. Context & inventory (hash skip — **cấm** re-scan demo)

| ID | Path | Notes |
|----|------|-------|
| CTX-01 | `docs/context/features/csdl-bieu-03.md` | feature |
| DEM-01 | `…/csdl-so-sach-demo.html` → `…/asset/csdl-so-sach.html` | zone ref only · **cấm** SSOT data |
| DA-HINT | `specs/_data-analy/features/csdl-bieu-03-control-hint.md` | controlHint SSOT |
| DA-REAL | `specs/_data-analy/features/csdl-bieu-03-real-data.md` | §A+§B bind |
| PO-01 | `specs/csdl-bieu-03/po/requirement.md` | Q chốt · DoD |
| MFE | hub `CsdlSoSachPage` · form `CsdlFormSlideout` | generic → typed replace |
| SVC | `services/csdlSoSach/endpoint.ts` | `BASE=/asset/csdl-records` |
| DOMAIN | `Linm.RMMS.WebService/docs/DOMAIN-MAP.md` | Asset · `csdl-so-sach` · **GAP-BIEU03-DMAP-01** slug |

Persona: Khu QLĐB · Văn phòng Cục · Ban QLDA (web).

**≠** Sổ 6 QL cầu/hầm · ≠ hub generic 3 ô `detail*`.

### § Delta Current vs New (`new_page`)

| Area | Current (live) | New (this Design) | GAP |
|------|----------------|-------------------|-----|
| Entry | Hub-only `?resource=road-tunnels` | Alias **`/csdl-bieu-03`** + hub entry | GAP-BIEU03-ROUTE-01 |
| List cols | generic road/km/detail* | Typed tên hầm · dài · số ống · GPS summary · tubeIndex | GAP-BIEU03-TYPED-01 |
| Form | 3 ô `detail*` | Typed **42 cột** Slideout 2col **sectioned** | GAP-BIEU03-TYPED-01 / GAP-CSDL-CUC-03 |
| GPS | — | **six_numbers** lat/lng×3 · **cấm** map canvas | GAP-BIEU03-GPS-01 · Q-GPS |
| Tube | detailExtra free | `tubeCount` + `tubeIndex` · **2 ống = 2 bản ghi** | GAP-BIEU03-TUBE-01 · Q-TUBE |
| Kết cấu | — | xuyên · cấp · vỏ · tĩnh không · khổ · mặt đường | GAP-BIEU03-STRUCT-01 |
| Thoát/lề | — | drain* · shoulder* | GAP-BIEU03-DRAIN-01 |
| PCCC/TB | — | fire* · fan · light · CCTV/VMS | GAP-BIEU03-FIRE-01 |
| Vent/tải | — | ventilationType / designLoad **Text** | GAP-BIEU03-VENT-01 · Q-VENT |
| road | Text free | **SearchInput** `road-route` filter+form | GAP-CSDL-ROAD-01 |
| province | LOOKUP_STATIC | **keep_static** P1 | GAP-CSDL-PROV-01 |
| manageUnit | Text | Text P1 · SearchInput **DEFER P2** | GAP-CSDL-ORG-01 |
| Import/Export | stub | stub OUT XLS Biểu 3 | GAP-CSDL-XLS-01 |
| Peer | deep-link | deep-link only · **cấm** merge | GAP-BIEU03-PEER-01 |
| Sections | flat | **sectioned** GPS / kết cấu / thoát+PCCC / thiết bị | Q-SECTION |

**Không đổi:** Kind B A–D · Kind D Slideout · `LinPageLayout kind="catalog"` · pagination 50/100/200/500 · API prefix · resource key `road-tunnels` · IdCode **cấm** Guid · map=`none` · **cấm ERP.***.

**PO chốt (Design khóa):** Q-GPS=`six_numbers` · Q-TUBE=`two_rows` · Q-VENT=`text` · Q-ROUTE=`alias_now` · Q-PROV=`keep_static` · Q-SECTION=`sectioned` · open Q = **none**.

## 1. Kind + UI pattern (HARD)

| | |
|--|--|
| Feature Kind | **B+D** |
| List pattern | **1×** `LinPageLayout` kind=`catalog` — **cấm** nested `CatalogListShell` |
| Grid | `LinCatalogDataGrid` · kéo cột **default ON** |
| Filter | **`LinErpListFilterBar`** **1 hàng wrap** · **input + 🔍 cụm phải** — **cấm** nút Tìm riêng · **cấm** stack (**filter-bar-layout-hard**) |
| Footer | `LinCatalogListPagination` **50 / 100 / 200 / 500** |
| Form pattern | **Slideout** · `formSurface: slideout` · **`data-form-cols="2"`** · `footer_actions_only` · **sections** |
| Zone F | `LinCatalogUiSchemaEditorModal` catalogKind **`road-tunnels`** — **cấm** `LinListTableConfigModal` |
| Zone H | `LinCatalogHistoryModal` — stub OK P2 · **cấm** invent History API |
| Leave | Dirty → **`LeaveConfirmModal`** — **cấm** native alert/confirm (**GAP-DES-LEAVE-01**) |
| Typography | label **13** · input D14/M16 (**GAP-TYP-01**) |
| Toolbar icons | `erp-control-icon-map` §0 · config=`fa-cog` |
| Map | `map: none` — gis deep-link only · **cấm** invent canvas (**GAP-BIEU03-MAP-01**) |
| Skip chrome | GOVOne · demo sidebar/note |
| Report | **N/A** — packKind `list` · DES-RPT skip |

### Routes (Design chốt)

| Surface | Path |
|---------|------|
| Alias list | `/csdl-bieu-03` → same page as hub resource list |
| Hub entry | `/so-ts/csdl-so-sach?resource=road-tunnels` |
| Form | overlay Slideout · **cấm** Full-page |
| Peer Sổ 6 | deep-link only · **cấm** merge |
| Map | deep-link gis only |

## 2. Screens / zones

| Screen | FormMode | Zones | Controls / notes |
|--------|----------|-------|------------------|
| S-LIST | list | **DES-GRID-A · B · C0–C3 · D · F · H** | Filter + toolbar FULL · typed grid |
| S-FORM-CREATE | create | **DES-GRID-Z** Slideout 2col Z1–Z3 sectioned | footer Hủy/Lưu · leave |
| S-FORM-EDIT | edit | DES-GRID-Z | footer Hủy/Lưu · leave dirty |
| S-FORM-VIEW | view | DES-GRID-Z | readOnly · **cấm** disabled xám · footer Đóng/Sửa/Copy |
| S-FORM-COPY | create | DES-GRID-Z | clear id · new `TN-` code · đổi `tubeIndex`/GPS khi Copy ống |
| S-ACT-DELETE | — | Confirm modal | soft delete |
| S-HIST | — | DES-GRID-H | `LinCatalogHistoryModal` |
| S-HUB-ENTRY | — | — | hub card title VN · open resource |
| S-PEER-SO6 | — | — | deep-link Sổ 6 QL cầu/hầm only |
| S-SKIP-MAP | — | — | **Cấm** map canvas |

**devSlash:** `/agent-dev` (list + Slideout typed · **không** map / e2e ở Design).

### Zone A — Header

- Back hub `/so-ts/csdl-so-sach` · title «Biểu 03 — Hầm đường bộ» · **cấm** Thêm mới trên A · **cấm** slug trên title

### Zone B — Toolbar + filter (`LinErpListFilterBar`)

| key | Label | Control | catalogKind |
|-----|-------|---------|-------------|
| search | Tìm kiếm | `SearchTextInput` | text · mã · tên hầm · đường · ghi chú · **🔍 cụm phải** |
| province | Tỉnh/TP | `Dropdown` | LOOKUP_STATIC P1 |
| status | Tình trạng | `Dropdown` | LOOKUP_STATIC tot/tb/kem/hong |
| roadCode | Đường | `SearchInput` | **road-route** |
| kmFrom | Từ Km | `Number` | filter QS |
| kmTo | Đến Km | `Number` | filter QS |
| tunnelClass | Cấp hầm | `Dropdown` | LOOKUP_STATIC ĐB/MN · optional |
| tubeCount | Số ống | `Number` | optional filter |
| — | Làm mới / Lịch sử / Cấu hình / Xóa / Import·Export stub | `fa-sync-alt` · `fa-history` · `fa-cog` · `fa-trash` · stub toast OUT | |
| — | **Tạo mới** | primary Zone B phải | |

Filter đổi → page=1 · **search must work** · **cấm** nút Tìm riêng.

### Zone C — Grid columns (typed · **cấm** chỉ 3 detail)

STT · □ · **Mã** · **Tên hầm** · **Đường** · **Tỉnh** · **Lý trình** · **Cdài** · **Số ống** · **Ống số** · **GPS** (tóm tắt đầu/giữa/cuối) · **TT** · **ĐV QL** · ⋯  
Row menu: Xem / Sửa / Copy / Xóa / Lịch sử · optional open-so6 deep-link · kéo cột ON.

Empty: «Chưa có hầm đường bộ» · CTA Tạo mới.

### Zone D — Pagination

`LinCatalogListPagination` 50/100/200/500.

## 3. Field inventory (Control = controlHint · **cấm** đoán)

### 3.1 Form Slideout — typed Biểu 3 (42 cột · **sectioned**)

| # | uiField | Label VN | Control | Required | FormMode | Section | Notes |
|---|---------|----------|---------|----------|----------|---------|-------|
| — | code | Mã | Text readonly | auto | all ro | Z1 Định danh | IdCode `TN-` · **cấm** Guid |
| 1 | tunnelName | Tên hầm | Text | * | view=ro | Z1 | |
| 2–3 | roadCode / roadName | Mã/Tên đường | **SearchInput** | * | view=ro | Z1 | catalogKind `road-route` |
| 4 | province | Địa danh | Dropdown | * | view=ro | Z1 | LOOKUP_STATIC P1 |
| 5–6 | kmFrom / kmTo | Từ/Đến Km | Number | * | view=ro | Z1 | decimal |
| 7 | side | Vị trí L/R | Dropdown | | view=ro | Z1 | L/R/C/Both |
| 8–13 | gpsStartLat/Lng · gpsMidLat/Lng · gpsEndLat/Lng | GPS đầu/giữa/cuối | Number | * | view=ro | **GPS** | **Q-GPS** six_numbers |
| 14 | crossingType | Loại xuyên | Dropdown | * | view=ro | **Kết cấu** | núi/sông/đô thị/khác · SA enum |
| 15 | tunnelClass | Cấp hầm ĐB/MN | Dropdown | * | view=ro | Kết cấu | ĐB / MN |
| 16 | tubeCount | Số ống | Number | * | view=ro | Kết cấu | int ≥1 |
| 17 | tubeIndex | Ống số | Number | * nếu tubeCount>1 | view=ro | Kết cấu | **Q-TUBE** 1-based · mỗi ống 1 row |
| 18 | liningType | Vỏ hầm | Dropdown/Text | | view=ro | Kết cấu | BTCT / đá / thép / khác |
| 19 | clearanceM | Tĩnh không (m) | Number | | view=ro | Kết cấu | |
| 20–21 | sectionHeightM / sectionWidthM | Khổ C × R (m) | Number | | view=ro | Kết cấu | |
| 22 | carriageWidthM | B xe chạy (m) | Number | * | view=ro | Kết cấu | |
| 23 | pavementInTunnel | Mặt đường trong hầm | Dropdown/Text | | view=ro | Kết cấu | BTXM/BTN/… |
| 24–25 | drainLengthM / drainSpacingM | Thoát nước dài / KC | Number | | view=ro | **Thoát+PCCC** | |
| 26 | shoulderInTunnelM | Lề trong hầm (m) | Number | | view=ro | Thoát+PCCC | |
| 27 | firePump | PCCC bơm | Checkbox | | view=ro | Thoát+PCCC | |
| 28 | fireNicheCount | Hốc PCCC SL | Number | | view=ro | Thoát+PCCC | |
| 29 | fanCount | Quạt SL | Number | | view=ro | **Thiết bị** | |
| 30 | lightCount | Đèn SL | Number | | view=ro | Thiết bị | |
| 31 | hasCctv | CCTV | Checkbox | | view=ro | Thiết bị | |
| 32 | hasVms | VMS | Checkbox | | view=ro | Thiết bị | |
| 33 | lengthM | Chiều dài (m) | Number | * | view=ro | Thiết bị+meta | |
| 34 | builtYear | Năm XD | Number | | view=ro | Thiết bị+meta | year |
| 35 | status | Tình trạng | Dropdown | * | view=ro | Thiết bị+meta | LOOKUP_STATIC |
| 36 | manageUnit | ĐV QL | Text | | view=ro | Thiết bị+meta | **GAP-CSDL-ORG-01** DEFER SearchInput P2 |
| 37 | updatedByName | Người cập nhật | Text | | view=ro | Thiết bị+meta | audit |
| 38 | notes | Ghi chú | Textarea | | view=ro | Thiết bị+meta | full row |
| 39 | ventilationType | Loại thông gió | **Text** | | view=ro | Thiết bị+meta | **Q-VENT** text · SA enum later |
| 40 | escapeExitCount | Lối thoát hiểm SL | Number | | view=ro | Thiết bị+meta | |
| 41 | designLoad | Tải TK | **Text** | | view=ro | Thiết bị+meta | **Q-VENT** · SA shape |
| 42 | ownerUnit | Chủ quản | Text | | view=ro | Thiết bị+meta | optional |

**Cấm** mount `detailPrimary` / `detailSpec` / `detailExtra` làm form chính.  
**Tube UX:** `tubeCount=2` → user tạo **2 bản ghi** (Tạo mới ×2 hoặc Copy + đổi `tubeIndex` + GPS) — **cấm** 1 form chứa 2 bộ GPS.

### 3.2 controlHint map (Design chốt)

| Surface | Field | Control | catalogKind |
|---------|-------|---------|-------------|
| List B | search | SearchTextInput | — |
| List B | province / status / tunnelClass | Dropdown | LOOKUP_STATIC |
| List B | roadCode | SearchInput | road-route |
| List B | kmFrom / kmTo / tubeCount | Number | — |
| Form | roadCode/roadName | SearchInput | road-route |
| Form | province / status / side / crossingType / tunnelClass | Dropdown | LOOKUP_STATIC |
| Form | gps* ×6 | Number | — |
| Form | firePump / hasCctv / hasVms | Checkbox | — |
| Form | ventilationType / designLoad | Text | — |
| Form | manageUnit | Text | org-unit P2 |
| Form | notes | Textarea | — |
| Form | liningType / pavementInTunnel | Dropdown hoặc Text | LOOKUP_STATIC / free |

## 4. Real-data bind (cite DA-REAL · **cấm** invent)

| Operation | Path |
|-----------|------|
| List | `GET /web-bff/api/v1/asset/csdl-records?resource=road-tunnels` |
| Detail | `GET /web-bff/api/v1/asset/csdl-records/{id}` |
| Create | `POST /web-bff/api/v1/asset/csdl-records` body `resource=road-tunnels` + typed |
| Update | `PUT /web-bff/api/v1/asset/csdl-records/{id}` |
| Delete | `DELETE /web-bff/api/v1/asset/csdl-records/{id}` (soft) |
| road-route | `GET /integration/road-routes/search` |

API mirror: `api/v1/asset/csdl-records`. FE reuse `services/csdlSoSach/endpoint.ts` `BASE=/asset/csdl-records`.  
Entity shell: `CsdlCatalogRecordEntity` · typed `Schema_CsdlBieu3` — **SA**.  
**Cấm** ERP.* · invent `api/v1/so-ts/*` · invent `api/v1/infra/*` · demo-json / LS SSOT.

## Prototype (REQUIRED)

| | |
|--|--|
| Base | `shared_grid_example v1` + Slideout Z `data-form-cols="2"` sectioned |
| Artifact | `ui/prototype/csdl-bieu-03-list-prototype.html` |
| Zones | **DES-GRID-A · B · C0–C3 · D · F · H · Z** · content-only · **skip** GOVOne |
| Filter mock | `LinErpListFilterBar` 1 hàng wrap · input cụm phải · road SearchInput · tunnelClass / tubeCount optional |
| Form | Slideout typed 42 cột · sections GPS/kết cấu/thoát+PCCC/thiết bị · footer Hủy/Lưu · LeaveConfirmModal |
| SSOT | `shared_grid_example: v1` · `real_view_parity: v1` · `erp-control-icon-map` |
| **reviewUrl** | `file:///D:/AI-QLBD/Linm.RMMS.Data/specs/csdl-bieu-03/ui/prototype/csdl-bieu-03-list-prototype.html` |
| **peerStdUrl** | `http://localhost:9301/so-ts/csdl-so-sach?resource=road-tunnels` |
| **mfeStdUrl** | `http://localhost:9301/csdl-bieu-03` |

### Wire

```
[S-LIST] DES-GRID-A…D · F · H — filter + toolbar FULL + typed grid
[S-FORM] DES-GRID-Z Slideout data-form-cols=2 · sectioned 42 cột · footer only
[Leave] LeaveConfirmModal · toast mock — cấm native dialog
[Peer] deep-link Sổ 6 only · map none · GPS = Number×6 · 2 ống = 2 rows
```

## 5. Leave / alert

| Case | Control | Cấm |
|------|---------|-----|
| Dirty đóng slideout / back-hub | `LeaveConfirmModal` | `window.confirm` |
| API 4xx/5xx | `useAppToast` | `window.alert` |
| detail 404 | toast · đóng slideout | silent fail |
| GPS thiếu bắt buộc | validation toast field | silent save |
| tubeCount>1 thiếu tubeIndex | validation toast | silent save |
| Delete | Confirm modal | native `confirm` |
| History | `LinCatalogHistoryModal` | invent API path |
| Lookup road no match | SearchInput empty | free-text substitute |
| Empty list | VN «Chưa có hầm đường bộ» + CTA Tạo mới | fake demo rows SSOT |

## 6. Grid AC (Design confirm · PO)

AC-G list Kind B **PASS**. Report AC **N/A** — packKind `list` · DES-RPT skip.

## 7. Open questions (PO closed — Design không re-open)

| ID | Decision |
|----|----------|
| Q-GPS | **six_numbers** · UI 6 Number · **cấm** map canvas |
| Q-TUBE | **two_rows** · 2 ống = 2 bản ghi GPS · **cấm** child_table / 1 row 2 bộ GPS |
| Q-VENT | **text** · SA enum/unit later |
| Q-ROUTE | **alias_now** `/csdl-bieu-03` + hub |
| Q-PROV | **keep_static** P1 · master P2 |
| Q-SECTION | **sectioned** GPS / kết cấu / thoát+PCCC / thiết bị |
| GAP-CSDL-ORG-01 | **DEFER P2** Text |
| GAP-CSDL-XLS-01 | **OUT** pack stub |
| GAP-DES-DEMO-RESCAN-01 | **Cấm** re-scan · hash skip |

## Confirm

`design_confirm` = **approve** — autoApprove **ON** · agent tự confirm (`task_db02ce1d`). Chain **SA** enqueue (roles sau = pending đến lượt). **Cấm** Dev/BE/e2e trong task này.

## Handoff → SA

| Field | Value |
|-------|-------|
| Kind / pattern | B A–D+F + D Slideout `data-form-cols="2"` footer_only · sectioned |
| Field inventory | §3 · Control khớp controlHint · typed 42 cột |
| Filters | LinErpListFilterBar · road SearchInput · tunnelClass/tubeCount optional · page=1 |
| Prototype · reviewUrl | § Prototype |
| API | **giữ** `api/v1/asset/csdl-records` · widen typed DTO/UiSchema · road-routes search |
| Entity | shell + **Schema_CsdlBieu3** · GPS six_numbers · TUBE two_rows · VENT text |
| Lookups | road-route P1 · province static · org DEFER P2 |
| DOMAIN-MAP | thêm slug `csdl-bieu-03` (**GAP-BIEU03-DMAP-01**) |
| Next | SA **pending** đến lượt · chain ON |

## DES-GRID map → Lin\*

| Zone | DES-GRID | Component |
|------|----------|-----------|
| A | DES-GRID-A | `LinPageLayout` header + back hub |
| B | DES-GRID-B | `catalogToolbar` + `LinErpListFilterBar` |
| C | DES-GRID-C0–C3 | `LinCatalogDataGrid` + row menu |
| D | DES-GRID-D | `LinCatalogListPagination` |
| F | DES-GRID-F | `LinCatalogUiSchemaEditorModal` · `road-tunnels` |
| H | DES-GRID-H | `LinCatalogHistoryModal` |
| Z | DES-GRID-Z | Slideout 2 cột sectioned · footer Hủy/Lưu |
| Leave | — | `LeaveConfirmModal` |

## DoR checklist (PASS)

| Check | Pass |
|-------|------|
| Kind B+D + Form Slideout + `data-form-cols="2"` | ✅ |
| Screens list/C/E/V/Copy/delete/hist · hub entry · peer deep-link | ✅ |
| DES-GRID-A…D (+ C2a/C3/F/H/Z) | ✅ |
| Toolbar FULL · icons §0 | ✅ |
| Filter LinErpListFilterBar · input cụm phải · road SearchInput | ✅ |
| Control-map = controlHint · typed 42 · **cấm** detail* only | ✅ |
| Q-GPS six_numbers · Q-TUBE two_rows · Q-SECTION sectioned · Q-VENT text | ✅ |
| Prototype + reviewUrl | ✅ |
| LeaveConfirmModal | ✅ |
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
| generatedAt | 2026-09-05T08:50:00.000Z |
| versionGate | ok |
| contentHashPriorDataAnaly | sha256:2c03537918bbda56c29e1e1ef98cc081cc4e72c94447a1ac2f87f06bd6f9310e |
| headerFingerprintPrior | sha256:60f7ea4153b5853222bdeaf2679929a6e4c5b66b6973bcfe12e5bd9dd3fcfbcc |
| orchestratorSkillVersion | 2026.09.01.02 |
| orchestratorWorkflowVersion | 2026.09.01.02 |
| orchestratorSchemaVersion | qldb-workflow-skill-v1 |
| dataAnalySkillVersion | 2026.08.25.01 |
| poSkillVersion | 2026.08.25.02 |
| taskId | `task_db02ce1d` |
| packKind | list |
| changeScope | new_page |

---
<!-- Version meta: skillId=agent-design skillVersion=2026.08.29.03 schemaVersion=1 workflowVersion=2026.09.01.02 rulesVersion=2026.08.31.2 versionGate=ok contentHashPrior=sha256:2c03537918bbda56c29e1e1ef98cc081cc4e72c94447a1ac2f87f06bd6f9310e -->
