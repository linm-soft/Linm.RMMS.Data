# Handoff compact — qa

schemaVersion: 1
feature: patrol
packKind: list
role: qa
status: failed
verdict: FAIL
skillVersion: 2026.08.14.5
writtenAt: 2026-09-06T18:30:00.000Z
changeScope: edit_page
taskId: task_9f864414
contentHashPriorDev: sha256:task_12280943
contentHashPriorDataAnaly: sha256:f2761b7dc5b13b1388b9db493b028a10227efd81de142607827c582bc04450b7
autoApprove: ON
e2eQa: ON · FAIL packet URL · live VN PASS
mfeStdUrl: http://localhost:9304/patrol

## Decisions
- changeScope: edit_page · T-QA-MEDIA + e2e S0/S1/QA-20
- verdict: **FAIL** · GAP-QA-PAT-STD-01 P0 · queue failed · qa_fail_rollback
- packet `/patrol` → 404 NotFound · live `/td-tk` + `/td-tk/tao-moi` PASS (media upload zone)
- yarn e2e-qa CLI FAIL (npx playwright install) → capture local chromium-1187 headless · **cấm** kill worker
- yarn typecheck+build PASS · media code KEEP PASS trên live VN
- **cấm** phase=done · next=Dev/TL fix route alias hoặc STATUS mfeStdUrl=/td-tk → re /agent-qa

## Inventory (slim)
| id | controlHint | notes |
|----|-------------|-------|
| mediaIds | FileMulti | live VN PASS · packet blocked |
| route/status/… | KEEP | prior CLOSED |
| AC-G-08 | — | no media grid col PASS |

## Screens / zones (ids only)
- S0/S1/QA-20 packet FAIL · S0-vn/S1-vn/QA-20-vn/QA-MEDIA-upload PASS
- PNG: specs/patrol/qa/screens/{S0,S1,QA-20,S0-vn,S1-vn,QA-20-vn,QA-MEDIA-upload}.png
- manifest ok=false · liveOk=true
- zones: list A–D · form data-zone=upload · view media-gallery

## API / tasks (ids only)
- T-QA-MEDIA blocked by STD-01 · T-QA-01/CRUD KEEP
- API api/v1/patrol/sessions · files/* · **cấm ERP.***
- next: qa_fail_rollback → fix `/patrol` alias or STATUS url → re-QA

## UNCLEAR
- none P0 besides STD-01 ownership (Dev route alias vs STATUS chốt /td-tk)

## Full paths
- scenarios: D:/AI-QLBD/Linm.RMMS.Data/specs/patrol/qa/scenarios.md
- screens: D:/AI-QLBD/Linm.RMMS.Data/specs/patrol/qa/screens/
- prior: D:/AI-QLBD/Linm.RMMS.Data/specs/patrol/handoff/dev-compact.md
- STATUS: D:/AI-QLBD/Linm.RMMS.Data/specs/patrol/STATUS.md
