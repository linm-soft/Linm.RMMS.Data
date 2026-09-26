# PO — requirement — web-rmms-asset-adjust

| Field | Value |
|-------|-------|
| feature | `web-rmms-asset-adjust` |
| title | Bớt hoặc sửa tài sản |
| packKind | `list` · **confirmed** |
| changeScope | `new_page` |
| lane | `web` · MFE Mobile phone |
| status | `done` |
| skillId | `agent-po` |
| skillVersion | `2026.09.05.03` |
| schemaVersion | `1` |
| workflowVersion | `2026.09.19.02` |
| rulesVersion | `2026.09.25.2` |
| versionGate | `ok` |
| contentHash | `sha256:6f74282b807da7f2cc1aa57ac64848cd1d75ff3383c0f432eaad7bea53fff80e` |
| writtenAt | `2026-09-25T16:25:00.000Z` |
| demo | **N/A** · **cấm** re-scan / demo SSOT |
| prior | data_analy `confirmed` · compact + control-hint + real-data §A+§B |
| mfe | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Mobile` |
| mfeStdRoute | `/web-rmms-asset-adjust` |
| mfeStdUrl | `http://localhost:9301/web-rmms-asset-adjust` |
| nativeRouteCite | SCREENS `/asset/adjust` · alias native · **canonical URL = STATUS** |
| be | `D:/AI-QLBD/Linm.RMMS.WebService` · Mobile.Bff `:5202` · `mobile-bff/api/v1` · **cấm ERP.*** · **cấm** web-bff base |
| phoneFrame | `max-width: 430px` · Android icon/layout **1-1** · **cấm** iOS/Android native edit |
| formPattern | Mobile list + confirm dialog · **N/A** ERP Modal/Slideout · **N/A** DES-GRID / LinErpListFilterBar |
| labels | `useFormOptions()` / LinmCopy `assetAdjust.*` · **cấm** hardcode VN trên form |

## 1. Goal

Staff tuần đường / tuần kiểm mở từ Hub `/asset` màn **Bớt hoặc sửa**: sổ tài sản **active** + search; **Bớt** = soft DELETE sau confirm; **Sửa** = nav detail peer list — **không** PUT form P1 trên slug này.

## 2. Personas

| Persona | Zones | Need |
|---------|-------|------|
| NV tuần đường (BDTX) | AA-00…08 | Search · list active · Bớt confirm · Sửa → detail |
| NV tuần kiểm (Khu/VP) | AA-00…08 | Cùng surface · Field door = peer shell/a…e |

Auth: session staff · guest → login peer (shell).

## 3. Screens (AA-*)

| Id | Zone | Behavior / AC |
|----|------|----------------|
| AA-00 | phone frame | ≤430px · center desktop review · Android 1-1 |
| AA-01 | top bar | Back → Hub `web-rmms-asset-hub` `/asset` · copy `assetAdjust.nav.back` |
| AA-02 | title | RO · `assetAdjust.title` |
| AA-03 | search | Text/Search · query `search` · debounce/reload GET · `assetAdjust.search` |
| AA-04 | list | Active only · `page`/`pageSize` · row Code/Type/Route · **cấm** Lat/Lng P1 |
| AA-05 | empty/error | empty copy · toast retry · **cấm** `window.alert` |
| AA-06 | action.remove | Button · mở AA-08 · `assetAdjust.action.remove` |
| AA-07 | action.edit | Button/Nav → peer `web-rmms-asset-list` detail `/asset/:id` · **cấm** PUT form P1 |
| AA-08 | confirmDelete | Dialog confirm soft-delete · **cấm** silent delete |

## 4. List AC (packKind=list) — Grid desktop N/A

| AC-id | Rule | Pass |
|-------|------|------|
| L-01 | Single search box AA-03 · **cấm** LinErpListFilterBar / DES-GRID multi-field | Phone list |
| L-02 | `GET mobile-bff/api/v1/asset/road-assets?search&page&pageSize` · filter **active** | Live bind |
| L-03 | Row fields: Code · Type · Route only (P1) | No Lat/Lng |
| L-04 | Empty → `assetAdjust.empty` · Error → toast + retry reload | No alert |
| L-05 | Pager `page`/`pageSize` on AA-04 | Server page |
| L-06 | **Bớt** → AA-08 confirm → `DELETE …/road-assets/{id}` soft → reload list + toast success | Soft only |
| L-07 | **Sửa** → nav peer detail · **không** invent PUT trên adjust P1 | Peer list |
| L-08 | Labels via copy keys / `useFormOptions` | No hardcode VN |
| L-09 | ONLY Mobile.Bff `:5202` · `VITE_MOBILE_API_URL` | No web-bff base |
| L-10 | Phone ≤430 · **cấm** nhét desktop Asset/Gis/Camera MFE | Mobile MFE only |

**DES-GRID / LinErpListFilterBar:** **N/A** — phone list.

## 5. Soft-delete UX (PO chốt — UNCLEAR-SOFT-DELETE-UX)

| Key | Intent (Design chốt wording) |
|-----|------------------------------|
| `assetAdjust.confirm.delete` | Hỏi xác nhận soft-remove tài sản đã chọn |
| `assetAdjust.confirm.cancel` | Đóng dialog · **không** gọi DELETE |
| `assetAdjust.confirm.ok` | Confirm → DELETE soft |
| `assetAdjust.toast.deleteOk` | Sau DELETE 2xx · toast thành công · reload list |
| `assetAdjust.toast.deleteFail` | DELETE lỗi · toast fail · **giữ** row · retry được |

**HARD:** confirm bắt buộc · **cấm** silent delete · soft only · **cấm** invent hard-delete path.

## 6. PO decisions (resolve prior UNCLEAR)

| id | Decision | Owner next |
|----|----------|------------|
| UNCLEAR-STD-ROUTE | Canonical route/URL = STATUS `mfeStdRoute` `/web-rmms-asset-adjust` · SCREENS `/asset/adjust` = native cite/alias | Design/Dev alias |
| UNCLEAR-EDIT-SURFACE | **Sửa** = nav peer `web-rmms-asset-list` detail · **no PUT** trên adjust P1 | Design/Dev |
| UNCLEAR-SOFT-DELETE-UX | Confirm dialog + toast keys §5 · reload after ok | Design copy |
| UNCLEAR-DOMAIN-MAP-ADJUST | **open** — SA add DOMAIN-MAP row slug · domain Asset · cite list peer | **SA** |

## 7. Leave / Out of scope (HARD)

- `/me*` · me-profile · me-settings · feedback · cam-view
- PUT edit form trên slug · invent `AdjustController` / `api/v1/asset-adjust`
- GPS capture · hiện Lat/Lng row P1 · fake geo
- collect / AI / HITL · GIS deep · Field 2 cửa · journal / kết ca / tồn tại / tần suất (`web-rmms-mobile-a`…`e` / shell)
- DES-GRID desktop · ERP Modal/Slideout · ERP.* / Domains/Master
- Web BFF as client base · Route mobile-bff trên web-bff controllers
- Sửa iOS/Android native · gộp sibling vào slug
- yarn e2e / start:std ở role PO

## 8. API bind (cite real-data)

| Action | API |
|--------|-----|
| List | `GET asset/road-assets?search&page&pageSize` · active |
| Soft delete | `DELETE asset/road-assets/{id}` |
| Edit | nav peer · GET detail trên list feature |
| BFF | `http://localhost:5202` · `mobile-bff/api/v1` |

## 9. DoD — PO → Design

- [x] packKind=`list` confirmed · changeScope=`new_page`
- [x] Screens AA-00…08 + List AC L-01…L-10
- [x] Soft-delete UX keys chốt · Edit→peer · STD route = STATUS
- [x] Leave §7 · no me · no PUT · no GPS · no invent path
- [x] Mobile.Bff only · labels copy keys
- [x] compact `handoff/po-compact.md` · handoff Design
- [ ] Design: prototype + reviewUrl · Android 1-1 zones
- [ ] SA: DOMAIN-MAP row `web-rmms-asset-adjust`

## 10. Handoff Design

| Need | |
|------|--|
| Zones | AA-00…08 phone 430 |
| Controls | search · ListRow · Bớt · Sửa · confirm dialog |
| Copy | `assetAdjust.*` keys §3+§5 |
| reviewUrl | required |
| Out | DES-GRID · me · Lat/Lng · PUT form |

## Version meta

`skillVersion=2026.09.05.03` · `schemaVersion=1` · `contentHash=sha256:6f74282b807da7f2cc1aa57ac64848cd1d75ff3383c0f432eaad7bea53fff80e` · `rulesVersion=2026.09.25.2` · `writtenAt=2026-09-25T16:25:00.000Z`
