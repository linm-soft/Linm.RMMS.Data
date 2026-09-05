# handoff-compact — dev · so-ts-lighting

| | |
|--|--|
| schemaVersion | `1` |
| role | `dev` |
| feature | `so-ts-lighting` |
| status | `done` |
| taskId | `task_a04db633` |
| packKind | `list` |
| changeScope | `new_page` |
| typeCode | `LIGHTING` |
| prefix | `CS-` |
| buildGate | PASS |
| skillVersion | `2026.08.25.01` |
| writtenAt | `2026-09-02T08:45:00.000Z` |

## Decisions

- route_confirm=route_a · live `/so-ts?type=LIGHTING` · alias `/so-ts-lighting` Navigate
- Grid ON: management · 3 tầng · kmFrom · số cột/đèn · MBA · tủ · vitri · hide type/kmTo/SL/ĐVT · hide-empty số
- Form S-ATTR editable 9 dump keys · name optional · kmFrom optional POINT · ẩn kmTo
- BE init: lightingManagementUnits · bulbTypes · transformingStationTypes · controlMethods · vitriOptions reuse
- DefaultCodePrefix `CS-` · ValidateRequired name/kmFrom optional
- LeaveConfirmModal + useAlert · cấm native dialog
- cấm Solar*/LampWatt · cấm ERP.* · no migration

## APIs

- `GET/POST/PUT/DELETE api/v1/asset/road-assets` · `GET …/init-data`
- BFF proxy `web-bff/api/v1/asset/road-assets`

## URLs

- mfeStdUrl=`http://localhost:9301/so-ts?type=LIGHTING`
- alias=`http://localhost:9301/so-ts-lighting`
- peerStdUrl=`http://localhost:9301/so-ts?type=LIGHTING`

## Files touched

- MFE: AssetListPage · AssetFormPage · dumpSpecLabels · lookups · endpoint · index
- BE: RoadAssetService · RoadAssetDtos
- Docs: so-ts-lighting-filter-bar.md · so-ts-lighting.md tracking

## Next

| Role | Need |
|------|------|
| QA | e2e queued `/agent-qa*` |
| review | review/findings.md |

## Debt

- flatten dumpSpecs DEFER P2 · GAP-AK32-07 solar out of scope
