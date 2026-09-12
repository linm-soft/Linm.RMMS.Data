# PO — Requirement — patrol-offline (mobile list · delta apply check-ins)

| Field | Value |
|-------|-------|
| feature | `patrol-offline` |
| title | [Mobile] Hàng đợi mất sóng |
| this role | `po` · `/agent-po-mobile` |
| changeScope | **`edit_page`** · gap=`offline_sync_apply_checkins` |
| packKind | **`list`** (confirm keep · offline queue local-first + **replay check-in**) |
| stack | `native_dual` |
| thisAction | **List Dữ liệu lưu trữ** `#sc-patrol-offline` only · sync = **replay** pending `checkIn` → POST check-ins · **cấm** gộp check-in live / incident form |
| status | `confirmed` (autoApprove=ON) |
| requestSource | run packet `task_d268d5b7` · `/agent-qldb-workflow-mobile` · roleOnly=`po` · `/agent-po-mobile` |
| autoApprove | **ON** — Design/SA/Review tự confirm khi tới lượt · turn này **không** chain |
| e2eQa | ON khi QA · `yarn e2e-qa-mobile` · **cấm** e2e / start:std ở role PO |
| prior | data_analy **confirmed** · compact `handoff/data_analy-compact.md` · control-hint + real-data + bff + action-tree · contentHash `sha256:patrol-offline-delta-apply-checkins-20260912` · bffContentHash `sha256:patrol-offline-bff-apply-checkins-20260912` · **hash skip** · **cấm** re-scan demo |
| priorRequirement | keep UI/zones/entry/kit từ `task_eefc9116` · **delta** sync + payload + enqueue |
| `devSlash` | `/agent-dev-ios` + `/agent-dev-android` |
| updatedAt | `2026-09-12T14:30:00.000Z` |
| taskId | `task_d268d5b7` |

**Cấm:** invent `GET …/queue` / `PatrolOfflineController` · clear queue sau offline-batch không verify DB · ERP.* · `mfeStdUrl` · WebView HTML · native alert · re-seed demo sau sync · start sibling `pending_confirm` · Step 4b `/new-endpoint` · clear incident khi chưa có API replay.

## 1. Goal

Màn **Dữ liệu lưu trữ** native dual: xem hàng đợi local khi mất sóng; khi có mạng **replay** từng điểm tuần pending → `POST …/patrol/sessions/{sessionId}/check-ins` (apply DB thật). Optional `POST …/integration/sync/offline-batch` = **receipt** sau replay OK — **không** thay thế apply. Persona: Tuần đường. App chỉ `{BffBase}/mobile-bff/api/v1/…`.

**1 action = 1 feature.** Slug `patrol-offline` = list `#sc-patrol-offline` `DES-MOB-PAT-OFFLINE`. **Cấm** gộp `#sc-patrol-home` / `#sc-inc-form` (`GAP-MOB-ACT-01`). **Không** child form/sheet (`GAP-MOB-ACT-02`=none).

## 2. changeScope `edit_page` · Current vs New

| Aspect | Current (shipped) | New (DoD) |
|--------|-------------------|-----------|
| changeScope | list + cleanup_mock | `edit_page` · gap `offline_sync_apply_checkins` |
| Tap **Đồng bộ** | `POST offline-batch` → `clearPending` | Replay từng `kind=checkIn` → `POST patrol/sessions/{sessionId}/check-ins` · xóa item **chỉ khi** 2xx · **không mất** fail |
| OfflineBatch | stub Apply N · không ghi PatrolCheckIns | Optional receipt **sau** OK · `RecordCount` = số apply 2xx · **không** thay apply |
| Queue payload | display-only | **+** `sessionId` + wire `CreatePatrolCheckInRequest` fields |
| Enqueue (sibling writer) | mất sessionId/body | Persist full payload dual iOS/Android |
| Incident rows | filter · sync cùng clear | **P2** keep pending · **cấm** clear khi chưa replay incident |
| UI zones | `#sc-patrol-offline` | **unchanged** — no layout redesign |
| Step 4b | N/A | **N/A** — reuse live endpoints · **cấm** invent |

PackKind **list** keep. Visual SSOT = dual HTML `#sc-patrol-offline` — Design **keep** prototype (zones unchanged).

## 3. DoD (đo được)

1. Dual native cùng zone `#sc-patrol-offline`: nav **Trang Chủ** · title **Dữ liệu lưu trữ** · trailing **Đồng bộ** · segment 2 · banner yếu sóng · rich cards — **không** redesign layout.
2. Segment **0** Điểm tuần · **1** Sự cố — **cấm** đổi thứ tự (`GAP-TAB-01`).
3. Banner `offline.banner.weak` khi pending>0 trên tab · ẩn khi empty.
4. Card display (title · location · status **Chờ gửi** · time · content) keep prior SSOT copy dual.
5. **Sync (HARD delta):** Tap **Đồng bộ** khi online → for each pending `checkIn` có `sessionId` + body: `POST mobile-bff/api/v1/patrol/sessions/{sessionId}/check-ins` body PascalCase `CreatePatrolCheckInRequest` · remove local item **chỉ** khi HTTP 2xx · toast **Đã đồng bộ N bản ghi** với N = số apply OK · **cấm** clear-all · **cấm** native alert.
6. Sync offline / fail network → toast lỗi · **giữ** toàn bộ queue · **cấm** clear.
7. Partial fail → giữ item lỗi · tiếp tục item còn lại (hoặc stop-on-fail OK nếu Dev chọn — **cấm** xóa fail).
8. Optional sau ≥1 apply OK: `POST integration/sync/offline-batch` receipt (`Partner` · `DeviceId` · `BatchId` · `RecordCount`=N synced · `Note`) — fail receipt **không** rollback local đã xóa OK · **không** clear thêm.
9. Segment Sự cố: filter only · sync **không** xóa incident (P2 · `incident.incidents.create` chưa apply).
10. Entry reuse (cấm reimplement hub): Home tile **Lưu trữ** · Me **Hàng đợi mất sóng** · patrol-home nav Đồng bộ → cùng `#sc-patrol-offline` (nav stub OK P1 · GAP-MOB-ACT-PAT-OFFLINE-01 Defer).
11. Badge Me: `offlineCount` local · **cấm** GET queue.
12. Local store UserDefaults / SharedPreferences|Room — payload **đầy đủ** cho replay (§5).
13. Enqueue writer (sibling `SubmitPatrolCheckInUseCase` / Android parity): persist `sessionId` + planPointLabel · route · lat · lng · accuracyM · distanceToPlanM · matchOk · content · photoLocalIds — **in scope Dev delta** của pack này (cùng feature slug · không start sibling confirm).
14. Kit: `LinmSegment` · `LinmBanner` · `LinmToast` · TopBar text leading/trailing keep prior `implement_kit` · **cấm** invent LinmRichCard tên mới.
15. App chỉ `{BffPrefix}` · Bearer Keychain / Encrypted · **cấm** `:5101` · ERP.*.
16. Permissions: replay = `patrol.sessions.update` · incident P2 = `incident.incidents.create` · **không** invent BFF permission mới.
17. Step 4b **N/A** · **cấm** `PatrolOfflineController` · **cấm** invent GET queue.
18. Dev/QA (role sau): build + Maestro — **cấm** ở PO.

## 4. CTX / DEM / DI inventory

| ID | Path | Loại |
|----|------|------|
| CTX-01 | `docs/context/features/patrol-offline.md` | list · local queue |
| DEM | `specs/patrol-offline/ui/prototype/{ios,android}/index.html` `#sc-patrol-offline` | **keep** zones · `DES-MOB-PAT-OFFLINE` |
| STR | `docs/mobile-strings.json` `offline.*` | VN SSOT |
| MAP | `docs/html-to-native-map.md` | Segment / Banner / Toast / ListRow / TopBar |
| DI | — | **no Excel** |
| DA-01 | `specs/_data-analy/patrol-offline-control-hint.md` | § Delta · controlHint |
| DA-02 | `specs/_data-analy/patrol-offline-real-data.md` | samples · anti-patterns |
| DA-03 | `specs/_data-analy/patrol-offline-bff-endpoints.md` | check-ins + offline-batch |
| DA-04 | `specs/_data-analy/patrol-offline-action-tree.md` | owner me · reuse home |
| IOS / AND / BFF / BE | abs paths STATUS | native_dual · proxy · WebService Patrol+Integration |

## 5. controlHint (PO chốt — UI unchanged · payload NEW)

| Field | VN | controlHint | Required | Kit | Notes |
|-------|----|-------------|----------|-----|-------|
| navBack | Trang Chủ | Back text | * | `LinmTopBar` text leading | pop |
| title | Dữ liệu lưu trữ | Text | * | TopBar title | |
| syncBtn | Đồng bộ | TextButton | * | TopBar text trailing | **replay** |
| segCheckIn | Điểm tuần mất sóng | Segment | * | `LinmSegment` 0 | filter checkIn |
| segIncident | Sự cố mất sóng | Segment | * | `LinmSegment` 1 | filter incident |
| offlineBanner | Tín hiệu yếu — … | Banner warn | * | `LinmBanner` | ẩn khi empty |
| cardTitle / location / time / status | … | display | * | rich→ListRow | keep |
| items[].sessionId | — | Hidden | * checkIn | local | **NEW** replay key |
| items[].planPointLabel | — | Hidden | * checkIn | local | body |
| items[].route | — | Hidden | * checkIn | local | body |
| items[].lat / lng | — | Hidden | * checkIn | local | body |
| items[].accuracyM | — | Hidden | * checkIn | local | body |
| items[].distanceToPlanM | — | Hidden | * checkIn | local | body |
| items[].matchOk | — | Hidden | * checkIn | local | body |
| items[].content | — | Hidden | | local | body |
| items[].photoLocalIds | — | Hidden | | local | guids |
| toastSync | Đã đồng bộ N bản ghi | Toast | * | `LinmToast` | N = apply OK |

UNCLEAR field = **none**.

## 6. BFF (PO chốt — **cấm** invent)

| Action | Method | Path | In slug? |
|--------|--------|------|----------|
| Replay check-in | POST | `patrol/sessions/{sessionId}/check-ins` | **yes** — apply DB · **primary** |
| Sync receipt | POST | `integration/sync/offline-batch` | **yes** — optional after OK |
| Queue list / badge | — | — | **no** — local · **cấm** GET |
| Check-in live / incident form | — | sibling | **no** |

Wire body (PascalCase): `PlanPointLabel` · `Route` · `Lat` · `Lng` · `AccuracyM` · `DistanceToPlanM` · `MatchOk` · `Content` · `PhotoLocalIds`.

## 7. Open questions — PO chốt

| ID | Decision |
|----|----------|
| GAP-OFFLINE-APPLY-01 | Sync = replay check-ins 2xx-only remove · **không** clear-all sau offline-batch stub |
| GAP-OFFLINE-APPLY-02 | offline-batch = optional receipt · RecordCount = synced · **không** apply DB |
| GAP-OFFLINE-APPLY-03 | Enqueue persist full sessionId+body dual |
| GAP-OFFLINE-APPLY-04 | Incident keep pending P2 · **cấm** clear trên sync |
| GAP-OFFLINE-APPLY-05 | UI zones unchanged · Design keep prototype |
| GAP-F-OFFLINE-01 | Keep: **cấm** re-seed demo sau sync OK · anti-pattern real-data |
| Queue GET / Step 4b / ERP.* | **Confirm cấm** |
| packKind | **Confirm `list`** |
| GAP-MOB-ACT-PAT-OFFLINE-01 | patrol-home nav Đồng bộ wire Defer P1 stub OK |

UNCLEAR = **none** — không AskQuestion.

## 8. Screens (REQUIRED)

| Surface | Demo | Pattern | FormMode | Actions **this** `{feature}` | `devSlash` |
|---------|------|---------|----------|------------------------------|------------|
| List Dữ liệu lưu trữ | `#sc-patrol-offline` `DES-MOB-PAT-OFFLINE` | **List** | none | Appear local · filter · **replay** POST check-ins · optional receipt · toast | `/agent-dev-ios` + `/agent-dev-android` |

**Không** trên pack: check-in live · incident form · conflict UI · invent queue API · layout redesign.

## 9. Device AC (REQUIRED)

| ID | Behavior | AC |
|----|----------|-----|
| AC-D-01 | Offline | Mở local · Sync không mạng → toast lỗi · **giữ** queue · **cấm** clear · **cấm** native alert |
| AC-D-02 | GPS | **N/A** list (payload đã có từ enqueue) |
| AC-D-03 | Leave dirty | **N/A** |
| AC-D-04 | Native alert | **Cấm** UIAlert / AlertDialog / window.alert |
| AC-D-05 | Keyboard | **N/A** |
| AC-D-06 | Safe area | Nav + segment + cards không đè inset |
| AC-D-07 | Biometric | **N/A** |
| AC-D-08 | Signal | Banner yếu sóng SSOT · **cấm** «Có mạng» |
| AC-D-09 | Token | Bearer Keychain/Encrypted · chỉ `{BffPrefix}` |
| AC-D-10 | Tab/swipe | Shell tab không đổi · segment 0↔1 · swipe-back / predictive back |
| AC-D-11 | Camera/push | **N/A** |
| AC-T-01 | Type | Segment/label **13** (`GAP-TYP-01`) |
| AC-F-01 | Appear | Load local pending · EmptyChrome khi 0 · **không** GET queue |
| AC-F-02 | Sync OK | Per-item POST check-ins 2xx → remove · toast N · optional receipt · **không** re-seed |
| AC-F-03 | Sync fail / partial | Toast · **giữ** fail items · **cấm** clear-all |
| AC-F-04 | Incident tab | Filter only · sync **không** xóa incident |
| AC-F-05 | Payload | Missing sessionId/body → item **không** silent-drop as success · toast/keep fail |
| AC-F-06 | Dual parity | iOS+Android cùng behavior + zones |
| AC-F-07 | Watermark | **Cấm** Gói N / gen realapp / device label |

## 10. Leave / alert

| Case | UI |
|------|-----|
| Dirty leave | N/A |
| Sync fail / offline | `LinmToast` · giữ queue |
| Sync success | Toast **Đã đồng bộ N bản ghi** (N=apply OK) |
| Back | pop |

## 11. Out of scope

- Layout redesign / new zones
- Invent GET queue / new BE endpoint / ERP.*
- Incident replay API (P2 keep pending)
- Conflict UI · per-item delete UI (P2)
- Check-in live / incident form screens
- `mfeStdUrl` · yarn start:std · e2e ở PO
- PrivacyInfo / store submit (`/review-app-submit`)

## 12. KPI

Mất sóng không mất nhật ký: queue local + replay apply thật vào PatrolCheckIns. DoD = N toast = số POST 2xx — **không** clear mù sau stub offline-batch.

## 13. Handoff → Design

| Field | Value |
|-------|-------|
| feature / packKind | `patrol-offline` / **`list`** |
| phase_from / phase_to | po **confirmed** → design pending (keep prototype) |
| STATUS | `specs/patrol-offline/STATUS.md` |
| compact | `handoff/po-compact.md` |
| controlHint / UNCLEAR | §5 · none |
| Screens | List `#sc-patrol-offline` · zones **unchanged** |
| Delta note | Design **keep** UI · annotate sync = replay (toast N=apply OK) · **không** vẽ GET queue |
| Next slash | `/agent-design-mobile` |
| Chain this turn | **không** (roleOnly=po) |
| autoApprove | ON khi Design tới lượt |
| e2eQa | queued QA · **cấm** e2e PO |

## Version meta (REQUIRED)

| Field | Value |
|-------|-------|
| skillId | agent-po-mobile |
| skillVersion | 2026.08.19.29 |
| schemaVersion | 1 |
| workflowVersion | 2026.08.19.29 |
| rulesVersion | 2026.08.19.34 |
| generatedAt | 2026-09-12T14:30:00.000Z |
| versionGate | rechecked |
| contentHash | sha256:patrol-offline-delta-apply-checkins-20260912 |
| bffContentHash | sha256:patrol-offline-bff-apply-checkins-20260912 |
| realDataHash | sha256:patrol-offline-real-data-apply-checkins-20260912 |

---
<!-- Version meta: skillId=agent-po-mobile skillVersion=2026.08.19.29 schemaVersion=1 workflowVersion=2026.08.19.29 rulesVersion=2026.08.19.34 versionGate=rechecked -->
