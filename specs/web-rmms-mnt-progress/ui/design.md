# Design — web-rmms-mnt-progress

| Field | Value |
|-------|-------|
| feature | `web-rmms-mnt-progress` |
| title | Tiến độ công việc |
| this role | `design` · `/agent-design` |
| status | `confirmed` (autoApprove=ON) |
| design_confirm | **approve** (`task_93aa1b29`) |
| changeScope | `new_page` |
| packKind | **`list`** (PO · UI = **phone WORK-P form** · **≠** Kind B desktop) |
| lane | `web` |
| stack | `web_mfe_phone` · `Linm.Web.RMMS.Mobile` · `max-width: 430px` |
| formPattern | Mobile **full / sheet** · phone 430 · **không** ERP Modal/Slideout Kind B |
| DES-GRID / LinErpListFilterBar | **N/A** — phone Work form · **cấm** clone |
| Report AC / DES-RPT | **N/A** |
| shared_grid_example | **N/A** (phone) |
| real_view_parity | **v1** |
| peerStdUrl | `http://localhost:9301/web-rmms-work` |
| mfeStdUrl | `http://localhost:9301/web-rmms-mnt-progress` |
| mfeStdRoute | `/web-rmms-mnt-progress` |
| productRoute | `/work/progress` |
| reviewUrl | `file:///D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-mnt-progress/ui/prototype/index.html` |
| reviewUrl GPS deny | `file:///D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-mnt-progress/ui/prototype/index.html?deny=1` |
| reviewUrl complete | `file:///D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-mnt-progress/ui/prototype/index.html?pct=100` |
| demo | **N/A** · hash skip · **cấm** re-scan (**GAP-DES-DEMO-RESCAN-01**) |
| mfe | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Mobile` |
| beRepo | `D:/AI-QLBD/Linm.RMMS.WebService` · Maintenance WorkOrder · **cấm ERP.*** |
| bff | `Linm.RMMS.Mobile.Bff` · `:5202` · `mobile-bff/api/v1` · **cấm** web-bff |
| controlHint | `specs/_data-analy/features/web-rmms-mnt-progress-control-hint.md` |
| realData | `specs/_data-analy/features/web-rmms-mnt-progress-real-data.md` · §A+§B PASS |
| prior | PO `confirmed` · `handoff/po-compact.md` · DA `confirmed` · contentHash `sha256:a7e3c91b4d2f6801e5a9b0c3d8f1472e6b5a0d9c4e1f2837a6b5c4d3e2f1098a` |
| autoApprove | **ON** |
| e2eQa | ON queued `/agent-qa*` · **cấm** e2e / `yarn start:std` ở Design |
| `devSlash` | `/agent-dev` |
| updatedAt | `2026-09-26T05:30:00.000Z` |
| taskId | `task_93aa1b29` |
| skillId | `agent-design` |
| skillVersion | `2026.09.05.03` |
| schemaVersion | `1` |
| workflowVersion | `2026.09.19.02` |
| rulesVersion | `2026.09.25.2` |
| versionGate | `ok` |
| contentHash | `sha256:a7e3c91b4d2f6801e5a9b0c3d8f1472e6b5a0d9c4e1f2837a6b5c4d3e2f1098a` |

**Cấm:** Dev/BE trước confirm (đã autoApprove) · ERP.* · invent slug controller · MediaUrl trên Progress/Complete body · fake GPS · hardcode VN ngoài `useFormOptions` · `window.alert` · re-scan demo · Kind B DES-GRID · `LinErpListFilterBar` · Me*/feedback/cam-view · journal/kết ca · gộp WORK-L list DoD · `yarn build` / e2e / start:std ở role này.

## 0. Context / Demo

| ID | Path | Notes |
|----|------|-------|
| CTX-01 | `docs/context/features/web-rmms-mnt-progress.md` | greenfield WORK-P |
| CTX-02 | `docs/plan/web-rmms-mobile/SCREENS.md` | `/work/progress` |
| CTX-03 | peer `mnt-progress.md` · `web-rmms-work.md` | Android toast · WORK-L entry |
| DEM | — | **N/A** · hash skip · **cấm** crawl (**GAP-DES-DEMO-RESCAN-01**) |
| DA-01 / DA-02 | `_data-analy/features/web-rmms-mnt-progress-{control-hint,real-data}.md` | inventory + §B |
| PO | `po/requirement.md` · `handoff/po-compact.md` | GPS both buttons · MEDIA P1 · LABEL closed |
| tokens | `docs/mobile-tokens.json` | primary `#0C84C0` · phone 430 |

## 1. Pattern & ownership

| | |
|--|--|
| Frame | Phone **430px** · tokens primary `#0C84C0` · label **13** · field **≥16** (**GAP-TYP-01**) · control **≥44** |
| Surface | Full / sheet form · **cấm** ERP Modal/Slideout · **cấm** Kind B desktop |
| This feature | **WORK-P** only — header RO · % · Note · GPS · photo local · submit progress/complete |
| Peer WORK-L | Entry card action → `/work/progress?id=` (`web-rmms-work`) · **không** implement list ở slug này |
| Shell | TabBar / login — out |
| DES-LEAVE | Dirty form → confirm discard on back · toast · **cấm** `window.alert` |
| Out | WORK-G/C · Me* · feedback · cam-view · journal/kết ca · list/create WO |

### GPS gate (PO CLOSED — Design wire)

| | |
|--|--|
| Rule | **Cả** `submitProgress` **và** `submitComplete` bắt buộc GPS fix |
| Deny | Disable cả 2 nút · in-app banner/modal · **cấm** fake coords |
| Encode | `lat/lng/accuracyM` → text suffix trong `Note` only · **không** body field API |
| Cite | GAP-MOB-MNT-PROG-GPS-01 |

### MEDIA (PO CLOSED-P1)

| | |
|--|--|
| P1 | Camera / FileMulti **local preview** optional (`photoLocalIds`) |
| Body | **Cấm** `MediaUrl` / invent media trên Progress/Complete DTO |
| Persist | SA Signed mới mở · Dev **không** invent |

### LABEL-MAP (PO CLOSED)

| Status | List chrome badge |
|--------|-------------------|
| `new` | Chờ xử lý |
| `in_progress` | Đang xử lý |
| `done` | Đã hoàn thành |
| `cancelled` | Đã hủy |

FE: `useFormOptions()` / init-data · prototype hiện VN để review.

## 2. Screens / zones

| Zone | Route | Surface | Wire |
|------|-------|---------|------|
| **WORK-P** | product `/work/progress?id=` · std `/web-rmms-mnt-progress` | Full form | Header RO · % · Note · GPS · photos · 2 buttons |
| **WORK-P-GPS** | overlay / chip | GPS state | ok · deny · accuracy |
| **WORK-L** | peer `/work` | Entry only | Nav back · **không** DoD slug này |

### IA

```
(auth) Tab Work → WORK-L (web-rmms-work)
  card.action.progress → /work/progress?id={woId}
  std entry → /web-rmms-mnt-progress (?id=)
  GET work-orders/{id} → header + prefill %
  GPS fix → enable submitProgress + submitComplete
  GPS deny → disable both · banner
  Cập nhật → POST …/{id}/progress { ProgressPercent, Note? }
  Hoàn thành → POST …/{id}/complete { Note? } · server 100% + done
  back → WORK-L
```

### STD nest

| Decision | Rule |
|----------|------|
| Product | `/work/progress?id={woId}` |
| Std pack | `/web-rmms-mnt-progress` · query `?id=` · **không** nest dưới `/web-rmms-work/*` |
| Peer list | `web-rmms-work` owns WORK-L |

## 3. Field inventory (Control = controlHint)

| uiField | screen | controlHint | Required | Bind / notes |
|---------|--------|-------------|----------|--------------|
| topBarTitle | WORK-P | Text | * | copy key «Cập nhật trạng thái» |
| backNav | WORK-P | Button/Nav | * | → WORK-L peer |
| woCode | WORK-P | Text RO | * | GET `{id}` · `Code` |
| woTitle | WORK-P | Text RO | * | `Title` |
| woStatus | WORK-P | Badge RO | * | `Status` · list chrome map |
| woRouteName | WORK-P | Text RO | | `RouteName` |
| woWorkType | WORK-P | Text RO | | `WorkType` · init-data |
| progressPercent | WORK-P | **Number**/Slider | * | 0–100 · prefill · POST progress |
| note | WORK-P | **Text** | | optional · + GPS summary suffix |
| lat/lng/accuracyM | WORK-P | GPS | * (gate) | device · Note only · **cấm** body field |
| photoLocalIds | WORK-P | FileMulti | | local preview · GAP media · **cấm** MediaUrl body |
| submitProgress | WORK-P | Button primary | * | POST `…/progress` · GPS required |
| submitComplete | WORK-P | Button | * | POST `…/complete` · GPS required |
| gpsDenyBanner | WORK-P-GPS | Banner/Modal | | deny · disable both buttons |
| toast.* | WORK-P | Toast | * | 404 / validate / 503 · **cấm** `window.alert` |

**Labels:** `useFormOptions()` / copy keys — prototype VN để review; Dev wire key.

## 4. Prototype (REQUIRED)

| | |
|--|--|
| Path | `specs/web-rmms-mnt-progress/ui/prototype/index.html` |
| Zone | `#sc-mnt-progress` · `data-zone=WORK-P` |
| reviewUrl | `file:///D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-mnt-progress/ui/prototype/index.html` |
| Parity | Phone 430 · header WO · slider % · Note · GPS chip · photo strip · 2 CTAs · GPS deny board |
| Board | autoApprove=ON → `design_confirm=approve` |

### Query modes

| Query | Effect |
|-------|--------|
| (default) | WORK-P · GPS ok · %≈45 · both buttons enabled |
| `?deny=1` | GPS deny · both buttons disabled · banner |
| `?pct=100` | slider 100 · ready complete |
| `?done=1` | status badge Đã hoàn thành · RO hint (post-complete) |

## 5. Brand / typography

| Token | Hex / size |
|-------|------------|
| Primary / Deep | `#0C84C0` / `#086A9A` |
| Success / Warn / Danger | `#3CB448` / `#FCB43C` / `#F03C30` |
| Surface | `#F2F2F7` |
| label / field / nav | **13** / **≥16** / **17** |
| control height | **44** |

## 6. AC map

| AC / DoD | Design coverage |
|----------|-----------------|
| Prefill GET `{id}` | Header RO + % |
| POST progress | primary CTA · GPS gate |
| POST complete | secondary CTA · GPS gate |
| GPS→Note | chip + Note suffix · deny disable |
| MEDIA P1 | local photo strip · no MediaUrl body |
| LABEL | badge list chrome |
| Phone 430 · mobile-bff | frame · cite BFF |
| Out peers | no WORK-G/C / Me* / journal |

## 7. API (cite Live — SA confirm DTO)

| Method | Path | Note |
|--------|------|------|
| GET | `maintenance/work-orders/{id}` | prefill header + % |
| GET | `maintenance/work-orders/init-data` | status / workType display |
| POST | `maintenance/work-orders/{id}/progress` | `{ ProgressPercent, Note? }` |
| POST | `maintenance/work-orders/{id}/complete` | `{ Note? }` · server 100% + done |

App base `{BffBase}/mobile-bff/api/v1`. **Cấm** invent `web-rmms-mnt-progress/*` · **cấm** FE web-bff · **cấm ERP.***.

## 8. DES checklist

| ID | Result |
|----|--------|
| DES-A zone WORK-P | **PASS** |
| DES-B control = controlHint | **PASS** |
| DES-C GPS both buttons | **PASS** (PO) |
| DES-D MEDIA local only | **PASS** (P1) |
| DES-GRID / LinErpListFilterBar | **N/A** |
| DES-RPT | **N/A** |
| reviewUrl browser-openable | **PASS** |
| hash skip · no demo rescan | **PASS** |

## 9. Open → next · Handoff SA

| id | Owner |
|----|-------|
| (none open from PO) | — |
| GAP-MEDIA Signed | SA — optional DTO later |
| DOMAIN-MAP cite peer | SA confirm Maintenance row |

| Field | Value |
|-------|-------|
| Next slash | `/agent-sa` |
| Chain | roleOnly=design · **không** start SA turn này (**GAP-PKT-ROLE-01**) |
| Compact | `handoff/design-compact.md` |

## Version meta (REQUIRED)

| Field | Value |
|-------|-------|
| skillVersion | `2026.09.05.03` |
| schemaVersion | `1` |
| workflowVersion | `2026.09.19.02` |
| rulesVersion | `2026.09.25.2` |
| contentHash | `sha256:a7e3c91b4d2f6801e5a9b0c3d8f1472e6b5a0d9c4e1f2837a6b5c4d3e2f1098a` |
| versionGate | `ok` |
| design_confirm | `approve` |
| writtenAt | `2026-09-26T05:30:00.000Z` |
