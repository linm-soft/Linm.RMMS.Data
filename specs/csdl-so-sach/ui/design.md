# Design — csdl-so-sach (CSDL 12 biểu + 8 sổ BDTX · edit_page)

| Field | Value |
|-------|-------|
| feature | `csdl-so-sach` |
| this role | `design` · `/agent-design` |
| Feature Kind | **G** hub + **B** catalog A–D+F + **D** Slideout Z1–Z3 |
| status | `confirmed` |
| design_confirm | **approve** (`autoApprove=ON` · `task_01f113ac`) |
| changeScope | `edit_page` |
| packKind | `list` |
| gap | `edit_page` · GAP-CSDL-ROAD-01 · GAP-QA-HUB-SLUG · GAP-CSDL-ROUTE-UI · GAP-CSDL-API-DOC · GAP-CSDL-PROV-01 · GAP-CSDL-HIST-01 |
| mfe | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Asset` · `ui_repo_confirm` **locked** |
| mfeStdRoute | `/so-ts/csdl-so-sach` |
| mfeStdUrl | `http://localhost:9301/so-ts/csdl-so-sach` |
| peerStdUrl | `http://localhost:9301/so-ts/csdl-so-sach` |
| real_view_parity | `v1` |
| shared_grid_example | `v1` |
| backend | `D:/AI-QLBD/Linm.RMMS.WebService` · domain **Asset** · **`api/v1/asset/csdl-records`** · **cấm ERP.*** |
| prior · data_analy | `confirmed`/`done` · hash skip · `specs/_data-analy/features/csdl-so-sach-control-hint.md` · `csdl-so-sach-real-data.md` · contentHash `sha256:e13a39df3b06c9b08f1ef4f197b6b0e76e3d7863b1e6fffe42a196a22bb1faad` · headerFingerprint `sha256:0528db4c9a04d817a2fd2d9867ace7ebf739fb05aac01942032a7110d9ff6a14` · **cấm** re-scan demo (**GAP-DES-DEMO-RESCAN-01**) |
| prior · po | `confirmed` · `po/requirement.md` · `task_1a6a0841` |
| autoApprove | **ON** |
| e2eQa | **ON** — queued `/agent-qa*` · **cấm** e2e/start:std ở role Design |
| updatedAt | `2026-08-29T11:05:00.000Z` |
| taskId | `task_01f113ac` · analy `task_21f924bd` · po `task_1a6a0841` |

**Cấm:** Dev/BE · re-scan DEM · invent `api/v1/so-ts/csdl-records` · ERP.* · parent JSON · yarn build/e2e/start:std · start role khác (**GAP-PKT-ROLE-01**).

## 0. Context & inventory (hash skip — **cấm** re-scan demo)

| ID | Path | Notes |
|----|------|-------|
| CTX-01 | `docs/context/features/csdl-so-sach.md` | Hub + list + form |
| CTX-02 | `docs/context/features/csdl-so-sach-control-map.md` | control-map |
| CTX-03 | `docs/context/11-CSDL-SO-SACH-DATABASE-API.md` | API/DB SSOT |
| DEM-01 | `…/csdl-so-sach-demo.html` | zone ref only · **cấm** SSOT data |
| DEM-02 | `…/asset/csdl-so-sach.html` | page ref · **cấm** demo-json |
| DI-01 | — | **no Excel** · import OUT |
| DA-01 | `specs/_data-analy/features/csdl-so-sach-control-hint.md` | controlHint SSOT |
| DA-02 | `specs/_data-analy/features/csdl-so-sach-real-data.md` | real-data §A–§F |
| PO-01 | `specs/csdl-so-sach/po/requirement.md` | Grid AC · Screens · Leave · Q chốt |
| MFE hub+list | `…/CsdlSoSachPage.tsx` | Kind G+B live |
| MFE form | `…/CsdlFormSlideout.tsx` | Kind D live |
| MFE svc | `…/services/csdlSoSach/endpoint.ts` | `BASE=/asset/csdl-records` |
| DOMAIN | `Linm.RMMS.WebService/docs/DOMAIN-MAP.md` | Asset · `csdl-so-sach` |

Persona: Khu QLĐB · Văn phòng · Nhà thầu BDTX · Hạt trưởng.

**≠** `pavement-section` (Biểu 1 deep) · ≠ `asset` (SỔ TÀI SẢN).

### § Delta Current vs New (`edit_page`)

| Area | Current (live) | New (this Design) | Action |
|------|----------------|-------------------|--------|
| Route docs | Design cũ `/asset/…` | **`/so-ts/csdl-so-sach`** | **GAP-CSDL-ROUTE-UI** |
| API docs | lệch `so-ts` API | **`api/v1/asset/csdl-records`** | **GAP-CSDL-API-DOC** |
| `roadName` | Text free | **SearchInput** `road-route` filter+form | **GAP-CSDL-ROAD-01** |
| Hub card meta | slug `c.key` | **title / listTitle VN** | **GAP-QA-HUB-SLUG** |
| `province` | Select 5 tỉnh | **LOOKUP_STATIC** P1 keep | **GAP-CSDL-PROV-01** |
| History | stub | **`LinCatalogHistoryModal`** | **GAP-CSDL-HIST-01** |
| org units | Text | **DEFER P2** Text slim | **GAP-CSDL-ORG-01** |
| Sổ typed cols | Col1–3 | **DEFER** report | **GAP-RPT-SRC-CSDL-01** |
| Kind / shell | G+B+D live | **Giữ** Slideout · 1× LinPageLayout | — |

## 1. Kind + UI pattern (HARD)

| | |
|--|--|
| Feature Kind | **G+B+D** |
| Hub | Kind **G** — Tab CSDL(12)/Sổ(8) · KPI · card grid · **cấm** Thêm mới trên hub title |
| List pattern | **1×** `LinPageLayout` kind=`catalog` — **cấm** nested `CatalogListShell` |
| Grid | `LinCatalogDataGrid` · kéo cột **default ON** |
| Filter | **`LinErpListFilterBar`** **1 hàng wrap** · **input + 🔍 cụm phải** — **cấm** nút Tìm riêng · **cấm** stack (**filter-bar-layout-hard**) |
| Footer | `LinCatalogListPagination` **50 / 100 / 200 / 500** |
| Form pattern | **Slideout** · `formSurface: slideout` · **`data-form-cols="2"`** · `slideout_layout: footer_actions_only` |
| Zone F | `LinCatalogUiSchemaEditorModal` catalogKind `csdl-records` — **cấm** `LinListTableConfigModal` |
| Zone H | `LinCatalogHistoryModal` — **cấm** invent History API |
| Leave | Dirty → **`LeaveConfirmModal`** — **cấm** native alert/confirm (**GAP-DES-LEAVE-01**) |
| Typography | label **13** · input D14/M16 (**GAP-TYP-01**) |
| Toolbar icons | `erp-control-icon-map` §0 · config=`fa-cog` |
| Map | `map: none` — deep-link gis / Biểu1 only |
| Skip chrome | GOVOne · demo sidebar/note |

### Routes (Design chốt · live)

| Surface | Path |
|---------|------|
| Hub | `/so-ts/csdl-so-sach` |
| List | `/so-ts/csdl-so-sach?resource=` |
| Form | overlay Slideout · QS `?form=` optional |
| Biểu 1 deep | navigate `pavement-section` (khác slug) |
| Map | deep-link gis only |

## 2. Screens / zones

| Screen | FormMode | Zones | Controls / notes |
|--------|----------|-------|------------------|
| S-HUB | hub | Kind G | Tab · KPI · cards title VN · open-resource |
| S-LIST | list | **DES-GRID-A…D · F · H** | Filter SearchText + province/status/dates + **roadName SearchInput** · Tạo mới Zone B |
| S-FORM-CREATE | create | **DES-GRID-Z** Slideout 2col | footer Hủy/Lưu · leave |
| S-FORM-EDIT | edit | DES-GRID-Z | footer Hủy/Lưu |
| S-FORM-VIEW | view | DES-GRID-Z | readOnly · **không** disabled xám · footer Đóng/Sửa/Copy |
| S-FORM-COPY | create | DES-GRID-Z | clear id · new code |
| S-ACT-DELETE | — | Confirm modal | soft delete |
| S-HIST | — | DES-GRID-H | `LinCatalogHistoryModal` |
| S-ENTRIES | — | inline_grid trong Z | sổ only · Col1–3 + note |
| S-SKIP-MAP | — | — | **Cấm** map canvas |

### Zone A — Header (list)

- Back hub · title theo resource · **cấm** Thêm mới trên A

### Zone B — Toolbar + filter

| key | Label | Control | catalogKind |
|-----|-------|---------|-------------|
| search | Tìm kiếm | `SearchTextInput` | text |
| province | Tỉnh/TP | `Dropdown` | LOOKUP_STATIC |
| status | Tình trạng | `Dropdown` | LOOKUP_STATIC |
| fromDate | Từ ngày | `Date` | — |
| toDate | Đến ngày | `Date` | — |
| roadName | Tên đường | `SearchInput` | **road-route** |
| — | Làm mới / Lịch sử / Cấu hình / Xóa / Import·Export stub | `fa-sync-alt` · `fa-history` · `fa-cog` · `fa-trash` · stub toast | |
| — | **Tạo mới** | primary Zone B phải | |

Filter đổi → page=1 · **search must work**.

### Zone C — Grid columns

STT · □ · **Mã** · **Đường** · **Tỉnh** · **Lý trình** · **TT** · **ĐV QL** · **Chi tiết** · ⋯  
Row menu: Xem / Sửa / Copy / Xóa / Lịch sử.

### Zone D — Pagination

`LinCatalogListPagination` 50/100/200/500.

## 3. Field inventory (Control = controlHint · **cấm** đoán)

| uiField | Label VN | Control | Required | FormMode lock | Notes |
|---------|----------|---------|----------|---------------|-------|
| code | Mã | Text readonly IdCode | auto | all readonly | `XX-yyyyMMdd-nnnn` |
| roadName | Tên đường | **SearchInput** | * | view=readOnly | **road-route** · **GAP-CSDL-ROAD-01** |
| province | Tỉnh | Dropdown | * | view=readOnly | LOOKUP_STATIC P1 |
| kmFrom | Lý trình từ | Number | * | view=readOnly | |
| kmTo | Lý trình đến | Number | | view=readOnly | |
| side | Bên | Dropdown | | view=readOnly | L/R/C/Both |
| status | Trạng thái | Dropdown | * | view=readOnly | tot/tb/kem/hong |
| manageUnit | ĐV quản lý | Text | | view=readOnly | **GAP-CSDL-ORG-01** DEFER P2 |
| ownerUnit | Chủ QLSD | Text | | view=readOnly | DEFER P2 |
| detailPrimary | Chi tiết chính | Text | * | view=readOnly | label theo resource |
| detailSpec | Thông số | Text | | view=readOnly | |
| detailExtra | Bổ sung | Text | | view=readOnly | |
| notes | Ghi chú | Textarea | | view=readOnly | full row |
| bookNo | Số sổ | Text | sổ | view=readOnly | |
| contractor | Nhà thầu | Text | sổ | view=readOnly | partner P2 optional |
| entries[] | Dòng sổ | inline_grid | sổ | view=readOnly | Col1–3 + note |
| updatedAt | Cập nhật | DateTime ro | | readonly | audit |

### controlHint map (Design chốt)

| Surface | Field | Control | catalogKind |
|---------|-------|---------|-------------|
| Hub | catalogTab | Tab | — |
| Hub | card.title | text VN | **cấm** slug meta |
| List B | search | SearchTextInput | — |
| List B | province / status | Dropdown | LOOKUP_STATIC |
| List B | fromDate / toDate | Date | — |
| List B | roadName | SearchInput | road-route |
| Form | roadName | SearchInput | road-route |
| Form | province / status / side | Dropdown | LOOKUP_STATIC |
| Form | entries[] | pattern_inline_grid | — |

## 4. Real-data bind (cite DA-02 · **cấm** invent)

| Operation | Path |
|-----------|------|
| Catalog hub | `GET /web-bff/api/v1/asset/csdl-records/catalog` |
| List | `GET /web-bff/api/v1/asset/csdl-records?resource=…` |
| Detail | `GET /web-bff/api/v1/asset/csdl-records/{id}` |
| Create | `POST /web-bff/api/v1/asset/csdl-records` |
| Update | `PUT /web-bff/api/v1/asset/csdl-records/{id}` |
| Delete | `DELETE /web-bff/api/v1/asset/csdl-records/{id}` (soft) |
| road-route lookup | `GET /integration/road-routes/search` |

API mirror: `api/v1/asset/csdl-records`. FE: `services/csdlSoSach/endpoint.ts` `BASE=/asset/csdl-records`.  
**Cấm** ERP.* · invent `api/v1/so-ts/csdl-records` · invent `api/v1/infra/*` · parent JSON · localStorage SSOT.

### Resources (polymorphic)

| resource | Biểu/Sổ | prefix IdCode |
|----------|---------|---------------|
| `pavement-sections` … `green-assets` | 12 biểu CSDL | MD·BR·TN·CV·RN·HC·AT·MK·KE·LE·LT·CX |
| `patrol-logs` … `inspection-logs` | 8 sổ BDTX (`book=true`) | SO |

## Prototype (REQUIRED)

| | |
|--|--|
| Base | `agent-design/example/shared-grid-example.html` + Slideout Z `data-form-cols="2"` |
| Artifact | `ui/prototype/csdl-so-sach-list-prototype.html` |
| Zones | Hub G · **DES-GRID-A · B · C0–C3 · D · F · H · Z** · content-only · **skip** GOVOne chrome |
| Filter mock | `LinErpListFilterBar` 1 hàng wrap · input cụm phải · roadName SearchInput |
| Hub cards | title VN · **cấm** slug làm meta chính (**GAP-QA-HUB-SLUG**) |
| Form | Slideout panel phải · footer Hủy/Lưu · LeaveConfirmModal |
| SSOT | `shared_grid_example: v1` · `real_view_parity: v1` · `erp-control-icon-map` |
| **reviewUrl** | `file:///D:/AI-QLBD/Linm.RMMS.Data/specs/csdl-so-sach/ui/prototype/csdl-so-sach-list-prototype.html` |
| **peerStdUrl** | `http://localhost:9301/so-ts/csdl-so-sach` |

### Wire

```
[S-HUB] Tab CSDL|Sổ · KPI · cards title VN → open-resource
[S-LIST] DES-GRID-A…D · F · H — filter + toolbar FULL + grid
[S-FORM] DES-GRID-Z Slideout data-form-cols=2 · footer only · entries grid (sổ)
[Leave] LeaveConfirmModal · toast mock — cấm native dialog
```

## 5. Leave / alert (from PO §8)

| Case | Control | Cấm |
|------|---------|-----|
| Dirty đóng slideout / back-hub | `LeaveConfirmModal` | `window.confirm` |
| API 4xx/5xx | `useAppToast` | `window.alert` |
| detail 404 | toast · đóng slideout | silent fail |
| Delete | Confirm modal | native `confirm` |
| History | `LinCatalogHistoryModal` | invent API path |
| Lookup road no match | SearchInput empty | free-text substitute |

## 6. Grid AC (Design confirm · PO §6)

AC-G-01…15 **PASS** trên Kind B list. Report AC **N/A** — packKind `list` · typed sổ **DEFER** (**GAP-RPT-SRC-CSDL-01**).

## 7. Open questions (PO closed — Design không re-open)

| ID | Decision |
|----|----------|
| Q-ROAD | **SearchInput road-route** P1 filter+form |
| Q-PROV | **keep_static** LOOKUP_STATIC P1 |
| Q-ENTRIES | **defer_report** Col1–3 |
| GAP-CSDL-ORG-01 | **DEFER P2** Text |
| GAP-QA-HUB-SLUG | title VN P1 |
| GAP-CSDL-HIST-01 | `LinCatalogHistoryModal` · **cấm** invent API |
| GAP-CSDL-ROUTE-UI | **`/so-ts/csdl-so-sach`** |
| GAP-CSDL-API-DOC | **`api/v1/asset/csdl-records`** |
| GAP-DES-DEMO-RESCAN-01 | **Cấm** re-scan · hash skip |

## Confirm

`design_confirm` = **approve** — autoApprove **ON** · agent tự confirm (`task_01f113ac`). Chain **SA** enqueue (roles sau = pending đến lượt). **Cấm** Dev/BE/e2e trong task này.

## Handoff → SA

| Field | Value |
|-------|-------|
| Kind / pattern | G hub + B A–D+F + D Slideout `data-form-cols="2"` footer_only |
| Field inventory | §3 · Control khớp controlHint |
| Filters | LinErpListFilterBar · roadName SearchInput · page=1 |
| Prototype · reviewUrl | § Prototype |
| API | **giữ** `api/v1/asset/csdl-records` · road-routes search · **cấm** đổi trừ gap |
| Entity | `CsdlCatalogRecord` + child `rmms_csdl_book_entries` · **cấm** parent JSON |
| Lookups | road-route P1 · province static · org DEFER P2 |
| Next | SA **pending** đến lượt · chain ON |

## DES-GRID map → Lin\*

| Zone | DES-GRID | Component |
|------|----------|-----------|
| Hub | — | Kind G cards / tabs / KPI |
| A | DES-GRID-A | `LinPageLayout` header + back |
| B | DES-GRID-B | `catalogToolbar` + `LinErpListFilterBar` |
| C | DES-GRID-C0–C3 | `LinCatalogDataGrid` + row menu |
| D | DES-GRID-D | `LinCatalogListPagination` |
| F | DES-GRID-F | `LinCatalogUiSchemaEditorModal` |
| H | DES-GRID-H | `LinCatalogHistoryModal` |
| Z | DES-GRID-Z | Slideout 2 cột · footer Hủy/Lưu |
| Leave | — | `LeaveConfirmModal` |

## DoR checklist (PASS)

| Check | Pass |
|-------|------|
| Kind G+B+D + Form Slideout + `data-form-cols="2"` | ✅ |
| Screens hub/list/C/E/V/Copy/delete/hist/entries | ✅ |
| DES-GRID-A…D (+ C2a/C3/F/H/Z) | ✅ |
| Toolbar FULL · icons §0 | ✅ |
| Filter LinErpListFilterBar · input cụm phải · road SearchInput | ✅ |
| Control-map = controlHint | ✅ |
| Prototype + reviewUrl | ✅ |
| LeaveConfirmModal | ✅ |
| real_view_parity v1 + peerStdUrl | ✅ |
| Hash skip analy · **cấm** re-scan | ✅ |
| PO Grid AC | ✅ |

## Version meta (REQUIRED)

| Field | Value |
|-------|-------|
| skillId | agent-design |
| skillVersion | 2026.08.29.03 |
| schemaVersion | 1 |
| workflowVersion | 2026.08.29.03 |
| rulesVersion | 2026.08.29.31 |
| generatedAt | 2026-08-29T11:05:00.000Z |
| versionGate | rechecked |
| contentHashPriorDataAnaly | sha256:e13a39df3b06c9b08f1ef4f197b6b0e76e3d7863b1e6fffe42a196a22bb1faad |
| headerFingerprintPrior | sha256:0528db4c9a04d817a2fd2d9867ace7ebf739fb05aac01942032a7110d9ff6a14 |
| orchestratorSkillVersion | 2026.08.29.03 |
| orchestratorWorkflowVersion | 2026.08.29.03 |
| orchestratorSchemaVersion | qldb-workflow-skill-v1 |
| dataAnalySkillVersion | 2026.08.25.01 |
| poSkillVersion | 2026.08.25.02 |
| taskId | `task_01f113ac` |

---
<!-- Version meta: skillId=agent-design skillVersion=2026.08.29.03 schemaVersion=1 workflowVersion=2026.08.29.03 rulesVersion=2026.08.29.31 versionGate=rechecked contentHashPriorDataAnaly=sha256:e13a39df3b06c9b08f1ef4f197b6b0e76e3d7863b1e6fffe42a196a22bb1faad headerFingerprintPrior=sha256:0528db4c9a04d817a2fd2d9867ace7ebf739fb05aac01942032a7110d9ff6a14 taskId=task_01f113ac -->
