# Demo control-map (modern MFE) — `copilot`

> **Rule:** field/action từ product docs · UI theo **`/erp-form-context`** (Linm).  
> Demo HTML mock `Lin*` look · **cấm** copy skin GOVOne · **cấm** BE.  
> **sourceKind:** `synthetic` (product AI · **không** màn GOVOne · Web drawer mới).  
> Sources: `features/copilot.md` · `07` §16 · `08` · `09` · `15-SCREEN-AI-MAP` · RMMS giải pháp #16

## Kind hint

- **D** (catalog/form slideout) — Drawer chat gắn Web shell (mọi trang)
- Bổ trợ: session list strip (Kind B nhẹ) + Spec panel
- Step 2a-K · 2g control-map · leave-confirm khi message nháp · common controls

## Fields (product → Linm)

| Field | type | zone | Control | Linm SSOT |
|-------|------|------|---------|-----------|
| SessionId | text | header | Code readonly | form-code-field · SES-YYYYMMDD-NNNN |
| Session title | text | header | Text | TextField · optional rename |
| User message | text | composer | TextArea | TextField multi · Enter gửi |
| Locale | select | meta | Select | Select · vi/en |
| Model (engine) | text | header | Text readonly | badge P1 4o-mini / escalate 4o · P2 RAG |
| Assistant content | textarea | messages | Text readonly | markdown mock · common-field-control |
| Role | select | messages | Badge | user / assistant / system |
| Tokens used | number | meta | Money/Qty | LabelMoney · INT_IN · audit |
| Citations | list | messages | Tag list | chips link stub Incident/Asset/Report |
| Chart JSON | json | messages | Preview card | ECharts stub · no real chart lib |
| Feedback | enum | messages | Thumb | up / down · POST feedback mock |
| Rate limit remaining | number | header | Badge | 10 req/min · countdown mock |
| Disclaimer | text | footer | Hint | «AI hỗ trợ — kiểm tra nghiệp vụ» |
| Prompt chip | text | prompts | Chip | 3–5 suggested NL queries |
| Status | select | header | Select | active / archived |
| CreatedAt | datetime | meta | Datetime | local display · ISO store mock |
| LastMessageAt | datetime | list | Datetime | CatalogListShell col |
| MessageCount | number | list | Qty | LabelMoney INT_IN |

## Actions / buttons (product → toolbar MFE)

| Label | kind | zone | Demo button | Linm SSOT |
|-------|------|------|-------------|-----------|
| Mở Copilot | open | host FAB | Mở Copilot | Button primary · open drawer |
| Đóng drawer | close | header | Đóng | Slideout close · leave-confirm nháp |
| Phiên mới | create | toolbar | Phiên mới | create session mock |
| Chọn phiên | nav | list | click row | CatalogListShell select |
| Gửi | action | composer | Gửi | primary · mock POST chat |
| Prompt gợi ý | action | prompts | chip ×5 | inject message + auto reply |
| Thumb up | action | message | 👍 | POST feedback mock |
| Thumb down | action | message | 👎 | POST feedback mock + note modal |
| Copy trả lời | action | message | Copy | clipboard mock toast |
| Xuất hội thoại | export | toolbar | Xuất | export-excel stub |
| Xóa phiên | destructive | toolbar | Xóa phiên | confirm modal |
| Lưu trữ phiên | action | toolbar | Lưu trữ | archive status |
| Làm mới lịch sử | action | toolbar | Làm mới | GET sessions mock |
| Chuyển P2 RAG | action | toolbar | Chuyển P2 RAG | engine badge toggle · **không** hứa local P1 |
| Escalate GPT-4o | action | composer | Escalate 4o | model badge · cost note |
| Sinh biểu đồ | action | message | chart CTA | chart card mock |
| Xem citation | nav | message | citation chip | toast + link stub domain |
| Reset seed | action | host | Reset seed | localStorage clear+seed |
| Rate-limit info | action | header | badge click | toast 10 req/min |

## Demo page rules (bắt buộc)

1. **Layout** — Host mock Web shell + Kind D drawer: Z1 toolbar+title+engine · Z2 sessions+messages+prompts · Z3 composer+disclaimer
2. **Fake data** — ≥3 hội thoại mẫu · ≥5 prompt chips · citations · 1 chart stub
3. **Badge** — `AI support` · `P1 online 4o-mini` · `P2 RAG on-prem` · **cấm** hứa RAG local P1
4. **Skip chrome GOVOne** — không logo/bell/user GOVOne skin (Linm modern shell only)
5. **Mọi action** trong bảng → click toast/modal mock · **cấm** `fetch` BE
6. **Mobile P1** — không gắn Mobile
7. Map live: **không** bắt buộc (NL chat · không pin/vẽ)

## Refs

- `web-app/skill/erp-form-context/erp-form-context.md`
- `product-analy-demo/example/ai-support-on-demo.md`
- Data: `docs/context/features/copilot.md` · `07` §16 · `15` #16
