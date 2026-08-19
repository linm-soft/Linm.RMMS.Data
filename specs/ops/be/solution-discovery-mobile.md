# SA — Solution — ops (mobile list · Thông báo)

| Field | Value |
|-------|-------|
| feature | `ops` |
| title | [Mobile] Thông báo |
| this role | `sa` · `/agent-sa-mobile` |
| status | `confirmed` |
| solution_confirm | **approve** (`autoApprove=ON` · `task_47a20229`) |
| changeScope | `edit_page` |
| packKind | **`list`** (PO + Design confirm) |
| stack | `native_dual` |
| Feature Kind | **list** inbox `#sc-ops` · **cấm** Kind B web schema editor / full-page form |
| domain | **Notification** (DOMAIN-MAP slug `ops` → kebab `notification`) |
| BackendRoot | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.WebService` · **cấm ERP.*** |
| ios | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.iOS` |
| android | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.Android` |
| bff | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.Bff` · prefix `mobile-bff/api/v1` |
| prior · design | **confirmed** · `ui/design-mobile.md` · `ui/ux-analy.md` · `ui/review/demo-parity.md` · dual `#sc-ops` · `task_7e65792d` |
| prior · po | **confirmed** · `po/requirement-mobile.md` · `task_8f46a3b3` |
| prior · data_analy | **confirmed** · `_data-analy/ops-*.md` · contentHash `sha256:ops-mobile-edit-list-20260819` · bffContentHash `sha256:notification-inbox-proxy-passthrough` |
| autoApprove | **ON** |
| e2eQa | ON khi QA · `yarn e2e-qa-mobile` · **cấm** `yarn start:std` / `mfeStdUrl` |
| versionGate | `rechecked` |
| taskId | `task_47a20229` |
| confirmedBy | agent autoApprove · `task_47a20229` |
| updatedAt | `2026-08-19T12:55:00.000Z` |
| thisAction | **List Thông báo** `#sc-ops` only · entry Me `row-ops` + Home bell · mark-read **không** enqueue (`GAP-MOB-ACT-07`) |

**Cấm:** invent `api/v1/ops` / `OpsController` trên Mobile.Bff · app gọi RMMS `:5101` · fork inbox DTO · gộp form create / Kind B schema / Command / SignalR (`GAP-MOB-ACT-01/02`) · mark-all-read UI · filter toolbar P1 · parent JSON · ERP.* · `mfeStdUrl` / `yarn start:std` · `localhost` trong store listing (`GAP-SA-STORE-01`) · claim iPad family `1` · `UIAlert` / `AlertDialog`.

Standards: api-endpoint · bff-api-structure · company-field · no-parent-json-field · ssot-no-duplicate · sa-implement-gates · ios networking · android api-client · offline-sync (list = **no queue**).

---

## Architecture (repo SSOT)

| Layer | Choice |
|-------|--------|
| BackendRoot | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.WebService` · `be_repo_confirm` |
| Domain | Notification inbox · **không** folder `Ops` · **không** RMMS `api/v1/ops` |
| API host | `NotificationInboxController` · `NotificationOverviewController` — **DONE** live |
| BFF mobile | `Linm.RMMS.Mobile.Bff` · `MobileApiProxyController` catch-all → `ApiBase` |
| App | iOS `ApiClient` · Android Retrofit · base `{BffBase}/mobile-bff/api/v1` |
| DTO reuse | `NotificationDto` / `NotificationPagedResult` → app `OpsInboxItem` mapper — **cấm** fork mobile-only DTO |
| Persist | **không** bảng mới · **không** `/database-migration` · **không** `/new-endpoint` |
| Out of pack | form create/edit/delete · mark-all-read · filter UI · SignalR `OpsHub` · Command center · GET overview badge P2 |

### Route decision

| | Choice |
|--|--------|
| Slug | `ops` → **list** · 1 màn `#sc-ops` `DES-MOB-OPS` |
| App prefix | `mobile-bff/api/v1` |
| Resource proxy | `notification/inbox` · `notification/inbox/{id}/mark-read` · optional `notification/overview` |
| Downstream | `api/v1/notification/inbox*` · `api/v1/notification/overview` |
| Step 4b | **N/A** — endpoints Signed · **cấm** `OpsController` trên Mobile.Bff |
| Rationale | Live Notification domain + BFF proxy đủ list + mark-read — **cấm** invent path |

---

## SSOT / anti-duplicate

| Concern | Package / rule | Note |
|---------|----------------|------|
| Inbox list | `NotificationInboxController` `GET api/v1/notification/inbox` | proxy passthrough · query `page=1` · `pageSize=50` P1 |
| Mark read | `POST api/v1/notification/inbox/{id}/mark-read` | idempotent · chỉ khi `isUnread==true` |
| Overview | `NotificationOverviewController` `GET api/v1/notification/overview` | **optional P2** Me/Home badge · **không** DoD P1 |
| HTTP app | `ApiClient` iOS · `ApiService` Android | **cấm** URLSession/OkHttp trong View · **cấm** VM→ApiClient trực tiếp |
| Token | Keychain / EncryptedSharedPreferences | Bearer + `X-Company-Id` + `X-Timezone` interceptor |
| Kit | `LinmTopBar` · `LinmListRow` · `LinmBadge` · `LinmToast` · entry `LinmNotifyButton` | Design `kit_missing_confirm` **N/A** · **cấm** raw `List`/`LazyColumn` row |
| Persist | no-parent-json-field | OfficialDocument = **scalars** trên `NotificationEntity` · list row **không** bắt buộc `documentNumber` |

---

## Implement gates (confirm)

| Gate | Decision | Endpoints / surfaces | Skill | Note |
|------|----------|----------------------|-------|------|
| TZ | **tz_na** | `SentAt` UTC downstream · display `HH:mm` local app | `/review-timezone-implement` | header `X-Timezone` giữ interceptor chung |
| XCO | **xco_get_only** | list tenant filter server · GetById cross-company 403 | `/implement-view-cross-company` | mobile P1 **không** gọi GetById |
| SHARE | **share_tenant** | `NotificationEntity` · `rmms_notifications` · `CompanyCode` | `/implement-shared-table` | **không** bảng mới pack này |
| Offline | **no queue** · list **vẫn mở** | GET fail → demo 2 rows SSOT · optional toast | offline-sync | **cấm** block Me/Home tab |
| GPS | **n/a** | — | — | ops không GPS |
| Camera | **n/a** | — | — | — |
| Push | **display only** | OS local notify = app toast path · **không** OpsHub P2 | — | — |
| Store | **N/A** signup | no account create/delete trên list | GAP-SA-STORE-01 | **cấm** `localhost` / LAN IP · family `1` **cấm** iPad claim |

AskQuestion (autoApprove=ON · không chờ board): `sa_tz_gate=tz_na` · `sa_xco_gate=xco_get_only` · `sa_shared_table=share_tenant` · `solution_confirm=approve` · `2026-08-19T12:55:00.000Z`.

---

## Persist gate (no-parent-json-field)

| | |
|--|--|
| Parent JSON string inventory | **none** |
| Child tables this pack | **n/a** |
| API shape | Notification scalars `title` · `sender` · `sentAt` · `isUnread` |
| Migration | **không** `Schema_*` · **không** `/database-migration` |
| T-BE-API / T-BE-MIG | **n/a** |

---

## Live vs delta (audit 2026-08-19)

| Surface | Live | SA chốt P1 |
|---------|------|------------|
| `GET …/notification/inbox` | BFF proxy + `NotificationInboxController` live | **Giữ** · bind list rows |
| `POST …/notification/inbox/{id}/mark-read` | live | **Giữ** · tap unread only |
| `GET …/notification/overview` | live | **Optional P2** · P1 **không** gọi bắt buộc |
| `OpsController` / `api/v1/ops` | **không** | **Cấm** tạo |
| Native `#sc-ops` | `OpsView` / `OpsScreen` shipped (`task_f2c9a5de`) | **DELTA verify** parity PO/Design · **không** endpoint mới |
| Entry Me `row-ops` + Home bell | push `#sc-ops` | **Giữ** · cùng slug |
| Demo fallback | 2 rows VN copy | **Giữ** khi GET fail/empty |
| Mark-read enqueue | action trên list | **Không** enqueue (`GAP-MOB-ACT-07`) |

---

## Form data analysis (REQUIRED)

| Screen / FormMode | Fields (UI) | Source type | Entity |
|-------------------|-------------|-------------|--------|
| `#sc-ops` list | title · subtitle · badge | query Notification inbox | **không** form entity |

### Field map (ui → dto → store)

| uiField | Label VN | dtoField | Wire | Notes |
|---------|----------|----------|------|-------|
| rowTitle | (tiêu đề) | `title` | GET inbox `items[].title` | demo «Ưu tiên SC-2401» |
| rowSub | sender · time | `sender` + `sentAt` | GET inbox | format `sender · HH:mm` local |
| badgeUnread | Mới | `isUnread=true` | GET inbox | `LinmBadge` info |
| badgeRead | Đã đọc | `isUnread=false` | GET inbox | `LinmBadge` neutral |
| rowTap | — | `id` | POST mark-read | no-op if already read |
| toastRead | Đã đọc chỉ đạo | — | POST OK | `LinmToast` · **cấm** native alert |
| navBack | Tôi | — | local nav | pop Me / Home |
| entryMe | Thông báo | — | nav push | `row-ops` reuse Me |
| entryHome | — | — | nav push | `LinmNotifyButton` reuse Home |

**Cấm** bind web-only cols (`documentNumber` · `direction` · filter query UI) trên mobile list P1.

---

## Navigation / action (this pack)

| Control | Behavior P1 | Owner slug |
|---------|-------------|------------|
| Me `row-ops` | push `#sc-ops` | **`ops`** (this) |
| Home bell | push `#sc-ops` cùng slug | **`ops`** (this) |
| Back | pop → Me hoặc Home | local |
| Row unread tap | POST mark-read · toast **Đã đọc chỉ đạo** | **`ops`** |
| Row read tap | no-op | **`ops`** |
| Form create / detail | **OUT** | sibling / web |
| Command / map / filter | **OUT P2** | — |

**Cấm** enqueue mark-read như màn mới · **cấm** start sibling `pending_confirm` · **cấm** `UIAlert` / `AlertDialog`.

---

## GAP chốt (SA)

| ID | Decision |
|----|----------|
| GAP-MOB-OPS-NAV/LIST/READ/DATA/DEMO | **CLOSED** — keep live + Design parity |
| GAP-F-OPS-MOB-01 | Home bell vs Me entry — **cùng slug `ops`** |
| GAP-F-OPS-01 | Command UI — **OUT P2** |
| GAP-MOB-ACT-01/02 | **none** — 1 list · không child form |
| GAP-MOB-ACT-05 | Kit reuse map · **cấm** raw row |
| GAP-MOB-ACT-07 | Mark-read **không** enqueue |
| GAP-MOB-BFF-01 | **không** hàng mới — proxy live đủ |
| GAP-QA-OPS-IOS-01 | Maestro iOS nav — **non-block** · fix Dev/QA |
| GAP-SA-STORE-01 | **cấm** localhost/LAN · family `1` **cấm** iPad claim |
| Step 4b / T-BE-* | **N/A** |

---

## Client architecture (TL/Dev)

| Layer | iOS | Android |
|-------|-----|---------|
| Feature | `Presentation/Features/Ops/*` | `presentation/feature/ops/*` |
| Use case | `FetchOpsInboxUseCase` · `MarkOpsReadUseCase` | same |
| Repository | `NotificationRepositoryImpl` | `NotificationRepositoryImpl` |
| State | `OpsUiState` · items · isLoading | same |
| Appear | GET inbox `page=1` · `pageSize=50` | same |
| Fail | demo 2 rows · list vẫn mở | same |
| Mark-read | POST · toast · badge update | same |
| Shell | Me entry `row-ops` · Home `LinmNotifyButton` | same |

**Cấm** WebView HTML · watermark Gói · invent `api/v1/ops`.

---

## Handoff → TL

| Field | Value |
|-------|-------|
| feature / packKind | `ops` / **`list`** |
| solution_confirm | **approve** |
| BFF | `GET notification/inbox` · `POST notification/inbox/{id}/mark-read` · Step 4b **N/A** |
| Tasks đề xuất | `T-IOS-OPS` · `T-AND-OPS` · `T-KIT` **n/a** · `T-BE` **n/a** |
| Kit | reuse map dual — **không** `implement_kit` |
| Nav | Me `row-ops` + Home bell → push list · back pop |
| Verify (Dev) | iOS `xcodegen` + `xcodebuild` dest **iPhone 17 Pro** · Android `assembleDebug` · BFF `dotnet build` |
| Next slash | `/agent-tl-mobile` |
| Chain this turn | **không** (roleOnly=`sa`) |
| e2eQa | ON khi QA · `yarn e2e-qa-mobile` · **cấm** mfeStdUrl |

---

## Version meta (REQUIRED)

| Field | Value |
|-------|-------|
| skillId | agent-sa-mobile |
| skillVersion | 2026.08.19.21 |
| schemaVersion | 1 |
| workflowVersion | 2026.08.19.27 |
| rulesVersion | 2026.08.19.32 |
| generatedAt | 2026-08-19T12:55:00.000Z |
| versionGate | rechecked |
| contentHash | sha256:ops-mobile-edit-list-20260819 |
| bffContentHash | sha256:notification-inbox-proxy-passthrough |

---
<!-- Version meta: skillId=agent-sa-mobile skillVersion=2026.08.19.21 schemaVersion=1 workflowVersion=2026.08.19.27 rulesVersion=2026.08.19.32 versionGate=rechecked -->
