# Handoff compact - po

schemaVersion: 1
feature: iot
packKind: list
role: po
status: done
skillVersion: 2026.08.25.02
writtenAt: 2026-09-05T04:00:00.000Z

## Decisions
- changeScope: new_page
- formPattern: Full page (Kind D) · list CatalogListShell Kind B
- packKind: list (confirmed)
- mfe: D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Iot · `/iot` · mfeStdUrl=http://localhost:9309/iot
- be: D:/AI-QLBD/Linm.RMMS.WebService · DOMAIN-MAP Iot · prefix `api/v1/iot` · **cấm ERP.***
- demo: N/A
- Grid AC: PASS (§6) · Leave: LeaveConfirmModal · Report AC: N/A
- Q-IOT-TYPE-01: `sensor` | `logger` · Q-IOT-CODE-01: prefix `IOT-` (SA pattern)
- open questions: GAP-IOT-02 (SA devices CRUD)

## Inventory (slim)
| id | label | controlHint | notes |
|----|-------|-------------|-------|
| search | Tìm | SearchTextInput | filter |
| status | Trạng thái | Dropdown | online/offline |
| type | Loại cảm biến | Dropdown | sensor/logger |
| routeCode | Tuyến | SearchInput | road-route |
| code | Mã | Text/IdCode | IOT- |
| name | Tên | Text | form |
| km | Lý trình | Number | form |

## Screens / zones (ids only)
- S-LIST DES-GRID-A/B/C/D · LinErpListFilterBar
- S-FORM-CREATE `/iot/tao-moi` · S-FORM-EDIT/VIEW `/iot/:id` · Full page
- Grid AC · LeaveConfirmModal
- reviewUrl= (Design)
- peerStdUrl= http://localhost:9309/iot
- mfeStdUrl= http://localhost:9309/iot
- controlHint cite: specs/_data-analy/features/iot-control-hint.md

## API / tasks (ids only)
- FormMode→API: health live · devices CRUD **GAP-IOT-02** planned `…/iot/devices`
- perm: `rmms-iot:devices:read|write` · menu ADMIN only
- T-*: DEFER TL · devSlash=/agent-dev

## UNCLEAR
- GAP-IOT-02: thiếu Entity/Controller devices (SA)
- none PO-blocking (Q-IOT-* chốt)

## Full paths (Read only if needed)
- requirement: D:/AI-QLBD/Linm.RMMS.Data/specs/iot/po/requirement.md
- control-hint: D:/AI-QLBD/Linm.RMMS.Data/specs/_data-analy/features/iot-control-hint.md
- real-data: D:/AI-QLBD/Linm.RMMS.Data/specs/_data-analy/features/iot-real-data.md
- prior compact: D:/AI-QLBD/Linm.RMMS.Data/specs/iot/handoff/data_analy-compact.md
- STATUS: D:/AI-QLBD/Linm.RMMS.Data/specs/iot/STATUS.md
