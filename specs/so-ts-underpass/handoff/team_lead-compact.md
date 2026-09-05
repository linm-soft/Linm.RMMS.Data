# handoff-compact — team_lead → dev

| | |
|--|--|
| schemaVersion | `1` |
| role | `team_lead` |
| feature | `so-ts-underpass` |
| title | Sổ TS — Hầm chui dân sinh |
| packKind | `list` |
| changeScope | `new_page` |
| status | `confirmed` |
| taskId | `task_38aaab50` |
| typeCode | `UNDERPASS` |
| dump | `tbl_underpass_box` |
| clusterUi | `crossing` · tile `t06` |
| prefix | `CC-` (GIS `CC` · `cong-chui`) |
| formPattern | **Full page** · CatalogFormShell 5 cols · **S-LOC-POINT** |
| Kind | **B** A–D+F+H |
| route_confirm | **`route_a`** |
| mfeStdRoute | `/so-ts?type=UNDERPASS` |
| mfeStdUrl | `http://localhost:9301/so-ts?type=UNDERPASS` |
| alias | `/so-ts-underpass` → route_a (optional) |
| API | `api/v1/asset/road-assets` |
| domain | **Asset** |
| gates | `tz_na` · `xco_get_only` · `share_tenant` |
| migration | **none** P1 |
| e2eQa | **ON** (queued `/agent-qa*` only) |
| contentHashPrior | `sha256:e0d055aba3a52b289144ba966e1c00448c1f54daf105b50bef00004d8355e2bd` |
| headerFingerprintPrior | `sha256:c267ab7ecbe32162d2ea8be9518521aec8ef1bd031d6a751e30ab72c44c3c1fa` |
| skillVersion | `2026.08.19.04` |
| workflowVersion | `2026.09.01.02` |
| rulesVersion | `2026.09.01.1` |
| writtenAt | `2026-09-01T11:35:00.000Z` |

## Artifact

- task: `specs/so-ts-underpass/task/so-ts-underpass.md`
- filterBar: `docs/context/features/so-ts-underpass-filter-bar.md` (T-CTX-01)
- reviewUrl: `file:///D:/AI-QLBD/Linm.RMMS.Data/specs/so-ts-underpass/ui/prototype/so-ts-underpass-list-prototype.html`

## Prior (confirmed)

- data_analy · po · design · sa — all confirmed · solution_confirm=approve · design_confirm=approve

## Decisions

- Kind B · dumpSpecs P1 · flatten DEFER · **cấm** Schema_* / Step 4b
- `name` ← tencongchui · fallback name_underpass · trống OK · **cấm** IsWeak
- Point: **S-LOC-POINT** · ẩn kmTo · **cấm** ép `"0"` · **không** S-LOC-RANGE
- LOOKUP: culvertTypes · constructionTypes · structureTypes · wingwall · pavement
- prefix **`CC-`** · GIS CC · grid hide low-fill pavement_*/lighting/signboard/barrier
- route_a live `?type=UNDERPASS` · alias board-only

## Dev focus (T-*)

| Task | Focus |
|------|-------|
| T-UI-LIST-01 | UNDERPASS profile · GAP-SOTS-COL-01 · hide low-fill · LAYOUT-06 |
| T-UI-FILTER-01 | so-ts-underpass-filter-bar.md · V1–V5 · cấm nút Tìm riêng |
| T-UI-FORM-01 | S-* reuse · S-ATTR · **S-LOC-POINT** · dumpSpecLabels · CC- |
| T-BE-INIT-01 | LOOKUP_STATIC · GAP-UP-LOOKUP-01 |
| T-BE-CRUD-01 | name/CC- · dumpSpecs P1 · GAP-UP-NAME/PREFIX · DOMAIN-MAP |
| T-UI-LEAVE-01 / HIST | LeaveConfirmModal · useAlert · cấm native |
| T-QA-* | queued e2e **chỉ** `/agent-qa*` |

## SA map

T-UP-01..10 → LIST/FORM/BE-CRUD/INIT/LEAVE/CTX/pack (see task MD)

## Cấm

ERP.* · invent `api/v1/so-ts/*` · fork AssetFormPage · tab legacy · Step4b/migration · e2e/build/start:std ở TL · GAP-PKT-ROLE-01

## Next

| Role | Need |
|------|------|
| **dev** | `/agent-dev` · write `implement/so-ts-underpass.md` |
| QA | e2e queued `/agent-qa*` |
