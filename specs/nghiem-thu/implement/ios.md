# Dev — Implement iOS — nghiem-thu

> Status: **done** · task `task_cdb487a6` · 2026-09-20T01:20:00.000Z  
> Agent: `/agent-dev-ios` · `/dev-ios-swiftui` · `/dev-ui-review`

| | |
|--|--|
| Feature | `nghiem-thu` |
| Title | [Mobile] [Tuần đường] → Công tác nghiệm thu |
| Role | `dev` · iOS |
| changeScope | `edit_page` · list MAU-10 + Result overlay |
| contentHash | `sha256:1044ba719edda88d256d5c2a780cd2293f2fab87e2a39acdbb86001fad6ff659` |

## Delivered

| Zone | Kit / code | Bind |
|------|------------|------|
| Hub `#row-nghiem-thu` | PatrolHome | push list (keep) |
| `#sc-nghiem-thu` TopBar | `LinmTopBar` | Back · Tạo (sibling toast) |
| `DES-MOB-NT-SEARCH` | `LinmSearchField` | `?search=` |
| rowSub | `LinmListRow` subtitle | **TemplateLabel MAU-10** · Route · Km |
| `DES-MOB-NT-STATUS` | primary badge | Status VN |
| `DES-MOB-NT-RESULT` | `secondaryBadge` | ResultCode · **ẩn null** |
| API | list + init-data | TemplateLabel · ResultCode · resultCodes |

## Files

- Kit: `Linm.Mobile.Kit.iOS/.../LinmListRow.swift` (`secondaryBadge`)
- `Domain/Entities/NghiemThuModels.swift`
- `Data/Dto/NghiemThuDto.swift`
- `Domain/UseCases/NghiemThuUseCases.swift`
- `Presentation/Features/NghiemThu/NghiemThuView.swift`

## Build

| Gate | Result |
|------|--------|
| `xcodegen generate` | PASS |
| `xcodebuild` dest **iPhone 17 Pro** | **BUILD SUCCEEDED** |

## Notes

- scores OUT list · create/detail siblings pending_confirm
- e2eQa queued `/agent-qa*` only · **cấm** mfeStdUrl / start:std
