# Demo parity — supervise (iOS ↔ Android)

| Field | Value |
|-------|-------|
| feature | `supervise` |
| changeScope | `edit_page` |
| review | `/review-demo-design-mobile` |
| taskId | `task_69283465` |
| status | **PASS** · Must open = **0** |
| generatedAt | `2026-09-12T09:55:00.000Z` |

## Compare

| Check | iOS | Android | Verdict |
|-------|-----|---------|---------|
| Prefix board | `prototype/ios/index.html` | `prototype/android/index.html` | PASS `GAP-MOB-DES-PFX-01` |
| `#sc-supervise` · DES-MOB-SUPERVISE | yes | yes | PASS |
| Title / Lọc / segment copy | same VN | same VN | PASS |
| Filter sheet Tuyến·Ngày·Áp dụng·Xóa lọc | yes | yes | PASS |
| Map seg → push cue · reset idx 0 · **no** toast map | yes | yes | PASS |
| Card tap → detail cue · **no** toast filter | yes | yes | PASS |
| Icons `#i-*` same `d=` | yes | yes | PASS |
| Seg chrome | pill | underline | OK chrome lệch |
| Frame | 390×844 | 412×915 | OK |
| Watermark / device label / «Có mạng» | none | none | PASS |
| Toast only for loadFail (not filter/map) | reserved | reserved | PASS |

## Must open

**none**

## Notes

- Proto demo filter client-side on sample cards; native binds GET `route` + client day.
- Nav cue strings are design affordances — Dev wires NavigationLink / NavController.

## Version meta

| Field | Value |
|-------|-------|
| skillVersion | 2026.08.19.26 |
| contentHash | sha256:supervise-mobile-filter-live-20260912 |
