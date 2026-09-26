# Handoff compact — review

schemaVersion: 1
feature: web-rmms-shell
packKind: list
role: review
status: done
skillVersion: 2026.09.05.03
writtenAt: 2026-09-25T12:00:00.000Z
taskId: task_f8c53dca
contentHash: sha256:6f74282b807da7f2cc1aa57ac64848cd1d75ff3383c0f432eaad7bea53fff80e
review_confirm: done
autoApprove: ON
e2eQa: ON (prior QA PASS · cấm re-run Review)

## Decisions
- changeScope: new_page
- formPattern: Mobile shell / login overlay SH-02 · phone 430 · LeaveConfirmModal
- Grid/DES-GRID/LinErpListFilterBar: N/A WAIVE
- verdict: **PASS** · Must 0 · P0 0 · QUERY/SEC/UI-FN/BE-FN PASS
- hash: unchanged · skip data-analy rescan
- mfe: D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Mobile · /web-rmms-shell · :9301
- be: Auth+Notification+session-window Live · migration none · cấm ERP.*
- DOMAIN-MAP: web-rmms-shell → Notification/notification CLOSED
- tabs: Home·Field·Incident·Work only · Field doors → peer A
- GPS: shell chrome no capture
- soft: token multi-key · LOOKUP_STATIC · QA staff-session observe
- next: pipeline end · roleOnly stop (GAP-PKT-ROLE-01)

## Inventory (slim)
| id | label | controlHint | notes |
|----|-------|-------------|-------|
| tabHome/Field/Incident/Work | tab.* | Tab/Nav | 4 only |
| loginUser/Pass | login | Text/Password | POST auth/login |
| profileName | tên | Text RO | guest/staff |
| notifyBadge | badge | Number RO | GET overview |
| sessionWindow | cửa sổ HĐ | gate | GET session-window |
| doorPatrol/Inspect | tuần đường/kiểm | Button/Nav | → peer A |
| homeQuick/Grid | Home CTAs | Button/Nav | SCREENS Home |
| stackBack | back | Button | shell stack |

## Screens / zones (ids only)
- SH-00 · SH-01 · SH-02 · SH-03 · SH-04 · SH-05 · SH-06 · DES-LEAVE
- QA PNG: qa/screens/{S0,S1,QA-20}.png Aligned
- reviewUrl= file:///D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-shell/ui/prototype/index.html
- peerStdUrl= http://localhost:9301/web-rmms-shell

## API / tasks (ids only)
- FormMode↔API: POST auth/login · refresh · GET profile · session-window · overview · opt sessions
- entity/migration: none
- T-*: all BE/UI/QA done · review_confirm=done
- WAIVE: LIST/FILTER/CFG/UISCHEMA/LKP/QA-FILTER

## UNCLEAR
- none

## Full paths (Read only if needed)
- findings: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-shell/review/findings.md
- STATUS: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-shell/STATUS.md
- prior: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-shell/handoff/qa-compact.md
