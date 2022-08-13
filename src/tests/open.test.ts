import { throws } from 'assert';

import open from '../functions/open';

const MOCKED_NOT_SUPPORTED_BASE64_STRING =
  'data:not/supported;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+M9QDwADhgGAWjR9awAAAABJRU5ErkJggg==';

describe('opening a file', () => {
  it('should throw an error if the parameter is not a string', () => {
    const error = new Error('The parameter must be a blob string.');

    // @ts-ignore
    throws(() => open(1), error);
  });

  it('should throw an error if the file type is not supported', () => {
    const error = new Error('The file type is not supported.');

    throws(() => open(MOCKED_NOT_SUPPORTED_BASE64_STRING), error);
  });
});
