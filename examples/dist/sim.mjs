import {
  __glob
} from "./chunk-4UEJOM6W.mjs";

// import("./projects/**/*.ts") in src/sim.ts
var globImport_projects_ts = __glob({
  "./projects/calc.ts": () => import("./calc-BIHBNQQC.mjs"),
  "./projects/fib.ts": () => import("./fib-MU4O45GB.mjs")
});

// src/sim.ts
var project = process.argv[2];
async function main() {
  let mod = await globImport_projects_ts(`./projects/${project}.ts`);
  mod.default.sim();
}
main();
