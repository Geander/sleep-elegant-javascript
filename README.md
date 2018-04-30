## Sleep elegant for JavaScript!

Here's a cool way to make your javascript code sleep.

Using async/await, promisify and setTimeout.

Works on ECMAScript 2017 (ES8) or higher.

### Usage:

```js
const util = require('util');
const sleep = util.promisify(setTimeout);

(async () => {
  await sleep(2000);
  console.log('Hi!');
})();
```

### Run example:
> npm i

> node index.js