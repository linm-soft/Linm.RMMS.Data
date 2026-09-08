# handoff-compact — po · csdl-bieu-16

| | |
|--|--|
| schemaVersion | `1` |
| role | `po` |
| feature | `csdl-bieu-16` |
| title | CSDL Biểu 16 — Nút giao |
| packKind | `list` |
| changeScope | `new_page` |
| status | `confirmed` |
| taskId | `task_593d435f` |
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
| confirmedAt | `2026-09-05T16:12:00.000Z` |

## Artifacts

| Kind | Path |
|------|------|
| requirement | `specs/csdl-bieu-16/po/requirement.md` |
| prior analy | `handoff/data_analy-compact.md` · control-hint · real-data |
| CTX | `docs/context/features/csdl-bieu-16.md` |

## Live bind (1-liner)

- API: `api/v1/asset/csdl-records?resource=interchanges` (+ BFF) · **cấm ERP.*** · **cấm** invent `infra` · **cấm** bind peer `road-assets` / so-ts-interchange
- Entry: mfeStd `/csdl-bieu-16` (**alias_now**) · hub `/so-ts/csdl-so-sach?resource=interchanges` (**NEW card**)
- Form: Kind D Slideout typed **39 cột** · 5 section + child `branches[]` min_1 · **cấm** chỉ 3 ô `detail*` · **cấm** flatten-only
- Import: XLS OUT pack Biểu 16 · IdCode `IX-yyyyMMdd-nnnn`

## Header (39)

`code|name|roadCode|roadName|province|kmMain|kmAux|interchangeType|trafficOrg|mainBedWidth|mainSurfaceWidth|mainMedianWidth|mainLaneCount|branchName|branchKmFrom|branchKmTo|branchSide|branchDirection|branchLength|branchBedWidth|branchSurfaceWidth|branchMedianWidth|branchRadius|atgtSign|atgtMarking|atgtIsland|atgtLight|status|yearBuilt|manageUnit|notes|lat|lng|updatedBy|updatedAt|isActive|branchCount|formNo|side`

Runtime: `branch*` Excel flatten → child grid `branches[]` (**GAP-CSDL-CUC-09**).

## PO decisions (autoApprove)

| ID | Decision |
|----|----------|
| Q-ROUTE | alias_now |
| Q-PROV | keep_static |
| Q-TYPE-SET | cite_excel |
| Q-TRAFFIC-ORG | lookup |
| Q-ATGT | qty |
| Q-BRANCH-MIN | min_1 |
| Q-KM | point_main |
| Q-MANAGE | in_39 · Text→org P2 |
| Q-PREFIX | IX |
| Q-LIST-COLS | subset |
| Q-TITLE | nut_giao |
| Q-DMAP | add_now |
| Q-PEER-LINK | none_p1 |
| Q-CHILD-API | embed |

## Screens / AC

- List Kind B A–D · Form Kind D · Map none · Grid AC PASS · Report N/A
- Hub NEW card formNo 16 · empty «Chưa có nút giao»
- LeaveConfirmModal dirty · filter **cấm** nút Tìm riêng · child min_1

## Zones

List A/B/C/D Kind B · Form Kind D Slideout 2col Z1–Z3 · sections định danh + đặc trưng nút + child nhánh + ATGT + quản lý · map: none

## Next

| Role | Need |
|------|------|
| **Design** | control-map · prototype 39 cột + child grid · hub card · reviewUrl |
| SA | typed DTO/UiSchema · Schema_CsdlBieu16 + Branch · register resource · DOMAIN-MAP slug |

## Cấm (compact)

ERP.* · invent `infra` · form 3 ô detail* · flatten-only 1 nhánh · merge so-ts-interchange/road-assets · Guid IdCode · demo SSOT · yarn build/e2e @ po
