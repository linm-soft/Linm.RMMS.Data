# QA bugs — patrol-pin

STATUS: **CLOSED** · Must **0** · Should **0**  
Handoff: Review `/agent-review-mobile`  
align_confirm: **approve** (autoApprove=ON · QA `task_3a68f8d3`)

| ID | Zone | Demo | iOS | Android | SSOT | Lệch | Owner |
|----|------|------|-----|---------|------|------|-------|
| — | — | — | — | — | — | none | — |

**Cấm** PASS khi Must > 0 — Must = **0** · QA **confirmed**.

## Notes (resolved during QA)

- Lần 1 auto-gen Maestro YAML chụp A3 trước login → đã thay `qa/e2e/{ios,android}.yaml` (login seed → hub/map pin) · AutoCode default `maestroFlowYaml` cũng sửa để **cấm** A3 trước login.
- Android: submit login qua `pressKey: Enter` trên `f-pass` (ImeAction) — tap `btn-login` khi IME mở dễ miss.
