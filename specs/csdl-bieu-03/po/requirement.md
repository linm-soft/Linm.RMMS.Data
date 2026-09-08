# PO — Requirement — csdl-bieu-03 (Biểu 03 — Hầm đường bộ)

| Field | Value |
|-------|-------|
| feature | `csdl-bieu-03` |
| title | CSDL Biểu 03 — Hầm đường bộ |
| this role | `po` · `/agent-po` |
| changeScope | **`new_page`** (STATUS + packet · typed Biểu 3 trên resource `road-tunnels`) |
| packKind | **`list`** (**PO confirm** · data-analy đề xuất · Kind B list A–D + Kind D Slideout) |
| Feature Kind | **B** catalog A–D+F · **D** Slideout Z1–Z3 · **2col** · sections · **cấm** Full-page form |
| resource | `road-tunnels` |
| formNo | `03` · title VN **Hầm đường bộ** |
| columns | **42** (Excel Biểu 3) |
| IdCode | prefix **`TN`** · `TN-yyyyMMdd-nnnn` · **cấm** Guid |
| peerSoTs | none trên map Cục (—) · deep-link Sổ 6 `bridge-inspections` (QL cầu/hầm) OK · **cấm** merge 1 form (**GAP-BIEU03-PEER-01**) |
| gap | GAP-BIEU03-TYPED-01 · GAP-BIEU03-ROUTE-01 · GAP-BIEU03-GPS-01 · GAP-BIEU03-TUBE-01 · GAP-BIEU03-STRUCT-01 · GAP-BIEU03-DRAIN-01 · GAP-BIEU03-FIRE-01 · GAP-BIEU03-VENT-01 · GAP-BIEU03-PEER-01 · GAP-BIEU03-DMAP-01 · GAP-BIEU03-MAP-01 · GAP-CSDL-ROAD-01 · GAP-CSDL-PROV-01 · GAP-CSDL-ORG-01 · GAP-CSDL-XLS-01 · GAP-CSDL-CUC-03 · GAP-TYP-01 |
| mode | `feature_context` · CTX + cluster analy + hub demo zone ref · sourceKind=`synthetic` · **cấm** demo-json/LS SSOT |
| status | `confirmed` (autoApprove=ON · task `task_69bca3c6`) |
| requestSource | queue CHAIN `/agent-qldb-workflow` · roleOnly=`po` · `/agent-po` · prior data_analy **confirmed** |
| autoApprove | **ON** — Design/SA/Review khi tới lượt → agent tự confirm · enqueue role kế. Role PO **không** gate confirm. |
| e2eQa | **ON** — queued tới `/agent-qa*` · **cấm** e2e / `yarn start:std` / `yarn build` ở role PO |
| prior · data_analy | status=`done`/`confirmed` · `specs/_data-analy/features/csdl-bieu-03-control-hint.md` · `csdl-bieu-03-real-data.md` · compact `handoff/data_analy-compact.md` · contentHash `sha256:2c03537918bbda56c29e1e1ef98cc081cc4e72c94447a1ac2f87f06bd6f9310e` · headerFingerprint `sha256:60f7ea4153b5853222bdeaf2679929a6e4c5b66b6973bcfe12e5bd9dd3fcfbcc` · analy `task_df175ffd` · **cấm** re-scan demo (**GAP-PO-DEMO-RESCAN-01**) |
| productRoot | `D:/AI-QLBD/Linm.RMMS.Data` |
| mfe | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Asset` |
| mfeStdRoute | **`/csdl-bieu-03`** (alias Navigate **now**) · hub `/so-ts/csdl-so-sach?resource=road-tunnels` |
| mfeStdUrl | `http://localhost:9301/csdl-bieu-03` |
| hubDeepLink | `http://localhost:9301/so-ts/csdl-so-sach?resource=road-tunnels` |
| backend | `D:/AI-QLBD/Linm.RMMS.WebService` · domain **Asset** · live `api/v1/asset/csdl-records?resource=road-tunnels` · BFF `web-bff/api/v1/asset/csdl-records` · **cấm ERP.*** · **cấm** invent `api/v1/infra/*` · **cấm** `api/v1/so-ts/*` invent · **cấm** `api/v1/rmms/*` |
| domain | **Asset** |
| be_repo_confirm | `approve` (`Linm.RMMS.WebService`) |
| ui_repo_confirm | `approve` (`Linm.Web.RMMS.Asset`) |
| controlHint | `D:/AI-QLBD/Linm.RMMS.Data/specs/_data-analy/features/csdl-bieu-03-control-hint.md` |
| realData | `D:/AI-QLBD/Linm.RMMS.Data/specs/_data-analy/features/csdl-bieu-03-real-data.md` |
| contentHash | `sha256:2c03537918bbda56c29e1e1ef98cc081cc4e72c94447a1ac2f87f06bd6f9310e` |
| headerFingerprint | `sha256:60f7ea4153b5853222bdeaf2679929a6e4c5b66b6973bcfe12e5bd9dd3fcfbcc` |
| analyReuse | **hash skip** — **cấm** re-scan demo / crawl CTX / DemoRoot (**GAP-PO-DEMO-RESCAN-01**) |
| parent | hub `csdl-so-sach` · cluster `csdl-cuc-2026` · Excel sheet Biểu 3 |
| taskId | `task_69bca3c6` · analy `task_df175ffd` |
| updatedAt | `2026-09-05T08:40:30.000Z` |
| versionGate | `ok` (skill/schema/workflow khớp analy · pack `po/list@session`) |

**packKind confirm:** `list` (data-analy đề xuất · PO chốt). Kind **B** list A–D+F + Kind **D** Slideout 2col sectioned trên MFE Asset host `:9301` — **không** report pack · **không** Kind F map canvas · **không** Excel import wizard trong pack này (OUT **GAP-CSDL-XLS-01**).

**≠** Sổ 6 QL cầu/hầm (peer deep-link) · ≠ hub generic 3 ô `detail*` — đây là **typed Biểu 03** 42 cột · **2 ống = 2 bản ghi GPS**.

**Cấm:** implement · re-scan DEM · form chỉ 3 ô `detail*` · merge form Sổ 6 · invent map · invent API · ERP.* · demo-json / localStorage SSOT · Guid IdCode · 1 row 2 bộ GPS · yarn build/e2e/start:std ở role PO · start role khác (**GAP-PKT-ROLE-01**).

## 1. Goal

Chốt requirement **new_page** cho **Biểu 03 — Hầm đường bộ** (`resource=road-tunnels`): list + Slideout typed **42 cột** Excel Biểu 3 · GPS 3 điểm · **2 ống = 2 bản ghi** · kết cấu / thoát+PCCC / thiết bị · thay generic hub form · giữ API prefix `csdl-records` · alias route `/csdl-bieu-03` + hub entry.

Persona: Khu QLĐB · Văn phòng Cục · Ban QLDA (web).

**Delta pack này (SSOT lock từ analy):**

1. Form/list typed 42 cột — **cấm** chỉ `detailPrimary`/`detailSpec`/`detailExtra` (**GAP-BIEU03-TYPED-01** / **GAP-CSDL-CUC-03**).
2. Alias mfeStd `/csdl-bieu-03` Navigate P1 · giữ hub deep-link (**Q-ROUTE** / **GAP-BIEU03-ROUTE-01**).
3. GPS 3 điểm = 6 Number lat/lng (**Q-GPS** six_numbers / **GAP-BIEU03-GPS-01**).
4. `tubeCount` + `tubeIndex` · **2 ống = 2 row** mỗi ống GPS riêng (**Q-TUBE** two_rows / **GAP-BIEU03-TUBE-01**).
5. Kết cấu: loại xuyên · cấp ĐB/MN · vỏ · tĩnh không · khổ · B xe · mặt đường (**GAP-BIEU03-STRUCT-01**).
6. Thoát nước dài+KC · lề trong hầm (**GAP-BIEU03-DRAIN-01**).
7. PCCC / quạt / đèn / CCTV/VMS (**GAP-BIEU03-FIRE-01**).
8. `ventilationType` / `designLoad` = Text P1 (**Q-VENT** text / **GAP-BIEU03-VENT-01**) — SA refine enum/unit.
9. Form sections 4 khối (**Q-SECTION** sectioned).
10. `roadCode`/`roadName` = SearchInput `road-route` (**GAP-CSDL-ROAD-01**).
11. Province LOOKUP_STATIC P1 (**Q-PROV** keep_static).
12. LeaveConfirmModal dirty · toast 4xx/5xx — **cấm** native alert/confirm.
13. Peer Sổ 6 deep-link only — **cấm** merge form (**GAP-BIEU03-PEER-01**).
14. DOMAIN-MAP thêm slug `csdl-bieu-03` (**GAP-BIEU03-DMAP-01** — SA).

## 2. Current → New (`new_page` · REQUIRED)

Nguồn SSOT: control-hint + real-data §A+§B · `analyzedAt=2026-09-05T08:40:00.000Z` · contentHash khớp STATUS · **không** crawl demo/CTX lại.

| Layer | Current (live inventory analy) | New (this pack · copy analy) |
|-------|--------------------------------|------------------------------|
| Entry | Hub-only `?resource=road-tunnels` | Alias **`/csdl-bieu-03`** + hub entry — **GAP-BIEU03-ROUTE-01** |
| List Kind B | Generic road/km/detail cols | Typed cols tunnelName · lengthM · tubeCount · GPS summary |
| Form Kind D | 3 ô `detail*` polymorphic | Typed **42 cột** Slideout 2col Z1–Z3 sectioned — **GAP-BIEU03-TYPED-01** |
| GPS | — | 6 Number lat/lng ×3 điểm — **Q-GPS** |
| Tube | `detailExtra` = số ống free | `tubeCount` + `tubeIndex` · **2 ống = 2 bản ghi** — **Q-TUBE** |
| Kết cấu | — | crossing · class · lining · clearance · section · carriage · pavement — **STRUCT** |
| Thoát / PCCC | — | drain · shoulder · fire · fan · light · CCTV/VMS — **DRAIN/FIRE** |
| Vent / tải | — | Text P1 — **Q-VENT** |
| road | Text free (hub) | SearchInput `road-route` — **GAP-CSDL-ROAD-01** |
| province | LOOKUP_STATIC 5 tỉnh | **keep_static** P1 — **Q-PROV** |
| manageUnit | Text | Text P1 · SearchInput org-unit **DEFER P2** — **GAP-CSDL-ORG-01** |
| Import | stub | Sheet 42 cột · **OUT** |
| API | `…/csdl-records?resource=road-tunnels` | **Giữ prefix** · widen typed DTO/UiSchema — SA |
| Peer | Sổ 6 QL cầu/hầm | Deep-link · **cấm** merge |
| DOMAIN-MAP | thiếu slug | Thêm `csdl-bieu-03` → Asset — **GAP-BIEU03-DMAP-01** |

**Không đổi:** Kind B A–D · Kind D Slideout · `LinPageLayout kind="catalog"` · `LinCatalogListPagination` 50/100/200/500 · prefix `api/v1/asset/csdl-records` · resource key `road-tunnels` · IdCode **cấm** Guid · **cấm ERP.*** · map = none.

### GAP IDs (PO bắt buộc Design/Dev đóng P1 trừ DEFER/OUT)

| ID | New | P1 |
|----|-----|----|
| GAP-BIEU03-TYPED-01 | Typed 42 cột thay generic detail* | **YES** |
| GAP-BIEU03-ROUTE-01 | Alias `/csdl-bieu-03` Navigate | **YES** (`alias_now`) |
| GAP-BIEU03-GPS-01 | GPS 3 điểm lat/lng×3 | **YES** (`six_numbers`) |
| GAP-BIEU03-TUBE-01 | 2 ống = 2 bản ghi GPS (+ tubeIndex) | **YES** (`two_rows`) |
| GAP-BIEU03-STRUCT-01 | Loại xuyên · cấp · vỏ · tĩnh không · khổ · mặt đường | **YES** |
| GAP-BIEU03-DRAIN-01 | Thoát nước dài+KC · lề trong hầm | **YES** |
| GAP-BIEU03-FIRE-01 | PCCC · quạt · đèn · CCTV/VMS | **YES** |
| GAP-BIEU03-VENT-01 | ventilationType / designLoad Text P1 | **YES** product · SA enum/unit |
| GAP-BIEU03-PEER-01 | Deep-link Sổ 6 · không merge | **YES** (nav rule) |
| GAP-BIEU03-DMAP-01 | DOMAIN-MAP thêm slug | **YES** (SA) |
| GAP-BIEU03-MAP-01 | GPS fields only · cấm map canvas | **YES** |
| GAP-CSDL-ROAD-01 | SearchInput `road-route` filter+form | **YES** |
| GAP-CSDL-PROV-01 | Province LOOKUP_STATIC | **YES** (keep_static) · master = P2 |
| GAP-CSDL-CUC-03 | Đóng gap Biểu 3 khi typed PASS | **YES** (via TYPED) |
| GAP-TYP-01 | label 13 · input D14/M16 | **YES** |
| GAP-CSDL-ORG-01 | manageUnit SearchInput org-unit | **DEFER P2** |
| GAP-CSDL-XLS-01 | Import/export sheet Biểu 3 | **OUT pack** |

## 3. DoD (đo được)

1. Entry `/csdl-bieu-03` **và** hub `?resource=road-tunnels` mở cùng list typed — title VN «Biểu 03 — Hầm đường bộ» · back hub · **cấm** slug trên card hub.
2. List BFF `GET …/csdl-records?resource=road-tunnels` — empty grid VN «Chưa có hầm đường bộ» · CTA Tạo mới · **cấm** fake row / demo-json / LS SSOT.
3. Zone A: title VN · back `/so-ts/csdl-so-sach` — **cấm** Thêm mới trên A.
4. Zone B: `LinErpListFilterBar` 1 hàng wrap · input+🔍 cụm phải — SearchTextInput · province · status · road SearchInput · kmFrom/kmTo · tunnelClass optional · tubeCount optional · Tạo mới · Refresh · Delete · History · SchemaConfig · Import/Export stub — filter đổi → page=1 · **search must work** · **cấm** nút Tìm riêng.
5. Zone C: `LinCatalogDataGrid` typed cols (tunnelName · lengthM · tubeCount · GPS summary · không chỉ 3 detail) · STT · row menu Xem/Sửa/Copy/Xóa/Lịch sử · kéo cột ON.
6. Zone D: `LinCatalogListPagination` **50 / 100 / 200 / 500**.
7. Zone F: `LinCatalogUiSchemaEditorModal` catalogKind **`road-tunnels`** (typed) — **cấm** `LinListTableConfigModal`.
8. Slideout Kind D Z1–Z3 2col **sectioned** (định danh · GPS · Kết cấu · Thoát+PCCC · Thiết bị): Create/Edit/View/Copy — đủ cột Excel Biểu 3 · **cấm** form chỉ 3 ô `detail*`.
9. Required P1: `tunnelName` · `roadCode`/`roadName` · `province` · `kmFrom`/`kmTo` · GPS 6 số · `crossingType` · `tunnelClass` · `tubeCount` · `tubeIndex` nếu tubeCount>1 · `carriageWidthM` · `lengthM` · `status` · code IdCode `TN-…` readonly.
10. View = `readOnly` — **cấm** Input disabled xám toàn form.
11. GPS = 6 Number · **cấm** invent map canvas (**GAP-BIEU03-MAP-01**).
12. **Tube rule:** tubeCount=2 → **2 bản ghi** (Copy + đổi tubeIndex + GPS riêng) — **cấm** 1 row chứa 2 bộ GPS · validation toast nếu tubeCount>1 thiếu tubeIndex.
13. Leave-confirm dirty · toast 4xx/5xx — **cấm** native alert/confirm.
14. Typography: label **13** · input D14/M16 (**GAP-TYP-01**).
15. Peer Sổ 6 = navigate only · **cấm** merge form.
16. `yarn build` / e2e / `start:std` **chỉ** Dev/QA — PO **cấm**.

## 4. CTX / DEM / DI inventory (hash skip — đọc analy · **không** re-crawl)

| ID | Path | Loại |
|----|------|------|
| CTX-01 | `docs/context/features/csdl-bieu-03.md` | feature |
| CTX-02 | `docs/context/features/csdl-so-sach.md` | parent hub |
| DA-01 | `specs/_data-analy/features/csdl-bieu-03-control-hint.md` | controlHint SSOT · **done** |
| DA-02 | `specs/_data-analy/features/csdl-bieu-03-real-data.md` | real-data §A–§F |
| DA-03 | `specs/_data-analy/csdl-cuc-2026/ANALYSIS-AND-TASKS.md` | cluster Biểu 3 · 42 cột |
| DEM-01 | `Linm.RMMS.Demo/src/demo/features/csdl-so-sach-demo.html` | entry · zone ref only |
| DEM-02 | `Linm.RMMS.Demo/src/demo/asset/csdl-so-sach.html` | page · **không** SSOT data |
| DI-01 | `data-import/…/1. Biểu mẫu CSDL.xls` sheet Biểu 3 | Excel cite · import OUT |
| MFE hub | `CsdlSoSachPage` | Kind B live shell |
| MFE form | `CsdlFormSlideout` | generic → typed replace |
| MFE svc | `services/csdlSoSach/endpoint.ts` | `BASE=/asset/csdl-records` |
| BE | `CsdlCatalogRecordsController` · shell entity · typed `Schema_CsdlBieu3` (**SA**) | live CRUD + widen |
| DOMAIN-MAP | `Linm.RMMS.WebService/docs/DOMAIN-MAP.md` | Asset · thiếu slug `csdl-bieu-03` |

Normalized header (analy):  
`tunnelName|roadCode|roadName|province|kmFrom|kmTo|side|gpsStartLat|gpsStartLng|gpsMidLat|gpsMidLng|gpsEndLat|gpsEndLng|crossingType|tunnelClass|tubeCount|tubeIndex|liningType|clearanceM|sectionHeightM|sectionWidthM|carriageWidthM|pavementInTunnel|drainLengthM|drainSpacingM|shoulderInTunnelM|firePump|fireNicheCount|fanCount|lightCount|hasCctv|hasVms|lengthM|builtYear|status|manageUnit|updatedByName|notes|ventilationType|escapeExitCount|designLoad|ownerUnit`

## 5. controlHint (PO chốt · copy data-analy — Design map UI · SA map API)

### List filters (Zone B)

| Field key | Label | controlHint | catalogKind | Notes |
|-----------|-------|-------------|-------------|-------|
| search | Tìm kiếm | `SearchTextInput` | text | mã · tên hầm · đường · ghi chú |
| province | Tỉnh/TP | `Dropdown` | LOOKUP_STATIC | **Q-PROV** keep_static |
| status | Tình trạng | `Dropdown` | LOOKUP_STATIC | tot/tb/kem/hong |
| roadCode | Đường | `SearchInput` | **road-route** | **GAP-CSDL-ROAD-01** |
| kmFrom | Từ Km | `Number` | — | filter QS |
| kmTo | Đến Km | `Number` | — | filter QS |
| tunnelClass | Cấp hầm | `Dropdown` | LOOKUP_STATIC | optional filter ĐB/MN |
| tubeCount | Số ống | `Number` | — | optional filter |

### Form fields (Slideout Kind D · Excel Biểu 3 · sectioned)

| # | Field key | Label | controlHint | required | Notes |
|---|-----------|-------|-------------|----------|-------|
| — | code | Mã | `Text` readonly | auto | IdCode `TN-…` · **cấm** Guid |
| 1 | tunnelName | Tên hầm | `Text` | * | |
| 2–3 | roadCode / roadName | Mã/Tên đường | `SearchInput` | * | catalogKind `road-route` |
| 4 | province | Địa danh | `Dropdown` | * | LOOKUP_STATIC P1 |
| 5–6 | kmFrom / kmTo | Từ/Đến Km | `Number` | * | decimal · lý trình |
| 7 | side | Vị trí L/R | `Dropdown` | | L/R/C/Both |
| 8–13 | gpsStartLat/Lng · gpsMidLat/Lng · gpsEndLat/Lng | GPS đầu/giữa/cuối | `Number` ×6 | * | **Q-GPS** six_numbers |
| 14 | crossingType | Loại xuyên | `Dropdown` | * | núi / sông / đô thị / khác — **SA** enum |
| 15 | tunnelClass | Cấp hầm ĐB/MN | `Dropdown` | * | ĐB / MN |
| 16 | tubeCount | Số ống | `Number` | * | int ≥1 |
| 17 | tubeIndex | Ống số | `Number` | * nếu tubeCount>1 | **Q-TUBE** two_rows · 1-based |
| 18 | liningType | Vỏ hầm | `Dropdown`/`Text` | | BTCT / đá / thép / khác |
| 19 | clearanceM | Tĩnh không (m) | `Number` | | |
| 20–21 | sectionHeightM / sectionWidthM | Khổ C × R (m) | `Number` | | |
| 22 | carriageWidthM | B xe chạy (m) | `Number` | * | |
| 23 | pavementInTunnel | Mặt đường trong hầm | `Dropdown`/`Text` | | BTXM/BTN/… |
| 24–25 | drainLengthM / drainSpacingM | Thoát nước dài / KC | `Number` | | |
| 26 | shoulderInTunnelM | Lề trong hầm (m) | `Number` | | |
| 27 | firePump | PCCC bơm | `Checkbox`/`Text` | | |
| 28 | fireNicheCount | Hốc PCCC SL | `Number` | | |
| 29 | fanCount | Quạt SL | `Number` | | |
| 30 | lightCount | Đèn SL | `Number` | | |
| 31 | hasCctv | CCTV | `Checkbox` | | |
| 32 | hasVms | VMS | `Checkbox` | | |
| 33 | lengthM | Chiều dài (m) | `Number` | * | |
| 34 | builtYear | Năm XD | `Number` | | year |
| 35 | status | Tình trạng | `Dropdown` | * | LOOKUP_STATIC |
| 36 | manageUnit | ĐV QL | `Text` | | **GAP-CSDL-ORG-01** DEFER P2 |
| 37 | updatedByName | Người cập nhật | `Text` | | audit display |
| 38 | notes | Ghi chú | `Textarea` | | |
| 39 | ventilationType | Loại thông gió | `Text` | | **Q-VENT** text · SA enum later |
| 40 | escapeExitCount | Lối thoát hiểm SL | `Number` | | |
| 41 | designLoad | Tải TK | `Text` | | **Q-VENT** · SA shape |
| 42 | ownerUnit | Chủ quản | `Text` | | optional typed |

**Form sections (Q-SECTION = sectioned):** Z1 định danh+lý trình · Z2 GPS · Z3 Kết cấu · Z3b Thoát+PCCC · Z3c Thiết bị (quạt/đèn/CCTV/VMS/vent/escape/designLoad) · footer audit/notes/ownerUnit.

### Actions

| Action | Surface | Notes |
|--------|---------|-------|
| back-hub | List A | về `/so-ts/csdl-so-sach` |
| create / view / edit / copy / delete | Toolbar + row | soft-delete API |
| save / cancel | Form footer | LeaveConfirmModal dirty |
| import / export | Toolbar | stub · XLS Biểu 3 **OUT** |
| history | Toolbar / row | stub modal OK P2 |
| schema-config | Toolbar | UiSchema typed `road-tunnels` |
| open-so6 | Row optional | deep-link Sổ 6 · **cấm** merge |

### Real-data bind (copy §B analy — SA **giữ** path cite)

| Operation | Path |
|-----------|------|
| List | `GET /web-bff/api/v1/asset/csdl-records?resource=road-tunnels` |
| Detail | `GET /web-bff/api/v1/asset/csdl-records/{id}` |
| Create | `POST /web-bff/api/v1/asset/csdl-records` body `resource=road-tunnels` + typed fields |
| Update | `PUT /web-bff/api/v1/asset/csdl-records/{id}` |
| Delete | `DELETE /web-bff/api/v1/asset/csdl-records/{id}` (soft) |
| road-route | `GET /integration/road-routes/search` |
| org-unit | `GET /integration/org-units/search` | **DEFER P2** |

API mirror: `api/v1/asset/csdl-records`. FE cite: `services/csdlSoSach/endpoint.ts` `BASE=/asset/csdl-records`.

**Tube rule bind:** 2 ống → **2 POST** (hoặc Copy + đổi `tubeIndex` + GPS) — không 1 payload chứa 2 bộ GPS.

### Status / side / tunnelClass / crossingType (LOOKUP_STATIC)

- status: `tot` · `tb` · `kem` · `hong`
- side: `L` · `R` · `C` · `Both`
- tunnelClass: `DB` · `MN` (label VN ĐB / MN)
- crossingType: `nui` · `song` · `do_thi` · `khac` (label VN khớp Excel · **SA** chốt)

## 6. Grid AC (REQUIRED · list packKind)

| ID | AC |
|----|-----|
| AC-G-01 | Zones **A Header · B Toolbar · C Grid · D Pagination** (+ Zone F config) |
| AC-G-02 | Search + province/status/road/kmFrom/kmTo/(tunnelClass)/(tubeCount) → page=1 khi filter đổi |
| AC-G-03 | Row menu Xem / Sửa / Copy / Xóa / Lịch sử |
| AC-G-04 | `LinCatalogDataGrid` + kéo cột default ON · schema-driven typed |
| AC-G-05 | Footer `LinCatalogListPagination` 50/100/200/500 |
| AC-G-06 | 1× `LinPageLayout` — **cấm** nested CatalogListShell |
| AC-G-07 | Flex + skeleton — **cấm** blank body |
| AC-G-08 | Zone F `LinCatalogUiSchemaEditorModal` catalog `road-tunnels` — **cấm** `LinListTableConfigModal` |
| AC-G-09 | Empty list copy VN «Chưa có hầm đường bộ» — **cấm** fake row / demo-json / LS SSOT |
| AC-G-10 | Toast 4xx/5xx · Confirm modal — **cấm** `window.alert`/`confirm` |
| AC-G-11 | Filter = **`LinErpListFilterBar`** 1 hàng wrap · **input + 🔍 cụm phải** — **cấm** stack / nút Tìm riêng |
| AC-G-12 | Toolbar FULL: Làm mới · Lịch sử · config · Delete · **+ Tạo mới** · Import/Export stub OK |
| AC-G-13 | Grid flow: sort · filter cột panel · chọn dòng · help đúp/Ctrl+chuột phải |
| AC-G-14 | Typed grid cols — **cấm** chỉ 3 cột detail* |
| AC-G-15 | `roadCode` filter = SearchInput road-route — **cấm** Text free (**GAP-CSDL-ROAD-01**) |
| AC-G-16 | Alias route `/csdl-bieu-03` load cùng resource — **GAP-BIEU03-ROUTE-01** |
| AC-G-17 | GPS summary col OK · **cấm** invent map canvas (**GAP-BIEU03-MAP-01**) |
| AC-G-18 | tubeCount/tubeIndex hiển thị list · **cấm** 1 row 2 bộ GPS (**GAP-BIEU03-TUBE-01**) |

### Report AC

**N/A** — packKind `list` (**GAP-PO-RPT-01**).

## 7. Screens (REQUIRED)

| Surface | Pattern | FormMode | URL | Tab index | Actions | devSlash |
|---------|---------|----------|-----|-----------|---------|----------|
| S-LIST | Kind **B** A–D+F | filter | `/csdl-bieu-03` · hub `?resource=road-tunnels` | — | search · filter · Tạo mới · Refresh · Delete · config · History | `/agent-dev` |
| S-FORM-CREATE | Kind **D Slideout** Z1–Z3 2col sectioned | create | overlay | — | Lưu · Hủy · leave-confirm | `/agent-dev` |
| S-FORM-EDIT | Kind **D Slideout** | edit | overlay | — | Lưu · Hủy | `/agent-dev` |
| S-FORM-VIEW | Kind **D Slideout** | view | overlay | — | readOnly · **không** disabled xám | `/agent-dev` |
| S-FORM-COPY | Kind **D Slideout** | create (copy) | overlay | — | POST new · clear id · new code · giữ tubeIndex/GPS chỉnh tay | `/agent-dev` |
| S-ACT-DELETE | Confirm modal | — | — | — | soft delete | `/agent-dev` |
| S-HIST | History modal | — | — | — | stub OK P2 | `/agent-dev` |
| S-HUB-ENTRY | Hub card open | — | `/so-ts/csdl-so-sach?resource=road-tunnels` | — | open-resource · title VN | `/agent-dev` |
| S-PEER-SO6 | deep-link only | — | Sổ 6 QL cầu/hầm | — | **Cấm** merge form | — |
| S-SKIP-MAP | deep-link only | — | gis | — | **Cấm** map canvas | — |

**devSlash:** `/agent-dev` (list + slideout · **không** oms-map / ai-detect).

**Cấm** Full-page form URL `/new`·`:id` · **cấm** GOVOne chrome · **cấm** Resource form thay Slideout.

## 8. Leave / alert (REQUIRED)

| Case | Control | Cấm |
|------|---------|-----|
| Form dirty · đóng slideout / navigate / back-hub | `LeaveConfirmModal` + leave guard | `window.confirm` / native dialog |
| API 4xx validation | `useAppToast` business message | `window.alert` |
| API 5xx list/detail | toast error | silent empty / fake success |
| detail 404 | toast · đóng slideout | silent fail |
| thiếu `resource` | không gọi list · API 422 | invent default resource |
| GPS thiếu bắt buộc | validation toast field | silent save |
| tubeCount>1 thiếu tubeIndex | validation toast | silent save |
| Delete | Confirm `Modal` / `useAlert` | native `confirm` |
| Lookup road-route no match | SearchInput empty · save 422 | free-text substitute master |
| Overlay z-index (modal trên Slideout) | `useAlert` / Modal stacked SSOT | z-index hack |

## 9. Open questions — Autopilot chốt

| ID | Question | Decision (PO) |
|----|----------|----------------|
| Q-GPS | GPS 6 số vs widget GIS pick? | **`six_numbers`** — 6 Number lat/lng×3 P1 · gis_pick optional Design later · **cấm** invent map canvas. |
| Q-TUBE | 2 ống = 2 row vs child table? | **`two_rows`** — mỗi ống 1 bản ghi GPS riêng · child_table REJECT · Copy flow UX. |
| Q-VENT | ventilationType / designLoad Text vs Dropdown+Number? | **`text`** — Text free P1 · SA refine enum/unit nếu Excel bắt buộc. |
| Q-ROUTE | Alias `/csdl-bieu-03` ngay hay hub-only? | **`alias_now`** — Navigate `/csdl-bieu-03` P1 · giữ hub entry. |
| Q-PROV | Province static vs master? | **`keep_static`** LOOKUP_STATIC P1 · master province **P2**. |
| Q-SECTION | Form 4 khối vs flat 2col? | **`sectioned`** — GPS / Kết cấu / Thoát+PCCC / Thiết bị. |
| GAP-CSDL-ORG-01 | org-unit SearchInput | **DEFER P2** — Text slim OK. |
| GAP-CSDL-XLS-01 | Excel import | **OUT pack**. |
| packKind | list vs report | **Confirm `list`**. |

UNCLEAR field path/version = **none** sau autopilot chốt — không AskQuestion.

## 10. Out of scope (this pack)

- Import/export Excel full sheet Biểu 3 wizard (toolbar stub OK)
- org-unit SearchInput P2
- master province SSOT
- GIS map shell / Kind F canvas / gis_pick widget P1
- Child table multi-tube GPS trên 1 row
- Merge form Sổ 6
- Auth NuGet wire (CommonLib debt)
- Re-scan demo HTML / crawl DemoRoot
- `yarn build` / e2e / `start:std` ở role PO
- Start role Design/SA/Dev trong cùng task (**GAP-PKT-ROLE-01**)
- Step 4b / migration (SA/Dev)

## 11. Handoff → Design (`/agent-design`)

| Field | Value |
|-------|-------|
| packKind confirm | **`list`** |
| Kind / surfaces | B catalog A–D+F + Kind D Slideout Z1–Z3 2col **sectioned** |
| Prototype | content-only list+slideout **42 cột** · skip chrome demo · **skip** Kind F map |
| reviewUrl | bắt buộc · `autoApprove=ON` → agent tự confirm Design |
| controlHint | §5 — **không** đoán Text vs SearchInput · **không** 3 ô detail* |
| Screens | §7 · Grid AC §6 · Leave §8 |
| grid_standard | `po-design-grid-standard` + `filter-bar-layout-hard` + `slideout-form-layout` |
| mfeStdUrl | `http://localhost:9301/csdl-bieu-03` |
| hubDeepLink | `http://localhost:9301/so-ts/csdl-so-sach?resource=road-tunnels` |
| BE | `api/v1/asset/csdl-records` · resource `road-tunnels` · road-route — **cấm** invent ERP / infra |
| Q chốt | GPS=six_numbers · TUBE=two_rows · VENT=text · ROUTE=alias_now · PROV=keep_static · SECTION=sectioned |
| Next roles | design → sa → team-lead → dev → qa → review = **pending** đến lượt · chain ON |
| e2e | queued `/agent-qa*` only |
| blockedReason | — |

## Version meta (REQUIRED)

| Field | Value |
|-------|-------|
| skillId | agent-po |
| skillVersion | 2026.08.25.02 |
| schemaVersion | 1 |
| workflowVersion | 2026.09.01.02 |
| rulesVersion | 2026.08.31.2 |
| generatedAt | 2026-09-05T08:40:30.000Z |
| versionGate | ok |
| contentHashPriorDataAnaly | sha256:2c03537918bbda56c29e1e1ef98cc081cc4e72c94447a1ac2f87f06bd6f9310e |
| headerFingerprintPrior | sha256:60f7ea4153b5853222bdeaf2679929a6e4c5b66b6973bcfe12e5bd9dd3fcfbcc |
| dataAnalySkillVersion | 2026.08.25.01 |
| dataAnalyWorkflowVersion | 2026.09.01.02 |
| dataAnalyRulesVersion | 2026.08.31.2 |
| taskId | `task_69bca3c6` |
| packKind | list |
| changeScope | new_page |

---
<!-- Version meta: skillId=agent-po skillVersion=2026.08.25.02 schemaVersion=1 workflowVersion=2026.09.01.02 rulesVersion=2026.08.31.2 versionGate=ok contentHashPriorDataAnaly=sha256:2c03537918bbda56c29e1e1ef98cc081cc4e72c94447a1ac2f87f06bd6f9310e taskId=task_69bca3c6 -->
