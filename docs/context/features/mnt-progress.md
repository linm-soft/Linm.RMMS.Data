# Context — mnt-progress (mobile · Cập nhật trạng thái)

| Field | Value |
|-------|-------|
| feature | `mnt-progress` |
| title | [Mobile] [Công việc] -> Cập nhật trạng thái |
| des | `DES-MOB-MNT-PROGRESS` (Design tạo · demo P1 = toast entry) |
| demo | toast `#i-sync` trên `#sc-mnt-list` · target surface `#sc-mnt-progress` (Design) · `specs/mobile-p1/ui/prototype/{ios,android}/index.html` |
| packKind | `sheet` (scan `_form-type-mobile` · STATUS) · surface = **screen** full (Design chốt) |
| parent | `mnt-list` card action `#i-sync` |
| domain | Maintenance · `WorkOrder` — CTX web `maintenance.md` · list `mnt-list.md` |
| BE | `Linm.RMMS.WebService` · DOMAIN-MAP Maintenance — **cấm ERP.*** |
| BFF | `Linm.RMMS.Mobile.Bff` · `mobile-bff/api/v1/maintenance/work-orders/{id}/progress` |

## UI

Sheet/màn **Cập nhật trạng thái** (thin mobile · greenfield sau toast):

- Entry: `mnt-list` rich-card `#i-sync` · toast copy P1 «Cập nhật trạng thái · ảnh + định vị»
- Top bar «Cập nhật trạng thái» · back → `mnt-list`
- Header WO readonly (title · code · status hiện tại) từ nav / GET detail
- Tiến độ % (0–100) · ghi chú
- Ảnh hiện trường (PhotoRow + camera) · vị trí GPS chốt
- Primary «Cập nhật» → POST progress · toast ok
- Khi % = 100 hoặc chọn hoàn thành → POST `complete` (cùng slug)

## API (reuse · cấm invent)

| Method | Path | Role |
|--------|------|------|
| GET | `maintenance/work-orders/{id}` | Prefill header WO (opt nếu nav payload đủ) |
| GET | `maintenance/work-orders/init-data` | Lookup status/workType (display map) |
| POST | `maintenance/work-orders/{id}/progress` | **Primary** — `ProgressPercent` · `Note` · auto `new`→`in_progress` |
| POST | `maintenance/work-orders/{id}/complete` | Khi hoàn thành / 100% · stub Signed |
| Device | camera · GPS | **không** API — UX toast «ảnh + định vị» |
| Optional | `ai-vision/uploads` | Media attach P1 nếu SA Signed — **GAP** (Progress DTO chưa MediaUrl) |

> Live: `ProgressWorkOrderRequest` = `{ ProgressPercent, Note? }` · **không** lat/lng/media trên body. GPS/ảnh = device UX · Note có thể nhúng tóm tắt vị trí P1 · media = GAP.

## Status VN map (align mnt-list demo)

| API `status` | VN (mnt-list demo) | init-data Label |
|--------------|--------------------|-----------------|
| `new` | Chờ xử lý | Mới |
| `in_progress` | Đang xử lý | Đang thực hiện |
| `done` | Đã hoàn thành | Hoàn thành |
| `cancelled` | Đã hủy | Hủy |

Mobile list chrome giữ copy **mnt-list**; init-data labels dùng cho Select nếu Design mở status picker.

## Out of scope P1 (this slug)

- List WO (`mnt-list`) · estimate · chat · nhật ký — siblings
- Web Kind B catalog / form full-page WO
- POST comments (**DEFER** · `mnt-chat`)
- Kind E `maintenance/summary`
- Invent `api/v1/mnt-progress` / mobile-only DTO fork

## Gaps

| ID | Default |
|----|---------|
| GAP-MOB-MNT-PROG-SCR-01 | Demo = toast only → Design tạo `#sc-mnt-progress` · `DES-MOB-MNT-PROGRESS` |
| GAP-MOB-MNT-PROG-MEDIA-01 | `ProgressWorkOrderRequest` không MediaUrl · CTX `WorkOrderProgress.MediaUrl` chưa live table — P1: camera UX + optional uploads · Note text · SA mở rộng nếu Signed |
| GAP-MOB-MNT-PROG-GPS-01 | Không lat/lng trên progress body — P1: GPS chốt device · embed tóm tắt vào `Note` · **cấm** fake |
| GAP-MOB-MNT-PROG-LABEL-01 | init-data «Đang thực hiện» ≠ demo list «Đang xử lý» — PO/Design chốt 1 map |
| GAP-MOB-MNT-PROG-PACK-01 | packKind scan=`sheet` vs surface screen — Design/PO chốt như estimate/feedback |

## Implement tracking

| lane | phase | status | updatedAt |
|------|-------|--------|-----------|
| web | — | — | — |
| mobile | `done` | `done` | `2026-08-29T16:53:37.658Z` |
