# Enqueue — scan mobile pilot

| | |
|---|---|
| queue | `qlbd-mobile` |
| slash | `/agent-qldb-workflow-mobile` |
| roleOnly | `data_analy` |
| feature | `login` |
| packKind | `mobile` |
| **cấm** | `yarn run-implement` MAIN3 · `--queue qlbd` |

Pilot enqueue **1** slug: `login`.  
`login-forgot` · `login-logout` = backlog `prior=new` — không enqueue turn này.
