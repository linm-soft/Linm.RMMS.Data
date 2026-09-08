# Handoff compact — team_lead

schemaVersion: 1
feature: traffic-sign-type
packKind: master
role: team_lead
status: done
skillVersion: 2026.08.25.01
workflowVersion: 2026.09.05.03
rulesVersion: 2026.09.05.8
writtenAt: 2026-09-06T03:05:00.000Z
taskId: task_5319edc4
autoApprove: ON
e2eQa: ON (queued /agent-qa*)
changeScope: new_page
route_confirm: route_a
contentHash: sha256:e3aada6d5b40ee2b06635701491bbf3cca71444f95c42b42bbc1bc9d0f03ddbb
formPattern: Slideout · data-form-cols=2 · footer_actions_only
domain: Integration · api/v1/integration/traffic-sign-types
devSlash: /agent-dev (+ /dev-web-responsive · /dev-ui-review)

## Decisions
- changeScope=new_page · packKind=master · Kind B · Slideout (GAP-TST-FORM-01 closed)
- route_confirm **route_a** (autoApprove) · `/mas/loai-bien-bao`
- Keep live API/BFF/entity/MFE · **cấm** invent API · **cấm** ERP.* · **cấm** Step 4b
- Icon NULL · seed gov-vn only · **cấm** invent pict/mã
- Gates: tz_na · xco_na · share_a
- History DEFER stub · LeaveConfirmModal required
- FormType pack §2a stamped · GAP-TL-FORMTYPE/FILTER/LEAVE/DEV-ASSIGN closed

## Inventory (slim)
| id | label | controlHint | write |
|----|-------|-------------|-------|
| search | Tìm | SearchTextInput | query |
| groupCode | Nhóm QCVN | Dropdown | init-data |
| code | Mã biển | Text code | create only · lock edit |
| name | Nội dung | Text | name |
| nameEn | Tên EN | Text | nameEn |
| shape | Hình dạng | Text | shape |
| width/height | Rộng/Dài | Text | catalog ≠ install |
| icon | Icon | Text URL/path | NULL ok |
| isActive | Hiệu lực | Switch | isActive |
| trafficSignTypeCode | Consumer | SearchInput | GET /search |

## Screens / zones (ids only)
- S-LIST DES-GRID-A/B/B-FILTER/C0–C3/D/F/H
- S-FORM-* DES-GRID-Z · DES-FORM-Z1–Z3 · LeaveConfirmModal
- S-HIST (defer) · S-CONSUMER
- mfeStdUrl=http://localhost:9318/mas/loai-bien-bao
- peerStdUrl=http://localhost:9318/mas/loai-tai-san
- reviewUrl=file:///D:/AI-QLBD/Linm.RMMS.Data/specs/traffic-sign-type/ui/prototype/traffic-sign-type-list-prototype.html
- filterBar=docs/context/features/traffic-sign-type-filter-bar.md

## API / tasks (ids only)
- FormMode↔API: List API-01 · Search API-02 · init API-03 · by-code API-04 · GET API-05 · POST API-06 · PUT API-07 · soft DEL API-08
- T-*: T-CTX-01 · T-BE-CRUD/INIT/UISCHEMA · T-BFF · T-PERM · T-SEED · T-UI-LIST/FILTER/CFG/FORM/LEAVE/ACT/LKP/FIELD/PROD/UX/RESP/HIST · T-QA-CRUD/FORM/FILTER-01/02/TYP/TAB
- deps: T-BE → T-UI · T-UI-FORM → T-UI-LEAVE
- Next: **dev** · /agent-dev · e2e queued QA only

## UNCLEAR
- none

## Full paths (Read only if needed)
- task: D:/AI-QLBD/Linm.RMMS.Data/specs/traffic-sign-type/task/traffic-sign-type.md
- solution: D:/AI-QLBD/Linm.RMMS.Data/specs/traffic-sign-type/be/solution-discovery.md
- design: D:/AI-QLBD/Linm.RMMS.Data/specs/traffic-sign-type/ui/design.md
- filter-bar: D:/AI-QLBD/Linm.RMMS.Data/docs/context/features/traffic-sign-type-filter-bar.md
- STATUS: D:/AI-QLBD/Linm.RMMS.Data/specs/traffic-sign-type/STATUS.md
- prior compact: sa-compact.md · design-compact.md · po-compact.md · data_analy-compact.md
