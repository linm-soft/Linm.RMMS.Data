# Prototype — field-reflect

Design gate: dual **`ios/`** + **`android/`** · reviewUrl file:// · autoApprove=ON → `design_confirm` **approve**.

| Platform | Path | Frame |
|----------|------|-------|
| iOS | `prototype/ios/index.html` | 390×844 |
| Android | `prototype/android/index.html` | 412×915 |

**Owner:** `#sc-field-reflect` · `DES-MOB-FIELD-REFLECT` · kind `DES-MOB-FIELD-KIND`  
**Query:** `?deny=1` GPS deny · `?empty=1` no-active (banner + toast + empty loc) · `?fail=1` GET fail (toastSessionsFail + empty loc)  
**GAP:** `GAP-MOB-FIELD-SESS-01` live-only · **cấm** demo tuyến fallback  
**Cấm:** `mfeStdUrl` · `yarn start:std` · watermark Gói · sheet chrome · invent `api/v1/field-reflect`
