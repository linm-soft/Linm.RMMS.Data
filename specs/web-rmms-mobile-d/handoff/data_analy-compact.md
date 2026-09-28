# handoff compact — data_analy → po

| Field | Value |
|-------|-------|
| schemaVersion | `1` |
| feature | `web-rmms-mobile-d` |
| role | `data_analy` |
| packKind | `list` |
| changeScope | `edit_page` |
| taskId | `task_b83eb3a7` |
| status | `PASS` |
| demo | `N/A` |
| contentHash | `sha256:5f81d29ed889b244e81f537e7e3f8e8d4033a5f3a2e8b37e000d83ad97784488` |
| skillVersion | `2026.09.05.03` |
| workflowVersion | `2026.09.19.02` |
| rulesVersion | `2026.09.25.2` |
| analyzedAt | `2026-09-27T08:35:00.000Z` |
| nextRole | `po` |

## Paths

| Artifact | Path |
|----------|------|
| controlHint | `specs/_data-analy/features/web-rmms-mobile-d-control-hint.md` |
| realData | `specs/_data-analy/features/web-rmms-mobile-d-real-data.md` |
| context | `docs/context/features/web-rmms-mobile-d.md` |
| deltaCite | `docs/plan/web-rmms-mobile/SUBMIT-VALIDATE.md` |
| mfe | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Mobile` |
| be | `D:/AI-QLBD/Linm.RMMS.WebService` |
| mfeStdUrl | `http://localhost:9301/kien-nghi/moi` |
| mfeStdRoute | `/kien-nghi/moi` |
| reviewUrl (keep) | `file:///D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-mobile-d/ui/prototype/index.html` |

## Delta (mandatory)

- **edit_page** · NEW task · **cấm** `new_page` typed CRUD · **cấm** Excel
- TD-06 `CloseSessionPage`: `receiverName` → **SearchInput users** (`integration/users` via Mobile.Bff) · Pattern B submit
- TK-06 `PetitionFormPage`: `route` → **SearchInput road-routes** · no `ROAD_ROUTE_SEED` · Pattern B
- BFF: forward `GET integration/users` · all calls `mobileApiBase()` · **cấm** web-bff
- Align: MFE 430 · no new tab/route/icon · no android/ios prototype
- Keep prior PO/Design/SA baseline · overlay delta only

## Screens / zones

| id | file | zone |
|----|------|------|
| TD-06 | `WebRmmsMobileD/CloseSessionPage.tsx` | receiver SearchInput · save Pattern B |
| TK-06 | `WebRmmsMobileD/PetitionFormPage.tsx` | route SearchInput · save Pattern B |

## DoR checklist

- [x] control-hint + real-data both present
- [x] § Delta Current vs New cited SUBMIT-VALIDATE
- [x] packKind=list · changeScope=edit_page · demo N/A
- [x] mfeStd real `/kien-nghi/moi`
- [x] BE ONLY RMMS.WebService + DOMAIN-MAP
- [x] handoff PO ready

## Open (non-blocking)

| id | note |
|----|------|
| UNCLEAR-USER-SEARCH-CTRL | Mobile SearchInput users pattern (not ERP UserSearchInput) |
| GAP-DA-MOB-D-USERS-01 | BFF forward users |
| GAP-DA-MOB-D-SEED-01 | remove ROAD_ROUTE_SEED |
