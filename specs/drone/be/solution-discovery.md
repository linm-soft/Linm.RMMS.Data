# SA — solution-discovery · drone

| Field | Value |
|-------|-------|
| feature | `drone` |
| domain | **Drone** (DOMAIN-MAP) |
| backend | `D:/AI-QLBD/Linm.RMMS.WebService` |
| API prefix | `api/v1/drone` |
| BFF prefix | `web-bff/api/v1/drone` |
| MFE | `Linm.Web.RMMS.Drone` |
| status | `confirmed` (autopilot) |
| solution_confirm | approve |

## 1. Scope

Greenfield **scans** CRUD under existing Drone domain (health already exists). **Cấm** ERP.WebService / Domains/Master / `api/v1/rmms/*`.

## 2. Entities

| Entity | Table | Notes |
|--------|-------|-------|
| DroneScan | `rmms_drone_scans` | TenantEntity · Code unique/tenant |
| DroneArtifact | `rmms_drone_artifacts` | FK ScanId · cascade |

### DroneScan columns

Id · CompanyCode · Code · Name · FlightType · Purpose · Road · Structure · Office · Device · Pilot · FlightDate · StartTime · EndTime · AreaKm2 · PhotoCount · Status · PointCloudKey · OrthophotoKey · TilesStatus · GisRef · IncidentRef · AiVisionJob · Note · IsActive · CreatedAt · UpdatedAt

### DroneArtifact columns

Id · ScanId · Kind · FileName · SizeMb · StorageKey · Status · LineNo

## 3. API blocks

### API-DRN-01 List scans

| | |
|--|--|
| Method | `GET /api/v1/drone/scans` |
| Query | search · flightType · status · office · page · pageSize∈{20,50,100,200,500} |
| Response | `ApiResponse<DroneScanPagedResult>` |
| Context | drone.md §3 |
| Demo | drone-data.js `scans` |
| controlHint | SearchTextInput + Dropdown filters |

### API-DRN-02 Get / Create / Update / Soft-delete

| | |
|--|--|
| Methods | `GET/POST /scans` · `GET/PUT/DELETE /scans/{id}` |
| Create req | name* · flightType* · road* (+ optional fields + artifacts[]) |
| IdCode | `SCN-YYYYMMDD-NNNN` server-gen |

### API-DRN-03 Process stub

| | |
|--|--|
| Method | `POST /api/v1/drone/scans/{id}/process` |
| Behavior | status → `processing` (mock) · no worker |

### API-DRN-04 Artifacts

| | |
|--|--|
| Method | `GET /api/v1/drone/scans/{id}/artifacts` |
| Also | nested on get-by-id / create / update body |

### BFF

Proxy-only `web-bff/api/v1/drone/scans/**` → API (same pattern AiVision BFF).

## 4. Gates

| Gate | Decision |
|------|----------|
| TZ | Tenant `CompanyCode` + HasQueryFilter |
| XCO | Soft-delete `IsActive` |
| SHARE | Domain-private (not shared master) |
| MIG | `/database-migration` → `Schema_RmmsDroneScans` |

## 5. Handoff → TL

- Tasks: T-BE scans entity/DTO/service/controller · T-BFF · T-MIG · T-UI-LIST · T-UI-FORM · T-PERM
- Route MFE propose: `/drone` (keep ownership)
- Stack: EF Core · PostgreSQL · ApiResponse envelope

## Version meta

| Field | Value |
|-------|-------|
| skillId | agent-sa |
| skillVersion | 2026.08.08.17 |
| workflowVersion | 2026.08.09.02 |
| versionGate | ok |
