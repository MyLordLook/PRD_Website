import fs from "fs";
import path from "path";

const routes = ["products", "about", "contact"];

const distIndex = path.resolve("dist/index.html");

if (!fs.existsSync(distIndex)) {
  throw new Error("dist/index.html was not found. Run the Vite build first.");
}

const indexHtml = fs.readFileSync(distIndex, "utf8");

for (const route of routes) {
  const routeDir = path.resolve("dist", route);
  const routeIndex = path.join(routeDir, "index.html");

  fs.mkdirSync(routeDir, { recursive: true });
  fs.writeFileSync(routeIndex, indexHtml);

  console.log(`Created ${routeIndex}`);
}