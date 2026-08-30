# UX analy — patrol-checkin

**Sources:** `ui/prototype/ios/index.html` · `ui/prototype/android/index.html` · `ui/design.md` · PO · DA controlHint + real-data (hash skip · **cấm** re-scan DemoRoot)  
**Gate:** `/mobile-ui-ux-analy` §1–§9 · **REQUIRED** trước Dev  
**Slash:** `/mobile-ui-ux-analy` · `task_34eb58bb` · `2026-08-28T20:05:00.000Z`  
**Brand tokens:** Primary `#0C84C0` · success `#34C759` · danger `#FF3B30` / `#E53935` · surface `#F2F2F7` · label `#1C1C1E` · muted `#8E8E93`

## 1. IA

```
Login → Tab Tuần đường (shell Tab 5 · index giữ)
  → Hub patrol-home / Map patrol-map / handoff patrol-pin
       → openSheet('checkin') · DES-MOB-PAT-CHECKIN-SHEET
            → GPS allow + matchOk → Lưu / Ghi nhận → toast · DES-MOB-CI-DETAIL
            → matchOk=false → banner đỏ · disable primary · toast chặn
            → GPS deny → DES-MOB-GPS-DENY (reuse)
            → dirty leave → DES-MOB-LEAVE
            → camera → openCapture('checkin') · PhotoRow
```

`tabs: none` trên pack · **cấm** invent segment (`GAP-TAB-01`). Demo states: `?mismatch=1` · `?deny=1` · `?surface=detail`.

## 2. Màn

| DES / sc-* | Tên VN | iOS chrome | Android chrome | CTA |
|------------|--------|------------|----------------|-----|
| DES-MOB-PAT-CHECKIN-SHEET / `#sheet-checkin` | Ghi điểm tuần | Bottom sheet nav Hủy/Lưu | Modal bottom sheet | Ghi nhận điểm tuần |
| DES-MOB-LOC-MISMATCH | Banner đúng/sai | Banner 13 | same | gate |
| DES-MOB-LEAVE / `#modal-leave` | Bỏ thay đổi? | in-app card | Material dialog | Bỏ / Tiếp tục sửa |
| DES-MOB-GPS-DENY / `#modal-gps` | Định vị bị tắt | in-app (reuse) | same | Sao chép / Để sau |
| DES-MOB-CI-DETAIL / `#sc-checkin-detail` | Ghi điểm tuần | TopBar + back Ca | TopAppBar | back |

## 3. Zone

### DES-MOB-PAT-CHECKIN-SHEET

| Zone | Demo (user thấy) | Map row | SwiftUI | Compose |
|------|------------------|---------|---------|---------|
| Nav | Hủy · Ghi điểm tuần · Lưu | `.sheet-nav` | `LinmBottomSheet` trailing | same |
| Banner | Đúng/Sai điểm · … | `#ci-match-banner` | Banner view | same |
| Fields | Điểm KH · Tuyến · GPS · Cách điểm | `.field` readonly | `LinmTextField` | same |
| Nội dung | TextArea | `textarea` | `LinmTextArea` | same |
| Ảnh | section-label + PhotoRow + `#i-camera` | `.section-label` · `.photo-row` | PhotoRow + icon | same · **parity label** |
| Primary | Ghi nhận điểm tuần | `#ci-save-btn` | `LinmPrimaryButton` | same |
| Secondary | Hủy | `.btn.secondary` | `LinmSecondaryButton` | same |
| Toast | Đã ghi… / Chặn… | `#toast` | `LinmToast` | same |

**States:** default matchOk · mismatch · GPS deny · offline/POST GAP (queue) · dirty leave · loading GPS · empty photo · after-save detail

### DES-MOB-CI-DETAIL

| Zone | Demo | Map row | SwiftUI | Compose |
|------|------|---------|---------|---------|
| Title | Ghi điểm tuần | `.nav-title` | `LinmTopBar` | same |
| Back | Ca | chevron | Back | `ArrowBack` |
| Banner | Đã lưu · {time} | `.banner.ok` | Banner | same |
| Rows | Điểm KH · Cách điểm | `.row` | ListRow | same |

### DES-MOB-LEAVE / DES-MOB-GPS-DENY

| Zone | Demo | SwiftUI | Compose |
|------|------|---------|---------|
| Title / body / 2 CTA | copy SSOT dual | in-app overlay | Material dialog card |

**Cấm** `UIAlertController` / `AlertDialog` hệ thống (`AC-D-04`).

## 4. Copy SSOT

Nhãn lấy đúng HTML dual + PO §5 — **cấm** invent / lệch iOS↔Android (trừ chrome HIG/Material).

**Cấm trên máy:** watermark «bản Gói N» · device label · «Có mạng» · pin form · invent path label.

## 5. Brand

| Token | Hex | Dùng |
|-------|-----|------|
| Primary | `#0C84C0` | CTA · tab selected · camera glyph |
| Success | `#34C759` / Android `#C8E6C9` | match ok banner |
| Danger | `#FF3B30` / `#E53935` | mismatch banner |
| Surface | `#F2F2F7` | nền · sheet |
| Card | `#FFFFFF` | fields · modal |

**Cấm** skin đỏ Ministry / CCCD (`GAP-MOB-BRAND-01`).

## 6. Signal

Không pill mạng trên pack. Loc / match = OS GPS + haversine · **cấm** tap-cycle proto · **cấm** «Có mạng» · **cấm** fake lat/lng.

## 7. Pictogram

| id | Motif | Native |
|----|-------|--------|
| `#i-camera` | `M4 8h3l2-2h6l2 2h3v11H4V8z` + circle r=3.5 (mobile-p1 SSOT) | kit camera · cùng `d=` dual |
| `#i-chevron-left` | chevron back | SF / Material |

Shell tab icons reuse app shell — **cấm** invent tab icon mới cho pack.

## 8. Motion

Không `/wf-anim` trên pack. Sheet slide-up · toast fade ~2.4s · modal backdrop fade. Match banner color swap khi mismatch.

## 9. GAP / Device

| ID | Demo vs native | Quyết định |
|----|----------------|------------|
| AC-GPS-01 | allow → GPS + dist + banner | Live CL/Fused · **cấm** fake |
| AC-GPS-02 | deny → modal | in-app only |
| AC-GPS-03 | timeout | toast / giữ sheet · **cấm** fake |
| AC-MATCH-01/02 | mismatch gate | disable Lưu + Ghi nhận |
| AC-CAM-01 | `#i-camera` attach | local URI P1 |
| AC-OFF-01 | POST MISSING | local queue `patrol-offline` · stamp GAP-MOB-BFF-01 |
| AC-D-03 | dirty leave | DES-MOB-LEAVE |
| AC-D-04 | native alert | **cấm** |
| AC-TYP-01 | label 13 · field/btn ≥16 · title 17 | giữ |
| GAP-TAB-01 | tabs none | shell Tab 5 giữ |
| AC-F-05 | Android Ảnh label | parity iOS SSOT |
| DEFER | bezel HTML | chrome native HIG/Material |

## Gate

Must open = **0** · packet §1–§9 đủ · handoff SA (`be/solution-discovery.md` pending).

## Version meta

| Field | Value |
|-------|-------|
| skillId | mobile-ui-ux-analy |
| skillVersion | 2026.08.25.01 |
| generatedAt | 2026-08-28T20:05:00.000Z |
| contentHash | sha256:patrol-checkin-control-hint-20260828 |

---
<!-- Version meta: skillId=mobile-ui-ux-analy skillVersion=2026.08.25.01 -->
