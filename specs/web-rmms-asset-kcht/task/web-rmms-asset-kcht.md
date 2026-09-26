# Team lead — Task — web-rmms-asset-kcht

> Status: **confirmed** · autoApprove ON · task `task_98713989` · 2026-09-25T13:55:00.000Z  
> **Cấm** implement code tại role này · **cấm** e2e / yarn build / start:std · Step 4b skip.

| | |
|--|--|
| Feature | `web-rmms-asset-kcht` |
| Title | Hạng mục tài sản — type-grid KCHT |
| Role | `team_lead` |
| packKind | `list` |
| changeScope | `new_page` |
| formPattern | Mobile type-grid / full · phone max-width 430 · N/A ERP Modal/Slideout · no master CRUD · no POST/PUT |
| domain | **Integration** (`asset-type`) · cite Asset |
| mfe | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Mobile` |
| mfeStdRoute | `/web-rmms-asset-kcht` |
| mfeStdUrl | `http://localhost:9301/web-rmms-asset-kcht` |
| nativeRouteCite | SCREENS `/asset/kcht` · PLAN `AssetKchtDashboardView` (alias only) |
| be | `D:/AI-QLBD/Linm.RMMS.WebService` · Mobile.Bff `:5202` `mobile-bff/api/v1` |
| demo | **N/A** |
| contentHash | `sha256:6f74282b807da7f2cc1aa57ac64848cd1d75ff3383c0f432eaad7bea53fff80e` |
| skillVersion | `2026.09.05.03` |
| route_confirm | **approve** (PO chốt · STATUS URL · new_page STD) |
| reviewUrl | `file:///D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-asset-kcht/ui/prototype/index.html` |
| prior | data_analy · po · design · sa = **confirmed** |

## 0. changeScope / gates

| Gate | Result |
|------|--------|
| control-hint | `specs/_data-analy/features/web-rmms-asset-kcht-control-hint.md` **exists** |
| real-data | `specs/_data-analy/features/web-rmms-asset-kcht-real-data.md` **exists** · §A+§B PASS |
| changeScope | `new_page` · full pipeline (không data-analy-only) |
| DES-GRID / LinErpListFilterBar | **N/A** phone type-grid |
| Step 4b / migration / API Mới / entity | **skip** · none |
| ERP.* | **cấm** |
| invent `/asset/kcht` CRUD / AssetKcht controller | **cấm** |
| GPS on KCHT | **none** |

## 1. Scope (DoD)

| In | Out |
|----|-----|
| KCHT type-grid AK-00…06 · phone 430 | me* / feedback / cam-view |
| Live GET `integration/asset-types` → tiles code/name/icon | invent kcht CRUD / POST/PUT |
| optional client search P1 | Field doors / journal / kết ca / tồn tại / tần suất (a…e) |
| tap tile → peer list `?type={code}` | passport deep-link P1 |
| back → Hub (`web-rmms-asset-hub`) | hardcode VN / count 32/36 SSOT |
| labels `useFormOptions()` / `assetKcht.*` | iOS/Android native edit |
| route `/web-rmms-asset-kcht` (+ alias `/asset/kcht` nếu shell) | web-bff as Mobile client base |
| staff auth gate (shell session) · toast no alert | DES-GRID / LinErpListFilterBar |

## 2. Screens / zones

| Zone | Control | Bind / nav |
|------|---------|------------|
| AK-00 | page chrome | phone 430 · Android icon/layout 1-1 |
| AK-01 | navBack Button/Nav | → Hub (`/web-rmms-asset-hub` / `/asset`) |
| AK-02 | pageTitle Text RO | `assetKcht.title` · useFormOptions |
| AK-03 | search Text/Search | optional P1 client filter (name/code) |
| AK-04 | typeTile×N HubTile/ListRow | `GET integration/asset-types` · code/name · pict `assetIconBareHtml(kchtIconCode)` |
| AK-05 | empty/error Empty/Button | toast · retry · **cấm** `alert` |
| AK-06 | typeTap Button/Nav | peer list `?type={code}` · passport out P1 |

## 3. Live API (HARD)

| Method | Client path | Bind |
|--------|-------------|------|
| GET | `mobile-bff/api/v1/integration/asset-types` | AK-04 tiles · code/name/icon |

- Base: `http://localhost:5202` + `mobile-bff/api/v1`
- Fail 503/network → toast + retry (AK-05) · empty state
- **Cấm** invent `api/v1/asset/kcht/*` · **cấm** AssetKcht controller · BFF proxy only
- Write API: **none**

## 4. Task board (T-*)

| ID | Title | Owner | Deps | AC (trace) | Status |
|----|-------|-------|------|------------|--------|
| T-01 | Route + KCHT shell AK-00…02 · mfeStdRoute `/web-rmms-asset-kcht` · phone 430 · REMOVED me*/feedback/cam-view · labels `assetKcht.*` | `/agent-dev` | — | PO chrome · design AK-00/01/02 · SA §5 | pending |
| T-02 | Live GET asset-types · type tiles AK-04 · bind code/name/icon · **cấm** invent kcht API | `/agent-dev` | T-01 | real-data §B · SA Live GET · design typeTile | pending |
| T-03 | Optional search P1 AK-03 (client filter) + empty/error/retry AK-05 · toast no alert | `/agent-dev` | T-02 | PO SEARCH · design search/empty · SA fail | pending |
| T-04 | typeTap AK-06 → peer list `?type={code}` · navBack → Hub · passport out | `/agent-dev` | T-02 | PO TAP · design typeTap · SA FormMode nav | pending |
| T-05 | Auth gate staff/session · Android layout 1-1 · no hardcode VN/32/36 · GPS none · quality gates | `/agent-dev` | T-03,T-04 | PO auth/copy · list-form quality | pending |
| T-06 | QA scenarios + E2E queued · tiles Live · search · tap list · empty/fail · phone 430 · mfeStdUrl | `/agent-qa` | T-05 | e2eQa ON · scenarios.md | pending |
| T-07 | Review findings vs design/prototype · route_confirm STATUS | `/agent-review` | T-06 | design reviewUrl · STATUS | pending |

### Dev assign (agent-dev-assign)

| Field | Value |
|-------|-------|
| feature | `web-rmms-asset-kcht` |
| packKind | `list` |
| slash | `/agent-dev` |
| mfe cwd | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Mobile` |
| implement artifact | `specs/web-rmms-asset-kcht/implement/web-rmms-asset-kcht.md` |
| BE align | skip until Dev · Step 4b none expected |
| cấm | ERP.* · invent AssetKcht API · e2e ở Dev (QA owns) · GPS on KCHT · hardcode VN/32/36 |

## 5. route_confirm

| Item | Value |
|------|-------|
| mfeStdRoute | `/web-rmms-asset-kcht` |
| mfeStdUrl | `http://localhost:9301/web-rmms-asset-kcht` |
| native cite | `/asset/kcht` · PLAN `AssetKchtDashboardView` |
| decision | **approve** · PO chốt · new_page · ghi STATUS |
| shell alias | `/asset/kcht` nếu shell map native SCREENS |

## 6. Risks / carry

| ID | Status | Dev note |
|----|--------|----------|
| UNCLEAR-DOMAIN-MAP-KCHT | resolved SA | DOMAIN-MAP Integration · cite Asset |
| UNCLEAR-KCHT-TAP | resolved PO | peer list `?type={code}` |
| UNCLEAR-STD-ROUTE | resolved PO | follow STATUS `/web-rmms-asset-kcht` |
| UNCLEAR-SEARCH-P1 | resolved PO | optional P1 client filter |

## 6b. UI notes (edit-web-feature 2026-09-25)

AK-04 icon = GIS pict `assetIconBareHtml(kchtIconCode)` · alias `@linm/rmms-map-asset-icons`. Cấm badge 2 ký tự. Closest: `ANTI_GLARE`/`TRAFFIC_ISLAND`→`GPC`.

## 7. Handoff

| Next | Need |
|------|------|
| `/agent-dev` | T-01…T-05 · implement MD · Mobile.Bff Live GET only |
| `/agent-qa*` | T-06 · E2E ON · **cấm** start ở team_lead |
| `/agent-review` | T-07 |

## Version meta

`skillVersion=2026.09.05.03` · `contentHash=sha256:6f74282b807da7f2cc1aa57ac64848cd1d75ff3383c0f432eaad7bea53fff80e` · `route_confirm=approve` · `writtenAt=2026-09-25T13:55:00.000Z` · `taskId=task_98713989`
