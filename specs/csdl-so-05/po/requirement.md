# PO — Requirement — csdl-so-05 (Sổ 05 — TNGT + điểm đen)

| Field | Value |
|-------|-------|
| feature | `csdl-so-05` |
| this role | `po` · `/agent-po` |
| changeScope | `new_page` |
| packKind | **`list`** (Kind **B** catalog A–D + Kind **D** Slideout · typed T-SO-05 · **3 grid** C.1 / C.2 / điểm đen) — PO confirm |
| Feature Kind | **B** list A–D · **D** Slideout Z1–Z3 · tabs 3 entry grids |
| gap | `new_page` · NEW resource + typed 3 grid · GAP-SO05-* + GAP-CSDL-* |
| mode | `feature_context` · **no Excel in-repo** · CTX + analy + hub demo zone ref · sourceKind=`synthetic` |
| status | `done` |
| requestSource | run packet `task_2cd724ab` · `/agent-qldb-workflow` · roleOnly=`po` · `/agent-po` |
| autoApprove | **ON** — Design/SA/Review khi tới lượt → agent tự confirm · enqueue role kế. Role PO **không** gate confirm. |
| e2eQa | **ON** — queued tới `/agent-qa*` · **cấm** e2e / `yarn start:std` / `yarn build` ở role PO |
| prior · data_analy | status=`done`/`confirmed` · `specs/_data-analy/features/csdl-so-05-control-hint.md` · `csdl-so-05-real-data.md` · contentHash `sha256:ccb6cccc2010c67b8cd3b02484f6a424d09f5a7e0494ad59b5b71ea6ff15f8ce` · headerFingerprint `sha256:73a54e566bbad59af489c97e74cad13d131c338daa386a531e535704e374d14a` · analy `task_6deceabd` · **cấm** re-scan demo (**GAP-PO-DEMO-RESCAN-01**) |
| productRoot | `D:/AI-QLBD/Linm.RMMS.Data` |
| mfe | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Asset` · alias **`/csdl-so-05`** · hub **`/so-ts/csdl-so-sach?resource=accident-summaries`** |
| mfeStdUrl | `http://localhost:9301/csdl-so-05` |
| hubDeepLink | `http://localhost:9301/so-ts/csdl-so-sach?resource=accident-summaries` |
| backend | `D:/AI-QLBD/Linm.RMMS.WebService` · domain **Asset** · **`api/v1/asset/csdl-records?resource=accident-summaries`** · **cấm ERP.*** · **cấm** invent `api/v1/infra/*` · **cấm** runtime `/api/v1/accident-summaries` · **cấm** `api/v1/so-ts/*` |
| domain | **Asset** |
| resource | `accident-summaries` (**NEW**) |
| formNo | `05` · title VN **TNGT + điểm đen** · **cấm** reuse formNo 4 · **cấm** «(+ đếm xe)» |
| IdCode | `SO-yyyyMMdd-nnnn` · **cấm** Guid |
| peerLookup | `road-route` · org-unit P2 · report leaf `rpt-tngt` (read-only) · peer sổ `traffic-counts` / `csdl-so-04` (**ROW riêng**) |
| be_repo_confirm | `approve` (`Linm.RMMS.WebService`) |
| ui_repo_confirm | `approve` (`Linm.Web.RMMS.Asset`) |
| updatedAt | `2026-09-06T05:50:00.000Z` |
| taskId | `task_2cd724ab` · analy `task_6deceabd` |
| skillVersion | `2026.08.25.01` |
| workflowVersion | `2026.09.01.02` |
| rulesVersion | `2026.08.31.2` |

## 1. Goal

Chốt **new_page** typed **Sổ 05 — TNGT + điểm đen**: NEW resource `accident-summaries` · Kind B list + Kind D Slideout CRUD · header T-SO-05 + **3 grid** C.1 (tháng) / C.2 (6 tháng·năm) / điểm đen·tiềm ẩn · **cấm** DoD chỉ 3 ô `detail*` / `col1–3` · **cấm** nhét đếm xe / 16 hạng xe / TrafficCountSummary vào resource này.

Persona: Khu QLĐB · Hạt trưởng · NV ATGT / TNGT · Nhà thầu BDTX · Báo cáo `rpt-tngt` (read-only peer).

**packKind confirm:** `list` (data-analy đề xuất · PO chốt). **Không** report pack · **không** Kind F map canvas · Import/Export Excel **OUT pack**.

**≠** Sổ TS `so-ts-*` (deep-link only · **cấm** merge ROW) · ≠ hub Kind G shell `csdl-so-sach` (giữ entry; alias mfeStd riêng) · ≠ `csdl-so-04` (`traffic-counts` · đếm xe).

**Cấm ERP.*** · **cấm** `api/v1/rmms/*` · **cấm** invent `api/v1/infra/*` · **cấm** demo-json / localStorage SSOT · **cấm** re-scan demo HTML (**GAP-PO-DEMO-RESCAN-01**) · **cấm** CRUD trên `rpt-tngt`.

## 2. Current → New (`new_page` · REQUIRED)

Nguồn SSOT: control-hint + real-data §A+§B · `analyzedAt=2026-09-05T22:43:57.821Z` · contentHash khớp STATUS · **không** crawl demo/CTX lại.

| Layer | Current (live) | New (PO chốt) |
|-------|----------------|---------------|
| Resource / title | **MISSING** `accident-summaries` · TNGT dính title Sổ 4 | **NEW** key · title **«Sổ 05 — TNGT + điểm đen»** · formNo=`05` (**GAP-SO05-RES-01** / **GAP-SO05-FORMNO-01**) |
| Split | Live «đếm xe (+ TNGT)» 1 resource | Tách khỏi `traffic-counts` · peer so-04 (**GAP-SO05-SPLIT-01** / **GAP-CSDL-CUC-07**) |
| Entry | Hub only · chưa card | Alias **`/csdl-so-05`** + hub `?resource=accident-summaries` (**GAP-SO05-ROUTE-01**) |
| List Kind B | N/A (chưa card) | Typed: bookNo · contractor · road · Km · year/period · tableKind · fatalities · injuries · accidentCount |
| Form Kind D | generic detail* + Col1–3 (nếu bind chung) | Typed header T-SO-05 + **3 grid** C.1 / C.2 / BS · add-row per grid (**GAP-SO05-TYPED-01** / C1/C2/BS) |
| Đường | Text free | **SearchInput** `road-route` P1 bind roadName (**GAP-CSDL-ROAD-01**) |
| `province` | LOOKUP_STATIC 5 tỉnh | **Giữ** LOOKUP_STATIC P1 (**Q-PROV**) · master = P2 |
| `contractor` | Text | **Text P1** · SearchInput org-unit **DEFER P2** (**Q-ORG**) |
| `status` | Catalog generic | LOOKUP_STATIC **`draft\|active\|closed`** (**Q-STATUS**) |
| Period | — | `periodType` month/half/year + `periodValue` mapping (**Q-PERIOD**) |
| Cause / damage | — | Cause = Number count · Damage = Number ≥0 (**Q-CAUSE** / **Q-DAMAGE**) |
| BS assess | — | Dropdown `blackspot\|potential\|under_watch` (**Q-BS-ASSESS**) |
| Grid model | — | **1 book header + 3 entry collections** (**Q-GRID-MODEL**) |
| API | prefix `…/csdl-records` · thiếu key | **Giữ prefix** · `resource=accident-summaries` · widen typed — SA / Schema_CsdlSo05 |
| Doc legacy | `/api/v1/accident-summaries` · flat AccidentSummary | **Cấm** runtime path cũ · bind qua `csdl-records` |
| Report | `rpt-tngt` | Drill source = typed so-05 · **cấm** write từ report (**GAP-RPT-SRC-CSDL-01**) |
| Import/Export | Stub | **OUT pack** (**GAP-CSDL-XLS-01**) |
| Map | — | **none** · deep-link GIS only · **cấm** canvas |

**Không đổi:** API prefix `api/v1/asset/csdl-records` · Kind B A–D · Kind D Slideout · `LinPageLayout kind="catalog"` · IdCode `SO-yyyyMMdd-nnnn` · pagination 50/100/200/500 · **cấm** ERP.* · **cấm** Guid IdCode · **cấm** merge Sổ TS / so-04.

### GAP IDs (PO · P1 trừ DEFER/OUT)

| ID | New | P1 |
|----|-----|-----|
| GAP-SO05-RES-01 | NEW catalog card + resource `accident-summaries` | **YES** |
| GAP-SO05-SPLIT-01 | Tách khỏi live Sổ 4 «(+ TNGT)» | **YES** (so-05) · peer so-04 drop label |
| GAP-SO05-TYPED-01 | Typed header + 3 grid thay detail*/col1–3 | **YES** |
| GAP-SO05-C1-01 | Grid C.1 tháng typed | **YES** |
| GAP-SO05-C2-01 | Grid C.2 6 tháng/năm | **YES** |
| GAP-SO05-BS-01 | Grid điểm đen / tiềm ẩn 12 tháng | **YES** |
| GAP-SO05-ROUTE-01 | Alias `/csdl-so-05` + hub entry | **YES** |
| GAP-SO05-FORMNO-01 | formNo=`05` · không reuse 4 | **YES** |
| GAP-CSDL-ROAD-01 | SearchInput road-route | **YES** |
| GAP-CSDL-PROV-01 | Province LOOKUP_STATIC P1 | **YES** · master P2 |
| GAP-CSDL-ORG-01 | contractor SearchInput org-unit | **DEFER P2** |
| GAP-CSDL-CUC-03 | Đóng gap cột typed Sổ 05 | **YES** (khi typed PASS) |
| GAP-CSDL-CUC-07 | Đóng khi so-04 + so-05 split PASS | **YES** so-05 side |
| GAP-CSDL-CUC-11 | LOOKUP đường chung · ROW riêng ≠ Sổ TS / so-04 | **YES** |
| GAP-RPT-SRC-CSDL-01 | Typed C.1/C.2/BS = report source READY | **YES** form READY · report pack riêng |
| GAP-CSDL-XLS-01 | Import/export sheet | **OUT pack** |

## 3. Open Q — PO resolve (autoApprove)

| Q | Decision |
|---|----------|
| **Q-PERIOD** | P1: `periodType` Dropdown **`month\|half\|year`** · `periodValue`: **month→1–12** · **half→1\|2** (H1/H2) · **year→bằng `year` header** (readonly sync) · UI: đổi periodType → reset/remap periodValue · **C.1** ưu tiên kỳ `month` · **C.2** ưu tiên `half`/`year` · BS độc lập (metric 12 tháng trên dòng) · **cấm** periodType tự do ngoài enum |
| **Q-CAUSE** | P1: `c1CauseRoad` / `c1CausePerson` / `c1CauseVehicle` = **Number integer ≥0** (số vụ theo nhóm nguyên nhân) · **không** free-text cột · mô tả bổ sung → `c1Remarks` · Design label VN «Đường / Người / Phương tiện» |
| **Q-DAMAGE** | P1: `*DamageInfra` / `*DamageVehicle` = **Number ≥0** (thiệt hại ước tính · đơn vị hiển thị Design: «triệu đồng» overlay) · **không** bắt buộc · mô tả chi tiết → Remarks · **cấm** Text-only làm DoD cột thiệt hại |
| **Q-BS-ASSESS** | P1: Dropdown LOOKUP_STATIC **`blackspot\|potential\|under_watch`** · label VN **Điểm đen · Điểm tiềm ẩn · Theo dõi** · required trên dòng BS · **cấm** free-text làm enum |
| **Q-GRID-MODEL** | P1: **1 book header + 3 entry collections** `entriesC1[]` · `entriesC2[]` · `entriesBlackSpot[]` · **không** 3 resource subtypes · SA: Schema_CsdlSo05 pair · `tableKind` = UI filter/tab focus (không tách PK) |
| **Q-SPLIT** | P1: so-05 **ship độc lập** (NEW card + typed) · **không** block typed so-04 · cùng release khuyến nghị: so-04 drop «(+ TNGT)» + so-05 card live · **GAP-CSDL-CUC-07** đóng khi **cả hai** side PASS · **cấm** field đếm xe trên so-05 |
| **Q-PROV** | **keep_static** 5 tỉnh P1 · master province = P2 |
| **Q-ORG** | **Text P1** · org-unit SearchInput = P2 (**GAP-CSDL-ORG-01**) |
| **Q-STATUS** | P1: Dropdown LOOKUP_STATIC **`draft\|active\|closed`** · label VN Nháp · Hiệu lực · Đóng |
| **Q-RPT** | Drill `rpt-tngt` **READY** sau typed form so-05 PASS · report pack riêng · **cấm** CRUD từ report · deep-link read-only OK P1 |

## 4. DoD (đo được)

1. Entry: mfeStd `/csdl-so-05` **và** hub `?resource=accident-summaries` mở cùng list typed · title VN «Sổ 05 — TNGT + điểm đen» · **không** «+ đếm xe» · back hub · **cấm** slug trên card.
2. List load BFF `GET …/csdl-records?resource=accident-summaries` — empty grid VN «Chưa có dữ liệu TNGT / điểm đen» · **cấm** fake row · **cấm** demo-json/LS SSOT.
3. Zone A: title VN · back hub · meta resource=`accident-summaries` — **cấm** Thêm mới trên A.
4. Zone B: filter 1 hàng — SearchTextInput · province · status · road SearchInput · year · periodType · tableKind · Tạo mới · Refresh · Delete · History · SchemaConfig · Import/Export stub — **search must work** · **cấm** nút Tìm riêng · filter đổi → page=1 · **cấm** wrap 2 hàng default desktop.
5. Zone C: `LinCatalogDataGrid` kéo cột ON · STT · Mã · Số quyển · Nhà thầu · Đường · Km · Năm/kỳ · Bảng · Số vụ · Chết · Thương · row menu Xem/Sửa/Copy/Xóa/Lịch sử.
6. Zone D: `LinCatalogListPagination` **50 / 100 / 200 / 500**.
7. Slideout Kind D Z1–Z3: Create/Edit/View/Copy — required header: bookNo · contractor · roadCode · kmFrom · province · year · periodType · periodValue · code IdCode `SO-` readonly · **3 grid** tabs C.1 / C.2 / Điểm đen.
8. View = `readOnly` — **cấm** Input disabled xám toàn form.
9. Grids Z2: add-row per grid · typed columns theo control-hint · **cấm** chỉ Col1–3 · **cấm** 16 hạng xe.
10. `roadCode` = SearchInput road-route — **cấm** free-text khi master READY.
11. Leave-confirm dirty · 404 detail → đóng slideout — **cấm** native alert/confirm.
12. Typography: label **13** · input D14/M16 (**GAP-TYP-01**).
13. Map: **none** trên pack — **cấm** invent canvas.
14. Peer report `rpt-tngt` read-only — **cấm** CRUD từ pack này.
15. `yarn build` / e2e / `start:std` **chỉ** Dev/QA — PO **cấm**.

## 5. Grid AC (packKind=list · HARD)

| AC | Assert |
|----|--------|
| G-01 | List render `LinCatalogDataGrid` · không crash khi empty |
| G-02 | SearchTextInput lọc mã/sổ/đường/vị trí — **không** nút Tìm riêng |
| G-03 | Filter province/status/road/year/periodType/tableKind → refetch · page=1 |
| G-04 | Sort/kéo cột default ON · STT ổn định |
| G-05 | Row menu: Xem / Sửa / Copy / Xóa / Lịch sử |
| G-06 | Pagination 50/100/200/500 · đổi size → page=1 |
| G-07 | Tạo mới → Slideout Create · Lưu → row mới trên grid |
| G-08 | Sửa → PUT · grid refresh · toast success |
| G-09 | Copy → Slideout prefill · code mới sau Lưu · **cấm** reuse IdCode |
| G-10 | Xóa soft-delete · row biến khỏi list mặc định |
| G-11 | Empty copy VN «Chưa có dữ liệu TNGT / điểm đen» |
| G-12 | 422 thiếu resource → toast · không crash |
| G-13 | Hub **có** card Sổ 05 · resource=`accident-summaries` · title không «(+ đếm xe)» |

## 6. Form AC (Kind D Slideout)

| AC | Assert |
|----|--------|
| F-01 | Z1 title theo mode C/E/V/Copy · Z3 Lưu/Hủy |
| F-02 | Header required: bookNo · contractor · roadCode · kmFrom · province · year · periodType · periodValue |
| F-03 | code readonly auto `SO-yyyyMMdd-nnnn` · **cấm** Guid · **cấm** user edit |
| F-04 | road SearchInput → bind roadName |
| F-05 | kmFrom Number * · kmTo Number optional |
| F-06 | year Integer * · periodType `month\|half\|year` * · periodValue theo Q-PERIOD * |
| F-07 | status Dropdown `draft\|active\|closed` |
| F-08 | notes Textarea optional |
| F-09 | Tabs/sections: **C.1** · **C.2** · **Điểm đen** · add-row mỗi grid |
| F-10 | C.1: c1RoadName · c1Location · c1AccidentCount · 3 cause Number · fatalities/injuries · damage Number · remarks |
| F-11 | C.2: c2RoadName · accidentCount · fatalities/injuries · damage · remarks (kỳ half/year) |
| F-12 | BS: location · Km · 12m metrics · bsAssessment enum · state/action/measures/followUp |
| F-13 | **Cấm** chỉ Col1–3 · **cấm** 16 hạng xe / TrafficCount trên form |
| F-14 | View = readOnly · **cấm** disabled xám |
| F-15 | Validation fail → inline/toast · **không** đóng slideout |
| F-16 | contractor Text P1 · **không** bắt buộc org-unit P1 |

## 7. Screens

| Screen | Route / surface | Notes |
|--------|-----------------|-------|
| List | `/csdl-so-05` | Kind B A–D · alias mfeStd |
| Hub entry | `/so-ts/csdl-so-sach?resource=accident-summaries` | Card Sổ 05 NEW · title TNGT + điểm đen |
| Form | Slideout trên list | Kind D Z1–Z3 · C/E/V/Copy · 3 grid tabs |
| Peer | deep-link so-04 · `rpt-tngt` | LOOKUP / read-only · **cấm** merge form |

**Cấm:** map canvas · report CRUD screen · Excel wizard P1 · đếm xe / 16 hạng trên so-05.

## 8. Leave / dirty

| Case | UX |
|------|-----|
| Dirty Create/Edit/Copy | `LeaveConfirmModal` trước đóng / navigate / Hủy |
| View (readOnly) | đóng thẳng · không confirm |
| Confirm discard | discard + đóng · **cấm** native `beforeunload` only |
| Save success | clear dirty · đóng hoặc giữ theo chrome hub |

## 9. Data bind (cite real-data · PO chốt)

| uiField | controlHint | P1 |
|---------|-------------|-----|
| search | SearchTextInput | YES |
| province | Dropdown LOOKUP_STATIC | YES keep_static |
| status | Dropdown `draft\|active\|closed` | YES |
| roadCode | SearchInput road-route | YES |
| year | Integer / Dropdown | YES |
| periodType | Dropdown `month\|half\|year` | YES |
| periodValue | Dropdown/Integer per Q-PERIOD | YES |
| tableKind | Dropdown `c1\|c2\|blackspot\|(all)` | YES filter |
| code | Text ro | YES |
| bookNo | Text * | YES |
| contractor | Text * | YES · org-unit P2 |
| roadName | Text ro | YES |
| kmFrom / kmTo | Number | YES (* from) |
| notes | Textarea | YES |
| entriesC1[] | grid C.1 | YES |
| entriesC2[] | grid C.2 | YES |
| entriesBlackSpot[] | grid BS | YES |
| bsAssessment | Dropdown `blackspot\|potential\|under_watch` | YES |

API: `GET/POST/PUT/DELETE /web-bff/api/v1/asset/csdl-records` (+ mirror `api/v1/asset/…`) · `resource=accident-summaries`.

## 10. Out of scope (P1)

- Import/Export Excel sheet (**GAP-CSDL-XLS-01** OUT)
- Report pack / PDF CRUD · write từ `rpt-tngt`
- Map canvas / GIS draw
- org-unit SearchInput contractor (P2)
- province master (P2)
- Feature `csdl-so-04` implement (chỉ split boundary peer)
- Merge form với Sổ TS / hang-muc / `traffic-counts`
- ERP.* / Domains/Master / invent `api/v1/infra/*` / runtime `/api/v1/accident-summaries`
- 16 hạng xe / TrafficCountSummary trên resource này

## 11. Handoff Design

| Need | Value |
|------|-------|
| control-map | Zone A–D + Slideout Z1–Z3 + 3 grid tabs từ control-hint |
| prototype | Typed list + form · hub card NEW · **cấm** Col1–3 · **cấm** đếm xe |
| reviewUrl | Prototype review URL |
| typography | label 13 · input D14/M16 |
| filter-bar | 1 row HARD · **cấm** nút Tìm · **cấm** wrap 2 hàng desktop default |
| period UX | periodType → periodValue remap · tab C.1/C.2/BS |
| BS enum | Overlay label Điểm đen / Tiềm ẩn / Theo dõi |
| split UX | Hub card so-05 · không «(+ đếm xe)» |

## 12. Handoff SA

| Need | Value |
|------|-------|
| DTO / UiSchema | Typed `accident-summaries` · Schema_CsdlSo05 · header + `entriesC1` / `entriesC2` / `entriesBlackSpot` |
| Model | 1 book + 3 collections (**Q-GRID-MODEL**) · **không** 3 subtypes |
| Period | periodType/periodValue validation per Q-PERIOD |
| Enums | status · periodType · tableKind · bsAssessment |
| API | Widen shell `csdl-records` · **NEW** resource key · **giữ** prefix Asset · **cấm** invent infra / legacy `/api/v1/accident-summaries` |
| IdCode | `SO-yyyyMMdd-nnnn` BE generate |
| Peer | **Cấm** bind TrafficCount / 16 class · **cấm** merge so-04 ROW |

## 13. DoR PO

- [x] packKind=`list` confirm
- [x] Grid AC + Form AC + Screens + Leave
- [x] Open Q resolved (autoApprove)
- [x] GAP P1/DEFER/OUT tagged
- [x] changeScope=`new_page` · resource=`accident-summaries`
- [x] contentHash khớp analy · **không** re-scan demo
- [x] handoff compact `handoff/po-compact.md`
- [x] **cấm** implement / e2e / start:std / yarn build ở role này
