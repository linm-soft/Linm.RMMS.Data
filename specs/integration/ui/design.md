# Design — integration (Open API và tích hợp)

| Field | Value |
|-------|-------|
| feature | `integration` |
| status | `confirmed` (autopilot · design_confirm) |
| packKind | `list` |
| Kind | **G** hub + **B** Sync/Partners + **D** Import |
| reviewUrl | `file:///D:/AI-QLBD/Linm.RMMS.Data/specs/integration/ui/prototype/integration-hub-prototype.html` |
| updatedAt | 2026-08-09T16:32:00.000Z |

## Prototype (content-only · zones A–D)

- **Skip** note/sidebar/menu/chrome demo clone
- Zones: **A** header title + badges · **B** toolbar OpenAPI/Import · **C** tab content grids · **D** pagination (Sync/Partners)
- Import slideout Z1–Z3 overlay — not nested CatalogListShell

## Control map (Design Control)

| Zone | Controls |
|------|----------|
| B | Mở Swagger · Copy OpenAPI URL · Làm mới health · Xuất catalog · Làm mới · Offline-batch · Webhook stub · Import tài sản |
| C-Endpoints | SearchTextInput path · Dropdown phase · grid Method/Path/… |
| C-Sync | Search · Dropdown syncType/status · LinCatalogDataGrid · row menu |
| C-Partners | LinCatalogDataGrid · toggle Enabled |
| Import | Dropdowns asset/region/route · File · leave-confirm |

## Icons

| Action | Icon |
|--------|------|
| Hub | `fas fa-plug` |
| Import | `fas fa-file-import` |
| Refresh | `fas fa-sync-alt` |
| Swagger | `fas fa-book` |

## Handoff → SA

API routes under `api/v1/integration/*` · IdCode SYNC-* · seed partners/jobs.

## Version meta (REQUIRED)

| Field | Value |
|-------|-------|
| skillId | agent-design |
| skillVersion | 2026.08.09.02 |
| schemaVersion | 1 |
| workflowVersion | 2026.08.09.02 |
| rulesVersion | 2026.08.09.02 |
| generatedAt | 2026-08-09T16:32:00.000Z |
| versionGate | rechecked |
