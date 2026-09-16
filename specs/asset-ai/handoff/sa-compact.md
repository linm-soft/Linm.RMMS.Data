# Handoff compact — sa

schemaVersion: 1
feature: asset-ai
packKind: sheet
role: sa
status: done
skillVersion: 2026.08.25.01
writtenAt: 2026-09-01T17:15:00.000Z
taskId: task_e939f217
autoApprove: ON
slash: /agent-sa-mobile
changeScope: new_page

## Decisions
- surface: sheet `#sc-asset-ai` · `DES-MOB-ASSET-AI` · packKind **sheet** (PACK-01)
- domain: AiVision detect-assets + uploads · peer `ai-asset-detect` · **cấm** invent `api/v1/asset-ai`
- flow: hub → GPS* · capture · uploads→ImageUrl · POST detect · bind AssetClass/Score% · toast Code → enqueue `det-hitl`+Id
- SCORE-01: P1 show Score% · HITL Confirm/Dismiss **OUT**
- BFF prefix: `mobile-bff/api/v1` · proxy catch-all · **cấm** ERP.* · mfeStdUrl none
- Step 4b: **N/A** · TZ/XCO/SHARE: na · Offline: fail→toast · **cấm** fake-200
- GPS*: deny→DES-MOB-GPS-DENY · CTA off · **cấm** fake/gõ tay
- Media: uploads init+object **P1 required** · **cấm** mock://
- solution_confirm: **approve** (autoApprove)
- next: **team-lead** (`/agent-team-lead-mobile` or workflow TL)

## Artifacts
- `be/solution-discovery.md` · hash `asset-ai-sa-solution-20260901`
- prior compact: data_analy · po · design
- BFF SSOT: `_data-analy/asset-ai-bff-endpoints.md`

## Inventory (slim)
| id | label | controlHint | notes |
|----|-------|-------------|-------|
| sc-asset-ai | Camera AI | TopBar+Photo+rows+CTA | DES-MOB-ASSET-AI |
| addPhoto | (camera) | CameraButton | uploads→ImageUrl |
| rowPos | Vị trí đã chốt | LinmListRow | Route+GPS * |
| rowClass | Loại đề xuất | LinmListRow | AssetClass |
| rowScore | Độ tin cậy | LinmListRow | Score % |
| btnSend | Gửi nhận diện | PrimaryButton | POST→det-hitl |
| btnCancel | Hủy | SecondaryButton | hub |

## BFF (slim)
| action | method | path |
|--------|--------|------|
| upload init | POST | `ai-vision/uploads/init` |
| upload object | PUT | `ai-vision/uploads/{id}/object` |
| detect | POST | `ai-vision/detect-assets` |
| route prefill | GET | `patrol/sessions` · `integration/road-routes/search` |
| nearby | GET | `ai-vision/asset-candidates/nearby` (opt) |
| confirm | — | OUT → `det-hitl` |

## Gates
- be_repo_confirm=rmms · tz_na · xco_na · share_na · solution_confirm=approve
- T-BE-*=n/a · T-IOS-1 · T-AND-1 · T-QA-1 (e2e queued)

## OUT
invent path · ERP.* · mfeStdUrl · Confirm UI · Step4b · Write native · fake GPS/mock://

## Next
role: team-lead
artifact: specs/asset-ai/task/asset-ai.md
slash: /agent-team-lead-mobile
