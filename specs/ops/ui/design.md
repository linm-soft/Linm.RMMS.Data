# Design — ops (Chỉ đạo điều hành)

| Field | Value |
|-------|-------|
| feature | `ops` |
| Feature Kind | **B** — Catalog list + **Kind D Slideout** form |
| status | `confirmed` (autopilot) |
| changeScope | `edit_page` |
| packKind | `list` |
| mfe | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Notification` (`/ops`) |
| updatedAt | 2026-08-10T02:12:00.000Z |
| design_confirm | `approve` (autopilot · task_9c3e9db0) |

## 0. Context & Demo (from PO)

| ID | Path | Notes |
|----|------|-------|
| CTX-OPS | `docs/context/features/ops.md` | Inbox · compose · KPI · ≠ patrol map |
| DEM-OPS | `Linm.RMMS.Demo/.../ops-demo.html` → `ops/ops.html` | SSOT fields · **không** clone chrome |
| DI-OPS | — | Excel out of pack |

## 1. Kind + UI pattern

| | |
|--|--|
| Feature Kind | **B** (+ form Kind D) |
| List pattern | Catalog list — `LinPageLayout kind="catalog"` |
| Form pattern | **Slideout** (`ui-pattern-decision`) |
| Routes | List `/ops` · form overlay `?form=` · deep-link `/ops/new` · `/ops/:id` |
| Toolbar SSOT | `catalog-list-toolbar` + `erp-control-icon-map` |
| Badge | ≠ GOVOne giamsat · P2 Command |

## 2. Screens / zones

| Screen | FormMode | Zones | Controls |
|--------|----------|-------|----------|
| Inbox chỉ đạo | list | **A Header · B Toolbar · C Grid · D Pagination** + KPI beforeToolbar | Search · status · priority · type · unread |
| Form chỉ đạo | create/edit/view/copy | **Slideout** · **Z1** · **Z2** · **Z3** | 12 fields · readOnly view |

## 3. Field inventory

| uiField | Label VN | Control | Required | FormMode lock |
|---------|----------|---------|----------|---------------|
| code | Mã chỉ đạo | Text readonly | — | all readonly · IdCode OPS-* |
| title | Tiêu đề | Text | * | view=readOnly |
| body | Nội dung | Textarea | * | view=readOnly |
| recipient | Người nhận / đội | Select | * | view=readOnly |
| priority | Độ ưu tiên | Select | — | view=readOnly |
| type | Loại chỉ đạo | Select | — | view=readOnly |
| linkRef | Liên kết nguồn | Text | — | view=readOnly |
| status | Trạng thái | Select | — | view=readOnly |
| sentAt | Thời gian gửi | DateTime | — | view=readOnly |
| sender | Người gửi | Text | — | create default · view=readOnly |
| channel | Kênh gửi | Select | — | view=readOnly |
| reply | Phản hồi (P2) | Textarea | — | view=readOnly |

### List columns

STT · □ · **Mã** · **Tiêu đề** · **Người gửi** · **Người nhận** · **Ưu tiên** · **Loại** · **TT** · **Thời gian** · ⋯

### DES-GRID

| Zone | Spec |
|------|------|
| DES-GRID-A | Header title «Chỉ đạo điều hành» — **cấm** Thêm mới trên header |
| DES-GRID-B | catalogToolbar: refresh · history stub · config · **+ Tạo chỉ đạo** · extra: mark-all-read · export · nav · Command P2 |
| DES-GRID-C2 | LinCatalogDataGrid · resize ON · row menu · unread row emphasis |
| DES-GRID-D | LinCatalogListPagination 50/100/200/500 |

## Prototype (REQUIRED)

| | |
|--|--|
| Artifact | `ui/prototype/ops-list-prototype.html` |
| Zones | **A–D** + Slideout Z1–Z3 |
| Scope | content-only (no chrome / note banner / menu) |
| **reviewUrl** | `file:///D:/AI-QLBD/Linm.RMMS.Data/specs/ops/ui/prototype/ops-list-prototype.html` |

## Handoff → SA

- API list/CRUD `api/v1/notification/inbox`
- Overview `api/v1/notification/overview`
- Mark-read / mark-all-read
- MFE `Linm.Web.RMMS.Notification` · `/ops`

## Version meta (REQUIRED)

| Field | Value |
|-------|-------|
| skillId | agent-design |
| skillVersion | 2026.08.08.31 |
| schemaVersion | 1 |
| workflowVersion | 2026.08.09.02 |
| rulesVersion | 2026.08.09.02 |
| generatedAt | 2026-08-10T02:12:00.000Z |
| versionGate | rechecked |
