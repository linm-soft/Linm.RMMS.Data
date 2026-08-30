# Real-data bind — estimate (mobile)

| | |
|---|---|
| feature | `estimate` |
| prefix | `mobile-bff/api/v1` |
| sameMobile | yes · proxy AiVision + Maintenance + Incident |
| changeScope | `edit_page` |
| taskId | `task_b0b56370` |

Skill: `example/real-data-bind.md` · **GAP-MOB-REAL-01**

## § Delta Current vs New (`edit_page`)

| ID | Current | New |
|----|---------|-----|
| GAP-MOB-EST-DATA-01 | Native toast · no bind | §B paths khớp `estimate-bff-endpoints.md` |
| GAP-MOB-EST-REAL-01 | — | Prefill SC + qty/giá từ estimates · Giao việc = POST WO |
| GAP-MOB-EST-SIMP-01 | Web multi-line | Mobile 1 row → `Lines[0]` |

Giữ web real-data / PO artifacts — **không** xóa.

## §A — Nguồn

| sourceKind | sourceCite | empty | error |
|------------|------------|-------|-------|
| `api` | `AiVisionEstimatesController` · `WorkOrdersController` · `IncidentsController` | Chặn Giao việc nếu thiếu assignee / incidentId | Toast lỗi · **cấm** fake CV code |
| `nav` | mnt-list / incident-create / incident-detail args | Banner thiếu SC · chặn submit | Keep form |
| `derived` | qty × unitPrice · now+slaHours | total/due empty until qty+price | **cấm** hardcode success |
| `demo` | SSOT rows dưới § Demo | fallback **chỉ** khi API fail + offline DEFER | label empty state |

## §B — Bind field (HARD · khớp BFF table)

| uiField | Label | controlHint | catalogKind | GET / write | write field | sameMfe | sameMobile |
|---------|-------|-------------|-------------|-------------|-------------|---------|------------|
| fromIncident | Từ sự cố | ListRow readonly | — | `GET incident/incidents/{id}` · nav | display Code · Title · Route | gap | yes |
| assetType | Loại tài sản | ListRow readonly | — | incident / asset label | display | gap | yes |
| assignee | Giao cho * | TextField | — | form → assign + WO | `AssigneeName` · opt `TeamName` | gap | yes |
| qty | Khối lượng | NumberField | — | `PUT/POST draft` Lines | `Lines[0].Qty` | gap | yes |
| unitPrice | Đơn giá | MoneyField | — | same | `Lines[0].UnitPrice` | gap | yes |
| totalAmount | Thành tiền | TextField readonly | — | derived / `TotalAmount` | display | gap | yes |
| slaHours | Thời hạn xử lý (giờ) | TextField readonly | — | local default 24 | `CreateWorkOrderRequest.SlaHours` | gap | yes |
| dueAt | Hạn xử lý | TextField readonly | — | local now+sla | `DueAt` | gap | yes |
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
| Total / Due | local derived | qty/price/sla edit | — | readonly fields |

## §F — Handoff

| Role | Dùng packet |
|------|-------------|
| PO | DoD «màn mở = data thật» · § Delta · GAP pack/simp/assignee/WO/SLA |
| Design | control-map khớp §B · dual parity DES-MOB-EST |
| SA | giữ path đã cite · **cấm** Step 4b ở analy |
| Dev iOS + Android | cùng §B · prefix mobile-bff · replace toast stub |

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
- Gộp web Kind B list / multi-line toolbar / mnt-chat  

## Version meta

| Field | Value |
|-------|-------|
| skillId | agent-data-analy-mobile |
| skillVersion | 2026.08.25.01 |
| schemaVersion | 2 |
| workflowVersion | 2026.08.25.01 |
| rulesVersion | 2026.08.25.2 |
| generatedAt | 2026-08-29T04:20:00.000Z |
| versionGate | rechecked |
| contentHash | sha256:estimate-mobile-real-data-20260829 |
| taskId | `task_b0b56370` |

---
<!-- Version meta: skillId=agent-data-analy-mobile skillVersion=2026.08.25.01 schemaVersion=2 workflowVersion=2026.08.25.01 rulesVersion=2026.08.25.2 versionGate=rechecked -->
