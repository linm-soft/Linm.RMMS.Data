# Design — web-rmms-ops

| Field | Value |
|-------|-------|
| feature | `web-rmms-ops` |
| title | Thông báo inbox |
| this role | `design` · `/agent-design` |
| status | `confirmed` (autoApprove=ON) |
| design_confirm | **approve** (`task_0a112c4e`) |
| changeScope | `new_page` |
| packKind | **`list`** (PO · UI = **phone inbox** · **≠** Kind B desktop) |
| lane | `web` |
| stack | `web_mfe_phone` · `Linm.Web.RMMS.Mobile` · `max-width: 430px` |
| formPattern | Mobile **inbox list / full** · **không** ERP Modal/Slideout Kind B · **không** master compose |
| DES-GRID / LinErpListFilterBar | **N/A** — phone inbox · **cấm** clone · filter UI P1 **không** |
| Report AC / DES-RPT | **N/A** |
| shared_grid_example | **N/A** (phone) |
| real_view_parity | **v1** |
| peerStdUrl | `http://localhost:9301/web-rmms-ops` |
| mfeStdUrl | `http://localhost:9301/web-rmms-ops` |
| mfeStdRoute | `/web-rmms-ops` |
| reviewUrl | `file:///D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-ops/ui/prototype/index.html` |
| demo | **N/A** · hash skip · **cấm** re-scan (**GAP-DES-DEMO-RESCAN-01**) |
| mfe | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Mobile` |
| beRepo | `D:/AI-QLBD/Linm.RMMS.WebService` · Notification · Mobile.Bff `:5202` · **cấm ERP.*** |
| controlHint | `specs/_data-analy/features/web-rmms-ops-control-hint.md` |
| realData | `specs/_data-analy/features/web-rmms-ops-real-data.md` · §A+§B PASS |
| prior | PO `confirmed` · `handoff/po-compact.md` · contentHash `sha256:6f74282b807da7f2cc1aa57ac64848cd1d75ff3383c0f432eaad7bea53fff80e` |
| autoApprove | **ON** |
| e2eQa | ON queued `/agent-qa*` · **cấm** e2e / `yarn start:std` ở Design |
| `devSlash` | `/agent-dev` |
| updatedAt | `2026-09-25T12:40:00.000Z` |
| taskId | `task_0a112c4e` |
| skillId | `agent-design` |
| skillVersion | `2026.09.05.03` |
| schemaVersion | `1` |
| workflowVersion | `2026.09.19.02` |
| rulesVersion | `2026.09.25.2` |
| versionGate | `ok` |
| contentHash | `sha256:6f74282b807da7f2cc1aa57ac64848cd1d75ff3383c0f432eaad7bea53fff80e` |

**Cấm:** Dev/BE trước confirm (đã autoApprove) · ERP.* · iOS/Android native dual · Kind B DES-GRID · `LinErpListFilterBar` · invent `me*` / feedback / cam-view / compose CRUD · detail page P1 · fake GPS · hardcode label keys ngoài `useFormOptions` · native `alert`/`confirm` · re-scan demo · `yarn build` / e2e / start:std ở role này.

## 0. Context / Demo

| ID | Path | Notes |
|----|------|-------|
| CTX-01 | `docs/context/features/web-rmms-ops.md` | feature ops inbox |
| CTX-02 | `docs/plan/web-rmms-mobile/SCREENS.md` | `/ops` · GPS: không |
| CTX-03 | `docs/plan/web-rmms-mobile/PLAN.md` | OpsView · slug `ops` |
| CTX-04 | peer Home/shell | badge → `/ops` · back → Home |
| DEM | — | **N/A** · hash skip |
| DA-01 / DA-02 | `_data-analy/features/web-rmms-ops-{control-hint,real-data}.md` | inventory + §B |
| PO | `po/requirement.md` | AC-L-01…08 · DoD |
| tokens | `docs/mobile-tokens.json` | primary `#0C84C0` · phone 430 |

## 1. Pattern & ownership

| | |
|--|--|
| Frame | Phone **430px** · tokens primary `#0C84C0` · label **13** · field **≥16** (**GAP-TYP-01**) |
| Ops owns | **OP-00…05** inbox content + chrome (back/title/refresh) |
| Peer | **OP-06** notify badge = Home/shell (`GET overview`) · **không** own badge UI trên ops |
| DES-LEAVE | **N/A** — không form dirty |
| Out | `/me*` · feedback · cam-view · Field deep · journal/kết ca/tồn tại/tần suất (b–e) · desktop Kind B compose/KPI · filter bar · detail page P1 |

## 2. Screens / zones

| Zone | Route | Surface | Wire |
|------|-------|---------|------|
| **OP-00** | phone | Frame | max-width 430 · center desktop review · Android 1-1 |
| **OP-01** | `/ops` list | Full | inboxList · `GET notification/inbox` page=1 pageSize=50 |
| **OP-02** | row | Row | title · sentAt · unread badge · opt priority/type RO |
| **OP-03** | mark-read | Action | tap **unread** row → `POST …/mark-read` · **không** navigate detail |
| **OP-04** | empty | Static | 0 items · copy `ops.inbox.empty` |
| **OP-05** | chrome | Header | back → Home · title · refresh reload |
| **OP-06** | badge peer | Number RO | overview — **Home/shell only** |

### IA

```
(auth) → OP-00 + OP-05 chrome + OP-01 list (OP-02 rows)
  unread row tap → OP-03 POST mark-read · stay on list
  read row tap → no-op / soft toast · no detail P1
  empty [] → OP-04
  refresh → reload GET inbox
  back → stack Home
(guest) → shell login gate (AC-L-06) · không silent empty
badge unread → peer Home HM-05 → /ops
```

## 3. Field inventory (Control = controlHint)

| uiField | screen | controlHint | Required | Bind / notes |
|---------|--------|-------------|----------|--------------|
| phoneFrame | OP-00 | Layout | * | max-width 430 · center review |
| inbox.items | OP-01 | List | * | `GET notification/inbox` |
| item.title | OP-02 | Text RO | * | copy `ops.inbox.row.title` |
| item.sentAt | OP-02 | Text RO | * | `ops.inbox.row.sentAt` |
| item.unread | OP-02 | Badge/State | * | unread vs read |
| item.priority | OP-02 | Text RO | opt | LOOKUP_STATIC |
| item.type | OP-02 | Text RO | opt | LOOKUP_STATIC |
| action.markRead | OP-03 | Button/Action | * | `POST notification/inbox/{id}/mark-read` |
| empty.state | OP-04 | Static | empty | `ops.inbox.empty` |
| chrome.back | OP-05 | Button/Nav | * | stack → Home |
| chrome.title | OP-05 | Static | * | `ops.inbox.title` |
| chrome.refresh | OP-05 | Button | * | reload inbox |
| notify.unread | OP-06 | Number RO | peer | `GET notification/overview` · Home |

**Labels:** `useFormOptions()` / copy keys — prototype hiện nhãn VN để review; Dev wire key.  
**GPS:** `/ops` **không** capture · deep = peer · deny → disable coords · **cấm** fake.  
**Filter:** API query sẵn — **không** UI filter P1.  
**REMOVED:** me / me-profile / me-settings / feedback / cam-view · desktop compose.

## 4. Prototype (REQUIRED)

| | |
|--|--|
| Artifact | `ui/prototype/index.html` |
| Zones | OP-00 · OP-01 · OP-02 · OP-03 · OP-04 · OP-05 · (OP-06 cite peer) |
| Form | **none** master |
| Grid/filter desktop | **N/A** |
| SSOT | `design-prototype-review` · `design-real-view-parity` · control-hint · mobile-tokens |
| **reviewUrl** | `file:///D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-ops/ui/prototype/index.html` |
| **peerStdUrl** | `http://localhost:9301/web-rmms-ops` |
| **real_view_parity** | `v1` |

### Wire

```
OP-00: phoneFrame 430
OP-05: [‹ back] title Thông báo [↻ refresh]
OP-01: list rows (title · time · unread dot · priority/type pills)
OP-03: tap unread → mark-read toast · unread→read · stay list
OP-04: board Empty · copy empty
Board: List | Empty | Error toast (503 · cấm alert)
OP-06: cite only — badge on Home
```

## 5. API map (cite real-data §B)

| Action | API |
|--------|-----|
| Inbox list | `GET mobile-bff/api/v1/notification/inbox?page=1&pageSize=50` |
| Mark-read | `POST mobile-bff/api/v1/notification/inbox/{id}/mark-read` |
| Notify badge | `GET mobile-bff/api/v1/notification/overview` · **peer Home** |
| Back | nav Home only |

**BFF:** Mobile.Bff `:5202` · `mobile-bff/api/v1` · **cấm** Web BFF base client · **cấm ERP.***  
Empty `[]` → OP-04 · error/503 → toast in-app · **cấm** `window.alert`.  
**Cấm** invent compose POST/PUT/DELETE · invent detail GET P1.

## 6. List AC map (PO → Design)

| AC | Design cover |
|----|--------------|
| AC-L-01 | OP-00+01 Live inbox · phone 430 |
| AC-L-02 | OP-03 mark-read · no detail |
| AC-L-03 | OP-04 empty |
| AC-L-04 | OP-05 refresh |
| AC-L-05 | OP-05 back → Home |
| AC-L-06 | guest → shell login (cite) |
| AC-L-07 | toast · no alert |
| AC-L-08 | no filter / DES-GRID N/A |

## 7. DES checklist

| ID | Result |
|----|--------|
| DES-A zones OP-* | **PASS** |
| DES-B control = controlHint | **PASS** |
| DES-C prototype + reviewUrl | **PASS** |
| DES-D Leave dirty | **N/A** (no form) |
| DES-GRID / DES-RPT | **N/A** phone inbox |
| real_view_parity | **v1** |
| Row tap = mark-read only P1 | **PASS** (PO closed UNCLEAR-OPS-DETAIL) |

## 8. UNCLEAR (carry)

| id | Action |
|----|--------|
| UNCLEAR-DOMAIN-MAP-OPS | SA thêm DOMAIN-MAP row `web-rmms-ops` · Notification · Mobile MFE |
| UNCLEAR-STD-PORT | **resolved PO** · follow STATUS `:9301` |
| UNCLEAR-OPS-DESKTOP-SCOPE | **resolved PO** · desktop Kind B out |
| UNCLEAR-OPS-DETAIL | **resolved PO** · no detail P1 |

## 9. Handoff

| Role | Need |
|------|------|
| SA | DOMAIN-MAP row · Mobile.Bff paths confirm |
| TL | Tasks `/ops` page + mark-read · cite T-W2-01 |
| Dev | `/agent-dev` · MFE Mobile ops only · badge = peer |
| QA | List · mark-read · empty · phone 430 · no me · no GPS · e2e queued |

## Version meta

`skillVersion=2026.09.05.03` · `schemaVersion=1` · `contentHash=sha256:6f74282b807da7f2cc1aa57ac64848cd1d75ff3383c0f432eaad7bea53fff80e` · `rulesVersion=2026.09.25.2` · `updatedAt=2026-09-25T12:40:00.000Z` · `design_confirm=approve` · `taskId=task_0a112c4e`
