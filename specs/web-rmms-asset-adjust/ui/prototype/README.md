# Prototype — web-rmms-asset-adjust

| | |
|--|--|
| Feature | `web-rmms-asset-adjust` |
| Title | Bớt hoặc sửa tài sản |
| packKind | `list` · phone list + confirm |
| MFE | `Linm.Web.RMMS.Mobile` |
| **reviewUrl** | `file:///D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-asset-adjust/ui/prototype/index.html` |
| peerStdUrl | `http://localhost:9301/web-rmms-asset-adjust` |
| design_confirm | **approve** (autoApprove=ON · `task_17437bf8`) |
| Demo SSOT | **N/A** · hash skip · **cấm** re-scan |

## Zones

AA-00 · AA-01 · AA-02 · AA-03 · AA-04 · AA-05 · AA-06 · AA-07 · AA-08

## Boards

List loaded · Empty · Error · Search · Confirm delete · After delete · Edit → peer

## HARD

- Soft DELETE confirm bắt buộc · toast + reload
- Sửa → peer `web-rmms-asset-list` `/asset/:id` · no PUT P1
- Phone ≤430 · no Lat/Lng row · no DES-GRID / LinErpListFilterBar
- Labels via `assetAdjust.*` keys (prototype VN for review only)
