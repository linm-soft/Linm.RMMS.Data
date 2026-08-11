# PO — ops (Chỉ đạo điều hành)

| Field | Value |
|-------|-------|
| feature | `ops` |
| changeScope | `edit_page` |
| packKind | `list` |
| Feature Kind | **B** — Catalog list inbox + **Kind D Slideout** compose/detail |
| status | `confirmed` (autopilot · task_9c3e9db0) |
| updatedAt | 2026-08-10T02:10:00.000Z |

## 1. Goal

Chỉnh **Chỉ đạo điều hành** từ demo mock → list catalog parity (erp-form-context Kind B) + form Slideout Kind D. Align demo → MFE `Linm.Web.RMMS.Notification` · BE `Linm.RMMS.WebService` domain **Notification**.

**≠** GOVOne Giám sát map (`patrol`) — realtime map **cấm** embed; nav sang Patrol/Gis.

## 2. Current → New (edit_page)

| Layer | Current | New (delta) |
|-------|---------|-------------|
| Demo | Kind B+D · KPI · 12 fields · 22 actions · no BE | Giữ SSOT UX; pack ưu tiên **list + form** |
| MFE | Scaffold table `/ops` | `LinPageLayout kind=catalog` · pagination · row menu · KPI strip |
| MFE form | Placeholder FormPage | Create / Edit / View / Copy — slideout Z1–Z3 · deep-link bridge |
| API client | stub `/ops` | `/notification/inbox` (+ overview) |
| BE | Health-only Notification scaffold | Greenfield inbox + overview · BFF (**cấm** ERP.* · `/rmms/`) |

## 3. Personas / DoD

- Persona: Hạt trưởng · điều phối
- DoD:
  1. List load + **search work** (mã/tiêu đề/đội/loại)
  2. Toolbar: Tạo · Làm mới · mark-all-read · export stub · nav patrol/gis/incident · Command center P2 stub
  3. Filter: status · priority · type · unreadOnly
  4. Row menu: Xem · Sửa · Sao chép · Đánh dấu đã đọc · Giao việc P2 stub
  5. View = `readOnly` (không disabled xám)
  6. Create/Edit validate + save · IdCode `OPS-YYYYMMDD-NNNN`
  7. title · body · recipient bắt buộc · leave-confirm dirty
  8. Overview KPI 4 ô (staffOnline · openIncidents · woInProgress · unread)
  9. FE `yarn build` + `typecheck` PASS
  10. BE build PASS · domain Notification only

## 4. CTX / DEM inventory

| Source | Path | Notes |
|--------|------|-------|
| CTX-OPS | `docs/context/features/ops.md` | Kind B+D · API MISSING → Signed |
| DEM-OPS | `Demo/.../ops-demo.html` → `ops/ops.html` | Fields · actions · **không** clone chrome |
| DI-OPS | — | No Excel this pack |

### List columns (required)

STT · Mã · Tiêu đề · Người gửi · Người nhận · Ưu tiên · Loại · TT · Thời gian · actions

### Form fields (required *)

code (readonly IdCode) · title* · body* · recipient* · priority · type · linkRef · status · sentAt · sender · channel · reply (P2)

### Status values

moi · dang-xu-ly · da-gui · nhap

### Priority values

thap · trung-binh · cao · khan

### Type values

tuan-tra · su-co · sua-chua · khac

### Channel values

inbox · push · email

### controlHint (synthetic · no Excel cluster)

| Field | controlHint | Notes |
|-------|-------------|-------|
| title | Text | Tiêu đề chỉ đạo |
| body | Text | textarea nội dung |
| recipient | Dropdown | Người nhận / đội |
| priority | Dropdown | Độ ưu tiên |
| type | Dropdown | Loại chỉ đạo |
| status | Dropdown | Trạng thái |
| channel | Dropdown | Kênh gửi |
| linkRef | Text | INC/WO/PAT |
| sentAt | DateTime | Thời gian gửi |
| reply | Text | textarea P2 |

## 5. Grid AC (REQUIRED · list)

| ID | AC |
|----|-----|
| AC-G-01 | Zones **A Header · B Toolbar · C Grid · D Pagination** |
| AC-G-02 | Search + filters apply → page=1 |
| AC-G-03 | Row menu View/Edit/Copy/MarkRead |
| AC-G-04 | `LinCatalogDataGrid` + column resize default ON |
| AC-G-05 | Footer `LinCatalogListPagination` pageSize 50/100/200/500 |
| AC-G-06 | 1× `LinPageLayout` — **cấm** nested CatalogListShell |

## 6. Out of scope (this pack)

- SignalR `OpsHub` realtime — DEFER P2
- Command center full hub — P2 badge + modal stub
- Map realtime trong Notification MFE — **cấm** (nav Patrol/Gis)
- Device/Vehicle track — P2–P3 Inventory
- 22 GOVOne chrome actions — skip; keep product actions

## 7. Handoff → Design

- Kind B catalog list + Kind D Slideout form
- Prototype + reviewUrl bắt buộc trước design_confirm
- Demo path visual SSOT: `ops-demo.html` → `ops/ops.html`
- BE domain **Notification** · route `api/v1/notification/inbox` · overview `api/v1/notification/overview`

## Version meta (REQUIRED)

| Field | Value |
|-------|-------|
| skillId | agent-po |
| skillVersion | 2026.08.08.30 |
| schemaVersion | 1 |
| workflowVersion | 2026.08.09.02 |
| rulesVersion | 2026.08.09.02 |
| generatedAt | 2026-08-10T02:10:00.000Z |
| versionGate | rechecked |
