# Team lead — Task — web-rmms-cam-checkin

> Status: **ready** · skillVersion `2026.09.05.03` · task `task_595050d4` · writtenAt `2026-10-01T00:40:00.000Z`  
> contentHash: `sha256:2ff2873ea06c8d3d8e707c24a142432b3f1e356db42bbb006f594fc6b9f213db`  
> PackKind: **list** · changeScope: **edit_page** · autoApprove: **ON** · e2eQa: **queued QA**

| | |
|--|--|
| Feature | `web-rmms-cam-checkin` |
| Title | Camera check-in tuần đường — role-gate + Pattern B |
| Role | `team_lead` → handoff `/agent-dev` |
| Lane | `web` |
| MFE | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Mobile` |
| BE | `D:/AI-QLBD/Linm.RMMS.WebService` · domain **Patrol** · **cấm ERP.*** |
| BFF | Mobile.Bff `:5202` · `mobile-bff/api/v1/patrol/**` · **cấm web-bff** |
| productRoute | `/tuan-duong/:id` · `/tuan-duong/:id/diem-tuan` |
| mfeStdUrl | `http://localhost:9301/web-rmms-cam-checkin` (**alias only** · cấm invent product slug) |
| reviewUrl | `file:///D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-cam-checkin/ui/prototype/index.html` |
| route_confirm | **N/A** — không URL mới · giữ product deep-link peer |
| Step 4b / migration | **skip** — entity none · Live DTO KEEP |
| prior | data_analy·po·design·sa = **confirmed** · UNCLEAR closed |

## changeScope

`changeScope=edit_page` · **cấm** `new_page` · **cấm** invent `CamCheckIn*` / route mới / controller mới.

## Notes

- Delta: `docs/plan/web-rmms-mobile/PLAN-3-VAI.md` § enqueue #2
- Forms: **CI-01** CheckInSheet · **CI-02** PatrolDetailPage · LeaveConfirm dirty CI-01 · phone ≤430 · DES-GRID / LinErpListFilterBar **N/A**
- Role: **tuần đường** write · **QL_HAT** (HAT-TRUONG/HAT-PHO) view · **TK+NT** block · cite `web-rmms-role-gate` packageCode/roleCaps
- Pattern B GPS: banner on Lưu · **cấm** fake GPS · `disabled=saving` only
- **Cấm:** Giao việc · SLA 24h · Mục IV · Excel · ERP.* · web-bff · native · invent CamCheckIn*
- DOMAIN-MAP: `web-rmms-cam-checkin` → Patrol (CLOSED SA)
- Dev slash: `/agent-dev` · QA E2E chỉ `/agent-qa*`

## Screens / zones

| Zone | Form / page | File |
|------|-------------|------|
| CI-01 | CheckInSheet | `src/pages/WebRmmsMobileA/CheckInSheet.tsx` |
| CI-02 | PatrolDetailPage | `src/pages/WebRmmsMobileA/PatrolDetailPage.tsx` |
| DES-LEAVE | leaveConfirm dirty CI-01 | cùng CheckInSheet / sheet host |
| roleGateBanner | view-only / block | CI-01 + CI-02 |

## Inventory → implement

| id | controlHint | Role behavior | AC |
|----|-------------|---------------|-----|
| photos | RouteCapture | tuần đường write · QL_HAT view | upload/view per role |
| plan/gps/dist | Banner+Text RO | Live policy · Pattern B | banner GPS trước Lưu · no fake |
| chainageKm/Label | Input | optional POST | optional |
| content | TextArea | optional | optional |
| save | Button | tuần đường | POST check-ins · disabled=saving only |
| timeline | List RO | GET check-ins · QL_HAT OK | RO all allowed roles |
| ctaCheckIn / endSession | Button | ẩn non-tuần-đường | CTA gated |
| roleCaps / roleGateBanner | Hidden / Banner | cite role-gate | view-only / block banners |

## FormMode ↔ API (Live KEEP — no path invent)

| API | Method / path (BFF) | Used by |
|-----|---------------------|---------|
| API-01 | GET `sessions/{id}` | CI-02 session header |
| API-02 | GET `plan-points` | CI-01/02 plan match |
| API-03 | GET `check-in-policy` | Pattern B distance/GPS |
| API-04 | GET `check-ins` | timeline CI-02 |
| API-05 | POST `check-ins` | save CI-01 |
| API-06 | files (cite Live) | photos |
| API-07 | PUT `session` | endSession peer |
| API-08 | auth/profile caps | roleCaps |

Prefix: `mobile-bff/api/v1/patrol/**` · entity/migration: **none**.

---

## T-* tasks

### T-01 — CI-01 CheckInSheet role-gate + Pattern B + leave

| | |
|--|--|
| id | `T-01` |
| page | CI-01 CheckInSheet |
| file | `src/pages/WebRmmsMobileA/CheckInSheet.tsx` |
| deps | role-gate caps · SA FormMode↔API · design reviewUrl |
| priority | P0 |
| estimate | M |

**Do**
1. Wire `roleCaps` / packageCode từ role-gate — tuần đường write; QL_HAT view-only; TK+NT không mở sheet ghi điểm.
2. `roleGateBanner`: view-only (QL_HAT) / block (TK+NT) theo design zones.
3. Pattern B: đọc `check-in-policy` + GPS thật — banner cảnh báo trước Lưu; **cấm** fake GPS; `save` `disabled` chỉ khi `saving`.
4. Fields: photos (RouteCapture) · plan/gps/dist RO · chainageKm/Label · content · save → POST `check-ins` (+ files cite).
5. LeaveConfirm khi dirty CI-01 (DES-LEAVE).
6. Parity prototype `reviewUrl` zones CI-01 · ≤430px.

**AC**
- [ ] Tuần đường: ghi điểm + ảnh thành công (POST check-ins).
- [ ] QL_HAT: xem form/ảnh, không POST / không enable save write.
- [ ] TK+NT: block / không mở ghi điểm.
- [ ] Pattern B: GPS banner đúng policy · no fake · save lock = saving only.
- [ ] Leave dirty CI-01 confirm.
- [ ] Không route mới · không CamCheckIn* · không ERP.*/web-bff.

### T-02 — CI-02 PatrolDetailPage CTA + timeline + endSession gate

| | |
|--|--|
| id | `T-02` |
| page | CI-02 PatrolDetailPage |
| file | `src/pages/WebRmmsMobileA/PatrolDetailPage.tsx` |
| deps | T-01 roleCaps same source · API-01/02/04/07 |
| priority | P0 |
| estimate | M |

**Do**
1. Same roleCaps source — `ctaCheckIn` / `endSession` **ẩn** non-tuần-đường.
2. Timeline RO: GET `check-ins` — QL_HAT được xem.
3. Session header: GET `sessions/{id}` · plan-points; endSession → PUT `session` (chỉ tuần đường).
4. `roleGateBanner` trên detail khi view-only / block.
5. Deep-link giữ `/tuan-duong/:id` · `/tuan-duong/:id/diem-tuan` · mfeStdUrl alias only.
6. Parity prototype CI-02 · ≤430px.

**AC**
- [ ] Tuần đường: CTA check-in + endSession visible & works.
- [ ] QL_HAT: timeline/session view · CTA write ẩn.
- [ ] TK+NT: block / không mở ca ghi điểm.
- [ ] Không invent route / slug / ERP.* / web-bff / migration.

### T-03 — QA handoff checklist (dev notes · QA executes)

| | |
|--|--|
| id | `T-03` |
| page | CI-01 + CI-02 |
| owner | `/agent-qa*` (e2eQa queued) |
| deps | T-01 · T-02 |
| priority | P1 |

**Do (dev prepare · QA run)**
- Scenarios: role matrix · GPS Pattern B · leave dirty · no new route · Live API KEEP.
- **Cấm** team_lead/dev chạy e2e / `yarn start:std` / build ở role này.

**AC**
- [ ] Dev notes list AC từ T-01/T-02 đủ cho `qa/scenarios.md`.

---

## UI notes — edit-web-feature 2026-10-04

CI-01 thay ô Lý trình bằng **Tuyến hiện tại**: SearchInput tuyến (default `routeCode` kế hoạch) + Cột KM | Khoảng cách (m). Đã có check-in trước → so GPS với điểm đó để điền cột và mét. Chưa mở ca (`isLiveActive` false) → Lưu gọi mở ca theo tuyến đã chọn rồi mới POST check-in. Client gửi `chainageKm` / `chainageLabel`; API giữ giá trị đó khi có GPS.

## Out of scope

- new_page / new route / CamCheckInController
- Step 4b migration / entity
- Giao việc · SLA · Mục IV · Excel · native
- ERP.* · web-bff · fake GPS
- Running e2e / start:std ở team_lead hoặc trước `/agent-qa*`

## Handoff

| Field | Value |
|-------|-------|
| next | `/agent-dev` · implement `implement/web-rmms-cam-checkin.md` |
| after | `/agent-qa*` (e2eQa ON) · `/agent-review` |
| compact | `handoff/team_lead-compact.md` |
| full | `task/web-rmms-cam-checkin.md` |
| STATUS | patch team-lead → **confirmed** · lock release |
