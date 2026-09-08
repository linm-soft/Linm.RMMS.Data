# handoff-compact — data_analy · csdl-bieu-07

| | |
|--|--|
| schemaVersion | `1` |
| role | `data_analy` |
| feature | `csdl-bieu-07` |
| title | CSDL Biểu 07 — Lề / taluy / hàng rào |
| packKind | `list` |
| changeScope | `new_page` |
| status | `done` |
| taskId | `task_480d8882` |
| resource | `shoulders-fences` |
| formNo | `07` (live hub còn **10** · renumber) |
| columns | `20` |
| IdCode | `LE-` |
| peerSoTs | `SHOULDER` (type-grid · chưa enqueue) |
| contentHash | `sha256:5634091e7ce3e5272c090320398a76d75f84ed7326366e93e088ff2154e8bf44` |
| headerFingerprint | `sha256:ba33856d00d23440b05be8c78c8b8a5462662c96a1067e702b791eb5020d64cf` |
| skillVersion | `2026.08.25.01` |
| workflowVersion | `2026.09.01.02` |
| rulesVersion | `2026.08.31.2` |
| analyzedAt | `2026-09-05T09:14:17.821Z` |

## Artifacts

| Kind | Path |
|------|------|
| control-hint | `specs/_data-analy/features/csdl-bieu-07-control-hint.md` |
| real-data | `specs/_data-analy/features/csdl-bieu-07-real-data.md` |
| CTX | `docs/context/features/csdl-bieu-07.md` |
| cluster | `specs/_data-analy/csdl-cuc-2026/ANALYSIS-AND-TASKS.md` |
| demo | `Linm.RMMS.Demo/src/demo/features/csdl-so-sach-demo.html` → `…/asset/csdl-so-sach.html` |

## Live bind (1-liner)

- API: `api/v1/asset/csdl-records?resource=shoulders-fences` (+ BFF) · **cấm ERP.*** · **cấm** invent `infra`
- Entry: mfeStd `/csdl-bieu-07` · hub `/so-ts/csdl-so-sach?resource=shoulders-fences`
- Form: Kind D Slideout typed 20 cột · 3 khối lề / taluy / HR · **cấm** chỉ 3 ô `detail*`
- Import: XLS OUT pack Biểu 7
- Peer `SHOULDER` deep-link OK · **cấm** merge 1 form · **≠** road-assets

## Header (20)

`code|roadCode|roadName|province|kmFrom|kmTo|side|shoulderStructure|shoulderLengthM|shoulderWidthM|shoulderAreaM2|slopeLengthM|slopeAreaM2|fenceKind|fencePostCount|fenceLengthKm|builtYear|status|manageUnit|notes`

## GAP (PO must see)

| ID | One-liner |
|----|-----------|
| GAP-BIEU07-TYPED-01 | Typed 20 cột thay generic detail* |
| GAP-BIEU07-REN-01 | formNo 10→7 · title taluy · T-REN-01 |
| GAP-BIEU07-ROUTE-01 | Alias `/csdl-bieu-07` vs hub-only |
| GAP-BIEU07-SHOULDER-01 | Khối lề KC/dài/rộng/DT |
| GAP-BIEU07-SLOPE-01 | Khối taluy dài+DT · map SlopeClearingM |
| GAP-BIEU07-FENCE-01 | Khối HR quy cách · số cột · dài |
| GAP-BIEU07-FENCE-LEN-01 | fenceLengthKm vs FenceLengthM |
| GAP-BIEU07-PANEL-01 | FencePanelCount optional |
| GAP-BIEU07-PEER-01 | Không merge form SHOULDER |
| GAP-CSDL-ROAD-01 | SearchInput road-route |
| GAP-CSDL-PROV-01 | Province static vs master |
| GAP-CSDL-ORG-01 | manageUnit SearchInput org-unit P2 |
| GAP-CSDL-XLS-01 | Import/export sheet Biểu 7 OUT |
| GAP-CSDL-CUC-11 | 2 lớp vận hành vs biểu Cục |

## Open Q

Q-ROUTE · Q-PROV · Q-SIDE · Q-SLOPE · Q-FENCE-LEN · Q-PANEL · Q-STRUCT · Q-REN-LABEL

## Zones

List A/B/C/D Kind B · Form Kind D Slideout 2col Z1–Z3 · 3 section · map: none

## Next

| Role | Need |
|------|------|
| **PO** | requirement từ Delta + open Q |
| Design | control-map · prototype 20 cột · reviewUrl |
| SA | typed DTO/UiSchema · Schema_CsdlBieu7 · renumber |

## Cấm (compact)

ERP.* · invent `infra` · demo SSOT · form 3 ô detail* · Guid IdCode · yarn build/e2e @ data_analy
