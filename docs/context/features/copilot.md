# AI Copilot — Feature Context

> **Slug:** `copilot` · **Module:** `Copilot` · **Phase:** P1 online · P2 RAG on-prem  
> **Status:** Demo  
> **sourceKind:** `synthetic` (product AI · không màn GOVOne)  
> **Sources:** `RMMS` §16 · `07` · `08` · `09` · `15-SCREEN-AI-MAP.md` · `RMMS_Giaiphap_tinhnang`  
> **Demo HTML:** `Linm.RMMS.Demo/public/demo/copilot/copilot.html`  
> **Control-map:** `_raw/legacy-govone/demo-maps/copilot-control-map.md`

## 1. Tổng quan

| | |
|--|--|
| Mục tiêu | Hỏi NL: tuyến xuống cấp · ổ gà mở · tài sản cần chú ý · sinh báo cáo/biểu đồ gợi ý |
| Persona | Lãnh đạo · điều hành · BA |
| App hiện có | — (drawer mới trên Web shell) · **không** Mobile P1 |
| DoD P1 | Chat + suggested prompts · 4o-mini default · escalate 4o · rate limit 10/min · disclaimer |
| DoD P2 | RAG on-prem / Qdrant · embedding khi Go local |
| AI support | **Có** · engine P1 `4o-mini (+4o)` · P2 `RAG Qdrant on-prem` |

### AI support (map 15 #16)

| | |
|--|--|
| Input | Câu NL (vi/en) · sessionId · locale · tool context (read-only aggregations) |
| AI P1 | Azure OpenAI **gpt-4o-mini** default · **GPT-4o** escalate · function-calling SQL read-only |
| AI P2 | RAG on-prem (Qdrant + embedding) · open-weight optional |
| Output | Message + optional citations + ECharts JSON stub · token audit |
| Cost | ~$0.0005/câu mini · alert chung ~$200/tháng (`08`) |

## 2. Design / UI

| Screen | Pattern | Kind | Zones | Ghi chú |
|--------|---------|------|-------|---------|
| Host Web shell | Mock page + FAB | — | Content · FAB «Mở Copilot» | Gắn mọi trang Web (demo 1 host) |
| Drawer chat | Slideout Kind D | D | Z1 toolbar+engine · Z2 sessions+messages+prompts · Z3 composer+disclaimer | erp-form leave-confirm nháp |
| Session list | Strip / list | B nhẹ | Title · lastAt · count · status | Chọn phiên |
| Suggested prompts | Chip row | — | 3–5 chip | «Tuyến nào xuống cấp nhanh nhất?» … |
| Message row | Bubble | — | Role · content · tokens · thumbs · citations | Assistant markdown mock |
| Chart card | Preview | — | ECharts JSON visual stub | Không chart lib bắt buộc |
| Spec panel | Side | — | Model · API · entities | AI support checklist |

**Mock data:** 3 hội thoại mẫu + 5 prompt + citations + 1 chart + disclaimer «AI hỗ trợ — kiểm tra nghiệp vụ».

### Interactions (demo)

1. FAB → mở drawer  
2. Chip prompt → gửi → assistant reply (delay mock)  
3. Composer Enter/Gửi · escalate 4o  
4. Thumb up/down · copy · citation toast  
5. Phiên mới / xóa / lưu trữ · xuất  
6. Toggle P2 RAG badge (không hứa local P1)  
7. Rate limit badge 10 req/min  

### Control-map summary

- **18 fields** · **24 actions** — xem `demo-maps/copilot-control-map.md` · `copilot-actions.md`

## 3. API (skeleton — **cấm** implement BE ở demo)

| Method | Path | Mô tả |
|--------|------|-------|
| POST | `/api/v1/copilot/chat` | Message + sessionId (alias `ask`) |
| GET | `/api/v1/copilot/sessions/{id}` | History |
| GET | `/api/v1/copilot/sessions` | List sessions |
| POST | `/api/v1/copilot/feedback` | Thumb up/down |
| DELETE | `/api/v1/copilot/sessions/{id}` | Archive/delete |

Request skeleton:

```json
{ "sessionId": "SES-20260802-0001", "message": "Có bao nhiêu ổ gà chưa xử lý?", "locale": "vi", "model": "gpt-4o-mini" }
```

Auth: JWT · rate limit 10/min/user (`06`). Function-calling SQL **read-only**.

## 4. Database

| Entity | Key columns | Notes |
|--------|-------------|-------|
| CopilotSession | Id, UserId, Title, Status, CreatedAt | |
| CopilotMessage | SessionId, Role, Content, Tokens, Model, CreatedAt | Audit token |
| CopilotFeedback | MessageId, Vote, Note | Thumb |
| (P2) Vector store | — | Qdrant |

## 5. Events / tích hợp

Không publish event bắt buộc. Tools đọc Report / Incident / Asset / Predict (read-only adapters).  
`predict.updated` → context push P2 (optional).

## 6. Gaps / quyết định

| ID | Question | Default |
|----|----------|---------|
| GAP-F-COP-01 | RAG on-prem | P2 |
| GAP-F-COP-02 | SQL tool whitelist | Chỉ view/read API nội bộ |
| GAP-F-COP-03 | Token budget | Chung alert ~$200/tháng (`08`) |
| GAP-F-COP-04 | BE endpoints | MISSING demo only · **be_align OFF** (Status ≠ Signed) |

## 7. Demo checklist (chốt khách)

- [x] Drawer + 3 prompt mẫu (đủ 5)
- [x] Disclaimer rõ
- [x] Badge AI support · P1 online 4o-mini · không hứa RAG local P1
- [x] Không gắn Mobile P1
- [x] 3 hội thoại mẫu · citations · chart stub
- [x] Thumb feedback · rate limit badge
- [x] Catalog `/dev` + hub card domain `copilot`
- [x] sourceKind synthetic · no RECAPTURE open

## 8. Legacy / capture

| | |
|--|--|
| GOVOne leaf | **Không** (module product mới) |
| RECAPTURE-GAPS | **closed** (demo HTML done · pure synthetic) |
| Skip chrome | luôn |
