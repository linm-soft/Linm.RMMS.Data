# HARNESS — its-traffic-detect

R0 review sample · skill `/gen-feature-harness` · **không** embedding.  
SSOT machine: [`HARNESS.json`](./HARNESS.json)

| Field | Value |
|-------|-------|
| alias | `its-traffic-detect` |
| title | ITS phát hiện biển báo / cọc tiêu |
| lane | **web** (native = missing) |
| formType / domain | `ai` / **AiVision** |
| pipeline | STATUS `done` · Review closed |

## L1–L6

| Layer | Exist | Path |
|-------|-------|------|
| L1 Context | yes | `Linm.RMMS.Data/docs/context/features/its-traffic-detect.md` |
| L2 Demo | yes | `Linm.RMMS.Demo/src/demo/ai-vision/its-traffic-detect.html` |
| L3 Specs | yes | `specs/its-traffic-detect/` · hint `_data-analy/...-control-hint.md` · prototype `ui/prototype/its-traffic-detect-list-prototype.html` |
| L3 real-data | **no** | `*-real-data.md` missing |
| L4 App | yes | MFE `Linm.Web.RMMS.AiVision` · `ItsTrafficDetectListPage` · routes `/its-traffic-detect` + alias |
| L4 native | **no** | iOS/Android not in STATUS |
| L5 State | yes | `STATUS.md` · demo store `src/demo/itsTrafficDetectStore.ts` |
| L6 API | yes | `api/v1/ai-vision/its/objects` + `…/detect` |

## URLs (from STATUS — not invented)

- mfeStdUrl: `http://localhost:9303/its-traffic-detect`
- reviewUrl: prototype HTML (file:// in STATUS)
- peer: `http://localhost:9303/ai-vision/ai-asset-detect`

## Integrate (FE → API)

| UI | Method | api/v1 |
|----|--------|--------|
| getList / getInitData / CRUD / nearby / confirm / dismiss | GET/POST/PUT/DELETE | `ai-vision/its/objects` (+ `{id}` / `nearby` / `confirm` / `dismiss`) |
| detectTraffic | POST | `ai-vision/its/detect` |
| searchAssetTypes | GET | `integration/asset-types/search` |
| searchRoadRoutes | GET | `integration/road-routes/search` |
| listRoadAssets | GET | `asset/road-assets` |
| cameras + snapshot | GET / POST | `cameras` · `cameras/{id}/snapshot` |
| upload init/complete | POST | `ai-vision/uploads/init` · `complete` |

## RAG R0

Catalog pointer: `{AutoCode}/workspaces/qlbd/rag/catalog.json`  
**DEFER R1+:** embeddings, retrieve into worker, Status chips.

## GAP

- **GAP-HARNESS-02** (soft): missing `its-traffic-detect-real-data.md` (control-hint exists).
