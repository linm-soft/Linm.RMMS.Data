# RUN packet — `sa` · Wave B · `rpt-nhat-ky-tuan-duong`

| Field | Value |
|-------|-------|
| roleOnly | `sa` |
| slash | `/agent-sa` |
| packKind | `report` |
| changeScope | `edit_page` |
| chainNext | `team_lead` |
| compactIn | `specs/rpt-nhat-ky-tuan-duong/handoff/design-compact.md` |
| compactOut | `specs/rpt-nhat-ky-tuan-duong/handoff/sa-compact.md` |
| beRoot | `D:/AI-QLBD/Linm.RMMS.WebService` |

## DoR
Read compactIn. Live `LoadPatrolLogRoadAsync` / `LoadPatrolLogAsync("Tuần đường")`.

## Write
- `specs/rpt-nhat-ky-tuan-duong/be/solution-discovery.md` § FormType **report** + query map
- compactOut

## MUST
| | |
|--|--|
| Path | **giữ** `GET api/v1/report/patrol-log-road` (+ `/export`) |
| Load | query sổ `resource=patrol-logs` + So02 + book entries |
| Empty | `items=[]` · **cấm** seed 12 khi query sổ chạy |
| Filter | `from/to` trên `EventAt` · `tz_day` |
| Map | DTO ← bảng Map trong TL pack |
| Join | **cấm** N+1 per entry |
| BFF | proxy only |
| Export | CSV UTF-8 BOM · cùng filter · `report_export=export_yes` (giữ) |
| Chart | SoCai `includeChartData` từ items live |

Index chậm → Schema **riêng** (Dev) · SA chỉ ghi · **cấm** Seed nhét Schema.

## Cấm (packet này)
`api/v1/reports` · path mới · ERP.* · POST/PUT/DELETE trên slug report · chạy migration · implement UI.
