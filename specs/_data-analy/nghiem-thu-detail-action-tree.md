# Action tree — nghiem-thu-detail (mobile sheet)

| | |
|---|---|
| feature | `nghiem-thu-detail` |
| owner | **this pack** `DES-MOB-NGHIEM-THU-DETAIL` · Chi tiết / Sửa nghiệm thu |
| parent | `nghiem-thu` · row tap list |
| demo | `#sc-nghiem-thu` toast · **GAP-MOB-NT-DETAIL-01** (chưa `#sc-nghiem-thu-detail`) |
| kind | **`sheet`** (STATUS/scan) · surface = **screen** |
| changeScope | `edit_page` |
| taskId | `task_edea0c3a` |
| generatedAt | `2026-09-19T18:55:00.000Z` |

## § Delta Current vs New

| Action | Current | New |
|--------|---------|-----|
| Row tap | `toast('NT-*')` | ship owner sheet · GET `{id}` · **this turn** |
| Sửa / Lưu | không có | cùng slug PUT · **cấm** enqueue |
| Đóng / Hủy | — | reuse parent list / discard View |
| Gallery | không có | cùng slug files + `MediaIds` · **cấm** `files-nt` · **cấm** enqueue |
| Kết quả / tiêu chí | không có | cùng slug init-data + Scores · **cấm** enqueue |
| Xóa | DELETE web live | **OUT** P1 · **cấm** enqueue |
| Create | sibling | **không** gộp / **không** start |

## Tree

```
nghiem-thu
├── nghiem-thu-detail           ← kind=sheet · DES-MOB-NGHIEM-THU-DETAIL · **this turn** · edit_page
│   ├── nghiem-thu              ← Đóng / back · reuse parent
│   ├── (GET {id})              ← cùng slug · **cấm** enqueue
│   ├── (init-data / mẫu / kết quả) ← cùng slug · **cấm** enqueue
│   ├── (scores checklist)      ← cùng slug · **cấm** enqueue
│   ├── (GPS / vị trí)          ← cùng slug · **cấm** enqueue
│   ├── (files gallery)         ← cùng slug FileService · **cấm** enqueue
│   └── (Lưu PUT)               ← cùng slug submit · **cấm** enqueue
nghiem-thu                      ← parent list · **không** gộp
nghiem-thu-create               ← sibling · **không** gộp / **không** start
patrol-home                     ← hub · **không** gộp
web /nghiem-thu                 ← **OUT** queue này
```

## Rows

| feature | parent | action | demoRel | kind | share | reuse | mapCite | usedOn | enqueue |
|---------|--------|--------|---------|------|-------|-------|---------|--------|---------|
| `nghiem-thu-detail` | `nghiem-thu` | Chi tiết / Sửa | row `#sc-nghiem-thu` · Design `#sc-nghiem-thu-detail` `DES-MOB-NGHIEM-THU-DETAIL` | sheet | unique | — | `LinmTopBar` · Mẫu/Kết quả/tiêu chí/tuyến/km/hiện trường/gallery | row tap | **this turn** `task_edea0c3a` |
| `nghiem-thu` | `patrol-home` | Đóng / back | `go('nghiem-thu')` | list | shared_action | `nghiem-thu` | Đóng / `#i-chevron-left` | entry | **không** |
| `nghiem-thu-create` | `nghiem-thu` | Tạo | `#sc-nghiem-thu-create` | sheet | unique | — | — | nav Tạo | **không** start |

## Chrome / same-slug (không enqueue) — GAP-MOB-ACT-07

| Control | Lý do |
|---------|--------|
| Lưu | submit · cùng slug + BFF PUT |
| Sửa | mode toggle · cùng slug |
| Mẫu / Kết quả / Trạng thái | input · LOOKUP_STATIC |
| Tiêu chí | checklist · init-data criteria |
| Vị trí / GPS | input · controlHint |
| Đính kèm / upload | form media · cùng slug files |
| Đóng / Hủy | chrome back |
| Toast ok / fail | feedback |
| GPS deny modal | reuse chrome |
| Tab `field` | shell entry |
| DELETE | **OUT** P1 |

**GAP-MOB-ACT-01:** ok — detail = 1 slug.  
**GAP-MOB-ACT-02:** không gộp list/create.  
**GAP-MOB-ACT-03:** parent list + create đã scan; this turn = detail owner.  
**GAP-MOB-ACT-04:** share/mapCite stamped.  
**GAP-MOB-ACT-06:** **cấm** start sibling create/list trong task này.  
**GAP-MOB-ACT-07:** không enqueue Lưu / files / init-data / scores.

## Enqueue sibling

| feature | status | note |
|---------|--------|------|
| `nghiem-thu` | **reuse** | parent list · row entry |
| `nghiem-thu-create` | **không** start | sibling |
| Lưu / files / mẫu / scores / GPS | **cùng slug** | **cấm** enqueue |
| Web Field `/nghiem-thu` | **OUT** | queue khác |

## Version meta

| Field | Value |
|-------|-------|
| skillId | agent-data-analy-mobile |
| skillVersion | 2026.08.31.2 |
| schemaVersion | 2 |
| workflowVersion | 2026.09.19.5 |
| rulesVersion | 2026.09.19.7 |
| generatedAt | 2026-09-19T18:55:00.000Z |
| versionGate | ok |
| contentHash | sha256:nghiem-thu-detail-action-tree-20260919 |
| taskId | `task_edea0c3a` |

---
<!-- Version meta: skillId=agent-data-analy-mobile skillVersion=2026.08.31.2 schemaVersion=2 workflowVersion=2026.09.19.5 rulesVersion=2026.09.19.7 versionGate=ok -->
