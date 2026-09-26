# Data-analy — real-data bind — web-rmms-estimate

| Field | Value |
|-------|-------|
| feature | `web-rmms-estimate` |
| title | Ước lượng sự cố |
| packKind | `list` |
| changeScope | `new_page` |
| status | `done` |
| taskId | `task_4109c995` |
| prefix API | `api/v1` · resources `ai-vision` · `incident` · cite `maintenance` |
| prefix BFF web (cite) | `web-bff/api/v1/{resource}` · **không** base client |
| prefix BFF mobile (HARD) | `mobile-bff/api/v1` · `:5202` · cùng `{resource}` |
| beRepo | `D:/AI-QLBD/Linm.RMMS.WebService` · **cấm ERP.*** |
| bffRepo | `Linm.RMMS.Mobile.Bff` · **cấm** Route mobile-bff trên web-bff controllers |
| uiRepo | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Mobile` |
| mfeStdUrl | `http://localhost:9301/web-rmms-estimate` |
| productRoute | `/incident/estimate/:id` · peer `/work/estimate/:id` |
| domain | **AiVision** + **Incident** (+ Maintenance cite WO) |
| contentHash | `sha256:e1c8b123ebcdfe00a047c54870cd6811ade05101504bd5480c8302ce7834373a` |
| skillVersion | `2026.09.05.03` |
| schemaVersion | `2` |
| workflowVersion | `2026.09.19.02` |
| rulesVersion | `2026.09.25.2` |
| analyzedAt | `2026-09-26T03:04:52.000Z` |
| demo | **N/A** · **cấm** demo-json / in-app mock SSOT |

## § Scope

| In | Out |
|----|-----|
| EST-F form from incident · draft · confirm · WO | Me tab · GPS · desktop Kind B list primary |
| Live `ai-vision/estimates` CRUD-lite · incident GET · work-orders POST | invent `ai-estimate/*` · invent `web-rmms-estimate/*` |
| Mobile.Bff proxy only | web-bff client · ERP.* · iOS/Android |
| Peer entry work nest | from-defects primary · UnitPriceCatalog UI P2 · auto WO |

## §A — Nguồn

| sourceKind | sourceCite | empty | error |
|------------|------------|-------|-------|
| `context` | `docs/context/features/web-rmms-estimate.md` | — | created this run |
| `peer-context` | `estimate.md` · incident · work | — | path reconcile |
| `plan` | SCREENS estimate · PLAN · T-W4-06 / T-W5-05 | — | SSOT |
| `api-incident` | `GET incident/incidents/{id}` | 404 toast · chặn open | toast |
| `api-init` | `GET ai-vision/estimates/init-data` | empty lookups → LOOKUP_STATIC FE | toast |
| `api-from-incident` | `POST ai-vision/estimates/from-incident/{incidentId}` | — | 422 toast |
| `api-detail` | `GET ai-vision/estimates/{id}` | 404 toast | toast / 403 |
| `api-update` | `PUT ai-vision/estimates/{id}` | — | 422 toast |
| `api-draft` | `POST ai-vision/estimates/{id}/draft` | — | toast |
| `api-confirm` | `POST ai-vision/estimates/{id}/confirm` | — | toast · lock |
| `api-wo` | `POST maintenance/work-orders` | — | **chỉ sau confirm** · toast |
| `api-assign` | `POST incident/incidents/{id}/assign` | optional | toast |
| `api-list` | `GET ai-vision/estimates` | optional history | **không** primary DoD |
| `domain-map` | AiVision · Incident · Maintenance | — | **GAP** slug · **cấm ERP.*** |
| `catalog` | init-data + useFormOptions | — | **cấm** hardcode VN |
| `demo` | — | N/A | **cấm** demo SSOT ship |

## §B — Bind field (HARD)

### Header / create EST-F

| uiField | Label (key) | controlHint | catalogKind | GET | write field | sameMfe | sameMobile |
|---------|-------------|-------------|-------------|-----|-------------|---------|------------|
| incident.* | header SC | Text RO | — | `GET …/incidents/{id}` | — | SCREENS | n/a |
| open | mở dự toán | Button | — | — | POST from-incident | Live | n/a |
| code | mã EST | Text RO | — | detail | `Code` | Live | auto |
| sourceType | nguồn | Badge RO | LOOKUP_STATIC | init | `SourceType=from-incident` | Live | P1 |
| defectType | loại hư | Select | init DefectTypes | init | `DefectType` | Live | n/a |
| defectArea | diện tích | Number | — | — | `DefectArea` | Live | n/a |
| severity | mức | Select | init Severities | init | `Severity` | Live | n/a |
| model | model | Text RO | — | — | `ModelVersion` | Live | n/a |
| laborHours | giờ NC | Number | — | — | `LaborHours` | Live | n/a |
| equipment | thiết bị | Text | — | — | `Equipment` | Live | n/a |
| durationDays | ngày TC | Number | — | — | `DurationDays` | Live | n/a |
| status | trạng thái | Badge | init Statuses | — | draft→confirmed | Live | lock after confirm |

### Lines

| uiField | Label (key) | controlHint | catalogKind | GET | write field | sameMfe | sameMobile |
|---------|-------------|-------------|-------------|-----|-------------|---------|------------|
| line.itemCode | mã HM | Text | UnitCatalog stub | init | `ItemCode` | Live | n/a |
| line.itemName | tên HM | Text | — | — | `ItemName` | Live | n/a |
| line.qty | KL | Number | — | — | `Qty` | SCREENS | n/a |
| line.unit | ĐVT | Text | — | — | `Unit` | Live | n/a |
| line.unitPrice | đơn giá | Money | — | — | `UnitPrice` | SCREENS | n/a |
| line.amount | thành tiền | LabelMoney RO | — | — | `Amount` | Live | client/server |
| line.note | ghi chú | Text | — | — | `Note` | Live | n/a |
| totalAmount | tổng | LabelMoney RO | — | — | `TotalAmount` | Live | n/a |

**Update body (cite Live `UpdateEstimateRequest`):** header overrides + `Lines[]` (`Id?` · `SortOrder` · `ItemCode` · `ItemName` · `Qty` · `Unit` · `UnitPrice` · `Note`).

### Actions / WO

| uiField | Label (key) | controlHint | catalogKind | GET | write field | sameMfe | sameMobile |
|---------|-------------|-------------|-------------|-----|-------------|---------|------------|
| draft | lưu nháp | Button | — | — | POST draft | Live | n/a |
| confirm | xác nhận | Button | — | — | POST confirm · `Note?` | Live | **cấm** auto WO |
| wo | giao việc | Button | — | — | POST work-orders | SCREENS | after confirm |
| assign | gán SC | Button | — | — | POST assign | SCREENS | optional |

**CreateWorkOrderRequest (cite SCREENS):** `RouteName` · `WorkType` · `Status=new` · `DueAt` · `SlaHours` (P1 24) · `AssigneeName` · `TeamName` · `IncidentId` · `Title` · `Description`.

**Cấm** ERP.* · **cấm** itemsOrDemo · **cấm** invent slug DTO/path · **cấm** hardcode VN labels · **cấm** WO trước confirm (default).

## §C — Catalog

| catalogKind | search/list API | seed/import cite | Cấm |
|-------------|-----------------|------------------|------|
| LOOKUP_STATIC | FE `useFormOptions` + init-data | CTX + SCREENS | hardcode label VN |
| init-data | `GET ai-vision/estimates/init-data` | AiVision Live | invent estimate-options endpoint |
| UnitCatalog | init `UnitCatalog` stub | P2 UnitPriceCatalog DEFER | invent price CRUD P1 |
| HostIncidents | init stub | **BE internal** | **cấm** FE rely stub · dùng live incident id |
| profile | `GET auth/profile` | Auth cite shell | invent user API trong estimate |

## §D — Map / vẽ

| Mục | Ghi |
|-----|-----|
| map / GPS | **N/A** · SCREENS · không draw |

## §E — Progress / vòng đời

| stateField | Nguồn | Ai đổi | API | UI |
|------------|-------|--------|-----|-----|
| open from SC | Incident + AiVision | open button | POST from-incident | lines seed |
| draft | AiVision Live | draft / PUT | draft · PUT | status draft · dirty |
| confirmed | AiVision Live | confirm | POST confirm | lock edit · ConfirmedAt |
| wo | Maintenance Live | giao việc | POST work-orders | toast · nav work optional |
| assign | Incident Live | assign | POST assign | optional |

`progress: open → edit → draft? → confirm → wo?` · **cấm** skip confirm → WO (default).

## §F — Handoff

| Role | Packet |
|------|--------|
| PO | DoD EST-F · confirm-then-WO · no auto WO · BFF mobile only |
| Design | control-map §B · phone 430 · Android 1-1 · reviewUrl |
| SA | Cite Live ai-vision/estimates (+incident/maintenance) · DOMAIN-MAP row · Mobile.Bff · **cấm** invent path · **cấm** ERP.* |
| Dev web mobile | `Linm.Web.RMMS.Mobile` · `VITE_MOBILE_API_URL` `:5202` |
| QA | missing incident · dirty leave · confirm lock · WO before confirm · no fake · no web-bff |

## Gaps (cite)

| id | Note |
|----|------|
| GAP-DA-EST-CTX-01 | CTX `web-rmms-estimate.md` thiếu lúc start → **created** từ SCREENS + estimate peer |
| GAP-DOMAIN-MAP-EST | slug `web-rmms-estimate` chưa có row DOMAIN-MAP |
| GAP-EST-WO-01 | WO chỉ sau confirm — PO/Design chốt copy |
| GAP-EST-HOST-01 | BE HostIncidentsStub fallback — SA cite live incident · không UI stub |
| GAP-EST-DEFECTS-01 | from-defects mobile DEFER |
| GAP-EST-PRICE-P2 | UnitPriceCatalog tenant UI P2 |
| GAP-STD-MOUNT | std deep id vs query — Design/Dev |

## Version meta

`skillVersion=2026.09.05.03` · `schemaVersion=2` · `contentHash=sha256:e1c8b123ebcdfe00a047c54870cd6811ade05101504bd5480c8302ce7834373a` · `rulesVersion=2026.09.25.2` · `analyzedAt=2026-09-26T03:04:52.000Z`
