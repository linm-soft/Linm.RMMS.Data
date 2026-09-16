# handoff-compact — team_lead · cam-patrol

| | |
|---|---|
| schemaVersion | 1 |
| feature | `cam-patrol` |
| role | `team_lead` |
| slash | `/agent-tl-mobile` |
| mode | `feature_context` |
| packKind | `screen` |
| changeScope | `edit_page` |
| taskId | `task_9068a243` |
| status | **PASS** |
| autoApprove | ON |
| generatedAt | `2026-09-12T11:27:00.000Z` |

## DoR

| Gate | Result |
|------|--------|
| task MD | PASS · `task/cam-patrol.md` |
| T-IOS / T-AND | PASS · `T-IOS-CAM-FRAME` · `T-AND-CAM-FRAME` |
| T-BE / Step 4b | **n/a** · DTO live · SKIP |
| route_confirm | PASS · route_a **giữ** · không URL mới |
| UNCLEAR | none |

## Decisions

- gap=`cam_patrol_capture_frame` · **GAP-MOB-CAM-FRAME-01/02/03**
- Capture finder JPEG → non-null `imageBase64` POST detect · fail toast · card nil · **cấm** fake class
- tasks: `T-IOS-CAM-FRAME` · `T-AND-CAM-FRAME` · prior T-IOS/AND-CAM-PAT **giữ**
- T-BE / T-BFF / T-KIT: **n/a this edit** · Step 4b **SKIP**
- route_confirm: **route_a giữ** · ios/android_repo **reuse** · kit_skip=yes
- ERP.* / mfeStdUrl: none · e2e/build skipped (cấm TL) · e2eQa queued QA
- next: **dev-ios** (`T-IOS-CAM-FRAME`) → **dev-android**
- UNCLEAR: none

## § Delta (edit_page)

| ID | Summary |
|----|---------|
| GAP-MOB-CAM-FRAME-01 | Capture JPEG → non-null `ImageBase64` |
| GAP-MOB-CAM-FRAME-02 | fail → toast detectFail · card nil |
| GAP-MOB-CAM-FRAME-03 | parity DetectAiVisionBody dual |

## Screens / zones (ids only)

- `#sc-cam-patrol` · `DES-MOB-CAM-PATROL` · `DES-MOB-CAM-FINDER` · `DES-MOB-GPS-DENY`
- reviewUrl: dual prototype · `?fail=1` · `?ship=1` · `?deny=1`
- peerStdUrl: N/A

## API / tasks (ids only)

- GET `patrol/sessions` · POST `ai-vision/detect` (ImageBase64) · POST `incident/incidents`
- T-IOS-CAM-FRAME: pending · `/agent-dev-ios`
- T-AND-CAM-FRAME: pending · `/agent-dev-android`
- T-BE / T-BFF / T-KIT: n/a
- T-QA-TAB-01 · T-QA-CAM-FRAME: pending · `/agent-qa-mobile`

## Prior / full

| | |
|---|---|
| prior | sa/design/po/data_analy compact **PASS** |
| full task | `specs/cam-patrol/task/cam-patrol.md` |
| sa | `be/solution-discovery.md` |
| bffHash | `sha256:cam-patrol-mobile-bff-20260912-frame` |

## Next

| Field | Value |
|-------|-------|
| nextRole | `dev-ios` · `/agent-dev-ios` |
| task | `T-IOS-CAM-FRAME` |
| artifact | `specs/cam-patrol/implement/ios.md` |
| e2eQa | queued QA · **cấm** e2e ở TL |
| Dev hint | dual capture → `DetectAiVisionBody.imageBase64` · fail toast sạch |

## Version meta

| skillId | skillVersion | schemaVersion |
|---------|--------------|---------------|
| agent-tl-mobile | 2026.09.05.03 | 1 |
