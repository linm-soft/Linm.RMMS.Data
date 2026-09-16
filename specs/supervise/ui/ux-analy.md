# UX analy — supervise (mobile list · Giám sát)

**Sources:** `ui/prototype/ios` · `ui/prototype/android` · `ui/design.md` · PO compact · control-hint (hash skip)  
**Brand tokens:** primary `#0C84C0` · success `#34C759`/`#1B5E20` · warn `#FF9500` · surface iOS `#F2F2F7` · surface Android `#FFFBFE`  
**changeScope:** `edit_page` · filter sheet live + map sibling  
**taskId:** `task_69283465` · `generatedAt:` `2026-09-12T09:55:00.000Z`

## 1. IA

```
(auth) Login → Tab 5 (IA lock — không invent / reorder)
  Trang Chủ (#sc-home) → tile «Giám sát» → push #sc-supervise
  Tuần đường (#sc-patrol-home) → quick «Giám sát» → push #sc-supervise
#sc-supervise DES-MOB-SUPERVISE
  → nav back → pop #sc-home
  → Lọc → open sheet DES-MOB-SUP-FILTER (Tuyến · Ngày · Áp dụng · Xóa lọc)
  → Apply → GET ±route · client day CheckInAt · refresh cards / EmptyChrome
  → segment idx 1 «Bản đồ» → push #sc-patrol-map · reset idx 0 · cấm toast
  → tap card → push supervise-detail
  → fail → EmptyChrome + toast loadFail · cấm demoItems · cấm alert
```

- Segment idx **0** Danh sách check in · **1** Bản đồ — **locked** (`GAP-TAB-01`).
- Sibling `patrol-map` / `supervise-detail` = navigate only · **cấm** auto-start pipeline.
- Grid/Report ERP filter-bar — **N/A** native.

## 2. Màn

| DES / sc-* | Tên VN | iOS chrome | Android chrome | CTA |
|------------|--------|------------|----------------|-----|
| DES-MOB-SUPERVISE `#sc-supervise` | Giám sát tuần đường | pill seg · sheet · cards | underline seg · sheet · cards | sheet / push |
| DES-MOB-SUP-NAV | Nav | `LinmTopBar` text | same | pop / open sheet |
| DES-MOB-SUP-SEG | Segment 2 | pill | underline | list / map push |
| DES-MOB-SUP-FILTER | Sheet Lọc | bottom sheet | bottom sheet | Apply / Clear |
| DES-MOB-SUP-LIST | List | scroll | scroll | |
| DES-MOB-SUP-CARD | Rich card | `LinmCard` composition | same | push detail |

## 3. Zone

### DES-MOB-SUPERVISE / `#sc-supervise`

| Zone | Demo (user thấy) | Map | SwiftUI | Compose |
|------|------------------|-----|---------|---------|
| Nav back | ‹ Trang Chủ | `#i-chevron-left` | `LinmTopBar` | same |
| Nav title | Giám sát tuần đường | `.nav-title` | title | same |
| Nav filter | Lọc | `btn-sup-filter` | trailing → sheet | same |
| Segment | Danh sách check in / Bản đồ | `sup-segment` | `LinmSegment` | same |
| Filter sheet | Tuyến · Ngày · Áp dụng · Xóa lọc | `DES-MOB-SUP-FILTER` | Modal/sheet | BottomSheet |
| Filter chip | Lọc: route · date | optional chip | Text chip | same |
| Card fields | title · org · loc · time · status · thumb | `.rich-card` | composition | same |
| Empty | Không có check-in | `sup-empty` | EmptyChrome | same |
| Toast | loadFail only | `.toast` | `LinmToast` | same |
| Nav cue (proto) | Push #sc-patrol-map / detail | demo-only | — native Navigation | same |

**States:**

| State | Hành vi |
|-------|---------|
| default | live GET · seg 0 · **cấm** demo SSOT ship |
| filter open | sheet · prefill |
| filter applied | chip + filtered cards / EmptyChrome |
| loading | overlay nhẹ |
| error | empty + toast loadFail · list mở |
| empty live | EmptyChrome · **cấm** mock rows |
| leave dirty | **N/A** |

## 4. Copy SSOT

| ✅ | ❌ |
|----|----|
| Trang Chủ · Giám sát tuần đường · Lọc | Home / Filter EN |
| Tuyến · Ngày · Áp dụng · Xóa lọc | invent EN CTAs |
| Danh sách check in · Bản đồ | reorder tabs |
| Không có check-in · thử đổi lọc | empty EN |
| Trạng thái: Đã ghi điểm tuần | «OK» EN |
| Push cue proto only | toast «Lọc tuyến · ngày» / «Bản đồ» |

## 5. Brand

primary `#0C84C0` · **cấm** M3 tím · **cấm** Ministry/CCCD skin · dual surface tokens giữ.

## 6. Typography / pad

| Element | Size | Note |
|---------|------|------|
| Tab/seg label | **13** | locked |
| Field / Apply | **≥16** | sheet inputs |
| Nav title | 17 | |
| Card title | 17 iOS / ≥16 Android | |
| Card meta | 13 | |

Touch targets ≥44 iOS / ≥48 Android trên Lọc · Apply · Clear · seg.

## 7. Icon parity

`#i-chevron-left` · `#i-building` · `#i-mappin` — dual **cùng `d=`** · **cấm** Filled 1 OS.

## 8. A11y / feedback

- `btn-sup-filter` · sheet dialog labelled «Lọc»
- Fail = toast + EmptyChrome · **cấm** native alert
- Map/filter success = navigation / list refresh · **cấm** fake toast

## 9. Gaps closed / open

| ID | Status |
|----|--------|
| GAP-MOB-SUP-01 filter sheet live | **closed** in design proto |
| GAP-MOB-SUP-02 map sibling push | **closed** in design proto |
| GAP-MOB-SUP-04 BE fromDate | **P2** open |
| GAP-MOB-SUP-03 org | keep |

## Version meta

| Field | Value |
|-------|-------|
| skillId | agent-design-mobile · mobile-ui-ux-analy |
| skillVersion | 2026.08.19.26 |
| contentHash | sha256:supervise-mobile-filter-live-20260912 |
| generatedAt | 2026-09-12T09:55:00.000Z |
