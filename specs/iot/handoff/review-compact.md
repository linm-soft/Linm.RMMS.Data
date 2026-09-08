# Handoff compact — review

schemaVersion: 1
feature: iot
packKind: list
role: review
status: done
skillVersion: 2026.08.19.04
writtenAt: 2026-09-05T04:55:00.000Z
taskId: task_4940556f
review_confirm: done
autoApprove: ON

## Decisions
- changeScope: new_page
- formPattern: Full page · data-form-cols=5 · list CatalogListShell Kind B
- mfe: D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Iot · `/iot`
- be: D:/AI-QLBD/Linm.RMMS.WebService · Iot · `api/v1/iot/devices` · **cấm ERP.***
- verdict: PASS · P0=0 · fix_gaps=none
- open questions: none Review-blocking

## Findings counts
| Class | PASS | P0 | P1 | P2 debt |
|-------|------|----|----|---------|
| QUERY | yes | 0 | 0 | 0 |
| SEC | yes | 0 | 0 | Auth stub |
| UI-FN | yes | 0 | 0 | route testid |
| BE-FN | yes | 0 | 0 | history stub |

## Inventory (slim)
| id | label | controlHint | notes |
|----|-------|-------------|-------|
| search | Tìm | SearchTextInput | filter PASS |
| status/type | … | Dropdown | init-data PASS |
| routeCode | Tuyến | SearchInput | list+form |
| code/name/km | … | IdCode/Text/Number | form 5col |

## Screens / zones (ids only)
- S0/S1 `rmms-iot-list-page` · QA-20 `rmms-iot-form-page`
- PNG: specs/iot/qa/screens/{S0,S1,QA-20}.png
- mfeStdUrl=http://localhost:9309/iot

## API / tasks (ids only)
- FormMode↔API: List/init/CRUD/health · BFF proxy
- debt: Auth RequirePermission · GAP-QA-IOT-TSC-01 · GAP-QA-E2E-02 · history BE

## UNCLEAR
- none

## Full paths (Read only if needed)
- findings: D:/AI-QLBD/Linm.RMMS.Data/specs/iot/review/findings.md
- prior qa: D:/AI-QLBD/Linm.RMMS.Data/specs/iot/handoff/qa-compact.md
- STATUS: D:/AI-QLBD/Linm.RMMS.Data/specs/iot/STATUS.md
