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

## Notes — edit-web-feature người theo quyền

TD-02 và TK-01 đổi ô Người từ text readonly sang `SearchInput`. Nguồn `GET api/v1/patrol/actors` (Mobile.Bff proxy `patrol/**`). Danh sách = `IPatrolDataScope` (admin / trưởng VP / tổ trưởng trùng km / chính mình). Dòng `isCaller` được chọn sẵn. `userName` gửi username, `assigneeCode` gửi mã nhân viên. Không migration.

Hub ca và chi tiết ca hiện **họ tên danh mục** từ chính response ca: `userDisplayName` trên `GET patrol/sessions` và `GET patrol/sessions/{id}`. BE đối chiếu đúng username của record, không tải cả danh mục và không gọi thêm theo card. Đang tải: skeleton. Không hiện «Mở ca» / «Chưa có ca» / «Đang tải…» trước khi danh sách về.

## Notes — Chi tiết ca back

`btn-pat-detail-back` không dùng `navigate(-1)`: shell MemoryRouter chỉ `replace`, nên back không đổi URL. Mở từ Hôm nay ghi `rmms.patrol.detailFrom=/tuan-duong`, từ Lịch sử ghi `/tuan-duong/lich-su`. Back gọi `navigate` đúng path đó (thiếu key → Lịch sử). Nút leading **56×56**, `:active` scale 0.86 + nền trắng mờ.

## Next

`/agent-qa*` · roleOnly stop (**GAP-PKT-ROLE-01**)
