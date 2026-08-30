# UX analy — org-route-scope (SearchInput lock)

| Field | Value |
|-------|-------|
| feature | `org-route-scope` |
| surface | Form Slideout `/mas/phan-khu` · filter Tuyến chính |
| updatedAt | `2026-08-30` |
| slash | `/edit-web-feature` |

## Zone — lookup dual-box

| Zone | Control | After select |
|------|---------|--------------|
| Khu QLĐB | SearchInput org-unit REG leaf | Trái **mã** (`REG-III`) · phải **tên** (init-data / `item.name`) |
| Tuyến chính | SearchInput road-route | Trái **mã** · phải **tên** tuyến |
| Filter Tuyến | cùng config | cùng dual-box |
| Filter Cục | **không ô** | implicit Cục QLĐB — **cấm** hiện bar |
| Filter Khu | SearchInput REG leaf **trong bar** | dual-box · **cấm** tabs ngoài bar · 2 line |

**Layout C1:** **3–3** · L1 Tìm kiếm (min 280 / 320px) · Khu · Văn phòng · L2 Đơn vị · Tuyến chính · Hiệu lực · 🔍. Lookup portal min **32rem** (cột Tên đủ).
| Đơn vị (tab Đoạn) | SearchInput org / partner | cùng dual-box |

**Cấm** chỉ hiện mã trên ô lookup, ô tên trống — **GAP-ORS-LKP-DISPLAY-01**.

## Copy

Không đổi label VN. Control kit `SearchInput` — không hardcode KIND_LABEL.

## GAP

| ID | Status | Note |
|----|--------|------|
| GAP-ORS-LKP-DISPLAY-01 | **closed** | `getPrimaryDisplay=code` · `getSecondaryDisplay=name` · props `primaryDisplay`/`secondaryDisplay` · `getDetail` hydrate edit |
| GAP-ORS-UI-01 | open P1 | mix Sở — peer OOS |
