# Dev — Implement — estimate (Android)

| Field | Value |
|-------|-------|
| feature | `estimate` |
| platform | Android |
| this role | `dev` · `/edit-mobile-feature` |
| status | **done** |
| changeScope | `edit_page` · WO-02 Giao việc submit |
| packKind | `sheet` → full screen `#sc-estimate` · `DES-MOB-EST` |
| dest | assembleDebug |
| updatedAt | `2026-09-16T13:55:00.000Z` |

## Delta WO-02 (2026-09-16)

| Area | Change |
|------|--------|
| Assign chain | PUT/confirm `runCatching` **giữ** · POST WO primary |
| Body | Title/RouteName non-empty · DueAt ISO `yyyy-MM-dd'T'HH:mm:ss.SSSXXX` UTC · WorkType=`repair` · Status=`new` |
| Line id | UUID-only |
| Decode | WO `code` fallback `id` |
| API/BFF | **unchanged** |

## Notes dest

`./gradlew :app:assembleDebug` · **PASS** (2026-09-16).

Prior NAV-03/04 · SEED-02 · RO-01 · EDIT-01 **giữ**.

## Version meta

| Field | Value |
|-------|-------|
| skillId | edit-mobile-feature |
| generatedAt | 2026-09-16T13:55:00.000Z |

---
<!-- Version meta: skillId=edit-mobile-feature generatedAt=2026-09-16T13:55:00.000Z dest=assembleDebug -->
