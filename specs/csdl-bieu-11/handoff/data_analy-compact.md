# handoff-compact — data_analy · csdl-bieu-11

| | |
|--|--|
| schemaVersion | `1` |
| role | `data_analy` |
| feature | `csdl-bieu-11` |
| title | CSDL Biểu 11 — Chiếu sáng |
| packKind | `list` |
| changeScope | `new_page` |
| status | `done` |
| taskId | `task_ed491c32` |
| resource | `lighting-systems` |
| formNo | `11` |
| columns | `24` |
| IdCode | `LT-` |
| peerSoTs | `so-ts-lighting` (deep-link · ≠ merge · qty ≠ điểm) |
| contentHash | `sha256:7980db07b4712336ab0b675fa89feaab75c67fdaef3b54fe94647ab9ec1863d8` |
| headerFingerprint | `sha256:b37759a9224c09c7c63bc81583b4a9bcbca02e74cba8b63579819e90d57f1d1a` |
| skillVersion | `2026.08.25.01` |
| workflowVersion | `2026.09.01.02` |
| rulesVersion | `2026.08.31.2` |
| analyzedAt | `2026-09-05T12:11:10.761Z` |

## Artifacts

| Kind | Path |
|------|------|
| control-hint | `specs/_data-analy/features/csdl-bieu-11-control-hint.md` |
| real-data | `specs/_data-analy/features/csdl-bieu-11-real-data.md` |
| CTX | `docs/context/features/csdl-bieu-11.md` |
| cluster | `specs/_data-analy/csdl-cuc-2026/ANALYSIS-AND-TASKS.md` |
| demo | `Linm.RMMS.Demo/src/demo/features/csdl-so-sach-demo.html` → `…/asset/csdl-so-sach.html` |

## Live bind (1-liner)

- API: `api/v1/asset/csdl-records?resource=lighting-systems` (+ BFF) · **cấm ERP.*** · **cấm** invent `infra`
- Entry: mfeStd `/csdl-bieu-11` · hub `/so-ts/csdl-so-sach?resource=lighting-systems`
- Form: Kind D Slideout typed 24 cột · section lưới + NLMT · **cấm** chỉ 3 ô `detail*`
- Import: XLS OUT pack Biểu 11
- Peer `so-ts-lighting` deep-link OK · **cấm** merge 1 form · bucket qty ≠ dump điểm

## Header (24)

`code|roadCode|roadName|province|kmFrom|kmTo|side|gridLed600|gridLed240|gridLed150|gridLed125|gridStatus|gridPoleCount|cabinetCount|substationCount|solarPoleCount|solarControllerCount|solarPanel240Wp|solarLamp100W|solarBattery145Ah|solarCabinetCount|status|manageUnit|notes`

## GAP (PO must see)

| ID | One-liner |
|----|-----------|
| GAP-BIEU11-TYPED-01 | Typed 24 cột thay generic detail* |
| GAP-BIEU11-ROUTE-01 | Alias `/csdl-bieu-11` vs hub-only |
| GAP-BIEU11-GRID-01 | LED 600/240/150/125 qty Number |
| GAP-BIEU11-GRID-STATUS-01 | gridStatus LOOKUP |
| GAP-BIEU11-GRID-QTY-01 | cột / tủ / TBA typed |
| GAP-BIEU11-SOLAR-01 | NLMT 6 field qty |
| GAP-BIEU11-BLOCK-01 | 2 section lưới + NLMT |
| GAP-CSDL-ROAD-01 | SearchInput road-route |
| GAP-CSDL-PROV-01 | Province static vs master |
| GAP-CSDL-ORG-01 | manageUnit SearchInput org-unit P2 |
| GAP-CSDL-XLS-01 | Import/export sheet Biểu 11 OUT |
| GAP-CSDL-CUC-11 | ≠ Sổ TS · ROW riêng · qty ≠ điểm |

## Open Q

Q-ROUTE · Q-PROV · Q-GRID-STATUS · Q-LED-ZERO · Q-SOLAR-REQ · Q-CABINET · Q-LIST-COLS · Q-PEER · Q-TITLE

## Zones

List A/B/C/D Kind B · Form Kind D Slideout 2col Z1–Z3 · 2 section · map: none

## Next

| Role | Need |
|------|------|
| **PO** | requirement từ Delta + open Q |
| Design | control-map · prototype 24 cột · reviewUrl |
| SA | typed DTO/UiSchema · Schema_CsdlBieu11 |

## Cấm (compact)

ERP.* · invent `infra` · demo SSOT · form 3 ô detail* · merge so-ts-lighting · Guid IdCode · yarn build/e2e @ data_analy
