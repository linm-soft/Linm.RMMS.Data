# Review findings — estimate (mobile sheet → screen)

> Status: **done**  
> Mode: `review_only` (autopilot · roleOnly=`review` · `/agent-review-mobile`)  
> reviewHash: `sha256:est-mob-rev-20260901-task0d408356` · rulesVersion: `2026.08.29.5`

| Field | Value |
|-------|-------|
| feature | `estimate` |
| this role | `review` · `/agent-review-mobile` |
| status | **done** · **approve** |
| review_confirm | **approve** (autoApprove=ON · `task_0d408356`) |
| taskId | `task_0d408356` |
| autoApprove | ON → agent tự confirm gate |
| packKind | **`sheet`** · surface screen `#sc-estimate` · `DES-MOB-EST` · ≠ web `list` Kind B+D |
| changeScope | `edit_page` |
| prior · qa | **`confirmed`/`PASS`** · e2e ok:true · MAESTRO-AND PASS · visual Aligned · Must 0 · `task_992add79` · `handoff/qa-compact.md` |
| prior · dev | **done** · VERIFY GATE PASS · qa-fix implement · `task_8ab3d7ec` · `handoff/dev-compact.md` |
| prior · tl/sa/design/po/da | **confirmed** (compact missing → full SSOT cited) |
| priorWeb | **giữ** · `review/findings-web.md` · `REVIEW-META-web.json` · closed `task_f699faf1` |
| ios | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.iOS` |
| android | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.Android` |
| bff | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.Bff` · catch-all · **cấm** EstimateController local |
| backend | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.WebService` · `ai-vision/estimates` · `maintenance/work-orders` · `incident/…/assign` · **cấm ERP.*** |
| mfeStdUrl | — · **cấm** |
| reviewedAt | `2026-09-01T09:26:00.000Z` |
| method | compact prior + store CAPTURE/manifest + live Estimate VM/repo spot-check · **cấm** yarn e2e/build/start:std |
| skillVersion | `2026.08.25.01` |
| schemaVersion | `2` |
| workflowVersion | `2026.08.29.1` |
| rulesVersion | `2026.08.29.5` |
| versionGate | `rechecked` |

## Scope

| Surface | Repo / path |
|---------|-------------|
| Screen `#sc-estimate` | iOS `EstimateView` · Android `EstimateScreen` |
| Entry | mnt-list hub/card + incident CTA → push (route_a) |
| APIs | seed/from-incident · PUT lines · draft · POST WO `repair` · assign |
| QA evidence | `qa/store/estimate/` · A3-CORE · P6-CORE · P6-CORE-2 · manifest ok:true |

## Verdict

**APPROVE** · `review_confirm=approve` · mobile pipeline **closed** (role Review).

P0 open: **0**. Align Must: **0**. QA gate PASS. Prior web review **giữ** (OUT mobile P1).

## Checks

| # | Check | Evidence | Verdict |
|---|-------|----------|---------|
| 1 | QA e2e + Maestro | `qa-compact` · manifest ok:true · A11→P6 PASS | **PASS** |
| 2 | Visual align CORE vs demo | QA Aligned · demo `row no-icon` · GAP-MOB-UX-COMP-03 closed · PNG Read store blocked this host → cite QA | **PASS** |
| 3 | demo-parity Must | `ui/review/demo-parity.md` OK · no open bugs/ | **PASS** |
| 4 | Pack / zones | sheet→screen · DES-MOB-EST · tabs none · tab work | **PASS** |
| 5 | API paths · no ERP.* · no invent | EstimateRepository `ai-vision/estimates/*` · WO · assign | **PASS** |
| 6 | Dual DTO / Lines[0] | iOS+Android UpdateEstimate lines map | **PASS** |
| 7 | Security session | shared Session / Encrypted prefs · Bearer via ApiClient · no plaintext token in Estimate* | **PASS** |
| 8 | No system alert | no UIAlert / AlertDialog in Estimate* · LinmToast | **PASS** |
| 9 | Real data | seed API primary · `applyDemoFallbackRows` only on seed fail/empty (PO DoD) · A10-BFF PASS | **PASS** · GAP-MOB-REAL-02 **closed** · GAP-QA-REAL-01 **closed** |
| 10 | Store submit | PrivacyInfo / Play · A4-IPAD DEFER · HTTPS landing N/A pack | **PASS** / defer noted |
| 11 | Crawl / ACT-03 | role **cấm** e2e · QA Maestro slug estimate only · no open GAP-MOB-ACT-03 / sibling enqueue | **PASS** (cite QA) |
| 12 | VERIFY prior Dev | iOS xcodebuild · Android assembleDebug · BFF dotnet **PASS** | **PASS** |
| 13 | Step 4b / migration | N/A Signed · **không** chạy ở Review | **n/a** |

## Findings

| ID | Class | Sev | Status | Note |
|----|-------|-----|--------|------|
| R-QA-01 | process | P0 | **closed** | re-QA `task_992add79` PASS |
| GAP-QA-E2E-AND-01 | e2e | P0 | **closed** | MAESTRO-AND PASS |
| GAP-QA-STORE-03 | e2e | P0 | **closed** | manifest.ok=true |
| GAP-QA-P6-DUP-01 | e2e | — | **closed** | CORE ≠ CORE-2 |
| GAP-MOB-UX-COMP-03 | align | Must | **closed** | Aligned · Must 0 |
| GAP-MOB-REAL-02 | data | — | **closed** | demo fallback ≠ sole source |
| GAP-QA-REAL-01 | data | — | **closed** | A10-BFF PASS |
| GAP-MOB-EST-* (NAV/SIMP/ASSIGNEE/WO/SLA/PACK) | product | — | **closed** | **cấm** reopen |
| R-WEB-* | web | — | **giữ** | `findings-web.md` |

**P0 open:** 0. **Must align open:** 0.

## Security (mobile)

- Token: Keychain / EncryptedSharedPreferences via shared session — Estimate feature không ghi secret.
- Tenant: `X-Company-Id` / Bearer trên ApiClient path — không fork URL `:5101`.
- IDOR: estimate/{id} + incident/{id} qua authenticated BFF proxy — không lộ id ngoài session.
- Camera/GPS: **n/a** pack.
- **cấm ERP.*** — verified paths AiVision + Maintenance + Incident only.

## UI / BE function

- Primary Giao việc → WO `WorkType=repair` · Status=`new` · SLA 24h · DueAt UTC · toast real Code.
- Secondary Lưu nháp → draft endpoint · **cấm** fake 200.
- Missing incidentId → banner + chặn Giao việc.
- Assignee required · free text P1.

## Query / debt accept

| ID | Sev | Decision |
|----|-----|----------|
| A4-IPAD | — | **DEFER** Phase 1 (QA) |
| Offline draft queue | P2 | **DEFER** (SA) |
| Staff lookup API | P2 | **DEFER** P1 free text |

## Align confirm

`align_confirm=approve` (autoApprove=ON) · Must 0 · demo-parity OK · QA visual Aligned.

## review_confirm

**approve** · autoApprove=ON · `task_0d408356` · `2026-09-01T09:26:00.000Z`.

## Counts

| Metric | Value |
|--------|-------|
| findings total | 9 tracked (all closed/defer) |
| P0 open | 0 |
| Must align open | 0 |
| review_confirm | approve |

## Version meta

| Field | Value |
|-------|-------|
| skillId | agent-review-mobile |
| skillVersion | 2026.08.25.01 |
| schemaVersion | 2 |
| workflowVersion | 2026.08.29.1 |
| rulesVersion | 2026.08.29.5 |
| generatedAt | 2026-09-01T09:26:00.000Z |
| versionGate | rechecked |
| taskId | task_0d408356 |

---
<!-- Version meta: skillVersion=2026.08.25.01 · schemaVersion=2 · workflowVersion=2026.08.29.1 · versionGate=rechecked · skillId=agent-review-mobile · taskId=task_0d408356 -->
