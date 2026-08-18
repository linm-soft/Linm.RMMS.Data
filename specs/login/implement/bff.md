# Dev — BE align — login (Mobile.Bff)

> Status: **done** · Step 4b · **không** `/new-endpoint` · **không** `/database-migration`  
> T-BE-API **n/a** · T-BE-MIG **n/a** · **T-BE-MW** done

| | |
|--|--|
| Repo | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.Bff` |
| Change | Copy `ContractWindowDefenseMiddleware` từ Web BFF · `UseAuthentication` → `UseAuthorization` → MW → `MapControllers` |
| Skip | `/auth/` · `session-window` · `/health` · `/swagger` |
| Envelope | `code=CONTRACT_WINDOW_CLOSED` · `forceLogout:true` · message Web copy — **cấm** đổi |
| Build | `dotnet build` **PASS** 0 warning |
