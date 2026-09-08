# handoff-compact — data_analy · csdl-bieu-14

| | |
|--|--|
| schemaVersion | `1` |
| role | `data_analy` |
| feature | `csdl-bieu-14` |
| title | CSDL Biểu 14 — Hệ thống ITS (GTTM) |
| packKind | `list` |
| changeScope | `new_page` |
| status | `done` |
| taskId | `task_db0e2ea1` |
| resource | `its-systems` |
| formNo | `14` |
| columns | `21` |
| IdCode | `IT-` |
| peerSoTs | `so-ts-its-camera` · **cấm** merge |
| contentHash | `sha256:6cfdefa3baaffcf2bd97c7a429bb5043e7f9d77b96bbb77eafaa34689007b112` |
| headerFingerprint | `sha256:14cd156a898dcc971a072dd1cd1b92460a8b597558a90dc9854fead9d4c4de5c` |
| skillVersion | `2026.08.25.01` |
| workflowVersion | `2026.09.01.02` |
| rulesVersion | `2026.08.31.2` |
| analyzedAt | `2026-09-05T14:30:00.000Z` |

## Artifacts

| Kind | Path |
|------|------|
| control-hint | `specs/_data-analy/features/csdl-bieu-14-control-hint.md` |
| real-data | `specs/_data-analy/features/csdl-bieu-14-real-data.md` |
| CTX | `docs/context/features/csdl-bieu-14.md` |
| cluster | `specs/_data-analy/csdl-cuc-2026/ANALYSIS-AND-TASKS.md` |
| demo | `Linm.RMMS.Demo/src/demo/features/csdl-so-sach-demo.html` → `…/asset/csdl-so-sach.html` |

## Live bind (1-liner)

- API: `api/v1/asset/csdl-records?resource=its-systems` (+ BFF) · **cấm ERP.*** · **cấm** invent `infra` · **cấm** bind peer `road-assets` / ITS AiVision
- Entry: mfeStd `/csdl-bieu-14` · hub `/so-ts/csdl-so-sach?resource=its-systems` (**NEW card**)
- Form: Kind D Slideout typed **21 cột** · device + infra + GPS · **cấm** chỉ 3 ô `detail*`
- Import: XLS OUT pack Biểu 14
- Peer: `so-ts-its-camera` · **cấm** merge

## Header (21)

`code|roadCode|roadName|province|kmFrom|kmTo|side|direction|gpsLat|gpsLng|deviceType|brand|techSpec|qtyOrLength|operatingStatus|infraKind|clearanceM|infraQty|systemStatus|yearBuilt|notes`

## GAP (PO must see)

| ID | One-liner |
|----|-----------|
| GAP-BIEU14-HUB-01 | NEW hub card · resource its-systems |
| GAP-BIEU14-TYPED-01 | Typed 21 cột thay generic detail* |
| GAP-BIEU14-ROUTE-01 | Alias `/csdl-bieu-14` vs hub-only |
| GAP-BIEU14-DEV-01 | deviceType · brand · techSpec · qtyOrLength · operatingStatus |
| GAP-BIEU14-INFRA-01 | infraKind · clearanceM · infraQty · systemStatus · yearBuilt |
| GAP-BIEU14-GPS-01 | gpsLat · gpsLng Number |
| GAP-BIEU14-DIR-01 | direction · side LOOKUP |
| GAP-BIEU14-DB-01 | DB SSOT thiếu § Biểu 14 · Schema_CsdlBieu14 |
| GAP-BIEU14-DMAP-01 | DOMAIN-MAP thiếu slug csdl-bieu-14 |
| GAP-BIEU14-PEER-ITS-01 | ≠ its-traffic-detect / its-anpr-overload |
| GAP-CSDL-CUC-05 | Biểu 14 resource MISSING → đóng khi hub+API PASS |
| GAP-CSDL-ROAD-01 | SearchInput road-route |
| GAP-CSDL-PROV-01 | Province static vs master |
| GAP-CSDL-ORG-01 | manageUnit SearchInput org-unit P2 |
| GAP-CSDL-XLS-01 | Import/export sheet Biểu 14 OUT |
| GAP-CSDL-CUC-11 | ≠ Sổ TS · cấm merge so-ts-its-camera |

## Open Q

Q-ROUTE · Q-PROV · Q-DIR · Q-QTY-UNIT · Q-DEVICE-SET · Q-INFRA-SET · Q-MANAGE · Q-PREFIX · Q-LIST-COLS · Q-TITLE · Q-DMAP · Q-PEER-LINK · Q-SO09

## Zones

List A/B/C/D Kind B · Form Kind D Slideout 2col Z1–Z3 · section thiết bị + hạ tầng · map: none

## Next

| Role | Need |
|------|------|
| **PO** | requirement từ Delta + open Q |
| Design | control-map · prototype 21 cột · hub card · reviewUrl |
| SA | typed DTO/UiSchema · Schema_CsdlBieu14 · register resource · DOMAIN-MAP slug |

## Cấm (compact)

ERP.* · invent `infra` · demo SSOT · form 3 ô detail* · merge so-ts-its-camera/road-assets/ITS AiVision · Guid IdCode · yarn build/e2e @ data_analy
