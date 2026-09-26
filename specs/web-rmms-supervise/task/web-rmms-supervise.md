# Team lead — Task — web-rmms-supervise

> Status: **ready** · `task_1bf814c7` · writtenAt `2026-09-26T02:50:00.000Z`  
> skillVersion: `2026.09.05.03` · contentHash: `sha256:bd4aedbcdb3686ca817a32c3f563270adc1d35b1f7bca526be023528a1840d2b`  
> autoApprove: ON · e2eQa: ON (queued `/agent-qa*`) · **cấm** implement ở role team_lead

| | |
|--|--|
| Feature | `web-rmms-supervise` |
| Title | Giám sát và chi tiết (Mobile list + RO detail) |
| Role | `team_lead` |
| packKind | `list` |
| changeScope | `new_page` |
| formPattern | Mobile list + RO detail · phone ≤430 · N/A ERP Modal/Slideout · no POST P1 |
| mfe | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Mobile` |
| mfeStdRoute | `/web-rmms-supervise` |
| mfeStdUrl | `http://localhost:9301/web-rmms-supervise` |
| productRoutes | `/supervise` · `/supervise/:id` · alias `/field/supervise*` |
| be | `D:/AI-QLBD/Linm.RMMS.WebService` · **cấm ERP.*** |
| bff | `Linm.RMMS.Mobile.Bff` `:5202` · `mobile-bff/api/v1` · **cấm web-bff client** |
| demo | **N/A** · cite `#sc-supervise*` / DES-MOB-* only · **cấm** demo SSOT / demoDays |
| Step4b / migration | **skip** (SA: none) |
| next | `/agent-dev` · roleOnly stop (GAP-PKT-ROLE-01) |

## Notes

- changeScope=`new_page` · analy control-hint + real-data **PASS** → full TL pack (không chỉ data-analy).
- DOMAIN-MAP: `supervise` + `web-rmms-supervise` → Patrol (SA applied).
- API reuse only: live `GET` list + `GET/{id}` `patrol/attendance-logs` · day = client filter `CheckInAt` · **cấm** invent `/supervise*` API · **cấm** invent `fromDate` · **cấm** POST P1.
- Labels: `useFormOptions()` / `supervise.*` · **cấm** hardcode VN form.
- GPS: RO stored Lat/Lng only · **cấm** capture/fake/POST.
- Filter: live route Select + day Date · segment map → `/patrol-map` · **cấm** toast giả.
- Entry: Home/Field W2 · **không** tab mới · **không** gộp attendance hub / Face-NFC / check-in POST.
- DES-GRID / LinErpListFilterBar: **N/A** phone list.
- List AC: AC-LIST-01…08 DoD (QA).
- UNCLEAR-EMPTY-COPY · UNCLEAR-STD-ROUTE → Dev/QA (follow STATUS `mfeStdRoute`; live `[]` empty).
- route_confirm: **keep** STATUS `mfeStdRoute=/web-rmms-supervise` + product `/supervise*` (Design/SA chốt).

## Inputs (compact → full nếu cần)

| Role | Compact | Full |
|------|---------|------|
| data_analy | `handoff/data_analy-compact.md` | `_data-analy/features/web-rmms-supervise-control-hint.md` · `…-real-data.md` |
| po | `handoff/po-compact.md` | `po/requirement.md` |
| design | `handoff/design-compact.md` | `ui/design.md` · `ui/prototype/index.html` |
| sa | `handoff/sa-compact.md` | `be/solution-discovery.md` |

## Screens / zones

SUP-00…SUP-08 · DES-MOB-SUPERVISE · DES-MOB-SUP-DETAIL · DES-MOB-SUP-FILTER  
reviewUrl: `file:///D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-supervise/ui/prototype/index.html`  
(?empty=1 · ?filter=1 · ?detail=1)

## API map (FormMode ↔ API)

| Mode | API | Notes |
|------|-----|-------|
| List | `GET mobile-bff/api/v1/patrol/attendance-logs` | live · client day on CheckInAt |
| Detail RO | `GET …/patrol/attendance-logs/{id}` | RO · Lat/Lng pass-through map |
| Write | — | **no write P1** |

---

## Tasks (T-*)

### T-01 — Routes + page shell (list)

| | |
|--|--|
| id | `T-01` |
| page | list `SUP-00`…`SUP-03` |
| role | `dev` |
| deps | — |
| slash | `/agent-dev` |
| DoD | Register `mfeStdRoute` `/web-rmms-supervise` + product `/supervise` (+ alias `/field/supervise*`) · phone shell ≤430 · header/title via `supervise.*` · 1-1 DES-MOB-SUPERVISE · **cấm** desktop Field MFE |

### T-02 — Filter sheet (route + day)

| | |
|--|--|
| id | `T-02` |
| page | filter `DES-MOB-SUP-FILTER` · SUP-01 |
| role | `dev` |
| deps | `T-01` |
| DoD | Filter sheet: route Select (live options) + day Date · apply → refetch list · client-day filter on `CheckInAt` · **cấm** invent `fromDate` query · **cấm** toast giả |

### T-03 — List cards + badges (live GET)

| | |
|--|--|
| id | `T-03` |
| page | list cards SUP-02 · SUP-03 |
| role | `dev` |
| deps | `T-01`, `T-02` |
| DoD | Bind `GET …/patrol/attendance-logs` via Mobile.Bff · ListRow+Badge · empty `[]` live (UNCLEAR-EMPTY-COPY) · **cấm** demo SSOT · **cấm** ERP.* |

### T-04 — Detail RO + map CTA

| | |
|--|--|
| id | `T-04` |
| page | detail `/supervise/:id` · DES-MOB-SUP-DETAIL · SUP-04…SUP-07 |
| role | `dev` |
| deps | `T-03` |
| DoD | `GET …/attendance-logs/{id}` RO · Org Note/fallback (UNCLEAR-ORG resolved) · btnMap pass stored Lat/Lng only · **cấm** GPS capture/fake/POST · 1-1 `#sc-supervise-detail` |

### T-05 — Segment map nav + Home entry (W2)

| | |
|--|--|
| id | `T-05` |
| page | SUP-08 segment · Home/Field entry |
| role | `dev` |
| deps | `T-01` |
| DoD | Segment → `/patrol-map` · Home/Field entry W2 supervise · **không** tab mới · **không** gộp attendance hub / Face-NFC / check-in POST |

### T-06 — i18n + quality gates

| | |
|--|--|
| id | `T-06` |
| page | all |
| role | `dev` |
| deps | `T-01`…`T-05` |
| DoD | `useFormOptions()` / `supervise.*` · AC-LIST-01…08 ready for QA · no hardcode VN · labels match Design prototype zones · UNCLEAR-STD-ROUTE: STATUS `mfeStdRoute` authoritative for std host |

---

## STATUS Tasks mirror

| id | page | role | deps | status | notes |
|----|------|------|------|--------|-------|
| T-01 | list shell + routes | dev | — | pending | SUP-00…03 · mfeStdRoute |
| T-02 | filter sheet | dev | T-01 | pending | route+day · cấm fromDate invent |
| T-03 | list GET cards | dev | T-01,T-02 | pending | attendance-logs · empty [] |
| T-04 | detail RO + map | dev | T-03 | pending | GET/{id} · Lat/Lng RO |
| T-05 | segment + Home W2 | dev | T-01 | pending | → /patrol-map · entry |
| T-06 | i18n + AC gates | dev | T-01…T-05 | pending | useFormOptions · AC-LIST |

## Out of scope (P1)

- POST / check-in / Face-NFC / attendance hub merge
- ERP.* controllers · web-bff client · Step4b / migration
- invent `/supervise*` BE endpoints · invent `fromDate`
- demo SSOT / demoDays · MFE desktop Field · native iOS/Android code edits
- yarn e2e / start:std (chỉ QA)

## Handoff

- compact: `specs/web-rmms-supervise/handoff/team_lead-compact.md`
- next role: **dev** · artifact `implement/web-rmms-supervise.md`
- e2e: queued QA only
