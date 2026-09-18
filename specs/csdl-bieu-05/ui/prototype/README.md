# Prototype — csdl-bieu-05

Design gate: **prototype + reviewUrl** · `design_confirm=approve` (autoApprove ON · `task_8d9445b7` · edit_page T-XLS-S05).

| | |
|--|--|
| Title | CSDL Biểu 05 — Rãnh các loại · Xuất Excel |
| Pack kind | `list` · Kind B A–D+F + Kind D Slideout · **keep typed** |
| changeScope | `edit_page` · toolbar Xuất · Import DEFER P1 |
| Resource | `ditches` · IdCode `RN-` · 18 cột typed |
| MFE | `Linm.Web.RMMS.Asset` · mfeStdUrl `http://localhost:9301/so-ts/csdl-so-sach` · alias `/csdl-bieu-05` |
| Hub | `http://localhost:9301/so-ts/csdl-so-sach?resource=ditches` |
| Artifact | `csdl-bieu-05-list-prototype.html` |
| **reviewUrl** | `file:///D:/AI-QLBD/Linm.RMMS.Data/specs/csdl-bieu-05/ui/prototype/csdl-bieu-05-list-prototype.html` |
| Zones | DES-GRID-A · B · B-FILTER · C0–C3 · D · F · H · Z |
| Toolbar | **Xuất Excel** (`fa-file-excel`) · Import **ẩn** P1 · **cấm** XLS trên filter |
| Filename mock | `Bieu05_RanhCacLoai_{yyyyMMdd}.xlsx` |
| SSOT | `shared_grid_example v1` · `real_view_parity v1` |
| Demo ref | zone-only · **cấm** demo-json / LS SSOT · hash skip (**GAP-DES-DEMO-RESCAN-01**) |

Open `reviewUrl` in browser · skip GOVOne chrome · LeaveConfirmModal · typed keep · map none · peer `/so-ts-ditch` deep-link only · **cấm** merge export.
