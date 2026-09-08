# Handoff compact — data_analy

schemaVersion: 1
feature: traffic-sign-type
packKind: master
role: data_analy
status: done
skillVersion: 2026.09.05.03
writtenAt: 2026-09-06T02:20:00.000Z

## Decisions
- changeScope: new_page (pipeline docs; live Master+Integration scaffold already present)
- formPattern: Slideout (live) — Design confirm vs peer Modal
- mfe: `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Master` · `/mas/loai-bien-bao`
- be: `D:/AI-QLBD/Linm.RMMS.WebService` · Integration `traffic-sign-types` · **cấm ERP.***
- demo: N/A (master-catalog-no-demo)
- open questions: GAP-TST-DM-01 DOMAIN-MAP slug · GAP-TST-FORM-01 shell · GAP-TST-ICON-01 no pict seed

## Inventory (slim)
| id | label | controlHint | notes |
|----|-------|-------------|-------|
| search | Tìm | SearchTextInput | mã + nội dung |
| groupCode | Nhóm QCVN | Dropdown | init-data P/W/R/I/S |
| code | Mã biển | Text code | lock on edit · keep case |
| name | Nội dung | Text | VN SSOT |
| nameEn | Tên EN | Text | no extra translate |
| shape | Hình dạng | Text | |
| width/height | Rộng/Dài | Text | catalog size ≠ install |
| icon | Icon | Text URL/path | NULL default |
| isActive | Hiệu lực | Switch | |
| trafficSignTypeCode | Consumer mã | SearchInput | catalogKind=traffic-sign-type |

## Screens / zones (ids only)
- Kind B: A header · B filter · C grid · D pager · Form Slideout C/E/V/Copy
- mfeStdUrl=http://localhost:9318/mas/loai-bien-bao
- reviewUrl= (Design)

## API / tasks (ids only)
- FormMode↔API: list/search/init/CRUD `web-bff/api/v1/integration/traffic-sign-types`
- real-data §A+§B: PASS
- T-*: (TL after SA)

## UNCLEAR
- none (gaps listed — not blocking handoff PO)

## Full paths (Read only if needed)
- control-hint: `D:/AI-QLBD/Linm.RMMS.Data/specs/_data-analy/features/traffic-sign-type-control-hint.md`
- real-data: `D:/AI-QLBD/Linm.RMMS.Data/specs/_data-analy/features/traffic-sign-type-real-data.md`
- context: `D:/AI-QLBD/Linm.RMMS.Data/docs/context/features/traffic-sign-type.md`
- STATUS: `D:/AI-QLBD/Linm.RMMS.Data/specs/traffic-sign-type/STATUS.md`
