# Control map — Phân loại mặt đường (`pavement-section`)

> erp-form-context Step **2g** · **Confirmed by: ai-autocode-autopilot** (hồ sơ biểu 1)  
> Modern demo-map: `_raw/legacy-govone/demo-maps/pavement-section-control-map.md`

## List filter

| Field | Control | Notes |
|-------|---------|-------|
| search | SearchTextInput | Mã / tên đường |
| province | SearchInput | Master tỉnh/TP |
| road | Text | Tên đường |
| kmFrom / kmTo | Number | Lý trình |
| status | SearchInput | Tình trạng |
| Tìm | Button | Filter bar (không trùng Làm mới toolbar) |
| Xóa điều kiện | Button | Clear filter |

## Form fields

| Field | Control | Required | Section |
|-------|---------|----------|---------|
| code | Text uppercase (IdCode) | Yes (BE gen) | Header |
| roadName | Text | Yes | Header |
| provinceName | SearchInput master | Yes | Header |
| kmFrom | Number | Yes | Header |
| kmTo | Number | Yes | Header |
| lengthKm | Number readonly? | No (tính hoặc nhập) | Header |
| baseWidthM | Number | No | Kết cấu |
| surfaceWidthM | Number | No | Kết cấu |
| structureType | SearchInput (BTN/BTXM/…) | Yes | Kết cấu |
| surfaceThicknessCm | Number | No | Kết cấu |
| roadClass | SearchInput (I/II/III/…) | No | Kết cấu |
| yearsInService | Text/Number | No | Khai thác |
| handoverMaintenance | Checkbox | No | Khai thác |
| handoverConstruction | Checkbox | No | Khai thác |
| lastMajorRehabYear | Number year | No | Khai thác |
| lastSurfaceRepairYear | Number year | No | Khai thác |
| status | SearchInput | Yes | Khai thác |
| constructionUnit | Text | No | Đơn vị |
| manageUnit | Text | Yes | Đơn vị |
| ownerUnit | Text | No | Đơn vị |
| notes | Textarea | No | Audit |
| updatedAt / updatedBy | Readonly | — | Audit |
| pci | Number 0–100 | No | Khai thác · nguồn báo cáo |
| layerCode | SearchInput GIS layer | No | default `mat-duong` |
| measuredAt | Date | No | Ngày đo PCI |

## Toolbar list

| Button | Notes |
|--------|-------|
| Tạo mới | Primary |
| Import | Excel biểu 1 stub |
| Export | JSON/Excel stub |
| Làm mới | Refresh local |
| Cấu hình cột | Column picker |

## Toolbar form

| Mode | Buttons |
|------|---------|
| Create | Lưu · Huỷ · Mở bản đồ live |
| Edit | Lưu · Huỷ · Xóa (perm) · Mở bản đồ live |
| View | Sửa · Đóng · Mở bản đồ live |

## Footer money

Không áp dụng (không phải chứng từ tiền).
