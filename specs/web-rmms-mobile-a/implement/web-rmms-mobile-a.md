# Implement — web-rmms-mobile-a

| Field | Value |
|-------|-------|
| feature | `web-rmms-mobile-a` |
| role | `dev` · `/agent-dev` |
| status | `done` |
| packKind | `list` (phone Field hub · Kind B **WAIVE**) |
| changeScope | `edit_page` · **editTask=1** |
| mfe | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Mobile` |
| mfeStdRoute | `/web-rmms-mobile-a` |
| mfeStdUrl | `http://localhost:9301/web-rmms-mobile-a` |
| be | `D:/AI-QLBD/Linm.RMMS.WebService` · Patrol+Integration+Auth+Files · **cấm ERP.*** |
| BFF | Mobile.Bff `mobile-bff/api/v1/patrol/**` + `integration/road-routes` + `integration/users` (forward only) |
| contentHash | `sha256:110e845481b0f27091c0f5ca856fef74524bc1634ab8e3785a5d7755730eea45` |
| skillVersion | `2026.09.05.03` |
| rulesVersion | `2026.09.27.1` |
| schemaVersion | `1` |
| updatedAt | `2026-09-27T14:34:00.000Z` |
| taskId | `task_668b6ad0` |
| demo | **N/A** |
| e2eQa | queued `/agent-qa*` — **cấm** e2e ở Dev |
| deltaCite | `docs/plan/web-rmms-mobile/SUBMIT-VALIDATE.md` |

## Build

| Gate | Result |
|------|--------|
| MFE `yarn build` | **PASS** (webpack size WARN only) |
| BE `dotnet build` `Linm.RMMS.WebService.sln` Release | **PASS** (0 error) |
| Mobile.Bff `dotnet build` Release | **PASS** (0 error) · users forward **already Live** |
| migration | **none** |
| ERP.* | **0** |

## Edit delta — DoD

| id | status | Evidence |
|----|--------|----------|
| T-UI-PATTERN-B-01 | **done** | `CheckInSheet.tsx` — `disabled={saving}` only · GPS deny → banner on Lưu click · no fake lat/lng · no `disabled={!gps}` |
| T-UI-LKP-EDIT-01 | **done** | `lookups.ts` — live `road-routes/search` · miss `--` · **0** `ROAD_ROUTE_SEED` / `filterSeed` / QL.22 |
| T-UI-USER-01 | **edit** | `GET patrol/actors` · OpenPatrol/OpenInspect SearchInput · scope `IPatrolDataScope` · default caller · `assigneeCode` = mã emp |
| T-UI-TRANSPORT-01 | **done** | `bindMobileApiClient()` in `lookups.ts` + patrol endpoint · **0** web-bff client on surface A |
| T-QA-EDIT-01 | pending | queued `/agent-qa*` |
| T-REV-EDIT-01 | pending | after QA |

## Screens / files touched

| Zone | File | Change |
|------|------|--------|
| TD-03 | `WebRmmsMobileA/CheckInSheet.tsx` | Pattern B Lưu/GPS |
| TD-02 | `WebRmmsMobileA/OpenPatrolPage.tsx` | SearchInput người · default caller · route miss `--` |
| TK-01 | `WebRmmsMobileA/OpenInspectPage.tsx` | SearchInput người · default caller · route miss `--` |
| shared | `services/patrol/lookups.ts` | `PATROL_ACTOR_LOOKUP_CONFIG` · `loadDefaultPatrolActor` |
| BE | `PatrolActorsController` · `PatrolDataScope.ListAssignableAsync` | `GET api/v1/patrol/actors` · Mobile.Bff proxy sẵn |
| hub (prior WIP) | `PatrolHubPage` / `sessionView` / `lookupStatic` | idle eyebrow · live-active status fix |

## APIs (reuse Live)

| Method | Path | Note |
|--------|------|------|
| POST | `/patrol/sessions/{id}/check-ins` | Pattern B · GPS after click |
| GET | `/integration/road-routes/search` | no seed |
| GET | `/patrol/actors` | user/emp theo quyền tuần · `isCaller` = default |
| GET | `/integration/users` | Kết ca người nhận · không dùng cho mở ca |
| GET/POST | `/patrol/sessions*` | wave A keep |

## BE Step 4b

- WebService: `GET api/v1/patrol/actors` — no entity / migration. Scope tái dùng `IPatrolDataScope`.
- Mobile.Bff: catch-all proxy `patrol/**` — không controller mới.
- DOMAIN-MAP: `web-rmms-mobile-a` → Patrol (cite Integration users via Mobile.Bff).

## Debt

- T-QA-EDIT-01 / T-REV-EDIT-01 queued — **cấm** e2e ở Dev.
- Kind B / FILTER / CFG / UISCHEMA **WAIVE** giữ.

## Notes — người theo tài khoản (2026-10-06)

TD-02 và TK-01: ô Người readonly, giá trị `caller` của `GET patrol/actors`. Search bỏ `HideFromSearch`. `GET {id}` và login `GET integration/users/me` vẫn trả hồ sơ. Verify: `yarn typecheck` · `dotnet build` API.

## Notes — edit-web-feature người theo quyền

TD-02 và TK-01 đổi ô Người từ text readonly sang `SearchInput`. Nguồn `GET api/v1/patrol/actors` (Mobile.Bff proxy `patrol/**`). Danh sách = `IPatrolDataScope` (admin / trưởng VP / tổ trưởng trùng km / chính mình). Dòng `isCaller` được chọn sẵn. `userName` gửi username, `assigneeCode` gửi mã nhân viên. Không migration.

Hub ca và chi tiết ca hiện **họ tên danh mục** từ chính response ca: `userDisplayName` trên `GET patrol/sessions` và `GET patrol/sessions/{id}`. BE đối chiếu đúng username của record, không tải cả danh mục và không gọi thêm theo card. Đang tải: skeleton. Không hiện «Mở ca» / «Chưa có ca» / «Đang tải…» trước khi danh sách về.

## Notes — Chi tiết ca back

`btn-pat-detail-back` không dùng `navigate(-1)`: shell MemoryRouter chỉ `replace`, nên back không đổi URL. Mở từ Hôm nay ghi `rmms.patrol.detailFrom=/tuan-duong`, từ Lịch sử ghi `/tuan-duong/lich-su`. Back gọi `navigate` đúng path đó (thiếu key → Lịch sử). Nút leading **56×56**, `:active` scale 0.86 + nền trắng mờ.

## Notes — ca theo user

Hub chỉ render đúng `GET patrol/sessions` và `GET patrol/check-ins`. Header, ghim, Hôm nay dùng `audience=self`. Tuần đường / tuần kiểm không gọi `audience=staff`. «Ca nhân sự quản lý» chỉ admin/quản lý, `audience=staff`.

## Notes — ghim mở ca

`PinPlaceDialog` trên hub: Tuyến bắt buộc. Tiếp tục gọi `ensureRoadPatrolSession` khi chưa có ca, không toast cảnh báo thiếu ca, rồi mở ghi điểm tuần. Ca cùng người và tuyến đang chạy được dùng lại. Đã mở ca, GIS không có tuyến gần: «Không tìm thấy tuyến gần bạn». Ô «Chọn tuyến» là mặc định (ca, không có thì điểm tuần mới nhất), vẫn đổi được. Header, ghim và Hôm nay gọi `audience=self`. «Ca đang tuần» là ca đang chạy của caller. Admin/quản lý có «Ca nhân sự quản lý» qua `audience=staff` (lọc search + status, tổng, card có tên). Verify: `yarn typecheck` và `dotnet build` API. Đổi sang tuyến khác khi đang có ca: confirm «Xác nhận thêm ca». Verify: `yarn typecheck` trong `Linm.Web.RMMS.Mobile`.

## Notes — ca nhân sự theo ngày

«Ca nhân sự quản lý» gửi `fromDate` và `toDate` bằng ngày ICT hiện tại lên `GET patrol/sessions` (`audience=staff`). Danh sách nằm trong khung `max-height: 280px` có thanh cuộn, 10 ca mỗi trang, nút Trước/Sau. Verify: `yarn typecheck` trong `Linm.Web.RMMS.Mobile`.

## Notes — Chi tiết ca scrollbar ngoài

Desktop bỏ `min-height: calc(100vh - 48px)` trên `.phone` tuần đường để khung không cao hơn thân shell. Shell `.body` và `.content` / `.detailScroll` cuộn nhưng không vẽ thanh cuộn mép cột. Danh sách «Ca nhân sự» giữ thanh cuộn trong khung. Verify: `yarn typecheck` trong `Linm.Web.RMMS.Mobile`.

## Notes — nhật ký ngày / ca / điểm tuần

`/tuan-duong/lich-su` đọc `GET patrol/check-ins` (from, to, status, patrolType) và xếp ngày → ca → điểm. Ca hiện lý trình từ `sessionKmFromLabel` / `sessionKmToLabel` trên note ca. Sheet: Hôm nay rồi Áp dụng. Lọc nhớ `phoneListFilterSession` scope `patrol-journal`, version 3, mặc định hôm nay ICT, hết hạn 4 giờ hoặc sang ngày. Nút In mở preview A4 trong khung phone (`frame`), layout `Linm.Web.RMMS.Mobile/src/print/official`. Tuần đường = Mẫu 2, tuần kiểm = Mẫu 1. Dòng = điểm đang hiện. Bìa lấy `phongName`, không có thì `assigneeOrgName`. Cấm in note ca. Cấm portal ra `document.body`. Verify: `yarn typecheck` Mobile · `dotnet build` API.

## Notes — ô lý trình chung

`RouteChainageField` dùng cho check-in, mở đợt, lập phiếu, giao việc, sự cố, nghiệm thu, thu thập tài sản, nhật ký, kiến nghị, biên bản. Gồm tuyến bắt buộc, cột KM + khoảng cách, nút Lấy vị trí (modal cột km như check-in), ghi chú khi tuyến chưa có cột KM, và chọn vị trí bắt đầu hoặc kết thúc. Lý trình đã nhập được nhớ theo mã tuyến. Verify: `yarn typecheck` trong `Linm.Web.RMMS.Mobile`.

## Notes — Mở đợt lý trình

TK-01 Từ km và Đến km mỗi đầu là Cột KM + Khoảng cách (m). Khi đã nhập cột KM, dòng dưới hiện «Tên tuyến - Km X + Ym». Note giữ `kmFrom`/`kmTo` dạng km thập phân và thêm `kmFromLabel`/`kmToLabel`. Không đổi cột DB. Verify: `yarn typecheck` trong `Linm.Web.RMMS.Mobile`.

## Notes — list lý trình và height lookup

Card list có tuyến hiện lý trình dạng `Km {cột} + {mét}m` khi payload đã có (note đợt, km phiếu, mô tả công việc, min/max cột KM của kế hoạch tần suất). Lookup phone dùng token field 52px / 16px / radius 12px qua `--ds-height-input-desktop` trên shell. Verify: `yarn typecheck` trong `Linm.Web.RMMS.Mobile`.

## Notes — vị trí bắt đầu / kết thúc

Ô radio chỉ trên check-in tọa độ, khi user chưa có đoạn km đã gán hoặc tuyến không có cột KM. Form Từ km–Đến km không hiện radio. «Lấy vị trí» trên form khoảng điền đầu còn trống, rồi đầu kia. Verify: `yarn typecheck` trong `Linm.Web.RMMS.Mobile`.

## Notes — menu hub tuần kiểm

Menu Sự cố của đợt, Phiếu phát hiện, Sổ nhật ký nằm trên hub `/tuan-kiem` và lưới Trang chủ khi có quyền tuần kiểm. Verify: `yarn typecheck` trong `Linm.Web.RMMS.Mobile`.

## Notes — sổ trạng thái và ký

`InspectBookPage`: trạng thái bìa tách khỏi mã (`chipWait` khi chờ, `chip` khi `DaKy`). Khối ký không lấy câu cấm ký làm tên người ký. Tuần kiểm không thấy ô nhận xét trống. Verify: `yarn typecheck` trong `Linm.Web.RMMS.Mobile`.

## Notes — màn làm việc tuần kiểm (2026-11-10)

`/tuan-kiem/:id/nhom/:group` liệt kê phiếu của ca theo `findingKind` (`GET api/v1/patrol/findings`). Không lọc lại trên client. Lập biên bản đi kèm `findingId`. Biển báo tạm và báo tai nạn lưu xong quay về nhóm. Verify: `yarn typecheck` · `dotnet build` API.

## Notes — hub tuần kiểm Điều 19 (2026-11-10)

Hub `/tuan-kiem` lưới 2 cột + Mở ca / Ghi điểm tuần. Check-in ca Tuần kiểm không mở ca tuần đường. Sổ sửa cột Mẫu 1 qua `PUT api/v1/patrol/findings/{id}/journal` (cột có sẵn, không migration). Ba loại phiếu mới: `bien-bao-tam`, `bao-tai-nan`, `diem-tiem-an`. Tạm dừng ca tuần kiểm dùng lý do 19.6. Verify: `yarn typecheck` trong `Linm.Web.RMMS.Mobile` · `dotnet build` API Patrol.

## Notes — báo tai nạn và nút Huỷ (2026-11-11)

`InspectDutyPage` báo tai nạn ghi thêm phương tiện, hậu quả người/xe, ùn tắc vào `description`. `RouteCaptureControl` giữ `onChange` trong ref để phiếu việc không lặp `setState` (Maximum update depth) làm chết Huỷ / Quay lại. Verify: `yarn typecheck` trong `Linm.Web.RMMS.Mobile`.

## Notes — mở ca và kết ca trên hub tuần kiểm (2026-11-11)

Thẻ đợt trên `/tuan-kiem` bấm vào thì `inspectCheckIn`. Nút Kết thúc ca đi `/tuan-kiem/:id/ket-ca` (việc Kết ca). `?action=tam-dung` mới khóa Tạm dừng. Verify: `yarn typecheck` trong `Linm.Web.RMMS.Mobile`.

## Notes — chi tiết ca tuần kiểm (2026-11-11)

Bấm thẻ trên `/tuan-kiem` mở `/tuan-kiem/:sessionId` (cùng `PatrolDetailPage`). Vai tuần kiểm được ghi điểm và kết ca; quản lý chỉ xem. Mở bản đồ ca đi `/ban-do-tuan?sessionId=`. Ca Tuần kiểm trên bản đồ không gọi `ensureRoadPatrolSession`. Verify: `yarn typecheck`.

## Notes — ca đã kết thúc và mở ca tuần kiểm (2026-11-11)

Hub `/tuan-kiem` tải ca `Hoàn thành` trong ngày (`fromDate`/`toDate`, `patrolType=Tuần kiểm`; quản lý dùng `audience=staff`). Thẻ có nhân sự, mã ca, tuyến, lý trình. Mở ca gọi `GET api/v1/patrol/sessions/start-options?patrolType=Tuần kiểm`: ca Tuần kiểm gần nhất, không có thì đoạn tuyến user đã xác nhận. Tuần đường vẫn gọi start-options không `patrolType`. Verify: `yarn typecheck` · `dotnet build` API.

## Notes — số liệu TNGT (2026-11-11)

Báo tai nạn và nhật ký loại TNGT ghi `AccidentVehicleCount`, `AccidentDeaths`, `AccidentInjuries` (nullable). Migration `Schema_PatrolAccidentCounts`. Verify: `yarn typecheck` · `dotnet build` API.

## Next

`/agent-qa*` · roleOnly stop (**GAP-PKT-ROLE-01**)

## Print lock 2026-11-05

Nút In trên nhật ký web mobile mở preview trong khung trang (`frame`), layout `Linm.Web.RMMS.Mobile/src/print/official`. Mỗi nhà thầu một cuốn. Quyển số để dấu chấm, người dùng ghi tay. Dòng in = điểm tuần đang hiện theo bộ lọc đã áp dụng. Tuần đường = Mẫu 2. Tuần kiểm = Mẫu 1. Bìa: `phongName`, không có thì `assigneeOrgName`. Cấm portal `document.body`. Cấm in note ca.
