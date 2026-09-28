# Implement — web-rmms-vis-capture

> Status: **done** · writtenAt `2026-09-27T18:25:00.000Z` · task `task_46a9e73a`  
> skillVersion: `2026.09.05.03` · packKind: `list` · changeScope: `edit_page` · autoApprove: ON  
> mfeStdUrl: `http://localhost:9301/chup-hien-truong` · contentHash: `sha256:f749bc65f84b7bde51beeebaa85e5db22dacc8e8a040a53de30af834fa55c8cd`

| | |
|--|--|
| Feature | `web-rmms-vis-capture` |
| Title | Nhận diện sự cố |
| Role | `dev` · `/agent-dev` |
| changeScope | `edit_page` · Pattern B delta |
| mfe | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Mobile` |
| mfeStdRoute | `/chup-hien-truong` |
| nativeAlias | `/incident/vis` |
| be | Mobile.Bff `:5202` `mobile-bff/api/v1` · **Step 4b N/A invent** · users forward cite |
| DES-GRID | N/A phone |
| build | MFE `yarn build` **PASS** · BE `dotnet build` WebService **PASS** · Mobile.Bff **PASS** |

## Done (T-*)

| id | Result |
|----|--------|
| T-01 | Route keep `/chup-hien-truong` · VisCapturePage shell · **cấm** slug mới · ROUTE-01 |
| T-02 | PhotoRow + GPS · rowLoc/rowAcc · deny→modal/banner on click · **cấm** fake |
| T-03 | Pattern B Detect · `disabled={detecting}` only · `#validationBanner` on click · Acc>30 no POST handler · Engine=P1 |
| T-04 | Result rowClass/rowSev + Badge · optional GET detections/{id} |
| T-05 | Pattern B Attach · `disabled={attaching}` only · banner on click · HasGps+DetectionId · **no Lat** · Skip=dismiss |
| T-06 | `#validationBanner` string[] · useFormOptions · session toast · SCREENS SSOT VisCapturePage · **cấm** tab/icon mới |
| T-BE | **N/A invent** — users forward already `UsersMobileController` · no migration/API mới |

## Files (delta)

- `src/pages/WebRmmsVisCapture/VisCapturePage.tsx` — Pattern B idle-on + banner + Acc handler
- `src/pages/WebRmmsVisCapture/styles.module.css` — bannerHead/List/Dismiss
- `docs/plan/web-rmms-mobile/SCREENS.md` — SSOT cite VisCapturePage / Pattern B (align)

## APIs (unchanged Live)

- uploads* · `POST ai-vision/detect` · `GET detections/{id}` · `GET patrol/sessions` · `POST incident/incidents`
- peer BFF: `GET integration/users` (forward) · `road-routes/search`

## Gates

- List/grid Kind B: **N/A** phone
- Form: Pattern B PASS · DES-GRID N/A · cấm ERP.* · cấm invent VisCapture path
- Build HARD: **PASS** (MFE + BE + Mobile.Bff)
- QA modes: `?gps=deny` · `?acc=45` · `?nophoto=1` · `?nosession=1` · `?error=1` · `?banner=1`

## Debt / notes

- UNCLEAR-VALIDATE-B · UNCLEAR-ALIGN-01 · closed on Dev (Pattern B + SCREENS SSOT)
- UNCLEAR-SESS → QA toast GPS-only
- E2E: queued `/agent-qa*` — **cấm** e2e ở Dev

## nextSlash

`/agent-qa` · roleOnly stop (GAP-PKT-ROLE-01)
