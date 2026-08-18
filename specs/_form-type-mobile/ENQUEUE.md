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
