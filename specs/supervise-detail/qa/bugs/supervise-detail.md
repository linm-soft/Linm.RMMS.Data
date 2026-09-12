# QA bugs — supervise-detail

| ID | Severity | Platform | Note | Status |
|----|----------|----------|------|--------|
| GAP-QA-SUP-DET-AND-LIST-01 | Must | Android | Login OK · open `#sc-supervise` → `sup-empty`. BFF: **0** GET `patrol/attendance-logs` from `10.0.2.2` (login + session-window OK). Seed LINM list 200 via curl. Blocks detail / P6. Dev ON_RESUME claim **not closed** (Appear log ≠ OkHttp emit). | **OPEN** |
| GAP-QA-STORE-03 | Must | Android | Maestro-AND FAIL · P6 invalid | **OPEN** |

Repro: seed LINM attendance row → emulator login → tile Giám sát → expect card + BFF GET list from `10.0.2.2`.

Fix (Dev): Android `#sc-supervise` must emit OkHttp GET on first entry (e.g. `LaunchedEffect` + resume) · **cấm** OfflineDemo · prove BFF log · re-QA.
