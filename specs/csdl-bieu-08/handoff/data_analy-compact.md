# handoff-compact — data_analy · csdl-bieu-08

| | |
|--|--|
| schemaVersion | `1` |
| role | `data_analy` |
| feature | `csdl-bieu-08` |
| title | CSDL Biểu 08 — Hệ thống ATGT |
| packKind | `list` |
| changeScope | `new_page` |
| status | `done` |
| taskId | `task_a21c4937` |
| resource | `traffic-safety` |
| formNo | `08` (live hub còn **7** · renumber) |
| columns | `45` · **11 nhóm** child/`type=` |
| IdCode | `AT-` |
| peerSoTs | ATGT types (sign/km/guardrail/median/…) deep-link · **cấm** merge |
| contentHash | `sha256:f972c82727726d256754d076435f9ef97c993b4f9844dc79e50b6415fcaf54be` |
| headerFingerprint | `sha256:ba8b8db4f7637ee32cfd4a882b6abdc774c538f6c9812c3ecd1d13f6151cdd6f` |
| demoHash | `sha256:c2c9f8194cb104b3202bcaa46a589c9baba5cf8062aa12e7d0872a9e96eba7ae` |
| skillVersion | `2026.08.25.01` |
| workflowVersion | `2026.09.01.02` |
| rulesVersion | `2026.08.31.2` |
| analyzedAt | `2026-09-05T16:58:08.958Z` |

## Artifacts

| Kind | Path |
|------|------|
| control-hint | `specs/_data-analy/features/csdl-bieu-08-control-hint.md` |
| real-data | `specs/_data-analy/features/csdl-bieu-08-real-data.md` |
| CTX | `docs/context/features/csdl-bieu-08.md` |
| cluster | `specs/_data-analy/csdl-cuc-2026/ANALYSIS-AND-TASKS.md` |
| demo | `Linm.RMMS.Demo/src/demo/features/csdl-so-sach-demo.html` → `…/asset/csdl-so-sach.html` |

## Live bind (1-liner)

- API: `api/v1/asset/csdl-records?resource=traffic-safety` (+ optional `type=`) · **cấm ERP.*** · **cấm** invent `infra`
- Entry: mfeStd `/csdl-bieu-08` · hub `/so-ts/csdl-so-sach?resource=traffic-safety`
- Form: Kind D Slideout · shared + **1 child** theo `assetType` · **cấm** wide 45 · **cấm** chỉ 3 ô `detail*`
- Import: XLS OUT pack Biểu 8
- Peer so-ts ATGT deep-link OK · **cấm** merge 1 form · **≠** road-assets

## Header (45)

`code|roadCode|roadName|province|kmFrom|kmTo|side|assetType|signCode|signSize|signPoleCount|signPoleHeightM|markerKind|markerQty|markerStructure|markerAreaM2|medianKind|medianStructure|medianLengthM|medianHeightM|antiGlareKind|antiGlareStructure|antiGlareQty|antiGlareLengthM|islandType|islandStructure|islandAreaM2|studSize|studQty|guardrailKind|guardrailStructure|guardrailLengthM|guardrailReflector|markCode|markLengthM|markWidthM|markAreaM2|cushionQty|mirrorQty|signalPoleKind|signalHeightM|lampKind|lampQty|builtYear|status`

Trail: `manageUnit` · `notes`

## GAP (PO must see)

| ID | One-liner |
|----|-----------|
| GAP-BIEU08-TYPED-01 | Typed 45/11 nhóm thay generic detail* |
| GAP-BIEU08-CHILD-01 | Child/`type=` · cấm 1 entity wide · GAP-CSDL-01/CUC-08 |
| GAP-BIEU08-REN-01 | formNo 7→8 · T-REN-01 · giữ resource |
| GAP-BIEU08-ROUTE-01 | Alias `/csdl-bieu-08` vs hub-only |
| GAP-BIEU08-TYPE-01 | assetType LOOKUP 11 + filter |
| GAP-BIEU08-SIGN-01…SIGNAL-01 | 11 child sections field keys |
| GAP-BIEU08-PEER-01 | Không merge form so-ts ATGT |
| GAP-CSDL-ROAD-01 | SearchInput road-route |
| GAP-CSDL-PROV-01 | Province static vs master |
| GAP-CSDL-ORG-01 | manageUnit SearchInput org-unit P2 |
| GAP-CSDL-XLS-01 | Import/export sheet Biểu 8 OUT |
| GAP-CSDL-CUC-11 | 2 lớp vận hành vs biểu Cục |

## Open Q

Q-ROUTE · Q-PROV · Q-CHILD · Q-TYPE-UX · Q-MARKER-KIND · Q-LIST-COLS · Q-REN-LABEL · Q-PEER

## Zones

List A/B/C/D Kind B · Form Kind D Slideout 2col Z1–Z3 · shared + 1 child · map: none

## Next

| Role | Need |
|------|------|
| **PO** | requirement từ Delta + open Q |
| Design | control-map · prototype · reviewUrl |
| SA | typed DTO/UiSchema · Schema_CsdlBieu8 + children · renumber |

## Cấm (compact)

ERP.* · invent `infra` · demo SSOT · form 3 ô detail* · wide 45 entity · Guid IdCode · yarn build/e2e @ data_analy
