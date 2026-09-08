# Handoff compact - data_analy

schemaVersion: 1
feature: iot
packKind: list
role: data_analy
status: done
skillVersion: 2026.08.25.01
writtenAt: 2026-09-05T03:51:05.144Z

## Decisions
- changeScope: new_page
- formPattern: Full page (Kind D) · list CatalogListShell Kind B
- mfe: D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Iot · `/iot` · mfeStdUrl=http://localhost:9309/iot
- be: D:/AI-QLBD/Linm.RMMS.WebService · DOMAIN-MAP Iot · prefix `api/v1/iot` · **cấm ERP.***
- demo: N/A
- real-data §A+§B: PASS (health live cite · devices = CTX planned + GAP-IOT-02)
- open questions: Q-IOT-TYPE-01 · Q-IOT-CODE-01

## Inventory (slim)
| id | label | controlHint | notes |
|----|-------|-------------|-------|
| search | Tìm | SearchTextInput | filter |
| status | Trạng thái | Dropdown | online/offline LOOKUP_STATIC |
| type | Loại cảm biến | Dropdown | LOOKUP_STATIC · Q-IOT-TYPE-01 |
| routeCode | Tuyến | SearchInput | road-route |
| code | Mã | Text/IdCode | form |
| name | Tên | Text | form |
| km | Lý trình | Number | form |

## Screens / zones (ids only)
- List DES-GRID-A/B/C/D · LinErpListFilterBar
- Form full-page `/iot/tao-moi` · `/iot/:id`
- reviewUrl= (Design)
- peerStdUrl= http://localhost:9309/iot
- mfeStdUrl= http://localhost:9309/iot

## API / tasks (ids only)
- FormMode→API: health live · devices CRUD **GAP-IOT-02** planned `…/iot/devices`
- perm: `rmms-iot:devices:read|write` · menu ADMIN only
- T-*: DEFER TL

## UNCLEAR
- Q-IOT-TYPE-01: closed-set mã loại cảm biến
- Q-IOT-CODE-01: IdCode prefix pattern
- GAP-IOT-02: thiếu Entity/Controller devices (không invent)

## Full paths (Read only if needed)
- control-hint: D:/AI-QLBD/Linm.RMMS.Data/specs/_data-analy/features/iot-control-hint.md
- real-data: D:/AI-QLBD/Linm.RMMS.Data/specs/_data-analy/features/iot-real-data.md
- context: D:/AI-QLBD/Linm.RMMS.Data/docs/context/features/iot.md
- STATUS: D:/AI-QLBD/Linm.RMMS.Data/specs/iot/STATUS.md