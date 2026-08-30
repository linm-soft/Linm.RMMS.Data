# SA — Solution — mnt-log (mobile sheet → screen · Nhật ký xử lý)

| Field | Value |
|-------|-------|
| feature | `mnt-log` |
| title | [Mobile] [Công việc] -> Nhật ký xử lý |
| this role | `sa` · `/agent-sa-mobile` |
| status | `confirmed` |
| solution_confirm | **approve** (`autoApprove=ON` · `task_a5028152`) |
| changeScope | `new_page` |
| packKind | **`sheet`** (PO + Design confirm · GAP-MOB-MNT-LOG-PACK-01 **closed** · surface = **full screen** `#sc-mnt-log` · **cấm** bottom-sheet chrome) |
| stack | `native_dual` |
| Feature Kind | **screen** · `DES-MOB-MNT-LOG` · packKind meta `sheet` · **cấm** Kind A–G web / Grid / Report / invent tab / `mfeStdUrl` |
| thisAction | **Nhật ký xử lý** `#sc-mnt-log` only · entry mnt-list `#i-list` (status=`done`) · **cấm** gộp `mnt-chat` composer / `mnt-progress` write / `estimate` / web Kind B (`GAP-MOB-ACT-01/02`) |
| domain | **Maintenance** · `WorkOrdersController.GetById` · **client derive** timeline · **cấm** invent `api/v1/mnt-log` / `…/logs` / `…/progress-history` / `LogController` trên Mobile.Bff |
| BackendRoot | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.WebService` · **cấm ERP.*** |
| ios | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.iOS` |
| android | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.Android` |
| bff | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.Bff` · prefix `mobile-bff/api/v1` |
| prior · design | **confirmed** · `ui/design.md` · `ui/ux-analy.md` · `ui/html-to-native-map.md` · dual `#sc-mnt-log` · `ui/review/demo-parity.md` · `task_bda2e253` |
| prior · po | **confirmed** · `po/requirement.md` · `task_d21ff1dc` |
| prior · data_analy | **confirmed** · `_data-analy/mnt-log-control-hint.md` · `mnt-log-bff-endpoints.md` · `mnt-log-action-tree.md` · `mnt-log-real-data.md` · contentHash `sha256:mnt-log-mobile-control-hint-20260829` · realDataHash `sha256:mnt-log-mobile-real-data-20260829` · bffContentHash `sha256:mnt-log-mobile-bff-20260829` · actionTreeHash `sha256:mnt-log-mobile-action-tree-20260829` · ctxContentHash `sha256:87761a7752a493d6ad176d96d76ccaf6116ea407ec5ec5513b6e12372a58d701` · demoContentHash `sha256:394ab44597648f04b25e6d58476378c16141feb53d3b58d39923b3defcff8328` |
| autoApprove | **ON** |
| e2eQa | ON — queued QA · `yarn e2e-qa-mobile` · **cấm** role SA chạy e2e / `yarn start:std` / `mfeStdUrl` |
| versionGate | `rechecked` |
| requestSource | run packet `task_a5028152` · `/agent-qldb-workflow-mobile` · roleOnly=`sa` · `/agent-sa-mobile` |
| taskId | `task_a5028152` |
| confirmedBy | agent autoApprove · `task_a5028152` |
| updatedAt | `2026-08-29T07:27:50.000Z` |

**Cấm:** invent `api/v1/mnt-log` · invent `…/logs` / `…/progress-history` · fork DTO · clone LogController trên Mobile.Bff · app `:5101` · DbContext trên BFF · parent JSON · ERP.* · `mfeStdUrl` / `yarn start:std` · `localhost` / LAN IP store listing (`GAP-SA-STORE-01`) · claim iPad family `1` · fake timeline khi GET fail · system `UIAlert` / `AlertDialog` · watermark Gói · device label · badge P1/P2 header · Primary write CTA · composer chat · POST progress · gộp sibling (`GAP-MOB-ACT-01/02/07`) · start `pending_confirm` (`GAP-MOB-ACT-06`) · re-scan demo · Write MFE/native ở role SA · chạy Step 4b / migration / e2e ở role này.

Standards: api-endpoint · bff-api-structure · company-field · no-parent-json-field · ssot-no-duplicate · sa-implement-gates · ios networking · android api-client · offline-sync · PrivacyInfo / Play Data safety (`GAP-SA-STORE-01`).

---

## Architecture (repo SSOT)

| Layer | Choice |
|-------|--------|
| BackendRoot | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.WebService` · `be_repo_confirm` |
| Domain | Maintenance · `WorkOrdersController` · table `rmms_work_orders` · DTO `WorkOrderDto` |
| API downstream | **`GET api/v1/maintenance/work-orders/{id}`** (primary) · opt `GET …/init-data` |
| BFF mobile | `Linm.RMMS.Mobile.Bff` · `MobileApiProxyController` catch-all → `ApiBase` · path `maintenance/*` |
| App | iOS `ApiClient` · Android Retrofit/`ApiService` · base `{BffBase}/mobile-bff/api/v1` · **cấm** URLSession/OkHttp trong View |
| Prefill | nav args từ mnt-list (`id` · title · code · status) và/hoặc `GET maintenance/work-orders/{id}` · thiếu `id` → banner · empty · **chặn** fake rows |
| Timeline | **Client derive** từ Signed `WorkOrderDto` fields · newest-first · **không** history API |
| GPS | **n/a** — readonly nhật ký · **không** capture |
| Camera | **n/a** |
| Write | **none** — readonly · write = sibling `mnt-progress` / comments = `mnt-chat` |
| Offline | GET fail → toast lỗi + empty · demo fallback **chỉ** khi Design gate · **cấm** fake timeline |
| Persist BE mới | **không** · Step 4b **N/A** — GetById live Signed · history API **không** invent |
| Sibling | entry/back `mnt-list` · **cấm** re-own list / estimate / chat / progress |
| Out of pack | Kind E summary · comments · WO create/edit · map embed · invent `mnt-log` path · progress write |

### Route decision

| | Choice |
|--|--------|
| Slug | `mnt-log` → packKind **`sheet`** · surface **screen** `#sc-mnt-log` · owner `DES-MOB-MNT-LOG` |
| App prefix | `mobile-bff/api/v1` |
| App path P1 read | **`GET maintenance/work-orders/{id}`** · opt `GET …/init-data` (display only · chrome status = mnt-list VN map) |
| App path P1 write | **none** |
| Timeline | client derive · **GAP-MOB-MNT-LOG-HIST-01** = P1 OK · **cấm** invent logs path |
| Downstream | existing `WorkOrdersController.GetById` · **không** dedicated invent LogController |
| GPS / camera / toast / leave | Device n/a · local UI toast/banner/empty — **không** invent API |
| Step 4b | **N/A** — reuse Signed live GetById · **cấm** `/new-endpoint` / `/database-migration` turn SA |
| Rationale | Live GetById đủ header + derive timeline P1 · BFF proxy passthrough · history collection **không live** → client derive · **cấm** invent mobile-only path |

---

## SSOT / anti-duplicate

| Concern | Package / rule | Note |
|---------|----------------|------|
| BFF HTTP | `MobileApiProxyController` catch-all | **cấm** `LogController` / `MntLogController` local trên BFF |
| BE HTTP | `WorkOrdersController` `[Route("api/v1/maintenance/work-orders")]` | live `GetById` · `GetInitData` · **không** `logs` / `progress-history` / `comments` |
| Response | `ApiResponse<WorkOrderDto>` | header bind + derive timeline |
| HTTP app | reuse Maintenance / WorkOrder repository + use cases (peer `mnt-list`) + **DeriveTimeline** mapper | **cấm** raw HTTP trong View |
| Location | **n/a** | — |
| Offline | GET fail → toast + empty · demo fallback Design gate only · **no write queue** | **cấm** fake rows · **cấm** full-screen block tab |
| Token | Keychain / EncryptedSharedPreferences | Bearer + company headers |
| Kit chrome | `LinmTopBar` · `LinmListRow` · SectionLabel · TimelineList/`LinmList` · EmptyChrome · `LinmToast` · Tab shell · entry `LinmIconButton` `#i-list` | Design `kit_missing_confirm` = **N/A** |
| Modals | banner missing WO · toast err | **cấm** system alert · **không** leave-dirty (readonly) |
| Surfaces | New feature screen · wire entry từ mnt-list `#i-list` (**done** only) | owner slug = `mnt-log` |
| Tabs | Shell Tab 5 **giữ** · pack `tabs: none` · tab **`work`** active | **cấm** invent (`GAP-TAB-01`) |
| Status VN | mnt-list map | `new`→Chờ xử lý · `in_progress`→Đang xử lý · `done`→Đã hoàn thành · `cancelled`→Đã hủy · **không** dùng init-data label lệch chrome |

---

## BFF / API contract (live audit 2026-08-29)

Nguồn: `_data-analy/mnt-log-bff-endpoints.md` · `mnt-log-real-data.md` §B · verify `WorkOrdersController` + `WorkOrderDto` · **cấm invent**.

| Action / zone | Method | App `{BffPrefix}` path | Downstream | P1 |
|---------------|--------|------------------------|------------|-----|
| **Load nhật ký + header** | GET | `maintenance/work-orders/{id}` | `WorkOrdersController.GetById` | **yes** · primary · derive |
| Init status labels | GET | `maintenance/work-orders/init-data` | `GetInitData` | optional · **không** thay chrome VN map |
| Timeline rows UI | — | — | **client derive** từ `WorkOrderDto` | **yes** · **GAP HIST** |
| History list API | — | — | **không live** | **cấm invent** · P1 derive đủ |
| Comments | — | — | **OUT** · `mnt-chat` | **cấm** |
| Progress / complete write | POST | — | sibling `mnt-progress` | **OUT** slug này |
| Nav back / toast / empty / banner | — | — | local UI | |
| Invent mnt-log / logs API | `mnt-log` / `…/logs` / dedicated invent | — | — | **cấm invent** |

### WorkOrderDto bind (live · Signed)

| Field | Mobile P1 bind |
|-------|----------------|
| `Id` / `Code` / `Title` | header |
| `Status` | badge → VN map |
| `CreatedAt` | timeline · created (+ description at) |
| `DueAt` | timeline · due (DTO non-null · luôn có giá trị) |
| `Description` | timeline · description (nếu non-empty) |
| `ProgressPercent` | timeline · progress |
| `Note` | timeline · note (nếu non-empty) |
| `UpdatedAt` | at cho progress / note / done |
| `TeamName` / `AssigneeName` / `RouteName` / `IncidentId` | opt subtitle header (Design) |

### Derive map (P1 · newest-first · Signed fields only)

| row.kind | when | body VN | at |
|----------|------|---------|-----|
| `done` | status=`done` | Hoàn thành | `UpdatedAt` |
| `note` | `Note` non-empty | {Note} | `UpdatedAt` |
| `progress` | `%`>0 hoặc status in_progress/done | Tiến độ hiện tại {n}% | `UpdatedAt` |
| `description` | `Description` non-empty | Mô tả: {Description} | `CreatedAt` |
| `due` | `DueAt` present | Hạn: {fmt} | `DueAt` |
| `created` | always | Tạo công việc | `CreatedAt` |

Sort: **newest-first** (**GAP-MOB-MNT-LOG-SORT-01**).

### Service behavior (live)

| Rule | Effect |
|------|--------|
| WO missing / inactive | 404 · toast «Không tải được nhật ký» · empty · **cấm** fake timeline |
| Network fail | toast lỗi · empty · demo fallback **chỉ** Design gate |
| Response 200 | bind header · derive ≥1 row nếu `CreatedAt` có |
| Thiếu `id` nav | banner · empty · **không** gọi API |

### Permissions

| Permission | Scope | Pack này |
|------------|-------|----------|
| `maintenance.work-orders.read` | GET detail / init-data | **reuse** · BE `[RequirePermission]` TODO debt P1 |
| comments / progress write / WO create-edit | OUT | **cấm** gọi |
| history / logs | **không live** | **cấm** invent permission / endpoint |

**Cấm** thêm controller/permission trên Mobile.Bff · **cấm** invent permission slug mới trên app.

---

## Implement gates (confirm)

| Gate | Decision | Endpoints / surfaces | Skill | Note |
|------|----------|----------------------|-------|------|
| TZ | **tz_na** | **không** form date edit · caption time local display từ DTO | `/review-timezone-implement` | |
| XCO | **xco_na** | WO scoped current company BE | `/implement-view-cross-company` | |
| SHARE | **share_na** | reuse `rmms_work_orders` + live `WorkOrderDto` · **cấm** parent JSON · **cấm** invent bảng `mnt_log_*` / history table | `/implement-shared-table` | |
| Offline | **screen mở + toast err** | GET fail → empty + toast · demo SSOT fallback (Design gate) · **cấm** fake rows | offline-sync | **cấm** full-screen block |
| GPS | **n/a** | — | — | readonly |
| Camera | **n/a** | — | — | readonly |
| Push | **n/a** | — | — | — |
| Store | **no new camera/location claim** | PrivacyInfo / Play · **không** thêm usage mới cho pack này | — | **cấm** `localhost` / LAN IP · family `1` · **cấm** iPad listing claim |
| Step 4b | **N/A** | GetById live Signed · history API **không** invent | — | **không** chạy ở role SA · history expand = **DEFER** nếu Signed sau |

AskQuestion (autoApprove=ON · không chờ board): `be_repo_confirm`=`/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.WebService` · `sa_tz_gate=tz_na` · `sa_xco_gate=xco_na` · `sa_shared_table=share_na` · `kit_missing_confirm=n/a` · `solution_confirm=approve` · `2026-08-29T07:27:50.000Z`.

---

## Persist gate (no-parent-json-field)

| | |
|--|--|
| Parent JSON string inventory (BE) | **none** trên pack mobile |
| Child tables this pack (BE) | **reuse** `rmms_work_orders` — **không** invent bảng history |
| Client store | screen state · derived timeline list · missingId · loadError |
| Migration | **không** · Step 4b **N/A** |
| T-BE-API | **no (P1)** — GetById live đủ derive · history API **DEFER** · **cấm** invent path |
| T-BE-MIG | **n/a** |

---

## Live vs delta (audit 2026-08-29 / `task_a5028152`)

| Surface | Live | SA chốt P1 |
|---------|------|------------|
| `GET …/maintenance/work-orders/{id}` | BE + Mobile.Bff proxy live | **Giữ** · primary load + derive |
| `GET …/init-data` | live | optional · chrome VN = mnt-list map |
| `GET …/logs` / `…/progress-history` | **không** | **Cấm invent** · P1 client derive (**GAP-MOB-MNT-LOG-HIST-01** closed P1) |
| `POST …/progress` / `complete` | live | **OUT** — sibling `mnt-progress` |
| `api/v1/mnt-log` / LogController | **không** | **Cấm** tạo invent slug |
| Screen `#sc-mnt-log` | Design dual confirmed · native toast stub | **Ship** dual Design kit / header / timeline / empty |
| Tab 5 shell | dưới mnt-list / work | **Giữ** · `tabs: none` pack · tab work active |
| Entry `#i-list` | demo toast (done card) | **push** `#sc-mnt-log` · **done only** |

---

## Form data analysis (REQUIRED)

| Screen / FormMode | Fields (UI) | Source type | Entity |
|-------------------|-------------|-------------|--------|
| Screen `#sc-mnt-log` readonly | header WO + section Nhật ký + TimelineList | nav / GET detail + client derive | WorkOrder |
| Missing WO | banner | local | — |
| Empty | EmptyChrome | local (0 derive / thiếu id) | — |
| GET fail | toast + empty | local UI | — |

### Field map (ui → dto → store) — khớp real-data §B

| uiField | Label VN | dtoField | Wire | Notes |
|---------|----------|----------|------|-------|
| screenTitle | Nhật ký xử lý | — | local | `LinmTopBar` 17 · **cấm** badge P1/P2 |
| navBack | Công việc | — | local | `go('mnt-list')` · Android icon-only OK |
| woTitle | (tên CV) | `title` | nav / GET | readonly · 13 / ≥16 |
| woCode | WO-* / CV-* | `code` | same | readonly |
| woStatus | Tình trạng hiện tại | `status` | same | VN mnt-list map |
| sectionLog | Nhật ký | — | local | SectionLabel 13 |
| timeline[].at | (thời điểm) | `CreatedAt`/`DueAt`/`UpdatedAt` | derived | caption 13 · newest-first |
| timeline[].body | (nội dung) | templates § derive | derived | ≥16 |
| empty | Chưa có nhật ký | — | local | thiếu id / 0 derive + no fallback |
| toastErr | Không tải được nhật ký | — | after GET fail | **cấm** fake timeline |
| bannerMissing | Thiếu công việc… | — | local | Design copy SSOT |
| actLog | Nhật ký xử lý | — | entry | mnt-list `#i-list` · **done only** · `go('mnt-log')` |

**Demo fallback SSOT** (API fail + Design gate): card «Nạo cống» · `CV-20260809-0002` · Đã hoàn thành · timeline done · progress 100% · due · created — **cấm** fake khi fail **không** Design gate.

---

## Navigation / action (this pack)

| Control | Behavior P1 | Owner slug |
|---------|-------------|------------|
| mnt-list `#i-list` (done) | push `#sc-mnt-log` (thay toast-only) | **owner** `mnt-log` (entry reuse) |
| Back | `go('mnt-list')` | owner |
| Header WO | display bind | owner · **cấm** enqueue |
| Timeline rows | display derive | owner · **cấm** enqueue |
| Empty / toast / banner | feedback UI | owner · **cấm** enqueue |
| Tab 5 | shell giữ · work active | **cấm** invent |
| estimate / mnt-chat / mnt-progress | **không** ship | siblings |
| Primary write / composer | **không** | **cấm** |

**Cấm** start sibling `pending_confirm` (`GAP-MOB-ACT-06`) · **cấm** enqueue timeline / header / empty / back (`GAP-MOB-ACT-07`).

---

## GAP chốt (SA)

| ID | Decision |
|----|----------|
| GAP-MOB-MNT-LOG-PACK-01 | **CLOSED** · packKind=`sheet` · surface screen |
| GAP-MOB-MNT-LOG-SCR-01 | **CLOSED** Design dual · Dev ship native screen |
| GAP-MOB-MNT-LOG-NAV-01 | Entry `#i-list` → push · back `mnt-list` |
| GAP-MOB-MNT-LOG-ENTRY-01 | **CLOSED** · P1 entry **chỉ** status=`done` |
| GAP-MOB-MNT-LOG-HIST-01 | **CLOSED P1** · client derive GetById · **cấm** invent `…/logs` / `…/progress-history` · history API expand = **DEFER** nếu Signed sau (**không** Step 4b turn này) |
| GAP-MOB-MNT-LOG-CMT-01 | **CLOSED** · comments = `mnt-chat` · **cấm** composer |
| GAP-MOB-MNT-LOG-SORT-01 | **CLOSED** · newest-first |
| GAP-MOB-MNT-LOG-DATA-01 | BFF paths = live Maintenance GetById only |
| GAP-MOB-MNT-LOG-HDR-01 / TL-01 / EMPTY-01 | Design confirmed · Dev ship |
| GAP-MOB-BFF-01 | **Không** — proxy catch-all đủ |
| GAP-MOB-REAL-01 | §B = BFF table only |
| GAP-TAB-01 | Tab 5 shell **giữ** · pack `tabs: none` |
| GAP-MOB-ACT-01/02/05/06/07 | 1 slug · không gộp sibling · kit map · không enqueue |
| GAP-MOB-ALIGN-01 | iOS + Android cùng copy · Android back icon-only OK |
| GAP-SA-STORE-01 | **no new** camera/location · **cấm** localhost/LAN · no iPad listing claim |
| Step 4b / T-BE-* | **N/A** P1 · **không** chạy turn SA |

---

## Client architecture (TL/Dev)

| Layer | iOS | Android |
|-------|-----|---------|
| Feature UI | `Presentation/Features/MntLog/*` (screen + header + TimelineList + empty + banner) | `presentation/feature/mntlog/*` |
| Entry wire | `MntList*` `#i-list` toast → push (**done** only) | same |
| Use case | `GetWorkOrderUseCase` · `DeriveWorkOrderTimelineUseCase` (shared map) | same |
| Repo | `WorkOrderRepository*` (peer mnt-list) GetById | same |
| Mapper / copy | `MntLogCopy` VN SSOT Design · status map mnt-list · derive templates | same |
| State | woId · title · code · status · timelineRows · loading · missingId · loadError · empty | same |
| Shell | `AppRouter` work tab dưới screen | `MainTabScreen` / nav host |
| Store | no new camera/location claim | same |
| DI | `AppContainer` | Hilt |

**Cấm** WebView HTML · watermark Gói · device label · native alert · invent mnt-log / logs API slug · Primary write · composer.

### Delta Dev (role sau — không implement turn SA)

1. Ship screen dual theo Design / html-to-native-map / copy VN / TimelineList / empty / banner.
2. Prefill nav / GET detail · missing-id banner · derive newest-first · GET fail toast + empty.
3. Wire mnt-list `#i-list` entry **done only** (thay toast-only) · **cấm** sibling surfaces / write CTA.
4. Shared derive mapper khớp PO §5 / real-data §B · **cấm** invent history collection.
5. Verify builds: xcodegen + xcodebuild dest **iPhone 17 Pro** · `assembleDebug` · BFF `dotnet build`.

### Tasks đề xuất (TL)

| ID | Owner | Note |
|----|-------|------|
| `T-IOS-MNT-LOG` | Dev iOS | screen + header + derive timeline + empty/banner/toast + entry wire |
| `T-AND-MNT-LOG` | Dev Android | parity dual + same derive |
| `T-BE-MNT-LOG-HIST` | T-BE | **DEFER** — chỉ nếu Signed cần history API · **cấm** invent path riêng turn này |
| `T-BFF-*` | — | **n/a** · proxy catch-all đủ |
| `T-BE-MIG` | — | **n/a** |

---

## Handoff → TL

| Field | Value |
|-------|-------|
| feature / packKind | `mnt-log` / **`sheet`** (surface **screen**) |
| solution_confirm | **approve** |
| BFF | `GET maintenance/work-orders/{id}` primary · opt init-data · **client derive** · **GAP HIST** closed P1 · Step 4b **N/A** |
| Tasks đề xuất | `T-IOS-MNT-LOG` · `T-AND-MNT-LOG` · `T-BE-MNT-LOG-HIST` (DEFER) |
| Kit | reuse TopBar / ListRow / List·Timeline / Empty / Toast / IconButton |
| Delta Dev | screen · derive timeline · dual parity · entry wire done-only |
| Verify (Dev) | iOS `xcodegen` + `xcodebuild` dest **iPhone 17 Pro** · Android `assembleDebug` · BFF `dotnet build` |
| Next slash | `/agent-tl-mobile` |
| Chain this turn | **không** (roleOnly=`sa` · GAP-PKT-ROLE-01) |
| e2eQa | ON khi QA · `yarn e2e-qa-mobile` · **cấm** mfeStdUrl / e2e ở SA |

---

## Version meta (REQUIRED)

| Field | Value |
|-------|-------|
| skillId | agent-sa-mobile |
| skillVersion | 2026.08.25.01 |
| schemaVersion | 2 |
| workflowVersion | 2026.08.25.01 |
| rulesVersion | 2026.08.25.2 |
| generatedAt | `2026-08-29T07:27:50.000Z` |
| versionGate | rechecked |
| contentHash | sha256:mnt-log-mobile-control-hint-20260829 |
| realDataHash | sha256:mnt-log-mobile-real-data-20260829 |
| bffContentHash | sha256:mnt-log-mobile-bff-20260829 |
| actionTreeHash | sha256:mnt-log-mobile-action-tree-20260829 |
| ctxContentHash | sha256:87761a7752a493d6ad176d96d76ccaf6116ea407ec5ec5513b6e12372a58d701 |
| demoContentHash | sha256:394ab44597648f04b25e6d58476378c16141feb53d3b58d39923b3defcff8328 |
| taskId | `task_a5028152` |

---
<!-- Version meta: skillId=agent-sa-mobile skillVersion=2026.08.25.01 schemaVersion=2 workflowVersion=2026.08.25.01 rulesVersion=2026.08.25.2 versionGate=rechecked -->
