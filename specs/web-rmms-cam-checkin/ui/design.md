# Design — web-rmms-cam-checkin

| Field | Value |
|-------|-------|
| feature | `web-rmms-cam-checkin` |
| title | Camera check-in tuần đường |
| this role | `design` · `/agent-design` |
| status | `confirmed` (autoApprove=ON) |
| design_confirm | **approve** (`task_8376ddfd`) |
| changeScope | `edit_page` · keep sheet/detail · **§ Delta role-gate only** · **cấm** `new_page` · **cấm** route mới |
| packKind | **`list`** · UI = **phone Field** · **≠** Kind B desktop |
| lane | `web` |
| stack | `web_mfe_phone` · `Linm.Web.RMMS.Mobile` · `max-width: 430px` |
| formPattern | **Sheet** CI-01 · **Full** CI-02 · **không** ERP Modal/Slideout Kind B |
| DES-GRID / LinErpListFilterBar | **N/A** — phone · **cấm** clone · WAIVE |
| Report AC / DES-RPT | **N/A** |
| shared_grid_example | **N/A** (phone) |
| real_view_parity | **v1** |
| peerStd deep-link | `/tuan-duong/:id` · `/tuan-duong/:id/diem-tuan` |
| mfeStdUrl | `http://localhost:9301/web-rmms-cam-checkin` (**alias only** · **cấm** invent product slug) |
| mfeStdRoute | product `/tuan-duong/:id` · `/tuan-duong/:id/diem-tuan` |
| reviewUrl | `file:///D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-cam-checkin/ui/prototype/index.html` |
| demo | **N/A** · hash skip · **cấm** re-scan (**GAP-DES-DEMO-RESCAN-01**) |
| mfe | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Mobile` |
| beRepo | `D:/AI-QLBD/Linm.RMMS.WebService` · Patrol (+ FileService · Auth) · **cấm ERP.*** |
| bff | `Linm.RMMS.Mobile.Bff` · `:5202` · `mobile-bff/api/v1` · **cấm** web-bff |
| controlHint | `specs/_data-analy/features/web-rmms-cam-checkin-control-hint.md` |
| realData | `specs/_data-analy/features/web-rmms-cam-checkin-real-data.md` · §A+§B PASS |
| deltaCite | `docs/plan/web-rmms-mobile/PLAN-3-VAI.md` § enqueue #2 |
| prior | PO `confirmed` · `handoff/po-compact.md` · contentHash `sha256:2ff2873ea06c8d3d8e707c24a142432b3f1e356db42bbb006f594fc6b9f213db` |
| autoApprove | **ON** |
| e2eQa | ON queued `/agent-qa*` · **cấm** e2e / `yarn start:std` ở Design |
| `devSlash` | `/agent-dev` |
| updatedAt | `2026-10-01T00:30:00.000Z` |
| taskId | `task_8376ddfd` |
| skillId | `agent-design` |
| skillVersion | `2026.09.05.03` |
| schemaVersion | `1` |
| workflowVersion | `2026.09.19.02` |
| rulesVersion | `2026.09.27.1` |
| versionGate | `ok` |
| contentHash | `sha256:2ff2873ea06c8d3d8e707c24a142432b3f1e356db42bbb006f594fc6b9f213db` |

**Cấm:** Dev/BE trước confirm (đã autoApprove) · ERP.* · iOS/Android native · Kind B DES-GRID · `LinErpListFilterBar` · invent `CamCheckIn*` · invent product route `/web-rmms-cam-checkin` · fake GPS · Giao việc trên CI-* · SLA 24h · Mục IV tiền · Excel · web-bff · native `alert`/`confirm` · re-scan demo · `yarn build` / e2e / start:std ở role này · **cấm** khóa Lưu CI-01 trước bấm (Pattern B).

## 0. Context / Demo

| ID | Path | Notes |
|----|------|-------|
| CTX-01 | `docs/context/features/web-rmms-cam-checkin.md` | feature_context |
| DELTA | `docs/plan/web-rmms-mobile/PLAN-3-VAI.md` | enqueue #2 · QL_HAT view · TK/NT no open ca |
| DEM | — | **N/A** · hash skip |
| DA-01 / DA-02 | `_data-analy/features/web-rmms-cam-checkin-{control-hint,real-data}.md` | inventory + §B |
| PO | `po/requirement.md` · `handoff/po-compact.md` | Screens · Pattern B · Leave · role matrix |
| peer | `web-rmms-mobile-a` CheckInSheet / PatrolDetailPage | keep layout · edit role-gate |
| code | `src/pages/WebRmmsMobileA/CheckInSheet.tsx` · `PatrolDetailPage.tsx` | SSOT edit |
| tokens | `docs/mobile-tokens.json` | primary `#0C84C0` · 430px |

## 0b. § Delta Current vs New (edit_page HARD)

| Area | Current (shipped peer) | New (Design chốt) |
|------|------------------------|-------------------|
| changeScope | check-in Live mobile-a | `edit_page` · **cấm** `new_page` · **cấm** route mới |
| CI-01 write | mọi user mở sheet đều POST được | chỉ **tuần đường** · `QL_HAT` RO · TK/NT **không** mở sheet ghi |
| CI-02 CTA ghi điểm / kết ca | theo ca active (chưa lọc vai) | chỉ tuần đường · **ẩn** QL_HAT / TK / NT |
| RouteCapture | `purpose=patrol-check-in` · multiple | giữ · tuần đường capture · QL_HAT `mode=view` |
| GPS Lưu | Pattern B (peer) | **KEEP** · banner on Lưu · `disabled={saving}` only · **cấm** fake |
| Leave dirty CI-01 | LeaveConfirmModal | **KEEP** · **cấm** native dialog |
| SLA / tiền / Giao việc | N/A | **cấm** trên CI-* |
| Align | phone 430 | `/align-mobile-to-mfe` · **cấm** tab/route/icon mới |
| Grid / filter | N/A phone | **KEEP WAIVE** |

## 1. Pattern & shell

| | |
|--|--|
| Frame | Phone **430px** · content-only · tokens primary `#0C84C0` · label **13** · field **≥16** · hit **≥44** |
| Shell | App topbar (title · back) · **không** ERP `LinPageLayout` chrome |
| Sheet | CI-01 — bottom sheet / full sheet ghi điểm · footer Hủy + Lưu (**Pattern B**) |
| Full | CI-02 — chi tiết ca · timeline · CTA role-gated |
| Leave | **LeaveConfirmModal** (`DES-LEAVE`) · dirty CI-01 · **cấm** native dialog |
| Out | Giao việc · Excel · invent slug product · peer hub mở ca (TK/NT) |

## 2. Screens / zones

| Zone | Route | Surface | Wire |
|------|-------|---------|------|
| **CI-01** | `/tuan-duong/:id/diem-tuan` | **Sheet** | Ghi điểm · RouteCapture · GPS Pattern B · POST check-ins · sau lưu → `sc-checkin-detail` RO |
| **CI-02** | `/tuan-duong/:id` | Full | Session header · timeline GET check-ins · CTA ghi điểm / kết ca (role) |
| **DES-LEAVE** | overlay | Modal | dirty leave CI-01 · Ở lại / Rời |
| **roleGateBanner** | CI-01/02 | Banner | QL_HAT view-only · TK/NT block |

### IA

```
(peer ca active) → CI-02 /tuan-duong/:id
  · tuần đường → CTA → CI-01 sheet /diem-tuan → Lưu → detail RO
  · QL_HAT → timeline RO · ẩn CTA write / kết ca
  · TK/NT → block / không path mở ca (peer hub)
```

### Role visibility (HARD)

| Vai | CI-01 | CI-02 |
|-----|-------|-------|
| Tuần đường | write + capture · Lưu Pattern B | timeline + CTA ghi điểm + kết ca |
| `QL_HAT` (`HAT-TRUONG`/`HAT-PHO`) | view-only nếu deep-link · **cấm** POST | timeline RO · **ẩn** CTA write / kết ca · optional view-only banner |
| Tuần kiểm | **block** | **block** mở ca path |
| Nghiệm thu | **block** | **block** mở ca path |

**Cấm** suy `QL_HAT` từ `MANAGER-RMMS`. Caps cite `web-rmms-role-gate` (UNCLEAR-CI-ROLE-SOURCE → SA/Dev).

## 3. Field inventory (Control = controlHint)

| uiField | screen | controlHint | Required | Bind / notes |
|---------|--------|-------------|----------|--------------|
| screenTitle | CI-01/02 | Text | — | «Ghi điểm tuần» / «Chi tiết ca» |
| back / cancel | CI-01/02 | Button/Nav | — | leaveConfirm khi dirty |
| matchBanner | CI-01 | Banner | — | plan match · warn/ok · Live policy |
| gpsDenyHint | CI-01 | Text/Banner | — | Pattern B · hiện khi Lưu + GPS deny/pending · **cấm** fake |
| planPointLabel | CI-01 | Text RO | — | nearest plan / BE · empty OK |
| currentRoute | CI-01 | SearchInput | — | **Tuyến hiện tại** · default = tuyến kế hoạch (`routeCode`) · POST `route` |
| cotKm | CI-01 | NumberInput | — | Cột KM · numeric · cùng hàng với khoảng cách |
| offsetM | CI-01 | NumberInput | — | Khoảng cách (m) · numeric · nhãn `Km X + Ym` |
| chainageKm / chainageLabel | CI-01 | derived | — | `cot + offset/1000` · stamp · giữ khi client đã gửi |
| routeStamp | CI-01 | Text RO | * | session route · miss catalog → `--` |
| gpsRaw | CI-01 | Text RO | * | lat,lng · ±accuracyM |
| distToPlan | CI-01 | Text RO | — | meters · Đúng/Sai điểm |
| content | CI-01 | TextArea | — | optional mô tả |
| photos | CI-01 | RouteCaptureControl | * (write) | multiple · tuần đường capture · QL_HAT view |
| saveNav / saveBlock | CI-01 | Button primary | * | Pattern B · `disabled={saving}` only · **ẩn**/disable non-tuần-đường |
| cancelBlock | CI-01 | Button secondary | — | leave |
| savedDetail | CI-01 | Cover RO | — | after save · photos view |
| sessionHeader | CI-02 | Text/Badge | — | status · coverage · route |
| timeline | CI-02 | List RO | — | GET check-ins · QL_HAT OK · open row → capture view |
| ctaCheckIn | CI-02 | Button | — | chỉ tuần đường + ca active · **ẩn** khác |
| endSession | CI-02 | Button | — | chỉ tuần đường · **ẩn** khác |
| roleGateBanner | CI-01/02 | Banner | — | view-only / block copy |
| roleCaps | — | Hidden | * | cite role-gate · gate UI |

**Labels:** `useFormOptions('web-rmms-mobile-a')` / PATROL_LOOKUP_STATIC — prototype hiện nhãn VN review; Dev wire key.

## 4. Prototype (REQUIRED)

| | |
|--|--|
| Artifact | `ui/prototype/index.html` |
| Zones | CI-02 tuần đường · CI-02 QL_HAT · CI-01 write · CI-01 view · Pattern B banner · DES-LEAVE · roleGateBanner |
| Form | Sheet CI-01 Pattern B · Full CI-02 · LeaveConfirmModal |
| Grid/filter desktop | **N/A** |
| SSOT | control-hint · real-data §B · mobile-tokens · **cấm** shared-grid desktop · **cấm** re-scan demo |
| **reviewUrl** | `file:///D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-cam-checkin/ui/prototype/index.html` |
| **peerStd deep-link** | `/tuan-duong/:id/diem-tuan` |
| **real_view_parity** | `v1` |

### Wire

```
CI-02 tuần đường: topbar Chi tiết ca · sessionHeader · timeline cards · CTA Ghi điểm · Kết ca
CI-02 QL_HAT: cùng layout · banner view-only · ẩn CTA Ghi điểm / Kết ca · timeline RO
CI-01 write: sheet · matchBanner · planPoint · Tuyến hiện tại (SearchInput) · Cột KM | Khoảng cách (m) chỉ khi có điểm trước cùng tuyến và mét &lt; 1000 · còn lại `--` / nhập khoảng cách · ẩn tuyến dự kiến và tuyến check-in thực tế · chưa mở ca thì Lưu tự mở ca · GPS RO · dist · content · RouteCapture · Hủy|Lưu
CI-01 Pattern B: bấm Lưu khi GPS deny → gpsDenyHint banner · cấm khóa nút trước
CI-01 QL_HAT view: fields RO · capture view · ẩn Lưu
DES-LEAVE: dirty → Modal Ở lại / Rời
TK/NT: roleGateBanner block · không CTA
```

## 5. API map (cite real-data §B — **không đổi** paths)

| Action | API |
|--------|-----|
| Session stamp | `GET …/patrol/sessions/{id}` |
| Plan points | `GET …/sessions/{id}/plan-points` |
| Check-in policy | `GET …/patrol/check-in-policy` |
| Timeline | `GET …/sessions/{id}/check-ins` |
| Ghi điểm | `POST …/sessions/{id}/check-ins` · tuần đường only · chainage client giữ nếu đã gửi |
| Cột KM | `GET …/sessions/km-posts?route` · so với điểm check-in trước |
| Mở ca khi chưa có ca | `POST …/patrol/sessions` · tuyến đã chọn · chỉ khi session không `Đang tuần` |
| Kết ca | `PUT …/sessions/{id}` · tuần đường only · peer |
| Photos | FileService via RouteCapture · cite · **cấm** invent |
| Role caps | auth profile · cite `web-rmms-role-gate` |

App base: `{BffBase}/mobile-bff/api/v1`. **Cấm** invent `cam-checkin/*` · **cấm** web-bff · **cấm** ERP.*.

## 6. UNCLEAR (handoff SA)

| id | Design chốt | SA |
|----|-------------|-----|
| UNCLEAR-CI-DOMAIN-ROW | keep Live check-ins · không invent controller | add DOMAIN-MAP slug `web-rmms-cam-checkin` hoặc bind peer mobile-a |
| UNCLEAR-CI-ROLE-SOURCE | UI gate theo caps · cấm suy MANAGER-RMMS | confirm packageCode/roleCaps từ role-gate |
| GAP-DA-CI-STD-ALIAS | mfeStdUrl = alias only · deep-link product `/tuan-duong/...` | keep · **cấm** product slug mới |

## 7. design_confirm

| | |
|--|--|
| autoApprove | ON → **approve** |
| reviewUrl | prototype path above |
| handoff | SA · zone ids CI-01/02 · control-map · Pattern B · role visibility · real_view_parity v1 |

## Version meta

`skillVersion=2026.09.05.03` · `schemaVersion=1` · `contentHash=sha256:2ff2873ea06c8d3d8e707c24a142432b3f1e356db42bbb006f594fc6b9f213db` · `rulesVersion=2026.09.27.1` · `updatedAt=2026-10-01T00:30:00.000Z`
