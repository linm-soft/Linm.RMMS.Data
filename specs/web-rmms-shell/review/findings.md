# Review — Findings — web-rmms-shell

| Field | Value |
|-------|-------|
| feature | `web-rmms-shell` |
| this role | `review` · `/agent-review` |
| status | `done` |
| review_confirm | **done** (autoApprove=ON) |
| changeScope | `new_page` |
| packKind | `list` (phone shell ≠ Kind B) |
| contentHash | `sha256:6f74282b807da7f2cc1aa57ac64848cd1d75ff3383c0f432eaad7bea53fff80e` · **unchanged** · hash skip data-analy |
| mfeStdUrl | `http://localhost:9301/web-rmms-shell` |
| mfe | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Mobile` |
| backend | `D:/AI-QLBD/Linm.RMMS.WebService` · Mobile.Bff `:5202` · **cấm ERP.*** |
| prior | qa=`confirmed` · compact `handoff/qa-compact.md` · verdict PASS · Must 0 |
| skillVersion | `2026.09.05.03` |
| writtenAt | `2026-09-25T12:00:00.000Z` |
| taskId | `task_f8c53dca` |

## Verdict

**PASS** · Must **0** · P0 **0** · `review_confirm=done` · pipeline complete (roleOnly stop).

## Scope / hash

- changeScope=`new_page` · control-hint + real-data present under `specs/_data-analy/features/`
- contentHash match data_analy→qa → **no** re-scan / hash gate reopen
- DOMAIN-MAP `web-rmms-shell` → Notification/`notification` **CLOSED**
- STD-PORT `:9301` **CLOSED**

---

## QUERY

| Check | Result | Evidence |
|-------|--------|----------|
| FormMode↔API map | **PASS** | login POST auth · refresh · GET profile · GET session-window · GET notification/overview · opt GET patrol/sessions |
| entity/migration invent | **PASS** | none · cấm shell CRUD / me* |
| ERP.* leak | **PASS** | MFE WebRmmsShell 0 `ERP.` · DOMAIN-MAP cite RMMS only |
| Lookup labels | **PASS** | `useFormOptions('web-rmms-shell')` + LOOKUP_STATIC fallback (debt soft) |
| BFF route owner | **PASS** | overview on `NotificationOverviewMobileController` · web controller stays `web-bff` |

## SEC

| Check | Result | Evidence |
|-------|--------|----------|
| Auth gate | **PASS** | `hasAccessToken` · session-window deny → `clearLocalAuth` + login sheet |
| Password field | **PASS** | `#loginPass` type=password · autocomplete |
| Token storage | **PASS** (soft debt) | `setAuthTokens` + multi-key probe in `chrome.ts` — intentional compat |
| GPS chrome | **PASS** | 0 `geolocation` under WebRmmsShell · deep peers only |
| Session window fail-open | **PASS** | match BFF middleware when API unreachable |
| Guest vs staff | **PASS** | SH-03 `data-mode` guest/staff · Field doors require staff |

## UI-FN

| Check | Result | Evidence |
|-------|--------|----------|
| Tabs 4 only | **PASS** | Home·Field·Incident·Work · ids tabHome/Field/Incident/Work · me* REMOVED |
| Zones SH-00…06 | **PASS** | Layout SH-00/01 · Login SH-02 · Home SH-03 · Field SH-04 · QA PNG Aligned |
| LeaveConfirmModal | **PASS** | LoginSheet dirty → LeaveConfirmModal · 0 `alert()` |
| Field doors → peer A | **PASS** | doorPatrol/Inspect → `/web-rmms-mobile-a/tuan-duong|tuan-kiem` |
| Phone frame | **PASS** | `data-phone-frame=430` · CSS responsive |
| Toast | **PASS** | `dispatchAppToast` login/sync |
| QA visual | **PASS** | S0/S1/QA-20 Aligned · Must 0 (qa-compact) |
| List/Filter/Grid | **WAIVE** | phone shell · no LinErpListFilterBar / DES-GRID |

## BE-FN

| Check | Result | Evidence |
|-------|--------|----------|
| Notification overview | **PASS** | API `api/v1/notification/overview` · BFF dual Route |
| Session-window | **PASS** | `ContractSessionWindowController` GET · middleware cite |
| Auth chrome Live | **PASS** | Dev implement confirmed · migration none |
| DOMAIN-MAP row | **PASS** | `web-rmms-shell` → Notification |
| Incident/Work APIs | **cite** | peer nav only · no invent CRUD |

---

## Must / Should / Soft

| ID | Sev | Note | Action |
|----|-----|------|--------|
| — | Must | none | — |
| GAP-REV-TOKEN-KEYS | soft | multi-key localStorage token probe | keep · compat |
| GAP-REV-LOOKUP-STATIC | soft | LOOKUP_STATIC until OMS keys seeded | debt |
| GAP-QA-STAFF-SESSION | soft | post-login may stay guest (token/session-window) — chrome/form still proven | observe |
| GAP-QA-E2E-PLAYWRIGHT-RESOLVE | soft | junction capture_shell | QA tooling |
| GAP-QA-E2E-WEB-BFF | soft | web-bff restart loop · shell uses Mobile.Bff | out of scope shell |

## review_confirm

- **done** · autoApprove=ON · no fix_gaps
- next: none (pipeline end) · **cấm** start other role in this task (GAP-PKT-ROLE-01)
- e2e: already QA PASS · **cấm** re-run e2e/start:std ở Review

## Version meta

| skillId | skillVersion | schemaVersion |
|---------|--------------|---------------|
| agent-review | 2026.09.05.03 | 1 |
