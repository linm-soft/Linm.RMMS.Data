# Data-analy — controlHint — web-rmms-home

| Field | Value |
|-------|-------|
| feature | `web-rmms-home` |
| title | Home — guest, quick, lưới 6 ô, wallet |
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
| analyzedAt | `2026-09-25T12:00:00.000Z` |
| demo | **N/A** |
| realData | `specs/_data-analy/features/web-rmms-home-real-data.md` |
| beRepo | `D:/AI-QLBD/Linm.RMMS.WebService` · Home chrome **Auth** + **Notification** · nav cite Patrol/Incident/Maintenance/Asset · **cấm ERP.*** |
| uiRepo | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Mobile` |
| mfeStdUrl | `http://localhost:9301/web-rmms-home` |
| mfeStdRoute | `/web-rmms-home` |
| taskId | `task_1a53bb82` |
| phoneFrame | `max-width: 430px` |
| formPattern | Mobile Home / full · **không** ERP Modal/Slideout Kind B · **không** form master |

> Data-analy **đề xuất** controlHint. Design **chốt** control-map. SA **chốt** DOMAIN-MAP row.  
> Nhãn UI: `useFormOptions()` / copy key — **cấm** hardcode tiếng Việt trên form.  
> **Cấm** nhét phone Home vào MFE desktop · **cấm** iOS/Android native.

## Sources

| Source | Path | note |
|--------|------|------|
| CTX | `docs/context/features/web-rmms-home.md` | new · written this run |
| Screens | `docs/plan/web-rmms-mobile/SCREENS.md` | `6f74282b…` · Tab Home `/` · GPS: không |
| Plan | `docs/plan/web-rmms-mobile/PLAN.md` | `60d75d5b…` · grid 6 · wallet · quick |
| Peer shell | `docs/context/features/web-rmms-shell.md` | TabBar / login overlay owner |
| DOMAIN-MAP | Auth · Notification · cite peers | **GAP** slug `web-rmms-home` chưa có row |
| BFF | Mobile.Bff `:5202` · `mobile-bff/api/v1` | **cấm** Web BFF base |

## Screens Home (ids)

| id | route / zone | surface |
|----|--------------|---------|
| HM-00 | phone | frame ≤430 · Android 1-1 |
| HM-01 | `/` guest | FAQ + privacy + login CTA |
| HM-02 | `/` quick | Điểm tuần · Ghi sự cố (staff) |
| HM-03 | `/` grid6 | 6 ô nav |
| HM-04 | wallet | → `/asset` |
| HM-05 | notify | badge → `/ops` |
| HM-06 | profile | `GET auth/profile` RO |

**Out:** `/me*` · feedback · cam-view · Field 2 cửa deep · journal / kết ca / tồn tại / tần suất (`web-rmms-mobile-b`…`e`) · shell TabBar (peer `web-rmms-shell`).

## ControlHint inventory (Home)

| uiField | screen | controlHint | catalogKind / notes |
|---------|--------|-------------|---------------------|
| phoneFrame | HM-00 | Layout | `max-width: 430px` · center desktop review |
| guestFaq | HM-01 | Static | copy key · không form |
| guestPrivacy | HM-01 | Static | copy key |
| guestLoginCta | HM-01 | Button | → `/login` (shell overlay) |
| qaPatrolPoint | HM-02 | Button/Nav | → tab Field |
| qaIncidentNew | HM-02 | Button/Nav | → `/incident/new` |
| gridSupervise | HM-03 | Button/Nav | → `/supervise` · copy `home.grid.supervise` |
| gridPatrolMap | HM-03 | Button/Nav | → `/patrol-map` · `home.grid.patrol` |
| gridWork | HM-03 | Button/Nav | → tab Work · `home.grid.work` |
| gridIncident | HM-03 | Button/Nav | → tab Incident · `home.grid.incident` |
| gridAsset | HM-03 | Button/Nav | → `/asset` · `home.grid.asset` |
| gridOffline | HM-03 | Button/Nav | → `/offline` · `home.grid.offline` |
| walletAsset | HM-04 | Button/Nav | Hồ sơ tài sản → `/asset` |
| notifyBadge | HM-05 | Number RO | `GET notification/overview` · tap → `/ops` |
| profileName | HM-06 | Text RO | `GET auth/profile` (staff) |

## Filter / grid (desktop HARD)

| | |
|--|--|
| LinErpListFilterBar / DES-GRID-* | **N/A** — phone Home · **không** Kind B desktop grid |
| Home grid | icon tiles nav · **cấm** ERP list filter bar |

## GPS

| Màn | Rule |
|-----|------|
| HM-00…06 Home | **không** bắt GPS |
| Deep (collect/check-in/detect…) | peer · `navigator.geolocation` · deny → disable nút cần tọa độ · **cấm** fake |

## UNCLEAR

| id | Issue | Action |
|----|-------|--------|
| UNCLEAR-DOMAIN-MAP-HOME | DOMAIN-MAP chưa có row `web-rmms-home` | SA thêm row · chrome Auth+Notification · deep cite peer domains |
| UNCLEAR-STD-PORT | PLAN `:9330` · STATUS/packet `mfeStdUrl` `:9301/web-rmms-home` | Design/Dev follow STATUS packet URL |
| UNCLEAR-HOME-VS-SHELL | Home zones overlap shell SH-03 | PO/Design: Home page owns HM-* content · shell owns TabBar/login chrome |

## Handoff

| Role | Dùng |
|------|------|
| PO | Guest/staff Home · grid 6 · wallet · badge · DoD · no me |
| Design | Phone 430 · zones HM-* · Android 1-1 · prototype+reviewUrl |
| SA | DOMAIN-MAP row · Mobile.Bff only · **cấm** invent Home CRUD |
| TL/Dev | Wire Mobile MFE Home only · deep = peer routes |

## Version meta

`skillVersion=2026.09.05.03` · `schemaVersion=1` · `contentHash=sha256:6f74282b807da7f2cc1aa57ac64848cd1d75ff3383c0f432eaad7bea53fff80e` · `rulesVersion=2026.09.25.2` · `analyzedAt=2026-09-25T12:00:00.000Z`
