# handoff-compact — review · so-ts-ems-post

| | |
|--|--|
| schemaVersion | `1` |
| role | `review` |
| feature | `so-ts-ems-post` |
| title | Sổ TS — Trạm trực cấp cứu |
| packKind | `list` |
| changeScope | `new_page` |
| status | `done` |
| taskId | `task_e19baa14` |
| verdict | **PASS** |
| review_confirm | **approve** (autoApprove ON) |
| typeCode | `EMS_POST` |
| dump | `tbl_first_aid_station` |
| prefix | `CCU-` |
| clusterUi | `station` · tile `t29` |
| API | `api/v1/asset/road-assets` |
| mfeStdUrl | `http://localhost:9301/so-ts?type=EMS_POST` |
| alias | `/so-ts-ems-post` |
| contentHashPrior | `sha256:07fe22b464638b45f6be1286d9b99d3a7551dd5ef62be076013bbedd692885c8` |
| skillVersion | `2026.08.25.02` |
| workflowVersion | `2026.09.01.02` |
| rulesVersion | `2026.09.01.1` |
| writtenAt | `2026-09-01T05:50:10.000Z` |

## Decisions

- Gates QUERY/SEC/UI-FN/BE-FN **PASS** · P0 **none**
- Live route_a `/so-ts?type=EMS_POST` · alias redirect OK
- Grid EMS ON mẫu · form S-ATTR · kmTo ẩn · name←name_station · LeaveConfirm
- init LOOKUP owner/station_type · validate EMS · prefix CCU- · migration none
- **cấm** ERP.* · **cấm** invent so-ts API
- Auth NuGet / flatten Schema_* = **DEFER** (non-blocking)

## Artifacts

| Kind | Path |
|------|------|
| findings | `specs/so-ts-ems-post/review/findings.md` |
| prior qa | `handoff/qa-compact.md` · e2e PASS |
| prior dev | `handoff/dev-compact.md` · build PASS |
| evidence | `qa/screens/manifest.json` ok=true |

## Gates

| Gate | Result |
|------|--------|
| QUERY | PASS |
| SEC | PASS (Auth DEFER info) |
| UI-FN | PASS |
| BE-FN | PASS |

## GAP (info/defer)

GAP-EMS-FLAT-01 defer · GAP-QA-E2E-02 info · GAP-QA-E2E-PW-01 info · Auth-NuGet defer

## Next

| Role | Need |
|------|------|
| — | pipeline complete · feature **done** |

## Cấm (compact)

ERP.* · invent so-ts API · re-open Dev implement · e2e/build ở Review
