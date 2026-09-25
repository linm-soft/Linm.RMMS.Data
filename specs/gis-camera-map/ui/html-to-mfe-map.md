# HTML → MFE map — gis-camera-map

| Demo | MFE |
|------|-----|
| `Linm.RMMS.Demo/src/demo/features/camera-ops-dashboard-demo.html` | `GisCameraMapPage` · `/gis/camera` |

| Demo control | MFE | Note |
|--------------|-----|------|
| `.tile .live` + `.live-frame` | `CameraHlsTile` `.liveVideo` + `.videoFrame` | **16:9** contain · `object-fit: contain` |
| `.tile.off .live` | `.live` + `.videoFrame` «Mất tín hiệu» | cùng 16:9 |
| `.livebox` slide | Inspect **không** video | demo mock livebox 16:9; MFE Chi tiết = tabs |
| `.livebox.fs` | `.fs` + `CameraHlsTile` | fullscreen 16:9 contain |
| Pool item | `.poolItem` | không pict tài sản — mã text |
| Map pin CAM | `createAssetLeafletIcon(..., 'CAM')` | SSOT map icon · **cấm** FA |

**Cấm** copy SVG/FA cho pict camera trên map (GAP-WEB-EDIT-04).
