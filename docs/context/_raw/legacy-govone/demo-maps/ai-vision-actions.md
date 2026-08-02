# Demo actions — `ai-vision`

> Demo: `Linm.RMMS.Demo/public/demo/ai-vision/ai-vision.html`  
> Module: AiVision · Incident · Mobile Vấn đề · no BE

## Action inventory (must work on demo)

| # | Action | Trigger | Effect (mock) |
|---|--------|---------|---------------|
| 1 | Search | filter | Lọc list + pins |
| 2 | Clear filter | filter | reset + full list |
| 3 | Upload ảnh | toolbar/feed | file name → detect 1–2 rows |
| 4 | Batch detect | toolbar | thêm 2 detections |
| 5 | Toggle P1/P2 | toolbar | modelVersion + badge |
| 6 | Create manual | toolbar | slideout create |
| 7 | Refresh | toolbar | re-read localStorage |
| 8 | Export Excel | toolbar | toast stub |
| 9 | PCI history | toolbar | modal chart/table seed |
| 10 | Reset seed | toolbar | clear LS · reseed |
| 11 | View | row | form readonly |
| 12 | Edit | row/header | form edit dirty |
| 13 | Copy | row | new DET id draft |
| 14 | Tạo Vấn đề | row/header · critical | modal → IncidentCreated |
| 15 | Dismiss | row/header | status Dismissed |
| 16 | Save draft | footer | persist |
| 17 | Leave confirm | dirty close | modal stay/discard |
| 18 | Map basemap OSM/Esri | map | tile switch |
| 19 | Fit map | map | fit bounds pins |
| 20 | Pin click | map | open view |

## API mock (document only — no fetch)

```
POST /api/v1/ai-vision/detect
POST /api/v1/ai-vision/batch
POST /api/v1/ai-vision/segment          # P2 SAM
POST /api/v1/ai-vision/calculate-pci
GET  /api/v1/ai-vision/defects?sectionId=&from=&to=
GET  /api/v1/ai-vision/pci-history/{sectionId}
```

Event mock: `defect.detected` → Incident (critical).

## Adapter

`IDefectDiagnoser` → P1 `Gpt4oVisionDiagnoser` · P2 `OnnxDetectorDiagnoser` (+ SAM segment).
