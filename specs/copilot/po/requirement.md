# PO — copilot (AI Copilot)

| Field | Value |
|-------|-------|
| feature | `copilot` |
| changeScope | `edit_page` |
| packKind | `ai` |
| Feature Kind | **B** session catalog + **D** drawer chat |
| status | `confirmed` (autopilot · task_8f6fe9b7) |
| skillVersion | `2026.08.10.3` |
| schemaVersion | `qldb-workflow-skill-v1` |
| workflowVersion | `2026.08.10.3` |
| versionGate | `ok` |
| updatedAt | `2026-08-15T13:05:00.000Z` |

## 1. Goal

Align MFE **AI Copilot** với demo Kind D drawer + session list Kind B nhẹ: hỏi NL điều hành, suggested prompts, citations, chart stub, thumb feedback, rate limit 10/min, disclaimer. BE **chỉ** `Linm.RMMS.WebService` domain Copilot (`api/v1/copilot`). Engine P1 stub **gpt-4o-mini** (+ escalate GPT-4o) · **không** hứa RAG local P1.

## 2. Current → New (edit_page)

| Layer | Current | New (delta) |
|-------|---------|-------------|
| Demo | Full Kind D drawer + 5 prompts + 3 sessions | SSOT UX giữ nguyên |
| MFE list | Scaffold HTML table + footerPagination | **1** LinPageLayout · LinCatalogDataGrid · LinCatalogListPagination · FAB mở drawer |
| MFE form | Scaffold empty | **Drawer chat** Kind D (Slideout) — không form CRUD generic |
| API client | CRUD `/copilot` scaffold | `sessions` · `chat` · `feedback` · `stats` |
| BE | Health only | Entity session/message/feedback · named migration · BFF proxy · canned P1 replies |

## 3. Personas / DoD

1. List sessions load + **search** (mã/title) + filter status active/archived
2. Toolbar: Phiên mới · Làm mới · history · config · Mở Copilot
3. Row menu: Xem (mở chat) · Lưu trữ · Xóa
4. Drawer: prompts ×5 · composer Enter gửi · escalate 4o · P2 RAG badge (không runtime local)
5. Thumb up/down · copy · citation toast · chart stub khi prompt biểu đồ
6. Rate limit 10/min · disclaimer «AI hỗ trợ — kiểm tra nghiệp vụ»
7. FE `yarn build` + `typecheck` PASS · BE API+BFF `dotnet build` PASS

## 4. CTX / DEM inventory

| Source | Path |
|--------|------|
| Context | `docs/context/features/copilot.md` |
| Control-map | `docs/context/_raw/legacy-govone/demo-maps/copilot-control-map.md` |
| Demo | `Linm.RMMS.Demo/src/demo/copilot/copilot.html` |
| MFE | `Linm.Web.RMMS.Copilot` |
| BE | `Linm.RMMS.WebService` · `api/v1/copilot` |

### List columns

STT · Mã · Title · Status · MessageCount · LastMessageAt · actions

### Chat fields

sessionId · title · user message* · locale · model · assistant content · tokens · citations · chartJson · feedback · rate remaining · disclaimer

## 5. Out of scope

- Azure OpenAI live / Linm.AiService
- RAG Qdrant on-prem (P2)
- Mobile P1
- SQL tool whitelist live (read-only stub text only)

## 6. Handoff → Design

Kind B zones A–D (session list) + Kind D drawer Z1–Z3 · prototype + reviewUrl

---
<!-- Version meta: skillVersion=2026.08.10.3 · schemaVersion=qldb-workflow-skill-v1 · workflowVersion=2026.08.10.3 · versionGate=ok -->
