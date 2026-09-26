# Design — web-rmms-asset-hub

| Field | Value |
|-------|-------|
| feature | `web-rmms-asset-hub` |
| title | Hub tài sản — wallet · tiles · AI pending |
| this role | `design` · `/agent-design` |
| status | `confirmed` (autoApprove=ON) |
| design_confirm | **approve** (`task_a4670627`) |
| changeScope | `new_page` |
| packKind | **`list`** (PO · UI = **phone Hub** · **≠** Kind B desktop) |
| lane | `web` |
| stack | `web_mfe_phone` · `Linm.Web.RMMS.Mobile` · `max-width: 430px` |
| formPattern | Mobile **Hub / full** · **không** ERP Modal/Slideout Kind B · **không** master form · **không** CRUD trên hub |
| DES-GRID / LinErpListFilterBar | **N/A** — phone Hub tiles · **cấm** clone |
| Report AC / DES-RPT | **N/A** |
| shared_grid_example | **N/A** (phone) |
| real_view_parity | **v1** |
| peerStdUrl | `http://localhost:9301/web-rmms-asset-hub` |
| mfeStdUrl | `http://localhost:9301/web-rmms-asset-hub` |
| mfeStdRoute | `/web-rmms-asset-hub` |
| nativeRouteCite | SCREENS `/asset` · alias nếu shell cần |
| reviewUrl | `file:///D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-asset-hub/ui/prototype/index.html` |
| demo | **N/A** · hash skip · **cấm** re-scan (**GAP-DES-DEMO-RESCAN-01**) |
| mfe | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Mobile` |
| beRepo | `D:/AI-QLBD/Linm.RMMS.WebService` · Asset (+cite AiVision/Gis/Integration) · Mobile.Bff `:5202` · **cấm ERP.*** |
| controlHint | `specs/_data-analy/features/web-rmms-asset-hub-control-hint.md` |
| realData | `specs/_data-analy/features/web-rmms-asset-hub-real-data.md` · §A+§B PASS |
| prior | PO `confirmed` · `handoff/po-compact.md` · contentHash `sha256:6f74282b807da7f2cc1aa57ac64848cd1d75ff3383c0f432eaad7bea53fff80e` |
| autoApprove | **ON** |
| e2eQa | ON queued `/agent-qa*` · **cấm** e2e / `yarn start:std` ở Design |
| `devSlash` | `/agent-dev` |
| updatedAt | `2026-09-25T13:20:00.000Z` |
| taskId | `task_a4670627` |
| skillId | `agent-design` |
| skillVersion | `2026.09.05.03` |
| schemaVersion | `1` |
| workflowVersion | `2026.09.19.02` |
| rulesVersion | `2026.09.25.2` |
| versionGate | `ok` |
| contentHash | `sha256:6f74282b807da7f2cc1aa57ac64848cd1d75ff3383c0f432eaad7bea53fff80e` |

**Cấm:** Dev/BE trước confirm (đã autoApprove) · ERP.* · iOS/Android native dual · Kind B DES-GRID · `LinErpListFilterBar` · invent hub CRUD / `GET asset/hub` · invent `me*` / feedback / cam-view · fake GPS · hardcode label keys ngoài `useFormOptions` · native `alert`/`confirm` · re-scan demo · `yarn build` / e2e / start:std ở role này · gộp sibling CRUD vào slug hub.

## 0. Context / Demo

| ID | Path | Notes |
|----|------|-------|
| CTX-01 | `docs/context/features/web-rmms-asset-hub.md` | feature Hub |
| CTX-02 | `docs/plan/web-rmms-mobile/SCREENS.md` | `/asset` Hub · GPS: không |
| CTX-03 | `docs/context/features/asset-hub.md` | peer zones DES-MOB-* |
| CTX-04 | `docs/context/features/web-rmms-home.md` | entry grid/wallet → `/asset` |
| DEM | — | **N/A** · hash skip |
| DA-01 / DA-02 | `_data-analy/features/web-rmms-asset-hub-{control-hint,real-data}.md` | inventory + §B |
| PO | `po/requirement.md` | Hub AC · STD route chốt |
| tokens | `docs/mobile-tokens.json` | primary `#0C84C0` · phone 430 |

## 1. Pattern & ownership

| | |
|--|--|
| Frame | Phone **430px** · tokens primary `#0C84C0` · label **13** · field **≥16** (**GAP-TYP-01**) · Android icon/layout **1-1** |
| Hub owns | **AH-00…07** content only · wallet RO · tiles/rows nav · AI pending Draft |
| Peer owns | Sibling deep `/asset/kcht|list|collect|ai|adjust` · `/gis` · HITL · Field a…e · shell TabBar |
| DES-LEAVE | **N/A** — Hub không form dirty |
| Out | `/me*` · feedback · cam-view · sibling CRUD surfaces · Field 2-door deep · journal/kết ca/tồn tại/tần suất (b–e) · invent hub wallet API |

## 2. Screens / zones

| Zone | Route | Surface | Wire |
|------|-------|---------|------|
| **AH-00** | phone | Frame | max-width 430 · center desktop review · Android 1-1 |
| **AH-01** | top bar | Header | navBack → Home (`web-rmms-home` / `/`) |
| **AH-02** | wallet | Card RO | eyebrow · title (road-routes) · subtitle (asset-types count) · **tap không nav** |
| **AH-03** | tile grid | 2-col | tileKcht → `/asset/kcht` · tileList → `/asset/list` |
| **AH-04** | thu thập | 2-col | tileCollect → `/asset/collect` · tileAi → `/asset/ai` |
| **AH-05** | quản lý | 1-col / row | tileAdjust → `/asset/adjust` |
| **AH-06** | bản đồ | ListRow | rowGis → `/gis` |
| **AH-07** | AI pending | List + CTA | Draft rows `asset-candidates` · tap HITL peer · **ẩn khi empty** |

### IA

```
(auth staff) → AH-00 + AH-01 back + AH-02 wallet RO
  + AH-03 tiles (kcht · list)
  + AH-04 tiles (collect · ai)
  + AH-05 tile (adjust)
  + AH-06 row → /gis
  + AH-07 Draft list + CTA (hide if [])
(guest) → shell login gate · không silent empty Hub
wallet title: GET road-routes/search · GAP-F-AHUB-01 demo copy nếu thiếu live org
wallet subtitle: count GET asset-types
```

## 3. Field inventory (Control = controlHint)

| uiField | screen | controlHint | Required | Bind / notes |
|---------|--------|-------------|----------|--------------|
| phoneFrame | AH-00 | Layout | * | max-width 430 · center review |
| navBack | AH-01 | Button/Nav | * | → Home · `assetHub.nav.back` |
| walletEyebrow | AH-02 | Text RO | * | `assetHub.wallet.eyebrow` |
| walletTitle | AH-02 | Text RO | * | `GET integration/road-routes/search` · GAP-F-AHUB-01 |
| walletSubtitle | AH-02 | Text RO | * | count `GET integration/asset-types` |
| tileKcht | AH-03 | Button/Nav | * | → `/asset/kcht` · `assetHub.tile.kcht` |
| tileList | AH-03 | Button/Nav | * | → `/asset/list` · `assetHub.tile.list` |
| tileCollect | AH-04 | Button/Nav | * | → `/asset/collect` · `assetHub.tile.collect` |
| tileAi | AH-04 | Button/Nav | * | → `/asset/ai` · `assetHub.tile.ai` |
| tileAdjust | AH-05 | Button/Nav | * | → `/asset/adjust` · `assetHub.tile.adjust` |
| rowGis | AH-06 | Button/Nav | * | → `/gis` · `assetHub.row.gis` |
| aiPendingRow | AH-07 | ListRow | empty-hide | `GET ai-vision/asset-candidates` Draft · tap HITL |
| aiPendingCta | AH-07 | Button/Nav | empty-hide | → HITL sibling · `assetHub.ai.cta` |

**Labels:** `useFormOptions()` / copy keys — prototype hiện nhãn nghiệp vụ VN để review; Dev wire key.  
**GPS:** Hub **không** capture · deep = peer · deny → disable coords · **cấm** fake.  
**REMOVED:** me / me-profile / me-settings / feedback / cam-view.

## 4. Prototype (REQUIRED)

| | |
|--|--|
| Artifact | `ui/prototype/index.html` |
| Zones | AH-00 · AH-01 · AH-02 · AH-03 · AH-04 · AH-05 · AH-06 · AH-07 |
| Form | **none** master · tiles/rows nav only |
| Grid/filter desktop | **N/A** |
| SSOT | `design-prototype-review` · `design-real-view-parity` · control-hint · mobile-tokens |
| **reviewUrl** | `file:///D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-asset-hub/ui/prototype/index.html` |
| **peerStdUrl** | `http://localhost:9301/web-rmms-asset-hub` |
| **real_view_parity** | `v1` |

### Wire

```
AH-00: phoneFrame 430
AH-01: [‹ back] title Hub tài sản
AH-02: wallet card RO — eyebrow · route title · «N loại tài sản»
AH-03: [Hạng mục] [Danh sách]
AH-04: [Thêm thủ công] [Camera AI]
AH-05: [Cập nhật / bớt]
AH-06: row [Xem bản đồ] → /gis note
AH-07: Draft rows + CTA · board Empty ẩn section
Board: Staff+pending | Empty AI | Wallet error toast (cấm alert)
```

## 5. API map (cite real-data §B)

| Action | API |
|--------|-----|
| Wallet title | `GET mobile-bff/api/v1/integration/road-routes/search` |
| Wallet subtitle | `GET mobile-bff/api/v1/integration/asset-types` (count) |
| AI pending | `GET mobile-bff/api/v1/ai-vision/asset-candidates` · status=Draft |
| Tiles / GIS | nav only · peer owners |
| Back | nav Home only |

**BFF:** Mobile.Bff `:5202` · `mobile-bff/api/v1` · **cấm** Web BFF base client · **cấm ERP.***  
Empty candidates → ẩn AH-07 · error/503 → toast in-app · **cấm** `window.alert`.  
**Cấm** invent Hub domain CRUD / wallet controller.

## 6. DES checklist

| ID | Result |
|----|--------|
| DES-A zones AH-* | **PASS** |
| DES-B control = controlHint | **PASS** |
| DES-C prototype + reviewUrl | **PASS** |
| DES-D Leave dirty | **N/A** (no Hub form) |
| DES-GRID / DES-RPT | **N/A** phone Hub |
| real_view_parity | **v1** |
| Android 1-1 / no me | **PASS** |

## 7. UNCLEAR (carry)

| id | Action |
|----|--------|
| UNCLEAR-DOMAIN-MAP-AHUB | SA thêm DOMAIN-MAP row `web-rmms-asset-hub` · Asset + cite |
| UNCLEAR-WALLET-ORG | **PO accept GAP-F-AHUB-01** · demo copy · **không invent** API |
| UNCLEAR-STD-ROUTE | **PO chốt** `mfeStdRoute=/web-rmms-asset-hub` · alias `/asset` nếu shell cần |

## 8. Handoff

| Role | Need |
|------|------|
| SA | DOMAIN-MAP row · Mobile.Bff paths confirm · **cấm** invent hub CRUD |
| TL | Tasks Hub page + nav stubs · wallet + candidates |
| Dev | `/agent-dev` · MFE Mobile Hub only · deep = peer routes |
| QA | Tiles routes · wallet · pending empty/hide · phone 430 · no me · e2e queued |

## Version meta

`skillVersion=2026.09.05.03` · `schemaVersion=1` · `contentHash=sha256:6f74282b807da7f2cc1aa57ac64848cd1d75ff3383c0f432eaad7bea53fff80e` · `rulesVersion=2026.09.25.2` · `updatedAt=2026-09-25T13:20:00.000Z` · `design_confirm=approve` · `taskId=task_a4670627`
