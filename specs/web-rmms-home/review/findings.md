# Review — Findings — web-rmms-home

| Field | Value |
|-------|-------|
| feature | `web-rmms-home` |
| title | Home — guest, quick, lưới 6 ô, wallet |
| this role | `review` · `/agent-review` |
| status | `done` |
| review_confirm | **done** (autoApprove=ON) |
| changeScope | `new_page` |
| packKind | `list` (phone Home ≠ Kind B) |
| contentHash | `sha256:6f74282b807da7f2cc1aa57ac64848cd1d75ff3383c0f432eaad7bea53fff80e` · **unchanged** · hash skip data-analy |
| mfeStdUrl | `http://localhost:9301/web-rmms-home` |
| mfe | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Mobile` |
| backend | `D:/AI-QLBD/Linm.RMMS.WebService` · Mobile.Bff `:5202` · **cấm ERP.*** |
| prior | qa=`confirmed` · compact `handoff/qa-compact.md` · S0/S1/QA-20 PASS · Must 0 |
| skillVersion | `2026.09.05.03` |
| writtenAt | `2026-09-25T19:28:00.000Z` |
| taskId | `task_7526a700` |

## Verdict

**PASS** · Must **0** · P0 **0** · `review_confirm=done` · pipeline complete (roleOnly stop).

## Scope / hash

- changeScope=`new_page` · control-hint + real-data present under `specs/_data-analy/features/`
- contentHash match data_analy→qa → **no** re-scan / hash gate reopen
- DOMAIN-MAP `web-rmms-home` → Notification/`notification` **CLOSED**
- STD-PORT `:9301` **CLOSED** · HOME-VS-SHELL **CLOSED** (Home HM-* · shell TabBar+login)

---

## QUERY

| Check | Result | Evidence |
|-------|--------|----------|
| FormMode↔API map | **PASS** | guest=nav only · staff=`GET auth/profile` + `GET notification/overview` · tiles=nav |
| entity/migration invent | **PASS** | none · cấm Home CRUD / me* |
| ERP.* leak | **PASS** | WebRmmsHome 0 `ERP.` · DOMAIN-MAP cite RMMS Notification only |
| Lookup labels | **PASS** | `useFormOptions('web-rmms-home')` + LOOKUP_STATIC fallback (debt soft) |
| BFF path | **PASS** | mobile-bff `…/api/v1` · profile + overview Live |

## SEC

| Check | Result | Evidence |
|-------|--------|----------|
| Auth gate | **PASS** | staff gated by shell chrome token · guest HM-01/02 no Live GETs |
| Login CTA | **PASS** | `#guestLogin` → shell `setLoginOpen` · **no** credential POST on Home |
| Token storage | **PASS** (soft debt) | shell `chrome.ts` multi-key probe · Home consumes via shell context |
| GPS Home | **PASS** | 0 `geolocation` under WebRmmsHome · copy says GPS only on deep peers |
| Soft profile fallback | **PASS** (debt) | `loadProfileLite` local claims on 401 · GAP-QA-PROFILE-401 observe |
| Guest vs staff | **PASS** | `data-mode` guest/staff · HM zones flip correctly |

## UI-FN

| Check | Result | Evidence |
|-------|--------|----------|
| Zones HM-00…06 | **PASS** | HomePage `data-zone` HM-00..06 · fields guest*/qa*/grid*/wallet*/notify*/profile* |
| Guest FAQ/privacy/login | **PASS** | HM-01/02 · QA S0 Aligned |
| Staff quick + grid×6 | **PASS** | HM-03/04 · supervise·patrol-map·work·incident·asset·offline |
| Wallet + notify badge | **PASS** | HM-05 → `/asset` peer · → `/ops` · Live unreadCount |
| Profile name | **PASS** | HM-06 Text RO · Live profile |
| me* REMOVED | **PASS** | 0 me-profile/me-settings/feedback/cam-view under Home |
| Phone frame | **PASS** | `data-phone-frame=430` |
| Toast / no alert | **PASS** | `dispatchAppToast` on load fail · 0 `alert()` |
| QA visual | **PASS** | S0/S1/QA-20 Aligned · Must 0 (qa-compact) |
| List/Filter/Grid | **WAIVE** | phone Home tiles · no LinErpListFilterBar / DES-GRID |

## BE-FN

| Check | Result | Evidence |
|-------|--------|----------|
| Notification overview | **PASS** | `fetchNotificationOverviewLive` · QA S1 Live 200 |
| Auth profile | **PASS** | `fetchAuthProfile` · QA S1 Live 200 |
| DOMAIN-MAP row | **PASS** | `web-rmms-home` → Notification/`notification` |
| Home controller invent | **PASS** | none · SA+Dev Step 4b skip |
| Incident/Work/Asset APIs | **cite** | peer nav only · aliases → Field/A until dedicated MFE |

---

## Must / Should / Soft

| ID | Sev | Note | Action |
|----|-----|------|--------|
| — | Must | none | — |
| GAP-REV-PEER-ALIAS | soft | asset/offline/supervise/incident.new → peer Field/A | keep · SCREENS until MFE |
| GAP-REV-LOOKUP-STATIC | soft | LOOKUP_STATIC until OMS `web-rmms-home` seeded | debt |
| GAP-QA-PROFILE-401 | soft | profile 401 soft local fallback | observe |
| GAP-QA-E2E-STOCK-PORT | soft | stock e2e port gate · capture workaround | QA tooling |
| GAP-QA-E2E-WEB-BFF | soft | web-bff restart · Home uses Mobile.Bff | out of scope |

## review_confirm

- **done** · autoApprove=ON · no fix_gaps
- next: none (pipeline end) · **cấm** start other role in this task (GAP-PKT-ROLE-01)
- e2e: already QA PASS · **cấm** re-run e2e/start:std ở Review

## VERIFY GATE (`task_7526a700` · roleOnly=review)

| Gate | Result |
|------|--------|
| Artifact `review/findings.md` + STATUS review | **PASS** (this write) |
| yarn build / e2e / start:std | **SKIP** — roleOnly=review · **cấm** |
| Step 4b / migration | **N/A** |
| Prior Dev VERIFY | **PASS** · `task_14fa52d5` |
| Prior QA e2e | **PASS** · S0/S1/QA-20 · `task_a2f83080` |

## Version meta

| skillId | skillVersion | schemaVersion |
|---------|--------------|---------------|
| agent-review | 2026.09.05.03 | 1 |
