# Design — patrol (Tuần đường / tuần kiểm)

| Field | Value |
|-------|-------|
| feature | `patrol` |
| Feature Kind | **B** — Catalog list + **Slideout** form |
| status | `confirmed` (autopilot) |
| changeScope | `edit_page` |
| packKind | `list` |
| mfe | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Patrol` (`/patrol`) |
| updatedAt | 2026-08-10T01:32:00.000Z |
| design_confirm | `approve` (autopilot · task_760475f2) |

## 0. Context & Demo (from PO)

| ID | Path | Notes |
|----|------|-------|
| CTX-PAT | `docs/context/features/patrol.md` | API · Kind E demo · list pack Kind B |
| DEM-PAT | `Linm.RMMS.Demo/.../patrol-demo.html` → `patrol/patrol.html` | SSOT columns/fields · **không** clone chrome |
| DI-PAT | — | Excel out of pack |

## 1. Kind + UI pattern

| | |
|--|--|
| Feature Kind | **B** |
| List pattern | Catalog list — `LinPageLayout kind="catalog"` |
| Form pattern | **Slideout** (`ui-pattern-decision`) |
| Control count | **11** interactive (≥10 → Slideout) |
| Routes | List `/patrol` · form overlay trên list |
| Toolbar SSOT | `catalog-list-toolbar` + `erp-control-icon-map` |

## 2. Screens / zones

| Screen | FormMode | Zones | Controls |
|--------|----------|-------|----------|
| Sổ phiên tuần tra | list | **A Header · B Toolbar · C Grid · D Pagination** | SearchTextInput · status select · row menu |
| Form phiên | create/edit/view/copy | **Slideout** · **Z1** · **Z1h** · **Z2** · **Z3** | 11 controls · readOnly view |

## 3. Field inventory

| uiField | Label VN | Control | Required | FormMode lock |
|---------|----------|---------|----------|---------------|
| code | Mã phiên tuần | Text readonly | — | all readonly · IdCode |
| userName | Nhân viên | Text | * | view=readOnly |
| route | Tuyến đường | Text | * | view=readOnly |
| patrolType | Loại tuần | Select | * | view=readOnly |
| plannedDate | Ngày kế hoạch | Date | * | view=readOnly |
| startedAt | Bắt đầu thực tế | DateTime | | view=readOnly |
| checkInCount | Số điểm check-in | Number | * | view=readOnly |
| coveragePercent | Coverage % | Number | | view=readOnly |
| status | Trạng thái | Select | * | view=readOnly |
| offlineQueued | Hàng đợi offline | Select | | view=readOnly |
| note | Ghi chú | Text | | view=readOnly |

### List columns

STT · □ · **Mã phiên** · **Nhân viên** · **Tuyến** · **Loại tuần** · **Ngày KH** · **Check-in** · **Coverage %** · **Trạng thái** · **Offline** · ⋯

### Status

Đang tuần · Hoàn thành · Bỏ sót · Offline queue

### Patrol type

Tuần đường · Tuần kiểm

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
| Artifact | `ui/prototype/patrol-list-prototype.html` |
| Zones | **A–D** + Slideout Z1–Z3 |
| Scope | content-only (no chrome / note banner / menu) |
| **reviewUrl** | `file:///D:/AI-QLBD/Linm.RMMS.Data/specs/patrol/ui/prototype/patrol-list-prototype.html` |

## DES-GRID map → Lin\*

| Zone | DES-GRID | Component |
|------|----------|-----------|
| A | DES-GRID-A | `LinPageLayout` header |
| B | DES-GRID-B | `catalogToolbar` |
| C | DES-GRID-C2 | `LinCatalogDataGrid` + resize ON |
| D | DES-GRID-D | `LinCatalogListPagination` |

## Handoff → SA

- Kind B · fields trên · reviewUrl mở được
- API đề xuất: `api/v1/patrol/sessions` CRUD + paged list
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
| generatedAt | 2026-08-10T01:32:00.000Z |
| versionGate | rechecked |
