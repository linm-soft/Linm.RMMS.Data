# Handoff compact — qa

schemaVersion: 1
feature: ai-vision
packKind: ai
featureClass: ai
role: qa
status: failed
skillVersion: 2026.08.09.02
workflowVersion: 2026.08.09.02
contentHash: sha256:506a7c7045dab6bd32038fe1dd6984ce12e7d01feea4b9bddcc3be35c0d66236
writtenAt: 2026-09-12T08:55:00.000Z
taskId: task_b07e3518
changeScope: edit_page
featureKind: B
verdict: FAIL
mfeStdRoute: /ai-vision
mfeStdUrl: http://localhost:9301/ai-vision
autoApprove: ON
e2eQa: ON

## Decisions
- changeScope: edit_page · e2eQa ON runtime · **cấm** static-only PASS
- method: docker + start:std :9301 + yarn e2e-qa → PW fail → chrome capture
- packet S0/S1/QA-20 **FAIL** · `/ai-vision` no Route (**GAP-QA-STD-01** P0)
- VN `/ai-kd` **PASS** · list + Zone A attachFrame/runDetect present
- Kind B · cấm AI chrome · GAP-F-AIV-04 OUT
- next: qa_fail_rollback · queue **failed** · **cấm** completed · **cấm** phase=done

## Inventory (slim)
| id | label | controlHint | notes |
|----|-------|-------------|-------|
| attachFrame | Ảnh hiện trạng | FileUpload | present on /ai-kd · blocked std |
| engineDetect | Engine detect | Dropdown | Zone A · VN PASS |
| runDetect | Chạy detect | Button | Zone A · VN PASS |
| search/filters | Tìm + filters | Search/Dropdown | VN PASS |

## Screens / zones (ids only)
- S0/S1/QA-20 FAIL @ mfeStdUrl
- S0-vn/S1-vn PASS @ /ai-kd · Zone A detect
- PNG: specs/ai-vision/qa/screens/{S0,S1,QA-20,S0-vn,S1-vn}.png

## API / tasks (ids only)
- T-QA-01 **failed** · T-QA-UPLOAD/DETECT blocked on std
- T-RV-01 pending
- files web-bff/api/v1/files/* · POST …/detect

## Gaps
- GAP-QA-STD-01 P0 — add Route alias `/ai-vision` or retarget STATUS to `/ai-kd`
- GAP-QA-E2E-PW-01 P2 — yarn e2e-qa playwright resolve

## UNCLEAR
- (none)

## Full paths (Read only if needed)
- scenarios: D:/AI-QLBD/Linm.RMMS.Data/specs/ai-vision/qa/scenarios.md
- STATUS: D:/AI-QLBD/Linm.RMMS.Data/specs/ai-vision/STATUS.md
- prior: D:/AI-QLBD/Linm.RMMS.Data/specs/ai-vision/handoff/dev-compact.md
