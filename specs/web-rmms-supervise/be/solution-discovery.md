# SA — Solution — web-rmms-supervise

> Status: **confirmed** · autoApprove ON · task `task_f721839a` · 2026-09-26T02:45:00.000Z  
> **Cấm** ERP.* · **cấm** invent `/supervise*` · **cấm** invent fromDate API P1 · **cấm** POST trên Giám sát · **cấm** Step 4b / migration ở role SA · **cấm** Write MFE/native · **cấm** web-bff client base · **cấm** e2e / start:std · **cấm** fake GPS / capture · **cấm** demoDays / demo SSOT.

| | |
|--|--|
| Feature | `web-rmms-supervise` |
| Title | Giám sát và chi tiết |
| Role | `sa` |
| packKind | `list` |
| changeScope | `new_page` |
| formPattern | Mobile list + RO detail · phone max-width 430 · N/A ERP Modal/Slideout · N/A DES-GRID / LinErpListFilterBar |
| domain | **Patrol** (`patrol`) · resource `attendance-logs` · cite Integration road-route (filter only) |
| mfe | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Mobile` · mfeStdRoute `/web-rmms-supervise` |
| mfeStdUrl | `http://localhost:9301/web-rmms-supervise` |
| productRoute | SCREENS `/supervise` · `/supervise/:id` · alias `/field/supervise*` |
| nativeRouteCite | Android `#sc-supervise*` · `#sc-supervise-detail` · DES-MOB-SUPERVISE · DES-MOB-SUP-DETAIL · DES-MOB-SUP-FILTER |
| be | `D:/AI-QLBD/Linm.RMMS.WebService` |
| BFF | `Linm.RMMS.Mobile.Bff` `:5202` · prefix `mobile-bff/api/v1` · `VITE_MOBILE_API_URL` |
| contentHash | `sha256:bd4aedbcdb3686ca817a32c3f563270adc1d35b1f7bca526be023528a1840d2b` |
| skillVersion | `2026.09.05.03` |
| solution_confirm | **approve** (autoApprove) |
| reviewUrl | `file:///D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-supervise/ui/prototype/index.html` |
| peer | `supervise` · `web-rmms-attendance` (same Live resource, **no** POST on this page) |

## 1. Domain / ownership

| Item | Decision |
|------|----------|
| DOMAIN-MAP slug | `web-rmms-supervise` → **Patrol** / `patrol` |
| Rationale | Live surface = reuse `patrol/attendance-logs` GET list + GET/{id} · day filter = **client** on `CheckInAt` · no new domain / controller |
| Cite peers | slug `supervise` · `web-rmms-attendance` · SCREENS `/supervise*` · DES-MOB-SUPERVISE |
| API folder | **reuse** Patrol attendance-logs · Mobile.Bff catch-all — **no new** controller/entity |
| **Cấm** | invent `/supervise*` · fromDate query P1 · POST/PUT/DELETE logs on Giám sát · Face/NFC · attendance hub gộp · ERP.* · web-bff client · fake GPS · demoDays · iOS/Android edits · desktop Field |

**DOMAIN-MAP row (applied):**

| Feature slug | Domain Pascal | kebab |
|--------------|---------------|-------|
| `supervise` | Patrol | `patrol` |
| `web-rmms-supervise` | Patrol | `patrol` · Live `attendance-logs` GET/GET{id} RO · day=client CheckInAt · MFE `Linm.Web.RMMS.Mobile` `/web-rmms-supervise` · **cấm** invent `/supervise*` · **cấm** POST on Giám sát |

## 2. FormMode ↔ API

List+detail **không** master Modal. Modes = browse list · filter sheet · RO detail · sibling map nav. **No write P1.**

| Mode / zone | UI | API | Write | Notes |
|-------------|----|-----|-------|-------|
| SUP-00 chrome | page shell | — | — | phone 430 · DES-MOB-SUPERVISE |
| SUP-01 filterRoute | Select/Text sheet | GET `?route=` | — | live re-GET · cite road-route |
| SUP-02 filterDay | Date sheet | client `CheckInAt` | — | **cấm** invent fromDate |
| SUP-03 segmentMap | Segment/Nav | — | nav `/patrol-map` | no API · sibling |
| SUP-04 cardRows | ListRow+Badge | GET list | — | §B bind |
| SUP-05 card.tap | Nav | Id | nav `/:id` | product `/supervise/:id` |
| SUP-06 detail RO | Detail RO | GET `…/{id}` | — | DES-MOB-SUP-DETAIL |
| SUP-07 btnMap | Button/Nav | Lat/Lng RO | nav map | **cấm** capture/fake/POST |
| SUP-08 empty | Empty | `[]` | — | live empty · cấm demo SSOT |
| Auth | staff | shell JWT | — | guest → login |

### Live endpoints (HARD — from real-data §B)

| Method | BFF path (client) | Downstream | Response bind | Status |
|--------|-------------------|------------|----------------|--------|
| GET | `mobile-bff/api/v1/patrol/attendance-logs` | Patrol list | cards · filter route query · client day | **Live** |
| GET | `mobile-bff/api/v1/patrol/attendance-logs/{id}` | Patrol detail | detail.* RO | **Live** |

### Field bind (FormMode ↔ DTO — cite §B)

| uiField | GET field | Write |
|---------|-----------|-------|
| filter.route | query `route` | — |
| filter.day | client `CheckInAt` | — |
| card.userName | UserName | — |
| card.route | Route | — |
| card.kmPoint | KmPoint | — |
| card.checkInAt | CheckInAt | — |
| card.status | Status | — |
| card.inZone | InZone | — |
| card.noteOrg | Note (OrgUnit fallback) | — |
| detail.userName / code / route / checkInAt / status / latLng / inZone / note | same DTO RO | — |
| btn.map | Id · Lat · Lng | nav only |

- Client base: `http://localhost:5202` + `mobile-bff/api/v1` — **không** gọi `web-bff` từ Mobile MFE.
- **API Mới:** none · **migration:** none · **entity mới:** none · **Step 4b:** skip at SA.
- Labels: `useFormOptions()` / `supervise.*` · **cấm** hardcode VN.
- Fail: toast · **cấm** `window.alert` · **cấm** mock SSOT / demoDays.
- GPS: RO stored Lat/Lng only · **cấm** capture / fake / POST.

## 3. BFF vs API

| Layer | Role |
|-------|------|
| Mobile.Bff `:5202` | sole FE entry · proxy `patrol/attendance-logs*` · auth rewrite |
| RMMS.Service.Api | existing Patrol attendance-logs — **no new** Supervise controller |
| web-bff | cite only · **not** Mobile client base |

## 4. Entity / migration

| Item | Decision |
|------|----------|
| Tables | none (reuse Patrol attendance-logs entity) |
| EF migration | **skip** |
| Step 4b | **skip** at SA · Dev only if Live gap (not expected) |
| Local | none · no offline queue on this page |

## 5. FE surface (SA contract — Dev implements)

| Zone | Contract |
|------|----------|
| SUP-00…08 · DES-MOB-SUPERVISE · DES-MOB-SUP-DETAIL · DES-MOB-SUP-FILTER | phone 430 · Android 1-1 · **cấm** sửa iOS/Android |
| Entry | Home/Field · no new tab · no gộp attendance hub / Face-NFC / check-in POST |
| Route | `mfeStdRoute=/web-rmms-supervise` · product `/supervise*` (UNCLEAR-STD-ROUTE Design chốt) |
| DES-GRID / LinErpListFilterBar | **N/A** phone list |
| Out | POST logs · invent supervise API · Face/NFC · desktop Field · native edits · ERP |

## 6. Risks / open

| ID | Status |
|----|--------|
| UNCLEAR-DOMAIN-MAP-SUP | **resolved** — rows `supervise` + `web-rmms-supervise` → Patrol |
| UNCLEAR-FROMDATE | **resolved P1** — client day on CheckInAt · **cấm** invent fromDate · P2 BE optional deferred |
| UNCLEAR-ORG | **resolved P1** — Note/fallback · no OrgUnit invent |
| UNCLEAR-EMPTY-COPY | **carry Dev/QA** — live `[]` · **cấm** demo SSOT |
| UNCLEAR-STD-ROUTE | **carry Dev** — follow STATUS mfeStdRoute · product `/supervise*` |
| GAP-BFF-MOBILE | **HARD** — Mobile.Bff only · **cấm** Route trên web-bff |

## 7. Handoff

| Next | Need |
|------|------|
| team_lead | Tasks: SUP list filter live · cards · RO detail · map sibling · reuse GET list+GET/{id} · no invent · no POST · phone 430 · W2 Home supervise |
| devSlash | `/agent-dev` |
| qaSlash | `/agent-qa` (E2E queued — e2eQa ON) |

## Version meta

`skillVersion=2026.09.05.03` · `contentHash=sha256:bd4aedbcdb3686ca817a32c3f563270adc1d35b1f7bca526be023528a1840d2b` · `solution_confirm=approve` · `writtenAt=2026-09-26T02:45:00.000Z` · `taskId=task_f721839a`
