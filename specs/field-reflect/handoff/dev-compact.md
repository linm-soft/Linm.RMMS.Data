# Handoff compact — dev

schemaVersion: 1
feature: field-reflect
packKind: screen
role: dev
status: done
skillVersion: 2026.09.05.03
writtenAt: 2026-09-12T11:00:00.000Z
taskId: task_552af9c4
slash: /agent-dev-ios + /agent-dev-android
changeScope: edit_page
autoApprove: ON

## Decisions
- gap=`field_reflect_sessions_live_only` · **GAP-MOB-FIELD-SESS-01** · **CLOSED** dual
- Live-only GET `patrol/sessions` · empty → toast `field.banner.empty` · fail → `field.toast.sessionsFail` · **cấm** itemsOrDemo/demoToday
- T-IOS-FIELD-SESS-LIVE · T-AND-FIELD-SESS-LIVE **PASS** · prior T-IOS/AND-FIELD-REF **giữ**
- T-BE / T-BFF / Step 4b: **n/a** · mfeStdUrl: none · ERP.*: none
- VERIFY: iOS xcodegen+xcodebuild iPhone 17 Pro Max **PASS** · Android assembleDebug **PASS** · BFF `dotnet build` **PASS**
- e2eQa: ON queued · **cấm** e2e ở Dev · next: **qa** (`/agent-qa-mobile`)
- UNCLEAR: none · debt: none

## Inventory (slim)
| id | label | controlHint | notes |
|----|-------|-------------|-------|
| locationRow | Vị trí đã chốt | ListRow | live+GPS · empty if fail/empty |
| toastSessionsFail | Không tải được ca tuần | Toast | wired `field.toast.sessionsFail` |
| kindPills / photos / detect / severity / checklist | … | keep | unchanged |
| btnCreate / btnDraft | CTA | Primary/Secondary | keep |

## Screens / zones (ids only)
- `#sc-field-reflect` · `#sc-field-pick` · `DES-MOB-FIELD-REFLECT` · `DES-MOB-FIELD-KIND` · `DES-MOB-GPS-DENY`
- entry `#row-reflect` · mfeStdUrl: N/A

## API / tasks (ids only)
- GET `patrol/sessions` live-only · POST detect · POST incident · GET asset-types
- T-IOS/AND-FIELD-SESS-LIVE: **done**
- T-QA-FIELD-SESS-LIVE · T-QA-TAB-01: pending QA

## UNCLEAR
- none

## Full paths (Read only if needed)
- implement ios: /Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Data/specs/field-reflect/implement/ios.md
- implement android: /Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Data/specs/field-reflect/implement/android.md
- STATUS: /Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Data/specs/field-reflect/STATUS.md

## Next
role: qa
artifact: specs/field-reflect/qa/*
slash: /agent-qa-mobile
task: T-QA-FIELD-SESS-LIVE
