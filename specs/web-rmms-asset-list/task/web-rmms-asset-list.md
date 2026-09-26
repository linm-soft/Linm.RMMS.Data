# Team lead — Task — web-rmms-asset-list

> Status: **confirmed** · autoApprove ON · task `task_63351d6e` · 2026-09-25T14:40:00.000Z  
> **Cấm** implement code tại role này · **cấm** e2e / yarn build / start:std · Step 4b skip.

| | |
|--|--|
| Feature | `web-rmms-asset-list` |
| Title | Danh sách và chi tiết tài sản đường |
| Role | `team_lead` |
| packKind | `list` |
| changeScope | `new_page` |
| formPattern | Mobile List+Detail / full · phone max-width 430 · N/A ERP Modal/Slideout · no PUT on detail |
| domain | **Asset** (`asset`) · cite Gis |
| mfe | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Mobile` |
| mfeStdRoute | `/web-rmms-asset-list` |
| mfeStdUrl | `http://localhost:9301/web-rmms-asset-list` |
| nativeRouteCite | SCREENS `/asset/list` + `/asset/:id` (alias · STATUS URL canonical) |
| be | `D:/AI-QLBD/Linm.RMMS.WebService` · Mobile.Bff `:5202` `mobile-bff/api/v1` |
| demo | **N/A** |
| contentHash | `sha256:6f74282b807da7f2cc1aa57ac64848cd1d75ff3383c0f432eaad7bea53fff80e` |
| skillVersion | `2026.09.05.03` |
| route_confirm | **approve** (PO/Design/SA · STATUS URL · new_page STD · detail same-slug `?id=`) |
| reviewUrl | `file:///D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-asset-list/ui/prototype/index.html` |
| prior | data_analy · po · design · sa = **confirmed** |

## 0. changeScope / gates

| Gate | Result |
|------|--------|
| control-hint | `specs/_data-analy/features/web-rmms-asset-list-control-hint.md` **exists** |
| real-data | `specs/_data-analy/features/web-rmms-asset-list-real-data.md` **exists** · §A+§B PASS |
| changeScope | `new_page` · full pipeline (không data-analy-only) |
| DES-GRID / LinErpListFilterBar | **N/A** phone list |
| Step 4b / migration / API Mới / entity | **skip** · none (SA) |
| ERP.* | **cấm** |
| invent write / PUT detail | **cấm** |
| type filter UI | **cấm invent** · optional `?type=` passthrough only |
| GPS | display stored only · **cấm** new geolocation |

## 1. Scope (DoD)

| In | Out |
|----|-----|
| List+Detail AL-00…06 · AL-10…13 · phone 430 | me* / feedback / cam-view |
| Live GET `asset/road-assets?search&page&pageSize[&type]` | invent type UI / invent API |
| Detail GET `/{id}` same-slug `?id={id}` · RO fields | PUT / write / master CRUD |
| pin → `/gis?focus={id}` · disable no coords | Field doors / journal / kết ca / tồn tại / tần suất (a…e) |
| back → Hub · labels `useFormOptions()` / `assetList.*` | hardcode VN labels |
| route `/web-rmms-asset-list` (+ alias `/asset/list` nếu shell) | web-bff as Mobile client base |
| staff auth gate · toast no alert | iOS/Android native edit · DES-GRID |

## 2. Screens / zones

| Zone | Control | Bind / nav |
|------|---------|------------|
| AL-00 | page chrome | phone 430 · Android icon/layout 1-1 |
| AL-01 | navBack Button/Nav | → Hub (`/web-rmms-asset-hub` / `/asset`) |
| AL-02 | pageTitle Text RO | `assetList.title` · useFormOptions |
| AL-03 | search Text/Search | server `?search=` |
| AL-04 | listRow×N ListRow | GET `road-assets` · page/pageSize · tap → `?id=` |
| AL-05 | empty Empty | empty copy · no invent data |
| AL-06 | error/retry Button | toast · retry · **cấm** `alert` |
| AL-10 | detail chrome | same-slug `?id={id}` · back → list |
| AL-11 | detail.* Text RO | Code·Type·Route·KmFrom/KmTo |
| AL-12 | Lat/Lng Text RO | hide when null |
| AL-13 | pinMap Button/Nav | `/gis?focus={id}` · disable no coords |

## 3. Live API (HARD)

| Method | Client path | Bind |
|--------|-------------|------|
| GET | `mobile-bff/api/v1/asset/road-assets?search&page&pageSize[&type]` | AL-03/04 list · type passthrough only |
| GET | `mobile-bff/api/v1/asset/road-assets/{id}` | AL-10…12 detail RO |

- Base: `http://localhost:5202` + `mobile-bff/api/v1`
- Fail 503/network → toast + retry (AL-06) · empty (AL-05)
- Pin = **nav only** → `/gis?focus={id}` (cite Gis · no Asset write)
- Write API: **none** · **cấm** invent controller / PUT
- **Cấm** web-bff client base · **cấm** ERP.*

## 4. Task board (T-*)

| ID | Title | Owner | Deps | AC (trace) | Status |
|----|-------|-------|------|------------|--------|
| T-01 | Route + list shell AL-00…02 · mfeStdRoute `/web-rmms-asset-list` · phone 430 · REMOVED me*/feedback/cam-view · labels `assetList.*` | `/agent-dev` | — | PO chrome · design AL-00/01/02 · SA §route | pending |
| T-02 | Live GET road-assets · search/page/pageSize · optional `?type=` passthrough · listRow AL-03/04 · **cấm** type UI invent | `/agent-dev` | T-01 | real-data §B · SA Live GET · PO TYPE-FILTER · design list | pending |
| T-03 | empty/error/retry AL-05/06 · toast no alert · pagination UX | `/agent-dev` | T-02 | PO empty · design empty/error · SA fail | pending |
| T-04 | Detail same-slug `?id={id}` AL-10…12 · GET `/{id}` · RO Code/Type/Route/Km · hide null Lat/Lng · no PUT | `/agent-dev` | T-02 | PO AC-D · design DETAIL-ROUTE · SA detail GET | pending |
| T-05 | pinMap AL-13 → `/gis?focus={id}` · disable no coords · navBack Hub/list · auth/session · Android 1-1 · quality gates | `/agent-dev` | T-03,T-04 | PO pin/GPS · design pinMap · list-form quality | pending |
| T-06 | QA scenarios + E2E queued · list Live · search · detail · pin · empty/fail · phone 430 · mfeStdUrl | `/agent-qa` | T-05 | e2eQa ON · scenarios.md | pending |
| T-07 | Review findings vs design/prototype · route_confirm STATUS | `/agent-review` | T-06 | design reviewUrl · STATUS | pending |

### Dev assign (agent-dev-assign)

| Field | Value |
|-------|-------|
| feature | `web-rmms-asset-list` |
| packKind | `list` |
| slash | `/agent-dev` |
| mfe cwd | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Mobile` |
| implement artifact | `specs/web-rmms-asset-list/implement/web-rmms-asset-list.md` |
| BE align | skip until Dev · Step 4b none expected |
| cấm | ERP.* · invent write/PUT · invent type UI · e2e ở Dev (QA owns) · new geolocation · hardcode VN · web-bff base |

## 5. route_confirm

| Item | Value |
|------|-------|
| mfeStdRoute | `/web-rmms-asset-list` |
| mfeStdUrl | `http://localhost:9301/web-rmms-asset-list` |
| native cite | `/asset/list` + `/asset/:id` |
| detail | same-slug zones `?id={id}` · **no** new STATUS slug |
| decision | **approve** · PO/Design/SA · new_page · ghi STATUS |
| shell alias | `/asset/list` nếu shell map native SCREENS |

## 6. Risks / carry

| ID | Status | Dev note |
|----|--------|----------|
| UNCLEAR-DOMAIN-MAP-LIST | resolved SA | DOMAIN-MAP Asset · cite Gis |
| UNCLEAR-DETAIL-ROUTE | resolved Design | same-slug `?id={id}` |
| UNCLEAR-STD-ROUTE | resolved PO | follow STATUS `/web-rmms-asset-list` |
| UNCLEAR-TYPE-FILTER | resolved PO | optional `?type=` passthrough only |

## 7. Handoff

| Next | Need |
|------|------|
| `/agent-dev` | T-01…T-05 · implement MD · Mobile.Bff Live GET list+detail only |
| `/agent-qa*` | T-06 · E2E ON · **cấm** start ở team_lead |
| `/agent-review` | T-07 |

## Version meta

`skillVersion=2026.09.05.03` · `contentHash=sha256:6f74282b807da7f2cc1aa57ac64848cd1d75ff3383c0f432eaad7bea53fff80e` · `route_confirm=approve` · `writtenAt=2026-09-25T14:40:00.000Z` · `taskId=task_63351d6e`
