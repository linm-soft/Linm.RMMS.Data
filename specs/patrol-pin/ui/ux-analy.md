# UX analy — patrol-pin

**Sources:** `ui/prototype/ios/index.html` · `ui/prototype/android/index.html` · `ui/design.md` · PO · DA controlHint+real-data  
**Gate:** `/mobile-ui-ux-analy` §1–§9 · **REQUIRED** trước Dev  
**Slash:** `/mobile-ui-ux-analy` · `task_4e8a5d46` · `2026-09-12T12:10:00.000Z` · `changeScope=edit_page` · `GAP-MOB-PIN-PERSIST-01`  
**Brand tokens:** Primary `#0C84C0` · success `#34C759` · surface `#F2F2F7` · label `#1C1C1E` · muted `#8E8E93`

## 1. IA

```
Login → Tab Tuần đường (shell Tab 5 · index giữ)
  → Hub #sc-patrol-home
       → CTA DES-MOB-CI-PIN-HERE (owner)
            → GPS allow → toast success → DES-MOB-HANDOFF-CHECKIN sheet (real)
                 → Tiếp tục → sibling patrol-checkin (sessionId+LocationFix)
                 → Để sau → đóng · payload giữ local nếu cần
            → GPS deny → DES-MOB-GPS-DENY modal · không handoff
            → GPS timeout → toast timeout · không handoff
            → Offline → toast pin · queue · không sheet đến khi online
  → Push Bản đồ ca #sc-patrol-map (reuse CTA · pin .here + follow)
```

`tabs: none` trên pack · **cấm** invent segment (`GAP-TAB-01`). Surface map demo = `?surface=map`.

## 2. Màn

| DES / sc-* | Tên VN | iOS chrome | Android chrome | CTA |
|------------|--------|------------|----------------|-----|
| DES-MOB-CI-PIN-HERE / `#sc-patrol-home` | Ghim · hub | Large title Tuần đường · Tab 5 | TopAppBar · Nav 5 | Ghim vị trí hiện tại |
| DES-MOB-CI-PIN-HERE / `#sc-patrol-map` | Ghim · map | Large title Bản đồ ca · overlay card | TopAppBar Bản đồ ca · card | cùng CTA · pin `.here` |
| DES-MOB-GPS-DENY / `#modal-gps` | Định vị bị tắt | in-app modal card | Material dialog card | Sao chép hướng dẫn / Để sau |
| DES-MOB-HANDOFF-CHECKIN / `#sheet-handoff-checkin` | Handoff Ghi điểm tuần | bottom sheet | Material bottom sheet | Tiếp tục / Để sau · **không** form |

## 3. Zone

### DES-MOB-CI-PIN-HERE (hub)

| Zone | Demo (user thấy) | Map row | SwiftUI | Compose |
|------|------------------|---------|---------|---------|
| Header | Tuần đường | large-title | `navigationTitle` large | `LargeTopAppBar` |
| Body | Ca đang chạy · QL.1 · Km… | `.hero` | hero card Text | card Text |
| CTA | Ghim vị trí hiện tại + `#i-mappin` | `.pin-here` | `LinmPrimaryButton` + `LinmMapPinGlyph` | same |
| Hint | Sau khi ghim, mở Ghi điểm tuần… | `.hint` | Text 13 muted | same |
| Toast | Đã ghim… · route · ±N m | `#toast` | `LinmToast` | same |

**States:** default · loading loc · GPS deny · GPS timeout · offline queue · handoff sheet · leave N/A

### DES-MOB-CI-PIN-HERE (map reuse)

| Zone | Demo | Map row | SwiftUI | Compose |
|------|------|---------|---------|---------|
| Map | road canvas · pin plan | `.map-wrap` | MapKit | Maps Compose |
| Pin here | `.pin.here` sau allow | `#pin-here` | annotation | marker |
| CTA card | cùng nhãn + icon | `.map-pin-here` | same kit | same kit |

### DES-MOB-GPS-DENY

| Zone | Demo | Map row | SwiftUI | Compose |
|------|------|---------|---------|---------|
| Title | Định vị bị tắt | `h3` 17 | Text 17 semibold | same |
| Body | Cần vị trí… RMMS. | `p` 13 | Text 13 | same |
| Primary | Sao chép hướng dẫn | `.btn` | `LinmPrimaryButton` | same |
| Secondary | Để sau | `.btn.secondary` | `LinmSecondaryButton` | same |

**Cấm** `UIAlertController` / `AlertDialog` hệ thống (`AC-D-04`).

### DES-MOB-HANDOFF-CHECKIN (new · persist)

| Zone | Demo | Map row | SwiftUI | Compose |
|------|------|---------|---------|---------|
| Sheet | `#sheet-handoff-checkin` | `.sheet` | `.sheet` | Material bottom sheet |
| Title | Ghi điểm tuần | `h3` 17 | Text | same |
| Meta | Lý trình · route · Vị trí · ±m | `.meta` 13 | Text muted | same |
| Primary | Tiếp tục | `.btn` | `LinmPrimaryButton` | same |
| Secondary | Để sau | `.btn.secondary` | `LinmSecondaryButton` | same |

**Cấm** PlanPointLabel / MatchOk / camera / note fields trên sheet này — form = sibling.

## 4. Copy SSOT

Nhãn lấy đúng HTML dual — **cấm** invent / lệch iOS↔Android.

**Cấm trên máy:** watermark «bản Gói N» · device label · «Có mạng» · stub «Handoff · …» · form fields Ghi điểm tuần · fake lat/lng text.

## 5. Brand

| Token | Hex | Dùng |
|-------|-----|------|
| Primary | `#0C84C0` | CTA · tab selected · pin plan · sheet primary |
| Danger pin | `#FF3B30` / `#E53935` | pin `.here` sau ghim |
| Surface | `#F2F2F7` | nền |
| Card | `#FFFFFF` | hero · modal · sheet |

**Cấm** skin đỏ Ministry / CCCD (`GAP-MOB-BRAND-01`).

## 6. Signal

Không pill mạng trên pack này. Loc = OS permission path only · **cấm** tap-cycle proto · **cấm** «Có mạng». Offline = toast queue copy (không signal chrome).

## 7. Pictogram

| id | Motif | Native |
|----|-------|--------|
| `#i-mappin` | `M12 21s7-5.2…` + circle r=2.2 (mobile-p1 SSOT) | `LinmMapPinGlyph` · cùng `d=` dual |

Shell tab icons reuse app shell — **cấm** invent tab icon mới cho pack.

## 8. Motion

Không `/wf-anim` trên pack. Toast fade ~2.4s · modal backdrop fade · sheet slide-up sau toast. Map: sau allow hiện pin `.here` + camera follow (Dev).

## 9. GAP / Device

| ID | Demo vs native | Quyết định |
|----|----------------|------------|
| AC-GPS-01 | allow → toast route±m → sheet | Live CL/Fused · **cấm** fake |
| AC-GPS-02 | deny → modal | in-app only · **không** handoff |
| AC-GPS-03 | timeout toast | **cấm** fake coords · **không** handoff |
| AC-OFF-01 | offline ghim + queue | toast queue · sync sibling / offline pack |
| AC-PERSIST-01 | handoff real · POST sibling | pin **không** auto-POST |
| AC-SIB-01 | không form check-in | sheet payload only |
| AC-TYP-01 | label 13 · btn ≥16 · title 17 | giữ |
| GAP-TAB-01 | tabs none | shell Tab 5 giữ |
| GAP-DES-DEMO-RESCAN-01 | hash skip | **không** re-scan · dùng control-hint+real-data |
| DEFER | bezel HTML | chrome native HIG/Material |

## Gate

Must open = **0** · packet §1–§9 đủ · handoff SA (`be/solution-discovery.md` pending · re-SA edit_page).
