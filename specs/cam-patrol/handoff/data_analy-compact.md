# handoff-compact — data_analy · cam-patrol

| | |
|---|---|
| schemaVersion | 1 |
| feature | `cam-patrol` |
| role | `data_analy` |
| slash | `/agent-data-analy-mobile` |
| mode | `feature_context` |
| packKind | `screen` |
| changeScope | `edit_page` |
| taskId | `task_9ab16ef2` |
| status | **PASS** |
| autoApprove | ON |
| generatedAt | `2026-09-12T11:16:49.000Z` |

## DoR

| Gate | Result |
|------|--------|
| control-hint | PASS · `specs/_data-analy/cam-patrol-control-hint.md` |
| real-data | PASS · `specs/_data-analy/cam-patrol-real-data.md` |
| bff | PASS · `specs/_data-analy/cam-patrol-bff-endpoints.md` |
| action-tree | PASS · `specs/_data-analy/cam-patrol-action-tree.md` |
| UNCLEAR | none |

## § Delta (edit_page)

| ID | Summary |
|----|---------|
| GAP-MOB-CAM-FRAME-01 | iOS/Android POST `ai-vision/detect` với `imageBase64=null` → BE heuristic · **New:** capture frame → non-null base64 |
| GAP-MOB-CAM-FRAME-02 | fail/missing frame → toast detectFail · detection=nil · **cấm** class giả UI |
| GAP-MOB-CAM-FRAME-03 | parity incident-create/field-reflect/vis-capture đã gửi base64 |

## Keep

- PO/Design/SA/TL confirmed artifacts
- zones `#sc-cam-patrol` · `DES-MOB-CAM-PATROL` · `DES-MOB-CAM-FINDER`
- BFF paths unchanged · Step 4b **SKIP** (DTO ImageBase64 live)

## Demo / CTX

| | |
|---|---|
| demo | `specs/cam-patrol/ui/prototype/{ios,android}/index.html` `#sc-cam-patrol` |
| ctx | `docs/context/features/cam-patrol.md` |
| ios | `CamPatrolViewModel.runDetect` · `imageBase64: nil` (Current) |
| android | `CamPatrolViewModel.runDetect` omit imageBase64 (Current) |

## Next

| Field | Value |
|-------|-------|
| nextRole | `po` · `/agent-po-mobile` |
| note | keep requirement · ghi § Delta · **cấm** full redesign |
| e2eQa | queued QA · **cấm** e2e ở data_analy |
| Dev hint | dual capture frame → DetectAiVisionBody.imageBase64 |

## Version meta

| skillId | skillVersion | schemaVersion |
|---------|--------------|---------------|
| agent-data-analy-mobile | 2026.08.25.01 | 1 |
