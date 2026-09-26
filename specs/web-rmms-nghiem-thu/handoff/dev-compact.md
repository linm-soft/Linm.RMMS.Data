# Handoff compact — dev

schemaVersion: 1
feature: web-rmms-nghiem-thu
packKind: list
role: dev
status: done
skillVersion: 2026.09.05.03
writtenAt: 2026-09-25T15:45:00.000Z
taskId: task_60b80237
contentHash: sha256:6f74282b807da7f2cc1aa57ac64848cd1d75ff3383c0f432eaad7bea53fff80e
autoApprove: ON
e2eQa: ON queued /agent-qa*
changeScope: new_page

## Decisions
- formPattern: Mobile list + full create/detail ≤430 · N/A ERP Modal/Slideout · Android 1-1
- domain: Patrol · DOMAIN-MAP web-rmms-nghiem-thu · alias nghiem-thu · cấm ERP.*
- mfe: Linm.Web.RMMS.Mobile · `/web-rmms-nghiem-thu` · alias `/field/nghiem-thu*` · mfeStdUrl http://localhost:9301/web-rmms-nghiem-thu
- be: Mobile.Bff :5202 · reuse Live patrol/nghiem-thu · Step 4b skip · no entity/migration/NT BFF
- Live: GET list?search · GET init-data · POST · GET/{id} · PUT/{id} · files/* ≤10 · DELETE OUT
- FILTER P1 search only · GPS → FieldInfo · deny=no fake · list no GPS gate
- mau labels = init-data MAU-10 · ResultCode pass/fail/deduct · Status draft on Lưu nháp
- Entry: Field hub door · DES-LEAVE LeaveConfirmModal · labels useFormOptions + LOOKUP_STATIC
- build: yarn build PASS (chunk web-rmms-nghiem-thu) · BE no delta
- T-01…T-05 done · T-06/T-07 pending
- next: /agent-qa* · roleOnly stop (GAP-PKT-ROLE-01) · e2e cấm ở Dev

## Inventory (slim)
| id | controlHint | API / nav |
|----|-------------|-----------|
| list/search/empty | List/Search/Static | GET patrol/nghiem-thu |
| row Check/status/result | Icon/Badge | Status · ResultCode |
| btnCreate | Button/Nav | → /moi |
| templateType | Select | init-data TemplateTypes |
| route/fieldInfo/km | Text/Number | POST/PUT |
| resultCode/scores | Select/Checklist | ResultCode · Scores[] |
| mediaIds | PhotoRow | files/* ≤10 |
| gpsCapture | Action | geolocation → FieldInfo |
| saveCreate/saveEdit | Button | POST draft · PUT |

## Screens / zones
- NT-00…NT-11
- peerStdUrl= http://localhost:9301/web-rmms-nghiem-thu
- DES-GRID / LinErpListFilterBar: N/A phone

## API / tasks
- FormMode↔API: list=GET · create=POST+init · detail=GET+PUT · files/*
- API mới / migration / entity: none
- T-01…T-05 done · T-06 QA · T-07 review
- debt: ZoneOrgCode no reverse-geocode · OMS catalog optional

## UNCLEAR
- (none blocking)

## Full paths
- implement: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-nghiem-thu/implement/web-rmms-nghiem-thu.md
- STATUS: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-nghiem-thu/STATUS.md
