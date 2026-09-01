# Implement — so-ts-rescue-station

| Field | Value |
|-------|-------|
| feature | `so-ts-rescue-station` |
| role | `dev` · `/agent-dev` |
| status | **done** |
| changeScope | `new_page` |
| packKind | `list` |
| typeCode | `RESCUE_STATION` |
| taskId | `task_2f84d6b5` |
| mfeStdRoute | `/so-ts?type=RESCUE_STATION` |
| mfeStdUrl | `http://localhost:9301/so-ts?type=RESCUE_STATION` |
| alias | `/so-ts-rescue-station` → `/so-ts?type=RESCUE_STATION` |
| API | `api/v1/asset/road-assets` |
| migration | **none** |
| writtenAt | `2026-09-01T09:45:00.000Z` |
| yarn typecheck | **PASS** |
| webpack prod | **PASS** (`--parallelism=1` · Node24 OOM workaround) |
| yarn build (default parallel) | **OOM** Node24 Zone Allocation — debt below |
| dotnet build | **PASS** |
| e2eQa | queued `/agent-qa*` only — **not run** |

## Delta shipped

| Area | Change |
|------|--------|
| BE init | `storedBuildingGrades[]` · `vitriOptions[]` (+ seed ∪ dump) · keep office/aux grades |
| BE CRUD | RESCUE_STATION validate: name/kmFrom optional · prefix `CN-` · **no** IsWeak→đoạn · no required dump key |
| FE list | Profile hide type/kmTo/qty/unit + peer type cols · **ON mẫu** materials/site/office/aux/stored grades+areas · titles Công trình cứu hộ |
| FE form | S-ATTR editable dump §4 · Dropdown LOOKUP · name←`name_building` «Tên kho bãi» · ẩn kmTo/SL/ĐVT · LeaveConfirmModal reuse |
| Route | alias Navigate board |
| CTX | `so-ts-rescue-station-filter-bar.md` · context track `dev=done` |
| Labels | dumpSpecLabels materials_in_store · stored_building_* · vitri |

## Files (key)

**MFE** `Linm.Web.RMMS.Asset`
- `src/pages/AssetListPage/AssetListPage.tsx`
- `src/pages/AssetFormPage/AssetFormPage.tsx`
- `src/services/asset/dumpSpecLabels.ts` · `lookups.ts` · `endpoint.ts`
- `src/index.tsx`

**BE** `Linm.RMMS.WebService`
- `api/domains/asset/LINM.RMMS.Asset.Models/DTOs/RoadAssetDtos.cs`
- `api/src/RMMS.Service.Api/Domains/Asset/Services/RoadAssetService.cs`

**Data**
- `docs/context/features/so-ts-rescue-station-filter-bar.md`
- `docs/context/features/so-ts-rescue-station.md`

## GAP close

GAP-SOTS-COL/FORM/REUSE · GAP-RS-NAME/SPEC/POINT/LOOKUP/LEAVE/ROUTE · GAP-RS-TILE-01 (no tile invent) — **closed** P1 · flatten DEFER P2

## new_page.ssot_rereview

**pass** · checklist: grid profile · filter-bar V1–V5 context · form 5col · leave Modal · dumpSpecLabels · init LOOKUP

## Debt / QA

- Auth perm align DEFER
- E2E T-QA-* queued QA only
- `yarn build` default parallel OOM on Node 24 — use `--parallelism=1` (or pin Node 20 LTS)
- KCHT ô `—` kept · **cấm** invent RESCUE_STATION tile

## Next

role: `qa` · `/agent-qa*` · scenarios + e2e on mfeStdUrl
