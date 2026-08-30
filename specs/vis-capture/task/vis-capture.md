# Team lead — Task — vis-capture (Nhận diện mặt đường)

| Field | Value |
|-------|-------|
| feature | `vis-capture` |
| title | [Mobile] [Vấn đề] -> Nhận diện mặt đường |
| this role | `team_lead` · `/agent-tl-mobile` |
| status | `confirmed` |
| changeScope | `new_page` |
| packKind | **`screen`** (PO + Design + SA confirm · GAP-MOB-VIS-PACK-01 **closed** · **cấm** sheet chrome / `#sheet-*`) |
| stack | `native_dual` |
| Feature Kind | **screen** · `DES-MOB-VIS-CAPTURE` · `#sc-vis-capture` · **cấm** Kind A–G web / Grid / Report / invent tab / `mfeStdUrl` |
| route_confirm | **route_a** — `incident-list` `.vn-banner` + AI hub chip → push `#sc-vis-capture` · Back / Bỏ qua → `incident-list` · tab shell `incident` active · `tabs: none` pack · **cấm** deep-link web / `mfeStdUrl` |
| autoApprove | **ON** |
| e2eQa | ON khi QA · `yarn e2e-qa-mobile` · sim 6.9" + emulator + Maestro · PNG `qa/screens` + `qa/store/vis-capture` · **cấm** `yarn start:std` / `mfeStdUrl` / `yarn e2e-qa` web · **cấm** e2e ở TL |
| prior · data_analy | **confirmed** · `_data-analy/vis-capture-control-hint.md` · `vis-capture-bff-endpoints.md` · `vis-capture-action-tree.md` · `vis-capture-real-data.md` · contentHash `sha256:vis-capture-control-hint-20260829` · realDataHash `sha256:vis-capture-real-data-20260829` · bffContentHash `sha256:vis-capture-mobile-bff-20260829` · actionTreeHash `sha256:vis-capture-action-tree-20260829` |
| prior · po | **confirmed** · `po/requirement.md` · `task_8735d614` |
| prior · design | **confirmed** · `ui/design.md` · `ui/ux-analy.md` · `ui/html-to-native-map.md` · dual proto · `ui/review/demo-parity.md` · `task_27b1bf39` |
| prior · sa | **confirmed** · `be/solution-discovery.md` · `solution_confirm=approve` · GAP-MOB-VIS-DETECT-01 → T-BE · `task_5dc1deb6` |
| taskId | `task_47d8e017` |
| updatedAt | `2026-08-29T09:45:30.000Z` |
| thisAction | **Nhận diện mặt đường** `#sc-vis-capture` only · still PhotoRow + GPS gate ≤ 30 m → `POST ai-vision/detect` → rows · **Gắn sự cố** / **Bỏ qua** · **cấm** gộp `cam-patrol` / `det-hitl` / `incident-create` / `cam-view` |

**Cấm:** gộp sibling (`GAP-MOB-ACT-01/02`) · invent `api/v1/vis-capture` / `VisCaptureController` · ERP.* · WebView HTML · `mfeStdUrl` · `UIAlert` / `AlertDialog` · watermark Gói / device label / «Có mạng» / score % row P1 · fake lat/lng · gõ tay tọa độ · on-device vision · continuous finder · fake 200 / fake class / fake SC · start sibling `pending_confirm` (`GAP-MOB-ACT-06`) · enqueue Gắn/Bỏ qua/detect/camera/GPS (`GAP-MOB-ACT-07`) · `scaffold_new` / `/mobile-app-architecture` (repos đã có) · TL chạy Step 4b / migration / e2e / `yarn build` / `yarn start:std` · gộp iOS+Android 1 task id.

---

## Source lock

| Key | Value |
|-----|-------|
| ios | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.iOS` · `ios_repo_confirm` |
| android | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.Android` · `android_repo_confirm` |
| bff | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.Bff` · prefix `mobile-bff/api/v1` · proxy catch-all · **T-BFF n/a** |
| be | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.WebService` · `be_repo_confirm` · AiVision + Incident + Patrol · **cấm ERP.*** |
| app base | `{BffBase}/mobile-bff/api/v1` — path **không** lặp prefix |
| API P1 | `POST ai-vision/detect` (body ImageBase64 · Lat · Lng · AccuracyM · Engine/Note) · optional uploads · optional `GET patrol/sessions` · `POST incident/incidents` (DetectionId + stamp) |
| kit | reuse map dual — `LinmTopBar` · SectionLabel · PhotoRow · `LinmListRow` · Badge · `LinmPrimaryButton` · `LinmSecondaryButton` · `LinmToast` · GPS deny `DES-MOB-GPS-DENY` · `LinmTabBar` shell · map `ui/html-to-native-map.md` · **không** `T-KIT-*` · `kit_missing_confirm` **none** |
| scaffold | repos **đã có** — **không** `scaffold_new` · **không** `/mobile-app-architecture` trước Dev |
| Step 4b | **Pending T-BE** (engine Signed) — **cấm** TL chạy `/new-endpoint` / `/database-migration` turn này · client P1 ship **được** trên stub live |

### route_confirm (autoApprove=ON)

| Option | Decision |
|--------|----------|
| **route_a** (chọn) | Entry: `incident-list` `.vn-banner` **Nhận diện mặt đường** `#i-camera` → **push** `#sc-vis-capture` `DES-MOB-VIS-CAPTURE`. AI hub / chip = `shared_action` cùng route (**không** enqueue). Back leading · CTA **Bỏ qua** → `go('incident-list')`. Shell Tab 5 **giữ** · tab **`incident`** (Vấn đề) active · pack `tabs: none` (`GAP-TAB-01`). GPS deny → modal reuse `DES-MOB-GPS-DENY`. Offline attach → queue `OfflineQueueKind.incident` · sibling `patrol-offline` reuse (**cấm** re-own). **Cấm** invent tab 6 · **cấm** deep-link web / `mfeStdUrl`. |
| route_b | — không dùng |
| route_c | — không dùng |

IA lock (design · ux-analy · SA): `(auth) → Tab 5 · incident-list → push vis-capture · Back/Skip = list`. **Cấm** `TabView` / M3 `NavigationBar` thay `LinmTabBar`.

AskQuestion (autoApprove=ON · không chờ board): `ios_repo_confirm` · `android_repo_confirm` · `route_confirm=route_a` · `kit_missing_confirm=none` · `2026-08-29T09:45:30.000Z`.

---

## Live gap (TL audit 2026-08-29)

| Surface | Live | TL task |
|---------|------|---------|
| iOS `#sc-vis-capture` | **DELTA** — **không** `Presentation/Features/VisCapture/*` · banner `bannerVis` = toast only | **T-IOS-VIS-CAP** |
| Android `#sc-vis-capture` | **DELTA** — **không** `presentation/feature/viscapture/*` · banner toast only | **T-AND-VIS-CAP** |
| `POST ai-vision/detect` | BE stub live · body ImageBase64/Lat/Lng/AccuracyM · app `DetectAiVisionUseCase` reuse (CamPatrol/FieldReflect/IncidentCreate) | **reuse** path · VisCapture wire full body + GPS gate · **cấm** invent path |
| `POST incident/incidents` | Create live + DetectionId · `CreateIncidentUseCase` reuse | **reuse** · Gắn bind |
| `GET patrol/sessions` | live · optional Loc Route/Km | **reuse** optional |
| Mobile.Bff proxy | catch-all đủ | **T-BFF n/a** |
| Detect engine Signed | stub `DetectStubAsync` | **T-BE-VIS-DETECT-ENGINE** pending · **GAP-MOB-VIS-DETECT-01** · P1 client ship trên stub OK |
| Schema / MIG | AccuracyM request-only | **T-BE-VIS-DETECT-MIG n/a** |
| Kit dual | map Design · kit_missing **none** | **T-KIT n/a** · **cấm** raw chrome |
| Entry banner / hub | toast P1 | Dev đổi toast → **push** VisCapture · **cấm** reimplement list/hub |
| Score % / continuous finder / on-device | OUT | **cấm** P1 |
| Sibling cam-patrol / det-hitl / incident-create | OUT | **cấm** gộp / start |

---

## Tasks

| id | layer | deps | status | skills | DoD |
|----|-------|------|--------|--------|-----|
| T-KIT-VIS-CAP | kit | — | **n/a** | — | Kit **đã map dual** · Design `kit_missing_confirm` **none** — **không** giao Dev kit |
| **T-IOS-VIS-CAP** | ios | SA · route_a | **pending** | `/agent-dev-ios` · `/ios-new-screen` · `/dev-ios-swiftui` · `/mobile-ui-ux-analy` packet · MVVM | Ship `Presentation/Features/VisCapture/*` · PhotoRow still · GPS gate ≤ 30 · detect/attach/offline · entry wire · `xcodegen` + `xcodebuild` dest **iPhone 17 Pro** PASS · ghi `implement/ios.md` |
| **T-AND-VIS-CAP** | android | SA · route_a · serial sau iOS preferred | **pending** | `/agent-dev-android` · `/android-new-screen` · `/dev-android-compose` · `/android-new-api-call` · cùng ux packet | Same field/API/DoD dual · `presentation/feature/viscapture/*` · section «Ảnh hiện trường» + «Bỏ qua» **bắt buộc** · `./gradlew :app:assembleDebug` PASS · ghi `implement/android.md` |
| **T-BE-VIS-DETECT-ENGINE** | be | SA GAP-MOB-VIS-DETECT-01 | **pending** | `/agent-dev` BE · Step 4b khi tới Dev/BE · **không** TL | Harden `DetectStubAsync` → Signed engine trên **đúng** `POST api/v1/ai-vision/detect` · **cấm** invent path/DTO · DoD **`dotnet build`** `{BackendRoot}` (**GAP-MOB-BE-BUILD-01**) |
| **T-BE-VIS-DETECT-MIG** | be | — | **n/a** | — | **không** `/database-migration` P1 · AccuracyM request-only · **cấm** invent `rmms_vis_capture` |
| T-BFF-VIS-CAP | bff | — | **n/a** | — | proxy catch-all đủ · **cấm** `VisCaptureController` |
| T-QA-VIS-CAP | qa | T-IOS · T-AND | pending | `/agent-qa-mobile` | AC slug `vis-capture` only · `yarn e2e-qa-mobile` · live sim 6.9" + emulator · store PNG `qa/store/vis-capture` · **cấm** sibling in-scope · **cấm** `yarn e2e-qa` web |
| T-QA-TAB-01 | qa cite | Dev dual | pending | `/agent-qa-mobile` | Shell Tab 5 **giữ** · pack `tabs: none` · incident active · **cấm** invent (`GAP-TAB-01`) |

**1 action = 1 feature.** **Cấm** gộp sibling vào task file này như in-scope implement. Serial Dev: iOS → Android · **cấm** 1 id gộp hai OS. T-BE engine **không** chặn P1 client ship trên stub (SA).

---

## T-IOS-VIS-CAP — detail

| | |
|--|--|
| `source.repo` | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.iOS` |
| `ssot.zones` | `DES-MOB-VIS-CAPTURE` · `DES-MOB-GPS-DENY` · `#sc-vis-capture` |
| Pattern | Full **screen** push · **không** bottom-sheet · frame proto 390×844 |

### UI (kit cite — `ui/html-to-native-map.md`)

| Field | Kit | Notes |
|-------|-----|-------|
| navBack | `LinmTopBar` leading `#i-chevron-left` + text **Vấn đề** | `go('incident-list')` |
| title | `LinmTopBar` | **Nhận diện mặt đường** fixed 17 |
| sectionPhoto | SectionLabel | **Ảnh hiện trường** · label **13** |
| photos | PhotoRow · `#i-camera` | still `openCapture('vision')` · filled preview · **cấm** continuous finder |
| rowLoc | `LinmListRow` | **Vị trí đã chốt** · GPS + optional sessions · fallback `QL.1 · Km 1556+050` · label 13 / value ≥16 |
| rowAcc | `LinmListRow` | **Sai số định vị** · `±{n} m` từ device AccuracyM |
| rowClass | `LinmListRow` | **Phân loại** · bind live `DefectClass` · **cấm** fake «Nứt dọc» khi fail |
| rowSev | `LinmListRow` + Badge | **Mức** · bind `Severity` · Cao=orange · Nghiêm trọng=red · Trung bình/Thấp muted/green |
| btnAttach | `LinmPrimaryButton` | **Gắn sự cố** · POST create / queue · busy · disable !detect / !HasGps / deny |
| btnSkip | `LinmSecondaryButton` | **Bỏ qua** · local dismiss · **không** API |
| toastOk | `LinmToast` | **Đã gắn sự cố** |
| toastGpsBlock | `LinmToast` | thiếu GPS / AccuracyM > 30 · **không** POST detect |
| gpsDeny | modal `DES-MOB-GPS-DENY` | deny · chặn detect + Gắn · **cấm** `UIAlert` |
| tabIncident | `LinmTabBar` | selected **Vấn đề** · label **13** |

**Cấm** ship foot Gói / device label / «Có mạng» / score % / thuật toán tên.

### Severity display map

| Severity | Badge |
|----------|-------|
| Cao | orange |
| Nghiêm trọng | red |
| Trung bình / Thấp | muted / green |

### Field bind (real-data · SA)

| uiField | → wire |
|---------|--------|
| photos | `ImageBase64` (P1) · optional uploads |
| rowLoc | sessions Route/Km → Create `RouteName`/`KmStart` · detect `RouteLabel` |
| rowAcc | `AccuracyM` request · gate ≤ 30 |
| rowClass | detect `DefectClass` → Create `Title`/`IncidentType` |
| rowSev | detect `Severity` |
| btnAttach | Create + `DetectionId` + `HasGps=true` · `RequestedAt` UTC |

### API / store

| Step | Spec |
|------|------|
| GPS | `GetCurrentLocationUseCase` · `CoreLocationReader` · stamp chốt · gate **AccuracyM ≤ 30** trước detect (**GAP-MOB-VIS-GPS-01**) |
| Optional Loc | `FetchPatrolSessionsUseCase` filter `Status=Đang tuần` · fail/empty → demo Loc SSOT · Acc vẫn device |
| Detect | reuse `DetectAiVisionUseCase` → `POST ai-vision/detect` full body · Engine default `"P1"` |
| Attach | reuse `CreateIncidentUseCase` → `POST incident/incidents` |
| Fail detect | toast lỗi · **cấm** fake class |
| Fail attach / offline | `OfflineQueueStore` · `OfflineQueueKind.incident` · toast · sibling `patrol-offline` |
| Camera | still PhotoRow / field-reflect picker reuse · deny → toast · **cấm** fake detection |
| Token | Keychain Bearer + company headers · **cấm** URLSession trong View |

### Router / shell

| Entry | Behavior |
|-------|----------|
| `IncidentListViewModel` `.bannerVis` | **đổi** toast → push VisCapture (`setOnOpenVisCapture` / router) |
| AI hub / chip | cùng push · shared_action |
| Back / Skip | pop → incident-list |
| Tab `.incident` | giữ list root · VisCapture trên stack list |
| DI | `AppContainer` wire `VisCaptureViewModel` + location + detect + create + optional sessions |
| Paths | `Presentation/Features/VisCapture/*` · copy `VisCaptureCopy` / `LinmCopy` VN SSOT |

**Cấm** WebView HTML · VM→URLSession trực tiếp · invent `vis-capture` API slug.

### Build DoD

```bash
cd /Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.iOS && xcodegen generate
xcodebuild -scheme LinmRmms -destination 'platform=iOS Simulator,name=iPhone 17 Pro' build
```

Fail → `build_fail_confirm` · **cấm** mark Dev done. Ghi `implement/ios.md`.

Optional Dest (skill TL): **iPad Pro 13-inch (M5)** khi team yêu cầu — **không** claim family `1` store. PrivacyInfo / `NSCameraUsageDescription` + location **đã có** — Dev verify copy đủ «nhận diện mặt đường».

---

## T-AND-VIS-CAP — detail

| | |
|--|--|
| `source.repo` | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.Android` |
| `ssot.zones` | cùng iOS · `#sc-vis-capture` · frame 412×915 |
| Pattern | Full screen · **không** bottom-sheet · Material chrome OK |

### UI / API

Cùng bảng field · severity map · bind · GPS gate · kit cite như T-IOS.  
Back: **icon-only** chevron OK (`GAP-MOB-ALIGN-01`).  
**HARD dual:** section **Ảnh hiện trường** + CTA **Bỏ qua** **bắt buộc** (**GAP-MOB-VIS-DUAL-01**).

### Router / shell

| Entry | Behavior |
|-------|----------|
| Incident list banner | toast → **navigate** VisCapture |
| AI hub / chip | cùng route |
| Back / Skip | pop list |
| `MainTab.Incident` | list root · VisCapture trên nav host |
| DI | Hilt `VisCaptureViewModel` · use cases · Retrofit `@POST("ai-vision/detect")` reuse · `@POST` incident reuse |
| Paths | `presentation/feature/viscapture/*` |

### Build DoD

```bash
cd /Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.Android && ./gradlew :app:assembleDebug
```

Fail → `build_fail_confirm` · **cấm** mark Dev done. Ghi `implement/android.md`.

CAMERA + location **đã declare** — Dev verify Play Data safety / strings. Optional verify BFF `dotnet build` (Dev, **không** TL).

---

## T-BE-VIS-DETECT-ENGINE — detail

| | |
|--|--|
| `source.repo` | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.WebService` |
| Gap | **GAP-MOB-VIS-DETECT-01** — stub → Signed runtime |
| Path | **giữ** `POST api/v1/ai-vision/detect` · `AiVisionOpsController.Detect` · **cấm** invent `vis-capture` / new controller |
| Body/DTO | **giữ** `DetectAiVisionRequest` live fields · **cấm** expand DTO lại P1 |
| Step 4b | Chạy **khi tới Dev/BE role** — **cấm** TL turn này · **cấm** migration invent bảng |
| DoD | `dotnet build` repo đổi PASS (`be-dotnet-build-gate.md` · **GAP-MOB-BE-BUILD-01**) · response vẫn `ApiResponse<AiVisionDetectionDto>` bind DefectClass/Severity |

**T-BE-VIS-DETECT-MIG** = **n/a**. **T-BFF** = **n/a**.

Client P1 (**T-IOS** / **T-AND**) **không** chờ Signed engine — stub đủ bind live class/severity.

---

## Device / field AC (Dev + QA cite)

| ID | AC |
|----|-----|
| AC-D-01 | Offline / POST fail → screen mở · queue attach · toast · **cấm** full-screen block · **cấm** fake 200/class |
| AC-D-02 | GPS deny → `DES-MOB-GPS-DENY` · chặn detect + Gắn · **cấm** system alert |
| AC-D-03 | AccuracyM > 30 → toastGpsBlock · **không** POST detect |
| AC-D-04 | **Cấm** `UIAlert` / `AlertDialog` — toast / in-app modal only |
| AC-D-05 | Camera still · deny toast · **cấm** fake detection · **cấm** continuous finder |
| AC-D-06 | Safe area · TopBar + PhotoRow + rows + CTAs + tab |
| AC-D-10 | Shell tab **Vấn đề** · pack `tabs: none` (`GAP-TAB-01`) |
| AC-D-12 | label/section **13** · row value / button ≥**16** (`GAP-TYP-01`) · `LinmTokens` |
| AC-F-01 | Photo + GPS ≤ 30 → POST detect · bind Class/Sev |
| AC-F-02 | Gắn → POST incident + DetectionId · toast **Đã gắn sự cố** |
| AC-F-03 | Bỏ qua / Back → incident-list · **không** API |
| AC-F-04 | Banner list → push VisCapture (không còn toast-only) |
| AC-F-05 | Dual parity copy · Android section + Bỏ qua |
| AC-F-06 | Loc fallback demo SSOT khi sessions fail · Acc/Class/Sev không fake |
| AC-F-07 | App chỉ `{BffPrefix}` · **cấm** `:5101` / ERP.* / invent path |

---

## Out of pack / sibling

| Slug | Note |
|------|------|
| `cam-patrol` | continuous finder OUT |
| `det-hitl` | HITL OUT |
| `incident-create` | form OUT |
| `cam-view` | OUT |
| `patrol-offline` | reuse queue only · **không** enqueue |
| `incident-list` | entry + back · **không** reimplement |

---

## Handoff → Dev

| Field | Value |
|-------|-------|
| Next slash | `/agent-dev-ios` rồi `/agent-dev-android` (serial) |
| Tasks | `T-IOS-VIS-CAP` · `T-AND-VIS-CAP` · `T-BE-VIS-DETECT-ENGINE` (BE later) |
| SSOT | `po/requirement.md` · `ui/design.md` · `ui/ux-analy.md` · `ui/html-to-native-map.md` · dual proto · `be/solution-discovery.md` |
| Verify Dev | iOS xcodegen + xcodebuild **iPhone 17 Pro** · Android `assembleDebug` · BE/BFF `dotnet build` khi Write |
| e2eQa | queued `/agent-qa*` · **cấm** Dev/TL chạy e2e thay QA |
| Chain this turn | **không** (roleOnly=`team_lead` · GAP-PKT-ROLE-01) |

---

## Version meta (REQUIRED)

| Field | Value |
|-------|-------|
| skillId | agent-tl-mobile |
| skillVersion | 2026.08.29.1 |
| schemaVersion | 1 |
| workflowVersion | 2026.08.29.1 |
| rulesVersion | 2026.08.29.5 |
| generatedAt | `2026-08-29T09:45:30.000Z` |
| versionGate | rechecked |
| contentHash | sha256:vis-capture-control-hint-20260829 |
| realDataHash | sha256:vis-capture-real-data-20260829 |
| bffContentHash | sha256:vis-capture-mobile-bff-20260829 |
| actionTreeHash | sha256:vis-capture-action-tree-20260829 |
| priorDesignHash | sha256:vis-capture-design-20260829 |
| priorPoHash | sha256:vis-capture-po-requirement-20260829 |
| priorSaHash | sha256:vis-capture-sa-solution-20260829 |
| taskId | `task_47d8e017` |

---
<!-- Version meta: skillId=agent-tl-mobile skillVersion=2026.08.29.1 schemaVersion=1 workflowVersion=2026.08.29.1 rulesVersion=2026.08.29.5 versionGate=rechecked -->
