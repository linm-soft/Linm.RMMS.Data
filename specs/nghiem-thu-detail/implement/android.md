# Dev — Implement — nghiem-thu-detail (Android)

| Field | Value |
|-------|-------|
| feature | `nghiem-thu-detail` |
| role | `dev` · `/agent-dev-android` · `/dev-android-compose` · `/dev-ui-review` |
| status | **PASS** |
| packKind | `sheet` |
| changeScope | `edit_page` |
| route_confirm | `route_a` |
| taskId | `task_1621bc9e` |
| updatedAt | `2026-09-20T02:25:00.000Z` |

## Tasks

| id | status | notes |
|----|--------|-------|
| T-AND-NGHIEM-THU-DETAIL | **done** | Dual View/Edit · GET+init+files+PUT · leave/GPS/toast |
| T-BE / T-BFF | **n/a · reuse** | live API + catch-all · **không** Write BFF/BE · Step 4b SKIP |
| Step 4b | **SKIP** | SA/TL |

## Ship summary

- **Screen** `#sc-nghiem-thu-detail` · route `nghiem-thu-detail/{id}` · list row push (toast stub removed)
- **FormMode:** View chevron+Sửa · Edit chevron+Lưu · dirty → `DES-MOB-LEAVE` · Thoát về View
- **API:** `GET patrol/nghiem-thu/{id}` · init-data criteria · `PUT` · `files/*` MediaIds ≤10
- **Bind:** sheets mẫu/kết quả/trạng thái · scores cycle · done⇒ResultCode · GPS chặn Lưu · list ON_RESUME refresh
- **Toast:** `Đã lưu · {Code}` · 404 «Phiếu không tồn tại» · **cấm** alert / enqueue / invent path

## VERIFY GATE

| Check | Result |
|-------|--------|
| `./gradlew assembleDebug` | **PASS** |
| BFF `dotnet build` | **PASS** (no BFF write) |
| e2e / start:std / mfeStdUrl | **SKIP** (cấm role Dev) |

## Files

| Path | Change |
|------|--------|
| `presentation/feature/nghiemthudetail/*` | NEW screen + VM + state |
| `domain/model/NghiemThuDetailModels.kt` | NEW detail/PUT/scores |
| `domain/model/NghiemThuModels.kt` | criteria |
| `domain/usecase/NghiemThuUseCases.kt` | +fetch + update |
| `domain/repository/NghiemThuRepository.kt` | +fetchById + update |
| `data/repository/NghiemThuRepositoryImpl.kt` | GET/PUT |
| `data/remote/NghiemThuDto.kt` · `ApiService.kt` · mapper | detail + criteria |
| `presentation/feature/nghiemthu/*` | row → detail · resume refresh |
| `presentation/navigation/MainTabScreen.kt` | route |
| `presentation/copy/LinmCopy.kt` | `nghiemthu.detail.*` |

## Version meta

| Field | Value |
|-------|-------|
| skillId | agent-dev-android |
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
<!-- Version meta: skillId=agent-dev-android skillVersion=2026.08.25.01 schemaVersion=1 dorGate=PASS -->
