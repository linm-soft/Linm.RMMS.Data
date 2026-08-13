# Vẽ tài sản live (Leaflet) — Feature Context

> **Slug:** `gis-draw-live` · **Module:** `Gis` + `Asset` · **Phase:** P1  
> **Status:** P1 implement (`task_6e79dde5`)  
> **HĐ PL01:** mã **02** · demo slug `gis-draw-live` (cùng phân hệ GIS 2D với `gis` · `gis-draw-google`)  
> **Feature Kind:** F/custom map · sibling [`gis-draw-google.md`](gis-draw-google.md)  
> **Demo HTML (SSOT):** `Linm.RMMS.Demo/src/demo/gis/gis-draw-live.html`  
> **Prototype ref:** `Linm.RMMS.Demo/src/demo/p/gis-draw-live.html`  
> **MFE:** `Linm.Web.RMMS.Gis` · page `GisDrawLivePage` · route **`/gis/draw`**  
> **`yarn start:std`:** `http://localhost:9302/gis/draw`  
> **BE:** `api/v1/gis` · `basemap-config?purpose=live` · `layers?purpose=live` · drawings GeoJSON · BFF `http://localhost:5201/web-bff/api/v1`  
> **Parent:** [`gis.md`](gis.md) · full shell Google-proxy: [`gis-draw-google.md`](gis-draw-google.md)

## 1. Tổng quan

| | |
|--|--|
| Mục tiêu | Bản đồ **live rút gọn** — vẽ Point/Line/Polygon trên Leaflet · dữ liệu thật QL.1 · lưu draft geometry |
| Persona | Cán bộ GIS · tuần đường |
| Khác `gis-draw-google` | Live = shell nhẹ / nhanh thử vẽ; Google = full shell parity GOVOne |
| DoD P1 | Basemap OSM/Esri · draw tools · properties tối thiểu · POST drawing · OMS R1–R11 |

**UI pattern:** Full page map (Kind F). Gate demo map: `/agent-dev-oms-map`.

## 2. Design / UI

| Zone | Nội dung |
|------|----------|
| Header | Tiêu đề · link GIS hub · tag live |
| Sidebar | Lớp nền · tree lớp tài sản (checkbox) |
| Toolbar | Select · Pan · Point · Line · Polygon · Save |
| Map | Leaflet full-page · OSRM optional |
| Props | Mã · tên · loại · lưu draft |

## 3. API

Cùng contract [`gis-draw-google.md`](gis-draw-google.md) §3 — `GET/POST /api/v1/gis/drawings*`.

Live-specific:

| Method | Path | Note |
|--------|------|------|
| GET | `/api/v1/gis/basemap-config?purpose=live` | default OSM + Esri Streets + sat |
| GET | `/api/v1/gis/layers?purpose=live` | alias `purpose=draw` |

## 4. Links

| Loại | Path |
|------|------|
| Context | `docs/context/features/gis-draw-live.md` |
| Demo | `Linm.RMMS.Demo/src/demo/gis/gis-draw-live.html` |
| MFE std | `http://localhost:9302/dev` · route `/gis/draw` |
| BE | `Linm.RMMS.WebService` · domain Gis |
| HĐ | PL01 mã 02 · `Linm.RMMS.Contract/docs/rmms/hop-dong/` |

## 5. Scan / formType

`formType=map` · `domain=gis` · `mfeRel=Linm.Web.RMMS.Gis` · packKind=`map`.
