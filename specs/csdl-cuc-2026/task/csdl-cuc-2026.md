# Team lead — Task pack — csdl-cuc-2026

> Status: **done** · task `task_e825e16d` · role `team_lead` · packKind `list` · Kind **G** hub  
> Written: `2026-09-07T03:00:00.000Z` · autoApprove ON · e2eQa queued (`/agent-qa*` only)

| Field | Value |
|-------|-------|
| feature | `csdl-cuc-2026` |
| title | CSDL Cục — hub KPI/catalog 16+10 + Import Excel |
| packKind | `list` |
| changeScope | `new_page` |
| formKind | **G** (hub / catalog cards — không Slideout generic) |
| lane | `web` |
| skillVersion | `2026.08.25.01` |
| workflowVersion | `2026.09.01.02` |
| contentHash | `sha256:8DED37798D5ACEDFA3E106C0308B26152C9DEB7D1977DD7EDF5EB87991834BE2` |
| demoHash | `sha256:C2C9F8194CB104B3202BCAA46A589C9BABA5CF8062AA12E7D0872A9E96EBA7AE` |
| headerFingerprint | `sha256:e9caffb7922b7d81264750b2701a9318aae1f180b145f3f204a4fd5e6b2dcd33` |
| mfeStdRoute | `/csdl-cuc-2026` |
| mfeStdUrl | `http://localhost:9301/csdl-cuc-2026` |
| hubLive | `/so-ts/csdl-so-sach` |
| peerStdUrl | `http://localhost:9301/so-ts/csdl-so-sach` |
| beRepo | `D:/AI-QLBD/Linm.RMMS.WebService` · **cấm ERP.*** |
| uiRepo | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Asset` |
| productRoot | `D:/AI-QLBD/Linm.RMMS.Data` |
| DOMAIN-MAP | slug `csdl-cuc-2026` → Asset (`asset`) — CLOSED |
| handoffTo | `dev` |

## Prior (confirmed)

| Role | Compact | Full |
|------|---------|------|
| data_analy | `handoff/data_analy-compact.md` | `_data-analy/features/csdl-cuc-2026-control-hint.md` · `…-real-data.md` |
| po | `handoff/po-compact.md` | `po/requirement.md` |
| design | `handoff/design-compact.md` | `ui/design.md` · prototype |
| sa | `handoff/sa-compact.md` | `be/solution-discovery.md` |

## Zones (Design SSOT)

| Zone | id | Notes |
|------|-----|-------|
| Header+KPI | DES-HUB-A · DES-HUB-KPI | kpiBieu/kpiSo Badge API 16/10 |
| Tabs+toolbar | DES-HUB-B · DES-HUB-TAB | tab `bieu`\|`so` · Import/Export/Refresh |
| Filter | DES-HUB-FILTER | search · filter-bar-layout-hard |
| Cards | DES-HUB-C · DES-HUB-CARD | formNo+titleVn+count · **cấm** slug UI |
| Empty | DES-HUB-D | empty VN · no mock |
| Import | DES-MOD-IMPORT | 16 sheet · skipBridge Biểu1 cầu âm |

Header keys: `tab|kpiBieu|kpiSo|search|resource|importXls|exportXls|formNo`

## FormMode ↔ API (SA chốt)

| Mode | Op | Path | State |
|------|-----|------|-------|
| Catalog/KPI | GET | `/web-bff/api/v1/asset/csdl-records/catalog` | live · widen 16+10 |
| List shell | GET | `/web-bff/api/v1/asset/csdl-records?resource=` | live |
| Import preview | POST | `/web-bff/api/v1/asset/csdl-records/import/preview` | **new** |
| Import commit | POST | `/web-bff/api/v1/asset/csdl-records/import` | **new** · multipart · skipBridge |
| Export | GET | `/web-bff/api/v1/asset/csdl-records/export?resource=` | **new** |

BFF proxy-only · API Asset business · tenant `CompanyCode`.

## route_confirm

| Field | Value |
|-------|-------|
| decision | **approve** (autoApprove ON) |
| newRoute | `/csdl-cuc-2026` |
| aliasOf | `/so-ts/csdl-so-sach` (hub live) |
| mfeStdUrl | `http://localhost:9301/csdl-cuc-2026` |
| note | Alias ↔ hub · **không** duplicate typed pages · GAP-CUC-ROUTE-01 → Dev |

## HARD leave / cấm

- Typed `csdl-bieu-01…16` / `csdl-so-01…10` **done** — deep-link only · **cấm** re-queue (GAP-CUC-TYPED-00)
- **Cấm** merge hang-muc / Sổ TS row (GAP-CSDL-CUC-11)
- **Cấm** ERP.* · infra · mobile lane · Slideout generic hub
- **Cấm** e2e / `yarn start:std` / migration / Step 4b ở TL · E2E chỉ `/agent-qa*`
- Q-PEER P1 = deep-link only

## Tasks (T-*)

| id | owner | deps | title | AC / DoD | GAP |
|----|-------|------|-------|----------|-----|
| T-01 | Dev(BE) | — | Catalog/KPI seed widen **16 biểu + 10 sổ** trên `GET …/csdl-records/catalog` | AC-G-01 · KPI badges = API counts · entity `CsdlCatalogRecordEntity` / `rmms_csdl_catalog_records` | GAP-CSDL-CUC-01/02 |
| T-02 | Dev(BE) | T-01 | Import preview `POST …/import/preview` · sheetMap 16 · skipBridge Biểu1 cầu âm | AC-G-06 · contract SA · validate rows · **cấm** invent path | GAP-CSDL-XLS-01 |
| T-03 | Dev(BE) | T-02 | Import commit `POST …/import` multipart → typed child tables theo resource map | AC-G-06 · tenant CompanyCode · no ERP.* | GAP-CSDL-XLS-01 |
| T-04 | Dev(BE) | T-01 | Export `GET …/export?resource=` | AC-G-07 · file XLS/CSV per SA | GAP-CSDL-XLS-01 |
| T-05 | Dev(BFF) | T-02,T-03,T-04 | BFF proxy-only multipart import + export routes under `/web-bff/api/v1/asset/csdl-records/*` | proxy pass-through · no business logic in BFF | GAP-CSDL-XLS-01 · GAP-CUC-API-01 CLOSED |
| T-06 | Dev(FE) | T-01 | MFE alias route `/csdl-cuc-2026` ↔ hub live `/so-ts/csdl-so-sach` · register mfeStd | AC-G-05 · GAP-CUC-ROUTE-01 · open `http://localhost:9301/csdl-cuc-2026` | GAP-CUC-ROUTE-01 |
| T-07 | Dev(FE) | T-01,T-06 | Hub Kind G: zones A–D · tabs bieu/so · search · KPI 16/10 · cards formNo+titleVn+count · empty VN | AC-G-02..04 · AC-G-08..10 · typography 13/D14/M16 · filter-bar-layout-hard · **cấm** slug UI · formNo≠resource key | GAP-CSDL-CUC-01/02 · TYP-01 |
| T-08 | Dev(FE) | T-05,T-07 | Import modal DES-MOD-IMPORT + Export/Refresh toolbar bind live API | AC-G-06/07 · sheetMap · skipBridge · no mock | GAP-CSDL-XLS-01 |
| T-09 | Dev | T-06..T-08 | Wire deep-link card → typed pages (existing) only · **không** tạo typed mới | GAP-CUC-TYPED-00 · Q-PEER deep-link | GAP-CUC-TYPED-00 |
| T-10 | QA | T-01..T-09 | Scenarios + E2E queued · verify AC-G-01..10 · alias URL · import skipBridge | e2e chỉ `/agent-qa*` · `mfeStdUrl` | — |
| T-11 | Review | T-10 | findings vs design/SA/requirement · no ERP.* · no hang-muc merge | review/findings.md | GAP-CSDL-CUC-11 |

### T-* detail (Dev assign)

#### T-01 — Catalog widen 16+10
- Seed/update catalog records: 16 biểu + 10 sổ (formNo Cục, titleVn, resource key, count).
- `GET /web-bff/api/v1/asset/csdl-records/catalog` returns full set; KPI derived from same payload.
- **Cấm** hardcode UI-only counts.

#### T-02 / T-03 — Import preview + commit
- Preview: parse XLS 16 sheets · map resource · report errors · skipBridge Biểu1 cầu âm.
- Commit: multipart · write typed child tables (done) · transactional per SA.
- Paths: `…/import/preview`, `…/import` — **không** đổi contract SA.

#### T-04 — Export
- `GET …/export?resource=` · respect tenant · empty → empty file / VN message (no mock rows).

#### T-05 — BFF
- Proxy-only · forward multipart · Content-Type preserved.

#### T-06 — Alias route
- Register `/csdl-cuc-2026` in MFE Asset · same hub component as `/so-ts/csdl-so-sach`.
- Update STATUS `mfeStdRoute` / `mfeStdUrl` already set — implement must match.

#### T-07 — Hub UI Kind G
- Controls: tab, search, resource chip/QS, kpiBieu/kpiSo, formNo/titleVn/count, importXls, exportXls, refresh.
- Cards: formNo + title + count · **cấm** slug · formNo ≠ resource.
- Empty state VN · no placeholder mock data.

#### T-08 — Import/Export FE
- Modal DES-MOD-IMPORT · file picker · preview errors · commit · toast VN.
- Export button calls live export.

#### T-09 — Deep-link only
- Card click → existing typed route · **cấm** new typed feature tasks.

## Grid AC map (PO → Dev/QA)

| ID | Pass when | Task |
|----|-----------|------|
| AC-G-01 | KPI/catalog 16+10 API | T-01,T-07 |
| AC-G-02 | Tabs 16/10 + search | T-07 |
| AC-G-03 | Cards formNo+title+count · no slug | T-07 |
| AC-G-04 | formNo≠resource key | T-01,T-07 |
| AC-G-05 | alias route | T-06 |
| AC-G-06 | Import 16 sheet + skip Biểu1 cầu âm | T-02,T-03,T-08 |
| AC-G-07 | Export | T-04,T-08 |
| AC-G-08 | Empty VN · no mock | T-07 |
| AC-G-09 | typography 13/D14/M16 | T-07 |
| AC-G-10 | filter-bar-layout-hard | T-07 |

## GAP board (TL)

| ID | Owner | Status |
|----|-------|--------|
| GAP-CSDL-CUC-01/02 | Dev | open → T-01,T-07 |
| GAP-CSDL-XLS-01 | Dev | open → T-02..T-05,T-08 |
| GAP-CUC-ROUTE-01 | Dev | open → T-06 |
| GAP-TYP-01 | Dev | open → T-07 |
| GAP-CUC-DM-01 | SA | **CLOSED** |
| GAP-CUC-API-01 | SA | **CLOSED** |
| GAP-CSDL-CUC-11 | All | enforce · no hang-muc merge |
| GAP-CUC-TYPED-00 | TL/Dev | enforce · **no re-queue typed** |

## Handoff next

| Role | Do |
|------|----|
| Dev | Implement T-01..T-09 · write `implement/csdl-cuc-2026.md` · **cấm** ERP.* |
| QA | After Dev · T-10 · e2e queued only |
| Review | T-11 |

## DoR (team_lead)

- [x] Prior data_analy/po/design/sa confirmed + compact
- [x] changeScope=new_page · control-hint + real-data present
- [x] T-* đủ Kind G · route_confirm approve
- [x] GAP-CUC-TYPED-00 · GAP-CSDL-CUC-11 recorded
- [x] Versions/hashes align prior compact
- [x] handoff compact `handoff/team_lead-compact.md`
- [x] STATUS → team_lead confirmed · dev pending

<!-- task pack feature=csdl-cuc-2026 taskId=task_e825e16d role=team_lead -->
