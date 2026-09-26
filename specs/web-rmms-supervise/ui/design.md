# Design — web-rmms-supervise

| Field | Value |
|-------|-------|
| feature | `web-rmms-supervise` |
| title | Giám sát và chi tiết |
| this role | `design` · `/agent-design` |
| status | `confirmed` (autoApprove=ON) |
| design_confirm | **approve** (`task_db95c037`) |
| changeScope | `new_page` |
| packKind | **`list`** (PO confirm · UI = **phone list + RO detail** · **≠** Kind B desktop) |
| lane | `web` |
| stack | `web_mfe_phone` · `Linm.Web.RMMS.Mobile` · `max-width: 430px` |
| formPattern | Mobile list + RO detail · **N/A** ERP Modal/Slideout · **no POST** on Giám sát |
| DES-GRID / LinErpListFilterBar | **N/A** — phone list · **cấm** clone |
| Report AC / DES-RPT | **N/A** |
| shared_grid_example | **N/A** (phone) |
| real_view_parity | **v1** |
| peerStdUrl | `http://localhost:9301/web-rmms-supervise` |
| mfeStdUrl | `http://localhost:9301/web-rmms-supervise` |
| mfeStdRoute | `/web-rmms-supervise` |
| productRoute | `/supervise` · `/supervise/:id` · alias `/field/supervise*` |
| reviewUrl | `file:///D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-supervise/ui/prototype/index.html` |
| reviewUrl empty | `file:///D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-supervise/ui/prototype/index.html?empty=1` |
| reviewUrl detail | `file:///D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-supervise/ui/prototype/index.html?detail=1` |
| reviewUrl filter | `file:///D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-supervise/ui/prototype/index.html?filter=1` |
| demo | **N/A** · hash skip · **cấm** re-scan (**GAP-DES-DEMO-RESCAN-01**) |
| ui1to1 | Android `#sc-supervise` / `#sc-supervise-detail` · `DES-MOB-SUPERVISE` / `DES-MOB-SUP-DETAIL` · **cấm** demo SSOT |
| mfe | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Mobile` |
| beRepo | `D:/AI-QLBD/Linm.RMMS.WebService` · Patrol `attendance-logs` · **cấm ERP.*** |
| bff | `Linm.RMMS.Mobile.Bff` · `:5202` · `mobile-bff/api/v1` · **cấm** web-bff client |
| controlHint | `specs/_data-analy/features/web-rmms-supervise-control-hint.md` |
| realData | `specs/_data-analy/features/web-rmms-supervise-real-data.md` · §A+§B PASS |
| prior | PO `confirmed` · `handoff/po-compact.md` · contentHash `sha256:bd4aedbcdb3686ca817a32c3f563270adc1d35b1f7bca526be023528a1840d2b` |
| autoApprove | **ON** |
| e2eQa | ON queued `/agent-qa*` · **cấm** e2e / `yarn start:std` ở Design |
| `devSlash` | `/agent-dev` |
| updatedAt | `2026-09-26T02:40:00.000Z` |
| taskId | `task_db95c037` |
| skillId | `agent-design` |
| skillVersion | `2026.09.05.03` |
| schemaVersion | `1` |
| workflowVersion | `2026.09.19.02` |
| rulesVersion | `2026.09.25.2` |
| versionGate | `ok` |
| contentHash | `sha256:bd4aedbcdb3686ca817a32c3f563270adc1d35b1f7bca526be023528a1840d2b` |

**Cấm:** Dev/BE trước confirm (đã autoApprove) · ERP.* · iOS/Android native dual edits · Kind B DES-GRID · `LinErpListFilterBar` · invent `/supervise/*` API · GPS capture/fake/POST · demoDays / demo SSOT · hardcode label keys ngoài `useFormOptions` · native `alert`/`confirm` · re-scan demo · `yarn build` / e2e / start:std ở role này · gộp attendance hub / Face-NFC / check-in POST · desktop Field.

## 0. Context / Demo

| ID | Path | Notes |
|----|------|-------|
| CTX-01 | `docs/context/features/web-rmms-supervise.md` | feature P0 |
| CTX-02 | `docs/plan/web-rmms-mobile/SCREENS.md` · `/supervise*` | Supervise chain |
| CTX-03 | `docs/context/features/supervise.md` · `supervise-detail.md` | peer DES-MOB-SUPERVISE / SUP-DETAIL |
| DEM | — | **N/A** · hash skip · **cấm** demoDays |
| DA-01 / DA-02 | `_data-analy/features/web-rmms-supervise-{control-hint,real-data}.md` | inventory + §B |
| PO | `po/requirement.md` · `handoff/po-compact.md` | List AC · filter live · RO · map sibling |
| Peer proto | `specs/supervise/ui/prototype/android/index.html` `#sc-supervise` | UI 1-1 zones (cite only) |
| tokens | primary `#0C84C0` · header `#086A9A`→`#0C84C0` · phone 430 · card radius 14–16 |

## 1. Pattern & shell

| | |
|--|--|
| Frame | Phone **430px** · content-only · label **13** · field **≥16** · control **≥44/48** |
| Shell | App topbar (back · title · Lọc) · **không** ERP `LinPageLayout` catalog chrome |
| Surface | List SUP-01…04 + push RO SUP-05 — **không** Modal/Slideout form · filter = bottom sheet |
| Filter | Phone sheet SUP-02 · **cấm** LinErpListFilterBar |
| Leave | Dirty none (RO only) · **cấm** `window.alert` |
| Tabs | **không** new tab · Entry Home / Field |
| Entry | Home/Field → `/web-rmms-supervise` (STATUS) · product `/supervise*` |
| Out | POST attendance · Face/NFC · invent supervise API · desktop Field · native edits |

### UNCLEAR-STD-ROUTE (Design chốt)

| | |
|--|--|
| Packet / STATUS | `mfeStdRoute=/web-rmms-supervise` · `mfeStdUrl=http://localhost:9301/web-rmms-supervise` |
| SCREENS | `/supervise` · `/supervise/:id` · alias `/field/supervise*` |
| Wire | MFE mount STATUS route · in-app nav product routes · **follow STATUS** for std URL |

## 2. Screens / zones

| Zone | Route | Surface | Wire |
|------|-------|---------|------|
| **SUP-00** | phone frame | Layout ≤430 | DES-MOB-SUPERVISE / DES-MOB-SUP-DETAIL |
| **SUP-01** | `/web-rmms-supervise` · `/supervise` | Topbar + title + Lọc | copy `supervise.title` |
| **SUP-02** | filter sheet | Select/Date + Apply/Clear | live GET `route` + client day |
| **SUP-03** | segment | Danh sách / Bản đồ | list stay · map → `/patrol-map` |
| **SUP-04** | cards | ListRow/rich-card + Badge | GET `attendance-logs` |
| **SUP-05** | `/supervise/:id` | Detail RO + CTA map | GET `…/{id}` |
| **SUP-06** | GPS | Text RO | stored Lat/Lng only · **cấm** capture |
| **SUP-07** | empty/error | Empty / Toast | `[]` / loadFail · **cấm** demo SSOT |
| **SUP-08** | entry | Nav | Home / Field · **cấm** gộp attendance |
| **DES-MOB-SUPERVISE** | screen owner | Screen | peer `#sc-supervise` |
| **DES-MOB-SUP-DETAIL** | screen owner | Screen | peer `#sc-supervise-detail` |
| **DES-MOB-SUP-FILTER** | sheet | Modal/sheet | Tuyến · Ngày · Áp dụng · Xóa lọc |

### IA

```
(auth) → Home / Field
  → SUP-01 /supervise (mfeStd /web-rmms-supervise)
       Lọc → SUP-02 sheet · Apply → GET ±route + client CheckInAt day · Clear → bare GET
       segment Bản đồ → /patrol-map · reset seg list · cấm toast giả
       tap card → SUP-05 /supervise/:id · GET/{id} RO
         → btnMap → map peer (pass Id/Lat/Lng)
  empty GET → [] EmptyState · fail → toast · cấm demo SSOT
```

## 3. Field inventory (Control = controlHint)

| uiField | screen | controlHint | Required | Bind / notes |
|---------|--------|-------------|----------|--------------|
| phoneFrame | SUP-00 | Layout | * | max-width 430 |
| pageTitle | SUP-01 | Text | — | key `supervise.title` |
| btnBack | SUP-01 | Button/Nav | — | → Home/Field |
| btnFilter | SUP-01 | Button | * | open SUP-02 |
| filterRoute | SUP-02 | Select/Text | — | query `route` → GET |
| filterDay | SUP-02 | Date | — | client filter `CheckInAt` |
| btnApplyFilter | SUP-02 | Button | * | re-fetch / re-filter · **cấm** toast giả |
| btnClearFilter | SUP-02 | Button | * | clear · bare GET |
| filterChip | SUP-01 | Chip | — | when route/day set |
| segmentList | SUP-03 | Segment | * | stay list idx 0 |
| segmentMap | SUP-03 | Segment/Nav | * | → `/patrol-map` · **cấm** toast |
| cardUserName | SUP-04 | Text | * | `UserName` |
| cardRouteKm | SUP-04 | Text | * | `Route` · `KmPoint` · empty `—` |
| cardTime | SUP-04 | DateTime | * | `CheckInAt` |
| cardStatus | SUP-04 | Badge | * | `Status` LOOKUP_STATIC |
| cardInZone | SUP-04 | Badge | — | `InZone` |
| cardOrgNote | SUP-04 | Text | — | `Note` org fallback · **UNCLEAR-ORG** |
| cardTap | SUP-04 | Nav | * | → `/supervise/:id` |
| detailHero | SUP-05 | Text | * | `UserName` · `Code` |
| detailRows | SUP-05 | ListRow RO | * | Tổ · Tuyến · Thời điểm · Trạng thái · Tọa độ · Trong vùng |
| detail.note | SUP-05 | Text RO | — | `Note` |
| detail.latLng | SUP-05 / SUP-06 | Text RO | — | Lat · Lng stored |
| btnMap | SUP-05 | Button/Nav | * | pass Id/Lat/Lng · map peer |
| emptyState | SUP-07 | Empty | — | GET empty → `[]` |

**Labels:** `useFormOptions()` / `supervise.*` — prototype hiện nhãn VN để review; Dev wire key.

### Hành vi (Design chốt)

| Case | UI |
|------|-----|
| Appear | GET `patrol/attendance-logs` · fail → toast · **cấm** demo SSOT fallback |
| Filter Apply | dismiss sheet · GET ±`route` · client day on `CheckInAt` · **cấm** invent fromDate API (**UNCLEAR-FROMDATE**) |
| Filter Clear | clear · bare GET |
| Segment map | nav `/patrol-map` · reset list seg · **cấm** toast giả |
| Tap card | push SUP-05 · GET/{id} RO |
| btnMap | nav map peer · pass Id/Lat/Lng · **cấm** capture GPS |
| Empty list | EmptyState · live `[]` only (**UNCLEAR-EMPTY-COPY**) |
| Leave | no dirty · discard none |

### List AC (packKind=list · phone)

| AC | DoD |
|----|-----|
| AC-LIST-01 | Appear live GET list |
| AC-LIST-02 | Filter route live · day client |
| AC-LIST-03 | Empty `[]` · no demo SSOT |
| AC-LIST-04 | Card bind UserName/Route/Km/CheckInAt/Status |
| AC-LIST-05 | Tap → detail GET/{id} |
| AC-LIST-06 | Segment map sibling nav |
| AC-LIST-07 | Phone ≤430 · no DES-GRID |
| AC-LIST-08 | No POST / no invent `/supervise*` |

## 4. DES ↔ kit map

| Zone / DES | Kit / surface | Notes |
|------------|---------------|-------|
| Topbar | `LinmTopBar` | back · title · Lọc |
| Segment | `LinmSegment` | list / map |
| Filter sheet | Modal / bottom sheet | route · date · Apply/Clear |
| Cards | `LinmCard` / rich-card composition | peer `#sc-supervise` |
| Status | Badge | Status / InZone |
| Detail RO | Detail rows | no edit |
| btnMap | Primary / Nav button | map peer |
| Toast | `LinmToast` | loadFail only · **cấm** filter/map fake toast |
| Empty | EmptyState | live `[]` |

### kit_missing_confirm

**N/A** — reuse existing Mobile kit (TopBar · Segment · Card · Toast · sheet · Empty). **Không** package mới P1. **Cấm** invent `LinmRichCheckinCard`.

## 5. API (Design note · SA cite DTO)

| Zone | Method · Path |
|------|----------------|
| List | `GET …/patrol/attendance-logs` · query `route` opt · day = client |
| Detail | `GET …/patrol/attendance-logs/{id}` |

App base: `{BffBase}/mobile-bff/api/v1`. **Cấm** invent `/supervise/*` · invent fromDate/toDate P1 · ERP.* · web-bff client · POST/PUT/DELETE trên Giám sát.

UNCLEAR-DOMAIN-MAP-SUP → SA add DOMAIN-MAP row `web-rmms-supervise` (cite Patrol `supervise`).
UNCLEAR-FROMDATE → P1 client day only.
UNCLEAR-ORG → bind `Note` / copy fallback.

## 6. Prototype review states

| State | URL query | Expect |
|-------|-----------|--------|
| List ready | (default) | topbar · segment · cards · Lọc |
| Empty | `?empty=1` | EmptyState · no demo rows |
| Filter open | `?filter=1` | SUP-02 sheet visible |
| Detail | `?detail=1` | SUP-05 RO + btnMap |
| Map CTA | board / detail btn | nav note → `/patrol-map` (prototype toast→copy only, Dev real nav) |

**Cấm** dùng `mfeStdUrl` / `yarn start:std` làm reviewUrl Design.

## 7. Out of pack

| Item | Owner |
|------|-------|
| DOMAIN-MAP row | SA |
| fromDate BE | DEFER · client day P1 |
| Attendance POST / Face-NFC | Out · owner khác |
| E2E | `/agent-qa*` queued |
| Native iOS/Android edits | **cấm** |
| Desktop Field | Out |

## 8. design_confirm

| | |
|--|--|
| Gate | `design_confirm` |
| Result | **approve** |
| Mode | autoApprove=ON · không chờ board |
| Next | `/agent-sa` · **stop** this task (GAP-PKT-ROLE-01) |

## Version meta (REQUIRED)

| Field | Value |
|-------|-------|
| skillId | agent-design |
| skillVersion | 2026.09.05.03 |
| schemaVersion | 1 |
| workflowVersion | 2026.09.19.02 |
| rulesVersion | 2026.09.25.2 |
| generatedAt | 2026-09-26T02:40:00.000Z |
| versionGate | ok |
| contentHash | sha256:bd4aedbcdb3686ca817a32c3f563270adc1d35b1f7bca526be023528a1840d2b |

---
<!-- Version meta: skillId=agent-design skillVersion=2026.09.05.03 schemaVersion=1 workflowVersion=2026.09.19.02 rulesVersion=2026.09.25.2 versionGate=ok -->
