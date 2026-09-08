# handoff-compact — data_analy → po · csdl-so-08

| | |
|--|--|
| schemaVersion | `1` |
| feature | `csdl-so-08` |
| role | `data_analy` |
| status | `done` |
| packKind | `list` |
| changeScope | `new_page` |
| taskId | `task_aa2658e0` |
| analyzedAt | `2026-09-05T18:36:01.000Z` |
| contentHash | `sha256:46cd2b05ce4a396d08fa326183d9a17603afc381fbd00669155c13703a4e3146` |
| headerFingerprint | `sha256:e6fd49c647b1f4435fe5110097964fa15b4eeba116926d885297b81d2e373a02` |
| skillVersion | `2026.08.25.01` |
| workflowVersion | `2026.09.01.02` |

## Verdict

Typed **Sổ 08 — Kết quả BDTX** (TT 41 PL IV Mẫu 2): Kind B list + Kind D Slideout · resource `maintenance-work-logs` · formNo `08` · **cấm** chỉ `detail*` / Col1–3.

## Full paths

| Artifact | Path |
|----------|------|
| control-hint | `specs/_data-analy/features/csdl-so-08-control-hint.md` |
| real-data | `specs/_data-analy/features/csdl-so-08-real-data.md` |
| context | `docs/context/features/csdl-so-08.md` |
| cluster | `specs/_data-analy/csdl-cuc-2026/ANALYSIS-AND-TASKS.md` § T-SO-08 |
| demo | `Linm.RMMS.Demo/.../csdl-so-sach-demo.html` → `asset/csdl-so-sach.html` |

## Mandatory (PO)

| Key | Value |
|-----|-------|
| titleVN | Sổ 08 — Kết quả BDTX |
| resource | `maintenance-work-logs` |
| api | `api/v1/asset/csdl-records?resource=maintenance-work-logs` · **cấm ERP.*** |
| mfeStdUrl | `http://localhost:9301/csdl-so-08` |
| hubEntry | `/so-ts/csdl-so-sach?resource=maintenance-work-logs` |
| zones | List A–D · Form Z1–Z3 · entries `pattern_inline_grid` |
| header | bookNo · contractor · road+Km · officeUnit(VP) · zoneUnit(Khu) · period |
| entries | lineNo · workItem · kmFrom/To · solution · mainResult · note |
| filters | search · province · status · road-route · fromDate · toDate |
| IdCode | `SO-yyyyMMdd-nnnn` |
| map | none |
| GAPs | GAP-SO08-TYPED-01 · ROUTE-01 · FORMNO-01 · GAP-CSDL-ROAD/PROV/ORG/CUC-03 · RPT-SRC · XLS-01 |

## PO open Q

Q-VP-KHU · Q-STATUS · Q-PROV · Q-ORG · Q-ENTRY-KM

## Next

→ **po** `po/requirement.md` · Design prototype+reviewUrl · **cấm** start Dev/QA ở slash này.
