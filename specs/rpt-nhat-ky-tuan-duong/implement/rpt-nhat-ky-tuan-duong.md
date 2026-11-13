# Implement — rpt-nhat-ky-tuan-duong

| Field | Value |
|-------|-------|
| feature | `rpt-nhat-ky-tuan-duong` |
| this role | `dev` · `/agent-dev` |
| status | `done` |
| changeScope | `edit_page` · Wave B `nktd-pdf-20260917` |
| packKind | **`report`** · Kind **E** |
| mfe | `Linm.Web.RMMS.Report` · `PatrolLogRoadReportPage` |
| mfeStdRoute | `/bao-cao/nhat-ky-tuan-duong` · alias `/bao-cao/nk-td` |
| mfeStdUrl | `http://localhost:9311/bao-cao/nhat-ky-tuan-duong` |
| backend | `D:/AI-QLBD/Linm.RMMS.WebService` · `GET api/v1/report/patrol-log-road` (+ `/export`) |
| source | `csdl-so-02` · `sourceFormReady=yes` · **cấm** seed |
| skillVersion | `2026.08.15.5` |
| schemaVersion | `1` |
| workflowVersion | `2026.08.15.5` |
| rulesVersion | `2026.08.15.8` |
| versionGate | `keep_current` |
| taskId | `task_0d18fcc7` |
| prior | TL `task_8cbb2073` **confirmed** · compact `handoff/team_lead-compact.md` |
| updatedAt | `2026-09-18T18:40:00.000Z` |

## Wave B delta (code)

| GAP / Task | Change |
|------------|--------|
| **T-BE-RPT-01** · SRC-01 | `LoadPatrolLogRoadAsync` → **chỉ** `LoadCsdlPatrolLogRoadAsync` · **cấm** check-in fallback |
| Get/Export | **cấm** seed `FilterPatrolLogRoad` khi 0 rows → `items=[]` |
| EventAt `tz_day` | Filter entry `EventAt` (fallback `CreatedAt`) trong `[from,to]` |
| **SIGN-01** | `RemarkSign` → `supervisorNote` · signed nếu RemarkSign ≠ rỗng |
| `locationText` / `note` | LocationText else Km · DTO + map `Note` |
| **T-BE-02** | CSV UTF-8 BOM + `supervisorNote`/`note` |
| **T-FE-02** · DRILL-01 | Drill `/csdl-so-02?form=view&id=` · **cấm** `?kind=` |
| Grid | + Ký duyệt · Ghi chú · Vị trí · route chuẩn `nhat-ky-tuan-duong` |
| **T-HDSD-01** | Empty hint → tạo data `/csdl-so-02` · **không** «Tạo mới» trên report |
| **T-UI-RPT-*** | Keep Kind E shell · filter 0 action · `reportToolbar` |
| Print bìa | **P2** · không block |
| Step 4b | **migration=none** · path API **giữ** · BFF Forward keep · **cấm** ERP.* |

## Code paths

- FE: `src/pages/PatrolLogRoadReportPage/*` · `src/index.tsx` route · `responseModel.ReportPatrolLogRoadRowDto.note`
- BE: `ReportService.CsdlLive` · `ReportService.PatrolLive` · `ReportService` Get/Export · `ReportPatrolLogRoadRowDto.Note`
- BFF: `ReportBffController` Forward — **reuse** · không business

## T-pack Dev

| id | Result |
|----|--------|
| T-BE-RPT-01 | **PASS** |
| T-BE-02 | **PASS** |
| T-BFF-01 / T-PERM-01 | **reuse PASS** |
| T-UI-RPT-01 / TB / CONFIG / EXPORT / CHART | **PASS** (shell keep) |
| T-UI-RPT-PRINT-01 | **P2** debt |
| T-FE-02 | **PASS** |
| T-HDSD-01 | **PASS** |

## Build

| Cmd | Result |
|-----|--------|
| MFE `yarn typecheck` | **PASS** |
| MFE `yarn build` | **PASS** webpack 5.109.2 |
| BE `dotnet build` RMMS.Service.Api `-m:1` | **PASS** (1 pre-existing CS0105 warning) |

## Debt

- Print bìa PDF = **P2** `GAP-NKTD-PRINT-01`
- E2E / `start:std` = **queued** `/agent-qa*` only — **cấm** Dev

## Handoff QA

- autoApprove **ON** · roleOnly **dev** xong → enqueue **qa**
- mfeStdUrl: `http://localhost:9311/bao-cao/nhat-ky-tuan-duong`
- Verify: kỳ có sổ → lưới khớp · kỳ trống → empty **không** 12 CUC2 · drill không `?kind=`

---
<!-- Version meta: skillVersion=2026.08.15.5 · schemaVersion=1 · workflowVersion=2026.08.15.5 · rulesVersion=2026.08.15.8 · versionGate=keep_current · changeScope=edit_page · cr=nktd-pdf-20260917 -->

## Print lock 2026-11-05

In dùng preview A4 trong `Linm.Web.RMMS.Report/src/print/official`. Bản cùng nội dung nằm trong repo Mobile `src/print/official`. Không alias chéo repo. Dữ liệu là điểm tuần của bộ lọc đang áp dụng (`GET api/v1/report/patrol-print-lines`, BFF `patrol-print-lines`). Lưới báo cáo không đổi.

- Báo cáo tuần đường và Nhật ký tuần đường: Mẫu 2. Giờ ngày = thời điểm điểm. Vị trí = chainageLabel. Thời tiết/diễn biến = Nội dung. Đã giải quyết, Người nhận, Ghi chú để trống.
- Báo cáo tuần kiểm và Nhật ký tuần kiểm: Mẫu 1. Từ Km / Đến Km = lý trình ca. Vị trí = lý trình điểm. Mô tả thực trạng = Nội dung. Các cột còn lại để trống.
- Mỗi nhà thầu một cuốn (bìa + bảng). Quyển số để dấu chấm, người dùng ghi tay. Km bìa = khoảng lý trình các ca trong cuốn đó.
- Lý trình = tên tuyến + Km cột + mét. Nội dung = nội dung điểm tuần. Không hiện note ca dạng `kmFrom=`. Ca chưa có điểm tuần vẫn in một dòng lý trình của ca. Cột ảnh là icon bấm xem, blob `GET /files/{id}/object`. Sổ trống thì lưới lấy cùng dữ liệu ca.
- Cấm đổ note ca (`kmFrom=`, GPS, tự động kết thúc) vào cột thời tiết.
