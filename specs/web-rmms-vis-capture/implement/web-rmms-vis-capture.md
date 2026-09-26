# Implement — web-rmms-vis-capture

> Status: **done** · writtenAt `2026-09-25T21:42:44.973Z` · task `task_781a1036`  
> skillVersion: `2026.09.05.03` · packKind: `list` · autoApprove: ON  
> mfeStdUrl: `http://localhost:9301/web-rmms-vis-capture`

| | |
|--|--|
| Feature | `web-rmms-vis-capture` |
| Title | Nhận diện sự cố |
| Role | `dev` · `/agent-dev` |
| changeScope | `new_page` |
| mfe | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Mobile` |
| mfeStdRoute | `/web-rmms-vis-capture` |
| nativeAlias | `/incident/vis` |
| be | Mobile.Bff `:5202` `mobile-bff/api/v1` · **Step 4b N/A** · reuse AiVision+Incident(+Patrol) |
| DES-GRID | N/A phone |
| build | MFE `yarn build` **PASS** · BE `dotnet build` RMMS.Service.Api **PASS** |

## Done (T-*)

| id | Result |
|----|--------|
| T-01 | Route + layout VIS · phone ≤430 · alias `/incident/vis` · mfe.routes · devRoutes · TITLE-01 |
| T-02 | PhotoRow uploads init/PUT/complete · GPS Acc≤30 · deny/poor modal block · rowLoc/rowAcc |
| T-03 | Detect → POST `/ai-vision/detect` Engine=P1 · ImageFileId|Url · Acc≤30 · `?error=1` toast |
| T-04 | Result rowClass/rowSev + Badge · optional GET detections/{id} · **cấm** fake class |
| T-05 | Attach → POST incidents DetectionId+HasGps · **no Lat** · Skip=dismiss · leave dirty discard |
| T-06 | Session optional · empty toast GPS-only · useFormOptions · DUAL-01 section+Skip · INC-L banner → VIS |
| T-BE | **N/A** — APIs Live · DOMAIN-MAP row · **cấm** invent VisCaptureController |

## Files (MFE)

- `src/pages/WebRmmsVisCapture/*` — layout · VisCapturePage · paths · lookupStatic · styles · aliases
- `src/services/visCapture/endpoint.ts` — thin wrap camPatrol + fieldReflect uploads
- `src/services/camPatrol/types.ts` — `requestedAt?` on CreateIncidentRequest
- `src/pages/WebRmmsIncident/paths.ts` · lookupStatic · IncidentListPage — peerVis → VIS
- `src/index.tsx` · `src/dev/devRoutes.ts` · `mfe.routes.json`

## APIs (Mobile.Bff)

- `POST ai-vision/uploads/init` · `PUT …/object` · `POST …/complete` → mediaId/imageUrl
- `POST ai-vision/detect` · DetectAiVisionRequest ImageFileId|Url·Lat*·Lng*·AccuracyM*·Engine=P1
- `GET ai-vision/detections/{id}` (optional reload)
- `GET patrol/sessions` (optional stamp · empty→toast · **cấm** itemsOrDemo)
- `POST incident/incidents` · CreateIncidentRequest DetectionId·HasGps·Title*·RouteName*·IncidentType*·Status·RequestedAt · **no Lat**

## Gates

- List/grid Kind B: **N/A** phone (DES-GRID)
- Form: Mobile full ≤430 · PhotoRow + section «Ảnh hiện trường» + Skip · LeaveConfirmModal · cấm ERP.* · cấm invent VisCapture path · cấm on-device
- Build HARD: **PASS** (MFE + BE)
- QA modes ready: `?gps=deny` · `?acc=45` · `?nophoto=1` · `?nosession=1` · `?error=1`

## Debt / notes

- Session empty = GPS-only continue (UNCLEAR-SESS toast) — không block form
- Capture = `<input capture=environment>` → uploads (không getUserMedia stream)
- E2E: queued `/agent-qa*` — **cấm** e2e ở Dev

## nextSlash

`/agent-qa` · roleOnly stop (GAP-PKT-ROLE-01)
