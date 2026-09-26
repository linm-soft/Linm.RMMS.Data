# PO — requirement — web-rmms-estimate

| Field | Value |
|-------|-------|
| feature | `web-rmms-estimate` |
| title | Ước lượng sự cố |
| packKind | `list` |
| changeScope | `new_page` |
| lane | `web` |
| status | `confirmed` |
| skillId | `agent-po` |
| skillVersion | `2026.09.05.03` |
| schemaVersion | `1` |
| workflowVersion | `2026.09.19.02` |
| rulesVersion | `2026.09.25.2` |
| contentHash | `sha256:e1c8b123ebcdfe00a047c54870cd6811ade05101504bd5480c8302ce7834373a` |
| writtenAt | `2026-09-26T03:15:00.000Z` |
| taskId | `task_14ec8cf1` |
| demo | **N/A** |
| prior | data_analy `confirmed` · compact `handoff/data_analy-compact.md` |
| mfe | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Mobile` |
| mfeStdRoute | `/web-rmms-estimate` |
| mfeStdUrl | `http://localhost:9301/web-rmms-estimate` |
| productRoute | `/incident/estimate/:id` · peer `/work/estimate/:id` |
| be | `D:/AI-QLBD/Linm.RMMS.WebService` · AiVision (+ Incident · Maintenance cite) · **cấm ERP.*** |
| bff | `Linm.RMMS.Mobile.Bff` · `VITE_MOBILE_API_URL=http://localhost:5202/mobile-bff/api/v1` · **cấm** web-bff client |
| phoneFrame | `max-width: 430px` · Android 1-1 · **không** ERP Modal/Slideout Kind D |
| formPattern | Mobile full · phone form primary |
| labels | `useFormOptions()` / copy key — **cấm** hardcode tiếng Việt trên form |

> Analy reuse (hash skip): inventory + controlHint + real-data §A+§B từ `_data-analy/features/` — **cấm** re-scan demo / crawl CTX.  
> packKind=`list` confirmed · surface P1 = **form** EST-F (không Kind B grid primary).

## 1. Goal / Persona / Entry

| | |
|--|--|
| Goal | Mở ước lượng từ Incident / Work → sinh dòng `from-incident` → sửa qty/đơn giá → nháp / xác nhận → **Giao việc (WO) thủ công sau confirm** |
| Persona | Điều phối · nhà thầu · Ban QLDA · tuần đường |
| Entry | Incident detail «Ước lượng» · Work hub «Giao việc / Ước lượng» · std `/web-rmms-estimate` |
| Out P1 | Me* · GPS · invent slug controller · desktop Kind B list primary · UnitPriceCatalog UI P2 · from-defects primary · auto WO · SignalR · web-bff · ERP.* · iOS/Android |

## 2. Screens

| id | productRoute | std | Surface | In DoD? |
|----|--------------|-----|---------|---------|
| EST-F | `/incident/estimate/:id` | `/web-rmms-estimate` (+ deep id / query — Design chốt) | Header SC · lines · footer draft/confirm/WO | **YES — primary** |
| EST-W | `/work/estimate` · `/work/estimate/:id` | peer work nest | Cùng form · entry Work | **YES — peer entry** · cùng AC EST-F |

Prototype zone (Design 1-1): estimate form · reviewUrl — **không** demo SSOT ship.

## 3. Grid / List AC (packKind=list)

| AC id | Criterion | Pass |
|-------|-----------|------|
| AC-GRID-01 | LinErpListFilterBar / DES-GRID-* | **N/A** — phone form · không Kind B desktop grid primary |
| AC-GRID-02 | History `GET ai-vision/estimates` | optional · **không** P1 DoD mobile |
| AC-GRID-03 | Report AC | **N/A** — không packKind=report |

## 4. Form AC (EST-F primary DoD)

| AC id | Criterion | Pass |
|-------|-----------|------|
| AC-F-01 | Header SC live `GET incident/incidents/{id}` (Title · Code · Severity · Status · Route · Km) | thiếu id → EmptyState · 404 toast · **cấm** fake stub UI |
| AC-F-02 | `POST ai-vision/estimates/from-incident/{incidentId}` khi chưa có estimate (`action.open`) | 422 → toast · **cấm** invent `ai-estimate/*` |
| AC-F-03 | Load detail `GET ai-vision/estimates/{id}` + init-data lookups | empty lookups → LOOKUP_STATIC FE · toast fail |
| AC-F-04 | Edit header overrides + `Lines[]` (Qty · UnitPrice · Item* · Unit · Note) · `PUT …/{id}` | Amount/TotalAmount RO recalculate |
| AC-F-05 | `POST …/{id}/draft` · status draft · dirty leave confirm | Dialog leave dirty |
| AC-F-06 | `POST …/{id}/confirm` · Note optional · **lock edit** sau confirm | **cấm** auto tạo WO |
| AC-F-07 | `action.wo` `POST maintenance/work-orders` **chỉ khi** status=confirmed | WO trước confirm → fail toast / disable (**UNCLEAR-WO-GATE = YES**) |
| AC-F-08 | Optional `POST incident/incidents/{id}/assign` | không block DoD confirm/WO |
| AC-F-09 | Labels `useFormOptions()` / copy key | **cấm** hardcode VN form |
| AC-F-10 | Phone ≤430 · Android 1-1 · Mobile.Bff `:5202` only | **cấm** web-bff · **cấm** GPS trên estimate |
| AC-F-11 | Toast / EmptyState | **cấm** `window.alert` · **cấm** demo-json / itemsOrDemo |

**CreateWorkOrderRequest (cite SCREENS):** RouteName · WorkType · Status=`new` · DueAt · SlaHours (P1 24) · AssigneeName · TeamName · IncidentId · Title · Description.

## 5. Control inventory (cite analy — Design chốt map)

| uiField | controlHint | notes |
|---------|-------------|-------|
| topBar.back / title | Button / Text | back incident/work · copy key |
| header.incident/* | Text RO | GET incident |
| header.code / sourceType / model / status | Text/Badge RO | detail · lock after confirm |
| header.defectType / severity | Select | init-data |
| header.defectArea / laborHours / durationDays | NumberInput | write PUT |
| header.equipment | Text | write PUT |
| lines.* | InlineList | Qty/UnitPrice edit · Amount RO |
| totalAmount | LabelMoney RO | TotalAmount |
| action.open / save / draft / confirm / wo / assign | Button | FormMode↔API |
| leaveConfirm / empty / toast | Dialog / Empty / Toast | dirty · missing id |

## 6. API (cite Live — SA confirm DTO)

| Method | Path | Note |
|--------|------|------|
| GET | `incident/incidents/{id}` | header SC |
| GET | `ai-vision/estimates/init-data` | lookups |
| POST | `ai-vision/estimates/from-incident/{incidentId}` | create |
| GET | `ai-vision/estimates/{id}` | detail |
| PUT | `ai-vision/estimates/{id}` | update lines/header |
| POST | `ai-vision/estimates/{id}/draft` | draft |
| POST | `ai-vision/estimates/{id}/confirm` | confirm · Note? |
| POST | `maintenance/work-orders` | WO after confirm |
| POST | `incident/incidents/{id}/assign` | optional |
| GET | `ai-vision/estimates` | history optional · không DoD |

App base `{BffBase}/mobile-bff/api/v1`. **Cấm** invent `ai-estimate/*` · **cấm** invent path/controller theo slug `web-rmms-estimate` · **cấm ERP.***.

## 7. Leave / Out of scope (HARD)

- Me* · GPS / fake coords trên estimate
- Auto tạo WO khi confirm
- WO trước confirm (disable / fail)
- from-defects primary (DEFER peer vis-capture)
- UnitPriceCatalog tenant UI P2
- Desktop Kind B list primary · LinErpListFilterBar
- invent slug DTO/path · web-bff client · ERP.* · iOS/Android
- demo-json / HostIncidentsStub làm FE SSOT
- History list làm DoD primary

## 8. PO decisions (autoApprove)

| id | Decision | Owner next |
|----|----------|------------|
| UNCLEAR-WO-GATE | **YES** — WO chỉ sau confirm · confirm **không** auto WO | Design copy · Dev gate · QA |
| UNCLEAR-DOMAIN-MAP-EST | **Defer SA** — thêm row `web-rmms-estimate` → AiVision (+ Incident/Maintenance cite) · MFE `/web-rmms-estimate` | SA |
| UNCLEAR-STD-MOUNT | Design/Dev chốt std deep id vs query `incidentId`/`estimateId` | Design → Dev |
| UNCLEAR-HOST-STUB | **Cấm** FE rely HostIncidentsStub — live incident id · toast 404 | SA/Dev |
| UNCLEAR-FROM-DEFECTS | **OUT P1** — DEFER peer vis-capture | — |
| packKind | **`list` confirmed** · Form AC primary · Grid AC N/A phone | Design |

## 9. Handoff Design

| | |
|--|--|
| Write | `ui/design.md` + prototype + reviewUrl |
| Zones | EST-F · EST-W · phone 430 · Android 1-1 |
| Map | controlHint §5 + real-data §B |
| HARD | confirm-then-WO · no auto WO · useFormOptions · no GPS · no DES-GRID primary |
| Next | SA cite Live ai-vision/estimates · DOMAIN-MAP row · **cấm ERP.*** |

## Version meta

`skillVersion=2026.09.05.03` · `schemaVersion=1` · `contentHash=sha256:e1c8b123ebcdfe00a047c54870cd6811ade05101504bd5480c8302ce7834373a` · `rulesVersion=2026.09.25.2` · `writtenAt=2026-09-26T03:15:00.000Z` · `status=confirmed`
