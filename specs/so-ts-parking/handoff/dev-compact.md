# handoff-compact — dev · so-ts-parking

| | |
|--|--|
| schemaVersion | `1` |
| role | `dev` |
| feature | `so-ts-parking` |
| title | Sổ TS — Bãi đỗ xe |
| packKind | `list` |
| changeScope | `new_page` |
| status | `done` |
| taskId | `task_422a6c9f` |
| typeCode | `PARKING` |
| mfeStdRoute | `/so-ts?type=PARKING` |
| mfeStdUrl | `http://localhost:9301/so-ts?type=PARKING` |
| aliasRoute | `/so-ts-parking` |
| API | `api/v1/asset/road-assets` |
| domain | Asset · **cấm ERP.*** |
| build | MFE PASS · BE PASS |
| migration | none |
| e2eQa | ON (queued `/agent-qa*`) |
| skillVersion | `2026.08.25.01` |
| writtenAt | `2026-09-01T05:00:00.000Z` |

## Decisions

- route_a: live `/so-ts?type=PARKING` · alias redirect `/so-ts-parking`
- Grid PARKING profile ON: chiều dài · DT khuôn viên · **bãi đỗ** · cứu hộ · cấp cứu · hide type/kmTo/SL/ĐVT
- Form S-ATTR editable · name←name_work · kmTo ẩn · dumpSpecs merge
- Init delta: `parkingWorkTypes[]` · `parkingCategories[]` · `parkingOwners[]`
- BE CRUD guard PARKING: type_work_id required · name/kmFrom optional
- filter context: `so-ts-parking-filter-bar.md`

## APIs

- GET/POST/PUT/DELETE `api/v1/asset/road-assets` · `?type=PARKING`
- GET init-data delta parking* arrays

## Debt

- GAP-PK-FLAT-01 defer P2 · hide-empty tuning via SchemaConfig F

## Next

| Role | Need |
|------|------|
| **QA** | e2e `/so-ts?type=PARKING` · V1–V5 filter · CRUD smoke |
| Review | findings |

## Full paths

- implement: `specs/so-ts-parking/implement/so-ts-parking.md`
- filter: `docs/context/features/so-ts-parking-filter-bar.md`
