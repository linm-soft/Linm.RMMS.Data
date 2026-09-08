# PO requirement — csdl-bieu-11 (CSDL Biểu 11 — Hệ thống chiếu sáng)

| Field | Value |
|-------|-------|
| feature | `csdl-bieu-11` |
| title | CSDL Biểu 11 — Hệ thống chiếu sáng |
| packKind | `list` |
| changeScope | `new_page` |
| status | `confirmed` |
| taskId | `task_ec8df9b0` |
| autoApprove | `ON` |
| resource | `lighting-systems` |
| formNo | `11` |
| IdCode prefix | `LT` |
| columns | `24` |
| peerSoTs | `so-ts-lighting` (deep-link · ≠ merge · qty ≠ điểm) |
| mfeStdRoute | `/csdl-bieu-11` |
| mfeStdUrl | `http://localhost:9301/csdl-bieu-11` |
| hub | `/so-ts/csdl-so-sach?resource=lighting-systems` |
| API | `api/v1/asset/csdl-records?resource=lighting-systems` (+ BFF) |
| contentHash | `sha256:7980db07b4712336ab0b675fa89feaab75c67fdaef3b54fe94647ab9ec1863d8` |
| headerFingerprint | `sha256:b37759a9224c09c7c63bc81583b4a9bcbca02e74cba8b63579819e90d57f1d1a` |
| skillId | `agent-po` |
| skillVersion | `2026.08.25.01` |
| workflowVersion | `2026.09.01.02` |
| rulesVersion | `2026.08.31.2` |
| schemaVersion | `1` |
| confirmedAt | `2026-09-05T12:20:00.000Z` |
| prior | data_analy `confirmed` · control-hint + real-data · hash skip |

> **Cấm** ERP.* · invent `api/v1/infra/*` · form chỉ 3 ô `detail*` · merge `so-ts-lighting` · Guid IdCode · demo SSOT · dump điểm Sổ TS vào qty LED/solar.  
> Typography: label **13** · input D14 / M16 (**GAP-TYP-01**).

## Goal

Trang CSDL Biểu 11 (list Kind B + form Kind D Slideout) cho hệ thống chiếu sáng lưới + NLMT: typed **24 cột** Excel, resource `lighting-systems`, formNo **11**, alias route `/csdl-bieu-11` + hub entry. Qty bucket LED/solar — **≠** Sổ TS điểm.

## Open Q — PO decisions (autoApprove)

| ID | Decision | Rationale |
|----|----------|-----------|
| Q-ROUTE | **`alias_now`** | Ship Navigate `/csdl-bieu-11` cùng release; giữ hub deep-link |
| Q-PROV | **`keep_static`** | P1 LOOKUP_STATIC 5 tỉnh; master province DEFER |
| Q-GRID-STATUS | **`align_status`** | Enum `gridStatus` = tot/tb/kem/hong (cùng `status`) · **cấm** free-text |
| Q-LED-ZERO | **`allow_zero`** | Cho phép cả 4 LED = 0 khi chỉ NLMT (khối lưới optional) |
| Q-SOLAR-REQ | **`optional`** | Khối NLMT optional; row hợp lệ nếu có road+km+side+status (có thể chỉ lưới hoặc chỉ NLMT hoặc cả hai) |
| Q-CABINET | **`split`** | `cabinetCount` (lưới) ≠ `solarCabinetCount` — 2 field tách đúng Excel |
| Q-LIST-COLS | **`subset`** | Grid mặc định: shared + LED 4 mức + gridStatus + gridPoleCount + cabinetCount + status · solar/TBA/notes qua schema-config |
| Q-PEER | **`toolbar`** | Deep-link Sổ TS `so-ts-lighting` trên toolbar · **cấm** merge form |
| Q-TITLE | **`keep_demo`** | Title «Biểu 11 — Hệ thống chiếu sáng» (hub/demo); CTX «Chiếu sáng lưới + NLMT» = mô tả phụ |

## Pack confirm

| Item | Value |
|------|-------|
| packKind | `list` |
| List | Kind **B** zones A/B/C/D |
| Form | Kind **D** Slideout 2col Z1–Z3 · **2 section** (Lưới điện · NLMT) |
| Map | `none` |
| Layout | `LinPageLayout kind="catalog"` |

## Header (24 — không thêm ngoài)

`code|roadCode|roadName|province|kmFrom|kmTo|side|gridLed600|gridLed240|gridLed150|gridLed125|gridStatus|gridPoleCount|cabinetCount|substationCount|solarPoleCount|solarControllerCount|solarPanel240Wp|solarLamp100W|solarBattery145Ah|solarCabinetCount|status|manageUnit|notes`

## § Screens

### S1 — List (Kind B)

| Zone | AC |
|------|----|
| A Header | Title «Biểu 11 — Hệ thống chiếu sáng» · back hub `/so-ts/csdl-so-sach` · **cấm** slug trên card |
| B Toolbar+filter | SearchTextInput (mã/đường/ghi chú) · province · status · road SearchInput · kmFrom/kmTo · side · Tạo mới · Refresh · Delete · History · SchemaConfig · Import/Export stub · peer Sổ TS · **search must work** · **cấm** nút Tìm riêng |
| C Grid | `LinCatalogDataGrid` typed subset · STT · row menu Xem/Sửa/Copy/Xóa/Lịch sử · kéo cột ON · empty «Chưa có hệ thống chiếu sáng» |
| D Footer | `LinCatalogListPagination` 50/100/200/500 |

### S2 — Form Slideout (Kind D)

| Item | AC |
|------|----|
| Modes | Create / Edit / View(`readOnly`) / Copy |
| Layout | 2col Z1–Z3 · footer Lưu/Hủy · LeaveConfirmModal dirty |
| Shared (head) | road SearchInput* · province* · kmFrom/kmTo* · side* · status* |
| Section 1 — Lưới điện | gridLed600/240/150/125 (Number ≥0 · allow_zero) · gridStatus · gridPoleCount · cabinetCount · substationCount |
| Section 2 — NLMT | solarPoleCount · solarControllerCount · solarPanel240Wp · solarLamp100W · solarBattery145Ah · solarCabinetCount — **optional** |
| Trail | manageUnit (Text P1 → org SearchInput P2) · notes |
| code | readonly auto IdCode `LT-yyyyMMdd-nnnn` · **cấm** Guid |
| road | SearchInput `road-route` + roadCode/roadName |

## Grid AC (list)

1. Filter+search client/server theo controlHint · không nút Tìm riêng.  
2. Cột mặc định = subset (Q-LIST-COLS); schema-config bật đủ 24.  
3. Pagination 50/100/200/500 · soft-delete refresh.  
4. Row actions + toolbar CRUD · history/import stub.  
5. Empty/error toast VN · 404 đóng slideout.

## Report AC

N/A — packKind=`list`.

## § Leave

| Case | Behavior |
|------|----------|
| Dirty form | LeaveConfirmModal trước đóng/navigate |
| Cancel clean | đóng slideout không confirm |
| After save | đóng · list refresh · toast OK |

## GAP accept (PO → Design/SA)

| GAP | PO |
|-----|-----|
| GAP-BIEU11-TYPED-01 | Accept — typed 24 · **cấm** detail* |
| GAP-BIEU11-ROUTE-01 | Accept — alias_now |
| GAP-BIEU11-GRID-01 | Accept — 4 LED Number qty |
| GAP-BIEU11-GRID-STATUS-01 | Accept — align_status |
| GAP-BIEU11-GRID-QTY-01 | Accept — pole/cabinet/TBA typed |
| GAP-BIEU11-SOLAR-01 | Accept — NLMT 6 field optional |
| GAP-BIEU11-BLOCK-01 | Accept — 2 section lưới + NLMT |
| GAP-CSDL-ROAD-01 | Accept SearchInput road-route |
| GAP-CSDL-PROV-01 | keep_static P1 |
| GAP-CSDL-ORG-01 | Text P1 · SearchInput org-unit **DEFER P2** |
| GAP-CSDL-XLS-01 | Import/export stub P1 · sheet Biểu 11 OUT Dev/XLS |
| GAP-CSDL-CUC-11 | Accept — peer ≠ merge · qty ≠ điểm · toolbar deep-link |

## Filter bar (HARD → Design)

- 1 hàng filter + search inline · **cấm** nút Tìm riêng · **cấm** 2 hàng filter trừ overflow schema.  
- Controls: SearchTextInput · province · status · road SearchInput · kmFrom/kmTo · side.

## Live bind (cite real-data)

| Op | Path |
|----|------|
| List | `GET /web-bff/api/v1/asset/csdl-records?resource=lighting-systems` |
| Detail | `GET …/csdl-records/{id}` |
| CRUD | POST/PUT/DELETE soft · body `resource=lighting-systems` + typed |
| road-route | `GET /integration/road-routes/search` |
| org-unit | P2 `GET /integration/org-units/search` |

**Cấm** invent `api/v1/infra/*` · ERP.* · `api/v1/rmms/*`.

## NFR / DoD

1. List + search/filter work · empty VN.  
2. C/E/V/Copy · LeaveConfirm dirty.  
3. Form = 24 cột Excel · 2 section · **cấm** chỉ 3 ô detail*.  
4. IdCode `LT-` BE generate.  
5. `yarn build` / e2e **chỉ** Dev/QA (không PO).

## Handoff

| Role | Need |
|------|------|
| **Design** | control-map khớp controlHint · prototype list+slideout 24 · 2 section · filter-bar HARD · reviewUrl |
| **SA** | typed DTO/UiSchema `lighting-systems` · Schema_CsdlBieu11 · **cấm** infra · giữ API prefix |
| TL/Dev | wire controlHint · **cấm** đoán Text vs SearchInput |

## Version meta (REQUIRED)

| Field | Value |
|-------|-------|
| skillId | agent-po |
| skillVersion | 2026.08.25.01 |
| schemaVersion | 1 |
| workflowVersion | 2026.09.01.02 |
| rulesVersion | 2026.08.31.2 |
| contentHash | `sha256:7980db07b4712336ab0b675fa89feaab75c67fdaef3b54fe94647ab9ec1863d8` |
| headerFingerprint | `sha256:b37759a9224c09c7c63bc81583b4a9bcbca02e74cba8b63579819e90d57f1d1a` |
| generatedAt | 2026-09-05T12:20:00.000Z |
| versionGate | ok |
| taskId | task_ec8df9b0 |
| packKind | list |
| changeScope | new_page |

---
<!-- Version meta: skillId=agent-po skillVersion=2026.08.25.01 schemaVersion=1 workflowVersion=2026.09.01.02 rulesVersion=2026.08.31.2 versionGate=ok contentHash=sha256:7980db07b4712336ab0b675fa89feaab75c67fdaef3b54fe94647ab9ec1863d8 -->
