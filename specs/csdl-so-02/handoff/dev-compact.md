# handoff-compact — dev · csdl-so-02

| | |
|--|--|
| schemaVersion | `1` |
| role | `dev` |
| feature | `csdl-so-02` |
| title | CSDL Sổ 02 — Nhật ký tuần đường (CR PDF Wave A) |
| packKind | `list` |
| changeScope | `edit_page` |
| status | `done` |
| taskId | `task_00facaea` |
| cr | `nktd-pdf-20260917` · Wave A |
| resource | `patrol-logs` |
| formNo | `02` |
| IdCode | `SO-` |
| route_confirm | `route_a` |
| autoApprove | `ON` |
| e2eQa | `ON` (queued `/agent-qa*` only) |
| mfeStdUrl | `http://localhost:9301/csdl-so-02` |
| hubDeepLink | `/so-ts/csdl-so-sach?resource=patrol-logs` |
| yarnBuild | **PASS** |
| dotnetBuild | **PASS** |
| domain | **Asset** · `api/v1/asset/csdl-records?resource=patrol-logs` |
| contentHashPrior | `sha256:3ddc42d7c4404f439925322953f28ffc9d3b263726ac6cf5216065751c19b4d6` |
| headerFingerprintPrior | `sha256:1b032f04f5154622239e0e2bdbebe6923ec76ba9ca33d283b51ebe0062c0d471` |
| skillVersion | `2026.09.05.03` |
| workflowVersion | `2026.09.01.02` |
| rulesVersion | `2026.09.17.2` |
| writtenAt | `2026-09-18T04:15:00.000Z` |

## Decisions

- T-BE-LOC-01: `LocationText` nvarchar(512) · DTO 1:1 · OR BE · migration `Schema_CsdlSo02LocationText` pair
- T-FE-LOC-01/02/03: form Text + weather Textarea · list cột «Vị trí» · OR soft
- T-BE-LOC-02: UiSchema seed `locationText`
- API **giữ** · **cấm** ERP.* · **cấm** reuse `Location`
- filter-bar.md written từ live

## Artifacts

| Kind | Path |
|------|------|
| implement | `specs/csdl-so-02/implement/csdl-so-02.md` |
| filter-bar | `docs/context/features/csdl-so-02-filter-bar.md` |
| migration | `…/Migrations/20260918035504_Schema_CsdlSo02LocationText(.Designer).cs` |
| FE | `CsdlSo02Page` · `CsdlSo02FormSlideout` · csdlSoSach DTOs |
| STATUS | `specs/csdl-so-02/STATUS.md` |

## APIs

- GET/POST/PUT/DELETE `…/asset/csdl-records` · `resource=patrol-logs` · body `entries[].locationText`
- List projection record.`locationText` (prefer text else Km)

## Debt

| ID | Note |
|----|------|
| GAP-SO02-FILE-01 | sketch/media text-id |
| GAP-NKTD-RPT-PARK | Wave B report |
| UiSchema DB | may need Config reset for seed col |

## Next

| Role | Need |
|------|------|
| **QA** | e2e `/agent-qa*` · G-11/G-12 · OR form · filter V10 |
| Review | after QA · Wave B park |

## UNCLEAR

- none

## Cấm (compact)

ERP.* · invent patrol-logs path · reuse `Location` · e2e/start:std @ Dev · Wave B report
