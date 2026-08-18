# UX analy — mobile-p1

**Sources:** prototype/ios · prototype/android · ui/design.md  
**Brand tokens:** primary `#0C84C0` · header `#086A9A`→`#0C84C0` · success `#3CB448` · warn `#FCB43C` · danger `#F03C30`  
**Map:** `docs/html-to-native-map.md` · kit scan `ui/kit-scan.md`  
**Gate:** packet analy — **không** `design_confirm`

## 1. IA

Login (ẩn tab) → Tab 5

- **Trang Chủ:** greeting + 6 ô + ví hồ sơ TS → push Giám sát / Tuần đường / Công việc / Vấn đề / Tài sản hub / Lưu trữ
- **Tuần đường:** segment Tuần đường | Chấm công → map ca · sheet ghi điểm tuần · ghi nhận · camera
- **Vấn đề:** list + FAB/sheet → chọn TS → form sự cố
- **Công việc:** list giao việc → ước lượng
- **Tôi:** hồ sơ · lưu trữ · góp ý · camera xem · đăng xuất

Ô Home **không** là tab: Giám sát · Tài sản · Lưu trữ. Bản đồ / Nhận diện **không** tab.

## 2. Màn

| DES / sc-* | Tên VN | iOS chrome | Android chrome | CTA |
|------------|--------|------------|----------------|-----|
| DES-MOB-LOGIN | Đăng nhập | Brand + field grouped | Same · outlined | Đăng nhập |
| DES-MOB-HOME | Trang Chủ | Hero + 6 ô | Same | Ô / Điểm tuần / Ghi sự cố |
| DES-MOB-PAT-HOME | Tuần đường | Large title + seg | Large title + seg | Ghi điểm tuần · Bản đồ |
| DES-MOB-PAT-MAP | Ca đang chạy | Nav + OMS | Same | Ghi điểm tuần · Ghim |
| DES-MOB-INC-LIST | Vấn đề | List + `+` | List + FAB | Ghi sự cố |
| DES-MOB-ASSET-HUB | Tài sản | Hub 2 cột | Same | Thu thập / AI / map |
| DES-MOB-MNT-LIST | Công việc | List | Same | Dòng lệnh |
| DES-MOB-ME | Tôi | Large title | Same | Góp ý · Đăng xuất |
| DES-MOB-LEAVE | Rời trang | In-app modal | Dialog | Ở lại / Rời |

## 3. Zone

### DES-MOB-HOME

| Zone | Demo (user thấy) | Map row | SwiftUI | Compose |
|------|------------------|---------|---------|---------|
| Header | Hồ sơ + chuông 3 · Khu + Tốt/TB/Yếu | A `.vn-hero-tools` · `.role` | `LinmHeroTools` · `LinmStatusCapsule` | same |
| Quick | Điểm tuần · Ghi sự cố | A `.vn-quick` | `LinmQuickActions` | same |
| Body | 6 ô nghiệp vụ | A `.home-grid` · `.home-tile` | `LinmHomeGrid` + `LinmHomeTile` | same |
| Wallet | HỒ SƠ TÀI SẢN · QL.1 · Khu IV | A `.wallet-card` | `LinmWalletCard` | same |
| CTA | Ô / quick | A `.btn-ok` | `LinmPrimaryButton` | same |

**States:** default · empty (chưa có ca) · loading · error · offline (Lưu trữ) · GPS deny · leave dirty (sheet)

### DES-MOB-PAT-HOME

| Zone | Demo | Map | SwiftUI | Compose |
|------|------|-----|---------|---------|
| Header | Large title Tuần đường · chuông | A `.large-title` · notify | `LinmLargeTitle` · `LinmNotifyButton` | same |
| Seg | Tuần đường / Chấm công | A `.seg` | `LinmSegment` | same |
| Hero | Ca đang chạy · KPI · tiến độ | A `.hero-card` · `.progress` · `.kpi` | `LinmHeroCard` · `LinmProgress` · `LinmKpiStrip` | same |
| List | Hôm nay · thao tác | A `.row` · `.section-label` | `LinmListRow` · `LinmSectionLabel` | same |

### DES-MOB-INC-FORM

| Zone | Demo | Map | SwiftUI | Compose |
|------|------|-----|---------|---------|
| Kind | Hư / mất / hỏng | A `.kind-pills` | `LinmKindPills` | same |
| Body | Checklist · ảnh · định vị | B `input` · A `.sheet` | `LinmTextField` · `LinmSheet` | same |
| CTA | Lưu · Hủy | A sheet chrome | `LinmSheetButton` | same |

## 4. Copy SSOT

Nhãn HTML: Đăng nhập · Tài khoản · Mật khẩu · Trang Chủ · Tuần đường · Vấn đề · Công việc · Tôi · Giám sát · Tài sản · Lưu trữ · Điểm tuần · Ghi sự cố · Ghi điểm tuần · Đã ghi điểm tuần · Độ phủ · Hồ sơ tài sản · Góp ý · Huỷ · Lưu · Ở lại · Rời.

**Cấm trên máy:** SLA · GPS · Offline · Form · Check-in · Có mạng · Không mạng · hộ chiếu · P1/P2.

Tín hiệu: **Tốt / Trung bình / Yếu**.

## 5. Brand

| Surface | Asset | Note |
|---------|-------|------|
| Login `DES-MOB-LOGIN-BRAND` | `assets/app-logo.png` | App logo = `logo/mobile` AppIcon 1024 · **cấm** `rmms.png` wordmark |

| Token | Hex | Chỗ dùng |
|-------|-----|----------|
| Primary / tint | `#0C84C0` | Tab chọn · CTA · ô Tài sản |
| Header / ví | `#086A9A` → `#0C84C0` | Hero Home · wallet |
| Success | `#3CB448` | Badge Xong · KPI đã ghi |
| Warning | `#FCB43C` | Ô Giám sát · badge còn |
| Danger | `#F03C30` | Ô Tuần đường · notify badge |

**Cấm** skin đỏ CCCD / Ministry.

## 6. Signal

Wifi 3-cung + 4 cột + hạng **Tốt / Trung bình / Yếu** trên pill Khu QLĐB IV. **Cấm** boolean online. Kit nhận `LinmSignalQuality` — không đọc Reachability.

## 7. Pictogram

| Surface | SF | Material | Proto |
|---------|----|----------|-------|
| Trang Chủ | `house` | `home` | `#i-home` |
| Tuần đường | `mappin.and.ellipse` | `location_on` | `#i-mappin` |
| Vấn đề | `exclamationmark.triangle` | `warning` | `#i-warning` |
| Công việc | `wrench.and.screwdriver` | `handyman` | `#i-wrench` |
| Tôi | `person.crop.circle` | `account_circle` | `#i-person` |
| Tài sản | `cube` | `inventory_2` | `#i-cube` |
| 32 loại TS | cùng motif `ak32-*` | cùng số mã | `asset-kcht-32.js` |

## 8. Motion

Workflow `workflow-cam-patrol`: xe máy + FOV · mất/gãy biển · Play/reset. **Không** đưa animation vào kit.

## 9. GAP

| ID | Demo vs native | Quyết định |
|----|----------------|------------|
| GAP-MOB-UX-06 | Thiếu `ux-analy.md` trước scan | Packet này — **cấm** `design_confirm` |
| GAP-MOB-SCANKIT-06 | Chrome A+B đã map → skip | exists |
| — | `.vn-quick` · `.wallet-card` · `.home-tile` · `.hero-card` · `.section-label` · `.progress` · `.large-title` · `.kind-pills` | kit_new dual |
| GAP-MOB-SCANKIT-04 | Tab 5 · map OMS · login · 32 loại · finder | defer |
