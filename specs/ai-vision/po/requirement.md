# PO — ai-vision (AI kiểm định mặt đường)

| Field | Value |
|-------|-------|
| feature | `ai-vision` |
| changeScope | `edit_page` |
| packKind | `ai` |
| Feature Kind | **B** — Catalog list + form (full page); demo also Kind D slideout + Kind F map |
| status | `confirmed` (autopilot) |
| updatedAt | 2026-08-08T08:40:00.000Z |

## 1. Goal

Chỉnh MFE **AI kiểm định mặt đường** từ mock stub → catalog Kind B parity (Linm erp-form-context): shell · toolbar · search/filter work · row menu · View readonly · Create/Edit/Copy · P1/P2 engine badge · confirm Critical → mã VI-*. Align demo Signed → MFE `Linm.Web.RMMS.AiVision` + BE `api/v1/ai-vision/detections`.

## 2. Current → New (edit_page)

| Layer | Current | New (delta) |
|-------|---------|-------------|
| Demo | Full interactive Kind B+D+F (Signed) | Giữ SSOT UX; pack ưu tiên **list + form** + engine badge |
| MFE list | Static 3 rows mock · no LinPageLayout | `LinPageLayout kind=catalog` · filters · pagination · row menu |
| MFE form | Scaffold stub | Create / Edit / View / Copy — fields demo |
| API client | `/ai-vision` + DTO `description` | `/ai-vision/detections` + detection DTO |
| BE | Không có | Greenfield `api/v1/ai-vision/detections` + BFF + detect stub |

## 3. Personas / DoD

- Persona: Tuần đường · BA · AI lead
- DoD:
  1. List load + **search work** (mã/class/section/route/severity/status/engine)
  2. Filters: defectClass · severity · status · engine
  3. Toolbar: Tạo mới · Làm mới · badge P1 online (không hứa mAP)
  4. Row menu: Xem · Sửa · Sao chép · (Critical) Tạo Vấn đề → `incidentCode` VI-*
  5. View = `readOnly` (không disabled xám)
  6. Create/Edit/Copy validate + save (Draft)
  7. FE `yarn build` + `typecheck` PASS
  8. BE build PASS · BFF proxy `ai-vision`

## 4. CTX / DEM inventory

| Source | Path | Notes |
|--------|------|-------|
| Context | `docs/context/features/ai-vision.md` | API · entities · P1/P2 · gaps |
| SSOT P2 | `docs/context/14-P2-AI-VISION-STANDARD.md` | Taxonomy · adapter |
| Demo | `Demo/.../ai-vision/ai-vision.html` + `ai-vision-data.js` | Columns · seed DET-901…904 |
| MFE | `Linm.Web.RMMS.AiVision` | Ownership `/ai-vision` |

### List columns (required)

STT · Mã (DET) · Class · Score · Severity · Section · Route · Status · Engine · Incident · actions

### Form fields (required *)

code (readonly) · defectClass* · score* · severity* · status* · engine* · sectionId* · routeLabel · lat · lng · pciSnapshot · modelVersion · bbox · note · incidentCode

### Taxonomy (defectClass)

Ổ gà · Nứt dọc · Nứt ngang · Nứt mai rùa · Bong bật · Lún vệt · Chảy nhựa · Vá đường · Sụt lề · Hư mép

### Status / Engine

- Status: `Draft` · `IncidentCreated` · `Dismissed`
- Engine: `P1` (gpt-4o-vision) · `P2` (onnx-rmms-v1)

## 5. Out of scope (this pack)

- Full Leaflet map shell (Kind F) — keep demo; MFE map later
- Real GPT-4o / ONNX GPU infer (P1 adapter online runtime · P2 train)
- SAM segment endpoint runtime
- ai-asset-detect (slug riêng)
- Token budget alert wiring ($200)

## 6. Handoff → Design

- Kind B catalog list + form full page
- Badge P1 online vs P2 local visible
- Prototype + reviewUrl bắt buộc trước design_confirm
- Demo path: `ai-vision-demo.html` → `ai-vision/ai-vision.html`
