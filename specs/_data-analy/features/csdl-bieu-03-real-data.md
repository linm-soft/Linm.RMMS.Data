# Real-data bind — csdl-bieu-03 (Kind B list + Kind D Slideout · road-tunnels)

| | |
|---|---|
| feature | `csdl-bieu-03` |
| packKind | `list` |
| changeScope | `new_page` |
| status | `done` |
| taskId | `task_df175ffd` |
| resource | `road-tunnels` |
| prefix | **live shell** `api/v1/asset/csdl-records` · BFF `web-bff/api/v1/asset/csdl-records` · typed DTO **SA** |
| beRepo | `D:/AI-QLBD/Linm.RMMS.WebService` · **cấm ERP.*** · **cấm** `api/v1/rmms/*` · **cấm** invent `api/v1/infra/*` |
| uiRepo | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Asset` |
| mfeStdUrl | `http://localhost:9301/csdl-bieu-03` · hub `http://localhost:9301/so-ts/csdl-so-sach?resource=road-tunnels` |
| map | `none` · GPS fields only · **cấm** invent map canvas |
| contentHash | `sha256:2c03537918bbda56c29e1e1ef98cc081cc4e72c94447a1ac2f87f06bd6f9310e` |
| headerFingerprint | `sha256:60f7ea4153b5853222bdeaf2679929a6e4c5b66b6973bcfe12e5bd9dd3fcfbcc` |
| sourceTables | shell `rmms_csdl_catalog_records` · typed `Schema_CsdlBieu3` (**SA/migration**) |
| catalogKind UI schema | `road-tunnels` (typed) · fallback hub `csdl-records` |
| IdCode prefix | `TN` |

## § Delta Current vs New (`new_page` · `task_df175ffd`)

| ID | Current live | New (this analy) |
|----|--------------|------------------|
| Form | 3 ô `detail*` polymorphic (`tunnelName`/`lengthM`/`tubeCount` sample) | Typed 42 cột Excel Biểu 3 · GPS 3 điểm · 2 ống = 2 bản ghi · kết cấu/PCCC/thiết bị |
| List cols | generic road/km/detail | Cột typed tên hầm · dài · số ống · GPS summary |
| API | `GET/POST/PUT/DELETE …/csdl-records?resource=road-tunnels` | **giữ prefix** · widen payload / typed table — SA |
| Import | stub | Sheet 42 cột — OUT XLS |
| Peer | Sổ 6 QL cầu/hầm | Deep-link · **cấm** merge form |

## §A — Nguồn

| sourceKind | sourceCite | empty | error |
|------------|------------|-------|-------|
| `context` | `docs/context/features/csdl-bieu-03.md` | — | version mismatch → gate |
| `analy` | `specs/_data-analy/csdl-cuc-2026/ANALYSIS-AND-TASKS.md` § Biểu 3 | — | 42 cột SSOT |
| `demo` | `Linm.RMMS.Demo/.../csdl-so-sach.html` + `csdl-so-sach-data.js` | — | **UI only** · **cấm** SSOT data |
| `api` · list | `GET …/csdl-records?resource=road-tunnels&…` | empty grid VN | 422 thiếu resource · toast |
| `api` · detail | `GET …/csdl-records/{id}` | — | 404 → đóng slideout · toast |
| `api` · CRUD | `POST` / `PUT` / soft `DELETE` | — | validation toast |
| `entity` | `CsdlCatalogRecordEntity` (shell) | — | tenant `CompanyCode` |
| `entity` | typed Biểu 3 (**SA**) | — | Schema_CsdlBieu3 pair |
| `mfe` | hub `CsdlSoSachPage` · form `CsdlFormSlideout` | generic | typed replace |
| `catalog` | Integration ui-schema `road-tunnels` | bootstrap cols | toast |
| `excel` | `1. Biểu mẫu CSDL.xls` sheet Biểu 3 | — | import cite · not runtime SSOT |
| `derived` | IdCode `TN-yyyyMMdd-nnnn` | — | BE generate |

`sourceCite` = path/controller **có trong repo** hoặc analy Excel cite. **Cấm** invent `api/v1/so-ts/*` · **cấm** ERP.* · **cấm** invent `api/v1/infra/*`.

## §B — Bind field (HARD)

| uiField | Label | controlHint | catalogKind | GET | write field | sameMfe |
|---------|-------|-------------|-------------|-----|-------------|---------|
| resource | Resource | QS / const | — | required `road-tunnels` | `resource` | yes |
| search | Tìm | SearchTextInput | — | `?search=` | — | yes |
| province | Tỉnh | Dropdown | LOOKUP_STATIC | `?province=` | `province` | yes |
| status | TT | Dropdown | LOOKUP_STATIC | `?status=` | `status` | yes |
| roadCode | Đường | SearchInput | road-route | `?roadCode=` / detail | `roadCode` (+ display `roadName`) | yes · **GAP-CSDL-ROAD-01** |
| kmFrom | Từ Km | Number | — | filter / detail | `kmFrom` | yes |
| kmTo | Đến Km | Number | — | filter / detail | `kmTo` | yes |
| tunnelClass | Cấp hầm | Dropdown | LOOKUP_STATIC | filter optional / detail | `tunnelClass` | yes |
| tubeCount | Số ống | Number | — | filter optional / detail / list | `tubeCount` | yes |
| code | Mã | Text ro | — | detail `code` | auto | yes |
| tunnelName | Tên hầm | Text | — | detail / list | `tunnelName` | yes |
| side | Bên | Dropdown | LOOKUP_STATIC | detail | `side` | yes |
| gpsStartLat | GPS đầu Lat | Number | — | detail | `gpsStartLat` | yes · **GAP-BIEU03-GPS-01** |
| gpsStartLng | GPS đầu Lng | Number | — | detail | `gpsStartLng` | yes |
| gpsMidLat | GPS giữa Lat | Number | — | detail | `gpsMidLat` | yes |
| gpsMidLng | GPS giữa Lng | Number | — | detail | `gpsMidLng` | yes |
| gpsEndLat | GPS cuối Lat | Number | — | detail | `gpsEndLat` | yes |
| gpsEndLng | GPS cuối Lng | Number | — | detail | `gpsEndLng` | yes |
| crossingType | Loại xuyên | Dropdown | LOOKUP_STATIC | detail | `crossingType` | yes |
| tubeIndex | Ống số | Number | — | detail / list | `tubeIndex` | yes · **GAP-BIEU03-TUBE-01** |
| liningType | Vỏ hầm | Text | — | detail | `liningType` | yes |
| clearanceM | Tĩnh không | Number | — | detail | `clearanceM` | yes |
| sectionHeightM | Khổ cao | Number | — | detail | `sectionHeightM` | yes |
| sectionWidthM | Khổ rộng | Number | — | detail | `sectionWidthM` | yes |
| carriageWidthM | B xe chạy | Number | — | detail | `carriageWidthM` | yes |
| pavementInTunnel | Mặt đường trong hầm | Text | — | detail | `pavementInTunnel` | yes |
| drainLengthM | Thoát nước dài | Number | — | detail | `drainLengthM` | yes |
| drainSpacingM | Thoát nước KC | Number | — | detail | `drainSpacingM` | yes |
| shoulderInTunnelM | Lề trong hầm | Number | — | detail | `shoulderInTunnelM` | yes |
| firePump | PCCC bơm | Checkbox | — | detail | `firePump` | yes |
| fireNicheCount | Hốc PCCC | Number | — | detail | `fireNicheCount` | yes |
| fanCount | Quạt SL | Number | — | detail | `fanCount` | yes |
| lightCount | Đèn SL | Number | — | detail | `lightCount` | yes |
| hasCctv | CCTV | Checkbox | — | detail | `hasCctv` | yes |
| hasVms | VMS | Checkbox | — | detail | `hasVms` | yes |
| lengthM | Cdài hầm | Number | — | detail / list | `lengthM` | yes |
| builtYear | Năm XD | Number | — | detail | `builtYear` | yes |
| manageUnit | ĐV QL | Text | — | detail / list | `manageUnit` | yes · **GAP-CSDL-ORG-01** |
| updatedByName | Người | Text | — | detail | `updatedByName` | yes |
| notes | Ghi chú | Textarea | — | detail | `notes` | yes |
| ventilationType | Thông gió | Text | — | detail | `ventilationType` | yes · **GAP-BIEU03-VENT-01** |
| escapeExitCount | Lối thoát | Number | — | detail | `escapeExitCount` | yes |
| designLoad | Tải TK | Text | — | detail | `designLoad` | yes |
| ownerUnit | Chủ quản | Text | — | detail | `ownerUnit` | yes |
| isActive | Active | — | — | detail | soft-delete | yes |
| updatedAt | Cập nhật | DateTime ro | — | detail | — | yes |

**Prefix map:**

| Operation | Path |
|-----------|------|
| List | `GET /web-bff/api/v1/asset/csdl-records?resource=road-tunnels` |
| Detail | `GET /web-bff/api/v1/asset/csdl-records/{id}` |
| Create | `POST /web-bff/api/v1/asset/csdl-records` body `resource=road-tunnels` + typed fields |
| Update | `PUT /web-bff/api/v1/asset/csdl-records/{id}` |
| Delete | `DELETE /web-bff/api/v1/asset/csdl-records/{id}` (soft) |

API mirror: `api/v1/asset/csdl-records`. FE cite hub: `services/csdlSoSach/endpoint.ts` `BASE=/asset/csdl-records` — typed page **reuse** cùng BASE.

**Tube rule:** 2 ống → **2 POST** (hoặc Copy + đổi `tubeIndex` + GPS) — không 1 payload chứa 2 bộ GPS.

## §C — Catalog / lookup

| catalogKind | search/list API | seed/import cite | Cấm |
|-------------|-----------------|------------------|------|
| LOOKUP_STATIC province | FE `PROVINCES` P1 | demo align | Dropdown demo-only làm SSOT quốc gia |
| LOOKUP_STATIC status | tot/tb/kem/hong | — | — |
| LOOKUP_STATIC side | L/R/C/Both | — | — |
| LOOKUP_STATIC tunnelClass | ĐB / MN | Excel Biểu 3 | free-text khi đã chốt Dropdown |
| LOOKUP_STATIC crossingType | núi/sông/đô thị/khác | Excel · **SA** chốt | — |
| road-route | `GET /integration/road-routes/search` | shared catalog READY | free-text khi đã chốt SearchInput |
| org-unit | `GET /integration/org-units/search` | shared org · P2 | hardcode ĐV |
| ui-schema | Integration `road-tunnels` | Schema editor | generic 3-col only |

## §D — Map / vẽ

`none` — list pack. GPS = Number fields. Toolbar map → gis deep-link only · **cấm** canvas.

## §E — Empty / error / permission

| Case | UX |
|------|-----|
| Empty list | Grid copy VN «Chưa có hầm đường bộ» · CTA Tạo mới |
| 422 thiếu resource | toast · không alert |
| 404 detail | đóng slideout · toast |
| Soft-delete | row biến mất · list refresh |
| GPS thiếu bắt buộc | validation toast field · **cấm** silent save |
| tubeCount>1 thiếu tubeIndex | validation toast · **cấm** silent save |
| Permission | CommonLib Auth debt · **cấm** invent path |

## §F — Cấm

- Demo / localStorage / seed giả làm SSOT runtime  
- ERP.* / Domains/Master / `api/v1/infra/*` / invent `api/v1/so-ts/*`  
- Form chỉ 3 ô `detail*`  
- Merge form Sổ 6 vào biểu Cục  
- Guid làm IdCode  
- Invent map canvas trên list  
- 1 row chứa 2 bộ GPS thay vì 2 bản ghi  
- yarn build / e2e ở role data_analy  

## Version meta (REQUIRED)

| Field | Value |
|-------|-------|
| skillId | agent-data-analy |
| skillVersion | 2026.08.25.01 |
| schemaVersion | 1 |
| workflowVersion | 2026.09.01.02 |
| rulesVersion | 2026.08.31.2 |
| contentHash | `sha256:2c03537918bbda56c29e1e1ef98cc081cc4e72c94447a1ac2f87f06bd6f9310e` |
| headerFingerprint | `sha256:60f7ea4153b5853222bdeaf2679929a6e4c5b66b6973bcfe12e5bd9dd3fcfbcc` |
| generatedAt | 2026-09-05T08:40:00.000Z |
| versionGate | ok |
| taskId | task_df175ffd |
| packKind | list |
| changeScope | new_page |

---
<!-- Version meta: skillId=agent-data-analy skillVersion=2026.08.25.01 schemaVersion=1 workflowVersion=2026.09.01.02 rulesVersion=2026.08.31.2 versionGate=ok contentHash=sha256:2c03537918bbda56c29e1e1ef98cc081cc4e72c94447a1ac2f87f06bd6f9310e -->
