# Real-data bind — csdl-so-02 (Kind B list + Kind D Slideout · patrol-logs)

| | |
|---|---|
| feature | `csdl-so-02` |
| packKind | `list` |
| changeScope | `edit_page` |
| status | `done` |
| taskId | `task_2a2fd5c4` |
| cr | `nktd-pdf-20260917` · cite **SRC-NKTD-PDF** |
| resource | `patrol-logs` |
| formNo | `02` · Cục **Nhật ký tuần đường** |
| prefix | **live** `api/v1/asset/csdl-records` · BFF `web-bff/api/v1/asset/csdl-records` · **giữ** |
| beRepo | `D:/AI-QLBD/Linm.RMMS.WebService` · **cấm ERP.*** · **cấm** invent `api/v1/patrol-logs` · **cấm** invent `api/v1/infra/*` · **cấm** Domains/Master |
| uiRepo | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Asset` |
| mfeStdUrl | `http://localhost:9301/csdl-so-02` · hub `http://localhost:9301/so-ts/csdl-so-sach?resource=patrol-logs` |
| map | `none` · **cấm** invent map canvas |
| contentHash | `sha256:3ddc42d7c4404f439925322953f28ffc9d3b263726ac6cf5216065751c19b4d6` |
| headerFingerprint | `sha256:1b032f04f5154622239e0e2bdbebe6923ec76ba9ca33d283b51ebe0062c0d471` |
| analyzedAt | `2026-09-18T03:29:00.290Z` |
| sourceTables | `rmms_csdl_catalog_records` · `rmms_csdl_book_entries` · typed `Schema_CsdlSo02` · **+** `LocationText` via **`Schema_CsdlSo02LocationText`** (CLI pair nếu cột mới · Dev Step 4b) |
| catalogKind UI schema | `patrol-logs` (typed) |
| IdCode prefix | `SO` |
| migrationHint | `Schema_CsdlSo02LocationText` · pair `.cs`+`.Designer.cs` · **cấm** Write tay Schema · **cấm** Schema+Seed 1 file |

## § Delta Current vs New (`new_page` · `task_1c1e0895`) — **giữ**

| ID | Current live | New (this analy) |
|----|--------------|------------------|
| Form | 3 ô `detail*` + entries Col1–3 | Typed T-SO-02 header + entry fields + sketch/media |
| List cols | generic road/km/detail | bookNo · contractor · NV tuần · period · Km |
| API | `…/csdl-records?resource=patrol-logs` | **giữ prefix** · widen typed payload — SA |
| formNo label | Live Sổ 1 | Cục Sổ 02 · key `patrol-logs` giữ |
| File | không | FileService sketch + media · T-FILE-01 |
| Import | stub | Sheet tuần đường — OUT XLS |

## § Delta Current vs New (`edit_page` · CR PDF · `task_2a2fd5c4`)

| ID | Current live (post new_page done) | New (CR Wave A) |
|----|-----------------------------------|-----------------|
| **GAP-NKTD-LOC-01** | Entry: `locationKm` number * · entity `LocationKm` · **không** `LocationText` | Bind `entries.locationText` ↔ `LocationText` nvarchar · GET/POST/PUT 1:1 · validation OR với Km · list col vị trí text |
| weatherEvent | Input 1 dòng · field string OK | UI → Textarea · **giữ** write field `weatherEvent` |
| File | text-id sketch/media | **GAP-SO02-FILE-01** debt · **cấm** invent file API |
| API path | `csdl-records?resource=patrol-logs` | **giữ** · **cấm** invent `api/v1/patrol-logs` |
| Report | Kind E check-in seed | **OUT Wave A** · park `rpt-nhat-ky-tuan-duong` |
| Migration | `Schema_CsdlSo02` có LocationKm | **Nếu** cột mới → `Schema_CsdlSo02LocationText` CLI pair |

## §A — Nguồn

| sourceKind | sourceCite | empty | error |
|------------|------------|-------|-------|
| `context` | `docs/context/features/csdl-so-02.md` | — | version mismatch → gate |
| `extract` | `docs/data/analyzed/nhat-ky-tuan-duong-pdf.md` (**SRC-NKTD-PDF**) | — | CR cột vị trí chữ |
| `review` | `specs/_cr/nktd-pdf-20260917/review.md` | — | GAP-NKTD-LOC-01 |
| `analy` | prior control-hint/real-data new_page · cluster T-SO-02 | — | **giữ** · không wipe |
| `api` · list | `GET …/csdl-records?resource=patrol-logs&…` | empty grid VN | 422 thiếu resource · toast |
| `api` · detail | `GET …/csdl-records/{id}` | — | 404 → đóng slideout · toast |
| `api` · CRUD | `POST` / `PUT` / soft `DELETE` | — | validation: eventAt + (km\|text) + weather |
| `entity` | `CsdlBookEntryEntity` · `LocationKm` · **+** `LocationText` | — | tenant `CompanyCode` |
| `migration` | `Schema_CsdlSo02` · **+** `Schema_CsdlSo02LocationText` (nếu cột mới) | — | CLI pair Dev |
| `mfe` | `CsdlSo02Page` · `CsdlSo02FormSlideout` | live typed | thiếu locationText Input |
| `catalog` | Integration ui-schema `patrol-logs` | bootstrap | seed field locationText |
| `file` | FileService integrate-file-upload-web | — | **GAP-SO02-FILE-01** · **cấm** invent |
| `derived` | IdCode `SO-yyyyMMdd-nnnn` | — | BE generate |

`sourceCite` = path/controller **có trong repo** hoặc CR extract. **Cấm** invent `api/v1/patrol-logs` · **cấm** ERP.*.

## §B — Bind field (HARD)

| uiField | Label | controlHint | catalogKind | GET | write field | sameMfe |
|---------|-------|-------------|-------------|-----|-------------|---------|
| resource | Resource | QS / const | — | required `patrol-logs` | `resource` | yes |
| search | Tìm | SearchTextInput | — | `?search=` | — | yes |
| province | Tỉnh | Dropdown | LOOKUP_STATIC | `?province=` | `province` | yes |
| status | TT | Dropdown | LOOKUP_STATIC | `?status=` | `status` | yes · không in PDF |
| roadCode | Đường | SearchInput | road-route | `?roadCode=` / detail | `roadCode` (+ `roadName`) | yes |
| fromDate | Từ ngày | Date | — | `?fromDate=` | — | yes |
| toDate | Đến ngày | Date | — | `?toDate=` | — | yes |
| code | Mã | Text ro | — | detail `code` | auto | yes |
| bookNo | Số quyển | Text | — | detail / list | `bookNo` | yes |
| contractor | Nhà thầu | Text | — | detail / list | `contractor` | yes |
| kmFrom | Lý trình từ | Number | — | detail / list | `kmFrom` | yes |
| kmTo | Lý trình đến | Number | — | detail / list | `kmTo` | yes |
| patrolStaff | NV tuần | Text | — | detail / list | `patrolStaff` | yes |
| periodStart | Ngày BĐ | Date | — | detail | `periodStart` | yes |
| periodEnd | Ngày KT | Date | — | detail | `periodEnd` | yes |
| manageUnit | ĐV QL | Text | — | detail / list | `manageUnit` | yes |
| notes | Ghi chú | Textarea | — | detail | `notes` | yes |
| entries[].lineNo | STT | Integer | — | nested | `lineNo` | yes |
| entries[].eventAt | Giờ/ngày | DateTime | — | nested | `eventAt` | yes · * |
| entries[].locationKm | Lý trình Km | Number | — | nested | `locationKm` | yes · soft OR |
| **entries[].locationText** | **Vị trí / SC-VP** | **Text** | — | nested | **`locationText`** | yes · **GAP-NKTD-LOC-01** · soft OR |
| entries[].weatherEvent | Thời tiết+diễn biến | **Textarea** | — | nested | `weatherEvent` | yes · * |
| entries[].onSiteAction | XL tại chỗ | Textarea | — | nested | `onSiteAction` | yes |
| entries[].remarkSign | Nhận xét+ký | Text | — | nested | `remarkSign` | yes |
| entries[].note | Ghi chú dòng | Text | — | nested | `note` | yes |
| entries[].sketchRef | Sketch | FileRef / Text | — | nested | `sketchRef` | yes · **GAP-SO02-FILE-01** |
| entries[].mediaIds | Media | FileMulti / Text | — | nested | `mediaIds` | yes · debt |
| isActive | Active | — | — | detail | soft-delete | yes |
| updatedAt | Cập nhật | DateTime ro | — | detail | — | yes |

**Validation (HARD):** `eventAt` required · `weatherEvent` required · (`locationKm` has value **OR** `locationText` not empty).

**Prefix map:**

| Operation | Path |
|-----------|------|
| List | `GET /web-bff/api/v1/asset/csdl-records?resource=patrol-logs` |
| Detail | `GET /web-bff/api/v1/asset/csdl-records/{id}` |
| Create | `POST /web-bff/api/v1/asset/csdl-records` body `resource=patrol-logs` + typed fields **incl. locationText** |
| Update | `PUT /web-bff/api/v1/asset/csdl-records/{id}` |
| Delete | `DELETE /web-bff/api/v1/asset/csdl-records/{id}` (soft) |

API mirror: `api/v1/asset/csdl-records`. FE: `CsdlSo02Page` · **cấm** path mới.

## §C — Catalog / lookup

| catalogKind | search/list API | seed/import cite | Cấm |
|-------------|-----------------|------------------|------|
| LOOKUP_STATIC province | FE `PROVINCES` (5) | giữ P1 | Dropdown demo-only SSOT quốc gia |
| LOOKUP_STATIC status | FE statuses | filter only · không PDF | — |
| road-route | `GET /integration/road-routes/search` | shared catalog READY | free-text khi đã chốt SearchInput |
| org-unit / partner-unit | P2 DEFER | — | hardcode ĐV |
| catalog ui-schema | Integration `patrol-logs` | seed **`locationText`** field | invent schema path |
| file | FileService upload | integrate-file-upload-web | invent file API |

## §D — Map / vẽ

`none` trên pack list. Sketch = file đính kèm / text-id · **không** OMS map.

## §E — Empty / error / i18n

| Case | UX |
|------|-----|
| List empty | Grid copy VN «Chưa có nhật ký tuần đường» |
| Entry thiếu Km **và** text | validation toast · highlight cả hai field |
| 422 thiếu resource | toast · không crash |
| 404 detail | đóng slideout · toast |
| Upload fail | toast · giữ draft · **GAP-SO02-FILE-01** |
| Leave dirty | LeaveConfirmModal |

## §F — Cấm

- ERP.* / Domains/Master / invent `api/v1/infra/*` / `api/v1/patrol-logs` / `api/v1/so-ts/*`
- Demo/localStorage làm SSOT runtime · **cấm** re-scan demo HTML ở CR này
- Wipe pack new_page · overwrite `task/csdl-so-02.md`
- Enqueue `rpt-nhat-ky-tuan-duong` đến Review Wave A PASS
- Guid IdCode · invent map · yarn build/e2e ở data_analy · start role PO

## DoR real-data

- [x] §A–§F filled · status `done` · `changeScope=edit_page`
- [x] bind `locationText` khớp control-hint headerFingerprint
- [x] cite SRC-NKTD-PDF · GAP-NKTD-LOC-01 · Schema_CsdlSo02LocationText hint
- [x] API prefix live Asset cite
