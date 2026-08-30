# Real-data bind — mnt-progress (mobile)

| | |
|---|---|
| feature | `mnt-progress` |
| prefix | `mobile-bff/api/v1` |
| sameMobile | yes · proxy Maintenance domain |
| changeScope | `new_page` |
| taskId | `task_1867f892` |

Skill: `example/real-data-bind.md` · **GAP-MOB-REAL-01**

## § Delta Current vs New (`new_page`)

| ID | Current | New |
|----|---------|-----|
| GAP-MOB-MNT-PROG-DATA-01 | Native/demo toast · no bind | §B paths khớp `mnt-progress-bff-endpoints.md` |
| GAP-MOB-MNT-PROG-REAL-01 | — | Prefill WO · POST progress · opt complete |
| GAP-MOB-MNT-PROG-MEDIA-01 | — | Camera UX · body chưa MediaUrl |
| GAP-MOB-MNT-PROG-GPS-01 | — | Device GPS · Note embed · cấm fake |

## §A — Nguồn

| sourceKind | sourceCite | empty | error |
|------------|------------|-------|-------|
| `api` | `WorkOrdersController` progress · complete · GetById | Chặn submit nếu thiếu `id` / % invalid | Toast lỗi · **cấm** fake ok |
| `nav` | mnt-list card args (`id` · title · status · progress) | Banner thiếu WO · chặn submit | Keep form |
| `device` | Camera · CL/Fused GPS | GPS deny modal · photo optional P1 | **cấm** fake lat/lng |
| `demo` | Card «Vá mặt đường» SSOT dưới § Demo | fallback prefill **chỉ** khi API fail + Design gate | empty state |

## §B — Bind field (HARD · khớp BFF table)

| uiField | Label | controlHint | catalogKind | GET / write | write field | sameMfe | sameMobile |
|---------|-------|-------------|-------------|-------------|-------------|---------|------------|
| woTitle | (tên CV) | Text readonly | — | nav / `GET …/{id}` | display `title` | gap | yes |
| woCode | WO-* | Text readonly | — | same | display `code` | gap | yes |
| woStatus | Tình trạng hiện tại | Badge readonly | — | same | display `status` → VN | gap | yes |
| progressPct | Tiến độ (%) | NumberField | — | form → POST progress | `ProgressPercent` | gap | yes |
| note | Ghi chú | MultilineText | — | form → POST | `Note` (+ GPS text) | gap | yes |
| photos | Ảnh hiện trường | PhotoRow | — | device · opt uploads | **không** progress body P1 | gap | yes |
| locationRow | Vị trí đã chốt | ListRow | — | device GPS | embed → `Note` | gap | yes |
| btnUpdate | Cập nhật | PrimaryButton | — | `POST …/{id}/progress` | ProgressWorkOrderRequest | gap | yes |
| btnComplete | (khi 100%/done) | same CTA path | — | `POST …/{id}/complete` | CompleteWorkOrderRequest | gap | yes |

§B path **khớp** `mnt-progress-bff-endpoints.md` — **không** invent `api/v1/mnt-progress`.

## §C — Catalog

| catalogKind | search/list API | seed/import cite | Cấm |
|-------------|-----------------|------------------|------|
| Status labels | `GET maintenance/work-orders/init-data` | live Statuses | Hardcode lệch mnt-list map không cite GAP |
| WorkType | init-data | live | **OUT** edit trên slug này |
| Media catalog | — | device / uploads | Invent progress MediaUrl trước SA |

## §D — Map / vẽ

`map: none` — không embed map trên `#sc-mnt-progress`. GPS = list row text only.

## §E — Progress / vòng đời

| stateField | Nguồn | Ai đổi | API | UI |
|------------|-------|--------|-----|-----|
| `ProgressPercent` | `rmms_work_orders` | user «Cập nhật» | POST progress | field + toast % |
| `Status` | same | service: `new`→`in_progress` | POST progress | badge refresh |
| `Status=done` | same | user hoàn thành / 100% | POST complete | toast · back list |
| `Note` | same | user | progress / complete | textarea |
| GPS / photo | device | user | — / uploads opt | location · PhotoRow |

## §F — Handoff

| Role | Dùng packet |
|------|-------------|
| PO | DoD «màn mở = data thật» · § Delta · GAP SCR/MEDIA/GPS/LABEL/PACK/DONE |
| Design | control-map khớp §B · dual `#sc-mnt-progress` · replace toast |
| SA | giữ path đã cite · **cấm** Step 4b / migration ở analy |
| Dev iOS + Android | cùng §B · prefix mobile-bff · replace toast stub |

## Demo rows SSOT (fallback · từ mnt-list card 1)

| Field | Value |
|-------|-------|
| Title | Vá mặt đường |
| Assign | Hạt trưởng VP-IV.1 giao việc cho Nguyễn Văn A · Tổ tuần đường |
| Meta | Từ sự cố SC-2401 · QL.1 Km 1556+080 |
| Status | Chờ xử lý (`new`) |
| ProgressPct default | `0` hoặc nav |
| Note placeholder | Mô tả tiến độ / ghi chú hiện trường… |
| Toast ok | Đã cập nhật tiến độ · {n}% |
| GPS deny | reuse `DES-MOB-GPS-DENY` |

## § Cấm

- Watermark / «bản Gói N» / process text  
- Fake 200 / fake % khi POST fail  
- Fake lat/lng  
- Invent mobile-only path `mnt-progress`  
- Skip §B path ≠ BFF table → **GAP-MOB-REAL-01**  
- Bind web `mfeStdUrl`  

## Version meta (REQUIRED)

| Field | Value |
|-------|-------|
| skillId | agent-data-analy-mobile |
| skillVersion | 2026.08.25.01 |
| schemaVersion | 2 |
| workflowVersion | 2026.08.25.01 |
| rulesVersion | 2026.08.25.2 |
| generatedAt | 2026-08-29T06:00:18.000Z |
| versionGate | rechecked |
| contentHash | sha256:mnt-progress-mobile-real-data-20260829 |
| taskId | `task_1867f892` |

---
<!-- Version meta: skillId=agent-data-analy-mobile skillVersion=2026.08.25.01 schemaVersion=2 workflowVersion=2026.08.25.01 rulesVersion=2026.08.25.2 versionGate=rechecked -->
