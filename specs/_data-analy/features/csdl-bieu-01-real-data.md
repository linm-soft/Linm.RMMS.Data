# Real-data bind — csdl-bieu-01 (Kind B list + Kind D Slideout · pavement-sections)

| | |
|---|---|
| feature | `csdl-bieu-01` |
| packKind | `list` |
| changeScope | `new_page` |
| status | `done` |
| taskId | `task_41122f1b` |
| resource | `pavement-sections` |
| prefix | **live shell** `api/v1/asset/csdl-records` · BFF `web-bff/api/v1/asset/csdl-records` · typed DTO **SA** |
| beRepo | `D:/AI-QLBD/Linm.RMMS.WebService` · **cấm ERP.*** · **cấm** `api/v1/rmms/*` · **cấm** invent `api/v1/infra/*` |
| uiRepo | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Asset` |
| mfeStdUrl | `http://localhost:9301/csdl-bieu-01` · hub `http://localhost:9301/so-ts/csdl-so-sach?resource=pavement-sections` |
| map | `none` · **cấm** invent map canvas |
| contentHash | `sha256:3545960f4006740c9dfe57b5f004fa4a1cd1b7befbcd51e35e2168e16821b65e` |
| headerFingerprint | `sha256:6376475bbf48ca5b3e8cfd26688cd877fd1bc77d5b8d8c4c3d314cd0572f5cf2` |
| sourceTables | shell `rmms_csdl_catalog_records` · typed `Schema_CsdlBieu1` (**SA/migration**) |
| catalogKind UI schema | `pavement-sections` (typed) · fallback hub `csdl-records` |
| IdCode prefix | `MD` |

## § Delta Current vs New (`new_page` · `task_41122f1b`)

| ID | Current live | New (this analy) |
|----|--------------|------------------|
| Form | 3 ô `detail*` polymorphic | Typed 38 cột Excel Biểu 1 |
| List cols | generic road/km/detail | Cột typed bề rộng · kết cấu · cấp · năm SD |
| API | `GET/POST/PUT/DELETE …/csdl-records?resource=pavement-sections` | **giữ prefix** · widen payload / typed table — SA |
| Import | stub | Skip hàng cầu âm · sheet 38 cột — OUT XLS |
| Peer | `pavement-section` Sổ TS | Deep-link · **cấm** merge form |

## §A — Nguồn

| sourceKind | sourceCite | empty | error |
|------------|------------|-------|-------|
| `context` | `docs/context/features/csdl-bieu-01.md` | — | version mismatch → gate |
| `analy` | `specs/_data-analy/csdl-cuc-2026/ANALYSIS-AND-TASKS.md` § Biểu 1 | — | 38 cột SSOT |
| `demo` | `Linm.RMMS.Demo/.../csdl-so-sach.html` (+ redirect demo) | — | **UI only** · **cấm** SSOT data |
| `api` · list | `GET …/csdl-records?resource=pavement-sections&…` | empty grid VN | 422 thiếu resource · toast |
| `api` · detail | `GET …/csdl-records/{id}` | — | 404 → đóng slideout · toast |
| `api` · CRUD | `POST` / `PUT` / soft `DELETE` | — | validation toast |
| `entity` | `CsdlCatalogRecordEntity` (shell) | — | tenant `CompanyCode` |
| `entity` | typed Biểu 1 (**SA**) | — | Schema_CsdlBieu1 pair |
| `mfe` | hub `CsdlSoSachPage` · form `CsdlFormSlideout` | generic | typed replace |
| `catalog` | Integration ui-schema `pavement-sections` | bootstrap cols | toast |
| `excel` | `1. Biểu mẫu CSDL.xls` sheet Biểu 1 | — | import cite · not runtime SSOT |
| `derived` | IdCode `MD-yyyyMMdd-nnnn` | — | BE generate |

`sourceCite` = path/controller **có trong repo** hoặc analy Excel cite. **Cấm** invent `api/v1/so-ts/*` · **cấm** ERP.*.

## §B — Bind field (HARD)

| uiField | Label | controlHint | catalogKind | GET | write field | sameMfe |
|---------|-------|-------------|-------------|-----|-------------|---------|
| resource | Resource | QS / const | — | required `pavement-sections` | `resource` | yes |
| search | Tìm | SearchTextInput | — | `?search=` | — | yes |
| province | Tỉnh | Dropdown | LOOKUP_STATIC | `?province=` | `province` | yes |
| status | TT | Dropdown | LOOKUP_STATIC | `?status=` | `status` | yes |
| roadCode | Đường | SearchInput | road-route | `?roadCode=` / detail | `roadCode` (+ display `roadName`) | yes · **GAP-CSDL-ROAD-01** |
| kmFrom | Từ Km | Number | — | filter / detail | `kmFrom` | yes |
| kmTo | Đến Km | Number | — | filter / detail | `kmTo` | yes |
| code | Mã | Text ro | — | detail `code` | auto | yes |
| lengthKm | Cdài | Number | — | detail / list | `lengthKm` | yes |
| baseWidthM | B nền | Number | — | detail | `baseWidthM` | yes |
| surfWGe14 | B≥14 | Number | — | detail | `surfWGe14` | yes · **GAP-BIEU01-WIDTH-01** |
| surfW14To10 | B 14–10 | Number | — | detail | `surfW14To10` | yes |
| surfW10To5 | B 10–5 | Number | — | detail | `surfW10To5` | yes |
| surfWLe5 | B≤5 | Number | — | detail | `surfWLe5` | yes |
| structureType | Kết cấu | Dropdown | LOOKUP_STATIC | detail | `structureType` | yes · **GAP-BIEU01-STRUCT-01** |
| surfaceThicknessCm | Dày mặt | Number | — | detail | `surfaceThicknessCm` | yes |
| plainClass | Cấp ĐB | Dropdown | LOOKUP_STATIC | detail | `plainClass` | yes |
| mountainClass | Cấp MN | Dropdown | LOOKUP_STATIC | detail | `mountainClass` | yes |
| yearsInServiceBand | Năm SD | Dropdown | LOOKUP_STATIC | detail | `yearsInServiceBand` | yes |
| handoverMinistry | BG T.BỘ | Checkbox | — | detail | `handoverMinistry` | yes |
| handoverLocal | BG MĐ | Checkbox | — | detail | `handoverLocal` | yes |
| lastMajorRehabYear | Năm ĐT | Number | — | detail | `lastMajorRehabYear` | yes |
| lastSurfaceRepairYear | Năm SC | Number | — | detail | `lastSurfaceRepairYear` | yes |
| updatedByName | Người | Text | — | detail | `updatedByName` | yes |
| manageUnit | ĐV QL | Text | — | detail / list | `manageUnit` | yes · **GAP-CSDL-ORG-01** |
| notes | Ghi chú | Textarea | — | detail | `notes` | yes |
| side | Bên | Dropdown | LOOKUP_STATIC | detail | `side` | yes |
| isActive | Active | — | — | detail | soft-delete | yes |
| updatedAt | Cập nhật | DateTime ro | — | detail | — | yes |

**Prefix map:**

| Operation | Path |
|-----------|------|
| List | `GET /web-bff/api/v1/asset/csdl-records?resource=pavement-sections` |
| Detail | `GET /web-bff/api/v1/asset/csdl-records/{id}` |
| Create | `POST /web-bff/api/v1/asset/csdl-records` body `resource=pavement-sections` + typed fields |
| Update | `PUT /web-bff/api/v1/asset/csdl-records/{id}` |
| Delete | `DELETE /web-bff/api/v1/asset/csdl-records/{id}` (soft) |

API mirror: `api/v1/asset/csdl-records`. FE cite hub: `services/csdlSoSach/endpoint.ts` `BASE=/asset/csdl-records` — typed page **reuse** cùng BASE.

## §C — Catalog / lookup

| catalogKind | search/list API | seed/import cite | Cấm |
|-------------|-----------------|------------------|------|
| LOOKUP_STATIC province | FE `PROVINCES` P1 | demo align | Dropdown demo-only làm SSOT quốc gia |
| LOOKUP_STATIC status | tot/tb/kem/hong | — | — |
| LOOKUP_STATIC side | L/R/C/Both | — | — |
| LOOKUP_STATIC structureType | BTXM/BTN/Đá nhựa/Cấp phối | Excel (13)–(16) | free-text kết cấu |
| LOOKUP_STATIC plainClass / mountainClass | I–V | Excel | — |
| LOOKUP_STATIC yearsInServiceBand | 1–3 / 4–6 / 7–9 / >9 | Excel | — |
| road-route | `GET /integration/road-routes/search` | shared catalog READY | free-text khi đã chốt SearchInput |
| org-unit | `GET /integration/org-units/search` | shared org · P2 | hardcode ĐV |
| ui-schema | Integration `pavement-sections` | Schema editor | generic 3-col only |

## §D — Map / vẽ

`none` — list pack. Toolbar map → gis deep-link only.

## §E — Empty / error / permission

| Case | UX |
|------|-----|
| Empty list | Grid copy VN «Chưa có đoạn mặt đường» · CTA Tạo mới |
| 422 thiếu resource | toast · không alert |
| 404 detail | đóng slideout · toast |
| Soft-delete | row biến mất · list refresh |
| Import skip-bridge | log/count hàng bỏ qua · **cấm** ghi length âm |
| Permission | CommonLib Auth debt · **cấm** invent path |

## §F — Cấm

- Demo / localStorage / seed giả làm SSOT runtime  
- ERP.* / Domains/Master / `api/v1/infra/*` / `api/v1/so-ts/*` invent  
- Form chỉ 3 ô `detail*`  
- Merge form Sổ TS `pavement-section` vào biểu Cục  
- Guid làm IdCode  
- yarn build / e2e ở role data_analy  

## Version meta (REQUIRED)

| Field | Value |
|-------|-------|
| skillId | agent-data-analy |
| skillVersion | 2026.08.25.01 |
| schemaVersion | 1 |
| workflowVersion | 2026.09.01.02 |
| rulesVersion | 2026.08.31.2 |
| contentHash | `sha256:3545960f4006740c9dfe57b5f004fa4a1cd1b7befbcd51e35e2168e16821b65e` |
| headerFingerprint | `sha256:6376475bbf48ca5b3e8cfd26688cd877fd1bc77d5b8d8c4c3d314cd0572f5cf2` |
| generatedAt | 2026-09-05T11:53:25.414Z |
| versionGate | ok |
| taskId | task_41122f1b |
| packKind | list |
| changeScope | new_page |

---
<!-- Version meta: skillId=agent-data-analy skillVersion=2026.08.25.01 schemaVersion=1 workflowVersion=2026.09.01.02 rulesVersion=2026.08.31.2 versionGate=ok contentHash=sha256:3545960f4006740c9dfe57b5f004fa4a1cd1b7befbcd51e35e2168e16821b65e -->
