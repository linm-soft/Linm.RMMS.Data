# Design — maintenance (Lập lịch sửa chữa / bảo trì)

| Field | Value |
|-------|-------|
| feature | `maintenance` |
| Feature Kind | **B** — Catalog list + **Kind D Slideout** form |
| status | `confirmed` (autopilot) |
| changeScope | `edit_page` |
| packKind | `list` |
| mfe | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Maintenance` (`/maintenance`) |
| updatedAt | 2026-08-10T00:22:00.000Z |
| design_confirm | `approve` (autopilot · task_e4d75335) |

## 0. Context & Demo (from PO)

| ID | Path | Notes |
|----|------|-------|
| CTX-MNT | `docs/context/features/maintenance.md` | WO · progress · summary |
| DEM-MNT | `Linm.RMMS.Demo/.../maintenance-demo.html` → `maintenance/maintenance.html` | SSOT fields · **không** clone chrome |
| DI-MNT | — | Excel out of pack |

## 1. Kind + UI pattern

| | |
|--|--|
| Feature Kind | **B** (+ form Kind D) |
| List pattern | Catalog list — `LinPageLayout kind="catalog"` |
| Form pattern | **Slideout** (`ui-pattern-decision`) |
| Routes | List `/maintenance` · form overlay `?form=` |
| Toolbar SSOT | `catalog-list-toolbar` + `erp-control-icon-map` |
| Badge | Công việc / WO · P2 nghiệm thu stub |

## 2. Screens / zones

| Screen | FormMode | Zones | Controls |
|--------|----------|-------|----------|
| Danh sách Công việc | list | **A Header · B Toolbar · C Grid · D Pagination** | SearchTextInput · status · workType · row menu |
| Form WO | create/edit/view/copy | **Slideout** · **Z1** · **Z2** · **Z3** | fields · readOnly view |

## 3. Field inventory

| uiField | Label VN | Control | Required | FormMode lock |
|---------|----------|---------|----------|---------------|
| code | Mã | Text readonly | — | all readonly · IdCode WO-* |
| title | Tiêu đề | Text | — | view=readOnly |
| routeName | Tuyến | Text/Select | * | view=readOnly |
| workType | Loại | Select | * | view=readOnly |
| status | Trạng thái | Select | * | view=readOnly |
| teamName | Đội | Text | — | view=readOnly |
| assigneeName | Cán bộ | Text | — | view=readOnly |
| dueAt | Hạn | DateTime | * | view=readOnly |
| progressPercent | Tiến độ % | Number | — | view=readOnly |
| slaHours | SLA (giờ) | Number | — | view=readOnly |
| incidentId | Sự cố liên kết | Text | — | view=readOnly |
| description | Mô tả | Textarea | — | view=readOnly |
| note | Ghi chú | Textarea | — | view=readOnly |

### List columns

STT · □ · **Mã** · **Tuyến** · **Loại** · **Đội** · **Cán bộ** · **Hạn** · **Trạng thái** · **Tiến độ** · ⋯

### DES-GRID

| Zone | Spec |
|------|------|
| DES-GRID-A | Header title «Lập lịch sửa chữa / bảo trì» — **cấm** Thêm mới trên header |
| DES-GRID-B | catalogToolbar: refresh · history stub · config · **+ Tạo mới** |
| DES-GRID-C2 | LinCatalogDataGrid · resize ON · row menu |
| DES-GRID-D | LinCatalogListPagination 50/100/200/500 |

## Prototype (REQUIRED)

| | |
|--|--|
| Artifact | `ui/prototype/maintenance-list-prototype.html` |
| Zones | **A–D** + Slideout Z1–Z3 |
| Scope | content-only (no chrome / note banner / menu) |
| **reviewUrl** | `file:///D:/AI-QLBD/Linm.RMMS.Data/specs/maintenance/ui/prototype/maintenance-list-prototype.html` |

## Handoff → SA

- API list/CRUD `api/v1/maintenance/work-orders`
- Optional progress / complete endpoints
- MFE `Linm.Web.RMMS.Maintenance` · `/maintenance`

## Version meta (REQUIRED)

| Field | Value |
|-------|-------|
| skillId | agent-design |
| skillVersion | 2026.08.08.31 |
| schemaVersion | 1 |
| workflowVersion | 2026.08.09.02 |
| rulesVersion | 2026.08.09.02 |
| generatedAt | 2026-08-10T00:22:00.000Z |
| versionGate | rechecked |
