# ublob

Helper module for working with files.

## Installation

```bash
npm install ublob --save
```

or

```bash
yarn add ublob
```

## Usage

- `toBase64`: convert file to base 64 string

```typescript
import { toBase64 } from "ublob";

toBase64(file)
  .catch((error) => console.log(error))
  .then((blob) =>
    // set blob data...
  );
```

- `getFileType`: getting the file type

```typescript
import { getFileType, toBase64 } from "ublob";

toBase64(file)
  .catch((error) => console.log(error))
  .then((blob) =>
    const fileType = getFileType(blob);
    // set file type to your state
  );
```

- `open`: open blob url in browser new tab

```typescript
import { open } from "ublob";

const handleOpen = (blob) =>
  open(blob, {
    title: "Ublob PDF",
    width: "100%",
    height: "100%",
  });
```

- `getAvailableFileTypes`: getting the available file types

```typescript
import { getAvailableFileTypes } from "ublob";

const availableFileTypes = getAvailableFileTypes();
// use this list where you want
```

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## Author

**Martik Avagyan**

- Website: [martikavagyan.com](https://martikavagyan.com)
- Twitter: [@martikavagyan](https://twitter.com/martikavagyan)
- GitHub: [@m-avagyan](https://github.com/m-avagyan)

## License

[MIT](https://choosealicense.com/licenses/mit/)
