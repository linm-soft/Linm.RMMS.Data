# Plan — Dedup ISAPI camera events by SourceUuid

> **Feature:** `camera-connect` · **Date:** 2026-09-10  
> **Trigger:** panel III. Events ISAPI showed identical rows (same second, plate, type, direction).  
> **Log:** `log/rmms-api-logs.json` · host `14.239.20.231`

## What the log showed

Camera POSTs the same Hikvision event more than once to `POST /api/v1/camera-events/ingest`. Each request created a new `EventCode`. Parser already read ISAPI `UUID` into canonical JSON; the row did not store it.

Typical pattern: same `uuid` posted 2–4 times within a few hundred ms. Sometimes AID (no plate) then ANPR (with plate) share one `uuid`. Events without UUID (`illaccess`) need a second-level fingerprint.

Railway log drain also copies each log line. That is not the UI duplicate. The UI list is DB rows.

## Rule

| Incoming | Action |
|----------|--------|
| `SourceUuid` already stored for this company + host | Do not insert. Return the existing row (HTTP 200). If the new payload is richer (plate / type / ANPR after AID), update that row. |
| No UUID | Collapse rows with the same host, `RawKind`, and `At` in the same UTC second. |
| Unique race | Unique index on `(CompanyCode, CameraHost, SourceUuid)` where `SourceUuid` is not null. On conflict, reload and merge. |

Keep the first `EventCode`. Do not hide duplicates only on the MFE.

## Tracking

- Column `rmms_camera_events.SourceUuid` (max 64, nullable).
- Logs: `sourceUuid=` on payload, accepted, and ingest (`dedup=insert|skip|merge`).

## Ops (optional)

Một URL **ISAPI Listening**. Tắt **Enable Multi-Way Upload** (Capture → Advanced → System Service) nếu chỉ đẩy RMMS. Tick **Arm Upload** không nhân đôi ingest trừ khi cùng Host URL. ANPR + AID = Capture Type Pedestrian — khác listener HTTP+ISAPI. Chi tiết lab [`../../context/31-CAMERA-TCM403-LAB-RADAR.md`](../../context/31-CAMERA-TCM403-LAB-RADAR.md).

API có thể gộp theo UUID (plan này); tắt Multi-Way giảm POST trùng trước khi dedup.
