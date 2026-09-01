# UX analy — asset-collect

**Sources:** `ui/prototype/ios/index.html` · `ui/prototype/android/index.html` · `ui/design.md` · PO · DA controlHint + real-data  
**Gate:** `/mobile-ui-ux-analy` §1–§9 · **REQUIRED** trước Dev  
**Slash:** `/mobile-ui-ux-analy` · `task_c6bccf74` · `2026-08-31T00:00:00.000Z`  
**Brand tokens:** Primary `#0C84C0` · deep `#086A9A` · success `#34C759` · orange `#FF9500` · surface `#F2F2F7` · label `#1C1C1E` · muted `#8E8E93`  
**Hash skip:** DA contentHash `sha256:asset-collect-control-hint-20260830` · real-data `sha256:asset-collect-real-data-20260830` · **cấm** re-scan DemoRoot (`GAP-DES-DEMO-RESCAN-01`)

## 1. IA

```
Login → Tab Trang Chủ (shell Tab 5 · index home)
  → asset-hub
       → tile Thủ công #i-plus → push #sc-asset-collect (owner)
  → #sc-asset-collect DES-MOB-ASSET-COLLECT
       → Select loại * (GET asset-types)
       → Text tên/mô tả *
       → Text readonly tuyến/lý trình * (Route+KmFrom)
       → Text readonly GPS ghim * (Lat,Lng · ±m)
       → Select tình trạng * (init-data Statuses · dual)
       → Section Ảnh + PhotoRow + openCapture('asset')
       → Primary POST asset/road-assets · toast Code
       → GPS deny → DES-MOB-GPS-DENY (CTA off)
       → dirty leave → DES-MOB-LEAVE
  → back → asset-hub
```

`tabs: none` trên surface · **cấm** invent segment (`GAP-TAB-01`). Tab shell **`home`** active.

## 2. Màn

| DES / sc-* | Tên VN | iOS chrome | Android chrome | CTA |
|------------|--------|------------|----------------|-----|
| DES-MOB-ASSET-COLLECT / `#sc-asset-collect` | Thu thập thủ công | nav back «Tài sản» + chevron · title 17 · Tab 5 home | icon-btn chevron · TopAppBar title ~20 · Nav 5 home | Thêm tài sản |
| DES-MOB-GPS-DENY / `#modal-gps` | Định vị bị tắt | in-app modal | Material dialog card | Sao chép hướng dẫn / Để sau |
| DES-MOB-LEAVE / `#modal-leave` | Bỏ thay đổi? | in-app modal | same | Bỏ thay đổi / Tiếp tục sửa |
| Entry (parent) | Thủ công | hub tile `#i-plus` | same | wire push · không toast-only |

## 3. Zone

### DES-MOB-ASSET-COLLECT

| Zone | Demo (user thấy) | Map row (html-to-native-map) | SwiftUI | Compose |
|------|------------------|------------------------------|---------|---------|
| Header | Tài sản · Thu thập thủ công | A `.nav-bar` / `.top-bar` | `LinmTopBar` | same |
| typeSelect | Loại tài sản * / Cột km… | A `.field` select | `LinmSelect` | same |
| nameField | Tên / mô tả * / Cột Km 1556 | A `.field` input | `LinmTextField` | same |
| routeKm | Tuyến / lý trình * / QL.1… | A `.field` readonly | TextField | same |
| gpsPin | Định vị ghim * / 11.5300… | A `.field` readonly | TextField | same |
| statusField | Tình trạng / Tốt | A `.field` select | `LinmSelect` | same · dual |
| photoLabel | Ảnh | A `.section-label` | Text 13 | same · dual |
| photos | camera slot | A `.photo-row` | PhotoRow | same |
| addPhoto | `#i-camera` | A `.photo-slot` | CameraButton | same |
| btnAdd | Thêm tài sản | A `.btn-primary` | `LinmPrimaryButton` | same |
| Toast | Đã thêm… · TS-… | D toast | `LinmToast` | same |
| Tab | home active | A `.tabbar` / `.nav` | `LinmTabBar` | NavigationBar |

**States:** default (type Cột km · name · route · GPS fix · status Tốt · empty photo) · loading Create · empty catalog (disable CTA) · GPS deny modal + CTA off · camera deny toast · leave dirty confirm · 422/mạng toast · offline toast · **cấm** fake 200

### DES-MOB-GPS-DENY

| Zone | Demo | Map row | SwiftUI | Compose |
|------|------|---------|---------|---------|
| Title | Định vị bị tắt | `h3` 17 | Text 17 semibold | ~20 |
| Body | Cần vị trí… RMMS. | `p` 13 | Text 13 | same |
| Primary | Sao chép hướng dẫn | `.btn-primary` | `LinmPrimaryButton` | same |
| Secondary | Để sau | `.btn-secondary` | `LinmSecondaryButton` | same |

**Cấm** `UIAlertController` / `AlertDialog` hệ thống (`AC-D-04`).

### DES-MOB-LEAVE

| Zone | Demo | Map | Notes |
|------|------|-----|-------|
| Title / body | Bỏ thay đổi? / Nội dung chưa lưu… | in-app | AC-D-03 |
| Primary / secondary | Bỏ thay đổi / Tiếp tục sửa | kit buttons | **cấm** native alert |

## 4. Copy SSOT

Nhãn lấy đúng HTML dual + PO §5 — **cấm** invent / lệch iOS↔Android field bind (trừ back chrome: iOS có chữ «Tài sản»).

**Cấm trên máy:** watermark «bản Gói N» · device label «iPhone»/«· Android» · «Có mạng» · fake lat/lng · loanword Offline/GPS như title · sheet chrome · gộp AI/adjust.

## 5. Brand

| Token | Hex | Dùng |
|-------|-----|------|
| Primary | `#0C84C0` | CTA · tab selected · tint |
| Deep | `#086A9A` | accent |
| Orange | `#FF9500` | deny/warn accents |
| Surface | `#F2F2F7` | nền |
| Card | `#FFFFFF` | fields · modal |
| Label / muted | `#1C1C1E` / `#8E8E93` | title / section / label |

**Cấm** skin đỏ Ministry / CCCD (`GAP-MOB-BRAND-01`).

## 6. Signal

Không pill mạng trên pack này. GPS = OS permission path only · **cấm** tap-cycle proto · **cấm** «Có mạng» (`AC-D-08`) · **cấm** gõ tay lat/lng.

## 7. Pictogram

| id | Motif | Native |
|----|-------|--------|
| `#i-chevron-left` | `M15 5l-7 7 7 7` | SF `chevron.left` / Material `ArrowBack` |
| `#i-camera` | body + r=3.5 | SF `camera` / Material `PhotoCamera` |
| `#i-plus` | cross | hub entry · `plus` / `Add` |
| `#i-home` `#i-mappin` `#i-warning` `#i-wrench` `#i-person` | shell Tab 5 | reuse shell |

**Cấm** invent tab icon / segment icon mới.

## 8. Motion

Pack P1: toast fade ~2.4s · modal backdrop fade · Create busy spinner trên primary · photo slot append · leave confirm · **không** bắt buộc `/wf-anim` ship.

## 9. GAP / Device

| ID | Demo vs native | Quyết định |
|----|----------------|------------|
| GAP-MOB-ASSET-COLLECT-PACK-01 | sheet meta vs full screen | **screen** · chốt · **cấm** sheet |
| GAP-MOB-ASSET-COLLECT-STATUS-01 | Android thiếu Tình trạng | **Design đóng** · dual `LinmSelect` |
| GAP-MOB-ASSET-COLLECT-TYPE-01 | option Cầu iOS-only | catalog live = SSOT · demo preview dual 5 options |
| GAP-MOB-ASSET-COLLECT-MEDIA-01 | media upload | local PhotoRow only · SA Signed |
| GAP-MOB-ASSET-COLLECT-ROUTE-01 | 1 field gộp | display · wire Route+KmFrom |
| GAP-MOB-ASSET-COLLECT-GPS-01 | deny / poor | modal · CTA off · **cấm** fake |
| GAP-MOB-ASSET-COLLECT-NAV-01 | hub toast only | wire push form |
| GAP-MOB-ASSET-COLLECT-CTA-01 | — | POST create + toast Code |
| AC-D-01 | offline | toast lỗi · **cấm** fake 200 |
| AC-D-02 | GPS deny | modal · CTA disabled |
| AC-D-03 | leave dirty | in-app confirm |
| AC-D-04 | alert | **cấm** system · Toast/modal only |
| AC-D-05 | keyboard | nameField · không đè Primary |
| AC-D-06 | safe area | TopBar + scroll + CTA + tab |
| AC-D-11 | camera deny | toast · **cấm** crash |
| AC-F-01 | appear | GET types + init-data · GPS |
| AC-F-02 | empty catalog | empty select · disable CTA |
| AC-F-03 | GPS fix | update gpsPin · enable CTA |
| AC-F-04 | Submit | POST · chặn thiếu required |
| AC-F-05 | 422 / mạng | toast · giữ form |
| AC-F-06 | dual parity | Status + photo label Android |
| AC-F-07 | entry | hub → push · **cấm** toast-only |
| AC-F-08 | Source | `manual` only |
| AC-F-09 | Photo | local · **không** block Create |
| GAP-TAB-01 | tabs none | shell Tab 5 giữ · home |
| kit_missing | PhotoRow | **approve** compose |
| DEFER | bezel HTML | chrome native HIG/Material |
| GAP-DES-DEMO-RESCAN-01 | hash skip | **cấm** re-scan · dùng DA+PO |

## Gate

Must open = **0** · packet §1–§9 đủ · handoff SA (`be/solution-discovery.md` pending).

## Version meta

| Field | Value |
|-------|-------|
| skillId | mobile-ui-ux-analy |
| skillVersion | 2026.08.25.01 |
| schemaVersion | 1 |
| generatedAt | 2026-08-31T00:00:00.000Z |
| contentHash | sha256:asset-collect-control-hint-20260830 |
| realDataHash | sha256:asset-collect-real-data-20260830 |

---
<!-- Version meta: skillId=mobile-ui-ux-analy skillVersion=2026.08.25.01 schemaVersion=1 -->
