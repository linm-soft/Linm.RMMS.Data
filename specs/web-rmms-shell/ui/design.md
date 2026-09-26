# Design — web-rmms-shell

| Field | Value |
|-------|-------|
| feature | `web-rmms-shell` |
| title | Tab bar Home · Field · Incident · Work |
| this role | `design` · `/agent-design` |
| status | `confirmed` (autoApprove=ON) |
| design_confirm | **approve** (`task_e5bde5eb`) |
| changeScope | `new_page` |
| packKind | **`list`** (PO confirm · UI = **phone shell chrome** · **≠** Kind B desktop) |
| lane | `web` |
| stack | `web_mfe_phone` · `Linm.Web.RMMS.Mobile` · `max-width: 430px` |
| formPattern | Mobile **shell / full / sheet** · login **overlay** · **không** ERP Modal/Slideout Kind B |
| DES-GRID / LinErpListFilterBar | **N/A** — phone shell · **cấm** clone |
| Report AC / DES-RPT | **N/A** |
| shared_grid_example | **N/A** (phone) |
| real_view_parity | **v1** |
| peerStdUrl | `http://localhost:9301/web-rmms-shell` |
| mfeStdUrl | `http://localhost:9301/web-rmms-shell` |
| mfeStdRoute | `/web-rmms-shell` |
| reviewUrl | `file:///D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-shell/ui/prototype/index.html` |
| demo | **N/A** · hash skip · **cấm** re-scan (**GAP-DES-DEMO-RESCAN-01**) |
| mfe | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Mobile` |
| beRepo | `D:/AI-QLBD/Linm.RMMS.WebService` · Auth + Notification chrome · deep cite Patrol/Incident/Maintenance/Asset · **cấm ERP.*** |
| controlHint | `specs/_data-analy/features/web-rmms-shell-control-hint.md` |
| realData | `specs/_data-analy/features/web-rmms-shell-real-data.md` · §A+§B PASS |
| prior | PO `confirmed` · `handoff/po-compact.md` · contentHash `sha256:6f74282b807da7f2cc1aa57ac64848cd1d75ff3383c0f432eaad7bea53fff80e` |
| autoApprove | **ON** |
| e2eQa | ON queued `/agent-qa*` · **cấm** e2e / `yarn start:std` ở Design |
| `devSlash` | `/agent-dev` |
| updatedAt | `2026-09-25T11:30:00.000Z` |
| taskId | `task_e5bde5eb` |
| skillId | `agent-design` |
| skillVersion | `2026.09.05.03` |
| schemaVersion | `1` |
| workflowVersion | `2026.09.19.02` |
| rulesVersion | `2026.09.25.2` |
| versionGate | `ok` |
| contentHash | `sha256:6f74282b807da7f2cc1aa57ac64848cd1d75ff3383c0f432eaad7bea53fff80e` |

**Cấm:** Dev/BE trước confirm (đã autoApprove) · ERP.* · iOS/Android native dual · Kind B DES-GRID · `LinErpListFilterBar` · invent `me*` / feedback / cam-view · fake GPS · hardcode label keys ngoài `useFormOptions` · native `alert`/`confirm` · re-scan demo · `yarn build` / e2e / start:std ở role này.

## 0. Context / Demo

| ID | Path | Notes |
|----|------|-------|
| CTX-01 | `docs/context/features/web-rmms-shell.md` | feature P0 |
| CTX-02 | `docs/plan/web-rmms-mobile/SCREENS.md` | Tab / Home / GPS / BFF |
| CTX-03 | `docs/plan/web-rmms-mobile/PLAN.md` | Shell · HARD · Map (bỏ me) |
| CTX-04 | `docs/context/features/web-rmms-mobile-a.md` | peer Field 2 cửa |
| DEM | — | **N/A** · hash skip |
| DA-01 / DA-02 | `_data-analy/features/web-rmms-shell-{control-hint,real-data}.md` | inventory + §B |
| PO | `po/requirement.md` | Screens · Pattern · Leave |
| tokens | `docs/mobile-tokens.json` | color/radius/size |

## 1. Pattern & shell

| | |
|--|--|
| Frame | Phone **430px** · content-only · tokens primary `#0C84C0` · label **13** · field **≥16** (**GAP-TYP-01**) |
| Shell | **SH-00** MobileShell · stack push/pop · **không** ERP `LinPageLayout` catalog chrome |
| TabBar | **SH-01** bottom 4 tabs · icons/layout **1-1 Android** · **cấm** `tab.me` |
| Login | **SH-02** overlay / full · header Hủy · Submit · dirty → **LeaveConfirmModal** |
| Full pages | SH-03 Home · SH-04 Field hub · SH-05/06 tab stubs |
| Leave | **DES-LEAVE** (`LeaveConfirmModal`) · dirty login · **cấm** native dialog |
| Out | `/me*` · feedback · cam-view · journal / findings / close / frequency (b–e) |

## 2. Screens / zones

| Zone | Route | Surface | Wire |
|------|-------|---------|------|
| **SH-00** | shell | Full / stack | phoneFrame ≤430 · stackBack pop |
| **SH-01** | TabBar | Tab/Nav | tabHome · tabField · tabIncident · tabWork · **no** tabMe |
| **SH-02** | `/login` | Overlay / Full | loginUser · loginPass · loginSubmit · Cancel |
| **SH-03** | `/` | Full | guest FAQ + CTA · staff profile + quick + grid · ops badge |
| **SH-04** | `/field` | Full | doorPatrol · doorInspect · syncBtn → peer A / offline |
| **SH-05** | `/incident` | Full / stub | incidentRoot peer list mount |
| **SH-06** | `/work` | Full / stub | workRoot peer list mount |
| **DES-LEAVE** | overlay | Modal | dirty leave login |

### IA

```
(guest) → SH-03 Home → guestLoginCta → SH-02 login
(auth)  → SH-00 shell + SH-01 TabBar
  tab Home     → SH-03 (staff quick + grid)
  tab Field    → SH-04 → doorPatrol|doorInspect → peer web-rmms-mobile-a
  tab Incident → SH-05 stub → peer incident
  tab Work     → SH-06 stub → peer work
stackBack ← pop deep routes (peer owners)
```

## 3. Field inventory (Control = controlHint)

| uiField | screen | controlHint | Required | Bind / notes |
|---------|--------|-------------|----------|--------------|
| phoneFrame | SH-00 | Layout | * | max-width 430 · center desktop review |
| tabHome | SH-01 | Tab/Nav | * | copy `tab.home` · `/` |
| tabField | SH-01 | Tab/Nav | * | `tab.field` · `/field` |
| tabIncident | SH-01 | Tab/Nav | * | `tab.incident` · `/incident` |
| tabWork | SH-01 | Tab/Nav | * | `tab.work` · `/work` |
| tabMe | — | **REMOVED** | — | **cấm** render · 404/hide `me*` |
| stackBack | SH-00 | Button | * | pop AppRouter |
| loginUser | SH-02 | Text | * | account · POST auth/login body |
| loginPass | SH-02 | Password | * | |
| loginSubmit | SH-02 | Button | * | login → refresh · session-window |
| guestFaq | SH-03 | Static | — | copy key |
| guestLoginCta | SH-03 | Button | — | → `/login` |
| qaPatrolPoint | SH-03 | Button/Nav | — | → tab Field |
| qaIncidentNew | SH-03 | Button/Nav | — | → `/incident/new` |
| qaSupervise | SH-03 | Button/Nav | — | → `/supervise` |
| qaPatrolMap | SH-03 | Button/Nav | — | → `/patrol-map` |
| qaWork | SH-03 | Button/Nav | — | → tab Work |
| qaIncident | SH-03 | Button/Nav | — | → tab Incident |
| qaAsset | SH-03 | Button/Nav | — | → `/asset` |
| qaOffline | SH-03 | Button/Nav | — | → `/offline` |
| qaOps | SH-03 | Button/Nav | — | → `/ops` · badge overview |
| profileName | SH-03 | Text RO | staff | `GET auth/profile` |
| doorPatrol | SH-04 | Button/Nav | * | → `/field/tuan-duong` peer A |
| doorInspect | SH-04 | Button/Nav | * | → `/field/tuan-kiem` peer A |
| syncBtn | SH-04 | Button | — | → `/field/offline` / `/offline` |
| incidentRoot | SH-05 | List stub | — | peer Incident · no shell CRUD |
| workRoot | SH-06 | List stub | — | peer Maintenance · no shell CRUD |

**Labels:** `useFormOptions()` / copy keys — prototype hiện nhãn nghiệp vụ VN để review; Dev wire key.  
**GPS:** shell chrome **không** capture · deep = peer · deny → disable coords · **cấm** fake.

## 4. Prototype (REQUIRED)

| | |
|--|--|
| Artifact | `ui/prototype/index.html` |
| Zones | SH-00 · SH-01 · SH-02 · SH-03(guest+staff) · SH-04 · SH-05 · SH-06 · DES-LEAVE |
| Form | Login overlay · LeaveConfirmModal · TabBar 4 |
| Grid/filter desktop | **N/A** |
| SSOT | `design-prototype-review` · `design-real-view-parity` · control-hint · mobile-tokens · **cấm** shared-grid desktop |
| **reviewUrl** | `file:///D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-shell/ui/prototype/index.html` |
| **peerStdUrl** | `http://localhost:9301/web-rmms-shell` |
| **real_view_parity** | `v1` |

### Wire

```
SH-00: phoneFrame 430 · stackBack when deep
SH-01: [Home][Field][Incident][Work] — highlight ActiveTab · no me
SH-02: loginUser · loginPass · [Hủy|Đăng nhập] · dirty → DES-LEAVE
SH-03 guest: FAQ · CTA Đăng nhập
SH-03 staff: profileName · quick CTAs · grid 6+ · ops badge
SH-04: door Tuần đường · door Tuần kiểm · sync
SH-05: stub list Incident (peer)
SH-06: stub list Work (peer)
DES-LEAVE: Ở lại / Rời
```

## 5. API map (cite real-data §B)

| Action | API |
|--------|-----|
| Login | `POST mobile-bff/api/v1/auth/login` |
| Refresh | `POST …/auth/refresh-token` |
| Profile | `GET …/auth/profile` |
| Session window | `GET …/contract-accounts/session-window?authUserId=` |
| Notify badge | `GET …/notification/overview` |
| Field doors | nav only · optional `GET …/patrol/sessions` badge peer A |
| Incident / Work roots | peer list APIs · shell mount stub only |

**BFF:** Mobile.Bff `:5202` · `mobile-bff/api/v1` · **cấm** Web BFF base client · **cấm ERP.***  
Empty/error/403 → toast in-app · **cấm** `window.alert`.

## 6. DES checklist

| ID | Result |
|----|--------|
| DES-A zones SH-* | **PASS** |
| DES-B control = controlHint | **PASS** |
| DES-C prototype + reviewUrl | **PASS** |
| DES-D Leave login dirty | **PASS** |
| DES-GRID / DES-RPT | **N/A** phone shell |
| real_view_parity | **v1** |

## 7. UNCLEAR (carry)

| id | Action |
|----|--------|
| UNCLEAR-DOMAIN-MAP-SHELL | SA thêm DOMAIN-MAP row `web-rmms-shell` |
| UNCLEAR-STD-PORT | Follow STATUS `mfeStdUrl` `:9301` (PLAN `:9330` note only) |

## 8. Handoff

| Role | Need |
|------|------|
| SA | DOMAIN-MAP row · Mobile.Bff paths confirm |
| TL | Tasks shell scaffold + tab routes + login gate |
| Dev | `/agent-dev` · MFE Mobile only |
| QA | Tab 4 · no me · login · phone 430 · e2e queued |

## Version meta

`skillVersion=2026.09.05.03` · `schemaVersion=1` · `contentHash=sha256:6f74282b807da7f2cc1aa57ac64848cd1d75ff3383c0f432eaad7bea53fff80e` · `rulesVersion=2026.09.25.2` · `updatedAt=2026-09-25T11:30:00.000Z` · `design_confirm=approve` · `taskId=task_e5bde5eb`
