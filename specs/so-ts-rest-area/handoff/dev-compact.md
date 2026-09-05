# handoff-compact — dev · so-ts-rest-area

| | |
|--|--|
| schemaVersion | `1` |
| role | `dev` |
| feature | `so-ts-rest-area` |
| taskId | `task_3b431b36` |
| status | `done` |
| packKind | `list` |
| changeScope | `new_page` |
| typeCode | `REST_AREA` |
| mfeStdRoute | `/so-ts?type=REST_AREA` |
| mfeStdUrl | `http://localhost:9301/so-ts?type=REST_AREA` |
| alias | `/so-ts-rest-area` |
| API | `api/v1/asset/road-assets` |
| domain | Asset |
| migration | none |
| build | MFE yarn build PASS · BE dotnet build PASS |
| e2eQa | ON (queued `/agent-qa*`) |
| writtenAt | `2026-09-01T04:45:00.000Z` |

## Decisions

- REST_AREA profile on shared AssetListPage/AssetFormPage — **cấm** fork
- name←name_work · kmTo ẩn · type_work_id required · prefix DN-
- init-data: restAreaWorkTypes · restAreaCategories · restAreaOwners · buildLocations (+ reuse officeBuildingGrades · auxiliaryWorksGrades)
- Grid ON: type_work · categorized · owner · actual_length · site_area · cứu hộ · cấp cứu · hide type/kmTo/parking
- filter context: `docs/context/features/so-ts-rest-area-filter-bar.md`

## APIs

- GET/POST/PUT/DELETE `/api/v1/asset/road-assets` · `?type=REST_AREA`
- GET `/api/v1/asset/road-assets/init-data` — restArea* delta

## Debt

- GAP-RA-FLAT-01 P2 · hide-empty schema tuning QA

## Next

| Role | Need |
|------|------|
| **QA** | e2e `http://localhost:9301/so-ts?type=REST_AREA` · filter V1–V5 · CRUD smoke |
