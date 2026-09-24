# SCHEMA — NghiemThu mẫu + chỉ số (Service + BFF + Mobile)

> Domain **Patrol** · `api/v1/patrol/nghiem-thu` · **cấm** invent path · **cấm ERP.***  
> EF: `dotnet ef migrations add Schema_NghiemThuMau` pair Migrations + Api.

## Giữ

`rmms_nghiem_thu`: Code · Status · TemplateType (`mau-01`…`10`) · Route · Zone/Vp · Assignee · InspectedAt · Km · FieldInfo · Note · Media child · tenant.

## Thêm (SA chốt 1 trong 2 — ưu tiên child table)

**Parent**

| Column | Type | Null |
|--------|------|------|
| ResultCode | varchar(16) | yes (draft) |
| ResultNote | varchar(2000) | yes |
| WorkStartedAt | timestamptz UTC | yes |
| WorkEndedAt | timestamptz UTC | yes |

**Child** `rmms_nghiem_thu_score`

| Column | Type |
|--------|------|
| Id | guid |
| NghiemThuId | FK |
| CriterionCode | varchar(32) |
| Verdict | pass / fail / n_a |
| Note | varchar(500) |
| SortOrder | int |

JSON blob trên parent = **cấm** nếu có query/filter theo verdict.

## init-data (mở rộng)

```
Statuses[]          — giữ
TemplateTypes[]     — value + label MAU-10 + criteria[{code,label,slaHint}]
ResultCodes[]       — pass/fail/deduct
```

BFF: catch-all `mobile-bff/api/v1/patrol/nghiem-thu*` · **cấm** controller mới. Files: `files/*` sẵn.

## DTO

`CreateNghiemThuRequest` / `Update` thêm Result* · Work* · `Scores[]`. List rowSub: **label mẫu** (không raw `mau-02`) · ResultCode badge.

## Mobile zones (delta)

| Slug | Delta |
|------|--------|
| `nghiem-thu` | rowSub Label MAU-10 · badge Kết quả |
| `nghiem-thu-create` | picker Label mới · row Kết quả · checklist criteria · attach giữ |
| `nghiem-thu-detail` | bind GET scores · PUT |

Web Field form: **OUT** queue `qlbd-mobile`.

## Validate

- TemplateType ∈ allow-list 10.
- ResultCode ∈ pass/fail/deduct khi status `done`.
- Draft: ResultCode null OK.
- Scores.CriterionCode ∈ catalog của đúng TemplateType.
