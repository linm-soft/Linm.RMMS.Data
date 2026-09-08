# Handoff compact — po

schemaVersion: 1
feature: traffic-sign-type
packKind: master
role: po
status: done
skillVersion: 2026.08.25.01
writtenAt: 2026-09-06T02:30:00.000Z

## Decisions
- changeScope: new_page
- formPattern: Slideout (footer_actions_only) — Autopilot chốt GAP-TST-FORM-01
- packKind: master · demo N/A
- mfe: `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Master` · `/mas/loai-bien-bao`
- be: `D:/AI-QLBD/Linm.RMMS.WebService` · Integration `traffic-sign-types` · **cấm ERP.***
- Grid AC: YES · Report AC: N/A · Leave: LeaveConfirmModal
- open questions: GAP-TST-DM-01 → SA · ICON/SEED no invent (chốt)

## Inventory (slim)
| id | label | controlHint | notes |
|----|-------|-------------|-------|
| search | Tìm | SearchTextInput | mã + nội dung |
| groupCode | Nhóm QCVN | Dropdown | P/W/R/I/S/KHAC |
| code | Mã biển | Text code | lock edit · keep case |
| name | Nội dung | Text | VN SSOT |
| nameEn | Tên EN | Text | no translate |
| shape | Hình dạng | Text | |
| width/height | Rộng/Dài | Text | catalog ≠ install |
| icon | Icon | Text URL/path | NULL · no pict seed |
| isActive | Hiệu lực | Switch | |
| trafficSignTypeCode | Consumer | SearchInput | catalogKind=traffic-sign-type |

## Screens / zones (ids only)
- S-LIST Kind B A–D · S-FORM-* Slideout C/E/V/Copy · S-HIST · S-CONSUMER
- mfeStdUrl=http://localhost:9318/mas/loai-bien-bao
- peerStdUrl=http://localhost:9318/mas/loai-tai-san
- reviewUrl= (Design)
- DES-GRID-A/B/C/D + filter-bar HARD

## API / tasks (ids only)
- FormMode↔API: list/search/init/CRUD `web-bff/api/v1/integration/traffic-sign-types`
- real-data §A+§B: PASS · contentHash e3aada6d…
- T-*: (TL after SA) · devSlash=/agent-dev

## UNCLEAR
- none (DM-01 deferred SA · not blocking Design)

## Full paths (Read only if needed)
- requirement: `D:/AI-QLBD/Linm.RMMS.Data/specs/traffic-sign-type/po/requirement.md`
- control-hint: `D:/AI-QLBD/Linm.RMMS.Data/specs/_data-analy/features/traffic-sign-type-control-hint.md`
- real-data: `D:/AI-QLBD/Linm.RMMS.Data/specs/_data-analy/features/traffic-sign-type-real-data.md`
- STATUS: `D:/AI-QLBD/Linm.RMMS.Data/specs/traffic-sign-type/STATUS.md`
