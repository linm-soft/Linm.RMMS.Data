# SA — Solution — web-rmms-asset-hub

> Status: **confirmed** · autoApprove ON · task `task_f67e9a7b` · 2026-09-25T13:25:00.000Z  
> **Cấm** ERP.* · **cấm** invent Hub CRUD / `asset/hub` · **cấm** Step 4b / migration ở role SA.

| | |
|--|--|
| Feature | `web-rmms-asset-hub` |
| Title | Hub tài sản — wallet · tiles · AI pending |
| Role | `sa` |
| packKind | `list` |
| changeScope | `new_page` |
| formPattern | Mobile Hub / full · phone max-width 430 · N/A ERP Modal/Slideout · no master form · no CRUD on hub |
| domain | **Asset** (`asset`) · Hub chrome · cite Integration · AiVision · Gis |
| mfe | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Mobile` · route `/web-rmms-asset-hub` |
| mfeStdUrl | `http://localhost:9301/web-rmms-asset-hub` |
| nativeRouteCite | SCREENS `/asset` · alias nếu shell cần |
| be | `D:/AI-QLBD/Linm.RMMS.WebService` |
| BFF | Mobile.Bff `http://localhost:5202` · prefix `mobile-bff/api/v1` |
| contentHash | `sha256:6f74282b807da7f2cc1aa57ac64848cd1d75ff3383c0f432eaad7bea53fff80e` |
| skillVersion | `2026.09.05.03` |
| solution_confirm | **approve** (autoApprove) |
| reviewUrl | `file:///D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-asset-hub/ui/prototype/index.html` |

## 1. Domain / ownership

| Item | Decision |
|------|----------|
| DOMAIN-MAP slug | `web-rmms-asset-hub` → **Asset** / `asset` |
| Rationale | Hub nav chrome cho domain Asset · Live wallet từ Integration · AI pending từ AiVision · GIS row nav cite Gis — **không** tạo domain Hub mới |
| Cite peers | Integration (`road-routes/search`, `asset-types`) · AiVision (`asset-candidates`) · Gis (`/gis`) · sibling asset deep (`/asset/kcht|list|collect|ai|adjust`) · Home back |
| API folder | **no new** `Domains/AssetHub` · reuse Integration + AiVision Live · Asset owns MFE surface only |
| **Cấm** | invent `api/v1/asset/hub/*` · invent wallet org API · ERP.* · gộp sibling CRUD vào slug |

**DOMAIN-MAP row (applied):**

| Feature slug | Domain Pascal | kebab |
|--------------|---------------|-------|
| `web-rmms-asset-hub` | Asset | `asset` · Hub wallet+tiles+AI pending · cite Integration/AiVision/Gis · MFE `Linm.Web.RMMS.Mobile` `/web-rmms-asset-hub` · **cấm** invent Hub CRUD |

→ resolves **UNCLEAR-DOMAIN-MAP-AHUB**.

## 2. FormMode ↔ API

Hub **không** master form / Modal / Slideout. Modes = staff Hub surface (session required).

| Mode / zone | UI | API | Write | Notes |
|-------------|----|-----|-------|-------|
| AH-00 chrome | page shell | — | — | phone 430 |
| AH-01 navBack | Button/Nav | — | nav Home | peer `web-rmms-home` |
| AH-02 wallet.eyebrow | Text RO | — | — | LOOKUP_STATIC / `useFormOptions` |
| AH-03 wallet.title | Text RO | `GET integration/road-routes/search` | — | Live · GAP-F-AHUB-01 org title — **no invent** |
| AH-04 wallet.subtitle | Text RO | `GET integration/asset-types` | — | Live · count only |
| AH-05 tiles×5 | Button/Nav | — | `/asset/kcht` · `/asset/list` · `/asset/collect` · `/asset/ai` · `/asset/adjust` | nav-only · peer deep |
| AH-06 rowGis | Button/Nav | — | `/gis` | nav-only · **cấm** load geojson trên Hub |
| AH-07 aiPending | ListRow/CTA Draft | `GET ai-vision/asset-candidates` | tap → HITL peer `/asset/ai` | empty → **hide** section |
| Auth gate | staff only | session / JWT (shell) | guest → login peer | Home/shell owns login |

### Live endpoints (HARD — from real-data §B)

| Method | BFF path (client) | Downstream | Response bind | Status |
|--------|-------------------|------------|----------------|--------|
| GET | `mobile-bff/api/v1/integration/road-routes/search` | Integration | route label → wallet.title | **Live** |
| GET | `mobile-bff/api/v1/integration/asset-types` | Integration | length/count → wallet.subtitle | **Live** |
| GET | `mobile-bff/api/v1/ai-vision/asset-candidates` | AiVision | Draft rows → AH-07 · empty hide | **Live** |

- Client base: `http://localhost:5202` + `mobile-bff/api/v1` — **không** gọi `web-bff` từ Mobile MFE.
- **API Mới:** none · **migration:** none · **entity mới:** none.
- Labels: `useFormOptions()` / LinmCopy `assetHub.*` · **cấm** hardcode VN.
- GAP-F-AHUB-01: wallet org title — PO accept · bind Live road-routes only · **cấm** invent org API.

## 3. BFF vs API

| Layer | Role for Hub |
|-------|--------------|
| Mobile.Bff `:5202` | sole FE entry · proxy `integration/*` · `ai-vision/*` · auth rewrite (session) |
| RMMS.Service.Api | Integration + AiVision existing controllers — **no AssetHub controller** |
| web-bff | cite only · **not** Mobile client base |

Fail: 503/network → toast + retry optional · wallet empty/placeholder · pending hide — **cấm** mock SSOT · **cấm** `window.alert`.

## 4. Entity / migration

| Item | Decision |
|------|----------|
| Tables | none |
| EF migration | **skip** (no schema) |
| Step 4b | **skip** at SA · Dev only if peer gap (not expected) |

## 5. FE surface (SA contract — Dev implements)

| Zone | Contract |
|------|----------|
| AH-00…07 | Hub owns · phone 430 · Android icon/layout 1-1 |
| REMOVED | `me*` · feedback · cam-view · Field 2-door · journal/kết ca/tồn tại/tần suất → shell / a…e |
| GPS | **none** on Hub · peer deep only |
| DES-GRID / LinErpListFilterBar | **N/A** phone Hub tiles |
| Route | `mfeStdRoute=/web-rmms-asset-hub` · native cite `/asset` |

## 6. Risks / open

| ID | Status |
|----|--------|
| UNCLEAR-DOMAIN-MAP-AHUB | **resolved** — DOMAIN-MAP row added |
| UNCLEAR-STD-ROUTE | **resolved PO** — `/web-rmms-asset-hub` · alias `/asset` if shell |
| UNCLEAR-WALLET-ORG / GAP-F-AHUB-01 | **accepted PO** — no invent API · Live road-routes only |

## 7. Handoff

| Next | Need |
|------|------|
| team_lead | Tasks: Hub page · wallet Live · tiles×5+gis nav · AI pending empty/hide · no me · no Hub CRUD |
| devSlash | `/agent-dev` |
| qa | Tiles routes · wallet · pending · phone 430 · E2E queued `/agent-qa*` |

## Version meta

`skillVersion=2026.09.05.03` · `contentHash=sha256:6f74282b807da7f2cc1aa57ac64848cd1d75ff3383c0f432eaad7bea53fff80e` · `solution_confirm=approve` · `writtenAt=2026-09-25T13:25:00.000Z`
