# BFF route map — RMMS mobile

**Skill:** `/build-mobile-app` Step 1 · align 2026-08-18  
**Repo:** `{QlbdRoot}/Linm.RMMS.Mobile.Bff`  
**Prefix:** `mobile-bff/api/v1` · host `{BffBase}` = `http://localhost:5202`  
**App `ApiClient.base`:** `{BffBase}/mobile-bff/api/v1`

App **không** gọi `:5101` / `:5001` / domain API. Downstream = BFF `ApiBase` → `RMMS.Service.Api`.  
Auth package: `ServiceEndpoints:AuthenticationService` → rewrite `mobile-bff` → `web-bff` on host.

## Prefix + endpoints (aligned)

| Layer | Value |
|-------|--------|
| `{BffPrefix}` | `mobile-bff/api/v1` |
| `{BffBase}` local | `http://localhost:5202` |
| Domain `ApiBase` | `http://localhost:5101` (Docker `http://linm-rmms-api:8080`) |
| `ServiceEndpoints:AuthenticationService` | `http://localhost:5003` (Docker `http://host.docker.internal:5003`) |
| BFF controller | `MobileApiProxyController` catch-all `{**path}` — **không** thiếu proxy |
| Auth | `Linm.Platform.Authentication.Bff` · **cấm** clone AuthController |

## App path → Mobile.Bff → domain API

| `{BffPrefix}` path | BFF | Downstream | Notes |
|--------------------|-----|------------|-------|
| `auth/*` | Auth package + `AuthPrefixRewriteMiddleware` | `ServiceEndpoints:AuthenticationService` | login / refresh / logout |
| `asset/*` | `MobileApiProxyController` | `api/v1/asset` | DOMAIN-MAP |
| `ai-vision/*` | proxy | `api/v1/ai-vision` | |
| `gis/*` | proxy | `api/v1/gis` | |
| `patrol/*` | proxy | `api/v1/patrol` | |
| `incident/*` | proxy | `api/v1/incident` | |
| `maintenance/*` | proxy | `api/v1/maintenance` | |
| `workflow/*` | proxy | `api/v1/workflow` | |
| `notification/*` | proxy | `api/v1/notification` | |
| `iot/*` | proxy | `api/v1/iot` | |
| `cameras/*` | proxy | `api/v1/cameras` | |
| `copilot/*` | proxy | `api/v1/copilot` | |
| `report/*` | proxy | `api/v1/report` | |
| `contract/*` | proxy | `api/v1/contract` | |
| `contract-accounts/*` | proxy | `api/v1/contract-accounts` | session-window |
| `drone/*` | proxy | `api/v1/drone` | |
| `integration/*` | proxy | `api/v1/integration` | |
| `citizen/*` | proxy | `api/v1/citizen` | alias |
| `document-history/*` | proxy | `api/v1/document-history` | |
| `public/*` | proxy | `api/v1/public` | |
| `jobs/*` | proxy | `api/v1/jobs` | contract-account-lifecycle |
| `files/*` | **GAP** `mobile-bff-file` | FileService `:5018` | P0 · `/init-bff-file` — **chưa** NuGet |
| `gis/tiles/*` | **GAP** `mobile-bff-map` | MapService `:5021` | P0 · catch-all hiện đi RMMS · **cấm** `AddLinmMapServiceBffControllers` |
| `tasks/*` | **GAP** `mobile-bff-task` | TaskService `:5020` | P1 sau Map+File |

Thiếu field trên API → `/database-migration` trên domain · **cấm** DbContext trên `RMMS.Mobile.Bff`.  
Thiếu proxy path RMMS domain → controller catch-all đã cover · **cấm** app gọi thẳng service.  
Auth runtime: `ServiceEndpoints:AuthenticationService` = **`:5003`** (appsettings) — **không** `:5001`.
