# Dev — Implement — supervise (Android)

> Status: **done** · `/agent-dev-android` · `/dev-android-compose` · `/android-new-screen` · `/android-new-api-call` · `/dev-ui-review` · `/convert-web-icon-to-mobile`  
> task `task_e29847e6` · T-AND-SUPERVISE

| Feature | `supervise` |
| assembleDebug | **PASS** |
| Kit | `LinmTopBar` · `LinmSegment` · `LinmToast` (via `LoginToastHub`) · `LinmMapPinGlyph` · `LinmBusyOverlay` · card = feature composition |

## Layers

| Presentation | `presentation/feature/supervise/SuperviseScreen.kt` · `SuperviseViewModel.kt` · `SuperviseUiState.kt` · `MainTabScreen` `navigate("supervise")` |
| Domain | `FetchSuperviseCheckinsUseCase` · `SuperviseCopy.orgFallback` · `SuperviseCopy.demoItems` |
| Data | `SuperviseRepositoryImpl` · `SuperviseDtoMapper.checkin` · `ApiService.attendanceLogs` · `GET patrol/attendance-logs` |

## IA / API

Dual parity iOS · route_a push · demo fallback.  
**DELTA:** gỡ `Icons.Default.Business` / `Place` (Filled) → `#i-building` Path `d=` + `LinmMapPinGlyph` (`GAP-MOB-ICON-02`). Empty `Note` → «Tổ tuần đường · VP-IV.1».  
E2E tags: `sc-supervise` · `btn-sup-back` · `btn-sup-filter` · `sup-segment` · `sup-card-*`.

## VERIFY GATE

`./gradlew :app:assembleDebug` **BUILD SUCCESSFUL**.

## Notes

Step 4b / T-BE **N/A** — reuse attendance-logs. **Cấm** `AlertDialog` · **cấm** invent kit `LinmRichCheckinCard`.
