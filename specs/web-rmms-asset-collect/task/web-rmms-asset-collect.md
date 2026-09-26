# Team lead — Task — web-rmms-asset-collect

> Status: **confirmed** · autoApprove ON · task `task_5451211a` · 2026-09-25T14:55:00.000Z  
> **Cấm** implement code tại role này · **cấm** e2e / yarn build / start:std · Step 4b skip.

| | |
|--|--|
| Feature | `web-rmms-asset-collect` |
| Title | Thu thập / thêm tài sản thủ công (Create) |
| Role | `team_lead` |
| packKind | `list` |
| changeScope | `new_page` |
| formPattern | Mobile full form ≤430 · N/A ERP Modal/Slideout · Create only · Android 1-1 |
| domain | **Asset** (`asset`) · cite Integration + Patrol |
| mfe | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Mobile` |
| mfeStdRoute | `/web-rmms-asset-collect` |
| mfeStdUrl | `http://localhost:9301/web-rmms-asset-collect` |
| nativeRouteCite | SCREENS `/asset/collect` · alias nếu shell |
| be | `D:/AI-QLBD/Linm.RMMS.WebService` · Mobile.Bff `:5202` `mobile-bff/api/v1` |
| demo | **N/A** |
| contentHash | `sha256:6f74282b807da7f2cc1aa57ac64848cd1d75ff3383c0f432eaad7bea53fff80e` |
| skillVersion | `2026.09.05.03` |
| route_confirm | **approve** (PO/Design/SA · STATUS URL · new_page STD) |
| reviewUrl | `file:///D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-asset-collect/ui/prototype/index.html` |
| prior | data_analy · po · design · sa = **confirmed** |

## 0. changeScope / gates

| Gate | Result |
|------|--------|
| control-hint | `specs/_data-analy/features/web-rmms-asset-collect-control-hint.md` **exists** |
| real-data | `specs/_data-analy/features/web-rmms-asset-collect-real-data.md` **exists** · §A+§B PASS |
| changeScope | `new_page` · full pipeline (không data-analy-only) |
| DES-GRID / LinErpListFilterBar | **N/A** phone form |
| Step 4b / migration / API Mới / entity | **skip** · none (SA) · reuse `road-assets` · **cấm** invent CollectController |
| ERP.* | **cấm** |
| media upload path | **GAP** · local only · **cấm** invent |
| GPS fake / type-in | **cấm** · `navigator.geolocation` only · deny blocks submit |

## 1. Scope (DoD)

| In | Out |
|----|-----|
| Form AC-00…10 · phone 430 · Android 1-1 | me* / feedback / cam-view |
| Name* Type* Route* KmFrom* Status* GPS* · KmTo opt | invent CollectController / entity / migration |
| Lookups GET init-data · asset-types · road-routes/search · sessions prefill | hardcode VN labels |
| POST `road-assets` Source→`manual` · toast Code · back Hub | Field doors / journal / kết ca / tồn tại / tần suất (a…e) |
| GPS `navigator.geolocation` · Lat/Lng RO · deny blocks submit | fake GPS / type-in coords |
| photos local preview only (GAP-MOB-ASSET-COLLECT-MEDIA-01) | invent media upload API |
| DES-LEAVE in-app discard · labels `useFormOptions()` / `assetCollect.*` | native `confirm` · web-bff client base |
| route `/web-rmms-asset-collect` (+ alias `/asset/collect` nếu shell) | iOS/Android native edit |

## 2. Screens / zones

| Zone | Control | Bind / nav |
|------|---------|------------|
| AC-00 | page chrome | phone 430 · Android icon/layout 1-1 |
| AC-01 | navBack Button/Nav | → Hub (`/web-rmms-asset-hub` / `/asset`) · DES-LEAVE dirty |
| AC-02 | pageTitle Text RO | `assetCollect.title` · useFormOptions |
| AC-03 | name Text* | CreateRoadAsset.Name |
| AC-04 | type Select* | GET `integration/asset-types` |
| AC-05 | route Select/Search* | GET `integration/road-routes/search` · sessions prefill |
| AC-06 | kmFrom Text* · kmTo Text opt | CreateRoadAsset.KmFrom / KmTo |
| AC-07 | status Select* | GET init-data Status options |
| AC-08 | gpsPin Lat/Lng Text RO* | `navigator.geolocation` · deny blocks submit |
| AC-09 | photos PhotoRow | local preview only · GAP media · no upload |
| AC-10 | submit/cancel CTA | POST · toast Code · back Hub · cancel DES-LEAVE |

## 3. Live API (HARD)

| Method | Client path | Bind |
|--------|-------------|------|
| GET | `mobile-bff/api/v1/asset/init-data` (hoặc path SA/real-data) | AC-07 Status · form defaults |
| GET | `mobile-bff/api/v1/integration/asset-types` | AC-04 Type |
| GET | `mobile-bff/api/v1/integration/road-routes/search` | AC-05 Route |
| GET | `mobile-bff/api/v1/patrol/sessions` (prefill cite) | AC-05 route/km prefill nếu session |
| POST | `mobile-bff/api/v1/asset/road-assets` | AC-10 submit · body Source=`manual` · Name* Type* Route* KmFrom* Status* Lat/Lng* · KmTo opt |

- Base: `http://localhost:5202` + `mobile-bff/api/v1`
- Fail 503/network → toast + retry · **cấm** `alert`
- Validation fail → inline/toast · **cấm** submit khi GPS deny / missing required
- Success → toast Code · navigate Hub
- Write API mới / CollectController / media upload: **none** · **cấm** invent
- **Cấm** web-bff client base · **cấm** ERP.*

## 4. Task board (T-*)

| ID | Title | Owner | Deps | AC (trace) | Status |
|----|-------|-------|------|------------|--------|
| T-01 | Route + form shell AC-00…02 · mfeStdRoute `/web-rmms-asset-collect` · phone 430 · labels `assetCollect.*` · REMOVED me*/feedback/cam-view · alias `/asset/collect` nếu shell | `/agent-dev` | — | PO chrome · design AC-00/01/02 · SA §route · route_confirm | pending |
| T-02 | Fields AC-03…07 · lookups init-data / asset-types / road-routes/search · sessions prefill · useFormOptions · **cấm** hardcode VN | `/agent-dev` | T-01 | real-data §B · SA Lookups · PO Form DoD · design fields | pending |
| T-03 | GPS AC-08 · `navigator.geolocation` · Lat/Lng RO · deny blocks submit · **cấm** fake/type-in | `/agent-dev` | T-02 | PO GPS · design gpsPin · SA GPS HARD | pending |
| T-04 | photos AC-09 local GAP only · DES-LEAVE dirty discard in-app · cancel CTA · **cấm** invent media path · **cấm** native confirm | `/agent-dev` | T-01 | PO photos GAP · design DES-LEAVE · SA UNCLEAR-MEDIA-01 | pending |
| T-05 | Submit POST road-assets Source=manual · required gate · toast Code · back Hub · auth/session · Android 1-1 · quality gates | `/agent-dev` | T-02,T-03,T-04 | PO DoD POST · SA Write · design AC-10 · list-form quality | pending |
| T-06 | QA scenarios + E2E queued · create Live · GPS deny · lookups · leave · phone 430 · mfeStdUrl | `/agent-qa` | T-05 | e2eQa ON · scenarios.md | pending |
| T-07 | Review findings vs design/prototype · route_confirm STATUS | `/agent-review` | T-06 | design reviewUrl · STATUS | pending |

### Dev assign (agent-dev-assign)

| Field | Value |
|-------|-------|
| feature | `web-rmms-asset-collect` |
| packKind | `list` |
| slash | `/agent-dev` |
| mfe cwd | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Mobile` |
| implement artifact | `specs/web-rmms-asset-collect/implement/web-rmms-asset-collect.md` |
| BE align | skip until Dev · Step 4b none expected |
| cấm | ERP.* · invent CollectController/media · e2e ở Dev (QA owns) · fake GPS · hardcode VN · web-bff base · Step 4b/migration |

## 5. route_confirm

| Item | Value |
|------|-------|
| mfeStdRoute | `/web-rmms-asset-collect` |
| mfeStdUrl | `http://localhost:9301/web-rmms-asset-collect` |
| native cite | `/asset/collect` |
| decision | **approve** · PO/Design/SA · new_page · ghi STATUS |
| shell alias | `/asset/collect` nếu shell map native SCREENS |

## 6. Risks / carry

| ID | Status | Dev note |
|----|--------|----------|
| UNCLEAR-DOMAIN-MAP-ACOLLECT | **resolved** SA | DOMAIN-MAP row Asset — follow |
| UNCLEAR-STD-ROUTE | **resolved** Design | STATUS `/web-rmms-asset-collect` canonical · alias ok |
| UNCLEAR-STATUS-ANDROID | **resolved** SA | Status Select từ init-data |
| UNCLEAR-MEDIA-01 / GAP-MOB-ASSET-COLLECT-MEDIA-01 | **open** | local preview only · **cấm** invent upload |

## 7. Handoff next

- Next role: `/agent-dev` · roleOnly stop (GAP-PKT-ROLE-01)
- compact: `specs/web-rmms-asset-collect/handoff/team_lead-compact.md`
- implement: `specs/web-rmms-asset-collect/implement/web-rmms-asset-collect.md` (Dev writes)
- e2eQa: ON · queued `/agent-qa*` only
