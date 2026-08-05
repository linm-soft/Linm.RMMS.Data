# Demo control-map — `its-traffic-detect`

> **Shell:** `/erp-form-context` Kind **B** list + **D** slideout + **F** map  
> **AI layer:** `/ai-form-context` · design wire · pilot ITS sample  
> **SSOT design:** `docs/context/16-ITS-TRAFFIC-OBJECT-DETECTION-DESIGN.md`  
> Demo: `Linm.RMMS.Demo/public/demo/ai-vision/its-traffic-detect.html` · **cấm BE** · **cấm GOVOne chrome**

## Kind

| Kind | Zone |
|------|------|
| B | Catalog list candidates/objects |
| D | Slideout Create/Edit/View/Copy · Confirm |
| F | Leaflet pins existing / AI / nearby / confirmed |

## Fields

| Field | zone | Control | Notes |
|-------|------|---------|-------|
| q | filter | Search | ITS-* · class · route · device |
| source | filter | Select | mobile · dashcam · cctv · ALL |
| objectClass | filter/list/form | Select | bien_bao / coc_tieu |
| status | filter/list | badge | Draft / Confirmed / Dismissed |
| engine | filter/list | badge | P1 / P2 |
| from/to | filter | Date | observedAt |
| code (IdCode) | list/form | Code | `ITS-YYYYMMDD-NNNN` |
| score | list/form | Qty % | 0–1 |
| lat/lng | form/map | Geo | after Kalman/tri (demo GPS) |
| headingDeg · alphaDeg | form | Number | ray meta |
| routeLabel · deviceId | form | Text | trip |
| modelVersion | form | readonly | OTA / engine |
| nearbyRisk | list/map | warn | **&lt;10 m** same class |
| note | form | Textarea | dirty leave-confirm |
| frame/bbox | form AIX | preview | mock |

## Actions (must work)

| Label | zone |
|-------|------|
| Tìm kiếm · Xóa lọc | filter |
| + Tạo quan sát | toolbar |
| Giả lập Mobile frame · Dashcam · CCTV · Nearby 10m | toolbar / feed |
| Làm mới · Xuất · Reset seed | toolbar |
| Xem · Sửa · Copy · Confirm · Dismiss | row / Z1 |
| Lưu nháp · Hủy · leave-confirm | Z3 / modal |
| OSM · Esri · Fit | map |

## Demo seed rules

1. ≥1 `bien_bao` Draft clean  
2. ≥1 `coc_tieu` Draft  
3. ≥1 nearby pair **&lt;10 m** same class  
4. ≥1 P2 local low score  
5. ≥1 existing Asset pin on map  
6. Badge AI · không hứa mAP P1 · dedupe **10 m** (≠ demo cũ 25 m `ai-asset-detect`)
