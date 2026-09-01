# Context — incident-list (mobile · Vấn đề)

| Field | Value |
|-------|-------|
| feature | `incident-list` |
| title | [Mobile] Vấn đề |
| des | `DES-MOB-INC-LIST` |
| demo | `#sc-incident-list` · `specs/mobile-p1/ui/prototype/{ios,android}/index.html` |
| packKind | `list` |
| parent | `home` tile **Vấn đề** · shell tab `incident` |
| domain | Incident · `IncidentDto` / `rmms_incidents` — CTX web `incident.md` |
| BE | `Linm.RMMS.WebService` · DOMAIN-MAP Incident — **cấm ERP.*** |
| BFF | `Linm.RMMS.Mobile.Bff` · `mobile-bff/api/v1/incident/incidents` |
| peers | `incident.md` · `incident-create.md` · `mnt-list.md` · `home.md` · `gis.md` |

## 1. Tổng quan

| | |
|--|--|
| Mục tiêu | Màn list **Quản lý vấn đề**: tìm · segment list/map · banner nhận diện · rich cards · FAB ghi sự cố |
| Persona | Tuần đường · tuần kiểm · hiện trường |
| Entry | Home tile «Vấn đề» · shell tab `incident` |
| DoD P1 | Dual `#sc-incident-list` · GET list via BFF · demo fallback · nav siblings · **cấm** mfeStdUrl · **cấm** invent `incident-list` path |

## 2. Design / UI

| Zone | Pattern | DES-ID | Notes |
|------|---------|--------|-------|
| Screen | Full list | `DES-MOB-INC-LIST` | Title «Quản lý vấn đề» · back Home · Lọc toast P1 |
| Segment | Danh sách / Bản đồ | — | Bản đồ → `gis-map` |
| Search | SearchField | — | «Tìm kiếm vấn đề…» |
| Banner | CTA camera | — | «Nhận diện mặt đường» → `vis-capture` |
| Cards | Rich card | — | title · type+code · loc · person · time · status · actions |
| FAB | Plus | — | `startIncidentPick()` → `incident-create` |

**Không** gộp: `#sc-inc-form` · `#sc-incident-detail` · `#sheet-incident` · web Kind F full.

## 3. API (mobile BFF — cấm invent path `incident-list`)

| Method | `{BffPrefix}` path | Downstream | Status |
|--------|-------------------|------------|--------|
| GET | `incident/incidents` | `IncidentsController.GetList` | **Live** — list + search/status/severity/page |
| GET | `incident/incidents/{id}` | `GetById` | **Live** — sibling detail |
| POST/PUT/DELETE / assign / close | `incident/incidents*` | same | **OUT** slug list — create=`incident-create` · detail siblings |

App base: `{BffBase}/mobile-bff/api/v1`. **Cấm** app `:5101` · invent `api/v1/incident-list`.

## 4. Sibling (không gộp slug)

| Slug | Quan hệ |
|------|---------|
| `home` | Entry / back |
| `incident-create` | FAB Ghi sự cố · reuse owner |
| `incident-detail` | Card / Chi tiết · enqueue |
| `vis-capture` | Banner nhận diện · enqueue |
| `gis-map` | Segment / pin map · shared_action |
| `mnt-list` | Giao việc · reuse |
| `incident-chat` | Trao đổi toast · enqueue |
| `#sheet-incident` | OUT |

## 5. Demo SSOT

| Field | Card 1 | Card 2 |
|-------|--------|--------|
| Title | Nứt mặt đường | Cống tắc |
| Type · Code | Sự cố nhanh · SC-2401 | Hệ thống an toàn · SC-2398 |
| Loc | QL.1 Km 1556+080 · Xuân Hải | HCM · Km 12+400 |
| Person | Nguyễn Văn A · Tổ tuần đường VP-IV.1 | Trần Khánh · Chi cục II.2 |
| Time | 2026-08-10 08:12:40 | 2026-08-09 14:40:13 |
| Status | Đợi phân công giám sát (warn) | Đang được giám sát (ok) |

## Implement tracking

| lane | phase | status | updatedAt |
|------|-------|--------|-----------|
| web | — | — | — |
| mobile | `done` | `done` | `2026-09-01T04:27:38.946Z` |
