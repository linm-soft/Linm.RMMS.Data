# Design — csdl-bieu-06 (Biểu 06 — Hầm chui DS + hộp KT)

| Field | Value |
|-------|-------|
| feature | `csdl-bieu-06` |
| title | CSDL Biểu 06 — Hầm chui DS + hộp KT |
| this role | `design` · `/agent-design` |
| Feature Kind | **B** catalog A–D+F · **D** Slideout Z1–Z3 · **`data-form-cols="2"`** |
| formSurface | **slideout** · `slideout_layout: footer_actions_only` · **cấm** Full-page / Modal form |
| status | `confirmed` (`design_confirm=approve` · autoApprove ON · `task_2224e771`) |
| changeScope | `new_page` |
| packKind | `list` |
| resource | `underpasses` |
| formNo | `06` · title VN **Hầm chui DS + hộp KT** |
| columns | **19** (Excel Biểu 6 typed) |
| IdCode | prefix **`HC`** · `HC-yyyyMMdd-nnnn` · **cấm** Guid |
| peerSoTs | `so-ts-underpass` — deep-link only · **cấm** merge form (**GAP-BIEU06-PEER-01**) |
| prior · po | `confirmed` · `po/requirement.md` · `handoff/po-compact.md` · `task_93f99dd1` |
| prior · data_analy | `confirmed`/`done` · hash skip · `_data-analy/features/csdl-bieu-06-control-hint.md` · `csdl-bieu-06-real-data.md` · contentHash `sha256:ffc5c8381b04dcec3f0376df87187012f34b16bf211a3e3fb7311a8375a386f0` · headerFingerprint `sha256:3b2f5c531f0538509147846466d92090a3c8f5adc05a4be6d1dbb80ad73ff2a7` · **cấm** re-scan demo (**GAP-DES-DEMO-RESCAN-01**) |
| mfe | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Asset` |
| mfeStdRoute | **`/csdl-bieu-06`** (alias Navigate **now**) · hub `/so-ts/csdl-so-sach?resource=underpasses` |
| mfeStdUrl | `http://localhost:9301/csdl-bieu-06` |
| peerStdUrl / hub | `http://localhost:9301/so-ts/csdl-so-sach?resource=underpasses` |
| backend | `D:/AI-QLBD/Linm.RMMS.WebService` · domain **Asset** · `api/v1/asset/csdl-records` · BFF `web-bff/api/v1/asset/csdl-records` — **cấm ERP.*** · **cấm** invent `api/v1/infra/*` |
| catalogKind UI schema | **`underpasses`** (typed) |
| ui_repo_confirm | `approve` (`Linm.Web.RMMS.Asset`) |
| be_repo_confirm | `approve` (`Linm.RMMS.WebService`) — Design không chạy BE |
| design_confirm | **approve** (autoApprove ON · reviewUrl mở được) |
| shared_grid_example | `v1` |
| real_view_parity | `v1` |
| autoApprove | **ON** |
| e2eQa | **ON** — queued `/agent-qa*` · **cấm** e2e/start:std ở Design |
| taskId | `task_2224e771` · po `task_93f99dd1` · analy `task_b6ef926c` |
| updatedAt | `2026-09-05T14:25:00.000Z` |

**Cấm:** re-scan demo · form chỉ 3 ô `detail*` · Full-page form · invent map canvas · merge Sổ TS form · ERP.* · invent API · native alert/confirm · yarn build/e2e/start:std · start role SA/Dev trong task này (**GAP-PKT-ROLE-01**).

## 0. Context & inventory (hash skip — **cấm** re-scan demo)

| ID | Path | Notes |
|----|------|-------|
| CTX-01 | `docs/context/features/csdl-bieu-06.md` | feature |
| DEM-01 | `…/csdl-so-sach-demo.html` → `…/asset/csdl-so-sach.html` | zone ref only · **cấm** SSOT data |
| DA-HINT | `specs/_data-analy/features/csdl-bieu-06-control-hint.md` | controlHint SSOT |
| DA-REAL | `specs/_data-analy/features/csdl-bieu-06-real-data.md` | §A+§B bind |
| PO-01 | `specs/csdl-bieu-06/po/requirement.md` | Q chốt · DoD |
| MFE | hub `CsdlSoSachPage` · form `CsdlFormSlideout` | generic → typed replace |
| SVC | `services/csdlSoSach/endpoint.ts` | `BASE=/asset/csdl-records` |
| DOMAIN | `Linm.RMMS.WebService/docs/DOMAIN-MAP.md` | Asset · `csdl-so-sach` · peer `so-ts-underpass` |

Persona: Khu QLĐB · Văn phòng Cục · Ban QLDA (web).

**≠** Sổ TS `so-ts-underpass` · ≠ hub generic 3 ô `detail*` · ≠ `road-assets`.

### § Delta Current vs New (`new_page`)

| Area | Current (live) | New (this Design) | GAP |
|------|----------------|-------------------|-----|
| Entry | Hub-only `?resource=underpasses` | Alias **`/csdl-bieu-06`** + hub entry | GAP-BIEU06-ROUTE-01 |
| List cols | generic road/km/detail* | Typed khẩu độ · số ống · thân/cửa · dài · tải · mặt trong · chiếu sáng · thoát · năm · loại | GAP-BIEU06-TYPED-01 |
| Form | 3 ô `detail*` | Typed **19 cột** Slideout 2col · gồm hộp KT | GAP-BIEU06-TYPED-01 / GAP-CSDL-CUC-03 |
| underpassKind | — | Dropdown hầm chui DS / hộp KT | GAP-BIEU06-KIND-01 |
| apertureM | — | Number m (DB ApertureM) | GAP · Q-APERTURE |
| pipeCount | — | Number optional ≥1 khi nhập | GAP-BIEU06-PIPE-01 |
| body/portal | — | Dropdown KC thân + cửa | GAP-BIEU06-STRUCT-01 |
| designLoad | — | Dropdown HL93/H30/khác | GAP-BIEU06-LOAD-01 |
| pavementInside | — | Dropdown BTXM/BTN | GAP-BIEU06-PAVE-01 |
| lighting / drainage | — | Dropdown yes_no | GAP-BIEU06-LIGHT-01 / DRAIN-01 |
| kmPoint | demo km generic | Number Point · **không** ép kmTo | GAP-BIEU06-POINT-01 |
| road | Text free | **SearchInput** `road-route` filter+form | GAP-CSDL-ROAD-01 |
| province | LOOKUP_STATIC | **keep_static** P1 | GAP-CSDL-PROV-01 |
| manageUnit | Text | Text P1 · SearchInput **DEFER P2** | GAP-CSDL-ORG-01 |
| Import/Export | stub | stub OUT Biểu 6 · skip-bridge locked | GAP-CSDL-XLS-01 |
| Peer | deep-link | deep-link only · **cấm** merge | GAP-BIEU06-PEER-01 |

**Không đổi:** Kind B A–D · Kind D Slideout · `LinPageLayout kind="catalog"` · pagination 50/100/200/500 · API prefix · resource key · IdCode **cấm** Guid · map=`none` · **cấm ERP.***.

**PO chốt (Design khóa):** Q-ROUTE=`alias_now` · Q-PROV=`keep_static` · Q-APERTURE=`number_m` · Q-PIPE=`optional` · Q-LOAD=`lookup_hl` · Q-LIGHT=`yes_no` · Q-DRAIN=`yes_no` · Q-KIND=`hc_ds_hop_kt` · open Q = **none**.

## 1. Kind + UI pattern (HARD)

| | |
|--|--|
| Feature Kind | **B+D** |
| List pattern | **1×** `LinPageLayout` kind=`catalog` — **cấm** nested `CatalogListShell` |
| Grid | `LinCatalogDataGrid` · kéo cột **default ON** |
| Filter | **`LinErpListFilterBar`** **1 hàng wrap** · **input + 🔍 cụm phải** — **cấm** nút Tìm riêng · **cấm** stack (**filter-bar-layout-hard**) |
| Footer | `LinCatalogListPagination` **50 / 100 / 200 / 500** |
| Form pattern | **Slideout** · `formSurface: slideout` · **`data-form-cols="2"`** · `footer_actions_only` |
| Zone F | `LinCatalogUiSchemaEditorModal` catalogKind **`underpasses`** — **cấm** `LinListTableConfigModal` |
| Zone H | `LinCatalogHistoryModal` — stub OK P2 · **cấm** invent History API |
| Leave | Dirty → **`LeaveConfirmModal`** — **cấm** native alert/confirm (**GAP-DES-LEAVE-01**) |
| Typography | label **13** · input D14/M16 (**GAP-TYP-01**) |
| Toolbar icons | `erp-control-icon-map` §0 · config=`fa-cog` |
| Map | `map: none` — gis deep-link only · **cấm** invent canvas |
| Skip chrome | GOVOne · demo sidebar/note |
| Report | **N/A** — packKind `list` · DES-RPT skip |

### Routes (Design chốt)

| Surface | Path |
|---------|------|
| Alias list | `/csdl-bieu-06` → same page as hub resource list |
| Hub entry | `/so-ts/csdl-so-sach?resource=underpasses` |
| Form | overlay Slideout · **cấm** Full-page |
| Peer Sổ TS | navigate `/so-ts-underpass` or `/so-ts?type=UNDERPASS` only · **cấm** merge |
| Map | deep-link gis only |

## 2. Screens / zones

| Screen | FormMode | Zones | Controls / notes |
|--------|----------|-------|------------------|
| S-LIST | list | **DES-GRID-A · B · C0–C3 · D · F · H** | Filter + toolbar FULL · typed grid |
| S-FORM-CREATE | create | **DES-GRID-Z** Slideout 2col Z1–Z3 | footer Hủy/Lưu · leave |
| S-FORM-EDIT | edit | DES-GRID-Z | footer Hủy/Lưu · leave dirty |
| S-FORM-VIEW | view | DES-GRID-Z | readOnly · **cấm** disabled xám · footer Đóng/Sửa/Copy |
| S-FORM-COPY | create | DES-GRID-Z | clear id · new `HC-` code |
| S-ACT-DELETE | — | Confirm modal | soft delete |
| S-HIST | — | DES-GRID-H | `LinCatalogHistoryModal` |
| S-HUB-ENTRY | — | — | hub card title VN · open resource |
| S-PEER-SOTS | — | — | deep-link `/so-ts-underpass` |
| S-SKIP-MAP | — | — | **Cấm** map canvas |

**devSlash:** `/agent-dev` (list + Slideout typed · **không** map / e2e ở Design).

### Zone A — Header

- Back hub `/so-ts/csdl-so-sach` · title «Biểu 06 — Hầm chui DS + hộp KT» · **cấm** Thêm mới trên A · **cấm** slug trên title

### Zone B — Toolbar + filter (`LinErpListFilterBar`)

| key | Label | Control | catalogKind |
|-----|-------|---------|-------------|
| search | Tìm kiếm | `SearchTextInput` | text · mã · đường · ghi chú · **🔍 cụm phải** |
| province | Tỉnh/TP | `Dropdown` | LOOKUP_STATIC P1 |
| status | Tình trạng | `Dropdown` | LOOKUP_STATIC tot/tb/kem/hong |
| roadCode | Đường | `SearchInput` | **road-route** |
| kmPoint | Lý trình (Km) | `Number` | Point · **không** kmTo filter |
| underpassKind | Loại | `Dropdown` | LOOKUP hầm chui DS / hộp KT · **GAP-BIEU06-KIND-01** |
| — | Làm mới / Lịch sử / Cấu hình / Xóa / Import·Export stub | `fa-sync-alt` · `fa-history` · `fa-cog` · `fa-trash` · stub toast OUT | |
| — | **Tạo mới** | primary Zone B phải | |

Filter đổi → page=1 · **search must work** · **cấm** nút Tìm riêng.

### Zone C — Grid columns (typed · **cấm** chỉ 3 detail)

STT · □ · **Mã** · **Đường** · **Tỉnh** · **Km** · **Loại** · **Khẩu độ** · **Số ống** · **KC thân** · **Cdài** · **Tải** · **Chiếu sáng** · **Thoát** · **Năm** · **TT** · **ĐV QL** · ⋯  
Row menu: Xem / Sửa / Copy / Xóa / Lịch sử · kéo cột ON.

Empty: «Chưa có hầm chui / hộp KT» · CTA Tạo mới.

### Zone D — Pagination

`LinCatalogListPagination` 50/100/200/500.

## 3. Field inventory (Control = controlHint · **cấm** đoán)

### 3.1 Form Slideout — typed Biểu 6 (19 cột)

| # | uiField | Label VN | Control | Required | FormMode | Notes |
|---|---------|----------|---------|----------|----------|-------|
| — | code | Mã | Text readonly | auto | all ro | IdCode `HC-` · **cấm** Guid |
| 1–2 | roadCode / roadName | Mã/Tên đường | **SearchInput** | * | view=ro | catalogKind `road-route` · **GAP-CSDL-ROAD-01** |
| 3 | province | Địa danh | Dropdown | * | view=ro | LOOKUP_STATIC P1 · **Q-PROV** keep_static |
| 4 | kmPoint | Lý trình (Km) | Number | * | view=ro | decimal Point · **không** ép kmTo · **GAP-BIEU06-POINT-01** |
| 5 | underpassKind | Loại CT | Dropdown | * | view=ro | hầm chui DS / hộp KT · **Q-KIND** |
| 6 | apertureM | Khẩu độ (m) | Number | * | view=ro | DB `ApertureM` · **Q-APERTURE** number_m |
| 7 | pipeCount | Số ống / ngăn | Number | | view=ro | optional · integer ≥1 khi nhập · **Q-PIPE** |
| 8 | bodyStructure | Kết cấu thân | Dropdown | | view=ro | BT / BTCT / đá xây / khác · **GAP-BIEU06-STRUCT-01** |
| 9 | portalStructure | Kết cấu cửa | Dropdown | | view=ro | BT / BTCT / đá xây / khác |
| 10 | lengthM | Chiều dài (m) | Number | * | view=ro | |
| 11 | designLoad | Tải thiết kế | Dropdown | | view=ro | HL93 / H30 / khác · **Q-LOAD** lookup_hl |
| 12 | pavementInside | Mặt trong | Dropdown | | view=ro | BTXM / BTN · **GAP-BIEU06-PAVE-01** |
| 13 | lighting | Chiếu sáng | Dropdown | | view=ro | Có / Không · **Q-LIGHT** yes_no |
| 14 | drainage | Thoát nước | Dropdown | | view=ro | Có / Không · **Q-DRAIN** yes_no |
| 15 | builtYear | Năm XD/SD | Number | | view=ro | year |
| 16 | status | Tình trạng | Dropdown | * | view=ro | LOOKUP_STATIC |
| 17 | manageUnit | ĐV QL | Text | | view=ro | **GAP-CSDL-ORG-01** DEFER SearchInput P2 |
| 18–19 | notes | Ghi chú | Textarea | | view=ro | full row · header 19 = code + 18 rows |
| — | updatedAt | Cập nhật | DateTime ro | | readonly | audit |

**Cấm** mount `detailPrimary` / `detailSpec` / `detailExtra` làm form chính.

### 3.2 controlHint map (Design chốt)

| Surface | Field | Control | catalogKind |
|---------|-------|---------|-------------|
| List B | search | SearchTextInput | — |
| List B | province / status / underpassKind | Dropdown | LOOKUP_STATIC |
| List B | roadCode | SearchInput | road-route |
| List B | kmPoint | Number | — |
| Form | roadCode/roadName | SearchInput | road-route |
| Form | province / status / underpassKind / bodyStructure / portalStructure / designLoad / pavementInside / lighting / drainage | Dropdown | LOOKUP_STATIC |
| Form | kmPoint / apertureM / pipeCount / lengthM / builtYear | Number | — |
| Form | manageUnit | Text | — (org P2) |
| Form | notes | Textarea | — |

## 4. Real-data bind (cite DA-REAL · **cấm** invent)

| Operation | Path |
|-----------|------|
| List | `GET /web-bff/api/v1/asset/csdl-records?resource=underpasses` |
| Detail | `GET /web-bff/api/v1/asset/csdl-records/{id}` |
| Create | `POST /web-bff/api/v1/asset/csdl-records` body `resource=underpasses` + typed |
| Update | `PUT /web-bff/api/v1/asset/csdl-records/{id}` |
| Delete | `DELETE /web-bff/api/v1/asset/csdl-records/{id}` (soft) |
| road-route | `GET /integration/road-routes/search` |

API mirror: `api/v1/asset/csdl-records`. FE reuse `services/csdlSoSach/endpoint.ts` `BASE=/asset/csdl-records`.  
Entity shell: `CsdlCatalogRecordEntity` · typed `Schema_CsdlBieu6` — **SA**.  
**Cấm** ERP.* · invent `api/v1/so-ts/*` · invent `api/v1/infra/*` · demo-json / LS SSOT · bind `road-assets`.

## Prototype (REQUIRED)

| | |
|--|--|
| Base | `shared_grid_example v1` + Slideout Z `data-form-cols="2"` |
| Artifact | `ui/prototype/csdl-bieu-06-list-prototype.html` |
| Zones | **DES-GRID-A · B · C0–C3 · D · F · H · Z** · content-only · **skip** GOVOne |
| Filter mock | `LinErpListFilterBar` 1 hàng wrap · input cụm phải · road SearchInput · kmPoint · underpassKind |
| Form | Slideout typed 19 cột · Q-APERTURE number_m · Q-PIPE optional · Q-LOAD/LIGHT/DRAIN/KIND · footer Hủy/Lưu · LeaveConfirmModal |
| SSOT | `shared_grid_example: v1` · `real_view_parity: v1` · `erp-control-icon-map` |
| **reviewUrl** | `file:///D:/AI-QLBD/Linm.RMMS.Data/specs/csdl-bieu-06/ui/prototype/csdl-bieu-06-list-prototype.html` |
| **peerStdUrl** | `http://localhost:9301/so-ts/csdl-so-sach?resource=underpasses` |
| **mfeStdUrl** | `http://localhost:9301/csdl-bieu-06` |

### Wire

```
[S-LIST] DES-GRID-A…D · F · H — filter + toolbar FULL + typed grid
[S-FORM] DES-GRID-Z Slideout data-form-cols=2 · typed 19 cột · footer only
[Leave] LeaveConfirmModal · toast mock — cấm native dialog
[Peer] deep-link Sổ TS so-ts-underpass · map none
```

## 5. Leave / alert

| Case | Control | Cấm |
|------|---------|-----|
| Dirty đóng slideout / back-hub | `LeaveConfirmModal` | `window.confirm` |
| API 4xx/5xx | `useAppToast` | `window.alert` |
| detail 404 | toast · đóng slideout | silent fail |
| Delete | Confirm modal | native `confirm` |
| History | `LinCatalogHistoryModal` | invent API path |
| Lookup road no match | SearchInput empty | free-text substitute |
| Empty list | VN «Chưa có hầm chui / hộp KT» + CTA Tạo mới | fake demo rows SSOT |

## 6. Grid AC (Design confirm · PO)

AC-G list Kind B **PASS**. Report AC **N/A** — packKind `list` · DES-RPT skip.

## 7. Open questions (PO closed — Design không re-open)

| ID | Decision |
|----|----------|
| Q-ROUTE | **alias_now** `/csdl-bieu-06` + hub |
| Q-PROV | **keep_static** P1 · master P2 |
| Q-APERTURE | **number_m** (DB ApertureM) |
| Q-PIPE | **optional** P1 · integer ≥1 khi nhập |
| Q-LOAD | **lookup_hl** (HL93/H30/khác) |
| Q-LIGHT | **yes_no** |
| Q-DRAIN | **yes_no** |
| Q-KIND | **hc_ds_hop_kt** (hầm chui DS / hộp KT) |
| GAP-CSDL-ORG-01 | **DEFER P2** Text |
| GAP-CSDL-XLS-01 | **OUT** pack · toolbar stub OK |
| GAP-DES-DEMO-RESCAN-01 | **Cấm** re-scan · hash skip |

## Confirm

`design_confirm` = **approve** — autoApprove **ON** · agent tự confirm (`task_2224e771`). Chain **SA** enqueue (roles sau = pending đến lượt). **Cấm** Dev/BE/e2e trong task này.

## Handoff → SA

| Field | Value |
|-------|-------|
| Kind / pattern | B A–D+F + D Slideout `data-form-cols="2"` footer_only |
| Field inventory | §3 · Control khớp controlHint · typed 19 cột |
| Filters | LinErpListFilterBar · road SearchInput · kmPoint · underpassKind · page=1 |
| Prototype · reviewUrl | § Prototype |
| API | **giữ** `api/v1/asset/csdl-records` · widen typed DTO/UiSchema · road-routes search |
| Entity | shell + **Schema_CsdlBieu6** · aperture Number · pipeCount optional · load/light/drain LOOKUP |
| Lookups | road-route P1 · province static · underpassKind/body/portal/designLoad/pavement/light/drain static · org DEFER P2 |
| Next | SA **pending** đến lượt · chain ON |

## DES-GRID map → Lin\*

| Zone | DES-GRID | Component |
|------|----------|-----------|
| A | DES-GRID-A | `LinPageLayout` header + back hub |
| B | DES-GRID-B | `catalogToolbar` + `LinErpListFilterBar` |
| C | DES-GRID-C0–C3 | `LinCatalogDataGrid` + row menu |
| D | DES-GRID-D | `LinCatalogListPagination` |
| F | DES-GRID-F | `LinCatalogUiSchemaEditorModal` · `underpasses` |
| H | DES-GRID-H | `LinCatalogHistoryModal` |
| Z | DES-GRID-Z | Slideout 2 cột · footer Hủy/Lưu |
| Leave | — | `LeaveConfirmModal` |

## DoR checklist (PASS)

| Check | Pass |
|-------|------|
| Kind B+D + Form Slideout + `data-form-cols="2"` | ✅ |
| Screens list/C/E/V/Copy/delete/hist · hub entry · peer deep-link | ✅ |
| DES-GRID-A…D (+ C2a/C3/F/H/Z) | ✅ |
| Toolbar FULL · icons §0 | ✅ |
| Filter LinErpListFilterBar · input cụm phải · road SearchInput · kmPoint · underpassKind | ✅ |
| Control-map = controlHint · typed 19 · **cấm** detail* only | ✅ |
| Q-ROUTE alias_now · Q-APERTURE number_m · Q-PIPE optional · Q-LOAD/LIGHT/DRAIN/KIND | ✅ |
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
| generatedAt | 2026-09-05T14:25:00.000Z |
| versionGate | ok |
| contentHashPriorDataAnaly | sha256:ffc5c8381b04dcec3f0376df87187012f34b16bf211a3e3fb7311a8375a386f0 |
| headerFingerprintPrior | sha256:3b2f5c531f0538509147846466d92090a3c8f5adc05a4be6d1dbb80ad73ff2a7 |
| orchestratorSkillVersion | 2026.09.01.02 |
| orchestratorWorkflowVersion | 2026.09.01.02 |
| orchestratorSchemaVersion | qldb-workflow-skill-v1 |
| dataAnalySkillVersion | 2026.08.25.01 |
| poSkillVersion | 2026.08.25.02 |
| taskId | `task_2224e771` |
| packKind | list |
| changeScope | new_page |

---
<!-- Version meta: skillId=agent-design skillVersion=2026.08.29.03 schemaVersion=1 workflowVersion=2026.09.01.02 rulesVersion=2026.08.31.2 versionGate=ok contentHashPrior=sha256:ffc5c8381b04dcec3f0376df87187012f34b16bf211a3e3fb7311a8375a386f0 -->
