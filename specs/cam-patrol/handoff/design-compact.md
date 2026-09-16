# handoff-compact — design · cam-patrol

| | |
|---|---|
| schemaVersion | 1 |
| feature | `cam-patrol` |
| role | `design` |
| slash | `/agent-design-mobile` |
| mode | `feature_context` |
| packKind | `screen` |
| changeScope | `edit_page` |
| taskId | `task_0ab8d0f5` |
| status | **PASS** |
| autoApprove | ON |
| design_confirm | **approve** |
| generatedAt | `2026-09-12T11:30:00.000Z` |

## DoR

| Gate | Result |
|------|--------|
| design.md | PASS · `ui/design.md` |
| ux-analy | PASS · `ui/ux-analy.md` §1–§9 |
| html-to-native-map | PASS · `ui/html-to-native-map.md` |
| prototype dual | PASS · `ui/prototype/{ios,android}/index.html` |
| UNCLEAR | none |

## § Delta (edit_page)

| ID | Summary |
|----|---------|
| GAP-MOB-CAM-FRAME-01 | Finder capture JPEG → non-null `imageBase64` trước POST detect |
| GAP-MOB-CAM-FRAME-02 | fail → toast detectFail · card nil · `?fail=1` · **cấm** fake class |
| GAP-MOB-CAM-FRAME-03 | parity DetectAiVisionBody.imageBase64 · Dev dual |

## Zones / DES

| Zone | DES |
|------|-----|
| `#sc-cam-patrol` | `DES-MOB-CAM-PATROL` |
| finder | `DES-MOB-CAM-FINDER` |
| GPS deny | `DES-MOB-GPS-DENY` |

## reviewUrl

| | |
|---|---|
| iOS | `file:///Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Data/specs/cam-patrol/ui/prototype/ios/index.html` |
| Android | `file:///Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Data/specs/cam-patrol/ui/prototype/android/index.html` |
| fail | `?fail=1` · ship `?ship=1` · deny `?deny=1` |

## Keep

- zones / copy VN · packKind `screen` · score ẩn · live stamp cleanup_mock
- Step 4b **SKIP** · **cấm** full redesign · **cấm** re-scan demo

## Next

| Field | Value |
|-------|-------|
| nextRole | `sa` · `/agent-sa-mobile` |
| note | frame DoD Design PASS · Dev capture dual · SA discovery |
| e2eQa | queued QA · **cấm** e2e ở design |
| Dev hint | iOS+Android capture → `DetectAiVisionBody.imageBase64` · fail toast sạch |

## Version meta

| skillId | skillVersion | schemaVersion |
|---------|--------------|---------------|
| agent-design-mobile | 2026.08.25.01 | 1 |
