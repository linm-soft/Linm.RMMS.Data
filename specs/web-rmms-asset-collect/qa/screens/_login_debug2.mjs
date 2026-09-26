import { createRequire } from "node:module";
import { readFileSync, writeFileSync } from "node:fs";

const autoPw = createRequire("D:/AI-Extension/AI-AutoCode/package.json");
const { chromium: cr } = autoPw("playwright");
const rulesCred = JSON.parse(
  readFileSync("D:/AI-Rules/Linm.Development.Rules/e2e.local.json", "utf8"),
);
const user = rulesCred.user;
const password = rulesCred.password;
const base = "http://localhost:9301";
const out = "D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Mobile/.tmp-qa-shots";

const browser = await cr.launch({ headless: true });
const context = await browser.newContext({ viewport: { width: 430, height: 900 } });
const page = await context.newPage();
const net = [];
page.on("response", async (res) => {
  const u = res.url();
  if (/login|token|auth|oauth|signin|connect/i.test(u) || res.status() >= 400) {
    let body = "";
    try {
      body = (await res.text()).slice(0, 300);
    } catch {
      /* ignore */
    }
    net.push({ status: res.status(), u: u.slice(0, 180), body });
  }
});

async function dismissOverlay() {
  for (let i = 0; i < 30; i++) {
    const ov = page.locator(
      "iframe#webpack-dev-server-client-overlay, #webpack-dev-server-client-overlay",
    );
    if (!(await ov.count()) || !(await ov.first().isVisible().catch(() => false))) return false;
    // try close button inside iframe
    const frame = page.frameLocator("iframe#webpack-dev-server-client-overlay");
    const closeBtn = frame.locator("button, [aria-label*=close i], .close").first();
    if (await closeBtn.count()) {
      await closeBtn.click({ force: true }).catch(() => {});
    }
    await page.evaluate(() => {
      document
        .querySelectorAll(
          "iframe#webpack-dev-server-client-overlay, #webpack-dev-server-client-overlay",
        )
        .forEach((el) => el.remove());
    });
    await page.waitForTimeout(400);
  }
  return true;
}

await page.goto(base + "/login", { waitUntil: "networkidle", timeout: 90000 }).catch(() => {});
await page.waitForTimeout(2000);
const hadOverlay = await dismissOverlay();
await page.waitForSelector('input[name="username"]', { timeout: 20000 });
await page.fill('input[name="username"]', user);
await page.fill('input[type="password"]', password);
await page.screenshot({ path: out + "/login2-before.png", fullPage: true });

const [resp] = await Promise.all([
  page.waitForResponse((r) => /login|token|auth|signin|connect/i.test(r.url()), { timeout: 20000 }).catch(() => null),
  page.locator('button[type="submit"]').click({ force: true }),
]);
await page.waitForTimeout(4000);
await dismissOverlay();

const after = await page.evaluate(() => ({
  href: location.href,
  text: (document.body?.innerText || "").slice(0, 600),
  storageKeys: Object.keys(localStorage),
  sessionKeys: Object.keys(sessionStorage),
  cookiesNote: document.cookie.slice(0, 200),
}));
await page.screenshot({ path: out + "/login2-after.png", fullPage: true });

// Also try list which previously worked
await page.goto(base + "/web-rmms-asset-list", { waitUntil: "domcontentloaded", timeout: 60000 });
await page.waitForTimeout(2000);
await dismissOverlay();
const list = await page.evaluate(() => ({
  guest: !!document.getElementById("alGuestGate"),
  title: !!document.getElementById("pageTitle"),
  text: (document.body?.innerText || "").slice(0, 300),
  storageKeys: Object.keys(localStorage),
}));

writeFileSync(
  out + "/login2-debug.json",
  JSON.stringify(
    {
      hadOverlay,
      resp: resp
        ? { status: resp.status(), url: resp.url().slice(0, 200) }
        : null,
      after,
      list,
      net: net.slice(0, 40),
    },
    null,
    2,
  ),
);
await browser.close();
console.log(
  JSON.stringify(
    { hadOverlay, resp: resp ? { status: resp.status(), url: resp.url().slice(0, 160) } : null, after, list, netCount: net.length, net: net.slice(0, 15) },
    null,
    2,
  ),
);
