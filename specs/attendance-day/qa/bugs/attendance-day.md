# QA bugs — attendance-day

| ID | Sev | Status | Note |
|----|-----|--------|------|
| GAP-MOB-ATT-LOG-ID-01 | Must | **CLOSED** | 2026-09-16 `/edit-mobile-feature` · live tap lần chấm trên **Chi tiết ngày công** → toast «Thiếu mã lần chấm. Quay lại ngày công.» dù list có 7 lần. Root iOS: nested `navigationDestination(isPresented:)` capture `attendanceLogId=""`. Mapper từng gán fake UUID làm GET key. Fix dual: iOS `navigationDestination(item: $attendanceLogId)` · row `attendanceId` = live Guid `Id` · **cấm** fake UUID GET. |
