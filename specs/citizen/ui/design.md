# Design — citizen (Cổng người dân)

| Field | Value |
|-------|-------|
| feature | `citizen` |
| Feature Kind | **B** — Catalog list + **Slideout** form |
| status | `confirmed` (autopilot) |
| changeScope | `edit_page` |
| packKind | `list` |
| mfe | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Integration` (`/integration/citizen`) |
| updatedAt | 2026-08-09T14:42:00.000Z |
| design_confirm | `approve` (autopilot · task_ae6e4e92) |

## 0. Context & Demo (from PO)

| ID | Path | Notes |
|----|------|-------|
| CTX-CIT | `docs/context/features/citizen.md` | API · entities · Kind G+D demo |
| DEM-CIT | `Linm.RMMS.Demo/.../citizen-demo.html` → `integration/citizen.html` | SSOT fields · **không** clone chrome |
| DI-CIT | — | Excel out of pack |

## 1. Kind + UI pattern

| | |
|--|--|
| Feature Kind | **B** |
| List pattern | Catalog list — `LinPageLayout kind="catalog"` |
| Form pattern | **Slideout** (`ui-pattern-decision`) |
| Control count | **≥10** interactive → Slideout |
| Routes | List `/integration/citizen` · form overlay trên list |
| Toolbar SSOT | `catalog-list-toolbar` + `erp-control-icon-map` |
| Badge | Luôn ≠ feedback / Góp ý nội bộ |

## 2. Screens / zones

| Screen | FormMode | Zones | Controls |
|--------|----------|-------|----------|
| Inbox sự cố công dân | list | **A Header · B Toolbar · C Grid · D Pagination** | SearchTextInput · status select · row menu |
| Form báo sự cố | create/edit/view/copy | **Slideout** · **Z1** · **Z1h** · **Z2** · **Z3** | 14+ controls · readOnly view |

## 3. Field inventory

| uiField | Label VN | Control | Required | FormMode lock |
|---------|----------|---------|----------|---------------|
| trackingCode | Mã theo dõi | Text readonly | — | all readonly · IdCode |
| reporterName | Họ tên | Text | * | view=readOnly |
| phone | Số điện thoại | Text | * | view=readOnly |
| email | Email | Text | | view=readOnly |
| incidentType | Loại sự cố | Select | * | view=readOnly |
| description | Mô tả / phản ánh | Textarea | * | view=readOnly |
| address | Địa chỉ vị trí | Text | | view=readOnly |
| lat | Vĩ độ | Number | * | view=readOnly |
| lng | Kinh độ | Number | * | view=readOnly |
| road | Tuyến đường | Text | | view=readOnly |
| chainage | Lý trình (Km) | Text | | view=readOnly |
| status | Trạng thái xử lý | Select | * | view=readOnly |
| source | Nguồn | Text readonly | — | `citizen` |
| reportedAt | Thời gian báo cáo | DateTime | * | view=readOnly |
| mediaMeta | Ảnh/Video (meta) | Text | | view=readOnly |

### List columns

STT · □ · **Mã** · **Họ tên** · **SĐT** · **Loại** · **Tuyến** · **Thời gian** · **Trạng thái** · **Nguồn** · **GPS** · ⋯

### Status

draft · sent · received · processing · done

## 4. Control map / hooks

- Shell: `LinPageLayout` · `ErpListHeaderFilters` · `SearchTextInput` · `useServerPagedListLoading`
- **A** `pageHeader`: title «Cổng người dân» — **cấm** Thêm mới trên header
- **B** `catalogToolbar`: refresh · history stub · config · **+ Tạo mới**
- Row menu: Xem · Sửa · Sao chép
- View: `readOnly` — **cấm** disabled xám
- Search: `?search=` + `?status=` + page/pageSize
- Leave-confirm khi dirty

## Prototype (REQUIRED)

| | |
|--|--|
| Artifact | `ui/prototype/citizen-list-prototype.html` |
| Zones | **A–D** + Slideout Z1–Z3 |
| Scope | content-only (no chrome / note banner / menu) |
| **reviewUrl** | `file:///D:/AI-QLBD/Linm.RMMS.Data/specs/citizen/ui/prototype/citizen-list-prototype.html` |

## Handoff → SA

- API list/CRUD `api/v1/integration/citizen-incidents`
- Public `api/v1/public/incidents` + alias `api/v1/citizen/incident`
- MFE `Linm.Web.RMMS.Integration` · `/integration/citizen`

## Version meta (REQUIRED)

| Field | Value |
|-------|-------|
| skillId | agent-design |
| skillVersion | 2026.08.08.31 |
| schemaVersion | 1 |
| workflowVersion | 2026.08.08.31 |
| rulesVersion | 2026.08.08.31 |
| generatedAt | 2026-08-09T14:42:00.000Z |
| versionGate | rechecked |
