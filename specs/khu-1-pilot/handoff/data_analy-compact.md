# handoff-compact — data_analy → po

| | |
|--|--|
| schemaVersion | `1` |
| feature | `khu-1-pilot` |
| role | `data_analy` |
| status | `PASS` |
| packKind | `list` |
| changeScope | `new_page` |
| taskId | `task_d855768c` |
| demo | `N/A` |
| contentHash | `sha256:721f9c659b694240f987553196aa422ceba50f1f2c1e7849e42fe27050168056` |
| headerFingerprint | `sha256:39ac2fc4e677a0980881d50eb9a10daa22430065a0fafa39ff57485d505940a3` |
| analyzedAt | `2026-09-06T15:21:00.000Z` |
| mfeStdRoute | `/khu-1-pilot` |
| mfeStdUrl | `http://localhost:9301/khu-1-pilot` |
| uiRepo | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Asset` |
| beRepo | `D:/AI-QLBD/Linm.RMMS.WebService` |
| domainPropose | `Asset` (+ Integration lookups) |
| lane | `web` |

## Artifacts

| kind | path | status |
|------|------|--------|
| control-hint | `specs/_data-analy/features/khu-1-pilot-control-hint.md` | done |
| real-data | `specs/_data-analy/features/khu-1-pilot-real-data.md` | done |
| context | `docs/context/features/khu-1-pilot.md` | P0 |

## Intent (1-liner)

Pilot list/filter **Khu QLĐB I (`REG-I`)** + scoped `ReImportSeed`/`ReInitData` · consume `/rmms-filter-org` · **cấm** nhầm II.1 / QL.1 demo.

## Filter keys (Zone B)

`zoneOrgCode=REG-I`(lock) · `vpOrgCode` · `assigneeCode` · `routeCode` · `search` · đoạn=skip(`km_skip`)

## Hard cấm

- ERP.* / Domains/Master ERP · invent-seed · gộp zone→gov-vn · khu-2/khu-4 · re-enqueue 16 biểu+10 sổ · mobile lane · typed CSDL form

## GAPs → next roles

| ID | Owner |
|----|-------|
| GAP-K1-DM-01 | SA DOMAIN-MAP |
| GAP-K1-API-01 | SA list/status + scoped import |
| GAP-K1-PAGE-01 | Design/Dev `/khu-1-pilot` |
| GAP-K1-SCOPE-01 | SA/Data REG-I import flags |
| GAP-K1-ALIAS-01 | PO/Design exclude II.1/QL.1 |

## Peers

`org-route-scope` · `import-gov-ssot` · `reports-filter-bar` (`/rmms-filter-org`)

## Next

`role=po` · `po/requirement.md` · Autopilot ON
