# Handoff compact — data_analy

schemaVersion: 1
feature: csdl-so-10
packKind: map
role: data_analy
status: done
skillVersion: 2026.09.05.03
writtenAt: 2026-09-06T00:25:00.000Z
changeScope: new_page
taskId: task_7770663d
resource: route-strip-maps
formNo: 10
MapGateSlash: /agent-dev-oms-map
realDataFlags: §A=yes · §B=yes · §D=map · §E=none
contentHash: sha256:e444b5c2b3c297fc9affd2c72aae7f06378eab566c213c88cbdc972a10fae30a

## Decisions
- changeScope: new_page
- formPattern: Kind D Slideout/dock + Kind F map host (list Kind B)
- mfe: `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Asset` · mfeStdUrl `http://localhost:9301/csdl-so-10` · hub `/so-ts/csdl-so-sach?resource=route-strip-maps`
- be: `D:/AI-QLBD/Linm.RMMS.WebService` · `api/v1/asset/csdl-records` · **cấm ERP.*** / Domains/Master
- open questions: Q-SO10 · Q-ALIGN · Q-STRUCT · Q-SURF · Q-PROV · Q-ORG · Q-GEOM

## Inventory (slim)
| id | label | controlHint | notes |
|----|-------|-------------|-------|
| roadCode | Đường | SearchInput | road-route |
| province | Tỉnh | Dropdown | LOOKUP_STATIC |
| status | TT | Dropdown | LOOKUP_STATIC |
| bookNo | Số quyển | Text | header |
| contractor | Nhà thầu | Text→SearchInput | GAP-CSDL-ORG-01 |
| kmFrom/kmTo | Lý trình | Number | strip bbox |
| periodStart/End | Kỳ | Date | |
| geometry | Bình đồ | Map | LineString · OSRM |
| stripImageUrl | Ảnh BD | File | Q-SO10 fallback |
| entries.* | Strip Km | Number/Dropdown/Text | T-SO-10 cols |

## Screens / zones (ids only)
- Entry hub card / `/csdl-so-10`
- List A–D · Form Z1–Z3 · Entries grid · Map Kind F host→bar
- reviewUrl= (Design)
- peerStdUrl= http://localhost:9301/so-ts/csdl-so-sach?resource=route-strip-maps

## API / tasks (ids only)
- FormMode↔API: C/E/V/Copy ↔ POST/PUT/GET/DELETE `…/csdl-records?resource=route-strip-maps`
- T-SO-10 · GAP-SO10-RES/MAP/TYPED/DM · GAP-CSDL-CUC-05/10 · GAP-DA-MAP-01 closed
- Dev slash: `/agent-dev-oms-map` (R1–R11)

## UNCLEAR
- Q-SO10 map P1 vs ảnh fallback
- Q-ALIGN / Q-STRUCT / Q-SURF enums
- Q-GEOM jsonb vs PostGIS (SA)

## Full paths (Read only if needed)
- control-hint: `D:/AI-QLBD/Linm.RMMS.Data/specs/_data-analy/features/csdl-so-10-control-hint.md`
- real-data: `D:/AI-QLBD/Linm.RMMS.Data/specs/_data-analy/features/csdl-so-10-real-data.md`
- context: `D:/AI-QLBD/Linm.RMMS.Data/docs/context/features/csdl-so-10.md`
- STATUS: `D:/AI-QLBD/Linm.RMMS.Data/specs/csdl-so-10/STATUS.md`
- po/design/sa/task/implement/qa: pending
