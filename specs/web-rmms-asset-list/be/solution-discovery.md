# SA — Solution — web-rmms-asset-list

> Status: **confirmed** · autoApprove ON · task `task_4c6efeb4` · 2026-09-25T14:30:00.000Z  
> **Cấm** ERP.* · **cấm** invent PUT/write trên slug · **cấm** Step 4b / migration ở role SA · **cấm** Write MFE/native.

| | |
|--|--|
| Feature | `web-rmms-asset-list` |
| Title | Danh sách và chi tiết tài sản |
| Role | `sa` |
| packKind | `list` |
| changeScope | `new_page` |
| formPattern | Mobile List+Detail / full · phone max-width 430 · N/A ERP Modal/Slideout · no PUT on detail |
| domain | **Asset** (`asset`) · cite **Gis** (pin focus) |
| mfe | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Mobile` · route `/web-rmms-asset-list` |
| mfeStdUrl | `http://localhost:9301/web-rmms-asset-list` |
| nativeRouteCite | SCREENS `/asset/list` + `/asset/:id` (alias · STATUS URL canonical) |
| be | `D:/AI-QLBD/Linm.RMMS.WebService` |
| BFF | Mobile.Bff `http://localhost:5202` · prefix `mobile-bff/api/v1` |
| contentHash | `sha256:6f74282b807da7f2cc1aa57ac64848cd1d75ff3383c0f432eaad7bea53fff80e` |
| skillVersion | `2026.09.05.03` |
| solution_confirm | **approve** (autoApprove) |
| reviewUrl | `file:///D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-asset-list/ui/prototype/index.html` |
| detailRoute | same-slug zones `?id={id}` · AL-10…13 · nested child OK same page |

## 1. Domain / ownership

| Item | Decision |
|------|----------|
| DOMAIN-MAP slug | `web-rmms-asset-list` → **Asset** / `asset` |
| Rationale | List+Detail Live `road-assets` thuộc domain Asset · pin map = nav cite Gis — **không** tạo domain List mới |
| Cite peers | Gis (`/gis?focus={id}`) · Hub back (`web-rmms-asset-hub`) · optional `?type=` from KCHT (`web-rmms-asset-kcht` / Integration) |
| API folder | **reuse** existing Asset `road-assets` · **no new** controller/entity |
| **Cấm** | invent PUT/POST trên list slug · invent `asset/list/*` · ERP.* · Web BFF base từ Mobile MFE · gộp sibling collect/ai/adjust |

**DOMAIN-MAP row (applied):**

| Feature slug | Domain Pascal | kebab |
|--------------|---------------|-------|
| `web-rmms-asset-list` | Asset | `asset` · Live `road-assets` list+detail RO · cite Gis focus · MFE `Linm.Web.RMMS.Mobile` `/web-rmms-asset-list` · **cấm** invent PUT/write |

→ resolves **UNCLEAR-DOMAIN-MAP-LIST**.

## 2. FormMode ↔ API

List+Detail **không** Modal/Slideout master form. Modes = RO browse + detail RO (session required).

| Mode / zone | UI | API | Write | Notes |
|-------------|----|-----|-------|-------|
| AL-00 chrome | page shell | — | — | phone 430 |
| AL-01 navBack | Button/Nav | — | nav Hub | peer `web-rmms-asset-hub` |
| AL-02 pageTitle | Text RO | — | — | `assetList.title` / useFormOptions |
| AL-03 search | Text/Search | `GET asset/road-assets?search` | query | server search |
| AL-04 listRow | ListRow | same · `page`/`pageSize` | tap → `?id=` | code/type/route |
| AL-05 empty | Empty | — | — | empty state |
| AL-06 error.retry | Button | reload GET | — | toast · **cấm** alert |
| AL-10 detail chrome | same-slug `?id={id}` | — | — | Design RESOLVED |
| AL-11 detail.* | Text RO | `GET asset/road-assets/{id}` | — | Code·Type·Route·KmFrom/KmTo·Lat/Lng · hide null |
| AL-12 pinMap | Button/Nav | — | nav `/gis?focus={id}` | disable no coords |
| AL-13 detail.back | Button/Nav | — | clear `?id` → list | — |
| Auth gate | staff only | session / JWT (shell) | guest → login peer | shell/home owns login |
| TYPE-FILTER | no type UI | optional `?type=` passthrough | — | from KCHT · **no invent** |

### Live endpoints (HARD — from real-data §B)

| Method | BFF path (client) | Downstream | Response bind | Status |
|--------|-------------------|------------|----------------|--------|
| GET | `mobile-bff/api/v1/asset/road-assets?search&page&pageSize[&type]` | Asset | rows → AL-04 · empty AL-05 | **Live** |
| GET | `mobile-bff/api/v1/asset/road-assets/{id}` | Asset | detail.* → AL-11 · hide null coords | **Live** |

- Client base: `http://localhost:5202` + `mobile-bff/api/v1` — **không** gọi `web-bff` từ Mobile MFE.
- Pin: **nav-only** peer Gis · **không** load geojson trên list/detail.
- **API Mới:** none · **migration:** none · **entity mới:** none · **PUT/POST:** none.
- Labels: `useFormOptions()` / LinmCopy `assetList.*` · **cấm** hardcode VN.
- GPS: display stored Lat/Lng only · **cấm** `navigator.geolocation`.

## 3. BFF vs API

| Layer | Role for List |
|-------|---------------|
| Mobile.Bff `:5202` | sole FE entry · proxy `asset/road-assets` · auth rewrite (session) |
| RMMS.Service.Api | Asset existing `road-assets` controller — **no new** List controller |
| web-bff | cite only · **not** Mobile client base |

Fail: 503/network → toast + retry · empty state — **cấm** mock SSOT · **cấm** `window.alert`.

## 4. Entity / migration

| Item | Decision |
|------|----------|
| Tables | none (reuse road-assets) |
| EF migration | **skip** (no schema) |
| Step 4b | **skip** at SA · Dev only if Live gap (not expected) |

## 5. FE surface (SA contract — Dev implements)

| Zone | Contract |
|------|----------|
| AL-00…06 · AL-10…13 | List+Detail owns · phone 430 · Android icon/layout 1-1 |
| DETAIL-ROUTE | same-slug `?id={id}` · no new STATUS slug |
| REMOVED | `me*` · feedback · cam-view · PUT · Field deep · journal b–e |
| GPS | display stored only · pin disable no coords |
| DES-GRID / LinErpListFilterBar | **N/A** phone list |
| Route | `mfeStdRoute=/web-rmms-asset-list` · native cite `/asset/list` + `/asset/:id` |

## 6. Risks / open

| ID | Status |
|----|--------|
| UNCLEAR-DOMAIN-MAP-LIST | **resolved** — DOMAIN-MAP row added |
| UNCLEAR-DETAIL-ROUTE | **resolved Design** — same-slug `?id={id}` |
| UNCLEAR-STD-ROUTE | **resolved PO** — `/web-rmms-asset-list` |
| UNCLEAR-TYPE-FILTER | **resolved PO** — optional `?type=` passthrough only |

## 7. Handoff

| Next | Need |
|------|------|
| team_lead | Tasks: list page · search/paging · detail RO same-slug · pin Gis · type passthrough · no me · no PUT |
| devSlash | `/agent-dev` |
| qa | List load · search · detail · pin disable null · phone 430 · E2E queued `/agent-qa*` |

## Version meta

`skillVersion=2026.09.05.03` · `contentHash=sha256:6f74282b807da7f2cc1aa57ac64848cd1d75ff3383c0f432eaad7bea53fff80e` · `solution_confirm=approve` · `writtenAt=2026-09-25T14:30:00.000Z`
