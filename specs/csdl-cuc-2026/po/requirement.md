# PO — Requirement — csdl-cuc-2026

| Field | Value |
|-------|-------|
| feature | `csdl-cuc-2026` |
| title | CSDL Cục — hub KPI 16+10 + import Excel |
| packKind | `list` |
| changeScope | `new_page` |
| lane | `web` |
| status | `done` |
| taskId | `task_0387daca` |
| priorAnaly | `confirmed` · hash skip |
| contentHash | `sha256:8DED37798D5ACEDFA3E106C0308B26152C9DEB7D1977DD7EDF5EB87991834BE2` |
| demoHash | `sha256:C2C9F8194CB104B3202BCAA46A589C9BABA5CF8062AA12E7D0872A9E96EBA7AE` |
| headerFingerprint | `sha256:e9caffb7922b7d81264750b2701a9318aae1f180b145f3f204a4fd5e6b2dcd33` |
| skillId | `agent-po` |
| skillVersion | `2026.08.25.01` |
| schemaVersion | `1` |
| workflowVersion | `2026.09.01.02` |
| mfeStdRoute | `/csdl-cuc-2026` |
| mfeStdUrl | `http://localhost:9301/csdl-cuc-2026` |
| hubLive | `/so-ts/csdl-so-sach` |
| beRepo | `D:/AI-QLBD/Linm.RMMS.WebService` · **cấm ERP.*** |
| uiRepo | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Asset` |
| autoApprove | `ON` |
| handoffTo | `design` |
| generatedAt | `2026-09-06T19:45:00.000Z` |

> Hub Kind **G** trên MFE Asset. Typed `csdl-bieu-01…16` / `csdl-so-01…10` **done** — deep-link only · **cấm** re-queue (**GAP-CUC-TYPED-00**).  
> Scope P1 = widen KPI/catalog **16+10** + import Excel Cục 16 sheet + alias route.  
> **Cấm** gộp hang-muc / Sổ TS row (**GAP-CSDL-CUC-11**) · **cấm** mobile lane.

## 1. Goal

Số hóa hub CSDL Cục đúng QĐ 08/2026: catalog + KPI **16 biểu + 10 sổ**; Import Excel multi-sheet (1 sheet = 1 resource); giữ API prefix `api/v1/asset/csdl-records` + catalog widen; alias mfeStd `/csdl-cuc-2026` ↔ hub live.

## 2. packKind confirm

| | |
|--|--|
| packKind | **`list`** = Kind **G** hub (không report) |
| Grid AC | KPI + catalog cards + filter/toolbar — **áp dụng** |
| Report AC | **N/A** |
| changeScope | `new_page` (alias route + widen hub; không typed child) |

## 3. Screens / zones

| Zone | Pattern | Requirement |
|------|---------|-------------|
| A | Header + KPI | Title «CSDL Cục — Sổ sách / biểu mẫu» · badge **16 / 10** từ API · **cấm** slug trên card · **cấm** hardcode 12/8 |
| B | Tabs + filter + toolbar | Tab **CSDL (16)** · **Sổ (10)** · SearchTextInput · Refresh · Import Excel · Export · optional `resource` chip · layout `filter-bar-layout-hard` · **cấm** native `<select>` · **cấm** nút Tìm riêng |
| C | Catalog cards | 16 + 10 card · `formNo` Cục · title VN · count API · click → typed `/csdl-bieu-*` / `/csdl-so-*` hoặc `?resource=` · **cấm** đổi resource key khi đổi formNo |
| D | Empty / footer | Empty VN khi catalog 0 · KPI 0 OK · **cấm** mock HasData |
| Import modal | Overlay | Map sheet→resource · preview row count · skip cầu âm (Biểu 1) · confirm · toast lỗi dòng |

Normalized header: `tab|kpiBieu|kpiSo|search|resource|importXls|exportXls|formNo`

### Control bind (từ analy)

| Field | controlHint | Slot | AC |
|-------|-------------|------|----|
| tab | Tabs `bieu`\|`so` | leading | default `bieu` · đếm 16/10 |
| search | SearchTextInput | leading | tên / resource · không nút Tìm |
| resource | chip / QS | leading | deep-link `?resource=` giữ key |
| kpiBieu / kpiSo | Badge | A | must **16** / **10** từ catalog |
| formNo | Text | C | renumber Cục (**GAP-CSDL-CUC-02**) · giữ resource |
| importXls | Button+file | trailing | 16 sheet · **GAP-CSDL-XLS-01** SA |
| exportXls | Button | trailing | merge cột Excel — SA/Dev |
| refresh | Button | trailing | reload catalog + KPI |

## 4. Grid AC (list · Kind G)

| ID | AC | Pass |
|----|----|------|
| AC-G-01 | Catalog API trả đúng **16 biểu + 10 sổ**; KPI badge khớp | Design/Dev |
| AC-G-02 | Tab CSDL hiện 16 card; tab Sổ hiện 10 card; filter search client/API | Design/Dev |
| AC-G-03 | Card: `formNo` Cục + title VN + count; click mở typed peer; **không** hiện slug | Design/Dev |
| AC-G-04 | `formNo` đổi (7–10 / sổ 1–2) **không** đổi `resource` key | Dev |
| AC-G-05 | Route `/csdl-cuc-2026` alias hub `/so-ts/csdl-so-sach` (cùng page) | Design/Dev |
| AC-G-06 | Import: chọn file .xls → map 16 sheet→resource → preview → confirm; skip cầu âm Biểu 1; toast lỗi | SA/Dev |
| AC-G-07 | Export đúng resource đang chọn / tab | SA/Dev |
| AC-G-08 | Empty catalog = empty VN · KPI 0 · **cấm** mock | Dev |
| AC-G-09 | Typography label 13 · input D14/M16 (**GAP-TYP-01**) | Design |
| AC-G-10 | Filter bar: Search leading · actions trailing · **cấm** native select | Design |

## 5. Leave / out of scope

| Leave | Note |
|-------|------|
| Typed Slideout 16+10 | **done** — **cấm** re-implement / re-queue |
| Sync batch Sổ TS → biểu | Q-PEER sau P1 |
| hang-muc 40 ô / merge row | **GAP-CSDL-CUC-11** |
| Report pack / mobile / OMS map child | Sổ 10 map = child done |
| Step 4b / migration / e2e | Dev/QA only |
| ERP.* / `api/v1/infra/*` / `api/v1/rmms/*` | HARD |

## 6. API bind (cite · không invent live)

| Op | Path | Note |
|----|------|------|
| Records shell | `GET/POST/PUT/DELETE …/asset/csdl-records?resource=` | live |
| Catalog / KPI | `GET …/asset/…/catalog` (widen 16+10) | **GAP-CUC-API-01** SA |
| Import XLS | POST import multi-sheet | **GAP-CSDL-XLS-01** · đề xuất `…/csdl-records/import` · **cấm** invent như live |
| Export | GET export | GAP SA |
| Lookups | Integration `road-route` · `org-unit` | cite typed child |

## 7. Catalog SSOT (resource — không đổi key)

Biểu 01–16: `pavement-sections` … `interchanges` (xem real-data §A).  
Sổ S1–S10: `inspection-logs` … bình đồ (`csdl-so-10` map child).  
Typed slug deep-link only.

## 8. GAPs → next

| ID | Owner | Note |
|----|-------|------|
| GAP-CSDL-CUC-01/02 | Design/Dev | KPI 16+10 · formNo Cục |
| GAP-CSDL-XLS-01 / CUC-04 | SA/Dev | Import/export 16 sheet |
| GAP-CUC-DM-01 | SA | DOMAIN-MAP slug `csdl-cuc-2026` → Asset |
| GAP-CUC-ROUTE-01 | Design/Dev | alias `/csdl-cuc-2026` |
| GAP-CUC-API-01 | SA | Catalog GET widen + import endpoints |
| GAP-CSDL-CUC-11 | All | **cấm** merge hang-muc / Sổ TS |
| GAP-CUC-TYPED-00 | TL | **cấm** re-queue typed |
| GAP-TYP-01 | Design | typography 13 / D14 / M16 |

## 9. § Screens summary (Design handoff)

1. Hub Kind G — zones A–D + import modal.  
2. Demo chrome: `csdl-so-sach-demo.html` → `asset/csdl-so-sach.html` (UI only · **cấm** demo-json SSOT).  
3. Prototype + reviewUrl bắt buộc trước SA.  
4. **Cấm** re-scan demo HTML ở Design (**GAP-DES-DEMO-RESCAN-01**) — dùng control-hint zones.

## 10. DoR PO

- [x] packKind=list · changeScope=new_page
- [x] Grid AC AC-G-01…10
- [x] Zones A–D + import · Leave
- [x] Cite analy control-hint + real-data §A+§B (hash skip)
- [x] GAPs owner rõ · **cấm** ERP.*
- [x] handoff Design ready · compact `handoff/po-compact.md`

## Version meta

| Field | Value |
|-------|-------|
| skillId | agent-po |
| skillVersion | 2026.08.25.01 |
| schemaVersion | 1 |
| workflowVersion | 2026.09.01.02 |
| generatedAt | 2026-09-06T19:45:00.000Z |
| contentHash | sha256:8DED37798D5ACEDFA3E106C0308B26152C9DEB7D1977DD7EDF5EB87991834BE2 |
| sourceCite | control-hint · real-data · data_analy-compact · CTX `csdl-cuc-2026.md` |
