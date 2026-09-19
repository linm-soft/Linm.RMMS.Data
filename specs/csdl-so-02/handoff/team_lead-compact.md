# handoff-compact — team_lead · csdl-so-02

| | |
|--|--|
| schemaVersion | `1` |
| role | `team_lead` |
| feature | `csdl-so-02` |
| title | CSDL Sổ 02 — Nhật ký tuần đường (CR PDF Wave A) |
| packKind | `list` |
| changeScope | `edit_page` |
| status | `done` |
| taskId | `task_a6a264ff` |
| cr | `nktd-pdf-20260917` · `SRC-NKTD-PDF` |
| resource | `patrol-logs` |
| formNo | `02` |
| IdCode | `SO-` |
| formPattern | **Kind D Slideout** 2col · entries `inline_grid` |
| Kind | **B** A–D+F+H · **D** Slideout |
| route_confirm | **`route_a` giữ** `/csdl-so-02` + hub |
| team_lead_confirm | **approve** (autoApprove ON) |
| design_confirm | **approve** |
| solution_confirm | **approve** |
| autoApprove | `ON` |
| e2eQa | `ON` (queued `/agent-qa*` only) |
| domain | **Asset** · `api/v1/asset/csdl-records?resource=patrol-logs` |
| entity | `CsdlBookEntryEntity.LocationText` · `Schema_CsdlSo02LocationText` @ Dev/4b |
| gates | tz_list_and_form · xco_get_only · share_tenant **giữ** |
| contentHashPrior | `sha256:3ddc42d7c4404f439925322953f28ffc9d3b263726ac6cf5216065751c19b4d6` |
| headerFingerprintPrior | `sha256:1b032f04f5154622239e0e2bdbebe6923ec76ba9ca33d283b51ebe0062c0d471` |
| skillVersion | `2026.09.05.03` |
| workflowVersion | `2026.09.01.02` |
| rulesVersion | `2026.09.17.2` |
| writtenAt | `2026-09-18T04:00:00.000Z` |

## Decisions

- changeScope=`edit_page` · **giữ** `task/csdl-so-02.md` · write CR `task/csdl-so-02-cr-pdf.md`
- Wave A: `locationText` + OR Km\|text + weather Textarea · list cột «Vị trí»
- Migration `Schema_CsdlSo02LocationText` **chỉ Dev/4b** · **cấm** reuse `Location`
- API **giữ** · BFF proxy · **cấm ERP.*** · invent patrol-logs path
- File **GAP-SO02-FILE-01** text-id · Report Wave B **park**
- route_confirm **route_a** · open Q: **none**

## Artifacts

| Kind | Path |
|------|------|
| task CR | `specs/csdl-so-02/task/csdl-so-02-cr-pdf.md` |
| prior new_page | `specs/csdl-so-02/task/csdl-so-02.md` (**giữ**) |
| solution | `specs/csdl-so-02/be/solution-discovery.md` |
| design | `specs/csdl-so-02/ui/design.md` |
| STATUS | `specs/csdl-so-02/STATUS.md` |

## Task matrix (ids)

T-CTX-CR-01 **done** · **T-BE-LOC-01**/T-BE-01 · T-BE-LOC-02/UISCHEMA · T-BE-CRUD/BFF/PERM reuse · **T-FE-LOC-01**/FORM · **T-FE-LOC-02**/FIELD · **T-FE-LOC-03**/LIST · FILTER/CFG/LEAVE/ACT/HIST/LKP/PROD/UX/RESP/ENTRIES · T-QA-* · T-OUT-* OUT

## Screens / zones (ids only)

- S-LIST · S-FORM · S-ENTRIES · S-HUB · S-SKIP-MAP · S-SKIP-RPT
- mfeStdUrl=`http://localhost:9301/csdl-so-02`
- hub=`http://localhost:9301/so-ts/csdl-so-sach?resource=patrol-logs`

## Next

| Role | Need |
|------|------|
| **Dev** | T-BE-LOC-* · T-FE-LOC-* · Schema @ 4b · filter-bar.md |
| QA | e2e queued `/agent-qa*` only |
| Review | after QA · Wave B park |

## UNCLEAR

- none

## Cấm (compact)

ERP.* · invent API · reuse `Location` · overwrite new_page task · Wave B report · implement/e2e/build/start:std/Step4b @ TL · start role khác
