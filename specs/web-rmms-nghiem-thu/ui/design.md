# Design — web-rmms-nghiem-thu

| Field | Value |
|-------|-------|
| feature | `web-rmms-nghiem-thu` |
| title | Nghiệm thu — Pattern B submit + SearchInput (edit_page) |
| this role | `design` · `/agent-design` |
| status | `confirmed` (autoApprove=ON) |
| design_confirm | **approve** (`task_c6a6da70`) |
| changeScope | `edit_page` |
| packKind | **`list`** (phone list + full create/detail · **≠** Kind B desktop) |
| lane | `web` |
| stack | `web_mfe_phone` · `Linm.Web.RMMS.Mobile` · `max-width: 430px` |
| formPattern | Mobile list + create/detail ≤430 · Pattern B validate · **không** ERP Modal/Slideout · master = no demo · `/erp-form-context` |
| DES-GRID / LinErpListFilterBar | **N/A** — phone list · **cấm** clone |
| Report AC / DES-RPT | **N/A** |
| shared_grid_example | **N/A** (phone) |
| real_view_parity | **v1** |
| peerStdUrl | `http://localhost:9301/nghiem-thu/moi` |
| mfeStdUrl | `http://localhost:9301/nghiem-thu/moi` |
| mfeStdRoute | `/nghiem-thu/moi` |
| nativeRouteCite | SCREENS `/field/nghiem-thu` · `/new` · `/:id` · alias → `/nghiem-thu*` · Android NghiemThu* 1-1 |
| reviewUrl | `file:///D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-nghiem-thu/ui/prototype/index.html` |
| demo | **N/A** · hash skip · **cấm** re-scan (**GAP-DES-DEMO-RESCAN-01**) |
| citeDelta | `docs/plan/web-rmms-mobile/SUBMIT-VALIDATE.md` · `NghiemThuFormPage.tsx` |
| mfe | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Mobile` |
| beRepo | `D:/AI-QLBD/Linm.RMMS.WebService` · Patrol · `nghiem-thu` · Mobile.Bff `:5202` · **cấm ERP.*** |
| controlHint | `specs/_data-analy/features/web-rmms-nghiem-thu-control-hint.md` |
| realData | `specs/_data-analy/features/web-rmms-nghiem-thu-real-data.md` · §A+§B PASS |
| prior | PO `confirmed` · `handoff/po-compact.md` · contentHash `sha256:b8f3ce70ff3e80073c39d2dac6a01d2fed2e98232877ef6979881eef8e37acb4` |
| keep | prior prototype shell NT-00…11 · Delta form only |
| autoApprove | **ON** |
| e2eQa | ON queued `/agent-qa*` · **cấm** e2e / `yarn start:std` ở Design |
| `devSlash` | `/agent-dev` |
| updatedAt | `2026-09-27T15:10:00.000Z` |
| taskId | `task_c6a6da70` |
| skillId | `agent-design` |
| skillVersion | `2026.09.05.03` |
| schemaVersion | `1` |
| workflowVersion | `2026.09.19.02` |
| rulesVersion | `2026.09.25.2` |
| versionGate | `ok` |
| contentHash | `sha256:b8f3ce70ff3e80073c39d2dac6a01d2fed2e98232877ef6979881eef8e37acb4` |

**Cấm:** Dev/BE trước confirm (đã autoApprove) · ERP.* · iOS/Android native edit · Kind B DES-GRID · `LinErpListFilterBar` · invent path/entity · fake GPS · hardcode VN form labels (Dev wire `useFormOptions` / `nghiemThu.*`) · «Mẫu nghiệm thu NN» · native `alert`/`confirm` · `alert.warning` thay banner · `disabled={!canSave}` · re-scan demo · `yarn build` / e2e / start:std · gộp tuần đường / tuần kiểm / mnt · DELETE P1 · desktop Field · ERP UserSearchInput nguyên · ROAD_ROUTE_SEED · web-bff client base · typed CRUD `new_page`.

## 0. Context / Demo

| ID | Path | Notes |
|----|------|-------|
| CTX-01 | `docs/context/features/web-rmms-nghiem-thu.md` | hash `b8f3ce70…` |
| CTX-02 | `docs/plan/web-rmms-mobile/SUBMIT-VALIDATE.md` | **Delta SSOT** Pattern B + SearchInput |
| CTX-03 | `docs/plan/web-rmms-mobile/SCREENS.md` | `/field/nghiem-thu*` |
| CTX-04 | `docs/plan/nghiem-thu-mau/MAU-10.md` | mau-01…10 |
| DEM | — | **N/A** · hash skip · **cấm** rescan |
| DA-01 / DA-02 | `_data-analy/features/web-rmms-nghiem-thu-{control-hint,real-data}.md` | inventory + §B Delta * |
| PO | `po/requirement.md` · `handoff/po-compact.md` | edit_page Delta confirmed |
| tokens | `docs/mobile-tokens.json` | primary `#0C84C0` · phone 430 |

## 1. Pattern & ownership

| | |
|--|--|
| Frame | Phone **430px** · tokens primary `#0C84C0` · label **13** · field **≥16** (**GAP-TYP-01**) · Android icon/layout **1-1** |
| NT owns | **NT-00…11** shell keep · Delta form on NT-06/07 |
| Peer owns | Field hub · tuần đường / tuần kiểm / mnt · shell TabBar · desktop Field |
| Pattern B | CTA always-on trừ `saving` · first-click `validationAttempted` · banner `string[]` + inline · **cấm** `disabled={!canSave}` · **cấm** `alert.warning` |
| SearchInput | route → `road-routes/search` · assignee → `integration/users` · miss=`--` · **cấm** ERP UserSearchInput nguyên · **cấm** seed |
| Media | PhotoRow · `capture="environment"` · MediaIds ≤10 |
| DES-LEAVE | dirty create/detail → in-app discard → list (**cấm** native `confirm`) |
| FILTER P1 | search only · status/route/date/templateType **OUT** |
| DELETE | **OUT P1** |
| STD-ROUTE | `mfeStdRoute=/nghiem-thu/moi` · native cite `/field/nghiem-thu*` alias |
| Out | invent API · ERP.* · demo SSOT · dual native edit · DES-GRID · Excel · `new_page` |

## 2. Screens / zones

| Zone | Route | Surface | Wire |
|------|-------|---------|------|
| **NT-00** | phone | Frame | max-width 430 · Android 1-1 |
| **NT-01** | `/nghiem-thu` · alias `/field/nghiem-thu` | List | `GET patrol/nghiem-thu` page=1 pageSize=50 |
| **NT-02** | list chrome | Header | navBack → Field hub · title · **Tạo** → `/moi` |
| **NT-03** | search | Text/Search | query `search` only P1 |
| **NT-04** | empty | Static | 0 items · `nghiemThu.list.empty` |
| **NT-05** | row | Icon/Badge/Nav | Check success · Status · ResultCode · tap → `/:id` |
| **NT-06** | `/nghiem-thu/moi` | Create | POST draft · **Delta** Pattern B + SearchInput |
| **NT-07** | `/nghiem-thu/:id` | Detail | GET + PUT · same Delta |
| **NT-08** | GPS | Action | geolocation → FieldInfo/ZoneOrgCode · deny = no fake · **cấm** lock CTA |
| **NT-09** | media | PhotoRow | MediaIds ≤10 · `files/*` · **capture=environment** |
| **NT-10** | result/scores | Select/Checklist | pass/fail/deduct · Scores[] |
| **NT-11** | Field hub | Entry | quick action · **no** new tab |

### IA

```
(auth staff) → NT-11 Field hub quick action
  → NT-00+NT-01 list (NT-02 chrome · NT-03 search · NT-04 empty | NT-05 rows)
  → NT-06 create (init-data · SearchInput route/assignee · NT-08 GPS · NT-09 capture · NT-10)
       → click Lưu: Pattern B validate → banner string[] OR POST draft → list
  → NT-07 detail (GET) → edit PUT (same Pattern B) → list
(guest) → shell login · không silent empty
GPS deny → skip FieldInfo/ZoneOrgCode · không bịa · CTA vẫn bật · báo trong banner khi submit
Leave dirty → in-app confirm → list
```

## 3. Field inventory (Control = controlHint)

| uiField | screen | controlHint | Required | Bind / notes |
|---------|--------|-------------|----------|--------------|
| phoneFrame | NT-00 | Layout | * | max-width 430 |
| listItems | NT-01 | List | * | `GET patrol/nghiem-thu` |
| navBack | NT-02 | Button/Nav | * | → Field hub |
| titleBar | NT-02 | Static | * | `nghiemThu.list.title` |
| btnCreate | NT-02 | Button/Nav | * | → `/nghiem-thu/moi` |
| search | NT-03 | Text/Search | opt | query `search` · P1 only |
| emptyState | NT-04 | Static | — | `nghiemThu.list.empty` |
| rowIcon | NT-05 | Icon | * | `LinmStrokeKind.Check` · bg success |
| rowStatus | NT-05 | Badge | * | draft/in_progress/done/cancelled |
| rowResult | NT-05 | Badge | opt | pass/fail/deduct · ẩn null |
| rowTap | NT-05 | Nav | * | → `/:id` |
| templateType | NT-06/07 | Select | * | init-data mau-01…10 · **MAU-10 label** |
| route * | NT-06/07 | **SearchInput** | * | `GET …/integration/road-routes/search` · no seed · miss=`--` |
| fieldInfo | NT-06/07 | Text | * (Pattern B) | FieldInfo* · GPS fill |
| zoneOrgCode | NT-06/07 | Text RO | opt/GPS | ZoneOrgCode |
| kmFrom/kmTo | NT-06/07 | Number | opt | KmFrom/KmTo |
| resultCode | NT-06/07 | Select | * when done | pass/fail/deduct |
| resultNote | NT-06/07 | Text | opt | ResultNote |
| scores | NT-10 | Checklist | opt | Scores[] replace-all |
| mediaIds * | NT-09 | PhotoRow | opt | guid[] max 10 · `capture="environment"` |
| status | NT-06/07 | Select/State | * | draft on Lưu nháp |
| assigneeCode * | NT-06/07 | **Text readonly** | * | `GET patrol/actors` `caller` · khóa sửa · không chọn người khác |
| inspectedAt | NT-06/07 | DateTime | * | now UTC create |
| note | NT-06/07 | Text | opt | Note |
| validationBanner * | NT-06/07 | **Banner** | — | Pattern B · `string[]` · mẫu/tuyến/hiện trường/người thực hiện · first-click |
| gpsCapture | NT-08 | Action | opt | geolocation · deny → no fake · **cấm** pre-lock CTA |
| saveDraft * | NT-06 | Button | * | POST Status=draft · **always-on** trừ `saving` |
| saveEdit * | NT-07 | Button | * | PUT · same Pattern B |
| cancel | NT-06/07 | Button/Nav | * | → list |

**Labels:** `useFormOptions()` / `nghiemThu.*` — prototype hiện nhãn nghiệp vụ VN để review; Dev wire key.  
**MAU:** init-data / MAU-10 — **cấm** «Mẫu nghiệm thu NN».  
**GPS:** create/detail only · deny = no fake · **cấm** Lat field riêng trên DTO · **cấm** khóa nút trước submit.  
**Pattern B msgs (cite):** thiếu mẫu · thiếu tuyến · thiếu hiện trường · thiếu người thực hiện (± GPS deny note).

## 4. Prototype (REQUIRED)

| | |
|--|--|
| Artifact | `ui/prototype/index.html` |
| Zones | NT-00 · NT-01 · NT-02 · NT-03 · NT-04 · NT-05 · NT-06 · NT-07 · NT-08 · NT-09 · NT-10 · NT-11 |
| Form Delta | SearchInput route/assignee · validationBanner · always-on CTA · capture=environment |
| Grid/filter desktop | **N/A** |
| SSOT | control-hint · SUBMIT-VALIDATE · mobile-tokens · Android 1-1 · **keep shell** |
| **reviewUrl** | `file:///D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-nghiem-thu/ui/prototype/index.html` |
| **peerStdUrl** | `http://localhost:9301/nghiem-thu/moi` |
| **real_view_parity** | `v1` |

### Wire

```
Board List: NT-00…05 · Check rows · search · Tạo
Board Empty: NT-04
Board Create GPS OK: NT-06 · SearchInput filled · NT-08 · NT-09 capture · NT-10 · Lưu nháp
Board Create GPS deny: NT-08 warn · no fake · CTA still enabled
Board Create invalid: Pattern B banner string[] · CTA not disabled
Board Detail: NT-07 · SearchInput assignee · PUT
Board Leave dirty: in-app modal · no native confirm
NT-11: cite Field hub entry (meta)
```

## 5. API map (cite real-data §B)

| Action | API |
|--------|-----|
| List | `GET mobile-bff/api/v1/patrol/nghiem-thu` · `?search=` |
| Init | `GET …/patrol/nghiem-thu/init-data` |
| Create | `POST …/patrol/nghiem-thu` · Status=draft |
| Detail | `GET …/patrol/nghiem-thu/{id}` |
| Update | `PUT …/patrol/nghiem-thu/{id}` |
| Files | `files/*` · MediaIds ≤10 · capture |
| Routes * | `GET …/integration/road-routes/search` · **no seed** |
| Users * | `GET …/integration/users?search=` · BFF forward (SA/Dev) |
| GPS | `navigator.geolocation` → FieldInfo/ZoneOrgCode |
| DELETE | **OUT P1** |

**BFF:** Mobile.Bff `:5202` · `mobile-bff/api/v1` · `mobileApiBase()` · **cấm** Web BFF base · **cấm ERP.***  
Empty list → NT-04 · error/503 → toast in-app · **cấm** `window.alert` · **cấm** `alert.warning` thay banner.  
**Cấm** invent path/entity.

## 6. DES checklist

| ID | Result |
|----|--------|
| DES-A zones NT-00…11 | **PASS** (keep shell) |
| DES-B control = controlHint | **PASS** · Delta * SearchInput/Banner/CTA/capture |
| DES-C prototype + reviewUrl | **PASS** |
| DES-D Leave dirty | **PASS** (in-app · no native) |
| DES-GRID / DES-RPT | **N/A** phone list |
| FILTER P1 search only | **PASS** |
| DELETE OUT P1 | **PASS** |
| Pattern B always-on CTA | **PASS** |
| SearchInput route+assignee | **PASS** |
| capture=environment | **PASS** |
| real_view_parity | **v1** |
| Android 1-1 Check row / MAU-10 | **PASS** |
| STD-ROUTE `/nghiem-thu/moi` | **PASS** |

## 7. UNCLEAR (carry)

| id | Action |
|----|--------|
| UNCLEAR-USERS-BFF | SA/Dev forward `GET integration/users` on Mobile.Bff · **cấm invent** |
| UNCLEAR-ROUTE-SEED | Dev remove ROAD_ROUTE_SEED/filterSeed/QL.22 (peer impact) |
| UNCLEAR-SEARCHINPUT-PKG | Dev reuse MFE SearchInput pattern · **cấm** ERP UserSearchInput nguyên |
| UNCLEAR-DOMAIN-MAP-NT | **RESOLVED (prior SA)** — keep |
| UNCLEAR-BFF-PROXY | **RESOLVED (prior SA)** — keep |
| UNCLEAR-FILTER-UI | **RESOLVED** → search only P1 |
| UNCLEAR-DELETE | **RESOLVED** → OUT P1 |
| UNCLEAR-STD-ROUTE | **RESOLVED** → `mfeStdRoute=/nghiem-thu/moi` + alias `/field/nghiem-thu*` |

## 8. Handoff

| Role | Need |
|------|------|
| SA | Confirm users BFF forward · road-routes already · **cấm** invent · **cấm** ERP.* |
| TL | Delta tasks Pattern B · SearchInput · capture · cite T-W3-08 + SUBMIT-VALIDATE |
| Dev | `/agent-dev` · `NghiemThuFormPage.tsx` Delta only · no seed · align-mobile-to-mfe |
| QA | Pattern B submit · SearchInput 200 · capture · GPS deny no lock · e2e queued |

## Version meta

`skillVersion=2026.09.05.03` · `schemaVersion=1` · `contentHash=sha256:b8f3ce70ff3e80073c39d2dac6a01d2fed2e98232877ef6979881eef8e37acb4` · `rulesVersion=2026.09.25.2` · `updatedAt=2026-09-27T15:10:00.000Z` · `design_confirm=approve` · `taskId=task_c6a6da70` · `changeScope=edit_page`
