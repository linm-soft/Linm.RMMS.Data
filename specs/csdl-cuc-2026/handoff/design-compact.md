# handoff-compact — design · csdl-cuc-2026

| Field | Value |
|-------|-------|
| schemaVersion | `1` |
| role | `design` |
| feature | `csdl-cuc-2026` |
| packKind | `list` |
| changeScope | `new_page` |
| status | `done` |
| design_confirm | `approve` |
| taskId | `task_1a28bd02` |
| contentHash | `sha256:8DED37798D5ACEDFA3E106C0308B26152C9DEB7D1977DD7EDF5EB87991834BE2` |
| demoHash | `sha256:C2C9F8194CB104B3202BCAA46A589C9BABA5CF8062AA12E7D0872A9E96EBA7AE` |
| headerFingerprint | `sha256:e9caffb7922b7d81264750b2701a9318aae1f180b145f3f204a4fd5e6b2dcd33` |
| skillVersion | `2026.08.25.01` |
| workflowVersion | `2026.09.01.02` |
| autoApprove | `ON` |
| e2eQa | `ON` (queued `/agent-qa*` only) |
| handoffTo | `sa` |
| lane | `web` |
| mfeStdRoute | `/csdl-cuc-2026` |
| mfeStdUrl | `http://localhost:9301/csdl-cuc-2026` |
| peerStdUrl | `http://localhost:9301/so-ts/csdl-so-sach` |
| hubLive | `/so-ts/csdl-so-sach` |
| beRepo | `D:/AI-QLBD/Linm.RMMS.WebService` · **cấm ERP.*** |
| uiRepo | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Asset` |
| writtenAt | `2026-09-07T02:40:00.000Z` |

## Artifacts

| Kind | Path |
|------|------|
| design | `specs/csdl-cuc-2026/ui/design.md` |
| prototype | `specs/csdl-cuc-2026/ui/prototype/csdl-cuc-2026-hub-prototype.html` |
| reviewUrl | `file:///D:/AI-QLBD/Linm.RMMS.Data/specs/csdl-cuc-2026/ui/prototype/csdl-cuc-2026-hub-prototype.html` |
| prior | `handoff/po-compact.md` · `handoff/data_analy-compact.md` |

## Kind / zones

| Zone | id |
|------|-----|
| Header+KPI | DES-HUB-A · DES-HUB-KPI |
| Tabs+toolbar | DES-HUB-B · DES-HUB-TAB |
| Filter | DES-HUB-FILTER |
| Cards | DES-HUB-C · DES-HUB-CARD |
| Empty | DES-HUB-D |
| Import | DES-MOD-IMPORT |

Kind **G** hub · Import modal · typed deep-link only · DES-RPT **N/A**.

## Controls (chốt)

| key | controlHint |
|-----|-------------|
| tab | Tabs `bieu`\|`so` |
| search | SearchTextInput |
| resource | chip/QS |
| kpiBieu/kpiSo | Badge 16/10 API |
| formNo/titleVn/count | card Text/Number · no slug |
| importXls | Button+file · sheetMap · skipBridge |
| exportXls/refresh | Button |

## Decisions

- Alias `/csdl-cuc-2026` ↔ hub live · KPI/catalog **16+10**
- formNo Cục · **giữ** resource key · **cấm** slug UI
- Import 16 sheet + skip cầu âm Biểu1 · path **GAP SA**
- **Cấm** merge hang-muc/Sổ TS · **cấm** re-queue typed · **cấm** ERP.*
- design_confirm **approve** (autoApprove ON)
- filter-bar-layout-hard · typography 13/D14/M16

## GAPs → next

| ID | Owner |
|----|-------|
| GAP-CSDL-XLS-01 | SA/Dev |
| GAP-CUC-DM-01 | SA |
| GAP-CUC-API-01 | SA |
| GAP-CSDL-CUC-01/02 · ROUTE-01 · TYP-01 | Dev |
| GAP-CSDL-CUC-11 · TYPED-00 | All/TL |

## Handoff next

| Role | Do |
|------|----|
| SA | DOMAIN-MAP slug · catalog widen · import/export endpoints |
| TL/Dev | Tasks theo GAP · alias route · hub 16+10 |
| QA | After Dev · e2e queued |

## Cấm

- re-scan demo · e2e/start:std ở Design · invent import path live · ERP.* · Slideout generic hub

<!-- compact schemaVersion=1 role=design feature=csdl-cuc-2026 taskId=task_1a28bd02 -->
