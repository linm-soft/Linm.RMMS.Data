# SA — Solution — web-rmms-asset-adjust

> Status: **confirmed** · autoApprove ON · task `task_72b4150a` · 2026-09-25T16:35:00.000Z  
> **Cấm** ERP.* · **cấm** invent AdjustController / PUT form P1 · **cấm** Step 4b / migration ở role SA · **cấm** Write MFE/native · **cấm** yarn build/e2e/start:std.

| | |
|--|--|
| Feature | `web-rmms-asset-adjust` |
| Title | Bớt hoặc sửa tài sản |
| Role | `sa` |
| packKind | `list` |
| changeScope | `new_page` |
| formPattern | Mobile list + confirm · phone max-width 430 · N/A ERP Modal/Slideout · no PUT on adjust P1 |
| domain | **Asset** (`asset`) · cite peer **web-rmms-asset-list** (edit detail) · Hub back |
| mfe | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Mobile` · route `/web-rmms-asset-adjust` |
| mfeStdUrl | `http://localhost:9301/web-rmms-asset-adjust` |
| nativeRouteCite | SCREENS `/asset/adjust` (alias · STATUS URL canonical) |
| be | `D:/AI-QLBD/Linm.RMMS.WebService` |
| BFF | Mobile.Bff `http://localhost:5202` · prefix `mobile-bff/api/v1` |
| contentHash | `sha256:6f74282b807da7f2cc1aa57ac64848cd1d75ff3383c0f432eaad7bea53fff80e` |
| skillVersion | `2026.09.05.03` |
| solution_confirm | **approve** (autoApprove) |
| reviewUrl | `file:///D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-asset-adjust/ui/prototype/index.html` |
| peerEdit | `web-rmms-asset-list` · `/asset/:id` (or list `?id=`) · **no PUT** on adjust P1 |

## 1. Domain / ownership

| Item | Decision |
|------|----------|
| DOMAIN-MAP slug | `web-rmms-asset-adjust` → **Asset** / `asset` |
| Rationale | Active list + soft DELETE `road-assets` thuộc Asset · Sửa = nav peer list detail — **không** domain Adjust mới |
| Cite peers | Hub back (`web-rmms-asset-hub`) · edit detail (`web-rmms-asset-list`) |
| API folder | **reuse** existing Asset `road-assets` · **no new** controller/entity |
| **Cấm** | invent `asset-adjust/*` · invent AdjustController · PUT form P1 · hard delete · ERP.* · Web BFF base từ Mobile MFE · gộp sibling collect/ai/list |

**DOMAIN-MAP row (applied):**

| Feature slug | Domain Pascal | kebab |
|--------------|---------------|-------|
| `web-rmms-asset-adjust` | Asset | `asset` · Live `road-assets` list+soft DELETE · cite list detail edit · MFE `Linm.Web.RMMS.Mobile` `/web-rmms-asset-adjust` · **cấm** invent AdjustController/PUT P1 |

→ resolves **UNCLEAR-DOMAIN-MAP-ADJUST**.

## 2. FormMode ↔ API

List+confirm **không** Modal/Slideout master form. Modes = RO browse active + soft-delete confirm (session required).

| Mode / zone | UI | API | Write | Notes |
|-------------|----|-----|-------|-------|
| AA-00 chrome | page shell | — | — | phone 430 |
| AA-01 navBack | Button/Nav | — | nav Hub `/asset` | peer `web-rmms-asset-hub` |
| AA-02 pageTitle | Text RO | — | — | `assetAdjust.title` / useFormOptions |
| AA-03 search | Text/Search | `GET asset/road-assets?search&page&pageSize` | query | server search · active only |
| AA-04 listRow | ListRow | same GET | — | Code/Type/Route · **no** Lat/Lng P1 |
| AA-05 empty | Empty | — | — | empty copy |
| AA-06 error.retry | Button | reload GET | — | toast · **cấm** alert |
| AA-07 action.edit | Button/Nav | — | nav peer detail | `web-rmms-asset-list` · **no PUT** |
| AA-08 confirmDelete | Dialog | `DELETE asset/road-assets/{id}` | soft delete | cancel/ok · toast · reload list |
| Auth gate | staff only | session / JWT (shell) | guest → login peer | shell/home owns login |

### Live endpoints (HARD — from real-data §B)

| Method | BFF path (client) | Downstream | Response bind | Status |
|--------|-------------------|------------|----------------|--------|
| GET | `mobile-bff/api/v1/asset/road-assets?search&page&pageSize` | Asset | rows → AA-04 · empty AA-05 · **active only** | **Live** |
| DELETE | `mobile-bff/api/v1/asset/road-assets/{id}` | Asset | soft-delete · toast · reload | **Live** |

- Client base: `http://localhost:5202` + `mobile-bff/api/v1` — **không** gọi `web-bff` từ Mobile MFE.
- Edit: **nav-only** peer list detail · **không** PUT trên adjust P1.
- **API Mới:** none · **migration:** none · **entity mới:** none · **PUT:** none · **hard delete:** cấm.
- Labels: `useFormOptions()` / LinmCopy `assetAdjust.*` · **cấm** hardcode VN.
- GPS: **không** capture · **không** hiện Lat/Lng row P1.
- Soft-delete UX: confirm AA-08 → DELETE → toast `assetAdjust.toast.delete*` → reload · **cấm** silent delete.

## 3. BFF vs API

| Layer | Role for Adjust |
|-------|-----------------|
| Mobile.Bff `:5202` | sole FE entry · proxy `asset/road-assets` GET+DELETE · auth rewrite (session) |
| RMMS.Service.Api | Asset existing `road-assets` controller — **no new** Adjust controller |
| web-bff | cite only · **not** Mobile client base |

Fail: 503/network → toast + retry · empty state — **cấm** mock SSOT · **cấm** `window.alert`.

## 4. Entity / migration

| Item | Decision |
|------|----------|
| Tables | none (reuse road-assets · soft-delete flag existing) |
| EF migration | **skip** (no schema) |
| Step 4b | **skip** at SA · Dev only if Live DELETE gap (not expected) |

## 5. FE surface (SA contract — Dev implements)

| Zone | Contract |
|------|----------|
| AA-00…08 | Adjust owns · phone 430 · Android icon/layout 1-1 |
| Soft-delete | confirm + toast keys · reload · cấm silent/hard |
| Edit | nav peer `web-rmms-asset-list` detail · no PUT on adjust |
| REMOVED | `me*` · feedback · cam-view · PUT · Field deep · journal b–e · GPS capture · Lat/Lng row |
| DES-GRID / LinErpListFilterBar | **N/A** phone list |
| Route | `mfeStdRoute=/web-rmms-asset-adjust` · native cite `/asset/adjust` |

## 6. Risks / open

| ID | Status |
|----|--------|
| UNCLEAR-DOMAIN-MAP-ADJUST | **resolved** — DOMAIN-MAP row added |
| RESOLVED-STD-ROUTE | STATUS `/web-rmms-asset-adjust` canonical |
| RESOLVED-EDIT-SURFACE | peer list detail · no PUT P1 |
| RESOLVED-SOFT-DELETE-UX | confirm + toast · reload |

## 7. Handoff

| Next | Need |
|------|------|
| team_lead | Tasks: adjust page · search/paging active · soft DELETE confirm+toast · Sửa→peer · no me · no PUT · no GPS |
| devSlash | `/agent-dev` |
| qa | Search · delete confirm · reload · phone 430 · no invent path · E2E queued `/agent-qa*` |

## Version meta

`skillVersion=2026.09.05.03` · `contentHash=sha256:6f74282b807da7f2cc1aa57ac64848cd1d75ff3383c0f432eaad7bea53fff80e` · `solution_confirm=approve` · `writtenAt=2026-09-25T16:35:00.000Z`
