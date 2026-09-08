# Data-analy — controlHint — csdl-cuc-2026 (Hub KPI 16+10 + import Excel Cục)

| Field | Value |
|-------|-------|
| feature | `csdl-cuc-2026` |
| packKind | `list` |
| mode | `feature_context` (queue `roleOnly=data_analy` · hub Kind **G** + import XLS · **không** typed form child) |
| changeScope | `new_page` |
| status | `done` |
| skillId | `agent-data-analy` |
| skillVersion | `2026.08.25.01` |
| schemaVersion | `1` |
| workflowVersion | `2026.09.01.02` |
| rulesVersion | `2026.08.31.2` |
| versionGate | `ok` (first fill stubs · CTX+demo hashed) |
| contentHash | `sha256:8DED37798D5ACEDFA3E106C0308B26152C9DEB7D1977DD7EDF5EB87991834BE2` |
| demoHash | `sha256:C2C9F8194CB104B3202BCAA46A589C9BABA5CF8062AA12E7D0872A9E96EBA7AE` |
| headerFingerprint | `sha256:e9caffb7922b7d81264750b2701a9318aae1f180b145f3f204a4fd5e6b2dcd33` |
| analyzedAt | `2026-09-06T19:27:00.000Z` |
| cluster | `csdl-cuc-2026` · Excel 16 sheet + Word 10 · hub live `csdl-so-sach` |
| taskId | `task_63dd8d84` |
| autoApprove | `ON` |
| realData | `specs/_data-analy/features/csdl-cuc-2026-real-data.md` |
| beRepo | `D:/AI-QLBD/Linm.RMMS.WebService` · domain **Asset** · `api/v1/asset/csdl-records` + catalog · **cấm ERP.*** · **cấm** invent `api/v1/infra/*` |
| uiRepo | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Asset` |
| mfeStdUrl | `http://localhost:9301/csdl-cuc-2026` · hub live `/so-ts/csdl-so-sach` |
| mfeStdRoute | `/csdl-cuc-2026` |
| runMode | `full_pipeline` · Autopilot ON · e2eQa queued QA · **lane web only** |

> Data-analy **đề xuất** controlHint. Design **chốt** Kind G + import chrome + reviewUrl. SA **chốt** catalog KPI + import API.  
> Họp **04/09 — 2**: typed `csdl-bieu-01…16` / `csdl-so-01…10` **đã done** — **cấm** enqueue lại. Scope = **import Excel Cục (Q-PEER)** + **hub KPI 16+10**.  
> Typography: label **13** · input D14 / M16 (**GAP-TYP-01**).  
> **Cấm** gộp hang-muc / Sổ TS row (**GAP-CSDL-CUC-11**) · **cấm** ERP.* · **cấm** mobile / `yarn run-implement-mobile`.

## Sources

| Source | Path | sha256 / note |
|--------|------|---------------|
| Context (P0) | `docs/context/features/csdl-cuc-2026.md` | `8DED3779…` (contentHash) |
| Cluster analy | `specs/_data-analy/csdl-cuc-2026/ANALYSIS-AND-TASKS.md` | Wave 0 hub · T-XLS-00 · GAP-CSDL-CUC-01…12 |
| Parent hub CTX | `docs/context/features/csdl-so-sach.md` | Kind G shell live |
| Demo entry | `Linm.RMMS.Demo/src/demo/features/csdl-so-sach-demo.html` | `C2C9F819…` · redirect → `asset/csdl-so-sach.html` |
| Demo page | `Linm.RMMS.Demo/src/demo/asset/csdl-so-sach.html` | hub chrome tham chiếu · **cấm** demo-json SSOT |
| DOMAIN-MAP | `Linm.RMMS.WebService/docs/DOMAIN-MAP.md` | `csdl-so-sach` + 16 bieu + 10 so → Asset · **thiếu** slug `csdl-cuc-2026` (**GAP-CUC-DM-01**) |
| Live API | `CsdlCatalogRecordsController` · catalog | `api/v1/asset/csdl-records` · catalog KPI |
| Live MFE | `CsdlSoSachPage` | hub **12+8** stale vs Cục 16+10 (**GAP-CSDL-CUC-01**) |
| Excel | `data-import/Sổ sách, biểu mẫu trình LĐ Cục/1. Biểu mẫu CSDL.xls` | 16 sheet · import P0 |
| Typed peers | `csdl-bieu-*` / `csdl-so-*` control-hint | **done** — deep-link only · **cấm** re-queue |

Normalized header (hub Kind G + import):

`tab|kpiBieu|kpiSo|search|resource|importXls|exportXls|formNo`

## § Delta Current vs New (`new_page` · `task_63dd8d84`)

| ID | Current | New (this pack) | Surface |
|----|---------|-----------------|---------|
| GAP-CSDL-CUC-01 | Hub live KPI/card **12+8** | Catalog + KPI **16 biểu + 10 sổ** từ API | hub Kind G |
| GAP-CSDL-CUC-02 | Số thứ tự biểu 7–10 / sổ 1–2 đảo | `formNo` theo Cục; giữ `resource` key | catalog labels |
| GAP-CSDL-XLS-01 / CUC-04 | Import Excel stub / OUT | Import 1 sheet = 1 resource · merge header 2–3 dòng · golden 01–16 | toolbar |
| GAP-CUC-ROUTE-01 | Chỉ `/so-ts/csdl-so-sach` | Alias mfeStd `/csdl-cuc-2026` · giữ hub entry | shell / Design |
| GAP-CUC-DM-01 | DOMAIN-MAP thiếu `csdl-cuc-2026` | SA row → Asset (cùng hub / import ops) | SA |
| GAP-CSDL-CUC-11 | Rủi ro gộp hang-muc | LOOKUP chung · ROW riêng · deep-link peer only | nav / copy |
| GAP-CUC-TYPED-00 | — | Typed 16+10 **done** · **cấm** enqueue child | queue / TL |
| GAP-CUC-MOBILE-01 | — | **Lane web only** | TL |

**Không** đổi: prefix `api/v1/asset/csdl-records` · resource keys typed · peer Sổ TS tables · hang-muc `/so-ts/hang-muc` · IdCode **cấm** Guid.

## Kind / zones (handoff Design)

Pack **list** = Kind **G** hub trên MFE Asset `:9301`. Demo = chrome tham chiếu · **không** master demo-json.

| Zone | Pattern | DoD |
|------|---------|-----|
| A | Header | title «CSDL Cục — Sổ sách / biểu mẫu» · badge KPI **16 / 10** · **cấm** slug trên card |
| B tabs | Tab **CSDL (16)** · Tab **Sổ (10)** | đếm đúng Cục · **cấm** 12/8 |
| B toolbar | Refresh · Import Excel · Export · Search | Import chọn sheet/resource · toast lỗi · **cấm** native `<select>` filter |
| B filter | `search` · optional `resource` chip | SearchTextInput · **cấm** nút Tìm riêng · layout `filter-bar-layout-hard` |
| C | Catalog cards / grid | 16 + 10 card · title VN · `formNo` Cục · count từ API · click → typed page / `?resource=` |
| D | Footer / empty | empty VN khi catalog 0 · **cấm** mock HasData |
| Import modal | Zone overlay | map sheet→resource · preview row count · skip cầu âm (Biểu 1) · confirm |

**Skip chrome:** GOVOne · Signed demo · hang-muc 40 ô · mobile shell · typed Slideout (thuộc child done).

## Control hint — hub filter / toolbar (Zone B)

| Field key | Label | controlHint | catalogKind | Slot | Notes |
|-----------|-------|-------------|-------------|------|-------|
| tab | Tab | Tabs | — | `leading` | `bieu` \| `so` · default `bieu` |
| search | Tìm kiếm | `SearchTextInput` | text | `leading` | tên biểu/sổ · mã resource · **không** nút Tìm |
| resource | Resource | chip / QS | — | `leading` | deep-link `?resource=` giữ key |
| importXls | Import Excel | `Button` + file | — | `trailing` | 16 sheet · 1 sheet↔1 resource · **GAP-CSDL-XLS-01** |
| exportXls | Export | `Button` | — | `trailing` | đúng merge cột Excel — SA/Dev |
| refresh | Làm mới | `Button` | — | `trailing` | reload catalog + KPI |

## Control hint — KPI + catalog card (Zone A/C)

| Field key | Label | controlHint | Notes |
|-----------|-------|-------------|-------|
| kpiBieu | Số biểu | Number / Badge | **16** từ catalog API · **cấm** hardcode 12 |
| kpiSo | Số sổ | Number / Badge | **10** · **cấm** hardcode 8 |
| formNo | Số TT Cục | Text | renumber 7–10 / sổ 1–2 (**GAP-CSDL-CUC-02**) |
| titleVn | Tên | Text | title VN · **cấm** slug trên UI |
| resource | Resource key | const | deep-link typed · **cấm** đổi key khi đổi formNo |
| count | Số bản ghi | Number | API count · 0 OK |
| peerLink | Peer Sổ TS | Link | Q-PEER deep-link only · **cấm** sync merge P1 |

## GAPs (handoff)

| ID | Owner | Note |
|----|-------|------|
| GAP-CSDL-CUC-01 | Design/Dev | KPI/card 16+10 |
| GAP-CSDL-CUC-02 | Design/Dev | formNo Cục · giữ resource |
| GAP-CSDL-XLS-01 | SA/Dev | Import/export 16 sheet |
| GAP-CUC-DM-01 | SA | DOMAIN-MAP slug `csdl-cuc-2026` → Asset |
| GAP-CUC-ROUTE-01 | Design/Dev | `/csdl-cuc-2026` alias ↔ hub |
| GAP-CSDL-CUC-11 | All | **cấm** merge hang-muc / Sổ TS row |
| GAP-CUC-TYPED-00 | TL/queue | **cấm** re-enqueue 16+10 typed |
| GAP-CUC-API-01 | SA | Catalog GET 16+10 + import endpoints — **cấm** invent như live nếu thiếu |

## Cấm (HARD)

- Enqueue lại `csdl-bieu-*` / `csdl-so-*` typed
- Gộp hang-muc / `so-ts-*` vào biểu Cục (LOOKUP chung · ROW riêng)
- ERP.* / `api/v1/infra/*` / `api/v1/rmms/*`
- yarn build / e2e / start:std ở role data_analy
- Mobile lane / `run-implement-mobile`
- Demo-json / localStorage làm SSOT

## Version meta

| Field | Value |
|-------|-------|
| skillId | agent-data-analy |
| skillVersion | 2026.08.25.01 |
| schemaVersion | 1 |
| workflowVersion | 2026.09.01.02 |
| generatedAt | 2026-09-06T19:27:00.000Z |
| contentHash | sha256:8DED37798D5ACEDFA3E106C0308B26152C9DEB7D1977DD7EDF5EB87991834BE2 |
| demoHash | sha256:C2C9F8194CB104B3202BCAA46A589C9BABA5CF8062AA12E7D0872A9E96EBA7AE |
| headerFingerprint | sha256:e9caffb7922b7d81264750b2701a9318aae1f180b145f3f204a4fd5e6b2dcd33 |
| sourceCite | `docs/context/features/csdl-cuc-2026.md` · ANALYSIS · Excel 16 sheet · demo redirect |
