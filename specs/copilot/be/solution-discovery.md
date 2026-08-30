# SA — solution-discovery — copilot

| Field | Value |
|-------|-------|
| feature | `copilot` |
| this role | `sa` · `/agent-sa` |
| status | `confirmed` |
| solution_confirm | **approve** (user APPROVE→CHAIN · enqueue TL `task_f9bd3a2a`) |
| changeScope | `edit_page` |
| packKind | `list` (packet) · featureClass **`ai`** |
| Feature Kind | **B** session catalog A–D + **D** `CopilotChatDrawer` · **không** CRUD form full-page P1 |
| domain | **Copilot** · kebab `copilot` (DOMAIN-MAP) |
| BackendRoot | `D:/AI-QLBD/Linm.RMMS.WebService` |
| MFE | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Copilot` · `/copilot` |
| mfeStdUrl | `http://localhost:9310/copilot` |
| prior · design | **confirmed** (user APPROVE→CHAIN) · `ui/design.md` + prototype · `task_76a85b90` |
| prior · po | `done` · GAP-PO-COP-01..14 · `task_b10efe7f` |
| prior · data_analy | `done` · hash `sha256:f2466aa9004e0ca38e0db5549eb8e8c2d9a1a874efc83bcbfab0f7e4b737d805` · `task_46a9e2c3` · cluster **absent** |
| taskId | `task_f47ca8e1` |
| updatedAt | `2026-08-15T13:45:00.000Z` |

> SA **chốt** lookup API + list/chat contract. Design **chốt** control-map. **Cấm** Dev đoán Text vs SearchInput.  
> **Cấm** `ERP.Service.*` · `Domains/Master` · `api/v1/rmms/*` · **cấm** parent JSON inventory.  
> Chat Kind D **là** surface sản phẩm — **không** Resource / View=`readOnly` composer.

## Gates

| Gate | Value |
|------|-------|
| sa_tz_gate | **tz_required** — `CreatedAt` / `UpdatedAt` / `LastMessageAt` store **UTC** · FE display local |
| sa_xco_gate | **xco_get_only** — GetById / chat / archive / delete / PATCH trong tenant `HasQueryFilter` `CompanyCode` · cross-company → 404 (không leak) |
| sa_shared_table | **share_tenant** (`Copilot*Entity` : `TenantEntity`) |
| parent_json | **cấm** trên session DTO. `CitationsJson` / `ChartJson` = cột string nội bộ message → map DTO object (giữ live) |
| lookup_share | **không** master catalog P1 — status/locale = enum tĩnh |
| design_confirm | **approve** (board APPROVE→CHAIN · `task_76a85b90`) |
| repo | `beRepo` + `uiRepo` **confirm** (STATUS) — Dev vẫn chờ **solution_confirm** board |
| autoApprove | **OFF** — SA **không** tự confirm |

## Paths (LOCKED — no new domain)

| Layer | Path |
|-------|------|
| API domain | `api/src/RMMS.Service.Api/Domains/Copilot/` |
| Models | `api/domains/copilot/LINM.RMMS.Copilot.Models/DTOs/CopilotSessionDtos.cs` |
| Entity | `api/shared/RMMS.Service.Persistence/Entities/CopilotSessionEntity.cs` · `CopilotMessageEntity.cs` · `CopilotFeedbackEntity.cs` |
| Tables | `rmms_copilot_sessions` · `rmms_copilot_messages` · `rmms_copilot_feedbacks` |
| Migration | **`Schema_RmmsCopilotSessions`** `20260815130000_Schema_RmmsCopilotSessions.cs` **đã có file** — apply DB = **ops** (GAP-PO-COP-11) |
| BFF | `bff/domains/copilot/LINM.RMMS.Copilot.Bff/Controllers/CopilotBffController.cs` |
| Route prefix | **`api/v1/copilot`** |
| BFF prefix | **`web-bff/api/v1/copilot`** |
| FE BASE | `/copilot` (relative `VITE_API_URL`) |

**Cấm** tạo folder domain mới · **cấm** `ERP.*` · **cấm** `Linm.Web.ERP.WebService`.

## Live BE vs this pack (delta)

CRUD sessions + chat canned + feedback + stats + health **đã có**. Pack **không** rewrite entity / **không** migration schema mới. SA chốt **GAP** Dev phải đụng API + FE:

| ID | Live today | Required this pack | Layer |
|----|------------|--------------------|-------|
| GAP-SA-COP-PAGE | `pageSize` default **20** · allow `{20,50,100,200,500}` · invalid → 20 | Default **50** · allow **chỉ** `{50,100,200,500}` · invalid → **50** (Design Zone D) | API `GetList` + `CopilotService.GetSessionsAsync` + FE default 50 |
| GAP-SA-COP-TITLE | Không PATCH title · create default «Phiên mới» · chat auto-truncate nếu title=«Phiên mới» | **IN P1** `PATCH …/sessions/{id}` `{ title }` (GAP-PO-COP-06 · Design Z1 rename) · trim · max 256 · empty → 422 | API + DTO `UpdateCopilotSessionTitleRequest` + BFF PATCH + FE |
| GAP-SA-COP-RATE | `RateRemaining` chỉ trên `POST chat` · Zone A cần `n/10` khi load list | **IN P1** `GET …/copilot/rate` (peek, **không** consume) · `{ rateRemaining, rateLimit: 10 }` | API + BFF GET + FE Zone A |
| GAP-SA-COP-INIT | Không `init-data` | **OUT P1** — FE static enum Design §3 (GAP-PO-COP-12) | FE only |
| GAP-SA-COP-EXPORT | Không endpoint export | **OUT BE** — FE stub JSON từ `GET sessions/{id}` | FE |
| GAP-SA-COP-BFF-PATCH | BFF body chỉ POST/PUT | PATCH title phải forward body | BFF `ForwardAsync` thêm `HttpMethod.Patch` |
| GAP-SA-COP-FORM | `CopilotFormPage` MFE scaffold | **OUT P1** — ẩn/redirect `/copilot/new` `/:id` (GAP-PO-COP-04) | FE only |
| GAP-SA-COP-ENGINE | Canned `ResolveReply` · model `gpt-4o-mini` / `gpt-4o` / `rag-p2` badge | **Giữ** P1 canned (GAP-PO-COP-07/08) · `rag-p2` **không** Qdrant | API keep |
| GAP-SA-COP-RATE-SCOPE | Window key `company + ":local"` | **P1 giữ** (UserId live=`local`) · P2 per-user JWT | document only |

**Không** `Schema_*` mới. Apply migration existing = ops — **không** block SA artifact.

**P2 / out:** Azure OpenAI / `Linm.AiService` · Qdrant · SQL tool whitelist · token budget UI · Mobile · Excel import · clone chrome demo.

## API catalog

### API-01 — List sessions

| | |
|--|--|
| Method / Path | `GET /api/v1/copilot/sessions` |
| BFF | `GET /web-bff/api/v1/copilot/sessions` (query as-is) |
| Purpose | Kind B — search must work · filter đổi → FE `page=1` |
| Permission | `copilot.sessions.read` (stub P1) |
| Query | `search?` · `status?` (`active` \| `archived`) · `page` default 1 · `pageSize` **50/100/200/500** |
| Filter | `status` exact · `search` Contains **code** hoặc **title** (case-insensitive) · AND · `IsActive=true` |
| Sort | `LastMessageAt ?? UpdatedAt` DESC |
| Response | `ApiResponse<CopilotSessionPagedResult>` — list **không** embed messages |

### API-02 — GetById

| | |
|--|--|
| Method / Path | `GET /api/v1/copilot/sessions/{id}` |
| Purpose | Hydrate Kind D · XCO get_only |
| Permission | `copilot.sessions.read` |
| Response | Session + `messages[]` + latest feedback vote |
| Errors | 404 |

### API-03 — Create session

| | |
|--|--|
| Method / Path | `POST /api/v1/copilot/sessions` |
| Purpose | Zone B **Phiên mới** / FAB không chọn dòng |
| Permission | `copilot.sessions.create` |
| Body | `CreateCopilotSessionRequest` `{ title? }` — default «Phiên mới» |
| Code | server `SES-yyyyMMdd-nnnn` — client **không** gửi `code` |
| Errors | 422 nếu title > 256 |

### API-04 — PATCH title (NEW)

| | |
|--|--|
| Method / Path | `PATCH /api/v1/copilot/sessions/{id}` |
| BFF | `PATCH /web-bff/api/v1/copilot/sessions/{id}` |
| Purpose | Z1 title rename persist |
| Permission | `copilot.sessions.update` |
| Body | `{ "title": "string" }` required non-empty after trim · max 256 |
| Errors | 404 · 422 |

### API-05 — Archive toggle

| | |
|--|--|
| Method / Path | `POST /api/v1/copilot/sessions/{id}/archive` |
| Behavior | `active` ↔ `archived` · **không** soft-delete |
| Permission | `copilot.sessions.update` |
| Errors | 404 |

### API-06 — Soft delete

| | |
|--|--|
| Method / Path | `DELETE /api/v1/copilot/sessions/{id}` |
| Behavior | `IsActive=false` |
| Permission | `copilot.sessions.delete` |
| Errors | 404 |

### API-07 — Chat (canned P1)

| | |
|--|--|
| Method / Path | `POST /api/v1/copilot/chat` |
| Purpose | Composer gửi · optional create session nếu `sessionId` empty |
| Permission | `copilot.chat.send` |
| Body | `{ sessionId?, message*, locale: "vi"\|"en", model?: "gpt-4o-mini"\|"gpt-4o"\|"rag-p2" }` |
| Rate | 10 req/min · consume 1 · HTTP **429** `RATE_LIMIT` |
| Validate | `message` required · locale ∉ {vi,en} → default `vi` · model normalize như live |
| Response | `CopilotChatResult` (session + user/assistant + `rateRemaining` + `rateLimit`) |
| Errors | 422 · 404 · 429 |

### API-08 — Feedback

| | |
|--|--|
| Method / Path | `POST /api/v1/copilot/feedback` |
| Body | `{ messageId*, vote: "up"\|"down", note? }` — note **IN P1** (GAP-PO-COP-05) |
| Permission | `copilot.chat.feedback` |
| Errors | 404 message · 422 vote |

### API-09 — Stats

| | |
|--|--|
| Method / Path | `GET /api/v1/copilot/stats` |
| Purpose | optional dashboard counts — **không** thay rate badge |
| Permission | `copilot.sessions.read` |

### API-10 — Rate peek (NEW)

| | |
|--|--|
| Method / Path | `GET /api/v1/copilot/rate` |
| BFF | `GET /web-bff/api/v1/copilot/rate` |
| Purpose | Zone A badge `n/10` khi vào list — **không** consume |
| Response | `{ rateRemaining, rateLimit: 10 }` |
| Permission | `copilot.chat.send` |

### API-11 — Health (keep)

`GET /api/v1/copilot/health` — existing.

### API-12 — Prompts catalog (P1 canned SSOT)

| | |
|--|--|
| Method / Path | `GET /api/v1/copilot/prompts` |
| BFF | `GET /web-bff/api/v1/copilot/prompts` |
| Purpose | Chip ×5 + match `POST /chat` — **một** `CopilotMockCatalog` UTF-8 |
| Response | `{ prompts: string[] }` |
| Permission | `copilot.sessions.read` (stub P1) |
| Note | **Cấm** FE duplicate prompt/reply mock. Fold VN (bỏ dấu) khi match. |

## Lookup (SA chốt — T-UI-LKP)

**Không** SearchInput master (road-route / asset-type) P1.

| ID | Control | API | Values |
|----|---------|-----|--------|
| LKP-01 | SearchInput `status` Zone B | **none** — FE static | trống=Tất cả · `active` · `archived` · query `?status=` |
| LKP-02 | SearchInput `locale` Z3 | **none** — FE static | `vi` · `en` · body `locale` |

**Cấm** native `<select>`. **Cấm** `GET init-data` P1.

## Field map (Design uiField → DTO → DB)

| uiField | controlHint | dtoField | dbColumn | notes |
|---------|-------------|----------|----------|-------|
| search | SearchTextInput | query `search` | code / title Contains | page=1 FE |
| status (filter) | SearchInput | query `status` | `status` exact | |
| code | Text readonly IdCode | `Code` | `code` | server SES-* |
| title | Text | `Title` | `title` | PATCH API-04 |
| status | badge | `Status` | `status` | active/archived |
| messageCount | Text number | `MessageCount` | `message_count` | |
| lastMessageAt | Date | `LastMessageAt` | `last_message_at` | UTC |
| createdAt | Date | `CreatedAt` | `created_at` | UTC |
| rateRemaining | badge | `RateRemaining` | — memory | API-07 + API-10 |
| draft / message | TextArea | `Message` | `content` | POST chat |
| locale | SearchInput | `Locale` | `locale` | vi/en |
| model | badge | `Model` | `model` | canned |
| role | badge | `Role` | `role` | |
| content | markdown | `Content` | `content` | **cấm** Input readOnly |
| tokens | Text number | `Tokens` | `tokens` | INT |
| citations[] | chip | `Citations` | `citations_json` | DTO list |
| chart | preview | `Chart` | `chart_json` | DTO object |
| feedback | thumb | `Vote` | `vote` | up/down |
| feedbackNote | Text modal | `Note` | `note` | optional |
| userId | — | `UserId` | `user_id` | server `local` P1 |

**Cấm** parent JSON string trên session DTO.

## Enum (LOCKED)

**status:** `active` = Đang dùng · `archived` = Lưu trữ  

**locale:** `vi` · `en`  

**vote:** `up` · `down`  

**model P1:** `gpt-4o-mini` (default) · `gpt-4o` (escalate canned) · `rag-p2` (badge text only)

## Entity (unchanged schema)

Giữ 3 entity live. Soft delete session `IsActive`. Messages/feedbacks **không** hard-cascade P1 (orphan OK khi session soft-delete).

## BFF

Proxy-only. **Delta:** `PATCH sessions/{id}` + `GET rate` + `ForwardAsync` hỗ trợ **Patch** body. Query list đã passthrough.

## Migration

**Không** schema mới. Ops apply `Schema_RmmsCopilotSessions` trước QA list (GAP-PO-COP-11).

## Perm (FE + BE stub)

`copilot.sessions.read|create|update|delete`  
`copilot.chat.send` · `copilot.chat.feedback`

## Handoff → TL (sau user Approve SA)

Emit **T-CTX · T-PERM · T-UI-LIST (A–D) · T-UI-FORM (OUT / redirect) · T-UI-ACT · T-UI-LKP · T-UI-FIELD · T-UI-PROD · T-UI-UX · T-BE/BFF**.

| Task hint | Scope |
|-----------|--------|
| T-UI-LKP-01 | SearchInput status + locale — **cấm** Select |
| T-UI-FIELD-01 | Date UTC · tokens INT · enum status/locale/model/vote · title PATCH |
| T-UI-LIST | 1× LinPageLayout · LinCatalogDataGrid kéo cột ON · LinCatalogListPagination 50/100/200/500 |
| T-UI-DRAWER | Kind D Z1–Z3 · LeaveConfirm · feedback note · **cấm** window.confirm |
| T-UI-FORM | Ẩn CopilotFormPage |
| T-BE-01 | pageSize 50/100/200/500 |
| T-BE-02 | PATCH title |
| T-BE-03 | GET rate peek |
| T-BFF-01 | PATCH + GET rate + Patch body |
| T-PERM | keys trên |

**Next:** TL **pending** đến `solution_confirm` board (autoApprove OFF).

## Confirm

`solution_confirm` = **approve** — user APPROVE→CHAIN (`task_f47ca8e1`) · TL `task_f9bd3a2a` completed.

## Version meta (REQUIRED)

| Field | Value |
|-------|-------|
| skillId | agent-sa |
| skillVersion | 2026.08.15.5 |
| schemaVersion | 2 |
| workflowVersion | 2026.08.15.5 |
| rulesVersion | 2026.08.15.8 |
| generatedAt | 2026-08-15T13:45:00.000Z |
| versionGate | rechecked |
| version_mismatch_action | recheck_new (STATUS) |
| contentHashPriorDesign | sha256:task_76a85b90 |
| contentHashPriorPo | sha256:task_b10efe7f |
| contentHashPriorDataAnaly | sha256:f2466aa9004e0ca38e0db5549eb8e8c2d9a1a874efc83bcbfab0f7e4b737d805 |
| orchestratorSkillVersion | 2026.08.15.5 |
| designSkillVersion | 2026.08.15.5 |
| poSkillVersion | 2026.08.15.5 |
| dataAnalySkillVersion | 2026.08.15.5 |

---
<!-- Version meta: skillVersion=2026.08.15.5 · schemaVersion=2 · workflowVersion=2026.08.15.5 · rulesVersion=2026.08.15.8 · versionGate=rechecked -->
