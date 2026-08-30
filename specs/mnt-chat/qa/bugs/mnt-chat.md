# QA bugs — mnt-chat

| Field | Value |
|-------|-------|
| feature | `mnt-chat` |
| status | **open** · verdict **FAIL** |
| taskId | `task_81d1652d` |
| updatedAt | `2026-08-29T05:56:30.000Z` |

## Must / blockers

| ID | Severity | Issue | Evidence |
|----|----------|-------|----------|
| GAP-QA-PRIOR-BLOCKED-01 | Must | Handoff claimed analy→dev `confirmed` · disk **blocked**/stub | `_data-analy/mnt-chat-*.md` draft · `implement/*.md` blocked |
| GAP-QA-NO-IMPLEMENT-01 | Must | Không màn `#sc-mnt-chat` iOS/Android | Sources / app/src thiếu Chat sheet |
| GAP-QA-E2E-SKIP-UPSTREAM-01 | Must | e2eQa=ON · runtime **blocked** upstream (không fake CORE) | `qa/scenarios.md` |
| GAP-QA-STORE-01 | Must | Không A3 live shot | thiếu PNG |
| GAP-QA-STORE-03 | Must | Không P6 live shot | thiếu PNG |
| GAP-MOB-UX-01 | Must | ux-analy / proto stub | `ui/ux-analy.md` · proto ~520B |
| GAP-SA-ANALY-EMPTY-01 | Must | control-hint + real-data stub | `_data-analy/` |
| GAP-SA-BFF-MISS-01 | Must | thiếu bff-endpoints + action-tree | MISSING |
| GAP-SA-CTX-01 | Must | CTX feature MISSING | `docs/context/features/mnt-chat.md` |

## Align UX

**N/A** — không `A3-CORE` / `P6-CORE` PNG · **cấm** claim Aligned · **cấm** GAP-MOB-E2E-VIS-01 bằng fake.

## Next

1. Board `qa_fail_rollback` (Approve → Dev plan **chỉ sau** analy chain PASS — hiện root cause = data-analy stub).
2. Task riêng: `/agent-data-analy-mobile` → PO → Design → SA → TL → Dev → QA.
3. **Cấm** QA tự sửa native / BFF.
