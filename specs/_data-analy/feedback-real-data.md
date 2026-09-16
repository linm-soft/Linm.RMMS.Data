# Real-data bind — feedback

| | |
|---|---|
| feature | `feedback` |
| prefix | `mobile-bff/api/v1` |
| sameMobile | yes · proxy Integration `AppFeedbacksController` |
| taskId | `task_be769223` |

Skill: `example/real-data-bind.md` · **GAP-MOB-REAL-01**

## §A — Nguồn

| sourceKind | sourceCite | empty | error |
|------------|------------|-------|-------|
| `api` | CTX `feedback.md` · `AppFeedbacksController` · `CreateAppFeedbackRequest` | Banner / disable send nếu body trống | Toast lỗi · **cấm** toast «Đã gửi» khi fail |
| `session` | Me / auth profile · role claim | Fallback display name · role map | Giữ form · không fake sender |
| `derived` | defaults category=`de-xuat` · status=`sent` · SubmittedAt=now | — | **GAP-MOB-FB-CAT-01** |

## §B — Bind field (HARD · khớp BFF table)

| uiField | Label | controlHint | catalogKind | GET / write | write field | sameMfe | sameMobile |
|---------|-------|-------------|-------------|-------------|-------------|---------|------------|
| body | Nội dung góp ý | MultilineText | — | POST `integration/feedbacks` | `Body` | gap (web full form) | yes |
| btnSend | Gửi góp ý | PrimaryButton | — | POST `integration/feedbacks` | CreateAppFeedbackRequest | gap | yes |
| (hidden) senderName | — | — | — | session → Create | `SenderName` | yes | yes |
| (hidden) role | — | — | feedback-role | session → Create | `Role` | yes | yes |
| (hidden) category | — | — | feedback-category | default `de-xuat` | `Category` | yes | yes |
| (hidden) status | — | — | feedback-status | `sent` | `Status` | yes | yes |
| (hidden) submittedAt | — | — | — | device UTC | `SubmittedAt` | yes | yes |
| (hidden) userId | — | — | — | auth | `UserId` | yes | yes |
| toastOk | Đã gửi góp ý | Toast | — | after 200 | — | — | yes |

§B path **khớp** `feedback-bff-endpoints.md` — **không** invent `feedback` / `nhan-dan/gop-ys` trên app.

## §C — Catalog

| catalogKind | search/list API | seed/import cite | Cấm |
|-------------|-----------------|------------------|------|
| `feedback-status` | static FE | draft · sent · web control-hint | Invent thêm status |
| `feedback-role` | static FE | tuan-duong · quan-ly · tuan-kiem | Native `<select>` trên mobile P1 UI (không field) |
| `feedback-category` | static FE | loi · de-xuat · ux · khac | Invent `api/v1/.../categories` |

Không CUC2 master cho góp ý phần mềm.

## §D — Map / vẽ

`map: none` — không embed map trên `#sc-feedback`. Entry từ `me`.

## §E — Progress / vòng đời

| stateField | Nguồn | Ai đổi | API | UI |
|------------|-------|--------|-----|-----|
| Feedback `Status` | `rmms_app_feedbacks` | user Gửi | POST create `sent` | toast «Đã gửi góp ý» |
| Code | server NextCode | BE | response `Code` | optional show P2 · demo không |
| Body dirty | local | user type | — | leave back — Design leave-confirm optional |

## §F — Handoff

| Role | Dùng packet |
|------|-------------|
| PO | DoD «Gửi = POST thật» · GAP pack/path/category · ≠ citizen |
| Design | control-map khớp §B · dual parity · chrome back |
| SA | giữ `integration/feedbacks` · CTX path alias GAP |
| Dev iOS + Android | cùng §B · prefix mobile-bff |

## Demo rows SSOT (fallback UI only — **không** fake POST 200)

| Field | Value |
|-------|-------|
| Title | Góp ý |
| Label | Nội dung góp ý |
| Placeholder | Mô tả tính năng cần sửa / bổ sung… |
| CTA | Gửi góp ý |
| Toast ok | Đã gửi góp ý |
| Me row | Góp ý · Phản ánh tính năng phần mềm · `#i-info` |

## § Delta Current vs New (real-data)

| ID | Current | New |
|----|---------|-----|
| GAP-MOB-FB-DATA-01 | Toast Me không API | POST `integration/feedbacks` + session bind |
| GAP-MOB-FB-CTX-PATH-01 | CTX `nhan-dan/gop-ys` | Live `integration/feedbacks` |
| GAP-MOB-FB-CAT-01 | Web form có Select loại | Mobile P1 default `de-xuat` (không UI) |

## § Cấm

- Watermark / «bản Gói N» / process text  
- Fake success toast khi POST fail  
- Invent mobile-only path `feedback`  
- Bind `mfeStdUrl` / ERP.*  
- Skip §B ≠ BFF → **GAP-MOB-REAL-01**  
- Gộp «Gửi góp ý» thành sibling queue → **GAP-MOB-ACT-07**  
- Gộp web admin list / citizen

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
| contentHash | sha256:feedback-mobile-real-data-20260829 |
| taskId | `task_be769223` |

---
<!-- Version meta: skillId=agent-data-analy-mobile skillVersion=2026.08.25.01 schemaVersion=2 workflowVersion=2026.08.25.01 rulesVersion=2026.08.25.2 versionGate=rechecked -->
