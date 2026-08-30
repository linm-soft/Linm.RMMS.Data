# Implement — copilot

| Field | Value |
|-------|-------|
| feature | `copilot` |
| this role | `dev` · `/agent-dev` |
| status | `done` |
| changeScope | `edit_page` |
| packKind | `list` · featureClass **`ai`** |
| taskId | `task_572a548f` |
| autoApprove | **ON** (packet) · STATUS board autoApprove historically OFF for Review |
| mfeStdRoute | `/copilot` |
| backend | `D:/AI-QLBD/Linm.RMMS.WebService` · `api/v1/copilot` |
| updatedAt | `2026-08-15T14:25:00.000Z` |
| skillVersion | `2026.08.15.5` |
| schemaVersion | `2` |
| workflowVersion | `2026.08.15.5` |
| rulesVersion | `2026.08.15.8` |
| versionGate | `rechecked` |

## retry.ssot_rereview (HARD — trước Write)

Live MFE `CopilotListPage` + `CopilotChatDrawer` + BE Copilot (2026-08-15) — **không** chỉ patch 1 chỗ.

| # | Check | Before Write | After Dev |
|---|-------|--------------|-----------|
| 1 | 1× `LinPageLayout` · cấm nested CatalogListShell | PASS | **PASS** |
| 2 | `LinCatalogDataGrid` + kéo cột default ON | PASS | **PASS** |
| 3 | Footer `LinCatalogListPagination` | PASS | **PASS** 50/100/200/500 |
| 4 | flex + skeleton | PASS | **PASS** |
| 5 | Zone A `fa-comments` + badges tách · listTitle | GAP icon/badges | **PASS** `fa-comments` · badges AI / P1 / P2 / rate · listTitle «Danh sách phiên hội thoại» |
| 6 | SearchInput status VN | FAIL Select | **PASS** SearchInput `active`/`archived` |
| 7 | `filterMaxWidth` | FAIL 1000 | **PASS** `filterMaxWidthPx={null}` |
| 8 | tree_master | n/a | n/a |
| 9 | Kind D composer | native textarea | **PASS** `TextArea` · không View=readOnly product form |
| 10 | locale SearchInput | FAIL Select | **PASS** |
| 11 | LeaveConfirm / Modal · cấm `window.confirm` | FAIL | **PASS** LeaveConfirmModal + Modal xóa |
| 12 | Title PATCH Z1 | FAIL | **PASS** Input + PATCH |
| 13 | Thumb-down note | FAIL | **PASS** Modal note + POST `note` |
| 14 | GET rate peek | FAIL | **PASS** load list + refresh |
| 15 | pageSize API | GAP 20 | **PASS** default 50 · allow {50,100,200,500} |
| 16 | BFF PATCH + GET rate | GAP | **PASS** Patch body + `/rate` |
| 17 | Form OUT P1 | redirect | **PASS** `/copilot/new` → list · nav không FORM |
| 18 | perm chat/feedback | GAP | **PASS** FE gates + BE TODO stub |
| 19 | status labels VN | raw | **PASS** Đang dùng / Lưu trữ |
| 20 | ERP.* | none | **none** |

## What shipped

### FE (`Linm.Web.RMMS.Copilot`)
- Zone A badges + icon; listTitle; SearchInput status; cấm filterMaxWidth
- Delete `Modal`; drawer `LeaveConfirmModal`; title PATCH; locale SearchInput; `TextArea` composer; feedback note
- Client: `PATCH /sessions/{id}` · `GET /rate` · perm `copilot.chat.send` / `copilot.chat.feedback`

### BE (`Linm.RMMS.WebService` · Copilot only)
- `AllowedPageSizes = [50,100,200,500]` · invalid → 50
- PATCH `{ title }` trim · max 256 · empty 422 · missing 404
- GET `/api/v1/copilot/rate` peek (không consume)
- BFF `HttpMethod.Patch` + GET rate
- **Cấm ERP.***

## Build

| Gate | Result |
|------|--------|
| FE yarn typecheck | **PASS** (2026-08-30) |
| FE yarn build | **PASS** (`LINM_RUN_DEV_LOCAL_BUNDLE=1`) |
| BE API `dotnet build` | **PASS** (output `%TEMP%\rmms-api-copilot-unicode` · 2026-08-30) |
| BE BFF `dotnet build` | **PASS** (output `%TEMP%\rmms-bff-copilot-unicode` · 2026-08-30) |
| ERP.* | **none** |

## Notes — `/edit-web-feature` 2026-08-30

- **GAP-WEB-EDIT unicode + mock:** canned reply nằm trong `CopilotService.ResolveReply` bị mojibake (`nh?n`, `xu?ng c?p`) → match fail → mọi chip rơi default «P1 stub».
- **Fix:** SSOT `Domains/Copilot/Services/CopilotMockCatalog.cs` (UTF-8 prompts + replies + fold VN). `GET /api/v1/copilot/prompts` + BFF. FE `CopilotChatDrawer` load chips — **xóa** `PROMPTS` hardcode.
- Chat `CopilotMockCatalog.Resolve` — **cấm** `(P1 stub)` trên bubble. Title default «Phiên mới» qua `IsDefaultSessionTitle` (fold).
- Không đổi schema / không ERP.*.

## Handoff → QA

Roles sau = **pending**. Chain ON. QA: `qa/scenarios.md` · T-UI-UX · mfeStdUrl smoke.

## Version meta (REQUIRED)

| Field | Value |
|-------|-------|
| skillId | agent-dev |
| skillVersion | 2026.08.15.5 |
| schemaVersion | 2 |
| workflowVersion | 2026.08.15.5 |
| rulesVersion | 2026.08.15.8 |
| generatedAt | 2026-08-15T14:25:00.000Z |
| versionGate | rechecked |
| teamLeadSkillVersion | 2026.08.15.5 |
| saSkillVersion | 2026.08.15.5 |

---
<!-- Version meta: skillVersion=2026.08.15.5 · schemaVersion=2 · workflowVersion=2026.08.15.5 · rulesVersion=2026.08.15.8 · versionGate=rechecked -->
