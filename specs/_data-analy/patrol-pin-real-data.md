# Real-data bind — patrol-pin

Skill: `example/real-data-bind.md` · **GAP-MOB-REAL-01**

## §A Source

CTX `patrol-pin.md` · BFF table `patrol-pin-bff-endpoints.md` · demo `pinHereCheckin()` · `DES-MOB-CI-PIN-HERE` · `DES-MOB-GPS-DENY`.

## §B Path = BFF table

| UI zone | Bind | Path |
|---------|------|------|
| CTA label | static | — **Ghim vị trí hiện tại** |
| Toast route | `Route` active session else demo `QL.1 · Km 1561+134` | `GET patrol/sessions` |
| Toast accuracy | `LocationFix.accuracyM` (round) | Device GPS |
| Map pin (reuse) | `LocationFix` lat/lng | Device · **cấm** fake |
| Check-in form | — | **không** trên pack này |

§B path **khớp** BFF table — **không** invent `patrol-pin`.

## §C Map DTO → UI

| dtoField | UI |
|----------|-----|
| `Route` | toast lý trình segment |
| `Status` / `Code` | filter active only · không hiện trên toast P1 |

## §D Map overlay

N/A riêng pack — reuse `patrol-map` pin `.here` khi đứng map.

## §E Progress

GET fail/empty → demo route **QL.1 · Km 1561+134** · GPS vẫn chạy. Deny → modal. Timeout → toast timeout.

## §F Cấm

Watermark · fake lat/lng · POST check-in trên pack này · system alert · WebView.

## Version meta

contentHash `sha256:patrol-pin-real-data-20260821`
