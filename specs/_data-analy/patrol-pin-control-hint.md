# Data-analy — patrol-pin (controlHint)

| | |
|---|---|
| feature | `patrol-pin` |
| title | [Mobile] [Tuần đường] -> Ghim vị trí hiện tại |
| role | `data_analy` · `/agent-data-analy-mobile` · mode `feature_context` |
| packKind | **`sheet`** (CTA → flow ghim · handoff check-in sheet sibling) |
| changeScope | `edit_page` |
| status | **confirmed** |
| taskId | `task_48f136ed` |
| demo | `specs/patrol-pin/ui/prototype/{ios,android}/index.html` `DES-MOB-CI-PIN-HERE` · `pinHereCheckin()` · `#sc-patrol-home` / `#sc-patrol-map` |
| ctx | `docs/context/features/patrol-pin.md` · `patrol-home.md` · `patrol-map.md` · `patrol-checkin.md` · `patrol.md` |
| generatedAt | `2026-09-12T11:55:00.000Z` |
| prior | `task_5b298c0a` · contentHash `sha256:patrol-pin-control-hint-20260821` |

**Cấm:** watermark Gói · device label · invent `api/v1/patrol-pin` / `POST …/pins` · gộp form **Ghi điểm tuần** (`patrol-checkin`) · fake lat/lng · native system alert · ERP.* · `mfeStdUrl`.

## § Delta Current vs New (GAP review 2026-09-12)

| | Current (shipped) | New (DoD) |
|--|-------------------|-----------|
| GPS | Live device · deny modal · timeout toast | **giữ** · **cấm** fake |
| Toast pin | `Đã ghim… · {route} · ±N m` sau fix OK | **giữ** |
| Server write | **không** — chỉ GET sessions + toast | **bắt buộc** ghi vị trí vào ca Đang tuần |
| Persist path | — | **handoff** `patrol-checkin` với `sessionId` + `LocationFix` (lat/lng/accuracyM) · sibling **POST** `patrol/sessions/{id}/check-ins` (BE **Live** `CreateCheckIn`) |
| Handoff | stub toast «Handoff · Ghi điểm tuần» | **real** openSheet / navigate sibling · **cấm** form trên pack pin |
| Alt | — | SA **không** chọn pin auto-POST khi thiếu PlanPointLabel / MatchOk (BE validate chặn) |
| Offline | toast + local GPS | toast + queue handoff payload · sync khi online (sibling / offline pack) |

## Tech factors

| Factor | P1 | Notes |
|--------|----|-------|
| GPS | **yes** | Live fix · accuracy · **cấm** fake |
| Map | reuse | Trên `patrol-map` · pin `.here` + follow · hub = toast + handoff |
| Camera | n/a | sibling check-in |
| Offline | yes | Ghim local + toast · queue handoff nếu mất sóng |
| Biometric | n/a | |
| Push | n/a | |

## § Tab index

`tabs: none` — CTA / sheet flow · **không** segment riêng. Shell Tab 5 **giữ** khi đứng hub/map (`GAP-TAB-01`).

## § Demo dual

Cùng copy VN · cùng `#i-mappin` · toast `Đã ghim vị trí hiện tại · QL.1 · Km 1561+134 · ±4 m` (route/accuracy bind). Modal deny cùng copy `DES-MOB-GPS-DENY`. **Cấm** invent icon. Demo `pinHereCheckin` vẫn SSOT UI — persist = native/BFF Delta (PO/Design giữ layout).

## controlHint

| Field | VN | controlHint | Size | Kit | Notes |
|-------|----|-------------|------|-----|-------|
| pinHere | Ghim vị trí hiện tại | PrimaryButton | 16 | `LinmPrimaryButton` + `LinmMapPinGlyph` `#i-mappin` | Hub + map · `DES-MOB-CI-PIN-HERE` |
| pinToast | Đã ghim vị trí hiện tại · {route} · ±N m | Toast | 13–16 | `LinmToast` | Success sau fix OK · **trước** handoff |
| locDenyTitle | Định vị bị tắt | ModalTitle | 17 | in-app modal | `DES-MOB-GPS-DENY` |
| locDenyBody | Cần vị trí để chấm công / chấm điểm tuần… | ModalBody | 13 | in-app modal | copy demo |
| locDenyCopy | Sao chép hướng dẫn | PrimaryButton | 16 | `LinmPrimaryButton` | toast hướng dẫn |
| locDenyLater | Để sau | SecondaryButton | 16 | `LinmSecondaryButton` | đóng |
| locTimeout | Chưa lấy được vị trí. Thử lại. | Toast | 13–16 | `LinmToast` | warning · **không** handoff |
| handoffCheckin | Ghi điểm tuần | Route / Sheet | — | sibling `patrol-checkin` | **real** openSheet · payload `sessionId`+`LocationFix` · **cấm** form trên pack này |
| persistGate | (implicit) | — | — | — | Persist = sibling POST check-ins · **cấm** invent `/pins` |

UNCLEAR = **none** (path A handoff+POST sibling chốt).

## Version meta

| Field | Value |
|-------|-------|
| skillId | agent-data-analy-mobile |
| skillVersion | 2026.08.19.23 |
| schemaVersion | 1 |
| workflowVersion | 2026.08.19.29 |
| rulesVersion | 2026.08.19.34 |
| contentHash | sha256:patrol-pin-control-hint-20260912-persist |
| changeScope | edit_page |
| gapId | GAP-MOB-PIN-PERSIST-01 |
