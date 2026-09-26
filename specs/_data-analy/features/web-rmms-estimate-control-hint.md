# Data-analy — controlHint — web-rmms-estimate

| Field | Value |
|-------|-------|
| feature | `web-rmms-estimate` |
| title | Ước lượng sự cố |
| packKind | `list` |
| changeScope | `new_page` |
| mode | `feature_context` |
| status | `done` |
| skillId | `agent-data-analy` |
| skillVersion | `2026.09.05.03` |
| schemaVersion | `1` |
| workflowVersion | `2026.09.19.02` |
| rulesVersion | `2026.09.25.2` |
| versionGate | `ok` |
| contentHash | `sha256:e1c8b123ebcdfe00a047c54870cd6811ade05101504bd5480c8302ce7834373a` |
| analyzedAt | `2026-09-26T03:04:52.000Z` |
| demo | **N/A** |
| realData | `specs/_data-analy/features/web-rmms-estimate-real-data.md` |
| beRepo | `D:/AI-QLBD/Linm.RMMS.WebService` · **AiVision** + Incident · Maintenance cite · **cấm ERP.*** |
| uiRepo | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Mobile` |
| mfeStdUrl | `http://localhost:9301/web-rmms-estimate` |
| mfeStdRoute | `/web-rmms-estimate` |
| productRoute | `/incident/estimate/:id` · peer `/work/estimate/:id` |
| taskId | `task_4109c995` |
| phoneFrame | `max-width: 430px` |
| formPattern | Mobile full · Android 1-1 · **không** ERP Modal/Slideout Kind D desktop primary |
| bff | `Linm.RMMS.Mobile.Bff` · `VITE_MOBILE_API_URL=http://localhost:5202/mobile-bff/api/v1` · **cấm** web-bff |
| priorPeer | `estimate` · `web-rmms-incident` · `web-rmms-work` |

> Data-analy **đề xuất** controlHint. Design **chốt** control-map + prototype reviewUrl. SA **cite** Live `ai-vision/estimates` · **cấm** invent path theo slug.  
> Nhãn UI: `useFormOptions()` / copy key — **cấm** hardcode tiếng Việt trên form.  
> **Cấm** auto WO · **cấm** Me* · **cấm** iOS/Android · **cấm** fake GPS · **cấm** ERP.*.

## Sources

| Source | Path | note |
|--------|------|------|
| CTX | `docs/context/features/web-rmms-estimate.md` | **created this run** · hash gate |
| Peer CTX | `docs/context/features/estimate.md` | desktop/AI panel · canonical path reconcile |
| Screens | `docs/plan/web-rmms-mobile/SCREENS.md` | `/incident/estimate/:id` |
| Plan/task | `PLAN.md` · `TASKS.md` T-W4-06 · T-W5-05 | Estimate · work mount |
| DOMAIN-MAP | `estimate` → AiVision | **GAP** slug `web-rmms-estimate` |
| Live | `AiVisionEstimatesController` · `EstimateDtos` | `api/v1/ai-vision/estimates` |
| Peer | web-rmms-incident · web-rmms-work | entry / hub |

## Screens (ids)

| id | route | surface |
|----|-------|---------|
| EST-F | `/incident/estimate/:id` · std `/web-rmms-estimate` | Form header SC · lines · footer draft/confirm/WO |
| EST-W | `/work/estimate` · `/work/estimate/:id` | Peer entry cùng form |

**Out:** Me* · desktop Kind B list primary · UnitPriceCatalog CRUD P2 · invent `ai-estimate/*` · invent `web-rmms-estimate` controller · web-bff client · auto WO.

## ControlHint inventory

### EST-F — Form ước lượng

| uiField | screen | controlHint | catalogKind / notes |
|---------|--------|-------------|---------------------|
| topBar.back | EST-F | Button | back incident detail / work |
| topBar.title | EST-F | Text | copy key «Ước lượng» / estimate title |
| header.code | EST-F | Text RO | `Code` EST-… sau create |
| header.incident | EST-F | Text RO | `GET incident/incidents/{id}` · Title · Code · Severity · Status |
| header.routeKm | EST-F | Text RO | RouteName · KmStart từ incident |
| header.sourceType | EST-F | Badge/Text RO | `from-incident` P1 |
| header.defectType | EST-F | Select/Text | init-data DefectTypes · `DefectType` |
| header.defectArea | EST-F | NumberInput | `DefectArea` m² |
| header.severity | EST-F | Select | init-data Severities |
| header.model | EST-F | Text RO | `ModelVersion` |
| header.laborHours | EST-F | NumberInput | `LaborHours` |
| header.equipment | EST-F | Text | `Equipment` CSV/free |
| header.durationDays | EST-F | NumberInput | `DurationDays` |
| lines | EST-F | InlineList/Grid | `Lines[]` · pattern mobile rows |
| line.itemCode | EST-F | Text | `ItemCode` |
| line.itemName | EST-F | Text | `ItemName` |
| line.qty | EST-F | NumberInput | `Qty` · SCREENS edit |
| line.unit | EST-F | Text | `Unit` |
| line.unitPrice | EST-F | MoneyInput | `UnitPrice` |
| line.amount | EST-F | LabelMoney RO | `Amount` = qty×unitPrice |
| line.note | EST-F | Text | `Note` optional |
| totalAmount | EST-F | LabelMoney RO | `TotalAmount` |
| status | EST-F | Badge | draft / confirmed · lock edit sau confirm |
| action.open | EST-F | Button | `POST …/from-incident/{incidentId}` khi chưa có estimate |
| action.save | EST-F | Button | `PUT …/{id}` dirty lines/header |
| action.draft | EST-F | Button secondary | `POST …/{id}/draft` |
| action.confirm | EST-F | Button primary | `POST …/{id}/confirm` · Note optional · **cấm** auto WO |
| action.wo | EST-F | Button | `POST maintenance/work-orders` · **sau** confirm |
| action.assign | EST-F | Button optional | `POST incident/incidents/{id}/assign` |
| leaveConfirm | EST-F | Dialog | dirty leave |
| empty | EST-F | EmptyState | thiếu incidentId · toast |
| toast.ok/fail | EST-F | Toast | **cấm** `window.alert` |

### EST-W — Work peer entry

| uiField | screen | controlHint | catalogKind / notes |
|---------|--------|-------------|---------------------|
| entry.fromWork | EST-W | Nav | hub estimate · cùng EST-F |
| stub.noId | EST-W | Empty/Hint | thiếu id → chọn SC / back work list |

## Filter / grid (desktop HARD)

| | |
|--|--|
| LinErpListFilterBar / DES-GRID-* | **N/A** — phone form · **không** Kind B desktop grid primary |
| History list | optional `GET ai-vision/estimates` · **không** P1 DoD mobile |

## GPS

| Màn | Rule |
|-----|------|
| EST-F / EST-W | **không** GPS · SCREENS |

## API (cite Live — SA confirm DTO)

| Method | Path | Note |
|--------|------|------|
| GET | `incident/incidents/{id}` | header SC |
| GET | `ai-vision/estimates/init-data` | lookups |
| POST | `ai-vision/estimates/from-incident/{incidentId}` | create |
| GET | `ai-vision/estimates/{id}` | detail |
| PUT | `ai-vision/estimates/{id}` | update lines |
| POST | `ai-vision/estimates/{id}/draft` | draft |
| POST | `ai-vision/estimates/{id}/confirm` | confirm |
| POST | `maintenance/work-orders` | WO after confirm |
| POST | `incident/incidents/{id}/assign` | assign optional |
| GET | `ai-vision/estimates` | history optional |

App base: `{BffBase}/mobile-bff/api/v1`. **Cấm** invent `ai-estimate/*` · **cấm** invent path theo slug `web-rmms-estimate`.

## UNCLEAR

| id | Issue | Action |
|----|-------|--------|
| UNCLEAR-DOMAIN-MAP-EST | DOMAIN-MAP chưa có row `web-rmms-estimate` | SA thêm · AiVision (+ Incident/Maintenance cite) · MFE `/web-rmms-estimate` |
| UNCLEAR-STD-MOUNT | std deep id vs query `incidentId`/`estimateId` | Design/Dev chốt mount nest |
| UNCLEAR-WO-GATE | WO chỉ sau confirm? | Default **YES** · PO confirm |
| UNCLEAR-HOST-STUB | CreateFromIncident dùng HostIncidentsStub fallback | SA/Dev live incident id · **cấm** fake UI stub |
| UNCLEAR-FROM-DEFECTS | from-defects entry mobile | P1 out · DEFER peer vis-capture |

## Handoff

| Role | Dùng |
|------|------|
| PO | EST-F DoD · confirm rồi WO · no auto WO · useFormOptions · Mobile.Bff |
| Design | Phone 430 · Android 1-1 · zones EST-* · prototype + reviewUrl |
| SA | Cite Live ai-vision/estimates (+ incident/maintenance) · DOMAIN-MAP row · **cấm** ERP.* |
| TL/Dev | Wire Mobile MFE · BFF `:5202` · **cấm** web-bff · **cấm** invent path |
| QA | empty incident · draft dirty leave · confirm lock · WO trước confirm fail · no fake · no Me |

## Version meta

`skillVersion=2026.09.05.03` · `schemaVersion=1` · `contentHash=sha256:e1c8b123ebcdfe00a047c54870cd6811ade05101504bd5480c8302ce7834373a` · `rulesVersion=2026.09.25.2` · `analyzedAt=2026-09-26T03:04:52.000Z`
