# Data-analy — controlHint — web-rmms-mobile-d

| Field | Value |
|-------|-------|
| feature | `web-rmms-mobile-d` |
| title | Đợt D — kết ca, giao việc, sổ kiến nghị |
| packKind | `list` |
| changeScope | `edit_page` |
| mode | `feature_context` |
| status | `done` |
| skillId | `agent-data-analy` |
| skillVersion | `2026.09.05.03` |
| schemaVersion | `1` |
| workflowVersion | `2026.09.19.02` |
| rulesVersion | `2026.09.25.2` |
| versionGate | `ok` |
| contentHash | `sha256:7ea5a5b9a00060f5de09af3b8e3688b39fd566383859a8e73748b9d3885ea034` |
| analyzedAt | `2026-09-25T09:28:04.000Z` |
| demo | **N/A** |
| realData | `specs/_data-analy/features/web-rmms-mobile-d-real-data.md` |
| beRepo | `D:/AI-QLBD/Linm.RMMS.WebService` · domain **Patrol** + **Maintenance** WO · **cấm ERP.*** |
| uiRepo | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Mobile` |
| mfeStdUrl | `http://localhost:9301/web-rmms-mobile-d` |
| mfeStdRoute | `/web-rmms-mobile-d` |
| taskId | `task_0ba23800` |
| phoneFrame | `max-width: 430px` |
| formPattern | Mobile full · **không** ERP Modal/Slideout Kind B desktop |
| priorWave | `web-rmms-mobile-a/b/c` · wave D = close session + WO assign + petition + feedback |

> Data-analy **đề xuất** controlHint. Design **chốt** control-map. SA **chốt** Schema handover/pause · petition · workOrderId · feedback.  
> Nhãn UI: `useFormOptions()` / copy key — **cấm** hardcode tiếng Việt trên form.  
> **Cấm** nhét màn vào MFE desktop · **cấm** iOS/Android native · **cấm** tọa độ mẫu.

## Sources

| Source | Path | note |
|--------|------|------|
| CTX | `docs/context/features/web-rmms-mobile-d.md` | created this run · hash gate |
| Screens D | `docs/plan/web-rmms-mobile/IMPLEMENT-SCREENS.md` | TD-06 · TK-03 assign · TK-05 feedback · TK-06 |
| Gap | `GAP-TUAN-DUONG-TUAN-KIEM.md` | GAP-TK-04 sổ kiến nghị · đợt D |
| WO cite | `docs/plan/web-rmms-mobile/SCREENS.md` | `CreateWorkOrderRequest` Live |
| Peer A/B/C | CTX + `_data-analy/...-a/b/c-*` | sessions · journal · findings |
| BE Live | `PUT patrol/sessions/{id}` · `POST maintenance/work-orders` | status ca · WO |
| BE Mới | handover/pause · petition · feedback · workOrderId | Schema **trước** form |
| DOMAIN-MAP | Patrol · Maintenance | SA thêm slug `web-rmms-mobile-d` · **cấm ERP.*** |

## Screens đợt D (ids)

| id | route | surface |
|----|-------|---------|
| TD-06 | `/field/tuan-duong/ket-ca` | form 1-of-3 action + Lưu PUT |
| TK-03 | `/field/tuan-kiem/phieu/moi` | **nút** Giao BDTX (delta D trên form C) |
| TK-05 | `/field/tuan-kiem/phieu/:id` | khối **Phản hồi BDTX** (delta D) |
| TK-06 | `/field/tuan-kiem/kien-nghi` · `/moi` | list + form kiến nghị |

**Out of D:** TK-07 · track GPS liên tục · native.

**Peer delta:** TD-05 scope `bdtx`→WO · `vuot-bdtx`→`kien-nghi-khu`.

## ControlHint inventory (đợt D)

| uiField | screen | controlHint | catalogKind / notes |
|---------|--------|-------------|---------------------|
| actionKind | TD-06 | Radio | `ket-ca` \| `ban-giao` \| `tam-dung` · **một** chọn |
| summaryDone | TD-06 | Text RO | số dòng journal `xong` / chưa (peer B) |
| openLinesList | TD-06 | List RO | dòng chưa xong · **không** xóa |
| handoverNote | TD-06 | TextArea | **required** nếu bàn giao |
| handoverOpenIds | TD-06 | Chip/List | id dòng chưa xong kèm note |
| receiverName | TD-06 | Text/Lookup | profile cùng đơn vị nếu có · else tay + GAP |
| pauseReason | TD-06 | Dropdown | 5 keys · **required** nếu tạm dừng |
| saveSession | TD-06 | Button | `PUT sessions/{id}` · Status Live · handover/pause → Schema cột (hoặc Note tạm chốt 1 format) |
| cancel | TD-06 | Button | về TD-01 · không ghi |
| assignWo | TK-03 | Button | sau có id: `POST maintenance/work-orders` · IncidentId trống · Title=code · DueAt=hạn · lưu `workOrderId` · status `da-giao` |
| workOrderId | TK-03/05 | Text RO | sau assign |
| feedbackQty | TK-05 | Text | khối lượng thực hiện |
| feedbackQuality | TK-05 | Radio | `dat` \| `chua-dat` |
| feedbackAt | TK-05 | DateTime | thời điểm |
| feedbackMedia | TK-05 | FileMulti | ảnh sau |
| feedbackNote | TK-05 | TextArea | ghi chú |
| saveFeedback | TK-05 | Button | `POST …/feedback` → status `cho-kiem-tra` |
| petitionList | TK-06 | List cards | `GET patrol/petitions` |
| createPetition | TK-06 | Button | → `/moi` |
| senderUnit | TK-06 | Text | profile / đơn vị BDTX · **required** |
| route / km | TK-06 | Text | **required** |
| content | TK-06 | TextArea | **required** |
| petitionKind | TK-06 | Dropdown | 5 keys |
| getGps | TK-06 | Button | hiện trường · accuracy |
| lat/lng/accuracyM | TK-06 | GPS | deny + không mặt → cho Lưu **không** tọa độ + flag «không có mặt» · **cấm** fake |
| savePetition | TK-06 | Button | POST · status `moi` |
| openFinding | TK-06 | Button | → TK-03 nguồn `kien-nghi` |
| closePetition | TK-06 | Button | chỉ khi phiếu liên kết `xong` hoặc lý do đóng tay |
| emptyHint | TK-06 | EmptyState | copy key |

## Filter / grid (desktop HARD)

| | |
|--|--|
| LinErpListFilterBar / DES-GRID-* | **N/A** — phone Field · **không** Kind B desktop grid |
| TK-06 list | cards phone · **cấm** clone ERP filter bar |

## GPS

| Màn | Rule |
|-----|------|
| TD-06 | **không** GPS |
| TK-03 assign | không bắt GPS mới (GPS lúc tạo phiếu = peer C) |
| TK-05 feedback | ảnh sau · GPS **không** HARD trên feedback (IMPLEMENT không bắt) |
| TK-06 | GPS nếu hiện trường · không mặt → lưu không tọa độ + ghi · **cấm** mẫu |

## API — Live vs Mới

| Method | Path | Live? | Note |
|--------|------|-------|------|
| PUT | `patrol/sessions/{id}` | **Live** | Status `Hoàn thành` / giữ `Đang tuần` |
| — | session handover/pause columns | **Mới** | Schema session hoặc bảng handover · Note tạm 1 format đến Schema |
| POST | `maintenance/work-orders` | **Live** | Giao BDTX · lưu `workOrderId` trên finding/journal |
| POST | `patrol/findings/{id}/feedback` | **Mới** | Schema finding feedback |
| GET\|POST | `patrol/petitions` | **Mới** | `Schema_PatrolPetition` · **không** inbox |
| — | `workOrderId` trên finding/journal | **Mới** cột | pair trước form |

**Schema trước form (HARD):** handover/pause · petition · feedback · workOrderId.

## UNCLEAR

| id | Issue | Action |
|----|-------|--------|
| UNCLEAR-HANDOVER-COL | Cột session vs bảng handover · format Note tạm | SA chốt Schema 1 lần · FE/BE cùng format |
| UNCLEAR-PAUSE-STATUS | Pause có Status riêng hay flag trên `Đang tuần` | SA · IMPLEMENT: tạm dừng không tính thiếu lượt |
| UNCLEAR-PETITION-SCHEMA | Chưa có `Schema_PatrolPetition` Live | SA entity+schema **trước** form |
| UNCLEAR-FEEDBACK-DTO | Body feedback finding chưa DTO Live | SA chốt · pair C finding |
| UNCLEAR-WO-LINK | workOrderId trên finding vs journal-line | SA · IMPLEMENT cả hai surface |
| UNCLEAR-RECEIVER-API | User cùng đơn vị cho bàn giao | GAP nếu chưa có · Text tay |
| UNCLEAR-DOMAIN-SLUG | DOMAIN-MAP row `web-rmms-mobile-d` | SA thêm → Patrol (+ Maintenance cite) |

## Handoff

| Role | Dùng |
|------|------|
| PO | TD-06/TK-03/05/06 DoD · Schema-before-form · useFormOptions · no inbox · WO Live |
| Design | Phone 430 · zones TD-06 · TK-03 assign · TK-05 feedback · TK-06 · no desktop grid |
| SA | Schema handover/pause · petition · feedback · workOrderId · **cấm** ERP.* |
| TL/Dev | Wire Mobile MFE only · pair schema trước UI submit · PUT Live status |
| QA | GPS deny TK-06 · no fake coords · no desktop · queue qldb |

## Version meta

| skillVersion | schemaVersion | workflowVersion | rulesVersion |
|--------------|---------------|-----------------|--------------|
| 2026.09.05.03 | 1 | 2026.09.19.02 | 2026.09.25.2 |
