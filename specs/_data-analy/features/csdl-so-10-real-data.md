# Real-data bind — csdl-so-10 (Kind B list + Kind F map · route-strip-maps)

| | |
|---|---|
| feature | `csdl-so-10` |
| packKind | `map` |
| changeScope | `new_page` |
| status | `done` |
| taskId | `task_7770663d` |
| resource | `route-strip-maps` (**NEW** · seed catalog) |
| formNo | `10` · Cục **Bình đồ duỗi thẳng tuyến** |
| prefix | **live shell** `api/v1/asset/csdl-records` · BFF `web-bff/api/v1/asset/csdl-records` · typed DTO **SA** |
| beRepo | `D:/AI-QLBD/Linm.RMMS.WebService` · **cấm ERP.*** · **cấm** `api/v1/rmms/*` · **cấm** invent `api/v1/infra/*` · **cấm** Domains/Master |
| uiRepo | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Asset` |
| mfeStdUrl | `http://localhost:9301/csdl-so-10` · hub `http://localhost:9301/so-ts/csdl-so-sach?resource=route-strip-maps` |
| MapGateSlash | `/agent-dev-oms-map` |
| map | **Kind F** strip · OMS/OSRM · Fit · line levels · **cấm** invent Cesium P1 |
| contentHash | `sha256:e444b5c2b3c297fc9affd2c72aae7f06378eab566c213c88cbdc972a10fae30a` |
| headerFingerprint | `sha256:8d4cc58a120fddd4f98ee78c5876a4eecea942231f87b3df9d5e4ffc025e54ad` |
| sourceTables | shell `rmms_csdl_catalog_records` · `rmms_csdl_book_entries` · typed `Schema_CsdlSo10` + geom (**SA/migration**) |
| catalogKind UI schema | `route-strip-maps` (typed) · fallback hub `csdl-records` |
| IdCode prefix | `SO` |
| skillVersion | `2026.09.05.03` |
| schemaVersion | `2` |
| analyzedAt | `2026-09-06T00:25:00.000Z` |

## § Delta Current vs New (`new_page` · `task_7770663d`)

| ID | Current live | New (this analy) |
|----|--------------|------------------|
| Resource | **MISSING** (GAP-CSDL-CUC-05) | Seed `route-strip-maps` + hub card formNo 10 |
| Form | không / generic Col1–3 nếu bootstrap | Typed T-SO-10 header (thầu · Km · kỳ) + strip entries theo Km |
| List cols | — | bookNo · contractor · road · Km · period · status |
| Map | không | Kind F OMS · corridor LineString · OSRM snap · Fit · line levels |
| Fallback | — | `stripImageUrl` File khi GIS chưa READY (Q-SO10) |
| API | shell `…/csdl-records` | **giữ prefix** · `?resource=route-strip-maps` · widen typed + geo — SA |
| DOMAIN-MAP | thiếu `csdl-so-10` | SA thêm slug → Asset |
| Import | stub | Sheet bình đồ — OUT XLS |

## §A — Nguồn

| sourceKind | sourceCite | empty | error |
|------------|------------|-------|-------|
| `context` | `docs/context/features/csdl-so-10.md` | — | version mismatch → gate |
| `analy` | `specs/_data-analy/csdl-cuc-2026/ANALYSIS-AND-TASKS.md` § T-SO-10 · GAP-CSDL-CUC-10 · Q-SO10 | — | typed SSOT |
| `demo` | `Linm.RMMS.Demo/.../csdl-so-sach.html` (+ redirect demo) | — | **UI only** · **cấm** SSOT data |
| `api` · list | `GET …/csdl-records?resource=route-strip-maps&…` | empty grid VN | 422 thiếu resource · toast |
| `api` · detail | `GET …/csdl-records/{id}` | — | 404 → đóng form · toast |
| `api` · CRUD | `POST` / `PUT` / soft `DELETE` | — | validation toast |
| `geo` · overlay | `GET …/csdl-records/{id}` geometry / geojson field **hoặc** SA geo endpoint cùng resource | empty map + toast «Chưa có bình đồ» | 4xx toast |
| `geo` · save | `PUT/POST` body `geometry` + `geomType` + `srid` | — | validation SRID |
| `entity` | `CsdlCatalogRecordEntity` · `CsdlBookEntryEntity` (shell) | — | tenant `CompanyCode` |
| `entity` | typed Sổ 10 (**SA**) | — | Schema_CsdlSo10 pair · PostGIS optional |
| `mfe` | hub `CsdlSoSachPage` · form / alias map page | chưa có key | typed page + seed + Kind F |
| `catalog` | Integration ui-schema `route-strip-maps` | bootstrap cols | toast |
| `derived` | IdCode `SO-yyyyMMdd-nnnn` | — | BE generate |

`sourceCite` = path/controller **có trong repo** hoặc analy cite. **Cấm** invent `api/v1/so-ts/*` · **cấm** ERP.*.

## §B — Bind field (HARD)

| uiField | Label | controlHint | catalogKind | GET | write field | sameMfe |
|---------|-------|-------------|-------------|-----|-------------|---------|
| resource | Resource | QS / const | — | required `route-strip-maps` | `resource` | yes |
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
| notes | Ghi chú sổ | Textarea | — | detail | `notes` | yes |
| stripImageUrl | Ảnh bình đồ | File | — | detail | `stripImageUrl` | gap · Q-SO10 |
| geometry | Geometry | Map | — | detail geo | `geometry` | gap · **GAP-SO10-MAP-01** |
| geomType | Geom type | Text ro | — | detail | `geomType` | gap |
| srid | SRID | Number ro | — | detail | `srid` | gap |
| entries[].lineNo | STT | Integer | — | nested | `lineNo` | yes |
| entries[].kmFrom | Km từ | Number | — | nested | `kmFrom` | yes |
| entries[].kmTo | Km đến | Number | — | nested | `kmTo` | yes |
| entries[].baseWidthM | B nền | Number | — | nested | `baseWidthM` | yes |
| entries[].surfaceWidthM | B mặt | Number | — | nested | `surfaceWidthM` | yes |
| entries[].medianWidthM | KCMĐ | Number | — | nested | `medianWidthM` | yes |
| entries[].thicknessM | Dày | Number | — | nested | `thicknessM` | yes |
| entries[].gradePct | Dốc dọc | Number | — | nested | `gradePct` | yes |
| entries[].alignType | Thẳng/cong | Dropdown | — | nested | `alignType` | yes |
| entries[].structureType | CT | Dropdown | — | nested | `structureType` | yes |
| entries[].structureName | Tên CT | Text | — | nested | `structureName` | yes |
| entries[].atgtLeft | ATGT T | Text | — | nested | `atgtLeft` | yes |
| entries[].atgtRight | ATGT P | Text | — | nested | `atgtRight` | yes |
| entries[].junction | Nút giao | Text | — | nested | `junction` | yes |
| entries[].ditchLeft | Rãnh T | Text | — | nested | `ditchLeft` | yes |
| entries[].ditchRight | Rãnh P | Text | — | nested | `ditchRight` | yes |
| entries[].wallLeft | Tường T | Text | — | nested | `wallLeft` | yes |
| entries[].wallRight | Tường P | Text | — | nested | `wallRight` | yes |
| entries[].scdkDa | SCĐK/DA | Text | — | nested | `scdkDa` | yes |
| entries[].surfaceStatus | TT mặt | Dropdown/Text | — | nested | `surfaceStatus` | yes |
| entries[].notes | Ghi chú đoạn | Textarea | — | nested | `notes` | yes |
| isActive | Active | — | — | detail | soft-delete | yes |
| updatedAt | Cập nhật | DateTime ro | — | detail | — | yes |

**Prefix map:**

| Operation | Path |
|-----------|------|
| List | `GET /web-bff/api/v1/asset/csdl-records?resource=route-strip-maps` |
| Detail | `GET /web-bff/api/v1/asset/csdl-records/{id}` |
| Create | `POST /web-bff/api/v1/asset/csdl-records` body `resource=route-strip-maps` + typed + geometry |
| Update | `PUT /web-bff/api/v1/asset/csdl-records/{id}` |
| Delete | `DELETE /web-bff/api/v1/asset/csdl-records/{id}` (soft) |
| Road lookup | `GET /integration/road-routes/search` |

API mirror: `api/v1/asset/csdl-records`. FE cite hub: `services/csdlSoSach/endpoint.ts` `BASE=/asset/csdl-records` — typed page **reuse** cùng BASE.

## §C — Catalog / lookup

| catalogKind | search/list API | seed/import cite | Cấm |
|-------------|-----------------|------------------|------|
| LOOKUP_STATIC province | FE `PROVINCES` (5) | demo align · **không** master P1 | Dropdown demo-only SSOT quốc gia |
| LOOKUP_STATIC status / alignType / structureType / surfaceStatus | FE enums | PO chốt | invent master table không cần |
| road-route | `GET /integration/road-routes/search` | shared catalog READY | free-text khi đã chốt SearchInput |
| org-unit / partner-unit (P2) | `GET /integration/org-units/search` · partner search | shared READY | hardcode ĐV / thầu |
| catalog ui-schema | Integration `route-strip-maps` | `LinCatalogUiSchemaEditorModal` | invent schema path |

## §D — Map / vẽ (`packKind=map` HARD)

| Mục | Ghi |
|-----|-----|
| Engine | Leaflet OMS — CTX `csdl-so-10.md` + `/agent-dev-oms-map` · MFE GIS clip SSOT · **cấm** invent Cesium / Twin trên Sổ 10 P1 |
| Tools | Select · Fit · zoom · LineString corridor / MultiLineString strip · pin CT (cầu/hầm/cống) · measure Km · **cấm** Polygon fill toàn quốc |
| Layer | `route-strip` corridor underlay + segment track pane · CT pins theo `structureType` |
| Load | `GET …/csdl-records/{id}` → `geometry` / geojson · empty = toast + optional `stripImageUrl` |
| Save | `PUT/POST` `geometry` + `geomType` + `srid` (4326) cùng resource — **cấm** path GIS generic trừ SA cite |
| Pick | chọn lớp / mode vẽ **trước** khi draw — **yes** |
| OSRM | R8/R9 · `routeAlongStreets` / `projectToPath` · fallback nét đứt + toast — **cấm** silent fail |
| Fit | load `fitVnClipMap` (MFE) · Fit tài sản = bbox Km corridor · **cấm** street-level default |
| Line levels | R7b corridor teal mờ + track rõ · R7c MFE map click = **popup only** (Fit từ list/map-bar) |
| Leave | Dirty draw/form → `LeaveConfirmModal` |

Thiếu §D = **GAP-DA-MAP-01** (đã đóng trong packet này).

## §E — Progress / vòng đời

`progress: none` — sổ catalog status chip (LOOKUP) · **không** workflow % / timeline riêng.

## §F — Empty / error / i18n

| Case | UX |
|------|-----|
| Empty list | grid VN «Chưa có bình đồ duỗi thẳng» |
| Empty map | map toast + CTA vẽ / upload ảnh |
| 422 resource | toast đăng ký catalog |
| 4xx/5xx | toast lỗi · giữ form dirty |
| i18n | VI labels từ control-hint |

## §G — Handoff

| Role | Dùng packet |
|------|-------------|
| PO | DoD «màn mở = data thật» · Q-SO10 / UNCLEAR |
| Design | Kind B + Kind F zones · OMS chrome · control-map = §B |
| SA | entity + migration · giữ path cite · DOMAIN-MAP `csdl-so-10` |
| Dev | `/agent-dev-oms-map` R1–R11 · cùng §B web |

## Version meta

| Field | Value |
|-------|-------|
| skillVersion | `2026.09.05.03` |
| schemaVersion | `2` (`data-analy-real-data`) |
| contentHash | `sha256:e444b5c2b3c297fc9affd2c72aae7f06378eab566c213c88cbdc972a10fae30a` |
| rulesVersion | `2026.09.05.8` |
| analyzedAt | `2026-09-06T00:25:00.000Z` |
| status | `done` |
