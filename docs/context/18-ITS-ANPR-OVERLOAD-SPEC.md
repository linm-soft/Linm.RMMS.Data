# RMMS — P2 Spec: ITS ANPR · Cục Đăng kiểm · Xác nhận lỗi

> **SSOT giai đoạn 2 (V2/P2)** cho slug `its-anpr-overload`.  
> **Demo P1 (UI only):** `/demo/p/its-anpr-overload` · `Linm.RMMS.Demo/.../its-anpr-overload.html`  
> **Feature context:** [`features/its-anpr-overload.md`](features/its-anpr-overload.md)  
> **Khớp:** [`09-PLAN-P1-V2.md`](09-PLAN-P1-V2.md) §3 · [`15-SCREEN-AI-MAP.md`](15-SCREEN-AI-MAP.md) · [`16-ITS-…`](16-ITS-TRAFFIC-OBJECT-DETECTION-DESIGN.md) (≠ biển báo/cọc) · [`04-PROGRAMS.md`](04-PROGRAMS.md) Phase 2  
> **≠** `its-traffic-detect` · `toc` (ùn tắc P3) · `ai-vision` (mặt đường)

---

## 1. Mục tiêu Phase 2

Chuyển demo HTML (localStorage) → **BE + MFE** chạy thật trên tuyến pilot:

1. **Camera / WIM** gửi sự kiện: biển số · tốc độ · (optional) trọng lượng cân động · camera Km · thời điểm UTC  
2. Hệ thống **gọi Cục Đăng kiểm** (hoặc adapter registry) lấy: số trục · cấu hình trục · GVW · payload · chủ xe · hạn kiểm  
3. **Rule engine** đề xuất lỗi → **HITL Confirm / Dismiss** → tạo **Vấn đề / Incident** (hoặc biên bản tải trọng)

| | P1 (đã có) | **P2 (spec này)** |
|--|------------|-------------------|
| UI | Demo Kind B+D | MFE AiVision / Incident |
| Data | `localStorage` seed | Postgres + events |
| Registry | Mock `REGISTRY` map | Adapter API Cục Đăng kiểm / cache |
| ANPR | Simulate | Ingest từ camera/edge |
| Confirm | Toast mock | POST → Incident IdCode |

---

## 2. Persona & outcome

| Persona | Việc |
|---------|------|
| ITS ops / thanh tra tải | Xem feed · lọc Critical · Confirm lỗi |
| Tuần đường | Theo dõi camera Km trên tuyến |
| BA / pháp lý | Chốt mã lỗi SPEED / OVERLOAD_* · ngưỡng |

**Outcome:** `anpr_event` Pending → Confirmed → `incident` (severity theo rule) · audit HITL.

**IdCode:** `ANPR-YYYYMMDD-NNNN` (event) · Incident theo rule hiện có (`VI-*` / `SC-*` — chốt BA).

---

## 3. Luồng nghiệp vụ (P2)

```
Camera ANPR (+ WIM nếu có)
    → POST /api/v1/its/anpr/events
    → Persist anpr_events (Pending)
    → Lookup Registry (Cục Đăng kiểm adapter · cache TTL)
    → RuleEvaluate (SPEED · OVERLOAD_GVW · OVERLOAD_PAYLOAD · NO_REGISTRY)
    → MFE list + detail (severity ok|warn|critical)
HITL
    → Confirm → create Incident + status Confirmed
    → Dismiss → status Dismissed + note
```

---

## 4. UI / Màn hình (align demo)

| Screen | Kind | Zones (parity demo) |
|--------|------|---------------------|
| Feed camera | **B** | KPI · filter (camera/status/plate) · grid STT |
| Tra cứu & lỗi | Panel | ① Camera · ② Đăng kiểm · ③ Violations |
| Xác nhận | **D** | Slideout Confirm / Bỏ qua · note HITL |

**Checklist Signed (demo → P2 verify):**

- [ ] Camera gửi biển số + tốc độ (+ WIM)  
- [ ] Tra cứu Cục Đăng kiểm (trục · tải)  
- [ ] Hệ thống đề xuất lỗi tốc độ / quá tải  
- [ ] HITL xác nhận / bỏ qua → Incident thật  

---

## 5. API (P2)

Prefix: `api/v1/` · JWT · `company_id` · `X-Company-Id`.

| Method | Path | Mô tả |
|--------|------|--------|
| POST | `/its/anpr/events` | Ingest từ camera/edge (idempotent theo `sourceEventId`) |
| POST | `/its/anpr/events/bulk` | Offline / batch |
| GET | `/its/anpr/events` | List + filter plate/camera/status/from–to |
| GET | `/its/anpr/events/{id}` | Detail + registry snapshot + violations |
| POST | `/its/anpr/events/{id}/lookup` | Force re-fetch registry |
| POST | `/its/anpr/events/{id}/confirm` | HITL Confirm → Incident |
| POST | `/its/anpr/events/{id}/dismiss` | HITL Dismiss + note |
| GET | `/registry/vehicles/{plate}` | Proxy/cache Cục Đăng kiểm (internal) |

**Events (bus):** `its.anpr.captured` · `its.anpr.evaluated` · `its.anpr.confirmed` · `incident.created` (từ Confirm).

---

## 6. Rule engine (SSOT mã lỗi)

| Code | Điều kiện (mặc định demo → chốt BA P2) | Severity gợi ý |
|------|----------------------------------------|----------------|
| `SPEED` | `speedKmh` > `camera.speedLimit` | warn; **critical** nếu vượt ≥ 20 km/h |
| `OVERLOAD_GVW` | `wimKg` > `registry.gvwMaxKg` | **critical** |
| `OVERLOAD_PAYLOAD` | `wimKg - curbWeightKg` > `payloadMaxKg` | warn / critical (BA) |
| `NO_REGISTRY` | Lookup miss / timeout | warn — bắt buộc HITL |

Cấm hardcode ngưỡng trong MFE — config tenant hoặc `its.anpr_rule_config`.

---

## 7. Database (design)

| Table | Key fields |
|-------|------------|
| `its.anpr_cameras` | `camera_code` · route · km · `speed_limit` · company |
| `its.anpr_events` | IdCode · plate · speed · wim_kg · camera_id · status · confidence · captured_at UTC |
| `its.vehicle_registry_cache` | plate · axle_* · gvw · payload · owner · fetched_at · ttl |
| `its.anpr_violations` | event_id · code · label · severity |
| Link | `incident_id` nullable sau Confirm |

EF: Schema migration CLI pair · UTC convention · tenant filter.

---

## 8. Tích hợp Cục Đăng kiểm

| Mục | P2 yêu cầu |
|-----|------------|
| Adapter | `IVehicleRegistryClient` — HTTP/SOAP theo hợp đồng thật |
| Cache | TTL (vd 24h) · stale-while-revalidate |
| Fail | `NO_REGISTRY` + retry queue · **không** auto-Confirm |
| PII | Chủ xe / biển — theo policy tenant · audit log |

---

## 9. Plan P2 (gợi ý — gắn V2-C / V2-D)

| Sprint gợi ý | Việc |
|--------------|------|
| P2-ANPR-A | Schema + ingest API + list GET · seed camera |
| P2-ANPR-B | Registry adapter + cache + rule evaluate |
| P2-ANPR-C | MFE parity demo · Confirm → Incident |
| P2-ANPR-D | WIM camera live · UAT tuyến pilot · Signed checklist |

Gate: Signed demo `its-anpr-overload` + BA chốt rule → `/qlbd-align-mfe`.

---

## 10. Definition of Done — P2

- [ ] Ingest event thật (hoặc fixture CI) → DB  
- [ ] Lookup registry (staging mock hoặc sandbox Cục) trả trục · GVW  
- [ ] Rule engine ra đúng mã lỗi so với bảng §6  
- [ ] Confirm tạo Incident + permission  
- [ ] Dismiss không tạo Incident · có note  
- [ ] Demo checklist 4/4 map sang UAT  
- [ ] `dotnet build` + MFE build PASS · EF Schema pair  

---

## 11. Gaps

| ID | Mô tả | Phase |
|----|-------|-------|
| GAP-ANPR-01 | BE MISSING (demo LS) | **P2** |
| GAP-ANPR-02 | Registry mock → API thật | **P2** |
| GAP-ANPR-03 | Confirm → Incident | **P2** |
| GAP-ANPR-04 | Hợp đồng / credential Cục Đăng kiểm | Legal + P2 |
| GAP-ANPR-05 | ANPR model edge (OCR biển) vs vendor camera | P2.1 optional |
| GAP-ANPR-06 | Map pin camera + event (GIS) | P2 backlog |

---

## 12. Tài liệu / demo

| Artifact | Path |
|----------|------|
| Demo HTML | `Linm.RMMS.Demo/src/demo/ai-vision/its-anpr-overload.html` |
| Seed/rules | `.../js/its-anpr-overload-data.js` |
| Catalog | slug `its-anpr-overload` |
| Feature | `features/its-anpr-overload.md` |
| Plan P1/P2 | `09-PLAN-P1-V2.md` §3.2 · §3.5 · §4 |
