# Action tree — nghiem-thu (mobile list)

| | |
|---|---|
| feature | `nghiem-thu` |
| owner | **this pack** `DES-MOB-NGHIEM-THU` · Công tác nghiệm thu |
| parent | `patrol-home` · `#row-nghiem-thu` |
| demo | `#sc-nghiem-thu` · `DES-MOB-NGHIEM-THU` · hub `#row-nghiem-thu` |
| kind | **`list`** |
| changeScope | `edit_page` |
| taskId | `task_b82ebc4c` |
| plan cite | `docs/plan/nghiem-thu-mau/README.md` · 1 slug = 1 action |
| generatedAt | `2026-09-20T00:39:00.000Z` |

## § Delta Current vs New

| Action | Current | New |
|--------|---------|-----|
| List labels | interim «Mẫu nghiệm thu» | Label **MAU-10** trên rowSub |
| Result chrome | không | badge ResultCode trên row · **cùng slug** · **cấm** enqueue |
| Scores UI | n/a | owner **create** / **detail** · **cấm** gộp vào list |
| Schema | Schema_NghiemThu | SA Schema_NghiemThuMau · **không** enqueue schema |
| Web Field | done | **OUT** queue `qlbd-mobile` |
| Siblings | pending_confirm / done prior | create/detail **cùng** MAU+scores delta · **cấm** start trong task list này |

## Tree

```
patrol-home
├── nghiem-thu                    ← kind=list · DES-MOB-NGHIEM-THU · **this turn** (MAU+Result overlay)
│   ├── patrol-home               ← nav back · reuse parent
│   ├── nghiem-thu-create         ← nav Tạo · Result+scores+criteria · pending_confirm / sibling
│   ├── nghiem-thu-detail         ← row tap · bind scores · sibling
│   ├── (search / filter)         ← chrome · **cấm** enqueue
│   ├── (GET list / init-data)    ← cùng slug · MAU-10 + ResultCodes · **cấm** enqueue
│   └── (rowResult badge)         ← display · **cấm** enqueue
├── field-reflect / cam-patrol / … ← siblings hub · **không** gộp
nghiem-thu-create                 ← sheet · scores · **không** implement trong slug list
nghiem-thu-detail                 ← sheet · scores · **không** implement trong slug list
(web Field /nghiem-thu)           ← OUT queue này
```

## Rows

| feature | parent | action | demoRel | kind | share | reuse | mapCite | usedOn | enqueue |
|---------|--------|--------|---------|------|-------|-------|---------|--------|---------|
| `nghiem-thu` | `patrol-home` | Công tác nghiệm thu | `#row-nghiem-thu` · `#sc-nghiem-thu` `DES-MOB-NGHIEM-THU` | list | unique | — | `LinmTopBar` · `LinmSearchField` · `LinmListRow` `#i-check` · ResultBadge | hub field | **this turn** `task_b82ebc4c` |
| `patrol-home` | — | Back Tuần đường | nav `go('patrol-home')` | hub | shared_action | `patrol-home` | `#i-chevron-left` | entry | **không** |
| `nghiem-thu-create` | `nghiem-thu` | Tạo · Result+criteria | `#sc-nghiem-thu-create` | sheet | unique | — | picker MAU-10 · Result · checklist | nav | sibling · **cấm** start trong task này |
| `nghiem-thu-detail` | `nghiem-thu` | Chi tiết · scores | row tap | sheet | unique | — | bind GET scores · PUT | row | sibling · **cấm** start trong task này |

## Chrome / same-slug (không enqueue) — GAP-MOB-ACT-07

| Control | Lý do |
|---------|--------|
| Back / Search / Status / Result badges | chrome / display |
| GET `patrol/nghiem-thu` · `init-data` | cùng slug API |
| Empty / fail toast | feedback |
| Tab `field` | shell |
| TemplateLabel resolve | catalog bind |

**GAP-MOB-ACT-01:** ok — list = 1 slug.  
**GAP-MOB-ACT-02:** không gộp create/detail / scores editor.  
**GAP-MOB-ACT-03:** siblings create/detail riêng pack.  
**GAP-MOB-ACT-06:** **cấm** start sibling trước Approve / ngoài task.  
**GAP-MOB-ACT-07:** không enqueue search/GET/badge.

## Enqueue sibling

| feature | status | note |
|---------|--------|------|
| `nghiem-thu-create` | sibling queue | MAU picker + Result + criteria + FileService · **không** start ở data_analy list |
| `nghiem-thu-detail` | sibling queue | bind scores · **không** start |
| Web `/nghiem-thu` | **OUT** | **cấm** enqueue `qlbd` turn này |
| Confirm / search / GET / Result badge | **cùng slug** | **cấm** enqueue |

## Version meta

| Field | Value |
|-------|-------|
| skillId | agent-data-analy-mobile |
| skillVersion | 2026.08.31.2 |
| schemaVersion | 2 |
| workflowVersion | 2026.09.19.3 |
| rulesVersion | 2026.09.19.6 |
| generatedAt | 2026-09-20T00:39:00.000Z |
| versionGate | ok |
| contentHash | sha256:nghiem-thu-action-tree-mau-20260920 |

---
<!-- Version meta: skillId=agent-data-analy-mobile skillVersion=2026.08.31.2 schemaVersion=2 workflowVersion=2026.09.19.3 rulesVersion=2026.09.19.6 versionGate=ok -->
