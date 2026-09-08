# PO requirement — csdl-bieu-16 (CSDL Biểu 16 — Nút giao)

| Field | Value |
|-------|-------|
| feature | `csdl-bieu-16` |
| title | CSDL Biểu 16 — Nút giao |
| packKind | `list` |
| changeScope | `new_page` |
| status | `confirmed` |
| taskId | `task_593d435f` |
| autoApprove | `ON` |
| resource | `interchanges` |
| formNo | `16` |
| IdCode prefix | `IX` |
| columns | `39` |
| peerSoTs | `so-ts-interchange` · **cấm** merge |
| mfeStdRoute | `/csdl-bieu-16` |
| mfeStdUrl | `http://localhost:9301/csdl-bieu-16` |
| hub | `/so-ts/csdl-so-sach?resource=interchanges` |
| API | `api/v1/asset/csdl-records?resource=interchanges` (+ BFF) |
| contentHash | `sha256:56e2fb16e9bcde21f17d7e9639b72660666778f5393b1270cecc49d123beba4b` |
| headerFingerprint | `sha256:ec787bf2008ae89f1b6c085fe238f1b0d50b048f5c672b90b68d9ea102cf8fcc` |
| skillId | `agent-po` |
| skillVersion | `2026.08.25.01` |
| workflowVersion | `2026.09.01.02` |
| rulesVersion | `2026.08.31.2` |
| schemaVersion | `1` |
| confirmedAt | `2026-09-05T16:12:00.000Z` |
| prior | data_analy `confirmed` · control-hint + real-data · hash skip |

> **Cấm** ERP.* · invent `api/v1/infra/*` · form chỉ 3 ô `detail*` · flatten-only 1 nhánh · merge so-ts-interchange / `road-assets` · Guid IdCode · demo SSOT.  
> Typography: label **13** · input D14 / M16 (**GAP-TYP-01**).  
> Child `branches[]` 1–n bắt buộc UX (**GAP-CSDL-CUC-09**).

## Goal

Trang CSDL Biểu 16 (list Kind B + form Kind D Slideout) cho **Nút giao**: typed **39 cột** Excel (header scalar + child `branches[]` + ATGT), resource `interchanges`, formNo **16**, alias `/csdl-bieu-16` + **NEW** hub card. Section định danh + đặc trưng nút + child nhánh + ATGT + quản lý — **≠** Sổ TS peer · ROW riêng CSDL Cục.

## Open Q — PO decisions (autoApprove)

| ID | Decision | Rationale |
|----|----------|-----------|
| Q-ROUTE | **`alias_now`** | Ship Navigate `/csdl-bieu-16` cùng release; giữ hub deep-link |
| Q-PROV | **`keep_static`** | P1 LOOKUP_STATIC 5 tỉnh (hub peers); master province DEFER |
| Q-TYPE-SET | **`cite_excel`** | `interchangeType` LOOKUP từ sheet Biểu 16 (đồng mức / khác mức / liên thông / …) · **cấm** expand không cite |
| Q-TRAFFIC-ORG | **`lookup`** | `trafficOrg` Dropdown LOOKUP_STATIC P1 · free Text chỉ nếu Excel không seed |
| Q-ATGT | **`qty`** | ATGT biển/vạch/đảo/đèn = Number qty ≥0 P1 · child table DEFER P2 |
| Q-BRANCH-MIN | **`min_1`** | Lưu bắt buộc ≥1 nhánh · toast validate · **cấm** flatten-only |
| Q-KM | **`point_main`** | `kmMain`* + `kmAux` optional · **cấm** Line kmFrom–kmTo P1 |
| Q-MANAGE | **`in_39`** | `manageUnit` trong 39 header · Text P1 → org SearchInput DEFER P2 |
| Q-PREFIX | **`IX`** | IdCode `IX-yyyyMMdd-nnnn` · **cấm** Guid · **≠** prefix peer NG nếu peer dùng khác |
| Q-LIST-COLS | **`subset`** | Grid mặc định: shared + name / interchangeType / kmMain / status · đủ 39 qua schema-config |
| Q-TITLE | **`nut_giao`** | Title «Biểu 16 — Nút giao» · hub card «Nút giao» |
| Q-DMAP | **`add_now`** | SA/Dev thêm slug `csdl-bieu-16` → Asset (cùng `csdl-so-sach`) |
| Q-PEER-LINK | **`none_p1`** | Không deep-link Sổ TS `?type=INTERCHANGE` P1 · optional P2 |
| Q-CHILD-API | **`embed`** | `branches[]` embed JSON trong payload CRUD P1 · nested table API DEFER SA nếu cần |

## Pack confirm

| Item | Value |
|------|-------|
| packKind | `list` |
| List | Kind **B** zones A/B/C/D |
| Form | Kind **D** Slideout 2col Z1–Z3 · **5 section** (Định danh · Đặc trưng nút · Nhánh child · ATGT · Quản lý) |
| Map | `none` |
| Layout | `LinPageLayout kind="catalog"` |

## Header (39 — Excel flatten; runtime child = `branches[]`)

`code|name|roadCode|roadName|province|kmMain|kmAux|interchangeType|trafficOrg|mainBedWidth|mainSurfaceWidth|mainMedianWidth|mainLaneCount|branchName|branchKmFrom|branchKmTo|branchSide|branchDirection|branchLength|branchBedWidth|branchSurfaceWidth|branchMedianWidth|branchRadius|atgtSign|atgtMarking|atgtIsland|atgtLight|status|yearBuilt|manageUnit|notes|lat|lng|updatedBy|updatedAt|isActive|branchCount|formNo|side`

Runtime: cột `branch*` Excel flatten → editable child grid `branches[]` (**GAP-CSDL-CUC-09** · **cấm** chỉ 1 nhánh cố định).

## § Screens

### S1 — List (Kind B)

| Zone | AC |
|------|----|
| A Header | Title «Biểu 16 — Nút giao» · back hub `/so-ts/csdl-so-sach` · **cấm** slug trên card |
| B Toolbar+filter | SearchTextInput (mã · tên nút · đường · ghi chú) · province · interchangeType · status · road SearchInput · kmMain · Tạo mới · Refresh · Delete · History · SchemaConfig · Import/Export stub · **search must work** · **cấm** nút Tìm riêng |
| C Grid | `LinCatalogDataGrid` typed subset · STT · row menu Xem/Sửa/Copy/Xóa/Lịch sử · kéo cột ON · empty «Chưa có nút giao» |
| D Footer | `LinCatalogListPagination` 50/100/200/500 |

### S1b — Hub card (Kind G entry)

| Item | AC |
|------|----|
| Card | NEW «Nút giao» · formNo **16** · `?resource=interchanges` · **cấm** slug trên card |
| Close | Đóng **GAP-BIEU16-HUB-01** / **GAP-CSDL-CUC-05** (Biểu 16) khi hub+API PASS |

### S2 — Form Slideout (Kind D)

| Item | AC |
|------|----|
| Modes | Create / Edit / View(`readOnly`) / Copy |
| Layout | 2col Z1–Z3 · footer Lưu/Hủy · LeaveConfirmModal dirty |
| Section 1 — Định danh / vị trí | code · name* · road SearchInput* · province* · kmMain* · kmAux · side |
| Section 2 — Đặc trưng nút | interchangeType* · trafficOrg · mainBedWidth · mainSurfaceWidth · mainMedianWidth · mainLaneCount |
| Section 3 — Nhánh (child) | editable grid `branches[]` add/remove · min **1** khi Lưu · fields: branchName* · branchKmFrom/To* · branchSide · branchDirection · branchLength · branchBedWidth · branchSurfaceWidth · branchMedianWidth · branchRadius |
| Section 4 — ATGT | atgtSign · atgtMarking · atgtIsland · atgtLight (Number qty ≥0) |
| Section 5 — Quản lý | status* · yearBuilt · manageUnit (Text P1) · notes · lat/lng · branchCount (derived ro) · formNo const `16` |
| code | readonly auto IdCode `IX-yyyyMMdd-nnnn` · **cấm** Guid |
| road | SearchInput `road-route` + roadCode/roadName |
| **cấm** | chỉ 3 ô `detail*` · flatten-only 1 nhánh |

## Grid AC (list)

1. Filter+search client/server theo controlHint · không nút Tìm riêng.  
2. Cột mặc định = subset (Q-LIST-COLS); schema-config bật đủ 39 / derived.  
3. Pagination 50/100/200/500 · soft-delete refresh.  
4. Row actions + toolbar CRUD · history/import stub.  
5. Empty «Chưa có nút giao» · error toast VN · 404 đóng slideout.

## Report AC

N/A — packKind=`list`.

## § Leave

| Case | Behavior |
|------|----------|
| Dirty form | LeaveConfirmModal trước đóng/navigate |
| Cancel clean | đóng slideout không confirm |
| After save | đóng · list refresh · toast OK |
| Branch min | Lưu với `branches.length < 1` → block + toast (Q-BRANCH-MIN) |

## Filter bar (HARD)

| Control | Rule |
|---------|------|
| SearchTextInput | live filter · **cấm** nút Tìm riêng |
| Dropdowns | province · interchangeType · status · clearable |
| road | SearchInput `road-route` |
| kmMain | Number · điểm nút |
| Layout | 1 hàng ưu tiên · wrap ≤2 · gap 8–12 |

## Lookup sets (P1)

| Key | Values |
|-----|--------|
| interchangeType | cite Excel Biểu 16 (đồng mức / khác mức / liên thông / …) · Design seed · **cấm** invent |
| trafficOrg | LOOKUP_STATIC cite Excel / analy · **cấm** invent set |
| status | align hub peers (tot/tb/kem/hong) |
| side | L / R / C |
| province | LOOKUP_STATIC 5 tỉnh |
| branchSide | L / R / C |
| branchDirection | LOOKUP hoặc Text ngắn · Design chốt từ Excel |

## Bind (cite real-data)

| Op | Path |
|----|------|
| List | `GET /web-bff/api/v1/asset/csdl-records?resource=interchanges` |
| Detail | `GET /web-bff/api/v1/asset/csdl-records/{id}` |
| Create | `POST …/csdl-records` body `resource=interchanges` + typed + `branches[]` |
| Update | `PUT …/csdl-records/{id}` |
| Delete | soft `DELETE …/csdl-records/{id}` |
| FE | `services/csdlSoSach/endpoint.ts` `BASE=/asset/csdl-records` |

**Cấm** bind `road-assets?type=INTERCHANGE` · invent `api/v1/infra/*` · ERP.* · so-ts-interchange form APIs làm list biểu.

## GAP close (when PASS)

| GAP | Close when |
|-----|------------|
| GAP-BIEU16-HUB-01 | NEW hub card live |
| GAP-BIEU16-TYPED-01 | Form typed 39 cột + sections |
| GAP-BIEU16-ROUTE-01 | Alias `/csdl-bieu-16` Navigate |
| GAP-BIEU16-BRANCH-01 · CUC-09 | Child grid `branches[]` 1–n · min_1 |
| GAP-BIEU16-TYPE-01 · MAIN-01 · ATGT-01 · KM-01 | controls live |
| GAP-BIEU16-DB-01 · DMAP-01 | SA/Dev Schema + DOMAIN-MAP slug |
| GAP-CSDL-CUC-05 (16) · CUC-03 · CUC-11 | hub+API · typed · ≠ so-ts-interchange |
| GAP-CSDL-ROAD-01 · PROV-01 · ORG-01 · XLS-01 | SearchInput · static · Text P1 · stub OUT |

## Non-goals / Cấm

- ERP.* · Domains/Master · invent `api/v1/infra/*` · invent `api/v1/so-ts/*`  
- Form chỉ 3 ô `detailPrimary`/`detailSpec`/`detailExtra`  
- Flatten-only 1 nhánh · bỏ child grid  
- Merge so-ts-interchange form · dumpSpecs · `road-assets` làm list biểu  
- Guid IdCode · demo/localStorage SSOT · map canvas trên list  
- yarn build / e2e / start:std ở role PO  

## Handoff Design

| Need | Detail |
|------|--------|
| control-map | Khớp controlHint list+form · 39 keys + child `branches[]` |
| prototype | List A–D + Slideout 5 section + child grid nhánh + ATGT + hub card Biểu 16 |
| reviewUrl | Prototype review |
| typography | label 13 · input D14/M16 |
| **cấm** | 3 ô detail* · flatten-only · merge so-ts chrome · invent map · re-scan demo |

## Handoff SA (next after Design)

| Need | Detail |
|------|--------|
| DTO/UiSchema | typed `interchanges` · Schema_CsdlBieu16 / `Interchange` + `InterchangeBranch` |
| API | register resource · **giữ** `csdl-records` prefix · embed `branches[]` P1 |
| DOMAIN-MAP | slug `csdl-bieu-16` → Asset |
| **cấm** | invent `infra` · merge road-assets / so-ts-interchange |

## Version meta (REQUIRED)

| Field | Value |
|-------|-------|
| skillId | agent-po |
| skillVersion | 2026.08.25.01 |
| schemaVersion | 1 |
| workflowVersion | 2026.09.01.02 |
| rulesVersion | 2026.08.31.2 |
| contentHash | `sha256:56e2fb16e9bcde21f17d7e9639b72660666778f5393b1270cecc49d123beba4b` |
| headerFingerprint | `sha256:ec787bf2008ae89f1b6c085fe238f1b0d50b048f5c672b90b68d9ea102cf8fcc` |
| generatedAt | 2026-09-05T16:12:00.000Z |
| versionGate | ok |
| taskId | task_593d435f |
| packKind | list |
| changeScope | new_page |

---
<!-- Version meta: skillId=agent-po skillVersion=2026.08.25.01 schemaVersion=1 workflowVersion=2026.09.01.02 rulesVersion=2026.08.31.2 versionGate=ok contentHash=sha256:56e2fb16e9bcde21f17d7e9639b72660666778f5393b1270cecc49d123beba4b -->
