# Handoff compact — qa

schemaVersion: 1
feature: web-rmms-shell
packKind: list
role: qa
status: done
skillVersion: 2026.09.05.03
writtenAt: 2026-09-25T11:50:00.000Z
taskId: task_0815e1ea
contentHash: sha256:6f74282b807da7f2cc1aa57ac64848cd1d75ff3383c0f432eaad7bea53fff80e
autoApprove: ON
e2eQa: ON
mfeStdUrl: http://localhost:9301/web-rmms-shell

## Decisions
- changeScope: new_page
- formPattern: Mobile shell / login overlay SH-02 · phone 430 · LeaveConfirmModal
- verdict: **PASS** · visual Aligned · Must 0
- method: start:std :9301 + docker + playwright S0/S1/QA-20 · MFE /login · junction capture_shell
- T-QA-CRUD-01 · T-QA-FORM-01 **PASS** · T-QA-FILTER **WAIVE**
- next: review · `/agent-review` · roleOnly stop · **cấm** phase=done

## Inventory (slim)
| id | label | controlHint | notes |
|----|-------|-------------|-------|
| tabHome/Field/Incident/Work | tab.* | Tab/Nav | S0 4 only |
| doorPatrol/Inspect | tuần đường/kiểm | Button/Nav | S1 SH-04 |
| loginUser/Pass | login | Text/Password | QA-20 SH-02 |
| profileName | tên | Text RO | guest/staff |
| notifyBadge | badge | Number RO | chrome |

## Screens / zones (ids only)
- SH-00 · SH-01 · SH-02 · SH-03 · SH-04 · PNG `qa/screens/{S0,S1,QA-20}.png`
- reviewUrl= file:///D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-shell/ui/prototype/index.html
- peerStdUrl= http://localhost:9301/web-rmms-shell

## API / tasks (ids only)
- VERIFY: manifest ok · hashes distinct · zones Aligned
- T-QA-CRUD-01 · T-QA-FORM-01 = done
- soft: playwright resolve · web-bff restart · staff session guest fallback

## UNCLEAR
- none

## Full paths (Read only if needed)
- qa: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-shell/qa/scenarios.md
- STATUS: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-shell/STATUS.md
- prior: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-shell/handoff/dev-compact.md
