# QA — Scenarios — field-reflect

| Field | Value |
|-------|-------|
| feature | `field-reflect` |
| title | [Mobile] [Tuần đường] -> Ghi nhận hư hỏng |
| this role | `qa` · `/agent-qa-mobile` |
| status | **confirmed** |
| changeScope | `edit_page` · gap=`field_reflect_align_incident_create` **CLOSED** |
| packKind | **`screen`** |
| taskId | `task_26b1db16` |
| autoApprove | ON |
| e2eQa | ON · `yarn e2e-qa-mobile` · Maestro ON |
| ios_test_phase | `phase1_iphone` · dest **iPhone 17 Pro Max** · **A4-IPAD DEFER** |
| method | e2e runtime · yarn e2e-qa-mobile |
| visual | `/review-align-ux-ios-android` · **Aligned** · Must **0** |
| updatedAt | `2026-09-01T12:17:58.000Z` |

## Device AC

| # | Scenario | Expected | Result | Evidence |
|---|----------|----------|--------|----------|
| 1 | Cold start guest home | `#sc-home` · CTA Đăng nhập | **PASS** | A11-LAUNCH |
| 2 | Login Auth seed | `linm-soft` / `Linm@2026` → `#sc-home` | **PASS** | A9-LOGIN |
| 3 | BFF reachable | Mobile.Bff `:5202` healthy | **PASS** | A10-BFF |
| 4 | Entry hub → pick | tab field · `row-quick-field-reflect` → `#sc-field-pick` | **PASS** | A3 / P6 |
| 5 | Pick KCHT-32 → form | `ak32-*` / text → `#sc-field-reflect` · asset card | **PASS** | A3 / P6 |
| 6 | Kind pills | Hư/Mất/Hỏng · default **Hư** | **PASS** | A3 / P6 |
| 7 | PhotoRow + camera glyph | camera slot · no continuous finder | **PASS** | A3 / P6 |
| 8 | Card Nhận diện / Vị trí | `LinmListRow` · no leading tile | **PASS** | A3 / P6 |
| 9 | Checklist by asset code | BRIDGE/PAVEMENT · Hư filter | **PASS** | A3 / P6 |
| 10 | Severity + mô tả | select · placeholder | **PASS** | A3 / P6-2 |
| 11 | CTA Create / Draft | Primary + Secondary ids (scroll) | **PASS** | Maestro optional · code ids |
| 12 | Dual OS | iOS 6.9" + Android Pixel 1080×1920 | **PASS** | A3 + P6 + P6-2 |
| 13 | Watermark / placeholder | none «Gói N» / «gen realapp» | **PASS** | CORE Read |
| 14 | Sibling AC | only `field-reflect` · no cam-patrol / inc-form | **PASS** | flows |

## Store × feature

| AC | Apple | Play | Result | Evidence |
|----|-------|------|--------|----------|
| Core UX | A3 · A11 | P6 · P11 | **PASS** | A3-CORE · P6-CORE |
| Login + BFF | A9 · A10 | P10 · P11 | **PASS** | A9-LOGIN · A10-BFF |
| ≥2 phone core | — | P6 | **PASS** | P6-CORE · P6-CORE-2 |
| Camera/GPS privacy declared | A5/A7 | P8 | **PASS** (declared Dev) | STATUS |
| READY_TO_SUBMIT | — | — | **không** (Review) | — |

## E2E screenshots

Viewer: `/api/qldb/artifact?id=&rel=qa/scenarios.md` rewrite `screens/{caseId}.png`.

CLI **PASS** = Maestro + PNG + store px only — **not** visual vs demo. QA **Read** A3-CORE + P6-CORE vs prototype (`/review-align-ux-ios-android`).

| Case | Store | Result | Evidence |
|------|-------|--------|----------|
| A10-BFF | A10 · P11 | **PASS** | — |
| A11-LAUNCH | A11 | **PASS** | ![A11-LAUNCH](screens/A11-LAUNCH.png) |
| A9-LOGIN | A9 · P10 | **PASS** | ![A9-LOGIN](screens/A9-LOGIN.png) |
| A3-CORE | A3 · A11 | **PASS** | ![A3-CORE](screens/A3-CORE.png) |
| P6-CORE | P6 · P11 | **PASS** | ![P6-CORE](screens/P6-CORE.png) |
| P6-CORE-2 | P6 | **PASS** | ![P6-CORE-2](screens/P6-CORE-2.png) |

## Visual align (CORE Read)

| Zone | Demo | iOS A3 | Android P6 | Verdict |
|------|------|--------|------------|---------|
| `#sc-field-pick` → form | pick gate Dev | back **Chọn tài sản** · asset card | same · TopAppBar back | **PASS** |
| Title · kind Hư | DES-MOB-FIELD-KIND | **PASS** | **PASS** | **Aligned** |
| Photo camera glyph | `#i-camera` | **PASS** | **PASS** | **Aligned** |
| Detect / loc rows | `.row` no-icon | **PASS** | **PASS** | **Aligned** |
| Checklist asset | by code | BRIDGE HƯ rows | same | **PASS** |
| Severity select | align incident-create | Cao | Cao | **PASS** |
| Watermark | none | none | none | **PASS** |

Must **0** · Should **0** (CTA below fold on CORE shot — Accept · Maestro ids present).

## Debt

- GAP-MOB-FIELD-MEDIA-01 — Signed deferred · **Accept**
- GAP-QA-FIELD-GPS-TIMING-01 — **Defer**

## Maestro delta this turn

- `qa/e2e/{ios,android,crawl-*}.yaml` — wait `#sc-field-pick` · tap `ak32-PAVEMENT`/`ak32-BRIDGE` → `#sc-field-reflect`

---
<!-- Version meta: skillId=agent-qa-mobile skillVersion=2026.08.20.03 schemaVersion=1 workflowVersion=2026.08.25.01 rulesVersion=2026.08.29.4 versionGate=rechecked -->
