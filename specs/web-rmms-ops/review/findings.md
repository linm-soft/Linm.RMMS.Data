# Review — Findings — web-rmms-ops

> Status: **confirmed** · `review_confirm=approve` · autoApprove=ON · task `task_ec7dfc02`  
> skillVersion: `2026.09.05.03` · contentHash: `sha256:6f74282b807da7f2cc1aa57ac64848cd1d75ff3383c0f432eaad7bea53fff80e`  
> writtenAt: `2026-09-25T13:10:00.000Z`

| | |
|--|--|
| Feature | `web-rmms-ops` |
| Title | Thông báo inbox |
| Role | `review` · `/agent-review` |
| packKind | `list` (phone inbox · Kind B WAIVE) |
| changeScope | `new_page` |
| mfeStdRoute | `/web-rmms-ops` |
| mfeStdUrl | `http://localhost:9301/web-rmms-ops` |
| be | Notification · Mobile.Bff `:5202` · **cấm ERP.*** |
| prior QA | `confirmed` · S0/S1/QA-20 Aligned · Must 0 |
| verdict | **PASS** · Must **0** · Should **0** · soft debt only |

## Gates (hash unchanged → skip re-crawl)

| Gate | Result | Notes |
|------|--------|-------|
| contentHash | **match** | same `6f74282b…` across data_analy→qa compact |
| QUERY | **PASS** | GET inbox `page=1&pageSize=50` · POST `{id}/mark-read` · no invent query · **no ERP.*** |
| SEC | **PASS** | FE guestGate `hasAccessToken` · BFF forwards Auth/X-Company-Id · Guid route · React text escape · no XSS sinks |
| UI-FN | **PASS** | OP-00…06 · chrome/back/refresh · unread→mark-read only · no detail P1 · no filter · `useFormOptions` |
| BE-FN | **PASS** | DOMAIN-MAP `web-rmms-ops`→Notification · `mobile-bff`+`web-bff` inbox proxy · no new entity/migration |
| QA evidence | **PASS** | S0 guest · S1 Live rows · QA-20 SH-02 · Aligned |

## QUERY

| ID | Sev | Finding | Verdict |
|----|-----|---------|---------|
| Q-01 | — | FormMode↔API: list=`GET …/notification/inbox` · unread tap=`POST …/mark-read` · badge=peer Home overview | **OK** |
| Q-02 | — | FE `notificationInboxEndpoint` relative to `mobile-bff/api/v1` · pageSize default 50 | **OK** |
| Q-03 | — | **cấm ERP.*** — FE WebRmmsOps + endpoint: 0 matches | **OK** |
| Q-04 | soft | API GET list `[AllowAnonymous]` (Home bell SSOT) · FE still gates guest before Live | **OK** (by-design) |

## SEC

| ID | Sev | Finding | Verdict |
|----|-----|---------|---------|
| S-01 | — | Guest: no Live call · `#opsGuestGate` · QA S0 PASS | **OK** |
| S-02 | — | BFF proxy-only · forwards Authorization · Guid `{id}` mark-read | **OK** |
| S-03 | — | Row title/meta as React children (escaped) · no `dangerouslySetInnerHTML` | **OK** |
| S-04 | soft | API `RequirePermission` TODOs (Auth stub CommonLib) — pre-existing · not introduced by this page | **debt** · non-blocking |

## UI-FN

| ID | Sev | Finding | Verdict |
|----|-----|---------|---------|
| U-01 | — | Zones OP-00…06 · `#opsBack`/`#opsTitle`/`#opsRefresh` · list OP-02 · row OP-03/04 · markRead OP-05 | **OK** |
| U-02 | — | Unread tap = mark-read only · read rows disabled · **no** detail P1 | **OK** |
| U-03 | — | Labels via `useFormOptions('web-rmms-ops')` + LOOKUP_STATIC fallback | **OK** |
| U-04 | — | DES-GRID / LinErpListFilterBar / filter UI: N/A WAIVE (phone inbox) | **OK** |
| U-05 | soft | LOOKUP_STATIC until OMS seed · `OpsTabPage.tsx` leftover unused | **debt** |

## BE-FN

| ID | Sev | Finding | Verdict |
|----|-----|---------|---------|
| B-01 | — | DOMAIN-MAP row `web-rmms-ops` → Notification/`notification` CLOSED | **OK** |
| B-02 | — | inbox on `NotificationInboxMobileController` · web controller stays `web-bff` | **OK** |
| B-03 | — | API Mới / entity / migration / Ops controller: **none** (SA) | **OK** |
| B-04 | — | mark-read Live path wired · QA T-QA-CRUD-01 PASS | **OK** |

## Must / Should / Soft

| Class | Count | Items |
|-------|-------|-------|
| Must | **0** | — |
| Should | **0** | — |
| Soft | 4 | S-04 Auth stub TODO · U-05 LOOKUP_STATIC + OpsTab leftover · Q-04 AllowAnonymous by-design · QA stock e2e port-gate (prior) |

## review_confirm

- **decision:** `approve`
- **autoApprove:** ON → confirmed without board wait
- **fix_gaps:** none (Must 0)
- **next:** pipeline complete for implement chain · **cấm** phase=done override here if product keeps review as last code gate · e2e already QA PASS · no re-run e2e at Review
- **roleOnly stop:** GAP-PKT-ROLE-01

## Debt (carry · non-blocking)

- LOOKUP_STATIC until OMS seed `web-rmms-ops`
- Shell `OpsTabPage.tsx` leftover (route Navigate; file unused)
- Detail / filter UI = P2
- stock `yarn e2e-qa` port 5101/5201 soft (QA workaround `_capture_ops.mjs`)

## Full paths

- compact: `D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-ops/handoff/review-compact.md`
- implement: `D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-ops/implement/web-rmms-ops.md`
- qa: `D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-ops/qa/scenarios.md`
- STATUS: `D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-ops/STATUS.md`
