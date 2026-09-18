# RUN packet — `sa` · Wave A · `csdl-so-02`

| Field | Value |
|-------|-------|
| roleOnly | `sa` |
| slash | `/agent-sa` |
| packKind | `list` |
| changeScope | `edit_page` |
| chainNext | `team_lead` |
| compactIn | `specs/csdl-so-02/handoff/design-compact.md` |
| compactOut | `specs/csdl-so-02/handoff/sa-compact.md` |
| beRoot | `D:/AI-QLBD/Linm.RMMS.WebService` |

## DoR
Read compactIn + live `CsdlBookEntryEntity`.

## Write
- `specs/csdl-so-02/be/solution-discovery.md` § FormType pack + FormMode↔API + migration note
- compactOut

## MUST
| | |
|--|--|
| API | **giữ** `api/v1/asset/csdl-records?resource=patrol-logs` |
| Widen | `LocationText` nvarchar nullable trên entry |
| Required | `eventAt` + (`locationKm` **hoặc** `locationText`) + `weatherEvent` |
| TZ | `tz_list_and_form` |
| FormMode | list GET · C POST · E PUT · V GET · Copy POST · D soft |
| Migration | **ghi** `Schema_CsdlSo02LocationText` CLI pair — **không** chạy CLI (Dev 4b) |

## Cấm (packet này)
ERP.* · invent path · parent `*Json` · Guid IdCode · chạy `dotnet ef` · e2e · yarn build · implement UI.
