# Design — mobile-p1 (iOS + Android)

| Field | Value |
|-------|-------|
| feature | `mobile-p1` |
| pack | Mobile Gói B · HĐ `37001-08/2026-LIC/LINM-JNET` |
| packKind | mobile |
| platforms | **iOS 390×844** + **Android 412×915** |
| stack P1 | SwiftUI style + Material 3 — **cấm** Flutter / KMP |
| context | `../mobile/context.md` |
| brief | `map-feature/mobile-design-brief.md` |
| legacy | `docs/mobile-legacy/Hướng dẫn sử dụng phần mềm.docx` · `docs/context/15-SCREEN-AI-MAP.md` |
| status | `await_confirm` |
| design_confirm | pending (IA v3) |
| iaVersion | **v3.3 — Thông tin tài sản · form sự cố sau chọn TS** |
| layoutRef | `docs/mobile-legacy/layout/*.jpg` — khung VNeID · brand RMMS xanh |
| catalog32 | `docs/context/features/asset-kcht-32.md` |
| updatedAt | 2026-08-18T16:05:00.000Z |

## 0. Context

| ID | Path |
|----|------|
| CTX-MOB | `specs/mobile-p1/mobile/context.md` |
| CTX-BRIEF | `map-feature/mobile-design-brief.md` |
| CTX-LEGACY | `docs/mobile-legacy/Hướng dẫn sử dụng phần mềm.docx` |
| CTX-MAP | `docs/context/15-SCREEN-AI-MAP.md` |
| CTX-* | `docs/context/features/{login,patrol,attendance,incident,asset,gis,ai-vision,ai-asset-detect,camera-connect,maintenance,ops,estimate,feedback}.md` |

Web demo = field reference — **cấm** clone `LinPageLayout` / GOVOne.

## 0b. Đánh giá prototype v1 vs app cũ

Nguồn: mục **Trên điện thoại** trong `Hướng dẫn sử dụng phần mềm.docx` + catalog `15-SCREEN-AI-MAP` §1.1.

| App cũ (guide) | Việc user làm | Prototype v1 | Gap |
|----------------|---------------|--------------|-----|
| **Check-in** | + điểm tuần · online/offline · lịch sử · ≥3/ngày/tuyến · chấm công | Tab **Hiện trường** (patrol + attendance) | Tên lệch guide · Giám sát không có lối riêng |
| **Giám sát** | Lịch sử CI list + bản đồ · lọc tuyến/ngày · thông báo | Chôn trong Tôi / lịch sử ca | **GAP-DES-MOB-IA-01** |
| **Vấn đề** | Tra cứu · trao đổi · ghi nhận on/off · tìm đường · giao việc · bản đồ SC | Tab **Sự cố** | Tên lệch · thiếu lối AI mặt đường trong cùng app |
| **Tài sản** | **Thu thập** · **cập nhật** · **xem bản đồ** (vd. cột km) · ảnh/GPS | List tra cứu dưới tab Bản đồ · **chỉ xem** | **GAP-DES-MOB-IA-02** — mất menu con thu thập / bớt |
| **Công việc** | Chi tiết · trao đổi · cập nhật TT · lọc tuyến · ảnh | Drawer Tôi | **GAP-DES-MOB-IA-03** — không phải app cấp 1 |
| **Lưu trữ** | Queue CI + sự cố · sync khi có mạng | Hàng đợi dưới ca / Tôi | Giữ — map Lưu trữ |
| **Góp ý** | Feedback phần mềm | Thiếu | **GAP-DES-MOB-IA-04** |
| **Cập nhật thông tin** | SĐT · email · ảnh · đổi MK | Tab Tôi | Giữ |

**Lệch IA v1 (5 tab Hiện trường · Sự cố · Bản đồ · Nhận diện · Tôi):**

1. **Bản đồ** và **Nhận diện** là tab kỹ thuật — app cũ không có; bản đồ nằm *trong* Check-in / Vấn đề / Tài sản.
2. **Tài sản** bị hạ thành tra cứu dưới Bản đồ — mất quy trình guide: chọn loại → thêm cột km / cập nhật / xem map.
3. **Camera AI** (hiện đại) bị tách tab Nhận diện, không gắn menu Tài sản — user không thấy «thu thập bằng camera».
4. **Công việc** / **Giám sát** / **Góp ý** không còn là lối cấp 1 như launcher cũ.

**Nguyên tắc v3 (enterprise QLĐB / nhà nước VN):**

1. **Cổng nghiệp vụ = Trang Chủ 6 ô** — đúng app cũ (ảnh hướng dẫn): Giám sát · Check In · Công việc · Vấn đề · Tài sản · Lưu trữ. Chào + chức vụ + chuông + hồ sơ.
2. **Tab 5 giữ** — thao tác hàng ngày không phải về launcher: Trang Chủ · Check-in · Vấn đề · Công việc · Tôi. (HIG/Material: tối đa 5.)
3. **Tài sản không tab** — vào từ ô launcher (app cũ) → hub: thủ công / Camera AI / danh sách / cập nhật-bớt / bản đồ.
4. **Trong từng module** giữ cấu trúc trang cũ: **Danh sách | Bản đồ**, card dày (lý trình · đơn vị · người · giờ · ảnh · trạng thái), hàng thao tác (trao đổi / giao việc / xem / ghim), FAB +.
5. Chrome hiện đại (SF / Material) — **không** clone skin JCNET/GOVOne.

**Vì sao hybrid (không chỉ tab, không chỉ launcher):**

| Người dùng | Việc hàng ngày | Pattern |
|------------|----------------|---------|
| Tổ tuần đường (hiện trường) | Check-in ≥3/ngày · ghi vấn đề · thu thập TS · mất sóng | Tab Check-in / Vấn đề + ô Lưu trữ |
| Hạt / Chi cục (giao việc) | Danh sách công việc · lọc tuyến · cập nhật TT + ảnh/GPS | Tab Công việc + card giao việc |
| Lãnh đạo / giám sát | Xem check-in list+map · thông báo | Ô Giám sát trên Trang Chủ |
| Mọi vai | Tìm đúng hạng mục như app cũ | Launcher 6 ô = bản đồ tư duy đã học |

Thuật ngữ formal (Cục Đường bộ / QLĐB): **tuần đường · tuần kiểm · chấm công · điểm tuần · lý trình Km · điểm kế hoạch · sự cố / vấn đề · tài sản KCHT · hồ sơ tài sản · độ phủ · giao việc xử lý · thời hạn xử lý · khối lượng · lưu trữ (mất sóng)**.  
**Cấm** trên máy: SLA · GPS · Offline · Form · Check-in · hộ chiếu · xuất trình · tiện ích yêu thích.

## 1. IA + chrome (v3 — launcher + tab)

```
Login (ẩn tab) → Tab 5
├── Trang Chủ     greeting + 6 ô app cũ ★
│   ├── Giám sát     list CI + Bản đồ
│   ├── Check In     tuần đường | chấm công
│   ├── Công việc    list giao việc + ước lượng
│   ├── Vấn đề       Danh sách | Bản đồ + FAB
│   ├── Tài sản      HUB (thủ công / AI / cập nhật / map)
│   └── Lưu trữ      Check In Offline | Sự cố Offline
├── Check-in      shortcut ngày
├── Vấn đề        shortcut ngày
├── Công việc     shortcut ngày
└── Tôi           Hồ sơ · Lưu trữ · Góp ý · Camera xem · Cài đặt
```

Bản đồ **không** tab riêng — trong Giám sát / Check-in / Vấn đề / Tài sản.  
Nhận diện **không** tab — mặt đường ⊂ Vấn đề · TS ⊂ Tài sản hub.

| Surface | iOS | Android |
|---------|-----|---------|
| Frame | 390×844 · notch · home indicator | 412×915 · status · gesture nav |
| Nav | Large title / inline + chevron | LargeTopAppBar / small + Up |
| Tabs | UITabBar 5 · SF | NavigationBar 5 · Material |
| Sheet | `.sheet` detent | ModalBottomSheet |
| Create SC | Nav `+` / sheet | **FAB** |
| Asset hub | 2-cột tile (launcher hiện đại) | Same tiles · Material |
| Scroll | Overlay · ẩn track | Edge-to-edge |

## 1b. Icon SSOT (SF ↔ Material)

| Surface | SF Symbol | Material | Prototype |
|---------|-----------|----------|-----------|
| Tab Trang Chủ | `house` | `home` | `#i-home` |
| Tab Tuần đường | `mappin.and.ellipse` | `location_on` | `#i-mappin` |
| Tab Vấn đề | `exclamationmark.triangle` | `warning` | `#i-warning` |
| Tab Công việc | `wrench.and.screwdriver` | `handyman` | `#i-wrench` |
| Tab Tôi | `person.crop.circle` | `account_circle` | `#i-person` |
| Ô Tài sản | `cube` | `inventory_2` | `#i-cube` |
| Thu thập thủ công | `plus` | `add` | `#i-plus` |
| Thu thập bằng camera | `camera` | `photo_camera` | `#i-camera` |
| Cập nhật / bớt | `minus` | `remove` | `#i-minus` |
| Bản đồ TS | `scope` | `explore` | `#i-scope` |
| Giám sát | `list.bullet` | `monitor` | `#i-list` |
| Lưu trữ | `arrow.triangle.2.circlepath` | `sync` | `#i-sync` |
| Góp ý | `text.bubble` | `chat_bubble` | `#i-info` |
| Camera xem | `video` | `videocam` | `#i-video` |
| Ước lượng | `sum` | `calculate` | `#i-sum` |

**Cấm** emoji / chữ `P` / `bell` text.

## 2. Screens / zones (cùng `data-des-id`)

| Screen | `data-des-id` | iOS | Android |
|--------|---------------|-----|---------|
| Review doc | `DES-MOB-DOC-GUIDE` | Trái quyền · phải ngành | Same |
| Device | `DES-MOBILE-DEVICE` | Bezel 390×844 | Bezel 412×915 |
| Login | `DES-MOB-LOGIN` | Brand + form | Same fields · Material field |
| Login brand | `DES-MOB-LOGIN-BRAND` | AppLogo 192 · title **QUẢN LÝ BẢO TRÌ ĐƯỜNG BỘ** · nền `#F2F2F7` · **cấm** ô đen / «Hiện trường · …» | Same |
| Login form | `DES-MOB-LOGIN-FORM` | Grouped | OutlinedTextField |
| Tab bar | `DES-MOB-TABBAR` | 5: Trang Chủ · Check-in · Vấn đề · Công việc · Tôi | Same |
| Trang Chủ | `DES-MOB-HOME` | Greeting + 6 ô | Same |
| Greeting | `DES-MOB-HOME-HELLO` | Tên + chức vụ + đơn vị | Same |
| Lưới 6 ô | `DES-MOB-HOME-GRID` | 3×2 (VNeID fav) | Same |
| Ví hồ sơ TS | `DES-MOB-ASSET-WALLET` · `DES-MOB-HOME-WALLET` | Thẻ tuyến + 32 loại | Same |
| Phản ánh hiện trường | `DES-MOB-FIELD-REFLECT` · `DES-MOB-FIELD-KIND` | ⊂ Tuần đường | Same |
| Camera tuần | `DES-MOB-CAM-PATROL` · `DES-MOB-CAM-FINDER` | ⊂ Tuần đường | Same |
| Thông tin tài sản | `DES-MOB-ASSET-TYPE` | Nav **Thông tin tài sản** · CTA Ghi sự cố | Same |
| Form sự cố | `DES-MOB-INC-FORM` · `DES-MOB-INC-KIND` | Sau chọn loại · checklist + ảnh + nhận diện + định vị + giao việc | Same |
| Workflow animation | `DES-WF-ANIM-SCENE` · `STEPS` · `PHONE` · `LOG` | Xe máy + FOV · mất/gãy biển · Play/reset | Same HTML |
| Form 32 loại | `DES-MOB-ASSET-FORM` | ⊂ Thông tin tài sản · sửa thông số | Same |
| 32 loại | `DES-MOB-ASSET-32` | Lưới chọn loại | Same |
| Check-in home | `DES-MOB-PAT-HOME` | Large title Check-in | Same |
| Segment | `DES-MOB-PAT-SEG` | Tuần đường / Chấm công | FilterChips |
| Giám sát | `DES-MOB-SUPERVISE` | List CI + lọc + lối map | Same |
| Active / KPI | `DES-MOB-PAT-ACTIVE` · `DES-MOB-PAT-KPI` | Cards · CTA **Check-in** | Cards · CTA **Check-in** |
| Ghim vị trí hiện tại | `DES-MOB-CI-PIN-HERE` | Nút dưới hero + trên bản đồ | Same |
| Map ca | `DES-MOB-PAT-MAP` · `DES-MOB-OMS-PATROL` | OMS Leaflet · header **Check-in** | Same |
| Check-in sheet | `DES-MOB-PAT-CHECKIN-SHEET` | Sheet + match badge | BottomSheet |
| Location mismatch | `DES-MOB-LOC-MISMATCH` | Banner in-sheet | Same |
| History / detail / offline | `DES-MOB-PAT-LIST` · `DES-MOB-PAT-DETAIL` · `DES-MOB-PAT-OFFLINE` | Grouped | Cards |
| Attendance | `DES-MOB-ATT` | Hero GPS + 7-day | Same |
| Vấn đề list | `DES-MOB-INC-LIST` | List + `+` + lối AI mặt đường | List + **FAB** |
| Vấn đề detail | `DES-MOB-INC-DETAIL` | View | View |
| Vision capture | `DES-MOB-VIS-CAPTURE` | Ảnh + vị trí đã chốt + class | Same · **⊂ Vấn đề** |
| **Tài sản hub** | `DES-MOB-ASSET-HUB` | Tile 2 cột menu con | Same |
| Thu thập thủ công | `DES-MOB-ASSET-COLLECT` | Form loại + Km + ảnh + GPS | Same |
| Cập nhật / bớt | `DES-MOB-ASSET-ADJUST` | List + Cập nhật / Bớt | Same |
| Bớt confirm | `DES-MOB-ASSET-REMOVE` | In-app modal | Material dialog |
| Camera AI TS | `DES-MOB-ASSET-AI` | Shutter → class TS | Same |
| Detect HITL | `DES-MOB-DET-HITL` | Confirm/Dismiss · **⊂ Tài sản** | Same |
| Asset list | `DES-MOB-ASSET-LIST` | Search + rows | SearchBar + rows |
| Asset detail | `DES-MOB-ASSET-DETAIL` | View + sửa nếu từ Cập nhật | Same |
| GIS / bản đồ TS | `DES-MOB-GIS` · `DES-MOB-OMS-GIS` | OMS · **⊂ Tài sản** | Same |
| Công việc | `DES-MOB-MNT-LIST` | Tab root + lọc tuyến | Same |
| Estimate | `DES-MOB-EST` | Qty · giá · **⊂ Công việc** | Same |
| Camera xem | `DES-MOB-CAM-VIEW` | JPEG + events | Same |
| Ops / Giám sát notify | `DES-MOB-OPS` | Inbox | Same |
| Góp ý | `DES-MOB-FEEDBACK` | Text + Gửi | Same |
| Tôi | `DES-MOB-ME` | Profile + Lưu trữ + Góp ý | Same |
| GPS deny | `DES-MOB-GPS-DENY` | In-app modal | Material dialog |
| Leave dirty | `DES-MOB-LEAVE` | In-app modal | Material dialog |
| Camera shutter | `DES-MOB-PHOTO-GPS` | Viewfinder + shutter | Same |
| Ảnh đã chốt | `DES-MOB-GPS-PIN` | Stamp tuyến/Km/±m | Same |
| Check-in saved | `DES-MOB-CI-DETAIL` | View immutable | Same |

`DES-MOB-AI` (hub Nhận diện) = **retired tab** — giữ chip review, không tab.

## 3. Tokens

| Meaning | iOS | Android (Material 3) |
|---------|-----|----------------------|
| Tint / primary | `#0C84C0` (logo MMS) | `#0C84C0` |
| Header / ví | `#086A9A` → `#0C84C0` | Same |
| Success | `#3CB448` (logo lục) | `#3CB448` |
| Warning | `#FCB43C` (logo vàng đường) | `#FCB43C` |
| Danger | `#F03C30` (logo đỏ) | `#F03C30` |
| Grouped / surface | `#F2F2F7` | `#F7F2FA` surface |
| Card | `#FFF` r12 | surfaceContainer r16 |
| Font | `-apple-system` | Roboto / system |
| Notify count (`DES-MOB-NOTIFY`) | Badge **22** · chữ **11** · ring **1.5** · `#F03C30` · trong tap 44 · `0` ẩn | Same |

## 4. Flows

| Flow | Steps |
|------|-------|
| Login | Logo RMMS → tài khoản / mật khẩu → Đăng nhập → **Trang Chủ** |
| Happy patrol | Check-in → Map OMS → Sheet CI → Lưu → KPI +1 |
| Offline | Sheet → Lưu offline → **Lưu trữ** → Sync |
| GPS deny | CTA chấm/CI → `DES-MOB-GPS-DENY` · **cấm** Lưu |
| Auto-pin | Mở sheet CI/SC/TS → pin GPS · **cấm** gõ lat/lng |
| Sai điểm | `distanceM` > 50 → banner · **chặn** Lưu |
| Vấn đề | Tab Vấn đề → +/FAB → Sheet → Gửi / nháp offline |
| AI mặt đường | Vấn đề → Nhận diện mặt đường → shutter → Gắn sự cố |
| **TS thủ công** | Tài sản → Thu thập thủ công → loại + Km + ảnh → Thêm |
| **TS camera AI** | Tài sản → Camera AI → shutter → HITL Xác nhận / Bỏ |
| **TS bớt** | Tài sản → Cập nhật / bớt → Bớt → `DES-MOB-ASSET-REMOVE` (soft) |
| **TS bản đồ** | Tài sản → Bản đồ tài sản → pin → chi tiết |
| Leave dirty | Sheet đang sửa → Hủy → `DES-MOB-LEAVE` · **cấm** `alert` |
| Công việc | Tab Công việc → dòng lệnh · Ước lượng |
| Góp ý | Tôi → Góp ý → Gửi |
| Camera xem | Tôi → Camera xem — **không** form HW |
| Logout | Tôi → Đăng xuất → Login |

## 5. Device behavior checklist (`mobile-device-behavior.md`)

| Behavior | iOS | Android | Gap |
|----------|-----|---------|-----|
| Safe area (notch / home / insets) | ✅ | ✅ | |
| Keyboard avoid input / sheet | ✅ sheet grows | ✅ | |
| Swipe-back / predictive back | ✅ chevron + note | ✅ Up + note | |
| GPS deny in-app | ✅ `DES-MOB-GPS-DENY` | ✅ | |
| Offline banner + queue + Sync | ✅ | ✅ | |
| Biometric | Ẩn Gói 1 | Ẩn Gói 1 | |
| Permission in-context | ✅ | ✅ | |
| Leave dirty modal — **cấm** `alert`/`confirm` | ✅ `DES-MOB-LEAVE` | ✅ | |
| Icons SF ↔ Material — **cấm** emoji | ✅ | ✅ | |
| Map OMS live — **cấm** fake / `vh` cap | ✅ flex host | ✅ | |

## 5b. Một tính năng hiện trường (không đổi IA)

Bốn ý user = **một** tính năng trong app VNeID sẵn có — **cấm** tách 4 tab / 4 ô launcher.

| Bước trong cùng tính năng | Vào từ | Zone | Lưu ý |
|---------------------------|--------|------|--------|
| 1. Chấm công tuần: chụp / ghi phản ánh hư · mất · hỏng + nhận diện | Check-in → Phản ánh hiện trường | `DES-MOB-FIELD-REFLECT` | Ảnh + GPS chốt · checklist loại TS · tạo vấn đề. **Cấm** badge P1/P2 trên header |
| 2. Camera tuần tự detect theo tọa độ → tạo vấn đề | Check-in → Camera tuần | `DES-MOB-CAM-PATROL` | Hệ thống **tự `POST …/incidents`** (ảnh + tọa độ + video) · user **xác nhận lại sau** (Đúng / Không đúng) · **cấm** score chrome |
| 3. Phân công sửa chữa theo ước lượng + SLA | Vấn đề chi tiết / Công việc | `DES-MOB-EST` | Giao cho · qty · đơn giá · SLA giờ · hạn · `WO-*` |
| 4. Form 32 loại + checklist sự cố | Tài sản → Thông tin tài sản → Sửa thông số | `DES-MOB-ASSET-FORM` | PAVEMENT = cột Khu IV / Biểu 1 · sự cố = `rmms_incidents.assetId` |
| 5. Tạo sự cố | Ghi sự cố → chọn loại → **form sự cố** | `DES-MOB-INC-FORM` | Hư/Mất/Hỏng · checklist loại · ảnh + nhận diện · định vị chốt · Tạo vấn đề · camera · giao việc |

Home vẫn: header xanh RMMS · 2 thẻ Điểm tuần / Ghi sự cố · lưới 3×2 · ví hồ sơ tài sản · tab 5.

## 6. Out of scope P1

Twin 3D · YOLO local · train offline · TOC · cổng dân · camera config HW.  
SLA **mobile** = giờ + hạn trên form phân công (P1) — escalation workflow = P2.

## 7. Gaps design (IA v3)

| ID | Gap | Action |
|----|-----|--------|
| GAP-DES-MOB-IA-05 | v2 mất launcher 6 ô | `DES-MOB-HOME` + 6 ô đúng ảnh hướng dẫn |
| GAP-DES-MOB-IA-06 | Card Vấn đề / Công việc thiếu hàng thao tác cũ | Rich card + trao đổi / giao việc / xem / ghim |

## 7b. Gaps design (IA v2 — đã xử lý)

| ID | Gap | Action |
|----|-----|--------|
| GAP-DES-MOB-IA-01 | Giám sát không tab | Lối từ Check-in → `DES-MOB-SUPERVISE` |
| GAP-DES-MOB-IA-02 | Tài sản mất thu thập / bớt | Hub + collect / adjust / AI |
| GAP-DES-MOB-IA-03 | Công việc drawer | Tab cấp 1 |
| GAP-DES-MOB-IA-04 | Thiếu Góp ý | `DES-MOB-FEEDBACK` dưới Tôi |
| GAP-MOB-CRUD-02 | Context cũ: TS create = Web only | Mobile P1 **thu thập + bớt soft** — cùng `api/v1/asset/road-assets` |

## Prototype (REQUIRED)

| | Path |
|--|------|
| Tổng quan | `ui/prototype/index.html` |
| iOS | `ui/prototype/ios/index.html` |
| Android | `ui/prototype/android/index.html` |
| OMS helper | `ui/prototype/map-oms.js` |
| Logo SSOT | app `AppLogo` → `ui/prototype/assets/app-logo.png` (login 192 · không ô đen) |
| **reviewUrl tổng quan** | `file:///D:/AI-QLBD/Linm.RMMS.Data/specs/mobile-p1/ui/prototype/index.html` |
| **reviewUrl iOS** | `file:///D:/AI-QLBD/Linm.RMMS.Data/specs/mobile-p1/ui/prototype/ios/index.html` |
| **reviewUrl Android** | `file:///D:/AI-QLBD/Linm.RMMS.Data/specs/mobile-p1/ui/prototype/android/index.html` |
| **reviewUrl workflow animation** | `file:///D:/AI-QLBD/Linm.RMMS.Data/specs/mobile-p1/ui/prototype/workflow-cam-patrol/index.html` |
| Serve | `npx --yes serve -p 5198 ui/prototype` → `/` · `/ios/` · `/android/` · `/workflow-cam-patrol/` |

Mở **Trang Chủ** trước — 6 ô app cũ. Ô **Tài sản** → hub (thủ công + camera AI). Tab dưới = việc hàng ngày.

### OMS (patrol + GIS)

| # | Check | Status |
|---|-------|--------|
| R1 | Live Leaflet — không gradient fake | ✅ `map-oms.js` |
| R2 | OSM + Esri + Sat | ✅ |
| R4 | Flex fill trong phone (không vh) | ✅ `.map-host` |
| R4c | host → bar → legend | ✅ |
| R5b | sat maxNativeZoom 17 | ✅ |
| R8 | OSRM | ✅ |
| R11 | Fit overview maxZoom ≤13 | ✅ |

## Handoff (sau `design_confirm`)

`/agent-qldb-workflow-mobile` · `ui_repo_confirm` (SwiftUI + Compose) · same BFF — **cấm** fork API.

## Version meta

| Field | Value |
|-------|-------|
| skillId | agent-design |
| agentVersion | 2026.08.17.02 |
| generatedAt | 2026-08-18T16:05:00.000Z |
| schemaVersion | 1 |
| iaVersion | 3.3 |
