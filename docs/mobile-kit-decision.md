# Kit decision — `/build-mobile-app` Step 5

**Date:** 2026-08-18  
**Ask:** user re-evaluate từ context (không scaffold kit mù)

## Verdict

| Key | Value |
|-----|--------|
| kit_needed_now | **yes** |
| kit_mode | `export_then_map` |
| kit_skip | false |
| reason | Kit extract chrome (chip/seg/badge/kpi/hub/fab) · tên product-agnostic (no RMMS) · `design_confirm` vẫn pending |

## Evidence (context)

| Source | Finding |
|--------|---------|
| `specs/mobile-p1/STATUS.md` | phase `design` · `design_confirm` **pending** · pipeline SA/Dev **sau** confirm |
| `specs/mobile-p1/ui/` | Prototype HTML + `design.md` — **không** phải `ui/ux-analy.md` §3 |
| `docs/` | `html-to-native-map.md` + kit extract (chip/seg/badge/kpi/hub/fab) |
| `{IosRoot}` / `{AndroidRoot}` | `shell_only=true` · 0 feature screen |
| Tokens | Hex từ `docs/mobile-tokens.json` · kit `LinmMobileKit` / `org.linmsoft.mobile:ui` |

Skill `/build-common-component-mobile`: export kit → UPDATE map. **Cấm** giả `design_confirm` — extract only.

## Khi nào chạy kit

Sau `/mobile-ui-ux-analy` (packet `ui/ux-analy.md` + tokens) **và** `design_confirm` · trước `/agent-dev-ios` / `/agent-dev-android`.  
Khi đó: `kit_mode=setup_dual` · `p1_min` hoặc `packet_map`.

## BFF (đã chốt AskQuestion)

App dùng **`mobile-bff/api/v1`** (`Linm.RMMS.Mobile.Bff` :5202).  
`specs/mobile-p1/mobile/context.md` vẫn ghi `web-bff` — stale so với shell; sửa khi design confirm, **không** đổi app về web-bff.
