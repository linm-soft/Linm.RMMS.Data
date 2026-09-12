# Design — estimate (mobile sheet → screen · Giao việc xử lý)

| Field | Value |
|-------|-------|
| feature | `estimate` |
| title | [Mobile] [Công việc] -> Giao việc xử lý |
| role | `/agent-design-mobile` |
| status | **confirmed** (autoApprove=ON · `design_confirm`) |
| packKind | **`sheet`** (PO chốt · GAP-MOB-EST-PACK-01 · surface = **full screen** `#sc-estimate` · **cấm** bottom-sheet chrome) |
| changeScope | `edit_page` |
| stack | `native_dual` |
| taskId | `task_18e9655b` |
| priorPo | `po/requirement.md` **confirmed** · task `task_eadacecf` · GAP-MOB-EDIT-01 |
| priorDa | `_data-analy/estimate-control-hint.md` + `estimate-real-data.md` **confirmed** · hash skip · **cấm** re-scan (`GAP-DES-DEMO-RESCAN-01`) |
| contentHash | `sha256:estimate-mobile-control-hint-20260901-edit01` |
| realDataHash | `sha256:estimate-mobile-real-data-20260901-edit01` |
| actionTreeHash | `sha256:estimate-mobile-action-tree-20260829` |
| bffContentHash | `sha256:estimate-mobile-bff-20260829` |
| ctxContentHash | `sha256:b67ee5a9cc9b69577496bf04aef9446d483410141ca6c27b98f792841ddb5ece` |
| demoContentHash | `sha256:394ab44597648f04b25e6d58476378c16141feb53d3b58d39923b3defcff8328` |
| priorWeb | **giữ** · `ui/design-web.md` (Kind B+D · **OUT** mobile P1) |
| priorDesign | **giữ** history `task_c0fb308d` · delta this turn = **GAP-MOB-EDIT-01** labelHeader |
| updatedAt | `2026-09-01T14:35:44.000Z` |

## § Delta Current vs New (`edit_page` · GAP-MOB-EDIT-01)

| ID | Current (native Review-approved) | New (Design lock) | Surface |
|----|----------------------------------|-------------------|---------|
| **GAP-MOB-EDIT-01** | `LinmTextField(title)` = placeholder-only · mất khi có value | **labelHeader** 13pt muted **above** mọi form input · luôn visible khi có value | 6 fields |
| assignee · qty · unitPrice · total · sla · due | title-as-placeholder | `.field > label` SSOT · native = external `Text`/`label` **hoặc** kit `labelAbove` | dual |

**Demo SSOT** dual proto **đã** có `.field > label` trên 6 field — **không** đổi copy/zones/API/BFF. Dev: **cấm** placeholder-only.

## reviewUrl (dual — REQUIRED)

| Platform | Path | reviewUrl |
|----------|------|-----------|
| iOS | `ui/prototype/ios/index.html` | `file:///Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Data/specs/estimate/ui/prototype/ios/index.html` |
| iOS missing SC | same + `?missing=1` | `file:///Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Data/specs/estimate/ui/prototype/ios/index.html?missing=1` |
| Android | `ui/prototype/android/index.html` | `file:///Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Data/specs/estimate/ui/prototype/android/index.html` |
| Android missing SC | same + `?missing=1` | `file:///Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Data/specs/estimate/ui/prototype/android/index.html?missing=1` |
| Workflow (ref) | mobile-p1 `#sc-estimate` | cite only · hash skip · **cấm** re-scan |

**Cấm** `mfeStdUrl` / `yarn start:std` / port 9301 · **cấm** board path chỉ `index.html` (`GAP-MOB-DES-PFX-01`).

## Frame / chrome

| | iOS | Android |
|--|-----|---------|
| Frame | 390×844 | 412×915 |
| Back | `#i-chevron-left` + label **Công việc** | icon-btn chevron only (parity OK) |
| Title | inline **Giao việc xử lý** 17 | TopAppBar **Giao việc xử lý** ~20 |
| Shell | Tab 5 · tab **`work`** (Công việc) active | NavigationBar 5 · cùng index |
| pack tabs | **none** — **cấm** invent segment (`GAP-TAB-01`) | same |
| Surface | **full screen** `#sc-estimate` — **cấm** bottom-sheet | same |

## DES table

| DES | Zone | iOS | Android | Notes |
|-----|------|-----|---------|-------|
| `DES-MOB-EST` | Screen owner `#sc-estimate` | push từ mnt-list / incident CTA | same | `data-tab="work"` |
| Header card | Từ sự cố · Loại tài sản | `LinmListRow` ×2 readonly | same | subtitle-as-label OK |
| Assignee | Giao cho * | `LinmTextField` + **labelHeader** | same | **GAP-MOB-EDIT-01** · required |
| Qty | Khối lượng | NumberField + **labelHeader** | same | → `Lines[0].Qty` |
| UnitPrice | Đơn giá | MoneyField + **labelHeader** | same | → `Lines[0].UnitPrice` |
| Total | Thành tiền | TextField readonly + **labelHeader** | same | qty × unitPrice |
| SlaHours | Thời hạn xử lý (giờ) | TextField readonly + **labelHeader** | same | default **24** |
| DueAt | Hạn xử lý | TextField readonly + **labelHeader** | same | now + slaHours |
| Primary | Giao việc | `LinmPrimaryButton` | same | POST WO (+ assign) · busy |
| Secondary | Lưu nháp | `LinmSecondaryButton` | same | POST draft |
| Toast OK / Draft / Err | banner | `LinmToast` | same | **cấm** system alert · **cấm** fake CV |
| Banner missing | thiếu incidentId | in-app banner | same | chặn Giao việc · `?missing=1` |
| Shell Tab 5 | chrome | `LinmTabBar` | NavigationBar | **giữ** · work active |

## SF ↔ Material icon

| `#i-*` | Motif (SSOT mobile-p1) | SF Symbol | Material |
|--------|------------------------|-----------|----------|
| `#i-chevron-left` | `M15 5l-7 7 7 7` | `chevron.left` | `ArrowBack` |
| `#i-home` | house path | `house` | `Home` |
| `#i-mappin` | pin + circle r=2.2 | kit / `mappin` | `Place` |
| `#i-warning` | triangle | `exclamationmark.triangle` | `Warning` |
| `#i-wrench` | wrench path | `wrench` | `Build` |
| `#i-person` | person | `person` | `Person` |

**Cấm** invent `#i-*` · **cấm** lệch `d=` dual (`GAP-MOB-ICON-*`).

## Copy VN (SSOT — parity dual)

| Key | Copy |
|-----|------|
| Title | **Giao việc xử lý** |
| Back (iOS) | **Công việc** |
| From incident label / value | **Từ sự cố** / **SC-2401 · Ổ gà · QL.1 Km 1556+040** |
| Asset type label / value | **Loại tài sản** / **Mặt đường** |
| Assignee | **Giao cho *** / **Nguyễn Văn A · Tổ tuần đường** |
| Qty | **Khối lượng** / **12.5** |
| Unit price | **Đơn giá** / **850.000** |
| Total | **Thành tiền** / **10.625.000** |
| SLA | **Thời hạn xử lý (giờ)** / **24** |
| Due | **Hạn xử lý** / **19/08/2026 08:00** |
| Primary | **Giao việc** |
| Secondary | **Lưu nháp** |
| Toast OK | **Đã giao việc · CV-20260818-0003 · thời hạn 24 giờ** |
| Toast draft | **Đã lưu nháp ước lượng** |
| Banner missing | **Thiếu sự cố — chặn Giao việc. Mở từ mnt-list / incident.** |
| Tabs | Trang Chủ · Tuần đường · Vấn đề · Công việc · Tôi |

**Cấm ship:** watermark Gói · device label «iPhone»/«· Android» · «Có mạng» · fake CV khi fail · Kind B list · multi-line grid · bottom-sheet · badge P1/P2 header · placeholder-only label (**GAP-MOB-EDIT-01**).

## Kit map

| Demo | Kit iOS+Android | Notes |
|------|-----------------|-------|
| `.nav-bar` / `.top-bar` | `LinmTopBar` | leading chevron · iOS back text «Công việc» |
| `.card-group` `.row` | `LinmListRow` | Từ sự cố · Loại tài sản · label 13 / value ≥16 |
| `.field > label` + input | `LinmTextField` + **labelHeader** | HARD · external label / `labelAbove` · **cấm** title-as-placeholder only |
| `.btn-primary` | `LinmPrimaryButton` | Giao việc |
| `.btn-secondary` | `LinmSecondaryButton` | Lưu nháp |
| `#toast` | `LinmToast` | **cấm** UIAlert / AlertDialog |
| `.tabbar` / `.nav` | `LinmTabBar` | shell Tab 5 · work |

`kit_missing_confirm` = **N/A** — TopBar / ListRow / TextField / Primary / Secondary / Toast đã có dual kit. labelHeader = kit API `labelAbove` **hoặc** local `VStack { Text(label); field }` · Dev lock.

## Control map (PO §5 · DA · real-data §B)

| Field | controlHint | Kit | Bind |
|-------|-------------|-----|------|
| screenTitle | TopBar title | `LinmTopBar` | — |
| navBack | BackButton | leading | `go('mnt-list')` / pop parent |
| fromIncident | ListRow readonly | `LinmListRow` | GET incident / nav |
| assetType | ListRow readonly | `LinmListRow` | incident / asset label |
| assignee | TextField * + **labelHeader** | `LinmTextField`+header | `AssigneeName` · opt `TeamName` |
| qty | NumberField + **labelHeader** | `LinmTextField`+header | `Lines[0].Qty` |
| unitPrice | MoneyField + **labelHeader** | `LinmTextField`+header | `Lines[0].UnitPrice` |
| totalAmount | TextField readonly + **labelHeader** | `LinmTextField`+header | derived / `TotalAmount` |
| slaHours | TextField readonly + **labelHeader** | `LinmTextField`+header | `SlaHours` = 24 |
| dueAt | TextField readonly + **labelHeader** | `LinmTextField`+header | `DueAt` |
| btnAssign | PrimaryButton | `LinmPrimaryButton` | `POST maintenance/work-orders` |
| btnDraft | SecondaryButton | `LinmSecondaryButton` | `POST …/draft` |

**labelHeader (HARD):** Text/`label` **13pt** muted **above** control · luôn visible khi có value · **cấm** chỉ dựa placeholder/floating mất sau focus · AC-F-13 · DoD 16.

## UX / parity gates

| Artifact | Path | Status |
|----------|------|--------|
| ux-analy §1–§9 | `ui/ux-analy.md` | **done** · GAP-MOB-EDIT-01 |
| html-to-native-map | `ui/html-to-native-map.md` | **done** · labelHeader |
| demo-parity | `ui/review/demo-parity.md` | **PASS** · Must open **0** · labelHeader dual |
| dual prototype | `ui/prototype/{ios,android}/index.html` | **done** · `#sc-estimate` · `.field > label` ×6 |

## design_confirm

| Gate | Decision |
|------|----------|
| autoApprove | **ON** |
| design_confirm | **approve** (self-confirm · dual labelHeader + ux-analy + demo-parity PASS) |
| at | `2026-09-01T14:35:44.000Z` |
| next | `sa-mobile` · `be/solution-discovery.md` · paths likely skip · **không** chain this turn (roleOnly) |

## Out of scope (Design)

- Web Kind B list + Kind D multi-line (`design-web.md` **giữ**)
- Staff lookup picker · SLA policy API · offline draft queue
- Invent `api/v1/estimate` / `ai-estimate` · ERP.* · `mfeStdUrl`
- Re-scan demo HTML (`GAP-DES-DEMO-RESCAN-01`)
- Dev / e2e / yarn build / start:std · Step 4b

## Version meta (REQUIRED)

| Field | Value |
|-------|-------|
| skillId | agent-design-mobile |
| skillVersion | 2026.08.25.01 |
| schemaVersion | 2 |
| workflowVersion | 2026.08.29.1 |
| rulesVersion | 2026.08.29.5 |
| generatedAt | 2026-09-01T14:35:44.000Z |
| versionGate | rechecked |
| contentHash | sha256:estimate-mobile-control-hint-20260901-edit01 |
| realDataContentHash | sha256:estimate-mobile-real-data-20260901-edit01 |
| ctxContentHash | sha256:b67ee5a9cc9b69577496bf04aef9446d483410141ca6c27b98f792841ddb5ece |
| demoContentHash | sha256:394ab44597648f04b25e6d58476378c16141feb53d3b58d39923b3defcff8328 |
| taskId | `task_18e9655b` |

---
<!-- Version meta: skillId=agent-design-mobile skillVersion=2026.08.25.01 schemaVersion=2 workflowVersion=2026.08.29.1 rulesVersion=2026.08.29.5 versionGate=rechecked taskId=task_18e9655b -->
