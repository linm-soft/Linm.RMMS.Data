# SA — Solution — mnt-chat

| Field | Value |
|-------|-------|
| feature | `mnt-chat` |
| status | **confirmed** |
| updatedAt | `2026-08-29T17:10:00.000Z` |

## Architecture

- Domain `WorkOrdersController` GET/POST `{id}/messages`  
- Table `rmms_work_order_messages` · TenantEntity · Schema_WorkOrderMessages  
- Web BFF forward · Mobile.Bff catch-all `mobile-bff/api/v1/{path}`  
- DTO platform-like: `content` · `type=message` · `isMine` · `parentId` reply only  
- **Cấm** invent `api/v1/mnt-chat` · **cấm** DbContext trên Mobile.Bff
