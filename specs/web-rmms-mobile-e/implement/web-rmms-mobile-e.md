# Implement — web-rmms-mobile-e

| Field | Value |
|-------|-------|
| feature | `web-rmms-mobile-e` |
| role | `dev` · `/agent-dev` |
| status | `done` |
| packKind | `list` (phone Field list RO) |
| changeScope | `edit_page` |
| formPattern | Mobile full list RO (TK-07) · phone 430 · no write |
| mfe | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Mobile` |
| mfeStdRoute | `/web-rmms-mobile-e` |
| mfeStdUrl | `http://localhost:9301/web-rmms-mobile-e` |
| be | `D:/AI-QLBD/Linm.RMMS.WebService` · Patrol + Integration road-routes · **cấm ERP.*** |
| BFF | `web-bff/api/v1/patrol/frequency-plans` · mobile-bff catch-all same path |
| contentHash | `sha256:b7fde038e4ef2cdb7ac0cacf9eb5f303671f1daffcbe9d058c5107e78413db2d` |
| skillVersion | `2026.09.05.03` |
| schemaVersion | `1` |
| updatedAt | `2026-09-25T17:45:00.000Z` |
| taskId | `task_b8b37095` |
| build | MFE `yarn build` **PASS** · API `dotnet build` **PASS** · Patrol.Bff **PASS** |

## Delivered

### BE (Step 4b · order HARD)
1. Migration `Schema_RoadRouteRoadClass` (`20260925180000`) — `RoadClass` string? MaxLength(32) trên `rmms_road_routes` + index
2. Migration `Schema_PatrolFrequencyRule` (`20260925180001`) — table `rmms_patrol_frequency_rules` (`RoadClass`·`RuleText`·`RequiredPatrolDay`·`RequiredInspectWeek`·`IsActive` · tenant)
3. Entity `PatrolFrequencyRuleEntity` + DbSet + fluent · `RoadRouteEntity.RoadClass` + DTO/search/create/update expose
4. `GET api/v1/patrol/frequency-plans` — join routes + rules + session agg · query `asOfDate`·`weekStart`·`routeCode`·`page`·`pageSize`
   - `patrolDayCount` = ca Tuần đường / asOfDate · `inspectWeekCount` = đợt Tuần kiểm / week · **IsPaused excluded**
   - `coverageStatus` server `thieu`|`du` · empty list OK · **cấm** mock
5. BFF `PatrolFrequencyPlansBffController` · perm stub `patrol.frequency-plans.read`
6. Seed **tách** — không seed rule trong Schema migration

### FE
- Route shell `/web-rmms-mobile-e` · phone 430 · `FrequencyPlanListPage` TK-07 cards RO
- `patrolFrequencyPlansEndpoint` · LOOKUP_STATIC `coverageStatus` · `roadClass`
- emptyHint on empty/error · refresh · backHub → TK-00 Inspect hub
- Entry từ `InspectHubPage` · `devRoutes` Wave E
- **cấm** DES-GRID / LinErpListFilterBar / mock counts / GPS / edit rule

## APIs wired

| Surface | Method | Path |
|---------|--------|------|
| TK-07 planList | GET | `patrol/frequency-plans` |
| roadClass cite | GET | `integration/road-routes/search` (RoadClass on DTO) |
| sessions agg | — | server-only inside frequency-plans |

## WAIVE (phone)
Kind B grid · LinErpListFilterBar · ui-schema editor · write form · Leave · LKP · HIST — N/A

## Debt / GAP keep
- Frequency rule seed tách (ops) — list empty-OK until rules+RoadClass filled
- RequirePermission TODO peer (CommonLib ≥1.4.0)
- mobile-bff sibling — catch-all proxy same resource
- e2e **queued QA** — cấm Dev

## Verify
- `yarn build` PASS (chunk `web-rmms-mobile-e`)
- `dotnet build` RMMS.Service.Api PASS
- `dotnet build` LINM.RMMS.Patrol.Bff PASS
