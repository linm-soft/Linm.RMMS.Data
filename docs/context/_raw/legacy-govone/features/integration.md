# Legacy capture — `integration` (Open API và tích hợp)

> sourceKind=**synthetic** — không màn GOVOne vision riêng cho Open API hub.  
> Capture suy luận từ `RMMS` §18 · `07` Hạng mục 18 · `09` Integration OpenAPI baseline · guide **Import tài sản** · `15-SCREEN-AI-MAP.md` screen 18.  
> Source: product docs — **không** password · **không** clone skin GOVOne · **không** mở RECAPTURE-GAPS.  
> Sibling domain page: `feedback` (Góp ý) — **không** gộp vào slug này.

## Pages (3)

### OPEN API HUB (system)

- **id:** `integration-openapi-hub`
- **url:** (planned) `/integration`
- **title:** Open API và tích hợp
- **headings:** Endpoint P1 · Swagger stub · Health partner · Sync jobs

#### Labels / field captions

- Method · Path · Mô tả · Phase · Auth · Trạng thái endpoint · OpenAPI URL · Health tổng

#### Inputs

| tag | type | name/id | placeholder |
|-----|------|---------|-------------|
| input | search | endpointSearch | Lọc path / mô tả… |
| select | select-one | phaseFilter | p1 |
| input | text | openApiUrl | /swagger/v1/swagger.json |

#### Actions / buttons (full)

| label | kind | zone | tag | disabled |
|-------|------|------|-----|----------|
| Mở Swagger | nav | toolbar | button | |
| Copy OpenAPI URL | action | toolbar | button | |
| Làm mới health | action | toolbar | button | |
| Xuất catalog endpoint | export | toolbar | button | |
| Làm mới danh sách | action | toolbar | button | |
| Lọc / Tìm | action | filter | button | |
| Xem offline-batch contract | nav | toolbar | button | |
| Đăng ký webhook | create | toolbar | button | P2 stub |
| Quay lại | nav | header | button | |

### IMPORT TÀI SẢN (wizard)

- **id:** `integration-asset-import`
- **url:** (planned) `/integration/import`
- **title:** Import tài sản KCHT
- **headings:** Chọn nguồn · Mapping · Chạy import

#### Labels / field captions

- Mã job · Loại tài sản · Địa bàn · Tuyến đường · Đoạn đường · File nguồn · Ghi chú · Trạng thái job

#### Inputs

| tag | type | name/id | placeholder |
|-----|------|---------|-------------|
| input | text | jobCode | SYNC-20260801-0001 |
| select | select-one | assetType | mat-duong |
| select | select-one | region | hn |
| select | select-one | route | QL1A |
| input | text | section | Km 12+000 – 14+500 |
| input | file | importFile | Chọn file Excel/CSV |
| textarea | text | note | Ghi chú batch… |
| select | select-one | jobStatus | draft |

#### Actions / buttons (full)

| label | kind | zone | tag | disabled |
|-------|------|------|-----|----------|
| Import tài sản | create | host | button | |
| Chọn file | action | form | button | |
| Tải mẫu Excel | export | form | button | |
| Chạy import | create | footer | button | |
| Hủy import | close | footer | button | |
| Hủy thay đổi | close | footer | button | |
| Đóng | close | header | button | |

### SYNC JOBS + PARTNERS (list)

- **id:** `integration-sync-partners`
- **url:** (planned) `/integration/sync`
- **title:** Sync jobs & adapters
- **headings:** Jobs · Partners ERP/CMMS/… · Log

#### Labels / field captions

- Mã job · Loại sync · Partner · Trạng thái · Số bản ghi · Bắt đầu · Kết thúc · Lỗi · Partner name · Loại hệ thống · Auth · Health · Phase adapter

#### Inputs

| tag | type | name/id | placeholder |
|-----|------|---------|-------------|
| input | search | jobSearch | Mã / partner… |
| select | select-one | syncTypeFilter | all |
| select | select-one | jobStatusFilter | all |

#### Actions / buttons (full)

| label | kind | zone | tag | disabled |
|-------|------|------|-----|----------|
| Xem log sync | action | row | button | |
| Retry job | action | row | button | |
| Bật/Tắt adapter | action | row | button | |

- **actionCount:** 19 (hub 9 + import 7 + sync/partners 3)
- **fieldCount:** 22 (hub 8 · import 8 · sync/partner 14 unique labels; mapped 22 in control-map)
