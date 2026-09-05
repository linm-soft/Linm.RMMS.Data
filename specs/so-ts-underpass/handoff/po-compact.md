# handoff-compact — po · so-ts-underpass

| | |
|--|--|
| schemaVersion | `1` |
| role | `po` |
| feature | `so-ts-underpass` |
| title | Sổ TS — Hầm chui dân sinh |
| packKind | `list` |
| changeScope | `new_page` |
| status | `confirmed` |
| taskId | `task_7eb8c843` |
| typeCode | `UNDERPASS` |
| dump | `tbl_underpass_box` |
| clusterUi | `crossing` · tile `t06` |
| prefix | `CC-` |
| Kind | `B` · list A–D+F + full-page form 5 cols |
| contentHash | `sha256:e0d055aba3a52b289144ba966e1c00448c1f54daf105b50bef00004d8355e2bd` |
| headerFingerprint | `sha256:c267ab7ecbe32162d2ea8be9518521aec8ef1bd031d6a751e30ab72c44c3c1fa` |
| skillVersion | `2026.08.25.02` |
| workflowVersion | `2026.08.30.01` |
| rulesVersion | `2026.08.31.2` |
| generatedAt | `2026-09-01T11:15:00.000Z` |
| autoApprove | `ON` |
| e2eQa | `ON` (queued `/agent-qa*` only) |

## Artifacts

| Kind | Path |
|------|------|
| requirement | `specs/so-ts-underpass/po/requirement.md` |
| control-hint | `specs/_data-analy/features/so-ts-underpass-control-hint.md` |
| real-data | `specs/_data-analy/features/so-ts-underpass-real-data.md` |
| prior compact | `specs/so-ts-underpass/handoff/data_analy-compact.md` |
| CTX | `docs/context/features/so-ts-underpass.md` |

## Live bind (1-liner)

- API: `api/v1/asset/road-assets` (+ BFF) · **cấm ERP.*** · **cấm** invent `api/v1/so-ts/*`
- List live: `/so-ts?type=UNDERPASS` · alias `/so-ts-underpass` board-only (Design optional Navigate)
- Form: reuse S-META · S-ROUTE · S-LOC-POINT · S-NAME · S-ATTR · S-GPS · **cấm** fork · **cấm** tab legacy
- Name: `name` ← `tencongchui` / `name_underpass` · trống OK · **cấm** IsWeak→đoạn
- Point: ẩn `kmTo` · **cấm** ép lytrinh `"0"` · Create prefix **`CC-`**
- Lookup P1: Dropdown LOOKUP_STATIC dump · Grid hide low-fill default

## PO decisions (autopilot)

| ID | Decision |
|----|----------|
| GAP-UP-LOOKUP-01 | Dropdown LOOKUP_STATIC dump P1 |
| GAP-UP-NAME-01 | tencongchui → name · fallback name_underpass · trống OK |
| GAP-UP-ROUTE-01 | live `?type=UNDERPASS` · alias board optional redirect |
| GAP-UP-PREFIX-01 | Create **`CC-`** · cấm TS- · HC legacy only |
| hide low-fill | grid OFF pavement_*/lighting/signboard/barrier · form vẫn editable |
| packKind / changeScope | **list** · **new_page** |

## DoD keys

Grid AC Kind B · FilterBar HARD · LeaveConfirmModal · S-ATTR editable đủ dump §4 · Report AC N/A

## Screens

S-LIST `/so-ts?type=UNDERPASS` · S-FORM C/E/V/Copy full-page · S-ALIAS optional · devSlash=`/agent-dev`

## Zones

List A/B/C/D Kind B · Form CatalogFormShell 5 cols · map: none

## Next

| Role | Need |
|------|------|
| **Design** | control-map · prototype · reviewUrl · type-profile UNDERPASS · form 5 cols |
| SA | path giữ · dumpSpecs vs flatten · lookup seed · IdCode `CC-` |

## Cấm (compact)

Demo/localStorage SSOT · ERP.* · seed giả · fork AssetFormPage · tab Chi tiết/Bảo trì/Tệp · invent map · re-scan demo · e2e/start:std/build ở PO · start role khác
