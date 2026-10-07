# Data-analy — real-data bind — web-rmms-cam-checkin

| Field | Value |
|-------|-------|
| feature | `web-rmms-cam-checkin` |
| title | Camera check-in tuần đường |
| packKind | `list` |
| changeScope | `edit_page` |
| status | `done` |
| taskId | `task_cdfedcf9` |
| prefix API | `api/v1` · resource `patrol` |
| prefix BFF web (cite) | `web-bff/api/v1/patrol` |
| prefix BFF mobile (HARD) | `mobile-bff/api/v1` · `:5202` · cùng `{resource}` |
| beRepo | `D:/AI-QLBD/Linm.RMMS.WebService` · **cấm ERP.*** |
| bffRepo | `Linm.RMMS.Mobile.Bff` · **cấm** Route mobile trên web-bff |
| uiRepo | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Mobile` |
| mfeStdUrl | `http://localhost:9301/web-rmms-cam-checkin` (alias) |
| mfeStdRoute | product `/tuan-duong/:id` · `/tuan-duong/:id/diem-tuan` |
| productRoute | `/tuan-duong/:sessionId` · `/tuan-duong/:sessionId/diem-tuan` |
| domain | **Patrol** (+ FileService cite · Auth/profile cite · peer role-gate) |
| contentHash | `sha256:2ff2873ea06c8d3d8e707c24a142432b3f1e356db42bbb006f594fc6b9f213db` |
| skillVersion | `2026.09.05.03` |
| schemaVersion | `2` |
| workflowVersion | `2026.09.19.02` |
| rulesVersion | `2026.09.27.1` |
| analyzedAt | `2026-09-30T17:18:26.000Z` |
| demo | **N/A** · **cấm** demo-json / fake GPS |
| deltaCite | `docs/plan/web-rmms-mobile/PLAN-3-VAI.md` |

## § Scope

| In | Out |
|----|-----|
| Edit CI-01/CI-02 role-gate + keep Live check-ins | `new_page` · route mới · invent CamCheckIn* |
| Tuần đường POST check-in + capture | QL_HAT write · TK/NT mở ca |
| Mobile.Bff · 430px | web-bff · ERP.* · iOS/Android · SLA 24h · Mục IV tiền · Giao việc |

## § Delta Current vs New

| Bind / UX | Current | New |
|-----------|---------|-----|
| createCheckIn | mọi sessionId mở sheet | chỉ tuần đường · BE/FE role enforce |
| CI-02 CTA | theo ca active | ẩn với QL_HAT / TK / NT |
| APIs | sessions · plan-points · policy · check-ins GET/POST | **không đổi** paths/DTO |
| offline queue | enqueueCheckIn on network fail | giữ · tuần đường only |
| BFF | `mobileApiBase()` | giữ · cấm web-bff |

## §A — Nguồn

| sourceKind | sourceCite | empty | error |
|------------|------------|-------|-------|
| `context` | `docs/context/features/web-rmms-cam-checkin.md` | — | edit_page Delta |
| `plan-3-vai` | `docs/plan/web-rmms-mobile/PLAN-3-VAI.md` | — | role matrix HARD |
| `code` | `CheckInSheet.tsx` · `PatrolDetailPage.tsx` | — | missing role gate |
| `api-session` | `GET patrol/sessions/{id}` | 404 → notFound | toast load fail |
| `api-plan` | `GET …/plan-points` | empty → banner match | catch → [] |
| `api-policy` | `GET patrol/check-in-policy` | default match off / 50m | catch → default |
| `api-checkins` | `GET …/check-ins` | empty timeline | toast |
| `api-post-checkin` | `POST …/check-ins` | — | toast · offline queue |
| `files` | FileService via RouteCapture | — | upload error toast |
| `auth-role` | cite role-gate profile caps | missing caps → deny write | — |
| `domain-map` | Patrol · peer mobile-a / patrol-map | — | **cấm ERP.*** |
| `geo` | `navigator.geolocation` | deny → banner on Lưu | **cấm** fake |
| `demo` | — | N/A | **cấm** demo SSOT |

## §B — Bind field (HARD)

| uiField | Label (key) | controlHint | catalogKind | GET | write field | sameMfe | editNote |
|---------|-------------|-------------|-------------|-----|-------------|---------|----------|
| session.id | ca | Hidden | — | route param | — | A | — |
| planPointLabel | Điểm kế hoạch | Text RO | — | plan-points nearest | `planPointLabel` | A | keep |
| currentRoute | Tuyến hiện tại / Tuyến | SearchInput | — | session routeCode | `route` | A | default kế hoạch |
| cotKm | Cột KM | NumberInput | — | detect / tay | `chainageKm` whole | A | pair offset |
| offsetM | Khoảng cách (m) | NumberInput | — | detect / tay | `chainageKm` fraction | A | pair cotKm |
| chainageLabel | Nhãn lý trình | derived | — | cot+offset | `chainageLabel` | A | stamp |
| route | Tuyến | Text RO / capture route | road-routes cite | session + capture | `route` required | A | pick via capture |
| lat/lng/accuracyM | GPS | GPS | geo | device | POST body | A | Pattern B |
| distanceToPlanM / matchOk | Cách điểm KH | Text RO | policy | client haversine | body | A | policy gate |
| content | Nội dung | TextArea | — | — | `content` optional | A | keep |
| photoLocalIds / photoPins | Ảnh | RouteCapture | files | files commit | body | A | tuần đường write |
| tapNx/Ny · objectLat/Lng | pin object | Hidden | — | capture | body | A | keep |
| save | Ghi nhận điểm tuần | Button | — | — | POST check-ins | A | role tuần đường |
| timeline.* | điểm đã ghi | List RO | — | GET check-ins | — | A | QL_HAT view |
| ctaCheckIn | CTA ghi điểm | Button | — | — | nav CI-01 | A | **hide** non-tuần-đường |
| roleCaps | quyền vai | Hidden | auth | profile | gate UI | role-gate | **new edit** |

**POST body (Live):** `planPointLabel` · `route` · `lat` · `lng` · `accuracyM` · `distanceToPlanM` · `matchOk` · `content?` · `photoLocalIds` · `photoPins` · `tapNx/Ny?` · `objectLat/Lng?` · `chainageKm?` · `chainageLabel?`.  
**Cấm** ERP.* · fake GPS · invent cam-checkin DTO · SLA hours field trên form này.

## §C — Catalog

| catalogKind | search/list API | seed/import cite | Cấm |
|-------------|-----------------|------------------|------|
| LOOKUP_STATIC | FE PATROL_LOOKUP_STATIC | mobile-a | hardcode VN nếu key có |
| sessions / check-ins | Live patrol | Patrol | invent stub |
| road-routes | capture / session RO | Integration via Mobile.Bff | seed fake route |
| roleCaps / packageCode | auth profile · job-titles | role-gate · `QL_HAT` | suy từ MANAGER-RMMS |
| users | N/A CI write | — | N/A |

## §D — Map / vẽ

| Mục | Ghi |
|-----|-----|
| map | none trên CI-01 sheet (peer patrol-map riêng) |
| GPS | point + plan match radius · Pattern B |

## §E — Progress / vòng đời

| stateField | Nguồn | Ai đổi | API | UI |
|------------|-------|--------|-----|-----|
| session.status | Live | tuần đường mở/kết ca | GET/PUT sessions | CI-02 badge |
| checkInCount | Live | POST check-in | GET session | ordinal toast |
| check-in row | Live | tuần đường | POST/GET check-ins | timeline |
| offlineQueued | client queue | network fail | replay peer offline | toast warning |
| validationAttempted | UI | first Lưu | — | banner |
| roleCaps | profile | login | cite role-gate | hide/show CTA |

## §F — Handoff

| Role | Packet |
|------|--------|
| PO | role matrix · edit_page · PLAN-3-VAI #2 |
| Design | keep zones · role visibility · 430 |
| SA | Live check-ins · Mobile.Bff · DOMAIN-MAP slug |
| Dev | CheckInSheet + PatrolDetailPage · caps · no new route |
| QA | write tuần đường · QL_HAT RO · TK/NT block open ca · GPS Pattern B |

## Gaps (cite)

| id | Note |
|----|------|
| GAP-DA-CI-ROLE | Current screens thiếu roleCaps — **edit** theo PLAN-3-VAI |
| GAP-DA-CI-DOMAIN-ROW | DOMAIN-MAP thiếu slug `web-rmms-cam-checkin` — SA add/bind peer |
| GAP-DA-CI-STD-ALIAS | mfeStdUrl alias ≠ product route — **cấm** invent product route |
| GAP-DA-CI-DEPS-ROLE-GATE | Cần caps từ `web-rmms-role-gate` |
| GAP-DA-CI-OUT | Giao việc · SLA 24h · Mục IV · native · web-bff · ERP.* |

## Version meta

`skillVersion=2026.09.05.03` · `schemaVersion=2` · `contentHash=sha256:2ff2873ea06c8d3d8e707c24a142432b3f1e356db42bbb006f594fc6b9f213db` · `rulesVersion=2026.09.27.1` · `analyzedAt=2026-09-30T17:18:26.000Z` · `changeScope=edit_page`
