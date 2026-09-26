# Handoff compact — review

schemaVersion: 1
feature: web-rmms-nghiem-thu
packKind: list
role: review
status: done
skillVersion: 2026.09.05.03
writtenAt: 2026-09-25T16:50:00.000Z
taskId: task_20bb5d15
contentHash: sha256:6f74282b807da7f2cc1aa57ac64848cd1d75ff3383c0f432eaad7bea53fff80e
review_confirm: approve
autoApprove: ON
e2eQa: ON (queued prior QA · cấm re-run e2e ở review)
changeScope: new_page
mfeStdUrl: http://localhost:9301/web-rmms-nghiem-thu
mfeStdRoute: /web-rmms-nghiem-thu

## Decisions
- formPattern: Mobile list + full create/detail ≤430 · N/A ERP Modal/Slideout · Android 1-1
- verdict: PASS · P0 0 · review_confirm=approve · hashGate skip (unchanged)
- QUERY: patrol/nghiem-thu GET/POST/PUT+init-data+files/* · search P1 · DELETE OUT · cấm invent · cấm ERP.*
- SEC: Mobile.Bff JWT · GPS deny=no fake ZoneOrgCode · no secrets
- UI-FN: STD-ROUTE + field alias · hub NT-00 · useFormOptions · LeaveConfirm · QA S0/S1/QA-20 Aligned
- BE-FN: DOMAIN-MAP row · Step 4b skip · reuse Live · no entity/migration
- soft: ZoneOrgCode · STOCK-PORT · form smoke WAIVE
- next: pipeline complete · roleOnly stop (GAP-PKT-ROLE-01)

## Inventory (slim)
| id | controlHint | API / nav |
|----|-------------|-----------|
| list/search/empty | List/Search/Static | GET patrol/nghiem-thu |
| row Check/status/result | Icon/Badge | Status · ResultCode |
| btnCreate | Button/Nav | → /moi |
| hubDoor NT-00 | Button/Nav | Field hub → list |
| templateType…media | Select/Photo | init-data · files/* ≤10 |
| gpsCapture | Action | geolocation → FieldInfo |
| saveCreate/saveEdit | Button | POST draft · PUT |

## Screens / zones
- NT-00…NT-11 · peerStdUrl= http://localhost:9301/web-rmms-nghiem-thu
- reviewUrl= file:///D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-nghiem-thu/ui/prototype/index.html
- DES-GRID / LinErpListFilterBar: N/A phone

## API / tasks
- FormMode↔API: list=GET · create=POST+init · detail=GET+PUT · files/*
- T-01…T-07 done · API mới/migration: none
- debt: ZoneOrgCode · STOCK-PORT (soft)

## UNCLEAR
- (none blocking)

## Full paths
- findings: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-nghiem-thu/review/findings.md
- STATUS: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-nghiem-thu/STATUS.md
