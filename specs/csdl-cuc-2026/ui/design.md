# Design — csdl-cuc-2026 (CSDL Cục · hub KPI 16+10 + Import Excel)

| Field | Value |
|-------|-------|
| feature | `csdl-cuc-2026` |
| this role | `design` · `/agent-design` |
| Feature Kind | **G** hub (catalog cards) + **import modal** · typed deep-link only |
| status | `confirmed` (autopilot) |
| design_confirm | **approve** (`autoApprove=ON` · `task_1a28bd02`) |
| changeScope | `new_page` |
| packKind | `list` |
| gap | GAP-CSDL-CUC-01/02 · GAP-CUC-ROUTE-01 · GAP-TYP-01 · GAP-CSDL-XLS-01 (SA) · GAP-CUC-DM-01 (SA) |
| mfe | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Asset` |
| mfeStdRoute | `/csdl-cuc-2026` |
| mfeStdUrl | `http://localhost:9301/csdl-cuc-2026` |
| peerStdUrl | `http://localhost:9301/so-ts/csdl-so-sach` |
| hubLive | `/so-ts/csdl-so-sach` |
| real_view_parity | `v1` |
| shared_grid_example | `v1` |
| backend | `D:/AI-QLBD/Linm.RMMS.WebService` · domain **Asset** · `api/v1/asset/csdl-records` · **cấm ERP.*** |
| prior · data_analy | `confirmed` · hash skip · contentHash `sha256:8DED37798D5ACEDFA3E106C0308B26152C9DEB7D1977DD7EDF5EB87991834BE2` · demoHash `sha256:C2C9F8194CB104B3202BCAA46A589C9BABA5CF8062AA12E7D0872A9E96EBA7AE` · **cấm** re-scan demo (**GAP-DES-DEMO-RESCAN-01**) |
| prior · po | `confirmed` · `po/requirement.md` · `task_0387daca` · Grid AC-G-01…10 |
| autoApprove | **ON** |
| e2eQa | **ON** — queued `/agent-qa*` · **cấm** e2e / `yarn start:std` ở Design |
| updatedAt | `2026-09-07T02:40:00.000Z` |
| taskId | `task_1a28bd02` |

**Cấm:** Dev/BE · re-scan DEM · ERP.* · invent import path như live · merge hang-muc/Sổ TS (**GAP-CSDL-CUC-11**) · re-enqueue typed 16+10 · yarn build/e2e/start:std · start role khác (**GAP-PKT-ROLE-01**).

## 0. Context & inventory (hash skip — **cấm** re-scan demo)

| ID | Path | Notes |
|----|------|-------|
| CTX-01 | `docs/context/features/csdl-cuc-2026.md` | Hub Cục 16+10 + import |
| DEM-01 | `…/csdl-so-sach-demo.html` | zone ref only · **cấm** SSOT data |
| DEM-02 | `…/asset/csdl-so-sach.html` | chrome ref · **không** crawl lại |
| DA-01 | `specs/_data-analy/features/csdl-cuc-2026-control-hint.md` | controlHint SSOT · done |
| DA-02 | `specs/_data-analy/features/csdl-cuc-2026-real-data.md` | §A–§B catalog 16+10 |
| PO-01 | `specs/csdl-cuc-2026/po/requirement.md` | Grid AC · Screens · Leave |
| MFE hub | `CsdlSoSachPage.tsx` | live shell **12+8** → widen **16+10** |
| DOMAIN | `DOMAIN-MAP.md` | thiếu slug `csdl-cuc-2026` → **GAP-CUC-DM-01** SA |
| Excel | `1. Biểu mẫu CSDL.xls` | 16 sheet · cite import · not runtime SSOT |

Persona: Khu QLĐB · Văn phòng Cục · Nhà thầu BDTX.

**≠** typed `csdl-bieu-*` / `csdl-so-*` (done · deep-link) · ≠ hang-muc 40 ô · ≠ Sổ TS row merge.

### § Delta Current vs New (`new_page`)

| ID | Current | New (Design chốt) | Owner |
|----|---------|-------------------|-------|
| GAP-CSDL-CUC-01 | Hub KPI/card **12+8** | KPI + cards **16 biểu + 10 sổ** từ catalog API | Design/Dev |
| GAP-CSDL-CUC-02 | formNo đảo 7–10 / sổ 1–2 | `formNo` Cục trên card · **giữ** `resource` key | Design/Dev |
| GAP-CUC-ROUTE-01 | chỉ `/so-ts/csdl-so-sach` | Alias **`/csdl-cuc-2026`** ↔ hub live | Design/Dev |
| GAP-CSDL-XLS-01 | Import stub/OUT | Import modal 16 sheet · skip cầu âm Biểu 1 | SA/Dev |
| GAP-CUC-DM-01 | DOMAIN-MAP thiếu slug | SA row → Asset | SA |
| GAP-TYP-01 | — | label 13 · input D14/M16 | Design/Dev |
| GAP-CSDL-CUC-11 | rủi ro merge | deep-link peer only · **cấm** merge | All |

**Không đổi:** prefix `api/v1/asset/csdl-records` · typed resource keys · peer hang-muc route · IdCode **cấm** Guid.

## 1. Kind + UI pattern (HARD)

| | |
|--|--|
| Feature Kind | **G** hub |
| Shell | **1×** `LinPageLayout` / hub surface trên MFE Asset `:9301` — **cấm** nested CatalogListShell trên hub |
| Hub | Tab **CSDL (16)** · **Sổ (10)** · KPI badge · catalog cards · **cấm** Thêm mới trên Zone A |
| Card | `formNo` Cục + `titleVn` + `count` · **cấm** slug trên UI · click → typed route / `?resource=` |
| Filter | **`LinErpListFilterBar`** 1 hàng · **SearchTextInput** + 🔍 cụm phải — **cấm** nút Tìm riêng · **cấm** native `<select>` filter (**filter-bar-layout-hard** · AC-G-10) |
| Toolbar | Refresh · **Import Excel** · Export — trailing Zone B |
| Import | Modal overlay · file · sheet→resource map · skip cầu âm · confirm · toast lỗi — **cấm** `alert`/`confirm` native |
| Empty | Empty VN khi catalog 0 · **cấm** mock HasData (AC-G-08) |
| Typed | **deep-link only** · **cấm** Slideout generic trên hub · **cấm** re-queue child |
| Typography | label **13** · input D14 / M16 (**GAP-TYP-01** · AC-G-09) |
| Map / Report | `map: none` trên hub · DES-RPT **N/A** (hub không report pack) |
| Skip chrome | GOVOne · Signed demo sidebar · hang-muc 40 ô · mobile |

### Routes (Design chốt)

| Surface | Path |
|---------|------|
| Alias (mfeStd) | `/csdl-cuc-2026` |
| Hub live | `/so-ts/csdl-so-sach` |
| Deep-link resource | `?resource=` giữ key · mở typed `csdl-bieu-*` / `csdl-so-*` |
| Import | overlay modal trên hub |
| Peer hang-muc / Sổ TS | deep-link only · **cấm** sync merge P1 |

## 2. Screens / zones

| Screen | Surface | Zones | Notes |
|--------|---------|-------|-------|
| S-HUB | Hub Kind G | **DES-HUB-A · B · FILTER · KPI · C · D** | Tab 16/10 · search · Import/Export/Refresh · cards |
| S-MOD-IMPORT | Import Excel | **DES-MOD-IMPORT** | 16 sheet map · skip Biểu1 cầu âm · confirm |
| S-CARD-OPEN | Nav typed | — | click card → typed page / `?resource=` |
| S-EMPTY | Empty | DES-HUB-D | catalog 0 |
| S-SKIP-TYPED-FORM | — | — | **cấm** Slideout generic · typed done |
| S-SKIP-MAP | — | — | **cấm** map canvas hub |
| S-SKIP-HANGMUC | — | — | **cấm** merge 40 ô |

### Zone map (ids)

| Zone id | Pattern | DoD |
|---------|---------|-----|
| DES-HUB-A | Header | title «CSDL Cục — Sổ sách / biểu mẫu» · KPI badge 16/10 · **cấm** Thêm trên A |
| DES-HUB-B | Toolbar | Refresh · Import · Export · Tabs CSDL(16)/Sổ(10) |
| DES-HUB-TAB | Tabs | default `bieu` · đếm đúng Cục · **cấm** 12/8 |
| DES-HUB-FILTER | Filter bar | SearchTextInput · optional resource chip QS |
| DES-HUB-KPI | KPI strip | kpiBieu=16 · kpiSo=10 từ API |
| DES-HUB-C | Catalog cards | 16+10 · formNo+title+count · no slug |
| DES-HUB-CARD | Card atom | formNo ≠ resource key (AC-G-04) |
| DES-HUB-D | Empty/footer | empty VN |
| DES-MOD-IMPORT | Modal | file · sheetMap · skipBridge · confirm/Hủy |

## 3. Control = controlHint (Design chốt · **cấm** đoán)

### Hub filter / toolbar (Zone B)

| Field key | Label | controlHint | Slot | Notes |
|-----------|-------|-------------|------|-------|
| tab | Tab | Tabs | leading | `bieu` \| `so` · default `bieu` |
| search | Tìm kiếm | `SearchTextInput` | leading | tên / resource · **không** nút Tìm |
| resource | Resource | chip / QS | leading | `?resource=` giữ key |
| refresh | Làm mới | `Button` | trailing | reload catalog + KPI |
| importXls | Import Excel | `Button` + file | trailing | 16 sheet · **GAP-CSDL-XLS-01** |
| exportXls | Export | `Button` | trailing | merge cột Excel — SA/Dev |

### KPI + catalog card (Zone A/C)

| Field key | Label | controlHint | Notes |
|-----------|-------|-------------|-------|
| kpiBieu | Số biểu | Number / Badge | **16** API · **cấm** hardcode 12 |
| kpiSo | Số sổ | Number / Badge | **10** · **cấm** hardcode 8 |
| formNo | Số TT Cục | Text | renumber Cục · giữ resource |
| titleVn | Tên | Text | title VN · **cấm** slug |
| resource | Resource key | const | deep-link typed |
| count | Số bản ghi | Number | API · 0 OK |
| peerLink | Peer Sổ TS | Link | deep-link only · **cấm** merge |

### Import modal

| Field key | Label | controlHint | Notes |
|-----------|-------|-------------|-------|
| importFile | File .xls | FileButton | multipart · GAP SA path |
| sheetMap | Sheet→resource | table | 1 sheet ↔ 1 resource |
| skipBridge | Skip cầu âm | Checkbox | Biểu 1 rule · default ON |
| confirm | Xác nhận | Button | toast kết quả · **cấm** alert |

## 4. Real-data bind (cite DA-02 · **cấm** invent)

| Operation | Path |
|-----------|------|
| Catalog / KPI | `GET …/asset/…/catalog` (widen 16+10) **hoặc** aggregate resources |
| Records shell | `GET/POST/PUT/DELETE /web-bff/api/v1/asset/csdl-records?resource=` |
| Import multi-sheet | **GAP** SA — đề xuất `POST …/asset/csdl-records/import` · **cấm** invent như live |
| Export | **GAP** SA/Dev |
| Lookups | Integration `road-route` · `org-unit` (cite typed child) |

### Catalog SSOT (formNo · resource) — Design giữ key

| formNo | resource | typed (done) |
|--------|----------|---------------|
| 01…16 | `pavement-sections` … `interchanges` | `csdl-bieu-01…16` |
| S1…S10 | `inspection-logs` … plan-map | `csdl-so-01…10` |

Chi tiết title VN = CTX / real-data §A — **cấm** đổi resource khi đổi formNo.

## 5. Prototype + reviewUrl (REQUIRED)

| | |
|--|--|
| Artifact | [`ui/prototype/csdl-cuc-2026-hub-prototype.html`](./prototype/csdl-cuc-2026-hub-prototype.html) |
| Scope | Kind **G** hub content-only · Import modal · skip chrome / typed Slideout |
| Zones | DES-HUB-A · B · TAB · FILTER · KPI · C · CARD · D · DES-MOD-IMPORT |
| **reviewUrl** | `file:///D:/AI-QLBD/Linm.RMMS.Data/specs/csdl-cuc-2026/ui/prototype/csdl-cuc-2026-hub-prototype.html` |
| **peerStdUrl** | `http://localhost:9301/so-ts/csdl-so-sach` |
| **mfeStdUrl** | `http://localhost:9301/csdl-cuc-2026` |

### Wire

```
[A] fa-database + «CSDL Cục — Sổ sách / biểu mẫu» · badge Biểu 16 · Sổ 10
[B] Tabs CSDL(16)|Sổ(10) · Refresh · Import Excel · Export
[FILTER] SearchTextInput + 🔍 cụm phải · resource chip optional
[KPI] 16 / 10 / Hiển thị / catalog
[C] cards formNo + titleVn + count → deep-link typed
[D] empty VN khi 0
[MOD-IMPORT] file · sheetMap 16 · skip cầu âm · Hủy/Xác nhận
```

## 6. Grid AC map (PO → Design)

| AC | Design |
|----|--------|
| AC-G-01 | KPI/catalog 16+10 API — DES-HUB-KPI/C |
| AC-G-02 | Tabs 16/10 + search — DES-HUB-TAB/FILTER |
| AC-G-03 | Cards formNo+title+count · no slug — DES-HUB-CARD |
| AC-G-04 | formNo ≠ resource — card atom |
| AC-G-05 | alias `/csdl-cuc-2026` — Routes |
| AC-G-06 | Import 16 sheet + skip Biểu1 — DES-MOD-IMPORT |
| AC-G-07 | Export toolbar — Zone B |
| AC-G-08 | Empty VN · no mock — DES-HUB-D |
| AC-G-09 | typography 13/D14/M16 — GAP-TYP-01 |
| AC-G-10 | filter-bar-layout-hard — DES-HUB-FILTER |

## 7. DES-RPT

**N/A** — hub Kind G catalog · không report surface trong pack này.

## 8. Leave / error

| Case | UI |
|------|-----|
| Catalog empty | empty VN · KPI 0 |
| Import lệch cột | toast + list lỗi dòng · **cấm** alert |
| Import Biểu 1 cầu âm | skip + báo cáo số skip |
| 422 thiếu resource | toast |
| Dirty import preview đóng | Hủy modal · không native confirm bắt buộc (file chưa POST) |

## 9. design_confirm

| | |
|--|--|
| Gate | `design_confirm` |
| Result | **approve** |
| Mode | `autoApprove=ON` · Autopilot |
| Next | SA (`solution-discovery`) · DOMAIN-MAP slug · import API |
| Queued | e2e → `/agent-qa*` only |

## 10. Version meta

| Field | Value |
|-------|-------|
| skillId | agent-design |
| skillVersion | 2026.08.25.01 |
| schemaVersion | 1 |
| workflowVersion | 2026.09.01.02 |
| contentHash | sha256:8DED37798D5ACEDFA3E106C0308B26152C9DEB7D1977DD7EDF5EB87991834BE2 |
| demoHash | sha256:C2C9F8194CB104B3202BCAA46A589C9BABA5CF8062AA12E7D0872A9E96EBA7AE |
| headerFingerprint | sha256:e9caffb7922b7d81264750b2701a9318aae1f180b145f3f204a4fd5e6b2dcd33 |
| generatedAt | 2026-09-07T02:40:00.000Z |
| taskId | task_1a28bd02 |
