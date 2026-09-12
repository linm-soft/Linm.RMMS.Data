# handoff-compact — po · cam-patrol

| | |
|---|---|
| schemaVersion | 1 |
| feature | `cam-patrol` |
| role | `po` |
| slash | `/agent-po-mobile` |
| mode | `feature_context` |
| packKind | `screen` |
| changeScope | `edit_page` |
| taskId | `task_71013e61` |
| status | **PASS** |
| autoApprove | ON |
| generatedAt | `2026-09-12T11:22:00.000Z` |

## DoR

| Gate | Result |
|------|--------|
| requirement | PASS · `specs/cam-patrol/po/requirement.md` |
| screens | PASS · `#sc-cam-patrol` · `DES-MOB-CAM-PATROL` / `DES-MOB-CAM-FINDER` |
| device AC | PASS · AC-D-* + AC-F-01..08 (frame) |
| controlHint | PASS · copy DA-01 + toastDetectFail |
| UNCLEAR | none |

## § Delta (edit_page)

| ID | Summary |
|----|---------|
| GAP-MOB-CAM-FRAME-01 | Capture finder JPEG → non-null `imageBase64` trên POST detect |
| GAP-MOB-CAM-FRAME-02 | fail/empty frame → toast detectFail · card nil · **cấm** fake class |
| GAP-MOB-CAM-FRAME-03 | parity DetectAiVisionBody với siblings đã gửi base64 |

## Keep

- zones / copy / packKind `screen` · score ẩn · BFF paths
- Step 4b **SKIP** · Design **cấm** full redesign
- prior confirmed artifacts (cleanup_mock)

## Screens / AC (compact)

| Surface | Actions |
|---------|---------|
| `#sc-cam-patrol` | GET sessions · GPS · **capture frame** · POST detect · POST incident · Skip · toast |

Must AC: AC-F-02 frame+base64 · AC-F-08 fail toast sạch · AC-D-02 GPS · AC-F-06 no score %

## Demo / CTX / prior

| | |
|---|---|
| demo | `specs/cam-patrol/ui/prototype/{ios,android}/index.html` `#sc-cam-patrol` |
| ctx | `docs/context/features/cam-patrol.md` |
| prior compact | `handoff/data_analy-compact.md` · PASS |
| full | `po/requirement.md` |

## Next

| Field | Value |
|-------|-------|
| nextRole | `design` · `/agent-design-mobile` |
| note | keep prototype · ghi frame DoD · Dev dual capture |
| e2eQa | queued QA · **cấm** e2e ở PO |
| Dev hint | iOS+Android capture → `DetectAiVisionBody.imageBase64` |

## Version meta

| skillId | skillVersion | schemaVersion |
|---------|--------------|---------------|
| agent-po-mobile | 2026.08.25.01 | 1 |
