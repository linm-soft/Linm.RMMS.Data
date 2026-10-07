# Prototype — web-rmms-giao-viec-ql-hat

Design gate: **prototype + reviewUrl** — autoApprove=ON → design_confirm approve.

| | |
|--|--|
| Title | Giao việc chỉ QL_HAT |
| Pack kind | `list` |
| changeScope | `edit_page` |
| Demo SSOT | **N/A** · hash skip |
| MFE | `Linm.Web.RMMS.Mobile` |
| Frame | phone ≤430 · DES-MOB-INC-DETAIL |
| reviewUrl | `file:///D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-giao-viec-ql-hat/ui/prototype/index.html` |
| peerStdUrl | `http://localhost:9301/web-rmms-giao-viec-ql-hat` |

## Modes

| Query | Zone |
|-------|------|
| `?screen=list-inc` | GV-L-INC |
| `?screen=list-rpt` | GV-L-RPT |
| `?screen=detail-inc` | GV-D-INC |
| `?screen=detail-rpt` | GV-D-RPT |
| `?screen=form` | GV-F |
| `?screen=work` | GV-W |
| `?role=qlhat\|other` | CTA gate |
| `?leave=1` | DES-LEAVE |
| `?deny=1` | TOAST deny |

## Zones

GV-00 · GV-L-INC · GV-L-RPT · GV-D-INC · GV-D-RPT · GV-F · GV-W · DES-LEAVE · TOAST

**HARD:** CTA chỉ QL_HAT · hangMuc→due TT41 · cấm creator filter · cấm SlaHours=24 · cấm invent product route.
