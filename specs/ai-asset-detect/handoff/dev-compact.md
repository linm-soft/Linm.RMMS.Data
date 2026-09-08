# Handoff compact — dev

schemaVersion: 1
feature: ai-asset-detect
packKind: list
featureClass: ai
role: dev
status: done
skillVersion: 2026.09.05.03
writtenAt: 2026-09-06T17:15:00.000Z
changeScope: edit_page
taskId: task_5c4b82f2
route_confirm: route_a
solution_confirm: approve
design_confirm: approve

## Decisions
- changeScope: edit_page · delta ImageFileId + API-12 miss + missOnly + Leave + filter bar
- formPattern: Kind D Slideout · Confirm/Dismiss/Miss Modal · Map Kind F
- mfe: Linm.Web.RMMS.AiVision · be: Linm.RMMS.WebService (cấm ERP.*)
- MIG-FILE: Schema_RmmsAiVisionAssetCandidates_ImageFileId (ALTER only)
- miss: POST /{id}/miss → IIncidentRecordService · MissFlag
- file: ImageFileId SSOT · ImageUrl derived/legacy · uploadId bridge
- filter: LinErpListFilterBar + missOnly · Reconcile mất · row Mất?
- leave: LeaveConfirmModal · 0 AI badge header
- build: FE typecheck+build · BE API+BFF **PASS**
- e2e: queued QA only — not run
- open questions: FileService resign client (debt) · RequirePermission NuGet

## Inventory (slim)
| id | label | controlHint | notes |
|----|-------|-------------|-------|
| missOnly | Chỉ mất | Checkbox | filter |
| imageFileId | Frame | FileUpload | form |
| expectedAssetId | TS kỳ vọng | SearchInput | miss modal |
| missWindowMin | N phút | Number | miss modal |

## Screens / zones (ids only)
- S-LIST · S-FORM · S-MOD-CONFIRM/DISMISS/MISS · S-MAP · S-FEED · S-LEAVE
- mfeStdUrl=http://localhost:9303/ai-vision/ai-asset-detect
- reviewUrl=file:///D:/AI-QLBD/Linm.RMMS.Data/specs/ai-asset-detect/ui/prototype/ai-asset-detect-list-prototype.html

## API / tasks (ids only)
- APIs: API-01(+missOnly)…12 · L-01…05
- T-*: MIG-FILE · BE-MISS/FILE · BFF miss · UI-FILTER/MISS/FILE/LEAVE **done**
- debt: FileService resign GET · RequirePermission live
- next: /agent-qa · roleOnly

## UNCLEAR
- none

## Full paths (Read only if needed)
- implement: D:/AI-QLBD/Linm.RMMS.Data/specs/ai-asset-detect/implement/ai-asset-detect.md
- STATUS: D:/AI-QLBD/Linm.RMMS.Data/specs/ai-asset-detect/STATUS.md
- task: D:/AI-QLBD/Linm.RMMS.Data/specs/ai-asset-detect/task/ai-asset-detect.md
