# Team lead — Task — web-rmms-mobile-e

| Field | Value |
|-------|-------|
| feature | `web-rmms-mobile-e` |
| title | Đợt E — kế hoạch tần suất tuần kiểm (TK-07 RO) |
| role | `team_lead` · `/agent-team-lead` |
| status | `done` (autoApprove=ON · `route_confirm=approve` path `/web-rmms-mobile-e`) |
| packKind | `list` (**phone Field list RO** ≠ desktop Kind B grid) |
| changeScope | `edit_page` |
| formPattern | Mobile full list RO (TK-07) · phone max-width **430** · **no write form** · Leave N/A |
| mfe | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Mobile` |
| mfeStdRoute | `/web-rmms-mobile-e` (**route_confirm** autoApprove=ON · giữ path STATUS) |
| mfeStdUrl | `http://localhost:9301/web-rmms-mobile-e` (Dev điền live) |
| be | `D:/AI-QLBD/Linm.RMMS.WebService` · Patrol + Integration road-routes · Auth · **cấm ERP.*** |
| BFF bind | `mobile-bff/api/v1/patrol/**` · `mobile-bff/api/v1/integration/**` · cite peer `web-bff` · API owns join |
| demo | **N/A** · wave **E** · out báo cáo tháng desktop · track GPS · native · edit quy tắc phone · **cấm** fake counts / GPS / mock plan |
| contentHash | `sha256:b7fde038e4ef2cdb7ac0cacf9eb5f303671f1daffcbe9d058c5107e78413db2d` |
| skillVersion | `2026.09.05.03` |
| schemaVersion | `1` |
| updatedAt | `2026-09-25T10:45:00.000Z` |
| taskId | `task_6473fa66` |
| reviewUrl | `file:///D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-mobile-e/ui/prototype/index.html` |
| prior | data_analy·po·design·sa = **confirmed** · compact exist · UNCLEAR all CLOSED SA |

> TL **chia HOW + DoD + T-*** · **cấm** implement product code · **cấm** e2e / yarn build / start:std / Step 4b migration ở role này.  
> Kind B grid / `LinErpListFilterBar` / ui-schema editor = **N/A** (PO·Design·SA chốt phone RO).  
> **HARD:** `Schema_PatrolFrequencyRule` + `PatrolFrequencyRuleEntity` + `RoadClass` trên `rmms_road_routes` **trước** filled planList · empty/404 → EmptyState · **cấm** mock / hard-code 3–9 TCCS.  
> Migration E order: **RoadClass → FrequencyRule Schema → controller frequency-plans**.  
> Counts + `coverageStatus`: **server-only** trong GET frequency-plans · FE RO bind · `IsPaused` không tính.  
> GPS: **none** TK-07 · **cấm** fake.

## route_confirm

| Option | Path | Decision |
|--------|------|----------|
| A (default) | `/web-rmms-mobile-e` | **approve** (autoApprove=ON · khớp STATUS · peerStdUrl) |
| B | `/field/tuan-kiem/ke-hoach` | product path cite only · MFE std = A |
| C custom | — | N/A |

`source.routes` = `[/web-rmms-mobile-e]` · draft `mfeStdRoute` giữ nguyên · Back→TK-00 hub · peer A–D sessions cite.

## FormType pack adapt (phone list RO · wave E)

| Canonical (form-type-task-pack §2a) | Adapt | Reason |
|-------------------------------------|-------|--------|
| T-UI-LIST-01 Kind B `tl-grid-task-template` | → **T-UI-LIST-01** (phone **List cards** RO) | DES-GRID N/A · TK-07 plan cards |
| T-UI-FILTER-01 `LinErpListFilterBar` | **WAIVE** | phone · optional query asOfDate/weekStart/routeCode server-side · **cấm** desktop filter bar |
| T-UI-CFG-01 `LinCatalogUiSchemaEditorModal` | **WAIVE** | no catalog Kind B |
| T-BE-UISCHEMA-01 | **WAIVE** | no ui-schema wave E |
| T-QA-FILTER-01 / T-QA-FILTER-02 | **WAIVE** | no filter-bar DTM |
| T-UI-FORM-01 / write forms | **WAIVE** | RO only · no edit rule phone E |
| T-UI-LEAVE-01 | **WAIVE** | RO · no dirty form |
| T-UI-ACT / write actions | **WAIVE** | refresh/back only · no POST/PUT |
| T-UI-LKP-01 SearchInput | **WAIVE** | no lookup search surface |
| T-UI-HIST-01 | **WAIVE** | no history overlay |
| T-BE-SCHEMA-01 · T-BE-CRUD-01 · T-BE-INIT-01 · T-PERM-01 | **KEEP** | FrequencyRule Mới + RoadClass migration E · GET plans |
| T-UI-FIELD-01 · T-UI-UX-01 · T-UI-RESP-01 · T-UI-PROD-01 | **KEEP** | list-form-quality-gates adapted RO list |
| T-QA-LIST-01 · T-QA-EMPTY-01 | **KEEP** (phone) | queued `/agent-qa*` · e2eQa ON |

**GAP-TL-FORMTYPE-01:** PASS — pack đủ phone list RO + waive có cite.  
**GAP-TL-FILTER-01:** N/A (waive). **GAP-TL-GRID-*-01:** N/A.

## Screens → tasks

| id | Surface | Pattern | FormMode | Actions | Task | devSlash |
|----|---------|---------|----------|---------|------|----------|
| TK-07 | Kế hoạch tần suất | Full 430 List cards RO | List RO | load · refresh · backHub | T-UI-LIST-01 · T-UI-FIELD-01 | `/agent-dev` |
| emptyHint | Chưa có KH | EmptyState | — | — | T-UI-LIST-01 | `/agent-dev` |
| DES-LEAVE | — | — | — | **WAIVE** | — | — |

Leave nav: N/A (RO) · Back→TK-00 · refresh=GET frequency-plans.

## ssot.reuse

| Concern | Reuse | Cấm |
|---------|-------|-----|
| UI | `@linm-soft-org/linm-web-common-components` + mobile kit · `useFormOptions()` | clone Lin* · hardcode VN labels |
| HTTP | apiClient SSOT · prefix `mobile-bff` | invent axios · ERP.* |
| BE | Patrol · Integration road-routes Live · CommonLib `ApiResponse` · Auth | parent `*Json` · fake counts · invent RouteKind→RoadClass |
| Schema | `Schema_PatrolFrequencyRule` + entity pair **trước** filled list · RoadClass migration E | form/list filled trước schema · mock plans |
| Counts | server agg in frequency-plans | FE client aggregate primary · hardcode 3–9 |
| Parent | `PatrolSession` Live (server cite) · RoadRoute Live | invent session · invent class từ RouteKind |
| GPS | none | fake lat/lng |

## implement.wire

| From | To | Note |
|------|----|------|
| TK-07 planList | `GET …/patrol/frequency-plans` | Mới · query `asOfDate?`·`weekStart?`·`routeCode?`·`page`·`pageSize` · empty/404 OK |
| refresh | same GET | optional |
| roadClass cite | `GET …/integration/road-routes/search` | Live · RoadClass sau migration E · until empty+GAP |
| sessions agg | `GET …/patrol/sessions` | **server-only** inside API · **không** primary FE bind counts |
| profile | `GET auth/profile` | auth gate |
| backHub | nav TK-00 | no API |
| write / edit rule | — | **none** phone E |

### Response row bind (SA chốt)

`routeCode` · `routeName` · `roadClass?` · `ruleText?` · `patrolDayCount` · `inspectWeekCount` · `requiredPatrolDay?` · `requiredInspectWeek?` · `coverageStatus` (`thieu`|`du`) · `asOfDate` · `weekStart?`

Null roadClass/ruleText/required* → UI empty/GAP · **cấm** FE fill fake.

## implement.state

- Route shell phone **430** · react-router under `/web-rmms-mobile-e` · entry từ hub TK-00
- GPS: **none** · **cấm** fake lat/lng
- Labels: `useFormOptions()` · coverageStatus `thieu`|`du` · roadClass catalog sau migration
- Empty/404 → EmptyState · **cấm** mock rows · **cấm** hard-code lượt
- **cấm** LinErpListFilterBar · **cấm** ERP.* · **cấm** edit quy tắc phone

## implement.init_data

| Field | Source | Cấm |
|-------|--------|-----|
| coverageStatus | LOOKUP_STATIC `useFormOptions()` `thieu`·`du` | invent init-data · hardcode VN |
| roadClass labels | LOOKUP_STATIC / catalog sau migration | invent từ RouteKind · hardcode TCCS |
| counts / coverage | server frequency-plans | FE invent · fake 3–9 |
| ruleText | `rmms_patrol_frequency_rules` | FE hardcode rule strings |

## Field → control (T-UI-FIELD)

| uiField | controlHint | catalogKind / source | write |
|---------|-------------|----------------------|-------|
| planList | List cards RO | GET frequency-plans | — |
| route | Text RO | routeCode/Name | — |
| roadClass | Text/Chip RO | after migration E · else empty+GAP | — |
| ruleText | Text RO | from rules table | — |
| patrolDayCount | Number RO | server | — |
| inspectWeekCount | Number RO | server | — |
| coverageStatus | Chip RO | useFormOptions thieu\|du | — |
| emptyHint | EmptyState | 404/no schema | — |
| refresh | Button | GET reload | — |
| backHub | Button | nav TK-00 | — |

---

## Tasks

### T-BE-SCHEMA-01 — Schema + entity + migration E (HARD trước filled list)
- **role:** Dev · **deps:** none · **status:** pending
- **DoD:** Order: (1) `RoadClass` `string?` MaxLength(32) trên `rmms_road_routes` + DTO/search item · (2) `Schema_PatrolFrequencyRule` Live · `PatrolFrequencyRuleEntity` · table `rmms_patrol_frequency_rules` (cols: `RoadClass`·`RuleText`·`RequiredPatrolDay`·`RequiredInspectWeek`·`IsActive` · soft-delete peer) · (3) controller surface ready · pair entity↔schema · seed **tách** Schema · **cấm** ship filled planList trước schema · **cấm ERP.*** · Step 4b **Dev only**
- **skills:** `/agent-dev` · SA solution · DOMAIN-MAP Patrol (+ Integration cite) · Step 4b (Dev)

### T-BE-CRUD-01 — frequency-plans GET + RoadClass expose
- **role:** Dev · **deps:** T-BE-SCHEMA-01 · **status:** pending
- **DoD:** `GET api/v1/patrol/frequency-plans` · BFF `mobile-bff/api/v1/patrol/frequency-plans` proxy · join route + rule + session agg · query asOfDate/weekStart/routeCode/page/pageSize · `patrolDayCount`=ca Tuần đường/day · `inspectWeekCount`=đợt Tuần kiểm/week · `IsPaused` không tính · coverageStatus server `thieu`|`du` · empty/404 OK · **cấm** mock · RoadClass trên road-routes search DTO · ApiResponse · TZ=`tz_required` · XCO=`xco_get_only` · SHARE=`tenant_keep` · **cấm ERP.***
- **skills:** `/agent-dev` · SA solution · DOMAIN-MAP Patrol · Integration

### T-BE-INIT-01 — LOOKUP_STATIC options
- **role:** Dev · **deps:** none · **status:** pending
- **DoD:** coverageStatus (`thieu`·`du`) · roadClass catalog keys (sau migration) từ `useFormOptions()` · **cấm** hardcode VN · **cấm** invent `patrol/init-data` wave E
- **skills:** `tl-dropdown-from-backend` (LOOKUP_STATIC path)

### T-PERM-01 — Permission codes
- **role:** Dev · **deps:** T-BE-CRUD-01 · **status:** pending
- **DoD:** `patrol.frequency-plans.read` (+ peer Patrol read) · RequirePermission trên API · UI hide/disable theo code · cite peer Patrol perms
- **skills:** `/agent-dev`

### T-UI-LIST-01 — Frequency plan list cards (TK-07)
- **role:** Dev · **deps:** T-BE-SCHEMA-01 · T-BE-CRUD-01 · T-BE-INIT-01 · **devSlash:** `/agent-dev`
- **status:** pending
- **DoD:** TK-07 · phone 430 · List cards RO · emptyHint when 404/empty · refresh optional · backHub→TK-00 · bind response row · AC-LIST-01..08 · **cấm** mock · **cấm** FE hardcode counts/rule · **cấm** DES-GRID / LinErpListFilterBar · UTF-8 VN · Schema trước filled
- **skills:** `/agent-dev` · `/dev-web-responsive` · `dev-ui-ux-constitution` · prototype reviewUrl
- **ssot.reuse:** common-components mobile kit
- **implement.wire:** GET frequency-plans · GET road-routes cite
- **implement.state:** route under `/web-rmms-mobile-e`

### T-UI-FIELD-01 — Field control map RO
- **role:** Dev · **deps:** T-UI-LIST-01 · T-BE-INIT-01 · **devSlash:** `/agent-dev`
- **status:** pending
- **DoD:** Field→control table above · coverageStatus Chip via useFormOptions · roadClass empty+GAP until migration Live · **cấm** invent RouteKind→I–VI
- **skills:** `/agent-dev`

### T-UI-UX-01 — UX constitution (phone RO)
- **role:** Dev · **deps:** T-UI-LIST-01 · **devSlash:** `/agent-dev`
- **status:** pending
- **DoD:** prototype parity reviewUrl · empty-first · no fake GPS · loading/error states · UTF-8
- **skills:** `dev-ui-ux-constitution` · design.md

### T-UI-RESP-01 — Responsive phone 430
- **role:** Dev · **deps:** T-UI-LIST-01 · **devSlash:** `/agent-dev`
- **status:** pending
- **DoD:** max-width 430 · safe areas · no desktop grid bleed
- **skills:** `/dev-web-responsive`

### T-UI-PROD-01 — Product rules (empty-no-hardcode · RO)
- **role:** Dev · **deps:** T-UI-LIST-01 · **devSlash:** `/agent-dev`
- **status:** pending
- **DoD:** empty-no-hardcode · RO only · no GPS · no edit rule · cấm ERP.* · deny blocks N/A (no geo buttons)
- **skills:** `/agent-dev` · PO requirement · SA solution

### T-QA-LIST-01 — QA scenarios list (queued)
- **role:** QA · **deps:** T-UI-LIST-01 · **status:** pending
- **DoD:** scenarios.md · empty 404 · filled after schema · coverageStatus keys · no fake counts · RO only · no GPS · AC-LIST · **e2e chỉ `/agent-qa*`**
- **skills:** `/agent-qa`

### T-QA-EMPTY-01 — Empty / GAP gates
- **role:** QA · **deps:** T-QA-LIST-01 · **status:** pending
- **DoD:** 404/no schema → EmptyState · missing RoadClass → empty+GAP · missing rule → no invent · IsPaused excluded from counts
- **skills:** `/agent-qa`

---

## DoR team_lead

| Gate | Result |
|------|--------|
| prior compact confirmed | PASS (data_analy·po·design·sa) |
| changeScope + packKind | PASS · edit_page · list |
| form-type adapt + T-* | PASS · GAP-TL-FORMTYPE-01 |
| route_confirm | **approve** `/web-rmms-mobile-e` |
| Schema-before-filled called out | PASS · T-BE-SCHEMA-01 HARD |
| UNCLEAR | none (SA CLOSED) |
| compact handoff | `handoff/team_lead-compact.md` |
| implement / e2e / Step 4b | **skipped** (roleOnly=team_lead) |

## Handoff next

| Role | Packet |
|------|--------|
| dev | `/agent-dev` · implement/ · T-BE-* rồi T-UI-* · Step 4b migration E |
| qa | `/agent-qa*` · T-QA-* · e2eQa queued |
| review | after QA |

## Full paths

- compact: `D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-mobile-e/handoff/team_lead-compact.md`
- sa: `D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-mobile-e/be/solution-discovery.md`
- design: `D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-mobile-e/ui/design.md`
- STATUS: `D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-mobile-e/STATUS.md`
