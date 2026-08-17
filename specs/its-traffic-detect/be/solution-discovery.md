# SA — solution discovery — its-traffic-detect

| Field | Value |
|-------|-------|
| feature | `its-traffic-detect` |
| domain | **AiVision** |
| backend | `D:/AI-QLBD/Linm.RMMS.WebService` |
| apiPrefix | `api/v1/ai-vision/its` |
| bffPrefix | `web-bff/api/v1/ai-vision/its` |
| mfe | `Linm.Web.RMMS.AiVision` |
| skillVersion | `2026.08.15.15` |
| schemaVersion | `1` |
| workflowVersion | `2026.08.16.02` |
| versionGate | `ok` |
| status | `confirmed` |
| updatedAt | `2026-08-17T10:14:00.000Z` |

## DOMAIN-MAP

| slug | Domain |
|------|--------|
| `its-traffic-detect` | AiVision |

**Cấm** ERP.WebService / Domains/Master / `api/v1/rmms/*`.

## APIs

| Method | Path |
|--------|------|
| GET/POST | `/api/v1/ai-vision/its/objects` |
| GET | `/api/v1/ai-vision/its/objects/init-data` |
| GET | `/api/v1/ai-vision/its/objects/nearby` |
| GET/PUT/DELETE | `/api/v1/ai-vision/its/objects/{id}` |
| POST | `/api/v1/ai-vision/its/objects/{id}/confirm` |
| POST | `/api/v1/ai-vision/its/objects/{id}/dismiss` |
| POST | `/api/v1/ai-vision/its/detect` |

## Persistence

- Entity `AiVisionItsTrafficObjectEntity` → `rmms_ai_vision_its_traffic_objects`
- Migration `20260817160000_Schema_RmmsAiVisionItsTrafficObjects`
- Nearby Haversine **10 m** same `ObjectClass`
- Confirm → Asset (`GANTRY_SIGN` / `DELINEATOR`) + `TS-AI-*`

## Confirm

Autopilot ON → SA **confirmed** · handoff TL.
