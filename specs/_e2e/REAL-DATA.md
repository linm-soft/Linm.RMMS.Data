# Real data — RMMS Store W3 e2e (2026-09-16)

**Binary:** Release-iphonesimulator `1.0.7 (4)` · `com.drvn.rmms` · `-DSTORE_W0 -DSTORE_W2 -DSTORE_W3` (no `STORE_W1`) · `BffBase=https://rmms-mobile-bff.linm-soft.com` · `OsrmBase=` empty.  
**Cấm** Debug (`STORE_W1` + public OSRM). Device IPA cannot run on sim — this sim Release matches Archive wave.

## A10-BFF

| Endpoint | Result |
|----------|--------|
| `GET https://rmms-mobile-bff.linm-soft.com/health` | HTTP **200** `{"status":"healthy","kind":"mobile-bff"}` at 2026-09-16T15:57:29Z |
| Local `:5202` | listen (lab) — Store app **không** gọi localhost; traffic = prod BFF |

## Seed / login

E2E / Maestro local: **`rmms-admin`** (ADMIN-RMMS) — user chốt 2026-09-16. **Cấm** `rmms-001` trên run này. **Cấm** `linm-soft`.  
Apple Review Notes vẫn `rmms-001` khi nộp ASC (không dán `rmms-admin` trừ khi chốt lại).

## Wave OFF (không crawl expect-ON)

`guest.directions` / `staff.patrolMap` / GIS / `net.osrmPublic` — PASS nếu hiện = `GAP-E2E-WAVE-01`. Skip crawl taps `tile-map` / `row-quick-patrol-map` / `btn-map` → `sc-gis-map` / `sc-patrol-map`.
