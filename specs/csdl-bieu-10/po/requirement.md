# PO requirement — csdl-bieu-10 (CSDL Biểu 10 — Kè, tường chắn)

| Field | Value |
|-------|-------|
| feature | `csdl-bieu-10` |
| title | CSDL Biểu 10 — Kè, tường chắn |
| packKind | `list` |
| changeScope | `new_page` |
| status | `confirmed` |
| taskId | `task_c6ef9738` |
| autoApprove | `ON` |
| resource | `retaining-walls` |
| formNo | `10` |
| IdCode prefix | `KE` |
| columns | `21` |
| peerSoTs | `so-ts-retaining` (deep-link · ≠ merge) |
| mfeStdRoute | `/csdl-bieu-10` |
| mfeStdUrl | `http://localhost:9301/csdl-bieu-10` |
| hub | `/so-ts/csdl-so-sach?resource=retaining-walls` |
| API | `api/v1/asset/csdl-records?resource=retaining-walls` (+ BFF) |
| contentHash | `sha256:56715ebbcfffd0589eab296a31137e79a82b49c672dc14582fc554f4ed262346` |
| headerFingerprint | `sha256:100df2f2285c57a909981f9248564af4f788a1ea653fd261122e9a64064773ad` |
| skillId | `agent-po` |
| skillVersion | `2026.08.25.01` |
| workflowVersion | `2026.09.01.02` |
| rulesVersion | `2026.08.31.2` |
| schemaVersion | `1` |
| confirmedAt | `2026-09-05T11:30:00.000Z` |
| prior | data_analy `confirmed` · control-hint + real-data · hash skip |

> **Cấm** ERP.* · invent `api/v1/infra/*` · form chỉ 3 ô `detail*` · merge `so-ts-retaining` · Guid IdCode · demo SSOT.  
> Typography: label **13** · input D14 / M16 (**GAP-TYP-01**).

## Goal

Trang CSDL Biểu 10 (list Kind B + form Kind D Slideout) cho kè/tường chắn: typed **21 cột** Excel, renumber formNo **9→10**, giữ resource `retaining-walls`, alias route `/csdl-bieu-10` + hub entry.

## Open Q — PO decisions (autoApprove)

| ID | Decision | Rationale |
|----|----------|-----------|
| Q-ROUTE | **`alias_now`** | Ship Navigate `/csdl-bieu-10` cùng release; giữ hub deep-link |
| Q-PROV | **`keep_static`** | P1 LOOKUP_STATIC 5 tỉnh; master province DEFER |
| Q-KIND | **`label_vn`** | Dropdown hiện VN; value API code ổn định (gravity/gabion/rc/retaining) · seed analy |
| Q-STRUCT | **`excel_seed`** | LOOKUP_STATIC từ Excel Biểu 10 · SA seed |
| Q-MAT | **`lookup`** | LOOKUP_STATIC (không free-text) · Excel/demo seed |
| Q-HEIGHT | **`height_alias`** | UI `heightM` (Cao) ↔ DB `WidthM` · SA map |
| Q-CREST | **`optional_flat`** | 4 field flat optional · **cấm** child entity P1 |
| Q-AREA | **`optional`** | `areaM2` optional; derived length×height DEFER |
| Q-LIST-COLS | **`subset`** | Grid mặc định: shared + wallKind/structure/material/lengthM/heightM/areaM2/inServiceYear/status · còn lại schema-config |
| Q-REN-LABEL | **`with_typed`** | Hub card «Biểu 9»→«Biểu 10» cùng release typed |
| Q-PEER | **`toolbar`** | Deep-link Sổ TS `so-ts-retaining` trên toolbar · **cấm** merge form |

## Pack confirm

| Item | Value |
|------|-------|
| packKind | `list` |
| List | Kind **B** zones A/B/C/D |
| Form | Kind **D** Slideout 2col Z1–Z3 · **2 section** (Tường chắn · Rãnh đỉnh) |
| Map | `none` |
| Layout | `LinPageLayout kind="catalog"` |

## Header (21 — không thêm ngoài)

`code|roadCode|roadName|province|kmFrom|kmTo|side|wallKind|structure|material|lengthM|heightM|areaM2|crestDitchKind|crestDitchStructure|crestDitchShape|crestDitchLengthM|inServiceYear|status|manageUnit|notes`

## § Screens

### S1 — List (Kind B)

| Zone | AC |
|------|----|
| A Header | Title «Biểu 10 — Kè, tường chắn» · back hub `/so-ts/csdl-so-sach` · **cấm** slug trên card |
| B Toolbar+filter | SearchTextInput (mã/đường/chủng/VL/ghi chú) · province · status · road SearchInput · kmFrom/kmTo · side · wallKind · Tạo mới · Refresh · Delete · History · SchemaConfig · Import/Export stub · peer Sổ TS · **search must work** · **cấm** nút Tìm riêng |
| C Grid | `LinCatalogDataGrid` typed subset · STT · row menu Xem/Sửa/Copy/Xóa/Lịch sử · kéo cột ON · empty «Chưa có kè / tường chắn» |
| D Footer | `LinCatalogListPagination` 50/100/200/500 |

### S2 — Form Slideout (Kind D)

| Item | AC |
|------|----|
| Modes | Create / Edit / View(`readOnly`) / Copy |
| Layout | 2col Z1–Z3 · footer Lưu/Hủy · LeaveConfirmModal dirty |
| Section 1 | Road/km/side + Tường: wallKind* · structure* · material* · lengthM* · heightM* · areaM2 · inServiceYear* · status* |
| Section 2 | Rãnh đỉnh optional: crestDitchKind · Structure · Shape · LengthM |
| Trail | manageUnit (Text P1 → org SearchInput P2) · notes |
| code | readonly auto IdCode `KE-yyyyMMdd-nnnn` · **cấm** Guid |
| road | SearchInput `road-route` + roadCode/roadName |

## Grid AC (list)

1. Filter+search client/server theo controlHint · không nút Tìm riêng.  
2. Cột mặc định = subset (Q-LIST-COLS); schema-config bật đủ 21.  
3. Pagination 50/100/200/500 · soft-delete refresh.  
4. Row actions + toolbar CRUD stub history/import.  
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
| GAP-BIEU10-TYPED-01 | Accept — typed 21 |
| GAP-BIEU10-REN-01 | Accept — formNo=10 with_typed |
| GAP-BIEU10-ROUTE-01 | Accept — alias_now |
| GAP-BIEU10-KIND/STRUCT/MAT/DIM/CREST/YEAR/BLOCK | Accept per Q |
| GAP-CSDL-ROAD-01 | Accept SearchInput road-route |
| GAP-CSDL-PROV-01 | keep_static P1 |
| GAP-CSDL-ORG-01 | Text P1 · SearchInput org P2 |
| GAP-CSDL-XLS-01 | Import/export OUT Dev/XLS stub P1 |
| GAP-CSDL-CUC-11 | Peer deep-link toolbar · ≠ merge |

## Non-goals / Cấm

- ERP.* · `api/v1/infra/*` · invent so-ts API  
- Form 3 ô `detail*` · merge so-ts-retaining · Guid IdCode  
- Map canvas · child CrestDitch entity P1  
- yarn build / e2e @ PO  

## Handoff Design

1. control-map khớp control-hint · prototype list+slideout 2 section · reviewUrl  
2. Filter bar: SearchTextInput + Dropdowns + road SearchInput · **cấm** nút Tìm  
3. Typography GAP-TYP-01 · Lin catalog chrome  

## Handoff SA

1. Typed DTO/UiSchema `retaining-walls` · Schema_CsdlBieu10  
2. Renumber formNo 10 · map `heightM`↔`WidthM`  
3. LOOKUP seed wallKind/structure/material/crest* từ Excel  
4. Giữ API prefix `csdl-records` · widen payload  

## Version meta (REQUIRED)

| Field | Value |
|-------|-------|
| skillId | agent-po |
| skillVersion | 2026.08.25.01 |
| schemaVersion | 1 |
| workflowVersion | 2026.09.01.02 |
| rulesVersion | 2026.08.31.2 |
| contentHash | `sha256:56715ebbcfffd0589eab296a31137e79a82b49c672dc14582fc554f4ed262346` |
| headerFingerprint | `sha256:100df2f2285c57a909981f9248564af4f788a1ea653fd261122e9a64064773ad` |
| generatedAt | 2026-09-05T11:30:00.000Z |
| versionGate | ok |
| taskId | task_c6ef9738 |
| packKind | list |
| changeScope | new_page |

---
<!-- Version meta: skillId=agent-po skillVersion=2026.08.25.01 schemaVersion=1 workflowVersion=2026.09.01.02 rulesVersion=2026.08.31.2 versionGate=ok contentHash=sha256:56715ebbcfffd0589eab296a31137e79a82b49c672dc14582fc554f4ed262346 -->
