# handoff-compact — data_analy · csdl-bieu-05

| | |
|--|--|
| schemaVersion | `1` |
| role | `data_analy` |
| feature | `csdl-bieu-05` |
| title | CSDL Biểu 05 — Rãnh các loại |
| packKind | `list` |
| changeScope | `new_page` |
| status | `done` |
| taskId | `task_fdcb7c28` |
| resource | `ditches` |
| formNo | `05` |
| columns | `18` |
| IdCode | `RN-` |
| peerSoTs | `so-ts-ditch` |
| contentHash | `sha256:fd4e6899790aa98d6bc4cb628dc9c0bc5efc90acb3abf03a7b157cf123590117` |
| headerFingerprint | `sha256:008898723c0a5b94fae7de8810903b1dcc39ccfd0dfa5d4a36dd398eb088ac2f` |
| skillVersion | `2026.08.25.01` |
| workflowVersion | `2026.09.01.02` |
| rulesVersion | `2026.08.31.2` |
| analyzedAt | `2026-09-05T06:30:58.027Z` |

## Artifacts

| Kind | Path |
|------|------|
| control-hint | `specs/_data-analy/features/csdl-bieu-05-control-hint.md` |
| real-data | `specs/_data-analy/features/csdl-bieu-05-real-data.md` |
| CTX | `docs/context/features/csdl-bieu-05.md` |
| cluster | `specs/_data-analy/csdl-cuc-2026/ANALYSIS-AND-TASKS.md` |
| demo | `Linm.RMMS.Demo/src/demo/features/csdl-so-sach-demo.html` → `…/asset/csdl-so-sach.html` |

## Live bind (1-liner)

- API: `api/v1/asset/csdl-records?resource=ditches` (+ BFF) · **cấm ERP.*** · **cấm** invent `infra`
- Entry: mfeStd `/csdl-bieu-05` · hub `/so-ts/csdl-so-sach?resource=ditches`
- Form: Kind D Slideout typed 18 cột · **cấm** chỉ 3 ô `detail*`
- Import: XLS OUT pack Biểu 5
- Peer Sổ TS `so-ts-ditch` deep-link OK · **cấm** merge 1 form · **≠** so-ts-ditch

## GAP (PO must see)

| ID | One-liner |
|----|-----------|
| GAP-BIEU05-TYPED-01 | Typed 18 cột thay generic detail* |
| GAP-BIEU05-ROUTE-01 | Alias `/csdl-bieu-05` vs hub-only |
| GAP-BIEU05-KIND-01 | ditchKind hở/kín LOOKUP |
| GAP-BIEU05-SHAPE-01 | Hình + khẩu độ + KC typed |
| GAP-BIEU05-DRAIN-01 | drainageCapacity khả năng thoát |
| GAP-BIEU05-RANGE-01 | kmFrom/kmTo Từ–đến |
| GAP-BIEU05-PEER-01 | Không merge form so-ts-ditch |
| GAP-CSDL-ROAD-01 | SearchInput road-route |
| GAP-CSDL-PROV-01 | Province static vs master |
| GAP-CSDL-ORG-01 | manageUnit SearchInput org-unit P2 |
| GAP-CSDL-XLS-01 | Import/export sheet Biểu 5 OUT |
| GAP-CSDL-CUC-11 | 2 lớp vận hành vs biểu Cục |

## Open Q

Q-ROUTE · Q-PROV · Q-APERTURE · Q-DRAIN · Q-SHAPE

## Zones

List A/B/C/D Kind B · Form Kind D Slideout 2col Z1–Z3 · map: none

## Next

| Role | Need |
|------|------|
| **PO** | requirement từ Delta + open Q |
| Design | control-map · prototype 18 cột · reviewUrl |
| SA | typed DTO/UiSchema · Schema_CsdlBieu5 |

## Cấm (compact)

Demo/localStorage SSOT · ERP.* · Guid IdCode · form 3 ô only · invent map · merge Sổ TS form · yarn build/e2e ở analy
