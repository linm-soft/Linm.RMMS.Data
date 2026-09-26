# Handoff compact — team_lead

schemaVersion: 1
feature: web-rmms-field-reflect
packKind: list
role: team_lead
status: done
skillVersion: 2026.09.05.03
writtenAt: 2026-09-26T03:45:00.000Z
taskId: task_fcf96a88
contentHash: sha256:e678be9152069e48f353f88e9f4d377e20e4fd4ad5c8d4aa2c86bd995bc1e667
team_lead_confirm: approve
autoApprove: ON
changeScope: new_page
route_confirm: approve
e2eQa: ON (queued /agent-qa*)

## Decisions
- formPattern: Mobile full FR-00/01/02 · phone ≤430 · Android 1-1 · N/A Modal · DES-GRID/FilterBar N/A
- mfe: Linm.Web.RMMS.Mobile · mfeStdRoute=/web-rmms-field-reflect · mfeStdUrl http://localhost:9301/web-rmms-field-reflect · product /field/reflect
- be: Incident+Patrol+Integration+AiVision(+files) · Mobile.Bff :5202 mobile-bff/api/v1 · cấm ERP.* · cấm invent field-reflect path · Step 4b skip
- DOMAIN-MAP web-rmms-field-reflect → Incident resolved · DEC-MEDIA-01 MediaIds max10
- FormType: T-UI-LIST→T-UI-FR-* · FILTER/CFG/UISCHEMA/QA-FILTER WAIVE · FORM/LEAVE/LKP KEEP · GAP-TL-FORMTYPE-01 PASS
- T-*: T-BE-CRUD/INIT/PERM · T-UI-FR-00/01/02 · LKP/ACT/FIELD/LEAVE/PROD/UX/RESP/HIST · T-QA-CRUD/FR
- HARD: GPS deny block · sessions live-only · checklist local · useFormOptions · HasGps · no Lat MIG
- cite T-W3-10 → T-BE-CRUD / T-UI-FR / T-QA
- next: /agent-dev · roleOnly stop (GAP-PKT-ROLE-01) · e2eQa queued QA

## Inventory (slim)
| id | controlHint | T-* |
|----|-------------|-----|
| assetPick | LookupGrid | T-UI-FR-00/LKP |
| kind/severity/desc | Segment/Select/Textarea | T-UI-FR-01/FIELD |
| checklist | CheckboxGroup | T-UI-FR-01/FIELD |
| photos→FR-02 | PhotoRow/overlay | T-UI-FR-02/ACT |
| detect/create/draft | Button | T-UI-ACT · T-BE-CRUD |
| sessionStamp/gpsLock | Text RO/GPS | T-UI-FIELD · T-BE-CRUD |

## Screens / zones
- FR-00 · FR-01 · FR-02
- reviewUrl= file:///D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-field-reflect/ui/prototype/index.html
- peerStdUrl= http://localhost:9301/web-rmms-field-reflect
- DES-GRID / LinErpListFilterBar: N/A

## API / tasks
- FormMode↔API: GET sessions · GET asset-types · uploads/files · detect · POST incidents
- entity/migration: none · T-BE reuse Incident/Patrol/Integration/AiVision
- T-* pending · devSlash=/agent-dev · qaSlash=/agent-qa*

## UNCLEAR
- (none open) · DOMAIN-MAP/MEDIA/PGC/ENTRY/CHK/SESS resolved prior · GAP-PGC-BE-01 deferred

## Full paths
- task: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-field-reflect/task/web-rmms-field-reflect.md
- sa: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-field-reflect/be/solution-discovery.md
- design: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-field-reflect/ui/design.md
- STATUS: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-field-reflect/STATUS.md
