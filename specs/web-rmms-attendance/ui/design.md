# Design — web-rmms-attendance

| Field | Value |
|-------|-------|
| feature | `web-rmms-attendance` |
| title | Chấm công |
| this role | `design` · `/agent-design` |
| status | `confirmed` (autoApprove=ON) |
| design_confirm | **approve** (`task_61e25304`) |
| changeScope | `edit_page` |
| packKind | **`list`** (phone Field hub · **≠** Kind B desktop) |
| lane | `web` |
| stack | `web_mfe_phone` · `Linm.Web.RMMS.Mobile` · `max-width: 430px` |
| formPattern | Mobile hub Pattern B validate · RO report/day/log · **N/A** ERP Modal/Slideout |
| DES-GRID / LinErpListFilterBar | **N/A** — phone · **cấm** clone · **cấm** Excel |
| Report AC / DES-RPT | **N/A** — client aggregate GET list |
| shared_grid_example | **N/A** (phone) |
| real_view_parity | **v1** (keep) · delta Pattern B CTA/banner |
| peerStdUrl | `http://localhost:9301/cham-cong` |
| mfeStdUrl | `http://localhost:9301/cham-cong` |
| mfeStdRoute | `/cham-cong` |
| productRoute | `/field/attendance` · `/report` · `/day/:key` · `/log/:id` |
| reviewUrl | `file:///D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-attendance/ui/prototype/index.html` |
| reviewUrl GPS deny | `…/index.html?deny=1` |
| reviewUrl empty | `…/index.html?empty=1` |
| reviewUrl checked | `…/index.html?checked=1` |
| reviewUrl offline | `…/index.html?offline=1` |
| reviewUrl guest | `…/index.html?guest=1` |
| demo | **N/A** · hash skip · **cấm** re-scan (**GAP-DES-DEMO-RESCAN-01**) |
| ui1to1 | Android `#sc-attendance` · `DES-MOB-ATT` · hero green · 7d rows · **cấm** demoDays |
| align | `/align-mobile-to-mfe` · demo_ref=no_demo · 430 · **không** tab/route/icon mới |
| mfe | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Mobile` |
| beRepo | `D:/AI-QLBD/Linm.RMMS.WebService` · Patrol `attendance-logs` · **cấm ERP.*** |
| bff | `Linm.RMMS.Mobile.Bff` · `:5202` · `mobile-bff/api/v1` · `mobileApiBase()` only |
| controlHint | `specs/_data-analy/features/web-rmms-attendance-control-hint.md` |
| realData | `specs/_data-analy/features/web-rmms-attendance-real-data.md` · §A+§B PASS |
| deltaCite | `docs/plan/web-rmms-mobile/SUBMIT-VALIDATE.md` |
| prior | PO `confirmed` · `handoff/po-compact.md` · contentHash `sha256:0275fe24159e04a2d1a70682880e26b3456de61e7cf74b9c3d9ac707cae30d7a` |
| autoApprove | **ON** |
| e2eQa | ON queued `/agent-qa*` · **cấm** e2e / `yarn start:std` ở Design |
| `devSlash` | `/agent-dev` |
| updatedAt | `2026-09-27T17:05:00.000Z` |
| taskId | `task_61e25304` |
| skillId | `agent-design` |
| skillVersion | `2026.09.05.03` |
| schemaVersion | `1` |
| workflowVersion | `2026.09.19.02` |
| rulesVersion | `2026.09.25.2` |
| versionGate | `ok` |
| contentHash | `sha256:0275fe24159e04a2d1a70682880e26b3456de61e7cf74b9c3d9ac707cae30d7a` |
| contentHashPrev | `sha256:6f74282b807da7f2cc1aa57ac64848cd1d75ff3383c0f432eaad7bea53fff80e` |
| keepArtifacts | keep prior SA/TL/implement/qa/review · **cấm** typed CRUD `new_page` |

**Cấm:** Dev/BE trước confirm (đã autoApprove) · ERP.* · iOS/Android native dual edits · Kind B DES-GRID · `LinErpListFilterBar` · Excel export · invent `/attendance/*` · fake GPS · `disabled={!canCheckIn}` · demoDays · hardcode VN labels · native `alert`/`confirm` · re-scan demo · `yarn build` / e2e / start:std · gộp supervise/zone/Face-NFC · desktop Field.

## 0. Context / Delta (edit_page)

| ID | Path | Notes |
|----|------|-------|
| CTX-01 | `docs/context/features/web-rmms-attendance.md` | `edit_page` Pattern B |
| DELTA | `docs/plan/web-rmms-mobile/SUBMIT-VALIDATE.md` | slug `web-rmms-attendance` |
| CTX-02 | `docs/plan/web-rmms-mobile/SCREENS.md` · `/field/attendance*` | chain |
| DEM | — | **N/A** · hash skip · **cấm** demoDays / re-scan |
| DA-01 / DA-02 | `_data-analy/features/web-rmms-attendance-{control-hint,real-data}.md` | inventory + §B |
| PO | `po/requirement.md` · `handoff/po-compact.md` | AC-HUB-01…14 · Guest CLOSED |
| Peer proto | `specs/attendance/ui/prototype/android/index.html` `#sc-attendance` | cite only |
| tokens | primary `#0C84C0` · hero `#1B8A4A`→`#0F5C30` · phone 430 |

### § Current vs New (Design chốt)

| Area | Current (shipped) | New (this task) |
|------|-------------------|-----------------|
| changeScope | `new_page` design done | `edit_page` · keep prototype+reviewUrl |
| mfeStdRoute | prior `/web-rmms-attendance` | **`/cham-cong`** · STATUS / paths.ts |
| btnCheckIn | `disabled={!canCheckIn}` | Pattern B: **luôn bật** · chỉ `disabled={saving}` |
| Validate | toast sớm / disable trước | click → banner `string[]` (auth/GPS/mạng/route) · GPS modal OK |
| Guest | early-return không CTA | CTA visible hoặc login CTA · **cấm** khóa trước |
| Excel | N/A | **cấm** toolbar/export |
| Align | — | `/align-mobile-to-mfe` · 430 · no new tab/route/icon |

## 1. Pattern & shell

| | |
|--|--|
| Frame | Phone **430px** · content-only · label **13** · field **≥16** · control **≥44/48** |
| Shell | App topbar (back · title) · **không** ERP `LinPageLayout` chrome |
| Surface | Hub ATT-01…03 + push RO ATT-04…06 — **không** Modal/Slideout form |
| Validate | Pattern B · client banner · API toast · GPS deny modal |
| Filter | **N/A** — **cấm** LinErpListFilterBar · **cấm** Excel |
| Entry | Field hub → `/cham-cong` · product `/field/attendance*` |
| Out | Face/NFC · supervise · zone · invent report/zones API · desktop · native edits |

### CLOSED-STD-ROUTE

| | |
|--|--|
| Wire | `mfeStdRoute=/cham-cong` · `mfeStdUrl=http://localhost:9301/cham-cong` |
| Product | `/field/attendance*` in-app nav |
| **Cấm** | `/web-rmms-attendance` làm std URL |

## 2. Screens / zones

| Zone | Route | Surface | Wire |
|------|-------|---------|------|
| **ATT-00** | phone frame | Layout ≤430 | Android / DES-MOB-ATT 1-1 |
| **ATT-01** | `/cham-cong` · `/field/attendance` | Topbar + title | copy `attendance.title` |
| **ATT-02** | hero | Text RO + Buttons + Banner* | status · GPS · Chấm vào* · Báo cáo · validationBanner* |
| **ATT-03** | history | ListRow + Badge | GET list aggregate 7d |
| **ATT-04** | `/cham-cong/report` | List | client group-by-day |
| **ATT-05** | `/cham-cong/day/:key` | List | filter CheckInAt dayKey |
| **ATT-06** | `/cham-cong/log/:id` | Detail RO | GET `…/{id}` |
| **ATT-07** | GPS | Action + Modal | deny → **on-submit** báo · **cấm** disable CTA trước |
| **ATT-08** | empty/error | Empty / Toast | `[]` / hero «—» · **cấm** demoDays |
| **ATT-09** | entry | Nav | Field hub · **cấm** gộp supervise |
| **DES-MOB-ATT** | screen owner | Screen | peer `#sc-attendance` |
| **DES-MOB-GPS-DENY** | overlay | Modal | Mở Cài đặt / Để sau · mở khi bấm nếu deny |

### IA

```
(auth) → Field hub
  → ATT-01 /field/attendance (mfeStd /cham-cong)
       Chấm vào* → validate Pattern B → GPS → POST patrol/attendance-logs
       thiếu auth/GPS/mạng/route → banner (GPS + modal) · CTA vẫn bật
       Báo cáo → ATT-04 report (client aggregate)
         → ATT-05 day/:key → ATT-06 log/:id (RO)
  empty GET → [] / hero —
```

## 3. Field inventory (Control = controlHint)

| uiField | screen | controlHint | Required | Bind / notes |
|---------|--------|-------------|----------|--------------|
| phoneFrame | ATT-00 | Layout | * | max-width 430 |
| pageTitle | ATT-01 | Text | — | key `attendance.title` |
| back | ATT-01 | Button/Nav | — | → Field hub |
| heroEyebrow | ATT-02 | Text | — | copy key |
| heroStatus | ATT-02 | Text RO | * | Chưa chấm / Đã chấm |
| heroGpsMeta | ATT-02 | Text RO | — | lat/lng · accuracy · ca · empty «—» |
| btnCheckIn * | ATT-02 | Button | * | POST + GPS · **disabled=saving only** |
| btnReport | ATT-02 | Button/Nav | — | → report |
| validationBanner * | ATT-02 | Banner | — | client `string[]` on submit |
| historySection | ATT-03 | SectionLabel | — | 7 ngày gần đây |
| dayRow | ATT-03 | ListRow + Badge | — | title · sub · badge |
| reportList | ATT-04 | List | — | GET list group by day |
| dayList | ATT-05 | List | — | filter dayKey |
| log.userName … note | ATT-06 | Text/Badge RO | — | GET/{id} |
| gpsCapture * | ATT-07 | Action | * (check-in) | deny → on-submit modal · **cấm** fake · **cấm** khóa CTA trước |
| emptyState | ATT-08 | Empty | — | GET empty → `[]` / hero «—» |
| post.userName | — | Hidden | * | auth profile |
| post.route | ATT-02 | Text RO / Hidden | — | `routeHint` ca Field · thiếu → báo khi bấm |
| post.checkInAt | — | Hidden | * | UTC now |
| post.kmPoint | — | Number opt | — | `kmPoint` |
| post.lat / lng | — | Hidden | * | geolocation |
| post.inZone | — | Hidden | — | P1 default true |
| post.status | — | Hidden | — | P1 copy key |
| post.note | — | Text opt | — | `note` |

**Labels:** `useFormOptions()` / `attendance.*` — prototype nhãn VN để review; Dev wire key.

### Hành vi (Design chốt · Pattern B)

| Case | UI |
|------|-----|
| Appear | GET `patrol/attendance-logs` · map 7d · fail → toast · **cấm** demoDays |
| Chấm vào ready | GPS ok · authed · online · route → POST · toast success · hero Đã chấm · refresh |
| Chấm vào thiếu | banner `string[]` (auth / GPS / mạng / route) · **không** disable trước · **không** POST |
| GPS deny | Modal `DES-MOB-GPS-DENY` **khi bấm** · CTA vẫn bật · **cấm** fake coords |
| Guest | CTA visible · click → banner/login CTA · **cấm** early-return khóa hub |
| Offline click | banner offline · **cấm** fake success |
| Saving | `disabled={saving}` only · label Đang lưu… |
| POST 4xx/5xx | toast checkInFail (API) |
| Báo cáo | push ATT-04 · client aggregate · **cấm** invent report API |
| Empty list | EmptyState / hero «—» · live only |
| Excel | **cấm** |

## 4. DES ↔ kit map

| Zone / DES | Kit / surface | Notes |
|------------|---------------|-------|
| Topbar | `LinmTopBar` | back · title |
| Hero | `LinmHeroCard` / green gradient | Android `#1B8A4A`→`#0F5C30` |
| Chấm vào * | `LinmHeroAction` white | Pattern B · saving only disable |
| Báo cáo | `LinmHeroAction` ghost | nav report |
| validationBanner * | Banner `string[]` | client Pattern B |
| Section | `LinmSectionLabel` | 7 ngày |
| Day / report / day rows | `LinmListRow` + Badge | status map |
| Log detail | Detail RO rows | no edit |
| GPS deny | feature Modal | mở on-submit · **cấm** `window.alert` |
| Toast | `LinmToast` | API / success · client ưu tiên banner |
| Empty | EmptyState | live `[]` |

### kit_missing_confirm

**N/A** — reuse Mobile kit (TopBar · Hero · ListRow · Toast · Banner · GPS deny modal). **Không** package mới P1.

## 5. API (Design note · SA cite DTO)

| Zone | Method · Path |
|------|----------------|
| History / report / day | `GET …/patrol/attendance-logs` · client aggregate |
| Check-in | `POST …/patrol/attendance-logs` · lat/lng/route/… |
| Log detail | `GET …/patrol/attendance-logs/{id}` |

App base: `{BffBase}/mobile-bff/api/v1` · `mobileApiBase()`. **Cấm** invent `/attendance/report|summary|zones|validate` · ERP.* · web-bff client.

CLOSED-REPORT-API → P1 client aggregate only.  
OPEN→Dev: UNCLEAR-BANNER-VS-TOAST (migrate client toasts → banner; API toast; GPS modal OK).

## 6. Prototype review states

| State | URL query | Expect |
|-------|-----------|--------|
| Hub ready | (default) | hero + 7d · Chấm vào **enabled** |
| GPS deny | `?deny=1` | CTA **enabled** · bấm → modal + banner |
| Empty | `?empty=1` | hero «—» · empty history |
| Checked | `?checked=1` | hero Đã chấm |
| Offline | `?offline=1` | offline strip · CTA **enabled** · bấm → banner |
| Guest | `?guest=1` | CTA **enabled** · bấm → banner login |
| Report / Day / Log | board nav | ATT-04…06 RO chain |

**Cấm** dùng `mfeStdUrl` / `yarn start:std` làm reviewUrl Design.

## 7. Out of pack

| Item | Owner |
|------|-------|
| Face / NFC | DEFER |
| Report/zones BE | DEFER · client aggregate P1 |
| Banner vs toast migrate | Dev |
| E2E | `/agent-qa*` queued |
| Native iOS/Android edits | **cấm** |
| Desktop Field / Excel | Out |
| typed CRUD new_page | **cấm** |

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
| generatedAt | 2026-09-27T17:05:00.000Z |
| versionGate | ok |
| contentHash | sha256:0275fe24159e04a2d1a70682880e26b3456de61e7cf74b9c3d9ac707cae30d7a |

---
<!-- Version meta: skillId=agent-design skillVersion=2026.09.05.03 schemaVersion=1 workflowVersion=2026.09.19.02 rulesVersion=2026.09.25.2 versionGate=ok -->
