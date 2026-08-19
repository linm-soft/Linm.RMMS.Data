# PO — Requirement — patrol-offline (mobile list)

| Field | Value |
|-------|-------|
| feature | `patrol-offline` |
| title | [Mobile] Hàng đợi mất sóng |
| this role | `po` · `/agent-po-mobile` |
| changeScope | `new_page` |
| packKind | **`list`** (PO confirm · data-analy đề xuất · offline queue local-first) |
| stack | `native_dual` |
| thisAction | **List Dữ liệu lưu trữ** `#sc-patrol-offline` only · owner Me **Hàng đợi mất sóng** · reuse Home tile **Lưu trữ** + patrol nav Đồng bộ · **cấm** gộp check-in live / incident form |
| status | `confirmed` (autoApprove=ON) |
| requestSource | run packet `task_eefc9116` · `/agent-qldb-workflow-mobile` · roleOnly=`po` · `/agent-po-mobile` |
| autoApprove | **ON** — Design/SA tự confirm **khi tới lượt** · turn này **không** chain |
| e2eQa | ON khi QA · `yarn e2e-qa-mobile` · sim 6.9" + emulator + Maestro · PNG `qa/screens` + `qa/store/patrol-offline` · **cấm** `yarn e2e-qa` / `yarn start:std` / `mfeStdUrl` / test thủ công thay runtime |
| prior | data-analy **confirmed** · `specs/_data-analy/patrol-offline-control-hint.md` · `patrol-offline-bff-endpoints.md` · `patrol-offline-action-tree.md` · contentHash `sha256:2f2cf6976914278da294ed00a6d1eeecb50364201812335d6852c0f4e46ccaad` · bffContentHash `sha256:10d525fc95cdd32c9e4ede818499041f44341c7481d1d44e0fde6bec5738f403` · cluster `specs/patrol-offline/specs/_data-analy/` **không tồn tại** — SSOT = 3 file `_data-analy/patrol-offline-*` · **no Excel** · **không** file `*-real-data.md` (list = local store) |
| `devSlash` | `/agent-dev-ios` + `/agent-dev-android` |
| updatedAt | `2026-08-19T13:50:00.000Z` |
| taskId | `task_eefc9116` |

**Cấm:** gộp sibling (`GAP-MOB-ACT-01/02`) · invent `GET …/queue` / `PatrolOfflineController` · Grid AC web / Report AC Lin* · ERP.* · WebView HTML · `mfeStdUrl` · `UIAlert` / `AlertDialog` / `window.alert` · watermark «Phiên bản Gói N» / «gen realapp» · «Có mạng» · device label «iPhone» / «· Android» · AC tap-cycle tín hiệu · AC implement lại kit đã map (`GAP-MOB-ACT-05`) · start sibling `pending_confirm` (`GAP-MOB-ACT-06`) · re-seed demo sau sync thành công (`GAP-F-OFFLINE-01`).

## 1. Goal

Màn **Dữ liệu lưu trữ** native dual (iOS SwiftUI + Android Compose): hàng đợi điểm tuần / sự cố ghi cục bộ khi mất sóng, đồng bộ batch khi có mạng. Persona: Tuần đường · hiện trường. App **chỉ** `{BffBase}/mobile-bff/api/v1/…`. **Cấm** ERP.* · clone controller · WebView bọc HTML demo · `mfeStdUrl`.

**1 action = 1 feature.** Slug `patrol-offline` = list `#sc-patrol-offline` `DES-MOB-PAT-OFFLINE`. **Cấm** gộp `#sc-patrol-home` check-in live · `#sc-inc-form` · conflict UI (`GAP-MOB-ACT-01`). `#sc-patrol-offline` **không** child form/sheet (`GAP-MOB-ACT-02` = none). **Không** enqueue submit (`GAP-MOB-ACT-07`).

## 2. changeScope `new_page`

Pack **list mới** theo data-analy. Native đã có scaffold prior `task_6e4103ce` (screen + local store + POST proxy) — **không** đổi `changeScope` thành `edit_page`. Delta Design/Dev = khớp PO này (dual copy · kit nav · seed policy · Android demo parity). Không bảng Current vs New web. SSOT visual = dual HTML `#sc-patrol-offline` — **iOS 390×844 là copy/card SSOT**; Android 412×915 **phải** cùng copy + 2 card (HTML Android hiện thiếu card 2 / `#i-mappin` / dòng nội dung — **GAP-MOB-DEMO-COPY-01** · Design sửa prototype Android).

## 3. DoD (đo được)

1. Dual native: iOS SwiftUI + Android Compose — **cùng** zone `#sc-patrol-offline`: nav back **Trang Chủ** · title **Dữ liệu lưu trữ** · trailing **Đồng bộ** · segment 2 · banner yếu sóng · rich cards. Frame proto iOS 390×844 · Android 412×915.
2. Segment index **0** **Điểm tuần mất sóng** · **1** **Sự cố mất sóng** — **cấm** đổi thứ tự (`GAP-TAB-01`).
3. Banner copy đúng `offline.banner.weak`: **Tín hiệu yếu — ghi cục bộ, đồng bộ khi tín hiệu tốt** · `#i-wifi-off` · hiện khi **có** bản ghi pending trên tab đang chọn · **ẩn** khi list rỗng.
4. Card SSOT (iOS HTML — Dual phải khớp):

   | # | title | location | extra | time | status |
   |---|-------|----------|-------|------|--------|
   | 1 | Điểm tuần · Km 1556+000 | QL.1 · Xuân Hải · `#i-mappin` | Nội dung: mặt đường khô | 2026-08-10 08:40:12 | **Chờ gửi** (pill) |
   | 2 | Điểm tuần · Km 1561+134 | QL.1 · Phước Dinh · `#i-mappin` | — | 2026-08-10 09:12:44 | **Chờ gửi** |

   Production status pill = **Chờ gửi** (`offline.status.pending` có thể dài hơn trên card 1 HTML — **PO chốt ngắn «Chờ gửi»** trên mọi card; helper nằm ở banner — **cấm** lệch iOS↔Android).
5. Tap **Đồng bộ** → `POST mobile-bff/api/v1/integration/sync/offline-batch` body `Partner` · `DeviceId` · `BatchId` · `RecordCount` · `Note` · toast **Đã đồng bộ N bản ghi** (`offline.toast.synced`) · xóa pending đã gửi · **cấm** native alert.
6. Segment **Sự cố mất sóng** + queue incident rỗng → toast info **Sự cố mất sóng · chưa có bản ghi** (`offline.toast.incidentEmpty`) · **không** toast proto «1 bản ghi» khi empty.
7. Entry (reuse, **cấm** reimplement hub/me):
   - Home tile **Lưu trữ** (`home.tile.offline` · `#i-sync`) → push `#sc-patrol-offline`
   - Me row **Hàng đợi mất sóng** (`me.row.offline`) → push cùng màn
   - Patrol-home nav Đồng bộ → **cùng** route `reuse=patrol-offline`
8. Badge Me: `offlineCount` local · subtitle `me.row.offlineSub` «N chờ đồng bộ» · badge **ẩn khi 0**. Home tile HTML **không** numeric badge — **cấm** invent badge trên tile. **Cấm** GET queue API cho badge.
9. Local store: UserDefaults iOS · SharedPreferences/Room Android — **cấm** invent `GET patrol-offline/queue`.
10. **GAP-F-OFFLINE-01 (HARD):** First launch (store key **chưa** ghi) → seed SSOT 2 card check-in **một lần**. Sau sync **thành công** → persist **rỗng** + cờ initialized · Appear sau đó **không** `seedDemoIfEmpty` / **không** fallback `demoItems`. Writer thật = sibling `patrol-home` / `incident-create` (P2 enqueue).
11. Kit reuse: `LinmSegment` · `LinmBanner` warning · `LinmToast` · `LinmListRow` (Me). Nav: demo = text **Trang Chủ** + **Đồng bộ**. `LinmTopBar` kit hiện **icon-only** ≠ SSOT text — Design `kit_missing_confirm` **implement_kit** text leading/trailing (hoặc slot text trên TopBar) · **cấm** `kit_skip` im lặng · **cấm** icon-only back khi SSOT có chữ (`GAP-MOB-DEMO-COPY-02`). Rich card: map `.rich-card` → `LinmListRow`; visual có thumb 56 + status strip — Design verify; thiếu → `kit_missing_confirm` · **cấm** invent `LinmRichCard` tên mới nếu chưa có trên map.
12. App chỉ `{BffPrefix}` · **cấm** biết RMMS `:5101` · token Keychain / Encrypted.
13. Permissions (gọi API): reuse Integration signed `POST …/sync/offline-batch`. CTX `patrol.sessions.update` / `incident.incidents.create` = **writer sibling** — pack này **không** invent permission mới / **không** `[RequirePermission]` mới trên BFF.
14. Dev (role sau): iOS `xcodegen` + `xcodebuild` dest **iPhone 17 Pro** PASS · Android `assembleDebug` PASS · Mobile.Bff `dotnet build` PASS — **cấm** `yarn start:std`.
15. QA (role sau): Maestro slug `patrol-offline` · live sim 6.9" + emulator · store PNG `qa/store/patrol-offline` · **cấm** `yarn e2e-qa` web.
16. BE align: **không** endpoint mới — reuse `POST api/v1/integration/sync/offline-batch`. Step 4b `/new-endpoint` **N/A** pack này. **Cấm** `PatrolOfflineController` trên Mobile.Bff.

## 4. CTX / DEM / DI inventory

| ID | Path | Loại |
|----|------|------|
| CTX-01 | `docs/context/features/patrol-offline.md` | list · local queue · POST batch |
| CTX-02 | `docs/context/features/integration.md` | `POST /api/v1/integration/sync/offline-batch` |
| DEM-01 | `specs/mobile-p1/ui/prototype/ios/index.html` `#sc-patrol-offline` | iOS 390×844 · `DES-MOB-PAT-OFFLINE` · **copy SSOT** 2 card |
| DEM-02 | `specs/mobile-p1/ui/prototype/android/index.html` `#sc-patrol-offline` | Android 412×915 · **thiếu** card 2 / mappin / nội dung — Design align |
| DEM-03 | `specs/patrol-offline/ui/prototype/` | pack stub — Design chép dual từ mobile-p1 **sau khi** Android = iOS copy |
| STR | `docs/mobile-strings.json` keys `offline.*` · `home.tile.offline` · `me.row.offline*` | VN SSOT |
| MAP | `docs/html-to-native-map.md` | `LinmSegment` · `LinmBanner`/`LinmToast` · `.rich-card`→`LinmListRow` · `LinmTopBar` icon chrome |
| DI-01 | — | **no Excel** |
| DA-01 | `specs/_data-analy/patrol-offline-control-hint.md` | controlHint |
| DA-02 | `specs/_data-analy/patrol-offline-bff-endpoints.md` | BFF · **chỉ** POST offline-batch |
| DA-03 | `specs/_data-analy/patrol-offline-action-tree.md` | owner me · reuse home |
| SCAN | `specs/_form-type-mobile/ACTION-TREE.md` · `BY-ACTION.md` | verify share/reuse |
| IOS | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.iOS` | native |
| AND | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.Android` | native |
| BFF | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.Bff` | proxy `mobile-bff/api/v1` |
| BE | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.WebService` | `IntegrationEndpointsController.OfflineBatch` · **cấm ERP.*** |
| KIT | `Linm.Mobile.Kit.iOS` + `Linm.Mobile.Kit.Android` | Segment / Banner / Toast / ListRow **đã có** · TopBar text **thiếu** |

**Cấm** cite `mfeStdUrl` / `http://localhost:9301/` trên artifact native.

## 5. controlHint (PO chốt — Design map kit · SA map API)

Nguồn `#sc-patrol-offline` iOS dual-target + DA-01. UNCLEAR field = **none**.

| Field | VN | controlHint | Required | Kit (iOS+Android cùng turn) | Notes |
|-------|----|-------------|----------|------------------------------|-------|
| navBack | Trang Chủ | BackButton text | * | `LinmTopBar` **text leading** (kit gap) | `go('home')` / pop · `#i-chevron-left` |
| title | Dữ liệu lưu trữ | Text | * | TopBar title | `offline.title` |
| syncBtn | Đồng bộ | TextButton | * | TopBar **text trailing** (kit gap) | POST batch |
| segCheckIn | Điểm tuần mất sóng | Segment tab | * | `LinmSegment` index **0** | filter `checkIn` |
| segIncident | Sự cố mất sóng | Segment tab | * | `LinmSegment` index **1** | filter `incident` |
| offlineBanner | Tín hiệu yếu — ghi cục bộ, đồng bộ khi tín hiệu tốt | Banner warn | * | `LinmBanner` warning · `#i-wifi-off` | ẩn khi empty |
| cardThumb | (visual) | Image slot | | rich card thumb 56 | demo gradient · **cấm** watermark |
| cardTitle | Điểm tuần · Km … | Text | * | rich card | local |
| cardLocation | QL.1 · … | Text | * | rich card + `#i-mappin` | dual |
| cardContent | Nội dung: … | Text | | rich card | card 1 only |
| cardTime | 2026-08-10 … | Text | * | rich card | local timestamp |
| cardStatus | Chờ gửi | Badge warn | * | status strip | **cùng** 2 OS |
| toastSync | Đã đồng bộ N bản ghi | Toast | * | `LinmToast` success | sau POST OK |
| toastIncidentEmpty | Sự cố mất sóng · chưa có bản ghi | Toast | * | `LinmToast` info | tab 1 empty |

Toast / banner → `LinmToast` / `LinmBanner`. **Cấm** AC implement raw `TabView` / M3 `NavigationBar` cho segment.

## 6. BFF (PO chốt path — **cấm** invent)

App `ApiClient.base` = `{BffBase}/mobile-bff/api/v1`. Path **không** lặp prefix.

| Action | Method | Path | In slug `patrol-offline`? |
|--------|--------|------|---------------------------|
| Sync batch | POST | `integration/sync/offline-batch` | **yes** — proxy → `IntegrationEndpointsController.OfflineBatch` · DTO `OfflineBatchRequest` |
| Queue list | — | — | **no** — local store · **cấm** invent GET |
| Badge count | — | — | **no** — `pendingCount()` local |
| Check-in live | — | `patrol/*` | **no** — sibling `patrol-home` |
| Incident create | — | `incident/*` | **no** — sibling `incident-create` |
| Profile | GET | `auth/profile` | **no** — `home` / `me` |

Downstream đã có: `POST api/v1/integration/sync/offline-batch`. Mobile.Bff = **proxy catch-all only**.

## 7. Open questions — PO chốt

| ID | Question | Decision (PO) |
|----|----------|----------------|
| GAP-F-OFFLINE-01 | Empty store vs empty sau sync | **Seed demo 1 lần** khi key chưa tồn tại. Sync OK → persist [] + initialized. **Cấm** `seedDemoIfEmpty`/`ifEmpty { demoItems }` sau sync. |
| GAP-F-OFFLINE-02 | Android HTML 1 card / back icon-only / status «Chờ gửi» vs iOS 2 card + «Trang Chủ» | **iOS HTML = copy SSOT.** Design align Android prototype **cùng** 2 card · mappin · nội dung · back **Trang Chủ** · sync text. Native dual = SSOT đó (`GAP-MOB-DEMO-COPY-01/02`). |
| GAP-F-OFFLINE-03 | Status dài card 1 iOS | Production pill **Chờ gửi**. Helper = banner. Strings dài `offline.status.pending` **không** bắt buộc in card nếu lệch dual. |
| GAP-F-OFFLINE-04 | Toast segment Sự cố demo «1 bản ghi» | **Empty →** `offline.toast.incidentEmpty`. Có item → list, không toast count giả. |
| Queue GET | analy cấm | **Confirm cấm.** SA không invent controller. |
| packKind | data-analy `list` | **Confirm `list`.** ≠ web catalog Grid AC. |
| Kit TopBar text | `LinmTopBar` icon-only | **`kit_missing_confirm` = implement_kit** text slots. **Cấm** `kit_skip`. |
| Rich card kit | map `LinmListRow` | Design verify thumb+status. Thiếu → `kit_missing_confirm`. **Cấm** raw card nếu kit đủ. |
| Badge Home tile | CTX vs HTML | HTML tile **không** badge số → **không** invent. Me row badge + subtitle **có**. |
| Permission sync | CTX patrol/incident vs Integration signed | Pack này gọi Integration batch. Writer permission = sibling. **Không** thêm BFF permission turn này. |
| GAP-PO-STORE-01 | signup / xóa tài khoản | **N/A** — không signup. |
| Sibling patrol-home / incident-create | enqueue writers | **Không** start `pending_confirm` (`GAP-MOB-ACT-06`). |
| Cluster web path | `specs/patrol-offline/specs/_data-analy/` | **N/A.** Dùng `_data-analy/patrol-offline-*.md`. |
| Prior stub design/sa/task/implement | files tồn tại | Role sau **viết lại/khớp** PO này khi tới lượt — PO **không** `design_confirm` / `solution_confirm` turn này. |

UNCLEAR field = **none** — không AskQuestion field.

## 8. Screens (REQUIRED)

| Surface | Demo | Pattern | FormMode | Actions **this** `{feature}` | `devSlash` |
|---------|------|---------|----------|------------------------------|------------|
| List Dữ liệu lưu trữ | `#sc-patrol-offline` `DES-MOB-PAT-OFFLINE` · iOS + Android | **List** (nav + segment + cards · không Modal/Sheet) | none (không form) | Appear local · filter segment · POST sync · toast | `/agent-dev-ios` + `/agent-dev-android` |

**Không** trên pack này: `#sc-home` hub · `#sc-me` (trừ wiring row + badge) · `#sc-patrol-home` check-in · `#sc-inc-form` · xóa từng bản ghi · conflict UI · watermark.

Cùng `go('patrol-offline')` từ Home tile / Me row / patrol nav = **một** slug — Design 3 entry, **một** màn owner.

Frame: iOS 390×844 · Android 412×915 · safe area · content không đè notch / home indicator.

## 9. Device AC (REQUIRED)

| ID | Behavior | AC |
|----|----------|-----|
| AC-D-01 | Offline | Màn **mở** từ local queue · banner yếu sóng khi có pending · Sync khi **không** mạng → `LinmToast` lỗi in-app · **giữ** bản ghi · **cấm** full-screen block · **cấm** native alert |
| AC-D-02 | GPS deny | **N/A** — list không GPS (sibling patrol-home) |
| AC-D-03 | Leave dirty | **N/A** — không form |
| AC-D-04 | Native alert | **Cấm** `UIAlert` / `AlertDialog` / `window.alert`. Mọi phản hồi = `LinmToast` / `LinmBanner` |
| AC-D-05 | Keyboard | **N/A** — không input |
| AC-D-06 | Safe area | Nav + segment + cards không đè notch / home indicator / gesture inset |
| AC-D-07 | Biometric | **N/A** |
| AC-D-08 | Signal | Banner hạng yếu **copy SSOT** · **cấm** «Có mạng» · **cấm** tap-cycle proto · **không** bắt tap tín hiệu trên màn này |
| AC-D-09 | Token | POST batch Bearer Keychain / Encrypted · app chỉ `{BffPrefix}` |
| AC-D-10 | Tab / swipe | Shell tab **không** đổi (IA 5). In-screen segment 0→1 như §3.2. iOS swipe-back pop · Android predictive back |
| AC-D-11 | Camera / push | **N/A** |
| AC-T-01 | Type | Segment/label **13** · **cấm** tab 10 / label 12 (`GAP-TYP-01`). Không field input → field ≥16 **N/A** |
| AC-F-01 | Appear | Load local · first-run seed §3.10 · **không** GET queue |
| AC-F-02 | Sync OK | Toast N bản ghi · clear pending · initialized · **không** re-seed |
| AC-F-03 | Sync fail | Toast lỗi · **giữ** queue |
| AC-F-04 | Entry | Home tile + Me row + patrol nav → **cùng** `#sc-patrol-offline` |
| AC-F-05 | Dual parity | iOS + Android **cùng** copy + 2 card SSOT · `#i-chevron-left` · `#i-wifi-off` · `#i-mappin` · `#i-sync` entry (`GAP-MOB-ALIGN-01`) |
| AC-F-06 | Watermark | **Cấm** «bản Gói N» / «gen realapp» / device label |

## 10. Leave / alert (REQUIRED)

| Case | UI |
|------|-----|
| Dirty leave | **Không áp dụng** |
| Sync fail / offline POST | `LinmToast` · **cấm** native alert (`GAP-PO-LEAVE-01`) |
| Sync success | Toast **Đã đồng bộ N bản ghi** |
| Incident tab empty | Toast **Sự cố mất sóng · chưa có bản ghi** |
| Back | pop → Home / Me (parent entry) |

## 11. Out of scope (this pack)

- Check-in live / map ca / kết thúc ca (`patrol-home`)
- Ghi sự cố form (`incident-create`) / list vấn đề
- Xóa từng bản ghi (P2)
- Conflict resolution UI (P2)
- Invent GET queue / `PatrolOfflineController` / `HomeController`
- Numeric badge trên Home tile (HTML không có)
- Web Integration hub / Lin* grid / Kind A–G
- GPS / camera / map / biometric / push request
- Start sibling `pending_confirm`
- Clone Auth/Integration controller · ERP.* · `mfeStdUrl`
- Watermark Gói / device label / proto-click tín hiệu

## 12. KPI (HĐ Gói 1 — màn này)

Hiện trường mất sóng không mất nhật ký tuần / nháp: xem hàng đợi + đồng bộ batch. DoD = list dual + local store + **một** POST Integration đã có — **không** omni-implement patrol/incident trong 1 slug.

## 13. Handoff → Design

| Field | Value |
|-------|-------|
| feature / packKind | `patrol-offline` / **`list`** (confirmed) |
| phase_from / phase_to | po **confirmed** → design pending |
| STATUS | `specs/patrol-offline/STATUS.md` |
| Context / Demo / DI | CTX-01 · DEM dual `#sc-patrol-offline` · no Excel |
| controlHint / UNCLEAR | §5 · none |
| Screens / Pattern / `devSlash` | List `#sc-patrol-offline` · `/agent-dev-ios` + `/agent-dev-android` |
| Grid AC / Report AC | **N/A** — không list/report web |
| peerStdUrl / reviewUrl | **cấm** `mfeStdUrl` · Design mở dual `file://…/prototype/{ios,android}/index.html#sc-patrol-offline` + reviewUrl **cả hai** · chép vào `specs/patrol-offline/ui/prototype/{ios,android}/` |
| ux-analy | `/mobile-ui-ux-analy` → `ui/ux-analy.md` §1–§9 **REQUIRED** trước `design_confirm` |
| Kit | `LinmSegment` / `LinmBanner` / `LinmToast` reuse · TopBar **text** = `kit_missing_confirm` implement_kit · rich-card verify map |
| BFF | `patrol-offline-bff-endpoints.md` · **chỉ** `POST integration/sync/offline-batch` |
| Open questions | GAP-F-OFFLINE-01…04 đã chốt §7 — Design **align Android HTML** · **không** vẽ GET queue · **không** vẽ conflict UI |
| Next AskQuestion | autoApprove=ON — `design_confirm` khi Design xong **cả hai** mock + ux-analy |
| Next slash | `/agent-design-mobile` |
| Chain this turn | **không** (roleOnly=po) |
| e2eQa | ON khi QA · `yarn e2e-qa-mobile` · **cấm** yarn start:std / mfeStdUrl |

Design: HIG + Material · copy VN đúng iOS HTML (trừ status pill ngắn §3.4) · **cấm** skin Ministry · **cấm** «Có mạng» · packet `design-demo-ssot.md` · `/review-demo-design-mobile` trước confirm.

## Version meta (REQUIRED)

| Field | Value |
|-------|-------|
| skillId | agent-po-mobile |
| skillVersion | 2026.08.19.23 |
| schemaVersion | 1 |
| workflowVersion | 2026.08.19.29 |
| rulesVersion | 2026.08.19.34 |
| generatedAt | 2026-08-19T13:50:00.000Z |
| versionGate | rechecked |
| contentHash | sha256:2f2cf6976914278da294ed00a6d1eeecb50364201812335d6852c0f4e46ccaad |
| bffContentHash | sha256:10d525fc95cdd32c9e4ede818499041f44341c7481d1d44e0fde6bec5738f403 |

---
<!-- Version meta: skillId=agent-po-mobile skillVersion=2026.08.19.23 schemaVersion=1 workflowVersion=2026.08.19.29 rulesVersion=2026.08.19.34 versionGate=rechecked -->
