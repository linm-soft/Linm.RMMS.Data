# PO requirement — csdl-bieu-12 (CSDL Biểu 12 — Cây xanh, thảm cỏ)

| Field | Value |
|-------|-------|
| feature | `csdl-bieu-12` |
| title | CSDL Biểu 12 — Cây xanh, thảm cỏ |
| packKind | `list` |
| changeScope | `new_page` |
| status | `confirmed` |
| taskId | `task_65010473` |
| autoApprove | `ON` |
| resource | `green-assets` |
| formNo | `12` |
| IdCode prefix | `CX` |
| columns | `15` |
| peerSoTs | — (không peer · **cấm** invent so-ts-green) |
| mfeStdRoute | `/csdl-bieu-12` |
| mfeStdUrl | `http://localhost:9301/csdl-bieu-12` |
| hub | `/so-ts/csdl-so-sach?resource=green-assets` |
| API | `api/v1/asset/csdl-records?resource=green-assets` (+ BFF) |
| contentHash | `sha256:6da498be3a84192c6f3e3c30a7e8032bf2753359591a9aabd3ad36d809f4c457` |
| headerFingerprint | `sha256:54aef0c755530d138ecefa7a303b22c78c32ca1b6ae3555d5bb33492799b5af9` |
| skillId | `agent-po` |
| skillVersion | `2026.08.25.01` |
| workflowVersion | `2026.09.01.02` |
| rulesVersion | `2026.08.31.2` |
| schemaVersion | `1` |
| confirmedAt | `2026-09-05T13:05:00.000Z` |
| prior | data_analy `confirmed` · control-hint + real-data · hash skip |

> **Cấm** ERP.* · invent `api/v1/infra/*` · form chỉ 3 ô `detail*` · invent/merge so-ts-green · Guid IdCode · demo SSOT.  
> Typography: label **13** · input D14 / M16 (**GAP-TYP-01**).

## Goal

Trang CSDL Biểu 12 (list Kind B + form Kind D Slideout) cho cây xanh / thảm cỏ: typed **15 cột** Excel, resource `green-assets`, formNo **12**, alias route `/csdl-bieu-12` + hub entry. Khóm trúc đào/ngâu/cọ/khác + m² cỏ — **≠** Sổ TS.

## Open Q — PO decisions (autoApprove)

| ID | Decision | Rationale |
|----|----------|-----------|
| Q-ROUTE | **`alias_now`** | Ship Navigate `/csdl-bieu-12` cùng release; giữ hub deep-link |
| Q-PROV | **`keep_static`** | P1 LOOKUP_STATIC 5 tỉnh; master province DEFER |
| Q-OTHER-CLUMP | **`keep_other`** | Giữ `otherClumps` trong 15 cột Excel flatten · SA confirm DB |
| Q-GRASS-REQ | **`allow_either`** | Cho phép chỉ khóm (cỏ=0) hoặc chỉ cỏ (khóm=0) · không bắt buộc cả hai |
| Q-TALUY | **`side_only`** | `side` LOOKUP L/R/C/Both đủ · **cấm** free «taluy» riêng |
| Q-LIST-COLS | **`subset`** | Grid mặc định: shared + 4 khóm + grassAreaM2 + status · manageUnit/notes qua schema-config |
| Q-TITLE | **`keep_demo`** | Title «Biểu 12 — Cây xanh, thảm cỏ» (hub/demo/CTX) |
| Q-DMAP | **`add_now`** | SA/Dev thêm slug `csdl-bieu-12` → Asset (cùng `csdl-so-sach`) |

## Pack confirm

| Item | Value |
|------|-------|
| packKind | `list` |
| List | Kind **B** zones A/B/C/D |
| Form | Kind **D** Slideout 2col Z1–Z3 · **2 section** (Khóm cây · Thảm cỏ) |
| Map | `none` |
| Layout | `LinPageLayout kind="catalog"` |

## Header (15 — không thêm ngoài)

`code|roadCode|roadName|province|kmFrom|kmTo|side|oleanderClumps|ngauClumps|palmClumps|otherClumps|grassAreaM2|status|manageUnit|notes`

## § Screens

### S1 — List (Kind B)

| Zone | AC |
|------|----|
| A Header | Title «Biểu 12 — Cây xanh, thảm cỏ» · back hub `/so-ts/csdl-so-sach` · **cấm** slug trên card |
| B Toolbar+filter | SearchTextInput (mã/đường/ghi chú) · province · status · road SearchInput · kmFrom/kmTo · side · Tạo mới · Refresh · Delete · History · SchemaConfig · Import/Export stub · **search must work** · **cấm** nút Tìm riêng |
| C Grid | `LinCatalogDataGrid` typed subset · STT · row menu Xem/Sửa/Copy/Xóa/Lịch sử · kéo cột ON · empty «Chưa có cây xanh, thảm cỏ» |
| D Footer | `LinCatalogListPagination` 50/100/200/500 |

### S2 — Form Slideout (Kind D)

| Item | AC |
|------|----|
| Modes | Create / Edit / View(`readOnly`) / Copy |
| Layout | 2col Z1–Z3 · footer Lưu/Hủy · LeaveConfirmModal dirty |
| Shared (head) | road SearchInput* · province* · kmFrom/kmTo* · side* · status* |
| Section 1 — Khóm cây | oleanderClumps · ngauClumps · palmClumps · otherClumps (Number int ≥0) |
| Section 2 — Thảm cỏ | grassAreaM2 (Number decimal ≥0) — **optional** nếu có khóm · **allow_either** |
| Trail | manageUnit (Text P1 → org SearchInput P2) · notes |
| code | readonly auto IdCode `CX-yyyyMMdd-nnnn` · **cấm** Guid |
| road | SearchInput `road-route` + roadCode/roadName |

## Grid AC (list)

1. Filter+search client/server theo controlHint · không nút Tìm riêng.  
2. Cột mặc định = subset (Q-LIST-COLS); schema-config bật đủ 15.  
3. Pagination 50/100/200/500 · soft-delete refresh.  
4. Row actions + toolbar CRUD · history/import stub.  
5. Empty/error toast VN · 404 đóng slideout.

## Report AC

N/A — packKind=`list`.

## § Leave

| Case | Behavior |
|------|----------|
| Dirty form | LeaveConfirmModal trước đóng/navigate |
| Cancel clean | đóng slideout không confirm |
| After save | đóng · list refresh · toast OK |

## GAP accept (PO → Design/SA)

| GAP | PO |
|-----|-----|
| GAP-BIEU12-TYPED-01 | Accept — typed 15 · **cấm** detail* |
| GAP-BIEU12-ROUTE-01 | Accept — alias_now |
| GAP-BIEU12-CLUMP-01 | Accept — 4 Number khóm · **cấm** 1 text loại cây |
| GAP-BIEU12-GRASS-01 | Accept — grassAreaM2 tách · allow_either |
| GAP-BIEU12-SIDE-01 | Accept — side_only L/R/C/Both |
| GAP-BIEU12-DMAP-01 | Accept — add_now slug |
| GAP-CSDL-ROAD-01 | Accept — SearchInput road-route |
| GAP-CSDL-PROV-01 | Accept — keep_static P1 |
| GAP-CSDL-ORG-01 | Accept — Text P1 · SearchInput org-unit P2 |
| GAP-CSDL-XLS-01 | Accept — Import/Export stub · sheet Biểu 12 OUT Dev/XLS |
| GAP-CSDL-CUC-11 | Accept — ≠ Sổ TS · **cấm** invent peer so-ts-green |
| GAP-CSDL-CUC-03 | Accept — đóng khi typed PASS |

## Control map (PO cite → Design chốt)

### Filters (Zone B)

| Field | controlHint | Notes |
|-------|-------------|-------|
| search | SearchTextInput | mã · đường · ghi chú |
| province | Dropdown LOOKUP_STATIC | keep_static |
| status | Dropdown LOOKUP_STATIC | tot/tb/kem/hong |
| roadCode | SearchInput road-route | GAP-CSDL-ROAD-01 |
| kmFrom / kmTo | Number | |
| side | Dropdown LOOKUP_STATIC | L/R/C/Both |

### Form fields

| Field | controlHint | required | Notes |
|-------|-------------|----------|-------|
| code | Text ro | auto | CX- |
| roadCode / roadName | SearchInput | * | road-route |
| province | Dropdown | * | static P1 |
| kmFrom / kmTo | Number | * | decimal |
| side | Dropdown | * | side_only |
| oleanderClumps | Number | | int ≥0 · section khóm |
| ngauClumps | Number | | int ≥0 |
| palmClumps | Number | | int ≥0 |
| otherClumps | Number | | int ≥0 · keep_other |
| grassAreaM2 | Number | | decimal ≥0 · section thảm cỏ · allow_either |
| status | Dropdown | * | tot/tb/kem/hong |
| manageUnit | Text → SearchInput P2 | | org-unit |
| notes | Textarea | | |

## Live bind (cite real-data)

| Op | Path |
|----|------|
| List | `GET /web-bff/api/v1/asset/csdl-records?resource=green-assets` |
| Detail | `GET …/csdl-records/{id}` |
| CRUD | POST / PUT / soft DELETE · body `resource=green-assets` + typed |
| Road | `GET /integration/road-routes/search` |
| Org P2 | `GET /integration/org-units/search` |

**Cấm** invent `api/v1/infra/*` · ERP.* · `api/v1/so-ts/*`.

## Handoff Design

1. control-map khớp bảng trên · prototype list + slideout 2 section · reviewUrl.  
2. Filter-bar HARD · typography GAP-TYP-01.  
3. Grid subset mặc định · schema-config đủ 15.  
4. **Cấm** demo-json SSOT · **cấm** 3 ô detail*.

## Handoff SA

1. Typed DTO / UiSchema `green-assets` · Schema_CsdlBieu12 / GreenAsset.  
2. DOMAIN-MAP slug `csdl-bieu-12` → Asset (**add_now**).  
3. Confirm `OtherClumps` ↔ Excel «khác».  
4. **Cấm** invent infra path.

## NFR / Out of scope P1

- yarn build / e2e — chỉ Dev/QA.  
- Map canvas — none (gis deep-link only).  
- History modal / Import XLS full — stub P1 · OUT pack Dev/XLS.  
- org-unit SearchInput — P2 OK.  
- Master province — DEFER.

## Version meta (REQUIRED)

| Field | Value |
|-------|-------|
| skillId | agent-po |
| skillVersion | 2026.08.25.01 |
| schemaVersion | 1 |
| workflowVersion | 2026.09.01.02 |
| rulesVersion | 2026.08.31.2 |
| contentHash | `sha256:6da498be3a84192c6f3e3c30a7e8032bf2753359591a9aabd3ad36d809f4c457` |
| headerFingerprint | `sha256:54aef0c755530d138ecefa7a303b22c78c32ca1b6ae3555d5bb33492799b5af9` |
| generatedAt | 2026-09-05T13:05:00.000Z |
| versionGate | ok |
| taskId | task_65010473 |
| packKind | list |
| changeScope | new_page |

---
<!-- Version meta: skillId=agent-po skillVersion=2026.08.25.01 schemaVersion=1 workflowVersion=2026.09.01.02 rulesVersion=2026.08.31.2 versionGate=ok contentHash=sha256:6da498be3a84192c6f3e3c30a7e8032bf2753359591a9aabd3ad36d809f4c457 -->
