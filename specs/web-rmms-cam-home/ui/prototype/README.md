# Prototype — web-rmms-cam-home

Design gate: **prototype + reviewUrl** — autoApprove=ON → `design_confirm=approve`.

| | |
|--|--|
| Feature | `web-rmms-cam-home` |
| Title | Trang chủ và tab theo vai |
| Pack | `list` · phone 430 · **N/A** DES-GRID |
| changeScope | `edit_page` |
| Artifact | `index.html` |
| **reviewUrl** | `file:///D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-cam-home/ui/prototype/index.html` |
| mfeStdUrl | `http://localhost:9301/web-rmms-cam-home` |
| Zones | CH-00 · CH-HM-* · CH-HUB-* · CH-SH-TAB |

## Scenes

| Query | AC / note |
|-------|-----------|
| `?role=td` | Home TD · hero ON · no NT/Assign/Supervise |
| `?role=tk` | Home TK · gridTuanKiem · no hero |
| `?role=nt` | Home NT · gridNghiemThu |
| `?role=qlhat` | Assign→`/van-de` · Supervise→`/giam-sat` |
| `?view=hub&role=td` | Hub QUICK · NT struck CẤM |
| `?view=hub&role=qlhat` | Hub + supervise · no NT |
| `?view=shell&role=tk&path=tuan-kiem` | Field tab **not** active (Plan #8) |

Demo SSOT: **N/A** · hash skip · **cấm** re-scan.
