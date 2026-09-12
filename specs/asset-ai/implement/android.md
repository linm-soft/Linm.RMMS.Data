# Dev — Implement — asset-ai (Android)

> Status: **done** · `task_5bdb7bcf` · `/agent-dev-android` · 2026-09-01T17:20:00.000Z

| | |
|--|--|
| Feature | `asset-ai` |
| Title | [Mobile] [Tài sản] -> Camera AI |
| Role | `dev-android` · `T-AND-ASSET-AI` |
| Screen | `#sc-asset-ai` · `DES-MOB-ASSET-AI` · packKind **sheet** |
| Entry | hub `TileAI` → `navigate("asset-ai")` |
| HITL | toast Code · `navigate("det-hitl/{id}")` · **cấm** Confirm/Dismiss |
| Step 4b | **N/A** |

## Shipped paths

| Area | Path |
|------|------|
| UI | `presentation/feature/assetai/AssetAiScreen.kt` · `AssetAiViewModel.kt` · `AssetAiUiState.kt` |
| Hub wire | `AssetHubViewModel.setOnOpenAi` · `MainTabScreen` routes `asset-ai` · `det-hitl/{id}` |
| API | `ApiService` init/put/complete/detect-assets · `AiVisionRepositoryImpl` |
| Use cases | `domain/usecase/AssetAiUseCases.kt` |
| Copy | `LinmCopy` `asset.ai.*` · `asset.detHitl.*` |

## APIs (parity iOS)

- uploads init + object (+ complete → ImageUrl) · `POST ai-vision/detect-assets`
- CameraX still · GPS deny · offline toast · Score% show

## Verify

- `./gradlew assembleDebug` → **PASS**
- Mobile.Bff `dotnet build` → **PASS** (shared)

## Debt

- Sibling full HITL Confirm/Dismiss · nearby optional
