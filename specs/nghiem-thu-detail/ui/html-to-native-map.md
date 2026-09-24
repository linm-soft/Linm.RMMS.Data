# html-to-native-map — nghiem-thu-detail

**Sources:** dual `#sc-nghiem-thu-detail` · DA controlHint · PO · real-data §B  
**changeScope:** `edit_page` · packKind sheet · sheet→screen · View+Edit cùng slug  
**Cấm** WebView bọc HTML · invent `nghiem-thu-detail` / `files-nt` · ERP.* · demoItems SSOT · DELETE P1

| Demo | Zone | HTML / token | iOS kit | Android kit | Notes |
|------|------|--------------|---------|-------------|-------|
| DES-MOB-NGHIEM-THU-DETAIL | Header | `.nav-bar` / `.top-bar` · `.nav-title` | `LinmTopBar` | same | title 17 / ~20 · `Code` |
| navClose | Leading View | `.nav-btn` **Đóng** (iOS) · `.icon-btn` + `#i-chevron-left` (Android) | TextButton | icon-btn | → `nghiem-thu` |
| navEdit | Trailing View | `.nav-trail` **Sửa** | TextButton | same | Edit cùng slug |
| navCancel | Leading Edit | **Hủy** / chevron | TextButton | icon-btn | leave-dirty → View |
| navSave | Trailing Edit | **Lưu** | TextButton | same | PUT · **cấm** enqueue |
| templateRow | ListRow | `#templateRow` · label **Mẫu** · value ≥16 | `LinmListRow` | same | `#sheet-mau` |
| resultRow | Select | `#resultRow` | `LinmListRow` | same | `#sheet-result` |
| resultNote | Text | `#resultNote` input ≥16 | TextField | same | `ResultNote` |
| scoreList | Checklist | `#score-list` · verdict | Checklist | same | init-data criteria |
| routeRow | ListRow | `#routeRow` | `LinmListRow` | same | `Route` |
| kmRow | ListRow | `#kmRow` | `LinmListRow` | same | `KmFrom`/`KmTo` |
| fieldRow | ListRow+GPS | `#fieldRow` · `#i-mappin` | `LinmListRow` | same | deny → GPS modal |
| statusRow | Select | `#statusRow` | `LinmListRow` | same | `#sheet-status` · done ⇒ ResultCode |
| workTime | DateTime | `#workTime` | DateTime | same | optional |
| note | Text | `#note` | TextField | same | `Note` |
| attachRow | PhotoRow | `#attachRow` · `#photo-row` · `#i-camera` | PhotoRow pattern | same | max 10 · Edit mới thêm |
| Toast OK/Fail/404 | Banner | `#toast` | `LinmToast` | Snackbar | **cấm** alert |
| DES-MOB-GPS-DENY | Modal | `#modal-gps` | feature overlay | Material dialog | **Mở Cài đặt** · **cấm** clipboard |
| DES-MOB-LEAVE | Modal | `#modal-leave` | LeaveConfirm | same | Thoát → View |
| Shell Tab 5 | Chrome | `.tabbar` / `.nav` · `data-tab=field` | `LinmTabBar` | NavigationBar | **giữ** |
| Entry | — | list row `#sc-nghiem-thu` | reuse list | reuse | **không** reimplement list |

## CSS token (ý nghĩa — không clone px)

| CSS demo | Native |
|----------|--------|
| `--blue` / `#0C84C0` | brand primary tint |
| `--surface` `#F2F2F7` | page background |
| `--green` / `--orange` / `--danger` | verdict Đạt / Khấu trừ / Không đạt |
| `.row-sub` 13 / `.row-title` 16 / title 17 | Dynamic Type / M3 scale |
| list / photo padding 8–16 | HIG 8pt · M3 4dp grid |

## JS hành vi → native

| Demo JS | Native |
|---------|--------|
| View default | `GET …/nghiem-thu/{id}` bind §B |
| `?missing=1` | 404 toast «Phiếu không tồn tại» · pop list |
| onEdit | cùng slug Edit · không route mới |
| openMau / pick | `TemplateType` + `TemplateLabel` · reload criteria |
| openResult / openStatus | LOOKUP_STATIC init-data |
| cycleScore | `Scores[]` verdict `pass`/`fail`/`n_a` · replace-set khi Lưu |
| GPS / `?deny=1` | OS permission first · `DES-MOB-GPS-DENY` · chặn Lưu |
| openCapture | `files/*` guid → `MediaIds` max 10 |
| onSave / `?fail=1` | `PUT` · toast Code hoặc fail · **cấm** fake NT-* |
| Status=done thiếu kết quả | toast «Cần kết quả khi hoàn thành» · không PUT |
| onCancel dirty | `DES-MOB-LEAVE` · Thoát discard về View |
| onClose View | pop → `nghiem-thu` refresh |

## BFF bind (Design note · SA chi tiết)

| Zone | Method · Path |
|------|----------------|
| Open | `GET mobile-bff/api/v1/patrol/nghiem-thu/{id}` |
| Catalog | `GET mobile-bff/api/v1/patrol/nghiem-thu/init-data` |
| Save | `PUT mobile-bff/api/v1/patrol/nghiem-thu/{id}` |
| Media | `mobile-bff/api/v1/files/*` |
| Assignee / InspectedAt | auth · GET / device · ẩn |

**Cấm** invent path ngoài bảng · enqueue Lưu/files/scores · Step 4b.

## Version meta

| Field | Value |
|-------|-------|
| skillId | mobile-ui-ux-analy |
| generatedAt | 2026-09-19T19:45:00.000Z |
| contentHash | sha256:250aebcbfb9a445c517a0c40f399fee82a5a00d524499e7310fd7feac0fb5380 |
| taskId | `task_69705146` |

---
<!-- Version meta: skillId=mobile-ui-ux-analy schemaVersion=1 -->
