# Team lead — Task — patrol-map

| Field | Value |
|-------|-------|
| feature | `patrol-map` |
| this role | `team_lead` · `/agent-tl-mobile` |
| status | `confirmed` |
| packKind | **`map`** |
| route_confirm | **route_a** — hub hero/row **push** `#sc-patrol-map` · back pop · sibling check-in **toast** · **cấm** mfeStdUrl |
| autoApprove | **ON** |
| taskId | `task_eae07681` |
| updatedAt | `2026-08-20T01:47:00.000Z` |

## Source lock

| Key | Value |
|-----|-------|
| ios | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.iOS` |
| android | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.Android` |
| bff | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.Bff` |
| be | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.WebService` |
| kit | chrome reuse · map **feature** MapKit / osmdroid |
| Step 4b | **N/A** |

## Tasks

| id | layer | status | DoD |
|----|-------|--------|-----|
| T-KIT | kit | **n/a** | |
| **T-IOS-PAT-MAP** | ios | pending | MapKit · wrap chips `ChipWrap` · pin-here loc+zoom+pin `.here` · toast deny/timeout · **cấm** fake lat/lng · `xcodegen` + `xcodebuild` dest **iPhone 17 Pro** PASS · `implement/ios.md` |
| **T-AND-PAT-MAP** | android | pending | Same · osmdroid · `FlowRow` chips · `ACCESS_FINE_LOCATION` · zoom 16.5 follow · `assembleDebug` PASS · `implement/android.md` |
| T-BE-* | be | **n/a** | |
| T-QA-PAT-MAP | qa | pending | `yarn e2e-qa-mobile` slug `patrol-map` |

## T-IOS-PAT-MAP

`Presentation/Features/PatrolMap/*` · `GetCurrentLocationUseCase` + `CoreLocationReader` · `NSLocationWhenInUseUsageDescription`. Pin-here: loc → pin `.here` primary · camera follow span `0.006` · toast. Bar/legend `ChipWrap`. **Cấm** revert toast-only.

## T-AND-PAT-MAP

`presentation/feature/patrolmap/*` · `GetCurrentLocationUseCase` + `AndroidLocationReader` · Manifest FINE+COARSE. Pin-here: loc → pin Here · zoom 16.5 animateTo · toast. Bar/legend `FlowRow`. Same DoD.

## Out of scope

Check-in sheet · Kind E POST · GIS pins · WebView Leaflet.
