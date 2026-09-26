# SA — Solution — web-rmms-estimate

> Status: **confirmed** · autoApprove ON · task `task_ebc8899d` · 2026-09-26T03:45:00.000Z  
> **Cấm** ERP.* · **cấm** invent `ai-estimate/*` / `web-rmms-estimate/*` controller · **cấm** Step 4b / migration ở role SA · **cấm** Write MFE/native · **cấm** web-bff client base · **cấm** e2e / start:std · **cấm** auto WO · **cấm** HostIncidentsStub FE · **cấm** Me* · **cấm** GPS · **cấm** hardcode VN · **cấm** from-defects P1 · **cấm** UnitPriceCatalog UI P1.

| | |
|--|--|
| Feature | `web-rmms-estimate` |
| Title | Ước lượng sự cố |
| Role | `sa` |
| packKind | `list` |
| changeScope | `new_page` |
| formPattern | Mobile full · phone max-width 430 · Android 1-1 · N/A ERP Modal/Slideout · N/A DES-GRID / LinErpListFilterBar |
| domain | **AiVision** (`ai-vision`) · primary `estimates` · cite **Incident** · cite **Maintenance** WO |
| mfe | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Mobile` · mfeStdRoute `/web-rmms-estimate` |
| mfeStdUrl | `http://localhost:9301/web-rmms-estimate` |
| productRoute | `/incident/estimate/:id` · peer `/work/estimate/:id` |
| be | `D:/AI-QLBD/Linm.RMMS.WebService` |
| BFF | `Linm.RMMS.Mobile.Bff` `:5202` · prefix `mobile-bff/api/v1` · `VITE_MOBILE_API_URL` |
| contentHash | `sha256:e1c8b123ebcdfe00a047c54870cd6811ade05101504bd5480c8302ce7834373a` |
| skillVersion | `2026.09.05.03` |
| solution_confirm | **approve** (autoApprove) |
| reviewUrl | `file:///D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-estimate/ui/prototype/index.html` |
| peer | `web-rmms-incident` · `web-rmms-work` · cite AiVision estimates Live |

## 1. Domain / ownership

| Item | Decision |
|------|----------|
| DOMAIN-MAP slug | `web-rmms-estimate` → **AiVision** / `ai-vision` |
| Rationale | Live surface = `ai-vision/estimates*` (from-incident · GET/PUT · draft · confirm) · cite Incident GET header · Maintenance `work-orders` AFTER confirm · no new domain |
| Cite peers | SCREENS estimate · real-data §A+§B · PO AC-F-01..11 · Design EST-F/EST-W · peer `estimate` slug + `web-rmms-incident` / `web-rmms-work` |
| API folder | **reuse** AiVision EstimatesController · Mobile.Bff catch-all — **no new** controller/entity/DTO fork |
| **Cấm** | invent `ai-estimate/*` · invent `web-rmms-estimate` controller · ERP.* · web-bff client · Me* · auto WO · HostIncidentsStub FE |

**DOMAIN-MAP row (applied):**

| Feature slug | Domain Pascal | kebab |
|--------------|---------------|-------|
| `web-rmms-estimate` | AiVision | `ai-vision` · Live `estimates` from-incident/GET/PUT/draft/confirm · cite Incident GET · Maintenance work-orders after confirm · MFE `Linm.Web.RMMS.Mobile` `/web-rmms-estimate` · **cấm** invent `ai-estimate/*` / EstimateHubController |

## 2. FormMode ↔ API

Form **không** Modal ERP. Modes = empty → open → edit → draft? → confirm lock → WO?

| Mode / zone | UI | API | Write | Notes |
|-------------|----|-----|-------|-------|
| EST-EMPTY | missing `incidentId` | — | — | std `?incidentId=` · product `:id`=incidentId · Design STD-MOUNT |
| EST-OPEN / header | SC header RO | `GET …/incident/incidents/{incidentId}` | — | 404 → toast · chặn open |
| open | action.open | `POST …/ai-vision/estimates/from-incident/{incidentId}` | — | seed lines · returns estimate id |
| EST-EDIT load | form + lines | `GET …/ai-vision/estimates/{estimateId}` | — | optional `?estimateId=` |
| edit save | lines qty/unitPrice + header | `PUT …/ai-vision/estimates/{id}` | UpdateEstimateRequest · `Lines[]` | Amount/TotalAmount RO |
| draft | action.draft | `POST …/ai-vision/estimates/{id}/draft` | — | status draft |
| confirm | action.confirm | `POST …/ai-vision/estimates/{id}/confirm` | `Note?` | lock edit · ConfirmedAt · **cấm** auto WO |
| EST-LOCK | fields RO | — | — | after confirm |
| EST-WO | action.wo | `POST …/maintenance/work-orders` | CreateWorkOrderRequest | **chỉ sau confirm** · WO-GATE=YES |
| assign (opt) | action.assign | `POST …/incident/incidents/{id}/assign` | — | optional |
| lookup | defectType/severity/status | `GET …/ai-vision/estimates/init-data` | — | useFormOptions · LOOKUP_STATIC fallback · **cấm** hardcode VN |
| leave | DES-LEAVE | — | — | LeaveConfirmModal · no alert |

### Live endpoints (HARD — from real-data §B)

| Method | BFF path (client) | Downstream | Request / bind | Status |
|--------|-------------------|------------|----------------|--------|
| GET | `mobile-bff/api/v1/incident/incidents/{incidentId}` | Incident detail | header SC · **live id only** | **Live** |
| GET | `mobile-bff/api/v1/ai-vision/estimates/init-data` | AiVision init | DefectTypes · Severities · Statuses · UnitCatalog stub | **Live** |
| POST | `mobile-bff/api/v1/ai-vision/estimates/from-incident/{incidentId}` | AiVision | open dự toán | **Live** |
| GET | `mobile-bff/api/v1/ai-vision/estimates/{id}` | AiVision detail | form + lines | **Live** |
| PUT | `mobile-bff/api/v1/ai-vision/estimates/{id}` | AiVision | header + `Lines[]` (`Id?`·`SortOrder`·`ItemCode`·`ItemName`·`Qty`·`Unit`·`UnitPrice`·`Note`) | **Live** |
| POST | `mobile-bff/api/v1/ai-vision/estimates/{id}/draft` | AiVision | draft | **Live** |
| POST | `mobile-bff/api/v1/ai-vision/estimates/{id}/confirm` | AiVision | `Note?` · lock | **Live** |
| POST | `mobile-bff/api/v1/maintenance/work-orders` | Maintenance | `RouteName`·`WorkType`·`Status=new`·`DueAt`·`SlaHours`·`AssigneeName`·`TeamName`·`IncidentId`·`Title`·`Description` | **Live** · after confirm |
| POST | `mobile-bff/api/v1/incident/incidents/{id}/assign` | Incident | optional | **Live** (opt) |
| GET | `mobile-bff/api/v1/ai-vision/estimates` | AiVision list | history opt | **Live** · **không** primary DoD |

- Client base: `http://localhost:5202` + `mobile-bff/api/v1` — **không** gọi `web-bff` từ Mobile MFE.
- Tables cite: AiVision estimates (+ lines) · **reuse** — **no** new entity.
- WO-GATE: confirm → WO only · disable WO trước confirm · **cấm** auto WO on confirm.
- HostIncidentsStub: BE internal fallback only · FE **must** use live `GET incident/{id}` · **cấm** FE stub / fake incident.
- STD-MOUNT: product `:id`=incidentId · std `?incidentId=` · optional `?estimateId=` · thiếu → EST-EMPTY.
- Labels: `useFormOptions()` · **cấm** hardcode VN.
- Fail: 404/422/403 toast · LeaveConfirmModal · **cấm** `window.alert` · **cấm** demo-json.
- GPS: **none**.
- **API Mới:** none · **migration:** none · **entity mới:** none · **Step 4b:** skip at SA.

## 3. BFF vs API

| Layer | Role |
|-------|------|
| Mobile.Bff `:5202` | sole FE entry · proxy `ai-vision/estimates*` · `incident/incidents*` · `maintenance/work-orders` · auth rewrite |
| RMMS.Service.Api | existing AiVision Estimates + Incident + Maintenance — **no new** EstimateHub controller |
| web-bff | cite only · **not** Mobile client base |

## 4. Entity / migration

| Item | Decision |
|------|----------|
| Tables | none new (reuse AiVision estimates + lines) |
| EF migration | **skip** |
| Step 4b | **skip** at SA · Dev only if Live gap (not expected) |
| Local | dirty form draft local only · LeaveConfirm · no offline queue P1 |

## 5. FE surface (SA contract — Dev implements)

| Zone | Contract |
|------|----------|
| EST-00 · EST-F · EST-W · EST-EMPTY · EST-OPEN · EST-EDIT · EST-LOCK · EST-WO · DES-LEAVE · TOAST | phone 430 · prototype 1-1 · **cấm** sửa iOS/Android |
| Header | GET incident · RO |
| Open | POST from-incident |
| Lines | PUT Lines[] · qty/unitPrice · TotalAmount RO |
| Draft / Confirm | draft · confirm lock |
| WO | POST work-orders **after** confirm only |
| Mount | std `?incidentId=` / `?estimateId=` · product `/incident/estimate/:id` · peer `/work/estimate/:id` |
| DES-GRID / LinErpListFilterBar | **N/A** phone form |
| Out | Me* · from-defects P1 · UnitPriceCatalog UI P2 · Kind B list · invent path · web-bff · ERP · HostIncidentsStub FE · GPS · auto WO |

## 6. Risks / open

| ID | Status |
|----|--------|
| UNCLEAR-DOMAIN-MAP-EST | **CLOSED** — DOMAIN-MAP row `web-rmms-estimate` → AiVision applied |
| UNCLEAR-STD-MOUNT | **CLOSED** (Design) — `?incidentId=` / `?estimateId=` · product `:id`=incidentId |
| UNCLEAR-WO-GATE | **CLOSED** (PO=YES) — WO only after confirm · no auto WO |
| UNCLEAR-HOST-STUB | **CLOSED** (SA) — live incident GET only · **cấm** FE HostIncidentsStub |
| UNCLEAR-FROM-DEFECTS | **OUT P1** |
| GAP-BFF-MOBILE | **HARD** — Mobile.Bff only · **cấm** Route trên web-bff |

## 7. Handoff

| Next | Need |
|------|------|
| team_lead | Tasks: EST-F Live from-incident/GET/PUT/draft/confirm · incident header · WO after confirm · init-data · STD-MOUNT · phone 430 · no invent · no Host stub FE |
| devSlash | `/agent-dev` |
| qa | empty mount · dirty leave · confirm lock · WO before confirm blocked · no fake · no web-bff · E2E queued `/agent-qa*` |

## Version meta

`skillVersion=2026.09.05.03` · `contentHash=sha256:e1c8b123ebcdfe00a047c54870cd6811ade05101504bd5480c8302ce7834373a` · `solution_confirm=approve` · `writtenAt=2026-09-26T03:45:00.000Z` · `taskId=task_ebc8899d`
