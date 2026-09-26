# Prototype — web-rmms-attendance

Design gate: **prototype + reviewUrl** — autoApprove=ON → `design_confirm=approve`.

| | |
|--|--|
| Title | Chấm công |
| Pack kind | `list` |
| Demo SSOT | **N/A** · live empty/`[]` · **cấm** demoDays |
| MFE | `Linm.Web.RMMS.Mobile` |
| Frame | phone ≤430 · Android DES-MOB-ATT 1-1 |
| reviewUrl | `file:///D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-attendance/ui/prototype/index.html` |

### States

| Query | Expect |
|-------|--------|
| (default) | Hub ready |
| `?deny=1` | GPS deny modal |
| `?empty=1` | Empty history / hero — |
| `?checked=1` | Hero Đã chấm |
| `?offline=1` | Offline banner |

Zones: ATT-00…09 · DES-MOB-ATT · DES-MOB-GPS-DENY · report/day/log RO chain.
