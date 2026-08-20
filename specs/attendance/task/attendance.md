# Team lead — Task — attendance (mobile list · Chấm công)

| Field | Value |
|-------|-------|
| feature | `attendance` |
| title | [Mobile] Chấm công |
| this role | `team_lead` · `/agent-tl-mobile` |
| requestSource | run packet `task_53a68d8f` · `/agent-qldb-workflow-mobile` · roleOnly=`team_lead` · `/agent-tl-mobile` |
| status | `confirmed` |
| changeScope | `edit_page` |
| packKind | **`list`** (PO + Design + SA confirm · UI hub DES-MOB-ATT) |
| stack | `native_dual` |
| Feature Kind | **hub/list** push `#sc-attendance` · **cấm** Kind A–G web |
| route_confirm | **route_a** (autoApprove=ON) — Tab field → `#sc-patrol-home` → segment **Chấm công** → push `#sc-attendance` / `DES-MOB-ATT` · seg **Tuần đường** = pop · Chấm vào = GPS+POST · Báo cáo / day = toast · **cấm** invent tab / `mfeStdUrl` / push sibling |
| autoApprove | **ON** |
| e2eQa | ON khi QA · `yarn e2e-qa-mobile` · **cấm** `mfeStdUrl` |
| prior · data_analy | **confirmed** · contentHash `sha256:attendance-mobile-hub-20260819` · bffContentHash `sha256:attendance-mobile-bff-20260819` |
| prior · po / design / sa | **confirmed** |
| taskId | `task_53a68d8f` |
| updatedAt | `2026-08-20T03:50:00.000Z` |
| thisAction | **Chấm công hub** `#sc-attendance` only · GET+POST · toast siblings · **cấm** gộp report / day-detail |

**Cấm:** gộp sibling · invent report API · ERP.* · WebView · `mfeStdUrl` · native alert · start sibling `pending_confirm` · `scaffold_new`.

---

## Source lock

| Key | Value |
|-----|-------|
| ios | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.iOS` |
| android | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.Android` |
| bff | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.Bff` · `mobile-bff/api/v1` |
| be | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.WebService` · **cấm ERP.*** |
| kit | reuse — `LinmLargeTitle` · `LinmSegment` · `LinmHeroCard` · `LinmListRow` · `LinmToast` · `kit_missing_confirm` **N/A** |
| Step 4b | **N/A** — reuse GET+POST `patrol/attendance-logs` |

### route_confirm (autoApprove=ON)

| Option | Decision |
|--------|----------|
| **route_a** (chọn) | Có phiên → Tab 5. Tab **Tuần đường** → `#sc-patrol-home` → segment idx **1** **Chấm công** → push `#sc-attendance`. Seg idx **0** pop. Chấm vào GPS+POST. Báo cáo / day toast. **Cấm** invent tab. |
| route_b / route_c | — không dùng |

AskQuestion: `route_confirm=route_a` · `2026-08-19T20:40:00.000Z`.

---

## Live gap

| Surface | Live | TL task |
|---------|------|---------|
| iOS `#sc-attendance` | **shipped** · builds PASS | **T-IOS-ATTENDANCE** **done** |
| Android `#sc-attendance` | **shipped** · assembleDebug PASS | **T-AND-ATTENDANCE** **done** |
| GET+POST attendance-logs | BFF + BE live | **reuse** |
| New BE endpoint | **không** | **T-BE** **n/a** |
| Sibling report / day-detail | `pending_confirm` | **cấm** auto start |

---

## Tasks

| id | layer | deps | status | skills | DoD |
|----|-------|------|--------|--------|-----|
| T-KIT-ATTENDANCE | kit | — | **n/a** | — | Kit hub đã map dual |
| **T-IOS-ATTENDANCE** | ios | SA · route_a | **done** | `/agent-dev-ios` | Hub `#sc-attendance` · GET+POST · demo · `xcodegen` + `xcodebuild` iPhone 17 Pro PASS · `implement/ios.md` |
| **T-AND-ATTENDANCE** | android | SA · route_a | **done** | `/agent-dev-android` | Same dual · `assembleDebug` PASS · `implement/android.md` |
| **T-BE-API** | be | — | **n/a** | — | Step 4b **N/A** |
| **T-BE-MIG** | be | — | **n/a** | — | không migration |
| T-QA-ATTENDANCE | qa | T-IOS · T-AND | **confirmed** | `/agent-qa-mobile` | Maestro login → tab field → seg Chấm công → `#sc-attendance` · store PNG |

---

## T-IOS-ATTENDANCE — detail

| | |
|--|--|
| `source.repo` | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.iOS` |
| `ssot.zones` | `DES-MOB-ATT` · `#sc-attendance` |
| Files | `Presentation/Features/Attendance/AttendanceView.swift` · `AttendanceViewModel.swift` · `Domain/UseCases/AttendanceUseCases.swift` · `Domain/Entities/AttendanceModels.swift` · `Data/Repositories/AttendanceRepositoryImpl.swift` · `AppRouter` `showAttendanceFromField` · `AppContainer` DI |

### Build DoD

```bash
cd /Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.iOS && xcodegen generate
xcodebuild -scheme LinmRmms -destination 'platform=iOS Simulator,name=iPhone 17 Pro' build
```

---

## T-AND-ATTENDANCE — detail

| | |
|--|--|
| `source.repo` | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.Android` |
| Files | `presentation/feature/attendance/AttendanceScreen.kt` · `AttendanceViewModel.kt` · `AttendanceUiState.kt` · domain/data attendance · `MainTabScreen` route `attendance` |

### Build DoD

```bash
cd /Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.Android && ./gradlew :app:assembleDebug
```

---

## T-BE-* (Step 4b — N/A)

Reuse live GET/POST `api/v1/patrol/attendance-logs` via BFF proxy. **Cấm** invent attendance report controller.

---

## Navigation / toast matrix (P1)

| Control | Behavior |
|---------|----------|
| Patrol seg Chấm công | push `#sc-attendance` |
| Seg Tuần đường | pop patrol-home |
| Chấm vào | GPS → POST |
| Báo cáo | toast **Báo cáo công** |
| Tap day | toast **Chi tiết ngày công** |

---

## Out of scope

- Sibling `attendance-report` · `attendance-day-detail`
- Invent report/zones API
- Reimplement patrol-home hub
- `mfeStdUrl` · ERP.*

---

## Handoff → Dev / QA

| Field | Value |
|-------|-------|
| route_confirm | **route_a** |
| Tasks | `T-IOS-ATTENDANCE` · `T-AND-ATTENDANCE` · `T-BE` **n/a** |
| reviewUrl | dual `file://…/prototype/{ios,android}/index.html#sc-attendance` |
| Next | QA / Review (native already PASS) |
| e2eQa | ON · **cấm** mfeStdUrl |

## Version meta (REQUIRED)

| Field | Value |
|-------|-------|
| skillId | agent-tl-mobile |
| skillVersion | 2026.08.19.22 |
| schemaVersion | 1 |
| workflowVersion | 2026.08.19.29 |
| rulesVersion | 2026.08.19.34 |
| generatedAt | 2026-08-20T03:50:00.000Z |
| versionGate | rechecked |
| contentHash | sha256:attendance-mobile-hub-20260819 |
| bffContentHash | sha256:attendance-mobile-bff-20260819 |

---
<!-- Version meta: skillId=agent-tl-mobile skillVersion=2026.08.19.22 schemaVersion=1 workflowVersion=2026.08.19.29 rulesVersion=2026.08.19.34 versionGate=rechecked -->
