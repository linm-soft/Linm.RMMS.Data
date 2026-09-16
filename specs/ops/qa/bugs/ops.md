# QA bugs — ops

STATUS: **CLOSED** · Must **0** · Should **2** DEFER  
Handoff: Review `/agent-review-mobile` · optional Dev Should  
align_confirm: **approve** (autoApprove=ON · QA `task_1f014c56`)

| ID | Zone | Demo shot | iOS shot | Android shot | SSOT | Lệch | Owner |
|----|------|-----------|----------|--------------|------|------|-------|
| GAP-MOB-UX-COMP-OPS-01 | `#sc-ops` top bar trailing | prototype android | A3-CORE | P6-CORE | MapFile `LinmTopBar` · iOS trailing nil | Android default `MoreHoriz` · no action | Dev dual · **DEFER** · non-block |
| GAP-BE-OPS-INBOX-500 | inbox GET | — | A3-CORE toast | P6-CORE toast | BFF proxy Notification | API **500** · EmptyChrome OK | BE · **DEFER** · non-block |
| GAP-QA-E2E-HARVEST-01 | harvest | — | — | — | e2e-qa-mobile `latestMaestroTakeScreenshotDir` | stale `~/.maestro` overwrote CORE | AutoCode · **CLOSED** this turn (manual re-copy) |

**Cấm** PASS khi Must > 0 — Must = **0** · QA **confirmed**.
