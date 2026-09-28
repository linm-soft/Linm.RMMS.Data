# Design — web-rmms-mnt-progress

| Field | Value |
|-------|-------|
| feature | `web-rmms-mnt-progress` |
| title | Tiến độ công việc — edit Pattern B |
| this role | `design` · `/agent-design` |
| status | `confirmed` (autoApprove=ON) |
| design_confirm | **approve** (`task_70abcc01`) |
| changeScope | `edit_page` |
| packKind | **`list`** (PO · UI = **phone WORK-P form** · **≠** Kind B desktop) |
| lane | `web` |
| stack | `web_mfe_phone` · `Linm.Web.RMMS.Mobile` · `max-width: 430px` |
| formPattern | Mobile **full / sheet** · phone 430 · **không** ERP Modal/Slideout Kind B |
| DES-GRID / LinErpListFilterBar | **N/A** — phone Work form · **cấm** clone |
| Report AC / DES-RPT | **N/A** |
| shared_grid_example | **N/A** (phone) |
| real_view_parity | **v1** |
| peerStdUrl | `http://localhost:9301/cong-viec` |
| mfeStdUrl | `http://localhost:9301/cong-viec/tien-do` |
| mfeStdRoute | `/cong-viec/tien-do` |
| productRoute | `/work/progress` |
| reviewUrl | `file:///D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-mnt-progress/ui/prototype/index.html` |
| reviewUrl GPS deny | `file:///D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-mnt-progress/ui/prototype/index.html?deny=1` |
| reviewUrl complete | `file:///D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-mnt-progress/ui/prototype/index.html?pct=100` |
| demo | **N/A** · hash skip · **cấm** re-scan (**GAP-DES-DEMO-RESCAN-01**) |
| deltaCite | `docs/plan/web-rmms-mobile/SUBMIT-VALIDATE.md` (Pattern B) |
| mfe | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Mobile` |
| beRepo | `D:/AI-QLBD/Linm.RMMS.WebService` · Maintenance WorkOrder · **cấm ERP.*** |
| bff | `Linm.RMMS.Mobile.Bff` · `:5202` · `mobile-bff/api/v1` · **cấm** web-bff |
| controlHint | `specs/_data-analy/features/web-rmms-mnt-progress-control-hint.md` |
| realData | `specs/_data-analy/features/web-rmms-mnt-progress-real-data.md` · §A+§B+§Delta PASS |
| prior | PO `confirmed` · `handoff/po-compact.md` · DA `confirmed` · contentHash `sha256:544d007b5b40b3f3b71bb94aa78e804b2342af0c6eb7ec1edcea4b76b1b28080` |
| autoApprove | **ON** |
| e2eQa | ON queued `/agent-qa*` · **cấm** e2e / `yarn start:std` ở Design |
| `devSlash` | `/agent-dev` |
| updatedAt | `2026-09-27T13:40:00.000Z` |
| taskId | `task_70abcc01` |
| skillId | `agent-design` |
| skillVersion | `2026.09.05.03` |
| schemaVersion | `1` |
| workflowVersion | `2026.09.19.02` |
| rulesVersion | `2026.09.25.2` |
| versionGate | `ok` |
| contentHash | `sha256:544d007b5b40b3f3b71bb94aa78e804b2342af0c6eb7ec1edcea4b76b1b28080` |

**Cấm:** Dev/BE trước confirm (đã autoApprove) · ERP.* · invent slug controller · MediaUrl trên Progress/Complete body · fake GPS · hardcode VN ngoài `useFormOptions` · `window.alert` · re-scan demo · Kind B DES-GRID · `LinErpListFilterBar` · Me*/feedback/cam-view · journal/kết ca · gộp WORK-L list DoD · `yarn build` / e2e / start:std ở role này · GPS pre-disable CTA (**SUPERSEDED** → Pattern B).

## 0. Context / Demo

| ID | Path | Notes |
|----|------|-------|
| CTX-01 | `docs/context/features/web-rmms-mnt-progress.md` | edit_page · § Delta Pattern B |
| CTX-02 | `docs/plan/web-rmms-mobile/SCREENS.md` | `/work/progress` |
| CTX-03 | `docs/plan/web-rmms-mobile/SUBMIT-VALIDATE.md` | Pattern B HARD · row `MntProgressPage.tsx` |
| DEM | — | **N/A** · hash skip · **cấm** crawl (**GAP-DES-DEMO-RESCAN-01**) |
| DA-01 / DA-02 | `_data-analy/features/web-rmms-mnt-progress-{control-hint,real-data}.md` | inventory + §B + §Delta |
| PO | `po/requirement.md` · `handoff/po-compact.md` | Pattern B · BANNER-COPY CLOSED · MEDIA P1 · LABEL closed |
| tokens | `docs/mobile-tokens.json` | primary `#0C84C0` · phone 430 |

## 1. Pattern & ownership

| | |
|--|--|
| Frame | Phone **430px** · tokens primary `#0C84C0` · label **13** · field **≥16** (**GAP-TYP-01**) · control **≥44** |
| Surface | Full / sheet form · **cấm** ERP Modal/Slideout · **cấm** Kind B desktop |
| This feature | **WORK-P** only — keep Live layout · Delta CTA/banner/capture |
| Peer WORK-L | Entry → `/work/progress?id=` (`web-rmms-work` · std `/cong-viec`) · **không** implement list |
| Shell | TabBar / login — out |
| DES-LEAVE | Dirty form → confirm discard on back · toast · **cấm** `window.alert` |
| Out | WORK-G/C · Me* · feedback · cam-view · journal/kết ca · list/create WO · Excel |

### GPS — Pattern B (PO CLOSED · SUPERSEDES disable-gate)

| | |
|--|--|
| CTA enable | `submitProgress` / `submitComplete` · **`disabled={saving}` only** (hoặc chưa có `wo`) · **cấm** `ctasDisabled` / GPS pre-lock |
| Deny UX | Click → `validationBanner` + keys `mnt.progress.gps.*` (deny/required/unavailable) · **cấm** fake · **cấm** silent `return` without banner |
| Encode | `lat/lng/accuracyM` → text suffix trong `Note` only · **không** body field API |
| Cite | SUBMIT-VALIDATE Pattern B · GAP-MOB-MNT-PROG-GPS-01 (encode) |

### MEDIA (PO CLOSED-P1) + capture Delta

| | |
|--|--|
| P1 | Camera / FileMulti **local preview** optional (`photoLocalIds`) |
| Capture | `accept="image/*"` + **`capture="environment"`** |
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
| **WORK-P** | product `/work/progress?id=` · std `/cong-viec/tien-do` | Full form | Header RO · % · Note · GPS · photos+capture · banner · 2 CTAs Pattern B |
| **WORK-P-GPS** | chip + banner | GPS state | ok · deny · accuracy · banner on click |
| **WORK-L** | peer `/work` · std `/cong-viec` | Entry only | Nav back · **không** DoD slug này |

### IA

```
(auth) Tab Work → WORK-L (web-rmms-work)
  card.action.progress → /work/progress?id={woId}
  std entry → /cong-viec/tien-do (?id=)
  GET work-orders/{id} → header + prefill %
  CTAs luôn bật (trừ saving / !wo)
  Click + GPS deny → validationBanner (mnt.progress.gps.*) · không POST
  Click + GPS ok → embed GPS vào Note · POST
  Cập nhật → POST …/{id}/progress { ProgressPercent, Note? }
  Hoàn thành → POST …/{id}/complete { Note? } · server 100% + done
  back → WORK-L
```

### STD nest

| Decision | Rule |
|----------|------|
| Product | `/work/progress?id={woId}` |
| Std pack | `/cong-viec/tien-do` · query `?id=` · **cấm** `/web-rmms-mnt-progress` |
| Peer list | `web-rmms-work` owns WORK-L · std `/cong-viec` |

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
| lat/lng/accuracyM | WORK-P | GPS | * on submit | device · Note only · Pattern B on click |
| validationBanner | WORK-P | Banner `string[]` | | NEW Pattern B · sau `validationAttempted` · keys `mnt.progress.gps.*` |
| photoLocalIds | WORK-P | FileMulti | | local + **`capture="environment"`** · **cấm** MediaUrl body |
| submitProgress | WORK-P | Button primary | * | POST `…/progress` · `disabled={saving}` only |
| submitComplete | WORK-P | Button | * | POST `…/complete` · cùng rule Pattern B |
| toast.* | WORK-P | Toast | * | 404 / API / 503 · **cấm** `window.alert` · API ≠ banner |

**Labels:** `useFormOptions()` / copy keys — prototype VN để review; Dev wire key.

## 4. Prototype (REQUIRED)

| | |
|--|--|
| Path | `specs/web-rmms-mnt-progress/ui/prototype/index.html` |
| Zone | `#sc-mnt-progress` · `data-zone=WORK-P` |
| reviewUrl | `file:///D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-mnt-progress/ui/prototype/index.html` |
| Parity | Phone 430 · header WO · slider % · Note · GPS chip · photo+capture · Pattern B CTAs · banner on click deny |
| Board | autoApprove=ON → `design_confirm=approve` |

### Query modes

| Query | Effect |
|-------|--------|
| (default) | WORK-P · GPS ok · %≈45 · both CTAs enabled · click → toast POST |
| `?deny=1` | GPS deny chip · CTAs **still enabled** · click → `validationBanner` (no POST) |
| `?pct=100` | slider 100 · ready complete |
| `?done=1` | status badge Đã hoàn thành · CTAs disabled (post-complete RO) |

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
| POST progress | primary CTA · Pattern B enable |
| POST complete | secondary CTA · Pattern B enable |
| GPS→Note | chip + Note suffix · deny → banner on click |
| Capture | `capture="environment"` on file input |
| MEDIA P1 | local photo strip · no MediaUrl body |
| LABEL | badge list chrome |
| Phone 430 · mobile-bff | frame · cite BFF |
| Out peers | no WORK-G/C / Me* / journal |

## 7. API (cite Live — SA confirm DTO)

| Method | Path | Note |
|--------|------|------|
| GET | `maintenance/work-orders/{id}` | prefill header + % |
| GET | `maintenance/work-orders/init-data` | status / workType display |
| POST | `maintenance/work-orders/{id}/progress` | `{ ProgressPercent, Note? }` · unchanged |
| POST | `maintenance/work-orders/{id}/complete` | `{ Note? }` · server 100% + done · unchanged |

App base `{BffBase}/mobile-bff/api/v1`. **Cấm** invent DTO lat/media · **cấm** FE web-bff · **cấm ERP.***.

## 8. DES checklist

| ID | Result |
|----|--------|
| DES-A zone WORK-P | **PASS** |
| DES-B control = controlHint | **PASS** |
| DES-C Pattern B CTA/banner | **PASS** (PO · SUPERSEDES disable-gate) |
| DES-D MEDIA local + capture | **PASS** (P1 + capture) |
| DES-GRID / LinErpListFilterBar | **N/A** |
| DES-RPT | **N/A** |
| reviewUrl browser-openable | **PASS** |
| hash skip · no demo rescan | **PASS** |

## 9. Open → next · Handoff SA

| id | Owner |
|----|-------|
| (none open from PO) | — |
| GAP-MEDIA Signed | SA — optional DTO later · defer P2 |
| DOMAIN-MAP cite peer | SA confirm Maintenance row |

| Field | Value |
|-------|-------|
| Next slash | `/agent-sa` |
| Chain | roleOnly=design · **không** start SA turn này (**GAP-PKT-ROLE-01**) |
| Compact | `handoff/design-compact.md` |
| Edit tasks | T-EDIT-01 CTA · T-EDIT-02 banner · T-EDIT-03 capture |

## Version meta (REQUIRED)

| Field | Value |
|-------|-------|
| skillVersion | `2026.09.05.03` |
| schemaVersion | `1` |
| workflowVersion | `2026.09.19.02` |
| rulesVersion | `2026.09.25.2` |
| contentHash | `sha256:544d007b5b40b3f3b71bb94aa78e804b2342af0c6eb7ec1edcea4b76b1b28080` |
| versionGate | `ok` |
| design_confirm | `approve` |
| writtenAt | `2026-09-27T13:40:00.000Z` |
