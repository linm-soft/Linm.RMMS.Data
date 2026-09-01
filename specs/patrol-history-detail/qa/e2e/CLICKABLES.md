# Clickables — patrol-history-detail

| | |
|--|--|
| feature | `patrol-history-detail` |
| source | Maestro `qa/e2e/{ios,android}.yaml` + VM intents · **cấm** Review re-run `--crawl` (roleOnly=review · packet HARD) |
| writtenAt | `2026-09-01T11:25:38.000Z` |
| taskId | `task_96251956` |
| GAP-MOB-ACT-03 open | **0** |

| id | label | expect | result | gap |
|----|-------|--------|--------|-----|
| navBack | Lịch sử / back | pop `#sc-patrol-history` | **PASS** | — |
| histRow / tapToday | entry | push `#sc-patrol-detail` + Id | **PASS** | NAV-01 closed (QA `task_cf2aadc0`) |
| navShare | ellipsis | toast share P1 | **PASS** | intentional toast · not sibling |
| btnMap | Mở bản đồ ca | nav `patrol-map` + Id | **PASS** | sibling exists · **GAP-MOB-ACT-06** cấm auto-start |
| btnEnd | Kết thúc ca | toast end P1 | **PASS** | intentional · no PUT |
| tlItem open | Điểm tuần (canOpen) | toast checkin P1 | **PASS** | checkin-detail screen P2 debt |
| tlItem pending | Đang tới | no-op | **PASS** | `canOpen=false` |

Enqueue sibling: **none** (no FAIL hub CTA).
