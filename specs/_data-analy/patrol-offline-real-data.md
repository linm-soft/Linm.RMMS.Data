# Real-data — patrol-offline (edit_page · apply check-ins)

| | |
|---|---|
| feature | `patrol-offline` |
| title | [Mobile] Hàng đợi mất sóng |
| role | `data_analy` |
| status | **confirmed** |
| changeScope | `edit_page` |
| gap | `offline_sync_apply_checkins` |
| packKind | `list` |
| mode | `feature_context` |
| taskId | `task_82f104b5` |
| at | `2026-09-12T14:25:06.000Z` |

## Source (live code · 2026-09-12)

| Layer | Path | Finding |
|-------|------|---------|
| BE Integration | `SyncJobService.CreateOfflineBatchAsync` | Tạo `SyncJob` `Status=done` · LogJson giả «Apply N check-ins» · **không** insert `PatrolCheckIns` |
| BE Patrol | `POST api/v1/patrol/sessions/{id}/check-ins` · `CreatePatrolCheckInRequest` | Live apply DB · permission `patrol.sessions.update` |
| BFF mobile | catch-all proxy | `integration/sync/offline-batch` + `patrol/sessions/{id}/check-ins` |
| iOS sync | `OfflineQueueRepositoryImpl.syncPending` | Chỉ `syncOfflineBatch(count)` → `clearPending` |
| iOS enqueue | `SubmitPatrolCheckInUseCase.enqueue` | **Mất** `sessionId` + body GPS/match/photos |
| Android | `OfflineQueueRepositoryImpl` parity | Same gap |

## Sample — queue item **after** delta (local store)

```json
{
  "id": "8f2a1c0e-….uuid",
  "kind": "checkIn",
  "title": "Điểm tuần · Km 12+300",
  "location": "QL.1 · Km 12+300",
  "content": "Nội dung: …",
  "timestamp": "2026-09-12 09:15:00",
  "isPending": true,
  "sessionId": "a1b2c3d4-….guid",
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

## Sample — POST check-ins body (wire PascalCase app)

```json
{
  "PlanPointLabel": "Km 12+300",
  "Route": "QL.1",
  "Lat": 10.7769,
  "Lng": 106.7009,
  "AccuracyM": 8.5,
  "DistanceToPlanM": 12.0,
  "MatchOk": true,
  "Content": null,
  "PhotoLocalIds": []
}
```

## Sample — offline-batch receipt (optional · after replay OK)

```json
{
  "Partner": "Mobile Lưu trữ",
  "DeviceId": "<uuid>",
  "BatchId": "<uuid>",
  "RecordCount": 2,
  "Note": "patrol-offline replay apply"
}
```

> **DoD:** `RecordCount` = số check-in **đã** POST 2xx — không phải số clear mù.

## Permissions

| Action | Permission |
|--------|------------|
| Replay check-in | `patrol.sessions.update` |
| Incident draft sync | `incident.incidents.create` (P2 · chưa apply) |

## Anti-patterns (HARD)

- Clear local queue sau offline-batch **không** verify DB check-in
- Invent `GET …/queue` / `PatrolOfflineController`
- App gọi `:5101` trực tiếp · ERP.* / Domains/Master
- Fake 200 / demo seed sau sync

## Version meta

| Field | Value |
|-------|-------|
| skillId | agent-data-analy-mobile |
| skillVersion | 2026.08.19.29 |
| schemaVersion | 1 |
| generatedAt | 2026-09-12T14:25:06.000Z |
| contentHash | sha256:patrol-offline-real-data-apply-checkins-20260912 |
