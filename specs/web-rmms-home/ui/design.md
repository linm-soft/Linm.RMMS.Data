# Design — web-rmms-home

| Field | Value |
|-------|-------|
| feature | `web-rmms-home` |
| title | Home — guest, quick, lưới 6 ô, wallet |
| this role | `design` · `/agent-design` |
| status | `confirmed` (autoApprove=ON) |
| design_confirm | **approve** (`task_481730d8`) |
| changeScope | `new_page` |
| packKind | **`list`** (PO · UI = **phone Home content** · **≠** Kind B desktop) |
| lane | `web` |
| stack | `web_mfe_phone` · `Linm.Web.RMMS.Mobile` · `max-width: 430px` |
| formPattern | Mobile **Home / full** · **không** ERP Modal/Slideout Kind B · **không** master form |
| DES-GRID / LinErpListFilterBar | **N/A** — phone Home tiles · **cấm** clone |
| Report AC / DES-RPT | **N/A** |
| shared_grid_example | **N/A** (phone) |
| real_view_parity | **v1** |
| peerStdUrl | `http://localhost:9301/web-rmms-home` |
| mfeStdUrl | `http://localhost:9301/web-rmms-home` |
| mfeStdRoute | `/web-rmms-home` |
| reviewUrl | `file:///D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-home/ui/prototype/index.html` |
| demo | **N/A** · hash skip · **cấm** re-scan (**GAP-DES-DEMO-RESCAN-01**) |
| mfe | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Mobile` |
| beRepo | `D:/AI-QLBD/Linm.RMMS.WebService` · Auth + Notification chrome · deep cite peers · **cấm ERP.*** |
| controlHint | `specs/_data-analy/features/web-rmms-home-control-hint.md` |
| realData | `specs/_data-analy/features/web-rmms-home-real-data.md` · §A+§B PASS |
| prior | PO `confirmed` · `handoff/po-compact.md` · contentHash `sha256:6f74282b807da7f2cc1aa57ac64848cd1d75ff3383c0f432eaad7bea53fff80e` |
| autoApprove | **ON** |
| e2eQa | ON queued `/agent-qa*` · **cấm** e2e / `yarn start:std` ở Design |
| `devSlash` | `/agent-dev` |
| updatedAt | `2026-09-25T12:10:00.000Z` |
| taskId | `task_481730d8` |
| skillId | `agent-design` |
| skillVersion | `2026.09.05.03` |
| schemaVersion | `1` |
| workflowVersion | `2026.09.19.02` |
| rulesVersion | `2026.09.25.2` |
| versionGate | `ok` |
| contentHash | `sha256:6f74282b807da7f2cc1aa57ac64848cd1d75ff3383c0f432eaad7bea53fff80e` |

**Cấm:** Dev/BE trước confirm (đã autoApprove) · ERP.* · iOS/Android native dual · Kind B DES-GRID · `LinErpListFilterBar` · invent `me*` / feedback / cam-view · fake GPS · hardcode label keys ngoài `useFormOptions` · native `alert`/`confirm` · re-scan demo · `yarn build` / e2e / start:std ở role này · sở hữu TabBar/login overlay (peer `web-rmms-shell`).

## 0. Context / Demo

| ID | Path | Notes |
|----|------|-------|
| CTX-01 | `docs/context/features/web-rmms-home.md` | feature Home |
| CTX-02 | `docs/plan/web-rmms-mobile/SCREENS.md` | Tab Home `/` · GPS: không |
| CTX-03 | `docs/plan/web-rmms-mobile/PLAN.md` | grid 6 · wallet · quick |
| CTX-04 | `docs/context/features/web-rmms-shell.md` | TabBar / login overlay peer |
| DEM | — | **N/A** · hash skip |
| DA-01 / DA-02 | `_data-analy/features/web-rmms-home-{control-hint,real-data}.md` | inventory + §B |
| PO | `po/requirement.md` | guest/staff · grid6 · DoD |
| tokens | `docs/mobile-tokens.json` | primary `#0C84C0` · phone 430 |

## 1. Pattern & ownership

| | |
|--|--|
| Frame | Phone **430px** · content Home · tokens primary `#0C84C0` · label **13** · field **≥16** (**GAP-TYP-01**) |
| Home owns | **HM-00…06** content only |
| Shell owns | TabBar · login overlay · stack chrome (peer `web-rmms-shell` SH-*) |
| DES-LEAVE | **N/A** — Home không form dirty |
| Out | `/me*` · feedback · cam-view · Field deep · journal/kết ca/tồn tại/tần suất (b–e) · TabBar |

## 2. Screens / zones

| Zone | Route | Surface | Wire |
|------|-------|---------|------|
| **HM-00** | phone | Frame | max-width 430 · center desktop review · Android 1-1 |
| **HM-01** | `/` guest | Full | guestFaq · guestPrivacy · guestLoginCta → `/login` (shell) |
| **HM-02** | `/` quick | Full (staff) | qaPatrolPoint → tab Field · qaIncidentNew → `/incident/new` |
| **HM-03** | `/` grid6 | Full (staff) | 6 tiles Button/Nav |
| **HM-04** | wallet | Card/Nav | walletAsset → `/asset` |
| **HM-05** | notify | Badge | notifyBadge Number RO · tap → `/ops` |
| **HM-06** | profile | Header | profileName Text RO · `GET auth/profile` |

### IA

```
(guest) → HM-00+HM-01 → guestLoginCta → /login (shell overlay)
(auth)  → HM-00 + HM-06 profile + HM-05 badge + HM-02 quick + HM-03 grid6 + HM-04 wallet
  gridSupervise → /supervise
  gridPatrolMap → /patrol-map
  gridWork      → tab Work
  gridIncident  → tab Incident
  gridAsset     → /asset
  gridOffline   → /offline
  walletAsset   → /asset
  notifyBadge   → /ops
```

## 3. Field inventory (Control = controlHint)

| uiField | screen | controlHint | Required | Bind / notes |
|---------|--------|-------------|----------|--------------|
| phoneFrame | HM-00 | Layout | * | max-width 430 · center review |
| guestFaq | HM-01 | Static | guest | copy `home.guest.faq` |
| guestPrivacy | HM-01 | Static | guest | `home.guest.privacy` |
| guestLoginCta | HM-01 | Button | guest | → `/login` shell |
| qaPatrolPoint | HM-02 | Button/Nav | staff | → tab Field |
| qaIncidentNew | HM-02 | Button/Nav | staff | → `/incident/new` |
| gridSupervise | HM-03 | Button/Nav | staff | → `/supervise` · `home.grid.supervise` |
| gridPatrolMap | HM-03 | Button/Nav | staff | → `/patrol-map` · `home.grid.patrol` |
| gridWork | HM-03 | Button/Nav | staff | → tab Work · `home.grid.work` |
| gridIncident | HM-03 | Button/Nav | staff | → tab Incident · `home.grid.incident` |
| gridAsset | HM-03 | Button/Nav | staff | → `/asset` · `home.grid.asset` |
| gridOffline | HM-03 | Button/Nav | staff | → `/offline` · `home.grid.offline` |
| walletAsset | HM-04 | Button/Nav | staff | → `/asset` · `home.wallet.asset` |
| notifyBadge | HM-05 | Number RO | staff | `GET notification/overview` · tap `/ops` |
| profileName | HM-06 | Text RO | staff | `GET auth/profile` |

**Labels:** `useFormOptions()` / copy keys — prototype hiện nhãn nghiệp vụ VN để review; Dev wire key.  
**GPS:** Home **không** capture · deep = peer · deny → disable coords · **cấm** fake.  
**REMOVED:** me / me-profile / me-settings / feedback / cam-view.

## 4. Prototype (REQUIRED)

| | |
|--|--|
| Artifact | `ui/prototype/index.html` |
| Zones | HM-00 · HM-01(guest) · HM-02…06(staff) |
| Form | **none** master · login CTA nav only |
| Grid/filter desktop | **N/A** |
| SSOT | `design-prototype-review` · `design-real-view-parity` · control-hint · mobile-tokens |
| **reviewUrl** | `file:///D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-home/ui/prototype/index.html` |
| **peerStdUrl** | `http://localhost:9301/web-rmms-home` |
| **real_view_parity** | `v1` |

### Wire

```
HM-00: phoneFrame 430
HM-01 guest: FAQ · privacy · [Đăng nhập] → /login note
HM-02 staff: [Điểm tuần] [Ghi sự cố]
HM-03: 2×3 tiles — Supervise · Patrol map · Work · Incident · Asset · Offline
HM-04: wallet card → /asset
HM-05: badge unread on header → /ops
HM-06: profileName in topbar
Toggle board: Guest | Staff (prototype only)
TabBar ghost: peer shell — không thuộc Home DoR
```

## 5. API map (cite real-data §B)

| Action | API |
|--------|-----|
| Profile | `GET mobile-bff/api/v1/auth/profile` |
| Notify badge | `GET mobile-bff/api/v1/notification/overview` |
| Login CTA | nav `/login` only · shell owns POST auth/login |
| Grid / wallet / quick | nav only · peer owners |

**BFF:** Mobile.Bff `:5202` · `mobile-bff/api/v1` · **cấm** Web BFF base client · **cấm ERP.***  
Empty badge=0 · error/403 → toast in-app · **cấm** `window.alert`.  
**Cấm** invent Home CRUD.

## 6. DES checklist

| ID | Result |
|----|--------|
| DES-A zones HM-* | **PASS** |
| DES-B control = controlHint | **PASS** |
| DES-C prototype + reviewUrl | **PASS** |
| DES-D Leave dirty | **N/A** (no Home form) |
| DES-GRID / DES-RPT | **N/A** phone Home |
| real_view_parity | **v1** |
| Ownership HM vs shell | **PASS** (PO resolve UNCLEAR-HOME-VS-SHELL) |

## 7. UNCLEAR (carry)

| id | Action |
|----|--------|
| UNCLEAR-DOMAIN-MAP-HOME | SA thêm DOMAIN-MAP row `web-rmms-home` · chrome Auth+Notification |
| UNCLEAR-STD-PORT | **resolved PO** · follow STATUS `:9301` |
| UNCLEAR-HOME-VS-SHELL | **resolved PO** · Home HM-* · shell TabBar+login |

## 8. Handoff

| Role | Need |
|------|------|
| SA | DOMAIN-MAP row · Mobile.Bff paths confirm |
| TL | Tasks Home page guest/staff + nav stubs |
| Dev | `/agent-dev` · MFE Mobile Home only · deep = peer routes |
| QA | Guest/staff · grid6 · wallet · badge · phone 430 · no me · e2e queued |

## Version meta

`skillVersion=2026.09.05.03` · `schemaVersion=1` · `contentHash=sha256:6f74282b807da7f2cc1aa57ac64848cd1d75ff3383c0f432eaad7bea53fff80e` · `rulesVersion=2026.09.25.2` · `updatedAt=2026-09-25T12:10:00.000Z` · `design_confirm=approve` · `taskId=task_481730d8`
