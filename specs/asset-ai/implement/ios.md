# Dev — Implement — asset-ai (iOS)

> Status: **done** · `task_5bdb7bcf` · `/agent-dev-ios` · 2026-09-01T17:20:00.000Z

| | |
|--|--|
| Feature | `asset-ai` |
| Title | [Mobile] [Tài sản] -> Camera AI |
| Role | `dev-ios` · `T-IOS-ASSET-AI` |
| Screen | `#sc-asset-ai` · `DES-MOB-ASSET-AI` · packKind **sheet** |
| Entry | hub tile Camera AI → `showAssetAi` push (toast stub removed) |
| HITL | toast Code · push `DetHitlEnqueueView` + Id · **cấm** Confirm/Dismiss |
| Step 4b | **N/A** |

## Shipped paths

| Area | Path |
|------|------|
| UI | `Presentation/Features/AssetAi/AssetAiView.swift` · `AssetAiViewModel.swift` · `AssetAiUiState.swift` · `DetHitlEnqueueView.swift` |
| Hub wire | `AssetHubViewModel.setOnOpenAi` · `AppRouter` `showAssetAi` |
| API | `AiVisionRepository` uploadFrame + detectAssets · `Data/Dto/AiVisionUploadDto.swift` · `putRaw` / `putAbsolute` |
| Use cases | `Domain/UseCases/AssetAiUseCases.swift` |
| DI | `AppContainer` upload + detectAssets |
| Copy | `LinmCopy` `asset.ai.*` · `asset.detHitl.*` |

## APIs (BFF prefix)

- `POST ai-vision/uploads/init` → `PUT …/uploads/{id}/object` (or presign) → `POST …/uploads/complete` → ImageUrl
- `POST ai-vision/detect-assets` → bind AssetClass / Score% / Code / Id
- Prefill: `GET patrol/sessions` · `GET integration/road-routes/search`
- **cấm** invent `api/v1/asset-ai` · mock:// · fake GPS

## Verify

- `xcodegen generate` · `xcodebuild -scheme LinmRmms -destination 'platform=iOS Simulator,name=iPhone 17 Pro' build` → **PASS**
- Mobile.Bff `dotnet build` → **PASS** (shared)

## Debt

- Full HITL Confirm/Dismiss UI = sibling `det-hitl` (enqueue surface only shipped)
- Nearby soft-warn optional P2
