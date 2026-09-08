# Filter bar — ai-asset-detect

| Field | Value |
|-------|-------|
| feature | `ai-asset-detect` |
| packKind | `list` |
| changeScope | `edit_page` |
| status | `done` |
| taskId | `task_5eafb531` |
| skillVersion | `2026.09.05.03` |
| schemaVersion | `1` |
| analyzedAt | `2026-09-06T16:20:00.000Z` |

## Slots

| Slot | Fields | controlHint | Notes |
|------|--------|-------------|-------|
| leading | `search` | SearchInput | q → `?search=` |
| leading | `routeId` | SearchInput `road-route` | |
| leading | `assetClass` | Dropdown LOOKUP_STATIC | init-data |
| leading | `status` | Dropdown LOOKUP_STATIC | |
| date | `fromDate` · `toDate` | Date | `detectedAt` |
| leading | `missOnly` | Checkbox | **NEW** · GAP-AAD-MISS-UI-01 |
| trailing | 🔍 apply | button | search must work · refresh toolbar only |

## API bind

`GET web-bff/api/v1/ai-vision/asset-candidates?search=&routeId=&assetClass=&status=&fromDate=&toDate=&page=&pageSize=`  
Cite: `AiVisionAssetCandidatesController.GetList`.

## Cấm

- Raw `<select>` không init-data / catalog  
- Class «mất» trong `assetClass` dropdown  
- Filter wrap overflow — follow GAP-FILTER-WRAP-02 (flex wrap)

## Version meta

skillVersion=2026.09.05.03 · schemaVersion=1 · versionGate=ok
