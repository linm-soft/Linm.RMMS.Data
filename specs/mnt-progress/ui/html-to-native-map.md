# html-to-native-map — mnt-progress (mobile)

**Sources:** dual `#sc-mnt-progress` · DA controlHint · PO §5 · real-data §B · map skill `docs/html-to-native-map.md`  
**Cấm** WebView bọc HTML · invent `api/v1/mnt-progress` · ERP.* · bottom-sheet chrome · MediaUrl trên Progress DTO · fake lat/lng

| Demo | Zone | HTML / token | iOS kit | Android kit | Notes |
|------|------|--------------|---------|-------------|-------|
| DES-MOB-MNT-PROGRESS | Header | `.nav-bar` / `.top-bar` · `.nav-title` | `LinmTopBar` | same | title 17 / ~20 |
| DES-MOB-MNT-PROGRESS | Back | `.nav-btn` / `.icon-btn` + `#i-chevron-left` · text «Công việc» (iOS) | leading | `icon-btn` chevron only | `go('mnt-list')` |
| woTitle | List | `.card-group` `.row` · `#wo-title` | `LinmListRow` | same | label 13 · value ≥16 |
| woCode | List | `.row` · `#wo-code` | `LinmListRow` | same | CV-* / WO-* |
| woStatus | List + badge | `.row` · `#wo-status-text` · `#wo-status-badge` | `LinmListRow` + badge | same | VN mnt-list map |
| progressPct | Field | `.field` · `#progress-pct` · `#progress-slider` | `LinmTextField` / slider | same | 0–100 → `ProgressPercent` |
| note | Field | `.field` textarea · `#note` | `LinmTextArea` | same | → `Note` · + GPS text |
| photoLabel | Section | `.section-label` | SectionLabel | same | **Ảnh hiện trường** |
| photos / addPhoto | Photo | `.photo-row` · `#i-camera` | PhotoRow · `LinmIconButton` | same | device · không progress body P1 |
| locationRow | List | `.row` · `#location-row` | `LinmListRow` | same | device GPS · **cấm** map |
| btnUpdate | CTA | `.btn-primary` · `#btn-update` | `LinmPrimaryButton` | same | POST progress · @100 complete |
| Toast OK/Err | Banner | `#toast` | `LinmToast` | same | **cấm** alert · **cấm** fake % |
| GPS deny | Modal | `#modal-gps` `DES-MOB-GPS-DENY` | kit modal | same | `?deny=1` |
| Leave dirty | Modal | `#modal-leave` `DES-MOB-LEAVE` | kit modal | same | dirty back |
| Banner missing | Warn | `.banner` · `#banner-missing` | Text / banner | same | `?missing=1` · chặn primary |
| Shell Tab 5 | Chrome | `.tabbar` / `.nav` · `data-tab=work` | `LinmTabBar` | NavigationBar | **giữ** · không invent |
| Entry mnt-list | — | `#i-sync` parent | navigate push | reuse | **không** reimplement trên pack |

## CSS token (ý nghĩa — không clone px)

| CSS demo | Native |
|----------|--------|
| `--blue` / `#0C84C0` | brand primary tint |
| `--surface` `#F2F2F7` | page background |
| `.row-sub` 13 / `.row-title` 16 | Dynamic Type / M3 scale |
| `.field label` 13 / input ≥16 | typography gate |
| `.section-label` 13 | section |
| `.btn` 16 | CTA |
| padding 8–16 rhythm | HIG 8pt · M3 4dp grid |
| iOS radius 12 / Android 16–28 | platform chrome OK |

## JS hành vi → native

| Demo JS | Native |
|---------|--------|
| `onUpdate` → toast `Đã cập nhật tiến độ · {n}%` | UseCase POST `…/progress` → `LinmToast` · **cấm** fake on fail |
| `n >= 100` → status Đã hoàn thành | POST `…/complete` · toast · pop `mnt-list` |
| `n < 100` → status Đang xử lý | service `new`→`in_progress` · refresh badge |
| slider ↔ number sync | local binding `ProgressPercent` |
| invalid % → disable / toast | validation · BE 422 toast |
| `embedGpsNote` | append GPS tóm tắt → `Note` · **cấm** invent lat/lng DTO |
| `openCapture` | Camera / PhotoPicker · PhotoRow · MediaUrl DEFER |
| `?missing=1` banner + disable | thiếu WO id · chặn Cập nhật |
| `?deny=1` GPS modal | `DES-MOB-GPS-DENY` · location empty · vẫn submit |
| dirty `goBack` → leave modal | `DES-MOB-LEAVE` · **cấm** system alert |
| `goBack` clean | pop `NavigationStack` / `NavController` → mnt-list |
| seed appear | nav args / `GET …/work-orders/{id}` · fail → SSOT fallback |

## BFF bind (Design note · SA chi tiết)

| Zone | Method · Path |
|------|----------------|
| Prefill header WO | `GET maintenance/work-orders/{id}` (opt nếu nav đủ) |
| Init status (opt) | `GET maintenance/work-orders/init-data` · chrome = mnt-list VN |
| Cập nhật tiến độ | `POST maintenance/work-orders/{id}/progress` · `ProgressWorkOrderRequest` |
| Hoàn thành (@100) | `POST maintenance/work-orders/{id}/complete` · `CompleteWorkOrderRequest` |
| Optional media | `POST/PUT ai-vision/uploads…` · **GAP MEDIA** |
| GPS / camera | device only · **không** API trên progress body |

**Cấm** invent `api/v1/mnt-progress` · `ProgressController` trên Mobile.Bff · ERP.*.

## Version meta

| Field | Value |
|-------|-------|
| skillId | mobile-ui-ux-analy |
| generatedAt | 2026-08-29T06:09:10.000Z |
| contentHash | sha256:mnt-progress-mobile-control-hint-20260829 |
| taskId | `task_be38de39` |

---
<!-- Version meta: skillId=mobile-ui-ux-analy schemaVersion=2 -->
