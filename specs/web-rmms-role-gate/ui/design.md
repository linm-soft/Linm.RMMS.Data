# Design — web-rmms-role-gate

| Field | Value |
|-------|-------|
| feature | `web-rmms-role-gate` |
| title | Quyền QL_HAT và vai theo chức danh |
| this role | `design` · `/agent-design` |
| status | `confirmed` (autoApprove=ON) |
| design_confirm | **approve** (`task_1c2a1e71`) |
| changeScope | `edit_page` |
| packKind | **`list`** (PO · UI = phone **profile gate + visibility** · **≠** Kind B desktop) |
| lane | `web` |
| stack | `web_mfe_phone` · `Linm.Web.RMMS.Mobile` · `max-width: 430px` |
| formPattern | Mobile **full** · profile RO + visibility gates · assign **peer sheet** · **không** ERP Modal/Slideout Kind B |
| DES-GRID / LinErpListFilterBar | **N/A** — phone gate · **cấm** clone Kind B |
| Report AC / DES-RPT | **N/A** |
| shared_grid_example | **N/A** (phone) |
| real_view_parity | **v1** |
| peerStdUrl | `http://localhost:9301/web-rmms-role-gate` |
| mfeStdUrl | `http://localhost:9301/web-rmms-role-gate` |
| mfeStdRoute | `/web-rmms-role-gate` |
| reviewUrl | `file:///D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-role-gate/ui/prototype/index.html` |
| demo | **N/A** · hash skip · **cấm** re-scan (**GAP-DES-DEMO-RESCAN-01**) |
| mfe | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Mobile` |
| beRepo | `D:/AI-QLBD/Linm.RMMS.WebService` · Integration job-titles + Auth profile · Mobile.Bff `:5202` · **cấm ERP.*** |
| controlHint | `specs/_data-analy/features/web-rmms-role-gate-control-hint.md` |
| realData | `specs/_data-analy/features/web-rmms-role-gate-real-data.md` · §A+§B PASS |
| prior | PO `confirmed` · `handoff/po-compact.md` · contentHash `sha256:cc33bfbc2361d40d732e6b018e209ccce2e8778cce33f39c7766119237ba4216` |
| autoApprove | **ON** |
| e2eQa | ON queued `/agent-qa*` · **cấm** e2e / `yarn start:std` ở Design |
| `devSlash` | `/agent-dev` |
| updatedAt | `2026-09-30T16:21:00.000Z` |
| taskId | `task_1c2a1e71` |
| skillId | `agent-design` |
| skillVersion | `2026.09.05.03` |
| schemaVersion | `1` |
| workflowVersion | `2026.09.19.02` |
| rulesVersion | `2026.09.19.7` |
| versionGate | `ok` |
| contentHash | `sha256:cc33bfbc2361d40d732e6b018e209ccce2e8778cce33f39c7766119237ba4216` |

**Cấm:** Dev/BE trước confirm (đã autoApprove) · ERP.* · invent `role-gate/*` · Kind B DES-GRID · `LinErpListFilterBar` · Excel · SLA 24h default · tiền Mục IV · suy Giao việc từ `MANAGER-RMMS` · route public mới · fake caps / demo-json · hardcode label ngoài `useFormOptions` · native `alert`/`confirm` · re-scan demo · `yarn build` / e2e / start:std · iOS/Android · web-bff.

## 0. Context / Demo

| ID | Path | Notes |
|----|------|-------|
| CTX-01 | `docs/context/features/web-rmms-role-gate.md` | edit_page P0 |
| CTX-02 | `docs/plan/web-rmms-mobile/PLAN-3-VAI.md` | delta 3 vai + QL_HAT |
| CTX-03 | `docs/context/seed/job-title-seed.json` | HAT-* → QL_HAT |
| DEM | — | **N/A** · hash skip |
| DA-01 / DA-02 | `_data-analy/features/web-rmms-role-gate-{control-hint,real-data}.md` | inventory + §B |
| PO | `po/requirement.md` · `handoff/po-compact.md` | AC-RG-01…10 · AC-GRID-01…03 phone |
| tokens | `docs/mobile-tokens.json` | primary `#0C84C0` · phone 430 |

## 1. Pattern & ownership

| | |
|--|--|
| Frame | Phone **430px** · primary `#0C84C0` · label **13** · field **≥16** (**GAP-TYP-01**) |
| Feature owns | **RG-00…03d** — profile gate bind + visibility matrix trên surfaces đã ship |
| Peer owns | Home · Shell TabBar · PatrolHub · Incident assign sheet · Finding · Nghiệm thu · Master job-title |
| DES-LEAVE | RG-01 RO **N/A** · RG-02 Master dirty → **LeaveConfirmModal** · RG-03c assign dirty → **LeaveConfirmModal** · **cấm** native |
| Out | `/me*` · Excel · Mục IV money · invent host/tab/route · MANAGER→Giao việc |

## 2. Screens / zones

| Zone | Route / surface | Surface | Wire |
|------|-----------------|---------|------|
| **RG-00** | phone | Frame | max-width 430 · center desktop review · Android 1-1 |
| **RG-01** | profile post-login | Full RO | displayName · jobTitle Chip · package Chip · roleCaps flags |
| **RG-02** | Master job-title (cite) | peer Full/Modal | seed `packageHint` HAT-TRUONG/HAT-PHO → `QL_HAT` · LeaveConfirm dirty |
| **RG-03a** | Home grid (peer) | Full | tiles gated by `roleCaps` · **cấm** desktop filter bar |
| **RG-03b** | PatrolHub / Shell | Full / Tab | ẩn quick NT trên hub TD · tab highlight theo vai |
| **RG-03c** | Incident / báo cáo ca | Full + assign sheet | CTA **Giao việc xử lý** iff `qlHat` · dueAt TT41 editable |
| **RG-03d** | Finding / Nghiệm thu | Full | Pass/Fail iff `tuanKiem` · NT **cấm** assign · link prior RO |

### IA (persona → visibility)

```
profile GET → packageCode + roleCaps
  tuanDuong  → Home TD tiles · hub TD · /van-de/moi · ẩn Giao việc · ẩn TK lập · ẩn NT mới
  tuanKiem   → ô Tuần kiểm · /tuan-kiem* · Pass/Fail · ẩn Giao việc · ẩn mở ca TD · ẩn tạo NT
  nghiemThu  → /nghiem-thu* RO prior · ẩn Giao việc · ẩn Pass/Fail · ẩn mở ca
  qlHat      → mọi sự cố + CTA Giao việc · form assignee/team/hangMuc/dueAt/note · ẩn xác nhận hộ · ẩn lập NT
HAT-* seed   → packageHint=QL_HAT (≠ MANAGER-RMMS)
```

## 3. Field inventory (Control = controlHint)

| uiField | screen | controlHint | Required | Bind / notes |
|---------|--------|-------------|----------|--------------|
| phoneFrame | RG-00 | Layout | * | max-width 430 |
| profile.displayName | RG-01 | Text RO | * | `GET auth/profile` |
| profile.jobTitleCode | RG-01 | Text/Chip RO | * | resolve job-titles · **không** free text |
| profile.jobTitleName | RG-01 | Text RO | * | catalog / profile |
| profile.packageCode | RG-01 | Chip RO | * | `QL_HAT` \| `MANAGER-RMMS` \| `RMMS-TDTK` \| … |
| roleCaps.tuanDuong | RG-01 | Flag RO | * | derived seed/profile |
| roleCaps.tuanKiem | RG-01 | Flag RO | * | derived · view cấu hình trên chức vụ, không hard-code mã |
| roleCaps.nghiemThu | RG-01 | Flag RO | * | derived · seed `NGHIEM-THU` (PO resolved → SA) |
| roleCaps.qlHat | RG-01 | Flag RO | * | `packageCode==QL_HAT` · **cấm** MANAGER |
| seed.packageHint | RG-02 | Dropdown | Master | HAT-* → `QL_HAT` · PUT job-titles |
| home.tile.* | RG-03a | Button/Nav gated | roleCap | peer home |
| hub.quick.nghiemThu | RG-03b | Button gated | — | **ẩn** trên hub TD |
| shell.tab.* | RG-03b | Tab gated | roleCap | tuần kiểm **không** thắp tab TD |
| incident.btnAssign | RG-03c | Button primary gated | qlHat | «Giao việc xử lý» |
| assign.assignee | RG-03c | SearchInput | when open | users catalog |
| assign.team | RG-03c | SearchInput | when open | đơn vị BD |
| assign.hangMuc | RG-03c | SearchInput/Dropdown | when open | → due hint |
| assign.dueAt | RG-03c | DateTime | when open | TT41 gợi ý · **editable** · **cấm** SlaHours=24 |
| assign.note | RG-03c | Text | — | free |
| finding.btnPass / btnFail | RG-03d | Button gated | tuanKiem | peer findings |
| finding.slaLabel | RG-03d | Chip RO | — | Trong/Quá hạn · **không** trừ tiền |
| nghiemThu.btnAssign | RG-03d | — | — | **cấm** hiện |
| nghiemThu.linkPrior | RG-03d | Link RO | nt | xem ca / phiếu đã xác nhận |

**Labels:** `useFormOptions()` / copy keys — prototype hiện nhãn VN review; Dev wire key.  
**GPS:** none trên RG-01 · peer cam forms giữ GPS riêng.  
**Filter:** phone **không** `LinErpListFilterBar`.

## 4. Prototype (REQUIRED)

| | |
|--|--|
| Artifact | `ui/prototype/index.html` |
| List zones | **N/A** Kind B · phone A–D = content panels RG-01…03d + persona board |
| Form zones | Profile RO · assign sheet peer (no ERP 5-col) · LeaveConfirm cite |
| SSOT | `design-prototype-review.md` · `design-real-view-parity` · phone Home peer |
| **reviewUrl** | `file:///D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-role-gate/ui/prototype/index.html` |
| **peerStdUrl** | `http://localhost:9301/web-rmms-role-gate` |
| **real_view_parity** | `v1` |

### Wire (phone gate — REQUIRED)

```
[RG-00] phone ≤430
[RG-01] profile: tên · chức danh Chip · package Chip · caps Flag RO
[RG-02] seed cite: HAT-* packageHint=QL_HAT (Master peer)
[RG-03a] Home tiles gated theo roleCaps
[RG-03b] Hub quick ẩn NT trên TD · Shell tab theo vai
[RG-03c] CTA Giao việc iff qlHat · sheet assignee/team/hangMuc/dueAt/note
[RG-03d] Pass/Fail iff tuanKiem · NT link prior RO · cấm assign
Persona board: Tuần đường | Tuần kiểm | Nghiệm thu | Hạt trưởng (QL_HAT)
```

## 5. AC map (Design → prototype)

| AC | Prototype proof |
|----|-----------------|
| AC-GRID-01…03 | Phone tiles/tabs · toast cite · no new route |
| AC-RG-01 | RG-01 RO fields |
| AC-RG-02 | RG-02 chip QL_HAT cho HAT-* |
| AC-RG-03 | Persona QL_HAT only shows assign CTA · MANAGER persona **không** (out of board; note) |
| AC-RG-04…07 | Persona switcher visibility matrix |
| AC-RG-08 | dueAt prefilled hint · editable · no «24h SLA» |
| AC-RG-09 | Hub TD ẩn NT · tab highlight |
| AC-RG-10 | no invent API path on wire |

## 6. Leave / alert

| Surface | Rule |
|---------|------|
| RG-01 | no dirty |
| RG-02 / RG-03c | **LeaveConfirmModal** · toast API fail · **cấm** `window.alert`/`confirm` |
| Gate deny | toast in-app |
| Route confirm | `/xac-nhan-tuyen` khi `needsRouteConfirm` · checkbox «Bạn là quản lý» làm tuyến optional · tuần đường/tuần kiểm bắt buộc |
| Chức vụ view | `/cau-hinh-chuc-vu`: tick Enable nhiều view, một Default. `ViewCode` là default. Phiên đổi trong các view đã bật, vào default. |
| Boot | Sau login, `/web-rmms-role-gate` mount trong MemoryRouter. Không giữ “Đang tải hệ thống…” bằng cách gọi lại `session-window`. |

## 7. Handoff → SA / TL

| | |
|--|--|
| SA | GAP-RG-DM-01 DOMAIN-MAP · GAP-RG-PROF-01 profile DTO · seed `NGHIEM-THU` (PO resolved) · GAP-RG-SEED-01 HAT-* |
| TL/Dev | edit peers visibility + profile bind · Mobile.Bff only · **cấm** invent controller |
| next | `/agent-sa` · roleOnly stop (**GAP-PKT-ROLE-01**) |

## Version meta

`skillVersion=2026.09.05.03` · `schemaVersion=1` · `workflowVersion=2026.09.19.02` · `rulesVersion=2026.09.19.7` · `contentHash=sha256:cc33bfbc2361d40d732e6b018e209ccce2e8778cce33f39c7766119237ba4216` · `writtenAt=2026-09-30T16:21:00.000Z` · `design_confirm=approve` · `autoApprove=ON`
