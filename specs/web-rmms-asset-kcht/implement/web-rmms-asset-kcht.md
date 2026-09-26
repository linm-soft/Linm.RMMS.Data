# Implement — web-rmms-asset-kcht

> Status: **done** · `/agent-dev` · task `task_00503b01` · 2026-09-25T14:10:00.000Z  
> autoApprove ON · e2eQa queued `/agent-qa*` · **cấm** e2e ở Dev

| | |
|--|--|
| Feature | `web-rmms-asset-kcht` |
| Title | Hạng mục tài sản — type-grid KCHT |
| Role | `dev` · `/agent-dev` |
| packKind | `list` |
| changeScope | `new_page` |
| formPattern | Mobile type-grid / full · phone 430 · N/A ERP Modal/Slideout · no master CRUD · no POST/PUT |
| domain | **Integration** (`asset-type`) · cite Asset |
| mfe | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Mobile` |
| mfeStdRoute | `/web-rmms-asset-kcht` |
| mfeStdUrl | `http://localhost:9301/web-rmms-asset-kcht` |
| nativeRouteCite | SCREENS `/asset/kcht` → Navigate alias |
| be | `D:/AI-QLBD/Linm.RMMS.WebService` · Mobile.Bff `:5202` · **cấm ERP.*** |
| contentHash | `sha256:6f74282b807da7f2cc1aa57ac64848cd1d75ff3383c0f432eaad7bea53fff80e` |
| skillVersion | `2026.09.05.03` |
| Step 4b | **skip** · Live GET only · no API Mới / entity / migration |

## 1. DoD vs T-*

| ID | Result |
|----|--------|
| T-01 | Route + shell AK-00…02 · `mfe.routes.json` · lazy chunk · alias `/asset/kcht` · Hub tile → STD |
| T-02 | Live GET `mobile-bff/api/v1/integration/asset-types` · tiles code/name/icon · **cấm** invent kcht API |
| T-03 | Client search P1 (name/code fold) · empty/error/retry · toast no alert |
| T-04 | typeTap → `/asset/list?type={code}` · navBack → `/web-rmms-asset-hub` |
| T-05 | Auth guest gate · phone 430 · labels `useFormOptions('web-rmms-asset-kcht')` / `assetKcht.*` · GPS none · no hardcode 32/36 |

## 2. Files (MFE)

| Path | Role |
|------|------|
| `src/pages/WebRmmsAssetKcht/*` | Layout · Page · paths · lookupStatic · CSS |
| `src/services/assetKcht/*` | endpoint + types |
| `src/index.tsx` | lazy routes + `/asset/kcht` alias |
| `mfe.routes.json` | `web-rmms-asset-kcht` |
| `src/dev/devRoutes.ts` | Dev board |
| `src/pages/WebRmmsAssetHub/paths.ts` | `kcht` → `/web-rmms-asset-kcht` |

## 3. Live API

| Method | Client path | Bind |
|--------|-------------|------|
| GET | `/integration/asset-types?page=1&pageSize=200` | AK-04 tiles |

- Base: `VITE_MOBILE_API_URL` → `…/mobile-bff/api/v1`
- Write: **none** · Step 4b / BFF controller: **reuse** `AssetTypesBffController`

## 4. Verify gate

| Check | Result |
|-------|--------|
| `yarn build` (MFE) | **PASS** (chunk `web-rmms-asset-kcht`) |
| `dotnet build` (BE) | **PASS** (no code delta · align skip) |
| E2E / `yarn start:std` | **skipped** · QA owns |

## 4b. Notes — icon SSOT (edit-web-feature 2026-09-25)

- AK-04 pict = local copy `src/shared/map/mapAssetIcons.ts` (from GIS). Import path `../../shared/map/mapAssetIcons` — webpack alias `@linm/rmms-map-asset-icons` did not resolve on the dev server.
- Resolve: `kchtIconCode` = `assetCodeForType(type)` · closest only when that returns `TS` (`ANTI_GLARE`/`TRAFFIC_ISLAND`→`GPC`, `CRASH_CUSHION`→`HL`, `TRAFFIC_SIGNAL`→`CS`, `GREEN`→`NL`).
- Removed letter badge `tileIconLabel` (2-char slice of `code`).
- Prototype `ui/prototype/index.html` loads Demo `rmms-map-asset-icons.js` with the same `iconCode`.
- Verify: `yarn typecheck` PASS · `yarn build` PASS · chunk `web-rmms-asset-kcht` contains GIS SVG (`viewBox 0 0 28 34`). Live click on `:9301` not re-run in this edit.

## 5. Debt / handoff QA

- Peer `/asset/list` may be placeholder until list feature STD — TAP query wired.
- OMS form-options key `web-rmms-asset-kcht` — fallback LOOKUP_STATIC when OMS missing.
- DES-GRID / LinCatalogUiSchemaEditorModal: **N/A** phone type-grid.

## Version meta

`skillVersion=2026.09.05.03` · `contentHash=sha256:6f74282b807da7f2cc1aa57ac64848cd1d75ff3383c0f432eaad7bea53fff80e` · `writtenAt=2026-09-25T14:10:00.000Z` · `taskId=task_00503b01`
