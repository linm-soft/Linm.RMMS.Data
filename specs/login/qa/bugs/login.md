# QA bugs — login

**Feature:** `login` · `#sc-login`  
**Source:** `/edit-mobile-feature` 2026-09-13 · real device typed ink

| ID | OS | Severity | Status | Symptom | Fix |
|----|----|----------|--------|---------|-----|
| GAP-MOB-EDIT-FIELD-INK | iOS + Android | Must | Closed | `#f-user` / `#f-pass` chữ trắng khi user gõ trên máy thật (Dark Mode / OEM Force Dark) | Kit lock `onSurface` · iOS `LinmFieldChrome` · Android `forceDarkAllowed=false` |
| GAP-MOB-EDIT-FAIL-FIELDS | iOS + Android | Must | Closed | Login fail tự wipe `#f-user` / `#f-pass` (clear MK lúc submit + `finally`/`defer`) | Reset `#f-pass` **chỉ** khi login OK · fail/offline/HĐ giữ cả hai field |

Must OPEN: **0**
