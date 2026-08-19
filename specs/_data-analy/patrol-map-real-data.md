# Real-data bind — patrol-map

Skill: `example/real-data-bind.md` · **GAP-MOB-REAL-01**

## §A Source

CTX `patrol-map.md` · `patrol.md` · BFF table `patrol-map-bff-endpoints.md` · demo `#sc-patrol-map` · `map-oms.js` `PATROL_WAYPOINTS` / `CHECKINS`.

## §B Path = BFF table

| UI zone | Bind | Path |
|---------|------|------|
| Nav title | static | — **Ca đang chạy** |
| Next title | `Route` active session else demo | `GET patrol/sessions` |
| Overlay polyline / pins | demo OMS coords | **không** tracks API P1 |
| Check-in / pin | toast nhãn | **không** POST P1 |

§B path **khớp** BFF table — **không** invent `patrol-map`.

## §C Map DTO → UI

| dtoField | UI |
|----------|-----|
| `Route` | next card title fallback · session label |
| `Code` / `Status` | not on map chrome P1 (hub owns list) |
| `CheckInCount` | isolate «Đã ghi» count vs demo 2 done pins |

## §D Map overlay (OMS)

| Layer | Demo coords | Isolate id |
|-------|-------------|------------|
| Track | `[11.603,109.016]` … `[11.456,108.993]` | `track` |
| CI done | ci1 · ci2 | `ci-done` |
| CI next | ci4 Km 1561+134 Phước Dinh | `ci-next` |

## §E Progress

Empty/fail GET → demo next title **Km 1561+134 · Phước Dinh** · map **vẫn mở**.

## §F Cấm

Watermark · fake lat/lng input · WebView Leaflet HTML-as-app · POST check-in trên pack này.

## Version meta

contentHash `sha256:patrol-map-real-data-20260820`
