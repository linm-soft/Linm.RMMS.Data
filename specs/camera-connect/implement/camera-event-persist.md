# Implement — camera-event persist (P2 · Host notify → DB)

| Field | Value |
|-------|-------|
| feature | `camera-connect` |
| task | `T-BE-EVENT-01` |
| taskId | `task_cam_event_persist_20260812` |
| status | `done` |
| changeScope | `edit_page` |
| mode | `enhance` |
| updatedAt | 2026-08-12T16:10:00.000Z |
| versionGate | ok |

## Done

| Layer | What |
|-------|------|
| Entity | `CameraEventEntity` → table `rmms_camera_events` |
| DbSet / Fluent | `AppDbContext.CameraEvents` · indexes CompanyCode+At · Host+At · EventCode unique |
| Migration | `20260812160439_Schema_RmmsCameraEvents` **+.Designer.cs** (CLI) |
| Service | `IngestIsapiAsync` → `SaveChanges` · resolve `CameraDeviceId` by Host · `ListEventsAsync` from DB |
| Lifetime | `ICameraConnectService` **Scoped** (was Singleton in-memory) |
| API | `POST …/ingest/isapi` · `GET …/events?page=&pageSize=&host=&fromDate=&toDate=` |
| DTO | `CameraEventDto.CameraDeviceId` optional |

## Build

```
dotnet build api/src/RMMS.Service.Api -c Release → PASS 0 Error(s)
dotnet ef migrations list → 20260812160439_Schema_RmmsCameraEvents
```

## Debt

| ID | Note |
|----|------|
| MIG-ORPHAN-DEVICES | Old `20260810163000_Schema_RmmsCameraDevices` no Designer — this Schema uses `CREATE TABLE IF NOT EXISTS` for devices |
| MIG-ORPHAN-AIVISION | `20260812150000_…AiVision…` not in `ef migrations list` (no Designer) — out of scope |
| RAW-MULTIPART | Binary/multipart cam payload still text parse only |
| AUTH-INGEST | Host notify still anonymous (P1.5) |

## Version meta

| Field | Value |
|-------|-------|
| skillId | agent-dev + database-migration |
| skillVersion | 2026.08.10.2 |
| workflowVersion | 2026.08.10.2 |
| generatedAt | 2026-08-12T16:10:00.000Z |
| versionGate | ok |
