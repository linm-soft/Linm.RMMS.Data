# Data-analy — controlHint — copilot (Kind B session catalog + Kind D chat)

| Field | Value |
|-------|-------|
| feature | `copilot` |
| packKind | `list` (packet) · featureClass `ai` · STATUS `packKind=ai` |
| mode | `feature_context` (retry `roleOnly=data_analy` · **no Excel** · context + demo + live MFE) |
| status | `done` |
| skillId | `agent-data-analy` |
| skillVersion | `2026.08.15.5` |
| schemaVersion | `1` |
| workflowVersion | `2026.08.15.5` |
| rulesVersion | `2026.08.15.8` |
| versionGate | `rechecked` |
| contentHash | `sha256:f2466aa9004e0ca38e0db5549eb8e8c2d9a1a874efc83bcbfab0f7e4b737d805` |
| headerFingerprint | `sha256:599d90aed12fb39f3efbad5f533ac3d897f5173f493767f4bbb50500382e60dc` |
| analyzedAt | `2026-08-15T13:30:00.000Z` |
| cluster | — (không Excel · sourceKind=synthetic) |
| taskId | `task_46a9e2c3` |
| autoApprove | `OFF` |

> Data-analy **đề xuất** controlHint. Design **chốt** control-map. SA **chốt** lookup API.  
> **Cấm** Dev đoán Text vs SearchInput khi đã có bảng này.  
> **Cấm ERP.*** · domain **Copilot** · BE `D:/AI-QLBD/Linm.RMMS.WebService` · prefix `api/v1/copilot`.  
> Chat **Kind D** (Slideout) là surface sản phẩm — **không** ép CRUD form Resource/`readOnly` cho composer.  
> Session catalog **Kind B** list pack — **cấm** nested CatalogListShell · footer **LinCatalogListPagination**.

## Sources

| Source | Path | sha256 |
|--------|------|--------|
| Context | `docs/context/features/copilot.md` | `f2466aa9004e0ca38e0db5549eb8e8c2d9a1a874efc83bcbfab0f7e4b737d805` |
| Control map | `docs/context/_raw/legacy-govone/demo-maps/copilot-control-map.md` | `9a95e4e216084ab338a8d565d5c0169b60733ae201d53cef49bc1944ebdcc183` |
| Actions | `docs/context/_raw/legacy-govone/demo-maps/copilot-actions.md` | `cf41ea51d9c810c8f31dbe1251371d4fa37427fda3530940cc3cdb5148e56275` |
| Demo entry | `Linm.RMMS.Demo/src/demo/features/copilot-demo.html` | `0c6b206b6849b3a32c967f81480ab051ee72e3275fe0ae2b0b0bc377387ba1f3` |
| Demo page | `Linm.RMMS.Demo/src/demo/copilot/copilot.html` | `85bb3fba5aa9ab89f0a3bdc1867062ff34cb57730a1a98cece7f81ce1c80f5f4` |
| Demo app | `Linm.RMMS.Demo/src/demo/copilot/js/copilot-app.js` | `db225c5819f2841caa6218123fe2769a37b6a6acf60271c58a87c7523510d715` |
| Demo data | `Linm.RMMS.Demo/src/demo/copilot/js/copilot-data.js` | `680c9df09ea88dfe52110c9678e48e457beb4e0e98961fd73455b936a52d94c3` |
| MFE live (read) | `Linm.Web.RMMS.Copilot` · `/copilot` · `CopilotListPage` + `CopilotChatDrawer` · `CopilotFormPage` scaffold | Kind B list + Kind D Slideout |
| Prior design.md | `specs/copilot/ui/design.md` | B+D · list SearchTextInput + **Dropdown** status |

Normalized header (no Excel):

`code|title|status|messageCount|lastMessageAt|createdAt|userId|sessionId|message|locale|model|role|content|tokens|citations|chartJson|feedback|rateRemaining|disclaimer|promptChip|draft`

## Kind / zones (handoff Design)

Pack **list** = Kind **B** session catalog + Kind **D** chat drawer (context + demo + live). Demo HTML = host FAB + drawer — **không** clone chrome/topnav/user menu vào MFE.

List-form quality: Kind B **không** dùng Slideout làm CRUD form phiên. Chat composer **là** Kind D Slideout (SSOT product) — **IN**. `CopilotFormPage` scaffold «Tạo mới / Chi tiết» + top **Quay lại** = **không** surface P1 — **GAP**.

| Zone | Pattern | DoD |
|------|---------|-----|
| A | Header | title «AI Copilot» · badge AI support · P1 gpt-4o-mini · P2 RAG on-prem (không hứa local P1) · rate `n/10` — **cấm** Thêm mới trên A |
| B | Toolbar + filter | SearchTextInput (mã/tiêu đề) · SearchInput trạng thái · Phiên mới primary · Refresh · History · config · View/Delete khi có dòng · **search must work** |
| C | `LinCatalogDataGrid` | kéo cột default ON · STT · □ · Mã · Tiêu đề · Status · Tin · Last message · row menu Xem (mở chat) / Lịch sử / Lưu trữ / Xóa |
| D | Footer | `LinCatalogListPagination` 50/100/200/500 — **cấm** footerPagination / pageSizeBar / raw table |
| FAB | Host | «Mở Copilot» — mở drawer phiên đang chọn hoặc tạo phiên mới |
| Drawer Z1 | Kind D toolbar | Đóng · mã SES-* readonly · tiêu đề · Xuất · engine badge · (demo: lưu trữ/xóa/phiên mới trong list toolbar) |
| Drawer Z2 | Messages | prompt chips ×5 · bubbles role/content/tokens · citations chip · chart stub |
| Drawer Z3 | Composer | TextArea draft · SearchInput locale · Gửi · Escalate 4o · P2 RAG toggle · disclaimer |
| Form full-page `/copilot/new` `/:id` | scaffold | **OUT P1** — chat không phải form CRUD catalog |

**Skip chrome:** logo · hamburger · user Hồ sơ/Đăng xuất · Ban.TK · govone · Mobile P1.

## Control hint — list filters (Zone B · list pack)

| Field key | Label | controlHint | catalogKind | Notes |
|-----------|-------|-------------|-------------|-------|
| search | Tìm kiếm | `SearchTextInput` | text | mã SES-* · tiêu đề — live OK |
| status | Trạng thái | `SearchInput` | enum | active / archived / (trống=tất cả) · **cấm** native Select — live = **Select** — GAP |
| checkAll | Chọn tất cả | `Checkbox` | bool | grid selection SSOT |

## Control hint — session columns / meta (Kind B)

| Field key | Label | controlHint | required | Notes |
|-----------|-------|-------------|----------|-------|
| code | Mã phiên | `Text` | auto | IdCode `SES-YYYYMMDD-NNNN` readonly display |
| title | Tiêu đề | `Text` | | rename optional · live create default «Phiên mới» |
| status | Trạng thái | `SearchInput` | | enum active/archived |
| messageCount | Số tin | `Text` (number) | | Qty display · readonly |
| lastMessageAt | Last message | `Date` | | datetime local display / ISO store |
| createdAt | Tạo lúc | `Date` | | readonly View/list |
| userId | User | — | | server · không filter P1 |
| rateRemaining | Rate còn | badge | | 10/min · header list |

## Control hint — chat drawer (Kind D · **IN** P1)

| Field key | Label | controlHint | required | Notes |
|-----------|-------|-------------|----------|-------|
| draft / message | Câu hỏi NL | `Text` (textarea) | * gửi | Enter gửi · Shift+Enter newline · leave-confirm dirty |
| locale | Locale | `SearchInput` | | enum vi/en · **cấm** Select — live = **Select** — GAP |
| model | Engine | badge + toggle | | gpt-4o-mini default · escalate gpt-4o · P2 rag-p2 badge **không** runtime RAG P1 |
| role | Role | badge | | user / assistant / system · display |
| content | Nội dung | markdown display | | **cấm** Input `readOnly` giả form |
| tokens | Tokens | `Text` (number) | | LabelMoney INT_IN display |
| citations[] | Citations | chip / Tag | | toast + domain stub Incident/Asset/Report |
| chart | Chart JSON | preview card | | ECharts stub · không lib bắt buộc |
| feedback | Thumb | enum up/down | | POST feedback · down + **note** modal demo |
| promptChip | Prompt gợi ý | Chip | | 5 NL queries · inject + send |
| disclaimer | Disclaimer | Hint | * | «AI hỗ trợ — kiểm tra nghiệp vụ» |
| feedbackNote | Ghi chú thumb down | `Text` | | modal · live **chưa** — GAP |

## Control hint — out of list-pack / P2 / SKIP

| Field key | Label | controlHint | Notes |
|-----------|-------|-------------|-------|
| RAG Qdrant / embedding | P2 | — | GAP-F-COP-01 · badge only P1 |
| Azure OpenAI live | P2 | — | canned P1 · GAP live engine |
| SQL tool whitelist | P2 | — | GAP-F-COP-02 read-only adapters |
| Excel import | — | — | **out of scope** |
| road-route / asset-type | NL free text | không filter master P1 | prompts nhắc tuyến — **không** SearchInput filter trừ Design tách |
| user-menu / home | chrome | SKIP | |

## Lookup APIs (đề xuất SA — live **DONE** trừ ghi chú)

Domain **Copilot** · prefix `api/v1/copilot` · BFF `web-bff/api/v1/copilot` · repo `D:/AI-QLBD/Linm.RMMS.WebService` · **cấm ERP.*** · **cấm** `api/v1/rmms/*` · **cấm** parent JSON.

| Lookup | API | controlHint consumer | BE |
|--------|-----|----------------------|-----|
| list sessions | `GET /api/v1/copilot/sessions?search=&status=&page=&pageSize=` | Zone B + grid | **DONE** |
| by id | `GET /api/v1/copilot/sessions/{id}` | drawer load · XCO GET | **DONE** |
| create | `POST /api/v1/copilot/sessions` | Phiên mới | **DONE** |
| archive | `POST …/sessions/{id}/archive` (hoặc PUT status) | row Lưu trữ | **DONE** live |
| delete | `DELETE …/sessions/{id}` | toolbar/row | **DONE** |
| chat | `POST /api/v1/copilot/chat` | composer Gửi · rate 10/min | **DONE** canned |
| feedback | `POST /api/v1/copilot/feedback` | thumb | **DONE** (note optional) |
| stats | `GET /api/v1/copilot/stats` | optional KPI | **DONE** client |
| init-data | `GET …/sessions/init-data` | statuses · locales | **MISSING** đề xuất · P1 enum tĩnh OK |
| Azure / RAG | — | | **P2** |

Entity: `CopilotSession` · `CopilotMessage` · `CopilotFeedback` · `Schema_RmmsCopilotSessions` · TenantEntity · SHARE=tenant_keep.  
Perms: `copilot.sessions.read|create|update|delete` (align live `copilotListPermissions`).  
Apply migration on DB vẫn **open** (STATUS blockers).

## Seed / mock

- Demo: ≥3 hội thoại · ≥5 prompt · citations · 1 chart stub · disclaimer
- MFE: local/BFF sessions · canned replies P1 · FAB
- Import Excel **out of scope**
- Shared CUC2 catalogs: **không** map cột Copilot (NL free)

## Actions (list pack P1 vs demo)

| id | label | list pack P1 | Notes |
|----|-------|--------------|-------|
| open-fab | Mở Copilot | **IN** | FAB |
| close-drawer | Đóng | **IN** | leave-confirm **LeaveConfirmModal** — live `window.confirm` — GAP |
| create | Phiên mới | **IN** | toolbar primary |
| refresh | Làm mới | **IN** | |
| filter / search | Lọc / Tìm | **IN** | Zone B |
| view | Xem / mở chat | **IN** | row + double-click → Kind D |
| archive | Lưu trữ | **IN** | row menu |
| delete | Xóa phiên | **IN** | **cấm** `window.confirm` — live GAP |
| history | Lịch sử | **IN** | `LinCatalogHistoryModal` live |
| config | Cấu hình lưới | hint | live stub dialog |
| send | Gửi | **IN** | composer |
| prompt-chip ×5 | Prompt gợi ý | **IN** | |
| feedback-up / down | Thumb | **IN** | down + note modal demo |
| copy | Copy trả lời | **IN** | clipboard toast |
| export | Xuất hội thoại | **IN** | JSON stub P1 |
| escalate | Escalate GPT-4o | **IN** | badge |
| p2-rag | Chuyển P2 RAG | **IN** | badge only |
| citation | Xem citation | **IN** | toast |
| chart | Sinh biểu đồ | stub | message card |
| reset-seed | Reset seed | demo | **SKIP** MFE |
| save / cancel form page | CRUD form | **OUT** | scaffold |
| user-profile / logout | chrome | **SKIP** | |

## GAP (data-analy → PO/Design/SA/TL)

| ID | Gap | Severity | Hướng |
|----|-----|----------|-------|
| GAP-DA-COP-SELECT-STATUS | List status = `Select`; SSOT = `SearchInput` enum | P0 list | T-UI-LKP · T-UI-FIELD |
| GAP-DA-COP-SELECT-LOCALE | Drawer locale = `Select`; SSOT = `SearchInput` | P1 | T-UI-LKP |
| GAP-DA-COP-ALERT | `window.confirm` xóa phiên + đóng drawer dirty | P0 UX | T-UI-UX · T-UI-LEAVE · `LeaveConfirmModal` / `useAlert` |
| GAP-DA-COP-FORM-SCAFFOLD | `CopilotFormPage` scaffold + top Quay lại; chat = Kind D | P1 docs/UI | **không** phát triển CRUD form P1 · ẩn route hoặc redirect list |
| GAP-DA-COP-FEEDBACK-NOTE | Thumb down không modal note (demo có) | P2 | T-UI-ACT |
| GAP-DA-COP-TITLE-RENAME | Control-map title Text rename; live create «Phiên mới» cố định | P2 | Design Z1 |
| GAP-F-COP-01 | RAG on-prem | P2 | badge only |
| GAP-F-COP-02 | SQL tool whitelist | P2 | |
| GAP-F-COP-03 | Token budget ~$200/tháng | ops | |
| GAP-F-COP-MIG | Apply `Schema_RmmsCopilotSessions` on DB | P0 ops | SA/Dev ops note |

## Handoff

→ **PO:** Kind B list sessions + Kind D chat · inventory bảng trên · Q UNCLEAR Azure live P2 · **không** Excel · **không** clone chrome · **không** ép full-page form CRUD  
→ **Design:** A–D + drawer Z1–Z3 + controlHint · **không** Select status/locale · prototype content-only + reviewUrl · `autoApprove=OFF` → **await_confirm** khi tới lượt  
→ **SA:** Copilot `sessions`/`chat`/`feedback` (đã có) · optional init-data · **cấm** `api/v1/rmms/*` · **cấm parent JSON** · **cấm ERP.***  
→ **TL:** T-CTX · T-PERM · T-UI-LIST (A–D) · T-UI-FORM (Kind D chat, **không** Resource) · T-UI-ACT · **T-UI-LKP · T-UI-FIELD · T-UI-PROD · T-UI-UX** · T-UI-LEAVE · T-BE/BFF (delta init-data nếu cần)  
→ **Dev:** sau `confirms.beRepo && uiRepo` · MFE `Linm.Web.RMMS.Copilot` · `/copilot` · `http://localhost:9310/copilot`

Chain: role này **done**. Roles sau = **pending**. `autoApprove=OFF` → Design/SA/Review dừng `await_confirm` khi tới lượt. PO **không** gate confirm → enqueue PO.

## Version meta (REQUIRED)

| Field | Value |
|-------|-------|
| skillId | agent-data-analy |
| skillVersion | 2026.08.15.5 |
| schemaVersion | 1 |
| workflowVersion | 2026.08.15.5 |
| rulesVersion | 2026.08.15.8 |
| generatedAt | 2026-08-15T13:30:00.000Z |
| versionGate | rechecked |
| orchestratorSkillVersion | 2026.08.15.5 |
| orchestratorWorkflowVersion | 2026.08.15.5 |
| orchestratorRulesVersion | 2026.08.15.8 |

---
<!-- Version meta: skillVersion=2026.08.15.5 · schemaVersion=1 · workflowVersion=2026.08.15.5 · rulesVersion=2026.08.15.8 · versionGate=rechecked -->
