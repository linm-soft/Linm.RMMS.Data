# html-to-native-map — cam-view

**Sources:** dual `#sc-cam-view` · DA controlHint · PO §5 · real-data §A+§B · map skill `html-to-native-map.md`  
**Cấm** WebView bọc HTML · invent `cam-view` API · ERP.* · re-scan demo (`GAP-DES-DEMO-RESCAN-01`)

| Demo | Zone | HTML / token | iOS kit | Android kit | Notes |
|------|------|--------------|---------|-------------|-------|
| DES-MOB-CAM-VIEW | Header | `.nav-bar` / `.top-bar` · `.nav-title` | `LinmTopBar` | same | title 17 / ~20 |
| DES-MOB-CAM-VIEW | Back | `.nav-btn` + `#i-chevron-left` · text «Tôi» (iOS) | leading | `icon-btn` chevron only | `go('me')` |
| DES-MOB-CAM-VIEW | Trailing | `.nav-trailing` «Làm mới» | TextButton trailing | same | POST snapshot + GET events |
| jpegCard | Preview | `.jpeg-card` · dark · `#i-video` | ImageCard / MediaPreview | same | Base64 · placeholder fail/empty |
| jpegModel | Caption | `.jpeg-caption` 16 | Text | same | «Ảnh JPEG · {ModelCode}» |
| jpegUpdated | Caption | `.jpeg-updated` **13** | Text | same | «Cập nhật {HH:mm}» |
| sectionEvents | Label | `.section-label` «Sự kiện» | SectionLabel 13 | same | dual **bắt buộc** |
| rowEventSpeed | List | `.row` · row-title / row-sub | `LinmListRow` | same | SpeedKmh · time · lane |
| rowEventPlate | List | `.row` | `LinmListRow` | same · **2nd row bắt buộc** | Plate · dual GAP CLOSED |
| emptyCam | Empty | `.empty-state` | EmptyState | same | no Online |
| Toast OK / fail | Banner | `#toast` | `LinmToast` | same | **cấm** alert |
| Shell Tab 5 | Chrome | `.tabbar` / `.nav` · `data-tab=me` | `LinmTabBar` | NavigationBar | **giữ** · không invent |
| Entry row / chip | — | `me` `#i-video` · ops chip | reuse | reuse | **không** reimplement trên pack |

## CSS token (ý nghĩa — không clone px)

| CSS demo | Native |
|----------|--------|
| `--blue` / `#0C84C0` | brand primary tint |
| `--surface` `#F2F2F7` | page background |
| `.jpeg-card` dark `#1C1C1E` | MediaPreview surface |
| `.section-label` 13 / `.row-sub` 13 / `.row-title` 16 | Dynamic Type / M3 scale |
| `.nav-title` 17 / Android ~20 | platform chrome |
| padding 8–16 rhythm | HIG 8pt · M3 4dp grid |

## JS hành vi → native

| Demo JS | Native |
|---------|--------|
| Appear | `GET cameras` → first Online∧IsActive → `POST snapshot` + `GET events` |
| `onRefresh` | re-POST snapshot + re-GET events → toast «Đã làm mới ảnh» / fail toast |
| `?empty=1` | EmptyState · **cấm** fake TCM403 JPEG |
| `?fail=1` | giữ `#i-video` placeholder · toast lỗi · **cấm** fake Base64 |
| Events empty | section + empty list · **cấm** invent Speed/Plate |
| `goBack` | pop → `me` |

## BFF bind (Design note · SA chi tiết)

| Zone | Method · Path |
|------|----------------|
| Pick / ModelCode | `GET cameras` |
| JPEG | `POST cameras/{id}/snapshot` |
| Events | `GET cameras/events` |
| Toast / Empty | local |

**Cấm** invent `api/v1/cam-view` · `CamViewController` · `POST cameras/connect/snapshot` credentials.

## Version meta

| Field | Value |
|-------|-------|
| skillId | mobile-ui-ux-analy |
| generatedAt | 2026-08-29T17:50:00.000Z |
| contentHash | sha256:cam-view-control-hint-20260829 |
| realDataHash | sha256:cam-view-real-data-20260829 |
| taskId | `task_a3c2af87` |

---
<!-- Version meta: skillId=mobile-ui-ux-analy schemaVersion=1 -->
