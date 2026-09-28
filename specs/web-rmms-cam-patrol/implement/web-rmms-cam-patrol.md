# Implement — web-rmms-cam-patrol

> Status: **done** · writtenAt `2026-09-27T11:05:00.000Z` · task `task_37051747`  
> skillVersion: `2026.09.05.03` · packKind: `list` · autoApprove: ON  
> mfeStdUrl: `http://localhost:9301/camera-tuan` · contentHash: `sha256:c46ae5660ccba1b8e64ce8e5294acef77ceb4e0a75474372f2a3d3901efb5796`

| | |
|--|--|
| Feature | `web-rmms-cam-patrol` |
| Title | Camera tuần — Pattern B submit-validate |
| Role | `dev` · `/agent-dev` |
| changeScope | `edit_page` |
| mfe | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Mobile` |
| mfeStdRoute | `/camera-tuan` |
| productRoute | `/field/cam` |
| be | Mobile.Bff `:5202` `mobile-bff/api/v1` · **Step 4b N/A** · keep Live Patrol+AiVision+Incident |
| DES-GRID | N/A phone |
| deltaCite | `docs/plan/web-rmms-mobile/SUBMIT-VALIDATE.md` |
| build | MFE `yarn build` **PASS** · BE `dotnet build` Linm.RMMS.WebService.sln **PASS** |

## Done (T-*)

| id | Result |
|----|--------|
| T-01 | `btnDetect` `disabled={detecting}` only · `btnConfirm` `disabled={confirming}` only · removed `!canDetect` / GPS·offline pre-disable |
| T-02 | `#validationBanner` DES-MOB-CAM-VALIDATION · `string[]` after click · dismiss · clear on success / new frame |
| T-03 | Finder · stamp sessions · GPS Acc≤30 · `capture=environment` **keep** · báo khi bấm |
| T-04 | POST detect Engine=P1 · POST incident DetectionId+HasGps · skip dismiss · leave dirty discard · ẩn score |
| T-05 | `useFormOptions` / `cam.*` · Mobile.Bff only · CP-01 zones · empty/offline/toast |
| T-BE | **N/A** — no API/entity/migration |

## Files (MFE)

- `src/pages/WebRmmsCamPatrol/CamPatrolPage.tsx` — Pattern B CTA + validationBanner
- `src/pages/WebRmmsCamPatrol/lookupStatic.ts` — `cam.banner.dismiss`
- `src/pages/WebRmmsCamPatrol/styles.module.css` — bannerHead / list / dismiss

## APIs (Mobile.Bff — keep Live)

- `GET patrol/sessions` · `POST ai-vision/detect` · `GET ai-vision/detections/{id}` opt · `POST incident/incidents`

## Gates

- List/grid Kind B: **N/A** phone
- Form: Mobile full ≤430 · Pattern B · cấm ERP.* · cấm invent cam-patrol path
- Build HARD: **PASS** (MFE + BE) · Step 4b skip

## Debt / notes

- Stamp km = latest check-in `planPointLabel`
- Frame = `<input capture=environment>` → base64
- E2E: queued `/agent-qa*` — **cấm** e2e ở Dev

## nextSlash

`/agent-qa` · roleOnly stop (GAP-PKT-ROLE-01)
