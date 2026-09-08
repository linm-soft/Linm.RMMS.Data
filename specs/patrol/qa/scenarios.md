# QA — scenarios — patrol (media delta · e2eQa=ON)

| Field | Value |
|-------|-------|
| feature | `patrol` |
| this role | `qa` · `/agent-qa` |
| status | `failed` |
| verdict | **FAIL** · GAP-QA-PAT-STD-01 P0 |
| pack | T-QA-MEDIA · leftover KEEP · upload media (W4-1 W4-2) |
| changeScope | `edit_page` |
| mfeStdUrl (packet/STATUS) | `http://localhost:9304/patrol` → **404** |
| liveStdUrl | `http://localhost:9304/td-tk` · form `/td-tk/tao-moi` |
| backend | `D:/AI-QLBD/Linm.RMMS.WebService` · `api/v1/patrol/sessions` · files `web-bff/api/v1/files/*` |
| taskId | `task_9f864414` |
| prior Dev | `task_12280943` · implement `confirmed` · media T-* done |
| autoApprove | ON |
| e2eQa | ON |
| method | docker up · yarn start:std :9304 · yarn e2e-qa CLI (npx install fail) → local playwright+chromium-1187 headless · static review media wire |
| updatedAt | `2026-09-06T18:30:00.000Z` |

## Smoke — Final MFE (e2eQa REQUIRED)

| # | Step | Expect | Result |
|---|------|--------|--------|
| S0 | `yarn start:std` · mở packet `http://localhost:9304/patrol` | Route mount · không 404 · `[data-testid=rmms-patrol-list-page]` | **FAIL** — SimpleNotFound · body «Trang /patrol không tồn tại» · PNG `S0.png` |
| S1 | List shell trên packet URL | 1× catalog list · grid/empty | **FAIL** — same 404 · PNG `S1.png` |
| QA-20 | FormType ACT trên packet `/patrol/new` | Form page mount | **FAIL** — 404 · PNG `QA-20.png` |
| S0-vn | live `http://localhost:9304/td-tk` | List mount · `rmms-patrol-list-page` | **PASS** · PNG `S0-vn.png` |
| S1-vn | live list shell | Zone A–D · filters route SearchInput | **PASS** · PNG `S1-vn.png` |
| QA-20-vn | live `/td-tk/tao-moi` | Form Kind B · footer-only | **PASS** · PNG `QA-20-vn.png` |
| QA-MEDIA | live form `data-zone=upload` · `rmms-patrol-form-upload` | LinImageUpload FileMulti | **PASS** · PNG `QA-MEDIA-upload.png` |

## T-QA-MEDIA — upload / gallery / copy (code + live VN)

| # | Step | Expect | Result |
|---|------|--------|--------|
| QA-40 | Form upload zone | `data-zone=upload` · `LinImageUpload` · MIME jpeg\|png\|webp≤10MB · mp4\|webm≤50MB · max10 | **PASS** (code + live VN) |
| QA-41 | Persist guid only | `mediaIds[]` · **cấm** full URL / ERP.* / patrol-files | **PASS** (`mediaUpload.ts` · FileService) |
| QA-42 | View gallery | `data-zone=media-gallery` · resign | **PASS** (code `PatrolFormPage` View) |
| QA-43 | Copy clone | clone `guid[]` | **PASS** (code Copy path) |
| QA-44 | List AC-G-08 | **không** cột media trên grid | **PASS** (list columns KEEP) |
| QA-45 | BE/BFF | sessions `mediaIds` · files/* reuse · replace-all | **PASS** (prior Dev · API 200 list) |
| QA-46 | Packet mfeStdUrl | `/patrol` aliases → list/form | **FAIL** · GAP-QA-PAT-STD-01 |

## Prior KEEP (T-QA-01 / T-QA-CRUD-01) — không re-open

| Pack | Result |
|------|--------|
| A–D list · route SearchInput · `?route=` · CRUD C/E/V/Copy/D · LKP/VAL/UX | **KEEP PASS** (`task_8178afb0`) · live VN smoke OK |
| P0 prior | none |

## E2E runtime log

| Check | Result |
|-------|--------|
| docker compose up -d | **PASS** (postgres/api/bff Running) |
| yarn start:std :9304 | **PASS** (compiled · **cấm** kill worker) |
| `yarn e2e-qa` CLI | **FAIL** — `npx playwright@1.55.0 install chromium` hang/warn → GAP-QA-E2E-02 P2 |
| Fallback capture | **PASS** local `playwright` + `chromium-1187` headless · **cấm** broad taskkill |
| Screens | `specs/patrol/qa/screens/{S0,S1,QA-20,S0-vn,S1-vn,QA-20-vn,QA-MEDIA-upload}.png` · `manifest.json` ok=false · liveOk=true |

## Gaps / debt

| ID | Severity | Note |
|----|----------|------|
| **GAP-QA-PAT-STD-01** | **P0** | Packet/STATUS `mfeStdUrl=/patrol` 404 · live routes `/td-tk` · `/td-tk/tao-moi` · `/td-tk/:id` in `index.tsx` — Dev/TL add alias **hoặc** chốt STATUS/mfeStdUrl=`/td-tk` rồi re-QA |
| GAP-QA-E2E-02 | P2 | yarn e2e-qa npx install flake · fallback local chromium |
| SD-AUTH | P2 | KEEP |
| History API | P1 | KEEP stub |
| Kind E+F / child media | P2 | KEEP |
| GAP-QA-PAT-CODE-DISABLED | P2 | KEEP |

**P0:** GAP-QA-PAT-STD-01 — **cấm** handoff completed · queue **failed** · `qa_fail_rollback`.

## Build gate (`task_9f864414`)

| Check | Result |
|-------|--------|
| `yarn typecheck` (MFE Field) | **PASS** |
| `LINM_RUN_DEV_LOCAL_BUNDLE=1 yarn build` | **PASS** (2 size warnings only) |
| BE Write this role | **n/a** |

## Version meta (REQUIRED)

| Field | Value |
|-------|-------|
| skillId | agent-qa |
| skillVersion | 2026.08.14.5 |
| schemaVersion | 2 |
| workflowVersion | 2026.08.14.5 |
| rulesVersion | 2026.08.14.9 |
| contentHashPriorDev | sha256:task_12280943 |
| contentHashPriorDataAnaly | sha256:f2761b7dc5b13b1388b9db493b028a10227efd81de142607827c582bc04450b7 |
| generatedAt | 2026-09-06T18:30:00.000Z |
| phase | `qa` (**cấm** `phase=done`) |
