# Team lead — Task — patrol-offline (mobile list · delta apply)

| Field | Value |
|-------|-------|
| feature | `patrol-offline` |
| title | [Mobile] Offline sync apply check-ins |
| this role | `team_lead` · `/agent-tl-mobile` |
| status | `confirmed` |
| changeScope | `edit_page` · gap=`offline_sync_apply_checkins` |
| packKind | **`list`** (PO + Design + SA confirm) |
| stack | `native_dual` |
| Feature Kind | **list** `#sc-patrol-offline` · local queue · replay sync · **cấm** Kind A–G web / Lin* grid |
| route_confirm | **route_a** (keep) — push `#sc-patrol-offline` từ Home tile **Lưu trữ** · Me row **Hàng đợi mất sóng** · patrol-home nav **Đồng bộ** (stub OK P1) · back pop · **cấm** invent tab / `mfeStdUrl` |
| kit_missing_confirm | prior **implement_kit** TopBar text · **unchanged UI** · T-KIT = **n/a** this delta |
| autoApprove | **ON** |
| e2eQa | ON khi QA · `yarn e2e-qa-mobile` · **cấm** e2e / `start:std` ở TL |
| prior · data_analy | **confirmed** · handoff `data_analy-compact.md` · contentHash `sha256:patrol-offline-delta-apply-checkins-20260912` |
| prior · po | **confirmed** · `po/requirement.md` · `po-compact.md` · `task_d268d5b7` |
| prior · design | **confirmed** · `ui/design.md` · dual proto · `design-compact.md` · `task_1f9f2ea2` |
| prior · sa | **confirmed** · `be/solution-discovery.md` · `sa-compact.md` · `solution_confirm=approve` · `task_c7ddb8a3` |
| taskId | `task_1618aef2` |
| updatedAt | `2026-09-12T14:36:20.000Z` |
| thisAction | **Delta sync DoD** — replay `checkIn` → POST `patrol/sessions/{sessionId}/check-ins` · remove **only** 2xx · optional offline-batch receipt · enqueue dual sessionId+body · keep UI |

**Cấm:** invent `GET` queue / `PatrolOfflineController` · clear-all / clear incident · treat offline-batch as apply DB · `ERP.*` · WebView HTML · `mfeStdUrl` · `UIAlert` / `AlertDialog` · re-seed demo sau sync · gộp sibling writers · Step 4b / migration ở TL · implement code ở TL.

---

## Source lock

| Key | Value |
|-----|-------|
| ios | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.iOS` · `ios_repo_confirm` |
| android | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.Android` · `android_repo_confirm` |
| bff | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.Bff` · prefix `mobile-bff/api/v1` · proxy check-ins + offline-batch |
| be | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.WebService` · DOMAIN-MAP Patrol + Integration · **cấm ERP.*** |
| app base | `{BffBase}/mobile-bff/api/v1` — path **không** lặp prefix |
| kit | `LinmTopBar` text (prior) · `LinmSegment` · `LinmBanner` · `LinmToast` · rich card · map `ui/html-to-native-map.md` |
| scaffold | repos **đã có** · **không** `scaffold_new` |
| Step 4b | **N/A** — reuse live `POST patrol/sessions/{id}/check-ins` + optional `POST integration/sync/offline-batch` |

### route_confirm (keep · autoApprove=ON)

| Option | Decision |
|--------|----------|
| **route_a** (chọn) | 3 entry cùng slug · segment 0/1 local filter · tap Đồng bộ = **replay apply** khi online · sibling wire Defer P1 |
| route_b / route_c | không dùng |

IA: `home|me|patrol-home → push patrol-offline → pop parent`. **Cấm** Modal/Sheet child · **cấm** GET queue API.

---

## Live gap (TL · delta 2026-09-12)

| Surface | Live | TL task |
|---------|------|---------|
| UI `#sc-patrol-offline` zones | **keep** · prior TopBar text / segment / banner / cards | **unchanged** · verify only |
| Sync tap `#btn-sync` | **GAP** — phải replay từng `checkIn` → POST check-ins · **không** chỉ offline-batch apply | **T-IOS-PAT-OFF-APPLY** · **T-AND-PAT-OFF-APPLY** |
| Local queue payload | **GAP** — enqueue phải persist `sessionId` + `CreatePatrolCheckInRequest` dual | cùng T-IOS / T-AND |
| Remove policy | **GAP** — remove item **chỉ** khi 2xx · partial fail giữ fail | cùng |
| offline-batch | **optional** receipt after OK · `RecordCount=synced` · **không** apply DB | cùng · optional call |
| Incident segment | **P2 keep** · không sync clear · không invent incident apply | **out** |
| Entry Home/Me | **shipped** | reuse |
| Entry patrol-home Đồng bộ | stub OK P1 · GAP-MOB-ACT-PAT-OFFLINE-01 Defer | **không** block DoD |
| New BE / Schema_* | **không** | **T-BE-*** = **n/a** |
| T-KIT TopBar text | prior shipped | **n/a** this delta |

---

## Tasks

| id | layer | deps | status | skills | DoD |
|----|-------|------|--------|--------|-----|
| **T-IOS-PAT-OFF-APPLY** | ios | SA · route_a | pending | `/agent-dev-ios` · `/dev-ios-swiftui` | Delta store+sync: enqueue dual payload · Appear load local · tap sync replay POST `patrol/sessions/{sessionId}/check-ins` per checkIn · remove **only** 2xx · optional offline-batch receipt · toast N · partial keep fail · **cấm** re-seed · UI zones keep · `xcodegen` + `xcodebuild` dest **iPhone 17 Pro** PASS · `implement/ios.md` |
| **T-AND-PAT-OFF-APPLY** | android | SA · route_a · prefer after T-IOS | pending | `/agent-dev-android` · `/dev-android-compose` | Same field/API/DoD dual · `./gradlew :app:assembleDebug` PASS · `implement/android.md` |
| **T-KIT-TOPBAR-TEXT** | kit | — | **n/a** | — | prior implement_kit · unchanged UI |
| **T-BE-API** | be | — | **n/a** | — | **không** `/new-endpoint` — check-ins + offline-batch **live** · Step 4b **N/A** |
| **T-BE-MIG** | be | — | **n/a** | — | **không** `/database-migration` |
| **T-BFF** | bff | — | **n/a** | — | proxy **live** · **không** invent queue GET |
| T-QA-PAT-OFFLINE | qa | T-IOS · T-AND | pending | `/agent-qa-mobile` | AC slug only · `yarn e2e-qa-mobile` · store PNG · **cấm** TL chạy |

**1 action = 1 feature.** Serial prefer iOS → Android. **Cấm** gộp sibling.

---

## T-IOS-PAT-OFF-APPLY — detail

| | |
|--|--|
| `source.repo` | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.iOS` |
| `ssot.zones` | `DES-MOB-PAT-OFFLINE` · `-NAV` · `-SEG` · `-BANNER` · `-CARD` · `#sc-patrol-offline` · `#btn-sync` |
| Pattern | Push list · **không** Modal/Sheet · frame 390×844 · **keep UI** |

### UI (verify keep — `ui/html-to-native-map.md`)

| Field | Kit | Notes |
|-------|-----|-------|
| navBack | `LinmTopBar` text leading | «Trang Chủ» · pop · e2e `nav-back` |
| title | TopBar | `offline.title` **Dữ liệu lưu trữ** |
| syncBtn | TopBar text trailing | «Đồng bộ» · e2e `btn-sync` · **replay** |
| segment | `LinmSegment` 0/1 | checkIn / incident filter local |
| banner / card / toast / busy | keep | toast N = apply OK count · **cấm** `UIAlert` |

### Store / enqueue / sync (`offline_sync_apply_checkins`)

| Step | Spec |
|------|------|
| Enqueue (writers / local) | Persist **sessionId** + **CreatePatrolCheckInRequest** fields dual · type `checkIn` |
| Appear | load local pending · filter segment · **cấm** invent GET queue |
| Sync online | For each pending `checkIn`: POST `patrol/sessions/{sessionId}/check-ins` body CreatePatrolCheckInRequest |
| 2xx | remove that item from local queue · count++ |
| Non-2xx / network | **giữ** item · continue or stop per SA partial · toast lỗi |
| After ≥1 OK | optional POST `integration/sync/offline-batch` receipt · `RecordCount=synced` · **không** dùng batch để apply DB |
| Toast | **Đã đồng bộ N bản ghi** (N = apply OK) · fail → toast lỗi · **giữ** fail |
| Incident items | P2 · **cấm** clear-all / clear incident on sync |
| Seed | **cấm** re-seed sau sync (prior GAP-F-OFFLINE-01) |

### API

| Action | Path | When |
|--------|------|------|
| Apply (primary) | `POST patrol/sessions/{sessionId}/check-ins` | mỗi checkIn pending · live |
| Receipt (optional) | `POST integration/sync/offline-batch` | sau OK · RecordCount=synced |
| Queue read | local store only | **cấm** GET |

### Headers / envelope

| Header | When |
|--------|------|
| `Authorization: Bearer {token}` | POST apply / receipt |
| `X-Company-Id` / `X-Timezone` | interceptor chung |
| Apply 2xx | remove local item |
| Fail | toast · keep item |

### Build DoD

```bash
cd /Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.iOS && xcodegen generate
xcodebuild -scheme LinmRmms -destination 'platform=iOS Simulator,name=iPhone 17 Pro' build
```

Fail → `build_fail_confirm` · **cấm** mark Dev done. **TL không chạy build.**

---

## T-AND-PAT-OFF-APPLY — detail

| | |
|--|--|
| `source.repo` | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.Android` |
| `ssot.zones` | cùng DES / `#sc-patrol-offline` · frame 412×915 |
| Pattern | Push list · **không** `AlertDialog` system |

Cùng store/enqueue/sync/API/DoD dual Compose. Route `patrol-offline` · Home/Me wire reuse.

### Build DoD

```bash
cd /Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.Android && ./gradlew :app:assembleDebug
```

---

## T-BE-* / T-BFF (Step 4b — N/A)

| | |
|--|--|
| `source.repo` | WebService + Mobile.Bff |
| Skill | **không** `/new-endpoint` · **không** `/database-migration` · **không** `/create-bff-api-feature` |
| Scope | Reuse live check-ins + offline-batch proxy · **cấm** invent queue API / ERP.* |
| BE ALIGN | **skip** this TL · N/A after FE |

---

## Navigation / toast matrix (P1)

| Control | Behavior |
|---------|----------|
| Home / Me / patrol-home Đồng bộ | push `#sc-patrol-offline` (stub OK) |
| Back «Trang Chủ» | pop |
| Đồng bộ OK | toast N · remove 2xx only |
| Đồng bộ partial | toast · **giữ** fail items |
| Đồng bộ fail | toast lỗi · **giữ** queue |
| Segment 1 empty | toast incident empty (keep) |

---

## Out of scope (this pack)

- Incident sync apply (P2)
- Layout redesign / TopBar kit rework
- Sibling check-in / incident-create writers as in-scope
- Invent GET queue · clear-all
- Step 4b / migration / e2e ở TL

---

## Handoff → Dev

| Field | Value |
|-------|-------|
| feature / packKind | `patrol-offline` / **`list`** |
| route_confirm | **route_a** |
| Tasks | `T-IOS-PAT-OFF-APPLY` · `T-AND-PAT-OFF-APPLY` · `T-BE-*` **n/a** · `T-KIT` **n/a** |
| STATUS | `specs/patrol-offline/STATUS.md` |
| design / ux / solution | `ui/design.md` · `ui/ux-analy.md` · `be/solution-discovery.md` |
| compact priors | data_analy / po / design / sa |
| reviewUrl | dual `…/prototype/{ios,android}/index.html#sc-patrol-offline` |
| Next slash | `/agent-dev-ios` (+ `/agent-dev-android` sau) · **không** chain turn này |
| e2eQa | ON queued QA · **cấm** TL e2e |
| Chain this turn | **không** (roleOnly=`team_lead`) |

---

## Version meta (REQUIRED)

| Field | Value |
|-------|-------|
| skillId | agent-tl-mobile |
| skillVersion | 2026.08.19.29 |
| schemaVersion | 1 |
| workflowVersion | 2026.08.19.29 |
| rulesVersion | 2026.08.19.34 |
| generatedAt | 2026-09-12T14:36:20.000Z |
| versionGate | rechecked |
| contentHash | sha256:patrol-offline-delta-apply-checkins-20260912 |
| bffContentHash | sha256:patrol-offline-bff-apply-checkins-20260912 |

---
<!-- Version meta: skillId=agent-tl-mobile skillVersion=2026.08.19.29 schemaVersion=1 workflowVersion=2026.08.19.29 rulesVersion=2026.08.19.34 versionGate=rechecked -->
