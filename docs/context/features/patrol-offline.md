# Context — patrol-offline (Hàng đợi mất sóng)

| Field | Value |
|-------|-------|
| feature | `patrol-offline` |
| slug | `patrol-offline` |
| screen | `#sc-patrol-offline` · `DES-MOB-PAT-OFFLINE` |
| packKind | `list` |
| changeScope | `edit_page` · gap=`offline_sync_reconnect` |
| domain | Integration (receipt) · Patrol (check-in apply) · Incident (create apply) |

## Mục đích

Hiện trường QLĐB thường mất sóng — ghi cục bộ cùng dữ liệu Web, đồng bộ khi có mạng. Không được mất nhật ký tuần tra / nháp sự cố.

## GAP (2026-09-16)

`POST integration/sync/offline-batch` chỉ tạo SyncJob `Status=done` — **không** apply DB. DoD: replay hàng đợi → `POST patrol/sessions/{id}/check-ins` + `POST incident/incidents` · xóa local chỉ khi 2xx. **Auto** `syncPending` khi `isOnline` về — **cấm** chỉ tap Đồng bộ.

## Entry

- Home tile **Lưu trữ** (`home.tile.offline`)
- Me row **Hàng đợi mất sóng** (`me.row.offline`)
- Patrol-home nav Đồng bộ (reuse route)

## API

| Action | Path | Note |
|--------|------|------|
| Replay check-in | `POST mobile-bff/api/v1/patrol/sessions/{id}/check-ins` | **primary** apply DB |
| Replay incident | `POST mobile-bff/api/v1/incident/incidents` | **primary** apply DB · catalog prepare |
| Sync receipt | `POST mobile-bff/api/v1/integration/sync/offline-batch` | optional after OK |
| Queue list | **local** | UserDefaults iOS · prefs Android — **cấm invent GET** |

## Permissions

- `patrol.sessions.update` — đồng bộ điểm tuần
- `incident.incidents.create` — đồng bộ nháp sự cố (replay)

## SSOT

- Demo: `specs/patrol-offline/ui/prototype/{ios,android}/index.html` `#sc-patrol-offline`
- Strings: `docs/mobile-strings.json` keys `offline.*`
- Analy: `specs/_data-analy/patrol-offline-*.md`

## Implement tracking

| lane | phase | status | updatedAt |
|------|-------|--------|-----------|
| web | — | — | — |
| mobile | `done` | `done` | `2026-09-16T14:00:00.000Z` |
