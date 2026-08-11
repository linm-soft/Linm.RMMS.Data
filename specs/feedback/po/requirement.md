# PO — feedback (Góp ý phần mềm)

| Field | Value |
|-------|-------|
| feature | `feedback` |
| changeScope | `edit_page` |
| packKind | `list` |
| Feature Kind | **B** — Catalog list (admin inbox) + **Kind D Slideout** form gửi góp ý |
| status | `confirmed` (autopilot · task_d242eb29) |
| updatedAt | 2026-08-09T15:55:00.000Z |

## 1. Goal

Chỉnh **Góp ý phần mềm** từ demo mock (host + slideout localStorage) → list catalog parity (Linm erp-form-context Kind B) + form Slideout Kind D. Align demo → MFE `Linm.Web.RMMS.Integration` · BE `Linm.RMMS.WebService` domain **Integration**.

**≠** Cổng người dân (`citizen`) — badge/copy luôn phân biệt.

## 2. Current → New (edit_page)

| Layer | Current | New (delta) |
|-------|---------|-------------|
| Demo | Kind D slideout · host mock · localStorage nháp · no BE | Giữ SSOT UX demo; pack ưu tiên **list inbox + form** |
| MFE | Không có route feedback | `LinPageLayout kind=catalog` · `/integration/feedback` · pagination · row menu |
| MFE form | — | Create / Edit / View / Copy — góp ý nội bộ (sender · role · category · body) |
| API client | — | `/integration/feedbacks` |
| BE | MISSING (`/api/v1/feedback`) | Greenfield `api/v1/integration/feedbacks` + BFF (**cấm** ERP.* · `/rmms/`) |

## 3. Personas / DoD

- Persona: Tuần đường / Quản lý / Tuần kiểm (gửi) · Điều phối Integration (inbox)
- DoD:
  1. List load + **search work** (mã/người gửi/vai trò/loại/nội dung/status)
  2. Toolbar: Tạo mới · Làm mới · filter status
  3. Row menu: Xem · Sửa · Sao chép
  4. View = `readOnly` (không disabled xám)
  5. Create/Edit/Copy form validate + save · IdCode `FB-YYYYMMDD-NNNN`
  6. Body bắt buộc · leave-confirm khi dirty
  7. FE `yarn build` + `typecheck` PASS
  8. BE build PASS · domain Integration only

## 4. CTX / DEM inventory

| Source | Path | Notes |
|--------|------|-------|
| CTX-FB | `docs/context/features/feedback.md` | API · AppFeedback · Kind D demo · list pack Kind B |
| DEM-FB | `Demo/.../feedback-demo.html` → `integration/feedback.html` | Fields · actions · **không** clone chrome |
| DI-FB | — | No Excel this pack |

### List columns (required)

STT · Mã · Người gửi · Vai trò · Loại · Nội dung (preview) · Thời gian · Trạng thái · actions

### Form fields (required *)

code (readonly IdCode) · senderName* · role* · submittedAt* · category* · body* · status*

### Status values

draft · sent

### Category values

loi · de-xuat · ux · khac

### Role values

tuan-duong · quan-ly · tuan-kiem

### controlHint (synthetic · no Excel cluster)

| Field | controlHint | Notes |
|-------|-------------|-------|
| senderName | Text | Người gửi |
| role | Dropdown | 3 vai trò |
| submittedAt | DateTime | Thời gian |
| category | Dropdown | 4 loại góp ý |
| body | Text | textarea · required |
| status | Dropdown | draft / sent |

## 5. Grid AC (REQUIRED · list)

| ID | AC |
|----|-----|
| AC-G-01 | Zones **A Header · B Toolbar · C Grid · D Pagination** |
| AC-G-02 | Search + status filter apply → page=1 · server/local page |
| AC-G-03 | Row menu View/Edit/Copy |
| AC-G-04 | `LinCatalogDataGrid` + column resize default ON |
| AC-G-05 | Footer `LinCatalogListPagination` pageSize 50/100/200/500 |
| AC-G-06 | 1× `LinPageLayout` — **cấm** nested CatalogListShell |

## 6. Out of scope (this pack)

- Email/notify đội kỹ thuật — DEFER
- Real media attach — DEFER
- Public anonymous portal — N/A (internal only · ≠ citizen)
- OTP / push — DEFER

## 7. Handoff → Design

- Kind B catalog list + Kind D Slideout form
- Prototype + reviewUrl bắt buộc trước design_confirm
- Demo path visual SSOT: `feedback-demo.html` → `integration/feedback.html`
- BE domain **Integration** · route `api/v1/integration/feedbacks`

## Version meta (REQUIRED)

| Field | Value |
|-------|-------|
| skillId | agent-po |
| skillVersion | 2026.08.08.30 |
| schemaVersion | 1 |
| workflowVersion | 2026.08.09.02 |
| rulesVersion | 2026.08.09.02 |
| generatedAt | 2026-08-09T15:55:00.000Z |
| versionGate | rechecked |
