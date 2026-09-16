# SA — Solution — incident-chat

| Field | Value |
|-------|-------|
| feature | `incident-chat` |
| status | **confirmed** |
| updatedAt | `2026-08-29T17:40:00.000Z` |

## Architecture

- Domain `IncidentsController` GET/POST `{id}/messages`  
- Table `rmms_incident_messages` · TenantEntity · Schema_IncidentMessages  
- Web BFF forward · Mobile.Bff catch-all `mobile-bff/api/v1/{path}`  
- DTO platform-like: `content` · `type=message` · `isMine` · `parentId` reply only  
- **Cấm** invent `api/v1/incident-chat` · **cấm** invent `…/comments` · **cấm** DbContext trên Mobile.Bff
