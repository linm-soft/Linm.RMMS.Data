# html-to-native-map — field-reflect

**Sources:** dual `#sc-field-reflect` · DA controlHint · PO §5 · map skill `docs/html-to-native-map.md`  
**Cấm** WebView bọc HTML · invent `field-reflect` API · ERP.*

| Demo | Zone | HTML / token | iOS kit | Android kit | Notes |
|------|------|--------------|---------|-------------|-------|
| DES-MOB-FIELD-REFLECT | Header | `.nav-bar` / `.top-bar` · `.nav-title` | `LinmTopBar` | same | title 17 / ~20 |
| DES-MOB-FIELD-REFLECT | Back | `.nav-btn` + `#i-chevron-left` · text «Tuần đường» (iOS) | leading | `icon-btn` chevron only | `go('patrol-home')` |
| Empty banner | Banner | `.banner` `#banner-empty` | Text / banner | same | `?empty=1` · draft vẫn OK |
| Kind label | Section | `.section-label` | Text 13 | same | **Loại phản ánh** |
| DES-MOB-FIELD-KIND | Pills | `.kind-pills` | `LinmKindPills` | same | Hư/Mất/Hỏng · default Hư |
| Photo label | Section | `.section-label` | Text 13 | same | **Ảnh hiện trường** |
| PhotoRow | Media | `.photo-row` · `.photo-slot` | PhotoRow pattern | same | filled + camera |
| Camera | Slot | `.photo-slot` + `#i-camera` | `LinmIconButton` | same | `openCapture('reflect')` |
| Detect card | Group | `.card-group` | inset grouped | `Card` + column | |
| detectRow | List | `.row` · row-sub/title | `LinmListRow` | same | label 13 · value ≥16 |
| severityRow | List | `.row` + `.badge.orange` | `LinmListRow` + Badge | same | bind Severity |
| locationRow | List | `.row` | `LinmListRow` | same | GPS chốt · **cấm** fake |
| Chk label | Section | `.section-label` | Text 13 | same | |
| checklist | List | `.chk-row` · `.chk-k` · `.chk-t` | CheckboxList pattern | same | PAVEMENT SSOT |
| Create | CTA | `.btn-primary` | `LinmPrimaryButton` | same | POST `incident/incidents` |
| Draft | CTA | `.btn-secondary` | `LinmSecondaryButton` | same | offline queue |
| Toast OK/Draft | Banner | `#toast` | `LinmToast` | same | **cấm** alert |
| DES-MOB-GPS-DENY | Modal | `#modal-gps` | feature overlay | Material dialog card | chặn Create |
| Deny primary | Button | Sao chép hướng dẫn | `LinmPrimaryButton` | same | clipboard + toast |
| Deny secondary | Button | Để sau | `LinmSecondaryButton` | same | dismiss |
| Shell Tab 5 | Chrome | `.tabbar` / `.nav` · `data-tab=field` | `LinmTabBar` | NavigationBar | **giữ** · không invent |
| Entry hub | — | `#row-reflect` `#i-camera` trên patrol-home | reuse | reuse | **không** reimplement trên pack |

## CSS token (ý nghĩa — không clone px)

| CSS demo | Native |
|----------|--------|
| `--blue` / `#0C84C0` | brand primary tint |
| `--orange` / `#FF9500` | severity badge |
| `--surface` `#F2F2F7` | page background |
| `.row-sub` 13 / `.row-title` 16 / `.section-label` 13 | Dynamic Type / M3 scale |
| `.kind-pills button` 13 | pill label |
| `.btn` 16 | CTA |
| padding 8–16 rhythm | HIG 8pt · M3 4dp grid |

## JS hành vi → native

| Demo JS | Native |
|---------|--------|
| `onCreate` → toast SC-2408 | UseCase CreateIncident → `LinmToast` |
| `onDraft` → toast nháp | local queue · `patrol-offline` |
| kind pill click → `renderChk` | filter CHK by kind enum |
| `openCapture` | camera permission · PhotoRow append |
| `?deny=1` modal · disable Create | CoreLocation / Fused deny → modal |
| `?empty=1` banner | empty `GET patrol/sessions` «Đang tuần» |
| `goBack` | pop `NavigationStack` / `NavController` |

## BFF bind (Design note · SA chi tiết)

| Zone | Method · Path |
|------|----------------|
| Prefill ca / tuyến | `GET patrol/sessions` |
| Catalog loại TS (optional) | `GET integration/asset-types` |
| Optional media | `POST ai-vision/uploads` (+ PUT object) |
| Detect | `POST ai-vision/detect` |
| Create | `POST incident/incidents` |
| GPS / camera / Kind / Checklist / Draft | device · local |

**Cấm** invent `api/v1/field-reflect` · `FieldReflectController`.

## Version meta

| Field | Value |
|-------|-------|
| skillId | mobile-ui-ux-analy |
| generatedAt | 2026-08-28T22:16:32.000Z |
| contentHash | sha256:field-reflect-control-hint-20260829 |

---
<!-- Version meta: skillId=mobile-ui-ux-analy schemaVersion=1 -->
