# SA — Solution — patrol-offline (mobile list)

| Field | Value |
|-------|-------|
| feature | `patrol-offline` |
| title | [Mobile] Hàng đợi mất sóng |
| this role | `sa` · `/agent-sa-mobile` |
| status | `confirmed` |
| solution_confirm | **approve** (`autoApprove=ON` · `task_06ebc4bc`) |
| changeScope | `new_page` |
| packKind | **`list`** (PO + Design confirm) |
| stack | `native_dual` |
| Feature Kind | **list** `#sc-patrol-offline` · local-first queue · batch sync · **cấm** Kind A–G web / Lin* grid |
| domain | **Integration** (sync batch) · local queue owner · **cấm** PatrolOffline / ERP.* controller |
| BackendRoot | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.WebService` · **cấm ERP.*** |
| ios | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.iOS` |
| android | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.Android` |
| bff | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.Bff` · prefix `mobile-bff/api/v1` |
| prior · design | **confirmed** · `ui/design.md` · `ui/ux-analy.md` · dual `#sc-patrol-offline` · `task_bb1e90a6` |
| prior · po | **confirmed** · `po/requirement.md` · `task_eefc9116` |
| prior · data_analy | **confirmed** · `_data-analy/patrol-offline-*.md` · contentHash `sha256:2f2cf6976914278da294ed00a6d1eeecb50364201812335d6852c0f4e46ccaad` · bffContentHash `sha256:10d525fc95cdd32c9e4ede818499041f44341c7481d1d44e0fde6bec5738f403` |
| autoApprove | **ON** |
| e2eQa | ON khi QA · `yarn e2e-qa-mobile` · **cấm** `yarn start:std` / `mfeStdUrl` |
| versionGate | `rechecked` |
| taskId | `task_06ebc4bc` |
| confirmedBy | agent autoApprove · `task_06ebc4bc` |
| updatedAt | `2026-08-19T14:00:00.000Z` |
| thisAction | **List Dữ liệu lưu trữ** only · entry Home tile + Me row + patrol nav · **cấm** invent GET queue |

**Cấm:** invent `GET patrol-offline/queue` · `PatrolOfflineController` / `HomeController` · clone Integration · app `:5101` trực tiếp · gộp `#sc-patrol-home` check-in / `#sc-inc-form` · conflict UI · ERP.* · `mfeStdUrl` / `yarn start:std` · native alert · GET badge API.

Standards: api-endpoint · bff-api-structure · offline-sync · sa-implement-gates · ios networking · android api-client · no-parent-json-field (local store only).

---

## Architecture (repo SSOT)

| Layer | Choice |
|-------|--------|
| BackendRoot | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.WebService` · `be_repo_confirm` |
| Domain | Integration `SyncJob` offline-batch · **không** RMMS `patrol-offline` controller |
| API downstream | `IntegrationEndpointsController.OfflineBatch` → `POST api/v1/integration/sync/offline-batch` |
| BFF mobile | `Linm.RMMS.Mobile.Bff` · `MobileApiProxyController` catch-all → `ApiBase` |
| App | iOS `ApiClient` · Android Retrofit · base `{BffBase}/mobile-bff/api/v1` |
| Queue data | **Client-local** UserDefaults iOS · SharedPreferences/Room Android — **cấm** server queue GET |
| Persist BE | **không** bảng mới · **không** `/database-migration` · **không** `/new-endpoint` |
| Out of pack | check-in live · incident form · xóa từng bản ghi · conflict UI · sibling enqueue writers |

### Route decision

| | Choice |
|--|--------|
| Slug | `patrol-offline` → **list** · 1 màn `#sc-patrol-offline` |
| App prefix | `mobile-bff/api/v1` |
| App path (sync) | **chỉ** `POST integration/sync/offline-batch` (Bearer) |
| Downstream | `IntegrationEndpointsController` · DTO `OfflineBatchRequest` → `SyncJobDto` |
| Step 4b | **N/A** — endpoint live · không BE align delta · **cấm** `/new-endpoint` |
| Rationale | Queue = local-first · sync = mock Integration job đủ P1 · **cấm** invent GET |

---

## SSOT / anti-duplicate

| Concern | Package / rule | Note |
|---------|----------------|------|
| BFF HTTP | `MobileApiProxyController` catch-all | **cấm** `PatrolOfflineController` local |
| BE HTTP | `IntegrationEndpointsController.OfflineBatch` | live `CreateOfflineBatchAsync` mock SyncJob |
| Request DTO | `OfflineBatchRequest`: `Partner` · `DeviceId` · `BatchId` · `RecordCount` · `Note` | app PascalCase wire |
| Response DTO | `ApiResponse<SyncJobDto>` | app decode `SyncJobDto.id` optional |
| HTTP app | `IntegrationRepository.syncOfflineBatch` iOS/Android | **cấm** URLSession/OkHttp trong View |
| Token | Keychain / EncryptedSharedPreferences | Bearer + company headers interceptor |
| Local store | `OfflineQueueStore` key `linm.offline.queue.v1` | JSON array · **cấm** parent JSON BE |
| Kit | `LinmSegment` · `LinmBanner` · `LinmToast` · `LinmListRow` · `LinmTopBar` text slots | Design `kit_missing_confirm` **implement_kit** |
| Badge | `pendingCount()` local | Me row only · **cấm** Home tile numeric badge |

---

## BFF / API contract (live audit 2026-08-19)

| Action | App path | BFF | Downstream | Live |
|--------|----------|-----|------------|------|
| Sync batch | `POST integration/sync/offline-batch` | proxy | `POST api/v1/integration/sync/offline-batch` | **PASS** |
| Queue list | — | — | **local store** | **N/A** |
| Badge count | — | — | **local** | **N/A** |

### Request body (wire)

```json
{
  "Partner": "Mobile Lưu trữ",
  "DeviceId": "<uuid>",
  "BatchId": "<uuid>",
  "RecordCount": 2,
  "Note": "patrol-offline sync"
}
```

### Response (BE)

`ApiResponse<SyncJobDto>` · `SyncType = "offline-batch"` · mock job `Status = done` · **P1 stub OK**.

### Permissions

| Permission | Scope | Pack này |
|------------|-------|----------|
| `integration.sync.offline-batch` | Integration signed POST | **reuse** · BE `[RequirePermission]` TODO debt P1 |
| `patrol.sessions.update` | Writer sibling check-in | **không** gọi turn này |
| `incident.incidents.create` | Writer sibling incident | **không** gọi turn này |

**Cấm** thêm `[RequirePermission]` mới trên Mobile.Bff · **cấm** invent permission slug mới.

---

## Implement gates (confirm)

| Gate | Decision | Endpoints / surfaces | Skill | Note |
|------|----------|----------------------|-------|------|
| TZ | **tz_na** | local timestamps display only | `/review-timezone-implement` | không DATE filter API |
| XCO | **xco_na** | **không** GET catalog | `/implement-view-cross-company` | current-user local queue |
| SHARE | **n/a** | **không** bảng RMMS mới | `/implement-shared-table` | queue = device store |
| Offline | **owner queue** · màn **vẫn mở** | local read · POST sync when online | offline-sync | fail → toast · **giữ** queue · **cấm** block |
| GPS | **n/a** | — | — | sibling `patrol-home` |
| Camera | **n/a** | — | — | sibling `incident-create` |
| Push | **n/a** | — | — | — |
| Step 4b | **N/A** | không endpoint mới | — | reuse Integration live |

AskQuestion (autoApprove=ON · không chờ board): `sa_tz_gate=tz_na` · `sa_xco_gate=xco_na` · `sa_shared_table=share_na` · `solution_confirm=approve` · `2026-08-19T14:00:00.000Z`.

---

## Persist gate (no-parent-json-field)

| | |
|--|--|
| Parent JSON string inventory (BE) | **none** |
| Child tables this pack (BE) | **n/a** |
| Client store | `[OfflineQueueItem]` JSON UserDefaults / SharedPreferences |
| Migration | **không** `Schema_*` · **không** `/database-migration` |
| T-BE-API / T-BE-MIG | **n/a** |

---

## Live vs delta (audit 2026-08-19)

| Surface | Live | SA chốt P1 |
|---------|------|------------|
| `POST …/integration/sync/offline-batch` | BE + BFF proxy live | **Giữ** · app path relative `integration/sync/offline-batch` |
| `PatrolOfflineController` | **không** | **Cấm** tạo |
| `GET patrol-offline/queue` | **không** | **Cấm** invent |
| Native `#sc-patrol-offline` | scaffold shipped prior `task_6e4103ce` | **DELTA UI** TopBar text · dual copy · seed policy GAP-F-OFFLINE-01 |
| `OfflineQueueRepositoryImpl` | có `seedDemoIfEmpty` + `demoItems` fallback | **DELTA** first-run seed once · post-sync **cấm** re-seed |
| `LinmTopBar` | icon-only back | **implement_kit** text «Trang Chủ» + «Đồng bộ» |
| Entry Home / Me / patrol | wired | **Giữ** · cùng slug `patrol-offline` |

---

## Form data analysis (REQUIRED)

| Screen / FormMode | Fields (UI) | Source type | Entity |
|-------------------|-------------|-------------|--------|
| `#sc-patrol-offline` list | nav · segment · banner · cards | local store + POST sync | **không** RMMS form entity |

### Field map (ui → dto → store)

| uiField | Label VN | dtoField | Wire | Notes |
|---------|----------|----------|------|-------|
| navBack | Trang Chủ | — | local nav | pop parent |
| title | Dữ liệu lưu trữ | — | `offline.title` | fixed |
| syncBtn | Đồng bộ | — | POST batch | trailing TopBar text |
| segCheckIn | Điểm tuần mất sóng | — | filter `checkIn` | index **0** |
| segIncident | Sự cố mất sóng | — | filter `incident` | index **1** |
| offlineBanner | Tín hiệu yếu… | — | local | ẩn khi tab empty |
| cardTitle | Điểm tuần · Km … | — | `OfflineQueueItem.title` | local |
| cardLocation | QL.1 · … | — | `OfflineQueueItem.location` | + mappin |
| cardContent | Nội dung: … | — | `OfflineQueueItem.content` | card 1 only |
| cardTime | timestamp | — | `OfflineQueueItem.createdAt` | local |
| cardStatus | Chờ gửi | — | `OfflineQueueItem.status` | pill ngắn |
| sync body | — | `RecordCount` | POST | count pending tab/all |
| sync body | — | `Partner`/`DeviceId`/`BatchId`/`Note` | POST | optional metadata |

**Cấm** invent DTO queue list / server badge.

---

## Navigation / action (this pack)

| Control | Behavior P1 | Owner slug |
|---------|-------------|------------|
| Home tile Lưu trữ | push `#sc-patrol-offline` | `reuse=patrol-offline` |
| Me row Hàng đợi mất sóng | push cùng màn | `reuse=patrol-offline` |
| Patrol-home nav Đồng bộ | push cùng route | `reuse=patrol-offline` |
| Back «Trang Chủ» | pop parent | local |
| Đồng bộ | POST offline-batch · toast N · clear pending | this slug |
| Segment Sự cố empty | toast `offline.toast.incidentEmpty` | this slug |

**Cấm** nav stub giả sibling form · **cấm** start `pending_confirm` (`GAP-MOB-ACT-06`) · **cấm** `UIAlert` / `AlertDialog`.

---

## GAP chốt (SA)

| ID | Decision |
|----|----------|
| GAP-F-OFFLINE-01 | First launch key chưa có → seed SSOT 2 card **một lần**. Sync OK → persist `[]` + flag initialized. **Cấm** `seedDemoIfEmpty` / `demoItems` fallback sau sync. |
| GAP-F-OFFLINE-02 | Android HTML aligned dual 2 card · back text · sync text — native = SSOT |
| GAP-F-OFFLINE-03 | Production pill **Chờ gửi** ngắn · helper = banner |
| GAP-F-OFFLINE-04 | Incident tab empty → toast incidentEmpty · **cấm** fake count |
| GAP-MOB-ACT-01/02 | **none** — 1 list · không child form |
| GAP-MOB-ACT-05 | Kit reuse map · TopBar **implement_kit** text |
| GAP-MOB-ACT-06 | Sibling writers giữ `pending_confirm` |
| GAP-MOB-ACT-07 | **cấm** enqueue submit turn này |
| Queue GET | **Confirm cấm** · SA không invent controller |
| Step 4b / T-BE-* | **N/A** |

---

## Client architecture (TL/Dev)

| Layer | iOS | Android |
|-------|-----|---------|
| Feature | `Presentation/Features/PatrolOffline/*` | `presentation/feature/patroloffline/*` |
| Store | `OfflineQueueStore` UserDefaults | SharedPreferences / Room equivalent |
| Repo | `OfflineQueueRepositoryImpl` + `IntegrationRepositoryImpl` | same pattern |
| API | `IntegrationRepository.syncOfflineBatch` | `ApiService.syncOfflineBatch` |
| State | segment filter · banner · toast · pendingCount | same |
| DI | `AppContainer` | Hilt |
| Seed | `initialized` flag + one-time SSOT seed | same |
| Post-sync | clear pending · **cấm** re-seed demo | same |

**Cấm** WebView HTML · watermark · native alert · GET queue API.

---

## Handoff → TL

| Field | Value |
|-------|-------|
| feature / packKind | `patrol-offline` / **`list`** |
| solution_confirm | **approve** |
| BFF | **chỉ** `POST integration/sync/offline-batch` · Step 4b **N/A** |
| Tasks đề xuất | `T-IOS-PAT-OFFLINE` · `T-AND-PAT-OFFLINE` · `T-KIT-TOPBAR-TEXT` · `T-BE` **n/a** |
| Kit | TopBar text slots **implement_kit** · rich card verify `LinmListRow` |
| Delta Dev | GAP-F-OFFLINE-01 seed policy · dual copy parity · Me badge local |
| Verify (Dev) | iOS `xcodegen` + `xcodebuild` dest **iPhone 17 Pro** · Android `assembleDebug` · BFF `dotnet build` |
| Next slash | `/agent-tl-mobile` |
| Chain this turn | **không** (roleOnly=`sa`) |
| e2eQa | ON khi QA · `yarn e2e-qa-mobile` · **cấm** mfeStdUrl |

---

## Version meta (REQUIRED)

| Field | Value |
|-------|-------|
| skillId | agent-sa-mobile |
| skillVersion | 2026.08.19.23 |
| schemaVersion | 1 |
| workflowVersion | 2026.08.19.29 |
| rulesVersion | 2026.08.19.34 |
| generatedAt | 2026-08-19T14:00:00.000Z |
| versionGate | rechecked |
| contentHash | sha256:2f2cf6976914278da294ed00a6d1eeecb50364201812335d6852c0f4e46ccaad |
| bffContentHash | sha256:10d525fc95cdd32c9e4ede818499041f44341c7481d1d44e0fde6bec5738f403 |

---
<!-- Version meta: skillId=agent-sa-mobile skillVersion=2026.08.19.23 schemaVersion=1 workflowVersion=2026.08.19.29 rulesVersion=2026.08.19.34 versionGate=rechecked -->
