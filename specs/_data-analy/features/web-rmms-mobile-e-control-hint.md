# Data-analy — controlHint — web-rmms-mobile-e

| Field | Value |
|-------|-------|
| feature | `web-rmms-mobile-e` |
| title | Đợt E — kế hoạch tần suất (TK-07) |
| packKind | `list` |
| changeScope | `edit_page` |
| mode | `feature_context` |
| status | `done` |
| skillId | `agent-data-analy` |
| skillVersion | `2026.09.05.03` |
| schemaVersion | `1` |
| workflowVersion | `2026.09.19.02` |
| rulesVersion | `2026.09.25.2` |
| versionGate | `ok` |
| contentHash | `sha256:b7fde038e4ef2cdb7ac0cacf9eb5f303671f1daffcbe9d058c5107e78413db2d` |
| analyzedAt | `2026-09-25T10:17:15.018Z` |
| demo | **N/A** |
| realData | `specs/_data-analy/features/web-rmms-mobile-e-real-data.md` |
| beRepo | `D:/AI-QLBD/Linm.RMMS.WebService` · domain **Patrol** (+ **Integration** road-routes) · **cấm ERP.*** |
| uiRepo | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Mobile` |
| mfeStdUrl | `http://localhost:9301/web-rmms-mobile-e` |
| mfeStdRoute | `/web-rmms-mobile-e` |
| taskId | `task_39597a69` |
| phoneFrame | `max-width: 430px` |
| formPattern | Mobile full · **không** ERP Modal/Slideout Kind B desktop |
| priorWave | `web-rmms-mobile-a/b/c/d` · wave E = TK-07 frequency plan **read-only** |

> Data-analy **đề xuất** controlHint. Design **chốt** control-map. SA **chốt** Schema frequency / roadClass.  
> Nhãn UI: `useFormOptions()` / copy key — **cấm** hardcode tiếng Việt trên form/list.  
> **Cấm** hard-code số lượt · **cấm** nhét màn vào MFE desktop · **cấm** iOS/Android · **cấm** tọa độ mẫu.

## Sources

| Source | Path | note |
|--------|------|------|
| CTX | `docs/context/features/web-rmms-mobile-e.md` | created this run · hash gate |
| Screens E | `docs/plan/web-rmms-mobile/IMPLEMENT-SCREENS.md` | TK-07 |
| Gap | `GAP-TUAN-DUONG-TUAN-KIEM.md` | §6 tần suất · đợt E · cấm hard-code 3–9 |
| Peer A–D | CTX + `_data-analy/...-a/b/c/d-*` | sessions · journal · findings · close |
| BE Live cite | `GET integration/road-routes/search` · `GET patrol/sessions` | tuyến · đếm ca/đợt |
| BE Mới | frequency/plan-by-route | Schema **trước** filled grid |
| DOMAIN-MAP | Patrol · Integration `road-route` | SA thêm slug `web-rmms-mobile-e` · **cấm ERP.*** |

## Screens đợt E (ids)

| id | route | surface |
|----|-------|---------|
| TK-07 | `/field/tuan-kiem/ke-hoach` | list/table RO · empty nếu chưa API |

**Out of E:** báo cáo tháng desktop · track GPS liên tục · native · edit quy tắc trên phone.

**Entry cite (peer A):** TK-00 hub → «Kế hoạch tuần» → TK-07.

## ControlHint inventory (đợt E)

| uiField | screen | controlHint | catalogKind / notes |
|---------|--------|-------------|---------------------|
| planList | TK-07 | List/Table RO | rows theo tuyến · phone cards OK |
| route | TK-07 | Text RO | mã/tên tuyến |
| roadClass | TK-07 | Text/Chip RO | từ road-routes · trống + GAP nếu thiếu field |
| ruleText | TK-07 | Text RO | quy tắc chữ (không hard-code số chung mọi tuyến) |
| patrolDayCount | TK-07 | Number RO | số ca tuần đường trong ngày · từ API/aggregate |
| inspectWeekCount | TK-07 | Number RO | số đợt tuần kiểm trong tuần |
| coverageStatus | TK-07 | Chip RO | `thieu` \| `du` · LOOKUP_STATIC |
| emptyHint | TK-07 | EmptyState | chưa có bảng/API · copy key · **cấm** fake rows |
| refresh | TK-07 | Button | reload GET · optional |
| backHub | TK-07 | Button | về TK-00 / Field |

**Không có** field ghi / GPS / File trên TK-07.

## Filter / grid (desktop HARD)

| | |
|--|--|
| LinErpListFilterBar / DES-GRID-* | **N/A** — phone Field · **không** Kind B desktop grid |
| TK-07 list | cards/table phone · **cấm** clone ERP filter bar |

## GPS

| Màn | Rule |
|-----|------|
| TK-07 | **không** GPS (chỉ đọc) |
| Product rule (peer) | `navigator.geolocation` · deny chặn nút cần tọa độ · **cấm** mẫu — N/A trên E |

## API — Live vs Mới

| Method | Path | Live? | Note |
|--------|------|-------|------|
| GET | `patrol/…` frequency/plan (SA slug) | **Mới** | empty / 404 → EmptyState · **cấm** mock lượt |
| GET | `integration/road-routes/search` | **Live** | cấp đường nếu có |
| GET | `patrol/sessions` | **Live** | aggregate đếm nếu SA chọn client-side |
| — | bảng tần suất theo tuyến / roadClass | **Mới** | Schema **trước** pretend filled |

**Schema trước bind đủ (HARD):** frequency plan table (hoặc roadClass + rule master) · không hard-code TCCS mọi tuyến.

## UNCLEAR

| id | Issue | Action |
|----|-------|--------|
| UNCLEAR-FREQ-API | Path GET kế hoạch (resource name) | SA chốt 1 slug · Mobile.Bff proxy |
| UNCLEAR-ROAD-CLASS | Field cấp trên road-routes | Integration cite · GAP cột trống |
| UNCLEAR-COUNT-SOURCE | Server aggregate vs client sessions | SA · tránh double-count pause (peer D) |
| UNCLEAR-RULE-SOURCE | ruleText từ bảng vs enum theo roadClass | SA · GAP §6 |
| UNCLEAR-DOMAIN-SLUG | DOMAIN-MAP row `web-rmms-mobile-e` | SA thêm → Patrol (+ Integration cite) |

## Handoff

| Role | Dùng |
|------|------|
| PO | TK-07 DoD · empty-no-hardcode · RO phone · useFormOptions |
| Design | Phone 430 · zone TK-07 list/empty · no desktop grid · no edit |
| SA | Schema frequency · roadClass · DOMAIN slug E · **cấm** ERP.* |
| TL/Dev | Wire Mobile MFE only · empty until API · no fake counts |
| QA | empty vs filled · no hardcode lượt · no desktop · no GPS fake |

## Version meta

| skillVersion | schemaVersion | workflowVersion | rulesVersion |
|--------------|---------------|-----------------|--------------|
| 2026.09.05.03 | 1 | 2026.09.19.02 | 2026.09.25.2 |
