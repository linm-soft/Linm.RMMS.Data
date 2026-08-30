# UX analy — feedback

**Sources:** `ui/prototype/ios/index.html` · `ui/prototype/android/index.html` · `ui/design.md` · PO · DA controlHint + real-data  
**Gate:** `/mobile-ui-ux-analy` §1–§9 · **REQUIRED** trước Dev  
**Slash:** `/mobile-ui-ux-analy` · `task_fc39397c` · `2026-08-29T06:06:00.000Z`  
**Brand tokens:** Primary `#0C84C0` · deep `#086A9A` · success `#34C759` · surface `#F2F2F7` · label `#1C1C1E` · muted `#8E8E93`  
**Hash skip:** DA contentHash `sha256:feedback-mobile-control-hint-20260829` · **cấm** re-scan DemoRoot (`GAP-DES-DEMO-RESCAN-01`)

## 1. IA

```
Login → Tab Tôi (shell Tab 5 · index me)
  → Hub #sc-me
       → row «Góp ý» #row-feedback #i-info → push #sc-feedback (owner)
  → #sc-feedback DES-MOB-FEEDBACK
       → FieldLabel «Nội dung góp ý»
       → LinmTextArea (required · placeholder SSOT)
       → Primary «Gửi góp ý» → POST integration/feedbacks
       → Toast «Đã gửi góp ý» | toast lỗi
       → leave dirty → DES-MOB-LEAVE (optional)
  → back → me
```

`tabs: none` trên surface · **cấm** invent segment (`GAP-TAB-01`). Tab shell **`me`** active.

## 2. Màn

| DES / sc-* | Tên VN | iOS chrome | Android chrome | CTA |
|------------|--------|------------|----------------|-----|
| DES-MOB-FEEDBACK / `#sc-feedback` | Góp ý | nav back «Tôi» + chevron · title 17 · Tab 5 me | icon-btn chevron · TopAppBar title · Nav 5 me | Gửi góp ý |
| DES-MOB-LEAVE / `#leave-modal` | Rời màn? | in-app modal | Material dialog card | Ở lại / Rời |

## 3. Zone

### DES-MOB-FEEDBACK

| Zone | Demo (user thấy) | Map row (html-to-native-map) | SwiftUI | Compose |
|------|------------------|------------------------------|---------|---------|
| Header | Tôi · Góp ý | A `.nav-bar` / `.top-bar` | `LinmTopBar` | same |
| Label | Nội dung góp ý | A `.field label` | FieldLabel 13 | same |
| Body | textarea | A `textarea` | `LinmTextArea` | same |
| Primary | Gửi góp ý | A `.btn-primary` | `LinmPrimaryButton` | same |
| Toast | Đã gửi / lỗi | D toast | `LinmToast` | same |
| Tab | me active | A `.tab-bar` / `.nav-bar` | `LinmTabBar` | NavigationBar |

**States:** default (empty · send disabled) · loading Create busy · validation toast empty · error/offline toast (**cấm** fake ok) · leave dirty modal · **cấm** system alert

### DES-MOB-LEAVE

| Zone | Demo | Map row | SwiftUI | Compose |
|------|------|---------|---------|---------|
| Title | Rời màn? | `h3` 17 | Text 17 semibold | same ~20 |
| Body | Nội dung đã gõ… | `p` 13 | Text 13 | same |
| Stay | Ở lại | `.cancel` | secondary | same |
| Go | Rời | `.ok` | primary | same |

**Cấm** `UIAlertController` / `AlertDialog` hệ thống (`AC-D-04`).

## 4. Copy SSOT

Nhãn lấy đúng HTML dual — **cấm** invent / lệch iOS↔Android (trừ back chrome: iOS có chữ «Tôi»).

**Cấm trên máy:** watermark «bản Gói N» · device label «iPhone»/«· Android» · «Có mạng» · fake toast ok · citizen copy · category pills P1.

## 5. Brand

| Token | Hex | Dùng |
|-------|-----|------|
| Primary | `#0C84C0` | CTA · tab selected · tint |
| Deep | `#086A9A` | accent |
| Surface | `#F2F2F7` | nền |
| Card | `#FFFFFF` | textarea / modal |
| Label / muted | `#1C1C1E` / `#8E8E93` | title / label / placeholder |

**Cấm** skin đỏ Ministry / CCCD (`GAP-MOB-BRAND-01`).

## 6. Signal

Không pill mạng trên pack này · **cấm** tap-cycle proto · **cấm** «Có mạng» (`AC-D-08`).

## 7. Pictogram

| id | Motif | Native |
|----|-------|--------|
| `#i-chevron-left` | `M15 5l-7 7 7 7` | SF `chevron.left` / Material `ArrowBack` |
| `#i-info` | circle + stem (Me entry) | SF `info.circle` / Material `Info` |
| `#i-home` `#i-mappin` `#i-warning` `#i-wrench` `#i-person` | shell Tab 5 | reuse shell |

**Cấm** invent tab icon / segment icon mới.

## 8. Motion

Pack P1: toast fade ~2.4s · leave modal backdrop · primary busy spinner · keyboard avoid CTA · **không** bắt buộc `/wf-anim` ship.

## 9. GAP / Device

| ID | Demo vs native | Quyết định |
|----|----------------|------------|
| GAP-MOB-FB-PACK-01 | sheet meta vs full screen | **sheet** pack · surface **screen** · chốt |
| GAP-MOB-FB-NAV-01 | Me toast → push | **IN** · push owner |
| GAP-MOB-FB-SCR-01 | thiếu màn | **IN** · DES-MOB-FEEDBACK |
| GAP-MOB-FB-BODY-01 | textarea | bind SSOT |
| GAP-MOB-FB-SEND-01 | CTA | POST + toast |
| GAP-MOB-FB-DATA-01 | API | `POST integration/feedbacks` |
| GAP-MOB-FB-CAT-01 | category UI | **P1** default `de-xuat` · **không** pill · P2 optional |
| GAP-MOB-FB-CTX-PATH-01 | CTX alias | cite live · SA |
| AC-D-01 | offline | toast lỗi · **cấm** fake 200 |
| AC-D-03 | leave dirty | DES-MOB-LEAVE · **cấm** native alert |
| AC-D-04 | alert | **cấm** system · Toast/modal only |
| AC-D-05 | keyboard | CTA không đè |
| AC-D-06 | safe area | TopBar + scroll + CTA + tab |
| AC-F-01 | appear | form trống · session bind ready |
| AC-F-02 | validate | body trống → không POST |
| AC-F-03 | send | POST · toast ok · **cấm** fake |
| AC-F-04 | error | toast lỗi · giữ form |
| AC-F-05 | dual parity | cùng copy zones |
| AC-F-06 | entry | Me → push · **cấm** toast-only |
| AC-F-07 | ≠ citizen | subtitle phần mềm |
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
| generatedAt | 2026-08-29T06:06:00.000Z |
| contentHash | sha256:feedback-mobile-control-hint-20260829 |
| taskId | `task_fc39397c` |

---
<!-- Version meta: skillId=mobile-ui-ux-analy skillVersion=2026.08.25.01 schemaVersion=1 -->
