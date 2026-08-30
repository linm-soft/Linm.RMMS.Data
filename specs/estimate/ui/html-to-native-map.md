# html-to-native-map — estimate (mobile)

**Sources:** dual `#sc-estimate` · DA controlHint · PO §5 · real-data §B · map skill `docs/html-to-native-map.md`  
**Cấm** WebView bọc HTML · invent `api/v1/estimate` / `ai-estimate` · ERP.* · bottom-sheet chrome · Kind B list

| Demo | Zone | HTML / token | iOS kit | Android kit | Notes |
|------|------|--------------|---------|-------------|-------|
| DES-MOB-EST | Header | `.nav-bar` / `.top-bar` · `.nav-title` | `LinmTopBar` | same | title 17 / ~20 |
| DES-MOB-EST | Back | `.nav-btn` + `#i-chevron-left` · text «Công việc» (iOS) | leading | `icon-btn` chevron only | `go('mnt-list')` / pop parent |
| fromIncident | List | `.card-group` `.row` · row-sub/title | `LinmListRow` | same | label 13 · value ≥16 |
| assetType | List | `.row` | `LinmListRow` | same | Mặt đường |
| assignee | Field | `.field` · `#assignee` | `LinmTextField` | same | required free text |
| qty | Field | `.field` · `#qty` · `inputmode=decimal` | `LinmTextField` | same | → `Lines[0].Qty` |
| unitPrice | Field | `.field` · `#unit-price` | `LinmTextField` | same | VND · → `Lines[0].UnitPrice` |
| totalAmount | Field | `.field` · `#total` readonly | `LinmTextField` | same | qty × price |
| slaHours | Field | `.field` · `#sla` readonly | `LinmTextField` | same | default 24 |
| dueAt | Field | `.field` · `#due` readonly | `LinmTextField` | same | datetime VN |
| btnAssign | CTA | `.btn-primary` · `#btn-assign` | `LinmPrimaryButton` | same | POST `maintenance/work-orders` |
| btnDraft | CTA | `.btn-secondary` · `#btn-draft` | `LinmSecondaryButton` | same | POST draft |
| Toast OK/Draft/Err | Banner | `#toast` | `LinmToast` | same | **cấm** alert · **cấm** fake CV |
| Banner missing | Warn | `.banner` · `#banner-missing` | Text / banner | same | `?missing=1` · chặn primary |
| Shell Tab 5 | Chrome | `.tabbar` / `.nav` · `data-tab=work` | `LinmTabBar` | NavigationBar | **giữ** · không invent |
| Entry mnt-list / incident | — | hub / CTA | navigate push | reuse | **không** reimplement trên pack |

## CSS token (ý nghĩa — không clone px)

| CSS demo | Native |
|----------|--------|
| `--blue` / `#0C84C0` | brand primary tint |
| `--surface` `#F2F2F7` | page background |
| `.row-sub` 13 / `.row-title` 16 | Dynamic Type / M3 scale |
| `.field label` 13 / input ≥16 | typography gate |
| `.btn` 16 | CTA |
| padding 8–16 rhythm | HIG 8pt · M3 4dp grid |
| iOS radius 12 / Android 16–28 | platform chrome OK |

## JS hành vi → native

| Demo JS | Native |
|---------|--------|
| `onAssign` → toast CV-20260818-0003 | UseCase CreateWorkOrder (+ opt assign) → `LinmToast` · **cấm** fake code on fail |
| `onDraft` → toast nháp | POST draft → toast **Đã lưu nháp ước lượng** |
| qty/price `input` → recalc total | local derived · write `Lines[0]` |
| empty assignee → disable primary | validation · toast |
| `?missing=1` banner + disable | thiếu incidentId · chặn Giao việc |
| `goBack` | pop `NavigationStack` / `NavController` → mnt-list / parent |
| seed appear | `POST …/from-incident/{id}` / GET estimate · fail → SSOT fallback |

## BFF bind (Design note · SA chi tiết)

| Zone | Method · Path |
|------|----------------|
| Prefill header SC | `GET incident/incidents/{id}` (opt nếu nav đủ) |
| Seed | `POST ai-vision/estimates/from-incident/{incidentId}` |
| Resume | `GET ai-vision/estimates/{id}` |
| Update lines | `PUT ai-vision/estimates/{id}` · `Lines[0]` |
| Lưu nháp | `POST ai-vision/estimates/{id}/draft` |
| Giao việc | `POST maintenance/work-orders` |
| Assign sync | `POST incident/incidents/{id}/assign` |
| Init (opt) | `GET ai-vision/estimates/init-data` · `GET maintenance/work-orders/init-data` |
| Total / SLA / Due | local derived |

**Cấm** invent `api/v1/estimate` · `ai-estimate/*` · `EstimateController` trên Mobile.Bff · ERP.*.

## Version meta

| Field | Value |
|-------|-------|
| skillId | mobile-ui-ux-analy |
| generatedAt | 2026-08-29T04:26:00.000Z |
| contentHash | sha256:estimate-mobile-control-hint-20260829 |
| taskId | `task_c0fb308d` |

---
<!-- Version meta: skillId=mobile-ui-ux-analy schemaVersion=2 -->
