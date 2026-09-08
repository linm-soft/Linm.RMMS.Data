# Handoff compact — sa

schemaVersion: 1
feature: iot
packKind: list
role: sa
status: done
skillVersion: 2026.08.25.02
writtenAt: 2026-09-05T04:20:00.000Z
taskId: task_5c19e499
solution_confirm: approve

## Decisions
- changeScope: new_page
- formPattern: Full page (Kind D) · list CatalogListShell Kind B · data-form-cols=5
- mfe: D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Iot · `/iot` · mfeStdUrl=http://localhost:9309/iot
- be: D:/AI-QLBD/Linm.RMMS.WebService · DOMAIN-MAP **Iot** · `api/v1/iot` · BFF proxy · **cấm ERP.***
- entity: `IotDeviceEntity` · table `rmms_iot_devices` · flat scalars · soft-delete
- migration: `Schema_RmmsIotDevices` · **flag Dev** · **cấm** Step 4b @ SA
- IdCode prefix: **`IOT-`** (Q-IOT-CODE-01 chốt)
- type: `sensor`|`logger` · status: `online`|`offline` · init-data API-02
- routeCode: Integration road-routes search · **cấm** free-text
- health: keep API-00 · **cấm** map → grid
- gates: **tz_na** · **xco_get_only** · **share_tenant**
- perm: BE `iot.devices.read|create|update|delete` · FE `rmms-iot:devices:read|write` · menu ADMIN
- open questions: none SA-blocking · GAP-IOT-01/03 → TL/Dev

## Inventory (slim)
| id | label | controlHint | write |
|----|-------|-------------|-------|
| search | Tìm | SearchTextInput | query |
| status | Trạng thái | Dropdown | init-data · scalar |
| type | Loại | Dropdown | init-data · scalar |
| routeCode | Tuyến | SearchInput | road-routes search |
| code | Mã | Text/IdCode | `IOT-` |
| name | Tên | Text | scalar |
| km | Lý trình | Number | scalar optional |

## Screens / zones (ids only)
- S-LIST DES-GRID-A/B/C/D/F/H · LinErpListFilterBar · Leave
- S-FORM-CREATE `/iot/tao-moi` · S-FORM-EDIT/VIEW `/iot/:id`
- reviewUrl=file:///D:/AI-QLBD/Linm.RMMS.Data/specs/iot/ui/prototype/index.html
- peerStdUrl=http://localhost:9309/iot · mfeStdUrl=http://localhost:9309/iot

## API / tasks (ids only)
- FormMode↔API: List↔API-01 · init-data API-02 · GET API-03 · POST API-04 · PUT API-05 · soft DEL API-06 · health API-00
- filter keys: search·status·type·routeCode·page·pageSize
- T-*: DEFER TL · devSlash=/agent-dev · T-BE-SCHEMA · T-BE-CRUD · T-BFF · T-UI-* · T-MENU

## UNCLEAR
- none

## Full paths (Read only if needed)
- solution: D:/AI-QLBD/Linm.RMMS.Data/specs/iot/be/solution-discovery.md
- design: D:/AI-QLBD/Linm.RMMS.Data/specs/iot/ui/design.md
- real-data: D:/AI-QLBD/Linm.RMMS.Data/specs/_data-analy/features/iot-real-data.md
- prior compact: design-compact.md · po-compact.md · data_analy-compact.md
- STATUS: D:/AI-QLBD/Linm.RMMS.Data/specs/iot/STATUS.md
