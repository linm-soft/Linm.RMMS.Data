# Handoff compact â€” data_analy

schemaVersion: 1
feature: csdl-bieu-15
packKind: list
role: data_analy
status: done
skillVersion: 2026.09.05.03
workflowVersion: 2026.09.05.03
rulesVersion: 2026.09.17.3
contentHash: sha256:8a85d68eaef24cf98c312f83a3a100de25b1212e8a751d6f1f42005d38dd0fc8
headerFingerprint: sha256:0064a4903777f7ea8d51c7423d8451a20daf77a5934929001905edaa380f4fe4
writtenAt: 2026-09-18T02:10:00.000Z
taskId: task_4b6f0c6e
priorTask: task_23453ac3
resource: ops-facilities
columns: 20
IdCode: OF-
formNo: 15
peerSoTs: so-ts-toll Â· so-ts-rest-area Â· so-ts-station-house Â· cáº¥m merge

## Decisions
- changeScope: edit_page (T-XLS-S15 Â· Wave 1)
- formPattern: Slideout (keep typed Â· **cáº¥m** new_page CRUD)
- mfe: D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Asset Â· be: D:/AI-QLBD/Linm.RMMS.WebService
- export: catalogToolbar Xuáº¥t Excel Â· BFF binary Â· `/implement-export-import-excel`
- golden: Cá»¥c 16-sheet xls Biá»ƒu 15 Â· **cáº¥m** há»“ sÆ¡ 12+8
- filter: **cáº¥m** export trÃªn LinErpListFilterBar (GAP-FILTER-BAR-08)
- layout: 1 sheet 20 cá»™t Â· facility+area+equipment cÃ¹ng hÃ ng
- peer: so-ts-toll/rest/station cite Â· **cáº¥m** merge road-assets vÃ o export
- keep: PO/Design/SA typed artifacts Â· only Â§ Delta export
- open questions: Q-XLS-SCOPE Â· Q-XLS-IMPORT Â· Q-XLS-FILENAME Â· Q-XLS-SHEET

## Artifacts
| Kind | Path |
|------|------|
| control-hint | specs/_data-analy/features/csdl-bieu-15-control-hint.md |
| real-data | specs/_data-analy/features/csdl-bieu-15-real-data.md |
| CTX | docs/context/features/csdl-bieu-15.md |
| epic | docs/context/features/csdl-export-print.md |

## Inventory (slim)
| id | label | controlHint | notes |
|----|-------|-------------|-------|
| (form 20) | typed prior | keep | **cáº¥m** reopen |
| exportExcel | Xuáº¥t Excel | ToolbarButton | catalogToolbar |
| importExcel | Nháº­p Excel | ToolbarButton+file | P1 Â· Q-XLS-IMPORT |

## Screens / zones (ids only)
- DES-GRID-A/B/C/D keep Â· toolbar **+export** Â· filter unchanged
- Form Kind D Slideout keep Â· section vá»‹ trÃ­ + cÃ´ng trÃ¬nh + thiáº¿t bá»‹
- reviewUrl= prior prototype (Design cáº­p nháº­t nÃºt)
- peerStdUrl= so-ts-toll / rest-area / station-house (cite only)
- mfeStdUrl= http://localhost:9301/so-ts/csdl-so-sach Â· alias /csdl-bieu-15 Â· hub ?resource=ops-facilities

## Live bind (1-liner)
- CRUD keep: api/v1/asset/csdl-records?resource=ops-facilities
- Export: GET â€¦/csdl-records/export?resource=ops-facilities Â· Import POST â€¦/import
- **cáº¥m** ERP.* Â· invent infra Â· toast-stub=done Â· merge so-ts-toll/rest/station

## GAP (PO must see)
| ID | One-liner |
|----|-----------|
| GAP-BIEU15-XLS-01 | Toolbar Xuáº¥t Excel binary sheet Biá»ƒu 15 |
| GAP-BIEU15-XLS-02 | Toast stub â‰  done |
| GAP-BIEU15-XLS-03 | Golden Cá»¥c 16-sheet Â· cáº¥m 12+8 |
| GAP-BIEU15-XLS-04 | GAP-FILTER-BAR-08 Â· cáº¥m filter export |
| GAP-BIEU15-XLS-05 | GET export / POST import path |
| GAP-BIEU15-XLS-06 | 1 sheet 20 Â· facility+area+equipment cÃ¹ng hÃ ng |
| GAP-BIEU15-XLS-07 | Cáº¥m merge so-ts-toll/rest/station/road-assets vÃ o export |

## Next
| Role | Need |
|------|------|
| **PO** | requirement tá»« Â§ Delta T-XLS-S15 Â· chá»‘t Q-XLS-* Â· giá»¯ AC typed |
| Design | giá»¯ prototype Â· +nÃºt Xuáº¥t trÃªn catalogToolbar Â· reviewUrl |
| SA | BFF binary path Â· golden checksum 20 Â· cáº¥m Ä‘á»•i typed entity |

## Cáº¥m (compact)
ERP.* Â· invent infra Â· toast=done Â· filter-bar export Â· golden 12+8 Â· new_page typed re-CRUD Â· yarn build/e2e @ data_analy
