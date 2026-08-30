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
| taskId | `task_c0fb308d` |
| priorPo | `po/requirement.md` **confirmed** · task `task_5338c2be` |
| priorDa | `_data-analy/estimate-control-hint.md` + `estimate-real-data.md` **confirmed** · hash skip · **cấm** re-scan (`GAP-DES-DEMO-RESCAN-01`) |
| contentHash | `sha256:estimate-mobile-control-hint-20260829` |
| realDataHash | `sha256:estimate-mobile-real-data-20260829` |
| actionTreeHash | `sha256:estimate-mobile-action-tree-20260829` |
| ctxContentHash | `sha256:58cb5c3279c3df7360e1f3f29adccc79fada11ce219853dfce035217e25b7f3d` |
| demoContentHash | `sha256:394ab44597648f04b25e6d58476378c16141feb53d3b58d39923b3defcff8328` |
| priorWeb | **giữ** · `ui/design-web.md` (Kind B+D · **OUT** mobile P1) |
| updatedAt | `2026-08-29T04:26:00.000Z` |

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
| Header card | Từ sự cố · Loại tài sản | `LinmListRow` ×2 readonly | same | SSOT SC-2401 · Mặt đường |
| Assignee | Giao cho * | `LinmTextField` | same | free text P1 · required |
| Qty | Khối lượng | NumberField · decimal | same | → `Lines[0].Qty` |
| UnitPrice | Đơn giá | MoneyField · VND | same | → `Lines[0].UnitPrice` |
| Total | Thành tiền | TextField readonly | same | qty × unitPrice |
| SlaHours | Thời hạn xử lý (giờ) | TextField readonly | same | default **24** |
| DueAt | Hạn xử lý | TextField readonly | same | now + slaHours |
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

**Cấm ship:** watermark Gói · device label «iPhone»/«· Android» · «Có mạng» · fake CV khi fail · Kind B list · multi-line grid · bottom-sheet · badge P1/P2 header.

## Kit map

| Demo | Kit iOS+Android | Notes |
|------|-----------------|-------|
| `.nav-bar` / `.top-bar` | `LinmTopBar` | leading chevron · iOS back text «Công việc» |
| `.card-group` `.row` | `LinmListRow` | Từ sự cố · Loại tài sản · label 13 / value ≥16 |
| `.field` input | `LinmTextField` | text / number / money / readonly |
| `.btn-primary` | `LinmPrimaryButton` | Giao việc |
| `.btn-secondary` | `LinmSecondaryButton` | Lưu nháp |
| `#toast` | `LinmToast` | **cấm** UIAlert / AlertDialog |
| `.tabbar` / `.nav` | `LinmTabBar` | shell Tab 5 · work |

`kit_missing_confirm` = **N/A** — TopBar / ListRow / TextField / Primary / Secondary / Toast đã có dual kit.

## Control map (PO §5 · DA · real-data §B)

| Field | controlHint | Kit | Bind |
|-------|-------------|-----|------|
| screenTitle | TopBar title | `LinmTopBar` | — |
| navBack | BackButton | leading | `go('mnt-list')` / pop parent |
| fromIncident | ListRow readonly | `LinmListRow` | GET incident / nav |
| assetType | ListRow readonly | `LinmListRow` | incident / asset label |
| assignee | TextField * | `LinmTextField` | `AssigneeName` · opt `TeamName` |
| qty | NumberField | `LinmTextField` | `Lines[0].Qty` |
| unitPrice | MoneyField | `LinmTextField` | `Lines[0].UnitPrice` |
| totalAmount | TextField readonly | `LinmTextField` | derived / `TotalAmount` |
| slaHours | TextField readonly | `LinmTextField` | `SlaHours` = 24 |
| dueAt | TextField readonly | `LinmTextField` | `DueAt` |
| btnAssign | PrimaryButton | `LinmPrimaryButton` | `POST maintenance/work-orders` |
| btnDraft | SecondaryButton | `LinmSecondaryButton` | `POST …/draft` |

## UX / parity gates

| Artifact | Path | Status |
|----------|------|--------|
| ux-analy §1–§9 | `ui/ux-analy.md` | **done** |
| html-to-native-map | `ui/html-to-native-map.md` | **done** |
| demo-parity | `ui/review/demo-parity.md` | **PASS** · Must open **0** |
| dual prototype | `ui/prototype/{ios,android}/index.html` | **done** · `#sc-estimate` |

## design_confirm

| Gate | Decision |
|------|----------|
| autoApprove | **ON** |
| design_confirm | **approve** (self-confirm · dual + ux-analy + demo-parity PASS) |
| at | `2026-08-29T04:26:00.000Z` |
| next | `sa-mobile` · `be/solution-discovery.md` · **không** chain this turn (roleOnly) |

## Out of scope (Design)

- Web Kind B list + Kind D multi-line (`design-web.md` **giữ**)
- Staff lookup picker · SLA policy API · offline draft queue
- Invent `api/v1/estimate` / `ai-estimate` · ERP.* · `mfeStdUrl`
- Re-scan demo HTML (`GAP-DES-DEMO-RESCAN-01`)
- Dev / e2e / yarn build / start:std

## Version meta (REQUIRED)

| Field | Value |
|-------|-------|
| skillId | agent-design-mobile |
| skillVersion | 2026.08.25.01 |
| schemaVersion | 2 |
| workflowVersion | 2026.08.25.01 |
| rulesVersion | 2026.08.25.2 |
| generatedAt | 2026-08-29T04:26:00.000Z |
| versionGate | ok |
| contentHash | sha256:estimate-mobile-control-hint-20260829 |
| realDataContentHash | sha256:estimate-mobile-real-data-20260829 |
| ctxContentHash | sha256:58cb5c3279c3df7360e1f3f29adccc79fada11ce219853dfce035217e25b7f3d |
| demoContentHash | sha256:394ab44597648f04b25e6d58476378c16141feb53d3b58d39923b3defcff8328 |
| taskId | `task_c0fb308d` |

---
<!-- Version meta: skillId=agent-design-mobile skillVersion=2026.08.25.01 schemaVersion=2 workflowVersion=2026.08.25.01 rulesVersion=2026.08.25.2 versionGate=ok -->
