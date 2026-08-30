# Real-data bind — vis-capture

| | |
|---|---|
| feature | `vis-capture` |
| prefix | `mobile-bff/api/v1` |
| sameMobile | yes · proxy AiVision + Incident + Patrol |
| taskId | `task_086ba802` |

Skill: `example/real-data-bind.md` · **GAP-MOB-REAL-01**

## §A — Nguồn

| sourceKind | sourceCite | empty | error |
|------------|------------|-------|-------|
| `api` | CTX `vis-capture.md` · `AiVisionOpsController` · `IncidentsController` · uploads | Chặn Gắn nếu thiếu detect / GPS · toast | Toast lỗi · **cấm** fake SC / fake class |
| `geo` | Device GPS | Modal `DES-MOB-GPS-DENY` · chặn detect nếu chưa chốt hoặc > 30 m | Deny modal / toastGpsBlock |
| `derived` | Detect DTO → Phân loại · Mức · Loc | Giữ empty rows / «Chưa có ảnh» | **cấm** fake nhận diện |
| `catalog` | — | n/a P1 | — |

## §B — Bind field (HARD · khớp BFF table)

| uiField | Label | controlHint | catalogKind | GET / write | write field | sameMfe | sameMobile |
|---------|-------|-------------|-------------|-------------|-------------|---------|------------|
| photos | Ảnh hiện trường | PhotoRow | — | device · optional `POST ai-vision/uploads/init` + PUT object + complete | media / ImageBase64 | gap | yes |
| rowLoc | Vị trí đã chốt | ListRow readonly | — | GPS + optional `GET patrol/sessions` | `RouteName` · `KmStart` · `HasGps` | gap | yes |
| rowAcc | Sai số định vị | ListRow readonly | — | device `AccuracyM` | Detect `AccuracyM` | gap | yes |
| rowClass | Phân loại | ListRow readonly | — | `POST ai-vision/detect` | `DefectClass` display | gap | yes |
| rowSev | Mức | ListRow + Badge | — | same detect | `Severity` | gap | yes |
| btnAttach | Gắn sự cố | PrimaryButton | — | `POST incident/incidents` | CreateIncidentRequest + `DetectionId` | gap | yes |
| btnSkip | Bỏ qua | SecondaryButton | — | local dismiss | — | n/a | yes |

§B path **khớp** `vis-capture-bff-endpoints.md` — **không** invent `vis-capture`.

## §C — Catalog

| catalogKind | search/list API | seed/import cite | Cấm |
|-------------|-----------------|------------------|------|
| severity display | closed set từ detect DTO | demo badge map | Invent API severity riêng |
| defect class | server detect | `AiVisionDetectionDto.DefectClass` | Hardcode class list ngoài detect |

## §D — Map / vẽ

`map: none` — không embed map trên `#sc-vis-capture`. Loc = GPS + label Route/Km.

## §E — Progress / vòng đời

| stateField | Nguồn | Ai đổi | API | UI |
|------------|-------|--------|-----|-----|
| GPS fix | device | OS | — | rowLoc · rowAcc · gate 30 m |
| Detection | AiVision | after photo+GPS | POST detect | rowClass · rowSev |
| Incident attach | `rmms_incidents` | user «Gắn sự cố» | POST incidents | toast «Đã gắn sự cố» · back list |
| Skip | local | user «Bỏ qua» | — | clear / nav list |
| Offline | local store | network fail | sync `patrol-offline` | toast lỗi · **cấm** fake |

## §F — Handoff

| Role | Dùng packet |
|------|-------------|
| PO | DoD «màn mở = data thật» · GAP pack/dual/GPS gate |
| Design | control-map khớp §B · dual parity Android |
| SA | giữ path đã cite · Step 4b detect harden nếu Signed |
| Dev iOS + Android | cùng §B · prefix mobile-bff |

## Demo rows SSOT (fallback)

| Field | Value |
|-------|-------|
| Loc | QL.1 · Km 1556+050 |
| Accuracy | ±4 m |
| Phân loại | Nứt dọc |
| Mức | Cao |
| Toast ok | Đã gắn sự cố |
| Gate | Không gửi detect nếu thiếu GPS hoặc sai số > 30 m |

## § Cấm

- Watermark / «bản Gói N» / process text  
- Fake lat/lng · gõ tay tọa độ  
- Invent mobile-only path `vis-capture`  
- Bind `mfeStdUrl`  
- On-device vision model  
- Skip §B ≠ BFF → **GAP-MOB-REAL-01**  
- Gộp «Gắn sự cố» thành sibling queue → **GAP-MOB-ACT-07**  
- Gộp `cam-patrol` / `det-hitl` / `incident-create`  

## Version meta

| Field | Value |
|-------|-------|
| skillId | agent-data-analy-mobile |
| skillVersion | 2026.08.25.01 |
| schemaVersion | 2 |
| workflowVersion | 2026.08.25.01 |
| rulesVersion | 2026.08.25.2 |
| generatedAt | `2026-08-29T08:28:20.000Z` |
| versionGate | rechecked |
| contentHash | sha256:vis-capture-real-data-20260829 |
| taskId | `task_086ba802` |

---
<!-- Version meta: skillId=agent-data-analy-mobile skillVersion=2026.08.25.01 schemaVersion=2 workflowVersion=2026.08.25.01 rulesVersion=2026.08.25.2 versionGate=rechecked -->
