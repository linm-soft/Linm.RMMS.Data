# Handoff compact — design

schemaVersion: 1
feature: csdl-so-10
packKind: map
role: design
status: done
skillVersion: 2026.08.25.01
workflowVersion: 2026.09.05.03
rulesVersion: 2026.09.05.8
writtenAt: 2026-09-06T00:45:00.000Z
changeScope: new_page
taskId: task_7d13ee8d
resource: route-strip-maps
formNo: 10
IdCode: SO-
MapGateSlash: /agent-dev-oms-map
design_confirm: approve
shared_grid_example: v1
real_view_parity: v1
contentHash: sha256:e444b5c2b3c297fc9affd2c72aae7f06378eab566c213c88cbdc972a10fae30a
headerFingerprint: sha256:8d4cc58a120fddd4f98ee78c5876a4eecea942231f87b3df9d5e4ffc025e54ad
autoApprove: ON
e2eQa: ON (queued /agent-qa*)

## Decisions
- changeScope: new_page
- formPattern: Kind D Slideout `data-form-cols=2` footer_actions_only + Kind F map host→bar + list Kind B
- Control = controlHint · typed T-SO-10 · **cấm** detail*/col1–3
- Alias `/csdl-so-10` + hub `?resource=route-strip-maps` · title «Sổ 10 — Bình đồ duỗi thẳng tuyến»
- Filter-bar HARD 1 hàng · SearchText+🔍 · province/status/road/from/to · **cấm** nút Tìm
- Map P1 OMS · File stripImageUrl fallback empty geom · **cấm** Cesium · **cấm** OSM.org chip
- Q-* PO resolved · GAP-CSDL-ORG-01 DEFER P2 · XLS OUT · GAP-SO10-DM-01 SA
- design_confirm **approve** (autoApprove) · open Q: **none** (PostGIS = SA)

## Inventory (slim)
| id | label | controlHint | notes |
|----|-------|-------------|-------|
| search | Tìm | SearchTextInput | Zone B · 🔍 phải |
| province/status | Tỉnh/TT | Dropdown | LOOKUP_STATIC · tot/tb/kem/hong |
| roadCode | Đường | SearchInput | road-route |
| fromDate/toDate | Kỳ | Date | filter |
| code | Mã | Text ro | SO- |
| bookNo/contractor | Số quyển/thầu | Text | req |
| roadCode/roadName | Đường | SearchInput+display | req |
| kmFrom/kmTo | Km | Number | * |
| periodStart/End | Kỳ sổ | Date | start * |
| stripImageUrl | Ảnh BD | File | fallback |
| geometry | Bình đồ | Map | LineString · OMS |
| entries.* | Strip Km | Number/Dropdown/Text | T-SO-10 |

## Screens / zones (ids only)
- S-LIST DES-GRID-A · B · B-FILTER · C · D · F · H
- S-FORM-* DES-GRID-Z · DES-FORM-Z1–Z3 · DES-ENTRIES · DES-MAP-F · DES-MAP-BAR · LeaveConfirmModal
- S-HUB-ENTRY
- reviewUrl=`file:///D:/AI-QLBD/Linm.RMMS.Data/specs/csdl-so-10/ui/prototype/csdl-so-10-list-prototype.html`
- mfeStdUrl=`http://localhost:9301/csdl-so-10`
- peerStdUrl=`http://localhost:9301/so-ts/csdl-so-sach?resource=route-strip-maps`
- prototype=`specs/csdl-so-10/ui/prototype/csdl-so-10-list-prototype.html`
- Grid AC G-01…G-10 · Map AC M-01…M-12

## API / tasks (ids only)
- FormMode↔API: C/E/V/Copy ↔ POST/PUT/GET/DELETE `…/csdl-records?resource=route-strip-maps`
- T-SO-10 · Dev `/agent-dev-oms-map` R1–R11
- Next: **SA** Schema_CsdlSo10 · seed · DOMAIN-MAP · geom

## UNCLEAR
- none (SA owns PostGIS detail Q-GEOM)

## Full paths (Read only if needed)
- design: `D:/AI-QLBD/Linm.RMMS.Data/specs/csdl-so-10/ui/design.md`
- control-hint: `D:/AI-QLBD/Linm.RMMS.Data/specs/_data-analy/features/csdl-so-10-control-hint.md`
- real-data: `D:/AI-QLBD/Linm.RMMS.Data/specs/_data-analy/features/csdl-so-10-real-data.md`
- prior po: `D:/AI-QLBD/Linm.RMMS.Data/specs/csdl-so-10/handoff/po-compact.md`
- STATUS: `D:/AI-QLBD/Linm.RMMS.Data/specs/csdl-so-10/STATUS.md`

## Cấm (compact)
Demo/LS SSOT · ERP.* · Guid IdCode · Col1–3 only · Cesium · OSM.org chip · yarn build/e2e/start:std · re-scan demo · paste HTML
