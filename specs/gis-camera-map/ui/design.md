# Design — gis-camera-map (Kind F · wall HLS 16:9)

| Field | Value |
|-------|-------|
| feature | `gis-camera-map` |
| packKind | `map` |
| Feature Kind | **F** |
| changeScope | `edit_page` |
| this role | `design` · `/edit-web-feature` |
| status | `confirmed` |
| formPattern | `Full page` (pool · wall · map · inspect · fullscreen) |
| Grid AC | `N/A` |
| Report AC | `N/A` (KPI toolbar ≠ DES-RPT) |
| peerStdUrl | `http://localhost:9302/gis/camera` |
| uiRepo | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Gis` |
| demo | `Linm.RMMS.Demo/src/demo/features/camera-ops-dashboard-demo.html` |
| updatedAt | `2026-09-21T10:48:00.000Z` |

## 1. Screens / zones

| Zone | Surface | Live image |
|------|---------|------------|
| Z-POOL | Pool trái | **Không** video — list mã + online |
| Z-WALL | Wall 2×2 / 3×2 / 1 cam / free | HLS **khung 16:9** |
| Z-MAP | Clip BFF | Pin · **không** video |
| Z-INSPECT | Slide 3 tab | **Không** video (Chi tiết = KPI/event) |
| Z-FS | Toàn màn hình | HLS **khung 16:9** chứa trong viewport |

## 2. Live frame SSOT (GAP-CAM-MAP-ASPECT-16-9)

Mọi chỗ **có hình/live** trên `/gis/camera`:

| Rule | Chốt |
|------|------|
| Tỉ lệ | **16:9** (`aspect-ratio: 16 / 9`) |
| Contain | Khung 16:9 **nằm trong** ô wall / fullscreen — **không** kéo cao theo cột |
| Video | `object-fit: contain` — **cấm** `cover` crop portrait trên ô cao |
| Offline | Cùng khung 16:9 «Mất tín hiệu» — **cấm** text stretch full cell |
| Bố cục | 1 cam · 2×2 · 3×2 · thêm tự do · fullscreen — **cùng** rule |
| Chrome tile | HUD mã + meta + footer **ngoài** khung 16:9 |

**Cấm** worker: `.videoEl { object-fit: cover }` · `flex:1` video fill chiều cao wall · bỏ `.videoFrame`.

Control: `CameraHlsTile` → `.liveVideo` stage + `.videoFrame` 16:9.

## 3. Keep prior

Pool kéo-thả · map 50/50 · HLS `mode=hls` `profile=sub` · KPI event hôm nay · popup 2 KPI · 3 tab inspect · **cấm** `alert` · **cấm** mock CAM-VINH.
