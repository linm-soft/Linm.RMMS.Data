# PO — Requirement — csdl-so-09 (Sổ 09 — QL vận hành ITS/ETC/KSTTX)

| Field | Value |
|-------|-------|
| feature | `csdl-so-09` |
| this role | `po` · `/agent-po` |
| changeScope | `new_page` |
| packKind | **`list`** (Kind **B** catalog A–D + Kind **D** Slideout · typed T-SO-09) — PO confirm |
| Feature Kind | **B** list A–D · **D** Slideout Z1–Z3 · entries `pattern_inline_grid` |
| gap | `new_page` · seed resource + typed book · GAP-SO09-* + GAP-CSDL-* |
| mode | `feature_context` · **no Excel** · CTX + analy + hub demo zone ref · sourceKind=`synthetic` |
| status | `done` |
| requestSource | run packet `task_fedb10cb` · `/agent-qldb-workflow` · roleOnly=`po` · `/agent-po` |
| autoApprove | **ON** — Design/SA/Review khi tới lượt → agent tự confirm · enqueue role kế. Role PO **không** gate confirm. |
| e2eQa | **ON** — queued tới `/agent-qa*` · **cấm** e2e / `yarn start:std` / `yarn build` ở role PO |
| prior · data_analy | status=`done`/`confirmed` · `specs/_data-analy/features/csdl-so-09-control-hint.md` · `csdl-so-09-real-data.md` · contentHash `sha256:1cbd0cd26f977a518c29457acddd7c893fa56fe9bd750ac1ad6a15b0976d03dc` · headerFingerprint `sha256:c00fdbdda898129b6408c35f9fb57cd2cc918356208b1067310d40c8f3cbefd9` · analy `task_8076c138` · **cấm** re-scan demo (**GAP-PO-DEMO-RESCAN-01**) |
| productRoot | `D:/AI-QLBD/Linm.RMMS.Data` |
| mfe | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Asset` · alias **`/csdl-so-09`** · hub **`/so-ts/csdl-so-sach?resource=its-ops-logs`** |
| mfeStdUrl | `http://localhost:9301/csdl-so-09` |
| hubDeepLink | `http://localhost:9301/so-ts/csdl-so-sach?resource=its-ops-logs` |
| backend | `D:/AI-QLBD/Linm.RMMS.WebService` · domain **Asset** · **`api/v1/asset/csdl-records?resource=its-ops-logs`** · **cấm ERP.*** · **cấm** invent `api/v1/infra/*` · **cấm** `api/v1/so-ts/*` |
| domain | **Asset** |
| resource | `its-ops-logs` (**NEW** · seed catalog — **GAP-SO09-RES-01** / **GAP-CSDL-CUC-05**) |
| formNo | `09` · title VN **QL vận hành ITS/ETC/KSTTX** · **≠** live Biểu `boundary-markers` formNo 9 |
| IdCode | `SO-yyyyMMdd-nnnn` · **cấm** Guid |
| be_repo_confirm | `approve` (`Linm.RMMS.WebService`) |
| ui_repo_confirm | `approve` (`Linm.Web.RMMS.Asset`) |
| updatedAt | `2026-09-05T23:50:00.000Z` |
| taskId | `task_fedb10cb` · analy `task_8076c138` |
| skillVersion | `2026.08.25.01` |
| workflowVersion | `2026.09.01.02` |
| rulesVersion | `2026.08.31.2` |

## 1. Goal

Chốt **new_page** typed **Sổ 09 — QL vận hành ITS/ETC/KSTTX** (T-SO-09 · ca trực thiết bị · link Biểu 14) trên resource `its-ops-logs`: Kind B list + Kind D Slideout CRUD · header T-SO-09 (thầu · Km · kỳ · linkBieu14) + entries typed 9 cột ca trực + STT · **cấm** DoD chỉ 3 ô `detail*` / `col1–3`.

Persona: Khu QLĐB · ĐV vận hành ITS/ETC/KSTTX · người trực ca · Hạt trưởng.

**packKind confirm:** `list` (data-analy đề xuất · PO chốt). **Không** report pack · **không** Kind F map canvas · Import/Export Excel **OUT pack** · **không** media bắt buộc (T-FILE-01 = Sổ 1/2/6).

**≠** Sổ TS `so-ts-*` (deep-link hub only) · ≠ Biểu 14 `its-systems` (LOOKUP/deep-link · **cấm** merge ROW) · ≠ Biểu formNo 9 `boundary-markers` · ≠ hub Kind G shell `csdl-so-sach` (giữ entry; alias mfeStd riêng).

**Cấm ERP.*** · **cấm** `api/v1/rmms/*` · **cấm** invent `api/v1/infra/*` · **cấm** demo-json / localStorage SSOT · **cấm** re-scan demo HTML (**GAP-PO-DEMO-RESCAN-01**).

## 2. Current → New (`new_page` · REQUIRED)

Nguồn SSOT: control-hint + real-data §A+§B · `analyzedAt=2026-09-05T23:38:01.000Z` · contentHash khớp STATUS · **không** crawl demo/CTX lại.

| Layer | Current (live) | New (PO chốt) |
|-------|----------------|---------------|
| Catalog | Resource **MISSING** | Seed `its-ops-logs` + hub card formNo=`09` (**GAP-SO09-RES-01** / **GAP-CSDL-CUC-05**) |
| Entry | Không route / không card | Alias **`/csdl-so-09`** + hub `?resource=its-ops-logs` (**GAP-SO09-ROUTE-01**) |
| Hub label | — | Title/card **«Sổ 09 — QL vận hành ITS/ETC/KSTTX»** · **cấm** nhầm Biểu 9 (**GAP-SO09-FORMNO-01**) |
| List Kind B | — | Typed cols: bookNo · contractor · road · Km · period · status |
| Form Kind D | generic Col1–3 nếu bootstrap | Typed header T-SO-09 + entries 9 cột ca trực + STT (**GAP-SO09-TYPED-01** / **GAP-CSDL-CUC-03**) |
| `roadCode`/`roadName` | — | **SearchInput** `road-route` filter + form (**GAP-CSDL-ROAD-01**) |
| `province` | LOOKUP_STATIC 5 tỉnh | **Giữ** LOOKUP_STATIC P1 (**Q-PROV**) · master = P2 |
| `contractor` / `manageUnit` | Text | **Text P1** · SearchInput org/partner **DEFER P2** (**Q-ORG** / **GAP-CSDL-ORG-01**) |
| `status` (sổ) | — | Dropdown LOOKUP_STATIC **`tot\|tb\|kem\|hong`** P1 |
| `shift` | — | Dropdown LOOKUP_STATIC **`ca1\|ca2\|ca3`** (**Q-SHIFT**) |
| `systemStatus` | — | Dropdown LOOKUP_STATIC **`tot\|tb\|kem\|hong`** (**Q-SYS-STATUS**) |
| `linkBieu14Id` | — | SearchInput `its-systems` · **optional** · 1 link / sổ P1 · deep-link Biểu 14 · **cấm** embed form (**Q-LINK14** / **GAP-SO09-LINK14-01**) |
| `signature` | — | **Text** tên người ký P1 · e-sign/File **DEFER** (**Q-SIGN**) |
| Media | không | **không** bắt buộc P1 |
| API | shell `…/csdl-records` · resource chưa seed | **Giữ prefix** · `?resource=its-ops-logs` · widen typed — SA / Schema_CsdlSo09 |
| Import/Export | Stub | **OUT pack** (**GAP-CSDL-XLS-01**) |
| Map | — | **none** · deep-link GIS only · **cấm** canvas |

**Không đổi:** API prefix `api/v1/asset/csdl-records` · Kind B A–D · Kind D Slideout · `LinPageLayout kind="catalog"` · IdCode `SO-yyyyMMdd-nnnn` · pagination 50/100/200/500 · **cấm** ERP.* · **cấm** Guid IdCode · **cấm** merge Sổ TS / Biểu 14 rows.

### GAP IDs (PO · P1 trừ DEFER/OUT)

| ID | New | P1 |
|----|-----|-----|
| GAP-SO09-RES-01 | Seed resource `its-ops-logs` + hub card | **YES** |
| GAP-SO09-TYPED-01 | Typed header + entries 9 cột thay detail*/col1–3 | **YES** |
| GAP-SO09-ROUTE-01 | Alias `/csdl-so-09` + hub entry | **YES** |
| GAP-SO09-LINK14-01 | Deep-link / SearchInput Biểu 14 · cấm gộp bảng | **YES** (link optional) |
| GAP-SO09-FORMNO-01 | Sổ **09** book · **không** đụng Biểu 9 | **YES** |
| GAP-CSDL-ROAD-01 | SearchInput road-route | **YES** |
| GAP-CSDL-PROV-01 | Province LOOKUP_STATIC P1 | **YES** · master P2 |
| GAP-CSDL-ORG-01 | contractor/manageUnit SearchInput | **DEFER P2** |
| GAP-CSDL-CUC-03 | Đóng gap cột typed Sổ 09 | **YES** (khi typed PASS) |
| GAP-CSDL-CUC-05 | Seed Sổ 9 resource | **YES** (cùng RES-01) |
| GAP-RPT-SRC-CSDL-01 | Typed entries = report source | **YES** form READY · report pack riêng |
| GAP-CSDL-XLS-01 | Import/export sheet ITS/ETC | **OUT pack** |

## 3. Open Q — PO resolve (autoApprove)

| Q | Decision |
|---|----------|
| **Q-SHIFT** | P1: Dropdown LOOKUP_STATIC **`ca1\|ca2\|ca3`** · **cấm** free-text · **cấm** invent master table |
| **Q-SYS-STATUS** | P1: Dropdown LOOKUP_STATIC **`tot\|tb\|kem\|hong`** · **cấm** free-text mô tả dài thay enum |
| **Q-LINK14** | P1: `linkBieu14Id` **optional** · **1:1** sổ↔1 hệ thống Biểu 14 · SearchInput `its-systems` + deep-link `/csdl-bieu-14` · **cấm** embed full form · nhiều hệ thống ghi trong entries/anomaly |
| **Q-PROV** | **keep_static** 5 tỉnh P1 · master province = P2 |
| **Q-ORG** | **Text P1** cho `contractor` / `manageUnit` · partner-unit / org-unit SearchInput = P2 (**GAP-CSDL-ORG-01**) |
| **Q-SIGN** | P1: `signature` = **Text** tên người ký/xác nhận ca · e-sign / FileService = **DEFER** · **không** bắt buộc media (T-FILE-01 ≠ Sổ 09) |

## 4. DoD (đo được)

1. Entry: mfeStd `/csdl-so-09` **và** hub `?resource=its-ops-logs` mở cùng list typed · title VN «Sổ 09 — QL vận hành ITS/ETC/KSTTX» · back hub · **cấm** slug trên card · **cấm** nhầm Biểu 9.
2. List load BFF `GET …/csdl-records?resource=its-ops-logs` — empty grid VN «Chưa có dữ liệu» · **cấm** fake row · **cấm** demo-json/LS SSOT · resource chưa seed → toast/empty (Dev seed trước).
3. Zone A: title VN · back hub · meta resource=`its-ops-logs` — **cấm** Thêm mới trên A.
4. Zone B: filter 1 hàng — SearchTextInput · province · status · road SearchInput · fromDate · toDate · Tạo mới · Refresh · Delete · History · SchemaConfig · Import/Export stub — **search must work** · **cấm** nút Tìm riêng · filter đổi → page=1.
5. Zone C: `LinCatalogDataGrid` kéo cột ON · STT · Mã · Số quyển · Nhà thầu · Đường · Km · Kỳ · TT · row menu Xem/Sửa/Copy/Xóa/Lịch sử.
6. Zone D: `LinCatalogListPagination` **50 / 100 / 200 / 500**.
7. Slideout Kind D Z1–Z3: Create/Edit/View/Copy — required: bookNo · contractor · roadCode · kmFrom · periodStart · province · ≥1 entry với occurredAt · shift · operatorName · systemStatus · action · result · signature · code IdCode `SO-` readonly.
8. View = `readOnly` — **cấm** Input disabled xám toàn form.
9. Entries `pattern_inline_grid` add/remove · typed 9 cột + STT — **cấm** chỉ Col1–3.
10. `roadCode` = SearchInput road-route bind `roadName` — **cấm** free-text khi master READY.
11. `linkBieu14Id` = SearchInput its-systems (optional) · deep-link Biểu 14 — **cấm** embed form Biểu 14 trong slideout.
12. Leave-confirm dirty · toast 4xx/5xx · 404 detail → đóng slideout — **cấm** native alert/confirm.
13. Typography: label **13** · input D14/M16 (**GAP-TYP-01**).
14. Map: **none** trên pack — **cấm** invent canvas.
15. Media: **không** bắt buộc P1.
16. `yarn build` / e2e / `start:std` **chỉ** Dev/QA — PO **cấm**.

## 5. Grid AC (packKind=list · HARD)

| AC | Assert |
|----|--------|
| G-01 | List render `LinCatalogDataGrid` · không crash khi empty |
| G-02 | SearchTextInput lọc mã/sổ/đường/thầu/người/ca — **không** nút Tìm riêng |
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
| List | `/csdl-so-09` | Kind B A–D · `LinPageLayout kind="catalog"` |
| Hub entry | `/so-ts/csdl-so-sach?resource=its-ops-logs` | Card title Sổ 09 · open-resource |
| Form C/E/V/Copy | Kind D Slideout Z1–Z3 | Footer Lưu/Hủy · leave-confirm |
| Peer Biểu 14 | `/csdl-bieu-14` · SearchInput `its-systems` | deep-link only · **cấm** merge ROW |
| Schema | `LinCatalogUiSchemaEditorModal` | catalogKind `its-ops-logs` |
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
| periodStart | Ngày bắt đầu kỳ | Date | * | YES |
| periodEnd | Ngày kết thúc kỳ | Date | | YES |
| province | Tỉnh | Dropdown | * | YES |
| manageUnit | ĐV QL | Text | | YES · org-unit P2 |
| status | Tình trạng | Dropdown tot/tb/kem/hong | | YES |
| linkBieu14Id | Liên kết Biểu 14 | SearchInput its-systems | | YES · optional |
| notes | Ghi chú sổ | Textarea | | YES |

### Entries[] inline grid (T-SO-09 · ca trực · 9 cột + STT)

| key | Label | controlHint | req | P1 |
|-----|-------|-------------|-----|-----|
| lineNo | STT | Integer ro | auto | YES |
| occurredAt | Ngày giờ | DateTime | * | YES |
| shift | Ca | Dropdown ca1/ca2/ca3 | * | YES |
| operatorName | Người | Text | * | YES |
| systemStatus | TT hệ thống | Dropdown tot/tb/kem/hong | * | YES |
| anomaly | TB bất thường | Textarea | | YES |
| action | Xử lý (XL) | Textarea | * | YES |
| result | Kết quả | Textarea | * | YES |
| recommendation | Kiến nghị | Textarea | | YES |
| signature | Ký | Text | * | YES · e-sign DEFER |

## 9. API / bind (cite real-data · SA widen)

| Op | Path |
|----|------|
| List | `GET /web-bff/api/v1/asset/csdl-records?resource=its-ops-logs` |
| Detail | `GET /web-bff/api/v1/asset/csdl-records/{id}` |
| Create | `POST /web-bff/api/v1/asset/csdl-records` body `resource=its-ops-logs` + typed |
| Update | `PUT /web-bff/api/v1/asset/csdl-records/{id}` |
| Delete | `DELETE …/{id}` soft |
| Peer Biểu 14 | `GET …/csdl-records?resource=its-systems` · UI `/csdl-bieu-14` |

FE cite: `services/csdlSoSach/endpoint.ts` `BASE=/asset/csdl-records` — typed page **reuse** BASE. SA: Schema_CsdlSo09 · typed DTO/UiSchema · seed catalog `its-ops-logs`.

Shell tables: `rmms_csdl_catalog_records` · `rmms_csdl_book_entries` · typed pair migration — SA/Dev (**không** Step 4b ở PO).

## 10. Out of scope (P1)

- Report pack / Kind F map canvas / Excel import-export sheet (**GAP-CSDL-XLS-01** OUT)
- Media / e-sign / FileService trên Sổ 09
- Merge ROW với Biểu 14 / Sổ TS
- Master province · org-unit / partner-unit SearchInput (P2)
- ERP.* / invent `api/v1/infra/*` / Domains/Master
- yarn build / e2e / start:std ở role PO

## 11. Handoff Design

1. Chốt control-map từ §8 · filter-bar HARD 1 hàng.
2. Prototype typed list + slideout entries 9 cột · **cấm** Col1–3 only.
3. reviewUrl · title VN «Sổ 09 — QL vận hành ITS/ETC/KSTTX».
4. Hub card + alias route · formNo 09 ≠ Biểu 9.
5. Link Biểu 14 = SearchInput + deep-link chrome · **cấm** embed.

## 12. DoR PO

- [x] packKind=`list` confirm
- [x] Grid AC G-01…G-10 · Screens · Leave
- [x] Open Q resolved (autoApprove)
- [x] GAP P1 / DEFER / OUT
- [x] control map + API cite real-data
- [x] handoff compact `handoff/po-compact.md`
- [x] STATUS updated · lock release
- [x] **cấm** yarn build/e2e/start:std · **cấm** re-scan demo
