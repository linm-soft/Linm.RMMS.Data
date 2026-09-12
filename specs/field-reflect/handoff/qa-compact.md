# Handoff compact — qa

schemaVersion: 1
feature: field-reflect
packKind: screen
role: qa
status: done
skillVersion: 2026.09.05.03
writtenAt: 2026-09-12T11:12:00.000Z
taskId: task_003bfdc2
slash: /agent-qa-mobile
changeScope: edit_page
autoApprove: ON
e2eQa: ON

## Decisions
- gap=`field_reflect_sessions_live_only` · **GAP-MOB-FIELD-SESS-01** · T-QA-FIELD-SESS-LIVE **PASS** · T-QA-TAB-01 **PASS**
- e2e: `yarn e2e-qa-mobile` · cases A11,A10,A9,A3,P6,P6-2 · **ok=true** · phase1_iphone · A4 DEFER
- visual: `/review-align-ux-ios-android` CORE Read · **Aligned** · Must **0**
- android.yaml: IME Enter login · **cấm** eraseText (fix GAP-QA-STORE-03)
- mfeStdUrl: none · ERP.*: none · verdict: **PASS** → review
- UNCLEAR: none

## Inventory (slim)
| id | label | controlHint | notes |
|----|-------|-------------|-------|
| locationRow | Vị trí đã chốt | ListRow | live-only · iOS empty · And live GPS |
| toastSessionsFail | sessions fail | Toast | wired · not forced in CORE |
| kindPills / photos / detect / severity / checklist | keep | — | Aligned |
| btnCreate / btnDraft | CTA | Primary/Secondary | P6-2 |

## Screens / zones (ids only)
- `#sc-field-reflect` · `#sc-field-pick` · `DES-MOB-FIELD-REFLECT` · `DES-MOB-FIELD-KIND`
- PNG: `qa/screens/{A11-LAUNCH,A9-LOGIN,A3-CORE,P6-CORE,P6-CORE-2}.png`
- store: `qa/store/field-reflect/` · CAPTURE + manifest ok=true

## API / tasks (ids only)
- GET `patrol/sessions` live-only · POST detect · POST incident · GET asset-types
- T-QA-FIELD-SESS-LIVE · T-QA-TAB-01: **done**

## UNCLEAR
- none

## Full paths (Read only if needed)
- scenarios: /Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Data/specs/field-reflect/qa/scenarios.md
- CAPTURE: /Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Data/specs/field-reflect/qa/store/field-reflect/CAPTURE.md
- manifest: /Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Data/specs/field-reflect/qa/store/field-reflect/manifest.json
- align: /Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Data/specs/field-reflect/ui/review/align-ux.md
- STATUS: /Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Data/specs/field-reflect/STATUS.md

## Next
role: review
artifact: specs/field-reflect/review/*
slash: /agent-review-mobile
task: pending
