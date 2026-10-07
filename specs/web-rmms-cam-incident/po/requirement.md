# PO — requirement — web-rmms-cam-incident

| Field | Value |
|-------|-------|
| feature | `web-rmms-cam-incident` |
| title | Camera sự cố theo vai |
| packKind | `list` · **confirm** |
| changeScope | `edit_page` · **cấm** `new_page` · **cấm** route mới |
| lane | `web` · MFE Mobile phone 430px |
| status | `done` |
| skillId | `agent-po` |
| skillVersion | `2026.09.05.03` |
| schemaVersion | `1` |
| workflowVersion | `2026.09.19.02` |
| rulesVersion | `2026.09.27.1` |
| versionGate | `ok` |
| contentHash | `sha256:e515f74ca821b652154473ac30eaec7bb13c8921acf6725b739dc4eb1744b8d1` |
| writtenAt | `2026-10-01T01:41:00.000Z` |
| taskId | `task_70ba48cb` |
| demo | **N/A** · **cấm** demo HTML SSOT / re-scan |
| prior | data_analy **confirmed** · compact `handoff/data_analy-compact.md` |
| deltaCite | `docs/plan/web-rmms-mobile/PLAN-3-VAI.md` § List enqueue #4 |
| mfe | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Mobile` |
| be | `D:/AI-QLBD/Linm.RMMS.WebService` · Incident · **cấm ERP.*** |
| bff | `Linm.RMMS.Mobile.Bff` `:5202` · `mobile-bff/api/v1` · **cấm** web-bff |
| productRoute | `/van-de` · `/van-de/moi` · `/van-de/:id` |
| mfeStdUrl | `http://localhost:9301/web-rmms-cam-incident` (alias only · **cấm** invent product slug) |
| phoneFrame | `max-width: 430px` |
| DES-GRID / LinErpListFilterBar | **N/A** — phone Field (không desktop list) |
| autoApprove | ON → Design gate confirm |

## 1. Goal

Edit form sự cố đã ship (peer `web-rmms-incident`): **tuần đường** tạo sự cố + ảnh GPS; **QL_HAT** xem mọi sự cố + nút **Giao việc xử lý**; **TK/NT** chỉ xem, không giao / không tạo. Giữ Live incidents APIs · layout L/N/D/sheet · Pattern B GPS · **không** form giao đầy đủ (peer `web-rmms-giao-viec-ql-hat`).

## 2. Screens

| Id | Route | Surface | AC focus |
|----|-------|---------|----------|
| INC-CAP | sheet `/van-de/moi` | `IncidentCaptureSheet` · RouteCapture · Hủy/Lưu | write tuần đường · Pattern B · leave dirty |
| INC-N | `/van-de/moi` | `IncidentCreatePage` · form + POST | role tuần đường · Pattern B · lock `creating` |
| INC-D | `/van-de/:id` | `IncidentDetailPage` · RO + CTA | **Giao việc xử lý** QL_HAT · close peer policy |
| INC-L | `/van-de` | `IncidentListPage` · cards + FAB | scope by role · FAB tuần đường · assign CTA QL_HAT |

**Out screens:** invent `/web-rmms-cam-incident` product route · Excel toolbar · form giao fields (peer) · ERP Modal/Slideout.

## 3. Role matrix (HARD)

| Vai | INC-CAP/N write | INC-L | INC-D | Giao việc |
|-----|-----------------|-------|-------|-----------|
| Tuần đường | POST + capture | list **mình** · FAB | xem · close peer | **no** |
| `QL_HAT` (`HAT-TRUONG`+`HAT-PHO`) | **no** | **mọi** sự cố · no FAB | xem + **Giao việc xử lý** · **ẩn close** | **yes** → `paths.workFor` |
| Tuần kiểm | **no** | xem RO | xem · **no** giao · **no** close | **no** |
| Nghiệm thu | **no** | xem RO | xem · **no** giao · **no** close | **no** |

- `QL_HAT` **chỉ** HAT-TRUONG / HAT-PHO · **cấm** suy từ `MANAGER-RMMS`.
- Caps cite `web-rmms-role-gate` (`packageCode` / `roleCaps`) — UNCLEAR-INC-ROLE-SOURCE → Dev deps.
- **PO chốt CLOSE-VS-ASSIGN:** QL_HAT **ẩn** Đóng sự cố (PLAN: không Đóng hộ); tuần đường / reporter giữ close peer.

## 4. Field / control AC (from inventory)

| uiField | screen | controlHint | AC |
|---------|--------|-------------|-----|
| screenTitle | INC-N/D/L | Text | create «Ghi sự cố» / detail «Chi tiết sự cố» / list «Vấn đề» · `useFormOptions('web-rmms-incident')` |
| bannerErrors | INC-N/CAP | Banner | asset · session · GPS · Pattern B · role deny |
| assetType | INC-N | Select/Pick | Live `integration/asset-types` |
| sessionStamp | INC-N | Text RO | Live `patrol/sessions` |
| title | INC-N | TextInput | required · POST `Title` |
| incidentType | INC-N | Select | LOOKUP_STATIC · `IncidentType` |
| severity | INC-N/D | Select/Badge | severities lookup |
| routeName / km | INC-N/D | Text RO / stamp | session + capture |
| description | INC-N | TextArea | optional + pin sidecar |
| photos / capture | INC-CAP/N | RouteCaptureControl | tuần đường write · detail `mode=view` mọi vai |
| saveCapture | INC-CAP | Button | Hủy / Lưu · busy lock · Pattern B |
| createSubmit | INC-N | Button primary | chỉ tuần đường · `disabled={creating}` only · Pattern B |
| listFilters | INC-L | Search+Select | search · status · severity (phone Field) |
| incidentCards | INC-L | List | GET incidents · scope by role · open → INC-D |
| fabCreate | INC-L | FAB | chỉ tuần đường · **ẩn** QL_HAT/TK/NT |
| assignCtaList | INC-L | Button/Icon | **Giao việc** chỉ QL_HAT · `paths.workFor` |
| detailFields | INC-D | Text RO | type · route · km · severity · gps · reporter · time · desc |
| detailPhotos | INC-D | RouteCapture view | `mode=view` |
| peerChat / peerEst | INC-D | Button | nav peer · giữ |
| assignCtaDetail | INC-D | Button primary | **Giao việc xử lý** · **chỉ** QL_HAT |
| closeNote / closeBtn | INC-D | TextArea+Button | tuần đường/reporter · **ẩn** QL_HAT/TK/NT |
| roleGateBanner | INC-* | Banner optional | view-only / no-assign / no-create hint |
| roleCaps | all | Hidden | gate UI từ profile |

## 5. GPS — Pattern B (HARD)

1. Create/Lưu **không** pre-disable vì thiếu GPS.
2. Deny/pending → banner khi bấm Create/Lưu · **cấm** fake lat/lng.
3. INC-D / INC-L xem: không bắt GPS mới.
4. `HasGps` + pins theo peer Live DTO.

## 6. Leave (HARD)

| Surface | Rule |
|---------|------|
| INC-CAP / INC-N | dirty → leaveConfirm (back / Hủy / navigate away) |
| INC-D / INC-L | RO · không leaveConfirm trừ dirty close note (peer) |

## 7. List AC (packKind=list · phone)

| AC | Rule |
|----|------|
| DES-GRID-* / LinErpListFilterBar | **N/A** — phone Field |
| Excel / toolbar export | **N/A** · **cấm** |
| Empty | «Chưa có sự cố» |
| Scope | tuần đường = own · QL_HAT = all · TK/NT = RO list |
| Pagination / load | giữ peer list behavior |
| Card tap | → INC-D `/van-de/:id` |

## 8. API bind (cite Live — SA confirm DTO/filter)

| Method | Path | AC |
|--------|------|-----|
| GET | `incident/incidents` | INC-L · scope by role · SA confirm reporter filter vs client |
| POST | `incident/incidents` | INC-N · tuần đường only · BE/FE enforce |
| GET | `incident/incidents/{id}` | INC-D |
| POST | `…/{id}/close` | peer · role policy PO §3 |
| GET | `patrol/sessions` | create stamp |
| GET | `integration/asset-types` | pick |
| files / ai-vision | via RouteCapture | cite |
| Maintenance WO | `paths.workFor` | peer giao · **không** invent trên slug này |

App base: `{BffBase}/mobile-bff/api/v1`. **Cấm** invent `cam-incident/*` · **cấm** web-bff · **cấm** ERP.*.

## 9. Non-goals (HARD OUT)

- `new_page` / route mới / invent product slug từ mfeStdUrl alias
- Giao việc ngoài `QL_HAT` · suy `MANAGER-RMMS` → QL_HAT
- Form giao đầy đủ (người nhận · hạn TT41) — peer `web-rmms-giao-viec-ql-hat`
- SLA mặc định 24h · Mục IV tiền · Excel · iOS/Android native · web-bff · ERP.*
- invent `CamIncidentController` / cam-incident DTO
- re-scan demo / crawl CTX (hash skip)

## 10. Acceptance (DoR → Design)

1. packKind=`list` confirmed · changeScope=`edit_page`.
2. Role matrix §3 PASS cho 4 vai · caps từ role-gate.
3. INC-CAP/N write chỉ tuần đường · Pattern B · leave dirty.
4. INC-L scope + FAB/assign CTA đúng vai.
5. INC-D **Giao việc xử lý** chỉ QL_HAT · close ẩn QL_HAT.
6. Không route mới · deep-link product `/van-de/moi` · alias mfeStdUrl chỉ queue.
7. Design: keep L/N/D/sheet · role visibility · CTA · 430px · reviewUrl.
8. QA queued: tuần đường tạo · QL_HAT mọi list+giao · TK/NT xem không giao · Pattern B · leave.

## 11. Handoff

| Role | Packet |
|------|--------|
| Design | keep zones INC-* · role visibility · CTA Giao việc · ẩn close QL_HAT · 430px · reviewUrl |
| SA | Live incidents · Mobile.Bff · DOMAIN-MAP slug/bind peer · list scope filter |
| TL/Dev | Edit Incident* · roleCaps · workFor CTA · no new route |
| QA | §10 AC · e2e khi `/agent-qa*` |

## 12. UNCLEAR (carry)

| id | Owner |
|----|-------|
| UNCLEAR-INC-DOMAIN-ROW | SA — DOMAIN-MAP slug hoặc bind peer `web-rmms-incident` |
| UNCLEAR-INC-ROLE-SOURCE | Dev deps `web-rmms-role-gate` |
| UNCLEAR-INC-LIST-FILTER | SA — BE reporter filter vs client |
| UNCLEAR-INC-CLOSE-VS-ASSIGN | **PO chốt:** ẩn close QL_HAT · Design/SA implement |

## Version meta

`skillVersion=2026.09.05.03` · `schemaVersion=1` · `contentHash=sha256:e515f74ca821b652154473ac30eaec7bb13c8921acf6725b739dc4eb1744b8d1` · `rulesVersion=2026.09.27.1` · `writtenAt=2026-10-01T01:41:00.000Z` · `changeScope=edit_page` · `packKind=list`
