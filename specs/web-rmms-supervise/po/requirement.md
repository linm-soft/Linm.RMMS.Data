# PO — Requirement — web-rmms-supervise

| Field | Value |
|-------|-------|
| feature | `web-rmms-supervise` |
| title | Giám sát và chi tiết — list check-in + RO detail |
| packKind | `list` |
| changeScope | `new_page` |
| lane | `web` |
| status | `confirmed` |
| skillId | `agent-po` |
| skillVersion | `2026.09.05.03` |
| schemaVersion | `1` |
| workflowVersion | `2026.09.19.02` |
| rulesVersion | `2026.09.25.2` |
| versionGate | `ok` |
| contentHash | `sha256:bd4aedbcdb3686ca817a32c3f563270adc1d35b1f7bca526be023528a1840d2b` |
| confirmedAt | `2026-09-26T02:30:00.000Z` |
| taskId | `task_63e24ceb` |
| demo | **N/A** · cite `#sc-supervise*` / `#sc-supervise-detail` / DES-MOB-SUPERVISE · DES-MOB-SUP-DETAIL only |
| formPattern | Mobile list + RO detail · phone `max-width: 430px` · **không** ERP Modal/Slideout Kind B · **không** POST trên Giám sát |
| mfe | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Mobile` |
| mfeStdRoute | `/web-rmms-supervise` |
| mfeStdUrl | `http://localhost:9301/web-rmms-supervise` |
| nativeRoutes | `/supervise` · `/supervise/:id` · alias `/field/supervise*` |
| be | `D:/AI-QLBD/Linm.RMMS.WebService` · Mobile.Bff `:5202` · `mobile-bff/api/v1` · **cấm ERP.*** |
| prior | data_analy `confirmed` · control-hint + real-data §A+§B PASS · hash skip |
| autoApprove | ON → Design (next) |

> Nhãn UI: `useFormOptions()` / LinmCopy `supervise.*` — **cấm** hardcode tiếng Việt trên form.  
> **Cấm** nhét phone Supervise vào MFE desktop Field · **cấm** sửa iOS/Android native · **cấm** invent `/supervise*` API.

## 1. Goal

Màn **Giám sát** 1-1 native DES-MOB-SUPERVISE / `SuperviseView` (+ detail `SuperviseDetailView`): list check-in rich-card · filter tuyến/ngày live · segment Danh sách/Bản đồ · drill RO detail. Persona = hạt trưởng giám sát / quản lý ca. **Không** POST chấm công trên màn này.

## 2. Screens (SUP)

| Id | Route / zone | AC |
|----|--------------|----|
| SUP-00 | phone frame | ≤430px · DES-MOB-SUPERVISE / DES-MOB-SUP-DETAIL parity |
| SUP-01 | list chrome | Title · back Home/Field · filter btn · segment · card list |
| SUP-02 | filter sheet | `route` → GET query · `day` client `CheckInAt` · apply re-fetch/re-filter · **cấm** toast giả |
| SUP-03 | segment | List stay · Map → `/patrol-map` · **cấm** toast |
| SUP-04 | card rows | bind UserName · Route · KmPoint · CheckInAt · Status · InZone · Note org fallback · tap → `/:id` |
| SUP-05 | detail RO | GET/{id} rows · CTA map pass Id/Lat/Lng |
| SUP-06 | GPS | RO Lat/Lng stored only · **cấm** capture / fake / POST |
| SUP-07 | empty/error | GET `[]` → empty · fail → toast · **cấm** demo SSOT / demoDays |
| SUP-08 | entry | Home / Field · **không** tab mới · **cấm** gộp attendance hub |

## 3. List AC (packKind=list)

| AC | Given / When / Then |
|----|---------------------|
| AC-LIST-01 | Auth JWT · open Supervise → GET `patrol/attendance-logs` via Mobile.Bff → cards bind §B |
| AC-LIST-02 | Filter route apply → re-GET với query `route` · **không** toast giả |
| AC-LIST-03 | Filter day apply → client filter `CheckInAt` (P1) · **cấm** invent fromDate API |
| AC-LIST-04 | Segment Bản đồ → navigate `/patrol-map` · **không** embed map trên slug này |
| AC-LIST-05 | Tap card → `/supervise/:id` · GET/{id} RO · CTA map pass coords |
| AC-LIST-06 | Empty `[]` → empty state · error → toast · **cấm** `window.alert` · **cấm** demo fallback |
| AC-LIST-07 | Phone frame ≤430 · labels từ copy keys · **cấm** hardcode VN |
| AC-LIST-08 | **Không** POST/PUT/DELETE logs · **không** Face/NFC · **không** ERP.* |

**DES-GRID / LinErpListFilterBar:** **N/A** — phone list · không Kind B desktop grid.

## 4. FormMode ↔ API

| Mode | API | Note |
|------|-----|------|
| List | `GET patrol/attendance-logs` | query `route`/`search`/`status`/`page`/`pageSize` |
| Detail RO | `GET patrol/attendance-logs/{id}` | read-only |
| Day | client `CheckInAt` | UNCLEAR-FROMDATE → P2 BE fromDate |
| Write | **OUT** P1 | attendance / check-in owner khác |
| BFF | ONLY `http://localhost:5202` · `mobile-bff/api/v1` | **cấm** Web BFF base client |
| Path invent | **cấm** `api/v1/supervise*` | reuse attendance-logs |

## 5. Bind (cite real-data §B)

| uiField | GET field | controlHint |
|---------|-----------|-------------|
| filter.route | query `route` | Select/Text |
| filter.day | client CheckInAt | Date |
| card.* | UserName · Route · KmPoint · CheckInAt · Status · InZone · Note | Text/Badge/DateTime |
| detail.* | GET/{id} + Lat · Lng | Text/Badge RO |
| btn.map / segment.map | Id/Lat/Lng · nav | Button/Nav |

## 6. Leave / Out of scope

| Leave | Owner / note |
|-------|--------------|
| POST/PUT/DELETE attendance-logs | attendance / check-in |
| Face / NFC / check-in sheet | peer `#sc-checkin*` |
| Invent `/supervise*` API | **cấm** P1 |
| DOMAIN-MAP row `web-rmms-supervise` | SA (UNCLEAR-DOMAIN-MAP-SUP) |
| BE fromDate/toDate | P2 (UNCLEAR-FROMDATE) |
| OrgUnit DTO | Note fallback (UNCLEAR-ORG) |
| Embed map / zone config | sibling `/patrol-map` |
| MFE desktop Field · iOS/Android edit | **cấm** |
| ERP.* / Domains/Master | **cấm** |
| demo HTML / demoDays / mock SSOT | **cấm** |

## 7. Open questions → next roles

| id | Action |
|----|--------|
| UNCLEAR-DOMAIN-MAP-SUP | SA thêm DOMAIN-MAP row · cite Patrol `supervise` |
| UNCLEAR-STD-ROUTE | Design/Dev follow STATUS `mfeStdRoute` `/web-rmms-supervise` · native `/supervise*` |
| UNCLEAR-FROMDATE | P1 client day · SA confirm P2 |
| UNCLEAR-ORG | Design bind Note / fallback copy |
| UNCLEAR-EMPTY-COPY | Design live empty · **cấm** demo SSOT |

## 8. DoD (handoff Design)

- [x] packKind=`list` · changeScope=`new_page` confirmed
- [x] Screens SUP-00…08 + List AC-01…08
- [x] Leave / Out of scope + FormMode↔API
- [x] Inventory + controlHint + real-data §A+§B copied (hash skip · **cấm** re-scan demo)
- [x] Labels / GPS / empty / BFF HARD rules
- [ ] Design: phone 430 · zones SUP-* · DES-MOB-* parity · prototype + reviewUrl
- [ ] SA: DOMAIN-MAP · Mobile.Bff attendance-logs confirm

## 9. Handoff

| Next | Artifact |
|------|----------|
| Design | `ui/design.md` + prototype + reviewUrl · zones SUP-* |
| compact | `specs/web-rmms-supervise/handoff/po-compact.md` |
| STATUS | po → **confirmed** · design → pending |

## Version meta

`skillVersion=2026.09.05.03` · `schemaVersion=1` · `contentHash=sha256:bd4aedbcdb3686ca817a32c3f563270adc1d35b1f7bca526be023528a1840d2b` · `rulesVersion=2026.09.25.2` · `confirmedAt=2026-09-26T02:30:00.000Z`
