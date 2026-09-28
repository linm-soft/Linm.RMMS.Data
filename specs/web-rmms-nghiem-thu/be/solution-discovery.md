# SA — Solution — web-rmms-nghiem-thu

> Status: **confirmed** · autoApprove ON · task `task_ed889e6d` · 2026-09-27T15:15:00.000Z  
> **changeScope=`edit_page`** · citeDelta `docs/plan/web-rmms-mobile/SUBMIT-VALIDATE.md` · keep prior domain/API/entity · **Delta** Pattern B + SearchInput route/users + BFF users forward.  
> **Cấm** ERP.* · invent path/entity/controller · Step 4b/migration @ SA · Write MFE/native · fake GPS · demo SSOT · web-bff base từ Mobile MFE · typed CRUD `new_page`.

| | |
|--|--|
| Feature | `web-rmms-nghiem-thu` |
| Title | Nghiệm thu — list + create/detail · submit Pattern B + SearchInput (edit_page) |
| Role | `sa` |
| packKind | `list` |
| changeScope | `edit_page` |
| formPattern | Mobile list + full create/detail ≤430 · Pattern B validate · N/A ERP Modal/Slideout · Android NghiemThu* 1-1 · useFormOptions / `nghiemThu.*` |
| domain | **Patrol** (`patrol`) · resource `nghiem-thu` · entity `rmms_nghiem_thu` · **cấm** reuse `rmms_patrol_sessions` · **cấm** Maintenance WO |
| mfe | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Mobile` · `mfeStdRoute=/nghiem-thu/moi` |
| mfeStdUrl | `http://localhost:9301/nghiem-thu/moi` |
| nativeRouteCite | SCREENS `/field/nghiem-thu*` alias → `/nghiem-thu*` · **cấm** sửa iOS/Android |
| be | `D:/AI-QLBD/Linm.RMMS.WebService` |
| BFF | Mobile.Bff `http://localhost:5202` · prefix `mobile-bff/api/v1` · catch-all + **users forward** |
| contentHash | `sha256:b8f3ce70ff3e80073c39d2dac6a01d2fed2e98232877ef6979881eef8e37acb4` |
| skillVersion | `2026.09.05.03` |
| solution_confirm | **approve** (autoApprove) |
| reviewUrl | `file:///D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-nghiem-thu/ui/prototype/index.html` |

## 1. Domain / ownership (keep)

| Item | Decision |
|------|----------|
| DOMAIN-MAP slug | `web-rmms-nghiem-thu` → **Patrol** / `patrol` · prior SA **RESOLVED** — **keep** |
| Alias | `nghiem-thu` → same API resource |
| API folder | **reuse** Patrol `NghiemThuController` · **no new** controller |
| **Cấm** | invent `nghiem-thu-mobile/*` · invent media/users WS · ERP.* · Web BFF base · gộp tuần đường/tuần kiểm/mnt · DELETE P1 |

## 2. FormMode ↔ API

FormMode = **List** + **Create** + **Detail/Edit** (full-page phone · N/A Modal). Session JWT staff required.

| Mode / zone | UI | API | Write | Notes |
|-------------|----|-----|-------|-------|
| NT-00 chrome | page shell | — | — | phone ≤430 |
| NT-01 list | List | `GET patrol/nghiem-thu` | — | page/pageSize · empty |
| NT-02 search | Text/Search | query `search` | — | P1 only |
| NT-03 row | Icon/Badge | item | — | Check · Status · ResultCode |
| NT-04 create btn | Button/Nav | — | nav `/moi` | STD-ROUTE `/nghiem-thu/moi` |
| NT-05 template | Select | `GET …/init-data` | `TemplateType*` | MAU-10 · Dropdown from init-data |
| NT-06 route * | **SearchInput** | `GET integration/road-routes/search` | `Route*` | **no seed** · miss=`--` |
| NT-06 assignee * | **SearchInput** | `GET integration/users?search=` | `AssigneeCode*` | BFF forward · miss=`--` · **cấm** ERP UserSearchInput nguyên |
| NT-06 field/km | Text/Number | item | FieldInfo · KmFrom · KmTo | keep |
| NT-07 result | Select/Text | item | ResultCode · ResultNote | pass/fail/deduct |
| NT-08 scores | Checklist | init-data criteria | Scores[] replace-all | |
| NT-09 media * | PhotoRow | `files/*` | MediaIds ≤10 | `capture=environment` |
| NT-10 GPS | Action | geolocation | FieldInfo / ZoneOrgCode | deny = no fake · list không bắt GPS |
| NT-11 save * | Button | POST / PUT | Status draft on Lưu nháp | **Pattern B** always-on CTA · banner `string[]` · **cấm** `disabled={!canSave}` · **cấm** `alert.warning` |
| Auth gate | staff | JWT + X-Company-Id | guest → login | shell owns login |

### Live endpoints (HARD — real-data §B)

| Method | BFF path (client) | Downstream | Response bind | Status |
|--------|-------------------|------------|----------------|--------|
| GET | `mobile-bff/api/v1/patrol/nghiem-thu` | Patrol | list → NT-01/02/03 | **Live** keep |
| GET | `mobile-bff/api/v1/patrol/nghiem-thu/init-data` | Patrol | TemplateTypes+criteria+ResultCodes | **Live** keep |
| GET | `mobile-bff/api/v1/patrol/nghiem-thu/{id}` | Patrol | detail → NT-05…11 | **Live** keep |
| POST | `mobile-bff/api/v1/patrol/nghiem-thu` | Patrol | create draft | **Live** keep |
| PUT | `mobile-bff/api/v1/patrol/nghiem-thu/{id}` | Patrol | update | **Live** keep |
| * | `mobile-bff/api/v1/files/*` | FileService | MediaIds ≤10 | **Live** keep |
| GET | `mobile-bff/api/v1/integration/road-routes/search` | Integration | RoutePick SearchInput | **Live** Delta |
| GET | `mobile-bff/api/v1/integration/users?search=` | Integration `AppUsersController` | UserPick SearchInput | **WS Live** · **BFF forward required** |
| DELETE | `…/nghiem-thu/{id}` | Patrol | — | **OUT P1** |

- Client base: `http://localhost:5202` + `mobile-bff/api/v1` — **không** gọi `web-bff` từ Mobile MFE.
- Permissions: `patrol.nghiem-thu.read` · `patrol.nghiem-thu.write` (+ integration read for lookups).
- **API Mới / entity mới / migration:** **none** · Step 4b **skip** @ SA.
- Labels: `useFormOptions()` / `nghiemThu.*` · **cấm** hardcode VN.
- Persist: scalar + Scores child · **cấm** parent `*Json` blob inventory (GAP-SA-JSON).
- DES-GRID / `LinErpListFilterBar`: **N/A** phone list · filter query key P1 = `search` only.

### API blocks (Delta + keep summary)

#### API-01: GET `api/v1/patrol/nghiem-thu` (keep)
| | |
|--|--|
| Purpose | List nghiệm thu · search P1 |
| Permission | `patrol.nghiem-thu.read` |
| Tenant | X-Company-Id |
| Request | `page` · `pageSize` · `search?` |
| Form surfaces | NT-01/02/03 |
| data-import | N/A master-no-demo · no Excel |
| Migration | none |

#### API-02: GET `api/v1/patrol/nghiem-thu/init-data` (keep)
| | |
|--|--|
| Purpose | Dropdown TemplateTypes · criteria · ResultCodes · statuses |
| Permission | `patrol.nghiem-thu.read` |
| Form surfaces | NT-05/07/08 |
| Migration | none |

#### API-03: POST/PUT `api/v1/patrol/nghiem-thu`[+`/{id}`] (keep)
| | |
|--|--|
| Purpose | Create draft / update · Pattern B FE validate before call |
| Permission | `patrol.nghiem-thu.write` |
| Request | TemplateType* · Route* · AssigneeCode* · FieldInfo · Km* · ResultCode · Scores[] · MediaIds · Status |
| Form surfaces | NT-05…11 saveCreate/saveEdit |
| Persist | `rmms_nghiem_thu` + scores child · **cấm** parent Json |
| Migration | none |

#### API-04: `files/*` (keep)
| | |
|--|--|
| Purpose | PhotoRow MediaIds ≤10 · capture=environment |
| Form surfaces | NT-09 |
| Migration | none |

#### API-05: GET `api/v1/integration/road-routes/search` (Delta *)
| | |
|--|--|
| Purpose | SearchInput route · **cấm** ROAD_ROUTE_SEED / filterSeed / QL.22 |
| Permission | integration/road read (peer) |
| Request | `search` / q per peer lookups |
| Response | `{ value, label }[]` → Route* |
| Form surfaces | NT-06 route |
| Errors | empty → miss=`--` · **cấm** invent seed |
| Context | real-data §B · SUBMIT-VALIDATE |
| Demo | N/A |
| data-import | N/A |
| Migration | none |

#### API-06: GET `api/v1/integration/users?search=` (Delta *)
| | |
|--|--|
| Purpose | SearchInput assignee · WS `AppUsersController` Live |
| BFF | Mobile.Bff **must forward** `integration/users` (catch-all allow **or** explicit forward) · verify 200 · **cấm** invent WS · **cấm** ERP UserSearchInput nguyên · **cấm** web-bff |
| Permission | integration users read (peer) |
| Request | `search` |
| Response | `{ value/code, label/name }[]` → AssigneeCode* |
| Form surfaces | NT-06 assignee |
| Errors | empty/503 → miss=`--` · toast retry · **cấm** mock SSOT |
| Context | real-data §B · SUBMIT-VALIDATE |
| Demo | N/A |
| data-import | N/A |
| Migration | none |

## 3. BFF vs API

| Layer | Role for NT |
|-------|-------------|
| Mobile.Bff `:5202` | sole FE entry · `MobileApiProxyController` catch-all `{**path}` → `api/v1/{path}` · auth/files rewrite · **+ ensure `integration/users` forward Live** · **cấm** dedicated NT BFF controller |
| RMMS.Service.Api | Patrol `NghiemThuController` · Integration users + road-routes — **reuse** |
| Patrol web-bff | peer desktop only · **not** Mobile client base |
| FileService | `files/*` via Mobile.Bff rewrite |

→ **UNCLEAR-USERS-BFF** = **resolved** (forward required · no invent). Prior **UNCLEAR-BFF-PROXY** keep resolved.

## 4. Entity / migration

| Item | Decision |
|------|----------|
| Tables | **reuse** `rmms_nghiem_thu` (+ scores child) |
| EF migration | **skip** @ SA · none this Delta |
| Step 4b | **skip** @ SA |
| DELETE | OUT P1 FE |

## 5. Implement gates (autoApprove)

| Gate | Decision |
|------|----------|
| `sa_tz_gate` | **N/A** — no new datetime write surface beyond peer NTP; list `search` text only |
| `sa_xco_gate` | **N/A** — single-tenant X-Company-Id keep · no cross-company view Delta |
| `sa_shared_table` | **tenant_keep** — reuse `rmms_nghiem_thu` · no shared-table A/B/C change |

## 6. FE surface (SA contract — Dev implements)

| Zone | Contract |
|------|----------|
| NT-00…11 | keep shell · Delta form only |
| Pattern B * | CTA always-on except `saving` · banner `string[]` · **cấm** `disabled={!canSave}` · **cấm** `alert.warning` |
| SearchInput * | route + assignee · MFE pattern · **cấm** ERP UserSearchInput nguyên |
| Route seed | Dev remove `ROAD_ROUTE_SEED` / filterSeed / QL.22 (peer impact) |
| FILTER P1 | `search` only |
| DELETE | OUT P1 |
| DES-GRID / LinErpListFilterBar | **N/A** |
| DES-LEAVE | in-app discard |
| STD-ROUTE | `/nghiem-thu/moi` · native `/field/nghiem-thu*` alias |
| align | cuối `/align-mobile-to-mfe` · no new tab/route/icon · no android/ios edit |

## 7. Risks / open

| ID | Status |
|----|--------|
| UNCLEAR-USERS-BFF | **resolved** — Mobile.Bff forward `integration/users` · Dev verify 200 |
| UNCLEAR-ROUTE-SEED | **open → Dev** — remove ROAD_ROUTE_SEED/filterSeed/QL.22 (peer) |
| UNCLEAR-SEARCHINPUT-PKG | **open → Dev** — MFE SearchInput · cấm ERP nguyên |
| DOMAIN-MAP-NT · BFF-PROXY · FILTER · DELETE · STD-ROUTE | **resolved** keep (`/nghiem-thu/moi`) |

## 8. Handoff

| Next | Need |
|------|------|
| team_lead | Delta tasks only: Pattern B CTA/banner · SearchInput route/users · BFF users forward verify · remove route seed · capture=environment · cite T-W3-08 + SUBMIT-VALIDATE · keep list/create/detail/MAU-10/GPS |
| devSlash | `/agent-dev` |
| qa | queued `/agent-qa*` — submit always-on · banner · users/routes 200 · capture · GPS deny · phone 430 |

## Version meta

`skillVersion=2026.09.05.03` · `contentHash=sha256:b8f3ce70ff3e80073c39d2dac6a01d2fed2e98232877ef6979881eef8e37acb4` · `changeScope=edit_page` · `solution_confirm=approve` · `writtenAt=2026-09-27T15:15:00.000Z`
