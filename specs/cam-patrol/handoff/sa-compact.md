# handoff-compact — sa · cam-patrol

| | |
|---|---|
| schemaVersion | 1 |
| feature | `cam-patrol` |
| role | `sa` |
| slash | `/agent-sa-mobile` |
| mode | `feature_context` |
| packKind | `screen` |
| changeScope | `edit_page` |
| taskId | `task_0afc45c5` |
| status | **PASS** |
| solution_confirm | **approve** |
| autoApprove | ON |
| generatedAt | `2026-09-12T11:25:15.000Z` |

## DoR

| Gate | Result |
|------|--------|
| solution-discovery | PASS · `be/solution-discovery.md` |
| BFF contract | PASS · 3 path giữ · ImageBase64 DoD client |
| Step 4b | **SKIP** · DTO live |
| gates TZ/XCO/SHARE | tz_na · xco_na · share_na |
| UNCLEAR | none |

## § Delta (edit_page)

| ID | Summary |
|----|---------|
| GAP-MOB-CAM-FRAME-01 | Capture JPEG → non-null `ImageBase64` POST detect |
| GAP-MOB-CAM-FRAME-02 | fail → toast detectFail · card nil · cấm fake class |
| GAP-MOB-CAM-FRAME-03 | parity DetectAiVisionBody dual |
| GAP-MOB-CAM-DETECT-01 | CLOSED client · DTO live · Step 4b SKIP |

## Keep

- zones `#sc-cam-patrol` · DES-MOB-CAM-PATROL / FINDER · score ẩn
- BFF: `GET patrol/sessions` · `POST ai-vision/detect` · `POST incident/incidents`
- GPS gate · offline Confirm queue · **cấm** invent API / ERP.* / redesign

## API / tasks (ids)

| | |
|---|---|
| detect body | Engine · Note · **ImageBase64** · Lat/Lng/AccuracyM |
| confirm | CreateIncident + DetectionId · HasGps |
| TL tasks | `T-IOS-CAM-FRAME` · `T-AND-CAM-FRAME` · T-BE **n/a** |

## Prior / full

| | |
|---|---|
| prior | design/po/data_analy compact **PASS** |
| full | `be/solution-discovery.md` |
| bffHash | `sha256:cam-patrol-mobile-bff-20260912-frame` |

## Next

| Field | Value |
|-------|-------|
| nextRole | `team_lead` · `/agent-tl-mobile` |
| note | dual capture frame Dev · fail toast · Step 4b SKIP |
| e2eQa | queued QA · **cấm** e2e ở SA |
| Dev hint | iOS+Android capture → `DetectAiVisionBody.imageBase64` |

## Version meta

| skillId | skillVersion | schemaVersion |
|---------|--------------|---------------|
| agent-sa-mobile | 2026.08.25.01 | 1 |
