# QA fix plan — csdl-so-10

> Status: **approved** (autoApprove ON) · **implemented** `task_5b38ddba`  
> Nguồn: `qa/scenarios.md` · STATUS blockers · QA `task_47f0f225` FAIL · screens @ 2026-09-06T02:01Z  
> Phase: `qaFixPhase=implement` · planTask=`task_e3692408` · implementTask=`task_5b38ddba` · qaFailFrom=`task_47f0f225`  
> packKind: **`map`** · resource=`route-strip-maps` · formNo `10` · Step 4b **none** (reuse `csdl-records` · Schema_CsdlSo10 đã có)

## Gaps (từ QA)

| ID | Severity | Repro | Surface |
|----|----------|-------|---------|
| **GAP-QA-COMPILE-01** | **P0** | `yarn typecheck` FAIL · webpack «Compiled with problems» overlay · chặn click create (QA-CH-05) · `devRoutes` `badge: 'MAP'` ∉ `DevRouteBadge` | MFE Asset · `CsdlSo10FormSlideout.tsx` · `dev/devRoutes.ts` · `dev/types.ts` |
| **GAP-QA-SLIDE-FOOTER-01** | **P0** | Slideout prop `footer={JSX}` → TS2559 · peer so-09 dùng `customFooter` · QA-20 timeout `csdl-so-10-form` | `src/pages/CsdlSo10Page/CsdlSo10FormSlideout.tsx` ~L388 |
| **GAP-QA-INPUT-INVALID-01** | **P0** | `Input` / `SearchInput` prop `invalid=` không tồn tại trên SSOT control · nhiều field FormSlideout | `CsdlSo10FormSlideout.tsx` bookNo/contractor/road/km/period/entries |
| **GAP-QA-E2E-PW-01** | P2 | `yarn e2e-qa` hang @ login → chrome capture fallback | AutoCode e2e · **không** block plan product fix |
| **R-QA-01** | **P0** gate | QA verdict **FAIL** · `qa_fail_rollback` → Dev **plan only** | Workflow |

**Live evidence @ plan write (từ QA — không override FAIL):**

| Check | Result |
|-------|--------|
| S0 `/csdl-so-10` | **PASS** · list · filter-bar · empty |
| S1 hub `?resource=route-strip-maps` | **PASS** · redirect route_a |
| QA-20 `?form=create` | **FAIL** · overlay + form không mount |
| API GET `csdl-records?resource=route-strip-maps` | **PASS** · 200 empty |
| `yarn typecheck` | **FAIL** · FormSlideout + badge MAP |

**Đã đóng (Dev `task_7ecb195f` — không re-open trừ re-QA):** Schema_CsdlSo10 · DOMAIN-MAP · ResourceMap/UiSchema seed · list+filter · Kind F OMS scaffold · yarn/dotnet build lúc handoff · PostGIS DEFER GAP-SO10-POSTGIS-02.

## Plan

| # | Việc | Repo | Files | DoD |
|---|------|------|-------|-----|
| 1 | Slideout: `footer=` → **`customFooter=`** (mirror so-09) · giữ `data-form-footer="actions-only"` | UI Asset | `CsdlSo10FormSlideout.tsx` | TS Slideout props OK · create mở form |
| 2 | Validation UI: bỏ `invalid=` trên `Input`/`SearchInput` · dùng `formStyles.fieldInvalid` trên wrapper (peer so-09 `fieldClass`) | UI | `CsdlSo10FormSlideout.tsx` | **0** `invalid=` · banner + highlight vẫn OK |
| 3 | `SearchInput` road: align so-09 (`label`/`primaryDisplay`/`onPick` typing · **cấm** invent prop) | UI | `CsdlSo10FormSlideout.tsx` | typecheck SearchInput PASS |
| 4 | `devRoutes` badge: `'MAP'` → **`LIST`** (hoặc extend `DevRouteBadge` nếu product cần — mặc định **LIST**) | UI | `dev/devRoutes.ts` | badge ∈ union · overlay sạch |
| 5 | Build HARD | UI (+ BE verify) | — | `yarn typecheck` **PASS** · `yarn build` **PASS** · BE `dotnet build` **PASS** (expect **0** BE delta) · **0** webpack overlay |
| 6 | SSOT note § qa-fix trên implement | Docs | `implement/csdl-so-10.md` | checklist GAP-QA-* closed |
| 7 | Re-QA | QA only | `qa/scenarios.md` · screens · `qa-compact.md` | e2eQa ON · S0/S1/QA-20 + map assert · manifest `ok:true` · verdict **PASS** |

**Expected implement delta:** **MFE only** (FormSlideout + devRoutes) · **0** BE/BFF/migration trừ re-QA phát hiện API gap mới.

## Peer reference

| Piece | Peer |
|-------|------|
| Slideout `customFooter` + `fieldInvalid` | `CsdlSo09FormSlideout.tsx` |
| List/map Kind F OMS | prior `implement/csdl-so-10.md` · `/agent-dev-oms-map` R1–R11 |
| E2E capture | `specs/csdl-so-10/qa/screens/_capture*.mjs` · `channel=chrome` · `--skip-start` |
| BE | `api/v1/asset/csdl-records` · DOMAIN-MAP Asset · **cấm ERP.*** |

## Out of scope

- Write MFE/BE **trước** board Approve `qa_fix_plan` (**GAP-DEV-QA-PLAN-01**)
- Role Dev chạy `yarn e2e-qa` / `yarn start:std` (chỉ `/agent-qa*`)
- PostGIS GAP-SO10-POSTGIS-02 · org SearchInput · full GL clip · Auth/XLS
- Đổi `controlHint` / `route_confirm=route_a` / packKind=map
- autoApprove bỏ qua `qa_fix_plan` / `qa_fail_rollback`
- ERP.* · invent GIS CRUD API · Cesium

## Evidence

- Prior FAIL: `qa/scenarios.md` · verdict FAIL · GAP-QA-COMPILE/SLIDE-FOOTER/INPUT-INVALID
- Screens: `qa/screens/{S0,S1,QA-20}.png` · manifest `ok=false` · QA-20 timeout
- mfeStdUrl: `http://localhost:9301/csdl-so-10`
- MFE: `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Asset`
- BE: `D:/AI-QLBD/Linm.RMMS.WebService` · **cấm ERP.***
- Dev prior: `implement/csdl-so-10.md` · `task_7ecb195f`

## Implement result (`task_5b38ddba`)

| # | Gap | Result |
|---|-----|--------|
| 1 | GAP-QA-SLIDE-FOOTER-01 | **closed** · `customFooter` + `isOpen` |
| 2–3 | GAP-QA-INPUT-INVALID-01 | **closed** · 0 `invalid=` · fieldInvalid · SearchInput peer so-09 |
| 4 | GAP-QA-COMPILE-01 badge | **closed** · badge `LIST` |
| 5 | Build | **PASS** · typecheck · yarn build · dotnet RMMS.Service.Api · 0 BE |

## Handoff

| Field | Value |
|-------|-------|
| next | `/agent-qa*` e2eQa ON · S0/S1/QA-20 + map |
| **cấm** | chain Review khi QA còn FAIL · Dev chạy e2e |

## Version meta

| Field | Value |
|-------|-------|
| skillId | agent-dev |
| skillVersion | 2026.08.25.01 |
| schemaVersion | 1 |
| workflowVersion | 2026.09.05.03 |
| rulesVersion | 2026.09.05.8 |
| generatedAt | 2026-09-06T03:15:00.000Z |
| implementedAt | 2026-09-06T04:30:00.000Z |
| versionGate | ok |
| qaFixPhase | implement |
| taskId | task_5b38ddba |
| planTaskId | task_e3692408 |
| qaFailFrom | task_47f0f225 |

---
<!-- Version meta: skillId=agent-dev skillVersion=2026.08.25.01 schemaVersion=1 workflowVersion=2026.09.05.03 rulesVersion=2026.09.05.8 versionGate=ok qaFixPhase=implement taskId=task_5b38ddba -->
