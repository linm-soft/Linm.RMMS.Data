# Tuần đường (mobile hub) — Feature Context

> **Slug:** `patrol-home` · **Module:** `Patrol` · **Phase:** P1  
> **Status:** Signed · mobile field tab  
> **Demo HTML:** `specs/mobile-p1/ui/prototype/{ios,android}/index.html` `#sc-patrol-home` · `DES-MOB-PAT-HOME`  
> **BE:** `Linm.RMMS.WebService` · domain **Patrol** · `api/v1/td-tk/sessions`  
> **BFF:** `Linm.RMMS.Mobile.Bff` · `mobile-bff/api/v1/patrol/sessions` (proxy)

## 1. Tổng quan

| | |
|--|--|
| Mục tiêu | Hub ca tuần đường hiện trường · ca đang chạy · KPI · danh sách hôm nay · thao tác nhanh |
| Persona | Tuần đường |
| Entry | Tab **Tuần đường** · Home quick **Điểm tuần** · Home tile **Tuần đường** |
| DoD P1 | GET sessions · **POST mở ca · PUT kết ca** · hero live-only · KPI · list hôm nay · nav Đồng bộ → `patrol-offline` · sibling toast |

## 2. Design / UI

| Zone | Pattern | Notes |
|------|---------|-------|
| Nav | Icon sync trái · bell phải | sync → `#sc-patrol-offline` · bell → toast |
| Large title | Tuần đường | `LinmLargeTitle` |
| Segment | 2 tab | idx **0** Tuần đường · **1** Chấm công (sibling `attendance`) |
| Hero ca | `LinmHeroCard` | Ca đang chạy · progress · CTA bản đồ / ghi điểm (sibling P2) |
| Pin here | Primary button | Ghim vị trí hiện tại · toast P1 |
| KPI strip | 3 ô | Đã ghi · Còn lại · Độ phủ |
| Hôm nay | `LinmListRow` × n | PAT-* · badge trạng thái |
| Thao tác nhanh | `LinmListRow` × 6 | sibling toast · Lưu trữ → `patrol-offline` |

## 3. API (mobile BFF)

| Method | `{BffPrefix}` path | Status |
|--------|-------------------|--------|
| GET | `patrol/sessions` | **Live** — paged list |
| GET | `patrol/sessions/{id}` | **Live** — detail |
| POST | `patrol/sessions` | **Live** — mở ca (wire native · edit_page GAP) |
| PUT | `patrol/sessions/{id}` | **Live** — kết ca (wire native · was toast) |

**Cấm invent:** `api/v1/patrol-home` · ERP.* · app `:5101` trực tiếp.  
**Hero:** chỉ field máy chủ · **cấm** sample `QL.1 · Km…` / `Nguyễn Văn A` / `07:20`.

## 4. Sibling (không gộp slug)

| Slug | Entry từ patrol-home |
|------|---------------------|
| `patrol-offline` | Nav sync · row Lưu trữ |
| `attendance` | Segment Chấm công |
| `patrol-map` | Hero CTA · row Bản đồ ca |
| `field-reflect` | Ghi nhận hư hỏng |
| `cam-patrol` | Thu thập camera |
| `patrol-history` | Lịch sử phiên |
| `supervise` | Giám sát |

## 5. Demo SSOT

Frame iOS 390×844 · Android 412×915 · copy VN từ `#sc-patrol-home` mobile-p1 prototype.

## Implement tracking

| lane | phase | status | updatedAt |
|------|-------|--------|-----------|
| web | — | — | — |
| mobile | `done` | `done` | `2026-09-12T15:31:42.305Z` |
