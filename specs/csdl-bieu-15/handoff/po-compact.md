# handoff-compact — po · csdl-bieu-15

| | |
|--|--|
| schemaVersion | `1` |
| role | `po` |
| feature | `csdl-bieu-15` |
| title | CSDL Biểu 15 — TMC / thu phí / hạt / kho |
| packKind | `list` |
| changeScope | `new_page` |
| status | `confirmed` |
| taskId | `task_a73f1c50` |
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
| confirmedAt | `2026-09-05T15:20:30.000Z` |

## Artifacts

| Kind | Path |
|------|------|
| requirement | `specs/csdl-bieu-15/po/requirement.md` |
| prior analy | `handoff/data_analy-compact.md` · control-hint · real-data |
| CTX | `docs/context/features/csdl-bieu-15.md` |

## Live bind (1-liner)

- API: `api/v1/asset/csdl-records?resource=ops-facilities` (+ BFF) · **cấm ERP.*** · **cấm** invent `infra` · **cấm** bind peer `road-assets` / so-ts-*
- Entry: mfeStd `/csdl-bieu-15` (**alias_now**) · hub `/so-ts/csdl-so-sach?resource=ops-facilities` (**NEW card**)
- Form: Kind D Slideout typed **20 cột** · 4 section · **cấm** chỉ 3 ô `detail*`
- Import: XLS OUT pack Biểu 15 · IdCode `OF-yyyyMMdd-nnnn`

## Header (20)

`code|roadCode|roadName|province|kmFrom|kmTo|facilityKind|facilityName|courtyardAreaM2|buildingQty|buildingAreaM2|otherStructQty|otherStructAreaM2|status|yearBuilt|equipmentKind|equipmentQty|equipmentStatus|manageUnit|notes`

## PO decisions (autoApprove)

| ID | Decision |
|----|----------|
| Q-ROUTE | alias_now |
| Q-PROV | keep_static |
| Q-KIND-SET | keep_5 (TMC/toll/rest/station/warehouse) |
| Q-EQ-SET | free_text |
| Q-AREA-UNIT | number_m2 |
| Q-MANAGE | in_20 · Text→org P2 |
| Q-PREFIX | OF |
| Q-LIST-COLS | subset |
| Q-TITLE | ctx_tmc |
| Q-DMAP | add_now |
| Q-PEER-LINK | none_p1 |
| Q-KM | range |

## Screens / AC

- List Kind B A–D · Form Kind D · Map none · Grid AC PASS · Report N/A
- Hub NEW card formNo 15 · empty «Chưa có cơ sở TMC / thu phí / hạt / kho»
- LeaveConfirmModal dirty · filter **cấm** nút Tìm riêng

## Zones

List A/B/C/D Kind B · Form Kind D Slideout 2col Z1–Z3 · sections vị trí + công trình + thiết bị + quản lý · map: none

## Next

| Role | Need |
|------|------|
| **Design** | control-map · prototype 20 cột · hub card · reviewUrl |
| SA | typed DTO/UiSchema · Schema_CsdlBieu15 · register resource · DOMAIN-MAP slug |

## Cấm (compact)

ERP.* · invent `infra` · form 3 ô detail* · merge so-ts-toll/rest/station/road-assets · Guid IdCode · demo SSOT · yarn build/e2e @ po
