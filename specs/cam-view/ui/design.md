# Design — cam-view

| Field | Value |
|-------|-------|
| feature | `cam-view` |
| title | [Mobile] Camera xem |
| role | `/agent-design-mobile` |
| status | **confirmed** (autoApprove=ON) |
| packKind | **`screen`** (PO chốt · đóng GAP-MOB-CAMVIEW-PACK-01 · **cấm** sheet chrome / `#sheet-*`) |
| changeScope | `new_page` |
| taskId | `task_a3c2af87` |
| priorPo | `po/requirement.md` **confirmed** |
| priorDa | `_data-analy/cam-view-control-hint.md` + `cam-view-real-data.md` **confirmed** · hash skip · **cấm** re-scan (`GAP-DES-DEMO-RESCAN-01`) |
| contentHash | `sha256:cam-view-control-hint-20260829` |
| realDataHash | `sha256:cam-view-real-data-20260829` |
| updatedAt | `2026-08-29T17:50:00.000Z` |

## reviewUrl (dual — REQUIRED)

| Platform | Path | reviewUrl |
|----------|------|-----------|
| iOS | `ui/prototype/ios/index.html` | `file:///Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Data/specs/cam-view/ui/prototype/ios/index.html` |
| iOS empty | same + `?empty=1` | `file:///Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Data/specs/cam-view/ui/prototype/ios/index.html?empty=1` |
| iOS fail | same + `?fail=1` | `file:///Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Data/specs/cam-view/ui/prototype/ios/index.html?fail=1` |
| Android | `ui/prototype/android/index.html` | `file:///Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Data/specs/cam-view/ui/prototype/android/index.html` |
| Android empty | same + `?empty=1` | `file:///Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Data/specs/cam-view/ui/prototype/android/index.html?empty=1` |
| Android fail | same + `?fail=1` | `file:///Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Data/specs/cam-view/ui/prototype/android/index.html?fail=1` |

**Cấm** `mfeStdUrl` / `yarn start:std` / port 9301.

## Frame / chrome

| | iOS | Android |
|--|-----|---------|
| Frame | 390×844 | 412×915 |
| Back | `#i-chevron-left` + label **Tôi** | icon-btn chevron only (parity OK) |
| Title | inline **Camera xem** 17 | TopAppBar **Camera xem** ~20 |
| Trailing | TextButton **Làm mới** 16 | same trailing text |
| Shell | Tab 5 · tab **`me`** (Tôi) active | NavigationBar 5 · cùng index |
| pack tabs | **none** — **cấm** invent segment (`GAP-TAB-01`) | same |
| Surface | **full screen** `#sc-cam-view` — **cấm** bottom-sheet | same · **2** event rows (tốc độ + biển) + lane sub (đóng **GAP-MOB-CAMVIEW-DUAL-01**) |

## DES table

| DES | Zone | iOS | Android | Notes |
|-----|------|-----|---------|-------|
| `DES-MOB-CAM-VIEW` | Screen owner `#sc-cam-view` | push từ `me` | same | `data-tab="me"` |
| JPEG card | dark preview + `#i-video` | ImageCard / MediaPreview | same | bind Base64 · placeholder khi empty/fail |
| Caption model | Ảnh JPEG · {ModelCode} | Text 16 | same | demo iDS-TCM403 |
| Caption time | Cập nhật {HH:mm} | Text **13** | same | `CapturedAt` local |
| SectionEvents | **Sự kiện** | SectionLabel **13** | same | fixed |
| `LinmListRow` speed | Tốc độ {n} km/h | title ≥16 · sub 13 | same | `SpeedKmh` · time · «làn …» |
| `LinmListRow` plate | Phát hiện biển {Plate} | same | same · **bắt buộc** | `Plate` · dual parity |
| Toast OK | Đã làm mới ảnh | `LinmToast` | same | sau Làm mới OK |
| Toast fail | lỗi tải ảnh / sự kiện | `LinmToast` | same | **cấm** fake |
| EmptyState | không cam Online | EmptyState | same | GET cameras empty / no Online |
| Entry row | Camera xem `#i-video` | reuse `me` | reuse | **không** reimplement hub |
| Chip | Camera tuyến | ops/home shared | same | `shared_action` · không enqueue |

## SF ↔ Material icon

| `#i-*` | Motif (SSOT mobile-p1) | SF Symbol | Material |
|--------|------------------------|-----------|----------|
| `#i-chevron-left` | `M15 5l-7 7 7 7` | `chevron.left` | `ArrowBack` |
| `#i-video` | rect 3,7 12×10 rx2 + path `M15 10.5 21 7v10l-6-3.5` | `video` | `Videocam` |
| `#i-home` | house path | `house` | `Home` |
| `#i-mappin` | pin + circle r=2.2 | kit / `mappin` | `Place` |
| `#i-warning` | triangle | `exclamationmark.triangle` | `Warning` |
| `#i-wrench` | wrench path | `wrench` | `Build` |
| `#i-person` | person | `person` | `Person` |

**Cấm** invent `#i-*` · **cấm** lệch `d=` dual (`GAP-MOB-ICON-*`).

## Copy VN (SSOT — parity dual)

| Key | Copy |
|-----|------|
| Title | **Camera xem** |
| Back (iOS) | **Tôi** |
| Trailing | **Làm mới** |
| JPEG model | **Ảnh JPEG · iDS-TCM403** (demo bind) |
| JPEG updated | **Cập nhật 08:41** (demo bind) |
| Section | **Sự kiện** |
| Event 1 | **Tốc độ 72 km/h** · sub **08:41 · làn 2** |
| Event 2 | **Phát hiện biển P.127** · sub **08:36** |
| Toast refresh | **Đã làm mới ảnh** |
| Toast fail | **Không tải được ảnh** / **Không tải được sự kiện** / **Mất sóng** |
| Empty | **Chưa có camera Online** · hint chọn sau khi có thiết bị |
| Tabs | Trang Chủ · Tuần đường · Vấn đề · Công việc · Tôi |

**Cấm ship:** watermark Gói · device label «iPhone»/«· Android» · «Có mạng» · fake Base64/Speed/Plate · sheet pack chrome · RTSP live · AVCapture/CameraX finder.

## Kit map

| Demo | Kit iOS+Android | Notes |
|------|-----------------|-------|
| `.nav-bar` / `.top-bar` | `LinmTopBar` | leading chevron · trailing Làm mới |
| `.jpeg-card` | ImageCard / MediaPreview | dark surface · `#i-video` placeholder · **không** invent kit name mới |
| `.section-label` | SectionLabel | 13 · dual **bắt buộc** |
| `.row` / `.card-group` | `LinmListRow` | speed + plate · Android **2 rows** |
| `.empty` | EmptyState | no Online / empty cameras |
| toast | `LinmToast` | OK / fail / offline |
| Tab 5 | `LinmTabBar` / NavigationBar | giữ shell · **me** active |

### kit_missing_confirm

**none** — TopBar / ListRow / Toast / EmptyState **đã có**. JPEG ImageCard = app surface MediaPreview đã map trên controlHint · **không** tạo package mới P1 · **không** AVCapture/CameraX.

## controlHint ↔ DES

Khớp PO §5 / DA controlHint — UNCLEAR=**none**. Pick P1 = first `Online∧IsActive` (**GAP-MOB-CAMVIEW-PICK-01**) · **không** picker UI. Làm mới = re-POST snapshot + re-GET events. Dual Android = 2 event row types + lane (**GAP-MOB-CAMVIEW-DUAL-01** CLOSED). Live RTSP **OUT P2**.

## BFF (Design note · SA chi tiết)

| Zone | Method · Path |
|------|----------------|
| Pick cam / ModelCode | `GET cameras` · first Online ∧ IsActive |
| JPEG preview / Làm mới | `POST cameras/{id}/snapshot` |
| Sự kiện | `GET cameras/events` · `limit` · optional `host=` |
| Toast / Empty / pick | local · device |

**Cấm** invent `api/v1/cam-view` · `CamViewController` · ERP.* · `mfeStdUrl` · credentials `connect/snapshot`.

## Out of pack

| Item | Owner |
|------|-------|
| web `camera-connect` HW / CRUD / connect | sibling · **cấm** gộp |
| `cam-patrol` finder · `vis-capture` | sibling |
| RTSP / WebRTC live | P2 · GAP-MOB-CAMVIEW-LIVE-01 |
| Camera picker list UI | OUT P1 |
| Bottom-sheet chrome | **cấm** (pack = screen) |

## Gates

| Gate | Artifact | Result |
|------|----------|--------|
| `/mobile-ui-ux-analy` | `ui/ux-analy.md` §1–§9 | **PASS** |
| html-to-native-map | `ui/html-to-native-map.md` | **PASS** |
| `/review-demo-design-mobile` | `ui/review/demo-parity.md` | Must=**0** |
| `kit_missing_confirm` | — | **none** |
| `design_confirm` | autoApprove=ON | **approve** |

## design_confirm

**approve** · autoApprove=ON · dual `ios/`+`android/` · ux-analy §1–§9 · demo-parity Must=0 · packKind=`screen` · Android 2 event rows + lane · first Online pick · JPEG only · hash skip (no re-scan).

## Version meta

| Field | Value |
|-------|-------|
| skillId | agent-design-mobile |
| skillVersion | 2026.08.25.01 |
| schemaVersion | 1 |
| workflowVersion | 2026.08.25.01 |
| rulesVersion | 2026.08.25.2 |
| generatedAt | 2026-08-29T17:50:00.000Z |
| versionGate | rechecked |
| contentHash | sha256:cam-view-control-hint-20260829 |
| realDataHash | sha256:cam-view-real-data-20260829 |
| demoHash | sha256:mobile-p1-sc-cam-view-20260829 |
| ctxHash | sha256:cam-view-ctx-20260829 |

---
<!-- Version meta: skillId=agent-design-mobile skillVersion=2026.08.25.01 schemaVersion=1 workflowVersion=2026.08.25.01 rulesVersion=2026.08.25.2 versionGate=rechecked -->
