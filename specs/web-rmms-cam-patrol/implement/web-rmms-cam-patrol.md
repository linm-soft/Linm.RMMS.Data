# Implement — web-rmms-cam-patrol

> Status: **done** · writtenAt `2026-09-26T01:25:00.000Z` · task `task_8af6ffa0`  
> skillVersion: `2026.09.05.03` · packKind: `list` · autoApprove: ON  
> mfeStdUrl: `http://localhost:9301/web-rmms-cam-patrol`

| | |
|--|--|
| Feature | `web-rmms-cam-patrol` |
| Title | Camera tuần |
| Role | `dev` · `/agent-dev` |
| changeScope | `new_page` |
| mfe | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Mobile` |
| mfeStdRoute | `/web-rmms-cam-patrol` |
| nativeAlias | `/field/cam` |
| be | Mobile.Bff `:5202` `mobile-bff/api/v1` · **Step 4b N/A** · reuse Patrol+AiVision+Incident |
| DES-GRID | N/A phone |
| build | MFE `yarn build` **PASS** · BE `dotnet build` RMMS.Service.Api **PASS** |

## Done (T-*)

| id | Result |
|----|--------|
| T-01 | Route + layout CP-01 · phone ≤430 · alias `/field/cam` · mfe.routes · devRoutes |
| T-02 | Finder + stamp (route/km/type từ ca Đang tuần) · GPS Acc≤30 · deny/poor modal block |
| T-03 | Frame → ImageBase64 · POST `/ai-vision/detect` Engine=P1 · result card **ẩn score** |
| T-04 | Confirm → POST `/incident/incidents` DetectionId+HasGps · skip=dismiss only · leave dirty discard |
| T-05 | `camPatrolEndpoint` · BFF parity · labels `cam.*` · toast · empty/offline |
| T-BE | **N/A** — APIs Live · DOMAIN-MAP cấm invent CamPatrolController |

## Files (MFE)

- `src/pages/WebRmmsCamPatrol/*` — layout · CamPatrolPage · paths · lookupStatic · styles · aliases
- `src/services/camPatrol/{types,endpoint}.ts`
- `src/index.tsx` · `src/dev/devRoutes.ts` · `mfe.routes.json`

## APIs (Mobile.Bff)

- `GET patrol/sessions?status=Đang tuần` (+ check-ins stamp km)
- `POST ai-vision/detect` · DetectAiVisionRequest ImageBase64*·Lat*·Lng*·AccuracyM*·Engine=P1
- `GET ai-vision/detections/{id}` (client ready, optional)
- `POST incident/incidents` · CreateIncidentRequest DetectionId·HasGps·Title*·RouteName*·IncidentType*

## Gates

- List/grid Kind B: **N/A** phone (DES-GRID)
- Form: Mobile full ≤430 · LeaveConfirmModal · cấm ERP.* · cấm invent cam-patrol path
- Build HARD: **PASS** (MFE + BE)

## Debt / notes

- Stamp km = latest check-in `planPointLabel` (session DTO không có kmText)
- Frame = `<input capture=environment>` → base64 (không getUserMedia stream)
- E2E: queued `/agent-qa*` — **cấm** e2e ở Dev

## nextSlash

`/agent-qa` · roleOnly stop (GAP-PKT-ROLE-01)
