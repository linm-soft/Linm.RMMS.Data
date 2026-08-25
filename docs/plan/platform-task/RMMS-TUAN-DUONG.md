# RMMS — Task + Message trên tuần đường / sự cố

> **Split từ** platform plan: TaskService + `@linm/message` **dùng chung**; file này = **cách RMMS gắn**.  
> **SSOT nghiệp vụ:** [`../../context/24-TUAN-DUONG-DUONG-BO.md`](../../context/24-TUAN-DUONG-DUONG-BO.md) (TT 04 · 4 nhóm · Cấp bách / kế hoạch năm)  
> **Platform:** [`../../context/25-PLATFORM-TASK.md`](../../context/25-PLATFORM-TASK.md) · [`../../context/26-MESSAGE-PARCEL.md`](../../context/26-MESSAGE-PARCEL.md)  
> **Rules:** `{RulesRoot}/docs/plan/linm-task-service/` · `linm-message-service/`  
> **Queue:** `platform-message` + `platform-task` **auto-run trước**; `rmms-task-integrate` **blocked / later**  
> **Cấm invent API.** Live tuần đường = `api/v1/td-tk/sessions` · sự cố = `api/v1/incident/incidents` (cite feature md).

**Ngày:** 2026-08-25

---

## 1. Tách HARD (tuần đường ≠ công việc ≠ chat)

| Lớp | Slug / chỗ | Làm gì | Không |
|-----|------------|--------|------|
| Hiện trường ca | `patrol` · `/td-tk` · mobile pin | Ghi điểm GPS/ảnh · Kết ca | CRUD task · ChatTab |
| Sự cố / vấn đề | `incident` · `/su-co` | Bản ghi hư hỏng / vi phạm / TNGT từ tuần tra | Copy TaskService vào RMMS.WebService |
| Công việc + SLA | Platform TaskService · MFE Task `/cv` | Assign / pool / due_date | Trong Field MFE |
| Chat / comment | `@linm/message` parcels | Trao đổi + thread trên **task** (và inbox) | Form chat trên ca tuần đường |

Incident feature đã **DEFER** `POST …/incidents/{id}/comments` P2 — comment vận hành = **CommentsTab trên Task** (`type=comment`).

---

## 2. Luồng sự cố tuần đường (đề cương 24 × platform)

```
[NV tuần đường] ca · điểm (Km+m · nhóm đối tượng · ảnh)
        │  màu Đỏ/Cam = Cấp bách · Vàng = kế hoạch năm
        │  Kết ca / Giao việc  (Field chỉ confirm + deep-link)
        ▼
[incident]  optional — bản ghi sự cố source=tuần tra  `/su-co`
        │  Giao việc (modal) — không mock CV
        ▼
[TaskService]  source=patrol | incident
               sourceEntityId = sessionId | pointId | incidentId
               priority map đỏ/cam/vàng · due Cấp bách 24–48h
        │  SignalR Task_{id}
        ▼
[Linm.Web.Task]  list/pool/SLA · ChatSectionParcel (send + expand)
[Topbar] MessageCenterParcel · /messages inbox
```

| Từ tuần đường (hub 24) | Task |
|------------------------|------|
| Điểm **Cấp bách** (đỏ/cam) | CreateTask `source=patrol` · SLA ngắn |
| Điểm **Kế hoạch năm** (vàng) | Task due = kỳ kế hoạch · không SLA 24–48h |
| Kết ca / Hạt duyệt | Vẫn `supervise` / session — **không** thay Task |
| Sửa chữa BDTX | Assignee đơn vị HĐ · pool Khu |
| Chat trên ca | **Cấm** — mở `/cv/:id` |

---

## 3. Lệnh chạy full (platform trước → RMMS sau)

Máy workspace Rules + AutoCode. **Cấm** `yarn run-implement` MAIN3 cho native.

### A — Auto-run queue (RMMS Data)

Scan `docs/context/implement-status.json`:

| Slug | status | Ý |
|------|--------|---|
| `platform-message` | **pending** | Chat/comment/parcel **first** |
| `platform-task` | **pending** | Scaffold TaskService (sau message sticky) |
| `rmms-task-integrate` | **blocked** | Gắn tuần đường/sự cố **later** |

```text
/agent-qldb-workflow
  pick: platform-message   →  xong / await_confirm
  pick: platform-task      →  sticky cùng feature đến done
  skip: rmms-task-integrate  (blocked)
```

Hoặc slash platform trực tiếp (AskQuestion mỗi lệnh):

```text
# 1) Message / comment
/implement-message-service
/review-message-service
/integrate-message-service          # client_scope = web (both sau)

# 2) TaskService
/implement-task-service             # ticket_parent = optional
/review-task-service
/review-service-setup
/integrate-task-service             # client_scope = web · không Field

# 3) RMMS later — gỡ blocked trên rmms-task-integrate rồi:
/integrate-task-service             # client_scope = both nếu native
/integrate-message-service          # surfaces = chat_section + routeMap /cv /sc
```

RMMS BFF: NuGet Task.Bff — **cấm** clone `TasksController` vào `Linm.RMMS.WebService`.

### B — Demo (đã có, no BE)

`npm run start:std` · `/demo/patrol/tuan-duong-web.html` · `/demo/task/task.html` · `/demo/patrol/tuan-duong-mobile.html`

---

## 4. Checklist RMMS (tick khi unblocked)

- [ ] Platform pha 0–4 PASS (Rules CHECKLIST Task + Message)
- [ ] RMMS BFF PackageReference Task.Bff
- [ ] Patrol Kết ca / điểm Cấp bách → `POST /tasks` `source=patrol`
- [ ] Incident Giao việc → `source=incident` · `sourceEntityId`
- [ ] Field deep-link `/cv/:id` — không ChatTab
- [ ] routeMap ↗: task `/cv/:id` · sự cố `/su-co/:id`
- [ ] Dual channel native+web (**GAP-TD-CHANNEL-01**) — mobile chat = Task sibling
- [ ] Không invent `api/v1/tuan-duong-*` chat

---

## 5. Gaps mang theo

`GAP-PT-*` · `GAP-MSG-*` · `GAP-TD-CHANNEL-01` · `GAP-TD-PRIORITY-01` · incident `GAP-F-INC-01` SLA stub — full SLA = Task `due_date`.
