# Ghim vị trí hiện tại (mobile) — Feature Context

> **Slug:** `patrol-pin` · **Module:** `Patrol` · **Phase:** P1  
> **Status:** Signed · mobile field CTA từ hub Tuần đường (+ reuse trên bản đồ ca)  
> **Demo HTML:** `specs/mobile-p1/ui/prototype/{ios,android}/index.html` · `DES-MOB-CI-PIN-HERE` · `pinHereCheckin()` · `#sc-patrol-home` / `#sc-patrol-map`  
> **BE:** `Linm.RMMS.WebService` · domain **Patrol** · `api/v1/patrol/sessions` (đọc Route cho toast)  
> **BFF:** `Linm.RMMS.Mobile.Bff` · `mobile-bff/api/v1/patrol/sessions` (proxy) · **không** endpoint pin riêng

## 1. Tổng quan

| | |
|--|--|
| Mục tiêu | CTA **Ghim vị trí hiện tại** · lấy loc live · toast lý trình + sai số · deny/timeout in-app · handoff sibling `patrol-checkin` |
| Persona | Tuần đường |
| Entry | Hub `patrol-home` primary pin · map `patrol-map` overlay pin (`reuse` owner = pack này) |
| DoD P1 | Live GPS · **cấm** fake lat/lng · toast `Đã ghim vị trí hiện tại · {route} · ±N m` · deny modal `DES-MOB-GPS-DENY` · timeout toast · **cấm** implement sheet check-in |

## 2. Design / UI

| Zone | Pattern | Notes |
|------|---------|-------|
| CTA | `LinmPrimaryButton` + `#i-mappin` | Nhãn **Ghim vị trí hiện tại** · `DES-MOB-CI-PIN-HERE` |
| Toast | `LinmToast` success | Copy demo `pinHereCheckin` · route từ session active / demo |
| Deny | In-app modal | `DES-MOB-GPS-DENY` · **cấm** `UIAlert` / `AlertDialog` hệ thống |
| Map reuse | pin `.here` + zoom follow | Owner behavior trên `#sc-patrol-map` · camera span demo |
| Handoff | → `patrol-checkin` | Demo `openSheet('checkin')` · **cấm** gộp form check-in vào slug này |

## 3. API (mobile BFF)

| Method | `{BffPrefix}` path | Status |
|--------|-------------------|--------|
| GET | `patrol/sessions` | **Live** — Route / active session cho toast lý trình |
| — | GPS | **Device** · không POST pin P1 |

**Cấm invent:** `api/v1/patrol-pin` · `POST …/pins` · ERP.* · app `:5101` trực tiếp · Kind E check-ins P1 trên pack này.

## 4. Sibling (không gộp slug)

| Slug | Từ patrol-pin |
|------|----------------|
| `patrol-home` | Entry hub · reuse |
| `patrol-map` | Entry map · reuse owner pin |
| `patrol-checkin` | Handoff sau ghim · sheet **Ghi điểm tuần** · **cấm** implement trên pack này |

## 5. Demo SSOT

Frame iOS 390×844 · Android 412×915 · copy VN từ `pinHereCheckin()` + `DES-MOB-CI-PIN-HERE` · modal `DES-MOB-GPS-DENY`.

## Implement tracking

| lane | phase | status | updatedAt |
|------|-------|--------|-----------|
| web | — | — | — |
| mobile | `done` | `done` | `2026-08-21T04:03:52.268Z` |
