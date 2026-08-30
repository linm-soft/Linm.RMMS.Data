# HTML → MFE map — org-route-scope SearchInput

| Proto | MFE | Kit |
|-------|-----|-----|
| `.lkp-wrap` `.lkp-code` + `.lkp-name` | `SearchInput` lookup + secondary | `@linm-soft-org/linm-web-common-components` `SearchInput` |
| `#f-zone` / `#f-zone-name` | `value` + `primaryDisplay` = `zoneOrgCode` · `secondaryDisplay` = `zoneOrgName` | `createZoneOrgSearchConfig()` |
| `#f-route` / `#f-route-name` | `routeCode` / `routeName` | `createParentRouteSearchConfig()` |
| `#s-assignee` / `#s-assignee-name` | `assigneeCode` / `assigneeName` | `createAssigneeOrgSearchConfig` / `createAssigneePartnerSearchConfig` |
| Filter `#flt-route` | list `routeCode` / `routeName` | cùng parent-route config |
| Filter `#flt-zone` | list `zoneOrgCode` / `zoneOrgName` | `createZoneOrgSearchConfig()` · **cấm** zone-tabs · **cấm** ô Cục |

**SSOT display:** `search-input.md` — trái mã · phải tên. **Cấm** `primaryDisplay=name` không `secondaryDisplay` (ô tên trống).
