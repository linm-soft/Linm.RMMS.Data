# Handoff compact — design · rpt-nhat-ky-tuan-duong

| | |
|--|--|
| schemaVersion | `1` |
| role | `design` |
| feature | `rpt-nhat-ky-tuan-duong` |
| packKind | `report` · Kind E |
| changeScope | `edit_page` |
| status | `done` |
| taskId | `task_6d170bb5` |
| cr | `nktd-pdf-20260917` · Wave B |
| skillVersion | `2026.08.15.5` |
| workflowVersion | `2026.08.15.5` |
| rulesVersion | `2026.08.15.8` |
| writtenAt | `2026-09-18T17:30:00.000Z` |
| contentHashAnaly | `sha256:c5bf1abeceee69764d8f365e1d599d92008faf28a01cb2a29c88520d8baa5703` |
| design_confirm | `approve` · autoApprove ON |

## Decisions

- changeScope: `edit_page` · **giữ** Kind E shell · delta drill+cols+toolbar
- formPattern: Full page report + Modal config/chart/export
- real_view_parity: `v1` · report_standard: `v1`
- mfe: `Linm.Web.RMMS.Report` · be: `Linm.RMMS.WebService`
- API: **giữ** `GET api/v1/report/patrol-log-road` (+ `/export`) · **cấm** path mới / ERP.*
- source: `csdl-so-02` · empty=`[]` · **cấm** seed
- Print bìa PDF: **P2** GAP-NKTD-PRINT-01
- open Q: none (PO defaults)

## Inventory (slim)

| id | label | controlHint | notes |
|----|-------|-------------|-------|
| routeId | Tuyến | SearchInput | road-route |
| staffId | Cán bộ | SearchInput | P1 |
| from/to | Kỳ | Date | tz_day EventAt |
| qSearch | Tìm | Input | |
| grid | EventAt·Road·Staff·Km·LocationText·Weather·OnSite·RemarkSign·Note·Status·BookNo | readonly | SIGN/LOC/NOTE |
| toolbar | Refresh·Chart·Excel·In·Config | reportToolbar | filter **0** action |
| drill | /csdl-so-02 · hub resource+id | — | **cấm** `?kind=` |

## Screens / zones

- DES-RPT-A toolbar · DES-RPT-C filter · DES-RPT-F config · DES-RPT-CHART · Zone C/D
- formPattern: Full + Modals
- reviewUrl=`file:///D:/AI-QLBD/Linm.RMMS.Data/specs/rpt-nhat-ky-tuan-duong/ui/prototype/rpt-nhat-ky-tuan-duong-prototype.html`
- peerStdUrl=`http://localhost:9311/bao-cao/nhat-ky-tuan-duong`
- real_view_parity=`v1`
- map=`none`

## API / tasks (ids)

- FormMode↔API: Report → GET patrol-log-road · export → /export
- T-UI-RPT-TB-01 · EXPORT-01 · RPT-01 · CONFIG-01 · CHART-01 · PRINT-01=P2
- GAP: SRC-01 · DRILL-01 · SIGN-01 · PRINT-01(P2)

## UNCLEAR

- none

## Full paths

- design: `specs/rpt-nhat-ky-tuan-duong/ui/design.md`
- prototype: `specs/rpt-nhat-ky-tuan-duong/ui/prototype/rpt-nhat-ky-tuan-duong-prototype.html`
- control-hint: `specs/_data-analy/features/rpt-nhat-ky-tuan-duong-control-hint.md`
- real-data: `specs/_data-analy/features/rpt-nhat-ky-tuan-duong-real-data.md`
- po: `specs/rpt-nhat-ky-tuan-duong/po/requirement.md`
