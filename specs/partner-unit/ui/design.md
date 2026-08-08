# Design — partner-unit (Sở / BOT / Cty)

| Field | Value |
|-------|-------|
| feature | `partner-unit` |
| Feature Kind | **B** — Catalog **flat** list + **Modal** form |
| status | `confirmed` (Autopilot · run packet) |
| design_confirm | `approve` |
| changeScope | `new_page` |
| packKind | `master` |
| mfe | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Master` (`/master/partner-unit`) |
| updatedAt | 2026-08-08T12:08:00.000Z |

## 0. Context & Demo (from PO)

| ID | Path | Notes |
|----|------|-------|
| CTX-01 | `docs/context/features/partner-unit.md` | Kind B · fields |
| CTX-02 | `docs/context/features/master.md` | hub |
| CTX-03 | `specs/_data-analy/shared-catalogs/INVESTIGATE-CUC2.md` §2 | 13 partners |
| SEED-01 | `docs/context/seed/partner-unit-seed.json` | 13 |
| DEM-* | **N/A** | `packKind=master` |

## 1. Kind + UI pattern

| | |
|--|--|
| Feature Kind | **B** |
| List pattern | `LinPageLayout` kind=catalog + **CatalogListShell** (flat grid) |
| Form pattern | **Modal** (6 controls &lt;10) |
| Routes | List `/master/partner-unit` · form overlay Modal |
| Toolbar SSOT | `catalog-list-toolbar` + `erp-control-icon-map` |
| Lookup consumer | **`SearchInput`** `partnerUnitCode` — Step **2li** · **cấm** Text |
| partnerKind | Dropdown từ **init-data** |

## 2. Screens / zones

| Screen | FormMode | Zones | Controls |
|--------|----------|-------|----------|
| Đơn vị đối tác | list | **A Header · B Toolbar · C Grid · D Pagination** | SearchTextInput · table · row menu |
| Form đối tác | create/edit/view/copy | **Modal** | 6 controls · View `readOnly` |

## 3. Field inventory (tiếng Việt)

| uiField | Label VN | Control | Required | Notes |
|---------|----------|---------|----------|-------|
| code | **Mã ĐV** | Text code | * | create editable · edit/view readonly |
| name | **Tên đơn vị** | Text | * | |
| partnerKind | **Loại** | LOOKUP / Select | * | init-data |
| provinceCode | **Mã tỉnh** | Text | | optional |
| legacyFolderName | **Tên folder import** | Text | | map CUC 2 |
| isActive | **Đang dùng** | Switch | | |

### Loại (LOOKUP)

| value | Nhãn |
|-------|------|
| `SO_GTVT` | Sở GTVT |
| `BOT` | BOT |
| `DOANH_NGHIEP` | Doanh nghiệp |

### List columns

STT · **Mã ĐV** · **Tên đơn vị** · **Loại** · **Tỉnh** · **Trạng thái** · ⋯

### FormMode badge

| mode | Badge |
|------|-------|
| create | Tạo mới |
| edit | Sửa |
| view | Xem |
| copy | Sao chép |

## 4. Control map

- Shell: `LinPageLayout` · `CatalogListShell` · `SearchTextInput` · `useCatalogTableBusy`
- **A** title «Đơn vị đối tác» — **cấm** Thêm mới trên header
- **B** toolbar: Tạo mới · Làm mới
- **C** flat table; search CI không dấu
- Consumer lookup: SearchInput → `/partner-units/search` · display `code — name`
- View: `readOnly` — **cấm** disabled xám

## Prototype (REQUIRED)

| | |
|--|--|
| Artifact | `ui/prototype/partner-unit-list-prototype.html` |
| Zones | **A · B · C · D** |
| Form | Modal · **Loại = Dropdown** · consumer SearchInput documented |
| **reviewUrl** | `file:///D:/AI-QLBD/Linm.RMMS.Data/specs/partner-unit/ui/prototype/partner-unit-list-prototype.html` |

## Handoff → SA

| Field | Value |
|-------|-------|
| controlHint | partnerUnitCode=**SearchInput** · partnerKind=Dropdown · còn lại Text/Switch |
| reviewUrl | file://…/partner-unit-list-prototype.html |
| API outline | `api/v1/integration/partner-units` (DOMAIN-MAP Integration) |

## Version meta (REQUIRED)

| Field | Value |
|-------|-------|
| skillId | agent-design |
| skillVersion | 2026.08.08.17 |
| schemaVersion | 1 |
| workflowVersion | 2026.08.08.21 |
| rulesVersion | 2026.08.08.19 |
| generatedAt | 2026-08-08T12:08:00.000Z |
| versionGate | ok |
