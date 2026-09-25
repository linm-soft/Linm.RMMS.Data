# Dev — Implement — nghiem-thu-detail (iOS)

| Field | Value |
|-------|-------|
| feature | `nghiem-thu-detail` |
| role | `dev` · `/agent-dev-ios` · `/dev-ios-swiftui` · `/dev-ui-review` |
| status | **PASS** |
| packKind | `sheet` |
| changeScope | `edit_page` |
| route_confirm | `route_a` |
| taskId | `task_1621bc9e` |
| updatedAt | `2026-09-20T02:25:00.000Z` |

## Tasks

| id | status | notes |
|----|--------|-------|
| T-IOS-NGHIEM-THU-DETAIL | **done** | View/Edit sheet cùng slug · GET+init+files+PUT · leave/GPS/toast |
| T-BE / T-BFF | **n/a · reuse** | live API + catch-all · **không** Write BFF/BE · Step 4b SKIP |
| Step 4b | **SKIP** | SA/TL |

## Ship summary

- **Screen** `#sc-nghiem-thu-detail` · `DES-MOB-NGHIEM-THU-DETAIL` · push from list row (toast stub removed)
- **FormMode:** View (Đóng/Sửa) · Edit (Hủy/Lưu) cùng slug · Hủy dirty → `DES-MOB-LEAVE` · Thoát về View
- **API:** `GET patrol/nghiem-thu/{id}` · `GET …/init-data` criteria · `PUT` UpdateNghiemThuRequest · `files/*` MediaIds ≤10
- **Bind:** mẫu/kết quả/trạng thái sheets · scores cycle pass/fail/n_a · done thiếu kết quả không PUT · GPS chặn Lưu
- **Toast:** `Đã lưu · {Code}` · 404 «Phiếu không tồn tại» pop list · fail toast · **cấm** alert / enqueue / invent path
- **Router / DI:** nest under list · `FetchNghiemThuDetailUseCase` + `UpdateNghiemThuUseCase`

## VERIFY GATE

| Check | Result |
|-------|--------|
| `xcodegen generate` | **PASS** |
| `xcodebuild -scheme LinmRmms -destination 'platform=iOS Simulator,name=iPhone 17 Pro' build` | **PASS** |
| BFF `dotnet build` | **PASS** (no BFF write · verify only) |
| e2e / start:std / mfeStdUrl | **SKIP** (cấm role Dev) |

## Files

| Path | Change |
|------|--------|
| `Presentation/Features/NghiemThuDetail/*` | NEW screen + VM + state |
| `Domain/Entities/NghiemThuDetailModels.swift` | NEW detail/PUT/scores |
| `Domain/Entities/NghiemThuModels.swift` | criteria on init-data |
| `Domain/UseCases/NghiemThuUseCases.swift` | +fetchById + update |
| `Domain/Repositories/NghiemThuRepository.swift` | +fetchById + update |
| `Data/Repositories/NghiemThuRepositoryImpl.swift` | GET/PUT |
| `Data/Dto/NghiemThuDto.swift` | detail + criteria mapper |
| `Presentation/Features/NghiemThu/NghiemThuViewModel.swift` | row → detail |
| `App/AppRouter.swift` · `App/AppContainer.swift` | nav + DI |
| `Presentation/Shared/LinmCopy.swift` | `nghiemthu.detail.*` |

## Version meta

| Field | Value |
|-------|-------|
| skillId | agent-dev-ios |
| skillVersion | 2026.08.25.01 |
| schemaVersion | 1 |
| workflowVersion | 2026.09.19.5 |
| rulesVersion | 2026.09.19.7 |
| versionGate | rechecked |
| contentHash | sha256:250aebcbfb9a445c517a0c40f399fee82a5a00d524499e7310fd7feac0fb5380 |
| bffContentHash | sha256:nghiem-thu-detail-mobile-bff-20260919 |
| taskId | `task_1621bc9e` |
| dorGate | PASS |

---
<!-- Version meta: skillId=agent-dev-ios skillVersion=2026.08.25.01 schemaVersion=1 dorGate=PASS -->
