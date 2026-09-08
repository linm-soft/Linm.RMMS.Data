# handoff-compact — data_analy · csdl-cuc-2026

| Field | Value |
|-------|-------|
| schemaVersion | `1` |
| role | `data_analy` |
| feature | `csdl-cuc-2026` |
| packKind | `list` |
| changeScope | `new_page` |
| status | `done` |
| taskId | `task_63dd8d84` |
| mode | `feature_context` |
| analyzedAt | `2026-09-06T19:27:00.000Z` |
| skillVersion | `2026.08.25.01` |
| workflowVersion | `2026.09.01.02` |
| contentHash | `sha256:8DED37798D5ACEDFA3E106C0308B26152C9DEB7D1977DD7EDF5EB87991834BE2` |
| demoHash | `sha256:C2C9F8194CB104B3202BCAA46A589C9BABA5CF8062AA12E7D0872A9E96EBA7AE` |
| headerFingerprint | `sha256:e9caffb7922b7d81264750b2701a9318aae1f180b145f3f204a4fd5e6b2dcd33` |
| handoffTo | `po` |
| lane | `web` |
| beRepo | `D:/AI-QLBD/Linm.RMMS.WebService` |
| uiRepo | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Asset` |
| mfeStdRoute | `/csdl-cuc-2026` |
| mfeStdUrl | `http://localhost:9301/csdl-cuc-2026` |
| hubLive | `/so-ts/csdl-so-sach` |

## Artifacts

| Kind | Path |
|------|------|
| control-hint | `specs/_data-analy/features/csdl-cuc-2026-control-hint.md` |
| real-data | `specs/_data-analy/features/csdl-cuc-2026-real-data.md` |
| context | `docs/context/features/csdl-cuc-2026.md` |
| analy | `specs/_data-analy/csdl-cuc-2026/ANALYSIS-AND-TASKS.md` |
| demo | `Linm.RMMS.Demo/src/demo/features/csdl-so-sach-demo.html` |

## Scope (HARD)

- Hub Kind **G**: KPI/catalog **16 biểu + 10 sổ** (đóng GAP-CSDL-CUC-01/02).
- Import Excel Cục 16 sheet (GAP-CSDL-XLS-01 / CUC-04) · Q-PEER deep-link.
- Typed `csdl-bieu-01…16` / `csdl-so-01…10` **done** — **cấm** re-enqueue.
- **Cấm** gộp hang-muc / Sổ TS row (GAP-CSDL-CUC-11).
- **Cấm** ERP.* · infra · mobile lane.

## Zones → Design

`A` header+KPI · `B` tabs+search+Import/Export · `C` catalog cards · `D` empty/footer · import modal.

Normalized header: `tab|kpiBieu|kpiSo|search|resource|importXls|exportXls|formNo`

## API bind (compact)

| Op | Path | Note |
|----|------|------|
| records | `…/asset/csdl-records?resource=` | live shell |
| catalog/KPI | Asset catalog | widen **16+10** |
| import | POST import | **GAP** SA |
| lookups | Integration road-route / org-unit | cite |

## GAPs → next roles

| ID | Owner |
|----|-------|
| GAP-CSDL-CUC-01/02 | PO/Design/Dev |
| GAP-CSDL-XLS-01 | SA/Dev |
| GAP-CUC-DM-01 | SA (DOMAIN-MAP slug) |
| GAP-CUC-ROUTE-01 | Design/Dev |
| GAP-CSDL-CUC-11 | All |
| GAP-CUC-TYPED-00 | TL (no re-queue) |

## DoR

- [x] control-hint status=done
- [x] real-data status=done §A–§G
- [x] packKind=list · changeScope=new_page
- [x] hashes CTX+demo
- [x] handoff PO ready
