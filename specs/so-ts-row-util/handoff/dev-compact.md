# handoff-compact — dev · so-ts-row-util

| | |
|--|--|
| schemaVersion | `1` |
| role | `dev` |
| feature | `so-ts-row-util` |
| status | `done` |
| taskId | `task_7396fccf` |
| packKind | `list` |
| changeScope | `new_page` |
| typeCode | `ROW_UTIL` |
| prefix | `HT-` (GIS `HT`) |
| formPattern | Full page · CatalogFormShell 5 cols · S-LOC-RANGE |
| skillVersion | `2026.08.25.01` |
| workflowVersion | `2026.09.01.02` |
| writtenAt | `2026-09-02T03:15:00.000Z` |

## Decisions

- ROW_UTIL profile list+form parity Kind B · reuse `/so-ts` shell · **cấm** fork AssetFormPage tab legacy
- mfeStdRoute=`/so-ts?type=ROW_UTIL` · alias `/so-ts-row-util` redirect
- API `api/v1/asset/road-assets` · init `rowUtil*` LOOKUP · dumpSpecs P1 · **cấm** ERP.* · **cấm** migration
- name←`tencongtrinh_htk` · optional · S-LOC-RANGE kmFrom+kmTo optional · type_work_id required
- build: MFE+BE **PASS**

## Files touched

| area | path |
|------|------|
| MFE route | `src/index.tsx` |
| MFE list | `src/pages/AssetListPage/AssetListPage.tsx` |
| MFE form | `src/pages/AssetFormPage/AssetFormPage.tsx` |
| MFE labels | `src/services/asset/dumpSpecLabels.ts` |
| MFE API | `src/services/asset/endpoint.ts` · `lookups.ts` |
| BE DTO | `api/domains/asset/LINM.RMMS.Asset.Models/DTOs/RoadAssetDtos.cs` |
| BE service | `api/src/RMMS.Service.Api/Domains/Asset/Services/RoadAssetService.cs` |
| BE import | `api/src/RMMS.Service.Api/Domains/Asset/Import/RoadAssetCatalogHandler.cs` |
| context | `docs/context/features/so-ts-row-util-filter-bar.md` |

## API / mfeStdUrl

- GET/POST/PUT/DELETE `api/v1/asset/road-assets` · `?type=ROW_UTIL`
- init-data: `rowUtilWorkTypes[]` · `rowUtilLocatedWithin[]` · `rowUtilProtectionTypes[]` · `rowUtilSupportTypes[]` · `rowUtilHiringStatuses[]` · `rowUtilCrossSections[]`
- mfeStdUrl=`http://localhost:9301/so-ts?type=ROW_UTIL` · alias `http://localhost:9301/so-ts-row-util`

## Debt

- flatten DEFER P2 · hide-empty grid runtime (peer parity)

## Next

| Role | Need |
|------|------|
| **QA** | e2e `/agent-qa*` · scenarios |

## Full paths

- implement: `specs/so-ts-row-util/implement/so-ts-row-util.md`
- filter: `docs/context/features/so-ts-row-util-filter-bar.md`
