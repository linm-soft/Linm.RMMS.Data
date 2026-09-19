# Review — Findings — nghiem-thu (mobile)

> Status: **done** · Mode: `review_only` · `review_confirm=accept` (autoApprove ON)  
> reviewHash: `sha256:eba0d0dff9aa50f3b0202a5d6a1b7dabd8d36943f75828b988431a3bc4be0b67` · skillVersion: `2026.08.31.2`  
> task: `task_600866a7` · prior contentHash: `sha256:a635f3f55a8bedd952c4449056cf072a8eda890eda2b30a45e84bda5d7bf3859`  
> lane: **mobile** · slash `/agent-review-mobile` · **cấm** e2e/start:std/build this role

| | |
|--|--|
| Feature | `nghiem-thu` |
| Title | Công tác nghiệm thu — native list `#sc-nghiem-thu` dual |
| Role | `review` · `/agent-review-mobile` |
| Surfaces | list iOS + Android · BFF proxy · QA store |
| peerStdUrl | `http://localhost:9304/patrol` (web ref only) |
| Evidence | QA CAPTURE + align-ux + static dual code · **không** re-run e2e |

## Scope

| Surface | Repo / path |
|---------|-------------|
| iOS list | `Linm.RMMS.Mobile.iOS` · `Presentation/Features/NghiemThu/*` · `Data/{Dto,Repositories}/NghiemThu*` |
| Android list | `Linm.RMMS.Mobile.Android` · `…/feature/nghiemthu/*` · `NghiemThuDto*` |
| BFF/BE | Mobile.Bff catch-all · Patrol `api/v1/patrol/nghiem-thu` · **cấm ERP.*** · Step 4b SKIP |
| QA evidence | `qa/store/nghiem-thu/{CAPTURE,manifest}` · A3/P6 Aligned · Must 0 |
| Prior web review | KEEP debt REV-S-01 / REV-QA-01 / REV-UI-02 (web) — không reopen mobile |

## Hash gate

| Field | Value |
|-------|-------|
| prior REVIEW-META | web `reviewHash=4472b6…` · contentHashPrior `41b143…` · **SKIP không áp dụng** |
| mobile contentHash | `sha256:a635f3f55a8bedd952c4449056cf072a8eda890eda2b30a45e84bda5d7bf3859` |
| action | **RUN** mobile review (hash/lane lệch) |

## Findings

| ID | Class | Sev | Where | Repro | Fix hint |
|----|-------|-----|-------|-------|----------|
| REV-MOB-DEBT-01 | product | P3 | create/detail | Tạo / row → toast sibling pending_confirm | Approve siblings `nghiem-thu-create` / `nghiem-thu-detail` · **cấm** start trước Approve |
| REV-S-01 | security | P2 | BE `NghiemThuController` | `[RequirePermission]` stub (web KEEP) | Enable when CommonLib ≥1.4.0 · **không** fix_gaps mobile |

**P0 / Must align / GAP-MOB-ALIGN-* / GAP-MOB-REAL-02 / GAP-QA-REAL-01:** none open.

## Security (mobile)

| Check | Result | Evidence |
|-------|--------|----------|
| Keychain JWT | PASS | `KeychainTokenStore` · **cấm** UserDefaults token |
| `X-Company-Id` | PASS | `ApiClient` + `CompanyContextStore` |
| IDOR `{id}` | N/A list | list không get-by-id · detail OUT sibling |
| alert / plaintext token | PASS | toast only · **0** UIAlert in feature |
| Forked API / ERP.* | PASS | `patrol/nghiem-thu` + init-data only |
| PrivacyInfo.xcprivacy | PASS | present · location/photos AppFunctionality |
| Location/camera copy | N/A list P1 | OUT list · siblings later |

Verdict: **PASS** · P2 web Auth debt KEEP.

## DTO / type parity

| Field | iOS | Android | Web list | Verdict |
|-------|-----|---------|----------|---------|
| id/code/status/templateType/route/zoneOrgCode | String | String | same | PASS |
| kmFrom | Decimal→string | Double→string | decimal | PASS (display) |
| mediaIds count | Int | Int | guid[] | PASS |
| init statuses/templates | value+label | value+label | init-data | PASS |
| statusLabel via init | UseCase map | UseCase map | badge VN | PASS · **0** GAP-TYP-01 |
| tabs | none | none | — | PASS · **0** GAP-TAB-01 |

## Real data

| Gate | Result |
|------|--------|
| GAP-MOB-REAL-02 | **closed** — list live BFF · **0** `demoItems` nguồn màn · EmptyChrome OK (0 row) |
| GAP-QA-REAL-01 | **closed** — A10-BFF PASS · `:5202` · T-QA-REAL-01 |
| closedFallback | init label only when init fail · **không** fake list rows |

## UI align / demo-parity

| Gate | Result | Evidence |
|------|--------|----------|
| demo-parity Must | 0 open | `ui/review/demo-parity.md` |
| align-ux | **Aligned** · Must 0 | `ui/review/align-ux.md` · A3/P6/P6-2 |
| QA visual | PASS | CAPTURE · manifest `ok:true` · `visualAlign=Aligned` |
| GAP-MOB-E2E-VIS-01 | N/A | QA có visual Aligned (không CLI-only) |
| GAP-MOB-ACT-03 | N/A | create/detail intentional pending_confirm · toast · siblings **not** started (GAP-MOB-ACT-06) |
| e2e crawl this role | **SKIP** | packet VERIFY · **cấm** e2e · evidence QA đã có |

## Confirm

`review_confirm` = **accept** (autoApprove ON) · **không** `fix_gaps` · P2/P3 debt KEEP.

## Handoff

| Gap | Task hint |
|-----|-----------|
| — | none blocking · chain roleOnly=review → mark completed |
| siblings | stay `pending_confirm` until board Approve |

## Version meta (REQUIRED)

| Field | Value |
|-------|-------|
| skillId | agent-review-mobile |
| skillVersion | 2026.08.31.2 |
| schemaVersion | 1 |
| workflowVersion | qldb-mobile-list |
| rulesVersion | 2026.08.31.2 |
| reviewHash | sha256:eba0d0dff9aa50f3b0202a5d6a1b7dabd8d36943f75828b988431a3bc4be0b67 |
| contentHashPrior | sha256:a635f3f55a8bedd952c4449056cf072a8eda890eda2b30a45e84bda5d7bf3859 |
| generatedAt | 2026-09-19T16:31:17.000Z |
| versionGate | ok |
| review_confirm | accept |
| lane | mobile |
