# handoff-compact — sa · csdl-cuc-2026

| Field | Value |
|-------|-------|
| schemaVersion | `1` |
| role | `sa` |
| feature | `csdl-cuc-2026` |
| packKind | `list` |
| changeScope | `new_page` |
| status | `done` |
| solution_confirm | `approve` |
| taskId | `task_23772fff` |
| contentHash | `sha256:8DED37798D5ACEDFA3E106C0308B26152C9DEB7D1977DD7EDF5EB87991834BE2` |
| demoHash | `sha256:C2C9F8194CB104B3202BCAA46A589C9BABA5CF8062AA12E7D0872A9E96EBA7AE` |
| headerFingerprint | `sha256:e9caffb7922b7d81264750b2701a9318aae1f180b145f3f204a4fd5e6b2dcd33` |
| skillVersion | `2026.08.25.01` |
| workflowVersion | `2026.09.01.02` |
| autoApprove | `ON` |
| e2eQa | `ON` (queued `/agent-qa*` only) |
| handoffTo | `team_lead` |
| lane | `web` |
| mfeStdRoute | `/csdl-cuc-2026` |
| mfeStdUrl | `http://localhost:9301/csdl-cuc-2026` |
| hubLive | `/so-ts/csdl-so-sach` |
| beRepo | `D:/AI-QLBD/Linm.RMMS.WebService` · **cấm ERP.*** |
| uiRepo | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Asset` |
| writtenAt | `2026-09-07T02:45:00.000Z` |

## Artifacts

| Kind | Path |
|------|------|
| solution | `specs/csdl-cuc-2026/be/solution-discovery.md` |
| DOMAIN-MAP | `Linm.RMMS.WebService/docs/DOMAIN-MAP.md` · slug `csdl-cuc-2026` |
| prior | `handoff/design-compact.md` · `po-compact.md` · `data_analy-compact.md` |

## FormMode ↔ API (chốt)

| Mode | Op | Path |
|------|-----|------|
| Catalog/KPI | GET | `/web-bff/api/v1/asset/csdl-records/catalog` · **live** widen 16+10 |
| List shell | GET | `/web-bff/api/v1/asset/csdl-records?resource=` · **live** |
| Import preview | POST | `/web-bff/api/v1/asset/csdl-records/import/preview` · **new** |
| Import commit | POST | `/web-bff/api/v1/asset/csdl-records/import` · multipart · skipBridge · **new** |
| Export | GET | `/web-bff/api/v1/asset/csdl-records/export?resource=` · **new** |

BFF proxy-only · API Asset business · tenant `CompanyCode`.

## Entity

- Shell: `CsdlCatalogRecordEntity` / `rmms_csdl_catalog_records`
- Import → typed child tables (done) theo resource map
- Optional staging job table — Dev · **không** Step 4b ở SA

## Decisions

- DOMAIN-MAP `csdl-cuc-2026` → Asset (`asset`) — **GAP-CUC-DM-01 CLOSED**
- Catalog live widen · import/export contract SA — **GAP-CUC-API-01 CLOSED**
- Alias `/csdl-cuc-2026` ↔ hub live · formNo Cục · giữ resource key
- **Cấm** merge hang-muc/Sổ TS · **cấm** re-queue typed · **cấm** ERP.*
- solution_confirm **approve** (autoApprove ON)

## GAPs → next

| ID | Owner |
|----|-------|
| GAP-CSDL-XLS-01 | Dev (import/export + BFF multipart) |
| GAP-CSDL-CUC-01/02 · ROUTE-01 · TYP-01 | Dev |
| GAP-CSDL-CUC-11 · TYPED-00 | All/TL |

## Handoff next

| Role | Do |
|------|----|
| TL | Tasks theo GAP · no typed re-queue · web only |
| Dev | Seed 16+10 · import/export · MFE hub alias |
| QA | After Dev · e2e queued |

## DoR

- [x] Design confirmed + compact
- [x] FormMode↔API · BFF vs API · entity note
- [x] solution_confirm approve
- [x] DOMAIN-MAP slug
- [x] handoff TL ready

<!-- compact schemaVersion=1 role=sa feature=csdl-cuc-2026 taskId=task_23772fff -->
