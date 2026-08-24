# Design — its-anpr-overload (ITS ANPR · Quá tải / tốc độ)

| Field | Value |
|-------|-------|
| feature | `its-anpr-overload` |
| Feature Kind | **B** catalog list + **D** slideout HITL + S-DETECT panel · S-MAP **DEFER** |
| changeScope | `new_page` |
| packKind | `ai` |
| featureClass | `ai` (Kind B+D · **≠** `ai-vision` ổ gà · **≠** `ai-asset-detect` Asset · **≠** `its-traffic-detect`) |
| status | `confirmed` |
| design_confirm | **approve** (Autopilot · autoApprove=**ON** · task_864dfd9e) |
| mfe | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.AiVision` · route `/its-anpr-overload` |
| backend | `D:/AI-QLBD/Linm.RMMS.WebService` · `api/v1/ai-vision/anpr/events` · **cấm ERP.*** |
| shared_grid_example | `v1` |
| real_view_parity | `v1` |
| slideout_layout | `footer_actions_only` |
| leave_standard | `LeaveConfirmModal` · **cấm** native `alert`/`confirm` |
| list_config | **FULL** · `LinCatalogUiSchemaEditorModal` · title «Cấu hình hiển thị danh mục» |
| skillVersion | `2026.08.15.16` |
| schemaVersion | `1` |
| workflowVersion | `2026.08.16.02` |
| rulesVersion | `2026.08.16.05` |
| versionGate | `ok` |
| contentHash (data-analy) | `sha256:1f4dd23743c5d0f6817c81618c062bb6a82efc9f7a665f73150e101a200b1865` |
| taskId | `task_ca4352e6` |
| updatedAt | `2026-08-17T09:43:36.794Z` |

> **DOMAIN-MAP:** slug `its-anpr-overload` → **AiVision** · API **`api/v1/ai-vision/anpr/events`**. **Cấm ERP.***  
> **Cấm** badge/tag `AI` trên header / `beforeToolbar` (`ai-chrome-skip`).  
> **Cấm** text «Kind D» / «stub» / checklist khách trên UI end-user.

## 0. Context & Demo (from PO)

| ID | Path | Notes |
|----|------|-------|
| CTX-01 | `docs/context/features/its-anpr-overload.md` | Flow 3 bước · GAP-ANPR-* |
| CTX-02 | `docs/context/18-ITS-ANPR-OVERLOAD-SPEC.md` | Rule engine · API · schema |
| DEM-01 | `Linm.RMMS.Demo/.../ai-vision/its-anpr-overload.html` | feed + panel + slideout — **không** clone chrome |
| DEM-02 | `…/js/its-anpr-overload-data.js` | ANPR-2401…2405 · CAM-* · REGISTRY |
| DEM-03 | `…/js/its-anpr-overload-app.js` | simulate · lookup · Confirm/Dismiss |
| controlHint | `specs/_data-analy/features/its-anpr-overload-control-hint.md` | Design **chốt** §5 |
| PO | `specs/its-anpr-overload/po/requirement.md` | status=`done` · Grid AC + Leave §6b |

## 1. Kind + UI pattern

| | |
|--|--|
| Feature Kind | **B** + **D** (+ S-DETECT panel) |
| List | `LinPageLayout kind="catalog"` · **1×** — **cấm** nested CatalogListShell |
| Form | Kind **D Slideout** · **footer actions only** (`slideout-form-layout`) · `data-form-cols` = **2** |
| Detail | S-DETECT panel cùng page (split) · **không** map P1 |
| Map | S-MAP **DEFER** P2 |
| Tree | **Không** |
| Toolbar icons | `erp-control-icon-map` · config = **`fas fa-cog`** |
| AI chrome | **Cấm** badge/tag `AI` |

## 2. Screens (expand PO)

| id | Surface | Pattern | Open | FormMode | Actions |
|----|---------|---------|------|----------|---------|
| S-LIST | Feed sự kiện ANPR | Kind B A–D · KPI | `/its-anpr-overload` | — | simulate · lookup · confirm · refresh · history · **config FULL** · View/Edit · **+ Tạo** · clear-filter · search |
| S-DETECT | Chi tiết + đăng kiểm + lỗi | Panel (cùng page) | row select | — | lookup registry · show violations |
| S-FORM | Form sự kiện + HITL | Kind D Slideout · 2 cột | `?form=` / row / toolbar | C/E/V/Copy | **footer only**: Hủy/Đóng · Bỏ qua · Xác nhận lỗi · Lưu (C/E) · Sửa (View) |
| S-MAP | Bản đồ camera | — | — | — | **DEFER** — không pin map P1 |

**devSlash:**

| Surface | Slash | Notes |
|---------|-------|-------|
| S-LIST / CRUD | `/agent-dev` | Kind B list + form parity |
| S-DETECT / HITL Confirm·Dismiss | `/agent-dev-ai-detect` | `rmms-form-agent-map` · **cấm** badge AI |
| Camera nguồn (live) | `/agent-dev-camera-connect` | P1 = simulate OK · live DEFER |
| Map | — | S-MAP DEFER · **không** `/agent-dev-oms-map` P1 |

## 3. Prototype + reviewUrl (REQUIRED)

| | |
|--|--|
| Base | `agent-design/example/shared-grid-example.html` |
| Artifact | [`ui/prototype/its-anpr-overload-list-prototype.html`](./prototype/its-anpr-overload-list-prototype.html) |
| Scope | **content-only** — skip note/sidebar/menu/chrome demo · **cấm** checklist Signed |
| Zones | DES-GRID-A · B · FILTER · KPI · C0–C3 · C2a · D · F (config FULL) · H · Z · DES-DETECT · DES-LEAVE |
| Peer (real view) | `http://localhost:9303/ai-vision/ai-asset-detect` · cùng formType `ai` Kind B+HITL |
| TL map | `tl-design-grid-component-map.md` |
| **reviewUrl** | `file:///D:/AI-QLBD/Linm.RMMS.Data/specs/its-anpr-overload/ui/prototype/its-anpr-overload-list-prototype.html` |
| mfeStdRoute | `/its-anpr-overload` |
| mfeStdUrl | `http://localhost:9303/its-anpr-overload` |

### Wire (list)

```
[A] fa-car + «ITS ANPR · Quá tải / tốc độ»  (**không** badge AI · **không** Thêm ở header)
[B] Mô phỏng · Tra cứu · Xác nhận · Làm mới · Lịch sử · fa-cog · Xem/Sửa | [+ Tạo]
[KPI] Sự kiện · Chờ xác nhận · Critical · Confirmed
[FILTER] Dropdown camera · Dropdown status · Xóa lọc | SearchInput biển số (**cụm phải**)
[C] title · row-menu help · SearchTextInput · grid STT·□·Mã·Biển·Tốc độ·WIM·Camera·Lúc·TT·Mức lỗi·⋮
[D] LinCatalogListPagination — Tổng · Trang · Hiển thị [50|100|200|500] · FA pager
[DETECT] ① Camera · ② Đăng kiểm · ③ Violations
```

### Wire (slideout DES-GRID-Z · footer only · 2 cột)

```
[Z1] title · mode badge · dirty · ✕ (close → LeaveConfirm nếu dirty)
[Z1h] hint
[Z2] Z1 event fields · Z2 registry readonly · Z3 violations + note
[Z3 footer] View: Đóng / Sửa / Bỏ qua / Xác nhận lỗi
            C/E/Copy: Hủy / Bỏ qua / Xác nhận lỗi / Lưu
```

**Cấm** top Quay lại / Hủy / Lưu trên Z1 toolbar (chỉ ✕ đóng).  
**Leave:** dirty → **LeaveConfirmModal** (`DES-LEAVE`) — **cấm** native dialog.

### Wire (config DES-GRID-F · FULL)

```
Modal title «Cấu hình hiển thị danh mục»
Bảng cột: List / width / filter / sort · Thêm cột
→ Dev: LinCatalogUiSchemaEditorModal + useCatalogUiSchema + buildDynamicGridColumns
→ BE: CatalogUiSchemaRegistry + Seed catalogKind=its-anpr-overload
**Cấm** Zone F-only LinListTableConfigModal · **cấm** configHint
```

## 4. DES-GRID → Lin* map

| Zone | Design | Component |
|------|--------|-----------|
| A | DES-GRID-A | `LinPageLayout` / `LinPageHeader` · **cấm** AI badge |
| B | DES-GRID-B | `catalogToolbar` · simulate · lookup · confirm · refresh · history · cog · View/Edit · +Tạo |
| FILTER | DES-GRID-FILTER | camera `Dropdown` · status `Dropdown` · SearchInput (phải) |
| KPI | DES-KPI | optional strip (Total / Pending / Critical / Confirmed) |
| C1 | DES-GRID-C1 | `SearchTextInput` (search **must work**) |
| C2 | DES-GRID-C2 | `LinCatalogDataGrid` · kéo cột default ON · `buildDynamicGridColumns` |
| C2a | DES-GRID-C2a | column filter panel |
| C3 | DES-GRID-C3 | `LinCatalogRowActionMenu` |
| D | DES-GRID-D | **`LinCatalogListPagination`** — **cấm** footerPagination / pageSizeBar / raw table footer |
| F | DES-GRID-F | **`LinCatalogUiSchemaEditorModal`** FULL |
| H | DES-GRID-H | `LinCatalogHistoryModal` |
| Z | DES-GRID-Z | Kind D slideout · footer only |
| DETECT | DES-DETECT | S-DETECT panel ①②③ |
| LEAVE | DES-LEAVE | `LeaveConfirmModal` |
| — | shell | **1×** `LinPageLayout` |

## 5. Control-map (chốt từ controlHint + PO)

### 5.1 List filters (Zone B / FILTER)

| Field key | Label | Control (chốt) | catalogKind | Notes |
|-----------|-------|----------------|-------------|-------|
| search | Tìm biển số | `SearchInput` | text | plate · id (`ANPR-*`) · **cụm phải** |
| cameraId | Camera | `Dropdown` | enum | `all` + CAM-* seed |
| status | Trạng thái | `Dropdown` | enum | Tất cả · Pending · Confirmed · Dismissed |

### 5.2 List columns (schema seed)

| Field key | Label | Control | list default |
|-----------|-------|---------|--------------|
| code | Mã | `Text` | visible · sort · `ANPR-*` |
| plate | Biển số | `Text` | visible · sort |
| speedKmh | Tốc độ | `Text` (number) | visible · show vs limit |
| wimKg | WIM | `Text` (number) | visible · kg |
| cameraLabel | Camera | `Text` | visible · km |
| capturedAt | Lúc | `Date` | visible · sort |
| status | TT | `Dropdown` | visible · sort |
| severity | Mức lỗi | `Dropdown` | visible · ok/warn/critical |

### 5.3 Form / HITL fields (Kind D · 2 cột)

| Field key | Label | Control | Required | Notes |
|-----------|-------|---------|----------|-------|
| code | Mã sự kiện | `Text` | auto | `ANPR-*` readonly |
| plate | Biển số | `Text` | * | |
| cameraId | Camera | `Dropdown` | * | |
| speedKmh | Tốc độ (km/h) | `Text` (number) | * | |
| wimKg | WIM (kg) | `Text` (number) | | optional |
| confidence | Confidence | `Text` (number) | | 0–1 · UI % |
| capturedAt | Thời điểm | `Date` | * | |
| status | Trạng thái | `Dropdown` | * | Pending/Confirmed/Dismissed · HITL đổi |
| owner | Chủ xe | `Text` | | registry · readonly |
| vehicleType | Loại xe | `Text` | | registry |
| axleCount | Số trục | `Text` (number) | | registry |
| axleConfig | Cấu hình trục | `Text` | | registry |
| gvwMaxKg | GVW max | `Text` (number) | | registry |
| payloadMaxKg | Payload max | `Text` (number) | | registry |
| curbWeightKg | Tự trọng | `Text` (number) | | registry |
| inspectExpire | Hạn kiểm | `Date` | | registry |
| violationCodes | Mã lỗi | `Text` | | SPEED · OVERLOAD_* · NO_REGISTRY · readonly |
| note | Ghi chú HITL | `Text` | | multiline · dirty leave-confirm |
| incidentId | Mã Vấn đề | `Text` | | readonly sau Confirm |

### Row menu

Xem · Sửa · Sao chép · Confirm · Dismiss · Lịch sử · Xóa

### View mode

View = `readOnly` (không disabled xám).

## 6. Seed / DoD (prototype mock)

| Item | Value |
|------|-------|
| Events | 5 Pending: ANPR-2401…2405 |
| Cameras | CAM-QL1-286 · 312 · 340 |
| Registry | 4 plates mock + unknown `29C-888.00` (NO_REGISTRY) |
| Rules | SPEED · OVERLOAD_GVW · OVERLOAD_PAYLOAD · NO_REGISTRY |
| Confirm | → Incident stub `VI-ANPR-*` P1 |
| Simulate | toolbar thêm event mới |

## 7. Leave / alert (Design AC)

| Case | Control | Cấm |
|------|---------|-----|
| Dirty form / Đóng / Hủy | **`LeaveConfirmModal`** | native `window.confirm` / `beforeunload` only |
| Xóa / chặn Confirm | **`useAlert` / `Modal`** | `window.alert` / `prompt` |
| Confirm / Dismiss trên Slideout | footer / Modal stacked nếu cần | native confirm |
| History | `LinCatalogHistoryModal` | custom history dialog ad-hoc |

## 8. Open questions (không block Design)

| ID | Owner | Notes |
|----|-------|-------|
| `beRepo` / `uiRepo` | User board | **không auto** — trước Dev |
| GAP-ANPR-02 | SA/Dev | Registry mock P1 · real adapter DEFER |
| GAP-ANPR-03 | SA/Dev | Confirm → Incident stub P1 · full DEFER |
| S-MAP | TL | DEFER — không pin P1 |
| Thresholds | SA | SPEED/OVERLOAD không hardcode MFE (tenant/config P2) |

## Confirm

`design_confirm` = **approve** · autoApprove=**ON** · task_864dfd9e · 2026-08-24.  
Prototype + **reviewUrl** confirmed → enqueue `/agent-team-lead`.

## Handoff → SA

| Field | Value |
|-------|-------|
| Kind / pattern | B list A–D + D slideout footer-only + S-DETECT · S-MAP DEFER |
| Field inventory / control-map | §5 |
| Prototype · reviewUrl | §3 |
| Screens · zone ids | §2 · §4 · DES-GRID-* |
| APIs (đề xuất PO) | `api/v1/ai-vision/anpr/events` CRUD · simulate · lookup · confirm · dismiss · registry |
| Domain | **AiVision** · BE `Linm.RMMS.WebService` · **cấm ERP.*** |
| Entity | `rmms_ai_vision_anpr_events` · registry/violations JSON · `incident_id` |
| Config FULL | CatalogUiSchemaRegistry + Seed `{catalogKind=its-anpr-overload}` |
| Next | `/agent-sa` **sau** user Approve `design_confirm` |

## Version meta (REQUIRED)

| Field | Value |
|-------|-------|
| skillId | agent-design |
| skillVersion | 2026.08.15.16 |
| schemaVersion | 1 |
| workflowVersion | 2026.08.16.02 |
| rulesVersion | 2026.08.16.05 |
| generatedAt | 2026-08-17T09:43:36.794Z |
| versionGate | ok |
| contentHash | sha256:1f4dd23743c5d0f6817c81618c062bb6a82efc9f7a665f73150e101a200b1865 |

---
<!-- Version meta: skillVersion=2026.08.15.16 · schemaVersion=1 · workflowVersion=2026.08.16.02 · versionGate=ok -->
