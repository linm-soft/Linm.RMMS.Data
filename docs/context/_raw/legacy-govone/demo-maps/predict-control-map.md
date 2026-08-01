# Demo control-map (modern MFE) — `predict`

> **Rule:** cùng field/action legacy · UI theo **`/erp-form-context`** (Linm.Development.Rules).  
> Demo HTML mock `Lin*` look · **cấm** copy skin GOVOne cũ · **cấm** BE.  
> Legacy: synthetized (không màn GOVOne) — `_raw/legacy-govone/features/predict.md`.

## Kind hint

- **B** (CatalogListShell priority list) + **D** (section detail slideout)
- Step 2a-K · 2d readonly · 2g control-map · 2g common controls mandatory · 2t catalog toolbar · leave-confirm (detail note dirty)
- Host: Dashboard / Báo cáo · route MFE `/ai-vision/predict`

## Fields (legacy → Linm)

| Legacy | type | zone | Control | Linm SSOT |
|--------|------|------|---------|-----------|
| Tuyến | select | filter | Select | Select · useFormOptions · filter bar |
| Horizon (tháng) | number | filter | Money/Qty | LabelMoney · INT_IN |
| Top N | number | filter | Money/Qty | INT_IN |
| Score tối thiểu | number | filter | Money/Qty | INT_IN |
| Mã đoạn | text | list/header | Code | TextField · SEC-* |
| Tên đoạn / Km | text | list/header | Text | TextField · common-field-control |
| Thứ hạng | number | list | Money/Qty | INT_IN readonly |
| Score (0–100) | number | list/header | Money/Qty | LabelMoney · score badge |
| Tuổi thọ còn lại (tháng) | number | list/header | Money/Qty | INT_IN |
| Khuyến nghị | select | list/header | Select | Select · major_rehab / routine / watch |
| Model AI | text | list/header | Text readonly | TextField readOnly · badge P1 online |
| PCI | number | list/meta | Money/Qty | INT_IN |
| Lưu lượng | number | list/meta | Money/Qty | INT_IN |
| Vật liệu | select | meta | Select | Select · useFormOptions |
| Tuổi công trình (năm) | number | meta | Money/Qty | INT_IN |
| Thời tiết (agg) | text | meta | Text | TextField |
| Lịch sử SC | text | meta | Text | TextField |
| Dự báo lúc | datetime | meta | DateTime | DateTimePicker · local display |
| Drivers | text | detail | Text/tags | chip list · mock importance |
| Trọng số driver | number | detail | Money/Qty | INT_IN · driver row |
| Ghi chú khuyến nghị | textarea | detail | Text | TextField · dirty leave-confirm |
| Audit Score / Model / At / Raw | mixed | audit | readonly | history panel stub |

## Actions / buttons (legacy → toolbar MFE)

| Legacy label | kind | zone | Demo button | Linm SSOT |
|--------------|------|------|-------------|-----------|
| Áp dụng lọc | action | filter | Áp dụng lọc | FilterBar Apply |
| Xóa lọc | action | filter | Xóa lọc | FilterBar Clear |
| Làm mới danh sách | action | toolbar | Làm mới danh sách | CatalogToolbar Refresh |
| Chạy dự báo hàng loạt | create | toolbar | Chạy dự báo hàng loạt | Button primary · mock GET priority-list |
| Xuất Excel | export | toolbar | Xuất Excel | export-excel · toolbar stub |
| Mở Dashboard | nav | toolbar | Mở Dashboard | nav stub · toast |
| Column picker | action | toolbar | Column picker | catalog column picker |
| Sort theo score | action | toolbar | Sort theo score | grid sort |
| Xem chi tiết | nav | row | Xem chi tiết | open Kind D slideout |
| Chạy dự báo đoạn | action | row/toolbar | Chạy dự báo đoạn | mock POST section/{id} |
| Ưu tiên đại tu | action | row/footer | Ưu tiên đại tu | toast · recommend accept |
| Chạy lại dự báo | action | toolbar | Chạy lại dự báo | Button · re-run mock |
| Xem lịch sử audit | action | toolbar | Xem lịch sử audit | mock GET history |
| Gắn kế hoạch BT | nav | footer | Gắn kế hoạch BT | stub P1 · toast · không auto WO |
| Lưu ghi chú | action | footer | Lưu ghi chú | FormActions Save · localStorage |
| Hủy thay đổi | close | footer | Hủy thay đổi | FormActions Cancel · snapshot |
| Đóng | close | header | Đóng | Modal/Slideout close · leave-confirm |
| Quay lại | nav | header | Quay lại | Back · leave-confirm |
| Copy mã đoạn | action | header | Copy mã đoạn | clipboard stub |
| Refresh KPI | action | toolbar | Refresh KPI | KPI strip mock |

## Demo page rules (bắt buộc)

1. **Layout** — Kind B list: filter · KPI · CatalogListShell · Kind D slideout detail
2. **Host** — mock Dashboard / Báo cáo → priority list (không clone GOVOne)
3. **Grid** — STT/rank · score badge · recommend · row actions · không header `TT`
4. **Form detail** — drivers · chart stub (SVG/CSS bars) · recommend · audit · leave-confirm dirty note
5. **Labels** — hardcode VN OK · `data-i18n` optional
6. **Datetime** — hiển thị local · lưu ISO offset (mock)
7. Badge **P1 online** (gpt-4o-mini) · stub P2 XGBoost/ONNX — **không** hiện GPU/train
8. Mọi **button** trong bảng Actions phải có trên demo (click → toast/modal mock)
9. Mock **8 đoạn** · score 0–100 · «ưu tiên đại tu»
10. **Cấm** gọi BE · **cấm** sửa MFE production

## Refs

- `web-app/skill/erp-form-context/erp-form-context.md`
- `erp-common-controls-mandatory.md` · catalog list shell · leave-confirm
- Capture raw: `_raw/legacy-govone/features/predict.md`
- Data context: `docs/context/features/predict.md`
