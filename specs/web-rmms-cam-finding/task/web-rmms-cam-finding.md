# Team lead — Task — web-rmms-cam-finding

| Field | Value |
|-------|-------|
| feature | `web-rmms-cam-finding` |
| title | Camera phiếu tuần kiểm và SLA |
| this role | `team_lead` · `/agent-team-lead` |
| status | `confirmed` (autoApprove=ON) |
| changeScope | `edit_page` · **cấm** `new_page` · **cấm** invent product route |
| packKind | **`list`** · phone FIND-L/F/D · **≠** Kind B |
| lane | `web` |
| stack | `web_mfe_phone` · `Linm.Web.RMMS.Mobile` · `max-width: 430px` |
| formPattern | Mobile full · Finding* · LeaveConfirmModal · Pattern B GPS |
| DES-GRID / LinErpListFilterBar | **N/A** phone |
| mfeStdUrl | `http://localhost:9301/web-rmms-cam-finding` (alias only) |
| mfeStdRoute | alias `/web-rmms-cam-finding` · **cấm** invent product slug |
| productRoute | `/phat-hien/:sessionId` · `/moi` · `/:findingId` · `/:findingId/sua` |
| reviewUrl | `file:///D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-cam-finding/ui/prototype/index.html` |
| demo | **N/A** |
| mfe | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Mobile` |
| beRepo | `D:/AI-QLBD/Linm.RMMS.WebService` · Patrol · **cấm ERP.*** |
| bff | `Linm.RMMS.Mobile.Bff` `:5202` · `mobile-bff/api/v1` · **cấm** web-bff |
| contentHash | `sha256:a7c3e91f0b4d62e8c5f1a9d0e3b7c4f6a2d8e1b5c9f0a4d7e6b3c1f8a5d2e0b9` |
| autoApprove | **ON** |
| e2eQa | ON queued `/agent-qa*` · **cấm** e2e / start:std ở team_lead |
| `devSlash` | `/agent-dev` |
| route_confirm | **N/A** — edit_page · productRoute Live KEEP · alias only |
| entity/migration | **none** · Step 4b **skip** |
| updatedAt | `2026-10-01T07:37:30.000Z` |
| taskId | `task_430be830` |
| skillId | `agent-team-lead` |
| skillVersion | `2026.09.05.03` |
| schemaVersion | `1` |
| workflowVersion | `2026.09.19.02` |
| rulesVersion | `2026.09.27.1` |
| versionGate | `ok` |

**Cấm:** implement code ở TL · ERP.* · invent `CamFinding*` · invent product route · CTA giao trên FIND-* · `SlaHours=24` · Mục IV tiền · Excel · Kind B · web-bff · fake GPS · yarn build/e2e/start:std · Step 4b.

## 0. Priors (compact)

| Role | Status | Compact |
|------|--------|---------|
| data_analy | confirmed | `handoff/data_analy-compact.md` |
| po | confirmed | `handoff/po-compact.md` |
| design | confirmed | `handoff/design-compact.md` |
| sa | confirmed | `handoff/sa-compact.md` |

Full cite: `po/requirement.md` · `ui/design.md` · `be/solution-discovery.md` · `_data-analy/features/web-rmms-cam-finding-{control-hint,real-data}.md`

## 1. Scope summary

| | |
|--|--|
| Goal | Edit Finding* — role-gate tuần kiểm · dueAt TT41 suggest · SLA badge client · REMOVE assign CTA |
| Screens | FIND-L · FIND-F · FIND-D · DES-LEAVE · BANNER · roleGate |
| Peer | `web-rmms-mobile-c` Live · `web-rmms-giao-viec-ql-hat` assign UI · `web-rmms-role-gate` caps |
| Out | new route · CamFinding* · assign UI · SlaHours=24 · Mục IV · Excel · native |

## 2. FormMode ↔ API (Live KEEP)

| Mode | Zone | API |
|------|------|-----|
| list | FIND-L | API-01 GET findings?sessionId |
| create | FIND-F moi | API-03 POST findings · API-09 files · API-10 profile |
| edit | FIND-F sua | API-02 GET · API-04 PUT · API-09 |
| detail | FIND-D | API-02 GET · API-05 recheck · API-06 feedback |
| assign | — | API-07 **UI out** peer only |
| session | FIND-* | API-08 GET sessions/{id} |

## 3. Tasks (T-*)

| Id | Owner | Files / surface | AC | deps | status |
|----|-------|-----------------|----|------|--------|
| **T-FIND-ROLE** | Dev | `FindingListPage.tsx` · `FindingFormPage.tsx` · `FindingDetailPage.tsx` · role-gate | Gate `roleCaps.tuanKiem`: FAB moi · write Lưu · confirmPass/Fail · roleGateBanner non-TK RO · **cấm** suy QL_HAT từ MANAGER-RMMS | `web-rmms-role-gate` · API-10 | ready |
| **T-FIND-DUE** | Dev | `FindingFormPage.tsx` · client catalog | hangMuc change → dueAt suggest (Design §5 TT41) · editable trước Lưu · persist `dueAt` Live · **cấm** SlaHours=24 default | Design §5 · API-03/04 | ready |
| **T-FIND-SLA** | Dev | `FindingDetailPage.tsx` (+list card opt) | slaBadge **Trong hạn/Quá hạn** · client derive `dueAt` vs `now`/`recheckAt` · pair Đạt/Chưa đạt · **cấm** invent `slaStatus` DTO | SA CLOSED | ready |
| **T-FIND-ASSIGN-RM** | Dev | `FindingDetailPage.tsx` | **REMOVE** CTA Giao đơn vị BDTX · API-07 keep unused UI · peer `web-rmms-giao-viec-ql-hat` | SA | ready |
| **T-FIND-GPS** | Dev | FIND-F Lưu · FIND-D recheck | Pattern B: button enabled trừ `saving`\|`photoBusy` · deny → BANNER · **cấm** fake · **cấm** `disabled={!gps}` | SA Pattern B | ready |
| **T-FIND-LEAVE** | Dev | `FindingFormPage.tsx` | LeaveConfirmModal dirty discard · **cấm** native `confirm` | Design DES-LEAVE | ready |

### T-FIND-DUE catalog (cite Design §5)

| hangMuc | offset |
|---------|--------|
| Vá ổ gà (cấp I–II) | +3d |
| Vá ổ gà (cấp III–VI) | +5d |
| Nứt dọc/ngang/mai rùa | +7 mưa · +14 khô |
| Lún lõm / sình lún | +10d |
| Vệ sinh / chướng ngại nguy hiểm | +1h · else +7d |
| Nước đọng mặt đường | ≤24h (hạn lịch · ≠ SlaHours form) |
| Biển cấm / hiệu lệnh | +1 · khác +3 |
| Vạch sơn cục bộ | +28d |
| Tồn tại nghiệm thu | +5d từ văn bản |

**UNCLEAR-FIND-DUE-CATALOG** → Dev wire client map (table chốt).

## 4. Code touchpoints (edit only)

| Path | Notes |
|------|-------|
| `src/pages/WebRmmsMobileC/FindingListPage.tsx` | FAB gate · cards · optional slaBadge |
| `src/pages/WebRmmsMobileC/FindingFormPage.tsx` | due suggest · Pattern B · LeaveConfirm · TK write |
| `src/pages/WebRmmsMobileC/FindingDetailPage.tsx` | slaBadge · recheck · REMOVE assignCta |
| role-gate / profile caps | cite peer `web-rmms-role-gate` · API-10 |
| BFF client | Live `mobile-bff/api/v1/patrol/findings*` · sessions · files · **cấm** new path |

**Cấm:** new page/route file · CamFinding* · Step 4b migration · web-bff.

## 5. QA handoff (queued — không chạy ở TL)

| | |
|--|--|
| scenarios | `/agent-qa` → `qa/scenarios.md` |
| e2e | queued e2eQa · mfeStdUrl alias · product `/phat-hien/:sessionId*` |
| focus | role gate · due suggest · slaBadge · no assign CTA · Pattern B · leave dirty |

## 6. DoR

| Gate | Status |
|------|--------|
| changeScope + control-hint + real-data | PASS |
| T-* đủ AC + deps | PASS |
| route_confirm | N/A edit_page |
| compact handoff | `handoff/team_lead-compact.md` |
| next | `/agent-dev` · roleOnly stop (GAP-PKT-ROLE-01) |

**team_lead_confirm:** **approve** · autoApprove=ON · `task_430be830`
