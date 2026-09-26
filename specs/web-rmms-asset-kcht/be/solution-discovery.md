# SA — Solution — web-rmms-asset-kcht

> Status: **confirmed** · autoApprove ON · task `task_c49b406e` · 2026-09-25T13:50:00.000Z  
> **Cấm** ERP.* · **cấm** invent `asset/kcht*` CRUD · **cấm** Step 4b / migration ở role SA.

| | |
|--|--|
| Feature | `web-rmms-asset-kcht` |
| Title | Hạng mục tài sản — lưới loại KCHT |
| Role | `sa` |
| packKind | `list` |
| changeScope | `new_page` |
| formPattern | Mobile type-grid / full · phone max-width 430 · N/A ERP Modal/Slideout · no master CRUD · no POST/PUT |
| domain | **Integration** (`asset-type`) · cite **Asset** |
| mfe | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Mobile` · route `/web-rmms-asset-kcht` |
| mfeStdUrl | `http://localhost:9301/web-rmms-asset-kcht` |
| nativeRouteCite | SCREENS `/asset/kcht` · PLAN `AssetKchtDashboardView` (alias only) |
| be | `D:/AI-QLBD/Linm.RMMS.WebService` |
| BFF | Mobile.Bff `http://localhost:5202` · prefix `mobile-bff/api/v1` |
| contentHash | `sha256:6f74282b807da7f2cc1aa57ac64848cd1d75ff3383c0f432eaad7bea53fff80e` |
| skillVersion | `2026.09.05.03` |
| solution_confirm | **approve** (autoApprove) |
| reviewUrl | `file:///D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-asset-kcht/ui/prototype/index.html` |

## 1. Domain / ownership

| Item | Decision |
|------|----------|
| DOMAIN-MAP slug | `web-rmms-asset-kcht` → **Integration** / `integration` |
| Rationale | Live catalog loại tài sản qua `asset-types` · surface browse-only · cite Asset peer list/deep — **không** tạo domain KCHT mới |
| Cite peers | Integration (`asset-types`) · Asset (peer list `?type={code}` · Hub back) · shell/session auth |
| API folder | **no new** `Domains/AssetKcht` · reuse Integration Live `asset-types` only |
| **Cấm** | invent `api/v1/asset/kcht*` · invent type CRUD · ERP.* · load road-assets/geojson trên KCHT · hardcode 32/36 SSOT |

**DOMAIN-MAP row (applied):**

| Feature slug | Domain Pascal | kebab |
|--------------|---------------|-------|
| `web-rmms-asset-kcht` | Integration | `integration` · type-grid Live `asset-types` · cite Asset · MFE `Linm.Web.RMMS.Mobile` `/web-rmms-asset-kcht` · **cấm** invent kcht CRUD |

→ resolves **UNCLEAR-DOMAIN-MAP-KCHT**.

## 2. FormMode ↔ API

KCHT **không** master form / Modal / Slideout / write. Modes = staff type-grid browse (session required).

| Mode / zone | UI | API | Write | Notes |
|-------------|----|-----|-------|-------|
| AK-00 chrome | page shell | — | — | phone 430 |
| AK-01 navBack | Button/Nav | — | nav Hub | peer `web-rmms-asset-hub` |
| AK-02 pageTitle | Text RO | — | — | `assetKcht.title` · LOOKUP_STATIC |
| AK-03 search | Text/Search | — | client filter | optional P1 · no server q |
| AK-04 typeTile | HubTile/ListRow | `GET integration/asset-types` | — | code/name/icon Live |
| AK-05 empty/error | Empty / retry | same GET reload | — | toast · **cấm** `window.alert` |
| AK-06 typeTap | Button/Nav | — | peer list `?type={code}` | nav-only · passport out P1 |
| Auth gate | staff only | session / JWT (shell) | guest → login peer | Hub/shell owns login |

### Live endpoints (HARD — from real-data §B)

| Method | BFF path (client) | Downstream | Response bind | Status |
|--------|-------------------|------------|----------------|--------|
| GET | `mobile-bff/api/v1/integration/asset-types` | Integration | `code`/`name`/`icon` → tiles | **Live** |

- Client base: `http://localhost:5202` + `mobile-bff/api/v1` — **không** gọi `web-bff` từ Mobile MFE.
- **API Mới:** none · **migration:** none · **entity mới:** none.
- Labels: `useFormOptions()` / LinmCopy `assetKcht.*` · **cấm** hardcode VN.
- Search: client-only filter trên list đã GET · **cấm** invent search API.
- Tap: nav peer list + query `type={code}` · **cấm** invent passport / kcht write API.

## 3. BFF vs API

| Layer | Role for KCHT |
|-------|---------------|
| Mobile.Bff `:5202` | sole FE entry · proxy `integration/asset-types` · auth rewrite (session) |
| RMMS.Service.Api | Integration existing `asset-types` — **no AssetKcht controller** |
| web-bff | cite only · **not** Mobile client base |

Fail: empty → empty state · 503/network → toast + retry — **cấm** mock SSOT · **cấm** `window.alert`.

## 4. Entity / migration

| Item | Decision |
|------|----------|
| Tables | none |
| EF migration | **skip** (no schema) |
| Step 4b | **skip** at SA · Dev only if peer gap (not expected) |

## 5. FE surface (SA contract — Dev implements)

| Zone | Contract |
|------|----------|
| AK-00…06 | KCHT owns · phone 430 · Android icon/layout 1-1 |
| REMOVED | `me*` · feedback · cam-view · Field 2-door · journal/kết ca/tồn tại/tần suất → shell / a…e · invent type CRUD |
| GPS | **none** on KCHT · peer deep only |
| DES-GRID / LinErpListFilterBar | **N/A** phone type-grid |
| Route | `mfeStdRoute=/web-rmms-asset-kcht` · native cite `/asset/kcht` |

## 6. Risks / open

| ID | Status |
|----|--------|
| UNCLEAR-DOMAIN-MAP-KCHT | **resolved** — DOMAIN-MAP row added |
| UNCLEAR-KCHT-TAP | **resolved PO** — peer list `?type={code}` · no invent API |
| UNCLEAR-STD-ROUTE | **resolved PO** — `/web-rmms-asset-kcht` |
| UNCLEAR-SEARCH-P1 | **resolved PO** — optional client P1 |

## 7. Handoff

| Next | Need |
|------|------|
| team_lead | Tasks: KCHT page · Live asset-types tiles · optional search · back Hub · tap list `?type=` · empty/error toast · no me · no invent POST |
| devSlash | `/agent-dev` |
| qa | Grid load · empty/error · phone 430 · no me · no invent POST · E2E queued `/agent-qa*` |

## Version meta

`skillVersion=2026.09.05.03` · `contentHash=sha256:6f74282b807da7f2cc1aa57ac64848cd1d75ff3383c0f432eaad7bea53fff80e` · `solution_confirm=approve` · `writtenAt=2026-09-25T13:50:00.000Z`
