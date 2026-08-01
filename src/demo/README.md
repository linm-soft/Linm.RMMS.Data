# RMMS Demo — Standalone (std mode)

Chạy form + JS demo **không cần** MFE shell / login.

## Chạy

```bash
cd Linm.RMMS.Demo/src/demo
npm run start:std
```

Mở: http://localhost:5180

| Lệnh | Ý nghĩa |
|------|---------|
| `npm run start:std` | Serve static (port **5180**) — khuyến nghị |
| `npm start` | Alias `start:std` |

Không có Node: mở trực tiếp `index.html` vẫn được với hầu hết trang; **bản đồ live** (Leaflet CDN) cần mạng.

## Cấu trúc

```
Linm.RMMS.Demo/
├── package.json            ← npm run start:std (proxy → src/demo)
└── src/demo/
    ├── index.html          ← Hub catalog
    ├── package.json        ← serve port 5180
    ├── js/                 ← ES modules (form + map)
    ├── assets/
    └── features/           ← HTML (import ../js/*)
```

ES modules cần HTTP server (`start:std`) — **không** mở `file://` cho form/map live.

## Trang chính

| Path | Mô tả |
|------|--------|
| `/` | Hub |
| `/features/gis-draw-live.html` | Bản đồ thật + vẽ (`gis-draw-live-app.js`) |
| `/features/pavement-section-list.html` | Form ERP Biểu 1 (`pavement-section-app.js`) |
| `/features/gis-draw-google-demo.html` | Mock parity GOVOne |

Context docs: `../../../docs/context/`
