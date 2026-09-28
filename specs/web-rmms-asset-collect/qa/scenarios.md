# QA — scenarios — web-rmms-asset-collect

| Field | Value |
|-------|-------|
| feature | `web-rmms-asset-collect` |
| this role | `qa` · `/agent-qa` |
| status | `done` |
| changeScope | `edit_page` |
| packKind | `list` (phone form · DES-GRID / filter **WAIVE**) |
| mfeStdUrl | `http://localhost:9301/tai-san/thu-thap` |
| mfeStdRoute | `/tai-san/thu-thap` · alias `/asset/collect` |
| backend | `D:/AI-QLBD/Linm.RMMS.WebService` · Mobile.Bff `:5202` · API `:5111` |
| taskId | `task_7609b588` |
| prior Dev | implement **confirmed** · handoff `handoff/dev-compact.md` |
| autoApprove | ON |
| e2eQa | ON · runtime |
| method | `e2e runtime · yarn start:std :9301 (existing · no kill) + docker compose up -d + capture_acollect` · cases `S0,S1,QA-20` · MFE `/login` JWT · viewport **430** · geo grant · Pattern B asserts |
| updatedAt | `2026-09-27T09:38:00.000Z` |
| skillVersion | `2026.09.05.03` |
| contentHash | `sha256:bf61e3677d8c0ff81bfccd4e08df8f452a069408ae43f3d025dde73959990a79` |

## Smoke — Final MFE (REQUIRED · e2e)

| # | Step | Expect | Result | Evidence |
|---|------|--------|--------|----------|
| S0 | Cán bộ mở form Thu thập thủ công | AC-00…10 · SearchInput route · Pattern B CTA · GPS RO · photos local · Live types · **0** crash | **PASS** | ![S0](screens/S0.png) |
| S1 | Peer Hub · entry Thêm thủ công | Hub `/tai-san` · `#tileCollect` · wallet Live | **PASS** | ![S1](screens/S1.png) |
| QA-20 | Click tileCollect → Collect (JWT kept) | Cùng surface form · fldName · **0** login bounce | **PASS** | ![QA-20](screens/QA-20.png) |

## Scenario / Expect / Actual (visual Read · dump)

| Case | Expect (design/PO · edit_page) | Actual (PNG/dump) | Verdict |
|------|-------------------------------|-------------------|---------|
| S0 | AC-* · SearchInput no seed · Lưu `disabled={saving}` only · GPS RO · photos local | «Thêm tài sản thủ công» · Search «Gõ để tìm tuyến…» · GPS `21.028500 · 105.854200` · Lưu enabled · Live types · `searchInput=true` · `submitDisabled=false` · AC-00…10 | **Aligned** |
| S1 | Peer Hub `#tileCollect` | «Tài sản» · «Thêm thủ công» · AH-* · 45 loại · SHA ≠ S0 | **Aligned** |
| QA-20 | Hub CTA → Collect | Form after click · `/m/tai-san/thu-thap` · JWT kept · hash=S0 | **Aligned** |

## T-QA-*

| id | Scope | Result |
|----|-------|--------|
| T-QA-FORM-01 | AC-02…06 required · Live lookups · Pattern B | **PASS** (S0 · types Live · CTA not locked) |
| T-QA-ROUTE-01 | SearchInput ROAD_ROUTE_LOOKUP · no seed | **PASS** (S0 · magnifier · placeholder tìm tuyến) |
| T-QA-GPS-01 | GPS RO · geolocation · deny-on-submit | **PASS** (coords shown · grant context · RO copy) |
| T-QA-PHOTO-01 | local PhotoRow GAP · no invent media | **PASS** (local capture slot only) |
| T-QA-LEAVE-01 | LeaveConfirmModal · cấm native confirm | **WAIVE** smoke (DES-LEAVE Dev · not clicked S0) |
| T-QA-POST-01 | POST road-assets Source=manual | **WAIVE** smoke (no destructive create in S0/S1/QA-20) |
| T-QA-FILTER-01/02 | LinErpListFilterBar | **WAIVE** (phone form · DES-GRID N/A) |
| T-QA-VI-ENC-01 | Title/nav UTF-8 | **PASS** |
| T-QA-NAV-01 | Hub `#tileCollect` → Collect | **PASS** (QA-20) |

## E2E runtime gate

| Check | Result |
|-------|--------|
| docker compose up -d | **PASS** · postgres/api healthy · bff `:5201` · Mobile.Bff `:5202` · api `:5111` |
| yarn start:std | **PASS** · `:9301` (existing worker · **cấm** kill · GAP-QA-E2E-KILL-01) |
| yarn e2e-qa stock | **FAIL soft** · S1 `GAP-QA-E2E-DUP-01` (stock không nav Hub) · **worked around** `_capture_acollect.mjs` |
| PNG evidence | S0/S1/QA-20 present · S1 SHA ≠ S0 · form loaded · **0** blank/crash |
| visual Read | **Aligned** · Must **0** |
| Pattern B dump | `searchInput=true` · `submitDisabled=false` |
| **cấm** phase=done | yes · next Review |

## Gaps / debt (không P0)

| ID | Severity | Note |
|----|----------|------|
| GAP-QA-E2E-STOCK-DUP | soft | stock CLI S1 DUP vs collect URL · capture nav Hub PASS |
| GAP-MOB-ASSET-COLLECT-MEDIA-01 | accepted | photos local only · no invent media path |
| LOOKUP_WALLET_DASH | soft | Hub wallet shows `— — —` transient · 45 loại still Live |
| UNCLEAR-MEDIA-01 | accepted | carry prior Review |

**P0:** none — handoff Review.

## Handoff → Review

1. `review/findings.md` · roles sau = **pending**.
2. `autoApprove=ON` → Review tự confirm khi tới lượt.
3. STATUS `qa` = **done** · `phase=review` · **cấm** `phase=done`.

## Version meta

| skillId | skillVersion | schemaVersion |
|---------|--------------|---------------|
| agent-qa | 2026.09.05.03 | 1 |
