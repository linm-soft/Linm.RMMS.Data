# Handoff compact — sa · csdl-so-10

schemaVersion: 1
feature: csdl-so-10
packKind: map
role: sa
status: done
skillVersion: 2026.08.25.01
workflowVersion: 2026.09.05.03
rulesVersion: 2026.09.05.8
writtenAt: 2026-09-06T00:43:16.088Z
changeScope: new_page
taskId: task_70d802d8
resource: route-strip-maps
formNo: 10
IdCode: SO-
MapGateSlash: /agent-dev-oms-map
formPattern: Kind D Slideout 2col + Kind F map host→bar + list Kind B · entries inline_grid T-SO-10
solution_confirm: approve (autoApprove ON)
domain: Asset · api/v1/asset/csdl-records
bff: proxy only · web-bff/api/v1/asset/csdl-records
entity: shell CsdlCatalogRecordEntity + typed CsdlSo10Entity · rmms_csdl_so10 · widen CsdlBookEntryEntity · Schema_CsdlSo10
geom: jsonb GeoJSON P1 · GeomType+Srid · PostGIS DEFER P2 (GAP-SO10-POSTGIS-02)
sa_tz_gate: tz_list_and_form
sa_xco_gate: xco_get_only
sa_shared_table: share_tenant
contentHashPrior: sha256:e444b5c2b3c297fc9affd2c72aae7f06378eab566c213c88cbdc972a10fae30a
headerFingerprintPrior: sha256:8d4cc58a120fddd4f98ee78c5876a4eecea942231f87b3df9d5e4ffc025e54ad
autoApprove: ON
e2eQa: ON (queued /agent-qa*)

## Decisions
- changeScope=new_page · packKind=map · Kind B+D+F · typed T-SO-10 · cấm detail*/col1–3 only
- API giữ api/v1/asset/csdl-records · BFF proxy · cấm ERP.* · cấm invent gis/infra/so-ts
- Persist: shell + Schema_CsdlSo10 1:1 (Contractor·Period·Geometry jsonb·GeomType·Srid·StripImageUrl) + widen entries strip · cấm parent *Json inventory
- Q-GEOM: jsonb P1 · PostGIS DEFER · Q-SO10 File fallback empty geom · cấm Cesium P1
- Alias /csdl-so-10 + hub · road-route SearchInput P1 · org DEFER P2 · XLS OUT
- Gates: tz_list_and_form · xco_get_only · share_tenant
- DOMAIN-MAP add csdl-so-10→Asset (T-DM-01)
- open questions: none

## Inventory (slim)
| id | label | controlHint | write |
|----|-------|-------------|-------|
| search | Tìm | SearchTextInput | filter |
| province/status | Tỉnh/TT | Dropdown | shell LOOKUP_STATIC |
| roadCode | Đường | SearchInput | shell + road-route |
| fromDate/toDate | Kỳ | Date | filter period · TZ |
| code | Mã | Text ro | shell SO- |
| bookNo/contractor | Số quyển/Thầu | Text | shell / typed req |
| kmFrom/kmTo | Km | Number | shell · bbox |
| periodStart/End | Kỳ sổ | Date | typed · TZ |
| geometry | Bình đồ | Map | typed jsonb · OMS |
| stripImageUrl | Ảnh BD | File | typed fallback |
| entries.* | Strip Km | Number/Dropdown/Text | entry widen T-SO-10 |

## Screens / zones (ids only)
- S-LIST · S-FORM-C/E/V/Copy · S-ENTRIES · S-MAP · S-MAP-FALLBACK · S-ACT-DELETE · S-HUB-ENTRY
- mfeStdUrl=http://localhost:9301/csdl-so-10
- hub=http://localhost:9301/so-ts/csdl-so-sach?resource=route-strip-maps
- reviewUrl=file:///D:/AI-QLBD/Linm.RMMS.Data/specs/csdl-so-10/ui/prototype/csdl-so-10-list-prototype.html
- Grid AC G-01…G-10 · Map AC M-01…M-12

## API / tasks (ids only)
- FormMode↔API: list/C/E/V/Copy/map ↔ GET/POST/PUT · soft DELETE · LKP road-route · FILE stripImageUrl
- T-DM-01 · T-BE-01..05 · T-BFF-01 · T-FE-01..07 · T-FE-MAP-01/02 · T-OUT-01 → TL

## UNCLEAR
- none

## Full paths
- solution: D:/AI-QLBD/Linm.RMMS.Data/specs/csdl-so-10/be/solution-discovery.md
- design: D:/AI-QLBD/Linm.RMMS.Data/specs/csdl-so-10/ui/design.md
- prior compact: handoff/design-compact.md · po-compact.md · data_analy-compact.md
- STATUS: D:/AI-QLBD/Linm.RMMS.Data/specs/csdl-so-10/STATUS.md

## Next
| Role | Need |
|------|------|
| TL | task/csdl-so-10.md · T-* · gates · MapGateSlash |
| Dev | Schema_CsdlSo10 · typed DTO · seed · alias · Slideout · Kind F /agent-dev-oms-map |
| QA | Grid+Map AC · e2e queued /agent-qa* |

## Cấm (compact)
ERP.* · invent API · detail*/col1–3 only · Guid IdCode · Cesium · parent *Json inventory · Step 4b/migration/e2e/build/start:std @ SA · Write MFE · re-scan demo
