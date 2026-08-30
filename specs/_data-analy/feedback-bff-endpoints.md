# BFF endpoints — feedback (mobile · Góp ý)

| | |
|---|---|
| feature | `feedback` |
| bff | `Linm.RMMS.Mobile.Bff` · `MobileApiProxyController` catch-all |
| prefix | `mobile-bff/api/v1` |
| downstream | `ApiBase` → `RMMS.Service.Api` · Integration · `AppFeedbacksController` |
| source | CTX `feedback.md` · live `[Route("api/v1/integration/feedbacks")]` · DOMAIN-MAP `feedback` → Integration |
| **cấm** | invent `api/v1/feedback` · invent mobile-only DTO · ERP.* · app `:5101` · DbContext trên BFF · bind `mfeStdUrl` |

App `ApiClient.base` = `{BffBase}/mobile-bff/api/v1`.

## Như thế nào (skill step 6)

| Tầng | Repo / package | App có biết? |
|------|----------------|--------------|
| UI | iOS + Android | Có — `{BffPrefix}` |
| BFF host | `Linm.RMMS.Mobile.Bff` | Có — một host |
| Domain API | Integration · `AppFeedbacksController` | **Không** — proxy rewrite |
| Dedicated FeedbackController trên BFF | **không** | **cấm invent** |

## Table — `#sc-feedback` · `DES-MOB-FEEDBACK`

| Action / zone | Method | `{BffPrefix}` path | BFF | Downstream | Source | Gap |
|---------------|--------|--------------------|-----|------------|--------|-----|
| Gửi góp ý | POST | `integration/feedbacks` | proxy | `AppFeedbacksController.Create` | live + CTX | body + session defaults |
| (optional inbox — OUT P1) | GET | `integration/feedbacks` | proxy | `GetList` | live | **OUT** mobile demo · web list |
| (optional detail — OUT P1) | GET | `integration/feedbacks/{id}` | proxy | `GetById` | live | **OUT** |
| Nav back | — | — | — | local nav | `me` | **không** API |
| Body textarea | — | — | — | local input | controlHint | **không** API |
| Toast ok / err | — | — | — | UI | after POST | **không** API |

## DTO bind (live)

### Create — `CreateAppFeedbackRequest`

| Field | Required | Mobile P1 bind |
|-------|----------|----------------|
| `SenderName` | yes | Me / auth display name |
| `Role` | yes | session role → `tuan-duong` \| `quan-ly` \| `tuan-kiem` |
| `SubmittedAt` | yes (default UTC) | `DateTime.UtcNow` nếu default |
| `Category` | yes | P1 default `de-xuat` · **GAP-MOB-FB-CAT-01** |
| `Body` | yes | textarea «Nội dung góp ý» |
| `Status` | yes | `sent` on submit |
| `UserId` | optional | auth subject |

### Response — `AppFeedbackDto`

`Id` · `Code` (`FB-YYYYMMDD-NNNN`) · `SenderName` · `Role` · `SubmittedAt` · `Category` · `Body` · `Status` · `UserId` · …

**Cấm** app fork DTO khác BFF table.

## Query (list — OUT mobile P1 UI)

`search` · `status` · `page` · `pageSize` (50/100/200/500) — chỉ cite nếu sau này mở inbox native.

## Có trên domain — **không** thuộc slug mobile P1

| Method | Path | Ghi |
|--------|------|-----|
| GET/PUT/DELETE | `integration/feedbacks` · `…/{id}` | web Kind B CRUD — **OUT** demo `#sc-feedback` |
| CTX alias | `api/v1/nhan-dan/gop-ys` | **không** live controller — **GAP-MOB-FB-CTX-PATH-01** · cite `integration/feedbacks` |
| Web BFF | `web-bff/api/v1/integration/feedbacks` | web — mobile = `mobile-bff` proxy |
| Perms | `integration.feedbacks.create` | FE gate · BE stub P1 (CTX debt) |

## Verify live

| Check | Result |
|-------|--------|
| `AppFeedbacksController` | **Live** · `api/v1/integration/feedbacks` GET/POST/PUT/DELETE |
| Entity / migration | `rmms_app_feedbacks` · `Schema_RmmsAppFeedbacks` |
| Mobile.Bff dedicated controller | **không** — catch-all proxy |
| `api/v1/feedback` / `api/v1/nhan-dan/gop-ys` | **không** live — **cấm invent** |
| DOMAIN-MAP | `feedback` → Integration · **cấm** ERP.* / Domains/Master |

## Step 4b

**Không** chạy ở role data_analy. Schema đã có · create path Signed. Category pills / CTX path alias = GAP handoff PO → SA nếu Signed.

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
| contentHash | sha256:feedback-mobile-bff-20260829 |
| bffContentHash | sha256:feedback-mobile-bff-20260829 |
| taskId | `task_be769223` |

---
<!-- Version meta: skillId=agent-data-analy-mobile skillVersion=2026.08.25.01 schemaVersion=2 workflowVersion=2026.08.25.01 rulesVersion=2026.08.25.2 versionGate=rechecked -->
