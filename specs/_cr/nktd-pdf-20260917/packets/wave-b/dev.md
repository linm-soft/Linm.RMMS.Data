# RUN packet — `dev` · Wave B · `rpt-nhat-ky-tuan-duong`

| Field | Value |
|-------|-------|
| roleOnly | `dev` |
| slash | `/agent-dev` |
| packKind | `report` |
| changeScope | `edit_page` |
| chainNext | `qa` |
| mfe | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Report` |
| mfeStdUrl | `http://localhost:9311/bao-cao/nk-td` |
| compactIn | `specs/rpt-nhat-ky-tuan-duong/handoff/team_lead-compact.md` |
| compactOut | `specs/rpt-nhat-ky-tuan-duong/handoff/dev-compact.md` |
| tlPack | `specs/rpt-nhat-ky-tuan-duong/task/rpt-nhat-ky-tuan-duong-cr-pdf.md` |

## DoR
Load tlPack **trước Write**. `/filter-bar-context` · Write `docs/context/features/rpt-nhat-ky-tuan-duong-filter-bar.md` nếu thiếu. Layout `/erp-report-context` — **không** clone ERP repo.

## T-*
| id | DoD |
|----|-----|
| T-BE-RPT-01 | Load đọc **sổ**. 0 dòng = empty. **Cấm** seed. **Cấm** path mới. Join không N+1 |
| T-BE-02 | CSV UTF-8 BOM cùng filter |
| T-BFF-01 | proxy only |
| T-PERM-01 | search/export |
| T-UI-RPT-01 | FilterBar V10 · Xem work · cột vị trí text · **cấm** Thêm mới |
| T-UI-RPT-TB-01 | export/print **toolbar** |
| T-UI-RPT-CONFIG-01 | FULL modal · **cấm** `configHint` |
| T-UI-RPT-EXPORT-01 | Excel sau Xem |
| T-UI-RPT-CHART-01 | SoCai live · **cấm** stub |
| T-UI-RPT-PRINT-01 | P1 print grid · bìa PDF = P2 không block |
| T-FE-02 | drill `/csdl-so-02` hoặc `?resource=` · **cấm** `?kind=` |
| T-HDSD-01 | bỏ «Tạo mới» trên HDSD report |
| T-UI-UX-01 | constitution |

## Build HARD
`yarn` Report MFE + `dotnet` WebService. Ghi `mfeStdUrl`.

## Cấm (packet này)
QA e2e · CRUD form · invent `api/v1/reports` · Excel trên filter bar.
