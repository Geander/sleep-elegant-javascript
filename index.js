const util = require('util');
const sleep = util.promisify(setTimeout);

(async () => {
  console.log('Hello,');
  await sleep(2000);
  console.log('it\'s been 2 seconds,');
  await sleep(2000);
  console.log('bye!');
})();