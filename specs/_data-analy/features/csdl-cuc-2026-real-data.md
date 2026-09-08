# Real-data bind — csdl-cuc-2026 (Hub KPI 16+10 + import Excel Cục)

| | |
|---|---|
| feature | `csdl-cuc-2026` |
| packKind | `list` |
| changeScope | `new_page` |
| status | `done` |
| taskId | `task_63dd8d84` |
| prefix | **live** `api/v1/asset/csdl-records` · BFF `web-bff/api/v1/asset/csdl-records` · catalog KPI + import = **widen / GAP** SA |
| beRepo | `D:/AI-QLBD/Linm.RMMS.WebService` · **cấm ERP.*** · **cấm** `api/v1/rmms/*` · **cấm** invent `api/v1/infra/*` |
| uiRepo | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Asset` |
| mfeStdUrl | `http://localhost:9301/csdl-cuc-2026` · hub `http://localhost:9301/so-ts/csdl-so-sach` |
| mfeStdRoute | `/csdl-cuc-2026` |
| map | `none` trên hub · Sổ 10 map = child done · **cấm** invent canvas |
| demo | redirect `csdl-so-sach-demo.html` → `asset/csdl-so-sach.html` · **UI only** · **cấm** demo-json SSOT |
| contentHash | `sha256:8DED37798D5ACEDFA3E106C0308B26152C9DEB7D1977DD7EDF5EB87991834BE2` |
| demoHash | `sha256:C2C9F8194CB104B3202BCAA46A589C9BABA5CF8062AA12E7D0872A9E96EBA7AE` |
| headerFingerprint | `sha256:e9caffb7922b7d81264750b2701a9318aae1f180b145f3f204a4fd5e6b2dcd33` |
| lane | **web only** · **cấm** qlbd-mobile / `yarn run-implement-mobile` |
| sourceTables | shell `rmms_csdl_catalog_records` · typed tables child (**done**) · import staging **SA** |

## § Delta Current vs New (`new_page` · `task_63dd8d84`)

| ID | Current live | New (this analy) |
|----|--------------|------------------|
| KPI / catalog | **12 biểu + 8 sổ** | **16 + 10** từ catalog API · formNo Cục |
| Import | stub / OUT | Excel 16 sheet · 1 sheet = 1 resource · merge header |
| Route | `/so-ts/csdl-so-sach` | + alias `/csdl-cuc-2026` |
| DOMAIN-MAP | có `csdl-so-sach` + typed | thiếu slug `csdl-cuc-2026` → **GAP-CUC-DM-01** |
| Typed children | 16+10 **done** | **cấm** re-queue · deep-link only |
| Peer hang-muc / Sổ TS | parallel | Q-PEER deep-link · **cấm** merge row (**GAP-CSDL-CUC-11**) |

## §A — Nguồn

| sourceKind | sourceCite | empty | error |
|------------|------------|-------|-------|
| `context` | `docs/context/features/csdl-cuc-2026.md` | — | version mismatch → gate |
| `analy` | `specs/_data-analy/csdl-cuc-2026/ANALYSIS-AND-TASKS.md` | — | Wave 0 · T-XLS-00 |
| `context` | `docs/context/features/csdl-so-sach.md` | — | hub shell peer |
| `demo` | `…/csdl-so-sach-demo.html` + `…/asset/csdl-so-sach.html` | — | **UI only** |
| `api` · catalog | `GET …/asset/…/catalog` (live / widen) | KPI 0 OK | toast · **cấm** hardcode 12/8 |
| `api` · list shell | `GET …/csdl-records?resource=` | empty OK | 422 thiếu resource · toast |
| `api` · import XLS | **GAP** — POST import multi-sheet | — | toast · confirm · **cấm** invent path như live |
| `entity` | `CsdlCatalogRecordEntity` (shell) | — | tenant `CompanyCode` |
| `mfe` | `CsdlSoSachPage` | 12+8 | → 16+10 |
| `excel` | `1. Biểu mẫu CSDL.xls` sheets 1–16 | — | cite import · not runtime SSOT |
| `domain` | `docs/DOMAIN-MAP.md` | — | **GAP-CUC-DM-01** |
| `peer` | typed `csdl-bieu-*` / `csdl-so-*` | — | **done** · link only |

`sourceCite` = path/controller **có trong repo** hoặc Excel/analy cite. Import path = **GAP** đến SA — **cấm** bịa endpoint như live (**GAP-DA-REAL-03**).

### Catalog map (16 biểu + 10 sổ) — resource SSOT

| formNo | resource | slug typed (done) | packKind |
|--------|----------|-------------------|----------|
| 01 | `pavement-sections` | `csdl-bieu-01` | list |
| 02 | `bridges` | `csdl-bieu-02` | list |
| 03 | `road-tunnels` | `csdl-bieu-03` | list |
| 04 | `culverts` | `csdl-bieu-04` | list |
| 05 | `ditches` | `csdl-bieu-05` | list |
| 06 | `underpasses` | `csdl-bieu-06` | list |
| 07 | `shoulders-fences` | `csdl-bieu-07` | list |
| 08 | `traffic-safety` | `csdl-bieu-08` | list |
| 09 | `boundary-markers` | `csdl-bieu-09` | list |
| 10 | `retaining-walls` | `csdl-bieu-10` | list |
| 11 | `lighting-systems` | `csdl-bieu-11` | list |
| 12 | `green-assets` | `csdl-bieu-12` | list |
| 13 | `noise-barriers` (new hub) | `csdl-bieu-13` | list |
| 14 | `its-systems` (new) | `csdl-bieu-14` | list |
| 15 | `ops-facilities` (new) | `csdl-bieu-15` | list |
| 16 | `interchanges` (new) | `csdl-bieu-16` | list |
| S1 | `inspection-logs` | `csdl-so-01` | list |
| S2 | `patrol-logs` | `csdl-so-02` | list |
| S3 | `duty-incident-logs` (merge) | `csdl-so-03` | list |
| S4 | `traffic-counts` | `csdl-so-04` | list |
| S5 | TNGT/điểm đen **new** | `csdl-so-05` | list |
| S6 | `bridge-inspections` | `csdl-so-06` | list |
| S7 | `row-violations` | `csdl-so-07` | list |
| S8 | `maintenance-work-logs` | `csdl-so-08` | list |
| S9 | ITS ops **new** | `csdl-so-09` | list |
| S10 | bình đồ **new** | `csdl-so-10` | map |

## §B — Bind field (HARD)

### B1 — Hub filter / KPI

| uiField | Label | controlHint | catalogKind | GET | write field | sameMfe |
|---------|-------|-------------|-------------|-----|-------------|---------|
| tab | Tab | Tabs | — | client | — | yes |
| search | Tìm | SearchTextInput | — | catalog `?search=` | — | yes / gap widen |
| resource | Resource | QS/chip | — | `?resource=` | — | yes |
| kpiBieu | Số biểu | Badge | — | catalog count kind=bieu | — | yes · **must 16** |
| kpiSo | Số sổ | Badge | — | catalog count kind=so | — | yes · **must 10** |

### B2 — Catalog card row

| uiField | Label | controlHint | catalogKind | GET | write field | sameMfe |
|---------|-------|-------------|-------------|-----|-------------|---------|
| formNo | Số TT | Text | — | catalog | — | yes |
| titleVn | Tên | Text | — | catalog | — | yes |
| resource | Key | const | — | catalog | — | yes |
| count | Bản ghi | Number | — | count API / aggregate | — | yes |
| openTyped | Mở | Link/Button | — | nav `/csdl-bieu-*` hoặc `?resource=` | — | yes |

### B3 — Import Excel (HARD · **GAP** SA)

| uiField | Label | controlHint | catalogKind | GET/POST | write field | sameMfe |
|---------|-------|-------------|-------------|----------|-------------|---------|
| importFile | File .xls | FileButton | — | POST import **GAP** | multipart | **gap** |
| sheetMap | Sheet→resource | Dropdown/table | — | preview **GAP** | sheetName→resource | **gap** |
| skipBridge | Skip cầu âm | Checkbox | — | Biểu 1 rule | flag | **gap** |
| exportXls | Export | Button | — | GET export **GAP** | resource | **gap** |

**Prefix live (cite):**

| Operation | Path |
|-----------|------|
| Records CRUD shell | `GET/POST/PUT/DELETE /web-bff/api/v1/asset/csdl-records?resource=` |
| Catalog / KPI | `GET …/asset/…/catalog` (live hub — widen 16+10) **hoặc** aggregate từ DOMAIN resources |
| Import multi-sheet | **GAP** SA — đề xuất `POST …/asset/csdl-records/import` · **cấm** invent như live |
| Lookups | Integration `road-route` · `org-unit` (cite child typed) |

### B4 — Q-PEER / hang-muc (cấm merge)

| Peer | Bind | Cấm |
|------|------|-----|
| Sổ TS `so-ts-*` | deep-link only | 1 form hai chuẩn · merge PK |
| hang-muc `/so-ts/hang-muc` | count / deep-link | lưới 40 ô vào biểu |
| LOOKUP | `road-route` 3 tầng · tỉnh · org · Km · side · GPS | coi LOOKUP = được gộp entity |

## §C — Catalog

| catalogKind | search/list API | seed/import cite | Cấm |
|-------------|-----------------|------------------|------|
| csdl-catalog | Asset catalog / csdl-records aggregate | Excel QĐ 08/2026 | hardcode 12+8 |
| csdl-records | `…/csdl-records?resource=` | typed child tables | invent infra |
| road-route | Integration road-routes | gov-vn / peer | NHANH/TRANH/GOM làm tuyến chính |
| org-unit | Integration org-units | drvn-org | ERP master |
| import-xls | **GAP** | `1. Biểu mẫu CSDL.xls` | demo-json rows |

## §D — Empty / error

| Case | UI |
|------|-----|
| Catalog empty | empty VN · KPI 0 · **cấm** mock cards |
| Import sheet lệch cột | toast + list lỗi dòng · **cấm** alert |
| Import Biểu 1 hàng cầu âm | skip + báo cáo số skip |
| 422 thiếu resource | toast |
| Typed child 404 | toast · giữ hub |

## §E — IdCode / tenant

- Hub **không** invent IdCode — thuộc typed child.
- Tenant `CompanyCode` trên mọi API Asset.
- **Cấm** Guid làm mã nghiệp vụ.

## §F — Out of scope (this pack)

- Re-implement typed Slideout 16+10
- Sync batch Sổ TS → biểu (sau P1)
- Report pack / mobile
- Step 4b migration / e2e (role data_analy)

## §G — Handoff

| Next | Need |
|------|------|
| PO | requirement · AC hub 16+10 + import · cite GAPs |
| Design | Kind G prototype + reviewUrl · zone ids A–D + import modal |
| SA | DOMAIN-MAP `csdl-cuc-2026` · catalog+import API confirm |
| TL | **cấm** queue typed child lại · lane web only |

## Version meta

| Field | Value |
|-------|-------|
| skillId | agent-data-analy |
| skillVersion | 2026.08.25.01 |
| schemaVersion | 1 |
| workflowVersion | 2026.09.01.02 |
| generatedAt | 2026-09-06T19:27:00.000Z |
| contentHash | sha256:8DED37798D5ACEDFA3E106C0308B26152C9DEB7D1977DD7EDF5EB87991834BE2 |
| demoHash | sha256:C2C9F8194CB104B3202BCAA46A589C9BABA5CF8062AA12E7D0872A9E96EBA7AE |
| headerFingerprint | sha256:e9caffb7922b7d81264750b2701a9318aae1f180b145f3f204a4fd5e6b2dcd33 |
| sourceCite | CTX · ANALYSIS · DOMAIN-MAP · live csdl-records · Excel 16 sheet |
