# UX analy — ops (mobile list · Thông báo)

**Sources:** prototype/ios · prototype/android · ui/design-mobile.md · mobile-p1 `#sc-ops`  
**Brand tokens:** primary `#0C84C0` · surface `#F2F2F7` · badge info `#0C84C0` · neutral `#8E8E93` / `#79747E`

## 1. IA

```
Login → Tab 5
  me #sc-me (tab Tôi)
    → row Thông báo (row-ops) → push #sc-ops DES-MOB-OPS   ← this pack
  home #sc-home (tab Trang Chủ)
    → LinmNotifyButton (hero-tools / btn-notify) → push #sc-ops (cùng slug)
#sc-ops
  → back pop → me hoặc home (theo stack)
  → tap unread → POST mark-read · toast «Đã đọc chỉ đạo»
  → tap read → no-op
  → không child form / sheet
  → tabs: none trên ops (shell tab Tôi = entry only)
```

**Cấm** invent tab. Ops **không** thêm tab — stack push dưới tab Me hoặc Home.

## 2. Màn

| DES / sc-* | Tên VN | iOS chrome | Android chrome | CTA |
|------------|--------|------------|----------------|-----|
| DES-MOB-OPS `#sc-ops` | Thông báo | nav solid · back «Tôi» | top-bar · icon back | list + badge |
| entry Me | Thông báo | list row + bell icon | list row + badge | push ops |
| entry Home | Thông báo | hero notify button | hero notify button | push ops |

## 3. Zone

### DES-MOB-OPS

| Zone | Demo (user thấy) | Map row (`docs/html-to-native-map.md`) | SwiftUI | Compose |
|------|------------------|----------------------------------------|---------|---------|
| Nav | Back Tôi · title **Thông báo** | top bar / `.nav-bar` · `.top-bar` | `LinmTopBar` | `LinmTopBar` |
| Row 1 | Ưu tiên SC-2401 · Hạt trưởng · 08:12 · Mới | A `.card-group` / `.row` | `LinmListRow` + `LinmBadge` info | same |
| Row 2 | Ca PAT-…0014… · Hệ thống · 07:50 · Đã đọc | A `.row` | `LinmListRow` + `LinmBadge` neutral | same |
| Feedback | toast «Đã đọc chỉ đạo» | toast | `LinmToast` | `LinmToast` |

**States:**

| State | Hành vi |
|-------|---------|
| default | GET inbox · bind live rows · **cấm** demo fallback |
| loading | refresh nhẹ · **cấm** full-screen block list |
| error / offline | empty list + toast `ops.toast.loadFail` · **cấm** demo SSOT · **cấm** block Me/Home |
| empty live | EmptyChrome `ops.empty.*` · id `ops-empty` |
| permission | GPS/camera **N/A** trên ops |
| leave dirty | **N/A** (không form) |

## 4. Copy SSOT

Thông báo · Tôi · Ưu tiên SC-2401 · Hạt trưởng · 08:12 · Mới · Ca PAT-…0014 độ phủ 67% · Hệ thống · 07:50 · Đã đọc · Đã đọc chỉ đạo

**Cấm trên máy:** «Có mạng» · «Hiện trường · iPhone» · «· Android» title · «Phiên bản Gói N» / foot Gói · device label · proto tap-cycle tín hiệu · «gen realapp».

## 5. Brand

Primary `#0C84C0` · surface `#F2F2F7` · badge info `#0C84C0` · neutral gray.  
**Cấm** skin đỏ CCCD · **cấm** M3 tím tab (ops không tab).

## 6. Signal

**N/A** trên `#sc-ops` — không capsule tín hiệu (owner `home`/`me`).

## 7. Pictogram

| Control | Motif demo | SF Symbol | Material |
|---------|------------|-----------|----------|
| Back | chevron | `chevron.left` | `ArrowBack` |
| Me entry | bell | `bell` | `Notifications` |
| Home entry | bell | `bell` | `Notifications` |

List rows: **no-icon** (`.row no-icon` / `.row` without leading icon).

## 8. Motion

Push/pop nav standard · không `/wf-anim` trên list `ops`.

## 9. GAP

| ID | Demo vs native | Quyết định |
|----|----------------|------------|
| GAP-MOB-OPS-DEMO-01 | Android 1 row vs iOS 2 | **closed** — dual 2 rows same copy |
| GAP-MOB-OPS-NAV-01 | Entry Me/Home → push | **closed** — nav push `#sc-ops` |
| GAP-MOB-OPS-LIST-01 | List kit | reuse `LinmListRow` · **cấm** raw List |
| GAP-MOB-OPS-READ-01 | mark-read tap | POST + toast **Đã đọc chỉ đạo** |
| GAP-MOB-ACT-01 | 1 action | List only · **cấm** gộp form |
| GAP-MOB-ACT-02 | child form | **none** on `#sc-ops` |
| GAP-MOB-ACT-05 | Kit đã map | reuse · **cấm** raw row chrome |
| GAP-MOB-ACT-07 | mark-read | action on list · **không** enqueue |
| GAP-MOB-ALIGN-01 | Dual chrome | Cùng copy + title + 2 rows + toast |
| GAP-MOB-UX-07 | design ↔ HTML | Pack proto khớp design-mobile.md |
| GAP-MOB-DES-PFX-01 | Board prefix | `ios/index.html` · `android/index.html` |
| GAP-QA-OPS-IOS-01 | Maestro iOS nav | **non-block** · fix = Dev/QA follow-up |

## Version meta (REQUIRED)

| Field | Value |
|-------|-------|
| skillId | mobile-ui-ux-analy |
| skillVersion | 2026.08.19.07 |
| schemaVersion | 1 |
| workflowVersion | 2026.08.19.27 |
| rulesVersion | 2026.08.19.32 |
| generatedAt | 2026-08-19T12:40:00.000Z |
| versionGate | rechecked |
| contentHash | sha256:ops-mobile-edit-list-20260819 |

---
<!-- Version meta: skillId=mobile-ui-ux-analy skillVersion=2026.08.19.07 schemaVersion=1 workflowVersion=2026.08.19.27 rulesVersion=2026.08.19.32 versionGate=rechecked -->
