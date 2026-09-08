# PO requirement — csdl-bieu-15 (CSDL Biểu 15 — TMC / thu phí / hạt / kho)

| Field | Value |
|-------|-------|
| feature | `csdl-bieu-15` |
| title | CSDL Biểu 15 — TMC / thu phí / hạt / kho |
| packKind | `list` |
| changeScope | `new_page` |
| status | `confirmed` |
| taskId | `task_a73f1c50` |
| autoApprove | `ON` |
| resource | `ops-facilities` |
| formNo | `15` |
| IdCode prefix | `OF` |
| columns | `20` |
| peerSoTs | `so-ts-toll` · `so-ts-rest-area` · `so-ts-station-house` · **cấm** merge |
| mfeStdRoute | `/csdl-bieu-15` |
| mfeStdUrl | `http://localhost:9301/csdl-bieu-15` |
| hub | `/so-ts/csdl-so-sach?resource=ops-facilities` |
| API | `api/v1/asset/csdl-records?resource=ops-facilities` (+ BFF) |
| contentHash | `sha256:3bf356f00182dd6c0864bf5b88ae4d460ef8da73e5521f1b14756b7168dc20a7` |
| headerFingerprint | `sha256:0064a4903777f7ea8d51c7423d8451a20daf77a5934929001905edaa380f4fe4` |
| skillId | `agent-po` |
| skillVersion | `2026.08.25.01` |
| workflowVersion | `2026.09.01.02` |
| rulesVersion | `2026.08.31.2` |
| schemaVersion | `1` |
| confirmedAt | `2026-09-05T15:20:30.000Z` |
| prior | data_analy `confirmed` · control-hint + real-data · hash skip |

> **Cấm** ERP.* · invent `api/v1/infra/*` · form chỉ 3 ô `detail*` · merge so-ts-toll / rest-area / station-house / `road-assets` · Guid IdCode · demo SSOT.  
> Typography: label **13** · input D14 / M16 (**GAP-TYP-01**).

## Goal

Trang CSDL Biểu 15 (list Kind B + form Kind D Slideout) cho cơ sở TMC / thu phí / dừng chân / nhà hạt / kho: typed **20 cột** Excel, resource `ops-facilities`, formNo **15**, alias `/csdl-bieu-15` + **NEW** hub card. Section vị trí + công trình + thiết bị — **≠** Sổ TS peer · ROW riêng CSDL Cục.

## Open Q — PO decisions (autoApprove)

| ID | Decision | Rationale |
|----|----------|-----------|
| Q-ROUTE | **`alias_now`** | Ship Navigate `/csdl-bieu-15` cùng release; giữ hub deep-link |
| Q-PROV | **`keep_static`** | P1 LOOKUP_STATIC 5 tỉnh (hub peers); master province DEFER |
| Q-KIND-SET | **`keep_5`** | LOOKUP: TMC / trạm thu phí / dừng chân / nhà hạt / kho — đủ analy |
| Q-EQ-SET | **`free_text`** | `equipmentKind` Text P1 · LOOKUP chỉ khi Excel confirm |
| Q-AREA-UNIT | **`number_m2`** | DT = Number ≥0 (m²) · **cấm** Text kèm đơn vị |
| Q-MANAGE | **`in_20`** | `manageUnit` trong 20 header · Text P1 → org SearchInput DEFER P2 |
| Q-PREFIX | **`OF`** | IdCode `OF-yyyyMMdd-nnnn` · **cấm** Guid |
| Q-LIST-COLS | **`subset`** | Grid mặc định: shared + facilityKind/name/status/yearBuilt · đủ 20 qua schema-config |
| Q-TITLE | **`ctx_tmc`** | Title «Biểu 15 — TMC / thu phí / hạt / kho» (CTX) |
| Q-DMAP | **`add_now`** | SA/Dev thêm slug `csdl-bieu-15` → Asset (cùng `csdl-so-sach`) |
| Q-PEER-LINK | **`none_p1`** | Không deep-link Sổ TS theo facilityKind P1 · optional P2 |
| Q-KM | **`range`** | `kmFrom`–`kmTo` Line · **cấm** điểm Km đơn P1 |

## Pack confirm

| Item | Value |
|------|-------|
| packKind | `list` |
| List | Kind **B** zones A/B/C/D |
| Form | Kind **D** Slideout 2col Z1–Z3 · **4 section** (Vị trí tuyến · Cơ sở/công trình · Thiết bị · Quản lý) |
| Map | `none` |
| Layout | `LinPageLayout kind="catalog"` |

## Header (20 — không thêm ngoài)

`code|roadCode|roadName|province|kmFrom|kmTo|facilityKind|facilityName|courtyardAreaM2|buildingQty|buildingAreaM2|otherStructQty|otherStructAreaM2|status|yearBuilt|equipmentKind|equipmentQty|equipmentStatus|manageUnit|notes`

## § Screens

### S1 — List (Kind B)

| Zone | AC |
|------|----|
| A Header | Title «Biểu 15 — TMC / thu phí / hạt / kho» · back hub `/so-ts/csdl-so-sach` · **cấm** slug trên card |
| B Toolbar+filter | SearchTextInput (mã · tên CS · đường · ghi chú) · province · status · facilityKind · road SearchInput · kmFrom/kmTo · Tạo mới · Refresh · Delete · History · SchemaConfig · Import/Export stub · **search must work** · **cấm** nút Tìm riêng |
| C Grid | `LinCatalogDataGrid` typed subset · STT · row menu Xem/Sửa/Copy/Xóa/Lịch sử · kéo cột ON · empty «Chưa có cơ sở TMC / thu phí / hạt / kho» |
| D Footer | `LinCatalogListPagination` 50/100/200/500 |

### S1b — Hub card (Kind G entry)

| Item | AC |
|------|----|
| Card | NEW «TMC / thu phí / hạt / kho» · formNo **15** · `?resource=ops-facilities` · **cấm** slug trên card |
| Close | Đóng **GAP-BIEU15-HUB-01** / **GAP-CSDL-CUC-05** (Biểu 15) khi hub+API PASS |

### S2 — Form Slideout (Kind D)

| Item | AC |
|------|----|
| Modes | Create / Edit / View(`readOnly`) / Copy |
| Layout | 2col Z1–Z3 · footer Lưu/Hủy · LeaveConfirmModal dirty |
| Section 1 — Vị trí tuyến | road SearchInput* · province* · kmFrom/kmTo* (range) |
| Section 2 — Cơ sở / công trình | facilityKind* · facilityName* · courtyardAreaM2 · buildingQty · buildingAreaM2 · otherStructQty · otherStructAreaM2 · status* · yearBuilt — **cấm** gộp 1 text detail* |
| Section 3 — Thiết bị | equipmentKind (Text) · equipmentQty · equipmentStatus |
| Section 4 — Quản lý | manageUnit (Text P1 → org SearchInput P2) · notes · code |
| code | readonly auto IdCode `OF-yyyyMMdd-nnnn` · **cấm** Guid |
| road | SearchInput `road-route` + roadCode/roadName |

## Grid AC (list)

1. Filter+search client/server theo controlHint · không nút Tìm riêng.  
2. Cột mặc định = subset (Q-LIST-COLS); schema-config bật đủ 20.  
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

## Filter bar (HARD)

| Control | Rule |
|---------|------|
| SearchTextInput | live filter · **cấm** nút Tìm riêng |
| Dropdowns | province · facilityKind · status · clearable |
| road | SearchInput `road-route` |
| kmFrom / kmTo | Number range Line |
| Layout | 1 hàng ưu tiên · wrap ≤2 · gap 8–12 |

## Lookup sets (P1)

| Key | Values |
|-----|--------|
| facilityKind | `tmc` · `toll_station` · `rest_area` · `station_house` · `warehouse` |
| status | align hub peers (tot/tb/kem/hong) |
| equipmentStatus | align status set |
| province | LOOKUP_STATIC 5 tỉnh |

## Bind (cite real-data)

| Op | Path |
|----|------|
| List | `GET /web-bff/api/v1/asset/csdl-records?resource=ops-facilities` |
| CRUD | same BASE · soft DELETE |
| FE | `services/csdlSoSach/endpoint.ts` `BASE=/asset/csdl-records` |

**Cấm** bind `road-assets?type=…` · invent `api/v1/infra/*` · ERP.*.

## GAP close (when PASS)

| GAP | Close when |
|-----|------------|
| GAP-BIEU15-HUB-01 | NEW hub card live |
| GAP-BIEU15-TYPED-01 | Form typed 20 cột |
| GAP-BIEU15-ROUTE-01 | Alias `/csdl-bieu-15` Navigate |
| GAP-BIEU15-KIND-01 · AREA-01 · EQ-01 · STATUS-01 | controls live |
| GAP-BIEU15-DB-01 · DMAP-01 | SA/Dev |
| GAP-CSDL-CUC-05 (15) · CUC-03 · CUC-11 | hub+API · typed · ≠ so-ts |
| GAP-CSDL-ROAD-01 · PROV-01 · ORG-01 · XLS-01 | SearchInput · static · Text P1 · stub OUT |

## Non-goals / Cấm

- ERP.* · Domains/Master · invent `api/v1/infra/*` · invent `api/v1/so-ts/*`  
- Form chỉ 3 ô `detailPrimary`/`detailSpec`/`detailExtra`  
- Merge so-ts-toll / rest-area / station-house form · dumpSpecs · `road-assets` làm list biểu  
- Guid IdCode · demo/localStorage SSOT · map canvas trên list  
- yarn build / e2e / start:std ở role PO  

## Handoff Design

| Need | Detail |
|------|--------|
| control-map | Khớp controlHint list+form · 20 keys |
| prototype | List A–D + Slideout 4 section + hub card Biểu 15 |
| reviewUrl | Prototype review |
| typography | label 13 · input D14/M16 |
| **cấm** | 3 ô detail* · merge so-ts chrome · invent map |

## Handoff SA (next after Design)

| Need | Detail |
|------|--------|
| DTO/UiSchema | typed `ops-facilities` · Schema_CsdlBieu15 / OpsFacility |
| API | register resource · **giữ** `csdl-records` prefix |
| DOMAIN-MAP | slug `csdl-bieu-15` → Asset |
| **cấm** | invent `infra` · merge road-assets |

## Version meta (REQUIRED)

| Field | Value |
|-------|-------|
| skillId | agent-po |
| skillVersion | 2026.08.25.01 |
| schemaVersion | 1 |
| workflowVersion | 2026.09.01.02 |
| rulesVersion | 2026.08.31.2 |
| contentHash | `sha256:3bf356f00182dd6c0864bf5b88ae4d460ef8da73e5521f1b14756b7168dc20a7` |
| headerFingerprint | `sha256:0064a4903777f7ea8d51c7423d8451a20daf77a5934929001905edaa380f4fe4` |
| generatedAt | 2026-09-05T15:20:30.000Z |
| versionGate | ok |
| taskId | task_a73f1c50 |
| packKind | list |
| changeScope | new_page |

---
<!-- Version meta: skillId=agent-po skillVersion=2026.08.25.01 schemaVersion=1 workflowVersion=2026.09.01.02 rulesVersion=2026.08.31.2 versionGate=ok contentHash=sha256:3bf356f00182dd6c0864bf5b88ae4d460ef8da73e5521f1b14756b7168dc20a7 -->
