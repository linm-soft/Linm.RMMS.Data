# Handoff compact — team_lead

schemaVersion: 1
feature: web-rmms-field-reflect
packKind: list
role: team_lead
status: done
skillVersion: 2026.09.05.03
writtenAt: 2026-09-27T12:10:00.000Z
taskId: task_2ead05fa
contentHash: sha256:d8f13df3772c0f27b367c5e01a5ce2cf942b1a27640c1390e76e34c3a8c267f2
team_lead_confirm: approve
autoApprove: ON
changeScope: edit_page
route_confirm: keep
e2eQa: ON (queued /agent-qa*)

## Decisions
- changeScope: edit_page · Pattern B SUBMIT-VALIDATE · giữ prior Live FR-00/01/02 T-* PASS · cấm typed new_page
- formPattern: Mobile full 430 · N/A Modal/DES-GRID/FilterBar
- mfeStdRoute: /phan-anh · mfeStdUrl http://localhost:9301/phan-anh · product /field/reflect · route_confirm keep (cấm /web-rmms-field-reflect)
- be: Incident+Patrol+Integration+AiVision(+files) · Mobile.Bff :5202 · cấm ERP.* · cấm invent field-reflect · Step4b skip · T-BE invent N/A
- FormType: LIST→FR-* · FILTER/CFG/UISCHEMA WAIVE · prior FORM/LEAVE/LKP KEEP PASS · GAP-TL-FORMTYPE-01 PASS
- NEW T-*: T-UI-VAL-B-01 · T-UI-ACC-01 · T-UI-GPS-B-01 · T-UI-ALIGN-01 · T-QA-VAL-B-01
- HARD: Detect/Create disabled chỉ detecting|creating · banner string[] on click · Acc>30 chặn POST handler · GPS deny không khóa CTA
- Align cuối: /align-mobile-to-mfe · SSOT FieldReflectPage · cấm tab/route/icon mới · cấm android/ios proto
- next: /agent-dev · roleOnly stop (GAP-PKT-ROLE-01)

## Inventory (slim)
| id | controlHint | T-* |
|----|-------------|-----|
| detect/create | Button Pattern B | T-UI-VAL-B-01 · T-UI-ACC-01 |
| validationBanner | Banner string[] | T-UI-VAL-B-01 |
| gpsLock | GPS deny on click | T-UI-GPS-B-01 |
| photos/asset/session | miss → banner | T-UI-VAL-B-01 |
| FR-00/01/02 prior | keep | T-UI-FR-* PASS |

## Screens / zones
- FR-00 · FR-01 · FR-02 · validationBanner
- reviewUrl= file:///D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-field-reflect/ui/prototype/index.html
- modes=?miss=1 · ?deny=1 · ?acc=1
- peerStdUrl= http://localhost:9301/phan-anh
- DES-GRID / LinErpListFilterBar: N/A

## API / tasks
- FormMode↔API: GET sessions · GET asset-types · uploads/files · detect · POST incidents — Live keep
- entity/migration: none
- T-* delta pending · devSlash=/agent-dev · qaSlash=/agent-qa*

## UNCLEAR
- UNCLEAR-VALIDATE-B · UNCLEAR-ALIGN-01 → Dev/QA
- prior DOMAIN-MAP/MEDIA/PGC/ENTRY/CHK/SESS closed · GAP-PGC-BE-01 deferred

## Full paths
- task: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-field-reflect/task/web-rmms-field-reflect.md
- sa: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-field-reflect/be/solution-discovery.md
- design: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-field-reflect/ui/design.md
- STATUS: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-field-reflect/STATUS.md
