# Góp ý phần mềm — Feature Context

> **Slug:** `feedback` · **Module:** `Integration` (nhẹ) · **Phase:** P1  
> **Status:** Signed (pack list · crud_formtype · Dev `task_7442b627`)  
> **Kind:** **B** catalog list + **full-page** form — Confirmed by: ai-autocode-autopilot (`task_7442b627`)  
> **Sources:** guide Mobile **Góp ý** · `15-SCREEN-AI-MAP.md`  
> **Demo HTML:** `Linm.RMMS.Demo/public/demo/nhan-dan/gop-y.html`  
> **MFE (align):** `Linm.Web.RMMS.Integration` · `/nhan-dan/gop-y`  
> **≠** Cổng người dân (`citizen`)

## 1. Tổng quan

| | |
|--|--|
| Mục tiêu | Tuần đường / quản lý / tuần kiểm gửi góp ý tính năng phần mềm |
| Persona | Mọi role hiện trường |
| App hiện có | Mobile **Góp ý** — giữ UX |
| DoD | CRUD feedbacks · list admin Kind B · **full-page** form Kind B (cấm Slideout) |

## 2. Design / UI

| Screen | Pattern | Zones | Ghi chú |
|--------|---------|-------|---------|
| Gửi góp ý | Kind B **full-page** | Z1 Quay lại · Z2 fields/`<dl>` · Z3 footer | Host: Integration MFE |
| Inbox admin | Full Kind B list | In scope this pack | `/nhan-dan/gop-y` |
| Host stub | Full mock | «Mở góp ý» → slideout | Demo only — **không** clone vào MFE |

**Kind B form layout (erp-form-context · task_6cb63382):**

- **Z1** — Quay lại · title «Góp ý phần mềm» · badge ≠ citizen · **cấm** Save trên header
- **Z2a** — Validation banner (nội dung bắt buộc)
- **Z2b** — Mã · Người gửi · Vai trò · Thời gian · Loại · Nội dung · Trạng thái · View=`<dl>`
- **Z3** — Gửi góp ý của bạn · Lưu nháp · Xóa nội dung · Hủy thay đổi  

**Mock:** 1 bản nháp localStorage · IdCode `FB-YYYYMMDD-NNNN` · toast gửi thành công (no BE).

**2d readonly:** View=`<dl>` display · Confirmed by: ai-autocode-autopilot  
**2e IdCode:** `FB-YYYYMMDD-NNNN`  
**2k:** voucher_default · leave-confirm khi dirty  
**2l:** Zone F `LinCatalogUiSchemaEditorModal` · catalogKind=`app-feedbacks`  

## 3. API

Signed routes (SSOT) under `api/v1/nhan-dan/gop-ys` · BFF proxy `web-bff/api/v1/integration/feedbacks` · MFE BASE `/nhan-dan/gop-ys`.

| Method | Path | Mô tả | BE status |
|--------|------|-------|-----------|
| GET | `api/v1/nhan-dan/gop-ys` | List admin (paged · search/status) | **Signed** · admin list **in scope** this pack |
| GET | `api/v1/nhan-dan/gop-ys/{id}` | Get by id | **Signed** |
| POST | `api/v1/nhan-dan/gop-ys` | Create góp ý | **Signed** |
| PUT | `api/v1/nhan-dan/gop-ys/{id}` | Update | **Signed** |
| DELETE | `api/v1/nhan-dan/gop-ys/{id}` | Soft delete | **Signed** |

Perms (Auth stub): `integration.feedbacks.read|create|update|delete`. Entity `AppFeedbackEntity` / `rmms_app_feedbacks` · IdCode `FB-YYYYMMDD-NNNN`.

## 4. Database

| Entity | Key columns |
|--------|-------------|
| AppFeedback (`rmms_app_feedbacks`) | Id, CompanyCode, Code (`FB-YYYYMMDD-NNNN`), SenderName, Role, SubmittedAt (UTC), Category, Body, Status, UserId, IsActive |

## 5. Events / tích hợp

Optional email/notify đội kỹ thuật — DEFER P1 demo.

## 6. Gaps / quyết định

| ID | Question | Default |
|----|----------|---------|
| GAP-F-FB-01 | Admin UI inbox | Closed — list Kind B + **full-page** form in Integration MFE (cấm Slideout) |
| GAP-F-FB-02 | BE endpoints `api/v1/nhan-dan/gop-ys` | Closed — Signed pack |
| GAP-F-FB-03 | Phân biệt citizen | Luôn badge / copy ≠ cổng người dân |

## 7. Demo checklist (chốt khách)

- [x] Form gửi đủ field control-map (7)
- [x] Nút «Gửi góp ý của bạn» + toast mock
- [x] Không nhầm với Báo sự cố người dân (`citizen`)
- [x] Đủ 7 actions từ control-map
- [x] Leave-confirm khi dirty
- [x] Không gọi BE

<!-- LEGACY-GOVONE-CAPTURE:START -->
## Legacy GOVOne (auto-capture)

> Auto map từ `tools/legacy-govone-capture` · vision: `_raw/legacy-govone/ai-analysis/`.
> Dùng làm **step context** cho `/qlbd-analy-demo` · `yarn scan-qlbd-demo`.

### Nguồn

- Raw feature: `docs/context/_raw/legacy-govone/features/feedback.md`
- Vision packets: 0

### Capture inventory

> **Không có màn GOVOne vision** riêng cho Mobile **Góp ý**.  
> Capture synthetized từ `Hướng dẫn sử dụng` § Góp ý · `features/feedback.md` · `15-SCREEN-AI-MAP.md`.  
> Source: product docs — **không** password · **không** clone skin GOVOne.  
> **≠** Cổng người dân (`citizen`).

## Pages (1)

### GÓP Ý PHẦN MỀM (form gửi)

- **id:** `feedback-send-form`
- **url:** (planned) `/nhan-dan/gop-y`
- **title:** Góp ý phần mềm
- **headings:** Thông tin người gửi · Nội dung góp ý · Gửi

#### Labels / field captions

- Mã góp ý:
- Người gửi:
- Vai trò:
- Thời gian:
- Loại góp ý:
- Nội dung cần góp ý:
- Trạng thái:

#### Inputs

| tag | type | name/id | placeholder |
|-----|------|---------|-------------|
| input | text | feedbackCode | FB-20260801-0001 |
| input | text | senderName | Nguyễn Văn A |
| select | select-one | senderRole | tuan-duong |
| input | datetime-local | sentAt | 2026-08-01T18:00 |
| select | select-one | category | de-xuat |
| textarea | text | body | Nội dung cần góp ý… |
| select | select-one | status | draft |

#### Actions / buttons (full)

| label | kind | zone | tag | disabled |
|-------|------|------|-----|----------|
| Mở góp ý | create | host | button | |
| Gửi góp ý của bạn | create | footer | button | |
| Lưu nháp | action | footer | button | |
| Xóa nội dung | destructive | footer | button | |
| Đóng | close | header | button | |
| Quay lại | nav | header | button | |
| Hủy thay đổi | close | footer | button | |

- **actionCount:** 7
- **fieldCount:** 7

### Step context checklist

- [x] Design demo parity legacy zones
- [x] Control-map fields từ Labels/Inputs/Vision
- [ ] Status Demo → Signed → `/qlbd-align-mfe`
<!-- LEGACY-GOVONE-CAPTURE:END -->

<!-- DEMO-MFE-MODERN:START -->
## Demo MFE modern (erp-form-context)

> Same fields/actions từ capture · UI chuẩn Linm — **không** clone skin legacy.

- Control-map: [`feedback-control-map.md`](../_raw/legacy-govone/demo-maps/feedback-control-map.md)
- Actions: [`feedback-actions.md`](../_raw/legacy-govone/demo-maps/feedback-actions.md)
- Fields mapped: 7 · Actions: 7
- Kind hint: **B** (catalog list + full-page form) — erp-form-context Kind B · leave-confirm · **cấm** Slideout

Gen demo: `/qlbd-analy-demo @feedback` — load control-map trên + `/erp-form-context` rules (2a-K · 2g · common controls).
<!-- DEMO-MFE-MODERN:END -->

## 8. Tracking (autopilot)

| | |
|--|--|
| Task | `task_7442b627` (Dev) · prior TL `task_d4ec3f5b` · SA `task_064242e5` |
| Skill | `/agent-qldb-workflow @feedback` |
| sourceKind | **synthetic** (capture labeled legacy-govone block nhưng **không** màn GOVOne vision — product docs + guide Mobile Góp ý) |
| Files | `feedback.md` · MFE `FeedbackListPage` · BE `AppFeedbacks*` · migration `rmms_app_feedbacks` · specs/feedback/* |
| Dev | MFE `/nhan-dan/gop-y` · API `api/v1/nhan-dan/gop-ys` · DOMAIN Integration |
| ACTION WORK GATE | list A–D + **full-page** form C/E/V/Copy · toolbar/row Delete · footer Gửi/Nháp · schema `app-feedbacks` |
| BE align | **ON** · Signed · Step 4b done · cấm ERP.* |
| Confirmed by | ai-autocode-autopilot · task_7442b627 |
