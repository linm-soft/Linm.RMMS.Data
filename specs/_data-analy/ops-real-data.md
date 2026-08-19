# Real-data bind — ops (mobile)

| | |
|---|---|
| feature | `ops` |
| prefix | `mobile-bff/api/v1` |
| sameMobile | yes · proxy Notification domain |
| taskId | `task_f2c9a5de` |

## §A Resource

| Resource | Entity | Key |
|----------|--------|-----|
| Inbox notification | `Notification` / OfficialDocument P1 | `Id` Guid · `Code` OPS-* |

## §B Bind (khớp ops-bff-endpoints.md)

| UI | Method | Path | DTO fields → row |
|----|--------|------|------------------|
| List | GET | `notification/inbox` | `title`→title · `sender`+`sentAt`→subtitle · `isUnread`→badge |
| Mark read | POST | `notification/inbox/{id}/mark-read` | response `isUnread=false` |
| Badge Me/Home (opt) | GET | `notification/overview` | `unreadCount` |

## §C Write rules

| Action | Rule |
|--------|------|
| mark-read | Chỉ khi `isUnread==true` · idempotent OK |
| create/update/delete | **OUT** mobile P1 list |

## §D Map / offline

| Case | Behavior |
|------|----------|
| GET fail / offline | Demo 2 rows SSOT · list vẫn mở |
| POST mark-read fail | Toast error in-app · giữ unread UI |

## §E Progress

| Milestone | Status |
|-----------|--------|
| Analy BFF + real-data | **this turn** |
| Dev bind list + mark-read | Dev |
| Form create mobile | **OUT** / sibling |

## §F Cấm

- Invent mobile-only DTO fork  
- Bind web `mfeStdUrl`  
- Skip §B path ≠ BFF table → **GAP-MOB-REAL-01**

## Version meta (REQUIRED)

| Field | Value |
|-------|-------|
| skillId | agent-data-analy-mobile |
| skillVersion | 2026.08.19.17 |
| schemaVersion | 1 |
| workflowVersion | 2026.08.19.20 |
| rulesVersion | 2026.08.19.23 |
| generatedAt | 2026-08-19T11:50:00.000Z |
| versionGate | rechecked |

---
<!-- Version meta: skillId=agent-data-analy-mobile skillVersion=2026.08.19.17 schemaVersion=1 workflowVersion=2026.08.19.20 rulesVersion=2026.08.19.23 versionGate=rechecked -->
