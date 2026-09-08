# PO requirement — csdl-bieu-13 (CSDL Biểu 13 — Tường chống ồn)

| Field | Value |
|-------|-------|
| feature | `csdl-bieu-13` |
| title | CSDL Biểu 13 — Tường chống ồn |
| packKind | `list` |
| changeScope | `new_page` |
| status | `confirmed` |
| taskId | `task_397af5bc` |
| autoApprove | `ON` |
| resource | `noise-barriers` |
| formNo | `13` |
| IdCode prefix | `TC` |
| columns | `13` |
| peerSoTs | `so-ts-noise-barrier` · **cấm** merge |
| mfeStdRoute | `/csdl-bieu-13` |
| mfeStdUrl | `http://localhost:9301/csdl-bieu-13` |
| hub | `/so-ts/csdl-so-sach?resource=noise-barriers` |
| API | `api/v1/asset/csdl-records?resource=noise-barriers` (+ BFF) |
| contentHash | `sha256:39a45de0a9b834c65373e6c20d1664ab43144ff60d97bae4f0d886ad09d91e3a` |
| headerFingerprint | `sha256:31dbc83200b511c9d61333b1cdb94e2880778980a3b21970be414e926db29008` |
| skillId | `agent-po` |
| skillVersion | `2026.08.25.01` |
| workflowVersion | `2026.09.01.02` |
| rulesVersion | `2026.08.31.2` |
| schemaVersion | `1` |
| confirmedAt | `2026-09-05T14:00:00.000Z` |
| prior | data_analy `confirmed` · control-hint + real-data · hash skip |

> **Cấm** ERP.* · invent `api/v1/infra/*` · form chỉ 3 ô `detail*` · merge `so-ts-noise-barrier` / `road-assets` · Guid IdCode · demo SSOT.  
> Typography: label **13** · input D14 / M16 (**GAP-TYP-01**).

## Goal

Trang CSDL Biểu 13 (list Kind B + form Kind D Slideout) cho tường chống ồn: typed **13 cột** Excel, resource `noise-barriers`, formNo **13**, alias `/csdl-bieu-13` + **NEW** hub card. Section kích thước dài/cao/DT — **≠** Sổ TS `so-ts-noise-barrier`.

## Open Q — PO decisions (autoApprove)

| ID | Decision | Rationale |
|----|----------|-----------|
| Q-ROUTE | **`alias_now`** | Ship Navigate `/csdl-bieu-13` cùng release; giữ hub deep-link |
| Q-PROV | **`keep_static`** | P1 LOOKUP_STATIC 5 tỉnh; master province DEFER |
| Q-BARRIER-TYPE | **`no_type_keep_13`** | Giữ đúng 13 cột Excel · **cấm** thêm loại tường ngoài header |
| Q-AREA-DERIVE | **`manual`** | `areaM2` nhập tay · tường có thể ≠ L×H · UX hint optional OK · **cấm** force readonly |
| Q-PREFIX | **`TC`** | Khớp GIS peer · IdCode `TC-yyyyMMdd-nnnn` |
| Q-LIST-COLS | **`subset`** | Grid mặc định: shared + lengthM/heightM/areaM2 + status · manageUnit/notes qua schema-config |
| Q-TITLE | **`ctx_tuong`** | Title «Biểu 13 — Tường chống ồn» (CTX/hub) · **≠** peer «Rào chắn ồn» |
| Q-DMAP | **`add_now`** | SA/Dev thêm slug `csdl-bieu-13` → Asset (cùng `csdl-so-sach`) |
| Q-PEER-LINK | **`none_p1`** | Không deep-link Sổ TS P1 · optional P2 |

## Pack confirm

| Item | Value |
|------|-------|
| packKind | `list` |
| List | Kind **B** zones A/B/C/D |
| Form | Kind **D** Slideout 2col Z1–Z3 · **2 section** (Vị trí tuyến · Kích thước tường) |
| Map | `none` |
| Layout | `LinPageLayout kind="catalog"` |

## Header (13 — không thêm ngoài)

`code|roadCode|roadName|province|kmFrom|kmTo|side|lengthM|heightM|areaM2|status|manageUnit|notes`

## § Screens

### S1 — List (Kind B)

| Zone | AC |
|------|----|
| A Header | Title «Biểu 13 — Tường chống ồn» · back hub `/so-ts/csdl-so-sach` · **cấm** slug trên card |
| B Toolbar+filter | SearchTextInput (mã/đường/ghi chú) · province · status · road SearchInput · kmFrom/kmTo · side · Tạo mới · Refresh · Delete · History · SchemaConfig · Import/Export stub · **search must work** · **cấm** nút Tìm riêng |
| C Grid | `LinCatalogDataGrid` typed subset · STT · row menu Xem/Sửa/Copy/Xóa/Lịch sử · kéo cột ON · empty «Chưa có tường chống ồn» |
| D Footer | `LinCatalogListPagination` 50/100/200/500 |

### S1b — Hub card (Kind G entry)

| Item | AC |
|------|----|
| Card | NEW «Tường chống ồn» · formNo **13** · `?resource=noise-barriers` · **cấm** slug trên card |
| Close | Đóng **GAP-BIEU13-HUB-01** / **GAP-CSDL-CUC-05** (Biểu 13) khi hub+API PASS |

### S2 — Form Slideout (Kind D)

| Item | AC |
|------|----|
| Modes | Create / Edit / View(`readOnly`) / Copy |
| Layout | 2col Z1–Z3 · footer Lưu/Hủy · LeaveConfirmModal dirty |
| Section 1 — Vị trí tuyến | road SearchInput* · province* · kmFrom/kmTo* · side* (L/R/C/Both) · status* |
| Section 2 — Kích thước tường | lengthM* · heightM · areaM2 (Number decimal ≥0) — **cấm** gộp 1 text detail* |
| Trail | manageUnit (Text P1 → org SearchInput P2) · notes |
| code | readonly auto IdCode `TC-yyyyMMdd-nnnn` · **cấm** Guid |
| road | SearchInput `road-route` + roadCode/roadName |

## Grid AC (list)

1. Filter+search client/server theo controlHint · không nút Tìm riêng.  
2. Cột mặc định = subset (Q-LIST-COLS); schema-config bật đủ 13.  
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
| GAP-BIEU13-HUB-01 | Accept — NEW hub card noise-barriers |
| GAP-BIEU13-TYPED-01 | Accept — typed 13 · **cấm** detail* |
| GAP-BIEU13-ROUTE-01 | Accept — alias_now |
| GAP-BIEU13-DIM-01 | Accept — lengthM/heightM/areaM2 Number tách |
| GAP-BIEU13-SIDE-01 | Accept — side LOOKUP L/R/C/Both |
| GAP-BIEU13-DB-01 | Accept — SA Schema_CsdlBieu13 / NoiseBarrier |
| GAP-BIEU13-DMAP-01 | Accept — add_now slug |
| GAP-CSDL-CUC-05 | Accept — đóng khi hub+API Biểu 13 PASS |
| GAP-CSDL-ROAD-01 | Accept — SearchInput road-route |
| GAP-CSDL-PROV-01 | Accept — keep_static P1 |
| GAP-CSDL-ORG-01 | Accept — Text P1 · org SearchInput DEFER P2 |
| GAP-CSDL-XLS-01 | Accept — Import/Export stub · sheet Biểu 13 OUT Dev/XLS |
| GAP-CSDL-CUC-11 | Accept — ≠ so-ts-noise-barrier · **cấm** merge |

## Live bind (cite real-data)

| Op | Path |
|----|------|
| List | `GET /web-bff/api/v1/asset/csdl-records?resource=noise-barriers` |
| Detail | `GET …/csdl-records/{id}` |
| CRUD | `POST` / `PUT` / soft `DELETE` · body `resource=noise-barriers` + typed |

**Cấm** bind `road-assets?type=NOISE_BARRIER` · invent `api/v1/infra/*` · ERP.*.

## Handoff Design

- control-map khớp controlHint (filter + form 13 cột · section kích thước).  
- Prototype list A–D + Slideout + hub card · filter-bar HARD · reviewUrl.  
- Empty copy «Chưa có tường chống ồn».  
- Title «Biểu 13 — Tường chống ồn» · **cấm** peer title trên hub.

## Handoff SA

- Register resource `noise-barriers` · typed DTO/UiSchema.  
- Schema_CsdlBieu13 / `NoiseBarrier` · DOMAIN-MAP slug `csdl-bieu-13`.  
- **Cấm** invent `infra` · **cấm** merge road-assets / so-ts form.

## Non-goals (P1)

- Map canvas · peer deep-link Sổ TS · master province · org-unit SearchInput · BarrierType ngoài 13 · yarn build/e2e @ po.

## Version meta (REQUIRED)

| Field | Value |
|-------|-------|
| skillId | agent-po |
| skillVersion | 2026.08.25.01 |
| schemaVersion | 1 |
| workflowVersion | 2026.09.01.02 |
| rulesVersion | 2026.08.31.2 |
| contentHash | `sha256:39a45de0a9b834c65373e6c20d1664ab43144ff60d97bae4f0d886ad09d91e3a` |
| headerFingerprint | `sha256:31dbc83200b511c9d61333b1cdb94e2880778980a3b21970be414e926db29008` |
| generatedAt | 2026-09-05T14:00:00.000Z |
| versionGate | ok |
| taskId | task_397af5bc |
| packKind | list |
| changeScope | new_page |

---
<!-- Version meta: skillId=agent-po skillVersion=2026.08.25.01 schemaVersion=1 workflowVersion=2026.09.01.02 rulesVersion=2026.08.31.2 versionGate=ok contentHash=sha256:39a45de0a9b834c65373e6c20d1664ab43144ff60d97bae4f0d886ad09d91e3a -->
