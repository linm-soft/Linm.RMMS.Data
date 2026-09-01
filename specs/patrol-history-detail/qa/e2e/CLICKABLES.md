# Clickables — patrol-history-detail

| | |
|--|--|
| feature | `patrol-history-detail` |
| source | Maestro `qa/e2e/{ios,android}.yaml` + VM intents · **cấm** Review re-run `--crawl` (roleOnly=review · packet HARD) |
| writtenAt | `2026-09-01T02:00:28.000Z` |
| GAP-MOB-ACT-03 open | **0** |

| id | label | expect | result | gap |
|----|-------|--------|--------|-----|
| navBack | Lịch sử / back | pop `#sc-patrol-history` | **PASS** | — |
| navShare | ellipsis | toast share P1 | **PASS** | intentional toast · not sibling |
| btnMap | Mở bản đồ ca | nav `patrol-map` + Id | **PASS** | sibling exists · **GAP-MOB-ACT-06** cấm auto-start |
| btnEnd | Kết thúc ca | toast end P1 | **PASS** | intentional · no PUT |
| tlItem open | Điểm tuần (canOpen) | toast checkin P1 | **PASS** | checkin-detail screen P2 debt |
| tlItem pending | Đang tới | no-op | **PASS** | `canOpen=false` |

Enqueue sibling: **none** (no FAIL hub CTA).
