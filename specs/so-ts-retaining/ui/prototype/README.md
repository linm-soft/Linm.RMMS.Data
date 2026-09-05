# Prototype — so-ts-retaining

| | |
|--|--|
| feature | `so-ts-retaining` |
| title | Sổ TS — Kè / tường chắn |
| packKind | `list` · Kind **B** |
| typeCode | `RETAINING` |
| design_confirm | **approve** (autoApprove ON · `task_476f6ddd`) |
| reviewUrl | `file:///D:/AI-QLBD/Linm.RMMS.Data/specs/so-ts-retaining/ui/prototype/so-ts-retaining-list-prototype.html` |
| peerStdUrl | `http://localhost:9301/so-ts?type=RETAINING` |
| mfeStdUrl | `http://localhost:9301/so-ts-retaining` |
| shared_grid_example | `v1` |
| real_view_parity | `v1` |

## Artifacts

- List+form prototype: `so-ts-retaining-list-prototype.html`
- Zones: DES-GRID-A/B/B-FILTER/C0/C2/C3/D/F/H · DES-FORM-Z1/Z2 · DES-LEAVE
- Control: LinErpListFilterBar · profile RETAINING · S-LOC-RANGE · S-ATTR Dropdown+Number · prefix `KE-` · LeaveConfirmModal
- Demo SSOT tham chiếu only: `D:/AI-QLBD/Linm.RMMS.Demo/src/demo/features/asset-demo.html` — **cấm** re-scan (hash skip)

## Board

- Design gate: prototype + reviewUrl · **autoApprove ON** → tự confirm
- Repo confirm UI: `Linm.Web.RMMS.Asset` · **cấm ERP.***
- E2E: queued `/agent-qa*` only — **cấm** e2e/start:std ở Design
