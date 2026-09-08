# handoff-compact — dev · csdl-cuc-2026

| Field | Value |
|-------|-------|
| schemaVersion | `1` |
| role | `dev` |
| feature | `csdl-cuc-2026` |
| packKind | `list` |
| changeScope | `new_page` |
| formKind | **G** hub |
| status | `done` |
| taskId | `task_461e8b48` |
| contentHash | `sha256:8DED37798D5ACEDFA3E106C0308B26152C9DEB7D1977DD7EDF5EB87991834BE2` |
| demoHash | `sha256:C2C9F8194CB104B3202BCAA46A589C9BABA5CF8062AA12E7D0872A9E96EBA7AE` |
| headerFingerprint | `sha256:e9caffb7922b7d81264750b2701a9318aae1f180b145f3f204a4fd5e6b2dcd33` |
| skillVersion | `2026.08.25.01` |
| workflowVersion | `2026.09.01.02` |
| autoApprove | `ON` |
| e2eQa | `ON` (queued `/agent-qa*` only) |
| handoffTo | `qa` |
| lane | `web` |
| mfeStdRoute | `/csdl-cuc-2026` |
| mfeStdUrl | `http://localhost:9301/csdl-cuc-2026` |
| hubLive | `/so-ts/csdl-so-sach` |
| beRepo | `D:/AI-QLBD/Linm.RMMS.WebService` · **cấm ERP.*** |
| uiRepo | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Asset` |
| writtenAt | `2026-09-07T04:00:00.000Z` |

## Artifacts

| Kind | Path |
|------|------|
| implement | `specs/csdl-cuc-2026/implement/csdl-cuc-2026.md` |
| prior | `handoff/team_lead-compact.md` · sa · design · po · data_analy |

## APIs shipped

| Op | Path |
|----|------|
| catalog | GET `…/csdl-records/catalog?search=` · formNo/kind/bieuCount/soCount |
| import preview | POST `…/import/preview` multipart |
| import | POST `…/import` multipart · skipBridge |
| export | GET `…/export?resource=` CSV |

## Build

| Gate | Result |
|------|--------|
| yarn build | **PASS** |
| API/BFF dotnet build | **PASS** |

## Debt

- `.xls` binary unsupported (xlsx/csv only)
- typed-required columns may fail commit rows (preview lists errors)
- E2E only `/agent-qa*`

## Handoff next

| Role | Do |
|------|----|
| QA | T-10 scenarios + e2e · AC-G-01..10 · alias URL · skipBridge |
| Review | T-11 findings |

## DoR

- [x] T-01..T-09
- [x] build PASS
- [x] no typed re-queue · no ERP.*
- [x] STATUS → confirmed · handoff QA

<!-- compact schemaVersion=1 role=dev feature=csdl-cuc-2026 taskId=task_461e8b48 -->
