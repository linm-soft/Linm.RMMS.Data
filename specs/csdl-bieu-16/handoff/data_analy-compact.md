# handoff-compact — data_analy · csdl-bieu-16

| | |
|--|--|
| schemaVersion | `1` |
| role | `data_analy` |
| feature | `csdl-bieu-16` |
| title | CSDL Biểu 16 — Nút giao |
| packKind | `list` |
| changeScope | `new_page` |
| status | `done` |
| taskId | `task_70fe1d76` |
| resource | `interchanges` |
| formNo | `16` |
| columns | `39` |
| IdCode | `IX-` |
| peerSoTs | `so-ts-interchange` · **cấm** merge |
| contentHash | `sha256:56e2fb16e9bcde21f17d7e9639b72660666778f5393b1270cecc49d123beba4b` |
| headerFingerprint | `sha256:ec787bf2008ae89f1b6c085fe238f1b0d50b048f5c672b90b68d9ea102cf8fcc` |
| skillVersion | `2026.08.25.01` |
| workflowVersion | `2026.09.01.02` |
| rulesVersion | `2026.08.31.2` |
| analyzedAt | `2026-09-05T16:01:30.000Z` |

## Artifacts

| Kind | Path |
|------|------|
| control-hint | `specs/_data-analy/features/csdl-bieu-16-control-hint.md` |
| real-data | `specs/_data-analy/features/csdl-bieu-16-real-data.md` |
| CTX | `docs/context/features/csdl-bieu-16.md` |
| cluster | `specs/_data-analy/csdl-cuc-2026/ANALYSIS-AND-TASKS.md` |
| demo | `Linm.RMMS.Demo/src/demo/features/csdl-so-sach-demo.html` → `…/asset/csdl-so-sach.html` |

## Live bind (1-liner)

- API: `api/v1/asset/csdl-records?resource=interchanges` (+ BFF) · **cấm ERP.*** · **cấm** invent `infra` · **cấm** bind peer `road-assets` / so-ts-interchange
- Entry: mfeStd `/csdl-bieu-16` · hub `/so-ts/csdl-so-sach?resource=interchanges` (**NEW card**)
- Form: Kind D Slideout typed **39 cột** · header + child `branches[]` + ATGT · **cấm** chỉ 3 ô `detail*`
- Import: XLS OUT pack Biểu 16
- Peer: so-ts-interchange · **cấm** merge

## Header (39)

`code|name|roadCode|roadName|province|kmMain|kmAux|interchangeType|trafficOrg|mainBedWidth|mainSurfaceWidth|mainMedianWidth|mainLaneCount|branchName|branchKmFrom|branchKmTo|branchSide|branchDirection|branchLength|branchBedWidth|branchSurfaceWidth|branchMedianWidth|branchRadius|atgtSign|atgtMarking|atgtIsland|atgtLight|status|yearBuilt|manageUnit|notes|lat|lng|updatedBy|updatedAt|isActive|branchCount|formNo|side`

Runtime: `branch*` Excel flatten → child grid `branches[]` (**GAP-CSDL-CUC-09**).

## GAP (PO must see)

| ID | One-liner |
|----|-----------|
| GAP-BIEU16-HUB-01 | NEW hub card · resource interchanges |
| GAP-BIEU16-TYPED-01 | Typed 39 cột thay generic detail* |
| GAP-BIEU16-ROUTE-01 | Alias `/csdl-bieu-16` vs hub-only |
| GAP-BIEU16-BRANCH-01 | Child `branches[]` 1–n · cấm flatten-only |
| GAP-BIEU16-TYPE-01 | interchangeType LOOKUP |
| GAP-BIEU16-MAIN-01 | B nền/mặt/KC + số làn tuyến chính |
| GAP-BIEU16-ATGT-01 | ATGT biển/vạch/đảo/đèn |
| GAP-BIEU16-KM-01 | kmMain + kmAux (điểm nút) |
| GAP-BIEU16-DB-01 | DB SSOT thiếu § Biểu 16 · Schema_CsdlBieu16 |
| GAP-BIEU16-DMAP-01 | DOMAIN-MAP thiếu slug csdl-bieu-16 |
| GAP-CSDL-CUC-05 | Biểu 16 resource MISSING → đóng khi hub+API PASS |
| GAP-CSDL-CUC-09 | Nhánh tách/nhập 1–n bắt buộc |
| GAP-CSDL-ROAD-01 | SearchInput road-route |
| GAP-CSDL-PROV-01 | Province static vs master |
| GAP-CSDL-ORG-01 | manageUnit SearchInput org-unit P2 |
| GAP-CSDL-XLS-01 | Import/export sheet Biểu 16 OUT |
| GAP-CSDL-CUC-11 | ≠ Sổ TS · cấm merge so-ts-interchange |

## Open Q

Q-ROUTE · Q-PROV · Q-TYPE-SET · Q-TRAFFIC-ORG · Q-ATGT · Q-BRANCH-MIN · Q-KM · Q-MANAGE · Q-PREFIX · Q-LIST-COLS · Q-TITLE · Q-DMAP · Q-PEER-LINK · Q-CHILD-API

## Zones

List A/B/C/D Kind B · Form Kind D Slideout 2col Z1–Z3 · section định danh + đặc trưng nút + child nhánh + ATGT · map: none

## Next

| Role | Need |
|------|------|
| **PO** | requirement từ Delta + open Q |
| Design | control-map · prototype 39 cột + child grid · hub card · reviewUrl |
| SA | typed DTO/UiSchema · Schema_CsdlBieu16 + Branch · register resource · DOMAIN-MAP slug |

## Cấm (compact)

ERP.* · invent `infra` · demo SSOT · form 3 ô detail* · flatten-only 1 nhánh · merge so-ts-interchange/road-assets · Guid IdCode · yarn build/e2e @ data_analy
