# Context — patrol-offline (Hàng đợi mất sóng)

| Field | Value |
|-------|-------|
| feature | `patrol-offline` |
| slug | `patrol-offline` |
| screen | `#sc-patrol-offline` · `DES-MOB-PAT-OFFLINE` |
| packKind | `list` |
| domain | Integration (sync) · Patrol (check-in P2) · Incident (draft P2) |

## Mục đích

Hiện trường QLĐB thường mất sóng — ghi cục bộ cùng dữ liệu Web, đồng bộ khi có mạng. Không được mất nhật ký tuần tra / nháp sự cố.

## Entry

- Home tile **Lưu trữ** (`home.tile.offline`)
- Me row **Hàng đợi mất sóng** (`me.row.offline`)
- Patrol-home nav Đồng bộ (reuse route)

## API

| Action | Path | Note |
|--------|------|------|
| Sync batch | `POST mobile-bff/api/v1/integration/sync/offline-batch` | proxy Integration |
| Queue list | **local** | UserDefaults iOS · Room Android — **cấm invent GET** |

## Permissions

- `patrol.sessions.update` — đồng bộ điểm tuần
- `incident.incidents.create` — đồng bộ nháp sự cố

## SSOT

- Demo: `specs/mobile-p1/ui/prototype/ios/index.html` `#sc-patrol-offline`
- Strings: `docs/mobile-strings.json` keys `offline.*`
