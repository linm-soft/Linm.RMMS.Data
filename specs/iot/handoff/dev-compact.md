# Handoff compact — dev

schemaVersion: 1
feature: iot
packKind: list
role: dev
status: done
skillVersion: 2026.08.19.04
writtenAt: 2026-09-05T04:45:00.000Z
taskId: task_9e4e0bb1

## Decisions
- changeScope: new_page
- formPattern: Full page (Kind D) · list CatalogListShell Kind B · data-form-cols=5
- mfe: D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Iot · `/iot` · `/iot/tao-moi` · `/iot/:id`
- be: D:/AI-QLBD/Linm.RMMS.WebService · Iot · `api/v1/iot/devices` · **cấm ERP.***
- catalogKind: `iot-devices` · IdCode `IOT-` · type sensor|logger
- build: MFE `yarn build` PASS · API `dotnet build` PASS · Schema_RmmsIotDevices
- mfeStdUrl: http://localhost:9309/iot
- open questions: none Dev-blocking · Auth RequirePermission stub debt

## Inventory (slim)
| id | label | controlHint | notes |
|----|-------|-------------|-------|
| search | Tìm | SearchTextInput | filter |
| status | Trạng thái | Dropdown | init-data |
| type | Loại | Dropdown | init-data |
| routeCode | Tuyến | SearchInput | road-routes |
| code | Mã | IdCode | IOT- auto |
| name | Tên | Text | form |
| km | Lý trình | Number | optional |

## Screens / zones (ids only)
- S-LIST DES-GRID-A/B/C/D/F/H · LinErpListFilterBar · Leave
- S-FORM-CREATE `/iot/tao-moi` · S-FORM-EDIT/VIEW `/iot/:id` · Full 5col
- peerStdUrl=http://localhost:9309/iot · mfeStdUrl=http://localhost:9309/iot

## API / tasks (ids only)
- FormMode↔API: List API-01 · init API-02 · GET/POST/PUT/DEL API-03…06 · health API-00
- T-*: T-BE-* · T-BFF-01 · T-PERM-01 · T-MENU-01 · T-UI-* shipped · T-QA-* pending
- debt: RequirePermission TODO · migrate Schema_RmmsIotDevices on deploy · history BE stub

## UNCLEAR
- none

## Full paths (Read only if needed)
- implement: D:/AI-QLBD/Linm.RMMS.Data/specs/iot/implement/iot.md
- task: D:/AI-QLBD/Linm.RMMS.Data/specs/iot/task/iot.md
- STATUS: D:/AI-QLBD/Linm.RMMS.Data/specs/iot/STATUS.md
