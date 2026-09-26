# Design — web-rmms-estimate

| Field | Value |
|-------|-------|
| feature | `web-rmms-estimate` |
| title | Ước lượng sự cố |
| this role | `design` · `/agent-design` |
| status | `confirmed` (autoApprove=ON) |
| design_confirm | **approve** (`task_c88a6dfe`) |
| changeScope | `new_page` |
| packKind | **`list`** (PO · UI = **phone form** EST-F · **≠** Kind B desktop) |
| lane | `web` |
| stack | `web_mfe_phone` · `Linm.Web.RMMS.Mobile` · `max-width: 430px` |
| formPattern | Mobile full · phone 430 · Android 1-1 · LeaveConfirmModal · **N/A** ERP Modal/Slideout Kind D |
| DES-GRID / LinErpListFilterBar | **N/A** — phone form · **cấm** clone Kind B |
| Report AC / DES-RPT | **N/A** |
| shared_grid_example | **N/A** (phone) |
| real_view_parity | **v1** |
| peerStdUrl | `http://localhost:9301/web-rmms-estimate` |
| mfeStdUrl | `http://localhost:9301/web-rmms-estimate` |
| mfeStdRoute | `/web-rmms-estimate` |
| productRoute | `/incident/estimate/:id` · peer `/work/estimate/:id` |
| reviewUrl | `file:///D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-estimate/ui/prototype/index.html` |
| demo | **N/A** · hash skip · **cấm** re-scan (**GAP-DES-DEMO-RESCAN-01**) |
| mfe | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Mobile` |
| beRepo | `D:/AI-QLBD/Linm.RMMS.WebService` · AiVision (+ Incident · Maintenance cite) · **cấm ERP.*** |
| bff | `Linm.RMMS.Mobile.Bff` · `:5202` · `mobile-bff/api/v1` · **cấm** web-bff client |
| controlHint | `specs/_data-analy/features/web-rmms-estimate-control-hint.md` |
| realData | `specs/_data-analy/features/web-rmms-estimate-real-data.md` · §A+§B PASS |
| prior | PO `confirmed` · `handoff/po-compact.md` · contentHash `sha256:e1c8b123ebcdfe00a047c54870cd6811ade05101504bd5480c8302ce7834373a` |
| autoApprove | **ON** |
| e2eQa | ON queued `/agent-qa*` · **cấm** e2e / `yarn start:std` ở Design |
| `devSlash` | `/agent-dev` |
| updatedAt | `2026-09-26T03:30:00.000Z` |
| taskId | `task_c88a6dfe` |
| skillId | `agent-design` |
| skillVersion | `2026.09.05.03` |
| schemaVersion | `1` |
| workflowVersion | `2026.09.19.02` |
| rulesVersion | `2026.09.25.2` |
| versionGate | `ok` |
| contentHash | `sha256:e1c8b123ebcdfe00a047c54870cd6811ade05101504bd5480c8302ce7834373a` |

**Cấm:** Dev/BE trước confirm (đã autoApprove) · ERP.* · invent `ai-estimate/*` / `web-rmms-estimate` controller · auto WO · WO trước confirm · GPS · Me* · Kind B DES-GRID · `LinErpListFilterBar` · hardcode VN labels (wire `useFormOptions`) · native `alert`/`confirm` · re-scan demo · `yarn build` / e2e / start:std · HostIncidentsStub FE · from-defects P1 · UnitPriceCatalog P2 · iOS/Android native.

## 0. Context / Demo

| ID | Path | Notes |
|----|------|-------|
| CTX-01 | `docs/context/features/web-rmms-estimate.md` | estimate mobile |
| CTX-02 | peer `estimate.md` · SCREENS `/incident/estimate/:id` | path reconcile |
| DEM | — | **N/A** · hash skip |
| DA-01 / DA-02 | `_data-analy/features/web-rmms-estimate-{control-hint,real-data}.md` | inventory + §B |
| PO | `po/requirement.md` | Form AC-F-01..11 · WO-GATE=YES |
| tokens | `docs/mobile-tokens.json` | primary `#0C84C0` |

## 1. Pattern & shell

| | |
|--|--|
| Frame | Phone **430px** · content-only · tokens primary `#0C84C0` · label **13** · field **≥16** · control **44** |
| Shell | App topbar (back · title «Ước lượng» key) · **không** ERP `LinPageLayout` · **không** me tab |
| Form | EST-F — header SC RO → meta editable → lines InlineList → sticky footer Draft / Confirm / WO |
| Leave | **LeaveConfirmModal** (`DES-LEAVE`) · dirty PUT/draft · **cấm** native dialog |
| GPS | **N/A** toàn EST-* |
| Out | Kind B list · history DoD · UnitPriceCatalog · from-defects · auto WO — **hide** |

## 2. Screens / zones

| Zone | Route | Surface | Wire |
|------|-------|---------|------|
| **EST-00** | phone frame | Layout ≤430 | Android 1-1 · no me · no GPS |
| **EST-F** | `/incident/estimate/:id` · std `/web-rmms-estimate` | Form primary | incident GET · from-incident · GET/PUT · draft · confirm · WO |
| **EST-W** | `/work/estimate` · `/work/estimate/:id` | Peer entry → cùng EST-F | thiếu id → Empty/Hint chọn SC |
| **EST-EMPTY** | any thiếu id | EmptyState | toast · back · **cấm** fake stub |
| **EST-OPEN** | chưa có estimate | CTA `action.open` | `POST …/from-incident/{incidentId}` |
| **EST-EDIT** | status=draft | lines + header edit | dirty · PUT · draft |
| **EST-LOCK** | status=confirmed | RO lock | disable edit · enable WO |
| **EST-WO** | after confirm | Button WO | `POST maintenance/work-orders` · disable trước confirm |
| **DES-LEAVE** | overlay | Modal | dirty leave EST-EDIT |
| **TOAST** | overlay | Toast | ok/fail · **cấm** `window.alert` |

### IA

```
(auth) → Incident detail «Ước lượng» | Work hub «Ước lượng»
  → EST-F (/incident/estimate/:incidentId | /work/estimate/:incidentId)
      → EST-EMPTY nếu thiếu id
      → EST-OPEN → POST from-incident → EST-EDIT
      → EST-EDIT → draft / PUT → confirm → EST-LOCK
      → EST-LOCK → EST-WO (optional) → toast / nav work
  → std /web-rmms-estimate?incidentId=… | ?estimateId=…
```

### UNCLEAR-STD-MOUNT (Design chốt)

| | |
|--|--|
| Product | `/incident/estimate/:id` · `:id` = **incidentId** · peer `/work/estimate/:id` cùng nghĩa |
| Std deep | `/web-rmms-estimate?incidentId={guid}` primary · optional `?estimateId={guid}` khi đã có EST |
| Nest | MFE std mount query → resolve product nest; **không** invent path segment `/web-rmms-estimate/:id` làm API |
| Missing | cả query/param trống → **EST-EMPTY** |

### UNCLEAR-WO-GATE (PO YES — Design copy)

| | |
|--|--|
| Rule | WO **chỉ** khi `status=confirmed` · button disabled + helper copy key trước confirm |
| Confirm | **cấm** auto gọi work-orders |
| Fail | tap WO khi draft → toast fail (QA) |

## 3. Field inventory (Control = controlHint)

| uiField | screen | controlHint | Required | Bind / notes |
|---------|--------|-------------|----------|--------------|
| topBar.back | EST-F/W | Button | — | back incident detail / work hub |
| topBar.title | EST-F | Text | — | copy key estimate title |
| header.incident.code | EST-F | Text RO | * | GET incident · Code |
| header.incident.title | EST-F | Text RO | * | Title |
| header.incident.severity | EST-F | Badge RO | — | Severity |
| header.incident.status | EST-F | Badge RO | — | Status |
| header.routeKm | EST-F | Text RO | — | RouteName · KmStart |
| header.code | EST-F | Text RO | — | EST Code sau create |
| header.sourceType | EST-F | Badge RO | — | `from-incident` P1 |
| header.status | EST-F | Badge | — | draft / confirmed |
| header.defectType | EST-F | Select | — | init DefectTypes · lock after confirm |
| header.defectArea | EST-F | NumberInput | — | m² · lock after confirm |
| header.severity | EST-F | Select | — | init Severities · lock |
| header.model | EST-F | Text RO | — | ModelVersion |
| header.laborHours | EST-F | NumberInput | — | lock after confirm |
| header.equipment | EST-F | Text | — | lock after confirm |
| header.durationDays | EST-F | NumberInput | — | lock after confirm |
| lines | EST-F | InlineList | * | Lines[] mobile rows |
| line.itemCode | EST-F | Text | — | ItemCode |
| line.itemName | EST-F | Text | — | ItemName |
| line.qty | EST-F | NumberInput | * | Qty |
| line.unit | EST-F | Text | — | Unit |
| line.unitPrice | EST-F | MoneyInput | * | UnitPrice |
| line.amount | EST-F | LabelMoney RO | — | qty×unitPrice |
| line.note | EST-F | Text | — | optional |
| totalAmount | EST-F | LabelMoney RO | — | TotalAmount |
| action.open | EST-OPEN | Button | — | POST from-incident |
| action.save | EST-EDIT | Button optional | — | PUT dirty |
| action.draft | EST-EDIT | Button secondary | — | POST draft |
| action.confirm | EST-EDIT | Button primary | — | POST confirm · Note? · **cấm** auto WO |
| action.wo | EST-WO | Button | — | POST work-orders **sau** confirm |
| action.assign | EST-F | Button optional | — | POST assign · không block DoD |
| leaveConfirm | DES-LEAVE | Dialog | — | dirty leave |
| empty | EST-EMPTY | EmptyState | — | thiếu incidentId |
| toast.ok/fail | TOAST | Toast | — | **cấm** alert |

**Labels:** `useFormOptions()` / `estimate.*` keys — prototype hiện VN để review; Dev wire key.

**FormMode↔API**

| Mode | API |
|------|-----|
| open | `POST ai-vision/estimates/from-incident/{incidentId}` |
| load | `GET ai-vision/estimates/{id}` + `GET …/init-data` + `GET incident/incidents/{id}` |
| save | `PUT ai-vision/estimates/{id}` |
| draft | `POST …/{id}/draft` |
| confirm | `POST …/{id}/confirm` |
| wo | `POST maintenance/work-orders` |
| assign | `POST incident/incidents/{id}/assign` optional |

App base `{BffBase}/mobile-bff/api/v1`. **Cấm** invent path theo slug.

## 4. Prototype (REQUIRED)

| | |
|--|--|
| Artifact | `ui/prototype/index.html` |
| Zones | EST-EMPTY · EST-OPEN · EST-EDIT · EST-LOCK/WO · EST-W · DES-LEAVE · TOAST |
| Modes | `?screen=empty\|open\|edit\|confirmed\|work` · `?leave=1` · `?woBlocked=1` |
| reviewUrl | `file:///D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-estimate/ui/prototype/index.html` |
| Peer std | `http://localhost:9301/web-rmms-estimate` |
| Parity | **v1** phone form · footer sticky · lock after confirm · WO gate |

## 5. A–D / DES-RPT

| Check | Result |
|-------|--------|
| A Control = controlHint | **PASS** — inventory map §3 = DA controlHint |
| B real-data §A+§B | **PASS** — cite Live ai-vision/estimates · incident · maintenance |
| C Form AC AC-F-01..11 | **PASS** cover zones · WO-GATE YES |
| D Grid / DES-GRID / filter-bar | **N/A** phone form |
| DES-RPT | **N/A** |

## 6. kit_missing / parity

| | |
|--|--|
| kit_missing_confirm | **N/A** — phone form · không ERP Kind D kit gap |
| real_view_parity | **v1** |
| shared_grid_example | **N/A** |

## 7. Handoff

| Role | Packet |
|------|--------|
| SA | Cite Live ai-vision/estimates (+incident/maintenance) · DOMAIN-MAP row `web-rmms-estimate` · Mobile.Bff · **cấm ERP.*** · **cấm** invent path · HOST-STUB live incident |
| TL/Dev | Wire EST-F/W · query STD-MOUNT · WO gate · useFormOptions · LeaveConfirmModal · BFF `:5202` |
| QA | empty id · dirty leave · confirm lock · WO before confirm fail · no GPS · no alert · no web-bff · no fake stub |
| next | `/agent-sa` · **roleOnly stop** (**GAP-PKT-ROLE-01**) |

## Version meta

`skillVersion=2026.09.05.03` · `schemaVersion=1` · `contentHash=sha256:e1c8b123ebcdfe00a047c54870cd6811ade05101504bd5480c8302ce7834373a` · `rulesVersion=2026.09.25.2` · `updatedAt=2026-09-26T03:30:00.000Z` · `design_confirm=approve` · `autoApprove=ON`
