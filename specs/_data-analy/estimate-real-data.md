# Real-data bind — estimate (mobile)

| | |
|---|---|
| feature | `estimate` |
| prefix | `mobile-bff/api/v1` |
| sameMobile | yes · proxy AiVision + Maintenance + Incident |
| changeScope | `edit_page` |
| taskId | `task_210a31d6` |
| generatedAt | `2026-09-01T14:28:40.000Z` |

Skill: `example/real-data-bind.md` · **GAP-MOB-REAL-01**

## § Delta Current vs New (`edit_page`)

| ID | Current | New |
|----|---------|-----|
| **GAP-MOB-EDIT-01** | Bind OK · UI label = placeholder-only (`LinmTextField` title) | **UI-only** · labelHeader above 6 fields · **không** đổi §B path / write field |
| GAP-MOB-EST-DATA-01 | Bound | **giữ** §B khớp BFF |
| GAP-MOB-EST-REAL-01 | Prefill + POST WO | **giữ** |
| GAP-MOB-EST-SIMP-01 | 1 row → `Lines[0]` | **giữ** |

Giữ web real-data / prior mobile PO-Design — **không** xóa. API/DTO **unchanged** this turn.

## §A — Nguồn

| sourceKind | sourceCite | empty | error |
|------------|------------|-------|-------|
| `api` | `AiVisionEstimatesController` · `WorkOrdersController` · `IncidentsController` | Chặn Giao việc nếu thiếu assignee / incidentId | Toast lỗi · **cấm** fake CV code |
| `nav` | mnt-list / incident-create / incident-detail args | Banner thiếu SC · chặn submit | Keep form |
| `derived` | qty × unitPrice · now+slaHours | total/due empty until qty+price | **cấm** hardcode success |
| `demo` | SSOT rows dưới § Demo | fallback **chỉ** khi API fail + offline DEFER | label empty state |
| `ux` | demo `.field > label` | — | **GAP-MOB-EDIT-01** · header always on |

## §B — Bind field (HARD · khớp BFF table)

| uiField | Label | controlHint | catalogKind | GET / write | write field | sameMfe | sameMobile |
|---------|-------|-------------|-------------|-------------|-------------|---------|------------|
| fromIncident | Từ sự cố | ListRow readonly | — | `GET incident/incidents/{id}` · nav | display Code · Title · Route | gap | yes |
| assetType | Loại tài sản | ListRow readonly | — | incident / asset label | display | gap | yes |
| assignee | Giao cho * | TextField + **labelHeader** | — | form → assign + WO | `AssigneeName` · opt `TeamName` | gap | yes |
| qty | Khối lượng | NumberField + **labelHeader** | — | `PUT/POST draft` Lines | `Lines[0].Qty` | gap | yes |
| unitPrice | Đơn giá | MoneyField + **labelHeader** | — | same | `Lines[0].UnitPrice` | gap | yes |
| totalAmount | Thành tiền | TextField readonly + **labelHeader** | — | derived / `TotalAmount` | display | gap | yes |
| slaHours | Thời hạn xử lý (giờ) | TextField readonly + **labelHeader** | — | local default 24 | `CreateWorkOrderRequest.SlaHours` | gap | yes |
| dueAt | Hạn xử lý | TextField readonly + **labelHeader** | — | local now+sla | `DueAt` | gap | yes |
| btnDraft | Lưu nháp | SecondaryButton | — | `POST ai-vision/estimates/{id}/draft` | UpdateEstimateRequest | gap | yes |
| btnAssign | Giao việc | PrimaryButton | — | `POST maintenance/work-orders` (+ opt assign + confirm) | CreateWorkOrderRequest | gap | yes |
| seed | (open) | — | — | `POST ai-vision/estimates/from-incident/{id}` | EstimateDto | gap | yes |

§B path **khớp** `estimate-bff-endpoints.md` — **không** invent `api/v1/estimate` / `ai-estimate`.

## §C — Catalog

| catalogKind | search/list API | seed/import cite | Cấm |
|-------------|-----------------|------------------|------|
| unit / line seed | `GET ai-vision/estimates/init-data` · from-incident seed | live UnitCatalog | Dropdown cứng không cite |
| WorkType | `GET maintenance/work-orders/init-data` | maintenance CTX | Invent WorkType string ngoài init |
| Assignee staff | — | free text P1 | Invent `api/v1/.../staff` — **GAP-MOB-EST-ASSIGNEE-01** |
| SLA policy | — | default 24h | Invent SLA API P1 |

## §D — Map / vẽ

`map: none` — không embed map trên `#sc-estimate`.

## §E — Progress / vòng đời

| stateField | Nguồn | Ai đổi | API | UI |
|------------|-------|--------|-----|-----|
| Estimate `Status` | `rmms` estimates | draft / confirm | draft · confirm | toast nháp |
| WO `Status` | `rmms_work_orders` | user «Giao việc» | POST work-orders | toast CV-* · back mnt-list |
| Incident `AssigneeName` | incidents | user «Giao việc» | POST assign | sync optional |
| Total / Due | local derived | qty/price/sla edit | — | readonly + **labelHeader** |
| Field labels | demo SSOT | Design/Dev | — | **GAP-MOB-EDIT-01** |

## §F — Handoff

| Role | Dùng packet |
|------|-------------|
| PO | DoD labelHeader · § Delta GAP-MOB-EDIT-01 · giữ prior GAP closed |
| Design | control-map + prototype dual · label 13 above · demo-parity |
| SA | **không** Step 4b · paths giữ |
| Dev iOS + Android | render labelHeader · **cấm** placeholder-only · cùng §B |
| QA | assert label visible khi field có value |

## Demo rows SSOT (fallback)

| Field | Value |
|-------|-------|
| Từ sự cố | SC-2401 · Ổ gà · QL.1 Km 1556+040 |
| Loại tài sản | Mặt đường |
| Giao cho | Nguyễn Văn A · Tổ tuần đường |
| Khối lượng | 12.5 |
| Đơn giá | 850.000 |
| Thành tiền | 10.625.000 |
| Thời hạn (giờ) | 24 |
| Hạn xử lý | 19/08/2026 08:00 |
| Toast giao việc | Đã giao việc · CV-20260818-0003 · thời hạn 24 giờ |
| Toast nháp | Đã lưu nháp ước lượng |

## § Cấm

- Watermark / «bản Gói N» / process text  
- Fake CV code khi POST fail  
- Invent mobile-only path `estimate` / `ai-estimate`  
- Bind `mfeStdUrl`  
- Skip §B ≠ BFF → **GAP-MOB-REAL-01**  
- Gộp «Giao việc» / «Lưu nháp» thành sibling queue → **GAP-MOB-ACT-07**  
- Placeholder-only label khi có value → **GAP-MOB-EDIT-01**  
- Gộp web Kind B list / multi-line toolbar / mnt-chat  

## Version meta

| Field | Value |
|-------|-------|
| skillId | agent-data-analy-mobile |
| skillVersion | 2026.08.25.01 |
| schemaVersion | 2 |
| workflowVersion | 2026.08.29.1 |
| rulesVersion | 2026.08.29.5 |
| generatedAt | 2026-09-01T14:28:40.000Z |
| versionGate | rechecked |
| contentHash | sha256:estimate-mobile-real-data-20260901-edit01 |
| ctxContentHash | sha256:b67ee5a9cc9b69577496bf04aef9446d483410141ca6c27b98f792841ddb5ece |
| demoContentHash | sha256:394ab44597648f04b25e6d58476378c16141feb53d3b58d39923b3defcff8328 |
| taskId | `task_210a31d6` |

---
<!-- Version meta: skillId=agent-data-analy-mobile skillVersion=2026.08.25.01 schemaVersion=2 workflowVersion=2026.08.29.1 rulesVersion=2026.08.29.5 versionGate=rechecked taskId=task_210a31d6 -->
