# UX analy — mnt-progress (mobile)

**Sources:** `ui/prototype/ios/index.html` · `ui/prototype/android/index.html` · `ui/design.md` · PO · DA controlHint + real-data  
**Gate:** `/mobile-ui-ux-analy` §1–§9 · **REQUIRED** trước Dev  
**Slash:** `/mobile-ui-ux-analy` · `task_be38de39` · `2026-08-29T06:09:10.000Z`  
**Brand tokens:** Primary `#0C84C0` · deep `#086A9A` · success `#34C759` · orange `#FF9500` · surface `#F2F2F7` · label `#1C1C1E` · muted `#8E8E93`  
**Hash skip:** DA contentHash `sha256:mnt-progress-mobile-control-hint-20260829` · **cấm** re-scan DemoRoot (`GAP-DES-DEMO-RESCAN-01`)

## 1. IA

```
Login → Tab Công việc (shell Tab 5 · index work)
  → mnt-list card «Vá mặt đường» #i-sync
       → push #sc-mnt-progress (owner DES-MOB-MNT-PROGRESS) · thay toast-only
  → #sc-mnt-progress DES-MOB-MNT-PROGRESS
       → header WO title · code · status (readonly)
       → Tiến độ (%) · Ghi chú
       → Ảnh hiện trường + #i-camera
       → Vị trí đã chốt (device GPS)
       → Primary POST …/progress | @100 → POST …/complete
       → missing WO id → banner · chặn Cập nhật
       → GPS deny → DES-MOB-GPS-DENY · vẫn submit không GPS
  → back → mnt-list
```

`tabs: none` trên surface · **cấm** invent segment (`GAP-TAB-01`). Tab shell **`work`** active.

## 2. Màn

| DES / sc-* | Tên VN | iOS chrome | Android chrome | CTA |
|------------|--------|------------|----------------|-----|
| DES-MOB-MNT-PROGRESS / `#sc-mnt-progress` | Cập nhật trạng thái | nav back «Công việc» + chevron · title 17 · Tab 5 work | icon-btn chevron · TopAppBar title ~20 · Nav 5 work | Cập nhật |
| Banner missing (`?missing=1`) | Thiếu công việc… | in-app banner | same | chặn primary |
| GPS deny (`?deny=1`) | Định vị bị tắt | modal reuse | same | Để sau / Sao chép |

## 3. Zone

### DES-MOB-MNT-PROGRESS

| Zone | Demo (user thấy) | Map row (html-to-native-map) | SwiftUI | Compose |
|------|------------------|------------------------------|---------|---------|
| Header | Công việc · Cập nhật trạng thái | A `.nav-bar` / `.top-bar` | `LinmTopBar` | same |
| WO title | Công việc / Vá mặt đường | A `.row` | `LinmListRow` | same |
| WO code | Mã / CV-20260810-0001 | A `.row` | `LinmListRow` | same |
| Status | Tình trạng hiện tại / Chờ xử lý | A `.row` + badge | `LinmListRow` + badge | same |
| Progress | Tiến độ (%) / slider+number | A `.field` | `LinmTextField` / slider | same |
| Note | Ghi chú / textarea | A `.field` textarea | `LinmTextArea` | same |
| Photo | Ảnh hiện trường + camera | PhotoRow + `#i-camera` | PhotoRow · IconButton | same |
| GPS | Vị trí đã chốt / QL.1… | A `.row` | `LinmListRow` | same |
| Primary | Cập nhật | A `.btn-primary` | `LinmPrimaryButton` | same |
| Toast | Đã cập nhật tiến độ · {n}% | D toast | `LinmToast` | same |
| GPS deny | Định vị bị tắt | modal | `DES-MOB-GPS-DENY` | same |
| Leave | Bỏ thay đổi? | modal | `DES-MOB-LEAVE` | same |
| Banner | Thiếu công việc… | `.banner` | Text/banner kit | same |
| Tab | work active | A `.tabbar` / `.nav` | `LinmTabBar` | NavigationBar |

**States:** default (SSOT rows · pct 0) · loading Cập nhật (busy primary) · progress success toast + status → Đang xử lý · complete @100 toast + Đã hoàn thành · fail toast (**cấm** fake %) · missing WO banner + disable · invalid % disable/toast · GPS deny modal · leave dirty confirm · offline: form mở · POST fail toast · queue DEFER · seed fail → demo fallback rows

## 4. Copy SSOT

Nhãn lấy đúng HTML dual — **cấm** invent / lệch iOS↔Android (trừ back chrome: iOS có chữ «Công việc»).

**Cấm trên máy:** watermark «bản Gói N» · device label «iPhone»/«· Android» · «Có mạng» · fake % · map embed · bottom-sheet · badge P1/P2 · gộp estimate/chat/log.

## 5. Brand

| Token | Hex | Dùng |
|-------|-----|------|
| Primary | `#0C84C0` | CTA · tab selected · tint · badge progress |
| Deep | `#086A9A` | accent |
| Orange | `#FF9500` / `#9A5B00` | banner warn · status Chờ xử lý |
| Success | `#34C759` / `#1B7A3A` | status Đã hoàn thành |
| Surface | `#F2F2F7` | nền |
| Card | `#FFFFFF` | groups · fields |
| Label / muted | `#1C1C1E` / `#8E8E93` | title / row-sub / labels |

**Cấm** skin đỏ Ministry / CCCD (`GAP-MOB-BRAND-01`).

## 6. Signal

Không pill mạng trên pack này. **Cấm** «Có mạng» · **cấm** tap-cycle proto (`AC-D-08`).

## 7. Pictogram

| id | Motif | Native |
|----|-------|--------|
| `#i-chevron-left` | `M15 5l-7 7 7 7` | SF `chevron.left` / Material `ArrowBack` |
| `#i-camera` | body + circle r=3.5 | SF `camera` / Material `PhotoCamera` |
| `#i-home` `#i-mappin` `#i-warning` `#i-wrench` `#i-person` | shell Tab 5 | reuse shell |

**Cấm** invent tab icon / segment icon mới trên pack. Entry `#i-sync` = parent mnt-list only.

## 8. Motion

Pack P1: toast fade ~2.4s · primary busy ~350ms · slider↔number sync · leave/GPS modal open · **không** bắt buộc `/wf-anim` ship.

## 9. GAP / Device

| ID | Demo vs native | Quyết định |
|----|----------------|------------|
| GAP-MOB-MNT-PROG-PACK-01 | sheet meta vs full screen | **sheet** packKind · surface **screen** · **cấm** bottom-sheet |
| GAP-MOB-MNT-PROG-SCR-01 | toast only → screen | **must** dual `#sc-mnt-progress` (turn này) |
| GAP-MOB-MNT-PROG-NAV-01 | `#i-sync` toast → push | **IN P1** |
| GAP-MOB-MNT-PROG-MEDIA-01 | no MediaUrl body | camera UX · MediaUrl DEFER |
| GAP-MOB-MNT-PROG-GPS-01 | no lat/lng API | device + Note embed · **cấm** fake |
| GAP-MOB-MNT-PROG-LABEL-01 | init-data vs list VN | **giữ mnt-list** Chờ xử lý / Đang xử lý / … |
| GAP-MOB-MNT-PROG-DONE-01 | complete vs @100 | cùng slug · POST complete |
| AC-D-01 | offline | form mở · fail toast · queue DEFER |
| AC-D-02 | GPS deny | modal · submit không GPS · **cấm** fake |
| AC-D-03 | leave dirty | in-app confirm · **cấm** native alert |
| AC-D-04 | alert | **cấm** system · Toast / kit modal only |
| AC-D-05 | keyboard | không đè Primary |
| AC-D-06 | safe area | TopBar + scroll + CTA + tab |
| AC-D-08 | signal | **N/A** · **cấm** «Có mạng» |
| AC-D-10 | tab | shell work · in-screen **none** |
| AC-D-11 | camera | PhotoRow · deny/cancel giữ form |
| AC-D-12 | type | label 13 · value ≥16 · title 17 |
| AC-F-01 | appear / prefill | nav / GET · fail → demo SSOT |
| AC-F-02 | back | pop mnt-list |
| AC-F-03 | header WO | title · code · status VN |
| AC-F-04 | progress % | 0–100 required |
| AC-F-05 | note | optional · + GPS text |
| AC-F-06 | photo | PhotoRow · **cấm** invent MediaUrl body |
| AC-F-07 | GPS | ListRow · deny modal · **cấm** fake |
| AC-F-08 | Cập nhật | POST progress · toast % · **cấm** fake |
| AC-F-09 | complete | @100 → POST complete · back list |
| AC-F-10 | entry | mnt-list `#i-sync` → push |
| AC-F-11 | dual parity | cùng copy trừ chrome back |
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
| generatedAt | 2026-08-29T06:09:10.000Z |
| contentHash | sha256:mnt-progress-mobile-control-hint-20260829 |
| taskId | `task_be38de39` |

---
<!-- Version meta: skillId=mobile-ui-ux-analy skillVersion=2026.08.25.01 schemaVersion=2 -->
