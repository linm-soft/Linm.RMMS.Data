# Design — traffic-sign-type (Loại biển báo · QCVN 41)

| Field | Value |
|-------|-------|
| feature | `traffic-sign-type` |
| title | Loại biển báo |
| this role | `design` · `/agent-design` |
| Feature Kind | **B** — Catalog flat list A–D+F · form **Slideout** Z1–Z3 · **`data-form-cols="2"`** |
| formSurface | **slideout** · `slideout_layout: footer_actions_only` · **cấm** Full-page / Modal form |
| status | `confirmed` (`design_confirm=approve` · autoApprove ON · `task_5c6a5cc1`) |
| changeScope | `new_page` (pipeline docs · live Master+Integration scaffold — bind SSOT) |
| packKind | **`master`** (`master_catalog`) |
| demo | **N/A** (`master-catalog-no-demo`) — **cấm** DEM-* · **cấm** GOVOne chrome |
| prior · po | `confirmed` · `po/requirement.md` · `handoff/po-compact.md` · `task_431c0ff8` |
| prior · data_analy | `confirmed`/`done` · hash skip · contentHash `sha256:e3aada6d5b40ee2b06635701491bbf3cca71444f95c42b42bbc1bc9d0f03ddbb` · **cấm** re-scan demo (**GAP-DES-DEMO-RESCAN-01**) |
| mfe | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Master` |
| mfeStdRoute | `/mas/loai-bien-bao` |
| mfeStdUrl | `http://localhost:9318/mas/loai-bien-bao` |
| peerStdUrl | `http://localhost:9318/mas/loai-tai-san` |
| backend | `D:/AI-QLBD/Linm.RMMS.WebService` · domain **Integration** · `api/v1/integration/traffic-sign-types` · **cấm ERP.*** · **cấm** `api/v1/rmms/*` |
| catalogKind UI schema | **`traffic-sign-type`** |
| ui_repo_confirm | `approve` (`Linm.Web.RMMS.Master`) |
| be_repo_confirm | `approve` (`Linm.RMMS.WebService`) — Design không chạy BE |
| design_confirm | **approve** (autoApprove ON · reviewUrl mở được) |
| shared_grid_example | `v1` |
| real_view_parity | `v1` |
| autoApprove | **ON** |
| e2eQa | **ON** — queued `/agent-qa*` · **cấm** e2e/start:std ở Design |
| taskId | `task_5c6a5cc1` · po `task_431c0ff8` · analy `task_6a62b9b6` |
| updatedAt | `2026-09-06T02:45:00.000Z` |
| skillId | `agent-design` |
| skillVersion | `2026.08.25.01` |
| workflowVersion | `2026.09.05.03` |
| rulesVersion | `2026.09.05.8` |
| schemaVersion | `1` |
| versionGate | `rechecked` |

**Cấm:** re-scan demo · invent pict / mã seed · Full-page form · Modal form (PO đã chốt Slideout) · ERP.* · invent API · native alert/confirm · yarn build/e2e/start:std · start role SA/Dev trong task này (**GAP-PKT-ROLE-01**).

## 0. Context & inventory (hash skip)

| ID | Path | Notes |
|----|------|-------|
| CTX-01 | `docs/context/features/traffic-sign-type.md` | feature · contentHash e3aada6d… |
| DEM-* | **N/A** | master-catalog-no-demo |
| DA-HINT | `specs/_data-analy/features/traffic-sign-type-control-hint.md` | controlHint SSOT |
| DA-REAL | `specs/_data-analy/features/traffic-sign-type-real-data.md` | §A+§B PASS |
| PO-01 | `specs/traffic-sign-type/po/requirement.md` | Slideout · Grid AC |
| SEED | `data-import/so-hieu-bien-bao/traffic_sign_types.csv` | ~380 · **cấm** invent |
| MFE | `TrafficSignTypeListPage` · `/mas/loai-bien-bao` | Kind B live |
| SVC | `services/trafficSignType/endpoint.ts` | BASE=`/integration/traffic-sign-types` |
| DOMAIN | `DOMAIN-MAP.md` | **GAP-TST-DM-01** → SA |
| PEER | `loai-tai-san` (asset-type) | real_view_parity · form Modal OOS |

Persona: Admin Master · Import ops · Kỹ thuật viên Sổ TS biển báo.

### § Delta Current vs New

| Area | Current (live) | New (this Design) | GAP |
|------|----------------|-------------------|-----|
| Form shell | Slideout live (`*FormModal*` file name) | **Chốt Slideout** `footer_actions_only` · 2 cột | GAP-TST-FORM-01 **closed** |
| Control map | scaffold | controlHint chốt · inventory | — |
| Icon | NULL | Text URL/path · **cấm** seed pict | GAP-TST-ICON-01 |
| DOMAIN-MAP | 0 slug | SA thêm | GAP-TST-DM-01 |
| Prototype | stub | A–D+F+Z + reviewUrl | — |

**Không đổi:** Kind B · `LinPageLayout kind=catalog` · pagination 50/100/200/500 · Integration prefix · ADMIN menu `rmms-master-loai-bien-bao` · leave-confirm · toast not alert · DEM skip.

**PO chốt (Design khóa):** formPattern=**Slideout** · Grid AC=YES · Report AC=N/A · Leave=LeaveConfirmModal · ICON/SEED no invent · DM-01 → SA.

## 1. Kind + UI pattern (HARD)

| | |
|--|--|
| Feature Kind | **B** |
| List pattern | **1×** `LinPageLayout` kind=`catalog` — **cấm** nested `CatalogListShell` |
| Grid | `LinCatalogDataGrid` · kéo cột **default ON** |
| Filter | **`LinErpListFilterBar`** **1 hàng wrap** · groupCode Dropdown + SearchTextInput + 🔍 **mép phải** — **cấm** nút Tìm riêng · **cấm** stack |
| Footer | `LinCatalogListPagination` **50 / 100 / 200 / 500** |
| Form pattern | **Slideout** · `formSurface: slideout` · **`data-form-cols="2"`** · `footer_actions_only` |
| Zone F | `LinCatalogUiSchemaEditorModal` catalogKind **`traffic-sign-type`** |
| Zone H | `LinCatalogHistoryModal` |
| Leave | Dirty → **`LeaveConfirmModal`** — **cấm** native alert/confirm (**GAP-DES-LEAVE-01**) |
| Typography | label **13** · input D14/M16 (**GAP-TYP-01**) |
| Toolbar icons | `erp-control-icon-map` §0 · config=`fa-cog` |
| Map | `map: none` |
| Consumer | Step **2li** `SearchInput` `trafficSignTypeCode` catalogKind=`traffic-sign-type` |
| Skip chrome | GOVOne · demo sidebar/note |
| Report | **N/A** |
| Grid AC | **YES** · Leave **YES** · Report AC **N/A** |

### Routes

| Surface | Path |
|---------|------|
| List | `/mas/loai-bien-bao` |
| Form | overlay Slideout · **cấm** Full-page / Modal |
| Peer | `/mas/loai-tai-san` (parity shell · form Modal ≠ this) |

## 2. Screens / zones

| Screen | FormMode | Zones | Controls / notes |
|--------|----------|-------|------------------|
| S-LIST | list | **DES-GRID-A · B · B-FILTER · C0–C3 · D · F · H** | toolbar FULL · filter · grid |
| S-FORM-CREATE | create | **DES-GRID-Z** Slideout 2col Z1–Z3 | footer Hủy/Lưu · leave |
| S-FORM-EDIT | edit | DES-GRID-Z | code **lock** · footer Hủy/Lưu · leave |
| S-FORM-VIEW | view | DES-GRID-Z | readOnly · **cấm** disabled xám · Đóng/Sửa/Copy |
| S-FORM-COPY | create | DES-GRID-Z | clear id/code · copy fields |
| S-ACT-DELETE | — | Confirm modal | soft delete |
| S-HIST | — | DES-GRID-H | history |
| S-CONSUMER | peer | SearchInput | Sổ TS / Asset TRAFFIC_SIGN |

**devSlash:** `/agent-dev` (list + Slideout · **không** oms-map / e2e ở Design).

### Zone A — Header

- Icon + title «Loại biển báo» **22px** · **cấm** Thêm mới trên A

### Zone B — Toolbar FULL

| Action | Icon | Notes |
|--------|------|-------|
| Làm mới | `fa-sync-alt` | |
| Lịch sử | `fa-history` | Zone H |
| Sửa config | `fa-cog` | Zone F |
| Xem / Sửa / Xóa | eye/pen/trash | selection-enabled |
| **Thêm mới** | `fa-plus` | **phải** · primary |

### Zone B-FILTER — `LinErpListFilterBar`

| key | Label | Control | notes |
|-----|-------|---------|-------|
| groupCode | Nhóm QCVN | `Dropdown` | P/W/R/I/S/KHAC · init-data |
| search | Tìm kiếm | `SearchTextInput` | mã + nội dung CI · 🔍 **mép phải** · **cấm** nút Tìm |

Filter đổi → page=1.

### Zone C — Grid columns

**Default:** STT · □ · **Mã biển** · **Nội dung** · **Rộng** · **Dài** · **Nhóm** · **Hình dạng** · **Icon** · **Hiệu lực** · ⋯

Row menu: Xem · Sửa · Sao chép · Lịch sử · Xóa · help «Nhấn đúp · Ctrl + chuột phải…»

Sort/filter affordance ≥1 cột (Mã biển).

### Zone D — Pagination

Tổng · Trang x/y · Hiển thị `[50,100,200,500]` · FA angle nav 32×32.

## 3. Field inventory (Control = controlHint)

| uiField | Label VN | Control | Required | Notes |
|---------|----------|---------|----------|-------|
| code | Mã biển | `Text` code | * | create editable · edit/view **lock** · giữ case |
| name | Nội dung biển báo | `Text` | * | VN SSOT |
| nameEn | Tên tiếng Anh | `Text` | | **cấm** dịch thêm |
| groupCode | Nhóm QCVN 41 | `Dropdown` | * | P/W/R/I/S/KHAC · init-data |
| shape | Hình dạng | `Text` | | |
| width | Chiều rộng | `Text` / Number | | catalog size ≠ install |
| height | Chiều dài | `Text` / Number | | catalog size ≠ install |
| icon | Icon | `Text` URL/path | | default NULL · **cấm** seed pict |
| isActive | Hiệu lực | `Switch` | | |

### Consumer (Sổ TS / Asset TRAFFIC_SIGN)

| uiField | Label | Control | catalogKind |
|---------|-------|---------|-------------|
| trafficSignTypeCode | Mã biển báo | `SearchInput` | **traffic-sign-type** |
| roadSignContent | Nội dung | derived readonly | từ catalog `name` |

### FormMode badge

| mode | Badge |
|------|-------|
| create | Tạo mới |
| edit | Sửa |
| view | Xem |
| copy | Sao chép |

## 4. Control map

- Shell: `LinPageLayout` · `LinCatalogDataGrid` · `SearchTextInput` · `useCatalogTableBusy`
- **A** title only — **cấm** Thêm mới
- **B** toolbar FULL + **+ Thêm mới** phải
- **B-FILTER** Dropdown nhóm + SearchTextInput 🔍 phải
- **C** flat table · CI không dấu
- **Z** Slideout 2 cột · footer Hủy/Lưu only
- Leave dirty → LeaveConfirmModal
- Consumer SearchInput → `…/traffic-sign-types/search` · display `code — name`
- View: `readOnly` — **cấm** disabled xám
- Toast lỗi — **cấm** alert

## 5. FormMode ↔ API (cite real-data)

| Mode | API |
|------|-----|
| list/search | `GET …/integration/traffic-sign-types` · `?search=` · `?groupCode=` |
| init | `GET …/init-data` |
| view/edit | `GET …/{id}` · `GET …/by-code/{code}` |
| create / copy→create | `POST …/traffic-sign-types` |
| update | `PUT …/{id}` |
| delete | `DELETE …/{id}` |
| consumer search | `GET …/search` |

Prefix live: `web-bff/api/v1/integration` → API `api/v1/integration`.

## Prototype (REQUIRED)

| | |
|--|--|
| Artifact | `ui/prototype/traffic-sign-type-list-prototype.html` |
| List zones | **DES-GRID-A · B · B-FILTER · C0–C3 · D · F · H** + grid standard (toolbar FULL · menu · config · flow) |
| Form zones | Slideout · `data-form-cols="2"` · footer Hủy/Lưu · LeaveConfirmModal |
| SSOT | `list-shell-prototype.md` · `form-surface-prototype.md` · `po-design-grid-standard.md` · `design-real-view-parity.md` · `shared-grid-example` v1 |
| **reviewUrl** | `file:///D:/AI-QLBD/Linm.RMMS.Data/specs/traffic-sign-type/ui/prototype/traffic-sign-type-list-prototype.html` |
| **peerStdUrl** | `http://localhost:9318/mas/loai-tai-san` |
| **mfeStdUrl** | `http://localhost:9318/mas/loai-bien-bao` |
| **real_view_parity** | `v1` |
| **shared_grid_example** | `v1` |

### Wire (list)

```
[A] icon + title «Loại biển báo» (**no** Thêm mới)
[B] Làm mới · Lịch sử · config · Xem/Sửa/Xóa  |  [+ Thêm mới]
[B-FILTER] Nhóm Dropdown · SearchTextInput 🔍 phải
[C] card: list title · row-menu help · grid (sort/filter)
[D] pageSize · Tổng · «‹ ‹ x/y › ›»
```

### Wire (form — Slideout)

```
Slideout: [Header title + badge ✕] [Body 2 cột data-form-cols=2] [Footer Hủy/Lưu]
Dirty close → LeaveConfirmModal (cấm alert/confirm)
```

## Open / deferred

| ID | Owner | Note |
|----|-------|------|
| GAP-TST-DM-01 | SA | DOMAIN-MAP thiếu slug |
| GAP-TST-ICON-01 | Dev/Import | icon NULL · no pict seed |
| GAP-TST-SEED-01 | Import | chỉ Excel/CSV/dump |
| GAP-TST-FORM-01 | — | **closed** — Slideout |

## Handoff → SA

- zone ids · Screens · control-map · reviewUrl
- formPattern Slideout · real_view_parity v1
- DOMAIN-MAP add slug `traffic-sign-type` → Integration `traffic-sign-types`
- **cấm** ERP.* · **cấm** invent API

## Version meta

| | |
|--|--|
| skillId | `agent-design` |
| skillVersion | `2026.08.25.01` |
| workflowVersion | `2026.09.05.03` |
| rulesVersion | `2026.09.05.8` |
| schemaVersion | `1` |
| contentHash | `sha256:e3aada6d5b40ee2b06635701491bbf3cca71444f95c42b42bbc1bc9d0f03ddbb` |
| design_confirm | `approve` |
| writtenAt | `2026-09-06T02:45:00.000Z` |
