# Handoff compact — po

schemaVersion: 1
feature: asset-ai
packKind: sheet
role: po
status: done
skillVersion: 2026.08.25.01
writtenAt: 2026-09-01T17:05:00.000Z
taskId: task_1c830b88
slash: /agent-po-mobile
changeScope: new_page

## Decisions
- surface: full `#sc-asset-ai` · `DES-MOB-ASSET-AI` · meta **sheet** (PACK-01)
- DoD: hub tile → GPS* · capture · upload ImageUrl · POST detect-assets · bind AssetClass/Score% · toast Code → enqueue `det-hitl`
- SCORE-01: **P1 show Score %** từ API · Design ẩn chỉ nếu brand note trong design.md
- HITL-01: Confirm/Dismiss **OUT** · push `det-hitl` + candidate Id
- BFF: uploads + detect-assets + sessions/routes · **cấm invent** `api/v1/asset-ai`
- Step 4b N/A · mfeStdUrl none · ERP.* none
- next: **design** (`/agent-design-mobile`)

## Artifacts
- `po/requirement.md` · hash `asset-ai-po-req-20260901`
- prior: `_data-analy/asset-ai-control-hint.md` · `asset-ai-real-data.md` · `asset-ai-action-tree.md`
- compact prior: `handoff/data_analy-compact.md`

## Inventory (slim)
| id | label | controlHint | notes |
|----|-------|-------------|-------|
| sc-asset-ai | Camera AI | TopBar+Photo+rows+CTA | DES-MOB-ASSET-AI |
| addPhoto | (camera) | CameraButton | `#i-camera` openCapture |
| rowPos | Vị trí đã chốt | ListRow | Route+GPS * · deny modal |
| rowClass | Loại đề xuất | ListRow | AssetClass sau detect |
| rowScore | Độ tin cậy | ListRow | Score % P1 |
| btnSend | Gửi nhận diện | PrimaryButton | POST → det-hitl |
| btnCancel | Hủy | SecondaryButton | hub |

## Device AC (slim)
GPS* · Camera slot asset-ai · Offline toast no fake-200 · Map none · Bearer Keychain

## Action tree (slim)
asset-hub → asset-ai (owner) → enqueue **det-hitl** only · same-slug: camera/GPS/upload/detect/cancel

## Gaps closed
NAV-01 · SCR-01 · CAP-01 · GPS-01 · MEDIA-01 · DET-01 · CTA-01 · HITL-01 · SCORE-01 · PACK-01

## OUT
invent path · ERP.* · mfeStdUrl · collect/confirm UI · cam-patrol · auto sổ · fake GPS/mock://

## Next
role: design
artifact: specs/asset-ai/ui/design.md · ui/ux-analy.md · prototype/{ios,android}
slash: /agent-design-mobile
