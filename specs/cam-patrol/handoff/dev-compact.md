# handoff-compact — dev · cam-patrol

| | |
|---|---|
| schemaVersion | 1 |
| feature | `cam-patrol` |
| role | `dev` |
| slash | `/agent-dev-ios` + `/agent-dev-android` |
| mode | `feature_context` |
| packKind | `screen` |
| changeScope | `edit_page` |
| taskId | `task_2122aa0b` |
| status | **PASS** |
| autoApprove | ON |
| generatedAt | `2026-09-12T11:40:00.000Z` |

## DoR

| Gate | Result |
|------|--------|
| T-IOS-CAM-FRAME | PASS · JPEG → `imageBase64` · fail toast |
| T-AND-CAM-FRAME | PASS · CameraX parity |
| implement ios/android | PASS · `implement/ios.md` · `implement/android.md` |
| xcodegen + iPhone 17 Pro | **PASS** |
| assembleDebug | **PASS** |
| BFF dotnet build | **PASS** · paths unchanged |
| Step 4b | **SKIP** · DTO live |
| UNCLEAR | none |

## Decisions

- gap=`cam_patrol_capture_frame` · **GAP-MOB-CAM-FRAME-01/02/03 CLOSED client**
- Capture finder JPEG → non-null `DetectAiVisionBody.imageBase64` dual
- fail/empty → toast detectFail · card nil · **cấm** fake class / POST null
- Step 4b **SKIP** · **cấm** invent API / ERP.* / mfeStdUrl
- route_a **giữ** · prior screen ship **giữ**
- debt: none blocking · sim camera may need warm-up retry (built-in ≤2s)
- next: **qa** · `T-QA-CAM-FRAME` · **cấm** e2e ở Dev

## § Delta closed

| ID | Summary |
|----|---------|
| GAP-MOB-CAM-FRAME-01 | Capture → non-null ImageBase64 |
| GAP-MOB-CAM-FRAME-02 | fail toast · card nil |
| GAP-MOB-CAM-FRAME-03 | parity DetectAiVisionBody dual |

## Screens / APIs

- `#sc-cam-patrol` · `DES-MOB-CAM-PATROL` · `DES-MOB-CAM-FINDER` · `DES-MOB-GPS-DENY`
- GET `patrol/sessions` · POST `ai-vision/detect` (ImageBase64) · POST `incident/incidents`
- mfeStdUrl: — (native)

## Prior / full

| | |
|---|---|
| prior | team_lead compact **PASS** · `task_9068a243` |
| full | `implement/ios.md` · `implement/android.md` |
| bffHash | `sha256:cam-patrol-mobile-bff-20260912-frame` |

## Next

| Field | Value |
|-------|-------|
| nextRole | `qa` · `/agent-qa-mobile` |
| task | `T-QA-CAM-FRAME` · `T-QA-TAB-01` |
| e2eQa | queued · Maestro slug `cam-patrol` · **chỉ** `/agent-qa*` |

## Version meta

| skillId | skillVersion | schemaVersion |
|---------|--------------|---------------|
| agent-dev-ios | 2026.08.20.03 | 1 |
| agent-dev-android | 2026.08.20.03 | 1 |
