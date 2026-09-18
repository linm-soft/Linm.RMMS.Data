# Admin seed dữ liệu mẫu (web + mobile review)

**Slash:** `/add-dummy-endpoint`  
**API:** `POST api/v1/patrol/demo-seed` · BFF `POST web-bff/api/v1/patrol/demo-seed`  
**Page:** `Linm.Web.Admin` `/admin/report-seed` (`yarn start:std` → :8603)

## Channel

| `channel` | Seed |
|-----------|------|
| `web` | PL17 families + **CSDL 16 biểu + 10 sổ** (form nguồn báo cáo) |
| `mobile` | Cùng list + inbox `NOTI-DEMO` + chat WO/sự cố (App Review) |
| `both` | Cả hai (API default nếu omit) |

Admin page mặc định **mobile**. Result list bind `items[].label` từ BE (`title` / `summary` / `periodLabel`) — **cấm** hardcode tên family trên page.

CSDL items: `csdlRecordCount` / `csdlBieuCount` / `csdlSoCount` / `csdlEntryCount`. Hub `/so-ts/csdl-so-sach` và từng `/csdl-bieu-*` · `/csdl-so-*` có dòng sau seed tháng hiện tại.

## Form → báo cáo

| Form CSDL | Báo cáo live |
|-----------|----------------|
| `csdl-so-01` tuần kiểm | `/bao-cao/nk/tuan-kiem` |
| `csdl-so-02` tuần đường | `/bao-cao/nk-td` |
| `csdl-so-04` đếm xe | `/bao-cao/dem-xe` |
| `csdl-so-05` TNGT | `/bao-cao/tngt` |
| `csdl-so-06` phiếu cầu | `/bao-cao/ktra-cau` |
| `csdl-so-07` HL + GPTC | `/bao-cao/vi-pham/hlatdb` · `/bao-cao/giay-phep/thi-cong` |
| `csdl-so-08` kết quả BDTX | `/bao-cao/nk/cong-viec` |
| `csdl-bieu-01` mặt đường | `/bao-cao/tinh-trang/mat-duong` |
| 16 biểu | `/bao-cao/tai-san` (union RoadAsset) |

## Mobile = task?

Công việc trên app = `WorkOrder` (`#sc-mnt-list`). Không invent Platform TaskService.

## Auth

`admin.report-seed.write` hoặc role `admin`. Docker DevAuth `DefaultRole=admin` → không cần JWT.

Demo login app: `linm-soft` / `Linm@2026`.
