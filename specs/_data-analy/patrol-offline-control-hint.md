# Control hint — patrol-offline (mobile list · Hàng đợi mất sóng)

| | |
|---|---|
| feature | `patrol-offline` |
| kind | `list` |
| packKind | `list` (offline queue · local-first + **replay check-in**) |
| changeScope | `edit_page` |
| gap | `offline_sync_apply_checkins` (code review 2026-09-12) |
| mode | `feature_context` |
| demo | `specs/patrol-offline/ui/prototype/{ios,android}/index.html` `#sc-patrol-offline` · `DES-MOB-PAT-OFFLINE` |
| ctx | `docs/context/features/patrol-offline.md` |
| agent | `agent-data-analy-mobile` |
| at | `2026-09-12T14:25:06.000Z` |
| thisAction | **List Dữ liệu lưu trữ** · sync = **replay** hàng đợi → POST check-ins thật · **cấm** invent GET queue |
| taskId | `task_82f104b5` |
| priorArtifacts | PO/Design/SA/TL **keep** · § Delta only |

## § Delta Current vs New

| Aspect | Current (shipped) | New (DoD) |
|--------|-------------------|-----------|
| changeScope | list + cleanup_mock | `edit_page` · gap apply check-ins |
| Tap **Đồng bộ** | `POST integration/sync/offline-batch` (chỉ phiếu SyncJob `Status=done`) → `clearPending` | **Replay** từng `kind=checkIn` → `POST patrol/sessions/{sessionId}/check-ins` · xóa item **chỉ khi** 2xx · **không mất** bản ghi fail |
| OfflineBatch | mock Apply N trong LogJson · **không** ghi `PatrolCheckIns` | Optional receipt **sau** replay OK (RecordCount = synced) · **không** thay thế apply |
| Queue item payload | display-only: title · location · content · timestamp | **+** `sessionId` · wire `CreatePatrolCheckInRequest` (planPointLabel · route · lat · lng · accuracyM · distanceToPlanM · matchOk · content · photoLocalIds) |
| Enqueue (check-in) | `SubmitPatrolCheckInUseCase` mất sessionId/body | Persist full payload dual iOS/Android |
| Incident rows | filter UI only · sync cùng clear | P2 keep pending · **cấm** clear khi chưa replay incident API |
| UI zones | unchanged `#sc-patrol-offline` | **no** layout redesign · toast synced count = **số apply OK** |
| Step 4b | N/A offline-batch | **N/A** — reuse live `POST …/check-ins` · **cấm** `/new-endpoint` |
| Domain | Integration only | Integration (receipt) + **Patrol** (apply) · **cấm ERP.*** |

## UI control — `#sc-patrol-offline` (unchanged zones)

| Field / zone | controlHint | Kit (iOS + Android) | Native |
|--------------|-------------|---------------------|--------|
| navBack | Back «Trang Chủ» | `LinmTopBar` text | pop home/me |
| title | Dữ liệu lưu trữ | TopBar title | fixed |
| syncBtn | Text action | TopBar trailing | **replay** pending |
| segCheckIn | Segment tab | `LinmSegment` | filter `checkIn` |
| segIncident | Segment tab | `LinmSegment` | filter `incident` |
| offlineBanner | Banner warn | `LinmBanner` | weak when pending>0 |
| cardTitle | Text display | rich card | queue title |
| cardLocation | Text display | rich card | route · km |
| cardStatus | Badge warn | pill | «Chờ gửi» |
| empty | EmptyChrome | live | pendingCount=0 |

## Fields (list + payload for replay)

| Field | VN | controlHint | Required | Source | Notes |
|-------|----|-------------|----------|--------|-------|
| items[].title | Điểm tuần · … | Text | * | local | display |
| items[].location | QL… | Text | * | local | display |
| items[].status | Chờ gửi | Badge | * | pending | |
| items[].sessionId | — | Hidden | * checkIn | local | **NEW** replay key |
| items[].planPointLabel | — | Hidden | * checkIn | local | body |
| items[].route | — | Hidden | * checkIn | local | body |
| items[].lat / lng | — | Hidden | * checkIn | local | body |
| items[].accuracyM | — | Hidden | * checkIn | local | body |
| items[].distanceToPlanM | — | Hidden | * checkIn | local | body |
| items[].matchOk | — | Hidden | * checkIn | local | body |
| items[].content | — | Hidden | | local | body |
| items[].photoLocalIds | — | Hidden | | local | attachment guids |

## Tech factors

| Factor | List `patrol-offline` | Note |
|--------|----------------------|------|
| GPS | no (list) | payload đã có lat/lng từ enqueue |
| camera | no (list) | photoLocalIds từ sibling check-in |
| offline | **yes** owner | local queue · replay when online |
| map | no | — |
| token | Keychain / Encrypted | Bearer BFF |

## Hành vi (delta sync)

| Case | UI / logic |
|------|------------|
| Appear | Load local pending · EmptyChrome khi 0 |
| Tap Đồng bộ · online | For each pending `checkIn`: POST check-ins · remove OK · keep fail · toast N OK |
| Tap Đồng bộ · offline | Toast fail / giữ queue · **cấm** clear |
| Partial fail | Giữ item lỗi · **cấm** clear-all |
| Segment Sự cố | Filter only · sync **không** xóa incident (P2) |
| Back | pop |

## Version meta

| Field | Value |
|-------|-------|
| skillId | agent-data-analy-mobile |
| skillVersion | 2026.08.19.29 |
| schemaVersion | 1 |
| workflowVersion | 2026.08.19.29 |
| rulesVersion | 2026.08.19.34 |
| generatedAt | 2026-09-12T14:25:06.000Z |
| contentHash | sha256:patrol-offline-delta-apply-checkins-20260912 |
| ctxHash | sha256:4e2a6482862c0ca0c5ffc3d2a0434f0ffb74c9221156d5260bdb0383b1bde757 |
| demoHash | sha256:625ca354f552336d0c1a8f4e640ee5b0e8cb7b1377290dfed34629daab878673 |
