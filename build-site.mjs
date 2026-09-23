import { cp, mkdir, rm } from "node:fs/promises";

const files = [
  "index.html",
  "structural.html",
  "structural.css",
  "geotech.html",
  "geotech.css",
  "hydraulics.html",
  "hydraulics.css",
  "hydraulics-overrides.css",
  "surveying.html",
  "surveying.css",
  "surveying.js",
  "timberfever.html",
  "timberfever.css",
  "style.css",
  "script.js",
];

await rm("dist", { recursive: true, force: true });
await mkdir("dist/.openai", { recursive: true });
for (const file of files) await cp(file, `dist/${file}`);
await cp("assets", "dist/assets", { recursive: true });
await cp(".openai/hosting.json", "dist/.openai/hosting.json");
