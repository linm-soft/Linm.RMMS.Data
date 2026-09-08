# handoff-compact — data_analy · csdl-bieu-15

| | |
|--|--|
| schemaVersion | `1` |
| role | `data_analy` |
| feature | `csdl-bieu-15` |
| title | CSDL Biểu 15 — TMC / thu phí / hạt / kho |
| packKind | `list` |
| changeScope | `new_page` |
| status | `done` |
| taskId | `task_23453ac3` |
| resource | `ops-facilities` |
| formNo | `15` |
| columns | `20` |
| IdCode | `OF-` |
| peerSoTs | `so-ts-toll` · `so-ts-rest-area` · `so-ts-station-house` · **cấm** merge |
| contentHash | `sha256:3bf356f00182dd6c0864bf5b88ae4d460ef8da73e5521f1b14756b7168dc20a7` |
| headerFingerprint | `sha256:0064a4903777f7ea8d51c7423d8451a20daf77a5934929001905edaa380f4fe4` |
| skillVersion | `2026.08.25.01` |
| workflowVersion | `2026.09.01.02` |
| rulesVersion | `2026.08.31.2` |
| analyzedAt | `2026-09-05T15:17:00.000Z` |

## Artifacts

| Kind | Path |
|------|------|
| control-hint | `specs/_data-analy/features/csdl-bieu-15-control-hint.md` |
| real-data | `specs/_data-analy/features/csdl-bieu-15-real-data.md` |
| CTX | `docs/context/features/csdl-bieu-15.md` |
| cluster | `specs/_data-analy/csdl-cuc-2026/ANALYSIS-AND-TASKS.md` |
| demo | `Linm.RMMS.Demo/src/demo/features/csdl-so-sach-demo.html` → `…/asset/csdl-so-sach.html` |

## Live bind (1-liner)

- API: `api/v1/asset/csdl-records?resource=ops-facilities` (+ BFF) · **cấm ERP.*** · **cấm** invent `infra` · **cấm** bind peer `road-assets` / so-ts-*
- Entry: mfeStd `/csdl-bieu-15` · hub `/so-ts/csdl-so-sach?resource=ops-facilities` (**NEW card**)
- Form: Kind D Slideout typed **20 cột** · facility + area + equipment · **cấm** chỉ 3 ô `detail*`
- Import: XLS OUT pack Biểu 15
- Peer: so-ts-toll / rest-area / station-house · **cấm** merge

## Header (20)

`code|roadCode|roadName|province|kmFrom|kmTo|facilityKind|facilityName|courtyardAreaM2|buildingQty|buildingAreaM2|otherStructQty|otherStructAreaM2|status|yearBuilt|equipmentKind|equipmentQty|equipmentStatus|manageUnit|notes`

## GAP (PO must see)

| ID | One-liner |
|----|-----------|
| GAP-BIEU15-HUB-01 | NEW hub card · resource ops-facilities |
| GAP-BIEU15-TYPED-01 | Typed 20 cột thay generic detail* |
| GAP-BIEU15-ROUTE-01 | Alias `/csdl-bieu-15` vs hub-only |
| GAP-BIEU15-KIND-01 | facilityKind 5 loại TMC/thu phí/dừng chân/nhà hạt/kho |
| GAP-BIEU15-AREA-01 | courtyard + nhà SL/DT + KT khác SL/DT |
| GAP-BIEU15-EQ-01 | equipmentKind · qty · status |
| GAP-BIEU15-STATUS-01 | status TT · yearBuilt |
| GAP-BIEU15-DB-01 | DB SSOT thiếu § Biểu 15 · Schema_CsdlBieu15 |
| GAP-BIEU15-DMAP-01 | DOMAIN-MAP thiếu slug csdl-bieu-15 |
| GAP-CSDL-CUC-05 | Biểu 15 resource MISSING → đóng khi hub+API PASS |
| GAP-CSDL-ROAD-01 | SearchInput road-route |
| GAP-CSDL-PROV-01 | Province static vs master |
| GAP-CSDL-ORG-01 | manageUnit SearchInput org-unit P2 |
| GAP-CSDL-XLS-01 | Import/export sheet Biểu 15 OUT |
| GAP-CSDL-CUC-11 | ≠ Sổ TS · cấm merge so-ts-toll/rest/station |

## Open Q

Q-ROUTE · Q-PROV · Q-KIND-SET · Q-EQ-SET · Q-AREA-UNIT · Q-MANAGE · Q-PREFIX · Q-LIST-COLS · Q-TITLE · Q-DMAP · Q-PEER-LINK · Q-KM

## Zones

List A/B/C/D Kind B · Form Kind D Slideout 2col Z1–Z3 · section vị trí + công trình + thiết bị · map: none

## Next

| Role | Need |
|------|------|
| **PO** | requirement từ Delta + open Q |
| Design | control-map · prototype 20 cột · hub card · reviewUrl |
| SA | typed DTO/UiSchema · Schema_CsdlBieu15 · register resource · DOMAIN-MAP slug |

## Cấm (compact)

ERP.* · invent `infra` · demo SSOT · form 3 ô detail* · merge so-ts-toll/rest/station/road-assets · Guid IdCode · yarn build/e2e @ data_analy
