# Design — mnt-progress (mobile sheet → screen · Cập nhật trạng thái)

| Field | Value |
|-------|-------|
| feature | `mnt-progress` |
| title | [Mobile] [Công việc] -> Cập nhật trạng thái |
| role | `/agent-design-mobile` |
| status | **confirmed** (autoApprove=ON · `design_confirm`) |
| packKind | **`sheet`** (PO chốt · GAP-MOB-MNT-PROG-PACK-01 · surface = **full screen** `#sc-mnt-progress` · **cấm** bottom-sheet chrome) |
| changeScope | `new_page` |
| stack | `native_dual` |
| taskId | `task_be38de39` |
| priorPo | `po/requirement.md` **confirmed** · task `task_df7a4a8b` |
| priorDa | `_data-analy/mnt-progress-control-hint.md` + `mnt-progress-real-data.md` **confirmed** · hash skip · **cấm** re-scan (`GAP-DES-DEMO-RESCAN-01`) |
| contentHash | `sha256:mnt-progress-mobile-control-hint-20260829` |
| realDataHash | `sha256:mnt-progress-mobile-real-data-20260829` |
| actionTreeHash | `sha256:mnt-progress-mobile-action-tree-20260829` |
| bffContentHash | `sha256:mnt-progress-mobile-bff-20260829` |
| ctxContentHash | `sha256:7575cc93a9fc1e4c2ac0bdbdc219fdb28db7c6177f83457b747529646244ccec` |
| demoContentHash | `sha256:394ab44597648f04b25e6d58476378c16141feb53d3b58d39923b3defcff8328` |
| priorWeb | — (mobile-first · không design-web bắt buộc) |
| updatedAt | `2026-08-29T06:09:10.000Z` |

## reviewUrl (dual — REQUIRED)

| Platform | Path | reviewUrl |
|----------|------|-----------|
| iOS | `ui/prototype/ios/index.html` | `file:///Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Data/specs/mnt-progress/ui/prototype/ios/index.html` |
| iOS missing WO | same + `?missing=1` | `file:///Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Data/specs/mnt-progress/ui/prototype/ios/index.html?missing=1` |
| iOS GPS deny | same + `?deny=1` | `file:///Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Data/specs/mnt-progress/ui/prototype/ios/index.html?deny=1` |
| Android | `ui/prototype/android/index.html` | `file:///Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Data/specs/mnt-progress/ui/prototype/android/index.html` |
| Android missing WO | same + `?missing=1` | `file:///Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Data/specs/mnt-progress/ui/prototype/android/index.html?missing=1` |
| Android GPS deny | same + `?deny=1` | `file:///Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Data/specs/mnt-progress/ui/prototype/android/index.html?deny=1` |
| Workflow (ref) | mobile-p1 `#sc-mnt-list` `#i-sync` toast | cite only · hash skip · **cấm** re-scan |

**Cấm** `mfeStdUrl` / `yarn start:std` / port 9301 · **cấm** board path chỉ `index.html` (`GAP-MOB-DES-PFX-01`).

## Frame / chrome

| | iOS | Android |
|--|-----|---------|
| Frame | 390×844 | 412×915 |
| Back | `#i-chevron-left` + label **Công việc** | icon-btn chevron only (parity OK) |
| Title | inline **Cập nhật trạng thái** 17 | TopAppBar **Cập nhật trạng thái** ~20 |
| Shell | Tab 5 · tab **`work`** (Công việc) active | NavigationBar 5 · cùng index |
| pack tabs | **none** — **cấm** invent segment (`GAP-TAB-01`) | same |
| Surface | **full screen** `#sc-mnt-progress` — **cấm** bottom-sheet | same |

## DES table

| DES | Zone | iOS | Android | Notes |
|-----|------|-----|---------|-------|
| `DES-MOB-MNT-PROGRESS` | Screen owner `#sc-mnt-progress` | push từ mnt-list `#i-sync` | same | `data-tab="work"` · thay toast-only |
| Header WO | title · code · status | `LinmListRow` ×3 + badge | same | SSOT Vá mặt đường · CV-20260810-0001 · Chờ xử lý |
| ProgressPct | Tiến độ (%) | Number + Slider | same | 0–100 * → `ProgressPercent` |
| Note | Ghi chú | `LinmTextArea` | same | opt · + GPS text embed |
| Photo | Ảnh hiện trường | PhotoRow + `#i-camera` | same | P1 UX · MediaUrl body DEFER |
| GPS | Vị trí đã chốt | `LinmListRow` readonly | same | device · **cấm** fake · **cấm** map embed |
| Primary | Cập nhật | `LinmPrimaryButton` | same | POST progress · busy · @100 → complete |
| Toast OK / Err | banner | `LinmToast` | same | **cấm** system alert · **cấm** fake % |
| GPS deny | modal | `DES-MOB-GPS-DENY` | same | reuse · `?deny=1` |
| Leave dirty | modal | `DES-MOB-LEAVE` | same | reuse · **cấm** native alert |
| Banner missing | thiếu WO id | in-app banner | same | chặn Cập nhật · `?missing=1` |
| Shell Tab 5 | chrome | `LinmTabBar` | NavigationBar | **giữ** · work active |

## SF ↔ Material icon

| `#i-*` | Motif (SSOT kit / mobile-p1 cite) | SF Symbol | Material |
|--------|----------------------------------|-----------|----------|
| `#i-chevron-left` | `M15 5l-7 7 7 7` | `chevron.left` | `ArrowBack` |
| `#i-camera` | body + circle r=3.5 | `camera` | `PhotoCamera` |
| `#i-home` | house path | `house` | `Home` |
| `#i-mappin` | pin + circle r=2.2 | `mappin` | `Place` |
| `#i-warning` | triangle | `exclamationmark.triangle` | `Warning` |
| `#i-wrench` | wrench path | `wrench` | `Build` |
| `#i-person` | person | `person` | `Person` |

Entry parent `#i-sync` = mnt-list only — **không** reimplement trên pack. **Cấm** invent `#i-*` · **cấm** lệch `d=` dual (`GAP-MOB-ICON-*`).

## Copy VN (SSOT — parity dual)

| Key | Copy |
|-----|------|
| Title | **Cập nhật trạng thái** |
| Back (iOS) | **Công việc** |
| WO title label / value | **Công việc** / **Vá mặt đường** |
| WO code label / value | **Mã** / **CV-20260810-0001** |
| Status label / value | **Tình trạng hiện tại** / **Chờ xử lý** (`new`) |
| Status after progress | **Đang xử lý** (`in_progress`) |
| Status after complete | **Đã hoàn thành** (`done`) |
| Progress | **Tiến độ (%)** / `0`–`100` |
| Note | **Ghi chú** · placeholder **Mô tả tiến độ / ghi chú hiện trường…** |
| Photo section | **Ảnh hiện trường** |
| Location | **Vị trí đã chốt** / **QL.1 · Km 1556+080 · ±5 m** |
| Primary | **Cập nhật** |
| Toast OK | **Đã cập nhật tiến độ · {n}%** |
| Banner missing | **Thiếu công việc — chặn Cập nhật. Mở từ mnt-list `#i-sync`.** |
| GPS deny title / body | **Định vị bị tắt** / Cần vị trí… (reuse `DES-MOB-GPS-DENY`) |
| Leave | **Bỏ thay đổi?** / **Tiếp tục sửa** |
| Tabs | Trang Chủ · Tuần đường · Vấn đề · Công việc · Tôi |

**Cấm ship:** watermark Gói · device label «iPhone»/«· Android» · «Có mạng» · fake toast ok · map embed · bottom-sheet · badge P1/P2 header · gộp estimate/chat/log.

## Kit map

| Demo | Kit iOS+Android | Notes |
|------|-----------------|-------|
| `.nav-bar` / `.top-bar` | `LinmTopBar` | leading chevron · iOS back text «Công việc» |
| `.card-group` `.row` | `LinmListRow` | WO header · GPS · label 13 / value ≥16 |
| `.field` number/slider | `LinmTextField` number / slider kit | Tiến độ (%) |
| `.field` textarea | `LinmTextArea` | Ghi chú |
| `.photo-row` + `#i-camera` | PhotoRow · `LinmIconButton` | camera capture |
| `.btn-primary` | `LinmPrimaryButton` | Cập nhật |
| `#toast` | `LinmToast` | **cấm** UIAlert / AlertDialog |
| `#modal-gps` | kit `DES-MOB-GPS-DENY` | reuse |
| `#modal-leave` | kit `DES-MOB-LEAVE` | reuse |
| `.tabbar` / `.nav` | `LinmTabBar` | shell Tab 5 · work |

`kit_missing_confirm` = **N/A** — TopBar / ListRow / TextField / TextArea / PhotoRow / IconButton / Primary / Toast / GPS deny đã có dual kit (cite estimate · field-reflect).

## Control map (PO §5 · DA · real-data §B)

| Field | controlHint | Kit | Bind |
|-------|-------------|-----|------|
| screenTitle | TopBar title | `LinmTopBar` | — |
| navBack | BackButton | leading | `go('mnt-list')` |
| woTitle | ListRow readonly | `LinmListRow` | nav / GET `title` |
| woCode | Text readonly | `LinmListRow` | `code` |
| woStatus | Badge readonly | badge + row | status → VN mnt-list |
| progressPct | NumberField / Slider | `LinmTextField` | `ProgressPercent` * |
| note | MultilineText | `LinmTextArea` | `Note` (+ GPS text) |
| photoLabel | SectionLabel | label 13 | — |
| photos | PhotoRow | PhotoRow | device · **không** progress body P1 |
| addPhoto | CameraButton | `#i-camera` | device capture |
| locationRow | ListRow readonly | `LinmListRow` | device GPS · embed → Note |
| btnUpdate | PrimaryButton | `LinmPrimaryButton` | `POST …/{id}/progress` · @100 → `…/complete` |
| toastOk / toastErr | Toast | `LinmToast` | sau 200 / fail |
| gpsDeny | Modal | `DES-MOB-GPS-DENY` | deny |
| actProgress | IconButton (parent) | `#i-sync` | mnt-list entry only |

## UX / parity gates

| Artifact | Path | Status |
|----------|------|--------|
| ux-analy §1–§9 | `ui/ux-analy.md` | **done** |
| html-to-native-map | `ui/html-to-native-map.md` | **done** |
| demo-parity | `ui/review/demo-parity.md` | **PASS** · Must open **0** |
| dual prototype | `ui/prototype/{ios,android}/index.html` | **done** · `#sc-mnt-progress` |

## design_confirm

| Gate | Decision |
|------|----------|
| autoApprove | **ON** |
| design_confirm | **approve** (self-confirm · dual + ux-analy + demo-parity PASS) |
| at | `2026-08-29T06:09:10.000Z` |
| next | `sa-mobile` · `be/solution-discovery.md` · **không** chain this turn (roleOnly · GAP-PKT-ROLE-01) |

## Out of scope (Design)

- Reimplement `mnt-list` / estimate / mnt-chat / mnt-log
- Invent `api/v1/mnt-progress` / MediaUrl trên Progress DTO / lat-lng API field
- Map embed · bottom-sheet chrome · ERP.* · `mfeStdUrl`
- Re-scan demo HTML (`GAP-DES-DEMO-RESCAN-01`)
- Dev / SA / QA / e2e / Step 4b / migration

## Version meta (REQUIRED)

| Field | Value |
|-------|-------|
| skillId | agent-design-mobile |
| skillVersion | 2026.08.25.01 |
| schemaVersion | 2 |
| workflowVersion | 2026.08.25.01 |
| rulesVersion | 2026.08.25.2 |
| generatedAt | 2026-08-29T06:09:10.000Z |
| versionGate | rechecked |
| contentHash | sha256:mnt-progress-mobile-control-hint-20260829 |
| realDataContentHash | sha256:mnt-progress-mobile-real-data-20260829 |
| demoContentHash | sha256:394ab44597648f04b25e6d58476378c16141feb53d3b58d39923b3defcff8328 |
| taskId | `task_be38de39` |

---
<!-- Version meta: skillId=agent-design-mobile skillVersion=2026.08.25.01 schemaVersion=2 workflowVersion=2026.08.25.01 rulesVersion=2026.08.25.2 versionGate=rechecked -->
