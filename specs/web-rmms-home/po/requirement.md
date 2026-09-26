# PO — requirement — web-rmms-home

| Field | Value |
|-------|-------|
| feature | `web-rmms-home` |
| title | Home — guest, quick, lưới 6 ô, wallet |
| packKind | `list` |
| changeScope | `new_page` |
| formPattern | Mobile Home / full · phone `max-width: 430px` · **không** ERP Modal/Slideout · **không** form master |
| lane | `web` |
| status | `done` |
| skillId | `agent-po` |
| skillVersion | `2026.09.05.03` |
| schemaVersion | `1` |
| workflowVersion | `2026.09.19.02` |
| rulesVersion | `2026.09.25.2` |
| versionGate | `ok` |
| contentHash | `sha256:6f74282b807da7f2cc1aa57ac64848cd1d75ff3383c0f432eaad7bea53fff80e` |
| writtenAt | `2026-09-25T11:55:00.000Z` |
| demo | **N/A** |
| mfe | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Mobile` |
| mfeStdRoute | `/web-rmms-home` |
| mfeStdUrl | `http://localhost:9301/web-rmms-home` |
| be | `D:/AI-QLBD/Linm.RMMS.WebService` · Mobile.Bff `:5202` · `mobile-bff/api/v1` · **cấm ERP.*** |
| prior | data_analy **confirmed** · control-hint + real-data · compact exists |
| taskId | `task_22796b97` |

> Nhãn UI: `useFormOptions()` / LinmCopy `home.*` · **cấm** hardcode tiếng Việt trên form.  
> **Cấm** demo HTML / mock SSOT · **cấm** sửa iOS/Android · **cấm** nhét phone Home vào MFE desktop.

## 1. Goal

Giao diện **Home** 1-1 Android trên Mobile MFE: **guest** (FAQ + privacy + CTA đăng nhập) và **staff** (quick + lưới 6 ô + wallet + badge + tên profile). Home **chỉ chrome + nav** — không CRUD domain, không form master, không tab `me*`.

## 2. changeScope

`changeScope=new_page` — surface Home mới trong `Linm.Web.RMMS.Mobile` · route std `/web-rmms-home` · phone frame ≤430px.

## 3. Screens / zones

| Id | Zone | AC |
|----|------|----|
| HM-00 | phone frame | max-width 430 · center khi review desktop · Android layout 1-1 |
| HM-01 | guest | FAQ + privacy (copy key) + CTA → `/login` (shell overlay) khi chưa JWT |
| HM-02 | staff quick | Điểm tuần → tab Field · Ghi sự cố → `/incident/new` |
| HM-03 | grid 6 | 6 ô nav (xem §4) · **không** LinErpListFilterBar / DES-GRID |
| HM-04 | wallet | Hồ sơ tài sản → `/asset` |
| HM-05 | notify | Badge unread · `GET notification/overview` · tap → `/ops` · empty=0 · error toast (**cấm** `window.alert`) |
| HM-06 | profile | Tên RO · `GET auth/profile` (staff, lần đầu) |

### Grid 6 → route (AC nav)

| Ô · copy key | Route |
|--------------|-------|
| `home.grid.supervise` | `/supervise` |
| `home.grid.patrol` | `/patrol-map` |
| `home.grid.work` | tab Work |
| `home.grid.incident` | tab Incident |
| `home.grid.asset` | `/asset` |
| `home.grid.offline` | `/offline` |

## 4. Grid / Filter AC (packKind=list)

| Rule | Verdict |
|------|---------|
| LinErpListFilterBar / DES-GRID-* | **N/A** — phone Home tiles · **không** Kind B desktop list |
| Home “grid” | icon tiles Button/Nav · AC = đủ 6 ô + đúng route · **cấm** ERP list filter bar |
| Report AC | **N/A** — không pack report |

## 5. Leave / Out of scope

| Out | Owner |
|-----|-------|
| `/me` · `/me-profile` · `/me-settings` · feedback · cam-view | **REMOVED** — **cấm** render |
| TabBar · login overlay chrome | peer `web-rmms-shell` |
| Field 2 cửa deep · journal / kết ca / tồn tại / tần suất | `web-rmms-mobile-a`…`e` / shell |
| Home domain CRUD / invent API | **cấm** — chỉ Live Auth + Notification |
| GPS capture trên Home | **không** — deep peer only |
| Web BFF base client · ERP.* | **cấm** |
| iOS / Android native code | **cấm** sửa |

## 6. Persona & auth

| Zone | Ai | Behavior |
|------|-----|----------|
| HM-01 | Guest (no JWT) | FAQ/privacy + login CTA |
| HM-02…06 | Staff (JWT) | quick + grid + wallet + badge + profile |

## 7. API / data (Live only)

| Surface | Bind |
|---------|------|
| Mobile.Bff | `http://localhost:5202` · `mobile-bff/api/v1` |
| Profile | `GET auth/profile` → `profile.displayName` |
| Notify | `GET notification/overview` → `notify.unread` |
| Login CTA | nav only → `/login` |
| Nav peers | route stubs — không gọi CRUD trên Home |

Labels: `useFormOptions()` / copy keys `home.*` · real-data §A+§B PASS (analy).

## 8. GPS

| Surface | Rule |
|---------|------|
| HM-00…06 | **không** bắt GPS |
| Deep peer | `navigator.geolocation` · deny → disable nút cần coords · **cấm** fake |

## 9. PO decisions (UNCLEAR)

| id | Decision |
|----|----------|
| UNCLEAR-HOME-VS-SHELL | **Chốt:** Home page owns **HM-00…06** content · shell owns **TabBar + login overlay** (SH-03 chrome) · Home không duplicate TabBar |
| UNCLEAR-STD-PORT | **Chốt:** follow STATUS/`mfeStdUrl` **`:9301`** · PLAN `:9330` = doc drift (Design/Dev không đổi port packet) |
| UNCLEAR-DOMAIN-MAP-HOME | **Handoff SA:** thêm DOMAIN-MAP row `web-rmms-home` · chrome Auth+Notification · deep cite peer — **không** block PO DoR |

## 10. Definition of Done (PO → Design)

1. Prototype phone ≤430 · zones HM-00…06 · Android icon/layout 1-1.
2. Guest vs staff states · không `me*`.
3. Grid 6 + wallet + badge + profile đúng inventory.
4. Labels = copy keys · không hardcode VN form.
5. `reviewUrl` + design.md · DES-GRID N/A ghi rõ.
6. Handoff SA: DOMAIN-MAP row + Mobile.Bff only.

## 11. Handoff

| Role | Need |
|------|------|
| Design | HM zones · Android parity · prototype + reviewUrl · phone frame |
| SA | DOMAIN-MAP `web-rmms-home` · confirm Mobile.Bff paths · **cấm** invent Home CRUD |
| TL/Dev/QA | (sau) Home page + nav · guest/staff · badge Live · no me |

## Version meta

`skillVersion=2026.09.05.03` · `schemaVersion=1` · `contentHash=sha256:6f74282b807da7f2cc1aa57ac64848cd1d75ff3383c0f432eaad7bea53fff80e` · `rulesVersion=2026.09.25.2` · `writtenAt=2026-09-25T11:55:00.000Z` · `taskId=task_22796b97`
