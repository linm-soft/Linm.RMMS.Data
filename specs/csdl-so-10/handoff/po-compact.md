# Handoff compact — po

schemaVersion: 1
feature: csdl-so-10
packKind: map
role: po
status: done
skillVersion: 2026.08.25.01
workflowVersion: 2026.09.05.03
rulesVersion: 2026.09.05.8
writtenAt: 2026-09-06T00:35:00.000Z
changeScope: new_page
taskId: task_c1402f06
resource: route-strip-maps
formNo: 10
IdCode: SO-
MapGateSlash: /agent-dev-oms-map
contentHash: sha256:e444b5c2b3c297fc9affd2c72aae7f06378eab566c213c88cbdc972a10fae30a
headerFingerprint: sha256:8d4cc58a120fddd4f98ee78c5876a4eecea942231f87b3df9d5e4ffc025e54ad
autoApprove: ON
e2eQa: ON (queued /agent-qa*)

## Decisions
- changeScope: new_page
- formPattern: Kind D Slideout/dock + Kind F map host (list Kind B)
- packKind: **map** confirm · Grid AC + Map AC + Leave
- mfe: `Linm.Web.RMMS.Asset` · `/csdl-so-10` · hub `?resource=route-strip-maps`
- be: `Linm.RMMS.WebService` · `api/v1/asset/csdl-records?resource=route-strip-maps` · **cấm ERP.***
- open Q: resolved (autoApprove) — see below

## Inventory (slim)
| id | label | controlHint | notes |
|----|-------|-------------|-------|
| roadCode | Đường | SearchInput | road-route |
| province | Tỉnh | Dropdown | keep_static P1 |
| status | TT | Dropdown | tot\|tb\|kem\|hong |
| bookNo | Số quyển | Text | header * |
| contractor | Nhà thầu | Text | org SearchInput P2 |
| kmFrom/kmTo | Lý trình | Number | * |
| periodStart/End | Kỳ | Date | * |
| geometry | Bình đồ | Map | LineString · OSRM |
| stripImageUrl | Ảnh BD | File | fallback Q-SO10 |
| entries.* | Strip Km | Number/Dropdown/Text | T-SO-10 |

## Screens / zones (ids only)
- Entry hub card / `/csdl-so-10`
- List A–D · Form Z1–Z3 Slideout · Entries inline_grid · Map Kind F host→bar
- reviewUrl= (Design) · peerStdUrl= hub `?resource=route-strip-maps`
- Grid AC G-01…G-10 · Map AC M-01…M-12 · LeaveConfirm dirty form+draw

## Open Q — resolved
| Q | Decision |
|---|----------|
| Q-SO10 | Map OMS P1 · File fallback khi empty geom |
| Q-ALIGN | thang\|cong LOOKUP_STATIC |
| Q-STRUCT | none\|cau\|ham\|cong |
| Q-SURF | tot\|tb\|kem |
| Q-PROV | keep_static · master P2 |
| Q-ORG | Text P1 · SearchInput P2 |
| Q-GEOM | jsonb shell P1 · PostGIS = SA |

## GAP P1 / DEFER / OUT
| ID | P1 |
|----|-----|
| GAP-SO10-RES/TYPED/MAP/ROUTE/DM/FALLBACK | YES |
| GAP-CSDL-ROAD/PROV/CUC-03/05/10 | YES |
| GAP-CSDL-ORG-01 | DEFER P2 |
| GAP-CSDL-XLS-01 | OUT |
| GAP-DA-MAP-01 | closed |

## API / tasks (ids only)
- FormMode↔API: C/E/V/Copy ↔ POST/PUT/GET/DELETE `…/csdl-records?resource=route-strip-maps`
- T-SO-10 · Dev `/agent-dev-oms-map` R1–R11

## UNCLEAR
- none (PO resolved · SA owns PostGIS detail)

## Full paths (Read only if needed)
- requirement: `D:/AI-QLBD/Linm.RMMS.Data/specs/csdl-so-10/po/requirement.md`
- control-hint: `D:/AI-QLBD/Linm.RMMS.Data/specs/_data-analy/features/csdl-so-10-control-hint.md`
- real-data: `D:/AI-QLBD/Linm.RMMS.Data/specs/_data-analy/features/csdl-so-10-real-data.md`
- prior compact: `D:/AI-QLBD/Linm.RMMS.Data/specs/csdl-so-10/handoff/data_analy-compact.md`
- STATUS: `D:/AI-QLBD/Linm.RMMS.Data/specs/csdl-so-10/STATUS.md`
- design/sa/task/implement/qa: pending

## Next
| Role | Need |
|------|------|
| **Design** | control-map · Kind F chrome · prototype typed · reviewUrl · filter-bar HARD |
| SA | Schema_CsdlSo10 · geom · seed · DOMAIN-MAP |
| TL/Dev | `/agent-dev-oms-map` · alias page + typed + map |
| QA | Grid+Map AC · e2e queued |

## Cấm (compact)
Demo/LS SSOT · ERP.* · Guid IdCode · detail*/col1–3 only · Cesium · yarn build/e2e/start:std ở PO · re-scan demo
