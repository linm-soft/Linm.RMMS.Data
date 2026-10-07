# Context — web-rmms-cam-nghiem-thu

| Field | Value |
|-------|-------|
| feature | `web-rmms-cam-nghiem-thu` |
| title | Camera phiếu nghiệm thu |
| packKind | `list` |
| changeScope | `edit_page` |
| lane | `web` |
| source | PLAN-3-VAI #6 · peer `web-rmms-nghiem-thu` · code NghiemThu* |
| mfe | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Mobile` |
| productRoute | `/nghiem-thu` · `/nghiem-thu/moi` · `/nghiem-thu/:id` |
| mfeStdUrl | `http://localhost:9301/web-rmms-cam-nghiem-thu` (queue alias · **cấm** invent product route) |
| be | `D:/AI-QLBD/Linm.RMMS.WebService` · Patrol `nghiem-thu` · **cấm ERP.*** |
| bff | `Linm.RMMS.Mobile.Bff` `:5202` · `mobile-bff/api/v1` · **cấm** web-bff |
| phoneFrame | `max-width: 430px` |
| demo | **N/A** |

## Goal

Edit NghiemThu list/form: chỉ vai **nghiệm thu** lập phiếu + ảnh hiện trường. Tuần đường / tuần kiểm / `QL_HAT` không lập. RO đối chiếu ca tuần đường + finding đã xác nhận đạt. **Cấm** Giao việc · **cấm** Xác nhận đạt / hoàn thành sự cố trên slug này · **cấm** Mục IV tiền · **cấm** route mới.

## Role matrix (HARD)

| Vai | Write NT-F | List NT-L | Capture | Giao / Xác nhận SC |
|-----|------------|-----------|---------|-------------------|
| Nghiệm thu | yes | full + CTA Tạo | yes | **no** |
| Tuần đường | no | **ẩn** list (mặc định) | no | no |
| Tuần kiểm | no | RO xem tối thiểu (đối chiếu) | no | no trên NT |
| `QL_HAT` (`HAT-TRUONG`+`HAT-PHO`) | no | RO xem | no | no trên slug |

## Screens

- NT-L `/nghiem-thu` · NT-F `/nghiem-thu/moi|:id` · NT-RO-LINK zone RO

## Out

`new_page` · invent CamNghiemThu* · Excel · SlaHours=24 · iOS/Android · web-bff · ERP.* · chấm kỳ 100 điểm trên form này

## Implement tracking

| lane | phase | status | updatedAt |
|------|-------|--------|-----------|
| web | `done` | `done` | `2026-09-30T19:50:43.445Z` |
| mobile | — | — | — |
