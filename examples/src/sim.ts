let project = process.argv[2];
async function main() {
  let mod = await import(`./projects/${project}.ts`);
  mod.default.sim();
}

main();
