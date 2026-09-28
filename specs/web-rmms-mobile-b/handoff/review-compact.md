# Handoff compact — review

schemaVersion: 1
feature: web-rmms-mobile-b
packKind: list
role: review
status: done
skillVersion: 2026.09.05.03
writtenAt: 2026-09-27T14:55:00.000Z
taskId: task_9e45e6fd
contentHash: sha256:fe3ccad04e66ee08b65a65aead0fbef9f46328e5c2a3b828b3bee12969bbf72e
review_confirm: fix_gaps
autoApprove: ON
e2eQa: ON (queued QA · cấm re-e2e ở review)
mfeStdUrl: http://localhost:9301/web-rmms-mobile-b
liveUrl: http://localhost:9301/nhat-ky
verdict: FAIL
mustCount: 2
softCount: 4

## Decisions
- changeScope: edit_page · editTask=1 · § Delta Pattern B / capture / BFF / align
- formPattern: Full TD-04/05 · phone 430 · LeaveConfirmModal KEEP
- Kind B grid/filter: **WAIVE**
- QUERY: PASS live · SEC: PASS (+ soft PERM) · UI-FN: **FAIL** Must2 · BE-FN: PASS
- Must: GAP-QA-STD-01/REV-UI-STD-01 (STATUS URL 404) · GAP-QA-FEAT-01/REV-UI-HUB-01 (hub CTA missing)
- Soft: PERM TODO · e2e DUP · datetime locale · Người ghi —
- hash prior review stale → rescan · cấm ERP.*
- review_confirm=fix_gaps · autoApprove · **cấm** phase=done · next Dev + re-QA
- roleOnly stop (GAP-PKT-ROLE-01)

## Inventory (slim)
| id | label | controlHint | notes |
|----|-------|-------------|-------|
| journalList | sổ dòng | List cards | live `/nhat-ky` PASS · std URL FAIL |
| save | Lưu | Button | Pattern B PASS QA-20 |
| hubCTA | Ghi nhật ký | Button | **MISSING** peer A |
| narrative | diễn biến | TextArea | required · PASS |
| mediaIds | ảnh | FileMulti | capture=env PASS |

## Screens / zones (ids only)
- TD-04 · TD-05 · DES-LEAVE · banner
- QA PNG: S0/S1/QA-20/S0-std-url
- reviewUrl= file:///D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-mobile-b/ui/prototype/index.html
- peerStdUrl= http://localhost:9301/nhat-ky

## API / tasks (ids only)
- PATH: GET sessions/{id}/journal-lines · POST/GET/PUT journal-lines
- T-QA-CRUD-01 fail · T-QA-FORM-01 pass live · T-QA-FILTER WAIVE
- findings: Must2 · Soft4 · fix_gaps → Dev

## UNCLEAR
- none (route rename vs STATUS SSOT + hub CTA clear)

## Full paths (Read only if needed)
- findings: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-mobile-b/review/findings.md
- qa: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-mobile-b/qa/scenarios.md
- STATUS: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-mobile-b/STATUS.md
