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
**Không** enqueue: `me-profile` (thiếu route) · `me-signal` (`shared_kit`) · `me-settings` (thiếu màn) · `login-logout` (`reuse`).

Hub `home` (`task_46fb294c`) — sibling `pending_confirm` (chờ Approve · **cấm** auto start): `patrol-home` · `incident-create` · `supervise` · `mnt-list` · `incident-list` · `asset-hub`.  
**Không** enqueue: `me` (`reuse`) · `ops` (`reuse`) · `me-signal` (`shared_kit`) · `patrol-offline` (`reuse`) · `.home-foot` watermark.
