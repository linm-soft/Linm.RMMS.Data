# Real-data bind — csdl-so-07 (Kind B list + Kind D Slideout · row-violations)

| | |
|---|---|
| feature | `csdl-so-07` |
| packKind | `list` |
| changeScope | `new_page` |
| status | `done` |
| taskId | `task_20842c29` |
| resource | `row-violations` |
| formNo | `07` · Cục **HL + GPTC + Dự án** · live hub formNo `6` «Hành lang ATĐB + GP thi công» đến T-REN-01 |
| prefix | **live shell** `api/v1/asset/csdl-records` · BFF `web-bff/api/v1/asset/csdl-records` · typed DTO **SA** |
| beRepo | `D:/AI-QLBD/Linm.RMMS.WebService` · **cấm ERP.*** · **cấm** `api/v1/rmms/*` · **cấm** invent `api/v1/infra/*` · **cấm** Domains/Master · **cấm** runtime `/api/v1/row-violations` · `/api/v1/construction-permits` |
| uiRepo | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Asset` |
| mfeStdUrl | `http://localhost:9301/csdl-so-07` · hub `http://localhost:9301/so-ts/csdl-so-sach?resource=row-violations` |
| map | `none` · **cấm** invent map canvas |
| contentHash | `sha256:b928feb3e0d7900398812630e25afa43bfcbf4971633a9c1184c55ea2912ef69` |
| headerFingerprint | `sha256:a923102afa38664e58effeb2b0dccfae12b942d4a3a6fb3c1cb8355df00aa531` |
| sourceTables | shell `rmms_csdl_catalog_records` · `rmms_csdl_book_entries` · typed `Schema_CsdlSo07` (**SA/migration**) |
| catalogKind UI schema | `row-violations` (typed) · fallback hub `csdl-records` |
| IdCode prefix | `SO` |
| peer | report `rpt-vi-pham-hlatdb` drill · **cấm** merge ROW Sổ TS |

## § Delta Current vs New (`new_page` · `task_20842c29`)

| ID | Current live | New (this analy) |
|----|--------------|------------------|
| Form | 3 ô `detail*` + entries Col1–3 | Typed header + Tab A `violations[]` + Tab B `permits[]` (+ QLDA) |
| List cols | generic road/km/detail | code · road · km · contractor · status |
| API | `…/csdl-records?resource=row-violations` | **giữ prefix** · widen typed payload — SA |
| Legacy doc API | `/api/v1/row-violations` · `/construction-permits` (cite only) | **không** ship path mới · **GAP-SO07-APILEGACY-01** |
| formNo label | Live formNo 6 | Cục Sổ 07 · key `row-violations` giữ |
| Project | không QLDA | `projectMgmtUnit` + progress · **GAP-SO07-PROJECT-01** |
| Import | stub | Sheet HL/GPTC — OUT XLS |

## §A — Nguồn

| sourceKind | sourceCite | empty | error |
|------------|------------|-------|-------|
| `context` | `docs/context/features/csdl-so-07.md` | — | version mismatch → gate |
| `analy` | `specs/_data-analy/csdl-cuc-2026/ANALYSIS-AND-TASKS.md` § T-SO-07 | — | typed SSOT |
| `catalog-doc` | `docs/context/11-CSDL-SO-SACH-DATABASE-API.md` §3.6 | RowViolation · ConstructionPermit | cite field · **không** = runtime path |
| `demo` | `Linm.RMMS.Demo/.../csdl-so-sach.html` (+ redirect demo) | — | **UI only** · **cấm** SSOT data |
| `api` · list | `GET …/csdl-records?resource=row-violations&…` | empty grid VN | 422 thiếu resource · toast |
| `api` · detail | `GET …/csdl-records/{id}` | — | 404 → đóng slideout · toast |
| `api` · CRUD | `POST` / `PUT` / soft `DELETE` | — | validation toast |
| `entity` | `CsdlCatalogRecordEntity` · `CsdlBookEntryEntity` (shell) | — | tenant `CompanyCode` |
| `entity` | typed Sổ 07 (**SA**) | — | Schema_CsdlSo07 pair |
| `mfe` | hub `CsdlSoSachPage` · form `CsdlFormSlideout` | generic | typed replace / alias page |
| `catalog` | Integration ui-schema `row-violations` | bootstrap cols | toast |
| `report` | `rpt-vi-pham-hlatdb` drill `?resource=row-violations&id=` | — | sau typed READY |
| `derived` | IdCode `SO-yyyyMMdd-nnnn` | — | BE generate |

`sourceCite` = path/controller **có trong repo** hoặc analy cite. **Cấm** invent `api/v1/so-ts/*` · **cấm** ERP.*.

## §B — Bind field (HARD)

| uiField | Label | controlHint | catalogKind | GET | write field | sameMfe |
|---------|-------|-------------|-------------|-----|-------------|---------|
| resource | Resource | QS / const | — | required `row-violations` | `resource` | yes |
| search | Tìm | SearchTextInput | — | `?search=` | — | yes |
| province | Tỉnh | Dropdown | LOOKUP_STATIC | `?province=` | `province` | yes |
| status | TT | Dropdown | LOOKUP_STATIC | `?status=` | `status` | yes |
| roadCode | Đường | SearchInput | road-route | `?roadCode=` / detail | `roadCode` (+ `roadName`) | yes · **GAP-CSDL-ROAD-01** |
| fromDate | Từ ngày | Date | — | `?fromDate=` | — | yes |
| toDate | Đến ngày | Date | — | `?toDate=` | — | yes |
| code | Mã | Text ro | — | detail `code` | auto | yes |
| contractor | Nhà thầu | Text | — | detail / list | `contractor` | yes · **GAP-CSDL-ORG-01** |
| roadName | Tên đường | Text ro | — | detail / list | display | yes |
| kmFrom | Km từ | Number | — | detail / list | `kmFrom` | yes |
| kmTo | Km đến | Number | — | detail / list | `kmTo` | yes |
| manageUnit | ĐV QL | Text | — | detail / list | `manageUnit` | yes |
| notes | Ghi chú | Textarea | — | detail | `notes` | yes |
| violations[].at | Ngày VP | Date | — | nested | `at` | yes |
| violations[].stationKm | Km | Number/Text | — | nested | `stationKm` | yes |
| violations[].adminArea | Địa phận | Text | — | nested | `adminArea` | yes |
| violations[].violationStatus | TT VP | Dropdown | LOOKUP_STATIC | nested | `violationStatus` | yes |
| violations[].orgName | Tổ chức | Text | — | nested | `orgName` | yes |
| violations[].minutesDepot | BB hạt | Text | — | nested | `minutesDepot` | yes |
| violations[].minutesCommune | BB xã | Text | — | nested | `minutesCommune` | yes |
| violations[].minutesAdmin | BB VP | Text | — | nested | `minutesAdmin` | yes |
| violations[].currentState | Hiện trạng | Textarea | — | nested | `currentState` | yes |
| violations[].unitConfirm | Xác nhận | Text | — | nested | `unitConfirm` | yes |
| permits[].permitNo | Số GP | Text | — | nested | `permitNo` | yes |
| permits[].permitDays | Số ngày | Integer | — | nested | `permitDays` | yes |
| permits[].issuer | ĐV cấp | Text | — | nested | `issuer` | yes |
| permits[].investor | CĐT | Text | — | nested | `investor` | yes |
| permits[].projectMgmtUnit | QLDA | Text | — | nested | `projectMgmtUnit` | yes · **GAP-SO07-PROJECT-01** |
| permits[].contractor | TC | Text | — | nested | `contractor` | yes |
| permits[].workName | Tên CT | Text | — | nested | `workName` | yes |
| permits[].stationKm | Km | Number/Text | — | nested | `stationKm` | yes |
| permits[].expiresAt | Hạn | Date | — | nested | `expiresAt` | yes |
| permits[].extendedAt | Gia hạn | Date | — | nested | `extendedAt` | yes |
| permits[].progress | Tình hình | Textarea | — | nested | `progress` | yes |
| isActive | Active | — | — | detail | soft-delete | yes |
| updatedAt | Cập nhật | DateTime ro | — | detail | — | yes |

**Prefix map:**

| Operation | Path |
|-----------|------|
| List | `GET /web-bff/api/v1/asset/csdl-records?resource=row-violations` |
| Detail | `GET /web-bff/api/v1/asset/csdl-records/{id}` |
| Create | `POST /web-bff/api/v1/asset/csdl-records` body `resource=row-violations` + typed fields + nested arrays |
| Update | `PUT /web-bff/api/v1/asset/csdl-records/{id}` |
| Delete | `DELETE /web-bff/api/v1/asset/csdl-records/{id}` (soft) |

API mirror: `api/v1/asset/csdl-records`. FE cite hub: `services/csdlSoSach/endpoint.ts` `BASE=/asset/csdl-records` — typed page **reuse** cùng BASE.

## §C — Catalog / lookup

| catalogKind | search/list API | seed/import cite | Cấm |
|-------------|-----------------|------------------|------|
| LOOKUP_STATIC province | FE `PROVINCES` (5) | demo align · **không** master P1 | Dropdown demo-only SSOT quốc gia |
| LOOKUP_STATIC status | FE statuses | PO chốt enum sổ / VP | — |
| LOOKUP_STATIC violationStatus | FE VP statuses | T-SO-07 · PO | invent enum khác |
| road-route | `GET /integration/road-routes/search` | shared catalog READY | free-text khi đã chốt SearchInput |
| org-unit (P2) | `GET /integration/org-units/search` | shared org READY | hardcode ĐV |
| catalog ui-schema | Integration `row-violations` | `LinCatalogUiSchemaEditorModal` | invent schema path |

## §D — Map / vẽ

`none` trên pack list. Deep-link GIS bbox optional (T-GIS-01) · **cấm** canvas.

## §E — Empty / error / i18n

| Case | UX |
|------|-----|
| List empty | Grid copy VN «Chưa có bản ghi hành lang / GPTC» |
| 422 thiếu resource | toast · không crash |
| 404 detail | đóng slideout · toast |
| Tab empty arrays | cho phép 0 dòng · validation theo PO |
| Leave dirty | LeaveConfirmModal |

## §F — Cấm

- ERP.* / Domains/Master / invent `api/v1/infra/*` / `api/v1/so-ts/csdl-records`
- Runtime path `/api/v1/row-violations` · `/api/v1/construction-permits` (doc §3.6 = cite only)
- Demo/localStorage làm SSOT runtime
- Chỉ 3 ô `detail*` hoặc flat `col1–3` làm DoD form
- Flatten Tab A+B thành 1 grid Col1–3
- Guid IdCode · invent map canvas · yarn build/e2e ở data_analy
- Merge form với Sổ TS `so-ts-*`

## DoR real-data

- [x] §A–§F filled · status `done`
- [x] bind khớp control-hint headerFingerprint
- [x] API prefix live Asset cite
