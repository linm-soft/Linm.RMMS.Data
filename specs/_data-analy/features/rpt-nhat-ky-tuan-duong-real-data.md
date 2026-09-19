# Real-data bind — rpt-nhat-ky-tuan-duong (Kind E · edit_page CR)

| | |
|---|---|
| feature | `rpt-nhat-ky-tuan-duong` |
| packKind | `report` |
| changeScope | `edit_page` |
| status | `done` |
| taskId | `task_54f0fb60` |
| cr | `nktd-pdf-20260917` · cite **SRC-NKTD-PDF** · Wave B |
| title | Nhật ký tuần đường (báo cáo Kind E) |
| sourceFeature | **`csdl-so-02`** |
| resource | `patrol-logs` |
| formNo | `02` |
| sourceFormReady | **yes** — Wave A Review PASS |
| sourceTables | `rmms_csdl_catalog_records` · typed So02 · `rmms_csdl_book_entries` (+ `LocationText`) |
| prefix | Report **`api/v1/report`** · BFF `web-bff/api/v1/report` · **cấm** `api/v1/reports` · **cấm ERP.*** |
| beRepo | `D:/AI-QLBD/Linm.RMMS.WebService` · DOMAIN-MAP Report · **cấm** Domains/Master |
| uiRepo | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Report` |
| mfeStdRoute | `/bao-cao/nhat-ky-tuan-duong` · alias `/bao-cao/nk-td` |
| mfeStdUrl | `http://localhost:9311/bao-cao/nhat-ky-tuan-duong` |
| formEntry | `http://localhost:9301/csdl-so-02` · hub `?resource=patrol-logs` |
| map | `none` · **cấm** invent map |
| contentHash | `sha256:c5bf1abeceee69764d8f365e1d599d92008faf28a01cb2a29c88520d8baa5703` |
| analyzedAt | `2026-09-18T16:56:00.000Z` |
| skillVersion | `2026.08.15.5` |
| schemaVersion | `1` |
| workflowVersion | `2026.08.15.5` |
| rulesVersion | `2026.08.15.8` |
| versionGate | `keep_current` |
| migrationHint | **none** this role · LocationText đã Wave A · report **không** Schema mới |

## § Delta Current vs New (`edit_page` · CR · `task_54f0fb60`)

| ID | Current live | New (this analy) |
|----|--------------|------------------|
| **GAP-NKTD-SRC-01** | Load check-in/`PatrolSessions` · seed 12 CUC2 | Bind read-model sổ `patrol-logs` + entries · empty = `items=[]` · **cấm** seed |
| **GAP-NKTD-DRILL-01** | `?kind=patrol-logs` | `/csdl-so-02` hoặc `?resource=patrol-logs&id={bookId}` |
| **GAP-NKTD-SIGN-01** | MatchOk · supervisorNote `""` | `RemarkSign` → `supervisorNote` / signed |
| Vị trí | check-in Km | `locationText` \|\| Km string |
| Export | CSV/Excel path keep | cùng filter · cột `supervisorNote` nếu grid có |
| Print | window.print | P1 grid · P2 bìa **GAP-NKTD-PRINT-01** không block |
| CRUD | — | **OUT** · tạo data chỉ `/csdl-so-02` |
| GPS | — | **cấm** gộp `rpt-tuan-duong` |

## §A — Nguồn

| sourceKind | sourceCite | empty | error |
|------------|------------|-------|-------|
| `context` | `docs/context/features/rpt-nhat-ky-tuan-duong.md` | — | version gate |
| `extract` | `docs/data/analyzed/nhat-ky-tuan-duong-pdf.md` (**SRC-NKTD-PDF**) | — | T-SO-02 cột · **cấm** re-OCR PDF |
| `review` | `specs/_cr/nktd-pdf-20260917/review.md` | — | GAP-NKTD-SRC/PRINT/DRILL/SIGN |
| `tl-cr` | `specs/_cr/nktd-pdf-20260917/task-rpt-nhat-ky-tuan-duong.md` | — | map cột HARD |
| `analy-form` | `csdl-so-02-control-hint.md` + `csdl-so-02-real-data.md` | — | sourceFormReady |
| `api` · Xem | `GET …/report/patrol-log-road?from=&to=&routeId=&q=` | empty grid VN · **không** seed | toast BE |
| `api` · Excel | `GET …/report/patrol-log-road/export` | file 0 dòng OK | toast |
| `entity` | `CsdlCatalogRecord` · `CsdlSo02` · `CsdlBookEntry` | 0 entries → empty report | tenant |
| `stale` | `PatrolSessions` / `PatrolCheckIns` / in-memory seed | **OUT** SSOT | GAP-NKTD-SRC-01 |
| `lookup` | `GET …/integration/road-routes/search` | «Tất cả tuyến» | toast |
| `mfe` | `PatrolLogRoadReportPage` · filter bar · reportEndpoint | live Kind E | drill kind= |
| `hdsd` | `docs/hdsd/bao-cao/nk-td/…` | — | bỏ Tạo mới |

`sourceCite` = path/controller **có trong repo** hoặc CR extract. **Cấm** invent path API · **cấm** ERP.*.

## §B — Bind field (HARD)

### Filters → query

| uiField | Label | controlHint | catalogKind | GET query | write | sameMfe |
|---------|-------|-------------|-------------|-----------|-------|---------|
| routeId | Tuyến | SearchInput | road-route | `?routeId=` / roadCode | — | yes |
| staffId | Cán bộ | SearchInput | P1 staff | `?staffId=` / q | — | yes |
| fromDate | Từ ngày | Date | — | `?from=` | — | yes · tz_day EventAt |
| toDate | Đến ngày | Date | — | `?to=` | — | yes |
| qSearch | Tìm | Input | — | `?q=` | — | yes |
| page / pageSize | Pager | — | — | `?page=` `?pageSize=` | — | yes · 50/100/200/500 |

### Grid ← entry (DTO)

| uiField / col | Label | GET field | source write path | sameMfe |
|---------------|-------|-----------|-------------------|---------|
| bookId | — | `bookId` | `CsdlCatalogRecord.Id` | yes · drill |
| bookNo | Số sổ | `bookNo` | `BookNo` | yes |
| entryId | — | `entryId` | `CsdlBookEntry.Id` | yes |
| day / checkedAt | Ngày | `day` / `checkedAt` | `EventAt` UTC→local | yes |
| route | Tuyến | `route` | `RoadCode`/`RoadName` | yes |
| patrolStaff | Cán bộ | `patrolStaff` | `CsdlSo02.PatrolStaff` | yes |
| locationKm | Km | `locationKm` | `LocationKm` | yes |
| locationText | Vị trí | `locationText` | `LocationText` else Km string | yes |
| weatherAndEvent | Nội dung | `weatherAndEvent` | `WeatherEvent` | yes |
| onSiteAction | XL tại chỗ | `onSiteAction` | `OnSiteAction` | yes |
| supervisorNote | Nhận xét/ký | `supervisorNote` | `RemarkSign` | yes |
| status | TT | `signed`/`pending` | RemarkSign nonempty | yes |
| note | Ghi chú | `note` | `Note` | yes · Config |

**Cấm** bind Col1–Col3 · **cấm** check-in `MatchOk` làm signed.

### Prefix map

| Operation | Path |
|-----------|------|
| Xem | `GET /web-bff/api/v1/report/patrol-log-road` |
| Excel | `GET /web-bff/api/v1/report/patrol-log-road/export` |
| Lookup tuyến | `GET /web-bff/api/v1/integration/road-routes/search` |
| Drill form | navigate `/csdl-so-02` or `/so-ts/csdl-so-sach?resource=patrol-logs&id={bookId}` — **cấm** `?kind=` |

API mirror: `api/v1/report/patrol-log-road`. FE: `PatrolLogRoadReportPage` · **cấm** path mới · **cấm** CRUD.

## §C — Catalog / lookup

| catalogKind | search/list API | seed/import cite | Cấm |
|-------------|-----------------|------------------|------|
| road-route | Integration `road-routes/search` | CUC2 38 · Type A | invent route table · QL.22 |
| staff P1 | nva/ttb/lvc/pmd search | P1 | invent HR API |
| report rows | Report query sổ | form Wave A data | seed 12 CUC2 khi empty |

## §D — Empty / error / DoD CR

| Case | UI |
|------|-----|
| Chưa Xem | state «Chưa xem» |
| Xem · 0 sổ/entry kỳ | empty · totalCount 0 · **không** 12 seed |
| Xem · có sổ Wave A | lưới khớp EventAt/tuyến |
| Drill | mở sổ · **fail** nếu `?kind=` |
| Excel/In trên filter bar | **fail** QA |
| Print bìa PDF | P2 · không fail P1 DoD |

## §E — Out of pack

- CRUD / Slideout / typed `new_page`
- `rpt-tuan-duong` GPS coverage
- `rpt-nhat-ky-tuan-kiem` Mẫu 8
- Invent `POST api/v1/patrol-logs` / `api/v1/reports`
- Re-scan CamScanner PDF · OCR handwriting trang 2–4
- Step 4b / migration / e2e / yarn build (role data_analy)

## Handoff

→ PO: § Delta + bind map + `sourceFormReady=yes` · compact `specs/rpt-nhat-ky-tuan-duong/handoff/data_analy-compact.md`

<!-- Version meta: skillVersion=2026.08.15.5 · schemaVersion=1 · workflowVersion=2026.08.15.5 · rulesVersion=2026.08.15.8 · versionGate=keep_current · changeScope=edit_page · cr=nktd-pdf-20260917 -->
