# handoff-compact — sa → team-lead

| | |
|--|--|
| schemaVersion | `1` |
| feature | `khu-1-pilot` |
| role | `sa` |
| status | `PASS` |
| packKind | `list` |
| changeScope | `new_page` |
| Kind | **A/B** list · **no** CRUD form |
| taskId | `task_dad46d96` |
| demo | `N/A` |
| contentHash | `sha256:721f9c659b694240f987553196aa422ceba50f1f2c1e7849e42fe27050168056` |
| headerFingerprint | `sha256:39ac2fc4e677a0980881d50eb9a10daa22430065a0fafa39ff57485d505940a3` |
| mfeStdRoute | `/khu-1-pilot` |
| mfeStdUrl | `http://localhost:9301/khu-1-pilot` |
| uiRepo | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Asset` |
| beRepo | `D:/AI-QLBD/Linm.RMMS.WebService` |
| domain | **Asset** (+ Integration lookups cite) |
| resource | `khu-1-pilot` |
| domain_map | **D1** patched |
| solution_confirm | **approve** (autoApprove ON) |
| sa_tz_gate | `tz_yes` |
| sa_xco_gate | `xco_na` |
| sa_shared_table | `share_a` |
| lane | `web` |
| autoApprove | `ON` |
| e2eQa | `ON` (queued QA) |
| writtenAt | `2026-09-06T15:48:00.000Z` |

## Artifacts

| kind | path | status |
|------|------|--------|
| solution | `specs/khu-1-pilot/be/solution-discovery.md` | confirmed |
| DOMAIN-MAP | `Linm.RMMS.WebService/docs/DOMAIN-MAP.md` | slug→Asset |
| design | `specs/khu-1-pilot/ui/design.md` | cite |
| real-data | `specs/_data-analy/features/khu-1-pilot-real-data.md` | cite §B |

## Intent (1-liner)

Kind A/B pilot list REG-I + FilterBar lookups live + Asset GET/POST ops scoped ReImport/ReInit · **cấm** ERP.* / mock / nationwide wipe.

## Decisions

- DOMAIN-MAP `khu-1-pilot` → **Asset** · BFF proxy `web-bff/api/v1/asset/khu-1-pilot`
- API-01 GET list/status · API-02 POST `/re-import` · API-03 POST `/re-init` · body `zoneOrgCode=REG-I` + `importSets[]`
- Lookups **cite** Integration org-units/road-routes/partner-units/org-route-scopes — **cấm** invent
- Persist P1: **no** new table · aggregate + fingerprints · Step 4b = `/new-endpoint`
- FormMode: List + ops only · **cấm** Thêm mới / typed CSDL re-enqueue / mobile
- **cấm** mock `POST integration/assets/import` for pilot ops

## Filter / grid / ops (ids)

- B: `zoneOrgCode=REG-I` lock · `vpOrgCode` · `assigneeCode` · `routeCode` · `search` · đoạn=`km_skip`
- C: `catalog` · `countInScope` · `lastImportAt` · `status`
- OPS: `importSet` chips · `reImport` · `reInit`(danger)

## GAP closure

| ID | State |
|----|-------|
| GAP-K1-DM-01 | CLOSED |
| GAP-K1-API-01 | CHỐT → Dev |
| GAP-K1-SCOPE-01 | CHỐT contract → Dev/Data |
| GAP-K1-PAGE-01 / ALIAS-01 | Dev |
| GAP-ORS-CASCADE-01 / MOBILE-01 | peer/TL |

## Tasks (TL)

T-DM-01(done) · T-BE-01..04 · T-BFF-01 · T-FE-01..04 · T-OUT-01 · T-QA-01

## UNCLEAR

- none

## Next

`role=team-lead` · `task/khu-1-pilot.md` · Autopilot ON
