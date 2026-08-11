# Design — feedback (Góp ý phần mềm)

| Field | Value |
|-------|-------|
| feature | `feedback` |
| Feature Kind | **B** — Catalog list + **Kind D Slideout** form |
| status | `confirmed` (autopilot) |
| changeScope | `edit_page` |
| packKind | `list` |
| mfe | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Integration` (`/integration/feedback`) |
| updatedAt | 2026-08-09T16:00:00.000Z |
| design_confirm | `approve` (autopilot · task_d242eb29) |

## 0. Context & Demo (from PO)

| ID | Path | Notes |
|----|------|-------|
| CTX-FB | `docs/context/features/feedback.md` | API · AppFeedback · Kind D demo |
| DEM-FB | `Linm.RMMS.Demo/.../feedback-demo.html` → `integration/feedback.html` | SSOT fields · **không** clone chrome |
| DI-FB | — | Excel out of pack |

## 1. Kind + UI pattern

| | |
|--|--|
| Feature Kind | **B** (+ form Kind D) |
| List pattern | Catalog list — `LinPageLayout kind="catalog"` |
| Form pattern | **Slideout** (`ui-pattern-decision`) |
| Control count | 7 interactive → Slideout |
| Routes | List `/integration/feedback` · form overlay trên list |
| Toolbar SSOT | `catalog-list-toolbar` + `erp-control-icon-map` |
| Badge | Luôn ≠ citizen / Cổng người dân |

## 2. Screens / zones

| Screen | FormMode | Zones | Controls |
|--------|----------|-------|----------|
| Inbox góp ý | list | **A Header · B Toolbar · C Grid · D Pagination** | SearchTextInput · status select · row menu |
| Form góp ý | create/edit/view/copy | **Slideout** · **Z1** · **Z2** · **Z3** | 7 controls · readOnly view |

## 3. Field inventory

| uiField | Label VN | Control | Required | FormMode lock |
|---------|----------|---------|----------|---------------|
| code | Mã góp ý | Text readonly | — | all readonly · IdCode |
| senderName | Người gửi | Text | * | view=readOnly |
| role | Vai trò | Select | * | view=readOnly |
| submittedAt | Thời gian | DateTime | * | view=readOnly |
| category | Loại góp ý | Select | * | view=readOnly |
| body | Nội dung cần góp ý | Textarea | * | view=readOnly |
| status | Trạng thái | Select | * | view=readOnly |

### List columns

STT · □ · **Mã** · **Người gửi** · **Vai trò** · **Loại** · **Nội dung** · **Thời gian** · **Trạng thái** · ⋯

### Status

draft · sent

### Category

loi · de-xuat · ux · khac

### Role

tuan-duong · quan-ly · tuan-kiem

## 4. Control map / hooks

- Shell: `LinPageLayout` · `ErpListHeaderFilters` · `SearchTextInput` · `useServerPagedListLoading`
- **A** `pageHeader`: title «Góp ý phần mềm» — **cấm** Thêm mới trên header
- **B** `catalogToolbar`: refresh · history stub · config · **+ Tạo mới**
- Row menu: Xem · Sửa · Sao chép
- View: `readOnly` — **cấm** disabled xám
- Search: `?search=` + `?status=` + page/pageSize
- Leave-confirm khi dirty
- Footer actions demo parity: Gửi · Lưu nháp · Xóa nội dung · Hủy (map Create/Edit save modes)

## Prototype (REQUIRED)

| | |
|--|--|
| Artifact | `ui/prototype/feedback-list-prototype.html` |
| Zones | **A–D** + Slideout Z1–Z3 |
| Scope | content-only (no chrome / note banner / menu) |
| **reviewUrl** | `file:///D:/AI-QLBD/Linm.RMMS.Data/specs/feedback/ui/prototype/feedback-list-prototype.html` |

## Handoff → SA

- API list/CRUD `api/v1/integration/feedbacks`
- MFE `Linm.Web.RMMS.Integration` · `/integration/feedback`

## Version meta (REQUIRED)

| Field | Value |
|-------|-------|
| skillId | agent-design |
| skillVersion | 2026.08.08.31 |
| schemaVersion | 1 |
| workflowVersion | 2026.08.09.02 |
| rulesVersion | 2026.08.09.02 |
| generatedAt | 2026-08-09T16:00:00.000Z |
| versionGate | rechecked |
