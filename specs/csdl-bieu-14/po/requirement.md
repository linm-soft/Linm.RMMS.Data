# PO requirement — csdl-bieu-14 (CSDL Biểu 14 — Hệ thống ITS (GTTM))

| Field | Value |
|-------|-------|
| feature | `csdl-bieu-14` |
| title | CSDL Biểu 14 — Hệ thống ITS (GTTM) |
| packKind | `list` |
| changeScope | `new_page` |
| status | `confirmed` |
| taskId | `task_475a3c19` |
| autoApprove | `ON` |
| resource | `its-systems` |
| formNo | `14` |
| IdCode prefix | `IT` |
| columns | `21` |
| peerSoTs | `so-ts-its-camera` · **cấm** merge |
| mfeStdRoute | `/csdl-bieu-14` |
| mfeStdUrl | `http://localhost:9301/csdl-bieu-14` |
| hub | `/so-ts/csdl-so-sach?resource=its-systems` |
| API | `api/v1/asset/csdl-records?resource=its-systems` (+ BFF) |
| contentHash | `sha256:6cfdefa3baaffcf2bd97c7a429bb5043e7f9d77b96bbb77eafaa34689007b112` |
| headerFingerprint | `sha256:14cd156a898dcc971a072dd1cd1b92460a8b597558a90dc9854fead9d4c4de5c` |
| skillId | `agent-po` |
| skillVersion | `2026.08.25.01` |
| workflowVersion | `2026.09.01.02` |
| rulesVersion | `2026.08.31.2` |
| schemaVersion | `1` |
| confirmedAt | `2026-09-05T14:45:00.000Z` |
| prior | data_analy `confirmed` · control-hint + real-data · hash skip |

> **Cấm** ERP.* · invent `api/v1/infra/*` · form chỉ 3 ô `detail*` · merge `so-ts-its-camera` / `road-assets` / ITS AiVision · Guid IdCode · demo SSOT.  
> Typography: label **13** · input D14 / M16 (**GAP-TYP-01**).

## Goal

Trang CSDL Biểu 14 (list Kind B + form Kind D Slideout) cho hệ thống ITS/GTTM: typed **21 cột** Excel, resource `its-systems`, formNo **14**, alias `/csdl-bieu-14` + **NEW** hub card. Section thiết bị ITS + hạ tầng gắn kèm + GPS — **≠** Sổ TS `so-ts-its-camera` · **≠** MFE `its-traffic-detect` / `its-anpr-overload`.

## Open Q — PO decisions (autoApprove)

| ID | Decision | Rationale |
|----|----------|-----------|
| Q-ROUTE | **`alias_now`** | Ship Navigate `/csdl-bieu-14` cùng release; giữ hub deep-link |
| Q-PROV | **`keep_static`** | P1 LOOKUP_STATIC 5 tỉnh; master province DEFER |
| Q-DIR | **`lookup`** | `direction` Dropdown LOOKUP (T/Đ/N/B / cả hai) · filterable · **cấm** free-text P1 |
| Q-QTY-UNIT | **`number`** | `qtyOrLength` Number decimal ≥0 · đơn vị theo deviceType (hint label «SL / dài») · **cấm** Text free-form |
| Q-DEVICE-SET | **`keep_5`** | LOOKUP: cáp / CCTV / ANPR / VMS / tủ — đủ analy; expand chỉ khi Excel confirm |
| Q-INFRA-SET | **`keep_3`** | LOOKUP: cần vươn / long môn / đế BT |
| Q-MANAGE | **`trail_p2`** | `manageUnit` **không** trong 21 header · trail Text P1 → org SearchInput P2 |
| Q-PREFIX | **`IT`** | IdCode `IT-yyyyMMdd-nnnn` · **cấm** Guid |
| Q-LIST-COLS | **`subset`** | Grid mặc định: shared + deviceType/brand/operatingStatus/infraKind · đủ 21 qua schema-config |
| Q-TITLE | **`ctx_its`** | Title «Biểu 14 — Hệ thống ITS (GTTM)» (CTX) |
| Q-DMAP | **`add_now`** | SA/Dev thêm slug `csdl-bieu-14` → Asset (cùng `csdl-so-sach`) |
| Q-PEER-LINK | **`none_p1`** | Không deep-link Sổ TS `ITS_CAMERA` P1 · optional P2 |
| Q-SO09 | **`none_p1`** | Không link Sổ 9 vận hành ITS P1 · DEFER |

## Pack confirm

| Item | Value |
|------|-------|
| packKind | `list` |
| List | Kind **B** zones A/B/C/D |
| Form | Kind **D** Slideout 2col Z1–Z3 · **3 section** (Vị trí tuyến · Thiết bị ITS · Hạ tầng gắn kèm) |
| Map | `none` |
| Layout | `LinPageLayout kind="catalog"` |

## Header (21 — không thêm ngoài)

`code|roadCode|roadName|province|kmFrom|kmTo|side|direction|gpsLat|gpsLng|deviceType|brand|techSpec|qtyOrLength|operatingStatus|infraKind|clearanceM|infraQty|systemStatus|yearBuilt|notes`

## § Screens

### S1 — List (Kind B)

| Zone | AC |
|------|----|
| A Header | Title «Biểu 14 — Hệ thống ITS (GTTM)» · back hub `/so-ts/csdl-so-sach` · **cấm** slug trên card |
| B Toolbar+filter | SearchTextInput (mã/đường/hãng/ghi chú) · province · operatingStatus · deviceType · road SearchInput · kmFrom/kmTo · side · Tạo mới · Refresh · Delete · History · SchemaConfig · Import/Export stub · **search must work** · **cấm** nút Tìm riêng |
| C Grid | `LinCatalogDataGrid` typed subset · STT · row menu Xem/Sửa/Copy/Xóa/Lịch sử · kéo cột ON · empty «Chưa có hệ thống ITS» |
| D Footer | `LinCatalogListPagination` 50/100/200/500 |

### S1b — Hub card (Kind G entry)

| Item | AC |
|------|----|
| Card | NEW «Hệ thống ITS (GTTM)» · formNo **14** · `?resource=its-systems` · **cấm** slug trên card |
| Close | Đóng **GAP-BIEU14-HUB-01** / **GAP-CSDL-CUC-05** (Biểu 14) khi hub+API PASS |

### S2 — Form Slideout (Kind D)

| Item | AC |
|------|----|
| Modes | Create / Edit / View(`readOnly`) / Copy |
| Layout | 2col Z1–Z3 · footer Lưu/Hủy · LeaveConfirmModal dirty |
| Section 1 — Vị trí tuyến | road SearchInput* · province* · kmFrom/kmTo* · side* (L/R/C/Both) · direction* (LOOKUP) · gpsLat/gpsLng (Number) |
| Section 2 — Thiết bị ITS | deviceType* · brand · techSpec · qtyOrLength (Number) · operatingStatus* — **cấm** gộp 1 text detail* |
| Section 3 — Hạ tầng gắn kèm | infraKind · clearanceM · infraQty · systemStatus · yearBuilt |
| Trail | manageUnit (Text P1 → org SearchInput P2) · notes |
| code | readonly auto IdCode `IT-yyyyMMdd-nnnn` · **cấm** Guid |
| road | SearchInput `road-route` + roadCode/roadName |

## Grid AC (list)

1. Filter+search client/server theo controlHint · không nút Tìm riêng.  
2. Cột mặc định = subset (Q-LIST-COLS); schema-config bật đủ 21.  
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
| GAP-BIEU14-HUB-01 | Accept — NEW hub card its-systems |
| GAP-BIEU14-TYPED-01 | Accept — typed 21 · **cấm** detail* |
| GAP-BIEU14-ROUTE-01 | Accept — alias_now |
| GAP-BIEU14-DEV-01 | Accept — deviceType/brand/techSpec/qtyOrLength/operatingStatus |
| GAP-BIEU14-INFRA-01 | Accept — infraKind/clearanceM/infraQty/systemStatus/yearBuilt |
| GAP-BIEU14-GPS-01 | Accept — gpsLat/gpsLng Number |
| GAP-BIEU14-DIR-01 | Accept — direction LOOKUP |
| GAP-BIEU14-DB-01 | Accept — SA Schema_CsdlBieu14 / ItsSystem |
| GAP-BIEU14-DMAP-01 | Accept — add_now slug |
| GAP-BIEU14-PEER-ITS-01 | Accept — **cấm** bind its-traffic-detect / its-anpr-overload |
| GAP-CSDL-CUC-05 | Accept — đóng khi hub+API Biểu 14 PASS |
| GAP-CSDL-ROAD-01 | Accept — SearchInput road-route |
| GAP-CSDL-PROV-01 | Accept — keep_static P1 |
| GAP-CSDL-ORG-01 | Accept — Text P1 · org SearchInput DEFER P2 |
| GAP-CSDL-XLS-01 | Accept — Import/Export stub · sheet Biểu 14 OUT Dev/XLS |
| GAP-CSDL-CUC-11 | Accept — ≠ so-ts-its-camera · **cấm** merge |

## Live bind (cite real-data)

| Op | Path |
|----|------|
| List | `GET /web-bff/api/v1/asset/csdl-records?resource=its-systems` |
| Detail | `GET …/csdl-records/{id}` |
| CRUD | `POST` / `PUT` / soft `DELETE` · body `resource=its-systems` + typed |

**Cấm** bind `road-assets?type=ITS_CAMERA` · invent `api/v1/infra/*` · ITS AiVision APIs · ERP.*.

## Handoff Design

- control-map khớp controlHint (filter + form 21 cột · section thiết bị + hạ tầng).  
- Prototype list A–D + Slideout + hub card · filter-bar HARD · reviewUrl.  
- Empty copy «Chưa có hệ thống ITS».  
- Title «Biểu 14 — Hệ thống ITS (GTTM)» · **cấm** peer Sổ TS title trên hub.

## Handoff SA

- Register resource `its-systems` · typed DTO/UiSchema.  
- Schema_CsdlBieu14 / `ItsSystem` · DOMAIN-MAP slug `csdl-bieu-14`.  
- **Cấm** invent `infra` · **cấm** merge road-assets / so-ts form / ITS AiVision.

## Non-goals (P1)

- Map canvas · peer deep-link Sổ TS · Sổ 9 · master province · org-unit SearchInput · expand LOOKUP ngoài keep_5/keep_3 · yarn build/e2e @ po.

## Version meta (REQUIRED)

| Field | Value |
|-------|-------|
| skillId | agent-po |
| skillVersion | 2026.08.25.01 |
| schemaVersion | 1 |
| workflowVersion | 2026.09.01.02 |
| rulesVersion | 2026.08.31.2 |
| contentHash | `sha256:6cfdefa3baaffcf2bd97c7a429bb5043e7f9d77b96bbb77eafaa34689007b112` |
| headerFingerprint | `sha256:14cd156a898dcc971a072dd1cd1b92460a8b597558a90dc9854fead9d4c4de5c` |
| generatedAt | 2026-09-05T14:45:00.000Z |
| versionGate | ok |
| taskId | task_475a3c19 |
| packKind | list |
| changeScope | new_page |

---
<!-- Version meta: skillId=agent-po skillVersion=2026.08.25.01 schemaVersion=1 workflowVersion=2026.09.01.02 rulesVersion=2026.08.31.2 versionGate=ok contentHash=sha256:6cfdefa3baaffcf2bd97c7a429bb5043e7f9d77b96bbb77eafaa34689007b112 -->
