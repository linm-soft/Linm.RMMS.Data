# PO — Requirement — csdl-bieu-08 (Biểu 08 — Hệ thống ATGT)

| Field | Value |
|-------|-------|
| feature | `csdl-bieu-08` |
| title | CSDL Biểu 08 — Hệ thống ATGT |
| this role | `po` · `/agent-po` |
| changeScope | **`new_page`** (STATUS + packet · typed Biểu 8 trên resource `traffic-safety`) |
| packKind | **`list`** (**PO confirm** · data-analy đề xuất · Kind B list A–D + Kind D Slideout) |
| Feature Kind | **B** catalog A–D+F · **D** Slideout Z1–Z3 · **2col** · **cấm** Full-page form |
| resource | `traffic-safety` |
| formNo | `08` · title VN **Hệ thống ATGT** · live hub còn **Biểu 7** → renumber **T-REN-01** |
| columns | **45** · **11 nhóm** child/`type=` (Excel Biểu 8) |
| IdCode | prefix **`AT`** · `AT-yyyyMMdd-nnnn` · **cấm** Guid |
| peerSoTs | `TRAFFIC_SIGN` · `KM_POST` · `DELINEATOR` · `CONVEX_MIRROR` · `GUARDRAIL` · `MEDIAN` (+ ATGT typed) — deep-link OK · **cấm** merge 1 form hai chuẩn (**GAP-BIEU08-PEER-01** / **GAP-CSDL-CUC-11**) · **≠** `road-assets` |
| gap | GAP-BIEU08-TYPED-01 · GAP-BIEU08-CHILD-01 · GAP-BIEU08-REN-01 · GAP-BIEU08-ROUTE-01 · GAP-BIEU08-TYPE-01 · GAP-BIEU08-SIGN-01 · GAP-BIEU08-MARKER-01 · GAP-BIEU08-MEDIAN-01 · GAP-BIEU08-AG-01 · GAP-BIEU08-ISLAND-01 · GAP-BIEU08-STUD-01 · GAP-BIEU08-GR-01 · GAP-BIEU08-MARK-01 · GAP-BIEU08-CUSH-01 · GAP-BIEU08-MIRROR-01 · GAP-BIEU08-SIGNAL-01 · GAP-BIEU08-PEER-01 · GAP-CSDL-ROAD-01 · GAP-CSDL-PROV-01 · GAP-CSDL-ORG-01 · GAP-CSDL-XLS-01 · GAP-CSDL-CUC-03 · GAP-CSDL-CUC-08 · GAP-CSDL-CUC-11 · GAP-TYP-01 |
| mode | `feature_context` · CTX + cluster analy + hub demo zone ref · sourceKind=`synthetic` · **cấm** demo-json/LS SSOT |
| status | `confirmed` (autoApprove=ON · task `task_49b1fe15`) |
| requestSource | queue CHAIN `/agent-qldb-workflow` · roleOnly=`po` · `/agent-po` · prior data_analy **confirmed** |
| autoApprove | **ON** — Design/SA/Review khi tới lượt → agent tự confirm · enqueue role kế. Role PO **không** gate confirm. |
| e2eQa | **ON** — queued tới `/agent-qa*` · **cấm** e2e / `yarn start:std` / `yarn build` ở role PO |
| prior · data_analy | status=`done`/`confirmed` · `specs/_data-analy/features/csdl-bieu-08-control-hint.md` · `csdl-bieu-08-real-data.md` · compact `handoff/data_analy-compact.md` · contentHash `sha256:f972c82727726d256754d076435f9ef97c993b4f9844dc79e50b6415fcaf54be` · headerFingerprint `sha256:ba8b8db4f7637ee32cfd4a882b6abdc774c538f6c9812c3ecd1d13f6151cdd6f` · analy `task_a21c4937` · **cấm** re-scan demo (**GAP-PO-DEMO-RESCAN-01**) |
| productRoot | `D:/AI-QLBD/Linm.RMMS.Data` |
| mfe | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Asset` |
| mfeStdRoute | **`/csdl-bieu-08`** (alias Navigate **now**) · hub `/so-ts/csdl-so-sach?resource=traffic-safety` |
| mfeStdUrl | `http://localhost:9301/csdl-bieu-08` |
| hubDeepLink | `http://localhost:9301/so-ts/csdl-so-sach?resource=traffic-safety` |
| backend | `D:/AI-QLBD/Linm.RMMS.WebService` · domain **Asset** · live `api/v1/asset/csdl-records?resource=traffic-safety` · BFF `web-bff/api/v1/asset/csdl-records` · **cấm ERP.*** · **cấm** invent `api/v1/infra/*` · **cấm** `api/v1/so-ts/*` invent · **cấm** `api/v1/rmms/*` |
| domain | **Asset** |
| be_repo_confirm | `approve` (`Linm.RMMS.WebService`) |
| ui_repo_confirm | `approve` (`Linm.Web.RMMS.Asset`) |
| controlHint | `D:/AI-QLBD/Linm.RMMS.Data/specs/_data-analy/features/csdl-bieu-08-control-hint.md` |
| realData | `D:/AI-QLBD/Linm.RMMS.Data/specs/_data-analy/features/csdl-bieu-08-real-data.md` |
| contentHash | `sha256:f972c82727726d256754d076435f9ef97c993b4f9844dc79e50b6415fcaf54be` |
| headerFingerprint | `sha256:ba8b8db4f7637ee32cfd4a882b6abdc774c538f6c9812c3ecd1d13f6151cdd6f` |
| analyReuse | **hash skip** — **cấm** re-scan demo / crawl CTX / DemoRoot (**GAP-PO-DEMO-RESCAN-01**) |
| parent | hub `csdl-so-sach` · cluster `csdl-cuc-2026` · Excel sheet Biểu 8 |
| taskId | `task_49b1fe15` · analy `task_a21c4937` |
| updatedAt | `2026-09-05T10:05:00.000Z` |
| versionGate | `ok` (skill/schema/workflow khớp analy · pack `po/list@session`) |

**packKind confirm:** `list` (data-analy đề xuất · PO chốt). Kind **B** list A–D+F + Kind **D** Slideout 2col trên MFE Asset host `:9301` — **không** report pack · **không** Kind F map canvas · **không** Excel import wizard trong pack này (OUT **GAP-CSDL-XLS-01**).

**≠** Sổ TS ATGT peer types (deep-link) · **≠** hub generic 3 ô `detail*` — đây là **typed Biểu 08** 45 cột / 11 nhóm · shared + **1 child** theo `assetType`.

**Cấm:** implement · re-scan demo · form chỉ 3 ô `detail*` · **1 entity wide 45 cột** · merge form Sổ TS · invent map · invent API · ERP.* · demo-json / localStorage SSOT · Guid IdCode · yarn build/e2e/start:std ở role PO · start role khác (**GAP-PKT-ROLE-01**).

## 1. Goal

Chốt requirement **new_page** cho **Biểu 08 — Hệ thống ATGT** (`resource=traffic-safety`): list + Slideout typed **45 cột / 11 nhóm** Excel Biểu 8 · child tables hoặc `?type=` · thay generic hub form · giữ API prefix `csdl-records` · alias route `/csdl-bieu-08` + hub entry · renumber formNo 7→8 cùng release typed.

Persona: Khu QLĐB · Văn phòng Cục · Ban QLDA (web).

**Delta pack này (SSOT lock từ analy):**

1. Form/list typed 45 cột / 11 nhóm — **cấm** chỉ `detailPrimary`/`detailSpec`/`detailExtra` (**GAP-BIEU08-TYPED-01** / **GAP-CSDL-CUC-03**).
2. Child tables **hoặc** `?type=` — **cấm** 1 entity wide 45 cột (**GAP-BIEU08-CHILD-01** / **GAP-CSDL-01** / **GAP-CSDL-CUC-08** · **Q-CHILD** child_tables).
3. Renumber formNo **7→8** · title «Hệ thống ATGT» · giữ `?resource=traffic-safety` (**GAP-BIEU08-REN-01** / **T-REN-01** · **Q-REN-LABEL** with_typed).
4. Alias mfeStd `/csdl-bieu-08` Navigate P1 · giữ hub deep-link (**Q-ROUTE** / **GAP-BIEU08-ROUTE-01**).
5. `assetType` LOOKUP 11 enum · filter list + form discriminator · đổi type → **confirm** rồi clear child (**GAP-BIEU08-TYPE-01** · **Q-TYPE-UX** confirm).
6. 11 child sections field keys: SIGN / MARKER / MEDIAN / AG / ISLAND / STUD / GR / MARK / CUSH / MIRROR / SIGNAL (**GAP-BIEU08-SIGN-01…SIGNAL-01**).
7. `markerKind` LOOKUP_STATIC seed Excel (cọc tiêu/H/Km/dẻo/thủy chí) (**Q-MARKER-KIND** lookup_static).
8. Grid mặc định = shared + **subset theo type** — **cấm** hiện đủ 45 cột cùng lúc (**Q-LIST-COLS** subset_by_type).
9. `roadCode`/`roadName` = SearchInput `road-route` filter + form (**GAP-CSDL-ROAD-01**).
10. Province LOOKUP_STATIC P1 (**Q-PROV** keep_static).
11. LeaveConfirmModal dirty · toast 4xx/5xx — **cấm** native alert/confirm.
12. Import/export sheet Biểu 8 OUT pack (**GAP-CSDL-XLS-01**).
13. Peer Sổ TS deep-link **optional** P1 — **cấm** merge form (**GAP-BIEU08-PEER-01** · **Q-PEER** optional).

## 2. Current → New (`new_page` · REQUIRED)

Nguồn SSOT: control-hint + real-data §A+§B · `analyzedAt=2026-09-05T16:58:08.958Z` · contentHash khớp STATUS · **không** crawl demo/CTX lại.

| Layer | Current (live inventory analy) | New (this pack · copy analy) |
|-------|--------------------------------|------------------------------|
| Entry | Hub-only `?resource=traffic-safety` | Alias **`/csdl-bieu-08`** + hub entry — **GAP-BIEU08-ROUTE-01** |
| formNo / title | Demo/live **Biểu 7** · «Hệ thống ATGT» | **Biểu 08** · «Hệ thống ATGT» — **GAP-BIEU08-REN-01** |
| List Kind B | Generic road/km/detail cols | Shared + subset theo `assetType` · filter type |
| Form Kind D | 3 ô `detail*` polymorphic | Typed **45/11** Slideout 2col · shared + **1 child** — **GAP-BIEU08-TYPED-01** |
| Model | 1 hàng wide / generic | Child tables + `?type=` — **GAP-BIEU08-CHILD-01** |
| assetType | free «Chủng loại ATGT» | LOOKUP 11 · filter — **GAP-BIEU08-TYPE-01** |
| Children | detail* gộp | 11 section typed — SIGN…SIGNAL |
| road | Text free (hub) | SearchInput `road-route` — **GAP-CSDL-ROAD-01** |
| province | LOOKUP_STATIC 5 tỉnh | **keep_static** P1 — **Q-PROV** |
| manageUnit | Text | Text P1 · SearchInput org-unit **DEFER P2** — **GAP-CSDL-ORG-01** |
| Import | stub | Sheet 45 cột merge **OUT** |
| API | `…/csdl-records?resource=traffic-safety` | **Giữ prefix** · widen typed DTO/child — SA |
| Peer | so-ts ATGT types | Deep-link optional · **cấm** merge · **≠** `road-assets` |

**Không đổi:** Kind B A–D · Kind D Slideout · `LinPageLayout kind="catalog"` · `LinCatalogListPagination` 50/100/200/500 · prefix `api/v1/asset/csdl-records` · resource key `traffic-safety` · IdCode **cấm** Guid · prefix **`AT`** · **cấm ERP.*** · map = none.

### GAP IDs (PO bắt buộc Design/Dev đóng P1 trừ DEFER/OUT)

| ID | New | P1 |
|----|-----|----|
| GAP-BIEU08-TYPED-01 | Typed 45/11 thay generic detail* | **YES** |
| GAP-BIEU08-CHILD-01 | Child tables / `type=` · cấm wide | **YES** (`child_tables`) |
| GAP-BIEU08-REN-01 | formNo 7→8 · T-REN-01 | **YES** (`with_typed`) |
| GAP-BIEU08-ROUTE-01 | Alias `/csdl-bieu-08` Navigate | **YES** (`alias_now`) |
| GAP-BIEU08-TYPE-01 | assetType LOOKUP 11 + filter | **YES** |
| GAP-BIEU08-SIGN-01 | Child biển sign* | **YES** |
| GAP-BIEU08-MARKER-01 | Child cọc/Km marker* | **YES** |
| GAP-BIEU08-MEDIAN-01 | Child GPC median* | **YES** |
| GAP-BIEU08-AG-01 | Child chống chói antiGlare* | **YES** |
| GAP-BIEU08-ISLAND-01 | Child đảo island* | **YES** |
| GAP-BIEU08-STUD-01 | Child đinh PQ stud* | **YES** |
| GAP-BIEU08-GR-01 | Child hộ lan guardrail* | **YES** |
| GAP-BIEU08-MARK-01 | Child vạch sơn mark* | **YES** |
| GAP-BIEU08-CUSH-01 | Child thùng GC cushionQty | **YES** |
| GAP-BIEU08-MIRROR-01 | Child gương mirrorQty | **YES** |
| GAP-BIEU08-SIGNAL-01 | Child đèn signal*/lamp* | **YES** |
| GAP-CSDL-ROAD-01 | SearchInput `road-route` filter+form | **YES** |
| GAP-CSDL-PROV-01 | Province LOOKUP_STATIC | **YES** (keep_static) · master = P2 |
| GAP-BIEU08-PEER-01 | Deep-link Sổ TS · không merge | **YES** (optional nav) |
| GAP-CSDL-CUC-03 | Đóng gap Biểu 8 khi typed PASS | **YES** (via TYPED) |
| GAP-CSDL-CUC-08 | Child/`type=` · cấm wide | **YES** (via CHILD) |
| GAP-CSDL-CUC-11 | 2 lớp vận hành vs biểu Cục | **YES** (peer rule) |
| GAP-TYP-01 | label 13 · input D14/M16 | **YES** |
| GAP-CSDL-ORG-01 | manageUnit SearchInput org-unit | **DEFER P2** |
| GAP-CSDL-XLS-01 | Import/export sheet Biểu 8 | **OUT pack** |

## 3. DoD (đo được)

1. Entry `/csdl-bieu-08` **và** hub `?resource=traffic-safety` mở cùng list typed — title VN «Biểu 08 — Hệ thống ATGT» · back hub · **cấm** slug trên card hub · hub card label đổi 7→08 cùng release.
2. List BFF `GET …/csdl-records?resource=traffic-safety` (+ optional `type=`) — empty grid VN «Chưa có hệ thống ATGT» · CTA Tạo mới · **cấm** fake row / demo-json / LS SSOT.
3. Zone A: title VN · back `/so-ts/csdl-so-sach` — **cấm** Thêm mới trên A.
4. Zone B: `LinErpListFilterBar` 1 hàng wrap · input+🔍 cụm phải — SearchTextInput · province · status · road SearchInput · kmFrom/kmTo · side · **assetType** · Tạo mới · Refresh · Delete · History · SchemaConfig · Import/Export stub — filter đổi → page=1 · **search must work** · **cấm** nút Tìm riêng.
5. Zone C: `LinCatalogDataGrid` shared + subset theo type · **cấm** hiện đủ 45 cột · STT · row menu Xem/Sửa/Copy/Xóa/Lịch sử · kéo cột ON.
6. Zone D: `LinCatalogListPagination` **50 / 100 / 200 / 500**.
7. Zone F: `LinCatalogUiSchemaEditorModal` catalogKind **`traffic-safety`** (typed · per-type OK) — **cấm** `LinListTableConfigModal`.
8. Slideout Kind D Z1–Z3 2col · shared + **đúng 1 child** theo `assetType`: Create/Edit/View/Copy — đủ cột Excel theo type · **cấm** form chỉ 3 ô `detail*` · **cấm** wide 45 entity.
9. Required P1 shared: `roadCode`/`roadName` · `province` · `kmFrom`/`kmTo` · `side` · `assetType` · `status` · code IdCode `AT-…` readonly · + required child theo type (SA/UiSchema).
10. Đổi `assetType` khi edit (dirty child): **confirm** → clear child fields · **cấm** silent wipe.
11. View = `readOnly` — **cấm** Input disabled xám toàn form.
12. LeaveConfirmModal khi dirty Cancel/đóng/back — **cấm** `window.confirm`.
13. Soft-delete API → row biến mất · list refresh · toast lỗi 4xx/5xx — **cấm** `alert()`.
14. Peer deep-link so-ts type khớp `assetType` **optional** — **cấm** merge form / bind `road-assets`.
15. Map = none — toolbar map → gis deep-link only · **cấm** invent map canvas.
16. Typography GAP-TYP-01: label **13** · input D14 / M16.

## 4. Screens

### S-LIST — Kind B catalog (A–D + F)

| Zone | UI | AC |
|------|-----|----|
| A Header | Title «Biểu 08 — Hệ thống ATGT» · back hub | **cấm** slug trên card · **cấm** Thêm mới trên A |
| B Toolbar+filter | SearchTextInput · province · status · road SearchInput · kmFrom/kmTo · side · assetType · CRUD toolbar | **search must work** · **cấm** nút Tìm riêng · filter → page=1 |
| C Grid | `LinCatalogDataGrid` shared + type subset | STT · row menu · kéo cột ON · **cấm** 45 cột cùng lúc · **cấm** chỉ 3 detail |
| D Footer | `LinCatalogListPagination` | 50/100/200/500 |
| F Schema | `LinCatalogUiSchemaEditorModal` | catalogKind=`traffic-safety` |

**Grid AC (list pack · REQUIRED):**

| # | AC |
|---|-----|
| G1 | Columns bind shared + type-specific subset (code · road · province · km · side · assetType · type fields · builtYear · status · …) — không chỉ detail* · không đủ 45 |
| G2 | Sort/drag column ON theo UiSchema |
| G3 | Row actions: Xem / Sửa / Copy / Xóa / Lịch sử |
| G4 | Empty state VN «Chưa có hệ thống ATGT» + CTA Tạo mới |
| G5 | Pagination pageSize ∈ {50,100,200,500} |
| G6 | Soft-delete ẩn row · refresh list |
| G7 | Filter `assetType` / `?type=` đồng bộ list cols subset |

**Report AC:** N/A (`packKind=list`).

### S-FORM-* — Kind D Slideout (Z1–Z3 · 2col · shared + 1 child)

| Mode | Behavior |
|------|----------|
| Create | empty · code auto `AT-…` readonly · chọn assetType → hiện 1 child |
| Edit | load detail · save PUT · đổi type → confirm clear child |
| View | `readOnly` · **cấm** disabled xám |
| Copy | clone fields · new code on save |

**Normalized header (45):**  
`code|roadCode|roadName|province|kmFrom|kmTo|side|assetType|signCode|signSize|signPoleCount|signPoleHeightM|markerKind|markerQty|markerStructure|markerAreaM2|medianKind|medianStructure|medianLengthM|medianHeightM|antiGlareKind|antiGlareStructure|antiGlareQty|antiGlareLengthM|islandType|islandStructure|islandAreaM2|studSize|studQty|guardrailKind|guardrailStructure|guardrailLengthM|guardrailReflector|markCode|markLengthM|markWidthM|markAreaM2|cushionQty|mirrorQty|signalPoleKind|signalHeightM|lampKind|lampQty|builtYear|status`

Trail (không đếm 45): `manageUnit` · `notes`.

| Zone / section | Fields (controlHint từ analy · PO chốt) |
|----------------|------------------------------------------|
| Z1 Identity / vị trí | code (ro) · roadCode/roadName SearchInput · province Dropdown · kmFrom/kmTo Number · side Dropdown · assetType Dropdown* · status Dropdown |
| Z2 Child (1 visible) | theo `assetType` — bảng dưới |
| Z3 QL / ghi chú | builtYear Number · manageUnit Text (P1) · notes Textarea |

| assetType | Child fields |
|-----------|--------------|
| `TRAFFIC_SIGN` | signCode · signSize · signPoleCount · signPoleHeightM |
| `MARKER_POST` | markerKind · markerQty · markerStructure · markerAreaM2 |
| `MEDIAN` | medianKind · medianStructure · medianLengthM · medianHeightM |
| `ANTI_GLARE` | antiGlareKind · antiGlareStructure · antiGlareQty · antiGlareLengthM |
| `TRAFFIC_ISLAND` | islandType · islandStructure · islandAreaM2 |
| `ROAD_STUD` | studSize · studQty |
| `GUARDRAIL` | guardrailKind · guardrailStructure · guardrailLengthM · guardrailReflector |
| `ROAD_MARKING` | markCode · markLengthM · markWidthM · markAreaM2 |
| `CRASH_CUSHION` | cushionQty |
| `CONVEX_MIRROR` | mirrorQty |
| `TRAFFIC_SIGNAL` | signalPoleKind · signalHeightM · lampKind · lampQty |

### S-HUB-ENTRY

Hub card `traffic-safety` → cùng list typed · label **Biểu 08** · title VN · **cấm** hiện slug `csdl-bieu-08` trên card.

### S-PEER-SOTS / S-SKIP-MAP

- Peer: deep-link Sổ TS type khớp `assetType` optional P1.
- Map: **none**.

## 5. Leave / dirty

| Trigger | UX |
|---------|-----|
| Cancel / đóng X / Esc / back khi dirty | `LeaveConfirmModal` — Lưu / Không lưu / Ở lại |
| Đổi assetType khi child dirty | confirm clear child · hủy → giữ type cũ |
| Clean | đóng ngay |
| Save success | đóng · toast · refresh list |
| **Cấm** | `window.confirm` / `alert` |

## 6. PO decisions (open Q · autoApprove)

| ID | Decision | Rationale |
|----|----------|-----------|
| Q-ROUTE | **alias_now** | mfeStdUrl/STATUS đã lock `/csdl-bieu-08` · peer Biểu 0x cùng pattern |
| Q-PROV | **keep_static** | P1 LOOKUP_STATIC · master province = P2 |
| Q-CHILD | **child_tables** | GAP-CSDL-01 / GAP-CSDL-CUC-08 · SA Schema_CsdlBieu8 + children · `?type=` filter OK |
| Q-TYPE-UX | **confirm** | tránh silent wipe child khi edit |
| Q-MARKER-KIND | **lookup_static** | seed Excel cọc tiêu/H/Km/dẻo/thủy chí · LOOKUP_STATIC |
| Q-LIST-COLS | **subset_by_type** | cấm 45 cột cùng lúc · schema-config bổ sung |
| Q-REN-LABEL | **with_typed** | hub Biểu 7→08 cùng release typed |
| Q-PEER | **optional** | deep-link OK khi route sẵn · không block P1 |

**Open Q sau PO:** **none** (autopilot chốt).

## 7. Out of scope / DEFER / OUT

| Item | Bucket |
|------|--------|
| manageUnit SearchInput org-unit | **DEFER P2** |
| master province | **DEFER P2** |
| Import/export XLS Biểu 8 45 cột merge | **OUT** GAP-CSDL-XLS-01 · toolbar stub OK |
| Map canvas / invent gis embed | **OUT** · deep-link only |
| Merge form Sổ TS ATGT / road-assets | **CẤM** |
| yarn build / e2e / start:std @ PO | **CẤM** |
| Re-scan demo / crawl CTX | **CẤM** (hash skip) |

## 8. Handoff

| Role | Need |
|------|------|
| **Design** | control-map khớp controlHint · prototype list+slideout · **1 child section** visible · reviewUrl · Grid subset_by_type · filter assetType · LinErpListFilterBar |
| **SA** | path `api/v1/asset/csdl-records` · typed DTO/UiSchema · Schema_CsdlBieu8 + **child tables** · renumber formNo · **cấm** wide table · `?type=` |
| **TL/Dev** | Wire controlHint · **cấm** đoán Text vs SearchInput · IdCode `AT-` |
| **QA** | scenarios + e2e queued `/agent-qa*` only |

## Version meta (REQUIRED)

| Field | Value |
|-------|-------|
| skillId | agent-po |
| skillVersion | 2026.08.25.02 |
| schemaVersion | 1 |
| workflowVersion | 2026.09.01.02 |
| rulesVersion | 2026.08.31.2 |
| contentHash | `sha256:f972c82727726d256754d076435f9ef97c993b4f9844dc79e50b6415fcaf54be` |
| headerFingerprint | `sha256:ba8b8db4f7637ee32cfd4a882b6abdc774c538f6c9812c3ecd1d13f6151cdd6f` |
| generatedAt | 2026-09-05T10:05:00.000Z |
| versionGate | ok |
| taskId | task_49b1fe15 |
| packKind | list |
| changeScope | new_page |

---
<!-- Version meta: skillId=agent-po skillVersion=2026.08.25.02 schemaVersion=1 workflowVersion=2026.09.01.02 rulesVersion=2026.08.31.2 versionGate=ok contentHash=sha256:f972c82727726d256754d076435f9ef97c993b4f9844dc79e50b6415fcaf54be -->
