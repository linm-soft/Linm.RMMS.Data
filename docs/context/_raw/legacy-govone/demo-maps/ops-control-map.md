# Demo control-map (modern MFE) — `ops`

> **Rule:** cùng field/action legacy · UI theo **`/erp-form-context`** (Linm.Development.Rules).  
> Demo HTML mock `Lin*` look · **cấm** copy skin GOVOne cũ · **cấm** BE.  
> Legacy: synthetized (ops product context · notify inbox) — `_raw/legacy-govone/features/ops.md`.  
> **≠** GOVOne `dbv3giamsat` (`patrol`) — map realtime → navigate Patrol/Gis.

## Kind hint

- **B** CatalogListShell (inbox list `/ops`) + **D** slideout compose/detail (`/ops/new` · `/ops/:id`)
- Confirmed by: ai-autocode-autopilot (route ownership Notification MFE)
- Step 2a-K · 2d readonly · 2g control-map · 2g common controls mandatory · 2k voucher_default · leave-confirm
- Overview KPI strip P1 · **Command center** badge **P2** (không full hub P1)

## Fields (legacy → Linm)

| Legacy | type | zone | Control | Linm SSOT |
|--------|------|------|---------|-----------|
| Mã chỉ đạo | text | header | Code | form-code-field · OPS-YYYYMMDD-NNNN |
| Tiêu đề | text | content | Text | TextField · required |
| Nội dung | textarea | content | TextArea | TextField multiline · required |
| Người nhận / đội | select | content | Select | Select · useFormOptions (đội / cá nhân) |
| Độ ưu tiên | select | filter+form | Select | Select · cao / trung bình / thấp |
| Loại chỉ đạo | select | filter+form | Select | Select · tuần tra / sự cố / SC / thông báo |
| Liên kết nguồn | text | content | Lookup text | TextField · INC/WO/PAT code |
| Trạng thái | select | filter+grid | Select | Select · moi / da-doc / da-giao / hoan-thanh |
| Thời gian gửi | datetime | header | DateTime | utcToLocalInputValue · localInputToISOWithOffset |
| Người gửi | text | header | Text readonly | TextField readOnly |
| Kênh gửi | select | content | Select | Select · inbox / push / signalr-stub |
| Phản hồi (P2) | textarea | content | TextArea | TextField multiline · P2 badge |

## Actions / buttons (legacy → toolbar MFE)

| Legacy label | kind | zone | Demo button | Linm SSOT |
|--------------|------|------|-------------|-----------|
| Làm mới | action | toolbar | Làm mới | CatalogListShell refresh |
| Làm mới overview | action | toolbar | Làm mới overview | Overview KPI mock refresh |
| Tạo chỉ đạo | create | toolbar | Tạo chỉ đạo | Button primary · mở Kind D |
| Lọc / Tìm | filter | filter | Lọc / Tìm | Filter bar apply |
| Lọc chưa đọc | filter | filter | Lọc chưa đọc | Unread filter toggle |
| Đánh dấu đã đọc | action | grid | Đánh dấu đã đọc | Row action · status→da-doc |
| Đánh dấu tất cả đã đọc | action | toolbar | Đánh dấu tất cả đã đọc | Bulk mark read mock |
| Xem chi tiết | view | grid | Xem chi tiết | Open Kind D detail |
| Giao việc | action | grid/footer | Giao việc | P2 badge · toast stub |
| Xuất inbox | export | toolbar | Xuất inbox | Export stub · toast |
| Mở Giám sát | nav | toolbar | Mở Giám sát | Navigate `/patrol` demo |
| Mở Bản đồ | nav | toolbar | Mở Bản đồ | Navigate `/gis` demo |
| Mở Sự cố | nav | toolbar | Mở Sự cố | Navigate `/incident` demo |
| Command center | nav | toolbar | Command center | P2 badge · modal stub |
| Thông báo | nav | header | Thông báo | Notification badge · dropdown |
| User menu | nav | header | User menu | Avatar dropdown · profile / logout |
| Gửi chỉ đạo | create | footer | Gửi chỉ đạo | FormActions primary · toast · **cấm** BE |
| Lưu nháp | action | footer | Lưu nháp | FormActions Save draft · localStorage |
| Xóa nội dung | destructive | footer | Xóa nội dung | clear body/title · dirty |
| Hủy thay đổi | close | footer | Hủy thay đổi | FormActions Cancel · snapshot restore |
| Đóng | close | header | Đóng | Slideout close · leave-confirm |
| Quay lại | nav | header | Quay lại | Back · leave-confirm |

## Demo page rules (bắt buộc)

1. **Layout** — Kind B list shell (title · toolbar · filter · grid) + Kind D slideout (Z1/Z2/Z3)
2. **Overview** — 4 KPI mock (cán bộ online · sự cố mở · WO · chưa đọc)
3. **Form** — validation (tiêu đề + nội dung + người nhận) · toast · leave-confirm dirty
4. **Cross-MFE** — nút nav sang patrol/gis/incident demo — **không** nhúng realtime map CRUD
5. **Labels** — hardcode VN OK trong demo HTML nếu gắn `data-i18n`
6. Mọi **button** trong bảng Actions phải có trên demo (click → toast/modal/nav mock)
7. **Cấm** gọi `/api/v1/ops/*` · `/api/v1/notifications/*` · SignalR thật
8. Badge **P2 Command center** · badge **≠ Giám sát GOVOne** (map = patrol)

## Refs

- `web-app/skill/erp-form-context/erp-form-context.md`
- `erp-list-page-shell.md` · `erp-common-controls-mandatory.md` · leave-confirm
- Capture raw: `_raw/legacy-govone/features/ops.md`
- Data context: `docs/context/features/ops.md`
- MFE ownership: `Linm.Web.RMMS.Notification` · `/ops`
