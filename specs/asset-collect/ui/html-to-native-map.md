# html-to-native-map — asset-collect

**Sources:** dual `#sc-asset-collect` · DA controlHint · PO §5 · map skill `docs/html-to-native-map.md`  
**Cấm** WebView bọc HTML · invent `asset-collect` API · ERP.* · sheet chrome

| Demo | Zone | HTML / token | iOS kit | Android kit | Notes |
|------|------|--------------|---------|-------------|-------|
| DES-MOB-ASSET-COLLECT | Header | `.nav-bar` / `.top-bar` · `.nav-title` | `LinmTopBar` | same | title 17 / ~20 |
| navBack | Back | `.nav-btn` + `#i-chevron-left` · text «Tài sản» (iOS) | leading | `icon-btn` chevron only | `go('asset-hub')` |
| typeSelect | Field | `.field` · `select` | `LinmSelect` | same | GET asset-types · label 13 / value ≥16 |
| nameField | Field | `.field` · `input` | `LinmTextField` | same | → `Name` |
| routeKm | Field | `.field` · `input[readonly]` | TextField readonly | same | wire `Route`+`KmFrom` |
| gpsPin | Field | `.field` · `input[readonly]` | TextField readonly | same | Lat,Lng · ±m · **cấm** gõ tay |
| statusField | Field | `.field` · `select` | `LinmSelect` | same · dual | init-data Statuses · default `tot` |
| photoLabel | Section | `.section-label` | Text 13 | same · dual | **Ảnh** |
| photos | Media | `.photo-row` · `.photo-slot` | PhotoRow pattern | same | local · MEDIA GAP |
| addPhoto | Slot | `.photo-slot` + `#i-camera` | CameraButton | same | `openCapture('asset')` |
| btnAdd | CTA | `.btn-primary` | `LinmPrimaryButton` | same | POST `asset/road-assets` |
| Toast OK/Err | Banner | `#toast` | `LinmToast` | same | **cấm** alert · **cấm** fake 200 |
| DES-MOB-GPS-DENY | Modal | `#modal-gps` | feature overlay | Material dialog card | CTA off |
| Deny primary | Button | Sao chép hướng dẫn | `LinmPrimaryButton` | same | clipboard + toast |
| Deny secondary | Button | Để sau | `LinmSecondaryButton` | same | dismiss |
| DES-MOB-LEAVE | Modal | `#modal-leave` | feature overlay | same | dirty leave |
| Shell Tab 5 | Chrome | `.tabbar` / `.nav` · `data-tab=home` | `LinmTabBar` | NavigationBar | **giữ** · không invent |
| Entry tile | Hub | `LinmHubTile` `#i-plus` | reuse asset-hub | same | wire push · **không** reimplement |

## CSS token (ý nghĩa — không clone px)

| CSS demo | Native |
|----------|--------|
| `--blue` / `#0C84C0` | brand primary tint |
| `--surface` `#F2F2F7` | page background |
| `.field label` 13 / input ≥16 | typography gate |
| `.section-label` 13 | section |
| `.btn` 16 | CTA |
| padding 8–16 rhythm | HIG 8pt · M3 4dp grid |

## JS hành vi → native

| Demo JS | Native |
|---------|--------|
| appear → bind selects + GPS | GET types + init-data · start CoreLocation / Fused |
| `onAdd` → toast Code | UseCase CreateRoadAsset → `LinmToast` `{Code}` |
| `openCapture('asset')` | camera permission · PhotoRow append · **không** upload P1 |
| `?deny=1` modal · disable CTA | deny → `DES-MOB-GPS-DENY` · CTA off |
| dirty `goBack` → leave modal | `DES-MOB-LEAVE` · **cấm** system alert |
| `goBack` clean | pop → `asset-hub` |
| empty catalog | empty select · disable CTA · toast |

## BFF bind (Design note · SA chi tiết)

| Zone | Method · Path |
|------|----------------|
| Catalog loại TS | `GET integration/asset-types` |
| Init status | `GET asset/road-assets/init-data` |
| Prefill tuyến (optional) | `GET patrol/sessions` / `integration/road-routes/search` |
| Create | `POST asset/road-assets` |
| GPS / camera / toast / nav | device · local |
| Media upload | **OUT P1** |

**Cấm** invent `api/v1/asset-collect` · `AssetCollectController` · Finance `api/v1/assets`.

## Version meta

| Field | Value |
|-------|-------|
| skillId | mobile-ui-ux-analy |
| generatedAt | 2026-08-31T00:00:00.000Z |
| contentHash | sha256:asset-collect-control-hint-20260830 |

---
<!-- Version meta: skillId=mobile-ui-ux-analy schemaVersion=1 -->
