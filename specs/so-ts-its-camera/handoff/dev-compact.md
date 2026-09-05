# handoff-compact — dev · so-ts-its-camera

| | |
|--|--|
| schemaVersion | `1` |
| role | `dev` |
| feature | `so-ts-its-camera` |
| status | `done` |
| taskId | `task_43028f8c` |
| packKind | `list` |
| changeScope | `new_page` |
| typeCode | `ITS_CAMERA` |
| prefix | `IT-` |
| mfeStdRoute | `/so-ts?type=ITS_CAMERA` |
| mfeStdUrl | `http://localhost:9301/so-ts?type=ITS_CAMERA` |
| alias | `/so-ts-its-camera` → live filter |
| API | `api/v1/asset/road-assets` |
| build | MFE PASS · BE PASS |
| e2eQa | ON (queued `/agent-qa*`) |
| skillVersion | `2026.08.25.01` |
| writtenAt | `2026-09-02T09:30:00.000Z` |

## Decisions

- ITS_CAMERA profile mirror LIGHTING pattern · grid ON 9 cols · hide-empty
- Form S-ATTR editable dumpSpecs · LOOKUP Dropdown init-data
- Point kmFrom only · ẩn kmTo · name optional (GAP-ITS-NAME/POINT)
- Prefix IT- · GIS CAM (BE DefaultCodePrefix)
- Alias route board-only · cấm camera-connect merge
- migration none · dumpSpecs P1

## Files touched

- MFE: AssetListPage · AssetFormPage · dumpSpecLabels · lookups · endpoint · index
- BE: RoadAssetService · RoadAssetDtos
- Context: so-ts-its-camera-filter-bar.md

## Next

| Role | Need |
|------|------|
| **QA** | e2e S0/S1 queued · mfeStdUrl |
| Review | findings after QA |

## Debt

- GAP-ITS-FLAT-01 defer P2
- E2E not run in dev role
