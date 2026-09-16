# Dev — Implement — estimate (iOS)

| Field | Value |
|-------|-------|
| feature | `estimate` |
| platform | iOS |
| this role | `dev` · `/edit-mobile-feature` |
| status | **done** |
| changeScope | `edit_page` · WO-02 Giao việc submit |
| packKind | `sheet` → full screen `#sc-estimate` · `DES-MOB-EST` |
| dest | iPhone 17 Pro |
| updatedAt | `2026-09-16T13:55:00.000Z` |

## Delta WO-02 (2026-09-16)

| Area | Change |
|------|--------|
| Assign chain | PUT lines + confirm **best-effort** (`try?`) · **không** chặn `POST maintenance/work-orders` |
| Body | Title/RouteName non-empty · DueAt ISO `yyyy-MM-dd'T'HH:mm:ss.SSSXXXXX` UTC · WorkType=`repair` · Status=`new` |
| Line id | UUID-only · **cấm** `""` (ASP.NET Guid? 400) |
| Decode | WO `code` fallback `id` · `slaHours` Int/Double |
| API/BFF | **unchanged** |

## Notes dest

`xcodegen generate` + `xcodebuild -scheme LinmRmms` dest **iPhone 17 Pro** · **PASS** (2026-09-16).

Prior NAV-02/03/04 · SEED-02 · EDIT-01 **giữ**.

## Version meta

| Field | Value |
|-------|-------|
| skillId | edit-mobile-feature |
| generatedAt | 2026-09-16T13:55:00.000Z |
| dest | iPhone 17 Pro |

---
<!-- Version meta: skillId=edit-mobile-feature generatedAt=2026-09-16T13:55:00.000Z dest=iPhone 17 Pro -->
