# Data-analy — patrol-pin (controlHint)

| | |
|---|---|
| feature | `patrol-pin` |
| title | [Mobile] [Tuần đường] -> Ghim vị trí hiện tại |
| role | `data_analy` · `/agent-data-analy-mobile` · mode `feature_context` |
| packKind | **`sheet`** (CTA → flow ghim · handoff check-in sheet sibling) |
| changeScope | `new_page` |
| status | **confirmed** |
| taskId | `task_5b298c0a` |
| demo | `specs/mobile-p1/ui/prototype/{ios,android}/index.html` `DES-MOB-CI-PIN-HERE` · `pinHereCheckin()` · `#sc-patrol-home` / `#sc-patrol-map` |
| ctx | `docs/context/features/patrol-pin.md` · `patrol-home.md` · `patrol-map.md` · `patrol.md` |
| generatedAt | `2026-08-21T02:50:22.000Z` |

**Cấm:** watermark Gói · device label · invent `api/v1/patrol-pin` · gộp form **Ghi điểm tuần** (`patrol-checkin`) · fake lat/lng · native system alert.

## Tech factors

| Factor | P1 | Notes |
|--------|----|-------|
| GPS | **yes** | Live fix · accuracy · **cấm** fake |
| Map | reuse | Trên `patrol-map` · pin `.here` + follow · hub = toast only |
| Camera | n/a | sibling check-in |
| Offline | yes | Ghim local vẫn chạy · toast lý trình demo nếu GET fail |
| Biometric | n/a | |
| Push | n/a | |

## § Tab index

`tabs: none` — CTA / sheet flow · **không** segment riêng. Shell Tab 5 **giữ** khi đứng hub/map (`GAP-TAB-01`).

## § Demo dual

Cùng copy VN · cùng `#i-mappin` · toast `Đã ghim vị trí hiện tại · QL.1 · Km 1561+134 · ±4 m` (route/accuracy bind). Modal deny cùng copy `DES-MOB-GPS-DENY`. **Cấm** invent icon.

## controlHint

| Field | VN | controlHint | Size | Kit | Notes |
|-------|----|-------------|------|-----|-------|
| pinHere | Ghim vị trí hiện tại | PrimaryButton | 16 | `LinmPrimaryButton` + `LinmMapPinGlyph` `#i-mappin` | Hub + map · `DES-MOB-CI-PIN-HERE` |
| pinToast | Đã ghim vị trí hiện tại · {route} · ±N m | Toast | 13–16 | `LinmToast` | Success sau fix OK |
| locDenyTitle | Định vị bị tắt | ModalTitle | 17 | in-app modal | `DES-MOB-GPS-DENY` |
| locDenyBody | Cần vị trí để chấm công / chấm điểm tuần… | ModalBody | 13 | in-app modal | copy demo |
| locDenyCopy | Sao chép hướng dẫn | PrimaryButton | 16 | `LinmPrimaryButton` | toast hướng dẫn |
| locDenyLater | Để sau | SecondaryButton | 16 | `LinmSecondaryButton` | đóng |
| locTimeout | Chưa lấy được vị trí. Thử lại. | Toast | 13–16 | `LinmToast` | warning |
| handoffCheckin | (implicit) | Route | — | sibling `patrol-checkin` | Demo `openSheet('checkin')` · **cấm** form trên pack này |

UNCLEAR = **none**.

## Version meta

| Field | Value |
|-------|-------|
| skillId | agent-data-analy-mobile |
| skillVersion | 2026.08.19.23 |
| schemaVersion | 1 |
| workflowVersion | 2026.08.19.29 |
| rulesVersion | 2026.08.19.34 |
| contentHash | sha256:patrol-pin-control-hint-20260821 |
