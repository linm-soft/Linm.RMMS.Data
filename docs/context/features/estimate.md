# AI ước lượng sửa chữa — Feature Context

> **Slug:** `estimate` · **Module:** ML / AiVision · **Phase:** P1 online · P2 local + đơn giá  
> **Status:** Demo  
> **Kind:** **D** (slideout form) — Confirmed by: ai-autocode-autopilot  
> **Sources:** `RMMS` §10 · `07` §10 · `08` · `09` · `15-SCREEN-AI-MAP.md`  
> **Gắn màn:** Mobile/Web **Công việc** · chi tiết **Sự cố** · route MFE `/ai-vision/estimate`  
> **Demo HTML:** `Linm.RMMS.Demo/public/demo/ai-vision/estimate.html`  
> **MFE (align):** `Linm.Web.RMMS.AiVision` · **cấm** sửa MFE ở phase demo

## 1. Tổng quan

| | |
|--|--|
| Mục tiêu | Ước khối lượng bóc dỡ · BTN · nhân công · thiết bị · thời gian · chi phí · vật tư từ defect/incident |
| Persona | Điều phối · nhà thầu · Ban QLDA |
| App hiện có | **Công việc** — panel mới; không đổi list UX |
| DoD P1 | JSON estimate online · hiển thị bảng · confirm thủ công |
| DoD P2 | Model regression + catalog đơn giá tenant |

## 2. Design / UI

| Screen | Pattern | Zones | Ghi chú |
|--------|---------|-------|---------|
| Estimate panel | Kind D Slideout | Z1 toolbar · Z2 header+lines · Z3 tổng | Host: Incident / CV |
| Confirm số liệu | Modal | Edit dòng · Lưu draft | Trước tạo WO P2 |
| Host list stub | Full mock | Chọn SC / CV → mở panel | Demo only |

**Kind D layout (erp-form-context):**

- **Z1** — Quay lại · Đóng · FormActions · title «AI ước lượng sửa chữa» · hint · badge P1 online  
- **Z2a** — Validation banner  
- **Z2b** — Header: sự cố · nguồn · defect · model · tuyến  
- **Z2d** — Lines grid `pattern_inline_grid` (hạng mục · qty · đơn vị · đơn giá · thành tiền)  
- **Z3** — laborHours · equipment · duration · LabelMoney tổng · Xác nhận / Lưu nháp / Gắn CV  

**Mock:** 1 ổ gà · 3 dòng vật tư · tổng VND · IdCode `EST-YYYYMMDD-NNNN`.

**2d readonly:** rule_defaults · Confirmed by: ai-autocode-autopilot  
**2e IdCode:** `EST-YYYYMMDD-NNNN`  
**2k:** voucher_default · leave-confirm khi dirty  
**2cm:** pattern_inline_grid + toolbar_standard  
**2j platform event:** DEFER (`estimate.created` → Maintenance P2)

## 3. API

| Method | Path | Mô tả | BE status |
|--------|------|-------|-----------|
| POST | `/api/v1/ai-estimate/from-defects` | Từ detection IDs | **MISSING** (Step 4b) |
| POST | `/api/v1/ai-estimate/from-incident/{id}` | Từ sự cố | **MISSING** (Step 4b) |
| GET | `/api/v1/ai-estimate/{id}` | Chi tiết audit | **MISSING** (Step 4b) |

```json
{
  "incidentId": "INC-441",
  "lines": [{ "item": "BTN", "qty": 12.5, "unit": "m2", "unitPrice": 450000 }],
  "laborHours": 16,
  "equipment": ["lu"],
  "totalAmount": 5625000,
  "model": "gpt-4o"
}
```

> Phase demo: **cấm** gọi BE · fake JSON only. Align BE khi Status Signed + be_align ON.

## 4. Database

| Entity | Key columns | Notes |
|--------|-------------|-------|
| UnitPriceCatalog | TenantId, Code, Name, Unit, Price | Tenant · P2 |
| EstimateAudit | Id, IncidentId, RawJson, Total, Model, At | P1 audit |

## 5. Events / tích hợp

| Event | Publisher | Consumer |
|-------|-----------|----------|
| `estimate.created` | Estimate | Maintenance (P2 WO) — DEFER |

## 6. Gaps / quyết định

| ID | Question | Default |
|----|----------|---------|
| GAP-F-EST-01 | WorkOrder full | P2 Maintenance · không auto WO P1 |
| GAP-F-EST-02 | Auto-apply giá | Luôn confirm user P1 |
| GAP-F-EST-03 | BE endpoints `/api/v1/ai-estimate/*` | MISSING · be_align khi Signed |
| GAP-F-EST-04 | Catalog đơn giá tenant UI | P2 |

## 7. Demo checklist (chốt khách)

- [ ] Bảng tiền mock rõ
- [ ] Badge online
- [ ] Nút «Gắn Công việc» (stub P1)
- [ ] Không auto tạo WO
- [ ] Đủ field + 13 actions từ control-map
- [ ] Leave-confirm khi dirty

<!-- LEGACY-GOVONE-CAPTURE:START -->
## Legacy GOVOne (auto-capture)

> Auto map từ `tools/legacy-govone-capture` · vision: `_raw/legacy-govone/ai-analysis/`.
> Dùng làm **step context** cho `/qlbd-analy-demo` · `yarn scan-qlbd-demo`.

### Nguồn

- Raw feature: `docs/context/_raw/legacy-govone/features/estimate.md`
- Vision packets: 0

### Capture inventory

> **Không có màn GOVOne riêng** cho AI estimate (hạng mục mới P1).  
> Capture synthetized từ `features/estimate.md` · `07` §10 · `15-SCREEN-AI-MAP.md` · host UX **Công việc / Sự cố**.  
> Source: product docs — **không** password · **không** clone skin GOVOne.

## Pages (1)

### AI ƯỚC LƯỢNG SỬA CHỮA (panel trên Công việc / Sự cố)

- **id:** `estimate-panel-ai`
- **url:** (planned) `/ai-vision/estimate` · host panel Công việc / chi tiết Sự cố
- **title:** AI ước lượng sửa chữa
- **headings:** Nguồn · Thông tin ước lượng · Bảng khối lượng · Nhân công & thiết bị · Tổng chi phí

#### Labels / field captions

- Mã ước lượng:
- Sự cố / Vấn đề:
- Nguồn (detection / sự cố):
- Detection IDs:
- Tuyến / đoạn:
- Loại hư hỏng:
- Diện tích (m²):
- Mức độ:
- Model AI:
- Giờ nhân công:
- Thiết bị:
- Thời gian thi công (ngày):
- Tổng chi phí (VND):
- Trạng thái:
- Hạng mục (dòng):
- Khối lượng:
- Đơn vị:
- Đơn giá:
- Thành tiền:
- Ghi chú dòng:

#### Inputs

| tag | type | name/id | placeholder |
|-----|------|---------|-------------|
| input | text | estimateCode | EST-20260801-0001 |
| select | select-one | incidentId | Chọn sự cố |
| select | select-one | sourceType | from-incident |
| input | text | detectionIds | DET-901, DET-902 |
| input | text | routeSection | QL1A · Km12+100 |
| select | select-one | defectType | Ổ gà |
| input | number | defectArea | 12.5 |
| select | select-one | severity | Critical |
| input | text | model | gpt-4o |
| input | number | laborHours | 16 |
| input | text | equipment | lu, máy cắt |
| input | number | durationDays | 2 |
| input | number | totalAmount | 5625000 |
| select | select-one | status | draft |
| input | text | lineItem | BTN |
| input | number | lineQty | 12.5 |
| input | text | lineUnit | m2 |
| input | number | lineUnitPrice | 450000 |
| input | number | lineAmount | 5625000 |
| textarea | text | lineNote | Vá ổ gà |

#### Actions / buttons (full)

| label | kind | zone | tag | disabled |
|-------|------|------|-----|----------|
| AI ước lượng từ sự cố | create | toolbar | button | |
| AI ước lượng từ detections | create | toolbar | button | |
| Chạy lại ước lượng | action | toolbar | button | |
| Thêm dòng | create | lines | button | |
| Xóa dòng | destructive | lines | button | |
| Sửa dòng | action | lines | button | |
| Xác nhận số liệu | action | footer | button | |
| Lưu nháp | action | footer | button | |
| Gắn Công việc | nav | footer | button | |
| Xuất Excel | export | toolbar | button | |
| Đóng | close | header | button | |
| Quay lại | nav | header | button | |
| Hủy thay đổi | close | footer | button | |

- **actionCount:** 13
- **fieldCount:** 20

### Step context checklist

- [ ] Design demo parity legacy zones
- [ ] Control-map fields từ Labels/Inputs/Vision
- [ ] Status Demo → Signed → `/qlbd-align-mfe`
<!-- LEGACY-GOVONE-CAPTURE:END -->

<!-- DEMO-MFE-MODERN:START -->
## Demo MFE modern (erp-form-context)

> Same fields/actions từ capture · UI chuẩn Linm — **không** clone skin legacy.

- Control-map: [`estimate-control-map.md`](../_raw/legacy-govone/demo-maps/estimate-control-map.md)
- Actions: [`estimate-actions.md`](../_raw/legacy-govone/demo-maps/estimate-actions.md)
- Fields mapped: 20 · Actions: 13
- Kind hint: **D** (slideout form) — erp-form-context Kind D · leave-confirm · pattern_inline_grid

Gen demo: `/qlbd-analy-demo @estimate` — load control-map trên + `/erp-form-context` rules (2a-K · 2g · common controls).
<!-- DEMO-MFE-MODERN:END -->

## 8. Tracking (autopilot)

| | |
|--|--|
| Task | `task_42d3c388` |
| Skill | `/qlbd-analy-demo @estimate` |
| Files | `estimate.md` · `demo-maps/estimate-*.md` · `public/demo/ai-vision/estimate.html` · `js/estimate-*.js` · `demoCatalog.ts` |
| BE align | OFF (demo) · GAP-F-EST-03 documented |
| Confirmed by | ai-autocode-autopilot |
