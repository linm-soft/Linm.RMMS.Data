# Real-data bind — mnt-list (mobile)

| | |
|---|---|
| feature | `mnt-list` |
| prefix | `mobile-bff/api/v1` |
| sameMobile | yes · proxy Maintenance domain |
| taskId | `task_659bf5c2` |

## §A Resource

| Resource | Entity | Key |
|----------|--------|-----|
| Work order | `WorkOrder` / `rmms_work_orders` | `Id` Guid · `Code` WO-* |

## §B Bind (khớp mnt-list-bff-endpoints.md)

| UI | Method | Path | DTO fields → card |
|----|--------|------|-------------------|
| List | GET | `maintenance/work-orders` | `title`→title · `teamName`+`assigneeName`→assignLine · `createdAt`+`dueAt`→range · `incidentId`+`routeName`→meta · `status`→statusLabel |
| Init (opt) | GET | `maintenance/work-orders/init-data` | statuses / workTypes — filter P2 |

### Assign line rule

`"{teamName} giao việc cho {assigneeName}"` · thiếu team → `"Giao việc cho {assigneeName}"` · cả thiếu → demo copy fallback.

### Meta line rule

Có `incidentId`: `"Từ sự cố {incidentId} · {routeName}"` · không: `routeName` only.

## §C Write rules

| Action | Rule |
|--------|------|
| list read | P1 only trên slug `mnt-list` |
| create/update/delete/progress/comments | **OUT** slug này · sibling / web |

## §D Map / offline

| Case | Behavior |
|------|----------|
| GET fail / offline | Demo 2 cards SSOT · list vẫn mở |
| Empty live + no demo gate | EmptyChrome optional |

## §E Progress

| Milestone | Status |
|-----------|--------|
| Analy BFF + real-data | **this turn** |
| Dev bind list | Dev |
| Estimate / chat / progress sheets | siblings `pending_confirm` |

## §F Cấm

- Invent mobile-only DTO fork  
- Bind web `mfeStdUrl`  
- Skip §B path ≠ BFF table → **GAP-MOB-REAL-01**

## Demo rows SSOT (fallback)

| title | assignLine | range | meta | status |
|-------|------------|-------|------|--------|
| Vá mặt đường | Hạt trưởng VP-IV.1 giao việc cho Nguyễn Văn A · Tổ tuần đường | 2026-08-10 08:30 — 2026-08-12 17:00 | Từ sự cố SC-2401 · QL.1 Km 1556+080 | Chờ xử lý (`new`) |
| Nạo cống | Hạt trưởng giao việc cho Trần Khánh · Chi cục II.2 | 2026-08-09 07:00 — 2026-08-09 16:00 | Tuyến HCM | Đã hoàn thành (`done`) |

## Version meta (REQUIRED)

| Field | Value |
|-------|-------|
| skillId | agent-data-analy-mobile |
| skillVersion | 2026.08.25.01 |
| schemaVersion | 2 |
| workflowVersion | 2026.08.25.01 |
| rulesVersion | 2026.08.25.2 |
| generatedAt | 2026-08-28T18:45:00.000Z |
| versionGate | rechecked |
| contentHash | sha256:mnt-list-mobile-real-data-20260828 |

---
<!-- Version meta: skillId=agent-data-analy-mobile skillVersion=2026.08.25.01 schemaVersion=2 workflowVersion=2026.08.25.01 rulesVersion=2026.08.25.2 versionGate=rechecked -->
