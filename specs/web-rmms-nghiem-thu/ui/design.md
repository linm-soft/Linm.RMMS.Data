# Design — web-rmms-nghiem-thu

| Field | Value |
|-------|-------|
| feature | `web-rmms-nghiem-thu` |
| title | Nghiệm thu — list, tạo, chi tiết |
| this role | `design` · `/agent-design` |
| status | `confirmed` (autoApprove=ON) |
| design_confirm | **approve** (`task_a6360175`) |
| changeScope | `new_page` |
| packKind | **`list`** (PO · UI = **phone list + full create/detail** · **≠** Kind B desktop) |
| lane | `web` |
| stack | `web_mfe_phone` · `Linm.Web.RMMS.Mobile` · `max-width: 430px` |
| formPattern | Mobile list + full create/detail ≤430 · **không** ERP Modal/Slideout Kind B · master = no demo · `/erp-form-context` labels |
| DES-GRID / LinErpListFilterBar | **N/A** — phone list · **cấm** clone |
| Report AC / DES-RPT | **N/A** |
| shared_grid_example | **N/A** (phone) |
| real_view_parity | **v1** |
| peerStdUrl | `http://localhost:9301/web-rmms-nghiem-thu` |
| mfeStdUrl | `http://localhost:9301/web-rmms-nghiem-thu` |
| mfeStdRoute | `/web-rmms-nghiem-thu` |
| nativeRouteCite | SCREENS `/field/nghiem-thu` · `/new` · `/:id` · Android NghiemThu* 1-1 |
| reviewUrl | `file:///D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-nghiem-thu/ui/prototype/index.html` |
| demo | **N/A** · hash skip · **cấm** re-scan (**GAP-DES-DEMO-RESCAN-01**) |
| mfe | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Mobile` |
| beRepo | `D:/AI-QLBD/Linm.RMMS.WebService` · Patrol · `nghiem-thu` · Mobile.Bff `:5202` · **cấm ERP.*** |
| controlHint | `specs/_data-analy/features/web-rmms-nghiem-thu-control-hint.md` |
| realData | `specs/_data-analy/features/web-rmms-nghiem-thu-real-data.md` · §A+§B PASS |
| prior | PO `confirmed` · `handoff/po-compact.md` · contentHash `sha256:6f74282b807da7f2cc1aa57ac64848cd1d75ff3383c0f432eaad7bea53fff80e` |
| autoApprove | **ON** |
| e2eQa | ON queued `/agent-qa*` · **cấm** e2e / `yarn start:std` ở Design |
| `devSlash` | `/agent-dev` |
| updatedAt | `2026-09-25T16:20:00.000Z` |
| taskId | `task_a6360175` |
| skillId | `agent-design` |
| skillVersion | `2026.09.05.03` |
| schemaVersion | `1` |
| workflowVersion | `2026.09.19.02` |
| rulesVersion | `2026.09.25.2` |
| versionGate | `ok` |
| contentHash | `sha256:6f74282b807da7f2cc1aa57ac64848cd1d75ff3383c0f432eaad7bea53fff80e` |

**Cấm:** Dev/BE trước confirm (đã autoApprove) · ERP.* · iOS/Android native edit · Kind B DES-GRID · `LinErpListFilterBar` · invent path/entity · fake GPS · hardcode VN form labels (Dev wire `useFormOptions` / `nghiemThu.*`) · «Mẫu nghiệm thu NN» · native `alert`/`confirm` · re-scan demo · `yarn build` / e2e / start:std · gộp tuần đường / tuần kiểm / mnt · DELETE P1 · desktop Field.

## 0. Context / Demo

| ID | Path | Notes |
|----|------|-------|
| CTX-01 | `docs/context/features/web-rmms-nghiem-thu.md` | feature NT mobile web |
| CTX-02 | `docs/plan/web-rmms-mobile/SCREENS.md` | `/field/nghiem-thu*` |
| CTX-03 | `docs/plan/nghiem-thu-mau/MAU-10.md` | mau-01…10 labels |
| CTX-04 | peer `nghiem-thu` · create · detail | cite · Android 1-1 |
| DEM | — | **N/A** · hash skip |
| DA-01 / DA-02 | `_data-analy/features/web-rmms-nghiem-thu-{control-hint,real-data}.md` | inventory + §B |
| PO | `po/requirement.md` | FILTER search P1 · DELETE OUT · STD-ROUTE dual |
| tokens | `docs/mobile-tokens.json` | primary `#0C84C0` · phone 430 |

## 1. Pattern & ownership

| | |
|--|--|
| Frame | Phone **430px** · tokens primary `#0C84C0` · label **13** · field **≥16** (**GAP-TYP-01**) · Android icon/layout **1-1** |
| NT owns | **NT-00…11** · list · search · create · detail · GPS · media · scores · Field hub entry |
| Peer owns | Field hub · tuần đường / tuần kiểm / mnt · shell TabBar · desktop Field |
| DES-LEAVE | dirty create/detail → in-app discard confirm → list (**cấm** native `confirm`) |
| FILTER P1 | search only · status/route/date/templateType **OUT** (no stub chips) |
| DELETE | **OUT P1** |
| STD-ROUTE | `mfeStdRoute=/web-rmms-nghiem-thu` (STATUS) · native cite `/field/nghiem-thu*` |
| Out | invent API · ERP.* · demo SSOT · dual native edit · DES-GRID |

## 2. Screens / zones

| Zone | Route | Surface | Wire |
|------|-------|---------|------|
| **NT-00** | phone | Frame | max-width 430 · center desktop review · Android 1-1 |
| **NT-01** | `/field/nghiem-thu` · std `/web-rmms-nghiem-thu` | List | `GET patrol/nghiem-thu` page=1 pageSize=50 |
| **NT-02** | list chrome | Header | navBack → Field hub · title · **Tạo** → new |
| **NT-03** | search | Text/Search | query `search` only P1 |
| **NT-04** | empty | Static | 0 items · `nghiemThu.list.empty` |
| **NT-05** | row | Icon/Badge/Nav | Check success · Status · ResultCode · tap → `/:id` |
| **NT-06** | `/field/nghiem-thu/new` | Create | POST draft · init-data |
| **NT-07** | `/field/nghiem-thu/:id` | Detail | GET + PUT |
| **NT-08** | GPS | Action | geolocation → FieldInfo/ZoneOrgCode · deny = no fake |
| **NT-09** | media | PhotoRow | MediaIds ≤10 · `files/*` |
| **NT-10** | result/scores | Select/Checklist | pass/fail/deduct · Scores[] init-data |
| **NT-11** | Field hub | Entry | quick action · **no** new tab |

### IA

```
(auth staff) → NT-11 Field hub quick action
  → NT-00+NT-01 list (NT-02 chrome · NT-03 search · NT-04 empty | NT-05 rows)
  → NT-06 create (init-data · NT-08 GPS · NT-09 media · NT-10 scores) → POST draft → list
  → NT-07 detail (GET) → edit PUT → list
(guest) → shell login · không silent empty
GPS deny → skip FieldInfo/ZoneOrgCode fill · không bịa · save draft vẫn OK (list không bắt GPS)
Leave dirty → in-app confirm → list
```

## 3. Field inventory (Control = controlHint)

| uiField | screen | controlHint | Required | Bind / notes |
|---------|--------|-------------|----------|--------------|
| phoneFrame | NT-00 | Layout | * | max-width 430 |
| listItems | NT-01 | List | * | `GET patrol/nghiem-thu` |
| navBack | NT-02 | Button/Nav | * | → Field hub |
| titleBar | NT-02 | Static | * | `nghiemThu.list.title` |
| btnCreate | NT-02 | Button/Nav | * | → new |
| search | NT-03 | Text/Search | opt | query `search` · P1 only |
| emptyState | NT-04 | Static | — | `nghiemThu.list.empty` |
| rowIcon | NT-05 | Icon | * | `LinmStrokeKind.Check` · bg success |
| rowStatus | NT-05 | Badge | * | draft/in_progress/done/cancelled |
| rowResult | NT-05 | Badge | opt | pass/fail/deduct · ẩn null |
| rowTap | NT-05 | Nav | * | → `/:id` |
| templateType | NT-06/07 | Select | * | init-data mau-01…10 · **MAU-10 label** |
| route | NT-06/07 | Text/Select | * | Route* |
| fieldInfo | NT-06/07 | Text | opt/GPS | FieldInfo* |
| zoneOrgCode | NT-06/07 | Text RO | opt/GPS | ZoneOrgCode |
| kmFrom/kmTo | NT-06/07 | Number | opt | KmFrom/KmTo |
| resultCode | NT-06/07 | Select | * when done | pass/fail/deduct |
| resultNote | NT-06/07 | Text | opt | ResultNote |
| scores | NT-10 | Checklist | opt | Scores[] replace-all |
| mediaIds | NT-09 | PhotoRow | opt | guid[] max 10 · files/* |
| status | NT-06/07 | Select/State | * | draft on Lưu nháp |
| assigneeCode | NT-06/07 | Text RO | * | profile |
| inspectedAt | NT-06/07 | DateTime | * | now UTC create |
| note | NT-06/07 | Text | opt | Note |
| gpsCapture | NT-08 | Action | opt | geolocation · deny → no fake |
| saveDraft | NT-06 | Button | * | POST Status=draft |
| saveEdit | NT-07 | Button | * | PUT |
| cancel | NT-06/07 | Button/Nav | * | → list |

**Labels:** `useFormOptions()` / `nghiemThu.*` — prototype hiện nhãn nghiệp vụ VN để review; Dev wire key.  
**MAU:** init-data / MAU-10 — **cấm** «Mẫu nghiệm thu NN».  
**GPS:** create/detail only · deny = no fake · **cấm** Lat field riêng trên DTO.

## 4. Prototype (REQUIRED)

| | |
|--|--|
| Artifact | `ui/prototype/index.html` |
| Zones | NT-00 · NT-01 · NT-02 · NT-03 · NT-04 · NT-05 · NT-06 · NT-07 · NT-08 · NT-09 · NT-10 · NT-11 |
| Form | Mobile list + create/detail · search P1 · GPS · media ≤10 · scores |
| Grid/filter desktop | **N/A** |
| SSOT | `design-prototype-review` · control-hint · mobile-tokens · Android 1-1 |
| **reviewUrl** | `file:///D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-nghiem-thu/ui/prototype/index.html` |
| **peerStdUrl** | `http://localhost:9301/web-rmms-nghiem-thu` |
| **real_view_parity** | `v1` |

### Wire

```
Board List: NT-00…05 · Check rows · search · Tạo
Board Empty: NT-04
Board Create GPS OK: NT-06 · NT-08 filled · NT-09 · NT-10 · Lưu nháp
Board Create GPS deny: NT-08 warn · no fake coords · save still enabled
Board Detail: NT-07 · PUT
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
| Files | `files/*` · MediaIds ≤10 |
| GPS | `navigator.geolocation` → FieldInfo/ZoneOrgCode |
| DELETE | **OUT P1** |

**BFF:** Mobile.Bff `:5202` · `mobile-bff/api/v1` · **cấm** Web BFF base client · **cấm ERP.***  
Empty list → NT-04 · error/503 → toast in-app · **cấm** `window.alert`.  
**Cấm** invent path/entity.

## 6. DES checklist

| ID | Result |
|----|--------|
| DES-A zones NT-00…11 | **PASS** |
| DES-B control = controlHint | **PASS** |
| DES-C prototype + reviewUrl | **PASS** |
| DES-D Leave dirty | **PASS** (in-app · no native) |
| DES-GRID / DES-RPT | **N/A** phone list |
| FILTER P1 search only | **PASS** |
| DELETE OUT P1 | **PASS** |
| real_view_parity | **v1** |
| Android 1-1 Check row / MAU-10 | **PASS** |

## 7. UNCLEAR (carry)

| id | Action |
|----|--------|
| UNCLEAR-DOMAIN-MAP-NT | SA thêm DOMAIN-MAP row `web-rmms-nghiem-thu` · Patrol |
| UNCLEAR-BFF-PROXY | SA confirm Mobile.Bff proxy `patrol/nghiem-thu` · **cấm invent** |
| UNCLEAR-FILTER-UI | **RESOLVED (PO+Design)** → search only P1 |
| UNCLEAR-DELETE | **RESOLVED (PO)** → OUT P1 |
| UNCLEAR-STD-ROUTE | **RESOLVED (Design)** → `mfeStdRoute=/web-rmms-nghiem-thu` + SCREENS `/field/nghiem-thu*` |

## 8. Handoff

| Role | Need |
|------|------|
| SA | DOMAIN-MAP row · Mobile.Bff proxy · **cấm** invent |
| TL | Tasks list/create/detail · search · GPS · media · scores · T-W3-08 |
| Dev | `/agent-dev` · MFE Mobile NT only · Field hub entry · reuse API |
| QA | List/search/empty · create draft · detail PUT · GPS deny · phone 430 · e2e queued |

## Version meta

`skillVersion=2026.09.05.03` · `schemaVersion=1` · `contentHash=sha256:6f74282b807da7f2cc1aa57ac64848cd1d75ff3383c0f432eaad7bea53fff80e` · `rulesVersion=2026.09.25.2` · `updatedAt=2026-09-25T16:20:00.000Z` · `design_confirm=approve` · `taskId=task_a6360175`
