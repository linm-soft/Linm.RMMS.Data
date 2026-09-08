# handoff-compact — po → design

| | |
|--|--|
| schemaVersion | `1` |
| feature | `khu-1-pilot` |
| role | `po` |
| status | `PASS` |
| packKind | `list` |
| changeScope | `new_page` |
| taskId | `task_25122961` |
| demo | `N/A` |
| contentHash | `sha256:721f9c659b694240f987553196aa422ceba50f1f2c1e7849e42fe27050168056` |
| headerFingerprint | `sha256:39ac2fc4e677a0980881d50eb9a10daa22430065a0fafa39ff57485d505940a3` |
| mfeStdRoute | `/khu-1-pilot` |
| mfeStdUrl | `http://localhost:9301/khu-1-pilot` |
| uiRepo | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Asset` |
| beRepo | `D:/AI-QLBD/Linm.RMMS.WebService` |
| domainPropose | `Asset` (+ Integration lookups) |
| lane | `web` |
| autoApprove | `ON` |
| e2eQa | `ON` (queued QA) |

## Artifacts

| kind | path | status |
|------|------|--------|
| requirement | `specs/khu-1-pilot/po/requirement.md` | confirmed |
| control-hint | `specs/_data-analy/features/khu-1-pilot-control-hint.md` | cite |
| real-data | `specs/_data-analy/features/khu-1-pilot-real-data.md` | cite |
| context | `docs/context/features/khu-1-pilot.md` | P0 |

## Intent (1-liner)

List Kind A/B **Pilot Khu I (`REG-I` lock)** + FilterBar `/rmms-filter-org` + scoped ReImport/ReInit · **cấm** II.1 / QL.1 / ERP.* / mock.

## Screens

| ID | Route | Kind |
|----|-------|------|
| SCR-K1-01 | `/khu-1-pilot` | list A/B |
| SCR-K1-MAP | Gis/Field peer | filter consume only |

## Filter keys (Zone B)

`zoneOrgCode=REG-I`(lock) · `vpOrgCode` · `assigneeCode` · `routeCode` · `search` · đoạn=`km_skip`

## Grid columns (Zone C)

`catalog` · `countInScope` · `lastImportAt` · `status`

## Ops toolbar

`importSet`(`gov-vn`/`t6-org-scope`/`drvn-org`) · `pilotScope=REG-I` · `reImport` · `reInit`(danger)

## Hard cấm

ERP.* · invent-seed · gộp zone→gov-vn · khu-2/khu-4 · re-enqueue typed · mobile · demo-json/mock · native select · Thêm mới

## GAPs → next

| ID | Owner |
|----|-------|
| GAP-K1-PAGE-01 | Design/Dev |
| GAP-K1-ALIAS-01 | Design (PO closed copy) |
| GAP-K1-DM-01 | SA |
| GAP-K1-API-01 | SA |
| GAP-K1-SCOPE-01 | SA/Data |
| GAP-ORS-CASCADE-01 | peer |
| GAP-K1-MOBILE-01 | TL |

## Next

`role=design` · `ui/design.md` + prototype + reviewUrl · Autopilot ON
