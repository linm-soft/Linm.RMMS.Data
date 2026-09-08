# Data-analy — controlHint — csdl-bieu-16 (Kind B list + Kind D Slideout · Biểu 16)

| Field | Value |
|-------|-------|
| feature | `csdl-bieu-16` |
| packKind | `list` |
| mode | `feature_context` (new_page · CTX + cluster analy + hub demo · synthetic) |
| changeScope | `new_page` |
| status | `done` |
| skillId | `agent-data-analy` |
| skillVersion | `2026.08.25.01` |
| schemaVersion | `1` |
| workflowVersion | `2026.09.01.02` |
| rulesVersion | `2026.08.31.2` |
| versionGate | `ok` (first fill stubs · CTX+demo hash recorded · autoApprove queue) |
| contentHash | `sha256:56e2fb16e9bcde21f17d7e9639b72660666778f5393b1270cecc49d123beba4b` |
| headerFingerprint | `sha256:ec787bf2008ae89f1b6c085fe238f1b0d50b048f5c672b90b68d9ea102cf8fcc` |
| analyzedAt | `2026-09-05T16:01:30.000Z` |
| cluster | `csdl-cuc-2026` · Excel sheet Biểu 16 · **39 cột** · Nút giao · child `branches[]` 1–n · **NEW card** |
| taskId | `task_70fe1d76` |
| autoApprove | `ON` (queue) |
| realData | `specs/_data-analy/features/csdl-bieu-16-real-data.md` |
| beRepo | `D:/AI-QLBD/Linm.RMMS.WebService` · domain **Asset** · `api/v1/asset/csdl-records?resource=interchanges` · **cấm ERP.*** · **cấm** invent `api/v1/infra/*` |
| uiRepo | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Asset` |
| mfeStdUrl | `http://localhost:9301/csdl-bieu-16` · hub deep-link `/so-ts/csdl-so-sach?resource=interchanges` |
| resource | `interchanges` |
| formNo | `16` · title VN **Nút giao** |
| peerSoTs | `so-ts-interchange` · type `INTERCHANGE` · **≠** merge form so-ts-* · **GAP-CSDL-CUC-11** |
| runMode | `new_page` · typed form **39 cột** + child nhánh · **cấm** chỉ 3 ô `detail*` |

> Data-analy **đề xuất** controlHint. Design **chốt** control-map. SA **chốt** typed DTO + child `branches[]` + migration.  
> Typography: label **13** · input D14 / M16 (**GAP-TYP-01**).  
> `sourceKind=synthetic` — demo = zone/field **tham chiếu** · **cấm** demo-json / localStorage SSOT.  
> **Cấm** chỉ 3 ô `detailPrimary`/`detailSpec`/`detailExtra` — form = đủ cột Excel (cite analy).  
> Analy: header nút (mã · tên · Km chính/phụ · tỉnh · loại · tổ chức GT · B nền/mặt/KC/số làn tuyến chính) · **Child** `branches[]` (tên · từ–đến · vị trí · hướng · dài · B nền/mặt · KC · R) · ATGT (biển · vạch · đảo · đèn) — **GAP-CSDL-CUC-09**.  
> DB SSOT doc hiện **1–12 only** — entity `Interchange` / Schema_CsdlBieu16 = **SA + migration** (**GAP-BIEU16-DB-01**).  
> Peer Sổ TS = inventory `road-assets?type=INTERCHANGE` — **ROW riêng** CSDL Cục · **cấm** reuse dumpSpecs / merge form.  
> **≠** deep-link Sổ TS làm SSOT biểu.

## Sources

| Source | Path | sha256 / note |
|--------|------|---------------|
| Context | `docs/context/features/csdl-bieu-16.md` | `56e2fb16e9bcde21f17d7e9639b72660666778f5393b1270cecc49d123beba4b` |
| Parent hub | `docs/context/features/csdl-so-sach.md` | cite hub Kind G · **thiếu** card `interchanges` |
| Cluster analy | `specs/_data-analy/csdl-cuc-2026/ANALYSIS-AND-TASKS.md` | Biểu 16 · **39 cột** · § Biểu 16 · **MISSING hub** · **GAP-CSDL-CUC-05/09** |
| DB API SSOT | `docs/context/11-CSDL-SO-SACH-DATABASE-API.md` | chỉ Biểu **1–12** · **GAP-BIEU16-DB-01** · live path = `asset/csdl-records` (doc §2.1 `infra` = legacy · **cấm** invent) |
| Peer CTX | `so-ts-interchange` | peer type INTERCHANGE · **cấm** merge |
| Demo entry | `Linm.RMMS.Demo/src/demo/features/csdl-so-sach-demo.html` | `c2c9f8194cb104b3202bcaa46a589c9baba5cf8062aa12e7d0872a9e96eba7ae` |
| Demo page | `Linm.RMMS.Demo/src/demo/asset/csdl-so-sach.html` | hub+list+slideout chrome · **chưa** card Biểu 16 |
| Demo data | `Linm.RMMS.Demo/src/demo/asset/js/csdl-so-sach-data.js` | `csdlResources` **12** biểu · **thiếu** `interchanges` · **GAP-BIEU16-HUB-01** |
| DOMAIN-MAP | `Linm.RMMS.WebService/docs/DOMAIN-MAP.md` | `csdl-so-sach` → Asset · slug tới `csdl-bieu-14` · **GAP-BIEU16-DMAP-01** thiếu `csdl-bieu-16` |
| Live API | `CsdlCatalogRecordsController` | `api/v1/asset/csdl-records` (polymorphic shell) · resource **chưa** đăng ký |
| Live MFE | `CsdlSoSachPage` · `CsdlFormSlideout` | generic 3-field — **GAP-BIEU16-TYPED-01** |
| Excel | `data-import/Sổ sách, biểu mẫu trình LĐ Cục/1. Biểu mẫu CSDL.xls` sheet Biểu 16 | real source · import OUT Dev/XLS task |
| Peer Sổ TS | interchange · `api/v1/asset/road-assets?type=INTERCHANGE` | peer only · **cấm** merge |

Normalized header (39 — Excel flatten + shared trail; runtime child = `branches[]`):

`code|name|roadCode|roadName|province|kmMain|kmAux|interchangeType|trafficOrg|mainBedWidth|mainSurfaceWidth|mainMedianWidth|mainLaneCount|branchName|branchKmFrom|branchKmTo|branchSide|branchDirection|branchLength|branchBedWidth|branchSurfaceWidth|branchMedianWidth|branchRadius|atgtSign|atgtMarking|atgtIsland|atgtLight|status|yearBuilt|manageUnit|notes|lat|lng|updatedBy|updatedAt|isActive|branchCount|formNo|side`

Form: header scalar + **child grid** `branches[]` (không flatten 1 nhánh duy nhất) · ATGT qty trên header.  
DB đề xuất: `Interchange` + `InterchangeBranch` · **SA** confirm Excel.

## § Delta Current vs New (`new_page` · `task_70fe1d76`)

| ID | Current | New (this analy) | Surface |
|----|---------|------------------|---------|
| GAP-BIEU16-HUB-01 | Hub demo/live **12** biểu · **MISSING** card Biểu 16 | NEW card «Nút giao» · `?resource=interchanges` · formNo **16** | hub Kind G |
| GAP-BIEU16-TYPED-01 | Không resource / form generic nếu bootstrap | Typed **39 cột** · Slideout 2col · header + branches + ATGT | form + list cols |
| GAP-BIEU16-ROUTE-01 | Chưa alias | Alias mfeStd `/csdl-bieu-16` · giữ hub entry | shell / Design |
| GAP-BIEU16-BRANCH-01 | — | Child `branches[]` 1–n (tách/nhập) · **GAP-CSDL-CUC-09** | form child grid |
| GAP-BIEU16-TYPE-01 | — | `interchangeType` LOOKUP · `trafficOrg` | filter + form |
| GAP-BIEU16-MAIN-01 | — | B nền/mặt/KC + số làn tuyến chính | form + list |
| GAP-BIEU16-ATGT-01 | — | ATGT biển/vạch/đảo/đèn (qty hoặc mô tả) | form |
| GAP-BIEU16-KM-01 | — | `kmMain` + `kmAux` (điểm nút · ≠ Line kmFrom–kmTo mặc định) | filter + form |
| GAP-BIEU16-DB-01 | DB SSOT doc chỉ Biểu 1–12 | Schema_CsdlBieu16 / `Interchange` + `InterchangeBranch` + registry | SA / migration |
| GAP-BIEU16-DMAP-01 | DOMAIN-MAP thiếu `csdl-bieu-16` | Thêm slug → Asset (cùng `csdl-so-sach`) | SA / Dev |
| GAP-CSDL-CUC-05 | Biểu 13–16 chưa có resource | Đóng gap Biểu 16 khi hub+API PASS | hub + API |
| GAP-CSDL-CUC-09 | Nhánh tách/nhập 1–n | Child grid bắt buộc · **cấm** 1 row flatten-only | form |
| GAP-CSDL-ROAD-01 | — | `SearchInput` `road-route` + `roadCode` | filter + form |
| GAP-CSDL-PROV-01 | LOOKUP_STATIC 5 tỉnh (hub peers) | giữ P1 **hoặc** master province — PO chốt | filter + form |
| GAP-CSDL-ORG-01 | `manageUnit` Text | SearchInput tree `org-unit` · DEFER P2 OK | form |
| GAP-CSDL-CUC-03 | Form generic không đủ cột | Đóng gap Biểu 16 khi typed PASS | form |
| GAP-CSDL-XLS-01 | Import/export stub | Sheet Biểu 16 đúng 39 cột / merge — OUT pack Dev/XLS | toolbar |
| GAP-CSDL-CUC-11 | Peer so-ts-interchange tồn tại | **≠** Sổ TS · LOOKUP `road-route` chung · ROW riêng · **cấm** merge dumpSpecs / form so-ts | nav |

**Không** đổi: API prefix `api/v1/asset/csdl-records` · resource key `interchanges` (CTX) · Kind B list A–D · Kind D Slideout · `LinPageLayout kind="catalog"` · **cấm ERP.*** · IdCode **cấm** Guid · prefix đề xuất **`IX`** (**Q-PREFIX**).

## Kind / zones (handoff Design)

| Zone / surface | Pattern | DoD |
|----------------|---------|-----|
| Entry | Hub card **mới** **hoặc** `/csdl-bieu-16` | Title VN · back hub · **cấm** slug trên card |
| List A | Header | «Biểu 16 — Nút giao» · back hub |
| List B | Toolbar + filter | SearchTextInput · province · interchangeType · status · road SearchInput · kmMain · Tạo mới · Refresh · Delete · History · SchemaConfig · Import/Export stub · **search must work** · **cấm** nút Tìm riêng |
| List C | `LinCatalogDataGrid` | Cột typed (không chỉ 3 detail) · STT · row menu Xem/Sửa/Copy/Xóa/Lịch sử · kéo cột ON |
| List D | Footer | `LinCatalogListPagination` 50/100/200/500 |
| Form | Kind **D** Slideout Z1–Z3 · 2col | C/E/V/Copy · View=`readOnly` · LeaveConfirmModal dirty · footer Lưu/Hủy · section header + child nhánh + ATGT |
| Map | none | deep-link gis only · **cấm** invent map canvas |

**Skip chrome:** GOVOne logo/bell/user · demo skin.

## Control hint — list filters (Zone B)

| Field key | Label | controlHint | catalogKind | Notes |
|-----------|-------|-------------|-------------|-------|
| search | Tìm kiếm | `SearchTextInput` | text | mã · tên nút · đường · ghi chú |
| province | Tỉnh/TP | `Dropdown` | LOOKUP_STATIC | **GAP-CSDL-PROV-01** |
| interchangeType | Loại nút | `Dropdown` | LOOKUP_STATIC | **GAP-BIEU16-TYPE-01** · **Q-TYPE-SET** |
| status | Tình trạng | `Dropdown` | LOOKUP_STATIC | |
| roadCode | Đường | `SearchInput` | **road-route** | **GAP-CSDL-ROAD-01** |
| kmMain | Km chính | `Number` | — | điểm nút · **GAP-BIEU16-KM-01** |

## Control hint — form fields (Slideout · header)

| # | Field key | Label | controlHint | required | Notes |
|---|-----------|-------|-------------|----------|-------|
| — | code | Mã | `Text` readonly | auto | IdCode prefix `IX` · **cấm** Guid · **Q-PREFIX** |
| 1 | name | Tên nút giao | `Text` | * | |
| 2–3 | roadCode / roadName | Mã/Tên đường | `SearchInput` | * | catalogKind `road-route` |
| 4 | province | Địa danh | `Dropdown` | * | LOOKUP_STATIC P1 |
| 5 | kmMain | Km chính | `Number` | * | decimal · điểm |
| 6 | kmAux | Km phụ | `Number` | | decimal · optional |
| 7 | side | Vị trí L/R/C | `Dropdown` | | LOOKUP_STATIC · trail |
| 8 | interchangeType | Loại nút | `Dropdown` | * | **Q-TYPE-SET** |
| 9 | trafficOrg | Tổ chức GT | `Dropdown` / Text | | **Q-TRAFFIC-ORG** |
| 10 | mainBedWidth | B nền tuyến chính (m) | `Number` | | ≥0 · **GAP-BIEU16-MAIN-01** |
| 11 | mainSurfaceWidth | B mặt tuyến chính (m) | `Number` | | ≥0 |
| 12 | mainMedianWidth | KC / dải PC (m) | `Number` | | ≥0 |
| 13 | mainLaneCount | Số làn tuyến chính | `Number` | | integer ≥0 |
| 14–17 | atgtSign / atgtMarking / atgtIsland / atgtLight | ATGT biển/vạch/đảo/đèn | `Number` hoặc Text | | qty hoặc mô tả · **GAP-BIEU16-ATGT-01** · **Q-ATGT** |
| 18 | status | Tình trạng (TT) | `Dropdown` | * | LOOKUP_STATIC |
| 19 | yearBuilt | Năm | `Number` | | year · 1900–2100 |
| 20 | manageUnit | ĐV QL | `Text` → SearchInput | | **GAP-CSDL-ORG-01** · **Q-MANAGE** |
| 21 | notes | Ghi chú | `Textarea` | | |
| 22–23 | lat / lng | GPS | `Number` | | optional |
| — | branchCount | Số nhánh | derived | | count `branches[]` · readonly |
| — | formNo | Số biểu | const `16` | | |

### Child grid — `branches[]` (**GAP-CSDL-CUC-09** · **GAP-BIEU16-BRANCH-01**)

| Field key | Label | controlHint | required | Notes |
|-----------|-------|-------------|----------|-------|
| branchName | Tên nhánh | `Text` | * | tách / nhập |
| branchKmFrom / branchKmTo | Lý trình từ–đến | `Number` | * | |
| branchSide | Vị trí | `Dropdown` | | L/R/C |
| branchDirection | Hướng | `Dropdown` / Text | | |
| branchLength | Chiều dài (m) | `Number` | | ≥0 |
| branchBedWidth | B nền (m) | `Number` | | |
| branchSurfaceWidth | B mặt (m) | `Number` | | |
| branchMedianWidth | KC (m) | `Number` | | |
| branchRadius | Bán kính R (m) | `Number` | | |

Excel flatten cols `branch*` = **một dòng nhánh**; runtime **cấm** chỉ 1 nhánh cố định — UI = editable grid add/remove.

### Form sections

| Section | Fields | Notes |
|---------|--------|-------|
| Vị trí / định danh | code · name · roadCode · roadName · province · kmMain · kmAux · side | shared đầu form |
| Đặc trưng nút | interchangeType · trafficOrg · mainBedWidth · mainSurfaceWidth · mainMedianWidth · mainLaneCount | tuyến chính |
| Nhánh (child) | `branches[]` grid | **1–n** bắt buộc UX · **GAP-CSDL-CUC-09** |
| ATGT | atgtSign · atgtMarking · atgtIsland · atgtLight | section riêng |
| Quản lý | status · yearBuilt · manageUnit · notes · lat · lng | trail |

## Control hint — actions

| Action | Surface | Notes |
|--------|---------|-------|
| back-hub | List A | về `/so-ts/csdl-so-sach` |
| create / view / edit / copy / delete | Toolbar + row | soft-delete API |
| save / cancel | Form footer | LeaveConfirmModal dirty |
| branch add/remove | Child grid | min 0 P1 · **Q-BRANCH-MIN** · validate khi lưu |
| import / export | Toolbar | stub · XLS Biểu 16 OUT pack · merge-header |
| history | Toolbar / row | stub modal OK P2 |
| schema-config | Toolbar | UiSchema typed `interchanges` |

## Open questions (PO trước Design)

| ID | Q | Options |
|----|---|---------|
| Q-ROUTE | Alias `/csdl-bieu-16` Navigate ngay hay DEFER hub-only? | alias_now · hub_only |
| Q-PROV | Province static vs master? | keep_static · master_province |
| Q-TYPE-SET | Bộ `interchangeType` từ Excel (đồng mức / khác mức / liên thông / …)? | cite_excel · expand |
| Q-TRAFFIC-ORG | `trafficOrg` LOOKUP cố định hay free Text? | lookup · free_text |
| Q-ATGT | ATGT = Number qty hay Text mô tả / child table riêng? | qty · text · child_p2 |
| Q-BRANCH-MIN | Bắt buộc ≥1 nhánh khi Lưu? | min_1 · allow_0 |
| Q-KM | `kmMain`/`kmAux` đủ hay thêm kmFrom–kmTo Line? | point_main · add_range |
| Q-MANAGE | `manageUnit` trong 39 cột Excel hay trail P2? | in_39 · trail_p2 |
| Q-PREFIX | IdCode prefix `IX` vs `NG` (peer Sổ TS) vs Cục riêng? | IX · NG · other |
| Q-LIST-COLS | Grid mặc định: shared + name/type/kmMain/status? | subset · schema_only |
| Q-TITLE | Title hub «Nút giao» vs «Nút giao đường bộ»? | nut_giao · full |
| Q-DMAP | Thêm `csdl-bieu-16` vào DOMAIN-MAP khi Dev? | add_now · hub_only_map |
| Q-PEER-LINK | Deep-link Sổ TS `?type=INTERCHANGE`? | none_p1 · optional_link |
| Q-CHILD-API | Child nhánh embed JSON payload hay bảng riêng + nested API? | embed · nested_sa |

## Handoff

| Role | Dùng packet |
|------|-------------|
| **PO** | § Delta + open Q → `requirement.md` |
| **Design** | control-map khớp bảng · prototype list+slideout · **child grid nhánh** · ATGT · reviewUrl |
| **SA** | path `api/v1/asset/csdl-records` · typed DTO/UiSchema · Schema_CsdlBieu16 + Branch · register `interchanges` · **cấm** `infra` · DOMAIN-MAP slug · **cấm** merge road-assets / so-ts-interchange |
| **TL/Dev** | Wire controlHint · hub card mới · **cấm** đoán Text vs SearchInput · **cấm** 3 ô detail* · **cấm** flatten-only 1 nhánh · **cấm** merge so-ts-* |

## Version meta (REQUIRED)

| Field | Value |
|-------|-------|
| skillId | agent-data-analy |
| skillVersion | 2026.08.25.01 |
| schemaVersion | 1 |
| workflowVersion | 2026.09.01.02 |
| rulesVersion | 2026.08.31.2 |
| contentHash | `sha256:56e2fb16e9bcde21f17d7e9639b72660666778f5393b1270cecc49d123beba4b` |
| headerFingerprint | `sha256:ec787bf2008ae89f1b6c085fe238f1b0d50b048f5c672b90b68d9ea102cf8fcc` |
| generatedAt | 2026-09-05T16:01:30.000Z |
| versionGate | ok |
| taskId | task_70fe1d76 |
| packKind | list |
| changeScope | new_page |

---
<!-- Version meta: skillId=agent-data-analy skillVersion=2026.08.25.01 schemaVersion=1 workflowVersion=2026.09.01.02 rulesVersion=2026.08.31.2 versionGate=ok contentHash=sha256:56e2fb16e9bcde21f17d7e9639b72660666778f5393b1270cecc49d123beba4b -->
