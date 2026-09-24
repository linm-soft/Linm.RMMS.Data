# Dev — Implement Android — nghiem-thu

> Status: **done** · task `task_cdb487a6` · 2026-09-20T01:30:00.000Z  
> Agent: `/agent-dev-android` · `/dev-android-compose` · `/dev-ui-review`

| | |
|--|--|
| Feature | `nghiem-thu` |
| Title | [Mobile] [Tuần đường] → Công tác nghiệm thu |
| Role | `dev` · Android |
| changeScope | `edit_page` · list MAU-10 + Result overlay |
| contentHash | `sha256:1044ba719edda88d256d5c2a780cd2293f2fab87e2a39acdbb86001fad6ff659` |

## Delivered

| Zone | Kit / code | Bind |
|------|------------|------|
| Hub `#row-nghiem-thu` | PatrolHome | `navigate("nghiem-thu")` keep |
| `#sc-nghiem-thu` TopBar | `LinmTopBar` | Back · Tạo (sibling toast) |
| Search | `LinmSearchField` | `?search=` |
| rowSub | `LinmListRow` subtitle | **TemplateLabel MAU-10** · Route · Km |
| `DES-MOB-NT-STATUS` | primary badge | Status VN |
| `DES-MOB-NT-RESULT` | `secondaryBadge` | ResultCode · **ẩn null** |
| API | Retrofit list + init-data | TemplateLabel · ResultCode · resultCodes |

## Files

- Kit: `Linm.Mobile.Kit.Android/.../LinmList.kt` (`secondaryBadge`)
- `domain/model/NghiemThuModels.kt` · `usecase/NghiemThuUseCases.kt`
- `data/remote/NghiemThuDto.kt` · `mapper/NghiemThuDtoMapper.kt`
- `presentation/feature/nghiemthu/NghiemThuScreen.kt`

## Build

| Gate | Result |
|------|--------|
| `./gradlew :app:assembleDebug` | **BUILD SUCCESSFUL** |
| BFF `dotnet build` | PASS · proxy keep · no NT controller |
| WebService `dotnet build` | PASS · migration `20260919180443_Schema_NghiemThuMau` |

## Debt / OUT

- create/detail **pending_confirm** → toast only · scores OUT list
- criteria P1: CHI-SO `mau-02` full · other mẫu one line (not 100+ appendix)
- **cấm** ERP.* · demoItems · e2e/start:std · migrate apply = env

## Version meta

| Field | Value |
|-------|-------|
| skillId | agent-dev-android |
| skillVersion | 2026.08.25.01 |
| generatedAt | 2026-09-20T01:30:00.000Z |
| contentHash | sha256:1044ba719edda88d256d5c2a780cd2293f2fab87e2a39acdbb86001fad6ff659 |
