# PO — requirement — web-rmms-mobile-e

| Field | Value |
|-------|-------|
| feature | `web-rmms-mobile-e` |
| title | Đợt E — kế hoạch tần suất (TK-07) |
| packKind | `list` · **confirmed** |
| changeScope | `edit_page` |
| lane | `web` · MFE Mobile only |
| status | `done` |
| skillId | `agent-po` |
| skillVersion | `2026.09.05.03` |
| schemaVersion | `1` |
| workflowVersion | `2026.09.19.02` |
| rulesVersion | `2026.09.25.2` |
| versionGate | `ok` |
| contentHash | `sha256:b7fde038e4ef2cdb7ac0cacf9eb5f303671f1daffcbe9d058c5107e78413db2d` |
| writtenAt | `2026-09-25T10:20:45.000Z` |
| demo | **N/A** |
| prior | data_analy `confirmed` · compact `handoff/data_analy-compact.md` |
| mfe | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Mobile` |
| mfeStdRoute | `/web-rmms-mobile-e` |
| mfeStdUrl | `http://localhost:9301/web-rmms-mobile-e` |
| be | `D:/AI-QLBD/Linm.RMMS.WebService` · Patrol (+ Integration road-routes) · **cấm ERP.*** |
| phoneFrame | `max-width: 430px` |
| formPattern | Mobile full · **không** ERP Modal/Slideout · DES-GRID / LinErpListFilterBar **N/A** |

## 1. Goal

Màn **TK-07** đọc kế hoạch tần suất theo tuyến: quy tắc chữ + đếm ca/đợt thực tế + chip thiếu/đủ.  
API kế hoạch **Mới** — chưa schema / 404 → **EmptyState** · **cấm** hard-code số lượt (TCCS 3–9 hay hằng FE).  
**Read-only** trên phone — không sửa quy tắc · không GPS · không desktop Asset.

## 2. Screens

| id | route | surface | DoD |
|----|-------|---------|-----|
| TK-07 | `/field/tuan-kiem/ke-hoach` | list/cards RO · phone 430 | empty nếu chưa API · filled khi có plan |
| entry | TK-00 hub → «Kế hoạch tuần» | nav cite peer A | backHub về Field/hub |

**Zones (ids):** `planList` · `emptyHint` · `refresh?` · `backHub` · row fields dưới.

## 3. Inventory → AC (list / Grid AC)

| uiField | controlHint | AC |
|---------|-------------|-----|
| planList | List/Table RO | rows theo tuyến · phone cards OK · **cấm** ERP filter bar |
| route | Text RO | mã/tên từ plan / road-routes |
| roadClass | Text/Chip RO | từ road-routes · trống + GAP nếu thiếu field |
| ruleText | Text RO | quy tắc chữ per route/class · **cấm** một số hardcode mọi tuyến |
| patrolDayCount | Number RO | ca tuần đường/ngày · từ API/agg · **cấm** fake |
| inspectWeekCount | Number RO | đợt tuần kiểm/tuần · từ API/agg · **cấm** fake |
| coverageStatus | Chip RO | `thieu` \| `du` · LOOKUP_STATIC via `useFormOptions()` |
| emptyHint | EmptyState | 404 / no table · copy key · **cấm** fake rows |
| refresh | Button | optional reload GET |
| backHub | Button | về TK-00 / Field |

**Không** field ghi / GPS / File trên TK-07.

### Grid AC (packKind=list · phone)

| AC-id | Criterion | Pass |
|-------|-----------|------|
| AC-LIST-01 | Có dữ liệu plan → hiển thị list/cards đủ cột RO | filled |
| AC-LIST-02 | 404 / chưa bảng → EmptyState · **0** mock row / mock count | empty |
| AC-LIST-03 | Labels qua `useFormOptions()` / copy key · **cấm** hardcode VN | labels |
| AC-LIST-04 | Không LinErpListFilterBar / DES-GRID desktop Kind B | layout |
| AC-LIST-05 | Phone max-width 430 · chỉ `Linm.Web.RMMS.Mobile` | MFE |
| AC-LIST-06 | coverageStatus chỉ `thieu`\|`du` từ bind/computed · không invent | chip |
| AC-LIST-07 | Không write / không edit rule trên phone | RO |
| AC-LIST-08 | Không GPS / không tọa độ mẫu trên E | GPS N/A |

## 4. Leave (out of E)

- Báo cáo tháng desktop  
- Track GPS liên tục  
- Native iOS/Android  
- Sửa quy tắc / master frequency trên phone  
- Hard-code lượt · demo HTML / demo-json SSOT  
- ERP.* / Domains/Master · nhét màn vào MFE desktop Asset  

## 5. API / bind (cite analy · SA chốt slug)

| Method | Path | Live? | UI |
|--------|------|-------|-----|
| GET | `patrol/…` frequency/plan (SA slug) | **Mới** | planList · empty on 404 |
| GET | `integration/road-routes/search` | **Live** | route · roadClass? |
| GET | `patrol/sessions` | **Live** | agg counts nếu SA chọn client |
| GET | `auth/profile` | Live | auth gate |

Prefix plan: `api/v1/patrol` · `api/v1/integration` · `mobile-bff/api/v1` cùng `{resource}`.

**Schema trước filled (HARD):** bảng frequency / rule-by-class · **cấm** pretend filled.

## 6. Open → SA (không block PO DoR)

| id | Issue |
|----|-------|
| UNCLEAR-FREQ-API | Path GET kế hoạch |
| UNCLEAR-ROAD-CLASS | Field cấp trên road-routes |
| UNCLEAR-COUNT-SOURCE | Server agg vs client sessions |
| UNCLEAR-RULE-SOURCE | ruleText bảng vs enum theo class |
| UNCLEAR-DOMAIN-SLUG | DOMAIN-MAP row `web-rmms-mobile-e` |

## 7. DoD / Leave gate

| Gate | Rule |
|------|------|
| empty-no-hardcode | PASS |
| RO phone | PASS |
| useFormOptions | PASS |
| Mobile only · 430 | PASS |
| cấm ERP.* | PASS |
| packKind list | **confirmed** |
| DES-GRID | **N/A** phone |

## 8. Handoff Design

- Prototype phone 430 · zone TK-07 list + empty · reviewUrl  
- control-map khớp inventory · **không** edit · **không** desktop grid  
- Labels key-only · coverageStatus chip states  

## Version meta

| skillVersion | schemaVersion | workflowVersion | rulesVersion |
|--------------|---------------|-----------------|--------------|
| 2026.09.05.03 | 1 | 2026.09.19.02 | 2026.09.25.2 |
