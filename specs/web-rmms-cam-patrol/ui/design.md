# Design — web-rmms-cam-patrol

| Field | Value |
|-------|-------|
| feature | `web-rmms-cam-patrol` |
| title | Camera tuần |
| this role | `design` · `/agent-design` |
| status | `confirmed` (autoApprove=ON) |
| design_confirm | **approve** (`task_9531bc76`) |
| changeScope | `edit_page` |
| packKind | **`list`** (PO confirm · UI = **phone Field cam** · **≠** Kind B desktop) |
| lane | `web` |
| stack | `web_mfe_phone` · `Linm.Web.RMMS.Mobile` · `max-width: 430px` |
| formPattern | Mobile full CP-01 · **N/A** ERP Modal/Slideout |
| DES-GRID / LinErpListFilterBar | **N/A** — phone Field · **cấm** clone |
| Report AC / DES-RPT | **N/A** |
| shared_grid_example | **N/A** (phone) |
| real_view_parity | **v1** (keep zones · Pattern B delta) |
| peerStdUrl | `http://localhost:9301/camera-tuan` |
| mfeStdUrl | `http://localhost:9301/camera-tuan` |
| mfeStdRoute | `/camera-tuan` |
| productRoute | `/field/cam` |
| reviewUrl | `file:///D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-cam-patrol/ui/prototype/index.html` |
| reviewUrl ship | `file:///D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-cam-patrol/ui/prototype/index.html?ship=1` |
| reviewUrl GPS deny | `file:///D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-cam-patrol/ui/prototype/index.html?deny=1` |
| reviewUrl no session | `file:///D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-cam-patrol/ui/prototype/index.html?nosession=1` |
| reviewUrl frame fail | `file:///D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-cam-patrol/ui/prototype/index.html?fail=1` |
| reviewUrl Pattern B | `file:///D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-cam-patrol/ui/prototype/index.html?deny=1` (CTA enabled · banner on click) |
| demo | **N/A** · hash skip · **cấm** re-scan (**GAP-DES-DEMO-RESCAN-01**) |
| ui1to1 | Android `#sc-cam-patrol` · `DES-MOB-CAM-PATROL` / `DES-MOB-CAM-FINDER` · **bỏ Me tabs** · **ẩn score % ship** |
| mfe | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Mobile` |
| beRepo | `D:/AI-QLBD/Linm.RMMS.WebService` · Patrol + AiVision + Incident · **cấm ERP.*** |
| bff | `Linm.RMMS.Mobile.Bff` · `VITE_MOBILE_API_URL` · **cấm** web-bff client |
| controlHint | `specs/_data-analy/features/web-rmms-cam-patrol-control-hint.md` |
| realData | `specs/_data-analy/features/web-rmms-cam-patrol-real-data.md` · §A+§B PASS |
| deltaCite | `docs/plan/web-rmms-mobile/SUBMIT-VALIDATE.md` · Pattern B |
| prior | PO `confirmed` · `handoff/po-compact.md` · contentHash `sha256:c46ae5660ccba1b8e64ce8e5294acef77ceb4e0a75474372f2a3d3901efb5796` |
| keep | DEC-FRAME · DEC-SCORE · DEC-ENTRY · DEC-DETECT-DTO · zones · reviewUrl path |
| autoApprove | **ON** |
| e2eQa | ON queued `/agent-qa*` · **cấm** e2e / `yarn start:std` ở Design |
| `devSlash` | `/agent-dev` |
| updatedAt | `2026-09-27T10:45:00.000Z` |
| taskId | `task_9531bc76` |
| skillId | `agent-design` |
| skillVersion | `2026.09.05.03` |
| schemaVersion | `1` |
| workflowVersion | `2026.09.19.02` |
| rulesVersion | `2026.09.27.1` |
| versionGate | `ok` |
| contentHash | `sha256:c46ae5660ccba1b8e64ce8e5294acef77ceb4e0a75474372f2a3d3901efb5796` |

**Cấm:** Dev/BE trước confirm (đã autoApprove) · ERP.* · iOS/Android native dual · Kind B DES-GRID · `LinErpListFilterBar` · invent `cam-patrol/*` path · fake GPS/coords/class · score % ship · Me / cam-view / feedback · journal B–E · hardcode label keys ngoài `useFormOptions` · native `alert`/`confirm` · re-scan demo · `yarn build` / e2e / start:std ở role này · Route mobile-bff trên web-bff · **pre-disable** detect/confirm vì thiếu GPS/frame/session/online (**DEC-PATTERN-B**).

## 0. Context / Demo

| ID | Path | Notes |
|----|------|-------|
| CTX-01 | `docs/context/features/web-rmms-cam-patrol.md` | edit_page · § Delta |
| CTX-02 | `docs/plan/web-rmms-mobile/SCREENS.md` · `/field/cam` | Camera tuần |
| CTX-03 | `docs/plan/web-rmms-mobile/SUBMIT-VALIDATE.md` | Pattern B HARD |
| DEM | — | **N/A** · hash skip |
| DA-01 / DA-02 | `_data-analy/features/web-rmms-cam-patrol-{control-hint,real-data}.md` | inventory + §B |
| PO | `po/requirement.md` | DEC-PATTERN-B · keep DEC-* |
| Peer proto | `specs/mobile-p1/ui/prototype/android/index.html` `#sc-cam-patrol` | UI 1-1 zones (keep) |
| tokens | `docs/mobile-tokens.json` | color/radius/size |
| Prior design | `ui/design.md` (task_feb572c6) | keep zones · delta Pattern B |

## 1. Pattern & shell

| | |
|--|--|
| Frame | Phone **430px** · content-only · tokens primary `#0C84C0` · label **13** · field **≥16** |
| Shell | App topbar (back · title) · **không** ERP `LinPageLayout` catalog chrome |
| Surface | Full page CP-01 — **không** Modal/Slideout form |
| Filter | **N/A** — **cấm** LinErpListFilterBar |
| Leave | Dirty result card → discard local · **không** POST incident · **cấm** native dialog |
| Tabs | **không** Me tabs (out of feature) |
| Entry | **1 route** CP-01 · `PatrolType` stamp từ ca (DEC-ENTRY) · std `/camera-tuan` |
| Pattern B | CTA **enabled** khi thiếu GPS/frame/session/online · validate **on click** · `validationBanner` `string[]` · chỉ lock `detecting` / `confirming` |
| Align end | `/align-mobile-to-mfe` · CamPatrolPage SSOT · **no** tab/route/icon invent |
| Out | Me / cam-view / feedback · journal B–E · Excel toolbar · SearchInput user/route trên CP-01 · invent `cam-patrol` path |

## 2. Screens / zones (keep)

| Zone | Route | Surface | Wire |
|------|-------|---------|------|
| **CP-01** | `/camera-tuan` · `/field/cam` | Full cam | finder + stamp + detect + confirm/skip + **validationBanner** |
| **DES-MOB-CAM-PATROL** | screen owner `#sc-cam-patrol` | Screen | data-tab field peer |
| **DES-MOB-CAM-FINDER** | finder + FOV `.box` | CameraViewfinder | live + frame capture → ImageBase64 |
| stamp.route/km/type | overlay stamp | Text RO | GET `patrol/sessions` Đang tuần · **không** SearchInput |
| stamp.gps | overlay | GPS | lat,lng · ±accuracyM · chip đã chốt / GPS tắt |
| detect | actions | Button primary | POST `ai-vision/detect` · **chỉ** `disabled={detecting}` |
| **DES-MOB-CAM-RESULT** | card | Text/Chip | kind · surface · actionHint · **no score %** |
| confirm / skip | actions | Button | confirm **chỉ** `disabled={confirming}` · skip lock khi confirming |
| **validationBanner** | content | Banner `string[]` | Pattern B client errors on click · **cấm** `alert.warning` thay banner |
| **DES-MOB-GPS-DENY** | overlay | Modal optional | info sau bấm (không pre-disable CTA) |
| emptyNoSession | content | EmptyState / banner on click | no ca · **cấm** bịa ca |
| offlineBanner | content | Banner | mất sóng · **cấm** fake success |
| toast | overlay | Toast | API 4xx/5xx · ok / skip / fail · **cấm** banner API |

### IA

```
(auth) → Field hub (TD / TK)
  → CP-01 /field/cam (std /camera-tuan)
       Detect click → validate session/GPS/frame/online → banner | POST detect
       result card → Confirm click → validate → banner | POST incident | Skip local
```

## 3. Field inventory (Control = controlHint)

| uiField | screen | controlHint | Required | Bind / notes |
|---------|--------|-------------|----------|--------------|
| screenTitle | CP-01 | Text | — | key `cam.title` · «Camera tuần» |
| back | CP-01 | Button/Nav | — | → Field hub |
| finder | CP-01 | CameraViewfinder | * | DES-MOB-CAM-FINDER · live FOV |
| stamp.route | CP-01 | Text RO | * | session.Route · mã lạ → `--` |
| stamp.km | CP-01 | Text RO | — | session km / Note |
| stamp.type | CP-01 | Text RO | — | PatrolType từ ca |
| lat / lng / accuracyM | CP-01 | GPS | * (success) | device · gate ≤ 30 m **on click** |
| getGps / lockGps | CP-01 | Button | — | deny/poor → banner **khi bấm** detect/confirm |
| imageBase64 | CP-01 | CameraCapture | * (success) | JPEG→base64 · DEC-FRAME · `capture=environment` |
| engine | CP-01 | Hidden | * | `Engine=P1` |
| detect | CP-01 | Button | — | POST detect · Pattern B · lock `detecting` only |
| detection.id | CP-01 | Hidden | * (confirm) | DetectionId |
| detection.kind | CP-01 | Text/Chip | — | class · **cấm** fake |
| detection.surface | CP-01 | Text | — | hạng mục DTO |
| detection.score | — | — | — | **OUT ship** DEC-SCORE |
| detection.actionHint | CP-01 | Text | — | copy key |
| confirm | CP-01 | Button | — | POST incident · lock `confirming` only |
| skip | CP-01 | Button | — | dismiss · disabled khi `confirming` |
| validationBanner | CP-01 | Banner `string[]` | — | **new edit** Pattern B · lookupStatic keys |
| offlineBanner | CP-01 | Banner | — | peer offline |
| emptyNoSession | CP-01 | EmptyState / on-click banner | — | **cấm** bịa ca |

**Labels:** `useFormOptions()` / `cam.*` — prototype hiện nhãn VN để review; Dev wire key · **cấm** hardcode VN mới nếu key có.

### Hành vi (Design chốt — DEC-PATTERN-B)

| Case | UI (edit) |
|------|-----------|
| GPS deny \| accuracy > 30 m | CTA **enabled** · click → `validationBanner` (+ optional modal info) · **không** `disabled` trước · toast gpsDeny optional · **cấm** fake coords |
| No ca Đang tuần | EmptyState và/hoặc banner on detect click · **cấm** bịa stamp |
| Frame null / capture fail | click detect → banner/toast · card nil · **cấm** fake class (DEC-FRAME) |
| Offline | banner · click detect/confirm → banner errors · **cấm** fake success · **không** pre-disable confirm vì offline |
| Detect in-flight | `disabled={detecting}` only |
| Detect ok | result card · **ẩn** score % (DEC-SCORE) |
| Confirm in-flight | `disabled={confirming}` · skip also locked |
| Confirm | POST incident · DetectionId · HasGps · toast ok · API fail → toast (**không** banner API) |
| Skip | dismiss card · toast skip · **không** POST |
| Leave dirty card | discard local · no POST |

## 4. DES ↔ kit map

| Zone / DES | Kit / surface | Notes |
|------------|---------------|-------|
| Topbar | `LinmTopBar` | back chevron · title |
| Finder | CameraViewfinder + FOV | capture frame → base64 · **không** package mới P1 |
| Stamp | overlay Text | live session · **cấm** demo stamp ship |
| Result rows | `LinmListRow` / Chip | score row **không ship** |
| Detect / Confirm | `LinmPrimaryButton` | Pattern B · no pre-gate disable |
| Skip | `LinmSecondaryButton` | local dismiss |
| validationBanner | Banner `string[]` | SUBMIT-VALIDATE Pattern B |
| GPS deny | Modal optional + banner | **cấm** `window.alert` · **cấm** pre-disable CTA |
| Toast | `LinmToast` | ok / skip / fail / gpsDeny / API |

### kit_missing_confirm (CameraViewfinder)

**approve** (keep) · Finder = getUserMedia / Camera API + FOV + stamp + **frame capture** · **không** tạo `LinmCameraFinder` package mới P1.

## 5. API (Design note · SA cite DTO)

| Zone | Method · Path |
|------|----------------|
| Stamp ca | `GET …/patrol/sessions` · filter Đang tuần |
| Detect | `POST …/ai-vision/detect` · ImageBase64 · Lat · Lng · AccuracyM · Engine=P1 |
| Detection RO | `GET …/ai-vision/detections/{id}` optional |
| Confirm | `POST …/incident/incidents` · DetectionId · HasGps=true |

App base: `{BffBase}/mobile-bff/api/v1`. **Cấm** invent `cam-patrol/*` · ERP.* · web-bff client.

DEC-DETECT-DTO → SA cite Live (keep prior solution) · paths/DTO **không đổi** edit này.

## 6. Prototype review states

| State | URL query | Expect |
|-------|-----------|--------|
| Ready | (default) | finder + Detect enabled |
| Ship | `?ship=1` | result card · **ẩn** 91% |
| GPS deny | `?deny=1` | chip GPS tắt · CTA **enabled** · click → validationBanner (+ modal) |
| No session | `?nosession=1` | EmptyState · Detect vẫn reachable via re-show / banner on click |
| Frame fail | `?fail=1` | Detect → toast/banner fail · no card |
| Offline | `?offline=1` | offline banner · CTA enabled · click → validationBanner |

**Cấm** dùng `mfeStdUrl` / `yarn start:std` làm reviewUrl Design.

## 7. Out of pack

| Item | Owner |
|------|-------|
| Me / cam-view / feedback | other features |
| Journal / kết ca / tần suất | web-rmms-mobile-b…e |
| AiVision DTO field cite | SA (keep) |
| Frame capture Dev DoD | Dev (DEC-FRAME) |
| CamPatrolPage Pattern B wire | Dev (cite SUBMIT-VALIDATE) |
| E2E | `/agent-qa*` queued |
| Excel / SearchInput user-route CP-01 | OUT |

## 8. design_confirm

| | |
|--|--|
| Gate | `design_confirm` |
| Result | **approve** |
| Mode | autoApprove=ON · không chờ board |
| Next | `/agent-sa` · **stop** this task (GAP-PKT-ROLE-01) |

## 9. Edge scan (edit-web-mobile)

CP-01 có công tắc **Sự cố / Biển báo** ở trên khung, nút icon Bắt đầu/Dừng cạnh công tắc, và công tắc **Camera / Tải file** (mặc định Camera, icon kèm chữ, hai nút trong một bo). Mở trang ở trạng thái dừng; người dùng bấm bắt đầu. Tiêu đề và khung chờ có icon AI. Icon vị trí đỏ, gạch chéo khi định vị tắt; xanh khi đã có tọa độ. Ảnh dừng quét ngay khi có kết quả. Ảnh lưu là đúng khung đã đưa vào mô hình: chụp bitmap trước khi chạy, hộp vẽ lên bitmap đó, không lấy khung video sau khi model trả về. Video và camera giữ quét khi đã nhận diện; không dừng video và không hiện banner đầu trang. Mỗi sự kiện hiện nhóm Sự cố hoặc Biển báo, rồi đúng nhãn đã gắn (ổ gà hoặc tên biển). Nút chỉ còn Xác nhận và Bỏ qua. Xác nhận không chặn định vị hay độ tin cậy; mở sheet, tải ảnh đính kèm rồi tạo sự cố. Video và camera dừng khi cuộn tới vùng sự kiện, bấm danh sách, hoặc mở một sự kiện, rồi hiện cảnh báo vàng đã dừng để tránh lag. Kéo xuống trên khung camera, ảnh đang xem, hoặc dropdown mô hình không tải lại trang; kéo xuống ngoài các vùng đó vẫn làm mới. Đổi Camera / Tải file cũng dừng và hiện cảnh báo vàng; người dùng bấm bắt đầu khi sẵn sàng, hoặc chọn ảnh xong thì chạy lại. Camera mở máy quay và gắn tọa độ máy vào từng khung nhận được. Lưu edge-sync chỉ khi sai số ≤ 30 m và độ tin cậy ≥ 0.75. Tải file không có quỹ đạo GPS trong trình duyệt nên kết quả chỉ hiện trên máy. Video file thêm **Phát / Tạm dừng**. Khối Làm mới định vị không hiện. Icon vị trí trên khung xin quyền khi chưa cho phép; `watchPosition` tự cập nhật tọa độ khi GPS đổi. Vùng camera hiện tổng số sự cố đã nhận. Khi có kết quả mới, badge số và chữ gợi ý hiện 5 giây; bấm thì cuộn tới danh sách. Ảnh trong danh sách mở xem. Nút −/+/ẩn vùng nằm một hàng, icon giữa ô, trong khung nét đứt ở góc trái dưới. Nút × ở góc phải trên. Bấm ẩn vùng để xem ảnh chưa tô hộp. Phóng bằng nút hoặc hai ngón, rồi kéo trái/phải/trên/dưới để xem đúng chỗ.
