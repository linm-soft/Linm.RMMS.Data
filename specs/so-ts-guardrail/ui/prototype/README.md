# Prototype — so-ts-guardrail

| | |
|--|--|
| feature | `so-ts-guardrail` |
| title | Sổ TS — Hộ lan / tôn sóng |
| packKind | `list` · Kind **B** |
| typeCode | `GUARDRAIL` |
| design_confirm | **approve** (autoApprove ON · `task_fc833be2`) |
| reviewUrl | `file:///D:/AI-QLBD/Linm.RMMS.Data/specs/so-ts-guardrail/ui/prototype/so-ts-guardrail-list-prototype.html` |
| peerStdUrl | `http://localhost:9301/so-ts?type=GUARDRAIL` |
| mfeStdUrl | `http://localhost:9301/so-ts-guardrail` |
| shared_grid_example | `v1` |
| real_view_parity | `v1` |

## Artifacts

- List+form prototype: `so-ts-guardrail-list-prototype.html`
- Zones: DES-GRID-A/B/B-FILTER/C0/C2/C3/D/F/H · DES-FORM-Z1/Z2 · DES-LEAVE
- Control: LinErpListFilterBar · profile GUARDRAIL · S-LOC-RANGE · S-ATTR Dropdown+Number · prefix `HL-` · LeaveConfirmModal
- Demo SSOT tham chiếu only: `D:/AI-QLBD/Linm.RMMS.Demo/src/demo/features/asset-demo.html` — **cấm** re-scan (hash skip)

## Board

- Design gate: prototype + reviewUrl · **autoApprove ON** → tự confirm
- Repo confirm UI: `Linm.Web.RMMS.Asset` · **cấm ERP.***
- E2E: queued `/agent-qa*` only — **cấm** e2e/start:std ở Design
