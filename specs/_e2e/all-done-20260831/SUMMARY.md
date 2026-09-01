# E2E all_done 2026-08-31

**Verdict:** `GAP-E2E-RUN-01` — batch **stopped after 1/24**. **Cấm** submit.

| Slug | Result | Gap |
|------|--------|-----|
| `home` | FAIL | `GAP-QA-STORE-03` MAESTRO-AND (Pixel_2 · after hideKeyboard / `A9-LOGIN` screenshot). iOS A11/A9/A3 + BFF + P6 PNG fallback PASS. |
| 23 còn lại | **not run** | runner abort (`set -e` + backtick) |


## Resume remaining 23

- FAIL login-forgot exit=1
- FAIL me exit=1
- FAIL ops exit=1
- FAIL feedback exit=1
- FAIL cam-view exit=1
- FAIL asset-hub exit=1
- FAIL asset exit=1
- FAIL supervise exit=1
- FAIL mnt-list exit=1
- FAIL mnt-progress exit=1
- FAIL mnt-log exit=1
- FAIL incident-list exit=1
- FAIL incident-create exit=1
- FAIL incident-detail exit=1
- FAIL vis-capture exit=1
- FAIL field-reflect exit=1
- FAIL cam-patrol exit=1
- FAIL patrol-home exit=1
- FAIL patrol-history exit=1
- FAIL patrol-offline exit=1
- FAIL patrol-pin exit=1
- FAIL patrol-checkin exit=1
- FAIL attendance exit=1

resume PASS=0 FAIL=23 TOTAL=23

## Root cause (resume)

Maestro **Unable to locate a Java Runtime** in the resume shell (`JAVA_HOME` not exported) → every slug `MAESTRO-IOS` `GAP-QA-STORE-01` + `MAESTRO-AND` `GAP-QA-STORE-03`. Fallback sim/adb shots A11/A9/A3/P6 still PASS. **Cấm** submit.

