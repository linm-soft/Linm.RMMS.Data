# Data-analy — real-data bind — web-rmms-mobile-e

| Field | Value |
|-------|-------|
| feature | `web-rmms-mobile-e` |
| title | Đợt E — kế hoạch tần suất (TK-07) |
| packKind | `list` |
| changeScope | `edit_page` |
| status | `done` |
| taskId | `task_39597a69` |
| prefix API | `api/v1/patrol` · `api/v1/integration` |
| prefix BFF web (cite) | `web-bff/api/v1/patrol` · `web-bff/api/v1/integration` |
| prefix BFF mobile (plan) | `mobile-bff/api/v1` · cùng `{resource}` |
| beRepo | `D:/AI-QLBD/Linm.RMMS.WebService` · **cấm ERP.*** |
| uiRepo | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Mobile` |
| mfeStdUrl | `http://localhost:9301/web-rmms-mobile-e` |
| domain | **Patrol** (+ **Integration** road-routes · Auth · peer A–D) |
| contentHash | `sha256:b7fde038e4ef2cdb7ac0cacf9eb5f303671f1daffcbe9d058c5107e78413db2d` |
| skillVersion | `2026.09.05.03` |
| schemaVersion | `2` |
| workflowVersion | `2026.09.19.02` |
| rulesVersion | `2026.09.25.2` |
| analyzedAt | `2026-09-25T10:17:15.018Z` |
| demo | **N/A** · **cấm** demo-json / in-app mock SSOT / hard-code lượt / fake GPS |

## § Scope đợt E

| In | Out |
|----|-----|
| TK-07 kế hoạch tần suất RO | báo cáo tháng desktop · track GPS liên tục |
| Empty khi chưa bảng/API | hard-code 3–9 / TCCS mọi tuyến |
| Live cite: road-routes · sessions (đếm) | invent frequency trong ERP.* |
| Schema Mới frequency / roadClass | sửa quy tắc trên phone |
| Labels useFormOptions | hardcode VN · desktop Asset |

## §A — Nguồn

| sourceKind | sourceCite | empty | error |
|------------|------------|-------|-------|
| `context` | `docs/context/features/web-rmms-mobile-e.md` | — | — |
| `plan` | `IMPLEMENT-SCREENS.md` TK-07 | — | SSOT màn E |
| `gap` | `GAP-TUAN-DUONG-TUAN-KIEM.md` §6 · đợt E | — | cấm hard-code lượt |
| `peer-a` | sessions Live · TK-00 hub link | no route scope → empty OK | toast · **cấm** `window.alert` |
| `peer-d` | pause không tính thiếu lượt (cite) | — | SA count rules |
| `api-live` | `GET …/integration/road-routes/search` · `GET …/patrol/sessions` | no routes → empty | 4xx toast |
| `api-new` | GET frequency/plan-by-route (SA slug) | **EmptyState** | 404 until schema · **cấm** mock rows |
| `entity-new` | frequency plan / rule-by-class table | — | pair **trước** filled UI |
| `entity-cite` | `PatrolSession` · Integration road-route | — | tenant / soft-delete |
| `domain-map` | Patrol · Integration `road-route` | — | **cấm ERP.*** · SA slug E |
| `auth` | `auth/profile` | — | redirect login |
| `geo` | — | N/A TK-07 | **cấm** fake GPS product-wide |
| `demo` | — | N/A | **cấm** demo SSOT |

## §B — Bind field (HARD) — đợt E

| uiField | Label (key) | controlHint | catalogKind | GET | write field | sameMfe | sameMobile |
|---------|-------------|-------------|-------------|-----|-------------|---------|------------|
| planList | kế hoạch | List RO | — | `GET …/frequency…` **Mới** | — | n/a | n/a |
| route | tuyến | Text RO | — | plan row / road-routes | — | Integration | n/a |
| roadClass | cấp đường | Chip/Text RO | LOOKUP_STATIC? | road-routes field | — | GAP if missing | n/a |
| ruleText | quy tắc | Text RO | — | plan/rule API | — | Schema E | n/a |
| patrolDayCount | ca TD/ngày | Number RO | — | plan or sessions agg | — | peer A | n/a |
| inspectWeekCount | đợt TK/tuần | Number RO | — | plan or sessions agg | — | peer A | n/a |
| coverageStatus | thiếu/đủ | Chip RO | LOOKUP_STATIC | computed | — | gap | n/a |
| emptyHint | chưa có KH | EmptyState | — | 404/no table | — | — | n/a |

**Không write** trên TK-07 (read-only).

**Response row (đề xuất — SA chốt):** `routeCode` · `routeName` · `roadClass?` · `ruleText` · `patrolDayCount` · `inspectWeekCount` · `requiredPatrolDay?` · `requiredInspectWeek?` · `coverageStatus` (`thieu`\|`du`) · `asOfDate` · `weekStart?`.

**Cấm** ERP.* · **cấm** hard-code số lượt FE · **cấm** mock plan khi schema chưa có (empty + gap) · **cấm** GPS mẫu.

## §C — Catalog

| catalogKind | search/list API | seed/import cite | Cấm |
|-------------|-----------------|------------------|------|
| LOOKUP_STATIC | FE `useFormOptions` (coverageStatus · roadClass labels) | CTX + IMPLEMENT + GAP §6 | hardcode label VN |
| road-routes | `GET integration/road-routes/search` | Integration Live | invent route ngoài Integration |
| sessions | `GET patrol/sessions` | Patrol Live | invent session ngoài Patrol |
| frequency | GET plan **Mới** | Schema E | fake counts / TCCS mọi tuyến |

## §D — Map / vẽ

| Mục | Ghi |
|-----|-----|
| map | **none** trên đợt E |
| GPS | **none** trên TK-07 |

## §E — Progress / vòng đời

| stateField | Nguồn | Ai đổi | API | UI |
|------------|-------|--------|-----|-----|
| coverageStatus | computed plan vs counts | server/client RO | GET plan | chip `thieu`/`du` |
| (write) | — | **none** on phone | — | RO only |

`progress: frequency-read E` (no close-loop write).

## §F — Handoff

| Role | Packet |
|------|--------|
| PO | DoD «empty-no-hardcode · RO · useFormOptions · Mobile only» |
| Design | control-map khớp §B · phone 430 · zone TK-07 list/empty |
| SA | Schema frequency · roadClass · DOMAIN slug E · **cấm** ERP.* |
| Dev web mobile | `Linm.Web.RMMS.Mobile` · `mobile-bff` · **không** desktop Asset |
| QA | empty 404 · no fake counts · no GPS · no desktop |

## Gaps (cite)

| id | Note |
|----|------|
| GAP-DA-MOB-E-CTX-01 | CTX `web-rmms-mobile-e.md` thiếu lúc start → tạo từ IMPLEMENT TK-07 + GAP §6 |
| GAP-DA-MOB-E-SCHEMA-01 | Bảng/API tần suất theo tuyến — **HARD** pair trước filled grid |
| GAP-DA-MOB-E-CLASS-01 | Field cấp đường trên road-routes — trống + GAP nếu thiếu |
| GAP-DA-MOB-E-COUNT-01 | Nguồn đếm ca/đợt (server vs sessions client) — SA |
| GAP-DA-MOB-E-DOMAIN-01 | DOMAIN-MAP slug `web-rmms-mobile-e` — SA thêm row Patrol (+ Integration cite) |
| GAP-E-HARDCODE | **Cấm** hard-code 3–9 / TCCS mọi tuyến (GAP đợt E) |

## Version meta

| skillVersion | schemaVersion | workflowVersion | rulesVersion |
|--------------|---------------|-----------------|--------------|
| 2026.09.05.03 | 2 | 2026.09.19.02 | 2026.09.25.2 |
