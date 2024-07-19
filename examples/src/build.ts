import clipboard from 'copy-paste';

let project = process.argv[2];
async function main() {
  let { build } = await import(`./projects/${project}.ts`);
  let json = JSON.stringify(build);
  console.log(json);
  clipboard.copy(json);
  console.log('\ncopied to clipboard!');
}

main();
