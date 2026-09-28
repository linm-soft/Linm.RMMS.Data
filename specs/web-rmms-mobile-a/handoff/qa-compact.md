# Handoff compact — qa

schemaVersion: 1
feature: web-rmms-mobile-a
packKind: list
role: qa
status: done
skillVersion: 2026.09.05.03
rulesVersion: 2026.09.27.1
writtenAt: 2026-09-27T14:48:29.000Z
taskId: task_093fedbf
contentHash: sha256:110e845481b0f27091c0f5ca856fef74524bc1634ab8e3785a5d7755730eea45
autoApprove: ON
e2eQa: ON
mfeStdUrl: http://localhost:9301/web-rmms-mobile-a
liveUrl: http://localhost:9301/m/tuan-duong

## Decisions
- changeScope: edit_page · editTask=1
- formPattern: Full (TD-00/01/02·TK) · Sheet TD-03 Pattern B · phone 430
- verdict: **PASS** · visual Aligned · Must 0 · T-QA-EDIT-01 PASS
- method: docker + start:std :9301 reuse + yarn e2e-qa --skip-start (soft) + `_capture_a` authoritative
- Pattern B / route no-seed / user resolve / mobileApiBase **PASS**
- STATUS alias `/web-rmms-mobile-a` soft 404 · live `/m/tuan-duong`
- next: review · `/agent-review` · roleOnly stop · **cấm** phase=done

## Inventory (slim)
| id | label | controlHint | notes |
|----|-------|-------------|-------|
| route | tuyến | SearchInput | QA-20 · no-seed |
| direction | chiều | Dropdown | Chiều đi |
| userName | người | Text RO+resolve | soft empty label |
| plannedDate | ngày | Date | QA-20 |
| submitCheckIn | Lưu | Button | Pattern B code |

## Screens / zones (ids only)
- TD-00 · TD-01 · TD-02 · TD-03(Pattern B code) · PNG `qa/screens/{S0,S1,QA-20}.png`
- reviewUrl= file:///D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-mobile-a/ui/prototype/index.html
- peerStdUrl= http://localhost:9301/m/tuan-duong

## API / tasks (ids only)
- VERIFY: capture_a ok · hashes distinct · stock e2e soft
- T-QA-EDIT-01 = done · T-QA-CRUD/FORM keep · T-REV-EDIT-01 pending
- soft: playwright resolve · API :5111 · STD-URL alias

## UNCLEAR
- none

## Full paths (Read only if needed)
- qa: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-mobile-a/qa/scenarios.md
- STATUS: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-mobile-a/STATUS.md
- prior: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-mobile-a/handoff/dev-compact.md
