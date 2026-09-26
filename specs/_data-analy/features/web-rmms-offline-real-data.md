# Data-analy — real-data bind — web-rmms-offline

| Field | Value |
|-------|-------|
| feature | `web-rmms-offline` |
| title | Hàng đợi offline |
| packKind | `list` |
| changeScope | `new_page` |
| status | `done` |
| taskId | `task_60b39e71` |
| prefix API | `api/v1/patrol` · `api/v1/integration` |
| prefix BFF web (cite) | `web-bff/api/v1/…` · **cấm MFE gọi** |
| prefix BFF mobile (HARD) | `mobile-bff/api/v1` · `http://localhost:5202/mobile-bff/api/v1` |
| beRepo | `D:/AI-QLBD/Linm.RMMS.WebService` · **cấm ERP.*** |
| bffRepo | `Linm.RMMS.Mobile.Bff` · **cấm** thêm Route mobile-bff lên web-bff |
| uiRepo | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Mobile` |
| mfeStdUrl | `http://localhost:9301/web-rmms-offline` |
| domain | **Patrol** + **Integration** (+ Incident P2 cite) |
| contentHash | `sha256:01ede8e7ff03f06a19e291b345d60faa95a7af42a43bae00efb799458a643cd1` |
| skillVersion | `2026.09.05.03` |
| schemaVersion | `2` |
| workflowVersion | `2026.09.19.02` |
| rulesVersion | `2026.09.25.2` |
| analyzedAt | `2026-09-25T17:45:00.000Z` |
| demo | **N/A** · **cấm** demo-json / in-app mock SSOT |

## § Scope

| In | Out |
|----|-----|
| OFF-00 list local · replay check-in · optional offline-batch receipt · segment incident filter | invent GET queue · Me tabs · journal/kết ca/tồn tại/tần suất · iOS/Android edits · ERP.* |
| API **Live** `POST …/check-ins` · `POST integration/sync/offline-batch` | API **Mới** OfflineQueueController |

## §A — Nguồn

| sourceKind | sourceCite | empty | error |
|------------|------------|-------|-------|
| `context` | `docs/context/features/web-rmms-offline.md` | — | — |
| `plan` | `docs/plan/web-rmms-mobile/SCREENS.md` · `/offline` | empty list | — |
| `peer` | `docs/context/features/patrol-offline.md` · `specs/_data-analy/patrol-offline-*.md` | — | native DoD replay |
| `ui` | `specs/patrol-offline/ui/prototype/android/index.html` `#sc-patrol-offline` | — | 1-1 zones |
| `api` | `PatrolSessionsController` · `POST …/sessions/{id}/check-ins` | — | toast · **cấm** `window.alert` |
| `api` | Integration `POST …/sync/offline-batch` · SyncJob receipt | — | optional after OK |
| `bff` | `Linm.RMMS.Mobile.Bff` catch-all / domain routes · `mobile-bff/api/v1` | proxy 503 | retry |
| `dto` | `CreatePatrolCheckInRequest` · offline-batch body | — | validate MatchOk |
| `domain-map` | Patrol · Integration | — | **cấm ERP.*** |
| `local` | IndexedDB / local store queue | EmptyChrome | — |
| `geo` | stored lat/lng on item | — | **cấm** re-geolocate to fake |
| `demo` | — | N/A | **cấm** demo SSOT |

## §B — Bind field (HARD)

| uiField | Label (key) | controlHint | catalogKind | GET | write field | sameMfe | sameMobile |
|---------|-------------|-------------|-------------|-----|-------------|---------|------------|
| queue.list | offline.items | List local | — | **local only** · **cấm** GET queue | — | n/a (new) | peer patrol-offline |
| title | offline.card.title | Text | — | local | display | gap | peer |
| location | offline.card.location | Text | — | local | display | gap | peer |
| status | offline.card.status | Badge | LOOKUP_STATIC | local pending | display | gap | peer |
| kind | offline.seg.* | Segment | LOOKUP_STATIC | local | filter | gap | peer |
| sessionId | — | Hidden | — | local | path `{sessionId}` | gap | peer |
| planPointLabel | — | Hidden | — | local | `PlanPointLabel` | gap | peer |
| route | — | Hidden | — | local | `Route` | gap | peer |
| lat | — | Hidden | geo-stored | local | `Lat` | gap | peer |
| lng | — | Hidden | geo-stored | local | `Lng` | gap | peer |
| accuracyM | — | Hidden | — | local | `AccuracyM` | gap | peer |
| distanceToPlanM | — | Hidden | — | local | `DistanceToPlanM` | gap | peer |
| matchOk | — | Hidden | — | local | `MatchOk` | gap | peer |
| content | — | Hidden | — | local | `Content` | gap | peer |
| photoLocalIds | — | Hidden | files | local | `PhotoLocalIds` / attachment ids | gap | peer |
| sync.replay | offline.action.sync | Button | — | — | `POST mobile-bff/api/v1/patrol/sessions/{sessionId}/check-ins` | gap | peer |
| sync.receipt | offline.action.receipt | (auto) | — | — | `POST mobile-bff/api/v1/integration/sync/offline-batch` | gap | peer |
| incident.rows | offline.seg.incident | List filter | — | local | P1 **no** POST · P2 `POST …/incident/incidents` | gap | peer |

**Create check-in Live body** (`CreatePatrolCheckInRequest`): `PlanPointLabel` · `Route` · `Lat` · `Lng` · `AccuracyM` · `DistanceToPlanM` · `MatchOk` · `Content` · `PhotoLocalIds`/`AttachmentIds`.

**Offline-batch receipt** (optional · after replay OK): `Partner` · `DeviceId` · `BatchId` · `RecordCount` (= số 2xx) · `Note`.

**Cấm** invent queue API · **cấm** ERP.* · **cấm** fake GPS · **cấm** clear local trước 2xx · **cấm** MFE gọi web-bff.

## §C — Catalog

| catalogKind | search/list API | seed/import cite | Cấm |
|-------------|-----------------|------------------|------|
| LOOKUP_STATIC | FE `useFormOptions` / `offline.*` keys | `docs/mobile-strings.json` | hardcode label VN trên form |
| files | cite FileService (ids đã enqueue) | peer check-in | re-upload on sync unless missing |
| queue-local | IndexedDB / local store | peer Android UserDefaults shape | invent server queue |

## §D — Map / vẽ

| Mục | Ghi |
|-----|-----|
| map | **none** trên OFF-00 |
| GPS | replay stored point only |

## §E — Progress / vòng đời

| stateField | Nguồn | Ai đổi | API | UI |
|------------|-------|--------|-----|-----|
| isPending | local | sync success | remove on 2xx | badge / empty |
| OfflineQueued | session entity (peer) | enqueue / sync | create flags | Field hub badge (peer A) |
| SyncJob | Integration | receipt after OK | offline-batch | toast count |

`progress: offline queue lifecycle` (enqueue peer → list → replay → clear OK).

## §F — Handoff

| Role | Packet |
|------|--------|
| PO | DoD «list = local · sync = Live apply» · UI 1-1 Android · no Me |
| Design | control-map khớp §B · phone 430 · DES-MOB-PAT-OFFLINE zones |
| SA | giữ path §B · Mobile.Bff only · **cấm** invent queue GET |
| Dev web mobile | `Linm.Web.RMMS.Mobile` · `VITE_MOBILE_API_URL` |
| QA | empty / offline sync fail / partial fail keep / no clear-all |

## Gaps (cite)

| id | Note |
|----|------|
| GAP-DA-OFF-CTX-01 | CTX feature thiếu lúc start → đã tạo `web-rmms-offline.md` từ SCREENS + peer patrol-offline |
| GAP-DA-OFF-INC-01 | Incident replay P2 · P1 filter-only · **cấm** clear incident khi sync check-in |
| GAP-DA-OFF-STORE-01 | Web local store key/schema — Dev align peer payload fields |
| GAP-DA-OFF-BFF-01 | **HARD** mobile-bff chỉ `Linm.RMMS.Mobile.Bff` · **cấm** Route trên web-bff |

## Sample — queue item (local)

```json
{
  "id": "8f2a1c0e-uuid",
  "kind": "checkIn",
  "title": "Điểm tuần · Km 12+300",
  "location": "QL.1 · Km 12+300",
  "content": "Nội dung: …",
  "timestamp": "2026-09-25 09:15:00",
  "isPending": true,
  "sessionId": "a1b2c3d4-guid",
  "planPointLabel": "Km 12+300",
  "route": "QL.1",
  "lat": 10.7769,
  "lng": 106.7009,
  "accuracyM": 8.5,
  "distanceToPlanM": 12.0,
  "matchOk": true,
  "photoLocalIds": []
}
```

## Anti-patterns (HARD)

- Clear local sau offline-batch **không** verify check-in 2xx
- Invent `GET …/queue` / OfflineQueueController
- MFE gọi `:web-bff` / ERP.* / Domains/Master
- Re-geolocate để bịa lại lat/lng khi sync
- Sửa iOS/Android trong task này

## Version meta

`skillVersion=2026.09.05.03` · `schemaVersion=2` · `contentHash=sha256:01ede8e7ff03f06a19e291b345d60faa95a7af42a43bae00efb799458a643cd1` · `rulesVersion=2026.09.25.2` · `analyzedAt=2026-09-25T17:45:00.000Z`
