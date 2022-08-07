## Ublob

**Helper module for working with files.** <br />
Working with files on JavaScript is very easy if you are using Ublob!

## Getting started

**Installation**

- `npm install ublob` or `yarn add ublob`

**Example**

- `toBase64`: convert file to base 64 string

```javascript
import { toBase64 } from 'ublob';

toBase64(file)
  .catch((error) => console.log(error))
  .then((blob) =>
    // set blob data...
  );
```

---

**Copyright (c) 2022 [Martik Avagyan](https://github.com/m-avagyan)**
