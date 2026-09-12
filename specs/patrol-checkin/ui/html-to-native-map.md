# html-to-native-map — patrol-checkin

| Demo | Zone | HTML / token | iOS kit | Android kit | Notes |
|------|------|--------------|---------|-------------|-------|
| DES-MOB-PAT-CHECKIN-SHEET | sheet | `#sheet-checkin` | `LinmBottomSheet` | same | pack owner · edit_page giữ |
| Sheet nav cancel | leading | Hủy · `.nav-btn` | TextButton | `TextButton` | → leave |
| Sheet nav save | trailing | Lưu bold | TextButton | same | disable khi sai điểm |
| Sheet title | center | Ghi điểm tuần 17 | sheet title | same | |
| DES-MOB-LOC-MISMATCH | banner | `#ci-match-banner` | Banner ok/warn | same | vs **BE plan** khi live |
| planPoint | field | `#ci-plan` · readonly | `LinmTextField` | same | BE plan-points / session label · **cấm** invent coords |
| routeChainage | field | Tuyến / lý trình | `LinmTextField` | same | bind `Route` · `GET patrol/sessions` |
| gpsPinned | field | `#ci-gps` | `LinmTextField` | same | **live GPS only** · **cấm** fake |
| distPlan | field | `#ci-dist` | `LinmTextField` | same | haversine(GPS, planBE) |
| content | textarea | `#ci-content` | `LinmTextArea` | same | → POST `content` |
| photos label | section | `.section-label` Ảnh | Text 13 | same | Android parity |
| photos | PhotoRow | `#ci-photos` · `data-bind=attachmentId[]` | PhotoRow | same | FileService commit · **không** local UUID SSOT |
| addPhoto | camera | `#i-camera` · `openCapture('checkin')` | `LinmIconButton` | same | capture → files init/PUT/commit |
| btnSave | primary | `#ci-save-btn` | `LinmPrimaryButton` | same | POST check-ins · `attachmentId[]` |
| btnCancelFooter | secondary | Hủy | `LinmSecondaryButton` | same | leave / close |
| Toast ok / block | banner | `#toast` | `LinmToast` | same | |
| DES-MOB-LEAVE | modal | `#modal-leave` | in-sheet overlay | `Dialog` trên sheet | **cấm** system · **cấm** under-sheet |
| DES-MOB-GPS-DENY | modal | `#modal-gps` | reuse in-sheet | `Dialog` wrap | **cấm** system |
| DES-MOB-CI-DETAIL | screen | `#sc-checkin-detail` | `LinmTopBar` + rows | same | title Ghi điểm tuần |
| Detail photos | PhotoRow | filled slots | preview `GET files/{id}/object` JWT | same | khi có attachmentId |
| Detail back | leading | Ca + chevron | BackButton | `IconButton` | `go('patrol-detail')` |
| Detail banner | ok | Đã lưu · {time} | Banner | same | |
| Detail rows | list | Điểm KH · Cách điểm | ListRow | same | |
| Shell Tab 5 | chrome | `.tabbar` / `.nav` | `LinmTabBar` | NavigationBar | **giữ** · không invent |
| Pin CTA / map | — | — | — | — | sibling · **không map** |

## BFF bind (Design note · SA chi tiết)

| UI | Method · Path | Status |
|----|---------------|--------|
| Tuyến / prefill | `GET patrol/sessions` · `GET sessions/{id}` | live |
| Điểm KH / match | `GET sessions/{id}/plan-points` | **GAP-MOB-CI-PLAN-BE-01** · SA Kind E |
| Save | `POST sessions/{id}/check-ins` body `attachmentId[]` | **live** (GAP-MOB-BFF-01 closed) |
| Ảnh upload / preview | `files` init/PUT/commit · `files/{id}/object` | FileService · GAP-MOB-BFF-FILE-01 nếu NuGet thiếu |

**Cấm** invent `api/v1/patrol-checkin` · `api/v1/mobile-files` · plan=GPS SSOT · fake 200.

## Version meta

| Field | Value |
|-------|-------|
| skillId | mobile-ui-ux-analy |
| generatedAt | `2026-09-12T12:55:00.000Z` |
| contentHash | sha256:patrol-checkin-control-hint-20260912-edit |
| changeScope | edit_page |
| taskId | task_e4a48d29 |

---
<!-- Version meta: skillId=mobile-ui-ux-analy contentHash=sha256:patrol-checkin-control-hint-20260912-edit -->
