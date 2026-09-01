# html-to-native-map — cam-patrol

**Sources:** dual `#sc-cam-patrol` · DA controlHint · PO §5 · map skill `html-to-native-map.md`  
**Cấm** WebView bọc HTML · invent `cam-patrol` API · ERP.*

| Demo | Zone | HTML / token | iOS kit | Android kit | Notes |
|------|------|--------------|---------|-------------|-------|
| DES-MOB-CAM-PATROL | Header | `.nav-bar` / `.top-bar` · `.nav-title` | `LinmTopBar` | same | title 17 / ~20 |
| DES-MOB-CAM-PATROL | Back | `.nav-btn` + `#i-chevron-left` · text «Tuần đường» (iOS) | leading | `icon-btn` chevron only | `go('patrol-home')` |
| DES-MOB-CAM-FINDER | Preview | `.finder` | AVCapture overlay | CameraX Preview | **app surface** · không kit package mới |
| DES-MOB-CAM-FINDER | FOV | `.finder .box` | overlay rect `#5AC8FA` | same | |
| OverlayStamp | Route + GPS | `.finder .stamp` | Text 13 overlay | same | live sessions + GPS · **cấm** demoRouteStamp (cleanup_mock) |
| Detect card | Group | `.card-group` | inset grouped / card | `Card` + column | |
| rowDetect | List | `.row` · row-sub/title | `LinmListRow` | same | label 13 · value ≥16 |
| rowScore | List | `#row-score` | — | — | **demo only** · **không map ship** |
| rowAction | List | `.row` | `LinmListRow` | same | copy cố định |
| Confirm | CTA | `.btn-primary` | `LinmPrimaryButton` | same | POST `incident/incidents` |
| Skip | CTA | `.btn-secondary` | `LinmSecondaryButton` | same | local dismiss |
| Toast OK/Skip | Banner | `#toast` | `LinmToast` | same | **cấm** alert |
| DES-MOB-GPS-DENY | Modal | `#modal-gps` | feature overlay | Material dialog card | chặn Confirm |
| Deny primary | Button | Sao chép hướng dẫn | `LinmPrimaryButton` | same | clipboard + toast |
| Deny secondary | Button | Để sau | `LinmSecondaryButton` | same | dismiss |
| Shell Tab 5 | Chrome | `.tabbar` / `.nav` · `data-tab=field` | `LinmTabBar` | NavigationBar | **giữ** · không invent |
| Entry hub | — | `#i-video` trên patrol-home | reuse | reuse | **không** reimplement trên pack |

## CSS token (ý nghĩa — không clone px)

| CSS demo | Native |
|----------|--------|
| `--blue` / `#0C84C0` | brand primary tint |
| `--fov` / `#5AC8FA` | FOV stroke |
| `--surface` `#F2F2F7` | page background |
| `.row-sub` 13 / `.row-title` 16 | Dynamic Type / M3 scale |
| padding 8–16 rhythm | HIG 8pt · M3 4dp grid |

## JS hành vi → native

| Demo JS | Native |
|---------|--------|
| `onConfirm` → toast SC-* | UseCase CreateIncident → `LinmToast` |
| `onSkip` → hide card | clear `UiState.detection` |
| `?deny=1` modal | CoreLocation / Fused deny → modal |
| `?ship=1` hide score | release build **không** bind Score row |
| `goBack` | pop `NavigationStack` / `NavController` |

## BFF bind (Design note · SA chi tiết)

| Zone | Method · Path |
|------|----------------|
| Stamp tuyến | `GET patrol/sessions` |
| Detect | `POST ai-vision/detect` |
| Confirm | `POST incident/incidents` |
| GPS / camera / Skip | device · local |

**Cấm** invent `api/v1/cam-patrol` · `CamPatrolController`.

## Version meta

| Field | Value |
|-------|-------|
| skillId | mobile-ui-ux-analy |
| generatedAt | 2026-08-28T21:08:48.000Z |
| contentHash | sha256:cam-patrol-control-hint-20260828 |

---
<!-- Version meta: skillId=mobile-ui-ux-analy schemaVersion=1 -->
