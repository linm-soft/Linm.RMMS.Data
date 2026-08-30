# Context — mnt-log (mobile · Nhật ký xử lý)

| Field | Value |
|-------|-------|
| feature | `mnt-log` |
| title | [Mobile] [Công việc] -> Nhật ký xử lý |
| des | `DES-MOB-MNT-LOG` (Design tạo · demo P1 = toast entry) |
| demo | toast `#i-list` trên `#sc-mnt-list` card **done** · target surface `#sc-mnt-log` (Design) · `specs/mobile-p1/ui/prototype/{ios,android}/index.html` |
| packKind | `sheet` (scan `_form-type-mobile` · STATUS) · surface = **screen** full (Design chốt) |
| parent | `mnt-list` card action `#i-list` (demo: card «Nạo cống» · Đã hoàn thành) |
| domain | Maintenance · `WorkOrder` — CTX web `maintenance.md` · list `mnt-list.md` |
| BE | `Linm.RMMS.WebService` · DOMAIN-MAP Maintenance — **cấm ERP.*** |
| BFF | `Linm.RMMS.Mobile.Bff` · `mobile-bff/api/v1/maintenance/work-orders/{id}` |

## UI

Sheet/màn **Nhật ký xử lý** (thin mobile · greenfield sau toast · **readonly**):

- Entry: `mnt-list` rich-card `#i-list` · toast copy P1 «Nhật ký xử lý» (done card)
- Top bar «Nhật ký xử lý» · back → `mnt-list`
- Header WO readonly (title · code · status) từ nav / GET detail
- Timeline dọc: các mốc xử lý (tạo · hạn · tiến độ · ghi chú · hoàn thành) — **không** composer chat
- Empty: «Chưa có nhật ký» khi thiếu id / API fail + không demo fallback
- **Không** Primary write CTA trên slug này (readonly)

## API (reuse · cấm invent)

| Method | Path | Role |
|--------|------|------|
| GET | `maintenance/work-orders/{id}` | **Primary** — prefill header + derive timeline P1 từ `WorkOrderDto` |
| GET | `maintenance/work-orders/init-data` | Lookup status labels (display map · opt) |
| Device | — | **không** camera/GPS trên slug nhật ký |

> Live: `WorkOrdersController` **không** có `GET …/logs` · `GET …/progress-history` · `GET/POST …/comments`.  
> CTX entity `WorkOrderProgress` / `WorkOrderComment` **chưa** live table/API.  
> P1: **client derive** timeline từ field Signed trên `WorkOrderDto` (`CreatedAt` · `DueAt` · `Status` · `ProgressPercent` · `Note` · `UpdatedAt` · `Description`) — cùng pattern web demo `progressTimeline`.  
> **Cấm** invent `api/v1/mnt-log` / `…/logs`. History API riêng = **GAP** → SA (không Step 4b ở role analy).

### Derive timeline P1 (SSOT · khớp demo web)

| Order | Condition | Row title (VN) | At |
|-------|-----------|----------------|----|
| 1 | always | Tạo công việc | `CreatedAt` |
| 2 | `DueAt` set | Hạn: {fmt} | `DueAt` |
| 3 | `Description` non-empty | Mô tả: {Description} | `CreatedAt` |
| 4 | `ProgressPercent` > 0 **hoặc** status `in_progress`/`done` | Tiến độ hiện tại {n}% | `UpdatedAt` |
| 5 | `Note` non-empty | {Note} | `UpdatedAt` |
| 6 | status `done` | Hoàn thành | `UpdatedAt` |

Sort newest-first hoặc oldest-first — Design chốt; default **newest-first** (mobile feed).

## Status VN map (align mnt-list demo)

| API `status` | VN (mnt-list demo) |
|--------------|--------------------|
| `new` | Chờ xử lý |
| `in_progress` | Đang xử lý |
| `done` | Đã hoàn thành |
| `cancelled` | Đã hủy |

## Out of scope P1 (this slug)

- List WO (`mnt-list`) · estimate · progress write · chat composer — siblings
- POST/GET comments (**DEFER** · `mnt-chat`)
- POST progress / complete (`mnt-progress`)
- Web Kind B catalog / form full-page WO · Kind E summary
- Invent mobile-only history path
- Camera / GPS / map trên sheet nhật ký

## Gaps

| ID | Default |
|----|---------|
| GAP-MOB-MNT-LOG-SCR-01 | Demo = toast only → Design tạo `#sc-mnt-log` · `DES-MOB-MNT-LOG` |
| GAP-MOB-MNT-LOG-HIST-01 | Không GET history / `WorkOrderProgress` live — P1 derive từ GetById · SA mở rộng nếu Signed |
| GAP-MOB-MNT-LOG-PACK-01 | packKind scan=`sheet` vs surface screen — Design/PO chốt như mnt-progress |
| GAP-MOB-MNT-LOG-ENTRY-01 | Demo chỉ hiện `#i-list` trên card `done` — PO chốt entry mọi status hay chỉ done |
| GAP-MOB-MNT-LOG-CMT-01 | Comments / trao đổi = `mnt-chat` — **cấm** gộp composer vào nhật ký |

## Implement tracking

| lane | phase | status | updatedAt |
|------|-------|--------|-----------|
| web | — | — | — |
| mobile | `done` | `done` | `2026-08-29T08:26:55.146Z` |
