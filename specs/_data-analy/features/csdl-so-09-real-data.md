# Real-data bind — csdl-so-09 (Kind B list + Kind D Slideout · its-ops-logs)

| | |
|---|---|
| feature | `csdl-so-09` |
| packKind | `list` |
| changeScope | `new_page` |
| status | `done` |
| taskId | `task_8076c138` |
| resource | `its-ops-logs` (**NEW** · seed catalog) |
| formNo | `09` · Cục **QL vận hành ITS/ETC/KSTTX** · **≠** Biểu formNo 9 `boundary-markers` |
| prefix | **live shell** `api/v1/asset/csdl-records` · BFF `web-bff/api/v1/asset/csdl-records` · typed DTO **SA** |
| beRepo | `D:/AI-QLBD/Linm.RMMS.WebService` · **cấm ERP.*** · **cấm** `api/v1/rmms/*` · **cấm** invent `api/v1/infra/*` · **cấm** Domains/Master |
| uiRepo | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Asset` |
| mfeStdUrl | `http://localhost:9301/csdl-so-09` · hub `http://localhost:9301/so-ts/csdl-so-sach?resource=its-ops-logs` |
| map | `none` · **cấm** invent map canvas |
| contentHash | `sha256:1cbd0cd26f977a518c29457acddd7c893fa56fe9bd750ac1ad6a15b0976d03dc` |
| headerFingerprint | `sha256:c00fdbdda898129b6408c35f9fb57cd2cc918356208b1067310d40c8f3cbefd9` |
| sourceTables | shell `rmms_csdl_catalog_records` · `rmms_csdl_book_entries` · typed `Schema_CsdlSo09` (**SA/migration**) |
| catalogKind UI schema | `its-ops-logs` (typed) · fallback hub `csdl-records` |
| IdCode prefix | `SO` |
| peerLink | Biểu 14 `its-systems` · DOMAIN-MAP `csdl-bieu-14` · **LOOKUP/deep-link** · **cấm** merge ROW |

## § Delta Current vs New (`new_page` · `task_8076c138`)

| ID | Current live | New (this analy) |
|----|--------------|------------------|
| Resource | **MISSING** (GAP-CSDL-CUC-05) | Seed `its-ops-logs` + hub card formNo 09 |
| Form | không / generic Col1–3 nếu bootstrap | Typed T-SO-09 header (thầu · Km · kỳ) + entry 9 cột ca trực |
| List cols | — | bookNo · contractor · road · Km · period · status |
| API | shell `…/csdl-records` | **giữ prefix** · `?resource=its-ops-logs` · widen typed — SA |
| Link | — | `linkBieu14Id` → Biểu 14 / `its-systems` |
| File | không | **không** bắt buộc (T-FILE-01 = Sổ 1/2/6) |
| Import | stub | Sheet ITS/ETC — OUT XLS |

## §A — Nguồn

| sourceKind | sourceCite | empty | error |
|------------|------------|-------|-------|
| `context` | `docs/context/features/csdl-so-09.md` | — | version mismatch → gate |
| `analy` | `specs/_data-analy/csdl-cuc-2026/ANALYSIS-AND-TASKS.md` § T-SO-09 | — | typed SSOT |
| `demo` | `Linm.RMMS.Demo/.../csdl-so-sach.html` (+ redirect demo) | — | **UI only** · **cấm** SSOT data |
| `api` · list | `GET …/csdl-records?resource=its-ops-logs&…` | empty grid VN | 422 thiếu resource · toast |
| `api` · detail | `GET …/csdl-records/{id}` | — | 404 → đóng slideout · toast |
| `api` · CRUD | `POST` / `PUT` / soft `DELETE` | — | validation toast |
| `entity` | `CsdlCatalogRecordEntity` · `CsdlBookEntryEntity` (shell) | — | tenant `CompanyCode` |
| `entity` | typed Sổ 09 (**SA**) | — | Schema_CsdlSo09 pair |
| `mfe` | hub `CsdlSoSachPage` · form `CsdlFormSlideout` / alias page | chưa có key | typed page + seed |
| `peer` | Biểu 14 `CsdlBieu14Page` · `its-systems` | — | deep-link only |
| `catalog` | Integration ui-schema `its-ops-logs` | bootstrap cols | toast |
| `derived` | IdCode `SO-yyyyMMdd-nnnn` | — | BE generate |

`sourceCite` = path/controller **có trong repo** hoặc analy cite. **Cấm** invent `api/v1/so-ts/*` · **cấm** ERP.*.

## §B — Bind field (HARD)

| uiField | Label | controlHint | catalogKind | GET | write field | sameMfe |
|---------|-------|-------------|-------------|-----|-------------|---------|
| resource | Resource | QS / const | — | required `its-ops-logs` | `resource` | yes |
| search | Tìm | SearchTextInput | — | `?search=` | — | yes |
| province | Tỉnh | Dropdown | LOOKUP_STATIC | `?province=` | `province` | yes |
| status | TT | Dropdown | LOOKUP_STATIC | `?status=` | `status` | yes |
| roadCode | Đường | SearchInput | road-route | `?roadCode=` / detail | `roadCode` (+ `roadName`) | yes · **GAP-CSDL-ROAD-01** |
| fromDate | Từ ngày | Date | — | `?fromDate=` | — | yes |
| toDate | Đến ngày | Date | — | `?toDate=` | — | yes |
| code | Mã | Text ro | — | detail `code` | auto | yes |
| bookNo | Số quyển | Text | — | detail / list | `bookNo` | yes |
| contractor | Nhà thầu | Text | — | detail / list | `contractor` | yes · **GAP-CSDL-ORG-01** |
| kmFrom | Lý trình từ | Number | — | detail / list | `kmFrom` | yes |
| kmTo | Lý trình đến | Number | — | detail / list | `kmTo` | yes |
| periodStart | Ngày BĐ kỳ | Date | — | detail | `periodStart` | yes |
| periodEnd | Ngày KT kỳ | Date | — | detail | `periodEnd` | yes |
| manageUnit | ĐV QL | Text | — | detail | `manageUnit` | yes |
| linkBieu14Id | Liên kết Biểu 14 | SearchInput | its-systems | detail | `linkBieu14Id` | yes · **GAP-SO09-LINK14-01** |
| notes | Ghi chú sổ | Textarea | — | detail | `notes` | yes |
| entries[].lineNo | STT | Integer | — | nested | `lineNo` | yes |
| entries[].occurredAt | Ngày giờ | DateTime | — | nested | `occurredAt` | yes |
| entries[].shift | Ca | Dropdown/Text | — | nested | `shift` | yes |
| entries[].operatorName | Người | Text | — | nested | `operatorName` | yes |
| entries[].systemStatus | TT hệ thống | Dropdown/Text | — | nested | `systemStatus` | yes |
| entries[].anomaly | TB bất thường | Textarea | — | nested | `anomaly` | yes |
| entries[].action | XL | Textarea | — | nested | `action` | yes |
| entries[].result | Kết quả | Textarea | — | nested | `result` | yes |
| entries[].recommendation | Kiến nghị | Textarea | — | nested | `recommendation` | yes |
| entries[].signature | Ký | Text | — | nested | `signature` | yes |
| isActive | Active | — | — | detail | soft-delete | yes |
| updatedAt | Cập nhật | DateTime ro | — | detail | — | yes |

**Prefix map:**

| Operation | Path |
|-----------|------|
| List | `GET /web-bff/api/v1/asset/csdl-records?resource=its-ops-logs` |
| Detail | `GET /web-bff/api/v1/asset/csdl-records/{id}` |
| Create | `POST /web-bff/api/v1/asset/csdl-records` body `resource=its-ops-logs` + typed fields |
| Update | `PUT /web-bff/api/v1/asset/csdl-records/{id}` |
| Delete | `DELETE /web-bff/api/v1/asset/csdl-records/{id}` (soft) |
| Peer Biểu 14 | `GET …/csdl-records?resource=its-systems` · UI `/csdl-bieu-14` |

API mirror: `api/v1/asset/csdl-records`. FE cite hub: `services/csdlSoSach/endpoint.ts` `BASE=/asset/csdl-records` — typed page **reuse** cùng BASE.

## §C — Catalog / lookup

| catalogKind | search/list API | seed/import cite | Cấm |
|-------------|-----------------|------------------|------|
| LOOKUP_STATIC province | FE `PROVINCES` (5) | demo align · **không** master P1 | Dropdown demo-only SSOT quốc gia |
| LOOKUP_STATIC status / shift / systemStatus | FE enums | PO chốt | invent master table |
| road-route | `GET /integration/road-routes/search` | shared catalog READY | free-text khi đã chốt SearchInput |
| its-systems (Biểu 14) | `GET …/csdl-records?resource=its-systems` | Biểu 14 live | merge ROW sổ↔biểu |
| org-unit / partner-unit (P2) | `GET /integration/org-units/search` · partner search | shared READY | hardcode ĐV / thầu |
| catalog ui-schema | Integration `its-ops-logs` | `LinCatalogUiSchemaEditorModal` | invent schema path |

## §D — Map / vẽ

`none` trên pack list. Deep-link GIS bbox optional (T-GIS-01) · **cấm** canvas.

## §E — Empty / error / i18n

| Case | UX |
|------|-----|
| Empty list | grid empty VN «Chưa có dữ liệu» · CTA Tạo mới |
| Resource chưa seed | toast / empty hub card — Dev seed trước list |
| 422 validation | toast field · giữ slideout mở |
| 404 detail | đóng slideout · toast |
| Network | toast lỗi · Retry trên list |
| Labels | VN only trên UI · **cấm** slug trên card |

## DoR real-data

- [x] §A–E đủ · bind khớp control-hint
- [x] prefix `api/v1/asset/csdl-records` · resource `its-ops-logs`
- [x] **cấm** ERP.* / invent infra
- [x] contentHash khớp control-hint
