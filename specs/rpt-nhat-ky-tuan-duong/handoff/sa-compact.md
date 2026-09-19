# Handoff compact — sa · rpt-nhat-ky-tuan-duong

| | |
|--|--|
| schemaVersion | `1` |
| role | `sa` |
| feature | `rpt-nhat-ky-tuan-duong` |
| packKind | `report` · Kind E |
| changeScope | `edit_page` |
| status | `done` |
| taskId | `task_5f0a988e` |
| cr | `nktd-pdf-20260917` · Wave B |
| solution_confirm | `approve` · autoApprove ON |
| skillVersion | `2026.08.15.5` |
| workflowVersion | `2026.08.15.5` |
| rulesVersion | `2026.08.15.8` |
| contentHashAnaly | `sha256:c5bf1abeceee69764d8f365e1d599d92008faf28a01cb2a29c88520d8baa5703` |
| writtenAt | `2026-09-18T17:45:00.000Z` |

## Decisions

- changeScope: `edit_page` · **giữ** API path · delta load join sổ
- formPattern: Full page report + Modal config/chart/export
- mfe: `Linm.Web.RMMS.Report` · be: `Linm.RMMS.WebService`
- API: **giữ** `GET api/v1/report/patrol-log-road` (+ `/export`) · **cấm** path mới / ERP.*
- source: `csdl-so-02` · tables catalog/So02/book_entries · empty=`[]` · **cấm** seed
- entity/migration: consume Csdl* · **migration=none**
- report_export=`export_yes` · report_chart=`socai` (client items)
- gates: `tz_day` · `xco_na` · `share_na` · lookup road-route `share_a`
- Print bìa PDF: **P2** · open Q: none

## Inventory (slim)

| id | label | controlHint | notes |
|----|-------|-------------|-------|
| routeId | Tuyến | SearchInput | API-LKP-01 road-route |
| staffId | Cán bộ | SearchInput | query staffId P1 |
| from/to | Kỳ | Date | tz_day EventAt |
| qSearch | Tìm | Input | q |
| grid | EventAt·Road·Staff·Km·LocationText·Weather·OnSite·RemarkSign→supervisorNote·Note·Status·BookNo | readonly | SRC/SIGN/LOC |
| toolbar | Refresh·Chart·Excel·In·Config | reportToolbar | filter **0** action |
| drill | /csdl-so-02 · hub resource+id | — | **cấm** `?kind=` |

## Screens / zones

- DES-RPT-A/C/F/CHART · Zone C/D · S-RPT Full · Modals
- peerStdUrl=`http://localhost:9311/bao-cao/nhat-ky-tuan-duong`
- map=`none`

## API / tasks (ids)

- FormMode↔API: Xem→API-01 · Excel→API-02 · route→API-LKP-01
- T-UI-RPT-TB-01 · EXPORT-01 · RPT-01 · CONFIG-01 · CHART-01 · PRINT-01=P2
- GAP: SRC-01 · DRILL-01 · SIGN-01 · PRINT-01(P2)
- TZ=`tz_day` · XCO=`xco_na` · SHARE=`share_na`

## UNCLEAR

- none

## Full paths

- sa: `specs/rpt-nhat-ky-tuan-duong/be/solution-discovery.md`
- design: `specs/rpt-nhat-ky-tuan-duong/ui/design.md`
- control-hint: `specs/_data-analy/features/rpt-nhat-ky-tuan-duong-control-hint.md`
- real-data: `specs/_data-analy/features/rpt-nhat-ky-tuan-duong-real-data.md`
- po: `specs/rpt-nhat-ky-tuan-duong/po/requirement.md`
