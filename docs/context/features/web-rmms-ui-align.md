# Feature context — web-rmms-ui-align

> **Slug:** `web-rmms-ui-align` · **Wave:** UI align Home · Tab · Field theo golden prototype  
> **Status:** draft → data_analy · **packKind:** `list` · **changeScope:** `edit_page`  
> **Demo:** N/A (UI chrome align · **cấm** mock list / demo-json SSOT)  
> **Golden UI (read-only):** `specs/mobile-p1/ui/prototype/android/index.html` · `specs/mobile-p1/ui/prototype/ios/index.html` · **cấm** sửa iOS/Android  
> **MFE:** `Linm.Web.RMMS.Mobile` · khung phone `max-width` 430px · **cấm** nhét vào MFE desktop Asset/Gis/Camera  
> **BE:** `Linm.RMMS.WebService` + Mobile.Bff `:5202` · **cấm ERP.*** / Domains/Master · **cấm** Web BFF base client · **cấm** MapService `:5021` từ trình duyệt  
> **mfeStdRoute:** `/web-rmms-ui-align` (alias review) · live routes = existing shell/feature paths  
> **Queue:** `/agent-qldb-workflow` · alias `web-rmms-ui-align`

## 1. Mục tiêu

Align UI **đã ship** trên MFE Mobile với golden prototype Android/iOS: Tab bar → từng màn feature trong prototype. **Cấm** route sản phẩm mới. **Cấm** mock list. Dữ liệu live giữ Mobile.Bff.

## 2. Delta vs current (HARD)

| Mục | Current (shell/home đã ship) | New (align) |
|-----|------------------------------|-------------|
| Tab bar | 4 tab: Home · Field · Incident · Work · **không** Me | **5 tab:** Trang Chủ · Tuần đường · Vấn đề · Công việc · **Tôi** · icon stroke = prototype |
| Tab Tôi | Out of scope (CTX shell/home cấm `me*`) | **In:** hồ sơ · hàng đợi mất sóng · tín hiệu · Góp ý · Camera xem · Thông báo · Đăng xuất · **skip** hàng Cài đặt (toast only, không màn) |
| Layout | Android 1-1 · ≤430px | Giữ ≤430px · sync zone ids DES-MOB-* từ prototype (android ≡ ios) |
| Data | Mobile.Bff live | Giữ live · **cấm** invent API / Web BFF / MapService browser |
| Routes | Existing `/web-rmms-*` + aliases | **Reuse only** · map zone → route đã có |

## 3. Zones / screens (ids only — prototype)

| Zone id | Screen id | Tab | MFE route (existing) |
|---------|-----------|-----|----------------------|
| DES-MOB-TABBAR | `tabBar` | — | shell chrome |
| DES-MOB-LOGIN | `sc-login` | auth | login overlay |
| DES-MOB-HOME | `sc-home` | home | `/web-rmms-home` |
| DES-MOB-HOME-FAQ | `sc-faq` | home | home FAQ |
| DES-MOB-HOME-PRIVACY | `sc-privacy` | home | home privacy |
| DES-MOB-PAT-HOME | `sc-patrol-home` | field | `/web-rmms-field` · doors |
| DES-MOB-PAT-MAP | `sc-patrol-map` | field | `/web-rmms-patrol-map` |
| DES-MOB-PAT-LIST | `sc-patrol-history` | field | field history peer |
| DES-MOB-PAT-DETAIL | `sc-patrol-detail` | field | peer |
| DES-MOB-PAT-OFFLINE | `sc-patrol-offline` | home/me | `/web-rmms-offline` |
| DES-MOB-ATT | `sc-attendance` | field | `/web-rmms-attendance` |
| DES-MOB-CI-DETAIL | `sc-checkin-detail` | field | attendance peer |
| DES-MOB-INC-LIST | `sc-incident-list` | incident | `/web-rmms-incident` |
| DES-MOB-INC-FORM | `sc-inc-form` | home | `/web-rmms-incident/new` |
| DES-MOB-INC-DETAIL | `sc-incident-detail` | incident | `/web-rmms-incident/:id` |
| DES-MOB-GIS | `sc-gis-map` | home | `/web-rmms-gis` |
| DES-MOB-ASSET-HUB | `sc-asset-hub` | home | `/web-rmms-asset-hub` |
| DES-MOB-ASSET-32 | `sc-asset-types` | home | `/web-rmms-asset-kcht` |
| DES-MOB-ASSET-TYPE | `sc-asset-type` | home | peer |
| DES-MOB-ASSET-LIST | `sc-asset-list` | home | `/web-rmms-asset-list` |
| DES-MOB-ASSET-DETAIL | `sc-asset-detail` | home | peer |
| DES-MOB-ASSET-COLLECT | `sc-asset-collect` | home | `/web-rmms-asset-collect` |
| DES-MOB-ASSET-ADJUST | `sc-asset-adjust` | home | `/web-rmms-asset-adjust` |
| DES-MOB-ASSET-AI | `sc-asset-ai` | home | `/web-rmms-asset-ai` |
| DES-MOB-ASSET-FORM | `sc-asset-form` | home | peer |
| DES-MOB-AI | `sc-ai-hub` | home | asset-ai hub |
| DES-MOB-VIS-CAPTURE | `sc-vis-capture` | incident | `/web-rmms-vis-capture` |
| DES-MOB-DET-HITL | `sc-det-hitl` | home | `/web-rmms-asset-ai/hitl/:id` |
| DES-MOB-EST | `sc-estimate` | work | `/web-rmms-estimate` |
| DES-MOB-MNT-LIST | `sc-mnt-list` | work | `/web-rmms-work` |
| DES-MOB-NGHIEM-THU | `sc-nghiem-thu` | field | `/web-rmms-nghiem-thu` |
| DES-MOB-NGHIEM-THU-CREATE | `sc-nghiem-thu-create` | field | peer create |
| DES-MOB-FIELD-REFLECT | `sc-field-reflect` | field | `/web-rmms-field-reflect` |
| DES-MOB-CAM-PATROL | `sc-cam-patrol` | field | `/web-rmms-cam-patrol` |
| DES-MOB-SUPERVISE | `sc-supervise` | home | `/web-rmms-supervise` |
| DES-MOB-OPS | `sc-ops` | me | `/web-rmms-ops` |
| DES-MOB-CAM-VIEW | `sc-cam-view` | me | peer cam-view route nếu đã có · else gap PO |
| DES-MOB-FEEDBACK | `sc-feedback` | me | peer feedback |
| DES-MOB-ME | `sc-me` | me | **new tab root** (reuse routes, không slug API mới) |

## 4. Tab bar 5 (LOOKUP_STATIC copy)

| data-tab | Label key | Icon (prototype stroke) |
|----------|-----------|-------------------------|
| `home` | `tab.home` · Trang Chủ | `#i-home` |
| `field` | `tab.field` · Tuần đường | `#i-mappin` |
| `incident` | `tab.incident` · Vấn đề | `#i-warning` |
| `work` | `tab.work` · Công việc | `#i-wrench` |
| `me` | `tab.me` · Tôi | `#i-person` |

## 5. Tab Tôi rows

| Row | Action | Route / behavior |
|-----|--------|------------------|
| Profile RO | `GET auth/profile` | header card |
| Hàng đợi mất sóng | nav | `/web-rmms-offline` |
| Tín hiệu | device/net derived | RO subline |
| Góp ý | nav | feedback peer |
| Camera xem | nav | cam-view peer |
| Thông báo | nav + badge | `/web-rmms-ops` · `GET notification/overview` |
| Cài đặt | **toast only** | **cấm** màn mới |
| Đăng xuất | clear JWT | auth logout |

## 6. API Live (prefix)

| Surface | Path |
|---------|------|
| Mobile BFF | `http://localhost:5202` · `mobile-bff/api/v1` |
| Auth | `auth/login` · `auth/refresh-token` · `auth/profile` |
| Notify | `GET notification/overview` |
| Field badge | `GET patrol/sessions` (optional) |
| GIS tiles | `GET mobile-bff/api/v1/gis/tiles/{layer}/{z}/{x}/{y}.pbf` · `GisTilesController` · **cấm** browser → `:5021` |
| GIS overlay | `gis/clusters` · `gis/geojson` via Mobile proxy → RMMS |
| Peer CRUD | cite DOMAIN-MAP per feature slug · **cấm** invent |

## 7. HARD rules

| Rule | |
|------|--|
| changeScope | `edit_page` · align UI only |
| Routes | **cấm** product route mới |
| Mock | **cấm** mock list / in-app demoItems SSOT |
| Labels | `useFormOptions()` / copy key · **cấm** hardcode VN trên form |
| BFF | ONLY Mobile.Bff `:5202` |
| Map | TileUrl = Mobile.Bff gis/tiles · **cấm** Web BFF · **cấm** OSM.org tile SSOT |
| Native | **cấm** sửa files prototype iOS/Android |
| Filter | List peers giữ filter-bar riêng · feature này **không** invent filter-bar chrome |

## 8. Persona

| Zone | Ai |
|------|-----|
| Home guest | Chưa JWT · FAQ/privacy · login |
| Home/Field/Incident/Work/Me staff | Nhân viên hiện trường / cán bộ QLĐB |
| Field doors | BDTX (tuần đường) · QLĐB VP/Khu (tuần kiểm) |

## Version meta

| Field | Value |
|-------|-------|
| skillVersion | `2026.09.05.03` |
| schemaVersion | `1` |
| contentHashSource | this CTX + android/ios prototype index.html |
| writtenAt | `2026-09-26T06:40:00.000Z` |
| taskId | `task_428b7f20` |

## Implement tracking

| lane | phase | status | updatedAt |
|------|-------|--------|-----------|
| web | `po` | `pending` | `2026-09-26T06:41:23.451Z` |
| mobile | — | — | — |
