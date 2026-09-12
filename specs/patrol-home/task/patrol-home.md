# Team lead — Task — patrol-home (mobile hub · edit_page)

| Field | Value |
|-------|-------|
| feature | `patrol-home` |
| title | [Mobile] Tuần đường — mở/kết ca live + hero server-only |
| this role | `team_lead` · `/agent-tl-mobile` |
| status | `confirmed` |
| changeScope | `edit_page` |
| packKind | **`hub`** (PO + Design + SA re-confirm) |
| stack | `native_dual` |
| Feature Kind | **hub** tab field `#sc-patrol-home` · FormMode=**none** · **cấm** Kind A–G web / Lin* grid / Report |
| route_confirm | **route_a** (autoApprove=ON) — Tab 5 · **Tuần đường** = `#sc-patrol-home` / `DES-MOB-PAT-HOME` · Home quick **Điểm tuần** / tile → switch tab · sync / Lưu trữ → push `#sc-patrol-offline` (`reuse=patrol-offline`) · sibling → toast nhãn · **cấm** `mfeStdUrl` / sheet check-in / push sibling (trừ offline) |
| autoApprove | **ON** |
| e2eQa | ON queued QA · `yarn e2e-qa-mobile` · **cấm** chạy ở TL · **cấm** `yarn start:std` / `mfeStdUrl` |
| prior · data_analy | **confirmed** · `handoff/data_analy-compact.md` · `task_62615c08` |
| prior · po | **confirmed** · `handoff/po-compact.md` · `task_d032b4d9` |
| prior · design | **confirmed** · `handoff/design-compact.md` · `task_77ea403c` · `kit_missing_confirm` **N/A** |
| prior · sa | **confirmed** · `handoff/sa-compact.md` · `solution_confirm=approve` · `task_57e24d09` |
| taskId | `task_ab790c73` |
| updatedAt | `2026-09-12T15:10:25.000Z` |
| thisAction | **Delta hub** `#sc-patrol-home` only · wire **POST/PUT** `patrol/sessions` · hero **server-only** (empty=`—`) · keep GET + pin/kpi/quick/nav |

**Cấm:** gộp sibling / check-in sheet (`GAP-MOB-ACT-01/02`) · invent hub API / `PatrolHomeController` · demo hero sample (`QL.1·Km468+200` / `Nguyễn Văn A` / `07:20`) · toast-only kết ca · `ERP.*` · `mfeStdUrl` · `UIAlert` / `AlertDialog` · start sibling `pending_confirm` (`GAP-MOB-ACT-06`) · Step 4b / migration · scaffold_new.

---

## Source lock

| Key | Value |
|-----|-------|
| ios | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.iOS` · `ios_repo_confirm` |
| android | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.Android` · `android_repo_confirm` |
| bff | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.Bff` · prefix `mobile-bff/api/v1` · proxy catch-all |
| be | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.WebService` · `be_repo_confirm` · **cấm ERP.*** |
| app base | `{BffBase}/mobile-bff/api/v1` — path **không** lặp prefix |
| kit | reuse map hub dual — `LinmTopBar` · `LinmLargeTitle` · `LinmSegment` · `LinmHeroCard` · `LinmProgress` · `LinmPrimaryButton` · `LinmKpiStrip` · `LinmSectionLabel` · `LinmListRow` · `LinmNetSignalMark` · `LinmToast` · `LinmTabBar` · cite `ui/html-to-native-map.md` · **không** `T-KIT-*` |
| scaffold | repos **đã có** — **không** `scaffold_new` · **không** `/mobile-app-architecture` |
| Step 4b | **N/A** — POST/PUT `patrol/sessions` **Live** · **không** `/new-endpoint` / `/database-migration` |

### route_confirm (autoApprove=ON)

| Option | Decision |
|--------|----------|
| **route_a** (chọn) | Tab 5 · tab **Tuần đường** = hub `#sc-patrol-home`. Home quick/tile → switch field tab. Sync / Lưu trữ → push `#sc-patrol-offline`. Bell → toast **Thông báo** · badge **0 ẩn**. Segment **1** → toast **Chấm công** · reset idx **0**. Sibling → `LinmToast` đúng nhãn · **cấm** sheet. |
| route_b / route_c | không dùng |

IA: `(auth) Login → Tab 5 · Tuần đường = this pack · patrol-offline = reuse push`.

---

## Live gap (TL audit · edit_page 2026-09-12)

| Surface | Live | TL task |
|---------|------|---------|
| Hub UI kit (nav/seg/pin/kpi/today/quick) | **shipped** prior packs | **keep** |
| GET `patrol/sessions` + active filter | **shipped** | **reuse** · verify bind |
| Hero empty / fail → demo sample | **GAP** — cấm sample | **T-*-SESSION** · HERO-01 |
| CTA **Mở ca** `btn-open-session` → POST | **GAP** — wire | **T-*-SESSION** · SESSION-01 |
| **Kết ca** detail → PUT (was toast) | **GAP** — wire | **T-*-SESSION** · SESSION-02 |
| POST/PUT BE + BFF proxy | **Live** | **T-BE-*** **n/a** |
| Sibling 6 × `pending_confirm` | backlog | **cấm** auto start |

---

## Tasks

| id | layer | deps | status | skills / `devSlash` | DoD |
|----|-------|------|--------|---------------------|-----|
| T-KIT-PAT-HOME | kit | — | **n/a** | — | Kit hub mapped · Design `kit_missing_confirm` **N/A** |
| **T-IOS-PAT-HOME-SESSION** | ios | SA · route_a | pending | `/agent-dev-ios` · `/ios-new-screen` · `/dev-ios-swiftui` · `/mobile-ui-ux-analy` | Delta SESSION-01/02 + HERO-01 trên `#sc-patrol-home` · `xcodegen` + `xcodebuild` dest **iPhone 17 Pro Max** (+ iPad Pro 13" M5 khi touch) PASS · `implement/ios.md` |
| **T-AND-PAT-HOME-SESSION** | android | SA · route_a | pending | `/agent-dev-android` · `/android-new-screen` · `/dev-android-compose` · cùng ux | Same dual DoD · `./gradlew :app:assembleDebug` PASS · `implement/android.md` |
| **T-BE-API** | be | — | **n/a** | — | POST/PUT sessions **live** · Step 4b **N/A** · **không** `dotnet build` gate TL |
| **T-BE-MIG** | be | — | **n/a** | — | **không** migration |
| T-QA-PAT-HOME-SESSION | qa | T-IOS · T-AND | pending | `/agent-qa-mobile` | AC edit_page · `yarn e2e-qa-mobile` **ok:true** · store PNG · **chỉ** QA role |

**1 action = 1 feature.** Gaps → Dev: **GAP-PAT-HOME-SESSION-01** · **GAP-PAT-HOME-SESSION-02** · **GAP-PAT-HOME-HERO-01**.

---

## T-IOS-PAT-HOME-SESSION — detail

| | |
|--|--|
| `source.repo` | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.iOS` |
| `ssot.zones` | `#sc-patrol-home` · `DES-MOB-PAT-HOME` · heroActive · emptyActive · btn-open-session · pinHere · todayRows · quickRows · btnEndSession(detail) |
| Pattern | Hub tab field · FormMode=none · **không** Modal/Sheet child |

### Delta UI / API (edit_page)

| Gap | Spec |
|-----|------|
| **SESSION-01** | Không active → show `emptyActive` + **`btn-open-session`** (`LinmPrimaryButton`) → **POST** `patrol/sessions` Bearer · success → refresh GET · bind `heroActive` |
| **SESSION-02** | Detail **Kết ca** `btnEndSession` → **PUT** `patrol/sessions/{id}` · **cấm** toast-only · success → refresh / clear active |
| **HERO-01** | Fail/offline/empty → hero fields = **`—`** · **cấm** demo `QL.1·Km468+200` / `Nguyễn Văn A` / `07:20` / sample row · toast lỗi · hub **vẫn mở** |
| keep | segment/pin/kpi/quick/nav · sibling toast · offline badge local · GET list |

### Client contract

| Step | Spec |
|------|------|
| Appear | `GET patrol/sessions` · filter active |
| Open | `POST patrol/sessions` body per SA · **cấm** invent fields |
| End | `PUT patrol/sessions/{id}` · status end |
| Headers | Bearer · `X-Company-Id` · `X-Timezone` (interceptor) |
| Envelope | `ApiResponse<>` · map items → hero/KPI/today · empty route=`—` |

### Build DoD

```bash
cd /Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.iOS && xcodegen generate
xcodebuild -scheme LinmRmms -destination 'platform=iOS Simulator,name=iPhone 17 Pro Max' build
```

Fail → `build_fail_confirm` · **cấm** mark Dev done.

---

## T-AND-PAT-HOME-SESSION — detail

| | |
|--|--|
| `source.repo` | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.Android` |
| `ssot.zones` | cùng DES / `#sc-patrol-home` |
| Pattern | Hub · **không** `AlertDialog` system |

Cùng SESSION-01/02 · HERO-01 · API · keep như T-IOS.  
`MainTabScreen` field tab · Home wire · sync/Lưu trữ → patrol-offline.

### Build DoD

```bash
cd /Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.Android && ./gradlew :app:assembleDebug
```

---

## T-BE-* (Step 4b — N/A)

| | |
|--|--|
| Scope | Reuse Live GET/POST/PUT `api/v1/patrol/sessions` via BFF proxy · **cấm** `PatrolHomeController` |
| Skill | **không** `/new-endpoint` · **không** `/database-migration` · **không** `/create-bff-api-feature` |
| DoD | **n/a** this pack (no BE delta) |

---

## Navigation / toast matrix (P1 · keep)

| Control | Behavior |
|---------|----------|
| Tab Tuần đường | show `#sc-patrol-home` |
| Home quick/tile | switch tab field |
| Nav sync / Lưu trữ | push `#sc-patrol-offline` |
| Bell / seg Chấm công / pin / hero map·check-in / today / quick (trừ Lưu trữ) | toast nhãn · **cấm** sheet |
| **btn-open-session** | **POST** (không toast giả mở ca) |
| **btnEndSession** (detail) | **PUT** (không toast-only) |

---

## Out of scope

- Sibling screens · check-in form · live GPS pin/map/camera
- Invent hub endpoint · hardcode notify badge `3`
- Start 6 sibling `pending_confirm`
- ERP.* · `mfeStdUrl` · Step 4b / migration

---

## Handoff → Dev

| Field | Value |
|-------|-------|
| feature / packKind | `patrol-home` / **`hub`** |
| route_confirm | **route_a** |
| Tasks | `T-IOS-PAT-HOME-SESSION` · `T-AND-PAT-HOME-SESSION` · `T-BE-*` **n/a** · `T-KIT` **n/a** |
| `devSlash` | iOS `/agent-dev-ios` · Android `/agent-dev-android` |
| STATUS | `specs/patrol-home/STATUS.md` |
| Next slash | `/agent-dev-ios` + `/agent-dev-android` (**không** chain turn này · roleOnly=team_lead) |
| e2eQa | ON queued → `/agent-qa*` only |

---

## Version meta (REQUIRED)

| Field | Value |
|-------|-------|
| skillId | agent-tl-mobile |
| skillVersion | 2026.08.19.23 |
| schemaVersion | 1 |
| workflowVersion | 2026.08.31.2 |
| rulesVersion | 2026.08.31.2 |
| generatedAt | 2026-09-12T15:10:25.000Z |
| versionGate | rechecked |
| contentHash | sha256:b5efb555e6c8195ccd93f60d983b57d6b0aa476a919b7f11700157c58241ae0a |
| bffContentHash | sha256:128461fdf9135cf8c168a1b05e92586465d1ef34c117b39bea7d2464a06f55c0 |

---
<!-- Version meta: skillId=agent-tl-mobile skillVersion=2026.08.19.23 schemaVersion=1 workflowVersion=2026.08.31.2 rulesVersion=2026.08.31.2 versionGate=rechecked -->
