# PO Requirement — csdl-bieu-13 (edit_page · T-XLS-S13)

| Field | Value |
|-------|-------|
| feature | `csdl-bieu-13` |
| title | CSDL Biểu 13 — Tường chống ồn · **Xuất Excel** |
| packKind | `list` |
| changeScope | `edit_page` |
| epic | `csdl-export-print` · Wave 1 `T-XLS-S13` |
| status | `confirmed` |
| skillId | `agent-po` |
| skillVersion | `2026.08.25.01` |
| schemaVersion | `1` |
| workflowVersion | `2026.09.01.02` |
| rulesVersion | `2026.09.17.3` |
| contentHash | `sha256:800386bb8f86bfcc815b9c7d3a6dc246dc58b0a95b5132a317c5a094d0b4194f` |
| headerFingerprint | `sha256:31dbc83200b511c9d61333b1cdb94e2880778980a3b21970be414e926db29008` |
| confirmedAt | `2026-09-18T01:00:00.000Z` |
| taskId | `task_0a8bfa5d` |
| priorTyped | `task_397af5bc` · requirement **keep** · **cấm** reopen new_page CRUD |
| priorAnaly | `task_4fec1f3f` · control-hint + real-data · hash skip |
| autoApprove | `ON` |
| e2eQa | `ON` (queued `/agent-qa*`) |
| resource | `noise-barriers` |
| formNo | `13` |
| columns | `13` |
| IdCode | `TC-` |
| peerSoTs | `so-ts-noise-barrier` · **cấm** merge |
| mfe | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Asset` |
| be | `D:/AI-QLBD/Linm.RMMS.WebService` · **cấm ERP.*** |
| mfeStdUrl | `http://localhost:9301/so-ts/csdl-so-sach` · alias `/csdl-bieu-13` |
| hubRoute | `/so-ts/csdl-so-sach?resource=noise-barriers` |
| formPattern | Kind D Slideout (**keep**) |
| listPattern | Kind B A–D (**keep**) |
| map | `none` |

> Typed CRUD (list + Slideout + hub + Schema_CsdlBieu13) **đã PASS** (`task_bdbf3809`). Pack này **chỉ** delta **Xuất Excel** binary đúng mẫu Cục. Toast stub ≠ done.

## 1. Goal

Cho phép người dùng tải file Excel **Biểu 13 — Tường chống ồn** từ toolbar catalog: binary BFF, 1 sheet, 13 cột (dài/cao/DT cùng hàng), khớp golden Cục 16-sheet — **không** đổi typed CRUD.

## 2. Keep (typed — cấm reopen)

| Area | Keep |
|------|------|
| Route / hub | `/csdl-bieu-13` alias · hub card `noise-barriers` |
| List Kind B | Zones A/B/C/D · filter slots · paginate 50/100/200/500 |
| Form Kind D | Slideout 2col · section vị trí + kích thước · LeaveConfirm · View readOnly · IdCode `TC` |
| Header 13 | `code\|roadCode\|roadName\|province\|kmFrom\|kmTo\|side\|lengthM\|heightM\|areaM2\|status\|manageUnit\|notes` |
| API CRUD | `api/v1/asset/csdl-records?resource=noise-barriers` |
| Entity | `Schema_CsdlBieu13` / NoiseBarrier · LengthM · HeightM · AreaM2 |
| Peer | cite `so-ts-noise-barrier` only |
| Prior Q | Q-ROUTE…Q-PEER-LINK (`task_397af5bc`) **keep** |

## 3. § Delta — T-XLS-S13 (this pack)

| ID | Requirement | DoD |
|----|-------------|-----|
| GAP-BIEU13-XLS-01 | Nút **Xuất Excel** trên `catalogToolbar` (icon `erp-control-icon-map`) | Click → download binary · mở được cạnh mẫu Cục |
| GAP-BIEU13-XLS-02 | Binary qua BFF `/implement-export-import-excel` | **FAIL** nếu chỉ toast/stub |
| GAP-BIEU13-XLS-03 | Golden = Cục **16-sheet** xls sheet Biểu 13 | **Cấm** hồ sơ 12+8 làm golden |
| GAP-BIEU13-XLS-04 | **Cấm** Xuất/Import trên `LinErpListFilterBar` | GAP-FILTER-BAR-08 |
| GAP-BIEU13-XLS-05 | `GET …/csdl-records/export?resource=noise-barriers` (+ QS filter) | SA chốt path exact · **cấm** invent `/infra/` |
| GAP-BIEU13-XLS-06 | **1 sheet** 13 cột · dài/cao/DT cùng hàng | **Cấm** invent sheet riêng kích thước |
| GAP-BIEU13-XLS-07 | Export qty/m² biểu Cục | **Cấm** merge `so-ts-noise-barrier` / `road-assets` |

**Import:** P1 DEFER (`Q-XLS-IMPORT=export_only_p0`) — không AC bắt buộc Wave 1 S13; Design có thể ẩn hoặc disable Import.

**Print PDF:** OUT (không Wave 1 S13).

## 4. PO decisions (autoApprove · Q-XLS-*)

| ID | Decision | Rationale |
|----|----------|-----------|
| **Q-XLS-SCOPE** | **`filtered`** | Export áp dụng filter hiện tại (road/province/status/km/side/search) qua QS · empty filter = all visible tenant resource |
| **Q-XLS-IMPORT** | **`export_only_p0`** | Wave 1 P0 = Xuất only · Import P1 DEFER |
| **Q-XLS-FILENAME** | **`Bieu13_TuongChongOn_{yyyyMMdd}.xls(x)`** | SA chốt extension theo engine (.xls vs .xlsx) · Content-Disposition |
| **Q-XLS-SHEET** | **`one_sheet`** | 13 cột 1 hàng · **cấm** split trừ Excel Cục bắt buộc (không) |

## 5. Screens / zones

| Zone | Pattern | This edit |
|------|---------|-----------|
| List A | Header | Keep «Biểu 13 — Tường chống ồn» · back hub |
| List B toolbar | `catalogToolbar` | **+ Xuất Excel** · Import ẩn/DEFER |
| List B filter | `LinErpListFilterBar` | **Unchanged** · 0 action Xuất |
| List C/D | Grid + pagination | Unchanged |
| Form | Kind D Slideout | Unchanged · section kích thước |
| Map | none | — |

reviewUrl prior prototype — Design cập nhật nút toolbar (không re-demo crawl).

## 6. Grid AC (list · keep + export)

| AC | Rule |
|----|------|
| G-01 | Grid typed 13 subset **keep** · search must work · **cấm** nút Tìm riêng |
| G-02 | Paginate 50/100/200/500 **keep** |
| G-03 | Empty list VN «Chưa có tường chống ồn» **keep** |
| G-04 | **Xuất Excel** trên toolbar · **không** trên filter bar |
| G-05 | Empty export: file vẫn tải · 0 data row · header merge đúng · toast info OK |
| G-06 | Export fail: toast · **cấm** silent · **cấm** CSV generic lưới |
| G-07 | File mở được · sheet Biểu 13 · 13 cột · lengthM/heightM/areaM2 cùng hàng |
| G-08 | Filtered export: row set khớp filter UI (Q-XLS-SCOPE=filtered) |

## 7. Form / Leave AC (keep)

| AC | Rule |
|----|------|
| F-01…F-n | Prior typed LeaveConfirm · View readOnly · IdCode TC · dim ≥0 — **unchanged** |
| F-XLS | Export **không** mở form · không dirty Leave |

## 8. Report AC

N/A — `packKind=list` (không report pack).

## 9. Live bind (cite analy §A+§B)

| Op | Path |
|----|------|
| CRUD | `/web-bff/api/v1/asset/csdl-records` · **keep** |
| Export | `GET /web-bff/api/v1/asset/csdl-records/export?resource=noise-barriers` (+ filter QS) |
| Import | `POST …/import?resource=noise-barriers` · **DEFER P1** |
| API | `api/v1/asset/csdl-records[/export]` · **cấm ERP.*** · **cấm** `/infra/` |

DB export row: `LengthM`↔`lengthM` · `HeightM`↔`heightM` · `AreaM2`↔`areaM2` — SA giữ typed map.

## 10. packKind confirm

`list` · Kind B list + Kind D Slideout · **không** đổi packKind · **không** report.

## 11. Out of scope / Cấm

- Re-open new_page typed CRUD / đổi Schema entity trừ gap SA
- ERP.* · invent `api/v1/infra/*` · invent `api/v1/so-ts/*`
- Toast stub = export done · filter-bar export · golden 12+8
- Merge peer so-ts-noise-barrier / road-assets vào file
- Print PDF Wave 1 · Import bắt buộc P0
- yarn build / e2e / start:std @ PO

## 12. Handoff

| Role | Need |
|------|------|
| **Design** | Giữ prototype typed · +nút Xuất trên catalogToolbar · reviewUrl zone · Import ẩn/DEFER |
| **SA** | BFF binary path · golden checksum 13 · filter QS · filename · **cấm** đổi typed entity |
| **TL/Dev** | `/implement-export-import-excel` · wire toolbar · **cấm** filter export · **cấm** merge peer |
| **QA** | E2E export binary + filter scope · queued |

## Version meta (REQUIRED)

| Field | Value |
|-------|-------|
| skillId | agent-po |
| skillVersion | 2026.08.25.01 |
| schemaVersion | 1 |
| workflowVersion | 2026.09.01.02 |
| rulesVersion | 2026.09.17.3 |
| contentHash | `sha256:800386bb8f86bfcc815b9c7d3a6dc246dc58b0a95b5132a317c5a094d0b4194f` |
| headerFingerprint | `sha256:31dbc83200b511c9d61333b1cdb94e2880778980a3b21970be414e926db29008` |
| generatedAt | 2026-09-18T01:00:00.000Z |
| versionGate | ok |
| taskId | task_0a8bfa5d |
| packKind | list |
| changeScope | edit_page |

---
<!-- Version meta: skillId=agent-po skillVersion=2026.08.25.01 schemaVersion=1 workflowVersion=2026.09.01.02 rulesVersion=2026.09.17.3 versionGate=ok contentHash=sha256:800386bb8f86bfcc815b9c7d3a6dc246dc58b0a95b5132a317c5a094d0b4194f changeScope=edit_page taskId=task_0a8bfa5d -->
