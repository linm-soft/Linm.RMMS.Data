# handoff-compact — team_lead · csdl-cuc-2026

| Field | Value |
|-------|-------|
| schemaVersion | `1` |
| role | `team_lead` |
| feature | `csdl-cuc-2026` |
| packKind | `list` |
| changeScope | `new_page` |
| formKind | **G** hub |
| status | `done` |
| route_confirm | `approve` |
| taskId | `task_e825e16d` |
| contentHash | `sha256:8DED37798D5ACEDFA3E106C0308B26152C9DEB7D1977DD7EDF5EB87991834BE2` |
| demoHash | `sha256:C2C9F8194CB104B3202BCAA46A589C9BABA5CF8062AA12E7D0872A9E96EBA7AE` |
| headerFingerprint | `sha256:e9caffb7922b7d81264750b2701a9318aae1f180b145f3f204a4fd5e6b2dcd33` |
| skillVersion | `2026.08.25.01` |
| workflowVersion | `2026.09.01.02` |
| autoApprove | `ON` |
| e2eQa | `ON` (queued `/agent-qa*` only) |
| handoffTo | `dev` |
| lane | `web` |
| mfeStdRoute | `/csdl-cuc-2026` |
| mfeStdUrl | `http://localhost:9301/csdl-cuc-2026` |
| hubLive | `/so-ts/csdl-so-sach` |
| beRepo | `D:/AI-QLBD/Linm.RMMS.WebService` · **cấm ERP.*** |
| uiRepo | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Asset` |
| writtenAt | `2026-09-07T03:00:00.000Z` |

## Artifacts

| Kind | Path |
|------|------|
| task | `specs/csdl-cuc-2026/task/csdl-cuc-2026.md` |
| prior | `handoff/sa-compact.md` · design · po · data_analy |

## T-* (compact)

| id | owner | title |
|----|-------|-------|
| T-01 | BE | Catalog/KPI widen 16+10 |
| T-02 | BE | Import preview |
| T-03 | BE | Import commit multipart |
| T-04 | BE | Export |
| T-05 | BFF | Proxy import/export |
| T-06 | FE | Alias `/csdl-cuc-2026` |
| T-07 | FE | Hub Kind G zones A–D |
| T-08 | FE | Import modal + Export |
| T-09 | FE | Deep-link typed only |
| T-10 | QA | Scenarios + e2e queued |
| T-11 | Review | findings |

## API (SA)

| Op | Path |
|----|------|
| catalog | GET `…/csdl-records/catalog` |
| list | GET `…/csdl-records?resource=` |
| import preview/commit | POST `…/import/preview` · `…/import` |
| export | GET `…/export?resource=` |

## Decisions

- route_confirm **approve** · alias ↔ hub live
- Kind G · KPI/catalog **16+10** · Import 16 sheet + skipBridge
- **Cấm** re-queue typed · **cấm** hang-muc merge · **cấm** ERP.*
- GAP-CUC-DM-01 / API-01 **CLOSED** · XLS/ROUTE/CUC-01/02 → Dev

## GAPs → Dev

| ID | Task |
|----|------|
| GAP-CSDL-CUC-01/02 | T-01,T-07 |
| GAP-CSDL-XLS-01 | T-02..T-05,T-08 |
| GAP-CUC-ROUTE-01 | T-06 |
| GAP-TYP-01 | T-07 |
| GAP-CUC-TYPED-00 · CUC-11 | enforce |

## Handoff next

| Role | Do |
|------|----|
| Dev | T-01..T-09 · `implement/csdl-cuc-2026.md` |
| QA | After Dev · T-10 e2e |
| Review | T-11 |

## DoR

- [x] T-* đủ · route_confirm
- [x] hashes align
- [x] no typed re-queue
- [x] STATUS → confirmed · handoff Dev

<!-- compact schemaVersion=1 role=team_lead feature=csdl-cuc-2026 taskId=task_e825e16d -->
