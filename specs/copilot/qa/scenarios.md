# QA — scenarios — copilot

| Field | Value |
|-------|-------|
| feature | `copilot` |
| status | `done` |
| this role | `qa` · `/agent-qa` |
| pack | T-QA-01 · T-UI-LIST/DRAWER/LKP/FIELD/PROD/UX · T-BE-PAGE/TITLE/RATE · T-BFF |
| mfeStdUrl | `http://localhost:9310/copilot` |
| mfeStdRoute | `/copilot` |
| backend | `D:/AI-QLBD/Linm.RMMS.WebService` · `api/v1/copilot` |
| taskId | `task_26f58535` |
| prior Dev | `task_572a548f` · implement `done` |
| autoApprove | **ON** (packet) · STATUS board autoApprove historically OFF for Review |
| updatedAt | `2026-08-15T14:35:00.000Z` |
| method | static review live `CopilotListPage` + `CopilotChatDrawer` + `endpoint.ts` + BFF/API Copilot · `yarn typecheck` + `yarn build` **PASS** |
| skillVersion | `2026.08.15.5` |
| schemaVersion | `2` |
| workflowVersion | `2026.08.15.5` |
| rulesVersion | `2026.08.15.8` |
| versionGate | `rechecked` |

## Smoke — Final MFE (REQUIRED)

| # | Step | Expect | Result |
|---|------|--------|--------|
| S0 | Route `/copilot` · `yarn start:std` :9310 | Mount list · không 404 | **PASS** (`index.tsx` `path="copilot"`) |
| S1 | List shell | 1× `LinPageLayout` kind=catalog · **không** nested `CatalogListShell` | **PASS** |
| S2 | Footer pager | `LinCatalogListPagination` · pageSize default **50** · đổi size → page=1 | **PASS** |
| S3 | Search | `SearchTextInput` · **không** nút Tìm riêng · filter → page=1 | **PASS** |
| S4 | Status | `SearchInput` static enum Đang dùng / Lưu trữ · **cấm** `Select` | **PASS** |
| S5 | Toolbar B | refresh · history · cog · **Phiên mới** · view/delete khi `activeRow` · **cấm** Thêm trên A | **PASS** |
| S6 | History | `LinCatalogHistoryModal` stub + toast nếu chưa chọn dòng | **PASS** (debt P1 stub) |
| S7 | Row menu | Xem / Lịch sử / Lưu trữ / Xóa · `buildCatalogRowMenuItems` + archive | **PASS** |
| S8 | Form OUT P1 | `/copilot/new` → `Navigate` `/copilot` · **không** mount `CopilotFormPage` | **PASS** |
| S9 | No ERP.* | FE BASE `/copilot` · BE `Linm.RMMS.WebService` · **cấm** `api/v1/rmms/*` | **PASS** |
| S10 | FAB | «Mở Copilot» · có dòng → drawer · không dòng → create + drawer | **PASS** |

## List A–D (T-QA-01)

| Zone | Scenario | Result |
|------|----------|--------|
| A | Title **AI Copilot** · `fas fa-comments` · badges AI / P1 gpt-4o-mini / P2 RAG on-prem / `{n}/10` · **cấm** Thêm trên A | **PASS** (`beforeToolbar` badges + GET `/rate` peek) |
| B | Filters search + status · `filterMaxWidthPx={null}` · add **Phiên mới** | **PASS** |
| C0 | listTitle **Danh sách phiên hội thoại** · row-menu help | **PASS** |
| C1 | SearchTextInput | **PASS** |
| C2 | `LinCatalogDataGrid` · `resizable: true` · STT/□ SSOT · Mã/Tiêu đề/Status VN/Tin/Last · click mã → drawer | **PASS** |
| C3 | Row menu Xem/Lịch sử/Lưu trữ/Xóa | **PASS** |
| D | `LinCatalogListPagination` only · **cấm** footerPagination / pageSizeBar / raw table | **PASS** |
| Layout | `.page` + `data-catalog-list-page` · skeletonRows=8 · `useServerPagedListLoading` | **PASS** |
| Config | cog → hint Kind B kéo cột (không editor schema P1) | **PASS** (hint dialog · không P0) |

## Kind D drawer (T-QA-CHAT)

| ID | Scenario | Expect | Result |
|----|----------|--------|--------|
| T-QA-CHAT-01 | Prompt chip ×5 | POST `/chat` · user+assistant · citations toast | **PASS** (wired) |
| T-QA-CHAT-02 | Chart prompt | Chart stub bars khi `m.chart` | **PASS** |
| T-QA-CHAT-03 | Thumb up | POST `/feedback` vote=up | **PASS** |
| T-QA-CHAT-04 | Thumb down | Modal note + POST `note` | **PASS** |
| T-QA-CHAT-05 | Copy / Xuất JSON | clipboard · download `{code}.json` | **PASS** |
| T-QA-CHAT-06 | Rate 10/min | GET peek không consume · chat consume · 429 RATE_LIMIT | **PASS** (API) |
| T-QA-CHAT-07 | Disclaimer + P2 | Text «không hứa RAG / model local» · badge P2 | **PASS** |
| T-QA-CHAT-08 | Locale | `SearchInput` vi/en · **cấm** Select | **PASS** |
| T-QA-CHAT-09 | Composer | `TextArea` · Enter gửi · Shift+Enter newline · **không** View=readOnly product | **PASS** (`readOnly={!canChat}` = perm gate) |
| T-QA-CHAT-10 | Title Z1 | `Input` + PATCH blur · code readonly | **PASS** |
| T-QA-CHAT-11 | Leave dirty | `useLeaveConfirm` + `LeaveConfirmModal` · **cấm** `window.confirm` | **PASS** |
| T-QA-CHAT-12 | Escalate / P2 | Badge engine GPT-4o / RAG on-prem | **PASS** (badge only P1) |
| T-QA-CHAT-13 | Unicode + BE mock | Chip từ `GET /prompts` · «xuống cấp» → QL.22 UTF-8 · **cấm** `nh?n` / `(P1 stub)` | **OPEN** (edit-web 2026-08-30) |

## T-QA CRUD-session (không form page)

| # | Step | Expect | Result |
|---|------|--------|--------|
| QA-20 | Phiên mới | Toolbar/FAB → POST `/sessions` title «Phiên mới» + mở drawer | **PASS** |
| QA-21 | Xem | Toolbar view / row / double-click / mã → GET by id + Slideout Kind D | **PASS** |
| QA-22 | Lưu trữ | Row archive → POST `/sessions/{id}/archive` | **PASS** |
| QA-23 | Xóa | Toolbar/row → `Modal` confirm · DELETE soft · **cấm** `window.confirm` | **PASS** |
| QA-24 | T-UI-LKP-01 | status + locale SearchInput static · **không** init-data | **PASS** |
| QA-25 | T-UI-FIELD-01 | Date UTC→`toLocaleString('vi-VN')` · tokens INT · enum status/locale/vote · title PATCH · note string | **PASS** |
| QA-26 | T-UI-PROD-01 | Chat = Kind D Slideout · **cấm** Resource · form scaffold không route | **PASS** |
| QA-27 | T-UI-UX-01 | `filterMaxWidthPx={null}` list+layout · confirm Lin Modal · toast · SearchInput `dropdownPortal` | **PASS** |
| QA-28 | T-PERM | `copilot.sessions.*` · `copilot.chat.send` · `copilot.chat.feedback` · local mode all true | **PASS** (BE `[RequirePermission]` stub P1) |
| QA-29 | T-BE-PAGE | allow `{50,100,200,500}` · invalid → 50 · FE default 50 | **PASS** |
| QA-30 | T-BE-TITLE | PATCH `{ title }` trim · max 256 · empty 422 · missing 404 | **PASS** (service+controller) |
| QA-31 | T-BE-RATE | GET `/api/v1/copilot/rate` peek | **PASS** |
| QA-32 | T-BFF-01 | `HttpMethod.Patch` body + GET rate · proxy only | **PASS** |
| QA-33 | TZ | CreatedAt/UpdatedAt/LastMessageAt UTC store · FE local | **PASS** |
| QA-34 | XCO | GetById / PATCH / archive / delete / chat session miss → 404 | **PASS** (null → 404) |
| QA-35 | SHARE | `Copilot*Entity` : `TenantEntity` | **PASS** |
| QA-36 | parent JSON | **cấm** trên session DTO · citations/chart message DTO object OK | **PASS** |

## Negative

| # | Case | Expect | Result |
|---|------|--------|--------|
| N1 | PATCH title empty | 422 | **PASS** (ArgumentException) |
| N2 | PATCH title >256 | 422 | **PASS** |
| N3 | GetById miss | 404 + toast drawer | **PASS** |
| N4 | Chat rate exceed | 429 «Rate limit 10 req/min» | **PASS** |
| N5 | History không chọn dòng | toast «Chọn một dòng…» | **PASS** |
| N6 | Delete/create không perm | nút ẩn / early return | **PASS** (local mode true) |
| N7 | Composer `!canChat` | TextArea readOnly + Gửi disabled | **PASS** |

## API contract smoke (code)

| API | Method | Path | Result |
|-----|--------|------|--------|
| API-01 | GET | `/api/v1/copilot/sessions` pageSize 50 | **PASS** |
| API-02 | GET | `/sessions/{id}` XCO | **PASS** |
| API-03 | POST | `/sessions` | **PASS** |
| API-04 | PATCH | `/sessions/{id}` `{ title }` | **PASS** |
| API-05 | POST | `/sessions/{id}/archive` | **PASS** |
| API-06 | DELETE | `/sessions/{id}` soft | **PASS** |
| API-07 | POST | `/chat` canned | **PASS** |
| API-08 | POST | `/feedback` + note | **PASS** |
| API-09 | GET | `/stats` | **PASS** |
| API-10 | GET | `/rate` peek | **PASS** |
| API-11 | GET | `/health` | **PASS** |
| LKP | — | init-data | **OUT P1** |

## Gaps / debt (không P0)

| ID | Severity | Note |
|----|----------|------|
| SD-AUTH | P2 | `[RequirePermission]` TODO CommonLib NuGet |
| History API | P1 | stub empty document-history |
| Column config | P2 | cog = hint card, chưa `LinCatalogUiSchemaEditorModal` |
| GAP-PO-COP-11 | ops | Apply migration `Schema_RmmsCopilotSessions` trên DB |
| GAP-PO-COP-07/08 | P2 | Azure OpenAI / Qdrant khi AiService sẵn sàng |
| Form scaffold | P1 | `CopilotFormPage.tsx` unused — không mount |

**P0:** none — **cấm** handoff blocked.

## Build gate (`task_26f58535`)

| Check | Result |
|-------|--------|
| `yarn typecheck` (MFE Copilot) | **PASS** |
| `LINM_RUN_DEV_LOCAL_BUNDLE=1 yarn build` | **PASS** (webpack 0 errors · size warnings only) |
| BE Write this role | **n/a** — QA không đụng API |
| Prior Dev `dotnet` API+BFF | **PASS** (`task_572a548f`) |
| ERP.* | **none** |

## Handoff → Review

Roles sau = **pending**. Chain ON · roleOnly QA xong → Review `review/findings.md` khi enqueue.

Packet autoApprove=ON → Review **không** tự chạy trong task này (roleOnly=1).

## Version meta (REQUIRED)

| Field | Value |
|-------|-------|
| skillId | agent-qa |
| skillVersion | 2026.08.15.5 |
| schemaVersion | 2 |
| workflowVersion | 2026.08.15.5 |
| rulesVersion | 2026.08.15.8 |
| generatedAt | 2026-08-15T14:35:00.000Z |
| versionGate | rechecked |
| teamLeadSkillVersion | 2026.08.15.5 |
| saSkillVersion | 2026.08.15.5 |
| designSkillVersion | 2026.08.15.5 |
| poSkillVersion | 2026.08.15.5 |
| dataAnalySkillVersion | 2026.08.15.5 |
| dataAnalyWorkflowVersion | 2026.08.15.5 |
| dataAnalyRulesVersion | 2026.08.15.8 |

---
<!-- Version meta: skillVersion=2026.08.15.5 · schemaVersion=2 · workflowVersion=2026.08.15.5 · rulesVersion=2026.08.15.8 · versionGate=rechecked -->
