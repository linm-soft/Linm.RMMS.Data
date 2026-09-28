# Implement — web-rmms-incident

> Status: **done** · writtenAt `2026-09-27T12:40:00.000Z` · task `task_74641ae2`  
> skillVersion: `2026.09.05.03` · packKind: `list` · autoApprove: ON  
> role: `/agent-dev` · **cấm** e2e / `yarn start:std` (queued QA)

| | |
|--|--|
| Feature | `web-rmms-incident` |
| changeScope | `edit_page` |
| mfe | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Mobile` |
| mfeStdRoute | `/van-de` · `/van-de/moi` · `/van-de/:id` |
| mfeStdUrl | `http://localhost:9301/van-de/moi` |
| productRoute | `/incident` · `/incident/new` · `/incident/:id` |
| be | `D:/AI-QLBD/Linm.RMMS.WebService` · Mobile.Bff `mobile-bff/api/v1` · Incident (+ Patrol / Integration / AiVision) |
| Step 4b | **skip** · API/entity/migration **none** (SA FE-only · T-BE N/A) |
| build | MFE `yarn build` **PASS** · BE `dotnet build` **PASS** |
| deltaCite | `docs/plan/web-rmms-mobile/SUBMIT-VALIDATE.md` · `IncidentCreatePage` |

## Delivered (Pattern B · edit_page)

| id | DoD |
|----|-----|
| T-01…T-06 | Prior Live INC-L/N/D **kept** · no regress |
| T-UI-VAL-B-01 | Bỏ `disabled={!canCreate}` · `disabled={creating}` only · `validate.banner` string[] on click · `validationAttempted` |
| T-UI-ACC-01 | Banner keys useFormOptions/lookup: asset→`incident.pick.title` · session→`incident.session.empty` · GPS→`incident.gps.deny` · offline→`incident.offline` · dismiss key |
| T-UI-GPS-B-01 | GPS deny **on-submit** (+ modal) · CTA không khóa vì GPS · no auto-modal on load |
| T-UI-ALIGN-01 | SSOT `IncidentCreatePage` · modes `?gps=deny` · `?nosession=1` · `?miss=1` · **cấm** tab/route/icon mới · **cấm** native |
| T-BE | N/A |
| T-QA-VAL-B-01 | queued `/agent-qa*` only |

## Files (slim)

- `src/pages/WebRmmsIncident/IncidentCreatePage.tsx` — Pattern B create/detect validate
- `src/pages/WebRmmsIncident/styles.module.css` — bannerDanger / bannerList / fieldError
- `src/pages/WebRmmsIncident/lookupStatic.ts` — `incident.banner.dismiss`

## APIs (unchanged · Mobile.Bff)

- `GET/POST /incident/incidents` · `GET …/{id}` · `POST …/{id}/close`
- `GET /patrol/sessions` · `GET /integration/asset-types`
- `POST /ai-vision/uploads/*` · `POST /ai-vision/detect`

## Verify

- `yarn build` (MFE) — **PASS** (size warnings only) · chunk `van-de`
- `dotnet build` (WebService.sln) — **PASS** · 0 errors
- Step 4b — **N/A** (no API/DTO/entity/migration)
- E2E — **queued** `/agent-qa*` · not run in Dev

## Notes — giao việc từ sự cố (2026-09-27)

- `entry.assign` → `/cong-viec?incidentId={id}` (`paths.workFor`)
- WORK-L lọc `incidentId` (API + client) · hub new → `/uoc-luong?incidentId=&entry=work`
- Parent WO = cột `IncidentId` · **cấm** `parentId`

## Notes — ảnh list + chi tiết (2026-09-28)

- INC-L thumb 72×72 bên phải thẻ: `mediaIds[0]` qua `photoGeoEndpoint.getObject` · `+N` · rỗng «Chưa có ảnh» (`incident.photo.none`)
- INC-D gallery trước Peer: mọi id · 1 ảnh full · ≥2 lưới 2 cột · label `incident.detail.photos`
- Bản đồ sự cố tab **Chi tiết**: dòng Trạng thái · Thời gian · Tuyến · KM · Mức · Định vị · Người báo · gallery ảnh (`GET incidents/{id}`) · **cấm** lặp list điểm trên tab Chi tiết
- **Cấm** pin / cache khớp phiên tuần đường — sự cố không có `photoPins`
- DTO không đổi · `MediaIds` đã có trên GET list và GET `{id}`

## Debt / note

- GAP-PGC-BE-01 Lat MIG deferred · HasGps only
- Ảnh form tạo: `IncidentCaptureSheet` + `RouteCaptureControl` `mode=multiple` · purpose `photo-geo-capture` · entity `incident`
- Nút sheet chỉ Hủy / Lưu · Lưu copy preview rồi gắn `MediaIds` và đóng về `/van-de/moi`
- Nhận diện AI trên form tạo: để sau · **cấm** mở lại `openPhotoGeoCapture` cho sự cố
- Chi tiết: `RouteCaptureControl` `mode=view` hiện pin + định vị / khoảng cách / vật thể / tuyến phía trên bản đồ
- Tuyến chỉ khi người dùng chọn hoặc tuyến ca nằm trong 200 m · chưa xác định thì `RouteName`/`RouteCode` để trống · màn hình hiện `--` · Km không copy mã tuyến
- Create/Update sự cố không đối chiếu `RoadRoutes` · mọi mã tuyến đều lưu được
- Peer INC-V/C/E full screens OOS
