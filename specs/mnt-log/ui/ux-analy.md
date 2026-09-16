# UX analy — mnt-log (mobile)

**Sources:** `ui/prototype/ios/index.html` · `ui/prototype/android/index.html` · `ui/design.md` · PO · DA controlHint + real-data  
**Gate:** `/mobile-ui-ux-analy` §1–§9 · **REQUIRED** trước Dev  
**Slash:** `/mobile-ui-ux-analy` · `task_bda2e253` · `2026-08-29T07:22:00.000Z`  
**Brand tokens:** Primary `#0C84C0` · deep `#086A9A` · success `#34C759` · orange `#FF9500` · surface `#F2F2F7` · label `#1C1C1E` · muted `#8E8E93`  
**Hash skip:** DA contentHash `sha256:mnt-log-mobile-control-hint-20260829` · **cấm** re-scan DemoRoot (`GAP-DES-DEMO-RESCAN-01`)

## 1. IA

```
Login → Tab Công việc (shell Tab 5 · index work)
  → mnt-list card «Nạo cống» (status=done) #i-list
       → push #sc-mnt-log (owner DES-MOB-MNT-LOG) · thay toast-only
  → #sc-mnt-log DES-MOB-MNT-LOG
       → header WO title · code · status (readonly)
       → section Nhật ký
       → TimelineList newest-first (client derive GetById)
       → empty «Chưa có nhật ký» khi thiếu data
       → GET fail → toast lỗi + empty · cấm fake
       → thiếu WO id → banner + empty
  → back → mnt-list (readonly · không leave confirm)
```

`tabs: none` trên surface · **cấm** invent segment (`GAP-TAB-01`). Tab shell **`work`** active. **Không** Primary write · **không** composer.

## 2. Màn

| DES / sc-* | Tên VN | iOS chrome | Android chrome | CTA |
|------------|--------|------------|----------------|-----|
| DES-MOB-MNT-LOG / `#sc-mnt-log` | Nhật ký xử lý | nav back «Công việc» + chevron · title 17 · Tab 5 work | icon-btn chevron · TopAppBar title ~20 · Nav 5 work | **none** (readonly) |
| Banner missing (`?missing=1`) | Thiếu công việc… | in-app banner + empty | same | — |
| Empty (`?empty=1`) | Chưa có nhật ký | EmptyChrome | same | — |
| Fail (`?fail=1`) | Không tải được nhật ký | toast + empty | same | — |

## 3. Zone

### DES-MOB-MNT-LOG

| Zone | Demo (user thấy) | Map row (html-to-native-map) | SwiftUI | Compose |
|------|------------------|------------------------------|---------|---------|
| Header | Công việc · Nhật ký xử lý | A `.nav-bar` / `.top-bar` | `LinmTopBar` | same |
| WO title | Công việc / Nạo cống | A `.row` | `LinmListRow` | same |
| WO code | Mã / CV-20260809-0002 | A `.row` | `LinmListRow` | same |
| Status | Tình trạng hiện tại / Đã hoàn thành | A `.row` + badge | `LinmListRow` + badge | same |
| Section | Nhật ký | A `.section-label` | SectionLabel | same |
| Timeline | 4 mốc newest-first | A `.timeline` `.tl-item` | TimelineList / `LinmList` | same |
| Empty | Chưa có nhật ký | A `.empty` | EmptyChrome | same |
| Toast | Không tải được nhật ký | D toast | `LinmToast` | same |
| Banner | Thiếu công việc… | `.banner` | Text/banner kit | same |
| Tab | work active | A `.tabbar` / `.nav` | `LinmTabBar` | NavigationBar |

**States:** default (SSOT Nạo cống + timeline) · loading (opt skeleton DEFER) · empty · missing WO banner · GET fail toast+empty · offline: màn mở · fail toast · **cấm** fake rows · demo fallback chỉ Design gate (default proto)

## 4. Copy SSOT

Nhãn lấy đúng HTML dual — **cấm** invent / lệch iOS↔Android (trừ back chrome: iOS có chữ «Công việc»).

**Cấm trên máy:** watermark «bản Gói N» · device label «iPhone»/«· Android» · «Có mạng» · fake timeline · map embed · bottom-sheet · badge P1/P2 · Primary write · composer · gộp estimate/progress/chat.

## 5. Brand

| Token | Hex | Dùng |
|-------|-----|------|
| Primary | `#0C84C0` | tab selected · tint · timeline rail |
| Deep | `#086A9A` | accent |
| Orange | `#FF9500` / `#9A5B00` | banner warn |
| Success | `#34C759` / `#1B7A3A` | status Đã hoàn thành · done node |
| Surface | `#F2F2F7` | nền |
| Card | `#FFFFFF` | groups · timeline |
| Label / muted | `#1C1C1E` / `#8E8E93` | title / caption / labels |

**Cấm** skin đỏ Ministry / CCCD (`GAP-MOB-BRAND-01`).

## 6. Signal

Không pill mạng trên pack này. **Cấm** «Có mạng» · **cấm** tap-cycle proto (`AC-D-08`).

## 7. Pictogram

| id | Motif | Native |
|----|-------|--------|
| `#i-chevron-left` | `M15 5l-7 7 7 7` | SF `chevron.left` / Material `ArrowBack` |
| `#i-home` `#i-mappin` `#i-warning` `#i-wrench` `#i-person` | shell Tab 5 | reuse shell |
| `#i-list` | parent entry only (mnt-list) | SF `list.bullet` / Material `List` |

**Cấm** invent tab icon / segment icon mới trên pack. Timeline rail = CSS (không `#i-*` mới).

## 8. Motion

Pack P1: toast fade ~2.4s · timeline appear (static list) · **không** bắt buộc `/wf-anim` ship · **không** leave modal (readonly).

## 9. GAP / Device

| ID | Demo vs native | Quyết định |
|----|----------------|------------|
| GAP-MOB-MNT-LOG-PACK-01 | sheet meta vs full screen | **sheet** packKind · surface **screen** · **cấm** bottom-sheet |
| GAP-MOB-MNT-LOG-SCR-01 | toast only → screen | **must** dual `#sc-mnt-log` (turn này) |
| GAP-MOB-MNT-LOG-NAV-01 | `#i-list` toast → push | **IN P1** |
| GAP-MOB-MNT-LOG-ENTRY-01 | chỉ done | **P1 done-only** |
| GAP-MOB-MNT-LOG-HIST-01 | no history API | client derive · **cấm** invent logs |
| GAP-MOB-MNT-LOG-CMT-01 | comments | **OUT** · `mnt-chat` |
| GAP-MOB-MNT-LOG-SORT-01 | sort | **newest-first** |
| GAP-MOB-MNT-LOG-EMPTY-01 | empty | «Chưa có nhật ký» · **cấm** fake |
| AC-D-01 | offline | màn mở · fail toast + empty · **cấm** fake |
| AC-D-02 | GPS | **N/A** |
| AC-D-03 | leave dirty | **N/A** · readonly pop |
| AC-D-04 | alert | **cấm** system · Toast / Empty only |
| AC-D-05 | keyboard | **N/A** |
| AC-D-06 | safe area | TopBar + scroll + tab |
| AC-D-08 | signal | **N/A** · **cấm** «Có mạng» |
| AC-D-10 | tab | shell work · in-screen **none** |
| AC-D-11 | camera | **N/A** |
| AC-D-12 | type | label 13 · value ≥16 · title 17 |
| AC-F-01 | appear / prefill | nav / GET · fail → empty/toast (± demo SSOT Design gate) |
| AC-F-02 | back | pop mnt-list |
| AC-F-03 | header WO | title · code · status VN |
| AC-F-04 | timeline derive | templates · newest-first · **cấm** invent API |
| AC-F-05 | empty | «Chưa có nhật ký» |
| AC-F-06 | GET fail | Toast · empty · **cấm** fake |
| AC-F-07 | entry | mnt-list `#i-list` **done** → push |
| AC-F-08 | dual parity | cùng copy trừ chrome back |
| AC-F-09 | chrome | **cấm** device label / watermark |
| AC-F-10 | 1 action | **cấm** gộp estimate/chat/progress |
| AC-F-11 | readonly | **cấm** Primary write / composer |
| GAP-TAB-01 | tabs none | shell Tab 5 giữ · work |
| kit_missing | — | **N/A** · kits có sẵn |
| DEFER | bezel HTML | chrome native HIG/Material |
| GAP-DES-DEMO-RESCAN-01 | hash skip | **cấm** re-scan |

## Gate

Must open = **0** · packet §1–§9 đủ · handoff SA (`be/solution-discovery.md` pending).

## Version meta

| Field | Value |
|-------|-------|
| skillId | mobile-ui-ux-analy |
| skillVersion | 2026.08.25.01 |
| schemaVersion | 2 |
| generatedAt | 2026-08-29T07:22:00.000Z |
| contentHash | sha256:mnt-log-mobile-control-hint-20260829 |
| taskId | `task_bda2e253` |

---
<!-- Version meta: skillId=mobile-ui-ux-analy skillVersion=2026.08.25.01 schemaVersion=2 -->
