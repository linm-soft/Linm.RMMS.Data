# handoff-compact — dev · so-ts-ems-post

| | |
|--|--|
| schemaVersion | `1` |
| role | `dev` |
| feature | `so-ts-ems-post` |
| title | Sổ TS — Trạm trực cấp cứu |
| packKind | `list` |
| changeScope | `new_page` |
| status | `done` |
| taskId | `task_abebc1f1` |
| typeCode | `EMS_POST` |
| dump | `tbl_first_aid_station` |
| prefix | `CCU-` |
| clusterUi | `station` · tile `t29` |
| skillVersion | `2026.08.25.02` |
| workflowVersion | `2026.09.01.02` |
| rulesVersion | `2026.09.01.1` |
| writtenAt | `2026-09-01T05:30:00.000Z` |

## Decisions

- route_a live `/so-ts?type=EMS_POST` · alias `/so-ts-ems-post` redirect
- Grid profile EMS_POST: tên trạm · tuyến · lý trình · chủ SH · loại trạm · khoảng cách · hide type/kmTo/SL/ĐVT
- Form reuse S-* · S-ATTR editable · kmTo ẩn · name←name_station «Tên trạm»
- API `api/v1/asset/road-assets` · init-data `ownerOptions` + `stationTypeOptions`
- LeaveConfirmModal · cấm native confirm
- migration **none** · dumpSpecs P1

## Artifacts

| Kind | Path |
|------|------|
| implement | `specs/so-ts-ems-post/implement/so-ts-ems-post.md` |
| filter-bar | `docs/context/features/so-ts-ems-post-filter-bar.md` |
| MFE | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Asset` |
| BE | `D:/AI-QLBD/Linm.RMMS.WebService` |

## mfeStdUrl / APIs

- live: `http://localhost:9301/so-ts?type=EMS_POST`
- alias: `http://localhost:9301/so-ts-ems-post`
- GET list `?type=EMS_POST` · CRUD `/asset/road-assets` · init-data `ownerOptions`/`stationTypeOptions`

## Build

- MFE `yarn build` PASS
- BE `dotnet build` PASS

## Debt / queued

- T-QA-* → `/agent-qa*` only (e2eQa ON)
- Auth NuGet DEFER · flatten Schema_* P2

## Next

| Role | Need |
|------|------|
| **QA** | e2e CRUD/filter/form · V1–V5 filter-bar |

## Cấm (compact)

ERP.* · invent so-ts API · fork AssetFormPage · e2e ở Dev
