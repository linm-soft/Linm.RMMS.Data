# Dev — Implement — incident-detail (iOS)

| | |
|--|--|
| Feature | `incident-detail` |
| Title | [Mobile] [Vấn đề] -> Chi tiết |
| Role | `dev` · `/agent-dev-ios` · `/dev-ios-swiftui` |
| status | **done** · cleanup-mock live-only |
| taskId | `task_53a77d94` |
| packKind | `screen` |
| route_confirm | `route_a` |
| updatedAt | `2026-08-29T03:20:00.000Z` |

## Ship

| Area | Path / note |
|------|-------------|
| Feature | `Presentation/Features/IncidentDetail/{View,ViewModel,UiState}.swift` |
| Domain | `Domain/Entities/IncidentDetailModels.swift` · `Domain/UseCases/IncidentDetailUseCases.swift` |
| Data | `IncidentRepository` + `IncidentRepositoryImpl` · `fetchById` + `close` · expand `IncidentDto` |
| DI | `AppContainer` · `fetchIncidentByIdUseCase` · `closeIncidentUseCase` |
| Router | `AppRouter` · push `#sc-incident-detail` trên Incident stack · list Detail + create success → Id |
| CTA | Giao việc → toast estimate P1 · Bản đồ → field `PatrolMap` · Close → POST + toast **Đã đóng sự cố** |
| Empty 404 / fail | `EmptyChromeView` · GET fail → toast + empty-load-fail · **cấm** demo SSOT |
| Copy | `inc.detail.*` trong `LinmCopy` |

## Bind (real-data §B)

| UI | Source |
|----|--------|
| code | `Code` |
| badge | `Severity` × `Status` VN map |
| type | `Title` ưu tiên · else `IncidentType` |
| loc | `RouteName · Km {KmStart}` |
| gps | `HasGps` + loc · **cấm** fake lat/lng live · demo coords offline only |
| source | `DetectionId` / Tuần đường · empty omit |
| close | `POST incident/incidents/{id}/close` online-only |

## VERIFY GATE

```bash
cd /Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.iOS && xcodegen generate
xcodebuild -scheme LinmRmms -destination 'platform=iOS Simulator,name=iPhone 17 Pro' build
```

| Check | Result |
|-------|--------|
| xcodegen | **PASS** |
| xcodebuild iPhone 17 Pro | **PASS** |
| Step 4b | **N/A** (reuse GetById + Close) |
| e2e | **SKIP** (queued QA) |

## Version meta

| Field | Value |
|-------|-------|
| skillId | agent-dev-ios |
| skillVersion | 2026.08.20.03 |
| schemaVersion | 1 |
| workflowVersion | 2026.08.25.01 |
| rulesVersion | 2026.08.25.2 |
| versionGate | rechecked |
| contentHash | sha256:incident-detail-control-hint-20260829 |
| realDataHash | sha256:incident-detail-mobile-real-data-20260829 |
| bffContentHash | sha256:incident-incidents-getbyid-close-proxy |
| taskId | task_ebf09e82 |

---
<!-- Version meta: skillId=agent-dev-ios skillVersion=2026.08.20.03 schemaVersion=1 workflowVersion=2026.08.25.01 rulesVersion=2026.08.25.2 versionGate=rechecked -->
