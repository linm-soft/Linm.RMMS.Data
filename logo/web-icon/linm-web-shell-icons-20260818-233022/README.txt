Linm Web Shell icon package
============================

Copy to Linm.Web.Root:

  icons/*              → public/icons/
  manifest.webmanifest → public/

Root icons/ (tab · PWA install — always /icons/*):
  logo.svg, logo.png, logo-64.png, logo-128.png, logo-login.png
  icon-192.png, icon-512.png, icon-512-maskable.png

In-app (login · left rail · about):
  Default: /icons/logo-128.png
  Domain:  /icons/{folder}/logo-128.png when VITE_ICON_FOLDER={folder}

Optional: set "Domain icon folder" to also export icons/{folder}/ for login/nav.

Deploy Root — Home/Navigation read window.__LINM_SHELL_BRANDING__.
