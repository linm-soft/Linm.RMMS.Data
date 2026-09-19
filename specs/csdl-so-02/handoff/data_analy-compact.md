# handoff-compact — data_analy · csdl-so-02

| | |
|--|--|
| schemaVersion | `1` |
| role | `data_analy` |
| feature | `csdl-so-02` |
| title | CSDL Sổ 02 — Nhật ký tuần đường (CR PDF) |
| packKind | `list` |
| changeScope | `edit_page` |
| status | `done` |
| taskId | `task_2a2fd5c4` |
| cr | `nktd-pdf-20260917` · `SRC-NKTD-PDF` |
| resource | `patrol-logs` |
| formNo | `02` |
| IdCode | `SO-` |
| contentHash | `sha256:3ddc42d7c4404f439925322953f28ffc9d3b263726ac6cf5216065751c19b4d6` |
| headerFingerprint | `sha256:1b032f04f5154622239e0e2bdbebe6923ec76ba9ca33d283b51ebe0062c0d471` |
| skillVersion | `2026.08.25.01` |
| workflowVersion | `2026.09.01.02` |
| rulesVersion | `2026.08.31.2` |
| analyzedAt | `2026-09-18T03:29:00.290Z` |

## Artifacts

| Kind | Path |
|------|------|
| control-hint | `specs/_data-analy/features/csdl-so-02-control-hint.md` |
| real-data | `specs/_data-analy/features/csdl-so-02-real-data.md` |
| CTX | `docs/context/features/csdl-so-02.md` |
| extract | `docs/data/analyzed/nhat-ky-tuan-duong-pdf.md` |
| review CR | `specs/_cr/nktd-pdf-20260917/review.md` |
| prior pack | `specs/csdl-so-02/task/csdl-so-02.md` (**giữ**) |

## Live bind (1-liner)

- API: `api/v1/asset/csdl-records?resource=patrol-logs` · **giữ** · **cấm** invent `patrol-logs` path / ERP.*
- Entry: `/csdl-so-02` · hub `?resource=patrol-logs`
- Form: Kind D · **+** `entries.locationText` Text · `weatherEvent` → Textarea · Km\|Text OR-rule
- BE: `LocationText` · migration `Schema_CsdlSo02LocationText` CLI pair nếu cột mới
- File: **GAP-SO02-FILE-01** text-id debt · **cấm** invent file API
- Report Wave B: **park** đến Review A PASS

## GAP (PO must see)

| ID | One-liner |
|----|-----------|
| **GAP-NKTD-LOC-01** | Form thiếu `locationText` · PDF vị trí chữ + Km |
| GAP-NKTD-WEATHER-01 | `weatherEvent` Input → Textarea |
| **GAP-SO02-FILE-01** | Sketch/media text-id debt · không invent file API |
| GAP-NKTD-STATUS-01 | status tot/tb/kem giữ filter · không cột giấy |
| GAP-NKTD-RPT-PARK | Report OUT Wave A |

## Open Q

Q-LOC-REQ · Q-WEATHER · Q-FILE · Q-LIST-COL

## Zones

List A/B/C/D · Form Kind D · entries inline (+ locationText) · map: none · sketch=file-debt

## Next

| Role | Need |
|------|------|
| **PO** | requirement từ § Delta CR · open Q · **giữ** prior requirement |
| Design | control-map + prototype locationText · reviewUrl |
| SA | LocationText DTO · Schema_CsdlSo02LocationText confirm |
| TL/Dev | T-* từ `task-csdl-so-02.md` CR · **cấm** overwrite new_page task |

## Cấm (compact)

Wipe new_page · invent api/v1/patrol-logs · ERP.* · enqueue report Wave B · re-scan demo · yarn build/e2e · start PO trong task này
