# Filter-bar — nghiem-thu (list · context_only)

| Field | Value |
|-------|-------|
| feature | `nghiem-thu` |
| packKind | `list` |
| status | `done` |
| component | `LinErpListFilterBar` |
| layout | `data-lin-list-layout="erp-filter-bar"` · 1 hàng wrap · field lấp hàng rồi wrap · 🔍 mép phải |
| skillVersion | `2026.09.05.03` |
| contentHash | `sha256:41b14359b00a0bacbd2f5e88ab9ed8f7604f962c4e4e58219bf9c1145b5ef4ea` |
| analyzedAt | `2026-09-12T09:00:00.000Z` |

## Slots

| Slot | Fields | Notes |
|------|--------|-------|
| `leading` | `templateType` SearchInput · `status` SearchInput · `route` SearchInput road-route · `search` SearchTextInput | **không** nút Tìm riêng |
| `date` | `fromDate` · `toDate` | kỳ NT |
| `searchAction` | 🔍 `onSearch` | mép phải — **GAP-FILTER-WRAP-02** |

## Cấm

| ❌ | ✅ |
|----|-----|
| `ErpListHeaderFilters` / stack dọc | `LinErpListFilterBar` wrap |
| Nút Tìm tách ngoài 🔍 | 🔍 = Xem/Tìm trên bar |
| Free-text tuyến | SearchInput `road-route` |

---
<!-- Version meta: skillVersion=2026.09.05.03 · schemaVersion=1 · versionGate=ok -->
