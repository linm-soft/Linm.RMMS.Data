# Handoff compact — qa

schemaVersion: 1
feature: web-rmms-mobile-a
packKind: list
role: qa
status: done
skillVersion: 2026.09.05.03
writtenAt: 2026-09-25T07:36:00.000Z
taskId: task_3dc99433
contentHash: sha256:c5b21efdd411635233b56b13ee0b1a318c182c0a488f10d8290481a3dbbd3c2e
autoApprove: ON
e2eQa: ON
mfeStdUrl: http://localhost:9301/web-rmms-mobile-a

## Decisions
- changeScope: new_page
- formPattern: Full (TD-00/01/02·TK) · Sheet (TD-03) · phone 430
- verdict: **PASS** · visual Aligned · Must 0
- method: start:std :9301 + docker + playwright S0/S1/QA-20 · JWT auth_token
- T-QA-CRUD-01 · T-QA-FORM-01 **PASS** · T-QA-FILTER **WAIVE**
- port debt closed (9305→9301)
- next: review · `/agent-review` · roleOnly stop · **cấm** phase=done

## Inventory (slim)
| id | label | controlHint | notes |
|----|-------|-------------|-------|
| route | tuyến | SearchInput | QA-20 live |
| direction | chiều | Dropdown | Chiều đi |
| userName | người | Text RO | Quản trị RMMS |
| plannedDate | ngày | Date | locale soft |
| historyCards | lịch sử | List | S1 CTA |

## Screens / zones (ids only)
- TD-00 · TD-01 · TD-02 · PNG `qa/screens/{S0,S1,QA-20}.png`
- reviewUrl= file:///D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-mobile-a/ui/prototype/index.html
- peerStdUrl= http://localhost:9301/web-rmms-mobile-a

## API / tasks (ids only)
- VERIFY: manifest ok · hashes distinct · Read PNG Aligned
- T-QA-CRUD-01 · T-QA-FORM-01 = done
- soft: playwright resolve · API :5111 vs :5101 · Pages :9100

## UNCLEAR
- none

## Full paths (Read only if needed)
- qa: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-mobile-a/qa/scenarios.md
- STATUS: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-mobile-a/STATUS.md
- prior: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-mobile-a/handoff/dev-compact.md
