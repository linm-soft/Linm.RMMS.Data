# PO Requirement — csdl-bieu-15 (edit_page · T-XLS-S15)

| Field | Value |
|-------|-------|
| feature | `csdl-bieu-15` |
| title | CSDL Biểu 15 — TMC / thu phí / hạt / kho · **Xuất Excel** |
| packKind | `list` |
| changeScope | `edit_page` |
| epic | `csdl-export-print` · Wave 1 `T-XLS-S15` |
| status | `confirmed` |
| skillId | `agent-po` |
| skillVersion | `2026.08.25.01` |
| schemaVersion | `1` |
| workflowVersion | `2026.09.01.02` |
| rulesVersion | `2026.09.17.3` |
| contentHash | `sha256:8a85d68eaef24cf98c312f83a3a100de25b1212e8a751d6f1f42005d38dd0fc8` |
| headerFingerprint | `sha256:0064a4903777f7ea8d51c7423d8451a20daf77a5934929001905edaa380f4fe4` |
| confirmedAt | `2026-09-18T02:13:10.000Z` |
| taskId | `task_18337e1c` |
| priorTyped | `task_a73f1c50` · requirement **keep** · **cấm** reopen new_page CRUD |
| priorAnaly | `task_4b6f0c6e` · control-hint + real-data · hash skip |
| autoApprove | `ON` |
| e2eQa | `ON` (queued `/agent-qa*`) |
| resource | `ops-facilities` |
| formNo | `15` |
| columns | `20` |
| IdCode | `OF-` |
| peerSoTs | `so-ts-toll` · `so-ts-rest-area` · `so-ts-station-house` · **cấm** merge |
| mfe | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Asset` |
| be | `D:/AI-QLBD/Linm.RMMS.WebService` · **cấm ERP.*** |
| mfeStdUrl | `http://localhost:9301/so-ts/csdl-so-sach` · alias `/csdl-bieu-15` |
| hubRoute | `/so-ts/csdl-so-sach?resource=ops-facilities` |
| formPattern | Kind D Slideout (**keep**) |
| listPattern | Kind B A–D (**keep**) |
| map | `none` |

> Typed CRUD (list + Slideout + hub + Schema_CsdlBieu15) **đã PASS** (`task_0c28671f`). Pack này **chỉ** delta **Xuất Excel** binary đúng mẫu Cục. Toast stub ≠ done.

## 1. Goal

Cho phép người dùng tải file Excel **Biểu 15 — TMC / thu phí / hạt / kho** từ toolbar catalog: binary BFF, **1 sheet**, **20 cột** (facility+area+equipment cùng hàng), khớp golden Cục 16-sheet — **không** đổi typed CRUD.

## 2. Keep (typed — cấm reopen)

| Area | Keep |
|------|------|
| Route / hub | `/csdl-bieu-15` alias · hub card `ops-facilities` |
| List Kind B | Zones A/B/C/D · filter slots · paginate 50/100/200/500 |
| Form Kind D | Slideout 2col · 4 section (Vị trí · Cơ sở/công trình · Thiết bị · Quản lý) · LeaveConfirm · View readOnly · IdCode `OF` |
| Header 20 | `code\|roadCode\|roadName\|province\|kmFrom\|kmTo\|facilityKind\|facilityName\|courtyardAreaM2\|buildingQty\|buildingAreaM2\|otherStructQty\|otherStructAreaM2\|status\|yearBuilt\|equipmentKind\|equipmentQty\|equipmentStatus\|manageUnit\|notes` |
| API CRUD | `api/v1/asset/csdl-records?resource=ops-facilities` |
| Entity | `Schema_CsdlBieu15` / OpsFacility · FacilityKind · area/qty · equipment* |
| Peer | cite `so-ts-toll` / `so-ts-rest-area` / `so-ts-station-house` only |
| Prior Q | Q-ROUTE…Q-KM (`task_a73f1c50`) **keep** |

## 3. § Delta — T-XLS-S15 (this pack)

| ID | Requirement | DoD |
|----|-------------|-----|
| GAP-BIEU15-XLS-01 | Nút **Xuất Excel** trên `catalogToolbar` (icon `erp-control-icon-map`) | Click → download binary · mở được cạnh mẫu Cục |
| GAP-BIEU15-XLS-02 | Binary qua BFF `/implement-export-import-excel` | **FAIL** nếu chỉ toast/stub |
| GAP-BIEU15-XLS-03 | Golden = Cục **16-sheet** xls sheet Biểu 15 | **Cấm** hồ sơ 12+8 làm golden |
| GAP-BIEU15-XLS-04 | **Cấm** Xuất/Import trên `LinErpListFilterBar` | GAP-FILTER-BAR-08 |
| GAP-BIEU15-XLS-05 | `GET …/csdl-records/export?resource=ops-facilities` (+ QS filter) | SA chốt path exact · **cấm** invent `/infra/` |
| GAP-BIEU15-XLS-06 | **1 sheet** 20 cột · facility+area+equipment cùng hàng | **Cấm** invent sheet riêng công trình/thiết bị |
| GAP-BIEU15-XLS-07 | Export qty/m biểu Cục | **Cấm** merge so-ts-toll/rest/station / `road-assets` |
| GAP-DEV-VI-ENC-01 | Title/nav live UTF-8 «Biểu 15 — TMC / thu phí / hạt / kho» | **FAIL** `Biá»ƒu` / `â€"` trên sidebar/topbar |

**Import:** P1 DEFER (`Q-XLS-IMPORT=export_only_p0`) — không AC bắt buộc Wave 1 S15; Design ẩn hoặc disable Import.

**Print PDF:** OUT (không Wave 1 S15).

**Supersede:** prior GAP-CSDL-XLS-01 stub → GAP-BIEU15-XLS-*.

## 4. PO decisions (autoApprove · Q-XLS-*)

| ID | Decision | Rationale |
|----|----------|-----------|
| **Q-XLS-SCOPE** | **`filtered`** | Export áp dụng filter hiện tại (road/province/facilityKind/status/km/search) qua QS · empty filter = all visible tenant resource |
| **Q-XLS-IMPORT** | **`export_only_p0`** | Wave 1 P0 = Xuất only · Import P1 DEFER |
| **Q-XLS-FILENAME** | **`Bieu15_TMC_Tram_Hat_{yyyyMMdd}.xls(x)`** | SA chốt extension theo engine (.xls vs .xlsx) · Content-Disposition |
| **Q-XLS-SHEET** | **`one_sheet`** | 20 cột 1 hàng · facility+area+equipment cùng hàng · **cấm** split |

## 5. Pack confirm

| Item | Value |
|------|-------|
| packKind | `list` |
| List | Kind **B** A/B/C/D **keep** · toolbar **+export** |
| Form | Kind **D** Slideout **keep** · 4 section |
| Map | `none` |
| Layout | `LinPageLayout kind="catalog"` **keep** |

## 6. § Screens (delta only)

### S1 — List (Kind B)

| Zone | AC (delta) |
|------|------------|
| A Header | **Keep** «Biểu 15 — TMC / thu phí / hạt / kho» · back hub |
| B Toolbar | **Thêm** Xuất Excel · **cấm** filter-bar export · CRUD actions **keep** · Import ẩn/disable P0 |
| B Filter | **Unchanged** · 0 action Xuất (**GAP-FILTER-BAR-08**) |
| C/D Grid+page | **Unchanged** · typed 20 |

### S2 — Form Slideout

**Unchanged** — không AC form mới cho XLS.

## 7. Grid AC (list · keep + delta)

| ID | AC |
|----|----|
| G-keep | Filter+search · subset cột · pagination · row CRUD · empty «Chưa có cơ sở TMC / thu phí / hạt / kho» — **keep** typed |
| G-04 | Toolbar **Xuất Excel** → binary download (không toast-only) |
| G-05 | Empty list → file vẫn tải · 0 data row · header merge đúng mẫu · toast info OK |
| G-06 | Export fail → toast VN · **cấm** silent · **cấm** CSV generic lưới |
| G-07 | File mở cạnh golden Cục · checksum 20 cột |
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
| GAP-BIEU15-XLS-01 | Accept — toolbar Xuất binary |
| GAP-BIEU15-XLS-02 | Accept — toast stub ≠ done |
| GAP-BIEU15-XLS-03 | Accept — golden Cục 16-sheet |
| GAP-BIEU15-XLS-04 | Accept — cấm filter-bar export |
| GAP-BIEU15-XLS-05 | Accept — GET export (+ QS) |
| GAP-BIEU15-XLS-06 | Accept — 1 sheet 20 · facility+area+equipment |
| GAP-BIEU15-XLS-07 | Accept — cấm merge peer / road-assets |
| Typed GAP-* prior | **Keep** · **cấm** reopen |

## 11. Live bind (cite real-data)

| Op | Path |
|----|------|
| CRUD | `…/csdl-records?resource=ops-facilities` — **keep** |
| **Export** | `GET /web-bff/api/v1/asset/csdl-records/export?resource=ops-facilities` (+ filter QS) |
| Import | `POST …/import` — **DEFER P1** |

**Cấm** ERP.* · invent `api/v1/infra/*` · bind `road-assets` / so-ts-toll/rest/station · fake blob.

## 12. Handoff Design

- **Giữ** prototype typed · **chỉ** thêm nút Xuất trên `catalogToolbar` · Import ẩn/disable.
- Filter bar **unchanged** · reviewUrl cập nhật zone toolbar.
- Icon `erp-control-icon-map` · typography GAP-TYP-01.

## 13. Handoff SA

- BFF binary path · golden 16-sheet Biểu 15 · checksum 20 cột.
- Filename `Bieu15_TMC_Tram_Hat_{yyyyMMdd}` · ext SA.
- **Cấm** đổi typed entity / Schema_CsdlBieu15 trừ gap export map.
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
| contentHash | `sha256:8a85d68eaef24cf98c312f83a3a100de25b1212e8a751d6f1f42005d38dd0fc8` |
| headerFingerprint | `sha256:0064a4903777f7ea8d51c7423d8451a20daf77a5934929001905edaa380f4fe4` |
| generatedAt | 2026-09-18T02:13:10.000Z |
| versionGate | ok |
| taskId | task_18337e1c |
| packKind | list |
| changeScope | edit_page |

---
<!-- Version meta: skillId=agent-po skillVersion=2026.08.25.01 schemaVersion=1 workflowVersion=2026.09.01.02 rulesVersion=2026.09.17.3 versionGate=ok contentHash=sha256:8a85d68eaef24cf98c312f83a3a100de25b1212e8a751d6f1f42005d38dd0fc8 changeScope=edit_page taskId=task_18337e1c -->
