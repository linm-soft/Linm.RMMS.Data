# Feature context — web-rmms-mobile-e

> **Slug:** `web-rmms-mobile-e` · **Wave:** E (Kế hoạch tần suất — TK-07)  
> **Status:** po done · next design · **packKind:** `list` · **changeScope:** `edit_page`  
> **Demo:** N/A (field master-adjacent · **cấm** demo HTML / hard-code số lượt / tọa độ mẫu SSOT)  
> **MFE:** `Linm.Web.RMMS.Mobile` · khung phone `max-width` 430px · **cấm** nhét màn vào MFE desktop Asset/Field  
> **BE:** `Linm.RMMS.WebService` · domain **Patrol** (+ **Integration** `road-routes` cite · Auth · peer A–D) · **cấm ERP.*** / Domains/Master  
> **mfeStdRoute:** `/web-rmms-mobile-e` · **mfeStdUrl:** `http://localhost:9301/web-rmms-mobile-e`  
> **Queue:** `/agent-qldb-workflow` · alias `web-rmms-mobile-e` · **cấm** iOS/Android native

## 1. Mục tiêu

Màn **TK-07 kế hoạch tần suất** theo tuyến: đọc quy tắc + đếm ca/đợt thực tế, so sánh thiếu/đủ.  
API **Mới** đọc kế hoạch theo tuyến. **Chưa có bảng / 404 → empty state**, **cấm** hard-code số lượt (TCCS 3–9 hay bất kỳ hằng FE).  
**Chỉ đọc** trên phone — sửa quy tắc không nằm trên mobile.

## 2. Màn đợt E (SSOT screens)

| Id | Route | Việc |
|----|-------|------|
| TK-07 | `/field/tuan-kiem/ke-hoach` | Bảng RO: tuyến · cấp đường · quy tắc chữ · số ca tuần đường/ngày · số đợt tuần kiểm/tuần · thiếu/đủ |

**Ngoài scope E:** báo cáo tháng desktop · track GPS liên tục · native · sửa quy tắc trên phone · hard-code lượt.

**Peer A–D:** sessions/check-ins · journal · findings · close/WO/petition — đếm session Live phục vụ cột «số ca / số đợt» khi có API tổng hợp hoặc client aggregate (SA chốt).

## 3. Nguồn SSOT (cite)

| Source | Path |
|--------|------|
| Screens / API | `docs/plan/web-rmms-mobile/IMPLEMENT-SCREENS.md` · WEB-RMMS-E · TK-07 |
| Gap | `docs/plan/web-rmms-mobile/GAP-TUAN-DUONG-TUAN-KIEM.md` · §6 tần suất · đợt E |
| Peer A–D CTX | `web-rmms-mobile-a.md` … `d.md` |
| DOMAIN-MAP | Patrol · Integration `road-route` · slug row E (SA thêm nếu thiếu) |
| Live cite | `GET integration/road-routes/search` · `GET patrol/sessions` (aggregate đếm) |
| Mới | bảng/API kế hoạch tần suất theo tuyến · cấp đường trên route nếu thiếu |

## 4. API (prefix)

| Surface | Path | Live? |
|---------|------|-------|
| Kế hoạch tần suất | `GET api/v1/patrol/…` (frequency/plan-by-route — SA chốt slug) | **Mới** — empty nếu chưa có |
| Tuyến / cấp đường | `GET api/v1/integration/road-routes/search` | **Live** · cột cấp trống + GAP nếu thiếu field |
| Đếm ca / đợt | sessions PatrolType `Tuần đường` / `Tuần kiểm` theo ngày/tuần | **Live** sessions · aggregate SA |
| Profile | `auth/profile` | Live |
| Mobile BFF | `mobile-bff/api/v1` · cùng `{resource}` | plan |

## 5. Cột bảng UI (keys — label qua useFormOptions)

| uiField | Nghĩa |
|---------|-------|
| route | mã/tên tuyến |
| roadClass | cấp đường (từ road-routes nếu có) |
| ruleText | quy tắc chữ (cao tốc mỗi chiều 1 lần/ngày · tuần kiểm 1 lần/tuần · …) |
| patrolDayCount | số ca tuần đường trong ngày |
| inspectWeekCount | số đợt tuần kiểm trong tuần |
| coverageStatus | `thieu` \| `du` (thiếu / đủ) |

**Quy tắc nghiệp vụ (GAP §6 — không hard-code một số cho mọi QL):** cao tốc ≥1/ngày/chiều · cấp I–III ≥1/ngày · IV–VI theo mùa · tuần kiểm ≥1/tuần · tăng lượt khi thiên tai/sự cố từ lệnh ops (không tự bịa).

## 6. HARD rules (product)

| Rule | |
|------|--|
| Nhãn | `useFormOptions()` / copy key · **cấm** hardcode tiếng Việt trên form/list |
| Empty | chưa có bảng/API → empty · **cấm** hard-code số lượt |
| GPS | **không** trên TK-07 (chỉ đọc) · peer rule vẫn: deny chặn nút cần tọa độ · **cấm** tọa độ mẫu |
| Read-only | sửa quy tắc **không** trên phone |
| BE | ONLY `Linm.RMMS.WebService` + DOMAIN-MAP Patrol (+ Integration cite) |
| MFE | **chỉ** `Linm.Web.RMMS.Mobile` · phone 430 · **cấm** desktop Asset · **cấm** iOS/Android |
| Schema trước list bind đủ | bảng tần suất / field cấp đường · **trước** pretend filled grid |

## 7. Open / UNCLEAR (data-analy → SA)

| id | Issue |
|----|-------|
| UNCLEAR-FREQ-API | Slug path GET kế hoạch (vd. `patrol/frequency-plans` vs aggregate) |
| UNCLEAR-ROAD-CLASS | Field cấp đường trên `road-routes` đã có chưa |
| UNCLEAR-COUNT-SOURCE | Server aggregate vs client đếm `GET patrol/sessions` |
| UNCLEAR-DOMAIN-SLUG | DOMAIN-MAP row `web-rmms-mobile-e` |

## 8. Handoff

PO → Design (phone prototype + reviewUrl) → SA (Schema frequency + DOMAIN slug) → TL → Dev Mobile → QA → Review.  
Orchestrator: `/agent-qldb-workflow` · **không** `/erp-feature`.

## Implement tracking

| lane | phase | status | updatedAt |
|------|-------|--------|-----------|
| web | `done` | `done` | `2026-09-25T10:55:09.871Z` |
| mobile | — | — | — |
