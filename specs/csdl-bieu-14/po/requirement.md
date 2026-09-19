# PO Requirement — csdl-bieu-14 (edit_page · T-XLS-S14)

| Field | Value |
|-------|-------|
| feature | `csdl-bieu-14` |
| title | CSDL Biểu 14 — Hệ thống ITS (GTTM) · **Xuất Excel** |
| packKind | `list` |
| changeScope | `edit_page` |
| epic | `csdl-export-print` · Wave 1 `T-XLS-S14` |
| status | `confirmed` |
| skillId | `agent-po` |
| skillVersion | `2026.08.25.01` |
| schemaVersion | `1` |
| workflowVersion | `2026.09.01.02` |
| rulesVersion | `2026.09.17.3` |
| contentHash | `sha256:e9a062f1f9eecd6bf98748db0c3f839e2247a74ecb9bcd56273d4e48d729fa0a` |
| headerFingerprint | `sha256:14cd156a898dcc971a072dd1cd1b92460a8b597558a90dc9854fead9d4c4de5c` |
| confirmedAt | `2026-09-18T01:40:00.000Z` |
| taskId | `task_23c0d73d` |
| priorTyped | `task_475a3c19` · requirement **keep** · **cấm** reopen new_page CRUD |
| priorAnaly | `task_b92db6a6` · control-hint + real-data · hash skip |
| autoApprove | `ON` |
| e2eQa | `ON` (queued `/agent-qa*`) |
| resource | `its-systems` |
| formNo | `14` |
| columns | `21` |
| IdCode | `IT-` |
| peerSoTs | `so-ts-its-camera` · **cấm** merge |
| mfe | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Asset` |
| be | `D:/AI-QLBD/Linm.RMMS.WebService` · **cấm ERP.*** |
| mfeStdUrl | `http://localhost:9301/so-ts/csdl-so-sach` · alias `/csdl-bieu-14` |
| hubRoute | `/so-ts/csdl-so-sach?resource=its-systems` |
| formPattern | Kind D Slideout (**keep**) |
| listPattern | Kind B A–D (**keep**) |
| map | `none` |

> Typed CRUD (list + Slideout + hub + Schema_CsdlBieu14) **đã PASS** (`task_1b0469b6`). Pack này **chỉ** delta **Xuất Excel** binary đúng mẫu Cục. Toast stub ≠ done.

## 1. Goal

Cho phép người dùng tải file Excel **Biểu 14 — Hệ thống ITS (GTTM)** từ toolbar catalog: binary BFF, **1 sheet**, **21 cột** (device+infra+GPS cùng hàng), khớp golden Cục 16-sheet — **không** đổi typed CRUD.

## 2. Keep (typed — cấm reopen)

| Area | Keep |
|------|------|
| Route / hub | `/csdl-bieu-14` alias · hub card `its-systems` |
| List Kind B | Zones A/B/C/D · filter slots · paginate 50/100/200/500 |
| Form Kind D | Slideout 2col · section vị trí + thiết bị ITS + hạ tầng · LeaveConfirm · View readOnly · IdCode `IT` |
| Header 21 | `code\|roadCode\|roadName\|province\|kmFrom\|kmTo\|side\|direction\|gpsLat\|gpsLng\|deviceType\|brand\|techSpec\|qtyOrLength\|operatingStatus\|infraKind\|clearanceM\|infraQty\|systemStatus\|yearBuilt\|notes` |
| API CRUD | `api/v1/asset/csdl-records?resource=its-systems` |
| Entity | `Schema_CsdlBieu14` / ItsSystem · DeviceType · InfraKind · GPS |
| Peer | cite `so-ts-its-camera` / ITS AiVision only |
| Prior Q | Q-ROUTE…Q-SO09 (`task_475a3c19`) **keep** |

## 3. § Delta — T-XLS-S14 (this pack)

| ID | Requirement | DoD |
|----|-------------|-----|
| GAP-BIEU14-XLS-01 | Nút **Xuất Excel** trên `catalogToolbar` (icon `erp-control-icon-map`) | Click → download binary · mở được cạnh mẫu Cục |
| GAP-BIEU14-XLS-02 | Binary qua BFF `/implement-export-import-excel` | **FAIL** nếu chỉ toast/stub |
| GAP-BIEU14-XLS-03 | Golden = Cục **16-sheet** xls sheet Biểu 14 | **Cấm** hồ sơ 12+8 làm golden |
| GAP-BIEU14-XLS-04 | **Cấm** Xuất/Import trên `LinErpListFilterBar` | GAP-FILTER-BAR-08 |
| GAP-BIEU14-XLS-05 | `GET …/csdl-records/export?resource=its-systems` (+ QS filter) | SA chốt path exact · **cấm** invent `/infra/` |
| GAP-BIEU14-XLS-06 | **1 sheet** 21 cột · device+infra+GPS cùng hàng | **Cấm** invent sheet riêng TB/HT |
| GAP-BIEU14-XLS-07 | Export qty/m biểu Cục | **Cấm** merge `so-ts-its-camera` / `road-assets` / ITS AiVision |

**Import:** P1 DEFER (`Q-XLS-IMPORT=export_only_p0`) — không AC bắt buộc Wave 1 S14; Design ẩn hoặc disable Import.

**Print PDF:** OUT (không Wave 1 S14).

**Supersede:** prior GAP-CSDL-XLS-01 stub → GAP-BIEU14-XLS-*.

## 4. PO decisions (autoApprove · Q-XLS-*)

| ID | Decision | Rationale |
|----|----------|-----------|
| **Q-XLS-SCOPE** | **`filtered`** | Export áp dụng filter hiện tại (road/province/deviceType/operatingStatus/km/side/search) qua QS · empty filter = all visible tenant resource |
| **Q-XLS-IMPORT** | **`export_only_p0`** | Wave 1 P0 = Xuất only · Import P1 DEFER |
| **Q-XLS-FILENAME** | **`Bieu14_HeThongITS_{yyyyMMdd}.xls(x)`** | SA chốt extension theo engine (.xls vs .xlsx) · Content-Disposition |
| **Q-XLS-SHEET** | **`one_sheet`** | 21 cột 1 hàng · device+infra+GPS cùng hàng · **cấm** split |

## 5. Pack confirm

| Item | Value |
|------|-------|
| packKind | `list` |
| List | Kind **B** A/B/C/D **keep** · toolbar **+export** |
| Form | Kind **D** Slideout **keep** · 3 section |
| Map | `none` |
| Layout | `LinPageLayout kind="catalog"` **keep** |

## 6. § Screens (delta only)

### S1 — List (Kind B)

| Zone | AC (delta) |
|------|------------|
| A Header | **Keep** «Biểu 14 — Hệ thống ITS (GTTM)» · back hub |
| B Toolbar | **Thêm** Xuất Excel · **cấm** filter-bar export · CRUD actions **keep** · Import ẩn/disable P0 |
| B Filter | **Unchanged** · 0 action Xuất (**GAP-FILTER-BAR-08**) |
| C/D Grid+page | **Unchanged** · typed 21 |

### S2 — Form Slideout

**Unchanged** — không AC form mới cho XLS.

## 7. Grid AC (list · keep + delta)

| ID | AC |
|----|----|
| G-keep | Filter+search · subset cột · pagination · row CRUD · empty «Chưa có hệ thống ITS» — **keep** typed |
| G-04 | Toolbar **Xuất Excel** → binary download (không toast-only) |
| G-05 | Empty list → file vẫn tải · 0 data row · header merge đúng mẫu · toast info OK |
| G-06 | Export fail → toast VN · **cấm** silent · **cấm** CSV generic lưới |
| G-07 | File mở cạnh golden Cục · checksum 21 cột |
| G-08 | Export tôn trọng filter QS (`Q-XLS-SCOPE=filtered`) |

## 8. Report AC

N/A — packKind=`list`.

## 9. § Leave

| Case | Behavior |
|------|----------|
| Dirty form | LeaveConfirmModal **keep** (typed) |
| Export click | **Không** trigger Leave · không dirty form |
| After export | giữ list · không đóng slideout |

## 10. GAP accept (PO → Design/SA)

| GAP | PO |
|-----|-----|
| GAP-BIEU14-XLS-01 | Accept — toolbar Xuất binary |
| GAP-BIEU14-XLS-02 | Accept — toast stub ≠ done |
| GAP-BIEU14-XLS-03 | Accept — golden Cục 16-sheet |
| GAP-BIEU14-XLS-04 | Accept — cấm filter-bar export |
| GAP-BIEU14-XLS-05 | Accept — GET export (+ QS) |
| GAP-BIEU14-XLS-06 | Accept — 1 sheet 21 · device+infra+GPS |
| GAP-BIEU14-XLS-07 | Accept — cấm merge peer / road-assets / AiVision |
| Typed GAP-* prior | **Keep** · **cấm** reopen |

## 11. Live bind (cite real-data)

| Op | Path |
|----|------|
| CRUD | `…/csdl-records?resource=its-systems` — **keep** |
| **Export** | `GET /web-bff/api/v1/asset/csdl-records/export?resource=its-systems` (+ filter QS) |
| Import | `POST …/import` — **DEFER P1** |

**Cấm** ERP.* · invent `api/v1/infra/*` · bind `road-assets` / ITS AiVision · fake blob.

## 12. Handoff Design

- **Giữ** prototype typed · **chỉ** thêm nút Xuất trên `catalogToolbar` · Import ẩn/disable.
- Filter bar **unchanged** · reviewUrl cập nhật zone toolbar.
- Icon `erp-control-icon-map` · typography GAP-TYP-01.

## 13. Handoff SA

- BFF binary path · golden 16-sheet Biểu 14 · checksum 21 cột.
- Filename `Bieu14_HeThongITS_{yyyyMMdd}` · ext SA.
- **Cấm** đổi typed entity / Schema_CsdlBieu14 trừ gap export map.
- Filter QS ↔ export scope.

## 14. Non-goals (P1 / this pack)

- Import Excel · Print PDF · reopen typed CRUD · map · merge peer · yarn build/e2e @ po · demo rescan.

## Version meta (REQUIRED)

| Field | Value |
|-------|-------|
| skillId | agent-po |
| skillVersion | 2026.08.25.01 |
| schemaVersion | 1 |
| workflowVersion | 2026.09.01.02 |
| rulesVersion | 2026.09.17.3 |
| contentHash | `sha256:e9a062f1f9eecd6bf98748db0c3f839e2247a74ecb9bcd56273d4e48d729fa0a` |
| headerFingerprint | `sha256:14cd156a898dcc971a072dd1cd1b92460a8b597558a90dc9854fead9d4c4de5c` |
| generatedAt | 2026-09-18T01:40:00.000Z |
| versionGate | ok |
| taskId | task_23c0d73d |
| packKind | list |
| changeScope | edit_page |

---
<!-- Version meta: skillId=agent-po skillVersion=2026.08.25.01 schemaVersion=1 workflowVersion=2026.09.01.02 rulesVersion=2026.09.17.3 versionGate=ok contentHash=sha256:e9a062f1f9eecd6bf98748db0c3f839e2247a74ecb9bcd56273d4e48d729fa0a changeScope=edit_page taskId=task_23c0d73d -->
