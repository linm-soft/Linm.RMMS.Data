# PO — Requirement — csdl-so-02 (Sổ 02 — Nhật ký tuần đường)

| Field | Value |
|-------|-------|
| feature | `csdl-so-02` |
| this role | `po` · `/agent-po` |
| changeScope | `new_page` |
| packKind | **`list`** (Kind **B** catalog A–D + Kind **D** Slideout · typed T-SO-02) — PO confirm |
| Feature Kind | **B** list A–D · **D** Slideout Z1–Z3 · entries `pattern_inline_grid` |
| gap | `new_page` · typed book thay generic · GAP-SO02-* + GAP-CSDL-* |
| mode | `feature_context` · **no Excel** · CTX + analy + hub demo zone ref · sourceKind=`synthetic` |
| status | `done` |
| requestSource | run packet `task_0da1b0a3` · `/agent-qldb-workflow` · roleOnly=`po` · `/agent-po` |
| autoApprove | **ON** — Design/SA/Review khi tới lượt → agent tự confirm · enqueue role kế. Role PO **không** gate confirm. |
| e2eQa | **ON** — queued tới `/agent-qa*` · **cấm** e2e / `yarn start:std` / `yarn build` ở role PO |
| prior · data_analy | status=`done`/`confirmed` · `specs/_data-analy/features/csdl-so-02-control-hint.md` · `csdl-so-02-real-data.md` · contentHash `sha256:70538d9c9588d335aa43fd5a1fe28433d1138960d5954c5a7ef4cff33a5bd1c3` · headerFingerprint `sha256:5da56778e38ecc53807d424082520372c7bbed355257bdacfa0457dba0036e3c` · analy `task_1c1e0895` · **cấm** re-scan demo (**GAP-PO-DEMO-RESCAN-01**) |
| productRoot | `D:/AI-QLBD/Linm.RMMS.Data` |
| mfe | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Asset` · alias **`/csdl-so-02`** · hub **`/so-ts/csdl-so-sach?resource=patrol-logs`** |
| mfeStdUrl | `http://localhost:9301/csdl-so-02` |
| hubDeepLink | `http://localhost:9301/so-ts/csdl-so-sach?resource=patrol-logs` |
| backend | `D:/AI-QLBD/Linm.RMMS.WebService` · domain **Asset** · **`api/v1/asset/csdl-records?resource=patrol-logs`** · **cấm ERP.*** · **cấm** invent `api/v1/infra/*` · **cấm** `api/v1/so-ts/*` |
| domain | **Asset** |
| resource | `patrol-logs` (**giữ** key) |
| formNo | `02` · title VN **Nhật ký tuần đường** |
| IdCode | `SO-yyyyMMdd-nnnn` · **cấm** Guid |
| be_repo_confirm | `approve` (`Linm.RMMS.WebService`) |
| ui_repo_confirm | `approve` (`Linm.Web.RMMS.Asset`) |
| updatedAt | `2026-09-05T17:20:00.000Z` |
| taskId | `task_0da1b0a3` · analy `task_1c1e0895` |
| skillVersion | `2026.08.25.01` |
| workflowVersion | `2026.09.01.02` |
| rulesVersion | `2026.08.31.2` |

## 1. Goal

Chốt **new_page** typed **Sổ 02 — Nhật ký tuần đường** trên resource `patrol-logs`: Kind B list + Kind D Slideout CRUD · header T-SO-02 + entries typed (giờ·Km·thời tiết·XL·ký·ghi chú·sketch/media) · **cấm** DoD chỉ 3 ô `detail*` / `col1–3`.

Persona: Khu QLĐB · Hạt trưởng · NV tuần đường · Nhà thầu BDTX.

**packKind confirm:** `list` (data-analy đề xuất · PO chốt). **Không** report pack · **không** Kind F map canvas · Import/Export Excel **OUT pack**.

**≠** Sổ TS `so-ts-*` (deep-link hub only) · ≠ hub Kind G shell `csdl-so-sach` (giữ entry; alias mfeStd riêng).

**Cấm ERP.*** · **cấm** `api/v1/rmms/*` · **cấm** invent `api/v1/infra/*` · **cấm** demo-json / localStorage SSOT · **cấm** re-scan demo HTML (**GAP-PO-DEMO-RESCAN-01**).

## 2. Current → New (`new_page` · REQUIRED)

Nguồn SSOT: control-hint + real-data §A+§B · `analyzedAt=2026-09-05T17:10:00.000Z` · contentHash khớp STATUS · **không** crawl demo/CTX lại.

| Layer | Current (live) | New (PO chốt) |
|-------|----------------|---------------|
| Entry | Hub deep-link `?resource=patrol-logs` only | Alias **`/csdl-so-02`** + hub entry (**GAP-SO02-ROUTE-01**) |
| Hub label | Live «Sổ 1» | Title/card **«Sổ 02 — Nhật ký tuần đường»** · key `patrol-logs` giữ (**Q-FORMNO** / **GAP-SO02-FORMNO-01**) |
| List Kind B | Generic cols · filter chrome | Typed cols: bookNo · contractor · road · Km · NV tuần · period · province · status |
| Form Kind D | 3 ô `detail*` + entries Col1–3 | Typed header T-SO-02 + entries typed + sketch/media (**GAP-SO02-TYPED-01** / **GAP-CSDL-CUC-03**) |
| `roadCode`/`roadName` | Text free | **SearchInput** `road-route` filter + form (**GAP-CSDL-ROAD-01**) |
| `province` | LOOKUP_STATIC 5 tỉnh | **Giữ** LOOKUP_STATIC P1 (**Q-PROV**) · master = P2 |
| `contractor` / `manageUnit` | Text | **Text P1** · SearchInput partner-unit / org-unit **DEFER P2** (**Q-CONTRACTOR** / **GAP-CSDL-ORG-01**) |
| `status` | Catalog tot/tb/kem/hong | **Giữ** LOOKUP_STATIC `tot\|tb\|kem\|hong` P1 (**Q-STATUS**) |
| Sketch/media | Không typed | `sketchRef` FileRef + `mediaIds[]` FileMulti via FileService · optional (**Q-SKETCH** / **GAP-SO02-SKETCH-01**) |
| API | `…/csdl-records?resource=patrol-logs` shell | **Giữ prefix** · widen typed payload — SA / Schema_CsdlSo02 |
| Import/Export | Stub | **OUT pack** (**GAP-CSDL-XLS-01**) |
| Map | — | **none** · deep-link GIS only · **cấm** canvas |

**Không đổi:** API prefix `api/v1/asset/csdl-records` · resource key `patrol-logs` · Kind B A–D · Kind D Slideout · `LinPageLayout kind="catalog"` · IdCode `SO-yyyyMMdd-nnnn` · pagination 50/100/200/500 · **cấm** ERP.* · **cấm** Guid IdCode · **cấm** merge Sổ TS.

### GAP IDs (PO · P1 trừ DEFER/OUT)

| ID | New | P1 |
|----|-----|-----|
| GAP-SO02-TYPED-01 | Typed header + entries thay detail*/col1–3 | **YES** |
| GAP-SO02-ROUTE-01 | Alias `/csdl-so-02` + hub entry | **YES** |
| GAP-SO02-FORMNO-01 | Label Sổ 02 · key patrol-logs giữ | **YES** |
| GAP-SO02-SKETCH-01 | sketchRef + mediaIds FileService | **YES** (optional) |
| GAP-CSDL-ROAD-01 | SearchInput road-route | **YES** |
| GAP-CSDL-PROV-01 | Province LOOKUP_STATIC P1 | **YES** · master P2 |
| GAP-CSDL-ORG-01 | contractor/manageUnit SearchInput | **DEFER P2** |
| GAP-CSDL-CUC-03 | Đóng gap cột typed Sổ 02 | **YES** (khi typed PASS) |
| GAP-RPT-SRC-CSDL-01 | Typed entries = report source | **YES** form READY · report pack riêng |
| GAP-CSDL-XLS-01 | Import/export sheet | **OUT pack** |

## 3. Open Q — PO resolve (autoApprove)

| Q | Decision |
|---|----------|
| **Q-FORMNO** | P1: title/card/docs = **«Sổ 02 — Nhật ký tuần đường»** · resource key **`patrol-logs` giữ** · hub rename cùng release typed page (T-REN-01 theo dõi sổ còn lại) |
| **Q-STATUS** | P1: Dropdown LOOKUP_STATIC **`tot\|tb\|kem\|hong`** (tình trạng đoạn/đường tuần) · **cấm** invent book-workflow enum |
| **Q-SKETCH** | `sketchRef` **optional** mỗi dòng · `mediaIds` **optional** · max **10** file/entry · FileService only |
| **Q-PROV** | **keep_static** 5 tỉnh P1 · master province = P2 |
| **Q-CONTRACTOR** | **Text P1** · partner-unit SearchInput = P2 (cùng GAP-CSDL-ORG-01) |

## 4. DoD (đo được)

1. Entry: mfeStd `/csdl-so-02` **và** hub `?resource=patrol-logs` mở cùng list typed · title VN «Sổ 02 — Nhật ký tuần đường» · back hub · **cấm** slug trên card.
2. List load BFF `GET …/csdl-records?resource=patrol-logs` — empty grid VN «Chưa có nhật ký tuần đường» · **cấm** fake row · **cấm** demo-json/LS SSOT.
3. Zone A: title VN · back hub · meta resource=`patrol-logs` — **cấm** Thêm mới trên A.
4. Zone B: filter 1 hàng — SearchTextInput · province · status · road SearchInput · fromDate · toDate · Tạo mới · Refresh · Delete · History · SchemaConfig · Import/Export stub — **search must work** · **cấm** nút Tìm riêng · filter đổi → page=1.
5. Zone C: `LinCatalogDataGrid` kéo cột ON · STT · Mã · Số quyển · Nhà thầu · Đường · Km · NV tuần · Kỳ · Tỉnh · TT · row menu Xem/Sửa/Copy/Xóa/Lịch sử.
6. Zone D: `LinCatalogListPagination` **50 / 100 / 200 / 500**.
7. Slideout Kind D Z1–Z3: Create/Edit/View/Copy — required: bookNo · contractor · roadCode · kmFrom · patrolStaff · periodStart · province · ≥1 entry với eventAt · locationKm · weatherEvent · code IdCode `SO-` readonly.
8. View = `readOnly` — **cấm** Input disabled xám toàn form.
9. Entries `pattern_inline_grid` add/remove · typed cols (eventAt · locationKm · weatherEvent · onSiteAction · remarkSign · note · sketchRef · mediaIds) — **cấm** chỉ Col1–3.
10. Sketch/media = FileService (`integrate-file-upload-web`) — **cấm** invent file API · upload fail → toast · giữ draft.
11. `roadCode` = SearchInput road-route bind `roadName` — **cấm** free-text khi master READY.
12. Leave-confirm dirty · toast 4xx/5xx · 404 detail → đóng slideout — **cấm** native alert/confirm.
13. Typography: label **13** · input D14/M16 (**GAP-TYP-01**).
14. Map: **none** trên pack — **cấm** invent canvas.
15. `yarn build` / e2e / `start:std` **chỉ** Dev/QA — PO **cấm**.

## 5. Grid AC (packKind=list · HARD)

| AC | Assert |
|----|--------|
| G-01 | List render `LinCatalogDataGrid` · không crash khi empty |
| G-02 | SearchTextInput lọc mã/sổ/đường/NV — **không** nút Tìm riêng |
| G-03 | Filter province/status/road/from/to → refetch · page=1 |
| G-04 | Sort/kéo cột default ON · STT ổn định |
| G-05 | Row menu: Xem / Sửa / Copy / Xóa / Lịch sử |
| G-06 | Pagination 50/100/200/500 · đổi size → page=1 |
| G-07 | Tạo mới → Slideout Create · Lưu → row mới trên grid |
| G-08 | Soft-delete → row biến khỏi list active · toast OK |
| G-09 | 422 thiếu `resource` → toast · không blank page |
| G-10 | Empty copy VN đúng «Chưa có nhật ký tuần đường» |

## 6. Screens

| Screen | Route / surface | Notes |
|--------|-----------------|-------|
| List | `/csdl-so-02` | Kind B A–D · `LinPageLayout kind="catalog"` |
| Hub entry | `/so-ts/csdl-so-sach?resource=patrol-logs` | Card title Sổ 02 · open-resource |
| Form C/E/V/Copy | Kind D Slideout Z1–Z3 | Footer Lưu/Hủy · leave-confirm |
| Schema | `LinCatalogUiSchemaEditorModal` | catalogKind `patrol-logs` |
| History | `LinCatalogHistoryModal` | **cấm** invent History API path |
| Sketch/media | File upload zone trong entry row | FileService |

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
| contractor | Nhà thầu | Text | * | YES · SearchInput P2 |
| roadCode | Mã đường | SearchInput road-route | * | YES |
| roadName | Tên đường | Text display | * | YES (bind) |
| kmFrom | Lý trình từ | Number | * | YES |
| kmTo | Lý trình đến | Number | | YES |
| patrolStaff | NV tuần đường | Text | * | YES |
| periodStart | Ngày bắt đầu | Date | * | YES |
| periodEnd | Ngày kết thúc | Date | | YES |
| province | Tỉnh | Dropdown | * | YES |
| manageUnit | ĐV QL | Text | | YES · org-unit P2 |
| status | Tình trạng | Dropdown | | YES |
| notes | Ghi chú sổ | Textarea | | YES |

### Entries[] inline grid

| key | Label | controlHint | req | P1 |
|-----|-------|-------------|-----|-----|
| lineNo | STT | Integer ro | auto | YES |
| eventAt | Giờ / ngày | DateTime | * | YES |
| locationKm | Vị trí / Km SC-VP | Text | * | YES |
| weatherEvent | Thời tiết + diễn biến | Textarea | * | YES |
| onSiteAction | Xử lý tại chỗ | Textarea | | YES |
| remarkSign | Nhận xét + ký | Text | | YES |
| note | Ghi chú dòng | Text | | YES |
| sketchRef | Sketch | FileRef | opt | YES |
| mediaIds | Ảnh / video | FileMulti max 10 | opt | YES |

## 9. API / bind (cite real-data · SA widen)

| Op | Path |
|----|------|
| List | `GET /web-bff/api/v1/asset/csdl-records?resource=patrol-logs` |
| Detail | `GET /web-bff/api/v1/asset/csdl-records/{id}` |
| Create | `POST /web-bff/api/v1/asset/csdl-records` + typed body |
| Update | `PUT /web-bff/api/v1/asset/csdl-records/{id}` |
| Delete | `DELETE …/{id}` soft |

FE cite: `services/csdlSoSach/endpoint.ts` `BASE=/asset/csdl-records` — typed page **reuse** BASE. SA: Schema_CsdlSo02 · typed DTO/UiSchema.

## 10. CTX / DEM inventory (hash skip — **không** re-crawl)

| ID | Path | Loại |
|----|------|------|
| CTX | `docs/context/features/csdl-so-02.md` | context |
| CTRL | `specs/_data-analy/features/csdl-so-02-control-hint.md` | analy |
| REAL | `specs/_data-analy/features/csdl-so-02-real-data.md` | analy |
| CLUSTER | `specs/_data-analy/csdl-cuc-2026/ANALYSIS-AND-TASKS.md` § T-SO-02 | analy |
| DEMO | `Linm.RMMS.Demo/.../csdl-so-sach-demo.html` → `asset/csdl-so-sach.html` | UI chrome only |
| DOMAIN | `Linm.RMMS.WebService/docs/DOMAIN-MAP.md` | Asset |

contentHash: `sha256:70538d9c9588d335aa43fd5a1fe28433d1138960d5954c5a7ef4cff33a5bd1c3`

## 11. Out of scope / Cấm

- ERP.* / Domains/Master / invent infra / so-ts API
- Report pack / Kind F map canvas / Excel full wizard (OUT)
- Guid IdCode · merge Sổ TS · parent JSON-only DoD
- Demo/localStorage SSOT · re-scan demo ở PO
- yarn build / e2e / start:std ở role PO
- contractor/manageUnit SearchInput P1 (DEFER P2)
- Master province P1 (DEFER P2)

## 12. Handoff

| Next | Need |
|------|------|
| **Design** | control-map · prototype typed list+slideout · reviewUrl · filter-bar HARD |
| **SA** | typed DTO · Schema_CsdlSo02 · FileService bind · migration pair |
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
