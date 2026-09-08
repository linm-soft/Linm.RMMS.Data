# handoff-compact — data_analy · csdl-bieu-06

| | |
|--|--|
| schemaVersion | `1` |
| role | `data_analy` |
| feature | `csdl-bieu-06` |
| title | CSDL Biểu 06 — Hầm chui DS + hộp KT |
| packKind | `list` |
| changeScope | `new_page` |
| status | `done` |
| taskId | `task_b6ef926c` |
| resource | `underpasses` |
| formNo | `06` |
| columns | `19` |
| IdCode | `HC-` |
| peerSoTs | `so-ts-underpass` |
| contentHash | `sha256:ffc5c8381b04dcec3f0376df87187012f34b16bf211a3e3fb7311a8375a386f0` |
| headerFingerprint | `sha256:3b2f5c531f0538509147846466d92090a3c8f5adc05a4be6d1dbb80ad73ff2a7` |
| skillVersion | `2026.08.25.01` |
| workflowVersion | `2026.09.01.02` |
| rulesVersion | `2026.08.31.2` |
| analyzedAt | `2026-09-05T07:12:53.176Z` |

## Artifacts

| Kind | Path |
|------|------|
| control-hint | `specs/_data-analy/features/csdl-bieu-06-control-hint.md` |
| real-data | `specs/_data-analy/features/csdl-bieu-06-real-data.md` |
| CTX | `docs/context/features/csdl-bieu-06.md` |
| cluster | `specs/_data-analy/csdl-cuc-2026/ANALYSIS-AND-TASKS.md` |
| demo | `Linm.RMMS.Demo/src/demo/features/csdl-so-sach-demo.html` → `…/asset/csdl-so-sach.html` |

## Live bind (1-liner)

- API: `api/v1/asset/csdl-records?resource=underpasses` (+ BFF) · **cấm ERP.*** · **cấm** invent `infra`
- Entry: mfeStd `/csdl-bieu-06` · hub `/so-ts/csdl-so-sach?resource=underpasses`
- Form: Kind D Slideout typed 19 cột · **cấm** chỉ 3 ô `detail*` · gồm hộp KT
- Import: XLS OUT pack Biểu 6
- Peer Sổ TS `so-ts-underpass` deep-link OK · **cấm** merge 1 form · **≠** road-assets

## GAP (PO must see)

| ID | One-liner |
|----|-----------|
| GAP-BIEU06-TYPED-01 | Typed 19 cột thay generic detail* |
| GAP-BIEU06-ROUTE-01 | Alias `/csdl-bieu-06` vs hub-only |
| GAP-BIEU06-KIND-01 | underpassKind hầm chui DS / hộp KT |
| GAP-BIEU06-PIPE-01 | pipeCount số ống/ngăn |
| GAP-BIEU06-STRUCT-01 | body + portal structure typed |
| GAP-BIEU06-LOAD-01 | designLoad tải (HL93…) |
| GAP-BIEU06-PAVE-01 | pavementInside BTXM/BTN |
| GAP-BIEU06-LIGHT-01 | lighting chiếu sáng |
| GAP-BIEU06-DRAIN-01 | drainage thoát nước |
| GAP-BIEU06-POINT-01 | kmPoint Point · không ép kmTo |
| GAP-BIEU06-PEER-01 | Không merge form so-ts-underpass |
| GAP-CSDL-ROAD-01 | SearchInput road-route |
| GAP-CSDL-PROV-01 | Province static vs master |
| GAP-CSDL-ORG-01 | manageUnit SearchInput org-unit P2 |
| GAP-CSDL-XLS-01 | Import/export sheet Biểu 6 OUT |
| GAP-CSDL-CUC-11 | 2 lớp vận hành vs biểu Cục |

## Open Q

Q-ROUTE · Q-PROV · Q-APERTURE · Q-PIPE · Q-LOAD · Q-LIGHT · Q-DRAIN · Q-KIND

## Zones

List A/B/C/D Kind B · Form Kind D Slideout 2col Z1–Z3 · map: none

## Next

| Role | Need |
|------|------|
| **PO** | requirement từ Delta + open Q |
| Design | control-map · prototype 19 cột · reviewUrl |
| SA | typed DTO/UiSchema · Schema_CsdlBieu6 |

## Cấm (compact)

Demo/localStorage SSOT · ERP.* · Guid IdCode · form 3 ô only · invent map · merge Sổ TS form · yarn build/e2e ở analy
