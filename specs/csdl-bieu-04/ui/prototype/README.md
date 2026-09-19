# Prototype — csdl-bieu-04 (edit_page · T-XLS-S04)

Design gate: **prototype + reviewUrl** — `design_confirm=approve` (autoApprove ON · `task_394a88a3`).

| | |
|--|--|
| Title | CSDL Biểu 04 — Cống các loại · Xuất Excel |
| Pack kind | `list` |
| changeScope | `edit_page` |
| Resource | `culverts` |
| MFE | `Linm.Web.RMMS.Asset` |
| Prototype | `csdl-bieu-04-list-prototype.html` |
| **reviewUrl** | `file:///D:/AI-QLBD/Linm.RMMS.Data/specs/csdl-bieu-04/ui/prototype/csdl-bieu-04-list-prototype.html` |
| mfeStdUrl | `http://localhost:9301/so-ts/csdl-so-sach` · alias `/csdl-bieu-04` |
| peerStdUrl | `http://localhost:9301/so-ts/csdl-so-sach?resource=culverts` |
| design_confirm | **approve** (autoApprove ON · `task_394a88a3`) |

Zones: DES-GRID-A · B · B-FILTER · C0–C3 · D · F · H · Z · LeaveConfirmModal.  
Typed 17 cột keep · GPS four_xy · **cấm** detail* only · map none · peer deep-link `so-ts-culvert-x`.

Delta: **catalogToolbar** `Xuất Excel` (`fa-file-excel`) · Import **ẩn** P1 · filter **không** XLS (**GAP-FILTER-BAR-08**) · filename `Bieu04_CongCacLoai_{yyyyMMdd}.xlsx` · **cấm** merge Sổ TS.
