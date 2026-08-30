# PO — copilot (AI Copilot)

| Field | Value |
|-------|-------|
| feature | `copilot` |
| changeScope | `edit_page` |
| packKind | `list` (packet) · featureClass **`ai`** (STATUS) |
| Feature Kind | **B** session catalog A–D + **D** chat Slideout (`CopilotChatDrawer`) · **không** CRUD form full-page P1 |
| status | `done` |
| requestSource | run packet `task_b10efe7f` · `/agent-qldb-workflow` · roleOnly=`po` · `/agent-po` |
| autoApprove | **OFF** (Design/SA/Review khi tới lượt → `await_confirm` · user Approve board) |
| prior | data-analy **confirmed** · controlHint `specs/_data-analy/features/copilot-control-hint.md` · contentHash `sha256:f2466aa9004e0ca38e0db5549eb8e8c2d9a1a874efc83bcbfab0f7e4b737d805` · cluster `specs/copilot/specs/_data-analy/clusters/copilot.md` **không tồn tại** — SSOT = feature controlHint · **no Excel** · sourceKind=`synthetic` |
| updatedAt | `2026-08-15T13:22:00.000Z` |
| taskId | `task_b10efe7f` |

## 1. Goal

Chỉnh trang **AI Copilot**: Kind **B** catalog phiên hội thoại (zones A–D) + Kind **D** drawer chat (Z1–Z3). Hỏi NL điều hành · 5 prompt gợi ý · citations · chart stub · thumb feedback · rate 10/min · disclaimer. Align demo → MFE `Linm.Web.RMMS.Copilot` `/copilot` · BE `Linm.RMMS.WebService` domain **Copilot** · `api/v1/copilot`. Engine P1 canned **gpt-4o-mini** (+ escalate GPT-4o badge) · **không** hứa RAG local P1.

Persona: Lãnh đạo · điều hành · BA (Web only).

Chat Kind D Slideout **là** surface sản phẩm — **không** ép Resource / View=`readOnly` Input / full-page CRUD form. `CopilotFormPage` scaffold **OUT P1**.

**Cấm ERP.*** · **cấm** `api/v1/rmms/*` · **cấm** parent JSON.

## 2. Current → New (edit_page)

| Layer | Current | New (delta) |
|-------|---------|-------------|
| Demo | Host FAB + Kind D drawer · 5 prompts · ≥3 sessions · citations · chart stub | Giữ visual SSOT; pack **không** clone chrome / user menu / Reset seed |
| MFE list | Kind B `/copilot` · `CopilotListPage` · search + **Select** status (GAP) | 1× `LinPageLayout` · Zone A–D · `LinCatalogDataGrid` kéo cột default ON · footer `LinCatalogListPagination` — **cấm** nested CatalogListShell · footerPagination · pageSizeBar · raw table · status = **SearchInput** |
| MFE chat | `CopilotChatDrawer` Kind D · locale **Select** · `window.confirm` | Z1–Z3 · locale **SearchInput** · leave-confirm `LeaveConfirmModal` / `useAlert` · title rename Z1 · thumb-down **note** modal |
| MFE form | `CopilotFormPage` `/copilot/new` `/:id` scaffold + Quay lại | **OUT P1** — ẩn route hoặc redirect list · chat không phải form CRUD |
| FAB | Mở Copilot | **IN** — phiên đang chọn hoặc tạo phiên mới |
| API | `sessions` · `chat` · `feedback` · `stats` **DONE** | Giữ · init-data **optional** (enum tĩnh P1 OK) · **không** parent JSON |
| BE | `Linm.RMMS.WebService` · Copilot · `Schema_RmmsCopilotSessions` | SHARE=`tenant_keep` · **cấm ERP.*** · apply migration = ops (không block PO) |

## 3. DoD (đo được)

1. List load + **search work** (mã SES-* · tiêu đề) — page=1 khi filter đổi.
2. Zone A: title «AI Copilot» · badge AI support · P1 gpt-4o-mini · P2 RAG on-prem (không hứa local) · rate `n/10` — **cấm** Thêm mới / Phiên mới trên A.
3. Zone B: SearchTextInput · SearchInput trạng thái (active/archived/tất cả) · **Phiên mới primary trên B** · Làm mới · History · config · View/Delete khi có dòng — **cấm** native Select.
4. Zone C: grid STT · □ · Mã · Tiêu đề · Status · Số tin · Last message · actions; row menu **Xem (mở chat) · Lịch sử · Lưu trữ · Xóa**; double-click → Kind D.
5. Zone D: `LinCatalogListPagination` pageSize **50 / 100 / 200 / 500**.
6. FAB «Mở Copilot» mở drawer phiên chọn / tạo mới.
7. Drawer Z1: Đóng · mã SES-* readonly · tiêu đề **Text rename** · Xuất JSON stub · engine badge.
8. Drawer Z2: prompt chips **×5** từ **BE** `GET /copilot/prompts` (không hardcode FE) · bubbles UTF-8 VN (không mojibake / không chữ `(P1 stub)`) · citations chip toast · chart stub.
9. Drawer Z3: TextArea draft · SearchInput locale vi/en · Gửi (Enter; Shift+Enter newline) · Escalate 4o · P2 RAG toggle **badge only** · disclaimer «AI hỗ trợ — kiểm tra nghiệp vụ».
10. Thumb up/down · down + **note modal** · copy clipboard toast.
11. Dirty composer: leave-confirm Lin SSOT — **cấm** `window.confirm`. Xóa phiên: `useAlert` / confirm modal — **cấm** `window.confirm`.
12. Rate limit 10/min (badge remaining).
13. FE `yarn build` (+ typecheck nếu có) PASS · BE `dotnet build` PASS khi đụng API — Dev ghi implement § Build.
14. Live shell: title + toolbar + grid/empty **không** blank/title-clip.

## 4. CTX / DEM / DI inventory

| ID | Path | Loại |
|----|------|------|
| CTX-01 | `docs/context/features/copilot.md` | feature |
| CTX-02 | `docs/context/_raw/legacy-govone/demo-maps/copilot-control-map.md` | control-map (locale/status Select = **stale** vs data-analy SearchInput) |
| CTX-03 | `docs/context/_raw/legacy-govone/demo-maps/copilot-actions.md` | actions |
| DEM-01 | `Linm.RMMS.Demo/src/demo/features/copilot-demo.html` | demo entry |
| DEM-02 | `Linm.RMMS.Demo/src/demo/copilot/copilot.html` + `js/copilot-app.js` + `js/copilot-data.js` | page + seed |
| DI-01 | — | **no Excel cluster** |
| DI-02 | `specs/_data-analy/features/copilot-control-hint.md` | controlHint SSOT |
| MFE | `Linm.Web.RMMS.Copilot` `/copilot` · `http://localhost:9310/copilot` | UI |
| BE | `D:/AI-QLBD/Linm.RMMS.WebService` · DOMAIN-MAP Copilot · `api/v1/copilot` | API |

## 5. controlHint (PO chốt từ data-analy — Design map UI · SA map API)

### List filters (Zone B)

| Field key | Label | controlHint | catalogKind |
|-----------|-------|-------------|-------------|
| search | Tìm kiếm | `SearchTextInput` | text (mã SES-* · tiêu đề) |
| status | Trạng thái | `SearchInput` | enum active / archived / (trống=tất cả) — **cấm** native Select |
| checkAll | Chọn tất cả | `Checkbox` | grid selection — không persist |

### Session columns / meta (Kind B)

| Field key | Label | controlHint | required |
|-----------|-------|-------------|----------|
| code | Mã phiên | `Text` readonly IdCode `SES-YYYYMMDD-NNNN` | auto |
| title | Tiêu đề | `Text` | rename Z1 |
| status | Trạng thái | `SearchInput` enum | |
| messageCount | Số tin | `Text` (number) readonly | |
| lastMessageAt | Last message | `Date` datetime | |
| createdAt | Tạo lúc | `Date` readonly | |
| userId | User | — | server · không filter P1 |
| rateRemaining | Rate còn | badge | 10/min · Zone A |

### Chat drawer (Kind D · **IN** P1)

| Field key | Label | controlHint | required |
|-----------|-------|-------------|----------|
| draft / message | Câu hỏi NL | `Text` (textarea) | * gửi |
| locale | Locale | `SearchInput` | enum vi/en — **cấm** Select |
| model | Engine | badge + toggle | gpt-4o-mini default · escalate gpt-4o · P2 rag-p2 **badge only** |
| role | Role | badge | user / assistant / system |
| content | Nội dung | markdown display | **cấm** Input `readOnly` giả form |
| tokens | Tokens | `Text` (number) | LabelMoney INT_IN |
| citations[] | Citations | chip / Tag | toast + stub Incident/Asset/Report |
| chart | Chart JSON | preview card | ECharts stub · không lib bắt buộc |
| feedback | Thumb | enum up/down | POST feedback |
| feedbackNote | Ghi chú thumb down | `Text` | modal **IN P1** |
| promptChip | Prompt gợi ý | Chip ×5 | inject + send |
| disclaimer | Disclaimer | Hint | * «AI hỗ trợ — kiểm tra nghiệp vụ» |

## 6. Open questions — PO chốt (UNCLEAR / GAP data-analy)

| ID | Question | Decision (PO) |
|----|----------|----------------|
| GAP-PO-COP-01 · GAP-DA-COP-SELECT-STATUS | List status = native `Select` | **IN P1:** `SearchInput` enum. **Cấm** Select. Design control-map + Dev T-UI-LKP / T-UI-FIELD. |
| GAP-PO-COP-02 · GAP-DA-COP-SELECT-LOCALE | Drawer locale = `Select` (control-map cũ cũng Select) | **IN P1:** `SearchInput` vi/en. Control-map demo **stale** — SSOT = data-analy + PO. |
| GAP-PO-COP-03 · GAP-DA-COP-ALERT | `window.confirm` xóa phiên + đóng drawer dirty | **IN P1:** `LeaveConfirmModal` / `useAlert`. **Cấm** `window.confirm`. T-UI-UX · T-UI-LEAVE. |
| GAP-PO-COP-04 · GAP-DA-COP-FORM-SCAFFOLD | `CopilotFormPage` scaffold | **OUT P1.** Ẩn route `/copilot/new` `/:id` hoặc redirect list. **Không** phát CRUD form. Chat = Kind D Slideout **IN**. |
| GAP-PO-COP-05 · GAP-DA-COP-FEEDBACK-NOTE | Thumb down không modal note | **IN P1** (demo có). POST `feedback` + note optional. |
| GAP-PO-COP-06 · GAP-DA-COP-TITLE-RENAME | Create title cố định «Phiên mới» | **IN P1:** Text rename trên Z1 (optional persist PATCH/PUT title nếu SA có; không thì client+POST create title). |
| GAP-PO-COP-07 · GAP-F-COP-01 | RAG on-prem / Qdrant | **P2** — badge only P1. **Không** hứa local. |
| GAP-PO-COP-08 · Azure OpenAI live | Live engine vs canned | **P2** khi AiService sẵn sàng. P1 canned replies. |
| GAP-PO-COP-09 · GAP-F-COP-02 | SQL tool whitelist | **P2** — P1 stub text / read-only adapters only. |
| GAP-PO-COP-10 · GAP-F-COP-03 | Token budget ~$200/tháng | **Ops P2** — không UI budget P1 (tokens/message display OK). |
| GAP-PO-COP-11 · GAP-F-COP-MIG | Apply `Schema_RmmsCopilotSessions` | **Ops P0** — không block PO artifact. SA/Dev ghi apply DB. |
| GAP-PO-COP-12 | init-data statuses/locales | **P1 enum tĩnh OK.** Optional `GET …/sessions/init-data` — SA quyết, không bắt buộc block list. |
| GAP-PO-COP-13 | parent JSON / ERP path | **Cấm** parent JSON. **Cấm** `ERP.*` · `api/v1/rmms/*`. BE = `D:/AI-QLBD/Linm.RMMS.WebService`. |
| GAP-PO-COP-14 | Mobile / chrome demo | **SKIP** Mobile P1 · logo · hamburger · Hồ sơ/Đăng xuất · Ban.TK · Reset seed MFE. |

## 7. Grid AC (REQUIRED · list)

| ID | AC |
|----|-----|
| AC-G-01 | Zones **A Header · B Toolbar · C Grid · D Pagination** |
| AC-G-02 | Search + status apply → page=1 |
| AC-G-03 | Row menu Xem (mở chat) / Lịch sử / Lưu trữ / Xóa |
| AC-G-04 | `LinCatalogDataGrid` + kéo cột default ON |
| AC-G-05 | Footer `LinCatalogListPagination` 50/100/200/500 |
| AC-G-06 | 1× `LinPageLayout` — **cấm** nested CatalogListShell |
| AC-G-07 | Flex + skeleton load — **cấm** blank body |
| AC-G-08 | FAB mở Kind D — **không** nested list shell trong drawer |

## 8. Out of scope (this pack)

- Azure OpenAI live / `Linm.AiService`
- RAG Qdrant on-prem / embedding (GAP-F-COP-01)
- Mobile P1
- SQL tool whitelist live (GAP-F-COP-02)
- Excel import sessions
- Clone chrome demo · Reset seed trên MFE
- Full-page CRUD form phiên (`CopilotFormPage`)
- Token budget dashboard ~$200/tháng
- Invent lookup master road-route/asset-type trên filter P1 (NL free text trong chat)

## 9. Handoff → Design

| Field | Value |
|-------|-------|
| Kind | B catalog list A–D + Kind D drawer Z1–Z3 (**không** full-page form) |
| Prototype | content-only zones A–D + drawer content · `list-shell-prototype.md` · **skip** note/sidebar/menu/chrome demo |
| reviewUrl | bắt buộc · `autoApprove=OFF` → **await_confirm** (user Approve board) |
| controlHint | bảng §5 — **không** Select status/locale · **không** CRUD form · **không** `window.confirm` |
| Demo visual | `copilot-demo.html` → `copilot/copilot.html` |
| BE | `api/v1/copilot` · sessions/chat/feedback · **cấm** `api/v1/rmms/*` |
| Next roles | design → sa → team-lead → dev → qa → review = **pending** đến lượt |

## Version meta (REQUIRED)

| Field | Value |
|-------|-------|
| skillId | agent-po |
| skillVersion | 2026.08.15.5 |
| schemaVersion | 2 |
| workflowVersion | 2026.08.15.5 |
| rulesVersion | 2026.08.15.8 |
| generatedAt | 2026-08-15T13:22:00.000Z |
| versionGate | rechecked |
| version_mismatch_action | recheck_new (STATUS) |
| contentHashPriorDataAnaly | sha256:f2466aa9004e0ca38e0db5549eb8e8c2d9a1a874efc83bcbfab0f7e4b737d805 |
| orchestratorSkillVersion | 2026.08.15.5 |
| orchestratorWorkflowVersion | 2026.08.15.5 |
| orchestratorRulesVersion | 2026.08.15.8 |
| dataAnalySkillVersion | 2026.08.15.5 |
| dataAnalyWorkflowVersion | 2026.08.15.5 |
| dataAnalyRulesVersion | 2026.08.15.8 |

---
<!-- Version meta: skillVersion=2026.08.15.5 · schemaVersion=2 · workflowVersion=2026.08.15.5 · rulesVersion=2026.08.15.8 · versionGate=rechecked -->
