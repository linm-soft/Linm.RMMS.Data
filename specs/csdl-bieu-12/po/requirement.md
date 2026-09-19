# PO requirement — csdl-bieu-12 (edit_page · T-XLS-S12 · Xuất Excel)

| Field | Value |
|-------|-------|
| feature | `csdl-bieu-12` |
| title | CSDL Biểu 12 — Cây xanh, thảm cỏ · Xuất Excel |
| packKind | `list` |
| changeScope | `edit_page` |
| status | `confirmed` |
| taskId | `task_3c0db9bf` |
| priorTask | `task_65010473` (typed CRUD **done**) · analy `task_619ea74c` |
| autoApprove | `ON` |
| epic | `csdl-export-print` · Wave 1 `T-XLS-S12` |
| resource | `green-assets` |
| formNo | `12` |
| IdCode prefix | `CX` |
| columns | `15` |
| peerSoTs | — (**cấm** invent so-ts-green) |
| mfeStdRoute | `/so-ts/csdl-so-sach` · alias `/csdl-bieu-12` |
| mfeStdUrl | `http://localhost:9301/so-ts/csdl-so-sach` |
| hub | `/so-ts/csdl-so-sach?resource=green-assets` |
| API CRUD | `api/v1/asset/csdl-records?resource=green-assets` (+ BFF) — **keep** |
| API Export | `GET …/csdl-records/export?resource=green-assets` (+ BFF) |
| API Import | `POST …/csdl-records/import?resource=green-assets` — **DEFER P1** |
| contentHash | `sha256:f42502cee520105fb0a7f618c17b8b0f582884d7f779f638ec7310c26346e77a` |
| headerFingerprint | `sha256:b6a541f8adc60a5badc72fc92c606631e5a1457fc119b9a6a546eb1f0acc437a` |
| skillId | `agent-po` |
| skillVersion | `2026.08.25.01` |
| workflowVersion | `2026.09.05.03` |
| rulesVersion | `2026.09.17.3` |
| schemaVersion | `1` |
| confirmedAt | `2026-09-18T00:30:00.000Z` |
| prior | data_analy `confirmed` · control-hint + real-data · hash skip · **cấm** re-scan demo |

> **Cấm** ERP.* · invent `api/v1/infra/*` · toast stub = export done · filter-bar export (**GAP-FILTER-BAR-08**) · golden hồ sơ 12+8 · invent 2 sheet · invent/merge so-ts-green · reopen `new_page` typed CRUD.  
> Typography: label **13** · input D14 / M16 (**GAP-TYP-01**).  
> Dev slash: `/implement-export-import-excel` · BFF binary.  
> Typed artifacts prior **keep** — pack này **chỉ** § Delta export.

## Goal

Bổ sung **Xuất Excel** binary đúng mẫu Cục sheet Biểu 12 (15 cột · 1 sheet · khóm + m² cỏ cùng hàng) trên `catalogToolbar` của list đã ship. Typed CRUD / Slideout / filter / route **không đổi**.

## Open Q — PO decisions (autoApprove · T-XLS-S12)

| ID | Decision | Rationale |
|----|----------|-----------|
| Q-XLS-SCOPE | **`filtered`** | Export áp dụng filter/QS hiện tại (road/province/status/km/side/search); empty filter = all tenant resource |
| Q-XLS-IMPORT | **`export_only_p0`** | Wave 1 P0 = Xuất binary; Import toolbar **DEFER P1** (giữ gap, không AC DoD P0) |
| Q-XLS-FILENAME | **`Bieu12_CayXanh_{yyyyMMdd}.xlsx`** | Content-Disposition · SA chốt `.xls` vs `.xlsx` theo golden Cục |
| Q-XLS-SHEET | **`one_sheet`** | 1 sheet 15 cột · khóm+cỏ cùng hàng · **cấm** split 2 sheet |

### Prior typed Q (keep — không reopen)

`alias_now` · `keep_static` · `keep_other` · `allow_either` · `side_only` · `subset` · `keep_demo` · `add_now` — **confirmed** `task_65010473`.

## Pack confirm

| Item | Value |
|------|-------|
| packKind | `list` |
| List | Kind **B** zones A/B/C/D — **keep** |
| Form | Kind **D** Slideout · 2 section — **keep** · **cấm** `new_page` |
| Map | `none` |
| Layout | `LinPageLayout kind="catalog"` |
| Export surface | **`catalogToolbar`** only · **cấm** `LinErpListFilterBar` |

## Header (15 — không thêm ngoài)

`code|roadCode|roadName|province|kmFrom|kmTo|side|oleanderClumps|ngauClumps|palmClumps|otherClumps|grassAreaM2|status|manageUnit|notes`

Golden = Cục **16-sheet** xls sheet **Biểu 12** · **cấm** hồ sơ 12+8.

## § Delta Current vs New (`edit_page` · `T-XLS-S12`)

| ID | Current | New (PO DoD) |
|----|---------|--------------|
| GAP-BIEU12-XLS-01 | Toolbar không Xuất binary | Nút **Xuất Excel** trên `catalogToolbar` · download sheet Biểu 12 |
| GAP-BIEU12-XLS-02 | Toast/stub «có nút» | File binary qua BFF · mở được cạnh mẫu · **cấm** toast-only done |
| GAP-BIEU12-XLS-03 | — | Golden Cục 16-sheet · checksum 15 cột |
| GAP-BIEU12-XLS-04 | Filter field+🔍 | **Cấm** Xuất/Import trên filter bar |
| GAP-BIEU12-XLS-05 | CRUD only | `GET …/export?resource=green-assets` (+ filter QS) · Import path DEFER P1 |
| GAP-BIEU12-XLS-06 | 2 section UX form | Export **1 sheet** 15 · khóm+cỏ cùng hàng |
| GAP-BIEU12-XLS-07 | No peer | **Cấm** invent/merge so-ts-green vào file |

**Không đổi:** API prefix · resource · Kind B A–D · Kind D Slideout · filter slots · IdCode `CX` · formNo `12` · peer none.

## § Screens

### S1 — List (Kind B) — delta toolbar

| Zone | AC |
|------|----|
| A Header | **Keep** «Biểu 12 — Cây xanh, thảm cỏ» · back hub |
| B Toolbar | **+ Xuất Excel** (`ToolbarButton` · icon `erp-control-icon-map`) · keep Refresh/Add/History/Schema/CRUD · Import **DEFER P1** (không AC P0) |
| B Filter | **Unchanged** · 0 action Xuất (**GAP-FILTER-BAR-08**) |
| C Grid | **Unchanged** typed subset |
| D Footer | **Unchanged** pagination |

### S2 — Form Slideout — **unchanged**

Cite prior `task_65010473` · 2 section khóm + thảm cỏ · LeaveConfirmModal · **cấm** đổi controlHint form.

## Grid AC (list) — keep + export

1. Filter+search theo controlHint · **cấm** nút Tìm riêng — **keep**.  
2. Cột subset + schema-config 15 — **keep**.  
3. Pagination 50/100/200/500 · soft-delete — **keep**.  
4. Row/toolbar CRUD — **keep**.  
5. Empty/error toast VN — **keep**.  
6. **Xuất Excel** trên `catalogToolbar` → binary BFF · sheet Biểu 12 · 15 cột · merge-header · filtered set · **cấm** CSV generic · **cấm** filter-bar.  
7. Empty list export → file vẫn tải · 0 data row · header đúng mẫu · toast info OK.  
8. Export fail → toast · **cấm** silent · **cấm** fake blob.  
9. Toast stub only → **FAIL** DoD.

## Report AC

N/A — packKind=`list`.

## § Leave

| Case | Behavior |
|------|----------|
| Dirty form | LeaveConfirmModal — **keep** |
| Cancel clean | đóng không confirm — **keep** |
| After save | đóng · refresh · toast — **keep** |
| During export | không navigate; download async · toast lỗi nếu fail |

## GAP accept (PO → Design/SA)

| GAP | PO |
|-----|-----|
| GAP-BIEU12-XLS-01 | **Accept** — toolbar Xuất Excel binary |
| GAP-BIEU12-XLS-02 | **Accept** — binary ≠ toast stub |
| GAP-BIEU12-XLS-03 | **Accept** — golden Cục 16-sheet · cấm 12+8 |
| GAP-BIEU12-XLS-04 | **Accept** — GAP-FILTER-BAR-08 |
| GAP-BIEU12-XLS-05 | **Accept** — GET export path · Import DEFER P1 |
| GAP-BIEU12-XLS-06 | **Accept** — one_sheet 15 |
| GAP-BIEU12-XLS-07 | **Accept** — cấm invent so-ts-green |
| Prior GAP-BIEU12-TYPED-* / ROUTE / CLUMP / GRASS / SIDE / DMAP / CUC-11 | **Keep** closed — **cấm** reopen |

## Handoff Design

| Need | Value |
|------|-------|
| Prototype | **Giữ** typed · **chỉ** +nút Xuất trên `catalogToolbar` |
| reviewUrl | `file:///D:/AI-QLBD/Linm.RMMS.Data/specs/csdl-bieu-12/ui/prototype/csdl-bieu-12-list-prototype.html` |
| Filter | Unchanged · **cấm** export trên filter |
| Form | Unchanged Kind D · 2 section |
| Import | P1 visual optional · **không** P0 DoD |

## Handoff SA

| Need | Value |
|------|-------|
| Export | `GET …/csdl-records/export?resource=green-assets` + filter QS · BFF binary |
| Import | Path cite · **DEFER** implement P1 |
| Golden | Cục 16-sheet Biểu 12 · checksum 15 · one_sheet |
| Entity | **Cấm** đổi `Schema_CsdlBieu12` trừ gap map |
| Filename | `Bieu12_CayXanh_{yyyyMMdd}.xlsx` (SA chốt extension) |
| **Cấm** | ERP.* · infra · toast-stub done · 2 sheet · so-ts-green merge |

## Live bind (1-liner)

- CRUD keep: `api/v1/asset/csdl-records?resource=green-assets`
- Export P0: `GET …/csdl-records/export?resource=green-assets` (+ filter QS)
- Import P1 DEFER: `POST …/import?resource=green-assets`
- **cấm** ERP.* · invent infra · invent so-ts-green

## Cấm (HARD)

- Reopen `new_page` typed CRUD / đổi 15 cột / formPattern  
- Toast stub = export done  
- Export trên `LinErpListFilterBar`  
- Golden hồ sơ 12+8 · invent 2 sheet  
- Invent/merge so-ts-green  
- ERP.* / `api/v1/infra/*`  
- yarn build / e2e / start:std @ PO  

## Version meta (REQUIRED)

| Field | Value |
|-------|-------|
| skillId | agent-po |
| skillVersion | 2026.08.25.01 |
| schemaVersion | 1 |
| workflowVersion | 2026.09.05.03 |
| rulesVersion | 2026.09.17.3 |
| contentHash | `sha256:f42502cee520105fb0a7f618c17b8b0f582884d7f779f638ec7310c26346e77a` |
| headerFingerprint | `sha256:b6a541f8adc60a5badc72fc92c606631e5a1457fc119b9a6a546eb1f0acc437a` |
| generatedAt | 2026-09-18T00:30:00.000Z |
| versionGate | ok |
| taskId | task_3c0db9bf |
| packKind | list |
| changeScope | edit_page |

---
<!-- Version meta: skillId=agent-po skillVersion=2026.08.25.01 schemaVersion=1 workflowVersion=2026.09.05.03 rulesVersion=2026.09.17.3 versionGate=ok contentHash=sha256:f42502cee520105fb0a7f618c17b8b0f582884d7f779f638ec7310c26346e77a changeScope=edit_page taskId=task_3c0db9bf -->
