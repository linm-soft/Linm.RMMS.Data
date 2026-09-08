# handoff-compact — sa · csdl-so-05

| | |
|--|--|
| schemaVersion | `1` |
| role | `sa` |
| feature | `csdl-so-05` |
| title | CSDL Sổ 05 — TNGT + điểm đen |
| packKind | `list` |
| changeScope | `new_page` |
| status | `done` |
| taskId | `task_9c8cec8e` |
| resource | `accident-summaries` |
| formNo | `05` |
| IdCode | `SO-` |
| autoApprove | `ON` |
| e2eQa | `ON` |
| solution_confirm | `approve` |
| domain | `Asset` |
| sa_tz_gate | `tz_none` |
| sa_xco_gate | `xco_get_only` |
| sa_shared_table | `share_tenant` |
| contentHashPrior | `sha256:ccb6cccc2010c67b8cd3b02484f6a424d09f5a7e0494ad59b5b71ea6ff15f8ce` |
| headerFingerprintPrior | `sha256:73a54e566bbad59af489c97e74cad13d131c338daa386a531e535704e374d14a` |
| skillVersion | `2026.08.25.01` |
| workflowVersion | `2026.09.01.02` |
| rulesVersion | `2026.08.31.2` |
| writtenAt | `2026-09-06T06:05:00.000Z` |

## Artifacts

| Kind | Path |
|------|------|
| solution | `specs/csdl-so-05/be/solution-discovery.md` |
| prior design | `specs/csdl-so-05/handoff/design-compact.md` |
| prior po | `specs/csdl-so-05/handoff/po-compact.md` |
| control-hint | `specs/_data-analy/features/csdl-so-05-control-hint.md` |
| real-data | `specs/_data-analy/features/csdl-so-05-real-data.md` |

## Live bind (1-liner)

- API/BFF: `…/asset/csdl-records?resource=accident-summaries` · **proxy only** · **cấm ERP.*** · **cấm** runtime `/api/v1/accident-summaries`
- Persist: shell + `Schema_CsdlSo05` (`rmms_csdl_so05`) + 3 child C1/C2/BS · **cấm** parent `*Json` · **cấm** col1–3 SSOT
- DTO: header + `entriesC1[]` / `entriesC2[]` / `entriesBlackSpot[]` · period/cause/damage/BS enums per PO
- Entry: `/csdl-so-05` + hub NEW card · peer so-04 / `rpt-tngt` RO · **cấm** 16 hạng
- Gates: `tz_none` · `xco_get_only` · `share_tenant` · DOMAIN-MAP **T-DM-01** add slug

## FormMode ↔ API

| Mode | Load | Save |
|------|------|------|
| list | GET ?resource=accident-summaries | — |
| create | empty + 3×`[]` | POST |
| edit | GET /{id} | PUT replace-all lines |
| view | GET /{id} | — |
| copy | GET → clear id | POST new SO- |
| delete | — | DELETE soft |

## Migration (plan only)

`Schema_CsdlSo05` · tables `rmms_csdl_so05` + `_c1` + `_c2` + `_bs` · Dev/Step 4b only · **cấm** chạy @ SA

## TL tasks (ids)

T-DM-01 · T-BE-01…06 · T-BFF-01 · T-FE-01…07 · T-OUT-01 (XLS/org P2)

## Next

| Role | Need |
|------|------|
| **team-lead** | task pack từ §6 · wave BE+FE P1 |
| Dev | implement typed · migration 4b · **cấm** invent API |
| QA | e2e queued `/agent-qa*` only |

## UNCLEAR

- none

## Cấm (compact)

ERP.* · invent API/map/file · Guid IdCode · col1–3 only · 16 hạng · runtime accident-summaries path · Write MFE @ SA · yarn build/e2e/start:std · Step 4b @ SA · CRUD rpt-tngt · parent `*Json`
