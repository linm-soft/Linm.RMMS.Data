# Implement — web-rmms-mobile-a

| Field | Value |
|-------|-------|
| feature | `web-rmms-mobile-a` |
| role | `dev` · `/agent-dev` |
| status | `done` |
| packKind | `list` (phone Field hub · Kind B **WAIVE**) |
| changeScope | `new_page` |
| mfe | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Mobile` |
| mfeStdRoute | `/web-rmms-mobile-a` |
| mfeStdUrl | `http://localhost:9301/web-rmms-mobile-a` (STATUS) · standalone port **9305** (`yarn start:std`) |
| be | `D:/AI-QLBD/Linm.RMMS.WebService` · Patrol · **cấm ERP.*** |
| BFF | `mobile-bff/api/v1/patrol/**` (peer path · Live API owns) |
| contentHash | `sha256:c5b21efdd411635233b56b13ee0b1a318c182c0a488f10d8290481a3dbbd3c2e` |
| skillVersion | `2026.09.05.03` |
| schemaVersion | `1` |
| updatedAt | `2026-09-25T07:20:00.000Z` |
| taskId | `task_d94ac8ac` |
| demo | **N/A** · wave A Live-only |
| e2eQa | queued `/agent-qa*` — **cấm** e2e ở Dev |

## Build

| Gate | Result |
|------|--------|
| MFE `yarn build` | **PASS** (0 module/TS warning · size-limit WARN only pre-exist common-components) |
| MFE `yarn typecheck` | **PASS** |
| BE `dotnet build` RMMS.Service.Api | **PASS** (0 error) |
| migration | **none** wave A |
| UTF-8 mojibake `src/` | **0** |

## Screens wired

| id | Route | Notes |
|----|-------|-------|
| TD-00 | `/web-rmms-mobile-a` | Field hub doors |
| TD-01 | `/web-rmms-mobile-a/tuan-duong` · `…/:sessionId` | empty / active cards |
| TD-02 | `…/tuan-duong/mo-ca` | Full Create · LeaveConfirm · Note `chieu=` |
| TD-03 | `…/:sessionId/check-in` | Sheet · GPS HARD · FileMulti guid |
| TD-07 | `…/tuan-duong/lich-su` | history cards + CI expand |
| TK-00 | `…/tuan-kiem` | inspect hub |
| TK-01 | `…/tuan-kiem/mo-dot` | Full Create · Note km/mode/reason |
| DES-LEAVE | forms | `useFormLeaveGuard` / `useLeaveConfirm` · **0** `window.confirm` |

## APIs

| Method | Path | FE |
|--------|------|----|
| GET | `/patrol/sessions` | hub · history |
| GET | `/patrol/sessions/{id}` | detail |
| POST | `/patrol/sessions` | open · **409** duplicate |
| GET | `/patrol/sessions/{id}/plan-points` | empty OK |
| POST | `/patrol/sessions/{id}/check-ins` | GPS required · PlanPointLabel empty OK · MatchOk not forced |
| GET | `/patrol/sessions/{id}/check-ins` | history expand |
| GET | `/integration/road-routes/search` | SearchInput |
| GET | `/auth/profile` | `authService.getCurrentUser` |
| files/* | LinImageUpload default client | guid → PhotoLocalIds |

## Tasks DoD

| id | status |
|----|--------|
| T-BE-CRUD-01 | **done** · Live + 409 + plan-point empty |
| T-BE-INIT-01 | **done** · LOOKUP_STATIC module (+ useFormOptions mount) · **cấm** invent patrol/init-data |
| T-PERM-01 | **done** · peer codes KEEP · RequirePermission TODO CommonLib (peer pattern) |
| T-UI-HUB-01 | **done** |
| T-UI-FORM-01 | **done** |
| T-UI-ACT-01 | **done** |
| T-UI-LEAVE-01 | **done** |
| T-UI-LKP-01 | **done** |
| T-UI-FIELD-01 | **done** |
| T-UI-PROD-01 | **done** · end-user VN chrome |
| T-UI-UX-01 | **done** · phone 430 · Lin* |
| T-UI-RESP-01 | **done** · CSS D/T/M phone shell (e2e review queued QA) |
| T-UI-HIST-01 | **done** · cards + useAlert · **0** native dialog |
| T-UI-LIST/FILTER/CFG · T-BE-UISCHEMA | **WAIVE** |

## Debt

- RequirePermission attribute still TODO until CommonLib ≥1.4.0 (peer controllers same).
- LOOKUP_STATIC direction/mode labels in FE module until shared form-options gains keys (wave A · no patrol/init-data).
- Mobile BFF proxy assumed peer with web-bff; no BFF code change this run.

## Notes

- 2026-09-25: TD-03 sheet GPS dùng `gpsPinCopy` — «Ghim vị trí hiện tại» · OK `[lat, lng]`. **Cấm** «Thử lại GPS». Form full: header rồi Hủy/Lưu onTop.

## QA verdict

- **PASS** · `task_3dc99433` · e2e S0/S1/QA-20 · PNG `qa/screens` · visual Aligned · port **9301** aligned · next `/agent-review*`
