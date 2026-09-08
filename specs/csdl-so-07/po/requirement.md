# PO — Requirement — csdl-so-07 (Sổ 07 — HL + GPTC + Dự án)

| Field | Value |
|-------|-------|
| feature | `csdl-so-07` |
| this role | `po` · `/agent-po` |
| changeScope | `new_page` |
| packKind | **`list`** (Kind **B** catalog A–D + Kind **D** Slideout · typed T-SO-07 · **2 tab** nested `violations[]` / `permits[]`+QLDA) — PO confirm |
| Feature Kind | **B** list A–D · **D** Slideout Z1–Z3 · Tab A/B `pattern_inline_grid` nested arrays |
| gap | `new_page` · typed book thay generic · GAP-SO07-* + GAP-CSDL-* |
| mode | `feature_context` · **no Excel** · CTX + analy + hub demo zone ref · sourceKind=`synthetic` |
| status | `done` |
| requestSource | run packet `task_672392f6` · `/agent-qldb-workflow` · roleOnly=`po` · `/agent-po` |
| autoApprove | **ON** — Design/SA/Review khi tới lượt → agent tự confirm · enqueue role kế. Role PO **không** gate confirm. |
| e2eQa | **ON** — queued tới `/agent-qa*` · **cấm** e2e / `yarn start:std` / `yarn build` ở role PO |
| prior · data_analy | status=`done`/`confirmed` · `specs/_data-analy/features/csdl-so-07-control-hint.md` · `csdl-so-07-real-data.md` · contentHash `sha256:b928feb3e0d7900398812630e25afa43bfcbf4971633a9c1184c55ea2912ef69` · headerFingerprint `sha256:a923102afa38664e58effeb2b0dccfae12b942d4a3a6fb3c1cb8355df00aa531` · analy `task_20842c29` · **cấm** re-scan demo (**GAP-PO-DEMO-RESCAN-01**) |
| productRoot | `D:/AI-QLBD/Linm.RMMS.Data` |
| mfe | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Asset` · alias **`/csdl-so-07`** · hub **`/so-ts/csdl-so-sach?resource=row-violations`** |
| mfeStdUrl | `http://localhost:9301/csdl-so-07` |
| hubDeepLink | `http://localhost:9301/so-ts/csdl-so-sach?resource=row-violations` |
| backend | `D:/AI-QLBD/Linm.RMMS.WebService` · domain **Asset** · **`api/v1/asset/csdl-records?resource=row-violations`** · **cấm ERP.*** · **cấm** invent `api/v1/infra/*` · **cấm** runtime `/api/v1/row-violations` · `/api/v1/construction-permits` · **cấm** `api/v1/so-ts/*` |
| domain | **Asset** |
| resource | `row-violations` (**giữ** key) |
| formNo | `07` · title VN **HL + GPTC + Dự án** · live hub card «Hành lang ATĐB + GP thi công» formNo **6** đến T-REN-01 |
| IdCode | `SO-yyyyMMdd-nnnn` · **cấm** Guid |
| be_repo_confirm | `approve` (`Linm.RMMS.WebService`) |
| ui_repo_confirm | `approve` (`Linm.Web.RMMS.Asset`) |
| updatedAt | `2026-09-05T21:15:00.000Z` |
| taskId | `task_672392f6` · analy `task_20842c29` |
| skillVersion | `2026.08.25.01` |
| workflowVersion | `2026.09.01.02` |
| rulesVersion | `2026.08.31.2` |

## 1. Goal

Chốt **new_page** typed **Sổ 07 — HL + GPTC + Dự án** (TT 41 · Mẫu **7** Cục · T-SO-07) trên resource `row-violations`: Kind B list + Kind D Slideout CRUD · header typed (nhà thầu · đường · Km · ĐV QL · tỉnh · TT sổ · ghi chú) + **2 tab** A `violations[]` (VP hành lang) / B `permits[]` (GPTC + **QLDA/DA**) · **cấm** DoD chỉ 3 ô `detail*` / `col1–3` · **cấm** flatten 2 tab thành 1 grid.

Persona: Khu QLĐB · Hạt trưởng · Cán bộ hành lang / GPTC.

**packKind confirm:** `list` (data-analy đề xuất · PO chốt). **Không** report pack · **không** Kind F map canvas · Import/Export Excel **OUT pack**.

**≠** Sổ TS `so-ts-*` · ≠ report `rpt-vi-pham-hlatdb` (deep-link drill only · **cấm** merge) · ≠ hub Kind G shell `csdl-so-sach` (giữ entry; alias mfeStd riêng).

**Cấm ERP.*** · **cấm** `api/v1/rmms/*` · **cấm** invent `api/v1/infra/*` · **cấm** demo-json / localStorage SSOT · **cấm** re-scan demo HTML (**GAP-PO-DEMO-RESCAN-01**) · **cấm** runtime path `/row-violations` · `/construction-permits`.

## 2. Current → New (`new_page` · REQUIRED)

Nguồn SSOT: control-hint + real-data §A+§B · `analyzedAt=2026-09-05T21:06:41.298Z` · contentHash khớp STATUS · **không** crawl demo/CTX lại.

| Layer | Current (live) | New (PO chốt) |
|-------|----------------|---------------|
| Entry | Hub deep-link `?resource=row-violations` only | Alias **`/csdl-so-07`** + hub entry (**GAP-SO07-ROUTE-01**) |
| Hub label | Live formNo **6** «Hành lang ATĐB + GP thi công» | mfeStd title **«Sổ 07 — HL + GPTC + Dự án»** · hub card giữ live label đến T-REN-01 · key `row-violations` giữ (**GAP-SO07-FORMNO-01**) |
| List Kind B | Generic cols · filter chrome | Typed cols: code · road · km · contractor · status · updatedAt |
| Form Kind D | 3 ô `detail*` + entries Col1–3 | Typed header + **Tab A** `violations[]` + **Tab B** `permits[]`+QLDA (**GAP-SO07-TYPED-01** / **GAP-SO07-TABS-01** / **GAP-CSDL-CUC-03**) |
| Tab B Project | §3.6 ConstructionPermit **không** QLDA | `projectMgmtUnit` + `progress` khối Dự án (**GAP-SO07-PROJECT-01**) |
| `roadCode`/`roadName` | Text free | **SearchInput** `road-route` filter + form (**GAP-CSDL-ROAD-01**) |
| `province` | LOOKUP_STATIC 5 tỉnh | **Giữ** LOOKUP_STATIC P1 (**Q-PROV**) · master = P2 |
| `contractor` / `manageUnit` | Text | **Text P1** · SearchInput org-unit **DEFER P2** (**Q-ORG** / **GAP-CSDL-ORG-01**) |
| `status` (sổ) | Catalog tot/tb/kem/hong (generic) | Sổ LOOKUP_STATIC **`draft\|active\|closed`** (**Q-STATUS**) |
| `violationStatus` | generic / thiếu | LOOKUP_STATIC VP **`open\|processing\|resolved\|dismissed`** (**Q-STATUS**) · **cấm** tot/tb/kem/hong |
| Nested arrays | 1 grid Col1–3 | Tab A/B add/remove dòng OK · **cấm** flatten (**Q-TABS**) |
| `permitDays` | — | Lưu field riêng · UI có thể derive hiển thị từ IssuedAt–ExpiresAt (**Q-PERMITDAYS**) |
| API | `…/csdl-records?resource=row-violations` shell | **Giữ prefix** · widen typed payload — SA / Schema_CsdlSo07 · **cấm** runtime standalone paths (**GAP-SO07-APILEGACY-01**) |
| DOMAIN-MAP | thiếu row `csdl-so-07` | SA thêm row Asset wave này (**GAP-SO07-DMAP-01** / **Q-DMAP**) |
| Peer report | flat Col1–3 | Typed lines = source `rpt-vi-pham-hlatdb` drill **sau** form READY (**Q-RPT** / **GAP-RPT-SRC-CSDL-01**) |
| Import/Export | Stub | **OUT pack** (**GAP-CSDL-XLS-01**) |
| Map | — | **none** · deep-link GIS only · **cấm** canvas |

**Không đổi:** API prefix `api/v1/asset/csdl-records` · resource key `row-violations` · Kind B A–D · Kind D Slideout · `LinPageLayout kind="catalog"` · IdCode `SO-yyyyMMdd-nnnn` · pagination 50/100/200/500 · **cấm** ERP.* · **cấm** Guid IdCode · **cấm** merge Sổ TS / report form.

### GAP IDs (PO · P1 trừ DEFER/OUT)

| ID | New | P1 |
|----|-----|-----|
| GAP-SO07-TYPED-01 | Typed header + 2 tab nested arrays thay detail*/col1–3 | **YES** |
| GAP-SO07-PROJECT-01 | `projectMgmtUnit` + progress trên tab B | **YES** |
| GAP-SO07-ROUTE-01 | Alias `/csdl-so-07` + hub entry | **YES** |
| GAP-SO07-FORMNO-01 | Label Sổ 07 · key row-violations giữ · hub card rename = T-REN-01 | **YES** (title) · hub rename **DEFER** T-REN-01 |
| GAP-SO07-TABS-01 | 2 tab nested · cấm flatten | **YES** |
| GAP-SO07-APILEGACY-01 | Doc path cũ ≠ runtime | **YES** (docs/SA) |
| GAP-SO07-DMAP-01 | DOMAIN-MAP row `csdl-so-07` | **YES** SA wave này |
| GAP-CSDL-ROAD-01 | SearchInput road-route | **YES** |
| GAP-CSDL-PROV-01 | Province LOOKUP_STATIC P1 | **YES** · master P2 |
| GAP-CSDL-ORG-01 | contractor/manageUnit SearchInput | **DEFER P2** |
| GAP-CSDL-CUC-03 | Đóng gap cột typed Sổ 07 | **YES** (khi typed PASS) |
| GAP-RPT-SRC-CSDL-01 | Typed lines = report source | **YES** form READY · report pack / drill **không** block list DoD |
| GAP-CSDL-XLS-01 | Import/export sheet HL/GPTC | **OUT pack** |

## 3. Open Q — PO resolve (autoApprove)

| Q | Decision |
|---|----------|
| **Q-FORMNO** | mfeStd/page title **«Sổ 07 — HL + GPTC + Dự án»** · hub card live **«Hành lang ATĐB + GP thi công»** (formNo 6) giữ đến **T-REN-01** · resource key `row-violations` **không** đổi |
| **Q-STATUS** | P1 sổ: Dropdown LOOKUP_STATIC **`draft\|active\|closed`** (Nháp · Đang hiệu lực · Đóng) · P1 VP: **`open\|processing\|resolved\|dismissed`** (Mở · Đang XL · Đã XL · Bỏ) · **cấm** reuse `tot\|tb\|kem\|hong` |
| **Q-TABS** | **1 slideout · 2 tab** · Tab A `violations[]` · Tab B `permits[]` (+ QLDA) · **1 resource** · **cấm** tách 2 resource · **cấm** flatten 1 bảng |
| **Q-PROJECT** | `projectMgmtUnit` **Text optional** P1 · **khuyến nghị** khi dòng GP có `permitNo` · **không** bắt buộc hard-block Save P1 · SearchInput org **DEFER P2** |
| **Q-PERMITDAYS** | **Lưu** `permitDays` Integer riêng · UI **được** derive hiển thị từ IssuedAt–ExpiresAt khi có đủ ngày · BE validate ≥ 0 |
| **Q-PROV** | **keep_static** 5 tỉnh P1 · master province = P2 |
| **Q-ORG** | **Text P1** `contractor` + `manageUnit` · org-unit SearchInput = **P2** (**GAP-CSDL-ORG-01**) |
| **Q-DMAP** | **YES** — SA thêm DOMAIN-MAP row `csdl-so-07` → Asset · `asset` **wave này** |
| **Q-RPT** | Drill `rpt-vi-pham-hlatdb` **sau** typed form READY · **không** block list/CRUD DoD wave này · deep-link `?resource=row-violations&id=` |

## 4. DoD (đo được)

1. Entry: mfeStd `/csdl-so-07` **và** hub `?resource=row-violations` mở cùng list typed · title VN «Sổ 07 — HL + GPTC + Dự án» · back hub · **cấm** slug trên card.
2. List load BFF `GET …/csdl-records?resource=row-violations` — empty grid VN «Chưa có bản ghi hành lang / GPTC» · **cấm** fake row · **cấm** demo-json/LS SSOT.
3. Zone A: title VN · back hub · meta resource=`row-violations` — **cấm** Thêm mới trên A.
4. Zone B: filter **1 hàng** — SearchTextInput · province · status · road SearchInput · fromDate · toDate · Tạo mới · Refresh · Delete · History · SchemaConfig · Import/Export stub — **search must work** · **cấm** nút Tìm riêng · filter đổi → page=1 · **cấm** wrap 2 hàng default desktop.
5. Zone C: `LinCatalogDataGrid` kéo cột ON · STT · Mã · Đường · Km · Nhà thầu · TT · Cập nhật · row menu Xem/Sửa/Copy/Xóa/Lịch sử.
6. Zone D: `LinCatalogListPagination` **50 / 100 / 200 / 500**.
7. Slideout Kind D Z1–Z3: Create/Edit/View/Copy — required header: contractor · roadCode · kmFrom · kmTo · manageUnit · province · code IdCode `SO-` readonly · 2 tab nested.
8. View = `readOnly` — **cấm** Input disabled xám toàn form.
9. Tab A `violations[]` inline grid — add/remove OK · fields T-SO-07 · **cấm** chỉ Col1–3 · 0 dòng OK đến khi Save (validation theo required dòng nếu có).
10. Tab B `permits[]` inline grid — add/remove OK · GPTC + `projectMgmtUnit` + `progress` · **cấm** flatten với Tab A.
11. `roadCode` = SearchInput road-route bind `roadName` — **cấm** free-text khi master READY.
12. Leave-confirm dirty · toast 4xx/5xx · 404 detail → đóng slideout — **cấm** native alert/confirm.
13. Typography: label **13** · input D14/M16 (**GAP-TYP-01**).
14. Map: **none** trên pack — **cấm** invent canvas.
15. Peer report drill: **không** gộp form · timing sau typed READY (**Q-RPT**).
16. `yarn build` / e2e / `start:std` **chỉ** Dev/QA — PO **cấm**.

## 5. Screens / zones

### List — Kind B

| Zone | Surface | AC |
|------|---------|-----|
| A | Header | Title «Sổ 07 — HL + GPTC + Dự án» · back hub · meta `row-violations` |
| B | Toolbar + filter | SearchText (mã · đường · tổ chức VP · số GP · QLDA) · province · status · road SearchInput · fromDate · toDate · actions · filter-bar HARD 1 row |
| C | Grid | Typed cols · STT · row menu · drag columns ON |
| D | Footer | Pagination 50/100/200/500 |

### Form — Kind D Slideout

| Zone | Surface | AC |
|------|---------|-----|
| Z1 | Header | mode C/E/V/Copy · title · close |
| Z2 | Body | Header fields + Tab A VP + Tab B GPTC/QLDA |
| Z3 | Footer | Lưu · Hủy · leave-confirm dirty |

### Tab A — violations[]

| Field | controlHint | required |
|-------|-------------|----------|
| at | Date | * |
| stationKm | Number/Text | * |
| adminArea | Text | |
| violationStatus | Dropdown | * |
| orgName | Text | * |
| minutesDepot | Text | |
| minutesCommune | Text | |
| minutesAdmin | Text | |
| currentState | Textarea | |
| unitConfirm | Text | |

### Tab B — permits[] (+ QLDA)

| Field | controlHint | required |
|-------|-------------|----------|
| permitNo | Text | * |
| permitDays | Integer | |
| issuer | Text | * |
| investor | Text | * |
| projectMgmtUnit | Text | (optional P1 · khuyến nghị khi có GP) |
| contractor | Text | |
| workName | Text | * |
| stationKm | Number/Text | * |
| expiresAt | Date | * |
| extendedAt | Date | |
| progress | Textarea | |

## 6. Grid AC (list)

| ID | AC |
|----|-----|
| G-01 | Load list BFF `resource=row-violations` · empty VN |
| G-02 | SearchText debounce work · **cấm** nút Tìm |
| G-03 | Filter province/status/road/from/to → page=1 |
| G-04 | Typed columns · STT · drag ON |
| G-05 | Row menu Xem/Sửa/Copy/Xóa/Lịch sử |
| G-06 | Pagination 50/100/200/500 |
| G-07 | Tạo mới → Slideout Create |
| G-08 | Soft-delete · toast · refresh |
| G-09 | History action opens history surface |
| G-10 | SchemaConfig opens ui-schema editor · **cấm** invent path |

## 7. Form AC

| ID | AC |
|----|-----|
| F-01 | Create seed header + empty nested arrays · IdCode BE `SO-` |
| F-02 | Edit load detail typed · Tab A/B bind |
| F-03 | View readOnly · **cấm** disabled xám |
| F-04 | Copy → Create prefill · code mới |
| F-05 | Required header + required line fields khi dòng tồn tại |
| F-06 | Tab A add/remove · Tab B add/remove · **cấm** flatten |
| F-07 | road SearchInput bind roadName |
| F-08 | projectMgmtUnit + progress trên Tab B |
| F-09 | Validation toast 422 · không crash |
| F-10 | Save POST/PUT body `resource=row-violations` + nested |

## 8. Leave / error

| Case | UX |
|------|-----|
| Dirty leave | LeaveConfirmModal · **cấm** native |
| 404 detail | đóng slideout · toast |
| 422 thiếu resource | toast |
| Tab empty | 0 dòng OK · validate theo dòng nếu user thêm |
| Network error | toast · giữ draft |

## 9. Non-goals / OUT

- Report pack / full `rpt-vi-pham-hlatdb` UI (chỉ drill timing **Q-RPT**)
- Import/Export Excel (**GAP-CSDL-XLS-01** OUT)
- org-unit SearchInput (**GAP-CSDL-ORG-01** P2)
- Master province (**GAP-CSDL-PROV-01** P2)
- Map canvas · ERP.* · Guid IdCode · merge Sổ TS
- Runtime `/api/v1/row-violations` · `/construction-permits`
- yarn build / e2e / start:std ở PO

## 10. Handoff Design

- control-map từ control-hint · prototype **2-tab** typed · reviewUrl
- filter-bar HARD 1 row · Kind B A–D · Kind D Z1–Z3
- Typography GAP-TYP-01 · **cấm** re-scan demo
- Title VN «Sổ 07 — HL + GPTC + Dự án» · **cấm** slug trên card

## 11. Handoff SA

- Schema_CsdlSo07 · typed DTO/UiSchema · nested `violations[]` / `permits[]`
- DOMAIN-MAP row `csdl-so-07` → Asset (**Q-DMAP**)
- Widen `csdl-records` payload · **cấm** invent standalone API
- Enum sổ + VP per **Q-STATUS** · `permitDays` per **Q-PERMITDAYS**

## 12. DoR PO

- [x] packKind `list` confirm
- [x] changeScope `new_page` · Current→New
- [x] Open Q resolved (autoApprove)
- [x] Grid AC + Form AC + Screens + Leave
- [x] GAP P1 / DEFER / OUT
- [x] handoff Design + SA
- [x] compact `handoff/po-compact.md`
- [x] **cấm** implement / e2e / start:std / re-scan demo
