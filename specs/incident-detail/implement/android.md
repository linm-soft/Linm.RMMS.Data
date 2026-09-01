# Dev — Implement — incident-detail (Android)

| | |
|--|--|
| Feature | `incident-detail` |
| Title | [Mobile] [Vấn đề] -> Chi tiết |
| Role | `dev` · `/agent-dev-android` · `/dev-android-compose` |
| status | **done** · cleanup-mock live-only |
| taskId | `task_53a77d94` |
| packKind | `screen` |
| route_confirm | `route_a` |
| updatedAt | `2026-08-29T03:20:00.000Z` |

## Ship

| Area | Path / note |
|------|-------------|
| Feature | `presentation/feature/incidentdetail/{IncidentDetailScreen,ViewModel,UiState}.kt` |
| Domain | `domain/model/IncidentDetailModels.kt` · `domain/usecase/IncidentDetailUseCases.kt` |
| Data | `ApiService` `@GET/{id}` + `@POST/{id}/close` · repo `fetchById`/`close` · expand `IncidentDto` |
| Nav | `IncidentStack` + `HomeStack` · `incident-detail/{id}` · list Detail + create Posted → navigate |
| CTA | estimate toast P1 · map → Field/`patrol-map` · Close POST + toast **Đã đóng sự cố** |
| Empty 404 / fail | app `EmptyChrome` · GET fail → toast + empty-load-fail · **cấm** demo SSOT |
| Copy | `inc.detail.*` trong `LinmCopy` |
| Title | **Chi tiết sự cố** · code hero **24** · back icon-only |

## Bind

Cùng iOS / real-data §B · badge VN map · demo SC-2401 offline · HasGps (Lat/Lng DEFER).

## VERIFY GATE

```bash
cd /Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.Android && ./gradlew :app:assembleDebug
cd /Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.Bff && dotnet build
```

| Check | Result |
|-------|--------|
| assembleDebug | **PASS** |
| BFF `dotnet build` | **PASS** |
| Step 4b | **N/A** |
| e2e | **SKIP** (queued QA) |

## Version meta

| Field | Value |
|-------|-------|
| skillId | agent-dev-android |
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
<!-- Version meta: skillId=agent-dev-android skillVersion=2026.08.20.03 schemaVersion=1 workflowVersion=2026.08.25.01 rulesVersion=2026.08.25.2 versionGate=rechecked -->
