# Data-analy — controlHint — web-rmms-shell

| Field | Value |
|-------|-------|
| feature | `web-rmms-shell` |
| title | Tab bar Home · Field · Incident · Work |
| packKind | `list` |
| changeScope | `new_page` |
| mode | `feature_context` |
| status | `done` |
| skillId | `agent-data-analy` |
| skillVersion | `2026.09.05.03` |
| schemaVersion | `1` |
| workflowVersion | `2026.09.19.02` |
| rulesVersion | `2026.09.25.2` |
| versionGate | `ok` |
| contentHash | `sha256:6f74282b807da7f2cc1aa57ac64848cd1d75ff3383c0f432eaad7bea53fff80e` |
| analyzedAt | `2026-09-25T11:17:19.162Z` |
| demo | **N/A** |
| realData | `specs/_data-analy/features/web-rmms-shell-real-data.md` |
| beRepo | `D:/AI-QLBD/Linm.RMMS.WebService` · chrome **Auth** + **Notification** · tab deep cite Patrol/Incident/Maintenance/Asset · **cấm ERP.*** |
| uiRepo | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Mobile` |
| mfeStdUrl | `http://localhost:9301/web-rmms-shell` |
| mfeStdRoute | `/web-rmms-shell` |
| taskId | `task_6cee6055` |
| phoneFrame | `max-width: 430px` |
| formPattern | Mobile shell / full / sheet · **không** ERP Modal/Slideout Kind B desktop |

> Data-analy **đề xuất** controlHint. Design **chốt** control-map. SA **chốt** DOMAIN-MAP row.  
> Nhãn UI: `useFormOptions()` / copy key — **cấm** hardcode tiếng Việt trên form.  
> **Cấm** nhét phone shell vào MFE desktop · **cấm** iOS/Android native.

## Sources

| Source | Path | note |
|--------|------|------|
| CTX | `docs/context/features/web-rmms-shell.md` | new · written this run |
| Screens | `docs/plan/web-rmms-mobile/SCREENS.md` | `6f74282b…` · Tab Home/Field/Incident/Work · **bỏ** Cá nhân |
| Plan | `docs/plan/web-rmms-mobile/PLAN.md` | `60d75d5b…` · Shell · HARD · Map |
| Peer A | `docs/context/features/web-rmms-mobile-a.md` | Field 2 cửa TD/TK |
| DOMAIN-MAP | Auth · Notification · Patrol · Incident · Maintenance | **GAP** slug `web-rmms-shell` chưa có row |
| BFF | Mobile.Bff `:5202` · `mobile-bff/api/v1` | **cấm** Web BFF base |

## Screens shell (ids)

| id | route | surface |
|----|-------|---------|
| SH-00 | shell | MobileShell · phone ≤430 · stack push/pop |
| SH-01 | TabBar | 4 tabs · icons 1-1 Android · **không** `tab.me` |
| SH-02 | `/login` | overlay login · guest Home vẫn mở |
| SH-03 | `/` | Home guest / staff quick + grid |
| SH-04 | `/field` | hub 2 cửa Tuần đường · Tuần kiểm |
| SH-05 | `/incident` | tab root → incident list (peer) |
| SH-06 | `/work` | tab root → work list (peer) |

**Out:** `/me` · `/me/profile` · `/me/settings` · `/me/feedback` · `/me/cam` · TD-04…06 / TK-02…07 / journal / findings / close / frequency (`web-rmms-mobile-b`…`e`).

## ControlHint inventory (shell)

| uiField | screen | controlHint | catalogKind / notes |
|---------|--------|-------------|---------------------|
| phoneFrame | SH-00 | Layout | `max-width: 430px` · center desktop review |
| tabHome | SH-01 | Tab/Nav | copy key `tab.home` · root `/` |
| tabField | SH-01 | Tab/Nav | `tab.field` · `/field` |
| tabIncident | SH-01 | Tab/Nav | `tab.incident` · `/incident` |
| tabWork | SH-01 | Tab/Nav | `tab.work` · `/work` |
| tabMe | — | **REMOVED** | **cấm** render · routes `me*` 404/hide |
| stackBack | SH-00 | Button | pop stack · mirror AppRouter |
| loginUser | SH-02 | Text | account |
| loginPass | SH-02 | Password | |
| loginSubmit | SH-02 | Button | `POST auth/login` · rồi session-window |
| guestFaq | SH-03 | Static | copy key · không form master |
| guestLoginCta | SH-03 | Button | → `/login` |
| qaPatrolPoint | SH-03 | Button/Nav | → tab Field |
| qaIncidentNew | SH-03 | Button/Nav | → `/incident/new` |
| qaSupervise | SH-03 | Button/Nav | → `/supervise` |
| qaPatrolMap | SH-03 | Button/Nav | → `/patrol-map` |
| qaWork | SH-03 | Button/Nav | → tab Work |
| qaIncident | SH-03 | Button/Nav | → tab Incident |
| qaAsset | SH-03 | Button/Nav | → `/asset` |
| qaOffline | SH-03 | Button/Nav | → `/offline` |
| qaOps | SH-03 | Button/Nav | → `/ops` · badge `notification/overview` |
| profileName | SH-03 | Text RO | `GET auth/profile` (staff) |
| doorPatrol | SH-04 | Button/Nav | Tuần đường (BDTX) → `/field/tuan-duong` · peer A |
| doorInspect | SH-04 | Button/Nav | Tuần kiểm (Khu/VP) → `/field/tuan-kiem` · peer A |
| syncBtn | SH-04 | Button | → `/field/offline` / `/offline` |
| incidentRoot | SH-05 | List stub | peer Incident · shell chỉ mount tab |
| workRoot | SH-06 | List stub | peer Maintenance · shell chỉ mount tab |

## Filter / grid (desktop HARD)

| | |
|--|--|
| LinErpListFilterBar / DES-GRID-* | **N/A** — phone shell · **không** Kind B desktop grid |
| Home grid | icon tiles nav · **cấm** ERP list filter bar |

## GPS

| Màn | Rule |
|-----|------|
| SH-00…06 chrome | không bắt GPS |
| Deep screens (collect/check-in/detect…) | `navigator.geolocation` · deny → disable nút cần tọa độ · **cấm** fake · owner = peer feature |

## UNCLEAR

| id | Issue | Action |
|----|-------|--------|
| UNCLEAR-DOMAIN-MAP-SHELL | DOMAIN-MAP chưa có row `web-rmms-shell` | SA thêm row · chrome Auth+Notification · deep cite peer domains |
| UNCLEAR-STD-PORT | PLAN đề xuất `:9330` · STATUS/packet `mfeStdUrl` `:9301/web-rmms-shell` | Design/Dev follow STATUS packet URL; ghi note port std nếu scaffold khác |

## Handoff

| Role | Dùng |
|------|------|
| PO | 4-tab · bỏ me · 2 cửa Field · Live auth/notify · DoD shell |
| Design | Phone 430 · zones SH-* · Android 1-1 icon/tab · prototype+reviewUrl |
| SA | DOMAIN-MAP row · Mobile.Bff only · **cấm** invent me APIs |
| TL/Dev | Wire Mobile MFE shell only · deep content = peer tasks |

## Version meta

`skillVersion=2026.09.05.03` · `schemaVersion=1` · `contentHash=sha256:6f74282b807da7f2cc1aa57ac64848cd1d75ff3383c0f432eaad7bea53fff80e` · `rulesVersion=2026.09.25.2` · `analyzedAt=2026-09-25T11:17:19.162Z`
