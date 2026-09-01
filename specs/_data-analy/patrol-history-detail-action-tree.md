# Action tree — patrol-history-detail

| | |
|---|---|
| feature | `patrol-history-detail` |
| owner | **this pack** `DES-MOB-PAT-DETAIL` · Chi tiết ca |
| parent | `patrol-history` (`#sc-patrol-history` · list pack) |
| demo | target `#sc-patrol-detail` · entry list row (hiện toast `Chi tiết phiên`) |
| kind | `sheet` (STATUS/scan) · surface = **screen** |
| taskId | `task_b2fb1a98` |

Scan SSOT: `specs/_form-type-mobile/ACTION-TREE.md` · `BY-ACTION.md` · `DEAD-BUTTONS.md`  
Verify: live iOS/Android list row → toast `patrol.toast.detail` → this turn fills owner.

## Tree

```
patrol-home
└── patrol-history              ← list · DES-MOB-PAT-LIST · row tap
    └── patrol-history-detail   ← owner · DES-MOB-PAT-DETAIL · **this turn**
        ├── (GET sessions/{id}) ← cùng slug load · **cấm** enqueue
        ├── patrol-map          ← CTA Mở bản đồ ca · reuse · **không** start
        └── patrol-checkin      ← timeline tap → #sc-checkin-detail · **≠** slug · **cấm** gộp
patrol-checkin
└── #sc-checkin-detail          ← DES-MOB-CI-DETAIL · read owner · back `patrol-detail`
```

## Rows

| feature | parent | action | demoRel | kind | share | reuse | mapCite | usedOn | enqueue |
|---------|--------|--------|---------|------|-------|-------|---------|--------|---------|
| `patrol-history-detail` | `patrol-history` | Tap ca row | `#sc-patrol-history` row · toast → **wire** · `#sc-patrol-detail` | sheet→screen | unique | — | `LinmListRow` · hero Code · Timeline · PrimaryButton | history list | **this turn** `task_b2fb1a98` |
| `patrol-history` | `patrol-home` | stay list | after back | list | reuse | `patrol-history` | — | nav back | **không** |
| `patrol-map` | `patrol-history-detail` | Mở bản đồ ca | `#sc-patrol-detail` Primary · `go('patrol-map')` | map | shared_action | `patrol-map` | `LinmPrimaryButton` | detail CTA | **không** (Dev pending · **cấm** start) |
| `patrol-checkin` | — | timeline Xem | `#sc-checkin-detail` | sheet | unique | — | CI-DETAIL | field read | **không** — **≠** owner |
| `patrol-home` | — | hub | quick entry | hub | reuse | `patrol-home` | — | tab 5 | **không** |

## Chrome / same-slug (không enqueue) — GAP-MOB-ACT-07

| Control | Lý do |
|---------|--------|
| GET load appear | cùng slug bind · **không** sibling |
| Hero Code · badge · info rows | display bind |
| Timeline demo SSOT | display P1 · **không** enqueue GET check-ins |
| Toast err / empty 404 | feedback |
| Toast Chia sẻ / Kết thúc ca | feedback P1 |
| Back chevron | chrome nav parent |

## Enqueue sibling

| feature | status |
|---------|--------|
| `patrol-map` | Dev pending · **cấm** start (`GAP-MOB-ACT-06`) · **cấm** re-enqueue |
| `patrol-checkin` / `#sc-checkin-detail` | **khác slug** · **cấm** gộp / start từ đây |
| `patrol-history` filter toast | controlHint slug hiện tại · **không** enqueue |
| POST check-ins / PUT end session | **OUT** slug · **cấm** enqueue (`GAP-MOB-ACT-07`) |
| GET check-ins list | **MISSING** P2 · **cấm** enqueue từ data_analy |
| — new unique | **none** |

**GAP-MOB-ACT-01:** không — 1 slug owner.  
**GAP-MOB-ACT-02:** không gộp list / CI save / end PUT.  
**GAP-MOB-ACT-03:** dead button list row toast → this turn fills · DEAD-BUTTONS `task_b2fb1a98`.  
**GAP-MOB-ACT-04:** share/mapCite stamped · patrol-map = shared_action reuse.  
**GAP-MOB-BFF-01:** không thiếu GetById — timeline = demo gap riêng.  
**GAP-MOB-ACT-06:** không start patrol-map / patrol-checkin trong turn data_analy.  
**GAP-MOB-ACT-07:** không enqueue submit POST/PUT/DELETE.

## Version meta

| Field | Value |
|-------|-------|
| skillId | agent-data-analy-mobile |
| skillVersion | 2026.08.31.2 |
| schemaVersion | 2 |
| workflowVersion | 2026.08.31.2 |
| rulesVersion | 2026.08.31.2 |
| generatedAt | `2026-08-31T03:25:00.000Z` |
| versionGate | rechecked |
| contentHash | sha256:patrol-history-detail-action-tree-20260831 |
| taskId | `task_b2fb1a98` |

---
<!-- Version meta: skillId=agent-data-analy-mobile skillVersion=2026.08.31.2 schemaVersion=2 workflowVersion=2026.08.31.2 rulesVersion=2026.08.31.2 versionGate=rechecked -->
