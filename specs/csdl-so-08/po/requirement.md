# PO — Requirement — csdl-so-08 (Sổ 08 — Kết quả BDTX)

| Field | Value |
|-------|-------|
| feature | `csdl-so-08` |
| this role | `po` · `/agent-po` |
| changeScope | `new_page` |
| packKind | **`list`** (Kind **B** catalog A–D + Kind **D** Slideout · typed T-SO-08) — PO confirm |
| Feature Kind | **B** list A–D · **D** Slideout Z1–Z3 · entries `pattern_inline_grid` |
| gap | `new_page` · typed book thay generic · GAP-SO08-* + GAP-CSDL-* |
| mode | `feature_context` · **no Excel** · CTX + analy + hub demo zone ref · sourceKind=`synthetic` |
| status | `done` |
| requestSource | run packet `task_2415c723` · `/agent-qldb-workflow` · roleOnly=`po` · `/agent-po` |
| autoApprove | **ON** — Design/SA/Review khi tới lượt → agent tự confirm · enqueue role kế. Role PO **không** gate confirm. |
| e2eQa | **ON** — queued tới `/agent-qa*` · **cấm** e2e / `yarn start:std` / `yarn build` ở role PO |
| prior · data_analy | status=`done`/`confirmed` · `specs/_data-analy/features/csdl-so-08-control-hint.md` · `csdl-so-08-real-data.md` · contentHash `sha256:46cd2b05ce4a396d08fa326183d9a17603afc381fbd00669155c13703a4e3146` · headerFingerprint `sha256:e6fd49c647b1f4435fe5110097964fa15b4eeba116926d885297b81d2e373a02` · analy `task_aa2658e0` · **cấm** re-scan demo (**GAP-PO-DEMO-RESCAN-01**) |
| productRoot | `D:/AI-QLBD/Linm.RMMS.Data` |
| mfe | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Asset` · alias **`/csdl-so-08`** · hub **`/so-ts/csdl-so-sach?resource=maintenance-work-logs`** |
| mfeStdUrl | `http://localhost:9301/csdl-so-08` |
| hubDeepLink | `http://localhost:9301/so-ts/csdl-so-sach?resource=maintenance-work-logs` |
| backend | `D:/AI-QLBD/Linm.RMMS.WebService` · domain **Asset** · **`api/v1/asset/csdl-records?resource=maintenance-work-logs`** · **cấm ERP.*** · **cấm** invent `api/v1/infra/*` · **cấm** `api/v1/so-ts/*` |
| domain | **Asset** |
| resource | `maintenance-work-logs` (**giữ** key) |
| formNo | `08` · title VN **Kết quả BDTX** · live hub **Sổ 8** (khớp Cục) |
| IdCode | `SO-yyyyMMdd-nnnn` · **cấm** Guid |
| be_repo_confirm | `approve` (`Linm.RMMS.WebService`) |
| ui_repo_confirm | `approve` (`Linm.Web.RMMS.Asset`) |
| updatedAt | `2026-09-05T18:45:00.000Z` |
| taskId | `task_2415c723` · analy `task_aa2658e0` |
| skillVersion | `2026.08.25.01` |
| workflowVersion | `2026.09.01.02` |
| rulesVersion | `2026.08.31.2` |

## 1. Goal

Chốt **new_page** typed **Sổ 08 — Kết quả BDTX** (TT 41 PL IV Mẫu 2 · 5 cột) trên resource `maintenance-work-logs`: Kind B list + Kind D Slideout CRUD · header T-SO-08 (thầu · VP · Khu · tuyến Km · kỳ) + entries typed (việc · Km từ–đến · giải pháp · kết quả chính · ghi chú) · **cấm** DoD chỉ 3 ô `detail*` / `col1–3`.

Persona: Khu QLĐB · Văn phòng · Nhà thầu BDTX · Hạt trưởng.

**packKind confirm:** `list` (data-analy đề xuất · PO chốt). **Không** report pack · **không** Kind F map canvas · Import/Export Excel **OUT pack** · **không** media bắt buộc (T-FILE-01 = Sổ 1/2/6).

**≠** Sổ TS `so-ts-*` (deep-link hub only) · ≠ hub Kind G shell `csdl-so-sach` (giữ entry; alias mfeStd riêng).

**Cấm ERP.*** · **cấm** `api/v1/rmms/*` · **cấm** invent `api/v1/infra/*` · **cấm** demo-json / localStorage SSOT · **cấm** re-scan demo HTML (**GAP-PO-DEMO-RESCAN-01**).

## 2. Current → New (`new_page` · REQUIRED)

Nguồn SSOT: control-hint + real-data §A+§B · `analyzedAt=2026-09-05T18:36:01.000Z` · contentHash khớp STATUS · **không** crawl demo/CTX lại.

| Layer | Current (live) | New (PO chốt) |
|-------|----------------|---------------|
| Entry | Hub deep-link `?resource=maintenance-work-logs` only | Alias **`/csdl-so-08`** + hub entry (**GAP-SO08-ROUTE-01**) |
| Hub label | Live «Sổ 8» | Title/card **«Sổ 08 — Kết quả BDTX»** · key `maintenance-work-logs` giữ (**GAP-SO08-FORMNO-01**) |
| List Kind B | Generic cols · filter chrome | Typed cols: bookNo · contractor · road · Km · officeUnit · zoneUnit · period · province · status |
| Form Kind D | 3 ô `detail*` + entries Col1–3 | Typed header T-SO-08 + entries 5 cột + STT (**GAP-SO08-TYPED-01** / **GAP-CSDL-CUC-03**) |
| `roadCode`/`roadName` | Text free | **SearchInput** `road-route` filter + form (**GAP-CSDL-ROAD-01**) |
| `province` | LOOKUP_STATIC 5 tỉnh | **Giữ** LOOKUP_STATIC P1 (**Q-PROV**) · master = P2 |
| `contractor` / `manageUnit` / `officeUnit` / `zoneUnit` | Text | **Text P1** · SearchInput org/partner **DEFER P2** (**Q-ORG** / **Q-VP-KHU** / **GAP-CSDL-ORG-01**) |
| `status` | Catalog tot/tb/kem/hong | **Giữ** LOOKUP_STATIC `tot\|tb\|kem\|hong` P1 (**Q-STATUS**) |
| Entries Km | Col generic | Cặp **`kmFrom`/`kmTo`** (**Q-ENTRY-KM**) |
| Media | không | **không** bắt buộc P1 |
| API | `…/csdl-records?resource=maintenance-work-logs` shell | **Giữ prefix** · widen typed payload — SA / Schema_CsdlSo08 |
| Import/Export | Stub | **OUT pack** (**GAP-CSDL-XLS-01**) |
| Map | — | **none** · deep-link GIS only · **cấm** canvas |

**Không đổi:** API prefix `api/v1/asset/csdl-records` · resource key `maintenance-work-logs` · Kind B A–D · Kind D Slideout · `LinPageLayout kind="catalog"` · IdCode `SO-yyyyMMdd-nnnn` · pagination 50/100/200/500 · **cấm** ERP.* · **cấm** Guid IdCode · **cấm** merge Sổ TS.

### GAP IDs (PO · P1 trừ DEFER/OUT)

| ID | New | P1 |
|----|-----|-----|
| GAP-SO08-TYPED-01 | Typed header + entries 5 cột thay detail*/col1–3 | **YES** |
| GAP-SO08-ROUTE-01 | Alias `/csdl-so-08` + hub entry | **YES** |
| GAP-SO08-FORMNO-01 | Label Sổ 08 · key maintenance-work-logs giữ | **YES** |
| GAP-CSDL-ROAD-01 | SearchInput road-route | **YES** |
| GAP-CSDL-PROV-01 | Province LOOKUP_STATIC P1 | **YES** · master P2 |
| GAP-CSDL-ORG-01 | contractor/manageUnit/VP/Khu SearchInput | **DEFER P2** |
| GAP-CSDL-CUC-03 | Đóng gap cột typed Sổ 08 | **YES** (khi typed PASS) |
| GAP-RPT-SRC-CSDL-01 | Typed entries = report source | **YES** form READY · report pack riêng |
| GAP-CSDL-XLS-01 | Import/export sheet BDTX | **OUT pack** |

## 3. Open Q — PO resolve (autoApprove)

| Q | Decision |
|---|----------|
| **Q-VP-KHU** | P1: `officeUnit` / `zoneUnit` = **Text** · org-unit SearchInput = **P2** · **không** enum Khu cố định P1 |
| **Q-STATUS** | P1: Dropdown LOOKUP_STATIC **`tot\|tb\|kem\|hong`** · **cấm** invent book-workflow enum |
| **Q-PROV** | **keep_static** 5 tỉnh P1 · master province = P2 |
| **Q-ORG** | **Text P1** cho `contractor` / `manageUnit` · partner-unit / org-unit SearchInput = P2 (**GAP-CSDL-ORG-01**) |
| **Q-ENTRY-KM** | P1: cặp **`kmFrom` / `kmTo`** trên mỗi dòng entry (Word Mẫu 2) · **cấm** gộp 1 ô `kmAt` |

## 4. DoD (đo được)

1. Entry: mfeStd `/csdl-so-08` **và** hub `?resource=maintenance-work-logs` mở cùng list typed · title VN «Sổ 08 — Kết quả BDTX» · back hub · **cấm** slug trên card.
2. List load BFF `GET …/csdl-records?resource=maintenance-work-logs` — empty grid VN «Chưa có dữ liệu» · **cấm** fake row · **cấm** demo-json/LS SSOT.
3. Zone A: title VN · back hub · meta resource=`maintenance-work-logs` — **cấm** Thêm mới trên A.
4. Zone B: filter 1 hàng — SearchTextInput · province · status · road SearchInput · fromDate · toDate · Tạo mới · Refresh · Delete · History · SchemaConfig · Import/Export stub — **search must work** · **cấm** nút Tìm riêng · filter đổi → page=1.
5. Zone C: `LinCatalogDataGrid` kéo cột ON · STT · Mã · Số quyển · Nhà thầu · Đường · Km · VP · Khu · Kỳ · Tỉnh · TT · row menu Xem/Sửa/Copy/Xóa/Lịch sử.
6. Zone D: `LinCatalogListPagination` **50 / 100 / 200 / 500**.
7. Slideout Kind D Z1–Z3: Create/Edit/View/Copy — required: bookNo · contractor · roadCode · kmFrom · officeUnit · zoneUnit · periodStart · province · ≥1 entry với workItem · kmFrom · solution · mainResult · code IdCode `SO-` readonly.
8. View = `readOnly` — **cấm** Input disabled xám toàn form.
9. Entries `pattern_inline_grid` add/remove · typed 5 cột + STT (workItem · kmFrom/To · solution · mainResult · note) — **cấm** chỉ Col1–3.
10. `roadCode` = SearchInput road-route bind `roadName` — **cấm** free-text khi master READY.
11. Leave-confirm dirty · toast 4xx/5xx · 404 detail → đóng slideout — **cấm** native alert/confirm.
12. Typography: label **13** · input D14/M16 (**GAP-TYP-01**).
13. Map: **none** trên pack — **cấm** invent canvas.
14. Media: **không** bắt buộc P1.
15. `yarn build` / e2e / `start:std` **chỉ** Dev/QA — PO **cấm**.

## 5. Grid AC (packKind=list · HARD)

| AC | Assert |
|----|--------|
| G-01 | List render `LinCatalogDataGrid` · không crash khi empty |
| G-02 | SearchTextInput lọc mã/sổ/đường/thầu/việc — **không** nút Tìm riêng |
| G-03 | Filter province/status/road/from/to → refetch · page=1 |
| G-04 | Sort/kéo cột default ON · STT ổn định |
| G-05 | Row menu: Xem / Sửa / Copy / Xóa / Lịch sử |
| G-06 | Pagination 50/100/200/500 · đổi size → page=1 |
| G-07 | Tạo mới → Slideout Create · Lưu → row mới trên grid |
| G-08 | Soft-delete → row biến khỏi list active · toast OK |
| G-09 | 422 thiếu `resource` → toast · không blank page |
| G-10 | Empty copy VN đúng «Chưa có dữ liệu» |

## 6. Screens

| Screen | Route / surface | Notes |
|--------|-----------------|-------|
| List | `/csdl-so-08` | Kind B A–D · `LinPageLayout kind="catalog"` |
| Hub entry | `/so-ts/csdl-so-sach?resource=maintenance-work-logs` | Card title Sổ 08 · open-resource |
| Form C/E/V/Copy | Kind D Slideout Z1–Z3 | Footer Lưu/Hủy · leave-confirm |
| Schema | `LinCatalogUiSchemaEditorModal` | catalogKind `maintenance-work-logs` |
| History | `LinCatalogHistoryModal` | **cấm** invent History API path |

## 7. Leave / dirty

| Case | UX |
|------|-----|
| Slideout dirty + Hủy / X / Esc / route change | `LeaveConfirmModal` · confirm → discard · cancel → stay |
| View mode | Không leave-confirm (readOnly) |
| Save success | Đóng slideout · refresh list · toast |
| Save validation fail | Ở lại · toast field |

## 8. Control map (PO → Design chốt)

### Filter (Zone B)

| key | Label | controlHint | P1 |
|-----|-------|-------------|-----|
| search | Tìm kiếm | SearchTextInput | YES |
| province | Tỉnh/TP | Dropdown LOOKUP_STATIC | YES |
| status | Tình trạng | Dropdown tot/tb/kem/hong | YES |
| roadCode | Tên đường | SearchInput road-route | YES |
| fromDate | Từ ngày | Date | YES |
| toDate | Đến ngày | Date | YES |

### Form header (Z2)

| key | Label | controlHint | req | P1 |
|-----|-------|-------------|-----|-----|
| code | Mã | Text ro | auto | YES |
| bookNo | Số quyển / sổ | Text | * | YES |
| contractor | Nhà thầu | Text | * | YES · SearchInput partner-unit P2 |
| roadCode | Mã đường | SearchInput road-route | * | YES |
| roadName | Tên đường | Text display | * | YES (bind) |
| kmFrom | Lý trình từ | Number | * | YES |
| kmTo | Lý trình đến | Number | | YES |
| officeUnit | Văn phòng (VP) | Text | * | YES · org-unit P2 |
| zoneUnit | Khu | Text | * | YES · org-unit P2 |
| periodStart | Ngày bắt đầu | Date | * | YES |
| periodEnd | Ngày kết thúc | Date | | YES |
| province | Tỉnh | Dropdown | * | YES |
| manageUnit | ĐV QL | Text | | YES · org-unit P2 |
| status | Tình trạng | Dropdown | | YES |
| notes | Ghi chú sổ | Textarea | | YES |

### Entries[] inline grid (TT 41 PL IV Mẫu 2 · 5 cột + STT)

| key | Label | controlHint | req | P1 |
|-----|-------|-------------|-----|-----|
| lineNo | STT | Integer ro | auto | YES |
| workItem | Việc thực hiện | Text | * | YES |
| kmFrom | Km từ | Number | * | YES |
| kmTo | Km đến | Number | | YES |
| solution | Giải pháp | Textarea | * | YES |
| mainResult | Kết quả chính | Textarea | * | YES |
| note | Ghi chú | Text | | YES |

## 9. API / bind (cite real-data · SA widen)

| Op | Path |
|----|------|
| List | `GET /web-bff/api/v1/asset/csdl-records?resource=maintenance-work-logs` |
| Detail | `GET /web-bff/api/v1/asset/csdl-records/{id}` |
| Create | `POST /web-bff/api/v1/asset/csdl-records` + typed body |
| Update | `PUT /web-bff/api/v1/asset/csdl-records/{id}` |
| Delete | `DELETE …/{id}` soft |

FE cite: `services/csdlSoSach/endpoint.ts` `BASE=/asset/csdl-records` — typed page **reuse** BASE. SA: Schema_CsdlSo08 · typed DTO/UiSchema.

## 10. CTX / DEM inventory (hash skip — **không** re-crawl)

| ID | Path | Loại |
|----|------|------|
| CTX | `docs/context/features/csdl-so-08.md` | context |
| CTRL | `specs/_data-analy/features/csdl-so-08-control-hint.md` | analy |
| REAL | `specs/_data-analy/features/csdl-so-08-real-data.md` | analy |
| CLUSTER | `specs/_data-analy/csdl-cuc-2026/ANALYSIS-AND-TASKS.md` § T-SO-08 | analy |
| DEMO | `Linm.RMMS.Demo/.../csdl-so-sach-demo.html` → `asset/csdl-so-sach.html` | UI chrome only |
| DOMAIN | `Linm.RMMS.WebService/docs/DOMAIN-MAP.md` | Asset |

contentHash: `sha256:46cd2b05ce4a396d08fa326183d9a17603afc381fbd00669155c13703a4e3146`

## 11. Out of scope / Cấm

- ERP.* / Domains/Master / invent infra / so-ts API
- Report pack / Kind F map canvas / Excel full wizard (OUT)
- Guid IdCode · merge Sổ TS · parent JSON-only DoD
- Demo/localStorage SSOT · re-scan demo ở PO
- yarn build / e2e / start:std ở role PO
- org/partner SearchInput P1 (DEFER P2)
- Master province P1 (DEFER P2)
- Media bắt buộc / FileService zone P1

## 12. Handoff

| Next | Need |
|------|------|
| **Design** | control-map · prototype typed list+slideout · reviewUrl · filter-bar HARD |
| **SA** | typed DTO · Schema_CsdlSo08 · migration pair |
| **TL/Dev** | implement alias page + typed form · reuse BASE |
| **QA** | Grid AC + form AC + e2e queued |

## DoR PO

- [x] packKind=`list` confirm
- [x] changeScope=`new_page` · Current→New
- [x] Grid AC · Screens · Leave
- [x] Open Q resolved (autoApprove)
- [x] GAP P1/DEFER/OUT table
- [x] Control map + API cite real-data
- [x] handoff compact
- [x] **cấm** implement / e2e / demo re-scan
