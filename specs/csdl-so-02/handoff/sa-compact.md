# handoff-compact — sa · csdl-so-02

| | |
|--|--|
| schemaVersion | `1` |
| role | `sa` |
| feature | `csdl-so-02` |
| title | CSDL Sổ 02 — Nhật ký tuần đường (CR PDF Wave A) |
| packKind | `list` |
| changeScope | `edit_page` |
| status | `done` |
| taskId | `task_e5236699` |
| cr | `nktd-pdf-20260917` · `SRC-NKTD-PDF` |
| resource | `patrol-logs` |
| formNo | `02` |
| IdCode | `SO-` |
| solution_confirm | `approve` |
| autoApprove | `ON` |
| e2eQa | `ON` (queued `/agent-qa*`) |
| sa_tz_gate | `tz_list_and_form` |
| sa_xco_gate | `xco_get_only` |
| sa_shared_table | `share_tenant` |
| domain | `Asset` |
| contentHashPrior | `sha256:3ddc42d7c4404f439925322953f28ffc9d3b263726ac6cf5216065751c19b4d6` |
| headerFingerprintPrior | `sha256:1b032f04f5154622239e0e2bdbebe6923ec76ba9ca33d283b51ebe0062c0d471` |
| skillVersion | `2026.08.25.01` |
| workflowVersion | `2026.09.01.02` |
| rulesVersion | `2026.08.31.2` |
| writtenAt | `2026-09-18T03:50:00.000Z` |

## Artifacts

| Kind | Path |
|------|------|
| solution | `specs/csdl-so-02/be/solution-discovery.md` |
| design compact | `specs/csdl-so-02/handoff/design-compact.md` |
| po compact | `specs/csdl-so-02/handoff/po-compact.md` |
| data_analy compact | `specs/csdl-so-02/handoff/data_analy-compact.md` |
| prior SA new_page | `task_c4f160af` · **giữ** |
| CR task | `specs/_cr/nktd-pdf-20260917/task-csdl-so-02.md` |

## Live bind (1-liner)

- API: `api/v1/asset/csdl-records?resource=patrol-logs` · **giữ** · widen `locationText` · **cấm** invent patrol-logs / ERP.*
- Entry: **+** `LocationText` nvarchar(512) on `CsdlBookEntryEntity` · **cấm** reuse Sổ01 `Location`
- Migration: **`Schema_CsdlSo02LocationText`** CLI pair (Dev/4b only)
- Validation: eventAt + (Km **OR** text) + weather · View no-req
- UI: locationText Text · weather Textarea · list cột «Vị trí»
- File: **GAP-SO02-FILE-01** · Report Wave B **park**
- BFF: proxy only · gates TZ/XCO/SHARE **giữ**

## Decisions

- changeScope `edit_page` · solution_confirm **approve** (autoApprove)
- FormMode↔API: list/create/edit/view/copy/delete **giữ** · body + `entries[].locationText`
- OR-rule FE+BE soft · list prefer text else Km
- **giữ** new_page ownership/routes/IdCode · **cấm** wipe

## GAP / debt / OUT

| ID | SA |
|----|-----|
| **GAP-NKTD-LOC-01** | LocationText DTO + schema + OR |
| GAP-NKTD-WEATHER-01 | Textarea UI · field giữ |
| **GAP-SO02-FILE-01** | text-id debt |
| GAP-NKTD-RPT-PARK | OUT Wave A |

## Next

| Role | Need |
|------|------|
| **TL** | T-BE-LOC-* · T-FE-LOC-* từ CR task · **cấm** overwrite `task/csdl-so-02.md` |
| Dev | entity+migration+DTO+OR · form+list · UiSchema seed |
| QA | e2e queued `/agent-qa*` only |

## UNCLEAR

- none

## Cấm (compact)

ERP.* · invent patrol-logs API · reuse `Location` · wipe new_page · invent file API · report Wave B · Write MFE · yarn build/e2e/start:std · Step 4b/migration @ SA
