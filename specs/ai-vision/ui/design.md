# Design — ai-vision (AI kiểm định mặt đường)

| Field | Value |
|-------|-------|
| feature | `ai-vision` |
| Feature Kind | **B** — Catalog list + form |
| status | `confirmed` (autopilot · design_confirm=approve) |
| updatedAt | 2026-08-08T08:42:00.000Z |

## Prototype + reviewUrl (REQUIRED)

| Artifact | Path |
|----------|------|
| Prototype HTML | [`ui/prototype/ai-vision-list-prototype.html`](./prototype/ai-vision-list-prototype.html) |
| **reviewUrl** | `file:///D:/AI-QLBD/Linm.RMMS.Data/specs/ai-vision/ui/prototype/ai-vision-list-prototype.html` |
| Demo SSOT | `D:/AI-QLBD/Linm.RMMS.Demo/src/demo/features/ai-vision-demo.html` → `../ai-vision/ai-vision.html` |

> Autopilot: user/reviewUrl gate satisfied by shipping openable prototype; `design_confirm=approve`.

## 1. Shell (Kind B · erp-form-context)

- Root: `data-catalog-list-page`
- `LinPageLayout kind="catalog"`
  - header title: **AI kiểm định mặt đường**
  - badges: `P1 online` · `AI support` (không hứa mAP)
  - `catalogToolbar`: Tạo mới · Làm mới
  - filters: search + defectClass + severity + status + engine
  - `listTitle`: Danh sách phát hiện
  - `listRowMenuHelp={true}`
  - `useCatalogTableBusy` · skeleton
  - `footerPagination`

## 2. List columns

| Col | Field | Notes |
|-----|-------|-------|
| STT | — | index |
| Mã | code | click → View |
| Class | defectClass | filter |
| Score | score | 0–1 |
| Severity | severity | Critical/High/Medium/Low |
| Section | sectionId | |
| Route | routeLabel | |
| Status | status | Draft / IncidentCreated / Dismissed |
| Engine | engine | P1 / P2 badge |
| Incident | incidentCode | VI-* or — |
| ⋯ | row menu | Xem / Sửa / Sao chép / Tạo Vấn đề (Critical+Draft) |

## 3. Search (Step 2h-search)

- Query: normalize trim · case-insensitive · strip accents
- Match: code · defectClass · severity · status · engine · sectionId · routeLabel · incidentCode · note
- Apply on Search / Enter · reset page=1
- Filters AND with search

## 4. Form modes

| Mode | Route | Fields |
|------|-------|--------|
| create | `/ai-vision/new` | code auto · editable required |
| view | `/ai-vision/:id` | **readOnly** active |
| edit | `/ai-vision/:id?mode=edit` | editable (Draft) |
| copy | `/ai-vision/new?copyFrom=:id` | prefill · new code · clear incident |

### Fields

code (readonly) · defectClass* · score* · severity* · status* · engine* · sectionId* · routeLabel · lat · lng · pciSnapshot · modelVersion · bbox · note · incidentCode

## 5. Visual notes

- RMMS teal/navy tokens; AI accent purple only for engine badge (demo parity).
- Critical severity: red chip; P2 badge distinct from P1.
- List primary; map OUT this pack.

## 6. Handoff → SA

- API shape must match form/list fields above
- Prefer `api/v1/ai-vision/detections` + BFF `web-bff/api/v1/ai-vision`
- Soft delete · tenant `companyCode`
- Search `?search=` + filters + page/pageSize
- Optional stub: `POST /api/v1/ai-vision/detect` · `GET .../pci-history/{sectionId}`
