# html-to-native-map — incident-create

**Sources:** dual `#sc-inc-form` · DA controlHint · PO §5 · map skill `docs/html-to-native-map.md`  
**Cấm** WebView bọc HTML · invent `incident-create` API · ERP.* · `#sheet-incident`

| Demo | Zone | HTML / token | iOS kit | Android kit | Notes |
|------|------|--------------|---------|-------------|-------|
| DES-MOB-INC-FORM | Header | `.nav-bar` / `.top-bar` · `.nav-title` | `LinmTopBar` | same | title 17 / ~20 |
| DES-MOB-INC-FORM | Back | `.nav-btn` + `#i-chevron-left` · text «Thông tin tài sản» (iOS) | leading | `icon-btn` chevron only | `go('asset-type')` |
| assetCard | Wallet | `.wallet-card` · `.k` / `.t` / `.m` | `LinmWalletCard` | same | TÀI SẢN ĐÃ CHỌN |
| Kind label | Section | `.section-label` | Text 13 | same | **Loại ghi nhận** |
| DES-MOB-INC-KIND | Pills | `.kind-pills` | `LinmSegment` / pills | same | Hư/Mất/Hỏng · default Hư |
| Chk label | Section | `.section-label` | Text 13 | same | **Checklist theo loại** |
| checklist | List | `[data-inc-chk]` · `.chk-row` | CheckboxList pattern | same | BRIDGE SSOT |
| Photo label | Section | `.section-label` | Text 13 | same | **Ảnh hiện trường** |
| PhotoRow | Media | `.photo-row` · `.photo-slot` | PhotoRow pattern | same | camera slot |
| Camera | Slot | `.photo-slot` + `#i-camera` | `LinmIconButton` | same | `openCapture('inc-form')` |
| aiRow | List | `.row` · row-sub/title · `[data-inc-ai]` | `LinmListRow` | same | label 13 · value ≥16 |
| location | Field | `.field` · `[data-inc-loc]` readonly | TextField | same | GPS chốt · **cấm** fake |
| severity | Field | `.field` · `select` | `LinmSelect` | same | 4 options · default Cao |
| description | Field | `.field` · `textarea` | `LinmTextArea` | same | placeholder SSOT |
| Create | CTA | `.btn-primary` | `LinmPrimaryButton` | same | POST `incident/incidents` |
| Cam | CTA | `.btn-secondary` | `LinmSecondaryButton` | same | `go('cam-patrol')` |
| Assign | CTA | `.btn-secondary` | `LinmSecondaryButton` | same | `go('estimate')` |
| Draft | CTA | `.btn-secondary` | `LinmSecondaryButton` | same | offline queue |
| Toast OK/Draft/Pick | Banner | `#toast` | `LinmToast` | same | **cấm** alert |
| DES-MOB-GPS-DENY | Modal | `#modal-gps` | feature overlay | Material dialog card | chặn Create |
| Deny primary | Button | Sao chép hướng dẫn | `LinmPrimaryButton` | same | clipboard + toast |
| Deny secondary | Button | Để sau | `LinmSecondaryButton` | same | dismiss |
| Shell Tab 5 | Chrome | `.tabbar` / `.nav` · `data-tab=home` | `LinmTabBar` | NavigationBar | **giữ** · không invent |
| Entry home / FAB | — | quick / FAB | `LinmQuickItem` / FAB | reuse | **không** reimplement trên pack |
| Entry pick | — | `[data-ak32-pick]` + `.ak32-grid` / `.ak32-tile` | `LinmAssetKchtPict` + grid stretch | same | `startIncidentPick` · pict 36 SSOT `asset-kcht-icons.js` · label slot 3 dòng · **cấm** 1 icon GridView · **cấm** revert height-auto (`GAP-MOB-INC-PICK-ALIGN-01`) |

## CSS token (ý nghĩa — không clone px)

| CSS demo | Native |
|----------|--------|
| `--blue` / `#0C84C0` | brand primary tint · wallet gradient |
| `--surface` `#F2F2F7` | page background |
| `.row-sub` 13 / `.row-title` 16 / `.section-label` 13 | Dynamic Type / M3 scale |
| `.field label` 13 / input ≥16 | typography gate |
| `.kind-pills button` 13 | pill label |
| `.btn` 16 | CTA |
| padding 8–16 rhythm | HIG 8pt · M3 4dp grid |

## JS hành vi → native

| Demo JS | Native |
|---------|--------|
| `startIncidentPick` → toast pick + asset-types | nav pick mode · banner |
| `openIncidentForm(code)` → fill wallet + CHK | bind asset · load checklist by code |
| `submitIncident` → toast SC-2418 | UseCase CreateIncident → `LinmToast` |
| draft → toast **Nháp mất sóng** | local queue · `patrol-offline` |
| kind pill click | local IncidentType enum |
| `openCapture('inc-form')` | camera permission · PhotoRow append |
| `go('cam-patrol')` / `go('estimate')` | navigate reuse |
| `?deny=1` modal · disable Create | CoreLocation / Fused deny → modal |
| `?pick=1` toast pick | entry without asset |
| `goBack` | pop `NavigationStack` / `NavController` |

## BFF bind (Design note · SA chi tiết)

| Zone | Method · Path |
|------|----------------|
| Catalog loại TS | `GET integration/asset-types` |
| Prefill ca / tuyến | `GET patrol/sessions` (optional) |
| Optional media | `POST ai-vision/uploads` (+ PUT object) |
| Detect | `POST ai-vision/detect` |
| Create | `POST incident/incidents` |
| GPS / camera / Kind / Checklist / Draft | device · local |

**Cấm** invent `api/v1/incident-create` · `IncidentCreateController`.

## Version meta

| Field | Value |
|-------|-------|
| skillId | mobile-ui-ux-analy |
| generatedAt | 2026-08-29T00:45:00.000Z |
| contentHash | sha256:incident-create-control-hint-20260829 |

---
<!-- Version meta: skillId=mobile-ui-ux-analy schemaVersion=1 -->
