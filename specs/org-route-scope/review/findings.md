# Review findings — org-route-scope

> Status: **done**  
> Mode: `review_only` (autopilot · autoApprove ON · không AskQuestion)  
> reviewHash: `sha256:81b3c9a520472625cc78375571d1d94ae34a6badc62a7a7bf21f0a2eac7894dc` · rulesVersion: `2026.08.29.32`

| Field | Value |
|-------|-------|
| feature | `org-route-scope` |
| title | Phân khu lý trình (zone km) |
| this role | `review` · `/agent-review` |
| review_confirm | **approve** (autoApprove ON · `task_badbc48d`) |
| packKind | `master` · Kind **B** · Slideout `data-form-cols="2"` |
| taskId | `task_badbc48d` |
| prior QA | `task_8148ad6d` · `qa/scenarios.md` **PASS** · S0/S1/QA-20 |
| prior Dev | `task_966e1ff3` · `implement/org-route-scope.md` **confirmed** |
| mfeStdUrl | `http://localhost:9318/mas/phan-khu` |
| mfeStdRoute | `/mas/phan-khu` (`route_confirm=route_a`) |
| backend | `D:/AI-QLBD/Linm.RMMS.WebService` · `api/v1/integration/org-route-scopes` |
| autoApprove | ON |
| e2eQa | ON (đã chạy ở QA · **cấm** e2e/start:std ở role Review) |
| contentHash | `sha256:81b3c9a520472625cc78375571d1d94ae34a6badc62a7a7bf21f0a2eac7894dc` |
| skillVersion | `2026.08.29.04` |
| schemaVersion | `1` |
| workflowVersion | `2026.08.29.04` |
| rulesVersion | `2026.08.29.32` |
| versionGate | `rechecked` |
| updatedAt | `2026-08-30T12:30:00.000Z` |

## Scope

| Surface | Repo / path |
|---------|-------------|
| List | `Linm.Web.RMMS.Master` · `OrgRouteScopeListPage` · `/mas/phan-khu` |
| Form | `OrgRouteScopeFormModal` Slideout C/E/V/Copy · nested tab Đoạn |
| Form routes | `OrgRouteScopeFormPage` redirect → `?form=` trên list |
| API | `OrgRouteScopesController` · Integration · API-01…10 |
| Service | `OrgRouteScopeService` · overlap 422 · exclude KM* · 0 invent-seed |
| BFF | `OrgRouteScopesBffController` · proxy-only · Auth + `X-Company-Id` |
| Prototype | `specs/org-route-scope/ui/prototype/org-route-scope-list-prototype.html` |
| QA evidence | `qa/screens/{S0,S1,QA-20}.png` · manifest `ok:true` |

## Live / PNG re-audit (không start:std)

| Check | Evidence | Result |
|-------|----------|--------|
| Kind B shell visible · title + toolbar + filter + zone tabs + empty | S0.png · SHA16 `542c147d…` | **PASS** — **0** REV-UI-LAYOUT-06 |
| ZONE tab filter `?zoneOrgCode=` · empty filtered copy | S1.png · SHA16 `59516b0b…` | **PASS** |
| Create Slideout · title VN · ✕ · footer Hủy/Lưu · tabs Gán zone/Đoạn | QA-20.png · SHA16 `f53f4c80…` | **PASS** — **0** REV-UI-HDR-01 / SLIDE-01 |
| Empty VN · **0** invent-seed chrome | S0 | **PASS** (GAP-ORS-01) |
| PNG hashes match `qa/screens/manifest.json` | SHA256_16 distinct | **PASS** |

## Code SSOT re-audit

| Check | Result |
|-------|--------|
| 1× `LinPageLayout` kind=`catalog` · **0** nested `CatalogListShell` | **PASS** |
| `LinCatalogDataGrid` + `LinCatalogListPagination` · **0** footerPagination / raw `<table>` | **PASS** |
| `LinErpListFilterBar` · **0** `ErpListHeaderFilters` | **PASS** |
| `LinCatalogUiSchemaEditorModal` · **0** `configHint` | **PASS** |
| Slideout `data-form-cols="2"` · View `readOnly` · footer sticky customFooter | **PASS** |
| MODE_TITLE VN `Tạo mới/Sửa/Xem/Sao chép` · **0** `CREATE`/`EDIT` chrome | **PASS** |
| `LeaveConfirmModal` · soft-delete `Modal` · **0** `window.alert/confirm/prompt` | **PASS** |
| SearchInput zone/route/assignee · init-data labels · exclude KM* route | **PASS** |
| FE BASE `/integration/org-route-scopes` · **0** ERP.* · **0** `/rmms/` | **PASS** |
| BFF proxy QS + JWT/`X-Company-Id` | **PASS** |
| Entity flat + child segments · **0** `SegmentsJson` | **PASS** |
| Migration schema only · **0** invent InsertData | **PASS** |
| Perms hook `useOrgRouteScopePermissions` · codes `master.org-route-scopes.*` | **PASS** |
| History `LinCatalogHistoryModal` stub | **PASS** (accepted stub) |

## Findings

| ID | Class | Sev | Where | Repro | Fix hint |
|----|-------|-----|-------|-------|----------|
| REV-Q-01 | query | — | List filter zone/route/isActive/effectiveAt + pageSize allow-list | `OrgRouteScopeService.GetListAsync` | **OK** |
| REV-Q-02 | query | P2 | Search text `Fold` → load all matching then in-memory Contains | `GetListAsync` khi có `search` | Accept catalog nhỏ · index/ILIKE nếu scale — **không P0** |
| REV-Q-03 | query | — | Overlap parent + segment → 422 · KM* reject | `EnsureNoOverlap*` · `IsKmBranchCode` | **OK** (GAP-ORS-08) |
| REV-S-01 | security | P2 | `[RequirePermission]` TODO CommonLib ≥1.4.0 | `OrgRouteScopesController` | Debt peer org-unit/road-route — **không P0** |
| REV-S-02 | security | — | BFF forward Authorization + X-Company-Id · share_a no tenant filter | BFF + entity comment | **OK** |
| REV-S-03 | security | — | Soft-delete by id · FE perm gate + Modal | list + service Delete | **OK** (API attribute debt = REV-S-01) |
| REV-UI-01 | ui-fn | — | Kind B A–D + ZONE tabs + empty VN | ListPage + S0/S1 | **OK** |
| REV-UI-02 | ui-fn | — | Slideout C/E/V/Copy · `data-form-cols=2` · LeaveConfirm | FormModal + QA-20 | **OK** |
| REV-UI-03 | ui-fn | — | LKP SearchInput zone/route/assignee PARTNER | FormModal + searchConfig | **OK** |
| REV-UI-04 | ui-fn | P1 | SearchInput org mix Sở | peer org-unit | **Accept** GAP-ORS-UI-01 OOS |
| REV-UI-05 | ui-fn | info | Native date `mm/dd/yyyy` trên Dev Standalone locale | QA-20 date inputs | Browser locale · không block VN copy |
| REV-UI-LKP-01 | ui-fn | — | **0** Text thuần master LKP | Form + filter route | **OK** |
| REV-UI-FORM-GRID-05 | ui-fn | — | Slideout 2 cột (không Full 5) | `data-form-cols="2"` | **OK** (Kind B Modal) |
| REV-BE-01 | be-fn | — | Integration resource `org-route-scopes` · API-01…10 | Controller + SA | **OK** |
| REV-BE-02 | be-fn | — | Schema_RmmsOrgRouteScopes · **0** invent-seed | Migration | **OK** GAP-ORS-01 |
| REV-BFF-01 | be-fn | info | Docker BFF image 404 resource (swagger stale) · local Release OK | GAP-QA-BFF-DOCKER-01 | Ops/Dev publish follow-up — **không** reopen Dev pack |

**P0:** none.

## Query (`/review-query`)

- Field SSOT: `zoneOrgCode` · `routeCode` · `kmFrom`/`kmTo` · `effectiveFrom`/`To` · segment `assigneeKind`/`assigneeCode` — khớp DTO/entity/SA.
- N+1: GetById segments 1 query phụ · CRUD 1 `SaveChanges` — OK.
- Lookup 422: overlap · KM* · km range · HL — service throws → controller 422.
- Search `/search` active-only + page clamp — OK consumer SearchInput.

## Security

- Path Integration only · **cấm** ERP.* / rmms — grep PASS.
- Permission attribute **debt** P2 (REV-S-01) · FE hook codes sẵn.
- Secrets: none in OrgRoute* sources.
- IDOR: GUID id + soft-delete; share_a intentional no company filter (SA xco_na).

## UI / BE function

- List toolbar Tạo mới / Làm mới / config / history · row menu edit/view/copy/delete/history.
- Form tabs Gán zone + Đoạn · segment CRUD sau khi có parentId.
- FormPage routes redirect query `?form=` — OK.
- QA T-QA-* PASS · Review không re-run e2e.

## Gates

| Gate | Result |
|------|--------|
| Version recheck | **PASS** — workflow **2026.08.29.04** · agent-review **2026.08.29.04** · `rechecked` |
| Prior design/sa/tl/dev/qa | **confirmed** / **PASS** |
| SSOT Kind B shell + chrome | **PASS** (code + PNG) |
| FormType LKP/LEAVE/FILTER/CFG | **PASS** |
| Path guard Integration · **0** ERP.* | **PASS** |
| Prototype + reviewUrl | **PASS** (prior design) |
| mfeStdUrl | `http://localhost:9318/mas/phan-khu` |
| VERIFY yarn build/e2e/start:std | **SKIP** — roleOnly=review · dùng QA evidence |
| autoApprove `review_confirm` | **approve** |

## Verdict

**PASS** · **approve** · không P0. Debt P1–P2 (RequirePermission · GAP-ORS-UI-01 · GAP-QA-BFF-DOCKER-01 · in-memory search Fold) đã ghi — **không** `fix_gaps`.

Pipeline org-route-scope **complete** (data-analy → … → review).

## Confirm

`review_confirm` = **approve** (autoApprove ON · không AskQuestion).

## Handoff → Dev

| Gap | Task hint |
|-----|-----------|
| — | không assign Dev |

## Version meta (REQUIRED)

| Field | Value |
|-------|-------|
| skillId | agent-review |
| skillVersion | 2026.08.29.04 |
| schemaVersion | 1 |
| workflowVersion | 2026.08.29.04 |
| rulesVersion | 2026.08.29.32 |
| reviewHash | sha256:81b3c9a520472625cc78375571d1d94ae34a6badc62a7a7bf21f0a2eac7894dc |
| contentHash | sha256:81b3c9a520472625cc78375571d1d94ae34a6badc62a7a7bf21f0a2eac7894dc |
| generatedAt | 2026-08-30T12:30:00.000Z |
| versionGate | rechecked |
| taskId | task_badbc48d |

---
<!-- Version meta: skillId=agent-review skillVersion=2026.08.29.04 schemaVersion=1 workflowVersion=2026.08.29.04 rulesVersion=2026.08.29.32 versionGate=rechecked reviewHash=sha256:81b3c9a520472625cc78375571d1d94ae34a6badc62a7a7bf21f0a2eac7894dc taskId=task_badbc48d -->
