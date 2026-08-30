# html-to-native-map — patrol-checkin

| Demo | Zone | HTML / token | iOS kit | Android kit | Notes |
|------|------|--------------|---------|-------------|-------|
| DES-MOB-PAT-CHECKIN-SHEET | sheet | `#sheet-checkin` | `LinmBottomSheet` | same | pack owner |
| Sheet nav cancel | leading | Hủy · `.nav-btn` | TextButton trailing sheet | `TextButton` | → leave |
| Sheet nav save | trailing | Lưu bold | TextButton | same | disable khi sai điểm |
| Sheet title | center | Ghi điểm tuần 17 | sheet title | same | |
| DES-MOB-LOC-MISMATCH | banner | `#ci-match-banner` | Banner ok/warn | same | size 13 |
| planPoint | field | label + readonly input | `LinmTextField` | same | label 13 / ≥16 |
| routeChainage | field | Tuyến / lý trình | `LinmTextField` | same | bind `Route` |
| gpsPinned | field | Định vị ghim tự động | `LinmTextField` | same | live GPS · **cấm** fake |
| distPlan | field | Cách điểm KH | `LinmTextField` | same | haversine |
| content | textarea | Nội dung | `LinmTextArea` | same | editable |
| photos label | section | `.section-label` Ảnh | Text 13 | same | Android parity |
| photos | PhotoRow | `.photo-row` + slots | PhotoRow | same | |
| addPhoto | camera | `#i-camera` · `openCapture('checkin')` | `LinmIconButton` | same | cùng `d=` |
| btnSave | primary | Ghi nhận điểm tuần | `LinmPrimaryButton` | same | `saveCheckin()` |
| btnCancelFooter | secondary | Hủy | `LinmSecondaryButton` | same | leave / close |
| Toast ok / block | banner | `#toast` | `LinmToast` | same | |
| DES-MOB-LEAVE | modal | `#modal-leave` | in-app overlay | Material dialog | **cấm** system |
| DES-MOB-GPS-DENY | modal | `#modal-gps` | reuse | same | **cấm** system |
| DES-MOB-CI-DETAIL | screen | `#sc-checkin-detail` | `LinmTopBar` + rows | same | title Ghi điểm tuần |
| Detail back | leading | Ca + chevron | BackButton | `IconButton` | `go('patrol-detail')` |
| Detail banner | ok | Đã lưu · {time} | Banner | same | |
| Detail rows | list | Điểm KH · Cách điểm | ListRow | same | |
| Shell Tab 5 | chrome | `.tabbar` / `.nav` | `LinmTabBar` | NavigationBar | **giữ** · không invent |
| Pin CTA / map | — | — | — | — | sibling · **không map** |

**BFF bind (Design note · SA chi tiết):** `GET patrol/sessions` prefill · `POST patrol/sessions/{id}/check-ins` (**GAP-MOB-BFF-01** MISSING → P1 local + `patrol-offline`) · GPS/camera device · **cấm** invent `api/v1/patrol-checkin`.

## Version meta

| Field | Value |
|-------|-------|
| skillId | mobile-ui-ux-analy |
| generatedAt | 2026-08-28T20:05:00.000Z |
| contentHash | sha256:patrol-checkin-control-hint-20260828 |

---
<!-- Version meta: skillId=mobile-ui-ux-analy contentHash=sha256:patrol-checkin-control-hint-20260828 -->
