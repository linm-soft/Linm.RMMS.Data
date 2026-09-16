# TL — Tasks — field-reflect (Ghi nhận hư hỏng · live-only sessions)

| Field | Value |
|-------|-------|
| feature | `field-reflect` |
| title | [Mobile] [Tuần đường] -> Ghi nhận hư hỏng · live-only sessions |
| this role | `team_lead` · `/agent-tl-mobile` |
| status | **confirmed** |
| changeScope | `edit_page` · gap=`field_reflect_sessions_live_only` · **GAP-MOB-FIELD-SESS-01** |
| packKind | **`screen`** (PO + Design + SA confirm · PACK-01 closed) |
| stack | `native_dual` |
| thisAction | **Ghi nhận hư hỏng** `DES-MOB-FIELD-REFLECT` (+ kind `DES-MOB-FIELD-KIND`) only · **cấm** gộp sibling (`GAP-MOB-ACT-01/02`) |
| deltaThisEdit | **GAP-MOB-FIELD-SESS-01** — remove `itemsOrDemo`/`demoToday` · live-only GET `patrol/sessions` · empty/fail → empty `locationRow` + `toastSessionsFail` · prior screen ship **giữ** |
| route_confirm | **route_a** (autoApprove=ON · **giữ**) · entry hub `#sc-patrol-home` `#row-reflect` · pick `#sc-field-pick` · pack `tabs: none` · shell Tab 5 **giữ** · tab **`field`** · **không** URL mới |
| ios_repo_confirm | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.iOS` · **reuse** |
| android_repo_confirm | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.Android` · **reuse** |
| bff | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.Bff` · prefix `mobile-bff/api/v1` · catch-all · **paths unchanged** · **cấm** `FieldReflectController` local |
| backend | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.WebService` · DOMAIN-MAP Patrol + AiVision + Incident + Integration · **cấm ERP.*** |
| prior · sa | **confirmed** · `be/solution-discovery.md` · `handoff/sa-compact.md` · `task_a2fe10c3` · solution_confirm=approve · Step 4b **N/A** |
| prior · design | **confirmed** · `ui/design.md` · dual proto · `handoff/design-compact.md` · `task_91131e02` |
| prior · po | **confirmed** · `po/requirement.md` · `handoff/po-compact.md` · `task_72e56250` |
| prior · data_analy | **confirmed** · `_data-analy/field-reflect-*.md` · `handoff/data_analy-compact.md` · `task_d6e72d87` · bffContentHash `sha256:field-reflect-mobile-bff-20260912` |
| priorTlTaskId | `task_387eac33` **giữ** (full screen ship) |
| autoApprove | **ON** |
| e2eQa | ON queued QA · **cấm** e2e / `yarn start:std` / `mfeStdUrl` / yarn build ở role TL |
| taskId | `task_1d0e4dfd` |
| updatedAt | `2026-09-12T10:52:00.000Z` |

**Cấm:** gộp sibling (`GAP-MOB-ACT-01/02/07`) · invent `api/v1/field-reflect` · invent checklist API · fake lat/lng · fake 200 · ERP.* · system alert · watermark Gói · device label · `mfeStdUrl` · gộp iOS+Android 1 task id · `itemsOrDemo` / `demoToday` fallback · Step 4b / migration / e2e / implement native ở role TL.

---

## AskQuestion gates (autoApprove=ON)

| Gate | Decision |
|------|----------|
| `ios_repo_confirm` | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.iOS` · reuse |
| `android_repo_confirm` | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.Android` · reuse |
| `route_confirm` | **route_a giữ** — screen owner `field-reflect` · entry hub `#row-reflect` · không tab mới · không deep link P1 · **không** URL mới |
| `kit_skip` | **yes** — TopBar / KindPills / ListRow / Primary / Secondary / Toast / GPS deny **đã map** · PhotoRow + CheckboxList compose **approve** · **cấm** `T-KIT-*` |
| `T-BE-*` | **n/a this edit** — client sessions behavior only · MEDIA Accept · **cấm** TL chạy Step 4b |
| `T-BFF-*` | **n/a** — Mobile.Bff catch-all đủ |

AskQuestion: `route_confirm=route_a` · `ios_repo_confirm` · `android_repo_confirm` · `kit_skip=yes` · `T-BE=n/a` · `2026-09-12T10:52:00.000Z`.

---

## Live gap (TL audit 2026-09-12 · edit_page)

| Surface | Live | TL task |
|---------|------|---------|
| iOS `FieldReflectViewModel` sessions | **DELTA** — `(fetchSessions).itemsOrDemo` / `demoToday` khi GET fail | **T-IOS-FIELD-SESS-LIVE** |
| Android `FieldReflectViewModel` sessions | **DELTA** — cùng demo fallback | **T-AND-FIELD-SESS-LIVE** |
| `locationRow` empty / toastSessionsFail | Design proto `?empty=1` · `?fail=1` · native **chưa** live-only | wire dual |
| `GET patrol/sessions` | BE + BFF proxy live | **reuse** · **cấm** invent path |
| Detect / Create / asset-types / uploads / GPS / kind / CHK / Draft | prior ship | **keep** · prior `T-IOS-FIELD-REF` / `T-AND-FIELD-REF` **giữ** |
| `T-BE-*` / Step 4b | none this edit | **n/a** |
| Kit / route | dual map · route_a | **reuse** · **cấm** `T-KIT-*` |

---

## Tasks (1 action = 1 feature · this edit)

| id | platform | deps | skills / `devSlash` | summary |
|----|----------|------|---------------------|---------|
| `T-IOS-FIELD-SESS-LIVE` | iOS | SA `task_a2fe10c3` · Design dual · route_a **giữ** | `/agent-dev-ios` · `/dev-ios-swiftui` | **GAP-MOB-FIELD-SESS-01** · remove `itemsOrDemo`/`demoToday` · live-only outcomes + `toastSessionsFail` · empty `locationRow` |
| `T-AND-FIELD-SESS-LIVE` | Android | SA · Design · serial after iOS preferred | `/agent-dev-android` · `/dev-android-compose` | parity dual live-only sessions |
| `T-IOS-FIELD-REF` | iOS | — | — | prior **shipped** · **giữ** · **không** reopen full screen |
| `T-AND-FIELD-REF` | Android | — | — | prior **shipped** · **giữ** |
| `T-BE-*` / `T-BFF-*` / `T-KIT-*` | — | — | — | **N/A this edit** |
| `T-QA-TAB-01` | QA cite | Dev SESS dual PASS | `/agent-qa-mobile` | Shell Tab 5 **giữ** · pack `tabs: none` · **cấm** invent (`GAP-TAB-01`) |
| `T-QA-FIELD-SESS-LIVE` | QA | T-IOS · T-AND SESS-LIVE | `/agent-qa-mobile` | empty/fail/live outcomes · Maestro slug `field-reflect` · **chỉ** `/agent-qa*` · **cấm** e2e ở TL |
| `T-QA-FIELD-REF` | QA | — | — | prior **giữ** · re-run after SESS-LIVE |

**Serial Dev this edit:** `/agent-dev-ios` (`T-IOS-FIELD-SESS-LIVE`) → `/agent-dev-android` (`T-AND-FIELD-SESS-LIVE`) · **cấm** gộp dual 1 task · **cấm** TL build/e2e/Step 4b.

---

## Delta this edit (`task_1d0e4dfd` · GAP-MOB-FIELD-SESS-01)

| Concern | Decision |
|---------|----------|
| Scope | Client sessions prefill only · **cấm** API/BFF/DTO invent |
| Current | `(fetchSessions).itemsOrDemo` → demo tuyến khi GET fail |
| New DoD | **live-only** · `.loaded` bind real · empty/no-active → empty location + toast «Không có ca đang tuần» · `.loadFailed` → empty + `toastSessionsFail` «Không tải được ca tuần» |
| Keep | kind / photos / detect / severity / checklist / Create / Draft / GPS deny |
| BFF / API | GET `patrol/sessions` reuse · detect/incident/asset-types keep · Step 4b **N/A** |
| route_confirm | **route_a giữ** · không URL mới |

### Client outcome matrix (HARD)

| Outcome | UI |
|---------|-----|
| GET OK + active «Đang tuần» | bind Route·Km trên `locationRow` |
| GET OK + empty / no active | empty `—` · toast empty-session · Draft OK · GPS vẫn chạy |
| GET fail / network / 4xx | empty · `toastSessionsFail` · **cấm** `itemsOrDemo` / `demoToday` |

---

## Source map (cite live paths)

### T-IOS-FIELD-SESS-LIVE

| Area | Path |
|------|------|
| repo | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.iOS` |
| ViewModel | `Presentation/Features/FieldReflect/FieldReflectViewModel.swift` — replace `itemsOrDemo`/`demoToday` with live-only state |
| UI bind | `Presentation/Features/FieldReflect/*` — empty `locationRow` · kit `LinmToast` `toastSessionsFail` · **cấm** `UIAlertController` |
| Use case | **reuse** `FetchPatrolSessionsUseCase` · `PatrolRepository*` · **no** new endpoint |
| Keep | detect / create / draft / GPS / kind / PhotoRow / checklist · prior ship |
| ssot.zones | `#sc-field-reflect` · `DES-MOB-FIELD-REFLECT` · `DES-MOB-FIELD-KIND` · `DES-MOB-GPS-DENY` |
| BFF | `GET patrol/sessions` live-only · base `{BffBase}/mobile-bff/api/v1` · **cấm** invent path |
| DoD | `xcodebuild` dest **iPhone 17 Pro Max** + **iPad Pro 13-inch (M5)** · field parity · **cấm** demo fallback · cite Design `?empty=1`/`?fail=1` |

### T-AND-FIELD-SESS-LIVE

| Area | Path |
|------|------|
| repo | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.Android` |
| ViewModel | `presentation/feature/fieldreflect/FieldReflectViewModel.kt` — same live-only remove demo |
| UI bind | `presentation/feature/fieldreflect/*` — empty location · Toast · **cấm** `AlertDialog` system |
| Use case | same dual · **reuse** fetch sessions |
| DoD | `./gradlew` assemble · parity dual · **cấm** `itemsOrDemo` |

### T-BE / T-BFF

| | |
|--|--|
| Decision | **N/A this edit** · SA FormMode↔API reuse · MEDIA Accept · migration **none** · **cấm** Step 4b ở TL |

---

## DoD (Dev · not TL)

| Gate | Criteria |
|------|----------|
| Live-only | 0 `itemsOrDemo` / `demoToday` on FieldReflect sessions path |
| Empty / fail | empty `locationRow` + toast copy SSOT Design · kit Toast only |
| Keep | detect/create/draft/GPS/kind/CHK unchanged |
| Build | iOS xcodebuild dual dest · Android gradlew · **cấm** TL chạy |
| E2E | queued `/agent-qa-mobile` · **cấm** TL e2e / `start:std` |
| ERP / mfe | **none** · **cấm** invent API |

---

## Handoff → Dev

| Field | Value |
|-------|-------|
| next | `/agent-dev-ios` · `T-IOS-FIELD-SESS-LIVE` → `/agent-dev-android` · `T-AND-FIELD-SESS-LIVE` |
| compact | `handoff/team_lead-compact.md` |
| gap | **GAP-MOB-FIELD-SESS-01** OPEN → Dev dual |
| Chain this turn | **không** (roleOnly=`team_lead` · GAP-PKT-ROLE-01) |

---

## Version meta (REQUIRED)

| Field | Value |
|-------|-------|
| skillId | agent-tl-mobile |
| skillVersion | 2026.09.05.03 |
| schemaVersion | 1 |
| workflowVersion | 2026.09.05.03 |
| rulesVersion | 2026.09.05.8 |
| generatedAt | `2026-09-12T10:52:00.000Z` |
| versionGate | rechecked |
| contentHash | sha256:43744be6c3dc+field-reflect-sess-live-20260912 |
| bffContentHash | sha256:field-reflect-mobile-bff-20260912 |

---
<!-- Version meta: skillId=agent-tl-mobile skillVersion=2026.09.05.03 schemaVersion=1 workflowVersion=2026.09.05.03 rulesVersion=2026.09.05.8 versionGate=rechecked -->
