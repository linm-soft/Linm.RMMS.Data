# Prototype — mobile-p1 (iOS + Android)

| | |
|--|--|
| iOS 390×844 | [`ios/index.html`](./ios/index.html) |
| Android 412×915 | [`android/index.html`](./android/index.html) |
| OMS | [`map-oms.js`](./map-oms.js) |
| Logo | [`assets/rmms.png`](./assets/rmms.png) ← SSOT `logo/rmms.png` |
| Feature doc | [`feature-guide.js`](./feature-guide.js) · trái quyền catalog · phải nghiệp vụ QLĐB |
| Design | [`../design.md`](../design.md) |
| Context | [`../../mobile/context.md`](../../mobile/context.md) |

## Mở review

```bash
start "" "D:\AI-QLBD\Linm.RMMS.Data\specs\mobile-p1\ui\prototype\ios\index.html"
start "" "D:\AI-QLBD\Linm.RMMS.Data\specs\mobile-p1\ui\prototype\android\index.html"
# hoặc
npx --yes serve -p 5198 "D:\AI-QLBD\Linm.RMMS.Data\specs\mobile-p1\ui\prototype"
# → http://localhost:5198/ios/  ·  http://localhost:5198/android/
```

Hard-refresh sau khi sửa map. Chip **CI map** / tab **Bản đồ** → Leaflet OSM + OSRM.
