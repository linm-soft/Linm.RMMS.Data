# QA bugs — supervise-detail

| ID | Severity | Platform | Note | Status |
|----|----------|----------|------|--------|
| GAP-QA-SUP-DET-AND-LIST-01 | Must | Android | Login OK · company LINM · open `#sc-supervise` → `sup-empty`. BFF: **0** GET attendance-logs from 10.0.2.2 (login + patrol/sessions OK). Blocks detail. | **OPEN** |
| GAP-QA-STORE-03 | Must | Android | Maestro-AND FAIL · P6 invalid | **OPEN** |

Repro: seed LINM attendance row → emulator login → tile Giám sát → expect card + BFF GET list.

Fix: Dev Android Supervise Appear/load · **cấm** OfflineDemo · re-QA.
