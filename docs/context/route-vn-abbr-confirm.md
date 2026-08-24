# QLBD MFE — Confirm path URL (viết tắt VN)

> **Status:** **đã apply** router MFE (`src/index.tsx` · `mfe.routes.json` · navigate).  
> **SSOT file:** `Linm.RMMS.Data/docs/context/route-vn-abbr-confirm.md`  
> **Path:** `src/index.tsx`. **Title:** header page. Form = Tạo mới / Xem / Sửa + title list.  
> **Cấm đổi:** API `api/v1/…` · feature slug · package `@linm/rmms-*` · mã tuyến `QL.1`.  
> Chốt mới **ghi đè** chốt cũ cùng hàng.

Cột **Confirm path**: đã chốt **in đậm**. Ô trống = chờ bạn.

---

## Chốt 2026-08-23 (user)


| Rule                      | Confirm               | Ghi chú                      |
| ------------------------- | --------------------- | ---------------------------- |
| Master                    | `/mas`                |                              |
| Asset                     | `/so-ts`              |                              |
| GIS                       | `/gis`                |                              |
| AI kiểm định              | `/ai-kd`              |                              |
| ITS                       | `/ai-its`             |                              |
| Copilot                   | `/ai`                 | ≠ `/ai-kd` · ≠ `/ai-its`     |
| Tuần đường / tuần kiểm    | `/td-tk`              |                              |
| Sự cố                     | `/su-co`              |                              |
| Mọi maintenance           | `/sc-bt`              | Field `/maintenance*`        |
| Mọi ops                   | `/chi-dao`            | Field `/ops*`                |
| Phê duyệt                 | `/phe-duyet`          |                              |
| Hợp đồng / ngân sách      | `/hd-ns`              |                              |
| Vật tư / thiết bị         | `/hd-ns/vttb`         | `inventory`                  |
| Tích hợp (hub)            | `/open-api`           |                              |
| Cổng người dân            | `/nhan-dan`           | **path gốc** ≠ `/open-api/…` |
| Quản lý người dùng        | `/admin/user`         | **path gốc**                 |
| Mọi tổng hợp              | `/th/…`               | prefix Report tổng hợp       |
| Tổng hợp bảo trì          | `/th/bao-tri`         |                              |
| Drone                     | `/fly`                |                              |
| Camera                    | `/camera`             |                              |
| Mọi `/new`                | `/tao-moi`            |                              |
| Mọi `{base}/:id/sua`      | `{base}/sua?id={id}`  | vd. `/sc-bt/:id/sua` → `/sc-bt/sua?id={id}` |
| Cơ cấu tổ chức            | `/mas/co-cau-tc`      |                              |
| Tuyến đường               | `/mas/tuyen-duong`    |                              |
| Loại tài sản              | `/mas/loai-ts`        |                              |
| Đơn vị đối tác            | `/mas/doi-tac`        |                              |
| Phân loại mặt đường       | `/so-ts/pl-mat-duong` |                              |
| Chấm công                 | `/td-tk/cham-cong`    | `attendance`                 |
| Bản đồ hạ tầng            | `/gis/ha-tang`        | **đè** `/gis/ban-do-ht`      |
| Phát hiện TS              | `/ai-kd/phat-hien-ts` |                              |
| Ước lượng SC              | `/ai-kd/uoc-luong-sc` |                              |
| Dự báo BT                 | `/ai-kd/du-bao-bt`    |                              |
| ITS biển báo / cọc tiêu   | `/ai-its/bb-ct`       | 2 alias → 1                  |
| ITS ANPR quá tải / tốc độ | `/ai-its/toc-do-qt`   | 2 alias → 1                  |
| Nhật ký tuần đường        | `/bao-cao/nk-td`      |                              |
| Báo cáo công              | `/bao-cao/cham-cong`  |                              |
| `/copy`                   | *chưa chốt*           |                              |


---

## 0. Prefix


| MFE         | Title module                | Hiện tại               | Confirm path  |
| ----------- | --------------------------- | ---------------------- | ------------- |
| Master      | Danh mục Master             | `/master`              | `/mas`        |
| Asset       | Sổ tài sản KCHT             | `/asset`               | `/so-ts`      |
| Gis         | GIS bản đồ giám sát 2D      | `/gis`                 | `/gis`        |
| AiVision    | AI kiểm định mặt đường      | `/ai-vision`           | `/ai-kd`      |
| AiVision    | ITS                         | `/its-*`               | `/ai-its`     |
| Field       | Tuần đường / tuần kiểm      | `/patrol`              | `/td-tk`      |
| Field       | Sự cố / Vấn đề              | `/incident`            | `/su-co`      |
| Field       | Lập lịch sửa chữa / bảo trì | `/maintenance`         | `/sc-bt`      |
| Field       | Chỉ đạo điều hành           | `/ops`                 | `/chi-dao`    |
| Workflow    | Danh sách Phê duyệt         | `/workflow`            | `/phe-duyet`  |
| Iot         | Danh sách IoT               | `/iot`                 |               |
| Copilot     | AI Copilot                  | `/copilot`             | `/ai`         |
| Report      | Báo cáo Web                 | `/bao-cao`             |               |
| Report      | Tổng hợp                    | `/bao-cao/tong-hop-*`  | `/th`         |
| Contract    | Hợp đồng và ngân sách       | `/contract`            | `/hd-ns`      |
| Drone       | Drone / Reality Capture     | `/drone`               | `/fly`        |
| Integration | Open API và tích hợp        | `/integration`         | `/open-api`   |
| Integration | Cổng người dân              | `/integration/citizen` | `/nhan-dan`   |
| Integration | Quản lý người dùng          | `/integration/users`   | `/admin/user` |
| Camera      | Kết nối camera ITS          | `/camera`              | `/camera`     |


Chưa chốt prefix: IoT · Báo cáo Web (hub, trừ `/th`).

Mount thêm (khi apply): `chi-dao` · `ai-its` · `th` · `nhan-dan` · `admin`.

---

## Tất cả route (Title + path)

### 1. Master — `:9318`


| Title                             | Hiện tại                   | Confirm path               |
| --------------------------------- | -------------------------- | -------------------------- |
| *(redirect hub → Cơ cấu tổ chức)* | `/master`                  | `/mas` → `/mas/co-cau-tc`  |
| Cơ cấu tổ chức                    | `/master/org-unit`         | `/mas/co-cau-tc`           |
| Tạo mới — Cơ cấu tổ chức          | `/master/org-unit/new`     | `/mas/co-cau-tc/tao-moi`   |
| Xem — Cơ cấu tổ chức              | `/master/org-unit/:id`     | `/mas/co-cau-tc/:id`       |
| Tuyến đường                       | `/master/road-route`       | `/mas/tuyen-duong`         |
| Tạo mới — Tuyến đường             | `/master/road-route/new`   | `/mas/tuyen-duong/tao-moi` |
| Xem — Tuyến đường                 | `/master/road-route/:id`   | `/mas/tuyen-duong/:id`     |
| Loại tài sản                      | `/master/asset-type`       | `/mas/loai-ts`             |
| Tạo mới — Loại tài sản            | `/master/asset-type/new`   | `/mas/loai-ts/tao-moi`     |
| Xem — Loại tài sản                | `/master/asset-type/:id`   | `/mas/loai-ts/:id`         |
| Đơn vị đối tác                    | `/master/partner-unit`     | `/mas/doi-tac`             |
| Tạo mới — Đơn vị đối tác          | `/master/partner-unit/new` | `/mas/doi-tac/tao-moi`     |
| Xem — Đơn vị đối tác              | `/master/partner-unit/:id` | `/mas/doi-tac/:id`         |


### 2. Asset — `:9301`


| Title                               | Hiện tại                           | Confirm path                             |
| ----------------------------------- | ---------------------------------- | ---------------------------------------- |
| Sổ tài sản kết cấu hạ tầng đường bộ | `/asset`                           | `/so-ts`                                 |
| Tạo mới — Sổ tài sản KCHT           | `/asset/new`                       | `/so-ts/tao-moi`                         |
| Sửa — Sổ tài sản KCHT               | `/asset/:id/edit`                  | `/so-ts/sua?id={id}`                     |
| Sao chép — Sổ tài sản KCHT          | `/asset/:id/copy`                  |                                          |
| Xem — Sổ tài sản KCHT               | `/asset/:id`                       | `/so-ts/:id`                             |
| Phân loại mặt đường (Biểu 1)        | `/asset/pavement-section`          | `/so-ts/pl-mat-duong`                    |
| Tạo mới — Phân loại mặt đường       | `/asset/pavement-section/new`      | `/so-ts/pl-mat-duong/tao-moi`            |
| Sửa — Phân loại mặt đường           | `/asset/pavement-section/:id/edit` | `/so-ts/pl-mat-duong/sua?id={id}`        |
| Sao chép — Phân loại mặt đường      | `/asset/pavement-section/:id/copy` | `/so-ts/pl-mat-duong/tao-moi?id={id}`    |
| Xem — Phân loại mặt đường           | `/asset/pavement-section/:id`      | `/so-ts/pl-mat-duong/:id`                |
| CSDL 12 biểu + 8 sổ BDTX            | `/asset/csdl-so-sach`              | `/so-ts/csdl-so-sach` *(leaf chưa chốt)* |
| Hạng mục kết cấu hạ tầng (hub count) | —                                  | `/so-ts/hang-muc` *(planned · `asset-kcht-dashboard`)* · embed shell `/dashboard` (`@linm/dashboard` · **không** `/bao-cao/dashboard`) |


### 3. Gis — `:9302`


| Title                                   | Hiện tại           | Confirm path   |
| --------------------------------------- | ------------------ | -------------- |
| GIS bản đồ giám sát 2D                  | `/gis`             | `/gis`         |
| Bản đồ live — vẽ Point / Line / Polygon | `/gis/draw`        | `/gis/live`    |
| Bản đồ hạ tầng — vẽ tài sản             | `/gis/draw-google` | `/gis/ha-tang` |
| Tạo mới — Layer / cấu hình              | `/gis/new`         | `/gis/tao-moi` |
| Xem — Layer / cấu hình                  | `/gis/:id`         | `/gis/:id`     |


### 4. AiVision — `:9303`


| Title                             | Hiện tại                        | Confirm path                      |
| --------------------------------- | ------------------------------- | --------------------------------- |
| AI kiểm định mặt đường            | `/ai-vision`                    | `/ai-kd`                          |
| Tạo mới — AI kiểm định mặt đường  | `/ai-vision/new`                | `/ai-kd/tao-moi`                  |
| Xem — AI kiểm định mặt đường      | `/ai-vision/:id`                | `/ai-kd/:id`                      |
| Phát hiện tài sản / thiết bị mới  | `/ai-vision/ai-asset-detect`    | `/ai-kd/phat-hien-ts`             |
| Ước lượng sửa chữa                | `/ai-vision/estimate`           | `/ai-kd/uoc-luong-sc`             |
| AI dự báo bảo trì                 | `/ai-vision/predict`            | `/ai-kd/du-bao-bt`                |
| ITS phát hiện biển báo / cọc tiêu | `/its-traffic-detect`           | `/ai-its/bb-ct`                   |
| ITS phát hiện biển báo / cọc tiêu | `/ai-vision/its-traffic-detect` | `/ai-its/bb-ct` *(cùng page)*     |
| ITS ANPR · Quá tải / tốc độ       | `/its-anpr-overload`            | `/ai-its/toc-do-qt`               |
| ITS ANPR · Quá tải / tốc độ       | `/ai-vision/its-anpr-overload`  | `/ai-its/toc-do-qt` *(cùng page)* |


### 5. Field — `:9304`


| Title                            | Hiện tại                | Confirm path             |
| -------------------------------- | ----------------------- | ------------------------ |
| Tuần đường / tuần kiểm           | `/patrol`               | `/td-tk`                 |
| Tạo mới — Tuần đường / tuần kiểm | `/patrol/new`           | `/td-tk/tao-moi`         |
| Xem — Tuần đường / tuần kiểm     | `/patrol/:id`           | `/td-tk/:id`             |
| Chấm công và định vị             | `/patrol/attendance`    | `/td-tk/cham-cong`       |
| Sự cố / Vấn đề                   | `/incident`             | `/su-co`                 |
| Tạo mới — Sự cố / Vấn đề         | `/incident/new`         | `/su-co/tao-moi`         |
| Xem — Sự cố / Vấn đề             | `/incident/:id`         | `/su-co/:id`             |
| Lập lịch sửa chữa / bảo trì      | `/maintenance`          | `/sc-bt`                 |
| Tạo mới — Lập lịch SC / bảo trì  | `/maintenance/new`      | `/sc-bt/tao-moi`         |
| Sửa — Lập lịch SC / bảo trì      | `/maintenance/:id/edit` | `/sc-bt/sua?id={id}`     |
| Sao chép — Lập lịch SC / bảo trì | `/maintenance/:id/copy` | `/sc-bt/tao-moi?id={id}` |
| Xem — Lập lịch SC / bảo trì      | `/maintenance/:id`      | `/sc-bt/:id`             |
| Chỉ đạo điều hành                | `/ops`                  | `/chi-dao`               |
| Tạo mới — Chỉ đạo điều hành      | `/ops/new`              | `/chi-dao/tao-moi`       |
| Xem — Chỉ đạo điều hành          | `/ops/:id`              | `/chi-dao/:id`           |


### 6. Workflow — `:9307`


| Title               | Hiện tại        | Confirm path         |
| ------------------- | --------------- | -------------------- |
| Danh sách Phê duyệt | `/workflow`     | `/phe-duyet`         |
| Tạo mới — Phê duyệt | `/workflow/new` | `/phe-duyet/tao-moi` |
| Xem — Phê duyệt     | `/workflow/:id` | `/phe-duyet/:id`     |


### 7. Iot — `:9309`


| Title         | Hiện tại   | Confirm path   |
| ------------- | ---------- | -------------- |
| Danh sách IoT | `/iot`     |                |
| Tạo mới — IoT | `/iot/new` | `/iot/tao-moi` |
| Xem — IoT     | `/iot/:id` |                |


### 8. Copilot — `:9310`


| Title                                  | Hiện tại       | Confirm path  |
| -------------------------------------- | -------------- | ------------- |
| AI Copilot                             | `/copilot`     | `/ai`         |
| Tạo mới — AI Copilot *(redirect list)* | `/copilot/new` | `/ai/tao-moi` |


### 9. Report — `:9311`


| Title                                         | Hiện tại                        | Confirm path                    |
| --------------------------------------------- | ------------------------------- | ------------------------------- |
| Báo cáo Web                                   | `/bao-cao`                      |                                 |
| Tạo mới — Cấu hình báo cáo                    | `/bao-cao/new`                  | `/bao-cao/tao-moi`              |
| Xem — Cấu hình báo cáo                        | `/bao-cao/:id`                  |                                 |
| Báo cáo công                                  | `/bao-cao/bao-cao-cong`         | `/bao-cao/cham-cong`            |
| BC Check-in                                   | `/bao-cao/checkin`              |                                 |
| Công văn đi — đến                             | `/bao-cao/cong-van`             |                                 |
| Đếm xe                                        | `/bao-cao/dem-xe`               |                                 |
| Hạng mục hư hỏng                              | `/bao-cao/hang-muc-hu-hong`     | `/bao-cao/hu-hong`              |
| BC Sự cố                                      | `/bao-cao/su-co`                |                                 |
| Ùn tắc / ngập úng                             | `/bao-cao/un-tac`               |                                 |
| Tai nạn giao thông                            | `/bao-cao/tngt`                 |                                 |
| Thiên tai, bão lũ                             | `/bao-cao/thien-tai`            |                                 |
| Khối lượng thiệt hại                          | `/bao-cao/thiet-hai`            |                                 |
| BC Tài sản                                    | `/bao-cao/tai-san`              |                                 |
| Tình trạng mặt đường                          | `/bao-cao/tinh-trang-mat-duong` | `/bao-cao/tinh-trang/mat-duong` |
| Giấy phép thi công                            | `/bao-cao/giay-phep-thi-cong`   | `/bao-cao/giay-phep/thi-cong`   |
| Vi phạm HLATĐB                                | `/bao-cao/vi-pham-hlatdb`       | `/bao-cao/vi-pham/hlatdb`       |
| Kiểm tra cầu                                  | `/bao-cao/kiem-tra-cau`         | `/bao-cao/ktra-cau`             |
| Nhật ký công việc                             | `/bao-cao/nhat-ky-cong-viec`    | `/bao-cao/nk/cong-viec`         |
| Tổng hợp bảo trì                              | `/bao-cao/tong-hop-bao-tri`     | `/th/bao-tri`                   |
| Báo cáo tuần đường                            | `/bao-cao/tuan-duong`           | `/bao-cao/tuan-duong`           |
| Báo cáo tuần kiểm                             | `/bao-cao/tuan-kiem`            | `/bao-cao/tuan-kiem`            |
| Nhật ký tuần đường                            | `/bao-cao/nhat-ky-tuan-duong`   | `/bao-cao/nk/tuan-duong`        |
| Nhật ký tuần kiểm                             | `/bao-cao/nhat-ky-tuan-kiem`    | `/bao-cao/nk/tuan-kiem`         |
| Dashboard điều hành *(README, chưa có Route)* | `/bao-cao/dashboard`            | `/bao-cao/dashboard` *(KPI Report · slug `dashboard` — **không** 40 ô KCHT)* |
| Bảng điều khiển shell (platform) | — | `/dashboard` *(`@linm/dashboard` · widget KCHT `asset-kcht-dashboard`)* |


Rule: mọi title/path **Tổng hợp** → prefix `/th/` (hiện chỉ 1: Tổng hợp bảo trì).

### 10. Contract — `:9312`


| Title                           | Hiện tại                  | Confirm path          |
| ------------------------------- | ------------------------- | --------------------- |
| Hợp đồng và ngân sách           | `/contract`               | `/hd-ns`              |
| Tạo mới — Hợp đồng và ngân sách | `/contract/new`           | `/hd-ns/tao-moi`      |
| Xem — Hợp đồng và ngân sách     | `/contract/:id`           | `/hd-ns/:id`          |
| Vật tư và thiết bị              | `/contract/inventory`     | `/hd-ns/vttb`         |
| Tạo mới — Vật tư và thiết bị    | `/contract/inventory/new` | `/hd-ns/vttb/tao-moi` |
| Xem — Vật tư và thiết bị        | `/contract/inventory/:id` | `/hd-ns/vttb/:id`     |


### 11. Drone — `:9313`


| Title                             | Hiện tại     | Confirm path   |
| --------------------------------- | ------------ | -------------- |
| Drone / Reality Capture           | `/drone`     | `/fly`         |
| Tạo mới — Drone / Reality Capture | `/drone/new` | `/fly/tao-moi` |
| Xem — Drone / Reality Capture     | `/drone/:id` | `/fly/:id`     |


### 12. Integration — `:9314`


| Title                          | Hiện tại                    | Confirm path                          |
| ------------------------------ | --------------------------- | ------------------------------------- |
| Open API và tích hợp           | `/integration`              | `/open-api`                           |
| Tạo mới — Open API và tích hợp | `/integration/new`          | `/open-api/tao-moi`                   |
| Xem — Open API và tích hợp     | `/integration/:id`          | `/open-api/:id`                       |
| Import tài sản                 | `/integration/import`       | `/open-api/import` *(leaf chưa chốt)* |
| Xem — Import tài sản           | `/integration/import/:id`   | `/open-api/import/:id`                |
| Tạo mới — Job sync             | `/integration/jobs/new`     | `/open-api/jobs/tao-moi`              |
| Xem — Job sync                 | `/integration/jobs/:id`     | `/open-api/jobs/:id`                  |
| Xem — Đối tác tích hợp         | `/integration/partners/:id` | `/open-api/doi-tac/:id`               |
| Cổng người dân                 | `/integration/citizen`      | `/nhan-dan`                           |
| Tạo mới — Cổng người dân       | `/integration/citizen/new`  | `/nhan-dan/tao-moi`                   |
| Xem — Cổng người dân           | `/integration/citizen/:id`  | `/nhan-dan/:id`                       |
| Góp ý phần mềm                 | `/integration/feedback`     | `/nhan-dan/gop-y`                     |
| Tạo mới — Góp ý phần mềm       | `/integration/feedback/new` | `/nhan-dan/gop-y/tao-moi`             |
| Xem — Góp ý phần mềm           | `/integration/feedback/:id` | `/nhan-dan/gop-y/:id`                 |
| Quản lý người dùng             | `/integration/users`        | `/admin/user`                         |
| Tạo mới — Quản lý người dùng   | `/integration/users/new`    | `/admin/user/tao-moi`                 |
| Xem — Quản lý người dùng       | `/integration/users/:id`    | `/admin/user/:id`                     |


### 13. Camera — `:9316`


| Title                        | Hiện tại      | Confirm path      |
| ---------------------------- | ------------- | ----------------- |
| Kết nối camera ITS           | `/camera`     | `/camera`         |
| Tạo mới — Kết nối camera ITS | `/camera/new` | `/camera/tao-moi` |
| Xem — Kết nối camera ITS     | `/camera/:id` | `/camera/:id`     |


---

## Còn chờ


| Hạng        | Title                                                            |
| ----------- | ---------------------------------------------------------------- |
| Prefix      | IoT · Báo cáo Web (hub)                                          |
| GIS leaf    | *(đã apply `/gis/live` — typo `/dis/live` trong bảng cũ)*          |
| Leaf        | CSDL sổ sách · import/jobs/feedback                              |
| Report leaf | còn lại trừ Báo cáo công · Nhật ký tuần đường · Tổng hợp bảo trì |
| Suffix      | Sao chép (`/copy`)                                               |


Sau khi chốt nốt: `/hey-linm` + **apply router**. Routers **đã apply** các hàng Confirm đã điền.