# html-to-native-map — cam-patrol

**Sources:** dual `#sc-cam-patrol` · DA controlHint · PO § Delta FRAME · `html-to-native-map.md`  
**changeScope:** `edit_page` · zones **unchanged** · frame DoD = native bind  
**Cấm** WebView bọc HTML · invent `cam-patrol` API · ERP.*

| Demo | Zone | HTML / token | iOS kit | Android kit | Notes |
|------|------|--------------|---------|-------------|-------|
| DES-MOB-CAM-PATROL | Header | `.nav-bar` / `.top-bar` · `.nav-title` | `LinmTopBar` | same | title 17 / ~20 |
| DES-MOB-CAM-PATROL | Back | `.nav-btn` + `#i-chevron-left` · «Tuần đường» (iOS) | leading | `icon-btn` chevron | `go('patrol-home')` |
| DES-MOB-CAM-FINDER | Preview | `.finder` | AVCapture overlay | CameraX Preview | app surface |
| DES-MOB-CAM-FINDER | FOV | `.finder .box` | overlay `#5AC8FA` | same | |
| DES-MOB-CAM-FINDER | Frame capture | (native · không HTML widget) | JPEG session → base64 | ImageCapture → base64 | **GAP-MOB-CAM-FRAME-01** trước POST |
| OverlayStamp | Route + GPS | `.finder .stamp` | Text 13 | same | live sessions + GPS · **cấm** demoRouteStamp ship |
| Detect card | Group | `.card-group` `#detect-card` | inset grouped | `Card` | fail → **hidden** / nil |
| rowDetect | List | `.row` | `LinmListRow` | same | **chỉ** sau ok+frame |
| rowScore | List | `#row-score` | — | — | demo only · **không map ship** |
| rowAction | List | `.row` | `LinmListRow` | same | copy cố định |
| Confirm | CTA | `.btn-primary` | `LinmPrimaryButton` | same | POST incident |
| Skip | CTA | `.btn-secondary` | `LinmSecondaryButton` | same | local dismiss |
| Toast OK/Skip/Fail | Banner | `#toast` | `LinmToast` | same | fail = `cam.toast.detectFail` · `?fail=1` |
| DES-MOB-GPS-DENY | Modal | `#modal-gps` | feature overlay | Material dialog | chặn Confirm |
| Shell Tab 5 | Chrome | `.tabbar` / `.nav` · `data-tab=field` | `LinmTabBar` | NavigationBar | giữ |
| Entry hub | — | `#i-video` patrol-home | reuse | reuse | **không** reimplement |

## CSS token (ý nghĩa — không clone px)

| CSS demo | Native |
|----------|--------|
| `--blue` / `#0C84C0` | brand primary |
| `--fov` / `#5AC8FA` | FOV stroke |
| `--surface` `#F2F2F7` | page background |
| `.row-sub` 13 / `.row-title` 16 | Dynamic Type / M3 |
| padding 8–16 | HIG 8pt · M3 4dp |

## JS hành vi → native

| Demo JS | Native |
|---------|--------|
| default card ok | detect 200 + real frame → bind DefectClass |
| `?fail=1` → hide card + toast detectFail | capture/HTTP fail · **cấm** fake class |
| `onConfirm` → toast SC-* | CreateIncident → `LinmToast` |
| `onSkip` → hide card | clear detection |
| `?deny=1` modal | GPS deny → modal |
| `?ship=1` hide score | release **không** Score row |
| `goBack` | pop navigation |

## BFF bind (Design note · SA chi tiết)

| Zone | Method · Path |
|------|----------------|
| Stamp tuyến | `GET patrol/sessions` |
| Frame | device · local → `ImageBase64` |
| Detect | `POST ai-vision/detect` + **ImageBase64** |
| Confirm | `POST incident/incidents` |
| GPS / camera / Skip / Fail toast | device · local |

**Cấm** invent `api/v1/cam-patrol` · null-image POST khi camera granted.

## Version meta

| Field | Value |
|-------|-------|
| skillId | mobile-ui-ux-analy |
| generatedAt | 2026-09-12T11:30:00.000Z |
| contentHash | sha256:cam-patrol-control-hint-20260912-frame |

---
<!-- Version meta: skillId=mobile-ui-ux-analy schemaVersion=1 -->
