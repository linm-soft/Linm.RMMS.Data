# Enqueue — scan mobile pilot

| | |
|---|---|
| queue | `qlbd-mobile` |
| slash | `/agent-qldb-workflow-mobile` |
| roleOnly | `data_analy` |
| feature | `login` |
| packKind | `mobile` |
| **cấm** | `yarn run-implement` MAIN3 · `--queue qlbd` |

Pilot enqueue **1** slug: `login` (submit **Đăng nhập** — không tách).  
`login-forgot` = hyperlink Quên MK · **enqueue `pending_confirm`** (`sibling_assign`) — chờ Approve mới start.  
`login-logout` = backlog `prior=new` (clickable màn Tôi — chưa enqueue turn này).

Hub `me` (`task_84e8e0e2`) — sibling `pending_confirm` (chờ Approve · **cấm** auto start): `patrol-offline` · `feedback` · `cam-view` · `ops`.  
**Không** enqueue: `me-signal` (`shared_kit`) · `login-logout` (`reuse`).  
`me-profile` · `me-settings` = owner task riêng (đã enqueue / đang pipeline).

Hub `patrol-home` (Tuần đường) — sibling `pending_confirm` (chờ Approve · **cấm** auto start): `attendance` · `patrol-map` · `field-reflect` · `cam-patrol` · `patrol-history` · **`patrol-pin`** · **`patrol-checkin`**.  
Title: `[Mobile] [Tuần đường] -> {nhãn}`. **Không** enqueue: `supervise` (`reuse`) · `patrol-offline` (`reuse`) · today row tap · Tab 5. P1 toast **không** skip pin / ghi điểm.
