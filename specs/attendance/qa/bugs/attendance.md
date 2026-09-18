# QA bugs — attendance

| ID | Sev | Status | Note |
|----|-----|--------|------|
| GAP-MOB-ATT-CHECKIN-01 | Must | **CLOSED** | 2026-09-16 `/edit-mobile-feature` · live «Không chấm được. Thử lại.» sau **Chấm vào** · 7 ngày trống dù BFF POST 2xx. Root: client treat decode/empty `lastWho`/offline as fail · Android Moshi `BigDecimal` lat/lng. Fix dual: POST 2xx skip body · lat/lng `Double` · JWT `lastWho` · GPS invalid → locTimeout · offline toast. |
| GAP-MOB-ATT-03 | Must | **CLOSED** | 2026-09-18 `/edit-mobile-feature` · live GPS deny chỉ toast `patrol.map.locDeny` («Cần vị trí để ghim…»). Dual: OS permission confirm (Android `rememberAskLocationPermission`) + in-app `GpsDenyModal`/`GpsDenyDialog` `DES-MOB-GPS-DENY` · **không** POST · **cấm** toast locDeny. |
