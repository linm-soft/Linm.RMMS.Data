# Handoff compact — team_lead

schemaVersion: 1
feature: iot
packKind: list
role: team_lead
status: done
skillVersion: 2026.08.19.04
writtenAt: 2026-09-05T04:35:00.000Z
taskId: task_903b7df2
route_confirm: route_a `/iot` (autoApprove)

## Decisions
- changeScope: new_page
- formPattern: Full page (Kind D) · list CatalogListShell Kind B · data-form-cols=5
- mfe: D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Iot · routes `/iot` · `/iot/tao-moi` · `/iot/:id`
- be: D:/AI-QLBD/Linm.RMMS.WebService · Iot · `api/v1/iot` · **cấm ERP.***
- catalogKind: `iot-devices` · IdCode `IOT-` · type sensor|logger
- gates: tz_na · xco_get_only · share_tenant
- migration: Schema_RmmsIotDevices · **flag Dev**
- open questions: none TL-blocking · GAP-IOT-01/02/03 → Dev tasks

## Inventory (slim)
| id | label | controlHint | notes |
|----|-------|-------------|-------|
| search | Tìm | SearchTextInput | filter |
| status | Trạng thái | Dropdown | init-data |
| type | Loại | Dropdown | init-data |
| routeCode | Tuyến | SearchInput | road-routes |
| code | Mã | IdCode | IOT- |
| name | Tên | Text | form |
| km | Lý trình | Number | optional |

## Screens / zones (ids only)
- S-LIST DES-GRID-A/B/C/D/F/H · LinErpListFilterBar · Leave
- S-FORM-CREATE `/iot/tao-moi` · S-FORM-EDIT/VIEW `/iot/:id` · Full 5col
- reviewUrl=file:///D:/AI-QLBD/Linm.RMMS.Data/specs/iot/ui/prototype/index.html
- peerStdUrl=http://localhost:9309/iot · mfeStdUrl=http://localhost:9309/iot
- filterBar=specs/iot/ui/iot-filter-bar.md

## API / tasks (ids only)
- FormMode↔API: List API-01 · init API-02 · GET/POST/PUT/DEL API-03…06 · health API-00
- T-*: T-BE-SCHEMA-01 · T-BE-CRUD-01 · T-BE-INIT-01 · T-BE-UISCHEMA-01 · T-BFF-01 · T-PERM-01 · T-MENU-01 · T-UI-LIST-01 · T-UI-FILTER-01 · T-UI-CFG-01 · T-UI-FORM-01 · T-UI-LEAVE-01 · T-UI-ACT-01 · T-UI-LKP-01 · T-UI-FIELD-01 · T-UI-PROD-01 · T-UI-UX-01 · T-UI-RESP-01 · T-UI-HIST-01 · T-QA-CRUD-01 · T-QA-FORM-01 · T-QA-FILTER-01 · T-QA-FILTER-02 · T-QA-TYP-01 · T-QA-TAB-01
- devSlash: `/agent-dev` · T-UI-RESP-01=`/dev-web-responsive`+`/dev-ui-review` · QA=`/agent-qa`
- deps: T-BE-* → T-BFF → T-UI-* → T-QA-*

## UNCLEAR
- none

## Full paths (Read only if needed)
- task: D:/AI-QLBD/Linm.RMMS.Data/specs/iot/task/iot.md
- filter-bar: D:/AI-QLBD/Linm.RMMS.Data/specs/iot/ui/iot-filter-bar.md
- solution: D:/AI-QLBD/Linm.RMMS.Data/specs/iot/be/solution-discovery.md
- design: D:/AI-QLBD/Linm.RMMS.Data/specs/iot/ui/design.md
- prior: sa-compact.md · design-compact.md · po-compact.md · data_analy-compact.md
- STATUS: D:/AI-QLBD/Linm.RMMS.Data/specs/iot/STATUS.md
