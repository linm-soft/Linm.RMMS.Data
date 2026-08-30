# Data-analy — feedback (controlHint)

| | |
|---|---|
| feature | `feedback` |
| title | [Mobile] Góp ý |
| role | `data_analy` · `/agent-data-analy-mobile` · mode `feature_context` |
| packKind | **`sheet`** (packet · me-action-tree · demo `#sc-feedback` form) · **≠** web STATUS `list` Kind B |
| changeScope | `edit_page` |
| status | **confirmed** |
| taskId | `task_be769223` |
| autoApprove | `ON` |
| demo | `specs/mobile-p1/ui/prototype/{ios,android}/index.html` `#sc-feedback` · `DES-MOB-FEEDBACK` · Me `#row` `go('feedback')` `#i-info` |
| ctx | `docs/context/features/feedback.md` · `me.md` · design mobile-p1 `DES-MOB-FEEDBACK` |
| generatedAt | `2026-08-29T06:00:00.000Z` |

**Cấm:** watermark Gói · invent `api/v1/feedback` · gộp web Kind B list/schema · Slideout · ERP.* · mfeStdUrl · nhầm `citizen` · fake toast success khi POST fail.

## Skill packet (`/agent-data-analy-mobile`) — 4 file

| File | Skill step |
|------|------------|
| **file này** | 4–5 controlHint + tech factors |
| [`feedback-bff-endpoints.md`](feedback-bff-endpoints.md) | 6 BFF · **cấm invent** |
| [`feedback-action-tree.md`](feedback-action-tree.md) | 7 tree + share/reuse |
| [`feedback-real-data.md`](feedback-real-data.md) | 6b real-data bind |

## § Delta Current vs New (`edit_page`)

Giữ PO/Design/SA **web** artifacts đã confirmed (`specs/feedback/*`). Delta **mobile** `task_be769223`:

| ID | Current (native 2026-08-29) | New (SSOT mobile demo + CTX) | Surface |
|----|-----------------------------|------------------------------|---------|
| GAP-MOB-FB-NAV-01 | Me `row-feedback` → **toast only** (iOS/Android) | Nav push `#sc-feedback` «Góp ý» · back → Me | me · feedback |
| GAP-MOB-FB-SCR-01 | Không màn Góp ý | Full `#sc-feedback` · `DES-MOB-FEEDBACK` · label + textarea + primary | screen |
| GAP-MOB-FB-BODY-01 | — | Field «Nội dung góp ý» · placeholder «Mô tả tính năng cần sửa / bổ sung…» | Textarea |
| GAP-MOB-FB-SEND-01 | — | Primary «Gửi góp ý» → POST create · toast «Đã gửi góp ý» | CTA |
| GAP-MOB-FB-DATA-01 | — | POST `integration/feedbacks` via Mobile.Bff · bind session → required DTO | BFF |
| GAP-MOB-FB-PACK-01 | Web STATUS `packKind=list` | Mobile packKind=`sheet` (form send) — Design/PO chốt | meta |
| GAP-MOB-FB-CTX-PATH-01 | CTX ghi `api/v1/nhan-dan/gop-ys` | Live controller `api/v1/integration/feedbacks` — cite live · SA/CTX align | meta |

**Không** đổi (OUT pack mobile P1): web Kind B admin list A–D · full-page 7-field form · schema editor `app-feedbacks` · Slideout · Delete/Copy/View · email/notify P2 · `citizen` cổng dân.

## Tech factors

| Factor | P1 | Notes |
|--------|----|-------|
| GPS | n/a | Không trên `#sc-feedback` |
| Camera | n/a | Không media attach P1 (CTX media = P2) |
| Offline | optional | POST fail → toast lỗi · **cấm** fake 200 · draft offline **DEFER** (demo không có «Lưu nháp») |
| Map | n/a | |
| Biometric | n/a | |
| Push | n/a | |

## § Tab index

`tabs: none` — màn full trong tab shell `me` · **không** segment trên surface (`GAP-TAB-01`). Shell Tab 5 **giữ**. Entry từ hub `me` row Góp ý.

## § Demo dual

Cùng copy VN · cùng `#i-info` (Me row) · cùng title «Góp ý» · cùng label «Nội dung góp ý» · cùng placeholder · cùng CTA «Gửi góp ý» · cùng toast «Đã gửi góp ý». **Cấm** invent icon. Android top-bar icon-btn vs iOS nav-btn text «Tôi» — Design parity chrome (không đổi field).

## controlHint — `#sc-feedback`

| Field | VN | controlHint | Size | Kit | Notes |
|-------|----|-------------|------|-----|-------|
| screenTitle | Góp ý | TopBar title | 17 | `LinmTopBar` | `DES-MOB-FEEDBACK` |
| navBack | Tôi | BackButton | 16 | chevron / icon-btn | `go('me')` |
| bodyLabel | Nội dung góp ý | SectionLabel / FieldLabel | **13** | | |
| body | (textarea) | MultilineText | **≥16** | `LinmTextArea` | required · placeholder SSOT |
| btnSend | Gửi góp ý | PrimaryButton | 16 | `LinmPrimaryButton` | submit · POST create · cùng slug |
| toastOk | Đã gửi góp ý | Toast | 13–16 | `LinmToast` | sau Create 200 |
| toastErr | (lỗi mạng / 422) | Toast | 13–16 | | **cấm** fake ok |
| meRowTitle | Góp ý | ListRow | 16 | `LinmListRow` | entry · `#i-info` |
| meRowSub | Phản ánh tính năng phần mềm | ListRow sub | 13 | | ≠ citizen |

### Hidden bind (không control UI P1 — từ session / default)

| Field | Source | Create DTO | Notes |
|-------|--------|------------|-------|
| senderName | Me / auth profile display name | `SenderName` | required BE |
| role | session role map | `Role` | static enum web · tuan-duong / quan-ly / tuan-kiem |
| category | default `de-xuat` (P1) | `Category` | **GAP-MOB-FB-CAT-01** — Design có thể thêm pill sau |
| status | `sent` on submit | `Status` | draft/sent |
| submittedAt | device UTC now | `SubmittedAt` | |
| userId | auth subject | `UserId` | optional |
| code | server | — | IdCode `FB-YYYYMMDD-NNNN` response only |

## UNCLEAR

**none** — demo + CTX + live `AppFeedbacksController` chốt · category default = GAP (không UNCLEAR UI).

## Handoff → PO

| Field | Value |
|-------|-------|
| feature / packKind | `feedback` / **sheet** (GAP-MOB-FB-PACK-01) |
| phase_from / phase_to | `data_analy` **done** → `po` |
| BFF | `feedback-bff-endpoints.md` |
| Action tree | `feedback-action-tree.md` |
| Real-data | `feedback-real-data.md` |
| Next | `/agent-po-mobile` |
| autoApprove | ON → chain PO (không chờ board) · **cấm** start PO trong task data_analy này |

## Version meta

| Field | Value |
|-------|-------|
| skillId | agent-data-analy-mobile |
| skillVersion | 2026.08.25.01 |
| schemaVersion | 2 |
| workflowVersion | 2026.08.25.01 |
| rulesVersion | 2026.08.25.2 |
| generatedAt | 2026-08-29T06:00:00.000Z |
| versionGate | rechecked |
| contentHash | sha256:feedback-mobile-control-hint-20260829 |
| taskId | `task_be769223` |

---
<!-- Version meta: skillId=agent-data-analy-mobile skillVersion=2026.08.25.01 schemaVersion=2 workflowVersion=2026.08.25.01 rulesVersion=2026.08.25.2 versionGate=rechecked -->
