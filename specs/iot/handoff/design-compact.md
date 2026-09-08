# Handoff compact — design

schemaVersion: 1
feature: iot
packKind: list
role: design
status: done
skillVersion: 2026.08.25.02
writtenAt: 2026-09-05T04:15:00.000Z

## Decisions
- changeScope: new_page
- formPattern: Full page (Kind D) · list CatalogListShell Kind B
- data-form-cols: 5
- shared_grid_example: v1
- real_view_parity: v1
- mfe: D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Iot · `/iot`
- be: D:/AI-QLBD/Linm.RMMS.WebService · Iot · **cấm ERP.***
- design_confirm: approve (autoApprove)
- open questions: GAP-IOT-02 · GAP-IOT-01 · GAP-IOT-03 · Q-IOT-CODE-01 SA

## Inventory (slim)
| id | label | controlHint | notes |
|----|-------|-------------|-------|
| search | Tìm | SearchTextInput | filter C1 |
| status | Trạng thái | Dropdown | online/offline |
| type | Loại | Dropdown | sensor/logger |
| routeCode | Tuyến | SearchInput | road-route |
| code | Mã | Text/IdCode | IOT- |
| name | Tên | Text | form |
| km | Lý trình | Number | form |

## Screens / zones (ids only)
- S-LIST DES-GRID-A/B/C0/C1/C2/C2a/C3/D/F/H · Leave
- S-FORM DES-GRID-Z Full · data-form-cols=5 · `/iot/tao-moi` · `/iot/:id`
- reviewUrl= file:///D:/AI-QLBD/Linm.RMMS.Data/specs/iot/ui/prototype/index.html
- peerStdUrl= http://localhost:9309/iot
- mfeStdUrl= http://localhost:9309/iot
- artifact= ui/prototype/iot-list.html · iot-form.html

## API / tasks (ids only)
- FormMode→API: health live · devices CRUD GAP-IOT-02
- perm: rmms-iot:devices:read|write · ADMIN menu
- T-*: DEFER TL · devSlash=/agent-dev

## UNCLEAR
- GAP-IOT-02 devices Entity/Controller (SA)
- none Design-blocking

## Full paths (Read only if needed)
- design: D:/AI-QLBD/Linm.RMMS.Data/specs/iot/ui/design.md
- prototype: D:/AI-QLBD/Linm.RMMS.Data/specs/iot/ui/prototype/index.html
- control-hint: D:/AI-QLBD/Linm.RMMS.Data/specs/_data-analy/features/iot-control-hint.md
- real-data: D:/AI-QLBD/Linm.RMMS.Data/specs/_data-analy/features/iot-real-data.md
- po: D:/AI-QLBD/Linm.RMMS.Data/specs/iot/po/requirement.md
- STATUS: D:/AI-QLBD/Linm.RMMS.Data/specs/iot/STATUS.md
