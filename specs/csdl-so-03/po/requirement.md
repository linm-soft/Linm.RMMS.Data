# PO — Requirement — csdl-so-03 (Sổ 03 — Trực BĐGT + chốt + sự cố)

| Field | Value |
|-------|-------|
| feature | `csdl-so-03` |
| this role | `po` · `/agent-po` |
| changeScope | `new_page` |
| packKind | **`list`** (Kind **B** catalog A–D + Kind **D** Slideout · typed T-SO-03) — PO confirm |
| Feature Kind | **B** list A–D · **D** Slideout Z1–Z3 · entries `pattern_inline_grid` |
| gap | `new_page` · merge 2 resource + typed book · GAP-SO03-* + GAP-CSDL-* |
| mode | `feature_context` · **no Excel** · CTX + analy + hub demo zone ref · sourceKind=`synthetic` |
| status | `done` |
| requestSource | run packet `task_44997354` · `/agent-qldb-workflow` · roleOnly=`po` · `/agent-po` |
| autoApprove | **ON** — Design/SA/Review khi tới lượt → agent tự confirm · enqueue role kế. Role PO **không** gate confirm. |
| e2eQa | **ON** — queued tới `/agent-qa*` · **cấm** e2e / `yarn start:std` / `yarn build` ở role PO |
| prior · data_analy | status=`done`/`confirmed` · `specs/_data-analy/features/csdl-so-03-control-hint.md` · `csdl-so-03-real-data.md` · contentHash `sha256:1e8b4b6d6149c1ff2f27010cbf0d6649af9408b05738f416cd58d8c7361fdd9d` · headerFingerprint `sha256:b5b6baa32c1a5ebbf3d8eb2ecaad922d90a291958347aa22ec8fa27096d93997` · analy `task_bbeb376c` · **cấm** re-scan demo (**GAP-PO-DEMO-RESCAN-01**) |
| productRoot | `D:/AI-QLBD/Linm.RMMS.Data` |
| mfe | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Asset` · alias **`/csdl-so-03`** · hub **`/so-ts/csdl-so-sach?resource=duty-incident-logs`** |
| mfeStdUrl | `http://localhost:9301/csdl-so-03` |
| hubDeepLink | `http://localhost:9301/so-ts/csdl-so-sach?resource=duty-incident-logs` |
| backend | `D:/AI-QLBD/Linm.RMMS.WebService` · domain **Asset** · **`api/v1/asset/csdl-records?resource=duty-incident-logs`** · **cấm ERP.*** · **cấm** invent `api/v1/infra/*` · **cấm** `api/v1/so-ts/*` |
| domain | **Asset** |
| resource | `duty-incident-logs` (**mới** · retire `duty-logs` + `checkpoint-duties`) |
| formNo | `03` · title VN **Trực BĐGT + chốt + sự cố** |
| IdCode | `SO-yyyyMMdd-nnnn` · **cấm** Guid |
| be_repo_confirm | `approve` (`Linm.RMMS.WebService`) |
| ui_repo_confirm | `approve` (`Linm.Web.RMMS.Asset`) |
| updatedAt | `2026-09-05T19:40:00.000Z` |
| taskId | `task_44997354` · analy `task_bbeb376c` |
| skillVersion | `2026.08.25.01` |
| workflowVersion | `2026.09.01.02` |
| rulesVersion | `2026.08.31.2` |

## 1. Goal

Chốt **new_page** typed **Sổ 03 — Trực BĐGT + chốt + sự cố**: **merge** live `duty-logs` + `checkpoint-duties` → **1** resource `duty-incident-logs` · Kind B list + Kind D Slideout CRUD · header T-SO-03 + entries typed (ngày·ca·tên·nội dung·XL·ký) · **cấm** DoD chỉ 3 ô `detail*` / `col1–3` · **cấm** giữ 2 resource song song P1.

Persona: Khu QLĐB · Hạt trưởng · NV trực BĐGT / chốt · NV sự cố / hotline · Nhà thầu BDTX.

**packKind confirm:** `list` (data-analy đề xuất · PO chốt). **Không** report pack · **không** Kind F map canvas · Import/Export Excel **OUT pack**.

**≠** Sổ TS `so-ts-*` (deep-link hub only) · ≠ hub Kind G shell `csdl-so-sach` (giữ entry; alias mfeStd riêng).

**Cấm ERP.*** · **cấm** `api/v1/rmms/*` · **cấm** invent `api/v1/infra/*` · **cấm** demo-json / localStorage SSOT · **cấm** re-scan demo HTML (**GAP-PO-DEMO-RESCAN-01**).

## 2. Current → New (`new_page` · REQUIRED)

Nguồn SSOT: control-hint + real-data §A+§B · `analyzedAt=2026-09-05T19:23:00.000Z` · contentHash khớp STATUS · **không** crawl demo/CTX lại.

| Layer | Current (live) | New (PO chốt) |
|-------|----------------|---------------|
| Resources | `duty-logs` (Sổ 2) + `checkpoint-duties` (Sổ 3) | **1** `duty-incident-logs` · **xoá/retire** 2 key cũ (**GAP-SO03-MERGE-01** / **GAP-CSDL-CUC-06**) |
| Entry | Hub deep-link `?resource=duty-logs` / `checkpoint-duties` | Alias **`/csdl-so-03`** + hub `?resource=duty-incident-logs` (**GAP-SO03-ROUTE-01**) |
| Hub label | 2 card «Sổ 2» + «Sổ 3» | **1** card **«Sổ 03 — Trực BĐGT + chốt + sự cố»** formNo=`03` (**Q-FORMNO** / **GAP-SO03-FORMNO-01**) |
| List Kind B | Generic cols · filter chrome | Typed cols: bookNo · contractor · road · Km · period · province · status |
| Form Kind D | 3 ô `detail*` + entries Col1–3 | Typed header T-SO-03 + entries typed (**GAP-SO03-TYPED-01** / **GAP-CSDL-CUC-03**) |
| `dutyKind` | Tách 2 resource | **Gộp** BĐGT/chốt/SC trong `content` — **không** cột `dutyKind` P1 (**Q-DUTYKIND**) |
| `roadCode`/`roadName` | Text free | **SearchInput** `road-route` filter + form (**GAP-CSDL-ROAD-01**) |
| `province` | LOOKUP_STATIC 5 tỉnh | **Giữ** LOOKUP_STATIC P1 (**Q-PROV**) · master = P2 |
| `contractor` | Text | **Text P1** · SearchInput org-unit **DEFER P2** (**Q-ORG** / **GAP-CSDL-ORG-01**) |
| `status` | Catalog generic | LOOKUP_STATIC **`draft\|active\|closed`** (**Q-STATUS**) |
| `shift` | Text / Col | **Text free** P1 (**Q-SHIFT**) · LOOKUP_STATIC ca = P2 optional |
| API | `…/csdl-records?resource=duty-logs` / `checkpoint-duties` | **Giữ prefix** · resource mới · widen typed — SA / Schema_CsdlSo03 · legacy QS → redirect |
| Import/Export | Stub | **OUT pack** (**GAP-CSDL-XLS-01**) |
| Map | — | **none** · deep-link GIS only · **cấm** canvas |

**Không đổi:** API prefix `api/v1/asset/csdl-records` · Kind B A–D · Kind D Slideout · `LinPageLayout kind="catalog"` · IdCode `SO-yyyyMMdd-nnnn` · pagination 50/100/200/500 · **cấm** ERP.* · **cấm** Guid IdCode · **cấm** merge Sổ TS.

### GAP IDs (PO · P1 trừ DEFER/OUT)

| ID | New | P1 |
|----|-----|-----|
| GAP-SO03-MERGE-01 | Merge → `duty-incident-logs` · retire 2 key cũ | **YES** |
| GAP-SO03-TYPED-01 | Typed header + entries thay detail*/col1–3 | **YES** |
| GAP-SO03-ROUTE-01 | Alias `/csdl-so-03` + hub entry | **YES** |
| GAP-SO03-FORMNO-01 | 1 card Sổ 03 · formNo=`03` | **YES** |
| GAP-CSDL-ROAD-01 | SearchInput road-route | **YES** |
| GAP-CSDL-PROV-01 | Province LOOKUP_STATIC P1 | **YES** · master P2 |
| GAP-CSDL-ORG-01 | contractor SearchInput org-unit | **DEFER P2** |
| GAP-CSDL-CUC-03 | Đóng gap cột typed Sổ 03 | **YES** (khi typed PASS) |
| GAP-CSDL-CUC-06 | Đóng khi merge PASS | **YES** |
| GAP-RPT-SRC-CSDL-01 | Typed entries = report source | **YES** form READY · report pack riêng |
| GAP-CSDL-XLS-01 | Import/export sheet | **OUT pack** |

## 3. Open Q — PO resolve (autoApprove)

| Q | Decision |
|---|----------|
| **Q-MERGE** | P1: migrate data `duty-logs` + `checkpoint-duties` → `duty-incident-logs` (one-shot SA/migration) · soft-retire 2 key hub/catalog **cùng release** typed page · legacy QS `?resource=duty-logs` / `checkpoint-duties` → **redirect** `duty-incident-logs` + toast · **cấm** song song 2 resource làm DoD |
| **Q-DUTYKIND** | P1: **không** cột `dutyKind` · BĐGT / chốt / SC gộp trong `entries[].content` (khớp T-SO-03) |
| **Q-FORMNO** | P1: **1** hub card title **«Sổ 03 — Trực BĐGT + chốt + sự cố»** · formNo=`03` · **xoá** card Sổ 2 + Sổ 3 khi merge PASS (T-REN-01) |
| **Q-STATUS** | P1: Dropdown LOOKUP_STATIC **`draft\|active\|closed`** (nháp / hiệu lực / đóng sổ) · label VN Nháp · Hiệu lực · Đóng |
| **Q-PROV** | **keep_static** 5 tỉnh P1 · master province = P2 |
| **Q-ORG** | **Text P1** · org-unit SearchInput = P2 (**GAP-CSDL-ORG-01**) |
| **Q-SHIFT** | **Text free** P1 (vd. sáng/chiều/đêm hoặc mã ca) · LOOKUP_STATIC ca = P2 optional |

## 4. DoD (đo được)

1. Entry: mfeStd `/csdl-so-03` **và** hub `?resource=duty-incident-logs` mở cùng list typed · title VN «Sổ 03 — Trực BĐGT + chốt + sự cố» · back hub · **cấm** slug trên card · **1** card (không 2 card cũ).
2. List load BFF `GET …/csdl-records?resource=duty-incident-logs` — empty grid VN «Chưa có nhật ký trực BĐGT / chốt / sự cố» · **cấm** fake row · **cấm** demo-json/LS SSOT.
3. Zone A: title VN · back hub · meta resource=`duty-incident-logs` — **cấm** Thêm mới trên A.
4. Zone B: filter 1 hàng — SearchTextInput · province · status · road SearchInput · fromDate · toDate · Tạo mới · Refresh · Delete · History · SchemaConfig · Import/Export stub — **search must work** · **cấm** nút Tìm riêng · filter đổi → page=1.
5. Zone C: `LinCatalogDataGrid` kéo cột ON · STT · Mã · Số quyển · Nhà thầu · Đường · Km · Kỳ · Tỉnh · TT · row menu Xem/Sửa/Copy/Xóa/Lịch sử.
6. Zone D: `LinCatalogListPagination` **50 / 100 / 200 / 500**.
7. Slideout Kind D Z1–Z3: Create/Edit/View/Copy — required: bookNo · contractor · roadCode · kmFrom · periodStart · province · ≥1 entry với dutyDate · shift · personName · content · code IdCode `SO-` readonly.
8. View = `readOnly` — **cấm** Input disabled xám toàn form.
9. Entries `pattern_inline_grid` add/remove · typed cols (dutyDate · shift · personName · content · handling · signRemark) — **cấm** chỉ Col1–3 · **cấm** cột dutyKind P1.
10. `roadCode` = SearchInput road-route bind `roadName` — **cấm** free-text khi master READY.
11. Leave-confirm dirty · toast 4xx/5xx · 404 detail → đóng slideout — **cấm** native alert/confirm.
12. Merge: sau release, hub **không** còn card/resource `duty-logs` / `checkpoint-duties` · legacy QS redirect.
13. Typography: label **13** · input D14/M16 (**GAP-TYP-01**).
14. Map: **none** trên pack — **cấm** invent canvas.
15. `yarn build` / e2e / `start:std` **chỉ** Dev/QA — PO **cấm**.

## 5. Grid AC (packKind=list · HARD)

| AC | Assert |
|----|--------|
| G-01 | List render `LinCatalogDataGrid` · không crash khi empty |
| G-02 | SearchTextInput lọc mã/sổ/đường/người trực/nội dung — **không** nút Tìm riêng |
| G-03 | Filter province/status/road/from/to → refetch · page=1 |
| G-04 | Sort/kéo cột default ON · STT ổn định |
| G-05 | Row menu: Xem / Sửa / Copy / Xóa / Lịch sử |
| G-06 | Pagination 50/100/200/500 · đổi size → page=1 |
| G-07 | Tạo mới → Slideout Create · Lưu → row mới trên grid |
| G-08 | Sửa → PUT · grid refresh · toast success |
| G-09 | Copy → Slideout prefill · code mới sau Lưu · **cấm** reuse IdCode |
| G-10 | Xóa soft-delete · row biến khỏi list mặc định |
| G-11 | Empty copy VN «Chưa có nhật ký trực BĐGT / chốt / sự cố» |
| G-12 | 422 thiếu resource → toast · không crash |
| G-13 | Legacy QS `duty-logs` / `checkpoint-duties` → redirect `duty-incident-logs` |

## 6. Form AC (Kind D Slideout)

| AC | Assert |
|----|--------|
| F-01 | Z1 title theo mode C/E/V/Copy · Z3 Lưu/Hủy |
| F-02 | Header required: bookNo · contractor · roadCode · kmFrom · periodStart · province |
| F-03 | code readonly auto `SO-yyyyMMdd-nnnn` · **cấm** Guid · **cấm** user edit |
| F-04 | road SearchInput → bind roadName display |
| F-05 | kmFrom/kmTo Number · periodStart/periodEnd Date |
| F-06 | status Dropdown `draft\|active\|closed` |
| F-07 | notes Textarea optional |
| F-08 | entries ≥1 · dutyDate · shift · personName · content required |
| F-09 | handling · signRemark optional |
| F-10 | lineNo auto Integer ro |
| F-11 | add/remove entry · **cấm** Col1–3 only |
| F-12 | View = readOnly · **cấm** disabled xám |
| F-13 | Validation fail → inline/toast · **không** đóng slideout |
| F-14 | contractor Text P1 · **không** bắt buộc org-unit P1 |

## 7. Screens

| Screen | Route / surface | Notes |
|--------|-----------------|-------|
| List | `/csdl-so-03` | Kind B A–D · alias mfeStd |
| Hub entry | `/so-ts/csdl-so-sach?resource=duty-incident-logs` | 1 card Sổ 03 · deep-link |
| Form | Slideout trên list | Kind D Z1–Z3 · C/E/V/Copy |
| Legacy redirect | `?resource=duty-logs` / `checkpoint-duties` | → `duty-incident-logs` |

**Cấm:** map canvas · report screen · Excel wizard P1 · 2 card hub cũ sau merge.

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
| fromDate / toDate | Date | YES |
| code | Text ro | YES |
| bookNo | Text * | YES |
| contractor | Text * | YES · org-unit P2 |
| roadName | Text ro | YES |
| kmFrom / kmTo | Number | YES (* from) |
| periodStart / periodEnd | Date | YES (* start) |
| notes | Textarea | YES |
| entries[].dutyDate | Date * | YES |
| entries[].shift | Text * | YES free |
| entries[].personName | Text * | YES |
| entries[].content | Textarea * | YES (gồm BĐGT/chốt/SC) |
| entries[].handling | Textarea | YES |
| entries[].signRemark | Text | YES |

API: `GET/POST/PUT/DELETE /web-bff/api/v1/asset/csdl-records` (+ mirror `api/v1/asset/…`) · `resource=duty-incident-logs`.

## 10. Out of scope (P1)

- Import/Export Excel sheet (**GAP-CSDL-XLS-01** OUT)
- Report pack / PDF
- Map canvas / GIS draw
- org-unit SearchInput contractor (P2)
- province master (P2)
- LOOKUP_STATIC ca / cột `dutyKind`
- Merge form với Sổ TS `so-ts-*`
- ERP.* / Domains/Master / invent `api/v1/infra/*`

## 11. Handoff Design

| Need | Value |
|------|-------|
| control-map | Zone A–D + Slideout Z1–Z3 từ control-hint |
| prototype | Typed list + form · **1** hub card Sổ 03 · **cấm** Col1–3 |
| reviewUrl | Prototype review URL |
| typography | label 13 · input D14/M16 |
| filter-bar | 1 row HARD · **cấm** nút Tìm · **cấm** wrap 2 hàng desktop default |
| merge UX | Hub 1 card · legacy redirect toast copy |

## 12. Handoff SA

| Need | Value |
|------|-------|
| DTO / UiSchema | Typed `duty-incident-logs` · Schema_CsdlSo03 |
| Migration | Merge rows `duty-logs` + `checkpoint-duties` → resource mới · retire keys |
| API | Widen shell `csdl-records` · **giữ** prefix Asset · **cấm** invent infra |
| Redirect | Legacy resource QS map |
| IdCode | `SO-yyyyMMdd-nnnn` BE generate |

## 13. DoR PO

- [x] packKind=`list` confirm
- [x] Grid AC + Form AC + Screens + Leave
- [x] Open Q resolved (autoApprove)
- [x] GAP P1/DEFER/OUT tagged
- [x] changeScope=`new_page` · resource=`duty-incident-logs`
- [x] contentHash khớp analy · **không** re-scan demo
- [x] handoff compact `handoff/po-compact.md`
- [x] **cấm** implement / e2e / start:std / yarn build ở role này
