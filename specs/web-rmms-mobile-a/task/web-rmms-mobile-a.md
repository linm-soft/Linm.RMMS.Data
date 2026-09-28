# Team lead — Task — web-rmms-mobile-a

| Field | Value |
|-------|-------|
| feature | `web-rmms-mobile-a` |
| title | Edit delta A — Pattern B · no-seed · users Bff · mobileApiBase |
| role | `team_lead` · `/agent-team-lead` |
| status | `done` (autoApprove=ON · `route_confirm=approve` path `/web-rmms-mobile-a`) |
| packKind | `list` (**phone Field hub** ≠ desktop Kind B grid) |
| changeScope | `edit_page` · **editTask=1** |
| formPattern | Full (TD-00/01/02/07 · TK-00/01) · Sheet (TD-03 Pattern B) · phone max-width **430** · `LeaveConfirmModal` |
| mfe | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Mobile` |
| mfeStdRoute | `/web-rmms-mobile-a` (**route_confirm** autoApprove=ON · giữ path STATUS · **không** URL mới) |
| mfeStdUrl | `http://localhost:9301/web-rmms-mobile-a` |
| be | `D:/AI-QLBD/Linm.RMMS.WebService` · Patrol + Integration + Auth + Files · **cấm ERP.*** |
| BFF bind | `mobile-bff/api/v1/patrol/**` + `integration/users` forward · **cấm** web-bff client |
| transport | `mobileApiBase()` / `VITE_MOBILE_API_URL` **only** |
| demo | **N/A** |
| deltaCite | `docs/plan/web-rmms-mobile/SUBMIT-VALIDATE.md` |
| contentHash | `sha256:110e845481b0f27091c0f5ca856fef74524bc1634ab8e3785a5d7755730eea45` |
| skillVersion | `2026.09.05.03` |
| rulesVersion | `2026.09.27.1` |
| schemaVersion | `1` |
| updatedAt | `2026-09-27T14:35:00.000Z` |
| taskId | `task_90723ead` |
| reviewUrl | `file:///D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-mobile-a/ui/prototype/index.html` |
| prior | data_analy·po·design·sa = **confirmed** · compact exist · wave A T-* **done** |

> TL **chia HOW + DoD + T-*** edit delta · **cấm** implement product code · **cấm** e2e / yarn build / start:std.  
> Kind B grid / `LinErpListFilterBar` / ui-schema editor = **WAIVE** (giữ prior).  
> Wave A Live APIs **reuse** — migration **none**.

## route_confirm

| Option | Path | Decision |
|--------|------|----------|
| A (default) | `/web-rmms-mobile-a` | **approve** (autoApprove=ON · khớp STATUS · peerStdUrl · **không** mint URL mới) |
| B | `/td-tk-a` | rejected |
| C custom | — | N/A |

`source.routes` = `[/web-rmms-mobile-a]` · draft `mfeStdRoute` giữ nguyên.

## § Delta scope (editTask=1)

| Gap | Decision (PO·Design·SA) | Edit T-* |
|-----|-------------------------|----------|
| Pattern B | TD-03 Lưu always-on trừ `saving` · GPS deny → banner **on-click** · **cấm** `disabled={!gps}` · **cấm** fake lat/lng | T-UI-PATTERN-B-01 |
| no-seed | Xóa `ROAD_ROUTE_SEED` / `filterSeed` / QL.22 · SearchInput live · miss → `--` | T-UI-LKP-EDIT-01 |
| users Bff | resolve-only A · `GET integration/users` · Mobile.Bff forward · miss → `--` · **cấm** picker A | T-UI-USER-01 |
| mobileApiBase | mọi HTTP qua `mobileApiBase()` / `VITE_MOBILE_API_URL` · **cấm** web-bff · **cấm** ERP.* | T-UI-TRANSPORT-01 |
| Note-encode | CLOSED SA: `chieu=` · `kmFrom/kmTo` · `mode=` · `reason=` · opt startLat/startLng · join `; ` | cite T-UI-FORM-01 prior · verify in T-QA-EDIT-01 |
| plan-point | empty OK · no auto MatchOk | cite prior · no new T-* |

## FormType pack adapt (phone hub) — keep prior WAIVE

| Canonical (form-type-task-pack §2a) | Adapt | Reason |
|-------------------------------------|-------|--------|
| T-UI-LIST-01 Kind B | **WAIVE** | DES-GRID N/A phone hub |
| T-UI-FILTER-01 | **WAIVE** | no LinErpListFilterBar |
| T-UI-CFG-01 / T-BE-UISCHEMA-01 | **WAIVE** | no ui-schema |
| T-QA-FILTER-01/02 | **WAIVE** | no filter-bar |
| Wave A T-BE-* · T-UI-* · T-QA-* · T-REV-01 | **done** (prior) | reuse Live |

**GAP-TL-FORMTYPE-01:** PASS — edit mint đủ delta · waive giữ cite.  
**tl-retry-ssot-rereview:** N/A (không retry SSOT lệch skillVersion).

## Screens → edit tasks

| id | Surface | Pattern | Edit focus | Task | devSlash |
|----|---------|---------|------------|------|----------|
| TD-03 | Check-in Sheet | Sheet Pattern B | Lưu / GPS banner | T-UI-PATTERN-B-01 | `/agent-dev` |
| TD-02 · TK-01 | Mở ca | Full | route SearchInput no-seed · miss `--` | T-UI-LKP-EDIT-01 | `/agent-dev` |
| TD-02 · TK-01 | userName | SearchInput | `GET patrol/actors` · quyền tuần · default caller | T-UI-USER-01 | `/edit-web-feature` |
| * | HTTP client | — | mobileApiBase only | T-UI-TRANSPORT-01 | `/agent-dev` |
| TD-* · TK-* | flows | — | QA delta | T-QA-EDIT-01 | `/agent-qa` |

## ssot.reuse

| Concern | Reuse | Cấm |
|---------|-------|-----|
| UI | common-components + mobile kit · `useFormOptions()` · LeaveConfirmModal | clone Lin* · hardcode VN |
| HTTP | `mobileApiBase()` · prefix mobile-bff | web-bff · invent axios · ERP.* |
| BE | Patrol Live · `GET patrol/actors` (scope) · Integration users (kết ca) · ApiResponse | parent `*Json` · fake GPS · ERP `UserSearchInput` |
| Note | SA opaque `key=value` join `; ` | JSON object trong Note |
| Route catalog | `integration/road-routes/search` | ROAD_ROUTE_SEED / filterSeed |

## implement.wire (edit)

| From | To | Note |
|------|----|------|
| Check-in Lưu | `POST …/sessions/{id}/check-ins` | Pattern B · GPS on-click |
| Route | `GET …/integration/road-routes/search` | no seed |
| Users | `GET …/integration/users` via Mobile.Bff | resolve-only A |
| All FE HTTP | `mobileApiBase()` | cấm web-bff |

## implement.state (edit)

- TD-03: `submitCheckIn` disabled **chỉ** khi `saving` · GPS deny không pre-disable · banner on Lưu click
- Route miss / user miss → display `--`
- Không còn import/const `ROAD_ROUTE_SEED` / `filterSeed` / QL.22 seed
- Grep FE: không gọi web-bff host từ surface A

## implement.init_data

| Field | Source | Cấm |
|-------|--------|-----|
| direction · inspectMode | LOOKUP_STATIC `useFormOptions()` | invent init-data |
| route | road-routes/search | seed arrays |
| userName | integration/users resolve | fake name · picker A |

## Field → control (delta-relevant)

| uiField | controlHint | source | write / behavior |
|---------|-------------|--------|------------------|
| route | SearchInput | road-routes/search | no seed · miss `--` |
| userName | Text RO+resolve | integration/users | miss `--` |
| lat/lng/accuracyM | GPS | geolocation | Pattern B on-click banner |
| submitCheckIn | Button | — | disable only saving |
| direction · km* · mode · reason | Dropdown/Number/Text | Note encode SA | `chieu=`…`; ` |

---

## Tasks — prior wave A (reference · **done**)

| id | status | notes |
|----|--------|-------|
| T-BE-CRUD-01 · T-BE-INIT-01 · T-PERM-01 | **done** | Live · LOOKUP_STATIC |
| T-UI-HUB-01 · T-UI-FORM-01 · T-UI-ACT-01 · T-UI-LEAVE-01 | **done** | prior |
| T-UI-LKP-01 · T-UI-FIELD-01 · T-UI-PROD-01 · T-UI-UX-01 · T-UI-RESP-01 · T-UI-HIST-01 | **done** | prior · LKP **edit** by T-UI-LKP-EDIT-01 |
| T-QA-CRUD-01 · T-QA-FORM-01 · T-REV-01 | **done** | prior accept |
| Kind B / FILTER / CFG / UISCHEMA / QA-FILTER | **WAIVE** | phone hub |

---

## Tasks — edit delta (mint · **pending** Dev/QA)

### T-UI-PATTERN-B-01 — CheckInSheet Pattern B (TD-03)
- **role:** Dev · **deps:** T-UI-FORM-01 (done) · **devSlash:** `/agent-dev`
- **status:** pending
- **DoD:** TD-03 `submitCheckIn` **always enabled** trừ `saving` · GPS permission deny → **banner on Lưu click** (không pre-disable) · **cấm** `disabled={!gpsOk}` · **cấm** fake lat/lng khi deny · khớp prototype Pattern B · zones TD-03
- **skills:** `/agent-dev` · design compact · SA Pattern B
- **ssot.reuse:** LeaveConfirmModal giữ · common GPS helper nếu có
- **implement.wire:** POST check-ins chỉ khi GPS ok sau click
- **implement.state:** click Lưu + deny → banner · không POST

### T-UI-LKP-EDIT-01 — Route SearchInput no-seed
- **role:** Dev · **deps:** T-UI-LKP-01 (done) · **devSlash:** `/agent-dev`
- **status:** pending
- **DoD:** xóa `ROAD_ROUTE_SEED` / `filterSeed` / QL.22 seed · SearchInput → `GET road-routes/search` · miss label `--` · (**GAP-LIST-LKP-01** edit)
- **skills:** list-form-quality-gates §1
- **implement.wire:** integration/road-routes/search via mobileApiBase
- **implement.state:** không còn seed const trong MFE surface A

### T-UI-USER-01 — Users resolve-only (Bff forward)
- **role:** Dev · **deps:** T-UI-FORM-01 (done) · **devSlash:** `/agent-dev`
- **status:** pending
- **DoD:** `userName` Text RO + resolve `GET integration/users` · Mobile.Bff **forward only** (không new API) · miss → `--` · **cấm** userSearch picker wave A · **cấm** invent display name
- **skills:** `/agent-dev` · SA users
- **implement.wire:** mobile-bff → integration/users
- **implement.state:** id known → display · unknown → `--`

### T-UI-TRANSPORT-01 — mobileApiBase hard
- **role:** Dev · **deps:** none (parallel) · **devSlash:** `/agent-dev`
- **status:** pending
- **DoD:** mọi call surface A dùng `mobileApiBase()` / `VITE_MOBILE_API_URL` · **cấm** web-bff base · **cấm** ERP.* path · grep clean trên pages/services A
- **skills:** `/agent-dev` · align-mobile-to-mfe
- **implement.wire:** apiClient + mobileApiBase SSOT
- **implement.state:** network host = mobile API URL only

### T-QA-EDIT-01 — QA edit delta flows
- **role:** QA · **deps:** T-UI-PATTERN-B-01 · T-UI-LKP-EDIT-01 · T-UI-USER-01 · T-UI-TRANSPORT-01 · **status:** pending
- **DoD:** scenarios Pattern B GPS deny banner · no-seed route miss `--` · user miss `--` · transport mobile-only · Note tokens vẫn đúng · **e2e chỉ** `/agent-qa*` (queued) · **cấm** e2e ở Dev/TL
- **skills:** `/agent-qa` · `form-field-e2e`

### T-REV-EDIT-01 — Review edit delta
- **role:** Review · **deps:** T-QA-EDIT-01 · **status:** pending
- **DoD:** QUERY/SEC/UI/BE spot-check delta · Pattern B · no-seed · users · mobileApiBase · **cấm ERP.***
- **skills:** `/agent-review`

---

## Deps (order) — edit

```
T-UI-TRANSPORT-01 ─┐
T-UI-PATTERN-B-01 ─┼─► T-QA-EDIT-01 ─► T-REV-EDIT-01
T-UI-LKP-EDIT-01  ─┤
T-UI-USER-01      ─┘
```

Parallel Dev OK trên 4 T-UI-* edit · QA sau khi 4 done.

## WAIVE register (giữ)

| id | status | cite |
|----|--------|------|
| T-UI-LIST-01 Kind B | WAIVE | DES-GRID N/A |
| T-UI-FILTER-01 | WAIVE | phone hub |
| T-UI-CFG-01 | WAIVE | no catalog editor |
| T-BE-UISCHEMA-01 | WAIVE | no ui-schema A |
| T-QA-FILTER-01/02 | WAIVE | no filter-bar |

## UI note — Chi tiết ca back

`PatrolDetailPage` back đi đúng list đã mở ca (`/tuan-duong` hoặc `/tuan-duong/lich-su`), không `navigate(-1)`. Vùng bấm 56px, animation scale khi nhấn.

## Next

- `/agent-dev` · roleOnly stop (**GAP-PKT-ROLE-01**) · e2eQa queued QA  
- **cấm** yarn build / e2e / start:std ở team_lead
