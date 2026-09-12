# Context — patrol-offline (Hàng đợi mất sóng)

| Field | Value |
|-------|-------|
| feature | `patrol-offline` |
| slug | `patrol-offline` |
| screen | `#sc-patrol-offline` · `DES-MOB-PAT-OFFLINE` |
| packKind | `list` |
| changeScope | `edit_page` · gap=`offline_sync_apply_checkins` |
| domain | Integration (receipt) · Patrol (check-in apply) · Incident (draft P2) |

## Mục đích

Hiện trường QLĐB thường mất sóng — ghi cục bộ cùng dữ liệu Web, đồng bộ khi có mạng. Không được mất nhật ký tuần tra / nháp sự cố.

## GAP (2026-09-12)

`POST integration/sync/offline-batch` chỉ tạo SyncJob `Status=done` — **không** apply điểm tuần vào DB. DoD: replay hàng đợi → `POST patrol/sessions/{id}/check-ins` thật · xóa local chỉ khi 2xx.

## Entry

- Home tile **Lưu trữ** (`home.tile.offline`)
- Me row **Hàng đợi mất sóng** (`me.row.offline`)
- Patrol-home nav Đồng bộ (reuse route)

## API

| Action | Path | Note |
|--------|------|------|
| Replay check-in | `POST mobile-bff/api/v1/patrol/sessions/{id}/check-ins` | **primary** apply DB |
| Sync receipt | `POST mobile-bff/api/v1/integration/sync/offline-batch` | optional after OK |
| Queue list | **local** | UserDefaults iOS · prefs Android — **cấm invent GET** |

## Permissions

- `patrol.sessions.update` — đồng bộ điểm tuần
- `incident.incidents.create` — đồng bộ nháp sự cố (P2)

## SSOT

- Demo: `specs/patrol-offline/ui/prototype/{ios,android}/index.html` `#sc-patrol-offline`
- Strings: `docs/mobile-strings.json` keys `offline.*`
- Analy: `specs/_data-analy/patrol-offline-*.md`

## Implement tracking

| lane | phase | status | updatedAt |
|------|-------|--------|-----------|
| web | — | — | — |
| mobile | `done` | `done` | `2026-09-12T14:52:44.446Z` |
