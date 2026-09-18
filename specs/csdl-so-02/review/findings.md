# Review — Findings — csdl-so-02

> Status: **confirmed** · `review_confirm=done` · autoApprove ON · task `task_635f47f8`  
> Verdict: **PASS** · Wave A CR PDF · contentHash Wave A unchanged → demo hash-skip

| | |
|--|--|
| Feature | `csdl-so-02` |
| Title | CSDL Sổ 02 — Nhật ký tuần đường (CR PDF Wave A) |
| Role | `review` |
| packKind | `list` |
| changeScope | `edit_page` |
| cr | `nktd-pdf-20260917` · Wave A |
| resource | `patrol-logs` |
| formNo | `02` · IdCode `SO-` |
| contentHash | `sha256:3ddc42d7c4404f439925322953f28ffc9d3b263726ac6cf5216065751c19b4d6` |
| headerFingerprint | `sha256:1b032f04f5154622239e0e2bdbebe6923ec76ba9ca33d283b51ebe0062c0d471` |
| prior QA | **PASS** · S0/S1/QA-20 · task_2472bc94 |
| prior Dev | **PASS** · yarn+dotnet · LocationText · task_00facaea |
| skillVersion | `2026.08.25.01` |
| workflowVersion | `2026.09.01.02` |
| rulesVersion | `2026.09.17.2` |
| reviewedAt | `2026-09-18T04:10:30.000Z` |

## Gate summary

| Gate | Result | Note |
|------|--------|------|
| QUERY | **PASS** | EF LINQ `LocationText`/`LocationKm` projection · Asset `csdl-records` · **cấm ERP.*** |
| SEC | **PASS** | soft-delete giữ · OR BE reject · media≤10 · no secrets · Auth DEFER |
| UI-FN | **PASS** | `locationText` Text max512 · weather Textarea rows=3 · OR soft · list «Vị trí» · route_a |
| BE-FN | **PASS** | `CsdlBookEntryEntity.LocationText` · `Schema_CsdlSo02LocationText` · OR · list prefer text else Km |
| Hash | **SKIP** | contentHash == Wave A priors (data_analy→qa) · no demo re-scan |
| QA evidence | **PASS** | manifest `ok=true` · S0/S1/QA-20 PNG |
| DOMAIN-MAP | **PASS** | `csdl-so-02` → Asset · API giữ |

## QUERY

| ID | Sev | Finding | Verdict |
|----|-----|---------|---------|
| Q-01 | — | List projection EF `Select` LocationText/LocationKm · prefer text else Km | OK |
| Q-02 | — | API giữ `api/v1/asset/csdl-records?resource=patrol-logs` · body `entries[].locationText` | OK |
| Q-03 | — | **Không** ERP.* / invent `api/v1/patrol-logs` · FE no ERP refs | OK |
| Q-04 | — | Filter period/fromDate/toDate giữ · không raw SQL LocationText | OK |

## SEC

| ID | Sev | Finding | Verdict |
|----|-----|---------|---------|
| S-01 | — | Delete soft-delete giữ (không hard wipe Wave A) | OK |
| S-02 | — | FE `csdlListPermissions` · form OR soft (View no-req) | OK |
| S-03 | — | BE: eventAt + (Km **OR** text) + weather · media≤10 | OK |
| S-04 | — | Auth wire đầy đủ DEFER (debt · non-block) | DEFER |
| S-05 | — | Không embed secret/credential | OK |
| S-06 | — | **cấm** reuse Sổ01 `Location` field cho Wave A text | OK |

## UI-FN

| ID | Sev | Finding | Verdict |
|----|-----|---------|---------|
| U-01 | — | Route `/csdl-so-02` + hub redirect `patrol-logs` (route_a) · QA S1 | OK |
| U-02 | — | Form: `locationText` Input maxLength=512 · testid `…-locationText` | OK |
| U-03 | — | weatherEvent Textarea rows=3 maxLength=2000 · span2 | OK |
| U-04 | — | OR soft FE: !hasKm && !hasText → invalid cả hai | OK |
| U-05 | — | List DEFAULT_COLUMNS key `locationText` · label «Vị trí» G-11/G-12 | OK |
| U-06 | P1 | FileRef/sketch/media text-ids (**GAP-SO02-FILE-01**) | ACCEPT debt |
| U-07 | — | Kind D Slideout 2col · entries inline_grid · LeaveConfirm giữ | OK |
| U-08 | — | QA PNG S0/S1/QA-20 khớp Wave A zones | OK |

## BE-FN

| ID | Sev | Finding | Verdict |
|----|-----|---------|---------|
| B-01 | — | Entity `LocationText` nvarchar(512) trên `CsdlBookEntryEntity` | OK |
| B-02 | — | Migration `Schema_CsdlSo02LocationText` pair · Dev/4b applied | OK |
| B-03 | — | DTO 1:1 entry/list · Upsert typedPatrol LocationText | OK |
| B-04 | — | Validate OR: Km **hoặc** locationText + weather bắt buộc | OK |
| B-05 | — | List `FormatPatrolLocationDisplay` prefer text else Km | OK |
| B-06 | — | IdCode `SO` · resource `patrol-logs` **giữ** · **cấm** wipe new_page | OK |
| B-07 | — | Wave B report **park** · ReportService display fallback OK non-scope | OK |

## Cross-role consistency

| Check | Result |
|-------|--------|
| data_analy → po → design → sa → TL → dev → qa | contentHash `3ddc42d7…` align |
| changeScope `edit_page` · CR Wave A LocationText | consistent |
| formPattern Kind D · API Asset · **cấm ERP.*** | consistent |
| open Q | **none** |
| UNCLEAR | **none** |

## Debt (non-blocking · carry)

| ID | Sev | Note |
|----|-----|------|
| GAP-SO02-FILE-01 | P1 | sketch/media text-id · File picker later |
| GAP-QA-E2E-PW-01 | P2 | yarn e2e-qa playwright resolve → chrome createRequire |
| GAP-NKTD-RPT-PARK | OUT | Wave B report park |
| Auth wire | DEFER | T-PERM full |
| GAP-CSDL-ORG-01 | DEFER P2 | manageUnit/contractor SearchInput |
| GAP-CSDL-XLS-01 | OUT | import/export |
| UiSchema DB seed | note | may need Config reset for `locationText` col |

## review_confirm

| Field | Value |
|-------|-------|
| decision | **`done`** |
| autoApprove | `ON` |
| blockers | **none** |
| fix_gaps | — |
| phase_next | `done` |

## Evidence refs

- FE: `CsdlSo02Page` · `CsdlSo02FormSlideout` (OR + Textarea + list col)
- BE: `CsdlBookEntryEntity.LocationText` · `CsdlCatalogService` OR + projection · `Schema_CsdlSo02LocationText`
- QA: `specs/csdl-so-02/qa/screens/manifest.json` · S0/S1/QA-20
- compact priors: data_analy…qa (all `done` / confirmed)
- STATUS: `specs/csdl-so-02/STATUS.md`
