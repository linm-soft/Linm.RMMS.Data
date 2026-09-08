# handoff-compact — po · csdl-so-03

| | |
|--|--|
| schemaVersion | `1` |
| role | `po` |
| feature | `csdl-so-03` |
| title | CSDL Sổ 03 — Trực BĐGT + chốt + SC |
| packKind | `list` |
| changeScope | `new_page` |
| status | `done` |
| taskId | `task_44997354` |
| resource | `duty-incident-logs` |
| formNo | `03` |
| IdCode | `SO-` |
| contentHash | `sha256:1e8b4b6d6149c1ff2f27010cbf0d6649af9408b05738f416cd58d8c7361fdd9d` |
| headerFingerprint | `sha256:b5b6baa32c1a5ebbf3d8eb2ecaad922d90a291958347aa22ec8fa27096d93997` |
| skillVersion | `2026.08.25.01` |
| workflowVersion | `2026.09.01.02` |
| rulesVersion | `2026.08.31.2` |
| updatedAt | `2026-09-05T19:40:00.000Z` |
| autoApprove | `ON` |
| e2eQa | `ON` (queued `/agent-qa*`) |

## Artifacts

| Kind | Path |
|------|------|
| requirement | `specs/csdl-so-03/po/requirement.md` |
| prior compact | `specs/csdl-so-03/handoff/data_analy-compact.md` |
| control-hint | `specs/_data-analy/features/csdl-so-03-control-hint.md` |
| real-data | `specs/_data-analy/features/csdl-so-03-real-data.md` |
| CTX | `docs/context/features/csdl-so-03.md` |
| demo | `Linm.RMMS.Demo/src/demo/features/csdl-so-sach-demo.html` (zone ref only) |

## Live bind (1-liner)

- API: `api/v1/asset/csdl-records?resource=duty-incident-logs` (+ BFF) · **cấm ERP.***
- Entry: mfeStd `/csdl-so-03` · hub `/so-ts/csdl-so-sach?resource=duty-incident-logs`
- Form: Kind D Slideout · typed T-SO-03 header + entries · **cấm** detail*/col1–3
- Merge P1: retire `duty-logs` + `checkpoint-duties` · 1 card Sổ 03 · legacy QS redirect

## PO decisions (autoApprove)

| Q | Decision |
|---|----------|
| Q-MERGE | migrate + soft-retire 2 keys same release · redirect legacy QS |
| Q-DUTYKIND | no `dutyKind` col · gộp trong `content` |
| Q-FORMNO | 1 card «Sổ 03 — Trực BĐGT + chốt + sự cố» formNo=`03` |
| Q-STATUS | `draft\|active\|closed` LOOKUP_STATIC |
| Q-PROV | keep_static 5 tỉnh P1 |
| Q-ORG | Text P1 · org-unit SearchInput P2 |
| Q-SHIFT | Text free P1 |

## GAP P1 / DEFER / OUT

- **P1:** MERGE-01 · TYPED-01 · ROUTE-01 · FORMNO-01 · ROAD-01 · PROV-01(static) · CUC-03 · CUC-06 · RPT-SRC (form READY)
- **DEFER P2:** ORG-01 SearchInput
- **OUT:** XLS-01

## Zones

List A/B/C/D Kind B · Form Kind D Slideout Z1–Z3 · entries inline grid · map: none · filter 1-row HARD

## AC summary

Grid G-01…G-13 · Form F-01…F-14 · Leave dirty modal · empty VN «Chưa có nhật ký trực BĐGT / chốt / sự cố»

## Next

| Role | Need |
|------|------|
| **Design** | control-map · prototype typed · 1 hub card · reviewUrl · filter-bar HARD |
| SA | Schema_CsdlSo03 · migrate/retire 2 keys · widen DTO |
| QA | e2e queued — **không** chạy ở PO |

## Cấm (compact)

Demo/LS SSOT · ERP.* · Guid IdCode · Col1–3 only · 2 resource song song P1 · invent map · dutyKind P1 · yarn build/e2e/start:std ở PO · re-scan demo
