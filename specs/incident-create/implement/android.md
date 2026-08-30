# Dev — Implement — incident-create (Android)

| Field | Value |
|-------|-------|
| feature | `incident-create` |
| platform | Android · Compose |
| role | `dev` · `/agent-dev-android` · `/dev-android-compose` · `/dev-ui-review` |
| task | `T-AND-INC-CREATE` · queue `task_c05490fb` |
| status | **done** |
| changeScope | `new_page` |
| packKind | **`screen`** |
| route | **route_a** · tab `home` · Home quick/tile → `incident-create` pick→form |
| autoApprove | ON |
| contentHash | sha256:incident-create-control-hint-20260829 |
| updatedAt | `2026-08-29T01:00:00.000Z` |

## Shipped

| Area | Path |
|------|------|
| Feature UI | `presentation/feature/incidentcreate/*` — pick + `#sc-inc-form` |
| Catalog + CHK | `domain/model/AssetKcht32Catalog.kt` · `IncidentCreateModels.kt` |
| Fetch types | `FetchAssetTypesUseCase` · Integration `assetTypes` · local fallback |
| Create body | `CreateIncidentBody.assetLabel` · FieldReflect/CamPatrol `null` |
| Entry | `HomeViewModel` QuickIncident / TileIncident → navigate |
| Nav | `MainTabScreen` route `incident-create` · cam → Field/`cam-patrol` · estimate toast |
| Deny | reuse `GpsDenyDialog` · CameraX still capture |
| Copy | `LinmCopy` `inc.*` VN parity (`GAP-MOB-ALIGN-01` · back icon-only OK) |

## Notes

`/edit-mobile-feature` 2026-08-29: **GAP-MOB-INC-PICK-ALIGN-01** — pick `IntrinsicSize.Min` + `fillMaxHeight` · label 3 dòng · `LinmAssetKchtPict` 36 · **cấm** `Icons.Filled.GridView` · kit local **không** bump · `assembleDebug` **PASS**.

## VERIFY GATE

| Check | Result |
|-------|--------|
| `./gradlew :app:assembleDebug` | **PASS** |
| BFF `dotnet build` | **PASS** (shared) |
| E2E / start:std / mfeStdUrl | **SKIP** (cấm role Dev) |

## Step 4b / BE

Same as iOS — reuse live Create/Detect/asset-types · media Signed **SKIP** P1 · MIG **n/a**.

## AC map

Dual parity with iOS implement · Create `POST incident/incidents` · offline `OfflineQueueKind.Incident` · **cấm** invent `incident-create` API.

## Version meta

| Field | Value |
|-------|-------|
| skillId | agent-dev-android |
| skillVersion | 2026.08.25.01 |
| workflowVersion | 2026.08.25.01 |
| generatedAt | `2026-08-29T01:00:00.000Z` |
| versionGate | rechecked |

---
<!-- Version meta: skillId=agent-dev-android workflowVersion=2026.08.25.01 -->
