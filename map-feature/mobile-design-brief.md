# Mobile design brief — Gói B (300 tr trong 900)

**HĐ:** `37001-08/2026-LIC/LINM-JNET` · Báo giá tab Phân hệ · PL01  
**Mục đích:** Chuẩn bị **Design mobile** (iOS + Android) trước khi implement — không code app trong file này.  
**Map HTML:** [`index.html`](./index.html) · filter **mobile★**

---

## 1. Phạm vi gói B (P1)

| | |
|--|--|
| CAPEX | **300 triệu** trong 900 (A 450 · **B 300** · C 150) |
| Client | **iOS + Android** hiện trường |
| Store | **Bên A** sở hữu tài khoản store · Bên B phát hành kỹ thuật |
| AI | **Online** (cloud) — cùng pipeline Web · HITL |
| Camera | **Mobile xem** (gói C SW) — không HW; preview/event theo KPI Spec |
| Offline | Incident queue theo đặc tả P1 (sync khi có mạng) |

**Cấm P1 Mobile:** Twin 3D · YOLO local · train offline · WO/SLA bảo trì full · TOC · cổng dân.

---

## 2. Màn hình ưu tiên Design (thứ tự đề xuất)

| # | Slug | HĐ | Persona | Pattern gợi ý | Web SSOT (tham chiếu) |
|---|------|-----|---------|---------------|----------------------|
| 1 | `patrol` | 04 · A+B | Tuần đường | Map + check-in + lịch sử ca | demo `patrol-demo` · MFE `/patrol` |
| 2 | `attendance` | 05 · A+B | Hiện trường | GPS check-in · báo cáo công | `/patrol/attendance` |
| 3 | `incident` | 06 · A+B | Hiện trường | Tạo SC · ảnh · pin map · offline queue | `/incident` |
| 4 | `asset` | 01 · A | Tra cứu TS | List/search · chi tiết · pin | `/asset` |
| 5 | `gis` | 02 · A | Giám sát | Map overlay TS/SC (đọc nhiều, vẽ ít) | `/gis` |
| 6 | `ai-vision` | 03 · A | Kiểm định | Chụp/upload → class/severity → gắn SC | `/ai-vision` |
| 7 | `ai-asset-detect` | 03b · A | Phát hiện TS | Candidate → Confirm/Dismiss | `/ai-vision/asset-detect` |
| 8 | `camera-connect` (=`camera-gtvt`) | 03c · C | Vận hành | **Xem** live/JPEG · feed event (form config = Web) | `/camera` |
| 9 | `maintenance` | 07 · A | Công việc | List tiến độ · nhận CV từ SC | `/maintenance` |
| 10 | `ops` | 09 · A | Điều hành | Notify · board mỏng | `/ops` |
| 11 | `estimate` | 10 · A | Ước lượng | Qty · đơn giá · confirm | `/ai-vision/estimate` |

**Web-only P1 (không bắt buộc Mobile design):** `contract` · `copilot` · `dashboard` · `reports` · `integration` · `predict` (thin Web).

---

## 3. Information architecture (đề xuất IA)

```
Tab bar (5)
├── Hiện trường → Patrol / Attendance
├── Sự cố → Incident (+ create FAB)
├── Bản đồ → GIS overlay (+ asset pin)
├── AI → Vision / Asset-detect / Estimate
└── Tôi → Profile · sync · thông báo (ops)
```

Drawer / more: Bảo trì (maintenance) · Camera xem · Cài đặt offline.

---

## 4. Design deliverables (checklist cho Design)

Mỗi màn priority:

| Artifact | Ghi chú |
|----------|---------|
| Wireframe mobile (390×844) | List · Detail · Empty · Error · Offline |
| Flow | Happy path + GPS deny + offline sync |
| Component map | Button · list row · map pin · camera shutter · HITL confirm |
| Tokens | Màu trạng thái Online/Offline · severity SC · AI confidence |
| Parity note | Khớp field Web context §2 — **không** copy desktop layout 1:1 |
| reviewUrl | Prototype HTML/Figma mở được browser (Design gate QLDB) |

Gate sau Design: board `/qldb-workflow` · `design_confirm` (Mobile pack riêng hoặc cùng feature Web nếu 1 STATUS).

---

## 5. Liên kết kỹ thuật (implement sau Design)

| Layer | Path |
|-------|------|
| Context Web (SSOT nghiệp vụ) | `docs/context/features/{slug}.md` |
| Demo Web | `Linm.RMMS.Demo/src/demo/...` |
| MFE Web std | `yarn start:std` · port trong `catalogue.json` |
| BE / BFF | `5201/web-bff/api/v1` · cùng API Web |
| Camera GTVT định nghĩa | `Linm.RMMS.Contract/out/camera-gtvt-dinh-nghia.md` |
| Map hạng mục | [`index.html`](./index.html) |

**Repo Mobile (chưa chốt):** ghi rõ khi Design xong — Android Kotlin / iOS Swift hoặc cross-stack; **cấm** fork API ngoài BFF.

---

## 6. KPI nghiệm thu Mobile (P1 — minh chứng)

Từ HĐ outcome proof (rút Mobile):

1. Patrol + attendance giám sát được trên thiết bị  
2. Incident E2E + offline queue theo đặc tả  
3. AI vision / asset-detect online + HITL trên Mobile (chụp/upload)  
4. Map 2D xem overlay (đọc)  
5. Camera: xem preview/event (không cấu hình HW trên Mobile)

---

## 7. Next cho Design

1. Mở [`index.html`](./index.html) → filter **Chỉ màn Mobile priority**  
2. Chọn **pilot màn** (đề xuất: `patrol` hoặc `incident`)  
3. Gen prototype + `reviewUrl`  
4. Sau chốt style → batch các màn còn lại cùng pattern (list+map / AI capture)

### Design pack (2026-08-10) — pilot patrol · Swift iPhone

| | |
|--|--|
| Design MD | [`../specs/mobile-p1/ui/design.md`](../specs/mobile-p1/ui/design.md) |
| Prototype | [`../specs/mobile-p1/ui/prototype/index.html`](../specs/mobile-p1/ui/prototype/index.html) |
| **reviewUrl** | `file:///D:/AI-QLBD/Linm.RMMS.Data/specs/mobile-p1/ui/prototype/index.html` |
| STATUS | `await_confirm` · gate `design_confirm` |
