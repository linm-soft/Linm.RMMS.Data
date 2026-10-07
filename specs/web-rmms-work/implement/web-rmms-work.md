# Implement — web-rmms-work

> Status: **done** · writtenAt `2026-09-26T05:20:00.000Z` · task `task_576843e7`  
> skillVersion: `2026.09.05.03` · packKind: `list` · autoApprove: ON  
> **roleOnly** `/agent-dev` · **cấm** e2e / `yarn start:std` (queued QA)

| | |
|--|--|
| Feature | `web-rmms-work` |
| Title | Danh sách công việc (WORK-L) |
| changeScope | `new_page` |
| mfe | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Mobile` |
| mfeStdRoute | `/web-rmms-work` |
| mfeStdUrl | `http://localhost:9301/web-rmms-work` |
| productRoute | `/work` · peers `/work/progress\|log\|chat?id=` · `/work/estimate/:id` |
| be | `D:/AI-QLBD/Linm.RMMS.WebService` · Mobile.Bff `:5202` · **reuse** `maintenance/work-orders` · **cấm ERP.*** |
| Step 4b | **skip** (SA/TL · API Mới / entity / migration: none) |
| demo | N/A |
| contentHash | `sha256:56146b96759461d425413e7e27e31fc1a5a4ed0a5f376f6a526959f62eb62770` |

## Decisions

- WORK-L primary on STD `/web-rmms-work` · product nest peers on `/work/*`
- Live `GET maintenance/work-orders` + `init-data` via Mobile.Bff · **cấm** web-bff / invent WorkListController
- FILTER-P1 chips status/workType **live** từ init-data (fallback LOOKUP enum)
- CREATE-FROM: hub → `/work/estimate` · **no FAB** on list
- Peer pages = nav-only shells (WORK-P/G/C/E) · full CRUD ngoài DoD
- Labels: `useFormOptions('web-rmms-work')` + LOOKUP_STATIC fallback
- **cấm** fake GPS · **cấm** Me* · **cấm** itemsOrDemo

## Files (FE)

| Path | Note |
|------|------|
| `src/pages/WebRmmsWork/*` | Layout · WorkListPage · PeerPages · paths · lookup · styles · alias |
| `src/index.tsx` | Routes `/web-rmms-work` + product `/work/*` |
| `src/dev/devRoutes.ts` | Dev nav Work |
| `src/pages/WebRmmsShell/paths.ts` | `PEER_WORK=/web-rmms-work` |
| `src/pages/WebRmmsShell/WorkTabPage.tsx` | Shell CTA → WORK-L |
| `src/services/patrol/endpoint.ts` | `getList` · `getInitData` · `getById` + create |
| `src/services/patrol/types.ts` | Full `WorkOrderDto` · InitData · Paged |

## Tasks

| id | status | note |
|----|--------|------|
| T-01 | **done** | Route+shell STD + product nest |
| T-02 | **done** | Search debounce · chips live · empty/fail toast |
| T-03 | **done** | Card Title/Code/Assignee/Due/Route/Status/%/WorkType · phone≤430 |
| T-04 | **done** | Hub estimate · peer icons · no FAB · no Me* |
| T-05 | **done** | Mobile.Bff · useFormOptions · #sc-mnt-list · no fake GPS |
| T-BE | **N/A** | Step 4b skip |
| T-QA | pending | queued `/agent-qa*` |

## Verify

| Gate | Result |
|------|--------|
| `yarn build` (MFE) | **PASS** (webpack 5 · chunk `web-rmms-work`) |
| `dotnet build` RMMS.Service.Api | **PASS** (0 err · no BE code change) |
| e2e / start:std | **skipped** (role Dev · e2eQa queued) |

## Notes — incident section (2026-10-06)

- GET work order gắn `incidentCode`, `incidentType`, `incidentTitle`, `incidentDescription` từ sự cố liên kết. Không thêm cột.
- Khối thông tin công việc trên chi tiết không co trong cột flex (`flex-shrink: 0`).
- Chi tiết công việc có khối Thông tin sự cố: loại (`title · type`), mã, tuyến, lý trình (Km không lặp tuyến). Nội dung tách ghi chú người dùng và hạng mục checklist đã chọn; bỏ sidecar `@@pins`. Bấm khối mở `/van-de/{incidentId}`.

## Notes — work detail layout (2026-10-06)

- `/cong-viec/:id` xếp trường như chi tiết sự cố: tiêu đề, trạng thái, rồi từng dòng nhãn trên / giá trị dưới.
- Khối Thao tác: icon + chữ. Trao đổi, cập nhật trạng thái, nhật ký, giao việc — cùng đích với nút trên danh sách.

## Notes — filter and due span (2026-10-06)

- Thời hạn: dòng 1 là mốc `dueAt`. Dòng 2 là «Còn» hoặc «Quá hạn». Trên 60 phút thành giờ, trên 24 giờ thành ngày (`1d 3h 4'`). Đã hoàn thành / đã hủy không có dòng 2. Danh sách và chi tiết tính lại mỗi 15 giây và khi tab được mở lại, không cần tải trang.
- Lọc WORK-L: `routeName` + `fromDate`/`toDate` (yyyy-MM-dd, ngày ICT). API giữ công việc khi `[CreatedAt, DueAt]` giao khoảng ngày. Tuyến khớp mã hoặc tên catalog.
- Mặc định từ ngày = đến ngày = hôm nay. `sessionStorage` key `rmms.work.listFilter`. Nút «Hôm nay» đưa về mặc định.

## Notes — list card (2026-10-06)

- Thẻ WORK-L bấm mở `/cong-viec/:id` (GET `maintenance/work-orders/{id}`). Nút chat / tiến độ / nhật ký / ước lượng không mở chi tiết.
- Tuyến = `routeName`. Lý trình = token `lyTrinh` trên mô tả, không có thì `kmStart`/`kmEnd` của sự cố gắn kèm. Km không lặp lại tên tuyến.
- Người giao = `assigneeName`. Sđt = `assigneePhone` (`rmms_users.Phone`, khớp `UserId` rồi mã/username rồi tên). Không thêm cột.
- Thời gian giao = `createdAt`. Thời hạn = `dueAt` kèm số phút còn lại, hoặc «Quá hạn N phút». Đã hoàn thành / đã hủy chỉ hiện mốc giờ.

## Notes — assignee scope (2026-10-05)

- `GET maintenance/work-orders` và `GET …/{id}` (progress, complete, messages cùng phạm vi) lọc theo caller. Nhân viên chỉ thấy công việc gán `UserId` / mã / tên của mình. Admin và MANAGER-RMMS thấy cả công ty. Lead thấy việc của người trong grant và việc chưa giao.
- Giao việc gửi `assigneeUserName`. Cột `UserId`, `EmployeeCode`, `AssigneeCode` trên `rmms_work_orders`.
- WORK-L bind `items`. Ô tìm debounce gửi `search`. Không lọc user trên client.
- Verify: `yarn typecheck` Mobile · `dotnet ef migrations list` có `Schema_WorkOrderAssigneeScope` · `dotnet build` API.

## Notes — scope sự cố (2026-09-27)

- Query `incidentId` trên WORK-L: `GET maintenance/work-orders?incidentId=` exact + lọc client
- Hub «Giao việc xử lý» → `/uoc-luong?incidentId=&entry=work`
- POST WO từ estimate: `incidentId` giữ · `workType=repair` (API chỉ nhận repair/inspect/emergency)

## Debt / carry

- GAP-MOB-MNT-PROG-GPS-01 — peer progress Note GPS (không block WORK-L)
- Peer WORK-P/G/C/E = nav-only stubs · full CRUD later peer packs

## Next

- `/agent-qa*` · e2eQa ON · roleOnly stop (GAP-PKT-ROLE-01)
