# PO — requirement — web-rmms-cam-checkin

| Field | Value |
|-------|-------|
| feature | `web-rmms-cam-checkin` |
| title | Camera check-in tuần đường |
| packKind | `list` · **confirm** |
| changeScope | `edit_page` · **cấm** `new_page` · **cấm** route mới |
| lane | `web` · MFE Mobile phone 430px |
| status | `done` |
| skillId | `agent-po` |
| skillVersion | `2026.09.05.03` |
| schemaVersion | `1` |
| workflowVersion | `2026.09.19.02` |
| rulesVersion | `2026.09.27.1` |
| versionGate | `ok` |
| contentHash | `sha256:2ff2873ea06c8d3d8e707c24a142432b3f1e356db42bbb006f594fc6b9f213db` |
| writtenAt | `2026-10-01T00:24:37.695Z` |
| taskId | `task_bbc75698` |
| demo | **N/A** · **cấm** demo HTML SSOT / re-scan |
| prior | data_analy **confirmed** · compact `handoff/data_analy-compact.md` |
| deltaCite | `docs/plan/web-rmms-mobile/PLAN-3-VAI.md` § List enqueue #2 |
| mfe | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Mobile` |
| be | `D:/AI-QLBD/Linm.RMMS.WebService` · Patrol · **cấm ERP.*** |
| bff | `Linm.RMMS.Mobile.Bff` `:5202` · `mobile-bff/api/v1` · **cấm** web-bff |
| productRoute | `/tuan-duong/:id` · `/tuan-duong/:id/diem-tuan` |
| mfeStdUrl | `http://localhost:9301/web-rmms-cam-checkin` (alias only · **cấm** invent product slug) |
| phoneFrame | `max-width: 430px` |
| DES-GRID / LinErpListFilterBar | **N/A** — phone Field (không desktop list) |
| autoApprove | ON → Design gate confirm |

## 1. Goal

Edit form check-in đã ship (peer `web-rmms-mobile-a`): **tuần đường** ghi điểm + ảnh; **QL_HAT** chỉ xem; **TK/NT** không mở ca / không vào sheet ghi. Giữ Live APIs · layout sheet/detail · Pattern B GPS.

## 2. Screens

| Id | Route | Surface | AC focus |
|----|-------|---------|----------|
| CI-01 | `/tuan-duong/:id/diem-tuan` | `CheckInSheet` · ghi điểm + RouteCapture + GPS + plan match | write role-gate · Pattern B · leave dirty |
| CI-02 | `/tuan-duong/:id` | `PatrolDetailPage` · timeline + CTA | CTA/endSession hide non-tuần-đường · timeline RO cho QL_HAT |

**Out screens:** `/tuan-kiem*` · `/nghiem-thu*` · invent `/web-rmms-cam-checkin` product route · Giao việc · Excel toolbar.

## 3. Role matrix (HARD)

| Vai | CI-01 write | CI-02 view | CTA ghi điểm / kết ca | Mở ca (hub peer) |
|-----|-------------|------------|----------------------|------------------|
| Tuần đường | POST + capture | full | yes (ca active) | yes (peer) |
| `QL_HAT` (`HAT-TRUONG`+`HAT-PHO`) | **no** · view-only nếu deep-link | timeline RO | **ẩn** | view reports (peer) |
| Tuần kiểm | **block** | no write path | **ẩn** | **no** |
| Nghiệm thu | **block** | no write path | **ẩn** | **no** |

- `QL_HAT` **chỉ** HAT-TRUONG / HAT-PHO · **cấm** suy từ `MANAGER-RMMS`.
- Caps cite `web-rmms-role-gate` (`packageCode` / `roleCaps`) — UNCLEAR-CI-ROLE-SOURCE → Dev deps package.

## 4. Field / control AC (from inventory)

| uiField | screen | controlHint | AC |
|---------|--------|-------------|-----|
| photos | CI-01 | RouteCaptureControl | tuần đường `mode=multiple` · QL_HAT `view` · purpose=`patrol-check-in` |
| matchBanner / planPointLabel / distToPlan | CI-01 | Banner + Text RO | Live plan-points + policy · Đúng/Sai điểm |
| gpsDenyHint / gpsRaw | CI-01 | Text | Pattern B · **cấm** fake lat/lng |
| currentRoute + cotKm + offsetM | CI-01 | SearchInput + 2 NumberInput | Thay ô Lý trình. Tuyến mặc định theo kế hoạch. Cột KM \| Khoảng cách (m). Đã có điểm trước → so GPS với điểm đó để điền cột và mét. Chưa mở ca → Lưu tự mở ca theo tuyến đã chọn. |
| content | CI-01 | TextArea | optional |
| save | CI-01 | Button primary | chỉ tuần đường · `disabled={saving}` only · Pattern B banner on Lưu |
| cancel / back | CI-01/02 | Button/Nav | leaveConfirm khi dirty |
| timeline | CI-02 | List RO | GET check-ins · open → capture view |
| ctaCheckIn / endSession | CI-02 | Button | ẩn QL_HAT / TK / NT |
| roleGateBanner | CI-01/02 | Banner optional | TK/NT chặn · QL_HAT view-only hint |
| roleCaps | both | Hidden | gate UI từ profile |

## 5. GPS — Pattern B (HARD)

1. Lưu **không** pre-disable vì thiếu GPS.
2. Deny/pending → banner khi bấm Lưu · **cấm** fake coords.
3. Plan match: Live `check-in-policy` (`requirePlanPointMatch` · `matchRadiusM`).
4. CI-02 xem timeline: không bắt GPS mới.

## 6. Leave (HARD)

| Trigger | Rule |
|---------|------|
| dirty CI-01 (ảnh/content/chainage chưa POST) | confirm trước back/cancel/route leave |
| sau POST thành công / RO view | leave thẳng |
| QL_HAT / TK/NT RO | không dirty write |

## 7. FormMode ↔ API

| Mode | Who | APIs |
|------|-----|------|
| write (CI-01) | tuần đường | GET sessions/{id} · plan-points · check-in-policy · POST check-ins · files via capture |
| view timeline (CI-02) | tuần đường + QL_HAT | GET sessions/{id} · GET check-ins |
| kết ca | tuần đường only | PUT sessions/{id} (peer) |
| block | TK/NT · QL_HAT write | không POST · ẩn CTA |

App base: `{BffBase}/mobile-bff/api/v1`. **Cấm** invent `cam-checkin/*` · **cấm** web-bff · **cấm** ERP.*.

**POST body (Live keep):** `planPointLabel` · `route` · `lat` · `lng` · `accuracyM` · `distanceToPlanM` · `matchOk` · `content?` · `photoLocalIds` · `photoPins` · `tapNx/Ny?` · `objectLat/Lng?` · `chainageKm?` · `chainageLabel?`.

## 8. Grid / Filter AC

| Rule | Value |
|------|-------|
| DES-GRID-* | **N/A** — phone · không desktop grid |
| LinErpListFilterBar | **N/A** |
| Excel / export | **N/A** · **cấm** |

## 9. Nhãn / i18n

`useFormOptions('web-rmms-mobile-a')` / `PATROL_LOOKUP_STATIC` · **cấm** hardcode VN mới nếu key đã có.

## 10. Out of scope (HARD)

- `new_page` · route mới · invent CamCheckInController / DTO
- Giao việc trên CI-* · SLA 24h · Mục IV tiền
- web-bff · ERP.* · iOS/Android native · demo re-scan
- Excel toolbar · desktop Modal/Slideout Kind B

## 11. UNCLEAR (handoff SA / Dev — không block PO DoR)

| id | Action |
|----|--------|
| UNCLEAR-CI-DOMAIN-ROW | SA: DOMAIN-MAP add slug `web-rmms-cam-checkin` hoặc bind peer mobile-a |
| UNCLEAR-CI-ROLE-SOURCE | Dev: caps từ `web-rmms-role-gate` |

## 12. Acceptance (QA queue)

1. Tuần đường: mở CI-02 → CTA → CI-01 → capture + Lưu → POST · timeline cập nhật.
2. QL_HAT: xem CI-02 timeline · **không** CTA ghi / kết ca · deep-link CI-01 RO.
3. TK/NT: **không** mở ca · **không** vào write sheet.
4. GPS deny: Lưu hiện banner · **không** fake · Lưu chỉ lock khi `saving`.
5. Dirty leave: confirm trên CI-01.
6. Phone ≤430px · deep-link product routes · alias mfeStdUrl không tạo route mới.
7. Không Excel · không Giao việc · không ERP.*.

## 13. Handoff

| Role | Packet |
|------|--------|
| Design | keep sheet/detail zones · role visibility · 430px · reviewUrl prototype |
| SA | Live check-ins · Mobile.Bff · DOMAIN-MAP row · **cấm** invent controller |
| TL/Dev | Edit `CheckInSheet.tsx` + `PatrolDetailPage.tsx` · role caps · no new route |
| QA | scenarios §12 · e2e queued `/agent-qa*` only |

## Version meta

`skillVersion=2026.09.05.03` · `schemaVersion=1` · `contentHash=sha256:2ff2873ea06c8d3d8e707c24a142432b3f1e356db42bbb006f594fc6b9f213db` · `rulesVersion=2026.09.27.1` · `writtenAt=2026-10-01T00:24:37.695Z` · `changeScope=edit_page` · `packKind=list` · `taskId=task_bbc75698`
