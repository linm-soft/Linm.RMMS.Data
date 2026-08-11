# PO — citizen (Cổng người dân)

| Field | Value |
|-------|-------|
| feature | `citizen` |
| changeScope | `edit_page` |
| packKind | `list` |
| Feature Kind | **B** — Catalog list + Slideout form (pack list); demo giữ Kind G+D(+F) public portal |
| status | `confirmed` (autopilot · task_ae6e4e92) |
| updatedAt | 2026-08-09T14:40:00.000Z |

## 1. Goal

Chỉnh **Cổng người dân** từ demo mock → list catalog parity (Linm erp-form-context Kind B): shell · toolbar · search work · row menu · View readonly · Create/Edit/Copy form. Align demo → MFE `Linm.Web.RMMS.Integration` · BE `Linm.RMMS.WebService` domain **Integration**.

≠ Mobile **Góp ý** (`feedback`) — badge/copy luôn phân biệt.

## 2. Current → New (edit_page)

| Layer | Current | New (delta) |
|-------|---------|-------------|
| Demo | Kind G host + Kind D slideout + map · localStorage | Giữ SSOT UX demo; pack ưu tiên **list + form** inbox sự cố công dân |
| MFE | Không có route citizen | `LinPageLayout kind=catalog` · `/integration/citizen` · pagination · row menu |
| MFE form | — | Create / Edit / View / Copy — báo sự cố (PII · loại · vị trí · media meta) |
| API client | — | `/integration/citizen-incidents` + public track/create |
| BE | MISSING | Greenfield `api/v1/integration/citizen-incidents` + `api/v1/public/incidents` + BFF (**cấm** ERP.* · `/rmms/`) |

## 3. Personas / DoD

- Persona: Điều phối Integration · Hạt trưởng (inbox) · Công dân (public track/create)
- DoD:
  1. List load + **search work** (mã/họ tên/SĐT/loại/tuyến/status)
  2. Toolbar: Tạo mới · Làm mới · filter status
  3. Row menu: Xem · Sửa · Sao chép
  4. View = `readOnly` (không disabled xám)
  5. Create/Edit/Copy form validate + save · IdCode `CIT-YYYYMMDD-NNNN`
  6. FE `yarn build` + `typecheck` PASS
  7. BE build PASS · domain Integration only

## 4. CTX / DEM inventory

| Source | Path | Notes |
|--------|------|-------|
| CTX-CIT | `docs/context/features/citizen.md` | API · entities · Kind G+D demo · list pack Kind B |
| DEM-CIT | `Demo/.../citizen-demo.html` → `integration/citizen.html` | Fields · actions · **không** clone chrome |
| DI-CIT | — | Import Excel **out of pack** |

### List columns (required)

STT · Mã theo dõi · Họ tên · SĐT · Loại · Tuyến · Thời gian · Trạng thái · Nguồn · GPS · actions

### Form fields (required *)

trackingCode (readonly IdCode) · reporterName* · phone* · email · incidentType* · description* · address · lat* · lng* · road · chainage · status* · source (readonly=`citizen`) · reportedAt* · mediaMeta

### Status values

draft · sent · received · processing · done

### controlHint (synthetic · no Excel cluster)

| Field | controlHint | Notes |
|-------|-------------|-------|
| reporterName | Text | PII |
| phone | Text | tel |
| email | Text | email |
| incidentType | Dropdown | 6 loại sự cố |
| description | Text | textarea |
| status | Dropdown | 5 values |
| lat/lng | Text | number |
| road | Text | |
| chainage | Text | |
| address | Text | |
| mediaMeta | Text | filenames mock P1 |

## 5. Grid AC (REQUIRED · list)

| ID | AC |
|----|-----|
| AC-G-01 | Zones **A Header · B Toolbar · C Grid · D Pagination** |
| AC-G-02 | Search + status filter apply → page=1 · server/local page |
| AC-G-03 | Row menu View/Edit/Copy |
| AC-G-04 | `LinCatalogDataGrid` + column resize default ON |
| AC-G-05 | Footer `LinCatalogListPagination` pageSize 50/100/200/500 |
| AC-G-06 | 1× `LinPageLayout` — **cấm** nested CatalogListShell |

## 6. Out of scope (this pack)

- Full Kind G public host + Leaflet Kind F map shell — keep demo; MFE map optional later
- Real media upload / presign — mediaMeta string stub
- OTP / SMS notify — DEFER
- PII field-level encryption at rest — DEFER (store scalar; document)
- Incident adapter source=`citizen` (GAP-F-CIT-01) — OUT P1 stub

## 7. Handoff → Design

- Kind B catalog list + form Slideout
- Prototype + reviewUrl bắt buộc trước design_confirm
- Demo path visual SSOT: `citizen-demo.html` → `integration/citizen.html`
- BE domain **Integration** · route `api/v1/integration/citizen-incidents`

## Version meta (REQUIRED)

| Field | Value |
|-------|-------|
| skillId | agent-po |
| skillVersion | 2026.08.08.30 |
| schemaVersion | 1 |
| workflowVersion | 2026.08.08.31 |
| rulesVersion | 2026.08.08.31 |
| generatedAt | 2026-08-09T14:40:00.000Z |
| versionGate | rechecked |
