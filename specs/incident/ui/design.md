# Design — incident (Quản lý sự cố / Vấn đề)

| Field | Value |
|-------|-------|
| feature | `incident` |
| Feature Kind | **B** — Catalog list + **Kind D Slideout** form |
| status | `confirmed` (autopilot) |
| changeScope | `edit_page` |
| packKind | `list` |
| mfe | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Field` (`/incident`) |
| updatedAt | 2026-08-09T16:20:00.000Z |
| design_confirm | `approve` (autopilot · task_ddc8f330) |

## 0. Context & Demo (from PO)

| ID | Path | Notes |
|----|------|-------|
| CTX-INC | `docs/context/features/incident.md` | API · AI DET · assign/close |
| DEM-INC | `Linm.RMMS.Demo/.../incident-demo.html` → `incident/incident.html` | SSOT fields · **không** clone chrome |
| DI-INC | — | Excel out of pack |

## 1. Kind + UI pattern

| | |
|--|--|
| Feature Kind | **B** (+ form Kind D) |
| List pattern | Catalog list — `LinPageLayout kind="catalog"` |
| Form pattern | **Slideout** (`ui-pattern-decision`) |
| Routes | List `/incident` · form overlay `?form=` |
| Toolbar SSOT | `catalog-list-toolbar` + `erp-control-icon-map` |
| Badge | Luôn ≠ citizen / Cổng người dân · AI DET khi có detectionId |

## 2. Screens / zones

| Screen | FormMode | Zones | Controls |
|--------|----------|-------|----------|
| Danh sách Vấn đề | list | **A Header · B Toolbar · C Grid · D Pagination** | SearchTextInput · status · severity · row menu |
| Form vấn đề | create/edit/view/copy | **Slideout** · **Z1** · **Z2** · **Z3** | fields · readOnly view |

## 3. Field inventory

| uiField | Label VN | Control | Required | FormMode lock |
|---------|----------|---------|----------|---------------|
| code | Mã | Text readonly | — | all readonly · IdCode VD-* |
| title | Tiêu đề | Text | * | view=readOnly |
| routeName | Đoạn đường | Select | * | view=readOnly |
| incidentType | Loại vấn đề | Select | * | view=readOnly |
| status | Trạng thái | Select | * | view=readOnly |
| severity | Mức độ | Select | — | view=readOnly |
| requestedAt | Ngày yêu cầu | DateTime | * | view=readOnly |
| detectionId | detectionId (AI) | Text | — | view=readOnly |
| description | Mô tả | Textarea | — | view=readOnly |
| causesCongestion | Gây tắc đường | Checkbox | — | view=readOnly |
| hasGps | Định vị GPS | Checkbox | — | view=readOnly |
| assigneeName | Người nhận CV | Text | — | view=readOnly |

### List columns

STT · □ · **Mã** · **Tiêu đề** · **Đoạn** · **Loại** · **Mức độ** · **Trạng thái** · **Ngày YC** · **AI** · ⋯

### DES-GRID

| Zone | Spec |
|------|------|
| DES-GRID-A | Header title «Quản lý sự cố / Vấn đề» — **cấm** Thêm mới trên header |
| DES-GRID-B | catalogToolbar: refresh · history stub · config · **+ Tạo mới** |
| DES-GRID-C2 | LinCatalogDataGrid · resize ON · row menu |
| DES-GRID-D | LinCatalogListPagination 50/100/200/500 |

## Prototype (REQUIRED)

| | |
|--|--|
| Artifact | `ui/prototype/incident-list-prototype.html` |
| Zones | **A–D** + Slideout Z1–Z3 |
| Scope | content-only (no chrome / note banner / menu) |
| **reviewUrl** | `file:///D:/AI-QLBD/Linm.RMMS.Data/specs/incident/ui/prototype/incident-list-prototype.html` |

## Handoff → SA

- API list/CRUD `api/v1/incident/incidents`
- Optional assign/close endpoints
- MFE `Linm.Web.RMMS.Field` · `/incident`

## Version meta (REQUIRED)

| Field | Value |
|-------|-------|
| skillId | agent-design |
| skillVersion | 2026.08.08.31 |
| schemaVersion | 1 |
| workflowVersion | 2026.08.09.02 |
| rulesVersion | 2026.08.09.02 |
| generatedAt | 2026-08-09T16:20:00.000Z |
| versionGate | rechecked |
