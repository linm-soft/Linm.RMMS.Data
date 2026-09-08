# handoff-compact — data_analy · csdl-so-07

| | |
|--|--|
| schemaVersion | `1` |
| role | `data_analy` |
| feature | `csdl-so-07` |
| title | CSDL Sổ 07 — HL + GPTC + Dự án |
| packKind | `list` |
| changeScope | `new_page` |
| status | `done` |
| taskId | `task_20842c29` |
| resource | `row-violations` |
| formNo | `07` |
| IdCode | `SO-` |
| contentHash | `sha256:b928feb3e0d7900398812630e25afa43bfcbf4971633a9c1184c55ea2912ef69` |
| headerFingerprint | `sha256:a923102afa38664e58effeb2b0dccfae12b942d4a3a6fb3c1cb8355df00aa531` |
| skillVersion | `2026.08.25.01` |
| workflowVersion | `2026.09.01.02` |
| rulesVersion | `2026.08.31.2` |
| analyzedAt | `2026-09-05T21:06:41.298Z` |

## Artifacts

| Kind | Path |
|------|------|
| control-hint | `specs/_data-analy/features/csdl-so-07-control-hint.md` |
| real-data | `specs/_data-analy/features/csdl-so-07-real-data.md` |
| CTX | `docs/context/features/csdl-so-07.md` |
| cluster | `specs/_data-analy/csdl-cuc-2026/ANALYSIS-AND-TASKS.md` § T-SO-07 |
| demo | `Linm.RMMS.Demo/src/demo/features/csdl-so-sach-demo.html` → `…/asset/csdl-so-sach.html` |

## Live bind (1-liner)

- API: `api/v1/asset/csdl-records?resource=row-violations` (+ BFF) · **cấm ERP.*** · **cấm** invent `infra` · **cấm** runtime `/row-violations` · `/construction-permits`
- Entry: mfeStd `/csdl-so-07` · hub `/so-ts/csdl-so-sach?resource=row-violations`
- Form: Kind D Slideout · header + **2 tab** A `violations[]` / B `permits[]` (+ **QLDA**) · **cấm** chỉ detail*/col1–3
- Peer: drill `rpt-vi-pham-hlatdb` · **cấm** merge Sổ TS
- formNo Cục `07` · live formNo `6` đến T-REN-01 · **giữ** resource key

## GAP (PO must see)

| ID | One-liner |
|----|-----------|
| GAP-SO07-TYPED-01 | Typed T-SO-07 thay generic detail*/col1–3 |
| GAP-SO07-PROJECT-01 | Thêm QLDA / khối Dự án trên tab GPTC |
| GAP-SO07-ROUTE-01 | Alias `/csdl-so-07` vs hub-only |
| GAP-SO07-FORMNO-01 | Label → Sổ 07 · key row-violations giữ |
| GAP-SO07-TABS-01 | 2 tab nested arrays · cấm flatten |
| GAP-SO07-APILEGACY-01 | Doc path cũ ≠ runtime csdl-records |
| GAP-SO07-DMAP-01 | DOMAIN-MAP thiếu row csdl-so-07 |
| GAP-CSDL-ROAD-01 | SearchInput road-route |
| GAP-CSDL-PROV-01 | Province static vs master |
| GAP-CSDL-ORG-01 | contractor/manageUnit SearchInput P2 |
| GAP-CSDL-CUC-03 | Đóng gap cột khi typed PASS |
| GAP-RPT-SRC-CSDL-01 | Typed lines = report source |
| GAP-CSDL-XLS-01 | Import/export sheet OUT |

## Open Q

Q-FORMNO · Q-STATUS · Q-TABS · Q-PROJECT · Q-PERMITDAYS · Q-PROV · Q-ORG · Q-DMAP · Q-RPT

## Zones

List A/B/C/D Kind B · Form Kind D Slideout Z1–Z3 · Tab A violations · Tab B permits+QLDA · map: none · peer report drill

## Next

| Role | Need |
|------|------|
| **PO** | requirement từ Delta + open Q |
| Design | control-map · prototype 2-tab typed · reviewUrl |
| SA | typed DTO/UiSchema · Schema_CsdlSo07 · DOMAIN-MAP row · nested arrays |

## Cấm (compact)

Demo/localStorage SSOT · ERP.* · Guid IdCode · form 3 ô / col1–3 only · invent map · runtime row-violations/construction-permits path · yarn build/e2e ở analy
