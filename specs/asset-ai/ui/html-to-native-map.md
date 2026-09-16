# html-to-native-map — asset-ai (mobile)

**Sources:** dual `#sc-asset-ai` · DA controlHint · PO · real-data §B  
**Cấm** WebView bọc HTML · invent `api/v1/asset-ai` · ERP.* · mfeStdUrl · bottom-sheet · Confirm/Dismiss trên slug · mock:// ImageUrl

| Demo | Zone | HTML / token | iOS kit | Android kit | Notes |
|------|------|--------------|---------|-------------|-------|
| DES-MOB-ASSET-AI | Header | `.nav-bar` / `.top-bar` · `.nav-title` | `LinmTopBar` | same | title 17 / ~20 |
| DES-MOB-ASSET-AI | Back | `.nav-btn` / `.icon-btn` + `#i-chevron-left` · text «Tài sản» (iOS) | leading | `icon-btn` chevron only | `go('asset-hub')` |
| Section | Label | `.section-label` | SectionLabel 13 | same | Chụp tài sản / thiết bị mới |
| photos | Photo | `.photo-row` · `.photo-slot` | PhotoRow | same | local → upload |
| addPhoto | Camera | `.cam-btn` · `#i-camera` | CameraButton | same | `openCapture('asset-ai')` |
| rowPos | List | `.card-group` `.row` · `#row-pos` | `LinmListRow` | same | Route+GPS · label 13 / value ≥16 |
| rowClass | List | `.row` · `#row-class` | `LinmListRow` | same | AssetClass sau detect |
| rowScore | List | `.row` · `#row-score` | `LinmListRow` | same | Score % · **P1 show** |
| btnSend | CTA | `.btn-primary` · `#btn-send` | `LinmPrimaryButton` | same | POST `ai-vision/detect-assets` |
| btnCancel | CTA | `.btn-secondary` · `#btn-cancel` | `LinmSecondaryButton` | same | pop hub |
| Toast OK/Err | Banner | `#toast` | `LinmToast` | same | **cấm** alert · **cấm** fake 200 |
| GPS deny | Warn | `.banner` · `#banner-gpsdeny` | `DES-MOB-GPS-DENY` | same | `?gpsdeny=1` · chặn primary |
| Shell Tab 5 | Chrome | `.tabbar` / `.nav` · `data-tab=home` | `LinmTabBar` | NavigationBar | **giữ** · không invent |
| Entry hub tile | — | asset-hub `#i-camera` | navigate push | reuse | **không** reimplement trên pack |

## CSS token (ý nghĩa — không clone px)

| CSS demo | Native |
|----------|--------|
| `--blue` / `#0C84C0` | brand primary tint |
| `--surface` `#F2F2F7` | page background |
| `.row-sub` 13 / `.row-title` 16 | Dynamic Type / M3 scale |
| `.section-label` 13 | section muted |
| `.btn` 16 | CTA |
| padding 8–16 rhythm | HIG 8pt · M3 4dp grid |
| iOS radius 12 / Android 16–28 | platform chrome OK |

## JS hành vi → native

| Demo JS | Native |
|---------|--------|
| `onSend` → toast Code | UseCase upload+detect → `LinmToast` · enqueue `det-hitl` · **cấm** fake code on fail |
| `onCancel` / `goBack` | pop → `asset-hub` |
| `onCapture` | `openCapture('asset-ai')` → PhotoRow fill → upload `ImageUrl` |
| `?gpsdeny=1` banner + disable | GPS deny · CTA off · **cấm** fake lat/lng |
| empty photo → toast | validation · block detect |
| class/score SSOT 91% / Cống | demo fallback only · live bind response |

## BFF bind (Design note · SA chi tiết)

| Zone | Method · Path |
|------|----------------|
| Upload | POST/PUT `ai-vision/uploads/*` |
| Detect | POST `ai-vision/detect-assets` |
| Route prefill | GET `patrol/sessions` · `integration/road-routes/search` |
| Confirm Asset | **OUT** — `det-hitl` |

**Cấm** invent `api/v1/asset-ai` · Finance assets · ERP.*.

## Version meta

| Field | Value |
|-------|-------|
| skillId | mobile-ui-ux-analy |
| generatedAt | 2026-09-01T17:10:00.000Z |
| contentHash | sha256:asset-ai-html-map-20260901 |

---
<!-- Version meta: skillId=mobile-ui-ux-analy -->
