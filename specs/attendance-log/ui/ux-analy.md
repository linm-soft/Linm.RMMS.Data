# UX analy — attendance-log

**Sources:** design.md · parent attendance-day · `/edit-mobile-feature` 2026-09-16  
**Brand:** primary `#0C84C0` · success `#3CB448` · warn `#FCB43C` · surface iOS `#F2F2F7`

## 1. IA

```
Login → Tab 5 Tuần đường → #sc-attendance → #sc-attendance-day
  → tap log → push #sc-attendance-log DES-MOB-ATT-LOG
  Back = go('attendance-day')
  Appear = GET patrol/attendance-logs/{id}
  Fail = EmptyChrome + toast · cấm fake 200
```

Surface: `tabs: none` · shell tab `field`.

## 2. Màn

| DES / sc-* | Tên VN | iOS chrome | Android chrome |
|------------|--------|------------|----------------|
| DES-MOB-ATT-LOG `#sc-attendance-log` | Chi tiết chấm công | back text «Ngày công» | icon-only |

## 3. Zone

| Zone | Demo | Kit |
|------|------|-----|
| Header | Back · title Chi tiết chấm công | `LinmTopBar` |
| Hero | HH:mm + badge in-zone · mã | Text + `LinmBadge` |
| Rows | Thời điểm · Tuyến · Lý trình · Trạng thái · Tọa độ · Trong vùng · Ghi chú | `LinmListRow` |
| Empty | Không tìm thấy lần chấm | `LinmEmptyChrome` |
| Feedback | toast lỗi | `LinmToast` |

| State | Hành vi |
|-------|---------|
| default | GET by id · bind |
| loading | busy overlay |
| 404 | EmptyChrome |
| fail | EmptyChrome + toast |
| missing id | toast + pop day · **cấm** appear với `""` vì `isPresented` capture |
| 403 | toast + pop |

## 4. Copy SSOT

Chi tiết chấm công · Ngày công · Mã · Thời điểm · Tuyến · Lý trình · Trạng thái · Tọa độ · Trong vùng · Ngoài vùng · Ghi chú · Không tìm thấy lần chấm

**Cấm:** «Chi tiết check-in» · «Xem trên bản đồ» · device label · watermark Gói.

## 5–9

GAP: GAP-MOB-ATT-LOG-NAV-01 toast→push **closed**. GAP-MOB-ATT-LOG-ID-01 empty id toast **closed** 2026-09-16 · iOS `item:` binding · **cấm** fake UUID GET.
