# SA — Solution — web-rmms-cam-finding

> Status: **confirmed** · autoApprove ON · task `task_f16b7447` · 2026-10-01T07:40:00.000Z  
> **changeScope=`edit_page`** · packKind=`list` · **cấm** ERP.* · **cấm** invent `CamFindingController` / `cam-finding/*` · **cấm** Step 4b / migration run tại SA · **cấm** Write MFE/native · **cấm** web-bff · **cấm** fake GPS · **cấm** demo-json · **cấm** UI gọi assign trên slug · **cấm** `SlaHours=24` · **cấm** Mục IV tiền.

| | |
|--|--|
| Feature | `web-rmms-cam-finding` |
| Title | Camera phiếu tuần kiểm và SLA |
| Role | `sa` |
| packKind | `list` (phone list+form+detail · ≠ desktop Kind B) |
| changeScope | `edit_page` · `editTask=1` |
| formPattern | FIND-F Pattern B · FIND-L list · FIND-D detail+recheck · LeaveConfirmModal · phone ≤430 |
| domain | **Patrol** (`patrol`) · cite FileService · cite Auth/profile · cite peer `web-rmms-role-gate` · bind peer `web-rmms-mobile-c` · giao peer `web-rmms-giao-viec-ql-hat` |
| mfe | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Mobile` |
| productRoute | `/phat-hien/:sessionId` · `/moi` · `/:findingId` · `/:findingId/sua` |
| mfeStdUrl | `http://localhost:9301/web-rmms-cam-finding` (**alias only** · **cấm** invent product slug) |
| be | `D:/AI-QLBD/Linm.RMMS.WebService` · **cấm ERP.*** |
| BFF | Mobile.Bff `http://localhost:5202` · prefix `mobile-bff/api/v1` · **cấm** web-bff bind |
| contentHash | `sha256:a7c3e91f0b4d62e8c5f1a9d0e3b7c4f6a2d8e1b5c9f0a4d7e6b3c1f8a5d2e0b9` |
| skillVersion | `2026.09.05.03` |
| schemaVersion | `1` |
| solution_confirm | **approve** (autoApprove) |
| design_confirm | **approve** |
| be_repo_confirm | **approve** |
| ui_repo_confirm | **approve** |
| reviewUrl | `file:///D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-cam-finding/ui/prototype/index.html` |
| real_view_parity | `v1` |
| demo | **N/A** · **cấm** rescan / demo SSOT |
| deltaCite | `docs/plan/web-rmms-mobile/PLAN-3-VAI.md` § enqueue #5 · § Tuần kiểm đánh giá SLA |
| prior · design | `confirmed` · compact · reviewUrl · task `task_4b5dbcef` |
| prior · po | `confirmed` · compact · CTX · task `task_8dca9e79` |
| prior · data_analy | `confirmed` · compact · task `task_726d9b3a` |

> SA **chốt** FormMode↔API · DOMAIN-MAP slug · BFF vs API · entity/migration=none · slaBadge client-derive · roleCaps cite.  
> **Cấm** invent API path/DTO · **cấm** HOW (TL) · **cấm** Write MFE.

## 0. Delta vs baseline (edit_page)

| Keep (Live peer mobile-c) | New / change (this task) |
|---------------------------|--------------------------|
| GET findings?sessionId · GET/POST/PUT findings · recheck · feedback · sessions · files · LOOKUP_STATIC | **Role-gate** tuần kiểm write+capture+recheck · FAB hide non-TK |
| Pattern B GPS · RouteCapture · Leave dirty FIND-F | **dueAt suggest** TT41 theo hangMuc (client catalog · editable) |
| Paths/DTO findings **không đổi** | **slaBadge** Trong hạn/Quá hạn · client derive `dueAt` vs now/recheckAt |
| assign-work-order API Live | **REMOVE** assignCta UI · peer `web-rmms-giao-viec-ql-hat` |
| — | **cấm** CamFinding* · new route · Excel · SlaHours=24 · Mục IV · invent slaStatus DTO |

## 1. Domain / ownership

| Item | Decision |
|------|----------|
| DOMAIN-MAP slug | `web-rmms-cam-finding` → **Patrol** / `patrol` · bind peer `web-rmms-mobile-c` findings |
| Rationale | Findings + sessions + recheck/feedback = Patrol Live · photos = FileService cite · caps = role-gate (Integration) cite · giao = peer giao-viec — **không** domain Camera mới |
| API folder | Reuse Patrol findings controllers · Mobile.Bff forward · **cấm** new controller |
| Role caps | Cite `web-rmms-role-gate` · `packageCode` / `roleCaps` từ `GET auth/profile` · `tuanKiem` write/recheck · QL_HAT = HAT-TRUONG+HAT-PHO · **cấm** suy từ `MANAGER-RMMS` · **cấm** giao trên FIND-* |
| **Cấm** | invent `CamFindingController` · `api/v1/cam-finding` · ERP.* · web-bff từ Mobile MFE · fake GPS |

**DOMAIN-MAP row (apply):**

| Feature slug | Domain | kebab · note |
|--------------|--------|--------------|
| `web-rmms-cam-finding` | Patrol | `patrol` · Live findings GET/POST/PUT + recheck + feedback · cite FileService · cite role-gate caps · cite peer giao-viec-ql-hat (assign UI out) · MFE Mobile product `/phat-hien/:sessionId*` · alias `/web-rmms-cam-finding` · **cấm** invent CamFindingController · bind peer mobile-c |

**UNCLEAR-FIND-DOMAIN-ROW → CLOSED** (row trên + DOMAIN-MAP patch).  
**UNCLEAR-FIND-ROLE-SOURCE → CLOSED** — deps `web-rmms-role-gate` · profile `packageCode`/`roleCaps` · `tuanKiem` · seed HAT-*→`QL_HAT` · Dev wire caps.  
**UNCLEAR-FIND-SLA-FIELD → CLOSED** — **client-only** derive · **cấm** invent DTO `slaStatus` / BE field.  
**UNCLEAR-FIND-DUE-CATALOG → Dev** — Design §5 table chốt · client map hangMuc→offset · **cấm** BE migration / SlaHours=24.

## 2. FormMode ↔ API

| Mode / zone | UI | API | Write | Notes |
|-------------|----|-----|-------|-------|
| FIND-L list load | FindingListPage | `GET …/patrol/findings?sessionId=` | — | empty «Chưa có phiếu» |
| FIND-L session stamp | RO | `GET …/patrol/sessions/{id}` | — | 404 → notFound |
| FIND-L fabCreate | FAB | nav FIND-F `/moi` | — | **hide** non-`tuanKiem` |
| FIND-L cards | List RO | GET list | — | tap → FIND-D |
| FIND-F create | FindingFormPage | — | `POST …/patrol/findings` | `sessionId` from route · TK only |
| FIND-F edit | FindingFormPage | `GET …/patrol/findings/{id}` | `PUT …/patrol/findings/{id}` | TK only |
| FIND-F hangMuc→dueAt | Select+Date | — | `hangMuc` · `dueAt` | client TT41 suggest · editable · **cấm** SlaHours=24 |
| FIND-F GPS | Banner Pattern B | `navigator.geolocation` | `lat`/`lng`/`accuracyM` | deny → banner **on Lưu** · **cấm** fake · lock=`saving`\|`photoBusy` |
| FIND-F photos | RouteCapture | files init/PUT/commit | `mediaIds` | tuần kiểm write · others RO |
| FIND-F save | Button | POST/PUT findings | body Live | role tuần kiểm · BE enforce |
| FIND-D detail | FindingDetailPage | `GET …/patrol/findings/{id}` | — | RO fields |
| FIND-D slaBadge | Badge | — | — | **client derive** dueAt vs now/recheckAt → Trong hạn / Quá hạn |
| FIND-D confirmPass/Fail | Button | `POST …/patrol/findings/{id}/recheck` | `result` · `note?` · `mediaIds?` · GPS | TK only · Pattern B |
| FIND-D feedback* | Form | `POST …/{id}/feedback` | body Live | keep `da-giao` |
| FIND-D assignCta | — | `POST …/{id}/assign-work-order` | — | **UI REMOVE** · API keep · peer only |
| roleCaps | Hidden / banner | `GET …/auth/profile` (+role-gate enrich) | gate UI | cite packageCode/roleCaps/`tuanKiem` |
| DES-LEAVE | LeaveConfirmModal | — | — | dirty FIND-F write |
| DES-GRID / LinErpListFilterBar | — | — | — | **N/A** phone |

### Live endpoints (KEEP — no path/DTO invent)

| Id | Method | BFF path (client) | Downstream | Status |
|----|--------|-------------------|------------|--------|
| API-01 | GET | `mobile-bff/api/v1/patrol/findings?sessionId=` | Patrol findings | **Live** reuse · FIND-L |
| API-02 | GET | `mobile-bff/api/v1/patrol/findings/{id}` | Patrol findings | **Live** reuse · FIND-F/D |
| API-03 | POST | `mobile-bff/api/v1/patrol/findings` | Create finding | **Live** · BE enforce tuần kiểm |
| API-04 | PUT | `mobile-bff/api/v1/patrol/findings/{id}` | Update finding | **Live** · BE enforce |
| API-05 | POST | `mobile-bff/api/v1/patrol/findings/{id}/recheck` | Recheck | **Live** · TK only |
| API-06 | POST | `mobile-bff/api/v1/patrol/findings/{id}/feedback` | Feedback | **Live** keep |
| API-07 | POST | `mobile-bff/api/v1/patrol/findings/{id}/assign-work-order` | Assign WO | **Live** · **UI out** peer |
| API-08 | GET | `mobile-bff/api/v1/patrol/sessions/{id}` | PatrolSessionsController | **Live** reuse |
| API-09 | POST/PUT | `mobile-bff/api/v1/files/*` | FileService | **Live** cite RouteCapture |
| API-10 | GET | `mobile-bff/api/v1/auth/profile` | Auth + role-gate enrich | **Live** cite caps |

**POST/PUT body (Live KEEP):** `source` · `findingKind` · `kmFrom`/`kmTo` · `side` · `hangMuc` · `description` · `scope` · `dueAt` · `lat`/`lng`/`accuracyM` · `mediaIds` · `sessionId` · `journalLineId?`.

**Recheck body (Live KEEP):** `result` (`dat`/`chua-dat`) · `note?` · `mediaIds?` · GPS fields Pattern B.

### SLA badge (HARD) · UNCLEAR-FIND-SLA-FIELD CLOSED

| Rule | Decision |
|------|----------|
| Derive | client: `dueAt` vs `now` (list/detail) hoặc `recheckAt` khi đã recheck → **Trong hạn** / **Quá hạn** |
| DTO | **không** thêm `slaStatus` · **cấm** invent BE field / migration |
| Pair | hiển thị cùng Đạt / Chưa đạt (recheck result) trên FIND-D |
| Out | Mục IV tiền · SlaHours=24 default |

### Due suggest TT41 (HARD) · UNCLEAR-FIND-DUE-CATALOG → Dev

| Rule | Decision |
|------|----------|
| Owner | Dev wire client catalog map hangMuc→offset (Design §5) |
| Persist | user editable `dueAt` → POST/PUT Live field |
| Cấm | BE migration catalog · default SLA 24h only |

### Pattern B (HARD)

| Rule | Decision |
|------|----------|
| Lưu / recheck button | always enabled trừ `saving`\|`photoBusy` · **cấm** `disabled={!gps}` |
| GPS deny | banner on Lưu/recheck click · **cấm** fake lat/lng |
| Role deny | hide FAB/write/recheck + BE reject non-`tuanKiem` |

## 3. controlHint → API (cite real-data §B)

| uiField | controlHint | catalogKind | GET / source | write |
|---------|-------------|-------------|--------------|-------|
| source/findingKind/side/scope | Select/Radio | FINDING_* LOOKUP_STATIC | dto | body |
| hangMuc | Select | FINDING_HANGMUC | dto | `hangMuc` · **trigger** due suggest |
| dueAt | Date | TT41 client table | dto / suggest | `dueAt` · editable |
| kmFrom/kmTo/description | Input/TextArea | — | dto | required |
| journalLineId | TextInput | — | dto | optional · tuan-duong |
| lat/lng/accuracyM | GPS | geo | device | POST/PUT/recheck · Pattern B |
| mediaIds | RouteCapture | files | files/* | body · write tuần kiểm |
| save | Button | — | — | POST/PUT · TK |
| fabCreate | FAB | — | — | hide non-TK |
| cards | List RO | — | GET findings?sessionId | — |
| status | Badge | FINDING_STATUS | dto | RO |
| slaBadge | Badge | derive | dueAt+now/recheckAt | **UI only** |
| confirmPass/Fail | Button | — | — | POST recheck · TK |
| feedback* | Form | FEEDBACK_* | — | POST feedback |
| assignCta | — | — | — | **REMOVE** |
| roleCaps | Hidden/Banner | auth | profile + role-gate | gate UI |

## 4. Entity / migration

| Item | Decision |
|------|----------|
| entity change | **none** · Live Finding DTO KEEP |
| migration | **none** · Step 4b **skip** SA |
| new tables/columns | **cấm** · incl. `slaStatus` |
| BFF | forward only · **cấm** web-bff · **cấm** new Mobile.Bff route invent |

## 5. BFF vs API

| Layer | Decision |
|-------|----------|
| Client base | `{BffBase}/mobile-bff/api/v1` · Mobile.Bff `:5202` |
| Downstream | Patrol `patrol/findings*` · `patrol/sessions*` · FileService · Auth profile |
| Cấm | web-bff bind từ Mobile MFE · invent `cam-finding` proxy |

## 6. Tasks handoff (ids only → team_lead)

| Id | Scope | notes |
|----|-------|-------|
| T-FIND-ROLE | FindingList/Form/Detail | gate `tuanKiem` · FAB · write · recheck · roleGateBanner |
| T-FIND-DUE | FindingFormPage | hangMuc→dueAt TT41 client map · editable |
| T-FIND-SLA | FindingDetailPage (+list opt) | slaBadge client derive |
| T-FIND-ASSIGN-RM | FindingDetailPage | REMOVE Giao đơn vị BDTX CTA |
| T-FIND-GPS | Form+recheck | Pattern B keep |
| T-FIND-LEAVE | FindingFormPage | LeaveConfirmModal dirty |

**devSlash** `/agent-dev` · **cấm** new route · **cấm** CamFinding* · **cấm** Excel · **cấm** SlaHours=24.

## 7. DoR / confirm

| Gate | Status |
|------|--------|
| Design confirmed + reviewUrl | PASS |
| FormMode↔API Live KEEP | PASS |
| DOMAIN-MAP slug | PASS (CLOSED) |
| SLA field | PASS — client-only |
| entity/migration | none · PASS |
| solution_confirm | **approve** (autoApprove) |
| next role | `team_lead` · pending · **GAP-PKT-ROLE-01** stop SA |

## Version meta

`skillVersion=2026.09.05.03` · `schemaVersion=1` · `contentHash=sha256:a7c3e91f0b4d62e8c5f1a9d0e3b7c4f6a2d8e1b5c9f0a4d7e6b3c1f8a5d2e0b9` · `writtenAt=2026-10-01T07:40:00.000Z` · `changeScope=edit_page` · `solution_confirm=approve`
