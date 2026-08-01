# source: context/features/README.md
# version: 2
# scannedAt: 2026-08-01T09:50:12.685Z
# sha256: 77f2f75673b9abc698f6248c2604e74ec3bb7f5c30549343a089e20af2182313
# mtimeMs: 1785516443372.8147
﻿# RMMS — Feature backlog (gen-tinh-nang-demo + analy-requirement)

> **Command:** `/gen-tinh-nang-demo` · `/analy-requirement`  
> **DocsRoot:** `docs/` · **DemoRoot (std):** `Linm.RMMS.Demo/src/demo/`  
> **SSOT kỹ thuật:** [`../07-TECHNICAL-IMPLEMENTATION.md`](../07-TECHNICAL-IMPLEMENTATION.md) · Phase: [`../09-PLAN-P1-V2.md`](../09-PLAN-P1-V2.md)  
> **SSOT màn hình ↔ AI:** [`../15-SCREEN-AI-MAP.md`](../15-SCREEN-AI-MAP.md)  
> **Nguồn:** `Hướng dẫn sử dụng phần mềm.docx` (Web/Mobile) · `RMMS_Giaiphap_tinhnang.docx` (18 phân hệ + AI)

## Status legend

| Status | Ý nghĩa |
|--------|---------|
| Draft | Chỉ backlog / stub P2–P3 |
| Context | Đủ `{slug}.md` §1–§7 |
| Demo | Đã có HTML mock |
| Signed | Khách chốt checklist trên demo |

## Backlog — app hiện có + AI + nền tảng

| # | Slug | Tên | Module | Phase | App hiện có (guide) | Status | Context |
|---|------|-----|--------|-------|---------------------|--------|---------|
| 1 | `asset` | Quản lý tài sản đường bộ | Asset | P1 | Mobile Tài sản · Web KCHT · Giám sát TS | Demo | [asset.md](asset.md) |
| 1b | `csdl-so-sach` | CSDL 12 biểu + 8 sổ BDTX | Asset·Patrol·Maint | P1 | Hồ sơ chuẩn hóa sổ sách | Context | [../11-…](../11-CSDL-SO-SACH-DATABASE-API.md) |
| 1c | `pavement-section` | Phân loại mặt đường (Biểu 1) | Asset | P1 | Hồ sơ CSDL biểu 1 | Demo | [pavement-section.md](pavement-section.md) |
| 2 | `gis` | GIS và Digital Twin | Gis | P1–P2 | Bản đồ Giám sát / TS / SC | Demo | [gis.md](gis.md) |
| 2a | `gis-draw-google` | Vẽ tài sản trên Google Map | Gis+Asset | P1 | GOVOne `1-ban-do.png` | Demo | [gis-draw-google.md](gis-draw-google.md) |
| 3 | `ai-vision` | AI kiểm định mặt đường | AiVision | P1 online / P2 local | Overlay **Vấn đề** / Sự cố | Demo | [ai-vision.md](ai-vision.md) |
| 4 | `patrol` | Tuần đường / tuần kiểm | Patrol | P1 | Check-in · Giám sát · Lưu trữ | Demo | [patrol.md](patrol.md) |
| 5 | `attendance` | Chấm công và định vị | Patrol | P1 | Check-in · BC checkin | Context | [attendance.md](attendance.md) |
| 6 | `incident` | Quản lý sự cố | Incident | P1 | Vấn đề · Sự cố · Giám sát SC | Demo | [incident.md](incident.md) |
| 7 | `maintenance` | Lập lịch SC / bảo trì | Maintenance | P2 (khung P1) | **Công việc** Mobile/Web | Context | [maintenance.md](maintenance.md) |
| 8 | `predict` | AI dự báo bảo trì | AiVision+ML | P1 online / P2 | Dashboard / Báo cáo | Context | [predict.md](predict.md) |
| 9 | `ops` | Chỉ đạo điều hành | Notification | P2 (nhẹ P1) | Giám sát · notify | Context | [ops.md](ops.md) |
| 10 | `estimate` | AI ước lượng sửa chữa | ML | P1 online / P2 | Panel trên Công việc / SC | Context | [estimate.md](estimate.md) |
| 11 | `contract` | Hợp đồng và ngân sách | Contract | P2–P3 | — | Draft | [contract.md](contract.md) |
| 12 | `inventory` | Vật tư và thiết bị | Inventory | P3 | — | Draft | [inventory.md](inventory.md) |
| 13 | `drone` | Drone / Reality Capture | Drone | P2–P3 | — | Draft | [drone.md](drone.md) |
| 14 | `toc` | Trung tâm ĐH GT | Traffic | P3 | — | Draft | [toc.md](toc.md) |
| 15 | `citizen` | Cổng người dân | Integration | P3 | — (≠ Góp ý nội bộ) | Draft | [citizen.md](citizen.md) |
| 16 | `copilot` | AI Copilot | Copilot | P1 online / P2 RAG | Web drawer (mới) | Context | [copilot.md](copilot.md) |
| 17 | `dashboard` | Dashboard điều hành | Report | P1 KPI / P2 full | Giám sát + KPI | Context | [dashboard.md](dashboard.md) |
| 17b | `reports` | Báo cáo Web (3 loại) | Report | P1 | BC tài sản · SC · checkin | Context | [reports.md](reports.md) |
| 18 | `integration` | Open API và tích hợp | Integration | P1–P3 | Import TS · offline sync | Context | [integration.md](integration.md) |
| — | `feedback` | Góp ý phần mềm | Integration | P1 | Mobile **Góp ý** | Context | [feedback.md](feedback.md) |
| — | `users` | QL người dùng / tổ chức | Auth | P1 | Web QL Cơ quan/User · profile | Context | [users.md](users.md) |

## Nguyên tắc P1 (từ 09 + map)

1. AI #3+#8+#10+#16 = **online** (GPT-4o / 4o-mini) — không YOLO/XGBoost local trong P1  
2. Giữ UX Mobile/Web guide — bổ sung API consumer + AI overlay  
3. SSOT màn ↔ AI: [`15-SCREEN-AI-MAP.md`](../15-SCREEN-AI-MAP.md)  
4. Demo HTML chỉ mock UI + tóm tắt API/DB — không thay production

## Hub demo

```bash
cd Linm.RMMS.Demo/src/demo && npm run start:std
# → http://localhost:5180
```

## Next

```
/gen-tinh-nang-demo @maintenance   # HTML demo khi cần
/erp-form-context @pavement-section # nếu deepen ERP form
/analy-requirement                  # Step 7 → /gen-bao-gia (khi chốt HĐ)
```
