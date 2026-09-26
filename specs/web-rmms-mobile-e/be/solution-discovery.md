# SA — solution-discovery — web-rmms-mobile-e

| Field | Value |
|-------|-------|
| feature | `web-rmms-mobile-e` |
| this role | `sa` · `/agent-sa` |
| status | `confirmed` (autoApprove=ON · agent self-confirm) |
| changeScope | `edit_page` |
| packKind | `list` (phone Field list RO ≠ desktop Kind B grid) |
| domain | **Patrol** (+ **Integration** road-routes · Auth · peer A–D sessions) · DOMAIN-MAP slug `web-rmms-mobile-e` → Patrol (+ Integration cite) |
| BackendRoot | `D:/AI-QLBD/Linm.RMMS.WebService` · **cấm ERP.*** |
| be_repo_confirm | `approve` |
| MFE | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Mobile` · `mfeStdRoute=/web-rmms-mobile-e` · `mfeStdUrl=http://localhost:9301/web-rmms-mobile-e` |
| ui_repo_confirm | `approve` |
| solution_confirm | `approve` (autoApprove=ON · `task_688f41fe`) |
| prior · design | `confirmed` · compact + `ui/design.md` · reviewUrl prototype |
| prior · po | `confirmed` · compact + `po/requirement.md` |
| prior · data_analy | `confirmed` · hash `sha256:b7fde038e4ef2cdb7ac0cacf9eb5f303671f1daffcbe9d058c5107e78413db2d` |
| contentHash | `sha256:b7fde038e4ef2cdb7ac0cacf9eb5f303671f1daffcbe9d058c5107e78413db2d` |
| skillVersion | `2026.09.05.03` |
| schemaVersion | `1` |
| updatedAt | `2026-09-25T10:40:00.000Z` |
| demo | **N/A** · **cấm** rescan / demo-json / fake counts / fake GPS SSOT |
| wave | **E** · TK-07 kế hoạch tần suất RO · out: báo cáo tháng desktop · track GPS · native · edit quy tắc phone |

> SA **chốt** FormMode↔API · entity+Schema pair · BFF vs API · gates.  
> **Cấm** invent API ngoài slug đã chốt · **cấm** ERP.* · **cấm** hard-code số lượt FE · **cấm** mock plan khi 404 · **cấm** HOW (TL) · **cấm** Write MFE · **cấm** Step 4b / migration ở role này.

## Architecture (repo SSOT)

| Layer | Choice |
|-------|--------|
| BackendRoot | `D:/AI-QLBD/Linm.RMMS.WebService` |
| Domain | Patrol / `patrol` · cite Integration / `integration` (road-routes Live) · Auth · peer A sessions |
| API host | `api/src/RMMS.Service.Api/Domains/Patrol/` · Models `api/domains/patrol/…/DTOs/` · road-routes cite `Domains/Integration/` |
| Entity / table **Mới** | `PatrolFrequencyRuleEntity` → `rmms_patrol_frequency_rules` · pair `Schema_PatrolFrequencyRule` **trước** filled list |
| Entity extend (migration E) | `RoadRouteEntity` + `RoadClass` (nullable) · DTO/search item |
| Entity Live cite | `PatrolSession` (đếm) · Integration `RoadRoute` |
| Computed surface | `GET …/patrol/frequency-plans` — join route + rule + session agg · **không** bảng plan riêng wave E |
| BFF web (cite peer) | `web-bff/api/v1/patrol/**` · `web-bff/api/v1/integration/**` |
| BFF mobile (UI bind) | `mobile-bff/api/v1/patrol/**` · `mobile-bff/api/v1/integration/**` · cùng `{resource}` |
| MFE | `Linm.Web.RMMS.Mobile` · phone max-width 430 · RO only |
| Response | Linm.Platform.CommonLib `ApiResponse` / paged |
| Auth perm | Linm.Platform.Authentication · peer Patrol read + `patrol.frequency-plans.read` (TL đặt code) |
| Persist | scalar rule cols · **cấm** parent `*Json` blob · **cấm** FE hardcode TCCS |
| Out of E | báo cáo tháng desktop · track GPS · native · edit quy tắc phone |

## SSOT / anti-duplicate

| Concern | Package / rule | Note |
|---------|----------------|------|
| UI | `@linm-soft-org/linm-web-common-components` + mobile kit | no local Lin* · labels `useFormOptions()` |
| HTTP | apiClient SSOT | re-export only · prefix mobile-bff |
| BE | Linm.Platform.CommonLib | ApiResponse |
| Auth | Linm.Platform.Authentication + RequirePermission | peer Patrol · new E read perm |
| Catalog | LOOKUP_STATIC FE keys | coverageStatus · roadClass labels — **cấm** invent `patrol/init-data` |
| Counts | server-only in frequency-plans | **cấm** FE invent coverageStatus / fake 3–9 |
| Routes | Integration Live only | **cấm** invent route ngoài Integration |
| ERP | none | **cấm ERP.*** |

## FormType pack (list · phone)

| Item | Value |
|------|-------|
| packKind | `list` |
| formPattern | Mobile full list RO (TK-07) · phone 430 · **no write form** · N/A ERP Modal/Slideout |
| Grid AC Kind B / DES-GRID / `LinErpListFilterBar` | **N/A** — phone cards |
| Report AC | **N/A** |
| List query keys | `asOfDate?` · `weekStart?` · `routeCode?` · `page?` · `pageSize?` |
| filterItems | **cấm** DES-GRID |
| Leave | **N/A** (RO) · Back→TK-00 |
| Tabs | `none` |
| Map / GPS | **none** trên TK-07 |

## § UNCLEAR CLOSED (SA chốt)

### UNCLEAR-FREQ-API → CLOSED

| | |
|--|--|
| Decision | Resource slug **`frequency-plans`** dưới Patrol |
| Endpoint | `GET api/v1/patrol/frequency-plans` · BFF `mobile-bff/api/v1/patrol/frequency-plans` |
| Query | `asOfDate?` (default today UTC+tenant) · `weekStart?` · `routeCode?` · `page` · `pageSize` |
| Behavior | 404 / empty table → **EmptyState** · **cấm** mock rows · **cấm** hard-code lượt |
| Owner | API Patrol computes join · BFF proxy only |
| Write | **none** wave E phone |

### UNCLEAR-ROAD-CLASS → CLOSED

| | |
|--|--|
| Decision | Live `RoadRouteEntity` / DTO **không** có `RoadClass` — chỉ `RouteKind` (`QUOC_LO`·`HCM`·`CAO_TOC`·`KHAC`) · cite `RoadRouteDtos.cs` |
| Target | migration E add `RoadClass` `string?` MaxLength(32) trên `rmms_road_routes` + `RoadRouteDto` / `RoadRouteSearchItemDto` |
| Until Live | UI cột cấp **trống** + GAP chip · **cấm** map `RouteKind`→I–VI làm authoritative |
| Rationale | GAP §6 «Master cấp đường của road-route» · GAP-DA-MOB-E-CLASS-01 |

### UNCLEAR-COUNT-SOURCE → CLOSED

| | |
|--|--|
| Decision | **Server aggregate** trong `GET frequency-plans` response |
| Source | Live `GET …/patrol/sessions` filtered by `routeCode` · `PatrolType` · day/week window |
| Counts | `patrolDayCount` = ca `Tuần đường` trong `asOfDate` · `inspectWeekCount` = đợt `Tuần kiểm` trong tuần `weekStart` |
| Pause | peer D `IsPaused=true` **không** tính vào thiếu lượt (cite GAP peer D / real-data) |
| coverageStatus | server: `du` nếu counts ≥ required* · else `thieu` · missing rule/class → không invent · row omit hoặc status gap |
| FE | RO bind only · **cấm** client aggregate làm primary · **cấm** fake counts khi 404 |

### UNCLEAR-RULE-SOURCE → CLOSED

| | |
|--|--|
| Decision | Bảng **`rmms_patrol_frequency_rules`** theo `RoadClass` — **không** FE enum / hardcode TCCS |
| Entity | `PatrolFrequencyRuleEntity` · cols: `RoadClass` · `RuleText` · `RequiredPatrolDay` · `RequiredInspectWeek` · `IsActive` · soft-delete peer |
| Join | frequency-plans: route.`RoadClass` → rule → + session counts |
| Seed | **tách** Schema (một migration một việc · **cấm** nhét seed vào Schema_*) · seed/admin riêng (TL) · chưa có rule → empty/GAP row OK |
| **Cấm** | hard-code 3–9 / TCCS mọi tuyến trên FE |

### UNCLEAR-DOMAIN-SLUG → CLOSED

| | |
|--|--|
| Decision | DOMAIN-MAP row `web-rmms-mobile-e` → **Patrol** · `patrol` · cite Integration road-routes · MFE `Linm.Web.RMMS.Mobile` `/web-rmms-mobile-e` |
| Cite | peer rows `web-rmms-mobile-a`…`d` |
| Action | row added in this SA pass |

## FormMode ↔ API

| FormMode / zone | Method | Path (API · BFF same resource) | Live / Mới | Notes |
|-----------------|--------|--------------------------------|------------|-------|
| TK-07 planList | GET | `…/patrol/frequency-plans` | **Mới** | empty/404 OK · **cấm** mock |
| route / roadClass cite | GET | `…/integration/road-routes/search` | Live | RoadClass sau migration E |
| sessions (server-only agg) | GET | `…/patrol/sessions` | Live | **không** primary FE bind counts |
| refresh | GET | same frequency-plans | Mới | optional reload |
| backHub | — | nav TK-00 | — | no API |
| profile | GET | `auth/profile` | Live | auth gate |
| write / edit rule | — | **none** phone E | — | RO only |

### Response row (chốt)

```json
{
  "routeCode": "string",
  "routeName": "string",
  "roadClass": "string?",
  "ruleText": "string?",
  "patrolDayCount": "number",
  "inspectWeekCount": "number",
  "requiredPatrolDay": "number?",
  "requiredInspectWeek": "number?",
  "coverageStatus": "thieu|du",
  "asOfDate": "ISO-date",
  "weekStart": "ISO-date?"
}
```

`roadClass` / `ruleText` / required* null khi schema/rule chưa có → UI empty/GAP · **cấm** FE fill fake.

## Entity / Schema pair (HARD trước filled list)

| Entity | Table | Schema | Wave |
|--------|-------|--------|------|
| `PatrolFrequencyRuleEntity` | `rmms_patrol_frequency_rules` | `Schema_PatrolFrequencyRule` | E **Mới** |
| `RoadRouteEntity` + `RoadClass` | `rmms_road_routes` | Schema road-route extend | E migration |
| (computed) frequency-plans | — | controller **Mới** | E · no plan table |
| Live cite | `rmms_patrol_sessions` | — | A–D |

## BFF vs API

| Concern | Owner |
|---------|-------|
| Business + join + counts | API Patrol |
| roadClass master | API Integration (extend) |
| MFE bind | `mobile-bff` proxy only · **không** business logic mới trên BFF |
| Web peer cite | `web-bff` cùng resource |

## LOOKUP_STATIC keys (labels via useFormOptions)

| Field | Keys |
|-------|------|
| coverageStatus | `thieu` · `du` |
| roadClass | catalog keys theo master (sau migration) · **cấm** hardcode VN label |

## GPS HARD

| Zone | Rule |
|------|------|
| TK-07 | **none** · **cấm** fake GPS product-wide peer |

## Gates / DoR SA

| Gate | Result |
|------|--------|
| Design confirmed + compact | PASS |
| real-data §A+§B | PASS · FormMode↔API mapped |
| UNCLEAR all CLOSED | PASS |
| Schema-before-filled | PASS (pair listed · TL owns migration / Step 4b) |
| be/ui repo confirm | PASS |
| solution_confirm | **approve** (autoApprove) |
| ERP.* | none |
| Write MFE / Step 4b / e2e | **skipped** (roleOnly=sa) |

## Handoff next

| Role | Packet |
|------|--------|
| team-lead | T-* · migration E order (RoadClass → FrequencyRule → controller) · Step 4b · HOW |
| dev | MFE bind mobile-bff · empty-no-hardcode · **không** desktop Asset |
| qa | empty 404 · no fake counts · no GPS · RO only · coverageStatus keys |

## Full paths

- design compact: `D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-mobile-e/handoff/design-compact.md`
- real-data: `D:/AI-QLBD/Linm.RMMS.Data/specs/_data-analy/features/web-rmms-mobile-e-real-data.md`
- DOMAIN-MAP: `D:/AI-QLBD/Linm.RMMS.WebService/docs/DOMAIN-MAP.md`
- STATUS: `D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-mobile-e/STATUS.md`
