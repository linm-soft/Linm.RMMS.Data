# Team lead — Task pack — web-rmms-estimate

> Status: **PASS** · role `team_lead` · task `task_3ca4ae28` · writtenAt `2026-09-26T04:00:00.000Z`  
> packKind: `list` · changeScope: `new_page` · skillVersion: `2026.09.05.03`  
> contentHash: `sha256:e1c8b123ebcdfe00a047c54870cd6811ade05101504bd5480c8302ce7834373a`  
> Prior: data_analy · po · design · sa — all **confirmed** · autoApprove=ON  
> **Cấm** implement trong role này · **cấm** e2e / yarn build / start:std · next `/agent-dev`

| | |
|--|--|
| Feature | `web-rmms-estimate` |
| Title | Ước lượng sự cố |
| Form pattern | Mobile full phone ≤430 · Android 1-1 · **N/A** ERP Modal/Slideout · **N/A** DES-GRID Kind B |
| MFE | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Mobile` |
| mfeStdRoute | `/web-rmms-estimate` |
| mfeStdUrl | `http://localhost:9301/web-rmms-estimate` |
| productRoute | `/incident/estimate/:id` · peer `/work/estimate/:id` |
| BE | `D:/AI-QLBD/Linm.RMMS.WebService` · domain **AiVision** (+ Incident · Maintenance cite) · **cấm ERP.*** |
| BFF | `Linm.RMMS.Mobile.Bff` `:5202` · `mobile-bff/api/v1` · `VITE_MOBILE_API_URL` · **cấm** web-bff |
| Demo | **N/A** |
| WO-GATE | **YES** — confirm lock · **cấm** auto WO |
| STD-MOUNT | product `:id`=incidentId · std `?incidentId=` · optional `?estimateId=` · thiếu → EST-EMPTY |
| API mới / migration / Step 4b | **none** (SA) — Dev cite Live only |
| reviewUrl | `file:///D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-estimate/ui/prototype/index.html` |
| prototype modes | `?screen=empty\|open\|edit\|confirmed\|work` · `?leave=1` · `?woBlocked=1` |
| Zones | EST-00 · EST-F · EST-W · EST-EMPTY · EST-OPEN · EST-EDIT · EST-LOCK · EST-WO · DES-LEAVE · TOAST |
| Form AC | AC-F-01..11 · Grid AC **N/A** |
| Labels | `useFormOptions()` — **cấm** hardcode VI · **cấm** GPS · **cấm** Me* · **cấm** HostIncidentsStub FE |

## Notes

- changeScope=`new_page`
- control-hint + real-data: present under `specs/_data-analy/features/` → full pipeline (not data-analy-only)
- DOMAIN-MAP / STD-MOUNT / WO-GATE / HOST-STUB: closed by prior roles
- FROM-DEFECTS / UnitPriceCatalog: OUT P1/P2

---

## route_confirm

| Field | Value |
|-------|-------|
| action | **confirm_existing** |
| mfeStdRoute | `/web-rmms-estimate` |
| mfeStdUrl | `http://localhost:9301/web-rmms-estimate` |
| productRoute | `/incident/estimate/:id` |
| peerRoute | `/work/estimate/:id` |
| reason | Route already in STATUS + context · Design STD-MOUNT chốt · no new slug |

---

## OUT (P1)

- Me* / fake GPS / invent `ai-estimate/*` / invent EstimateHub / invent slug controller
- web-bff client · ERP.* · HostIncidentsStub FE
- Kind B list primary · ERP Modal Kind D desktop primary
- from-defects primary · UnitPriceCatalog UI · SignalR · auto WO
- Native iOS/Android edits · demo-json / itemsOrDemo ship

---

## FormMode ↔ API (Live cite)

| Mode / action | Method · path (Mobile.Bff) | Notes |
|---------------|----------------------------|-------|
| Header SC | GET `incident/incidents/{id}` | Live · **cấm** FE stub |
| Lookups | GET `ai-vision/estimates/init-data` | status/source/defect/severity |
| Open | POST `ai-vision/estimates/from-incident/{incidentId}` | EST-OPEN |
| Load | GET `ai-vision/estimates/{id}` | EST-EDIT / reload |
| Save lines | PUT `ai-vision/estimates/{id}` | Body: header + `Lines[]` (Id?·SortOrder·ItemCode·ItemName·Qty·Unit·UnitPrice·Note) |
| Draft | POST `ai-vision/estimates/{id}/draft` | EST-EDIT |
| Confirm | POST `ai-vision/estimates/{id}/confirm` | lock → EST-LOCK · Note optional |
| WO | POST `maintenance/work-orders` | **only after** confirm · CreateWorkOrderRequest (SCREENS) |
| Assign (opt) | POST `incident/incidents/{id}/assign` | optional on SC |
| History (opt) | GET `ai-vision/estimates` | **not** primary DoD |

Canonical: `api/v1/ai-vision/estimates` — **cấm** invent paths.

---

## Task breakdown (T-*)

| id | lane | title | deps | owner slash | DoD / AC | status |
|----|------|-------|------|-------------|----------|--------|
| T-FE-01 | FE | Std + product route mount · EST-EMPTY khi thiếu id | — | `/agent-dev` | Route `/web-rmms-estimate` · product `/incident/estimate/:id` · STD-MOUNT `?incidentId=` / `?estimateId=` · phone ≤430 · zones EST-00/EST-EMPTY | pending |
| T-FE-02 | FE | Peer work nest EST-W | T-FE-01 | `/agent-dev` | `/work/estimate/:id` cùng form · entry Work hub · no invent controller | pending |
| T-FE-03 | FE | Header incident live | T-FE-01 | `/agent-dev` | GET incident/{id} · Text RO header · **cấm** HostIncidentsStub | pending |
| T-FE-04 | FE | Open estimate from-incident | T-FE-03 | `/agent-dev` | POST from-incident · EST-OPEN · AC-F open | pending |
| T-FE-05 | FE | Lines edit + total | T-FE-04 | `/agent-dev` | Qty/UnitPrice editable · PUT Lines[] · totalAmount RO LabelMoney · EST-EDIT | pending |
| T-FE-06 | FE | Draft + Confirm lock | T-FE-05 | `/agent-dev` | draft · confirm · EST-LOCK · confirm xong lines RO | pending |
| T-FE-07 | FE | WO-GATE create work order | T-FE-06 | `/agent-dev` | WO disable until confirm · POST work-orders · EST-WO · **cấm** auto WO · TOAST | pending |
| T-FE-08 | FE | LeaveConfirmModal + labels | T-FE-05 | `/agent-dev` | DES-LEAVE · no `alert()` · useFormOptions · no GPS | pending |
| T-FE-09 | FE | init-data lookups wired | T-FE-01 | `/agent-dev` | GET init-data · options for status/source/defect/severity | pending |
| T-BE-01 | BE | Cite-only Live align | — | `/agent-dev` | Verify Mobile.Bff proxies Live paths · **no** new API · **no** Step 4b · DOMAIN-MAP row `web-rmms-estimate` → AiVision | pending |
| T-QA-01 | QA | scenarios + E2E | T-FE-01..08 · T-BE-01 | `/agent-qa` | qa/scenarios.md · Form AC-F-01..11 · WO-GATE · STD-MOUNT · **only QA** runs e2e/start:std | pending |

### Dev order (recommended)

1. T-FE-01 → T-FE-09 → T-FE-03 → T-FE-04 → T-FE-05 → T-FE-06 → T-FE-07 · parallel T-FE-02 · T-FE-08  
2. T-BE-01 cite check (no migration)  
3. Handoff QA → T-QA-01 (e2eQa queued)

### Dev constraints HARD

- Mobile.Bff only · **cấm** web-bff · **cấm** ERP.*  
- Live incident GET · **cấm** FE HostIncidentsStub  
- WO only after confirm · **cấm** auto WO  
- Prototype parity zones EST-* · LeaveConfirmModal  
- **Cấm** invent `ai-estimate/*` / EstimateHub / slug controller  
- implement artifact: `specs/web-rmms-estimate/implement/web-rmms-estimate.md`

---

## DoD — team_lead (this role)

- [x] changeScope=`new_page` · control-hint + real-data present  
- [x] T-* đủ FE/BE cite/QA · FormMode↔API mapped  
- [x] route_confirm existing `/web-rmms-estimate`  
- [x] WO-GATE=YES · STD-MOUNT · HOST-STUB · DOMAIN-MAP closed in notes  
- [x] compact handoff written · STATUS lock + pipeline step 3 PASS  
- [x] **không** implement code · **không** e2e  

## Next

- `/agent-dev` · roleOnly stop (GAP-PKT-ROLE-01) · implement T-FE-* · T-BE-01  
- E2E: queued `/agent-qa*` only  

## Full paths

- STATUS: `D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-estimate/STATUS.md`  
- compact: `D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-estimate/handoff/team_lead-compact.md`  
- sa: `D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-estimate/be/solution-discovery.md`  
- design: `D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-estimate/ui/design.md`  
- po: `D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-estimate/po/requirement.md`  
- context: `D:/AI-QLBD/Linm.RMMS.Data/docs/context/features/web-rmms-estimate.md`  
