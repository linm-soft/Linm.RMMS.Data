# UX analy — me-profile

**Sources:** `ui/prototype/ios/index.html` · `ui/prototype/android/index.html` · `ui/design.md` · PO · DA controlHint + real-data  
**Gate:** `/mobile-ui-ux-analy` §1–§9 · **REQUIRED** trước Dev  
**Slash:** `/mobile-ui-ux-analy` · `task_0e0676c6` · `2026-08-31T02:15:00.000Z`  
**Brand tokens:** Primary `#0C84C0` · deep `#086A9A` · success `#34C759` · surface `#F2F2F7` · label `#1C1C1E` · muted `#8E8E93`  
**Hash skip:** DA contentHash `sha256:me-profile-control-hint-20260830` · **cấm** re-scan DemoRoot (`GAP-DES-DEMO-RESCAN-01`)

## 1. IA

```
Login → Tab Tôi (shell Tab 5 · index me)
  → Hub #sc-me
       → row-profile #i-person → push #sc-me-profile (owner)
  → #sc-me-profile DES-MOB-ME-PROFILE
       → Avatar display #i-person
       → TextField Họ và tên / SĐT / Email
       → Readonly Tên đăng nhập · (± CCCD nếu GET)
       → Primary «Lưu» → PUT auth/profile → toast «Đã cập nhật hồ sơ»
       → Section «Đổi mật khẩu»
       → SecureField ×3 · Secondary «Đổi mật khẩu» → POST auth/change-password
       → leave dirty → DES-MOB-LEAVE (optional)
  → back → me
```

`tabs: none` trên surface · **cấm** invent segment (`GAP-TAB-01`). Tab shell **`me`** active.

## 2. Màn

| DES / sc-* | Tên VN | iOS chrome | Android chrome | CTA |
|------------|--------|------------|----------------|-----|
| DES-MOB-ME-PROFILE / `#sc-me-profile` | Hồ sơ | nav back «Tôi» + chevron · title 17 · Tab 5 me | icon-btn chevron · TopAppBar title · Nav 5 me | Lưu · Đổi mật khẩu |
| DES-MOB-LEAVE / `#leave-modal` | Rời màn? | in-app modal | Material dialog card | Ở lại / Rời |

## 3. Zone

### DES-MOB-ME-PROFILE

| Zone | Demo (user thấy) | Map row (html-to-native-map) | SwiftUI | Compose |
|------|------------------|------------------------------|---------|---------|
| Header | Tôi · Hồ sơ | A `.nav-bar` / `.top-bar` | `LinmTopBar` | same |
| Avatar | circle person | A `.avatar` + `#i-person` | Image circle 44 | same 40 |
| fullName | Họ và tên | B `input type=text` | `LinmTextField` | same |
| phoneNumber | Số điện thoại | B `input type=tel` | `LinmTextField` phonePad | same |
| email | Email | B `input type=email` | `LinmTextField` email | same |
| userName | Tên đăng nhập | A `.readonly` | Text display | same |
| citizenId | CCCD/CMND | A `.readonly` optional | Text display if GET | same |
| Primary | Lưu | A `.btn-primary` | `LinmPrimaryButton` | same |
| Section | Đổi mật khẩu | A `.section-label` | `LinmSectionLabel` 13 | same |
| Secure ×3 | MK hiện tại / mới / xác nhận | B `input type=password` | `LinmSecureField` | same |
| Secondary | Đổi mật khẩu | A `.btn-secondary` | `LinmSecondaryButton` | same |
| Toast | Đã cập nhật / Đã đổi / lỗi | D toast | `LinmToast` | same |
| Tab | me active | A `.tab-bar` / `.nav-bar` | `LinmTabBar` | NavigationBar |

**States:** default (GET bind) · loading GET/PUT/POST busy · empty fullName → disable Lưu · validation toast pwd · error/offline toast (**cấm** fake ok) · leave dirty modal · **cấm** system alert

### DES-MOB-LEAVE

| Zone | Demo | Map row | SwiftUI | Compose |
|------|------|---------|---------|---------|
| Title | Rời màn? | `h3` 17 | Text 17 semibold | same ~20 |
| Body | Thay đổi chưa lưu sẽ mất. | `p` 13 | Text 13 | same |
| Stay | Ở lại | `.cancel` | secondary | same |
| Go | Rời | `.ok` | primary | same |

**Cấm** `UIAlertController` / `AlertDialog` hệ thống (`AC-D-04`).

## 4. Copy SSOT

Nhãn lấy đúng HTML dual — **cấm** invent / lệch iOS↔Android (trừ back chrome: iOS có chữ «Tôi»).

**Cấm trên máy:** watermark «bản Gói N» · device label «iPhone»/«· Android» · «Có mạng» · fake toast ok · invent org subtitle · avatar upload UI.

## 5. Brand

| Token | Hex | Dùng |
|-------|-----|------|
| Primary | `#0C84C0` | CTA · tab selected · tint |
| Deep | `#086A9A` | accent |
| Surface | `#F2F2F7` | nền |
| Card | `#FFFFFF` | field / modal |
| Label / muted | `#1C1C1E` / `#8E8E93` | title / label / placeholder |

**Cấm** skin đỏ Ministry / CCCD (`GAP-MOB-BRAND-01`).

## 6. Signal

Không pill mạng trên pack này · **cấm** tap-cycle proto · **cấm** «Có mạng» (`AC-D-08`).

## 7. Pictogram

| id | Motif | Native |
|----|-------|--------|
| `#i-chevron-left` | `M15 5l-7 7 7 7` | SF `chevron.left` / Material `ArrowBack` |
| `#i-person` | circle + shoulders (avatar + Me entry + tab) | SF `person` / Material `Person` |
| `#i-home` `#i-mappin` `#i-warning` `#i-wrench` | shell Tab 5 | reuse shell |

**Cấm** invent tab icon / segment icon mới.

## 8. Motion

Pack P1: toast fade ~2.4s · leave modal backdrop · primary/secondary busy · keyboard avoid CTA · **không** bắt buộc `/wf-anim` ship.

## 9. GAP / Device

| ID | Demo vs native | Quyết định |
|----|----------------|------------|
| GAP-MOB-MEPROF-DEMO-01 | thiếu dual HTML | **IN** · dual `#sc-me-profile` · closed |
| GAP-MOB-MEPROF-NAV-01 | Me no-op → push | **IN** · push owner |
| GAP-MOB-MEPROF-SCR-01 | thiếu màn | **IN** · DES-MOB-ME-PROFILE |
| GAP-MOB-MEPROF-LOAD-01 | GET bind | appear → GET `auth/profile` |
| GAP-MOB-MEPROF-SAVE-01 | CTA Lưu | PUT + toast · **cấm** fake |
| GAP-MOB-MEPROF-PWD-01 | Đổi MK | POST + toast · confirm local |
| GAP-MOB-MEPROF-EMAIL-01 | GET thiếu Email | empty OK · vẫn PUT |
| GAP-MOB-MEPROF-ORG-01 | org subtitle | **không** invent · ẩn phụ |
| GAP-MOB-MEPROF-CITIZEN-01 | CCCD | display-only nếu GET · **cấm** PUT |
| AC-D-01 | offline | toast lỗi · fallback lastName · **cấm** fake 200 |
| AC-D-03 | leave dirty | DES-MOB-LEAVE · **cấm** native alert |
| AC-D-04 | alert | **cấm** system · Toast/modal only |
| AC-D-05 | keyboard | CTA không đè |
| AC-D-06 | safe area | TopBar + scroll + CTA + tab |
| AC-F-01 | appear | GET bind · empty email OK |
| AC-F-02 | validate | fullName trống → không PUT |
| AC-F-03 | save | PUT · toast ok · **cấm** fake |
| AC-F-04 | change pwd | POST · confirm local · toast |
| AC-F-05 | error | toast lỗi · giữ form |
| AC-F-06 | dual parity | cùng copy zones |
| AC-F-07 | entry | Me → push · **cấm** no-op |
| AC-F-08 | org | **cấm** invent |
| AC-F-09 | ≠ admin | **cấm** gộp settings/logout/users |
| GAP-TAB-01 | tabs none | shell Tab 5 giữ |
| DEFER | bezel HTML | chrome native HIG/Material |

## Gate

Must open = **0** · packet §1–§9 đủ · handoff SA (`be/solution-discovery.md` pending).

## Version meta

| Field | Value |
|-------|-------|
| skillId | mobile-ui-ux-analy |
| skillVersion | 2026.08.25.01 |
| schemaVersion | 1 |
| generatedAt | 2026-08-31T02:15:00.000Z |
| contentHash | sha256:me-profile-control-hint-20260830 |
| designContentHash | sha256:me-profile-design-20260831 |
| taskId | `task_0e0676c6` |

---
<!-- Version meta: skillId=mobile-ui-ux-analy skillVersion=2026.08.25.01 schemaVersion=1 -->
