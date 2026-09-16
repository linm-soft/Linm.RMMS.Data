# Handoff compact — data_analy

schemaVersion: 1
feature: asset-ai
packKind: sheet
role: data_analy
status: done
skillVersion: 2026.08.25.01
writtenAt: 2026-09-01T17:00:00.000Z
taskId: task_fcd587c7
slash: /agent-data-analy-mobile
mode: feature_context
changeScope: new_page

## Decisions
- packKind: **sheet** · surface full `#sc-asset-ai` · `DES-MOB-ASSET-AI`
- domain: AiVision **asset-candidates** (peer `ai-asset-detect`) · **không** defect `ai-vision` / Incident
- flow: hub tile Camera AI → capture → GPS chốt → uploads → POST `detect-assets` → bind AssetClass/Score → push `det-hitl`
- Confirm/Dismiss = sibling `det-hitl` (enqueue) · **cấm** auto sổ trên slug này
- BFF live: detect-assets · uploads · sessions/routes · **cấm invent** `api/v1/asset-ai`
- Step 4b: **N/A** · mfeStdUrl: none · ERP.*: none
- next: **po** (`/agent-po-mobile`) · cite GAPs NAV/MEDIA/GPS/HITL/SCORE/PACK

## Artifacts
- `docs/context/features/asset-ai.md` · hash `asset-ai-ctx-20260901`
- `_data-analy/asset-ai-control-hint.md` · hash `asset-ai-control-hint-20260901`
- `_data-analy/asset-ai-real-data.md` · hash `asset-ai-real-data-20260901`
- `_data-analy/asset-ai-bff-endpoints.md` · hash `asset-ai-bff-20260901`
- `_data-analy/asset-ai-action-tree.md` · hash `asset-ai-action-tree-20260901`

## Inventory (slim)
| id | label | controlHint | notes |
|----|-------|-------------|-------|
| sc-asset-ai | Camera AI | TopBar+Photo+rows+CTA | DES-MOB-ASSET-AI |
| addPhoto | (camera) | CameraButton | `#i-camera` openCapture |
| rowPos | Vị trí đã chốt | ListRow | Route+GPS * |
| rowClass | Loại đề xuất | ListRow | AssetClass |
| rowScore | Độ tin cậy | ListRow | Score · SCORE-01 |
| btnSend | Gửi nhận diện | PrimaryButton | POST detect → det-hitl |
| btnCancel | Hủy | SecondaryButton | hub |

## BFF (slim)
| action | method | path |
|--------|--------|------|
| upload | POST/PUT | `ai-vision/uploads/*` |
| detect | POST | `ai-vision/detect-assets` |
| route prefill | GET | `patrol/sessions` · `integration/road-routes/search` |
| confirm | — | OUT → `det-hitl` |

## Gaps
- GAP-MOB-ASSET-AI-NAV-01 · MEDIA-01 · GPS-01 · HITL-01 · SCORE-01 · PACK-01

## OUT
- invent path · ERP.* · mfeStdUrl · collect form · cam-patrol · confirm UI · fake GPS/mock://

## Next
role: po
artifact: specs/asset-ai/po/requirement.md
slash: /agent-po-mobile
