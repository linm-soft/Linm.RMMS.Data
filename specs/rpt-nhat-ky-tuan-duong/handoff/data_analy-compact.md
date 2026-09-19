# handoff-compact — data_analy · rpt-nhat-ky-tuan-duong

| | |
|--|--|
| schemaVersion | `1` |
| role | `data_analy` |
| feature | `rpt-nhat-ky-tuan-duong` |
| title | Nhật ký tuần đường — Kind E report (CR PDF Wave B) |
| packKind | `report` |
| changeScope | `edit_page` |
| status | `done` |
| taskId | `task_54f0fb60` |
| cr | `nktd-pdf-20260917` · `SRC-NKTD-PDF` |
| sourceFeature | `csdl-so-02` |
| resource | `patrol-logs` |
| sourceFormReady | `yes` |
| sourceTables | `rmms_csdl_catalog_records` · So02 · `rmms_csdl_book_entries` |
| contentHash | `sha256:c5bf1abeceee69764d8f365e1d599d92008faf28a01cb2a29c88520d8baa5703` |
| skillVersion | `2026.08.15.5` |
| workflowVersion | `2026.08.15.5` |
| rulesVersion | `2026.08.15.8` |
| analyzedAt | `2026-09-18T16:56:00.000Z` |

## Artifacts

| Kind | Path |
|------|------|
| control-hint | `specs/_data-analy/features/rpt-nhat-ky-tuan-duong-control-hint.md` |
| real-data | `specs/_data-analy/features/rpt-nhat-ky-tuan-duong-real-data.md` |
| CTX | `docs/context/features/rpt-nhat-ky-tuan-duong.md` |
| extract | `docs/data/analyzed/nhat-ky-tuan-duong-pdf.md` |
| review CR | `specs/_cr/nktd-pdf-20260917/review.md` · **GAP-NKTD-PRINT-01** |
| TL CR | `specs/_cr/nktd-pdf-20260917/task-rpt-nhat-ky-tuan-duong.md` |
| prior pack | `specs/rpt-nhat-ky-tuan-duong/{po,ui,be,task,…}` (**giữ**) |

## Live bind (1-liner)

- API: `GET api/v1/report/patrol-log-road` (+ `/export`) · **giữ** · **cấm** path mới / ERP.*
- Load: sổ `patrol-logs` + entries · **cấm** check-in seed · empty=`[]`
- Grid: EventAt·Road·Staff·Km·LocationText·WeatherEvent·OnSiteAction·RemarkSign·Note·BookNo
- Drill: `/csdl-so-02` or hub `?resource=patrol-logs&id=` · **cấm** `?kind=`
- Toolbar: Xem·Refresh·Chart·In·Config FULL·Excel · filter bar **0** action
- Print bìa TT41 PL VIII: **P2** GAP-NKTD-PRINT-01 / T-UI-RPT-PRINT-01

## GAP (PO must see)

| ID | One-liner |
|----|-----------|
| **GAP-NKTD-SRC-01** | Report đọc check-in/seed — phải đọc sổ csdl-so-02 |
| **GAP-NKTD-DRILL-01** | Drill `?kind=` sai → resource/id hoặc `/csdl-so-02` |
| **GAP-NKTD-SIGN-01** | supervisorNote/signed từ RemarkSign |
| **GAP-NKTD-PRINT-01** | In bìa+bảng PDF P2 — không block P1 |
| GAP-NKTD-HDSD-01 | HDSD bỏ Tạo mới trên report |

## Open Q

Q-PRINT-P2 timing · Q-NOTE-COL default visible · Q-STAFF catalog P1

## Zones

A Header (no Add) · B toolbar+filter · C grid · D pager · Chart SoCai live · map:none

## Next

| Role | Need |
|------|------|
| **PO** | requirement § Delta CR · **giữ** prior · Kind E · cấm CRUD new_page |
| Design | prototype/reviewUrl delta drill+cols · **giữ** prior |
| SA | confirm load join sổ · no new path · no seed |
| TL/Dev | T-* từ `task-rpt-nhat-ky-tuan-duong.md` CR |

## Cấm (compact)

CRUD new_page · gộp rpt-tuan-duong GPS · invent API · ERP.* · CamScanner golden · yarn build/e2e · start PO trong task này
