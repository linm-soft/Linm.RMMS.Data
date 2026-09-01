# handoff-compact · qa · field-reflect
schemaVersion: 1
role: qa
feature: field-reflect
taskId: task_26b1db16
slash: /agent-qa-mobile
updatedAt: 2026-09-01T12:17:58.000Z
status: confirmed
autoApprove: ON
e2eQa: ON

## DoR
- changeScope: edit_page · packKind: screen · gap field_reflect_align_incident_create CLOSED
- mfeStdUrl: — (cấm)
- e2e: yarn e2e-qa-mobile · cases A11,A10,A9,A3,P6,P6-2 · **PASS** · ok=true
- visual: /review-align-ux-ios-android CORE Read · **Aligned** · Must 0
- flow: hub → #sc-field-pick → ak32 → #sc-field-reflect · kind·chk·ảnh·GPS·mức·mô tả·Create/Draft
- Maestro yaml updated for pick gate

## Evidence
| path | note |
|------|------|
| qa/scenarios.md | confirmed |
| qa/store/field-reflect/CAPTURE.md | PASS ×6 |
| qa/store/field-reflect/manifest.json | ok=true · 2026-09-01T12:17:51Z |
| qa/screens/{A11,A9,A3,P6,P6-2}.png | live Maestro |

## Debt
- GAP-MOB-FIELD-MEDIA-01 Accept
- GAP-QA-FIELD-GPS-TIMING-01 Defer

## Next
- review · pending · autoApprove ON
- compact prior missing design/sa/tl · used STATUS + dev-compact + implement
