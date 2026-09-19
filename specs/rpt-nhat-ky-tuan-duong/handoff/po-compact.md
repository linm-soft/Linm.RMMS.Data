# Handoff compact — po · rpt-nhat-ky-tuan-duong

| | |
|--|--|
| schemaVersion | `1` |
| role | `po` |
| feature | `rpt-nhat-ky-tuan-duong` |
| packKind | `report` · Kind E · **confirm** |
| changeScope | `edit_page` |
| status | `done` |
| taskId | `task_74fe0220` |
| cr | `nktd-pdf-20260917` · Wave B · `SRC-NKTD-PDF` |
| skillVersion | `2026.08.15.5` |
| workflowVersion | `2026.08.15.5` |
| rulesVersion | `2026.08.15.8` |
| writtenAt | `2026-09-18T17:15:00.000Z` |
| contentHashAnaly | `sha256:c5bf1abeceee69764d8f365e1d599d92008faf28a01cb2a29c88520d8baa5703` |

## Decisions

- changeScope: `edit_page` · **giữ** prior Kind E shell
- formPattern: Full page report + Modal config/chart/export
- sourceFeature: `csdl-so-02` · `sourceFormReady=yes` · tables catalog/So02/book_entries
- API: **giữ** `GET api/v1/report/patrol-log-road` (+ `/export`) · **cấm** path mới / ERP.*
- Report AC: FULL · filter 1-row wrap · toolbar actions · SoCai chart · **PASS**
- Leave: `LeaveConfirmModal` / `useAlert` · **PASS**
- Screens: S-RPT Full · S-CFG/S-CHART/S-EXPORT Modal · CRUD **OUT**
- Open Q: PRINT=P2 · NOTE visible · STAFF P1 — defaults Autopilot
- mfe: `Linm.Web.RMMS.Report` · `http://localhost:9311/bao-cao/nhat-ky-tuan-duong`
- be: `Linm.RMMS.WebService`

## Inventory (slim)

| id | label | controlHint | notes |
|----|-------|-------------|-------|
| routeId | Tuyến | SearchInput | road-route · CUC2 |
| staffId | Cán bộ | SearchInput | P1 staff |
| from/to | Kỳ | Date | tz_day EventAt |
| qSearch | Tìm | Input | |
| grid | EventAt·Road·Staff·Km·LocationText·Weather·OnSite·RemarkSign·Note·BookNo | readonly | SIGN/LOC/NOTE GAPs |
| toolbar | Refresh·Chart·Excel·In·Config | reportToolbar | filter **0** action |
| drill | csdl-so-02 / hub resource+id | — | **cấm** `?kind=` |
| load | sổ patrol-logs | — | empty=`[]` · **cấm** seed |

## Screens / zones

- DES-RPT-A toolbar · DES-RPT-C filter · DES-RPT-F config · DES-RPT-CHART · Zone C grid · D pager
- Pattern: Full page · Modals
- reviewUrl= `file:///D:/AI-QLBD/Linm.RMMS.Data/specs/rpt-nhat-ky-tuan-duong/ui/prototype/rpt-nhat-ky-tuan-duong-prototype.html` (**giữ** · delta)
- peerStdUrl= Design chọn peer Kind E report
- map=`none`

## API / tasks (ids)

- FormMode↔API: Report view → GET patrol-log-road · export → /export
- T-UI-RPT-TB-01 · EXPORT-01 · RPT-01 · CONFIG-01 · CHART-01 · PRINT-01=P2
- GAP: SRC-01 · DRILL-01 · SIGN-01 · PRINT-01(P2)

## UNCLEAR

- none (Q-* defaulted Autopilot)

## Full paths

- control-hint: `specs/_data-analy/features/rpt-nhat-ky-tuan-duong-control-hint.md`
- real-data: `specs/_data-analy/features/rpt-nhat-ky-tuan-duong-real-data.md`
- po: `specs/rpt-nhat-ky-tuan-duong/po/requirement.md`
- prior analy compact: `specs/rpt-nhat-ky-tuan-duong/handoff/data_analy-compact.md`
