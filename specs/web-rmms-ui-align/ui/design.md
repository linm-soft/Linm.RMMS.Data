# Design — web-rmms-ui-align

| Field | Value |
|-------|-------|
| feature | `web-rmms-ui-align` |
| title | Align UI Home · Tab · Field · Me theo prototype iOS/Android |
| this role | `design` · `/agent-design` |
| status | `confirmed` (autoApprove=ON) |
| design_confirm | **approve** (`task_4417ff13`) |
| changeScope | `edit_page` |
| packKind | **`list`** (PO confirm · UI = **phone chrome align** · **≠** Kind B desktop) |
| lane | `web` |
| stack | `web_mfe_phone` · `Linm.Web.RMMS.Mobile` · `max-width: 430px` |
| formPattern | Mobile **Full / Overlay / Tab** · login **overlay** · **không** ERP Modal/Slideout Kind B |
| DES-GRID / LinErpListFilterBar | **N/A-chrome** — peers giữ filter-bar · **cấm** clone `shared-grid-example` vào shell |
| Report AC / DES-RPT | **N/A** |
| shared_grid_example | **N/A** (phone) |
| real_view_parity | **v1** |
| peerStdUrl | `http://localhost:9301/web-rmms-shell` · `http://localhost:9301/web-rmms-home` |
| mfeStdUrl | `http://localhost:9301/web-rmms-ui-align` |
| mfeStdRoute | `/web-rmms-ui-align` |
| reviewUrl | `file:///D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-ui-align/ui/prototype/index.html` |
| demo | **N/A** · hash skip · **cấm** re-scan (**GAP-DES-DEMO-RESCAN-01**) |
| mfe | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Mobile` |
| beRepo | `D:/AI-QLBD/Linm.RMMS.WebService` · Auth + Notification chrome · peer cite DOMAIN-MAP · **cấm ERP.*** |
| bffRepo | `D:/AI-QLBD/Linm.RMMS.Mobile.Bff` · `:5202` · `mobile-bff/api/v1` |
| controlHint | `specs/_data-analy/features/web-rmms-ui-align-control-hint.md` |
| realData | `specs/_data-analy/features/web-rmms-ui-align-real-data.md` · §A+§B PASS · §D map PASS |
| prior | PO `confirmed` · `handoff/po-compact.md` · contentHash `sha256:554b56d529a010b6225fe92fc369904fd070a80f12503c35e914643f82bcfe4b` |
| autoApprove | **ON** |
| e2eQa | ON queued `/agent-qa*` · **cấm** e2e / `yarn start:std` ở Design |
| `devSlash` | `/agent-dev` |
| updatedAt | `2026-09-26T06:55:00.000Z` |
| taskId | `task_4417ff13` |
| skillId | `agent-design` |
| skillVersion | `2026.09.05.03` |
| schemaVersion | `1` |
| workflowVersion | `2026.09.19.02` |
| rulesVersion | `2026.09.25.2` |
| versionGate | `ok` |
| contentHash | `sha256:554b56d529a010b6225fe92fc369904fd070a80f12503c35e914643f82bcfe4b` |

**Cấm:** Dev/BE trước confirm (đã autoApprove) · ERP.* · Web BFF tiles · MapService `:5021` browser · Kind B DES-GRID trên chrome · invent product route/API · mock list SSOT · sửa iOS/Android HTML · hardcode VN form labels · native `alert`/`confirm` · re-scan demo · `yarn build` / e2e / start:std ở role này.

## 0. Context / Demo

| ID | Path | Notes |
|----|------|-------|
| CTX-01 | `docs/context/features/web-rmms-ui-align.md` | feature P0 · edit_page delta |
| CTX-02 | `web-rmms-shell.md` · `web-rmms-home.md` · `mobile-bff-map.md` | peer current |
| CTX-03 | `feedback.md` · `cam-view.md` | Me deep peers |
| DEM | — | **N/A** · hash skip · **cấm** crawl DemoRoot |
| GOLD | `specs/mobile-p1/ui/prototype/android/index.html` · `ios/index.html` | read-only zone ref · **cấm** sửa |
| DA-01 / DA-02 | `_data-analy/features/web-rmms-ui-align-{control-hint,real-data}.md` | inventory + §B |
| PO | `po/requirement.md` | Screens UA-00…12 · Leave · GAPs CLOSED |
| tokens | `docs/mobile-tokens.json` | primary `#0C84C0` · label 13 · field ≥16 |

## 1. Pattern & shell

| | |
|--|--|
| Frame | Phone **430px** · content-only · tokens primary `#0C84C0` · label **13** · field **≥16** (**GAP-TYP-01**) |
| Shell | **UA-00** MobileShell · stack push/pop · **không** ERP `LinPageLayout` catalog chrome |
| TabBar | **DES-MOB-TABBAR** bottom **5** · `#i-home` `#i-mappin` `#i-warning` `#i-wrench` `#i-person` copy sprite GOLD · **cấm** path tự vẽ (**GAP-DES-MOB-ICON-01**) |
| `tab.field` | VN = **«Tuần đường»** · icon stroke **`#i-mappin`** (GAP-DA-UIALIGN-TAB-01 CLOSED) |
| Login | **DES-MOB-LOGIN** overlay · dirty → **LeaveConfirmModal** |
| Me | **DES-MOB-ME** · rows profile/offline/signal/feedback/cam/ops/logout · settings=**toast only** |
| Leave | **DES-LEAVE** · login dirty · logout = `useAlert` · **cấm** native dialog |
| Out | invent route · mock list · desktop DES-GRID trên chrome |

## 2. Screens / zones

| Zone | Route | Surface | Wire |
|------|-------|---------|------|
| **UA-00** | shell | Full / stack | phoneFrame ≤430 · stackBack |
| **DES-MOB-TABBAR** | TabBar | Tab/Nav | 5 tabs · ActiveTab highlight |
| **DES-MOB-LOGIN** | login overlay | Overlay / Full | loginUser · loginPass · Submit · Cancel · Leave |
| **DES-MOB-HOME** | `/web-rmms-home` | Full | guest FAQ/privacy · staff quick/grid · profile · notify badge |
| **DES-MOB-PAT-HOME** | `/web-rmms-field` | Full | doorPatrol · doorInspect · sessions badge opt |
| **DES-MOB-INC-LIST** | `/web-rmms-incident` | Full | peer list mount · live BFF |
| **DES-MOB-MNT-LIST** | `/web-rmms-work` | Full | peer list mount · live BFF |
| **DES-MOB-ME** | Me tab root | Full | rows dưới · settings toast |
| **DES-MOB-OPS** | `/web-rmms-ops` | Full | notify inbox |
| **DES-MOB-PAT-OFFLINE** | `/web-rmms-offline` | Full | queue |
| **DES-MOB-FEEDBACK** | `/web-rmms-feedback` | Full / toast | alias khi peer mount · else `me.peerPending` |
| **DES-MOB-CAM-VIEW** | `/web-rmms-cam-view` | Full / toast | alias khi peer mount · else `me.peerPending` |
| **UA-12 deep** | existing `/web-rmms-*` | Full / peer | PAT-* · ATT · GIS · ASSET-* · AI · VIS · EST · NT · REFLECT · CAM-PATROL · SUPERVISE · DET-HITL |
| **DES-LEAVE** | overlay | Modal | dirty leave login |

### IA

```
(guest) → DES-MOB-HOME → guestLoginCta → DES-MOB-LOGIN
(auth)  → UA-00 shell + DES-MOB-TABBAR (5)
  tab Home     → DES-MOB-HOME (staff)
  tab Field    → DES-MOB-PAT-HOME → doors → peer field
  tab Incident → DES-MOB-INC-LIST → peer incident
  tab Work     → DES-MOB-MNT-LIST → peer work
  tab Me       → DES-MOB-ME → offline|ops|feedback*|cam*|logout
stackBack ← pop deep routes (peer owners)
* feedback/cam = alias hoặc toast me.peerPending (GAP-ME CLOSED)
```

## 3. Field inventory (Control = controlHint)

| uiField | screen | controlHint | Required | Bind / notes |
|---------|--------|-------------|----------|--------------|
| phoneFrame | UA-00 | Layout | * | max-width 430 |
| tabHome | TABBAR | TabBar | * | `tab.home` · Trang Chủ |
| tabField | TABBAR | TabBar | * | `tab.field` · **Tuần đường** · `#i-mappin` |
| tabIncident | TABBAR | TabBar | * | `tab.incident` · Vấn đề |
| tabWork | TABBAR | TabBar | * | `tab.work` · Công việc |
| tabMe | TABBAR | TabBar | * | `tab.me` · Tôi · **NEW** vs shell-4 |
| stackBack | UA-00 | Button | * | pop |
| loginUser | LOGIN | Text | * | POST auth/login |
| loginPass | LOGIN | Password | * | |
| loginSubmit | LOGIN | Button | * | → refresh · session |
| guestFaq / guestPrivacy | HOME | Static/Nav | — | LOOKUP_STATIC |
| guestLoginCta | HOME | Button | — | → login |
| home.quick.* / grid.* | HOME | Button/Nav | staff | existing routes only |
| profileName | HOME/ME | Text RO | staff | `GET auth/profile` |
| notifyBadge | HOME/ME | Number RO | — | `GET notification/overview` |
| doorPatrol | PAT-HOME | Button/Nav | * | `/web-rmms-field` · sessions opt |
| doorInspect | PAT-HOME | Button/Nav | * | door inspect |
| me.offlineQueue | ME | Button/Nav | * | `/web-rmms-offline` |
| me.signal | ME | Text RO | * | derived net |
| me.feedback | ME | Button/Nav\|toast | * | alias `/web-rmms-feedback` / toast |
| me.camView | ME | Button/Nav\|toast | * | alias `/web-rmms-cam-view` / toast |
| me.notify | ME | Button/Nav | * | `/web-rmms-ops` + badge |
| me.settings | ME | Button toast | * | **cấm** màn |
| me.logout | ME | Button | * | clear JWT · useAlert |
| map.tiles | deep map | Map | peer | `GET mobile-bff/…/gis/tiles/…` only |
| peer lists | INC/MNT/… | List | peer | reuse peer control-hint |

**Labels:** `useFormOptions()` / LOOKUP_STATIC — prototype hiện nhãn VN review; Dev wire key.  
**GPS:** chrome **không** capture · deep = peer · **cấm** fake.  
**Deep forms:** reuse peer hints — **cấm** re-invent field set.

## 4. Prototype (REQUIRED)

| | |
|--|--|
| Artifact | `ui/prototype/index.html` |
| Zones | UA-00 · DES-MOB-TABBAR · LOGIN · HOME(guest+staff) · PAT-HOME · INC-LIST · MNT-LIST · ME · OPS/OFFLINE toast path · DES-LEAVE |
| Form | Login overlay · LeaveConfirmModal · TabBar **5** · Me rows |
| Grid/filter desktop | **N/A-chrome** |
| SSOT | `design-prototype-review` · `design-real-view-parity` · control-hint · mobile-tokens · **cấm** shared-grid desktop |
| **reviewUrl** | `file:///D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-ui-align/ui/prototype/index.html` |
| **peerStdUrl** | `http://localhost:9301/web-rmms-shell` · `http://localhost:9301/web-rmms-home` |
| **real_view_parity** | `v1` |

### Wire

```
UA-00: phoneFrame 430 · stackBack when deep
DES-MOB-TABBAR: [Trang Chủ #i-home][Tuần đường #i-mappin][Vấn đề #i-warning][Công việc #i-wrench][Tôi #i-person]
DES-MOB-LOGIN: loginUser · loginPass · [Hủy|Đăng nhập] · dirty → DES-LEAVE
DES-MOB-HOME guest: FAQ · privacy · CTA Đăng nhập
DES-MOB-HOME staff: profileName · quick · grid · ops badge
DES-MOB-PAT-HOME: door Tuần đường · door Tuần kiểm
DES-MOB-INC-LIST / MNT-LIST: peer mount stubs (live BFF Dev)
DES-MOB-ME: profile · offline · signal · feedback · cam · ops · settings(toast) · logout
DES-LEAVE: Ở lại / Rời
```

## 5. API map (cite real-data §B)

| Action | API |
|--------|-----|
| Login | `POST mobile-bff/api/v1/auth/login` |
| Refresh | `POST …/auth/refresh-token` |
| Profile | `GET …/auth/profile` |
| Notify badge | `GET …/notification/overview` |
| Field doors | nav · optional `GET …/patrol/sessions` |
| Map tiles | `GET …/gis/tiles/{layer}/{z}/{x}/{y}.pbf` |
| Incident / Work / Asset | peer DOMAIN-MAP · shell mount only |
| Feedback / Cam | peer mount alias · **cấm** invent CRUD trên slug này |

**BFF:** Mobile.Bff `:5202` · **cấm** Web BFF base · **cấm ERP.*** · **cấm** MapService `:5021` browser.  
Empty/error → toast in-app · **cấm** `window.alert`.

## 6. DES checklist

| ID | Result |
|----|--------|
| DES-A zones DES-MOB-* / UA-* | **PASS** |
| DES-B control = controlHint | **PASS** |
| DES-C prototype + reviewUrl | **PASS** |
| DES-D Leave login dirty + logout useAlert | **PASS** |
| DES-GRID / DES-RPT | **N/A** phone chrome |
| TabBar 5 + tab.field Tuần đường + #i-mappin | **PASS** |
| Me rows + settings toast · GAP-ME CLOSED | **PASS** |
| real_view_parity | **v1** |
| hash skip · no demo re-scan | **PASS** |

## 7. UNCLEAR

| id | Action |
|----|--------|
| — | **none** — GAP-DA-UIALIGN-ME-01 · TAB-01 CLOSED ở PO |

## 8. Handoff

| Role | Need |
|------|------|
| SA | DOMAIN-MAP cite Auth/Notify/GisTiles · **không** migration chrome · giữ path đã cite |
| TL | Tasks: TabBar 5 · Me · copy keys · alias toast peers |
| Dev | `/agent-dev` · MFE Mobile only · reuse routes |
| QA | Tab 5 · Me · Leave · phone 430 · e2e queued |

## Version meta

`skillVersion=2026.09.05.03` · `schemaVersion=1` · `contentHash=sha256:554b56d529a010b6225fe92fc369904fd070a80f12503c35e914643f82bcfe4b` · `rulesVersion=2026.09.25.2` · `updatedAt=2026-09-26T06:55:00.000Z` · `design_confirm=approve` · `taskId=task_4417ff13`
