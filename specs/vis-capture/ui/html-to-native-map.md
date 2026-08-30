# html-to-native-map — vis-capture

**Sources:** dual `#sc-vis-capture` · DA controlHint · PO §5 · map skill `html-to-native-map.md`  
**Cấm** WebView bọc HTML · invent `vis-capture` API · ERP.*

| Demo | Zone | HTML / token | iOS kit | Android kit | Notes |
|------|------|--------------|---------|-------------|-------|
| DES-MOB-VIS-CAPTURE | Header | `.nav-bar` / `.top-bar` · `.nav-title` | `LinmTopBar` | same | title 17 / ~20 |
| DES-MOB-VIS-CAPTURE | Back | `.nav-btn` + `#i-chevron-left` · text «Vấn đề» (iOS) | leading | `icon-btn` chevron only | `go('incident-list')` |
| SectionPhoto | Label | `.section-label` «Ảnh hiện trường» | SectionLabel 13 | same | dual Android **bắt buộc** |
| PhotoRow | Slots | `.photo-row` · `.photo-slot` · `#i-camera` | PhotoRow | same | still · `openCapture('vision')` |
| Detect card | Group | `.card-group` | inset grouped | `Card` + column | |
| rowLoc | List | `.row` · row-sub/title | `LinmListRow` | same | label 13 · value ≥16 |
| rowAcc | List | `.row` | `LinmListRow` | same | AccuracyM |
| rowClass | List | `.row` | `LinmListRow` | same | DefectClass |
| rowSev | List + badge | `.row` + `.badge.orange` | `LinmListRow` + Badge | same | Severity map |
| Attach | CTA | `.btn-primary` | `LinmPrimaryButton` | same | POST `incident/incidents` |
| Skip | CTA | `.btn-secondary` | `LinmSecondaryButton` | same | local · dual **bắt buộc** |
| Toast OK / GPS | Banner | `#toast` | `LinmToast` | same | **cấm** alert |
| DES-MOB-GPS-DENY | Modal | `#modal-gps` | feature overlay | Material dialog card | chặn detect + Attach |
| Deny primary | Button | Sao chép hướng dẫn | `LinmPrimaryButton` | same | clipboard + toast |
| Deny secondary | Button | Để sau | `LinmSecondaryButton` | same | dismiss |
| Shell Tab 5 | Chrome | `.tabbar` / `.nav` · `data-tab=incident` | `LinmTabBar` | NavigationBar | **giữ** · không invent |
| Entry banner | — | `.vn-banner` `#i-camera` trên incident-list | reuse | reuse | **không** reimplement trên pack |

## CSS token (ý nghĩa — không clone px)

| CSS demo | Native |
|----------|--------|
| `--blue` / `#0C84C0` | brand primary tint |
| `--orange` / `#FF9500` | badge Cao |
| `--surface` `#F2F2F7` | page background |
| `.section-label` 13 / `.row-sub` 13 / `.row-title` 16 | Dynamic Type / M3 scale |
| `.photo-slot` 88×88 | PhotoRow cell |
| padding 8–16 rhythm | HIG 8pt · M3 4dp grid |

## JS hành vi → native

| Demo JS | Native |
|---------|--------|
| `openCapture('vision')` | still camera → PhotoRow filled → POST detect nếu GPS OK + ≤ 30 m |
| `onAttach` → toast «Đã gắn sự cố» | UseCase CreateIncident + DetectionId → `LinmToast` → pop list |
| `onSkip` → back list | pop `NavigationStack` / `NavController` · **không** API |
| `?deny=1` modal | CoreLocation / Fused deny → modal · disable Attach |
| `?acc=35` toastGpsBlock | AccuracyM > 30 → toast · **không** POST detect |
| `goBack` | pop → incident-list |

## BFF bind (Design note · SA chi tiết)

| Zone | Method · Path |
|------|----------------|
| Optional media | `POST ai-vision/uploads/init` · PUT · complete |
| Detect | `POST ai-vision/detect` |
| Prefill Loc | optional `GET patrol/sessions` |
| Attach | `POST incident/incidents` |
| GPS / camera / Skip | device · local |

**Cấm** invent `api/v1/vis-capture` · `VisCaptureController`.

## Version meta

| Field | Value |
|-------|-------|
| skillId | mobile-ui-ux-analy |
| generatedAt | 2026-08-29T09:00:00.000Z |
| contentHash | sha256:vis-capture-control-hint-20260829 |
| taskId | `task_27b1bf39` |

---
<!-- Version meta: skillId=mobile-ui-ux-analy schemaVersion=1 -->
