# Data-analy — controlHint — web-rmms-ui-align

| Field | Value |
|-------|-------|
| feature | `web-rmms-ui-align` |
| title | Align UI Home · tab · Field theo prototype iOS/Android |
| packKind | `list` |
| changeScope | `edit_page` |
| mode | `feature_context` |
| status | `done` |
| skillId | `agent-data-analy` |
| skillVersion | `2026.09.05.03` |
| schemaVersion | `1` |
| workflowVersion | `2026.09.19.02` |
| rulesVersion | `2026.09.25.2` |
| versionGate | `ok` |
| contentHash | `sha256:554b56d529a010b6225fe92fc369904fd070a80f12503c35e914643f82bcfe4b` |
| analyzedAt | `2026-09-26T06:39:04.505Z` |
| updatedAt | `2026-09-26T06:39:04.505Z` |
| cluster | — (không Excel · CTX + golden prototype · demo N/A) |
| taskId | `task_428b7f20` |
| realData | `specs/_data-analy/features/web-rmms-ui-align-real-data.md` |
| filterBar | **N/A** — chrome align · list peers giữ `{peer}-filter-bar.md` |
| beRepo | `D:/AI-QLBD/Linm.RMMS.WebService` · DOMAIN-MAP · **cấm ERP.*** |
| bffRepo | `D:/AI-QLBD/Linm.RMMS.Mobile.Bff` · `:5202` |
| uiRepo | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Mobile` |
| mfeStdUrl | `http://localhost:9301/web-rmms-ui-align` |
| goldenUi | `specs/mobile-p1/ui/prototype/android/index.html` · `ios/index.html` · **cấm** sửa |
| runMode | `full_pipeline` · edit_page |

> Data-analy **đề xuất** controlHint. Design **chốt** control-map + reviewUrl. SA **chốt** path đã cite.  
> **Cấm** Dev invent route/API · mock list · Web BFF · MapService browser · sửa prototype native.

## Sources

| Source | Path | note |
|--------|------|------|
| Context | `docs/context/features/web-rmms-ui-align.md` | P0 · edit_page delta |
| Peer CTX | `web-rmms-shell.md` · `web-rmms-home.md` · `mobile-bff-map.md` | current 4-tab baseline |
| Golden | android/ios `index.html` zone `data-des-id` | read-only |
| DOMAIN-MAP | `Linm.RMMS.WebService/docs/DOMAIN-MAP.md` | peer slugs · **cấm ERP.*** |
| BFF | `GisTilesController` · `MobileApiProxyController` · Auth rewrite | `:5202` |
| MFE | `src/index.tsx` routes · `WebRmmsShell` | existing only |

## § Delta Current vs New

| Area | Current | New |
|------|---------|-----|
| TabBar | 4: home·field·incident·work | **5** + `me` · labels Trang Chủ · Tuần đường · Vấn đề · Công việc · Tôi |
| Tab Me | cấm `me*` (shell/home CTX) | **In** DES-MOB-ME · rows profile/offline/signal/feedback/cam/ops/logout · settings=toast |
| Screens | peer routes live | Align chrome/layout/icon tới DES-MOB-* · **không** route mới |
| Map tiles | Mobile.Bff gis/tiles | Giữ · **cấm** `:5021` browser · **cấm** Web BFF |
| Labels | `useFormOptions` / LOOKUP_STATIC | Giữ · copy key `tab.*` · `me.*` · home/field |

## Kind / zones (handoff Design)

| Zone | Pattern | DoD |
|------|---------|-----|
| DES-MOB-TABBAR | TabBar 5 · stroke icons | active state · `max-width` 430 phone frame |
| DES-MOB-HOME (+FAQ/PRIVACY) | Home guest/staff | parity prototype · live badge/profile |
| DES-MOB-PAT-* · ATT · CI | Field stack | doors + map/history/attendance/offline/check-in |
| DES-MOB-INC-* · VIS | Incident | list/form/detail/vis |
| DES-MOB-MNT · EST | Work | WO list · estimate |
| DES-MOB-ASSET-* · AI · GIS · SUPERVISE · NT · REFLECT · CAM-PATROL | Home/Field deep | existing routes only |
| DES-MOB-ME · OPS · CAM-VIEW · FEEDBACK | Me | rows trên · settings toast |

**Skip:** invent DES-GRID desktop · sửa iOS/Android HTML · mock list SSOT.

## Control hint — shell / chrome

| Field key | Label | controlHint | catalogKind | Notes |
|-----------|-------|-------------|-------------|-------|
| tab.items | tab.* | TabBar | LOOKUP_STATIC | 5 items · stroke SVG |
| login.user | tài khoản | Text | — | overlay |
| login.pass | mật khẩu | Password | — | overlay |
| home.guest.faq | FAQ | Static/Nav | LOOKUP_STATIC | copy |
| home.guest.privacy | privacy | Static/Nav | LOOKUP_STATIC | copy |
| home.quick.* | quick | Button/Nav | — | nav only |
| home.grid.* | grid | Button/Nav | — | 6 ô → existing routes |
| home.notify.badge | badge | Number RO | — | overview |
| home.profile.name | tên | Text RO | — | profile |
| field.doorPatrol | tuần đường | Button/Nav | — | optional sessions badge |
| field.doorInspect | tuần kiểm | Button/Nav | — | optional sessions badge |
| me.profile | hồ sơ | Text RO | — | profile header |
| me.offlineQueue | hàng đợi | Button/Nav | — | `/web-rmms-offline` |
| me.signal | tín hiệu | Text RO derived | — | net status |
| me.feedback | góp ý | Button/Nav | — | peer |
| me.camView | camera xem | Button/Nav | — | peer |
| me.notify | thông báo | Button/Nav | — | `/web-rmms-ops` + badge |
| me.settings | cài đặt | Button toast | — | **cấm** màn |
| me.logout | đăng xuất | Button | — | clear JWT |
| map.baseLayer | nền Đường/Phố/Vệ tinh | Segmented | LOOKUP_STATIC | patrol/gis map |
| map.fit | toàn tuyến | Button | — | map tools |

## Control hint — deep lists/forms

| Surface | controlHint policy |
|---------|-------------------|
| Incident / Work / Asset / NT / … | **Reuse** peer `{feature}-control-hint.md` · **cấm** re-invent field set trong slug này |
| Search / filters trên list | Peer `LinErpListFilterBar` / `{peer}-filter-bar.md` |
| Catalog fields | SearchInput + catalogKind (road-route · asset-types · org-unit …) per peer |
| Free text / note | Text |
| Dates | Date |
| Coords / KM | Number + Text · GPS gate peer |

## Ambiguous / open Q (PO)

| ID | Q |
|----|---|
| GAP-DA-UIALIGN-ME-01 | Route exact cho `cam-view` / `feedback` trên MFE nếu chưa mount — PO confirm path alias vs enqueue peer |
| GAP-DA-UIALIGN-TAB-01 | Nhãn tab «Tuần đường» vs «Field» copy key — Design chốt `tab.field` VN |

## packKind đề xuất

`list` (shell chrome + nav align · không master form mới · không report source).

## Version footer

skillVersion=`2026.09.05.03` · schemaVersion=`1` · contentHash=`sha256:554b56d529a010b6225fe92fc369904fd070a80f12503c35e914643f82bcfe4b` · rulesVersion=`2026.09.25.2` · status=`done`
