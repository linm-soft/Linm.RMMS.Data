# Design — ops (mobile list · Thông báo)

| Field | Value |
|-------|-------|
| feature | `ops` |
| title | [Design] [Mobile] Thông báo |
| this role | `design` · `/agent-design-mobile` |
| desId | `DES-MOB-OPS` |
| status | `confirmed` (autoApprove=ON) |
| design_confirm | **approve** (`task_7e65792d`) |
| packKind | **`list`** (PO confirm) |
| changeScope | `edit_page` |
| kit_missing_confirm | **N/A** — reuse list kit dual (`LinmTopBar` · `LinmListRow` · `LinmBadge` · `LinmToast` · entry `LinmNotifyButton`) |
| reviewUrlIos | `file:///Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Data/specs/ops/ui/prototype/ios/index.html#sc-ops` |
| reviewUrlAndroid | `file:///Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Data/specs/ops/ui/prototype/android/index.html#sc-ops` |
| ux-analy | `ui/ux-analy.md` §1–§9 |
| demo-parity | `ui/review/demo-parity.md` |
| updatedAt | `2026-08-19T12:40:00.000Z` |
| taskId | `task_7e65792d` |

## 0. Context & Demo

| ID | Path |
|----|------|
| CTX | `docs/context/features/ops.md` |
| DEM-P1 | `specs/mobile-p1/ui/prototype/{ios,android}/index.html` `#sc-ops` |
| DEM | `specs/ops/ui/prototype/{ios,android}/index.html` |
| MAP | `docs/html-to-native-map.md` + `ui/html-to-native-map.md` |
| DA | `_data-analy/ops-control-hint.md` · `ops-bff-endpoints.md` · `ops-action-tree.md` · `ops-real-data.md` |
| PO | `po/requirement-mobile.md` |

**Cấm** `mfeStdUrl` / `yarn start:std`.

## 1. Pattern

| Surface | Push từ `me` (`row-ops`) hoặc `home` (`LinmNotifyButton`) · **không** Modal/Sheet · **không** tab riêng |
| Action this slug | GET inbox · tap unread mark-read · back pop |
| Frame | iOS 390×844 · Android 412×915 |
| BFF | `GET notification/inbox` · `POST notification/inbox/{id}/mark-read` · **cấm** invent `api/v1/ops` |

## 2. Screens / DES-MOB-*

| DES / sc-* | Tên VN | CTA / hành vi |
|------------|--------|---------------|
| `DES-MOB-OPS` `#sc-ops` | Thông báo | nav · live inbox rows · EmptyChrome khi empty · badge Mới/Đã đọc · tap unread → toast |

### IA lock

```
Tab 5 (shell)
  me #sc-me
    → row Thông báo (row-ops) → push #sc-ops DES-MOB-OPS   ← this pack
    → back «Tôi» = pop me
  home #sc-home
    → LinmNotifyButton (hero-tools / btn-notify) → push #sc-ops (cùng slug)
    → back pop home
#sc-ops
  → tap unread row → POST mark-read · toast «Đã đọc chỉ đạo» · badge → Đã đọc
  → tap read row → no-op
  → không child form / sheet (GAP-MOB-ACT-02 = none)
  → tabs: none trên ops
```

**Cấm** invent tab · watermark Gói · device label «iPhone»/«Android» · form create trên list · filter bar · Command badge.

## 3. Field inventory (kit dual)

| Field | VN | Kit dual | SF ↔ Material | Notes |
|-------|----|----------|---------------|-------|
| navBack | Tôi | `LinmTopBar` leading | `chevron.left` ↔ `ArrowBack` | `go('me')` / pop home · `#i-chevron-left` · a11y `nav-back` |
| title | Thông báo | `LinmTopBar` title | — | fixed · dual same |
| row1Title | Ưu tiên SC-2401 | `LinmListRow` title | — | DTO `title` · demo row 1 |
| row1Sub | Hạt trưởng · 08:12 | `LinmListRow` subtitle | — | `sender · HH:mm` |
| row1Badge | Mới | `LinmBadge` info | — | `isUnread=true` |
| row2Title | Ca PAT-…0014 độ phủ 67% | `LinmListRow` title | — | demo row 2 |
| row2Sub | Hệ thống · 07:50 | `LinmListRow` subtitle | — | |
| row2Badge | Đã đọc | `LinmBadge` neutral | — | `isUnread=false` |
| rowTap | — | `LinmListRow` onTap | — | mark-read nếu unread · a11y `row-ops-{id}` |
| toastRead | Đã đọc chỉ đạo | `LinmToast` | — | tap unread OK |
| entryMe | Thông báo | `LinmListRow` Me | `bell` ↔ `Notifications` | `row-ops` · reuse parent |
| entryHome | Thông báo | `LinmNotifyButton` | `bell` ↔ `Notifications` | `reuse=home` · `hero-tools` / `btn-notify` |

Toast / banner → `LinmToast`. **Cấm** raw `List`/`LazyColumn` row chrome · **cấm** M3 `Badge` · **cấm** native alert.

## 4. Brand

| Token | Hex | Dùng |
|-------|-----|------|
| Primary | `#0C84C0` | badge Mới (info) · Me row icon |
| Surface | `#F2F2F7` | nền list |
| Badge info | `#0C84C0` tint | «Mới» |
| Badge neutral | `#8E8E93` / `#79747E` | «Đã đọc» |

**Cấm** skin đỏ CCCD / Ministry · **cấm** «Có mạng» trên ops.

## 5. Parity note (iOS ↔ Android)

| Item | iOS | Android |
|------|-----|---------|
| Title **Thông báo** | **cùng** | **cùng** |
| 2 demo rows copy | **cùng** | **cùng** (GAP-MOB-OPS-DEMO-01 closed) |
| Badge Mới / Đã đọc | info / gray | blue / gray |
| Nav chrome | text back «Tôi» + chevron | icon back chevron · title **Thông báo** |
| Row style | `.row no-icon` | `.row` no leading icon |
| Toast mark-read | **Đã đọc chỉ đạo** | **cùng** |

## 6. Cấm

- WebView HTML · `mfeStdUrl` · `yarn start:std`
- Invent tab / watermark Gói / `api/v1/ops` / filter toolbar
- Form create/edit · Command center · SignalR · mark-all-read
- `UIAlert` / `AlertDialog` / `window.alert`
- Gộp sibling screens · start `pending_confirm`
- Ship process text «gen realapp» / device label trên title

## 7. Handoff → SA

| Field | Value |
|-------|-------|
| Next slash | `/agent-sa-mobile` |
| BFF | reuse `notification/inbox*` proxy · Step 4b `/new-endpoint` **N/A** |
| Open Q | GAP-F-OPS-01/MOB-01 đã chốt PO §7 |
| Chain | roleOnly=design · **không** chain SA turn này |
| e2eQa | ON khi QA · `yarn e2e-qa-mobile` |

## Version meta (REQUIRED)

| Field | Value |
|-------|-------|
| skillId | agent-design-mobile |
| skillVersion | 2026.08.19.07 |
| schemaVersion | 1 |
| workflowVersion | 2026.08.19.27 |
| rulesVersion | 2026.08.19.32 |
| generatedAt | 2026-08-19T12:40:00.000Z |
| versionGate | rechecked |
| contentHash | sha256:ops-mobile-edit-list-20260819 |
| bffContentHash | sha256:notification-inbox-proxy-passthrough |

---
<!-- Version meta: skillId=agent-design-mobile skillVersion=2026.08.19.07 schemaVersion=1 workflowVersion=2026.08.19.27 rulesVersion=2026.08.19.32 versionGate=rechecked -->
