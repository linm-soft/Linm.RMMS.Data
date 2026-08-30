# PO — Requirement — csdl-so-sach (CSDL 12 biểu + 8 sổ BDTX)

| Field | Value |
|-------|-------|
| feature | `csdl-so-sach` |
| this role | `po` · `/agent-po` |
| changeScope | `edit_page` |
| packKind | **`list`** (Kind **G** hub + Kind **B** catalog A–D + Kind **D** Slideout) — PO confirm |
| Feature Kind | **G** hub · **B** list A–D+F · **D** Slideout Z1–Z3 |
| gap | `edit_page` · L3 analy fill · GAP-CSDL-* delta |
| mode | `feature_context` · **no Excel** · CTX + demo zone ref + live MFE/BE · sourceKind=`synthetic` |
| status | `done` |
| requestSource | run packet `task_1a6a0841` · `/agent-qldb-workflow` · roleOnly=`po` · `/agent-po` |
| autoApprove | **ON** — Design/SA/Review khi tới lượt → agent tự confirm · enqueue role kế. Role PO **không** gate confirm. |
| e2eQa | **ON** — queued tới `/agent-qa*` · **cấm** e2e / `yarn start:std` / `yarn build` ở role PO |
| prior · data_analy | status=`done`/`confirmed` · `specs/_data-analy/features/csdl-so-sach-control-hint.md` · `csdl-so-sach-real-data.md` · contentHash `sha256:e13a39df3b06c9b08f1ef4f197b6b0e76e3d7863b1e6fffe42a196a22bb1faad` · headerFingerprint `sha256:0528db4c9a04d817a2fd2d9867ace7ebf739fb05aac01942032a7110d9ff6a14` · analy `task_21f924bd` · **cấm** re-scan demo (**GAP-PO-DEMO-RESCAN-01**) |
| productRoot | `D:/AI-QLBD/Linm.RMMS.Data` |
| mfe | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Asset` · route **`/so-ts/csdl-so-sach`** |
| mfeStdUrl | `http://localhost:9301/so-ts/csdl-so-sach` |
| backend | `D:/AI-QLBD/Linm.RMMS.WebService` · domain **Asset** · **`api/v1/asset/csdl-records`** · **cấm ERP.*** · **cấm** invent `api/v1/so-ts/csdl-records` · **cấm** `api/v1/infra/*` |
| domain | **Asset** |
| be_repo_confirm | `approve` (`Linm.RMMS.WebService`) |
| ui_repo_confirm | `approve` (`Linm.Web.RMMS.Asset`) |
| updatedAt | `2026-08-29T10:55:00.000Z` |
| taskId | `task_1a6a0841` · analy `task_21f924bd` |

## 1. Goal

Chốt delta **edit_page** cho hub **CSDL 12 biểu + 8 sổ BDTX**: giữ Kind G hub + Kind B list + Kind D Slideout CRUD đã ship · đóng gap control/lookup/docs từ data-analy L3 · **cấm** re-CRUD rewrite không delta.

Persona: Khu QLĐB · Văn phòng · Nhà thầu BDTX · Hạt trưởng.

**packKind confirm:** `list` (data-analy đề xuất · PO chốt). Kind G+B+D — **không** report pack · **không** Kind F map canvas · **không** Excel import wizard.

**≠** `pavement-section` (Biểu 1 deep form) · ≠ `asset` (SỔ TÀI SẢN) — hub này = catalog polymorphic 12+8.

**Cấm ERP.*** · **cấm** `api/v1/rmms/*` · **cấm** invent `api/v1/so-ts/csdl-records` · **cấm** parent JSON (`EntriesJson`/`DetailJson`) · **cấm** re-scan demo HTML · **cấm** demo-json / localStorage SSOT data (**GAP-WEB-EDIT-SEED**).

## 2. Current → New (`edit_page` · REQUIRED)

Nguồn SSOT: control-hint + real-data §A+§B · `analyzedAt=2026-08-29T10:45:00.000Z` · contentHash khớp STATUS · **không** crawl demo/CTX lại.

| Layer | Current (live inventory 2026-08-29) | New (delta PO chốt · copy analy) |
|-------|-------------------------------------|----------------------------------|
| Hub Kind G | Tab CSDL(12)/Sổ(8) · KPI · cards · open-resource | **Giữ** · **GAP-QA-HUB-SLUG** hiển thị `title`/`listTitle` VN (**cấm** slug `c.key` trên card meta) |
| List Kind B | A–D · `LinPageLayout` · `LinCatalogDataGrid` · pagination | **Giữ** — search must work · filter bar HARD · **cấm** nút Tìm riêng |
| Form Kind D | Slideout Z1–Z3 · C/E/V/Copy · leave-confirm | **Giữ** Slideout · footer Lưu/Hủy · View=`readOnly` (**không** disabled xám) |
| `roadName` | Text free (filter đề xuất / form) | **SearchInput** `catalogKind=road-route` filter + form (**Q-ROAD** / **GAP-CSDL-ROAD-01**) |
| `province` | Select cứng FE `PROVINCES` (5) | **LOOKUP_STATIC** Dropdown P1 (**Q-PROV** keep_static) · master province = P2 |
| `manageUnit` / `ownerUnit` | Text free | **DEFER P2** SearchInput tree `org-unit` (**GAP-CSDL-ORG-01**) · slim Text OK P1 |
| Sổ entries | Col1–Col3 + note flat child | **Giữ** inline_grid P1 · typed columns **DEFER** report (**Q-ENTRIES** / **GAP-RPT-SRC-CSDL-01**) |
| History | Stub modal | `LinCatalogHistoryModal` pattern · **cấm** invent History API path (**GAP-CSDL-HIST-01**) |
| Auth | `[RequirePermission]` TODO | **SD-AUTH** debt (**GAP-CSDL-AUTH-01**) — không block CRUD |
| API docs | STATUS từng lệch `so-ts` API | Cite **live** `api/v1/asset/csdl-records` (**GAP-CSDL-API-DOC**) |
| MFE route docs | Design từng `/asset/…` | Cite live **`/so-ts/csdl-so-sach`** (**GAP-CSDL-ROUTE-UI**) |
| Import/Export | Toast stub | **OUT pack** (**GAP-CSDL-XLS-01**) |
| Demo | zone/action ref | **cấm** demo-json / LS làm SSOT data |

**Không đổi:** Kind G hub + Kind B A–D+F + Kind D Slideout · `LinCatalogListPagination` 50/100/200/500 · polymorphic `CsdlCatalogRecord` + child `rmms_csdl_book_entries` · prefix `api/v1/asset/csdl-records` · BFF proxy · route `/so-ts/csdl-so-sach` · deep-link `?resource=&form=` · IdCode `XX-yyyyMMdd-nnnn` · **cấm** ERP.* · **cấm** parent JSON · Import Excel OUT · prior Design/SA/TL/Dev/QA artifacts confirmed (giữ · delta gaps).

### GAP IDs (PO bắt buộc Design/Dev đóng P1 trừ DEFER)

| ID | New | P1 |
|----|-----|----|
| GAP-CSDL-ROAD-01 | `roadName` → SearchInput `road-route` (filter + form) | **YES** |
| GAP-CSDL-PROV-01 | Province = LOOKUP_STATIC 5 tỉnh P1 | **YES** (keep_static) · master = P2 |
| GAP-QA-HUB-SLUG | Hub card meta = title VN · **cấm** slug | **YES** |
| GAP-CSDL-API-DOC | Docs/STATUS cite `api/v1/asset/csdl-records` | **YES** (docs) |
| GAP-CSDL-ROUTE-UI | mfeStdRoute `/so-ts/csdl-so-sach` | **YES** (docs/shell) |
| GAP-CSDL-HIST-01 | `LinCatalogHistoryModal` · **cấm** invent API | **YES** UI · API real DEFER nếu chưa có |
| GAP-CSDL-ORG-01 | `manageUnit`/`ownerUnit` SearchInput org-unit | **DEFER P2** |
| GAP-RPT-SRC-CSDL-01 | Typed sổ columns | **DEFER** report pack |
| GAP-CSDL-AUTH-01 | Wire Auth NuGet | **DEFER** SD-AUTH debt |
| GAP-CSDL-XLS-01 | Excel import/export full | **OUT pack** |
| GAP-L3-REAL-DATA | Analy L3 fill | **CLOSED** (`task_21f924bd`) |

## 3. DoD (đo được)

1. Hub load BFF `GET …/csdl-records/catalog` — KPI/card count từ API · **cấm** hardcode · empty cards OK.
2. Hub tab **CSDL (12)** · **Sổ BDTX (8)** · card click `open-resource` · back-hub · **cấm** Thêm mới trên hub title · card meta = **title VN** (**GAP-QA-HUB-SLUG**).
3. List theo `?resource=` load BFF — empty grid copy VN · **cấm** fake row · **cấm** demo-json/LS SSOT.
4. Zone A list: title theo resource · back hub — **cấm** Thêm mới trên A.
5. Zone B: `LinErpListFilterBar` 1 hàng wrap · input+🔍 cụm phải — SearchTextInput · province Dropdown · status Dropdown · fromDate/toDate · **roadName SearchInput road-route** · Tạo mới primary · Refresh · Delete · History · SchemaConfig · Import/Export stub toast — filter đổi → page=1 · **search must work** · **cấm** nút Tìm riêng.
6. Zone C: `LinCatalogDataGrid` kéo cột default ON · STT · Mã · Đường · Tỉnh · Lý trình · TT · ĐV QL · Chi tiết chính · actions — row menu Xem/Sửa/Copy/Xóa/Lịch sử.
7. Zone D: `LinCatalogListPagination` pageSize **50 / 100 / 200 / 500** — **cấm** footerPagination / pageSizeBar raw.
8. Zone F: `LinCatalogUiSchemaEditorModal` catalogKind `csdl-records` — **cấm** `LinListTableConfigModal` thay schema.
9. Slideout Kind D Z1–Z3: Create/Edit/View/Copy — required `roadName` · `province` · `kmFrom` · `status` · `detailPrimary` · code IdCode readonly theo resource prefix.
10. View = `readOnly` — **cấm** Input disabled xám toàn form.
11. `roadName` = SearchInput master road-route — **cấm** free Text khi master READY (**GAP-CSDL-ROAD-01**).
12. `province` = Dropdown LOOKUP_STATIC P1 — **cấm** pretend master province SSOT (**Q-PROV**).
13. Sổ: header + `pattern_inline_grid` entries (add/remove) · Col1–3 + note P1 — typed fields **DEFER** report.
14. Leave-confirm dirty · toast 4xx/5xx — **cấm** native alert/confirm.
15. Typography: label **13** · input D14/M16 (**GAP-TYP-01**).
16. Deep-link map / Biểu1 = navigate only — **cấm** invent map canvas trên list pack.
17. `yarn build` / e2e / `start:std` **chỉ** Dev/QA — PO **cấm**.

## 4. CTX / DEM / DI inventory (hash skip — đọc analy · **không** re-crawl)

| ID | Path | Loại |
|----|------|------|
| CTX-01 | `docs/context/features/csdl-so-sach.md` | feature Signed |
| CTX-02 | `docs/context/features/csdl-so-sach-control-map.md` | control-map |
| CTX-03 | `docs/context/11-CSDL-SO-SACH-DATABASE-API.md` | API/DB SSOT |
| DEM-01 | `Linm.RMMS.Demo/src/demo/features/csdl-so-sach-demo.html` | entry · **zone ref only** |
| DEM-02 | `Linm.RMMS.Demo/src/demo/asset/csdl-so-sach.html` | page · **không** SSOT data |
| DI-01 | — | **no Excel** · import OUT |
| DA-01 | `D:/AI-QLBD/Linm.RMMS.Data/specs/_data-analy/features/csdl-so-sach-control-hint.md` | controlHint SSOT · **done** |
| DA-02 | `D:/AI-QLBD/Linm.RMMS.Data/specs/_data-analy/features/csdl-so-sach-real-data.md` | real-data §A–§F |
| RPT-GAP | `specs/_form-type/REPORT-SOURCE-FIELD-GAPS.md` | GAP-RPT-SRC-CSDL-01 |
| PROT-01 | `specs/csdl-so-sach/ui/prototype/csdl-so-sach-list-prototype.html` | Design prior · giữ |
| MFE hub+list | `…/CsdlSoSachPage.tsx` | Kind G+B live |
| MFE form | `…/CsdlFormSlideout.tsx` | Kind D live |
| MFE svc | `…/services/csdlSoSach/endpoint.ts` | `BASE=/asset/csdl-records` |
| BE | `CsdlCatalogRecordEntity` · `CsdlBookEntryEntity` · `CsdlCatalogRecordsController` | live CRUD |
| DOMAIN-MAP | `D:/AI-QLBD/Linm.RMMS.WebService/docs/DOMAIN-MAP.md` | Asset · `csdl-so-sach` |

Normalized header (analy):  
`catalogTab|resource|search|province|status|fromDate|toDate|code|roadName|kmFrom|kmTo|side|manageUnit|ownerUnit|detailPrimary|detailSpec|detailExtra|notes|bookNo|contractor|entries.lineNo|entries.col1|entries.col2|entries.col3|entries.note`

## 5. controlHint (PO chốt · copy data-analy — Design map UI · SA map API)

### Hub (Kind G)

| Field key | Label | controlHint | Notes |
|-----------|-------|-------------|-------|
| catalogTab | Tab catalog | Tab enum | `csdl` \| `so` |
| resourceKey | Card resource | Card click | 12 biểu + 8 sổ · `open-resource` |
| kpi.* | KPI counts | derived | từ `GET …/catalog` · **cấm** hardcode |
| card.title | Card title | text | **GAP-QA-HUB-SLUG** · **cấm** slug meta |

### List filters (Zone B)

| Field key | Label | controlHint | catalogKind | Notes |
|-----------|-------|-------------|-------------|-------|
| search | Tìm kiếm | `SearchTextInput` | text | mã · đường · chi tiết |
| province | Tỉnh/TP | `Dropdown` | LOOKUP_STATIC | FE `PROVINCES` P1 · **Q-PROV** |
| status | Tình trạng | `Dropdown` | LOOKUP_STATIC | `tot` · `tb` · `kem` · `hong` |
| fromDate | Từ ngày | `Date` | — | QS `fromDate` |
| toDate | Đến ngày | `Date` | — | QS `toDate` |
| roadName | Tên đường | `SearchInput` | **road-route** | **GAP-CSDL-ROAD-01** · **cấm** Text free |

### Form fields (Slideout Kind D)

| Field key | Label | controlHint | required | Notes |
|-----------|-------|-------------|----------|-------|
| code | Mã | `Text` readonly | auto | IdCode `XX-yyyyMMdd-nnnn` theo `prefix` resource |
| roadName | Tên đường | `SearchInput` | * | **road-route** · **GAP-CSDL-ROAD-01** |
| province | Tỉnh | `Dropdown` | * | LOOKUP_STATIC P1 |
| kmFrom | Lý trình từ | `Number` | * | decimal |
| kmTo | Lý trình đến | `Number` | | |
| side | Bên | `Dropdown` | | L / R / C / Both |
| status | Trạng thái | `Dropdown` | * | LOOKUP_STATIC |
| manageUnit | ĐV quản lý | `Text` | | **GAP-CSDL-ORG-01** DEFER P2 → SearchInput tree |
| ownerUnit | Chủ QLSD | `Text` | | **GAP-CSDL-ORG-01** DEFER P2 |
| detailPrimary | Chi tiết chính | `Text` | * | label theo `SPEC_LABELS[resource]` |
| detailSpec | Thông số | `Text` | | |
| detailExtra | Bổ sung | `Text` | | |
| notes | Ghi chú | `Textarea` | | |
| bookNo | Số sổ | `Text` | sổ | book resources only |
| contractor | Nhà thầu / trực | `Text` | sổ | partner-unit P2 optional |
| entries[] | Dòng sổ | inline_grid | sổ | Col1–3 + note · **GAP-RPT-SRC-CSDL-01** DEFER typed |
| updatedAt | Cập nhật | `DateTime` readonly | | audit |

### Actions (toolbar / row / form / hub)

| Action | controlHint / pattern | API | Notes |
|--------|----------------------|-----|-------|
| tab-csdl / tab-so | Hub tab | `GET …/catalog` | switch card set |
| open-resource / back-hub | Hub↔List | QS `?resource=` | |
| Tạo mới | Button primary Zone B | `POST …/csdl-records` | **cấm** trên hub A |
| Refresh | toolbar | GET list | refetch |
| Xóa | danger + Confirm modal | soft `DELETE …/{id}` | |
| Xem / Sửa / Copy | row menu · slideout | GET/PUT/POST | FormType |
| Config cột | `LinCatalogUiSchemaEditorModal` | catalog `csdl-records` | **cấm** configHint-only |
| History | `LinCatalogHistoryModal` | — | **GAP-CSDL-HIST-01** · **cấm** invent path |
| Import / Export | toast stub | — | **OUT pack** |
| open-map / open-p1 | deep-link | — | **cấm** map canvas |
| add-entry / remove-entry | inline grid | nested write | sổ only |
| save / cancel | form footer | POST/PUT | leave-confirm dirty |

### Real-data bind (copy §B analy — SA **giữ** path cite)

| Operation | Path |
|-----------|------|
| Catalog hub | `GET /web-bff/api/v1/asset/csdl-records/catalog` |
| List | `GET /web-bff/api/v1/asset/csdl-records?resource=…` |
| Detail | `GET /web-bff/api/v1/asset/csdl-records/{id}` |
| Create | `POST /web-bff/api/v1/asset/csdl-records` |
| Update | `PUT /web-bff/api/v1/asset/csdl-records/{id}` |
| Delete | `DELETE /web-bff/api/v1/asset/csdl-records/{id}` (soft) |
| road-route lookup | `GET /integration/road-routes/search` | SearchInput (**GAP-CSDL-ROAD-01**) |
| org-unit lookup | `GET /integration/org-units/search` | **DEFER P2** |

API mirror: `api/v1/asset/csdl-records` (`CsdlCatalogRecordsController`).  
FE cite: `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Asset/src/services/csdlSoSach/endpoint.ts`.

**Cấm** ERP.* · invent `api/v1/so-ts/csdl-records` · invent `api/v1/infra/*` · parent JSON.

### Resources (polymorphic)

| resource | Biểu/Sổ | prefix IdCode |
|----------|---------|---------------|
| `pavement-sections` … `green-assets` | 12 biểu CSDL | MD·BR·TN·CV·RN·HC·AT·MK·KE·LE·LT·CX |
| `patrol-logs` … `inspection-logs` | 8 sổ BDTX (`book=true`) | SO |

### Status / side (giữ LOOKUP_STATIC)

- status: `tot` · `tb` · `kem` · `hong`
- side: `L` · `R` · `C` · `Both`

## 6. Grid AC (REQUIRED · list packKind)

Áp dụng surface Kind B list theo resource (sau hub open-resource).

| ID | AC |
|----|-----|
| AC-G-01 | Zones **A Header · B Toolbar · C Grid · D Pagination** (+ Zone F config) |
| AC-G-02 | Search + province/status/dates/roadName → page=1 khi filter đổi |
| AC-G-03 | Row menu Xem / Sửa / Copy / Xóa / Lịch sử |
| AC-G-04 | `LinCatalogDataGrid` + kéo cột default ON · schema-driven |
| AC-G-05 | Footer `LinCatalogListPagination` 50/100/200/500 |
| AC-G-06 | 1× `LinPageLayout` — **cấm** nested CatalogListShell |
| AC-G-07 | Flex + skeleton — **cấm** blank body |
| AC-G-08 | Zone F `LinCatalogUiSchemaEditorModal` catalog `csdl-records` — **cấm** `configHint` / `LinListTableConfigModal` |
| AC-G-09 | Empty list copy VN — **cấm** fake row / demo-json / LS SSOT |
| AC-G-10 | Toast 4xx/5xx · Confirm modal — **cấm** `window.alert`/`confirm` |
| AC-G-11 | Filter = **`LinErpListFilterBar`** 1 hàng wrap · **input + 🔍 cụm phải** — **cấm** stack / nút Tìm riêng (**filter-bar-layout-hard**) |
| AC-G-12 | Toolbar FULL: Làm mới · Lịch sử · config `fa-cog` · Delete theo chọn · **+ Tạo mới** · Import/Export stub OK |
| AC-G-13 | Grid flow: sort · filter cột panel · chọn dòng · help đúp/Ctrl+chuột phải |
| AC-G-14 | Hub Kind G: **cấm** Thêm mới trên hub title · card title VN (**GAP-QA-HUB-SLUG**) |
| AC-G-15 | `roadName` filter = SearchInput road-route — **cấm** Text free (**GAP-CSDL-ROAD-01**) |

### Report AC

**N/A** — packKind `list` · typed sổ columns **DEFER** (**GAP-PO-RPT-01** / **GAP-RPT-SRC-CSDL-01** / **Q-ENTRIES**).

## 7. Screens (REQUIRED)

| Surface | Pattern | FormMode | URL | Tab index | Actions | devSlash |
|---------|---------|----------|-----|-----------|---------|----------|
| S-HUB | Kind **G** hub | — | `/so-ts/csdl-so-sach` | tab csdl\|so | open-resource · KPI · cards | `/agent-dev` |
| S-LIST | Kind **B** catalog A–D+F | filter | `/so-ts/csdl-so-sach?resource=` | — | search · filter · Tạo mới · Refresh · Delete · config · History | `/agent-dev` |
| S-FORM-CREATE | Kind **D Slideout** Z1–Z3 | create | overlay | — | Lưu · Hủy · leave-confirm · footer | `/agent-dev` |
| S-FORM-EDIT | Kind **D Slideout** | edit | overlay | — | Lưu · Hủy · footer | `/agent-dev` |
| S-FORM-VIEW | Kind **D Slideout** | view | overlay | — | readOnly · **không** disabled xám | `/agent-dev` |
| S-FORM-COPY | Kind **D Slideout** | create (copy) | overlay | — | POST new · clear id · new code | `/agent-dev` |
| S-ACT-DELETE | Confirm modal | — | — | — | soft delete | `/agent-dev` |
| S-HIST | `LinCatalogHistoryModal` | — | — | — | **GAP-CSDL-HIST-01** | `/agent-dev` |
| S-ENTRIES | inline_grid (trong Slideout sổ) | edit | — | — | add/remove line | `/agent-dev` |
| S-SKIP-MAP | deep-link only | — | gis / pavement-section | — | **Cấm** map canvas list pack | — |

**devSlash:** `/agent-dev` (hub + list + slideout · **không** oms-map / ai-detect / camera).

**Cấm** Full-page form URL `/new`·`:id` cho pack này (giữ Slideout live) · **cấm** GOVOne chrome · **cấm** Resource form thay Slideout.

## 8. Leave / alert (REQUIRED)

| Case | Control | Cấm |
|------|---------|-----|
| Form dirty · đóng slideout / navigate / back-hub | `LeaveConfirmModal` + leave guard | `window.confirm` / native dialog |
| API 4xx validation | `useAppToast` business message | `window.alert` |
| API 5xx list/detail/catalog | toast error | silent empty / fake success |
| detail 404 | toast · đóng slideout | silent fail |
| thiếu `resource` trên list | không gọi list khi hub · API 422 | invent default resource |
| Delete | Confirm `Modal` / `useAlert` | native `confirm` |
| History | `LinCatalogHistoryModal` | invent History API path · `window.alert` stub as SSOT |
| Lookup road-route no match | SearchInput empty · save 422 | free-text substitute master |
| Overlay z-index (modal trên Slideout) | `useAlert` / Modal stacked SSOT | z-index hack / alert |

## 9. Open questions — Autopilot chốt (UNCLEAR data-analy)

| ID | Question | Decision (PO) |
|----|----------|----------------|
| Q-ROAD | `roadName` giữ Text hay SearchInput `road-route`? | **SearchInput `road-route`** P1 filter + form (**GAP-CSDL-ROAD-01**). |
| Q-PROV | Province master vs LOOKUP_STATIC 5 tỉnh? | **keep_static** LOOKUP_STATIC P1 · master province **P2**. |
| Q-ENTRIES | Typed sổ columns trong list pack này? | **defer_report** — giữ Col1–3 + note · **GAP-RPT-SRC-CSDL-01**. |
| GAP-CSDL-ORG-01 | org-unit SearchInput | **DEFER P2** — Text slim OK. |
| GAP-QA-HUB-SLUG | Hub card meta slug | **P1** hiện title/listTitle VN. |
| GAP-CSDL-HIST-01 | History | **`LinCatalogHistoryModal`** UI P1 · **cấm** invent API. |
| GAP-CSDL-AUTH-01 | RequirePermission | **DEFER** SD-AUTH — không block CRUD. |
| GAP-CSDL-ROUTE-UI | `/asset/…` vs `/so-ts/…` | Chốt live **`/so-ts/csdl-so-sach`**. |
| GAP-CSDL-API-DOC | API prefix | Chốt live **`api/v1/asset/csdl-records`**. |
| packKind | list vs report | **Confirm `list`**. |
| Prior artifacts | Design/SA/… confirmed | **Giữ** — delta gaps only · **cấm** wipe. |

UNCLEAR field path/version = **none** sau autopilot chốt — không AskQuestion.

## 10. Out of scope (this pack)

- Import Excel full 12 sheet wizard (toolbar toast/stub OK)
- Deep Biểu 1 form = giữ `pavement-section` route riêng
- GIS map shell / PostGIS geometry / Kind F canvas
- AI auto-fill 12 biểu
- Multi-entity Biểu 7 facade mở rộng
- Typed sổ report columns (GAP-RPT-SRC-CSDL-01)
- org-unit SearchInput P2 · partner-unit P2
- Auth NuGet wire (GAP-CSDL-AUTH-01)
- Re-scan demo HTML / crawl DemoRoot
- `yarn build` / e2e / `start:std` ở role PO
- Start role Design/SA/Dev trong cùng task (**GAP-PKT-ROLE-01**)

## 11. Handoff → Design (`/agent-design`)

| Field | Value |
|-------|-------|
| packKind confirm | **`list`** |
| Kind / surfaces | G hub + B catalog A–D+F + Kind D Slideout Z1–Z3 |
| Prototype | content-only · **giữ** `csdl-so-sach-list-prototype.html` · sync delta road SearchInput + hub title · **skip** note/sidebar/menu/chrome demo · **skip** Kind F map |
| reviewUrl | bắt buộc · `autoApprove=ON` → agent tự confirm Design (prior design_confirm giữ / re-Approve delta) |
| controlHint | §5 — **không** Text cho `roadName` · **không** đoán Text vs SearchInput |
| Screens | §7 · Grid AC §6 · Leave §8 |
| grid_standard | `po-design-grid-standard` + `filter-bar-layout-hard` + `slideout-form-layout` |
| peerStdUrl / mfeStdUrl | `http://localhost:9301/so-ts/csdl-so-sach` |
| BE | `api/v1/asset/csdl-records` · lookups road-route — **cấm** invent ERP / so-ts API / infra |
| Tab index | hub tab csdl\|so · form single slideout (không multi-tab form) |
| Next roles | design → sa → team-lead → dev → qa → review = **pending** đến lượt · chain ON |
| e2e | queued `/agent-qa*` only |
| blockedReason | — |
| Prior | design/sa/review artifacts **confirmed** — delta edit_page · không wipe |

## Version meta (REQUIRED)

| Field | Value |
|-------|-------|
| skillId | agent-po |
| skillVersion | 2026.08.25.02 |
| schemaVersion | 1 |
| workflowVersion | 2026.08.29.03 |
| rulesVersion | 2026.08.29.31 |
| generatedAt | 2026-08-29T10:55:00.000Z |
| versionGate | rechecked |
| contentHashPriorDataAnaly | sha256:e13a39df3b06c9b08f1ef4f197b6b0e76e3d7863b1e6fffe42a196a22bb1faad |
| headerFingerprintPrior | sha256:0528db4c9a04d817a2fd2d9867ace7ebf739fb05aac01942032a7110d9ff6a14 |
| orchestratorSkillVersion | 2026.08.29.03 |
| orchestratorWorkflowVersion | 2026.08.29.03 |
| dataAnalySkillVersion | 2026.08.25.01 |
| dataAnalyWorkflowVersion | 2026.08.29.03 |
| dataAnalyRulesVersion | 2026.08.29.31 |
| taskId | `task_1a6a0841` |

---
<!-- Version meta: skillId=agent-po skillVersion=2026.08.25.02 schemaVersion=1 workflowVersion=2026.08.29.03 rulesVersion=2026.08.29.31 versionGate=rechecked contentHashPriorDataAnaly=sha256:e13a39df3b06c9b08f1ef4f197b6b0e76e3d7863b1e6fffe42a196a22bb1faad taskId=task_1a6a0841 -->
