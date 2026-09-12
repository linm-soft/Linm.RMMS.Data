# SA — Solution — patrol-offline (mobile list · delta apply check-ins)

| Field | Value |
|-------|-------|
| feature | `patrol-offline` |
| title | [Mobile] Hàng đợi mất sóng — replay apply check-ins |
| this role | `sa` · `/agent-sa-mobile` |
| status | `confirmed` |
| solution_confirm | **approve** (`autoApprove=ON` · `task_c7ddb8a3`) |
| changeScope | `edit_page` · gap=`offline_sync_apply_checkins` |
| packKind | **`list`** (PO + Design confirm) |
| stack | `native_dual` |
| Feature Kind | **list** `#sc-patrol-offline` · local-first queue · **replay apply** · **cấm** Kind A–G web / Lin* grid |
| domain | **Patrol** (CreateCheckIn apply) + **Integration** (optional offline-batch receipt) · local queue owner · **cấm** PatrolOffline / ERP.* controller |
| BackendRoot | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.WebService` · **cấm ERP.*** |
| ios | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.iOS` |
| android | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.Android` |
| bff | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.Bff` · prefix `mobile-bff/api/v1` |
| prior · design | **confirmed** · `ui/design.md` · dual `#sc-patrol-offline` · `task_1f9f2ea2` · handoff `design-compact.md` |
| prior · po | **confirmed** · `po/requirement.md` · `task_d268d5b7` · handoff `po-compact.md` |
| prior · data_analy | **confirmed** · `_data-analy/patrol-offline-*.md` · contentHash `sha256:patrol-offline-delta-apply-checkins-20260912` · bffContentHash `sha256:patrol-offline-bff-apply-checkins-20260912` |
| autoApprove | **ON** |
| e2eQa | ON khi QA · `yarn e2e-qa-mobile` · **cấm** `yarn start:std` / `mfeStdUrl` · **cấm** e2e ở SA |
| versionGate | `rechecked` |
| taskId | `task_c7ddb8a3` |
| confirmedBy | agent autoApprove · `task_c7ddb8a3` |
| updatedAt | `2026-09-12T14:35:00.000Z` |
| thisAction | **Delta sync** · replay `checkIn` → POST check-ins · remove only 2xx · optional offline-batch receipt · **cấm** invent GET queue · **keep UI zones** |

**Cấm:** invent `GET patrol-offline/queue` · `PatrolOfflineController` · treat offline-batch as apply · clear-all / clear incident · app `:5101` trực tiếp · ERP.* · `mfeStdUrl` / `yarn start:std` · native alert · re-seed sau sync.

Standards: api-endpoint · bff-api-structure · offline-sync · sa-implement-gates · ios networking · android api-client · no-parent-json-field (local store only).

---

## Architecture (repo SSOT)

| Layer | Choice |
|-------|--------|
| BackendRoot | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.WebService` · `be_repo_confirm` |
| Domain | Patrol `CreateCheckIn` (primary apply) · Integration `OfflineBatch` (optional receipt stub) |
| API downstream | `PatrolSessionsController.CreateCheckIn` · `IntegrationEndpointsController.OfflineBatch` |
| BFF mobile | `Linm.RMMS.Mobile.Bff` · `MobileApiProxyController` catch-all → `ApiBase` |
| App | iOS `ApiClient` · Android Retrofit · base `{BffBase}/mobile-bff/api/v1` |
| Queue data | **Client-local** UserDefaults iOS · SharedPreferences/Room Android — **cấm** server queue GET |
| Persist BE | **không** bảng mới · **không** `/database-migration` · **không** `/new-endpoint` |
| Out of pack | UI redesign · incident apply (P2) · conflict UI · invent GET queue |

### Route decision

| | Choice |
|--|--------|
| Slug | `patrol-offline` → **list** · 1 màn `#sc-patrol-offline` |
| App prefix | `mobile-bff/api/v1` |
| App path (primary) | **`POST patrol/sessions/{sessionId}/check-ins`** (Bearer) · apply `PatrolCheckIns` |
| App path (optional) | `POST integration/sync/offline-batch` · `RecordCount` = synced OK · **không** apply DB |
| Downstream | `CreatePatrolCheckInRequest` · `OfflineBatchRequest` → SyncJob stub |
| Step 4b | **N/A** — endpoints live · **cấm** `/new-endpoint` |
| Rationale | DoD = replay apply · offline-batch chỉ receipt · **cấm** invent GET |

---

## SSOT / anti-duplicate

| Concern | Package / rule | Note |
|---------|----------------|------|
| BFF HTTP | `MobileApiProxyController` catch-all | **cấm** `PatrolOfflineController` local |
| BE HTTP (primary) | `PatrolSessionsController.CreateCheckIn` | live writes `PatrolCheckIns` |
| BE HTTP (receipt) | `IntegrationEndpointsController.OfflineBatch` | SyncJob stub · **không** thay apply |
| Request DTO apply | `CreatePatrolCheckInRequest` + path `sessionId` | enqueue **must** persist dual |
| Request DTO receipt | `OfflineBatchRequest`: Partner · DeviceId · BatchId · RecordCount · Note | after OK only |
| HTTP app | `PatrolRepository` / check-in client + optional `IntegrationRepository.syncOfflineBatch` | **cấm** URLSession/OkHttp trong View |
| Token | Keychain / EncryptedSharedPreferences | Bearer + company headers |
| Local store | `OfflineQueueStore` key `linm.offline.queue.v1` | JSON · **payload NEW**: sessionId + body |
| Kit | `LinmSegment` · `LinmBanner` · `LinmToast` · `LinmListRow` · `LinmTopBar` text | **unchanged UI** · `kit_missing_confirm` prior |
| Badge | `pendingCount()` local | Me row · **cấm** Home numeric badge API |

---

## BFF / API contract (delta · live 2026-09-12)

| Action | App path | BFF | Downstream | Live |
|--------|----------|-----|------------|------|
| **Replay check-in (primary)** | `POST patrol/sessions/{sessionId}/check-ins` | proxy | `CreateCheckIn` | **PASS** · apply DB |
| Sync receipt (optional) | `POST integration/sync/offline-batch` | proxy | `OfflineBatch` | PASS stub · **không** apply |
| Queue list | — | — | **local store** | **N/A** |
| Badge count | — | — | **local** | **N/A** |

### Request body — check-ins (wire)

Path: `sessionId` (Guid từ queue item).

Body fields (enqueue dual): `PlanPointLabel` · `Route` · `Lat` · `Lng` · `AccuracyM` · `DistanceToPlanM` · `MatchOk` · `Content?` · `PhotoLocalIds?` / `AttachmentIds?`

### Request body — offline-batch (optional receipt)

```json
{
  "Partner": "Mobile Lưu trữ",
  "DeviceId": "<uuid>",
  "BatchId": "<uuid>",
  "RecordCount": 2,
  "Note": "patrol-offline sync receipt"
}
```

`RecordCount` = số check-in apply **2xx** trong lượt sync.

### Replay algorithm (client · dual · DoD)

1. Read pending · filter `kind=checkIn` có `sessionId` + body đủ.
2. Online: foreach → POST check-ins · on **2xx remove** · on fail **keep**.
3. Optional: POST offline-batch với `RecordCount=okCount`.
4. `kind=incident` → **keep** (P2) · **cấm** clear-all / clear incident.
5. Toast N = okCount · EmptyChrome khi remaining=0 · **cấm** re-seed.

### Permissions

| Permission | Scope | Pack này |
|------------|-------|----------|
| `patrol.sessions.update` (hoặc live CreateCheckIn gate) | Replay apply | **reuse** |
| `integration.sync.offline-batch` | Optional receipt | **reuse** · stub OK |
| `incident.incidents.create` | Incident apply | **P2** · không gọi |

**Cấm** thêm `[RequirePermission]` mới trên Mobile.Bff · **cấm** invent permission slug.

---

## Implement gates (confirm)

| Gate | Decision | Endpoints / surfaces | Skill | Note |
|------|----------|----------------------|-------|------|
| TZ | **tz_na** | local timestamps display only | `/review-timezone-implement` | không DATE filter API |
| XCO | **xco_na** | **không** GET catalog | `/implement-view-cross-company` | current-user local queue |
| SHARE | **n/a** | **không** bảng RMMS mới | `/implement-shared-table` | queue = device store |
| Offline | **owner queue** · màn **vẫn mở** | local read · replay when online | offline-sync | fail → toast · **giữ** fail items |
| GPS | **n/a** (payload Lat/Lng đã enqueue) | — | sibling `patrol-home` |
| Camera | **n/a** | — | sibling `incident-create` |
| Push | **n/a** | — | — |
| Step 4b | **N/A** | không endpoint mới | — | reuse Patrol + Integration live |

AskQuestion (autoApprove=ON · không chờ board): `sa_tz_gate=tz_na` · `sa_xco_gate=xco_na` · `sa_shared_table=share_na` · `solution_confirm=approve` · `2026-09-12T14:35:00.000Z`.

---

## Persist gate (no-parent-json-field)

| | |
|--|--|
| Parent JSON string inventory (BE) | **none** |
| Child tables this pack (BE) | **n/a** · apply vào `PatrolCheckIns` qua live CreateCheckIn |
| Client store | `[OfflineQueueItem]` + **payload** `{ sessionId, body: CreatePatrolCheckInRequest }` |
| Migration | **không** `Schema_*` · **không** `/database-migration` |
| T-BE-API / T-BE-MIG | **n/a** |

---

## Live vs delta (audit 2026-09-12)

| Surface | Live | SA chốt P1 (delta) |
|---------|------|---------------------|
| `POST …/patrol/sessions/{id}/check-ins` | BE + BFF proxy live · writes DB | **PRIMARY** sync apply |
| `POST …/integration/sync/offline-batch` | SyncJob stub | **Optional receipt** after OK · **không** thay apply |
| Prior SA sync-only offline-batch clear | outdated DoD | **Supersede** — remove only on check-in 2xx |
| `PatrolOfflineController` / GET queue | **không** | **Cấm** tạo |
| Native `#sc-patrol-offline` UI | Design keep zones | **unchanged layout** · annotate replay only |
| Enqueue payload | thiếu sessionId+body risk | **MUST** persist dual (sibling writers) |
| Incident queue | local | **P2 keep** · cấm clear |
| Seed policy GAP-F-OFFLINE-01 | prior | **Giữ** · post-sync **cấm** re-seed |

---

## Form data analysis (REQUIRED)

| Screen / FormMode | Fields (UI) | Source type | Entity |
|-------------------|-------------|-------------|--------|
| `#sc-patrol-offline` list | nav · segment · banner · cards · hidden payload | local store + POST replay | **không** RMMS form entity mới |

### Field map (ui → dto → store)

| uiField | Label VN | dtoField | Wire | Notes |
|---------|----------|----------|------|-------|
| navBack | Trang Chủ | — | local nav | pop parent |
| title | Dữ liệu lưu trữ | — | `offline.title` | fixed |
| syncBtn | Đồng bộ | — | **replay** POST check-ins | trailing TopBar text |
| segCheckIn | Điểm tuần mất sóng | — | filter `checkIn` | index **0** |
| segIncident | Sự cố mất sóng | — | filter `incident` | index **1** · P2 keep |
| offlineBanner | Tín hiệu yếu… | — | local | ẩn khi tab empty |
| card* | title/location/content/time/status | — | `OfflineQueueItem.*` | display keep |
| **payload** | — | `sessionId` + CreatePatrolCheckInRequest | **Hidden NEW** | enqueue dual |
| receipt body | — | `RecordCount`=okCount | optional POST batch | after apply OK |

**Cấm** invent DTO queue list / server badge / GET queue.

---

## Navigation / action (this pack)

| Control | Behavior P1 | Owner slug |
|---------|-------------|------------|
| Home / Me / patrol entry | push `#sc-patrol-offline` | `reuse=patrol-offline` |
| Back «Trang Chủ» | pop parent | local |
| Đồng bộ | replay check-ins · toast N · remove 2xx only · optional receipt | this slug |
| Segment Sự cố | show keep / empty toast · **cấm** clear | this slug |

**Cấm** native alert · invent GET · re-seed after sync · start non-TL roles this turn.

---

## GAP chốt (SA)

| ID | Decision |
|----|----------|
| GAP-OFFLINE-APPLY-01 | Sync DoD = POST check-ins per pending · remove **only** 2xx · partial fail keep |
| GAP-OFFLINE-APPLY-02 | offline-batch = optional receipt · RecordCount=ok · **không** apply DB |
| GAP-OFFLINE-APPLY-03 | Enqueue **must** persist sessionId + CreatePatrolCheckInRequest dual |
| GAP-OFFLINE-APPLY-04 | Incident = P2 keep · **cấm** clear-all / clear incident |
| GAP-F-OFFLINE-01 | Seed once · post-sync `[]` + flag · **cấm** re-seed |
| Queue GET / Step 4b / T-BE-* | **Confirm cấm** / **N/A** |
| GAP-MOB-ACT-PAT-OFFLINE-01 | Patrol-home «Đồng bộ» stub OK P1 · Defer sibling |

---

## Client architecture (TL/Dev)

| Layer | iOS | Android |
|-------|-----|---------|
| Feature | `Presentation/Features/PatrolOffline/*` | `presentation/feature/patroloffline/*` |
| Store | `OfflineQueueStore` + payload fields | same |
| Repo | OfflineQueue + **Patrol check-in** + optional Integration | same |
| API | `POST patrol/sessions/{id}/check-ins` primary | same |
| State | segment · banner · toast N · pendingCount | same |
| DI | `AppContainer` | Hilt |
| Post-sync | remove 2xx only · optional receipt · **cấm** re-seed | same |

**Cấm** WebView HTML · watermark · native alert · GET queue API · treat batch as apply.

---

## Handoff → TL

| Field | Value |
|-------|-------|
| feature / packKind | `patrol-offline` / **`list`** |
| solution_confirm | **approve** |
| BFF | **primary** `POST patrol/sessions/{id}/check-ins` · optional `POST integration/sync/offline-batch` · Step 4b **N/A** |
| Tasks đề xuất | `T-IOS-PAT-OFFLINE-APPLY` · `T-AND-PAT-OFFLINE-APPLY` · enqueue payload dual · `T-BE` **n/a** |
| Kit / UI | **unchanged** · TopBar text prior · rich card keep |
| Delta Dev | Replay apply · remove-on-2xx · optional receipt · payload persist · no clear-all |
| Verify (Dev) | iOS `xcodegen` + `xcodebuild` · Android `assembleDebug` · BFF `dotnet build` · **cấm** e2e ở SA |
| Next slash | `/agent-tl-mobile` |
| Chain this turn | **không** (roleOnly=`sa`) |
| e2eQa | ON khi QA · **cấm** mfeStdUrl |

---

## Version meta (REQUIRED)

| Field | Value |
|-------|-------|
| skillId | agent-sa-mobile |
| skillVersion | 2026.08.19.29 |
| schemaVersion | 1 |
| workflowVersion | 2026.08.19.29 |
| rulesVersion | 2026.08.19.34 |
| generatedAt | 2026-09-12T14:35:00.000Z |
| versionGate | rechecked |
| contentHash | sha256:patrol-offline-delta-apply-checkins-20260912 |
| bffContentHash | sha256:patrol-offline-bff-apply-checkins-20260912 |

---
<!-- Version meta: skillId=agent-sa-mobile skillVersion=2026.08.19.29 schemaVersion=1 workflowVersion=2026.08.19.29 rulesVersion=2026.08.19.34 versionGate=rechecked -->
