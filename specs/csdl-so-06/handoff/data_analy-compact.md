# handoff-compact — data_analy · csdl-so-06

| | |
|--|--|
| schemaVersion | `1` |
| role | `data_analy` |
| feature | `csdl-so-06` |
| title | CSDL Sổ 06 — QL cầu / phiếu KT |
| packKind | `list` |
| changeScope | `new_page` |
| status | `done` |
| taskId | `task_ff0beb8e` |
| resource | `bridge-inspections` |
| formNo | `06` |
| IdCode | `SO-` |
| contentHash | `sha256:efbccc4800d45e5dfe2b30b8b35773d127554eb6912be14729c0da066e214d8a` |
| headerFingerprint | `sha256:f87218b875c86a0a438994d8dd3abf30f59757fe4f85ddc4e9af0893efb9422f` |
| skillVersion | `2026.08.25.01` |
| workflowVersion | `2026.09.01.02` |
| rulesVersion | `2026.08.31.2` |
| analyzedAt | `2026-09-06T03:11:57.434Z` |

## Artifacts

| Kind | Path |
|------|------|
| control-hint | `specs/_data-analy/features/csdl-so-06-control-hint.md` |
| real-data | `specs/_data-analy/features/csdl-so-06-real-data.md` |
| CTX | `docs/context/features/csdl-so-06.md` |
| cluster | `specs/_data-analy/csdl-cuc-2026/ANALYSIS-AND-TASKS.md` § T-SO-06 |
| demo | `Linm.RMMS.Demo/src/demo/features/csdl-so-sach-demo.html` → `…/asset/csdl-so-sach.html` |

## Live bind (1-liner)

- API: `api/v1/asset/csdl-records?resource=bridge-inspections` (+ BFF) · **cấm ERP.*** · **cấm** invent `infra` · **cấm** runtime `/api/v1/bridge-inspections`
- Entry: mfeStd `/csdl-so-06` · hub `/so-ts/csdl-so-sach?resource=bridge-inspections`
- Form: Kind D Slideout · typed header + **20 fixed** entries · **cấm** chỉ detail*/col1–3
- Media: FileService `photoIds` / dòng · T-FILE-01
- Peer: deep-link Biểu 2 `bridges` / passport · **cấm** merge form
- formNo Cục `06` · live «Phiếu KT cầu» đến T-REN-01 · **giữ** resource key

## GAP (PO must see)

| ID | One-liner |
|----|-----------|
| GAP-SO06-TYPED-01 | Typed T-SO-06 thay generic detail*/col1–3 |
| GAP-SO06-ROUTE-01 | Alias `/csdl-so-06` vs hub-only |
| GAP-SO06-FORMNO-01 | Label → Sổ 06 · key bridge-inspections giữ |
| GAP-SO06-FIXED20-01 | 20 partCode seed · cấm add/remove |
| GAP-SO06-MEDIA-01 | photoIds FileService / dòng |
| GAP-SO06-PEER-01 | SearchInput/deep-link Biểu 2 |
| GAP-SO06-APILEGACY-01 | Doc path cũ ≠ runtime csdl-records |
| GAP-SO06-DMAP-01 | DOMAIN-MAP thiếu row csdl-so-06 |
| GAP-CSDL-ROAD-01 | SearchInput road-route |
| GAP-CSDL-PROV-01 | Province static vs master |
| GAP-CSDL-ORG-01 | manageUnit SearchInput P2 |
| GAP-CSDL-CUC-03 | Đóng gap cột khi typed PASS |
| GAP-RPT-SRC-CSDL-01 | Typed lines = report source |
| GAP-CSDL-XLS-01 | Import/export sheet OUT |

## Open Q

Q-FORMNO · Q-STATUS · Q-PRIORITY · Q-MEDIA · Q-BRIDGE · Q-PROV · Q-ORG · Q-DMAP

## Zones

List A/B/C/D Kind B · Form Kind D Slideout Z1–Z3 · entries fixed-20 grid · map: none · media=file / dòng · peer Biểu 2 deep-link

## Next

| Role | Need |
|------|------|
| **PO** | requirement từ Delta + open Q |
| Design | control-map · prototype typed 20 lines · reviewUrl |
| SA | typed DTO/UiSchema · Schema_CsdlSo06 · DOMAIN-MAP row · file bind |

## Cấm (compact)

Demo/localStorage SSOT · ERP.* · Guid IdCode · form 3 ô / col1–3 only · invent map · invent file API · runtime bridge-inspections path · yarn build/e2e ở analy
