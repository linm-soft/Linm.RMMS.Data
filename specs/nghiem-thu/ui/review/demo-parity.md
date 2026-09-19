# Demo parity — nghiem-thu

**Slash:** `/review-demo-design-mobile`  
**DemoRoot:** `specs/nghiem-thu/ui/prototype/{ios,android}/index.html`  
**taskId:** `task_059c4327` · `2026-09-19T15:50:00.000Z`  
**SSOT:** DA control-hint + real-data · hash skip · **cấm** re-scan (`GAP-DES-DEMO-RESCAN-01`)  
**Delta:** mobile list · GAP-MOB-NT-LIST/DATA/ROW/CREATE/FILTER

## Must

| Check | iOS | Android | Status |
|-------|-----|---------|--------|
| Title **Công tác nghiệm thu** | yes | yes | OK |
| Trailing **Tạo** | yes | yes | OK |
| Search placeholder **Tìm mẫu nghiệm thu…** | yes | yes | OK |
| `#i-search` · `#i-check` · `#i-chevron-left` · `#i-chevron-right` cùng `d=` | yes | yes | OK |
| Row Code ≥16 · sub 13 · Badge | yes | yes | OK |
| Badge ship labels **Nháp** / **Hoàn thành** (không «Xong») | yes | yes | OK |
| Empty **Chưa có phiếu nghiệm thu** · hint Tạo | yes | yes | OK |
| Toast fail **Không tải được danh sách nghiệm thu** | yes | yes | OK |
| Shell Tab 5 nhãn Trang Chủ · Tuần đường · Vấn đề · Công việc · Tôi | yes | yes | OK |
| Tab **field** active | yes | yes | OK |
| Frame 390×844 / 412×915 | 390×844 | 412×915 | OK |
| Type: label/sub 13 · field/title ≥16 · title 17 (Android ~20 OK) | yes | yes | OK |
| `tabs: none` · không invent segment | yes | yes | OK |
| Full screen · không sheet chrome | yes | yes | OK |
| Không watermark / device label | yes | yes | OK |
| `data-des-id` DES-MOB-NGHIEM-THU / DES-MOB-NT-SEARCH | yes | yes | OK |
| `?empty=1` / `?fail=1` dual | yes | yes | OK |

## Should

| Check | Status |
|-------|--------|
| Back iOS có chữ «Tuần đường» · Android icon-only | OK (platform chrome) |
| Proto 2 rows preview only · ship GET BFF | OK (documented) |

## DEFER

| Item | Reason |
|------|--------|
| Sibling create/detail UI | pending_confirm · **cấm** start |
| Optional status/route/template filter sheet | P1 PO |

## Verdict

**Must = 0 open** → `design_confirm` **approve** (autoApprove ON).

---
<!-- Version meta: skillId=review-demo-design-mobile taskId=task_059c4327 -->
