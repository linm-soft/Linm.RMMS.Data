# Dev — BE align — login-forgot (Mobile.Bff)

> Status: **done** · Step 4b · **T-BE-FORGOT** verify/keep · **không** `/new-endpoint` RMMS · **không** `/database-migration`  
> T-BE-API **n/a** · T-BE-MIG **n/a** · Auth recovery **live**

| | |
|--|--|
| Repo | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.Bff` |
| Keep | `AuthPasswordRecoveryController` thin proxy · ServiceClient `accessToken` → Auth |
| Paths | `POST mobile-bff/api/v1/auth/forgot-password` · `POST …/auth/reset-password` |
| Downstream | `api/v1/Auth/forgot-password` · `api/v1/Auth/reset-password` |
| Middleware | `AuthPrefixRewriteMiddleware` **skip** 2 recovery path · **cấm** rewrite |
| Cấm | clone `AuthController` · invent `auth/forgot` · ERP.* · fork DTO · app Bearer |
| Build | `dotnet build` `RMMS.Mobile.Bff.csproj` **PASS** · 0 warning · 0 error |
