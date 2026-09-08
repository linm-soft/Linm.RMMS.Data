# handoff-compact — data_analy · csdl-bieu-03

| | |
|--|--|
| schemaVersion | `1` |
| role | `data_analy` |
| feature | `csdl-bieu-03` |
| title | CSDL Biểu 03 — Hầm đường bộ |
| packKind | `list` |
| changeScope | `new_page` |
| status | `done` |
| taskId | `task_df175ffd` |
| resource | `road-tunnels` |
| formNo | `03` |
| columns | `42` |
| IdCode | `TN-` |
| peerSoTs | none (—) · Sổ 6 QL cầu/hầm deep-link only |
| contentHash | `sha256:2c03537918bbda56c29e1e1ef98cc081cc4e72c94447a1ac2f87f06bd6f9310e` |
| headerFingerprint | `sha256:60f7ea4153b5853222bdeaf2679929a6e4c5b66b6973bcfe12e5bd9dd3fcfbcc` |
| skillVersion | `2026.08.25.01` |
| workflowVersion | `2026.09.01.02` |
| rulesVersion | `2026.08.31.2` |
| analyzedAt | `2026-09-05T08:40:00.000Z` |

## Artifacts

| Kind | Path |
|------|------|
| control-hint | `specs/_data-analy/features/csdl-bieu-03-control-hint.md` |
| real-data | `specs/_data-analy/features/csdl-bieu-03-real-data.md` |
| CTX | `docs/context/features/csdl-bieu-03.md` |
| cluster | `specs/_data-analy/csdl-cuc-2026/ANALYSIS-AND-TASKS.md` |
| demo | `Linm.RMMS.Demo/src/demo/features/csdl-so-sach-demo.html` → `…/asset/csdl-so-sach.html` |

## Live bind (1-liner)

- API: `api/v1/asset/csdl-records?resource=road-tunnels` (+ BFF) · **cấm ERP.*** · **cấm** invent `infra`
- Entry: mfeStd `/csdl-bieu-03` · hub `/so-ts/csdl-so-sach?resource=road-tunnels`
- Form: Kind D Slideout typed 42 cột · GPS 3 điểm · **2 ống = 2 bản ghi** · **cấm** chỉ 3 ô `detail*`
- Import: sheet Biểu 3 · XLS OUT pack
- Peer Sổ 6 deep-link OK · **cấm** merge 1 form

## GAP (PO must see)

| ID | One-liner |
|----|-----------|
| GAP-BIEU03-TYPED-01 | Typed 42 cột thay generic detail* |
| GAP-BIEU03-ROUTE-01 | Alias `/csdl-bieu-03` vs hub-only |
| GAP-BIEU03-GPS-01 | GPS 3 điểm lat/lng×3 |
| GAP-BIEU03-TUBE-01 | 2 ống = 2 bản ghi GPS (+ tubeIndex) |
| GAP-BIEU03-STRUCT-01 | Loại xuyên · cấp · vỏ · tĩnh không · khổ · mặt đường |
| GAP-BIEU03-DRAIN-01 | Thoát nước dài+KC · lề trong hầm |
| GAP-BIEU03-FIRE-01 | PCCC · quạt · đèn · CCTV/VMS |
| GAP-BIEU03-VENT-01 | ventilationType / designLoad shape — SA |
| GAP-BIEU03-PEER-01 | Không merge Sổ 6 |
| GAP-BIEU03-DMAP-01 | DOMAIN-MAP thêm `csdl-bieu-03` |
| GAP-CSDL-ROAD-01 | SearchInput road-route |
| GAP-CSDL-PROV-01 | Province static vs master |
| GAP-CSDL-ORG-01 | manageUnit org-unit P2 |
| GAP-CSDL-XLS-01 | Import/export sheet Biểu 3 OUT |

## Open Q

Q-GPS · Q-TUBE · Q-VENT · Q-ROUTE · Q-PROV · Q-SECTION

## Zones

List A/B/C/D Kind B · Form Kind D Slideout 2col Z1–Z3 (sections GPS/kết cấu/thoát+PCCC/thiết bị) · map: none

## Next

| Role | Need |
|------|------|
| **PO** | requirement từ Delta + open Q |
| Design | control-map · prototype 42 cột · reviewUrl |
| SA | typed DTO/UiSchema · Schema_CsdlBieu3 · GPS/TUBE/VENT |

## Cấm (compact)

Demo/localStorage SSOT · ERP.* · Guid IdCode · form 3 ô only · invent map · merge Sổ 6 · 1 row 2 bộ GPS · yarn build/e2e ở analy
