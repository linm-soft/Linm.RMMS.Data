# Review — Findings — nghiem-thu (mobile)

> Status: **done** · Mode: `review_only` · `review_confirm=accept` (autoApprove ON)  
> reviewHash: `sha256:ce24777c87b1c352e86b2db3ffb3fadd30dae294493d91133a6c87808021c128` · skillVersion: `2026.08.31.2`  
> task: `task_b7626142` · contentHash: `sha256:1044ba719edda88d256d5c2a780cd2293f2fab87e2a39acdbb86001fad6ff659`  
> lane: **mobile** · slash `/agent-review-mobile` · **cấm** e2e/start:std/build this role

| | |
|--|--|
| Feature | `nghiem-thu` |
| Title | Công tác nghiệm thu — native list `#sc-nghiem-thu` · MAU-10 + ResultCode |
| Role | `review` · `/agent-review-mobile` |
| Surfaces | list iOS + Android · BFF proxy · QA store CORE |
| peerStdUrl | `http://localhost:9304/patrol` (web ref only) |
| Evidence | QA CAPTURE + vision A3/P6/P6-2 + static dual · **không** re-run e2e |

## Scope

| Surface | Repo / path |
|---------|-------------|
| iOS list | `Linm.RMMS.Mobile.iOS` · `Presentation/Features/NghiemThu/*` · `Data/Dto/NghiemThuDto.swift` |
| Android list | `Linm.RMMS.Mobile.Android` · `…/feature/nghiemthu/*` · `NghiemThuDto.kt` |
| BFF/BE | Mobile.Bff catch-all · `patrol/nghiem-thu` · **cấm ERP.*** · Step 4b SKIP this role |
| QA evidence | `qa/store/nghiem-thu/{CAPTURE,manifest}` · A3/P6 Aligned · Must 0 |
| Prior web review | KEEP debt REV-S-01 (web) — không reopen mobile |

## Hash gate

| Field | Value |
|-------|-------|
| prior REVIEW-META | task `task_600866a7` · contentHashPrior `a635f3…` · reviewHash `eba0d0…` |
| this contentHash | `sha256:1044ba719edda88d256d5c2a780cd2293f2fab87e2a39acdbb86001fad6ff659` |
| action | **RUN** — hash lệch (MAU-10 + Result overlay) |

## Findings

| ID | Class | Sev | Where | Repro | Fix hint |
|----|-------|-----|-------|-------|----------|
| REV-MOB-DEBT-01 | product | P3 | create/detail | Tạo / row → toast sibling pending_confirm | Approve siblings · **cấm** start trước Approve (GAP-MOB-ACT-06) |
| REV-S-01 | security | P2 | BE `NghiemThuController` | `[RequirePermission]` stub (web KEEP) | Enable when CommonLib ≥1.4.0 · **không** fix_gaps mobile |

**P0 / Must align / GAP-MOB-ALIGN-* / GAP-MOB-REAL-02 / GAP-QA-REAL-01 / GAP-TYP-01 / GAP-TAB-01:** none open.

## Security (mobile)

| Check | Result | Evidence |
|-------|--------|----------|
| Keychain JWT | PASS | `KeychainTokenStore` · **cấm** UserDefaults token |
| `X-Company-Id` | PASS | `ApiClient` + `CompanyContextStore` |
| IDOR `{id}` | N/A list | list không get-by-id · detail OUT sibling |
| alert / plaintext token | PASS | toast only · **0** UIAlert in feature |
| Forked API / ERP.* | PASS | iOS+Android `patrol/nghiem-thu` + init-data |
| PrivacyInfo.xcprivacy | PASS | present |
| Location/camera copy | N/A list P1 | OUT list · siblings later |
| Store A4 / GAP-SUBMIT-IMG-08 | N/A | A4-IPAD DEFER · không listing role này |

Verdict: **PASS** · P2 web Auth debt KEEP.

## DTO / type parity

| Field | iOS | Android | Verdict |
|-------|-----|---------|---------|
| templateLabel | String? · init overlay | String? · init overlay | PASS · MAU-10 · **cấm** «Mẫu nghiệm thu NN» |
| resultCode / resultLabel | String · empty → badge nil | String · blank → badge nil | PASS · null ẩn |
| resultCodes init | value+label | value+label | PASS |
| kmFrom | Decimal→string | Double→string | PASS (display) |
| scores[] | OUT list | OUT list | PASS |
| tabs | none | none | PASS · **0** GAP-TAB-01 |

## Real data

| Gate | Result |
|------|--------|
| GAP-MOB-REAL-02 | **closed** — list live BFF · **0** `demoItems` · EmptyChrome OK (0 row) |
| GAP-QA-REAL-01 | **closed** — A10-BFF PASS · `:5202` · T-QA-REAL-01 |
| closedFallback | init label only when init fail · **không** fake list rows |

## UI align / demo-parity

| Gate | Result | Evidence |
|------|--------|----------|
| demo-parity Must | 0 open | `ui/review/demo-parity.md` · contentHash match |
| align-ux | **Aligned** · Must 0 | vision A3/P6/P6-2 vs `#sc-nghiem-thu` empty |
| QA visual | PASS | CAPTURE · manifest `ok:true` · `visualAlign=Aligned` |
| A3 | Title · Back Tuần đường · Tạo · search · EmptyChrome | Aligned |
| P6 | Title · back icon · Tạo · search · EmptyChrome | Aligned |
| P6-2 | search `NT` · IME fold | Aligned · Result badge ẩn vì 0 dòng |
| qa/bugs | none | **0** OPEN |
| GAP-MOB-E2E-VIS-01 | N/A | vision Read CORE · không CLI-only |
| GAP-MOB-ACT-03 | N/A | create/detail intentional pending_confirm · siblings **not** started |
| e2e crawl this role | **SKIP** | packet VERIFY · **cấm** e2e · evidence QA đã có |

## Confirm

`review_confirm` = **accept** (autoApprove ON) · **không** `fix_gaps` · P2/P3 debt KEEP.

## Handoff

| Gap | Task hint |
|-----|-----------|
| — | none blocking · roleOnly=review → mark `task_b7626142` completed |
| siblings | stay `pending_confirm` until board Approve |

## Version meta (REQUIRED)

| Field | Value |
|-------|-------|
| skillId | agent-review-mobile |
| skillVersion | 2026.08.31.2 |
| schemaVersion | 1 |
| workflowVersion | qldb-mobile-list |
| rulesVersion | 2026.08.31.2 |
| reviewHash | sha256:ce24777c87b1c352e86b2db3ffb3fadd30dae294493d91133a6c87808021c128 |
| contentHashPrior | sha256:1044ba719edda88d256d5c2a780cd2293f2fab87e2a39acdbb86001fad6ff659 |
| generatedAt | 2026-09-19T18:45:50.000Z |
| versionGate | ok |
| review_confirm | accept |
| lane | mobile |
