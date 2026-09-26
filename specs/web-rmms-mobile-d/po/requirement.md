# PO requirement — web-rmms-mobile-d

| Field | Value |
|-------|-------|
| feature | `web-rmms-mobile-d` |
| title | Đợt D — kết ca, giao việc, sổ kiến nghị |
| packKind | `list` · **confirmed** |
| changeScope | `edit_page` |
| lane | `web` · MFE Mobile phone |
| demo | **N/A** |
| status | `done` |
| skillId | `agent-po` |
| skillVersion | `2026.09.05.03` |
| schemaVersion | `1` |
| workflowVersion | `2026.09.19.02` |
| rulesVersion | `2026.09.25.2` |
| versionGate | `ok` |
| contentHash | `sha256:7ea5a5b9a00060f5de09af3b8e3688b39fd566383859a8e73748b9d3885ea034` |
| writtenAt | `2026-09-25T09:33:30.000Z` |
| prior | data_analy `confirmed` · compact + control-hint + real-data §A+§B · hash skip · **cấm** re-scan demo |
| mfe | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Mobile` |
| mfeStdRoute | `/web-rmms-mobile-d` |
| mfeStdUrl | `http://localhost:9301/web-rmms-mobile-d` |
| be | `D:/AI-QLBD/Linm.RMMS.WebService` · Patrol + Maintenance WO · **cấm ERP.*** |
| phoneFrame | `max-width: 430px` |
| formPattern | Mobile full · **không** ERP Modal/Slideout Kind B |

> Labels: `useFormOptions()` / copy key — **cấm** hardcode VN trên form.  
> **Schema trước form (HARD):** handover/pause · `Schema_PatrolPetition` · finding.feedback · `workOrderId` pair trước wire submit.  
> Petition **≠** `notification/inbox`. WO **Live** Maintenance — **cấm** invent WO trong Patrol.

## 1. Goal

Khép kín wave D trên phone Field: **TD-06** kết ca / bàn giao / tạm dừng (`PUT sessions` Live Status + Schema handover/pause) · **TK-03** nút Giao BDTX (`POST maintenance/work-orders` Live → `workOrderId` · status `da-giao`) · **TK-05** khối Phản hồi BDTX (`POST …/feedback` → `cho-kiem-tra`) · **TK-06** sổ kiến nghị (GET|POST petitions). Peer delta TD-05: `bdtx`→WO · `vuot-bdtx`→cờ `kien-nghi-khu`.

## 2. Screens

| id | route | surface | DoD |
|----|-------|---------|-----|
| TD-06 | `/field/tuan-duong/ket-ca` | Form 1-of-3 action + Lưu | Radio `ket-ca`/`ban-giao`/`tam-dung` · summary open/done peer B · PUT session · **không** GPS · cancel → TD-01 |
| TK-03 | `/field/tuan-kiem/phieu/moi` (+ after id) | **Delta D:** nút Giao BDTX | Sau có finding id: POST WO Live · lưu `workOrderId` · status `da-giao` · Text RO mã WO · **không** GPS mới |
| TK-05 | `/field/tuan-kiem/phieu/:id` | **Delta D:** khối Phản hồi BDTX | Form feedback · POST `…/feedback` → `cho-kiem-tra` · GPS **không** HARD trên feedback |
| TK-06 | `/field/tuan-kiem/kien-nghi` · `/moi` | List cards + form tạo KN | GET petitions · POST create `status=moi` · GPS hiện trường · no-face → lưu không tọa độ · **cấm** fake · **cấm** inbox |

**Out of D:** TK-07 (E) · track GPS liên tục · native iOS/Android · desktop Asset/Field.

**Peer:** A sessions hub · B journal-lines · C findings/recheck (assign/feedback ẩn ở C → bật ở D).

## 3. List / Grid AC (packKind=list · phone)

| AC | Rule | Pass |
|----|------|------|
| DES-GRID / LinErpListFilterBar | **N/A** — Field phone · **cấm** clone ERP Kind B filter bar / desktop grid | Design note N/A |
| L-01 empty TK-06 | Không petition → EmptyState copy key · CTA → `/moi` | QA |
| L-02 data TK-06 | Cards bind GET `patrol/petitions` · sender · route/km · kind · status · **cấm** mock seed khi schema chưa Live | QA |
| L-03 tap | Card → detail / openFinding khi có · **không** ERP grid | QA |
| L-04 create | Nút Tạo KN → `/moi` | QA |
| L-05 no inbox | **Cấm** bind `notification/inbox` làm sổ KN (GAP-TK-04) | Dev/QA |
| L-06 parent session | Không ca Đang tuần → chặn TD-06 · toast · **cấm** `window.alert` | QA |
| S-01 action | TD-06: đúng **một** Radio action · đổi field visible theo action | QA |
| S-02 ket-ca | `ket-ca` → PUT Status=`Hoàn thành` · không bắt handover/pause | QA |
| S-03 ban-giao | `ban-giao` → `handoverNote` **required** · kèm open line ids · receiver Text/Lookup · Status giữ `Đang tuần` (SA) | QA |
| S-04 tam-dung | `tam-dung` → `pauseReason` **required** (5 keys) · tạm dừng **không** tính thiếu lượt (SA) | QA |
| S-05 summary | Hiển thị count xong/chưa + list RO dòng chưa xong · **không** xóa dòng | QA |
| S-06 save/cancel | Lưu → PUT · Cancel → TD-01 không ghi · **không** GPS | QA |
| S-07 labels | useFormOptions: action · pauseReason · status | QA |
| W-01 assign gate | Không finding id → ẩn/disable Giao BDTX | QA |
| W-02 WO Live | POST `maintenance/work-orders` · IncidentId trống · Title=mã phiếu · DueAt=hạn · Status WO `new` | QA |
| W-03 after assign | Lưu `workOrderId` trên finding · status phiếu `da-giao` · Text RO mã WO | QA |
| W-04 no invent | **Cấm** invent WO entity trong Patrol domain | Dev |
| F-01 feedback fields | qty · quality `dat`/`chua-dat` · at · media · note — keys useFormOptions | QA |
| F-02 save feedback | POST `findings/{id}/feedback` → status `cho-kiem-tra` | QA |
| F-03 GPS feedback | GPS **không** HARD · ảnh sau qua files/* | QA |
| P-01 required | TK-06 create: senderUnit · route · km · content · petitionKind **required** | QA |
| P-02 GPS deny | Deny geolocation + **không** no-face → chặn nút cần tọa độ | QA |
| P-03 no-face | Flag «không có mặt» → cho Lưu **không** lat/lng · ghi flag · **cấm** fake coords | QA |
| P-04 save | POST petitions · status `moi` | QA |
| P-05 close | Đóng KN chỉ khi finding liên kết `xong` hoặc lý do đóng tay | QA |
| P-06 openFinding | → TK-03 nguồn `kien-nghi` | QA |
| D-05 peer | TD-05: `bdtx`→POST WO+workOrderId · `vuot-bdtx`→cờ `kien-nghi-khu` **không** WO | QA |
| X-01 out E | TK-07 **không** stub trong D | Dev/QA |
| X-02 schema gate | Handover/pause · petition · feedback · workOrderId — Schema_* **trước** form submit | SA/Dev |

## 4. Field inventory (from analy · Design chốt control-map)

| uiField | screen | controlHint | notes |
|---------|--------|-------------|-------|
| actionKind | TD-06 | Radio | ket-ca / ban-giao / tam-dung · một chọn |
| summaryDone / openLinesList | TD-06 | Text RO / List RO | peer B · không xóa |
| handoverNote | TD-06 | TextArea | **required** if ban-giao |
| handoverOpenIds | TD-06 | Chip/List | ids dòng chưa xong |
| receiverName | TD-06 | Text/Lookup | cùng đơn vị nếu API · else tay + GAP |
| pauseReason | TD-06 | Dropdown | 5 keys · **required** if tam-dung |
| saveSession / cancel | TD-06 | Button | PUT Live Status · về TD-01 |
| assignWo | TK-03 | Button | POST WO Live · da-giao |
| workOrderId | TK-03/05 | Text RO | sau assign |
| feedbackQty / Quality / At / Media / Note | TK-05 | form block | POST feedback |
| saveFeedback | TK-05 | Button | → cho-kiem-tra |
| petitionList / emptyHint | TK-06 | List cards / EmptyState | GET petitions · copy key |
| createPetition | TK-06 | Button | → /moi |
| senderUnit / route / km / content | TK-06 | Text / TextArea | **required** |
| petitionKind | TK-06 | Dropdown | 5 keys |
| getGps · lat/lng/accuracyM · noFaceFlag | TK-06 | GPS + Flag | no-face OK · cấm fake |
| savePetition / openFinding / closePetition | TK-06 | Button | POST · → TK-03 · close rules |

## 5. Enum keys (PO chốt · label via useFormOptions)

| Key group | Values |
|-----------|--------|
| TD-06 action | `ket-ca` · `ban-giao` · `tam-dung` |
| session.Status | `Đang tuần` · `Hoàn thành` (+ pause semantics → SA) |
| pauseReason | `su-co-mat-an-toan` · `cuu-nan` · `thien-tai` · `chay-no` · `bat-kha-khang` |
| finding.status (D) | `da-giao` (sau WO) · `cho-kiem-tra` (sau feedback) · peer C: `phat-hien` · `xong` |
| feedback.quality | `dat` · `chua-dat` |
| petition.kind | `hu-hong` · `hanh-lang` · `atgt` · `tuan-duong` · `khac` |
| petition.status | `moi` · (đóng khi phiếu `xong` hoặc lý do tay) |
| journal.scope (TD-05 D) | `bdtx` · `vuot-bdtx` |

## 6. API / bind (cite real-data §A+§B)

| Method | Path | Live? | PO rule |
|--------|------|-------|---------|
| PUT | `patrol/sessions/{id}` | **Live** Status | ket-ca→`Hoàn thành` · else giữ `Đang tuần` + handover/pause fields |
| — | session handover/pause | **Mới** | Schema cột hoặc Note tạm **1 format** FE/BE (SA) |
| POST | `maintenance/work-orders` | **Live** | CreateWorkOrderRequest · IncidentId trống · Title=code |
| POST | `patrol/findings/{id}/feedback` | **Mới** | body: qtyDone · quality · at · mediaIds · note |
| GET\|POST | `patrol/petitions` | **Mới** | Schema_PatrolPetition · ≠ inbox |
| — | `workOrderId` finding/journal | **Mới** cột | pair trước form |

**Prefixes:** `api/v1/patrol` · `api/v1/maintenance` · BFF `mobile-bff/api/v1` cùng `{resource}`.

## 7. HARD product rules

| Rule | |
|------|--|
| Labels | useFormOptions / copy key · **cấm** hardcode VN form |
| GPS | navigator.geolocation · TD-06 **không** GPS · TK-03 assign không GPS mới · TK-05 feedback không HARD GPS · TK-06 hiện trường · deny+no-face rules · **cấm** tọa độ mẫu |
| Schema-before-form | handover/pause · petition · feedback · workOrderId **trước** wire submit |
| BE | ONLY `Linm.RMMS.WebService` · DOMAIN-MAP Patrol (+ Maintenance cite) · **cấm ERP.*** |
| MFE | ONLY `Linm.Web.RMMS.Mobile` · phone 430 · **cấm** desktop Asset · **cấm** native |
| Petition | **không** notification/inbox |
| WO | Live Maintenance · không invent trong Patrol |
| Toast | lỗi/empty · **cấm** `window.alert` |

## 8. Leave / out of scope

| Leave | Reason |
|-------|--------|
| TK-07 kế hoạch | Wave E — **cấm** stub D |
| Track GPS liên tục | Out D |
| iOS/Android native | Web MFE only |
| Desktop Asset/Field grid | Phone Field only |
| Demo HTML / fake GPS / mock petition SSOT | demo N/A · hash skip |
| Invent WO trong Patrol | dùng Maintenance Live |
| notification/inbox làm sổ KN | GAP-TK-04 |
| Re-scan demo / crawl CTX | analy hash skip · GAP-PO-DEMO-RESCAN-01 |

## 9. Open → SA (PO stance)

| id | PO stance | Owner |
|----|-----------|-------|
| UNCLEAR-HANDOVER-COL | Chấp nhận Note tạm **1 format** đến Schema cột/bảng — SA chốt 1 lần FE/BE | SA |
| UNCLEAR-PAUSE-STATUS | Tạm dừng **không** đổi sang Status riêng nếu Live chỉ có Đang tuần/Hoàn thành — flag/cols trên Đang tuần · không tính thiếu lượt | SA |
| UNCLEAR-PETITION-SCHEMA | Entity+schema **trước** form · empty+gap đến Live · **cấm** mock | SA |
| UNCLEAR-FEEDBACK-DTO | Body đề xuất §B real-data — SA chốt DTO pair C | SA |
| UNCLEAR-WO-LINK | workOrderId trên **cả** finding và journal-line (surface assign / TD-05) | SA |
| UNCLEAR-RECEIVER-API | Thiếu API user cùng đơn vị → Text tay + GAP · không block DoD D | SA/GAP |
| UNCLEAR-DOMAIN-SLUG | SA thêm row DOMAIN-MAP `web-rmms-mobile-d` → Patrol (+ Maintenance cite) | SA |

## 10. DoD PO → Design

- [x] packKind=`list` confirmed · changeScope=`edit_page`
- [x] Screens TD-06 · TK-03 assign · TK-05 feedback · TK-06 + Leave
- [x] List/Grid AC phone N/A DES-GRID · ACs L/S/W/F/P/D/X
- [x] Inventory + enum keys + API Live vs Mới + Schema-before-form
- [x] UNCLEAR → SA với PO stance · **cấm** re-scan demo
- [x] Handoff compact `handoff/po-compact.md`

## Handoff Design

| Field | Value |
|-------|-------|
| next | `/agent-design` · ui/design.md + prototype phone 430 · zones TD-06 · TK-03 assign · TK-05 feedback · TK-06 |
| reviewUrl | (Design) |
| peerStdUrl | `http://localhost:9301/web-rmms-mobile-d` |
| controlHint | reuse analy inventory · Design chốt control-map |
| DES-GRID / filter bar | **N/A** phone |

## Version meta

| skillVersion | schemaVersion | workflowVersion | rulesVersion |
|--------------|---------------|-----------------|--------------|
| 2026.09.05.03 | 1 | 2026.09.19.02 | 2026.09.25.2 |
