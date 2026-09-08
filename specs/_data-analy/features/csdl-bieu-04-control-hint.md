# Data-analy — controlHint — csdl-bieu-04 (Kind B list + Kind D Slideout · Biểu 04)

| Field | Value |
|-------|-------|
| feature | `csdl-bieu-04` |
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
| contentHash | `sha256:7498ad6644d0e599bc40afb7589db5335c18adb4b92f1573de3c1fae2e17d3d6` |
| headerFingerprint | `sha256:155df2db0952d6e139fbedac748878ecd5c607d506fdf5fccc172f5b0f937024` |
| analyzedAt | `2026-09-05T05:52:43.665Z` |
| cluster | `csdl-cuc-2026` · Excel sheet Biểu 4 · **17 cột** |
| taskId | `task_ea0d8d57` |
| autoApprove | `ON` (queue) |
| realData | `specs/_data-analy/features/csdl-bieu-04-real-data.md` |
| beRepo | `D:/AI-QLBD/Linm.RMMS.WebService` · domain **Asset** · `api/v1/asset/csdl-records?resource=culverts` · **cấm ERP.*** · **cấm** invent `api/v1/infra/*` |
| uiRepo | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Asset` |
| mfeStdUrl | `http://localhost:9301/csdl-bieu-04` · hub deep-link `/so-ts/csdl-so-sach?resource=culverts` |
| resource | `culverts` |
| formNo | `04` · title VN **Cống các loại** |
| peerSoTs | `so-ts-culvert-x` (CULVERT_X) — deep-link OK · **cấm** merge 1 form hai chuẩn |
| runMode | `new_page` · typed form thay generic 3 ô `detail*` |

> Data-analy **đề xuất** controlHint. Design **chốt** control-map. SA **chốt** GPS shape + migration.  
> Typography: label **13** · input D14 / M16 (**GAP-TYP-01**).  
> `sourceKind=synthetic` — demo = zone/field **tham chiếu** · **cấm** demo-json / localStorage SSOT.  
> **Cấm** chỉ 3 ô `detailPrimary`/`detailSpec`/`detailExtra` — form = đủ cột Excel (cite analy).

## Sources

| Source | Path | sha256 / note |
|--------|------|---------------|
| Context | `docs/context/features/csdl-bieu-04.md` | `445583dc5f994fd8ace7a01289b20c73abcf8bfdb2ecef5e42ebd88d0c2335f3` |
| Parent hub | `docs/context/features/csdl-so-sach.md` | cite hub Kind G · resource `culverts` |
| Cluster analy | `specs/_data-analy/csdl-cuc-2026/ANALYSIS-AND-TASKS.md` | Biểu 4 · 17 cột · peer `so-ts-culvert-x` |
| Demo entry | `Linm.RMMS.Demo/src/demo/features/csdl-so-sach-demo.html` | `c2c9f8194cb104b3202bcaa46a589c9baba5cf8062aa12e7d0872a9e96eba7ae` |
| Demo page | `Linm.RMMS.Demo/src/demo/asset/csdl-so-sach.html` | hub+list+slideout chrome tham chiếu |
| DOMAIN-MAP | `Linm.RMMS.WebService/docs/DOMAIN-MAP.md` | `csdl-so-sach` → Asset · `asset` |
| Live API | `CsdlCatalogRecordsController` | `api/v1/asset/csdl-records` (polymorphic shell) |
| Live MFE | `CsdlSoSachPage` · `CsdlFormSlideout` | generic 3-field — **GAP-BIEU04-TYPED-01** |
| Excel | `data-import/Sổ sách, biểu mẫu trình LĐ Cục/1. Biểu mẫu CSDL.xls` sheet Biểu 4 | real source · import OUT Dev/XLS task |
| Peer CTX | `docs/context/features/so-ts-culvert-x.md` | Sổ TS deep-link only |

Normalized header:

`code|roadCode|roadName|province|kmPoint|gpsCulvertX|gpsCulvertY|gpsRoadX|gpsRoadY|apertureM|shape|bodyMaterial|inletUpstream|outletDownstream|lengthM|loadClass|builtYear|status|side|manageUnit|notes`

## § Delta Current vs New (`new_page` · `task_ea0d8d57`)

| ID | Current | New (this analy) | Surface |
|----|---------|------------------|---------|
| GAP-BIEU04-TYPED-01 | Hub list `culverts` + form 3 ô `detail*` | Typed **17 cột** Excel Biểu 4 · Slideout 2col | form + list cols |
| GAP-BIEU04-ROUTE-01 | Chỉ deep-link hub `?resource=culverts` | Alias mfeStd `/csdl-bieu-04` · giữ hub entry | shell / Design |
| GAP-BIEU04-GPS-01 | — | GPS tim cống × tim đường = 4 số X/Y **hoặc** 2 latlng — **SA chốt** | form / BE |
| GAP-BIEU04-SHAPE-01 | — | Hình hộp/tròn LOOKUP · thân + đầu T.Lưu/H.Lưu | form |
| GAP-CSDL-ROAD-01 | `roadName` Text free (hub) | `SearchInput` `road-route` + `roadCode` | filter + form |
| GAP-CSDL-PROV-01 | LOOKUP_STATIC 5 tỉnh | giữ P1 **hoặc** master province — PO chốt | filter + form |
| GAP-CSDL-ORG-01 | `manageUnit` Text | SearchInput tree `org-unit` · DEFER P2 OK | form |
| GAP-CSDL-CUC-03 | Form generic không đủ cột | Đóng gap cho Biểu 4 khi typed PASS | form |
| GAP-CSDL-XLS-01 | Import/export stub | Sheet Biểu 4 đúng 17 cột — OUT pack Dev/XLS | toolbar |
| GAP-BIEU04-PEER-01 | Peer Sổ TS `so-ts-culvert-x` | Deep-link OK · **cấm** 1 form hai chuẩn · **GAP-CSDL-CUC-11** | nav |

**Không** đổi: API prefix `api/v1/asset/csdl-records` · resource key `culverts` · Kind B list A–D · Kind D Slideout · `LinPageLayout kind="catalog"` · **cấm ERP.*** · IdCode **cấm** Guid.

## Kind / zones (handoff Design)

| Zone / surface | Pattern | DoD |
|----------------|---------|-----|
| Entry | Hub card **hoặc** `/csdl-bieu-04` | Title VN · back hub · **cấm** slug trên card |
| List A | Header | «Biểu 04 — Cống các loại» · back hub |
| List B | Toolbar + filter | SearchTextInput · province · status · road SearchInput · kmPoint · Tạo mới · Refresh · Delete · History · SchemaConfig · Import/Export stub · **search must work** · **cấm** nút Tìm riêng |
| List C | `LinCatalogDataGrid` | Cột typed (không chỉ 3 detail) · STT · row menu Xem/Sửa/Copy/Xóa/Lịch sử · kéo cột ON |
| List D | Footer | `LinCatalogListPagination` 50/100/200/500 |
| Form | Kind **D** Slideout Z1–Z3 · 2col | C/E/V/Copy · View=`readOnly` · LeaveConfirmModal dirty · footer Lưu/Hủy |
| Map | none | deep-link gis only · **cấm** invent map canvas |

**Skip chrome:** GOVOne logo/bell/user · demo skin.

## Control hint — list filters (Zone B)

| Field key | Label | controlHint | catalogKind | Notes |
|-----------|-------|-------------|-------------|-------|
| search | Tìm kiếm | `SearchTextInput` | text | mã · đường · ghi chú |
| province | Tỉnh/TP | `Dropdown` | LOOKUP_STATIC | **GAP-CSDL-PROV-01** |
| status | Tình trạng | `Dropdown` | LOOKUP_STATIC | tot/tb/kem/hong |
| roadCode | Đường | `SearchInput` | **road-route** | **GAP-CSDL-ROAD-01** |
| kmPoint | Km điểm | `Number` | — | filter QS |

## Control hint — form fields (Slideout · Excel Biểu 4 · 17 cột)

| # | Field key | Label | controlHint | required | Notes |
|---|-----------|-------|-------------|----------|-------|
| — | code | Mã | `Text` readonly | auto | IdCode prefix `CG` · **cấm** Guid |
| 1–2 | roadCode / roadName | Mã/Tên đường | `SearchInput` | * | catalogKind `road-route` |
| 3 | province | Địa danh | `Dropdown` | * | LOOKUP_STATIC P1 |
| 4 | kmPoint | Km điểm | `Number` | * | decimal · điểm đặt cống |
| 5–6 | gpsCulvertX / gpsCulvertY | GPS tim cống X/Y | `Number` | | **GAP-BIEU04-GPS-01** |
| 7–8 | gpsRoadX / gpsRoadY | GPS tim đường X/Y | `Number` | | **GAP-BIEU04-GPS-01** |
| 9 | apertureM | Khẩu độ (m) | `Number` | * | |
| 10 | shape | Hình dạng | `Dropdown` | * | hộp / tròn · **GAP-BIEU04-SHAPE-01** |
| 11 | bodyMaterial | Thân cống | `Dropdown` hoặc `Text` | | vật liệu thân |
| 12 | inletUpstream | Đầu thượng lưu | `Text` hoặc `Dropdown` | | đầu T.Lưu |
| 13 | outletDownstream | Đầu hạ lưu | `Text` hoặc `Dropdown` | | đầu H.Lưu |
| 14 | lengthM | Chiều dài (m) | `Number` | * | |
| 15 | loadClass | Tải trọng TK | `Text` hoặc `Dropdown` | | HL / class · **Q-LOAD** |
| 16 | builtYear | Năm XD/SD | `Number` | | year |
| 17 | status | Tình trạng | `Dropdown` | * | LOOKUP_STATIC |
| — | side | Vị trí L/R | `Dropdown` | | L/R/C/Both · common CTX |
| — | manageUnit | ĐV QL | `Text` → SearchInput | | **GAP-CSDL-ORG-01** |
| — | notes | Ghi chú | `Textarea` | | |

## Control hint — actions

| Action | Surface | Notes |
|--------|---------|-------|
| back-hub | List A | về `/so-ts/csdl-so-sach` |
| create / view / edit / copy / delete | Toolbar + row | soft-delete API |
| save / cancel | Form footer | LeaveConfirmModal dirty |
| import / export | Toolbar | stub · XLS Biểu 4 OUT pack |
| history | Toolbar / row | stub modal OK P2 |
| schema-config | Toolbar | UiSchema typed `culverts` |
| peer-sots | Toolbar / row (opt) | deep-link `/so-ts-culvert-x` · **cấm** merge form |

## Open questions (PO trước Design)

| ID | Q | Options |
|----|---|---------|
| Q-GPS | 4 số X/Y tim cống×tim đường vs 2 cặp lat/lng? | four_xy · two_latlng (**SA**) |
| Q-ROUTE | Alias `/csdl-bieu-04` Navigate ngay hay DEFER hub-only? | alias_now · hub_only |
| Q-PROV | Province static vs master? | keep_static · master_province |
| Q-LOAD | `loadClass` free-text vs LOOKUP? | free_text · lookup_static |

## Handoff

| Role | Dùng packet |
|------|-------------|
| **PO** | § Delta + open Q → `requirement.md` |
| **Design** | control-map khớp bảng · prototype list+slideout 17 cột · reviewUrl |
| **SA** | path `api/v1/asset/csdl-records` · typed DTO/UiSchema · Schema_CsdlBieu4 · GPS |
| **TL/Dev** | Wire controlHint · **cấm** đoán Text vs SearchInput |

## Version meta (REQUIRED)

| Field | Value |
|-------|-------|
| skillId | agent-data-analy |
| skillVersion | 2026.08.25.01 |
| schemaVersion | 1 |
| workflowVersion | 2026.09.01.02 |
| rulesVersion | 2026.08.31.2 |
| contentHash | `sha256:7498ad6644d0e599bc40afb7589db5335c18adb4b92f1573de3c1fae2e17d3d6` |
| headerFingerprint | `sha256:155df2db0952d6e139fbedac748878ecd5c607d506fdf5fccc172f5b0f937024` |
| generatedAt | 2026-09-05T05:52:43.665Z |
| versionGate | ok |
| taskId | task_ea0d8d57 |
| packKind | list |
| changeScope | new_page |

---
<!-- Version meta: skillId=agent-data-analy skillVersion=2026.08.25.01 schemaVersion=1 workflowVersion=2026.09.01.02 rulesVersion=2026.08.31.2 versionGate=ok contentHash=sha256:7498ad6644d0e599bc40afb7589db5335c18adb4b92f1573de3c1fae2e17d3d6 -->
