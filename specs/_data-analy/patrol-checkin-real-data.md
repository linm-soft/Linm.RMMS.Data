# Real-data bind — patrol-checkin

| | |
|---|---|
| feature | `patrol-checkin` |
| prefix | `mobile-bff/api/v1` |
| sameMobile | yes · proxy Patrol domain |
| taskId | `task_4ef69f42` |

Skill: `example/real-data-bind.md` · **GAP-MOB-REAL-01**

## §A Source / Resource

| Resource | Entity | Key |
|----------|--------|-----|
| Patrol session | `PatrolSession` / `rmms_patrol_sessions` | `Id` Guid · `Code` PAT-* |
| Check-in point | Kind E `…/check-ins` | sessionId + checkInId (khi BE live) |

CTX `patrol-checkin.md` · BFF table `patrol-checkin-bff-endpoints.md` · demo `#sheet-checkin` · `DES-MOB-PAT-CHECKIN-SHEET` · `DES-MOB-LOC-MISMATCH` · `DES-MOB-CI-DETAIL`.

## §B Path = BFF table

| UI zone | Bind | Method · Path |
|---------|------|----------------|
| Tuyến / lý trình | `Route` active session | `GET patrol/sessions` (filter Đang tuần) |
| Điểm kế hoạch | plan label từ session Note / demo SSOT đến khi Kind E plan-points live | GET sessions · fallback demo |
| CheckInCount toast | `CheckInCount` (+1 local sau save) | GET sessions |
| Định vị ghim | `LocationFix` lat/lng/accuracyM | Device GPS · **cấm** fake |
| Cách điểm KH / banner | haversine vs plan point · matchOk | Device + plan coords |
| Nội dung | local form → POST body `content` | `POST patrol/sessions/{id}/check-ins` |
| Ảnh | local URIs → body / offline queue | Device · sync P2 |
| Detail rows | last saved / demo | GET khi BE list check-ins live · else demo |

§B path **khớp** BFF table — **không** invent `patrol-checkin`.

## §C Map DTO → UI

| dtoField | UI |
|----------|-----|
| `Route` | field Tuyến / lý trình · toast segment |
| `Code` | gắn ca (toast / detail meta) |
| `CheckInCount` | toast «điểm tuần thứ N» |
| `Status` | chỉ dùng session Đang tuần |
| `lat`·`lng`·`accuracyM` (device / POST) | Định vị ghim tự động |
| `distanceToPlanM` · `matchOk` | Cách điểm KH · banner màu |
| `content` | TextArea Nội dung |
| `photos[]` | PhotoRow filled slots |

## §D Map overlay

N/A trên sheet — entry từ `patrol-map` / pin `.here` đã có trên sibling.

## §E Progress

| Case | Behavior |
|------|----------|
| GET sessions fail/empty | Prefill demo SSOT `QL.1 · Km 1561+134` · `Km 1561+134 · Phước Dinh` · GPS vẫn chạy |
| GPS deny | modal `DES-MOB-GPS-DENY` · **không** submit |
| Sai điểm (`matchOk=false`) | banner đỏ · disable Lưu / Ghi nhận · toast chặn |
| POST check-ins **MISSING** | P1: lưu local + toast · enqueue sync `patrol-offline` · **GAP-MOB-BFF-01** stamp · **cấm** fake 200 |
| Offline | sheet mở · queue local |

## §F Cấm

- Watermark / «bản Gói N» / process text  
- Fake lat/lng  
- Invent mobile-only path  
- Bind `mfeStdUrl`  
- Skip §B ≠ BFF → **GAP-MOB-REAL-01**  
- Gộp submit thành sibling queue → **GAP-MOB-ACT-07**

## Demo rows SSOT (fallback sheet)

| Field | Value |
|-------|-------|
| Điểm kế hoạch | Km 1561+134 · Phước Dinh |
| Tuyến / lý trình | QL.1 · Km 1561+134 |
| Định vị | 11.6030, 109.0160 · ±4 m |
| Cách điểm KH (ok) | 18 m · Đúng điểm |
| Cách điểm KH (sai) | 86 m · Sai điểm · gần Km 1556+000 |
| Nội dung | Mặt đường khô, lan can đạt |
| Toast ok | Đã ghi điểm tuần · không đổi vị trí / điểm tuần thứ 3 |

## Version meta

| Field | Value |
|-------|-------|
| skillId | agent-data-analy-mobile |
| skillVersion | 2026.08.25.01 |
| schemaVersion | 2 |
| workflowVersion | 2026.08.25.01 |
| rulesVersion | 2026.08.25.2 |
| generatedAt | 2026-08-28T19:52:00.000Z |
| versionGate | rechecked |
| contentHash | sha256:patrol-checkin-real-data-20260828 |

---
<!-- Version meta: skillId=agent-data-analy-mobile skillVersion=2026.08.25.01 schemaVersion=2 workflowVersion=2026.08.25.01 rulesVersion=2026.08.25.2 versionGate=rechecked -->
