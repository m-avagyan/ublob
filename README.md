## Ublob

**Helper module for working with files.** <br />
Working with files on JavaScript/TypeScript is very easy if you are using Ublob!

**Author**

- name: _Martik Avagyan_
- email: _<martikavagyan1@gmail.com>_
- github: _[m-avagyan](https://github.com/m-avagyan)_

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

- `getFileType`: getting the file type

```javascript
import { getFileType, toBase64 } from 'ublob';

toBase64(file)
  .catch((error) => console.log(error))
  .then((blob) =>
    const fileType = getFileType(blob);
    // set file type to your state
  );
```

- `open`: open blob url in browser new tab

```javascript
import { open } from "ublob";

const handleOpen = (blob) =>
  open(blob, {
    title: "Ublob PDF",
    width: "100%",
    height: "100%",
  });
```

- `getAvailableFileTypes`: getting the available file types

```javascript
import { getAvailableFileTypes } from "ublob";

const availableFileTypes = getAvailableFileTypes();
// use this list where you want
```

---

**Copyright (c) 2022 [Martik Avagyan](https://github.com/m-avagyan)**
