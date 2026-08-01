# Demo control-map (modern MFE) — `citizen`

> **Rule:** cùng field/action legacy · UI theo **`/erp-form-context`** (Linm.Development.Rules).  
> Demo HTML mock `Lin*` look · **cấm** copy skin GOVOne cũ · **cấm** BE.  
> Legacy: synthetized (portal mới P3) — `_raw/legacy-govone/features/citizen.md`.  
> **≠** `feedback` (Góp ý phần mềm nội bộ).

## Kind hint

- **G** host public portal + **D** slideout form báo sự cố — erp-form-context Kind D · leave-confirm
- Track panel: filter bar + readonly timeline (không admin inbox)
- Step 2a-K · 2d readonly · 2g control-map · 2g common controls mandatory · 2k voucher_default · leave-confirm
- Map pin: Leaflet live (OSM) — **cấm** screenshot/gradient giả

## Fields (legacy → Linm)

| Legacy | type | zone | Control | Linm SSOT |
|--------|------|------|---------|-----------|
| Mã theo dõi | text | header | Code | form-code-field · CIT-YYYYMMDD-NNNN |
| Họ tên | text | content | Text | TextField · required · PII |
| Số điện thoại | text | content | Text | TextField · required · PII mask UI |
| Email | text | content | Text | TextField · PII |
| Loại sự cố | select | content | Select | Select · useFormOptions |
| Mô tả / phản ánh hiện trường | textarea | content | TextArea | TextField multiline · required |
| Địa chỉ vị trí | text | content | Text | TextField · common-field-control |
| Vĩ độ | number | content | Number | TextField number |
| Kinh độ | number | content | Number | TextField number |
| Tuyến đường | text | content | Text | TextField · common-field-control |
| Lý trình (Km) | text | content | Text | TextField · lý trình |
| Ảnh đính kèm | file | content | Upload | file mock · toast · **cấm** BE presign |
| Video đính kèm | file | content | Upload | file mock · toast · **cấm** BE |
| Thời gian báo cáo | datetime | header | DateTime | utcToLocalInputValue · localInputToISOWithOffset |
| OTP | text | content | Text | TextField · optional OTP |
| Trạng thái xử lý | select | header | Select readonly | Select readOnly (draft/sent/received/processing/done) |
| Nguồn | text | header | Text readonly | TextField readOnly = `citizen` |

## Actions / buttons (legacy → toolbar MFE)

| Legacy label | kind | zone | Demo button | Linm SSOT |
|--------------|------|------|-------------|-----------|
| Báo sự cố | create | host | Báo sự cố | Button primary · mở Kind D slideout |
| Theo dõi xử lý | view | host | Theo dõi xử lý | Button · mở track panel |
| Tra cứu mã | filter | track | Tra cứu mã | LinErpListFilterBar look · mock local |
| Làm mới tra cứu | filter | track | Làm mới tra cứu | refresh mock |
| Gửi báo cáo | create | footer | Gửi báo cáo | FormActions primary · toast mock · **cấm** BE |
| Lưu nháp | action | footer | Lưu nháp | FormActions Save draft · localStorage |
| Xóa nội dung | destructive | footer | Xóa nội dung | clear body · dirty |
| Chọn ảnh | action | content | Chọn ảnh | file input mock |
| Xóa ảnh | destructive | content | Xóa ảnh | clear photos |
| Chọn video | action | content | Chọn video | file input mock |
| Xóa video | destructive | content | Xóa video | clear videos |
| Lấy vị trí GPS | action | content | Lấy vị trí GPS | geolocation mock / Leaflet pin |
| Gửi OTP | action | content | Gửi OTP | toast mock OTP |
| Xác thực OTP | action | content | Xác thực OTP | validate mock |
| Đóng | close | header | Đóng | Modal/Slideout close · leave-confirm |
| Quay lại | nav | header | Quay lại | Back · leave-confirm |
| Hủy thay đổi | close | footer | Hủy thay đổi | FormActions Cancel · snapshot restore |

## Demo page rules (bắt buộc)

1. **Layout** — Kind G host: landing CTAs · recent mock list · track panel  
2. **Form** — Kind D slideout: Z1 toolbar+title+hint · Z2 fields+map · Z3 footer  
3. **Map** — Leaflet OSM + pin (click map / GPS) · cập nhật lat/lng  
4. **Validation** — banner (họ tên · SĐT · mô tả bắt buộc) · leave-confirm dirty  
5. **Labels** — hardcode VN OK · `data-i18n` gắn sẵn  
6. **Datetime** — hiển thị local · lưu ISO offset (mock)  
7. Mọi **button** trong bảng Actions phải có trên demo (click → toast/modal mock)  
8. **Cấm** gọi `/api/v1/public/incidents` · `/api/v1/citizen/incident`  
9. Badge phân biệt **≠ Góp ý phần mềm (`feedback`)**  
10. Rate-limit / OTP — chỉ copy UX mock (không BE)

## Refs

- `web-app/skill/erp-form-context/erp-form-context.md`
- `erp-common-controls-mandatory.md` · leave-confirm
- Capture raw: `_raw/legacy-govone/features/citizen.md`
- Data context: `docs/context/features/citizen.md`
