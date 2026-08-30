# Design — copilot (AI Copilot)

| Field | Value |
|-------|-------|
| feature | `copilot` |
| Feature Kind | **B** catalog sessions A–D + **D** drawer chat (`CopilotChatDrawer`) · **không** full-page CRUD form P1 |
| status | `await_confirm` |
| design_confirm | **pending** (`autoApprove=OFF` · user Approve board) |
| changeScope | `edit_page` |
| packKind | `list` (packet) · featureClass **`ai`** |
| mfe | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Copilot` (`/copilot`) |
| mfeStdUrl | `http://localhost:9310/copilot` |
| backend | `D:/AI-QLBD/Linm.RMMS.WebService` · `api/v1/copilot` |
| domain | **Copilot** |
| prior | PO `confirmed` · `po/requirement.md` · GAP-PO-COP-01..14 · data-analy hash `sha256:f2466aa9004e0ca38e0db5549eb8e8c2d9a1a874efc83bcbfab0f7e4b737d805` |
| autoApprove | **OFF** (`task_76a85b90`) → **không** tự confirm · SA **không** enqueue đến khi user Approve |
| updatedAt | `2026-08-15T13:28:00.000Z` |
| taskId | `task_76a85b90` |

## 0. Context & Demo (from PO)

| ID | Path | Notes |
|----|------|-------|
| CTX-01 | `docs/context/features/copilot.md` | Kind B list + Kind D drawer · P1 canned · không RAG local |
| CTX-02 | `demo-maps/copilot-control-map.md` | locale/status Select = **stale** — SSOT = controlHint + PO |
| DEM-01 | `Linm.RMMS.Demo/src/demo/features/copilot-demo.html` → `copilot/copilot.html` | Visual SSOT chat/prompts — **skip** chrome / Reset seed / Ban.TK |
| DI-02 | `specs/_data-analy/features/copilot-control-hint.md` | controlHint SSOT · cluster Excel **absent** |

Persona: Lãnh đạo · điều hành · BA (Web only). Pack **không** clone logo · hamburger · Hồ sơ/Đăng xuất · Reset seed.

**Cấm ERP.*** · **cấm** `api/v1/rmms/*` · **cấm** parent JSON.

## 1. Kind + UI pattern

| | |
|--|--|
| Feature Kind | **B** + **D** |
| List pattern | **1×** `LinPageLayout` kind=catalog — **cấm** nested `CatalogListShell` |
| Grid | `LinCatalogDataGrid` · kéo cột **default ON** |
| Footer | `LinCatalogListPagination` — **cấm** footerPagination / pageSizeBar / raw table production |
| Chat | Kind **D** Slideout `CopilotChatDrawer` — **IN P1** (surface sản phẩm) |
| Form CRUD | `CopilotFormPage` `/copilot/new` `/:id` — **OUT P1** (GAP-PO-COP-04) · ẩn route hoặc redirect list |
| View | Chat bubbles / markdown — **cấm** Input `readOnly` giả form composer |
| Toolbar SSOT | `catalog-list-toolbar` + `erp-control-icon-map` (`editConfig`=`fa-cog`) |
| Confirm | `LeaveConfirmModal` / `useAlert` — **cấm** `window.confirm` / `window.alert` |
| FAB | «Mở Copilot» — phiên đang chọn hoặc tạo phiên mới |

## 2. Screens / zones

| Screen | FormMode | Zones | Controls |
|--------|----------|-------|----------|
| AI Copilot list | list | **A Header · B Toolbar+filter · C Grid · D Pagination** | SearchTextInput + SearchInput status |
| Chat drawer | Kind D | **Z1 toolbar · Z2 messages · Z3 composer** | TextArea · SearchInput locale · chips · thumbs |
| Thumb-down note | modal | note + Hủy/Gửi | `Text` |
| Leave dirty | modal | Rời / Ở lại | `LeaveConfirmModal` |

### Zone A — Header

- Icon `fa-comments` + title **AI Copilot** (22px)
- Badge: AI support · P1 gpt-4o-mini · P2 RAG on-prem (**không** hứa local P1) · rate `n/10`
- **Cấm** Thêm mới / Phiên mới trên A

### Zone B — Toolbar + filter (PO DoD)

**Trái (filter + icon):**

| key | Label | Control (Design chốt) | catalogKind |
|-----|-------|------------------------|-------------|
| search | Tìm kiếm | `SearchTextInput` | text — mã `SES-*` · tiêu đề |
| status | Trạng thái | `SearchInput` | enum: (trống=Tất cả) · `active` · `archived` — **cấm** native `<select>` (GAP-PO-COP-01) |
| — | Làm mới | `fa-sync-alt` | reload · page=1 |
| — | Lịch sử | `fa-history` | `LinCatalogHistoryModal` |
| — | Sửa config | `fa-cog` | column config |
| — | Xem | `fa-eye` | khi có 1 dòng · mở Kind D |
| — | Xóa | `fa-trash` | khi có selection · **Lin confirm** |

**Phải:** **Phiên mới** primary (`fa-plus`) — **chỉ trên B**.

Filter đổi → **page=1** (search must work).

**Cấm trên B (P1):** Hồ sơ · Đăng xuất · Reset seed · chrome demo.

### Zone C — Grid

- Card title: **Danh sách phiên hội thoại**
- Help: nhấn đúp / menu dòng — Xem (mở chat) · Lịch sử · Lưu trữ · Xóa
- Flex + skeleton load — **cấm** blank body
- Columns (kéo cột ON): STT · □ · **Mã** · **Tiêu đề** · **Status** · **Số tin** · **Last message** · ⋯
- Click mã / double-click → Kind D chat
- Row menu: **Xem (mở chat) · Lịch sử · Lưu trữ · Xóa**

### Zone D — Pagination

`LinCatalogListPagination`: `Tổng: N · Trang x/y` · Hiển thị **50 / 100 / 200 / 500** · FA pager 32×32.

### FAB

Fixed «Mở Copilot»: nếu có dòng chọn → mở session đó; không → tạo phiên mới rồi mở drawer.

### Drawer Z1 — Toolbar (Kind D)

- Đóng (dirty → LeaveConfirmModal)
- Mã phiên `SES-YYYYMMDD-NNNN` **readonly** display
- Tiêu đề **Text rename** (GAP-PO-COP-06) — persist PATCH title nếu SA có; không thì client + create title
- Xuất JSON stub
- Engine badge gpt-4o-mini / GPT-4o escalate / P2 RAG **badge only**
- **Cấm** nested CatalogListShell trong drawer (session strip demo **không** clone vào MFE list — list đã ở Kind B)

### Drawer Z2 — Messages

- Prompt chips **×5** — **SSOT BE** `GET /api/v1/copilot/prompts` (`CopilotMockCatalog`, UTF-8). FE **cấm** hardcode chips / canned reply. Cùng catalog match `POST /chat`.
  1. Tuyến nào xuống cấp nhanh nhất?
  2. Có bao nhiêu ổ gà chưa xử lý?
  3. Tài sản nào cần chú ý tuần này?
  4. Tổng hợp PCI trung bình theo tuyến
  5. Sinh biểu đồ sự cố mở theo mức độ
- Reply content UTF-8 VN — **cấm** mojibake / `(P1 stub)` trên bubble
- Bubbles: role badge · content markdown · tokens
- Citations chip → toast stub Incident/Asset/Report
- Chart card: ECharts JSON stub (không lib bắt buộc P1)
- Thumb up / down · copy clipboard toast
- Thumb down → **note modal** (GAP-PO-COP-05)

### Drawer Z3 — Composer

| key | Label | Control | Notes |
|-----|-------|---------|-------|
| draft | Câu hỏi NL | `Text` textarea | Enter gửi · Shift+Enter newline · dirty leave-confirm |
| locale | Locale | `SearchInput` | enum `vi` / `en` — **cấm** Select (GAP-PO-COP-02) |
| — | Gửi | primary | POST chat · rate 10/min |
| — | Escalate GPT-4o | toggle badge | P1 canned |
| — | P2 RAG | toggle **badge only** | không runtime RAG P1 |
| disclaimer | Hint | * | «AI hỗ trợ — kiểm tra nghiệp vụ» |

## 3. Field inventory — Design chốt controlHint

### List filters / columns

| uiField | Label VN | Control | Required | Notes |
|---------|----------|---------|----------|-------|
| search | Tìm kiếm | `SearchTextInput` | | mã · tiêu đề |
| status (filter) | Trạng thái | `SearchInput` | | enum · **cấm** Select |
| checkAll | Chọn tất cả | `Checkbox` | | 24×24 · không persist |
| code | Mã phiên | `Text` readonly IdCode | auto | `SES-YYYYMMDD-NNNN` |
| title | Tiêu đề | `Text` | | rename Z1 |
| status | Trạng thái | display badge | | active / archived |
| messageCount | Số tin | `Text` (number) | | readonly |
| lastMessageAt | Last message | `Date` datetime | | local display |
| createdAt | Tạo lúc | `Date` | | optional column |
| rateRemaining | Rate còn | badge Zone A | | 10/min |

### Chat drawer

| uiField | Label VN | Control | Required | Notes |
|---------|----------|---------|----------|-------|
| draft / message | Câu hỏi NL | `Text` textarea | * gửi | **cấm** Input readOnly |
| locale | Locale | `SearchInput` | | vi / en |
| model | Engine | badge + toggle | | gpt-4o-mini default · gpt-4o · rag-p2 badge |
| role | Role | badge | | user / assistant / system |
| content | Nội dung | markdown display | | |
| tokens | Tokens | `Text` (number) | | LabelMoney INT_IN |
| citations[] | Citations | chip / Tag | | toast |
| chart | Chart JSON | preview card | | stub |
| feedback | Thumb | enum up/down | | POST feedback |
| feedbackNote | Ghi chú thumb down | `Text` modal | | IN P1 |
| promptChip | Prompt gợi ý | Chip ×5 | | |
| disclaimer | Disclaimer | Hint | * | |

### Enum values (P1) — Design chốt

**status** (filter · P1 enum tĩnh OK · optional `GET …/sessions/init-data` — SA)

| value | Label |
|-------|--------|
| *(empty)* | Tất cả |
| `active` | Đang dùng |
| `archived` | Lưu trữ |

**locale**

| value | Label |
|-------|--------|
| `vi` | Tiếng Việt |
| `en` | English |

### CSS / layout gates

| Rule | Gap |
|------|-----|
| 1× LinPageLayout · **cấm** nested CatalogListShell | list-form quality |
| SearchInput status/locale — **cấm** native Select | GAP-PO-COP-01 · 02 |
| LeaveConfirm / useAlert — **cấm** `window.confirm` | GAP-PO-COP-03 |
| Form scaffold OUT · chat = Kind D | GAP-PO-COP-04 |
| Thumb-down note modal | GAP-PO-COP-05 |
| Title rename Z1 | GAP-PO-COP-06 |
| Input pad 6×10 · min-height 32 · focus shadow | T-UI-UX |
| Spacing 4/8/16 · **cấm** `filterMaxWidth` | T-UI-UX |
| Checkbox 24×24 · cột STT/□ 48px | T-UI-UX |

## 4. Chat Kind D wire

```
[Z1] [Đóng]  SES-* readonly · [title Text]  [Xuất]  badge engine
[Z2] chips ×5
     bubbles (user/assistant) · citations · chart stub · thumbs · copy
[Z3] TextArea draft
     SearchInput locale | [Gửi] [Escalate 4o] [P2 RAG badge]
     Hint «AI hỗ trợ — kiểm tra nghiệp vụ»
```

- Dirty composer: Đóng / FAB khác / đổi phiên → LeaveConfirmModal
- Xóa phiên: useAlert — **cấm** `window.confirm`

## Prototype (REQUIRED)

| | |
|--|--|
| Artifact | `ui/prototype/copilot-list-prototype.html` |
| Zones | **A–D** content-only + Kind D drawer Z1–Z3 · **skip** note/sidebar/menu/chrome demo |
| Lookups | SearchInput combo mock status + locale — **không** `<select>` |
| Extra | LeaveConfirm · feedback note · title rename · FAB |
| SSOT | `list-shell-prototype.md` · `erp-control-icon-map` |
| **reviewUrl** | `file:///D:/AI-QLBD/Linm.RMMS.Data/specs/copilot/ui/prototype/copilot-list-prototype.html` |

### List wire

```
[A] fa-comments + «AI Copilot» · badges AI · P1 · P2 · rate n/10
[B] SearchTextInput · status SearchInput · Làm mới · Lịch sử · fa-cog · Xem · Xóa | [+ Phiên mới]
[C] «Danh sách phiên hội thoại» · LinCatalogDataGrid mock · ⋯ menu
[D] Tổng · Hiển thị [50|100|200|500] · pager FA
[FAB] Mở Copilot
[Drawer] Z1–Z3
```

## 5. Map / AI / report (out of pack)

- Azure OpenAI live / `Linm.AiService` (GAP-PO-COP-08)
- RAG Qdrant on-prem / embedding (GAP-PO-COP-07)
- SQL tool whitelist live (GAP-PO-COP-09)
- Token budget dashboard ~$200/tháng (GAP-PO-COP-10)
- Mobile P1 · clone chrome demo · Reset seed MFE
- Full-page CRUD `CopilotFormPage`
- Invent SearchInput master road-route/asset-type trên filter P1

## 6. Open questions (PO closed — Design không re-open)

GAP-PO-COP-01..14 giữ nguyên. SA map `sessions` / `chat` / `feedback` · optional init-data · PATCH title nếu cần · **cấm ERP.*** · **cấm** `api/v1/rmms/*` · **cấm** parent JSON. Apply `Schema_RmmsCopilotSessions` = ops (không block Design).

## Confirm

`design_confirm` = **pending** — `autoApprove=OFF` (`task_76a85b90`) · **user Approve board** · **cấm** agent tự confirm · SA **pending** đến khi Approve.

## Handoff → SA (sau Approve)

| Field | Value |
|-------|-------|
| Kind / pattern | B catalog A–D + Kind D `CopilotChatDrawer` · **không** full-page form |
| Field inventory | §3 · SearchInput status/locale · TextArea draft · title rename |
| Filters | search · status → page=1 |
| Prototype · reviewUrl | § Prototype |
| API prefer | `GET/POST/DELETE api/v1/copilot/sessions` · `POST …/chat` · `POST …/feedback` · `POST …/sessions/{id}/archive` · optional `GET …/sessions/init-data` · optional `PATCH …/sessions/{id}` title · BFF `web-bff/api/v1/copilot/**` |
| Lookups (SA chốt) | enum tĩnh P1 OK · init-data optional |
| Entity | `CopilotSession` · `CopilotMessage` · `CopilotFeedback` · SHARE=`tenant_keep` · **cấm** parent JSON |
| Seed | IdCode `SES-YYYYMMDD-NNNN` |
| Next | SA **pending** đến user Approve Design |

## DES-GRID map → Lin\*

| Zone | DES-GRID | Component |
|------|----------|-----------|
| A | DES-GRID-A | `LinPageLayout` header |
| B | DES-GRID-B | `catalogToolbar` + SearchTextInput + SearchInput status |
| C | DES-GRID-C | `LinCatalogDataGrid` + resize ON |
| D | DES-GRID-D | `LinCatalogListPagination` |
| Drawer | Kind D | `CopilotChatDrawer` Z1–Z3 · LeaveConfirmModal |

## Version meta (REQUIRED)

| Field | Value |
|-------|-------|
| skillId | agent-design |
| skillVersion | 2026.08.15.5 |
| schemaVersion | 2 |
| workflowVersion | 2026.08.15.5 |
| rulesVersion | 2026.08.15.8 |
| generatedAt | 2026-08-15T13:28:00.000Z |
| versionGate | rechecked |
| version_mismatch_action | recheck_new (STATUS) |
| contentHashPriorPo | sha256:task_b10efe7f |
| contentHashPriorDataAnaly | sha256:f2466aa9004e0ca38e0db5549eb8e8c2d9a1a874efc83bcbfab0f7e4b737d805 |
| orchestratorSkillVersion | 2026.08.15.5 |
| orchestratorWorkflowVersion | 2026.08.15.5 |
| orchestratorRulesVersion | 2026.08.15.8 |
| dataAnalySkillVersion | 2026.08.15.5 |
| poSkillVersion | 2026.08.15.5 |

---
<!-- Version meta: skillVersion=2026.08.15.5 · schemaVersion=2 · workflowVersion=2026.08.15.5 · rulesVersion=2026.08.15.8 · versionGate=rechecked -->
