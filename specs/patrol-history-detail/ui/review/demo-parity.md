# Demo parity — patrol-history-detail (ios ↔ android)

| Field | Value |
|-------|-------|
| feature | `patrol-history-detail` |
| gate | `/review-demo-design-mobile` |
| status | **PASS** (Must closed) |
| reviewUrlIos | `ui/prototype/ios/index.html#sc-patrol-detail` |
| reviewUrlAndroid | `ui/prototype/android/index.html#sc-patrol-detail` |
| analyHash | `sha256:patrol-history-detail-control-hint-20260831` · **no rescan** |
| checkedAt | `2026-09-01T00:56:01.000Z` |
| taskId | `task_5777786c` |

## Must

| Check | iOS | Android | Verdict |
|-------|-----|---------|---------|
| Screen id | `#sc-patrol-detail` · `DES-MOB-PAT-DETAIL` | same | PASS |
| Title | Chi tiết ca | same | PASS |
| Back | text **Lịch sử** + `#i-chevron-left` | icon-only `#i-chevron-left` same `d=` | PASS (chrome OK) |
| Share | `#i-ellipsis` toast | same `d=` toast | PASS |
| Code hero | PAT-20260810-0014 · 28 bold | same · ≥26 bold | PASS |
| Badge | Đang tuần | same | PASS |
| Info 6 rows | User…Coverage copy | same | PASS |
| Timeline 3 | Xuân Hải · Cống ngang · Phước Dinh | same | PASS |
| CTA | Mở bản đồ ca · Kết thúc ca | same | PASS |
| Tab | Tuần đường on · 5 tabs | same | PASS |
| Icons | no invent `#i-*` | same sprites | PASS |
| Type | label 13 · value ≥16 · code ≥26 | same | PASS |
| No watermark / device label / «Có mạng» | — | — | PASS |

## Should

| Check | Notes | Verdict |
|-------|-------|---------|
| Frame | 390×844 / 412×915 | PASS |
| Toast end copy | «Kết thúc ca — xác nhận sau» | PASS |
| Pending TL marker | orange | PASS |

## Open Must

**none** — `design_confirm` allowed (autoApprove=ON → approve).

## Version meta

| Field | Value |
|-------|-------|
| skillId | review-demo-design-mobile |
| skillVersion | 2026.08.31.2 |
| schemaVersion | 2 |
| generatedAt | 2026-09-01T00:56:01.000Z |

---
<!-- Version meta: skillId=review-demo-design-mobile skillVersion=2026.08.31.2 schemaVersion=2 -->
