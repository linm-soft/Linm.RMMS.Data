# Actions — `ai-asset-detect`

> Demo: `Linm.RMMS.Demo/public/demo/ai-vision/ai-asset-detect.html`  
> Module: AiVision × Asset × Patrol · no BE

| # | Action | Zone | Behavior (demo) |
|---|--------|------|-----------------|
| 1 | Tìm kiếm | filter | Lọc q + route + class + status + date range · **search works** |
| 2 | Xóa lọc | filter | Reset filter ALL |
| 3 | Tạo candidate | toolbar | open form **create** · save → list |
| 4 | Giả lập frame mới | toolbar/feed | thêm Draft candidate · toast detect-assets |
| 5 | Giả lập trùng nearby | toolbar/feed | candidate cùng class &lt;25m · banner warn |
| 6 | Làm mới list | toolbar | loadRows localStorage |
| 7 | Xuất Excel | toolbar | toast stub |
| 8 | Reset seed | toolbar | reseed 4 candidates |
| 9 | Xem | row | open form **view** readonly |
| 10 | Sửa | row/header | open form **edit** · dirty leave-confirm |
| 11 | Copy | row | open form **copy** · id mới · Draft |
| 12 | Confirm | row/header | modal → status Confirmed + assetCode + map pin |
| 13 | Dismiss | row/header | status Dismissed (false positive) |
| 14 | Lưu nháp | form footer | localStorage rows |
| 15 | Hủy thay đổi | form | leave-confirm nếu dirty |
| 16 | Đóng / Quay lại | form header | leave-confirm |
| 17 | Copy mã | form header | clipboard candidate id |
| 18 | Basemap OSM/Esri | map | switch tiles |
| 19 | Fit map | map | center candidates |
| 20 | Pin click | map | open view candidate |

## ACTION WORK GATE

| Gate | Status |
|------|--------|
| List có search → search work | YES · `filterCandidates` + btn Tìm kiếm / Enter |
| Create form pair | YES · `openForm('create')` + save |
| Edit form pair | YES · `openForm('edit')` + save |
| View form pair | YES · `openForm('view')` readonly |
| Copy form pair | YES · `openForm('copy')` + new id |
| Confirm / Dismiss | YES · modal + status transitions |
| Map live | YES · Leaflet OSM/Esri |

## API mock (toast only)

```
POST /api/v1/ai-vision/detect-assets
POST /api/v1/ai-vision/detect-assets/batch
GET  /api/v1/ai-vision/asset-candidates
POST /api/v1/ai-vision/asset-candidates/{id}/confirm
POST /api/v1/ai-vision/asset-candidates/{id}/dismiss
```
