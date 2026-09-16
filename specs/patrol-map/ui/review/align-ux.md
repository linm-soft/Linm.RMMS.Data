# Align UX — patrol-map (live vs demo)

| Field | Value |
|-------|-------|
| feature | `patrol-map` |
| method | Read CORE PNG after `yarn e2e-qa-mobile` |
| demo | `ui/prototype/{ios,android}/index.html#sc-patrol-map` |
| writtenAt | `2026-09-16T04:39:00.000Z` |
| taskId | `task_92c6486b` |

## CORE Read

| Shot | Content | vs demo |
|------|---------|---------|
| `qa/screens/A3-CORE.png` (iOS map) | `#sc-patrol-map` · Ca đang chạy · Ghim · **Tiêu chuẩn/Vệ tinh** · OSRM next QL.1 · tab Tuần đường | **Aligned** |
| `qa/screens/P6-CORE.png` (Android map) | same chrome · live polyline/pins · chips **Tiêu chuẩn/Vệ tinh** | **Aligned** (Wave 4 2026-09-16) |

## Must

| Gap | Severity | Status |
|-----|----------|--------|
| GAP-MOB-AND-CHIP-01 | Android basemap chips Tiêu chuẩn/Vệ tinh | **fixed** Wave 4 2026-09-16 |
| GAP-MOB-E2E-VIS-01 | — | **closed** (vision done) |
| GAP-MOB-UX-COMP-03 | missing demo tiles | **none** |

## Verdict

`align_confirm` = **approve** (autoApprove=ON) · Must blocking **0** · phase → **review**.
