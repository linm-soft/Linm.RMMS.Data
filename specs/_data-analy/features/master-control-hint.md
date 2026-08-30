# Data-analy — controlHint — master (hub · 4 shared catalogs)

| Field | Value |
|-------|-------|
| feature | `master` |
| packKind | `master` |
| mode | `feature_context` (queue `roleOnly=data_analy` · **no Excel raw** · **DEM N/A** · CTX + investigate + live Master MFE/BE) |
| changeScope | `edit_page` (hub + 4 child catalogs đã ship · delta = hub SSOT controlHint + real-data bind) |
| status | `done` |
| skillId | `agent-data-analy` |
| skillVersion | `2026.08.25.01` |
| schemaVersion | `1` |
| workflowVersion | `2026.08.29.03` |
| rulesVersion | `2026.08.29.28` |
| versionGate | `rechecked` |
| contentHash | `sha256:2e7c4a265a296e1f7bb4cce472f58a1041fdf4ef1b63d088f80cde5012cb8128` |
| headerFingerprint | `sha256:72758524d03f6b4b62ccf4262873b39bdd01601654b368e153678ecc84d1865d` |
| analyzedAt | `2026-08-29T06:30:00.000Z` |
| cluster | — (không Excel · dùng investigate + seed) |
| taskId | `task_ecc53315` |
| autoApprove | `ON` |
| realData | `specs/_data-analy/features/master-real-data.md` |
| beRepo | `D:/AI-QLBD/Linm.RMMS.WebService` · domain **Integration** · **cấm ERP.*** |
| uiRepo | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Master` · `ui_repo_confirm` locked Master |
| mfeStdUrl | `http://localhost:9318/mas/co-cau-tc` |
| runMode | `full_pipeline` · hub · Autopilot ON |

> Data-analy **đề xuất** controlHint. Design **chốt** control-map trên từng child. SA **chốt** lookup API Integration.  
> **Cấm** Dev đoán Text vs SearchInput khi đã có bảng này.  
> **DEM N/A** (`master-catalog-no-demo.md`) — **cấm** đòi DEM-* · **cấm** GOVOne chrome · **cấm** demo-json SSOT.  
> Typography: label **13** · input D14 / M16 (**GAP-TYP-01**).  
> **Cấm** `api/v1/rmms/*` · **cấm** ERP.*.

## Sources

| Source | Path | sha256 / note |
|--------|------|---------------|
| Context hub | `docs/context/features/master.md` | `2e7c4a26…` (contentHash) |
| Investigate | `specs/_data-analy/shared-catalogs/INVESTIGATE-CUC2.md` | `72758524…` (headerFingerprint) · cluster_confirm **A** |
| Org SSOT | `docs/context/20-ORG-STRUCTURE-DRVN.md` | `3306242c…` |
| Child CTX | `org-unit.md` · `road-route.md` · `asset-type.md` · `partner-unit.md` | P0 |
| Seed org | `docs/context/seed/org-unit-seed.json` | 60 nodes · keep_legacy |
| Shared org | `specs/_data-analy/shared-catalogs/org-structure.md` | APPROVED A |
| Import SSOT | `docs/context/features/import-gov-ssot.md` | set `gov-vn` |
| MFE live | `Linm.Web.RMMS.Master` `/mas/*` | Kind B + Modal form |
| BE live | `…/Integration/Controllers/{OrgUnits,RoadRoutes,AssetTypes,PartnerUnits}Controller.cs` | `api/v1/integration/*` |
| DOMAIN-MAP | `Linm.RMMS.WebService/docs/DOMAIN-MAP.md` | Integration · 4 slugs |

Normalized consumer header (erp-form-context 2li):

`orgUnitCode|routeCode|assetTypeCode|partnerUnitCode|note|measure|enumSmall`

## § Delta Current vs New (`edit_page` · hub · `task_ecc53315`)

Child pipelines (org-unit / road-route / asset-type / partner-unit) **đã done** riêng. Hub thiếu control-hint + real-data → **GAP-L3-REAL-DATA** hub. Delta pack này:

| ID | Current | New (this turn) | Surface |
|----|---------|-----------------|---------|
| GAP-MAS-HINT-01 | `master-control-hint.md` **draft** stub | Hub controlHint 4 catalogs + consumer 2li | data-analy |
| GAP-MAS-REAL-01 | `master-real-data.md` **draft** stub | §A+§B bind Integration live | data-analy |
| GAP-MAS-ROUTE-01 | CTX/INVESTIGATE ghi `/master/org-unit` · packet `:9318/master/org-unit` | Live MFE `/mas/co-cau-tc` · `/mas/tuyen-duong` · `/mas/loai-ts` · `/mas/doi-tac` | docs handoff |
| GAP-MAS-API-01 | CTX hub ghi `api/v1/open-api/*` | Live BE/BFF/MFE = `api/v1/integration/*` · `web-bff/api/v1/integration/*` — **cite live**; PO/SA sync CTX | CTX debt |

**Không** đổi: Kind B CatalogListShell · Modal form (&lt;10 fields) · seed DRVN · SearchInput consumer · **cấm** Slideout hồ sơ lớn · leave-confirm · toast not alert · DEM skip.

## Kind / zones (handoff Design · mỗi child)

Pack **master** = 4 × Kind **B** catalog trên MFE Master host `:9318`. **Không** demo HTML.

| Catalog | Route live | Pattern | Form |
|---------|------------|---------|------|
| org-unit | `/mas/co-cau-tc` | Kind B + tree (`LinTree` / tree grid) | Modal: code · name · kind · parent · legacyAlias · isActive |
| road-route | `/mas/tuyen-duong` | Kind B list | Modal: code · name · routeKind · parent · notes · isActive |
| asset-type | `/mas/loai-ts` | Kind B list | Modal: code · name · groupCode · legacyAliases · isActive |
| partner-unit | `/mas/doi-tac` | Kind B list | Modal: code · name · partnerKind · provinceCode · legacyFolderName · isActive |

| Zone | Pattern | DoD |
|------|---------|-----|
| A | Header | title only — **cấm** Thêm mới trên A |
| B | Toolbar + filter | search + enum filter · Tạo mới · Refresh · schema config |
| C | Grid / tree | row menu Xem/Sửa/Copy/Lịch sử |
| D | Pagination | flat list; tree may omit |
| Form | Modal | C/E/V/Copy · footer Lưu/Hủy · leave-confirm dirty · View=`<dl>` / readonly fields |

**Skip chrome:** GOVOne · Signed demo · hub nav skin demo.

## Control hint — consumer fields (Asset / import / báo cáo · 2li)

| Field key | Label | controlHint | catalogKind | Notes |
|-----------|-------|-------------|-------------|-------|
| orgUnitCode | Đơn vị quản lý | `SearchInput` **tree** | **org-unit** | **cấm** free-text |
| routeCode | Tuyến đường | `SearchInput` | **road-route** | LRS khóa `code` |
| assetTypeCode | Loại tài sản | `SearchInput` | **asset-type** | nhiều alias → lookup code |
| partnerUnitCode | Đơn vị đối tác | `SearchInput` | **partner-unit** | Sở / BOT / DN |
| note / mô tả | Ghi chú | `Text` | — | free-style |
| measure / số đo thô | Số đo | `Number` / `Text` | — | không khóa mã |
| enum nhỏ ổn định | — | `Dropdown` | LOOKUP_STATIC | ≤ ~20–30 mã |

## Control hint — org-unit (P0)

### List / tree filters

| Field key | Label | controlHint | catalogKind | Notes |
|-----------|-------|-------------|-------------|-------|
| search | Tìm kiếm | `SearchTextInput` | text | mã · tên · alias CI không dấu |
| kind | Loại đơn vị | `Dropdown` | org-kind | HQ · ADV · REG · VP · SU · ROOM · init-data |
| parentCode | Đơn vị chủ quản (filter) | `SearchInput` tree | **org-unit** | optional |

### Form fields

| Field key | Label | controlHint | required | Notes |
|-----------|-------|-------------|----------|-------|
| code | Mã | `Text` code | * | vd `VP-II.2` |
| name | Tên | `Text` | * | |
| kind | Loại | `Dropdown` | * | init-data kinds |
| parentCode | Đơn vị chủ quản | `SearchInput` tree | | catalogKind=org-unit · exclude self |
| legacyAlias | Tên legacy | `Text` | | Chi cục II.x · GAP-ORG-01/02 |
| isActive | Hiệu lực | `Switch` | | |

## Control hint — road-route (P0)

### List filters

| Field key | Label | controlHint | catalogKind | Notes |
|-----------|-------|-------------|-------------|-------|
| search | Tìm kiếm | `SearchTextInput` | text | mã · tên |
| routeKind | Loại tuyến | `Dropdown` | route-kind | QUOC_LO · HCM · CAO_TOC · KHAC |

### Form fields

| Field key | Label | controlHint | required | Notes |
|-----------|-------|-------------|----------|-------|
| code | Mã tuyến | `Text` code | * | `QL.1` · `HCM` |
| name | Tên | `Text` | * | |
| routeKind | Loại | `Dropdown` | * | init-data |
| parentCode | Tuyến chính | `SearchInput` | | catalogKind=road-route · đoạn/tránh |
| notes | Ghi chú | `Text` | | |
| legacyAliases | Alias folder | `Text` / tags | | import map |
| isActive | Hiệu lực | `Switch` | | |

## Control hint — asset-type (P0)

### List filters

| Field key | Label | controlHint | catalogKind | Notes |
|-----------|-------|-------------|-------------|-------|
| search | Tìm kiếm | `SearchTextInput` | text | mã · tên · alias |
| groupCode | Nhóm | `Dropdown` | asset-type-group | THOAT_NUOC · AN_TOAN · … |

### Form fields

| Field key | Label | controlHint | required | Notes |
|-----------|-------|-------------|----------|-------|
| code | Mã loại | `Text` code | * | `CULVERT_X` … |
| name | Tên VN | `Text` | * | |
| groupCode | Nhóm | `Dropdown` | * | init-data |
| legacyAliases | Alias import | `Text` multi | | comma / tags |
| isActive | Hiệu lực | `Switch` | | |

## Control hint — partner-unit (P1)

### List filters

| Field key | Label | controlHint | catalogKind | Notes |
|-----------|-------|-------------|-------------|-------|
| search | Tìm kiếm | `SearchTextInput` | text | mã · tên |
| partnerKind | Loại ĐV | `Dropdown` | partner-kind | SO_GTVT · BOT · DOANH_NGHIEP |

### Form fields

| Field key | Label | controlHint | required | Notes |
|-----------|-------|-------------|----------|-------|
| code | Mã | `Text` code | * | SA scheme GAP-PARTNER-01 |
| name | Tên | `Text` | * | |
| partnerKind | Loại | `Dropdown` | * | init-data |
| provinceCode | Tỉnh / TP | `Text` | | optional P1 — **UNCLEAR** SearchInput province master |
| legacyFolderName | Folder import | `Text` | | archive CUC 2 |
| isActive | Hiệu lực | `Switch` | | |

## Gaps / open Q (handoff PO)

| ID | Severity | Note |
|----|----------|------|
| GAP-MAS-API-01 | P1 | CTX `open-api` vs live `integration` — sync CTX sau analy |
| GAP-MAS-ROUTE-01 | P1 | `/master/*` legacy docs → `/mas/*` live |
| GAP-ORG-01 | accept | Chi cục II.1/II.6 legacy keep |
| GAP-ORG-02 | P2 | alias Chi cục vs Văn phòng |
| GAP-ROUTE-01..04 | P1–P2 | segment vs route · LRS · noise folder |
| GAP-ATYPE-01..03 | P1 | spelling alias · folder noise · Excel fingerprint later |
| GAP-PARTNER-01 | P1 | code scheme Ask SA |
| GAP-PARTNER-02 | P2 | partner ↔ org-unit |

## Handoff

| To | Đủ khi |
|----|--------|
| **PO** | CTX hub + 4 child · **no-demo** · controlHint + real-data **cả hai** · open Q |
| Design | Kind B ×4 · control-map · prototype/reviewUrl per child (đã có org-unit) |
| SA | Integration search/list/CRUD · seed/import · **giữ** path live cite |
| TL/Dev | T-UI-LIST/FORM + T-BE per child · source=`Linm.Web.RMMS.Master` |

**Child run order:** org-unit **P0** → road-route → asset-type → partner-unit **P1**.

## Version meta (REQUIRED)

| Field | Value |
|-------|-------|
| skillId | agent-data-analy |
| skillVersion | 2026.08.25.01 |
| schemaVersion | 1 |
| workflowVersion | 2026.08.29.03 |
| rulesVersion | 2026.08.29.28 |
| contentHash | sha256:2e7c4a265a296e1f7bb4cce472f58a1041fdf4ef1b63d088f80cde5012cb8128 |
| headerFingerprint | sha256:72758524d03f6b4b62ccf4262873b39bdd01601654b368e153678ecc84d1865d |
| generatedAt | 2026-08-29T06:30:00.000Z |
| versionGate | rechecked |
| taskId | task_ecc53315 |

---
<!-- Version meta: skillId=agent-data-analy skillVersion=2026.08.25.01 schemaVersion=1 workflowVersion=2026.08.29.03 rulesVersion=2026.08.29.28 versionGate=rechecked contentHash=sha256:2e7c4a265a296e1f7bb4cce472f58a1041fdf4ef1b63d088f80cde5012cb8128 -->
