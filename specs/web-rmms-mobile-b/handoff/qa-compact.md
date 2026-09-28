# Handoff compact — qa

schemaVersion: 1
feature: web-rmms-mobile-b
packKind: list
role: qa
status: failed
skillVersion: 2026.09.05.03
writtenAt: 2026-09-27T07:50:00.000Z
taskId: task_8be1a3ec
contentHash: sha256:fe3ccad04e66ee08b65a65aead0fbef9f46328e5c2a3b828b3bee12969bbf72e
autoApprove: ON
e2eQa: ON
mfeStdUrl: http://localhost:9301/web-rmms-mobile-b
liveUrl: http://localhost:9301/nhat-ky

## Decisions
- changeScope: edit_page · editTask=1 · § Delta Pattern B / capture / BFF / align
- formPattern: Full TD-04/05 · phone 430 · LeaveConfirmModal KEEP
- Kind B grid/filter: **WAIVE**
- verdict: **FAIL** · Must: GAP-QA-STD-01 · GAP-QA-FEAT-01
- method: start:std :9301 + docker + yarn e2e-qa (DUP) + capture_b live /nhat-ky
- T-QA-CRUD-01 **FAIL** · T-QA-FORM-01 PASS live · T-QA-FILTER **WAIVE**
- next: qa_fail_rollback · **cấm** phase=review/done · **cấm** tự sửa prod

## Inventory (slim)
| id | label | controlHint | notes |
|----|-------|-------------|-------|
| journalList | sổ dòng | List cards | S0 live PASS empty |
| save | Lưu | Button | Pattern B enabled QA-20 |
| lat/lng | GPS | GPS | mock OK |
| narrative | diễn biến | TextArea | required * |
| hubCTA | Ghi nhật ký | Button | **MISSING** on peer A |

## Screens / zones (ids only)
- TD-04 · TD-05 · DES-LEAVE · PNG `qa/screens/{S0,S1,QA-20,S0-std-url}.png`
- S0-std-url: STATUS URL **404**
- S1 peer hub: `/tuan-duong/{sessionId}` — no journal CTA
- reviewUrl= file:///D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-mobile-b/ui/prototype/index.html
- peerStdUrl= http://localhost:9301/nhat-ky

## API / tasks (ids only)
- VERIFY: live GET journal path via `/nhat-ky` · STATUS slug broken
- T-QA-CRUD-01 = fail · T-QA-FORM-01 = pass live
- rollback: alias `/web-rmms-mobile-b`→`/nhat-ky` OR STATUS mfeStdRoute=`/nhat-ky` + hub CTA

## UNCLEAR
- none (route rename vs STATUS SSOT is clear fail)

## Full paths (Read only if needed)
- qa: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-mobile-b/qa/scenarios.md
- STATUS: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-mobile-b/STATUS.md
- prior: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-mobile-b/handoff/dev-compact.md
