import { chromium } from "playwright";
import { readFileSync, writeFileSync } from "fs";
const cred=JSON.parse(readFileSync("D:/AI-Rules/Linm.Development.Rules/e2e.local.json","utf8"));
const b=await chromium.launch({headless:true});
const p=await b.newPage();
const lines=[];
p.on("request", r=>{ if(/auth|login|patrol|journal/i.test(r.url())) lines.push("REQ "+r.method()+" "+r.url()); });
p.on("response", async r=>{
  if(/auth|login|patrol|journal/i.test(r.url())) {
    let body="";
    try { body=(await r.text()).slice(0,180); } catch {}
    lines.push("RESP "+r.status()+" "+r.url()+" :: "+body);
  }
});
await p.goto("http://localhost:9301/login",{waitUntil:"domcontentloaded"});
await p.fill('input[name="username"]', cred.user);
await p.fill('input[type="password"]', cred.password);
await p.click('button[type="submit"]');
await p.waitForTimeout(2500);
lines.push("AFTER_LOGIN url="+p.url()+" body="+((await p.locator("body").innerText()).slice(0,120)));
await p.goto("http://localhost:9301/web-rmms-mobile-b",{waitUntil:"networkidle", timeout:60000});
await p.waitForTimeout(2500);
lines.push("AFTER_B url="+p.url()+" body="+((await p.locator("body").innerText()).slice(0,300)));
writeFileSync("net-trace.txt", lines.join("\n"), "utf8");
await b.close();
console.log("wrote", lines.length);
