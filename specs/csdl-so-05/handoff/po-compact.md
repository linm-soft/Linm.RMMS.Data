# handoff-compact — po · csdl-so-05

| | |
|--|--|
| schemaVersion | `1` |
| role | `po` |
| feature | `csdl-so-05` |
| title | CSDL Sổ 05 — TNGT + điểm đen |
| packKind | `list` |
| changeScope | `new_page` |
| status | `done` |
| taskId | `task_2cd724ab` |
| resource | `accident-summaries` |
| formNo | `05` |
| IdCode | `SO-` |
| contentHash | `sha256:ccb6cccc2010c67b8cd3b02484f6a424d09f5a7e0494ad59b5b71ea6ff15f8ce` |
| headerFingerprint | `sha256:73a54e566bbad59af489c97e74cad13d131c338daa386a531e535704e374d14a` |
| skillVersion | `2026.08.25.01` |
| workflowVersion | `2026.09.01.02` |
| rulesVersion | `2026.08.31.2` |
| updatedAt | `2026-09-06T05:50:00.000Z` |

## Artifacts

| Kind | Path |
|------|------|
| requirement | `specs/csdl-so-05/po/requirement.md` |
| control-hint | `specs/_data-analy/features/csdl-so-05-control-hint.md` |
| real-data | `specs/_data-analy/features/csdl-so-05-real-data.md` |
| prior compact | `specs/csdl-so-05/handoff/data_analy-compact.md` |

## Live bind (1-liner)

- API: `api/v1/asset/csdl-records?resource=accident-summaries` (+ BFF) · **cấm ERP.*** · **cấm** invent infra · **cấm** runtime `/api/v1/accident-summaries`
- Entry: mfeStd `/csdl-so-05` · hub `/so-ts/csdl-so-sach?resource=accident-summaries`
- Form: Kind D Slideout · typed header + **3 grid** C.1 / C.2 / BS · 1 book + 3 collections · **cấm** detail*/col1–3 · **cấm** 16 hạng xe
- Peer: LOOKUP `road-route` · `rpt-tngt` RO · so-04 ROW riêng · **cấm** merge Sổ TS

## Open Q → decided

| Q | Decision |
|---|----------|
| Q-PERIOD | month→1–12 · half→1\|2 · year=year sync |
| Q-CAUSE | 3× Number ≥0 count · remarks text |
| Q-DAMAGE | Number ≥0 · overlay «triệu đồng» |
| Q-BS-ASSESS | `blackspot\|potential\|under_watch` |
| Q-GRID-MODEL | 1 header + entriesC1/C2/BS |
| Q-SPLIT | so-05 ship độc lập · CUC-07 khi cả 2 PASS |
| Q-PROV | keep_static P1 |
| Q-ORG | Text P1 · org-unit P2 |
| Q-STATUS | `draft\|active\|closed` |
| Q-RPT | READY sau typed form PASS |

## GAP P1 / DEFER / OUT

- **P1:** RES/SPLIT/TYPED/C1/C2/BS/ROUTE/FORMNO · ROAD · PROV static · CUC-03/07/11 · RPT source form
- **DEFER P2:** ORG SearchInput
- **OUT:** XLS import/export

## Zones

List A/B/C/D Kind B · Form Kind D Z1–Z3 · tabs 3 grid · map: none · LeaveConfirm dirty

## Next

| Role | Need |
|------|------|
| **Design** | control-map · prototype 3 grid · reviewUrl · filter 1-row |
| SA | Schema_CsdlSo05 · 3 collections · enums period/BS/status |

## Cấm (compact)

Demo/LS SSOT · ERP.* · Guid IdCode · Col1–3 only · gộp đếm xe · invent map · yarn build/e2e ở PO · CRUD trên rpt-tngt · re-scan demo
