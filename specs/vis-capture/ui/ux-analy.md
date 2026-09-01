# UX analy — vis-capture

**Sources:** `ui/prototype/ios/index.html` · `ui/prototype/android/index.html` · `ui/design.md` · PO · DA controlHint + real-data  
**Gate:** `/mobile-ui-ux-analy` §1–§9 · **REQUIRED** trước Dev  
**Slash:** `/mobile-ui-ux-analy` · `task_27b1bf39` · `2026-08-29T09:00:00.000Z`  
**Brand tokens:** Primary `#0C84C0` · deep `#086A9A` · success `#34C759` · orange `#FF9500` · surface `#F2F2F7` · label `#1C1C1E` · muted `#8E8E93`  
**Hash skip:** DA contentHash `sha256:vis-capture-control-hint-20260829` · real-data `sha256:vis-capture-real-data-20260829` · **cấm** re-scan DemoRoot (`GAP-DES-DEMO-RESCAN-01`)

## 1. IA

```
Login → Tab Vấn đề (shell Tab 5 · index incident)
  → List #sc-incident-list
       → banner «Nhận diện mặt đường» #i-camera → push #sc-vis-capture (owner)
  → (reuse) AI hub / chip → cùng route (shared_action · không enqueue)
  → #sc-vis-capture DES-MOB-VIS-CAPTURE
       → PhotoRow still · GPS chốt · gate AccuracyM ≤ 30
       → POST detect → rows Class / Sev
       → Gắn sự cố POST incident | Bỏ qua local
       → GPS deny → DES-MOB-GPS-DENY (chặn detect + Gắn)
  → back → incident-list
```

`tabs: none` trên surface · **cấm** invent segment (`GAP-TAB-01`). Tab shell **`incident`** active.

## 2. Màn

| DES / sc-* | Tên VN | iOS chrome | Android chrome | CTA |
|------------|--------|------------|----------------|-----|
| DES-MOB-VIS-CAPTURE / `#sc-vis-capture` | Nhận diện mặt đường | nav back «Vấn đề» + chevron · title 17 · Tab 5 incident | icon-btn chevron · TopAppBar title · Nav 5 incident | Gắn sự cố / Bỏ qua |
| DES-MOB-GPS-DENY / `#modal-gps` | Định vị bị tắt | in-app modal | Material dialog card | Sao chép hướng dẫn / Để sau |

**Cấm** sheet / `#sheet-*` · **cấm** gộp cam-patrol finder.

## 3. Zone

### DES-MOB-VIS-CAPTURE

| Zone | Demo (user thấy) | Map row (html-to-native-map) | SwiftUI | Compose |
|------|------------------|------------------------------|---------|---------|
| Header | Vấn đề · Nhận diện mặt đường | A `.nav-bar` / `.top-bar` | `LinmTopBar` | same |
| Section | Ảnh hiện trường | A `.section-label` | SectionLabel 13 | same · **parity** |
| PhotoRow | filled Ảnh + camera slot | A `.photo-row` | PhotoRow still | same |
| Row Loc | Vị trí đã chốt / live session (demo HTML QL.1 · Km 1556+050) | A `.row` | `LinmListRow` | live-only · **cấm** demoLoc |
| Row Acc | Sai số định vị / ±4 m | A `.row` | `LinmListRow` | same |
| Row Class | Phân loại / Nứt dọc | A `.row` | `LinmListRow` | same |
| Row Sev | Mức / Cao + badge | A `.row` + `.badge` | `LinmListRow` + Badge | same |
| Primary | Gắn sự cố | A `.btn-primary` | `LinmPrimaryButton` | same |
| Secondary | Bỏ qua | A `.btn-secondary` | `LinmSecondaryButton` | same · **parity** |
| Toast | Đã gắn sự cố / GPS block | D toast | `LinmToast` | same |
| Tab | incident active | A `.tabbar` / `.nav` | `LinmTabBar` | NavigationBar |

**States:** default (demo filled + detect) · empty photo (chưa chụp) · loading detect · detect error toast · GPS gate toast (`?acc=35`) · GPS deny modal (`?deny=1`) · camera deny toast · offline queue · leave dirty confirm (ảnh/detection) · Skip = dismiss không confirm bắt buộc

### DES-MOB-GPS-DENY

| Zone | Demo | Map row | SwiftUI | Compose |
|------|------|---------|---------|---------|
| Title | Định vị bị tắt | `h3` 17 | Text 17 semibold | same |
| Body | Cần vị trí… RMMS. | `p` 13 | Text 13 | same |
| Primary | Sao chép hướng dẫn | `.btn-primary` | `LinmPrimaryButton` | same |
| Secondary | Để sau | `.btn-secondary` | `LinmSecondaryButton` | same |

**Cấm** `UIAlertController` / `AlertDialog` hệ thống (`AC-D-04`).

## 4. Copy SSOT

Nhãn lấy đúng HTML dual + DA/PO — **cấm** invent / lệch iOS↔Android (trừ back chrome: iOS có chữ «Vấn đề»).

| Key | Copy |
|-----|------|
| Title | Nhận diện mặt đường |
| Section | Ảnh hiện trường |
| Loc / Acc / Class / Sev | Vị trí đã chốt · Sai số định vị · Phân loại · Mức |
| Demo values | QL.1 · Km 1556+050 · ±4 m · Nứt dọc · Cao |
| CTA | Gắn sự cố · Bỏ qua |
| Toast OK | Đã gắn sự cố |
| Toast GPS | Sai số định vị quá lớn · cần ≤ 30 m trước khi nhận diện |

**Cấm trên máy:** watermark «bản Gói N» · device label «iPhone»/«· Android» · «Có mạng» · tên thuật toán · fake lat/lng · loanword Offline/GPS như title.

## 5. Brand

| Token | Hex | Dùng |
|-------|-----|------|
| Primary | `#0C84C0` | CTA · tab selected · tint |
| Orange | `#FF9500` | badge Cao |
| Surface | `#F2F2F7` | nền |
| Card | `#FFFFFF` | rows · modal |
| Label / muted | `#1C1C1E` / `#8E8E93` | title / row-sub / section |

**Cấm** skin đỏ Ministry / CCCD (`GAP-MOB-BRAND-01`).

## 6. Signal

Không pill mạng trên pack này. Loc = OS permission path only · **cấm** tap-cycle proto · **cấm** «Có mạng» (`AC-D-08`). GPS gate = AccuracyM ≤ 30 trước detect (`GAP-MOB-VIS-GPS-01`).

## 7. Pictogram

| id | Motif | Native |
|----|-------|--------|
| `#i-chevron-left` | `M15 5l-7 7 7 7` | SF `chevron.left` / Material `ArrowBack` |
| `#i-camera` | body + lens r=3.5 | SF `camera` / Material `PhotoCamera` |
| `#i-warning` `#i-home` `#i-mappin` `#i-wrench` `#i-person` | shell Tab 5 | reuse shell |

**Cấm** invent tab icon / segment icon mới · entry banner reuse `#i-camera` trên incident-list (**không** reimplement list).

## 8. Motion

Pack P1: toast fade ~2.4s · modal backdrop fade · PhotoRow fill after capture · detect bind rows · Attach toast → back list · **không** bắt buộc `/wf-anim` ship.

## 9. GAP / Device

| ID | Demo vs native | Quyết định |
|----|----------------|------------|
| GAP-MOB-VIS-PACK-01 | sheet meta vs full screen | **screen** · chốt PO · **CLOSED** |
| GAP-MOB-VIS-DUAL-01 | Android thiếu section + Bỏ qua | **CLOSED** · dual proto có đủ |
| GAP-MOB-VIS-GPS-01 | gate ≤ 30 m | toastGpsBlock · chặn detect · `?acc=35` |
| GAP-MOB-VIS-DETECT-01 | detect stub | SA · không Design |
| AC-D-01 | offline | queue + toast · sibling patrol-offline |
| AC-D-02 | GPS deny | modal · chặn detect + Gắn |
| AC-D-03 | leave dirty | confirm in-app nếu ảnh/detection · Skip không bắt buộc |
| AC-D-04 | alert | **cấm** system · Toast/modal only |
| AC-D-06 | safe area | TopBar + PhotoRow + rows + CTA + tab |
| AC-D-11 | camera deny | toast · **cấm** fake detection · still only |
| AC-F-02–06 | capture → detect → attach / skip | khớp PO |
| AC-F-07 | dual parity | section + Bỏ qua dual |
| GAP-TAB-01 | tabs none | shell Tab 5 incident |
| kit_missing | — | **none** |
| DEFER | bezel HTML | chrome native HIG/Material |

## Gate

Must open = **0** · packet §1–§9 đủ · handoff SA (`be/solution-discovery.md` pending).

## Version meta

| Field | Value |
|-------|-------|
| skillId | mobile-ui-ux-analy |
| skillVersion | 2026.08.25.01 |
| schemaVersion | 1 |
| generatedAt | 2026-08-29T09:00:00.000Z |
| contentHash | sha256:vis-capture-control-hint-20260829 |
| taskId | `task_27b1bf39` |

---
<!-- Version meta: skillId=mobile-ui-ux-analy skillVersion=2026.08.25.01 schemaVersion=1 -->
