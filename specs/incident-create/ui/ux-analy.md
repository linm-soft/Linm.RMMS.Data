# UX analy — incident-create

**Sources:** `ui/prototype/ios/index.html` · `ui/prototype/android/index.html` · `ui/design.md` · PO · DA controlHint + real-data  
**Gate:** `/mobile-ui-ux-analy` §1–§9 · **REQUIRED** trước Dev  
**Slash:** `/mobile-ui-ux-analy` · `task_706e535d` · `2026-08-29T00:45:00.000Z`  
**Brand tokens:** Primary `#0C84C0` · deep `#086A9A` · success `#34C759` · orange `#FF9500` · surface `#F2F2F7` · label `#1C1C1E` · muted `#8E8E93`  
**Hash skip:** DA contentHash `sha256:incident-create-control-hint-20260829` · **cấm** re-scan DemoRoot (`GAP-DES-DEMO-RESCAN-01`)

## 1. IA

```
Login → Tab Trang Chủ (shell Tab 5 · index home)
  → Home quick «Ghi sự cố» / FAB incident-list / CTA asset-type
       → startIncidentPick() → asset-types pick (banner)
            → openIncidentForm(code) → push #sc-inc-form (owner)
  → #sc-inc-form DES-MOB-INC-FORM
       → WalletCard TÀI SẢN ĐÃ CHỌN
       → kind pills DES-MOB-INC-KIND (default Hư)
       → Checklist theo loại (BRIDGE CHK)
       → PhotoRow + openCapture('inc-form')
       → AI row empty / detect
       → Loc readonly * · Severity · Mô tả
       → Primary POST incident | Secondary cam / estimate / draft
       → GPS deny → DES-MOB-GPS-DENY (chặn Create)
  → back → asset-type / pick
```

`tabs: none` trên surface · **cấm** invent segment (`GAP-TAB-01`). Tab shell **`home`** active.

## 2. Màn

| DES / sc-* | Tên VN | iOS chrome | Android chrome | CTA |
|------------|--------|------------|----------------|-----|
| DES-MOB-INC-FORM / `#sc-inc-form` | Ghi sự cố | nav back «Thông tin tài sản» + chevron · title 17 · Tab 5 home | icon-btn chevron · TopAppBar title · Nav 5 home | Tạo vấn đề / cam / estimate / nháp |
| DES-MOB-INC-KIND | Loại ghi nhận | pills Hư/Mất/Hỏng | same | — |
| DES-MOB-GPS-DENY / `#modal-gps` | Định vị bị tắt | in-app modal | Material dialog card | Sao chép hướng dẫn / Để sau |
| Entry pick (cùng flow) | Chọn loại tài sản… | banner + grid 3 cột stretch · pict 36 QCVN | same | toast pick nếu thiếu |

## 3. Zone

### DES-MOB-INC-FORM

| Zone | Demo (user thấy) | Map row (html-to-native-map) | SwiftUI | Compose |
|------|------------------|------------------------------|---------|---------|
| Header | Thông tin tài sản · Ghi sự cố | A `.nav-bar` / `.top-bar` | `LinmTopBar` | same |
| Asset | TÀI SẢN ĐÃ CHỌN · Cầu · BRIDGE | A `.wallet-card` | `LinmWalletCard` | same |
| Kind | Hư / Mất / Hỏng | A `.kind-pills` | Segment/pills | same |
| Checklist | BRIDGE chk-row | A `.chk-row` | CheckboxList pattern | same |
| Photo | camera slot `#i-camera` | A `.photo-row` | PhotoRow pattern | same |
| AI row | Nhận diện từ ảnh / empty | A `.row` | `LinmListRow` | same |
| Loc | Vị trí đã chốt * / QL.1… | A `.field` readonly | TextField | same |
| Severity | Mức độ / Cao | A `.field` select | `LinmSelect` | same |
| Desc | Mô tả / placeholder | A `.field` textarea | `LinmTextArea` | same |
| Primary | Tạo vấn đề | A `.btn-primary` | `LinmPrimaryButton` | same |
| Secondary ×3 | cam / estimate / nháp | A `.btn-secondary` | `LinmSecondaryButton` | same |
| Toast | SC-2418 / nháp / pick | D toast | `LinmToast` | same |
| Tab | home active | A `.tabbar` / `.nav` | `LinmTabBar` | NavigationBar |

**States:** default (BRIDGE + kind Hư + severity Cao + GPS chốt + AI empty) · loading Create · detect empty/fail toast · offline draft · GPS deny modal · camera deny toast · pick thiếu toast · leave dirty confirm (reuse `DES-MOB-LEAVE` / kit — **cấm** system alert) · Create blocked nếu thiếu asset / GPS

### DES-MOB-INC-KIND

| Zone | Demo | Map row | SwiftUI | Compose |
|------|------|---------|---------|---------|
| Pills | 3 · single · default Hư | `.kind-pills` | Segment/pills | same |

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

Nhãn lấy đúng HTML dual — **cấm** invent / lệch iOS↔Android (trừ back chrome: iOS có chữ «Thông tin tài sản»).

**Cấm trên máy:** watermark «bản Gói N» · device label «iPhone»/«· Android» · «Có mạng» · fake lat/lng · loanword Offline/GPS như title · sheet chrome · `#sheet-incident`.

## 5. Brand

| Token | Hex | Dùng |
|-------|-----|------|
| Primary | `#0C84C0` | CTA · tab selected · kind on · tint · wallet |
| Deep | `#086A9A` | accent |
| Orange | `#FF9500` | deny/warn accents |
| Surface | `#F2F2F7` | nền |
| Card | `#FFFFFF` | groups · modal · pills off · fields |
| Label / muted | `#1C1C1E` / `#8E8E93` | title / section / row-sub |

**Cấm** skin đỏ Ministry / CCCD (`GAP-MOB-BRAND-01`).

## 6. Signal

Không pill mạng trên pack này. Loc = OS permission path only · **cấm** tap-cycle proto · **cấm** «Có mạng» (`AC-D-08`).

## 7. Pictogram

| id | Motif | Native |
|----|-------|--------|
| `#i-chevron-left` | `M15 5l-7 7 7 7` | SF `chevron.left` / Material `ArrowBack` |
| `#i-camera` | body + r=3.5 | SF `camera` / Material `PhotoCamera` |
| `#i-home` `#i-mappin` `#i-warning` `#i-wrench` `#i-person` | shell Tab 5 | reuse shell |
| `.ak32-ico` · 36 mã | QCVN pict `asset-kcht-icons.js` | `LinmAssetKchtPict(code)` dual · **cấm** GridView / `square.grid.2x2` |

**Cấm** invent tab icon / segment icon mới. **Cấm** 1 pict chung cho 36 loại.

## 8. Motion

Pack P1: toast fade ~2.4s · modal backdrop fade · kind pill select · checklist rebind · Create busy spinner trên primary · photo slot append · **không** bắt buộc `/wf-anim` ship.

## 9. GAP / Device

| ID | Demo vs native | Quyết định |
|----|----------------|------------|
| GAP-MOB-INC-CREATE-PACK-01 | sheet meta vs full screen | **screen** · chốt · **cấm** sheet |
| GAP-MOB-INC-CREATE-SHEET-01 | `#sheet-incident` | **OUT pack** |
| GAP-MOB-INC-CREATE-MEDIA-01 | Create chưa media[] | P1 optional upload · SA |
| GAP-MOB-INC-CREATE-CHK-01 | checklist local BRIDGE | **cấm** invent API |
| AC-D-01 | offline | draft + toast nháp · sibling offline |
| AC-D-02 | GPS deny | modal · chặn Create |
| AC-D-03 | leave dirty | in-app confirm · **cấm** native alert |
| AC-D-04 | alert | **cấm** system · Toast/modal only |
| AC-D-05 | keyboard | textarea · không đè Primary |
| AC-D-06 | safe area | TopBar + scroll + CTA + tab |
| AC-D-11 | camera deny | toast · **cấm** fake detection |
| AC-F-01 | appear | asset bind + GPS + kind Hư + severity Cao + CHK |
| AC-F-02 | kind change | local state |
| AC-F-03 | photo / detect | optional · fail toast · **cấm** fake |
| AC-F-04 | Create | POST · cần asset + GPS chốt |
| AC-F-05 | Draft | local · toast **Nháp mất sóng** |
| AC-F-06 | dual parity | cùng copy zones |
| AC-F-07 | entry | Home/FAB/asset → pick → form |
| AC-F-08 | empty catalog | banner/toast pick · **cấm** fake asset |
| AC-F-09 | secondary | cam-patrol / estimate navigate reuse |
| GAP-TAB-01 | tabs none | shell Tab 5 giữ · home |
| kit_missing | PhotoRow · CheckboxList | **approve** compose |
| DEFER | bezel HTML | chrome native HIG/Material |
| GAP-MOB-INC-PICK-ALIGN-01 | Pick card height + 1 icon GridView | 3 cột stretch cùng height · label 3 dòng · pict 36 theo `code` · lock `/edit-mobile-feature` |

## Gate

Must open = **0** · packet §1–§9 đủ · handoff SA (`be/solution-discovery.md` pending).

## Version meta

| Field | Value |
|-------|-------|
| skillId | mobile-ui-ux-analy |
| skillVersion | 2026.08.25.01 |
| schemaVersion | 1 |
| generatedAt | 2026-08-29T00:45:00.000Z |
| contentHash | sha256:incident-create-control-hint-20260829 |

---
<!-- Version meta: skillId=mobile-ui-ux-analy skillVersion=2026.08.25.01 schemaVersion=1 -->
