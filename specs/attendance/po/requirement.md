# PO — Requirement — attendance (mobile list · Chấm công)

| Field | Value |
|-------|-------|
| feature | `attendance` |
| title | [Mobile] Chấm công |
| this role | `po` · `/agent-po-mobile` |
| changeScope | `edit_page` |
| packKind | **`list`** (PO confirm · data-analy đề xuất · UI = hub DES-MOB-ATT) |
| stack | `native_dual` |
| thisAction | **Chấm công hub** `#sc-attendance` only · entry patrol-home segment · **không** gộp sibling report / day-detail |
| status | `confirmed` (autoApprove=ON) |
| requestSource | run packet `task_35851eba` · `/agent-qldb-workflow-mobile` · roleOnly=`po` · `/agent-po-mobile` |
| autoApprove | **ON** — Design/SA tự confirm **khi tới lượt** · turn này **không** chain |
| e2eQa | ON khi QA · `yarn e2e-qa-mobile` · sim 6.9" + emulator + Maestro · PNG `qa/screens` + `qa/store/attendance` · **cấm** `yarn e2e-qa` / `yarn start:std` / `mfeStdUrl` / test thủ công thay runtime |
| prior | data-analy **confirmed** · `specs/_data-analy/attendance-control-hint.md` · `attendance-bff-endpoints.md` · `attendance-action-tree.md` · `attendance-real-data.md` · contentHash `sha256:attendance-mobile-hub-20260819` · bffContentHash `sha256:attendance-mobile-bff-20260819` · **no Excel** |
| `devSlash` | `/agent-dev-ios` + `/agent-dev-android` |
| updatedAt | `2026-08-19T20:42:17.000Z` |
| taskId | `task_35851eba` |

**Cấm:** gộp sibling `attendance-report` / `attendance-day-detail` (`GAP-MOB-ACT-01/02`) · invent `api/v1/attendance/*` report/zones · Grid AC web / Report AC Lin* · ERP.* · WebView HTML · `mfeStdUrl` · `UIAlert` / `AlertDialog` / `window.alert` · watermark «Phiên bản Gói N» · «Có mạng» · device label · AC implement lại kit đã map · start sibling `pending_confirm` · enqueue submit check-in as sibling (`GAP-MOB-ACT-07` — POST cùng slug).

## 1. Goal

Màn **Chấm công** native dual (iOS SwiftUI + Android Compose): hub DES-MOB-ATT · large title · segment Tuần đường|Chấm công · green hero Chấm vào/Báo cáo · 7 ngày gần đây rows. Persona: tuần đường · chấm công GPS. App **chỉ** `{BffBase}/mobile-bff/api/v1/…`. **Cấm** ERP.* · clone controller · WebView · `mfeStdUrl`.

**1 action = 1 feature.** Slug `attendance` = hub `#sc-attendance` `DES-MOB-ATT`. **Cấm** gộp report / day-detail. Check-in POST **cùng slug** (không enqueue sibling).

Entry: patrol-home segment idx **1** **Chấm công** → push `#sc-attendance`.

## 2. Current vs New (`edit_page`)

| Layer | Current | New (this pack) |
|-------|---------|-----------------|
| Web MFE | Kind B list `/patrol/attendance` · Slideout CRUD | **Giữ** web (out of mobile pack) · **không** board `mfeStdUrl` |
| Native prior | Patrol-home seg idx 1 → **toast stub** «Chấm công» | Native dual hub `#sc-attendance` DES-MOB-ATT |
| Entry | Toast-only | Segment **Chấm công** → push `#sc-attendance` |
| Primary CTA | Web Tạo mới Slideout | Hero **Chấm vào** → GPS + `POST patrol/attendance-logs` |
| History | Web catalog grid | Section **7 ngày gần đây** `LinmListRow` |
| Báo cáo | Web Kind E P2 | Toast P1 · API report **MISSING** |
| API | CRUD attendance-logs live | Reuse **GET+POST** · Step 4b **N/A** |
| Supervise | Reads same GET for monitor | **Separate** feature · **cấm** gộp |

SSOT visual = dual HTML `#sc-attendance` (iOS 390×844 · Android 412×915 · **parity copy** trừ chrome HIG/Material).

## 3. DoD (đo được)

1. Dual native: iOS SwiftUI + Android Compose — **cùng** zone `#sc-attendance`: large title **Chấm công** · segment 2 · green hero · section **7 ngày gần đây** · ≥3 day rows (demo SSOT). Frame proto iOS 390×844 · Android 412×915.
2. Segment idx **0** **Tuần đường** → pop `#sc-patrol-home` · idx **1** **Chấm công** owner — **cấm** reorder (`GAP-TAB-01`).
3. Appear: GET `patrol/attendance-logs` · aggregate 7-day · fail/empty/offline → demo SSOT · screen **vẫn mở**.
4. Tap **Chấm vào** → GPS fix → POST body · success toast · hero → **Đã chấm vào** · refresh days · **cấm** native alert.
5. GPS deny → toast locDeny · **không** POST.
6. Tap **Báo cáo** → toast **Báo cáo công** P1 · **cấm** push report · **cấm** invent report API.
7. Tap day row → toast **Chi tiết ngày công** P1 · **cấm** push day-detail.
8. Patrol-home seg **Chấm công** → push `#sc-attendance` (`reuse` entry · **cấm** reimplement patrol-home).
9. Kit **reuse map**: `LinmLargeTitle` · `LinmSegment` · `LinmHeroCard` / `LinmHeroAction` · `LinmSectionLabel` · `LinmListRow` · `LinmToast`. **Cấm** raw List / M3 NavBar (`GAP-MOB-ACT-05`).
10. App chỉ `{BffPrefix}` · token Keychain / Encrypted.
11. Typography: label/tab **13** · field/title ≥**16** (`GAP-TYP-01`) · dual copy parity.
12. Dev: iOS `xcodegen` + `xcodebuild` dest **iPhone 17 Pro** PASS · Android `assembleDebug` PASS — **cấm** `yarn start:std`.
13. QA: Maestro slug `attendance` only · login → tab field → segment Chấm công → `#sc-attendance` · store PNG · **cấm** sibling in-scope · **cấm** `yarn e2e-qa` web.
14. BE: **không** endpoint mới — reuse GET+POST `patrol/attendance-logs`. Step 4b **N/A**.

### Demo rows SSOT (7 ngày gần đây — P1 show ≥3)

| title | sub | badge |
|-------|-----|-------|
| CN 10/08 | — | Nghỉ |
| T7 09/08 | 07:05 – 16:40 | Đủ công |
| T6 08/08 | 07:12 – 16:55 | Đủ công |

## 4. CTX / DEM / DI inventory

| ID | Path | Loại |
|----|------|------|
| CTX-01 | `docs/context/features/attendance.md` | hub · API |
| CTX-02 | `docs/context/features/patrol-home.md` | parent entry segment |
| DEM-01 | `specs/mobile-p1/ui/prototype/ios/index.html` `#sc-attendance` | iOS 390×844 · `DES-MOB-ATT` |
| DEM-02 | `specs/mobile-p1/ui/prototype/android/index.html` `#sc-attendance` | Android 412×915 · **cùng copy** |
| DEM-03 | `specs/attendance/ui/prototype/{ios,android}/index.html` | pack dual board |
| MAP | `docs/html-to-native-map.md` | kit large title / segment / hero / list row |
| DI-01 | — | **no Excel** |
| DA-01 | `specs/_data-analy/attendance-control-hint.md` | controlHint |
| DA-02 | `specs/_data-analy/attendance-bff-endpoints.md` | BFF · GET+POST |
| DA-03 | `specs/_data-analy/attendance-action-tree.md` | 1 hub + sibling enqueue |
| DA-04 | `specs/_data-analy/attendance-real-data.md` | bind |
| IOS | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.iOS` | native · `AttendanceView` |
| AND | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.Android` | native · `AttendanceScreen` |
| BFF | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.Bff` | `mobile-bff/api/v1` proxy |
| BE | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.WebService` | DOMAIN-MAP Patrol · **cấm ERP.*** |
| KIT | `Linm.Mobile.Kit.iOS` + `Linm.Mobile.Kit.Android` | LargeTitle / Segment / Hero / ListRow / Toast |

**Cấm** cite `mfeStdUrl` / `http://localhost:9301/` trên artifact native.

## 5. controlHint (PO chốt)

Nguồn `#sc-attendance` dual + DA-01. UNCLEAR = **none**.

| Field | VN | controlHint | Required | Kit dual | Notes |
|-------|----|-------------|----------|----------|-------|
| largeTitle | Chấm công | Text | * | `LinmLargeTitle` | fixed |
| segPatrol | Tuần đường | Segment | * | `LinmSegment` idx **0** | pop patrol-home |
| segAtt | Chấm công | Segment | * | `LinmSegment` idx **1** | owner |
| heroEyebrow | Chấm công theo định vị | Text | * | `LinmHeroCard` | |
| heroTitle | Chưa chấm vào / Đã chấm vào | Text | * | same | state after POST |
| heroMeta | Vị trí · Ca · ngày | Text | * | same | GPS / demo |
| checkIn | Chấm vào | Button white | * | `LinmHeroAction` | GPS + POST |
| report | Báo cáo | Button ghost | * | `LinmHeroAction` | toast |
| section7d | 7 ngày gần đây | Section | * | `LinmSectionLabel` | |
| dayRows | CN/T7… · time · badge | List row | * | `LinmListRow` | GET aggregate |

Toast → `LinmToast`. **Cấm** AC implement raw khi kit đã map.

## 6. BFF (PO chốt — **cấm** invent)

App `ApiClient.base` = `{BffBase}/mobile-bff/api/v1`.

| Action / zone | Method | Path | In slug? |
|---------------|--------|------|----------|
| History 7d | GET | `patrol/attendance-logs` | **yes** |
| Chấm vào | POST | `patrol/attendance-logs` | **yes** — GPS body |
| Báo cáo | — | — | toast only · API **MISSING** P2 |
| Day detail | GET | `patrol/attendance-logs/{id}` | **no** P1 — toast |

POST body P1: `userName` · `route`=`QL.1` · `checkInAt` · `lat`/`lng` · `inZone`=`true` · `status`=`Đúng tuyến`.

**Cấm** invent `/attendance/report` · `/attendance/zones` · app `:5101`.

## 7. Open questions — PO chốt

| ID | Question | Decision (PO) |
|----|----------|----------------|
| GAP-MOB-ATT-01 | Báo cáo live | **P1 toast** «Báo cáo công» · sibling `attendance-report` `pending_confirm` |
| GAP-MOB-ATT-02 | Day detail live | **P1 toast** «Chi tiết ngày công» · sibling `attendance-day-detail` `pending_confirm` |
| GAP-MOB-ATT-03 | GPS deny | toast locDeny · **không** POST |
| packKind | data-analy `list` · UI hub | **Confirm `list`.** UI = hub DES-MOB-ATT |
| Step 4b | New endpoint? | **N/A** — reuse GET+POST |
| Sibling 2 × `pending_confirm` | GAP-MOB-ACT-06 | **Không** start |
| Prior web MFE | Kind B done | Mobile pack **edit_page** from toast stub → hub · **cấm** mfeStdUrl |

UNCLEAR field = **none**.

## 8. Screens (REQUIRED)

| Surface | Demo | Pattern | FormMode | Actions this `{feature}` | `devSlash` |
|---------|------|---------|----------|--------------------------|------------|
| Chấm công hub | `#sc-attendance` `DES-MOB-ATT` · iOS + Android | **List**/hub (push) | none | GET+POST attendance-logs · display · tap theo §3 | `/agent-dev-ios` + `/agent-dev-android` |

**Không** trên pack: report screen · day-detail · invent report API · watermark Gói.

## 9. Device AC (REQUIRED)

| ID | Behavior | AC |
|----|----------|-----|
| AC-D-01 | Offline | Screen **mở** · demo SSOT days · toast in-app · **cấm** full-screen block |
| AC-D-02 | GPS deny | Toast locDeny · **không** POST |
| AC-D-03 | Leave dirty | **N/A** — không form |
| AC-D-04 | Native alert | **Cấm** · mọi phản hồi = `LinmToast` |
| AC-D-05 | Keyboard | **N/A** |
| AC-D-06 | Safe area | Large title + segment + hero + rows không đè notch / home indicator |
| AC-D-07 | Biometric | **N/A** |
| AC-D-08 | Signal | **N/A** · **cấm** «Có mạng» |
| AC-D-09 | Token | GET/POST Bearer Keychain / Encrypted · chỉ `{BffPrefix}` |
| AC-D-10 | Segment | Idx 0/1 lock · **cấm** invent / reorder |
| AC-D-11 | Camera | **N/A** |
| AC-D-12 | Typography | label/tab **13** · title/body ≥**16** |
| AC-F-01 | Appear | GET logs · map days · fallback demo |
| AC-F-02 | Seg 0 | Pop `#sc-patrol-home` |
| AC-F-03 | Chấm vào | GPS → POST → toast · hero Đã chấm |
| AC-F-04 | Báo cáo | Toast **Báo cáo công** |
| AC-F-05 | Tap day | Toast **Chi tiết ngày công** |
| AC-F-06 | Dual parity | iOS + Android **cùng** copy zones |
| AC-F-07 | Entry | Patrol seg → push `#sc-attendance` |

## 10. Leave / alert (REQUIRED)

| Case | UI |
|------|-----|
| Dirty leave | **Không áp dụng** |
| Logs fail / offline | Demo fallback + optional toast · **cấm** native alert |
| GPS deny / POST fail | Toast · keep Chưa chấm |
| Báo cáo / day | Toast §3 |
| Seg 0 | Pop · không confirm |

## 11. Out of scope (this pack)

- `#sc-attendance-report` · day-detail screens
- Invent report/zones endpoints
- Web MFE Kind B rework · `mfeStdUrl`
- Start 2 sibling `pending_confirm`
- Clone AttendanceLogsController trên Mobile.Bff · ERP.*

## 12. KPI

Chấm công hub = tuần đường chấm GPS + xem 7 ngày gần đây từ Tuần đường. DoD: `#sc-attendance` dual + GET+POST attendance-logs + kit hub — **không** omni-implement report/detail.

## 13. Handoff → Design

| Field | Value |
|-------|-------|
| feature / packKind | `attendance` / **`list`** (UI hub) |
| STATUS | `specs/attendance/STATUS.md` |
| peerStdUrl / reviewUrl | **cấm** `mfeStdUrl` · Design mở dual `file://…/prototype/{ios,android}/index.html#sc-attendance` |
| ux-analy | `ui/ux-analy.md` §1–§9 **REQUIRED** |
| BFF | `attendance-bff-endpoints.md` · GET+POST only |
| Next slash | `/agent-design-mobile` |
| Chain | **không** (roleOnly=po) |

## Version meta (REQUIRED)

| Field | Value |
|-------|-------|
| skillId | agent-po-mobile |
| skillVersion | 2026.08.19.23 |
| schemaVersion | 1 |
| workflowVersion | 2026.08.19.29 |
| rulesVersion | 2026.08.19.34 |
| generatedAt | 2026-08-19T20:42:17.000Z |
| versionGate | rechecked |
| contentHash | sha256:attendance-mobile-hub-20260819 |
| bffContentHash | sha256:attendance-mobile-bff-20260819 |

---
<!-- Version meta: skillId=agent-po-mobile skillVersion=2026.08.19.23 schemaVersion=1 workflowVersion=2026.08.19.29 rulesVersion=2026.08.19.34 versionGate=rechecked -->
