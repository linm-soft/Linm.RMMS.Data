# Team lead — Task — web-rmms-asset-adjust

> Status: **confirmed** · autoApprove ON · task `task_8e7fe12d` · 2026-09-25T16:40:00.000Z  
> **Cấm** implement code tại role này · **cấm** e2e / yarn build / start:std · Step 4b skip.

| | |
|--|--|
| Feature | `web-rmms-asset-adjust` |
| Title | Bớt hoặc sửa tài sản |
| Role | `team_lead` |
| packKind | `list` |
| changeScope | `new_page` |
| formPattern | Mobile list + confirm · phone max-width 430 · N/A ERP Modal/Slideout · no PUT P1 |
| domain | **Asset** (`asset`) · DOMAIN-MAP row `web-rmms-asset-adjust` |
| mfe | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Mobile` |
| mfeStdRoute | `/web-rmms-asset-adjust` |
| mfeStdUrl | `http://localhost:9301/web-rmms-asset-adjust` |
| nativeRouteCite | SCREENS `/asset/adjust` (alias · STATUS URL canonical) |
| be | `D:/AI-QLBD/Linm.RMMS.WebService` · Mobile.Bff `:5202` `mobile-bff/api/v1` |
| demo | **N/A** |
| contentHash | `sha256:6f74282b807da7f2cc1aa57ac64848cd1d75ff3383c0f432eaad7bea53fff80e` |
| skillVersion | `2026.09.05.03` |
| route_confirm | **approve** (PO/Design/SA · STATUS URL · new_page STD) |
| reviewUrl | `file:///D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-asset-adjust/ui/prototype/index.html` |
| prior | data_analy · po · design · sa = **confirmed** |

## 0. changeScope / gates

| Gate | Result |
|------|--------|
| control-hint | `specs/_data-analy/features/web-rmms-asset-adjust-control-hint.md` **exists** |
| real-data | `specs/_data-analy/features/web-rmms-asset-adjust-real-data.md` **exists** · §A+§B PASS |
| changeScope | `new_page` · full pipeline (không data-analy-only) |
| DES-GRID / LinErpListFilterBar | **N/A** phone list |
| Step 4b / migration / API Mới / entity | **skip** · none (SA) · reuse `road-assets` |
| ERP.* | **cấm** |
| PUT on adjust | **cấm** P1 · Sửa = nav peer list detail |
| GPS | **cấm** capture · Lat/Lng **không** row P1 |
| soft-delete | confirm AA-08 + toast · reload · **cấm** silent/hard |

## 1. Scope (DoD)

| In | Out |
|----|-----|
| List AA-00…07 · confirm AA-08 · phone 430 | me* / feedback / cam-view |
| Live GET `asset/road-assets?search&page&pageSize` active | invent API / new controller |
| Soft DELETE `road-assets/{id}` · confirm + toast · reload | hard delete · silent delete |
| Sửa → peer `web-rmms-asset-list` `/asset/:id` (or STD peer detail) | PUT / write on adjust P1 |
| back → Hub `/asset` · labels `useFormOptions()` / `assetAdjust.*` | hardcode VN labels |
| route `/web-rmms-asset-adjust` (+ alias `/asset/adjust` nếu shell) | web-bff as Mobile client base |
| staff auth · toast no alert | iOS/Android native edit · DES-GRID · Lat/Lng row |

## 2. Screens / zones

| Zone | Control | Bind / nav |
|------|---------|------------|
| AA-00 | page chrome | phone 430 · Android icon/layout 1-1 |
| AA-01 | navBack Button/Nav | → Hub (`/web-rmms-asset-hub` / `/asset`) |
| AA-02 | pageTitle Text RO | `assetAdjust.title` · useFormOptions |
| AA-03 | search Text/Search | server `?search=` |
| AA-04 | listRow×N ListRow | GET `road-assets` · Code/Type/Route · **no** LatLng |
| AA-05 | empty Empty | `assetAdjust.empty` · no invent data |
| AA-06 | error/retry Button | toast · retry · **cấm** `alert` |
| AA-07 | action.remove / action.edit | Bớt → AA-08 · Sửa → peer detail |
| AA-08 | confirmDelete Dialog | cancel/ok · soft DELETE · toast · reload |

## 3. Live API (HARD)

| Method | Client path | Bind |
|--------|-------------|------|
| GET | `mobile-bff/api/v1/asset/road-assets?search&page&pageSize` | AA-03/04 list · active only |
| DELETE | `mobile-bff/api/v1/asset/road-assets/{id}` | AA-08 soft delete · toast · reload |

- Base: `http://localhost:5202` + `mobile-bff/api/v1`
- Fail 503/network → toast + retry (AA-06) · empty (AA-05)
- Edit = **nav only** → peer list detail (`web-rmms-asset-list` / `/asset/:id`) · **no** PUT on adjust
- Write beyond soft DELETE: **none** · **cấm** invent controller / entity / migration
- **Cấm** web-bff client base · **cấm** ERP.*

## 4. Task board (T-*)

| ID | Title | Owner | Deps | AC (trace) | Status |
|----|-------|-------|------|------------|--------|
| T-01 | Route + list shell AA-00…02 · mfeStdRoute `/web-rmms-asset-adjust` · phone 430 · REMOVED me*/feedback/cam-view · labels `assetAdjust.*` | `/agent-dev` | — | PO chrome · design AA-00/01/02 · SA §route · L-01 | pending |
| T-02 | Live GET road-assets · search/page/pageSize · active only · listRow AA-03/04 · **cấm** Lat/Lng row · **cấm** invent API | `/agent-dev` | T-01 | real-data §B · SA Live GET · PO L-02…04 · design list | pending |
| T-03 | empty/error/retry AA-05/06 · toast no alert · pagination UX | `/agent-dev` | T-02 | PO L-05/06 · design empty/error · SA fail | pending |
| T-04 | Soft-delete AA-07/08 · confirm dialog · DELETE soft · toast.delete* · reload · **cấm** silent/hard | `/agent-dev` | T-02 | PO L-07/08 · design AA-08 · SA DELETE Live | pending |
| T-05 | Sửa nav peer detail · navBack Hub · auth/session · Android 1-1 · quality gates · **cấm** PUT P1 | `/agent-dev` | T-03,T-04 | PO L-09/10 · RESOLVED-EDIT · list-form quality | pending |
| T-06 | QA scenarios + E2E queued · list Live · search · soft-delete · edit nav · empty/fail · phone 430 · mfeStdUrl | `/agent-qa` | T-05 | e2eQa ON · scenarios.md | pending |
| T-07 | Review findings vs design/prototype · route_confirm STATUS | `/agent-review` | T-06 | design reviewUrl · STATUS | pending |

### Dev assign (agent-dev-assign)

| Field | Value |
|-------|-------|
| feature | `web-rmms-asset-adjust` |
| packKind | `list` |
| slash | `/agent-dev` |
| mfe cwd | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Mobile` |
| implement artifact | `specs/web-rmms-asset-adjust/implement/web-rmms-asset-adjust.md` |
| BE align | skip until Dev · Step 4b none expected |
| cấm | ERP.* · PUT on adjust · invent API · hard delete · Lat/Lng row · e2e ở Dev (QA owns) · hardcode VN · web-bff base · GPS capture |

## 5. route_confirm

| Item | Value |
|------|-------|
| mfeStdRoute | `/web-rmms-asset-adjust` |
| mfeStdUrl | `http://localhost:9301/web-rmms-asset-adjust` |
| native cite | `/asset/adjust` |
| peer edit | `web-rmms-asset-list` detail `/asset/:id` · **no** new adjust write slug |
| decision | **approve** · PO/Design/SA · new_page · ghi STATUS |
| shell alias | `/asset/adjust` nếu shell map native SCREENS |

## 6. Risks / carry

| ID | Status | Dev note |
|----|--------|----------|
| UNCLEAR-DOMAIN-MAP-ADJUST | resolved SA | DOMAIN-MAP Asset · row `web-rmms-asset-adjust` |
| UNCLEAR-STD-ROUTE | resolved PO | follow STATUS `/web-rmms-asset-adjust` |
| UNCLEAR-EDIT-SURFACE | resolved PO/Design/SA | peer list detail · no PUT P1 |
| UNCLEAR-SOFT-DELETE-UX | resolved PO/Design | confirm + toast keys · reload |

## 7. Handoff

| Next | Need |
|------|------|
| `/agent-dev` | T-01…T-05 · implement MD · Mobile.Bff Live GET + soft DELETE only |
| `/agent-qa*` | T-06 · E2E ON · **cấm** start ở team_lead |
| `/agent-review` | T-07 |

## Version meta

`skillVersion=2026.09.05.03` · `contentHash=sha256:6f74282b807da7f2cc1aa57ac64848cd1d75ff3383c0f432eaad7bea53fff80e` · `route_confirm=approve` · `writtenAt=2026-09-25T16:40:00.000Z` · `taskId=task_8e7fe12d`
