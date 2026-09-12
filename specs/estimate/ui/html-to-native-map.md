# html-to-native-map — estimate (mobile)

**Sources:** dual `#sc-estimate` · DA controlHint · PO §5 · real-data §B · map skill `docs/html-to-native-map.md`  
**Delta:** **GAP-MOB-EDIT-01** · `.field > label` → native **labelHeader**  
**Cấm** WebView bọc HTML · invent `api/v1/estimate` / `ai-estimate` · ERP.* · bottom-sheet chrome · Kind B list · placeholder-only labels

| Demo | Zone | HTML / token | iOS kit | Android kit | Notes |
|------|------|--------------|---------|-------------|-------|
| DES-MOB-EST | Header | `.nav-bar` / `.top-bar` · `.nav-title` | `LinmTopBar` | same | title 17 / ~20 |
| DES-MOB-EST | Back | `.nav-btn` + `#i-chevron-left` · text «Công việc» (iOS) | leading | `icon-btn` chevron only | `go('mnt-list')` / pop parent |
| fromIncident | List | `.card-group` `.row` · row-sub/title | `LinmListRow` | same | label 13 · value ≥16 |
| assetType | List | `.row` | `LinmListRow` | same | Mặt đường |
| assignee | Field | `.field > label` + `#assignee` | `LinmTextField`+**labelHeader** | same | required · **EDIT-01** |
| qty | Field | `.field > label` + `#qty` · `inputmode=decimal` | +**labelHeader** | same | → `Lines[0].Qty` |
| unitPrice | Field | `.field > label` + `#unit-price` | +**labelHeader** | same | VND · → `Lines[0].UnitPrice` |
| totalAmount | Field | `.field > label` + `#total` readonly | +**labelHeader** | same | qty × price |
| slaHours | Field | `.field > label` + `#sla` readonly | +**labelHeader** | same | default 24 |
| dueAt | Field | `.field > label` + `#due` readonly | +**labelHeader** | same | datetime VN |
| btnAssign | CTA | `.btn-primary` · `#btn-assign` | `LinmPrimaryButton` | same | POST `maintenance/work-orders` |
| btnDraft | CTA | `.btn-secondary` · `#btn-draft` | `LinmSecondaryButton` | same | POST draft |
| Toast OK/Draft/Err | Banner | `#toast` | `LinmToast` | same | **cấm** alert · **cấm** fake CV |
| Banner missing | Warn | `.banner` · `#banner-missing` | Text / banner | same | `?missing=1` · chặn primary |
| Shell Tab 5 | Chrome | `.tabbar` / `.nav` · `data-tab=work` | `LinmTabBar` | NavigationBar | **giữ** · không invent |
| Entry mnt-list / incident | — | hub / CTA | navigate push | reuse | **không** reimplement trên pack |

## labelHeader map (HARD · GAP-MOB-EDIT-01)

| Demo | Native iOS | Native Android |
|------|------------|----------------|
| `<label>…</label>` 13 muted above input | `Text(label).font(13).foreground(muted)` above `LinmTextField` **hoặc** kit `labelAbove:` | same Compose `Text` above Outlined/Linm field **hoặc** `labelAbove` |
| Input value ≥16 | field value | same |
| **Cấm** | `LinmTextField(title:)` as sole label (placeholder disappears when valued) | Compose `placeholder` / `label` floating-only as sole affordance |

## CSS token (ý nghĩa — không clone px)

| CSS demo | Native |
|----------|--------|
| `--blue` / `#0C84C0` | brand primary tint |
| `--surface` `#F2F2F7` | page background |
| `.row-sub` 13 / `.row-title` 16 | Dynamic Type / M3 scale |
| `.field label` 13 / input ≥16 | **labelHeader** typography gate · AC-D-12 / AC-F-13 |
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
| labels always in DOM | labels always visible when valued |

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

**Cấm** invent `api/v1/estimate` · `ai-estimate/*` · `EstimateController` trên Mobile.Bff · ERP.*. Paths **unchanged** this edit (hash-skip).

## Version meta

| Field | Value |
|-------|-------|
| skillId | mobile-ui-ux-analy |
| generatedAt | 2026-09-01T14:35:44.000Z |
| contentHash | sha256:estimate-mobile-control-hint-20260901-edit01 |
| taskId | `task_18e9655b` |

---
<!-- Version meta: skillId=mobile-ui-ux-analy schemaVersion=2 taskId=task_18e9655b -->
