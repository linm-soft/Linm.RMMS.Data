# SA — solution-discovery — ops (Chỉ đạo điều hành / công văn)

| Field | Value |
|-------|-------|
| feature | `ops` |
| this role | `sa` · `/agent-sa` |
| status | `confirmed` (autopilot) |
| solution_confirm | **approve** (autoApprove=ON · `task_fc7b7dfd`) |
| changeScope | `edit_page` |
| packKind | `list` |
| Feature Kind | **B** catalog list A–D + **full-page** form — **cấm** Kind D Slideout |
| domain | **Notification** (DOMAIN-MAP slug `ops` → kebab `notification`) |
| BackendRoot | `D:/AI-QLBD/Linm.RMMS.WebService` |
| MFE | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Field` · `/ops` |
| mfeStdUrl | `http://localhost:9304/ops` |
| prefix | **`api/v1/notification/inbox`** · overview **`api/v1/notification/overview`** |
| BFF | **`web-bff/api/v1/notification/inbox`** · **`web-bff/api/v1/notification/overview`** |
| prior · design | **confirmed** · `ui/design.md` + `ui/prototype/ops-list-prototype.html` · reviewUrl file:// · `task_6f04bbd7` |
| prior · po | **confirmed** · `po/requirement.md` |
| prior · data_analy | **confirmed** · `specs/_data-analy/features/ops-control-hint.md` · contentHash `sha256:ops-delta-official-doc-20260816` |
| skillVersion | `2026.08.15.5` |
| schemaVersion | `1` |
| workflowVersion | `2026.08.15.5` |
| rulesVersion | `2026.08.15.8` |
| versionGate | `recheck_new` (khớp Design + PO + data-analy stamp `2026.08.15.5`) |
| autoApprove | **ON** |
| chain | **ON** |
| taskId | `task_fc7b7dfd` |
| updatedAt | `2026-08-16T02:00:00.000Z` |

> SA **chốt** lookup API + CRUD/query contract. Design **chốt** control-map. **Cấm** Dev đổi SearchInput → native `<select>`.  
> **Cấm** `ERP.Service.*` · `Domains/Master` · `api/v1/rmms/*` · **cấm** folder domain `Ops`.  
> **Cấm** parent JSON blob. OfficialDocument = **scalars** trên `NotificationEntity`.  
> MFE live = Field `/ops` (DOMAIN-MAP ghi `Linm.Web.RMMS.Ops` = tên cũ — **không** đổi repo).  
> **Supersedes** SA `task_9c3e9db0` (stamp cũ `2026.08.08.17`) — pack này re-audit live BE + Design confirmed 2026-08-16.

## Gates

| Gate | Value |
|------|-------|
| sa_tz_gate | **tz_na** — persist `SentAt`/`CreatedAt`/`UpdatedAt` **UTC** · display local FE `vi-VN` |
| sa_xco_gate | **xco_get_only** — list tenant filter · GetById `IgnoreQueryFilters` + claim `allowed_company_ids` · 403 nếu không thuộc |
| sa_shared_table | **share_tenant** (`NotificationEntity` · `rmms_notifications` · `CompanyCode`) |
| lookup_share | **share_na P1** — FE constants (`lookups.ts` · `DIRECTION_LOOKUP` · org-unit Chi cục II) · Integration Type A **P2** |
| parent_json | **cấm** |
| catalog_schema | Integration `CatalogUiSchemaRegistry.OpsInbox` = `ops-inbox` — **không** ERP.* |
| design_confirm | **approve** (autopilot Design `task_6f04bbd7`) |
| solution_confirm | **approve** (autopilot SA `task_fc7b7dfd`) |
| repo | `beRepo` + `uiRepo` **approve** (STATUS) — user tick trước Dev (**không auto** lần này đã tick) |
| autoApprove | **ON** |

## Paths (LOCKED — no new domain)

| Layer | Path |
|-------|------|
| API domain | `api/src/RMMS.Service.Api/Domains/Notification/` |
| Controllers | `Controllers/NotificationInboxController.cs` · `NotificationOverviewController.cs` |
| Service | `Services/NotificationInboxService.cs` · `INotificationInboxService.cs` |
| Models | `api/domains/notification/LINM.RMMS.Notification.Models/DTOs/NotificationDtos.cs` |
| Entity | `api/shared/RMMS.Service.Persistence/Entities/NotificationEntity.cs` |
| Migration | `Schema_RmmsNotifications` + `Schema_RmmsNotificationsOfficialDoc` |
| Catalog seed | `Domains/Integration/Services/CatalogUiSchemaRegistry.cs` + `CatalogUiSchemaSeed.OpsInbox()` |
| BFF | `bff/domains/notification/LINM.RMMS.Notification.Bff/Controllers/NotificationInboxBffController.cs` · `NotificationOverviewBffController.cs` |
| Route prefix | **`api/v1/notification/inbox`** · **`api/v1/notification/overview`** |
| BFF prefix | **`web-bff/api/v1/notification/inbox`** · **`web-bff/api/v1/notification/overview`** |
| FE BASE | Field `/ops` · fallback `opsStore` khi API unreachable |

**Cấm** `Linm.Web.ERP.WebService`. **Cấm** `api/v1/ops`. **Cấm** clone OfficialDocument sang Report domain (leaf `rpt-cong-van` = query-only).

## Live BE vs this pack (delta)

Live sau `task_31a9bbd8` **đã ship** OfficialDoc + query `direction`/`orgUnitCode` + BFF passthrough + seed `ops-inbox`. Pack Design 2026-08-16 **không** đổi contract. SA **lock keep** — TL/Dev = verify / no-op nếu parity giữ.

| ID | Live today | Required this pack | Layer |
|----|------------|--------------------|-------|
| GAP-SA-OPS-PREFIX | `GET/POST/PUT/DELETE api/v1/notification/inbox` + mark-read | **Giữ** | keep |
| GAP-SA-OPS-QUERY | `search` `status` `priority` `type` `unreadOnly` `direction` `orgUnitCode` `page` `pageSize` | **Giữ** — empty omit = all · pageSize clamp 50/100/200/500 | keep |
| GAP-SA-OPS-SEARCH | Contains Code · Title · Body · Recipient · Sender · Status · Type · Priority · DocumentNumber · Summary · OrgUnitName | **Giữ** — khớp PO search (mã · tiêu đề · số CV · trích yếu · đội) | keep |
| GAP-SA-OPS-DOC | `DocumentNumber` varchar(64) · `Direction` varchar(16) · `Summary` varchar(1024) · `OrgUnitCode` varchar(64) · `OrgUnitName` varchar(256) | **Giữ** scalars — **cấm** bảng OfficialDocument riêng · **cấm** JSON | keep |
| GAP-SA-OPS-DTO | Create/Update/Get map 1-1 OfficialDoc fields · Create **không** nhận `Code` | **Giữ** · IdCode `OPS-yyyyMMdd-nnnn` server-side | keep |
| GAP-SA-OPS-BFF | QueryString passthrough `BuildListPath` | **Giữ** — **cấm** BFF map/filter | keep |
| GAP-SA-OPS-SCHEMA | Seed `ops-inbox` Fields: code · documentNumber · title · direction · summary · orgUnitName · sender · recipient · priority · type · status · sentAt | **Giữ kind** · TL verify List default vs Design bootstrap (STT + Người nhận + Loại + Trích yếu) — **cấm** `configHint` · **cấm** `LinListTableConfigModal` | TL/Dev verify |
| GAP-SA-OPS-LKP | Không master API P1 | **Giữ** FE constants — **cấm** invent ERP catalog · org-unit Integration **P2** | keep |
| GAP-SA-OPS-REQ | Validate Title · Body · Recipient | **Giữ** · Status required UI; Create maps draft `nhap` else `da-gui` | keep |
| GAP-SA-OPS-XCO | GetById claim `allowed_company_ids` | **Giữ** xco_get_only | keep |

## Lookup API (SA lock)

| catalogKind | Source P1 | API P1 | P2 |
|-------------|-----------|--------|-----|
| ops-status | FE `lookups.ts` — `moi` · `dang-xu-ly` · `da-gui` · `nhap` | **không** | — |
| ops-priority | FE — `thap` · `trung-binh` · `cao` · `khan` | **không** | — |
| ops-type | FE — `tuan-tra` · `su-co` · `sua-chua` · `khac` | **không** | — |
| ops-channel | FE — `inbox` · `push` · `email` | **không** | — |
| recipient | FE master đội | **không** | — |
| cv-direction | FE `DIRECTION_LOOKUP` — `di` / `den` | **không** | — |
| org-unit | FE Chi cục II · persist **code + name** | **không** `GET integration/org-units/search` P1 | Type A Integration |

**Cấm** native `<select>` trên product UI. Persist `Direction` = `di`|`den` (không label). Persist `OrgUnitCode` + `OrgUnitName`.

## API-01 — List inbox

| | |
|--|--|
| Method / Path | `GET /api/v1/notification/inbox` |
| Purpose | Paged Kind B catalog |
| Permission | `notification.inbox.read` |
| Query | `search` · `status` · `priority` · `type` · `unreadOnly` · `direction` · `orgUnitCode` · `page` · `pageSize` (50/100/200/500) |
| Response | `ApiResponse<NotificationPagedResult>` `{ success, message, data }` · `data.items` + paging |
| Envelope | **không** KPI trong list DTO |

## API-02 — GetById

| | |
|--|--|
| Method / Path | `GET /api/v1/notification/inbox/{id}` |
| Purpose | Form hydrate C/E/V/Copy · XCO get_only |
| Permission | `notification.inbox.read` |
| Errors | 404 not found · 403 XCO denied |

## API-03 — Create / Send

| | |
|--|--|
| Method / Path | `POST /api/v1/notification/inbox` |
| Purpose | Create · IdCode `OPS-yyyyMMdd-nnnn` · status `da-gui` hoặc `nhap` |
| Permission | `notification.inbox.create` |
| Body | `CreateNotificationRequest` (**no Code**) + OfficialDoc scalars |
| Validation | Title · Body · Recipient required → 422 |

## API-04 — Update

| | |
|--|--|
| Method / Path | `PUT /api/v1/notification/inbox/{id}` |
| Permission | `notification.inbox.update` |
| Body | `UpdateNotificationRequest` + OfficialDoc scalars |

## API-05 — Soft delete

| | |
|--|--|
| Method / Path | `DELETE /api/v1/notification/inbox/{id}` |
| Permission | `notification.inbox.delete` |
| Effect | `IsActive=false` |

## API-06 — Mark read

| | |
|--|--|
| Method / Path | `POST /api/v1/notification/inbox/{id}/mark-read` |
| Permission | `notification.inbox.update` |
| Effect | `IsUnread=false` |

## API-07 — Mark all read

| | |
|--|--|
| Method / Path | `POST /api/v1/notification/inbox/mark-all-read` |
| Permission | `notification.inbox.update` |
| Effect | tenant active unread → read |

## API-08 — Overview KPI

| | |
|--|--|
| Method / Path | `GET /api/v1/notification/overview` |
| Permission | `notification.inbox.read` |
| Response | `NotificationOverviewDto`: `staffOnline` · `openIncidents` · `woInProgress` · `unreadCount` |
| Note | P1 stub/aggregate OK — **không** embed map |

## Entity — NotificationEntity

Table `rmms_notifications`. Flat scalars — **cấm** parent JSON.

Key columns: Code · Title · Body · Recipient · Priority · Type · Status · Channel · Sender · LinkRef · Reply · SentAt · IsUnread · IsActive · CompanyCode · CreatedAt · UpdatedAt · **DocumentNumber · Direction · Summary · OrgUnitCode · OrgUnitName**.

Indexes (existing): unique `(CompanyCode, Code)` · `(CompanyCode, SentAt)` · `(CompanyCode, Status, IsActive)` · `(CompanyCode, IsUnread, IsActive)`.

## BFF

Proxy-only `NotificationInboxBffController` + `NotificationOverviewBffController`. Forward `X-Company-Id` + `Authorization`. List path **giữ nguyên query string**. Keep health `NotificationBffController`. **Cấm** business logic BFF.

## Catalog UI schema

- Kind: `ops-inbox`
- Modal title FE: «Cấu hình hiển thị danh mục»
- Registry: Integration **not** Notification folder
- **Cấm** leftover static `const columns` / `LinCatalogDataColumn` product
- **Cấm** `configHint`

## Out of scope (P2)

- SignalR `OpsHub`
- Command center full
- Map embed (nav Patrol/Gis only)
- DispatchOrder / device track
- `RequirePermission` attributes (TODO CommonLib ≥1.4.0 — **không** block P1)

## Handoff → TL

| Field | Value |
|-------|-------|
| API ids | API-01…08 |
| Query | `direction` · `orgUnitCode` + existing |
| Perm | `notification.inbox.read\|create\|update\|delete` |
| FE route | `/ops` · form `/ops/new` · `/ops/:id` |
| Lookups | P1 FE — T-UI-LKP no master GET |
| Schema | `ops-inbox` · T-UI-LIST A–D · Zone F editor |
| Form | T-UI-FORM full-page · View=`<dl>` · T-UI-FIELD controlHint |
| BE write | **verify live** — **cấm** ERP.* · **cấm** domain mới |
| MFE | `Linm.Web.RMMS.Field` |
| Next | team-lead `task/ops.md` · roles sau = pending đến lượt |

## Version meta (REQUIRED)

| Field | Value |
|-------|-------|
| skillId | agent-sa |
| skillVersion | 2026.08.15.5 |
| schemaVersion | 1 |
| workflowVersion | 2026.08.15.5 |
| rulesVersion | 2026.08.15.8 |
| generatedAt | 2026-08-16T02:00:00.000Z |
| versionGate | recheck_new |
| version_mismatch_action | recheck_new (STATUS) |
| contentHashPriorDataAnaly | sha256:ops-delta-official-doc-20260816 |
| orchestratorSkillVersion | 2026.08.15.5 |
| orchestratorWorkflowVersion | 2026.08.15.5 |
| orchestratorSchemaVersion | qldb-workflow-skill-v1 |

<!-- Version meta: skillVersion=2026.08.15.5 · schemaVersion=1 · workflowVersion=2026.08.15.5 · rulesVersion=2026.08.15.8 · versionGate=recheck_new -->
