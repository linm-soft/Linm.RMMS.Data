# TL — Tasks — patrol-checkin (Ghi điểm tuần · edit_page delta)

| Field | Value |
|-------|-------|
| feature | `patrol-checkin` |
| title | [Mobile] [Tuần đường] -> Ghi điểm tuần |
| this role | `team_lead` · `/agent-tl-mobile` |
| status | **confirmed** |
| changeScope | `edit_page` |
| packKind | **`sheet`** (PO + Design + SA confirm) |
| stack | `native_dual` |
| thisAction | **Ghi điểm tuần** `DES-MOB-PAT-CHECKIN-SHEET` (+ read `DES-MOB-CI-DETAIL`) only · **cấm** gộp pin CTA / map host (`GAP-MOB-ACT-02`) |
| route_confirm | **route_a** (autoApprove=ON) · **reuse** — entry hub `#sc-patrol-home` + map `#sc-patrol-map` + pin `openSheet('checkin')` · deep link n/a P1 · pack `tabs: none` · shell Tab 5 **giữ** · **không** URL/tab mới |
| ios_repo_confirm | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.iOS` · **reuse** |
| android_repo_confirm | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.Android` · **reuse** |
| bff | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.Bff` · prefix `mobile-bff/api/v1` · catch-all proxy · File NuGet khi init · **cấm** local invent controller |
| backend | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.WebService` · DOMAIN-MAP Patrol · **cấm ERP.*** |
| prior · sa | **confirmed** · `be/solution-discovery.md` · `handoff/sa-compact.md` · `task_0bbb7f91` · solution_confirm=approve |
| prior · design | **confirmed** · `handoff/design-compact.md` · `task_e4a48d29` · dual giữ · delta bind |
| prior · po | **confirmed** · `handoff/po-compact.md` · `task_07ab9a33` |
| prior · data_analy | **confirmed** · `_data-analy/patrol-checkin-*.md` · contentHash `sha256:patrol-checkin-control-hint-20260912-edit` · bffContentHash `sha256:patrol-checkin-mobile-bff-20260912-edit` |
| autoApprove | **ON** |
| e2eQa | ON khi QA · `yarn e2e-qa-mobile` · **cấm** e2e / `start:std` / `mfeStdUrl` ở role TL |
| taskId | `task_acb64415` |
| updatedAt | `2026-09-12T13:00:00.000Z` |

**Cấm:** gộp `patrol-pin` / map host · invent `api/v1/patrol-checkin` · fake lat/lng · plan=GPS SSOT · fake HTTP 200 · ERP.* · system alert · `mfeStdUrl` · gộp iOS+Android 1 task id · Step 4b / migration / e2e / implement native ở role TL · `T-KIT-*` (kit đã map).

---

## AskQuestion gates (autoApprove=ON)

| Gate | Decision |
|------|----------|
| `ios_repo_confirm` | reuse iOS path |
| `android_repo_confirm` | reuse Android path |
| `route_confirm` | **route_a** — sheet owner reuse · không tab/URL mới |
| `kit_skip` | **yes** — BottomSheet / TextField / TextArea / Primary / Secondary / Toast / TopBar / `#i-camera` đã map · **cấm** `T-KIT-*` |
| `T-BE-*` | **yes** — `T-BE-PAT-PLAN-PTS` · `T-BE-PAT-CI-PHOTO` · `T-BE-PAT-CI-MIG?` · **không** chạy Step 4b ở TL |
| `T-BFF-*` | **yes** — `T-BFF-FILE-INIT` nếu NuGet File thiếu (`GAP-MOB-BFF-FILE-01`) · `/init-bff-file` ở Dev/BFF turn |

---

## Tasks (edit_page delta · 1 action = feature)

| id | platform | deps | skills | summary |
|----|----------|------|--------|---------|
| `T-IOS-PAT-CI-DELTA` | iOS | SA approve · kit_skip · prior sheet live | `/agent-dev-ios` · `/dev-ios-swiftui` | Delta bind: FileService photo → `attachmentId[]` · match vs BE `plan-points` · live GPS · POST check-ins body ids · offline queue · **cấm** plan=GPS SSOT |
| `T-AND-PAT-CI-DELTA` | Android | serial after iOS preferred | `/agent-dev-android` · `/dev-android-compose` | Compose parity dual · label **Ảnh** · same File/plan/GPS/POST |
| `T-BE-PAT-PLAN-PTS` | BE | GAP-MOB-CI-PLAN-BE-01 | `/new-endpoint` (Dev/T-BE) · **cấm** TL chạy | Kind E `GET api/v1/patrol/sessions/{id}/plan-points` trên `PatrolSessionsController` |
| `T-BE-PAT-CI-PHOTO` | BE | GAP-MOB-CI-PHOTO-UP-01 | `/new-endpoint` / field align (Dev/T-BE) | Confirm POST check-ins photos = FileService attachment ids (`attachmentId[]` / BE rename · **không** fork app-only) |
| `T-BFF-FILE-INIT` | BFF | GAP-MOB-BFF-FILE-01 nếu NuGet thiếu | `/init-bff-file` (Dev) | Wire File NuGet `files/*` · **cấm** fake 200 · else N/A nếu đã có |
| `T-BE-PAT-CI-MIG` | BE | audit only | `/database-migration` (Dev · conditional) | Entity/table nếu plan-points/photo cần · **cấm** JSON vào `PatrolSession.Note` |
| `T-QA-TAB-01` | QA cite | Dev dual PASS | `/agent-qa-mobile` | Shell Tab 5 **giữ** · pack `tabs: none` |

**Serial Dev:** `/agent-dev-ios` (`T-IOS-PAT-CI-DELTA`) → `/agent-dev-android` (`T-AND-PAT-CI-DELTA`) · T-BE/BFF song song (scope=be/bff) · **cấm** gộp hai nền 1 task.

---

## Source map (delta · cite live)

### T-IOS-PAT-CI-DELTA

| Area | Path |
|------|------|
| repo | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.iOS` |
| Feature UI | `Presentation/Features/PatrolCheckIn/*` — **edit bind only** · giữ zones kit |
| Entry | hub/map/pin reuse · `setOpenCheckIn` / `.checkIn` |
| Plan match | Wire `GET …/plan-points` khi live · nearest + haversine `MATCH_RADIUS_M=50` · interim session label · **cấm** plan=GPS SSOT |
| Photo | PhotoRow → FileService init/PUT/commit → `attachmentId[]` · preview `GET files/{id}/object` JWT · **cấm** resign URL |
| Submit | `POST …/check-ins` live · body attachment ids · else `OfflineQueueKind.checkIn` · **cấm** fake 200 |
| GPS | `CoreLocationReader` live · deny `GpsDenyModal` · **cấm** fake |
| ssot.zones | `DES-MOB-PAT-CHECKIN-SHEET` · `DES-MOB-LOC-MISMATCH` · `DES-MOB-LEAVE` · `DES-MOB-GPS-DENY` · `DES-MOB-CI-DETAIL` |
| kit | reuse map · typography `GAP-TYP-01` · cite `ui/html-to-native-map.md` |
| BFF | `{BffBase}/mobile-bff/api/v1` · sessions · plan-points · check-ins · files/* |

### T-AND-PAT-CI-DELTA

| Area | Path |
|------|------|
| repo | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.Android` |
| Feature UI | `presentation/feature/patrolcheckin/*` — parity delta |
| Copy | `LinmCopy` · section-label **Ảnh** |
| Same | FileService · plan-points · POST · GPS · offline · zones dual |

### T-BE-PAT-PLAN-PTS

| | |
|--|--|
| repo | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.WebService` |
| Controller | `PatrolSessionsController` · Kind E `GET …/sessions/{id}/plan-points` |
| Path | `api/v1/patrol/sessions/{id}/plan-points` · **cấm** invent slug |
| TL | pack only · Step 4b **pending Dev/T-BE** |

### T-BE-PAT-CI-PHOTO

| | |
|--|--|
| Align | POST check-ins photo field = FileService guids · map `photoLocalIds`→attachment ids **hoặc** BE rename |
| Hard | **cấm** fake 200 · **cấm** local-only URI as SSOT persist |

### T-BFF-FILE-INIT

| | |
|--|--|
| When | NuGet Mobile.Bff File thiếu (`GAP-MOB-BFF-FILE-01`) |
| Skill | `/init-bff-file` · `files` init/PUT/commit/object |
| Else | **N/A** nếu đã wire · stamp closed |

### T-BE-PAT-CI-MIG

| | |
|--|--|
| Status | **conditional** · audit plan-points / attachment columns |
| Hard | **cấm** parent JSON `PatrolSession.Note` · **cấm** TL chạy migration |

---

## DoD per task

### Shared AC (delta · cite PO + SA + Design)

1. Giữ UI sheet/detail/leave/deny/kit/dual — **delta bind only**.
2. Prefill plan/route từ sessions · match vs **BE plan-points** khi live · interim session label · **cấm** plan=GPS SSOT.
3. Live GPS + haversine 50 m · banner `DES-MOB-LOC-MISMATCH` · **cấm** fake lat/lng.
4. `matchOk=false` → disable Lưu/Ghi nhận · toast chặn · **không** mở leave.
5. GPS deny → `DES-MOB-GPS-DENY` · không submit.
6. PhotoRow → FileService → `attachmentId[]` trên POST · preview object JWT · thiếu File → offline queue + GAP · **cấm** fake 200.
7. Submit `matchOk`: POST check-ins live · else offline queue + toast ok.
8. Dirty leave `DES-MOB-LEAVE` in-app · **cấm** system alert.
9. Detail `#sc-checkin-detail` banner Đã lưu · file preview ids.
10. Dual + Android **Ảnh** · Tab 5 giữ · **cấm** ship pin/map host.

### Build gate (Dev — **cấm** TL chạy)

| Platform | Command |
|----------|---------|
| iOS | `xcodegen generate` + `xcodebuild` iPhone 17 Pro |
| Android | `./gradlew assembleDebug` |
| BFF | `dotnet build` Mobile.Bff |
| BE | `dotnet build` WebService khi T-BE |

---

## Out of pack

| Item | Owner |
|------|-------|
| pin CTA / map host | sibling `patrol-pin` / `patrol-map` |
| invent `api/v1/patrol-checkin` | **cấm** |
| Step 4b / e2e / native implement | **không** ở TL |

---

## Handoff

| Field | Value |
|-------|-------|
| Next | `/agent-dev-ios` (`T-IOS-PAT-CI-DELTA`) → `/agent-dev-android` · T-BE/BFF khi tới lượt |
| Chain this turn | **không** (roleOnly=`team_lead` · GAP-PKT-ROLE-01) |
| QA sau Dev | `yarn e2e-qa-mobile` · **chỉ** `/agent-qa*` |
| Step 4b | **Pending T-BE** · **cấm** TL chạy |

---

## Version meta

| Field | Value |
|-------|-------|
| skillId | agent-tl-mobile |
| skillVersion | 2026.08.20.03 |
| schemaVersion | 1 |
| workflowVersion | 2026.08.25.01 |
| rulesVersion | 2026.08.29.4 |
| generatedAt | `2026-09-12T13:00:00.000Z` |
| versionGate | rechecked |
| contentHash | sha256:patrol-checkin-control-hint-20260912-edit |
| bffContentHash | sha256:patrol-checkin-mobile-bff-20260912-edit |

---
<!-- Version meta: skillId=agent-tl-mobile skillVersion=2026.08.20.03 schemaVersion=1 workflowVersion=2026.08.25.01 rulesVersion=2026.08.29.4 versionGate=rechecked -->
