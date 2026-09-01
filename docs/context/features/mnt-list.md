# Context — mnt-list (mobile · Công việc)

| Field | Value |
|-------|-------|
| feature | `mnt-list` |
| title | [Mobile] Công việc |
| des | `DES-MOB-MNT-LIST` |
| demo | `#sc-mnt-list` · `specs/mobile-p1/ui/prototype/{ios,android}/index.html` |
| packKind | `list` |
| parent | `home` tile **Công việc** · shell tab `work` |
| domain | Maintenance · `WorkOrder` — CTX web `maintenance.md` |
| BE | `Linm.RMMS.WebService` · DOMAIN-MAP Maintenance — **cấm ERP.*** |
| BFF | `Linm.RMMS.Mobile.Bff` · `mobile-bff/api/v1/maintenance/work-orders` |

## UI

List công việc bảo trì (thin mobile):

- Top bar «Danh sách công việc» · back Home · trailing **Lọc** (toast P1)
- Search «Tìm kiếm công việc…»
- Hub row **Giao việc xử lý** → `#sc-estimate` (`estimate`)
- Rich cards: title · assigner/assignee · thời hạn · sự cố/tuyến · status bar · action icons

## API (reuse · cấm invent)

| Method | Path | Role |
|--------|------|------|
| GET | `maintenance/work-orders` | List + search/status/workType |
| GET | `maintenance/work-orders/init-data` | Lookup status/workType (filter P2) |
| POST | `maintenance/work-orders/{id}/progress` | Cập nhật tiến độ — sibling toast P1 |
| POST | `maintenance/work-orders/{id}/comments` | Trao đổi — **DEFER** · sibling toast |

## Out of scope P1 (this slug)

- Full WO form create/edit (web Kind B)
- Kind E KPI `maintenance/summary`
- Filter sheet (toast only)
- `#sc-estimate` implement — sibling `estimate`
- Chat / progress / nhật ký sheets — siblings toast P1

## Implement tracking

| lane | phase | status | updatedAt |
|------|-------|--------|-----------|
| web | — | — | — |
| mobile | `done` | `done` | `2026-09-01T05:01:31.089Z` |
