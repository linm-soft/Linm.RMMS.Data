# Context — patrol-history (mobile)

| Field | Value |
|-------|-------|
| feature | `patrol-history` |
| des | `DES-MOB-PAT-LIST` |
| demo | `#sc-patrol-history` |
| parent | `patrol-home` row **Lịch sử phiên** |

## UI

List lịch sử ca tuần tra: large title **Lịch sử ca** · search · rows mã phiên + badge trạng thái.

## API

Reuse `GET mobile-bff/api/v1/patrol/sessions` — **cấm** endpoint mới.

## Out of scope P1

- `#sc-patrol-detail` push
- Filter sheet (toast only)
