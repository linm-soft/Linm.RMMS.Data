# Implement — web-rmms-bien-ban

| Field | Value |
|-------|-------|
| feature | `web-rmms-bien-ban` |
| role | `dev` · `/agent-dev` |
| status | `done` |
| changeScope | `new_page` |
| packKind | `list` (phone) |
| mfe | `Linm.Web.RMMS.Mobile` |
| mfeStdRoute | `/web-rmms-bien-ban` |
| mfeStdUrl | `http://localhost:9301/web-rmms-bien-ban` |
| be | `D:/AI-QLBD/Linm.RMMS.WebService` · Patrol · **cấm ERP.*** |
| contentHash | `sha256:bc9070c4ab20da1960355a727eae18029943c2d95865aebd7d9bcb443ea60cd2` |
| skillVersion | `2026.09.05.03` |
| schemaVersion | `1` |
| updatedAt | `2026-09-26T01:15:00.000Z` |
| taskId | `task_6c1e4a8b` |
| build | MFE `yarn build` **PASS** · BE `dotnet build` **PASS** |

## Surfaces

| Zone | Route | Notes |
|------|-------|-------|
| BB-00/01 | `/web-rmms-bien-ban` | GET petitions `kind=hanh-lang` · search · empty · auth gate |
| BB-02 | `/web-rmms-bien-ban/td/new?journalLineId=` | TD create · `de-nghi-bien-ban` → ViolationFlag · POST + PUT journal |
| BB-03 | `/web-rmms-bien-ban/tk/new?findingId=` | TK create · ViolationAction · POST + PUT findings |
| BB-04/05 | `/web-rmms-bien-ban/:id` | detail RO · leadSo07 disable+copy |
| BB-06 | peer nav | TD → mobile-b · TK → mobile-c |
| BB-07 | chips on list | create TD/TK buttons |
| DES-LEAVE | LeaveConfirmModal | dirty BB-02/03 |

## APIs (mobile-bff)

| Call | Path |
|------|------|
| LIST | `GET …/patrol/petitions?kind=hanh-lang` |
| CREATE | `POST …/patrol/petitions` |
| DETAIL | `GET …/patrol/petitions/{id}` |
| PARENT TD | `GET|PUT …/patrol/journal-lines/{id}` ViolationFlag |
| PARENT TK | `GET|PUT …/patrol/findings/{id}` ViolationAction |
| AUTH | `hasAccessToken` + profile lite |

## BE Step 4b

- Petitions GetList: query `kind` filter (Live reuse · no migration)
- Findings: `UpdatePatrolFindingRequest` + `PUT api/v1/patrol/findings/{id}` · web-bff PUT proxy
- DOMAIN-MAP row `web-rmms-bien-ban` already CLOSED (SA)
- Entity Mới: **none** · **cấm** BienBan*

## T-* status

| Task | Status |
|------|--------|
| T-BE-CRUD-01 · T-BE-INIT-01 · T-PERM-01 | **done** |
| T-UI-LIST/FORM/ACT/LEAVE/FIELD/PROD/UX/RESP/HIST | **done** |
| T-QA-* | pending (queued `/agent-qa*`) |
| WAIVE SCHEMA/FILTER/CFG/UISCHEMA/LKP | kept |

## Debt

- SO07: Mobile không host → button disabled + toast/copy (PO)
- Create TD/TK **chặn** nếu thiếu `journalLineId` / `findingId` (SA parent required)
- Kind B / LinErpListFilterBar / ui-schema: N/A phone

## Verify

```
yarn build  # PASS (chunk web-rmms-bien-ban)
dotnet build api/src/RMMS.Service.Api  # PASS
```
