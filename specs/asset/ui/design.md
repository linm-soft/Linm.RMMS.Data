# Design — asset (List danh mục tài sản)

| Field | Value |
|-------|-------|
| feature | `asset` |
| Feature Kind | **B** — Catalog list + **Slideout** form |
| status | `confirmed` |
| changeScope | `edit_page` |
| packKind | `list` |
| mfe | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Asset` (`/asset`) |
| updatedAt | 2026-08-08T16:50:00.000Z |
| design_confirm | `approve` |

## 0. Context & Demo (from PO)

| ID | Path | Notes |
|----|------|-------|
| CTX-ASSET | `docs/context/features/asset.md` | API · entities · Kind B list pack |
| DEM-ASSET | `Linm.RMMS.Demo/.../asset-demo.html` → `asset/asset.html` | SSOT columns/fields · **không** clone chrome |
| DI-ASSET | — | Import Excel **out of pack** |

## 1. Kind + UI pattern

| | |
|--|--|
| Feature Kind | **B** |
| List pattern | Catalog list — `LinPageLayout kind="catalog"` |
| Form pattern | **Slideout** (`ui-pattern-decision`) |
| Control count | **11** interactive (≥10 → Slideout; &lt;10 → Modal) |
| Routes (optional deep link) | List `/asset` · form overlay trên list (không bắt buộc `/asset/:id` trừ deep-link) |
| Toolbar SSOT | List: `catalog-list-toolbar` + **`erp-control-icon-map`** (`editConfig`=`fa-cog`) · Form: §2 icon map |

## 2. Screens / zones (1:1 content)

| Screen | FormMode | Zones | Controls |
|--------|----------|-------|----------|
| Danh mục TS | list | **A Header · B Toolbar · C Grid · D Pagination** | SearchTextInput · type select · row menu |
| Form TS | create/edit/view/copy | **Slideout** · **Z1** icon toolbar · **Z1h** · **Z2** · **Z3** | 11 controls · readOnly view |

## 3. Field inventory (cho SA) — nhãn VN ngành GTVT / QL đường bộ

| uiField | Label VN (chuẩn) | Control | Required | FormMode lock | Notes |
|---------|------------------|---------|----------|---------------|-------|
| code | Mã tài sản | Text readonly | — | all readonly · IdCode | BE generate |
| name | Tên tài sản | Text | * | view=readOnly | |
| type | Loại tài sản | Select/LOOKUP | * | view=readOnly | 8 loại KCHT |
| route | Tuyến đường | Text | * | view=readOnly | QL./ĐT. |
| kmFrom | Lý trình bắt đầu (Km+) | Text | * | view=readOnly | VD: km12+000 |
| kmTo | Lý trình kết thúc (Km+) | Text | | view=readOnly | |
| status | Tình trạng kỹ thuật | Select | * | view=readOnly | Tốt / Theo dõi / Cần bảo trì |
| lat | Vĩ độ (Lat) | Number | | view=readOnly | |
| lng | Kinh độ (Lng) | Number | | view=readOnly | |
| qr | Mã QR | Text | | view=readOnly | display only |
| valueVnd | Giá trị tài sản (VND) | Money | | view=readOnly | |
| note | Ghi chú hiện trường | Text | | view=readOnly | |

### List columns (header VN)

STT · □ · **Mã tài sản** · **Tên tài sản** · **Loại tài sản** · **Tuyến đường** · **Lý trình bắt đầu** · **Lý trình kết thúc** · **Tình trạng KT** · **Tọa độ GPS** · ⋯

### Loại tài sản (KCHT)

Mặt đường · Cầu · Biển báo giao thông · Hộ lan an toàn · Cột Km · Cống thoát nước · Taluy / nền đường · Hệ thống chiếu sáng

### CSS control (erp-form-context)

| Rule | Gap |
|------|-----|
| `form-field-select-css` — pad 6×10 · min-height 32 · focus shadow | GAP-P2-CSS-SELECT-PAD / FOCUS |
| Checkbox grid **24×24** · cột 48px · sau STT | **GAP-P2-GRID-CHECK-01** |
| Filter header pad tối thiểu | GAP-P2-CSS-HEADER-PAD |
| Ellipsis cột dữ liệu | GAP-P2-GRID-ELL-01 |

## 4. Control map / hooks

- Shell: `LinPageLayout` · `ErpListHeaderFilters` · `SearchTextInput` · `useCatalogTableBusy`
- **A** `pageHeader`: title only — **cấm** Thêm mới
- **B** `catalogToolbar`: L1 trái icon+label · **phải + Thêm mới** (primary)
- Row menu: Xem · Sửa · Sao chép · `listRowMenuHelp`
- View: `readOnly` active — **cấm** disabled xám
- IdCode: code BE on create/copy
- Search: trong card C · `?search=` + `?type=` + page/pageSize

## Prototype (REQUIRED) — List shell

| | |
|--|--|
| Artifact | `ui/prototype/asset-list-prototype.html` |
| Zones | **A Header · B Toolbar · C Grid · D Pagination** |
| Form zones | **Slideout** · **Z1** (icon toolbar) · **Z1h** · **Z2** · **Z3** |
| Pattern gate | `ui-pattern-decision`: **11 controls ≥10 → Slideout** (&lt;10 → Modal) |
| Scope | content-only (no chrome / note banner / menu) |
| SSOT | `erp-list-page-shell` · `catalog-list-toolbar` · **`erp-control-icon-map`** · `list-shell-prototype.md` · `ui-pattern-decision` |
| Icons | FA CDN · `ERP_LIST_TOOLBAR_ACTIONS` · **Sửa config = `fas fa-cog`** |
| Visual ref | **VatTu** (`Linm.Web.ERP.Master` · `VatTuPage`) — title 22px · btn 12px/32px · `CatalogListPagination` |
| **reviewUrl** | `file:///D:/AI-QLBD/Linm.RMMS.Data/specs/asset/ui/prototype/asset-list-prototype.html` |

### Wire (list) — deep-check 2026-08-08 (VatTu typography + pager)

```
[A] fa-road + «Sổ tài sản…» (22px)
[B] btn sm 12px/32px: [fa-sync-alt] [fa-history] [fa-cog] [fa-file-excel] … | [fa-plus Thêm mới]
[C] «Danh sách tài sản KCHT» · Tìm · Loại · grid STT·□·…
[D] Tổng: N · Trang x/y
    Hiển thị [50|100|200|500] · «« ‹ x/y › »» (FA angle · 32×32)
```

\* Đề xuất / Chờ duyệt = muted (không shared master).

### Wire (form — Slideout · icon toolbar)

```
[Z1] [← Quay lại]                    [📋 Sao chép] [✏ Sửa] | [✕ Hủy] [💾 Lưu]
     ── border #e9ecef ──
     Title · mode badge · «Slideout · 11 controls»
[Z1h] hint (view/edit)
[Z2] fields §3 (scroll)
[Z3] [✕ Hủy] [💾 Lưu]  (ẩn khi view)
```

**Cấm** full-page form khi chưa đủ Full-page criteria (tabs/workflow/deep-link bắt buộc).

## 5. Map

- Out of pack — Kind F Leaflet giữ demo; MFE map strip optional later
- **Không** OMS gate cho pack list này

## 6. AI page

- Out of pack (`ai-asset-detect`)

## 7. Open questions

- Board: tick **UI MFE OK** nếu chưa (`Linm.Web.RMMS.Asset`)
- Board: tick **BE repo OK** khi SA (`Linm.RMMS.WebService` — **cấm ERP.Master**)

## Confirm

`design_confirm` = **approve** (2026-08-08) · prototype + reviewUrl giữ nguyên.

## Handoff → SA

| Field | Value |
|-------|-------|
| Kind / pattern | B · catalog list + **Slideout** form (11 controls) |
| Field inventory | §3 · nhãn GTVT |
| Prototype · reviewUrl | § Prototype · FA icons `erp-control-icon-map` |
| Context · Demo | CTX-ASSET · DEM-ASSET |
| API prefer | `api/v1/rmms/road-assets` + BFF · **không** Finance `assets` |
| Next | `/agent-sa` · `solution_confirm` |
