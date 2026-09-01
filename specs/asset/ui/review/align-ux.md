# Align UX — asset · QA task_4ec34586

method: Read CORE PNG vs demo `#sc-asset-list` · **cấm** GenerateImage

| Pair | Must | Result |
|------|------|--------|
| A3-CORE ↔ demo iOS | Nav Danh sách · search · cube rows · no watermark | **Aligned** |
| P6-CORE ↔ A3 / demo | Cùng list chrome + rows khi live có data | **Not aligned** — Android EmptyChrome |
| Dual iOS↔Android | Zone + data parity | **FAIL** GAP-MOB-UX-DUAL-01 |

Must open: **1+** (Android fetch/empty) · Review **blocked** until Dev fix + QA re-run.
