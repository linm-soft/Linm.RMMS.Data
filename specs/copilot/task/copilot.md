# Team-lead — task pack · copilot

| Field | Value |
|-------|-------|
| feature | `copilot` |
| this role | `team_lead` · `/agent-team-lead` |
| status | `done` |
| changeScope | `edit_page` |
| packKind | `list` (packet) · featureClass **`ai`** |
| Feature Kind | **B** session catalog A–D + **D** `CopilotChatDrawer` · **không** CRUD form full-page P1 |
| mfeStdRoute | `/copilot` |
| route_confirm | **route_a** `/copilot` |
| autoApprove | **OFF** |
| solution_confirm | **approve** (user APPROVE→CHAIN · `task_f47ca8e1`) |
| design_confirm | **approve** (board · `task_76a85b90`) |
| taskId | `task_f9bd3a2a` |
| prior | data_analy `done` · PO `done` · Design `confirmed` · SA `confirmed` |
| updatedAt | `2026-08-15T14:15:00.000Z` |
| TL SSOT | `tl-platform-ssot.md` · `ssot-no-duplicate.md` · `tl-ssot-permission-tasks.md` · `tl-list-shell-height.md` · `tl-retry-ssot-rereview.md` · `form-type-task-pack.md` · `list-form-quality-gates` · `dev-ui-ux-constitution` |
| Recheck | **`tl-retry-ssot-rereview` HARD** trước Dev Write |

## from design / solution (scope gate)

| Source | Path | Task dùng |
|--------|------|-----------|
| Design | `specs/copilot/ui/design.md` + reviewUrl | T-UI-LIST · T-UI-FORM · T-UI-ACT · T-UI-DRAWER · T-CTX — A–D + Kind D Z1–Z3 |
| Solution | `specs/copilot/be/solution-discovery.md` | T-BE-PAGE · T-BE-TITLE · T-BE-RATE · T-BFF · T-PERM · T-MIG ops |
| Prototype | `ui/prototype/copilot-list-prototype.html` | UI DoD parity |
| controlHint | `specs/_data-analy/features/copilot-control-hint.md` | SearchInput status/locale · **cấm** Select · **không** init-data P1 |
| PO | `specs/copilot/po/requirement.md` | GAP-PO-COP-01..14 |

**Cấm ERP.*** · **cấm** `Domains/Master` · **cấm** `api/v1/rmms/*` · **cấm** parent JSON trên session DTO.

## Platform SSOT (REQUIRED)

| Layer | Package / repo | Consume |
|-------|----------------|---------|
| **UI** | `MFE-COMMON/Linm.Web.Common.Components` | npm `@linm-soft-org/linm-web-common-components` |
| **BE** | `API-LIB/Linm.Platform.CommonLib` | NuGet · ApiResponse · `[RequirePermission]` |
| **Auth** | `API-CORE/Linm.Platform.Authentication` | perm codes · stub P1 OK |

### ssot.reuse (REQUIRED mọi T-UI / T-BE)

| Concern | Reuse | Cấm (→ GAP-TL-DUP-*) |
|---------|-------|----------------------|
| UI | common-components `Lin*` / `Erp*` | local Button/Input/Modal/Table/Pager |
| HTTP | `apiClient` re-export | `class ApiClient` · local `apiErrorNavigation` |
| State | page-hooks + common reducers | local toast fork |
| BE | CommonLib ApiResponse | ad-hoc envelope DTO |
| Auth | `[RequirePermission]` + Auth codes | custom perm attribute |
| Persist | flat entity columns | parent `*LinesJson` trên session DTO (`CitationsJson`/`ChartJson` = cột message → DTO object OK) |
| BFF | proxy only | business logic in BFF |
| Dropdown | FE static enum Design §3 | native `<select>` · `GET init-data` P1 (SA OUT) |

## Source assignment (`beRepo` · `uiRepo` — board confirm)

| Field | Value |
|-------|-------|
| `source.mfe` | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Copilot` |
| `source.routes` | `/copilot` · Kind D drawer in-place · **không** `/copilot/new` P1 |
| `source.backend` | `D:/AI-QLBD/Linm.RMMS.WebService` |
| `source.domain` | **Copilot** (`copilot`) |
| `source.api` | `api/src/RMMS.Service.Api/Domains/Copilot/` · `api/domains/copilot/LINM.RMMS.Copilot.Models/` |
| `source.bff` | `bff/domains/copilot/` · `web-bff/api/v1/copilot/**` |
| `source.persistence` | `api/shared/RMMS.Service.Persistence/` Entities Copilot* |
| `source.migrations` | `Schema_RmmsCopilotSessions` **đã có file** — apply DB = **ops** (GAP-PO-COP-11) |
| Demo | `Linm.RMMS.Demo/src/demo/features/copilot-demo.html` → `copilot/copilot.html` |
| Context | `Linm.RMMS.Data/docs/context/features/copilot.md` |
| reviewUrl | `file:///D:/AI-QLBD/Linm.RMMS.Data/specs/copilot/ui/prototype/copilot-list-prototype.html` |
| `mfeStdRoute` | `/copilot` (**locked**) |
| `mfeStdUrl` | `http://localhost:9310/copilot` |

### route_confirm

| Option | Path | Note |
|--------|------|------|
| **A (locked)** | `/copilot` | PO+Design+SA |
| B | `/ai-copilot` | **không chọn** |
| C | — | n/a |

## API contract (from SA — Dev delta **chỉ** GAP)

Base BE: `api/v1/copilot` · BFF: `web-bff/api/v1/copilot` · FE BASE: **`/copilot`**.

| id | Method | Path | Live | Dev |
|----|--------|------|------|-----|
| API-01 | GET | `/api/v1/copilot/sessions` | DONE pageSize default **20** allow `{20,50,100,200,500}` | **GAP-SA-COP-PAGE** default **50** · allow **chỉ** `{50,100,200,500}` · invalid → 50 |
| API-02 | GET | `/sessions/{id}` | DONE | keep · XCO get_only |
| API-03 | POST | `/sessions` | DONE | keep · title default «Phiên mới» |
| API-04 | PATCH | `/sessions/{id}` | **MISSING** | **GAP-SA-COP-TITLE** `{ title }` trim · max 256 · empty → 422 |
| API-05 | POST | `/sessions/{id}/archive` | DONE | keep |
| API-06 | DELETE | `/sessions/{id}` | DONE | keep · soft `IsActive=false` |
| API-07 | POST | `/chat` | DONE canned | keep · rate consume |
| API-08 | POST | `/feedback` | DONE | keep · **note IN P1** |
| API-09 | GET | `/stats` | DONE | keep optional |
| API-10 | GET | `/rate` | **MISSING** | **GAP-SA-COP-RATE** peek `{ rateRemaining, rateLimit: 10 }` **không** consume |
| API-11 | GET | `/health` | DONE | keep |
| LKP | — | init-data | **OUT P1** | FE static enum |

## Implement gates (from SA)

| Gate | Decision | Apply |
|------|----------|-------|
| TZ | **tz_required** | CreatedAt / UpdatedAt / LastMessageAt store UTC · FE `toLocaleString` |
| XCO | **xco_get_only** | GetById / chat / archive / delete / PATCH · other tenant → 404 |
| SHARE | **share_tenant** | `Copilot*Entity` : `TenantEntity` |
| parent_json | **cấm** session DTO | Citations/Chart = message columns → DTO object |

## System design

| ID | Flag | Note |
|----|------|------|
| SD-LIB-UI | **required** | common-components only |
| SD-LIB-BE | **required** | CommonLib ApiResponse |
| SD-AUTH | gap/stub | `copilot.*` · local mode true P1 |
| SD-BFF | **required** | Proxy only · **Patch body** |
| SD-HEADER | **required** | `X-Company-Id` |
| SD-JOB | n/a | canned sync |
| SD-TENANT | **required** | CompanyCode |
| SD-NO-JSON | **required** | no parent JSON on session |
| SD-SEARCH | **required** | search must work · pageSize 50/100/200/500 |
| SD-TZ | **required** | tz_required |
| SD-XCO | **required** | get_only |
| SD-SHARE | **required** | share_tenant |
| SD-INIT | **out P1** | enum tĩnh |

## DES-GRID → Lin* (HARD)

| Zone | Design | Component |
|------|--------|-----------|
| A | DES-GRID-A | `LinPageLayout` header · titleIcon **`fa-comments`** · title **AI Copilot** · badges AI / P1 gpt-4o-mini / P2 RAG on-prem (không hứa local) / rate `n/10` — **cấm** Thêm trên A |
| B | DES-GRID-B | `catalogToolbar` FULL · add label **Phiên mới** · config=`fa-cog` · refresh · history · view · delete |
| FILTER | DES-GRID-FILTER | SearchTextInput search · **SearchInput** status — **cấm** `Select` |
| C0 | DES-GRID-C0 | listTitle **Danh sách phiên hội thoại** · row-menu help |
| C1 | DES-GRID-C1 | SearchTextInput — **cấm** nút Tìm riêng |
| C2 | DES-GRID-C2 | `LinCatalogDataGrid` · kéo cột default ON |
| C2a | DES-GRID-C2a | column config modal |
| C3 | DES-GRID-C3 | `LinCatalogRowActionMenu` · Xem (mở chat) · Lịch sử · Lưu trữ · Xóa |
| D | DES-GRID-D | **`LinCatalogListPagination`** 50/100/200/500 — **cấm** footerPagination / pageSizeBar |
| FAB | — | «Mở Copilot» · chọn dòng → drawer · không dòng → create + drawer |
| Z | DES-GRID-Z | Kind D Slideout Z1–Z3 · **cấm** nested CatalogListShell |
| H | DES-GRID-H | `LinCatalogHistoryModal` stub |
| — | shell | **1×** `LinPageLayout` |

## retry.ssot_rereview (TL live MFE 2026-08-15 · `CopilotListPage` + `CopilotChatDrawer` + BE)

Audit `Linm.Web.RMMS.Copilot` + `CopilotService` / `CopilotBffController` — **cấm** Dev chỉ patch 1 chỗ nếu còn GAP cùng surface.

| # | Check | Live | Gap |
|---|-------|------|-----|
| 1 | 1× `LinPageLayout` · **cấm** nested `CatalogListShell` | **PASS** (1 layout) | — |
| 2 | `LinCatalogDataGrid` + kéo cột default ON | **PASS** (`resizable: true`) | — |
| 3 | Footer `LinCatalogListPagination` | **PASS** | — |
| 4 | flex + skeleton | **PASS** (`useServerPagedListLoading` · `skeletonRows={8}`) | — |
| 5 | toolbar refresh · history · config · add | **PASS** (add = Phiên mới) | Zone A titleIcon live `fa-robot` ≠ Design `fa-comments`; listTitle gộp badge/rate — **GAP** tách Zone A badges + listTitle «Danh sách phiên hội thoại» |
| 6 | SearchTextInput + filters | search **PASS** · status = **`Select`** | **T-UI-LKP** SearchInput status · labels «Đang dùng»/«Lưu trữ» (live raw `active`/`archived`) |
| 7 | `filterMaxWidth` | live `filterMaxWidthPx={1000}` | **T-UI-UX** **cấm** `filterMaxWidth` |
| 8 | tree_master | n/a Copilot | — |
| 9 | Kind D chat · **không** Resource/View=readOnly composer | Slideout **PASS** · native `<textarea>` | dùng `Text` textarea SSOT nếu package có · **cấm** Input readOnly |
| 10 | locale SearchInput | live **`Select`** | **T-UI-LKP** |
| 11 | LeaveConfirm / useAlert · **cấm** `window.confirm` | **FAIL** drawer + delete | **T-UI-UX** · **T-UI-ACT** |
| 12 | Title PATCH Z1 | live display `title · code` không edit | **T-UI-DRAWER** + **T-BE-TITLE** |
| 13 | Thumb-down note modal | **FAIL** vote không `note` | **T-UI-DRAWER** · POST `note` |
| 14 | GET rate peek Zone A | FE default 10 · chỉ update sau chat | **T-BE-RATE** + FE load list |
| 15 | pageSize API | default 20 · allow 20 | **T-BE-PAGE** |
| 16 | BFF PATCH / GET rate | BFF không PATCH · không `/rate` | **T-BFF-01** |
| 17 | Form OUT P1 | `index.tsx` `/copilot/new` → list · **không** `/:id` | **T-UI-FORM** giữ redirect · ẩn `CopilotFormPage` khỏi nav · file scaffold có thể giữ unused |
| 18 | FE perm chat/feedback | chỉ sessions CRUD | **T-PERM** thêm `copilot.chat.send` · `copilot.chat.feedback` |
| 19 | list_parity columns | STT/□ via grid SSOT · Mã/Tiêu đề/Status/Tin/Last | Status badge labels VN |
| 20 | ERP.* | **none** | — |

**Cấm** chỉ sửa Select status nếu còn `window.confirm` / locale Select / PATCH title / rate peek / pageSize cùng surface.

## Tasks

| id | page | layer | deps | status live | DoD |
|----|------|-------|------|-------------|-----|
| T-CTX-01 | copilot | docs | — | **done** | Context+demo+controlHint+SA linked · Kind B+D · **cấm** ERP.* |
| T-PERM-01 | copilot | ui+api | T-CTX-01 | FE partial | `copilot.sessions.read\|create\|update\|delete` · `copilot.chat.send` · `copilot.chat.feedback` · FE `copilotListPermissions` + chat gates · BE `[RequirePermission]` stub P1 |
| T-UI-LIST-01 | /copilot | ui-list | T-PERM-01 | shell **PASS** · A/B **GAP** | Giữ 1× LinPageLayout + grid + pagination · Zone A `fa-comments` + badges tách · listTitle «Danh sách phiên hội thoại» · SearchInput status · filter đổi page=1 · **cấm** filterMaxWidth · FE pageSize 50/100/200/500 |
| T-UI-FORM-01 | /copilot/new | ui-form | T-UI-LIST-01 | redirect **PASS** | Giữ `Navigate` `/copilot/new` → `/copilot` · **không** mount CRUD form · **không** Slideout CRUD phiên |
| T-UI-DRAWER-01 | drawer | ui-form | T-UI-LIST-01 | Kind D **GAP** | Z1: Đóng + LeaveConfirmModal · code readonly · **Text title** persist PATCH · Xuất JSON · engine badge · Z2: chips×5 · bubbles · citations toast · chart stub · thumbs · copy · **note modal** down · Z3: TextArea · SearchInput locale · Gửi · Escalate · P2 badge only · disclaimer |
| T-UI-ACT-01 | copilot | ui | T-UI-LIST-01 | partial | Toolbar Phiên mới / Xem / Xóa · FAB · row Xem/Lịch sử/Lưu trữ/Xóa · delete **useAlert** · **cấm** `window.confirm` |
| T-UI-LKP-01 | copilot | ui | T-UI-LIST-01 | **FAIL Select** | status + locale = `SearchInput` static enum · **cấm** `Select` / native select · **không** init-data |
| T-UI-FIELD-01 | copilot | ui | T-UI-DRAWER-01 | **delta** | Date UTC→local · tokens INT · enum status/locale/model/vote · title PATCH · feedback.note string |
| T-UI-PROD-01 | copilot | ui | T-UI-DRAWER-01 | chat OK · form OUT | **cấm** Resource · **cấm** View=`readOnly` Input composer · chat = Kind D product · form scaffold OUT |
| T-UI-UX-01 | copilot | ui | T-UI-LIST-01 | **GAP** | gap 4/8/16 · **cấm** `filterMaxWidth` · confirm Lin Modal · toast · input pad 6×10 · checkbox 24×24 |
| T-BE-PAGE-01 | sessions | api | T-CTX-01 | **GAP** | `AllowedPageSizes = [50,100,200,500]` · default 50 · invalid → 50 · controller default 50 |
| T-BE-TITLE-01 | sessions | api | T-BE-PAGE-01 | **GAP** | PATCH `{ title }` · DTO `UpdateCopilotSessionTitleRequest` · 404 XCO · 422 empty/max 256 |
| T-BE-RATE-01 | rate | api | T-CTX-01 | **GAP** | GET `/api/v1/copilot/rate` peek · không consume |
| T-BFF-01 | copilot | bff | T-BE-TITLE-01, T-BE-RATE-01 | **GAP** | `ForwardAsync` **Patch** + body · GET rate · PATCH sessions/{id} |
| T-BE-MIG-01 | sessions | migration | — | file **DONE** | **không** schema mới · ops apply `Schema_RmmsCopilotSessions` (không block Dev compile) |
| T-QA-01 | copilot | qa | T-UI-DRAWER-01, T-BFF-01 | pending QA | scenarios.md · T-UI-UX · mfeStdUrl smoke |
| T-RV-01 | copilot | review | T-QA-01 | pending Review | findings.md |

## Action inventory (P1)

| UI action | Zone | Pair |
|-----------|------|------|
| Phiên mới | toolbar B | POST `/sessions` + open drawer |
| Làm mới | B | GET list |
| Lịch sử | B + row | `LinCatalogHistoryModal` stub |
| Sửa config | B | column config |
| Xem (mở chat) | B + row + code click + dblclick | GET `{id}` + Kind D |
| Xóa | B + row | DELETE · Lin confirm |
| Lưu trữ | row | POST archive |
| FAB Mở Copilot | FAB | drawer selected / create |
| Đóng drawer | Z1 | LeaveConfirm nếu dirty |
| Rename title | Z1 | PATCH title |
| Xuất JSON | Z1 | FE stub blob |
| Prompt chip ×5 | Z2 | inject + POST chat |
| Gửi | Z3 | POST chat |
| Escalate / P2 RAG | Z3 | model body · rag-p2 **badge only** |
| Thumb ± + note | Z2 | POST feedback |
| Copy | Z2 | clipboard toast |
| Hồ sơ / Đăng xuất / Reset seed | — | **SKIP** |

## T-BE / T-BFF detail

| Item | Spec |
|------|------|
| List query | `search` · `status` · `page` · `pageSize` ∈ {50,100,200,500} |
| search | Contains code **hoặc** title CI · AND status · `IsActive=true` |
| Sort | `LastMessageAt ?? UpdatedAt` DESC |
| PATCH title | required after trim · max 256 |
| GET rate | `{ rateRemaining, rateLimit: 10 }` · window key P1 `company + ":local"` |
| Chat | giữ canned · 429 RATE_LIMIT · consume 1 |
| Feedback | `vote` up\|down · `note?` |
| BFF | proxy-only · QS passthrough · **Patch** body |
| SHARE | share_tenant |
| TZ / XCO | tz_required · get_only |

## Enum SSOT (SA chốt — TL bind UI label)

**status** persist `active` \| `archived`:

| value | Label VN |
|-------|----------|
| *(empty filter)* | Tất cả |
| `active` | Đang dùng |
| `archived` | Lưu trữ |

**locale:** `vi` = Tiếng Việt · `en` = English  

**vote:** `up` · `down`  

**model P1:** `gpt-4o-mini` (default) · `gpt-4o` · `rag-p2` (badge text only — **không** Qdrant)

## SD / P2 out of Dev this pack

Azure OpenAI / `Linm.AiService` · Qdrant · SQL tool whitelist · token budget UI · Mobile · Excel · clone chrome demo · init-data endpoint.

## Handoff → Dev

1. **Không** rewrite list shell đã PASS (1× LinPageLayout · grid kéo cột · LinCatalogListPagination · skeleton · FAB).
2. Cùng surface: SearchInput status+locale · LeaveConfirm/useAlert · Zone A badges+icon · listTitle · cấm filterMaxWidth · PATCH title + GET rate + pageSize 50+ · BFF Patch · feedback note · perm chat.
3. Bind enum **value** SA + label VN.
4. Chỉ repo `Linm.RMMS.WebService` domain **Copilot** — **cấm ERP.***
5. VERIFY: MFE `yarn build` (+ `yarn typecheck`) PASS · BE `dotnet build` API + BFF PASS — ghi implement § Build. Fail → **cấm** `completed` / handoff QA (**GAP-DEV-BUILD-***).
6. Ghi `retry.ssot_rereview` trên implement MD (re-audit live trước Write).
7. Roles sau = **pending** đến lượt (chain ON · autoApprove **OFF** · Review khi tới = await_confirm).

## Version meta (REQUIRED)

| Field | Value |
|-------|-------|
| skillId | agent-team-lead |
| skillVersion | 2026.08.15.5 |
| schemaVersion | 2 |
| workflowVersion | 2026.08.15.5 |
| rulesVersion | 2026.08.15.8 |
| generatedAt | 2026-08-15T14:15:00.000Z |
| versionGate | rechecked |
| version_mismatch_action | recheck_new (STATUS) |
| orchestratorSkillVersion | 2026.08.15.5 |
| saSkillVersion | 2026.08.15.5 |
| designSkillVersion | 2026.08.15.5 |
| poSkillVersion | 2026.08.15.5 |
| dataAnalySkillVersion | 2026.08.15.5 |
| contentHashPriorDataAnaly | sha256:f2466aa9004e0ca38e0db5549eb8e8c2d9a1a874efc83bcbfab0f7e4b737d805 |

---
<!-- Version meta: skillVersion=2026.08.15.5 · schemaVersion=2 · workflowVersion=2026.08.15.5 · rulesVersion=2026.08.15.8 · versionGate=rechecked -->
