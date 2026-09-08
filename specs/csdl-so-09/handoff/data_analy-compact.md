# handoff-compact — data_analy → po · csdl-so-09

| | |
|--|--|
| schemaVersion | `1` |
| feature | `csdl-so-09` |
| role | `data_analy` |
| status | `done` |
| packKind | `list` |
| changeScope | `new_page` |
| taskId | `task_8076c138` |
| analyzedAt | `2026-09-05T23:38:01.000Z` |
| contentHash | `sha256:1cbd0cd26f977a518c29457acddd7c893fa56fe9bd750ac1ad6a15b0976d03dc` |
| headerFingerprint | `sha256:c00fdbdda898129b6408c35f9fb57cd2cc918356208b1067310d40c8f3cbefd9` |
| skillVersion | `2026.08.25.01` |
| workflowVersion | `2026.09.01.02` |

## Verdict

Typed **Sổ 09 — QL vận hành ITS/ETC/KSTTX** (T-SO-09 NEW): Kind B list + Kind D Slideout · resource `its-ops-logs` · formNo `09` · link Biểu 14 · **cấm** chỉ `detail*` / Col1–3.

## Full paths

| Artifact | Path |
|----------|------|
| control-hint | `specs/_data-analy/features/csdl-so-09-control-hint.md` |
| real-data | `specs/_data-analy/features/csdl-so-09-real-data.md` |
| context | `docs/context/features/csdl-so-09.md` |
| cluster | `specs/_data-analy/csdl-cuc-2026/ANALYSIS-AND-TASKS.md` § T-SO-09 |
| demo | `Linm.RMMS.Demo/.../csdl-so-sach-demo.html` → `asset/csdl-so-sach.html` |

## Mandatory (PO)

| Key | Value |
|-----|-------|
| titleVN | Sổ 09 — QL vận hành ITS/ETC/KSTTX |
| resource | `its-ops-logs` (seed NEW) |
| api | `api/v1/asset/csdl-records?resource=its-ops-logs` · **cấm ERP.*** |
| mfeStdUrl | `http://localhost:9301/csdl-so-09` |
| hubEntry | `/so-ts/csdl-so-sach?resource=its-ops-logs` |
| zones | List A–D · Form Z1–Z3 · entries `pattern_inline_grid` |
| header | bookNo · contractor · road+Km · period · linkBieu14Id |
| entries | lineNo · occurredAt · shift · operatorName · systemStatus · anomaly · action · result · recommendation · signature |
| filters | search · province · status · road-route · fromDate · toDate |
| IdCode | `SO-yyyyMMdd-nnnn` |
| map | none |
| peer | Biểu 14 `its-systems` · deep-link / SearchInput |
| GAPs | GAP-SO09-RES/TYPED/ROUTE/LINK14/FORMNO · GAP-CSDL-ROAD/PROV/ORG/CUC-03/05 · RPT-SRC · XLS-01 |

## PO open Q

Q-SHIFT · Q-SYS-STATUS · Q-LINK14 · Q-PROV · Q-ORG · Q-SIGN

## Next

→ **po** `po/requirement.md` · Design prototype+reviewUrl · **cấm** start Dev/QA ở slash này.
