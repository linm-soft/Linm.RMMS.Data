# Design — attendance-log (mobile · Chi tiết chấm công)

| Field | Value |
|-------|-------|
| feature | `attendance-log` |
| packKind | **`screen`** |
| status | `confirmed` · `/edit-mobile-feature` 2026-09-16 |
| reviewUrlIos | `file:///Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Data/specs/attendance-log/ui/prototype/ios/index.html#sc-attendance-log` |
| reviewUrlAndroid | `file:///Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Data/specs/attendance-log/ui/prototype/android/index.html#sc-attendance-log` |
| kit_missing_confirm | **N/A** — reuse `LinmTopBar` · Text · `LinmBadge` · `LinmListRow` · `LinmEmptyChrome` · `LinmToast` |
| updatedAt | `2026-09-16` |

## 1. Pattern

| Surface | Full screen push `#sc-attendance-log` · shell tab `field` · **không** Modal/Sheet |
| Action | GET by id · display · toast err · empty 404 · nav day |
| Frame | iOS 390×844 · Android 412×915 |
| BFF | **chỉ** `GET patrol/attendance-logs/{id}` |

## 2. IA

```
Tuần đường → #sc-attendance → #sc-attendance-day
  → tap log row → push #sc-attendance-log DES-MOB-ATT-LOG  ← this pack
  Back → go('attendance-day')
  Appear → GET patrol/attendance-logs/{id} · id từ day `attendanceId` (live Guid) · iOS `navigationDestination(item:)`
  GET fail → EmptyChrome + toast · cấm fake 200 · cấm demo
  404 → EmptyChrome
  **cấm** map CTA / supervise-detail chrome
```

## 3. Field inventory

| Field | VN | Kit | Notes |
|-------|-----|-----|-------|
| navBack | Ngày công | `LinmTopBar` | iOS text+chevron · Android icon-only |
| title | Chi tiết chấm công | `LinmTopBar` | dual SSOT |
| timeHero | HH:mm | Display `heroWho` bold | `CheckInAt` local |
| logBadge | Trong vùng / Ngoài vùng | `LinmBadge` | `InZone` |
| codeLabel | Mã | caption `label` 13 | |
| codeValue | CC-* | Text `fieldText` | missing → «—» |
| rowTime | Thời điểm | `LinmListRow` | full local |
| rowRoute | Tuyến | `LinmListRow` | `Route` · **cấm** invent |
| rowKm | Lý trình | `LinmListRow` | `KmPoint` |
| rowStatus | Trạng thái | `LinmListRow` | raw `Status` · **cấm** invent Đúng tuyến |
| rowGps | Tọa độ | `LinmListRow` | Lat,Lng · readonly |
| rowInZone | Trong vùng | `LinmListRow` | |
| rowNote | Ghi chú | `LinmListRow` | `Note` |
| empty | Không tìm thấy lần chấm | `LinmEmptyChrome` | |

## 4. Typography / token

| Role | Token |
|------|-------|
| hero | `heroWho` (28) |
| caption / label | `label` (13) |
| row / code | `fieldText` 16 |

**Cấm** hex / `.sp` trần / literal VN trên view.

## 5. Cấm

- WebView · `mfeStdUrl` · map CTA / embed · gộp supervise-detail
- Invent path · fake 200 · POST/PUT/DELETE
- Native alert · watermark Gói · device label
