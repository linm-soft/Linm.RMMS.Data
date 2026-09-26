# Team lead — Task — web-rmms-asset-hub

> Status: **confirmed** · autoApprove ON · task `task_e768ad49` · 2026-09-25T13:30:00.000Z  
> **Cấm** implement code tại role này · **cấm** e2e / yarn build / start:std · Step 4b skip.

| | |
|--|--|
| Feature | `web-rmms-asset-hub` |
| Title | Hub tài sản — wallet · tiles · AI pending |
| Role | `team_lead` |
| packKind | `list` |
| changeScope | `new_page` |
| formPattern | Mobile Hub / full · phone max-width 430 · N/A ERP Modal/Slideout · no master form · no CRUD on hub |
| domain | **Asset** (`asset`) · cite Integration · AiVision · Gis |
| mfe | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Mobile` |
| mfeStdRoute | `/web-rmms-asset-hub` |
| mfeStdUrl | `http://localhost:9301/web-rmms-asset-hub` |
| nativeRouteCite | SCREENS `/asset` · alias nếu shell cần |
| be | `D:/AI-QLBD/Linm.RMMS.WebService` · Mobile.Bff `:5202` `mobile-bff/api/v1` |
| demo | **N/A** |
| contentHash | `sha256:6f74282b807da7f2cc1aa57ac64848cd1d75ff3383c0f432eaad7bea53fff80e` |
| skillVersion | `2026.09.05.03` |
| route_confirm | **approve** (PO chốt · STATUS URL · new_page STD) |
| reviewUrl | `file:///D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-asset-hub/ui/prototype/index.html` |
| prior | data_analy · po · design · sa = **confirmed** |

## 0. changeScope / gates

| Gate | Result |
|------|--------|
| control-hint | `specs/_data-analy/features/web-rmms-asset-hub-control-hint.md` **exists** |
| real-data | `specs/_data-analy/features/web-rmms-asset-hub-real-data.md` **exists** · §A+§B PASS |
| changeScope | `new_page` · full pipeline (không data-analy-only) |
| DES-GRID / LinErpListFilterBar | **N/A** phone Hub tiles |
| Step 4b / migration | **skip** · API Mới / entity = none |
| ERP.* | **cấm** |
| invent Hub CRUD / wallet org API | **cấm** (GAP-F-AHUB-01 accept) |

## 1. Scope (DoD)

| In | Out |
|----|-----|
| Hub page shell AH-00…07 · phone 430 | me* / feedback / cam-view |
| wallet RO Live (road-routes + asset-types count) | invent org/wallet API |
| tiles×5 nav → `/asset/kcht|list|collect|ai|adjust` | sibling CRUD on Hub |
| rowGis → `/gis` (nav-only · no geojson load) | Field doors / journal / kết ca |
| AI pending Draft · empty → hide | GPS on Hub |
| labels `useFormOptions()` / LinmCopy `assetHub.*` | hardcode VN |
| route `/web-rmms-asset-hub` (+ alias `/asset` nếu shell) | web-bff as Mobile client base |
| staff auth gate (shell session) | mock SSOT / `window.alert` |

## 2. Screens / zones

| Zone | Control | Bind / nav |
|------|---------|------------|
| AH-00 | page chrome | phone 430 · Android icon/layout 1-1 |
| AH-01 | navBack Button/Nav | → Home (`web-rmms-home`) |
| AH-02 | wallet.eyebrow Text RO | LOOKUP_STATIC / useFormOptions |
| AH-03 | wallet.title Text RO | `GET integration/road-routes/search` |
| AH-04 | wallet.subtitle Text RO | `GET integration/asset-types` → count |
| AH-05 | tile×5 Button/Nav | `/asset/kcht` · `/asset/list` · `/asset/collect` · `/asset/ai` · `/asset/adjust` |
| AH-06 | rowGis Button/Nav | `/gis` |
| AH-07 | aiPending ListRow/CTA | `GET ai-vision/asset-candidates` · tap → `/asset/ai` · empty hide |

## 3. Live API (HARD)

| Method | Client path | Bind |
|--------|-------------|------|
| GET | `mobile-bff/api/v1/integration/road-routes/search` | wallet.title |
| GET | `mobile-bff/api/v1/integration/asset-types` | wallet.subtitle count |
| GET | `mobile-bff/api/v1/ai-vision/asset-candidates` | AH-07 Draft rows |

- Base: `http://localhost:5202` + `mobile-bff/api/v1`
- Fail 503/network → toast + optional retry · wallet placeholder · pending hide
- **Cấm** invent `api/v1/asset/hub/*`

## 4. Task board (T-*)

| ID | Title | Owner | Deps | AC (trace) | Status |
|----|-------|-------|------|------------|--------|
| T-01 | Route + Hub shell AH-00/AH-01 · mfeStdRoute `/web-rmms-asset-hub` · phone 430 · REMOVED me*/feedback/cam-view | `/agent-dev` | — | PO Hub chrome · design AH-00/01 · SA §5 | pending |
| T-02 | Wallet RO AH-02…04 · Live 2×GET Integration · useFormOptions labels · GAP-F-AHUB-01 no invent org | `/agent-dev` | T-01 | real-data §B · SA FormMode wallet · design wallet.* | pending |
| T-03 | Tiles×5 AH-05 + rowGis AH-06 · nav-only peers · **cấm** geojson/CRUD on Hub | `/agent-dev` | T-01 | PO tiles · design tile×5/rowGis · SA AH-05/06 | pending |
| T-04 | AI pending AH-07 · GET candidates · empty hide · tap → `/asset/ai` | `/agent-dev` | T-01 | PO Draft · design aiPending · SA AH-07 | pending |
| T-05 | Auth gate staff/session · fail toast no alert · Android layout 1-1 · labels no hardcode VN | `/agent-dev` | T-02,T-03,T-04 | PO auth/copy · SA §3 fail · list-form quality | pending |
| T-06 | QA scenarios + E2E queued · wallet · tiles routes · pending empty/hide · phone 430 · mfeStdUrl | `/agent-qa` | T-05 | e2eQa ON · scenarios.md | pending |
| T-07 | Review findings vs design/prototype · route_confirm STATUS | `/agent-review` | T-06 | design reviewUrl · STATUS | pending |

### Dev assign (agent-dev-assign)

| Field | Value |
|-------|-------|
| feature | `web-rmms-asset-hub` |
| packKind | `list` |
| slash | `/agent-dev` |
| mfe cwd | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Mobile` |
| implement artifact | `specs/web-rmms-asset-hub/implement/web-rmms-asset-hub.md` |
| BE align | skip until Dev · Step 4b none expected |
| cấm | ERP.* · invent Hub API · e2e ở Dev (QA owns) · GPS on Hub |

## 5. route_confirm

| Item | Value |
|------|-------|
| mfeStdRoute | `/web-rmms-asset-hub` |
| mfeStdUrl | `http://localhost:9301/web-rmms-asset-hub` |
| native cite | `/asset` |
| decision | **approve** · PO chốt · new_page · ghi STATUS |
| shell alias | `/asset` nếu shell map native SCREENS |

## 6. Risks / carry

| ID | Status | Dev note |
|----|--------|----------|
| UNCLEAR-DOMAIN-MAP-AHUB | resolved SA | DOMAIN-MAP Asset |
| UNCLEAR-STD-ROUTE | resolved PO | follow STATUS URL |
| GAP-F-AHUB-01 / WALLET-ORG | accepted PO | Live road-routes only · no invent |

## 7. Handoff

| Next | Need |
|------|------|
| `/agent-dev` | T-01…T-05 · implement MD · Mobile.Bff Live only |
| `/agent-qa*` | T-06 · E2E ON · **cấm** start ở team_lead |
| `/agent-review` | T-07 |

## Version meta

`skillVersion=2026.09.05.03` · `contentHash=sha256:6f74282b807da7f2cc1aa57ac64848cd1d75ff3383c0f432eaad7bea53fff80e` · `route_confirm=approve` · `writtenAt=2026-09-25T13:30:00.000Z` · `taskId=task_e768ad49`
