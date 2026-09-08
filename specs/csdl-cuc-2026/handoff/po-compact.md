# handoff-compact — po · csdl-cuc-2026

| Field | Value |
|-------|-------|
| schemaVersion | `1` |
| role | `po` |
| feature | `csdl-cuc-2026` |
| packKind | `list` |
| changeScope | `new_page` |
| status | `done` |
| taskId | `task_0387daca` |
| skillVersion | `2026.08.25.01` |
| workflowVersion | `2026.09.01.02` |
| contentHash | `sha256:8DED37798D5ACEDFA3E106C0308B26152C9DEB7D1977DD7EDF5EB87991834BE2` |
| demoHash | `sha256:C2C9F8194CB104B3202BCAA46A589C9BABA5CF8062AA12E7D0872A9E96EBA7AE` |
| headerFingerprint | `sha256:e9caffb7922b7d81264750b2701a9318aae1f180b145f3f204a4fd5e6b2dcd33` |
| handoffTo | `design` |
| lane | `web` |
| mfeStdRoute | `/csdl-cuc-2026` |
| mfeStdUrl | `http://localhost:9301/csdl-cuc-2026` |
| hubLive | `/so-ts/csdl-so-sach` |
| beRepo | `D:/AI-QLBD/Linm.RMMS.WebService` |
| uiRepo | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Asset` |
| autoApprove | `ON` |
| generatedAt | `2026-09-06T19:45:00.000Z` |

## Artifacts

| Kind | Path |
|------|------|
| requirement | `specs/csdl-cuc-2026/po/requirement.md` |
| control-hint | `specs/_data-analy/features/csdl-cuc-2026-control-hint.md` |
| real-data | `specs/_data-analy/features/csdl-cuc-2026-real-data.md` |
| prior compact | `specs/csdl-cuc-2026/handoff/data_analy-compact.md` |

## Scope (HARD)

- Kind **G** hub: KPI/catalog **16 biểu + 10 sổ** + Import Excel Cục 16 sheet.
- Alias route `/csdl-cuc-2026` ↔ hub live.
- Typed 16+10 **done** — deep-link only · **cấm** re-queue.
- **Cấm** merge hang-muc / Sổ TS · **cấm** ERP.* · web only.

## Zones → Design

`A` header+KPI · `B` tabs+search+Import/Export/Refresh · `C` catalog cards · `D` empty · import modal.

Header: `tab|kpiBieu|kpiSo|search|resource|importXls|exportXls|formNo`

## Grid AC (compact)

| ID | Pass when |
|----|-----------|
| AC-G-01 | KPI/catalog 16+10 API |
| AC-G-02 | Tabs 16/10 + search |
| AC-G-03 | Cards formNo+title+count · no slug |
| AC-G-04 | formNo≠resource key |
| AC-G-05 | alias route |
| AC-G-06 | Import 16 sheet + skip Biểu1 cầu âm |
| AC-G-07 | Export |
| AC-G-08 | Empty VN · no mock |
| AC-G-09 | typography 13/D14/M16 |
| AC-G-10 | filter-bar-layout-hard |

## Leave

Typed Slideout · Q-PEER sync · hang-muc merge · report/mobile · e2e/migration.

## GAPs → next

| ID | Owner |
|----|-------|
| GAP-CSDL-CUC-01/02 | Design/Dev |
| GAP-CSDL-XLS-01 | SA/Dev |
| GAP-CUC-DM-01 | SA |
| GAP-CUC-ROUTE-01 | Design/Dev |
| GAP-CUC-API-01 | SA |
| GAP-CSDL-CUC-11 | All |
| GAP-CUC-TYPED-00 | TL |
| GAP-TYP-01 | Design |

## DoR

- [x] requirement done · Grid AC · Screens · Leave
- [x] analy hash reuse · no demo rescan
- [x] handoff Design ready
