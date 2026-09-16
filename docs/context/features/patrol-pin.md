# Ghim vị trí hiện tại (mobile) — Feature Context

> **Slug:** `patrol-pin` · **Module:** `Patrol` · **Phase:** P1  
> **Status:** Signed · mobile field CTA từ hub Tuần đường (+ reuse trên bản đồ ca)  
> **Demo HTML:** `specs/patrol-pin/ui/prototype/{ios,android}/index.html` · `DES-MOB-CI-PIN-HERE` · `pinHereCheckin()` · `#sc-patrol-home` / `#sc-patrol-map`  
> **BE:** `Linm.RMMS.WebService` · domain **Patrol** · `api/v1/patrol/sessions` (+ Kind E `…/check-ins`)  
> **BFF:** `Linm.RMMS.Mobile.Bff` · `mobile-bff/api/v1/patrol/sessions*` (proxy) · **không** endpoint pin riêng

## 1. Tổng quan

| | |
|--|--|
| Mục tiêu | CTA **Ghim vị trí hiện tại** · loc live · toast lý trình + sai số · deny/timeout · **persist** vị trí vào ca Đang tuần qua handoff `patrol-checkin` |
| Persona | Tuần đường |
| Entry | Hub `patrol-home` primary pin · map `patrol-map` overlay pin (`reuse` owner = pack này) |
| DoD P1 | Live GPS · **cấm** fake · toast `Đã ghim… · {route} · ±N m` · deny `DES-MOB-GPS-DENY` · timeout toast · **ghi máy chủ** = handoff real → sibling POST check-ins · **cấm** form check-in trên pack này |

## § Delta Current vs New (GAP-MOB-PIN-PERSIST-01 · 2026-09-12)

| | Current | New |
|--|---------|-----|
| Write | GPS + toast only · không ghi máy chủ | Handoff `sessionId`+`LocationFix` → `patrol-checkin` POST `…/check-ins` (BE Live) |
| Handoff | stub toast | real openSheet / navigate |
| API invent | cấm `/pins` | **giữ cấm** |

## 2. Design / UI

| Zone | Pattern | Notes |
|------|---------|-------|
| CTA | `LinmPrimaryButton` + `#i-mappin` | Nhãn **Ghim vị trí hiện tại** · `DES-MOB-CI-PIN-HERE` |
| Toast | `LinmToast` success | Copy demo `pinHereCheckin` · route từ session active |
| Deny | In-app modal | `DES-MOB-GPS-DENY` · **cấm** `UIAlert` / `AlertDialog` hệ thống |
| Map reuse | pin `.here` + zoom follow | Owner behavior trên `#sc-patrol-map` |
| Handoff | → `patrol-checkin` | **real** openSheet · payload GPS+session · **cấm** gộp form |

## 3. API (mobile BFF)

| Method | `{BffPrefix}` path | Status |
|--------|-------------------|--------|
| GET | `patrol/sessions` | **Live** — Route / Id active cho toast + handoff |
| POST | `patrol/sessions/{id}/check-ins` | **Live** — persist owner = sibling `patrol-checkin` |
| — | GPS | **Device** · **cấm** fake |

**Cấm invent:** `api/v1/patrol-pin` · `POST …/pins` · ERP.* · app `:5101` trực tiếp · form Kind E trên pack pin.

## 4. Sibling (không gộp slug)

| Slug | Từ patrol-pin |
|------|----------------|
| `patrol-home` | Entry hub · reuse |
| `patrol-map` | Entry map · reuse owner pin |
| `patrol-checkin` | Handoff sau ghim · sheet **Ghi điểm tuần** + POST persist · **cấm** implement form trên pack này |

## 5. Demo SSOT

Frame iOS 390×844 · Android 412×915 · copy VN từ `pinHereCheckin()` + `DES-MOB-CI-PIN-HERE` · modal `DES-MOB-GPS-DENY`.

## Implement tracking

| lane | phase | status | updatedAt |
|------|-------|--------|-----------|
| web | — | — | — |
| mobile | `done` | `done` | `2026-09-12T12:37:04.262Z` |
