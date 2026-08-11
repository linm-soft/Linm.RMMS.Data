# map-feature — Bản đồ hạng mục HĐ ↔ feature

| File | Vai trò |
|------|---------|
| [`index.html`](./index.html) | UI map: mã HĐ · slug · context · demo · MFE `start:std` · BE |
| [`catalogue.json`](./catalogue.json) | SSOT data (P1 + alias + mobile priority) |
| [`mobile-design-brief.md`](./mobile-design-brief.md) | Chuẩn bị Design Mobile gói B |
| [`../specs/_form-type/CRUD-GAPS.md`](../specs/_form-type/CRUD-GAPS.md) | Gap CRUD/formType + Wave enqueue |

## Mở trang

```bash
# từ Data root — hoặc mở file trực tiếp
cd D:/AI-QLBD/Linm.RMMS.Data/map-feature
npx --yes serve -p 5199 .
# → http://localhost:5199
```

## Alias đã chốt

- HĐ `camera-gtvt` → feature `camera-connect`
- HĐ `gis-draw-live` → context `docs/context/features/gis-draw-live.md` + demo `gis/gis-draw-live.html`
