# HARNESS — asset

R0 · `/gen-feature-harness asset` · **không** embedding.  
SSOT: [`HARNESS.json`](./HARNESS.json)

| Field | Value |
|-------|-------|
| alias | `asset` |
| title | Quản lý tài sản đường bộ |
| lane | **web** |
| formType / domain | `list` / **Asset** |
| STATUS header | `phase=done` · `status=done` |
| closeout | Review `task_67ce475b` edit_page **done** |

## L1–L6

| Layer | Exist | Path |
|-------|-------|------|
| L1 Context | yes | `docs/context/features/asset.md` |
| L2 Demo | yes | `Demo/.../features/asset-demo.html` |
| L3 Specs | yes | `specs/asset/` · hint + cluster · prototype `asset-list-prototype.html` |
| L3 real-data | yes | `specs/_data-analy/features/asset-real-data.md` |
| L4 App | yes | `Linm.Web.RMMS.Asset` · `AssetListPage` + `AssetFormPage` (full-page) |
| L4 native | **no** | — |
| L5 State | yes | `STATUS.md` · `src/demo/roadAssetStore.ts` |
| L6 API | yes | `api/v1/so-ts/road-assets` |

## URLs (STATUS)

- mfeStdUrl: `http://localhost:9301/so-ts`
- reviewUrl: prototype file:// (STATUS)

## Integrate (FE → API)

| UI | Method | api/v1 |
|----|--------|--------|
| CRUD + list + init-data | GET/POST/PUT/DELETE | `asset/road-assets` (+ `{id}` / `init-data`) |
| TYPE_LOOKUP | GET | `integration/asset-types/search` |
| ROUTE_LOOKUP | GET | `integration/road-routes/search` |
| ORG_LOOKUP | GET | `integration/org-units/tree` |
| catalog UI schema | GET/PUT | `integration/catalogs/{kind}/ui-schema` |

**Out of this harness:** MFE siblings `/so-ts/pl-mat-duong`, `/so-ts/csdl-so-sach` (aliases riêng).

## GAP

- **GAP-HARNESS-02** — **CLOSED** `task_67ce475b`

## RAG R0

Catalog: `{AutoCode}/workspaces/qlbd/rag/catalog.json` · DEFER R1+ embeddings.
