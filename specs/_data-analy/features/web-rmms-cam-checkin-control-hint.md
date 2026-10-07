# Data-analy — controlHint — web-rmms-cam-checkin

| Field | Value |
|-------|-------|
| feature | `web-rmms-cam-checkin` |
| title | Camera check-in tuần đường |
| packKind | `list` |
| changeScope | `edit_page` |
| mode | `feature_context` |
| status | `done` |
| skillId | `agent-data-analy` |
| skillVersion | `2026.09.05.03` |
| schemaVersion | `1` |
| workflowVersion | `2026.09.19.02` |
| rulesVersion | `2026.09.27.1` |
| versionGate | `ok` |
| contentHash | `sha256:2ff2873ea06c8d3d8e707c24a142432b3f1e356db42bbb006f594fc6b9f213db` |
| analyzedAt | `2026-09-30T17:18:26.000Z` |
| demo | **N/A** |
| realData | `specs/_data-analy/features/web-rmms-cam-checkin-real-data.md` |
| beRepo | `D:/AI-QLBD/Linm.RMMS.WebService` · Patrol (+ FileService cite · Auth) · **cấm ERP.*** |
| uiRepo | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Mobile` |
| mfeStdUrl | `http://localhost:9301/web-rmms-cam-checkin` (queue alias) |
| mfeStdRoute | product `/tuan-duong/:id` · `/tuan-duong/:id/diem-tuan` · **cấm** invent slug route |
| productRoute | `/tuan-duong/:sessionId` · `/tuan-duong/:sessionId/diem-tuan` |
| taskId | `task_cdfedcf9` |
| phoneFrame | `max-width: 430px` |
| formPattern | Mobile full · sheet + detail · **không** ERP Modal/Slideout Kind B |
| bff | `Linm.RMMS.Mobile.Bff` · `:5202` · `VITE_MOBILE_API_URL=…/mobile-bff/api/v1` · **cấm** web-bff |
| deltaCite | `docs/plan/web-rmms-mobile/PLAN-3-VAI.md` § List enqueue #2 |
| priorArtifacts | peer `web-rmms-mobile-a` check-in Live · edit role-gate only |

> Data-analy **đề xuất** controlHint (edit). Design giữ layout sheet/detail đã ship; thêm role visibility. SA cite Live check-ins · **không** invent CamCheckInController.  
> Pattern B: Lưu **không** pre-disable vì thiếu GPS — banner on click.  
> Nhãn: `useFormOptions('web-rmms-mobile-a')` / PATROL_LOOKUP_STATIC. **Cấm** toolbar Excel.

## § Delta Current vs New

| Area | Current | New |
|------|---------|-----|
| changeScope | shipped check-in (mobile-a) | `edit_page` · **cấm** `new_page` · **cấm** route mới |
| CI-01 write | mọi user mở sheet đều POST được | chỉ vai **tuần đường** · `QL_HAT` RO · TK/NT **không** mở ca / không vào sheet ghi |
| CI-02 CTA ghi điểm | hiện theo ca active (chưa lọc vai) | CTA ghi điểm chỉ tuần đường · QL_HAT xem timeline · ẩn CTA write |
| RouteCapture | `purpose=patrol-check-in` · multiple | giữ · tuần đường capture; QL_HAT `mode=view` only |
| SLA / tiền / Giao việc | N/A form này | **cấm** SLA 24h · **cấm** Mục IV tiền · **cấm** nút Giao việc trên CI-* |
| mfe / bff | Mobile · Mobile.Bff | giữ · **cấm** web-bff · **cấm** iOS/Android |
| align | phone | `/align-mobile-to-mfe` · 430px · no new tab/route/icon |

## Sources

| Source | Path | note |
|--------|------|------|
| CTX | `docs/context/features/web-rmms-cam-checkin.md` | feature_context · hash gate |
| PLAN-3-VAI | `docs/plan/web-rmms-mobile/PLAN-3-VAI.md` | enqueue #2 · QL_HAT view · TK/NT no open ca |
| Peer CTX | `docs/context/features/web-rmms-mobile-a.md` | Live sessions/check-ins |
| Code | `CheckInSheet.tsx` · `PatrolDetailPage.tsx` | current SSOT |
| Endpoint | `services/patrol/endpoint.ts` | getById · getCheckIns · getPlanPoints · getCheckInPolicy · createCheckIn |
| DOMAIN-MAP | Patrol · peer mobile-a / patrol-map / offline | **cấm ERP.*** · GAP slug row |

## Screens (ids)

| id | route | surface |
|----|-------|---------|
| CI-01 | `/tuan-duong/:id/diem-tuan` | Sheet ghi điểm + detail sau lưu (`sc-checkin-detail`) |
| CI-02 | `/tuan-duong/:id` | Chi tiết ca · timeline check-ins · CTA ghi điểm (role) |

**Out:** `/tuan-kiem*` mở ca tuần đường · `/nghiem-thu*` mở ca · invent `/web-rmms-cam-checkin` product route · Giao việc · Excel.

## ControlHint inventory

| uiField | screen | controlHint | catalogKind / notes |
|---------|--------|-------------|---------------------|
| screenTitle | CI-01/02 | Text | copy «Ghi điểm tuần» / «Chi tiết ca» |
| back / cancel | CI-01/02 | Button/Nav | leaveConfirm khi dirty |
| matchBanner | CI-01 | Banner | plan match · warn/ok |
| gpsDenyHint | CI-01 | Text | Pattern B · không fake GPS |
| planPointLabel | CI-01 | Text RO | nearest plan / BE label |
| currentRoute | CI-01 | SearchInput | Tuyến hiện tại · default kế hoạch |
| cotKm | CI-01 | NumberInput | Cột KM |
| offsetM | CI-01 | NumberInput | Khoảng cách (m) · cùng hàng cotKm |
| chainageKm | CI-01 | derived | cot + offset/1000 · POST body |
| chainageLabel | CI-01 | derived | stamp `Km X + Ym` |
| routeStamp | CI-01 | Text RO | session route · capture route pick via RouteCapture |
| gpsRaw | CI-01 | Text RO | lat,lng · ±accuracyM |
| distToPlan | CI-01 | Text RO | meters · Đúng/Sai điểm |
| content | CI-01 | TextArea | optional mô tả |
| photos | CI-01 | RouteCaptureControl | mode=multiple · tuần đường; view cho QL_HAT |
| saveNav / saveBlock | CI-01 | Button primary | Pattern B · chỉ `disabled={saving}` · role tuần đường |
| cancelBlock | CI-01 | Button secondary | leave |
| savedDetail | CI-01 | Cover RO | after save · photos view |
| sessionHeader | CI-02 | Text/Badge | status · coverage · route |
| timeline | CI-02 | List RO | GET check-ins · open row → capture view |
| ctaCheckIn | CI-02 | Button | chỉ tuần đường + ca active · **ẩn** QL_HAT/TK/NT |
| endSession | CI-02 | Button | chỉ tuần đường · **ẩn** vai khác |
| roleGateBanner | CI-01/02 | Banner optional | TK/NT chặn · QL_HAT view-only hint |

## Filter / grid (desktop HARD)

| | |
|--|--|
| LinErpListFilterBar / DES-GRID-* | **N/A** — phone Field |
| toolbar / export Excel | **N/A** |

## GPS

| Màn | Rule |
|-----|------|
| CI-01 | Pattern B · deny/pending → banner khi Lưu · **cấm** fake · plan match policy từ Live |
| CI-02 | RO timeline coords · không bắt GPS mới khi chỉ xem |

## Role matrix (HARD)

| Vai | CI-01 write | CI-02 view | Mở ca (hub peer) |
|-----|-------------|------------|------------------|
| Tuần đường | POST check-in + capture | full + CTA | yes (peer) |
| `QL_HAT` | **no** · view-only nếu deep-link | timeline RO · no CTA write | view reports (peer) |
| Tuần kiểm | **block** | no open ca path | **no** |
| Nghiệm thu | **block** | no open ca path | **no** |

`QL_HAT` = `HAT-TRUONG` + `HAT-PHO` only · **cấm** suy từ `MANAGER-RMMS`.

## API (cite Live — SA confirm DTO)

| Method | Path | Note |
|--------|------|------|
| GET | `patrol/sessions/{id}` | session stamp |
| GET | `patrol/sessions/{id}/plan-points` | match |
| GET | `patrol/check-in-policy` | requirePlanPointMatch · matchRadiusM |
| GET | `patrol/sessions/{id}/check-ins` | CI-02 timeline |
| POST | `patrol/sessions/{id}/check-ins` | CI-01 write · tuần đường only |
| PUT | `patrol/sessions/{id}` | kết ca peer · tuần đường only |
| files/* | FileService via capture | cite · không invent |

App base: `{BffBase}/mobile-bff/api/v1`. **Cấm** invent `cam-checkin/*` · **cấm** web-bff.

## UNCLEAR

| id | Issue | Action |
|----|-------|--------|
| UNCLEAR-CI-DOMAIN-ROW | DOMAIN-MAP chưa có slug `web-rmms-cam-checkin` | SA: add row Patrol · cite check-ins Live · hoặc bind peer mobile-a |
| UNCLEAR-CI-ROLE-SOURCE | profile `packageCode`/`roleCaps` từ role-gate | deps `web-rmms-role-gate` · Dev đọc caps client |
| — | mfeStdUrl alias vs product route | PO/Design: deep-link `/tuan-duong/:id/diem-tuan` · **cấm** route mới |

## Handoff

| Role | Dùng |
|------|------|
| PO | Delta role-gate trên CI-01/02 · edit_page · PLAN-3-VAI #2 |
| Design | keep sheet/detail · role visibility · 430px |
| SA | Live check-ins · Mobile.Bff · DOMAIN-MAP row |
| TL/Dev | Edit `CheckInSheet` + `PatrolDetailPage` · role caps · no new route |
| QA | tuần đường ghi · QL_HAT xem · TK/NT không mở ca · Pattern B GPS |

## Version meta

`skillVersion=2026.09.05.03` · `schemaVersion=1` · `contentHash=sha256:2ff2873ea06c8d3d8e707c24a142432b3f1e356db42bbb006f594fc6b9f213db` · `rulesVersion=2026.09.27.1` · `analyzedAt=2026-09-30T17:18:26.000Z` · `changeScope=edit_page`
