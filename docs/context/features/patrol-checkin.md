# Ghi điểm tuần (mobile sheet) — Feature Context

> **Slug:** `patrol-checkin` · **Module:** `Patrol` · **Phase:** P1  
> **Status:** Signed · mobile field sheet từ hub / map / pin handoff  
> **Demo HTML:** `specs/mobile-p1/ui/prototype/{ios,android}/index.html` · `#sheet-checkin` · `DES-MOB-PAT-CHECKIN-SHEET` · detail `#sc-checkin-detail` · `DES-MOB-CI-DETAIL`  
> **BE:** `Linm.RMMS.WebService` · domain **Patrol** · `api/v1/patrol/sessions` (+ Kind E `…/check-ins`)  
> **BFF:** `Linm.RMMS.Mobile.Bff` · `mobile-bff/api/v1/patrol/sessions*` (proxy) · **cấm** invent `api/v1/patrol-checkin`

## 1. Tổng quan

| | |
|--|--|
| Mục tiêu | Sheet **Ghi điểm tuần** · prefill điểm KH / lý trình / GPS ghim · banner đúng/sai điểm · nội dung + ảnh · Lưu / Ghi nhận |
| Persona | Tuần đường |
| Entry | Hub `patrol-home` CTA · map `patrol-map` · handoff `patrol-pin` `openSheet('checkin')` |
| DoD P1 | Sheet dual parity · GPS live · match banner · camera attach · submit toast · GET session prefill · POST check-ins khi BE live (GAP nếu thiếu) |

## 2. Design / UI

| Zone | Pattern | Notes |
|------|---------|-------|
| Sheet | `LinmBottomSheet` | `DES-MOB-PAT-CHECKIN-SHEET` · title **Ghi điểm tuần** |
| Match banner | Banner ok/warn | `DES-MOB-LOC-MISMATCH` · đúng / sai điểm · chặn Lưu khi sai |
| Prefill fields | Readonly Text | Điểm KH · Tuyến/lý trình · Định vị · Cách điểm KH |
| Nội dung | TextArea | editable |
| Ảnh | PhotoRow + Camera | `#i-camera` · `openCapture('checkin')` |
| Primary | `LinmPrimaryButton` | **Ghi nhận điểm tuần** · `saveCheckin()` |
| Nav Lưu / Hủy | TextButton | Lưu = submit · Hủy → leave modal |
| Detail | Read screen | `DES-MOB-CI-DETAIL` · cùng slug read |

## 3. API (mobile BFF)

| Method | `{BffPrefix}` path | Status |
|--------|-------------------|--------|
| GET | `patrol/sessions` | **Live** — active session Route / CheckInCount |
| GET | `patrol/sessions/{id}` | **Live** — detail prefill |
| POST | `patrol/sessions/{id}/check-ins` | CTX Kind E · **MISSING** controller → **GAP-MOB-BFF-01** |
| — | GPS / Camera | **Device** |

**Cấm invent:** `api/v1/patrol-checkin` · ERP.* · app `:5101` · gộp `patrol-pin` form.

## 4. Sibling (không gộp slug)

| Slug | Vai trò |
|------|---------|
| `patrol-home` | Entry hub CTA |
| `patrol-map` | Entry map CTA |
| `patrol-pin` | Handoff sau ghim · **cấm** form check-in trên pin |
| `patrol-offline` | Queue offline sau mất sóng |
| `attendance` | Chấm công — **không** gộp |

## 5. Demo SSOT

Frame iOS 390×844 · Android 412×915 · copy VN từ `#sheet-checkin` · banner đúng/sai · toast `Đã ghi điểm tuần · …`.

## Implement tracking

| lane | phase | status | updatedAt |
|------|-------|--------|-----------|
| web | — | — | — |
| mobile | `done` | `done` | `2026-09-01T07:21:22.137Z` |
