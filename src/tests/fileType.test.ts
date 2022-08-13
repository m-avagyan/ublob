import { equal, throws } from 'assert';

import getFileType from '../functions/fileType';

const MOCKED_BASE64_STRING =
  'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+M9QDwADhgGAWjR9awAAAABJRU5ErkJggg==';

describe('getting the file type', () => {
  it('should throw an error if the parameter is not a string', () => {
    const error = new Error('The parameter must be a blob string.');

    // @ts-ignore
    throws(() => getFileType(1), error);
  });

  it('should return the file type', () => {
    const fileType = getFileType(MOCKED_BASE64_STRING);

    equal(fileType, 'png');
  });
});