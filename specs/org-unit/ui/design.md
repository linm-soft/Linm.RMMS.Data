# Design — org-unit (Cơ cấu tổ chức)

| Field | Value |
|-------|-------|
| feature | `org-unit` |
| Feature Kind | **B** — Catalog **tree** list + **Modal** form |
| status | `confirmed` |
| design_confirm | `approve` (2026-08-08 · VN + SearchInput) |
| changeScope | `new_page` |
| packKind | `master` |
| gapOrg01 | **`keep_legacy`** |
| mfe | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Master` (`/master/org-unit`) |
| updatedAt | 2026-08-08T17:47:00.000Z |
| Version meta | rules `2026.08.08.14` · design `2026.08.08.2` |

## 0. Context & Demo (from PO)

| ID | Path | Notes |
|----|------|-------|
| CTX-01 | `docs/context/features/org-unit.md` | Kind B tree · fields |
| CTX-02 | `docs/context/20-ORG-STRUCTURE-DRVN.md` | SSOT cây DRVN |
| CTX-03 | `docs/context/features/master.md` | hub Master |
| CTX-04 | `specs/_data-analy/shared-catalogs/org-structure.md` | cluster |
| SEED-01 | `docs/context/seed/org-unit-seed.json` (= shared-catalogs) | **60** nodes · keep_legacy |
| DEM-* | **N/A** | `packKind=master` |

## 1. Kind + UI pattern

| | |
|--|--|
| Feature Kind | **B** |
| List pattern | Catalog tree — `LinPageLayout` + `LinTreeGridLayout` / `LinTreeNav` |
| Form pattern | **Modal** (`ui-pattern-decision` — **6** controls &lt;10) |
| Routes | List `/master/org-unit` · form overlay Modal |
| Toolbar SSOT | `catalog-list-toolbar` + **`erp-control-icon-map`** (`editConfig`=`fa-cog`) |
| Tree skill | `/implement-grid-tree-context` |
| Lookup | **`SearchInput`** `parentCode` — `form-catalog-lookup-input` · Step **2li** · **cấm** Text |

## 2. Screens / zones

| Screen | FormMode | Zones | Controls |
|--------|----------|-------|----------|
| Cơ cấu tổ chức | list | **A Header · B Toolbar · C Tree+Grid · D Pagination** | SearchTextInput · tree nav · row menu |
| Form đơn vị | create/edit/view/copy | **Modal** · fields grid | 6 controls · View `readOnly` |

## 3. Field inventory (chuẩn tiếng Việt)

| uiField | Label VN (UI) | Control | Required | FormMode lock | Notes |
|---------|---------------|---------|----------|---------------|-------|
| code | **Mã đơn vị** | Text code | * | create editable · edit/view readonly | uppercase · VD `VP-II.2` |
| kind | **Loại đơn vị** | LOOKUP_STATIC | * | view=readOnly | nhãn VN bên dưới |
| name | **Tên đơn vị** | Text | * | view=readOnly | tên chính theo Cục Đường bộ |
| parentCode | **Đơn vị cha** | **SearchInput** (catalog `org-unit`) | | view=readOnly | **cấm** Text · gõ mã/tên · dropdown mã+tên |
| legacyAlias | **Tên gọi cũ** | Text | | view=readOnly | VD `Chi cục QLĐB II.2` · **không** hiện chữ «Alias/legacy» trên UI |
| isActive | **Đang dùng** | Switch / checkbox | | view=readOnly | |
| isLegacyExtra | — | flag BE | | **ẩn** form · badge list «hệ cũ» | GAP-ORG-01 |

### Loại đơn vị (LOOKUP — value / nhãn VN)

| value | Nhãn hiển thị |
|-------|----------------|
| `ORG` | Tổ chức gốc |
| `HQ` | Lãnh đạo Cục |
| `ADV` | Cơ quan tham mưu |
| `REG` | Khu quản lý đường bộ |
| `VP` | Văn phòng QLĐB |
| `SU` | Đơn vị sự nghiệp |
| `ROOM` | Phòng chức năng |

### List columns (header VN)

STT · □ · **Mã đơn vị** · **Tên đơn vị** · **Loại** · **Tên gọi cũ** · ⋯

### FormMode badge (VN)

| mode | Badge |
|------|-------|
| create | Tạo mới |
| edit | Sửa |
| view | Xem |
| copy | Sao chép |

### GAP-ORG-02 (chốt)

- Tên chính = `name` (Cục Đường bộ)
- Tên phụ = `Tên gọi cũ` (`legacyAlias`)
- Badge **hệ cũ** khi `isLegacyExtra` (không dùng chữ `legacy` trên UI)

### Cấm trên UI

| ❌ | ✅ |
|----|-----|
| Label `parentCode` / `Alias legacy` / badge `create`/`legacy` | **Đơn vị cha** · **Tên gọi cũ** · **Tạo mới** · **hệ cũ** |
| Text thuần cho đơn vị cha | **SearchInput** lookup |

## 4. Control map / hooks

- Shell: `LinPageLayout` · `LinTreeNav` · `SearchTextInput` · `useCatalogTableBusy`
- **A** `pageHeader`: title «Cơ cấu tổ chức» — **cấm** Thêm mới
- **B** toolbar icon+label VN
- **C** tree + grid; search flat CI không dấu
- **parentCode:** `SearchInput` + search API `/org-units/search` (SA) · display `code — name`
- Row menu: Xem · Sửa · Sao chép
- View: `readOnly` — **cấm** disabled xám
- Labels: `useFormOptions()` / init-data — **cấm** hardcode lệch bảng §3

## Prototype (REQUIRED)

| | |
|--|--|
| Artifact | `ui/prototype/org-unit-list-prototype.html` |
| Zones | **A · B · C (tree+grid) · D** |
| Form | Modal · **Đơn vị cha = SearchInput** (dropdown mã+tên) |
| Scope | content-only |
| SSOT | `list-shell-prototype` · `erp-control-icon-map` · `search-input` · `form-catalog-lookup-input` |
| **reviewUrl** | `file:///D:/AI-QLBD/Linm.RMMS.Data/specs/org-unit/ui/prototype/org-unit-list-prototype.html` |

### Wire (form — Modal)

```
[title] Thêm/Sửa/Xem đơn vị · badge Tạo mới|Sửa|Xem|Sao chép
[Mã đơn vị*] [Loại đơn vị*]
[Tên đơn vị*]
[Đơn vị cha] ← SearchInput (gõ → dropdown mã + tên + tên gọi cũ)
[Tên gọi cũ]
[Đang dùng]
[footer] Hủy · Lưu
```

## Handoff → SA

| Field | Value |
|-------|-------|
| feature | `org-unit` |
| controlHint | parentCode=**SearchInput** · kind=LOOKUP_STATIC · còn lại Text/Switch |
| Labels | §3 tiếng Việt — Dev/FE dùng đúng nhãn |
| reviewUrl | file://…/org-unit-list-prototype.html |
| Next | `design_confirm` (sau revise) |
