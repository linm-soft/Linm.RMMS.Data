# handoff-compact — po · csdl-so-02

| | |
|--|--|
| schemaVersion | `1` |
| role | `po` |
| feature | `csdl-so-02` |
| title | CSDL Sổ 02 — Nhật ký tuần đường (CR PDF Wave A) |
| packKind | `list` |
| changeScope | `edit_page` |
| status | `done` |
| taskId | `task_a2fc4833` |
| cr | `nktd-pdf-20260917` · `SRC-NKTD-PDF` |
| resource | `patrol-logs` |
| formNo | `02` |
| IdCode | `SO-` |
| contentHash | `sha256:3ddc42d7c4404f439925322953f28ffc9d3b263726ac6cf5216065751c19b4d6` |
| headerFingerprint | `sha256:1b032f04f5154622239e0e2bdbebe6923ec76ba9ca33d283b51ebe0062c0d471` |
| skillVersion | `2026.08.25.01` |
| workflowVersion | `2026.09.01.02` |
| rulesVersion | `2026.08.31.2` |
| updatedAt | `2026-09-18T03:40:00.000Z` |
| autoApprove | `ON` |
| e2eQa | `ON` (queued `/agent-qa*`) |

## Artifacts

| Kind | Path |
|------|------|
| requirement | `specs/csdl-so-02/po/requirement.md` |
| control-hint | `specs/_data-analy/features/csdl-so-02-control-hint.md` |
| real-data | `specs/_data-analy/features/csdl-so-02-real-data.md` |
| prior compact | `specs/csdl-so-02/handoff/data_analy-compact.md` |
| prior po new_page | `task_0da1b0a3` · **giữ** |
| CR task | `specs/_cr/nktd-pdf-20260917/task-csdl-so-02.md` |
| CTX | `docs/context/features/csdl-so-02.md` |

## Live bind (1-liner)

- API: `api/v1/asset/csdl-records?resource=patrol-logs` · **giữ** · **cấm** invent patrol-logs / ERP.*
- Entry: `/csdl-so-02` + hub `?resource=patrol-logs`
- Form: Kind D · **+** `entries.locationText` Text · weatherEvent Textarea · OR Km\|Text
- BE: `LocationText` · migration `Schema_CsdlSo02LocationText` CLI (Dev)
- File: **GAP-SO02-FILE-01** text-id · Report Wave B **park**

## Open Q — resolved

| Q | Decision |
|---|----------|
| Q-LOC-REQ | OR-rule: eventAt + (Km OR text) + weather · View no-req |
| Q-WEATHER | Textarea rows=3 · maxLength=2000 |
| Q-FILE | text-id P1 · no invent file API |
| Q-LIST-COL | luôn cột «Vị trí» trên grid |

## GAP P1 / debt / OUT

| ID | P1 |
|----|-----|
| **GAP-NKTD-LOC-01** | YES |
| GAP-NKTD-WEATHER-01 | YES |
| **GAP-SO02-FILE-01** | YES debt |
| GAP-NKTD-HDR-01 · STATUS-01 | YES (giữ) |
| GAP-NKTD-RPT-PARK | OUT Wave A |

## Zones / AC

List A/B/C/D · Form Kind D · entries + locationText · map none · Grid G-01…G-12 · LeaveConfirm dirty

## Next

| Role | Need |
|------|------|
| **Design** | control-map · prototype locationText · reviewUrl |
| SA | LocationText DTO · Schema_CsdlSo02LocationText |
| TL | T-* từ CR task · **cấm** overwrite new_page task |
| Dev/QA | form OR + list col · e2e queued |

## Cấm (compact)

Wipe new_page · invent api/v1/patrol-logs · ERP.* · enqueue report Wave B · re-scan demo · yarn build/e2e/start:std ở PO · migration Step 4b ở PO
