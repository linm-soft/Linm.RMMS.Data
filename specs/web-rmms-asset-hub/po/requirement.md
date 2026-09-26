# PO requirement — web-rmms-asset-hub

| Field | Value |
|-------|-------|
| feature | `web-rmms-asset-hub` |
| title | Hub tài sản — wallet · grid nav · AI pending |
| packKind | `list` |
| changeScope | `new_page` |
| formPattern | Mobile Hub / full (phone max-width 430) · **N/A** ERP Modal/Slideout Kind B · **no** master form · **no** CRUD on hub |
| lane | `web` |
| role | `po` · `/agent-po` |
| status | `done` |
| skillId | `agent-po` |
| skillVersion | `2026.09.05.03` |
| schemaVersion | `1` |
| workflowVersion | `2026.09.19.02` |
| rulesVersion | `2026.09.25.2` |
| versionGate | `ok` |
| contentHash | `sha256:6f74282b807da7f2cc1aa57ac64848cd1d75ff3383c0f432eaad7bea53fff80e` |
| demo | **N/A** · **cấm** demo HTML / in-app mock SSOT |
| mfe | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Mobile` |
| mfeStdRoute | `/web-rmms-asset-hub` |
| mfeStdUrl | `http://localhost:9301/web-rmms-asset-hub` |
| nativeRouteCite | SCREENS `/asset` |
| be | `D:/AI-QLBD/Linm.RMMS.WebService` · Mobile.Bff `:5202` · `mobile-bff/api/v1` · domain **Asset** (+ cite AiVision/Gis/Integration) · **cấm ERP.*** |
| prior | data_analy `confirmed` · compact `handoff/data_analy-compact.md` |
| writtenAt | `2026-09-25T13:10:00.000Z` |
| taskId | `task_c5bec39d` |

> Labels: `useFormOptions()` / LinmCopy `assetHub.*` — **cấm** hardcode tiếng Việt trên form.  
> **Cấm** nhét phone Hub vào MFE desktop · **cấm** sửa iOS/Android · **cấm** invent hub CRUD / `GET asset/hub`.

## Goal

Staff (sau login) vào Hub tài sản từ Home: ví hồ sơ RO + 5 tile nav + row bản đồ + section AI pending Draft. Hub **nav-only** — không form, không CRUD. Deep surfaces = peer routes.

## § Screens (ids)

| Id | Zone | AC |
|----|------|----|
| AH-00 | phone frame | max-width 430 · center desktop review · Android icon/layout 1-1 |
| AH-01 | top bar | Back → Home (`web-rmms-home` / `/`) · copy `assetHub.nav.back` |
| AH-02 | wallet | RO: eyebrow · title (road-routes) · subtitle (asset-types count) · tap **không** nav |
| AH-03 | tile grid | kcht → `/asset/kcht` · list → `/asset/list` |
| AH-04 | thu thập | collect → `/asset/collect` · ai → `/asset/ai` |
| AH-05 | quản lý | adjust → `/asset/adjust` |
| AH-06 | bản đồ row | → `/gis` · **không** load geojson trên Hub |
| AH-07 | AI pending | Draft rows từ candidates · CTA → HITL peer · **ẩn khi empty** |

## § Leave / Out (HARD)

| Out | Owner |
|-----|-------|
| `/me*` · me-profile · me-settings · feedback · cam-view | **cấm** render trên Hub |
| Sibling CRUD deep (list/collect/ai/adjust/kcht/gis bodies) | peer features — Hub chỉ Button/Nav |
| Field 2 cửa · journal · kết ca · tồn tại · tần suất | `web-rmms-shell` / `web-rmms-mobile-a`…`e` |
| DES-GRID / LinErpListFilterBar Kind B | **N/A** phone Hub |
| Invent wallet controller / hub domain API | **cấm** |
| ERP.* / Domains/Master | **cấm** |
| Fake GPS · hardcode VN labels · sửa native | **cấm** |

## Grid AC (packKind=list)

| Rule | Hub |
|------|-----|
| LinErpListFilterBar / DES-GRID-* | **N/A** — phone Hub · tiles = Button/Nav · **không** desktop filter bar |
| Empty / loading / error | wallet + AI pending: skeleton/empty hide · toast error · **cấm** `window.alert` |
| Auth | session staff required · guest → login peer |

## FormMode ↔ API (Hub)

| uiField | controlHint | Mode | API |
|---------|-------------|------|-----|
| nav.back | Button/Nav | nav | — → Home |
| wallet.eyebrow | Text RO | RO | LOOKUP_STATIC / copy |
| wallet.title | Text RO | RO | `GET integration/road-routes/search` |
| wallet.subtitle | Text RO | RO | `GET integration/asset-types` (count) |
| tile.kcht | Button/Nav | nav | → `/asset/kcht` |
| tile.list | Button/Nav | nav | → `/asset/list` |
| tile.collect | Button/Nav | nav | → `/asset/collect` |
| tile.ai | Button/Nav | nav | → `/asset/ai` |
| tile.adjust | Button/Nav | nav | → `/asset/adjust` |
| row.gis | Button/Nav | nav | → `/gis` |
| ai.pending | ListRow | RO list | `GET ai-vision/asset-candidates` (Draft) |
| ai.pendingCta | Button/Nav | nav | → HITL peer · hide if empty |

**BFF:** ONLY `http://localhost:5202` · `mobile-bff/api/v1` · Web BFF cite-only · **cấm** base client.

## GPS

| Surface | Rule |
|---------|------|
| AH-00…07 Hub | **không** bắt GPS |
| Deep collect/AI | peer · `navigator.geolocation` · deny → disable nút cần tọa độ · **cấm** fake |

## DoD (PO → Design)

1. Phone ≤430 · zones AH-00…07 · Android 1-1 parity.
2. Wallet RO live bind (road-routes + asset-types count) · GAP-F-AHUB-01 wallet title org — demo copy đến khi live · **không invent** API.
3. 5 tiles + row GIS đúng route bảng trên.
4. AI pending Draft list · empty ẩn · no confirm/dismiss trên Hub.
5. No `me*` · no hub CRUD · Mobile.Bff only · **cấm ERP.***.
6. Labels via `useFormOptions` / `assetHub.*`.
7. Design: prototype + `reviewUrl` · SA: DOMAIN-MAP row `web-rmms-asset-hub`.

## UNCLEAR (carry · autoApprove)

| id | Decision / owner |
|----|------------------|
| UNCLEAR-DOMAIN-MAP-AHUB | **SA** thêm DOMAIN-MAP row `web-rmms-asset-hub` · Asset + cite AiVision/Gis/Integration |
| UNCLEAR-WALLET-ORG | **PO accept** GAP-F-AHUB-01 · wallet title demo/copy đến live org · **cấm invent** API |
| UNCLEAR-STD-ROUTE | **PO chốt** ship `mfeStdRoute=/web-rmms-asset-hub` (STATUS URL) · shell alias `/asset` nếu cần (Design/Dev) |

## Handoff Design

| Need | Value |
|------|-------|
| zones | AH-00…07 ids only |
| phoneFrame | max-width 430 |
| inventory | navBack · wallet.* · tile×5 · rowGis · aiPending |
| reviewUrl | Design chốt |
| peerStdUrl | `http://localhost:9301/web-rmms-asset-hub` |
| DES-GRID | N/A |
| copy keys | `assetHub.*` |

## Version meta

`skillVersion=2026.09.05.03` · `schemaVersion=1` · `contentHash=sha256:6f74282b807da7f2cc1aa57ac64848cd1d75ff3383c0f432eaad7bea53fff80e` · `rulesVersion=2026.09.25.2` · `writtenAt=2026-09-25T13:10:00.000Z`
