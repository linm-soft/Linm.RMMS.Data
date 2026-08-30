# UX analy — field-reflect

**Sources:** `ui/prototype/ios/index.html` · `ui/prototype/android/index.html` · `ui/design.md` · PO · DA controlHint + real-data  
**Gate:** `/mobile-ui-ux-analy` §1–§9 · **REQUIRED** trước Dev  
**Slash:** `/mobile-ui-ux-analy` · `task_06d4623f` · `2026-08-28T22:16:32.000Z`  
**Brand tokens:** Primary `#0C84C0` · deep `#086A9A` · success `#34C759` · orange `#FF9500` · surface `#F2F2F7` · label `#1C1C1E` · muted `#8E8E93`  
**Hash skip:** DA contentHash `sha256:field-reflect-control-hint-20260829` · **cấm** re-scan DemoRoot (`GAP-DES-DEMO-RESCAN-01`)

## 1. IA

```
Login → Tab Tuần đường (shell Tab 5 · index field)
  → Hub #sc-patrol-home
       → row «Ghi nhận hư hỏng» #row-reflect #i-camera → push #sc-field-reflect (owner)
  → #sc-field-reflect DES-MOB-FIELD-REFLECT
       → kind pills DES-MOB-FIELD-KIND (default Hư)
       → PhotoRow + openCapture('reflect')
       → card Nhận diện / Mức / Vị trí đã chốt
       → Checklist PAVEMENT (filter by kind)
       → Primary POST incident | Secondary draft offline
       → GPS deny → DES-MOB-GPS-DENY (chặn Create)
  → back → patrol-home
```

`tabs: none` trên surface · **cấm** invent segment (`GAP-TAB-01`). Tab shell **`field`** active.

## 2. Màn

| DES / sc-* | Tên VN | iOS chrome | Android chrome | CTA |
|------------|--------|------------|----------------|-----|
| DES-MOB-FIELD-REFLECT / `#sc-field-reflect` | Ghi nhận hư hỏng | nav back «Tuần đường» + chevron · title 17 · Tab 5 field | icon-btn chevron · TopAppBar title · Nav 5 field | Tạo vấn đề / Lưu nháp mất sóng |
| DES-MOB-FIELD-KIND | Loại phản ánh | pills Hư/Mất/Hỏng | same | — |
| DES-MOB-GPS-DENY / `#modal-gps` | Định vị bị tắt | in-app modal | Material dialog card | Sao chép hướng dẫn / Để sau |

## 3. Zone

### DES-MOB-FIELD-REFLECT

| Zone | Demo (user thấy) | Map row (html-to-native-map) | SwiftUI | Compose |
|------|------------------|------------------------------|---------|---------|
| Header | Tuần đường · Ghi nhận hư hỏng | A `.nav-bar` / `.top-bar` | `LinmTopBar` | same |
| Banner empty | Không có ca đang tuần | A `.banner` | Text banner | same |
| Kind | Hư / Mất / Hỏng | A `.kind-pills` | `LinmKindPills` | same |
| Photo | Ảnh + camera slot | A `.photo-row` | PhotoRow pattern | same |
| Row detect | Nhận diện / Ổ gà · Mặt đường | A `.row` | `LinmListRow` | same |
| Row mức | Mức / Cao + badge | A `.row` + `.badge` | `LinmListRow` + Badge | same |
| Row vị trí | Vị trí đã chốt / QL.1… | A `.row` | `LinmListRow` | same |
| Checklist | PAVEMENT chk-row | A `.chk-row` | CheckboxList pattern | same |
| Primary | Tạo vấn đề | A `.btn-primary` | `LinmPrimaryButton` | same |
| Secondary | Lưu nháp mất sóng | A `.btn-secondary` | `LinmSecondaryButton` | same |
| Toast | SC-2408 / nháp | D toast | `LinmToast` | same |
| Tab | field active | A `.tabbar` / `.nav` | `LinmTabBar` | NavigationBar |

**States:** default (kind Hư + GPS chốt + demo detect) · loading Create · detect empty/fail toast · offline draft · GPS deny modal · camera deny toast · empty session banner · leave dirty confirm (reuse `DES-MOB-LEAVE` / kit — **cấm** system alert)

### DES-MOB-FIELD-KIND

| Zone | Demo | Map row | SwiftUI | Compose |
|------|------|---------|---------|---------|
| Pills | 3 · single · default Hư | `.kind-pills` | `LinmKindPills` | same |
| Filter | đổi kind → checklist | JS filter | local state | same |

**Cấm** invent kind ngoài closed set 3.

### DES-MOB-GPS-DENY

| Zone | Demo | Map row | SwiftUI | Compose |
|------|------|---------|---------|---------|
| Title | Định vị bị tắt | `h3` 17 | Text 17 semibold | same |
| Body | Cần vị trí… RMMS. | `p` 13 | Text 13 | same |
| Primary | Sao chép hướng dẫn | `.btn-primary` | `LinmPrimaryButton` | same |
| Secondary | Để sau | `.btn-secondary` | `LinmSecondaryButton` | same |

**Cấm** `UIAlertController` / `AlertDialog` hệ thống (`AC-D-04`).

## 4. Copy SSOT

Nhãn lấy đúng HTML dual — **cấm** invent / lệch iOS↔Android (trừ back chrome: iOS có chữ «Tuần đường»).

**Cấm trên máy:** watermark «bản Gói N» · device label «iPhone»/«· Android» · «Có mạng» · fake lat/lng · loanword Offline/GPS như title · sheet chrome.

## 5. Brand

| Token | Hex | Dùng |
|-------|-----|------|
| Primary | `#0C84C0` | CTA · tab selected · kind on · tint |
| Deep | `#086A9A` | accent |
| Orange | `#FF9500` | severity badge · empty banner |
| Surface | `#F2F2F7` | nền |
| Card | `#FFFFFF` | groups · modal · pills off |
| Label / muted | `#1C1C1E` / `#8E8E93` | title / section / row-sub |

**Cấm** skin đỏ Ministry / CCCD (`GAP-MOB-BRAND-01`).

## 6. Signal

Không pill mạng trên pack này. Loc = OS permission path only · **cấm** tap-cycle proto · **cấm** «Có mạng» (`AC-D-08`).

## 7. Pictogram

| id | Motif | Native |
|----|-------|--------|
| `#i-chevron-left` | `M15 5l-7 7 7 7` | SF `chevron.left` / Material `ArrowBack` |
| `#i-camera` | body + r=3.5 | SF `camera` / Material `PhotoCamera` |
| `#i-mappin` | pin + r=2.2 (mobile-p1) | tab Tuần đường |
| `#i-home` `#i-warning` `#i-wrench` `#i-person` | shell Tab 5 | reuse shell |

**Cấm** invent tab icon / segment icon mới.

## 8. Motion

Pack P1: toast fade ~2.4s · modal backdrop fade · kind pill select · checklist rebind · Create busy spinner trên primary · **không** bắt buộc `/wf-anim` ship.

## 9. GAP / Device

| ID | Demo vs native | Quyết định |
|----|----------------|------------|
| GAP-MOB-FIELD-PACK-01 | sheet meta vs full screen | **screen** · chốt |
| GAP-MOB-FIELD-MEDIA-01 | Create chưa media[] | P1 optional upload · SA |
| GAP-MOB-FIELD-CHK-01 | checklist local PAVEMENT | **cấm** invent API |
| GAP-MOB-CAM-DETECT-01 | detect stub | SA · không Design |
| AC-D-01 | offline | draft + toast nháp · sibling offline |
| AC-D-02 | GPS deny | modal · chặn Create |
| AC-D-03 | leave dirty | in-app confirm · **cấm** native alert |
| AC-D-04 | alert | **cấm** system · Toast/modal only |
| AC-D-06 | safe area | TopBar + scroll + CTA + tab |
| AC-D-11 | camera deny | toast · **cấm** fake detection |
| AC-F-01 | appear | sessions + GPS + kind Hư + CHK |
| AC-F-02 | kind change | filter checklist |
| AC-F-04 | Create | POST · cần GPS chốt |
| AC-F-05 | Draft | local · toast nháp |
| AC-F-06 | dual parity | cùng copy zones |
| AC-F-08 | empty session | banner · draft OK |
| GAP-TAB-01 | tabs none | shell Tab 5 giữ |
| kit_missing | PhotoRow · CheckboxList | **approve** compose |
| DEFER | bezel HTML | chrome native HIG/Material |

## Gate

Must open = **0** · packet §1–§9 đủ · handoff SA (`be/solution-discovery.md` pending).

## Version meta

| Field | Value |
|-------|-------|
| skillId | mobile-ui-ux-analy |
| skillVersion | 2026.08.25.01 |
| schemaVersion | 1 |
| generatedAt | 2026-08-28T22:16:32.000Z |
| contentHash | sha256:field-reflect-control-hint-20260829 |

---
<!-- Version meta: skillId=mobile-ui-ux-analy skillVersion=2026.08.25.01 schemaVersion=1 -->
