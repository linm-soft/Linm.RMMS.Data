# Data-analy — patrol-history (controlHint)

| | |
|---|---|
| feature | `patrol-history` |
| title | [Mobile] [Tuần đường] -> Lịch sử phiên |
| role | `data_analy` · `/agent-data-analy-mobile` · mode `feature_context` |
| packKind | **`list`** |
| changeScope | `new_page` |
| status | **confirmed** |
| taskId | `task_73b95722` |
| demo | `specs/mobile-p1/ui/prototype/{ios,android}/index.html` `#sc-patrol-history` `DES-MOB-PAT-LIST` |
| ctx | `docs/context/features/patrol-home.md` · `patrol.md` |
| generatedAt | `2026-08-20T03:56:00.000Z` |

**Cấm:** invent `api/v1/patrol-history` · gộp `#sc-patrol-detail` · ERP.* · mfeStdUrl.

## Tech factors

| Factor | P1 | Notes |
|--------|----|-------|
| List | **yes** | search client-side · filter toast |
| GPS | n/a | |
| Offline | list vẫn mở | GET fail → demo SSOT 4 rows |
| Detail drill | toast P1 | **cấm** push `#sc-patrol-detail` |

## controlHint

| Field | VN | controlHint | Kit | Notes |
|-------|----|-------------|-----|-------|
| navBack | Tuần đường | IconButton / text+chevron | `LinmTopBar` leading | pop `patrol-home` |
| navFilter | Lọc | TextButton | `LinmTopBar` trailing | toast P1 |
| largeTitle | Lịch sử ca | Text | `LinmLargeTitle` | fixed |
| search | Tìm | SearchField | `LinmSearchField` | filter code/route client-side |
| rowCode | PAT-… | Text | `LinmListRow` title | no leading icon |
| rowSub | QL.1 · Tuần đường · 2/3 điểm | Text | subtitle | status-aware |
| rowBadge | Đang tuần / Hoàn thành / Bỏ sót / Mất sóng | Badge | `LinmBadge` | info/success/danger/warning |

UNCLEAR = **none**.

## Version meta

| Field | Value |
|-------|-------|
| skillId | agent-data-analy-mobile |
| contentHash | sha256:patrol-history-control-hint-20260820 |
