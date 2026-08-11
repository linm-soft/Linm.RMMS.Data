# Design — attendance (Chấm công và định vị)

| Field | Value |
|-------|-------|
| feature | `attendance` |
| Feature Kind | **B** — Catalog list + **Slideout** form |
| status | `confirmed` (autopilot) |
| changeScope | `edit_page` |
| packKind | `list` |
| mfe | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Patrol` (`/patrol/attendance`) |
| updatedAt | 2026-08-09T01:56:00.000Z |
| design_confirm | `approve` (autopilot · task_b83eaaf1) |

## 0. Context & Demo (from PO)

| ID | Path | Notes |
|----|------|-------|
| CTX-ATT | `docs/context/features/attendance.md` | API · entities · Kind E+D demo |
| DEM-ATT | `Linm.RMMS.Demo/.../attendance-demo.html` → `patrol/attendance.html` | SSOT columns/fields · **không** clone chrome |
| DI-ATT | — | Excel out of pack |

## 1. Kind + UI pattern

| | |
|--|--|
| Feature Kind | **B** |
| List pattern | Catalog list — `LinPageLayout kind="catalog"` |
| Form pattern | **Slideout** (`ui-pattern-decision`) |
| Control count | **10** interactive (≥10 → Slideout) |
| Routes | List `/patrol/attendance` · form overlay trên list |
| Toolbar SSOT | `catalog-list-toolbar` + `erp-control-icon-map` |

## 2. Screens / zones

| Screen | FormMode | Zones | Controls |
|--------|----------|-------|----------|
| Sổ chấm công | list | **A Header · B Toolbar · C Grid · D Pagination** | SearchTextInput · status select · row menu |
| Form log | create/edit/view/copy | **Slideout** · **Z1** · **Z1h** · **Z2** · **Z3** | 10 controls · readOnly view |

## 3. Field inventory

| uiField | Label VN | Control | Required | FormMode lock |
|---------|----------|---------|----------|---------------|
| code | Mã chấm công | Text readonly | — | all readonly · IdCode |
| userName | Nhân viên | Text | * | view=readOnly |
| route | Tuyến đường | Text | * | view=readOnly |
| checkInAt | Thời điểm check-in | DateTime | * | view=readOnly |
| kmPoint | Lý trình (Km+) | Text | | view=readOnly |
| lat | Vĩ độ (Lat) | Number | * | view=readOnly |
| lng | Kinh độ (Lng) | Number | * | view=readOnly |
| inZone | Trong zone (InZone) | Select | | view=readOnly |
| status | Trạng thái công | Select | * | view=readOnly |
| note | Ghi chú | Text | | view=readOnly |

### List columns

STT · □ · **Mã chấm công** · **Nhân viên** · **Tuyến đường** · **Thời điểm** · **Lý trình** · **InZone** · **Trạng thái** · **GPS** · ⋯

### Status

Đúng tuyến · Lệch zone · Thiếu điểm

## 4. Control map / hooks

- Shell: `LinPageLayout` · `ErpListHeaderFilters` · `SearchTextInput` · `useServerPagedListLoading`
- **A** `pageHeader`: title only — **cấm** Thêm mới
- **B** `catalogToolbar`: refresh · history stub · config · **+ Tạo mới**
- Row menu: Xem · Sửa · Sao chép
- View: `readOnly` — **cấm** disabled xám
- Search: `?search=` + `?status=` + page/pageSize

## Prototype (REQUIRED)

| | |
|--|--|
| Artifact | `ui/prototype/attendance-list-prototype.html` |
| Zones | **A–D** + Slideout Z1–Z3 |
| Scope | content-only (no chrome / note banner / menu) |
| **reviewUrl** | `file:///D:/AI-QLBD/Linm.RMMS.Data/specs/attendance/ui/prototype/attendance-list-prototype.html` |

## DES-GRID map → Lin\*

| Zone | DES-GRID | Component |
|------|----------|-----------|
| A | DES-GRID-A | `LinPageLayout` header |
| B | DES-GRID-B | `catalogToolbar` |
| C | DES-GRID-C2 | `LinCatalogDataGrid` + resize ON |
| D | DES-GRID-D | `LinCatalogListPagination` |

## Handoff → SA

- Kind B · fields trên · reviewUrl mở được
- API đề xuất: `api/v1/patrol/attendance-logs` CRUD + paged list
- Entity flat scalars — **cấm** parent JSON
- Domain **Patrol** only

## Version meta (REQUIRED)

| Field | Value |
|-------|-------|
| skillId | agent-design |
| skillVersion | 2026.08.08.31 |
| schemaVersion | 1 |
| workflowVersion | 2026.08.08.31 |
| rulesVersion | 2026.08.08.31 |
| generatedAt | 2026-08-09T01:56:00.000Z |
| versionGate | rechecked |
