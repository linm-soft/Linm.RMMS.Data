# html-to-native-map — nghiem-thu-create

**Sources:** dual `#sc-nghiem-thu-create` · DA controlHint · PO · real-data §B · map skill `html-to-native-map.md`  
**changeScope:** `new_page` · packKind sheet · sheet→screen  
**Cấm** WebView bọc HTML · invent `nghiem-thu-create` / `nghiem-thu-files` · ERP.* · demoItems SSOT

| Demo | Zone | HTML / token | iOS kit | Android kit | Notes |
|------|------|--------------|---------|-------------|-------|
| DES-MOB-NGHIEM-THU-CREATE | Header | `.nav-bar` / `.top-bar` · `.nav-title` | `LinmTopBar` | same | title 17 / ~20 |
| navCancel | Leading | `.nav-btn` **Hủy** (iOS) · `.icon-btn` + `#i-chevron-left` (Android) | TextButton / leading | icon-btn | leave-dirty → `nghiem-thu` |
| navSave | Trailing | `.nav-trail` **Lưu** | TextButton | same | POST draft · **cấm** enqueue |
| templateRow | ListRow | `.list-row` · label **Mẫu** · value ≥16 · `#i-chevron-right` | `LinmListRow` | same | → `#sheet-mau` Select |
| locationRow | ListRow+GPS | `.list-row` · `#i-mappin` · value Zone·GPS | `LinmListRow` | same | `ZoneOrgCode`·`Route`·`FieldInfo` |
| attachRow | PhotoRow | `.photo-row` / `.list-row` · `#i-camera` | PhotoRow pattern | same | max 10 · MediaIds |
| picker | Select | `#sheet-mau` · options mau-01…10 | Select list | same | LOOKUP_STATIC init-data |
| Toast OK/Fail | Banner | `#toast` | `LinmToast` | Snackbar | **cấm** alert |
| DES-MOB-GPS-DENY | Modal | `#modal-gps` | feature overlay | Material dialog | **MOB-PERM-OS-01** OS dialog first · primary **Mở Cài đặt** · **cấm** clipboard |
| DES-MOB-LEAVE | Modal | `#modal-leave` | LeaveConfirm | same | Must dirty |
| Shell Tab 5 | Chrome | `.tabbar` / `.nav` · `data-tab=field` | `LinmTabBar` | NavigationBar | **giữ** |
| Entry | — | list trailing **Tạo** | reuse `nghiem-thu` | reuse | **không** reimplement |

## CSS token (ý nghĩa — không clone px)

| CSS demo | Native |
|----------|--------|
| `--blue` / `#0C84C0` | brand primary tint |
| `--surface` `#F2F2F7` | page background |
| `.row-sub` 13 / `.row-title` 16 / title 17 | Dynamic Type / M3 scale |
| list / photo padding 8–16 | HIG 8pt · M3 4dp grid |

## JS hành vi → native

| Demo JS | Native |
|---------|--------|
| appear default mau-03 | `GET …/init-data` → TemplateTypes · bind Label |
| openMau / pick mau-* | LOOKUP_STATIC Select · set `TemplateType` |
| GPS preview / `?deny=1` | CoreLocation / Fused · OS permission first · `DES-MOB-GPS-DENY` **Mở Cài đặt** |
| openCapture / attach | FileService `files/*` → guid → `MediaIds` |
| onSave | `POST patrol/nghiem-thu` `Status=draft` · toast Code |
| `?fail=1` | toastFail · **cấm** fake NT-* |
| onCancel dirty | `DES-MOB-LEAVE` · Thoát → `nghiem-thu` |
| goBack clean | pop → `nghiem-thu` |

## BFF bind (Design note · SA chi tiết)

| Zone | Method · Path |
|------|----------------|
| initTemplates | `GET mobile-bff/api/v1/patrol/nghiem-thu/init-data` |
| Create | `POST mobile-bff/api/v1/patrol/nghiem-thu` |
| Media | `mobile-bff/api/v1/files/*` |
| Assignee / InspectedAt | auth profile · device UTC |

**Cấm** invent path ngoài bảng · enqueue Lưu/files.

## Version meta

| Field | Value |
|-------|-------|
| skillId | mobile-ui-ux-analy |
| generatedAt | 2026-09-19T17:10:00.000Z |
| contentHash | sha256:c2b17a793325c8eb40cc64a98b7775db138841107cd178cd6a6aa12ba8cfa66f |
| taskId | `task_b6b0bafc` |

---
<!-- Version meta: skillId=mobile-ui-ux-analy schemaVersion=1 -->
