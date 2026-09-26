# Design — web-rmms-incident

| Field | Value |
|-------|-------|
| feature | `web-rmms-incident` |
| title | Sự cố list, tạo, chi tiết |
| this role | `design` · `/agent-design` |
| status | `confirmed` (autoApprove=ON) |
| design_confirm | **approve** (`task_8e35732f`) |
| changeScope | `new_page` |
| packKind | **`list`** (PO · UI = **phone CardList** · **≠** Kind B desktop) |
| lane | `web` |
| stack | `web_mfe_phone` · `Linm.Web.RMMS.Mobile` · `max-width: 430px` |
| formPattern | Mobile **full** · Android 1-1 · **không** ERP Modal/Slideout Kind B |
| DES-GRID / LinErpListFilterBar | **N/A** — phone Search+Chip · **cấm** clone Kind B |
| Report AC / DES-RPT | **N/A** |
| shared_grid_example | **N/A** (phone) |
| real_view_parity | **v1** |
| peerStdUrl | `http://localhost:9301/web-rmms-incident` |
| mfeStdUrl | `http://localhost:9301/web-rmms-incident` |
| mfeStdRoute | `/web-rmms-incident` |
| productRoute | `/incident` · `/incident/new` · `/incident/:id` |
| reviewUrl | `file:///D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-incident/ui/prototype/index.html` |
| demo | **N/A** · hash skip · **cấm** re-scan (**GAP-DES-DEMO-RESCAN-01**) |
| mfe | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Mobile` |
| beRepo | `D:/AI-QLBD/Linm.RMMS.WebService` · Incident+Patrol+Integration+AiVision(+files; Maintenance peer) · **cấm ERP.*** |
| bff | `Linm.RMMS.Mobile.Bff` · `:5202` · `mobile-bff/api/v1` · **cấm** web-bff client |
| controlHint | `specs/_data-analy/features/web-rmms-incident-control-hint.md` |
| realData | `specs/_data-analy/features/web-rmms-incident-real-data.md` · §A+§B PASS |
| prior | PO `confirmed` · `handoff/po-compact.md` · contentHash `sha256:665f3697a399a948edb0ab14da5fc13716b477aa84b0b8e43f6ca33eb7216d2d` |
| autoApprove | **ON** |
| e2eQa | ON queued `/agent-qa*` · **cấm** e2e / `yarn start:std` ở Design |
| `devSlash` | `/agent-dev` |
| updatedAt | `2026-09-26T04:10:00.000Z` |
| taskId | `task_8e35732f` |
| skillId | `agent-design` |
| skillVersion | `2026.09.05.03` |
| schemaVersion | `1` |
| workflowVersion | `2026.09.19.02` |
| rulesVersion | `2026.09.25.2` |
| versionGate | `ok` |
| contentHash | `sha256:665f3697a399a948edb0ab14da5fc13716b477aa84b0b8e43f6ca33eb7216d2d` |

**Cấm:** Dev/BE trước confirm (đã autoApprove) · ERP.* · invent slug controller · Kind B DES-GRID · `LinErpListFilterBar` · fake GPS · hardcode label keys ngoài `useFormOptions` · native `alert`/`confirm` · re-scan demo · `yarn build` / e2e / start:std · Me*/feedback/cam-view · journal/kết ca/tồn tại/tần suất · gộp WO CRUD primary · invent Lat/Lng trên Create/list DTO.

## 0. Context / Demo

| ID | Path | Notes |
|----|------|-------|
| CTX-01 | `docs/context/features/web-rmms-incident.md` | Incident L/N/D |
| CTX-02 | `docs/plan/web-rmms-mobile/SCREENS.md` | Tab Incident |
| CTX-03 | peer CTX | `incident-list` · `incident-create` · `incident-detail` |
| DEM | — | **N/A** · hash skip |
| P1 ref (visual only) | `specs/mobile-p1/ui/prototype/android` `#sc-incident-list` · `#sc-inc-form` · `#sc-incident-detail` | **1-1 layout** · **không** demo SSOT ship |
| DA-01 / DA-02 | `_data-analy/features/web-rmms-incident-{control-hint,real-data}.md` | inventory + §B |
| PO | `po/requirement.md` | AC-GRID/CREATE/DETAIL · GPS HARD |
| tokens | `docs/mobile-tokens.json` | primary `#0C84C0` · phone 430 |

## 1. Pattern & ownership

| | |
|--|--|
| Frame | Phone **430px** · tokens primary `#0C84C0` · label **13** · field **≥16** (**GAP-TYP-01**) |
| This feature owns | **INC-L / INC-N / INC-D** · nested std mount |
| Peer owns | INC-V vis · INC-C chat · INC-E estimate/WO · offline draft queue · GIS map |
| Shell owns | Tab Incident mount (peer shell) |
| DES-LEAVE | dirty on INC-N → confirm discard · **cấm** `window.confirm` native — in-app sheet |
| Out | Me* · feedback · cam-view · journal B–E · invent Incident*Controller cho slug |

### Ownership (Design resolve)

| Surface | Owner |
|---------|-------|
| List `/web-rmms-incident` · `/incident` | **this feature** |
| Create nested `/web-rmms-incident/new` · `/incident/new` | **this feature** (**UNCLEAR-STD-NEST** → nested mount) |
| Detail nested `…/:id` | **this feature** |
| Banner vis / row chat / estimate CTA | **peer nav only** (**UNCLEAR-PEER-VIS**) |
| Checklist taxonomy | **local FE** by asset (**UNCLEAR-CHK-01**) · fold → `Description` |
| Create lat column | **HasGps only** (**UNCLEAR-PGC-BE-01**) · **cấm** invent Lat body |

## 2. Screens / zones

| Zone | Route | Surface | Wire |
|------|-------|---------|------|
| **INC-L** | `/web-rmms-incident` · cite `/incident` | Full list | Search · status/severity Chip · CardList · FAB · banner.vis · row→detail/chat · map nav |
| **INC-N** | `…/new` · `/incident/new` | Full form | assetPick · kind Segment · checklist · photos · detect · sessionStamp · gpsLock · severity · create/draft |
| **INC-D** | `…/:id` · `/incident/:id` | Full RO | header · routeKm · hasGps · close+Note · peer estimate/map |
| peer INC-V/C/E | `/incident/vis` · `…/chat` · `/incident/estimate/:id` | Peer | nav-only from L/D |

### IA

```
(auth) → shell tab Incident → INC-L
  FAB / create     → INC-N (/new)
  row.open         → INC-D (/:id)
  banner.vis       → peer INC-V
  row.chat         → peer INC-C
  nav.map          → /gis (peer)
  INC-D estimate   → peer INC-E
  INC-N draft      → peer offline queue
```

## 3. Field inventory (Control = controlHint)

### INC-L

| uiField | controlHint | Required | Bind / notes |
|---------|-------------|----------|--------------|
| screenTitle | Text | * | copy key · useFormOptions |
| search | SearchInput | — | query `search` |
| filter.status | Chip/Select | — | LOOKUP_STATIC → `status` |
| filter.severity | Chip/Select | — | LOOKUP_STATIC → `severity` |
| list | CardList | * | `GET incident/incidents` · pageSize=50 |
| card.title/type/code/route/person/requestedAt/status | Text/Badge | * | list DTO · **không** Lat/Lng |
| card.hasGps | Icon/Flag | — | `HasGps` |
| fab | FAB | * | → `/incident/new` |
| banner.vis | Banner/Button | — | peer `/incident/vis` |
| nav.map | Button | — | `/gis` |
| row.open | Nav | * | `/incident/{id}` |
| row.chat | IconButton | — | peer chat |
| empty / toast.fail | EmptyState / Toast | — | **cấm** `window.alert` |

### INC-N

| uiField | controlHint | Required | Bind / notes |
|---------|-------------|----------|--------------|
| assetPick | LookupGrid | * | `GET integration/asset-types` |
| assetCard | Card RO | * | selected type |
| kind | Segment 3 | * | Hư/Mất/Hỏng → `IncidentType` · DES-MOB-INC-KIND |
| checklist | CheckboxGroup | — | local → fold `Description` · GAP-CHK-01 |
| photos | PhotoRow | — | ai-vision/uploads · files/* |
| detect | Button | — | `POST ai-vision/detect` · GPS ≤30 m · ảnh required |
| sessionStamp | Text RO | * | `GET patrol/sessions` → RouteName · KmStart |
| gpsLock | GPS | * | deny → **disable** Create/Detect · **cấm** fake |
| severity | Select | — | LOOKUP_STATIC |
| description | Textarea | — | + checklist fold |
| status | Hidden | * | `Status=new` |
| create | Button primary | * | `POST incident/incidents` · HasGps when fix · **no Lat** |
| draftOffline | Button secondary | — | peer offline |
| emptyNoSession | Toast | — | no ca → block Route bind · **cấm** bịa |

### INC-D

| uiField | controlHint | Required | Bind / notes |
|---------|-------------|----------|--------------|
| header | Text | * | Code · Severity · Status · Title |
| routeKm | Text RO | — | RouteName · KmStart |
| hasGps | Flag | — | HasGps · **cấm** invent Lat/Lng display as create body |
| note | Textarea | — | close Note optional |
| close | Button | * | `POST …/{id}/close` |
| nav.estimate / nav.map | Button | — | peer |
| toast.ok/fail | Toast | — | copy keys |

**Labels:** `useFormOptions()` — prototype hiện nhãn VN review; Dev wire keys.  
**GPS HARD:** INC-N deny → block Create/Detect/geo · accuracy >30 → no detect · **cấm** fake coords.  
**Live API only** — **cấm** itemsOrDemo · **cấm** invent path `web-rmms-incident/*`.

## 4. Prototype (REQUIRED)

| | |
|--|--|
| Artifact | `ui/prototype/index.html` |
| Zones | INC-L · INC-N · INC-D (+ peer notes) |
| Form | INC-N full · DES-LEAVE dirty |
| Grid/filter desktop | **N/A** · phone chips |
| SSOT | control-hint · real-data §B · Android P1 1-1 · mobile-tokens |
| **reviewUrl** | `file:///D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-incident/ui/prototype/index.html` |
| **peerStdUrl** | `http://localhost:9301/web-rmms-incident` |
| **real_view_parity** | `v1` |

### Wire

```
INC-L: topbar · search · status/severity chips · vis banner · CardList(+HasGps) · FAB · row actions
INC-N: asset card · kind pills · checklist · photo+detect · sessionStamp · gpsLock · severity · Create/Draft
INC-D: header Code/Severity/Status · routeKm · HasGps · close+Note · estimate/map
Board: Default | Empty list | GPS deny | Detect>30 | No session | Close note | Error toast
```

### Query modes (prototype)

| Query | Effect |
|-------|--------|
| (default) | INC-L with cards · GPS ok on create |
| `?screen=create` | INC-N |
| `?screen=detail` | INC-D |
| `?empty=1` | EmptyState list |
| `?gps=deny` | Create/Detect disabled · toast |
| `?acc=45` | Detect blocked (accuracy >30) |
| `?nosession=1` | session empty toast · Create Route bind blocked |
| `?error=1` | list load toast · **cấm** `window.alert` |

## 5. API map (cite real-data §B)

| Action | API |
|--------|-----|
| List | `GET mobile-bff/api/v1/incident/incidents` |
| Create | `POST …/incident/incidents` |
| Detail | `GET …/incident/incidents/{id}` |
| Close | `POST …/incident/incidents/{id}/close` |
| Sessions | `GET …/patrol/sessions` |
| Asset types | `GET …/integration/asset-types` |
| Upload/detect | `POST …/ai-vision/uploads` · `…/detect` · files/* peer |

**BFF:** Mobile.Bff `:5202` · **cấm** Web BFF · **cấm ERP.***  
Create body: Title · RouteName · IncidentType · Status · RequestedAt · optional Severity/Description/AssetLabel/KmStart/MediaIds/DetectionId · HasGps · **không** Lat column.

## 6. DES checklist

| ID | Result |
|----|--------|
| DES-A zones INC-L/N/D | **PASS** |
| DES-B control = controlHint | **PASS** |
| DES-C prototype + reviewUrl | **PASS** |
| DES-D Leave dirty | **PASS** (INC-N in-app sheet) |
| DES-GRID / DES-RPT | **N/A** phone |
| real_view_parity | **v1** |
| UNCLEAR-STD-NEST | **resolved Design** — nested `/new` `/:id` |
| UNCLEAR-CHK-01 | **resolved Design** — local CheckboxGroup |
| UNCLEAR-PEER-VIS | **resolved Design** — peer nav only |
| GPS / HasGps | **PASS** · PGC-BE-01 → SA cite |

## 7. UNCLEAR (carry)

| id | Action |
|----|--------|
| UNCLEAR-DOMAIN-MAP-INC | SA thêm DOMAIN-MAP row `web-rmms-incident` · Incident(+cite) · MFE `/web-rmms-incident` |
| UNCLEAR-CHK-01 | **resolved Design** · local checklist → Description |
| UNCLEAR-PGC-BE-01 | SA cite Live CreateIncidentRequest · HasGps only |
| UNCLEAR-PEER-VIS | **resolved Design** · peer nav · không gộp WO CRUD |
| UNCLEAR-STD-NEST | **resolved Design** · list + nested `/new` `/:id` |
| UNCLEAR-SESS | Dev/QA · empty sessions toast · **cấm** itemsOrDemo |

## 8. Handoff

| Role | Need |
|------|------|
| SA | DOMAIN-MAP row · Live DTO cite · Mobile.Bff · **cấm** invent path · **cấm** ERP.* |
| TL | Tasks INC-L/N/D scaffold + nested routes + GPS gate |
| Dev | `/agent-dev` · MFE Mobile only · BFF `:5202` · useFormOptions · GPS HARD |
| QA | empty list · GPS deny · acc>30 · close empty Note · no fake · no web-bff · e2e queued |

## Version meta

`skillVersion=2026.09.05.03` · `schemaVersion=1` · `contentHash=sha256:665f3697a399a948edb0ab14da5fc13716b477aa84b0b8e43f6ca33eb7216d2d` · `rulesVersion=2026.09.25.2` · `updatedAt=2026-09-26T04:10:00.000Z` · `design_confirm=approve` · `autoApprove=ON`
