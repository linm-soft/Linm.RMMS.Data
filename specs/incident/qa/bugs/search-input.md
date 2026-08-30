# Control review — SearchInput (`incident`)

**SSOT define:** `specs/_data-analy/features/incident-control-hint.md` · `ui/design.md` §5  
**System:** `Linm.Web.RMMS.Field` · `IncidentListPage` + `IncidentFormSlideout` · `attendance/lookups.ts` `ROAD_ROUTE_LOOKUP_CONFIG`  
**Peer:** `control-search-input-review.md`

| field | surface | define | catalogKind | system | pass | gap |
|-------|---------|--------|-------------|--------|------|-----|
| search | filter | SearchTextInput | text | SearchTextInput | yes | — |
| status | filter+form | Dropdown | LOOKUP_STATIC | Select | yes* | T-BE-INIT-01 nếu cứng FE |
| severity | filter+form | Dropdown | LOOKUP_STATIC | Select | yes* | T-BE-INIT-01 |
| routeName | filter+form | **SearchInput** | **road-route** | SearchInput + seed · `routeNameOnly` | **yes** | T-UD-BUG-05/06 **closed** |
| routeName | form view | SearchInput / JOIN | road-route | SearchInput `disabled` | **yes** | T-UD-BUG-07 **closed** |
| incidentType | filter+form | Dropdown 6 | LOOKUP_STATIC | Select | yes* | GAP-INC-TYPE-01 nếu còn 4 |
| orgTree | filter | SearchInput tree | org-unit | thiếu | n/a | GAP-INC-ORG-01 **DEFER P2** |
| reporterName | form | Text | — | Input | yes | P2 users |
| assigneeName | form | Text | — | Input | yes | P2 |
| assetLabel | form | Text / SearchInput | asset-type | Input | n/a | GAP-RPT-SRC-INC-HM **DEFER** |

\* Dropdown OK nếu options từ init-data — **cấm** `KIND_LABEL` cứng (**GAP-DEV-DROPDOWN-HARDCODE-01**).

**Cùng config** `ROAD_ROUTE_LOOKUP_CONFIG` trên attendance / patrol — sửa 1 chỗ (`lookups.ts`).
