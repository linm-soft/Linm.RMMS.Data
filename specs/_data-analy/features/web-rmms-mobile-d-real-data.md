# Data-analy — real-data bind — web-rmms-mobile-d

| Field | Value |
|-------|-------|
| feature | `web-rmms-mobile-d` |
| title | Đợt D — kết ca, giao việc, sổ kiến nghị |
| packKind | `list` |
| changeScope | `edit_page` |
| status | `done` |
| taskId | `task_0ba23800` |
| prefix API | `api/v1/patrol` · `api/v1/maintenance` |
| prefix BFF web (cite) | `web-bff/api/v1/patrol` · `web-bff/api/v1/maintenance` |
| prefix BFF mobile (plan) | `mobile-bff/api/v1` · cùng `{resource}` |
| beRepo | `D:/AI-QLBD/Linm.RMMS.WebService` · **cấm ERP.*** |
| uiRepo | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Mobile` |
| mfeStdUrl | `http://localhost:9301/web-rmms-mobile-d` |
| domain | **Patrol** (+ **Maintenance** WO · Auth · Files · peer A–C) |
| contentHash | `sha256:7ea5a5b9a00060f5de09af3b8e3688b39fd566383859a8e73748b9d3885ea034` |
| skillVersion | `2026.09.05.03` |
| schemaVersion | `2` |
| workflowVersion | `2026.09.19.02` |
| rulesVersion | `2026.09.25.2` |
| analyzedAt | `2026-09-25T09:28:04.000Z` |
| demo | **N/A** · **cấm** demo-json / in-app mock SSOT / fake GPS |

## § Scope đợt D

| In | Out |
|----|-----|
| TD-06 kết ca / bàn giao / tạm dừng | TK-07 (E) |
| TK-03 nút Giao BDTX · TK-05 feedback · TK-06 petitions | stub fake petition / seed demo |
| PUT sessions **Live** Status · POST WO **Live** | invent WO trong Patrol |
| Schema Mới: handover/pause · petition · feedback · workOrderId | `notification/inbox` làm sổ KN |
| GPS HARD rules (TK-06 hiện trường) | fake lat/lng · desktop Asset |

## §A — Nguồn

| sourceKind | sourceCite | empty | error |
|------------|------------|-------|-------|
| `context` | `docs/context/features/web-rmms-mobile-d.md` | — | — |
| `plan` | `IMPLEMENT-SCREENS.md` TD-06 · TK-03 D · TK-05 feedback · TK-06 | — | SSOT màn D |
| `gap` | `GAP-TUAN-DUONG-TUAN-KIEM.md` GAP-TK-04 · đợt D | — | sổ kiến nghị ≠ inbox |
| `peer-a` | sessions Live · TD-01 hub | no active ca → chặn TD-06 | toast · **cấm** `window.alert` |
| `peer-b` | journal-lines · summary open/done | empty journal OK | Schema_B |
| `peer-c` | findings · create phiếu | no finding id → ẩn assign | Schema_C |
| `api-live` | `PUT …/patrol/sessions/{id}` · `POST …/maintenance/work-orders` | — | 4xx toast |
| `api-new` | petitions · feedback · handover cols · workOrderId | empty TK-06 list | 404 until schema · **cấm** mock SSOT |
| `entity-new` | `Schema_PatrolPetition` · session handover/pause · finding feedback/WO | — | pair **trước** form |
| `entity-parent` | `PatrolSession` · `PatrolFinding` · Maintenance WO | — | tenant / soft-delete |
| `dto-wo` | `CreateWorkOrderRequest` SCREENS.md | — | IncidentId trống · Title=code |
| `domain-map` | Patrol · Maintenance | — | **cấm ERP.*** · SA slug D |
| `auth` | `auth/profile` | — | redirect login |
| `files` | `files/init` · `object` · `commit` | — | resign fail toast |
| `geo` | `navigator.geolocation` | deny → block nút cần tọa độ · TK-06 no-face OK | **cấm** fake |
| `demo` | — | N/A | **cấm** demo SSOT |

## §B — Bind field (HARD) — đợt D

| uiField | Label (key) | controlHint | catalogKind | GET | write field | sameMfe | sameMobile |
|---------|-------------|-------------|-------------|-----|-------------|---------|------------|
| session.id | ca đang tuần | context | — | `GET …/sessions/{id}` | FK PUT | peer A | n/a |
| actionKind | việc kết ca | Radio | LOOKUP_STATIC | — | drives Status/fields | gap | n/a |
| Status | trạng thái ca | Chip | LOOKUP_STATIC | session | `Hoàn thành` if ket-ca · else `Đang tuần` | Live | n/a |
| handoverNote | nội dung bàn giao | TextArea | — | — | `handoverNote` **req** if ban-giao | Schema D | n/a |
| handoverOpenIds | dòng chưa xong | List | — | peer B open lines | ids + note | peer B | n/a |
| receiverName | người nhận | Text | — | profile/unit if API | note/field | GAP | n/a |
| pauseReason | lý do tạm dừng | Dropdown | LOOKUP_STATIC | — | `pauseReason` **req** if tam-dung | Schema D | n/a |
| openLinesSummary | tóm tắt | Text RO | — | count xong/chưa | — | peer B | n/a |
| assignWo | giao BDTX | Button | — | finding id | `POST maintenance/work-orders` | Live Maint | n/a |
| workOrderId | mã WO | Text RO | — | after POST | `workOrderId` on finding | Schema D | n/a |
| finding.status | trạng thái phiếu | Chip | LOOKUP_STATIC | detail | `da-giao` after WO · `cho-kiem-tra` after feedback | peer C | n/a |
| feedbackQty | KL thực hiện | Text | — | — | feedback body | Schema D | n/a |
| feedbackQuality | chất lượng | Radio | LOOKUP_STATIC | — | `dat`/`chua-dat` | gap | n/a |
| feedbackAt | thời điểm | DateTime | — | — | at | gap | n/a |
| feedbackMedia | ảnh sau | FileMulti | files | — | mediaIds | peer A | n/a |
| feedbackNote | ghi chú | TextArea | — | — | note | gap | n/a |
| petition.list | sổ kiến nghị | List cards | — | `GET …/petitions` **Mới** | — | n/a | n/a |
| senderUnit | người/đơn vị | Text | — | profile | **required** | auth | n/a |
| route / km | tuyến · km | Text | — | — | **required** | gap | n/a |
| content | nội dung | TextArea | — | — | **required** | gap | n/a |
| petitionKind | phân loại | Dropdown | LOOKUP_STATIC | — | kind | gap | n/a |
| lat/lng/accuracyM | GPS | GPS | geo | device | optional if no-face | geo | n/a |
| noFaceFlag | không có mặt | Checkbox/Flag | — | — | allow save w/o GPS | gap | n/a |
| petition.status | trạng thái KN | Chip | LOOKUP_STATIC | list | `moi` on create | gap | n/a |
| journal.scope | phạm vi TD-05 | Radio | LOOKUP_STATIC | peer B | `bdtx`→WO · `vuot-bdtx`→flag | peer B D | n/a |

**PUT session body (đề xuất — SA chốt):** `Status` · `handoverNote?` · `handoverOpenLineIds?` · `receiverName?` · `pauseReason?` · (Note tạm cùng format đến khi có cột).

**CreateWorkOrderRequest (Live):** `RouteName` · `WorkType` · `Status=new` · `DueAt` · `SlaHours?` · `AssigneeName?` · `TeamName?` · `IncidentId=` (trống) · `Title`=mã tồn tại · `Description?`.

**Feedback body (đề xuất):** `qtyDone` · `quality` · `at` · `mediaIds` · `note`.

**Petition body (đề xuất):** `senderUnit` · `route` · `kmText` · `content` · `kind` · `lat?` · `lng?` · `accuracyM?` · `noFace` · `status=moi` · `findingId?`.

**Cấm** ERP.* · **cấm** fake GPS · **cấm** mock petitions khi schema chưa có (empty + gap) · **cấm** dùng notification inbox làm sổ KN.

## §C — Catalog

| catalogKind | search/list API | seed/import cite | Cấm |
|-------------|-----------------|------------------|------|
| LOOKUP_STATIC | FE `useFormOptions` (action · pauseReason · petitionKind · feedbackQuality · status) | CTX + IMPLEMENT | hardcode label VN trên form |
| files | `POST files/init` → `PUT object` → `POST commit` | FileService BFF | persist full URL |
| profile | `GET auth/profile` | Auth | invent user API trong Patrol |
| sessions | `GET/PUT patrol/sessions` | Patrol Live | invent session ngoài Patrol |
| work-orders | `POST maintenance/work-orders` | Maintenance Live | invent WO ngoài Maintenance |
| findings | peer C | Patrol | assign trước khi có id |
| petitions | `GET/POST patrol/petitions` | Schema D | inbox/notification |

## §D — Map / vẽ

| Mục | Ghi |
|-----|-----|
| map | **none** trên đợt D |
| GPS | TK-06 point optional (hiện trường) · TD-06 none |

## §E — Progress / vòng đời

| stateField | Nguồn | Ai đổi | API | UI |
|------------|-------|--------|-----|-----|
| session.Status | `rmms_patrol_sessions` Live | user TD-06 | PUT sessions | ket-ca → Hoàn thành |
| session.pause/handover | Schema D Mới | user TD-06 | PUT (+cols) | radio action |
| finding.status | peer C + D | assign · feedback · recheck | POST WO · POST feedback | chip |
| phat-hien → da-giao | finding | TK-03 assign | WO Live + workOrderId | |
| da-giao → cho-kiem-tra | finding | TK-05 feedback | POST feedback | |
| petition.status | Schema D | create / close | POST petitions | list TK-06 |
| journal.workOrderId | Schema B + D | TD-05 bdtx | POST WO | peer B |

`progress: close-loop D` (session close · WO · feedback · petition).

## §F — Handoff

| Role | Packet |
|------|--------|
| PO | DoD «PUT Live status · Schema trước form · WO Live · petition ≠ inbox» · GPS TK-06 |
| Design | control-map khớp §B · phone 430 · zone TD-06 · TK-03/05/06 |
| SA | Schema handover/pause · petition · feedback · workOrderId · DOMAIN slug D · **cấm** ERP.* |
| Dev web mobile | `Linm.Web.RMMS.Mobile` · `mobile-bff` · **không** desktop Asset |
| QA | empty petition · GPS deny-vs-no-face · no fake coords · assign WO · pause required reason |

## Gaps (cite)

| id | Note |
|----|------|
| GAP-DA-MOB-D-CTX-01 | CTX `web-rmms-mobile-d.md` thiếu lúc start → tạo từ IMPLEMENT + GAP-TK-04 |
| GAP-DA-MOB-D-SCHEMA-01 | handover/pause · petition · feedback · workOrderId — **HARD** pair trước form |
| GAP-DA-MOB-D-NOTE-01 | Format Note tạm handover/pause — SA chốt 1 lần với FE |
| GAP-DA-MOB-D-RECEIVER-01 | API user cùng đơn vị bàn giao — Text tay + GAP nếu thiếu |
| GAP-DA-MOB-D-DOMAIN-01 | DOMAIN-MAP slug `web-rmms-mobile-d` — SA thêm row Patrol (+ Maintenance cite) |
| GAP-TK-04 | Sổ kiến nghị · không dùng ops/notification inbox |
| GAP-DA-MOB-D-OUT-E | TK-07 = đợt E · **cấm** stub trong D |

## Version meta

| skillVersion | schemaVersion | workflowVersion | rulesVersion |
|--------------|---------------|-----------------|--------------|
| 2026.09.05.03 | 2 | 2026.09.19.02 | 2026.09.25.2 |
