# handoff-compact · dev · field-reflect
schemaVersion: 1
role: dev
feature: field-reflect
taskId: task_a6f9a7eb
slash: /edit-mobile-feature
mode: fix_gaps · field_reflect_align_incident_create
updatedAt: 2026-09-01T12:10:00.000Z
status: confirmed

## DoR
- changeScope: edit_page · packKind: screen
- mfeStdUrl: — (cấm)
- flow: pick KCHT-32 (`#sc-field-pick`) → form (`#sc-field-reflect`) kind·chk·ảnh·GPS·mức·mô tả·Create/Draft
- entry: patrol-home `field-reflect` giữ · cấm gộp slug incident-create
- APIs: GET integration/asset-types · GET patrol/sessions · POST ai-vision/detect · POST incident/incidents
- checklist: AssetKcht32Catalog by asset code (reuse IncidentCreateChecklist) · cấm invent API

## VERIFY GATE
| gate | result |
|------|--------|
| iOS xcodegen + xcodebuild iPhone 17 Pro | PASS |
| Android assembleDebug | PASS |
| BFF dotnet build | PASS |
| Step 4b | n/a (reuse live endpoints) |

## ACTION WORK
| action | pair | work |
|--------|------|------|
| Pick asset | → form | yes |
| Create | incident POST | yes · GPS gate |
| Draft | offline queue | yes |

## Debt
- GAP-MOB-FIELD-MEDIA-01 media[] Signed deferred
- GAP-QA-FIELD-GPS-TIMING-01 Defer

## Paths
- iOS: Presentation/Features/FieldReflect/*
- Android: presentation/feature/fieldreflect/*
- implement: specs/field-reflect/implement/{ios,android}.md
