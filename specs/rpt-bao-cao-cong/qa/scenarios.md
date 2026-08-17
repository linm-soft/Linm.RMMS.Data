# QA — rpt-bao-cao-cong (Báo cáo công)

| Field | Value |
|-------|-------|
| feature | `rpt-bao-cao-cong` |
| this role | `qa` · `/agent-qa` |
| status | `done` |
| changeScope | `edit_page` |
| packKind | **`report`** (Kind **E**) |
| productRoot | `D:/AI-QLBD/Linm.RMMS.Data` |
| MFE | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Report` |
| mfeStdRoute | `/bao-cao/bao-cao-cong` |
| mfeStdUrl | `http://localhost:9311/bao-cao/bao-cao-cong` |
| backend | `D:/AI-QLBD/Linm.RMMS.WebService` · `api/v1/report` |
| BFF | `web-bff/api/v1/report` |
| autoApprove | **ON** |
| chain | **ON** · Review = **pending** đến lượt |
| prior · dev | `done` · `implement/rpt-bao-cao-cong.md` |
| skillVersion | `2026.08.15.5` |
| schemaVersion | `1` |
| workflowVersion | `2026.08.15.5` |
| rulesVersion | `2026.08.15.8` |
| versionGate | `keep_current` |
| taskId | `task_38b714a9` |
| updatedAt | `2026-08-15T15:25:00.000Z` |

**Phương pháp:** static review live page + BE contract + MFE `yarn typecheck` / `yarn build`. Không đụng API mới · **cấm** `ERP.*`.

**Seed BE:** 12 dòng in-memory `QL.1` / `QL.15` / `QL.217` · ngày `2026-07-27` → `2026-08-01`. Default filter FE = **tháng hiện tại** (2026-08) → chỉ ~3 dòng Aug-01 trừ khi chỉnh Từ/Đến.

## Scenarios

| ID | Step | Expect | Verdict |
|----|------|--------|---------|
| QA-01 | Mở `http://localhost:9311/bao-cao/bao-cao-cong` | Title **Báo cáo công** · icon `fa-user-clock` · `pageId` `rpt-bao-cao-cong` · `data-testid` `rmms-worklog-report-page` · empty «Chưa xem — nhấn «Xem» để tải báo cáo công.» · **không** KPI/map | **PASS** (code) |
| QA-02 | Set Từ=`2026-07-27` Đến=`2026-08-01` · **Xem** | Lưới seed (12) · KPI 4 · SVG map · `viewed` · empty copy chỉ khi 0 dòng | **PASS** (code + seed) |
| QA-03 | Zone = Lệch zone (`out`) · Xem | Query `zone=out` · chỉ `zoneStatus=out` (w3,w5,w7,w10) · `all` **không** gửi `zone` | **PASS** |
| QA-04 | NV SearchInput `nva` · Xem | Query **`search=nva`** · **cấm** query `staffId` · dòng Nguyễn Văn A | **PASS** |
| QA-05 | Tuyến SearchInput `QL.1` · Xem | `routeId=QL.1` · lookup Integration + fallback CUC2 · **cấm** `QL.22` · **cấm** native `<select>` | **PASS** |
| QA-06 | Đổi kỳ tuần/tháng (chưa Xem) | Draft `from`/`to` auto · **không** fetch đến khi Xem · Xem → `page=1` | **PASS** |
| QA-07 | Xuất Excel | Download `worklogs.csv` · BE UTF-8 BOM · toast success/fail · **cấm** `window.alert` | **PASS** |
| QA-08 | Config cột FULL | `ReportDisplayConfigModal` · ẩn/hiện persist `rmms-worklog-report` · **cấm** stub toast | **PASS** |
| QA-09 | Kéo cột | Mỗi cột visible `resizable: true` · tableConfig `resizable !== false` · migrate `rmms-worklog-report-resizable-default-on-v1` | **PASS** (GAP-TL-BCC-RESIZE closed) |
| QA-10 | Zone D pager | **Luôn** `LinCatalogListPagination` · `totalCount=0` khi chưa Xem · **không** gate `showFooterPagination` · **cấm** `footerPagination` / `pageSizeBar` | **PASS** (GAP-TL-BCC-FOOTER closed) |
| QA-11 | pageSize 50/100/200/500 | Đổi size → `page=1` · BE allow-list | **PASS** (contract) |
| QA-12 | Drill «Mở chấm công» | `window.top.location` `/patrol/attendance?id={attendanceId}` · **không** modal CRUD Report | **PASS** |
| QA-13 | Làm mới / In / Chart | Refresh: chưa Xem → apply+view · đã Xem → refetch · Print: `LinReportPrintScopeModal` rồi `window.print` · Chart SoCai 3 khi viewed+dòng · **cấm** `window.confirm` | **PASS** |
| QA-14 | Zone A | **Không** Thêm mới / Tạo mới · **không** Resource / Slideout / View=`readOnly` | **PASS** |
| QA-15 | Prefix / ERP | FE `BASE=/report` · BFF `web-bff/api/v1/report/worklogs` · **cấm** `api/v1/attendance/*` · **cấm** `ERP.Service.*` | **PASS** |
| T-UI-UX-01 | Shell | 1× `LinPageLayout` `kind="report"` · **cấm** nested CatalogListShell · flex + `skeletonRows={8}` · listTitle **Kết quả báo cáo công** | **PASS** |
| T-UI-FIELD | Lưới | staff/route/day/points/inZone%/zone display/first/last/drill · KPI `shiftCount` `inZonePct` `outZoneCount` `avgPoints` | **PASS** |

## GAP QA

Không mở GAP P1. Footer + resize đã đóng trên implement Dev.

Ghi chú vận hành (không fail): default tháng 8/2026 không cover hết seed 12 dòng — tester **phải** set khoảng Jul 27–Aug 1 (QA-02).

## Build

| Gate | Result |
|------|--------|
| MFE `yarn typecheck` | **PASS** (`tsc --noEmit`) |
| MFE `yarn build` | **PASS** (webpack compiled, size warnings only) |
| BE `dotnet build` | **N/A** role QA — không đụng API (Dev prior PASS) |

## Handoff Review

Review `review/findings.md` = **pending** đến lượt. autoApprove ON → agent Review tự confirm khi tới role.

---
<!-- Version meta: skillVersion=2026.08.15.5 · schemaVersion=1 · workflowVersion=2026.08.15.5 · rulesVersion=2026.08.15.8 · versionGate=keep_current -->
