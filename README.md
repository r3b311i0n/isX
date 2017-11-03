# Install

```bash
npm i -g isx-cli
```

# Usage

```bash
isx-cli 9
```

#### Output

```bash
is9.js
```

```js
'use strict';

module.exports = function isX(operator) {
    const X = 9;
    if (typeof operator == 'number') {
        return operator === X;
    }
    else {
        return false;
    }
};
```

```js
const isNine = require('./is9');
// import * as isNine from './is9';

isNine(9); // => true

isNine('nine'); // => false

isNine(100); // => false

isNine(Symbol(9)); // => false
```
