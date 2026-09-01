# Task — mobile-cleanup-mock (epic)

| Field | Value |
|-------|-------|
| feature | `mobile-cleanup-mock` |
| this role | epic · enqueue children `roleOnly=dev` · `mode=fix_gaps` |
| slash | `/edit-mobile-feature` |
| queue | `qlbd-mobile` |
| status | `pending` |

## T-EPIC-01 — Parent

- Track P0 13 + P1 8 children · STATUS matrix.  
- **Cấm** implement toàn bộ trong 1 AutocodeTask — 1 slug = 1 child task.

## Per-child DoD (copy vào mỗi task)

1. Review live use-case/mapper/UiState — list mọi `demo*` / `OfflineDemo`.  
2. Dual remove mock (iOS + Android cùng turn).  
3. Seed CRUD qua BFF (Bearer `linm-soft`) hoặc EmptyChrome documented.  
4. Lock `specs/{slug}/implement/{ios,android}.md` + STATUS Notes.  
5. `xcodebuild` + `assembleDebug` PASS.  
6. Toast fail **không** claim «dữ liệu mẫu» nếu không còn demo.

## Priority enqueue

P0 first (ops → … → patrol-history) rồi P1. See STATUS.md tables.
